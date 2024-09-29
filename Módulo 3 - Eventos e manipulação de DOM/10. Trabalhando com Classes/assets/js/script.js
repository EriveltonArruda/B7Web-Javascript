function clicou() {
  const button = document.querySelector("button");

  /*
  // add nova classe (quantas quiser)
  button.classList.add("verde", "vermelho");

  button.classList.remove("azul");

  // // verifica se o elemento contém a classe do parâmetro
  if (button.classList.contains("azul")) {
    // esse código é para exemplificar, basicamente fazer uma troca de classes
    button.classList.remove("azul");
    button.classList.add("verde", "vermelho");
  } else {
    button.classList.remove("verde", "vermelho")
    button.classList.add("azul");
  }
*/
  // toggle troca as classes, se o elemento tiver, ele tira, se não tiver, ele remove.
  button.classList.toggle("verde");

  // replace substitui a classe do primeiro parâmetro com a do segundo
  button.classList.replace("azul", "vermelho");

  // refazendo o if, só que agora com replace
  if (button.classList.contains('azul')) {
    button.classList.replace('azul', 'verde');
  } else {
    button.classList.replace('verde', 'azul');
  }
}