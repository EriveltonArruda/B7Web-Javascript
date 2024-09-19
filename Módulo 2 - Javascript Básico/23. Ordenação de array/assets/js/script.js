let fruits = ["Maçã", "Uva", "Laranja", "Banana"];

/* Essa função não tem parâmetro e ela altera também as chaves, quando a função
for executada, banana que tem a chave [3] se tornará [0] */
fruits.sort();

console.log(fruits);

// função para reverter a ordem
fruits.reverse();

console.log(fruits);

let cars = [
  { brand: "Fiat", year: 2022 },
  { brand: "BMW", year: 2018 },
  { brand: "Ferrari", year: 2020 },
];

/* Essa função vai ser executada em cada item e ela vai definir o seguinte:
Que item fica na frente de qual item? Essa função tem que retornar 0, -1 e 1.
0 = não muda nada;
-1 = volta uma posição.
1 = aumenta uma posição.
O parâmetro do sort (a , b) é o item da vez e o próximo item respectivamente,   será usada pra fazer uma verificação e saber quando comparo o item a com o item b, se vai pra frente ou pra trás. 
para obter o resultado, vou comparar o year.
*/

cars.sort((a, b) => {
  if (a.year > b.year) {
    // sginifica que o ano do a é maior, então vai para frente (pra baixo)
    return 1;
  } else if (a.year < b.year) {
    // volta pra trás
    return -1;
  } else {
    // ano igual, então não muda nada
    return 0;
  }
});

console.log(cars);

// Simplificando meu sort acima
cars.sort((a, b) => {
  return a.year - b.year;
});

// Simplificando ainda mais
cars.sort((a, b) => a.year - b.year);