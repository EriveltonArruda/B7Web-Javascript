let pessoa = {
  nome: 'Erivelton',
  sobrenome: 'Rodrigues',
  idade: 33,
  social: {
    facebook: 'Erivelton Arruda',
    instagram: {
      url: '@Eriveltonrodriguesdev',
      seguidores: 100
    }
  }
}


/*
// pegando objetos dentro de objetos
let { facebook, instagram } = pessoa.social;
console.log(facebook, instagram);


// Pegando informações juntas
let { nome, idade, social: { instagram } } = pessoa;
console.log(nome, idade, instagram);
*/

// Objeto dentro de objeto dentro de objeto
let { nome, idade, social: { instagram: { url: instagram, seguidores } } } = pessoa;
console.log(nome, idade, instagram, seguidores);

// Desconstruindo no parâmetro da função
function pegarNomeCompleto({ nome, sobrenome, social: { instagram: { url: instagram } } }) {
  return `${ nome } ${ sobrenome } (Siga no instagram: ${ instagram })`;
}

console.log(pegarNomeCompleto(pessoa));