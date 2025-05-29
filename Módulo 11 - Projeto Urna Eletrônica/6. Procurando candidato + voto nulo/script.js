let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>';
    } else {
      numeroHtml += '<div class="numero"></div>';
    }
  }

  seuVotoPara.style.display = 'none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display = 'none';
  lateral.innerHTML = '';
  numeros.innerHTML = numeroHtml;
}

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
      fotosHtml += `<div class="d-1-image"><img src="images/${ candidato.fotos[i].url }" alt="" />${ candidato.fotos[i].legenda }</div>`;
    }

    lateral.innerHTML = fotosHtml; // exibindo a foto do vereador/prefeito
  } else { // voto nulo
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
  }

  console.log("Candidato", candidato);

}

function clicou(n) {
  let elNumero = document.querySelector('.numero.pisca');
  if (elNumero !== null) {
    elNumero.innerHTML = n;
    numero = `${ numero }${ n }`;
    elNumero.classList.remove('pisca');

    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add('pisca');
    } else {
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