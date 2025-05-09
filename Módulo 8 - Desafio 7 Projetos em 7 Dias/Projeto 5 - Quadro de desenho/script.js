// Initial Data

// cor que está selecionada por padrão
let currentColor = 'black';
let canDraw = false; // "modo desenho"
// posições do mouse
let mouseX = 0;
let mouseY = 0;


// selecionando o elemento canvas para poder escrever nele
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d'); // contexto dentro do canvas que permite que seja desenhado dentro dele

/*
Passo a passo para desenhar no canvas (são eventos)
- Quando o click do mouse ABAIXAR (apertar), ative o modo desenho.
- Quando o mouse se MOVER, se o modo desenho estiver ativado, desenhe.
- Quando o click do mouse LEVANTAR (soltar o click), desative o modo desenho
*/

// EVENTOS

// Como temos várias cores, vamos usar um foreach e colocar o evento em cada uma delas
document.querySelectorAll('.colorArea .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
});

// eventoS doS botões do mouse
screen.addEventListener('mousedown', mouseDownEvent); // apertou e segurou o botão do mouse
screen.addEventListener('mousemove', mouseMoveEvent); // movimento do mouse
screen.addEventListener('mouseup', mouseUpEvent); // soltou o botão do mouse
document.querySelector('.clear').addEventListener('click', clearScreen); // botão de reset


// FUNÇÕES

// função da troca da cor
function colorClickEvent(e) {
  let color = e.target.getAttribute("data-color"); // verificando qual cor foi clicada
  currentColor = color; // armazenando a cor que foi clicada

  // tirando o active de quem está ativo (precisa tirar antes de adicionar)
  document.querySelector('.color.active').classList.remove('active');
  e.target.classList.add('active'); // adicionando o active em quem foi clicado.
}

// funções de movimento do mouse
function mouseDownEvent(e) {
  // ativar modo desenho
  canDraw = true;
  // pageX mostra a posição horizontal do mouse na tela
  // pageY mostra a posição vertical do mouse na tela
  // é necessário compensar a posição para saber a posição real, por isso usamos offset
  // offsetLeft é a distância do elemento para o fim da página na esquerda (horizontal)
  // offsetTop é a distância do elemento para o topo da página (vertical)
  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
  if (canDraw) {
    // função que desenha
    draw(e.pageX, e.pageY);
  }
}

function mouseUpEvent() {
  // desativar modo desenho
  canDraw = false;
}

function draw(x, y) {
  // pegando a posição do mouse em relação a posição da tela
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  // fazendo o desenho no contexto do canvas
  ctx.beginPath(); // inicia o caminho onde vai desenhar
  ctx.lineWidth = 5; // grossura da linha
  ctx.lineJoin = "round"; // formato da linha (arredondada)
  ctx.moveTo(mouseX, mouseY); // movimento do mouse, move para a posição inicial do mouse
  ctx.lineTo(pointX, pointY); // faz a linha do pontoX até o pontoY
  ctx.closePath(); // fecha o processo de desenho
  ctx.strokeStyle = currentColor; // colorindo a linha
  ctx.stroke(); // finaliza todo o processo

  // salvando a posição atual
  mouseX = pointX;
  mouseY = pointY;
}

// Função de zerar quando clicar no botão
function clearScreen() {
  ctx.setTransform(1, 0, 0, 1, 0, 0); // setar a posição geral na matriz 2D
  // limpa tudo, o primeiro 0 refere-se à largura, começa na posição 0 e vai até o fim da largura, o segundo 0 refere-se à altura, então pega do começo da tela até o fim da mesma
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}