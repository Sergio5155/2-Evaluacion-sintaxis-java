import java.util.ArrayList;

public class AlmacenMusica implements IEstanteria {
    private ArrayList<Cancion> lstCanciones;

    public AlmacenMusica() {
        this.lstCanciones = new ArrayList<>();
    }

    @Override
    public void addCancion(Cancion c) {
        if (c != null) {
            lstCanciones.add(c);
            System.out.println("Canción añadida: " + c.getTitle());
        }
    }

    @Override
    public void updateCancion(Cancion c) {
        for (Cancion cancion : lstCanciones) {
            if (cancion.getId() == c.getId()) {
                cancion.setTitle(c.getTitle());
                System.out.println("Canción actualizada: " + c.getTitle());
                return;
            }
        }
        System.out.println("Canción no encontrada.");
    }

    @Override
    public void deleteCancion(Cancion c) {
        if (lstCanciones.removeIf(cancion -> cancion.getId() == c.getId())) {
            System.out.println("Canción eliminada: " + c.getTitle());
        } else {
            System.out.println("Canción no encontrada.");
        }
    }

    @Override
    public void imprimirCancion(Cancion c) {
        for (Cancion cancion : lstCanciones) {
            if (cancion.getId() == c.getId()) {
                System.out.println("Canción encontrada: " + cancion.getTitle());
                return;
            }
        }
        System.out.println("Canción no encontrada.");
    }
}
