// let ok = true; // Aqui entra no IF
let ok = false; // Não entra no IF, mas entra no else.

if (ok) {
  console.log("Entrou no IF");
} else {
  console.log("NÂO Entrou no IF");
}

let idade = 14;

// Devolve verdadeiro ou falso
let verificacao = idade > 18;

if (verificacao) {
  console.log("Entrou no IF");
} else {
  console.log("NÂO Entrou no IF");
}

// Verificação com Multi-condicionais na própria variável
let adulto = idade >= 18 && idade < 60;

if (adulto) {
  console.log("É Adulto");
} else {
  console.log("NÂO é Adulto");
}

// Também podemos fazer condicionais dentro de um console.log
console.log(idade > 18);
