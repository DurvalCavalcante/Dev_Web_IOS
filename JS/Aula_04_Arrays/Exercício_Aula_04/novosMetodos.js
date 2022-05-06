console.log('Dois Novos Métodos');

console.log('\nLista de cores:');
let cor = ['Preto', 'Azul', 'Rosa', 'Amarelo', 'Roxo'];
console.log(`Cores: ${cor}`);

// splice é usado para remover itens de uma posição do índice.

// 'pos' é a posição do índice que eu quero iniciar para remover.
// 'n' é a quantidade de índices que eu quero remover. 
let pos = 1, n = 2;

console.log('\nRemovendo 2 itens da lista de cores.');
console.log('Lista Atualizada:');
let r = cor.splice(pos, n);
console.log(`Cores: ${cor}`);

// forEach mostra as posição e itens dos índices.

console.log('\nPosição dos índices da lista de cores:');
let copiar = cor.forEach(function (item, indice) {
    console.log(item, indice);
});
