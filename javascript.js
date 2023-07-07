const container = document.querySelector('.container');
const btn = document.querySelector('#size');
let gridSize = 16;

function createGrid(size) {
    for (i = 0; i < size; i++) {
        const line = document.createElement('div');
        line.classList.add('lines');
        document.querySelector('.container').appendChild(line);
        for (j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('boxes');
            line.appendChild(div);
        }
    }
    const grid = document.querySelectorAll('.boxes');

    grid.forEach(box => {
        box.addEventListener('mouseenter', changeColor);
    });

    function changeColor(e) {
        if (e.buttons == 1) e.target.classList.add('red');
        e.preventDefault();
    }   
}

createGrid(gridSize);

btn.addEventListener('click', e => {
    inputNumber = Number(prompt('Please enter a new grid size', 16));
    inputNumber ? gridSize = inputNumber : alert('Please enter a valid number');
    const newContainer = document.createElement('div');
    document.body.replaceChild(newContainer, document.querySelector('.container'));
    newContainer.classList.add('container');
    createGrid(gridSize);
});

