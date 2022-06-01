function getRandomColor() {
    return Math.floor(Math.random() * (256 - 0));
}


function addColorOnGrid() {
    const divs = document.querySelectorAll('.div-style');
    divsArray = Array.from(divs);
    let colorIndex = 0;
    divsArray.forEach(div => {
        div.addEventListener('mouseover', e => {
            //colorful grid
              //rRed = getRandomColor();
              //rGreen = getRandomColor();
              //rBlue = getRandomColor();
            //black and white grid
            for (let i = 0; i < 10; i++) {
                if (colorIndex > 250) {
                    colorIndex = 0;
                }
                else {
                    colorIndex = colorIndex + (255/10);
                }
            }
            div.style.backgroundColor = `RGB(${colorIndex}, ${colorIndex}, ${colorIndex})`;
        })
    })    
}

function createGrid(maxGrid = 16) {
    for (let i = 0; i < maxGrid; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('div-row');
        for (let j = 0; j < maxGrid; j++) {
            const div = document.createElement('div');
            div.classList.add('div-style');
            divRow.appendChild(div);
        }
        body.appendChild(divRow);
    }
    addColorOnGrid();
}

function userCreatesGrid() {
    const gridBtn = document.getElementById('grid-button');
    gridBtn.addEventListener('click', e => {
    let input = window.prompt('Enter number of grid');
    userInput = parseInt(input);
    if (userInput < 1 || userInput > 100 || isNaN(userInput)) {
        alert ("wrong input.");
        return;
    }
    else {
        const divs = document.querySelectorAll('.div-style');
        divs.forEach(div => {
            div.remove();
        })
        createGrid(userInput);
    }
})
}

function ResetGrid() {
    const resetBtn = document.getElementById('reset-button');
    resetBtn.addEventListener ('click', e => {
        const divs = document.querySelectorAll('.div-style');
        divs.forEach (div => {
            div.style.backgroundColor = 'RGB(0, 0, 0)';
        })
    })
}

const body = document.querySelector('.grid-body');
//create a default grid
createGrid();
userCreatesGrid();
ResetGrid();

//problem 1: pixel not fixed
//problem 2: linear gauge chart
//problem 3: make two buttons for each color grid
 