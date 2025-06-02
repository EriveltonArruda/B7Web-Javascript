// quantidade de slides
let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0; // começa sempre nesse slide

/*
// largura dinâmica dos slides (Tela Completa)
document.querySelector('.slider--width').style.width = `calc(100vw * ${ totalSlides })`;
// jogando a altura do slider dentro de slider--controls
document.querySelector('.slider--controls').style.height = `${ document.querySelector('.slider').clientHeight }px`;
*/

// Slide em tamanho fixo (Pequeno)
// preciso selecionar o slider primeiro
let sliderWidth = document.querySelector('.slider').clientWidth;

// e depois usar ele na div de largura do slide
document.querySelector('.slider--width').style.width = `${ sliderWidth * totalSlides }px`;
// corrigindo oss para o novo tamanho
// a largura dos botões será a mesma do slide
document.querySelector('.slider--controls').style.width = `${ sliderWidth }px`;
// a altura dos botões será a mesma do slie
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
  // consertando o bug que a imagem fica cortada
  // clientWidth é a largura da tela do navegador, 
  // somente com o clientWidth estava levando em conta a tela total e não o tamanho do slider na tela
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;

  let newMargin = (currentSlide * sliderItemWidth);
  // Selecionando a div responsável por rolar as imagens e adicionando a nova margem
  document.querySelector('.slider--width').style.marginLeft = `-${ newMargin }px`;
}

// rolagem automática a cada 5 segundos
setInterval(goNext, 5000);