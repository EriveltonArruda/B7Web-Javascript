// Função de exemplo para ser usada dentro de outra função
function square(x) {
  return x * x;
}

console.log(square(2)); // Resultado: 4

// Função que calcula as raízes de dois números
function addSquares(a, b) {
  // como é a soma das raizes, eu passo 2x a função que faz a raiz quadrada
  // 1x em a e 1x em b;
  return square(a) + square(b);
}

/*
Também posso fazer dessa forma (fica até mais explicado)
posso criar duas variáveis e colocar a função da raiz quadrada em cada uma (que fique claro que dessa forma consome mais memória, afinal de contas são variáveis).
*/

function addSquares(a, b) {
  let sqrA = square(a);
  let sqrB = square(b);
  return sqrA + sqrB;
}

console.log(addSquares(2, 4)); // Resultado: 20


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