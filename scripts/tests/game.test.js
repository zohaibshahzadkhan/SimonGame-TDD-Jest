/**
 * @jest-environment jsdom
 */

import fs from "fs";
import { game } from "../game.js";

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