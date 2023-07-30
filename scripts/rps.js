function playRound(playerDecision, cpuDecision) {
    let gameDecision =  (playerDecision + cpuDecision).toLowerCase().trim();


    const playerWinConditions = ["rockscissor", "scissorpaper", "paperrock"];

    

    if (playerDecision == cpuDecision) {
        alert("Tie!");
    } else if (playerWinConditions.includes(gameDecision)) {
        alert("Player wins!");
        playerWins++;
    } else {
        alert("CPU Wins!");
        cpuWins++;
    }
}

function getCPUDecision() {
    let choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerDecision() {
    while (true) {
        let playerDecision = prompt("Enter your choice: (rock/paper/scissor)").toLowerCase();
        if (playerDecision.includes("rock")) {
            return "rock";
        } else if (playerDecision.includes("scissor")) {
            return "scissor";
        } else if (playerDecision.includes("paper")) {
            return "paper";
        } else {
            alert("Invalid choice!");
        }
    }
    
}


function game() {
    let playerDecision = getPlayerDecision();
    let cpuDecision = getCPUDecision();
    playRound(playerDecision, cpuDecision);
}

function main() {
    alert("Rock Paper Scissor");
    while (cpuWins!=5 && playerWins!=5) {
        game();
    }
}

let cpuWins = 0;
let playerWins = 0;


main();
