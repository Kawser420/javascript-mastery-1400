export const solvers: Record<string, Function> = {
    'big-o-notation': () => {
        const results = [
            "Access by Index (e.g., `arr[5]`): O(1) - Constant Time. The time it takes is independent of the array's size.",
            "Find by Value (e.g., `arr.indexOf(5)`): O(n) - Linear Time. In the worst case, you have to check every single element, so the time is directly proportional to the size (n) of the array."
        ];
        return results.join('\n');
    },
    'unit-test-jest': () => {
        return `// sum.js\nconst sum = (a, b) => a + b;\nmodule.exports = sum;\n\n// sum.test.js\nconst sum = require('./sum');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});`;
    },
};