// Funções auxiliares
const c = (el) => document.querySelector(el); // retorna o item
const cs = (el) => document.querySelectorAll(el); // retorna um array com os itens

pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  // Preenchendo as informações da pizza
  pizzaItem.querySelector('.pizza-item--img img').src = item.img; // colocando a imagem da pizza dentro do src
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${ item.price.toFixed(2) }`; // fixando em dois algarismos

  c('.pizza-area').append(pizzaItem)
});