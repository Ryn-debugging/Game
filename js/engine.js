/**
 * ADMIN DADAKAN: Grup RT — js/engine.js (v2.0 Edisi Gaul & Visual Upgrade)
 * Core Game Engine untuk WargaChat Simulator, Visual Novel Cutscene,
 * Photo Cards, Typing Bubble Animasi, Emoji Reactions, Screen Shake,
 * Manajemen Indikator (0-100), Relasi Karakter, Arsip, Save/Load, & 4 Ending.
 */

class AdminDadakanEngine {
    constructor() {
        this.STORAGE_META_KEY = "admin_dadakan_meta_v2";
        this.STORAGE_SAVE_PREFIX = "admin_dadakan_save_slot_";
        this.STORAGE_FONT_KEY = "admin_dadakan_font_size";

        this.meta = this.loadMeta();
        this.state = this.createInitialState();
        this.chatSpeed = "normal"; // "normal" | "fast" | "instant"
        this.fontSize = this.loadFontSize(); // "normal" | "large"
        this.isAnimatingChat = false;
        this.skipRequested = false;
        this.cutsceneQueue = [];
        this.cutsceneCallback = null;
        this.typingBubbleEl = null;
    }

    createInitialState() {
        return {
            screen: "menu",
            eventIndex: 0,
            day: 1,
            phase: "Pagi",
            time: "07:15",
            battery: 96,
            bg: "kamar_dika",
            featuredChar: "dika",
            ketenangan: 70,
            kepercayaan: 50,
            tekanan: 20,
            relasi_rt: 50,
            relasi_siti: 50,
            relasi_budi: 50,
            relasi_roni: 50,
            flags: {},
            chatHistory: [],
            dayLogs: { 1: [], 2: [], 3: [] },
            runArchives: [],
            runStickers: []
        };
    }

    loadMeta() {
        try {
            const raw = localStorage.getItem(this.STORAGE_META_KEY) || localStorage.getItem("admin_dadakan_meta_v1");
            if (raw) {
                const parsed = JSON.parse(raw);
                return {
                    unlockedArchives: parsed.unlockedArchives || [],
                    unlockedStickers: parsed.unlockedStickers || [],
                    unlockedEndings: parsed.unlockedEndings || []
                };
            }
        } catch (e) {
            console.warn("LocalStorage meta read warning:", e);
        }
        return {
            unlockedArchives: [],
            unlockedStickers: [],
            unlockedEndings: []
        };
    }

    saveMeta() {
        try {
            localStorage.setItem(this.STORAGE_META_KEY, JSON.stringify(this.meta));
        } catch (e) {
            console.warn("LocalStorage meta write warning:", e);
        }
    }

    loadFontSize() {
        try {
            return localStorage.getItem(this.STORAGE_FONT_KEY) || "normal";
        } catch (e) {
            return "normal";
        }
    }

    applyFontSize(size) {
        this.fontSize = size;
        const frame = document.getElementById("app-phone-frame");
        if (frame) {
            frame.classList.toggle("font-large", size === "large");
        }
        document.querySelectorAll("[data-fontsize]").forEach((b) => {
            b.classList.toggle("active", b.getAttribute("data-fontsize") === size);
        });
        try {
            localStorage.setItem(this.STORAGE_FONT_KEY, size);
        } catch (e) {}
    }

    clamp(val) {
        return Math.max(0, Math.min(100, Math.round(val)));
    }

    getSpeedDelay(baseMs) {
        if (this.skipRequested || this.chatSpeed === "instant") return 28;
        if (this.chatSpeed === "fast") return Math.round(baseMs * 0.42);
        return baseMs;
    }

    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    triggerShake() {
        const frame = document.getElementById("app-phone-frame");
        if (!frame) return;
        frame.classList.remove("phone-shake");
        void frame.offsetWidth;
        frame.classList.add("phone-shake");
        setTimeout(() => frame.classList.remove("phone-shake"), 420);
    }

    // =========================================================================
    // INISIALISASI UI & EVENT LISTENERS
    // =========================================================================
    mount() {
        if (window.location.protocol === "file:" && window.location.href.indexOf("android_asset") !== -1) {
            const dlBtn = document.getElementById("btn-download-apk");
            if (dlBtn) dlBtn.classList.add("hidden");
        }
        this.applyFontSize(this.fontSize);
        this.bindUIEvents();
        this.updateCollectionCounters();
        this.showScreen("menu");
    }

