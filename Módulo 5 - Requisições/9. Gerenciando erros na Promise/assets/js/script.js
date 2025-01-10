function clicou() {
  fetch('https://jsonplaceholder.typicode.com/posts2')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      alert(`Título do primeiro post: ${ response[0].title }`);
    }).catch((error) => { // o error no parâmetro é para saber qual foi o erro (não é obrigatório).
      alert("Deu problema na requisição");
      console.log(error);
    }).finally(() => {
      alert("OPA, ACABOU TUDO!");
    })
};

document.querySelector("#botao").addEventListener("click", clicou);