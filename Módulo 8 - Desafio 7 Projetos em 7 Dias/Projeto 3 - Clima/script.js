
document.querySelector('.busca').addEventListener('submit', async (event) => {
  event.preventDefault(); // Previnindo ação do formulário

  let input = document.querySelector('#searchInput').value;

  if (input !== '') {
    showWarning('Carregando...');
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ encodeURI(input) }&appid=861e25244eab2e37ccc70d1ba12e7af0&units=metric&lang=pt_br`;

  let results = await fetch(url); // fazendo a requisição
  let json = await results.json(); // transformando em objeto
  console.log(json);
});

function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
};