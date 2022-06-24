import java.util.Scanner;

public class Idade {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int idade, vezes = 0;

        System.out.println("==== Idade de 5 pessoas ====");
        System.out.println("");

        while (vezes < 5){
            System.out.println("- Digite sua idade:");
            idade = teclado.nextInt();

            vezes++;
        }
    }
}
