let fruits = ["Maçã", "Uva", "Laranja", "Banana"];

/* Essa função não tem parâmetro e ela altera também as chaves, 
Ela ordena em ordem alfabética.
Quando a função for executada, banana que tem a chave [3] se tornará [0] */
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
O parâmetro do sort (a , b) é o item da vez e o próximo item respectivamente,
será usada pra fazer uma verificação e saber quando comparo o item a com o item b, se vai pra frente ou pra trás. 
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

// Explicação do que aconteceu com o sort(a, b) //
/* Na primeira execução do sort, o parâmetro "a" agora é fiat, ano 2022 e "b" é bmw, ano 2018, então a comparação é feita:
2022 é maior que 2018? Sim, então vai retornar 1, ou seja, fiat desce e bmw sobe */

let cars = [
  { brand: "BMW", year: 2018 },
  { brand: "Fiat", year: 2022 },
  { brand: "Ferrari", year: 2020 },
];

/* agora vai ser feita a comparação entre fiat e ferrari:
2022 > 2020? Sim, então fiat desce de novo e ferrari sobe, meu array fica assim:
*/

let cars = [
  { brand: "BMW", year: 2018 },
  { brand: "Ferrari", year: 2020 },
  { brand: "Fiat", year: 2022 },
];

// Lembrando que a verificação é sempre feita no array original, apesar do array no final ficar ordenado, essa ordenação só é visível ao final de TODAS as comparações

// Seguindo para a segunda comparação com base no array original, "a" agora é bmw com o ano de 2018 e "b" é ferrari com o ano de 2020, 2018 > 2020? Não, então  bmw sobe uma posição, em seguida ela vai comparar com fiat, 2018 > 2022? Não, então sobe uma posição, ficando na chave [0]

// Na terceira comparação, Ferrari é "a", ano 2020 e "b" é fiat, ano 2022, então 2020 > 2022? Não, então entra no else if e sobe uma posição, em seguida vai comparar com bmw, 2020 > 2018? Sim, então desce uma posição;

// Essa execução é feita em todos os itens, comparando-os e reordenando eles

// Simplificando meu sort acima
// Nesse sort, vai ser basicamente assim:
// o resultado da subtração vai determinar a posição do item do array, ou seja, se o ano de "a" for maior que o ano de "b", o resultado é positivo, logo, avança uma posição no array, se der negativo volta pra trás e se der 0, fica na mesma  posição
cars.sort((a, b) => {
  return a.year - b.year;
});



// Simplificando ainda mais
cars.sort((a, b) => a.year - b.year);