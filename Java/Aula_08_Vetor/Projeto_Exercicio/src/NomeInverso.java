import java.util.Scanner;

public class NomeInverso {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        String[] nomes = new String[5];

        for (int i = 0; i < nomes.length; i++) {
            System.out.println((i + 1) + " - Nome:");
            nomes[i] = teclado.nextLine();
        }

        for (int i = 4; i >= 0; i--) {
            System.out.println("\n" + (i + 1) + " - Nome: " + nomes[i]);
        }

        teclado.close();
    }
}
