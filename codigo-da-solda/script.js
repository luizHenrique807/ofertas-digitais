// Imagens incorporadas ao próprio repositório.
document.querySelectorAll('[data-asset]').forEach(img => {
  const key = img.dataset.asset;
  if (window.CDS_ASSETS && window.CDS_ASSETS[key]) img.src = window.CDS_ASSETS[key];
});
// Troque apenas esta linha quando o checkout estiver disponível.
const CHECKOUT_URL = "";

const checkoutLinks = document.querySelectorAll('.checkout-link');
checkoutLinks.forEach(link => {
  link.addEventListener('click', (event) => {
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
    } else if (link.getAttribute('href') === '#') {
      event.preventDefault();
      document.querySelector('#oferta')?.scrollIntoView({behavior:'smooth'});
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
}, {threshold: 0.08});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));