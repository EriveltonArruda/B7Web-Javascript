function clicou() {
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  // Exemplo do append()
  // ul.children[0].append("(alterado)");

  // NÂO é o mesmo de fazer isso
  //ul.children[0].innerHTML += "(alterado)";

  // append não interpreta como HTML, mas sim como texto.
  // ul.children[0].append("<li>Item adicionado</li>");

  // Exemplo do appendChild
  // Criando o elemento na memória com o creteElement, vai criar um li
  let newLi = document.createElement("li");
  // Adicionando um texto nesse elemento criado
  newLi.innerText = "Item adicionado";

  // Adicionando esse li dentro do meu ul
  ul.appendChild(newLi);

  // Adicionando esse li no início da lista
  ul.prepend(newLi);
}

