// Crie um array de objetos com 4 objetos, e cada objeto tera 4 propriedades.
// Retorne o nome de todos os alunos.
// Retorne todos os alunos que tirou nota maior que 6
// Retorne o primeiro aluno que tirou nota menor que 5
// Utilizar em todos os retornos Arrow Function

const alunos = [
    {
        nome: 'Durval Cavalcante',
        idade: 23,
        turno: 'Noite',
        nota: 8,
    },

    {
        nome: 'João Francisco',
        idade: 19,
        turno: 'Noite',
        nota: 5,
    },

    {
        nome: 'Maria da Silva',
        idade: 22,
        turno: 'Manhã',
        nota: 9,
    },

    {
        nome: 'Priscilla Alcantara',
        idade: 20,
        turno: 'Tarde',
        nota: 6,
    }
];

console.log('Nome de todos os Alunos(as):');
alunos.forEach((nomeAlunos) => console.log(`\nAlunos(as): ${nomeAlunos.nome}`));

const notasAlunos = alunos.filter((notas) => {
    return notas.nota >= 6;
})

console.log(notasAlunos);

console.log(
    alunos.find((menor) => {
        return menor.nota == 5;
    })
)