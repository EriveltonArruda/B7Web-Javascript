// Função para o onclick
function clicou() {
  console.log("Clicou no Botão");
}

// Criação do evento de clique pelo DOM
let botao = document.querySelector(".botao");
botao.addEventListener("click", clicou);

/* outra forma de usar o eventListener
botao.addEventListener("click", function() {
  clicou();
};

Arrow function
// outra forma de usar o eventListener
botao.addEventListener("click", () => {
  clicou();
};
*/