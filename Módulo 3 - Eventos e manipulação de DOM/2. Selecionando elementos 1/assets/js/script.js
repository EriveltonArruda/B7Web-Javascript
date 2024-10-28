// pegando todos os h1 pela tag para ser manipulado
// Retorna um array (HTMLCollection) com todos os elementos com tag h1 que encontrou no elemento.
let elementos = document.getElementsByTagName("h1");

/* Como o getElementsByTagName nos retorna um array, e tenho mais de um h1 no meu documento, 
posso simplesmente selecionar um h1 dessa forma: */
console.log(elementos[0]);

