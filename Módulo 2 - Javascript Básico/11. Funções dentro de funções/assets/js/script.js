// Função de exemplo para ser usada dentro de outra função
/*
function square(x) {
  return x * x;
}

console.log(square(2));
*/

/* 
function addSquares(a, b) {
   return square(a) + square(b);
 }

 Também posso fazer dessa forma (fica até mais explicado), posso criar duas variáveis e colocar a função da raiz quadrada em cada uma (que fique claro que dessa forma consome mais memória, afinal de contas são variáveis).
 
 function addSquares(a, b) {
   let sqrA = square(a);
   let sqrB = square(b);
   return sqrA + sqrB;
 }
 
 console.log(addSquares(2, 4));
*/

// Podemos colocar uma função dentro da outra
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }

  let sqrA = square(a);
  let sqrB = square(b);
  return sqrA + sqrB;
}

console.log(addSquares(2, 4));

// Opinião pessoal do Professor
/*
Sempre que for criar uma função dentro de outra função, crie como uma Arrow function, dessa forma não vai ter dois nomes function na minha função.

function addSquares(a, b) {
  const square = (x) => x * x;

let sqrA = square(a);
let sqrB = square(b);
return sqrA + sqrB;
}

console.log(addSquares(2, 4));
*/