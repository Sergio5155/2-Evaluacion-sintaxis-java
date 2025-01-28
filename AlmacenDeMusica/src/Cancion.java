import java.util.ArrayList;

// Clase Cancion
class Cancion {
    private int id;
    private String titulo;

    // Constructor
    public Cancion(int id, String titulo) {
        this.id = id;
        this.titulo = titulo;
    }

    // Getters
    public int getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    //Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    @Override
    public String toString() {
        return "Cancion [ID=" + id + ", Título=" + titulo + "]";
    }
}