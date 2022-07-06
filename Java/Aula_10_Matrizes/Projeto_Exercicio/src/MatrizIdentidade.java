public class MatrizIdentidade {
    public static void main(String[] args) {
        int numeros[][] = new int[5][5];

        numeros[0][0] = 1;
        numeros[1][1] = 1;
        numeros[2][2] = 1;
        numeros[3][3] = 1;
        numeros[4][4] = 1;

        for (int i =0; i < numeros.length; i++){
            for (int j = 0; j < numeros.length; j++){
                System.out.print(numeros[i][j] + "\t");
            }
            System.out.println("");
        }
    }
}
