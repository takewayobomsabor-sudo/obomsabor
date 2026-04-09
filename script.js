const menuData = {
    pratos: [
        {n: "Bacalhau com natas", v: 9.00},
        {n: "Feijoada de Linguirão", v: 9.00},
        {n: "Panados de Frango", v: 9.00}
    ],
    pizzas: [
        {n: "Pizza Portuguesa", v: 7.00},
        {n: "Pizza Camponesa", v: 7.00},
        {n: "Pizza do Mar", v: 7.00}
    ]
};

let cart = [];

// Função principal de abertura
function abrirModalMenu() {
    const modal = document.getElementById('modal-menu');
    const pratosDiv = document.getElementById('lista-pratos-dia');
    const pizzasDiv = document.getElementById('lista-pizzas');

    if (!modal || !pratosDiv || !pizzasDiv) return;

    pratosDiv.innerHTML = menuData.pratos.map(p => `
        <div class="item-menu" onclick="add('${p.n}', ${p.v})">
            <span>${p.n}</span><b>${p.v.toFixed(2)}€</b>
        </div>
    `).join('');

    pizzasDiv.innerHTML = menuData.pizzas.map(p => `
        <div class="item-menu" onclick="add('${p.n}', ${p.v})">
            <span>${p.n}</span><b>${p.v.toFixed(2)}€</b>
        </div>
    `).join('');

    modal.style.display = 'flex';
    // Bloqueia o scroll do fundo para melhor experiência mobile
    document.body.style.overflow = 'hidden';
}

function fecharModalMenu() {
    document.getElementById('modal-menu').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function add(n, v) {
    cart.push({n, v});
    document.getElementById('cart-count').innerText = cart.length;
    renderCart();
    fecharModalMenu();
    // Abre o carrinho automaticamente ao adicionar
    setTimeout(() => { toggleCart(); }, 300);
}

function renderCart() {
    const list = document.getElementById('cart-items-list');
    const totalDisplay = document.getElementById('cart-total');
    let total = 0;

    list.innerHTML = cart.map(item => {
        total += item.v;
        return `<div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #222">
                    <span>${item.n}</span><b>${item.v.toFixed(2)}€</b>
                </div>`;
    }).join('');

    if(document.getElementById('check-saco').checked && cart.length > 0) total += 0.20;
    totalDisplay.innerText = total.toFixed(2) + "€";
}

function gerarHoras() {
    const select = document.getElementById('agendar-hora');
    const slots = ["11:45", "12:15", "12:45", "13:15", "13:45", "18:45", "19:15", "19:45", "20:15", "20:40"];
    if(select) select.innerHTML = slots.map(h => `<option value="${h}">${h}</option>`).join('');
}

// GARANTIA PARA TELEMÓVEL: Ativa o botão assim que a página carrega
document.addEventListener('DOMContentLoaded', () => {
    gerarHoras();
    const btn = document.getElementById('btn-menu');
    if (btn) {
        btn.addEventListener('touchstart', (e) => {
            // Previne comportamento duplo mas abre o menu
            abrirModalMenu();
        }, {passive: true});
    }
});

function confirmar() {
    if(cart.length === 0) return alert("O seu cesto está vazio!");
    alert("Pedido Confirmado! Prepare o seu MB WAY.");
}
