// script.js

document.addEventListener('DOMContentLoaded', function() {
  // ==================== INICIALIZACIÓN SWIPER ====================
  if (typeof Swiper !== 'undefined') {
    const servicesSwiper = new Swiper('.services-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,           // Cambia cada 3 segundos
        disableOnInteraction: false, // Sigue autoplay después de que el usuario interactúe
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // ==================== FORMULARIO DE CONTACTO ====================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('¡Gracias por tu mensaje! Te contactaremos en breve.');
      contactForm.reset();
    });
  }

  // ==================== NAVEGACIÓN SUAVE ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          // Cerrar menú móvil si está abierto
          closeMenu();
        }
      }
    });
  });

  // ==================== MENÚ HAMBURGUESA ====================
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (menuToggle && mobileMenu && menuIcon) {
    // Asegurar estado inicial: cerrado
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

    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (mobileMenu.classList.contains('show')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function (event) {
      if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        closeMenu();
      }
    });
  }
});