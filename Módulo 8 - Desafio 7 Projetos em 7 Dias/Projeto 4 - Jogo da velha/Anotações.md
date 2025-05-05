// código funcionando
document.querySelectorAll('.item').forEach((item) => {
  // adiciona o evento de clique a cada um
  item.addEventListener('click', (e) => {
    // sabe em quem foi clicado (target contém o elemento clicado)
    let loc = e.target.getAttribute('data-item');

    // adiciona o 'x' ou o 'o' no quadro vazio que foi clicado
    if (playing && quadro[loc] === '') {
      quadro[loc] = vez;
      renderQuadro();
      togglePlayer();
    }
  });
});

// código que permite que o jogador continue jogando mesmo depois de terminar
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
  if (quadro[item] === '') {
    quadro[item] = vez;
    renderQuadro();
    togglePlayer();
  }
}

ver porque o código de cima funciona e o de baixo não.
no de cima o jogo é pausado quando alguém vence
no código de baixo o jogo continua...