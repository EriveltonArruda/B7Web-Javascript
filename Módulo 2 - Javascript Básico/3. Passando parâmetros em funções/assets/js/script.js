// Função de soma
// passo os parâmetros da função (n1, n2)
function somar(n1, n2) {
  // Variável que receberá os dados dos parâmetros e armazenará
  // O resultado da operação (nesse caso é a soma) nessa variável. */
  let resultado = n1 + n2;
  console.log(`Resultado: ${ resultado }`);
}

// Chamando a variável e passando os parâmetros
// para que a função faça o cálculo
somar(15, 30);

// Processo realizado pela função soma 
/*
n1 vai ser 15
n2 vai ser 30
E dentro da função será feita a soma.
*/

// Exemplo de função de nomes
function nomeCompleto(nome, sobrenome) {
  console.log(`${ nome } ${ sobrenome }`);
}

nomeCompleto("Erivelton", "Rodrigues");
nomeCompleto("João", "Silva");