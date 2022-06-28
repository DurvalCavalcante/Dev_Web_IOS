package br.com.aluno;

import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {
        int opcao, escolha;

        System.out.println("==== DBank ====");
        System.out.println("\n==== Escolha o tipo de conta ========");
        System.out.println(" 1 - Conta Corrente ");
        System.out.println(" 2 - Conta Poupança ");
        System.out.println(" 3 - Conta Estudante ");
        System.out.println("======================================");

        Scanner teclado = new Scanner(System.in);
        System.out.println("\n- Digite aqui o número da sua escolha: ");
        opcao = teclado.nextInt();

        switch (opcao) {
            case 1:
                System.out.println("\n======================================");
                System.out.println("- Você selecionou a Conta Corrente ");
                System.out.println("- Bem-vindo ao DBank               ");
                System.out.println("======================================");
                break;
            case 2:
                System.out.println("\n======================================");
                System.out.println("- Você selecionou a Conta Poupança ");
                System.out.println("- Bem-vindo ao DBank               ");
                System.out.println("======================================");
                break;
            case 3:
                System.out.println("\n======================================");
                System.out.println("- Você selecionou a Conta Estudante ");
                System.out.println("- Bem-vindo ao DBank               ");
                System.out.println("======================================");
                break;
            default:
                System.out.println("- Escolha uma opção válida! ");
        }

        System.out.println("\n==== Deseja confirma sua opção ? =====");
        System.out.println("1 - Sim");
        System.out.println("2 - Não");
        System.out.println("======================================");
        System.out.println("\n- Digite aqui o número da escolha: ");
        escolha = teclado.nextInt();

        teclado.close();
    }
}
