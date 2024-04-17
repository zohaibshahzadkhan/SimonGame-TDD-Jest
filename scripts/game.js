const game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  choices: ['button1', 'button2', 'button3', 'button4']
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
}

export {
  game,
  newGame,
  addTurn
}