## Passo a passo

Para controlar o log, vou criar uma classe só para isso, essa classe terá uma lista de array vazio, nessa lista eu vou adicionar as mensagens.

Assim que adicionar as mensagens eu vou exibir na tela usando uma função chamada render.

Essa função vai limpar o elemento e em seguida vai percorrer a lista e preencher os itens no elemento.

Uma vez que a classe foi criada no arquivo de classes, vou instanciar ela no script.js e ainda no script.js vou passar o log como parâmetro.

Em seguida preciso ir lá na classe log dentro do arquivo classes.js e adiciono o log no construtor do stage

Feito isso, preciso usar esse log, usarei ele na função doAttack assim:

```
this.log.addMessage()
```
