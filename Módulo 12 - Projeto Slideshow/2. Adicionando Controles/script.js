// quantidade de slides
let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0; // começa sempre nesse slide

// largura dinâmica dos slides
document.querySelector('.slider--width').style.width = `calc(100vw * ${ totalSlides })`;
// jogando a altura do slider dentro de slider--controls
document.querySelector('.slider--controls').style.height = `${ document.querySelector('.slider').clientHeight }px`;

// botão de foto anterior
function goPrev() {
  currentSlide--;
  // se estiver no primeiro slide quando clicar no botão, vai para o último slide
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  // Atualiza a margem para a imagem rodar
  updateMargin();
}

// botão de próxima foto
function goNext() {
  currentSlide++;
  // se estiver no último slide e clicar em próximo, vai para o primeiro slide
  if (currentSlide > (totalSlides - 1)) {
    currentSlide = 0;
  }
  updateMargin();
}

// faz a imagem rolar, baseado no currentSlide vai setar o marginLeft (sempre negativo)
function updateMargin() {
  // clientWidth é a largura da tela do navegador.
  let newMargin = (currentSlide * document.body.clientWidth);
  // Selecionando a div responsável por rolar as imagens e adicionando a nova margem
  document.querySelector('.slider--width').style.marginLeft = `-${ newMargin }px`;
}

// rolagem automática a cada 2 segundos
setInterval(goNext, 2000);