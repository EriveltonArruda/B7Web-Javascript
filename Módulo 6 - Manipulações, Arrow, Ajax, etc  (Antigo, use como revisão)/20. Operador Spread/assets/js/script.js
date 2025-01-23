let numeros = [1, 2, 3, 4];

let outros = [...numeros, 5, 6, 7];
console.log(outros);

// Exercício
let info = {
  nome: 'Erivelton',
  sobrenome: 'Rodrigues',
  idade: 33
}

let novaInfo = {
  // Pegando os dados de info para complementar
  ...info,
  cidade: 'Gravatá',
  estado: 'Pernambuco',
  pais: 'Brasil'
}

console.log(novaInfo);

// Usando em funções
function adicionarInfo(info) {
  let novasInfo = {
    ...info,
    status: 0,
    token: 'asdasdkoaçsjdça',
    data_cadastro: '....'
  }
  return novasInfo;
}

console.log(adicionarInfo({ nome: 'Erivelton', sobrenome: 'Rodrigues' }));