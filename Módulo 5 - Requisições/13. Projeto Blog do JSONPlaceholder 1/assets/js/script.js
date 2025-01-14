// Etapa 1
async function readPosts() {
  // Exibindo a mensagem na tela.
  let postArea = document.querySelector(".posts");
  postArea.innerHTML = 'Carregando...';

  // Requisição.
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let json = await response.json();

  // Verificando se veio algum dado da API
  if (json.length > 0) {
    // Tira o nome carregando (limpa a div)
    postArea.innerHTML = '';

    for (let i in json) {
      // colocando os posts na tela
      let postHTML = `<div><h1>${ json[i].title }</h1>${ json[i].body }<hr></div>`;
      postArea.innerHTML += postHTML;
    }
  } else {
    postArea.innerHTML = 'Nenhum post para exibir';
  }
}

readPosts();