// variável com várias funções, uma delas é prevenir o comportamento padrão do formulário.
let B7Validator = {
  handleSubmit: (event) => {
    // previne o envio do submit
    event.preventDefault();

    // Variável responsável pelo envio do formulário
    let send = true;

    // Pegando todos os inputs dentro do formulário
    let inputs = form.querySelectorAll('input');

    // verificando cada um dos campos individualmente
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];

      // Verificando se os campos tem o data-rules
      let check = B7Validator.checkInput(input);

      // se der erro no campo
      if (check !== true) {
        send = false; // evita o envio do formulário para poder exibir o erro
        // Exibo o erro
        console.log(check);
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
  }
};

// pegando o formulário que tem a classe de validação
let form = document.querySelector('.b7validator');
// bloqueio no envio do submit do formulário
form.addEventListener('submit', B7Validator.handleSubmit);