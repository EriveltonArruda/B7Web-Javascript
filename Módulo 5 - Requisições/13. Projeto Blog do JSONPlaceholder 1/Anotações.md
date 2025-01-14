## O que será esse projeto?

Esse projeto será um blog fake, ele vai pegar os posts daquela API fake e exibir na tela, também vou adicionar a funcionaldade para criar e inserir um post novo, como a API é fake não vai ser adicionado na API, mas vai se comportar como se tivesse atualizado.

## Etapas do projeto

Esse projeto precisará de 2 etapas para ser feito do 0:

1. Conseguir ler os posts, então criarei uma função para ler os posts e exibir na tela chamada readPosts().
2. Fazer o processo de adicionar um post novo (feito na próxima Aula).

## Etapa 1 (Ler os posts)

Essa função será executada assim que a tela abrir, então vou chamar ela logo abaixo da criação da função.

Dentro da função readPosts eu vou selecionar a div que será responsável por exibir os posts e vou colocar um texto de carregando para o usuário ver.

Em seguida vou fazer minha requisição.

É importante lembrar que sempre que for fazer uma requisição, faça uma validação para ter certeza de que os dados estão chegando corretamente.

Dentro da minha validação eu vou limpar o nome "carregando" para poder inserir os posts dentro da div e vou criar um loop for para inserir todos os posts.

Dentro desse loop vou criar uma variável chamada postHTML e dentro dela vou ter a seguinte estrutura: uma div, um título, um body e uma linha horizontal para separar os posts.

Importante saber que quando concatenar o postArea.innerHTML com o postHTML, a cada post inserido no loop, o DOM vai remover tudo da memória e vai adicionar tudo de novo, no próximo loop ele tira tudo que tem e adiciona 2 posts, no próximo ele tira tudo e adiciona 3 posts e assim sucessivamente.

Essa não é a forma mais otimizada de fazer, o ideal seria criar cada um dos elementos, adicionar o título e o body em seus respectivos elementos e depois adicionar no postArea via append porque ai ele ia pegar os elementos e adicionar na div e não ia remover da memória e adicionar, mas para o projeto que é criar um blog simples, desse jeito vai ser suficiente.
