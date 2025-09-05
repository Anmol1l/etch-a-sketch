const container = document.querySelector(".container")
const gridSize = document.querySelector(".gridSize")

function grid (size) {
for(i = 1; i <= size * size; i++) {

    let square = document.createElement("div")
    square.classList = "square";
    square.style.height = (968 / size) -2 + 'px'
    square.style.width = (968 / size) -2 + 'px'
    container.appendChild(square);
}
}

function colourOnHover() {
let allSquares = document.querySelectorAll(".square")
allSquares.forEach(square => square.addEventListener('mouseenter', () => square.style.backgroundColor = "aqua") )
}

grid(16)
colourOnHover()

gridSize.addEventListener('click', function() { makeNewGrid()})

let size;
function makeNewGrid () {
    let rmSquare = document.querySelectorAll(".square")
    rmSquare.forEach(square => square.remove())

    size = Number(prompt("Enter a Number: "))

    if (size >=1 && size <= 100) {
    grid(size)
    colourOnHover()
    }
    else {
        alert("Enter valid number")
        grid(16)
        colourOnHover()
    }
}




