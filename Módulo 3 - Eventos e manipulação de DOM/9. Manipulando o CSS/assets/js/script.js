function clicou() {
  const li = document.querySelector("li");

  // Quando uma propriedade tem traço - 
  // utilizamos camelCase no DOM
  li.style.backgroundColor = "#00f";
  // Se não existir a propriedade no elemento
  // Ela será adicionada
  li.style.fontSize = "20px";
}