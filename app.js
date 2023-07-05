const gameboard= document.querySelector("#gameboard")
const infoDisplay=document.getElementById("info")
const restartGame = document.getElementById("restartButton")
const startCells = [

    "", "", "", "", "", "",  "", "", ""
]

let go = "circle"
infoDisplay.textContent="İlk Yuvarlak Başlar."





function restartGamee() {

    const restartbutton = restartGame
    restartbutton.addEventListener("click", () => {
        window.location.reload()
    })
    gameboard.appendChild(restartGamee);

}


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
restartGamee()

function addGo(e) {

    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go==="circle" ?"cross" : "circle"
    infoDisplay.textContent =`şimdi sıra ${go} 'da`
    e.target.removeEventListener("click", addGo)
    checkScore()
}

function checkScore() {

    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [

        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]

    ]

    winningCombos.forEach(array => {

        const circleWins=array.every(cell => 
            allSquares[cell].firstChild?.classList.contains("circle"))

            if (circleWins) {
                const restartbutton = restartGame
                restartbutton.classList.remove("hidden")
                infoDisplay.textContent="Yuvarlak Kazandı!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
        
        })

        winningCombos.forEach(array => {

            const crossWins=array.every(cell => 
                allSquares[cell].firstChild?.classList.contains("cross"))
    
                if (crossWins) {
                    const restartbutton = restartGame
                    restartbutton.classList.remove("hidden")
                    infoDisplay.textContent="Çarpı Kazandı!"
                    allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                    return

                }
            
            })
            
       
}
