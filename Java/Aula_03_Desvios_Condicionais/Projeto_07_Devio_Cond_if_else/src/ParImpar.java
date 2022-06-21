import java.util.Scanner;

public class ParImpar {
    public static void main (String[] args){
        Scanner teclado = new Scanner(System.in);

        System.out.println("- Digite um número : ");
        int numb = teclado.nextInt();

        if ((numb % 2) == 0){
            System.out.println("- O número digitado é Par!");
        }
        else {
            System.out.println("- O número digitado é Impar!");
        }

        teclado.close();
    }
}
