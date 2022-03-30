const board = document.querySelector('#board')
const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6', '#74bdcb']
const clearBtn = document.getElementById("clearBtn")
const whiteColorBtn = document.getElementById('white');
const randomBtn = document.getElementById('random')

function grid() {
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    board.appendChild(square)
}
}

function hover() {
    let boardSquares = document.querySelectorAll('div.square');
    boardSquares.forEach(square => {
        square.addEventListener('mouseenter', function() {
            square.style.backgroundColor = '#ffffff'
            square.style.boxShadow = '0 0 10px #ffffff'
        })
    })
}

function setColor() {
    let squareGrid = document.querySelectorAll('div.square')
    squareGrid.forEach(square => {
        square.addEventListener('mouseenter', function() {
            const color = randomColor()
            square.style.backgroundColor = color
            square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        })
    })
    
}


function removeColor() {
    let squareGrid = document.querySelectorAll('div.square')
    squareGrid.forEach(square => {
        square.style.backgroundColor = '#0a0a0a73'
        square.style.boxShadow = '0 0 2px #000'
    })
    
}

function randomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function newBoard() {
    do{
        boardLength = parseInt(prompt('What board size you want? Choose number between 2 and 100', 10));
    }while(isNaN(boardLength) || boardLength < 2 || boardLength > 100)
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
    let max = boardLength * boardLength;
    for(let i = 0; i < max; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        
        board.style.gridTemplateRows = `repeat(${boardLength}, 1fr)`;
        board.style.gridTemplateColumns = `repeat(${boardLength}, 1fr)`;
        board.appendChild(square)

    }
    hover()
}

grid()
hover()

randomBtn.addEventListener('click', setColor)
clearBtn.addEventListener('click', removeColor)
/*clearBtn.addEventListener('click', newBoard)*/
whiteColorBtn.addEventListener('click', hover)