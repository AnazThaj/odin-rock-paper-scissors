function computerPlay() {
    const choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}

const playerSelection = 'rock'
const computerSelection = computerPlay()

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === "paper") {
        return "You win!"
    } else if(playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a tie!"
    } else {
        return "YOU LOSE!!!!!"
    }
}
// console.log(computerSelection)
console.log(`You: ${playerSelection}, Computer: ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection))