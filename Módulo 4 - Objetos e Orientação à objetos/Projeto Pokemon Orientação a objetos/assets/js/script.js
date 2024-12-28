let log = new Log(document.querySelector(".log"));

let charizard = new Charizard("Charizard");
let sorc = new Sorcerer("Erivelton Wizz");
let little = new LittleMonster();
let blastoise = new Blastoise();

const stage = new Stage(
  charizard,
  blastoise,
  document.querySelector("#char"),
  document.querySelector("#blas"),
  log
)

stage.start();

const game = new Game();
game.playMusic();