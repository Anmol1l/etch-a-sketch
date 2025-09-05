const container = document.querySelector(".container")
const gridSize = document.querySelector(".gridSize")

function grid (size) {
for(i = 1; i <= size * size; i++) {

    let square = document.createElement("div")
    square.classList = "square";
    container.appendChild(square);
}
}

function colourOnHover () {
let allSquares = document.querySelectorAll(".square")
allSquares.forEach(square => square.addEventListener('mouseenter', () => square.style.backgroundColor = "aqua") )
}

grid(16)
colourOnHover()

let size;
gridSize.addEventListener('click', function() {makeNewGrid() } )

function makeNewGrid () {
    // remove old grid
    const removeSquare = document.querySelectorAll(".square")
    removeSquare.forEach(square => container.removeChild(square))
    let size = Number(prompt("Enter size of grid: ", "1-100")) 

    // make new grid if size less than 100

    if (size <= 100) {
    console.log(size)
    grid(size)
    let gridWidth = 25 * size
    container.style.width = gridWidth + "px"
    colourOnHover()
    }
    // make default grid for invalid value
    
    else {
    alert ("enter a valid value")
    
    grid(16)
    container.style.width = "400px"
    colourOnHover()
    
    }
}




