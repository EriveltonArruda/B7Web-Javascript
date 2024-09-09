// Estrutura de um array
/* crio uma variável normalmente, só que a diferença é que em vez de colocar um valor só, eu coloco um colchete, assim a variável será um array, dentro desse
colchetes fica a lista de variáveis, todas são separadas por vírgula. */
let colors = ["blue", "red", "green"];

console.log(colors);

/* Se quisermos pegar o primeiro item do array, colocamos a posição 0 na 
hora de selecionar o array no console.log */
console.log(colors[0]);

// Tipos de dados em arrays
// Array de Números
let idades = [10, 20, 30]

// Array de string e números
let lista = ["algo", 30, "blablabla", true];

// Criando um array de nomes e colocando esse array dentro de outro array
let nomes = ["Erivelton", "pedro", "Silvia"];
let lista1 = ["blablabla", nomes];

// Criando um array com um array dentro
let lista2 = ["blablabla", ["xx", "yy"]];

//// Pegando valores dentro de um array que está dentro de outro array
// Quero pegar o valor "xx" que está dentro do array lista2

/* Primeiro eu seleciono a posição do array que contém o valor xx, dentro 
do array principal de lista, quem é o array que contém o xx? é a posição [1], 
depois de selecionar a posição onde o array está, eu tenho acesso aos valores 
daquele array específico, então agora qual a posição de xx nesse array? é a
posição [0].
*/
console.log(lista2[1][0]);

// Também posso fazer assim:
/* A variável segundo agora é o array que contém os valores xx e yy de lista, ou seja: ["xx", "yy"] */
let segundo = lista[1];

// Ao chamar a variável segundo e colocar a posição [0], eu pego o valor xx
console.log(segundo[0]); // Resultado: xx