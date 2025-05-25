let cart = []; // carrinho de compras
let modalKey = 0; // mostra qual é a pizza selecionada (vai ser usada no carrinho)
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
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

  // evento de clique para abrir o Modal
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    let key = e.target.closest('.pizza-item').getAttribute('data-key');
    modalQt = 1;
    modalKey = key; // mostra qual é a pizza


    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

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

c('.pizzaInfo--qtmenos').addEventListener('click', () => {
  if (modalQt > 1) {
    modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt;
  }
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
  modalQt++;
  c('.pizzaInfo--qt').innerHTML = modalQt;
});

cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
  size.addEventListener('click', (e) => {
    c('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
  });
});


c('.pizzaInfo--addButton').addEventListener('click', () => {
  let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));

  let identifier = pizzaJson[modalKey].id + '@' + size;

  let key = cart.findIndex((item) => item.identifier == identifier);

  if (key > -1) {
    cart[key].qt += modalQt;
  } else {
    cart.push({
      identifier,
      id: pizzaJson[modalKey].id,
      size,
      qt: modalQt
    });
  }

  updateCart();
  closeModal();
});

function updateCart() {
  if (cart.length > 0) {
    c('aside').classList.add('show');

    // é necessário zerar o item antes
    c('.cart').innerHTML = '';

    for (let i in cart) {
      // em cada item do loop, pego o próprio item
      let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);

      // pego o cartitem do HTML, precisa clonar para ter todas as informações no carrinho
      let cartItem = c('.models .cart--item').cloneNode(true);

      // tamanho da pizza para colocar no pizzaName
      let pizzaSizeName;

      // switch no size do carrinho para identificar qual é a pizza, se colocar somente cart[i].size vai mostrar 0, 1 e 2 no tamanho porque é um array, preciso mostrar o tamanho em P, M e G.
      switch (cart[i].size) {
        case 0:
          pizzaSizeName = 'P';
          break;
        case 1:
          pizzaSizeName = 'M';
          break;
        case 2:
          pizzaSizeName = 'G';
          break;
      }

      // Variável para exibir nome e tamanho das pizzas
      let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

      // preenchendo a imagem no carrinho
      cartItem.querySelector('img').src = pizzaItem.img;

      // adicionando o nome e o tamanho da pizza
      cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;

      // Quantidade das pizzas
      cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;


      // adiciono no cart para exibir na tela
      c('.cart').append(cartItem);

    }
  } else {
    c('aside').classList.remove('show');
  }
}