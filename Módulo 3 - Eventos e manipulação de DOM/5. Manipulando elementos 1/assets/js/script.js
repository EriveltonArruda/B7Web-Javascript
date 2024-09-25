function clicou() {
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  // Alterando o elemento com o innerHTML
  //ul.innerHTML = "<li>Item alterado!</li>";

  // Adicionando mais um li com o innerHTML
  ul.innerHTML += "<li>Item alterado!</li>";

  // Outra forma de alterar
  // ul.children[0].innerHTML = "Item alterado!";

  // Se fosse feito dessa forma, não funcionaria tag html, porque seria passado um texto
  // ul.children[0].innerText = "Item <strong>alterado</strong>";

  // outerHTML
  console.log(ul.outerHTML);

  // Alterando com outerHTML
  ul.outerHTML = "<strong>Alterado!</strong>"
}

// por ser innerHTML, ele aceita tags de html

// O princípio do innerText é o mesmo do innerHTML
// A diferença é que o Text interpreta tudo como texto
// O innerHTML consegue interpretar tags dentro dele, assim ele altera o texto
// como a tag alteraria o elemento no HTML