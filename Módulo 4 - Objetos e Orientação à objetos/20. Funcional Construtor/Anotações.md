## Constructor

Como em programação funcional estamos trabalhando diretamente com o objeto e não com uma instância, não existe uma função que vai ser executada quando o objeto for criado, contudo, o construtor pode ser emulado em programação funcional.

Existem duas formas de fazer isso:

1. Posso criar uma factory e dentro dela eu crio uma função que será o construtor.
2. Substituir o construtor por uma função específica no próprio objeto (o nome disso se chama Bootstrap).
