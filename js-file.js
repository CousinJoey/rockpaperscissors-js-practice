var choices = [
    "rock",
    "paper",
    "scissors"
]

let playerscore = 0
let computerscore = 0
let announcer = ""
let finalMsg = ""

if (playerscore == 5) {
    updateFinal = "Player wins the best of 5!"
    finalAnn.textContent = updateFinal
} else if (computerscore == 5) {
    updateFinal = "Computer wins the best of 5!"
    finalAnn.textContent = updateFinal
}

const runningScore = document.querySelector('#score');
const runningAnn = document.querySelector('#announcements');
const endAnn = document.querySelector(".final");

const pScore = document.createElement("div");
const gameAnn = document.createElement("div");
const finalAnn = document.createElement("div");

runningScore.classList.add("pScore");
runningAnn.classList.add("gameAnn");
endAnn.classList.add("finalAnn");

pScore.textContent = ("Player Score: " + playerscore + "  /  "  + "Computer Score: " + computerscore);
gameAnn.textContent = announcer
finalAnn.textContent = finalMsg


runningScore.appendChild(pScore);
runningAnn.appendChild(gameAnn);
endAnn.appendChild(finalAnn);

function ComputerChoice(choice) {
    let ComputerChoice = choices[Math.floor(Math.random()*choices.length)]
    computerhand = ComputerChoice
}

const rockbtn = document.querySelector("#rock");

rockbtn.addEventListener("click", rockFunction);



function rockFunction(rockSelection) {
    if (playerscore < 5 && computerscore < 5) {
        rockSelection = "rock"
        ComputerChoice(1)
        updateAnn = "Player Picked: " + rockSelection + ", " + "Computer Picked: " + computerhand
        gameAnn.textContent = updateAnn
        playRound(rockSelection, computerhand)
    } else if ((playerscore == 5) || (computerscore == 5)) {
        updateAnn = "Game has ended, please refresh the page to continue"
        gameAnn.textContent = updateAnn
    } 
}



const paperbtn = document.querySelector("#paper");

paperbtn.addEventListener("click", paperFunction);

function paperFunction(paperSelection) {
    if (playerscore < 5 && computerscore < 5) {
        paperSelection = "paper"
        ComputerChoice(1)
        updateAnn = "Player Picked: " + paperSelection + ", " + "Computer Picked: " + computerhand
        gameAnn.textContent = updateAnn
        playRound(paperSelection, computerhand)
    } else if ((playerscore == 5) || (computerscore == 5)) {
        updateAnn = "Game has ended, please refresh the page to continue"
        gameAnn.textContent = updateAnn
    }
}

const scissorsbtn = document.querySelector("#scissors");

scissorsbtn.addEventListener("click", scissorsFunction);



function scissorsFunction(scissorsSelection) {
    if (playerscore < 5 && computerscore < 5) {
        console.log(playerscore + " " + computerscore)
        scissorsSelection = "scissors"
        ComputerChoice(1)
        updateAnn = "Player Picked: " + scissorsSelection + ", " + "Computer Picked: " + computerhand
        gameAnn.textContent = updateAnn
        playRound(scissorsSelection, computerhand)
    } else if ((playerscore == 5) || (computerscore == 5)) { 
        updateAnn = "Game has ended, please refresh the page to continue"
        gameAnn.textContent = updateAnn
    }
    }


  
function endingAnn(x) {
    if (playerscore < 5 && computerscore < 5) {
        updateSub = "Game is in progress.."
        finalAnn.textContent = updateSub
    } else if (playerscore == 5) {
        updateFinal = "Player wins the best of 5!"
        finalAnn.textContent = updateFinal
    } else if (computerscore == 5) {
        updateFinal = "Computer wins the best of 5!"
        finalAnn.textContent = updateFinal
    }
}



        function playRound(playerhand, computerhand) {
            if ((playerhand == "rock") && (computerhand == "rock")) {
                console.log("tie");
                endingAnn(1)
        }   else if ((playerhand == "rock") && (computerhand == "scissors")) {
                console.log("Player wins this round");
                playerscore += 1
                update = "Player score: " + playerscore + " / " + "Computer Score: " + computerscore
                pScore.textContent = update
                endingAnn(1)
        }   else if ((playerhand == "rock") && (computerhand == "paper")) {
                console.log("Computer wins this round");
                computerscore += 1
                update = "Player score: " + playerscore + " / " + "Computer Score: " + computerscore
                pScore.textContent = update
                endingAnn(1)
        }   else if ((playerhand == "scissors") && (computerhand == "rock")) {
                console.log ("Computer wins this round")
                computerscore += 1
                update = "Player score: " + playerscore + " / " + "Computer Score: " + computerscore
                pScore.textContent = update
                endingAnn(1)
        }   else if ((playerhand == "scissors") && (computerhand == "paper")) {
                console.log ("Player wins this round")
                playerscore += 1
                update = "Player score: " + playerscore + " / " + "Computer Score: " + computerscore
                pScore.textContent = update
                endingAnn(1)
        }   else if ((playerhand == "scissors") && (computerhand == "scissors")) {
                console.log ("tie")
                endingAnn(1)
        }   else if ((playerhand == "paper") && (computerhand == "rock")) {
                console.log ("Player wins this round")
                playerscore += 1
                update = "Player score: " + playerscore + " / " + "Computer Score: " + computerscore
                pScore.textContent = update
                endingAnn(1)
        }   else if ((playerhand == "paper") && (computerhand == "scissors")) {
                console.log ("Computer wins this round")
                computerscore += 1
                update = "Player score: " + playerscore + " / " + "Computer Score: " + computerscore
                pScore.textContent = update
                endingAnn(1)
        }   else if ((playerhand == "paper") && (computerhand == "paper")) {
                console.log ("tie")
                endingAnn(1)
        }
        }