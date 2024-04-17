const game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  choices: ['button1', 'button2', 'button3', 'button4'],
  turnNumber: 0
}
const newGame = () => {
  game.score = 0
  game.currentGame = []
  game.playerMoves = []
  showScore()
  addTurn()
}

const showScore = () => {
  document.getElementById("score").innerText = game.score
}

const addTurn = () => {
  game.playerMoves = []
  game.currentGame.push(game.choices[Math.floor(Math.random() * 4)])
  showTurns()
}

const lightsOn = (circleId) => {
  document.getElementById(circleId).classList.add("light")
  setTimeout(() => {
    document.getElementById(circleId).classList.remove("light")  
  }, 4000);
}

const showTurns = () => {
  game.turnNumber = 0
  let turn = setInterval(() => {
    lightsOn(game.currentGame[game.turnNumber])
    game.turnNumber++
    if(turnNumber >= game.currentGame.length){
      clearInterval(turn)
    }
  }, 800);
}

export {
  game,
  newGame,
  addTurn,
  lightsOn,
  showTurns
}