# Sumber halaman

Halaman utama, Kebijakan Privasi, dan Syarat dirakit dari folder ini.

- Ubah teks di `_src/index.html`, `_src/kebijakan-privasi.html`, `_src/syarat.html`, `_src/kepala.html`, `_src/kaki.html`.
- Tautan sosmed dan nomor WhatsApp ada di satu tempat: `_src/build.py` (`TAUT`, `WA`).
- Lalu jalankan `python3 _src/build.py`. Hasilnya menimpa `index.html`, `kebijakan-privasi/index.html`, `syarat/index.html`.

Tampilan ada di `site.css`, skrip di `site.js`. Halaman lama (`belajar/`, `artikel/`) tetap memakai `styles.css`.
Ikon: Lucide (ISC). Huruf: Inter (SIL OFL 1.1), disimpan di `assets/fonts/`.
