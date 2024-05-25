// Soma de números
let x = 2;
x = x + 8; // funciona com + - * / (qualquer operação básica)

console.log(x);

// Porém dessa forma acima só funciona com números, se fizer essa soma entre um número e uma string, o javascript concatenará (juntará) os valores e não fará a operação.
/*
let x = "2";
x = x + 8;

console.log(x);
*/

// Concatenação de variáveis de strings //
/*
let nome = "Erivelton";
let sobrenome = "Rodrigues";

// Assim juntará os dois nomes, mas eles ficarão colados.
let nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);
*/

// Concatenação de strings com espaço //

// 1ª opção: Adicionar um espaço no FINAL do nome
let nome = "Erivelton ";

// 2ª opção: Adicionar um espaço no COMEÇO do sobrenome
let sobrenome = " Rodrigues";

// 3ª opção: Concatenar as variáveis com um espaço entre elas
let nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

//// Operação com variáveis ////

// Operação dentro do Console.log //
/*
let n1 = 15;
let n2 = 20;

console.log(n1 + n2);
*/

// Operação dentro de uma variável //
/*let n1 = 15;
let n2 = 20;

let soma = n1 + n2;

console.log(soma);
*/

// Várias operações matemáticas de uma vez //
let n1 = 15;
let n2 = 20;
let n3 = 10;
// Assim como na matemática, isolo a operação que quero que venha primeiro dentro de parênteses.
let soma = (n1 + n2) * n3;

console.log(soma);
