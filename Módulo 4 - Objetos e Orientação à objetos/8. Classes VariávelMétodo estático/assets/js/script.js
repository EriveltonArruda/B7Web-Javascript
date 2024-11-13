class Person {
  // Variável estática
  static hands = 2;
  age = 0;

  constructor (name) {
    this.name = name;
  }

  sayHi() {
    // Variável estática não funciona com this
    console.log(`Oi eu sou ${ this.name } e tenho ${ this.hands } mãos`);
    // funciona assim
    console.log(`Oi eu sou ${ this.name } e tenho ${ Person.hands } mãos`);
  }

  // Método estático
  static sayHello() {
    console.log("Oi");
  }
}

let p1 = new Person("Erivelton");
// Assim alteramos o valor da variável estática
// porém, não é muito utilizado
Person.hands = 3;

p1.sayHi();
// Não funciona porque o método é estático.
// E objeto não tem acesso ao método estático, apenas a classe tem acesso
p1.sayHello();

console.log(`Oi eu sou ${ p1.name } e tenho ${ Person.hands } mãos`);

// Prática
class Bedroom {
  static quantity = 1;

  constructor (type) {
    this.type = type;
  }
}

let bed = new Bedroom("King Size");

console.log(`Minha cama é tipo ${ bed.type }, tenho ${ Bedroom.quantity } dela`);

Bedroom.quantity = 2;
console.log(`Minha cama é tipo ${ bed.type }, agora tenho ${ Bedroom.quantity } dela`);