class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }
}

// Usando Factory
function createPerson(name, age) {
  let p = new Person(name);
  p.age = age;
  return p;
}

// Essa variável se transformará em um objeto de Person graças ao factory
let p1 = createPerson("Erivelton", 33);

console.log(`${p1.name} tem ${p1.age} anos`);

// Prática
class Car {
  color = "Branca";

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

function createCar(brand, model, color) {
  let c = new Car(brand, model);
  c.color = color;
  return c;
}

let c1 = createCar("Porsche", "811 Turbo", "Vermelha");

console.log(`Depois de muito esforço, consegui comprar minha ${c1.brand} ${c1.model} na cor ${c1.color}`);