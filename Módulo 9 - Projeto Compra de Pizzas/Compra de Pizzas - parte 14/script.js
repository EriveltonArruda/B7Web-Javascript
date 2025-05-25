let cart = []; // carrinho de compras
let modalKey = 0; // mostra qual é a pizza selecionada (vai ser usada no carrinho)
let modalQt = 1; // quantidade de pizzas no modal

// Funções para evitar ficar usando document.querySelector toda vez, só usar a função e passar no parâmetro a classe que quer selecionar
const c = (el) => document.querySelector(el); // retorna o item
const cs = (el) => document.querySelectorAll(el); // retorna um array com os itens

// Passo 1: Listar as pizzas fazendo uma cópia do modelo do HTML, preencher os dados e jogar na tela
// item: pizza
// index: o número do array do item específico
pizzaJson.map((item, index) => {

  // clonando a estrutura do HTML (cloneNode pega o item e tudo que tem dentro dele)
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  // Preenchendo as informações da pizza
  pizzaItem.setAttribute('data-key', index); // chave da pizza específica, servirá para saber qual pizza foi clicada, assim como suas informações

  // exibindo a imagem, nome, descrição e preço
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`; // fixando em dois algarismos

  // adicionando um evento na tag a de pizza-item para abrir o modal
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault(); // bloqueando a tela de atualizar ao clicar no 'a'

    /* 
    pegando a chave da pizza clicada para exibir no modal, closest procura o elemento mais próximo passado no parâmetro da função, no caso abaixo, ele vai procurar o item mais próximo que contenha o pizza-item
    */
    let key = e.target.closest('.pizza-item').getAttribute('data-key');

    modalQt = 1; // resetando a quantidade de pizzas sempre que o Modal for aberto
    modalKey = key; // mostra qual é a pizza

    // preencher as informações no modal
    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

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

    // deixando a opacidade em 0 antes de abrir o modal para aplicar a animação de transição
    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex'; // Abrindo o Modal
    // setTimeout de 200 milisegundos para a animação funcionar
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1; // animação do modal abrindo
    }, 200);
  })

  // Adicionando pizzaItem na tela 
  // se utilizasse innerHTML seria o conteúdo seria substituido e nunca adicionaria as outras, com append eu adiciono todas as pizzas sem substituir.
  c('.pizza-area').append(pizzaItem)
});

// Eventos do Modal
// Quando fechar o modal, levará 500 milisegundos para o display ser none
function closeModal() {
  c('.pizzaWindowArea').style.opacity = 0;
  setTimeout(() => {
    c('.pizzaWindowArea').style.display = 'none';
  }, 500);
}

// fechando o modal ao clicar em cancelar ou no botão voltar (mobile)
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

// ação de clique dos botões de tamanho da pizza no modal
cs('.pizzaInfo--size').forEach((size) => {
  size.addEventListener('click', (e) => {
    // clicou em um item, desmarca o que já estava marcado 
    c('.pizzaInfo--size.selected').classList.remove('selected');
    // e marca o atual
    size.classList.add('selected');
  });
});

// ação do Carrinho de compras
c('.pizzaInfo--addButton').addEventListener('click', () => {
  // informações necessárias do carrinho;
  // Qual a pizza? (modalKey)
  // Qual o tamanho? (size)
  // Quantas pizzas? (modalQt)
  let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));

  // identificador para saber quais pizzas foram adicionadas, 
  // só serão separadas no carrinho quando tiverem tamanhos diferentes
  let identifier = pizzaJson[modalKey].id + '@' + size;

  // verifica se já existe o item para poder evitar que sejam criados dois itens de mesmo tamanho no carrinho quando a pizza é adicionada de novo depois de já ser adicionada 1x, 
  // se achar vai retornar o index do identificador, 
  // se não achar vai retornar -1
  let key = cart.findIndex((item) => item.identifier == identifier);

  // verifica se no carrinho já existe o identificador que está sendo adicionado, se existir a quantidade será aumentada
  if (key > -1) {
    cart[key].qt += modalQt; // aumentando a quantidade porque existe
  } else {
    // não existe, ou seja, o usuário não adicionou aquela pizza no carrinho, então adiciono com o push
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

// MOBILE //
// Ação do botão de carrinho na versão mobile
c('.menu-openner').addEventListener('click', () => {
  // O carrinho só vai abrir se tiver item dentro dele, se estiver 0 e for clicado, ele não abrirá
  if (cart.length > 0) {
    // O carrinho no mobile está com left: 100, ou seja, todo para a direita, vamos tirar isso para ele aparecer
    c('aside').style.left = '0';
  }
});

// Ação do botão "X" que fecha o carrinho no Mobile
c('.menu-closer').addEventListener('click', () => {
  // fecha o carrinho fazendo o inverso, ou seja, colocamos o carrinho para a direita.
  c('aside').style.left = '100vw';
});

// WEB/MOBILE //
// função que atualiza o carrinho
function updateCart() {
  // sempre que fizer qualquer coisa no carrinho, colocamos dentro do span a quantidade de itens, dessa forma vai mostrar quantos itens foram adicionados no carrinho (na versão Mobile)
  c('.menu-openner span').innerHTML = cart.length;

  // se tiver itens no carrinho, vou mostrar o carrinho
  if (cart.length > 0) {
    c('aside').classList.add('show'); // mostrando o carrinho

    // é necessário zerar o item antes de adicionar no append
    c('.cart').innerHTML = '';

    // Variáveis referentes aos valores no carrinho
    let subtotal = 0;
    let desconto = 0;
    let total = 0;

    // pegando item a item para exibir na tela
    for (let i in cart) {
      // identificando quem é a pizza
      let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id); // procurando o id

      // Cálculo do subtotal vai ser o preço do item * o preço da pizza
      subtotal += pizzaItem.price * cart[i].qt;

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

      // botões de mais e menos no carrinho
      cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
        // só vai diminuir tiver pelo menos um item no carrinho
        if (cart[i].qt > 1) {
          cart[i].qt--;
        } else {
          // se clicar no menos, vai remover o item
          cart.splice(i, 1);
        }
        updateCart();
      });

      cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
        cart[i].qt++; // aumenta em + 1
        updateCart(); // atualiza o carrinho para modificar na tela
      });

      // adiciono no cart para exibir na tela
      c('.cart').append(cartItem);
    }

    desconto = subtotal * 0.1; // 10% de desconto
    total = subtotal - desconto;

    // exibindo na tela o subtotal, desconto e total
    // Como tem 2 span na div e nenhum span tem classe, 
    // selecionamos o último item do span que tiver na div com o last-child.
    c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
    c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
    c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
  } else {
    c('aside').classList.remove('show');
    // fechando o carrinho no mobile quando diminui a quantidade para 0
    c('aside').style.left = '100vw';
  }
}