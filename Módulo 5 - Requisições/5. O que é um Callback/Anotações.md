## O que é um callback?

É o conceito de criar uma função e passar essa função para alguma parte do código (como argumento) e essa parte do código que recebe a função vai decidir quando usar ela.

Basicamente é uma função que é passada como argumento para outra função, sendo posteriormente executada dentro dessa função. Callbacks são muito utilizados em programação assíncrona, mas também podem ser usados em operações síncronas.

Um evento de clique é um ótimo exemplo disso, isso porque depois de decidir qual será o evento (no caso de clique), temos a função que será executada assim que o clique ocorrer, isso é basicamente o conceito de callback, onde a parte do código que recebe a função decidirá quando usará a função ou seja, no evento de clique.

Essa função pode ser criada dentro do próprio evento (usando arrow function) ou criando uma função antes e passando essa função no evento.

Explicação do que acontece quando clico num botão para fazer uma requisição através de Portugol

```
Função para quando clicar no botão:
- requisição a url X
- tá aqui o callback para quando você tiver a resposta:
-- CallbackMaroto
```

Basicamente dizemos ao Javascript, quando você receber a resposta, execute essa função.

Usando o exemplo de chat, fiz a requisição para pegar as novas mensagens, quando o servidor me retornar as novas mensagens, ele executa o callback, essa função vai servir para pegar as novas mensagens recebidas e exibir na tela, por isso preciso de uma função que vai fazer esse processo de pegar as mensagens, armazenar na variável, exibir na tela as novas mensagens, etc. Nesse exemplo quem faz isso é o Callback.
