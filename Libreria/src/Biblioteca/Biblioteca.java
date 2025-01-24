package Biblioteca;

import Libro.Libro;

public class Biblioteca {
    private static final int CAPACIDAD = 10;
    private static Libro[] libros = new Libro[CAPACIDAD];
    private static int contadorLibros = 0;
    private static String titulo;

    private static boolean isDisponible;

    public void agregarLibro(Libro libro) {
        if (contadorLibros < CAPACIDAD) { // Verifica si hay espacio en la biblioteca
            libros[contadorLibros] = libro; // Agrega el libro al array
            contadorLibros++; // Incrementa el contador
            System.out.println("Libro agregado: " + libro.getTitulo());
        } else {
            System.out.println("La biblioteca está llena. No se puede agregar más libros.");
        }
    }

    // Método para listar todos los libros
    public void listarLibro() {
        if (contadorLibros == 0) {
            System.out.println("La biblioteca está vacía.");
        } else {
            System.out.println("Libros en la biblioteca:");
            for (int i = 0; i < contadorLibros; i++) {
                System.out.println(libros[i].toString());
            }
        }
    }

    // Método para buscar un libro por título
    public void buscarLibro(String titulo) {
        for (int i = 0; i < contadorLibros; i++) {
            if (libros[i].getTitulo().equalsIgnoreCase(titulo)) {
                System.out.println("Libro encontrado: " + libros[i].toString());
                return;
            }
        }
        System.out.println("No se encontró un libro con el título: " + titulo);
    }

    // Método para prestar un libro
    public void prestarLibro(String titulo) {
        for (int i = 0; i < contadorLibros; i++) {
            if (libros[i].getTitulo().equalsIgnoreCase(titulo)) {
                if (libros[i].isDisponible()) {
                    libros[i].setDisponible(false);
                    System.out.println("El libro '" + titulo + "' ha sido prestado.");
                } else {
                    System.out.println("El libro '" + titulo + "' no está disponible.");
                }
                return;
            }
        }
        System.out.println("No se encontró un libro con el título: " + titulo);
    }

    }