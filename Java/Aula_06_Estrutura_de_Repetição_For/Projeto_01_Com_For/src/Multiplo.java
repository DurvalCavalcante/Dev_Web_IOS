public class Multiplo {
    public static void main(String[] args) {
        for (int multiplo = 0; multiplo < 1002; multiplo += 2) {
            if (multiplo % 80 == 0){
                System.out.println("");
            }
            System.out.print(multiplo + " ");
        }
    }
}
