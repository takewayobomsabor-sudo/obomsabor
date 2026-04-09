function abrirModalMenu() {
    const modal = document.getElementById('modal-menu');
    modal.style.display = 'flex';
    
    // Preenche os pratos (exemplo)
    document.getElementById('lista-pratos-dia').innerHTML = `
        <div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #222">
            <span>Bacalhau com natas</span> <b>9.00€</b>
        </div>`;
}

function fecharModalMenu() {
    document.getElementById('modal-menu').style.display = 'none';
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

// Garante que o botão funciona após carregar a página
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site pronto");
});
