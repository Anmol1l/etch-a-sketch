const container = document.querySelector(".container")
const gridSize = document.querySelector(".gridSize")

function grid (size) {
for(i = 1; i <= size * size; i++) {

    let square = document.createElement("div")
    square.classList = "square";
    square.style.height = (868 / size) -2 + 'px'
    square.style.width = (868 / size) -2 + 'px'
    container.appendChild(square);
}
}

function colourOnHover(color) {

    let allSquares = document.querySelectorAll(".square")
allSquares.forEach(square => square.addEventListener('mouseenter', () => square.style.backgroundColor = color) )

}

grid(16)
colourOnHover("#00ffff")

gridSize.addEventListener('click', function() { makeNewGrid()})

let size;
function makeNewGrid () {
    let rmSquare = document.querySelectorAll(".square")
    rmSquare.forEach(square => square.remove())

    size = Number(prompt("Enter a Number: "))

    if (size >=1 && size <= 100) {
    grid(size)
    colourOnHover("#00ffff")
    }
    else {
        alert("Enter valid number")
        grid(16)
        colourOnHover("#00ffff")
    }
}

let randomColor = document.querySelector(".randomColor")
randomColor.addEventListener('click', function () {randomiseColor() })

let shade = document.querySelector(".shade") 
shade.addEventListener('click', function() {shadeSquares()} )

function getRandomColor() {
    const r = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    return `rgb(${r}, ${g}, ${b})`
}

function randomiseColor () {
    let colorSquares = document.querySelectorAll(".square")
    colorSquares.forEach(square => square.addEventListener('mouseenter', () => square.style.backgroundColor = getRandomColor()))
}
let opacity = 0

function inreaseOpacity() {
    for (i = 0; i<=10; i++) {
        opacity +=0.001
        return opacity;
    }
}

function shadeSquares() {
    let shade = document.querySelectorAll(".square")
    shade.forEach(square => square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = "rgba(0,0,0)"
        square.style.opacity = inreaseOpacity()
    } ))
    
}

function colourOnDemand () {
    let pickColor = document.querySelector("#colorPicker");
pickColor.addEventListener('input', (event) => {
     color = event.target.value;
     let allSquares = document.querySelectorAll(".square")
allSquares.forEach(square => square.addEventListener('mouseenter', () => square.style.backgroundColor = color) )
})
};

let colorWhenHover = document.querySelector("#colorPicker") 
colorWhenHover.addEventListener('click', function() {colourOnDemand()} )