    bindUIEvents() {
        // Tombol Main Menu
        document.getElementById("btn-start-game").addEventListener("click", () => {
            window.soundManager.playClick();
            this.startNewGame();
        });

        document.getElementById("btn-continue-game").addEventListener("click", () => {
            window.soundManager.playClick();
            this.openModal("modal-saveload");
        });

        document.getElementById("btn-menu-archive").addEventListener("click", () => {
            window.soundManager.playClick();
            this.openModal("modal-archive");
        });

        document.getElementById("btn-menu-characters").addEventListener("click", () => {
            window.soundManager.playClick();
            this.openModal("modal-status");
        });

        // Tombol Header WargaChat
        document.getElementById("btn-open-status").addEventListener("click", () => {
            window.soundManager.playClick();
            this.openModal("modal-status");
        });

        document.getElementById("btn-open-archive").addEventListener("click", () => {
            window.soundManager.playClick();
            this.openModal("modal-archive");
        });

        document.getElementById("btn-open-saveload").addEventListener("click", () => {
            window.soundManager.playClick();
            this.openModal("modal-saveload");
        });

        document.getElementById("btn-open-settings").addEventListener("click", () => {
            window.soundManager.playClick();
            this.openModal("modal-settings");
        });

        // Tombol Skip Animasi Chat
        document.getElementById("btn-skip-chat").addEventListener("click", () => {
            this.skipRequested = true;
        });

        // Tombol Cutscene Next / Skip
        document.getElementById("btn-cutscene-next").addEventListener("click", () => {
            window.soundManager.playClick();
            this.advanceCutsceneSlide();
        });

        document.getElementById("btn-cutscene-skip").addEventListener("click", () => {
            window.soundManager.playClick();
            this.finishCutscene();
        });

        // Tombol Lanjut dari Ringkasan Harian
        document.getElementById("btn-summary-next").addEventListener("click", () => {
            window.soundManager.playClick();
            this.proceedFromDailySummary();
        });

        // Tombol di Layar Ending
        document.getElementById("btn-ending-replay").addEventListener("click", () => {
            window.soundManager.playClick();
            this.startNewGame();
        });

        document.getElementById("btn-ending-menu").addEventListener("click", () => {
            window.soundManager.playClick();
            window.soundManager.stopBGM();
            this.showScreen("menu");
        });

        document.getElementById("btn-ending-archive").addEventListener("click", () => {
            window.soundManager.playClick();
            this.openModal("modal-archive");
        });

        // Penutup Modal
        document.querySelectorAll("[data-close-modal]").forEach((btn) => {
            btn.addEventListener("click", () => {
                window.soundManager.playClick();
                const target = btn.getAttribute("data-close-modal");
                this.closeModal(target);
            });
        });

        // Pengaturan Audio, Kecepatan, & Ukuran Font
        document.getElementById("btn-toggle-sfx").addEventListener("click", (e) => {
            const on = window.soundManager.toggleSFX();
            e.currentTarget.textContent = on ? "Aktif (ON)" : "Mati (OFF)";
            e.currentTarget.classList.toggle("active", on);
        });

        document.getElementById("btn-toggle-bgm").addEventListener("click", (e) => {
            const on = window.soundManager.toggleBGM();
            e.currentTarget.textContent = on ? "Aktif (ON)" : "Mati (OFF)";
            e.currentTarget.classList.toggle("active", on);
        });

        document.querySelectorAll("[data-speed]").forEach((btn) => {
            btn.addEventListener("click", () => {
                window.soundManager.playClick();
                this.chatSpeed = btn.getAttribute("data-speed");
                document.querySelectorAll("[data-speed]").forEach((b) => {
                    b.classList.toggle("active", b.getAttribute("data-speed") === this.chatSpeed);
                });
            });
        });

        document.querySelectorAll("[data-fontsize]").forEach((btn) => {
            btn.addEventListener("click", () => {
                window.soundManager.playClick();
                this.applyFontSize(btn.getAttribute("data-fontsize"));
            });
        });

        document.getElementById("btn-return-mainmenu").addEventListener("click", () => {
            window.soundManager.playClick();
            this.closeModal("modal-settings");
            window.soundManager.stopBGM();
            this.showScreen("menu");
        });
    }

    showScreen(screenName) {
        this.state.screen = screenName;
        const screens = ["menu", "cutscene", "chat", "summary", "ending"];
        screens.forEach((s) => {
            const el = document.getElementById(`screen-${s}`);
            if (el) {
                el.classList.toggle("hidden", s !== screenName);
            }
        });
        this.updateCollectionCounters();
    }

    // =========================================================================
    // MULAI GAME BARU & PROLOG
    // =========================================================================
    startNewGame() {
        this.state = this.createInitialState();
        this.updateHUD();
        window.soundManager.startBGM("normal");

        this.runCutscene(
            window.GAME_DATA.prolog.title,
            window.GAME_DATA.prolog.time,
            window.GAME_DATA.prolog.slides,
            () => {
                this.startEvent(0);
            }
        );
    }

    runCutscene(title, timeLabel, slides, onComplete) {
        this.cutsceneQueue = [...slides];
        this.cutsceneCallback = onComplete;
        document.getElementById("cutscene-header-title").textContent = title;
        document.getElementById("cutscene-header-time").textContent = timeLabel;
        this.showScreen("cutscene");
        this.advanceCutsceneSlide();
    }

    advanceCutsceneSlide() {
        if (this.cutsceneQueue.length === 0) {
            this.finishCutscene();
            return;
        }
        const slide = this.cutsceneQueue.shift();
        const bgInfo = window.GAME_DATA.backgrounds[slide.bg] || window.GAME_DATA.backgrounds.kamar_dika;
        const charInfo = window.GAME_DATA.characters[slide.speaker] || window.GAME_DATA.characters.dika;

        document.getElementById("cutscene-bg-img").src = bgInfo.src;
        document.getElementById("cutscene-location-badge").textContent = "📍 " + bgInfo.name;
        document.getElementById("cutscene-char-img").src = charInfo.avatar;
        document.getElementById("cutscene-speaker-name").textContent = slide.speakerTitle || charInfo.name;
        document.getElementById("cutscene-dialogue-text").textContent = slide.text;

        const btnNext = document.getElementById("btn-cutscene-next");
        btnNext.textContent = this.cutsceneQueue.length === 0 ? "Gaskeun ke WargaChat →" : "Lanjut ▶";
    }

