$(document).ready(function() {
    "use strict";
    var userChoice, computerChoice, outCome;

    function compareUserChoiceAndComputerChoice(userChoice, computerChoice) {
        var result = "";
        /*
            Scissors cuts Paper
            Scissors decapitate Lizard
            Rock crushes Scissors
            Rock crushes Lizard
            Paper covers Rock
            Paper disproves Spock
            Spock smashes Scissors
            Spock vaporizes Rock
            Lizard poisons Spock
            Lizard eats Paper
        */
        if (userChoice === "Rock") {
            if (computerChoice === "Paper") {
                result = "Sorry, you lose. Paper covers Rock.";
            } else if (computerChoice === "Lizard") {
                result = "You win! Rock crushes Lizard.";
            } else if (computerChoice === "Scissors") {
                result = "You win! Rock crushes Scissors.";
            } else if (computerChoice === "Spock") {
                result = "Sorry, you lose. Spock vaporizes Rock.";
            } else if (computerChoice === "Rock") {
                result = "Tie!";
            }
        } else if (userChoice === "Paper") {
            if (computerChoice === "Rock") {
                result = "You win! Paper covers Rock.";
            } else if (computerChoice === "Spock") {
                result = "You win! Paper disproves Spock.";
            } else if (computerChoice === "Lizard") {
                result = "Sorry, you lose. Lizard eats Paper.";
            } else if (computerChoice === "Scissors") {
                result = "Sorry, you lose. Scissors cut Paper.";
            } else if (computerChoice === "Paper") {
                result = "Tie!";
            }
        } else if (userChoice === "Scissors") {
            if (computerChoice === "Spock") {
                result = "Sorry, you lose. Spock smashes Scissors.";
            } else if (computerChoice === "Paper") {
                result = "You win! Scissors cuts Paper.";
            } else if (computerChoice === "Rock") {
                result = "Sorry, you lose. Rock crushes Scissors.";
            } else if (computerChoice === "Lizard") {
                result = "You win! Scissors decapitates Lizard.";
            } else if (computerChoice === "Scissors") {
                result = "Tie!";
            }
        } else if (userChoice === "Lizard") {
            if (computerChoice === "Spock") {
                result = "You win! Lizard poisons Spock.";
            } else if (computerChoice === "Paper") {
                result = "You win! Lizard eats Paper.";
            } else if (computerChoice === "Rock") {
                result = "Sorry, you lose. Rock crushes Lizard.";
            } else if (computerChoice === "Scissors") {
                result = "Sorry, you lose. Scissors decapitates Lizard.";
            } else if (computerChoice === "Lizard") {
                result = "Tie!";
            }
        } else if (userChoice === "Spock") {
            if (computerChoice === "Scissors") {
                result = "You win! Spock smashes Scissors.";
            } else if (computerChoice === "Rock") {
                result = "You win! Spock vaporizes Rock.";
            } else if (computerChoice === "Paper") {
                result = "Sorry, you lose. Paper disproves Spock.";
            } else if (computerChoice === "Lizard") {
                result = "Sorry, you lose. Lizard poisons Spock.";
            } else if (computerChoice === "Spock") {
                result = "Tie!";
            }
        } else {
            result = "Incorrect input.";
        }
        return result;
    }

    function createComputerChoice() {
        var randomNumber, choice;
        randomNumber = Math.floor((Math.random() * 5) + 1);

        switch (randomNumber) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
        case 4:
            choice = "Lizard";
            break;
        case 5:
            choice = "Spock";
            break;
        default:
            choice = "";
            break;
        }

        return choice;
    }
    function updateResults(userChoice, computerChoice) {
        $("#userChoice").val(userChoice);
        $("#computerChoice").val(computerChoice);
    }

    $("#playNow").click(function() {
        $("#askUserChoice").modal('show');

        $("#beginGame").click(function() {
            userChoice = $("#userGameChoice").val();
            computerChoice = createComputerChoice();
            outCome = compareUserChoiceAndComputerChoice(userChoice, computerChoice);

            while (outCome === "Incorrect input.") {
                userChoice = prompt("Please enter a correct input. Rock, Paper, Scissors, Lizard, or Spock?");
                computerChoice = createComputerChoice();
                outCome = compareUserChoiceAndComputerChoice(userChoice, computerChoice);
            }
            updateResults(userChoice, computerChoice);
            $("#askUserChoice").modal('hide');

            $("#showResultLabel").text(outCome);
            $("#theResult").text(outCome);
            $("#showResult").modal('show');
        });
    })
});
