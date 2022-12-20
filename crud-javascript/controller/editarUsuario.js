//reaproveita do arquivo listarUsuarios.js a variavel id
if(id != null){
  //se é edição
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const nome = document.querySelector('[data-tipo="nome"]');
  const email = document.querySelector('[data-tipo="email"]');
  const senha = document.querySelector('[data-tipo="senha"]');

  //preenche campos no formulario
  nome.value =  usuarios[id].nome;
  email.value = usuarios[id].email;
  senha.value = usuarios[id].senha;

  form.addEventListener('submit', (Event)=>{
    Event.preventDefault();   

    //resgata valores dos camos do formulario
    usuarios[id].email = email.value;
    usuarios[id].nome = nome.value;
    usuarios[id].senha = senha.value;
    
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    window.location.href = '../views/listar.html';
  });
}