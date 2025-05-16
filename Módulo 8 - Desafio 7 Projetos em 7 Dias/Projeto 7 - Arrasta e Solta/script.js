// Lista utilizada para a lógica da função update
// essa variável tem a informação das áreas
let areas = {
    a: null,
    b: null,
    c: null
};

// Itens que serão arrastáveis
document.querySelectorAll('.item').forEach(item => {
    // eventos de arraste
    item.addEventListener('dragstart', dragStart); // começar a arrastar o item.
    item.addEventListener('dragend', dragEnd); // soltou o item.
});

// Área para onde os itens serão arrastados.
document.querySelectorAll('.area').forEach(area => {
    // eventos de soltar os itens
    area.addEventListener('dragover', dragOver); // roda a função quando o item passar por cima da área de drop (caixinhas).
    area.addEventListener('dragleave', dragLeave); // roda a função quando o item sair de uma área dropável
    area.addEventListener('drop', drop); // roda a função quando o item é "largado" dentro da caixinha.
});

// Área inicial dos itens (para poder trazer os itens de volta)
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

// Functions Item
// começa a arrastar o mouse
function dragStart(e) {
    // adiciona a classe dragging que está no css (opacity 0.5)
    e.currentTarget.classList.add('dragging');
}

// soltou o mouse
function dragEnd(e) {
    // retira a classe dragging do css
    e.currentTarget.classList.remove('dragging');
}

// Functions Area
function dragOver(e) {
    // só libera o drop se a caixa estiver sem nenhum item dentro
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault(); // libera o drop, por padrão o drop é negado, com o preventDefault é liberado.
        e.currentTarget.classList.add('hover'); // Muda a cor da caixa onde o item está sendo colocado.
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover'); // Muda a cor da caixa onde o item está sendo colocado.
}

// essa função só vai rodar quando o dragOver liberar o drop
function drop(e) {
    e.currentTarget.classList.remove('hover'); // removendo o hover assim que o item é largado.

    // Só adicionará se a caixinha estiver vazia, se já tiver um elemento, não será feito o drop.
    if (e.currentTarget.querySelector('.item') === null) {
        // item que está sendo arrastado
        let dragItem = document.querySelector('.item.dragging');
        // dropando o item na área selecionada
        e.currentTarget.appendChild(dragItem);
        // quando fizer a troca da caixinha, as informações serão atualizadas.
        updateAreas();
    }
}

// Functions Neutral Area
function dragOverNeutral(e) {
    e.preventDefault(); // libera o drop do item dentro da área neutra
    e.currentTarget.classList.add('hover');
}
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
}
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');
    // item que está sendo arrastado
    let dragItem = document.querySelector('.item.dragging');
    // dropando o item na área selecionada
    e.currentTarget.appendChild(dragItem);
    // quando fizer a troca da caixinha, as informações serão atualizadas.
    updateAreas();
}

// Logic Functions
/* Essas informações são feitas no drop, então toda vez fizer uma troca de item na caixinha, vai rodar a função abaixo.
Essa função lê o que está acontecendo na tela e preenche o objeto de area de acordo com as informações do drop.
*/
function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        // pegando o nome da área para fazer a verificação
        let name = area.getAttribute('data-name');

        // se dentro da área achou um item
        if (area.querySelector('.item') !== null) {
            // areas[name] é 'a', 'b', ou 'c' lá do objeto criado no início
            // será adicionado o item (1, 2 ou 3) e preenchido dentro do objeto
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }
    });

    // Se a sequência dos itens for 1, 2 e 3, a borda da caixinha ficará verde, demonstrando que a sequência está correta.
    if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct'); // essa classe correct tem a borda verde no css
    } else {
        document.querySelector('.areas').classList.remove('correct');
    }
}