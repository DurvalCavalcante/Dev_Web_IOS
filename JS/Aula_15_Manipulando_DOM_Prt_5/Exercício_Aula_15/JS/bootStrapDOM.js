const formAdd = document.getElementById('addForm');
const itemList1 = document.getElementById('itens1');
const itemList2 = document.getElementById('itens2');
const input1 = document.getElementById('item1');
const input2 = document.getElementById('item2');
const input3 = document.getElementById('item3');
const listaCarrinho = document.getElementById('listaCarrinho');

formAdd.addEventListener('submit', btnAdd);

// Adicionando Itens
function btnAdd(e) {
    e.preventDefault();
    let itensAdd = document.getElementById('item1').value;
    let quantidadeAdd = document.getElementById('item2').value;
    let valorAdd = document.getElementById('item3').value;
    let li = document.createElement('li');

    if (quantidadeAdd > 0 && valorAdd > 0) {
        li.classList = 'list-group-item';
        li.innerHTML = `<strong>Item:</strong> ${itensAdd} \\ \\<strong>Quantidade:</strong> ${quantidadeAdd} \\ \\<strong>Valor:</strong> R$ ${valorAdd * quantidadeAdd},00`;

        let deletarBtn = document.createElement('button');
        deletarBtn.className = 'btn btn-danger m-2 btn-sm float-end deletar';
        deletarBtn.appendChild(document.createTextNode('X'));
        deletarBtn.addEventListener('click', removeItem);

        let adicionarBtn = document.createElement('button');
        adicionarBtn.className = 'btn btn-success m-2 btn-sm float-end adicionar';
        adicionarBtn.appendChild(document.createTextNode('+'));
        adicionarBtn.addEventListener('click', adicionarItem);

        let diminuirBtn = document.createElement('button');
        diminuirBtn.className = 'btn btn-primary m-2 btn-sm float-end diminuir';
        diminuirBtn.appendChild(document.createTextNode('-'));
        diminuirBtn.addEventListener('click', diminuirItem);

        li.appendChild(deletarBtn);
        li.appendChild(adicionarBtn);
        li.appendChild(diminuirBtn);
        itemList1.appendChild(li);
        input1.value = '';
        input2.value = '';
        input3.value = '';
    }
    else {
        alert('- Informe um número maior que 0')
    };

    // Remove Item
    function removeItem(e) {
        if (e.target.classList.contains('deletar')) {
            let li = e.target.parentElement;
            itemList1.removeChild(li);
        };
    };

    let saveInputNome = itensAdd;
    let saveInputQuant = Number(quantidadeAdd);
    let saveInputValor = Number(valorAdd);

    // Adicionando Item
    function adicionarItem() {
        if (saveInputQuant >= 0 && saveInputQuant <= 100) {
            let aumentar = saveInputQuant++;
            li.classList = 'list-group-item';
            li.innerHTML = `<strong>Item:</strong> ${saveInputNome} \\ \\<strong>Quantidade:</strong> ${aumentar} \\ \\<strong>Valor:</strong> R$ ${saveInputValor * (aumentar)},00`;

            let deletarBtn = document.createElement('button');
            deletarBtn.className = 'btn btn-danger m-2 btn-sm float-end deletar';
            deletarBtn.appendChild(document.createTextNode('X'));
            deletarBtn.addEventListener('click', removeItem);

            let adicionarBtn = document.createElement('button');
            adicionarBtn.className = 'btn btn-success m-2 btn-sm float-end adicionar';
            adicionarBtn.appendChild(document.createTextNode('+'));
            adicionarBtn.addEventListener('click', adicionarItem);

            let diminuirBtn = document.createElement('button');
            diminuirBtn.className = 'btn btn-primary m-2 btn-sm float-end diminuir';
            diminuirBtn.appendChild(document.createTextNode('-'));
            diminuirBtn.addEventListener('click', diminuirItem);

            li.appendChild(deletarBtn);
            li.appendChild(adicionarBtn);
            li.appendChild(diminuirBtn);
        };
    };

    function diminuirItem() {
        if (saveInputQuant >= 1) {
            let diminuir = saveInputQuant--;
            li.classList = 'list-group-item';
            li.innerHTML = `<strong>Item:</strong> ${saveInputNome} \\ \\<strong>Quantidade:</strong> ${diminuir - 1} \\ \\<strong>Valor:</strong> R$ ${saveInputValor * (diminuir - 1)},00`;

            let deletarBtn = document.createElement('button');
            deletarBtn.className = 'btn btn-danger m-2 btn-sm float-end deletar';
            deletarBtn.appendChild(document.createTextNode('X'));
            deletarBtn.addEventListener('click', removeItem);

            let adicionarBtn = document.createElement('button');
            adicionarBtn.className = 'btn btn-success m-2 btn-sm float-end adicionar';
            adicionarBtn.appendChild(document.createTextNode('+'));
            adicionarBtn.addEventListener('click', adicionarItem);

            let diminuirBtn = document.createElement('button');
            diminuirBtn.className = 'btn btn-primary m-2 btn-sm float-end diminuir';
            diminuirBtn.appendChild(document.createTextNode('-'));
            diminuirBtn.addEventListener('click', diminuirItem);

            li.appendChild(deletarBtn);
            li.appendChild(adicionarBtn);
            li.appendChild(diminuirBtn);
        };
    };
};