## catch()

É uma função que recebe um callback para ser executado quando der algum problema na requisição, serve para tratamento de erros.

Vou alterar a url no meu fetch para exemplificar.

```
fetch('https://jsonplaceholder.typicode.com/po2sts')
```

Como a URL foi alterada, nada será exibido para o usuário, como é um erro/problema na requisição devemos mostrar para o usuário que deu erro e é para isso que vamos usar o catch.

Importante lembrar que o catch só será executado se ocorrer algum erro na requisição, caso não ocorra ele é ignorado.

Se quiser saber qual foi o erro que ocorreu, podemos passar no parâmetro do catch (geralmente é chamado de error).

```
.catch((error) => { // o error no parâmetro é para saber qual foi o erro.
      console.log("Deu problema na requisição");
      console.log(error);
    })
```

Nesse exemplo acima deu erro no title no then que executa os dados convertidos em objetos, justamente porque a url está errada e esse then não conseguiu pegar os dados convertidos.

## finally()

Essa função também recebe um callback e basicamente é uma função que será executada se a requisição der certo ou se der errado, é um callback que será executado no final de tudo.

Para entender melhor sobre seu uso na prática veja a seguinte situação:

Alguns sites bloqueam os campos de um formulário até que a requisição termine, liberando apenas quando a requisição termina, esse processo de desbloqueio pode ser feito no finally().

Ele é muito pouco utilizado na prática, os mais utilizados são o then e o catch para tratamento de promises.
