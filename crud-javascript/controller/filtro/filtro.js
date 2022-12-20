const filtro = document.querySelector('#filtro');
const linhasTabela = document.querySelectorAll('.corpo');

filtro.addEventListener('input', (Event)=>{
  if(filtro.value != ''){
    let inputValue =filtro.value.toLowerCase();
    for(let linha of linhasTabela){
      let nome = linha.querySelector('.nome');
      let email = linha.querySelector('.email');
      nome = nome.textContent.toLowerCase();
      email = email.textContent.toLowerCase();

      if(!nome.includes(inputValue) && !email.includes(inputValue)){
        linha.style.display = 'none';
      }else{
        linha.style.display = 'table-row';
      }
    }
  }else{
    for(let linha of linhasTabela){
      linha.style.display = 'table-row';
    }
  }
})
