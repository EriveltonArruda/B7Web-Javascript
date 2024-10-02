let numero = 0;

/* Esse loop vai fazer o seguinte:
enquanto meu numero for < 10, execute o console.log e incremente + 1, então na 
primeira execução numero será 0, na próxima será 1, até ele ser < 10, se ele
chegar a 10, o loop finaliza.
*/

while (numero < 10) {
  console.log(`O número da vez é ${ numero }`);
  numero++;
}

// Recriando o exemplo acima com Loop For
for (let numero = 0; numero < 10; numero++) {
  console.log(`O número da vez é ${ numero }`);
}

// while é mais utilizado quando precisamos lidar com servidores e precisamos que o loop fique rodando eternamente.