let totalGeral = 0;
let carrinhoItens = []; // Array para armazenar os itens do carrinho
limpar();
function adicionar() {
    // Recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; // Pega o que está ANTES do "-"
    let valorUnitario = parseFloat(produto.split('R$')[1]); // Pega o que está DEPOIS do "R$"
    let quantidade = parseInt(document.getElementById('quantidade').value, 10); // Especifica a base numérica que deve ser usada para a conversão, que é a base 10 (decimal).
    // Verificar se a quantidade é válida
    if (!quantidade || quantidade <= 0) {
        alert('Quantidade inválida');
    } else {
        // Verificar se o item já está no carrinho
        let itemExistente = carrinhoItens.find(item => item.nome === nomeProduto);
        if (itemExistente) {
            // Se o item já existe, incrementar a quantidade e atualizar o preço
            itemExistente.quantidade += quantidade;
            itemExistente.preco += quantidade * valorUnitario;
        } else {
            // Se o item não existe, adicionar um novo item ao carrinho
            carrinhoItens.push({
                nome: nomeProduto,
                quantidade: quantidade,
                preco: quantidade * valorUnitario
            });
        }

        // Atualizar a interface do carrinho
        atualizarCarrinho();
        // Atualizar o valor total
        totalGeral += quantidade * valorUnitario;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
    }
    // Limpar o campo de quantidade
    document.getElementById('quantidade').value = '';
}

function atualizarCarrinho() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = ''; // Limpar a lista de produtos

    carrinhoItens.forEach(item => {
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$ ${item.preco}</span>
        </section>`;
    });
}

function limpar() {
    totalGeral = 0;
    carrinhoItens = []; // Esvaziar o array do carrinho
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
