function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age,
    // uso errado do this em programação funcional
    getFullName: () => {
      return `${this.name} ${this.lastName}`;
    },
    // Uso correto do this em programação funcional
    getFullNameThis() {
      return `${this.name} ${this.lastName}`;
    }
  }
}

let person1 = createPerson("Bonieky", "Lacerda", 90);
let person2 = createPerson("Erivelton", "Rodrigues", 33);

console.log(person1.getFullName()); // retornará undefined
console.log(person2.getFullNameThis());