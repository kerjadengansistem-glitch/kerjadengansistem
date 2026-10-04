/* kerjadengansistem — skrip halaman utama. Tanpa pustaka. */
(function () {
  "use strict";
  var WA = "628388259850";

  // Menu ponsel
  var tbl = document.querySelector(".tbl-menu");
  var menu = document.getElementById("menu-hp");
  if (tbl && menu) {
    var atur = function (buka) {
      menu.classList.toggle("terbuka", buka);
      tbl.setAttribute("aria-expanded", buka ? "true" : "false");
      tbl.setAttribute("aria-label", buka ? "Tutup menu" : "Buka menu");
    };
    tbl.addEventListener("click", function () {
      atur(tbl.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") atur(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") atur(false);
    });
  }

  // Pilihan demo: tombol "Coba demo dulu" membuka dua pilihan.
  // Tanpa skrip (atau peramban lama), tautannya tetap menuju halaman /demo.
  var dlg = document.getElementById("pilih-demo");
  if (dlg && typeof dlg.showModal === "function" && !document.body.classList.contains("hal-demo")) {
    document.addEventListener("click", function (e) {
      var pemicu = e.target.closest && e.target.closest("[data-pilih-demo]");
      if (pemicu && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
        e.preventDefault();
        if (!dlg.open) dlg.showModal();
        return;
      }
      if (!dlg.open) return;
      if (e.target === dlg || e.target.closest(".dialog-tutup") || e.target.closest(".pilih")) dlg.close();
    });
  }

  // Asal kunjungan dari tautan bio (utm_source), hanya huruf, angka, garis.
  var sumber = "";
  try {
    var u = new URLSearchParams(location.search).get("utm_source") || "";
    if (/^[a-z0-9_-]{1,20}$/i.test(u)) sumber = u.toLowerCase();
  } catch (e) {}

  var denganSumber = function (pesan) {
    return sumber ? pesan + " (dari " + sumber + ")" : pesan;
  };

  if (sumber) {
    document.querySelectorAll('a[data-ev="klik_wa"]').forEach(function (a) {
      try {
        var url = new URL(a.href);
        url.searchParams.set("text", denganSumber(url.searchParams.get("text") || ""));
        a.href = url.toString();
      } catch (e) {}
    });
  }

  // Kejadian untuk analitik. Belum ada alat analitik terpasang:
  // kejadian dikumpulkan di window.dataLayer supaya siap disambungkan (PRD 8.4).
  var catat = function (nama, asal) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: nama, asal: asal || "", sumber: sumber });
  };
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-ev]");
    if (!a) return;
    var asal = a.getAttribute("data-asal") || "";
    catat(asal === "tools" ? "klik_tools" : a.getAttribute("data-ev"), asal);
  });

  // Form penutup: tidak mengirim ke server. Isinya dibuka sebagai pesan WhatsApp.
  var borang = document.getElementById("borang");
  if (borang) {
    borang.addEventListener("submit", function (e) {
      e.preventDefault();
      var nama = borang.nama.value.trim();
      var cerita = borang.cerita.value.trim();
      if (!nama) { borang.nama.focus(); return; }
      if (!cerita) { borang.cerita.focus(); return; }
      var pesan = denganSumber("Halo, saya " + nama + " dari website (form).") + "\n\nKerjaan saya: " + cerita;
      catat("kirim_form", "penutup");
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(pesan), "_blank", "noopener");
    });
  }
})();
