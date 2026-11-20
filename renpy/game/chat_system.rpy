## =========================================================================
## ADMIN DADAKAN: Grup RT — chat_system.rpy
## Sistem Inti "WargaChat", Manajemen Indikator (0-100), Relasi, & Arsip
## =========================================================================

## 1. Variabel Indikator Utama (Rentang 0-100)
default ketenangan = 70
default kepercayaan = 50
default tekanan = 20

## 2. Variabel Hubungan Karakter (Rentang 0-100)
default relasi_rt = 50
default relasi_siti = 50
default relasi_budi = 50
default relasi_roni = 50

## 3. State Permainan & Koleksi
default hari_aktif = 1
default fase_waktu = "Pagi"
default lokasi_aktif = "Grup WargaChat RT 05"
default chat_messages = []
default arsip_kejadian = []
default koleksi_stiker = []
default catatan_harian = []
default mode_tampilan = "chat"  # "chat" atau "cutscene"
default potret_aktif = "char_dika"
default ekspresi_caption = "Dika (Admin Baru)"

## 4. Flag Cerita untuk Konsekuensi Lanjutan & Ending
default flag_aturan_ketat = False
default flag_bela_budi_parkir = False
default flag_kucing_viral = False
default flag_bantu_rt_salah_kirim = False
default flag_kopi_ronda_roni = False
default flag_mute_grup = False
default flag_pilihan_resign = False
default flag_terima_mandat_rt = False

