function clicou() {
  fetch('https://jsonplaceholder.typicode.com/posts') // faz a requisição
    .then((response) => { // Quando receber a resposta, execute a função do parâmetro
      return response.json(); // Convertendo para objetos
    }).then((response) => { // Dados convertidos (muita gente chama de json, mas vou deixar como response).
      alert(`Título do primeiro post: ${ response[0].title }`);
    })
}

document.querySelector("#botao").addEventListener("click", clicou);

// Exemplos usados na aula antes de converter para json
document.querySelector("#button").addEventListener("click", () => {
  fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
    console.log(data); // Dados da resposta (muita gente chama de response)
    console.log(data.body); // retorna ReadableStream (dados sem conversão).
  })
})
