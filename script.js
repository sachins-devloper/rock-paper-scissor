// Initial declaration
const randomNumber = Math.random()
let computerMove = '';
let result = '';

// DOM
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissor')
const resultBoard = document.getElementById('result')
const container = document.getElementById('container')


// Rock

// Button funtion
rockBtn.addEventListener('click', () => {
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper'
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissor'
    }

    // Condition check with ComputerMove 
    if (computerMove == 'Rock') {
        result = 'Tie'
    } else if (computerMove == 'Paper') {
        result = 'Win'
    } else if (computerMove == 'Scissor') {
        result = 'Lose'
    }

    // Result
    resultBoard.textContent = `You picked Rock, Computer picked ${computerMove}. You are ${result}`

    // Result-color-change
    if (result == 'Win') {
        resultBoard.style.backgroundColor = 'green'
        resultBoard.style.color = 'antiquewhite'
    } else if (result == 'Tie') {
        resultBoard.style.backgroundColor = 'white'
        resultBoard.style.color = 'rgb(32, 30, 30)'
    } else if (result = 'Lose') {
        resultBoard.style.backgroundColor = 'red'
        resultBoard.style.color = 'antiquewhite'
    }

});




// Paper

// Button funtion
paperBtn.addEventListener('click', () => {
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper'
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissor'
    }

    // Condition check with ComputerMove
    if (computerMove == 'Paper') {
        result = 'Tie'
    } else if (computerMove == 'Scissor') {
        result = 'Win'
    } else if (computerMove == 'Rock') {
        result = 'Win'
    }

    // Result
    resultBoard.textContent = `You picked  Paper, Computer picked ${computerMove}. You are ${result}`

    // Result-color-change
    if (result == 'Win') {
        resultBoard.style.backgroundColor = 'green'
        resultBoard.style.color = 'antiquewhite'
    } else if (result == 'Tie') {
        resultBoard.style.backgroundColor = 'white'
        resultBoard.style.color = 'rgb(32, 30, 30)'
    } else if (result = 'Lose') {
        resultBoard.style.backgroundColor = 'red'
        resultBoard.style.color = 'antiquewhite'
    }

});




// Scissor

// Button funtion
scissorBtn.addEventListener('click', () => {
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper'
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissor'
    }

    // Condition check with ComputerMove
    if (computerMove == 'Scissor') {
        result = 'Tie'
    } else if (computerMove == 'Rock') {
        result = 'Lose'
    } else if (computerMove == 'Paper') {
        result = 'Win'
    }

    // Result
    resultBoard.textContent = `You picked  Scissor, Computer picked ${computerMove}. You are ${result}`

    // Result-color-change
    if (result == 'Win') {
        resultBoard.style.backgroundColor = 'green'
        resultBoard.style.color = 'antiquewhite'
    } else if (result == 'Tie') {
        resultBoard.style.backgroundColor = 'white'
        resultBoard.style.color = 'rgb(32, 30, 30)'
    } else if (result = 'Lose') {
        resultBoard.style.backgroundColor = 'red'
        resultBoard.style.color = 'antiquewhite'
    }

});
