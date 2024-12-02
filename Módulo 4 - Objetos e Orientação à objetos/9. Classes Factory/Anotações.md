## O que é o Factory?

É um conceito, ela basicamente cria coisas (assim como uma fábrica).

No exemplo usei uma função que cria um objeto de Person

Ao criar o Factory, não preciso ficar definindo o age depois (já que o age não vem com o construtor), isso porque já defini o age dentro do factory, só precisei passar o nome e a idade nos parâmetros.

O Factory é um padrão de design que facilita a criação de objetos de maneira centralizada, sem que precisemos diretamente invocar um construtor ou instanciar um objeto com a palavra-chave new. Ele "encapsula" a criação do objeto dentro de uma função (ou método) e permite que o código que utiliza o Factory não precise se preocupar com os detalhes de como o objeto é criado.
