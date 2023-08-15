
// EventListner for Buttons

let buttons = document.querySelectorAll('button');

function clicked(e) {
    game(e.target.innerHTML);
}

buttons.forEach(button => button.addEventListener('click', clicked));




// Function returns game result

function playRound(player, computer) {
    player = player.toLowerCase();

    switch (true) {

        case (player == "scissors" && computer == "paper"):
        case (player == "paper" && computer == "rock"):
        case (player == "rock" && computer == "scissors"):
            return true;
            break;

        case (player == computer):
            return "DRAW!";
            break;

        default:
            return false;
            break;

    }
}




// Function changes big hand emojis

function changeEmoji(str, id) {
    let emoji = document.getElementById(id);

    switch (str.toLowerCase()) {
        case ("rock"):
            emoji.innerHTML = "&#x270A";
            break;
        case ("paper"):
            emoji.innerHTML = "&#x270B";
            break;
        default:
            emoji.innerHTML = "&#x270C";
            break;
    }
}




// Variables, Document objects for Game

let playerScoreInt = 0;
let computerScoreInt = 0;

let playerScorePrint = document.getElementById('playerscore');
let computerScorePrint = document.getElementById('computerscore');
let centerScoreBoard = document.getElementById('winner');

let playerImg = document.getElementById('playerprofile');
let computerImg = document.getElementById('computerprofile');

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * 3)];
}




// Main Game

function game(playerSelection) {

    const rps = ["rock", "paper", "scissors"];
    let computerSelection = getComputerChoice(rps);

    changeEmoji(playerSelection, "playerhand");
    changeEmoji(computerSelection, "computerhand");

    let win = playRound(playerSelection, computerSelection);


    if (playerScoreInt < 5 && computerScoreInt < 5) {

        if (win === true) {
            playerWin();
        } else if (win === false) {
            playerLose();
        } else {
            draw();
        }

    }

    // FINAL GAME

    if (playerScoreInt === 5) {
        centerScoreBoard.innerHTML = "GAME OVER!!! WINNER: YOU";
    } else if (computerScoreInt === 5) {
        centerScoreBoard.innerHTML = "GAME OVER!!! WINNER: VILLAIN";
    }

}





// Functions prints score & result

function playerWin() {
    playerScoreInt++;
    playerScorePrint.innerHTML = playerScoreInt;
    playerImg.src = "image/playerwin.png";
    computerImg.src = "image/computerlose.png";
    centerScoreBoard.innerHTML = "YOU WIN!";
}

function playerLose() {
    computerScoreInt++;
    computerScorePrint.innerHTML = computerScoreInt;
    playerImg.src = "image/playerlose.png";
    computerImg.src = "image/computerwin.png";
    centerScoreBoard.innerHTML = "YOU LOSE!";
}

function draw() {
    playerImg.src = "image/playerlose.png";
    computerImg.src = "image/computerlose.png";
    centerScoreBoard.innerHTML = "DRAW";
}


