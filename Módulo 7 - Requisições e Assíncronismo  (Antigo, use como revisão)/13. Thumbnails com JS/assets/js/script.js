function mostrar() {
  let imagem = document.querySelector('#imagem').files[0];

  // criando a imagem
  let img = document.createElement('img');
  img.src = URL.createObjectURL(imagem);
  // caso queira manipular a largura
  img.width = 200;

  // Exibindo a imagem na div
  document.querySelector('#area').appendChild(img);
}