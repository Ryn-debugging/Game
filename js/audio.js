/**
 * ADMIN DADAKAN: Grup RT — js/audio.js
 * Web Audio API Synthesizer untuk Efek Suara Notifikasi WargaChat, UI, & Musik Latar
 */

class SoundManager {
    constructor() {
        this.ctx = null;
        this.sfxEnabled = true;
        this.bgmEnabled = true;
        this.bgmInterval = null;
        this.bgmMode = "normal"; // "normal", "night", "chaos"
        this.step = 0;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume();
        }
    }

    // Suara pesan masuk WargaChat ("Ting-nong!")
    playIncomingChat() {
        if (!this.sfxEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880.0, now + 0.075); // A5

        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.25);
    }

    // Suara Dika mengirim pesan ("Pop!")
    playOutgoingChat() {
        if (!this.sfxEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.09);

        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.12);
    }

    // Suara Stiker Bapak/Ibu RT masuk
    playStickerSound() {
        if (!this.sfxEnabled) return;
        this.init();
        if (!this.ctx) return;

        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
            const now = this.ctx.currentTime + idx * 0.055;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.17);
        });
    }

    // Suara klik tombol UI
    playClick() {
        if (!this.sfxEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(480, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
    }

    // Suara perubahan indikator (positif vs tegang)
    playStatChange(isPositive = true) {
        if (!this.sfxEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = isPositive ? "sine" : "sawtooth";
        if (isPositive) {
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.setValueAtTime(554.37, now + 0.08);
        } else {
            osc.frequency.setValueAtTime(311.13, now);
            osc.frequency.setValueAtTime(233.08, now + 0.1);
        }

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.26);
    }

    // Musik latar prosedural ringan (Santai / Pos Ronda / Kacau)
    startBGM(mode = "normal") {
        this.bgmMode = mode;
        if (!this.bgmEnabled) return;
        this.init();
        this.stopBGM();

        const scales = {
            normal: [261.63, 293.66, 329.63, 392.0, 440.0, 392.0, 329.63, 293.66],
            night: [220.0, 261.63, 329.63, 293.66, 246.94, 220.0, 196.0, 220.0],
            chaos: [293.66, 311.13, 370.0, 392.0, 370.0, 311.13, 293.66, 246.94]
        };

        const tempoMs = mode === "chaos" ? 360 : mode === "night" ? 680 : 520;

        this.bgmInterval = setInterval(() => {
            if (!this.bgmEnabled || !this.ctx || this.ctx.state !== "running") return;
            const notes = scales[this.bgmMode] || scales.normal;
            const freq = notes[this.step % notes.length];
            this.step++;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = this.bgmMode === "chaos" ? "triangle" : "sine";
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(0.025, now);
            gain.gain.exponentialRampToValueAtTime(0.0008, now + (tempoMs / 1000) * 0.85);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + (tempoMs / 1000) * 0.9);
        }, tempoMs);
    }

    stopBGM() {
        if (this.bgmInterval) {
            clearInterval(this.bgmInterval);
            this.bgmInterval = null;
        }
    }

    toggleSFX() {
        this.sfxEnabled = !this.sfxEnabled;
        if (this.sfxEnabled) this.playClick();
        return this.sfxEnabled;
    }

    toggleBGM() {
        this.bgmEnabled = !this.bgmEnabled;
        if (this.bgmEnabled) {
            this.startBGM(this.bgmMode);
        } else {
            this.stopBGM();
        }
        return this.bgmEnabled;
    }
}

window.soundManager = new SoundManager();
