## =========================================================================
## ADMIN DADAKAN: Grup RT — screens.rpy
## Definisi 9 Layar Utama (Portrait 1080x1920):
## 1. Main Menu          4. Pilihan Respons    7. Ringkasan Harian
## 2. Cutscene / Prolog  5. Panel Status       8. Layar Ending
## 3. WargaChat UI       6. Arsip & Stiker     9. Pengaturan
## =========================================================================

## -------------------------------------------------------------------------
## 1. LAYAR UTAMA WARGACHAT (HUD & Chat Simulator + Potret Karakter 2D)
## -------------------------------------------------------------------------
screen wargachat_ui():
    zorder 5

    # Panel latar belakang aplikasi WargaChat
    frame:
        xfill True
        yfill True
        background "#ECE5DD"
        padding (0, 0)

        vbox:
            xfill True
            yfill True
            spacing 0

            # A. Bar Indikator Atas (Quick Status Bar)
            frame:
                xfill True
                ysize 84
                background "#054640"
                padding (24, 12)

                hbox:
                    xfill True
                    yalign 0.5
                    spacing 20

                    text "Hari [hari_aktif] • [fase_waktu]" size 26 color "#E6FFFA" bold True yalign 0.5
                    text "Tenang: [ketenangan]" size 24 color "#81E6D9" yalign 0.5
                    text "Percaya: [kepercayaan]" size 24 color "#90CDF4" yalign 0.5
                    text "Stres: [tekanan]" size 24 color "#FEB2B2" yalign 0.5

            # B. Header Aplikasi "WargaChat — Grup RT 05"
            frame:
                xfill True
                ysize 120
                background "#075E54"
                padding (24, 14)

                hbox:
                    xfill True
                    yalign 0.5
                    spacing 18

                    vbox:
                        xfill True
                        spacing 4
                        text "WargaChat: Grup RT 05 Kompak" size 34 color "#FFFFFF" bold True
                        text "Pak RT, Bu Siti, Pak Budi, Roni, Anda" size 22 color "#C6F6D5"

                    hbox:
                        xalign 1.0
                        yalign 0.5
                        spacing 12

                        textbutton "Status":
                            action ShowMenu("status_panel")
                            text_size 24
                            text_color "#FFFFFF"
                            background "#128C7E"
                            padding (16, 10)

                        textbutton "Arsip ([len(arsip_kejadian)])":
                            action ShowMenu("archive_screen")
                            text_size 24
                            text_color "#FFFFFF"
                            background "#128C7E"
                            padding (16, 10)

            # C. Banner Potret Karakter 2D Ekspresif
            frame:
                xfill True
                ysize 240
                background "#F7FAFC"
                padding (24, 12)

                hbox:
                    spacing 24
                    yalign 0.5
                    add "images/[potret_aktif].jpg" size (190, 190) yalign 0.5
                    vbox:
                        yalign 0.5
                        spacing 8
                        text "[ekspresi_caption]" size 30 color "#075E54" bold True
                        text "Lokasi: [lokasi_aktif]" size 24 color "#4A5568"
                        text "Kondisi Grup: [status_label_ketenangan(ketenangan)]" size 24 color "#2D3748"

            # D. Area Gelembung Percakapan WargaChat
            viewport:
                id "chat_viewport"
                xfill True
                ysize 980
                scrollbars "vertical"
                mousewheel True
                draggable True
                yinitial 1.0

                vbox:
                    xfill True
                    spacing 16
                    padding (24, 20)

                    for msg in chat_messages:
                        if msg["type"] == "system":
                            frame:
                                xalign 0.5
                                background "#D4EAF7"
                                padding (22, 10)
                                text msg["text"] size 24 color "#2C5282" text_align 0.5

                        elif msg["sender_id"] == "dika":
                            frame:
                                xalign 1.0
                                xmaximum 820
                                background "#DCF8C6"
                                padding (22, 14)
                                vbox:
                                    spacing 6
                                    text "Dika (Admin)" size 22 color "#075E54" bold True
                                    if msg["type"] == "sticker" and msg["sticker_key"] in KATALOG_STIKER:
                                        frame:
                                            background "#FEFCBF"
                                            padding (16, 12)
                                            text KATALOG_STIKER[msg["sticker_key"]]["art"] size 26 color "#744210" bold True
                                    else:
                                        text msg["text"] size 30 color "#1A202C"
                                    text "[msg['time']] ✓✓" size 20 color "#4A5568" xalign 1.0

                        else:
                            frame:
                                xalign 0.0
                                xmaximum 820
                                background "#FFFFFF"
                                padding (22, 14)
                                vbox:
                                    spacing 6
                                    text msg["sender_name"] size 24 color msg["color"] bold True
                                    if msg["type"] == "sticker" and msg["sticker_key"] in KATALOG_STIKER:
                                        frame:
                                            background "#FEFCBF"
                                            padding (16, 12)
                                            text KATALOG_STIKER[msg["sticker_key"]]["art"] size 26 color "#744210" bold True
                                    else:
                                        text msg["text"] size 30 color "#1A202C"
                                    text msg["time"] size 20 color "#718096" xalign 1.0


