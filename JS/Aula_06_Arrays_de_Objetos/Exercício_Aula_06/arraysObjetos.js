console.log('O Coordenador emitiu a listagem dos alunos para verificar quais alunos foram aprovados ou reprovados.\n');

const alunos = [
    {
        nome: 'João',
        sobrenome: 'Da Silva',
        sala: 3,
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
        sala: 1,
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
        sala: 2,
        nota: [8, 8, 6, 6],
        media: (8 + 8 + 6 + 6) / 4,
        endereco: {
            rua: 'Rua Logo Chega',
            numero: 87,
            cidade: 'São Paulo',
        },
    },
];

console.log(`\nO Aluno: ${alunos[0].nome} ${alunos[0].sobrenome} com as Notas: ${alunos[0].nota} Mora na ${alunos[0].endereco.rua} N° ${alunos[0].endereco.numero} Cidade: ${alunos[0].endereco.cidade} teve a Média: ${alunos[0].media}`);
console.log(`\nO Aluno: ${alunos[1].nome} ${alunos[1].sobrenome} com as Notas: ${alunos[1].nota} Mora na ${alunos[1].endereco.rua} N° ${alunos[1].endereco.numero} Cidade: ${alunos[1].endereco.cidade} teve a Média: ${alunos[1].media}`);
console.log(`\nA Aluna: ${alunos[2].nome} ${alunos[2].sobrenome} com as Notas: ${alunos[2].nota} Mora na ${alunos[2].endereco.rua} N° ${alunos[2].endereco.numero} Cidade: ${alunos[2].endereco.cidade} teve a Média: ${alunos[2].media}`);
console.log(`\nLista dos Alunos(as) que foram Aprovados ou Reprovados:`);
console.log(`\nO Aluno: ${alunos[0].nome} ${alunos[0].sobrenome} da Sala: ${alunos[0].sala} foi APROVADO com a Média: ${alunos[0].media}`);
console.log(`\nA Aluna: ${alunos[2].nome} ${alunos[2].sobrenome} da Sala: ${alunos[2].sala} foi APROVADA com a Média: ${alunos[2].media}`);
console.log(`\nO Aluno: ${alunos[1].nome} ${alunos[1].sobrenome} da Sala: ${alunos[1].sala} foi REPROVADO com a Média: ${alunos[1].media}`);
