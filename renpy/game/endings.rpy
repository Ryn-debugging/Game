## =========================================================================
## ADMIN DADAKAN: Grup RT — endings.rpy (v2.0 Edisi Gaul)
## Evaluasi Kondisional 4 Ending Berdasarkan Indikator & Flag Cerita
## =========================================================================

label evaluasi_ending:
    hide screen wargachat_ui
    $ mode_tampilan = "cutscene"

    if tekanan >= 80 or (flag_pilihan_resign and tekanan >= 65) or flag_pilihan_resign:
        jump ending_resign
    elif ketenangan <= 35 or (ketenangan < 50 and kepercayaan < 40):
        jump ending_perang_grup
    elif ketenangan >= 65 and kepercayaan >= 70 and tekanan < 75 and ((relasi_siti >= 60) + (relasi_budi >= 60) + (relasi_roni >= 60) + (relasi_rt >= 60) >= 2):
        jump ending_ketua_rt
    else:
        jump ending_admin_teladan


## -------------------------------------------------------------------------
## ENDING 1: ADMIN TELADAN (Customer Service Abadi RT 05)
## -------------------------------------------------------------------------
label ending_admin_teladan:
    scene bg kamar_dika with fade
    show char dika at center with dissolve

    narator "ENDING 1 DARI 4 — ADMIN TELADAN"
    narator "Tiga hari penuh drama akhirnya kelar. Grup WargaChat RT 05 selamat dari tragedi iuran 15 ribu, parkir gang sempit, salah kamar Pak RT, sampai rapat balai warga tanpa pecah perang saudara."
    dika "Akhirnya kelar juga 3 hari mandat darurat Pak RT. Saatnya balikin jabatan admin dan comeback jadi kaum rebahan pasif."

    show char pak_rt at right with moveinright
    pak_rt "Luar biasa Mas Dika! Sejak Mas Dika pegang grup, tensi Bapak normal lagi. Warga sepakat Mas Dika diperpanjang jadi Admin Tetap Seumur Hidup!"

    show char bu_siti at left with moveinleft
    bu_siti "Mas Dika Admin! Tolong umumin di grup dong, barusan Mayor Oren lewat bawa sebelah kaus kaki pink milik siapa ya?"
    dika "(Gue sukses bikin RT 05 adem... tapi harganya gue jadi customer service 24 jam buat satu kompleks.)"

    jump epilog_statistik


## -------------------------------------------------------------------------
## ENDING 2: PERANG GRUP RT (Pecah Jadi 3 Kubu Tandingan)
## -------------------------------------------------------------------------
label ending_perang_grup:
    scene bg rapat_warga with fade
    show char pak_budi at left with dissolve
    show char bu_siti at right with dissolve

    narator "ENDING 2 DARI 4 — PERANG GRUP RT"
    narator "Akumulasi sindiran halus, spam foto pot vs daun mangga, dan debat kusir bikin ketenangan grup 'RT 05 Kompak' ambruk total dan resmi bubar jalan."

    pak_budi "Saya nggak baper! Saya cuma bikin grup baru 'RT 05 Lurus & Beradab' khusus warga yang parkirnya lurus dan anti-framing!"
    bu_siti "Oh gitu? Oke! Saya juga udah bikin grup 'RT 05 Informatif Anti-Baper'! Semua info gorengan pindah ke sana!"

    show char dika at center with dissolve
    dika "Syukurlah grupnya bubar, berarti tugas gue kelar—"
    narator "TING! TING! TING!"
    narator "'Anda dijadikan Admin di grup: RT 05 Lurus & Beradab'"
    narator "'Anda dijadikan Admin di grup: RT 05 Informatif Anti-Baper'"
    narator "'Roni Satpam menambahkan Anda ke grup: Aliansi Pos Ronda Netral'"
    dika "Astaga... tadinya cuma satu grup, kenapa malah beranak pinak jadi tiga?!"

    jump epilog_statistik


## -------------------------------------------------------------------------
## ENDING 3: AKU RESIGN! (Merdeka Cuma 10 Menit)
## -------------------------------------------------------------------------
label ending_resign:
    scene bg kamar_dika with fade
    show char dika at center with dissolve

    narator "ENDING 3 DARI 4 — AKU RESIGN!"
    narator "Ratusan notif soal sandal kiri, hoaks air galon, dan perang bakwan vs lemper bikin level stres Dika tembus batas kewarasan manusia normal."

    dika "Cukup! Gue manusia biasa, bukan dewan keamanan PBB!"
    narator "Dengan hati lega pol, Dika mencet tombol merah keramat:"
    narator "'Dika keluar dari grup RT 05 Kompak.'"

    dika "Hening. Adem. Damai. Ini baru merdeka..."
    narator "Sepuluh menit kemudian..."

    show char roni at right with moveinright
    roni "Bang Dika, kata Pak RT grup lama error gara-gara adminnya cabut. Jadi Pak RT bikin grup baru 'RT 05 REBORN' dan nomor lu udah dijadikan Super Admin."
    dika "RONI, TOLONG BILANG KE PAK RT GUE UDAH PINDAH PLANET!"

    jump epilog_statistik


## -------------------------------------------------------------------------
## ENDING 4: KETUA RT BARU (Kebanyakan Kompeten!)
## -------------------------------------------------------------------------
label ending_ketua_rt:
    scene bg rapat_warga with fade
    show char pak_rt at left with dissolve
    show char dika at center with dissolve
    show char roni at right with dissolve

    narator "ENDING 4 DARI 4 — KETUA RT BARU"
    narator "Gara-gara diplomasi yang super keren, grup tetap adem, plus respek penuh dari warga, Rapat Besar malam itu ditutup dengan tepuk tangan meriah."

    pak_rt "Warga RT 05 sekalian! Liat skill kepemimpinan Mas Dika yang luar biasa, saya resmi pensiun dini dan menyerahkan stempel Ketua RT 05 ke Mas Dika!"
    bu_siti "Setuju!! Hidup Pak RT Dika!!"
    pak_budi "Kalau Mas Dika yang jadi Pak RT, saya nggak tersinggung. Dukung 100%!"
    roni "Mantap Pak RT baru. Kopi pos ronda malem ini gratis khusus pejabat baru."

    dika "(Niat awal cuma pengen rebahan tenang di hari Minggu. Sekarang meja kamar gue penuh stempel RT, buku kas iuran, sama jadwal ronda satu semester.)"
    dika "(Pesan moral: Jangan pernah keliatan terlalu jago ngurus masalah di grup WA RT.)"

    jump epilog_statistik


## -------------------------------------------------------------------------
## EPILOG & RINGKASAN STATISTIK AKHIR
## -------------------------------------------------------------------------
label epilog_statistik:
    narator "RAPOR AKHIR ADMIN DADAKAN:\n• Ketenangan Grup: [ketenangan]/100\n• Respek Warga: [kepercayaan]/100\n• Tekanan Mental: [tekanan]/100\n• Arsip Kejadian: [len(arsip_kejadian)]/10\n• Stiker RT: [len(koleksi_stiker)]/5"
    narator "Makasih udah main ADMIN DADAKAN: Grup RT v2.0! Cobain gaya balasan lain buat buka semua 4 Ending & 10 Arsip Drama RT 05."
    return
