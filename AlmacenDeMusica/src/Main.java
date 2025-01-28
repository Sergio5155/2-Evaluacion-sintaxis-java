public class Main {
    public static void main(String[] args) {
        // Crear un almacén de música
        AlmacenMusica almacenMusica1 = new AlmacenMusica();

        // Crear canciones de prueba y añadirlas
        Cancion cancion1 = new Cancion(1, "Bohemian Rhapsody");
        Cancion cancion2 = new Cancion(2, "Stairway to Heaven");
        Cancion cancion3 = new Cancion(3, "Hotel California");

        almacenMusica1.addCancion(cancion1);
        almacenMusica1.addCancion(cancion2);
        almacenMusica1.addCancion(cancion3);

        // Imprimir canciones
        almacenMusica1.imprimirCanciones();

        // Eliminar una canción
        almacenMusica1.deleteCancion(2);

        // Imprimir canciones después de eliminar
        almacenMusica1.imprimirCanciones();

        // Intentar eliminar una canción inexistente
        almacenMusica1.deleteCancion(5);
    }
}