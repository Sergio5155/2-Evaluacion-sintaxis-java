public class Main {
    public static void main(String[] args) {
        AlmacenMusica almacenMusica = new AlmacenMusica();

        Cancion cancion1 = new Cancion(1, "Bohemian Rhapsody");
        Cancion cancion2 = new Cancion(2, "Imagine");
        Cancion cancion3=new Cancion();
        cancion3.setId(3);
        cancion3.setTitle("El avion");
        // Agregar canciones
        almacenMusica.addCancion(cancion1);
        almacenMusica.addCancion(cancion2);
        almacenMusica.addCancion(cancion3);

        // Imprimir una canción
        almacenMusica.imprimirCancion(cancion1);

        // Actualizar una canción
        Cancion cancion1Actualizada = new Cancion(1, "Bohemian Rhapsody (Remastered)");
        almacenMusica.updateCancion(cancion1Actualizada);

        // Eliminar una canción
        almacenMusica.deleteCancion(cancion2);

        // Intentar imprimir una canción eliminada
        almacenMusica.imprimirCancion(cancion2);
    }
}
