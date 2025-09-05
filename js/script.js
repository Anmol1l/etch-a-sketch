const container = document.querySelector(".container")
for(i = 1; i <= 16 * 16; i++) {

    let square = document.createElement("div")
    square.classList = "square";
    container.appendChild(square);
}
let allSquares = document.querySelectorAll(".square")
allSquares.forEach(square => square.addEventListener('mouseenter', () => square.style.backgroundColor = "aqua") )

