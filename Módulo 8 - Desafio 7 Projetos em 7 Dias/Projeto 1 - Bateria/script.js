// EVENTOS
document.body.addEventListener('keyup', (event) => {
  // tocando o som da tecla pressionada.
  playSound(event.code.toLowerCase());
});

// Composições no input
document.querySelector('.composer button').addEventListener('click', () => {
  // Vendo o que foi digitado no input 
  let song = document.querySelector('#input').value;


  if (song !== '') {
    // transformando em lista
    let songArray = song.split('');
    playComposition(songArray);
  }
});


// FUNÇÕES
function playSound(sound) {
  // Selecionando de forma dinâmica
  let audioElement = document.querySelector(`#s_${ sound }`);
  // Atributo dinâmico
  let keyElement = document.querySelector(`div[data-key= "${ sound }"]`);

  // Toca somente as teclas da bateria
  if (audioElement) {
    // Zerando o áudio
    audioElement.currentTime = 0;
    audioElement.play();
  }

  // Ativando e desativando a cor da div selecionada
  if (keyElement) {
    keyElement.classList.add('active');

    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 300)
  }
}

// Composição feita pelo input
function playComposition(songArray) {
  let wait = 0;

  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${ songItem }`);
    }, wait);

    wait += 250;
  }
}