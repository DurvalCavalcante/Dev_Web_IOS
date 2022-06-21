import java.util.Scanner; // Import necessário para utilizar a classe

public class Media {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        // Recebendo o nome do usuário
        System.out.println("- Digite seu nome : ");
        String nome = teclado.nextLine();

        // Recebendo as notas do usuário
        System.out.println("- Digite suas duas notas aqui : ");
        double primeiraNota = teclado.nextDouble();
        double segundaNota = teclado.nextDouble();

        // Calculando a média do usuário
        double media = (primeiraNota + segundaNota) / 2;

        // Mostrando o resultado
        System.out.println(nome + ", sua média é : " + media);

        // Encerrando
        teclado.close();
    }
}

