//initial setup
const defaultColour = 'black';
const defaultMode = 'black';
const defaultSize = 16;

let currentColour = defaultColour;
let currentMode = defaultMode;
let currentSize = defaultSize;

const changeSizeBtn = document.querySelector('#changeSize');
const changeModeBtn = document.querySelector('#changeMode');
const resetGridBtn = document.querySelector('#resetGridBtn');

//draws the grid with variable dimensions
function drawGrid(size){

    mainGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mainGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add('drawSquare');
        newDiv.addEventListener('mouseover', changeColour);
        mainGrid.appendChild(newDiv)
        }
}

//changes colour of divs on mouseover
function changeColour(e){
    e.target.style.backgroundColor = currentColour; 
}

//changes the size of grid on click
function changeSize(newSize){
}
changeSizeBtn.addEventListener('click', () => {
    let newSize = prompt('Enter a size between 1 - 100')
    if(newSize )
});

const mainGrid = document.querySelector(".mainGrid");

drawGrid(10);


//change square colour when mouse enters