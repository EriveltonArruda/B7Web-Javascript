let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

// Variáveis de controle de ambiente
let etapaAtual = 0; // mostra as informações do arquivo etapas.js
let numero = ''; // variável que receberá os números digitados

// Limpa a tela, pega as informações da etapa atual e vai preencher o que precisa na tela
function comecarEtapa() {
  let etapa = etapas[etapaAtual]; // pegando a etapa do arquivo etapas.js

  let numeroHtml = ''; // quadrados onde os números vão entrar

  // cria a quantidade de quadrados com base no título atual (vereador ou prefeito)
  for (let i = 0; i < etapa.numeros; i++) {
    // Quando i = 0, a classe pisca será adicionada
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>';
    } else {
      numeroHtml += '<div class="numero"></div>';
    }
  }

  seuVotoPara.style.display = 'none'; // tirando a frase inicial
  cargo.innerHTML = etapa.titulo; // mostrando a vez (vereador/prefeito)
  descricao.innerHTML = ''; // zerando a descrição
  aviso.style.display = 'none'; // zerando o aviso
  lateral.innerHTML = ''; // zerando as imagens
  numeros.innerHTML = numeroHtml;
}

// será atualizada sempre que houver uma ação
function atualizaInterface() {
  alert('Finalizou de digitar o voto!');
}

// Funções do teclado
function clicou(n) {
  // selecionando o quadrado que tem a classe pisca
  let elNumero = document.querySelector('.numero.pisca');
  // assim que clicar, verifica se algum quadrado está com a classe pisca ativa
  if (elNumero !== null) {
    elNumero.innerHTML = n; // preenchendo no quadrado na tela
    numero = `${numero}${n}`;
    // depois de adicionar o número no quadrado, tira o pisca
    elNumero.classList.remove('pisca');

    // se o próximo item for diferente de nulo, ou seja, tem próximo item e pode ser adicionado
    if (elNumero.nextElementSibling !== null) {
      // fazendo o próximo item piscar, nextElementSibling pega o elemento que está do lado
      elNumero.nextElementSibling.classList.add('pisca');
    } else {
      // não tem próximo item para adicionar, então atualiza a tela.
      atualizaInterface();
    }
  }
}

function corrige() {

}

function branco() {

}

function confirma() {

}

comecarEtapa();