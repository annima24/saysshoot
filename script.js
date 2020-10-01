// This function will return a random value of either rock, paper, or scissor

const choices = ['rock', 'paper', 'scissor']
let playerScore = 0
let computerScore = 0

computerPlay = () =>    {
    // Cycles through the choices array and returns a random choice
    const random = Math.floor(Math.random() * choices.length);
    return (choices[random]);
    
}  
// Takes two values and compares them and returns a winner based on the ancient rules
const playRound = (playerSelection, computerSelection) =>   {
    // calls for user to input their selection
    let userChoice= prompt('Choose either Rock, Paper, or Scissor');
    // storing prompt results in a variable
    let userChoiceResults = userChoice
    // formatting to lowercase
    playerSelection =userChoiceResults.toLowerCase();
    // running computerPlay function and storing the result
    computerSelection = computerPlay();
    // checking conditions to see if it's a tie
    if  (playerSelection === 'rock' && computerSelection ==='rock'
    ||   playerSelection === 'paper' && computerSelection ==='paper'
    ||   playerSelection === 'scissor' && computerSelection ==='scissor')            
    {
        return (console.log('The computer chose '+computerSelection+', and you chose '+playerSelection+ ', so its a tie!'));
        // checking conditions to see if player wins
    }   else if  
        (playerSelection === 'rock' && computerSelection ==='scissor'
    ||   playerSelection === 'paper' && computerSelection ==='rock'
    ||   playerSelection === 'scissor' && computerSelection ==='paper')            
    {
        return (console.log('The computer chose '+computerSelection+', and you chose '+playerSelection+ ', so you win!'), playerScore++);
        // checking conditions to see if player loses
    }   else if  
        (playerSelection === 'scissor' && computerSelection ==='rock'
    ||   playerSelection === 'rock' && computerSelection ==='paper'
    ||   playerSelection === 'paper' && computerSelection ==='scissor')            
    {
    return (console.log('The computer chose '+computerSelection+', and you chose '+playerSelection+ ', so you lose!'), computerScore++);
}   else return (console.log('an error occured'))
}
// game function which takes two paramaters, and after 5 rounds returns the winner
const game = () =>  {
    playRound('', computerPlay)
    playRound('', computerPlay)
    playRound('', computerPlay)
    playRound('', computerPlay)
    playRound('', computerPlay)
  if (playerScore>computerScore)  {
    return (`After 5 rounds you had ${playerScore} wins, and your opponent had ${computerScore} you have crushed the enemy and stand victorious!`)
}   else if (playerScore<computerScore) {
    return (`After 5 rounds you had ${playerScore} wins, and your opponent had ${computerScore} wins, the machines have won, you have failed the human race.`)
}   else return (`After 5 rounds you had ${playerScore} wins, and your opponent had ${computerScore} wins, it's a tie!`)
}


console.log(game());

