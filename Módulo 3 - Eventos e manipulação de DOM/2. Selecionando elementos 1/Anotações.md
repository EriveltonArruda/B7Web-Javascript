## Window e document

existe o window e o document, o window tem propriedades e ações relacionadas a janela inteira do navegador (barra de endereço, atualizar a tela, botão de voltar, etc), enquanto o document é responsável por todo o conteúdo do site.

Estrutura do document

```
document = objeto que tem acesso aos elementos da página
. = acesso á funções que podem ser executadas dentro do documento, existem várias funções e propriedades, um exemplo é a getElementsByTagName.
```

Exemplo:

```
document.getElementsByTagName()
```

## HTMLCollection

HTMLColletion é basicamente um array, dentro desse array terá todos os elementos (no caso h1) que foram encontrados no documento.
