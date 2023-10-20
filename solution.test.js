const solution = require("./solution");

describe("Testing the function solution", () => {
  const testCases = [
    // Test case 1
    { input: "Ada was a pioneer in programming and algorithms.", expected: 4 },
    // Test case 2
    {
      input:
        "Java is a popular programming language in the area of web development.",
      expected: 4,
    },
    // Test case 3
    {
      input: "Data structures such as arrays and linked-lists are essential.",
      expected: 5,
    },
    // Test case 4
    {
      input:
        "Lambda calculus provides a theoretical foundation for functional programming.",
      expected: 2,
    },
    // Test case 5
    {
      input:
        "Sasha often wondered about the potential of artificial intelligence in the area of medical research.",
      expected: 5,
    },
    // Test case 6
    {
      input: "In the arena of software design, a proper architecture is vital.",
      expected: 4,
    },
    // Test case 7
    {
      input: "Managing relational systems can be quite intricate.",
      expected: 0,
    },
    // Test case 8
    {
      input:
        "The coding gala was a celebration of algorithms and programming artistry.",
      expected: 5,
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
