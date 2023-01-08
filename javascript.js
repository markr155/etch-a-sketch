//initial setup
const defaultColour = 'black';
const defaultMode = 'black';
const defaultSize = 16;
const drawSquareBackground = 'white'

let currentColour = defaultColour;
let eraserStore = currentColour; //stores current colour for eraser function
let currentMode = defaultMode;
let currentSize = defaultSize;

const mainGrid = document.querySelector(".mainGrid");
const changeSizeBtn = document.querySelector('#changeSize');
const changeModeBtn = document.querySelector('#changeMode');
const resetGridBtn = document.querySelector('#resetGrid');
const eraseBtn = document.querySelector('#erase');
const drawBtn = document.querySelector('#draw');


//draws the grid with variable dimensions
function drawGrid(size){
    //removes all child divs if any exist
    while (mainGrid.firstChild) {
        mainGrid.firstChild.remove()
    };
    //creates grid of divs
    mainGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mainGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    //changes colour of divs on mouseover
    for (let i = 0; i < size * size; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add('drawSquare');
        newDiv.addEventListener('mouseover', changeColour);
        mainGrid.appendChild(newDiv)
        }
    currentSize = size;
    
}

//changes colour of divs on mouseover
function changeColour(e){
    e.target.style.backgroundColor = currentColour; 
}

//changes the size of grid on button click
function changeSize(){
    let newSize = prompt('Enter a size between 1 - 100')
    if(newSize < 0 || newSize > 100 || isNaN(newSize)){
        alert("Please enter a number between 1 and 100 inclusive");
    };
    drawGrid(newSize);
}
changeSizeBtn.addEventListener('click', () => {changeSize()});

//reset the grid on button click
function resetGrid(){
    const drawSquares = document.getElementsByClassName('drawSquare');
    for(let i = 0; i < drawSquares.length; i++) {
        drawSquares[i].style.backgroundColor = drawSquareBackground;
    }
}
resetGridBtn.addEventListener('click', () => {resetGrid()});

//change mouseover colour on eraser button click
eraseBtn.addEventListener('click', () => {
    eraserStore = currentColour;
    currentColour = drawSquareBackground;
});

//change mouseover colour to draw
drawBtn.addEventListener('click', () => {
    if (eraserStore == currentColour) {return};
    currentColour = eraserStore;
})

drawGrid(currentSize);

