public class Tabuada {
    public static void main(String[] args) {
        int numero = 1;
        int tabuada = 5;

        System.out.println("- O resultado da tabuada de 5 é: ");

        while (numero <= 10) {
            System.out.println(tabuada + " X " + numero + " = " + tabuada * numero);
            numero++;
        }

    }
}
