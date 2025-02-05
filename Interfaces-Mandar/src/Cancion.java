public class Cancion {
    private int id;
    private String title;

    // Constructor vacío para permitir crear objetos sin parámetros
    public Cancion() {}

    // Constructor con parámetros
    public Cancion(int id, String title) {
        this.id = id;
        this.title = title;
    }

    // Getters y Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {  // Agregado
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {  // Agregado
        this.title = title;
    }
}
