let modalQt = 1;

// Funções auxiliares
const c = (el) => document.querySelector(el); // retorna o item
const cs = (el) => document.querySelectorAll(el); // retorna um array com os itens

// Listagem das pizzas
pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index);
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${ item.price.toFixed(2) }`;

  // evento de clique para abrir o Modal
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    let key = e.target.closest('.pizza-item').getAttribute('data-key');

    modalQt = 1;

    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    c('.pizzaInfo--actualPrice').innerHTML = `R$ ${ pizzaJson[key].price.toFixed(2) }`;

    c('.pizzaInfo--size.selected').classList.remove('selected');

    cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
      if (sizeIndex === 2) {
        size.classList.add('selected');
      }
      size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    c('.pizzaInfo--qt').innerHTML = modalQt;

    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1;
    }, 200);
  })

  c('.pizza-area').append(pizzaItem)
});

// Eventos do Modal
function closeModal() {
  c('.pizzaWindowArea').style.opacity = 0;
  setTimeout(() => {
    c('.pizzaWindowArea').style.display = 'none';
  }, 500);
}

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
  item.addEventListener('click', closeModal);
});

// botão de diminuir a quantidade de pizzas (-)
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
  // evita que diminua para 0 ou algum número negativo
  if (modalQt > 1) {
    modalQt--; // diminui a quantidade
    c('.pizzaInfo--qt').innerHTML = modalQt; // adiciona esse novo valor
  }
});

// botão de aumentar a quantidade de pizzas (+)
c('.pizzaInfo--qtmais').addEventListener('click', () => {
  modalQt++; // aumenta a quantidade
  c('.pizzaInfo--qt').innerHTML = modalQt; // adiciona esse novo valor
});

// ação de clique dos botões de tamanho
cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
  size.addEventListener('click', (e) => {
    // clicou em um item, desmarca o que já estava marcado 
    c('.pizzaInfo--size.selected').classList.remove('selected');
    // e marca o atual
    size.classList.add('selected');
  });
});