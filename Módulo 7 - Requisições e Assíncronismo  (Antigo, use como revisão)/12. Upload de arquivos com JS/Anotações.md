Vou criar um input para fazer um upload de arquivo através de requisição interna e também vou criar um botão no html que é ele quem vai fazer o envio.

## Função enviar()

Nessa função vou selecionar o elemento que contém o arquivo, como ele é um arquivo eu posso usar o método files.

## Método files

Esse método files retorna um objeto chamado Filelist, dentro desse objeto eu posso ter vários arquivos.

Se for um upload simples, você sempre vai pegar o item [0] do files.

Ao fazer isso você receberá um objeto chamado File, esse objeto tem as informações do arquivo que foi enviado e é ele quem precisamos usar.

## Fazendo upload do arquivo

No corpo da requisição é onde o arquivo precisa estar, mas para fazer o envio de arquivos tenho que usar uma classe chamada formData e associar essa classe á uma variável.

## formData()

Uma vez que criei a variável com o formData, vou criar seu título e o body dele, como o body é um arquivo, vou passar o arquivo que será enviado pelo input.

## headers

Como é um envio de um arquivo, eu preciso modificar também os headers, já que não é uma aplicação Json, seu content-type precisará ser alterado para um tipo de conteúdo de arquivo chamado "multipart/form-data"

Obviamente vai dar erro porque esse site que estamos fazendo a requisição não existe e, então quando fizer o upload e clicar em enviar, aperte F12 e vá na aba Network e veja o upload.
