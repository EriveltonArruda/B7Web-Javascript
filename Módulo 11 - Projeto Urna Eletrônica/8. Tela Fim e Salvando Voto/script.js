// Controle do conteúdo da urna (texto e imagens)
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span'); // Prefeito / vereador
let descricao = document.querySelector('.d-1-4'); // descrição do candidato
let aviso = document.querySelector('.d-2'); // parte inferior da urna
let lateral = document.querySelector('.d-1-right'); // área das fotos
let numeros = document.querySelector('.d-1-3'); // Quadrados dos números

// Variáveis de controle de ambiente
let etapaAtual = 0; // mostra as informações do arquivo etapas.js
let numero = ''; // variável que receberá os números digitados
let votoBranco = false; // vai ser usada no botão branco
let votos = []; // variável para guardar votos

// Limpa a tela, pega as informações da etapa atual e vai preencher o que precisa na tela
function comecarEtapa() {
  let etapa = etapas[etapaAtual]; // pegando a etapa do arquivo etapas.js

  let numeroHtml = ''; // quadrados onde os números vão entrar
  numero = ''; // o número que está na memória vai ser zerado
  votoBranco = false;

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
  let etapa = etapas[etapaAtual];

  // busca pelo candidato
  let candidato = etapa.candidatos.filter((item) => {
    // Se o número do candidato for igual ao digitado na urna
    if (item.numero === numero) {
      return true;
    } else {
      return false;
    }
  });

  // conseguiu achar um candidato
  if (candidato.length > 0) {
    candidato = candidato[0];
    // preenchendo as informações na tela
    seuVotoPara.style.display = 'block';
    descricao.innerHTML = `Nome: ${ candidato.nome }<br/>Partido: ${ candidato.partido }`;
    aviso.style.display = 'block';

    // variável que vai receber as fotos do candidato
    let fotosHtml = '';

    // preenchendo as fotos de acordo com as fotos do candidato
    for (let i in candidato.fotos) {
      // Montando a foto do candidato
      if (candidato.fotos[i].small) {
        fotosHtml += `<div class="d-1-image small"><img src="images/${ candidato.fotos[i].url }" alt="" />${ candidato.fotos[i].legenda }</div>`;
      } else {
        fotosHtml += `<div class="d-1-image"><img src="images/${ candidato.fotos[i].url }" alt="" />${ candidato.fotos[i].legenda }</div>`;
      }
    }

    lateral.innerHTML = fotosHtml; // exibindo a foto do vereador/prefeito
  } else { // voto nulo
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
  }

  console.log("Candidato", candidato);

}

// Funções do teclado
function clicou(n) {
  // selecionando o quadrado que tem a classe pisca
  let elNumero = document.querySelector('.numero.pisca');

  // assim que clicar, verifica se algum quadrado está com a classe pisca ativa
  if (elNumero !== null) {
    elNumero.innerHTML = n; // preenchendo no quadrado na tela
    numero = `${ numero }${ n }`;
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
  comecarEtapa();
}

function branco() {
  // só funciona se não digitou nada
  if (numero === '') {
    votoBranco = true; // pode votar em branco
    seuVotoPara.style.display = 'block'; // exibe a div de seu voto
    aviso.style.display = 'block'; // exibe o aviso
    numeros.innerHTML = ''; // zera os números
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    lateral.innerHTML = '';
  } else {
    alert('para votar em BRANCO, não pode ter digitado nenhum número!');
  }
}

function confirma() {
  let etapa = etapas[etapaAtual];

  let votoConfirmado = false;

  // só funciona em duas ocasiões
  if (votoBranco === true) {
    votoConfirmado = true;
    // adicionando o voto do Branco na variável de ambiente
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: 'branco'
    });
  } else if (numero.length === etapa.numeros) { // o candidato ou Nulo
    votoConfirmado = true;
    // adicionando o voto do candidato na variável de ambiente
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: numero
    });
  }

  if (votoConfirmado) {
    // Se o voto foi confirmado, pule para a próxima etapa (ou título)
    etapaAtual++;

    // se existir a próxima etapa
    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa();
    } else {
      document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM!</div>';
      console.log(votos);
    }
  }
}

comecarEtapa();