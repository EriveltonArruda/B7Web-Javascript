## Passo a passo do projeto

O primeiro passo a ser feito é prevenir que o formulário envie informações, porque como nosso input e botão estão dentro de um formulário, ao clicar no botão de Buscar o formulário será enviado porque é um comportamento padrão dele, se ele enviar informações nossa div com o resultado não será exibida.

### preventDefault()

Essa função previne o comportamento padrão que o formulário deveria ter, ou seja, não vai enviar informações ao clicar no botão de Buscar.

### input

Em seguida precisamos pegar o que foi digitado (variável input).

Em posse dessa variável, precisamos fazer uma verificação para saber se foi digitado algo no input, porque como será feita uma requisição interna, o usuário não está vendo o que está acontecendo, então preciso mostrar a ele que algo está sendo feito, então quando o usuário digitar alguma coisa, vou mostrar uma mensagem a ele enquanto a requisição não termina.

Para mostrar essa mensagem eu vou criar uma função que ficará responsável por isso, como já temos uma div responsável por mostrar avisos, é ela que vou usar.

### Pegando a API

Agora é hora de usar a API do openweather, dentro do meu if eu vou montar uma URL com a URL da API e dentro dessa URL eu vou modificar o {city name} da API e vou passar o meu input porque é no input que o usuário vai digitar o nome da cidade.

Contudo eu não posso somente passar a url porque se o usuário digitar espaço, nenhuma url aceita espaço, para isso existe uma função do Javascript que faz a conversão, é chamada de encondeURI

Além disso, preciso da API key, ela é uma forma da openweather controlar quantas vezes a APi é consultada, essa API key é um hash que precisamos inserir dentro da URL.

### Parâmetros da API

Caso queira consultar os parâmetros das API, acesse o link:

```
https://openweathermap.org/current#name
```

Usaremos a units=metric e a linguagem de retorno, então depois da chave da API coloque um &units=metric&lang=pt_br.

### Requisição

Agora que temos o link da API, podemos usar a requisição com fetch e em seguida transformar o resultado da requisição em um objeto.

Caso queira visualizar todas as informações da requisição, dê um console.log(json) e vá em network, lá tem as informações de clima, sensação térmica, vento, etc.
