const container = document.querySelector(".container")
let square = document.createElement("div")
square.classList = "square";

for(i = 1; i <= 16 * 16; i++) {
    container.appendChild(square.cloneNode(true));
}
