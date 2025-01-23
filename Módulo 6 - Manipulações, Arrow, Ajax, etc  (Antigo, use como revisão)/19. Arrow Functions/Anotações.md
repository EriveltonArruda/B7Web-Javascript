## O que são?

São formas de criar funções, a tradução é basicamente uma função em forma de flecha.

A forma de criação dela é atribuindo a uma variável, geralmente em const, mas pode ser feita com let ou var sem problemas.

Com a Arrow não precisamos colocar o nome function e os colchetes dela são opcionais, isso porque a seta tem função de return, contudo se a função tiver 2 linhas de código no corpo, então os colchetes são obrigatórios.

Quando a Arrow function tem somente um parâmetro, os parênteses são opcionais também, mas se a função não tiver nenhum parâmetro, ai os parênteses são obrigatórios.

Importante lembrar que a Arrow function (também chamada de função anônima) não tem o objeto this, então se for usar funções em objetos e que precisem do this, utilize a função tradicional.
