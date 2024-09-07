/* Crie uma função que valide usuário e senha
Usuário correto: pedro
Senha correta: 123
*/

// Solução:
function validar(usuario, senha) {
  if (usuario === "pedro" && senha === "123") {
    return true;
  } else {
    return false;
  }
}

// Uso da função:
let usuario = "Erivelton";
let senha = "1234";
let validacao = validar(usuario, senha);
if (validacao) {
  console.log("Acesso concedido");
} else {
  console.log("Acesso NEGADO!");
}

