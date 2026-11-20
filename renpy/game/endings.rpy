## =========================================================================
## ADMIN DADAKAN: Grup RT — endings.rpy
## Evaluasi Kondisional 4 Ending Berdasarkan Indikator & Flag Cerita
## =========================================================================

label evaluasi_ending:
    hide screen wargachat_ui
    $ mode_tampilan = "cutscene"

    # Prioritas 1: Ending 3 — Aku Resign! (Tekanan terlalu tinggi atau memilih mundur saat stres berat)
    if tekanan >= 80 or (flag_pilihan_resign and tekanan >= 65):
        jump ending_resign

    # Prioritas 2: Ending 2 — Perang Grup RT (Ketenangan grup hancur)
    elif ketenangan <= 35 or (ketenangan < 50 and kepercayaan < 40):
        jump ending_perang_grup

    # Prioritas 3: Ending 4 — Ketua RT Baru (Ketenangan & Kepercayaan tinggi, tekanan terkendali, relasi warga bagus)
    elif ketenangan >= 65 and kepercayaan >= 70 and tekanan < 75 and ((relasi_siti >= 60) + (relasi_budi >= 60) + (relasi_roni >= 60) + (relasi_rt >= 60) >= 2):
        jump ending_ketua_rt

    # Prioritas 4 (Default): Ending 1 — Admin Teladan
    else:
        jump ending_admin_teladan


## -------------------------------------------------------------------------
## ENDING 1: ADMIN TELADAN (Grup Damai, Dika Jadi Customer Service Abadi)
## -------------------------------------------------------------------------
label ending_admin_teladan:
    scene bg kamar_dika with fade
    show char dika at center with dissolve

    narator "ENDING 1 DARI 4 — ADMIN TELADAN"
    narator "Tiga hari berlalu. Grup WargaChat RT 05 berhasil melewati badai iuran, parkir gang sempit, salah kirim chat Pak RT, hingga rapat warga tanpa pecah perang saudara."
    dika "Akhirnya selesai juga tiga hari mandat darurat Pak RT. Sekarang saatnya mengembalikan jabatan admin dan kembali menjadi warga pasif."

    show char pak_rt at right with moveinright
    pak_rt "Luar biasa Mas Dika! Sejak Mas Dika pegang grup, tensi Bapak normal kembali. Warga sepakat Mas Dika diperpanjang jadi Admin Tetap Seumur Hidup!"

    show char bu_siti at left with moveinleft
    bu_siti "Mas Dika Admin! Tolong umumkan di grup ya, jemuran handuk warna pink milik siapa yang terbang ke atap rumah saya?"
    dika "(Aku berhasil mendamaikan RT 05... tapi harga yang kubayar adalah menjadi customer service 24 jam untuk seluruh umat di gang ini.)"

    jump epilog_statistik


## -------------------------------------------------------------------------
## ENDING 2: PERANG GRUP RT (Grup Pecah Menjadi 3 Kubu Tandingan)
## -------------------------------------------------------------------------
label ending_perang_grup:
    scene bg rapat_warga with fade
    show char pak_budi at left with dissolve
    show char bu_siti at right with dissolve

    narator "ENDING 2 DARI 4 — PERANG GRUP RT"
    narator "Konflik demi konflik yang menumpuk akhirnya meledak. Ketenangan grup jatuh ke titik terendah, dan grup 'RT 05 Kompak' resmi bubar jalan."

    pak_budi "Saya tidak marah! Saya hanya membuat grup baru bernama 'RT 05 Lurus & Beradab' khusus warga yang parkirnya lurus dan tidak suka menyindir!"
    bu_siti "Oh begitu? Baik! Saya juga sudah buat grup 'RT 05 Informatif Tanpa Baper'! Semua info gorengan dan ronda pindah ke sana!"

    show char dika at center with dissolve
    dika "Baguslah kalau grupnya bubar, berarti tugasku selesai—"
    narator "TING! TING! TING!"
    narator "'Anda telah ditambahkan sebagai Admin di grup: RT 05 Lurus & Beradab'"
    narator "'Anda telah ditambahkan sebagai Admin di grup: RT 05 Informatif Tanpa Baper'"
    narator "'Roni Satpam menambahkan Anda ke grup: Aliansi Pos Ronda Netral'"
    dika "Tuhan... tadinya cuma satu grup, kenapa sekarang beranak pinak jadi tiga?!"

    jump epilog_statistik


