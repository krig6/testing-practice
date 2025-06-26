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

it("correctly analyzes an array with mixed positive and negative numbers", () => {
  expect(analyzeArray([50, -100, 25, 30, -37])).toStrictEqual({
    average: -6.4,
    min: -100,
    max: 50,
    length: 5
  });
});


it("correctly analyzes an array with repeating decimal average result", () => {
  expect(analyzeArray([7, 11, 13])).toStrictEqual({
    average: 10.33,
    min: 7,
    max: 13,
    length: 3
  });
});

it("correctly analyzes a single-element array", () => {
  expect(analyzeArray([10])).toStrictEqual({
    average: 10,
    min: 10,
    max: 10,
    length: 1
  });
});

it("correctly analyzes an array containing zeros", () => {
  expect(analyzeArray([25, 0, 35, 0])).toStrictEqual({
    average: 15,
    min: 0,
    max: 35,
    length: 4
  });
});
