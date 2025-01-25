async function loadPosts() {
  // colocando uma frase antes da requisição acontecer
  document.querySelector('#posts').innerHTML = 'Carregando...';

  let req = await fetch('https://jsonplaceholder.typicode.com/posts');  // Pegando a requisição
  let json = await req.json(); // Transformando em Objeto
  montarBlog(json); // Exibindo na tela
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