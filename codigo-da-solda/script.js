const ASSETS = {
  modulo01: 'assets/modulo-01.webp',
  modulo02: 'assets/modulo-02.webp',
  modulo03: 'assets/modulo-03.webp',
  modulo04: 'assets/modulo-04.webp',
  modulo05: 'assets/modulo-05.webp',
  modulo06: 'assets/modulo-06.webp',
  modulo07: 'assets/modulo-07.webp',
  modulo08: 'assets/modulo-08.webp'
};

document.querySelectorAll('[data-asset]').forEach(img => {
  const key = img.dataset.asset;
  if (ASSETS[key]) img.src = ASSETS[key];
});

// Preencha aqui quando o link do checkout estiver definido.
const CHECKOUT_URL = "";

document.querySelectorAll('.checkout-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    if (typeof fbq === 'function') {
      fbq('track', 'InitiateCheckout', {
        content_name: 'Solda do Zero',
        value: 57.00,
        currency: 'BRL'
      });
    }

    if (CHECKOUT_URL) {
      window.location.href = CHECKOUT_URL;
    }
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