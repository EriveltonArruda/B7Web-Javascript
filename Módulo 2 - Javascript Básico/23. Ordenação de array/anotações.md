## Explicação do que aconteceu com o sort(a, b)

Na primeira execução do sort, o parâmetro "a" agora é fiat, ano 2022 e "b" é bmw, ano 2018, então a comparação é feita:
2022 é maior que 2018? Sim, então vai retornar 1, ou seja, fiat desce e bmw sobe

```
let cars = [
  { brand: "BMW", year: 2018 },
  { brand: "Fiat", year: 2022 },
  { brand: "Ferrari", year: 2020 },
];
```

agora vai ser feita a comparação entre fiat e ferrari:
2022 > 2020? Sim, então fiat desce de novo e ferrari sobe, meu array fica assim:

```
let cars = [
{ brand: "BMW", year: 2018 },
{ brand: "Ferrari", year: 2020 },
{ brand: "Fiat", year: 2022 },
];
```

Lembrando que a verificação é sempre feita no array original, apesar do array no final ficar ordenado, essa ordenação só é visível ao final de TODAS as comparações

Seguindo para a segunda comparação com base no array original, "a" agora é bmw com o ano de 2018 e "b" é ferrari com o ano de 2020, 2018 > 2020? Não, então bmw sobe uma posição, em seguida ela vai comparar com fiat, 2018 > 2022? Não, então sobe uma posição, ficando na chave [0]

Na terceira comparação, Ferrari é "a", ano 2020 e "b" é fiat, ano 2022, então 2020 > 2022? Não, então entra no else if e sobe uma posição, em seguida vai comparar com bmw, 2020 > 2018? Sim, então desce uma posição;

Essa execução é feita em todos os itens, comparando-os e reordenando eles
