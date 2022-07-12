import java.util.Scanner;

public class ValorM {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        int maior, menor;
        int[] numeros = new int[10];

        for (int i = 0; i < numeros.length; i++) {
            System.out.println("- Digite um número " + (i + 1));
            numeros[i] = teclado.nextInt();
        }

        maior = numeros[0];
        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
        }
        System.out.println("========================");
        System.out.println(" O maior número é: " + maior);
        System.out.println("========================");

        menor = numeros[0];
        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }
        System.out.println("========================");
        System.out.println(" O menor número é: " + menor);
        System.out.println("========================");

        float media = 0;
        for (int i = 0; i < numeros.length; i++) {
                media += numeros[i] ;
        }
        System.out.println("========================");
        System.out.println(" O media dos número é: " + media /10);
        System.out.println("========================");

        teclado.close();
    }
}

