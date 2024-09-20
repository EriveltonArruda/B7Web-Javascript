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
if (fruits.includes("Uva")) {
  console.log("Tem uva sim!");
} else {
  console.log("Não tem uva...");
}