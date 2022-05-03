//Estrutura de uma fução
//Sempre quando for chamar uma função, usar sempre o "()".
/*
funtion NomedaFuncao (valor1,valor2){
    return valor1 * valor2

}
*/

//Funções
function AddNums(num1 = 2, num2 = 5) {
    return num1 + num2;
}

console.log(AddNums());

//Se eu quiser alterar o valor das variável
// let x = AddNums(10,11);
// console.log(x);

console.clear();

//Criando Arrow Function
const hello = (primeiro = 2, segundo = 2) => {
    return primeiro * segundo;
};

console.log(hello());

const somaAddNums = (num1 = 4, num2 = 5) => {
    return num1 + num2;
};

console.log(somaAddNums());

//Criando Objetos
const aluno = {
    primeiroNome: 'Durval',
    segundoNome: 'Cavalcante',
    idade: '23',
};

console.clear();

//Criando Evento onload
const boasVindas = () => {
    alert('Bem-Vindo a nossa Página');
    console.log('Bem-Vindo a nossa Página');
};

//Criando Evento onclick
function eventoClick() {
    console.log('Você clicou aqui!');
};
