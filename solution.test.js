const solution = require("./solution");

describe("Testing the function solution", () => {
  const testCases = [
    // Test case 1
    {
      input: "Chatgpt is a pioneer through programming.",
      expected: 0 + 1 + 0 + 0 + 0,
    },
    // Test case 2
    {
      input: "Dogs frolic with a stream.",
      expected: 1 + 1 + 0 + 0 + 0,
    },
    // Test case 3
    {
      input: "Dogs frolic with a fountain.",
      expected: 1 + 1 + 1 + 0 + 0,
    },
    // Test case 4
    {
      input: "Dogs frolic with a fountain under the bench.",
      expected: 1 + 1 + 1 + 1 + 0,
    },
    // Test case 5
    {
      input: "Dogs play around by the deep ocean",
      expected: 1 + 1 + 1 + 1 + 1,
    },
    // Test case 6
    {
      input: "From the first to the last letter, there lies a hint.",
      expected: 0 + 1 + 0 + 0 + 1,
    },
    //Test case 7
    {
      input: "Programming constructs such as arrays are essential.",
      expected: 0 + 3 + 0 + 0 + 0,
    },
    // Test case 8
    {
      input: "React is a popular programming language in web development.",
      expected: 1 + 1 + 1 + 1 + 0,
    },
  ];

  testCases.forEach((testCase, index) => {
    describe(`Test Case ${index + 1}`, () => {
      test(`Should return ${testCase.expected} for input "${testCase.input}"`, () => {
        expect(solution(testCase.input)).toBe(testCase.expected);
      });
    });
  });
});
