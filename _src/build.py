#!/usr/bin/env python3
"""Rakit halaman dari _src/*.html. Jalankan: python3 _src/build.py
Mengisi {{ikon:nama}}, {{wa:bagian|pesan}}, dan {{bagian:berkas}}."""
import re, urllib.parse
from pathlib import Path

SRC = Path(__file__).parent
ROOT = SRC.parent
WA = "628388259850"

# Satu tempat untuk tautan sosmed. Ganti di sini kalau handle berubah.
TAUT = {
    "tiktok": "https://www.tiktok.com/@kerja.dengan.sist",
    "instagram": "https://www.instagram.com/kerjadengansistem/",
    "facebook": "https://www.facebook.com/profile.php?id=61588153064812",
    "youtube": "https://www.youtube.com/@KerjaDengansistem",
    "threads": "https://www.threads.com/@kerjadengansistem",
    "demo": "https://demo.kerjadengansistem.web.id",
}
IKON = SRC / "ikon"

def ikon(m):
    svg = (IKON / f"{m.group(1)}.svg").read_text()
    svg = re.sub(r"<!--.*?-->", "", svg, flags=re.S)
    svg = re.sub(r'\s(width|height|class)="[^"]*"', "", svg)
    svg = svg.replace("<svg", '<svg class="ikon" aria-hidden="true" focusable="false"', 1)
    return re.sub(r"\s*\n\s*", "", svg.strip())

def wa(m):
    bagian, pesan = m.group(1), m.group(2)
    url = f"https://wa.me/{WA}?text={urllib.parse.quote(pesan)}"
    return f'href="{url}" data-ev="klik_wa" data-asal="{bagian}" target="_blank" rel="noopener"'

def rakit(nama, keluar):
    s = (SRC / nama).read_text()
    s = re.sub(r"\{\{bagian:([\w.-]+)\}\}", lambda m: (SRC / m.group(1)).read_text(), s)
    s = re.sub(r"\{\{ikon:([\w-]+)\}\}", ikon, s)
    s = re.sub(r"\{\{wa:([\w-]+)\|([^}]+)\}\}", wa, s)
    s = re.sub(r"\{\{taut:(\w+)\}\}", lambda m: TAUT[m.group(1)], s)
    sisa = re.findall(r"\{\{[^}]*\}\}", s)
    assert not sisa, sisa
    out = ROOT / keluar
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(s)
    print("ok", keluar, len(s))

rakit("index.html", "index.html")
rakit("kebijakan-privasi.html", "kebijakan-privasi/index.html")
rakit("syarat.html", "syarat/index.html")
