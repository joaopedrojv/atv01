const input = document.getElementById('nova-tarefa');
const btn = document.getElementById('adicionar');
const lista = document.getElementById('lista-tarefas');

// Evento para adicionar tarefa
btn.addEventListener('click', function () {
  const texto = input.value.trim();

  if (texto) {
    // Cria o <li> com o texto da tarefa
    const li = document.createElement('li');
    li.textContent = texto;

    // Cria botão de remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.style.marginLeft = '10px';

    // Adiciona funcionalidade ao botão
    btnRemover.addEventListener('click', function () {
      li.remove(); // Remove o <li> da lista
    });

    // Adiciona botão ao <li>
    li.appendChild(btnRemover);

    // Adiciona <li> na <ul>
    lista.appendChild(li);

    // Limpa o campo
    input.value = '';
  }
});
