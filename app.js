
document.addEventListener('DOMContentLoaded', iniciarApp);


function iniciarApp() {

    let listaDeCompras = [];

    let itensIniciais = ['arroz', 'feijão', 'macarrão'];

    let listaElement = document.getElementById('listaDeCompras');
    let botaoAdicionar = document.getElementById('adicionarItemBtn');
    let campoInput = document.getElementById('itemInput');

    inicializarLista(itensIniciais);


    botaoAdicionar.addEventListener('click', adicionarMaisItens);

  
    function inicializarLista(itens) {
        for (let i = 0; i < itens.length; i++) {
            adicionarItem(itens[i]);
        }
    }

   
    function adicionarItem(item) {
        listaDeCompras.push(item);      
        adicionarItemNoDOM(item);        
    }


    function adicionarItemNoDOM(item) {
        let li = document.createElement('li');
        li.textContent = item;
        listaElement.appendChild(li);
    }

    function adicionarMaisItens() {
        if (listaDeCompras.length >= 5) {
            alert('Sua lista está completa.');
            return; 
        }

        let novoItem = campoInput.value.trim();

        if (novoItem === '') {
            alert('Digite um item válido!');
            return;
        }

        adicionarItem(novoItem);


        alert('Item adicionado com sucesso!');


        campoInput.value = '';
        campoInput.focus();


        if (listaDeCompras.length >= 5) {
            alert('Sua lista está completa.');
        }
    }
}
