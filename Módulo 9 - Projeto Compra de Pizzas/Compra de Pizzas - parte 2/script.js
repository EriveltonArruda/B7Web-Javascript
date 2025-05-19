// Função para evitar ficar usando document.querySelector toda vez, só usar a função e passar no parâmetro a classe que quer selecionar
const c = (el) => document.querySelector(el); // retorna o item
const cs = (el) => document.querySelectorAll(el); // retorna um array com os itens

// Passo 1: Listar as pizzas fazendo uma cópia do modelo do HTML, preencher os dados e jogar na tela
// item: pizza
// index: o número do array do item específico
pizzaJson.map((item, index) => {
  // clonando a estrutura do HTML (cloneNode pega o item e tudo que tem dentro dele)
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  // Adicionando pizzaItem na tela 
  // se utilizasse innerHTML seria o conteúdo seria substituido e nunca adicionaria as outras, com append eu adiciono todas as pizzas sem substituir.
  c('.pizza-area').append(pizzaItem)
});