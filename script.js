// ========== ICON & COLOR MAPS ==========
const ICON_MAP = {
  buku: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>',
  video: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>',
  template: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>',
  download: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
  web: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>',
  artikel: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>',
  robot: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>',
  petir: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>',
  komputer: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  kode: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
  grafik: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
};
const COLOR_MAP = {
  biru:   { bg: 'from-sky-500/15 to-indigo-500/15',   text: 'text-sky-400',     tagBg: 'bg-sky-500/8',     badgeBg: 'bg-sky-500/80' },
  ungu:   { bg: 'from-violet-500/15 to-pink-500/15',   text: 'text-violet-400',  tagBg: 'bg-violet-500/8',  badgeBg: 'bg-violet-500/80' },
  hijau:  { bg: 'from-emerald-500/15 to-teal-500/15',  text: 'text-emerald-400', tagBg: 'bg-emerald-500/8', badgeBg: 'bg-emerald-500/80' },
  kuning: { bg: 'from-amber-500/15 to-orange-500/15',  text: 'text-amber-400',   tagBg: 'bg-amber-500/8',   badgeBg: 'bg-amber-500/80' },
  merah:  { bg: 'from-red-500/15 to-rose-500/15',      text: 'text-red-400',     tagBg: 'bg-red-500/8',     badgeBg: 'bg-red-500/80' },
  cyan:   { bg: 'from-cyan-500/15 to-blue-500/15',     text: 'text-cyan-400',    tagBg: 'bg-cyan-500/8',    badgeBg: 'bg-cyan-500/80' },
  pink:   { bg: 'from-pink-500/15 to-rose-500/15',     text: 'text-pink-400',    tagBg: 'bg-pink-500/8',    badgeBg: 'bg-pink-500/80' },
  oranye: { bg: 'from-orange-500/15 to-amber-500/15',  text: 'text-orange-400',  tagBg: 'bg-orange-500/8',  badgeBg: 'bg-orange-500/80' },
};
function getIcon(n) { return ICON_MAP[n] || ICON_MAP.petir; }
function getColor(n) { return COLOR_MAP[n] || COLOR_MAP.biru; }

