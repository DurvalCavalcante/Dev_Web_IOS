import java.util.Scanner;

public class Notas {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        double nota, soma = 0;

        for (int vezes = 0; vezes < 8; vezes++) {
            System.out.println("*** Digite 8 notas aqui:");
            nota = teclado.nextDouble();
            System.out.println("");

            soma += nota;
        }
        System.out.println("- Sua média é: " + soma / 8);

        teclado.close();
    }
}
