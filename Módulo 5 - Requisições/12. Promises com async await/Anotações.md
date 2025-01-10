## O que são Async e Await?

São formas de forçar o código que é assíncrono a ficar síncrono.

O que basicamente vai ser feito com o async/await é remover os then e os catch do código da aula anterior, fazendo com que o código fique mais resumido.

Para forçar um código a ser síncrono, colocamos o nome async antes da criação da função.

Como o código será forçado a ser síncrono, precisamos armazenar em uma variável, o await precisa ser colocado antes do nome da função que retorna uma promise, ela vai basicamente fazer com que a execução do código freie e só continue quando a requisição acabar.

Importante lembrar que um await só funciona se a função tiver a expressão async, em atualizações futuras a própria função identificará se é async ou não só pelo fato de ter um await dentro da função.
