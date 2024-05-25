// Parâmetros de if/else
/*
um if e else funciona exatamente dessa maneira:
SE (tal condição for verdadeira) {
	execute isso 
} 
CASO CONTRÁRIO ou SE NÂO {
	execute isso
}

Colocamos a condição dentro de parênteses e se for verdadeira, ela vai executar a ação que definirmos, essa ação do if só será executada se for verdadeira, caso contrário ela executa a ação do else.
*/

// Exemplo de maior de idade //
/*
let idade = 19;

if (idade >= 18) {
  console.log(
    `Maior de idade é quem tem 18 anos, sua idade é: ${idade}, logo, você é MAIOR de Idade`
  );
} else {
  console.log(
    `Maior de idade é quem tem 18 anos, sua idade é: ${idade}, logo, você é MENOR de Idade`
  );
}
*/

// Comparação em if
let idade = 14;

// se usa dois sinais de iguais para comparar se os valores são iguais, não se usa um igual (=) porque esse é um sinal de atribuição de valor à variável.
if (idade == 18) {
  console.log(
    `Maior de idade é quem tem 18 anos, sua idade é: ${idade} logo, você é MAIOR de Idade`
  );
} else {
  console.log(
    `Maior de idade é quem tem 18 anos, sua idade é: ${idade} logo, você é MENOR de Idade`
  );
}
