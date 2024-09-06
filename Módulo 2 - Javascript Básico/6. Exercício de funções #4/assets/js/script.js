/* 
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórumla da porcentagem: (y / x) * 100

Uso da função:
let x = 40;
let y = 10;
let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`)
*/

// Minha solução
function calcPct(x, y) {
  return (y / x) * 100;
}

// Usando a função com as variáveis sendo usadas nos parâmetros.
let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${ pct }% de ${ x } é ${ y }`);

// Solução do professor
function calcPct(n1, n2) {
  let pct = (n2 / n1) * 100;
  return pct;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${ pct }% de ${ x } é ${ y }`);