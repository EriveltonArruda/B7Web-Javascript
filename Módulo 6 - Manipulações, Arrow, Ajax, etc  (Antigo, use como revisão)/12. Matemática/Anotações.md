## Classe Math

O JS tem uma classe voltada para Matemática, ela nos dá as opções de calcular PI, seno, cosseno, tangente, exponencial, arredondar para cima, para baixo, ou seja, tudo que é relacionado a matemática.

Não veremos tudo aqui, apenas os mais utilizados, em caso de dúvida pesquise sempre a documentação da MDN.

## Math.round()

arredonda para cima ou para baixo dependendo do número passado, se passar >= 3.50 o round arredondará para 4, abaixo disso arredondará para 3.

## Math.floor()

Sempre arredonda para baixo, mesmo que coloque 3.99 no parâmetro.

## Math.ceil()

Sempre arredonda para cima, mesmo que coloque 3.10 no parâmetro.

## Math.abs()

Mostra o número absoluto.

## Math.min()

retorna o menor valor dos números passados no parâmetro

## Math.max()

retorna o maior valor dos números passados no parâmetro

## Math.random()

Gera um número aleatório entre 0 e 1.

Se quiser gerar um número aleatório entre 0 e 100 é só colocar o Math.random \* 100 e para garantir que o valor nunca passe de cem e também para arredondar, pode colocar dentro de um Math.floor ou de um Math.round.
