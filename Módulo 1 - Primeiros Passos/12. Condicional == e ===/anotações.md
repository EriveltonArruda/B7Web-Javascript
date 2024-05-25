## Diferença entre == e ===

A principal diferença é que o == compara apenas o valor, ou seja, se eu tiver uma string com o número 20 e fazer a comparação no if, a condição será verdadeira porque o valor de fato é 20, mas não seu tipo, o seu tipo é uma string e não um number, essa verificação é chamada de verificação não-estrita.

## Condicional ===

Com esse condicional de comparação, ele faz uma verificação estrita, então para que a condição do if se torne verdadeira, o TIPO e o VALOR da minha variável precisa ser igual ao if, caso contrário, não executará.

Como regra geral, utilize sempre o condicional === de início e só mude para == quando necessário.
