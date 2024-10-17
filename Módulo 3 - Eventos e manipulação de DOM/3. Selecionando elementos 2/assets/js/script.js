// Assim como no CSS, selecionamos um id com #
// e classes com ponto .

// Selecionando pelo ID
// Preste atenção no nome Element, ele está no singular porque só vai pegar um ID.
document.getElementById("#teste");

// Selecionando pela classe
document.getElementsByClassName(".botao");

////// Forma mais aberta de selecionar //////
// Pelo ID
document.querySelector("#teste");

// pela classe
document.querySelector(".botao");

// Selecionando todos os elementos
document.querySelectorAll("li");

// Selecionando os elementos por camadas (em cascata)
document.querySelectorAll("#teste ul li");