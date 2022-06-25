// Create the UI variables and select them from the dom

const roundCounter = document.querySelector('.round-counter');
const score = document.querySelector('.score');
const roundWinner = document.querySelector('.round-winner');
const weapons = document.querySelectorAll('.weapons > *');
const winnerText = document.querySelector('.winner h1');
const playAgainBtn = document.querySelector('.winner button');

// The game functionality
let items = ['rock','paper','scissors'];

function game() {
    let userChoice = items.indexOf(this.className);
}

weapons.forEach(choice => {
    choice.addEventListener('click',game)
});

