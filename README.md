# ADMIN DADAKAN: Grup RT 📱🏘️

> *"Menjadi admin itu mudah. Menghadapi manusia adalah masalahnya."*

**ADMIN DADAKAN: Grup RT** adalah game naratif 2D bergenre *dark comedy ringan, chat simulator, & visual novel* tentang **Dika**, seorang pemuda yang mendadak ditunjuk oleh Pak RT menjadi admin grup aplikasi pesan **"WargaChat — Grup RT 05 Kompak"** selama tiga hari penuh.

Repositori ini menyediakan **dua versi lengkap** yang siap digunakan:
1. **Versi Web Playable (`index.html`, `css/`, `js/`)**: Dapat langsung dimainkan di browser desktop maupun ponsel Android dengan orientasi Portrait `9:16`, dilengkapi ilustrasi 2D ekspresif, efek suara notifikasi Web Audio API, sistem *Save/Load*, *Arsip Kejadian*, dan *Koleksi Stiker Bapak/Ibu RT*.
2. **Proyek Ren'Py Android Portrait (`renpy/game/`)**: Proyek sumber Ren'Py (`1080x1920`) lengkap dengan *Custom Screen Language* (`wargachat_ui`, `status_panel`, `archive_screen`, `daily_summary_screen`) yang siap di-build menjadi APK Android melalui Ren'Py SDK.

---

## Fitur Utama (Full MVP)

- **Prolog + 3 Hari (15 Kejadian Utama)**:
  - **Hari 1 — Admin Baru**: Mandat Dadakan, Tragedi Iuran Rp15.000, Hoaks Air Galon vs Wi-Fi, Misteri Sandal Kiri Pos Ronda, Jam Malam vs Martabak.
  - **Hari 2 — Urusan Bersama**: Geopolitik Parkir Gang Sempit, Tumpukan Sampah & Mayor Kucing Oren, Insiden Salah Kamar Pak RT, Drama Pinjam Kursi Lipat, Inspeksi Malam Pos Ronda.
  - **Hari 3 — Rapat Besar**: Undangan Rapat Darurat, Perdebatan Konsumsi (Gorengan vs Lemper), Banjir Foto & Kudeta Tombol Mute, Rapat Warga Tak Terkendali di Balai Warga, Keputusan Terakhir Admin.
- **5 Karakter Inti dengan Gaya Bicara Khas**:
  - **Dika (Pemain/Admin)**: Sarkastis, lelah, cuma ingin tidur tenang.
  - **Pak RT Hendra**: *"Kita musyawarahkan dulu... lewat Mas Dika ya."*
  - **Bu Siti Blok B**: *"Saya bukan gosip, cuma menyampaikan!"*
  - **Pak Budi Pagar Hitam**: *"Saya tidak tersinggung, hanya meluruskan!"*
  - **Roni Satpam**: *"Saya melihat semuanya. Saya memilih menyeruput kopi."*
- **3 Indikator Utama & 4 Bar Relasi Karakter (`0–100`)**:
  - `Ketenangan Grup`, `Kepercayaan Warga`, dan `Tekanan Admin`.
  - Relasi spesifik terhadap `Pak RT`, `Bu Siti`, `Pak Budi`, dan `Roni`.
- **10 Arsip Kejadian & 5 Stiker Bapak/Ibu RT**: Koleksi humor lokal yang terbuka otomatis seiring progres permainan.
- **4 Ending Berbeda**:
  1. **Ending 1 — Admin Teladan**: Grup damai, tapi Dika terjebak jadi *customer service* RT 24 jam.
  2. **Ending 2 — Perang Grup RT**: Grup pecah menjadi 3 grup tandingan baru, dan Dika dijadikan admin di ketiganya.
  3. **Ending 3 — Aku Resign!**: Tekanan memuncak hingga Dika keluar grup, namun 10 menit kemudian ditarik lagi ke grup *"RT 05 Reborn"*.
  4. **Ending 4 — Ketua RT Baru**: Terlalu kompeten memediasi warga hingga Pak RT pensiun dini dan Dika diangkat jadi Ketua RT 05.

---

## Struktur Direktori

```text
.
├── index.html                  # Entry point versi Web Playable (Portrait 9:16)
├── css/
│   └── style.css               # Desain UI WargaChat, Stage 2D, & Modal
├── js/
│   ├── audio.js                # Web Audio API Synthesizer (SFX Notifikasi & BGM)
│   ├── story_data.js           # Database 15 Kejadian, 5 Karakter, Arsip, Stiker, 4 Ending
│   └── engine.js               # Core Narrative & Chat Simulator Engine
├── assets/
│   └── images/                 # Ilustrasi 2D (5 Karakter & 4 Background Lingkungan RT 05)
├── renpy/
│   └── game/                   # Proyek Ren'Py siap-build untuk Android (1080x1920)
│       ├── options.rpy
│       ├── gui.rpy
│       ├── chat_system.rpy
│       ├── screens.rpy
│       ├── script.rpy
│       ├── story_days.rpy
│       ├── endings.rpy
│       └── images/
├── tests/
│   └── verify_game.py          # Pengujian otomatis integritas cerita & ketercapaian 4 ending
└── PRD_ADMIN_DADAKAN.md        # Dokumen Product Requirements Document (PRD)
```

---

## Cara Menjalankan

### 1. Menjalankan Versi Web Playable
Jalankan server HTTP lokal dari root repositori:
```bash
python3 -m http.server 8080
```
Kemudian buka `http://localhost:8080` di browser.

### 2. Membuka & Build APK Android di Ren'Py
1. Buka **Ren'Py Launcher (8.x)**.
2. Arahkan *Projects Directory* ke folder `renpy/` (atau salin folder `renpy/` sebagai proyek Ren'Py).
3. Klik **Launch Project** untuk menguji di desktop, atau pilih **Android -> Build Package** untuk menghasilkan APK Android berorientasi Portrait (`1080x1920`).

### 3. Menjalankan Pengujian Otomatis
```bash
python3 tests/verify_game.py
```
