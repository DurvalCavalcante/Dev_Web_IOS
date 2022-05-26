let formAdd = document.getElementById('addForm');
let itemList1 = document.getElementById('items1');
let itemList2 = document.getElementById('items2');
let filter = document.getElementById('filter');

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

const valores = [
    ['Arroz', '6,00'],
    ['Feijão', '7,00'],
    ['Macarrão', '4,00'],
    ['Leite', '8,00'],
    ['Açucar', '5,00'],
];

formAdd.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    let itens = document.getElementById('item').value;
    let li = document.createElement('li');
    li.classList = 'list-group-item';
    li.appendChild(document.createTextNode(itens));

    let deletarBtn = document.createElement('button');
    deletarBtn.className = 'btn btn-danger btn-sm float-end deletar';
    deletarBtn.appendChild(document.createTextNode('X'));

    let adicionarBtn = document.createElement('button');
    adicionarBtn.className = 'btn btn-success btn-sm float-end adicionar';
    adicionarBtn.appendChild(document.createTextNode('+'));

    let diminuirBtn = document.createElement('button');
    diminuirBtn.className = 'btn btn-danger btn-sm float-end diminuir';
    diminuirBtn.appendChild(document.createTextNode('-'));

    li.appendChild(deletarBtn);
    li.appendChild(adicionarBtn);
    li.appendChild(diminuirBtn);
    itemList1.appendChild(li);
    form.reset();
}