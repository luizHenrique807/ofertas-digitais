const ASSETS = {
  hero: 'assets/hero-codigo-da-solda.png?v=20261008-3',
  modulo01: 'assets/modulo-01.png?v=20261008-3',
  modulo02: 'assets/modulo-02.png?v=20261008-3',
  modulo03: 'assets/modulo-03.png?v=20261008-3',
  modulo04: 'assets/modulo-04.png?v=20261008-3',
  modulo05: 'assets/modulo-05.png?v=20261008-3',
  modulo06: 'assets/modulo-06.png?v=20261008-3',
  modulo07: 'assets/modulo-07.png?v=20261008-3',
  modulo08: 'assets/modulo-08.png?v=20261008-3'
};

document.querySelectorAll('[data-asset]').forEach(img => {
  const key = img.dataset.asset;
  if (ASSETS[key]) img.src = ASSETS[key];
});

const CHECKOUT_URL = "https://pay.cakto.com.br/36w75ay_1183436";

document.querySelectorAll('.checkout-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    if (typeof fbq === 'function') {
      fbq('track', 'InitiateCheckout', {
        content_name: 'Código da Solda',
        value: 57.00,
        currency: 'BRL'
      });
    }

    if (CHECKOUT_URL) window.location.href = CHECKOUT_URL;
  });
});

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', event => {
    const target = link.getAttribute('href');
    if (!target || !target.startsWith('#')) return;

    const element = document.querySelector(target);
    if (!element) return;

    event.preventDefault();
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));