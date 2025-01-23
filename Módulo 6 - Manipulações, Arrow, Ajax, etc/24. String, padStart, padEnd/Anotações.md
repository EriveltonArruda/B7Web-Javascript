## O que são?

São funções de manipulação de strings que vieram com o Ecmascript.

## padEnd()

Essa função basicamente preenche o final da string com o que for passado no parâmetro, ela tem 2 parâmetros:

1. A quantidade de caracteres que a string tem que ter obrigatoriamente.
2. O item que será inserido para chegar aos 9 itens caso a string não tenha os 9 itens.

Como na variável telefone eu tenho apenas o número 5 dentro da string, ele preencherá 8 itens com o asterísco, os asteríscos só preencherão os itens que faltem, caso a própria string já tenha os 9 itens, então nenhum asterísco será preenchido.

foi usado asterísco, mas pode usar qualquer símbolo ou caractere, apenas lembre-se que espaço conta como caractere.

## padStart()

Tem o mesmo funcionamento e parâmetros do padEnd, a diferença é que agora ele preenche no início da string e não no final.

## Aplicação Prática

Uma boa forma de aplicar essas funções é usando o exemplo de um cartão de crédito, quando um usuário passa o cartão em um site, geralmente é perguntado se seu cartão é aquele e coloca os 4 últimos números, até porque se passasse todos os números do cartão, alguém poderia ter as informações e isso está errado.

Então o que podemos fazer é:
Pegar o cartão e usar o slice nele pra pegar apenas os 4 últimos números do cartão e em seguida usar o padStart para mascarar todos os primeiros números e mostrar somente os 4 últimos, como um cartão tem 16 dígitos, passo 16 no parâmetro.
