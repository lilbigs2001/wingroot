import { DRY } from "@/constants";
import { capitalizeWord, emptyStringError } from "@/utils";

it("capitalizes the first letter of a word", () => {
  expect(capitalizeWord(DRY)).toBe("Dry");
});

it("handles an empty string", () => {
  expect(capitalizeWord("")).toBe(emptyStringError);
});
