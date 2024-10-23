let personagem = {
  nome: "Erivelton",
  idade: 32,
  País: "Brasil",
  olhos: ["Preto", "Azul"],
  caracteristicas: {
    forca: 20,
    magia: 5,
    stamina: 15,
  },
};

// Alteração de valor de objetos
personagem.nome // Assim eu acesso
personagem.nome = novo valor // Assim eu defino.

personagem.nome = "Pedro";

console.log(personagem.nome);  // Resultado: Pedro;

// Aumentando a força do personagem em + 5 pontos.
personagem.caracteristicas.forca += 5;

console.log(`Força: ${ personagem.caracteristicas.forca }`); // Resultado: Força: 25

/* A função push é uma função somente de Array, 
não de objetos, mas como a propriedade olhos é um array, 
posso usar a função push nela */
personagem.olhos.push("Verde");

console.log(personagem.olhos); // Resultado: 'Preto', 'azul', 'verde'

// Arrays dentro de objetos //
let personagemBens = {
  nome: "Erivelton",
  idade: 32,
  /* Cada carro será um objeto, preste atenção na vírgula, 
  a vírgula dentro do objeto é a vírgula do objeto,
  a vírgula de fora do objeto é a vírgula do array.
  Cada carro é um objeto e cada objeto duas propriedades */
  carros: [
    { modelo: "Fiat", cor: "preto" },
    { modelo: "Ferrari", cor: "Vermelho" },
  ],
};

// Pegando os valores dos objetos que estão dentro do array carros //

/* Lembrando que carros é um array, por ser array eu não posso usar ponto 
e preciso acessar a posição do primeiro objeto [0], em seguida como é um objeto, 
eu acesso com ponto e em seguida a propriedade que eu quero (cor) */
console.log(personagem.carros[0].cor);
// Resultado: preto

// Se quisesse acessar o segundo carro e pegar seu modelo, 
// como o segundo carro é o segundo item do meu array, 
// eu coloco o [1] e em seguida o seu modelo que é um objeto.
console.log(personagem.carros[1].modelo); // Resultado: Ferrari