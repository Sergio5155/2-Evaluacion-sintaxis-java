let peliculas = [];
let peliculasFiltradas = [];

// Referencias DOM
const searchInput = document.getElementById('searchInput');
const generoSelect = document.getElementById('genero');
const featuredMovies = document.getElementById('featured-movies');
const allMovies = document.getElementById('all-movies');
const navbar = document.querySelector('.navbar');
const heroTitle = document.getElementById('hero-title');
const heroDescription = document.getElementById('hero-description');

// Cargar datos
async function cargarPeliculas() {
    try {
        const response = await fetch('./peliculas.json');
        const data = await response.json();
        peliculas = data.peliculas;
        peliculasFiltradas = peliculas;
        inicializar();
    } catch (error) {
        console.error('Error al cargar las películas:', error);
        // Mostrar mensaje de error al usuario
        allMovies.innerHTML = '<div class="error-message">Error al cargar las películas. Por favor, intenta más tarde.</div>';
    }
}

// Inicialización
function inicializar() {
    cargarGeneros();
    mostrarPeliculas();
    setupEventListeners();
    actualizarHero();
}

// Cargar géneros únicos
function cargarGeneros() {
    const generos = [...new Set(peliculas.map(pelicula => pelicula.genero))].sort();
    generos.forEach(genero => {
        const option = document.createElement('option');
        option.value = genero;
        option.textContent = genero;
        generoSelect.appendChild(option);
    });
}

// Crear tarjeta de película
function crearTarjetaPelicula(pelicula) {
    const puntuacionEstrellas = '⭐'.repeat(Math.round(pelicula.puntuacion));
    
    return `
        <div class="movie-card" data-id="${pelicula.id}">
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}" 
                 onerror="this.src='/api/placeholder/300/450'">
            <div class="movie-info">
                <h3>${pelicula.titulo}</h3>
                <p>${pelicula.genero} • ${pelicula.año}</p>
                <div class="rating">
                    <i class="fas fa-star"></i> ${pelicula.puntuacion}
                </div>
            </div>
        </div>
    `;
}

// Mostrar películas
function mostrarPeliculas() {
    // Mostrar películas destacadas
    const destacadas = peliculasFiltradas.filter(p => p.destacada);
    featuredMovies.innerHTML = destacadas.map(crearTarjetaPelicula).join('');

    // Mostrar todas las películas
    allMovies.innerHTML = peliculasFiltradas.map(crearTarjetaPelicula).join('');

    // Agregar event listeners a las tarjetas
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', () => mostrarDetallePelicula(card.dataset.id));
    });
}

// Mostrar detalle de película
function mostrarDetallePelicula(id) {
    const pelicula = peliculas.find(p => p.id === parseInt(id));
    if (pelicula) {
        actualizarHero(pelicula);