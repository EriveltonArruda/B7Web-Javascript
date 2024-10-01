let isMember = true;

// Exemplo do frete
let shipping = isMember ? 2 : 10;

// posso usar condicional ternário dentro do console.log
console.log(isMember ? "Você é membro" : "Você NÂO é membro");
console.log(`Frete: ${ shipping }`);

// Exemplo de idade
let age = 90;

// Pode ser feito das duas formas abaixo.
// let isAdult = age >= 18 ? true : false;
let isAdult = age >= 18 ? "Sim" : "Não";

console.log(isAdult);
