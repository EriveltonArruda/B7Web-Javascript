// testando os personagens
let char = new Knight("Erivelton Knight");
let sorc = new Sorcerer("Erivelton Wizz");
let little = new LittleMonster();
let big = new BigMonster();

const stage = new Stage(
  char,
  little,
  document.querySelector("#char"),
  document.querySelector("#monster")
)

stage.start();