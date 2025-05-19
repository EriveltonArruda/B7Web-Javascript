// Funções auxiliares
const c = (el) => document.querySelector(el); // retorna o item
const cs = (el) => document.querySelectorAll(el); // retorna um array com os itens

pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index); // chave da pizza específica, servirá para saber qual pizza foi clicada, assim como suas informações

  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${ item.price.toFixed(2) }`;

  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();

    /* 
    pegando a chave da pizza clicada para exibir no modal, closest procura o elemento mais próximo passado no parâmetro da função, no caso abaixo, ele vai procurar o item mais próximo que contenha o pizza-item
    */
    let key = e.target.closest('.pizza-item').getAttribute('data-key');

    // preencher as informações no modal
    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;

    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1;
    }, 200);
  })

  c('.pizza-area').append(pizzaItem)
});