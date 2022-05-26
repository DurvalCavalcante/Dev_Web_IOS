let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', buscarItems);

// Adiciona item
function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('item').value; // Pega o valor do <input>    
    let li = document.createElement('li'); // Cria novo elemento <li>     
    li.className = 'list-group-item'; // Adiciona classe    
    li.appendChild(document.createTextNode(newItem)); // Adiciona o texto no novo elemento com o valor armazenado no newItem   
    let deleteBtn = document.createElement('button'); // Cria o elemento botão para deletar um item
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'; // Adiciona classes para o botão de deletar
    deleteBtn.appendChild(document.createTextNode('X')); // Acrescenta o texto no novo elemento
    li.appendChild(deleteBtn); // Acrescenta o botão no elemento li
    itemList.appendChild(li); // Adiciona o novo item na lista
    form.reset(); // Limpa o formulário
}

// Função Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Função buscarItems
function buscarItems(e) {
    // Converte o texto digitado para minúsculo
    let text = e.target.value.toLowerCase();
    // Busca todos os itens
    let items = itemList.getElementsByTagName('li');
    // Converte os itens para array
    Array.from(items).forEach(function (item) {
        // Busca o primeiro item da lista
        let itemName = item.firstChild.textContent;
        // Busca o item na lista que começa com o mesmo texto digitado
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'; // exibe o item
        } else {
            item.style.display = 'none'; // oculta o item
        }
    });
}