const buttons = document.querySelectorAll('.choice');
let playerDecision;
let cpuDecision;

let playerWins = 0;
let cpuWins = 0;
let ties = 0;




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
    //const resetContainer = document.createElement('div');
    //resetContainer.classList.add('')
}

function resetGame() {

}

function updateScore(gameResult) {
    if (gameResult.includes('player')) {
        console.log(gameResult);
        playerWins++;
        const result = document.querySelector('.player-wins');
        result.textContent = `Player Wins: ${playerWins}`;
    } else if (gameResult.includes('cpu')) {
        cpuWins++;
        const result = document.querySelector('.cpu-wins');
        result.textContent = `CPU Wins: ${cpuWins}`;
    } else {
        ties++;
        const result = document.querySelector('.ties');
        result.textContent = `Ties: ${ties}`;
    }
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
