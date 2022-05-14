const colaboradores = [
    {
        nome: 'Bruno Do Nascimento',
        salario: 1354,
        porcentagem: 7.5 / 100,
    },

    {
        nome: 'Francisco Da Silva',
        salario: 2418,
        porcentagem: 9 / 100,
    },

    {
        nome: 'Camila Barbosa',
        salario: 2675,
        porcentagem: 12 / 100,
    },

    {
        nome: 'Amanda Almeida',
        salario: 5715,
        porcentagem: 14 / 100,
    },

    {
        nome: 'Jeferson Andrade',
        salario: 6530,
        porcentagem: 14 / 100,
    },
];


console.log(`\n> A lista dos colaboradores da empresa são:`);
console.log(`\n- Nome: ${colaboradores[0].nome}, tem o salário de: ${colaboradores[0].salario}`);
console.log(`\n- Nome: ${colaboradores[1].nome}, tem o salário de: ${colaboradores[1].salario}`);
console.log(`\n- Nome: ${colaboradores[2].nome}, tem o salário de: ${colaboradores[2].salario}`);
console.log(`\n- Nome: ${colaboradores[3].nome}, tem o salário de: ${colaboradores[3].salario}`);
console.log(`\n- Nome: ${colaboradores[4].nome}, tem o salário de: ${colaboradores[4].salario}`);

console.log('\n> Valor de INSS e o Regime de cada colaborador são:');

const regime1 = 'CLT';
const regime2 = 'PJ';
const valor = 0;

if (colaboradores[0].salario * colaboradores[0].porcentagem <= 430) {
    console.log(`\n* O regime de ${colaboradores[0].nome} é: \'${regime1}\', com a contribuição de: ${colaboradores[0].salario * colaboradores[0].porcentagem}`);
} else if (colaboradores[0].salario * colaboradores[0].porcentagem >= 431) {
    console.log(`\n* O regime de ${colaboradores[0].nome} é: \'${regime2}\', com a contribuição de: ${valor}`);
}

if (colaboradores[1].salario * colaboradores[1].porcentagem <= 430) {
    console.log(`\n* O regime de ${colaboradores[1].nome} é: \'${regime1}\', com a contribuição de: ${colaboradores[1].salario * colaboradores[1].porcentagem}`);
} else if (colaboradores[1].salario * colaboradores[1].porcentagem >= 431) {
    console.log(`\n* O regime de ${colaboradores[1].nome} é: \'${regime2}\', com a contribuição de: ${valor}`);
}

if (colaboradores[2].salario * colaboradores[2].porcentagem <= 430) {
    console.log(`\n* O regime de ${colaboradores[2].nome} é: \'${regime1}\', com a contribuição de: ${colaboradores[2].salario * colaboradores[2].porcentagem}`);
} else if (colaboradores[2].salario * colaboradores[2].porcentagem >= 431) {
    console.log(`\n* O regime de ${colaboradores[2].nome} é: \'${regime2}\', com a contribuição de: ${valor}`);
}

if (colaboradores[3].salario * colaboradores[3].porcentagem <= 430) {
    console.log(`\n* O regime de ${colaboradores[3].nome} é: \'${regime1}\', com a contribuição de: ${colaboradores[3].salario * colaboradores[3].porcentagem}`);
} else if (colaboradores[3].salario * colaboradores[3].porcentagem >= 431) {
    console.log(`\n* O regime de ${colaboradores[3].nome} é: \'${regime2}\', com a contribuição de: ${valor}`);
}

if (colaboradores[4].salario * colaboradores[4].porcentagem <= 430) {
    console.log(`\n* O regime de ${colaboradores[4].nome} é: \'${regime1}\', com a contribuição de: ${colaboradores[14].salario * colaboradores[4].porcentagem}`);
} else if (colaboradores[4].salario * colaboradores[4].porcentagem >= 431) {
    console.log(`\n* O regime de ${colaboradores[4].nome} é: \'${regime2}\', com a contribuição de: ${valor}`);
}