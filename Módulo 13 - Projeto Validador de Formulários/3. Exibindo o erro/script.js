// variável com várias funções, uma delas é prevenir o comportamento padrão do formulário.
let B7Validator = {
  handleSubmit: (event) => {
    // previne o envio do submit
    event.preventDefault();

    // Variável responsável pelo envio do formulário
    let send = true;

    // Pegando todos os inputs dentro do formulário
    let inputs = form.querySelectorAll('input');

    // Evita que a mensagem de erro se duplique
    B7Validator.clearErrors();

    // verificando cada um dos campos individualmente
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];

      // Verificando se os campos tem o data-rules
      let check = B7Validator.checkInput(input);

      // se der erro no campo
      if (check !== true) {
        send = false; // evita o envio do formulário para poder exibir o erro
        // Exibo o erro
        B7Validator.showError(input, check);
      }
    }

    // O formulário só será enviado se send estiver true
    if (send) {
      form.submit();
    }

  },

  checkInput: (input) => {
    // verifica se tem regra
    let rules = input.getAttribute('data-rules');

    // se tem regra
    if (rules !== null) {
      // separando cada uma das regras
      rules = rules.split('|');

      // verificando cada uma das regras
      for (let k in rules) {
        let rDetails = rules[k].split('=');

        // Ações de cada regra
        switch (rDetails[0]) {
          case 'required':
            if (input.value == '') { // se o campo for vazio
              return 'Campo não pode ser vazio';
            }
            break;
          case 'min':

            break;
        }
      }
    }

    // caso não tenha regra, o campo está certo e pode passar
    return true;
  },

  // mostra o erro do validador
  showError: (input, error) => {
    input.style.borderColor = 'red'; // se não digitar nada nos campos, a borda fica vermelha

    // criando o elemento para jogar o erro na tela
    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error; // a mensagem da div será o texto do erro

    // adicionando elemento depois do campo
    // parentElement volta um item acima do input, no caso é o label
    // Os parâmetros do insertBefore são:
    // O que quer exibir (errorElement)
    // antes de qual elemento será exibido (input)
    // para colocar embaixo do campo de input,
    // use o ElementSibling
    input.parentElement.insertBefore(errorElement, input.ElementSibling);
  },

  // Limpa as divs que tenham erros, evita que os erros se dupliquem
  clearErrors: () => {
    // removendo as bordas vermelhas dos campos com erro
    let inputs = form.querySelectorAll('input');
    for (i = 0; i < inputs.length; i++) {
      inputs[i].style = '';
    };

    let errorElements = document.querySelectorAll('.error'); // seleciono quem tem o erro
    // removo 1 por 1
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].remove();
    };
  }
};

// pegando o formulário que tem a classe de validação
let form = document.querySelector('.b7validator');
// bloqueio no envio do submit do formulário
form.addEventListener('submit', B7Validator.handleSubmit);