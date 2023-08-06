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
}


addEventsToButtons(buttons);
