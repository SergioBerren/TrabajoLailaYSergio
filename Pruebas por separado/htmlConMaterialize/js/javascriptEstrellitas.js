// Función que crea una estrella en la posición del ratón
function crearEstrella(x, y) {
    const estrella = document.createElement('div');
    estrella.className = 'estrella';

    // Colocar la estrella en la posición del cursor
    estrella.style.left = `${x}px`;
    estrella.style.top = `${y}px`;

    // Añadir la estrella al cuerpo
    document.body.appendChild(estrella);

    // Eliminar la estrella después de la animación
    setTimeout(() => {
      estrella.remove();
    }, 1000); // La duración coincide con la animación `desvanecer`
  }

  // Evento que rastrea el movimiento del ratón
  document.addEventListener('mousemove', (e) => {
    crearEstrella(e.clientX, e.clientY); // Crear estrella donde está el cursor
  });