import java.util.ArrayList;

class AlmacenMusica {
    private ArrayList<Cancion> canciones;

    // Constructor
    public AlmacenMusica() {
        this.canciones = new ArrayList<>();
    }

    // Método para agregar una canción
    public void addCancion(Cancion cancion) {
        canciones.add(cancion);
        System.out.println("Canción añadida: " + cancion);
    }

    // Método para eliminar una canción por ID
    public void deleteCancion(int id) {
        boolean encontrada = false;
        for (Cancion cancion : canciones) {
            if (cancion.getId() == id) {
                canciones.remove(cancion);
                System.out.println("Canción eliminada: " + cancion);
                encontrada = true;
                break;
            }
        }
        if (!encontrada) {
            System.out.println("No se encontró una canción con ID: " + id);
        }
    }

    public ArrayList<Cancion> getCanciones() {
        return canciones;
    }

    public void setCanciones(ArrayList<Cancion> canciones) {
        this.canciones = canciones;
    }

    // Método para imprimir todas las canciones
    public void imprimirCanciones() {
        if (canciones.isEmpty()) {
            System.out.println("No hay canciones en el almacén.");
        } else {
            System.out.println("Lista de canciones en el almacén:");
            for (Cancion cancion : canciones) {
                System.out.println(cancion);
            }
        }
    }
}