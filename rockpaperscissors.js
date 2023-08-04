

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    player = player.toLowerCase();

    switch (true) {

        case (player == computer):
            return "DRAW!";
            break;

        case (player == "scissors" && computer == "paper"):
        case (player == "paper" && computer == "rock"):
        case (player == "rock" && computer == "scissors"):
            return "You Won!";
            break;

        default:
            return "You Lose!";
            break;

    }
}

function game() {

    const rps = ["rock", "paper", "scissors"];

    let score = 0;

    for (let round = 0; round < 5;) {

        console.log(`Round ${round + 1} / 5!`);

        let playerSelection = prompt("Please type rock or paper or scissors!: ");
        let computerSelection = getComputerChoice(rps);
        let result = playRound(playerSelection, computerSelection);

        if (result == "You Won!") {
            score++;
        }

        console.log(result)
        console.log(`Score: ${score}`);

        if (round == 4) {
            console.log("The End");
        }

        round++;
    }

}

game();

