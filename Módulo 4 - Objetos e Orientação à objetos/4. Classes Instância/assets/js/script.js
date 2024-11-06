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

let personJoao = new PersonSemAge("João");
let personMaria = new PersonSemAge("Maria");
let personPedro = new PersonSemAge("Pedro");

// Definindo uma idade para a idade do construtor
personJoao.age = 20;