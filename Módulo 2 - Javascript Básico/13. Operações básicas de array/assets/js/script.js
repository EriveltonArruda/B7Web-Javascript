let ingredientes = ["ovo", "manteiga", "Farinha", "Cacau", "leite"];

// Verificando tamanho do array (length)
console.log(`Total de ingredientes: ${ ingredientes.length }`);

// Adicionando itens quando sabemos o índice do array (NUNCA faça dessa forma)
// ingredientes[5] = "Morango";

// console.log(`Total de ingredientes: ${ingredientes.length}`); // Resultado: Total de ingredientes: 6

// Exemplo do array com um valor empty
// A chave [5] será empty.
// ingredientes[6] = "cebola";

// console.log(`Total de ingredientes: ${ingredientes.length}`);

// Adicionando itens na ÚLTIMA posição do array (push)
ingredientes.push("Morango");

// Adicionando itens na PRIMEIRA posição do array (unshift)
ingredientes.unshift("Doce de leite");
console.log(ingredientes);

// Removendo o ÚLTIMO item do array (pop)
ingredientes.pop();

// Removendo o PRIMEIRO item do array (shift)
ingredientes.shift();