let n = 10.6546572645;

// Transforma número em string
let res = n.toString();

console.log(res);

// define a quantidade de casas decimais
let decimais = `R$ ${ n.toFixed(2) }`;
console.log(decimais);

let numero = '25.9';

// Transforma string em um número INTEIRO.
let inteiro = parseInt(numero) + 5;
console.log(inteiro);
// Também pode ser feito assim
let integer = Number(numero) + 5;

// transforma string em número mas mantém os decimais
let float = parseFloat(numero) + 5;
console.log(float);