let idade = 45;
let idade2 = 50;
let idade3 = 25;
let outraV = "outra variável qualquer";

// Entendendo a Lógica de um multi condicional
// Quando a variável idade for maior que 18, ela entrará na condição inicial do if, e assim entrará na segunda verificação, se for menor que 60, será exibida a mensagem no console.log, nesse caso será exibido porque 45 é >= 18 E < que 60.
if (idade >= 18) {
  if (idade < 60) {
    console.log("Você é um adulto");
  }
}

// Condicional && "E" //
// Cada condicional é individual, então sempre faça dessa forma
// Só será executado se AMBAS as condições forem verdadeiras
if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto");
}

// Condicional || "OU" //
// O código funciona se uma OU a outra condição for verdadeira
if (idade2 >= 18 || idade2 < 60) {
  console.log("Você é um adulto");
}

// Utilizando && e || em uma condição
// Primeiro vai rodar a condição do && dentro dos parênteses
// o resultado dessa condição é a condição que será utilizada para o OU
if ((idade3 >= 18 && idade3 < 60) || outraV) {
  console.log("Resultado");
}
