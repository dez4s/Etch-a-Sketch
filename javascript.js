const container = document.querySelector('.container');

for(i = 0; i < 16*16; i++) {
    const div = document.createElement('div');
    div.classList.add('boxes');
    container.appendChild(div);
}

const grid = Array.from(container.children);

grid.forEach(box => {
    box.addEventListener('mouseenter', changeColor);
});

function changeColor(e) {
    console.log(this);
    e.target.classList.add('red');
}