    finishCutscene() {
        this.cutsceneQueue = [];
        const cb = this.cutsceneCallback;
        this.cutsceneCallback = null;
        if (cb) cb();
    }

    // =========================================================================
    // EKSEKUSI KEJADIAN (1 S/D 15)
    // =========================================================================
    async startEvent(index) {
        const events = window.GAME_DATA.events;
        if (index >= events.length) {
            this.evaluateAndShowEnding();
            return;
        }

        const ev = events[index];
        const prevEvent = index > 0 ? events[index - 1] : null;

        if (!prevEvent || prevEvent.day !== ev.day) {
            this.state.chatHistory = [];
            document.getElementById("chat-stream").innerHTML = "";
        }

        this.state.eventIndex = index;
        this.state.day = ev.day;
        this.state.phase = ev.phase;
        this.state.time = ev.time;
        this.state.battery = ev.battery || 80;
        this.state.bg = ev.bg;
        this.state.featuredChar = ev.featuredChar;

        if (ev.phase === "Malam" && ev.bg === "pos_ronda") {
            window.soundManager.startBGM("night");
        } else if (ev.day === 3) {
            window.soundManager.startBGM("chaos");
        } else {
            window.soundManager.startBGM("normal");
        }

        this.saveToSlot("autosave", true);

        if (ev.mode === "cutscene" && ev.cutsceneIntro && ev.cutsceneIntro.length > 0) {
            this.runCutscene(ev.title, `Hari ${ev.day} • ${ev.phase} (${ev.time})`, ev.cutsceneIntro, () => {
                this.runEventChatFlow(ev);
            });
        } else {
            this.runEventChatFlow(ev);
        }
    }

    async runEventChatFlow(ev) {
        this.showScreen("chat");
        this.updateHUD();
        this.updateStageBanner(ev.bg, ev.featuredChar, ev.title, "Lagi nyimak drama baru di grup RT 05...");

        if (ev.unlockArchive) {
            this.unlockArchive(ev.unlockArchive);
        }
        if (ev.unlockSticker) {
            this.unlockSticker(ev.unlockSticker);
        }

        const choicePanel = document.getElementById("choice-panel");
        choicePanel.classList.add("hidden");
        document.getElementById("chat-typing-bar").classList.remove("hidden");

        const msgQueue = [...ev.messages];
        if (ev.conditionalMessage && ev.conditionalMessage.check(this.state)) {
            msgQueue.push(ev.conditionalMessage.msg);
        }

        await this.playMessageSequence(msgQueue);

        this.updateStageBanner(ev.bg, "dika", ev.title, ev.monologue);
        this.renderChoices(ev);
    }

    showLiveTypingBubble(senderId) {
        this.removeLiveTypingBubble();
        const charInfo = window.GAME_DATA.characters[senderId];
        if (!charInfo) return;

        const stream = document.getElementById("chat-stream");
        const row = document.createElement("div");
        row.className = "chat-row chat-row-incoming typing-bubble-row";
        row.innerHTML = `
            <img class="chat-avatar" src="${charInfo.avatar}" alt="${charInfo.shortName}" />
            <div class="chat-bubble bubble-incoming bubble-typing">
                <div class="bubble-sender" style="color:${charInfo.color}">${charInfo.shortName}</div>
                <div class="typing-dots"><span></span><span></span><span></span></div>
            </div>
        `;
        this.typingBubbleEl = row;
        stream.appendChild(row);
        stream.scrollTop = stream.scrollHeight;
    }

    removeLiveTypingBubble() {
        if (this.typingBubbleEl && this.typingBubbleEl.parentNode) {
            this.typingBubbleEl.parentNode.removeChild(this.typingBubbleEl);
        }
        this.typingBubbleEl = null;
    }

    async playMessageSequence(messages) {
        this.isAnimatingChat = true;
        this.skipRequested = false;

        const typingText = document.getElementById("typing-indicator-text");
        const btnSkip = document.getElementById("btn-skip-chat");
        btnSkip.classList.remove("hidden");

        for (const msg of messages) {
            if (msg.sender !== "system" && msg.sender !== "dika") {
                const charInfo = window.GAME_DATA.characters[msg.sender];
                const senderLabel = charInfo ? charInfo.shortName : "Warga";
                typingText.textContent = `${senderLabel} lagi ngetik...`;
                if (charInfo) {
                    this.updateStagePortraitOnly(msg.sender);
                }
                if (!this.skipRequested && this.chatSpeed !== "instant") {
                    this.showLiveTypingBubble(msg.sender);
                }
                await this.sleep(this.getSpeedDelay(640));
                this.removeLiveTypingBubble();
            } else {
                typingText.textContent = "Ada notif baru masuk...";
                await this.sleep(this.getSpeedDelay(260));
            }

            this.appendChatBubble(msg);

            if (msg.shake) {
                this.triggerShake();
            }

            if (msg.type === "sticker") {
                window.soundManager.playStickerSound();
            } else if (msg.sender === "dika") {
                window.soundManager.playOutgoingChat();
            } else if (msg.sender !== "system") {
                window.soundManager.playIncomingChat();
            }

            await this.sleep(this.getSpeedDelay(380));
        }

        this.removeLiveTypingBubble();
        typingText.textContent = "Giliran kamu bales sebagai Admin RT 05...";
        btnSkip.classList.add("hidden");
        this.isAnimatingChat = false;
    }

