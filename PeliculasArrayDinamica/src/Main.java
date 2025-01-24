import Pelicula1.Pelicula;

public class Main {
    public static void main(String[] args) {
        // Crear instancias de Pelicula
        Pelicula pelicula1 = new Pelicula("El Padrino", "Mafias");
        Pelicula pelicula2 = new Pelicula("Titanic", "Drama");
        Pelicula pelicula3 = new Pelicula("Inception", "Miedo");
        Pelicula pelicula4 = new Pelicula("Interstellar", "Ciencia");

        // Enlazar las películas
        pelicula1.setSiguiente(pelicula2);
        pelicula2.setSiguiente(pelicula3);
        pelicula3.setSiguiente(pelicula4);
        pelicula4.setSiguiente(null); // Última película apunta a null

        // Recorrer la lista dinámica y mostrarla
        Pelicula actual = pelicula1;
        while (actual != null) {
            System.out.println(actual); // Imprime título y género de la película actual
            actual = actual.getSiguiente(); // Avanza a la siguiente película
        }
    }
}