## -------------------------------------------------------------------------
## 2. PANEL STATUS (3 Indikator Utama + 4 Relasi Karakter)
## -------------------------------------------------------------------------
screen status_panel():
    tag menu
    modal True

    frame:
        xfill True
        yfill True
        background "#1A202CF2"
        padding (48, 64)

        vbox:
            xfill True
            spacing 26

            hbox:
                xfill True
                text "PANEL STATUS ADMIN RT 05" size 44 color "#FFFFFF" bold True
                textbutton "Tutup [X]":
                    xalign 1.0
                    action Return()
                    text_size 32
                    text_color "#FEB2B2"

            text "1. Tiga Indikator Utama (0–100)" size 34 color "#81E6D9" bold True

            vbox:
                spacing 14
                text "Ketenangan Grup: [ketenangan]/100 ([status_label_ketenangan(ketenangan)])" size 28 color "#FFFFFF"
                bar value ketenangan range 100 xfill True ysize 28

                text "Kepercayaan Warga: [kepercayaan]/100 ([status_label_kepercayaan(kepercayaan)])" size 28 color "#FFFFFF"
                bar value kepercayaan range 100 xfill True ysize 28

                text "Tekanan Admin (Dika): [tekanan]/100 ([status_label_tekanan(tekanan)])" size 28 color "#FEB2B2"
                bar value tekanan range 100 xfill True ysize 28

            null height 16
            text "2. Hubungan dengan Warga Inti (0–100)" size 34 color "#FBD38D" bold True

            vbox:
                spacing 14
                text "Pak RT Hendra: [relasi_rt]/100" size 28 color "#FFFFFF"
                bar value relasi_rt range 100 xfill True ysize 24

                text "Bu Siti Blok B: [relasi_siti]/100" size 28 color "#FFFFFF"
                bar value relasi_siti range 100 xfill True ysize 24

                text "Pak Budi Pagar Hitam: [relasi_budi]/100" size 28 color "#FFFFFF"
                bar value relasi_budi range 100 xfill True ysize 24

                text "Roni Satpam Ronda: [relasi_roni]/100" size 28 color "#FFFFFF"
                bar value relasi_roni range 100 xfill True ysize 24


## -------------------------------------------------------------------------
## 3. LAYAR ARSIP KEJADIAN & KOLEKSI STIKER RT
## -------------------------------------------------------------------------
screen archive_screen():
    tag menu
    modal True

    frame:
        xfill True
        yfill True
        background "#1A202CF5"
        padding (48, 64)

        vbox:
            xfill True
            spacing 20

            hbox:
                xfill True
                text "ARSIP KEJADIAN & STIKER RT 05" size 40 color "#FFFFFF" bold True
                textbutton "Tutup [X]":
                    xalign 1.0
                    action Return()
                    text_size 32
                    text_color "#FEB2B2"

            text "Arsip Kejadian Terkumpul: [len(arsip_kejadian)] / [len(KATALOG_ARSIP)]" size 30 color "#81E6D9"

            viewport:
                xfill True
                ysize 980
                scrollbars "vertical"
                mousewheel True
                draggable True

                vbox:
                    spacing 16
                    for aid, ainfo in KATALOG_ARSIP.items():
                        if aid in arsip_kejadian:
                            frame:
                                xfill True
                                background "#2D3748"
                                padding (24, 18)
                                vbox:
                                    spacing 6
                                    text "✓ [ainfo['title']] ([ainfo['day']])" size 30 color "#FBD38D" bold True
                                    text ainfo["desc"] size 26 color "#E2E8F0"
                        else:
                            frame:
                                xfill True
                                background "#171923"
                                padding (24, 18)
                                text "🔒 Arsip Belum Terbuka ([ainfo['day']])" size 26 color "#718096"

                    null height 20
                    text "Koleksi Stiker Bapak/Ibu RT: [len(koleksi_stiker)] / [len(KATALOG_STIKER)]" size 30 color "#F6E05E" bold True

                    for sid, sinfo in KATALOG_STIKER.items():
                        if sid in koleksi_stiker:
                            frame:
                                xfill True
                                background "#744210"
                                padding (20, 14)
                                vbox:
                                    text "★ [sinfo['title']] (Kiriman: [sinfo['sender']])" size 26 color "#FEFCBF" bold True
                                    text sinfo["art"] size 24 color "#FFFFFF"


## -------------------------------------------------------------------------
## 4. LAYAR RINGKASAN HARIAN (Evaluasi Akhir Hari)
## -------------------------------------------------------------------------
screen daily_summary_screen(day_num, headline, notes_list):
    modal True

    frame:
        xfill True
        yfill True
        background "#0F172AF5"
        padding (56, 80)

        vbox:
            xfill True
            yalign 0.5
            spacing 28

            text "EVALUASI MALAM — AKHIR HARI [day_num]" size 44 color "#81E6D9" bold True xalign 0.5
            text headline size 32 color "#FBD38D" xalign 0.5 text_align 0.5

            frame:
                xfill True
                background "#1E293B"
                padding (32, 28)
                vbox:
                    spacing 14
                    text "Kondisi Grup Saat Ini:" size 30 color "#FFFFFF" bold True
                    text "• Ketenangan Grup: [ketenangan]/100 ([status_label_ketenangan(ketenangan)])" size 28 color "#A7F3D0"
                    text "• Kepercayaan Warga: [kepercayaan]/100 ([status_label_kepercayaan(kepercayaan)])" size 28 color "#BFDBFE"
                    text "• Tekanan Admin: [tekanan]/100 ([status_label_tekanan(tekanan)])" size 28 color "#FECACA"

            frame:
                xfill True
                background "#1E293B"
                padding (32, 28)
                vbox:
                    spacing 12
                    text "Catatan Jejak Keputusan Dika:" size 30 color "#FDE68A" bold True
                    for item in notes_list:
                        text "— [item]" size 26 color "#E2E8F0"

            textbutton "Lanjutkan ke Hari Berikutnya →":
                xalign 0.5
                background "#128C7E"
                padding (40, 22)
                text_size 32
                text_color "#FFFFFF"
                action Return()
