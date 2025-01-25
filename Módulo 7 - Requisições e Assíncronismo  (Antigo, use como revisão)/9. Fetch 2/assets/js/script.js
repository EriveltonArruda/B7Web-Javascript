function loadPosts() {
  // colocando uma frase antes da requisição acontecer
  document.querySelector('#posts').innerHTML = 'Carregando...'
  // Pegando a requisição
  fetch('https://jsonplaceholder.typicode.com/posts')
    // Transformando o resultado da requisição em objeto
    .then(function(resultado) {
      return resultado.json();
    })
    // Exibindo o resultado na div
    .then(function(json) {
      montarBlog(json);
    })
    .catch(function(error) {
      console.log(`Deu problema! ${error}`);
    })
}

// Exibindo os posts
function montarBlog(lista) {
  let html = '';

  for (let i in lista) {
    html += `<h3>${lista[i].title}</h3>`;
    html += `${lista[i].body} <br/>`;
    html += "<hr/>";
    document.querySelector('#posts').innerHTML = html;
  }
}