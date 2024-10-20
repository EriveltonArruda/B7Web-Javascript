function clicou() {
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  // children //
  // Entrei no filho imediato de teste (ul) e mostrei os filhos dele (li)
  console.log(teste.children[0].children);

  // como children nos retorna um array, podemos usar children[0] no teste
  // ou seja, children[0] é ul e o children de ul é li
  // então como esse elemento ul tem elementos li dentro dele
  // podemos usar o children nele também;

  // O children nos mostra os elementos filhos do elemento
  // então se tivesse um strong com um texto, o children mostraria um array nulo
  // Porque o elemento strong não tem elementos filhos, só um texto
  // e texto não é elemento

  // innerHTML //
  // Alterando o elemento com o innerHTML
  ul.innerHTML = "<li>Item alterado!</li>";

  // Adicionando mais um li com o innerHTML
  ul.innerHTML += "<li>Item alterado!</li>";

  // Se quisesse deixar somente um item em negrito, por ser innerHTML, ele interpreta tags de HTML
  ul.children[0].innerHTML = "Item <strong>alterado</strong>";

  // Outra forma de alterar
  ul.children[0].innerHTML = "Item alterado!";

  // Se fosse feito dessa forma, não funcionaria tag html,
  // porque seria passado um texto
  ul.children[0].innerText = "Item <strong>alterado</strong>";

  // O princípio do innerText é o mesmo do innerHTML
  // A diferença é que o Text interpreta tudo como texto
  // O innerHTML consegue interpretar tags dentro dele,
  // assim ele altera o texto como a tag alteraria o elemento no HTML

  // outerHTML
  console.log(ul.outerHTML);

  // Alterando com outerHTML
  ul.outerHTML = "<strong>Alterado!</strong>";
}
