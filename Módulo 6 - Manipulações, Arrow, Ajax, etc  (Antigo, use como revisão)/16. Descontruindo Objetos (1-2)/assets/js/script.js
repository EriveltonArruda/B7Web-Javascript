let pessoa = {
  nome: 'Erivelton',
  sobrenome: 'Rodrigues',
  // idade: 33,
  social: {
    facebook: 'Erivelton Arruda',
    instagram: 'Eriveltonrodriguesdev'
  },
  nomeCompleto: function () {
    return `${ this.nome } ${ this.sobrenome }`;
  }
}

// Forma antiga de se adicionar os dados de um objeto à variáveis, vou deixar comentado para evitar conflito
/*
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;

console.log(nome, sobrenome, idade);
*/

// Descontruindo
let { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);

// Alterando o nome da variável
let { nome: nomePessoa, sobrenome: sobrenomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa, sobrenomePessoa, idadePessoa);

// Definindo um valor padrão
let { idade: pessoaIdade = 32 } = pessoa;
console.log(pessoaIdade);

// Também pode ser feito assim
let { idadePadrao = 32 } = pessoa;
console.log(idadePadrao);