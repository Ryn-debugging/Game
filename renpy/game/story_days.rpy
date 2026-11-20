## =========================================================================
## ADMIN DADAKAN: Grup RT — story_days.rpy
## Naskah Lengkap 3 Hari (15 Kejadian Utama + Konsekuensi & Evaluasi Harian)
## =========================================================================

## =========================================================================
## HARI 1 — ADMIN BARU (Kejadian 1 s/d 5)
## =========================================================================
label hari_1:
    $ hari_aktif = 1
    $ fase_waktu = "Pagi (07:15)"
    $ lokasi_aktif = "Kamar Dika (WargaChat RT 05)"
    $ catatan_harian = []
    $ clear_chat("Hari 1 Pagi — Pak RT Hendra mengubah Dika menjadi Admin Grup")
    show screen wargachat_ui

    ## ---------------------------------------------------------------------
    ## KEJADIAN 1: MANDAT DADAKAN
    ## ---------------------------------------------------------------------
    $ chat_msg("pak_rt", "Warga RT 05 yang saya cintai, berhubung tensi saya perlu istirahat, mulai hari ini Mas Dika resmi jadi Admin Grup RT 05. Kita musyawarahkan semuanya lewat Mas Dika ya.", "07:15")
    $ chat_msg("bu_siti", "Wah selamat Mas Dika!! Kebetulan saya punya 7 laporan warga yang belum sempat dibahas Pak RT.", "07:16")
    $ chat_msg("pak_budi", "Saya harap admin baru netral. Jangan seperti sebelum-sebelumnya yang membiarkan sindiran liar di grup.", "07:17")
    $ chat_msg("roni", "Selamat bergabung di garis depan, Mas Dika. Saya memantau dari pos ronda sambil ngopi.", "07:18")
    $ unlock_arsip("sk_admin")

    dika "(Baru tiga menit jadi admin, Bu Siti sudah siap dengan 7 laporan dan Pak Budi sudah pasang kuda-kuda. Bagaimana aku membuka jabatan dadakan ini?)"

    menu:
        "Pilih respons pertamamu sebagai Admin Grup RT 05:"

        "[Diplomatis] Sapa warga dengan ramah dan ajak jaga ketenangan grup":
            $ chat_msg("dika", "Selamat pagi Bapak/Ibu semua. Terima kasih kepercayaannya. Mari kita gunakan grup ini untuk info penting dengan kepala dingin ya.", "07:19")
            $ chat_msg("pak_rt", "Nah, adem sekali bahasanya. Bapak tenang istirahat kalau begini.", "07:20")
            $ update_stat(ket=6, kep=5, tek=3, rt=6, siti=4, budi=3)
            $ catatan_harian.append("Membuka jabatan admin dengan sambutan diplomatis yang menenangkan warga.")

        "[Tegas] Langsung tetapkan aturan ketat: Dilarang nyinyir & wajib tertib":
            $ flag_aturan_ketat = True
            $ chat_msg("dika", "Pagi semua. Aturan baru selama saya admin: 1. Dilarang menyindir tanpa nama. 2. Dilarang sebar hoaks. 3. Keluhan harus jelas faktanya.", "07:19")
            $ chat_msg("pak_budi", "Hmm. Aturan nomor 1 bagus, asal ditegakkan ke ibu-ibu yang suka bicara implisit.", "07:20")
            $ chat_msg("bu_siti", "Lho kok melirik ke ibu-ibu Pak Budi? Saya kan cuma informatif!", "07:21")
            $ update_stat(ket=-3, kep=8, tek=4, rt=2, siti=-4, budi=6)
            $ catatan_harian.append("Menetapkan aturan grup yang tegas sejak menit pertama.")

        "[Sarkastis] Keluhkan penunjukan sepihak dengan humor datar":
            $ chat_msg("dika", "Terima kasih Pak RT atas jabatan tanpa wawancara dan tanpa gaji ini. Bagi warga yang mau mengeluh, antreannya dibuka setelah kopi saya habis.", "07:19")
            $ chat_msg("roni", "Hahaha, mantap Mas Dika. Sabar adalah koentji.", "07:20")
            $ chat_msg("pak_budi", "Admin kok bercanda. Masalah lingkungan itu urusan serius, Mas.", "07:21")
            $ update_stat(ket=-4, kep=-2, tek=-5, roni=10, budi=-6)
            $ catatan_harian.append("Menanggapi mandat admin dengan sarkasme yang disukai Roni tapi dikritik Pak Budi.")

        "[Menghindar] Diam saja dan cuma kirim jempol singkat":
            $ chat_msg("dika", "👍 Siap Pak RT. Mohon kerja samanya.", "07:19")
            $ chat_msg("bu_siti", "Lho cuma jempol aja Mas Dika? Singkat amat kayak chat tukang gas.", "07:20")
            $ update_stat(ket=0, kep=-4, tek=-3, siti=-3)
            $ catatan_harian.append("Memilih irit bicara di awal penunjukan admin.")

    ## ---------------------------------------------------------------------
    ## KEJADIAN 2: IURAN KEBERSIHAN & SINDIRAN HALUS
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Pagi (09:30)"
    $ chat_msg("bu_siti", "Sekadar mengingatkan warga RT 05, iuran kebersihan Rp15.000 jatuh tempo hari ini. Saya bukan gosip, cuma menyampaikan, soalnya tukang sampah sudah nanya-nanya rumah yang pagarnya belum bayar.", "09:30")
    $ chat_msg("pak_budi", "Bu Siti, yang pagarnya baru dicat hitam di blok ini cuma rumah saya. Saya tidak tersinggung, hanya meluruskan: saya belum bayar karena bendahara kemarin tidak di rumah!", "09:32")
    $ chat_msg("bu_siti", "Lho, saya kan tidak menyebut warna pagar hitam Pak Budi! Kenapa Bapak yang merasa?", "09:33")
    $ chat_msg("pak_rt", "Aduh tensi Bapak... Mas Dika, tolong ditengahi ya, kita musyawarahkan dulu.", "09:34")
    $ unlock_arsip("tragedi_iuran")

    dika "(Ini dia konflik klasik RT 05: Bu Siti melempar umpan tanpa nama, Pak Budi langsung menyambar seolah disebut lengkap dengan NIK.)"

    menu:
        "Bagaimana kamu meredam debat iuran kebersihan Rp15.000 ini?"

        "[Diplomatis] Minta urusan pembayaran dibahas via japri ke bendahara":
            $ chat_msg("dika", "Terima kasih pengingatnya Bu Siti, dan terima kasih konfirmasinya Pak Budi. Untuk detail rumah yang belum sempat setor, langsung japri pribadi saja ya agar grup tetap adem.", "09:35")
            $ chat_msg("pak_budi", "Nah, itu baru benar. Kalau japri kan profesional.", "09:36")
            $ update_stat(ket=8, kep=6, tek=4, siti=3, budi=6, rt=5)
            $ catatan_harian.append("Berhasil mengalihkan debat iuran kebersihan ke jalur japri pribadi.")

        "[Tegas] Tampilkan daftar rekap lunas secara transparan tanpa sindiran":
            $ chat_msg("dika", "Daripada tebak-tebakan pagar, saya unggah rekap resmi dari bendahara. Pak Budi tercatat jadwal jemput iuran sore ini. Jadi tidak ada yang menunggak. Topik ditutup.", "09:35")
            $ chat_msg("bu_siti", "Oh jadwal jemput sore toh... kirain lupa. Hehehe maaf ya Pak Budi.", "09:36")
            $ update_stat(ket=5, kep=10, tek=5, siti=-2, budi=8, rt=4)
            $ catatan_harian.append("Menyelesaikan sengketa iuran dengan transparansi data bendahara.")

        "[Sarkastis] Sindir keduanya bahwa iuran Rp15.000 tidak perlu drama sinetron":
            $ chat_msg("dika", "Luar biasa, iuran Rp15.000 berhasil menghasilkan ketegangan setara sidang MK. Kalau mau lanjut episode 2, tiket penontonnya bayar ke kas RT ya.", "09:35")
            $ chat_msg("roni", "Wkwkwk saya pesan kursi baris depan Mas Dika.", "09:36")
            $ chat_msg("pak_budi", "Saya serius Mas Dika! Nama baik keluarga tidak bisa dinilai dengan Rp15.000!", "09:37")
            $ update_stat(ket=-8, kep=-3, tek=-2, budi=-8, siti=-4, roni=8)
            $ catatan_harian.append("Menyiram bensin komedi ke dalam debat iuran Rp15.000.")

        "[Menghindar] Biarkan mereka berdebat sampai lelah sendiri":
            $ chat_msg("bu_siti", "Makanya Pak, kalau tidak merasa ya santai saja!", "09:36")
            $ chat_msg("pak_budi", "Kalimat Ibu itu kalimat pasif-agresif! Saya paham betul ilmu komunikasi!", "09:37")
            $ update_stat(ket=-10, kep=-6, tek=2, rt=-5)
            $ catatan_harian.append("Membiarkan debat iuran Bu Siti dan Pak Budi bergulir liar.")

    ## ---------------------------------------------------------------------
    ## KEJADIAN 3: TEROR STIKER & HOAKS AIR GALON
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Siang (12:15)"
    $ chat_msg("bu_siti", "🌹✨ SELAMAT SIANG WARGA RT 05 ✨🌹", "12:15", "sticker", "stiker_pagi")
    $ unlock_stiker("stiker_pagi")
    $ chat_msg("bu_siti", "PENTING!! Diteruskan dari grup sebelah: Jangan minum air galon sambil berdiri di hari Selasa karena bisa membuat sinyal Wi-Fi di rumah melemah!! Sebarkan ke 10 grup jika Anda peduli tetangga!", "12:16")
    $ chat_msg("pak_rt", "Astaga, pantas saja Wi-Fi rumah Bapak agak lambat tadi pagi. Terima kasih infonya Bu Siti.", "12:17")
    $ chat_msg("pak_budi", "Ini logika ilmiahnya dari mana?! Air galon sama router Wi-Fi tidak ada hubungannya!", "12:18")

    dika "(Bu Siti mengirim pesan berantai absurd, dan parahnya Pak RT hampir percaya. Aku harus bertindak sebelum warga ramai-ramai minum sambil kayang.)"

    menu:
        "Bagaimana kamu menangani pesan berantai hoaks air galon vs Wi-Fi ini?"

        "[Diplomatis] Luruskan dengan sopan bahwa info tersebut tidak terbukti":
            $ chat_msg("dika", "Bu Siti dan Pak RT, terima kasih perhatiannya untuk kesehatan warga. Tapi setelah saya cek, info air galon memengaruhi Wi-Fi itu cuma hoaks humor internet kok. Jadi aman ya.", "12:19")
            $ chat_msg("bu_siti", "Ooh hoaks toh Mas? Soalnya ada tulisan 'Diteruskan berkali-kali', saya kira artinya sudah terverifikasi!", "12:20")
            $ update_stat(ket=6, kep=7, tek=3, siti=5, rt=5, budi=4)
            $ catatan_harian.append("Meluruskan hoaks air galon & Wi-Fi tanpa mempermalukan Bu Siti.")

        "[Tegas] Tegur keras dan larang penyebaran pesan berantai tanpa sumber":
            $ chat_msg("dika", "Perhatian: Pesan berantai tanpa sumber ilmiah resmi dilarang keras di grup RT 05. Mohon cek fakta sebelum klik teruskan.", "12:19")
            $ chat_msg("pak_budi", "Tepat sekali! Akhirnya ada ketegasan literasi digital di RT ini.", "12:20")
            $ chat_msg("bu_siti", "Iya deh iya, niat baik mengingatkan tetangga malah kena semprot...", "12:21")
            $ update_stat(ket=2, kep=8, tek=4, siti=-7, budi=8, rt=-2)
            $ catatan_harian.append("Memberlakukan larangan tegas terhadap pesan berantai hoaks.")

        "[Sarkastis] Balas dengan teori konspirasi tandingan yang lebih ngawur":
            $ chat_msg("dika", "Betul Bu Siti. Bahkan menurut penelitian terbaru, terlalu sering menagih iuran di grup bisa menyebabkan baterai HP warga cepat habis 40%.", "12:19")
            $ chat_msg("roni", "Valid 100%, baterai saya langsung sisa 5% pas baca kata iuran.", "12:20")
            $ chat_msg("bu_siti", "Mas Dika ini malah ngelawak lho!", "12:21")
            $ update_stat(ket=4, kep=-2, tek=-4, siti=2, roni=7, budi=-3)
            $ catatan_harian.append("Membalas hoaks air galon dengan humor satir soal baterai HP.")

        "[Menghindar] Biarkan Pak Budi yang menceramahi Bu Siti soal teknologi":
            $ chat_msg("pak_budi", "Bu Siti, frekuensi router itu 2.4 GHz dan 5 GHz, bukan frekuensi kerongkongan manusia!", "12:20")
            $ chat_msg("bu_siti", "Ya biasa aja dong Pak Budi jelasinnya, nggak usah pakai tanda seru!", "12:21")
            $ update_stat(ket=-7, kep=-4, tek=2, siti=-3, budi=-3)

    ## ---------------------------------------------------------------------
    ## KEJADIAN 4: MISTERI SANDAL POS RONDA
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Sore (16:20)"
    $ chat_msg("roni", "Laporan sore dari Pos Ronda RT 05: Sandal jepit inventaris pos warna biru hilang sebelah kiri. Yang kanan masih ada di tempatnya. Saya melihat semuanya, tapi kali ini saya bingung.", "16:20")
    $ chat_msg("pak_budi", "Nah! Hari ini sandal sebelah kiri, besok-besok bisa spion mobil! Keamanan RT 05 harus dievaluasi total!", "16:22")
    $ chat_msg("bu_siti", "Jangan-jangan ada orang asing masuk gang kita tadi siang waktu jam tidur siang!", "16:23")
    $ unlock_arsip("sandal_ronda")

    dika "(Cuma sandal jepit putus sebelah kiri di pos ronda, tapi Pak Budi dan Bu Siti sudah bersiap mengumumkan darurat militer.)"

    menu:
        "Apa responsmu terhadap laporan sandal kiri pos ronda yang hilang?"

        "[Diplomatis] Tenangkan warga dan minta Roni cek sekitar semak pos ronda":
            $ chat_msg("dika", "Tenang Bapak/Ibu, jangan panik dulu. Mas Roni, coba cek di kolong pos atau dekat semak tanaman, siapa tahu dibawa main binatang.", "16:24")
            $ chat_msg("roni", "Sebentar saya tengok kolong pos... Oalah, ketemu Mas. Lagi dijadikan bantal sama kucing oren.", "16:26")
            $ update_stat(ket=8, kep=8, tek=2, roni=8, siti=4, budi=3)
            $ catatan_harian.append("Memecahkan misteri sandal pos ronda dengan tenang bersama Roni.")

        "[Tegas] Minta warga tidak membesar-besarkan masalah sepele di grup":
            $ chat_msg("dika", "Bapak/Ibu, kehilangan satu sandal jepit bukan indikator krisis keamanan. Tolong grup jangan dipakai menyebar kepanikan tanpa bukti.", "16:24")
            $ chat_msg("pak_budi", "Saya bukannya panik Mas Dika, itu namanya antisipasi dini!", "16:25")
            $ update_stat(ket=-2, kep=5, tek=4, budi=-6, roni=3)
            $ catatan_harian.append("Menegur warga agar tidak panik berlebihan soal sandal hilang.")

        "[Sarkastis] Bercanda tentang maling spesialis kaki kiri":
            $ chat_msg("dika", "Waspada warga RT 05, kemungkinan kita sedang berhadapan dengan sindikat pencuri internasional spesialis sandal sebelah kiri.", "16:24")
            $ chat_msg("roni", "Kalau ketemu pelakunya pasti jalannya miring sebelah Mas.", "16:25")
            $ update_stat(ket=3, kep=-1, tek=-5, roni=9, budi=-4)
            $ catatan_harian.append("Melontarkan lelucon sindikat pencuri sandal kiri.")

        "[Menghindar] Suruh Roni memakai sandal yang tersisa saja dulu":
            $ chat_msg("dika", "Mas Roni urus di pos saja ya, saya lagi banyak kerjaan.", "16:24")
            $ chat_msg("roni", "Siap Mas, malam ini saya ronda gaya bangau satu kaki dulu.", "16:25")
            $ update_stat(ket=-3, kep=-5, tek=-2, roni=-4)

    ## ---------------------------------------------------------------------
    ## KEJADIAN 5: JAM MALAM & SUARA KNALPOT
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Malam (21:40)"
    $ chat_msg("pak_budi", "Jam 21:40 masih ada kurir paket gas motor kencang-kencang di depan rumah! Portal RT harusnya ditutup jam 9 malam titik!", "21:40")
    $ chat_msg("bu_siti", "Eh jangan jam 9 malam dong Pak Budi! Anak saya suka pesan martabak jam setengah sepuluh malam!", "21:41")
    $ chat_msg("roni", "🤫☕ HARAP TENANG", "21:42", "sticker", "stiker_tenang")
    $ unlock_stiker("stiker_tenang")
    $ chat_msg("pak_rt", "Mas Dika, Bapak sudah minum obat tidur, tolong diputuskan jam portal sementara malam ini ya. Selamat malam.", "21:43")

    dika "(Pak RT langsung kabur tidur tepat saat perdebatan jam portal dimulai. Hari pertama jadi admin ditutup dengan tarik-ulur antara ketenangan tidur Pak Budi dan martabak malam Bu Siti.)"

    menu:
        "Keputusan penutup Hari 1: Jam berapa portal RT 05 ditutup malam ini?"

        "[Diplomatis] Portal ditutup jam 22:00 dengan pintu kecil tetap terbuka bagi kurir jalan kaki":
            $ chat_msg("dika", "Kita ambil jalan tengah ya: Portal kendaraan ditutup pukul 22:00 WIB, dan Mas Roni akan mengarahkan kurir di atas jam 21:30 agar pelan-pelan. Martabak tetap aman, tidur tetap tenang.", "21:45")
            $ chat_msg("bu_siti", "Nah setuju! Solusi cerdas Mas Admin!", "21:46")
            $ chat_msg("pak_budi", "Baiklah, asal Roni benar-benar menegur yang ngebut.", "21:47")
            $ update_stat(ket=9, kep=9, tek=4, siti=6, budi=6, roni=5)
            $ catatan_harian.append("Menetapkan kompromi portal jam 22:00 yang memuaskan kubu tidur dan kubu martabak.")

        "[Tegas] Tutup portal jam 21:30 demi ketertiban lingkungan":
            $ chat_msg("dika", "Demi ketertiban malam, portal dikunci pukul 21:30. Pesanan makanan di atas jam itu silakan diambil sendiri di pos depan dekat Mas Roni.", "21:45")
            $ chat_msg("pak_budi", "Mantap! Ini baru aturan yang menghormati jam istirahat warga.", "21:46")
            $ chat_msg("bu_siti", "Yah Mas Dika... masa mau makan martabak harus jalan kaki ke depan gang...", "21:47")
            $ update_stat(ket=2, kep=7, tek=5, budi=9, siti=-7, roni=3)
            $ catatan_harian.append("Memutuskan jam malam portal lebih awal pukul 21:30 WIB.")

        "[Sarkastis] Usulkan portal ditutup sejak sore kecuali kurir yang bawa jatah untuk admin":
            $ chat_msg("dika", "Aturan baru: Portal ditutup jam 9 malam, kecuali untuk kurir martabak yang menyisihkan dua potong ke rumah Admin dan Pos Ronda.", "21:45")
            $ chat_msg("roni", "Saya dukung pasal martabak untuk pos ronda 1000%.", "21:46")
            $ update_stat(ket=2, kep=-3, tek=-4, roni=8, siti=3, budi=-5)
            $ catatan_harian.append("Menutup hari pertama dengan negosiasi pajak martabak pos ronda.")

        "[Menghindar] Matikan data seluler dan pura-pura sudah ketiduran":
            $ chat_msg("system", "Admin Dika terakhir dilihat pukul 21:44", "21:45", "system")
            $ chat_msg("pak_budi", "Lho?! Adminnya ikut-ikutan tidur kayak Pak RT?!", "21:46")
            $ update_stat(ket=-8, kep=-8, tek=-6, budi=-6, siti=-4)
            $ catatan_harian.append("Mematikan HP dan meninggalkan warga berdebat soal portal malam.")

    call screen daily_summary_screen(1, "Hari Pertama Selesai: Kau selamat dari iuran Rp15.000, hoaks air galon, dan sandal kiri pos ronda.", catatan_harian)
    jump hari_2


