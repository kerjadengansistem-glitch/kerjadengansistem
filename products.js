/**
 * ============================================
 *   DAFTAR PRODUK - EDIT DI SINI SAJA!
 * ============================================
 * 
 * Cara menambah produk baru:
 * 1. Copy salah satu contoh produk di bawah
 * 2. Paste di bawah produk terakhir (sebelum tanda ])
 * 3. Ganti isinya sesuai produk Anda
 * 4. Save file, refresh browser — selesai!
 * 
 * PENJELASAN SETIAP FIELD:
 * 
 *   nama        → Judul produk Anda
 *   kategori    → "berbayar" atau "gratis"
 *   tipe        → "E-Book", "Kursus Online", "Template", "Web App", "Article", "Lead Magnet", "Freebie" (bebas tulis apa saja)
 *   deskripsi   → Penjelasan singkat produk (1-2 kalimat)
 *   gambar      → Link gambar produk (paste URL gambar di sini, kosongkan "" jika tidak ada — akan tampil ikon default)
 *                  Contoh: "https://i.imgur.com/xxxxx.png" atau "images/produk1.jpg"
 *   harga       → Harga produk, contoh: "Rp 149.000" atau "GRATIS"
 *   hargaCoret  → Harga sebelum diskon (kosongkan "" jika tidak ada)
 *   tombol      → Teks di tombol, contoh: "Beli Sekarang", "Download", "Baca Article", "Coba Gratis"
 *   link        → URL tujuan saat tombol diklik, contoh: "https://linkproduk.com"
 *   badge       → Label kecil di pojok gambar, contoh: "BEST SELLER", "BARU", "GRATIS" (kosongkan "" jika tidak perlu)
 *   warna       → Pilih salah satu: "biru", "ungu", "hijau", "kuning", "merah", "cyan", "pink", "oranye"
 *   ikon        → Pilih salah satu: "buku", "video", "template", "download", "web", "artikel", "robot", "petir" (hanya tampil jika gambar kosong)
 */

const PRODUCTS = [

  // ─── PRODUK BERBAYAR ────────────────────────────

  {
    nama: "Sistem Automation PDF",
    kategori: "berbayar",
    tipe: "Web App",
    deskripsi: "Kontrol Jobdesk dengan satu klik",
    gambar: "https://res.cloudinary.com/dilamvetq/image/upload/v1775504554/copy_of_iv3x53tl4mzhhj9aacy1_dfb6b8.png",
    harga: "Rp 149.000",
    hargaCoret: "Rp 299.000",
    tombol: "Beli Sekarang",
    link: "https://www.panjiarsyaryadillah.web.id/#view-main",
    badge: "BEST SELLER",
    warna: "biru",
    ikon: "buku",
  },

  {
    nama: "Masterclass: ChatGPT untuk Bisnis",
    kategori: "berbayar",
    tipe: "Kursus Online",
    deskripsi: "12 modul video intensif. Kuasai prompt engineering, automasi workflow, dan integrasi API.",
    gambar: "",
    harga: "Rp 349.000",
    hargaCoret: "Rp 599.000",
    tombol: "Daftar Kursus",
    link: "#",
    badge: "POPULER",
    warna: "ungu",
    ikon: "video",
  },

  {
    nama: "Template Notion: Sistem Bisnis Otomatis",
    kategori: "berbayar",
    tipe: "Template",
    deskripsi: "Template Notion lengkap untuk mengelola bisnis secara sistematis. CRM, project management, dan automasi.",
    gambar: "",
    harga: "Rp 99.000",
    hargaCoret: "",
    tombol: "Beli Template",
    link: "#",
    badge: "",
    warna: "hijau",
    ikon: "template",
  },

  // ─── PRODUK GRATIS ──────────────────────────────

  {
    nama: "Checklist: 50 AI Tools Wajib 2026",
    kategori: "gratis",
    tipe: "Lead Magnet",
    deskripsi: "Daftar lengkap 50 tools AI terbaik yang wajib Anda ketahui untuk meningkatkan produktivitas.",
    gambar: "",
    harga: "GRATIS",
    hargaCoret: "",
    tombol: "Download",
    link: "#",
    badge: "GRATIS",
    warna: "hijau",
    ikon: "download",
  },

  {
    nama: "Mini E-Book: Prompt Engineering 101",
    kategori: "gratis",
    tipe: "Freebie",
    deskripsi: "Panduan dasar prompt engineering untuk pemula. Pelajari teknik menulis prompt yang efektif.",
    gambar: "",
    harga: "GRATIS",
    hargaCoret: "",
    tombol: "Download",
    link: "#",
    badge: "GRATIS",
    warna: "kuning",
    ikon: "petir",
  },

  {
    nama: "Template Zapier: 10 Automasi Populer",
    kategori: "gratis",
    tipe: "Template",
    deskripsi: "10 template Zapier siap pakai untuk mengotomasi tugas-tugas repetitif di bisnis Anda.",
    gambar: "",
    harga: "GRATIS",
    hargaCoret: "",
    tombol: "Download",
    link: "#",
    badge: "GRATIS",
    warna: "cyan",
    ikon: "robot",
  },

  // ─── TAMBAH PRODUK BARU DI BAWAH INI ───────────
  // Copy contoh di bawah, hapus tanda // di depannya, lalu edit isinya:
  //
  // {
  //   nama: "Judul Produk Anda",
  //   kategori: "berbayar",
  //   tipe: "Web App",
  //   deskripsi: "Deskripsi singkat produk Anda di sini.",
  //   gambar: "https://link-gambar-produk-anda.com/gambar.jpg",
  //   harga: "Rp 199.000",
  //   hargaCoret: "Rp 399.000",
  //   tombol: "Coba Sekarang",
  //   link: "https://linkproduk.com",
  //   badge: "BARU",
  //   warna: "biru",
  //   ikon: "web",
  // },

];
