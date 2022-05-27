const formAdd = document.getElementById('addForm');
const itemList1 = document.getElementById('itens1');
const itemList2 = document.getElementById('itens2');
const filter = document.getElementById('filter');
const input1 = document.getElementById('item1');
const input2 = document.getElementById('item2');
const input3 = document.getElementById('item3');
const listaCarrinho = document.getElementById('listaCarrinho');


const itens = [
    {
        item: 'Arroz',
        quantidade: 1,
        valor: '6,00',
    },

    {
        item: 'Feijão',
        quantidade: 1,
        valor: '7,00'
    },

    {
        item: 'Macarrão',
        quantidade: 1,
        valor: '4,00'
    },

    {
        item: 'Leite',
        quantidade: 1,
        valor: '8,00'
    },

    {
        item: 'Açucar',
        quantidade: 1,
        valor: '5,00',
    }
];

formAdd.addEventListener('submit', addItem);

// Adicionando Itens
function addItem(e) {
    e.preventDefault();

    let itensAdd = document.getElementById('item1').value;
    let quantidadeAdd = document.getElementById('item2').value;
    let valorAdd = document.getElementById('item3').value;
    let li = document.createElement('li');
    li.classList = 'list-group-item';
    li.appendChild(document.createTextNode(`Item: ${itensAdd} \\ Quantidade: ${quantidadeAdd} \\ R$ ${valorAdd},00`));

    let deletarBtn = document.createElement('button');
    deletarBtn.className = 'btn btn-danger m-2 btn-sm float-end deletar';
    deletarBtn.appendChild(document.createTextNode('X'));

    let adicionarBtn = document.createElement('button');
    adicionarBtn.className = 'btn btn-success m-2 btn-sm float-end adicionar';
    adicionarBtn.appendChild(document.createTextNode('+'));

    let diminuirBtn = document.createElement('button');
    diminuirBtn.className = 'btn btn-secondary m-2 btn-sm float-end diminuir';
    diminuirBtn.appendChild(document.createTextNode('-'));

    li.appendChild(deletarBtn);
    li.appendChild(adicionarBtn);
    li.appendChild(diminuirBtn);
    itemList1.appendChild(li);
    input1.value = '';
    input2.value = '';
    input3.value = '';
}

listaCarrinho.addEventListener('click', removeItem);

// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('deletar')) {
        let li = e.target.parentElement;
        itemList1.removeChild(li);
    }
}