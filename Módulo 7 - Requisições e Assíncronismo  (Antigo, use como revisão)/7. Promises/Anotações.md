## Conceito de Promises

É exatamente uma promessa, quando vamos fazer um processo assíncrono, temos que ficar com alguma promessa de resultado, é ai que entra o promise.

Promise é um resultado temporário, quando recebemos um objeto promise, recebemos uma promessa de que daqui a algum tempo teremos:

1. Nunca terá um resultado.
2. Daqui a um tempo terei um resultado.
3. terei um erro e vou receber depois de um tempo.

De toda forma, fica ai aguardando eu venho com o resultado, isso é uma promise.

## Função para usar a promise

Essa função vai teoricamente pegar a temperatura e vai voltar com um resultado, quando ela for executada ela vai retornar uma promise (new Promise), nessa promise eu passo um callback (resolve, reject) que ela executa o callback imediatamente.

No corpo do callback eu estou passando um console.log de pegando temperatura e simulo o processo com um setTimeout de 2 segundos.

na promise é obrigatório ter um resolve e um reject.

1. resolve = quando der certo.
2. reject = quando der errado.

## Usando a Promise

Para usar uma promise podemos armazenar em uma variável e em seguida precisamos dizer o que vamos fazer com ela em caso de sucesso ou de erro

## then

O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.

## catch

É usada para o fracasso da promessa.
