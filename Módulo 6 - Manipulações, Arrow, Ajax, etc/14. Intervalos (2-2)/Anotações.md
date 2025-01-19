## setTimeout vs setInterval

Além do setInterval temos o setTimeout, a principal diferença entre os dois é que o interval roda sem parar até que vocÊ pare manualmente com um clearInterval().

O setTimeout espera o tempo necessário para rodar e roda apenas uma vez e acabou.

O setTimeout pode ser atribuído a uma variável ou pode ser avulso (geralmente é utilizado assim).

Os parâmetros do setTimeout são iguais aos do interval:

1. A função que queremos executar
2. O tempo que ele vai precisar esperar para executar a função.

## clearTimeout()

Podemos forçar a parada no meio do processo do setTimeout usando a função clearTeimout().

No parâmetro dela precisamos passar a variável que tem o timer.

Só funciona antes de dar o tempo de execução, se já tiver passado o tempo de execução do setTimeout essa função não funciona.
