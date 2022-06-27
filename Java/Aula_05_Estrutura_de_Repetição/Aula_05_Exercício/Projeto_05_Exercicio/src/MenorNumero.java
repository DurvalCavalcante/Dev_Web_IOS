import java.util.Scanner;

public class MenorNumero {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int numero, vezes = 1, array = 99999;

        while (vezes <= 10) {
            System.out.println("- Digite um número 10 vezes:");
            numero = teclado.nextInt();

            if (numero < array){
                array = numero;
            }
            vezes++;
        }

        System.out.println("\n- O menor número digitado foi: " + array);

        teclado.close();
    }
}
