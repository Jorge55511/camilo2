// Función para abrir la carta al hacer clic
function abrirCarta() {
    const envelope = document.querySelector('.envelope');
    if (!envelope.classList.contains('open')) {
      envelope.classList.add('open'); // Se abre la carta solo si no está abierta
    }
  }
  