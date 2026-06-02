/* ══════════════════════════════════════
   MEDINE VOYAGES — MAIN JS
══════════════════════════════════════ */
'use strict';

// ── LANGUAGE SYSTEM ──
const translations = {
  ar: {
    "nav.home":"الرئيسية","nav.flights":"الرحلات","nav.hotels":"الفنادق",
    "nav.packages":"الباقات","nav.visa":"التأشيرة","nav.about":"من نحن","nav.contact":"تواصل معنا",
    "nav.login":"تسجيل الدخول","nav.book":"احجز الآن",
    "topbar.open":"مفتوح 7/7 · 8:00–22:00",
    "hero.tag":"وكالة سفر معتمدة • منذ 2015",
    "hero.title":"سافر مع <span>أسفار المدينة</span>",
    "hero.sub":"رحلات مميزة، أسعار تنافسية، وخدمة لا مثيل لها. دعنا نجعل حلمك حقيقة.",
    "hero.btn1":"ابحث عن رحلتك","hero.btn2":"استشر خبيرنا",
    "search.flights":"الطيران","search.hotels":"الفنادق","search.packages":"الباقات","search.visa":"التأشيرة",
    "search.from":"من أين؟","search.to":"إلى أين؟","search.depart":"المغادرة","search.return":"العودة",
    "search.travelers":"المسافرون","search.btn":"بحث الآن",
    "search.checkin":"الوصول","search.checkout":"المغادرة","search.rooms":"الغرف",
    "search.destination":"الوجهة","search.duration":"المدة",
    "section.services":"خدماتنا","section.services.title":"كل ما تحتاجه في مكان واحد",
    "section.destinations":"الوجهات","section.destinations.title":"أشهر الوجهات السياحية",
    "section.packages":"الباقات","section.packages.title":"أفضل باقاتنا السياحية",
    "section.visa":"التأشيرات","section.visa.title":"خدمة التأشيرات السريعة",
    "section.ai":"مساعد الذكاء الاصطناعي","section.ai.title":"خطط رحلتك مع الذكاء الاصطناعي",
    "section.reviews":"آراء العملاء","section.reviews.title":"ماذا يقول عملاؤنا",
    "section.blog":"المدونة","section.blog.title":"آخر المقالات السياحية",
    "footer.rights":"جميع الحقوق محفوظة","footer.tagline":"وكالة سفر متخصصة في المغرب",
    "ai.placeholder":"مثال: عندي 7000 درهم، أريد السفر 5 أيام...",
    "ai.greeting":"مرحباً! أنا مساعدك الذكي في التخطيط للسفر. أخبرني بميزانيتك ووجهتك وسأقترح لك أفضل الخيارات! ✈️",
    "ai.send":"إرسال",
    "btn.book":"احجز الآن","btn.details":"التفاصيل","btn.more":"المزيد","btn.apply":"تقدم للتأشيرة",
    "label.from":"ابتداءً من","label.perPerson":"/ للشخص","label.night":"/ ليلة",
    "stat.1.num":"15K+","stat.1.lbl":"عميل سعيد","stat.2.num":"98%","stat.2.lbl":"رضا العملاء",
    "stat.3.num":"500+","stat.3.lbl":"باقة سياحية","stat.4.num":"50+","stat.4.lbl":"دولة حول العالم",
    "stat.5.num":"10+","stat.5.lbl":"سنوات خبرة",
  },
  fr: {
    "nav.home":"Accueil","nav.flights":"Vols","nav.hotels":"Hôtels",
    "nav.packages":"Forfaits","nav.visa":"Visa","nav.about":"À propos","nav.contact":"Contact",
    "nav.login":"Connexion","nav.book":"Réserver",
    "topbar.open":"Ouvert 7j/7 · 8h–22h",
    "hero.tag":"Agence de voyage certifiée • Depuis 2015",
    "hero.title":"Voyagez avec <span>Medine Voyages</span>",
    "hero.sub":"Voyages exceptionnels, prix compétitifs et service inégalé. Laissez-nous réaliser votre rêve.",
    "hero.btn1":"Rechercher un vol","hero.btn2":"Conseiller expert",
    "search.flights":"Vols","search.hotels":"Hôtels","search.packages":"Forfaits","search.visa":"Visa",
    "search.from":"Départ","search.to":"Destination","search.depart":"Aller","search.return":"Retour",
    "search.travelers":"Voyageurs","search.btn":"Rechercher",
    "search.checkin":"Arrivée","search.checkout":"Départ","search.rooms":"Chambres",
    "search.destination":"Destination","search.duration":"Durée",
    "section.services":"Nos services","section.services.title":"Tout ce dont vous avez besoin",
    "section.destinations":"Destinations","section.destinations.title":"Destinations populaires",
    "section.packages":"Forfaits","section.packages.title":"Nos meilleures offres",
    "section.visa":"Visas","section.visa.title":"Service visa rapide",
    "section.ai":"Assistant IA","section.ai.title":"Planifiez avec l'IA",
    "section.reviews":"Avis clients","section.reviews.title":"Ce que disent nos clients",
    "section.blog":"Blog","section.blog.title":"Derniers articles",
    "footer.rights":"Tous droits réservés","footer.tagline":"Agence de voyage spécialisée au Maroc",
    "ai.placeholder":"Ex: J'ai 700€ et je veux voyager 5 jours...",
    "ai.greeting":"Bonjour ! Je suis votre assistant IA pour planifier vos voyages. Dites-moi votre budget et destination ! ✈️",
    "ai.send":"Envoyer",
    "btn.book":"Réserver","btn.details":"Détails","btn.more":"Plus","btn.apply":"Demander un visa",
    "label.from":"À partir de","label.perPerson":"/ pers.","label.night":"/ nuit",
    "stat.1.num":"15K+","stat.1.lbl":"Clients satisfaits","stat.2.num":"98%","stat.2.lbl":"Satisfaction",
    "stat.3.num":"500+","stat.3.lbl":"Forfaits","stat.4.num":"50+","stat.4.lbl":"Pays",
    "stat.5.num":"10+","stat.5.lbl":"Ans d'expérience",
  },
  en: {
    "nav.home":"Home","nav.flights":"Flights","nav.hotels":"Hotels",
    "nav.packages":"Packages","nav.visa":"Visa","nav.about":"About","nav.contact":"Contact",
    "nav.login":"Login","nav.book":"Book Now",
    "topbar.open":"Open 7/7 · 8:00–22:00",
    "hero.tag":"Certified travel agency • Since 2015",
    "hero.title":"Travel with <span>Medine Voyages</span>",
    "hero.sub":"Premium trips, competitive prices and unmatched service. Let us make your dream a reality.",
    "hero.btn1":"Search flights","hero.btn2":"Talk to an expert",
    "search.flights":"Flights","search.hotels":"Hotels","search.packages":"Packages","search.visa":"Visa",
    "search.from":"From","search.to":"To","search.depart":"Depart","search.return":"Return",
    "search.travelers":"Travelers","search.btn":"Search",
    "search.checkin":"Check-in","search.checkout":"Check-out","search.rooms":"Rooms",
    "search.destination":"Destination","search.duration":"Duration",
    "section.services":"Our Services","section.services.title":"Everything you need in one place",
    "section.destinations":"Destinations","section.destinations.title":"Top Travel Destinations",
    "section.packages":"Packages","section.packages.title":"Best Travel Packages",
    "section.visa":"Visa","section.visa.title":"Fast Visa Service",
    "section.ai":"AI Assistant","section.ai.title":"Plan your trip with AI",
    "section.reviews":"Reviews","section.reviews.title":"What our clients say",
    "section.blog":"Blog","section.blog.title":"Latest travel articles",
    "footer.rights":"All rights reserved","footer.tagline":"Specialized travel agency in Morocco",
    "ai.placeholder":"E.g: I have $700 and want to travel for 5 days...",
    "ai.greeting":"Hello! I'm your AI travel planning assistant. Tell me your budget and destination! ✈️",
    "ai.send":"Send",
    "btn.book":"Book Now","btn.details":"Details","btn.more":"More","btn.apply":"Apply for Visa",
    "label.from":"From","label.perPerson":"/ person","label.night":"/ night",
    "stat.1.num":"15K+","stat.1.lbl":"Happy Clients","stat.2.num":"98%","stat.2.lbl":"Satisfaction",
    "stat.3.num":"500+","stat.3.lbl":"Packages","stat.4.num":"50+","stat.4.lbl":"Countries",
    "stat.5.num":"10+","stat.5.lbl":"Years Experience",
  }
};

