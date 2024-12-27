let log = new Log(document.querySelector(".log"));

let knight = new Knight("Erivelton Knight");
let sorc = new Sorcerer("Erivelton Wizz");
let little = new LittleMonster();
let big = new BigMonster();

const stage = new Stage(
  knight,
  little,
  document.querySelector("#char"),
  document.querySelector("#monster"),
  log
)

stage.start();