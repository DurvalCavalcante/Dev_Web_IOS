import java.util.Scanner;

public class Tabuada {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int numero = 1;
        int tabuada;

        System.out.println("- Digite aqui qual tabuada você quer o resultado?");
        tabuada = teclado.nextInt();
        System.out.println("");

        // Raiz Quadrada
        System.out.println("- A raiz Quadrada de " + tabuada + " é: " + Math.sqrt(tabuada));
        System.out.println("");

        //  Se é Par ou Impar
        if (tabuada % 2 == 0) {
            System.out.println("- Seu número é Par!!");
            System.out.println("");
        } else {
            System.out.println("- Seu número é Impar!!");
            System.out.println("");
        }

        // Tabuada
        System.out.println("- O resultado da tabuada de " + tabuada);
        System.out.println("");

        while (numero <= 10) {
            System.out.println(tabuada + " X " + numero + " = " + tabuada * numero);
            numero++;
        }

        teclado.close();
    }
}
