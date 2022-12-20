export function valida(input){
  const tipoInput = input.dataset.tipo;
  if(input.validity.valid){
    input.parentElement.classList.remove('input-container--invalido');
  }else{
    input.parentElement.classList.add('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoInput, input);
  }
}
const tiposErros = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
];

const mensagemDeErros = {
  nome: {
    valueMissing: 'O campo nome não pode estar vázio.'
  },
  email: {
    valueMissing: 'O campo email não pode estar vázio.',
    typeMismatch: 'o email digitado não é valido!'
  },
  senha:{
    valueMissing: 'O senha não pode estar vázio.',
    patternMismatch: 'A senha deve conter no minímo 6 e no máximo 12 caracteres, uma letra maiúscula, um número e não pode conter símbolos.'
  }
}

function mostraMensagemDeErro(tipoInput, input){
  //função que retorna mensagem adequada ao input e ao erro
  let mensagem = '';
  tiposErros.forEach(erro=>{
    if (input.validity[erro]) {
      mensagem = mensagemDeErros[tipoInput][erro]
    }
  })

  return mensagem
}