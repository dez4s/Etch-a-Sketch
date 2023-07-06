const container = document.querySelector('.container');

for (i = 0; i < 16; i++) {
    const line = document.createElement('div');
    line.classList.add('lines');
    container.appendChild(line);
    for (j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('boxes');
        line.appendChild(div);
    }
}



const grid = Array.from(container.children);

grid.forEach(box => {
    box.addEventListener('mouseenter', changeColor);
});

function changeColor(e) {
    console.log(this);
    e.target.classList.add('red');
}