    appendChatBubble(msg) {
        this.state.chatHistory.push(msg);
        const stream = document.getElementById("chat-stream");

        if (msg.sender === "system") {
            const sysEl = document.createElement("div");
            sysEl.className = "chat-bubble-system";
            sysEl.textContent = msg.text;
            stream.appendChild(sysEl);
            stream.scrollTop = stream.scrollHeight;
            return;
        }

        const isDika = msg.sender === "dika";
        const charInfo = window.GAME_DATA.characters[msg.sender] || window.GAME_DATA.characters.dika;

        const row = document.createElement("div");
        row.className = `chat-row ${isDika ? "chat-row-outgoing" : "chat-row-incoming"}`;

        if (!isDika) {
            const avatarImg = document.createElement("img");
            avatarImg.className = "chat-avatar";
            avatarImg.src = charInfo.avatar;
            avatarImg.alt = charInfo.name;
            row.appendChild(avatarImg);
        }

        const bubble = document.createElement("div");
        bubble.className = `chat-bubble ${isDika ? "bubble-outgoing" : "bubble-incoming"} ${msg.reaction ? "has-reaction" : ""}`;

        const header = document.createElement("div");
        header.className = "bubble-sender";
        header.style.color = charInfo.color;
        header.innerHTML = `<span>${charInfo.name}</span> <span class="bubble-role-pill">${charInfo.role}</span>`;
        bubble.appendChild(header);

        if (msg.type === "sticker" && window.GAME_DATA.stickers[msg.stickerId]) {
            const st = window.GAME_DATA.stickers[msg.stickerId];
            const stCard = document.createElement("div");
            stCard.className = "sticker-card";
            stCard.style.background = st.theme;
            stCard.innerHTML = `
                <div class="sticker-emoji">${st.emoji}</div>
                <div class="sticker-top">${st.topText}</div>
                <div class="sticker-bottom">${st.bottomText}</div>
                <div class="sticker-tag">★ Stiker Khas RT 05</div>
            `;
            bubble.appendChild(stCard);
        } else if (msg.type === "photo") {
            const bgObj = window.GAME_DATA.backgrounds[msg.photoBg] || window.GAME_DATA.backgrounds.jalan_rt;
            const photoCard = document.createElement("div");
            photoCard.className = "chat-photo-card";
            photoCard.innerHTML = `
                <div class="chat-photo-frame">
                    <img src="${bgObj.src}" alt="Lampiran Foto Warga" class="chat-photo-img" />
                    <span class="chat-photo-tag">${msg.photoTag || "📸 FOTO WARGA"}</span>
                </div>
                <div class="bubble-text chat-photo-caption">${msg.text}</div>
            `;
            bubble.appendChild(photoCard);
        } else {
            const body = document.createElement("div");
            body.className = "bubble-text";
            body.textContent = msg.text;
            bubble.appendChild(body);
        }

        const meta = document.createElement("div");
        meta.className = "bubble-meta";
        meta.innerHTML = `<span>${msg.time || this.state.time}</span> ${isDika ? '<span class="read-ticks">✓✓</span>' : ""}`;
        bubble.appendChild(meta);

        if (msg.reaction) {
            const reactBadge = document.createElement("span");
            reactBadge.className = "bubble-reaction-pill";
            reactBadge.textContent = msg.reaction;
            bubble.appendChild(reactBadge);
        }

        row.appendChild(bubble);
        stream.appendChild(row);
        stream.scrollTop = stream.scrollHeight;
    }

    renderChoices(ev) {
        const choicePanel = document.getElementById("choice-panel");
        const choiceList = document.getElementById("choice-list");
        document.getElementById("chat-typing-bar").classList.add("hidden");

        choiceList.innerHTML = "";

        ev.choices.forEach((choice) => {
            const isLocked = choice.lockIfStressAbove && this.state.tekanan >= choice.lockIfStressAbove;
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `choice-btn choice-type-${choice.type.toLowerCase()} ${isLocked ? "choice-locked" : ""}`;
            btn.disabled = Boolean(isLocked);

            const badgeLabel = choice.tag || choice.type;
            btn.innerHTML = `
                <div class="choice-header">
                    <span class="choice-badge badge-${choice.type.toLowerCase()}">${badgeLabel}</span>
                    ${isLocked ? '<span class="choice-lock-tag">🔒 Stres Ketinggian!</span>' : ""}
                </div>
                <div class="choice-label">${isLocked ? choice.lockReason : choice.label}</div>
            `;

            if (!isLocked) {
                btn.addEventListener("click", () => {
                    this.handleChoiceSelection(ev, choice);
                });
            }

            choiceList.appendChild(btn);
        });

        choicePanel.classList.remove("hidden");
        const stream = document.getElementById("chat-stream");
        stream.scrollTop = stream.scrollHeight;
    }

