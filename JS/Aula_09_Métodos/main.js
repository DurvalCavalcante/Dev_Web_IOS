// Métodos forEach() com Arrays
const frutas = ['Maça', 'Pera', 'Melancia']
frutas.forEach(minhasFuncao);

function minhasFuncao(index, item) {
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
}

// Com Arrow Function
console.clear();

const frutas2 = ['Maça', 'Pera', 'Melancia']
frutas2.forEach((index, item) => {
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
})

// Forma mais enxuta de escrever funções
console.clear();

const tarefas = [
    {
        id: 1,
        texto: 'Aqui vai um texto',
    },

    {
        id: 2,
        texto: 'Aqui vai dois textos',
    },

    {
        id: 3,
        texto: "Aqui vai três textos",
    },
];

tarefas.forEach((teste) => console.log(teste.texto));  // Assim só vai retornar o campo de texto

tarefas.forEach((teste) => { console.log(teste.texto), console.log(teste.id) }) // Para adicionar vários 'console.log'

// Método map()
// O método map() cria um novo array com o resultado gerado pela chamada de uma função para cada elemento do array.

console.clear();

const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt); // Math.sqrt vai retornar a raíz quadrada

console.log('Array Antigo');
console.log(numeros);

console.log('Novo Array');
console.log(newArray);

// Outros exemplo de map()
console.clear();

const mapText = tarefas.map((valor) => {  // Aqui vai só retornar o texto com um novo Array
    return valor.texto
})

console.log(mapText);

// Método filter()
// O método filter() cria um novo array com o resultado do filtro aplicado pelo método.

console.clear();

const idade = [8, 15, 32, 70, 98];

let filtroIdade = idade.filter((idades) => {  // Aqui vai me retornar toda lista com um novo Array
    return idades >= 18;
})

console.log(filtroIdade);

// Método find()
// O método find() retorna o valor dos elementos do array que passarem na condição configurada. 

console.clear();

const meuArray = [
    {
        nome: 'Diego',
        idade: 12,
        altura: 120,
        sexo: 'Masculino',
    },

    {
        nome: 'Jissara',
        idade: 15,
        altura: 170,
        sexo: 'Feminino',
    },

    {
        nome: 'Jheniffer',
        idade: 70,
        altura: 180,
        sexo: 'Feminino',
    },
];

console.log(
    meuArray.find((genero) => {                // Retorna só o primeiro da lista que ele encontrar 
        return genero.sexo === 'Feminino';
    })
)