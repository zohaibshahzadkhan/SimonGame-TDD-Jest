/**
 * @jest-environment jsdom
 */

import fs from "fs";
import { game, newGame } from "../game.js";

beforeAll(() => {
  let fileContent = fs.readFileSync("index.html", "utf-8")
  document.open()
  document.write(fileContent)
  document.close()
})

describe("Game object contain correct keys", () => {
  test("score key exists", () => {
    expect("score" in game).toBe(true)
  })
  test("currentGame key exists", () => {
    expect("currentGame" in game).toBe(true)
  })
  test("playerMoves key exists", () => {
    expect("playerMoves" in game).toBe(true)
  })
  test("choices key exists", () => {
    expect("choices" in game).toBe(true)
  })
  test("choices should contain correct id's", () => {
    expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4'])
  })
})

describe("newGame function work correctly", () => {
  beforeAll(() => {
    game.score = 42
    game.currentGame = ["button1", "button2"]
    game.playerMoves = ["button1", "button2"]
    document.getElementById("score").innerText = "42"
    newGame()
  })
  test("should set game score to zero", () => {
    expect(game.score).toEqual(0)
  })
  test("should have one move in currentGame array", () => {
    expect(game.currentGame.length).toBe(1)
  })
  test("should clear playerMoves array", () => {
    expect(game.playerMoves).toEqual([])
  })
  test("should display zero for the element with id of score", () => {
    expect(document.getElementById("score").innerText).toEqual(0)
  })
})