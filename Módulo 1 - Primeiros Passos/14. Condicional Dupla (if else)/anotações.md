Quando fazemos 3 condicionais if separados como no primeiro exemplo, esses condicionais são independentes entre si, assim quando a variável idade for definida como 18, ela entrará nos dois ifs, no if de criança e no if de adulto.

## Condicionais dependentes

Ao utilizar condicionais dependentes utilizando o else if, serão verificadas as 3 condições, se minha variável idade for = 55, ela será passada na verificação do if de idade < 18, como não é verdadeira, ela entra no segundo bloco que é um else if e assim o bloco será executado porque idade (55) é maior que 18 e menor que 60, o terceiro bloco (segundo else if) será ignorado, ele só seria executado se idade fosse >= 60.

## Explicação sobre if e else if

Se no meu primeiro if eu colocasse idade <= 18 e no else if colocasse idade >= 18, somente o primeiro bloco seria executado porque o segundo bloco é um else if e se o primeiro if for verdadeiro, o bloco do else if será ignorado.
