// Uma forma de concatenar strings (muito antiga, deixa o código polúido)

let nomeAntigo = "Erivelton";
let sobrenomeAntigo = "Rodrigues";

let nomeCompletoAntigo = nomeAntigo + " " + sobrenomeAntigo;

// também posso concatenar dentro do console.log
console.log("Nome: " + nomeCompletoAntigo);

// Template Strings //
let nome = "Erivelton";
let sobrenome = "Rodrigues";

let nomeCompleto = `Meu nome completo é: ${ nome } ${ sobrenome }`;

console.log(nomeCompleto);

// Operações matemáticas com Template Strings //
let idade = 30;
let idadeString = `Minha idade é: ${ idade + 2 }`;

console.log(idadeString);
