// Exercício 1

console.log('\t--- Exercício 1 ---');
console.log('\n--> Números Pares e Ímpares');

const posicoes = [17, 43, 8, 4, 56, 29];
posicoes.forEach(numeros)

function numeros(index) {
    if (index % 2 == 0) console.log(`\nNúmero par: ${index}`);

    else if (index % 2 != 0) console.log(`\nNúmero ímpar: ${index}`);
};

console.log('\n--> Números que são menores ou iguais a 18')

posicoes.filter((index) => {
    if (index <= 18) {
        console.log(`\nNúmeros: ${index}`)
    }
})