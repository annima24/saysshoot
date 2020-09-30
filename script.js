// This function will return a random value of either Rock, Paper, or Scissor

const choices = ['Rock', 'Paper', 'Scissor']

computerPlay = () =>    {
    // Cycles through the choices array and returns a random choice
    const random = Math.floor(Math.random() * choices.length);
    return (choices[random]);
    
}  
// Takes two values and compares them and returns a winner based on the ancient rules
const playRound = (playerSelection, computerSelection) =>   {
    if  (playerSelection === 'Rock' && computerSelection ==='Rock'
    ||   playerSelection === 'Paper' && computerSelection ==='Paper'
    ||   playerSelection === 'Scissor' && computerSelection ==='Scissor')            
    {
        return ('its a tie');
    }   else if  
        (playerSelection === 'Rock' && computerSelection ==='Scissor'
    ||   playerSelection === 'Paper' && computerSelection ==='Rock'
    ||   playerSelection === 'Scissor' && computerSelection ==='Paper')            
    {
        return ('You Win');
    }   else  
        (playerSelection === 'Scissor' && computerSelection ==='Rock'
    ||   playerSelection === 'Rock' && computerSelection ==='Paper'
    ||   playerSelection === 'Paper' && computerSelection ==='Scissor')            
    {
    return ('You Lose');
};
}


const playerSelection = prompt("Enter selection")
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection),', I chose' ,computerSelection);
