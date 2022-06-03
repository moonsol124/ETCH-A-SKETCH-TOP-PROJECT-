function getRandomColor() {
    return Math.floor(Math.random() * (256 - 0));
}


function addBlackAndWhiteGrid() {
    const divs = document.querySelectorAll('.cel');
    divsArray = Array.from(divs);
    let colorIndex = 0;
    divsArray.forEach(div => {
        div.addEventListener('mouseover', e => {
            for (let i = 0; i < 10; i++) {
                if (colorIndex > 250) {
                    colorIndex = 0;
                }
                else {
                    colorIndex = colorIndex + (255/10);
                }
            div.style.backgroundColor = `RGB(${colorIndex}, ${colorIndex}, ${colorIndex})`;}})
        })
    }
    
    
function addColorfulGrid() {
    const divs = document.querySelectorAll('.cel');
    divsArray = Array.from(divs);
    let colorIndex = 0;
    divsArray.forEach(div => {
        div.addEventListener('mouseover', e => {
            //colorful grid
            rRed = getRandomColor();
            rGreen = getRandomColor();
            rBlue = getRandomColor();
            div.style.backgroundColor = `RGB(${rRed}, ${rGreen}, ${rBlue})`;})
        })
    }

const pen = document.getElementById('color');
//set a default value
pen.addEventListener ('input', e => {
    const defaultColor = document.getElementById('color').value;
    newColor = defaultColor;
    addDefaultGridColor(newColor);
})

function addDefaultGridColor(defaultColor = 'black') {
    const divs = document.querySelectorAll('.cel');
    divsArray = Array.from(divs);
    divsArray.forEach(div => {
        div.addEventListener('mouseover', e => {
            div.style.backgroundColor = defaultColor;})
    })
}


function createGrid() {
    const gridBody = document.querySelector('.grid-body');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.classList.add('cel');
            gridBody.appendChild(div);
        }
    }
    addDefaultGridColor();
}

function userCreatesGrid() {
    const gridBody = document.querySelector('.grid-body');
    const slider = document.getElementById('myRange');
    slider.addEventListener ('input', e => {
    const sliderValue = document.getElementById('myRange').value;
    const divs = document.querySelectorAll('.cel');
    divs.forEach(div => {
        div.remove();
    })
    gridBody.setAttribute('style', `grid-template-columns: repeat(${sliderValue}, 1fr);
                                    grid-template-rows: repeat(${sliderValue}, 1fr);`);
    for (let i = 0; i < sliderValue; i++) {
        for (let j = 0; j < sliderValue; j++) {
            const div = document.createElement('div');
            div.classList.add('cel');
            gridBody.appendChild(div);
            }
        }
    const color = document.getElementById('color').value;
    addDefaultGridColor(color);
    })
}

function ResetGrid() {
    const resetBtn = document.getElementById('reset-button');
    resetBtn.addEventListener ('click', e => {
        const divs = document.querySelectorAll('.cel');
        divs.forEach (div => {
            div.style.backgroundColor = 'RGB(255, 255, 255)';
        })
    })
}

function toBaW() {
    const btn = document.getElementById('BaW');
    btn.addEventListener ('click', e => {
        addBlackAndWhiteGrid();
    })
}

function toColorful() {
    const btn = document.getElementById('colorful');
    btn.addEventListener ('click', e => {
        addColorfulGrid();
    })
}

createGrid();
ResetGrid();
userCreatesGrid();
toBaW();
toColorful();



//create a default grid
//problem 1: pixel not fixed SOLVED
//problem 2: linear gauge chart SOLVED
//problem 3: make two buttons for each color grid SOLVED
 