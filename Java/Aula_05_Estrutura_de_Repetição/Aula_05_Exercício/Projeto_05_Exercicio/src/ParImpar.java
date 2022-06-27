public class ParImpar {
    public static void main(String[] args) {
        int vezes = 0, numero = 1, par = 0, impar = 0;

        while (vezes < 10) {

            if (numero <= 10) {
                System.out.println("- Número: " + numero);
                numero++;
            }

            if (numero % 2 == 0) {
                par++;
            } else {
                impar++;
            }

            vezes++;
        }

        System.out.println("\nQuantos são pares: " + par);
        System.out.println("\nQuantos são impares: " + impar);
    }
}
