function clicou() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      alert(`Título do primeiro post: ${ response[0].title }`);
    }).catch(() => {
      alert("Deu problema na requisição");
      console.log(error);
    })
};

// Inserindo um dado na API usando o método POST
function inserir() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    // Tipo do dado
    headers: {
      'content-type': 'application/json'
    },
    // Convertendo JSON para string
    body: JSON.stringify({
      // conteúdo do body
      title: 'Título de teste',
      body: 'Corpo de teste',
      userId: 2
    })
  }).then((response) => {
    return response.json()
  }).then((json) => {
    console.log(json);
  })
}

document.querySelector("#botao").addEventListener("click", clicou);
document.querySelector("#inserir").addEventListener("click", inserir);