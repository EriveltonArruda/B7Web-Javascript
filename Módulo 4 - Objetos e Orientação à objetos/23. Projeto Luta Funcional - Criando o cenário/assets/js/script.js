// Usando os personagens
const knight = createKnight("Erivelton Knight");
const monster = createLittleMonster();

stage.start(
  knight,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster")
)