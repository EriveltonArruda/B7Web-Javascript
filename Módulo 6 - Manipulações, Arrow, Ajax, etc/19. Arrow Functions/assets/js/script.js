// Forma tradicional de criar função
function somar(a, b) {
  return a + b;
}

console.log(somar(10, 5));

// Outra forma de criar função
let somarV = function (a, b) {
  return a + b;
}

// Arrow Function
let soma = (a, b) => {
  return a + b;
}

// Arrow com 1 return
let somando = (a, b) => a + b;
console.log(somando(20, 5));

// Arrow que só recebe um parâmetro
let letrasNoNome = nome => nome.length;
console.log(letrasNoNome('Erivelton'))