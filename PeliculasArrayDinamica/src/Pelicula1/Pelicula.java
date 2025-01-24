package Pelicula1;

public class Pelicula {
    private String titulo;
    private String genero;
    private Pelicula siguiente;

    public Pelicula(String titulo, String genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.siguiente = null;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getGenero() {
        return genero;
    }

    public Pelicula getSiguiente() {
        return siguiente;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public void setSiguiente(Pelicula siguiente) {
        this.siguiente = siguiente;
    }

    @Override
    public String toString() {
        return "Título: " + titulo + ", Género: " + genero;
    }
}
