let telefone = '5';
console.log(telefone.padEnd(9, '*'));
console.log(telefone.padStart(9, '*'));

// Aplicação Prática
let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16, '*');

console.log(`Esse é o seu cartão? ${ cartaoMascarado }`);