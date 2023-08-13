// EventListner for Buttons

let buttons = document.querySelectorAll('button');

function clicked(e) {
    game(e.target.innerHTML);
}

buttons.forEach(button => button.addEventListener('click', clicked));



// Game 

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


function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * 3)];
}


let playerScoreInt = 0;
let computerScoreInt = 0;

let playerScorePrint = document.getElementById('playerscore');
let computerScorePrint = document.getElementById('computerscore');
let centerScoreBoard = document.getElementById('winner');

let playerImg = document.getElementById('playerprofile');
let computerImg = document.getElementById('computerprofile');


function game(playerSelection) {

    const rps = ["rock", "paper", "scissors"];
    let computerSelection = getComputerChoice(rps);

    changeEmoji(playerSelection, "playerhand");
    changeEmoji(computerSelection, "computerhand");

    let result = playRound(playerSelection, computerSelection);

    switch (true) {

        case (playerScoreInt < 4 && computerScoreInt < 4):

            if (result == "You Win!") {

                playerScoreInt++;
                playerScorePrint.innerHTML = playerScoreInt;
                playerImg.src = "image/playerwin.png";
                computerImg.src = "image/computerlose.png";

            } else if (result == "You Lose!") {

                computerScoreInt++;
                computerScorePrint.innerHTML = computerScoreInt;
                playerImg.src = "image/playerlose.png";
                computerImg.src = "image/computerwin.png";

            } else {

                playerImg.src = "image/playerlose.png";
                computerImg.src = "image/computerlose.png";

            }
            centerScoreBoard.innerHTML = result;
            break;


        case (playerScoreInt === 4 && computerScoreInt < 4):

            if (result == "You Win!") {

                playerScoreInt++;
                playerScorePrint.innerHTML = playerScoreInt;
                playerImg.src = "image/playerwin.png";
                computerImg.src = "image/computerlose.png";
                centerScoreBoard.innerHTML = "WINNER: YOU!";


            } else if (result == "You Lose!") {

                computerScoreInt++;
                computerScorePrint.innerHTML = computerScoreInt;
                playerImg.src = "image/playerlose.png";
                computerImg.src = "image/computerwin.png";
                centerScoreBoard.innerHTML = result;

            } else {

                playerImg.src = "image/playerlose.png";
                computerImg.src = "image/computerlose.png";
                centerScoreBoard.innerHTML = result;

            }

            break;

        case (playerScoreInt < 4 && computerScoreInt === 4):

            if (result == "You Win!") {

                playerScoreInt++;
                playerScorePrint.innerHTML = playerScoreInt;
                playerImg.src = "image/playerwin.png";
                computerImg.src = "image/computerlose.png";
                centerScoreBoard.innerHTML = result;

            } else if (result == "You Lose!") {

                computerScoreInt++;
                computerScorePrint.innerHTML = computerScoreInt;
                playerImg.src = "image/playerlose.png";
                computerImg.src = "image/computerwin.png";
                centerScoreBoard.innerHTML = "WINNER: VILLAIN...";

            } else {

                playerImg.src = "image/playerlose.png";
                computerImg.src = "image/computerlose.png";
                centerScoreBoard.innerHTML = result;

            }

            break;


        case (playerScoreInt === 4 && computerScoreInt === 4):

            if (result == "You Win!") {

                playerScoreInt++;
                playerScorePrint.innerHTML = playerScoreInt;
                playerImg.src = "image/playerwin.png";
                computerImg.src = "image/computerlose.png";
                centerScoreBoard.innerHTML = "WINNER: YOU!";

            } else if (result == "You Lose!") {

                computerScoreInt++;
                computerScorePrint.innerHTML = computerScoreInt;
                playerImg.src = "image/playerlose.png";
                computerImg.src = "image/computerwin.png";
                centerScoreBoard.innerHTML = "WINNER: VILLAIN...";

            } else {

                playerImg.src = "image/playerlose.png";
                computerImg.src = "image/computerlose.png";
                centerScoreBoard.innerHTML = result;

            }


        default:

            centerScoreBoard.innerHTML = "REFRESH IF YOU WANT TO TRY AGAIN...";
            break;

    }

}



