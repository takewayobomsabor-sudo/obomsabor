const menu = {
    pratos: [
        { n: "Bacalhau com natas", v: 9.00 },
        { n: "Feijoada de Linguirão", v: 9.00 },
        { n: "Panados de Frango", v: 9.00 }
    ],
    pizzas: [
        { n: "Pizza Portuguesa", v: 7.00 },
        { n: "Pizza Camponesa", v: 7.00 },
        { n: "Pizza de Mar", v: 7.00 }
    ]
};

let cart = [];

// FUNCIONAMENTO DO BOTÃO (PC E TELEMÓVEL)
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-menu');
    const btn = document.getElementById('btn-abrir-menu');
    const close = document.querySelector('.fechar-modal');

    btn.onclick = () => { modal.style.display = 'block'; renderMenu(); };
    close.onclick = () => { modal.style.display = 'none'; };
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };
});

function renderMenu() {
    document.getElementById('lista-pratos').innerHTML = "<h3>Pratos</h3>" + menu.pratos.map(p => `
        <div class="item-menu" onclick="add('${p.n}', ${p.v})"><span>${p.n}</span><b>${p.v.toFixed(2)}€</b></div>
    `).join('');
    document.getElementById('lista-pizzas').innerHTML = "<h3>Pizzas</h3>" + menu.pizzas.map(p => `
        <div class="item-menu" onclick="add('${p.n}', ${p.v})"><span>${p.n}</span><b>${p.v.toFixed(2)}€</b></div>
    `).join('');
}

function toggleCart() { document.getElementById('carrinho-lateral').classList.toggle('active'); }

function add(n, v) {
    cart.push({ n, v });
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('modal-menu').style.display = 'none';
    atualizar();
    toggleCart();
}

function atualizar() {
    const total = cart.reduce((acc, i) => acc + i.v, 0);
    document.getElementById('itens-lista').innerHTML = cart.map(i => `
        <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #222"><span>${i.n}</span><b>${i.v.toFixed(2)}€</b></div>
    `).join('');
    document.getElementById('valor-total').innerText = total.toFixed(2) + "€";
}

function finalizar() { alert("Pedido confirmado!"); }
