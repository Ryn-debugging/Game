/**
 * ADMIN DADAKAN: Grup RT — js/story_data.js
 * Database Naratif Lengkap: 5 Karakter, 10 Arsip Kejadian, 5 Stiker RT,
 * Prolog, 15 Kejadian Utama (3 Hari), dan 4 Ending.
 */

window.GAME_DATA = {
    characters: {
        dika: {
            id: "dika",
            name: "Dika (Admin)",
            shortName: "Dika",
            role: "Admin Baru Dadakan",
            trait: "Sarkastis, menghindari konflik, cuma ingin hidup tenang",
            quote: "\"Aku cuma mau tidur 8 jam sehari, bukan memimpin sidang PBB.\"",
            color: "#075E54",
            badgeBg: "#E6FFFA",
            avatar: "assets/images/char_dika.jpg"
        },
        pak_rt: {
            id: "pak_rt",
            name: "Pak RT Hendra",
            shortName: "Pak RT",
            role: "Ketua Lingkungan RT 05",
            trait: "Tegas di depan, menghindar saat konflik mulai rumit",
            quote: "\"Kita musyawarahkan dulu... lewat Mas Dika ya.\"",
            color: "#B7791F",
            badgeBg: "#FEFCBF",
            avatar: "assets/images/char_pak_rt.jpg"
        },
        bu_siti: {
            id: "bu_siti",
            name: "Bu Siti Blok B",
            shortName: "Bu Siti",
            role: "Warga Aktif & Seksi Informasi",
            trait: "Penasaran, cerewet, selalu merasa paling informatif",
            quote: "\"Saya bukan gosip lho, cuma menyampaikan fakta lapangan!\"",
            color: "#C05621",
            badgeBg: "#FEEBC8",
            avatar: "assets/images/char_bu_siti.jpg"
        },
        pak_budi: {
            id: "pak_budi",
            name: "Pak Budi Pagar Hitam",
            shortName: "Pak Budi",
            role: "Warga Kritis & Mudah Tersinggung",
            trait: "Keras kepala, defensif, selalu merasa sedang disindir",
            quote: "\"Saya tidak tersinggung, hanya meluruskan logika!\"",
            color: "#2B6CB0",
            badgeBg: "#BEE3F8",
            avatar: "assets/images/char_pak_budi.jpg"
        },
        roni: {
            id: "roni",
            name: "Roni Satpam",
            shortName: "Roni",
            role: "Penjaga Malam Pos Ronda",
            trait: "Santai, observatif, penikmat kopi hitam & humor datar",
            quote: "\"Saya melihat semuanya. Saya memilih menyeruput kopi.\"",
            color: "#2D3748",
            badgeBg: "#E2E8F0",
            avatar: "assets/images/char_roni.jpg"
        }
    },

    backgrounds: {
        kamar_dika: {
            id: "kamar_dika",
            name: "Kamar Dika — RT 05",
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
            title: "SK Admin Tanpa Tanda Tangan",
            desc: "Pak RT mengangkat Dika jadi admin tunggal lewat satu pesan singkat lalu langsung pamit 'istirahat notifikasi' demi menjaga tensi darah."
        },
        tragedi_iuran: {
            id: "tragedi_iuran",
            day: "Hari 1",
            icon: "💸",
            title: "Tragedi Iuran Rp15.000",
            desc: "Bu Siti mengingatkan iuran kebersihan tanpa menyebut nama, namun Pak Budi menulis pembelaan emosional karena merasa pagar hitamnya disindir."
        },
        sandal_ronda: {
            id: "sandal_ronda",
            day: "Hari 1",
            icon: "🩴",
            title: "Misteri Sandal Kiri Pos Ronda",
            desc: "Sandal jepit inventaris pos ronda hilang sebelah kiri. Pak Budi menduga sindikat kriminal, padahal dijadikan bantal oleh kucing oren."
        },
        parkir_gang: {
            id: "parkir_gang",
            day: "Hari 2",
            icon: "🚗",
            title: "Geopolitik Parkir Gang Sempit",
            desc: "Ban mobil tamu Pak Budi memakan hampir separuh jalan gang sampai gerobak sayur Mang Ujang nyangkut, memicu debat kedaulatan aspal."
        },
        kucing_sampah: {
            id: "kucing_sampah",
            day: "Hari 2",
            icon: "🐈",
            title: "Mayor Oren Penguasa Tong Sampah",
            desc: "Di tengah aksi saling tuduh warga soal sampah berantakan, Roni mengirim bukti foto kucing oren yang tidur pulas di atas TKP."
        },
        salah_kamar_rt: {
            id: "salah_kamar_rt",
            day: "Hari 2",
            icon: "🙊",
            title: "Insiden Salah Kamar Pak RT",
            desc: "Pak RT berniat curhat ke istrinya bahwa ia ingin pindah ke RT 08 gara-gara Pak Budi & Bu Siti, tapi terkirim ke grup warga!"
        },
        kopi_ronda: {
            id: "kopi_ronda",
            day: "Hari 2",
            icon: "☕",
            title: "Filosofi Kopi Sachet Pos Ronda",
            desc: "Obrolan malam di pos ronda bersama Roni mengungkap bahwa 80% keributan grup RT terjadi karena warga kurang piknik dan butuh didengar."
        },
        undangan_rapat: {
            id: "undangan_rapat",
            day: "Hari 3",
            icon: "📢",
            title: "Undangan Rapat Paling Tegang Se-Kecamatan",
            desc: "Undangan rapat bulanan RT 05 yang atmosfernya di grup chat terasa seperti sidang mahkamah internasional."
        },
        kudeta_mute: {
            id: "kudeta_mute",
            day: "Hari 3",
            icon: "🔇",
            title: "Kudeta Tombol Mute Grup",
            desc: "Perang bukti foto pot bunga patah vs daun mangga gugur yang memaksa Dika berhadapan dengan tombol sakral pengunci chat grup."
        },
        debat_kusir: {
            id: "debat_kusir",
            day: "Hari 3",
            icon: "🎙️",
            title: "Musyawarah Mufakat Rasa Debat Kusir",
            desc: "Rapat puncak di Balai Warga RT 05 di mana keluhan sampah, parkir, kursi lipat, dan gorengan melebur jadi satu ujian pamungkas."
        }
    },

    stickers: {
        stiker_pagi: {
            id: "stiker_pagi",
            title: "Selamat Pagi Semoga Berkah 4K",
            sender: "Bu Siti Blok B",
            emoji: "🌹✨☕",
            topText: "SELAMAT PAGI WARGA RT 05",
            bottomText: "Semoga Rezeki Lancar & Tetangga Rukun!",
            theme: "linear-gradient(135deg, #F6AD55, #ED8936)"
        },
        stiker_tenang: {
            id: "stiker_tenang",
            title: "Harap Tenang Ada Ujian Kehidupan",
            sender: "Roni Satpam",
            emoji: "🤫☕🌙",
            topText: "HARAP TENANG & JANGAN BERISIK",
            bottomText: "Admin Sedang Menghadapi Ujian Kehidupan",
            theme: "linear-gradient(135deg, #4A5568, #2D3748)"
        },
        stiker_pantau: {
            id: "stiker_pantau",
            title: "Pantau Terus Jangan Kasih Kendor",
            sender: "Pak Budi Pagar Hitam",
            emoji: "👀🔍📏",
            topText: "MENYIMAK DENGAN SEKSAMA",
            bottomText: "Saya Tidak Marah, Hanya Meluruskan!",
            theme: "linear-gradient(135deg, #4299E1, #2B6CB0)"
        },
        stiker_gorengan: {
            id: "stiker_gorengan",
            title: "Rapat Penting: Bahas Gorengan",
            sender: "Pak RT Hendra",
            emoji: "🍵🥟🤝",
            topText: "MUSYAWARAH MUFAKAT RT 05",
            bottomText: "Masalah Selesai Kalau Gorengan Masih Hangat",
            theme: "linear-gradient(135deg, #ECC94B, #B7791F)"
        },
        stiker_admin: {
            id: "stiker_admin",
            title: "Admin Juga Manusia",
            sender: "Dika (Admin)",
            emoji: "📱😵🏳️",
            topText: "ADMIN GRUP JUGA MANUSIA",
            bottomText: "Bukan Customer Service 24 Jam!",
            theme: "linear-gradient(135deg, #38B2AC, #075E54)"
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
                speakerTitle: "Dika (Warga Biasa RT 05)",
                text: "Minggu pagi di Kamar RT 05. Kipas angin berputar pelan, kopi tubruk baru diseduh, dan target hidupku hari ini cuma satu: tidak ikut campur urusan manusia lain."
            },
            {
                bg: "jalan_rt",
                speaker: "pak_rt",
                speakerTitle: "Pak RT Hendra",
                text: "\"Assalamualaikum Mas Dika! Wah, kebetulan anak muda yang paling melek teknologi sudah bangun. Tensi Bapak agak naik gara-gara baca notifikasi grup WargaChat RT 05 tiap subuh.\""
            },
            {
                bg: "jalan_rt",
                speaker: "pak_rt",
                speakerTitle: "Pak RT Hendra",
                text: "\"Dokter menyarankan Bapak 'puasa menengahi debat warga' selama tiga hari. Jadi mulai detik ini, Mas Dika Bapak tunjuk jadi Admin Grup RT 05 ya! Tugasnya gampang kok, cuma teruskan pengumuman!\""
            },
            {
                bg: "kamar_dika",
                speaker: "dika",
                speakerTitle: "Dika (Admin Dadakan)",
                text: "Belum sempat aku menjawab 'Tidak', sebuah notifikasi keramat muncul di layar HP: 'Pak RT Hendra telah menjadikan Anda sebagai Admin Grup RT 05 Kompak.' Dan hidup tenangku resmi berakhir."
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
            title: "Kejadian 1: Mandat Dadakan",
            mode: "chat",
            bg: "kamar_dika",
            featuredChar: "pak_rt",
            unlockArchive: "sk_admin",
            messages: [
                { sender: "system", text: "Pak RT Hendra menjadikan Dika sebagai Admin Grup", time: "07:14" },
                { sender: "pak_rt", text: "Warga RT 05 yang saya cintai, berhubung tensi saya perlu istirahat, mulai pagi ini Mas Dika resmi jadi Admin Grup RT 05. Kita musyawarahkan semuanya lewat Mas Dika ya.", time: "07:15" },
                { sender: "bu_siti", text: "Wah selamat Mas Dika!! Kebetulan saya sudah siapkan 7 laporan warga yang belum sempat dibahas Pak RT!", time: "07:16" },
                { sender: "pak_budi", text: "Saya harap admin baru benar-benar netral. Jangan seperti sebelum-sebelumnya yang membiarkan sindiran liar berkeliaran di grup.", time: "07:17" },
                { sender: "roni", text: "Selamat bertugas di garis depan, Mas Dika. Saya memantau dari pos ronda sambil ngopi.", time: "07:18" }
            ],
            monologue: "Baru tiga menit jadi admin, Bu Siti sudah menodongkan 7 laporan dan Pak Budi sudah pasang kuda-kuda. Bagaimana aku membuka jabatan dadakan ini?",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Sapa warga dengan ramah & ajak jaga ketenangan grup bersama",
                    reply: "Selamat pagi Bapak/Ibu semua. Terima kasih kepercayaannya. Mari kita gunakan grup ini untuk berbagi info penting dengan kepala dingin dan rukun ya.",
                    effects: { ketenangan: 6, kepercayaan: 5, tekanan: 3, relasi_rt: 6, relasi_siti: 4, relasi_budi: 3, relasi_roni: 2 },
                    followUp: [
                        { sender: "pak_rt", text: "Nah, adem sekali bahasanya. Bapak tenang istirahat kalau begini.", time: "07:20" },
                        { sender: "bu_siti", text: "Siap Mas Admin yang sopan!", time: "07:21" }
                    ],
                    log: "Membuka jabatan admin dengan sambutan diplomatis yang menyejukkan grup."
                },
                {
                    type: "Tegas",
                    label: "Tetapkan 3 aturan ketat: Dilarang nyinyir, dilarang hoaks, wajib fakta",
                    reply: "Pagi semua. Selama saya admin, berlaku 3 aturan tegas: 1. Dilarang menyindir tanpa sebut fakta, 2. Dilarang sebar kabar tanpa sumber, 3. Debat pribadi wajib pindah ke japri.",
                    effects: { ketenangan: -3, kepercayaan: 8, tekanan: 4, relasi_rt: 2, relasi_siti: -4, relasi_budi: 6, relasi_roni: 3 },
                    setFlag: "flag_aturan_ketat",
                    followUp: [
                        { sender: "pak_budi", text: "Hmm. Aturan nomor 1 bagus sekali, asal ditegakkan ke ibu-ibu yang suka bicara implisit.", time: "07:20" },
                        { sender: "bu_siti", text: "Lho kok langsung melirik ke ibu-ibu Pak Budi?! Saya kan cuma informatif!", time: "07:21" }
                    ],
                    log: "Menetapkan aturan grup yang tegas sejak menit pertama menjabat."
                },
                {
                    type: "Sarkastis",
                    label: "Keluhkan penunjukan sepihak tanpa gaji dengan humor datar",
                    reply: "Terima kasih Pak RT atas jabatan tanpa wawancara dan tanpa tunjangan ini. Bagi warga yang mau mengeluh, loket komplain dibuka setelah kopi tubruk saya habis.",
                    effects: { ketenangan: -4, kepercayaan: -2, tekanan: -5, relasi_rt: 0, relasi_siti: 1, relasi_budi: -6, relasi_roni: 10 },
                    followUp: [
                        { sender: "roni", text: "Hahaha, mantap Mas Dika. Sabar adalah koentji.", time: "07:20" },
                        { sender: "pak_budi", text: "Admin baru kok malah bercanda. Urusan RT itu amanah serius, Mas.", time: "07:21" }
                    ],
                    log: "Menanggapi mandat admin dengan sarkasme yang disukai Roni tapi dikritik Pak Budi."
                },
                {
                    type: "Menghindar",
                    label: "Balas singkat dengan satu jempol agar tidak memancing obrolan",
                    reply: "👍 Siap Pak RT. Mohon kerja samanya Bapak/Ibu.",
                    effects: { ketenangan: 0, kepercayaan: -4, tekanan: -3, relasi_rt: -1, relasi_siti: -3, relasi_budi: 0, relasi_roni: 1 },
                    followUp: [
                        { sender: "bu_siti", text: "Ya ampun Mas Dika, sambutan admin baru kok singkat amat kayak balasan tukang galon.", time: "07:20" }
                    ],
                    log: "Memilih irit bicara di awal penunjukan sebagai admin."
                }
            ]
        },

        {
            id: "ev_2",
            day: 1,
            dayTitle: "Hari 1 — Admin Baru",
            phase: "Pagi",
            time: "09:30",
            title: "Kejadian 2: Iuran Kebersihan & Sindiran Halus",
            mode: "chat",
            bg: "jalan_rt",
            featuredChar: "bu_siti",
            unlockArchive: "tragedi_iuran",
            messages: [
                { sender: "bu_siti", text: "Sekadar mengingatkan warga RT 05, iuran kebersihan Rp15.000 jatuh tempo hari ini. Saya bukan gosip, cuma menyampaikan, soalnya petugas sampah tadi nanya rumah pagar hitam yang belum bayar.", time: "09:30" },
                { sender: "pak_budi", text: "Bu Siti, yang pagarnya baru dicat hitam di blok ini cuma rumah saya! Saya tidak tersinggung, hanya meluruskan: saya bukannya nunggak, tapi bendahara kemarin diketuk tidak ada di rumah!", time: "09:32" },
                { sender: "bu_siti", text: "Lho, siapa yang menyebut nama Pak Budi? Kenapa Bapak yang langsung ngegas?", time: "09:33" },
                { sender: "pak_rt", text: "Aduh tensi Bapak naik lagi... Mas Dika, tolong ditengahi ya, kita musyawarahkan dulu.", time: "09:34" }
            ],
            monologue: "Konflik klasik RT 05: Bu Siti melempar umpan 'pagar hitam' tanpa nama, dan Pak Budi langsung menyambar seolah disebut lengkap dengan nomor KK.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Ajak bahas detail pembayaran via japri pribadi agar grup tetap adem",
                    reply: "Terima kasih pengingatnya Bu Siti, dan terima kasih konfirmasinya Pak Budi. Untuk urusan teknis penjemputan iuran, langsung japri bendahara saja ya agar tidak salah paham di grup.",
                    effects: { ketenangan: 8, kepercayaan: 6, tekanan: 4, relasi_rt: 5, relasi_siti: 3, relasi_budi: 6, relasi_roni: 1 },
                    followUp: [
                        { sender: "pak_budi", text: "Nah, itu baru solusi profesional. Kalau japri kan jelas.", time: "09:36" },
                        { sender: "bu_siti", text: "Siap Mas Admin, saya cuma membantu kas RT kok.", time: "09:37" }
                    ],
                    log: "Mengalihkan debat iuran kebersihan Rp15.000 ke jalur japri pribadi."
                },
                {
                    type: "Tegas",
                    label: "Unggah rekap resmi bendahara untuk membuktikan jadwal jemput sore",
                    reply: "Daripada tebak-tebakan warna pagar, saya lampirkan catatan bendahara: rumah Pak Budi memang dijadwalkan jemput iuran sore ini pukul 16:00. Jadi tidak ada yang menunggak. Topik ditutup.",
                    effects: { ketenangan: 5, kepercayaan: 10, tekanan: 5, relasi_rt: 4, relasi_siti: -3, relasi_budi: 9, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_budi", text: "Terima kasih Mas Dika! Fakta data berbicara lebih keras daripada gosip!", time: "09:36" },
                        { sender: "bu_siti", text: "Ooh jadwal jemput sore toh... kirain lupa. Hehehe maaf ya Pak Budi.", time: "09:37" }
                    ],
                    log: "Menyelesaikan sengketa iuran Rp15.000 dengan bukti rekap bendahara."
                },
                {
                    type: "Sarkastis",
                    label: "Sindir keduanya bahwa iuran Rp15.000 tidak perlu drama tiga babak",
                    reply: "Luar biasa, hanya dengan modal iuran Rp15.000 grup kita berhasil memproduksi ketegangan setara sinetron prime time. Yang mau nonton episode 2 silakan bayar tiket ke kas RT.",
                    effects: { ketenangan: -8, kepercayaan: -3, tekanan: -2, relasi_rt: -2, relasi_siti: -4, relasi_budi: -8, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Wkwkwk saya pesan bangku deretan depan Mas Dika.", time: "09:36" },
                        { sender: "pak_budi", text: "Harga diri keluarga saya tidak bisa diukur dengan Rp15.000, Mas Dika!", time: "09:37" }
                    ],
                    log: "Menyiram bensin humor satir ke tengah debat iuran Rp15.000."
                },
                {
                    type: "Menghindar",
                    label: "Abaikan percakapan dan biarkan mereka berdebat sampai bosan",
                    reply: "(Kamu memilih tidak mengetik apa-apa dan menaruh HP di samping bantal.)",
                    isSilent: true,
                    effects: { ketenangan: -10, kepercayaan: -6, tekanan: 2, relasi_rt: -5, relasi_siti: -2, relasi_budi: -3, relasi_roni: 0 },
                    followUp: [
                        { sender: "bu_siti", text: "Makanya Pak, kalau tidak merasa ya tidak usah pakai tanda seru!", time: "09:36" },
                        { sender: "pak_budi", text: "Kalimat Ibu itu definisi pasif-agresif di buku psikologi!", time: "09:37" }
                    ],
                    log: "Membiarkan debat iuran Bu Siti dan Pak Budi meledak tanpa mediasi."
                }
            ]
        },

        {
            id: "ev_3",
            day: 1,
            dayTitle: "Hari 1 — Admin Baru",
            phase: "Siang",
            time: "12:15",
            title: "Kejadian 3: Teror Stiker & Hoaks Air Galon",
            mode: "chat",
            bg: "kamar_dika",
            featuredChar: "bu_siti",
            unlockSticker: "stiker_pagi",
            messages: [
                { sender: "bu_siti", type: "sticker", stickerId: "stiker_pagi", time: "12:15" },
                { sender: "bu_siti", text: "INFO PENTING DARI GRUP SEBELAH!! Jangan minum air galon sambil berdiri di hari Selasa karena gelombang magnetnya bisa membuat sinyal Wi-Fi di rumah melemah!! Sebarkan ke 10 grup demi keselamatan warga!", time: "12:16" },
                { sender: "pak_rt", text: "Astaga, pantas saja Wi-Fi rumah Bapak agak muter-muter tadi pagi. Terima kasih infonya Bu Siti, sangat bermanfaat.", time: "12:17" },
                { sender: "pak_budi", text: "Ini logika fisikanya dari mana?! Air mineral di kerongkongan sama router frekuensi 2.4 GHz tidak ada hubungannya sama sekali!", time: "12:18" }
            ],
            monologue: "Bu Siti mengirim pesan berantai absurd lengkap dengan stiker bunga 4K, dan gawatnya Pak RT malah percaya. Aku harus bertindak sebelum warga RT 05 minum sambil kayang.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Jelaskan dengan santun bahwa pesan tersebut cuma hoaks humor internet",
                    reply: "Terima kasih perhatiannya untuk warga, Bu Siti. Tapi setelah saya cek, info air galon memengaruhi sinyal Wi-Fi itu tidak benar alias hoaks parodi. Jadi warga aman minum seperti biasa ya.",
                    effects: { ketenangan: 6, kepercayaan: 7, tekanan: 3, relasi_rt: 5, relasi_siti: 5, relasi_budi: 4, relasi_roni: 2 },
                    followUp: [
                        { sender: "bu_siti", text: "Ooh hoaks toh Mas? Soalnya ada label 'Diteruskan berkali-kali', saya kira artinya sudah disahkan pemerintah!", time: "12:20" },
                        { sender: "pak_rt", text: "Syukurlah, Bapak nggak jadi ganti provider Wi-Fi.", time: "12:21" }
                    ],
                    log: "Meluruskan hoaks air galon vs Wi-Fi tanpa mempermalukan Bu Siti."
                },
                {
                    type: "Tegas",
                    label: "Larang keras pengiriman pesan berantai tanpa sumber resmi di grup",
                    reply: "Perhatian untuk seluruh warga: Dilarang meneruskan pesan berantai yang tidak memiliki sumber medis atau ilmiah resmi ke grup RT 05. Mari jaga grup dari disinformasi.",
                    effects: { ketenangan: 2, kepercayaan: 8, tekanan: 4, relasi_rt: -2, relasi_siti: -7, relasi_budi: 8, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_budi", text: "Tepat sekali! Akhirnya ada penegakan literasi sains di grup ini.", time: "12:20" },
                        { sender: "bu_siti", text: "Iya deh iya... orang niat baik berbagi info malah kena semprot.", time: "12:21" }
                    ],
                    log: "Memberlakukan larangan tegas terhadap pesan berantai hoaks."
                },
                {
                    type: "Sarkastis",
                    label: "Balas dengan teori konspirasi tandingan soal tagihan iuran & baterai HP",
                    reply: "Betul Bu Siti. Bahkan menurut riset terbaru dari Pos Ronda, terlalu sering membaca tagihan iuran di grup bisa menyebabkan baterai HP warga turun drastis 45%.",
                    effects: { ketenangan: 4, kepercayaan: -2, tekanan: -4, relasi_rt: 1, relasi_siti: 2, relasi_budi: -3, relasi_roni: 7 },
                    followUp: [
                        { sender: "roni", text: "Valid 100%, baterai saya langsung lowbat tiap awal bulan.", time: "12:20" },
                        { sender: "bu_siti", text: "Hahaha Mas Dika ini malah ngelawak!", time: "12:21" }
                    ],
                    log: "Membalas hoaks air galon dengan teori satir baterai HP."
                },
                {
                    type: "Menghindar",
                    label: "Biarkan Pak Budi menceramahi Bu Siti soal gelombang radio",
                    reply: "(Kamu membiarkan Pak Budi mengetik kuliah pengantar telekomunikasi di grup.)",
                    isSilent: true,
                    effects: { ketenangan: -7, kepercayaan: -4, tekanan: 2, relasi_rt: -2, relasi_siti: -4, relasi_budi: -2, relasi_roni: 0 },
                    followUp: [
                        { sender: "pak_budi", text: "Bu Siti, panjang gelombang router itu tidak melewati lambung manusia!", time: "12:20" },
                        { sender: "bu_siti", text: "Ya biasa aja dong Pak Budi jelasinnya, nggak usah ngegas!", time: "12:21" }
                    ],
                    log: "Membiarkan Pak Budi dan Bu Siti berdebat soal fisika air galon."
                }
            ]
        },

        {
            id: "ev_4",
            day: 1,
            dayTitle: "Hari 1 — Admin Baru",
            phase: "Sore",
            time: "16:20",
            title: "Kejadian 4: Misteri Sandal Kiri Pos Ronda",
            mode: "chat",
            bg: "pos_ronda",
            featuredChar: "roni",
            unlockArchive: "sandal_ronda",
            messages: [
                { sender: "roni", text: "Laporan sore dari Pos Ronda RT 05: Sandal jepit inventaris pos warna biru hilang sebelah kiri. Yang sebelah kanan masih utuh di tempatnya. Saya melihat semuanya, tapi kali ini saya bingung.", time: "16:20" },
                { sender: "pak_budi", text: "Nah! Hari ini sandal sebelah kiri yang hilang, besok-besok bisa spion mobil warga! Keamanan RT 05 harus dievaluasi menyeluruh!", time: "16:22" },
                { sender: "bu_siti", text: "Jangan-jangan tadi siang ada penyusup misterius masuk gang waktu warga lagi tidur siang?!", time: "16:23" }
            ],
            monologue: "Cuma sandal jepit karet sebelah kiri yang raib di pos ronda, tapi Pak Budi dan Bu Siti sudah bersiap menaikkan status darurat keamanan nasional.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Tenangkan warga dan minta Roni memeriksa kolong pos & semak sekitar",
                    reply: "Tenang Bapak/Ibu, jangan panik dulu. Mas Roni, tolong cek di kolong dipan pos ronda atau dekat pot tanaman, biasanya sering dibawa main kucing.",
                    effects: { ketenangan: 8, kepercayaan: 8, tekanan: 2, relasi_rt: 4, relasi_siti: 4, relasi_budi: 3, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Sebentar saya tengok kolong pos... Oalah, ketemu Mas Dika. Sedang dijadikan bantal tidur siang sama kucing oren.", time: "16:25" },
                        { sender: "bu_siti", text: "Alhamdulillah bukan maling... dasar kucing oren ada-ada saja!", time: "16:26" }
                    ],
                    log: "Memecahkan misteri sandal kiri pos ronda dengan tenang bersama Roni."
                },
                {
                    type: "Tegas",
                    label: "Tegur warga agar tidak menyebar kepanikan dari urusan sepele",
                    reply: "Bapak/Ibu, hilangnya satu sandal jepit bukan indikator darurat kriminalitas. Mohon grup tidak dipakai memicu kepanikan warga tanpa bukti nyata.",
                    effects: { ketenangan: -2, kepercayaan: 5, tekanan: 4, relasi_rt: 2, relasi_siti: -3, relasi_budi: -6, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_budi", text: "Saya bukannya menyebar panik Mas Dika, itu namanya kewaspadaan dini!", time: "16:25" }
                    ],
                    log: "Menegur warga agar tidak panik berlebihan soal sandal hilang."
                },
                {
                    type: "Sarkastis",
                    label: "Umumkan waspada sindikat pencuri internasional spesialis kaki kiri",
                    reply: "Pengumuman Siaga Satu: Harap kunci pintu rapat-rapat, kemungkinan kita sedang berhadapan dengan sindikat maling profesional spesialis kaki sebelah kiri.",
                    effects: { ketenangan: 3, kepercayaan: -1, tekanan: -5, relasi_rt: 0, relasi_siti: 2, relasi_budi: -4, relasi_roni: 9 },
                    followUp: [
                        { sender: "roni", text: "Kalau ketemu pelakunya pasti gampang dikenali Mas, jalannya lompat satu kaki.", time: "16:25" }
                    ],
                    log: "Mencairkan kepanikan sandal pos ronda dengan lelucon maling kaki kiri."
                },
                {
                    type: "Menghindar",
                    label: "Suruh Roni mengurus sandalnya sendiri di pos",
                    reply: "Mas Roni tolong dicari sendiri saja ya di pos, saya lagi ada kerjaan.",
                    effects: { ketenangan: -3, kepercayaan: -5, tekanan: -2, relasi_rt: 0, relasi_siti: 0, relasi_budi: -2, relasi_roni: -4 },
                    followUp: [
                        { sender: "roni", text: "Siap Mas, malam ini saya patroli pakai gaya bangau satu kaki dulu.", time: "16:25" }
                    ],
                    log: "Mengabaikan laporan sandal hilang dari Roni."
                }
            ]
        },

        {
            id: "ev_5",
            day: 1,
            dayTitle: "Hari 1 — Admin Baru",
            phase: "Malam",
            time: "21:40",
            title: "Kejadian 5: Jam Malam & Martabak Tengah Malam",
            mode: "chat",
            bg: "pos_ronda",
            featuredChar: "pak_budi",
            unlockSticker: "stiker_tenang",
            messages: [
                { sender: "pak_budi", text: "Jam 21:40 masih ada motor kurir paket lewat gas kencang-kencang di depan rumah! Portal gang RT 05 harusnya dikunci rapat jam 21:00 malam titik!", time: "21:40" },
                { sender: "bu_siti", text: "Eh jangan jam 9 malam dong Pak Budi! Keluarga saya sering pesan martabak manis jam setengah sepuluh malam! Kalau dikunci kasihan abangnya!", time: "21:41" },
                { sender: "roni", type: "sticker", stickerId: "stiker_tenang", time: "21:42" },
                { sender: "pak_rt", text: "Mas Dika, Bapak sudah minum obat tidur, tolong diputuskan kebijakan portal malam ini ya. Selamat malam warga.", time: "21:43" }
            ],
            monologue: "Pak RT langsung kabur balik selimut begitu debat jam malam dimulai. Hari pertama jadi admin ditutup dengan benturan kepentingan: jam tidur Pak Budi vs martabak malam Bu Siti.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Tetapkan portal ditutup jam 22:00 dengan pengawasan kecepatan oleh Roni",
                    reply: "Kita ambil jalan tengah ya: Portal kendaraan ditutup pukul 22:00 WIB, namun mulai pukul 21:00 Mas Roni akan menjaga mulut gang agar kurir berjalan pelan. Tidur tetap tenang, martabak tetap sampai.",
                    effects: { ketenangan: 9, kepercayaan: 9, tekanan: 4, relasi_rt: 6, relasi_siti: 6, relasi_budi: 6, relasi_roni: 5 },
                    followUp: [
                        { sender: "bu_siti", text: "Nah setuju banget! Solusi paling bijak Mas Admin!", time: "21:46" },
                        { sender: "pak_budi", text: "Baiklah, kompromi yang masuk akal asal Roni menegur yang ngebut.", time: "21:47" }
                    ],
                    log: "Menetapkan kompromi portal pukul 22:00 yang mendamaikan kubu tidur dan kubu martabak."
                },
                {
                    type: "Tegas",
                    label: "Kunci portal tepat pukul 21:30; pesanan malam diambil sendiri di pos depan",
                    reply: "Demi ketenangan istirahat warga, portal dikunci pukul 21:30 WIB. Pesanan makanan di atas jam tersebut wajib diambil sendiri oleh pemesan di pos ronda depan.",
                    effects: { ketenangan: 2, kepercayaan: 7, tekanan: 5, relasi_rt: 3, relasi_siti: -7, relasi_budi: 9, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_budi", text: "Mantap! Ini baru ketegasan aturan lingkungan!", time: "21:46" },
                        { sender: "bu_siti", text: "Yah Mas Dika... masa mau makan martabak hangat harus jalan kaki ke ujung gang...", time: "21:47" }
                    ],
                    log: "Memutuskan penutupan portal lebih awal pukul 21:30 WIB."
                },
                {
                    type: "Sarkastis",
                    label: "Izinkan kurir lewat dengan syarat pajak dua potong martabak untuk Admin & Roni",
                    reply: "Keputusan Admin: Portal ditutup jam 9 malam, kecuali bagi kurir martabak yang menyerahkan bea cukai dua potong keju cokelat ke Pos Ronda dan kamar Admin.",
                    effects: { ketenangan: 2, kepercayaan: -3, tekanan: -4, relasi_rt: 0, relasi_siti: 3, relasi_budi: -5, relasi_roni: 9 },
                    followUp: [
                        { sender: "roni", text: "Saya siap mengawal pasal bea cukai martabak ini dengan sepenuh jiwa.", time: "21:46" }
                    ],
                    log: "Menutup Hari 1 dengan pasal pajak martabak pos ronda."
                },
                {
                    type: "Menghindar",
                    label: "Matikan Wi-Fi HP dan pura-pura sudah ketiduran seperti Pak RT",
                    reply: "(Kamu mengaktifkan mode pesawat dan menarik selimut.)",
                    isSilent: true,
                    effects: { ketenangan: -8, kepercayaan: -8, tekanan: -6, relasi_rt: -3, relasi_siti: -4, relasi_budi: -6, relasi_roni: -2 },
                    followUp: [
                        { sender: "pak_budi", text: "Halo?! Mas Dika?! Lho kok centang satu?! Adminnya ikut kabur tidur?!", time: "21:46" }
                    ],
                    log: "Mematikan HP dan membiarkan warga berdebat soal jam malam portal."
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
            title: "Kejadian 6: Geopolitik Parkir Gang Sempit",
            mode: "chat",
            bg: "jalan_rt",
            featuredChar: "pak_budi",
            unlockArchive: "parkir_gang",
            unlockSticker: "stiker_pantau",
            messages: [
                { sender: "bu_siti", text: "📷 [Mengirim Foto] Pagi-pagi mau belanja ke gerobak sayur Mang Ujang terhalang mobil sedan silver parkir melintang makan separuh jalan gang! Ini jalan umum RT atau garasi pribadi ya?", time: "07:30" },
                { sender: "pak_budi", type: "sticker", stickerId: "stiker_pantau", time: "07:31" },
                { sender: "pak_budi", text: "Itu mobil adik ipar saya yang mampir 15 menit antar berkas, Bu Siti! Lagipula motor masih muat lewat kalau jalannya lurus!", time: "07:32" },
                { sender: "bu_siti", text: "Masalahnya gerobak sayur Mang Ujang itu lebar Pak Budi! Sampai nyangkut ikatan kangkungnya di spion!", time: "07:33" }
            ],
            conditionalMessage: {
                check: (state) => state.relasi_budi >= 58,
                msg: { sender: "pak_budi", text: "Mas Dika, kemarin Mas Dika sangat adil memimpin grup. Tolong bantu jelaskan ke Bu Siti kalau tamu saya cuma mampir sebentar.", time: "07:34" }
            },
            monologue: "Hari kedua dibuka dengan krisis paling berdarah di seluruh perumahan Indonesia: parkir mobil di gang sempit yang menghalangi gerobak tukang sayur.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Minta Pak Budi menggeser mobil sedikit ke dekat bahu pos agar gerobak sayur lewat",
                    reply: "Pak Budi, mohon bantuannya agar mobil adik iparnya dimajukan sedikit merapat ke bahu pos supaya gerobak Mang Ujang lewat dengan aman. Bu Siti juga mohon sabar sebentar ya.",
                    effects: { ketenangan: 8, kepercayaan: 8, tekanan: 4, relasi_rt: 4, relasi_siti: 5, relasi_budi: 6, relasi_roni: 2 },
                    followUp: [
                        { sender: "pak_budi", text: "Baik Mas Dika, karena Mas Dika menyampaikannya dengan sopan, ini langsung saya suruh geser.", time: "07:36" },
                        { sender: "bu_siti", text: "Nah gitu dong, kangkung Mang Ujang akhirnya selamat!", time: "07:37" }
                    ],
                    log: "Menyelesaikan sengketa parkir gang tanpa melukai gengsi Pak Budi."
                },
                {
                    type: "Tegas",
                    label: "Tegakkan aturan: Semua mobil tamu wajib pindah ke lapangan pos depan sekarang juga",
                    reply: "Aturan jalan gang RT 05 jelas: lebar jalan harus bebas untuk gerobak dan akses darurat. Semua mobil tamu wajib dipindahkan ke lahan parkir pos depan sekarang juga.",
                    effects: { ketenangan: 3, kepercayaan: 9, tekanan: 6, relasi_rt: 3, relasi_siti: 8, relasi_budi: -7, relasi_roni: 3 },
                    followUp: [
                        { sender: "bu_siti", text: "Hidup Mas Admin! Tegas tanpa pandang bulu!", time: "07:36" },
                        { sender: "pak_budi", text: "Baik, saya pindahkan! Tapi catat ya, nanti kalau tamu blok lain parkir di gang, saya ukur pakai meteran!", time: "07:37" }
                    ],
                    log: "Menegakkan aturan parkir gang secara keras meski membuat Pak Budi mendendam."
                },
                {
                    type: "Sarkastis",
                    label: "Tawarkan kursus parkir lurus gratis bersama Roni di pos ronda",
                    reply: "Info layanan warga: Bagi tamu yang parkir dengan kemiringan estetika 45 derajat di tengah gang, Mas Roni membuka klinik meluruskan setir di Pos Ronda.",
                    effects: { ketenangan: -6, kepercayaan: -2, tekanan: -3, relasi_rt: 0, relasi_siti: 4, relasi_budi: -9, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Siap Mas, biaya pendaftarannya cukup kopi hitam satu renteng.", time: "07:36" },
                        { sender: "pak_budi", text: "Komentar Anda tidak konstruktif, Mas Dika!", time: "07:37" }
                    ],
                    log: "Menyindir sudut parkir mobil tamu Pak Budi di grup."
                },
                {
                    type: "Menghindar",
                    label: "Lempar tanggung jawab teguran parkir ke Pak RT",
                    reply: "Pak RT Hendra, mohon arahannya Pak untuk ketertiban parkir jalan gang kita.",
                    effects: { ketenangan: -5, kepercayaan: -6, tekanan: 2, relasi_rt: -7, relasi_siti: -3, relasi_budi: -2, relasi_roni: 0 },
                    followUp: [
                        { sender: "pak_rt", text: "Mas Dika... Bapak lagi senam pernapasan pagi ini. Masa urusan geser sedan harus Bapak yang turun...", time: "07:36" }
                    ],
                    log: "Mencoba melempar masalah parkir ke Pak RT yang sedang senam pernapasan."
                }
            ]
        },

        {
            id: "ev_7",
            day: 2,
            dayTitle: "Hari 2 — Urusan Bersama",
            phase: "Siang",
            time: "11:10",
            title: "Kejadian 7: Tumpukan Sampah & Mayor Kucing Oren",
            mode: "chat",
            bg: "jalan_rt",
            featuredChar: "roni",
            unlockArchive: "kucing_sampah",
            messages: [
                { sender: "pak_budi", text: "📷 [Mengirim Foto] Sekarang giliran saya yang melapor dengan bukti! Kantong sampah di depan tong Blok B koyak dan berserakan ke jalan. Ini pasti warga Blok B buang sampah tidak diikat!", time: "11:10" },
                { sender: "bu_siti", text: "Eh Pak Budi, Blok B itu depan teras saya! Saya selalu ikat plastik sampah pakai simpul mati tiga kali ya!", time: "11:11" },
                { sender: "roni", text: "📷 [Mengirim Foto Close-Up] Permisi Bapak/Ibu, pelaku utama pembongkaran kantong sampah tertangkap basah sedang tidur kekenyangan di atas kardus.", time: "11:12" },
                { sender: "roni", text: "Pelaku berciri-ciri bulu oren bergaris, tidak terdaftar di KK RT 05, dan kemarin sore juga membajak sandal kiri saya.", time: "11:13" }
            ],
            monologue: "Foto close-up kiriman Roni menampilkan seekor kucing oren gembul yang tidur telentang di samping tong sampah tanpa rasa bersalah sedikit pun.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Apresiasi foto Roni & ajak pasang pengait tutup tong sampah sore ini",
                    reply: "Ternyata tersangkanya warga berkaki empat. Terima kasih bukti fotonya Mas Roni! Sore ini saya koordinasikan pemasangan pengait tutup tong sampah agar aman dari serbuan kucing.",
                    effects: { ketenangan: 9, kepercayaan: 8, tekanan: 2, relasi_rt: 4, relasi_siti: 6, relasi_budi: 4, relasi_roni: 8 },
                    followUp: [
                        { sender: "bu_siti", text: "Tuh kan Pak Budi! Simpul plastik saya tidak bersalah!", time: "11:16" },
                        { sender: "pak_budi", text: "Ya... baguslah kalau investigasi Roni membuktikan bukan kelalaian warga.", time: "11:17" }
                    ],
                    log: "Mengakhiri sengketa sampah Blok B dengan solusi pengait tutup tong sampah."
                },
                {
                    type: "Tegas",
                    label: "Tegur Pak Budi dan Bu Siti agar berhenti saling tuduh sebelum cek fakta",
                    reply: "Kejadian ini jadi pengingat tegas: berhentilah langsung menuduh tetangga di grup sebelum memeriksa fakta lapangan. Bahkan kucingnya saja tidak pernah menuduh siapa-siapa.",
                    effects: { ketenangan: 4, kepercayaan: 7, tekanan: 3, relasi_rt: 2, relasi_siti: 2, relasi_budi: -3, relasi_roni: 5 },
                    followUp: [
                        { sender: "roni", text: "Setuju Mas Dika, kucing oren hanya fokus pada kuliner, bukan gosip.", time: "11:16" }
                    ],
                    log: "Memberi teguran kepada warga agar tidak saling tuduh tanpa bukti."
                },
                {
                    type: "Sarkastis",
                    label: "Angkat si Kucing Oren menjadi Koordinator Keamanan & Kebersihan RT 05",
                    reply: "Mengingat kucing oren ini lebih rajin keliling blok daripada kita semua, dengan ini ia saya angkat menjadi Koordinator Lapangan RT 05. Segala keluhan sampah silakan diajukan dalam bahasa 'Meong'.",
                    effects: { ketenangan: 10, kepercayaan: 3, tekanan: -6, relasi_rt: 3, relasi_siti: 7, relasi_budi: 0, relasi_roni: 9 },
                    setFlag: "flag_kucing_viral",
                    followUp: [
                        { sender: "roni", text: "Siap, Beliau resmi menyandang pangkat Mayor Oren di pos ronda.", time: "11:16" },
                        { sender: "bu_siti", text: "Hahaha gemas banget sih Mayor Oren, jadi lupa tadi lagi marah!", time: "11:17" }
                    ],
                    log: "Mengangkat Mayor Kucing Oren sebagai maskot perdamaian grup RT 05."
                },
                {
                    type: "Menghindar",
                    label: "Tutup kasus dengan satu kalimat singkat",
                    reply: "Pelakunya sudah ketahuan kucing ya. Kasus ditutup.",
                    effects: { ketenangan: 2, kepercayaan: 0, tekanan: -2, relasi_rt: 0, relasi_siti: 0, relasi_budi: 0, relasi_roni: 1 },
                    followUp: [
                        { sender: "roni", text: "Singkat, padat, jelas.", time: "11:16" }
                    ],
                    log: "Menutup kasus sampah kucing oren dengan singkat."
                }
            ]
        },

        {
            id: "ev_8",
            day: 2,
            dayTitle: "Hari 2 — Urusan Bersama",
            phase: "Sore",
            time: "15:05",
            title: "Kejadian 8: Insiden Salah Kamar Pak RT",
            mode: "chat",
            bg: "kamar_dika",
            featuredChar: "pak_rt",
            unlockArchive: "salah_kamar_rt",
            messages: [
                { sender: "pak_rt", text: "Bu, tolong bikinkan teh hangat. Bapak malas banget buka HP kalau Pak Budi sama Bu Siti sudah mulai ribut di grup, rasanya pengen pindah ke RT 08 saja.", time: "15:05" },
                { sender: "system", text: "Pak RT Hendra mencoba menarik pesan (Gagal: Anda menekan 'Hapus untuk Saya', bukan 'Hapus untuk Semua Orang')", time: "15:06" },
                { sender: "pak_budi", text: "APA-APAAN INI PAK RT?! Jadi selama ini Bapak menganggap masukan kritis saya sebagai beban sampai ingin pindah ke RT 08?!", time: "15:07" },
                { sender: "bu_siti", text: "Ya ampun Pak RT... kok nama saya ikut disebut-sebut sih Pak?! Sampai hati Bapak!", time: "15:08" }
            ],
            monologue: "BENCANA BESAR RT 05! Pak RT niat curhat pribadi ke istrinya, tapi terkirim ke grup warga dan salah klik tombol hapus! Sekarang Pak RT japri aku dengan panik minta diselamatkan!",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Pasang badan menjelaskan bahwa Pak RT sedang kelelahan karena terlalu memikirkan warga",
                    reply: "Bapak/Ibu sekalian, Pak RT sedang kurang enak badan sore ini. Beliau justru sangat memikirkan setiap masukan Pak Budi dan Bu Siti sampai terbawa lelah. Mari kita maklumi dan doakan beliau cepat pulih ya.",
                    effects: { ketenangan: 6, kepercayaan: 7, tekanan: 6, relasi_rt: 15, relasi_siti: 3, relasi_budi: 2, relasi_roni: 3 },
                    setFlag: "flag_bantu_rt_salah_kirim",
                    followUp: [
                        { sender: "pak_rt", text: "Betul sekali warga RT 05 yang Bapak sayangi... kacamata baca Bapak tadi buram habis minum obat. Mohon maaf lahir batin ya.", time: "15:11" },
                        { sender: "bu_siti", text: "Ooh habis minum obat... ya sudah cepat sembuh ya Pak RT.", time: "15:12" }
                    ],
                    log: "Menyelamatkan wajah Pak RT dari bencana salah kirim chat ke grup warga."
                },
                {
                    type: "Tegas",
                    label: "Minta Pak RT meminta maaf secara jantan & terbuka tanpa mengarang alasan",
                    reply: "Pak RT, agar kepercayaan warga tetap terjaga, sebaiknya Bapak sampaikan permohonan maaf secara jujur kepada Pak Budi dan Bu Siti bahwa Bapak memang khilaf salah kirim pesan.",
                    effects: { ketenangan: 5, kepercayaan: 11, tekanan: 5, relasi_rt: -5, relasi_siti: 6, relasi_budi: 9, relasi_roni: 5 },
                    followUp: [
                        { sender: "pak_rt", text: "Iya... Bapak mengaku salah dan meminta maaf sebesar-besarnya kepada Pak Budi dan Bu Siti. Bapak khilaf sedang lelah.", time: "15:11" },
                        { sender: "pak_budi", text: "Saya hormati Mas Dika yang berani bersikap objektif bahkan kepada Ketua RT sendiri.", time: "15:12" }
                    ],
                    log: "Meminta Pak RT meminta maaf secara jujur atas pesan salah kirim."
                },
                {
                    type: "Sarkastis",
                    label: "Beri tahu Pak RT bahwa grup RT 08 justru sedang ribut soal tiang jemuran",
                    reply: "Sekadar informasi intelijen untuk Pak RT: Di grup RT 08 kemarin warganya baru saja perang dingin 3 hari gara-gara posisi tiang jemuran. Jadi pindah ke RT 08 bukan jalan ninja yang tepat, Pak.",
                    effects: { ketenangan: 4, kepercayaan: 0, tekanan: -4, relasi_rt: 5, relasi_siti: 4, relasi_budi: -3, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Betul Pak RT, rumput tetangga terlihat lebih hijau karena efek filter kamera.", time: "15:11" }
                    ],
                    log: "Mencairkan insiden salah kamar Pak RT dengan bocoran drama jemuran RT 08."
                },
                {
                    type: "Menghindar",
                    label: "Diam saja dan biarkan Pak RT mengarang alasan HP-nya dipencet kucing",
                    reply: "(Kamu memilih menonton bagaimana Pak RT berusaha ngeles sendiri.)",
                    isSilent: true,
                    effects: { ketenangan: -10, kepercayaan: -5, tekanan: 3, relasi_rt: -8, relasi_siti: -4, relasi_budi: -6, relasi_roni: 2 },
                    followUp: [
                        { sender: "pak_rt", text: "Maaf warga!! Tadi HP Bapak di meja teras keinjak Mayor Kucing Oren waktu mengejar cicak!!", time: "15:11" },
                        { sender: "pak_budi", text: "Mana ada kucing oren bisa mengetik kalimat 'pindah ke RT 08' dengan tanda baca lengkap Pak RT?!", time: "15:12" }
                    ],
                    log: "Membiarkan Pak RT beralasan HP-nya diketik oleh kucing oren."
                }
            ]
        },

        {
            id: "ev_9",
            day: 2,
            dayTitle: "Hari 2 — Urusan Bersama",
            phase: "Sore",
            time: "17:15",
            title: "Kejadian 9: Drama Pinjam Kursi Lipat",
            mode: "chat",
            bg: "rapat_warga",
            featuredChar: "bu_siti",
            messages: [
                { sender: "bu_siti", text: "Mas Dika Admin! Saya baru menghitung kursi lipat di gudang Balai Warga untuk persiapan rapat besok malam. Jumlahnya kurang 2 kursi! Bulan lalu siapa yang pinjam buat acara tapi belum dikembalikan hayo?!", time: "17:15" },
                { sender: "pak_budi", text: "Jangan mengarahkan pandangan ke rumah saya lagi ya Bu Siti! Acara pengajian di rumah saya bulan lalu sewa kursi tenda sendiri pakai kuitansi!", time: "17:16" }
            ],
            conditionalMessage: {
                check: (state) => state.relasi_roni >= 56,
                msg: { sender: "roni", text: "Bisikan Pos Ronda untuk Mas Dika: Di buku catatan saya, kursi lipat nomor 19 dan 20 sedang dipinjam Pak RT buat menjemur kasur lipat di halaman belakang rumahnya.", time: "17:17" }
            },
            monologue: "Kursi lipat besi kurang dua biji saja atmosfer grupnya sudah seperti penyelidikan komisi pemberantasan korupsi.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Cek catatan log Roni dan umumkan posisi kursi tanpa mempermalukan siapa pun",
                    reply: "Tenang Bapak/Ibu, tidak ada kursi yang hilang. Berdasarkan buku log inventaris di pos ronda, 2 kursi sedang dipakai menjemur bantal di halaman Pak RT dan siap dikembalikan ke balai besok pagi.",
                    effects: { ketenangan: 8, kepercayaan: 9, tekanan: 2, relasi_rt: 4, relasi_siti: 5, relasi_budi: 5, relasi_roni: 6 },
                    followUp: [
                        { sender: "pak_rt", text: "Eh iya astaga! Bapak lupa kemarin pinjam dua kursi buat jemur kasur. Besok pagi Bapak angkut ke balai!", time: "17:19" },
                        { sender: "pak_budi", text: "Nah, jelas kan bukan di rumah saya.", time: "17:20" }
                    ],
                    log: "Menemukan 2 kursi lipat yang hilang berkat catatan rapi Roni di pos ronda."
                },
                {
                    type: "Tegas",
                    label: "Wajibkan sistem buku pinjam tertulis & kembalikan inventaris malam ini",
                    reply: "Mulai hari ini, seluruh peminjaman inventaris RT wajib tercatat lewat Admin. Siapa pun yang masih menyimpan 2 kursi lipat harap mengembalikannya ke Balai Warga sebelum jam 8 malam ini.",
                    effects: { ketenangan: 3, kepercayaan: 8, tekanan: 5, relasi_rt: 1, relasi_siti: 5, relasi_budi: 3, relasi_roni: 4 },
                    followUp: [
                        { sender: "bu_siti", text: "Setuju! Biar tertib administrasi gudang RT kita!", time: "17:19" }
                    ],
                    log: "Menertibkan aturan peminjaman inventaris kursi lipat RT 05."
                },
                {
                    type: "Sarkastis",
                    label: "Umumkan bahwa kedua kursi lipat itu mengundurkan diri karena lelah diduduki warga yang suka debat",
                    reply: "Kemungkinan besar dua kursi lipat tersebut memilih resign dan kabur dari gudang karena trauma setiap rapat dipakai duduk sambil berdebat.",
                    effects: { ketenangan: 1, kepercayaan: -2, tekanan: -4, relasi_rt: 0, relasi_siti: 1, relasi_budi: -4, relasi_roni: 7 },
                    followUp: [
                        { sender: "roni", text: "Kursi saja butuh healing Mas Dika, apalagi adminnya.", time: "17:19" }
                    ],
                    log: "Melontarkan lelucon bahwa kursi lipat RT memilih resign."
                },
                {
                    type: "Menghindar",
                    label: "Usulkan yang datang terlambat besok duduk lesehan di tikar",
                    reply: "Cuma kurang dua kursi Bapak/Ibu, besok yang datang rapat paling telat duduk di tikar saja ya.",
                    effects: { ketenangan: -4, kepercayaan: -5, tekanan: -2, relasi_rt: 0, relasi_siti: -5, relasi_budi: -2, relasi_roni: 1 },
                    followUp: [
                        { sender: "bu_siti", text: "Lho kok malah disuruh lesehan sih Mas Admin...", time: "17:19" }
                    ],
                    log: "Menunda pencarian kursi lipat dan menyarankan warga duduk di tikar."
                }
            ]
        },

        {
            id: "ev_10",
            day: 2,
            dayTitle: "Hari 2 — Urusan Bersama",
            phase: "Malam",
            time: "22:15",
            title: "Kejadian 10: Inspeksi Malam Pos Ronda (Adegan Lingkungan)",
            mode: "cutscene",
            bg: "pos_ronda",
            featuredChar: "roni",
            unlockArchive: "kopi_ronda",
            cutsceneIntro: [
                {
                    speaker: "dika",
                    speakerTitle: "Dika (Di Pos Ronda Malam)",
                    text: "Malam hari kedua. Karena mata rasanya sudah juling melihat layar WargaChat seharian, aku berjalan kaki menghirup udara malam ke Pos Ronda RT 05."
                },
                {
                    speaker: "roni",
                    speakerTitle: "Roni Satpam",
                    text: "\"Silakan duduk Mas Admin. Kopi hitam sachet sudah saya seduh. Tenang saja, malam ini kedua sandal jepit saya sudah kembali lengkap.\""
                },
                {
                    speaker: "roni",
                    speakerTitle: "Roni Satpam",
                    text: "\"Rahasia warga RT 05 itu sebenarnya satu, Mas Dika: Mereka bukannya jahat, mereka cuma ingin didengar. Bu Siti ingin dianggap berjasa, Pak Budi ingin dihargai pendapatnya, dan Pak RT cuma ingin hidup tanpa dimarahi keduanya.\""
                },
                {
                    speaker: "pak_budi",
                    speakerTitle: "Pak Budi (Lewat Membawa Senter)",
                    text: "\"Ehm! Selamat malam Mas Dika, Roni. Saya kebetulan lewat sambil jalan malam memastikan portal terkunci. Besok rapat warga pasti bakal ramai sekali.\""
                }
            ],
            messages: [
                { sender: "system", text: "Adegan Lingkungan: Pos Ronda RT 05 (Pukul 22:15 WIB)", time: "22:15" },
                { sender: "roni", text: "Kopi hitam pos ronda siap menemani curhatan Admin Dadakan.", time: "22:16" }
            ],
            monologue: "Di bawah lampu kuning Pos Ronda, Pak Budi berdiri agak canggung sambil memegang senter besar, sementara Roni menyeruput kopi hitamnya.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Ajak Pak Budi duduk ngopi sebentar di pos ronda agar suasana mencair",
                    reply: "Mampir duduk sebentar Pak Budi, masih ada kopi hangat buatan Mas Roni. Sekali-sekali kita ngobrol santai tanpa menatap layar HP.",
                    effects: { ketenangan: 8, kepercayaan: 8, tekanan: -8, relasi_rt: 2, relasi_siti: 0, relasi_budi: 12, relasi_roni: 8 },
                    setFlag: "flag_kopi_ronda_roni",
                    followUp: [
                        { sender: "pak_budi", text: "(Di Pos Ronda) \"Wah... jarang ada anak muda yang mengajak saya ngopi santai begini. Sebenarnya saya di grup itu cuma ingin RT kita tertib kok, Mas Dika.\"", time: "22:25" },
                        { sender: "roni", text: "(Di Pos Ronda) \"Nah, kalau ngobrol sambil ngopi gini kan adem, nggak pakai tanda seru.\"", time: "22:26" }
                    ],
                    log: "Mencairkan kebekuan hubungan dengan Pak Budi lewat kopi malam di Pos Ronda."
                },
                {
                    type: "Tegas",
                    label: "Galang komitmen Pak Budi dan Roni agar rapat besok berjalan tertib tanpa interupsi",
                    reply: "Kebetulan Bapak lewat. Besok malam rapat warga harus fokus pada solusi konkret, bukan debat kusir. Saya harap Pak Budi bisa ikut memberi teladan ketertiban.",
                    effects: { ketenangan: 5, kepercayaan: 10, tekanan: 2, relasi_rt: 3, relasi_siti: 0, relasi_budi: 6, relasi_roni: 5 },
                    followUp: [
                        { sender: "pak_budi", text: "(Di Pos Ronda) \"Tentu Mas Dika! Selama rapat dipimpin dengan objektif, saya paling depan mendukung ketertiban.\"", time: "22:25" }
                    ],
                    log: "Menggalang komitmen ketertiban rapat bersama Pak Budi dan Roni di Pos Ronda."
                },
                {
                    type: "Sarkastis",
                    label: "Tanya apakah senter besar Pak Budi dipakai untuk mengukur kemiringan parkir tetangga",
                    reply: "Senternya terang sekali Pak Budi, cocok buat mencari sandal kiri Roni atau mengukur kemiringan ban mobil tamu sampai satuan milimeter.",
                    effects: { ketenangan: -3, kepercayaan: -2, tekanan: -6, relasi_rt: 0, relasi_siti: 0, relasi_budi: -7, relasi_roni: 9 },
                    followUp: [
                        { sender: "roni", text: "(Tersedak kopi sambil menahan tawa di balik kentongan)", time: "22:25" },
                        { sender: "pak_budi", text: "(Di Pos Ronda) \"Hmph. Saya permisi pulang dulu, angin malam mulai tidak sehat.\"", time: "22:26" }
                    ],
                    log: "Menggoda Pak Budi soal senter inspeksi parkir di Pos Ronda."
                },
                {
                    type: "Menghindar",
                    label: "Pamit cepat-cepat balik ke kamar karena takut disuruh ikut ronda malam",
                    reply: "Saya permisi pulang duluan ya Pak Budi, Mas Roni. Mau mengistirahatkan jempol sebelum hari ketiga besok.",
                    effects: { ketenangan: 0, kepercayaan: -2, tekanan: -5, relasi_rt: 0, relasi_siti: 0, relasi_budi: 0, relasi_roni: 1 },
                    followUp: [
                        { sender: "roni", text: "(Di Pos Ronda) \"Siap Mas Dika, selamat beristirahat!\"", time: "22:25" }
                    ],
                    log: "Memilih langsung pulang tidur dari Pos Ronda."
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
            title: "Kejadian 11: Undangan Rapat Darurat",
            mode: "chat",
            bg: "kamar_dika",
            featuredChar: "pak_rt",
            unlockArchive: "undangan_rapat",
            messages: [
                { sender: "pak_rt", text: "Selamat pagi warga RT 05. Berhubung banyak sekali dinamika selama dua hari ini, malam ini pukul 19:30 WIB kita adakan Rapat Besar di Balai Warga. Mas Dika, tolong buatkan pengumuman resminya ya.", time: "08:00" },
                { sender: "bu_siti", text: "Wajib hadir semua ya! Jangan ada yang cuma galak di grup chat tapi pas diundang rapat malah alasan masuk angin!", time: "08:02" },
                { sender: "pak_budi", text: "Siapa yang Ibu maksud alasan masuk angin?! Bulan lalu saya absen rapat karena jadi pembicara webinar nasional!", time: "08:03" }
            ],
            monologue: "Hari ketiga—hari terakhir masa baktiku! Belum juga draf undangannya kuketik, Bu Siti dan Pak Budi sudah pemanasan ronde pertama sejak jam delapan pagi.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Susun undangan terstruktur dengan 3 agenda jelas & ajakan musyawarah sejuk",
                    reply: "UNDANGAN RESMI RAPAT WARGA RT 05 (Malam ini 19:30 WIB di Balai Warga). Agenda: 1. Kebersihan & Pengait Tong Sampah, 2. Tata Tertib Parkir & Portal Malam, 3. Evaluasi Kepengurusan Grup. Mari hadir membawa solusi terbaik.",
                    effects: { ketenangan: 7, kepercayaan: 9, tekanan: 4, relasi_rt: 7, relasi_siti: 4, relasi_budi: 5, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_rt", text: "Rapi, jelas, dan berwibawa sekali undangannya Mas Dika!", time: "08:06" }
                    ],
                    log: "Menyusun undangan Rapat Besar yang terstruktur dan menenangkan warga."
                },
                {
                    type: "Tegas",
                    label: "Wajibkan kehadiran; warga yang absen dianggap setuju & dilarang protes di grup",
                    reply: "PENGUMUMAN TEGAS: Rapat malam ini pukul 19:30 WIB di Balai Warga bersifat WAJIB. Warga yang tidak hadir dianggap menyetujui seluruh keputusan rapat dan dilarang mengajukan protes susulan di grup.",
                    effects: { ketenangan: 3, kepercayaan: 10, tekanan: 6, relasi_rt: 5, relasi_siti: 2, relasi_budi: 7, relasi_roni: 4 },
                    followUp: [
                        { sender: "pak_budi", text: "Klausul yang sangat adil! Saya pastikan hadir 15 menit sebelum acara!", time: "08:06" }
                    ],
                    log: "Memberlakukan aturan tegas bahwa warga yang absen rapat dilarang protes di grup."
                },
                {
                    type: "Sarkastis",
                    label: "Tulis undangan bergaya poster pertandingan tinju kelas berat",
                    reply: "UNDANGAN SPESIAL MALAM INI 19:30 WIB di Balai Warga: Musyawarah Akbar RT 05. Diharapkan membawa kepala dingin dan tidak membawa meteran jalan, senter taktis, maupun kucing oren.",
                    effects: { ketenangan: 2, kepercayaan: 0, tekanan: -4, relasi_rt: 1, relasi_siti: 3, relasi_budi: -4, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Siap Mas Dika, kentongan pos ronda saya bawa buat penanda pergantian ronde.", time: "08:06" }
                    ],
                    log: "Menulis undangan rapat warga dengan gaya satir pertandingan tinju."
                },
                {
                    type: "Menghindar",
                    label: "Kirim satu baris pengumuman seadanya tanpa daftar agenda",
                    reply: "Malam ini rapat warga jam 19:30 WIB di Balai Warga ya Bapak/Ibu. Terima kasih.",
                    effects: { ketenangan: -3, kepercayaan: -4, tekanan: -2, relasi_rt: -2, relasi_siti: -2, relasi_budi: -2, relasi_roni: 0 },
                    followUp: [
                        { sender: "pak_budi", text: "Agendanya apa saja Mas Dika? Kok singkat sekali?", time: "08:06" }
                    ],
                    log: "Mengirim pengumuman rapat singkat tanpa rincian agenda."
                }
            ]
        },

        {
            id: "ev_12",
            day: 3,
            dayTitle: "Hari 3 — Rapat Besar",
            phase: "Siang",
            time: "13:00",
            title: "Kejadian 12: Perdebatan Konsumsi (Gorengan vs Lemper)",
            mode: "chat",
            bg: "rapat_warga",
            featuredChar: "pak_rt",
            unlockSticker: "stiker_gorengan",
            messages: [
                { sender: "pak_rt", type: "sticker", stickerId: "stiker_gorengan", time: "13:00" },
                { sender: "bu_siti", text: "Bapak/Ibu, untuk konsumsi rapat malam ini saya usul bakwan sayur dan tahu isi hangat. Murah, meriah, dan renyah!", time: "13:01" },
                { sender: "pak_budi", text: "Saya keberatan! Gorengan malam-malam itu kolesterol tinggi dan minyaknya menempel di mikrofon! Harusnya lemper ayam atau kacang tanah rebus!", time: "13:02" },
                { sender: "bu_siti", text: "Kalau cuma kacang rebus nanti rapatnya lesu Pak Budi! Lagian siapa juga yang mengunyah bakwan sambil menempelkan tangan ke mikrofon?!", time: "13:03" },
                { sender: "roni", text: "Selama ada kopi hitam panas, mau koalisi bakwan atau oposisi lemper saya siap mengamankan piringnya.", time: "13:04" }
            ],
            monologue: "Agenda utamanya evaluasi keamanan dan ketertiban RT, tapi 80 pesan yang masuk siang ini murni memperdebatkan ideologi bakwan goreng versus lemper kukus.",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Bagi anggaran konsumsi 50:50 antara piring gorengan hangat dan piring lemper/rebusan",
                    reply: "Solusi jalan tengah: Anggaran konsumsi malam ini kita bagi dua—separuh piring tahu isi & bakwan hangat usulan Bu Siti, separuh lagi lemper & rebusan rendah minyak usulan Pak Budi. Semua terwakili.",
                    effects: { ketenangan: 8, kepercayaan: 7, tekanan: 3, relasi_rt: 5, relasi_siti: 6, relasi_budi: 6, relasi_roni: 4 },
                    followUp: [
                        { sender: "bu_siti", text: "Oke deh, adil kalau dibagi dua piring begitu!", time: "13:07" },
                        { sender: "pak_budi", text: "Setuju. Yang penting hak warga anti-minyak goreng terpenuhi.", time: "13:08" }
                    ],
                    log: "Mendamaikan Perang Konsumsi Rapat lewat koalisi Gorengan & Lemper."
                },
                {
                    type: "Tegas",
                    label: "Ketok palu menu standar kas RT dan tutup perdebatan makanan",
                    reply: "Mohon kita hemat energi untuk rapat nanti malam. Sesuai standar kas RT, konsumsi malam ini adalah tahu isi, lemper, dan teh hangat. Perdebatan menu resmi saya tutup.",
                    effects: { ketenangan: 5, kepercayaan: 8, tekanan: 4, relasi_rt: 5, relasi_siti: 1, relasi_budi: 3, relasi_roni: 3 },
                    followUp: [
                        { sender: "pak_rt", text: "Tegas dan tepat sasaran, Mas Dika.", time: "13:07" }
                    ],
                    log: "Menutup perdebatan panjang soal menu snack rapat secara tegas."
                },
                {
                    type: "Sarkastis",
                    label: "Ancam ganti konsumsi rapat menjadi air galon yang diminum sambil duduk",
                    reply: "Kalau perdebatan gorengan vs lemper belum selesai dalam 5 menit, konsumsi malam ini saya ganti jadi air putih galon—diminum sambil duduk supaya sinyal Wi-Fi Balai Warga tidak melemah.",
                    effects: { ketenangan: 4, kepercayaan: 2, tekanan: -5, relasi_rt: 2, relasi_siti: 3, relasi_budi: -1, relasi_roni: 8 },
                    followUp: [
                        { sender: "roni", text: "Referensi hoaks hari pertama yang sangat elegan Mas Admin.", time: "13:07" }
                    ],
                    log: "Mengancam mengganti konsumsi rapat dengan air galon jika warga terus ribut."
                },
                {
                    type: "Menghindar",
                    label: "Biarkan sampai 99+ pesan membahas kandungan minyak goreng",
                    reply: "(Kamu membiarkan grup penuh dengan kuliah gizi Bu Siti vs Pak Budi.)",
                    isSilent: true,
                    effects: { ketenangan: -8, kepercayaan: -5, tekanan: 5, relasi_rt: -3, relasi_siti: -2, relasi_budi: -2, relasi_roni: 0 },
                    followUp: [
                        { sender: "bu_siti", text: "Pokoknya rapat RT tanpa gorengan itu bagai sayur tanpa garam!", time: "13:07" },
                        { sender: "pak_budi", text: "Garam berlebih juga memicu hipertensi Bu Siti!", time: "13:08" }
                    ],
                    log: "Membiarkan debat gorengan vs kolesterol memenuhi grup."
                }
            ]
        },

        {
            id: "ev_13",
            day: 3,
            dayTitle: "Hari 3 — Rapat Besar",
            phase: "Sore",
            time: "17:45",
            title: "Kejadian 13: Banjir Foto & Kudeta Tombol Mute",
            mode: "chat",
            bg: "jalan_rt",
            featuredChar: "bu_siti",
            unlockArchive: "kudeta_mute",
            messages: [
                { sender: "bu_siti", text: "📷 [Mengirim 4 Foto] Menjelang rapat malam ini, saya lampirkan bukti pot tanaman lidah mertua saya yang retak tersenggol ban mobil tamu kemarin!", time: "17:45" },
                { sender: "pak_budi", text: "📷 [Mengirim 5 Foto] Oh mau adu bukti foto?! Ini saya kirim 5 foto daun mangga depan blok Ibu yang gugur terbang ke teras saya setiap sore!", time: "17:46" },
                { sender: "bu_siti", text: "Lho, daun mangga gugur ditiup angin kok menyalahkan saya?! Memangnya saya avatar pengendali angin?!", time: "17:47" },
                { sender: "pak_rt", text: "Waduh Mas Dika! Grup makin panas padahal rapat tinggal 90 menit lagi! Tolong lakukan sesuatu Mas!", time: "17:48" }
            ],
            monologue: "HP-ku bergetar tanpa henti di meja. Pot tanaman vs daun mangga! Kalau tidak kuhentikan sore ini juga, rapat nanti malam bisa meledak jadi perang terbuka!",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Gunakan kedekatan personal untuk menenangkan Bu Siti & Pak Budi",
                    lockIfStressAbove: 75,
                    lockReason: "Tekanan Admin terlalu tinggi (>=75)! Dika terlalu lelah untuk mengetik kalimat diplomatis.",
                    reply: "Bu Siti dan Pak Budi yang saya hormati, selama tiga hari ini Bapak dan Ibu sebenarnya warga yang paling peduli pada lingkungan kita. Mari simpan semua bukti foto ini dan kita bicarakan sambil minum teh hangat di Balai Warga nanti malam.",
                    effects: { ketenangan: 14, kepercayaan: 12, tekanan: 3, relasi_rt: 8, relasi_siti: 8, relasi_budi: 8, relasi_roni: 4 },
                    followUp: [
                        { sender: "bu_siti", text: "Iya juga sih Mas Dika... maaf ya saya kebawa emosi sore-sore.", time: "17:51" },
                        { sender: "pak_budi", text: "Baik Mas Dika. Karena saya menghargai Mas Dika, saya tahan sampai rapat nanti.", time: "17:52" }
                    ],
                    log: "Meredam perang foto pot bunga vs daun mangga dengan pendekatan personal."
                },
                {
                    type: "Tegas",
                    label: "Aktifkan fitur sakral: 'Hanya Admin yang Dapat Mengirim Pesan' sampai rapat dimulai",
                    reply: "Grup saya kunci sementara selama 90 menit agar seluruh warga mendinginkan kepala sebelum bertemu tatap muka di Balai Warga pukul 19:30 WIB. Sampai jumpa di rapat.",
                    effects: { ketenangan: 10, kepercayaan: 9, tekanan: -4, relasi_rt: 6, relasi_siti: -4, relasi_budi: -4, relasi_roni: 8 },
                    setFlag: "flag_mute_grup",
                    followUp: [
                        { sender: "system", text: "Admin Dika mengubah setelan grup: Hanya Admin yang dapat mengirim pesan", time: "17:50" }
                    ],
                    log: "Mengaktifkan fitur 'Hanya Admin yang Dapat Mengirim Pesan' untuk menghentikan perang foto."
                },
                {
                    type: "Sarkastis",
                    label: "Kirim foto kipas angin kamarmu dan ikut menuntut angin ke BMKG",
                    reply: "📷 [Mengirim Foto Kipas Angin] Sekalian saya laporkan kipas angin kamar saya yang sejak Minggu pagi menengok kiri-kanan tapi tidak pernah menengok nasib mental Admin.",
                    effects: { ketenangan: -5, kepercayaan: -3, tekanan: -6, relasi_rt: -2, relasi_siti: 1, relasi_budi: -6, relasi_roni: 9 },
                    followUp: [
                        { sender: "roni", text: "Wkwkwk foto tandingan paling epik minggu ini.", time: "17:51" }
                    ],
                    log: "Membalas perang foto warga dengan foto kipas angin kamar."
                },
                {
                    type: "Menghindar",
                    label: "Lempar HP ke atas kasur dan biarkan perang foto berlanjut",
                    reply: "(Kamu melempar HP ke kasur dan membiarkan ratusan notifikasi berbunyi.)",
                    isSilent: true,
                    effects: { ketenangan: -18, kepercayaan: -10, tekanan: 10, relasi_rt: -8, relasi_siti: -5, relasi_budi: -5, relasi_roni: -2 },
                    followUp: [
                        { sender: "bu_siti", text: "Kalau mau protes arah angin silakan kirim surat ke BMKG Pak Budi!", time: "17:51" },
                        { sender: "pak_budi", text: "Pohon mangganya yang harus dipangkas Bu!", time: "17:52" }
                    ],
                    log: "Membiarkan perang foto menghancurkan ketenangan grup menjelang rapat."
                }
            ]
        },

        {
            id: "ev_14",
            day: 3,
            dayTitle: "Hari 3 — Rapat Besar",
            phase: "Malam",
            time: "19:45",
            title: "Kejadian 14: Rapat Warga Tak Terkendali (Adegan Balai Warga)",
            mode: "cutscene",
            bg: "rapat_warga",
            featuredChar: "dika",
            unlockArchive: "debat_kusir",
            cutsceneIntro: [
                {
                    speaker: "pak_rt",
                    speakerTitle: "Pak RT Hendra (Di Balai Warga RT 05)",
                    text: "\"Bapak/Ibu sekalian, selamat malam di Balai Warga RT 05! Gorengan dan lemper sudah tersaji di meja, sekarang mari kita bahas semua masalah tiga hari ini dengan kepala dingin.\""
                },
                {
                    speaker: "bu_siti",
                    speakerTitle: "Bu Siti Blok B",
                    text: "\"Intinya harus ada aturan jelas soal jadwal iuran sampah, pot tanaman saya yang retak, dan jangan terlalu cepat menutup portal kalau ada kurir martabak!\""
                },
                {
                    speaker: "pak_budi",
                    speakerTitle: "Pak Budi Pagar Hitam",
                    text: "\"Dan harus ada aturan tegas soal dahan pohon mangga, larangan menyindir pagar hitam di grup WargaChat, serta ketertiban jam malam!\""
                },
                {
                    speaker: "pak_rt",
                    speakerTitle: "Pak RT Hendra",
                    text: "\"Sabar-sabar! Mari kita serahkan mikrofon utama kepada Mas Dika selaku Admin yang sudah mencatat semua dinamika RT 05 selama tiga hari penuh! Silakan Mas Dika!\""
                }
            ],
            messages: [
                { sender: "system", text: "Adegan Puncak: Rapat Besar di Balai Warga RT 05 (19:45 WIB)", time: "19:45" }
            ],
            monologue: "Semua mata warga RT 05 menatapku di meja depan Balai Warga. Mikrofon di tanganku terasa lebih berat daripada barbel lima kilogram. Bagaimana aku memimpin sidang puncak ini?",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Rangkum solusi adil berdasarkan Arsip Kejadian: Japri iuran, pengait tong sampah, & kerja bakti",
                    reply: "Bapak/Ibu semua, dari seluruh catatan 3 hari ini sebenarnya tidak ada warga yang berniat buruk. Mari kita sahkan 4 Kesepakatan RT 05: 1. Tagihan iuran hanya via japri, 2. Parkir tamu di pos depan, 3. Tong sampah dipasang pengait anti-Mayor Oren, dan 4. Minggu depan kita kerja bakti pangkas dahan & perbaiki pot bersama!",
                    effects: { ketenangan: 15, kepercayaan: 15, tekanan: 2, relasi_rt: 10, relasi_siti: 10, relasi_budi: 10, relasi_roni: 8 },
                    followUp: [
                        { sender: "bu_siti", text: "(Di Balai Warga) \"Wah... semua keluhan kita dirangkum rapi tanpa ada satu pun yang dipermalukan.\"", time: "19:55" },
                        { sender: "pak_budi", text: "(Di Balai Warga) \"Hmm. Empat poin kesepakatan itu sangat logis dan adil. Saya angkat tangan setuju!\"", time: "19:56" }
                    ],
                    log: "Memimpin mediasi puncak di Balai Warga dengan 4 Kesepakatan Bersama RT 05."
                },
                {
                    type: "Tegas",
                    label: "Tegur seluruh warga bahwa masalah utama RT 05 adalah ego & baper di grup chat",
                    reply: "Saya bicara jujur di depan Bapak/Ibu semua: Masalah fisik di RT 05 ini kecil, yang besar itu gengsi kita saat mengetik di grup chat! Mulai malam ini, siapa pun yang memicu debat kusir di grup akan langsung saya nonaktifkan hak kirim pesannya selama 3 hari!",
                    effects: { ketenangan: 8, kepercayaan: 12, tekanan: -4, relasi_rt: 5, relasi_siti: 3, relasi_budi: 5, relasi_roni: 10 },
                    followUp: [
                        { sender: "roni", text: "(Bertepuk tangan dari pojok Balai Warga) \"Pidato paling jujur abad ini!\"", time: "19:55" },
                        { sender: "pak_budi", text: "(Di Balai Warga) \"Keras... tapi memang ada benarnya juga.\"", time: "19:56" }
                    ],
                    log: "Menyampaikan pidato tegas tentang bahaya ego dan baper di grup WargaChat."
                },
                {
                    type: "Sarkastis",
                    label: "Sindir Pak RT bahwa jabatan Admin Grup ternyata merangkap psikolog, detektif sandal, & wasit gorengan",
                    reply: "Kesimpulan saya selama 3 hari ini: Menjadi Admin Grup RT 05 ternyata adalah profesi multitalenta yang merangkap detektif sandal kiri, pengacara kucing oren, kurator stiker bunga, wasit bakwan vs lemper, sekaligus tameng hidup Pak RT.",
                    effects: { ketenangan: -4, kepercayaan: 2, tekanan: -6, relasi_rt: -6, relasi_siti: 4, relasi_budi: -2, relasi_roni: 10 },
                    followUp: [
                        { sender: "pak_rt", text: "(Di Balai Warga) \"Hehehe... Mas Dika bisa saja, itu namanya kaderisasi pemimpin muda!\"", time: "19:55" }
                    ],
                    log: "Menyindir beban kerja admin dadakan secara terbuka di panggung Rapat Warga."
                },
                {
                    type: "Menghindar",
                    label: "Serahkan mikrofon kembali ke Pak RT karena kepalamu sudah terlalu pening",
                    reply: "Silakan Pak RT Hendra yang mengambil keputusan akhir, saya cuma admin aplikasi pesan, bukan kepala kelurahan.",
                    effects: { ketenangan: -12, kepercayaan: -10, tekanan: 8, relasi_rt: -8, relasi_siti: -5, relasi_budi: -5, relasi_roni: -2 },
                    followUp: [
                        { sender: "pak_rt", text: "(Di Balai Warga) \"Waduh, kok mikrofonnya dikembalikan ke Bapak di saat kritis begini...\"", time: "19:55" }
                    ],
                    log: "Menyerahkan mikrofon kembali ke Pak RT di tengah panasnya rapat warga."
                }
            ]
        },

        {
            id: "ev_15",
            day: 3,
            dayTitle: "Hari 3 — Rapat Besar",
            phase: "Malam",
            time: "21:00",
            title: "Kejadian 15: Keputusan Terakhir Admin",
            mode: "chat",
            bg: "rapat_warga",
            featuredChar: "dika",
            unlockSticker: "stiker_admin",
            messages: [
                { sender: "dika", type: "sticker", stickerId: "stiker_admin", time: "21:00" },
                { sender: "pak_rt", text: "Sebagai penutup rapat malam ini: Masa darurat tiga hari Mas Dika sebagai Admin Grup RT 05 telah usai. Bagaimana pendapat warga sekalian, dan bagaimana keputusan akhir Mas Dika?", time: "21:02" },
                { sender: "roni", text: "Apapun keputusan akhir Mas Dika malam ini, termos kopi pos ronda selalu terbuka.", time: "21:03" }
            ],
            monologue: "Inilah pilihan pamungkas di akhir Hari ke-3. Semua indikator ketenangan grup, kepercayaan warga, tekanan batin, dan relasiku selama tiga hari akan menentukan nasib akhirku di RT 05!",
            choices: [
                {
                    type: "Diplomatis",
                    label: "Bersedia tetap membantu mengelola grup dengan syarat aturan jam istirahat malam dipatuhi",
                    reply: "Saya bersedia tetap membantu memoderasi grup RT 05, dengan syarat seluruh warga menghormati jam istirahat malam dan mengutamakan musyawarah yang sehat.",
                    effects: { ketenangan: 8, kepercayaan: 8, tekanan: -5, relasi_rt: 8, relasi_siti: 6, relasi_budi: 6, relasi_roni: 5 },
                    followUp: [
                        { sender: "pak_rt", text: "Alhamdulillah! Terima kasih banyak Mas Dika!", time: "21:06" }
                    ],
                    log: "Bersedia melanjutkan peran dengan batas jam kerja admin yang sehat."
                },
                {
                    type: "Tegas",
                    label: "Nyatakan siap memegang kepemimpinan penuh jika warga ingin perubahan nyata di RT 05",
                    reply: "Jika warga RT 05 benar-benar menginginkan lingkungan yang tertib, transparan, dan tidak lagi dikelola setengah-setengah, saya siap mengambil tanggung jawab penuh membenahi RT ini.",
                    effects: { ketenangan: 10, kepercayaan: 14, tekanan: 2, relasi_rt: 6, relasi_siti: 8, relasi_budi: 8, relasi_roni: 8 },
                    setFlag: "flag_terima_mandat_rt",
                    followUp: [
                        { sender: "pak_budi", text: "Pidato yang sangat berkelas! Saya catat komitmen Mas Dika!", time: "21:06" },
                        { sender: "bu_siti", text: "Wah, aura pemimpin baru mulai terpancar nih!", time: "21:07" }
                    ],
                    log: "Menyatakan kesiapan mengambil kepemimpinan penuh demi pembenahan RT 05."
                },
                {
                    type: "Menghindar",
                    label: "Nyatakan RESIGN sekarang juga dan kembalikan jabatan admin demi tidur tenang",
                    reply: "Terima kasih atas tiga hari paling mendebarkan dalam hidup saya. Dengan ini saya resmi menyatakan RESIGN dari jabatan Admin Grup RT 05. Saya cuma ingin tidur tenang!",
                    effects: { ketenangan: -5, kepercayaan: -5, tekanan: 18, relasi_rt: -4, relasi_siti: -2, relasi_budi: -2, relasi_roni: 4 },
                    setFlag: "flag_pilihan_resign",
                    followUp: [
                        { sender: "pak_rt", text: "Lho Mas Dika?! Jangan keluar grup dulu Mas!!", time: "21:06" }
                    ],
                    log: "Memilih mengundurkan diri (Resign) demi menyelamatkan kewarasan batin."
                },
                {
                    type: "Sarkastis",
                    label: "Usulkan jabatan Admin Grup digilir setiap hari antara Bu Siti dan Pak Budi",
                    reply: "Saya usul mulai besok jabatan Admin Grup digilir secara demokratis: Hari Senin Bu Siti, Hari Selasa Pak Budi, biar semua warga merasakan nikmatnya notifikasi 24 jam!",
                    effects: { ketenangan: -10, kepercayaan: -4, tekanan: -5, relasi_rt: -2, relasi_siti: -5, relasi_budi: -5, relasi_roni: 10 },
                    followUp: [
                        { sender: "roni", text: "Ide paling revolusioner sepanjang sejarah RT 05.", time: "21:06" }
                    ],
                    log: "Mengusulkan rotasi jabatan admin antara Bu Siti dan Pak Budi."
                }
            ]
        }
    ],

    endings: {
        admin_teladan: {
            id: "admin_teladan",
            number: "Ending 1 dari 4",
            badge: "ADMIN TELADAN",
            badgeColor: "#38B2AC",
            bg: "kamar_dika",
            featuredChar: "dika",
            title: "Admin Teladan (Customer Service Abadi RT 05)",
            subtitle: "Grup berhasil damai, tetapi ketenangan pribadimu menjadi tumbalnya.",
            narrative: [
                "Tiga hari mandat darurat akhirnya berlalu. Grup WargaChat RT 05 selamat dari krisis iuran Rp15.000, geopolitik parkir gang sempit, salah kirim pesan Pak RT, hingga rapat warga tanpa pecah perang saudara.",
                "Namun keberhasilanmu menjaga perdamaian membawa konsekuensi tak terduga: Pak RT resmi mengangkatmu menjadi 'Admin Tetap Seumur Hidup', dan seluruh warga kini menganggapmu sebagai pusat layanan bantuan 24 jam.",
                "Baru saja kamu merebahkan kepala di bantal, pesan baru masuk dari Bu Siti: 'Mas Dika Admin, tolong umumkan ya, kucing oren tadi lewat bawa sebelah kaos kaki siapa?'"
            ],
            quote: "\"Menjadi admin yang baik itu mudah. Berhenti jadi admin adalah hal yang mustahil.\""
        },
        perang_grup: {
            id: "perang_grup",
            number: "Ending 2 dari 4",
            badge: "PERANG GRUP RT",
            badgeColor: "#E53E3E",
            bg: "rapat_warga",
            featuredChar: "pak_budi",
            title: "Perang Grup RT (Pecah Tiga Kubu)",
            subtitle: "Ketenangan grup hancur lebur, melahirkan tiga grup tandingan baru.",
            narrative: [
                "Akumulasi sindiran, bukti foto pot bunga vs daun mangga, dan perdebatan yang tak kunjung reda akhirnya menghancurkan ketenangan grup 'RT 05 Kompak' hingga ke titik nadir.",
                "Malam itu juga, Pak Budi keluar dan mendirikan grup tandingan 'RT 05 Lurus & Beradab'. Tak mau kalah, Bu Siti membentuk grup 'RT 05 Informatif Tanpa Baper', sementara Roni membuat grup 'Aliansi Pos Ronda Netral'.",
                "Kamu sempat menghela napas lega karena mengira tugasmu berakhir... sampai tiga notifikasi muncul beruntun: Kamu telah dimasukkan sebagai Admin di ketiga grup pecahan tersebut!"
            ],
            quote: "\"Satu grup RT bubar, tumbuh tiga grup baru di layar ponselmu.\""
        },
        aku_resign: {
            id: "aku_resign",
            number: "Ending 3 dari 4",
            badge: "AKU RESIGN!",
            badgeColor: "#DD6B20",
            bg: "kamar_dika",
            featuredChar: "dika",
            title: "Aku Resign! (Kebebasan 10 Menit)",
            subtitle: "Tekanan admin melampaui batas kewarasan, namun keluar grup bukanlah akhir.",
            narrative: [
                "Ratusan notifikasi soal sandal hilang, hoaks air galon, parkir sedan, dan debat bakwan vs lemper mendorong tingkat stresmu melewati batas kemanusiaan.",
                "Dengan tangan gemetar namun hati penuh kemenangan, kamu menekan tombol merah paling sakral di aplikasi WargaChat: 'Dika keluar dari Grup RT 05 Kompak.' Selama sepuluh menit penuh, kamarmu terasa begitu damai dan burung-burung berkicau indah.",
                "Pada menit kesebelas, HP-mu berdenting lagi: 'Pak RT Hendra membuat grup RT 05 Reborn dan menjadikan Anda sebagai Super Admin.' Tidak ada jalan keluar dari RT 05."
            ],
            quote: "\"Kamu bisa keluar dari grup RT, tapi grup RT tidak akan pernah keluar dari hidupmu.\""
        },
        ketua_rt_baru: {
            id: "ketua_rt_baru",
            number: "Ending 4 dari 4",
            badge: "KETUA RT BARU",
            badgeColor: "#D69E2E",
            bg: "rapat_warga",
            featuredChar: "pak_rt",
            title: "Ketua RT Baru (Senjata Makan Tuan)",
            subtitle: "Terlalu kompeten mengelola warga hingga kamu dikudeta menjadi Ketua RT 05!",
            narrative: [
                "Berkat diplomasi yang brilian, ketenangan grup yang terjaga, serta tingginya respek dari Bu Siti, Pak Budi, Pak RT, hingga Roni, Rapat Besar di Balai Warga berakhir dengan tepuk tangan meriah.",
                "Terharu melihat kepiawaianmu menyatukan warga yang keras kepala, Pak RT Hendra tiba-tiba mengeluarkan stempel basah dari saku batiknya dan mengumumkan pensiun dini di depan seluruh warga.",
                "Secara aklamasi, warga mengangkatmu menjadi Ketua RT 05 termuda! Niat awal hanya ingin tidur tenang di hari Minggu, kini meja kamarmu dipenuhi stempel RT, buku kas iuran, dan jadwal ronda satu semester."
            ],
            quote: "\"Pesan moral: Jangan pernah terlihat terlalu kompeten di grup WhatsApp RT.\""
        }
    }
};
