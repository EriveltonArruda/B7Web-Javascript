// Funções auxiliares
const c = (el) => document.querySelector(el); // retorna o item
const cs = (el) => document.querySelectorAll(el); // retorna um array com os itens

pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${ item.price.toFixed(2) }`;

  // adicionando um evento na tag a de pizza-item para abrir o modal
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault(); // bloqueando a tela de atualizar ao clicar no 'a'

    // deixando a opacidade em 0 antes de abrir o modal para aplicar a animação de transição
    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex'; // Abrindo o Modal
    // setTimeout de 200 milisegundos para a animação funcionar
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1; // animação do modal abrindo
    }, 200);
  })

  c('.pizza-area').append(pizzaItem)



});