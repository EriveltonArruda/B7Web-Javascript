let d = new Date();

console.log(d);

// Retorna a data resumida
console.log(d.toDateString());

// Retorna a data sem fuso horário
console.log(d.toUTCString());

// Retorna o texto da data
console.log(d.toString());

// Usando os parâmetros
let da = new Date(2020, 0, 1, 12, 30, 12);

console.log(da);

// Usando Date String
let ds = new Date('2020-01-01 15:42:17');

console.log(ds);