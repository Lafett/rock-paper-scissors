let playerChoice = 'Rock'
const rps = ['Rock','Paper','Scissors']

function computerChoice() {
    return rps[Math.floor(Math.random()*rps.length)];   
}

function game(playerChoice, computerChoice) {

    computerChoice = computerChoice()

    if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || 
    (playerChoice === 'Scissors' && computerChoice === 'Paper') || 
    (playerChoice === 'Paper' && computerChoice === 'Rock') ) {console.log('You won!'); console.log(playerChoice, computerChoice)}
    else {console.log('You lose!')}
}

game(playerChoice, computerChoice)