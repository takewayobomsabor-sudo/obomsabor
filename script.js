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

function abrirModalMenu() {
    document.getElementById('lista-pratos-dia').innerHTML = menuData.pratos.map(p => `
        <div class="item-menu" onclick="add('${p.n}', ${p.v})"><span>${p.n}</span><b>${p.v.toFixed(2)}€</b></div>
    `).join('');
    document.getElementById('lista-pizzas').innerHTML = menuData.pizzas.map(p => `
        <div class="item-menu" onclick="add('${p.n}', ${p.v})"><span>${p.n}</span><b>${p.v.toFixed(2)}€</b></div>
    `).join('');
    document.getElementById('modal-menu').style.display = 'flex';
}

function fecharModalMenu() { document.getElementById('modal-menu').style.display = 'none'; }
function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('active'); }

function add(n, v) {
    cart.push({n, v});
    document.getElementById('cart-count').innerText = cart.length;
    renderCart();
    fecharModalMenu();
    if(!document.getElementById('cart-sidebar').classList.contains('active')) toggleCart();
}

function renderCart() {
    const list = document.getElementById('cart-items-list');
    let total = 0;
    list.innerHTML = cart.map(item => {
        total += item.v;
        return `<div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #222"><span>${item.n}</span><b>${item.v.toFixed(2)}€</b></div>`;
    }).join('');
    if(document.getElementById('check-saco').checked && cart.length > 0) total += 0.20;
    document.getElementById('cart-total').innerText = total.toFixed(2) + "€";
}

function gerarHoras() {
    const select = document.getElementById('agendar-hora');
    const slots = ["11:45", "12:15", "12:45", "13:15", "13:45", "18:45", "19:15", "19:45", "20:15", "20:40"];
    select.innerHTML = slots.map(h => `<option value="${h}">${h}</option>`).join('');
}

function confirmar() { alert("Pedido Confirmado! Redirecionando para pagamento..."); }

window.onload = gerarHoras;
