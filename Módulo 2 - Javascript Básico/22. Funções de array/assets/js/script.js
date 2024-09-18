// Ver quantidade de itens no array com length
let fruits = ["Maçã", "Uva", "Laranja", "Banana"];

console.log(fruits.length);

// Adiciona item no final do array.
fruits.push("Kiwi");

console.log(fruits.length); // Resultado: 5
console.log(fruits) // Resultado: [ Maçã, Uva, Laranja, Banana, Kiwi ]

// Adiciona item no início do array
fruits.unshift("Pera");

console.log(fruits) // Resultado: [ Pera, Maçã, Uva, Laranja, Banana ]

// Remove o último item do array
fruits.pop();
console.log(fruits); // Resultado: [ Maçã, Uva, Laranja ]

// Remove o primeiro item do Array
fruits.shift();
console.log(fruits); // Resultado: [ Uva, Laranja, Banana ]

// Exibir os itens do array em uma string
// esse espaço que está no join vai ser o que vai juntar os itens do array, ele é um separador basicamente.
console.log(fruits.join(" "));

// Alterando o valor pela chave
fruits[1] = "Pêra";

console.log(fruits); // Resultado: ["Maçã", "Pêra", "Laranja", "Banana"]

// Alterando o último item do array
fruits[fruits.length - 1] = "Pêra";

console.log(fruits); // Resultado: ["Maçã", "Uva", "Laranja", "Pêra"]

/* Lembrando que nesse exemplo estamos alterando o útimo item e não adicionando,
podemos adicionar com o push(), mas fique ciente de que usar o push consome 
mais memória porque está fazendo uma ação enquanto o length -1 está fazendo
uma alteração. */