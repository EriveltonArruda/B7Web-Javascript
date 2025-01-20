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