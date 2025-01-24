## Uso do fetch

Fetch retorna uma promise.

Podemos guardá-la em uma variável ou usar sem a variável.

Essa função recebe 2 parâmetros:

1. A URL que queremos fazer a requisição
2. é opcional e recebe o objeto com os métodos da requisição, GET, POST, PUT ou DELETE, caso não seja colocado nenhum método, a requisição será GET por padrão.

## Resultado da requisição

para poder manipular o resultado da requisição no then, precisamos antes transformar o resultado da requisição em objeto com a função json().

Em seguida estou exibindo no segundo then o resultado da requisição na div #posts.

Coloquei um catch para caso ocorresse algum erro.
