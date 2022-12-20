import { valida } from "./validaInputs.js";
const inputs = document.querySelectorAll('input');

//passa o input com a acção de sair do input
inputs.forEach((input)=>{
  input.addEventListener('blur', (Event)=>{
    Event.preventDefault();
    valida(Event.target);
  })
});
