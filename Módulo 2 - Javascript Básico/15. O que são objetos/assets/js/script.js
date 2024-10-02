// Forma de criar variável normal
let nome = "Erivelton";

// Array de variáveis
// Erivelton é a chave [0], Pedro é a chave [1]
let nomes = ["Erivelton", "Pedro"];

// Objeto com características de um personagem de RPG
let personagem = {
  // Propriedade: valor
  nome: "Erivelton",
  idade: 32,
  País: "Brasil",
  // Array dentro de objetos
  olhos: ["Preto", "Azul"],
  // Objeto Características
  caracteristicas: {
    // Não posso colocar caracteres especiais como "ç"
    forca: 20,
    magia: 5,
    stamina: 15,
  },
};

// Para selecionar um item de um objeto digitamos o nome do objeto seguido da sua propriedade depois de um ponto(.)
console.log(`${ personagem.nome } tem ${ personagem.idade } anos`);

// Selecionando um objeto dentro de outro objeto
console.log(personagem.caracteristicas.magia);

// Selecionando o valor do array que está dentro do objeto
console.log(personagem.olhos[1]);