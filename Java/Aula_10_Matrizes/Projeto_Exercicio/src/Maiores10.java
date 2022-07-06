import java.util.Scanner;

public class Maiores10 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        int numeros[][] = new int[4][4];
        int soma = 0;

        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.println("Digite um número para a posição [" + i + "][" + j + "]: ");
                numeros[i][j] = teclado.nextInt();
            }
        }
        System.out.println("");
        System.out.println("============================================================");
        System.out.println("");

        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.print(numeros[i][j] + "\t");
                if (numeros[i][j] > 10) {
                    soma += 1;
                }
            }
            System.out.println("");
        }

        System.out.println("\n- Sua Matriz tem ( " + soma + " ) números maiores que '10'");

        teclado.close();

    }
}
