function loadPosts() {
  // colocando uma frase antes da requisição acontecer
  document.querySelector('#posts').innerHTML = 'Carregando...'
  fetch('https://jsonplaceholder.typicode.com/posts')
    // Transformando o resultado da requisição em objeto
    .then(function (resultado) {
      return resultado.json();
    })
    // Exibindo o resultado na div
    .then(function (json) {
      document.querySelector('#posts').innerHTML = `${ json.length } posts`;
    })
    .catch(function (error) {
      console.log(`Deu problema! ${ error }`);
    })
}