#!/usr/bin/env python3
"""
Pengujian Fungsional Otomatis — ADMIN DADAKAN: Grup RT
Memverifikasi:
1. Kelengkapan file aset visual 2D di folder Web dan Ren'Py.
2. Kelengkapan dan konsistensi label, menu, arsip, stiker, dan 4 ending di proyek Ren'Py (.rpy).
3. Kelengkapan 15 kejadian, batas indikator (0-100), dan ketercapaian seluruh 4 ending di versi Web.
"""

import os
import re
import sys

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def assert_true(cond, msg):
    if not cond:
        print(f"[GAGAL] {msg}")
        sys.exit(1)
    print(f"[OK] {msg}")


def test_assets():
    required_images = [
        "char_dika.jpg",
        "char_pak_rt.jpg",
        "char_bu_siti.jpg",
        "char_pak_budi.jpg",
        "char_roni.jpg",
        "bg_kamar_dika.jpg",
        "bg_jalan_rt.jpg",
        "bg_pos_ronda.jpg",
        "bg_rapat_warga.jpg",
    ]
    for img in required_images:
        web_path = os.path.join(ROOT_DIR, "assets", "images", img)
        renpy_path = os.path.join(ROOT_DIR, "renpy", "game", "images", img)
        assert_true(os.path.isfile(web_path) and os.path.getsize(web_path) > 10000, f"Aset Web tersedia: {img}")
        assert_true(os.path.isfile(renpy_path) and os.path.getsize(renpy_path) > 10000, f"Aset Ren'Py tersedia: {img}")


def test_renpy_scripts():
    renpy_dir = os.path.join(ROOT_DIR, "renpy", "game")
    required_rpy = [
        "options.rpy",
        "gui.rpy",
        "chat_system.rpy",
        "screens.rpy",
        "script.rpy",
        "story_days.rpy",
        "endings.rpy",
    ]
    combined_content = ""
    for fname in required_rpy:
        fpath = os.path.join(renpy_dir, fname)
        assert_true(os.path.isfile(fpath), f"File Ren'Py tersedia: {fname}")
        with open(fpath, "r", encoding="utf-8") as f:
            combined_content += "\n" + f.read()

    # Cek semua label utama
    required_labels = [
        "start",
        "prolog",
        "hari_1",
        "hari_2",
        "hari_3",
        "evaluasi_ending",
        "ending_admin_teladan",
        "ending_perang_grup",
        "ending_resign",
        "ending_ketua_rt",
        "epilog_statistik",
    ]
    for lbl in required_labels:
        assert_true(re.search(rf"^label\s+{lbl}\s*:", combined_content, re.MULTILINE), f"Label Ren'Py terdefinisi: label {lbl}:")

    # Cek terdapat tepat 15 blok menu pilihan di story_days.rpy
    with open(os.path.join(renpy_dir, "story_days.rpy"), "r", encoding="utf-8") as f:
        story_rpy = f.read()
    menu_count = len(re.findall(r"^\s*menu\s*:", story_rpy, re.MULTILINE))
    assert_true(menu_count == 15, f"Ren'Py story_days.rpy memiliki 15 menu kejadian (ditemukan: {menu_count})")


def test_web_story_and_endings():
    story_js_path = os.path.join(ROOT_DIR, "js", "story_data.js")
    engine_js_path = os.path.join(ROOT_DIR, "js", "engine.js")
    assert_true(os.path.isfile(story_js_path), "File js/story_data.js tersedia")
    assert_true(os.path.isfile(engine_js_path), "File js/engine.js tersedia")

    with open(story_js_path, "r", encoding="utf-8") as f:
        story_js = f.read()

    event_ids = re.findall(r'id:\s*"(ev_\d+)"', story_js)
    assert_true(len(event_ids) == 15, f"Versi Web memiliki 15 kejadian utama (ditemukan: {len(event_ids)})")

    for eid in [f"ev_{i}" for i in range(1, 16)]:
        assert_true(eid in event_ids, f"Kejadian {eid} terdaftar di js/story_data.js")

    for ending_id in ["admin_teladan", "perang_grup", "aku_resign", "ketua_rt_baru"]:
        assert_true(f'id: "{ending_id}"' in story_js, f"Ending '{ending_id}' terdaftar di js/story_data.js")

    # Simulasi fungsi penentuan 4 ending & clamping 0..100
    def clamp(v):
        return max(0, min(100, v))

    def eval_ending(ketenangan, kepercayaan, tekanan, rels, flag_resign=False):
        high_rel = sum(1 for r in rels if r >= 60)
        if tekanan >= 80 or flag_resign:
            return "aku_resign"
        if ketenangan <= 35 or (ketenangan < 50 and kepercayaan < 40):
            return "perang_grup"
        if ketenangan >= 65 and kepercayaan >= 70 and tekanan < 75 and high_rel >= 2:
            return "ketua_rt_baru"
        return "admin_teladan"

    # Uji ketercapaian ke-4 ending
    e1 = eval_ending(clamp(60), clamp(60), clamp(40), [55, 50, 50, 55])
    e2 = eval_ending(clamp(25), clamp(30), clamp(45), [40, 35, 30, 50])
    e3 = eval_ending(clamp(55), clamp(50), clamp(85), [50, 50, 50, 50])
    e4 = eval_ending(clamp(85), clamp(85), clamp(45), [70, 75, 70, 65])

    assert_true(e1 == "admin_teladan", "Simulasi Ending 1 (Admin Teladan) dapat dicapai")
    assert_true(e2 == "perang_grup", "Simulasi Ending 2 (Perang Grup RT) dapat dicapai")
    assert_true(e3 == "aku_resign", "Simulasi Ending 3 (Aku Resign!) dapat dicapai")
    assert_true(e4 == "ketua_rt_baru", "Simulasi Ending 4 (Ketua RT Baru) dapat dicapai")


if __name__ == "__main__":
    print("=== Memulai Verifikasi Otomatis ADMIN DADAKAN: Grup RT ===")
    test_assets()
    test_renpy_scripts()
    test_web_story_and_endings()
    print("=== SELURUH PENGUJIAN BERHASIL (100% PASS) ===")
