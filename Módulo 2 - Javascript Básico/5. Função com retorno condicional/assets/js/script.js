function maiorDeIdade(idade) {
  // Podemos usar condições dentro de funções
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

// Verificando a função
let verificacaoMenor = maiorDeIdade(14);
console.log(verificacaoMenor);

let verificacaoMaior = maiorDeIdade(18);
console.log(verificacaoMaior);

// Outra forma de chamar a função
// passando a variável que contém o valor como parâmetro da função
let idade = 65;
let verificacao = maiorDeIdade(idade);


// Também posso fazer uma verificação da variável que tem a função
if (verificacao) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}