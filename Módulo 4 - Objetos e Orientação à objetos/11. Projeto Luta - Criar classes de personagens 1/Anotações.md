## Como funcionará esse jogo?

Nesse jogo teremos um guerreiro ou um mago de um lado e do outro lado teremos um monstro (LittleMonster ou BigMonster).

Todos eles terão algumas características:

```
Com relação á vida, eles terão as propriedades de máximo de vida e a vida atual.
Terão o nome.
Também será necessário que tenham a força de ataque e de defesa, isso porque a ideia é que os personagens tenham força e defesa diferentes, assim se a força do ataque for maior que a defesa, o dano é maior, se a força do ataque for um pouco maior que a defesa o dano recebido será baixo e caso a defesa seja maior que o valor do ataque, então o dano será negado (defendido).
```

Como todos tem a mesma característica, será criada uma classe padrão chamada Character (será a classe pai).

## Explicação do set life

Será feita uma verificação para garantir que a vida do personagem acabe quando chegue em 0, essa verificação é basicamente assim:

O herói ou o monstro tem 100 de life e levou 10 de dano, 90 é menor que 0? Não, então newLife agora é = 90.

Se o herói ou o monstro está com 5 de vida e levou 20 de dano, o resultado é -15, então -15 < 0? Sim, então newLife agora é = 0 e o personagem está morto.

```
set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
```

## Arquivos JS

Para deixar mais organizado, as classes serão colocadas em um arquivo classes.js e o arquivo script.js será a execução do código.
