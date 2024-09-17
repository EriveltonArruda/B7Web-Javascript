let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');

/*
/* o [n] do lado de cores dentro do console.log vai pegar a chave do array, 
então na primeira execução n vai ser [0] e seu valor será preto, 
na segunda execução n será [1], então ele será branco e assim sucessivamente.

for (let n = 0; n < 15/ n++) {
  console.log(cores[n]); // Vai ter 11 undefined além dos itens do array
}

fazendo o mesmo que o loop acima, só que dessa vez, a condição vai ser o tamanho do meu array, então quando adicionar um push no array, ele será percorrido pelo loop também.
for (let n = 0; n < cores.length; n++) {
  console.log(cores[n]); 
}
*/


// loop for in
// pega a CHAVE dos itens do array
// no primeiro loop, i vai ser [0], no outro loop será [1] e assim por diante
for (let i in cores) {
  console.log(cores[i]);
}

// Loop for of
// pega o VALOR dos itens do array
for (let cor of cores) {
  /* não preciso colocar cores[cor] porque agora cor é o próprio valor do meu 
  array, ou seja, no primeiro loop, cor é preto, no segundo loop é branco e assim 
  por diante até o final do meu array. */
  console.log(cor);
}

// Usando loops em arrays de objetos
// Array de Objetos
let coresObj = [
  { nome: "preto", qt: 10 },
  { nome: "azul", qt: 5 },
  { nome: "vermelho", qt: 5 },
];

/* Já que nesse loop, cor pega o valor do meu array e ele passa a ser o array 
cores dentro do loop, então eu acesso igual acessaria um objeto (cor.nome, é o
mesmo de acessar como cores.nome) */
for (let cor of coresObj) {
  console.log(`Nome: ${ cor.nome } - Quantidade: ${ cor.qt }`);
}

// formas de acessar as mesmas informações usando os loops anteriores
for (let n = 0; n < coresObj.length; n++) {
  console.log(`Nome: ${ coresObj[n].nome } - Quantidade: ${ coresObj[n].qt }`);
}

for (let i in coresObj) {
  console.log(`Nome: ${ coresObj[i].nome } - Quantidade: ${ coresObj[i].qt }`);
}

// Colocando os textos em maíusculo
for (let i in coresObj) {
  coresObj[i].nome = coresObj[i].nome.toUpperCase();
}

console.log(coresObj);