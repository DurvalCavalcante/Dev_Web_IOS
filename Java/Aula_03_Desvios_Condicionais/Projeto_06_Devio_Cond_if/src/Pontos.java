import java.util.Scanner;

public class Pontos {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("- Digite seu nome : ");
        String nome = teclado.nextLine();

        System.out.println("- Digite quantos pontos você tem ? ");
        double ponto = teclado.nextDouble();

        if (ponto >= 1000) {
            System.out.println(nome + ", você atingio o número máximo de pontos!");
        }

        teclado.close();
    }
}
