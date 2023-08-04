

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    player = player.toLowerCase();

    switch (true) {

        case (player == computer):
            console.log("DRAW!");
            break;

        case (player == "scissors" && computer == "paper"):
        case (player == "paper" && computer == "rock"):
        case (player == "rock" && computer == "scissors"):
            console.log("You Won!");
            break;

        default:
            console.log("You Lose!");
            break;

    }
}

function game() {

    const rps = ["rock", "paper", "scissors"];

    for (let round = 0; round < 5;) {
        let playerSelection = prompt("Please type rock or paper or scissors!");
        let computerSelection = getComputerChoice(rps);
        playRound(playerSelection, computerSelection);
        round++;
    }

}

game();