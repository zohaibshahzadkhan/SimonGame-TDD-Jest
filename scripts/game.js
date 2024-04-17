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
}

export {
  game,
  newGame
}