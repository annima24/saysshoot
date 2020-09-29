// This function will return a random value of either Rock, Paper, or Scissor

const choices = ['Rock', 'Paper', 'Scissor']

computerPlay = () =>    {
    // Cycles through the choices array and returns a random choice
    const random = Math.floor(Math.random() * choices.length);
    return (choices[random]);
    
}  
const playRound = (playerSelection, computerSelection) =>   {
    if  (  playerSelection === 'Rock' && computerSelection ==='Rock'
    || playerSelection === 'Paper' && computerSelection ==='Paper'
    || playerSelection === 'Scissor' && computerSelection ==='Scissor')            
    {
        return (computerSelection, 'its a tie');
    } else return (computerSelection, 'something else')
}

const playerSelection = 'Rock'
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

