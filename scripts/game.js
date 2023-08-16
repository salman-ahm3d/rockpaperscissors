let playerWins = 0;
let cpuWins = 0;

let playerDecision;
let cpuDecision;


const playerButtons = document.querySelector(".player-box .choice-container");
const resetButton = document.querySelector(".reset-btn");
const playerResults = document.querySelector(".player-wins");
const cpuResults = document.querySelector(".cpu-wins");
const result = document.querySelector(".result-box");


function addEventListenerToResetButton() {
    resetButton.addEventListener("click",resetGame);
}

function addEventListenerToPlayerButtons() {
    playerButtons.forEach((button), () => {
        playerDecision = button.classList[0];
    })
}

function resetGame() {
    playerWins = 0;
    cpuWins = 0;
    playerResults.textContent = `Player wins: ${playerWins}`;
    cpuResults.textContent = `CPU wins: ${cpuWins}`;
    result.textContent = `No one`;
}

addEventListenerToResetButton();
    
