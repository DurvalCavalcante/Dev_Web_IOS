const colaboradores = [
    {
        nome: 'Bruno Do Nascimento',
        salario: 1354,
        vinculo: 'CLT',
        porcentagem: 7.5 / 100,
    },

    {
        nome: 'Francisco Da Silva',
        salario: 2530,
        vinculo: 'CLT',
        porcentagem: 9 / 100,
    },

    {
        nome: 'Camila Barbosa',
        salario: 2675,
        vinculo: 'CLT',
        porcentagem: 12 / 100,
    },

    {
        nome: 'Amanda Almeida',
        salario: 5715,
        vinculo: 'PJ',
        porcentagem: 14 / 100,
    },

    {
        nome: 'Jeferson Andrade',
        salario: 6530,
        vinculo: 'PJ',
        porcentagem: 14 / 100,
    },
];


console.log(`\nA lista dos colaboradores da empresa são:`);
console.log(`\nNome: ${colaboradores[0].nome}, tem o salário de: ${colaboradores[0].salario} e seu regime: ${colaboradores[0].vinculo}`);
console.log(`\nNome: ${colaboradores[1].nome}, tem o salário de: ${colaboradores[1].salario} e seu regime: ${colaboradores[1].vinculo}`);
console.log(`\nNome: ${colaboradores[2].nome}, tem o salário de: ${colaboradores[2].salario} e seu regime: ${colaboradores[2].vinculo}`);
console.log(`\nNome: ${colaboradores[3].nome}, tem o salário de: ${colaboradores[3].salario} e seu regime: ${colaboradores[3].vinculo}`);
console.log(`\nNome: ${colaboradores[4].nome}, tem o salário de: ${colaboradores[4].salario} e seu regime: ${colaboradores[4].vinculo}`);

console.log('\nValor de INSS de cada colaborador:');
console.log(`\nNome: ${colaboradores[0].nome}, tem o valor de INSS: ${colaboradores[0].salario * colaboradores[0].porcentagem}`);
console.log(`\nNome: ${colaboradores[1].nome}, tem o valor de INSS: ${colaboradores[1].salario * colaboradores[1].porcentagem}`);
console.log(`\nNome: ${colaboradores[2].nome}, tem o valor de INSS: ${colaboradores[2].salario * colaboradores[2].porcentagem}`);
console.log(`\nNome: ${colaboradores[3].nome}, tem o valor de INSS: ${colaboradores[3].salario * colaboradores[3].porcentagem}`);
console.log(`\nNome: ${colaboradores[4].nome}, tem o valor de INSS: ${colaboradores[4].salario * colaboradores[4].porcentagem}`);