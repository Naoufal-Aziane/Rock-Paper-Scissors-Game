// Create the UI variables and select them from the dom

const roundNumber = document.querySelector('.round-number');
const score = document.querySelector('.score');
const roundWinner = document.querySelector('.round-winner');
const weapons = document.querySelectorAll('.weapons > *');
const winnerText = document.querySelector('.winner h1');
const playAgainBtn = document.querySelector('.winner button');

// The game function
let items = ['rock','paper','scissors'];

function game() {
    
}

weapons.forEach(choice => {
    choice.addEventListener('click',game)
});

function getComputerChoice () {
    return Math.floor(Math.random()*3);  
}

function getPlayerChoice (weapon) {
    return items.indexOf(weapon.className);
}