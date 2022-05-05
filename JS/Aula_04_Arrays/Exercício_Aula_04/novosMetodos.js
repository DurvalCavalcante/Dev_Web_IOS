console.log('Dois Novos Métodos');

console.log('\nLista de cores:');
let cor = ['Preto', 'Azul', 'Rosa', 'Amarelo', 'Roxo'];
console.log(`Cores: ${cor}`);

// splice é usado para remover itens de uma posição de índice.

let pos = 1, n = 2;

console.log('\nRemovendo itens 1 e 2 da lista de cores.');
console.log('Lista Atualizada:');
let r = cor.splice(pos, n);
console.log(`Cores: ${cor}`);

// forEach mostra as posição dos índices.

console.log('\nPosição dos índices da lista de cores:');
let copiar = cor.forEach(function (item, indice, array) {
    console.log(item, indice);
});
