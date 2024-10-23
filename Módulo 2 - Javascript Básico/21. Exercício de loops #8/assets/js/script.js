// 1. Faça um loop que mostre todas as frutas
let fruits = ["Maçã", "Uva", "Banana"];

for (let fruit of fruits) {
  console.log(fruit);
}

// Assim também funciona
for (let i in fruits) {
  console.log(fruits[i]);
}

// 2. conte de 1 até 100 através de um WHILE
let n = 1;
while (n <= 100) {
  console.log(n);
  n++;
}