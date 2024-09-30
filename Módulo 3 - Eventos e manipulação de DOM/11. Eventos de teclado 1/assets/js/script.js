// funções usadas nos onkey do HTML
function apertou() {
  console.log("APERTOU!");
}

function segurou() {
  console.log("SEGUROU!");
}

function soltou() {
  console.log("SOLTOU!");
}

// Adicionando evento de teclado pelo JS, aqui não usa o ON antes do key.
// 1º parâmetro = o evento que quero
// 2º parâmetro = a função que será executada
document.addEventListener('keyup', soltou);