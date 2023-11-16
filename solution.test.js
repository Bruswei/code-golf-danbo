const solution = require("./solution");

describe("Testing the function solution", () => {
  const testCases = [
    // Test case 1
    {
      input: "Chatgpt is a pioneer through programming.",
      expected: 0 + 2 + 0 + 0 + 0,
    },
    // Test case 2
    {
      input: "Dogs frolic with a stream.",
      expected: 1 + 2 + 0 + 0 + 0,
    },
    // Test case 3
    {
      input: "Dogs frolic with a fountain.",
      expected: 1 + 2 + 1 + 0 + 0,
    },
    // Test case 4
    {
      input: "Dogs frolic with a fountain under the bench.",
      expected: 1 + 2 + 1 + 1 + 0,
    },
    // Test case 5
    {
      input: "Dogs play around by the deep ocean",
      expected: 3 + 1 + 1 + 1 + 1,
    },
    // Test case 6
    {
      input: "From the first to the last letter, there lies a hint.",
      expected: 0 + 2 + 0 + 0 + 1,
    },
    //Test case 7
    {
      input: "Programming constructs such as arrays are essential.",
      expected: 0 + 3 + 0 + 0 + 0,
    },
    // Test case 8
    {
      input: "React is a popular programming language in web development.",
      expected: 1 + 2 + 1 + 1 + 0,
    },
    // Test case 9
    {
      input:
        "Victory in any quest relies not solely on a robust start but equally on a proper finale.",
      expected: 0 + 5 + 4 + 1 + 2,
    },
    // Test case 10
    {
      input:
        "Both the commencement and the conclusion are pivotal in the saga of triumph.",
      expected: 1 + 3 + 2 + 1 + 1,
    },
    // Test case 11
    {
      input: "On a cold, winter morning, hot coffee can be quite comforting.",
      expected: 1 + 2 + 2 + 1 + 1,
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
