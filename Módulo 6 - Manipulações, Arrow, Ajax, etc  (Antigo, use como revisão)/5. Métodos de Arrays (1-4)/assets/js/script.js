let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

// transforma um array em uma string
let string = lista.toString();

console.log(string);

// transforma o array em uma string separando os itens com o que for passado no parâmetro.
let junto = lista.join('-');
console.log(junto);

// Mostra a posição do item dentro do array (se não achar retorna -1)
let posicao = lista.indexOf('Corante');
console.log(posicao);

// Remove o último item do Array
lista.pop();
console.log(lista);

// Remove o primeiro item do Array
lista.shift();
console.log(lista);

// Adiciona um item no FINAL do Array
lista.push('Chocolate');
console.log(lista);

// Adiciona um item no INÍCIO do Array
lista.unshift('Baunilha');
console.log(lista);

// Substituindo o valor de um item do array (se colocar uma posição inexistente, ela será criada)
lista[0] = 'Ovos';
console.log(lista);