# Sumber halaman

Halaman utama, Kebijakan Privasi, dan Syarat dirakit dari folder ini.

- Ubah teks di `_src/index.html`, `_src/kebijakan-privasi.html`, `_src/syarat.html`, `_src/kepala.html`, `_src/kaki.html`.
- Tautan sosmed dan nomor WhatsApp ada di satu tempat: `_src/build.py` (`TAUT`, `WA`).
- Lalu jalankan `python3 _src/build.py`. Hasilnya menimpa `index.html`, `kebijakan-privasi/index.html`, `syarat/index.html`.

- Pilihan demo (dialog di semua halaman dan halaman `/demo`) ada di `_src/pilihan-demo.html`; alamat demo di `TAUT` (`demo_rapikan`, `demo_rab`).
- Demo Rapikan (`demo/rapikan/index.html`) berdiri sendiri: satu berkas, tidak dirakit. ExcelJS 4.4.0 (MIT) disimpan di `assets/vendor/`.

Tampilan ada di `site.css`, skrip di `site.js`. Halaman lama (`belajar/`, `artikel/`) tetap memakai `styles.css`.
Ikon: Lucide (ISC). Huruf: Inter (SIL OFL 1.1), disimpan di `assets/fonts/`.
