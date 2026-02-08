// =========================================
// SCRIPT PRINCIPAL
// =========================================

console.log('Página cargada correctamente');

// Smooth scroll para los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {

  // Agregar smooth scroll a los enlaces del navegación
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Manejar el envío del formulario de contacto
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Obtener los valores del formulario
      const nombre = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const mensaje = this.querySelector('textarea').value;

      // Aquí puedes agregar la lógica para enviar el formulario
      // Por ahora, solo mostramos un mensaje
      alert(`¡Gracias ${nombre}! Tu mensaje ha sido recibido.\n\nEn un futuro cercano implementaremos el envío real del formulario.`);

      // Limpiar el formulario
      this.reset();
    });
  }

  // Agregar efecto de highlight al hacer scroll
  const sections = document.querySelectorAll('section[id]');
  const navButtons = document.querySelectorAll('.nav-btn');

  window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('href') === `#${current}`) {
        btn.classList.add('active');
      }
    });
  });
});
