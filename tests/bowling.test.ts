import { bowling } from "../src/bowling";

describe("test bowling function", () => {
  it("should return nothing for bowling()", () => {
    expect(bowling()).toBe(undefined);
  });
});
