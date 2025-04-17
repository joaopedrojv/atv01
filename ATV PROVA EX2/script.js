document.getElementById('limpezaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const area = parseFloat(document.getElementById('area').value);
    const servico = document.getElementById('servico').value;

    let valorBase = 0;
    let servicoNome = '';

    switch (servico) {
        case 'limpezaBasica':
            valorBase = 80;
            servicoNome = 'Limpeza Básica';
            break;
        case 'limpezaProfunda':
            valorBase = 150;
            servicoNome = 'Limpeza Profunda';
            break;
        case 'limpezaCompleta':
            valorBase = 250;
            servicoNome = 'Limpeza Completa';
            break;
        default:
            alert('Por favor, selecione um serviço.');
            return;
    }

    // Calcula o aumento de 5% a cada 20 metros quadrados
    const aumento = Math.floor(area / 20) * 0.05; // 5% para cada 20m²
    const valorFinal = valorBase * (1 + aumento);

    const mensagem = `Nome: ${nome}\nÁrea: ${area} m²\nServiço: ${servicoNome}\nValor do Orçamento: R$ ${valorFinal.toFixed(2)}`;
    alert(mensagem);
});