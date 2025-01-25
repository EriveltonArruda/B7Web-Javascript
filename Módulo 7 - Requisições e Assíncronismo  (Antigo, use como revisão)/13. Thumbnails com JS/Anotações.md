Aqui veremos como colocar a thumbnail da imagem no momento que ela for selecionada e antes de ser enviada.

A estrutura do HTML será:

1. input com o tipo file que aceite imagem.
2. Botão para mostrar a thumbnail que executará a função mostrar.
3. uma div para mostrar a imagem.

## Função mostrar()

Primeira coisa que preciso fazer nessa função é pegar o input que vai receber a imagem e colocar nele o método files.

Na div que vou exibir a imagem tenho duas opções:

1. crio a imagem diretamente e depois altero a imagem

```
document.querySelector('#area').innerHTML = '<img />';
```

2. Criar a tag da imagem, adicionar tudo e em seguida colocar na div (esse foi o método escolhido).

Como criei a imagem com o createElement, posso colocar seu src, o src será gerado via método URL.createObjectURL e como parâmetro vou passar a imagem que vou pegar no input.

Em seguida pego essa variável img que contém a imagem do input e coloco pra ser exibida dentro da div.
