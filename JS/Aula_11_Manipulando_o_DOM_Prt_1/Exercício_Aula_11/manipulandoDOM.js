window.alert('Manipulando o DOM');

document.title = 'Exercício Aula 11 de JS';

let secao = document.createElement('section');
let artigo = document.createElement('article');
let paragrafo = document.createElement('p');
let cabecalho = document.createElement('h1');
let subCabecalho = document.createElement('h2');
let paragrafo2 = document.createElement('p')

cabecalho.innerHTML = 'Primeiro Título';
subCabecalho.innerHTML = 'Segundo Título';
paragrafo.innerHTML = 'Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o fenômeno da Internet estimula a padronização do fluxo de informações.';
paragrafo2.innerHTML = 'Por outro lado, o desafiador cenário globalizado possibilita uma melhor visão global das formas de ação.'

document.body.appendChild(secao);
secao.appendChild(cabecalho);
secao.appendChild(paragrafo);

document.body.appendChild(artigo);
artigo.appendChild(subCabecalho);
artigo.appendChild(paragrafo2)

console.log(document.body);