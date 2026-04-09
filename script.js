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
    document.getElementById('lista-pratos-dia').innerHTML = "<h3 style='color:#a35d14'>Pratos</h3>" + menuData.pratos.map(p => `
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
    toggleCart();
}

function renderCart() {
    const total = cart.reduce((acc, item) => acc + item.v, 0);
    document.getElementById('cart-items-list').innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #222"><span>${item.n}</span><b>${item.v.toFixed(2)}€</b></div>
    `).join('');
    document.getElementById('cart-total').innerText = total.toFixed(2) + "€";
}

function confirmar() { alert("Pedido recebido!"); }
