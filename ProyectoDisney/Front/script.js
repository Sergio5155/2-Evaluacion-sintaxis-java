let movies = [];
let filteredMovies = [];

function getImageUrl(title) {
    const fileName = title
        .toLowerCase()
        // Primero normalizamos los caracteres acentuados
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Elimina los diacríticos
        .replace(/[:\s,]+/g, '-')  // reemplaza espacios, comas y dos puntos con guiones
        .replace(/[^a-z0-9-]/g, '') // remueve todos los caracteres especiales excepto guiones
        .replace(/-+/g, '-')  // reemplaza múltiples guiones con uno solo
        .replace(/^-|-$/g, ''); // remueve guiones al inicio y final
    
    console.log(`Título original: ${title} -> Nombre de archivo: ${fileName}.jpg`); // Para debugging
    return `./images/${fileName}.jpg`;
}

async function loadMovies() {
    try {
        const response = await fetch('http://localhost:3000/peliculas');
        const data = await response.json();
        movies = data.map(movie => ({
            ...movie,
            imagen: getImageUrl(movie.titulo)
        }));
        filteredMovies = movies;
        renderMovies(movies);
    } catch (error) {
        showError('Error al cargar las películas');
    }
}

function renderMovies(movies) {
    const container = document.getElementById('moviesContainer');
    
    if (movies.length === 0) {
        container.innerHTML = '<div class="error">No se encontraron películas</div>';
        return;
    }
    
    container.innerHTML = movies.map(movie => {
        return `
            <div class="movie-card">
                <img 
                    src="${movie.imagen}" 
                    alt="${movie.titulo}"
                    class="movie-image"
                    onerror="this.onerror=null; this.src='./images/placeholder.jpg';"
                >
                <div class="movie-info">
                    <h3 class="movie-title">${movie.titulo}</h3>
                    <div class="movie-tags">
                        <span class="tag">${movie.genero}</span>
                        <span class="tag">${movie.tematica}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function showError(message) {
    document.getElementById('moviesContainer').innerHTML = `<div class="error">${message}</div>`;
}

async function buscarPorTitulo() {
    const titulo = document.getElementById('titulo').value;
    if (!titulo) {
        renderMovies(movies);
        return;
    }
    try {
        const response = await fetch(`http://localhost:3000/peliculas/nombre?titulo=${titulo}`);
        const data = await response.json();
        const moviesWithImages = data.map(movie => ({
            ...movie,
            imagen: getImageUrl(movie.titulo)
        }));
        renderMovies(moviesWithImages);
    } catch (error) {
        showError('Error al buscar películas');
    }
}

async function buscarPorGenero() {
    const genero = document.getElementById('genero').value;
    if (!genero) {
        renderMovies(movies);
        return;
    }
    try {
        const response = await fetch(`http://localhost:3000/peliculas/genero?genero=${genero}`);
        const data = await response.json();
        const moviesWithImages = data.map(movie => ({
            ...movie,
            imagen: getImageUrl(movie.titulo)
        }));
        renderMovies(moviesWithImages);
    } catch (error) {
        showError('Error al buscar películas por género');
    }
}

async function buscarPorTematica() {
    const tematica = document.getElementById('tematica').value;
    if (!tematica) {
        renderMovies(movies);
        return;
    }
    try {
        const response = await fetch(`http://localhost:3000/peliculas/tematica?tematica=${tematica}`);
        const data = await response.json();
        const moviesWithImages = data.map(movie => ({
            ...movie,
            imagen: getImageUrl(movie.titulo)
        }));
        renderMovies(moviesWithImages);
    } catch (error) {
        showError('Error al buscar películas por temática');
    }
}

window.onload = loadMovies;