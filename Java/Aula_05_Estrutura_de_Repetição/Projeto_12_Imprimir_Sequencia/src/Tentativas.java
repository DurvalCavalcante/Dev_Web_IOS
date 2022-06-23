import java.util.Scanner; // Import necessário para utilizar a classe Scanner
import java.util.Random; // Import necessário para utilizar a classe Random

public class Tentativas {
    public static void main(String[] args) {
        // Instância (buffer) utilizando a classe Scanner
        Scanner entrada = new Scanner(System.in);
        // Instância utilizando a classe Random
        Random rand = new Random();
        int palpite = 0, num = 0, tentativas = 0;
        num = rand.nextInt(10) + 1;

        do {
            tentativas++; // contabilizar as tentativas

            if (tentativas <= 3) {
                System.out.println("Digite seu palpite:");
                palpite = entrada.nextInt();
            }

            if (tentativas > 3) {
                System.out.println("Suas tentativas acabaram!");
            } else if (palpite == num) {
                System.out.println("Você acertou!!!");
            } else {
                if (palpite < num) {
                    System.out.println("Seu palpite está abaixo.");
                } else {
                    System.out.println("Seu palpite está acima.");
                }
            }
        } while (palpite != num && tentativas <= 3);

        entrada.close();
    }
} // fim do método main

