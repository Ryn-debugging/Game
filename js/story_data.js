/**
 * ADMIN DADAKAN: Grup RT — js/story_data.js (v2.0 Edisi Gaul & Visual Upgrade)
 * Database Naratif Lengkap: 5 Karakter, 10 Arsip Kejadian, 5 Stiker RT,
 * Prolog, 15 Kejadian Utama (3 Hari), Foto Chat, Reaksi Emoji, & 4 Ending.
 */

window.GAME_DATA = {
    characters: {
        dika: {
            id: "dika",
            name: "Dika (Admin)",
            shortName: "Dika",
            role: "Admin Dadakan",
            trait: "Sarkas, kaum rebahan, cuma pengen hidup adem tanpa drama",
            quote: "\"Gue cuma pengen tidur 8 jam sehari, bukan jadi wasit debat warga.\"",
            color: "#0F766E",
            badgeBg: "#CCFBF1",
            avatar: "assets/images/char_dika.jpg"
        },
        pak_rt: {
            id: "pak_rt",
            name: "Pak RT Hendra",
            shortName: "Pak RT",
            role: "Ketua RT 05",
            trait: "Kalem di depan, jago ngeles & lempar bola panas pas grup mulai ribut",
            quote: "\"Kita musyawarahkan dulu ya... lewat Mas Dika tentunya, hehehe.\"",
            color: "#B45309",
            badgeBg: "#FEF3C7",
            avatar: "assets/images/char_pak_rt.jpg"
        },
        bu_siti: {
            id: "bu_siti",
            name: "Bu Siti Blok B",
            shortName: "Bu Siti",
            role: "Ratu Info RT 05",
            trait: "Kepo level dewa, gerak cepat, ngakunya nggak gosip cuma 'sharing'",
            quote: "\"Bukan ghibah ya bund, ini mah cuma sharing fakta lapangan!\"",
            color: "#C2410C",
            badgeBg: "#FFEDD5",
            avatar: "assets/images/char_bu_siti.jpg"
        },
        pak_budi: {
            id: "pak_budi",
            name: "Pak Budi Pagar Hitam",
            shortName: "Pak Budi",
            role: "Warga Kritis & Gampang Baper",
            trait: "Ngegas tapi ngaku santai, merasa semua sindiran di dunia tertuju padanya",
            quote: "\"Saya nggak baper ya! Cuma meluruskan logika aja!\"",
            color: "#1D4ED8",
            badgeBg: "#DBEAFE",
            avatar: "assets/images/char_pak_budi.jpg"
        },
        roni: {
            id: "roni",
            name: "Roni Satpam",
            shortName: "Roni",
            role: "Penjaga Pos Ronda",
            trait: "Anak tongkrongan paling chill, nyimak drama sambil ngopi sachet",
            quote: "\"Gue liat semuanya, Bang. Cuma gue milih nyruput kopi aja.\"",
            color: "#334155",
            badgeBg: "#E2E8F0",
            avatar: "assets/images/char_roni.jpg"
        }
    },

    backgrounds: {
        kamar_dika: {
            id: "kamar_dika",
            name: "Kamar Dika — Markas Rebahan",
            src: "assets/images/bg_kamar_dika.jpg"
        },
        jalan_rt: {
            id: "jalan_rt",
            name: "Gang Perumahan RT 05",
            src: "assets/images/bg_jalan_rt.jpg"
        },
        pos_ronda: {
            id: "pos_ronda",
            name: "Pos Ronda Malam RT 05",
            src: "assets/images/bg_pos_ronda.jpg"
        },
        rapat_warga: {
            id: "rapat_warga",
            name: "Balai Rapat Warga RT 05",
            src: "assets/images/bg_rapat_warga.jpg"
        }
    },

    archives: {
        sk_admin: {
            id: "sk_admin",
            day: "Hari 1",
            icon: "📜",
            title: "SK Admin Jalur Orang Dalam",
            desc: "Pak RT ngangkat Dika jadi admin tunggal pakai satu chat doang, terus langsung cabut ngilang alasan 'detoks notifikasi'."
        },
        tragedi_iuran: {
            id: "tragedi_iuran",
            day: "Hari 1",
            icon: "💸",
            title: "Drama Iuran 15 Ribu Rasa Sinetron",
            desc: "Bu Siti ngingetin iuran nggak sebut nama, eh Pak Budi langsung bikin klarifikasi 3 paragraf karena merasa pagar hitamnya kena framing."
        },
        sandal_ronda: {
            id: "sandal_ronda",
            day: "Hari 1",
            icon: "🩴",
            title: "Misteri Swallow Kiri Pos Ronda",
            desc: "Sandal jepit kiri pos ronda raib. Pak Budi udah nyiapin teori konspirasi sindikat maling, padahal cuma dipake bantal sama kucing oren."
        },
        parkir_gang: {
            id: "parkir_gang",
            day: "Hari 2",
            icon: "🚗",
            title: "Geopolitik Parkir Gang Sempit",
            desc: "Mobil tamu Pak Budi parkir agak nongol dikit sampai gerobak sayur Mang Ujang nyangkut kangkungnya. Grup langsung panas kayak sidang parlemen."
        },
        kucing_sampah: {
            id: "kucing_sampah",
            day: "Hari 2",
            icon: "🐈",
            title: "Mayor Oren Penguasa Tong Sampah",
            desc: "Warga udah saling tunjuk hidung soal sampah acak-acakan, eh Roni drop foto tersangka aslinya: kucing oren bobo pulas tanpa dosa."
        },
        salah_kamar_rt: {
            id: "salah_kamar_rt",
            day: "Hari 2",
            icon: "🙊",
            title: "Tragedi Salah Kamar Pak RT",
            desc: "Niat hati mau curhat ke Bu RT kalau capek ngurus Pak Budi & Bu Siti, malah kekirim ke grup warga plus salah pencet 'Hapus untuk Saya'!"
        },
        kopi_ronda: {
            id: "kopi_ronda",
            day: "Hari 2",
            icon: "☕",
            title: "Filosofi Kopi Sachet Pos Ronda",
            desc: "Deep talk malam bareng Roni membuktikan 80% drama grup RT bakal kelar kalau warga tidur jam 9 dan nggak kebanyakan overthinking."
        },
        undangan_rapat: {
            id: "undangan_rapat",
            day: "Hari 3",
            icon: "📢",
            title: "Undangan Rapat Rasa Match Tinju",
            desc: "Cuma undangan rapat RT biasa, tapi tensi di kolom chat udah kayak press conference tinju kelas berat."
        },
        kudeta_mute: {
            id: "kudeta_mute",
            day: "Hari 3",
            icon: "🔇",
            title: "Kudeta Tombol 'Hanya Admin'",
            desc: "Puncak perang spam foto pot bunga retak vs daun mangga nyasar yang bikin Dika gatel pengen mencet tombol keramat pengunci grup."
        },
        debat_kusir: {
            id: "debat_kusir",
            day: "Hari 3",
            icon: "🎙️",
            title: "Musyawarah Mufakat Rasa Debat Kusir",
            desc: "Rapat tatap muka di Balai Warga di mana bahasan keamanan lingkungan mendadak belok jadi debat bakwan vs lemper."
        }
    },

    stickers: {
        stiker_pagi: {
            id: "stiker_pagi",
            title: "Selamat Pagi Berkah 4K HD",
            sender: "Bu Siti Blok B",
            emoji: "🌹✨☕",
            topText: "SELAMAT PAGI WARGA RT 05",
            bottomText: "Semoga Rezeki Ngalir & Tetangga Nggak Julid!",
            theme: "linear-gradient(135deg, #FB923C, #EA580C)"
        },
        stiker_tenang: {
            id: "stiker_tenang",
            title: "Harap Tenang Admin Lagi Kena Mental",
            sender: "Roni Satpam",
            emoji: "🤫☕🌙",
            topText: "SANTUY DULU BESTIE",
            bottomText: "Admin Lagi Menghadapi Ujian Kehidupan",
            theme: "linear-gradient(135deg, #475569, #1E293B)"
        },
        stiker_pantau: {
            id: "stiker_pantau",
            title: "Pantau Terus Jangan Kasih Kendor",
            sender: "Pak Budi Pagar Hitam",
            emoji: "👀🔍📏",
            topText: "NYIMAK DENGAN SEKSAMA",
            bottomText: "Saya Nggak Baper, Cuma Meluruskan!",
            theme: "linear-gradient(135deg, #3B82F6, #1D4ED8)"
        },
        stiker_gorengan: {
            id: "stiker_gorengan",
            title: "Rapat Penting: Bahas Gorengan",
            sender: "Pak RT Hendra",
            emoji: "🍵🥟🤝",
            topText: "MUSYAWARAH MUFAKAT RT 05",
            bottomText: "Semua Masalah Kelar Kalo Bakwan Masih Anget",
            theme: "linear-gradient(135deg, #F59E0B, #B45309)"
        },
        stiker_admin: {
            id: "stiker_admin",
            title: "Admin Juga Manusia Bro",
            sender: "Dika (Admin)",
            emoji: "📱😵🏳️",
            topText: "ADMIN GRUP JUGA MANUSIA",
            bottomText: "Bukan Customer Service 24 Jam, Woy!",
            theme: "linear-gradient(135deg, #14B8A6, #0F766E)"
        }
    },

    prolog: {
        title: "Prolog — Jebakan Minggu Pagi",
        bg: "kamar_dika",
        time: "Minggu, 06:45 WIB",
        slides: [
            {
                bg: "kamar_dika",
                speaker: "dika",
                speakerTitle: "Dika (Kaum Rebahan RT 05)",
                text: "Minggu pagi di kamar. Kipas angin muter santai, kopi tubruk masih ngebul, dan resolusi hidup gue minggu ini cuma satu: rebahan tenang, no drama, no debat grup kompleks."
            },
            {
                bg: "jalan_rt",
                speaker: "pak_rt",
                speakerTitle: "Pak RT Hendra",
                text: "\"Assalamualaikum Mas Dika! Wah kebetulan banget nih anak muda paling melek teknologi udah bangun. Tensi Bapak agak naik gara-gara baca notif WargaChat RT 05 tiap subuh.\""
            },
            {
                bg: "jalan_rt",
                speaker: "pak_rt",
                speakerTitle: "Pak RT Hendra",
                text: "\"Kata dokter, Bapak harus 'puasa ngelerai warga' dulu 3 hari. Jadi mulai pagi ini, Mas Dika Bapak angkat jadi Admin Grup RT 05 ya! Santai aja, tugasnya cuma nerusin pengumuman doang kok!\""
            },
            {
                bg: "kamar_dika",
                speaker: "dika",
                speakerTitle: "Dika (Admin Dadakan)",
                text: "Belum sempat gue jawab 'Ogah Pak', HP gue langsung getar kenceng: 'Pak RT Hendra telah menjadikan Anda Admin Grup RT 05 Kompak.' Fiks, hidup tenang gue resmi tamat hari ini."
            }
        ]
    },

    events: [
        // =====================================================================
        // HARI 1 — ADMIN BARU (KEJADIAN 1 - 5)
        // =====================================================================
        {
            id: "ev_1",
            day: 1,
            dayTitle: "Hari 1 — Admin Baru",
            phase: "Pagi",
            time: "07:15",
            battery: 96,
            title: "Kejadian 1: Mandat Dadakan Jalur Orang Dalam",
            mode: "chat",
            bg: "kamar_dika",
            featuredChar: "pak_rt",
            unlockArchive: "sk_admin",
            messages: [
                { sender: "system", text: "Pak RT Hendra menjadikan Dika sebagai Admin Grup", time: "07:14" },
                { sender: "pak_rt", text: "Pagi warga RT 05 tercinta! Berhubung tensi Bapak lagi minta diistirahatin, 3 hari ke depan Mas Dika resmi jadi Admin Grup ya. Apa-apa kita musyawarahkan lewat Mas Dika dulu, hehehe.", time: "07:15" },
                { sender: "bu_siti", text: "Waaah selamat ya Mas Dika!! 🎉 Kebetulan banget nih, Ibu udah nyimpen 7 laporan warga yang kemaren belum kebaca Pak RT!", time: "07:16", reaction: "😱" },
                { sender: "pak_budi", text: "Semoga admin baru bisa objektif & netral. Jangan kayak sebelum-sebelumnya yang ngebiarin sindiran halus sliweran seenaknya di grup.", time: "07:17" },
                { sender: "roni", text: "Met gabung di medan tempur, Bang Dika. Gue pantau dari pos ronda sambil ngopi sachet.", time: "07:18", reaction: "☕" }
            ],
            monologue: "Buset dah, baru 3 menit jadi admin, Bu Siti udah siap nembak 7 laporan dan Pak Budi udah pasang mode siaga. Enaknya gue bales apa nih buat pembukaan?",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Sapa warga dengan ramah & ajak bikin grup tetap kondusif, no baper",
                    reply: "Pagi Bapak/Ibu semua! Makasih kepercayaannya. Yuk kita jaga grup RT 05 biar tetep adem, informatif, dan bebas salah paham ya. Salam kompak!",
                    effects: { ketenangan: 6, kepercayaan: 5, tekanan: 3, relasi_rt: 6, relasi_siti: 4, relasi_budi: 3, relasi_roni: 2 },
                    followUp: [
                        { sender: "pak_rt", text: "Naaah adem banget bahasanya! Bapak bisa rebahan tenang kalo adminnya begini.", time: "07:20", reaction: "👍" },
                        { sender: "bu_siti", text: "Siap Mas Admin ganteng yang super ramah!", time: "07:21" }
                    ],
                    log: "Ngebuka jabatan admin pakai sambutan super adem biar warga nggak langsung ngegas."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Langsung drop 3 aturan main: No nyinyir, no hoaks, wajib bawa fakta",
                    reply: "Pagi semuanya. Biar enak ke depannya, selama saya admin ada 3 aturan jelas: 1. No sindir-sindiran tanpa fakta, 2. No share hoaks, 3. Debat pribadi wajib pindah ke japri. Deal ya!",
                    effects: { ketenangan: -3, kepercayaan: 8, tekanan: 4, relasi_rt: 2, relasi_siti: -4, relasi_budi: 6, relasi_roni: 3 },
                    setFlag: "flag_aturan_ketat",
                    followUp: [
                        { sender: "pak_budi", text: "Nah ini baru keren! Aturan no 1 wajib banget buat oknum yang hobi ngomong tersirat.", time: "07:20" },
                        { sender: "bu_siti", text: "Lho kok langsung nyenggol ke sini Pak Budi?! Orang saya mah cuma informatif!", time: "07:21", reaction: "🔥" }
                    ],
                    log: "Langsung masang aturan ketat anti-nyinyir sejak menit pertama menjabat."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Sindir balik jabatan tanpa gaji & buka antrean komplain setelah ngopi",
                    reply: "Makasih banget lho Pak RT buat promosi jabatan tanpa interview dan tanpa UMR ini. Buat warga yang mau curhat, loket komplain baru buka setelah kopi tubruk saya habis ya.",
                    effects: { ketenangan: -4, kepercayaan: -2, tekanan: -5, relasi_rt: 0, relasi_siti: 1, relasi_budi: -6, relasi_roni: 10 },
                    followUp: [
                        { sender: "roni", text: "Wkwkwk menyala Bang Admin! Sabar adalah koentji.", time: "07:20", reaction: "😂" },
                        { sender: "pak_budi", text: "Admin baru kok malah stand-up comedy. Urusan lingkungan itu serius, Mas.", time: "07:21" }
                    ],
                    log: "Bales mandat Pak RT pakai sarkasme yang bikin Roni ngakak tapi Pak Budi cemberut."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Kirim stiker jempol doang biar nggak mancing obrolan panjang",
                    reply: "👍 Siap Pak RT. Mohon kerja samanya semua.",
                    effects: { ketenangan: 0, kepercayaan: -4, tekanan: -3, relasi_rt: -1, relasi_siti: -3, relasi_budi: 0, relasi_roni: 1 },
                    followUp: [
                        { sender: "bu_siti", text: "Yah Mas Dika, irit amat ketikannya kayak balesan abang galon 😅", time: "07:20" }
                    ],
                    log: "Milih irit kuota ketikan dan cuma ngasih jempol pas dilantik."
                }
            ]
        },

        {
            id: "ev_2",
            day: 1,
            dayTitle: "Hari 1 — Admin Baru",
            phase: "Pagi",
            time: "09:30",
            battery: 88,
            title: "Kejadian 2: Drama Iuran 15 Ribu & Pagar Hitam",
            mode: "chat",
            bg: "jalan_rt",
            featuredChar: "bu_siti",
            unlockArchive: "tragedi_iuran",
            messages: [
                { sender: "bu_siti", text: "Ngingetin aja ya Bapak/Ibu, iuran sampah Rp15.000 terakhir hari ini. Bukan ghibah lho, cuma sharing info, tadi mas gerobak sampah nanyain rumah yang pagarnya dicat item katanya belum setor.", time: "09:30" },
                { sender: "pak_budi", text: "Bu Siti, di blok ini yang pagarnya baru dicat hitam cuma rumah saya! Saya nggak baper ya, cuma meluruskan: kemarin bendahara saya ketok rumahnya lagi kosong!", time: "09:32", reaction: "🔥" },
                { sender: "bu_siti", text: "Waduh, saya kan nggak nyebut nama Pak Budi! Kok Bapak yang langsung kesenggol sih? 🤭", time: "09:33" },
                { sender: "pak_rt", text: "Aduh tensi Bapak mulai naik lagi... Mas Dika tolong dibantu lerai ya, kita musyawarahkan dulu.", time: "09:34" }
            ],
            monologue: "Klasik banget nih combo RT 05: Bu Siti lempar umpan nggak sebut nama, Pak Budi langsung nyamber kayak lagi ditagih debt collector. Gimana cara nyetopnya?",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Ajak bahas detail iuran via japri bendahara aja biar grup nggak panas",
                    reply: "Makasih infonya Bu Siti, makasih juga konfirmasinya Pak Budi. Biar enak dan nggak salah paham, urusan jadwal jemput iuran langsung japri ke bendahara aja ya. Grup kita bikin santuy!",
                    effects: { ketenangan: 8, kepercayaan: 6, tekanan: 4, relasi_rt: 5, relasi_siti: 3, relasi_budi: 6, relasi_roni: 1 },
                    followUp: [
                        { sender: "pak_budi", text: "Nah, gitu dong! Japri itu baru profesional dan anti-framing.", time: "09:36", reaction: "👌" },
                        { sender: "bu_siti", text: "Siap Mas Admin, saya kan niatnya cuma bantu kas RT aja kok.", time: "09:37" }
                    ],
                    log: "Sukses mindahin drama iuran Rp15.000 dari grup rame ke jalur japri."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Drop rekap resmi bendahara biar clear kalau Pak Budi jadwalnya sore ini",
                    reply: "Biar nggak main tebak-tebakan warna pagar, ini saya cek catatan resmi bendahara: rumah Pak Budi emang jadwal jemput sore jam 16.00. Clear ya, nggak ada yang nunggak. Topik tutup!",
                    effects: { ketenangan: 5, kepercayaan: 10, tekanan: 5, relasi_rt: 4, relasi_siti: -3, relasi_budi: 9, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_budi", text: "Valid no debat! Data selalu menang lawan gosip! Makasih Mas Dika!", time: "09:36", reaction: "🔥" },
                        { sender: "bu_siti", text: "Ooh jadwal jemput sore toh... hehehe kirain lupa, maap ya Pak Budi 🙏", time: "09:37" }
                    ],
                    log: "Nyelesein konflik iuran pakai bukti data bendahara sampai kedua kubu mingkem."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Sindir kalau modal Rp15.000 udah bisa bikin drama setara sinetron",
                    reply: "Gokil sih, cuma modal iuran Rp15.000 grup kita udah bisa bikin episode sinetron paling tegang minggu ini. Yang mau lanjut babak 2, tolong beli tiket nontonnya ke kas RT dulu ya.",
                    effects: { ketenangan: -8, kepercayaan: -3, tekanan: -2, relasi_rt: -2, relasi_siti: -4, relasi_budi: -8, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Wkwkwk gue pesen kursi VIP baris depan plus kacang rebus, Bang!", time: "09:36", reaction: "😂" },
                        { sender: "pak_budi", text: "Harga diri kepala keluarga nggak bisa dibandingin sama Rp15.000, Mas Dika!", time: "09:37" }
                    ],
                    log: "Malah nyiram bensin komedi ke tengah debat panas iuran Rp15.000."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Taruh HP di bantal dan biarin mereka debat sampai capek jempol sendiri",
                    reply: "(Kamu memilih mode silent, naruh HP di bantal, dan pura-pura nggak baca grup.)",
                    isSilent: true,
                    effects: { ketenangan: -10, kepercayaan: -6, tekanan: 2, relasi_rt: -5, relasi_siti: -2, relasi_budi: -3, relasi_roni: 0 },
                    followUp: [
                        { sender: "bu_siti", text: "Makanya Pak, kalau nggak ngerasa ya santai aja nggak usah ngegas!", time: "09:36" },
                        { sender: "pak_budi", text: "Kalimat Ibu itu textbook banget contoh pasif-agresif!", time: "09:37", reaction: "💣" }
                    ],
                    log: "Nge-ghosting grup dan ngebiarin Bu Siti vs Pak Budi adu ketikan."
                }
            ]
        },

        {
            id: "ev_3",
            day: 1,
            dayTitle: "Hari 1 — Admin Baru",
            phase: "Siang",
            time: "12:15",
            battery: 79,
            title: "Kejadian 3: Teror Stiker 4K & Hoaks Air Galon",
            mode: "chat",
            bg: "kamar_dika",
            featuredChar: "bu_siti",
            unlockSticker: "stiker_pagi",
            messages: [
                { sender: "bu_siti", type: "sticker", stickerId: "stiker_pagi", time: "12:15" },
                { sender: "bu_siti", text: "⚠️ PENTING DITERUSKAN BERKALI-KALI!! Katanya JANGAN minum air galon sambil berdiri di hari Selasa karena gelombang magnetnya bikin sinyal Wi-Fi rumah jadi lemot!! Share ke 10 grup ya demi kebaikan bersama!!", time: "12:16" },
                { sender: "pak_rt", text: "Waduh pantesan Wi-Fi rumah Bapak tadi pagi muter-muter pas buka berita! Makasih banyak infonya Bu Siti!", time: "12:17", reaction: "🤦" },
                { sender: "pak_budi", text: "Ini logika fisikanya nyambung dari mananya?! Air mineral di tenggorokan sama frekuensi router 2.4 GHz nggak ada hubungannya sama sekali!", time: "12:18" }
            ],
            monologue: "Astaga, Bu Siti nge-drop broadcast hoaks air galon vs Wi-Fi, dan parahnya Pak RT malah percaya dong! Harus dicegat sebelum warga RT 05 pada minum sambil kayang.",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Lurusin dengan santun biar Bu Siti nggak malu tapi warga tahu itu hoaks",
                    reply: "Makasih niat baiknya ngingetin warga ya Bu Siti. Cuma barusan saya cek fakta, kabar air galon bikin Wi-Fi lemot itu cuma candaan internet alias hoaks kok. Jadi santai aja, minum aman, Wi-Fi aman!",
                    effects: { ketenangan: 6, kepercayaan: 7, tekanan: 3, relasi_rt: 5, relasi_siti: 5, relasi_budi: 4, relasi_roni: 2 },
                    followUp: [
                        { sender: "bu_siti", text: "Ooh bercandaan toh Mas? Kirain kalau udah ada tulisan 'Diteruskan berkali-kali' berarti udah resmi dari pemerintah 😅", time: "12:20", reaction: "😅" },
                        { sender: "pak_rt", text: "Alhamdulillah, nggak jadi ganti modem nih Bapak.", time: "12:21" }
                    ],
                    log: "Ngelurusin hoaks air galon vs Wi-Fi dengan halus tanpa bikin Bu Siti malu."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Kasih ultimatum: Stop forward pesan berantai tanpa sumber valid di grup!",
                    reply: "Peringatan Admin: Mulai sekarang DILARANG forward pesan berantai yang belum jelas sumber ilmiahnya ke grup RT 05. Yuk biasakan cek fakta dulu sebelum klik teruskan!",
                    effects: { ketenangan: 2, kepercayaan: 8, tekanan: 4, relasi_rt: -2, relasi_siti: -7, relasi_budi: 8, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_budi", text: "Nah ini baru literasi digital! Setuju 100%!", time: "12:20" },
                        { sender: "bu_siti", text: "Iya deh iya... orang niat baik berbagi info malah kena semprot admin 😔", time: "12:21" }
                    ],
                    log: "Ngelarang keras pesan berantai hoaks yang bikin Bu Siti agak ngambek."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Bales pakai teori ngawur tandingan soal tagihan iuran & baterai HP",
                    reply: "Bener banget Bu Siti. Bahkan menurut riset terbaru Pos Ronda, keseringan baca tagihan iuran di grup bisa bikin baterai HP warga mendadak drop 45% secara misterius.",
                    effects: { ketenangan: 4, kepercayaan: -2, tekanan: -4, relasi_rt: 1, relasi_siti: 2, relasi_budi: -3, relasi_roni: 7 },
                    followUp: [
                        { sender: "roni", text: "Valid parah Bang, HP gue langsung sisa 3% tiap awal bulan.", time: "12:20", reaction: "😂" },
                        { sender: "bu_siti", text: "Hahaha Mas Dika ini malah ngelawak lho!", time: "12:21" }
                    ],
                    log: "Nge-counter hoaks air galon pakai teori konspirasi baterai HP."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Biarin aja Pak Budi ngasih kuliah teknik telekomunikasi ke Bu Siti",
                    reply: "(Kamu nyimak sambil makan siang, biarin Pak Budi ceramah soal frekuensi Wi-Fi.)",
                    isSilent: true,
                    effects: { ketenangan: -7, kepercayaan: -4, tekanan: 2, relasi_rt: -2, relasi_siti: -4, relasi_budi: -2, relasi_roni: 0 },
                    followUp: [
                        { sender: "pak_budi", text: "Bu Siti, gelombang radio router itu nggak lewat kerongkongan manusia!!", time: "12:20" },
                        { sender: "bu_siti", text: "Ya selow dong Pak Budi jelasinnya, nggak usah ngegas pake tanda seru!", time: "12:21" }
                    ],
                    log: "Ngebiarin Pak Budi dan Bu Siti ribut soal fisika galon."
                }
            ]
        },

        {
            id: "ev_4",
            day: 1,
            dayTitle: "Hari 1 — Admin Baru",
            phase: "Sore",
            time: "16:20",
            battery: 64,
            title: "Kejadian 4: Misteri Swallow Kiri Pos Ronda",
            mode: "chat",
            bg: "pos_ronda",
            featuredChar: "roni",
            unlockArchive: "sandal_ronda",
            messages: [
                { sender: "roni", text: "Lapor sore dari Pos Ronda RT 05: Sandal jepit inventaris pos warna biru hilang sebelah KIRI. Sebelah kanan masih anteng di tempat. Gue liat semuanya, tapi kali ini gue bingung juga.", time: "16:20" },
                { sender: "pak_budi", text: "TUH KAN! Hari ini sandal jepit sebelah kiri, besok-besok bisa spion mobil warga yang raib! Sistem keamanan RT 05 harus diaudit total!", time: "16:22", reaction: "🚨" },
                { sender: "bu_siti", text: "Ya ampun ngeri banget!! Jangan-jangan tadi siang ada orang asing nyelinap masuk gang pas warga lagi bobo siang?!", time: "16:23" }
            ],
            monologue: "Cuma sandal jepit karet sebelah kiri doang yang hilang di pos ronda, tapi Pak Budi sama Bu Siti udah kayak mau ngumumin status darurat militer.",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Tenangin warga dulu & minta Roni ngintip kolong pos atau semak sekitar",
                    reply: "Santai dulu Bapak/Ibu, jangan panik dulu ya. Bang Roni, coba cek kolong bangku pos atau deket pot bunga deh, siapa tahu lagi dijadiin mainan kucing gang.",
                    effects: { ketenangan: 8, kepercayaan: 8, tekanan: 2, relasi_rt: 4, relasi_siti: 4, relasi_budi: 3, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Bentar gue tengok kolong dipan... Oalah ketemu Bang! Lagi dipake bantal bobo siang sama kucing oren.", time: "16:25", reaction: "🐈" },
                        { sender: "bu_siti", text: "Alhamdulillah bukan maling... dasar kucing oren bikin jantungan aja!", time: "16:26" }
                    ],
                    log: "Ngepecahin misteri sandal kiri pos ronda bareng Roni tanpa bikin warga panik."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Rem warga biar nggak lebay & jangan nyebar panik tanpa bukti",
                    reply: "Bapak/Ibu, hilangnya satu sandal jepit nggak bisa langsung disimpulkan jadi krisis keamanan. Tolong jangan bikin warga lain ikut panik sebelum ada bukti yang jelas ya.",
                    effects: { ketenangan: -2, kepercayaan: 5, tekanan: 4, relasi_rt: 2, relasi_siti: -3, relasi_budi: -6, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_budi", text: "Saya bukan nyebar panik Mas Dika, itu namanya mitigasi risiko dini!", time: "16:25" }
                    ],
                    log: "Ngerem warga secara tegas biar nggak lebay soal sandal hilang."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Bikin pengumuman waspada sindikat maling spesialis kaki sebelah kiri",
                    reply: "Info Siaga 1: Warga harap waspada, kayaknya gang kita lagi diincar sindikat pencuri internasional spesialis sandal kaki KIRI. Kaki kanan aman terkendali.",
                    effects: { ketenangan: 3, kepercayaan: -1, tekanan: -5, relasi_rt: 0, relasi_siti: 2, relasi_budi: -4, relasi_roni: 9 },
                    followUp: [
                        { sender: "roni", text: "Wkwk gampang dicari nih pelakunya Bang, pasti jalannya miring sebelah.", time: "16:25", reaction: "😂" }
                    ],
                    log: "Ngeledekin kepanikan sandal hilang dengan candaan sindikat kaki kiri."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Suruh Roni nyari sendiri aja, admin lagi sibuk urusan lain",
                    reply: "Bang Roni urus sendiri dulu di pos ya, saya lagi banyak kerjaan nih.",
                    effects: { ketenangan: -3, kepercayaan: -5, tekanan: -2, relasi_rt: 0, relasi_siti: 0, relasi_budi: -2, relasi_roni: -4 },
                    followUp: [
                        { sender: "roni", text: "Oke siap Bang, malem ini gue ronda gaya bangau satu kaki dulu.", time: "16:25" }
                    ],
                    log: "Ngebiarin Roni ngurusin misteri sandalnya sendirian."
                }
            ]
        },

        {
            id: "ev_5",
            day: 1,
            dayTitle: "Hari 1 — Admin Baru",
            phase: "Malam",
            time: "21:40",
            battery: 34,
            title: "Kejadian 5: Jam Malam vs Martabak Tengah Malam",
            mode: "chat",
            bg: "pos_ronda",
            featuredChar: "pak_budi",
            unlockSticker: "stiker_tenang",
            messages: [
                { sender: "pak_budi", text: "Jam segini masih ada kurir paket ngegas motor brong di depan rumah! Portal RT 05 harusnya dikunci mati jam 21.00 WIB titik, nggak pake tawar-menawar!", time: "21:40" },
                { sender: "bu_siti", text: "Eeeh jangan jam 9 malem dong Pak Budi! Anak saya hobi banget pesen martabak manis jam setengah sepuluh malem! Kasian abang ojolnya kalau diputerin!", time: "21:41" },
                { sender: "roni", type: "sticker", stickerId: "stiker_tenang", time: "21:42" },
                { sender: "pak_rt", text: "Mas Dika, Bapak udah minum obat ngantuk nih. Tolong diputusin ya jam portal malem ini. Met bobo semuanya 😴", time: "21:43", reaction: "💀" }
            ],
            monologue: "Mantap betul Pak RT, langsung log-out balik selimut pas perang jam malam meledak! Hari pertama ditutup dengan bentrokan maut: Jam Tidur Pak Budi vs Martabak Keju Bu Siti.",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Ambil jalan tengah: Portal tutup jam 22.00 & Roni awasi kurir biar pelan",
                    reply: "Kita ambil win-win solution ya Bapak/Ibu: Portal ditutup jam 22.00 WIB, tapi mulai jam 21.00 Bang Roni standby di mulut gang buat ngingetin motor biar jalan pelan. Tidur aman, martabak tetep mendarat!",
                    effects: { ketenangan: 9, kepercayaan: 9, tekanan: 4, relasi_rt: 6, relasi_siti: 6, relasi_budi: 6, relasi_roni: 5 },
                    followUp: [
                        { sender: "bu_siti", text: "Nah ini baru admin idaman! Martabak aman sentosa!", time: "21:46", reaction: "❤️" },
                        { sender: "pak_budi", text: "Oke, kompromi masuk akal asal Roni beneran negur yang ngebut.", time: "21:47" }
                    ],
                    log: "Nentuin jam portal 22.00 yang bikin kubu tidur dan kubu martabak sama-sama happy."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Kunci portal jam 21.30; yang pesen makanan ambil sendiri ke pos depan",
                    reply: "Demi kenyamanan istirahat bareng, portal kita kunci tepat jam 21.30 WIB. Yang pesen makanan lewat jam segitu silakan jemput langsung ke pos depan deket Bang Roni ya.",
                    effects: { ketenangan: 2, kepercayaan: 7, tekanan: 5, relasi_rt: 3, relasi_siti: -7, relasi_budi: 9, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_budi", text: "Cakep! Ini baru aturan tegas yang ngehargain jam istirahat warga!", time: "21:46" },
                        { sender: "bu_siti", text: "Yah Mas Dika... masa ngidam martabak malem-malem harus jalan kaki ke depan gang 😭", time: "21:47" }
                    ],
                    log: "Ngetok palu portal tutup lebih awal jam 21.30 WIB."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Bikin pasal pajak martabak: Boleh lewat asal setor 2 potong ke pos & admin",
                    reply: "Keputusan Admin: Portal tutup jam 9 malem, KECUALI kurir martabak yang bersedia bayar bea cukai 2 potong keju cokelat buat Bang Roni sama kamar Admin.",
                    effects: { ketenangan: 2, kepercayaan: -3, tekanan: -4, relasi_rt: 0, relasi_siti: 3, relasi_budi: -5, relasi_roni: 9 },
                    followUp: [
                        { sender: "roni", text: "Gue dukung penuh pasal bea cukai martabak ini, Bang Admin!", time: "21:46", reaction: "😂" }
                    ],
                    log: "Nutup Hari 1 pakai negosiasi pajak martabak buat pos ronda."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Aktifin mode pesawat, ikut-ikutan bobo duluan kayak Pak RT",
                    reply: "(Kamu nyalain Mode Pesawat terus langsung tarik selimut.)",
                    isSilent: true,
                    effects: { ketenangan: -8, kepercayaan: -8, tekanan: -6, relasi_rt: -3, relasi_siti: -4, relasi_budi: -6, relasi_roni: -2 },
                    followUp: [
                        { sender: "pak_budi", text: "Woy?! Mas Dika?! Kok centang satu?! Adminnya ikut kabur tidur juga?!", time: "21:46" }
                    ],
                    log: "Nyalain mode pesawat dan ninggalin grup ribut soal portal."
                }
            ]
        },

        // =====================================================================
        // HARI 2 — URUSAN BERSAMA (KEJADIAN 6 - 10)
        // =====================================================================
        {
            id: "ev_6",
            day: 2,
            dayTitle: "Hari 2 — Urusan Bersama",
            phase: "Pagi",
            time: "07:30",
            battery: 92,
            title: "Kejadian 6: Geopolitik Parkir Gang Sempit",
            mode: "chat",
            bg: "jalan_rt",
            featuredChar: "pak_budi",
            unlockArchive: "parkir_gang",
            unlockSticker: "stiker_pantau",
            messages: [
                {
                    sender: "bu_siti",
                    type: "photo",
                    photoBg: "jalan_rt",
                    photoTag: "📸 FOTO TKP • GANG RT 05",
                    text: "Pagi-pagi mau belanja ke Mang Ujang udah terhalang mobil sedan silver parkir melintang makan setengah gang! Ini jalan umum RT atau garasi pribadi ya bund?!",
                    time: "07:30"
                },
                { sender: "pak_budi", type: "sticker", stickerId: "stiker_pantau", time: "07:31" },
                { sender: "pak_budi", text: "Itu mobil adik ipar saya yang cuma mampir 15 menit nganter berkas, Bu Siti! Lagian motor masih muat lewat kalau nyetirnya nggak sambil meleng!", time: "07:32" },
                { sender: "bu_siti", text: "Masalahnya gerobak sayur Mang Ujang itu lebar Pak Budi!! Sampe nyangkut iketan kangkungnya di spion!!", time: "07:33", reaction: "🥬" }
            ],
            conditionalMessage: {
                check: (state) => state.relasi_budi >= 58,
                msg: { sender: "pak_budi", text: "Mas Dika, kemarin Mas Dika adil banget pas ngurus iuran. Tolong bantu bilangin Bu Siti dong, tamu saya beneran cuma sebentar doang.", time: "07:34" }
            },
            monologue: "Hari kedua langsung disambut konflik paling sakral di perumahan Indonesia: parkir mobil di gang sempit yang nyenggol gerobak tukang sayur.",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Minta Pak Budi geser mobilnya dikit ke bahu pos biar gerobak sayur lolos",
                    reply: "Pak Budi, minta tolong banget mobil adik iparnya dimajuin dikit mepet bahu pos biar gerobak Mang Ujang lewat dengan aman ya. Bu Siti juga sabar bentar ya, nggak sampai 2 menit kelar kok.",
                    effects: { ketenangan: 8, kepercayaan: 8, tekanan: 4, relasi_rt: 4, relasi_siti: 5, relasi_budi: 6, relasi_roni: 2 },
                    followUp: [
                        { sender: "pak_budi", text: "Oke Mas Dika, berhubung Mas Dika ngomongnya sopan, langsung saya suruh geser sekarang.", time: "07:36", reaction: "👍" },
                        { sender: "bu_siti", text: "Nah gitu dong! Kangkung Mang Ujang akhirnya selamat sampai tujuan!", time: "07:37" }
                    ],
                    log: "Nge-handle drama parkir gang sempit dengan halus sampai Pak Budi mau geser mobil."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Tegakin aturan gang: Semua mobil tamu wajib pindah ke lapangan pos sekarang",
                    reply: "Aturan gang RT 05 udah jelas ya: jalan harus lega buat pedagang sama akses darurat. Semua mobil tamu wajib pindah ke lahan parkir pos depan sekarang juga, no pengecualian.",
                    effects: { ketenangan: 3, kepercayaan: 9, tekanan: 6, relasi_rt: 3, relasi_siti: 8, relasi_budi: -7, relasi_roni: 3 },
                    followUp: [
                        { sender: "bu_siti", text: "Hidup Mas Admin!! Tegas anti pandang bulu!", time: "07:36" },
                        { sender: "pak_budi", text: "Oke saya pindahin sekarang! Tapi awas ya, besok kalau ada tamu blok lain parkir di gang, saya ukur pake meteran tukang!", time: "07:37" }
                    ],
                    log: "Negakin aturan parkir secara keras sampai Pak Budi nyimpen dendam meteran."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Buka promo les parkir lurus gratis bareng Bang Roni di Pos Ronda",
                    reply: "Info layanan warga: Buat tamu yang hobi parkir miring estetik 45 derajat di tengah gang, Bang Roni buka kursus kilat meluruskan setir di Pos Ronda.",
                    effects: { ketenangan: -6, kepercayaan: -2, tekanan: -3, relasi_rt: 0, relasi_siti: 4, relasi_budi: -9, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Siap Bang, biaya daftarnya cukup kopi hitam satu renteng.", time: "07:36", reaction: "😂" },
                        { sender: "pak_budi", text: "Nggak lucu ya Mas Dika! Komen Anda nggak konstruktif!", time: "07:37" }
                    ],
                    log: "Ngeledekin sudut parkir mobil tamu Pak Budi di depan grup."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Tag Pak RT buat ngurusin ketertiban jalan gang",
                    reply: "@Pak RT Hendra, ini urusan tata tertib jalan gang mohon arahannya Pak 🙏",
                    effects: { ketenangan: -5, kepercayaan: -6, tekanan: 2, relasi_rt: -7, relasi_siti: -3, relasi_budi: -2, relasi_roni: 0 },
                    followUp: [
                        { sender: "pak_rt", text: "Aduh Mas Dika... Bapak lagi senam pernapasan pagi ini. Masa geser sedan doang harus Bapak turun gunung...", time: "07:36" }
                    ],
                    log: "Ngelempar masalah parkir ke Pak RT yang lagi senam pernapasan."
                }
            ]
        },

        {
            id: "ev_7",
            day: 2,
            dayTitle: "Hari 2 — Urusan Bersama",
            phase: "Siang",
            time: "11:10",
            battery: 76,
            title: "Kejadian 7: Sampah Acak-Acakan & Mayor Oren",
            mode: "chat",
            bg: "jalan_rt",
            featuredChar: "roni",
            unlockArchive: "kucing_sampah",
            messages: [
                {
                    sender: "pak_budi",
                    type: "photo",
                    photoBg: "jalan_rt",
                    photoTag: "📸 BUKTI LAPANGAN • BLOK B",
                    text: "Sekarang giliran saya lapor bawa bukti! Plastik sampah depan Blok B robek berantakan ke jalan. Pasti ada warga yang buang sampah nggak diiket!",
                    time: "11:10"
                },
                { sender: "bu_siti", text: "Eeeh Pak Budi, Blok B itu depan rumah saya ya! Saya tuh selalu ngiket plastik sampah pakai simpul mati tiga lapis!", time: "11:11" },
                {
                    sender: "roni",
                    type: "photo",
                    photoBg: "pos_ronda",
                    photoTag: "📸 BARANG BUKTI • MAYOR OREN",
                    text: "Permisi Bapak/Ibu, pelaku pembobolan kantong sampah baru aja ketangkap kamera lagi bobo kekenyangan di atas kardus.",
                    time: "11:12",
                    reaction: "🐈"
                },
                { sender: "roni", text: "Ciri-ciri tersangka: bulu oren gembul, nggak bayar iuran RT, dan kemarin sore juga yang ngebajak sandal kiri gue.", time: "11:13", reaction: "😂" }
            ],
            monologue: "Anjir ngakak, di foto close-up Roni si kucing oren beneran tidur telentang tanpa beban cicilan maupun beban moral.",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Puji investigasi Roni & usul pasang pengait tutup tong sampah sore ini",
                    reply: "Ternyata pelakunya warga berkaki empat. Mantap buktinya Bang Roni! Sore ini kita beresin terus pasang pengait tutup tong sampah ya biar nggak dibobol kucing lagi. Jadi nggak ada warga yang salah kok!",
                    effects: { ketenangan: 9, kepercayaan: 8, tekanan: 2, relasi_rt: 4, relasi_siti: 6, relasi_budi: 4, relasi_roni: 8 },
                    followUp: [
                        { sender: "bu_siti", text: "Tuh kan Pak Budi! Simpul mati saya terbukti tidak bersalah!", time: "11:16" },
                        { sender: "pak_budi", text: "Ya... baguslah kalau investigasi Roni udah nemu pelaku aslinya.", time: "11:17" }
                    ],
                    log: "Ngedamain drama sampah Blok B pakai solusi pengait tutup tong sampah."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Sentil warga biar stop asal nuduh tetangga sebelum cek fakta",
                    reply: "Pelajaran buat kita bareng-bareng ya: stop langsung nuduh tetangga di grup sebelum cek lapangan. Kucing orennya aja nggak pernah fitnah siapa-siapa lho.",
                    effects: { ketenangan: 4, kepercayaan: 7, tekanan: 3, relasi_rt: 2, relasi_siti: 2, relasi_budi: -3, relasi_roni: 5 },
                    followUp: [
                        { sender: "roni", text: "Bener banget Bang Dika, kucing oren fokusnya cuma kuliner, bukan julid.", time: "11:16" }
                    ],
                    log: "Negur warga secara tegas supaya nggak gampang nuduh tetangga."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Lantik si Kucing Oren jadi Koordinator Kebersihan RT 05",
                    reply: "Berhubung kucing oren ini lebih rajin keliling gang daripada kita semua, resmi saya angkat beliau jadi Koordinator Lapangan RT 05. Segala komplain sampah silakan kirim dalam bahasa 'Meong'.",
                    effects: { ketenangan: 10, kepercayaan: 3, tekanan: -6, relasi_rt: 3, relasi_siti: 7, relasi_budi: 0, relasi_roni: 9 },
                    setFlag: "flag_kucing_viral",
                    followUp: [
                        { sender: "roni", text: "Siap, udah gue kasih pangkat Mayor Oren di pos ronda!", time: "11:16", reaction: "🫡" },
                        { sender: "bu_siti", text: "Hahaha gemoy banget sih Mayor Oren, jadi lupa tadi lagi kesel!", time: "11:17" }
                    ],
                    log: "Ngelantik Mayor Kucing Oren jadi maskot perdamaian grup RT 05."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Tutup topik singkat aja mumpung udah ketahuan pelakunya",
                    reply: "Pelakunya kucing ya, kasus clear.",
                    effects: { ketenangan: 2, kepercayaan: 0, tekanan: -2, relasi_rt: 0, relasi_siti: 0, relasi_budi: 0, relasi_roni: 1 },
                    followUp: [
                        { sender: "roni", text: "Singkat, padat, anti ribet.", time: "11:16" }
                    ],
                    log: "Nutup kasus sampah kucing oren pakai satu kalimat pendek."
                }
            ]
        },

        {
            id: "ev_8",
            day: 2,
            dayTitle: "Hari 2 — Urusan Bersama",
            phase: "Sore",
            time: "15:05",
            battery: 58,
            title: "Kejadian 8: Tragedi Salah Kamar Pak RT",
            mode: "chat",
            bg: "kamar_dika",
            featuredChar: "pak_rt",
            unlockArchive: "salah_kamar_rt",
            messages: [
                { sender: "pak_rt", text: "Bu, bikinin teh anget dong. Bapak males banget buka HP kalau Pak Budi sama Bu Siti udah mulai bacot di grup, rasanya pengen pindah ke RT 08 aja deh.", time: "15:05", shake: true, reaction: "😱" },
                { sender: "system", text: "Pak RT Hendra mencoba menghapus pesan (Gagal: Salah pencet 'Hapus untuk Saya')", time: "15:06" },
                { sender: "pak_budi", text: "MAKSUDNYA APA INI PAK RT?! Jadi selama ini Bapak nganggep masukan kritis saya cuma 'bacot' sampai pengen pindah ke RT 08?!", time: "15:07", shake: true, reaction: "🔥" },
                { sender: "bu_siti", text: "Ya Allah Pak RT... tega banget nama saya diseret-seret segala!! 😭", time: "15:08" }
            ],
            monologue: "BENCANA NASIONAL RT 05!! Pak RT niat curhat ke istrinya malah nyasar ke grup warga, mana salah klik tombol hapus lagi! Sekarang Pak RT spam japri gue panik minta diselametin!",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Pasang badan: Bilang Pak RT lagi kurang enak badan & overthinking mikirin warga",
                    reply: "Tahan dulu Bapak/Ibu, tadi Pak RT cerita beliau lagi kurang fit & pusing efek obat. Beliau justru saking kepikirannya sama masukan Pak Budi dan Bu Siti sampai salah ketik. Kita maklumin ya, doain beliau cepet pulih.",
                    effects: { ketenangan: 6, kepercayaan: 7, tekanan: 6, relasi_rt: 15, relasi_siti: 3, relasi_budi: 2, relasi_roni: 3 },
                    setFlag: "flag_bantu_rt_salah_kirim",
                    followUp: [
                        { sender: "pak_rt", text: "Bener banget warga tercinta... kacamata Bapak burem habis minum obat flu. Maaf lahir batin ya Pak Budi, Bu Siti 🙏", time: "15:11" },
                        { sender: "bu_siti", text: "Ooh efek obat toh... ya udah cepet sembuh deh Pak RT.", time: "15:12" }
                    ],
                    log: "Nyelametin muka Pak RT dari tragedi salah kamar paling horor abad ini."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Suruh Pak RT minta maaf jujur & gentle di grup tanpa ngarang alasan",
                    reply: "Pak RT, biar nggak makin runyam dan tetep dihormati warga, lebih baik Bapak minta maaf jujur aja langsung ke Pak Budi dan Bu Siti kalau tadi emang khilaf salah kamar.",
                    effects: { ketenangan: 5, kepercayaan: 11, tekanan: 5, relasi_rt: -5, relasi_siti: 6, relasi_budi: 9, relasi_roni: 5 },
                    followUp: [
                        { sender: "pak_rt", text: "Iya deh... Bapak ngaku salah dan minta maaf sebesar-besarnya ke Pak Budi sama Bu Siti. Tadi Bapak lagi capek aja.", time: "15:11" },
                        { sender: "pak_budi", text: "Respek tinggi buat Mas Dika yang berani objektif bahkan ke Pak RT sendiri!", time: "15:12", reaction: "👏" }
                    ],
                    log: "Minta Pak RT minta maaf secara gentle yang bikin respek warga meroket."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Buka kartu: Kasih tahu Pak RT kalau grup RT 08 malah lagi perang jemuran",
                    reply: "Sekadar info intelijen nih Pak RT: Kemarin grup RT 08 baru aja perang dingin 3 hari gara-gara posisi tiang jemuran. Jadi pindah ke RT 08 bukan solusi terbaik, Pak.",
                    effects: { ketenangan: 4, kepercayaan: 0, tekanan: -4, relasi_rt: 5, relasi_siti: 4, relasi_budi: -3, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Bener Pak RT, rumput tetangga keliatan lebih ijo karena pake filter kamera doang.", time: "15:11", reaction: "😂" }
                    ],
                    log: "Nyairin insiden salah kirim Pak RT pakai gosip perang jemuran RT 08."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Biarin aja Pak RT ngeles sendiri, lumayan buat tontonan sore",
                    reply: "(Kamu nyiapin gorengan dan nyimak gimana cara Pak RT ngeles sendirian.)",
                    isSilent: true,
                    effects: { ketenangan: -10, kepercayaan: -5, tekanan: 3, relasi_rt: -8, relasi_siti: -4, relasi_budi: -6, relasi_roni: 2 },
                    followUp: [
                        { sender: "pak_rt", text: "Maaf warga!! Tadi HP Bapak di teras keinjek Mayor Kucing Oren pas ngejar cicak!!", time: "15:11", reaction: "🤡" },
                        { sender: "pak_budi", text: "Mana ada kucing oren bisa ngetik 'pindah ke RT 08' rapi pake spasi Pak RT?!", time: "15:12" }
                    ],
                    log: "Ngebiarin Pak RT ngeles kalau HP-nya diketik sama kucing oren."
                }
            ]
        },

        {
            id: "ev_9",
            day: 2,
            dayTitle: "Hari 2 — Urusan Bersama",
            phase: "Sore",
            time: "17:15",
            battery: 44,
            title: "Kejadian 9: Misteri 2 Kursi Lipat Gudang RT",
            mode: "chat",
            bg: "rapat_warga",
            featuredChar: "bu_siti",
            messages: [
                { sender: "bu_siti", text: "Mas Dika Admin! Saya barusan ngitung kursi lipat di gudang buat rapat besok malem. Kok kurang 2 biji?! Hayo ngaku, bulan kemarin siapa yang pinjem buat acara tapi belum dibalikin?!", time: "17:15" },
                { sender: "pak_budi", text: "Jangan ngelirik ke rumah saya lagi ya Bu Siti! Acara di rumah saya bulan lalu sewa kursi tenda sendiri lengkap pakai kuitansi!", time: "17:16" }
            ],
            conditionalMessage: {
                check: (state) => state.relasi_roni >= 56,
                msg: { sender: "roni", text: "Bisikan Pos Ronda buat Bang Dika: Di buku catatan gue, kursi lipat no 19 sama 20 lagi dipinjem Pak RT sendiri buat jemur kasur di halaman belakang rumahnya.", time: "17:17", reaction: "👀" }
            },
            monologue: "Cuma kurang dua kursi lipat besi doang, tapi suasananya udah kayak audit KPK dadakan.",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Cek buku log Roni & infoin posisi kursi tanpa bikin siapa-siapa malu",
                    reply: "Aman Bapak/Ibu, nggak ada kursi yang hilang kok. Kata buku catatan Bang Roni, 2 kursi lagi dipake sebentar di rumah Pak RT buat jemur kasur dan besok pagi langsung balik ke balai.",
                    effects: { ketenangan: 8, kepercayaan: 9, tekanan: 2, relasi_rt: 4, relasi_siti: 5, relasi_budi: 5, relasi_roni: 6 },
                    followUp: [
                        { sender: "pak_rt", text: "Eh iya astaga! Bapak kelupaan kemaren buat jemur bantal. Besok pagi Bapak gotong ke balai!", time: "17:19" },
                        { sender: "pak_budi", text: "Nah, clear kan bukan di rumah saya!", time: "17:20" }
                    ],
                    log: "Nemuin 2 kursi lipat yang 'hilang' lewat buku catatan rapi Roni."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Bikin sistem catat pinjaman wajib & kasih tenggat balikin jam 8 malam",
                    reply: "Mulai hari ini, tiap pinjem barang inventaris RT wajib lapor catat ke Admin. Yang masih nyimpen 2 kursi lipat tolong balikin ke Balai Warga sebelum jam 8 malam ini ya.",
                    effects: { ketenangan: 3, kepercayaan: 8, tekanan: 5, relasi_rt: 1, relasi_siti: 5, relasi_budi: 3, relasi_roni: 4 },
                    followUp: [
                        { sender: "bu_siti", text: "Setuju banget! Biar tertib aset RT 05!", time: "17:19" }
                    ],
                    log: "Nertibin sistem peminjaman inventaris kursi lipat RT."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Bilang 2 kursinya ikut resign karena capek didudukin orang debat",
                    reply: "Kayaknya dua kursi lipat itu milih mengundurkan diri dari gudang karena kena mental tiap rapat didudukin warga yang hobi debat.",
                    effects: { ketenangan: 1, kepercayaan: -2, tekanan: -4, relasi_rt: 0, relasi_siti: 1, relasi_budi: -4, relasi_roni: 7 },
                    followUp: [
                        { sender: "roni", text: "Kursi besi aja butuh healing Bang, apalagi adminnya.", time: "17:19", reaction: "😂" }
                    ],
                    log: "Ngecandaain kalau 2 kursi lipat RT kabur buat healing."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Suruh yang datang telat besok duduk lesehan aja di tikar",
                    reply: "Cuma kurang dua biji Bapak/Ibu, besok yang telat dateng duduk lesehan di tikar aja biar akrab.",
                    effects: { ketenangan: -4, kepercayaan: -5, tekanan: -2, relasi_rt: 0, relasi_siti: -5, relasi_budi: -2, relasi_roni: 1 },
                    followUp: [
                        { sender: "bu_siti", text: "Lho kok malah disuruh lesehan sih Mas Admin...", time: "17:19" }
                    ],
                    log: "Males nyari kursi dan nyaranin warga duduk lesehan."
                }
            ]
        },

        {
            id: "ev_10",
            day: 2,
            dayTitle: "Hari 2 — Urusan Bersama",
            phase: "Malam",
            time: "22:15",
            battery: 26,
            title: "Kejadian 10: Deep Talk di Pos Ronda Malam",
            mode: "cutscene",
            bg: "pos_ronda",
            featuredChar: "roni",
            unlockArchive: "kopi_ronda",
            cutsceneIntro: [
                {
                    speaker: "dika",
                    speakerTitle: "Dika (Kabur Sebentar dari Layar HP)",
                    text: "Malem hari kedua. Mata udah pedes banget mantengin drama WargaChat seharian, akhirnya gue jalan kaki cari angin sambil mampir ke Pos Ronda RT 05."
                },
                {
                    speaker: "roni",
                    speakerTitle: "Roni Satpam",
                    text: "\"Duduk dulu, Bang Admin. Kopi item sachet udah ready. Tenang aja, malem ini dua-duanya sandal gue aman, nggak dibegal Mayor Oren.\""
                },
                {
                    speaker: "roni",
                    speakerTitle: "Roni Satpam",
                    text: "\"Aslinya warga RT 05 tuh nggak jahat, Bang. Cuma pada kesepian pengen didengerin doang. Bu Siti pengen ngerasa paling update, Pak Budi pengen dihargain opininya, nah Pak RT cuma takut dimarahin mereka berdua.\""
                },
                {
                    speaker: "pak_budi",
                    speakerTitle: "Pak Budi (Lewat Bawa Senter Gede)",
                    text: "\"Ehm! Malem Mas Dika, Roni. Saya cuma jalan santai ngecek portal aja. Besok rapat warga pasti bakal rame banget nih.\""
                }
            ],
            messages: [
                { sender: "system", text: "Adegan Langsung: Pos Ronda RT 05 • 22:15 WIB", time: "22:15" },
                { sender: "roni", text: "Kopi anget udah dituang. Pak Budi berdiri canggung bawa senter segede lampu sorot panggung.", time: "22:16" }
            ],
            monologue: "Di bawah lampu kuning Pos Ronda, Pak Budi keliatan agak kikuk tapi sebenernya pengen ikut nimbrung. Gimana respon gue malem ini?",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Ajak Pak Budi duduk ngopi bareng biar suasana cair tanpa layar HP",
                    reply: "Mampir duduk bentar yuk Pak Budi, kopi item bikinan Bang Roni masih ngebul. Sekali-sekali ngobrol santai tatap muka tanpa bacain chat grup.",
                    effects: { ketenangan: 8, kepercayaan: 8, tekanan: -8, relasi_rt: 2, relasi_siti: 0, relasi_budi: 12, relasi_roni: 8 },
                    setFlag: "flag_kopi_ronda_roni",
                    followUp: [
                        { sender: "pak_budi", text: "(Duduk di Pos Ronda) \"Wah... jarang nih anak muda mau ngajak saya ngopi santai. Aslinya saya cerewet di grup itu cuma pengen RT kita rapi kok, Mas Dika.\"", time: "22:25", reaction: "☕" },
                        { sender: "roni", text: "(Nyruput kopi) \"Nah, kalau ngobrol langsung gini kan adem, nggak pake capslock.\"", time: "22:26" }
                    ],
                    log: "Ngopi santai bareng Pak Budi & Roni di Pos Ronda sampai suasana cair total."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Ajak Pak Budi komitmen bikin rapat besok tertib & fokus ke solusi",
                    reply: "Kebetulan Bapak lewat. Besok malem rapat besar kita harus fokus nyari solusi, jangan sampai jadi ajang debat kusir. Saya harap Pak Budi bisa bantu jadi contoh ketertiban ya.",
                    effects: { ketenangan: 5, kepercayaan: 10, tekanan: 2, relasi_rt: 3, relasi_siti: 0, relasi_budi: 6, relasi_roni: 5 },
                    followUp: [
                        { sender: "pak_budi", text: "(Di Pos Ronda) \"Siap Mas Dika! Selama rapat dipimpin adil berbasis fakta, saya dukung penuh!\"", time: "22:25" }
                    ],
                    log: "Ngegalang komitmen tertib rapat bareng Pak Budi di Pos Ronda."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Goda Pak Budi apakah senter gedenya buat ngukur kemiringan parkir",
                    reply: "Senternya silau bener Pak Budi, cocok banget nih buat nyari sandal kiri Roni atau ngukur kemiringan parkir tamu sampai skala milimeter.",
                    effects: { ketenangan: -3, kepercayaan: -2, tekanan: -6, relasi_rt: 0, relasi_siti: 0, relasi_budi: -7, relasi_roni: 9 },
                    followUp: [
                        { sender: "roni", text: "(Keselek kopi nahan ketawa di balik kentongan)", time: "22:25", reaction: "😂" },
                        { sender: "pak_budi", text: "(Di Pos Ronda) \"Hmph. Saya pulang dulu, angin malem mulai nggak sehat.\"", time: "22:26" }
                    ],
                    log: "Ngeledekin senter taktis Pak Budi sampai Roni keselek kopi."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Pamit cepet balik kamar takut tiba-tiba disuruh ikut jaga ronda",
                    reply: "Saya duluan balik kamar ya Pak Budi, Bang Roni. Mau istirahatin jempol sebelum hari ketiga besok.",
                    effects: { ketenangan: 0, kepercayaan: -2, tekanan: -5, relasi_rt: 0, relasi_siti: 0, relasi_budi: 0, relasi_roni: 1 },
                    followUp: [
                        { sender: "roni", text: "(Di Pos Ronda) \"Oke siap Bang, met istirahat!\"", time: "22:25" }
                    ],
                    log: "Langsung cabut pulang tidur dari Pos Ronda."
                }
            ]
        },

        // =====================================================================
        // HARI 3 — RAPAT BESAR (KEJADIAN 11 - 15)
        // =====================================================================
        {
            id: "ev_11",
            day: 3,
            dayTitle: "Hari 3 — Rapat Besar",
            phase: "Pagi",
            time: "08:00",
            battery: 94,
            title: "Kejadian 11: Undangan Rapat Rasa Match Tinju",
            mode: "chat",
            bg: "kamar_dika",
            featuredChar: "pak_rt",
            unlockArchive: "undangan_rapat",
            messages: [
                { sender: "pak_rt", text: "Pagi warga RT 05. Berhubung dua hari kemarin dinamika grup kita cukup 'meriah', malem ini jam 19.30 WIB kita adakan Rapat Besar di Balai Warga. Mas Dika tolong bikinin undangan resminya ya!", time: "08:00" },
                { sender: "bu_siti", text: "WAJIB DATENG semua ya! Jangan cuma jago ngetik panjang di grup tapi pas rapat malah ngaku masuk angin!", time: "08:02" },
                { sender: "pak_budi", text: "Siapa yang Ibu maksud alasan masuk angin?! Bulan kemarin saya absen karena jadi narasumber webinar nasional!", time: "08:03", reaction: "🔥" }
            ],
            monologue: "Hari terakhir masa bakti gue! Belum juga draf undangannya diketik, Bu Siti sama Pak Budi udah pemanasan ronde 1 dari jam 8 pagi.",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Bikin undangan rapi dengan 3 agenda jelas biar warga fokus nyari solusi",
                    reply: "📢 UNDANGAN RAPAT WARGA RT 05 (Malem ini 19.30 WIB di Balai Warga). Agenda jelas: 1. Pengait Tong Sampah, 2. Aturan Parkir & Portal, 3. Evaluasi Grup. Yuk dateng bawa kepala dingin & solusi bareng!",
                    effects: { ketenangan: 7, kepercayaan: 9, tekanan: 4, relasi_rt: 7, relasi_siti: 4, relasi_budi: 5, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_rt", text: "Rapi dan berwibawa banget nih undangannya Mas Dika! Mantap!", time: "08:06", reaction: "👏" }
                    ],
                    log: "Nulis undangan rapat yang super rapi sampai kedua kubu adem."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Bikin klausul tegas: Yang absen otomatis setuju & dilarang protes di grup",
                    reply: "📢 PENGUMUMAN TEGAS: Rapat malam ini jam 19.30 WIB sifatnya WAJIB. Yang nggak hadir dianggap setuju semua keputusan rapat dan DILARANG komplain susulan di grup chat.",
                    effects: { ketenangan: 3, kepercayaan: 10, tekanan: 6, relasi_rt: 5, relasi_siti: 2, relasi_budi: 7, relasi_roni: 4 },
                    followUp: [
                        { sender: "pak_budi", text: "Klausul super adil! Saya bakal dateng 15 menit lebih awal!", time: "08:06" }
                    ],
                    log: "Masang aturan tegas anti-protes susulan buat warga yang bolos rapat."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Bikin undangan gaya poster pertandingan tinju akbar",
                    reply: "📢 MAIN EVENT MALEM INI 19.30 WIB di Balai Warga: Musyawarah Akbar RT 05! Harap bawa hati lapang, dilarang membawa meteran jalan, senter taktis, maupun Mayor Kucing Oren.",
                    effects: { ketenangan: 2, kepercayaan: 0, tekanan: -4, relasi_rt: 1, relasi_siti: 3, relasi_budi: -4, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Siap Bang, kentongan pos ronda gue bawa buat bel ganti ronde.", time: "08:06", reaction: "🔔" }
                    ],
                    log: "Bikin undangan rapat warga pakai gaya poster tanding tinju."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Ketik satu baris seadanya tanpa daftar agenda",
                    reply: "Malem ini rapat jam 19.30 di Balai Warga ya Bapak/Ibu. Tks.",
                    effects: { ketenangan: -3, kepercayaan: -4, tekanan: -2, relasi_rt: -2, relasi_siti: -2, relasi_budi: -2, relasi_roni: 0 },
                    followUp: [
                        { sender: "pak_budi", text: "Agendanya apa aja Mas Dika? Kok singkat banget kayak SMS operator?", time: "08:06" }
                    ],
                    log: "Ngirim undangan rapat satu baris tanpa detail."
                }
            ]
        },

        {
            id: "ev_12",
            day: 3,
            dayTitle: "Hari 3 — Rapat Besar",
            phase: "Siang",
            time: "13:00",
            battery: 71,
            title: "Kejadian 12: Perang Konsumsi (Bakwan vs Lemper)",
            mode: "chat",
            bg: "rapat_warga",
            featuredChar: "pak_rt",
            unlockSticker: "stiker_gorengan",
            messages: [
                { sender: "pak_rt", type: "sticker", stickerId: "stiker_gorengan", time: "13:00" },
                { sender: "bu_siti", text: "Bapak/Ibu, buat snack rapat malem ini saya usul bakwan sayur sama tahu isi anget ya! Murah, gurih, pemersatu bangsa!", time: "13:01" },
                { sender: "pak_budi", text: "Saya nggak setuju! Gorengan malem-malem itu kolesterol plus bikin mikrofon berminyak! Harusnya lemper ayam atau kacang rebus dong!", time: "13:02" },
                { sender: "bu_siti", text: "Ya ampun Pak Budi, kalau cuma kacang rebus nanti rapatnya pada nguap! Lagian siapa juga yang makan bakwan sambil ngelap tangan ke mic?!", time: "13:03", reaction: "🥟" },
                { sender: "roni", text: "Asal kopi item aman, mau kubu bakwan apa koalisi lemper gue siap ngamanin piringnya.", time: "13:04", reaction: "☕" }
            ],
            monologue: "Agenda utamanya keamanan sama ketertiban lingkungan, tapi 80 chat siang ini 100% isinya debat ideologi bakwan goreng lawan lemper kukus.",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Bagi budget snack 50:50 — separuh gorengan anget, separuh lemper/rebusan",
                    reply: "Solusi paling adil nih: Budget konsumsi kita bagi dua aja—seporsi bakwan & tahu isi anget usulan Bu Siti, seporsi lagi lemper & kacang rebus sehat usulan Pak Budi. Semua happy!",
                    effects: { ketenangan: 8, kepercayaan: 7, tekanan: 3, relasi_rt: 5, relasi_siti: 6, relasi_budi: 6, relasi_roni: 4 },
                    followUp: [
                        { sender: "bu_siti", text: "Oke deh, deal kalau dibagi dua piring gitu!", time: "13:07", reaction: "👍" },
                        { sender: "pak_budi", text: "Setuju! Yang penting hak warga rendah kolesterol tetap dihormati.", time: "13:08" }
                    ],
                    log: "Ngedamain Perang Snack Rapat pakai koalisi 50:50 Bakwan & Lemper."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Ketok palu menu standar kas RT dan tutup debat makanan sekarang",
                    reply: "Simpan energinya buat rapat nanti malam ya Bapak/Ibu. Sesuai kas RT, konsumsi malem ini tahu isi, lemper, sama teh anget. Bahasan makanan resmi ditutup!",
                    effects: { ketenangan: 5, kepercayaan: 8, tekanan: 4, relasi_rt: 5, relasi_siti: 1, relasi_budi: 3, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_rt", text: "Mantap Mas Dika, cepat dan tepat sasaran.", time: "13:07" }
                    ],
                    log: "Nyetop debat panjang soal menu snack rapat secara tegas."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Ancem ganti konsumsi jadi air putih galon (diminum sambil duduk)",
                    reply: "Kalau debat bakwan vs lemper nggak kelar dalam 5 menit, konsumsi malem ini saya ganti air putih galon doang—dan wajib diminum sambil duduk biar Wi-Fi Balai Warga nggak lemot.",
                    effects: { ketenangan: 4, kepercayaan: 2, tekanan: -5, relasi_rt: 2, relasi_siti: 3, relasi_budi: -1, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Wkwk callback hoaks hari pertama yang sangat berkelas, Bang Admin.", time: "13:07", reaction: "😂" }
                    ],
                    log: "Ngancem ganti snack rapat jadi air galon kalau warga masih ribut."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Biarin aja chat tembus 99+ bahas kadar minyak goreng",
                    reply: "(Kamu mute grup 15 menit sambil biarin mereka debat ilmu gizi.)",
                    isSilent: true,
                    effects: { ketenangan: -8, kepercayaan: -5, tekanan: 5, relasi_rt: -3, relasi_siti: -2, relasi_budi: -2, relasi_roni: 0 },
                    followUp: [
                        { sender: "bu_siti", text: "Pokoknya rapat RT tanpa bakwan tuh kayak sayur tanpa garam!", time: "13:07" },
                        { sender: "pak_budi", text: "Garam kebanyakan juga bikin hipertensi Bu Siti!", time: "13:08" }
                    ],
                    log: "Ngebiarin grup kebanjiran debat gizi bakwan vs kolesterol."
                }
            ]
        },

        {
            id: "ev_13",
            day: 3,
            dayTitle: "Hari 3 — Rapat Besar",
            phase: "Sore",
            time: "17:45",
            battery: 42,
            title: "Kejadian 13: Spam Foto & Kudeta Tombol Mute",
            mode: "chat",
            bg: "jalan_rt",
            featuredChar: "bu_siti",
            unlockArchive: "kudeta_mute",
            messages: [
                {
                    sender: "bu_siti",
                    type: "photo",
                    photoBg: "jalan_rt",
                    photoTag: "📸 4 FOTO DILAMPIRKAN • POT BUNGA",
                    text: "Jelang rapat malem ini, saya lampirin bukti pot lidah mertua saya yang retak kesenggol bumper mobil tamu kemarin!!",
                    time: "17:45",
                    shake: true
                },
                {
                    sender: "pak_budi",
                    type: "photo",
                    photoBg: "jalan_rt",
                    photoTag: "📸 5 FOTO DILAMPIRKAN • DAUN MANGGA",
                    text: "Oh main bukti foto?! Nih saya kirim 5 foto daun mangga dari depan blok Ibu yang tiap sore terbang nyampah ke teras saya!!",
                    time: "17:46",
                    shake: true
                },
                { sender: "bu_siti", text: "Lho, daun mangga terbang ketiup angin kok nyalahin saya?! Emang saya Avatar pengendali angin?!", time: "17:47", reaction: "🌪️" },
                { sender: "pak_rt", text: "Waduh Mas Dika!! Grup makin membara padahal rapat tinggal 90 menit lagi!! Tolong hentikan Mas!!", time: "17:48" }
            ],
            monologue: "HP gue getar terus kayak kesurupan! Pot lidah mertua vs daun mangga nyasar! Kalau nggak disetop sekarang, rapat nanti malem bisa batal total atau berubah jadi perang grup!",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Pakai pendekatan personal buat nenangin Bu Siti & Pak Budi",
                    lockIfStressAbove: 75,
                    lockReason: "Mental/Stres terlalu tinggi (≥75)! Dika udah terlalu capek buat ngetik diplomasi.",
                    reply: "Bu Siti, Pak Budi, jujur selama 3 hari ini Bapak sama Ibu tuh warga yang paling peduli sama RT 05. Yuk simpen dulu semua fotonya, nanti malem kita beresin baik-baik sambil ngeteh bareng di Balai Warga ya.",
                    effects: { ketenangan: 14, kepercayaan: 12, tekanan: 3, relasi_rt: 8, relasi_siti: 8, relasi_budi: 8, relasi_roni: 4 },
                    followUp: [
                        { sender: "bu_siti", text: "Iya juga sih Mas Dika... maap ya saya kebawa emosi sore-sore 🙏", time: "17:51", reaction: "❤️" },
                        { sender: "pak_budi", text: "Baik Mas Dika. Karena saya respek sama Mas Dika, saya tahan sampai rapat nanti.", time: "17:52" }
                    ],
                    log: "Sukses meredam perang spam foto pot bunga vs daun mangga lewat diplomasi hangat."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Pencet tombol keramat: 'Hanya Admin yang Bisa Kirim Pesan' sampai rapat!",
                    reply: "Grup saya gembok sementara 90 menit ke depan biar semua warga bisa ngademin kepala dulu sebelum ketemu tatap muka di Balai Warga jam 19.30 WIB. Sampai ketemu di lokasi!",
                    effects: { ketenangan: 10, kepercayaan: 9, tekanan: -4, relasi_rt: 6, relasi_siti: -4, relasi_budi: -4, relasi_roni: 8 },
                    setFlag: "flag_mute_grup",
                    followUp: [
                        { sender: "system", text: "Admin Dika mengubah setelan grup: Hanya Admin yang dapat mengirim pesan 🔒", time: "17:50" }
                    ],
                    log: "Ngegas tombol keramat 'Hanya Admin' buat ngerem perang foto warga."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Spam balik foto kipas angin kamar & ikut nuntut angin ke BMKG",
                    reply: "📸 [Foto Kipas Angin Kamar] Sekalian saya laporin kipas angin kamar saya yang dari Minggu pagi geleng-geleng kiri-kanan tapi nggak pernah nyelesein masalah mental Admin.",
                    effects: { ketenangan: -5, kepercayaan: -3, tekanan: -6, relasi_rt: -2, relasi_siti: 1, relasi_budi: -6, relasi_roni: 9 },
                    followUp: [
                        { sender: "roni", text: "Wkwkwk foto counter paling epic sepanjang masa!", time: "17:51", reaction: "😂" }
                    ],
                    log: "Nge-counter banjir foto warga pakai foto kipas angin kamar."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Lempar HP ke kasur dan biarin grup meledak",
                    reply: "(Kamu lempar HP ke kasur dan nutup kuping pakai bantal.)",
                    isSilent: true,
                    effects: { ketenangan: -18, kepercayaan: -10, tekanan: 10, relasi_rt: -8, relasi_siti: -5, relasi_budi: -5, relasi_roni: -2 },
                    followUp: [
                        { sender: "bu_siti", text: "Kalau mau protes arah angin silakan kirim DM ke BMKG Pak Budi!!", time: "17:51" },
                        { sender: "pak_budi", text: "Pohon mangganya yang wajib dipangkas Bu!!", time: "17:52", reaction: "💥" }
                    ],
                    log: "Ngebiarin perang foto ngehancurin ketenangan grup jelang rapat."
                }
            ]
        },

        {
            id: "ev_14",
            day: 3,
            dayTitle: "Hari 3 — Rapat Besar",
            phase: "Malam",
            time: "19:45",
            battery: 28,
            title: "Kejadian 14: Rapat Puncak Balai Warga RT 05",
            mode: "cutscene",
            bg: "rapat_warga",
            featuredChar: "dika",
            unlockArchive: "debat_kusir",
            cutsceneIntro: [
                {
                    speaker: "pak_rt",
                    speakerTitle: "Pak RT Hendra (Di Balai Warga RT 05)",
                    text: "\"Selamat malem warga RT 05! Bakwan sama lemper udah aman di meja depan. Yuk kita bahas semua dinamika tiga hari ini dengan adem.\""
                },
                {
                    speaker: "bu_siti",
                    speakerTitle: "Bu Siti Blok B",
                    text: "\"Pokoknya harus ada aturan jelas soal jadwal iuran, pot lidah mertua saya yang retak, sama portal jangan kecepetan ditutup kasian abang martabak!\""
                },
                {
                    speaker: "pak_budi",
                    speakerTitle: "Pak Budi Pagar Hitam",
                    text: "\"Dan harus ada aturan tegas soal dahan mangga, stop nyindir warna pagar di WargaChat, plus ketertiban jam malam!\""
                },
                {
                    speaker: "pak_rt",
                    speakerTitle: "Pak RT Hendra",
                    text: "\"Sabar-sabar! Kita serahkan mikrofon utama ke Mas Dika selaku Admin yang udah nyatet semua kejadian 3 hari penuh! Monggo Mas Dika!\""
                }
            ],
            messages: [
                { sender: "system", text: "Adegan Puncak: Balai Warga RT 05 • 19:45 WIB", time: "19:45" }
            ],
            monologue: "Semua mata warga RT 05 langsung nyorot ke gue di meja depan. Pegang mikrofon rasanya lebih berat dari angkat barbel 10 kilo. Gimana gue nutup sidang puncak ini?",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Rangkum 4 Kesepakatan Adil dari Arsip: Japri iuran, parkir pos, pengait tong, & kerja bakti",
                    reply: "Bapak/Ibu semua, dari catatan 3 hari ini sebenernya nggak ada warga yang niat jahat. Yuk kita sahkan 4 Kesepakatan RT 05: 1. Tagihan iuran cuma via japri, 2. Parkir tamu di pos depan, 3. Tong sampah dipasang pengait anti-Mayor Oren, 4. Minggu depan kerja bakti pangkas dahan & benerin pot bareng!",
                    effects: { ketenangan: 15, kepercayaan: 15, tekanan: 2, relasi_rt: 10, relasi_siti: 10, relasi_budi: 10, relasi_roni: 8 },
                    followUp: [
                        { sender: "bu_siti", text: "(Di Balai Warga) \"Waaah... semua keluhan kita dirangkum adil tanpa ada yang dipermaluin!\"", time: "19:55", reaction: "👏" },
                        { sender: "pak_budi", text: "(Di Balai Warga) \"Empat poin itu logis dan masuk akal banget. Saya angkat tangan setuju!\"", time: "19:56" }
                    ],
                    log: "Sukses mimpin mediasi Rapat Besar pakai 4 Kesepakatan Bersama RT 05."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Kasih real talk ke warga: Masalah RT 05 itu kecil, yang gede cuma ego di grup chat!",
                    reply: "Saya ngomong jujur di depan Bapak/Ibu semua: Masalah fisik di RT 05 itu sepele, yang bikin ribet tuh gengsi kita waktu ngetik di grup! Mulai malem ini, siapa pun yang mancing debat kusir bakal saya mute 3 hari!",
                    effects: { ketenangan: 8, kepercayaan: 12, tekanan: -4, relasi_rt: 5, relasi_siti: 3, relasi_budi: 5, relasi_roni: 10 },
                    followUp: [
                        { sender: "roni", text: "(Tepuk tangan dari pojok balai) \"Real talk paling jujur abad ini, Bang!\"", time: "19:55", reaction: "🔥" },
                        { sender: "pak_budi", text: "(Di Balai Warga) \"Pedes sih... tapi emang bener juga.\"", time: "19:56" }
                    ],
                    log: "Ngasih pidato real talk soal bahaya ego & baper di grup chat."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Roasting halus Pak RT soal beban kerja Admin Grup yang merangkap 5 profesi",
                    reply: "Kesimpulan saya selama 3 hari: Jadi Admin Grup RT 05 ternyata profesi all-in-one yang merangkap detektif sandal, pengacara kucing oren, wasit bakwan vs lemper, plus tameng hidup Pak RT.",
                    effects: { ketenangan: -4, kepercayaan: 2, tekanan: -6, relasi_rt: -6, relasi_siti: 4, relasi_budi: -2, relasi_roni: 10 },
                    followUp: [
                        { sender: "pak_rt", text: "(Di Balai Warga) \"Hehehe... Mas Dika bisa aja, itu namanya kaderisasi anak muda!\"", time: "19:55", reaction: "😂" }
                    ],
                    log: "Nge-roasting Pak RT secara halus di panggung Rapat Besar."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Ghosting / Skip",
                    label: "Balikin mic ke Pak RT karena kepala udah cenat-cenut",
                    reply: "Silakan Pak RT aja yang mutusin deh, saya cuma admin aplikasi chat, bukan lurah.",
                    effects: { ketenangan: -12, kepercayaan: -10, tekanan: 8, relasi_rt: -8, relasi_siti: -5, relasi_budi: -5, relasi_roni: -2 },
                    followUp: [
                        { sender: "pak_rt", text: "(Di Balai Warga) \"Waduh kok mic-nya dibalikin ke Bapak pas lagi panas gini...\"", time: "19:55" }
                    ],
                    log: "Nyerahin balik mikrofon ke Pak RT di tengah rapat panas."
                }
            ]
        },

        {
            id: "ev_15",
            day: 3,
            dayTitle: "Hari 3 — Rapat Besar",
            phase: "Malam",
            time: "21:00",
            battery: 19,
            title: "Kejadian 15: Keputusan Final Sang Admin",
            mode: "chat",
            bg: "rapat_warga",
            featuredChar: "dika",
            unlockSticker: "stiker_admin",
            messages: [
                { sender: "dika", type: "sticker", stickerId: "stiker_admin", time: "21:00" },
                { sender: "pak_rt", text: "Penutup rapat malem ini: Masa uji coba 3 hari Mas Dika jadi Admin RT 05 resmi kelar! Gimana nih warga sekalian, dan gimana keputusan Mas Dika sendiri?", time: "21:02" },
                { sender: "roni", text: "Apapun keputusan Bang Dika malem ini, termos kopi pos ronda selalu siap sedia.", time: "21:03", reaction: "☕" }
            ],
            monologue: "Ini dia pilihan penentu nasib akhir gue! Semua skor Ketenangan, Respek Warga, Mental/Stres, dan Relasi selama 3 hari bakal nge-lock salah satu dari 4 Ending!",
            choices: [
                {
                    type: "Diplomatis",
                    tag: "🤝 Adem / Santuy",
                    label: "Mau lanjut bantu pegang grup, asal aturan jam istirahat malam dipatuhi",
                    reply: "Saya siap lanjut bantu pegang grup RT 05, tapi syaratnya jelas ya: lewat jam 10 malem stop debat, dan kita semua saling jaga perasaan tetangga.",
                    effects: { ketenangan: 8, kepercayaan: 8, tekanan: -5, relasi_rt: 8, relasi_siti: 6, relasi_budi: 6, relasi_roni: 5 },
                    followUp: [
                        { sender: "pak_rt", text: "Alhamdulillah! Makasih banyak ya Mas Dika!", time: "21:06" }
                    ],
                    log: "Bersedia lanjut jadi admin dengan syarat jam istirahat sehat."
                },
                {
                    type: "Tegas",
                    tag: "⚡ Gas / Tegas",
                    label: "Siap pegang kendali penuh kalau warga beneran pengen RT 05 naik level!",
                    reply: "Kalau warga RT 05 beneran pengen lingkungan yang tertib, transparan, dan nggak setengah-setengah lagi, saya siap ambil tanggung jawab penuh buat beresin RT kita!",
                    effects: { ketenangan: 10, kepercayaan: 14, tekanan: 2, relasi_rt: 6, relasi_siti: 8, relasi_budi: 8, relasi_roni: 8 },
                    setFlag: "flag_terima_mandat_rt",
                    followUp: [
                        { sender: "pak_budi", text: "Pidato berkelas banget! Saya dukung 100% komitmen Mas Dika!", time: "21:06", reaction: "🔥" },
                        { sender: "bu_siti", text: "Wihh aura pemimpin baru mulai bersinar nih!", time: "21:07" }
                    ],
                    log: "Nyatain siap ambil kepemimpinan penuh buat pembenahan RT 05."
                },
                {
                    type: "Menghindar",
                    tag: "🏃 Resign Total!",
                    label: "Resmi RESIGN malem ini juga! Gue cuma pengen tidur tenang!",
                    reply: "Makasih buat 3 hari paling memacu adrenalin dalam hidup saya. Dengan ini saya resmi RESIGN dari jabatan Admin Grup RT 05. Saya cuma pengen rebahan tenang!",
                    effects: { ketenangan: -5, kepercayaan: -5, tekanan: 18, relasi_rt: -4, relasi_siti: -2, relasi_budi: -2, relasi_roni: 4 },
                    setFlag: "flag_pilihan_resign",
                    followUp: [
                        { sender: "pak_rt", text: "Lho Mas Dika?! Jangan pencet keluar grup dulu Mas!!", time: "21:06" }
                    ],
                    log: "Milih RESIGN total demi nyelametin kewarasan dan jam tidur."
                },
                {
                    type: "Sarkastis",
                    tag: "😏 Julid / Sarkas",
                    label: "Usulin jabatan Admin digilir tiap hari antara Bu Siti sama Pak Budi!",
                    reply: "Saya usul mulai besok jabatan Admin digilir demokratis aja: Senin Bu Siti, Selasa Pak Budi, biar semuanya ngerasain nikmatnya diteror notif 24 jam!",
                    effects: { ketenangan: -10, kepercayaan: -4, tekanan: -5, relasi_rt: -2, relasi_siti: -5, relasi_budi: -5, relasi_roni: 10 },
                    followUp: [
                        { sender: "roni", text: "Ide paling brutal dan revolusioner sepanjang sejarah RT 05.", time: "21:06", reaction: "😂" }
                    ],
                    log: "Ngusulin sistem piket admin bergilir antara Bu Siti dan Pak Budi."
                }
            ]
        }
    ],

    endings: {
        admin_teladan: {
            id: "admin_teladan",
            number: "Ending 1 dari 4",
            badge: "ADMIN TELADAN",
            badgeColor: "#0F766E",
            bg: "kamar_dika",
            featuredChar: "dika",
            title: "Admin Teladan (Customer Service Abadi RT 05)",
            subtitle: "Grup sukses adem, tapi ketenangan hidupmu jadi tumbalnya.",
            narrative: [
                "Tiga hari penuh drama akhirnya kelar. Grup WargaChat RT 05 selamat dari tragedi iuran 15 ribu, parkir gang sempit, salah kamar Pak RT, sampai rapat balai warga tanpa pecah perang saudara.",
                "Tapi sukses jadi penengah malah bikin kamu kena jebakan baru: Pak RT resmi ngangkat kamu jadi 'Admin Tetap Seumur Hidup', dan satu RT sekarang nganggep HP kamu kayak call center 24 jam.",
                "Baru aja kepala nempel bantal, notif baru masuk dari Bu Siti: 'Mas Dika Admin, tolong umumin dong, barusan Mayor Oren lewat bawa sebelah kaus kaki warna pink milik siapa ya?'"
            ],
            quote: "\"Jadi admin yang bener itu gampang. Berhenti jadi admin itu yang mustahil.\""
        },
        perang_grup: {
            id: "perang_grup",
            number: "Ending 2 dari 4",
            badge: "PERANG GRUP RT",
            badgeColor: "#DC2626",
            bg: "rapat_warga",
            featuredChar: "pak_budi",
            title: "Perang Grup RT (Pecah Jadi 3 Kubu!)",
            subtitle: "Ketenangan grup anjlok total, malah beranak pinak jadi 3 grup tandingan.",
            narrative: [
                "Akumulasi sindiran halus, spam foto pot vs daun mangga, dan debat kusir akhirnya bikin ketenangan grup 'RT 05 Kompak' ambruk total dan resmi bubar jalan.",
                "Malem itu juga, Pak Budi keluar terus bikin grup 'RT 05 Lurus & Beradab'. Nggak mau kalah, Bu Siti bikin grup 'RT 05 Informatif Anti-Baper', sementara Roni bikin 'Aliansi Pos Ronda Netral'.",
                "Kamu sempet lega ngira tugasmu kelar... sampai 3 notif masuk beruntun: Kamu resmi diangkat jadi Admin di KETIGA grup pecahan itu sekaligus!"
            ],
            quote: "\"Satu grup RT bubar, tumbuh tiga grup baru di HP-mu.\""
        },
        aku_resign: {
            id: "aku_resign",
            number: "Ending 3 dari 4",
            badge: "AKU RESIGN!",
            badgeColor: "#EA580C",
            bg: "kamar_dika",
            featuredChar: "dika",
            title: "Aku Resign! (Merdeka Cuma 10 Menit)",
            subtitle: "Mental udah mentok, akhirnya keluar grup... tapi ditarik balik lagi!",
            narrative: [
                "Ratusan notif soal sandal kiri, hoaks air galon, parkir sedan, dan perang bakwan vs lemper bikin level stres kamu tembus batas kewarasan manusia normal.",
                "Dengan tangan gemeter tapi hati lega pol, kamu mencet tombol merah keramat: 'Dika keluar dari Grup RT 05 Kompak.' Sepuluh menit penuh kamarmu super hening, damai, kayak lagi liburan di pegunungan.",
                "Di menit kesebelas, HP-mu bunyi lagi: 'Pak RT Hendra membuat grup RT 05 REBORN dan menjadikan Anda sebagai Super Admin.' Nggak ada jalan kabur dari RT 05."
            ],
            quote: "\"Kamu bisa cabut dari grup RT, tapi grup RT nggak bakal pernah cabut dari hidupmu.\""
        },
        ketua_rt_baru: {
            id: "ketua_rt_baru",
            number: "Ending 4 dari 4",
            badge: "KETUA RT BARU",
            badgeColor: "#CA8A04",
            bg: "rapat_warga",
            featuredChar: "pak_rt",
            title: "Ketua RT Baru (Kebanyakan Kompeten!)",
            subtitle: "Terlalu jago nenangin warga sampai kamu dikudeta jadi Pak RT 05!",
            narrative: [
                "Gara-gara diplomasi yang super keren, grup tetap adem, plus respek penuh dari Bu Siti, Pak Budi, Pak RT, sampai Roni, Rapat Besar malam itu ditutup dengan tepuk tangan meriah.",
                "Saking terharunya liat skill kepemimpinanmu, Pak RT Hendra mendadak ngeluarin stempel basah dari kantong batik dan ngumumin pensiun dini detik itu juga!",
                "Secara aklamasi, warga langsung ngangkat kamu jadi Ketua RT 05 termuda! Niat awal cuma mau rebahan di hari Minggu, sekarang meja kamarmu penuh stempel RT, buku kas iuran, dan jadwal ronda satu semester."
            ],
            quote: "\"Pesan moral: Jangan pernah keliatan terlalu jago ngurus masalah di grup WA RT.\""
        }
    }
};
