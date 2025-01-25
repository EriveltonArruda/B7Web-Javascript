function mostrar() {
  let reader = new FileReader();
  let imagem = document.querySelector('#imagem').files[0];

  reader.onloadend = function() {
    let img = document.createElement('img');
    // URL da imagem para exibir na tela
    img.src = reader.result;

    // Exibindo na tela
    document.querySelector('#area').appendChild(img);
  }

  reader.readAsDataURL(imagem);
}