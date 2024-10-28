## Definição de manipulação

Quando selecionamos um elemento com o DOM, temos acessos aos métodos de DOM referentes aos elementos, métodos nada mais são do que funções que alteram o estado original do elemento, ou seja, fazem manipulações.

## Diferenças entre append x innerHTML

Quando usamos o innerHTML, ele pega todo o conteúdo e vai substituir ele, o inner basicamente pega o conteúdo que já tem, adiciona o que você quer adicionar e substitui o formato original, o inner faz uma cópia do estado original e adiciona o conteúdo que você passou para essa cópia, ou seja, ele altera todo o conteúdo do elemento, o elemento sai da memória e é adicionado novamente com a adição.

Com o append isso não acontece, porque o append só adiciona o que você mandou e não tira da memória o elemento original.

De início não parece ter muito impacto usar um ou outro, mas imagine que você tem 1000 itens na sua página e precisa adicionar +1 e usa o innerHTML, ele vai remover os 1000 itens da memória do DOM e vai adicionar 1001 na memória, isso sim prejudica o desempenho, coisa que não aconteceria com o append, então fique ciente disso.

## appendChild

Antes de usar o appendChild, precisamos criar o elemento na memória.
