## Classes

Classes são os modelos que serão usados para criar o objeto baseado neles, são basicamente modelos.

Dentro de toda classe e objeto, trabalhamos com propriedades e métodos/ações, todo objeto terá características e ações que ele pode executar.

## Construtor

É uma função que será executada sempre que um objeto for criado, no momento de criação do objeto essa função será a primeira a ser executada, ela contém as propriedades do objeto.

## this

O this na orientação a objeto se refere a aquele objeto específico (ao próprio objeto que está sendo criado).

Como foi criado o objeto pessoa, o this se refere ao próprio objeto, por exemplo:

```
No objeto João, o this se refere à João
No objeto Maria, o this se refere à Maria
No objeto Pedro, o this se refere à Pedro
```

No construtor da classe pessoa temos name e age, então quando criarmos o objeto joão, o this será dessa forma:

```
this.name
this.age
é o mesmo disso
joao.name
joao.age
```
