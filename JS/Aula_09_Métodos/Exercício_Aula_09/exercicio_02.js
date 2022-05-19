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

console.log('\n--> Retornando os alunos do Segundo Ano:');

let segundo = alunos.filter((alunos) => {
    if (alunos.ano == '2°B' || alunos.ano == '2°C') {
        console.log(alunos);
    }
})

const soma = (alunos[0].nota + alunos[1].nota + alunos[2].nota + alunos[3].nota + alunos[4].nota + alunos[5].nota) / 6;

console.log(`\n--> O resultado da média dos alunos é: ${soma}`);