let info = ['Erivelton Rodrigues', 'Erivelton', 'Rodrigues', '@eriveltonrodriguesdev'];

// Desconstruindo array
let [nomeCompleto, nome, sobrenome, instagram] = info;
console.log(nomeCompleto, nome, sobrenome, instagram);

// Desconstruindo e pulando itens
let [fullName, , , instagram2] = info;
console.log(fullName, instagram);

// Desconstrução em um array recém criado.
let [Name, lastName, idade = 33] = ['Erivelton', 'Rodrigues'];
console.log(Name, lastName, idade);

// Desconstruindo através de uma função
function criar() {
  return [1, 2, 3];
}

let [a, b, c] = criar();
console.log(a, b, c);