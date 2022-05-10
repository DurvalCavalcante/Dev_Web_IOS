// Trabalhando com Strings

//Concatenar
let exe1 = 10;
let exe2 = 2;
let string1 = 'Aqui vai um texto';

console.log('O resultado da soma é: ' + (exe1 + exe2)); // Com aspas simples
console.log('O resultado da soma é: ' + (exe1 - exe2)); // Com aspas dupla
console.log(`O resultado da soma é: ${exe1 * exe2}`); // Com crases


// METODOS DE STRINGS

// Acessa uma String
let string2 = 'Aqui vai um texto';
console.log(string2.charAt(0)); // Com o método charAt
console.log(string2[12]); // Com colchetes

// Tamanho da String
let string3 = 'Aqui vai um texto';
console.log(string3.length);

// Maiúsculas e minúsculas
let string4 = 'Aqui vai um texto';
console.log(string4.toUpperCase()); // Método Maiúsculo
console.log(string4.toLowerCase()); // Método Minúsculo

// Subtring
let string5 = 'Mozilla';
console.log(string5.substring(0, 2));

// Slipt
let string6 = 'A raposa é um animal esperto';
let string7 = string6.split(' '); // Define a regra aqui aonde você quer quebra a string
console.log(string7);
console.log(string7[4]);

// Substituir uma string dentro da string
let string8 = 'A raposa é um animal esperto';
let string9 = string8.replace('A raposa', 'O leão');
console.log(string9);

// Remover espaços da string
let string10 = '    A raposa é um animal esperto';
console.log(string10); // Com espaçamento 
console.log(string10.trim()); // Sem espaçamento

// Métodos de buscar em strings
let string11 = 'A raposa é um animal esperto';
console.log(string11.indexOf('raposa')); // indexOf()
console.log(string11.lastIndexOf('esperto')); // lastIndexOf()
console.log(string11.search('animal')); // search()
console.log(string1.startsWith('A')); // startsWith()
console.log(string11.endsWith('esperto')); // endsWith()