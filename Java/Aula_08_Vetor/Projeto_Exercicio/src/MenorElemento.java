import java.util.Random;

public class MenorElemento {
    public static void main(String[] args) {
        Random random = new Random();

        int[] array = new int[10];

        System.out.println("- Números Aletórios:");
        for (int i = 0; i < array.length; i++) {
            array[i] = random.nextInt(10) + 1;
            System.out.println("- Número " + array[i]);
        }

        int menor = array[0];

        for (int i = 0; i < array.length; i++) {
            if (array[i] < menor) {
                menor = array[i];
            }
        }
        System.out.println("\n- O menor elemente é: " + menor);
    }
}
