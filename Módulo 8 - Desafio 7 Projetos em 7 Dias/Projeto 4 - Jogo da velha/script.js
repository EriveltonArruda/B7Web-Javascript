// Dados iniciais
// Cópia do tabuleiro
let quadro = {
  a1: '', a2: '', a3: '',
  b1: '', b2: '', b3: '',
  c1: '', c2: '', c3: ''
};

// saber se o jogo está rodando
let playing = false;
let vez = 'x';
// mensagem (ganhou, perdeu, empate)
let warning = '';

// Função que reseta o jogo
reset();

// Eventos
document.querySelector('.reset').addEventListener('click', reset);
// percorre todos os itens
document.querySelectorAll('.item').forEach(item => {
  // adiciona o evento de clique a cada um
  item.addEventListener('click', itemClick)
});

// Funções
function itemClick(event) {
  // sabe em quem foi clicado (target contém o elemento clicado)
  let item = event.target.getAttribute('data-item');
  // adiciona o 'x' ou o 'o' no quadro vazio que foi clicado
  if (playing && quadro[item] === '') {
    quadro[item] = vez;
    renderQuadro();
    togglePlayer();
  }
}

function reset() {
  // reseta a mensagem
  warning = '';

  // definir a vez
  let random = Math.floor(Math.random() * 2);
  vez = random === 0 ? 'x' : 'o';

  // resetar os quadros
  for (let i in quadro) {
    // acessando o objeto e zerando ele
    quadro[i] = '';
  }

  // renderizar tudo
  renderQuadro();
  renderInfo();

  playing = true;
}

// função que renderiza o quadro
function renderQuadro() {
  // vai percorrer o quadro e vai verificar se tem algo preenchido em cada elemento, se tiver coloca no HTML, se não tiver, não coloca.
  for (let i in quadro) {
    let item = document.querySelector(`div[data-item=${ i }]`);
    // se tem algo preenchido na memória
    if (quadro[i] !== '') {
      // preenche no HTML
      item.innerHTML = quadro[i];
    } else {
      // caso não tenha, fica vazio
      item.innerHTML = '';
    }

    /* 
    poderia fazer assim sem o if que funcionaria
        item.innerHTML = quadro[i];
    */
  }

  checkGame();
}

function renderInfo() {
  document.querySelector('.vez').innerHTML = vez;
  document.querySelector('.resultado').innerHTML = warning;
}

// Função para trocar a vez
function togglePlayer() {
  vez = vez === 'x' ? 'o' : 'x';
  // exibindo na tela
  renderInfo();
}

// Função para verificar se 'x' ou 'o' ganhou ou se deu empate
function checkGame() {
  if (checkWinnerFor('x')) {
    warning = 'O "x" venceu';
    // finaliza o jogo para evitar que continue clicando
    playing = false;
  } else if (checkWinnerFor('o')) {
    warning = 'O "o" venceu';
    playing = false;
  } else if (isFull()) {
    warning = 'Deu empate';
    playing = false;
  }
}

function checkWinnerFor(i) {
  // possibilidades de vencer
  let pos = [
    // na horizontal
    'a1,a2,a3',
    'b1,b2,b3',
    'c1,c2,c3',

    // na vertical
    'a1,b1,c1',
    'a2,b2,c2',
    'a3,b3,c3',

    // na diagonal
    'a1,b2,c3',
    'a3,b2,c1'
  ];

  // verifica se o player está com algumas dessas posições acima preenchidas
  for (let w in pos) {
    // cada array terá uma possibilidade separada por vírgula
    let pArray = pos[w].split(','); // a1, a2, a3
    // verifica se a posição do player tá preenchida
    let hasWon = pArray.every(option => quadro[option] === vez);
    // se venceu, para a execução
    if (hasWon) return true;
  }

  // caso não ache nenhum vencedor
  return false;
}

// Função de empate
function isFull() {
  // faz um loop no quadro e vê se tem algum vazio
  for (let i in quadro) {
    // se tiver um quadro vazio
    if (quadro[i] === '') {
      // acabou
      return false;
    }
  }

  // se tiver preenchido
  return true;
}