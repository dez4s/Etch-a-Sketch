const container = document.querySelector('.container');
const slider = document.querySelector('#size');
const paraSize = document.querySelector('.range-number');
const colorPicker = document.querySelector('input[type="color"]');
const clearBtn = document.querySelector('.reset');
const randomBtn = document.querySelector('.random-container > button');
randomBtn.classList.add('noRainbow');
const blackBtn = document.querySelector('.black');
blackBtn.classList.add('noFadeBlack');
const colorContainer = document.querySelector('.color-container');

const text = document.createElement('p');
text.textContent = 'Disabled';

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
    if (e.buttons == 1 && !rainbowOn && !fadeBlack) { 
        e.target.style.backgroundColor = colorHolder;
    } else if (e.buttons == 1 && rainbowOn) {
        colorHolder = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        e.target.style.backgroundColor = colorHolder;
    } else if (e.buttons == 1 && fadeBlack) {
        e.target.style.backgroundColor = colorHolder;
       
       let currBrightness = parseFloat(window.getComputedStyle(e.target).getPropertyValue('filter').split('').filter(e => {
           if(e >= 0) return true;
        }).join('.'));

        e.target.style.setProperty('filter', `brightness(${currBrightness * 0.9})`);
    }
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

clearBtn.addEventListener('click', () => {
    const newContainer = document.createElement('div');
    document.querySelector('.big-container').replaceChild(newContainer, document.querySelector('.container'));
    newContainer.classList.add('container');
    createGrid(gridSize);
});

let rainbowOn = 0;

randomBtn.addEventListener('click', (e) => {
    fadeBlack = 0;
    blackBtn.classList.replace('fadeBlack', 'noFadeBlack');
    if (!rainbowOn) {
        rainbowOn = 1;
        e.currentTarget.classList.replace('noRainbow', 'rainbow');      
        if (Array.from(colorContainer.children).includes(colorPicker)) {
            colorContainer.replaceChild(text, colorPicker);
        }
    } else {
        e.currentTarget.classList.replace('rainbow', 'noRainbow');
        rainbowOn = 0;
        colorContainer.replaceChild(colorPicker, text);
        colorHolder = colorPicker.value;
    }
});

let fadeBlack = 0;

blackBtn.addEventListener('click', (e) => {
    rainbowOn = 0;
    randomBtn.classList.replace('rainbow', 'noRainbow');
    if (!fadeBlack) {
        colorHolder = '#F5F5F5';
        fadeBlack = 1;
        e.currentTarget.classList.replace('noFadeBlack', 'fadeBlack');      
        if (Array.from(colorContainer.children).includes(colorPicker)) {
            colorContainer.replaceChild(text, colorPicker);
        }
    } else {
        e.currentTarget.classList.replace('fadeBlack', 'noFadeBlack');
        fadeBlack = 0;
        colorContainer.replaceChild(colorPicker, text);
        colorHolder = colorPicker.value;
    }
});

