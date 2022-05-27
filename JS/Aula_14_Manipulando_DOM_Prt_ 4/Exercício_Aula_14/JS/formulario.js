const data = new Date();   // Obtém a data/hora atual
const dia = data.getDate();   // 1-31
const mes = data.getMonth();   // 0-11 (zero=janeiro)
const ano4 = data.getFullYear();   // 4 dígitos
const str_data = dia + '/' + (mes + 1) + '/' + ano4;   // Formata a data e a hora (note o mês + 1)

const myForm = document.getElementById('my-form');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const dataInput = document.getElementById('dataNas');
const itemInput = document.getElementById('item');
const botao1 = document.getElementsByClassName('btn1');
const botao2 = document.getElementsByClassName('btn2');
const divNome = document.getElementsByClassName('divNome');
const lista = document.getElementById('lista');

myForm.addEventListener('submit', onAdd);

function onAdd(e) {
    e.preventDefault();
    if (!confirmandoIdade()) {  // Impede do usuário menor de idade não continuar.
        return
    }

    if (!validandoEmail()) {  // Validando o e-mail
        return
    }
    if (nomeInput.value === '' || emailInput.value === '') {
        divNome.classList.add('erro');
        divNome.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => divNome.innerHTML = '', 4000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nomeInput.value} : ${emailInput.value} : ${dataInput.value}`
            )
        );
        lista.appendChild(li);
        nomeInput.value = '';
        emailInput.value = '';
        dataInput.value = '';
        nomeInput.focus();
    }
}

function confirmandoIdade() {
    let age = new Date(dataInput.value)
    let idade = data.getFullYear() - age.getFullYear();
    if (data.getMonth() < age.getMonth()) idade--;
    else if (data.getMonth() == age.getMonth() && data.getDate() < age.getDate() + 1) idade--;

    // Validando a idade
    if (idade < 18) {
        alert('Você é menor de idade.\nEsse site é só para maiores de 18 anos');
        return false;
    }
    return true;
}

function validandoEmail() {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (padrao.test(emailInput.value)) {
        return true;
    }
    alert('E-mail inválido, Por favor preencha corretamente.')
    return false;
}

let formulario2 = document.getElementById('my-form2');
formulario2.addEventListener('click', onRemovendo);

function onRemovendo() {
    let usuario = lista.getElementById('li');
    let valor = parseInt[item.value];
    let li = usuario[valor];
    li.remove();
}