// Condicional == //
/*
let idade = 20; // Se idade fosse 22, o if não seria executado

if (idade == 20) {
  console.log("Você tem 20 anos");
}
*/

/*
let idade = "20";

// Esse condicional só compara o VALOR e não o TIPO, logo, a operação abaixo funcionaria 
// porque o JS interpretaria o "20" em string como 20 em número.
if (idade == 20) {
  console.log("Você tem 20 anos");
}
*/

// Condicional === //
/*  
let idade2 = "20";

Com esse Condicional eu comparo o TIPO E o VALOR
if (idade2 === 20) {
  console.log("Você tem 20 anos");
}
*/

// Se fizesse uma operação de soma dentro do if utilizando o condicional ==
// o resultado seria concatenado porque minha variável idade está em "20" string.
let idade2 = "20";

if (idade2 == 20) {
  idade2 += 15; // também poderia ser idade2 = idade2 + 15;
  console.log(`Idade atualizada com sucesso! Sua idade agora é ${ idade2 }`);
}

// Aqui não entraria no if porque o TIPO da variável está como string 
// e na comparação === está com o TIPO em número, logo, são tipos diferentes e a condição não é executada.
let idade3 = "20";

if (idade3 === 20) {
  idade3 += 15;
  console.log(`Idade atualizada com sucesso! Sua idade agora é ${ idade3 }`);
}

// Operações do jeito certo //
let idade = 20;

// tanto assim
if (idade === 20) {
  idade += 15;
  console.log(`Idade atualizada com sucesso! Sua idade agora é ${ idade }`);
}

// quanto assim
let idade4 = 20;

if (idade4 == 20) {
  idade4 += 15;
  console.log(`Idade atualizada com sucesso! Sua idade agora é ${ idade4 }`);
}