    async handleChoiceSelection(ev, choice) {
        const choicePanel = document.getElementById("choice-panel");
        choicePanel.classList.add("hidden");
        document.getElementById("chat-typing-bar").classList.remove("hidden");

        if (choice.isSilent) {
            this.appendChatBubble({
                sender: "system",
                text: choice.reply,
                time: ev.time
            });
            window.soundManager.playClick();
        } else {
            this.appendChatBubble({
                sender: "dika",
                text: choice.reply,
                time: ev.time
            });
            window.soundManager.playOutgoingChat();
        }

        if (choice.setFlag) {
            this.state.flags[choice.setFlag] = true;
        }

        if (choice.log) {
            if (!this.state.dayLogs[ev.day]) {
                this.state.dayLogs[ev.day] = [];
            }
            this.state.dayLogs[ev.day].push(choice.log);
        }

        this.applyEffects(choice.effects || {});

        await this.sleep(this.getSpeedDelay(450));

        if (choice.followUp && choice.followUp.length > 0) {
            await this.playMessageSequence(choice.followUp);
        }

        await this.sleep(this.getSpeedDelay(550));

        const nextIndex = this.state.eventIndex + 1;
        const nextEvent = window.GAME_DATA.events[nextIndex];

        if (!nextEvent || nextEvent.day !== ev.day) {
            this.showDailySummary(ev.day);
        } else {
            this.startEvent(nextIndex);
        }
    }

    // =========================================================================
    // UPDATE INDIKATOR, HUD, & NOTIFIKASI PERUBAHAN
    // =========================================================================
    applyEffects(effects) {
        const deltas = [];

        if (effects.ketenangan) {
            this.state.ketenangan = this.clamp(this.state.ketenangan + effects.ketenangan);
            deltas.push({ label: "🕊️ Adem", val: effects.ketenangan, positive: effects.ketenangan > 0 });
        }
        if (effects.kepercayaan) {
            this.state.kepercayaan = this.clamp(this.state.kepercayaan + effects.kepercayaan);
            deltas.push({ label: "⭐ Respek", val: effects.kepercayaan, positive: effects.kepercayaan > 0 });
        }
        if (effects.tekanan) {
            this.state.tekanan = this.clamp(this.state.tekanan + effects.tekanan);
            deltas.push({ label: "🤯 Stres", val: effects.tekanan, positive: effects.tekanan < 0 });
        }

        if (effects.relasi_rt) this.state.relasi_rt = this.clamp(this.state.relasi_rt + effects.relasi_rt);
        if (effects.relasi_siti) this.state.relasi_siti = this.clamp(this.state.relasi_siti + effects.relasi_siti);
        if (effects.relasi_budi) this.state.relasi_budi = this.clamp(this.state.relasi_budi + effects.relasi_budi);
        if (effects.relasi_roni) this.state.relasi_roni = this.clamp(this.state.relasi_roni + effects.relasi_roni);

        this.updateHUD();

        if (deltas.length > 0) {
            const netPositive = (effects.ketenangan || 0) + (effects.kepercayaan || 0) - (effects.tekanan || 0) >= 0;
            window.soundManager.playStatChange(netPositive);
            this.showDeltaToast(deltas);
        }
    }

    updateHUD() {
        const clockEl = document.getElementById("phone-clock");
        if (clockEl) clockEl.textContent = this.state.time + " WIB";

        const batEl = document.getElementById("phone-battery");
        if (batEl) batEl.textContent = `🔋 ${this.state.battery}%`;

        document.getElementById("hud-day-phase").textContent = `Hari ${this.state.day}/3 • ${this.state.phase}`;
        document.getElementById("hud-val-ketenangan").textContent = this.state.ketenangan;
        document.getElementById("hud-val-kepercayaan").textContent = this.state.kepercayaan;
        document.getElementById("hud-val-tekanan").textContent = this.state.tekanan;

        document.getElementById("hud-bar-ketenangan").style.width = `${this.state.ketenangan}%`;
        document.getElementById("hud-bar-kepercayaan").style.width = `${this.state.kepercayaan}%`;
        document.getElementById("hud-bar-tekanan").style.width = `${this.state.tekanan}%`;

        const moodEl = document.getElementById("stage-mood-badge");
        if (moodEl) {
            if (this.state.ketenangan >= 65) {
                moodEl.textContent = "🕊️ Grup Adem";
                moodEl.className = "stage-mood-badge mood-calm";
            } else if (this.state.ketenangan >= 40) {
                moodEl.textContent = "⚠️ Mulai Panas";
                moodEl.className = "stage-mood-badge mood-warm";
            } else {
                moodEl.textContent = "🔥 Siaga Chaos!";
                moodEl.className = "stage-mood-badge mood-chaos";
            }
        }

        document.getElementById("badge-archive-count").textContent = this.meta.unlockedArchives.length;
    }

    updateStageBanner(bgId, charId, eventTitle, monologueText) {
        const bgInfo = window.GAME_DATA.backgrounds[bgId] || window.GAME_DATA.backgrounds.kamar_dika;
        const charInfo = window.GAME_DATA.characters[charId] || window.GAME_DATA.characters.dika;

        document.getElementById("stage-bg-img").src = bgInfo.src;
        document.getElementById("stage-char-img").src = charInfo.avatar;
        document.getElementById("stage-event-title").textContent = eventTitle;
        document.getElementById("stage-monologue-text").textContent = monologueText;
    }

    updateStagePortraitOnly(charId) {
        const charInfo = window.GAME_DATA.characters[charId];
        if (charInfo) {
            document.getElementById("stage-char-img").src = charInfo.avatar;
        }
    }

