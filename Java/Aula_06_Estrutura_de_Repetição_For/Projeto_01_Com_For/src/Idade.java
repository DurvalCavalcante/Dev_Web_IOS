import java.util.Scanner;

public class Idade {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int idade;

        System.out.println("==== Idade de 5 pessoas ====");
        System.out.println("");

        for (int vezes = 0; vezes < 5; vezes++){
            System.out.println("- Digite sua idade:");
            idade = teclado.nextInt();
        }
    }
}