let currentLang = localStorage.getItem('mv-lang') || 'ar';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('mv-lang', lang);
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.className = document.body.className.replace(/lang-\w+/,'') + ` lang-${lang}`;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const t = translations[lang]?.[key];
    if (!t) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t;
    else el.innerHTML = t;
  });
}

// ── HERO SLIDER ──
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  let current = 0, timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function start() { timer = setInterval(() => goTo(current + 1), 5000); }
  function stop()  { clearInterval(timer); }

  dots.forEach((d, i) => d.addEventListener('click', () => { stop(); goTo(i); start(); }));
  start();
}

// ── NAVBAR ──
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
  });

  hamburger?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger?.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (navLinks?.classList.contains('open') &&
        !navLinks.contains(e.target) && !hamburger?.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger?.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

// ── SEARCH TABS ──
function initSearchTabs() {
  document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.search-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('panel-' + tab.dataset.tab)?.classList.add('active');
    });
  });
}

// ── COUNTER ANIMATION ──
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const dur    = 2000;
    const steps  = 60;
    const inc    = target / steps;
    let cur      = 0;
    const t      = setInterval(() => {
      cur = Math.min(cur + inc, target);
      el.textContent = prefix + (Number.isInteger(target) ? Math.floor(cur) : cur.toFixed(1)) + suffix;
      if (cur >= target) clearInterval(t);
    }, dur / steps);
  });
}

