// forma comum de usar callback
document.querySelector("#botaoQualquer").addEventListener('click', () => {
  alert("Clicou no botão qualquer");
});

/* 
Outra forma de usar Callback
criando a função primeiro e passando ela no evento 
*/

// Função que será usada no evento
function clicouCallback() {
  alert("Clicou no botão de Callback");
}

document.querySelector("#botaoCallback").addEventListener('click', clicouCallback);