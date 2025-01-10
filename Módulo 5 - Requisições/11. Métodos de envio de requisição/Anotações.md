## Principais Métodos

```
GET = Pegar informações.
POST = Inserir informações.
PUT = Alterar informações existentes.
DELETE = Deletar Informações.
```

Se não for mencionado nenhum método no fetch, ele será GET por padrão.

## Explicação do método POST usado na aula

Para mostrar como fazemos uma requisição com o método POST vou criar primeiro um botão no HTML para esse fim.

Em seguida vou criar uma função inserir que vai ser responsável pela requisição POST.

Para usar o método post fazemos de forma parecida com um fetch normal, usamos a URL no primeiro parâmetro do fetch e o método é feito no segundo parâmetro do fetch, esse segundo parâmetro é um objeto.

Nesse objeto devemos dizer qual o método que está sendo utilizado, como é um novo post preciso inserir um novo header e um body.

No header eu crio um objeto e dentro dele coloco o tipo do conteúdo que estou mandando para o servidor saber como interpretar.

No body vou mandar um JSON, para criar um JSON é necessário usar uma função que manda um objeto e traduz o objeto em um JSON, é a função JSON.stringify, essa função recebe um objeto, nesse objeto eu passo meu post.

Um post vai ter um título, um body e um id de usuário.

Em seguida eu faço os devidos tratamentos com o then normalmente.
