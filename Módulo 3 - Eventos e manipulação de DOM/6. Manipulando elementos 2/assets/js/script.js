function clicou() {
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  // append() //
  // append nos permite adicionar um conteúdo a um elemento que já tenha um conteúdo
  // sem alterar o conteúdo original
  ul.children[0].append("(alterado)");

  // innerHTML faz uma cópia do estado original
  // e adiciona o conteúdo que você passou para essa cópia,
  // ou seja, ele altera todo o conteúdo do elemento,
  // o elemento sai da memória e é adicionado novamente com a adição.

  // NÂO é o mesmo de fazer isso
  ul.children[0].innerHTML += "(alterado)";

  // append não interpreta como HTML, mas sim como texto.
  ul.children[0].append("<li>Item adicionado</li>");

  // appendChild e createElement //
  // appendChild adiciona um elemento e não um texto como o append
  // Criando o elemento na memória com o creteElement
  let newLi = document.createElement("li");
  // Adicionando um texto nesse elemento criado
  newLi.innerText = "Item adicionado";

  // Adicionando esse li dentro do meu ul
  ul.appendChild(newLi);

  // Entendendo o processo acima
  // na criação desse li com o createElement, ele fica disponível na memória
  // com o innerText eu coloco o texto dele (conteúdo)
  // com o appendChild eu pego o li disponível e jogo onde quero (ul)

  // prepend() //
  // permite adicionar um conteúdo no início do elemento selecionado
  // Exemplo: Adicionando esse li no início da lista
  ul.prepend(newLi);
}