init python:
    # Metadata Karakter untuk Gelembung Chat & Warna Nama
    CHARACTER_META = {
        "dika": {
            "name": "Dika (Admin)",
            "role": "Admin Dadakan",
            "color": "#075E54",
            "avatar": "images/char_dika.jpg"
        },
        "pak_rt": {
            "name": "Pak RT Hendra",
            "role": "Ketua RT 05",
            "color": "#B7791F",
            "avatar": "images/char_pak_rt.jpg"
        },
        "bu_siti": {
            "name": "Bu Siti Blok B",
            "role": "Seksi Informasi Tak Resmi",
            "color": "#C05621",
            "avatar": "images/char_bu_siti.jpg"
        },
        "pak_budi": {
            "name": "Pak Budi Pagar Hitam",
            "role": "Warga Kritis & Sensitif",
            "color": "#2B6CB0",
            "avatar": "images/char_pak_budi.jpg"
        },
        "roni": {
            "name": "Roni Satpam",
            "role": "Penjaga Pos Ronda",
            "color": "#2D3748",
            "avatar": "images/char_roni.jpg"
        },
        "system": {
            "name": "Sistem WargaChat",
            "role": "Notifikasi Grup",
            "color": "#4A5568",
            "avatar": None
        }
    }

    # Daftar Katalog Arsip Kejadian (10 Arsip)
    KATALOG_ARSIP = {
        "sk_admin": {
            "title": "SK Admin Tanpa Tanda Tangan",
            "day": "Hari 1",
            "desc": "Pak RT mengangkat Dika jadi admin tunggal lewat satu chat singkat lalu langsung menghilang dengan alasan 'istirahat notifikasi'."
        },
        "tragedi_iuran": {
            "title": "Tragedi Iuran Rp15.000",
            "day": "Hari 1",
            "desc": "Bu Siti cuma mengingatkan iuran sampah secara umum, tapi Pak Budi menulis pembelaan sepanjang tiga paragraf karena merasa disindir."
        },
        "sandal_ronda": {
            "title": "Misteri Sandal Kiri Pos Ronda",
            "day": "Hari 1",
            "desc": "Sandal jepit sebelah kiri hilang di pos ronda. Pak Budi curiga sindikat pencurian, padahal digondol kucing oren."
        },
        "parkir_gang": {
            "title": "Geopolitik Parkir Gang Sempit",
            "day": "Hari 2",
            "desc": "Ban mobil tamu Pak Budi memakan 40% lebar jalan gang RT 05, memicu perdebatan filosofis tentang batas tanah dan kesabaran."
        },
        "kucing_sampah": {
            "title": "Kucing Oren Penguasa Tong Sampah",
            "day": "Hari 2",
            "desc": "Saat warga ribut soal sampah berserakan, Roni mengirim bukti pelaku utamanya: seekor kucing oren yang tidur pulas tanpa rasa bersalah."
        },
        "salah_kamar_rt": {
            "title": "Insiden Salah Kamar Pak RT",
            "day": "Hari 2",
            "desc": "Pak RT berniat curhat ke istrinya soal betapa melelahkannya menghadapi Pak Budi, namun terkirim langsung ke Grup RT 05."
        },
        "kopi_ronda": {
            "title": "Filosofi Kopi Sachet Pos Ronda",
            "day": "Hari 2",
            "desc": "Obrolan tengah malam bersama Roni di pos ronda mengungkap bahwa 80% drama RT sebenarnya bisa selesai kalau warga tidur tepat waktu."
        },
        "undangan_rapat": {
            "title": "Undangan Rapat Paling Tegang Se-Kecamatan",
            "day": "Hari 3",
            "desc": "Undangan rapat bulanan biasa yang atmosfernya di grup chat sudah seperti pemanggilan sidang mahkamah darurat."
        },
        "kudeta_mute": {
            "title": "Kudeta Tombol Mute Grup",
            "day": "Hari 3",
            "desc": "Puncak perang foto di grup RT 05 yang memaksa Dika mempertimbangkan tombol sakral: 'Hanya Admin yang Dapat Mengirim Pesan'."
        },
        "debat_kusir": {
            "title": "Musyawarah Mufakat Rasa Debat Kusir",
            "day": "Hari 3",
            "desc": "Rapat tatap muka di Balai Warga RT 05 di mana bahasan keamanan lingkungan melenceng ke ukuran gorengan dan sejarah kursi lipat."
        }
    }

    # Daftar Koleksi Stiker Bapak-Bapak / Ibu-Ibu RT (5 Stiker)
    KATALOG_STIKER = {
        "stiker_pagi": {
            "title": "Selamat Pagi Semoga Berkah 4K",
            "sender": "Bu Siti",
            "art": "🌹✨ SELAMAT PAGI WARGA RT 05 ✨🌹\nSemoga Rezeki Lancar & Tetangga Rukun!"
        },
        "stiker_tenang": {
            "title": "Harap Tenang Ada Ujian Kehidupan",
            "sender": "Roni Satpam",
            "art": "🤫☕ HARAP TENANG\nAdmin Sedang Menghadapi Ujian Kehidupan"
        },
        "stiker_pantau": {
            "title": "Pantau Terus Jangan Kasih Kendor",
            "sender": "Pak Budi",
            "art": "👀🔍 MENYIMAK DENGAN SEKSAMA\nSaya Tidak Marah, Hanya Meluruskan!"
        },
        "stiker_gorengan": {
            "title": "Rapat Penting: Bahas Gorengan",
            "sender": "Pak RT",
            "art": "🍵🥟 MUSYAWARAH MUFAKAT\nMasalah Selesai Kalau Gorengan Masih Hangat"
        },
        "stiker_admin": {
            "title": "Admin Juga Manusia",
            "sender": "Dika",
            "art": "📱😵 ADMIN JUGA MANUSIA\nBukan Customer Service 24 Jam"
        }
    }

    def clamp_val(val):
        return max(0, min(100, int(val)))

    def update_stat(ket=0, kep=0, tek=0, rt=0, siti=0, budi=0, roni=0):
        """Memperbarui indikator utama & relasi karakter dalam batas 0..100."""
        store.ketenangan = clamp_val(store.ketenangan + ket)
        store.kepercayaan = clamp_val(store.kepercayaan + kep)
        store.tekanan = clamp_val(store.tekanan + tek)

        store.relasi_rt = clamp_val(store.relasi_rt + rt)
        store.relasi_siti = clamp_val(store.relasi_siti + siti)
        store.relasi_budi = clamp_val(store.relasi_budi + budi)
        store.relasi_roni = clamp_val(store.relasi_roni + roni)

        # Tampilkan notifikasi singkat perubahan mencolok
        changes = []
        if ket != 0:
            changes.append("Ketenangan {:+d}".format(ket))
        if kep != 0:
            changes.append("Kepercayaan {:+d}".format(kep))
        if tek != 0:
            changes.append("Tekanan {:+d}".format(tek))
        if changes:
            renpy.notify(" | ".join(changes))

    def chat_msg(sender_id, text, time_str="08:00", msg_type="text", sticker_key=None):
        """Menambahkan pesan baru ke layar WargaChat dan memperbarui potret karakter aktif."""
        meta = CHARACTER_META.get(sender_id, CHARACTER_META["system"])
        entry = {
            "sender_id": sender_id,
            "sender_name": meta["name"],
            "color": meta["color"],
            "text": text,
            "time": time_str,
            "type": msg_type,
            "sticker_key": sticker_key
        }
        store.chat_messages = list(store.chat_messages) + [entry]
        if sender_id in ("dika", "pak_rt", "bu_siti", "pak_budi", "roni"):
            store.potret_aktif = "char_" + sender_id
            store.ekspresi_caption = "{} — {}".format(meta["name"], meta["role"])

    def clear_chat(header_note=None):
        """Membersihkan layar chat saat berganti hari atau babak."""
        store.chat_messages = []
        if header_note:
            chat_msg("system", header_note, "--:--", "system")

    def unlock_arsip(arsip_id):
        """Membuka Arsip Kejadian baru jika belum tercatat."""
        if arsip_id in KATALOG_ARSIP and arsip_id not in store.arsip_kejadian:
            store.arsip_kejadian = list(store.arsip_kejadian) + [arsip_id]
            judul = KATALOG_ARSIP[arsip_id]["title"]
            renpy.notify("Arsip Kejadian Terbuka: " + judul)

    def unlock_stiker(stiker_id):
        """Membuka Koleksi Stiker Warga RT baru."""
        if stiker_id in KATALOG_STIKER and stiker_id not in store.koleksi_stiker:
            store.koleksi_stiker = list(store.koleksi_stiker) + [stiker_id]
            judul = KATALOG_STIKER[stiker_id]["title"]
            renpy.notify("Stiker RT Baru: " + judul)

    def status_label_ketenangan(val):
        if val >= 70:
            return "Kondusif & Adem"
        elif val >= 40:
            return "Mulai Rawan Sindiran"
        return "Siaga Satu Perang Grup!"

    def status_label_kepercayaan(val):
        if val >= 70:
            return "Admin Dihormati Warga"
        elif val >= 40:
            return "Cukup Didengar"
        return "Dianggap Angin Lalu"

    def status_label_tekanan(val):
        if val >= 75:
            return "Kritis! Ingin Banting HP"
        elif val >= 45:
            return "Pusing Notifikasi"
        return "Masih Waras & Santai"
