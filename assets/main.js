// *Randomly return 1 of 3 choices* //
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}

game()

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie"
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors')) {
        return "you"
    } else {
        return "computer"
    }
}
// console.log(computerSelection)

function game() {
    let you = 0
    let computer = 0
    let tie = 0

    for (let i = 1; i <= 5; i++) {


        const playerSelection = prompt()
        const computerSelection = computerPlay()
        const lowerCasePlayerSelection = playerSelection.toLowerCase()
        // playRound(lowerCasePlayerSelection, computerSelection)
        console.log(`Round ${i}`)
        console.log(`You: ${lowerCasePlayerSelection}, Computer: ${computerSelection}`)
        let play = playRound(lowerCasePlayerSelection, computerSelection)
        console.log(`Round ${i} winner: ${play}`)

        if (play === 'you') {
            you += 1
        } else if (play === 'computer') {
            computer += 1
        } else {
            tie += 1
        }
    }


    console.log(`\nYou won: ${you} time/s`)
    console.log(`Machine won: ${computer} time/s`)
    console.log(`Ties: ${tie}`)

    if (you === computer) {
        console.log("\nIt's a tie")
    } else if (computer > you) {
        console.log("\nThe machine won the match!")
    } else {
        console.log("\nYou won the match!")
    }
}