## -------------------------------------------------------------------------
## ENDING 3: AKU RESIGN! (Tekanan Memuncak, Keluar Grup Tapi Ditarik Lagi)
## -------------------------------------------------------------------------
label ending_resign:
    scene bg kamar_dika with fade
    show char dika at center with dissolve

    narator "ENDING 3 DARI 4 — AKU RESIGN!"
    narator "Tekanan batin Dika mencapai batas maksimal. Ratusan notifikasi per menit soal sandal hilang, kucing oren, dan debat lemper vs tahu isi membuatnya mengambil langkah paling radikal."

    dika "Cukup! Aku manusia biasa, bukan dewan keamanan PBB!"
    narator "Dengan napas lega, Dika menekan tombol merah di layar ponselnya:"
    narator "'Dika keluar dari grup RT 05 Kompak.'"

    dika "Hening. Damai. Burung-burung berkicau. Inilah kebebasan sejati..."
    narator "Sepuluh menit kemudian..."

    show char roni at right with moveinright
    roni "Mas Dika, kata Pak RT grup lama error karena adminnya tiba-tiba hilang. Jadi Pak RT bikin grup baru 'RT 05 Reborn' dan nomor Mas Dika sudah dijadikan Super Admin."
    dika "RONI, TOLONG BILANGKAN KE PAK RT AKU SUDAH PINDAH PLANET!"

    jump epilog_statistik


## -------------------------------------------------------------------------
## ENDING 4: KETUA RT BARU (Terlalu Kompeten Hingga Dikudeta Jadi Ketua RT)
## -------------------------------------------------------------------------
label ending_ketua_rt:
    scene bg rapat_warga with fade
    show char pak_rt at left with dissolve
    show char dika at center with dissolve
    show char roni at right with dissolve

    narator "ENDING 4 DARI 4 — KETUA RT BARU"
    narator "Berkat diplomasi yang cerdas, ketenangan grup yang terjaga, dan tingginya kepercayaan warga dari Bu Siti, Pak Budi, hingga Roni, rapat besar malam itu berakhir dengan tepuk tangan meriah."

    pak_rt "Warga RT 05 sekalian! Melihat kepemimpinan Mas Dika yang bijaksana selama tiga hari terakhir, saya dengan bangga menyerahkan stempel basah dan jabatan Ketua RT 05 kepada Mas Dika!"
    bu_siti "Setuju! Hidup Pak RT Dika!"
    pak_budi "Kalau Mas Dika yang jadi Ketua RT, saya tidak tersinggung. Saya mendukung penuh!"
    roni "Selamat, Pak RT baru. Kopi pos ronda malam ini gratis khusus pejabat baru."

    dika "(Awalnya aku cuma ingin tidur tenang di hari Minggu. Sekarang di atas meja kamarku ada stempel RT, buku kas iuran, dan jadwal ronda satu semester.)"
    dika "(Pesan moral: Jangan pernah terlihat terlalu kompeten di grup WhatsApp RT.)"

    jump epilog_statistik


## -------------------------------------------------------------------------
## EPILOG & RINGKASAN STATISTIK AKHIR
## -------------------------------------------------------------------------
label epilog_statistik:
    narator "STATISTIK AKHIR PERMAINAN:\n• Ketenangan Grup: [ketenangan]/100\n• Kepercayaan Warga: [kepercayaan]/100\n• Tekanan Admin: [tekanan]/100\n• Arsip Kejadian Terkumpul: [len(arsip_kejadian)]/10\n• Stiker Warga Terkumpul: [len(koleksi_stiker)]/5"
    narator "Terima kasih telah bermain ADMIN DADAKAN: Grup RT! Cobalah pilihan lain untuk membuka seluruh 4 Ending dan melengkapi 10 Arsip Kejadian."
    return
