function adicionar(...numeros) {
  console.log(numeros);
}

adicionar(5, 6, 7, 8, 9, 10, 11);


function adicionarNomes(...nomes) {
  console.log(nomes);
}

adicionarNomes('Erivelton', 'Maria', 'Josefa');

// Exercício
function add(nomes, ...novosNomes) {
  // Solução
  let novoConjunto = [
    ...nomes,
    ...novosNomes
  ]

  return novoConjunto;
}

let nomes = ['Erivelton', 'Everton'];
let outros = add(nomes, 'Fulano', 'Ciclano', 'Antônio', 'Maria');
console.log(outros);