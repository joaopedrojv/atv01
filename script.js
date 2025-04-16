document.getElementById('jardinagemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const area = parseFloat(document.getElementById('area').value);
    const servico = document.getElementById('servico').value;

    let valorBase = 0;
    let servicoNome = '';

    switch (servico) {
        case 'poda':
            valorBase = 100;
            servicoNome = 'Poda';
            break;
        case 'jardinagem':
            valorBase = 150;
            servicoNome = 'Jardinagem';
            break;
        case 'jardinagemCompleta':
            valorBase = 300;
            servicoNome = 'Jardinagem Completa';
            break;
        default:
            alert('Por favor, selecione um serviço.');
            return;
    }

    // Calcula o aumento de 10% a cada 10 metros quadrados
    const aumento = Math.floor(area / 10) * 0.10; // 10% para cada 10m²
    const valorFinal = valorBase * (1 + aumento);

    const mensagem = `Nome: ${nome}\nÁrea: ${area} m²\nServiço: ${servicoNome}\nValor do Orçamento: R$ ${valorFinal.toFixed(2)}`;
    alert(mensagem);
});