// Referencias a elementos del DOM
const contenedorPeliculas = document.getElementById('contenedor-peliculas');
const contenedorTitulos = document.getElementById('contenedor-titulos');
const botonMostrarTitulos = document.getElementById('mostrar-titulos');
const botonFiltrarGenero = document.getElementById('filtrar-genero');

// Variable para almacenar las películas
let peliculas = [];

// Cargar el JSON y mostrar las películas
fetch('./peliculas.json') // Asegúrate de que la ruta sea correcta
  .then((response) => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON.');
    }
    return response.json();
  })
  .then((data) => {
    peliculas = data; // Guardar las películas en la variable global
    mostrarPeliculas(peliculas); // Mostrar todas las películas al cargar
  })
  .catch((error) => {
    console.error('Error al cargar el JSON:', error);
    contenedorPeliculas.innerHTML = '<p>Error al cargar las películas.</p>';
  });

// Función para mostrar todas las películas
function mostrarPeliculas(peliculas) {
  let htmlContent = '';
  peliculas.forEach((pelicula) => {
    htmlContent += `<p><strong>${pelicula.titulo}</strong> - Año: ${pelicula.año}, Género: ${pelicula.genero}</p>`;
  });
  contenedorPeliculas.innerHTML = htmlContent;
}

// Mostrar solo los títulos de las películas
botonMostrarTitulos.addEventListener('click', () => {
  if (!peliculas.length) return;

  let htmlContent = '';
  peliculas.forEach((pelicula) => {
    htmlContent += `<p>${pelicula.titulo}</p>`;
  });
  contenedorTitulos.innerHTML = htmlContent;
});

// Filtrar películas por género
botonFiltrarGenero.addEventListener('click', () => {
  if (!peliculas.length) return;

  const generoIngresado = prompt('Ingrese el género que desea filtrar (e.g., Animación, Ciencia Ficción, Acción, Superhéroes):').trim();

  if (!generoIngresado) {
    alert('Debe ingresar un género válido.');
    return;
  }

  const peliculasFiltradas = peliculas.filter((pelicula) => pelicula.genero.toLowerCase() === generoIngresado.toLowerCase());

  if (peliculasFiltradas.length === 0) {
    contenedorTitulos.innerHTML = `<p>No se encontraron películas del género "${generoIngresado}".</p>`;
  } else {
    let htmlContent = '';
    peliculasFiltradas.forEach((pelicula) => {
      htmlContent += `<p>${pelicula.titulo} - Año: ${pelicula.año}</p>`;
    });
    contenedorTitulos.innerHTML = htmlContent;
  }
});
