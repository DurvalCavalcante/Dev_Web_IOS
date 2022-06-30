import java.util.Scanner;

public class Frutas {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        String[] arrayFrutas = new String[5];

        for (int i = 0; i < arrayFrutas.length; i++) {
            System.out.println((i + 1) + " Fruta:");
            arrayFrutas[i] = teclado.nextLine();
        }

        System.out.println("\n========== Verificando se está vazia e Igualando caracteres ==========");

        for (int i = 0; i < 5; i++) {
            // Verificando se está vazia
            if (arrayFrutas[i].isEmpty()) {
                System.out.println("\nO campo " + (i + 1) + " está vazio!!");
            } else {
                System.out.println("\n" + (i + 1) + " - Fruta: " + arrayFrutas[i].toUpperCase());
            }
        }

        System.out.println("\n========== Verificando se tem 3 ou mais letra ==========");

        for (int i = 0; i < 5; i++) {
            // Verificando se tem 3 ou mais letras
            if (arrayFrutas[i].length() > 3) {
                System.out.println("\n- O campo " + (i + 1) + " tem mais do que 3 letra !!");
            } else if (arrayFrutas[i].length() == 3) {
                System.out.println("\n- O campo " + (i + 1) + " tem 3 letra !!");
            } else {
                System.out.println("\n- O campo " + (i + 1) + " tem nemos do que 3 letra !!");
            }
        }

        System.out.println("\n========== Verificando se a String já existe ==========");



        teclado.close();
    }
}
