import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    expect(pointsForWord("test")).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    expect(pointsForWord("tEsT")).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    expect(pointsForWord("")).toBe(0);
  });

  it("returns 0 for non-string input", () => {
    expect(pointsForWord(null)).toBe(0);
    expect(pointsForWord(123)).toBe(0);
    expect(pointsForWord({})).toBe(0);
  });

  it("counts only letters, not symbols", () => {
    expect(pointsForWord("t!e@s#t")).toBe(7); // punctuation treated as consonants
  });
});
