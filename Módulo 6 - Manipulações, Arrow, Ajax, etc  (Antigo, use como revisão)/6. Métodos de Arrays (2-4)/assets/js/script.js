let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = ['Prato', 'Liquidificador', 'Forno'];

// Remove o item do array com base no index e a quantidade de itens
lista.splice(0, 1);
console.log(lista);

// Agrupa dois (ou mais) arrays em um só
let junto = lista.concat(lista2);
console.log(junto);

// Ordena o array em ordem alfabética
lista.sort();
console.log(lista);


lista.sort();
// Ordena em ordem decrescente
lista.reverse();
console.log(lista);