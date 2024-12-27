## função doAttack

Essa função é a responsável pelo ataque e defesa dos personagens.

Primeira coisa que preciso fazer é uma verificação básica, quem tá atacando e quem está sendo atacado está vivo?

```
 if (attacking.life <= 0 || attacked.life <= 0) {
      console.log("Atacando cachorro morto.");
      return;
    }
```

Em seguida vou criar o fator de ataque e o fator de defesa, esse é um fator aleatório, esses fatores serão multpilicados pelo ataque e pela defesa respectivamente, então se o personagem tem 10 de ataque e foi gerado um valor baixo pelo Math.Random(0,26 por exemplo), então o ataque será baixo ou defendido.

```
let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);

    let actualAttack = attacking.attack * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;
```

Em seguida vou criar a verificação para saber se houve dano ou se defendeu, se actualAttack > actualDefense quer dizer que o ataque foi bem sucedido, caso contrário, foi defendido.

Se o ataque foi bem sucedido, o dano do ataque será reduzido da vida de quem foi atacado

```
attacked.life -= actualAttack.toFixed(2);
```
