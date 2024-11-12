 // Función para mostrar confeti al abrir en móvil
 function showConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.style.display = 'flex';
    setTimeout(() => {
        confetti.style.display = 'none';
    }, 3000); // Mostrar confeti por 3 segundos
}

// Detectar si el dispositivo es móvil
if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.onload = showConfetti;
}

// Función para lanzar confeti
function lanzarConfeti() {
const cantidadConfeti = 100; // Número de piezas de confeti

for (let i = 0; i < cantidadConfeti; i++) {
const confeti = document.createElement("div");
confeti.classList.add("confeti");

// Posición aleatoria horizontal
confeti.style.left = `${Math.random() * 100}vw`;

// Colores aleatorios
confeti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
confeti.style.animationDelay = `${Math.random()}s`;

document.body.appendChild(confeti);

// Remover el confeti después de la animación
setTimeout(() => confeti.remove(), 3000);
}
}

// Ejecutar la función al cargar la página
window.onload = lanzarConfeti;


