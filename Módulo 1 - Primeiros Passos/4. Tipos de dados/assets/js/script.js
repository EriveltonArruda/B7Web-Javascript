/* Quando um número está em aspas, não é feita a operação matemática, mas sim uma concatenação (junção) de códigos, nesse caso a soma não será 11 e sim 101.

let n1 = 10;
let n2 = "1";
let soma = n1 + n2;

console.log(soma);
*/

// Strings não funcionam sem aspas
/* let nome = Erivelton;

console.log(nome);
*/


let nome = "Erivelton"; // String
let idade = 45.5; // Number
let logado = true; // Boolean
let lista = ["ovo", "farinha de trigo", "manteiga", 10]; // Array
// quando for declarar variável composta, utilize camelCase, nunca use espaço ou caracteres especiais.
let nomeCompleto = { nome: "Erivelton", idade: 32 }; // Objeto

// Typeof mostra o tipo da variável
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof logado);
console.log(typeof lista);
console.log(typeof nomeCompleto);
