export const explanations: Record<string, string> = {
  "fetch-api-data": `
### 💡 Problem Breakdown
The task is to retrieve data from an external source over the network. This is a core part of modern web development. We'll use the browser's built-in \`fetch\` API, which is a modern, promise-based mechanism for making web requests. The function needs to handle the asynchronous nature of this operation—we don't get the data back instantly.

### ⚙️ Solution Walkthrough
The solution uses \`async/await\` syntax to handle the promise returned by \`fetch\`.

\`\`\`javascript
// async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await response.json();
//     // FIX: Escaped template literal
//     return \`Fetched: "\\\${data.title}"\`;
// }
\`\`\`

1.  **\`async () => { ... }\`**: The \`async\` keyword before a function declaration makes it an async function. This allows us to use the \`await\` keyword inside it. Async functions always implicitly return a promise.
2.  **\`await fetch(...)\`**: We call \`fetch\` with the API URL. \`fetch\` returns a promise that resolves to a \`Response\` object. The \`await\` keyword pauses the function's execution until this promise settles (either resolves or rejects). Once resolved, the \`Response\` object is assigned to the \`response\` variable.
3.  **\`await response.json()\`**: The \`Response\` object itself doesn't contain the JSON data directly; it's a representation of the entire HTTP response. We need to call the \`.json()\` method on it, which also returns a promise. We \`await\` this second promise, which resolves with the actual parsed JSON data.
4.  **Return Value**: Once the data is retrieved, the function returns a formatted string containing the title. This string becomes the resolved value of the promise returned by the async function.

### 📚 Key Concepts
-   **Asynchronous Operations**: Actions, like network requests, that don't complete immediately. JavaScript doesn't block and wait for them; it continues executing other code.
-   **Promises**: An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
-   **Fetch API**: A modern browser interface for making network requests.
-   **\`async/await\`**: Syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code, which is often easier to read and reason about.
`,
  "async-await-syntax": `
### 💡 Problem Breakdown
This is a reinforcement of the previous problem, focusing specifically on writing robust asynchronous code with proper error handling. The goal is to use \`async/await\` along with a \`try...catch\` block to gracefully handle potential failures, such as a network error or an invalid URL.

### ⚙️ Solution Walkthrough
The core logic is wrapped in a \`try...catch\` block.

\`\`\`javascript
// async () => {
//     try {
//         const response = await fetch('...');
//         if (!response.ok) throw new Error("Network response was not ok.");
//         const data = await response.json();
//         // FIX: Escaped template literal
//         return \`Fetched with async/await: "\\\${data.title}"\`;
//     } catch (error) {
//         // FIX: Escaped template literal
//         return \`Error: \\\${(error as Error).message}\`;
//     }
// }
\`\`\`

1.  **\`try { ... }\`**: The code that might potentially fail (the "happy path") is placed inside the \`try\` block.
2.  **\`if (!response.ok)\`**: The \`fetch\` promise only rejects on network failures, not on HTTP error statuses like 404 (Not Found) or 500 (Server Error). We must manually check the \`response.ok\` property (which is true for statuses 200-299) and throw an error ourselves if the request was not successful.
3.  **\`catch (error) { ... }\`**: If any promise in the \`try\` block rejects, or if we manually \`throw\` an error, the execution immediately jumps to the \`catch\` block. The \`error\` object contains information about what went wrong.
4.  **Graceful Return**: Instead of crashing, the function catches the error and returns a user-friendly error message.

### 📚 Key Concepts
-   **Error Handling**: The practice of anticipating and responding to errors in a program.
-   **\`try...catch\` Statement**: A fundamental error-handling mechanism in JavaScript. It allows you to test a block of code for errors and execute a separate block of code to handle them.
-   **The \\\`throw\\\` Statement**: Creates a user-defined exception that can be caught by a \\\`try...catch\\\` block.
`,
  "settimeout-callback": `
### 💡 Problem Breakdown
This problem demonstrates one of the most basic asynchronous functions in JavaScript: \`setTimeout\`. The goal is to execute a piece of code, but not immediately—only after a specified amount of time has passed. This illustrates the non-blocking nature of JavaScript.

### ⚙️ Solution Walkthrough
To make \`setTimeout\` (which is callback-based) work nicely with our async problem solver, we wrap it in a Promise.

\`\`\`javascript
// async ({delay}: {delay: number}) => {
//     return new Promise(resolve => 
//         setTimeout(() => 
//             // FIX: Escaped template literal
//             resolve(\`Executed after \\\${delay}ms\`), 
//         delay)
//     );
// }
\`\`\`

1.  **\`new Promise(resolve => ...)\`**: We create a new Promise. The promise constructor takes a function (the "executor") with a \`resolve\` parameter. The \`resolve\` function is what we'll call when our asynchronous operation is complete.
2.  **\`setTimeout(callback, delay)\`**: We call \`setTimeout\`.
    *   **\`delay\`**: The second argument is the time to wait, in milliseconds.
    *   **The \`callback\` argument**: The first argument is the function to execute after the delay.
3.  **\`() => resolve(...)\`**: Our callback function is an arrow function. When the timer fires, this function is executed. Inside it, we call \`resolve()\`, which fulfills our promise and passes the success message as its resolved value.
4.  **\`await\`**: The problem solver can now \`await\` the promise returned by this function, effectively pausing until the timer completes.

### 📚 Key Concepts
-   **\`setTimeout\`**: A Web API that schedules a function to be executed after a specified delay. It is a macrotask.
-   **Callback Functions**: A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
-   **Promisifying**: The pattern of wrapping a callback-based API inside a Promise to make it compatible with modern \`async/await\` syntax.
`,
  "promise-chaining": `
### 💡 Problem Breakdown
The goal is to perform a sequence of asynchronous steps, where each step depends on the result of the previous one. This is a common scenario, for example: 1. Fetch a user ID, 2. Then, use the ID to fetch user details, 3. Then, use user details to fetch their posts. Promise chaining with \`.then()\` is the classic way to handle this.

### ⚙️ Solution Walkthrough
The solution creates a promise and chains two \`.then()\` calls to it.

\`\`\`javascript
// new Promise<number>(res => res(10))
//     .then(res => { 
//         return res * 2; // Returns a promise that resolves to 20
//     })
//     .then(res => { 
//         return res + 5; // Returns a promise that resolves to 25
//     });
\`\`\`

1.  **Initial Promise**: \`new Promise(res => res(10))\` creates a promise that immediately resolves with the value \`10\`.
2.  **First \`.then()\`**: This \`.then()\` is attached to the initial promise. Its callback function receives the resolved value (\`10\`). It computes \`10 * 2\` and returns \`20\`.
3.  **Chaining**: When you \`return\` a value from a \`.then()\` callback, it implicitly returns a *new promise* that resolves with that value.
4.  **Second \`.then()\`**: This \`.then()\` is attached to the promise returned by the *first* \`.then()\`. It receives the resolved value from the first \`.then()\` (\`20\`). It computes \`20 + 5\` and returns \`25\`.
5.  **Final Value**: The final promise in the chain resolves to \`25\`. The \`await\` in the solver waits for this entire chain to complete.

### 📚 Key Concepts
-   **\`Promise.prototype.then()\`**: A method that takes up to two arguments: callback functions for the success and failure cases of the Promise. It returns a new Promise, allowing for chaining.
-   **Promise Chain**: A sequence of \`.then()\` calls that execute in order, passing the resolved value from one step to the next. This is a powerful pattern for managing sequential asynchronous logic.
`,
};
