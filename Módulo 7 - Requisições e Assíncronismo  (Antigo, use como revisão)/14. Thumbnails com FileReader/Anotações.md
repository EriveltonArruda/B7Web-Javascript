## FileReader()

Essa classe FileReader é em parte assíncrono e tem métodos para mostrar a thumbnail.

## readAsDataURL()

Ela vai ser usada para ler a imagem passada no input, contudo, esse processo não é instantâneo, então quando o readAsDataURL ler a imagem ele vai executar um callback, esse callback será responsável por criar e exibir a imagem na tela, ele tem que ser configurado antes do readAsDataURL ler a imagem.

## onloadend

essa função de callback é onde vamos criar a imagem para ser exibida na tela, o reader.result vai ter a URL da imagem para poder exibir na div.
