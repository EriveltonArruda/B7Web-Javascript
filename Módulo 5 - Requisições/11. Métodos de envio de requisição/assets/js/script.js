function clicou() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      // "Quebre" a URL para ver o status de erro
      console.log(`Status: ${ response.status }`);
      return response.json();
    })
    .then((response) => {
      alert(`Título do primeiro post: ${ response[0].title }`);
    }).catch(() => {
      alert("Deu problema na requisição");
      console.log(error);
    })
};

document.querySelector("#botao").addEventListener("click", clicou);