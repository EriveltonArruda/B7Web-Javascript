function clicou() {
  const button = document.querySelector("button");

  /*

  // classList retorna um array de classes que o elemento tem
  console.log(button.classList);

  // add nova classe (quantas quiser)
  button.classList.add("verde", "vermelho");

  // Para remover
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

  // contains //
  // refazendo o if, só que agora com replace e contains
  if (button.classList.contains('azul')) {
    button.classList.replace('azul', 'verde');
  } else {
    button.classList.replace('verde', 'azul');
  }
}