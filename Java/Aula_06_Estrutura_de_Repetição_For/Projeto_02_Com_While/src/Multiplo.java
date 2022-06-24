public class Multiplo {
    public static void main(String[] args) {
        int multiplo = 0;

        while (multiplo < 1000){
            if (multiplo % 80 == 0){
                System.out.println("");
            }
            System.out.print(multiplo + " ");

            multiplo +=2;
        }
    }
}
