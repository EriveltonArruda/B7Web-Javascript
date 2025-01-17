let d = new Date();

// Pega somente o ano da data que está no Date
console.log(d.getFullYear());

// Pega somente o mês da data que está no Date
console.log(d.getMonth());

// Pega somente o dia da data que está no Date
console.log(d.getDay());

// Pega o dia atual
console.log(d.getDate());

// Pega a hora
console.log(d.getHours());

// Pega os minutos
console.log(d.getMinutes());

// Pega os segundos
console.log(d.getSeconds());

// Pega os milisegundos
console.log(d.getMilliseconds());

// Retorna o Timestamp (quantidade de milisegundos de 1970 até a data atual)
console.log(d.getTime());

// pega o horário atual sem precisar definir objeto
d = Date.now();

console.log(d);