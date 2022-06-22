import java.util.Scanner;

public class MaiorEntre3 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("===== Digite três números =====");
        System.out.println(" ");

        System.out.println("- Digite um número: ");
        int primeiroNumero = teclado.nextInt();

        System.out.println("- Digite um segundo número: ");
        int segundoNumero = teclado.nextInt();

        System.out.println("- Digite um terceiro número: ");
        int terceiroNumero = teclado.nextInt();

        if (primeiroNumero == segundoNumero && primeiroNumero == terceiroNumero) {
            System.out.println("- Os números são iguais!");
        } else {
            if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
                System.out.println("- O número maior entre os três é: " + primeiroNumero);
            } else {
                if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
                    System.out.println("- O número maior entre os três é: " + segundoNumero);
                } else {
                    System.out.println("- O número maior entre os três é: " + terceiroNumero);
                }
            }
        }

        teclado.close();
    }
}
