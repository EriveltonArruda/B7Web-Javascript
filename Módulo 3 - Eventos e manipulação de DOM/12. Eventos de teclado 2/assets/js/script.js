// O parâmetro event tem detalhes do evento
// pode colocar o nome que quiser, muita gente só coloca o (e)
// Ele é um objeto
function soltou(e) {
  // code mostra em detalhes o que foi apertado (leftShift ou rightShift por exemplo)
  console.log(e.code);
  // key mostra não distingue LeftShift de Shift por exemplo
  console.log(e.key);

  console.log(`TECLA APERTADA: ${ e.code }`);
  // O shiftKey é um boolean, 
  // ele nos mostra se o shift foi apertado junto com a tecla
  console.log(`SHIFT? ${ e.shiftKey }`);
  // a lógica do shift serve para o ctrl e o alt também
  console.log(`CTRL? ${ e.ctrlKey }`);
  console.log(`ALT? ${ e.altKey }`);
}

// o exemplo será mostrado no input.
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);