let lista = [45, 4, 9, 16, 25];
let lista2 = [];

// mapeia o array e executa uma função em cada um dos itens do array
lista2 = lista.map((item) => {
  return item * 2;
});

console.log(lista2);

// Cria um novo array com os itens que foram true pelo filtro.
lista2 = lista.filter((item) => {
  if (item < 20) {
    return true;
  } else {
    return false;
  }
});
console.log(lista2);

// retorna true se TODOS os itens forem satisfeitos.
lista2 = lista.every((item) => {
  if (item > 20) {
    return true;
  } else {
    return false;
  }
});

console.log(lista2);

// retorna true se pelo menos um item for satisfeito.
lista2 = lista.some((item) => {
  if (item > 20) {
    return true;
  } else {
    return false;
  }
});

console.log(lista2);