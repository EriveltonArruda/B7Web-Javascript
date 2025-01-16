## map()

Esse método percorre todo o array e aplica uma função em cada item, no exemplo da aula todos os itens do array serão multiplicados por 2.

O map vai percorrer todo esse array e aplicar a função em cada item, vai gerar um novo array e armazenará em uma variável.

Essa função do parâmetro do map pode ser criada em outro lugar e ser passada no parâmetro, não precisa necessariamente ser criada no parâmetro.

O que foi feito com o map poderia ser feito em um loop for e adicionar os itens dentro do for por meio de um push sem problema.

```
for(let i in lista) {
  lista2.push(lista[i] * 2);
}
```

Mas o map já faz isso, então não tem necessidade de criar um loop.

## filter()

Como o nome já diz, é um filtro, ele cria um novo array com os dados que retornaram true dentro do filtro, no exemplo da aula eu quero pegar apenas os números que são menores que 20.

Ela é muito útil para filtrar posts, comentários, likes em blogs.

## every()

Essa função retorna true ou false, ela não gera um novo array, apenas diz se todos os itens do array batem com o parâmetro passado, o retorno só será true se TODOS forem ok.

Funciona basicamente como um && no Javascript.

## some()

Essa função retorna true ou false, também não gera um array e diz se algum dos itens batem com o parãmetro passado, se pelo menos um item satisfazer o que está sendo pedido, retornará true.

Funciona basicamente como um || no Javascript.
