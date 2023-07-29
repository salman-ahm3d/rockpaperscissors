function playRound(playerDecision, cpuDecision) {
    gameDecision =  (playerDecision + cpuDecision).toLowerCase().trim();


    const playerWins = ["rockscissor", "scissorpaper", "paperrock"];

    

    if (playerDecision == cpuDecision) {
        console.log("Tie!");
        alert("Tie!");
    } else if (playerWins.includes(gameDecision)) {
        console.log("Player wins!");
        alert("Player wins!");
    } else {
        console.log("CPU Wins!");
        alert("CPU Wins!");
    }
}

playRound("paper","paper");