## Objetos dentro de objetos

Para pegar objetos que estão dentro de objetos eu desconstruo um objeto e referencio o objeto que está dentro de pessoa (nesse caso é o social, ficando pessoa.social)

Mas e se eu quiser pegar as propriedades dentro de pessoa junto com as propriedades do objeto social que está dentro de pessoa?

Simples, pego nome e idade normalmente e em seguida eu entro em social: e depois dos dois pontos eu desconstruo o que eu quero (no caso é o instagram) e o objeto referenciado será o pessoa.

E se eu tivesse outro objeto dentro do instagram? quero pegar a propriedade url, mas quero que a variável venha com o nome instagram, como faria?

seguindo a mesma lógica do exemplo anterior, eu precisaria entrar em social e desconstruiria o instagram e dentro dele eu desconstruiria de novo e entraria na url, dentro da url eu renomeio para instagram.

```
let { nome, idade, social: {instagram: {url: instagram }} } = pessoa;
```

Caso quisesse pegar também os seguires, eu pego dentro do objeto desconstruido onde a url está, apenas separo por uma vírgula.

## Desconstruindo objetos nos parâmetros de funções

Se não fosse desconstruir no parâmetro, provavelmente teria que fazer assim dentro da função:

```
function pegarNomeCompleto(obj) {
  let nome = obj.nome;
  let sobrenome = obj.sobrenome

  return `${nome} ${sobrenome}`;
}

console.log(pegarNomeCompleto(pessoa));
```

Posso desconstruir um objeto dentro do parâmetro da função também, assim como definir valor padrão e também desconstruir outros objetos como foi o exemplo da url do instagram.