## =========================================================================
## HARI 2 — URUSAN BERSAMA (Kejadian 6 s/d 10)
## =========================================================================
label hari_2:
    $ hari_aktif = 2
    $ fase_waktu = "Pagi (07:30)"
    $ lokasi_aktif = "Kamar Dika (WargaChat RT 05)"
    $ catatan_harian = []
    $ clear_chat("Hari 2 Pagi — Konflik Mulai Saling Berkaitan")
    show screen wargachat_ui

    ## ---------------------------------------------------------------------
    ## KEJADIAN 6: PARKIR MOBIL MELINTANG DI GANG
    ## ---------------------------------------------------------------------
    $ chat_msg("bu_siti", "[Mengirim Foto] Pagi-pagi mau ke tukang sayur terhalang mobil sedan silver parkir makan hampir separuh jalan gang! Saya tidak menuduh siapa-siapa, cuma bertanya ini gang umum atau garasi pribadi?", "07:30")
    $ chat_msg("pak_budi", "👀🔍 MENYIMAK DENGAN SEKSAMA", "07:31", "sticker", "stiker_pantau")
    $ unlock_stiker("stiker_pantau")
    $ chat_msg("pak_budi", "Itu mobil adik ipar saya yang mampir sebentar antar dokumen, Bu Siti! Lagipula motor masih muat lewat kalau jalannya tidak sambil menengok kanan-kiri!", "07:32")
    $ chat_msg("bu_siti", "Gerobak sayur Mang Ujang nyangkut spionnya lho Pak Budi! Jangan salahkan gerobaknya!", "07:33")
    $ unlock_arsip("parkir_gang")

    if relasi_budi >= 60:
        $ chat_msg("pak_budi", "Mas Dika, kemarin Mas Dika sudah adil soal iuran. Tolong jelaskan ke Bu Siti kalau tamu saya cuma mampir 15 menit.", "07:34")

    dika "(Hari kedua dibuka dengan krisis geopolitik terberat di perumahan Indonesia: parkir mobil di gang sempit.)"

    menu:
        "Bagaimana kamu menengahi insiden parkir mobil tamu Pak Budi?"

        "[Diplomatis] Minta Pak Budi memajukan mobil sedikit agar gerobak sayur lewat dengan aman":
            $ chat_msg("dika", "Pak Budi, mohon bantuannya agar mobil adik iparnya dirapatkan sedikit ke dekat pos supaya gerobak Mang Ujang lewat dengan aman. Bu Siti juga mohon sabar sebentar ya.", "07:35")
            $ chat_msg("pak_budi", "Baik Mas Dika, karena Mas Dika mintanya sopan, ini saya suruh geser ke dekat pos.", "07:36")
            $ update_stat(ket=8, kep=8, tek=4, budi=5, siti=5)
            $ catatan_harian.append("Merampungkan sengketa parkir gang tanpa melukai harga diri Pak Budi.")

        "[Tegas] Tegakkan aturan jalan gang: Tamu lebih dari 10 menit wajib parkir di lahan pos depan":
            $ chat_msg("dika", "Aturan RT 05 jelas: lebar gang terbatas untuk darurat dan pedagang keliling. Semua kendaraan tamu wajib parkir di lapangan dekat pos depan sekarang juga.", "07:35")
            $ chat_msg("bu_siti", "Hidup Mas Admin! Mang Ujang akhirnya bisa lewat!", "07:36")
            $ chat_msg("pak_budi", "Baik! Saya pindahkan sekarang! Tapi catat ya, nanti kalau tamu warga lain parkir di gang, saya foto pakai meteran!", "07:37")
            $ update_stat(ket=3, kep=9, tek=6, siti=8, budi=-7)
            $ catatan_harian.append("Menegakkan aturan parkir gang dengan tegas meski membuat Pak Budi mendendam.")

        "[Sarkastis] Tawarkan jasa kursus parkir lurus gratis dari Roni":
            $ chat_msg("dika", "Pengumuman: Bagi tamu yang parkir dengan sudut kemiringan 45 derajat di gang RT 05, Mas Roni membuka kursus meluruskan setir di pos ronda.", "07:35")
            $ chat_msg("roni", "Siap, tarif kursusnya cukup sebungkus kopi hitam.", "07:36")
            $ chat_msg("pak_budi", "Tidak lucu Mas Dika!", "07:37")
            $ update_stat(ket=-6, kep=-2, tek=-3, roni=7, budi=-9)
            $ catatan_harian.append("Menyindir kemampuan parkir tamu Pak Budi di depan grup.")

        "[Menghindar] Lempar urusan parkir ke Pak RT":
            $ chat_msg("dika", "Pak RT Hendra, ini urusan tata tertib jalan gang mohon arahannya Pak.", "07:35")
            $ chat_msg("pak_rt", "Mas Dika... Bapak lagi yoga pernapasan pagi ini. Masa urusan geser mobil harus Bapak turun tangan...", "07:36")
            $ update_stat(ket=-5, kep=-6, tek=2, rt=-7)
            $ catatan_harian.append("Mencoba melempar masalah parkir ke Pak RT yang sedang yoga.")

    ## ---------------------------------------------------------------------
    ## KEJADIAN 7: TUMPUKAN SAMPAH & KUCING OREN
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Siang (11:10)"
    $ chat_msg("pak_budi", "[Mengirim Foto] Sekarang giliran saya yang melapor! Kantong sampah di depan tong Blok B berantakan ke jalan. Ini pasti ada warga yang buang sampah tidak diikat!", "11:10")
    $ chat_msg("bu_siti", "Eh Pak Budi, Blok B itu depan rumah saya! Saya selalu ikat plastik sampah pakai simpul mati tiga lapis ya!", "11:11")
    $ chat_msg("roni", "[Mengirim Foto Close-Up] Permisi Bapak/Ibu, pelaku pembongkaran kantong sampah tertangkap kamera sedang tidur kekenyangan di atas kardus.", "11:12")
    $ chat_msg("roni", "Pelaku berciri-ciri bulu oren, tidak bayar iuran RT, dan tadi malam juga memakai sandal kiri saya.", "11:13")
    $ unlock_arsip("kucing_sampah")

    dika "(Foto kiriman Roni menampilkan kucing oren gembul yang tidur telentang di dekat tong sampah tanpa beban pajak maupun beban moral.)"

    menu:
        "Bagaimana kamu merespons drama sampah yang ternyata ulah kucing oren ini?"

        "[Diplomatis] Ajak warga pasang penutup tong sampah & apresiasi bukti foto Roni":
            $ chat_msg("dika", "Ternyata pelakunya warga berkaki empat. Terima kasih buktinya Mas Roni! Nanti sore saya minta petugas kebersihan merapikan dan kita pasang pengait tutup tong sampah agar aman dari kucing.", "11:15")
            $ chat_msg("bu_siti", "Tuh kan Pak Budi! Bukan warga Blok B yang salah!", "11:16")
            $ chat_msg("pak_budi", "Ya... baguslah kalau ada bukti forensiknya dari Roni.", "11:17")
            $ update_stat(ket=9, kep=8, tek=2, roni=8, siti=5, budi=4)
            $ catatan_harian.append("Meredakan tuduhan sampah Blok B berkat foto kucing oren dari Roni.")

        "[Tegas] Ingatkan Pak Budi dan Bu Siti agar tidak saling tuduh sebelum cek fakta":
            $ chat_msg("dika", "Ini pelajaran untuk kita semua: jangan langsung menuduh tetangga di grup sebelum tahu faktanya. Kasihan kucingnya saja tidak pernah menuduh siapa-siapa.", "11:15")
            $ update_stat(ket=4, kep=7, tek=3, budi=-3, siti=2, roni=5)
            $ catatan_harian.append("Memberi teguran agar warga berhenti saling tuduh tanpa bukti.")

        "[Sarkastis] Angkat si Kucing Oren menjadi Koordinator Keamanan & Kebersihan RT 05":
            $ flag_kucing_viral = True
            $ chat_msg("dika", "Berhubung kucing oren ini lebih aktif patroli daripada kita semua, dengan ini ia saya angkat menjadi Koordinator Lapangan RT 05. Segala komplain sampah silakan disampaikan dalam bahasa 'Meong'.", "11:15")
            $ chat_msg("roni", "Siap, Beliau sudah saya beri pangkat Mayor Oren di pos ronda.", "11:16")
            $ chat_msg("bu_siti", "Hahaha lucu banget sih fotonya, jadi nggak bisa marah deh!", "11:17")
            $ update_stat(ket=10, kep=3, tek=-6, roni=9, siti=7)
            $ catatan_harian.append("Menjadikan Mayor Kucing Oren sebagai maskot perdamaian grup RT 05.")

        "[Menghindar] Biarkan saja karena masalahnya sudah jelas ulah kucing":
            $ chat_msg("dika", "Kasus ditutup ya, pelakunya kucing.", "11:15")
            $ update_stat(ket=2, kep=0, tek=-2)

    ## ---------------------------------------------------------------------
    ## KEJADIAN 8: SALAH KIRIM PENGUMUMAN PAK RT
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Sore (15:05)"
    $ chat_msg("pak_rt", "Bu, tolong bikinkan teh hangat. Bapak malas banget buka HP kalau Pak Budi sama Bu Siti sudah mulai ribut, rasanya pengen pindah ke RT 08 saja.", "15:05")
    $ chat_msg("system", "Pak RT Hendra mencoba menghapus pesan (Gagal: Waktu hapus habis)", "15:06", "system")
    $ chat_msg("pak_budi", "APA-APAAN INI PAK RT?! Jadi selama ini Bapak menganggap masukan kritis saya sebagai keributan?!", "15:07")
    $ chat_msg("bu_siti", "Ya ampun Pak RT... kok nama saya ikut dibawa-bawa sih Pak?!", "15:08")
    $ unlock_arsip("salah_kamar_rt")

    dika "(BENCANA NASIONAL RT 05! Pak RT niat kirim chat pribadi ke istrinya, tapi malah terkirim ke grup warga! Sekarang Pak RT japri aku dengan panik minta diselamatkan!)"

    menu:
        "Darurat! Bagaimana kamu menangani insiden salah kirim chat Pak RT ini?"

        "[Diplomatis] Bantu luruskan bahwa Pak RT kelelahan dan sebenarnya peduli pada warga":
            $ flag_bantu_rt_salah_kirim = True
            $ chat_msg("dika", "Bapak/Ibu, Pak RT sedang kurang enak badan dan kelelahan. Beliau justru sangat memikirkan masukan Pak Budi dan Bu Siti sampai terbawa stres. Mari kita beri waktu beliau istirahat ya.", "15:10")
            $ chat_msg("pak_rt", "Betul sekali warga sekalian, mohon maaf lahir batin, jari Bapak gemetar habis minum obat...", "15:11")
            $ update_stat(ket=6, kep=7, tek=6, rt=15, siti=3, budi=2)
            $ catatan_harian.append("Menyelamatkan reputasi Pak RT dari insiden salah kirim chat ke grup.")

        "[Tegas] Minta Pak RT meminta maaf secara jantan tanpa alasan mengada-ada":
            $ chat_msg("dika", "Pak RT, sebagai pemimpin lingkungan, sebaiknya Bapak sampaikan permohonan maaf terbuka dengan jujur kepada Pak Budi dan Bu Siti agar masalah tidak berlarut.", "15:10")
            $ chat_msg("pak_rt", "Iya... Bapak minta maaf yang sebesar-besarnya kepada Pak Budi dan Bu Siti. Bapak khilaf salah kamar.", "15:11")
            $ chat_msg("pak_budi", "Saya hargai kejujuran Mas Dika yang berani mengingatkan atasan.", "15:12")
            $ update_stat(ket=5, kep=11, tek=5, rt=-5, budi=9, siti=6)
            $ catatan_harian.append("Meminta Pak RT meminta maaf secara terbuka atas pesan salah kirim.")

        "[Sarkastis] Ikut menggoda Pak RT bahwa warga RT 08 belum tentu lebih waras":
            $ chat_msg("dika", "Info tambahan untuk Pak RT: Di grup RT 08 kemarin mereka baru saja ribut tiga hari gara-gara posisi tiang jemuran. Jadi pindah RT bukan solusi Pak.", "15:10")
            $ chat_msg("roni", "Betul Pak RT, rumput tetangga lebih hijau karena pakai filter kamera.", "15:11")
            $ update_stat(ket=3, kep=-1, tek=-4, rt=4, roni=7, budi=-3)
            $ catatan_harian.append("Mencairkan insiden salah kirim Pak RT dengan gosip tiang jemuran RT 08.")

        "[Menghindar] Pura-pura sinyal jelek dan biarkan Pak RT mengarang alasan dibajak":
            $ chat_msg("pak_rt", "Maaf warga! Tadi HP Bapak dipencet kucing oren waktu di teras!!", "15:11")
            $ chat_msg("pak_budi", "Mana ada kucing oren bisa ngetik 'pindah ke RT 08' dengan ejaan sempurna Pak RT?!", "15:12")
            $ update_stat(ket=-10, kep=-5, tek=3, rt=-8, budi=-6)
            $ catatan_harian.append("Membiarkan Pak RT berdalih bahwa HP-nya dibajak kucing oren.")

    ## ---------------------------------------------------------------------
    ## KEJADIAN 9: DRAMA PINJAM KURSI LIPAT INVENTARIS
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Sore (17:15)"
    $ chat_msg("bu_siti", "Mas Dika Admin, saya baru cek gudang RT untuk persiapan rapat besok. Kursi lipat inventaris RT kurang 2 buah! Bulan lalu siapa yang pinjam buat acara syukuran tapi belum dibalikin hayo?!", "17:15")
    $ chat_msg("pak_budi", "Jangan menatap ke rumah saya lagi ya Bu Siti! Acara di rumah saya bulan lalu sewa kursi tenda sendiri!", "17:16")

    if relasi_roni >= 60:
        $ chat_msg("roni", "Mas Dika, info dari buku log pos ronda: kursi lipat nomor 19 dan 20 sedang dipinjam Pak RT sendiri buat jemur kasur di halaman belakang.", "17:17")

    dika "(Kursi lipat RT hilang dua biji saja tensinya sudah seperti audit BPK.)"

    menu:
        "Bagaimana kamu menuntaskan misteri 2 kursi lipat inventaris RT?"

        "[Diplomatis] Cek buku catatan pos ronda bersama Roni tanpa menyudutkan warga":
            $ chat_msg("dika", "Tenang Bapak/Ibu, tidak ada kursi yang hilang. Berdasarkan buku catatan Mas Roni, 2 kursi itu sedang dipakai di halaman belakang rumah Pak RT dan siap dikembalikan besok pagi.", "17:18")
            $ chat_msg("pak_rt", "Eh iya betul! Aduh Bapak lupa, kemarin dipakai jemur bantal. Besok pagi Bapak antar ke balai!", "17:19")
            $ update_stat(ket=8, kep=9, tek=2, roni=6, siti=5, budi=5, rt=3)
            $ catatan_harian.append("Menemukan keberadaan 2 kursi lipat RT lewat catatan rapi Roni.")

        "[Tegas] Wajibkan semua peminjam inventaris RT melapor ke Admin sebelum jam 8 malam":
            $ chat_msg("dika", "Mulai hari ini, seluruh peminjaman barang inventaris RT wajib tercatat di Admin. Siapa pun yang masih menyimpan 2 kursi lipat harap kembalikan ke pos ronda malam ini tanpa kecuali.", "17:18")
            $ update_stat(ket=3, kep=8, tek=5, siti=4)
            $ catatan_harian.append("Menertibkan administrasi peminjaman kursi lipat RT.")

        "[Sarkastis] Umumkan bahwa kursi lipat punya perasaan dan butuh liburan":
            $ chat_msg("dika", "Kemungkinan dua kursi lipat itu mengundurkan diri karena lelah diduduki warga yang suka debat.", "17:18")
            $ update_stat(ket=1, kep=-2, tek=-4, roni=6, budi=-4)

        "[Menghindar] Tunda urusan kursi sampai besok malam":
            $ chat_msg("dika", "Cuma kurang dua kursi, besok yang datang telat duduk di tikar saja ya.", "17:18")
            $ update_stat(ket=-4, kep=-5, tek=-2, siti=-5)

    ## ---------------------------------------------------------------------
    ## KEJADIAN 10: INSPEKSI POS RONDA MALAM (ADEGAN LINGKUNGAN)
    ## ---------------------------------------------------------------------
    hide screen wargachat_ui
    $ mode_tampilan = "cutscene"
    $ fase_waktu = "Malam (22:15)"
    $ lokasi_aktif = "Pos Ronda RT 05"

    scene bg pos_ronda with fade
    show char roni at right with dissolve
    show char dika at left with dissolve

    narator "Malam hari kedua. Merasa matanya pedih menatap layar WargaChat seharian, Dika memutuskan berjalan kaki ke Pos Ronda RT 05."
    roni "Silakan duduk, Mas Admin. Kopi hitam sachet sudah saya seduh. Tenang, malam ini kedua sandal saya lengkap dan aman dari Mayor Oren."
    dika "Roni, jujur saja... gimana caranya kamu bisa kerja jadi satpam di RT 05 selama dua tahun tanpa kena darah tinggi?"
    roni "Rahasianya sederhana Mas Dika: Warga kita ini sebenarnya tidak jahat, mereka cuma kesepian dan ingin merasa penting. Bu Siti ingin dianggap paling update, Pak Budi ingin dihormati, dan Pak RT cuma takut dimarahi keduanya."
    $ unlock_arsip("kopi_ronda")

    show char pak_budi at center with moveinbottom
    narator "Tiba-tiba Pak Budi lewat di depan pos ronda sambil membawa senter besar."
    pak_budi "Ehm. Malam Mas Dika, Roni. Saya cuma jalan malam sambil memastikan tidak ada mobil yang parkir miring. Besok grup pasti makin ramai menjelang rapat warga."

    menu:
        "Di Pos Ronda malam ini, bagaimana sikapmu terhadap Pak Budi dan Roni?"

        "[Diplomatis] Ajak Pak Budi mampir minum kopi sebentar agar suasana mencair":
            $ flag_kopi_ronda_roni = True
            dika "Mampir dulu Pak Budi, masih ada kopi hangat buatan Roni. Kita ngobrol santai saja tanpa menatap layar HP."
            pak_budi "Wah... jarang-jarang ada anak muda yang mengajak saya ngopi di pos. Baiklah, lima menit saja ya. Sebenarnya saya di grup itu cuma ingin RT kita tertib kok, Mas Dika."
            $ update_stat(ket=8, kep=8, tek=-8, budi=12, roni=8)
            $ catatan_harian.append("Mencairkan hubungan dengan Pak Budi dan Roni lewat kopi hangat di Pos Ronda.")

        "[Tegas] Bahas persiapan keamanan rapat besok secara serius dengan Roni & Pak Budi":
            dika "Kebetulan Bapak lewat. Besok malam rapat warga harus tertib dan fokus pada solusi, bukan ajang saling sindir. Saya harap Pak Budi bisa ikut memberi contoh."
            pak_budi "Tentu! Selama semua bicara berdasarkan data, saya paling tertib."
            $ update_stat(ket=5, kep=10, tek=2, budi=6, roni=5)
            $ catatan_harian.append("Menggalang komitmen ketertiban rapat bersama Pak Budi di Pos Ronda.")

        "[Sarkastis] Tanya Pak Budi apakah senternya dipakai untuk mengukur kemiringan ban":
            dika "Senternya terang sekali Pak Budi, cocok buat mencari sandal kiri Roni atau mengukur sudut parkir sampai milimeter terdekat."
            roni "(Tersedak kopi sambil menahan tawa)"
            pak_budi "Hmph. Anak muda zaman sekarang semuanya dijadikan bahan bercanda."
            $ update_stat(ket=-3, kep=-2, tek=-6, budi=-7, roni=9)
            $ catatan_harian.append("Menggoda Pak Budi soal senter inspeksi parkir di Pos Ronda.")

        "[Menghindar] Pamit cepat-cepat pulang ke kamar karena mengantuk":
            dika "Saya permisi pulang duluan ya Pak Budi, Mas Roni. Takut HP saya bunyi lagi."
            $ update_stat(ket=0, kep=-2, tek=-5)
            $ catatan_harian.append("Memilih langsung pulang tidur dari Pos Ronda.")

    call screen daily_summary_screen(2, "Hari Kedua Selesai: Dari parkir gang sempit, Mayor Kucing Oren, salah kirim chat Pak RT, hingga kopi malam di Pos Ronda.", catatan_harian)
    jump hari_3


