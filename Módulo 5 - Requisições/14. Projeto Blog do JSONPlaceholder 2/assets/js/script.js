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
      let postHTML = `<div><h1>${json[i].title}</h1>${json[i].body}<hr></div>`;
      postArea.innerHTML += postHTML;
    }
  } else {
    postArea.innerHTML = 'Nenhum post para exibir';
  }
}

async function addNewPost(title, body) {
  await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        body,
        userId: 2
      })
    }
  );

  // Resetando os campos
  document.querySelector('#titleField').value = '';
  document.querySelector('#bodyField').value = '';

  // Recarregando os posts.
  readPosts();
}

// Inserção de post novo
document.querySelector('#insertButton').addEventListener('click', () => {
  // pegando o que está digitado nos inputs
  let title = document.querySelector('#titleField').value;
  let body = document.querySelector('#bodyField').value;

  if (title && body) {// verificando se tem algo digitado nos campos.
    addNewPost(title, body); // se tiver ele adiciona o post novo.
  } else {
    alert("Preencha todos os campos!");
  }
});

readPosts();