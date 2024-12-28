class Character {
  // Características (serão alteradas na instanciação)
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name) {
    this.name = name;
  }

  get life() {
    return this._life;
  }

  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

// Heróis
class Charizard extends Character {
  constructor(name) {
    super(name);
    this.life = 120;
    this.attack = 13;
    this.defense = 8;
    this.maxLife = this.life;
  }
}

class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.attack = 15;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

// Monstros
class LittleMonster extends Character {
  constructor() {
    super("Little Monster");
    this.life = 40;
    this.attack = 4;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

class Blastoise extends Character {
  constructor() {
    super("Blastoise");
    this.life = 120;
    this.attack = 16;
    this.defense = 10;
    this.maxLife = this.life;
  }
}

// Controle da música
class Game {
  constructor() {
    this.music = document.getElementById("background-music");
  }

  playMusic() {
    this.music.play();
  }

  pauseMusic() {
    this.music.pause();
  }

  stopMusic() {
    this.music.pause();
    this.music.currentTime = 0;
  }

  setVolume(value) {
    this.music.volume = value;
  }

  toggleMusic() {
    if (this.music.paused) {
      this.playMusic(); // Inicia a música se estiver pausada
    } else {
      this.pauseMusic(); // Pausa a música se estiver tocando
    }
  }
}

// Classe de Cenário
class Stage {
  constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.log = logObject;
  }

  start() {
    this.update();
    // fighter 1 ataca fighter 2
    this.fighter1El.querySelector(".attackButton").addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
    // fighter 2 ataca fighter 1
    this.fighter2El.querySelector(".attackButton").addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
  }

  update() {
    // fighter 1
    this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`;
    // Cálculo da porcentagem de vida
    let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    // preenchendo a largura da barra
    let f1bar = this.fighter1El.querySelector(".bar");
    f1bar.style.width = `${f1pct}%`;

    // Mudando cores da barra de vida
    if (f1pct > 50) {
      f1bar.style.backgroundColor = "green";
    } else if (f1pct > 20) {
      f1bar.style.backgroundColor = "yellow";
    } else {
      f1bar.style.backgroundColor = "red";
    }

    // fighter 2
    this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`;
    // Cálculo da porcentagem de vida
    let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    // preenchendo a largura da barra
    let f2bar = this.fighter2El.querySelector(".bar")
    f2bar.style.width = `${f2pct}%`;

    // Mudando cores da barra de vida
    if (f2pct > 50) {
      f2bar.style.backgroundColor = "green";
    } else if (f2pct > 20) {
      f2bar.style.backgroundColor = "yellow";
    } else {
      f2bar.style.backgroundColor = "red";
    }
  }

  // Função do evento de clique
  doAttack(attacking, attacked) {
    // Verificando se estão vivos
    if (attacking.life <= 0) {
      this.log.addMessage("Morto não ataca!");
      return;
    } else if (attacked.life <= 0) {
      this.log.addMessage("Atacando cachorro morto.");
      return;
    }

    // Fator de ataque e defesa
    let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);

    // Utilizando o fator no ataque e defesa
    let actualAttack = attacking.attack * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;

    // Usando ataque e defesa
    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack.toFixed(2);
      this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
    } else {
      this.log.addMessage(`${attacked.name} conseguiu defender...`);
    }

    this.update();

    // Verificar se algum personagem morreu e parar a música
    if (this.fighter1.life <= 0 || this.fighter2.life <= 0) {
      this.log.addMessage("O jogo terminou!");
      game.stopMusic();  // Parando a música quando o jogo terminar
    }
  }
}

class Log {
  list = [];

  constructor(listEl) {
    this.listEl = listEl;
  }

  addMessage(msg) {
    this.list.push(msg);
    this.render();
  }

  render() {
    // limpando a lista
    this.listEl.innerHTML = "";
    // preenchendo os itens no elemento
    for (let i in this.list) {
      this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
    }

    // Rolando automaticamente para o final da lista
    this.listEl.scrollTop = this.listEl.scrollHeight;
  }
}
