// This function will return a random value of either rock, paper, or scissor



const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const choices = ['rock', 'paper', 'scissor']
let playerScore = 0
let computerScore = 0
const readOut = document.querySelector('#result')
const tally = document.querySelector('#tally')
const winner = document.querySelector('#winner') ;



computerPlay = () =>    {
    // Cycles through the choices array and returns a random choice
    const random = Math.floor(Math.random() * choices.length);
    return (choices[random]);
}  


// Takes two values and compares them and returns a winner based on the ancient rules
function playRound (playerSelection, computerSelection)  {
    computerSelection = computerPlay();
        if (playerScore === 3) {
            return winner.textContent = `After 5 rounds you had ${playerScore} wins, and your opponent had ${computerScore} wins, you have crushed the enemy and stand victorious!`;
         }   else if (computerScore === 3)   {
             return winner.textContent = `After 5 rounds you had ${playerScore} wins, and your opponent had ${computerScore} wins, the machines have won, you have failed the human race.`;
         }
    // checking conditions to see if it's a tie
        else if  
        (playerSelection === 'rock' && computerSelection ==='rock'
    ||   playerSelection === 'paper' && computerSelection ==='paper'
    ||   playerSelection === 'scissor' && computerSelection ==='scissor')            
    {
        return readOut.textContent = 'The computer chose '+computerSelection+', and you chose '+playerSelection+ ', so its a tie!', tally.textContent = `your score is ${playerScore} and your opponents score is ${computerScore}`;
        // checking conditions to see if player wins
    }   else if  
        (playerSelection === 'rock' && computerSelection ==='scissor'
    ||   playerSelection === 'paper' && computerSelection ==='rock'
    ||   playerSelection === 'scissor' && computerSelection ==='paper')            
    {
        return readOut.textContent = 'The computer chose '+computerSelection+', and you chose '+playerSelection+ ', so you win!' , playerScore++, tally.textContent = `your score is ${playerScore} and your opponents score is ${computerScore}`;
        // checking conditions to see if player loses
    }   else if  
        (playerSelection === 'scissor' && computerSelection ==='rock'
    ||   playerSelection === 'rock' && computerSelection ==='paper'
    ||   playerSelection === 'paper' && computerSelection ==='scissor')            
    {
        return readOut.textContent = 'The computer chose '+computerSelection+', and you chose '+playerSelection+ ', so you lose!' , computerScore++, tally.textContent = `your score is ${playerScore} and your opponents score is ${computerScore}`;
        // if none of the above conditions are met an error is returned.
    }   else return readOut.textContent = 'an error occured'

}

b1.addEventListener('click', () => {
    playRound('rock')
})
b2.addEventListener('click', () => {
    playRound('paper')
})
b3.addEventListener('click', () => {
    playRound('scissor')
})

