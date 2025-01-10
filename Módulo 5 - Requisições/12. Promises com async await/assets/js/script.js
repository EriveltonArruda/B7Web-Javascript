// async em arrow function
let clique = async () => { };

// Em função normal
async function clicou() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let json = await response.json();
  alert(`Título do primeiro post: ${ json[0].title }`);

  // Esse alert será executado após a requisição
  alert("CLICOU!");
};

async function inserir() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Título de teste',
      body: 'Corpo de teste',
      userId: 2
    })
  });

  let json = await response.json();

  console.log(json)
}

document.querySelector("#botao").addEventListener("click", clicou);
document.querySelector("#inserir").addEventListener("click", inserir);