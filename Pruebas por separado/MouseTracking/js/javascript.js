let estrellasActivas = 0;
const maxEstrellas = 50; // Límite de estrellas activas

function crearEstrella(x, y) {
  if (estrellasActivas >= maxEstrellas) return;

  const estrella = document.createElement('div');
  estrella.className = 'estrella';

  // Posición con ligera variación aleatoria
  estrella.style.left = `${x + (Math.random() * 10 - 5)}px`;
  estrella.style.top = `${y + (Math.random() * 10 - 5)}px`;

  // Tamaño aleatorio
  const size = Math.random() * 10 + 10;
  estrella.style.width = `${size}px`;
  estrella.style.height = `${size}px`;

  document.body.appendChild(estrella);
  estrellasActivas++;

  setTimeout(() => {
    estrella.remove();
    estrellasActivas--;
  }, 1000);
}

let ultimaLlamada = 0;
document.addEventListener('mousemove', (e) => {
  const ahora = Date.now();
  if (ahora - ultimaLlamada > 50) { // Evita generación excesiva
    requestAnimationFrame(() => crearEstrella(e.clientX, e.clientY));
    ultimaLlamada = ahora;
  }
});