    showDeltaToast(deltas) {
        const container = document.getElementById("stat-toast-container");
        container.innerHTML = "";

        deltas.forEach((d) => {
            const pill = document.createElement("span");
            const sign = d.val > 0 ? `+${d.val}` : `${d.val}`;
            pill.className = `stat-delta-pill ${d.positive ? "pill-positive" : "pill-negative"}`;
            pill.textContent = `${d.label} ${sign}`;
            container.appendChild(pill);
        });

        container.classList.remove("hidden");
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => {
            container.classList.add("hidden");
        }, 2600);
    }

    // =========================================================================
    // ARSIP KEJADIAN & KOLEKSI STIKER
    // =========================================================================
    unlockArchive(archiveId) {
        if (!window.GAME_DATA.archives[archiveId]) return;
        if (!this.state.runArchives.includes(archiveId)) {
            this.state.runArchives.push(archiveId);
        }
        if (!this.meta.unlockedArchives.includes(archiveId)) {
            this.meta.unlockedArchives.push(archiveId);
            this.saveMeta();
        }
        this.updateCollectionCounters();
    }

    unlockSticker(stickerId) {
        if (!window.GAME_DATA.stickers[stickerId]) return;
        if (!this.state.runStickers.includes(stickerId)) {
            this.state.runStickers.push(stickerId);
        }
        if (!this.meta.unlockedStickers.includes(stickerId)) {
            this.meta.unlockedStickers.push(stickerId);
            this.saveMeta();
        }
        this.updateCollectionCounters();
    }

    updateCollectionCounters() {
        const archCount = this.meta.unlockedArchives.length;
        const stickCount = this.meta.unlockedStickers.length;
        const endCount = this.meta.unlockedEndings.length;

        const badgeEl = document.getElementById("badge-archive-count");
        if (badgeEl) badgeEl.textContent = archCount;

        const menuMetaEl = document.getElementById("menu-progress-summary");
        if (menuMetaEl) {
            menuMetaEl.textContent = `🗂️ Arsip ${archCount}/10 • ★ Stiker ${stickCount}/5 • 🏆 Ending ${endCount}/4`;
        }
    }

    // =========================================================================
    // RINGKASAN HARIAN (EVALUASI MALAM HARI 1, 2, 3)
    // =========================================================================
    showDailySummary(dayNum) {
        const headlines = {
            1: "Hari 1 Kelar! Kamu lolos dari drama iuran 15 ribu, hoaks air galon, sampai misteri sandal kiri pos ronda.",
            2: "Hari 2 Kelar! Mulai dari parkir gang sempit, Mayor Kucing Oren, tragedi salah kamar Pak RT, sampai ngopi di Pos Ronda.",
            3: "Hari 3 & Rapat Besar Kelar! Saatnya liat nasib akhir kamu sebagai Admin Dadakan RT 05!"
        };

        document.getElementById("summary-day-badge").textContent = `🌙 Rekap Malam • Akhir Hari ${dayNum} dari 3`;
        document.getElementById("summary-headline").textContent = headlines[dayNum] || "";

        document.getElementById("sum-ketenangan").textContent = `${this.state.ketenangan}/100`;
        document.getElementById("sum-kepercayaan").textContent = `${this.state.kepercayaan}/100`;
        document.getElementById("sum-tekanan").textContent = `${this.state.tekanan}/100`;

        const logsEl = document.getElementById("summary-decision-logs");
        logsEl.innerHTML = "";
        const logs = this.state.dayLogs[dayNum] || [];
        logs.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            logsEl.appendChild(li);
        });

        const btnNext = document.getElementById("btn-summary-next");
        btnNext.textContent = dayNum < 3 ? `Lanjut ke Hari ${dayNum + 1} →` : "Buka Ending Akhir 🏆 →";

        this.showScreen("summary");
    }

    proceedFromDailySummary() {
        const nextIndex = this.state.eventIndex + 1;
        if (nextIndex < window.GAME_DATA.events.length) {
            this.startEvent(nextIndex);
        } else {
            this.evaluateAndShowEnding();
        }
    }

    // =========================================================================
    // EVALUASI & TAMPILAN 4 ENDING
    // =========================================================================
    determineEndingKey() {
        const s = this.state;
        const highRelCount = [s.relasi_rt, s.relasi_siti, s.relasi_budi, s.relasi_roni].filter((r) => r >= 60).length;

        if (s.tekanan >= 80 || (s.flags.flag_pilihan_resign && s.tekanan >= 65) || s.flags.flag_pilihan_resign) {
            return "aku_resign";
        }
        if (s.ketenangan <= 35 || (s.ketenangan < 50 && s.kepercayaan < 40)) {
            return "perang_grup";
        }
        if (s.ketenangan >= 65 && s.kepercayaan >= 70 && s.tekanan < 75 && highRelCount >= 2) {
            return "ketua_rt_baru";
        }
        return "admin_teladan";
    }

    evaluateAndShowEnding() {
        const endingKey = this.determineEndingKey();
        const ending = window.GAME_DATA.endings[endingKey];

        if (!this.meta.unlockedEndings.includes(endingKey)) {
            this.meta.unlockedEndings.push(endingKey);
            this.saveMeta();
        }

        const bgInfo = window.GAME_DATA.backgrounds[ending.bg] || window.GAME_DATA.backgrounds.kamar_dika;
        const charInfo = window.GAME_DATA.characters[ending.featuredChar] || window.GAME_DATA.characters.dika;

        document.getElementById("ending-bg-img").src = bgInfo.src;
        document.getElementById("ending-char-img").src = charInfo.avatar;
        document.getElementById("ending-number-pill").textContent = ending.number;

        const badgeEl = document.getElementById("ending-badge");
        badgeEl.textContent = ending.badge;
        badgeEl.style.backgroundColor = ending.badgeColor;

        document.getElementById("ending-title").textContent = ending.title;
        document.getElementById("ending-subtitle").textContent = ending.subtitle;

        const narrativeContainer = document.getElementById("ending-narrative");
        narrativeContainer.innerHTML = "";
        ending.narrative.forEach((pText) => {
            const p = document.createElement("p");
            p.textContent = pText;
            narrativeContainer.appendChild(p);
        });

        document.getElementById("ending-quote").textContent = ending.quote;

        document.getElementById("end-stat-ketenangan").textContent = `${this.state.ketenangan}/100`;
        document.getElementById("end-stat-kepercayaan").textContent = `${this.state.kepercayaan}/100`;
        document.getElementById("end-stat-tekanan").textContent = `${this.state.tekanan}/100`;
        document.getElementById("end-stat-archives").textContent = `${this.meta.unlockedArchives.length}/10`;
        document.getElementById("end-stat-endings").textContent = `${this.meta.unlockedEndings.length}/4`;

        this.showScreen("ending");
    }

    // =========================================================================
    // MODAL PANEL STATUS, ARSIP & STIKER, SAVE/LOAD
    // =========================================================================
    openModal(modalId) {
        if (modalId === "modal-status") {
            this.renderStatusModal();
        } else if (modalId === "modal-archive") {
            this.renderArchiveModal();
        } else if (modalId === "modal-saveload") {
            this.renderSaveLoadModal();
        }
        const el = document.getElementById(modalId);
        if (el) el.classList.remove("hidden");
    }

    closeModal(modalId) {
        const el = document.getElementById(modalId);
        if (el) el.classList.add("hidden");
    }

    getStatusDesc(type, val) {
        if (type === "ketenangan") {
            if (val >= 70) return "Adem & Kondusif";
            if (val >= 40) return "Rawan Sindiran";
            return "Siaga Perang Grup!";
        }
        if (type === "kepercayaan") {
            if (val >= 70) return "Admin Paling Dihormati";
            if (val >= 40) return "Lumayan Didengerin";
            return "Dicuekin Warga";
        }
        if (type === "tekanan") {
            if (val >= 75) return "Kena Mental! Pengen Resign";
            if (val >= 45) return "Puyeng Notifikasi";
            return "Masih Waras & Santuy";
        }
        return "";
    }

    renderStatusModal() {
        const s = this.state;
        document.getElementById("modal-stat-ketenangan").textContent = `${s.ketenangan}/100 • ${this.getStatusDesc("ketenangan", s.ketenangan)}`;
        document.getElementById("modal-bar-ketenangan").style.width = `${s.ketenangan}%`;

        document.getElementById("modal-stat-kepercayaan").textContent = `${s.kepercayaan}/100 • ${this.getStatusDesc("kepercayaan", s.kepercayaan)}`;
        document.getElementById("modal-bar-kepercayaan").style.width = `${s.kepercayaan}%`;

        document.getElementById("modal-stat-tekanan").textContent = `${s.tekanan}/100 • ${this.getStatusDesc("tekanan", s.tekanan)}`;
        document.getElementById("modal-bar-tekanan").style.width = `${s.tekanan}%`;

        const relList = [
            { id: "pak_rt", val: s.relasi_rt },
            { id: "bu_siti", val: s.relasi_siti },
            { id: "pak_budi", val: s.relasi_budi },
            { id: "roni", val: s.relasi_roni }
        ];

        const container = document.getElementById("character-relations-list");
        container.innerHTML = "";

        relList.forEach((item) => {
            const c = window.GAME_DATA.characters[item.id];
            const relStatus = item.val >= 65 ? "Bestie & Dukung Penuh" : item.val >= 45 ? "Biasa Aja" : "Rawan Baper";
            const card = document.createElement("div");
            card.className = "relation-card";
            card.innerHTML = `
                <img src="${c.avatar}" alt="${c.name}" class="relation-avatar" />
                <div class="relation-info">
                    <div class="relation-top">
                        <strong>${c.name}</strong>
                        <span class="relation-score">${item.val}/100 (${relStatus})</span>
                    </div>
                    <div class="relation-role">${c.role} — ${c.trait}</div>
                    <div class="mini-progress-track">
                        <div class="mini-progress-fill" style="width:${item.val}%; background:${c.color}"></div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    renderArchiveModal() {
        const archiveGrid = document.getElementById("archive-list-container");
        archiveGrid.innerHTML = "";

        Object.values(window.GAME_DATA.archives).forEach((arch) => {
            const unlocked = this.meta.unlockedArchives.includes(arch.id);
            const item = document.createElement("div");
            item.className = `archive-item ${unlocked ? "unlocked" : "locked"}`;
            item.innerHTML = `
                <div class="archive-icon">${unlocked ? arch.icon : "🔒"}</div>
                <div class="archive-body">
                    <div class="archive-title-row">
                        <strong>${unlocked ? arch.title : "Arsip Masih Terkunci"}</strong>
                        <span class="archive-day-tag">${arch.day}</span>
                    </div>
                    <p>${unlocked ? arch.desc : "Main terus buat nemuin kejadian kocak ini di WargaChat RT 05."}</p>
                </div>
            `;
            archiveGrid.appendChild(item);
        });

        const stickerGrid = document.getElementById("sticker-list-container");
        stickerGrid.innerHTML = "";

        Object.values(window.GAME_DATA.stickers).forEach((st) => {
            const unlocked = this.meta.unlockedStickers.includes(st.id);
            const item = document.createElement("div");
            item.className = `archive-item ${unlocked ? "unlocked" : "locked"}`;
            item.innerHTML = `
                <div class="archive-icon">${unlocked ? "★" : "🔒"}</div>
                <div class="archive-body">
                    <div class="archive-title-row">
                        <strong>${unlocked ? st.title : "Stiker RT Masih Terkunci"}</strong>
                        <span class="archive-day-tag">${st.sender}</span>
                    </div>
                    <p>${unlocked ? `${st.emoji} "${st.topText} — ${st.bottomText}"` : "Lanjutin chat warga buat koleksi stiker legendaris ini."}</p>
                </div>
            `;
            stickerGrid.appendChild(item);
        });

        const endingGrid = document.getElementById("ending-list-container");
        endingGrid.innerHTML = "";

        Object.values(window.GAME_DATA.endings).forEach((end) => {
            const unlocked = this.meta.unlockedEndings.includes(end.id);
            const item = document.createElement("div");
            item.className = `archive-item ${unlocked ? "unlocked" : "locked"}`;
            item.innerHTML = `
                <div class="archive-icon">${unlocked ? "🏆" : "🔒"}</div>
                <div class="archive-body">
                    <div class="archive-title-row">
                        <strong>${unlocked ? end.title : `${end.number} (Belum Kebuka)`}</strong>
                        <span class="archive-day-tag">${end.number}</span>
                    </div>
                    <p>${unlocked ? end.subtitle : "Cobain gaya balasan & skor berbeda buat dapetin ending ini."}</p>
                </div>
            `;
            endingGrid.appendChild(item);
        });
    }

    // =========================================================================
    // SISTEM SAVE / LOAD (LOCALSTORAGE)
    // =========================================================================
    saveToSlot(slotId, silent = false) {
        if (this.state.screen === "menu") return;
        const ev = window.GAME_DATA.events[this.state.eventIndex] || window.GAME_DATA.events[0];
        const payload = {
            savedAt: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
            eventTitle: ev.title,
            state: JSON.parse(JSON.stringify(this.state))
        };
        try {
            localStorage.setItem(this.STORAGE_SAVE_PREFIX + slotId, JSON.stringify(payload));
            if (!silent) {
                this.renderSaveLoadModal();
            }
        } catch (e) {
            console.warn("Save slot error:", e);
        }
    }

    loadFromSlot(slotId) {
        try {
            const raw = localStorage.getItem(this.STORAGE_SAVE_PREFIX + slotId);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (parsed && parsed.state) {
                this.state = parsed.state;
                this.closeModal("modal-saveload");
                window.soundManager.startBGM("normal");
                this.startEvent(this.state.eventIndex);
            }
        } catch (e) {
            console.warn("Load slot error:", e);
        }
    }

    renderSaveLoadModal() {
        const container = document.getElementById("saveload-slots-container");
        container.innerHTML = "";

        const slots = [
            { id: "autosave", name: "Auto-Save (Otomatis)", canSave: false },
            { id: "slot1", name: "Slot Simpan 1", canSave: true },
            { id: "slot2", name: "Slot Simpan 2", canSave: true },
            { id: "slot3", name: "Slot Simpan 3", canSave: true }
        ];

        const canSaveNow = this.state.screen === "chat" || this.state.screen === "summary";

        slots.forEach((slot) => {
            let savedData = null;
            try {
                const raw = localStorage.getItem(this.STORAGE_SAVE_PREFIX + slot.id);
                if (raw) savedData = JSON.parse(raw);
            } catch (e) {
                savedData = null;
            }

            const card = document.createElement("div");
            card.className = "save-slot-card";

            const desc = savedData
                ? `${savedData.eventTitle} • Adem ${savedData.state.ketenangan} | Respek ${savedData.state.kepercayaan} | Stres ${savedData.state.tekanan} (${savedData.savedAt})`
                : "Kosong — Belum ada progres tersimpan";

            card.innerHTML = `
                <div class="save-slot-info">
                    <strong>${slot.name}</strong>
                    <p>${desc}</p>
                </div>
                <div class="save-slot-actions">
                    ${slot.canSave && canSaveNow ? `<button type="button" class="btn-slot-save" data-save="${slot.id}">Simpan</button>` : ""}
                    ${savedData ? `<button type="button" class="btn-slot-load" data-load="${slot.id}">Muat</button>` : ""}
                </div>
            `;

            container.appendChild(card);
        });

        container.querySelectorAll("[data-save]").forEach((btn) => {
            btn.addEventListener("click", () => {
                window.soundManager.playClick();
                this.saveToSlot(btn.getAttribute("data-save"));
            });
        });

        container.querySelectorAll("[data-load]").forEach((btn) => {
            btn.addEventListener("click", () => {
                window.soundManager.playClick();
                this.loadFromSlot(btn.getAttribute("data-load"));
            });
        });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    window.gameEngine = new AdminDadakanEngine();
    window.gameEngine.mount();
});
