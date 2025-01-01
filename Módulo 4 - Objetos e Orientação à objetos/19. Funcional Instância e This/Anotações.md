## Instância

Na programação funcional não temos classes mas sim funções, então quando criamos uma função que gera um objeto, aquele objeto já é a instância.

## This

Porque no exemplo abaixo o this não funcionou?
Porque eu criei uma propriedade com o getfullName e criei uma função anônima, essa função está dissociada do objeto, ela é independente porque foi colocada como valor da propriedade getFullName, por ser independente ela não tem acesso a outras propriedades do objeto.

```
function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age,
    // a função anônima não tem acesso ao objeto
    getFullName: () => {
      return `${this.name} ${this.lastName}`;
    }
  }
}
```

Como solucionar isso então? simples, criar uma função já sendo uma propriedade, ou seja, criando a função direto no objeto, ai sim a função vai ter acesso as propriedades do objeto.

```
getFullNameThis() {
      return `${this.name} ${this.lastName}`;
    }
```
