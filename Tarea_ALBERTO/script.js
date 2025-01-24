// Referencias a elementos del DOM
const listadoPeliculas = document.getElementById("peliculas");
const generoSelect = document.getElementById("genero");
const accesosRapidos = document.getElementById("accesos-rapidos");

// Lista de películas
let peliculas = [];

// Cargar datos desde el JSON
fetch("./peliculas.json")
    .then(response => response.json())
    .then(data => {
        peliculas = data; // Guardamos las películas en la variable global
        inicializar();   // Inicializamos la aplicación
    })
    .catch(error => console.error("Error al cargar las películas:", error));

// Inicializar la aplicación
function inicializar() {
    cargarGeneros();
    mostrarPeliculas(peliculas);
    generarBotonesAcceso();
}

// Cargar géneros únicos en el desplegable
function cargarGeneros() {
    const generos = [...new Set(peliculas.map(pelicula => pelicula.genero))]; // Extraer géneros únicos
    generos.forEach(genero => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        generoSelect.appendChild(option);
    });

    // Escuchar cambios en el select
    generoSelect.addEventListener("change", () => filtrarPeliculasPorGenero(generoSelect.value));
}

// Generar botones dinámicos para accesos rápidos
function generarBotonesAcceso() {
    const generos = [...new Set(peliculas.map(pelicula => pelicula.genero))];
    generos.forEach(genero => {
        const button = document.createElement("button");
        button.textContent = genero;
        button.addEventListener("click", () => filtrarPeliculasPorGenero(genero));
        accesosRapidos.appendChild(button);
    });
}

// Mostrar películas en pantalla
function mostrarPeliculas(lista) {
    listadoPeliculas.innerHTML = ""; // Limpiar el listado actual
    lista.forEach(pelicula => {
        const li = document.createElement("li");
        li.textContent = `${pelicula.titulo} - Género: ${pelicula.genero}`;
        listadoPeliculas.appendChild(li);
    });
}

// Filtrar películas por género
function filtrarPeliculasPorGenero(genero) {
    if (genero === "todos") {
        mostrarPeliculas(peliculas); // Mostrar todas las películas
    } else {
        const filtradas = peliculas.filter(pelicula => pelicula.genero === genero);
        mostrarPeliculas(filtradas);
    }
}
