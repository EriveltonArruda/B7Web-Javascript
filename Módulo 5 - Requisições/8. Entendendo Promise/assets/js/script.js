function clicou() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      alert(`Título do primeiro post: ${ response[0].title }`);
    });

  // Exemplo para entender como funciona o assíncronismo.
  alert("OPA, CLICOU!");
};

document.querySelector("#botao").addEventListener("click", clicou);


function promise() {
  // Podemos armazenar um fetch em uma variável
  let req = fetch('https://jsonplaceholder.typicode.com/posts')
  req.then((response) => {
    return response.json();
  })
    .then((response) => {
      alert(`Título do primeiro post: ${ response[0].title }`);
    });
};