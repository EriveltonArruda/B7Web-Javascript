## O que é?

Herança é quando uma classe herda características comuns da classe pai.

## super

super se refere sempre a classe pai, ele executa o método da classe pai, ou seja, da classe que está sendo herdada.

## Substituindo métodos da classe pai

A partir do momento que criamos uma função (método) com o mesmo nome da função que existe na classe pai, essa função da classe filho sobrescreverá a função da classe pai no momento de instanciação do objeto.

Se quiser referenciar e usar a função da classe pai dentro de uma função da classe filha, use o super dessa forma abaixo:

```
sayHello() {
  // Usando o método sayHi da classe Person
  super.sayhi();
}
```
