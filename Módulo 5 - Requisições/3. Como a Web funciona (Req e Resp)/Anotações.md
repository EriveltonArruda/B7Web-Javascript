## Como a web funciona (Requisição e Resposta)

Requisição é um acesso, quando digito algo no google e dou enter, é uma requisição, todo acesso em um servidor na internet é uma requisição.

Toda requisição e resposta vai com dados juntos deles, são os cabeçalhos e o corpo da requisição/resposta.

```
Request = Requisição.
-> Cabeçalhos / Headers.
-> Corpo / Body

Response = Resposta.
-> Cabeçalhos / Headers.
-> Corpo / Body
```

## Cabeçalhos / Headers

Quando estamos logados no Google, ele precisa saber quem está logado, então nosso navegador precisa dar essa informação.

Essa informação vai em um cabeçalho, nesse cabeçalho tem as informações de quem está navegando, se está sendo navegado por um computador, por um celular ou qual é o tipo de navegador e sua versão, etc.

Os cookies também são enviados nos cabeçalhos.

## Corpo / Body

No corpo vão as informações brutas. Imagine um sistema de chat, quando enviamos uma mensagem na requisição do chat para o servidor, além dos cabeçalhos daquela mensagem também é enviada a informação bruta, mas o que seria essa informação bruta?

Seria a mensagem em si, um "Oi tudo bem?", "Olá", ou seja, o corpo da mensagem, assim o servidor saberá que frase deverá armazenar.

Uma requisição sempre vai ter headers e body, mas nem sempre esse body vai com alguma informação.

## Response

A resposta devolve o HTML da página por exemplo (é uma das possibilidades que a resposta pode enviar).

o corpo sempre tem algum conteúdo (seja texto, HTML, etc).

Os cabeçalhos de resposta são as informações internas que o servidor nos envia (geralmente itens de cache).
