## Classes

Classes são os modelos que serão usados para criar o objeto baseado neles.
É um conceito, não funciona sem antes criar o objeto.

Dentro de toda classe trabalhamos com propriedades e métodos/ações, todo objeto terá características e ações que ele pode executar.

## Construtor

É uma função que será executada sempre que um objeto for criado, no momento de criação do objeto essa função será a primeira a ser executada, ela contém as propriedades do objeto.

É o método especial chamado automaticamente quando criamos um novo objeto de uma classe.

## this

O this na orientação a objeto se refere a aquele objeto específico (ao próprio objeto que está sendo criado).

Refere-se ao objeto atual (a instância da classe) e permite acessar ou definir as propriedades e métodos dela.

Como foi criado o objeto pessoa, o this se refere ao próprio objeto, por exemplo:

```
No objeto João, o this se refere à João
No objeto Maria, o this se refere à Maria
No objeto Pedro, o this se refere à Pedro
```

Exemplo: no construtor da classe pessoa temos name e age, então quando criarmos o objeto joão, o this será basicamente isso:

```
this.name
this.age
é o mesmo disso
joao.name
joao.age
```
