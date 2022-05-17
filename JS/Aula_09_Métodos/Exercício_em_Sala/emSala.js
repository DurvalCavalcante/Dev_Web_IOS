// Crie um array de objetos com 4 objetos, e cada objeto tera 4 propriedades.
// Retorne o nome de todos os alunos.
// Retorne todos os alunos que tirou nota maior que 6
// Retorne o primeiro aluno que tirou nota menor que 5
// Utilizar em todos os retornos Arrow Function

const alunos = [
    {
        nome: 'Durval',
        idade: 23,
        turno: 'Noite',
        nota: 8,
    },

    {
        nome: 'João',
        idade: 19,
        turno: 'Noite',
        nota: 5,
    },

    {
        nome: 'Maria',
        idade: 22,
        turno: 'Manhã',
        nota: 9,
    },

    {
        nome: 'Priscila',
        idade: 20,
        turno: 'Tarde',
        nota: 6,
    }
];

console.log(alunos.filter((name) => {
    return name.nome;
})
)
