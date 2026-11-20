## =========================================================================
## ADMIN DADAKAN: Grup RT — script.rpy
## Definisi Karakter, Aset Gambar, Prolog, & Alur Utama Permainan
## =========================================================================

## Definisi Karakter untuk Dialog Monolog / Cutscene Lingkungan
define dika = Character("Dika", color="#38B2AC")
define pak_rt = Character("Pak RT Hendra", color="#ECC94B")
define bu_siti = Character("Bu Siti", color="#ED8936")
define pak_budi = Character("Pak Budi", color="#63B3ED")
define roni = Character("Roni Satpam", color="#A0AEC0")
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
    $ lokasi_aktif = "Kamar Dika, RT 05"

    scene bg kamar_dika with fade
    show char dika at center with dissolve

    narator "Minggu pagi di lingkungan RT 05. Udara masih sejuk, kipas angin berputar pelan, dan kopi tubruk di meja baru saja diseduh."
    dika "Target hidupku minggu ini sederhana: tidak ikut campur urusan orang, tidak debat di grup kompleks, dan tidur delapan jam sehari."

    narator "Sayangnya, kedamaian di RT 05 selalu punya tanggal kedaluwarsa. HP Dika di atas meja tiba-tiba bergetar hebat."

    scene bg jalan_rt with dissolve
    show char pak_rt at center with dissolve

    pak_rt "Assalamualaikum, Mas Dika! Wah, kebetulan anak muda yang melek teknologi sudah bangun."
    dika "(Perasaan tidak enak mulai muncul. Biasanya kalau Pak RT memuji 'anak muda melek teknologi', ujung-ujungnya kerja bakti tanpa konsumsi.)"
    pak_rt "Begini Mas Dika, tensi Bapak agak naik gara-gara baca notifikasi grup WargaChat RT 05 tiap subuh. Dokter menyarankan Bapak 'puasa menengahi debat warga' selama tiga hari."
    pak_rt "Jadi mulai pagi ini, Mas Dika saya tunjuk sebagai Admin Grup RT 05 ya! Tugasnya gampang kok, cuma meneruskan pengumuman."

    show char dika at center with dissolve
    dika "Tunggu Pak, saya bahkan nggak pernah komentar di grup itu selain stiker jempol waktu Idulfitri—"
    narator "Terlambat. Sebuah notifikasi sistem muncul di layar ponsel Dika:"
    narator "'Pak RT Hendra telah menjadikan Anda sebagai Admin Grup RT 05 Kompak.'"

    jump hari_1
