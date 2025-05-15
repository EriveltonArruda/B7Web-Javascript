// Initial Data
let currentQuestion = 0;
let correctAnswers = 0;
showQuestion(); // exibindo as questões

// Events
// Resetando o quiz no botão "Fazer novamente"
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

// Functions
// Mostrar a questão
function showQuestion() {
  // Verifica se tem a questão, se existir será exibida
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    // barra de progressão que acompanha a questão atual em porcentagem
    let pct = Math.floor((currentQuestion / questions.length) * 100);
    // movendo a barra de acordo com a porcentagem acima
    document.querySelector('.progress--bar').style.width = `${ pct }%`;

    // Removendo a scoreArea e exibindo a área da questão
    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';

    // Exibindo a questão que está no arquivo questions.js
    document.querySelector('.question').innerHTML = q.question;

    // essa variável foi criada para evitar consumir muita memória no DOM, ela será preenchida dentro do for e depois será adicionada no DOM.
    let optionsHtml = '';

    // Exibindo as opções do arquivo questions.js
    for (let i in q.options) {
      // q.options[i] exibe as opções do arquivo question.js
      // a div data-op=${i} diz qual é a opção selecionada (não muda nada visualmente, servirá para answer)
      // o parseInt dentro do span é para mostrar a contagem das opções a partir do 1 e não do 0
      optionsHtml += `<div data-op="${ i }" class="option"><span>${ parseInt(i) + 1 }</span> ${ q.options[i] }</div>`;
    }

    // Armazenando no DOM as opções e exibindo na tela
    document.querySelector('.options').innerHTML = optionsHtml;

    // como as opções foram geradas dinâmicamente na tela, precisamos dar um loop em cada opção e adicionar um evento a cada uma delas.
    document.querySelectorAll('.options .option').forEach(item => {
      item.addEventListener('click', optionClickEvent); // Ação de clique nas opções
    });

  } else {
    // acabaram as questões
    finishQuiz();
  }
}

// função que será acionada no evento de clique
function optionClickEvent(e) {
  // variável que contém o valor da opção, com ela podemos saber a resposta
  // o parseInt é para transformar em número porque no arquivo question.js o answer é número e o getAttribute sempre vem em string.
  let clickedOption = parseInt(e.target.getAttribute('data-op'));

  // Resposta certa
  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswers++; // armazenando as respostas certas para poder fazer a porcentagem
  }

  currentQuestion++; // Passa para a próxima pergunta
  showQuestion(); // Exibe a próxima pergunta
}

// Função que finaliza o quiz, ela vai esconder a área de questões e vai mostrar a área de resultado.
function finishQuiz() {
  // Resultado do quiz em porcentagem
  let points = Math.floor((correctAnswers / questions.length) * 100);

  // Mensagens exibidas a partir do resultado
  if (points < 30) {
    document.querySelector('.scoreText1').innerHTML = 'Tá ruim em?!';
    document.querySelector('.scorePct').style.color = '#FF0000';
  } else if (points >= 30 && points < 70) {
    document.querySelector('.scoreText1').innerHTML = 'Muito bom!';
    document.querySelector('.scorePct').style.color = '#FFFF00';
  } else if (points >= 70) {
    document.querySelector('.scoreText1').innerHTML = 'Parabéns';
    document.querySelector('.scorePct').style.color = '#0D630D';
  }

  // Manipulando a div de porcentagem de acerto
  document.querySelector('.scorePct').innerHTML = `Acertou ${ points }%`;
  // Manipulando a div de quantidades de questões respondidas e acertadas
  document.querySelector('.scoreText2').innerHTML = `Você respondeu ${ questions.length } questões e acertou ${ correctAnswers }.`;

  document.querySelector('.scoreArea').style.display = 'block'; // Mostra a área de resultado
  document.querySelector('.questionArea').style.display = 'none'; // Fecha a área de questões
  document.querySelector('.progress--bar').style.width = '100%'; // Barra completa
}

// Limpa tudo ao clicar em "Fazer novamente"
function resetEvent() {
  correctAnswers = 0;
  currentQuestion = 0;
  showQuestion();
}