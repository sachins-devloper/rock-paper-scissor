// DOM Elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');
const resultBoard = document.getElementById('result');

// Score Object
const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

// Function to Generate Computer Move
function getComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) return 'Rock';
    else if (randomNumber < 2 / 3) return 'Paper';
    else return 'Scissor';
}

// Function to Handle Game Logic
function playGame(playerMove) {
    const computerMove = getComputerMove();
    let result = '';

    if (playerMove === computerMove) {
        result = 'Tie';
        score.ties++;
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissor') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissor' && computerMove === 'Paper')
    ) {
        result = 'Win';
        score.wins++;
    } else {
        result = 'Lose';
        score.losses++;
    }

    // Update Result Board
    resultBoard.textContent = `You picked ${playerMove}, Computer picked ${computerMove}. You ${result}.
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    // Change result board color
    if (result === 'Win') {
        resultBoard.style.backgroundColor = 'green';
        resultBoard.style.color = 'antiquewhite';
    } else if (result === 'Tie') {
        resultBoard.style.backgroundColor = 'white';
        resultBoard.style.color = 'rgb(32, 30, 30)';
    } else {
        resultBoard.style.backgroundColor = 'red';
        resultBoard.style.color = 'antiquewhite';
    }
}

// Event Listeners
rockBtn.addEventListener('click', () => playGame('Rock'));
paperBtn.addEventListener('click', () => playGame('Paper'));
scissorBtn.addEventListener('click', () => playGame('Scissor'));
