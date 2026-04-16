// ===== NAVBAR: efecto scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ===== HAMBURGER MENU (móvil) =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Cerrar menú al pulsar un enlace
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== FILTROS DEL MENÚ =====
const filtros = document.querySelectorAll('.filtro-btn');
const cards = document.querySelectorAll('.card');

filtros.forEach(btn => {
  btn.addEventListener('click', () => {
    // Activar botón seleccionado
    filtros.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;

    cards.forEach(card => {
      if (cat === 'todos' || card.dataset.cat === cat) {
        card.classList.remove('oculto');
      } else {
        card.classList.add('oculto');
      }
    });
  });
});

// ===== CARRITO (contador simple) =====
let carritoTotal = 0;
const carritoCount = document.getElementById('carritoCount');
const carritoFab = document.getElementById('carritoFab');

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    carritoTotal++;
    carritoCount.textContent = carritoTotal;

    // Animación del botón
    btn.textContent = '✓';
    btn.style.background = '#2ecc71';
    setTimeout(() => {
      btn.textContent = '+';
      btn.style.background = '';
    }, 900);

    // Pequeño "bump" en el FAB
    carritoFab.style.transform = 'scale(1.2)';
    setTimeout(() => { carritoFab.style.transform = ''; }, 200);
  });
});

// Click en el FAB del carrito
carritoFab.addEventListener('click', () => {
  if (carritoTotal === 0) {
    alert('Tu carrito está vacío. ¡Añade algo del menú!');
  } else {
    alert(`🛒 Tienes ${carritoTotal} artículo(s) en tu carrito.\n\n(Funcionalidad de pago próximamente)`);
  }
});

// ===== BOTÓN RESERVAR =====
document.querySelector('.nav-reserva').addEventListener('click', () => {
  alert('📅 Reservas disponibles por teléfono:\n+34 912 345 678\n\n¡Te esperamos!');
});

// ===== FORMULARIO DE CONTACTO =====
const form = document.getElementById('contactoForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    feedback.style.color = '#e74c3c';
    feedback.textContent = '⚠️ Por favor, rellena todos los campos.';
    return;
  }

  // Simular envío
  feedback.style.color = '#7ade7a';
  feedback.textContent = `✅ ¡Gracias, ${nombre}! Te responderemos pronto.`;
  form.reset();

  setTimeout(() => { feedback.textContent = ''; }, 5000);
});

// ===== ANIMACIÓN DE ENTRADA CON SCROLL =====
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.6s ease both';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .stat, .info-item').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});
