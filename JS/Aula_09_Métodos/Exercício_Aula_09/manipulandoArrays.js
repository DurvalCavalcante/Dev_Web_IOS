// Exercício 1

console.log('\t--- Exercício 1 ---');
console.log('\n> Números Pares e Ímpares');

const posicoes = [17, 43, 8, 4, 56, 29];
posicoes.forEach(numeros)

function numeros(index) {
    if (index % 2 == 0) console.log(`\nNúmero par: ${index}`);

    else if (index % 2 != 0) console.log(`\nNúmero ímpar: ${index}`);
};

console.log('\n> Números que são menores ou iguais a 18')

posicoes.filter((index) => {
    if (index <= 18) {
        console.log(`\nNúmeros: ${index}`)
    }
})

// Exercício 2

const alunos = [
    {
        nome: 'Ana',
        idade: 17,
        nota: 8,
        ano: '2°B',
    },

    {
        nome: 'Bruno',
        idade: 16,
        nota: 6,
        ano: '2°C',
    },

    {
        nome: 'Veronica',
        idade: 16,
        nota: 9,
        ano: '2°C',
    },

    {
        nome: 'Marta',
        idade: 15,
        nota: 5,
        ano: '3°C',
    },

    {
        nome: 'Brenno',
        idade: 19,
        nota: 6,
        ano: '3°C',
    },

    {
        nome: 'Maria',
        idade: 14,
        nota: 4,
        ano: '1°F',
    },
]

console.log('\n\t--- Exercício 2 ---');
alunos.forEach((retornado) => console.log(`\nAlunos(as): ${retornado.nome} do Ano: ${retornado.ano}`))