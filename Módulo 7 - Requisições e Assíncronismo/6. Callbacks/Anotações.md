## O que é?

Callback é uma função que você cria e essa função é mandada para uma outra execução (geralmente assíncrona).

No exemplo prático, criei uma função que mostra a mensagem no console, em seguida mandei essa função para dentro do setTimeout, a função alertar só será executada 2 segundos depois, isso é um ótimo exemplo de callback, uma função que é mandada para ser executada quando necessário.

Trazendo para o assunto de requisição é o seguinte:
Vai lá no servidor e pede tal informação, quando você tiver tal informação executa essa função do callback.

## Ordem de execução

Perceba no console que a ordem de execução será diferente, apesar do Timeout estar antes da variável sobrenome, ele só é executado depois dela, porque? Código Assíncrono, ou seja, todo o código foi executado, mas o timeout ficou aguardando a requisição e só foi executado depois dos 2 segundos.
