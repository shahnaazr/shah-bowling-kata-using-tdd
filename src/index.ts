import { calcScoreForBowlingGame } from "./bowling";
const actualGame = [
  { frame: 1, turn1Score: 8, turn2Score: 1 },
  { frame: 2, turn1Score: 3, turn2Score: 5 },
  { frame: 3, turn1Score: 1, turn2Score: 4 },
  { frame: 4, turn1Score: 7, turn2Score: 2 },
  { frame: 5, turn1Score: 2, turn2Score: 5 },
  { frame: 6, turn1Score: 2, turn2Score: 1 },
  { frame: 7, turn1Score: 4, turn2Score: 5 },
  { frame: 8, turn1Score: 6, turn2Score: 3 },
  { frame: 9, turn1Score: 2, turn2Score: 6 },
  { frame: 10, turn1Score: 2, turn2Score: 2 },
];
console.log(calcScoreForBowlingGame(actualGame));
