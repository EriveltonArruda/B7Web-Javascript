// FUNÇÃO PARA O ONCLICK DO HTML
function clicou() {
  console.log("Clicou no Botão");
}

// CRIAÇÃO DO EVENTO DE CLIQUE PELO DOM //

// para definir um evento de clique no botão, seleciono o elemento antes
let botao = document.querySelector(".botao");

// parâmetros do addEventListener
// 1º Tipo do evento (nesse caso será evento de "click")
// 2º Função que vai executar quando tiver um evento de clique
// não colocamos a função assim clicou(), porque ai ela seria executada
// passamos só seu nome para o eventListener saber qual função ele deve executar
botao.addEventListener("click", clicou);

// outra forma de usar o eventListener
botao.addEventListener("click", function() {
  clicou();
});

// fazendo em Arrow function
botao.addEventListener("click", () => {
  clicou();
});

// Caso não queira armazenar em uma variável, faça assim usando Arrow Function
// Selecione o elemento e adicione o evento
document.querySelector(".botao").addEventListener("click", () => {
  clicou();
});
