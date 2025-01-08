## O que será feito na função clicou?

Ao clicar no botão, quero fazer uma requisição para a URL que mostra os posts, vou pegar essa resposta e exibir a resposta em algum lugar.

## funções fetch() e then()

Fetch é uma função do JS para fazer requisições, ela tem alguns parâmetros

1. A própria URL que você quer requisitar.
2. o callback que será executado quando tiver terminado a requisição (função then).

A resposta vai ser passada no primeiro parâmetro do then() e nesse exemplo será chamada de response.

## função json()

Quando recebemos a resposta da requisição, precisamos usar uma função para converter essa resposta em um objeto porque apesar da resposta se parecer com um objeto, ela não é um objeto, para isso usamos a função json().

O próximo then() será utilizado para pegar o objeto que foi criado pelo json para poder ser manipulado como quisermos.

Nesse caso eu quero mostrar o título do primeiro array (isso porque os posts são arrays de objetos)

Lembrando que todo esse processo é feito de forma assíncrona.
