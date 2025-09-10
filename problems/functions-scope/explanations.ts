
// This file MUST be pure JavaScript. No imports, no types.

// FIX: Cast window to any to attach property in non-module script context.
(window as any).functionsScopeExplanations = {
    'simple-function-return': `
### 💡 Problem Breakdown
This is the most basic form of a function. The goal is to define a reusable block of code that, when called, performs a simple action: returning a specific string of text.

### ⚙️ Solution Walkthrough
The solution uses a standard function declaration.

\`\`\`javascript
function greet() {
    return "Hello, Functions!";
}
greet();
\`\`\`
1.  **\`function greet()\`**: The \`function\` keyword is used to declare a function named \`greet\`.
2.  **\`return "..."\`**: The \`return\` statement specifies the value that the function will output.
3.  **\`greet()\`**: This is the function call. It executes the code inside the \`greet\` function.

### 📚 Key Concepts
-   **Function Declaration**: A traditional way to define a function using the \`function\` keyword.
-   **`return` Statement**: Ends function execution and specifies a value to be returned.
`,
    'arrow-function-syntax': `
### 💡 Problem Breakdown
The goal is to perform a simple calculation using the modern ES6 arrow function syntax. Arrow functions provide a more concise way to write functions.

### ⚙️ Solution Walkthrough
The solution defines and calls a one-line arrow function.

\`\`\`javascript
const square = (n) => n * n;
square(9);
\`\`\`
1.  **\`const square = ...\`**: An arrow function is an expression, so it is assigned to a variable.
2.  **\`(n) => ...\`**: This is the core syntax. \`(n)\` are the parameters, \`=>\` separates them from the body.
3.  **\`n * n\`**: Because it is a single expression and has no curly braces \`{}\`, the result is implicitly returned.

### 📚 Key Concepts
-   **Arrow Function**: A compact alternative to a traditional function expression.
-   **Implicit Return**: A feature of arrow functions where a single-expression body automatically returns its result.
`,
    // Add ALL 50 valid explanations here...
};