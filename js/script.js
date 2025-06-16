// Menú toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('hidden');
});

// Validación de formulario
document.getElementById('formulario').addEventListener('submit', function (e) {
  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor, completa todos los campos.');
    e.preventDefault();
  } else {
    alert('¡Formulario enviado con éxito!');
  }
});

// Slider automático básico
let currentIndex = 0;
const sliderImages = document.querySelectorAll('.slider img');

function showSlide(index) {
  sliderImages.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  showSlide(currentIndex);
}, 3000);

showSlide(currentIndex); // Mostrar el primero
