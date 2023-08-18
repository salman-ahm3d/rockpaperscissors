let playerWins = 0;
let cpuWins = 0;

let playerDecision;
let cpuDecision;


const playerButtons = document.querySelectorAll(".player-box .choice-container button");
const resetButton = document.querySelector(".reset-btn");
const playerResults = document.querySelector(".player-wins");
const cpuResults = document.querySelector(".cpu-wins");
const result = document.querySelector(".result-box");
const playerAnimation = document.querySelector(".player-box .animation-box .animation-image");
const cpuAnimation = document.querySelector(".cpu-box .animation-box .animation-image");





function addEventListenerToResetButton() {
    resetButton.addEventListener("click",resetGame);
}


function getCPUDecision() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function removeEventListenerFromPlayerButtons() {
    playerButtons.forEach((button) => {
        button.removeEventListener("click",makePlayerButtonsClickable);
    })
}

function resetGame() {
    playerWins = 0;
    cpuWins = 0;
    playerResults.textContent = `Player wins: ${playerWins}`;
    cpuResults.textContent = `CPU wins: ${cpuWins}`;
    result.textContent = `No one`;
    enablePlayerButtons();
    playerAnimation.src = "./images/shaking.gif";
    cpuAnimation.src = "./images/shaking.gif";
}


function playRound(playerDecision, cpuDecision) {
    let gameDecision =  (playerDecision + cpuDecision).toLowerCase().trim();

    const playerWinConditions = ["rockscissors", "scissorspaper", "paperrock"];

    

    if (playerDecision == cpuDecision) {
        updateScore('Tie');
    } else if (playerWinConditions.includes(gameDecision)) {
        updateScore('Player');
    } else {
        updateScore('CPU');
    }

    setTimeout(() => {
        playerAnimation.src = "./images/shaking.gif";
        cpuAnimation.src = "./images/shaking.gif";
    }, 500);

    
    checkFiveWins();

}

function checkFiveWins() {
    if (playerWins == 5) {
        declareVictor('player');
    } else if (cpuWins == 5) {
        declareVictor('cpu');
    }
}

function declareVictor(winner) {
    if (winner.includes('player')) {
        result.textContent = 'Player wins!';
    } else {
        result.textContent = 'CPU wins!';
    }
    disablePlayerButtons();

}

function disablePlayerButtons() {
    playerButtons.forEach((button) => {
        button.disabled = true;
    })
}
function enablePlayerButtons() {
    playerButtons.forEach((button) => {
        button.disabled = false;
    })
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
            playerAnimation.src = `../images/${playerDecision}.gif`;
            cpuAnimation.src = `../images/${cpuDecision}.gif`;
            playRound(playerDecision, cpuDecision);
        })
    })
}

function initialize() {
    addEventListenerToResetButton();
    addEventListenerToPlayerButtons();
    resetGame();
}

initialize();


    
