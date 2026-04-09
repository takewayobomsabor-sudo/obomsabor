const produtos = {
    pratos: [
        { nome: "Bacalhau com Natas", preco: 9.00 },
        { nome: "Feijoada de Linguirão", preco: 9.00 },
        { nome: "Panados de Frango", preco: 9.00 }
    ],
    pizzas: [
        { nome: "Pizza Portuguesa", preco: 7.00 },
        { nome: "Pizza Camponesa", preco: 7.00 },
        { nome: "Pizza de Mar", preco: 7.00 }
    ]
};

let cesto = [];

// FUNÇÃO PARA ABRIR NO TELEMÓVEL
document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.getElementById('botao-abrir-menu');
    const btnFechar = document.getElementById('botao-fechar-menu');
    const modal = document.getElementById('modal-menu');

    if(btnAbrir) {
        btnAbrir.addEventListener('click', () => {
            modal.style.display = 'block';
            renderMenu();
        });
        // Suporte extra para toque rápido em telemóveis
        btnAbrir.addEventListener('touchstart', (e) => {
            modal.style.display = 'block';
            renderMenu();
        }, {passive: true});
    }

    if(btnFechar) {
        btnFechar.addEventListener('click', () => modal.style.display = 'none');
    }
});

function toggleCart() {
    document.getElementById('carrinho').classList.toggle('active');
}

function renderMenu() {
    document.getElementById('lista-pratos').innerHTML = produtos.pratos.map(p => `
        <div class="item-menu" onclick="addAoCesto('${p.nome}', ${p.preco})">
            <span>${p.nome}</span><b>${p.preco.toFixed(2)}€</b>
        </div>
    `).join('');

    document.getElementById('lista-pizzas').innerHTML = produtos.pizzas.map(p => `
        <div class="item-menu" onclick="addAoCesto('${p.nome}', ${p.preco})">
            <span>${p.nome}</span><b>${p.preco.toFixed(2)}€</b>
        </div>
    `).join('');
}

function addAoCesto(nome, preco) {
    cesto.push({ nome, preco });
    document.getElementById('cart-count').innerText = cesto.length;
    document.getElementById('modal-menu').style.display = 'none';
    atualizarCesto();
    toggleCart();
}

function atualizarCesto() {
    const total = cesto.reduce((acc, i) => acc + i.preco, 0);
    document.getElementById('itens-carrinho').innerHTML = cesto.map(i => `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <span>${i.nome}</span><b>${i.preco.toFixed(2)}€</b>
        </div>
    `).join('');
    document.getElementById('total-valor').innerText = total.toFixed(2) + "€";
}

function finalizarPedido() {
    alert("Pedido confirmado! Obrigado.");
    cesto = [];
    atualizarCesto();
    toggleCart();
}
