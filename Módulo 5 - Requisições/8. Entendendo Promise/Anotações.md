## O que é Promise?

```
Promise = Promessa
```

Uma boa analogia para entender promises é a seguinte:

Um pai promete que vai dar 2 reais ao filho amanhã.

No ponto de vista do filho ele entende que ele vai esperar um determinado intervalo de tempo e quando passar esse intervalo o pai vai cumprir a promessa.

## Trazendo para o código

Se você passar o mouse no fetch, vai perceber que ele retorna uma promise, pois é algo que vai acontecer no futuro, quando fazemos uma requisição e esperamos a resposta é basicamente o conceito de promise pois a promise vai acontecer no futuro.

Quando tenho uma promise, posso executar uma função then em cima dela.

## Explicação do alert para entender assíncronismo

Dentro da minha função clicou() eu criei um alert depois da requisição fetch, perceba que ao clicar no botão o primeiro alert que aparece é o alert fora do fetch, mas porque isso?

O que aconteceu é que quando o fetch foi executado, ele retorna uma promessa, quando ele tiver a resposta ele vai executar os callbacks (as funções do then são callbacks).

Então o fetch foi executado, mandou os respectivos callbacks para executarem quando tiverem a resposta e continuou o fluxo, quem é o próximo item da lista? o alert("OPA, CLICOU!").
O alert que tem dentro do then(response) com o título do post só será executado quando tiver a resposta porque ele é um callback.

Tudo que tem promise é uma função assíncrona.
