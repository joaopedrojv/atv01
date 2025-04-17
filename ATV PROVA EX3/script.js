
  const form = document.getElementById('form-orcamento');
  const lista = document.getElementById('lista-servicos');
  const totalSpan = document.getElementById('total');
  
  let total = 0;
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nome = document.getElementById('servico').value;
    const valor = parseFloat(document.getElementById('valor').value);
  
    if (nome && !isNaN(valor)) {
      const li = document.createElement('li');
      li.textContent = `${nome} - R$ ${valor.toFixed(2)}`;
      lista.appendChild(li);
  
      total += valor;
      totalSpan.textContent = total.toFixed(2);
  
      form.reset();
    }
  });
    