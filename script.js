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
    const pratosDiv = document.getElementById('lista-pratos-dia');
    const pizzasDiv = document.getElementById('lista-pizzas');
    
    pratosDiv.innerHTML = menuData.pratos.map(p => `
        <div class="item-menu" onclick="add('${p.n}', ${p.v})">
            <span>${p.n}</span> <b>${p.v.toFixed(2)}€</b>
        </div>
    `).join('');

    pizzasDiv.innerHTML = menuData.pizzas.map(p => `
        <div class="item-menu" onclick="add('${p.n}', ${p.v})">
            <span>${p.n}</span> <b>${p.v.toFixed(2)}€</b>
        </div>
    `).join('');

    document.getElementById('modal-menu').style.display = 'flex';
}

function fecharModalMenu() { document.getElementById('modal-menu').style.display = 'none'; }

function add(n, v) {
    cart.push({n, v});
    document.getElementById('cart-count').innerText = cart.length;
    renderCart();
}

function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('active'); }

function renderCart() {
    const list = document.getElementById('cart-items-list');
    let total = 0;
    list.innerHTML = cart.map(item => {
        total += item.v;
        return `<div style="display:flex; justify-content:space-between; padding:10px 0;"><span>${item.n}</span><b>${item.v.toFixed(2)}€</b></div>`;
    }).join('');
    
    if(document.getElementById('check-saco').checked && cart.length > 0) total += 0.20;
    document.getElementById('cart-total').innerText = total.toFixed(2) + "€";
}

function confirmar() { alert("Pedido enviado! Prepare-se para pagar com MB WAY ou Cartão."); }

// Gerar horas (exemplo simplificado)
const select = document.getElementById('agendar-hora');
["12:00", "12:30", "13:00", "19:00", "19:30", "20:00"].forEach(h => {
    select.innerHTML += `<option value="${h}">${h}</option>`;
});