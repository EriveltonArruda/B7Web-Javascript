// Função normal
/*
function somar(x, y) {
  return x + y;
}
*/


// Arrow Function
/* A criação da Arrow function é igual à criar uma variável
primeiro eu coloco o nome da função e o valor dela serão os parâmetros
o que vier depois da seta será o return.
o que determina uma arrow function é justamente a seta depois dos parâmetros da função.
Por isso o nome "Arrow".

const somar = (x, y) => {
  return x + y;
}
*/



// Resumindo uma Arrow Function
// Perceba que o return está em uma linha e no exemplo anterior estava dentro da função.
// Só funciona se tiver uma linha com return dentro do bloco, a seta é basicamente o retorno
const somar = (x, y) => x + y;

console.log(somar(10, 5));


// Exemplo do sobrenome //
// Função Normal
function sobrenome(sob) {
  return `Erivelton ${ sob }`;
}

console.log(sobrenome("Rodrigues")); // Resultado: Erivelton Rodrigues

// Arrow Function
// O parênteses no parâmetro (sob) é opcional.
const sobrenome = (sob) => `Erivelton ${ sob }`;

console.log(sobrenome("Rodrigues")); // Resultado: Erivelton Rodrigues

// Formas de criar arrow functions //
/*
// Todas essas Arrow Function foram feitas com base nessa Função normal
function sobrenome(sob) {
  return `Erivelton ${sob}`;
}

// Formas de criar Arrow Function
const sobrenome = sob => `Erivelton ${sob}`;

const sobrenome = (sob) => `Erivelton ${sob}`;

const sobrenome = (sob) => {
  return `Erivelton ${sob}`;
}

const sobrenome = (sob) => {
  let nomeCompleto = `Erivelton ${sob}`;
  return nomeCompleto;
}
*/