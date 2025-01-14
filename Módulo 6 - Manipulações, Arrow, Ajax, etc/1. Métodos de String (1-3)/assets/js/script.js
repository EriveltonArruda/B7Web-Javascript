let nome = 'Erivelton Rodrigues';

// saber quantos caracteres tem na string
console.log(nome.length);

// pode ser feito assim também
let resultado = nome.length;
console.log(resultado);

// Mostra a posição inicial do texto pesquisado na string
let posicaoTexto = nome.indexOf('Rodrigues');
console.log(posicaoTexto);

// Aplicação Prática do indexOf
if (nome.indexOf("Silva") > -1) {
  posicaoTexto = 'Achou';
} else {
  posicaoTexto = 'Não achou!';
}

console.log(posicaoTexto);