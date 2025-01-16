let lista = [45, 4, 9, 16, 25];
let lista2 = [];
let listaObj = [
  { id: 1, nome: 'Erivelton', sobrenome: 'Rodrigues' },
  { id: 2, nome: 'Everton', sobrenome: 'Rodrigues' },
  { id: 3, nome: 'Fulano', sobrenome: 'da Silva' }
]

// Retorna o primeiro item que achar que satisfaça o parâmetro.
lista2 = lista.find((item) => {
  return (item == 16) ? true : false;
});

// Caso queira fazer tudo em uma linha
lista2 = lista.find((item) => (item == 16) ? true : false);

console.log(lista2);

// Exemplo do find no mundo real
let pessoa = listaObj.find((item) => {
  return (item.sobrenome == "Rodrigues") ? true : false;
});

// Caso queira fazer tudo em uma linha
pessoa = listaObj.find((item) => (item.sobrenome == "Rodrigues") ? true : false);

console.log(pessoa);

// Retorna a posição do item no array
lista2 = lista.findIndex((item) => {
  return (item == 16) ? true : false;
});

// Caso queira fazer tudo em uma linha
lista2 = lista.findIndex((item) => (item == 16) ? true : false);

console.log(lista2);