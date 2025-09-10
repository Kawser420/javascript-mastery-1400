
export const explanations: Record<string, string> = {
    'big-o-notation': `
### 💡 Problem Breakdown
Big-O notation is a mathematical notation used in computer science to describe the performance or complexity of an algorithm. It specifically describes the worst-case scenario and can be used to characterize an algorithm's execution time (\\\`Time Complexity\\\`) or the space it requires (\\\`Space Complexity\\\`). The goal is to understand how the performance of two common array operations scales as the array gets larger.

### ⚙️ Solution Walkthrough
The solution compares two fundamental operations.

1.  **Access by Index: O(1) - Constant Time**
    *   **Operation**: \\\`myArray[5]\\\` or \\\`myArray[5000]\\\`.
    *   **Explanation**: Arrays are stored in contiguous blocks of memory. To get the element at index 5, the computer can do a simple calculation: \\\`start_memory_address + (5 * element_size)\\\` to jump directly to the correct location. This calculation takes the same amount of time whether the array has 10 elements or 10 million elements.
    *   **Big-O**: We describe this as O(1) because the time is constant and does not depend on \\\`n\\\`, the size of the array.

2.  **Find by Value: O(n) - Linear Time**
    *   **Operation**: \\\`myArray.indexOf(someValue)\\\`.
    *   **Explanation**: To find if a specific value exists in an unsorted array, the computer has no shortcut. In the worst-case scenario, it has to start at the first element (\\\`[0]\\\`) and check every single element one by one until it finds a match or reaches the end of the array.
    *   **Big-O**: We describe this as O(n) because the time taken is directly proportional to the number of elements (\\\`n\\\`) in the array. If the array doubles in size, the worst-case search time also doubles.

### 📚 Key Concepts
-   **Time Complexity**: A way of describing how the runtime of an algorithm grows as the input size grows.
-   **O(1) - Constant Time**: Excellent. The algorithm's runtime does not change with the input size.
-   **O(n) - Linear Time**: Good. The algorithm's runtime grows linearly with the input size.
-   **O(log n) - Logarithmic Time**: Excellent. The runtime grows very slowly (e.g., binary search).
-   **O(n²) - Quadratic Time**: Poor. The runtime grows exponentially. Avoid if possible for large inputs (e.g., a naive bubble sort).
`,
    'unit-test-jest': `
### 💡 Problem Breakdown
Unit testing is the practice of testing small, isolated pieces of code (the "units") to ensure they work as expected. This helps catch bugs early and provides confidence when refactoring code. Jest is a popular JavaScript testing framework. The goal here is to understand the basic structure of a Jest test file for a simple \\\`sum\\\` function.

### ⚙️ Solution Walkthrough
The solution shows two conceptual files: the code to be tested and the test file itself.

**File 1: \`sum.js\` (The Code)**
\`\`\`javascript
const sum = (a, b) => a + b;
module.exports = sum; // Using CommonJS export for the example
\`\`\`
-   This is our simple function, the "unit" we want to test.

**File 2: \`sum.test.js\` (The Test)**
\`\`\`javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
\`\`\`

1.  **Convention**: Jest automatically finds and runs files named \\\`*.test.js\\\` or \\\`*.spec.js\\\`.
2.  **The \`require('./sum')\` call**: We import the function we want to test.
3.  **The \`test(name, fn)\` function**: This is the main Jest function for defining a test case.
    *   **The \`name\` argument**: A string that describes what the test is supposed to do. It should be human-readable.
    *   **The \`fn\` argument**: A function that contains the actual test logic.
4.  **The \`expect(value)\` function**: The \\\`expect\\\` function is the core of every assertion. You wrap the result of your function call (e.g., \\\`sum(1, 2)\\\`) in \\\`expect()\\\`. This returns an "expectation" object.
5.  **The \`.toBe(expectedValue)\` matcher**: This is a "matcher" function. You call matchers on the expectation object to assert something about the value. \\\`.toBe()\\\` uses strict equality (\\\`===\\\`) to check if the result of \\\`sum(1, 2)\\\` is exactly \\\`3\\\`. If it is, the test passes. If not, the test fails.

### 📚 Key Concepts
-   **Unit Test**: A test that verifies the behavior of a small, isolated piece of code.
-   **Test Framework**: A set of tools and rules for writing and running tests (e.g., Jest, Vitest, Mocha).
-   **Assertion**: A statement that a predicate (a true–false statement) is expected to be true at a certain point in a program. In Jest, assertions are made using \\\`expect\\\` and matchers.
-   **Matcher**: Functions that let you validate values in different ways (e.g., \\\`.toBe()\\\`, \\\`.toEqual()\\\`, \\\`.toBeTruthy()\\\`).
`,
};
