package org.example;


import Biblioteca.Biblioteca;
import Libro.Libro;

public class Main {
        public static void main(String[] args) {
            Biblioteca biblioteca = new Biblioteca();

            // Crear algunos libros
            Libro libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, true);
            Libro libro2 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605, true);
            Libro libro3 = new Libro("1984", "George Orwell", 1949, true);

            // Agregar libros a la biblioteca
            biblioteca.agregarLibro(libro1);
            biblioteca.agregarLibro(libro2);
            biblioteca.agregarLibro(libro3);

            // Listar todos los libros
            biblioteca.listarLibro();

            // Buscar un libro por título
            System.out.println("\nBuscando '1984':");
            biblioteca.buscarLibro("1984");

            // Prestar un libro
            System.out.println("\nPrestando '1984':");
            biblioteca.prestarLibro("1984");

            // Intentar prestar el mismo libro nuevamente
            System.out.println("\nPrestando '1984' nuevamente:");
            biblioteca.prestarLibro("1984");

            // Listar los libros después del préstamo
            System.out.println("\nLibros en la biblioteca después del préstamo:");
            biblioteca.listarLibro();
        }
    }

