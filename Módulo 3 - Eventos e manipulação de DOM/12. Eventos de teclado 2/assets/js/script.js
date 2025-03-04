/* O parâmetro event tem detalhes do evento
pode colocar o nome que quiser, muita gente só coloca o (e)
Ele é um objeto, então acessamos suas propriedades com ponto (.) */
function soltou(e) {
  // code mostra em detalhes o que foi apertado (leftShift ou rightShift por exemplo)
  console.log(e.code);
  // key não distingue LeftShift de RightShift por exemplo
  console.log(e.key);

  // Exemplos de shiftKey, ctrlKey e altKey //
  console.log(`TECLA APERTADA: ${ e.code }`);
  // ele nos mostra se o shift foi apertado junto com a tecla
  console.log(`SHIFT? ${ e.shiftKey }`);
  // a lógica do shift serve para o ctrl e o alt também
  console.log(`CTRL? ${ e.ctrlKey }`);
  console.log(`ALT? ${ e.altKey }`);
}

// o exemplo será mostrado no input.
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);