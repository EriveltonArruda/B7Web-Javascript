let nome = 'Erivelton';
let idade = 33;

// Forma antiga de concatenar string e variável
let fraseAntiga = "Meu nome é " + nome + " e tenho " + idade + " anos e ano que vem eu farei " + (idade + 1) + " anos";
console.log(fraseAntiga);

// Template String
let frase = `Meu nome é ${ nome } e tenho ${ idade } anos e ano que vem eu farei ${ idade + 1 } anos`;
console.log(frase);