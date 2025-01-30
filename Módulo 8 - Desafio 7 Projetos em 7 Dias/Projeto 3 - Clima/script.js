
document.querySelector('.busca').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevenindo ação do formulário

  let input = document.querySelector('#searchInput').value;

  if (input !== '') {
    showWarning('Carregando...');
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ encodeURI(input) }&appid=861e25244eab2e37ccc70d1ba12e7af0&units=metric&lang=pt_br`;

  let results = await fetch(url); // fazendo a requisição
  let json = await results.json(); // transformando em objeto

  if (json.cod === 200) {
    showInfo({
      name: json.name, // nome da cidade
      country: json.sys.country, // país
      temp: json.main.temp, // temperatura
      tempIcon: json.weather[0].icon, // ícone
      tempDescription: json.weather[0].description, // Nublado, ensolarado, etc.
      windSpeed: json.wind.speed, // Velocidade do vento
      windAngle: json.wind.deg // ângulo do vento
    });
  } else {
    showWarning('Não encontramos essa localização');
  }
});

function showInfo(json) {
  // tirando o nome carregando...
  showWarning('');
  // pegando os elementos
  document.querySelector('.resultado').style.display = 'block';
  document.querySelector('.titulo').innerHTML = `${ json.name }, ${ json.country }`;
  document.querySelector('.tempInfo').innerHTML = `${ json.temp } <sup>ºC</sup>`;
  // Deixando a primeira letra em maiúsculo
  let weatherDescription = `${ json.tempDescription.charAt(0).toUpperCase() }${ json.tempDescription.slice(1) }`;
  document.querySelector('.tempDescription').innerHTML = weatherDescription;
  document.querySelector('.ventoInfo').innerHTML = `${ json.windSpeed } <span>km/h</span>`;
  // trocando a url da imagem
  document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${ json.tempIcon }@2x.png`);
  document.querySelector('.ventoPonto').style.transform = `rotate(${ json.windAngle - 90 }deg)`;

}

function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
};
