## Passo a passo do projeto

Primeiro de tudo vamos selecionar todos os elementos que serão usados no projeto, ou seja, os ponteiros digitais e os ponteiros do relógio analógico.

### Processo de atualização do relógio

Todo relógio trabalha de acordo com os segundos, então precisamos criar um timer que de 1 em 1 segundo rode uma função que faça o trabalho de fazer os ponteiros rodarem.

### Função updateClock

A primeira coisa que precisamos fazer nessa função é pegar a hora atual, em seguida precisamos pegar as horas, minutos e segundos.

### relógio digital

Agora que tenho as horas, os minutos e os segundos posso inserir eles no digitalElement para fazer com que o relógio digital funcione.

Vou colocar as variáveis de hora, minuto e segundo dentro de um template string para poder mostrar na tela, contudo tem um porém nisso tudo, eu preciso criar uma função que adicione um 0 antes do valor exibido, porque quando o valor é < 10 só é mostrado uma casa decimal, então ao invés de ficar assim:

```
10:25:05
```

Ficará assim:

```
10:25:5
```

### Função fixZero()

Essa função terá basicamente uma verificação, se o tempo for menor do que 10, significa que só tem um dígito, então vou adicionar um 0 para que fique com dois dígitos.

Em seguida eu coloco a função no digitalElement e como parâmetro da função eu passo as variáveis de hora, minuto e segundo.

### Relógio analógico

Um ponto importante é entender como é o funcionamento do ponteiro, todos os ponteiros estão com uma classe "p" com um transform-origin: left neles, isso faz com que o eixo dos ponteiros passe a ser na esquerda, dessa forma os ponteiros vão rodar dentro do relógio, se não tivesse esse origin no left, eles teriam o eixo no centro e rodariam entre si e não entre a área de dentro do relógio.

Também precisamos saber quantos graus tem um segundo para que o ponteiro ande, então preciso de uma variável que faça esse cálculo.

Para saber a quantidade de graus pegamos o total dos graus (360) e dividimos pela quantidade de segundos que um relógio tem (60), em seguida multiplicamos o resultado pela variável second e subtraimos 90, isso porque no css a posição de cima é 90 graus negativo.

Precisamos fazer o mesmo cálculo para os minutos e as horas.

A diferença vai ser na divisão da hora porque apesar do dia ter 24 horas, um relógio marca 12 horas.

## updateClock ao final dos códigos

A função updateClock está sendo executada depois do interval porque quando o projeto é aberto no navegador ele está esperando 1 segundo para começar a executar e o relógio fica sem funcionar, então ao chamar a função depois do Interval resolve isso, fazendo com que o relógio já começe funcionando.
