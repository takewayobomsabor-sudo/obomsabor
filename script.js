const produtos = {
    pratos: [
        { id: 1, nome: "Bacalhau com Natas", preco: 9.00 },
        { id: 2, nome: "Feijoada de Linguirão", preco: 9.00 },
        { id: 3, nome: "Panados de Frango", preco: 9.00 }
    ],
    pizzas: [
        { id: 4, nome: "Pizza Portuguesa", preco: 7.00 },
        { id: 5, nome: "Pizza Camponesa", preco: 7.00 },
        { id: 6, nome: "Pizza de Mar", preco: 7.00 }
    ]
};

let cesto = [];

function abrirMenu() { document.getElementById('modal-menu').style.display = 'block'; }
function fecharMenu() { document.getElementById('modal-menu').style.display = 'none'; }
function toggleCart() { document.getElementById('carrinho').classList.toggle('active'); }

function renderMenu() {
    const pratosDiv = document.getElementById('lista-pratos');
    const pizzasDiv = document.getElementById('lista-pizzas');

    pratosDiv.innerHTML = produtos.pratos.map(p => `
        <div class="item-menu" onclick="addAoCesto('${p.nome}', ${p.preco})">
            <span>${p.nome}</span>
            <span>${p.preco.toFixed(2)}€</span>
        </div>
    `).join('');

    pizzasDiv.innerHTML = produtos.pizzas.map(p => `
        <div class="item-menu" onclick="addAoCesto('${p.nome}', ${p.preco})">
            <span>${p.nome}</span>
            <span>${p.preco.toFixed(2)}€</span>
        </div>
    `).join('');
}

function addAoCesto(nome, preco) {
    cesto.push({ nome, preco });
    atualizarCesto();
    fecharMenu();
    if(!document.getElementById('carrinho').classList.contains('active')) toggleCart();
}

function atualizarCesto() {
    const itensDiv = document.getElementById('itens-carrinho');
    const totalSpan = document.getElementById('total-valor');
    const countSpan = document.getElementById('cart-count');

    itensDiv.innerHTML = cesto.map(i => `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <span>${i.nome}</span><span>${i.preco.toFixed(2)}€</span>
        </div>
    `).join('');

    const total = cesto.reduce((acc, i) => acc + i.preco, 0);
    totalSpan.innerText = total.toFixed(2) + "€";
    countSpan.innerText = cesto.length;
}

function finalizarPedido() {
    const msg = encodeURIComponent(`Olá! Gostaria de encomendar: \n${cesto.map(i => "- " + i.nome).join('\n')}\nTotal: ${document.getElementById('total-valor').innerText}`);
    window.open(`https://wa.me/351912345678?text=${msg}`);
}

renderMenu();
