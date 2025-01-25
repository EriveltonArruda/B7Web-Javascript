Para exemplificar o uso de uma requisição post, criei um botão no HTML para fazer a requisição ao clicar, esse botão executará a função inserirPost() que tem a requisição.

## Método POST

Um método POST é onde fazemos uma inserção de dados em uma requisição, não confunda com UPDATE, com o update nós editamos uma informação existente enquanto com o POST é adicionado uma informação nova.

O método post é colocado no segundo parâmetro da função fetch.

Quando fazemos uma requisição post, podemos colocar o corpo da requisição, o corpo são os dados que serão enviados internamente junto com a requisição.

Estou usando um stringify no body porque a requisição precisa enviar um objeto transformado em string.

Assim como também podemos enviar headers, nesse header eu vou colocar somente a informação do conteúdo que está sendo enviado, que no caso é uma aplicação Json.
