class Person {
  // Variável estática
  static hands = 2;
  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    // Variável estática não funciona com this
    console.log(`Oi eu sou ${this.name} e tenho ${this.hands} mãos`);
    // funciona assim
    console.log(`Oi eu sou ${this.name} e tenho ${Person.hands} mãos`);
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
// Não funciona porque o método é estático
// e objeto não tem acesso ao método estático, apenas a classe tem acesso
p1.sayHello();
// Funcionaria assim:
Person.sayHello();

// Outro exemplo:
console.log(`Oi eu sou ${p1.name} e tenho ${Person.hands} mãos`);

// Prática
class Bedroom {
  static quantity = 1;

  // Incrementando
  static incrementQuantity() {
    this.quantity++;
  }

  constructor(type) {
    this.type = type;
  }
}

let bed = new Bedroom("King Size");

console.log(`Minha cama é tipo ${bed.type}, tenho ${Bedroom.quantity} dela`);

Bedroom.quantity = 2;
console.log(`Minha cama é tipo ${bed.type}, agora tenho ${Bedroom.quantity} dela`);

// usando o incremento
Bedroom.incrementQuantity();
console.log(`Agora tenho ${Bedroom.quantity} camas.`);

/* 
Prática extra para você tentar (GPT):
Crie uma classe Garage com os seguintes requisitos:

Uma propriedade estática totalCars, que começa em 0.
Um método estático addCar() que aumenta totalCars.
Um método de instância describe() que retorna o nome do carro guardado na garagem.
Um construtor que aceita o nome do carro e armazena no atributo carName.
*/
class Garage {
  static totalCars = 0;

  // Método estático para adicionar carros
  static addCar() {
    this.totalCars++;
  }

  // Método de Instância para descrever o carro
  describe() {
    return `Essa garagem guarda um ${this.carName}`;
  }

  // Construtor para definir o carro
  constructor(carName) {
    this.carName = carName;
  }
}


let garage1 = new Garage("Ferrari");
Garage.addCar();

let garage2 = new Garage("Lamborghini");
Garage.addCar();

console.log(garage1.describe()); // "Esta garagem guarda um Ferrari."
console.log(garage2.describe()); // "Esta garagem guarda um Lamborghini."
console.log(Garage.totalCars); // Deve mostrar 2.