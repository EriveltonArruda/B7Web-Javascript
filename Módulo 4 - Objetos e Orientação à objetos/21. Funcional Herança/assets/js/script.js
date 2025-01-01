// Objeto pai
const defaultUser = {
  name: '',
  email: '',
  level: 1
}

// Usando Herança para criar um usuário padrão.
const user1 = {
  // Referencio o pai para clonar as propriedades do pai
  ...defaultUser,
  // Substituindo as propriedades do pai.
  name: "Erivelton",
  email: "erivelton@gmail.com"
  // level será herdado, não será substituído.
}

console.log(user1);

// Criando um admin usando herança.
const admin = {
  ...defaultUser,
  name: "Admin Boladão",
  email: "adm@admboladao.com.br",
  level: 2
}

console.log(admin);