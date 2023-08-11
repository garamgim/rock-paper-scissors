// EventListner for Buttons

let buttons = document.querySelectorAll('button');

function clicked(e) {
    game(e.target.innerHTML);
}

buttons.forEach(button => button.addEventListener('click', clicked));

// Game Logic

function playRound(player, computer) {
    player = player.toLowerCase();

    switch (true) {

        case (player == computer):
            return "DRAW!";
            break;

        case (player == "scissors" && computer == "paper"):
        case (player == "paper" && computer == "rock"):
        case (player == "rock" && computer == "scissors"):
            return "You Win!";
            break;

        default:
            return "You Lose!";
            break;

    }
}

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * 3)];
}

let playerScoreInt = 0;
let computerScoreInt = 0;

let playerScorePrint = document.getElementById('playerscore');
let computerScorePrint = document.getElementById('computerscore');
let centerScoreBoard = document.getElementById('winner');


function game(playerSelection) {

    const rps = ["rock", "paper", "scissors"];

    let computerSelection = getComputerChoice(rps);
    let result = playRound(playerSelection, computerSelection);

    switch (true) {

        case (playerScoreInt < 4 && computerScoreInt < 4):

            if (result == "You Win!") {
                playerScoreInt++;
                playerScorePrint.innerHTML = playerScoreInt;
            } else if (result == "You Lose!") {
                computerScoreInt++;
                computerScorePrint.innerHTML = computerScoreInt;
            }
            centerScoreBoard.innerHTML = result;
            break;


        case (playerScoreInt === 4 && computerScoreInt < 4):

            playerScoreInt++;
            playerScorePrint.innerHTML = playerScoreInt;
            centerScoreBoard.innerHTML = "WINNER: YOU!";
            break;


        case (playerScoreInt < 4 && computerScoreInt === 4):

            computerScoreInt++;
            computerScorePrint.innerHTML = computerScoreInt;
            centerScoreBoard.innerHTML = "WINNER: VILLAIN";
            break;


        default:

            centerScoreBoard.innerHTML = "REFRESH IF YOU WANT TO TRY AGAIN...";
            break;

    }

}



