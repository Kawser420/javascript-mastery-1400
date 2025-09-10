


export const explanations: Record<string, string> = {
    'error-handling-try-catch': `
### 💡 Problem Breakdown
Sometimes, code can fail for reasons you can anticipate. For example, trying to parse a malformed JSON string will throw an error and crash a program if not handled. The goal is to use a \`try...catch\` block to "catch" this expected error and handle it gracefully instead of letting it stop execution.

### ⚙️ Solution Walkthrough
The solution wraps the potentially problematic code in a \`try\` block and provides an error handler in the \`catch\` block.

\`\`\`javascript
// try {
//     // Code that might throw an error
//     JSON.parse("some invalid json"); 
//     console.log("JSON is valid!");
// } catch(e) {
//     // Code that runs ONLY if an error was thrown in the try block
//     const error = e as Error;
//     // FIX: Escape template literal to prevent parsing errors.
//     console.log(\`Caught an error: \\\${error.message}\`);
// }
\`\`\`

1.  **\`try { ... }\`**: The code inside the \`try\` block is executed first. If it runs without any errors, the \`catch\` block is completely ignored.
2.  **The \`JSON.parse()\` call**: This is the line that can fail. If the string is not valid JSON, this function will \`throw\` a \`SyntaxError\`.
3.  **\`catch(e) { ... }\`**: When an error is thrown in the \`try\` block, the program's execution immediately jumps to the corresponding \`catch\` block.
4.  **The \`e\` (Error Object)**: The \`catch\` block receives the error object that was thrown (conventionally named \`e\` or \`error\`). This object contains useful information, most notably the \`message\` property, which describes the error.
5.  **Graceful Handling**: Instead of crashing, our code now catches the error and returns a helpful message, allowing the program to continue running.

### 📚 Key Concepts
-   **Error Handling**: The process of responding to and recovering from error conditions in your program.
-   **\`try...catch\` statement**: The primary mechanism for synchronous error handling in JavaScript.
-   **\`throw\` statement**: Used to create a user-defined exception. Many built-in JavaScript operations also throw errors when they fail.
`,
    'custom-error': `
### 💡 Problem Breakdown
The task is to enforce a rule in our code: a function must only accept positive numbers. If it receives a negative number, it should signal an error. Instead of just returning a string like "Invalid input", the standard practice is to \`throw\` an \`Error\` object. This makes the error handling more robust and standardized.

### ⚙️ Solution Walkthrough
The solution checks the input and uses the \`throw\` keyword with a new \`Error\` instance if the condition isn't met.

\`\`\`javascript
// function checkPositive(num) {
//     if (num < 0) {
//         throw new Error("Number cannot be negative.");
//     }
//     return "Number is positive!";
// }

// try {
//     const result = checkPositive(-5);
//     console.log(result);
// } catch(e) {
//     const error = e as Error;
//     // FIX: Escape template literal to prevent parsing errors.
//     console.log(\`Caught custom error: \\\${error.message}\`);
// }
\`\`\`

1.  **The \`checkPositive(n)\` function**: This function contains our validation logic.
2.  **The \`if (n < 0)\` check**: We check if the input number violates our rule.
3.  **The \`throw new Error(...)\` statement**: If the number is negative, we create a new instance of the built-in \`Error\` class, passing our custom error message to its constructor. The \`throw\` keyword then halts the function's execution and signals that an error has occurred.
4.  **The \`try...catch\` block**: To use this function safely, we wrap the call to \`checkPositive\` in a \`try...catch\` block. If \`checkPositive\` runs without throwing an error, we get the success message. If it *does* throw our custom error, the \`catch\` block will execute and we can inspect the error message.

### 📚 Key Concepts
-   **\`throw\`**: A statement that signals an exception.
-   **\`Error\` Object**: A built-in JavaScript object type. It's good practice to throw \`Error\` objects (or objects that inherit from \`Error\`) rather than simple strings or numbers, as they capture more information about the error, like a stack trace.
-   **Input Validation**: The process of checking input to ensure it meets certain criteria before processing it.
`,
};