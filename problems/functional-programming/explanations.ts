
export const explanations: Record<string, string> = {
    'fp-map-double': `
### 💡 Problem Breakdown
The goal is to transform an array of numbers. For each number in the original array, we need to create a new number that is double its value, and collect these new numbers in a new array. This is a classic use case for the \`map\` function, a cornerstone of functional programming.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`Array.prototype.map\` method with a simple "doubler" callback function.

\`\`\`javascript
const numbers = parseNumberArray(arr);
const doubler = (n) => n * 2;
return \`[\${numbers.map(doubler).join(', ')}]\`;
\`\`\`

1.  **Callback Function (\`doubler\`):** A function is defined that knows how to perform the desired transformation on a single element. In this case, it takes a number \`n\` and returns \`n * 2\`.
2.  **\`numbers.map(doubler)\`:** The \`map\` method is called on the input array. It takes our \`doubler\` function as an argument.
3.  **Execution:** \`map\` iterates over every element in the \`numbers\` array. For each element, it calls the \`doubler\` function, passing the element as an argument. It then collects the return value from each of these calls into a **new array**.
4.  **Return Value:** The \`map\` method returns the newly created array of doubled numbers. The original array remains unchanged.

### 📚 Key Concepts
-   **Functional Programming (FP):** A programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.
-   **Higher-Order Function:** A function that either takes another function as an argument, returns a function, or both. \`map\` is a higher-order function because it takes the \`doubler\` function as an argument.
-   **Immutability:** The principle of not changing data in place. \`map\` follows this principle by returning a new array instead of modifying the original one.
`,
    'fp-filter-even': `
### 💡 Problem Breakdown
The task is to select a subset of elements from an array based on a specific condition. We need to go through an array of numbers and create a new array that contains only the numbers that are even. This is the perfect job for the \`filter\` method.

### ⚙️ Solution Walkthrough
The solution uses the \`Array.prototype.filter\` method with a "predicate" function that checks for evenness.

\`\`\`javascript
const numbers = parseNumberArray(arr);
const isEven = (n) => n % 2 === 0;
return \`[\${numbers.filter(isEven).join(', ')}]\`;
\`\`\`

1.  **Predicate Function (\`isEven\`):** A "predicate" is a function that returns a boolean (\`true\` or \`false\`). This function, \`isEven\`, takes a number \`n\` and returns \`true\` if it's even and \`false\` otherwise.
2.  **\`numbers.filter(isEven)\`:** The \`filter\` method is called on the array. It accepts our \`isEven\` predicate function.
3.  **Execution:** \`filter\` iterates through every element in the \`numbers\` array. For each element, it calls the \`isEven\` function. If \`isEven\` returns \`true\`, the element is included in the new array. If it returns \`false\`, the element is skipped.
4.  **Return Value:** \`filter\` returns a new array containing only the elements that passed the predicate's test.

### 📚 Key Concepts
-   **Predicate Function:** A function that takes an input and returns a boolean value, typically used for testing conditions.
-   **\`Array.prototype.filter()\`:** A higher-order function that creates a new array with all elements that pass the test implemented by the provided predicate function.
-   **Declarative Programming:** Describing *what* you want to achieve rather than *how* to achieve it. \`numbers.filter(isEven)\` declares that we want even numbers, without us having to write the loop and \`if\` statement ourselves (which would be imperative).
`,
    'fp-reduce-sum': `
### 💡 Problem Breakdown
The objective is to take an array of numbers and "reduce" it down to a single value, in this case, their sum. While this can be done with a simple loop, the \`reduce\` method provides a powerful functional programming pattern for this kind of aggregation.

### ⚙️ Solution Walkthrough
The solution uses the \`Array.prototype.reduce\` method with a "reducer" function.

\`\`\`javascript
const numbers = parseNumberArray(arr);
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
return numbers.reduce(sumReducer, 0);
\`\`\`

1.  **Reducer Function (\`sumReducer\`):** This function takes two main arguments:
    *   \`accumulator\`: The value resulting from the previous iteration. It's like a running total.
    *   \`currentValue\`: The current element being processed in the array.
    The function's job is to combine the \`accumulator\` and the \`currentValue\` and return the new \`accumulator\` for the next iteration. Here, it simply adds them.
2.  **Initial Value (\`0\`):** The \`reduce\` method takes a second argument, which is the initial value for the \`accumulator\`. For a sum, this is logically 0.
3.  **Execution:**
    *   Iteration 1: \`accumulator\` is 0, \`currentValue\` is 10. Returns 10.
    *   Iteration 2: \`accumulator\` is now 10, \`currentValue\` is 20. Returns 30.
    *   ...and so on, until the end of the array.
4.  **Return Value:** After the final iteration, \`reduce\` returns the final value of the accumulator.

### 📚 Key Concepts
-   **Aggregation**: The process of taking many values and combining them into a single summary value.
-   **\`Array.prototype.reduce()\`**: A higher-order function that executes a user-supplied "reducer" callback function on each element of the array, passing in the return value from the calculation on the preceding element.
`,
    'currying-simple': `
### 💡 Problem Breakdown
Currying is a functional programming technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. Instead of a function \`add(a, b)\`, we want to create a function that works like \`add(a)(b)\`. This allows for creating specialized functions by "partially applying" arguments.

### ⚙️ Solution Walkthrough
The solution uses a nested arrow function to achieve the curried effect.

\`\`\`javascript
const add = (a) => (b) => a + b;
// Calling it:
// By calling add(10), we create a specialized function.
const add10 = add(10); // add10 is now a new function that will always add 10 to its argument.
const result = add10(20); // The result is 30.
\`\`\`

1.  **\`const add = (a) => ...\`**: The outer function \`add\` takes the first argument, \`a\`.
2.  **\`=> (b) => a + b\`**: The outer function does not return a value. Instead, it returns *another function*. This inner function "remembers" the value of \`a\` because of a closure.
3.  **Inner Function**: The returned inner function takes the second argument, \`b\`, and completes the calculation using the remembered \`a\` and the new \`b\`.

This allows for partial application. By calling \`add(10)\`, we create a new, specialized function \`add10\` that will always add 10 to whatever argument it's given.

### 📚 Key Concepts
-   **Currying**: The process of transforming a function with multiple arguments into a sequence of nested functions, each taking a single argument.
-   **Partial Application**: The process of fixing a number of arguments to a function, producing another function of smaller arity (fewer arguments). Currying makes partial application easy.
-   **Closures**: Currying relies heavily on closures. The inner function maintains a closure over the parent function's scope, allowing it to access the parent's arguments (\`a\`) long after the parent function has finished executing.
`,
};
