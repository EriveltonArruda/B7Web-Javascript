function clicou() {
  // O primeiro passo para manipular um elemento
  // é selecionando ele
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  // children //
  // O children nos mostra os filhos imediatos do elemento selecionado
  // como children nos retorna um array, podemos usar children[0] no teste
  // ou seja, children[0] é ul e o children de ul é li
  // então como esse elemento ul tem elementos li dentro dele
  // podemos usar o children nele também;

  // Entrei no filho imediato de teste (ul) e mostrei os filhos dele (li)
  console.log(teste.children[0].children);

  // innerHTML //
  // Retorna o conteúdo que tem dentro do elemento
  // Posso consultar e alterar o valor do elemento selecionado.

  // Alterando o elemento com o innerHTML
  ul.innerHTML = "<li>Item alterado!</li>";

  // Adicionando mais um li com o innerHTML
  ul.innerHTML += "<li>Item alterado!</li>";

  // innerHTML interpreta tag de HTML
  ul.children[0].innerHTML = "Item <strong>alterado</strong>";

  // Outra forma de alterar
  ul.children[0].innerHTML = "Item alterado!";


  // innerText //
  // O princípio do innerText é o mesmo do innerHTML
  // A diferença é que o Text interpreta tudo como texto
  // E o innerHTML consegue interpretar tags dentro dele. 
  ul.children[0].innerText = "Item <strong>alterado</strong>";

  // outerHTML //
  // Pega o HTML externo levando em conta o próprio elemento selecionado
  console.log(ul.outerHTML);

  // Alterando com outerHTML
  ul.outerHTML = "<strong>Alterado!</strong>";
}
