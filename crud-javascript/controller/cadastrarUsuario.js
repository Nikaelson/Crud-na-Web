//Para melhor reaproveitamento da view, foi escolhio fazer essa 
//parte de código para verificar se é edição ou novo cadastro
const url = new URL(window.location);
const id = url.searchParams.get('id');
const form = document.querySelector('[data-form]');

if(id == null){
  //se não é edição
  form.addEventListener('submit', (Event)=>{
    Event.preventDefault();
    
    const nome = Event.target.querySelector('[data-tipo="nome"]').value
    const email = Event.target.querySelector('[data-tipo="email"]').value
    const senha = Event.target.querySelector('[data-tipo="senha"]').value

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let lastId = usuarios.length-1;
    let dados = {
      id: usuarios.length<1?0:usuarios[lastId].id + 1, //incrementando id
      nome: nome,
      email: email,
      senha: senha
    }

    const usuariosAtualizados = [...usuarios, dados];
    localStorage.setItem('usuarios', JSON.stringify(usuariosAtualizados));

    window.location.href = '../crud-javascript/views/listar.html';
  })
}