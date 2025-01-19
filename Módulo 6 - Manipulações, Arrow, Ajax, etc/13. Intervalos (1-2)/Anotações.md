## O que são?

São diferentes tipos de timers, onde configuramos um código específico para ficar rodando de x em x segundos, horas, milisegundos ou até mesmo esperar um determinado tempo para poder ser executado.

## Função setInterval()

Essa função recebe dois parâmetros:

1. A função que queremos executar
2. O intervalo entre uma execução e outra (em milisegundos).

## Função clearInterval()

Responsável por parar o timer. Ela recebe como parâmetro a variável que tem o timer.

Para usar ele, vou criar dois botões no HTML, um para começar e outro para parar o timer.

No Javascript vou precisar que a variável timer seja declarada em escopo global para que eu possa usar ela tanto na função de começar quanto na de parar, porque se eu criar o timer dentro da função, ele só existirá em escopo de bloco.
