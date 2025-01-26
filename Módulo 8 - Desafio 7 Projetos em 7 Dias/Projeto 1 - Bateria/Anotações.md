## Passo a passo do projeto

A primeira coisa que preciso fazer é selecionar toda a área do site para que quando uma tecla referente a determinado som da bateria seja apertada em qualquer lugar do site ele reconheça, faço isso com o document.body.

## document.body

Também vou precisar adicionar um evento nele, esse evento vai ficar basicamente escutando o que está acontecendo, se determinada tecla referente a bateria for pressionada, ele saberá e executará a função referente à ação.

Para identificar qual foi a tecla que foi pressionada uso o event.code, como no meu html e na pasta de sons todos os arquivos estão em minúsculo, vou deixar o code.event em lowercase, mas para que a tecla execute o som eu preciso passar o event.code dentro de uma função que ficará responsável por isso.

## função playSound()

Função responsável por tocar o som ao pressionar a tecla.

Nessa função eu vou criar uma função audioElement que ficará responsável por selecionar o elemento que tem a tag de áudio lá do HTML, mas eu não posso simplesmente selecionar o elemento pelo id, porque se não eu vou selecionar apenas um elemento, preciso deixar ele dinâmico então, para deixar ele dinâmico eu simplesmente uso um template string e coloco o início do id (o início de todos os ID de áudio tem "s\_" antes do key) e em seguida coloco o parãmetro sound da própria função, dessa forma se a tecla pressionada for igual ao id do HTML, o som será executado. Por exemplo:

```
Esse é um id do HTML = id="s_keyq"
Assim é como está no template string = `#s_${sound}`
```

Então se a tecla pressionada for um q, o event.code vai pegar keyq e colocar na variável sound, ficando assim:

```
s_keyq
```

Ou seja, exatamente igual ao ID que está no HTML.

---

Em seguida preciso fazer uma verificação da tecla, porque se apertar a tecla "i", não existe esse id na bateria, então preciso tocar somente as letras que tem lá no ID, então se audioElement foi encontrado, ou seja, se a tecla pressionada existir no id do html, ele vai tocar o som, caso contrário não tocará nada.

---

Agora que o som está funcionando ao pressionar as teclas, preciso fazer com que as divs mostrem que estão sendo pressionadas.

Para fazer isso eu preciso selecionar a div pelos seus atributos data-key, no valor do data-key eu passo o ${sound} para ser dinâmico.

Também vou precisar fazer uma verificação para caso encontre a div referente ao key pressionado, ele adicione uma classe do css no elemento usando o classList.add, ao fazer isso a div fica ativa, mas tem um porém porque ela vai ficar sempre ativa e quero que ela ative e depois de um tempo a cor dela suma, então um setTimeout resolve isso, defino o tempo de 300 milisegundos e dentro do timeout eu removo a classe active.

---

Contudo, quando eu aperto a tecla de som várias vezes, o som só é executado pela segunda vez quando o primeiro toque termina e isso vai atrapalhar em um ritmo acelerado, então o que vou fazer agora é fazer com que o segundo áudio não espere o primeiro terminar mas sim zerar o primeiro áudio para que o segundo toque, faço isso com o currentTime setado para 0.

---

Agora eu vou colocar um evento no botão de tocar para que quando eu digite as teclas no input e aperte tocar, esse botão toque as teclas pra mim, isso é bom para criar composições.

Então eu seleciono o elemento e adiciono um evento de clique nele, quando um clique ocorrer será executada uma função de callback, essa função vai precisar de duas coisas:

1. Ter que saber o que foi digitado na sequência do input.
2. Transformar a sequência em uma lista.

Antes de transformar a sequência em lista eu preciso fazer uma verificação.

Dentro dessa verificação eu vou transformar em array e rodar uma função chamada playComposition.

## função playComposition()

Essa função vai pegar o array e dar um loop e de tempos em tempos ir soltando a função playSong em cada um dos itens.

Dentro da função playSound eu mando dinâmicamente a tecla que foi pressionada.

Contudo, todas as teclas serão executadas de uma só vez dentro do loop, para evitar que isso aconteça eu preciso usar um intervalo de tempo que começa em tempos diferentes, vou fazer uma cadência de 4 sons por segundos, o que dá 250 milisegundos pra cada um, onde o primeiro começa com 0.
