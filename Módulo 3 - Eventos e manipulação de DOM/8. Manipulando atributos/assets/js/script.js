function clicou() {
  const input = document.querySelector(".input");

  // getAttribute() //
  // Pega o valor do atributo do elemento
  console.log(input.getAttribute("placeholder"));
  console.log(input.getAttribute("type"));

  // hasAttribute() //
  // verificando se tem atributos
  if (input.hasAttribute("placeholder")) {
    console.log("Tem placeholder SIM");
  } else {
    console.log("Não tem placeholder...");
  }

  // setAttribute() //
  // Define o valor do atributo
  // Essa função tem 2 parâmetros
  // 1º o atributo que quero alterar
  // 2º o valor novo
  input.setAttribute('placeholder', 'Placeholder alterado');


  // Exemplo de mostrar e ocultar a senha
  // Para manipular o botão, preciso selecionar ele antes
  let botao = document.querySelector(".botao");

  if (input.getAttribute('type') === "text") {
    input.setAttribute("type", "password");
    botao.innerText = "Mostrar senha";
  } else {
    input.setAttribute("type", "text");
    botao.innerText = "Ocultar senha";
  }
}