## =========================================================================
## ADMIN DADAKAN: Grup RT — options.rpy
## Konfigurasi Utama Proyek Ren'Py (Portrait 1080x1920 untuk Android)
## =========================================================================

define config.name = _("ADMIN DADAKAN: Grup RT")
define gui.show_name = True
define config.version = "1.0.0"

define gui.about = _p("""
ADMIN DADAKAN: Grup RT
Satu grup RT, banyak warga yang merasa paling benar, dan satu admin baru yang cuma ingin hidup tenang.

Genre: Dark Comedy Ringan, Casual Simulation, Narrative Choice
Platform: Android (Portrait 9:16)
""")

define build.name = "AdminDadakanGrupRT"

## Konfigurasi Audio
define config.has_sound = True
define config.has_music = True
define config.has_voice = False

## Transisi
define config.enter_transition = dissolve
define config.exit_transition = dissolve
define config.intra_transition = dissolve
define config.after_load_transition = None
define config.end_game_transition = fade

## Jendela Dialog
define config.window = "auto"
define config.window_show_transition = Dissolve(.2)
define config.window_hide_transition = Dissolve(.2)

## Kecepatan Teks & Auto-Forward Default
default preferences.text_cps = 45
default preferences.afm_time = 15

## Direktori Penyimpanan
define config.save_directory = "AdminDadakanGrupRT-1795182800"
define config.window_icon = "images/char_dika.jpg"

## Konfigurasi Build Android & Distribusi
init python:
    build.classify('**~', None)
    build.classify('**.bak', None)
    build.classify('**/.**', None)
    build.classify('**/#**', None)
    build.classify('**/thumbs.db', None)
    build.classify('game/**.rpy', 'all')
    build.classify('game/**.jpg', 'all')
    build.classify('game/**.png', 'all')
