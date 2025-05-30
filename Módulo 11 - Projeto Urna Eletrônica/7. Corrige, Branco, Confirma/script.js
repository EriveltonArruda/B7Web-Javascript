let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';
let votoBranco = false; // vai ser usada no botão branco

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';
  numero = ''; // o número que está na memória vai ser zerado
  votoBranco = false;

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

  let candidato = etapa.candidatos.filter((item) => {
    if (item.numero === numero) {
      return true;
    } else {
      return false;
    }
  });

  if (candidato.length > 0) {
    candidato = candidato[0];
    seuVotoPara.style.display = 'block';
    descricao.innerHTML = `Nome: ${ candidato.nome }<br/>Partido: ${ candidato.partido }`;
    aviso.style.display = 'block';

    let fotosHtml = '';

    for (let i in candidato.fotos) {
      if (candidato.fotos[i].small) {
        fotosHtml += `<div class="d-1-image small"><img src="images/${ candidato.fotos[i].url }" alt="" />${ candidato.fotos[i].legenda }</div>`;
      } else {
        fotosHtml += `<div class="d-1-image"><img src="images/${ candidato.fotos[i].url }" alt="" />${ candidato.fotos[i].legenda }</div>`;
      }
    }

    lateral.innerHTML = fotosHtml;
  } else {
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
    console.log('Confirmando como BRANCO...');
  } else if (numero.length === etapa.numeros) { // o candidato ou Nulo
    votoConfirmado = true;
    console.log('Confirmando como: ' + numero);
  }

  if (votoConfirmado) {
    // Se o voto foi confirmado, pule para a próxima etapa (ou título)
    etapaAtual++;

    // se existir a etapa
    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa();
    } else {
      alert('FIM! TIRULIRULIRULI');
    }
  }
}

comecarEtapa();