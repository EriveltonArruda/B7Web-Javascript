function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age,
    getFullNameThis() {
      return `${this.name} ${this.lastName}`;
    },
    // Exemplo da substituição do construtor
    start() {
      console.log('Deu start na pessoa');
    }
  }
}

let person1 = createPerson("Erivelton", "Rodrigues", 33);

console.log(person1.getFullNameThis());