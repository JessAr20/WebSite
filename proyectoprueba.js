document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const seccionId = this.getAttribute('href').substring(1); // Obtén el ID de la sección
        mostrarSeccion(seccionId);
    });
});

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('main section');
    secciones.forEach(seccion => seccion.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Mostrar la sección de inicio por defecto al cargar la página
document.getElementById('inicio').style.display = 'block';
