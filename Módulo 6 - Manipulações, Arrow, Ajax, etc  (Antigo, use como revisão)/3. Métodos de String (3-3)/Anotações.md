## replace()

Essa função substitui uma string, seus parâmetros são:

1. Nome que quer substituir.
2. Novo nome que entrará na substituição.

É muito utilizado em sistemas.

Importante saber que ele não faz a troca diretamente na string da variável, ele simplesmente pega o valor da variável e retorna o resultado que armazenamos em outra variável. Ele simplesmente gera uma nova variável com o novo valor.

Para substituir na própria variável seria feito dessa forma:

```
nome = nome.replace('Erivelton', 'Everton')
```

## concat()

Essa função concatena strings e aceita quantos parâmetros eu quiser.

Não é muito utilizada, é até meio inútil.

## trim()

Não tem parametro nessa função.

É muito usada para remover espaços em branco que usuários possam passar em inputs.

## split()

O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método, no exemplo está sendo usado uma vírgula, então a função split vai percorrer a string e quando ver uma vírgula ele vai fazer um corte, cada corte será uma posição do array.
