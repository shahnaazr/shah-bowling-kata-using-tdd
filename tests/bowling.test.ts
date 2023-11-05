import { calcScoreForBowlingGame } from "../src/bowling";

describe("test calcScoreForBowlingGame function", () => {
  it("should return total score less than 100 for calcScoreForBowlingGame()", () => {
    //Arrange
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
    const expectedTotalScore = 71;
    //Act and assert
    expect(calcScoreForBowlingGame(actualGame)).toBe(expectedTotalScore);
  });
  it("should return total score for calcScoreForBowlingGame() when there is a spare", () => {
    //Arrange
    let actualGame = [
      { frame: 1, turn1Score: 8, turn2Score: 2 },
      { frame: 2, turn1Score: 3, turn2Score: 5 },
      { frame: 3, turn1Score: 1, turn2Score: 4 },
      { frame: 4, turn1Score: 7, turn2Score: 3 },
      { frame: 5, turn1Score: 2, turn2Score: 5 },
      { frame: 6, turn1Score: 2, turn2Score: 1 },
      { frame: 7, turn1Score: 5, turn2Score: 5 },
      { frame: 8, turn1Score: 6, turn2Score: 3 },
      { frame: 9, turn1Score: 2, turn2Score: 6 },
      { frame: 10, turn1Score: 2, turn2Score: 6 },
    ];
    const expectedTotalScore = 89;
    //Act and assert
    expect(calcScoreForBowlingGame(actualGame)).toBe(expectedTotalScore);
  });
  it("should return total score for calcScoreForBowlingGame() when there is a spike", () => {
    //Arrange
    let actualGame = [
      { frame: 1, turn1Score: 10, turn2Score: 0 },
      { frame: 2, turn1Score: 3, turn2Score: 5 },
      { frame: 3, turn1Score: 1, turn2Score: 4 },
      { frame: 4, turn1Score: 10, turn2Score: 0 },
      { frame: 5, turn1Score: 2, turn2Score: 5 },
      { frame: 6, turn1Score: 2, turn2Score: 1 },
      { frame: 7, turn1Score: 10, turn2Score: 0 },
      { frame: 8, turn1Score: 6, turn2Score: 3 },
      { frame: 9, turn1Score: 2, turn2Score: 6 },
      { frame: 10, turn1Score: 8, turn2Score: 0 },
    ];
    const expectedTotalScore = 102;
    //Act and assert
    expect(calcScoreForBowlingGame(actualGame)).toBe(expectedTotalScore);
  });
  it("should return total score for calcScoreForBowlingGame() when there is a spare during the bonus turn", () => {
    //Arrange
    let actualGame = [
      { frame: 1, turn1Score: 8, turn2Score: 2 },
      { frame: 2, turn1Score: 3, turn2Score: 5 },
      { frame: 3, turn1Score: 1, turn2Score: 4 },
      { frame: 4, turn1Score: 7, turn2Score: 3 },
      { frame: 5, turn1Score: 2, turn2Score: 5 },
      { frame: 6, turn1Score: 2, turn2Score: 1 },
      { frame: 7, turn1Score: 5, turn2Score: 5 },
      { frame: 8, turn1Score: 6, turn2Score: 3 },
      { frame: 9, turn1Score: 2, turn2Score: 6 },
      { frame: 10, turn1Score: 4, turn2Score: 6 },
      { frame: "bonus", turn1Score: 2, turn2Score: 0 },
    ];
    const expectedTotalScore = 93;
    //Act and assert
    expect(calcScoreForBowlingGame(actualGame)).toBe(expectedTotalScore);
  });
  it("should return total score for calcScoreForBowlingGame() when there is a spike during the bonus turn", () => {
    //Arrange
    let actualGame = [
      { frame: 1, turn1Score: 10, turn2Score: 0 },
      { frame: 2, turn1Score: 3, turn2Score: 5 },
      { frame: 3, turn1Score: 1, turn2Score: 4 },
      { frame: 4, turn1Score: 10, turn2Score: 0 },
      { frame: 5, turn1Score: 2, turn2Score: 5 },
      { frame: 6, turn1Score: 2, turn2Score: 1 },
      { frame: 7, turn1Score: 10, turn2Score: 0 },
      { frame: 8, turn1Score: 6, turn2Score: 3 },
      { frame: 9, turn1Score: 2, turn2Score: 6 },
      { frame: 10, turn1Score: 10, turn2Score: 0 },
      { frame: "bonus", turn1Score: 10, turn2Score: 10 },
    ];
    const expectedTotalScore = 124;
    //Act and assert
    expect(calcScoreForBowlingGame(actualGame)).toBe(expectedTotalScore);
  });
});
