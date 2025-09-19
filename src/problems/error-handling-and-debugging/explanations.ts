export const explanations: Record<string, string> = {
  "try-catch-basic": `
### 💡 Problem Breakdown
This is the most fundamental error handling mechanism in JavaScript for synchronous code. The \`try...catch\` statement allows you to "try" a block of code that might throw an error. If an error occurs, execution immediately jumps to the \`catch\` block, where you can handle the error gracefully instead of crashing the program.

### ⚙️ Solution Walkthrough
The code attempts to access a property on an undefined variable, which will throw a \`ReferenceError\`. This error is caught in the \`catch\` block.
\`\`\`javascript
try {
  // This line will cause a ReferenceError
  const undefinedVar = undefined.property;
  console.log("This will not run.");
} catch (error) {
  // Execution jumps here when the error occurs
  console.log("Caught an error!");
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
}
\`\`\`
1.  **\`try { ... }\`**: The code inside this block is executed. If it runs without any errors, the \`catch\` block is completely ignored.
2.  **The Error**: An error is thrown inside the \`try\` block.
3.  **\`catch(error) { ... }\`**: The \`catch\` block is executed. It receives an \`error\` object containing information about what went wrong.

### 📚 Key Concepts
-   **Error Handling**: The process of responding to and recovering from error conditions in your program.
-   **Synchronous Errors**: Errors that occur during the normal, line-by-line execution of code.
-   **\`try...catch\` statement**: The primary mechanism for synchronous error handling.
`,
  "json-parse-error": `
### 💡 Problem Breakdown
A common source of runtime errors is parsing data from external sources, like an API. If you try to parse a string that is not valid JSON using \`JSON.parse()\`, it will throw a \`SyntaxError\`. The task is to handle this specific error gracefully.

### ⚙️ Solution Walkthrough
The \`JSON.parse()\` call is wrapped in a \`try...catch\` block.
\`\`\`javascript
const invalidJsonString = '{"name": "John", "age": 30'; // Missing closing brace

try {
  const data = JSON.parse(invalidJsonString);
  console.log("Parsed data:", data);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("Failed to parse JSON:", error.message);
  } else {
    // Handle other potential errors
    throw error;
  }
}
\`\`\`
1.  **Potentially Failing Code**: \`JSON.parse()\` is placed inside the \`try\` block.
2.  **Error Catching**: If the string is invalid, a \`SyntaxError\` is thrown and caught.
3.  **Specific Error Check**: It's good practice to check the type of the caught error using \`instanceof\` to ensure you are handling the error you expect.

### 📚 Key Concepts
-   **Parsing**: Converting a string into a data structure.
-   **\`SyntaxError\`**: A specific type of error thrown for invalid syntax, including malformed JSON.
`,
  "finally-block": `
### 💡 Problem Breakdown
The \`finally\` block is an optional part of the \`try...catch\` statement. The code inside a \`finally\` block is **always** executed after the \`try\` and \`catch\` blocks have completed, regardless of whether an error was thrown or caught. This is extremely useful for cleanup code that must run, such as closing a file or a network connection.

### ⚙️ Solution Walkthrough
A \`finally\` block is added to a \`try...catch\` statement.
\`\`\`javascript
let status = "pending";
try {
  console.log("Entering try block.");
  status = "in-try";
  // throw new Error("An error occurred!"); // Uncomment to test error path
} catch (e) {
  console.log("Entering catch block.");
  status = "in-catch";
} finally {
  // This will always run
  console.log("Entering finally block.");
  status += " in-finally";
}
// status will be "in-try in-finally" (if no error)
// or "in-catch in-finally" (if error)
\`\`\`
### 📚 Key Concepts
-   **\`finally\` Block**: A control flow statement that guarantees the execution of cleanup code.
`,
  "throwing-custom-error": `
### 💡 Problem Breakdown
The task is to enforce a rule in our code: a function must only accept positive numbers. If it receives an invalid input, it should signal an error. The standard practice is to \`throw\` an \`Error\` object. This stops the function's execution and allows a calling function to \`catch\` the specific error.

### ⚙️ Solution Walkthrough
The function checks the input and uses the \`throw\` keyword with a new \`Error\` instance if the condition isn't met.
\`\`\`javascript
function checkPositive(num) {
  if (num < 0) {
    // Create and throw a new error
    throw new Error("Number cannot be negative.");
  }
  return "Number is positive!";
}

try {
  checkPositive(-5);
} catch (e) {
  console.error(e.message); // "Number cannot be negative."
}
\`\`\`
1.  **Validation**: The \`if (num < 0)\` check is our validation logic.
2.  **\`throw new Error(...)\`**: If the input is invalid, we create a new instance of the built-in \`Error\` class and \`throw\` it. This halts the function's execution and signals that an error occurred.
3.  **Catching**: The calling code must use a \`try...catch\` block to handle this potential error.

### 📚 Key Concepts
-   **\`throw\`**: A statement that signals an exception.
-   **\`Error\` Object**: A built-in JavaScript object type. It's good practice to throw \`Error\` objects rather than simple strings, as they capture more information, like a stack trace.
-   **Input Validation**: The process of checking input to ensure it meets certain criteria.
`,
  "creating-custom-error-class": `
### 💡 Problem Breakdown
Creating custom error types by extending the built-in \`Error\` class is a powerful pattern. It allows you to create more specific, descriptive errors that can be caught and handled differently from generic errors, making your error handling logic more organized and robust.

### ⚙️ Solution Walkthrough
A \`ValidationError\` class is created by extending \`Error\`.
\`\`\`javascript
class ValidationError extends Error {
  constructor(message) {
    super(message); // Pass message to the parent Error constructor
    this.name = "ValidationError"; // Set the custom error name
  }
}

try {
  throw new ValidationError("Invalid email address.");
} catch (e) {
  if (e instanceof ValidationError) {
    console.log("Caught a specific validation error:", e.message);
  } else {
    console.log("Caught a generic error.");
  }
}
\`\`\`
1.  **\`extends Error\`**: Sets up the inheritance.
2.  **\`super(message)\`**: It's important to call the parent \`Error\` constructor to properly set up the error message.
3.  **\`this.name\`**: Setting a custom name helps in identifying the error type.
4.  **Specific Catch**: You can now use \`instanceof\` in a \`catch\` block to handle this specific type of error differently from others.

### 📚 Key Concepts
-   **Custom Errors**: A best practice for creating robust and maintainable applications with clear error handling paths.
`,
  "promise-catch-error": `
### 💡 Problem Breakdown
This problem focuses on error handling with Promises. The \`.catch()\` method provides a way to handle any errors that occur in the promise chain, such as a promise being rejected.

### ⚙️ Solution Walkthrough
A promise is created that immediately rejects. The \`.catch()\` method is chained to handle the rejection.
\`\`\`javascript
const failingPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

failingPromise
  .then(result => console.log(result)) // This part is skipped
  .catch(error => console.log("Caught:", error)); // "Caught: Something went wrong!"
\`\`\`
1.  **\`reject(reason)\`**: This is called to indicate the promise has failed. The reason is passed to the \`.catch()\` handler.
2.  **\`.catch(handler)\`**: Schedules a callback to be executed if the promise is rejected.

### 📚 Key Concepts
-   **Promise Error Handling**: Using \`.catch()\` is essential for robust asynchronous code to prevent "unhandled promise rejection" errors.
`,
  "async-await-try-catch": `
### 💡 Problem Breakdown
A key advantage of \`async/await\` is that it allows you to handle errors from asynchronous operations using standard, synchronous \`try...catch\` blocks, which is often cleaner than chaining \`.catch()\` methods.

### ⚙️ Solution Walkthrough
A rejecting promise is awaited inside a \`try\` block. The rejection is caught by the \`catch\` block.
\`\`\`javascript
const failingPromise = () => Promise.reject("Async operation failed");

async function testError() {
  try {
    const result = await failingPromise();
  } catch (error) {
    console.log('Caught the async error:', error);
  }
}
testError();
\`\`\`
1.  **\`await\` Rejection**: When you \`await\` a promise that rejects, it throws an exception at that line.
2.  **\`try...catch\`**: This exception is then caught by the surrounding \`try...catch\` block, just like a synchronous error.

### 📚 Key Concepts
-   **Asynchronous Error Handling**: Using \`try...catch\` with \`async/await\` provides a unified error handling model for both sync and async code.
`,
  "window-onerror-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about global error handling in the browser. You can set up a "last resort" error handler by assigning a function to \`window.onerror\`. This function will be called for any uncaught runtime errors that occur in your scripts.

### ⚙️ Solution Walkthrough
The \`onerror\` handler is assigned a function that receives details about the error.
\`\`\`javascript
window.onerror = function(message, source, lineno, colno, error) {
  console.log('An uncaught error occurred!');
  // In a real application, you would send this data to a logging service.
  // logErrorToServer({ message, source, lineno, error });
  
  // Returning true prevents the browser's default error handling (e.g., logging to console).
  return true;
};

// This would trigger the handler:
undefinedFunction();
\`\`\`
### 📚 Key Concepts
-   **Global Error Handling**: A crucial pattern for application monitoring and logging, allowing you to catch errors that you might have missed with local \`try...catch\` blocks.
`,
  "unhandled-rejection-conceptual": `
### 💡 Problem Breakdown
This is the promise-equivalent of \`window.onerror\`. If a promise is rejected but has no \`.catch()\` handler attached to it, it's considered an "unhandled rejection." You can catch these globally by listening for the \`unhandledrejection\` event on the \`window\` object.

### ⚙️ Solution Walkthrough
An event listener is added to the \`window\`.
\`\`\`javascript
window.addEventListener('unhandledrejection', (event) => {
  // The rejection reason is in event.reason
  console.error('An unhandled promise rejection occurred:', event.reason);

  // You can prevent the default browser logging of the error
  event.preventDefault();
});

// This will trigger the handler:
Promise.reject("This was not handled!");
\`\`\`
### 📚 Key Concepts
-   **Promise Rejection Handling**: A global handler for ensuring no promise rejection goes unnoticed, which is crucial for application stability.
`,
  "error-object-properties": `
### 💡 Problem Breakdown
The \`Error\` object in JavaScript has several standard properties that are very useful for debugging.
- **\`name\`**: A string indicating the type of error (e.g., "ReferenceError", "TypeError", "SyntaxError").
- **\`message\`**: The human-readable string description of the error that you provide.
- **\`stack\`**: A non-standard but widely supported property that contains a string with the stack trace, showing the sequence of function calls that led to the error.

### ⚙️ Solution Walkthrough
An error is created and its properties are inspected inside a \`catch\` block.
\`\`\`javascript
try {
  throw new TypeError("Invalid type provided.");
} catch (e) {
  console.log(e.name);    // "TypeError"
  console.log(e.message); // "Invalid type provided."
  console.log(e.stack);   // A multi-line string with the call stack.
}
\`\`\`
### 📚 Key Concepts
-   **Error Object**: The standard object for representing errors in JavaScript. The \`stack\` property is often the most valuable for debugging.
`,
  "fetch-error-handling-conceptual": `
### 💡 Problem Breakdown
A common pitfall with the \`fetch\` API is that it only rejects its promise on a network failure (e.g., DNS error, no internet connection). It does **not** reject on HTTP error statuses like 404 (Not Found) or 500 (Internal Server Error). You must check for these manually.

### ⚙️ Solution Walkthrough
The \`response.ok\` property is checked to determine if the request was successful.
\`\`\`javascript
async function checkStatus(url) {
  try {
    const response = await fetch(url);
    
    // Check if the status code is in the 200-299 range
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    // ...
  } catch (error) {
    console.error('Fetch failed:', error.message);
  }
}
\`\`\`
1.  **\`response.ok\`**: This is a boolean property that is \`true\` for successful HTTP statuses (200-299).
2.  **Manual \`throw\`**: If \`response.ok\` is false, we must manually \`throw\` an error to trigger our \`catch\` block.

### 📚 Key Concepts
-   **HTTP Status Codes**: Understanding what codes like 200, 404, and 500 mean.
-   **Defensive Programming**: Explicitly checking for error conditions instead of assuming success.
`,
  "console-log-debugging": `
### 💡 Problem Breakdown
This is the simplest and most fundamental debugging technique. By placing \`console.log()\` statements at various points in your code, you can print the values of variables to the browser's developer console and trace the flow of execution.

### ⚙️ Solution Walkthrough
\`console.log\` is used to inspect a variable inside a loop.
\`\`\`javascript
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(\`At index \${i}, total is \${total}, adding \${arr[i]}\`);
    total += arr[i];
  }
  return total;
}
\`\`\`
This allows you to see the state of your program at each step of the iteration.

### 📚 Key Concepts
-   **Debugging**: The process of finding and fixing errors in code.
-   **\`console.log()\`**: The primary tool for "print statement debugging."
`,
  "console-error-warn": `
### 💡 Problem Breakdown
The \`console\` object has methods other than \`.log()\`. \`.error()\` and \`.warn()\` are used to log messages with a higher semantic importance. Browsers typically style these messages differently (e.g., with a red or yellow background and an icon) to make them stand out.

### ⚙️ Solution Walkthrough
The different logging methods are demonstrated.
\`\`\`javascript
console.log("This is an informational message.");
console.warn("This is a warning. Something might be wrong.");
console.error("This is an error. Something has failed.");
\`\`\`
Using the correct logging level makes your console output much easier to scan for important information.

### 📚 Key Concepts
-   **Logging Levels**: A way to categorize the severity of log messages.
`,
  "console-table-debugging": `
### 💡 Problem Breakdown
When you need to inspect an array of objects or an object with multiple properties, \`console.log()\` can produce a cluttered, hard-to-read output. \`console.table()\` is a powerful tool that displays tabular data in a clean, interactive table in the browser console.

### ⚙️ Solution Walkthrough
\`console.table()\` is used to display an array of objects.
\`\`\`javascript
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
console.table(users);
\`\`\`
This will render a table with columns for \`(index)\`, \`name\`, and \`age\`, which can be sorted.

### 📚 Key Concepts
-   **Data Visualization**: \`console.table()\` provides a simple way to visualize structured data for easier debugging.
`,
  "console-group-debugging": `
### 💡 Problem Breakdown
When you have a lot of log output, it can become hard to follow. \`console.group()\` and \`console.groupEnd()\` allow you to create collapsible, indented groups in the console to organize related messages.

### ⚙️ Solution Walkthrough
A group is created to contain logs related to a specific operation.
\`\`\`javascript
console.group("User Processing");
console.log("Fetching user...");
console.log("User data received.");
console.warn("User has no email.");
console.groupEnd();
console.log("Processing finished.");
\`\`\`
This will create a collapsible group named "User Processing" in the console.

### 📚 Key Concepts
-   **Log Organization**: A technique for making complex console output more readable.
`,
  "console-trace-debugging": `
### 💡 Problem Breakdown
Sometimes the problem isn't the value of a variable, but understanding *how* your code got to a certain point. \`console.trace()\` logs a stack trace to the console, showing the full chain of function calls that led to the \`console.trace()\` statement.

### ⚙️ Solution Walkthrough
\`console.trace()\` is called inside a nested function.
\`\`\`javascript
function functionA() {
  functionB();
}
function functionB() {
  console.trace("Where am I?");
}
functionA();
\`\`\`
The console will show that \`console.trace\` was called by \`functionB\`, which was called by \`functionA\`.

### 📚 Key Concepts
-   **Stack Trace**: A report of the active stack frames at a certain point in time during the execution of a program. It's essential for understanding control flow.
`,
  "debugger-statement": `
### 💡 Problem Breakdown
The \`debugger\` statement is a powerful tool that programmatically creates a breakpoint in your code. If the browser's developer tools are open, execution will pause at the \`debugger\` line, allowing you to inspect the entire application state (variables, call stack, etc.) at that exact moment.

### ⚙️ Solution Walkthrough
A \`debugger\` statement is placed inside a function.
\`\`\`javascript
function processData(data) {
  let processed = data * 2;
  
  // If dev tools are open, execution will pause here
  debugger;
  
  return processed;
}
\`\`\`
It's like a breakpoint that you can commit to your source code, which can be useful for debugging specific, hard-to-reproduce scenarios.

### 📚 Key Concepts
-   **Breakpoint**: A deliberate stopping or pausing place in a program, put in place for debugging purposes.
-   **Interactive Debugging**: Using a debugger tool is often much more powerful than \`console.log\` because it allows you to explore the program state interactively.
`,
  "error-cause-property": `
### 💡 Problem Breakdown
The \`cause\` property for \`Error\` objects (ES2022) provides a standard way to chain errors. When you catch a low-level error and throw a new, more specific high-level error, you can attach the original error as the \`cause\`. This provides a complete stack trace and context for debugging.

### ⚙️ Solution Walkthrough
A low-level error is caught and wrapped in a high-level error with a \`cause\`.
\`\`\`javascript
try {
  try {
    // Low-level database error
    throw new Error("Connection timed out");
  } catch (lowLevelError) {
    // Throw a new, more user-friendly error, but chain the original.
    throw new Error("Failed to fetch user data.", { cause: lowLevelError });
  }
} catch (e) {
  console.log(e.message); // "Failed to fetch user data."
  console.log(e.cause.message); // "Connection timed out"
}
\`\`\`
### 📚 Key Concepts
-   **Error Chaining**: A pattern for preserving the full context of an error as it propagates through different layers of an application.
`,
  "promise-all-error-handling": `
### 💡 Problem Breakdown
It's important to understand the "fail-fast" behavior of \`Promise.all\`. If any of the promises passed to it reject, \`Promise.all\` immediately rejects with the reason of the first promise that rejected. It does not wait for the other promises to settle.

### ⚙️ Solution Walkthrough
One promise in the array rejects, causing the entire \`Promise.all\` to reject.
\`\`\`javascript
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failure");

Promise.all([p1, p2])
  .then(values => {
    // This part is never reached
  })
  .catch(error => {
    console.error(error); // "Failure"
  });
\`\`\`
If you need to know the result of every promise, even if some fail, you should use \`Promise.allSettled()\`.

### 📚 Key Concepts
-   **Fail-Fast Behavior**: A characteristic of \`Promise.all()\` where it rejects immediately on the first failure.
`,
  "aggregate-error-conceptual": `
### 💡 Problem Breakdown
\`Promise.any()\` rejects only when *all* of its input promises have rejected. When it does, it rejects with a special \`AggregateError\` object. This error object has an \`.errors\` property which is an array containing all the individual rejection reasons.

### ⚙️ Solution Walkthrough
Two promises are rejected, and the resulting \`AggregateError\` is caught.
\`\`\`javascript
const p1 = Promise.reject("Error 1");
const p2 = Promise.reject("Error 2");

Promise.any([p1, p2])
  .then(val => console.log(val)) // Not called
  .catch(err => {
    console.log(err instanceof AggregateError); // true
    console.log(err.errors); // ["Error 1", "Error 2"]
  });
\`\`\`
### 📚 Key Concepts
-   **\`AggregateError\`**: A special error subclass used by \`Promise.any()\` to collect multiple errors.
`,
  "typeerror-example": `
### 💡 Problem Breakdown
A \`TypeError\` is thrown when an operator or function is applied to a value of an inappropriate type. The most common cases are trying to call something that is not a function, or trying to access properties on \`null\` or \`undefined\`.

### ⚙️ Solution Walkthrough
This example attempts to call a \`null\` value as a function.
\`\`\`javascript
try {
    const myVar = null;
    myVar(); // This is not a function
} catch (e) {
    console.log(e.name); // "TypeError"
    console.log(e.message); // e.g., "myVar is not a function"
}
\`\`\`
### 📚 Key Concepts
-   **\`TypeError\`**: A standard built-in error type for operations performed on incorrect types.
`,
  "rangeerror-example": `
### 💡 Problem Breakdown
A \`RangeError\` is thrown when a value is not in the set or range of allowed values. This often occurs with array operations or number formatting.

### ⚙️ Solution Walkthrough
This example attempts to create an array with an invalid (negative) length.
\`\`\`javascript
try {
    new Array(-1); // Array length cannot be negative
} catch (e) {
    console.log(e.name); // "RangeError"
    console.log(e.message); // e.g., "Invalid array length"
}
\`\`\`
### 📚 Key Concepts
-   **\`RangeError\`**: A standard built-in error type for numeric values that are out of their allowed range.
`,
  "urierror-example": `
### 💡 Problem Breakdown
A \`URIError\` is thrown when a global URI handling function (like \`decodeURIComponent()\`) is used in a way that is not compatible with the URI specification.

### ⚙️ Solution Walkthrough
This example attempts to decode an invalid URI component (a '%' not followed by two hex digits).
\`\`\`javascript
try {
    decodeURIComponent('%'); // Invalid encoding
} catch (e) {
    console.log(e.name); // "URIError"
    console.log(e.message); // e.g., "URI malformed"
}
\`\`\`
### 📚 Key Concepts
-   **\`URIError\`**: A standard built-in error type for errors related to URI handling.
`,
  "internalerror-conceptual": `
### 💡 Problem Breakdown
An \`InternalError\` is an error that occurs internally in the JavaScript engine. It's less common to encounter directly, but the most frequent cause is a stack overflow from excessive recursion.

### ⚙️ Solution Walkthrough
A function calls itself infinitely, which will eventually throw an \`InternalError\`.
\`\`\`javascript
function infiniteRecursion() {
    return infiniteRecursion();
}
try {
    infiniteRecursion();
} catch (e) {
    console.log(e.name); // "InternalError" (in Firefox) or "RangeError" (in Chrome/Node)
    console.log(e.message); // "too much recursion" or "Maximum call stack size exceeded"
}
\`\`\`
**Note**: While Firefox reports this as an \`InternalError\`, other engines like V8 (Chrome, Node.js) report it as a \`RangeError\`. The concept remains the same.

### 📚 Key Concepts
-   **Stack Overflow**: An error that occurs when the call stack grows too large, typically due to infinite or excessively deep recursion.
`,
  "defensive-programming-conceptual": `
### 💡 Problem Breakdown
Defensive programming is a design approach where you write your code to function correctly even when given unexpected or invalid inputs. It's about anticipating problems and building checks and fallbacks to prevent errors.

### ⚙️ Solution Walkthrough
A \`divide\` function checks its arguments before performing the operation.
\`\`\`javascript
function divide(a, b) {
  // Check if inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Both arguments must be numbers.");
  }
  // Check for division by zero
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}
\`\`\`
Instead of letting the JavaScript engine potentially return \`NaN\` or \`Infinity\`, this function provides clear, specific errors for invalid inputs, making it more robust and easier to debug.

### 📚 Key Concepts
-   **Defensive Programming**: A proactive approach to error handling by validating inputs and state.
`,
  "error-boundaries-react-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a feature specific to React. An Error Boundary is a React component that can catch JavaScript errors anywhere in its child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

### ⚙️ Solution Walkthrough
A class component implements \`componentDidCatch\` to become an Error Boundary.
\`\`\`javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
\`\`\`
You would then wrap parts of your application with it: \`<ErrorBoundary><MyComponent /></ErrorBoundary>\`.

### 📚 Key Concepts
-   **Error Boundary**: A React-specific mechanism for gracefully handling rendering errors in components.
`,
  "console-time-debugging": `
### 💡 Problem Breakdown
\`console.time()\` and \`console.timeEnd()\` are simple tools for measuring the duration of a piece of code. You call \`console.time()\` with a label to start a timer, and then call \`console.timeEnd()\` with the same label to stop it and log the elapsed time to the console.

### ⚙️ Solution Walkthrough
A loop's execution time is measured.
\`\`\`javascript
console.time("my-loop");

for (let i = 0; i < 100000; i++) {
  // some work
}

console.timeEnd("my-loop"); // Logs something like "my-loop: 3.45ms"
\`\`\`
### 📚 Key Concepts
-   **Performance Measurement**: A simple way to benchmark small sections of code. For more serious profiling, the browser's Performance tab is more powerful.
`,
  "console-assert-debugging": `
### 💡 Problem Breakdown
\`console.assert()\` is a useful debugging tool. It takes a condition as its first argument, and if that condition is falsy, it logs the subsequent arguments to the console along with a stack trace. If the condition is truthy, it does nothing.

### ⚙️ Solution Walkthrough
An assertion is used to check a variable's value.
\`\`\`javascript
const x = 5;
const y = 10;

console.assert(x > y, "Assertion failed: x is not greater than y");
// This will log the message because x > y is false.
\`\`\`
### 📚 Key Concepts
-   **Assertion**: A statement that a condition is expected to be true at a certain point in a program. Assertions are useful for catching logical errors during development.
`,
  "sourcemaps-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a crucial tool in modern web development. When you deploy a web application, you typically "minify" your JavaScript (remove whitespace, shorten variable names) and "transpile" it (convert modern JS to older JS for compatibility). The resulting code is unreadable. A **source map** is a special file that creates a mapping between the transformed code and your original source code.

### ⚙️ Solution Walkthrough
When an error occurs in your minified production code at \`bundle.min.js:1:5000\`, the browser can use the source map to tell you that the error actually happened in your original code at \`my-component.js:25:10\`. This makes debugging production errors possible. Build tools like Vite or Webpack automatically generate source maps during the build process.

### 📚 Key Concepts
-   **Source Map**: A file that maps from a transformed source to an original source.
-   **Build Process**: The steps (like transpilation and minification) used to prepare code for production.
`,
  "breakpoints-conceptual": `
### 💡 Problem Breakdown
A breakpoint is a deliberate pausing place in a program, set for debugging purposes. Instead of filling your code with \`console.log\`, you can set a breakpoint in your browser's developer tools. When the code execution reaches that line, it will pause completely.

### ⚙️ Solution Walkthrough
1.  Open the browser's developer tools (e.g., F12).
2.  Go to the "Sources" panel and find the JavaScript file you want to debug.
3.  Click on a line number in the gutter to the left of the code. A blue marker will appear, indicating a breakpoint is set.
4.  When the code runs and hits that line, it will pause. You can then use the debugger controls to step through the code, inspect the values of all variables in the "Scope" pane, and examine the "Call Stack".

### 📚 Key Concepts
-   **Interactive Debugging**: A powerful method of debugging that allows you to pause and inspect the state of your application at any point.
`,
  "conditional-breakpoints-conceptual": `
### 💡 Problem Breakdown
Sometimes, you want to pause at a breakpoint, but only when a certain condition is met (e.g., inside a loop, but only when \`i > 10\`). A conditional breakpoint allows you to do this.

### ⚙️ Solution Walkthrough
1.  Set a regular breakpoint in the browser's "Sources" panel.
2.  Right-click on the breakpoint marker.
3.  Select "Edit breakpoint..."
4.  In the text box that appears, enter a JavaScript expression that evaluates to true or false (e.g., \`i > 10\`).
5.  Now, the debugger will only pause at this line if the condition is met. This saves you from having to manually step through many loop iterations.

### 📚 Key Concepts
-   **Conditional Breakpoint**: A breakpoint that only activates when a specified condition is true.
`,
  "watch-expressions-conceptual": `
### 💡 Problem Breakdown
The "Watch" panel in a debugger is a powerful feature that allows you to monitor the value of specific variables or expressions as you step through your code.

### ⚙️ Solution Walkthrough
1.  While paused at a breakpoint in the "Sources" panel, look for the "Watch" section (usually on the right-hand sidebar).
2.  Click the "+" icon to add a new watch expression.
3.  Enter a variable name (e.g., \`myObject\`) or a more complex expression (e.g., \`myObject.items[0].name\`).
4.  As you step through the code (using Step Over, Step Into, etc.), the values in the Watch panel will update automatically whenever they change. This is very useful for tracking how a specific piece of state evolves over time.

### 📚 Key Concepts
-   **Watch Expression**: An expression monitored by a debugger that is re-evaluated every time the execution is paused.
`,
  "call-stack-debugging-conceptual": `
### 💡 Problem Breakdown
The "Call Stack" panel in a debugger is a visual representation of the JavaScript call stack. It shows the chain of function calls that led to the current point of execution.

### ⚙️ Solution Walkthrough
1.  When paused at a breakpoint, the Call Stack panel shows a list of functions.
2.  The function at the top is the one currently being executed.
3.  The function below it is the one that called the current function, and so on, down to the initial global script execution.
4.  **Debugging**: You can click on any function in the call stack. This will take you to the line in that function where the next function was called, and the "Scope" pane will update to show the values of the variables within that function's scope. This is extremely useful for understanding the execution path and context of an error.

### 📚 Key Concepts
-   **Call Stack**: A fundamental part of the JavaScript runtime that a debugger allows you to inspect visually.
`,
  "scope-pane-debugging-conceptual": `
### 💡 Problem Breakdown
When paused at a breakpoint, the "Scope" pane in a debugger is your window into the current state of all accessible variables.

### ⚙️ Solution Walkthrough
The Scope pane is typically divided into sections:
-   **Local**: Shows the variables defined within the current function's scope.
-   **Closure**: If the current function is a closure, this section shows the variables from its parent scope(s) that it has closed over.
-   **Global**: Shows all the variables in the global scope (\`window\` in a browser).

You can expand objects and arrays in this pane to inspect their contents. This is the primary way you inspect the state of your application when debugging.

### 📚 Key Concepts
-   **Scope**: The context in which variables are declared and accessible. The debugger provides a live view of this context.
`,
  "dom-breakpoints-conceptual": `
### 💡 Problem Breakdown
Sometimes you want to know what piece of JavaScript code is modifying a specific part of your web page. DOM change breakpoints allow you to do this.

### ⚙️ Solution Walkthrough
1.  Go to the "Elements" panel in the browser's developer tools.
2.  Find the HTML element you want to monitor.
3.  Right-click on the element.
4.  In the context menu, go to "Break on..." and select one of the options:
    - **subtree modifications**: Pauses when a child node is added or removed.
    - **attribute modifications**: Pauses when an attribute (like \`class\` or \`style\`) is changed.
    - **node removal**: Pauses just before the node itself is removed from the DOM.
When the specified change occurs, the debugger will pause on the line of JavaScript that caused the change.

### 📚 Key Concepts
-   **DOM Debugging**: A powerful technique for finding the source of unexpected changes to your UI.
`,
  "xhr-breakpoints-conceptual": `
### 💡 Problem Breakdown
XHR/Fetch breakpoints allow you to pause execution whenever a network request is made. This is useful for debugging issues with API calls.

### ⚙️ Solution Walkthrough
1.  Go to the "Sources" panel in the browser's developer tools.
2.  Find the "XHR/fetch Breakpoints" section in the right-hand sidebar.
3.  Click the "+" icon to add a new breakpoint.
4.  Enter a part of a URL (e.g., \`/api/users\`).
5.  Now, any \`fetch\` or \`XMLHttpRequest\` that includes this string in its URL will cause the debugger to pause just before the request is sent. You can then inspect the Call Stack to see what part of your code initiated the request.

### 📚 Key Concepts
-   **Network Debugging**: A technique for intercepting and inspecting network requests.
`,
  "event-listener-breakpoints-conceptual": `
### 💡 Problem Breakdown
This feature allows you to pause on *any* event of a certain type, which is useful when you want to find the source of an event but don't know which element or function is responsible.

### ⚙️ Solution Walkthrough
1.  Go to the "Sources" panel in the browser's developer tools.
2.  Find the "Event Listener Breakpoints" section in the right-hand sidebar.
3.  Expand a category, such as "Mouse".
4.  Check the box next to an event type, such as "click".
5.  Now, any time a \`click\` event occurs anywhere on the page, the debugger will pause on the first line of the event listener that is about to be executed.

### 📚 Key Concepts
-   **Event Debugging**: A global way to catch and inspect event handlers.
`,
  "memory-leaks-conceptual": `
### 💡 Problem Breakdown
A memory leak in JavaScript is when a piece of memory that is no longer needed by the application is not released by the garbage collector. This can cause the application's memory usage to grow over time, eventually leading to poor performance or crashes.
Common causes:
- **Detached DOM nodes**: A DOM node is removed from the page, but a JavaScript variable still holds a reference to it.
- **Uncleared timers/intervals**: \`setInterval\` callbacks that are never cleared.
- **Closures**: Accidental closures that keep large objects in memory.

### ⚙️ Solution Walkthrough
Browser developer tools have a "Memory" tab to help find leaks.
1.  Take a **Heap Snapshot**.
2.  Perform some actions in your application that you suspect are causing a leak.
3.  Take another Heap Snapshot.
4.  Compare the two snapshots. The tool can show you which objects were created between the snapshots and are still in memory. By inspecting the "retaining path" for these objects, you can figure out why they weren't garbage collected.

### 📚 Key Concepts
-   **Memory Leak**: A common performance issue in long-running applications.
-   **Memory Profiling**: The process of analyzing an application's memory usage to find leaks.
`,
  "performance-profiling-conceptual": `
### 💡 Problem Breakdown
Performance profiling is the process of analyzing your code's runtime performance to identify "bottlenecks" – the parts of the code that are taking the most time and slowing down the application.

### ⚙️ Solution Walkthrough
The "Performance" tab in browser developer tools is the primary tool for this.
1.  Click the "Record" button.
2.  Perform the actions in your application that you want to profile (e.g., an animation, loading data).
3.  Click "Stop".
4.  The tool will display a detailed timeline of what happened, including:
    - A **flame chart** showing the JavaScript call stack over time. Wide blocks in the chart represent long-running functions, which are potential bottlenecks.
    - Information about rendering, layout, and painting operations.
    - A summary of which functions took the most total time.

This analysis helps you focus your optimization efforts on the parts of your code that will have the biggest impact.

### 📚 Key Concepts
-   **Performance Profiling**: The practice of measuring and analyzing the performance of an application.
-   **Bottleneck**: A part of a system that slows down the overall performance.
`,
  "promise-chain-error-catch-and-continue": `
### 💡 Problem Breakdown
A key feature of promise error handling is the ability to recover from an error. If a \`.catch()\` block handles an error and returns a normal (non-Promise) value, the promise chain is considered "handled" and will switch back to a resolved state. The next \`.then()\` in the chain will then be executed with the value returned from the \`.catch()\` block.

### ⚙️ Solution Walkthrough
A promise chain recovers from a rejection.
\`\`\`javascript
Promise.reject("Initial Error")
  .catch(err => {
    console.log(\`Caught error: \${err}\`);
    return "Default Value"; // Recover and return a new value
  })
  .then(val => {
    // This .then() WILL run
    console.log(\`Chain continued with: \${val}\`); // "Chain continued with: Default Value"
  });
\`\`\`
### 📚 Key Concepts
-   **Error Recovery**: Using a \`.catch()\` block to gracefully handle an error and allow the application to continue.
`,
  "async-await-finally": `
### 💡 Problem Breakdown
The \`finally\` block works with \`async/await\` just as it does with synchronous code. The code inside the \`finally\` block is guaranteed to execute after the \`try\` block completes, regardless of whether an error was thrown and caught.

### ⚙️ Solution Walkthrough
A \`finally\` block is used to guarantee a cleanup action.
\`\`\`javascript
async function process() {
  let resource = 'acquired';
  try {
    console.log("Using resource...");
    await Promise.reject("Operation failed");
  } catch (e) {
    console.error("Caught error:", e);
  } finally {
    // This will run whether the await resolves or rejects
    resource = 'released';
    console.log("Resource released.");
  }
  return resource;
}
\`\`\`
### 📚 Key Concepts
-   **\`try...catch...finally\`**: A complete control flow statement for synchronous and asynchronous error handling and cleanup.
`,
  "node-process-rejection-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about global error handling in Node.js. Similar to the browser's \`unhandledrejection\` event, Node.js has a process-level event for catching promise rejections that were not handled by a \`.catch()\` block.

### ⚙️ Solution Walkthrough
An event listener is attached to the global \`process\` object.
\`\`\`javascript
// In a Node.js script
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // It is a best practice to exit the process after an unhandled rejection,
  // as the application may be in an unstable state.
  process.exit(1);
});

Promise.reject("Unhandled!");
\`\`\`
### 📚 Key Concepts
-   **Process Events**: Node.js's \`process\` object is an \`EventEmitter\` that allows you to listen for global events.
`,
  "node-process-exception-conceptual": `
### 💡 Problem Breakdown
This is the Node.js equivalent of \`window.onerror\`. The \`uncaughtException\` event on the \`process\` object is emitted when a synchronous JavaScript error is thrown but not caught by any \`try...catch\` block.

### ⚙️ Solution Walkthrough
A listener is added to the \`process\` object.
\`\`\`javascript
// In a Node.js script
process.on('uncaughtException', (err, origin) => {
  console.error(\`Caught exception: \${err}\\n\` + \`Exception origin: \${origin}\`);
  // This is a last resort. The application is in an undefined state.
  // Log the error and perform a graceful shutdown.
  process.exit(1);
});

throw new Error("This was not caught!");
\`\`\`
**Important**: Using this is considered a last resort. The application is in an unstable state after an uncaught exception, and you should generally log the error and exit.

### 📚 Key Concepts
-   **Process Events**: Listening for global process events is crucial for robust Node.js applications.
`,
  "strict-mode-errors": `
### 💡 Problem Breakdown
"Strict Mode" is a restricted variant of JavaScript that you can opt into. It makes several changes to normal JavaScript semantics, most notably by changing some previously "silent" errors into thrown errors. This helps you catch common coding mistakes early.

### ⚙️ Solution Walkthrough
Strict mode is enabled by putting the string \`'use strict';\` at the beginning of a file or a function.
\`\`\`javascript
'use strict';

// 1. Assigning to an undeclared variable throws a ReferenceError
// undeclaredVar = 5; // Throws error in strict mode

// 2. Assigning to a non-writable property throws a TypeError
const obj = {};
Object.defineProperty(obj, 'readOnly', { value: 10, writable: false });
// obj.readOnly = 20; // Throws error in strict mode
\`\`\`
### 📚 Key Concepts
-   **Strict Mode**: A way to opt-in to a more restricted and safer version of JavaScript. It is a best practice to use it in all modern code.
`,
  "console-count-debugging": `
### 💡 Problem Breakdown
\`console.count()\` is a simple but useful debugging tool that maintains a counter for a given label. Every time \`console.count()\` is called with the same label, it logs the label along with the number of times it has been called.

### ⚙️ Solution Walkthrough
The counter is used inside a loop.
\`\`\`javascript
for (let i = 0; i < 3; i++) {
  console.count('my-loop');
}
// Console output:
// my-loop: 1
// my-loop: 2
// my-loop: 3
\`\`\`
This is handy for quickly checking how many times a particular function or block of code is being executed without having to set up a manual counter variable.

### 📚 Key Concepts
-   **\`console.count()\`**: A console method for simple invocation counting.
`,
  "console-dir-debugging": `
### 💡 Problem Breakdown
While \`console.log()\` is great for displaying primitive values or a simple view of objects, \`console.dir()\` is specifically designed to display an interactive, explorable list of the properties of a JavaScript object. This is especially useful for inspecting the full properties of DOM elements.

### ⚙️ Solution Walkthrough
The two methods are compared.
\`\`\`javascript
const myElement = document.getElementById('my-element');

// console.log() often prints the element's HTML structure
console.log(myElement);

// console.dir() prints the element as a navigable JS object
console.dir(myElement);
\`\`\`
In the browser console, the output of \`console.dir()\` will be an expandable object tree, allowing you to inspect all of its properties, methods, and prototype chain.

### 📚 Key Concepts
-   **\`console.dir()\`**: A console method for displaying an interactive object property list.
`,
  "try-catch-performance-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a historical performance issue. In older JavaScript engines, the presence of a \`try...catch\` block could prevent the engine from performing certain optimizations on the code within the \`try\` block. This was because the engine couldn't be sure what variables the \`catch\` block might introduce or modify.

### ⚙️ Solution Walkthrough
Modern JavaScript engines (like V8) are much more sophisticated. They have advanced JIT compilers that can now handle \`try...catch\` blocks much more efficiently. While there might be a minuscule overhead, the performance cost is no longer a significant concern for most applications. The benefits of robust error handling far outweigh any minor performance impact. **You should not avoid using \`try...catch\` for performance reasons in modern JavaScript.**

### 📚 Key Concepts
-   **JIT (Just-In-Time) Compilation**: Modern JS engines can optimize code even in the presence of complex control flow statements like \`try...catch\`.
`,
  "error-first-callback-pattern": `
### 💡 Problem Breakdown
This is a conceptual problem about a very important convention in asynchronous JavaScript, especially in the Node.js ecosystem, before Promises became widespread. The "error-first" callback pattern is a convention where any callback function passed to an asynchronous function takes an error object as its *first* argument.

### ⚙️ Solution Walkthrough
A conceptual example from the Node.js \`fs\` module.
\`\`\`javascript
fs.readFile('my-file.txt', (err, data) => {
  // 1. Always check the error argument first.
  if (err) {
    console.error("An error occurred:", err);
    return;
  }
  
  // 2. If 'err' is null or undefined, the operation was successful.
  console.log("File data:", data);
});
\`\`\`
This convention provides a standard, predictable way to handle both success and failure cases for any asynchronous operation.

### 📚 Key Concepts
-   **Convention**: A widely followed but not language-enforced rule.
-   **Error-First Callback**: A standard pattern for handling errors in asynchronous, callback-based APIs.
`,
  "graceful-degradation-conceptual": `
### 💡 Problem Breakdown
Graceful degradation is a design philosophy focused on building resilient applications. It means that even if a non-critical feature fails, the core functionality of the application should still be available to the user. Error handling is a key part of implementing this.

### ⚙️ Solution Walkthrough
A conceptual example of fetching optional data.
\`\`\`javascript
async function loadUserProfile() {
  // Core data (must succeed)
  const user = await fetch('/api/user');
  renderUser(user);

  // Optional data (can fail gracefully)
  try {
    const recommendations = await fetch('/api/recommendations');
    renderRecommendations(recommendations);
  } catch (e) {
    // Don't crash the app. Just hide the recommendations section.
    console.warn("Could not load recommendations.");
    hideRecommendationsSection();
  }
}
\`\`\`
The application still works even if the optional recommendations API is down. This provides a better user experience than showing a broken page.

### 📚 Key Concepts
-   **Resilience**: The ability of a system to handle failures and continue to function.
-   **Graceful Degradation**: A design principle for building resilient applications.
`,
};
