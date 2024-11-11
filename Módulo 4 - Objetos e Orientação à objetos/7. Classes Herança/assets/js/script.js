class Person {
  age = 0;

  constructor (name) {
    this.name = name;
  }
}

// classe que herda tudo de person
// além das próprias características de student
class Student extends Person {
  // constructor da classe student
  constructor (name, id) {
    // name virá de Person
    super(name);
    this.id = id;
  }
}

