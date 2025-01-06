## Síncrono

Na forma síncrona, a ordem de execução é esperar pelo código anterior, no exemplo do nome e sobrenome o código de nome será executado primeiro e o sobrenome ficará esperando essa execução terminar para poder ser executado.

Dessa forma, quando a variável nomeCompleto for executada, as variáveis anteriores a ela já terão sido executadas e terão um valor.

## Assíncrono

Na execução assíncrona, não existe espera, ainda no exemplo de name, lastName e fullName as 3 variáveis seriam executadas ao mesmo tempo, como fullName precisa que name e lastName sejam executados antes, retornará um erro de variável não definida em fullName porque name e lastName ainda não existem porque foram executadas ao mesmo tempo.

## Onde usar cada um?

Quando estamos trabalhando com contas matemáticas e definições de variáveis as execuções são muito rápidas, então não tem problema usar execução síncrona.

Já quando trabalhamos com requisições não podemos usar execução síncrona porque na hora de fazer uma requisição ela vai até o servidor onde o site está hospedado (quando visitamos um site por exemplo) e em seguida o servidor precisará acessar o banco de dados e responder à requisição, ou seja, existe um processo que não é instantâneo como declarar uma variável.

Um site não pode ser feito de forma síncrona porque vai fazer com que o site pare e espere a requisição acontecer, nesse caso usamos a execução assíncrona, assim enquanto a requisição é feita e o site não recebe a resposta, podemos mexer no site enquanto isso.