## =========================================================================
## HARI 3 — RAPAT BESAR (Kejadian 11 s/d 15)
## =========================================================================
label hari_3:
    $ hari_aktif = 3
    $ fase_waktu = "Pagi (08:00)"
    $ lokasi_aktif = "Kamar Dika (WargaChat RT 05)"
    $ catatan_harian = []
    $ clear_chat("Hari 3 Pagi — Menuju Rapat Besar Warga RT 05 Malam Ini")
    show screen wargachat_ui

    ## ---------------------------------------------------------------------
    ## KEJADIAN 11: UNDANGAN RAPAT DARURAT
    ## ---------------------------------------------------------------------
    $ chat_msg("pak_rt", "Selamat pagi warga RT 05. Berhubung banyak dinamika selama dua hari ini, malam ini pukul 19:30 WIB kita adakan Rapat Besar di Balai Warga. Mas Dika, tolong buatkan pengumuman resminya ya.", "08:00")
    $ chat_msg("bu_siti", "Harus hadir semua ya! Jangan ada yang cuma berani ramai di chat tapi pas rapat malah alasan masuk angin!", "08:02")
    $ chat_msg("pak_budi", "Siapa yang Ibu maksud alasan masuk angin?! Minggu lalu saya tidak rapat karena ada webinar nasional!", "08:03")
    $ unlock_arsip("undangan_rapat")

    dika "(Belum juga undangannya kutulis, Bu Siti dan Pak Budi sudah pemanasan ronde pertama di pagi buta.)"

    menu:
        "Bagaimana kamu menyusun pengumuman resmi Rapat Besar RT 05 malam ini?"

        "[Diplomatis] Tulis undangan terstruktur dengan 3 agenda jelas & larangan debat kusir":
            $ chat_msg("dika", "UNDANGAN RESMI RAPAT RT 05 (19:30 WIB di Balai Warga). Agenda ketat: 1. Evaluasi Kebersihan & Tong Sampah, 2. Tata Tertib Parkir & Jam Portal, 3. Keamanan Pos Ronda. Mari hadir dengan semangat solusi.", "08:05")
            $ chat_msg("pak_rt", "Rapi dan berwibawa sekali undangannya Mas Dika!", "08:06")
            $ update_stat(ket=7, kep=9, tek=4, rt=7, siti=4, budi=5)
            $ catatan_harian.append("Menyusun undangan rapat yang terstruktur dan menenangkan kedua kubu.")

        "[Tegas] Wajibkan kehadiran seluruh kepala keluarga; yang absen wajib menerima seluruh hasil rapat":
            $ chat_msg("dika", "PENGUMUMAN TEGAS: Rapat malam ini pukul 19:30 WIB bersifat WAJIB. Warga yang tidak hadir dianggap menyetujui seluruh keputusan rapat dan dilarang protes di grup setelahnya.", "08:05")
            $ chat_msg("pak_budi", "Klausul yang adil! Saya pasti datang paling awal!", "08:06")
            $ update_stat(ket=3, kep=10, tek=6, budi=7, rt=5)
            $ catatan_harian.append("Membuat aturan tegas bahwa warga yang absen rapat dilarang protes di grup.")

        "[Sarkastis] Buat undangan bergaya pertandingan tinju abad ini":
            $ chat_msg("dika", "UNDANGAN SPESIAL MALAM INI 19:30 WIB: Musyawarah Warga RT 05. Diharapkan membawa kepala dingin, buku catatan, dan tidak membawa meteran jalan maupun kucing oren.", "08:05")
            $ chat_msg("roni", "Siap Mas, kentongan pos ronda saya bawa buat bel ronde.", "08:06")
            $ update_stat(ket=2, kep=0, tek=-4, roni=8, siti=3, budi=-4)
            $ catatan_harian.append("Menulis undangan rapat dengan bumbu humor satir.")

        "[Menghindar] Salin-tempel template undangan tahun lalu tanpa mengubah isinya":
            $ chat_msg("dika", "Rapat malam ini jam 19:30 di Balai Warga ya Bapak/Ibu. Terima kasih.", "08:05")
            $ update_stat(ket=-3, kep=-4, tek=-2)

    ## ---------------------------------------------------------------------
    ## KEJADIAN 12: PERDEBATAN KONSUMSI RAPAT (GORENGAN VS LEMPER)
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Siang (13:00)"
    $ chat_msg("pak_rt", "🍵🥟 MUSYAWARAH MUFAKAT", "13:00", "sticker", "stiker_gorengan")
    $ unlock_stiker("stiker_gorengan")
    $ chat_msg("bu_siti", "Bapak/Ibu, untuk konsumsi rapat malam ini saya usul bakwan dan tahu isi hangat. Hemat, renyah, dan menyatukan bangsa!", "13:01")
    $ chat_msg("pak_budi", "Saya keberatan! Gorengan malam-malam itu kolesterol tinggi dan berminyak di tangan waktu pegang mikrofon! Harusnya lemper ayam atau rebusan kacang!", "13:02")
    $ chat_msg("bu_siti", "Kalau cuma kacang rebus nanti rapatnya ngantuk Pak Budi! Lagian siapa juga yang mau pegang mikrofon sambil makan bakwan?!", "13:03")
    $ chat_msg("roni", "Selama ada kopi hitam, mau gorengan atau lemper saya siap mengamankan piringnya.", "13:04")

    dika "(Agenda rapatnya keamanan dan ketertiban lingkungan, tapi 99+ pesan di grup siang ini murni memperdebatkan bakwan versus lemper.)"

    menu:
        "Bagaimana kamu memutuskan polemik konsumsi rapat: Gorengan vs Rebusan/Lemper?"

        "[Diplomatis] Kombinasikan seporsi gorengan dan seporsi lemper/kacang rebus agar adil":
            $ chat_msg("dika", "Solusi win-win: Dana konsumsi kita bagi dua—separuh piring gorengan hangat pilihan Bu Siti, separuh lagi lemper & rebusan sehat usulan Pak Budi. Semua senang.", "13:06")
            $ chat_msg("bu_siti", "Oke deh, adil kalau dibagi dua begitu!", "13:07")
            $ chat_msg("pak_budi", "Setuju. Yang penting ada opsi rendah minyak.", "13:08")
            $ update_stat(ket=8, kep=7, tek=3, siti=6, budi=6, rt=4)
            $ catatan_harian.append("Mendamaikan Perang Konsumsi Rapat dengan koalisi Gorengan & Lemper.")

        "[Tegas] Putuskan menu dengan fitur Polling 5 menit dan tutup perdebatan makanan":
            $ chat_msg("dika", "Grup ini jangan habis energi untuk debat menu snack. Sesuai kas RT, malam ini disediakan tahu isi, lemper, dan teh hangat. Pembahasan konsumsi resmi ditutup.", "13:06")
            $ update_stat(ket=5, kep=8, tek=4, rt=5)
            $ catatan_harian.append("Menutup perdebatan panjang soal menu gorengan rapat secara tegas.")

        "[Sarkastis] Usulkan semua warga bawa air putih masing-masing dari rumah":
            $ chat_msg("dika", "Kalau debat makanan masih lanjut sampai jam 2 siang, konsumsi malam ini saya ganti jadi air putih galon (diminum sambil duduk agar Wi-Fi Balai Warga tidak lemot).", "13:06")
            $ chat_msg("roni", "Callback hoaks kemarin yang sangat berkelas Mas Admin.", "13:07")
            $ update_stat(ket=4, kep=2, tek=-5, roni=8, siti=3)
            $ catatan_harian.append("Mengancam mengganti konsumsi rapat dengan air galon jika warga terus berdebat.")

        "[Menghindar] Biarkan mereka debat sampai 99+ chat tanpa ditengahi":
            $ chat_msg("bu_siti", "Pokoknya tanpa bakwan bukan rapat RT namanya!", "13:07")
            $ chat_msg("pak_budi", "Itu pemikiran anti-kesehatan masyarakat Bu!", "13:08")
            $ update_stat(ket=-8, kep=-5, tek=5)

    ## ---------------------------------------------------------------------
    ## KEJADIAN 13: BANJIR FOTO & SALAH PAHAM PUNCAK MENJELANG RAPAT
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Sore (17:45)"
    $ chat_msg("bu_siti", "[Mengirim 4 Foto] Menjelang rapat malam ini, saya lampirkan bukti pot bunga saya yang daunnya patah tersenggol bumper mobil kemarin!", "17:45")
    $ chat_msg("pak_budi", "[Mengirim 5 Foto] Oh main bukti foto?! Ini saya kirim juga foto daun mangga depan blok Ibu yang gugur terbang ke teras rumah saya tiap sore!", "17:46")
    $ chat_msg("bu_siti", "Lho, daun mangga terbang ditiup angin kok menyalahkan saya?! Memangnya saya pengendali angin?!", "17:47")
    $ chat_msg("pak_rt", "Waduh Mas Dika! Grup makin panas padahal rapat tinggal 2 jam lagi! Lakukan sesuatu Mas!", "17:48")
    $ unlock_arsip("kudeta_mute")

    dika "(Notifikasi HP-ku bergetar tanpa henti. Pot bunga vs daun mangga! Jika tidak dihentikan sekarang, rapat nanti malam bisa batal total atau berubah jadi perang grup!)"

    menu:
        "Krisis Sore Hari 3: Langkah apa yang kamu ambil saat grup dibanjiri foto saling tuding?"

        "[Diplomatis] Gunakan pendekatan personal untuk menenangkan Bu Siti & Pak Budi" if tekanan < 75:
            if relasi_siti >= 55 and relasi_budi >= 55:
                $ chat_msg("dika", "Bu Siti, Pak Budi, selama tiga hari ini Bapak dan Ibu sebenarnya warga yang paling peduli pada RT 05. Mari simpan semua foto ini dan kita selesaikan baik-baik sambil minum teh di Balai Warga nanti malam.", "17:50")
                $ chat_msg("bu_siti", "Iya juga sih Mas Dika... maaf ya saya terbawa emosi.", "17:51")
                $ chat_msg("pak_budi", "Baik Mas Dika. Saya hormati Mas Dika, saya tahan sampai rapat nanti.", "17:52")
                $ update_stat(ket=14, kep=12, tek=3, siti=8, budi=8, rt=8)
            else:
                $ chat_msg("dika", "Bapak/Ibu, mohon hentikan kirim foto di grup. Semua keluhan pot bunga dan pohon mangga sudah saya catat di daftar mediasi malam ini.", "17:50")
                $ update_stat(ket=7, kep=6, tek=5)
            $ catatan_harian.append("Menenangkan perang foto pot bunga vs daun mangga lewat diplomasi.")

        "[Tegas] Aktifkan fitur sakral: 'Hanya Admin yang Dapat Mengirim Pesan' sampai rapat dimulai":
            $ flag_mute_grup = True
            $ chat_msg("system", "Admin Dika mengubah setelan grup: Hanya Admin yang dapat mengirim pesan.", "17:50", "system")
            $ chat_msg("dika", "Grup saya kunci sementara selama 90 menit agar semua warga mendinginkan kepala sebelum bertemu di Balai Warga pukul 19:30 WIB. Sampai jumpa di rapat.", "17:51")
            $ update_stat(ket=10, kep=9, tek=-4, rt=6, roni=8, siti=-4, budi=-4)
            $ catatan_harian.append("Mengaktifkan fitur 'Hanya Admin yang Dapat Mengirim Pesan' demi meredam perang foto.")

        "[Sarkastis] Kirim foto kipas angin kamarmu dan ikut menuntut angin":
            $ chat_msg("dika", "[Mengirim Foto Kipas Angin] Sekalian saya laporkan kipas angin kamar saya yang sejak pagi muter kiri-kanan tapi tidak menyelesaikan masalah hidup saya.", "17:50")
            $ chat_msg("roni", "Wkwkwk skakmat Mas Dika!", "17:51")
            $ update_stat(ket=-5, kep=-3, tek=-6, roni=8, budi=-6)
            $ catatan_harian.append("Membalas banjir foto warga dengan foto kipas angin kamar.")

        "[Menghindar] Lempar HP ke kasur dan biarkan grup meledak":
            $ chat_msg("bu_siti", "Pak Budi kalau mau protes soal angin silakan bersurat ke BMKG!", "17:51")
            $ chat_msg("pak_budi", "Ibu yang harusnya memangkas dahan pohon!", "17:52")
            $ update_stat(ket=-18, kep=-10, tek=10, rt=-8)
            $ catatan_harian.append("Membiarkan perang foto pot bunga vs daun mangga menghancurkan ketenangan grup.")

    ## ---------------------------------------------------------------------
    ## KEJADIAN 14: RAPAT WARGA TAK TERKENDALI (ADEGAN LINGKUNGAN BALAI WARGA)
    ## ---------------------------------------------------------------------
    hide screen wargachat_ui
    $ mode_tampilan = "cutscene"
    $ fase_waktu = "Malam (19:45)"
    $ lokasi_aktif = "Balai Warga RT 05"

    scene bg rapat_warga with fade
    show char pak_rt at left with dissolve
    show char bu_siti at center with dissolve
    show char pak_budi at right with dissolve

    narator "Pukul 19:45 WIB di Balai Warga RT 05. Piring gorengan dan lemper sudah tersaji di meja depan, namun suasana rapat mulai memanas."
    bu_siti "Intinya harus ada aturan jelas soal tamu yang parkir di gang dan jadwal iuran sampah!"
    pak_budi "Dan aturan jelas tentang larangan menyindir tetangga di grup WargaChat serta pemangkasan dahan mangga!"
    pak_rt "Sabar Bapak/Ibu, mari kita dengarkan kesimpulan dari Mas Dika selaku Admin yang sudah merangkum seluruh kejadian tiga hari ini!"

    show char dika at center with dissolve
    $ unlock_arsip("debat_kusir")
    dika "(Semua mata warga RT 05 kini menatapku di meja depan. Mikrofon di tanganku terasa lebih berat daripada barbel lima kilo.)"

    menu:
        "Di depan seluruh warga RT 05 di Balai Warga, bagaimana kamu memimpin mediasi puncak ini?"

        "[Diplomatis] Gunakan catatan Arsip Kejadian untuk menyusun Kesepakatan Bersama RT 05":
            dika "Bapak/Ibu sekalian, selama 3 hari jadi admin saya mencatat semuanya: soal iuran, parkir gang, tong sampah yang dibongkar Mayor Kucing Oren, hingga portal malam."
            dika "Sebenarnya tidak ada warga yang berniat buruk. Mulai malam ini kita sepakati: 1. Tagihan iuran hanya lewat japri bendahara, 2. Parkir tamu di pos depan, 3. Tong sampah diberi pengait, dan 4. Dahan pohon kita rapikan bersama saat kerja bakti Minggu depan!"
            bu_siti "Wah... semua keluhan kita dirangkum adil tanpa ada yang dipermalukan."
            pak_budi "Hmm. Solusi kerja bakti dan japri bendahara itu sangat rasional. Saya setuju!"
            $ update_stat(ket=15, kep=15, tek=2, rt=10, siti=10, budi=10, roni=8)
            $ catatan_harian.append("Memimpin mediasi Rapat Besar dengan sukses menggunakan data Arsip Kejadian.")

        "[Tegas] Tegur seluruh warga bahwa grup chat bukan tempat pelampiasan ego pribadi":
            dika "Saya bicara jujur di depan Bapak/Ibu semua: Masalah di RT 05 ini sebenarnya kecil, yang besar itu gengsi kita di grup chat!"
            dika "Kalau kita masih mau grup RT 05 bertahan, berhenti menganggap setiap kalimat sebagai serangan pribadi, dan patuhi aturan yang sudah disepakati!"
            roni "(Bertepuk tangan dari pojok balai warga) Setuju Mas Dika!"
            pak_budi "Keras... tapi memang ada benarnya."
            $ update_stat(ket=8, kep=12, tek=-4, roni=10, budi=5, siti=3)
            $ catatan_harian.append("Menyampaikan pidato tegas tentang bahaya ego dan baper di grup chat.")

        "[Sarkastis] Sindir Pak RT yang melempar seluruh beban lingkungan kepada admin dadakan":
            dika "Kesimpulan saya selama tiga hari ini sederhana: Menjadi admin grup RT ternyata adalah pekerjaan penuh waktu yang mencakup psikolog, detektif sandal, wasit gorengan, dan juru bicara Pak RT."
            pak_rt "Hehehe... Mas Dika bisa saja, itu namanya kaderisasi pemuda!"
            $ update_stat(ket=-4, kep=2, tek=-6, rt=-6, roni=10)
            $ catatan_harian.append("Menyindir kemalasan Pak RT secara terbuka di panggung Rapat Warga.")

        "[Menghindar] Serahkan mikrofon kembali ke Pak RT karena kepalamu sudah terlalu pusing":
            dika "Silakan Pak RT yang putuskan, saya cuma admin grup, bukan pejabat kelurahan."
            pak_rt "Waduh, kok dilempar balik ke Bapak..."
            $ update_stat(ket=-12, kep=-10, tek=8, rt=-8)
            $ catatan_harian.append("Melepas tanggung jawab mediasi di tengah Rapat Besar.")

    ## ---------------------------------------------------------------------
    ## KEJADIAN 15: KEPUTUSAN TERAKHIR ADMIN
    ## ---------------------------------------------------------------------
    $ fase_waktu = "Malam (21:00)"
    show screen wargachat_ui
    $ chat_msg("dika", "📱😵 ADMIN JUGA MANUSIA", "21:00", "sticker", "stiker_admin")
    $ unlock_stiker("stiker_admin")
    $ chat_msg("pak_rt", "Penutup rapat malam ini: Masa percobaan tiga hari Mas Dika sebagai Admin RT 05 sudah selesai. Bagaimana warga sekalian, dan bagaimana keputusan Mas Dika sendiri?", "21:02")
    $ chat_msg("roni", "Apapun keputusan Mas Dika, kopi pos ronda selalu siap.", "21:03")

    dika "(Inilah momen penentuan akhir. Tiga hari yang penuh notifikasi akhirnya tiba di garis finis.)"

    menu:
        "Keputusan Terakhir di Malam Hari ke-3: Apa langkah penutupmu?"

        "[Diplomatis] Bersedia tetap membantu mengelola grup dengan aturan jam kerja admin yang sehat":
            $ chat_msg("dika", "Saya bersedia tetap membantu grup RT 05, dengan syarat tidak ada lagi debat lewat jam 10 malam dan semua warga saling menghormati.", "21:05")
            $ update_stat(ket=8, kep=8, tek=-5, rt=8, siti=6, budi=6)
            $ catatan_harian.append("Menerima kelanjutan tugas dengan batas waktu dan aturan yang sehat.")

        "[Tegas] Siap mengambil tanggung jawab kepemimpinan penuh jika warga menginginkan perubahan":
            $ flag_terima_mandat_rt = True
            $ chat_msg("dika", "Jika warga RT 05 memang menginginkan tata tertib yang jelas, transparan, dan tidak setengah-setengah, saya siap memimpin pembenahan lingkungan ini secara penuh.", "21:05")
            $ update_stat(ket=10, kep=14, tek=2, rt=6, siti=8, budi=8, roni=8)
            $ catatan_harian.append("Menyatakan kesiapan memimpin pembenahan RT 05 secara penuh.")

        "[Menghindar / Resign] Nyatakan mundur total dan keluar dari jabatan admin malam ini juga":
            $ flag_pilihan_resign = True
            $ chat_msg("dika", "Terima kasih atas tiga hari yang luar biasa menguras jiwa. Dengan ini saya menyatakan RESIGN dari jabatan Admin Grup RT 05. Saya ingin tidur tenang!", "21:05")
            $ update_stat(ket=-5, kep=-5, tek=15)
            $ catatan_harian.append("Memilih mengundurkan diri secara dramatis demi ketenangan batin.")

        "[Sarkastis] Usulkan jabatan admin digilir setiap hari ke Pak Budi dan Bu Siti":
            $ chat_msg("dika", "Saya usul mulai besok jabatan Admin digilir: Hari Senin Bu Siti, Hari Selasa Pak Budi, biar semuanya merasakan nikmatnya notifikasi 24 jam!", "21:05")
            $ update_stat(ket=-10, kep=-4, tek=-5, siti=-5, budi=-5, roni=10)
            $ catatan_harian.append("Mengusulkan rotasi admin antara Bu Siti dan Pak Budi.")

    call screen daily_summary_screen(3, "Hari Ketiga & Rapat Besar Selesai! Saatnya melihat hasil akhir perjalananmu sebagai Admin Dadakan.", catatan_harian)
    jump evaluasi_ending
