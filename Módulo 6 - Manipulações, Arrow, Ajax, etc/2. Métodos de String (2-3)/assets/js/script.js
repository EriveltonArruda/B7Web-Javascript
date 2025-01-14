let nome = 'Erivelton Rodrigues';

// Pega um pedaço da String a partir da posição inicial e final
let posicao = nome.slice(0, 10);
console.log(posicao);

// Funciona igual ao slice
let sub = nome.substring(0, 15);
console.log(sub);

// Não funciona mais, foi depreciada
let subs = nome.substr(0, 10);