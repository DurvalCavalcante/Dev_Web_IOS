//Gerando Alerta com OnClick

function alertCookie() {
    alert('Você quer cookie?');
    console.log('Você quer cookie?');
}

//Gerando Alerta com Arrow Function

const alertSucesso = () => {
    alert('Mensage gerada com sucesso!');
    console.log('Mensage gerada com sucesso!');
};

//Criando um Objeto

const notebook = {
    marca: 'Samsung',
    ram: '8GB',
    cor: 'Preta',
    cpu: 'Core-i9',
    sistema: 'Windows10',
};

console.log(notebook);

//Criando uma Conversão 

const soma = (ano = 3, dia = 365) => {
    return ano * dia;
};

console.log('Resultado da conversão de anos para dia:')
console.log(soma());
