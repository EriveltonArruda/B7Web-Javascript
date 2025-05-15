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
    // só libera o drop se a caixa não tiver nenhum item dentro
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

    if (e.currentTarget.querySelector('.item') === null) {
        // item que está sendo arrastado
        let dragItem = document.querySelector('.item.dragging');
        // dropando o item na área selecionada
        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
}

// Functions Neutral Area
function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
}
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
}

// Logic Functions
function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');

        if (area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }
    });

    if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct');
    } else {
        document.querySelector('.areas').classList.remove('correct');
    }
}