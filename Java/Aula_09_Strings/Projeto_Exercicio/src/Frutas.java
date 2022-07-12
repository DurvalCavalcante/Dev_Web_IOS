import java.util.Scanner;

public class Frutas {
    private static String saveArray;

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        String string1 = "", string2 = "", string3 = "", string4 = "", string5 = "";

        String[] arrayFrutas = new String[5];
        String[] newArrayFrutas = new String[5];

        System.out.println("======== Digite o nome de 5 frutas ========");
        for (int i = 0; i < arrayFrutas.length;) {
            saveArray = teclado.nextLine();
            System.out.println("");

            if (!saveArray.isEmpty()) {
                if (saveArray.length() > 3) {
                    if (saveArray.toUpperCase().trim().compareTo(string1.toUpperCase().trim()) != 0 &&
                            saveArray.toUpperCase().trim().compareTo(string2.toUpperCase().trim()) != 0 &&
                            saveArray.toUpperCase().trim().compareTo(string3.toUpperCase().trim()) != 0 &&
                            saveArray.toUpperCase().trim().compareTo(string4.toUpperCase().trim()) != 0 &&
                            saveArray.toUpperCase().trim().compareTo(string5.toUpperCase().trim()) != 0) {
                        if (i == 0) {
                            string1 = saveArray.toUpperCase();
                            arrayFrutas[i] = string1.trim();
                            i++;
                        } else if (i == 1) {
                            string2 = saveArray.toUpperCase();
                            arrayFrutas[i] = string2.trim();
                            i++;
                        } else if (i == 2) {
                            string3 = saveArray.toUpperCase();
                            arrayFrutas[i] = string3.trim();
                            i++;
                        } else if (i == 3) {
                            string4 = saveArray.toUpperCase();
                            arrayFrutas[i] = string4.trim();
                            i++;
                        } else if (i == 4) {
                            string5 = saveArray.toUpperCase();
                            arrayFrutas[i] = string5.trim();
                            i++;
                        }
                    } else {
                        System.out.println("====== Você já tem essa fruta!!! ======");
                    }
                } else {
                    System.out.println("====== A fruta precisa de 3 ou mais letras ======");
                }
            } else {
                System.out.println("====== Seu campo está vazio. Por favor preencha!!! ======");
            }
        }

        System.out.println("Frutas:");
        for(int i = 0; i < arrayFrutas.length; i++){
            //alterando as palavras para minusculas
            newArrayFrutas[i] = arrayFrutas[i].replace(arrayFrutas[i], arrayFrutas[i].toLowerCase());
            System.out.println((i+1) + " - " + newArrayFrutas[i]);
        }

        teclado.close();
    }
}
