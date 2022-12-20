tabela.addEventListener('click', (Event)=>{
  //verifica o botão que foi clicado de acordo com a classe
  const isExcluir = Event.target.className == 'botao-simples botao-simples--excluir';
  if(isExcluir){
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const linhaCliente = Event.target.closest('[data-id]');
    let id = linhaCliente.dataset.id;

    usuarios.splice(id, 1); //deletando registro
    
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    linhaCliente.remove();//rermovendo do html
  }
})