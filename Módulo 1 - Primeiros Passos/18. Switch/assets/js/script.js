// Exemplo da profissão //
// A cor da camisa será escolhida com base na profissão escolhida.
let profession = "policial";

console.log(`Profissão: ${ profession }`);

// Verifico a variável e cada case terá seu código a ser executado
// no lugar de  chaves, são utilizados dois pontos (:)
switch (profession) {
  case "fiscal":
    console.log("Sua camisa será VERDE");
    break;
  case "bombeiro":
    console.log("Sua camisa será VERMELHA");
    break;
  case "policial":
    console.log("Sua camisa será AZUL");
    break;
  // precisamos de um padrão além das opções
  // porque caso nenhuma condição seja escolhida, a padrão assumirá
  default:
    console.log("Sua camisa será PRETA");
}

// Um adendo importante é que é bom colocar sempre um break no final de cada "case"
// isso faz com que o código entenda que aquela condição termina ali
// caso não tivesse o break, o código iria executar tudo de uma vez.