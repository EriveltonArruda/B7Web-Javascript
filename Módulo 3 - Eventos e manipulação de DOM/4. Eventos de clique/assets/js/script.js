// Função para o onclick
function clicou() {
  console.log("Clicou no Botão");
}

// Criação do evento de clique pelo DOM
let botao = document.querySelector(".botao");

// parâmetros do addEventListener
// 1º Tipo do evento
// 2º Função que vai executar quando tiver um evento de clique
// não colocamos a função assim clicou(), porque ai ela seria executada
// passamos só seu nome para o eventListener saber qual função ele deve executar
botao.addEventListener("click", clicou);

/* outra forma de usar o eventListener
botao.addEventListener("click", function() {
  clicou();
};

// Arrow function
botao.addEventListener("click", () => {
  clicou();
};

// Caso não queira armazenar em uma variável, faça assim:
document.querySelector(".botao").addEventListener("click", clicou);

// Ou assim usando Arrow Function
document.querySelector(".botao").addEventListener("click", () => {
  clicou();
});
*/