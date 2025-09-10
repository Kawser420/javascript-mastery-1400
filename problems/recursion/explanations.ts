export const explanations: Record<string, string> = {
    'factorial-of-number-recursive': `
### 💡 Problem Breakdown
The goal is to calculate the factorial of a number using recursion. A factorial, denoted by \`n!\`, is the product of all positive integers up to \`n\`. For example, \`5! = 5 * 4 * 3 * 2 * 1 = 120\`. A recursive function is one that calls itself to solve a problem.

Every recursive function needs two main parts:
1.  **Base Case**: A simple condition where the function stops calling itself to prevent an infinite loop.
2.  **Recursive Case**: The part where the function calls itself with a smaller or simpler version of the problem.

For factorial, the recursive definition is \`n! = n * (n-1)!\`, and the base case is \`0! = 1\`.

### ⚙️ Solution Walkthrough
The solution directly translates the mathematical definition of factorial into a recursive function.

\`\`\`javascript
function factorial(x) {
    // Base case
    if (x === 0) {
        return 1;
    }
    // Recursive case
    return x * factorial(x - 1);
}
\`\`\`

1.  **Base Case**: \`if (x === 0) { return 1; }\`. This is the stopping condition. When the input number gets down to 0, the function simply returns 1 and the chain of recursive calls starts to resolve.
2.  **Recursive Case**: \`return x * factorial(x - 1);\`. This is where the magic happens. The function calls itself with a decremented number (\`x - 1\`). It multiplies the current number \`x\` by the result of the factorial of the next smaller number.

Let's trace \`factorial(3)\`:
-   \`factorial(3)\` calls \`factorial(2)\` and waits. It will compute \`3 * result of factorial(2)\`.
-   \`factorial(2)\` calls \`factorial(1)\` and waits. It will compute \`2 * result of factorial(1)\`.
-   \`factorial(1)\` calls \`factorial(0)\` and waits. It will compute \`1 * result of factorial(0)\`.
-   \`factorial(0)\` hits the base case and returns \`1\`.
-   The value \`1\` is returned to \`factorial(1)\`, which computes \`1 * 1 = 1\` and returns it.
-   The value \`1\` is returned to \`factorial(2)\`, which computes \`2 * 1 = 2\` and returns it.
-   The value \`2\` is returned to \`factorial(3)\`, which computes \`3 * 2 = 6\` and returns the final answer.

### 📚 Key Concepts
-   **Recursion**: A problem-solving technique where the solution depends on solutions to smaller instances of the same problem.
-   **Base Case**: The condition that terminates the recursion. Without it, you get a stack overflow error.
-   **Recursive Step**: The part of the function where it calls itself.
-   **Call Stack**: The internal mechanism JavaScript uses to keep track of function calls. Each recursive call adds a new "frame" to the stack.
`,
    'fibonacci-sequence-recursive': `
### 💡 Problem Breakdown
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, ...
The task is to find the Nth number in this sequence using a recursive function.

The recursive definition is \`fib(n) = fib(n-1) + fib(n-2)\`. This requires two base cases: \`fib(0) = 0\` and \`fib(1) = 1\`.

### ⚙️ Solution Walkthrough
The solution is a direct implementation of the recursive definition.

\`\`\`javascript
function fib(x) {
    // Base cases
    if (x <= 1) {
        return x;
    }
    // Recursive case
    return fib(x - 1) + fib(x - 2);
}
\`\`\`

1.  **Base Cases**: \`if (x <= 1) { return x; }\`. This handles both base cases. If the input \`x\` is 0, it returns 0. If \`x\` is 1, it returns 1. This is the stopping condition.
2.  **Recursive Case**: \`return fib(x - 1) + fib(x - 2);\`. The function calls itself twice: once for the previous number and once for the number before that. It then adds their results together.

**Important Note on Performance**: While this is a perfect example of recursion, it is extremely inefficient. Calculating \`fib(5)\` involves calculating \`fib(4)\` and \`fib(3)\`. But calculating \`fib(4)\` *also* involves calculating \`fib(3)\`, leading to many redundant calculations. This is a classic example of a problem where an iterative solution or memoization is far more performant.

### 📚 Key Concepts
-   **Recursion**: The function calls itself to solve the problem.
-   **Multiple Base Cases**: Some recursive functions require more than one stopping condition.
-   **Tree Recursion**: When a recursive function makes more than one recursive call in its recursive step, it's sometimes called tree recursion because the call structure branches out like a tree.
-   **Computational Complexity**: A measure of the resources (like time or memory) an algorithm uses. This recursive Fibonacci solution has an exponential time complexity (roughly O(2^n)), which is very slow.
`,
    'sum-array-recursive': `
### 💡 Problem Breakdown
The goal is to calculate the sum of all numbers in an array using recursion instead of a standard loop. The recursive approach involves breaking the problem down: the sum of an array is the first element plus the sum of the rest of the array.

### ⚙️ Solution Walkthrough
The solution defines a recursive function that adds the first element to the result of calling itself with the remainder of the array.

\`\`\`javascript
function sum(array) {
    // Base case
    if (array.length === 0) {
        return 0;
    }
    // Recursive case
    return array[0] + sum(array.slice(1));
}
\`\`\`

1.  **Base Case**: \`if (array.length === 0) { return 0; }\`. The simplest possible case is an empty array. The sum of an empty array is 0. This is our stopping condition.
2.  **Recursive Case**: \`return array[0] + sum(array.slice(1));\`. This line does two things:
    *   It takes the first element of the current array, \`array[0]\`.
    *   It calls the \`sum\` function again, but this time with a smaller version of the array: \`array.slice(1)\`, which is a new array containing all elements *except* the first one.
    *   It adds the first element to the result of summing the rest of the array.

Let's trace \`sum([1, 2, 3])\`:
-   \`sum([1, 2, 3])\` returns \`1 + sum([2, 3])\`.
-   \`sum([2, 3])\` returns \`2 + sum([3])\`.
-   \`sum([3])\` returns \`3 + sum([])\`.
-   \`sum([])\` hits the base case and returns \`0\`.
-   The value \`0\` is returned to the \`sum([3])\` call, which computes \`3 + 0 = 3\`.
-   The value \`3\` is returned to the \`sum([2, 3])\` call, which computes \`2 + 3 = 5\`.
-   The value \`5\` is returned to the original \`sum([1, 2, 3])\` call, which computes \`1 + 5 = 6\`.

### 📚 Key Concepts
-   **Recursion**: Breaking a problem down into smaller, self-similar subproblems.
-   **\`Array.prototype.slice()\`**: A crucial method for this pattern. It returns a shallow copy of a portion of an array into a new array object, which is perfect for creating the "smaller problem" to pass to the next recursive call without modifying the original array.
`,
};