const gameboard= document.querySelector("#gameboard")
const infoDisplay=document.getElementById("info")


const startCells = [

    "", "", "", "", "", "",  "", "", ""
]

let go = "circle"
infoDisplay.textContent="İlk Yuvarlak Başlar"


function createBoard() {

const cellElements = startCells.map((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square")
    cellElement.id = index
    cellElement.addEventListener("click", addGo)
    gameboard.append(cellElement)
    return cellElement;
  })

}

createBoard()



function addGo(e) {

    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go==="circle" ?"cross" : "circle"
    infoDisplay.textContent =`şimdi sıra ${go} 'da`
    e.target.removeEventListener("click", addGo)
}

