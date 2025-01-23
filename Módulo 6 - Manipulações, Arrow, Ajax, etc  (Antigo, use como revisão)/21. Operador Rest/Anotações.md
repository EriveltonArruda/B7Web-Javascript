## O que é

Nos permite representar um número indefinido de argumentos como um array.

No exemplo passado na função adicionar, ela aceita números como parâmetro, mas digamos que um usuário queira passar uma quantidade indefinida de números no parâmetro da função, como que eu faço para o parâmetro aceitar todos os números mesmo que eu não saiba a quantidade?

Simples, uso o operador Rest e assim ele passa a aceitar todos os parâmetros que forem passados na chamada da função.

Também funciona com strings, não apenas com números.

## Exercício

Vamos supor que eu tenha um array de nomes e o que eu quero é que uma função adicione mais nomes na lista, como fazer isso com o operador Rest e o spread?

## Solução

A solução foi criar um novo array chamado novoConjunto e dentro dele usar o spread porque o operador Rest já foi utilizado no parâmetro da função.
