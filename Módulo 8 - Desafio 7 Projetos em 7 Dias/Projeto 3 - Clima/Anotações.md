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

Contudo eu não posso somente passar a url porque se o usuário digitar espaço, nenhuma url aceita espaço, para isso existe uma função do Javascript que faz a conversão, é chamada de encondeURI.

Além disso, preciso da API key, ela é uma forma da openweather controlar quantas vezes a APi é consultada, essa API key é um hash que precisamos inserir dentro da URL, ela fica disponível na sua conta da openweather.

Usaremos outros parâmetros além do city name e da apikey.

### Parâmetros da API

Caso queira consultar os parâmetros das API, acesse o link:

```
https://openweathermap.org/current#name
```

Usaremos a units e a linguagem de retorno, então depois da chave da API coloque um &units=metric&lang=pt_br.

### Requisição

Agora que temos o link da API, podemos usar a requisição com fetch e em seguida transformar o resultado da requisição em um objeto.

Caso queira visualizar todas as informações da requisição, dê um console.log(json) e vá em network, lá tem as informações de clima, sensação térmica, vento, etc.

### validação de sucesso

Agora que a requisição foi transformada em json, vou pegar as informações que vou precisar exibir.

Mas eu preciso criar uma verificação para exibir os dados na tela, os dados só serão exibidos se o status da requisição for 200, caso contrário será exibida uma mensagem para o usuário notificando que determinada cidade não existe.

Caso tenha encontrado a cidade, vou usar uma função chamada showInfo que recebe um objeto como parâmetro, o objeto conterá as informações que quero mostrar (nome, país, temperatura, ícone, velocidade e ângulo).

### função showInfo()

Essa função vai ser a responsável por mostrar as informações na tela, a primeira coisa que preciso fazer nela é tirar o nome carregando para que ele não seja exibido junto da div com as informações, ele só pode aparecer quando está fazendo a requisição e não quando ela for concluída.

Tudo o que temos que fazer aqui agora é selecionar os elementos do HTML e exibir os dados.

a div .resultado está com o display none porque ela só precisa aparecer quando a requisição for concluída, por isso que na função showInfo ela está com o display block.

Também precisaremos pegar a imagem, note que no HTML o src está com o link da imagem da opeweather, a única coisa que precisará ser alterada é o 10d perto do .png;

Mas como selecionar a imagem com o JS? Simples, entro na div temp e nela eu seleciono o elemento img, em seguida eu preciso trocar o atributo src dessa imagem trocando apenas o 10d perto do .png e passando dentro do template o json.tempIcon.

Próximo passo é mudar o ícone de vento para que ele rotacione com base nos graus.

Para fazer isso precisamos selecionar o elemento ventoPonto e mudar a propriedade transform dele, contudo precisamos compensar os 90 graus do posicionamento errado do css, então diminuo 90 graus do json.windAngle.

---

Precisamos ajustar uma coisa antes de finalizar, perceba que depois que a requisição é concluída e você for digitar outra cidade, a requisição anterior continuará na tela, mesmo que não encontre a cidade e não podemos deixar assim, precisamos limpar a tela sempre que fizermos outra requisição.

Faremos isso com uma função chamada clearInfo() e ela será colocada no antes da mensagem de carregando do meu if, no else do if que o input mostra a mensagem de carregando porque caso o usuário digite um espaço em branco e dê enter, seja feita uma nova requisição e não fique mostrando o resultado da requisição anterior, também vou colocar no else do sucesso da requisição antes da mensagem de não encontramos a localização.

### função clearinfo()

Vai limpar o warning e ocultar o resultado da requisição, basicamente limpar a tela.
