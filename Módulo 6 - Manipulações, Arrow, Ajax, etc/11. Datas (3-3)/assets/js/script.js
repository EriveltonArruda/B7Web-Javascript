let d = new Date();

// Define o ano do Date
d.setFullYear(2025);
console.log(d);

// Define o mês
d.setMonth(11);
console.log(d);

// Troca o dia do mês
d.setDate(15);
console.log(d);

// Adicionando 5 dias a frente
d.setDate(d.getDate() + 5);
console.log(d);

// A mesma lógica se aplica as horas, minutos e etc
d.setHours(d.getHours() + 24);
console.log(d);