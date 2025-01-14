## Slice()

Recebe 2 parâmetros, mas somente o primeiro é obrigatório, o segundo é opcional;

1. Parâmetro: Posição Inicial.
2. Parâmetro: Posição final.

## substring()

Funciona da mesma forma do slice, a diferença é que com o slice podemos começar do final da string, basta colocar um - antes do número.

Já o substring não aceita essa opção.

## substr()

O funcionamento é parecido com o slice e o substring, mas tem uma diferença no segundo parâmetro, onde o primeiro parâmetro é a posição inicial e o segundo parâmetro é a quantidade de caracteres que vai pegar e não mais a posição final.

1. Parâmetro: Posição inicial
2. Quantidade de caracteres que vai pegar (não usa mais a posição final).

Também funciona com números negativos.

Contudo, foi depreciada, use o substring no lugar dela.

## Onde usar na prática?

Para filtrar algum tipo de string, o substr era o mais indicado em 90% dos casos, mas como foi depreciado, use o slice no lugar porque o slice permite usar números negativos e o substring não.
