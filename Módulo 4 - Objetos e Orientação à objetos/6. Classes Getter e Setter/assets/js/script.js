class Person {
  // Geralmente se coloca underline antes da variável
  // quando estamos trabalhando com get e set
  _age = 0;

  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // usamos get para combinar variáveis também
  get fullName() {
    return `${ this.firstName } ${ this.lastName }`
  }

  get age() {
    return this._age;
  }

  // definindo a idade
  set age(x) {
    // também podemos fazer a verificação
    if (typeof x == "number") {
      this._age = x;
    } else {
      console.log("Apenas Números!");
    }
  }
}

let p1 = new Person("João", "Silva");
let p2 = new Person("Maria", "Santos");
let p3 = new Person("Pedro", "Duarte");

// usando o set
p1.age = 20;

// O age no template está executando a função age do get
// Assim como o fullName está executando a função fullName do get
console.log(`${ p1.fullName } tem ${ p1.age } anos.`);