// Create the UI variables and select them from the dom

const roundNumber = document.querySelector('.round-number');
const score = document.querySelector('.score');
const roundWinner = document.querySelector('.round-winner');
const weapons = document.querySelectorAll('.weapons > *');
const winnerText = document.querySelector('.winner h1');
const playAgainBtn = document.querySelector('.winner button');

// The game function
let items = ['rock','paper','scissors'];
let roundCount = 1;
let playerScore = 0 , computerScore =0;

function game() {
    roundWinner.textContent = playRound(getComputerChoice(),getPlayerChoice(this));
    gameOver();
    // Insert round number ,the score after every round
    roundNumber.textContent = roundCount;
    score.textContent = `Player Score: ${playerScore}   | Computer Score: ${computerScore}`;
}
function getComputerChoice () {
    return Math.floor(Math.random()*3);  
}

function getPlayerChoice (weapon) {
    return items.indexOf(weapon.className);
}

function playRound (computerChoice,userChoice) {
    roundCount++;

    let winner = (computerChoice - userChoice + 2) % 3;
    
    if (computerChoice === userChoice){
        return `Draw! You both played ${items[computerChoice]}`
    }else if (winner === 0){
        computerScore++
            return `You Lose! ${items[computerChoice]} beats ${items[userChoice]}`
    }else {
        playerScore++
            return `You Win! ${items[userChoice]} beats ${items[computerChoice]}`
    }   
}

function gameOver() {
    if(playerScore === 5 || computerScore === 5){
        weapons.forEach(choice => {
            choice.removeEventListener('click',game)
        });

        if (computerScore > playerScore){
            winnerText.style.color = 'red';
            winnerText.textContent = `Computer wins with ${computerScore} - ${playerScore}`
            playAgainBtn.style.visibility = 'visible';
        }else {
            winnerText.style.color = 'green';
            winnerText.textContent = `You win with ${playerScore} - ${computerScore}`
            playAgainBtn.style.visibility = 'visible';
        }
    }
}

// Add event listners
weapons.forEach(choice => {
    choice.addEventListener('click',game)
});

playAgainBtn.addEventListener('click',() => location.reload());