import { analyzeArray } from "../src/analyzeArray";

it("correctly analyzes an array and returns average, min, max, and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})

it("correctly analyzes an array with different numbers", () => {
  expect(analyzeArray([5, 10, 15])).toStrictEqual({
    average: 10,
    min: 5,
    max: 15,
    length: 3
  });
});

it("correctly analyzes an array with negative numbers", () => {
  expect(analyzeArray([-5, -10, -15])).toStrictEqual({
    average: -10,
    min: -15,
    max: -5,
    length: 3
  });
});
