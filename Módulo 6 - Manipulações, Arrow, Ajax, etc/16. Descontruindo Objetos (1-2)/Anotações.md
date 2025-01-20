## Como é chamado

Essa desconstrução pode ser feita tanto com objetos quanto com arrays, em alguns lugares é chamado de destructuring ou desestruturação.

Para entender melhor do que se trata esse conceito, vou criar um objeto pessoa e dentro dele vou colocar outro objeto e uma função além das propriedades de pessoa.

## O que é?

É uma forma de acessar as informações do objeto e transformar em uma variável.

Tudo o que temos que fazer é criar um "objeto" no momento de criação da variável e referenciar o objeto a qual estamos querendo desconstruir, nesse novo objeto que está sendo criado colocamos os nomes das variáveis que queremos pegar do objeto referenciado (no caso o objeto pessoa).

## Alteração de nome da variável

Também podemos alterar o nome da variável, apesar de eu querer a propriedade nome, sobrenome e idade não quero que as novas variávels tenham esse nome, então para alterar eu só preciso colocar a propriedade que eu quero, colocar dois pontos (:) e em seguida colocar o novo nome da variável.
Dessa forma ele vai pegar a propriedade nome do objeto pessoa e vai salvar na variável externa com o nome,sobrenome e idade que foram definidos depois dos dois pontos (:).

## Valor Padrão

Imagine que você pegou um objeto de um webservice e desconstruiu esse objeto tendo idade, só que esse objeto veio sem a idade, para que não dê erro de undefined você pode definir um valor padrão à essa variável colocando um igual (=) e definindo seu valor, esse valor padrão só será aplicado se o objeto não tiver a propriedade, caso o objeto tenha, prevalecerá o valor que está na propriedade do objeto.
