document.addEventListener('DOMContentLoaded', () => {
  // Lightweight interaction hooks
  const promoClose = document.querySelector('[data-promo-close]');
  if (promoClose) {
    promoClose.addEventListener('click', () => {
      const bar = document.querySelector('.vh-promo');
      if (bar) bar.style.display = 'none';
    });
  }
});
