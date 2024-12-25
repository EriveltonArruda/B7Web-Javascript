class Person {
  // Variáveis comuns
  age = 0;
  steps = 0;

  // Construtor
  constructor(name) {
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

// Exemplo usando a função de dar passos
p1.takeAStep();
p1.takeAStep();
// Comparando o objeto que usou a função com quem não usou
console.log(`Passos de ${p1.name}: ${p1.steps}`);
console.log(`Passos de ${p2.name}: ${p2.steps}`);

// Exemplo usando a função de definir a idade
p1.setAge(20);
console.log(`${p1.name} tem ${p1.age} anos.`);

// Exercício pós aula: Adicionar um botão para contar os passos
let p4 = new Person("Erivelton");
document.querySelector("#btn").addEventListener('click', () => {
  p1.takeAStep();
  p2.takeAStep();
  p3.takeAStep();
  p4.takeAStep();
  console.log(`${p1.name} deu ${p1.steps} passos`);
  console.log(`${p2.name} deu ${p2.steps} passos`);
  console.log(`${p3.name} deu ${p3.steps} passos`);
  console.log(`${p4.name} deu ${p4.steps} passos`);
})

/*
Desafio Simples: Criar uma classe Animal
Nesse desafio, você vai criar uma classe chamada Animal com as seguintes características:

Cada Animal vai ter um nome e uma idade.

Vai ter um método para exibir a descrição do animal (nome e idade).

Vai ter um método para o animal fazer um som (você pode escolher o som que cada animal faz).
*/

class Animal {
  constructor(nome, idade, som) {
    this.nome = nome;
    this.idade = idade;
    this.som = som;
  }

  exibirDescricao() {
    console.log(`${this.nome} tem ${this.idade} anos`);
  }

  fazerSom() {
    console.log(`${this.nome} faz o som: ${this.som}!`)
  }
}

let gato = new Animal("Gaspar", 9, "Miau");
let cachorro = new Animal("Aysha", 2, "Au Au");
let passaro = new Animal("Bem-Te-Vi", 3, "Canto");

gato.exibirDescricao();
cachorro.exibirDescricao();
passaro.exibirDescricao();

gato.fazerSom();
cachorro.fazerSom();
passaro.fazerSom();


