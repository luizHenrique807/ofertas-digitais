const ASSETS = {
  hero: 'assets/hero-codigo-da-solda.png',
  modulo01: 'assets/modulo-01.png',
  modulo02: 'assets/modulo-02.png',
  modulo03: 'assets/modulo-03.png',
  modulo04: 'assets/modulo-04.png',
  modulo05: 'assets/modulo-05.png',
  modulo06: 'assets/modulo-06.png',
  modulo07: 'assets/modulo-07.png',
  modulo08: 'assets/modulo-08.png'
};

// Enquanto os PNGs novos ainda não estiverem no repositório,
// mantém fallback para os arquivos antigos para a página não quebrar.
const FALLBACK_ASSETS = {
  hero: 'assets/modulo-01.webp',
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
  if (!ASSETS[key]) return;

  img.onerror = () => {
    const fallback = FALLBACK_ASSETS[key];
    if (fallback && img.src.indexOf(fallback) === -1) {
      img.onerror = null;
      img.src = fallback;
    }
  };

  img.src = ASSETS[key];
});

// Preencha aqui quando o link do checkout estiver definido.
const CHECKOUT_URL = "";

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