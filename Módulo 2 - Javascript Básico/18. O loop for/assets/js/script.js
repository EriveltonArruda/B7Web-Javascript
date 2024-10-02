// nos parâmetros temos 3 etapas
n = 0; // 1ª etapa: definimos uma variável que receberá o loop
n < 10; // 2ª etapa: condição que queremos usar.
n++; /* ao fim de cada rodada de bloco, ele executará o código da terceira etapa
e reiniciará caso a condição ainda esteja sendo verdadeira, ou seja, a variável começou em 0 e foi incrementado + 1, 
o loop então retorna à condição (< 10) e verifica se o novo número é menor que 10, 
se for, ele vai executar o código mais uma vez até que o número seja (> 10) */

for (let n = 0; n < 10; n++) {
  // Será exibido no console a string: frase qualquer de 0 até 9, o n é para pegar de 0 até 9
  console.log(`Frase qualquer ${ n }`);
}

// Exemplo da lista de produtos
// digamos que tenho 15 produtos
for (let n = 0; n < 15; n++) {
  console.log(`Produto ${ n }`);
}