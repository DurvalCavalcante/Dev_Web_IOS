// Laço While 

let profHelo = 6;

while (profHelo <= 5) {
    console.log('Bate Palma');
    profHelo++   // Sempre tem que existir um incremento ou decremento
}

// Laço do-while 
console.clear();

do {
    console.log('Bate Palma');
    console.log(profHelo);
    profHelo++
} while (profHelo <= 5);

// Exibir o valor de 1 até 10
console.clear();

let contador = 1;

while (contador <= 10) {
    console.log(`O valor do contador é: ${contador}`);
    contador++
}

// Decremento - começando o valor de 10 até 0
console.clear();

let contador2 = 10;

while (contador2 >= 0) {
    console.log(`O valor do contador é: ${contador2}`);
    contador2--
}

// Laço For
console.clear();

for (let contador3 = 1; contador3 <= 10; contador3++) {
    console.log(`Contador: ${contador3}`);
}

// Decremento - começando o valor de 10 até 0
console.clear();

for (let contador4 = 10; contador4 >= 0; contador4--) {
    console.log(`Contador: ${contador4}`)
}

// Laço de repetição e Arrays
console.clear();

const frutas = ['Maça', 'Laranja', 'Uva', 10];

for (let j = 0; j < frutas.length; j++) {
    console.log(`Nome: ${frutas[j]}`);
}

// Array de objetos e laços
console.clear();

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    },
];

// For overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}