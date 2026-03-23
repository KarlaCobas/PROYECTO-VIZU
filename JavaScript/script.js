document.addEventListener('DOMContentLoaded', function() {
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.services-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por tu mensaje! Te contactaremos en breve.');
      contactForm.reset();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
          closeMenu();
        }
      }
    });
  });

  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (menuToggle && mobileMenu && menuIcon) {
    mobileMenu.classList.remove('show');
    menuIcon.innerHTML = `
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    `;

    function closeMenu() {
      if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        menuIcon.innerHTML = `
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        `;
      }
    }

    function openMenu() {
      mobileMenu.classList.add('show');
      menuIcon.innerHTML = `
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      `;
    }

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileMenu.classList.contains('show')) closeMenu();
      else openMenu();
    });

    document.addEventListener('click', (event) => {
      if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) closeMenu();
    });
  }
});