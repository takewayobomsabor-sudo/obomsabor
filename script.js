function gerarHoras() {
    const select = document.getElementById('agendar-hora');
    let options = "";
    
    // Almoço (11:45 - 13:45)
    const horasAlmoco = ["11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45"];
    // Jantar (18:45 - 20:30)
    const horasJantar = ["18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30"];

    const todos = [...horasAlmoco, ...horasJantar];
    select.innerHTML = todos.map(h => `<option value="${h}">${h}</option>`).join('');
}
// Não esqueças de chamar a função window.onload = () => { gerarHoras(); init(); }
