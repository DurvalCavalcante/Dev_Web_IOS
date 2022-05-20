// Método getElementById()
let title = document.getElementById('titulo');
document.body.style.background = '#08807b'

// Alterando o conteudo do HTML
title.innerHTML = 'Vai perder o PC galera do AWS';

// Configurando o CSS do HTML
title.style.textAlign = 'center';
title.style.background = '#420b58';
title.style.color = 'white';
title.style.border = 'solid 3px #000';
title.style.margin = '30px';
title.style.borderRadius = '16px';

// Método getElementsByClassName()
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);

items[1].textContent = 'Alterando pelo JS';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = '#fc036c';
items[1].style.padding = '.5rem'

// Utilizando o FOR para percorrer a lista
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f1a20b';
}

// Método getElementsByTagName()
let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i += 2) {
    li[i].style.backgroundColor = '#8d9c09'
}

//  Método getElementsByName()
let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);

nome[0].textContent = 'Mudando pelo JS';
nome[0].style.backgroundColor = '#ff5475';
nome[1].textContent = 'Alterando pelo JavaScript'
nome[1].style.backgroundColor = '#69d2e7';

// Remover um elemento no DOM
let item2 = document.getElementById('item2');
item2.remove();

// Inserindo um valor
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');

lista.insertBefore(item2, item1.nextSibling);

// Alterar estilo da lista
let ul = document.getElementById('items');

ul.style.listStyle = 'none';
// ul.style.listStyle = 'decimal inside';

// Acessando um tag específica

// let teste = document.getElementById('nomeId');
// let test = nomeId.getElementsByTagName('nomeTag');
// console.log(nomeTag);