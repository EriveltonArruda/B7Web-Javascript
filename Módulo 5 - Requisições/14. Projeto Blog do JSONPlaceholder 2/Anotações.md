## Etapa 2 (Processo de inserir um novo post).

Primeiro de tudo preciso colocar uma ação no botão de inserir, porque quero que esse botão faça uma leitura do título e do body quando clicar nele, se eles estiverem preenchidos, a função de adição de post será executada.

A requisição de adicionar os posts não será feita dentro do if da ação de clique, vou criar uma função que faça isso para deixar o código mais organizado.

## Função addNewPost

Nessa função será feita uma requisição POST com os dados de título e body, feita a requisição vou limpar os campos e vou recarregar os posts com a função readPosts().

Geralmente quando estamos mandando uma requisição POST fazemos o body dessa forma abaixo.

```
body: JSON.stringify({
      title: title,
      body: body,
      userId: 2
    })
```

Contudo, quando tenho um objeto no Javascript onde a propriedade tem o mesmo nome da variável que estou passando (que é o caso de title e body), posso colocar somente a variável dessa forma:

```
body: JSON.stringify({
      title,
      body,
      userId: 2
    })
```

O Próximo passo é limpar os campos de title e body e recarrego os posts executando a função readPosts.
