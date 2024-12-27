## Explicação da barra de vida

Para trocar a barra de vida precisamos calcular a porcentagem baseada na vida atual e na vida máxima.

```
let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
```

Em seguida pego a porcentagem e preencho a largura da barra, assim se a porcentagem mudar, a barra de vida mudará junto com ela.

```
this.fighter1El.querySelector(".bar").style.width = `${f1pct}%`;
```

## Evento de clique da função start

Porque a ação de atacar foi colocado na função start e não no update?
Porque no update, a ação será executada sempre que houver um ataque, então sempre que atualizar terá ação de clique e eu só preciso adicionar a ação de clique uma vez que é quando o jogo começar.

```
Seleciono o botão de ataque, adiciono o evento de clique nele e nesse evento será executada a função de ataque, essa função recebe 2 parâmetros:
1. quem está atacando.
2. quem está sendo atacado.

this.fighter1El.querySelector(".attackButton").addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
```
