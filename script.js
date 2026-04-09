// Fechar modal se clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal-menu');
    if (event.target == modal) {
        fecharModalMenu();
    }
}

// O resto das funções (abrirModalMenu, add, renderCart) mantém-se igual
