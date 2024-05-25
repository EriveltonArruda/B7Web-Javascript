let idade = 55;

// Condicionais indepentendes, todas as verificações serão executadas.
/*
if (idade < 18) {
  console.log("Você é uma criança");
}

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto");
}

if (idade >= 60) {
  console.log("Você é um idoso");
}
*/

// Condicionais dependentes //
if (idade < 18) {
  console.log("Você é uma criança");
} else if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto");
} else if (idade >= 60) {
  console.log("Você é um idoso");
}
