## Variável/Método estático

Variáveis/Métodos estáticos estão associados/fazem referência à classe à qual ela foi criada e não ao objeto.

O estático se transforma em um dado geral, ele não se aplica a ninguém especificamente, mas sim à aquela classe.

## O que são Variáveis e Métodos Estáticos?

Variáveis e métodos estáticos pertencem à classe, e não às instâncias (objetos) dessa classe. Isso significa que eles podem ser acessados diretamente pela classe, sem a necessidade de criar um objeto.

Características principais:

- Compartilhado por toda a classe: Uma variável estática é um dado geral, aplicável a toda a classe, e não a objetos individuais.
- Acessível diretamente pela classe: Você pode usar a classe para acessar métodos e variáveis estáticas, sem precisar instanciar um objeto.
- Não acessível diretamente pelo this: Dentro de métodos não estáticos, você não pode acessar membros estáticos usando this.

## Quando usar?

Para valores ou comportamentos que não dependem de instâncias específicas, como contadores globais, configurações gerais ou constantes.
