## O que é?

É uma forma de obrigar o código a esperar o resultado da requisição.

O async e await veio pra acabar com vários then dentro do código, com async e await podemos pegar a requisição, transformar em objeto e exibir na tela com apenas 3 linhas de código.

## Async

Isso vai falar para o Javascript que dentro da função eu vou usar await, importante saber que somente pelo fato de colocar o async não vai dar em nada porque para que ele funcione é necessário colocar o await dentro da função.

```
Forma de fazer uma função anônima ser async

let loadPosts = async ()=> {}
```

## Await

Para usar o await precisamos associá-lo á uma variável.

Ao colocar um await em uma requisição, ele vai fazer com que espere a promise terminar para continuar.
