//Solução
console.log('Exercício de Lógica Parte 1 - Salário Mensal');
let salarioAtual = 1400;
let salarioPorcentagem = 13 / 100;
let salarioAjustado = salarioAtual + (salarioPorcentagem * salarioAtual);

//Resultado do Cálculo
const resulSalario = `Seu salário atual é: R$ ${salarioAtual} reais.`;
console.log(resulSalario);
const resulPorcentagem = `Seu valor reajustado será de: R$ ${salarioAtual * salarioPorcentagem} reais.`;
console.log(resulPorcentagem);
const resulAjuste = `Seu valor total com o reajuste será de: R$ ${salarioAjustado} reais.`;
console.log(resulAjuste);
