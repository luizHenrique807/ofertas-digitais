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

// Preencha quando o checkout for definido.
const CHECKOUT_URL = "";

document.querySelectorAll('.checkout-link').forEach(link => {
  link.addEventListener('click', event => {
    if (typeof fbq === 'function') {
      fbq('track', 'InitiateCheckout', {
        content_name: 'Solda do Zero',
        value: 57.00,
        currency: 'BRL'
      });
    }

    if (CHECKOUT_URL) {
      event.preventDefault();
      window.location.href = CHECKOUT_URL;
      return;
    }

    if (link.getAttribute('href') === '#') {
      event.preventDefault();
      document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
    }
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