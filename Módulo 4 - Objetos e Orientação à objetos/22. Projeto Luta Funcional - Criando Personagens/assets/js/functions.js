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