// ── INTERSECTION OBSERVER ──
function initObserver() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        if (e.target.classList.contains('stats-stripe')) animateCounters();
      }
    });
  }, { threshold: .2 });

  document.querySelectorAll('.fade-up, .stats-stripe').forEach(el => io.observe(el));
}

// ── AI ASSISTANT ──
const aiResponses = {
  ar: {
    budget: (budget, days) => `بناءً على ميزانيتك ${budget} لـ ${days} أيام، أقترح:\n\n✈️ **إسطنبول** — الأنسب!\n• الطيران: ${Math.round(budget*0.35)} درهم\n• الفندق: ${Math.round(budget*0.30)} درهم (${days} ليالي)\n• المعيشة: ${Math.round(budget*0.25)} درهم\n• الجولات: ${Math.round(budget*0.10)} درهم\n\nأو يمكنني اقتراح دبي، باريس، أو القاهرة 🌍`,
    greeting: "مرحباً! 👋 كيف يمكنني مساعدتك في التخطيط لرحلتك؟",
    default: "شكراً لسؤالك! يمكنني مساعدتك في:\n• البحث عن رحلات طيران\n• حجز الفنادق\n• باقات عمرة ورمضان\n• التأشيرات\n\nما الذي تحتاجه تحديداً؟ 😊"
  },
  fr: {
    budget: (budget, days) => `Avec votre budget de ${budget} pour ${days} jours, je suggère:\n\n✈️ **Istanbul** — Le meilleur choix!\n• Vol: ${Math.round(budget*0.35)}€\n• Hôtel: ${Math.round(budget*0.30)}€ (${days} nuits)\n• Repas: ${Math.round(budget*0.25)}€\n• Activités: ${Math.round(budget*0.10)}€\n\nOu je peux suggérer Dubaï, Paris ou Le Caire 🌍`,
    greeting: "Bonjour! 👋 Comment puis-je vous aider à planifier votre voyage?",
    default: "Merci pour votre question! Je peux vous aider avec:\n• Recherche de vols\n• Réservation d'hôtels\n• Forfaits Omra\n• Visas\n\nQue cherchez-vous exactement? 😊"
  },
  en: {
    budget: (budget, days) => `Based on your ${budget} budget for ${days} days, I suggest:\n\n✈️ **Istanbul** — Best value!\n• Flights: ${Math.round(budget*0.35)}\n• Hotel: ${Math.round(budget*0.30)} (${days} nights)\n• Food: ${Math.round(budget*0.25)}\n• Activities: ${Math.round(budget*0.10)}\n\nOr I can suggest Dubai, Paris or Cairo 🌍`,
    greeting: "Hello! 👋 How can I help you plan your trip?",
    default: "Thanks for asking! I can help with:\n• Flight search\n• Hotel booking\n• Umrah packages\n• Visas\n\nWhat do you need exactly? 😊"
  }
};

