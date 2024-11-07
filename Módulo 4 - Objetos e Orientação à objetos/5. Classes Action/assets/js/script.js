class Person {
  // Variáveis comuns
  age = 0;
  steps = 0;

  // Construtor
  constructor (name) {
    this.name = name;
  }

  // Ações do objeto
  takeAStep() {
    this.steps++;
  }

  setAge(newAge) {
    // validação para aceitar apenas números
    if (typeof newAge == "number") {
      this.age = newAge;
    } else {
      console.log("Apenas Números!");
    }
  }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

// Exemplo usando a função de definir a idade
p1.setAge(20);
console.log(`${ p1.name } tem ${ p1.age } anos.`);

// Exercício pós aula: Adicionar um botão para contar os passos
let p4 = new Person("Erivelton");
document.querySelector("#btn").addEventListener('click', () => {
  p4.takeAStep();
  console.log(`${ p4.name } deu ${ p4.steps } passos`);
})