class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}

// Instanciando um objeto
let p1 = new Person("João", 20);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);

console.log(`${ p1.name } tem ${ p1.age } anos`);
console.log(`${ p2.name } tem ${ p2.age } anos`);
console.log(`${ p3.name } tem ${ p3.age } anos`);

// Classe sem idade no construtor
class PersonSemAge {
  // valor padrão da idade
  age = 0;
  constructor (name) {
    this.name = name;
  }
}

// idade não é mais parâmetro do construtor, então não passo ela
let personJoao = new PersonSemAge("João");
let personMaria = new PersonSemAge("Maria");
let personPedro = new PersonSemAge("Pedro");

// Definindo uma idade para a idade do construtor
personJoao.age = 20;

// A idade só será aplicada a joão
console.log(`${ personJoao.name } tem ${ personJoao.age } anos`);
// os demais continuam com idade 0
console.log(`${ personMaria.name } tem ${ personMaria.age } anos`);
console.log(`${ personPedro.name } tem ${ personPedro.age } anos`);

/* Desafio:
Crie uma classe Car: A classe deve ter dois atributos no construtor: brand (marca do carro) e model (modelo do carro).

Adicione um método getInfo(): Esse método vai retornar uma string que descreve o carro, por exemplo: "O carro é um [marca] [modelo].".

Instancie alguns objetos dessa classe, com marcas e modelos diferentes, e utilize o método getInfo() para mostrar as informações desses carros.

Adicione uma propriedade opcional chamada year (ano do carro), com valor padrão 2023. O ano pode ser alterado após a instância do objeto, caso necessário.
*/

class Car {
  constructor (brand, model, year = 2023) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Descrição do carro
  getInfo() {
    return `O carro é um ${ this.year } ${ this.brand } modelo ${ this.model }`;
  }
}

// instanciando
let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda", "Civic");
let car3 = new Car("Mitsubishi", "Eclipse");

car1.year = 2024;
car2.year = 2024;
car3.year = 1991;

console.log(car1.getInfo());
console.log(car2.getInfo());
console.log(car3.getInfo());