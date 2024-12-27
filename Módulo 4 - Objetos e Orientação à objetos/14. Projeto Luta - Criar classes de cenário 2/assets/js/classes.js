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

class Knight extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.attack = 10;
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

class LittleMonster extends Character {
  constructor() {
    super("Little Monster");
    this.life = 40;
    this.attack = 4;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

class BigMonster extends Character {
  constructor() {
    super("Big Monster");
    this.life = 120;
    this.attack = 16;
    this.defense = 6;
    this.maxLife = this.life;
  }
}

// Passo 1 - Classe de Cenário
class Stage {
  constructor(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
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
    this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
    // Cálculo da porcentagem de vida
    let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    // preenchendo a largura da barra
    this.fighter1El.querySelector(".bar").style.width = `${f1pct}%`;

    // fighter 2
    this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
    // Cálculo da porcentagem de vida
    let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    // preenchendo a largura da barra
    this.fighter2El.querySelector(".bar").style.width = `${f2pct}%`;
  }

  // Função do evento de clique
  doAttack(attacking, attacked) {
    console.log(`${attacking.name} está atacando ${attacked.name}`)

    this.update();
  }
}