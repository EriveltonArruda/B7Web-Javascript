function calcularImovel(metragem, quartos) {
  let m2 = 3000;
  let preco = 0;
  switch (quartos) {
    // m2 é 1x, então metragem * m2;
    case 1:
    default:
      preco = metragem * m2;
      break;
    // m2 é 1.2, então é o m2 * 1.2 e só depois multiplico o valor pela metragem;
    case 2:
      preco = metragem * (m2 * 1.2);
      break;
    // m2 é 1.5, então é o m2 * 1.5 e só depois multiplico o valor pela metragem;
    case 3:
      preco = metragem * (m2 * 1.5);
      break;
  }

  return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${ preco }`);