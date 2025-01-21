## Como fazer

O processo de desconstruir arrays é muito parecido com o de desconstrução de objetos.

Como arrays não tem nomes e sim posições que começam em [0], eu preciso dar um nome porque na hora da desconstrução ele vai se tornar em uma variável.

A desconstrução de array é feita na ordem em que o array está sendo criado, ou seja, não tem como colocar um nome e fazer com que ele pegue o último item do array por exemplo, isso porque um array não tem identificação palpável além do index para cada item do array.

## Pular um item do array na desconstrução

Digamos que eu quero somente o nome completo e o instagram e não quero pegar nem o nome e o sobrenome, também não quero criar uma variável para não inutilizar ela.

Como eu faria isso?

Simplesmente coloco uma vírgula e deixo vazio nas posições que são relacionadas aos itens que não quero, dessa forma eu pulo posições.

## Desconstrução em array recém criado

É uma forma de fazer uma desconstrução, é muito utilizada quando estamos fazendo um sistema e queremos criar várias variáveis iniciais do sistema.

## Valor padrão

Também podemos definir um valor padrão assim como na desconstrução de objetos.

## Desconstruindo em funções

Também podemos desconstruir arrays usando funções, só precisamos desconstruir o array e referenciar a função que tem arrays dentro dela, afinal de contas a função está retornando um array.
