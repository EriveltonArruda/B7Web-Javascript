// Objeto pessoa
let pessoa = {
  nome: "Erivelton",
  sobrenome: "Rodrigues",
  idade: 32,
};


console.log(`Nome Completo: ${ pessoa.nome } ${ pessoa.sobrenome }`);// Resultado: Nome Completo: Erivelton Rodrigues

// Função dentro de objeto
let pessoa2 = {
  nome: "Erivelton",
  sobrenome: "Rodrigues",
  idade: 32,
  nomeCompleto: function () {
    // Chamando o item do próprio objeto, nesse caso nome e sobrenome, 
    // então vai  chamar o nome e o sobrenome DESTE (this) objeto, nesse caso é pessoa.
    return `${ this.nome } ${ this.sobrenome }`;
  },
};

// Para chamar ele no console fazemos assim:
// Apesar dessa função estar dentro de um objeto, 
// podemos usar a função normalmente.
console.log(pessoa2.nomeCompleto()); // Resultado: Erivelton Rodrigues

// O this não funciona com arrow function
let pessoa3 = {
  nome: "Erivelton",
  sobrenome: "Rodrigues",
  idade: 32,
  // Arrow function não funciona o this
  nomeCompleto: () => {
    return `${ this.nome } ${ this.sobrenome }`;
  },
};

console.log(pessoa3.nomeCompleto());
// Resultado: undefined undefined