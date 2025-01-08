function clicou() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      alert(`Título do primeiro post: ${ response[0].title }`);
    })
};

document.querySelector("#botao").addEventListener("click", clicou);