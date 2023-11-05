import { Frame } from "./Frame";
export const calcScoreForBowlingGame = (game: Array<Frame>): number => {
  let totalScore = 0;
  for (let index = 0; index < 10; index++) {
    if (game[index].turn1Score === 10) {
      totalScore =
        totalScore +
        game[index].turn1Score +
        game[index + 1].turn1Score +
        game[index + 1].turn2Score;
    } else if (game[index].turn1Score + game[index].turn2Score === 10) {
      totalScore =
        totalScore +
        game[index].turn1Score +
        game[index].turn2Score +
        game[index + 1].turn1Score;
    } else {
      totalScore = totalScore + game[index].turn1Score + game[index].turn2Score;
    }
  }

  return totalScore;
};
