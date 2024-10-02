let fruits = ["Banana", "Laranja", "Maçã", "Pera", "Uva"];

// Filter()
/*
A função do filter tem 3 valores padrões, eles não precisam ser usados os 3 
obrigatoriamente e não precisam obrigatoriamente ter esses nomes, são eles:
value = valor do array;
index = index do array;
array = o array completo que será filtrado;
*/
// Vou usar o value chamando ele de item
let bigFruits = fruits.filter((item) => {
  if (item.length > 4) {
    return true;
  } else {
    return false;
  }
});

console.log(bigFruits);

// Every()
// Essa função faz uma verificação em todos os itens do array
// Assim como o filter, é uma função que precisa de uma função dentro dela
// e os valores padrão dos parâmetros são value, index e array.
let ok = fruits.every((value) => {
  if (value.length > 3) {
    return true;
  } else {
    return false;
  }
});

// Agora faço a verificação da variável que tem o resultado do meu every
if (ok) {
  console.log("Todos os itens são maiores que 3");
} else {
  console.log("Não são todos maiores que 3");
}

// Some()
// A função some tem os mesmos parâmetros e estrutura da função every
// A diferença é que o some vai retornar true se algum item do array satisfazer a condição imposta
// nesse caso: se os itens tiverem mais de 3 letras, basicamente funciona como um OU do if.
let okSome = fruits.some((value) => {
  if (value.length > 3) {
    return true;
  } else {
    return false;
  }
});

if (okSome) {
  console.log("Algum item é maior que 3");
} else {
  console.log("Nenhum item é maior que 3");
}

// includes()
// é usada para verificar se determinado item existe dentro do array
// estrutura do includes //
// array.includes(dentro dos parênteses eu coloco o que quero procurar)
if (fruits.includes("Uva")) {
  console.log("Tem uva sim!");
} else {
  console.log("Não tem uva...");
}