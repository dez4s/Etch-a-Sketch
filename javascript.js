const container = document.querySelector('.container');
const slider = document.querySelector('#size');
const paraSize = document.querySelector('.range-number');
const colorPicker = document.querySelector('input[type="color"]');

let gridSize = 16; // default gridSize
let colorHolder = 'black'; //default color
paraSize.textContent = `${gridSize}`;

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
    } // create i lines with j divs on each line

    const grid = document.querySelectorAll('.boxes');

    grid.forEach(box => {
        box.addEventListener('mouseenter', changeColor);
    }); // change color on mouseenter event
}

function changeColor(e) {
    if (e.buttons == 1) e.target.style.backgroundColor = colorHolder;
    e.preventDefault();
}   


createGrid(gridSize);

slider.addEventListener('change', e => {
    // inputNumber = Number(prompt('Please enter a new grid size', 16));
    // inputNumber ? gridSize = inputNumber : alert('Please enter a valid number'); // for button on click event handler only
    gridSize = e.currentTarget.value;
    const newContainer = document.createElement('div');
    document.querySelector('.big-container').replaceChild(newContainer, document.querySelector('.container'));
    newContainer.classList.add('container');
    paraSize.textContent = `${gridSize}`;
    createGrid(gridSize);
});


colorPicker.addEventListener('input', e => {
    colorHolder = e.target.value;  
});
