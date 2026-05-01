/**
 * ============================================
 *   DAFTAR ARTIKEL EDUKASI - EDIT DI SINI!
 * ============================================
 * 
 * Cara menambah artikel baru:
 * 1. Copy salah satu contoh artikel di bawah
 * 2. Paste di bawah artikel terakhir (sebelum tanda ])
 * 3. Ganti isinya sesuai artikel Anda
 * 4. Save file, refresh browser — selesai!
 * 
 * PENJELASAN SETIAP FIELD:
 * 
 *   judul       → Judul artikel
 *   kategori    → Label kategori, contoh: "AI Tools", "Automation", "Bisnis", "Tutorial"
 *   waktuBaca   → Estimasi waktu baca, contoh: "5 min baca"
 *   deskripsi   → Ringkasan singkat artikel (1-2 kalimat)
 *   gambar      → Link gambar artikel (paste URL gambar di sini, kosongkan "" jika tidak ada — akan tampil ikon default)
 *                  Contoh: "https://i.imgur.com/xxxxx.png" atau "images/artikel1.jpg"
 *   link        → URL ke artikel lengkap (bisa link blog, Medium, dll)
 *   warna       → Pilih: "biru", "ungu", "hijau", "kuning", "merah", "cyan", "pink", "oranye"
 *   ikon        → Pilih: "komputer", "kode", "grafik", "robot", "petir", "buku", "video", "web" (hanya tampil jika gambar kosong)
 */

const ARTICLES = [

  {
    judul: "5 AI Tools yang Wajib Anda Coba di 2026",
    kategori: "AI Tools",
    waktuBaca: "5 min baca",
    deskripsi: "Temukan tools AI terbaru yang bisa mengubah cara Anda bekerja dan meningkatkan produktivitas.",
    gambar: "",
    link: "#",
    warna: "biru",
    ikon: "komputer",
  },

  {
    judul: "Cara Membuat Chatbot WhatsApp dengan AI",
    kategori: "Automation",
    waktuBaca: "8 min baca",
    deskripsi: "Tutorial step-by-step membuat chatbot WhatsApp yang cerdas menggunakan AI dan automasi.",
    gambar: "",
    link: "#",
    warna: "ungu",
    ikon: "kode",
  },

  {
    judul: "Menghemat 20 Jam/Minggu dengan Automasi",
    kategori: "Bisnis",
    waktuBaca: "6 min baca",
    deskripsi: "Studi kasus nyata bagaimana automasi bisa menghemat waktu dan meningkatkan revenue bisnis.",
    gambar: "",
    link: "#",
    warna: "hijau",
    ikon: "grafik",
  },

  // ─── TAMBAH ARTIKEL BARU DI BAWAH INI ──────────
  // Copy contoh di bawah, hapus tanda // di depannya, lalu edit isinya:
  //
  // {
  //   judul: "Judul Artikel Anda",
  //   kategori: "Tutorial",
  //   waktuBaca: "7 min baca",
  //   deskripsi: "Deskripsi singkat artikel Anda di sini.",
  //   gambar: "https://link-gambar-artikel-anda.com/gambar.jpg",
  //   link: "https://linkartikel.com",
  //   warna: "biru",
  //   ikon: "komputer",
  // },

];
