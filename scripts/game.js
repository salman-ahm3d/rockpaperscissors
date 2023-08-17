let playerWins = 0;
let cpuWins = 0;

let playerDecision;
let cpuDecision;


const playerButtons = document.querySelectorAll(".player-box .choice-container button");
const resetButton = document.querySelector(".reset-btn");
const playerResults = document.querySelector(".player-wins");
const cpuResults = document.querySelector(".cpu-wins");
const result = document.querySelector(".result-box");



function addEventListenerToResetButton() {
    resetButton.addEventListener("click",resetGame);
}


function getCPUDecision() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function addHighlighting(button) {
    button.classList.add('selected');
    
}

function removeHighlighting(button) {
    button.classList.remove('selected');
}

function resetGame() {
    playerWins = 0;
    cpuWins = 0;
    playerResults.textContent = `Player wins: ${playerWins}`;
    cpuResults.textContent = `CPU wins: ${cpuWins}`;
    result.textContent = `No one`;
}


function playRound(playerDecision, cpuDecision) {
    let gameDecision =  (playerDecision + cpuDecision).toLowerCase().trim();
    console.log(gameDecision);

    const playerWinConditions = ["rockscissor", "scissorpaper", "paperrock"];

    

    if (playerDecision == cpuDecision) {
        updateScore('Tie');
    } else if (playerWinConditions.includes(gameDecision)) {
        updateScore('Player');
    } else {
        updateScore('CPU');
    }

}

function updateScore(decision) {
    if (decision.includes('Player')) {
        playerWins++;
    } else if (decision.includes('CPU')) {
        cpuWins++;
    }
    result.textContent = decision;
    playerResults.textContent = `Player wins: ${playerWins}`;
    cpuResults.textContent = `CPU wins: ${cpuWins}`;
}

function addEventListenerToPlayerButtons() {
    playerButtons.forEach((button) => {
        button.addEventListener("click", () => {
            playerDecision = button.classList[0];
            cpuDecision = getCPUDecision();
            playRound(playerDecision, cpuDecision);
        })
    })
}

addEventListenerToResetButton();
addEventListenerToPlayerButtons();
    
