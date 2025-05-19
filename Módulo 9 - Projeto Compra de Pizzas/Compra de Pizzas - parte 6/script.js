// quantidade de pizzas no modal
let modalQt = 1;

// Funções auxiliares
const c = (el) => document.querySelector(el); // retorna o item
const cs = (el) => document.querySelectorAll(el); // retorna um array com os itens

pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index);
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${ item.price.toFixed(2) }`;

  // Modal
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    let key = e.target.closest('.pizza-item').getAttribute('data-key');

    // resetando a quantidade de pizzas sempre que o Modal for aberto
    modalQt = 1;

    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    c('.pizzaInfo--actualPrice').innerHTML = `R$ ${ pizzaJson[key].price.toFixed(2) }`;

    // Resetando o tamanho selecionado no modal
    c('.pizzaInfo--size.selected').classList.remove('selected');

    // Tamanho das pizzas (pequeno, médio, grande)
    cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
      // deixando a pizza grande como selecionada por padrão 
      if (sizeIndex === 2) {
        size.classList.add('selected');
      }
      // Mostrando os tamanhos das pizzas no modal
      size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    // quantidade de pizzas
    c('.pizzaInfo--qt').innerHTML = modalQt;

    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1;
    }, 200);
  })

  c('.pizza-area').append(pizzaItem)
});