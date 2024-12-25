// Classe pai
class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`${this.name} diz Oi!`);
  }
}

// classe que herda tudo de Person
// além das próprias características de Student
class Student extends Person {
  // constructor da classe student
  // somente Student tem id, Person não tem
  constructor(name, id) {
    // name virá de Person, super está com parênteses porque está usando a função construtor
    super(name);
    this.id = id;
  }

  // Sobrescrevendo a função da classe pai
  sayHi() {
    console.log(`${this.name} é um estudante e diz olá.`);
  }

  sayHello() {
    // executando a função da classe pai
    super.sayHi();
  }
}

let p1 = new Student("Erivelton", 1);
// como Student herda tudo de Person, tenho acesso ao age, então posso modificar
p1.age = 33;
console.log(`${p1.name} tem ${p1.age} anos e matrícula: #${p1.id}`);

p1.sayHi();
p1.sayHello();

/*
Desafio: 
Crie uma classe Employee (Funcionário), que herda de Person (Pessoa).

O Employee deve ter um atributo adicional chamado position (cargo), que não existe na classe Person.

Sobrescreva o método sayHi() na classe Employee para que, quando chamado, ele mostre uma mensagem como: "Olá, meu nome é [nome] e sou [cargo].".

Adicione um método chamado introduce() na classe Employee, que deve chamar o sayHi() da classe pai utilizando super(), e também adicionar uma descrição do cargo, como: "Eu sou [cargo] e minha matrícula é #[id].".

Exemplo de saída esperada:
Olá, meu nome é João e sou Programador.
Eu sou Programador e minha matrícula é #123.
*/

class Employee extends Person {
  constructor(name, position, id) {
    super(name);
    this.position = position;
    this.id = id;
  }

  sayHi() {
    console.log(`Olá, meu nome é ${this.name} e sou ${this.position}.`);
  }

  introduce() {
    super.sayHi();
    console.log(`Eu sou ${this.position} e minha matrícula é: #${this.id}`);
  }
}

let employee = new Employee("Erivelton", "Programador", 123);
employee.sayHi();
employee.introduce();