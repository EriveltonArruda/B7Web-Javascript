## pinião pessoal do Professor

Sempre que for criar uma função dentro de outra função,
crie como uma Arrow function,
dessa forma não vai ter dois nomes function na minha função.

```
function addSquares(a, b) {
  const square = (x) => x * x;

let sqrA = square(a);
let sqrB = square(b);
return sqrA + sqrB;
}

console.log(addSquares(2, 4));
```
