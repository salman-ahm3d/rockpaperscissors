const buttons = document.querySelectorAll('.choice');
let playerDecision;
let cpuDecision;



function getCPUDecision() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function addEventsToButtons(buttons) {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerDecision = button.classList[1];
        })
    })
}

function game(playerDecision, cpuDecision) {
    
}


addEventsToButtons(buttons);
