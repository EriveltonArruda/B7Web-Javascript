// vou precisar manipular o ul e o input
// no input vou adicionar o evento
// no ul vou adicionar os elementos

const input = document.querySelector("input");
const lista = document.querySelector("ul");

function handleKeyUp(e) {
  // Só vai adicionar o valor com Enter
  if (e.key === "Enter") {
    // Criar o elemento li
    const newLi = document.createElement("li");
    // colocar dentro de li o valor passado no input
    newLi.innerHTML = input.value;
    // adicionando na lista
    lista.appendChild(newLi);

    // resetando o input
    input.value = "";
  }
}

// Evento do input, quando soltar a tecla, a função será executada
input.addEventListener('keyup', handleKeyUp);