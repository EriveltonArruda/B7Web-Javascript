// Variável no escopo de bloco
function add() {
  let count = 0;
  count++;
}

// Chamando a função
add();
add();

// mostrando no console a variável que está dentro da função
console.log(count); // Erro porque a variável count está em escopo de bloco

// Variável em escopo global
let count = 0;

function add() {
  count++;
}

// chamando a função uma vez, count será = 1;
add();
// chamando a função de novo, count agora será = 2;
add();

console.log(count); // Resultado: 2;

// variável em escopo global e de bloco
let count = 0;

function add() {
  let count = 0;
  count += 10;
}

add();
add();

// Esse count é o do escopo global e o count que foi iterado foi o do escopo de bloco dentro da função
console.log(count); // Resultado: 0;

// Entendendo melhor sobre escopo global e de bloco (ou local)
let count = 0;

function add() {
  let count = 0;
  count += 10;
  console.log(`Count dentro da função: ${ count }`);
}

// Como chamei a função 2x, terei 2 console.log de dentro da função;
add();
add();

/* O count que está no console.log é o primeiro count que foi declarado e que 
está lá no escopo global */
console.log(`Count fora da função: ${ count }`);