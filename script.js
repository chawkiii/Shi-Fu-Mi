const scoreDisplay = document.querySelector('.js-score');
let scoreTable = JSON.parse(localStorage.getItem('score')) || 
{
  win: 0,
  lose: 0,
  tie: 0
};

function cpuChoice() {
  const randomNumber = Math.random();
  let computerMove = ``;

  randomNumber >= 0 && randomNumber < 1/3 ?
    computerMove = `shi`:
      randomNumber >= 1/3 && randomNumber < 2/3 ?
        computerMove =`fu`: computerMove =`mi`;
  return computerMove   
}

function playGame (playerMove) {
  let computerMove = cpuChoice();
  let result = ``;
  
  playerMove === 'shi'?
    (computerMove === 'shi'? result='Tie.':
    computerMove==='fu'? result='You Lose':result = 'You Win'):
  playerMove === 'fu'?
    (computerMove === 'shi'? result = 'You Win':
    computerMove==='fu'?result = 'Tie.': result='You Lose'):
  
    (computerMove === 'shi' ? result = 'You Lose':
    computerMove==='fu'? result = 'You Win' : result = 'Tie');
  
  result==='You Win'? scoreTable.win ++ :  
    result==='You Lose'? scoreTable.lose ++ : scoreTable.tie ++;

  localStorage.setItem('score' , JSON.stringify(scoreTable));
  
  scoreDisplay.innerHTML = `${scoreTable.win} Win.
  ${scoreTable.lose} Lose.
  ${scoreTable.tie} Tie.`;
}

function resetGame() {
  scoreTable = {
    win: 0,
    lose: 0,
    tie: 0
  };
  localStorage.removeItem('score');
  scoreDisplay.innerHTML = `${scoreTable.win} Win.
  ${scoreTable.lose} Lose.
  ${scoreTable.tie} Tie.`;
}



