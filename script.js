const diasSemana = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"];
const hoje = new Date();
const nomeDia = diasSemana[hoje.getDay()];

const menu = {
    pratos: [
        { n: "Bacalhau com natas", p_meia: 6.50, p_inteira: 9.00 },
        { n: "Feijoada de Linguirão", p_meia: 7.00, p_inteira: 10.00 },
        { n: "Panados de Frango", p_meia: 6.00, p_inteira: 9.00 }
    ],
    pizzas: [
        { n: "Pizza Portuguesa", v: 7.00 },
        { n: "Pizza Camponesa", v: 7.00 }
    ]
};

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    // Atualiza o botão com o dia correto
    const btnMenu = document.getElementById('btn-abrir-menu');
    btnMenu.innerText = `VER MENU ${nomeDia} E PEDIR`;

    btnMenu.onclick = () => {
        document.getElementById('modal-menu').style.display = 'block';
        renderMenu();
    };
});

function renderMenu() {
    // Renderiza Pratos com escolha de dose
    document.getElementById('lista-pratos').innerHTML = `<h3>PRATOS DO DIA: ${nomeDia}</h3>` + 
    menu.pratos.map(p => `
        <div class="item-card">
            <span class="item-nome">${p.n}</span>
            <div class="opcoes-dose">
                <button onclick="add('${p.n} (1/2 dose)', ${p.p_meia})">1/2 Dose - ${p.p_meia.toFixed(2)}€</button>
                <button onclick="add('${p.n} (Inteira)', ${p.p_inteira})">Inteira - ${p.p_inteira.toFixed(2)}€</button>
            </div>
        </div>
    `).join('');

    // Renderiza Pizzas (dose única)
    document.getElementById('lista-pizzas').innerHTML = `<h3>PIZZAS</h3>` + 
    menu.pizzas.map(p => `
        <div class="item-card">
            <span class="item-nome">${p.n}</span>
            <button class="btn-add-simples" onclick="add('${p.n}', ${p.v})">${p.v.toFixed(2)}€</button>
        </div>
    `).join('');
}

function add(nome, preco) {
    cart.push({ n: nome, v: preco });
    document.getElementById('cart-count').innerText = cart.length;
    atualizarCarrinho();
    // Feedback visual de que adicionou
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "✓ OK";
    setTimeout(() => { btn.innerText = originalText; }, 800);
}

function atualizarCarrinho() {
    const total = cart.reduce((acc, i) => acc + i.v, 0);
    document.getElementById('itens-lista').innerHTML = cart.map((i, index) => `
        <div class="cart-item">
            <span>${i.n}</span>
            <b>${i.v.toFixed(2)}€ <i class="fa-solid fa-trash" onclick="remover(${index})"></i></b>
        </div>
    `).join('');
    document.getElementById('valor-total').innerText = total.toFixed(2) + "€";
}

function remover(index) {
    cart.splice(index, 1);
    document.getElementById('cart-count').innerText = cart.length;
    atualizarCarrinho();
}