// ========== RENDER PRODUCTS ==========
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid || typeof PRODUCTS === 'undefined') return;
  grid.innerHTML = '';

  PRODUCTS.forEach((p, i) => {
    const c = getColor(p.warna);
    const free = p.kategori === 'gratis';
    const card = document.createElement('div');
    card.className = 'product-card scroll-reveal';
    card.dataset.category = p.kategori;
    card.style.setProperty('--delay', (i % 3) * 0.08 + 's');

    card.innerHTML = `
      <div class="relative overflow-hidden">
        ${p.gambar
          ? `<div class="aspect-[16/10] overflow-hidden"><img src="${p.gambar}" alt="${p.nama}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" /></div>`
          : `<div class="aspect-[16/10] bg-gradient-to-br ${c.bg} flex items-center justify-center"><svg class="w-14 h-14 ${c.text} opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">${getIcon(p.ikon)}</svg></div>`
        }
        ${p.badge ? `<span class="absolute top-3 right-3 px-2.5 py-1 rounded-md ${free ? 'bg-emerald-500/80' : c.badgeBg} text-white text-[10px] font-bold tracking-wide backdrop-blur-sm">${p.badge}</span>` : ''}
      </div>
      <div class="p-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-[11px] font-semibold ${c.text} ${c.tagBg} px-2 py-0.5 rounded-md">${p.tipe}</span>
        </div>
        <h3 class="font-display font-bold text-white text-[15px] leading-snug mb-2">${p.nama}</h3>
        <p class="text-gray-500 text-[13px] leading-relaxed mb-4 line-clamp-2">${p.deskripsi}</p>
        <div class="flex items-center justify-between pt-3 border-t border-white/[0.04]">
          <div class="flex items-baseline gap-1.5">
            ${p.hargaCoret ? `<span class="text-gray-600 text-[12px] line-through">${p.hargaCoret}</span>` : ''}
            <span class="${free ? 'text-emerald-400' : 'text-white'} font-bold text-[15px]">${p.harga}</span>
          </div>
          <a href="${p.link}" target="_blank" rel="noopener" class="btn-cta-small ${free ? 'btn-cta-free' : ''}">${p.tombol}</a>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  initScrollReveal(grid);
  updateProductCards();
}

// ========== RENDER ARTICLES ==========
function renderArticles() {
  const grid = document.getElementById('articles-grid');
  if (!grid || typeof ARTICLES === 'undefined') return;
  grid.innerHTML = '';

  ARTICLES.forEach((a, i) => {
    const c = getColor(a.warna);
    const card = document.createElement('article');
    card.className = 'blog-card scroll-reveal';
    card.style.setProperty('--delay', (i % 3) * 0.08 + 's');

    card.innerHTML = `
      <a href="${a.link}" target="_blank" rel="noopener" class="block">
        ${a.gambar
          ? `<div class="aspect-[16/10] rounded-xl mb-3 overflow-hidden"><img src="${a.gambar}" alt="${a.judul}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" /></div>`
          : `<div class="aspect-[16/10] bg-gradient-to-br ${c.bg} rounded-xl mb-3 flex items-center justify-center"><svg class="w-10 h-10 ${c.text} opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">${getIcon(a.ikon)}</svg></div>`
        }
        <div class="flex items-center gap-2 mb-2">
          <span class="text-[11px] font-semibold ${c.text} ${c.tagBg} px-2 py-0.5 rounded-md">${a.kategori}</span>
          <span class="text-[11px] text-gray-600">${a.waktuBaca}</span>
        </div>
        <h4 class="font-display font-bold text-white text-[14px] leading-snug mb-1.5">${a.judul}</h4>
        <p class="text-gray-500 text-[13px] line-clamp-2">${a.deskripsi}</p>
      </a>`;
    grid.appendChild(card);
  });

  initScrollReveal(grid);
}

// ========== SCROLL REVEAL ==========
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function initScrollReveal(container) {
  const el = container || document;
  el.querySelectorAll('.scroll-reveal').forEach(e => revealObserver.observe(e));
}
initScrollReveal();

// ========== NAVBAR ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ========== MOBILE MENU ==========
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('hidden');
  mobileBtn.innerHTML = !open
    ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
    : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
});
document.querySelectorAll('.mobile-nav-link').forEach(l => {
  l.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileBtn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
  });
});

// ========== TAB FILTER WITH ANIMATED INDICATOR ==========
let productCards = [];
function updateProductCards() { productCards = document.querySelectorAll('.product-card'); }

const tabContainer = document.querySelector('.tab-container');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabIndicator = document.querySelector('.tab-indicator');

function moveIndicator(btn) {
  if (!tabIndicator || !btn) return;
  tabIndicator.style.left = btn.offsetLeft + 'px';
  tabIndicator.style.width = btn.offsetWidth + 'px';
}

// Init indicator on first active
const firstActive = document.querySelector('.tab-btn.active');
if (firstActive) requestAnimationFrame(() => moveIndicator(firstActive));

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    moveIndicator(btn);

    const tab = btn.dataset.tab;
    productCards.forEach(card => {
      if (tab === 'semua' || card.dataset.category === tab) {
        card.classList.remove('hidden-card');
        card.style.opacity = '0';
        card.style.transform = 'translateY(16px)';
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 0.4s, transform 0.4s';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.classList.add('hidden-card');
      }
    });
  });
});

// ========== COUNTER ANIMATION ==========
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const to = parseInt(el.dataset.count);
    if (!to) return;
    let cur = 0;
    const inc = to / 50;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= to) { cur = to; clearInterval(timer); }
      el.textContent = Math.floor(cur).toLocaleString('id-ID') + '+';
    }, 30);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

// ========== NEWSLETTER ==========
const nlForm = document.getElementById('newsletter-form');
nlForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = nlForm.querySelector('button');
  const orig = btn.innerHTML;
  btn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Berhasil!';
  btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
  nlForm.querySelector('input').value = '';
  setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 3000);
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const t = document.querySelector(href);
    if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  });
});

// ========== INIT ==========
renderProducts();
renderArticles();
