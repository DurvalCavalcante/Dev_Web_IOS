
let contador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let recebe = [2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Tabuada');

do {
    console.log(`\n${recebe[7]} * ${contador[0]} = ${recebe[7] * contador[0]}`);
    contador[0]++
} while (contador[0] <= 10);
