document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculas();
});

async function cargarPeliculas() {
    try {
        const response = await fetch('./peliculas.json');
        const data = await response.json();
        mostrarPeliculas(data.peliculas);
    } catch (error) {
        console.error('Error al cargar las películas:', error);
        document.getElementById('all-movies').innerHTML = '<p>Error al cargar las películas.</p>';
    }
}

function mostrarPeliculas(peliculas) {
    const featuredMovies = document.getElementById('featured-movies');
    const allMovies = document.getElementById('all-movies');

    featuredMovies.innerHTML = peliculas
        .filter(p => p.destacada)
        .map(crearTarjetaPelicula)
        .join('');

    allMovies.innerHTML = peliculas
        .map(crearTarjetaPelicula)
        .join('');
}

function crearTarjetaPelicula(pelicula) {
    return `
        <div class="movie-card">
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}" onerror="this.src='images/default.jpg'">
            <div class="movie-info">
                <h3>${pelicula.titulo}</h3>
                <p>${pelicula.genero} • ${pelicula.año}</p>
            </div>
        </div>
    `;
}
