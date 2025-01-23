// Variável em escopo global para usar nas funções
let timer;

function comecar() {
  // Timer que vai rodar a função de 1 em 1 segundo.
  timer = setInterval(showTime, 1000);
}

function parar() {
  timer = clearInterval(timer);
}

// Função responsável por exibir a hora atual na tela
function showTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let txt = h + ':' + m + ':' + s;

  document.querySelector('.demo').innerHTML = txt;
}