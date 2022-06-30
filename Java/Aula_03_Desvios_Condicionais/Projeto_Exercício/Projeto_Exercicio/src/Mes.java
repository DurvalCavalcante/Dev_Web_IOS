import java.util.Scanner;

public class Mes {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        String estacao;

        System.out.println("=== Digite o nome do mês ===");
        estacao = teclado.nextLine();
        System.out.println("============================");

        if (estacao.equalsIgnoreCase("janeiro")){
            System.out.println("\n=========================");
            System.out.println("- Sua estação é Verão !!" );
            System.out.println("=========================");
        } else if (estacao.equalsIgnoreCase("fevereiro")) {
            System.out.println("\n=========================");
            System.out.println("- Sua estação é Verão !!" );
            System.out.println("=========================");
        } else if (estacao.equalsIgnoreCase("março")) {
            System.out.println("\n=========================");
            System.out.println("- Sua estação é Verão !!" );
            System.out.println("=========================");
        } else if (estacao.equalsIgnoreCase("abril")) {
            System.out.println("\n==========================");
            System.out.println("- Sua estação é Outono !!" );
            System.out.println("==========================");
        } else if (estacao.equalsIgnoreCase("maio")) {
            System.out.println("\n==========================");
            System.out.println("- Sua estação é Outono !!" );
            System.out.println("==========================");
        } else if (estacao.equalsIgnoreCase("junho")) {
            System.out.println("\n==========================");
            System.out.println("- Sua estação é Outono !!" );
            System.out.println("==========================");
        } else if (estacao.equalsIgnoreCase("julho")) {
            System.out.println("\n===========================");
            System.out.println("- Sua estação é Inverno !!" );
            System.out.println("===========================");
        } else if (estacao.equalsIgnoreCase("agosto")) {
            System.out.println("\n===========================");
            System.out.println("- Sua estação é Inverno !!" );
            System.out.println("===========================");
        } else if (estacao.equalsIgnoreCase("setembro")) {
            System.out.println("\n===========================");
            System.out.println("- Sua estação é Inverno !!" );
            System.out.println("===========================");
        } else if (estacao.equalsIgnoreCase("outubro")) {
            System.out.println("\n=============================");
            System.out.println("- Sua estação é Primavera !!" );
            System.out.println("=============================");
        } else if (estacao.equalsIgnoreCase("novembro")) {
            System.out.println("\n=============================");
            System.out.println("- Sua estação é Primavera !!" );
            System.out.println("=============================");
        } else if (estacao.equalsIgnoreCase("dezembro")) {
            System.out.println("\n=============================");
            System.out.println("- Sua estação é Primavera !!" );
            System.out.println("=============================");
        }else {
            System.out.println("\n===========================");
            System.out.println("- Digite um mês válido !!!");
            System.out.println("===========================");
        }

        teclado.close();
    }
}
