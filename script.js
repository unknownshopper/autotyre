// Animación fade-in al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll('.intro, .experiencia, .servicios, .entregables, .precios, .cta');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Efecto destello en el precio total
    const precioFinal = document.querySelector('.precio-final');
    if (precioFinal) {
        precioFinal.addEventListener('mouseenter', () => {
            precioFinal.classList.add('shine');
        });
        precioFinal.addEventListener('mouseleave', () => {
            precioFinal.classList.remove('shine');
        });
    }

    // Tooltip elegante en el correo
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.setAttribute('title', 'Haz clic para escribirnos');
    }
});