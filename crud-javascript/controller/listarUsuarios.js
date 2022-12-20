function criaNovaLinha(nome, email, id, senha){
  const linhaNovoCliente = document.createElement('tr');
  linhaNovoCliente.classList.add('corpo');
  const conteudo = `
    <td class="td nome" data-td>${nome}</td>
    <td class="td" data-td>${senha}</td>
    <td class="email">${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="/index.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
  `;
  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id;

  return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]');

//encapsulando a função de renderizar
const render = ()=>{
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
  usuarios.forEach((usuario, index)=> {
      tabela.appendChild(criaNovaLinha(usuario.nome, usuario.email,index, usuario.senha));
    }); 
}
render();