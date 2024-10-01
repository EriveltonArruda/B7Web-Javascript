// Podemos usar condições dentro de funções
function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

// Outra forma de chamar a função
// passando a variável que contém o valor como parâmetro da função
let idade = 65;
let verificacao = maiorDeIdade(idade);


// Também posso fazer uma verificação da variável que tem a função como valor
if (verificacao) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}