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

/*
Desafio Simples: Criar uma classe Animal
Nesse desafio, você vai criar uma classe chamada Animal com as seguintes características:

Cada Animal vai ter um nome e uma idade.

Vai ter um método para exibir a descrição do animal (nome e idade).

Vai ter um método para o animal fazer um som (você pode escolher o som que cada animal faz).
*/

class Animal {
  constructor (nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirDescricao() {
    console.log(`${ this.nome } tem ${ this.idade } anos`);
  }

  fazerSom() {
    console.log(`${ this.nome } está fazendo um som!`);
  }
}

let gato = new Animal("Gaspar", 9);
let cachorro = new Animal("Aysha", 2);
let passaro = new Animal("Bem-Te-Vi", 3);

gato.exibirDescricao();
cachorro.exibirDescricao();
passaro.exibirDescricao();

gato.fazerSom();
cachorro.fazerSom();
passaro.fazerSom();


