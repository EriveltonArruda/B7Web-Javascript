// pegando o h1 para ser manipulado
let elementos = document.getElementsByTagName("h1");

/* Como o getElementsByTagName nos retorna um array, e tenho mais de um h1 no meu documento, 
posso simplesmente selecionar um h1 dessa forma: */
console.log(elementos[0]);