Aqui vou montar um mini blog, então em vez de exibir a quantidade de posts, vou carregar os posts na tela.

Para fazer isso eu vou criar uma função que vai montar o html e em seguida vai jogar na tela, essa função ficará dentro do then que exibe o resultado na div.

## Função montarBlog()

Dentro da função eu vou criar uma variável vazia chamada html e em seguida vou criar um loop for.

Dentro desse loop eu vou criar um h3, vou pegar o título da requisição e vou colocar dentro da variável html, também vou criar pegar o body da requisição e colocar dentro da variável html com uma quebra de linha, além disso, vou colocar um <hr> para separar os posts.

Feito isso, seleciono a div de posts porque é nela que vou exibir os dados e coloco o html que contém o títtulo e o body da requisição nela.
