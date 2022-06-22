import java.util.Scanner;

public class Decrescente {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("- Digite um número: ");
        float primeiroNumero = teclado.nextFloat();

        System.out.println("- Digite um segundo número: ");
        float segundoNumero = teclado.nextFloat();

        if (primeiroNumero > segundoNumero) {
            System.out.println("- Ordem Decrescente: ");
            System.out.println("- Primeiro: " + primeiroNumero);
            System.out.println("- Segundo: " + segundoNumero);
        } else {
            if (primeiroNumero < segundoNumero) {
                System.out.println("- Ordem Decrescente: ");
                System.out.println("- Primeiro: " + segundoNumero);
                System.out.println("- Segundo: " + primeiroNumero);
            }
        }

        teclado.close();
    }
}
