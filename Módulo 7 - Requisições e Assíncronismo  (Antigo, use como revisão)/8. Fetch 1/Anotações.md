## Uso do fetch

Fetch é quem recebe as requisições e retorna uma promise.

Podemos guardá-la em uma variável ou usar diretamente sem variável.

Essa função recebe 2 parâmetros:

1. A URL que queremos fazer a requisição
2. é opcional e recebe o objeto com os métodos da requisição, GET, POST, PUT ou DELETE, caso não seja colocado nenhum método, a requisição será GET por padrão.

## Resultado da requisição

para poder manipular o resultado da requisição no primeiro then, precisamos antes transformar o resultado da requisição em objeto com a função json().

Em seguida estou exibindo no segundo then o resultado da requisição já transformada em objeto na div #posts, coloquei para mostrar a quantidade de posts usando o length.

Coloquei um catch para caso ocorresse algum erro.
