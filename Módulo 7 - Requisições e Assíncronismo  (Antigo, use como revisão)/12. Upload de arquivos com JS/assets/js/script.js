async function enviar() {
  let arquivo = document.querySelector('#arquivo').files[0];

  // Criando o body que vai ser passado no POST
  let body = new FormData();
  body.append('title', 'Bla bla bla');
  body.append('arquivo', arquivo);

  let req = await fetch('https://www.meusite.com.br/upload', {
    method: 'POST',
    body: body,
    headers: {
      'content-type': 'multipart/form-data'
    }
  });

  console.log(arquivo);
}