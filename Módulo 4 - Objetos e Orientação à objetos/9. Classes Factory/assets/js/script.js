class Person {
  age = 0;

  constructor (name) {
    this.name = name;
  }
}

// Usando Factory
function createPerson(name, age) {
  let p = new Person(name, age);
  p.age = age;
  return p;
}

// Essa variável se transformará em um objeto de Person graças ao factory
let p1 = createPerson("Erivelton", 33);

console.log(`${ p1.name } tem ${ p1.age } anos`);