// Criando um objeto sem factory
let person = {
  name: "Erivelton",
  lastName: "Rodrigues",
  age: 33
}

// Factory que vai criar um objeto
function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age
  }
}

// Usando o factory
let person1 = createPerson("Bonieky", "Lacerda", 90);
let person2 = createPerson("Erivelton", "Rodrigues", 33);

console.log(person1.name);
console.log(person2.name);