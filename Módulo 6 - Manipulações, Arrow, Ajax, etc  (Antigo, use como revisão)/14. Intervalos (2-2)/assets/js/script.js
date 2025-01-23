let timer;
function rodar() {
  timer = setTimeout(() => {
    document.querySelector('.demo').innerHTML = "Rodou!"
  }, 5000);
}

function parar() {
  timer = clearTimeout(timer);
}