console.log('O Coordenador emitiu a listagem dos alunos para verificar quais alunos foram aprovados ou reprovados.\n');

const alunos = [
    {
        nome: 'João',
        sobrenome: 'Da Silva',
        nota: [8, 9, 7, 6],
        media: (8 + 9 + 7 + 6) / 4,
        endereco: {
            rua: 'Rua Loge de Mais',
            numero: 12,
            cidade: 'São Paulo',
        },
    },

    {
        nome: 'Daniel',
        sobrenome: 'Do Nascimento',
        nota: [6, 8, 6, 6],
        media: (6 + 8 + 6 + 6) / 4,        
        endereco: {
            rua: 'Rua Lero Lero',
            numero: 359,
            cidade: 'São Paulo',
        },
    },

    {
        nome: 'Priscila',
        sobrenome: 'De Lima',
        nota: [8, 8, 6, 6],
        media: (8 + 8 + 6 + 6) / 4,
        endereco: {
            rua: 'Rua Logo Chega',
            numero: 87,
            cidade: 'São Paulo',
        },
    },
];

console.log(`\nO Aluno: ${alunos[0].nome} ${alunos[0].sobrenome} com as Notas: ${alunos[0].nota} Mora na ${alunos[0].endereco.rua} teve a Média: ${alunos[0].media}`);
console.log(`\nO Aluno: ${alunos[1].nome} ${alunos[1].sobrenome} com as Notas: ${alunos[1].nota} Mora na ${alunos[1].endereco.rua} teve a Média: ${alunos[1].media}`);
console.log(`\nA Aluna: ${alunos[2].nome} ${alunos[2].sobrenome} com as Notas: ${alunos[2].nota} Mora na ${alunos[2].endereco.rua} teve a Média: ${alunos[2].media}`);
console.log(`\nLista dos Alunos(as) que foram Aprovados ou Reprovados:`);
console.log(`\nO Aluno: ${alunos[0].nome} ${alunos[0].sobrenome} foi APROVADO com a Média: ${alunos[0].media}`);
console.log(`\nA Aluna: ${alunos[2].nome} ${alunos[2].sobrenome} foi APROVADA com a Média: ${alunos[2].media}`);
console.log(`\nO Aluno: ${alunos[1].nome} ${alunos[1].sobrenome} foi REPROVADO com a Média: ${alunos[1].media}`);
