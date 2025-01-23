// Função para usar a promise
function pegarTemperatura() {
  return new Promise(function (resolve, reject) {
    console.log("Pegando temperatura...");

    setTimeout(function () {
      resolve('40 na sombra');
    }, 2000);
  });
}

// USANDO A PROMISE
let temp = pegarTemperatura();
temp.then(function (resultado) {
  console.log(`TEMPERATURA: ${ resultado }`);
}).catch(function (error) {
  console.log(`Deu erro ai ${ error }`);
})