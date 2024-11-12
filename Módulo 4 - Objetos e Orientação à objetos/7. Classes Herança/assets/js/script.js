// Classe pai
class Person {
  age = 0;

  constructor (name) {
    this.name = name;
  }

  sayHi() {
    console.log(`${ this.name } diz Oi!`);
  }
}

// classe que herda tudo de Person
// além das próprias características de Student
class Student extends Person {
  // constructor da classe student
  // somente Student tem id, Person não tem
  constructor (name, id) {
    // name virá de Person
    super(name);
    this.id = id;
  }

  // Sobrescrevendo a função da classe pai
  sayHi() {
    console.log(`${ this.name } é um estudante e diz olá`);
  }

  sayHello() {
    // executando a função da classe pai
    super.sayHi();
  }
}

let p1 = new Student("Erivelton", 1);
// como Student herda tudo de Person,
// tenho acesso ao age
p1.age = 33;
console.log(`${ p1.name } tem ${ p1.age } anos e matrícula: #${ p1.id }`);

p1.sayHi();
p1.sayHello();
