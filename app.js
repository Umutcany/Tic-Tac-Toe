const gameboard= document.querySelector("#gameboard")
const infoDisplay=document.getElementById("info")


const startCells = [

    "", "", "", "", "", "",  "", "", ""
]


function createBoard() {

const cellElements = startCells.map((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square")
    return cellElement;
  })

}
  