function initAI() {
  const input    = document.getElementById('ai-input');
  const sendBtn  = document.getElementById('ai-send');
  const messages = document.getElementById('ai-messages');
  if (!input) return;

  function addMsg(text, isUser = false) {
    const d = document.createElement('div');
    d.className = `ai-msg ${isUser ? 'user' : ''}`;
    d.innerHTML = `
      <div class="ai-avatar ${isUser ? 'user-av' : 'bot'}">${isUser ? '👤' : '🤖'}</div>
      <div class="ai-bubble">${text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</div>
    `;
    messages.appendChild(d);
    messages.scrollTop = messages.scrollHeight;
  }

  function processMsg(msg) {
    const r = aiResponses[currentLang] || aiResponses.ar;
    const budgetMatch = msg.match(/(\d+)/g);
    const dayMatch    = msg.match(/(\d+)\s*(يوم|jour|day)/i);

    if (budgetMatch && (msg.includes('ميزانية') || msg.includes('درهم') || msg.includes('دولار') ||
        msg.includes('budget') || msg.includes('MAD') || msg.includes('EUR') || budgetMatch.length >= 1)) {
      const budget = budgetMatch[0];
      const days   = dayMatch ? dayMatch[1] : 5;
      setTimeout(() => addMsg(r.budget(budget, days)), 800);
    } else {
      setTimeout(() => addMsg(r.default), 600);
    }
  }

  sendBtn?.addEventListener('click', () => {
    const v = input.value.trim();
    if (!v) return;
    addMsg(v, true);
    input.value = '';
    processMsg(v);
  });

  input?.addEventListener('keypress', e => { if (e.key === 'Enter') sendBtn.click(); });
}

// ── MODALS ──
function initModals() {
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.modal)?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target.classList.contains('modal-close')) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
}

// ── BOOKING FORM ──
function initBookingForm() {
  const form = document.getElementById('booking-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري المعالجة...';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('modal-booking')?.classList.remove('open');
      document.getElementById('modal-confirm')?.classList.add('open');
      document.body.style.overflow = 'hidden';
      btn.innerHTML = translations[currentLang]?.['btn.book'] || 'احجز الآن';
      btn.disabled = false;
    }, 2000);
  });
}

// ── VISA FORM ──
function initVisaForm() {
  document.querySelectorAll('.visa-country').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.visa-country').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const name = card.querySelector('.vname')?.textContent;
      document.getElementById('visa-selected-country').textContent = name || '';
    });
  });
}

// ── STICKY NAVBAR STYLE ──
function initNavbarScroll() {
  const style = document.createElement('style');
  style.textContent = `.navbar.scrolled { box-shadow:0 4px 30px rgba(0,0,0,.12); }`;
  document.head.appendChild(style);
}

// ── SMOOTH SCROLL ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  initHeroSlider();
  initNavbar();
  initSearchTabs();
  initObserver();
  initAI();
  initModals();
  initBookingForm();
  initVisaForm();
  initNavbarScroll();
  initSmoothScroll();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});
