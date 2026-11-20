## =========================================================================
## ADMIN DADAKAN: Grup RT — gui.rpy
## Konfigurasi Resolusi Portrait (1080x1920) & Palet Warna WargaChat
## =========================================================================

init offset = -2

init python:
    # Orientasi Portrait 9:16 (1080x1920) untuk layar ponsel Android
    gui.init(1080, 1920)

## Palet Warna Utama ("WargaChat" Hijau Hangat & Krem Terang)
define gui.accent_color = '#075E54'
define gui.idle_color = '#4A5568'
define gui.idle_small_color = '#718096'
define gui.hover_color = '#128C7E'
define gui.selected_color = '#075E54'
define gui.insensitive_color = '#A0AEC0'

define gui.muted_color = '#CBD5E0'
define gui.hover_muted_color = '#718096'

define gui.text_color = '#1A202C'
define gui.interface_text_color = '#1A202C'

## Ukuran Font ramah layar ponsel (Aksesibilitas Bab 11.4 PRD)
define gui.text_size = 34
define gui.name_text_size = 38
define gui.interface_text_size = 32
define gui.label_text_size = 40
define gui.notify_text_size = 28
define gui.title_text_size = 64

## Kotak Dialog Adegan Lingkungan (Visual Novel Cutscene Mode)
define gui.textbox_height = 420
define gui.textbox_yalign = 1.0

define gui.name_xpos = 60
define gui.name_ypos = 20
define gui.namebox_width = None
define gui.namebox_height = None
define gui.namebox_borders = Borders(15, 10, 15, 10)

define gui.dialogue_xpos = 60
define gui.dialogue_ypos = 100
define gui.dialogue_width = 960

## Tombol Pilihan (Menu Choice)
define gui.choice_button_width = 980
define gui.choice_button_height = None
define gui.choice_button_borders = Borders(30, 22, 30, 22)
define gui.choice_button_text_size = 32
define gui.choice_button_text_idle_color = '#1A202C'
define gui.choice_button_text_hover_color = '#FFFFFF'
