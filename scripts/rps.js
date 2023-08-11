const buttons = document.querySelectorAll('.choice');
let playerDecision;
let cpuDecision;

let playerWins = 0;
let cpuWins = 0;
let ties = 0;

let resultContainer = document.querySelector('.reset-container');
resultContainer.style.display = 'none';



function getCPUDecision() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function addEventsToButtons(buttons) {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerDecision = button.classList[1];
            cpuDecision = getCPUDecision();
            playRound(playerDecision,cpuDecision);
        })
    })
}

function endGame() {
    const choiceContainer = document.getElementsByClassName('choice-container');
    choiceContainer.item(0).style.display = 'none';
    resultContainer.style.display = 'block';
    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
    updateScore('reset');
    resultContainer.style.display = 'none';
}

function updateScore(gameResult) {
    if (gameResult.includes('player')) {
        playerWins++;
    } else if (gameResult.includes('cpu')) {
        cpuWins++;
    } else if (gameResult.includes('reset')) {
        playerWins = cpuWins = ties = 0;
    } else {
        ties++;
    }

    const playerResult = document.querySelector('.player-wins');
    playerResult.textContent = `Player Wins: ${playerWins}`;
    const tieResult = document.querySelector('.ties');
    tieResult.textContent = `Ties: ${ties}`;
    const cpuResult = document.querySelector('.cpu-wins');
    cpuResult.textContent = `CPU Wins: ${cpuWins}`;
}

function playRound(playerDecision, cpuDecision) {
    let gameDecision =  (playerDecision + cpuDecision).toLowerCase().trim();
    console.log(playerDecision+cpuDecision);

    const playerWinConditions = ["rockscissor", "scissorpaper", "paperrock"];

    

    if (playerDecision == cpuDecision) {
        updateScore('tie');
    } else if (playerWinConditions.includes(gameDecision)) {
        updateScore('player');
    } else {
        updateScore('cpu');
    }

    checkFiveWins();
}

function declareVictor(victor) {
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result-container');
    const result = document.createElement('div');
    result.classList.add('result');
    if (victor === 'player') {
        result.textContent = `Player wins!`;
        resultDiv.appendChild(result);
        document.body.appendChild(resultDiv);
    } else {
        result.textContent = `CPU wins!`;
        resultDiv.appendChild(result);
        document.body.appendChild(resultDiv);
    }

    endGame();
}

function checkFiveWins() {
    if (playerWins == 5) {
        declareVictor('player');
    } else if (cpuWins == 5) {
        declareVictor('cpu');
    }
}


addEventsToButtons(buttons);
