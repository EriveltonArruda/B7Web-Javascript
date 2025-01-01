const defaultCharacter = {
  name: "",
  life: 1,
  maxLife: 1,
  attack: 0,
  defense: 0,
}

// Factory dos heróis //
const createKnight = (name) => {
  return {
    ...defaultCharacter,
    // name virá do parâmetro
    name,
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 8
  }
}

const createSorcerer = (name) => {
  return {
    ...defaultCharacter,
    name,
    life: 50,
    maxLife: 50,
    attack: 14,
    defense: 3
  }
}

// Factory dos Monstros //
const createLittleMonster = () => {
  return {
    ...defaultCharacter,
    name: "Little Monster",
    life: 40,
    maxLife: 40,
    attack: 4,
    defense: 3
  }
}

const createBigMonster = () => {
  return {
    ...defaultCharacter,
    name: "Big Monster",
    life: 120,
    maxLife: 120,
    attack: 16,
    defense: 6
  }
}

const stage = {
  // Pode retirar se quiser (é opcional)
  fighter1: null,
  fighter2: null,
  fighter1El: null,
  fighter2El: null,

  // Responsável por iniciar o jogo (Passo 1)
  start(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;

    // Evento do botão (Passo 2)
    // fighter1 ataca fighter2
    this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
    // fighter2 ataca fighter1
    this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

    this.update();
  },

  // Passo 3
  update() {
    // Fighter 1
    this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
    // Cálculo da barra de vida
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;
    // Fighter 2
    this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
    // Cálculo da barra de vida
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
  },

  doAttack(attacking, attacked) {
    // Verificando se tem alguém vivo
    if (attacking.life <= 0 || attacked.life <= 0) {
      log.addMessage("Alguém está morto, não pode atacar");
      return;
    }

    // Fator de ataque e defesa
    const attackFactor = (Math.random() * 2).toFixed(2);
    const defenseFactor = (Math.random() * 2).toFixed(2);

    // usando os fatores
    const actualAttack = attacking.attack * attackFactor;
    const actualDefense = attacked.defense * defenseFactor;

    // verificação para saber se atacou ou defendeu.
    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      // Verificação para a vida não ficar negativa.
      attacked.life = attacked.life < 0 ? 0 : attacked.life;
      log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
    } else {
      log.addMessage(`${attacked.name} conseguiu defender`);
    }

    this.update();
  }
}

const log = {
  list: [],
  // função para adicionar as mensagens
  addMessage(msg) {
    // adicionando a mensagem no array
    this.list.push(msg);
    // renderizando na tela
    this.render();
  },

  // função responsável para exibir no log da tela
  render() {
    const logEl = document.querySelector('.log');
    logEl.innerHTML = '';

    for (let i in this.list) {
      logEl.innerHTML += `<li>${this.list[i]}</li>`;
    }
  }
}