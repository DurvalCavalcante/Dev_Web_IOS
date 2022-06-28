import java.util.Scanner;

public class Mes {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("=== Digite o nome do mês ===");
        String nome = teclado.nextLine();

        teclado.close();
    }
}
