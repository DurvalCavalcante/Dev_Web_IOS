
let contador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let recebe = prompt('Digite aqui um número que você quer multiplicar:');

console.log('Tabuada');

do {
    console.log(`\n${recebe} X ${contador[0]} = ${recebe * contador[0]}`);
    contador[0]++
} while (contador[0] <= 10);
