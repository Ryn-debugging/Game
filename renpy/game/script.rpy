## =========================================================================
## ADMIN DADAKAN: Grup RT — script.rpy (v2.0 Edisi Gaul)
## Definisi Karakter, Aset Gambar, Prolog, & Alur Utama Permainan
## =========================================================================

## Definisi Karakter untuk Dialog Monolog / Cutscene Lingkungan
define dika = Character("Dika", color="#2DD4BF")
define pak_rt = Character("Pak RT Hendra", color="#FBBF24")
define bu_siti = Character("Bu Siti", color="#FB923C")
define pak_budi = Character("Pak Budi", color="#60A5FA")
define roni = Character("Roni Satpam", color="#94A3B8")
define narator = Character(None, what_italic=True)

## Definisi Aset Background & Sprite Karakter 2D
image bg kamar_dika = "images/bg_kamar_dika.jpg"
image bg jalan_rt = "images/bg_jalan_rt.jpg"
image bg pos_ronda = "images/bg_pos_ronda.jpg"
image bg rapat_warga = "images/bg_rapat_warga.jpg"

image char dika = "images/char_dika.jpg"
image char pak_rt = "images/char_pak_rt.jpg"
image char bu_siti = "images/char_bu_siti.jpg"
image char pak_budi = "images/char_pak_budi.jpg"
image char roni = "images/char_roni.jpg"


## =========================================================================
## LABEL START & PROLOG (ADEGAN LINGKUNGAN: KAMAR DIKA & JALAN RT 05)
## =========================================================================
label start:
    $ ketenangan = 70
    $ kepercayaan = 50
    $ tekanan = 20
    $ relasi_rt = 50
    $ relasi_siti = 50
    $ relasi_budi = 50
    $ relasi_roni = 50
    $ arsip_kejadian = []
    $ koleksi_stiker = []
    $ catatan_harian = []
    $ chat_messages = []

    jump prolog


label prolog:
    $ mode_tampilan = "cutscene"
    $ hari_aktif = 1
    $ fase_waktu = "Pagi (06:45)"
    $ lokasi_aktif = "Kamar Dika — Markas Rebahan"

    scene bg kamar_dika with fade
    show char dika at center with dissolve

    narator "Minggu pagi di kamar RT 05. Kipas angin muter santai, kopi tubruk masih ngebul."
    dika "Resolusi hidup gue minggu ini cuma satu: rebahan tenang, no drama, no debat grup kompleks, dan tidur 8 jam sehari."

    narator "Sayangnya, kedamaian di RT 05 selalu punya tanggal kedaluwarsa. HP Dika di atas meja tiba-tiba getar kenceng."

    scene bg jalan_rt with dissolve
    show char pak_rt at center with dissolve

    pak_rt "Assalamualaikum Mas Dika! Wah kebetulan banget nih anak muda paling melek teknologi udah bangun."
    dika "(Fiks, perasaan nggak enak mulai muncul. Biasanya kalau Pak RT muji 'anak muda melek teknologi', ujung-ujungnya kerja bakti tanpa konsumsi.)"
    pak_rt "Tensi Bapak lagi naik gara-gara baca notif WargaChat RT 05 tiap subuh. Kata dokter, Bapak harus 'puasa ngelerai warga' dulu 3 hari."
    pak_rt "Jadi mulai pagi ini, Mas Dika Bapak angkat jadi Admin Grup RT 05 ya! Santai aja, tugasnya cuma nerusin pengumuman doang kok!"

    show char dika at center with dissolve
    dika "Tunggu Pak, saya bahkan nggak pernah nongol di grup itu kecuali kirim stiker jempol pas Lebaran—"
    narator "Telat. Satu notif keramat langsung mendarat di layar ponsel Dika:"
    narator "'Pak RT Hendra telah menjadikan Anda sebagai Admin Grup RT 05 Kompak.'"
    dika "(Fiks, hidup tenang gue resmi tamat hari ini.)"

    jump hari_1
