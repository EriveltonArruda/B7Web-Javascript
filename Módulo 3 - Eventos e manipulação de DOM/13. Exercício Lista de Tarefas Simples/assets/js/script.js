/*
fazer uma função que adicione um item a uma lista existente
ao digitar uma tarefa e der enter, ele vai pra a lista.
o input precisa ficar vazio quando adicionar na lista.
*/

// Selecionando o input e a lista
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// essa função está em um botão no HTML
function addTarefa() {
  // crio o elemento
  let newLi = document.createElement("li");
  // o valor dele será passado pelo input
  newLi.innerText = input.value;

  // a lista agora receberá o item novo
  ul.appendChild(newLi);
  // assim que o item entrar na lista, o input fica vazio
  input.value = "";
}

