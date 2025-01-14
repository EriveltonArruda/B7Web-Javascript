let nome = '      Erivelton Rodrigues      ';

// Substituir textos em uma string
let troca = nome.replace('Erivelton', 'Everton');
console.log(troca);

// Transforma toda a string em maiúsculo
let maiusculo = nome.toUpperCase('Erivelton Rodrigues');
console.log(maiusculo);

// Transforma toda a string em minúsculo
let minusculo = nome.toLowerCase('Erivelton Rodrigues');
console.log(minusculo);

// concatena strings
let junto = nome.concat(' de Arruda');
console.log(junto);

// Limpa os espaços em branco da string
let limpa = nome.trim();
console.log(limpa);

// Mostra o caractere que está na posição passada no parâmetro
let posicao = nome.charAt(6);
console.log(posicao);

let ingredients = "Chocolate,Ovo,Farinha,Manteiga,Açúcar";

// Transforma string em array
let array = ingredients.split(',');
console.log(array);