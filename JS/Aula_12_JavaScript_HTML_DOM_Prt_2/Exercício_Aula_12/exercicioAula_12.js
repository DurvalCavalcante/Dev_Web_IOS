console.log('\t--- Exercício Aula 12 de JS ---');
document.body.style.background = '#e2d9db'

let botao = document.getElementsByClassName('B_12');
let id_1 = document.getElementById('B_01');
let id_2 = document.getElementById('B_02');
let id_3 = document.getElementById('B_03');

for (let b = 0; b < botao.length; b++) {
    botao[b].style.border = 'solid 2px #D9BC66';
    botao[b].style.padding = '.5rem';
    botao[b].style.background = '#BFBFBF';
    botao[b].style.margin = '.7rem';
}

id_1.addEventListener('click', clicar_01);
id_2.addEventListener('click', clicar_02);
id_3.addEventListener('click', clicar_03);

// Utilizando o DOM, insira uma imagem da série Umbrella Academy ao lado do botão e mude a cor da body.
function clicar_01() {
    id_1.innerText = ' The Umbrella Academy';
    document.body.style.background = '#262525';
    let container = document.querySelector('#container');
    let div_01 = document.createElement('div');
    div_01.classList = 'div1';
    let img_01 = document.querySelector('#container #B_02');
    container.insertBefore(div_01, img_01);
    div_01.innerHTML = "<img src='IMG/TheUmbrellaAcademy_logo.png'>";
}

/* terá que aparecer um prompt no browser solicitando o nome do usuário, e quando o nome for informado e o usuário clicar em OK,
o nome deverá aparecer abaixo do botão com uma mensagem. */

function clicar_02() {
    let nome = prompt('Informe aqui seu Nome e Sobrenome:');
    let container = document.querySelector('#container');
    let texto = document.createElement('p');
    texto.classList = 'texto';
    let texto_01 = document.querySelector('#container #B_03');
    container.insertBefore(texto, texto_01);
    texto.innerHTML = `Olá ${nome}! Bem-vindo a nossa academia.`;
    texto.style.color = 'white';
}

/*No browser deve aparecer um prompt perguntando um número para o usuário logo após informar o número ele deve 
retornar abaixo do botão a tabuada do número informado.*/

function clicar_03() {
    let contador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let receber = prompt('Digite aqui um número de 1 a 10:')

    do {
        console.log(`\n${receber} X ${contador[0]} = ${receber * contador[0]}`);
        tabuada.innerHTML += `${receber} X ${contador[0]} = <strong>${receber * contador[0]}<strong></br>`
        contador[0]++

    } while (contador[0] <= 10);
}

