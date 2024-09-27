function clicou() {
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  // adicionando texto depois do ul
  // ul.after("Texto qualquer");

  // Adicionando texto antes do elemento
  // ul.before("Texto qualquer");

  // não aceita elemento, apenas texto
  // ul.after("<button>Botão</button>");

  // Criando um botão para usar o after ou o before nele
  // const newButton = document.createElement("button");
  // Adicionando um texto ao botão criado
  // newButton.innerHTML = "Botão";
  // Usando o botão antes do ul
  // ul.before(newButton);

  // Criando uma lista com DOM
  let newUl = document.createElement("ul");

  // são vários itens, então uso o for
  for (let i = 0; i < 5; i++) {
    // Crio o li
    let newLi = document.createElement("li");
    // Adiciono o texto a ele (pode usar append ou innerHTML também)
    newLi.innerText = `Item da lista nova ${ i }`;
    // Adiciono esse li na lista nova
    newUl.append(newLi);
  }

  // Essa lista será adicionada depois do ul existente
  ul.after(newUl);
}

