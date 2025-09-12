export const explanations: Record<string, string> = {
  'settimeout-callback': `
### 💡 Problem Breakdown
This is a foundational asynchronous operation in JavaScript. The goal is to execute a piece of code, but not immediately—only after a specified amount of time has passed. This illustrates the non-blocking nature of JavaScript and introduces the concept of a "macrotask".

### ⚙️ Solution Walkthrough
The \`setTimeout\` function is used to schedule the execution of a callback function.
\`\`\`javascript
function delayedExecution(delay) {
  setTimeout(() => {
    // This code runs after the delay
    console.log(\`Executed after \${delay}ms\`);
  }, delay);
}
\`\`\`
1.  **\`setTimeout(callback, delay)\`**: This Web API schedules the \`callback\` function to be added to the macrotask queue after the \`delay\` (in milliseconds) has passed.
2.  **Non-blocking**: The JavaScript engine does *not* wait. It sets the timer and immediately continues executing any code that comes after the \`setTimeout\` call.
3.  **Event Loop**: After the main script has finished and the call stack is empty, the event loop will pick up tasks from the queue. Once the timer expires, the callback is moved from the Web API environment to the macrotask queue, ready to be executed.

### 📚 Key Concepts
-   **Asynchronous Operations**: Actions that don't complete immediately. JavaScript doesn't block and wait for them.
-   **Callback Function**: A function passed as an argument to another function, to be "called back" at a later time.
-   **Event Loop & Macrotask Queue**: The core mechanism in JavaScript runtimes that handles asynchronous tasks. \`setTimeout\`, \`setInterval\`, and I/O operations are macrotasks.
`,
  'promise-creation': `
### 💡 Problem Breakdown
A \`Promise\` is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. This problem is about creating a basic promise that successfully completes or "resolves".

### ⚙️ Solution Walkthrough
The \`Promise\` constructor takes a function (the "executor") which is given two arguments: a \`resolve\` function and a \`reject\` function. We call \`resolve\` to signal a successful completion.
\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  // Simulate an async operation like a network request
  setTimeout(() => {
    // If successful, call resolve with the result
    resolve("Operation was successful!");
  }, 500);
});

// To get the value, we use .then()
myPromise.then(result => {
  console.log(result); // "Operation was successful!"
});
\`\`\`
1.  **Executor Function**: \`(resolve, reject) => { ... }\` runs immediately when the promise is created.
2.  **\`resolve(value)\`**: This function is called to change the promise's state from "pending" to "fulfilled". The \`value\` is passed to any \`.then()\` handlers.
3.  **\`.then(handler)\`**: This method is used to schedule a callback to be executed when the promise is fulfilled.

### 📚 Key Concepts
-   **Promise**: An object representing a future value. It can be in one of three states: pending, fulfilled, or rejected.
-   **\`resolve\`**: The function to call to fulfill a promise.
`,
  'promise-rejection': `
### 💡 Problem Breakdown
This is the other side of a Promise: handling failure. If an asynchronous operation fails, the promise should be "rejected". This rejection needs to be handled to prevent "unhandled promise rejection" errors.

### ⚙️ Solution Walkthrough
Inside the promise executor, the \`reject\` function is called to signal an error. This is handled by a \`.catch()\` block.
\`\`\`javascript
const failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // If an error occurs, call reject with a reason
    reject(new Error("Operation failed!"));
  }, 500);
});

failingPromise
  .then(result => { /* This part is skipped */ })
  .catch(error => {
    console.error(error.message); // "Operation failed!"
  });
\`\`\`
1.  **\`reject(reason)\`**: This function is called to change the promise's state from "pending" to "rejected". The \`reason\` (usually an \`Error\` object) is passed to any \`.catch()\` handlers.
2.  **\`.catch(handler)\`**: This method schedules a callback to be executed if the promise is rejected.

### 📚 Key Concepts
-   **Promise Rejection**: The state of a promise that represents a failed operation.
-   **\`reject\`**: The function to call to reject a promise.
-   **\`.catch()\`**: The method for handling promise rejections.
`,
  'fetch-api-data': `
### 💡 Problem Breakdown
The \`fetch\` API is the modern, promise-based way to make network requests in the browser. The task is to use \`fetch\` to retrieve data from a public API and display it.

### ⚙️ Solution Walkthrough
The \`fetch()\` function is called with a URL. It returns a promise that resolves to a \`Response\` object. We then need to call another method on the response object, like \`.json()\`, to parse the body of the response.
\`\`\`javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    // The first .then gets the Response object. We need to parse its body.
    return response.json(); // .json() also returns a promise
  })
  .then(data => {
    // The second .then gets the parsed JSON data.
    console.log(data.title); // "delectus aut autem"
  })
  .catch(error => {
    console.error("Fetch failed:", error);
  });
\`\`\`
1.  **\`fetch(url)\`**: Returns a promise that resolves to the HTTP \`Response\`.
2.  **\`response.json()\`**: Returns another promise that resolves with the result of parsing the response body text as JSON.
3.  **Chaining**: We use a chain of \`.then()\` calls to handle these two asynchronous steps in sequence.

### 📚 Key Concepts
-   **Fetch API**: A browser interface for making network requests.
-   **Promise Chaining**: Handling a sequence of asynchronous operations.
`,
  'async-await-syntax': `
### 💡 Problem Breakdown
\`async/await\` is modern (ES2017) syntax built on top of Promises. It allows you to write asynchronous code that looks and feels synchronous, which is often easier to read, write, and debug than long \`.then()\` chains.

### ⚙️ Solution Walkthrough
An \`async\` function is created. The \`await\` keyword is used to "pause" the function's execution until a promise settles, and then get its resolved value.
\`\`\`javascript
async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data.title);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
fetchTodo();
\`\`\`
1.  **\`async function\`**: The \`async\` keyword makes a function return a promise implicitly.
2.  **\`await\`**: The \`await\` keyword can only be used inside an \`async\` function. It pauses execution, waits for the promise on its right to resolve, and then resumes with the resolved value.
3.  **Error Handling**: With \`async/await\`, you can use standard synchronous \`try...catch\` blocks for error handling.

### 📚 Key Concepts
-   **\`async/await\`**: Syntactic sugar for handling Promises that improves code readability and simplifies error handling.
`,
  'promise-chaining': `
### 💡 Problem Breakdown
The \`.then()\` method of a Promise always returns a *new* promise. This is what allows you to chain them. You can perform a sequence of asynchronous or synchronous steps, where each step depends on the result of the previous one.

### ⚙️ Solution Walkthrough
A sequence of \`.then()\` calls is used to transform a value step-by-step.
\`\`\`javascript
Promise.resolve(10)
  .then(value => {
    console.log(value); // 10
    // The returned value is wrapped in a new promise that resolves to 20
    return value * 2; 
  })
  .then(value => {
    console.log(value); // 20
    return value + 5;   
  })
  .then(finalValue => {
    console.log('Final:', finalValue); // 25
  });
\`\`\`
1.  **Passing Values**: The resolved value of one promise is passed as the argument to the next \`.then()\` handler in the chain.
2.  **Returning Promises**: You can also return another promise from a \`.then()\` handler, and the chain will wait for that new promise to resolve before continuing.

### 📚 Key Concepts
-   **Promise Chaining**: The core mechanism for handling sequential asynchronous tasks with promises.
`,
  'async-await-error-handling': `
### 💡 Problem Breakdown
A key advantage of \`async/await\` is that it allows you to handle errors from asynchronous operations using standard, synchronous \`try...catch\` blocks. This is often cleaner and more intuitive than chaining \`.catch()\` methods.

### ⚙️ Solution Walkthrough
A rejecting promise is awaited inside a \`try\` block. The rejection is caught by the \`catch\` block.
\`\`\`javascript
async function testError() {
  try {
    const result = await Promise.reject(new Error('Oops!'));
    console.log(result); // This line is never reached
  } catch (error) {
    console.log('Caught the error:', error.message); // "Caught: Oops!"
  }
}
testError();
\`\`\`
1.  **\`await\` Rejection**: When you \`await\` a promise that rejects, it throws an exception at that line.
2.  **\`try...catch\`**: This exception is then caught by the surrounding \`try...catch\` block, just like a synchronous error.

### 📚 Key Concepts
-   **Asynchronous Error Handling**: Using \`try...catch\` with \`async/await\` provides a unified error handling model for both sync and async code.
`,
  'promise-all': `
### 💡 Problem Breakdown
\`Promise.all()\` is a static method that takes an array of promises. It returns a single new promise that fulfills when *all* of the input promises have fulfilled. The resolved value is an array of the results from the input promises, in the same order.

### ⚙️ Solution Walkthrough
Two promises are created, and \`Promise.all()\` is used to wait for both to complete.
\`\`\`javascript
const p1 = Promise.resolve("First");
const p2 = new Promise(res => setTimeout(() => res("Second"), 100));

Promise.all([p1, p2]).then(values => {
  // values is ["First", "Second"]
  console.log(values);
});
\`\`\`
This is useful for running multiple independent asynchronous operations concurrently and then doing something after they have all finished.

### 📚 Key Concepts
-   **\`Promise.all()\`**: A method for concurrently executing multiple async operations and waiting for them all to complete successfully.
-   **Concurrency**: Starting multiple tasks at the same time.
`,
  'promise-all-rejection': `
### 💡 Problem Breakdown
An important behavior of \`Promise.all()\` is that it is "fail-fast." If *any* of the input promises reject, the main \`Promise.all()\` promise immediately rejects with the reason of that first promise that rejected. It does not wait for the other promises to finish.

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
### 📚 Key Concepts
-   **Fail-Fast Behavior**: A characteristic of \`Promise.all()\` where it rejects immediately on the first failure.
`,
  'promise-race': `
### 💡 Problem Breakdown
\`Promise.race()\` is a static method that takes an array of promises. It returns a new promise that settles (either fulfills or rejects) as soon as the *first* promise in the array settles.

### ⚙️ Solution Walkthrough
Two promises with different delays are passed to \`Promise.race()\`. The faster one "wins".
\`\`\`javascript
const p1 = new Promise(res => setTimeout(() => res("one"), 500));
const p2 = new Promise(res => setTimeout(() => res("two"), 100));

Promise.race([p1, p2]).then(result => {
  console.log(result); // "two"
});
\`\`\`
1.  **First to Settle**: \`p2\` will resolve after 100ms. Since this is before \`p1\` resolves (at 500ms), the promise returned by \`Promise.race()\` will resolve with the value "two".

### 📚 Key Concepts
-   **\`Promise.race()\`**: A method for handling multiple promises where you only care about the result of the first one to finish. Useful for scenarios like a timeout.
`,
  'event-loop-macrotask-microtask': `
### 💡 Problem Breakdown
This is a core conceptual problem about the JavaScript Event Loop. The Event Loop has different queues for different types of asynchronous tasks. The two main queues are the **Macrotask Queue** (or just "task queue") and the **Microtask Queue**. The key rule is: after each macrotask, the event loop runs *all* tasks in the microtask queue to completion before starting the next macrotask.

### ⚙️ Solution Walkthrough
The execution order of \`setTimeout\` (macrotask) and a Promise's \`.then\` (microtask) is observed.
\`\`\`javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise (Microtask)');
});

console.log('End');
\`\`\`
**Output Order:**
1.  \`Start\` (Synchronous)
2.  \`End\` (Synchronous)
3.  \`Promise (Microtask)\` (Microtask queue is flushed after sync code)
4.  \`Timeout (Macrotask)\` (Event loop pulls this from the macrotask queue next)

### 📚 Key Concepts
-   **Event Loop**: The mechanism that allows JavaScript to be non-blocking.
-   **Macrotask Queue**: For tasks like \`setTimeout\`, \`setInterval\`, I/O, UI rendering.
-   **Microtask Queue**: For tasks like \`Promise.then()\`, \`process.nextTick\` (Node.js). Microtasks have higher priority.
`,
  'callback-hell-conceptual': `
### 💡 Problem Breakdown
"Callback hell" (or the "pyramid of doom") is an anti-pattern that arises from deeply nested asynchronous callbacks. As each async operation depends on the one before it, the code becomes increasingly indented, making it extremely difficult to read, reason about, and handle errors in.

### ⚙️ Solution Walkthrough
A conceptual example of nested callbacks for sequential operations.
\`\`\`javascript
// Conceptual example
getData(function (a) {
  getMoreData(a, function (b) {
    getEvenMoreData(b, function (c) {
      // And so on...
      // Error handling at each step is complex.
    }, handleErrorC);
  }, handleErrorB);
}, handleErrorA);
\`\`\`
1.  **Readability**: The deep nesting makes the logical flow hard to follow.
2.  **Error Handling**: Managing errors at each separate level is cumbersome.
3.  **The Solution**: Promises and \`async/await\` were specifically designed to solve this problem, allowing you to write asynchronous code in a flat, linear, and more readable style.

### 📚 Key Concepts
-   **Callback Hell**: An anti-pattern resulting from deeply nested asynchronous callbacks.
`,
  'promisify-callback-function': `
### 💡 Problem Breakdown
"Promisification" is the process of converting a function that takes a classic "error-first" callback into a function that returns a promise. This allows you to use older, callback-based APIs with modern promise-based syntax like \`.then()\` or \`async/await\`.

### ⚙️ Solution Walkthrough
A wrapper function is created that returns a \`new Promise\`. The original callback function is called inside the promise's executor.
\`\`\`javascript
// The original callback-style function
function callbackStyleFunc(val, cb) {
  setTimeout(() => {
    if (val) {
      cb(null, "Success"); // error is first, then result
    } else {
      cb("Error"); // error is first
    }
  }, 100);
}

// The promisified wrapper
function promisified(val) {
  return new Promise((resolve, reject) => {
    callbackStyleFunc(val, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}
\`\`\`
1.  **Return \`new Promise\`**: The wrapper immediately returns a promise.
2.  **Call Original**: Inside the executor, we call the original function.
3.  **Resolve/Reject**: In the callback of the original function, we check the \`err\` argument. If it exists, we \`reject\` the promise. Otherwise, we \`resolve\` it with the result.

### 📚 Key Concepts
-   **Promisification**: A pattern for modernizing callback-based APIs.
`,
  'promise-finally': `
### 💡 Problem Breakdown
The \`.finally()\` method (ES2018) is used to specify a callback that will be executed when a promise is "settled" – that is, either fulfilled (resolved) or rejected. It's useful for cleanup code that needs to run regardless of the outcome, like hiding a loading spinner.

### ⚙️ Solution Walkthrough
A \`.finally()\` block is added to a promise chain.
\`\`\`javascript
new Promise(resolve => resolve("Success"))
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => {
    console.log("This will run no matter what.");
  });
\`\`\`
1.  **`.finally(handler)`**: The handler function receives no arguments and its return value is ignored.

### 📚 Key Concepts
-   **`.finally()`**: A method for running cleanup code after a promise settles.
`,
  'async-await-sequential': `
### 💡 Problem Breakdown
A common requirement in asynchronous programming is to perform a series of operations in a specific order, where each operation must wait for the previous one to complete. \`async/await\` makes this incredibly simple and readable.

### ⚙️ Solution Walkthrough
Multiple \`await\` expressions are used in sequence within an \`async\` function. Each \`await\` pauses the function until the promise resolves.
\`\`\`javascript
async function doSteps() {
  console.log("Step 1 started");
  const result1 = await delay(100, 'First');
  console.log(\`Step 1 finished with: \${result1}\`);

  console.log("Step 2 started");
  const result2 = await delay(100, 'Second');
  console.log(\`Step 2 finished with: \${result2}\`);
}
\`\`\`
The total execution time will be the sum of the delays, as the second operation doesn't start until the first one is complete.

### 📚 Key Concepts
-   **Sequential Execution**: \`async/await\` provides a linear, top-to-bottom code flow for sequential asynchronous tasks.
`,
  'async-await-parallel': `
### 💡 Problem Breakdown
When asynchronous operations do not depend on each other, it's much more efficient to run them in parallel (concurrently) rather than sequentially. The goal is to start all operations at once and then wait for them all to finish.

### ⚙️ Solution Walkthrough
The key is to *not* \`await\` the promises immediately. Instead, start all the operations, which returns the promises, collect them in an array, and then use \`await Promise.all()\` to wait for them all to complete.
\`\`\`javascript
async function doParallel() {
  console.log("Starting both operations...");
  const p1 = delay(100, 'First');  // Starts the timer
  const p2 = delay(100, 'Second'); // Starts the second timer immediately

  // Now, wait for them both to finish
  const [result1, result2] = await Promise.all([p1, p2]);
  console.log(\`Finished with: \${result1}, \${result2}\`);
}
\`\`\`
The total execution time will be the time of the *longest* operation, not the sum of them.

### 📚 Key Concepts
-   **Concurrency**: Running multiple tasks at the same time.
-   **\`Promise.all()\`**: The primary tool for managing concurrent promise-based operations.
`,
  'promise-allsettled': `
### 💡 Problem Breakdown
\`Promise.allSettled()\` (ES2020) is a promise combinator that is useful when you want to know the outcome of several independent asynchronous operations. Unlike \`Promise.all\`, it never rejects. It waits for all promises to settle (either fulfill or reject) and then returns a promise that resolves with an array of objects describing the outcome of each promise.

### ⚙️ Solution Walkthrough
\`Promise.allSettled()\` is called with an array containing one resolving and one rejecting promise.
\`\`\`javascript
const p1 = Promise.resolve('Success');
const p2 = Promise.reject('Failure');

Promise.allSettled([p1, p2]).then(results => {
  console.log(results);
  /* [
    { status: 'fulfilled', value: 'Success' },
    { status: 'rejected', reason: 'Failure' }
  ] */
});
\`\`\`
This is ideal for when you want to process the results of all operations, even if some of them failed.

### 📚 Key Concepts
-   **\`Promise.allSettled()\`**: A method to get the outcome of every promise in an iterable, without the fail-fast behavior of \`Promise.all\`.
`,
  'promise-any': `
### 💡 Problem Breakdown
\`Promise.any()\` (ES2021) takes an array of promises and returns a single promise that fulfills as soon as *any* of the input promises fulfill, with the value of that first fulfilled promise. It's the opposite of \`Promise.all\` in this regard. It only rejects if *all* of the input promises reject.

### ⚙️ Solution Walkthrough
\`Promise.any()\` is used with one rejecting and one resolving promise.
\`\`\`javascript
const p1 = Promise.reject('Failure');
const p2 = new Promise(res => setTimeout(() => res('First Success'), 100));

Promise.any([p1, p2]).then(result => {
  console.log(result); // "First Success"
});
\`\`\`
This is useful for scenarios like fetching a resource from multiple endpoints and taking whichever one responds fastest.

### 📚 Key Concepts
-   **\`Promise.any()\`**: A method to get the value of the first promise to fulfill.
-   **Redundancy**: A common use case for this method is to build redundant, fault-tolerant systems.
`,
  'fetch-post-request': `
### 💡 Problem Breakdown
The \`fetch\` API can be used for any HTTP method, not just GET. To make a POST request, you need to provide a second argument to \`fetch\`: an options object that specifies the method, headers, and body of the request.

### ⚙️ Solution Walkthrough
A POST request is sent with a JSON payload.
\`\`\`javascript
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', // Specify the method
    headers: {
      'Content-Type': 'application/json' // Tell the server we're sending JSON
    },
    body: JSON.stringify(data) // Convert the JS object to a JSON string
  });
  return response.json(); // Parses the JSON response from the server
}

postData('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar' });
\`\`\`
1.  **\`method: 'POST'\`**: Specifies the HTTP method.
2.  **`headers`**: An object containing request headers. \`Content-Type\` is crucial for the server to understand the format of the body.
3.  **`body`**: The data to be sent. It must be a string, so we use \`JSON.stringify()\` for JSON data.

### 📚 Key Concepts
-   **HTTP Methods**: Understanding different HTTP verbs like GET, POST, PUT, DELETE.
-   **HTTP Headers**: Metadata sent with a request to provide information to the server.
`,
  'fetch-error-handling': `
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
    
    // Proceed if the request was successful
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch failed:', error.message);
  }
}

checkStatus('https://jsonplaceholder.typicode.com/posts/9999'); // Will trigger the error
\`\`\`
1.  **`response.ok`**: This is a boolean property that is \`true\` for successful HTTP statuses (200-299).
2.  **Manual \`throw\`**: If \`response.ok\` is false, we must manually \`throw\` an error to trigger our \`catch\` block.

### 📚 Key Concepts
-   **HTTP Status Codes**: Understanding what codes like 200, 404, and 500 mean.
-   **Defensive Programming**: Explicitly checking for error conditions instead of assuming success.
`,
  'setinterval-and-clear': `
### 💡 Problem Breakdown
\`setInterval\` is a Web API similar to \`setTimeout\`, but it executes a callback function repeatedly at a specified interval. It's crucial to have a way to stop this repetition, which is done using \`clearInterval\`.

### ⚙️ Solution Walkthrough
\`setInterval\` is used to start a counter. \`clearInterval\` is called from within the interval's callback to stop it after a certain condition is met.
\`\`\`javascript
let count = 0;
// setInterval returns a unique ID for the timer
const intervalId = setInterval(() => {
  count++;
  console.log(\`Count is: \${count}\`);
  
  if (count >= 3) {
    // Stop the interval using its ID
    clearInterval(intervalId);
    console.log("Interval cleared!");
  }
}, 500);
\`\`\`
1.  **`setInterval(callback, delay)`**: Schedules the callback to run every \`delay\` milliseconds.
2.  **`intervalId`**: The function returns a numeric ID.
3.  **`clearInterval(id)`**: This function is used to stop the interval associated with the given ID.

### 📚 Key Concepts
-   **Timers**: Using APIs to schedule code execution in the future.
-   **Resource Management**: It's important to clear intervals when they are no longer needed to prevent memory leaks and unwanted code execution.
`,
  'microtask-queue-order': `
### 💡 Problem Breakdown
This is a conceptual problem that delves deeper into the event loop. When a promise resolves, its `.then()` callbacks are added to the microtask queue. The event loop will always execute *all* tasks currently in the microtask queue before moving on to the next macrotask. Microtasks themselves are also executed in the order they were queued.

### ⚙️ Solution Walkthrough
Multiple `.then()` handlers are attached to the same resolved promise.
\`\`\`javascript
const p = Promise.resolve();

p.then(() => console.log('Microtask 1'));
p.then(() => console.log('Microtask 2'));

console.log('Sync');
\`\`\`
**Output Order:**
1. \`Sync\`
2. \`Microtask 1\`
3. \`Microtask 2\`

The synchronous code runs first. Then, the event loop finds two tasks in the microtask queue and runs them in the order they were added.

### 📚 Key Concepts
-   **Microtask Queue**: A high-priority queue for short, immediate follow-up tasks.
-   **FIFO (First-In, First-Out)**: Both the macrotask and microtask queues generally follow a FIFO execution order.
`,
  'async-iife': `
### 💡 Problem Breakdown
An Immediately Invoked Function Expression (IIFE) can be made \`async\`. This is a common pattern for running an asynchronous operation at the top level of a script, especially in environments that don't yet support top-level \`await\`.

### ⚙️ Solution Walkthrough
An anonymous function is declared with \`async\` and then immediately invoked.
\`\`\`javascript
(async () => {
  try {
    console.log("Starting async IIFE...");
    const result = await new Promise(res => setTimeout(() => res("Done!"), 500));
    console.log(result);
  } catch (e) {
    console.error("Error in async IIFE:", e);
  }
})();
\`\`\`
1.  **`(async () => { ... })`**: Defines an anonymous async function expression.
2.  **`()`**: The final parentheses execute it immediately.
3.  **Benefit**: This creates a self-contained async scope, allowing you to use \`await\` without creating a named function.

### 📚 Key Concepts
-   **Async IIFE**: A pattern for running async code at the script level.
`,
  'promise-resolve-static': `
### 💡 Problem Breakdown
\`Promise.resolve(value)\` is a static helper method that returns a \`Promise\` object that is resolved with the given value. If the value is a promise itself, that promise is returned. If the value is a "thenable" (an object with a \`.then\` method), the returned promise will "follow" that thenable.

### ⚙️ Solution Walkthrough
A resolved promise is created from a simple value.
\`\`\`javascript
const p = Promise.resolve("Instant Success");

p.then(value => console.log(value)); // "Instant Success"
\`\`\`
This is useful as a shortcut for creating a promise that you know will be immediately successful, often as a starting point for a promise chain or in test environments.

### 📚 Key Concepts
-   **\`Promise.resolve()\`**: A factory method for creating fulfilled promises.
`,
  'promise-reject-static': `
### 💡 Problem Breakdown
\`Promise.reject(reason)\` is a static helper method that returns a \`Promise\` object that is rejected with the given reason.

### ⚙️ Solution Walkthrough
A rejected promise is created.
\`\`\`javascript
const p = Promise.reject(new Error("Instant Failure"));

p.catch(error => console.error(error.message)); // "Instant Failure"
\`\`\`
This is a concise way to create a promise that is guaranteed to fail, often used for signaling errors early in an async function.

### 📚 Key Concepts
-   **\`Promise.reject()\`**: A factory method for creating rejected promises.
`,
  'async-generator-conceptual': `
### 💡 Problem Breakdown
An async generator (\`async function*\`) is a powerful feature that combines the pausable nature of generators with the non-blocking nature of async functions. It allows you to create an "async iterable" – a sequence of values that are generated asynchronously.

### ⚙️ Solution Walkthrough
A conceptual async generator fetches pages of data.
\`\`\`javascript
async function* fetchPages(url) {
  let page = 1;
  while (true) {
    const response = await fetch(\`\${url}?page=\${page}\`);
    const data = await response.json();
    if (data.length === 0) break; // Stop when there's no more data
    
    // yield each item from the page
    for (const item of data) {
      yield item;
    }
    page++;
  }
}
\`\`\`
1.  **\`async function*\`**: The syntax for an async generator.
2.  **\`await\`**: Can be used to wait for async operations.
3.  **\`yield\`**: Produces the next value in the async sequence.
4.  **Consumption**: This is consumed using a \`for-await...of\` loop.

### 📚 Key Concepts
-   **Async Generator**: A function that returns an async iterator.
-   **Async Iterable**: An object that can be iterated over asynchronously.
`,
  'for-await-of-loop-conceptual': `
### 💡 Problem Breakdown
The \`for-await...of\` loop (ES2018) is the counterpart to the regular \`for...of\` loop, but for **async iterables**. It allows you to iterate over a sequence of values that are generated asynchronously, automatically handling the \`await\`ing of each value.

### ⚙️ Solution Walkthrough
The loop is used to consume values from the conceptual async generator from the previous problem.
\`\`\`javascript
async function consumePages() {
  const pageGenerator = fetchPages('https://api.example.com/items');
  
  // The loop automatically calls .next() on the iterator and
  // awaits the resulting promise at each step.
  for await (const item of pageGenerator) {
    console.log(item);
  }
}
\`\`\`
This provides a very clean, synchronous-looking syntax for processing asynchronous data streams.

### 📚 Key Concepts
-   **\`for-await...of\`**: A loop for iterating over async iterables.
`,
  'web-workers-conceptual': `
### 💡 Problem Breakdown
JavaScript in the browser runs on a single main thread. If you run a long, computationally expensive task on this thread, the entire user interface (UI) will freeze and become unresponsive. Web Workers solve this by allowing you to run a script on a background thread, completely separate from the main thread.

### ⚙️ Solution Walkthrough
A conceptual overview of the main script and the worker script.
\`\`\`javascript
// --- main.js ---
// Create a new worker
const myWorker = new Worker('worker.js');

// Send data to the worker
myWorker.postMessage({ number: 40 });

// Receive data back from the worker
myWorker.onmessage = function(e) {
  console.log('Result from worker:', e.data);
};

// --- worker.js ---
// Listen for messages from the main thread
self.onmessage = function(e) {
  // Perform the expensive task
  const result = someSlowCalculation(e.data.number);
  
  // Send the result back to the main thread
  self.postMessage(result);
};
\`\`\`
1.  **Isolation**: The worker cannot directly access the DOM.
2.  **Communication**: Communication happens via a messaging system (\`postMessage\` and \`onmessage\`).

### 📚 Key Concepts
-   **Web Workers**: A browser API for running scripts in the background.
-   **Multi-threading**: A way to achieve concurrency and prevent the UI from freezing.
`,
  'abortcontroller-fetch': `
### 💡 Problem Breakdown
The \`AbortController\` API provides a standard way to abort asynchronous tasks, most notably \`fetch\` requests. This is useful for scenarios like a user navigating away from a page while a request is still in progress, or cancelling a search when the user types something new.

### ⚙️ Solution Walkthrough
An \`AbortController\` is created. Its \`signal\` is passed to the \`fetch\` request. The \`abort()\` method is called to cancel it.
\`\`\`javascript
const controller = new AbortController();
const signal = controller.signal;

fetch('https://some-slow-api.com/data', { signal })
  .then(response => response.json())
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Fetch aborted!');
    }
  });

// After a short time, abort the request
setTimeout(() => controller.abort(), 100);
\`\`\`
1.  **\`new AbortController()\`**: Creates a controller instance.
2.  **`controller.signal`**: The \`signal\` property is an \`AbortSignal\` object that is passed to the async API.
3.  **`controller.abort()`**: Calling this method signals to the API that the operation should be aborted. This causes the \`fetch\` promise to reject with an \`AbortError\`.

### 📚 Key Concepts
-   **\`AbortController\`**: A standard API for cancelling async operations.
`,
  'async-function-return-value': `
### 💡 Problem Breakdown
An \`async\` function *always* returns a Promise.
- If the function explicitly returns a non-Promise value, the promise it returns will *resolve* with that value.
- If the function returns a Promise, the promise it returns will simply "adopt" the state of that returned promise.
- If the function throws an error, the promise it returns will *reject* with that error.

### ⚙️ Solution Walkthrough
An async function returns a simple value, and we observe that the return is a Promise.
\`\`\`javascript
async function getData() {
    return "Some data";
}

const returnValue = getData();
console.log(returnValue instanceof Promise); // true

returnValue.then(val => console.log(val)); // "Some data"
\`\`\`
### 📚 Key Concepts
-   **\`async\` Functions**: A core part of modern asynchronous JavaScript. They provide a cleaner syntax for functions that work with promises.
`,
  'then-chain-vs-await-sequence': `
### 💡 Problem Breakdown
This is a conceptual comparison. A sequence of dependent asynchronous operations can be written with a \`.then()\` chain or with a sequence of \`await\` statements. Functionally, they are very similar, but \`async/await\` is often considered more readable.

### ⚙️ Solution Walkthrough
A side-by-side comparison.
\`\`\`javascript
// .then() chain
function thenChain() {
  return promise1()
    .then(result1 => {
      return promise2(result1);
    })
    .then(result2 => {
      return promise3(result2);
    });
}

// async/await sequence
async function awaitSequence() {
  const result1 = await promise1();
  const result2 = await promise2(result1);
  const result3 = await promise3(result2);
  return result3;
}
\`\`\`
The \`async/await\` version looks like standard synchronous code, which makes it easier to follow the logic and debug.

### 📚 Key Concepts
-   **Readability**: A key goal of modern language features is to make code easier for humans to read and maintain.
`,
  'top-level-await-conceptual': `
### 💡 Problem Breakdown
Top-level \`await\` (ES2022) is a feature that allows the \`await\` keyword to be used at the top level of an ES module. This means you don't need to wrap it in an \`async\` function. It's particularly useful for modules that need to perform an async operation to initialize themselves.

### ⚙️ Solution Walkthrough
A conceptual module that fetches configuration data before exporting its functions.
\`\`\`javascript
// --- config.js ---
const response = await fetch('/api/config');
export const config = await response.json();

// --- main.js ---
// The execution of this module will pause until config.js has finished awaiting.
import { config } from './config.js'; 
console.log(config);
\`\`\`
### 📚 Key Concepts
-   **Top-Level \`await\`**: A feature for handling async setup and initialization within modules.
`,
  'promise-in-constructor-antipattern': `
### 💡 Problem Breakdown
This is a common mistake for developers new to Promises. It involves unnecessarily wrapping a value that is *already* a Promise inside a \`new Promise()\` constructor. This adds unnecessary complexity and can make error handling more difficult.

### ⚙️ Solution Walkthrough
A side-by-side comparison of the anti-pattern and the correct approach.
\`\`\`javascript
function fetchData() {
  return fetch('/api/data'); // Already returns a promise!
}

// ANTIPATTERN: Unnecessary wrapping
function badWrapper() {
  return new Promise((resolve, reject) => {
    fetchData().then(resolve).catch(reject);
  });
}

// CORRECT: Just return the promise directly
function goodWrapper() {
  return fetchData();
}
\`\`\`
The \`Promise\` constructor should only be used to "promisify" older, callback-based APIs. If a function already returns a promise, you should just return it directly.

### 📚 Key Concepts
-   **Promise Composition**: Understanding that promises can be returned directly from \`.then()\` handlers and \`async\` functions to continue a chain.
`,
  'promise-constructor-use-case': `
### 💡 Problem Breakdown
The primary *valid* use case for the \`new Promise()\` constructor is to adapt an asynchronous API that does not already use promises (e.g., one that uses callbacks or events) to the promise-based world.

### ⚙️ Solution Walkthrough
Wrapping \`setTimeout\`, a callback-based API, in a promise.
\`\`\`javascript
function delay(ms) {
  // This is a perfect use of the Promise constructor
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function run() {
  console.log("Waiting...");
  await delay(1000); // Now we can await the callback-based API
  console.log("Done.");
}
\`\`\`
### 📚 Key Concepts
-   **Promisification**: The pattern of converting callback-based APIs into promise-returning functions.
`,
  'requestanimationframe-conceptual': `
### 💡 Problem Breakdown
\`requestAnimationFrame\` (rAF) is a browser API that is the preferred way to run animations in JavaScript. It tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. This is much more efficient and smoother than using \`setInterval\`.

### ⚙️ Solution Walkthrough
A conceptual animation loop using rAF.
\`\`\`javascript
const element = document.getElementById('my-element');
let position = 0;

function animationLoop() {
  // Update the element's position
  position++;
  element.style.left = position + 'px';
  
  // Schedule the next frame
  if (position < 200) {
    requestAnimationFrame(animationLoop);
  }
}

// Start the animation
requestAnimationFrame(animationLoop);
\`\`\`
1.  **Browser Optimization**: The browser can optimize animations scheduled with rAF, for example, by not running them when the tab is in the background.
2.  **Timing**: The callback is typically run about 60 times per second, but this can vary depending on the display's refresh rate and system load.

### 📚 Key Concepts
-   **\`requestAnimationFrame\`**: The standard API for creating efficient JavaScript animations.
`,
  'event-loop-starvation-conceptual': `
### 💡 Problem Breakdown
The event loop works because tasks (both macro and micro) are generally short. If a task takes too long, it "starves" the event loop, preventing other tasks from running. This can freeze a web page's UI or make a server unresponsive.

### ⚙️ Solution Walkthrough
Two conceptual examples are shown.
\`\`\`javascript
// 1. Long-running synchronous code (Macrotask)
// This will freeze the browser for a few seconds.
const start = Date.now();
while (Date.now() - start < 3000) {
  // Do nothing, just block
}

// 2. Infinite Microtask Loop
// This will block rendering and macrotasks (like clicks) forever.
function microtaskLoop() {
  Promise.resolve().then(microtaskLoop);
}
microtaskLoop();
\`\`\`
1.  **Blocking**: As long as a synchronous task is running on the call stack, the event loop is blocked and cannot process anything from the macrotask or microtask queues.
2.  **Microtask Starvation**: Because the microtask queue is fully flushed after each macrotask, a loop that continuously adds new microtasks can prevent the event loop from ever getting to the next macrotask (like rendering or a \`setTimeout\`).

### 📚 Key Concepts
-   **Non-blocking I/O**: The philosophy behind Node.js and modern web development is to avoid long-running synchronous tasks that can starve the event loop.
`,
  'promise-from-thenable': `
### 💡 Problem Breakdown
A "thenable" is an object that has a \`.then()\` method, making it behave like a Promise. The \`Promise.resolve()\` method and the \`await\` keyword are smart enough to handle thenables, converting them into a standard Promise that follows their outcome.

### ⚙️ Solution Walkthrough
A custom thenable object is passed to \`Promise.resolve()\`.
\`\`\`javascript
const thenable = {
  then: function(resolve, reject) {
  setTimeout(() => resolve("Resolved from a thenable!"), 100);
  }
};

async function run() {
  const result = await thenable; // Await works on thenables
  console.log(result); // "Resolved from a thenable!"
}
\`\`\`
This interoperability is a key feature of the promise ecosystem.

### 📚 Key Concepts
-   **Thenable**: An object that defines a \`.then\` method, making it compatible with promise-based tools.
`,
  'async-function-as-method': `
### 💡 Problem Breakdown
You can define an \`async\` method directly within an ES6 class or an object literal. When this method is called, it automatically returns a promise.

### ⚙️ Solution Walkthrough
A \`DataService\` class has an \`async\` method to fetch data.
\`\`\`javascript
class DataService {
  async fetchData(id) {
    // const response = await fetch(\`/data/\${id}\`);
    // const data = await response.json();
    return { id, data: "..." }; // This is the resolved value of the promise
  }
}
const service = new DataService();
service.fetchData(1).then(result => console.log(result));
\`\`\`
### 📚 Key Concepts
-   **\`async\` Methods**: A clean syntax for defining asynchronous methods in classes and objects.
`,
  'async-error-propagation': `
### 💡 Problem Breakdown
Errors propagate naturally through \`async/await\` chains. If you \`await\` a function that throws an error (or returns a rejected promise), the \`await\` expression itself will throw that error, which can then be caught by a \`try...catch\` block in the calling function.

### ⚙️ Solution Walkthrough
An \`inner\` function throws an error, which is caught by the \`outer\` function.
\`\`\`javascript
async function inner() {
  throw new Error("Inner error");
}

async function outer() {
  try {
    await inner();
  } catch (e) {
    console.log("Caught in outer:", e.message); // "Caught in outer: Inner error"
  }
}
\`\`\`
This shows that you don't need to put a \`try...catch\` block in every single async function; you can often handle errors at a higher level.

### 📚 Key Concepts
-   **Error Propagation**: The process by which an error is passed up the call stack (or async call chain).
`,
  'microtask-vs-macrotask-timing': `
### 💡 Problem Breakdown
This is a conceptual problem about the detailed execution order in the Node.js event loop, which has more distinct phases than the browser's loop. The general order of priority for async tasks is:
1.  Synchronous Code
2.  \`process.nextTick()\` callbacks (its own special queue)
3.  Microtasks (\`Promise.then\`)
4.  Macrotasks (in different phases: timers like \`setTimeout\`, then I/O, then \`setImmediate\`, then close callbacks)

### ⚙️ Solution Walkthrough
A conceptual log order.
\`\`\`javascript
// In a Node.js script
setTimeout(() => console.log('Timeout'), 0);
setImmediate(() => console.log('Immediate'));
Promise.resolve().then(() => console.log('Promise'));
process.nextTick(() => console.log('nextTick'));
console.log('Sync');

// Expected Output:
// Sync
// nextTick
// Promise
// Timeout
// Immediate
\`\`\`
### 📚 Key Concepts
-   **Node.js Event Loop**: A more complex event loop with distinct phases for different types of async operations.
`,
  'promise-race-rejection': `
### 💡 Problem Breakdown
This problem demonstrates the behavior of \`Promise.race()\` when one of the promises rejects. The \`Promise.race()\` promise will settle as soon as the first input promise settles, and it will adopt that promise's outcome. If the first one to finish is a rejection, \`Promise.race()\` will reject.

### ⚙️ Solution Walkthrough
A fast-rejecting promise "wins" the race.
\`\`\`javascript
const p1 = new Promise(res => setTimeout(() => res("Success"), 200));
const p2 = new Promise((_, rej) => setTimeout(() => rej("Failure"), 100));

Promise.race([p1, p2])
  .then(val => console.log(val)) // Not called
  .catch(err => console.error(err)); // "Failure"
\`\`\`
### 📚 Key Concepts
-   **\`Promise.race()\`**: Settles with the result of the first promise to settle, whether it's a fulfillment or a rejection.
`,
  'async-await-in-map': `
### 💡 Problem Breakdown
This is a very common pitfall. The \`.map()\` array method is not "promise-aware." If you pass an \`async\` function to \`.map()`, it will start all the async operations, but it will **not** wait for them to complete. It will immediately return an array of pending Promises.

### ⚙️ Solution Walkthrough
The incorrect and correct ways are shown.
\`\`\`javascript
const ids = [1, 2, 3];

// INCORRECT: This does not wait
const promises = ids.map(async (id) => {
  return await fetchData(id);
});
// 'promises' is [Promise, Promise, Promise]

// CORRECT: Wrap with Promise.all
async function processArray() {
  const promises = ids.map(id => fetchData(id));
  const results = await Promise.all(promises);
  return results;
}
\`\`\`
1.  **The Pitfall**: \`.map()\` is synchronous and doesn't know about \`await\`. It calls the \`async\` function for each item and moves on.
2.  **The Solution**: First, use \`.map()\` to create an array of promises (starting all the operations concurrently), and then use \`await Promise.all()\` to wait for them all to finish.

### 📚 Key Concepts
-   **Promise-Awareness**: Understanding which language constructs and methods work directly with promises and which do not.
`,
  'promise-any-rejection': `
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
  'fetch-with-headers': `
### 💡 Problem Breakdown
HTTP headers are key-value pairs sent with a request to provide additional information to the server. The \`fetch\` API allows you to easily add custom headers via its options object.

### ⚙️ Solution Walkthrough
A \`fetch\` request is made with an \`Authorization\` header.
\`\`\`javascript
async function getDataWithAuth() {
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN',
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}
\`\`\`
1.  **`headers` property**: This property in the \`fetch\` options object takes an object of key-value pairs for the headers you want to send.

### 📚 Key Concepts
-   **HTTP Headers**: A fundamental part of the HTTP protocol used for authentication, content negotiation, caching, and more.
`,
  'promise-chain-error-handling': `
### 💡 Problem Breakdown
One of the powerful features of promise chains is that a single \`.catch()\` at the end of the chain can handle a rejection from *any* of the preceding \`.then()\` blocks. When a promise in the chain rejects, the execution immediately jumps to the next available \`.catch()\` handler, skipping any intermediate \`.then()\` handlers.

### ⚙️ Solution Walkthrough
An error is thrown in the first \`.then()`, skipping the second \`.then()\` and being caught by the final \`.catch()`.
\`\`\`javascript
Promise.resolve()
  .then(() => {
    console.log("Step 1");
    throw new Error("Failure in chain");
  })
  .then(() => {
    console.log("Step 2 (This is skipped)");
  })
  .catch(err => {
    console.error("Caught error:", err.message);
  });
\`\`\`
### 📚 Key Concepts
-   **Error Propagation in Promises**: Errors are passed down the promise chain to the nearest rejection handler.
`,
  'callback-vs-promise-readability': `
### 💡 Problem Breakdown
This is a conceptual problem to highlight the primary motivation for Promises. Promises allow you to write asynchronous code in a linear, composable way that is much easier to read and maintain than deeply nested callbacks.

### ⚙️ Solution Walkthrough
A side-by-side comparison.
\`\`\`javascript
// Callback Hell
step1(result1 => {
  step2(result1, result2 => {
    step3(result2, result3 => {
      // ...
    });
  });
});

// Promise Chain
step1()
  .then(result1 => step2(result1))
  .then(result2 => step3(result2))
  .then(result3 => { /* ... */ })
  .catch(handleError);
\`\`\`
The promise chain is flat, easier to read from top to bottom, and has a single, clean path for error handling.

### 📚 Key Concepts
-   **Readability**: Writing code that is easy for humans to understand.
-   **Composability**: The ability to combine smaller pieces of logic (promises) into more complex ones.
`,
  'async-await-destructuring': `
### 💡 Problem Breakdown
This combines two modern JavaScript features. You can \`await\` a promise that resolves to an object and immediately destructure the result into variables in a single, concise statement.

### ⚙️ Solution Walkthrough
The result of an awaited function call is destructured.
\`\`\`javascript
const getUser = () => Promise.resolve({ user: 'test', data: [1, 2] });

async function processUser() {
  // Await and destructure in one step
  const { user, data } = await getUser();
  
  console.log(user); // 'test'
  console.log(data); // [1, 2]
}
\`\`\`
### 📚 Key Concepts
-   **Syntactic Sugar**: A combination of features that allows for very expressive and clean code.
`,
  'creating-promise-race-manually': `
### 💡 Problem Breakdown
This is a conceptual problem to understand how promise combinators can be built. You could implement \`Promise.race\` by creating a new promise. Then, iterate over the input promises and attach both a \`resolve\` and a \`reject\` handler to each one. The first handler to be called will settle the new, outer promise.

### ⚙️ Solution Walkthrough
A conceptual implementation.
\`\`\`javascript
function myRace(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      Promise.resolve(p).then(resolve, reject);
    }
  });
}
\`\`\`
1.  **\`Promise.resolve(p)\`**: This handles cases where items in the input array are not promises.
2.  **`then(resolve, reject)`**: For each promise, we tell it to call our main \`resolve\` on success and our main \`reject\` on failure. Since promises can only be settled once, the first one to do so "wins".

### 📚 Key Concepts
-   **Promise Constructor**: The fundamental building block for creating custom promise-based logic.
`,
  'awaiting-non-promise': `
### 💡 Problem Breakdown
The \`await\` keyword is designed to work with promises. However, if you \`await\` a value that is not a promise (a "non-thenable"), JavaScript will treat it as if it were an immediately resolved promise with that value.

### ⚙️ Solution Walkthrough
The \`await\` keyword is used on a number.
\`\`\`javascript
async function test() {
  const result = await 42;
  console.log(result); // 42
}
\`\`\`
The function will still pause briefly (the value is wrapped in a resolved promise and passed to the microtask queue) and then resume with the value.

### 📚 Key Concepts
-   **\`await\` operator**: A flexible operator that can handle both promise and non-promise values.
`,
  'async-iteration-protocol-conceptual': `
### 💡 Problem Breakdown
This is the asynchronous version of the iterator protocol. An object is an **async iterable** if it has a method with the key \`Symbol.asyncIterator\`. This method must return an **async iterator** object. The async iterator must have a \`.next()\` method that returns a **Promise** which resolves to the standard \`{ value, done }\` object.

### ⚙️ Solution Walkthrough
A conceptual async iterator.
\`\`\`javascript
const myAsyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next: async function() {
        await delay(100); // Simulate async work
        if (i < 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
// This would be consumed with a for-await...of loop.
\`\`\`
### 📚 Key Concepts
-   **Async Iterator Protocol**: The set of rules that allow constructs like \`for-await...of\` to traverse an asynchronous sequence.
`,
  'custom-promise-class-conceptual': `
### 💡 Problem Breakdown
You can create a custom promise class by extending the built-in \`Promise\` class. This allows you to add custom methods to your promise instances. A key part of this is using the \`Symbol.species\` static getter to ensure that methods like \`.then()\` return instances of the base \`Promise\` class, which is usually the desired behavior.

### ⚙️ Solution Walkthrough
A conceptual \`MyPromise\` class.
\`\`\`javascript
class MyPromise extends Promise {
  // Use the default Promise constructor for .then(), .catch() etc.
  static get [Symbol.species]() {
    return Promise;
  }
  
  // Add a custom method
  myCustomMethod() {
    console.log("This is a custom method!");
    return this;
  }
}
\`\`\`
### 📚 Key Concepts
-   **Subclassing**: Extending built-in JavaScript classes.
-   **\`Symbol.species\`**: A symbol that controls which constructor is used by methods that create new instances.
`,
  'promise-chain-vs-nested-then': `
### 💡 Problem Breakdown
This illustrates a common mistake. A proper promise chain is flat. Incorrectly nesting a \`.then()\` call inside another \`.then()\` handler without returning the inner promise creates a "pyramid" structure and breaks the clean flow and error handling of the chain.

### ⚙️ Solution Walkthrough
A comparison of the correct and incorrect patterns.
\`\`\`javascript
// BAD: Nested, broken chain
promise1.then(res1 => {
  promise2(res1).then(res2 => {
    // This is a separate, nested chain
  });
});

// GOOD: Flat, proper chain
promise1
  .then(res1 => {
    return promise2(res1); // Return the next promise
  })
  .then(res2 => {
    // This runs after promise2 resolves
  });
\`\`\`
### 📚 Key Concepts
-   **Promise Flattening**: A key feature of promise chains is that if you return a promise from a \`.then()\` handler, the chain automatically "unwraps" it and waits for it to settle.
`,
  'async-await-in-loops': `
### 💡 Problem Breakdown
Using \`await\` inside a standard \`for\` loop or a \`for...of\` loop is a straightforward way to process a sequence of asynchronous tasks one by one (sequentially).

### ⚙️ Solution Walkthrough
A \`for...of\` loop is used to process an array of IDs.
\`\`\`javascript
async function processSequentially(ids) {
  for (const id of ids) {
    // The loop will pause here and wait for each fetch to complete
    // before starting the next iteration.
    const data = await fetchData(id);
    console.log(data);
  }
}
\`\`\`
This pattern is very useful when the result of one operation is needed for the next, or when you want to avoid overwhelming an API with too many concurrent requests.

### 📚 Key Concepts
-   **Sequential Iteration**: A simple and readable pattern for processing async tasks in order.
`,
  'fetch-request-mode': `
### 💡 Problem Breakdown
The \`mode\` option in the \`fetch\` API's options object controls how it handles cross-origin requests, which are subject to the Cross-Origin Resource Sharing (CORS) policy.
- **\`cors\`** (default): The standard mode. It respects CORS headers from the server. If the server doesn't permit the request, it will fail.
- **\`no-cors\`**: Allows you to make a cross-origin request to a server that doesn't support CORS, but you get back an "opaque" response. You cannot read the status or body of the response. This is useful for things like firing off a request to a logging service where you don't care about the response.
- **\`same-origin\`**: This mode will cause the request to fail if it's not made to the same origin.

### 📚 Key Concepts
-   **CORS (Cross-Origin Resource Sharing)**: A browser security mechanism that controls how web pages request resources from a different domain.
`,
  'async-function-in-object': `
### 💡 Problem Breakdown
You can define an async function as a method in an object literal using either the \`async\` keyword with a traditional function expression or the \`async\` method shorthand.

### ⚙️ Solution Walkthrough
An \`apiService\` object is created with an \`async\` method.
\`\`\`javascript
const apiService = {
  // Async method shorthand
  async getData() {
    return await delay(50, 'Some Data');
  }
};

apiService.getData().then(data => console.log(data));
\`\`\`
### 📚 Key Concepts
-   **Async Methods**: A concise syntax for defining methods that return promises.
`,
  'promise-chain-with-sync-return': `
### 💡 Problem Breakdown
This demonstrates the flexibility of promise chains. If a \`.then()\` handler returns a regular, non-promise value, the promise chain doesn't break. The chain simply wraps that value in an immediately resolved promise and passes it to the next \`.then()\` handler.

### ⚙️ Solution Walkthrough
A synchronous value is returned from a \`.then()\` block.
\`\`\`javascript
Promise.resolve(10)
  .then(val => {
    return val * 2; // Returns the number 20
  })
  .then(val => {
    // This handler receives 20
    console.log(val);
  });
\`\`\`
### 📚 Key Concepts
-   **Promise Resolution**: A promise chain can handle both synchronous and asynchronous transformations.
`,
  'async-resource-management': `
### 💡 Problem Breakdown
This is a conceptual problem about a robust pattern for managing resources that need to be acquired and then released, especially in asynchronous code. The \`try...finally\` block is perfect for this, as the \`finally\` block is guaranteed to execute whether the \`try\` block succeeds or fails.

### ⚙️ Solution Walkthrough
A conceptual example of acquiring and releasing a database connection.
\`\`\`javascript
async function performQuery() {
  let connection;
  try {
    connection = await getDbConnection(); // Acquire resource
    const result = await connection.query("SELECT * FROM users"); // Use resource
    return result;
  } catch (error) {
    // Handle errors
  } finally {
    // This always runs
    if (connection) {
      await connection.release(); // Release resource
    }
  }
}
\`\`\`
### 📚 Key Concepts
-   **\`try...finally\`**: A control flow statement that guarantees the execution of cleanup code.
`,
  'indexeddb-promise-wrapper': `
### 💡 Problem Breakdown
The IndexedDB API is a low-level browser API for client-side storage. It's powerful but event-based and uses callbacks, which can be cumbersome. This problem is about the common practice of wrapping its operations in Promises to make it compatible with \`async/await\`.

### ⚙️ Solution Walkthrough
A conceptual wrapper for a "get" operation.
\`\`\`javascript
function getFromDb(key) {
  return new Promise((resolve, reject) => {
    const request = db.transaction(['store']).objectStore('store').get(key);
    
    // Attach event handlers
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
}
\`\`\`
### 📚 Key Concepts
-   **Promisification**: The pattern of converting older, event- or callback-based APIs into promise-returning functions.
`,
  'websocket-communication-conceptual': `
### 💡 Problem Breakdown
WebSockets provide a full-duplex communication channel over a single, long-lived TCP connection. This is different from the request-response model of HTTP. It's ideal for real-time applications like chat apps or live data feeds. The API is event-driven.

### ⚙️ Solution Walkthrough
A conceptual overview of the WebSocket API.
\`\`\`javascript
const ws = new WebSocket('wss://example.com/socket');

// Event handler for when the connection opens
ws.onopen = () => {
  ws.send('Hello Server!');
};

// Event handler for receiving messages
ws.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

// Event handler for errors
ws.onerror = (error) => { /* ... */ };

// Event handler for when the connection closes
ws.onclose = () => { /* ... */ };
\`\`\`
### 📚 Key Concepts
-   **WebSocket**: A protocol for persistent, real-time, two-way communication.
-   **Event-Driven API**: The API relies on event handlers to manage the connection and data flow.
`,
  'server-sent-events-conceptual': `
### 💡 Problem Breakdown
Server-Sent Events (SSE) is a standard that allows a web page to get updates from a server automatically. Unlike WebSockets, it's a one-way connection (server to client). It's simpler than WebSockets and is great for things like live news feeds or stock tickers.

### ⚙️ Solution Walkthrough
The \`EventSource\` API is used to subscribe to an event stream.
\`\`\`javascript
const eventSource = new EventSource('/api/stream');

// Default handler for messages with no 'event' field
eventSource.onmessage = (event) => {
  console.log('New data:', event.data);
};

// Handler for named events
eventSource.addEventListener('update', (event) => {
  // ...
});

eventSource.onerror = (err) => {
  // Handle errors, e.g., connection closed
};
\`\`\`
### 📚 Key Concepts
-   **Server-Sent Events (SSE)**: A technology for one-way, server-to-client communication.
-   **\`EventSource\` API**: The browser API for consuming an SSE stream.
`,
  'async-batching-requests': `
### 💡 Problem Breakdown
This is a conceptual performance optimization pattern. If you have a function that might be called many times in quick succession (e.g., logging an event for every click), it can be inefficient to send a network request for each call. Batching involves collecting these calls into a queue and sending them all in a single network request after a short delay.

### ⚙️ Solution Walkthrough
The logic combines a queue with a debounced function.
1.  Create a queue array (e.g., \`let requestQueue = [];\`).
2.  The public function that users call simply pushes its arguments into the \`requestQueue\`.
3.  Have a separate "debounced" function that:
    - Checks if the queue is empty. If so, does nothing.
    - If not, it makes a copy of the queue and then clears the original.
    - It sends the copied data in a single batch API call after a short period of inactivity.

### 📚 Key Concepts
-   **Batching**: A performance pattern to reduce the number of network requests.
-   **Debouncing**: A rate-limiting technique used to trigger the batch submission.
`,
  'promise-timeout-race': `
### 💡 Problem Breakdown
A common requirement is to have an asynchronous operation fail if it takes too long. This can be implemented elegantly using \`Promise.race()\`. You "race" the actual operation's promise against a timer promise that is set to reject.

### ⚙️ Solution Walkthrough
A wrapper function is created that uses \`Promise.race()\`.
\`\`\`javascript
function withTimeout(promise, ms) {
  // Create a promise that rejects after 'ms' milliseconds
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout!')), ms);
  });

  // Race the input promise against the timeout promise
  return Promise.race([promise, timeoutPromise]);
}
\`\`\`
If \`promise\` resolves before \`ms\`, the \`withTimeout\` promise resolves with its value. If the \`timeoutPromise\` rejects first, the \`withTimeout\` promise rejects with the timeout error.

### 📚 Key Concepts
-   **\`Promise.race()\`**: A perfect tool for implementing timeouts.
`,
  'async-retry-pattern': `
### 💡 Problem Breakdown
Network requests can fail for transient reasons. A retry pattern is a way to make an application more resilient by automatically re-attempting a failed asynchronous operation a certain number of times.

### ⚙️ Solution Walkthrough
A wrapper function uses a loop to attempt the async operation.
\`\`\`javascript
async function retry(asyncFn, maxAttempts) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await asyncFn(); // Attempt the operation
    } catch (err) {
      // If it's the last attempt, re-throw the error
      if (i === maxAttempts - 1) {
        throw err;
      }
      // Optional: wait for a short delay before retrying
      // await delay(200);
    }
  }
}
\`\`\`
### 📚 Key Concepts
-   **Resilience**: Designing systems that can gracefully handle transient failures.
-   **Error Handling**: Using \`try...catch\` within a loop to control the retry logic.
`,
  'mutationobserver-conceptual': `
### 💡 Problem Breakdown
The \`MutationObserver\` API provides a way to watch for changes being made to the DOM tree. It's designed to be more efficient than older methods like Mutation Events. The callbacks are executed asynchronously as microtasks.

### ⚙️ Solution Walkthrough
A conceptual overview of its usage.
\`\`\`javascript
const targetNode = document.getElementById('some-element');
const config = { attributes: true, childList: true, subtree: true };

const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    // Process the mutation
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
// To stop observing: observer.disconnect();
\`\`\`
### 📚 Key Concepts
-   **\`MutationObserver\`**: A browser API for observing DOM changes.
`,
  'intersectionobserver-conceptual': `
### 💡 Problem Breakdown
The \`IntersectionObserver\` API provides an efficient way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. This is the modern API for implementing lazy loading of images and infinite scrolling.

### ⚙️ Solution Walkthrough
A conceptual overview.
\`\`\`javascript
const target = document.querySelector('.lazy-load-image');
const options = { root: null, threshold: 0.5 };

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Load the image
      // observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(target);
\`\`\`
### 📚 Key Concepts
-   **\`IntersectionObserver\`**: An efficient API for detecting element visibility.
`,
  'web-bluetooth-conceptual': `
### 💡 Problem Breakdown
The Web Bluetooth API allows web applications to discover and communicate with Bluetooth Low Energy (BLE) devices. The API is heavily promise-based, making it suitable for use with \`async/await\`.

### ⚙️ Solution Walkthrough
A conceptual flow for connecting to a device.
\`\`\`javascript
async function connectToDevice() {
  const device = await navigator.bluetooth.requestDevice({
    filters: [{ services: ['heart_rate'] }]
  });
  const server = await device.gatt.connect();
  const service = await server.getPrimaryService('heart_rate');
  // ... and so on to get characteristics and read values
}
\`\`\`
### 📚 Key Concepts
-   **Web Bluetooth API**: An API for interacting with BLE peripherals.
-   **Promise-based API**: Most modern Web APIs that involve asynchronous steps return promises.
`,
  'web-usb-conceptual': `
### 💡 Problem Breakdown
The WebUSB API provides a way for web applications to interact with USB devices. Similar to the Web Bluetooth API, it is promise-based and requires explicit user permission for security.

### ⚙️ Solution Walkthrough
A conceptual flow for connecting to a USB device.
\`\`\`javascript
async function connectToUsb() {
  const device = await navigator.usb.requestDevice({
    filters: [{ vendorId: 0x2341 }] // Example: Arduino
  });
  await device.open();
  // ... select configuration, claim interface, and transfer data
}
\`\`\`
### 📚 Key Concepts
-   **WebUSB API**: An API for interacting with USB devices from the browser.
`,
  'async-clipboard-api': `
### 💡 Problem Breakdown
The modern Asynchronous Clipboard API provides a promise-based way to read from and write to the system clipboard. It's more powerful and secure than the older \`document.execCommand()\` method.

### ⚙️ Solution Walkthrough
Reading from and writing to the clipboard.
\`\`\`javascript
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

async function pasteText() {
  const text = await navigator.clipboard.readText();
  console.log('Pasted text:', text);
}
\`\`\`
### 📚 Key Concepts
-   **Async Clipboard API**: The modern, secure, and promise-based API for clipboard access.
`,
  'async-queue-processing': `
### 💡 Problem Breakdown
The task is to implement a queue that processes asynchronous tasks sequentially. This means the next task in the queue should not begin until the current task's promise has resolved.

### ⚙️ Solution Walkthrough
A simple implementation uses a "running" flag and an array as the queue.
\`\`\`javascript
class AsyncQueue {
  constructor() { this.queue = []; this.running = false; }
  add(task) {
    this.queue.push(task);
    this.runNext();
  }
  async runNext() {
    if (this.running || this.queue.length === 0) return;
    this.running = true;
    const task = this.queue.shift();
    await task(); // Wait for the task to complete
    this.running = false;
    this.runNext(); // Run the next item
  }
}
\`\`\`
### 📚 Key Concepts
-   **Asynchronous Control Flow**: A pattern for managing the execution order of multiple async tasks.
`,
  'macrotask-rendering-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem about how the event loop interacts with browser rendering. The browser's rendering pipeline (style, layout, paint) is typically scheduled as a macrotask. This means that after one macrotask (like a \`click\` handler) finishes, the browser will first empty the entire microtask queue, and *then* it will perform any necessary rendering updates, and *then* it will pick the next macrotask from the queue.

### ⚙️ Solution Walkthrough
This explains why a loop of microtasks can block rendering.
\`\`\`javascript
// This will freeze the page and the update will never be seen
element.textContent = "Updating...";
function microtaskLoop() {
  Promise.resolve().then(microtaskLoop);
}
microtaskLoop();
\`\`\`
The event loop never gets a chance to move on to the rendering macrotask because the microtask queue never becomes empty.

### 📚 Key Concepts
-   **Rendering Pipeline**: The steps the browser takes to display content.
-   **Event Loop**: The orchestrator of all tasks, including rendering.
`,
  'promise-is-thenable': `
### 💡 Problem Breakdown
This is a conceptual problem about promise interoperability. A "thenable" is any object with a \`.then()\` method. Promise-aware libraries and language features like \`await\` will treat thenables like native promises. The check for this is straightforward.

### ⚙️ Solution Walkthrough
A function checks if a value is a thenable.
\`\`\`javascript
function isThenable(val) {
  return val !== null &&
         (typeof val === 'object' || typeof val === 'function') &&
         typeof val.then === 'function';
}
\`\`\`
### 📚 Key Concepts
-   **Duck Typing**: "If it walks like a duck and quacks like a duck, then it must be a duck." If an object has a \`.then\` method, we can treat it like a promise.
`,
  'async-await-vs-generators': `
### 💡 Problem Breakdown
This is a conceptual problem about the history and implementation of async/await. Before \`async/await\` was introduced, developers used libraries that combined generators and promises to achieve a similar synchronous-looking control flow. \`async/await\` is essentially syntactic sugar over this pattern.

### ⚙️ Solution Walkthrough
1.  An \`async\` function can be thought of as a **generator** that only \`yield\`s promises.
2.  The \`await\` keyword is like \`yield\`.
3.  A "coroutine" or "runner" function takes the generator's iterator. It calls \`.next()`. When it gets a yielded promise, it waits for that promise to resolve, and then calls \`.next()\` again, passing the resolved value back into the generator.
This is exactly what transpilers like Babel do to convert \`async/await\` to older JavaScript.

### 📚 Key Concepts
-   **Syntactic Sugar**: A feature that provides a cleaner syntax for an existing capability.
-   **Generators**: The underlying mechanism that makes the pausable nature of \`async/await\` possible.
`,
  'promise-chain-flattening': `
### 💡 Problem Breakdown
A key feature of promise chains is that they automatically "unwrap" or "flatten" promises returned from a \`.then()\` handler. If you return a new promise, the chain doesn't resolve with that promise object itself; instead, the chain "unwraps" \`p2\`, waits for it to settle, and then adopts its final state and value.

### ⚙️ Solution Walkthrough
A \`.then()\` handler returns another promise.
\`\`\`javascript
Promise.resolve()
  .then(() => {
    console.log("First step");
    return new Promise(res => setTimeout(() => res("Inner promise resolved"), 200));
  })
  .then(result => {
    // 'result' is the *resolved value* of the inner promise ("Inner promise resolved"),
    // not the promise object itself.
    console.log(result);
  });
\`\`\`
### 📚 Key Concepts
-   **Promise Flattening**: This "unwrapping" behavior is what keeps promise chains flat and readable.
`,
  'fetch-credentials-option': `
### 💡 Problem Breakdown
The \`credentials\` option in the \`fetch\` API's options object controls whether cookies and other credentials are sent with cross-origin requests.
- **\`omit\`** (default): Never sends cookies or HTTP authentication headers.
- **\`same-origin\`**: Sends credentials if the URL is on the same origin as the calling script.
- **\`include\`**: Always sends credentials, even for cross-origin requests. The server must respond with the \`Access-Control-Allow-Credentials: true\` header for this to work.

### 📚 Key Concepts
-   **CORS (Cross-Origin Resource Sharing)**: A browser security mechanism that controls how web pages request resources from a different domain.
-   **Credentials**: Information like cookies and authentication headers used to identify a user.
`,
  'event-loop-node-vs-browser': `
### 💡 Problem Breakdown
While the core concept is the same (a loop that processes tasks from a queue), the event loops in Node.js and browsers have different implementations.
- **Browser Event Loop**: Simpler. It has one macrotask queue and one microtask queue. It takes one macrotask, runs it, then empties the entire microtask queue, then renders (if needed), then repeats.
- **Node.js Event Loop**: More complex and structured into distinct **phases**. A single loop "tick" goes through these phases:
  1. **Timers**: Executes \`setTimeout\` and \`setInterval\` callbacks.
  2. **Pending Callbacks**: Executes I/O callbacks deferred to the next loop iteration.
  3. **Idle, Prepare**: Internal use only.
  4. **Poll**: Retrieve new I/O events; execute their callbacks.
  5. **Check**: Executes \`setImmediate\` callbacks.
  6. **Close Callbacks**: Executes close event callbacks (e.g., \`socket.on('close', ...)\`).

Microtasks (from \`process.nextTick\` and Promises) are executed *between* these phases.

### 📚 Key Concepts
-   **Runtime Environment**: The specific environment dictates the implementation details of the event loop.
`,
  'async-sleep-function': `
### 💡 Problem Breakdown
The task is to create a \`sleep\` or \`delay\` function that pauses execution within an \`async\` function. Since we can't block the main thread, the function must be asynchronous and return a promise.

### ⚙️ Solution Walkthrough
The function returns a \`new Promise\` that resolves after a \`setTimeout\`.
\`\`\`javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Hello");
  await sleep(1000); // Pauses here
  console.log("World");
}
\`\`\`
### 📚 Key Concepts
-   **Promisification**: Wrapping a callback-based API (\`setTimeout\`) to create a promise-based one.
`,
  'promise-callback-timing': `
### 💡 Problem Breakdown
A crucial rule of Promises is that \`.then()\` callbacks are *always* executed asynchronously in the microtask queue, even if the promise is already resolved. This ensures a consistent and predictable execution order.

### ⚙️ Solution Walkthrough
A \`.then()\` is attached to an already resolved promise.
\`\`\`javascript
console.log('A');
Promise.resolve().then(() => console.log('C'));
console.log('B');

// Output: A, B, C
\`\`\`
Even though the promise is already resolved when \`.then()\` is called, the callback ('C') is placed in the microtask queue and waits for the current synchronous code ('B') to finish executing.

### 📚 Key Concepts
-   **Asynchronous Execution**: Promise callbacks never run synchronously.
`,
  'async-function-composition': `
### 💡 Problem Breakdown
"Composition" is the process of combining functions where the output of one becomes the input of the next. This is straightforward to do with async functions using \`async/await\`.

### ⚙️ Solution Walkthrough
A \`composedFunction\` awaits the result of the first function and passes it to the second.
\`\`\`javascript
async function getUser(id) { /* ... returns a user object promise */ }
async function getPosts(user) { /* ... returns user's posts promise */ }

async function getPostsForUser(id) {
  const user = await getUser(id);
  const posts = await getPosts(user);
  return posts;
}
\`\`\`
### 📚 Key Concepts
-   **Function Composition**: A fundamental pattern for building complex logic from smaller pieces. \`async/await\` makes this pattern clean for asynchronous operations.
`,
  'promise-all-vs-allsettled': `
### 💡 Problem Breakdown
This is a conceptual comparison of two promise combinators.
- **\`Promise.all\`**: Use when you have multiple interdependent tasks that must **all** succeed. It's "fail-fast" – if one fails, the whole thing fails immediately. The result is an array of values.
- **\`Promise.allSettled\`**: Use when you have multiple independent tasks and you want to know the outcome of **every single one**, regardless of success or failure. It never rejects. The result is an array of status objects (\`{status, value}\` or \`{status, reason}\`).

### 📚 Key Concepts
-   **Promise Combinators**: Static methods on the \`Promise\` object for working with multiple promises at once.
`,
  'race-vs-any': `
### 💡 Problem Breakdown
This is a conceptual comparison of two similar promise combinators.
- **\`Promise.race\`**: Fulfills or rejects as soon as the **first** promise in the iterable settles (fulfills or rejects). It takes on that first promise's outcome.
- **\`Promise.any\`**: Fulfills as soon as the **first** promise in the iterable **fulfills**. It only rejects if *all* promises in the iterable reject.

Use \`race\` for things like timeouts (race a promise against a rejecting timer). Use \`any\` for redundancy (race multiple sources and take the first one that successfully returns data).

### 📚 Key Concepts
-   **Promise Combinators**: Choosing the right combinator depends on the specific logic you need to implement.
`,
  'async-await-in-foreach-pitfall': `
### 💡 Problem Breakdown
This is a very common pitfall. The \`.forEach()\` array method is not promise-aware. If you use an \`async\` callback with it, \`.forEach\` will **not** wait for the promises to complete. It will start all the operations and then the surrounding code will continue immediately.

### ⚙️ Solution Walkthrough
An example shows that the "Done" log appears before the awaited operations finish.
\`\`\`javascript
async function processArray(arr) {
  arr.forEach(async (item) => {
    await delay(50);
    console.log(item); // This logs later
  });
  console.log('Done'); // This logs first!
}
// The correct way is to use a for...of loop for sequential processing,
// or .map with Promise.all for parallel processing.
\`\`\`
### 📚 Key Concepts
-   **Promise-Awareness**: Standard loops like \`for...of\` work with \`await\`, but functional iteration methods like \`forEach\` do not.
`,
  'async-function-constructor-conceptual': `
### 💡 Problem Breakdown
Similar to the \`Function\` constructor, there is an \`AsyncFunction\` constructor for creating async functions from strings. It is not a global property but can be accessed from the prototype of an async function. It shares all the same security and performance drawbacks as the regular \`Function\` constructor.

### ⚙️ Solution Walkthrough
A conceptual example of its use.
\`\`\`javascript
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

const myAsyncFunc = new AsyncFunction('a', 'b', 'return await Promise.resolve(a + b);');

myAsyncFunc(2, 3).then(console.log); // 5
\`\`\`
### 📚 Key Concepts
-   **Dynamic Function Creation**: A rarely used feature for creating functions from strings at runtime.
`,
  'await-in-conditional': `
### 💡 Problem Breakdown
The \`await\` keyword is an expression that resolves to a value. As such, it can be used anywhere a value is expected, including inside an \`if\` statement or a ternary operator.

### ⚙️ Solution Walkthrough
\`await\` is used within a ternary operator.
\`\`\`javascript
async function checkCondition() {
  const someCondition = true;
  
  const result = someCondition 
    ? await Promise.resolve("A") 
    : await Promise.resolve("B");
    
  return result; // "A"
}
\`\`\`
### 📚 Key Concepts
-   **\`await\` as an Expression**: \`await\` is not just a statement; it's an operator that evaluates to the resolved value of a promise.
`,
  'promise-chain-return-value': `
### 💡 Problem Breakdown
A promise chain is itself a promise. The final state and value of that chain are determined by the last handler in the chain.
- If the last handler is a \`.then()\` and it returns a value, the chain resolves with that value.
- If the last handler is a \`.catch()\` and it returns a value, the chain **resolves** with that value (effectively "handling" the error).
- If a handler throws an error or returns a rejected promise, the chain rejects.

### ⚙️ Solution Walkthrough
A \`.catch()\` block handles an error and returns a default value, causing the final promise to resolve.
\`\`\`javascript
const p = Promise.reject("Initial Error")
  .catch(err => {
    // We handle the error and return a normal value
    return "Default Value"; 
  })
  .then(val => {
    return \`Final value is: \${val}\`;
  });

// p will resolve with "Final value is: Default Value"
\`\`\`
### 📚 Key Concepts
-   **Error Handling and Recovery**: A \`.catch()\` block can be used to recover from an error in a promise chain and allow it to continue with a successful outcome.
`,
  'async-mutex-conceptual': `
### 💡 Problem Breakdown
A Mutex (Mutual Exclusion lock) is a mechanism to ensure that only one piece of code can access a "critical section" or resource at a time. This can be implemented for async operations using a promise chain to queue up tasks.

### ⚙️ Solution Walkthrough
A conceptual \`Mutex\` class.
\`\`\`javascript
class Mutex {
  constructor() {
    this.lock = Promise.resolve();
  }
  
  acquire(asyncFn) {
    this.lock = this.lock
      .then(() => asyncFn())
      .catch(() => {}); // Prevent unhandled rejections from breaking the lock
    return this.lock;
  }
}
// Usage:
// const mutex = new Mutex();
// mutex.acquire(() => criticalTask1());
// mutex.acquire(() => criticalTask2()); // This will wait for task1 to finish
\`\`\`
Each new task is chained onto the \`lock\` promise. The \`.then()\` ensures that the new task doesn't start until the previous one has finished.

### 📚 Key Concepts
-   **Concurrency Control**: A pattern for managing access to a shared resource to prevent race conditions.
`,
  'promise-withresolvables': `
### 💡 Problem Breakdown
\`Promise.withResolvables()\` is a new static method (ES2024) that creates a promise and exposes its \`resolve\` and \`reject\` functions. This is a convenience method that simplifies patterns where you need to create a promise and resolve/reject it from outside the constructor's scope.

### ⚙️ Solution Walkthrough
The method is used to create a "deferred" promise.
\`\`\`javascript
const { promise, resolve, reject } = Promise.withResolvables();

// We can now use the promise
promise.then(console.log);

// And resolve it from somewhere else, later
setTimeout(() => resolve("Resolved from outside!"), 100);
\`\`\`
This avoids having to define \`let resolveFunc;\` outside the scope of a \`new Promise\` constructor.

### 📚 Key Concepts
-   **\`Promise.withResolvables()\`**: A new utility for creating promises where the settlement functions are needed externally.
`,
  'fetch-response-types': `
### 💡 Problem Breakdown
The \`Response\` object returned by \`fetch\` has several methods to parse the response body in different formats. The most common are:
- **\`.json()\`**: Parses the body as JSON, returning a promise that resolves with a JavaScript object.
- **\`.text()\`**: Parses the body as raw text, returning a promise that resolves with a string.
- **\`.blob()\`**: Returns a promise that resolves with a \`Blob\` object, which represents raw, binary data. This is useful for images, files, etc.
- **\`.formData()\`**: Returns a promise that resolves with \`FormData\`, used for form submissions.
- **\`.arrayBuffer()\`**: Returns a promise that resolves with an \`ArrayBuffer\`, for low-level binary data manipulation.

### 📚 Key Concepts
-   **Data Formats**: Understanding how data is represented and how to parse it is crucial for working with APIs.
`,
  'messagechannel-conceptual': `
### 💡 Problem Breakdown
The \`MessageChannel\` API provides a way to create a two-way, asynchronous communication channel between two different JavaScript contexts (like a main window and an iframe, or two Web Workers).

### ⚙️ Solution Walkthrough
A channel is created, and its ports are used for communication.
\`\`\`javascript
const channel = new MessageChannel();
const port1 = channel.port1;
const port2 = channel.port2;

// In Context 1 (e.e., main window)
port1.onmessage = event => console.log('Msg from context 2:', event.data);

// Send port2 to Context 2 (e.e., an iframe)
iframe.contentWindow.postMessage('init', '*', [port2]);

// In Context 2 (iframe)
// After receiving port2...
port2.onmessage = event => console.log('Msg from context 1:', event.data);
port2.postMessage('Hello from iframe!');
\`\`\`
### 📚 Key Concepts
-   **\`MessageChannel\`**: A Web API for creating a direct communication channel.
-   **Transferable Objects**: \`MessagePort\` objects are "transferable," meaning they can be passed between contexts without being copied, which is highly efficient.
`,
  'web-locks-api-conceptual': `
### 💡 Problem Breakdown
The Web Locks API allows multiple tabs or workers of the same origin to coordinate and prevent race conditions when accessing a shared resource, like IndexedDB or a network resource. It provides an asynchronous, promise-based locking mechanism.

### ⚙️ Solution Walkthrough
A lock is requested for a resource. The async callback function is executed only after the lock is acquired.
\`\`\`javascript
async function updateResource() {
  // The API ensures only one context can run this callback at a time
  // for the resource named 'my_resource'.
  await navigator.locks.request('my_resource', async lock => {
    // Critical section
    const data = await readFromDb();
    data.count++;
    await writeToDb(data);
  });
}
\`\`\`
### 📚 Key Concepts
-   **Web Locks API**: A browser API for managing locks on resources to prevent race conditions.
-   **Race Condition**: A bug that occurs when the outcome of an operation depends on the unpredictable timing of concurrent events.
`,
  'promise-then-onfulfilled-onrejected': `
### 💡 Problem Breakdown
The \`.then()\` method can actually take two arguments: the first is the \`onFulfilled\` callback (for success), and the second is the \`onRejected\` callback (for failure). Using the second argument is an alternative to chaining a \`.catch()\` method.

### ⚙️ Solution Walkthrough
A rejected promise is handled by the second argument of \`.then()\`.
\`\`\`javascript
Promise.reject("Error")
  .then(
    value => console.log('Success:', value), // This is skipped
    reason => console.log('Rejected:', reason) // This is called
  );
\`\`\`
**Note**: A key difference is that a \`.catch()\` at the end of a chain will catch rejections from *any* preceding \`.then()\`, whereas the \`onRejected\` handler only catches rejections from the promise it's directly attached to.

### 📚 Key Concepts
-   **\`.then(onFulfilled, onRejected)\`**: The full signature of the \`.then()\` method.
`,
  'async-await-return-promise': `
### 💡 Problem Breakdown
This is a conceptual clarification. An \`async\` function is syntactic sugar for a function that returns a promise. Therefore, \`await\`ing an \`async\` function is functionally identical to \`await\`ing a regular function that explicitly returns a promise.

### ⚙️ Solution Walkthrough
Two equivalent functions are shown.
\`\`\`javascript
// Async function (implicitly returns a promise)
async function fn1() {
  return "data";
}

// Regular function that explicitly returns a promise
function fn2() {
  return Promise.resolve("data");
}

// Both can be used identically:
// const result = await fn1();
// const result = await fn2();
\`\`\`
### 📚 Key Concepts
-   **\`async/await\`**: Syntactic sugar that simplifies working with promises.
`,
  'broadcast-channel-conceptual': `
### 💡 Problem Breakdown
The \`BroadcastChannel\` API provides a simple way for different browsing contexts (tabs, windows, iframes, workers) of the **same origin** to send and receive messages. It's a one-to-many communication system.

### ⚙️ Solution Walkthrough
A channel is created with the same name in two different tabs.
\`\`\`javascript
// --- In Tab 1 ---
const bc = new BroadcastChannel('app_channel');
bc.postMessage('User logged in!');

// --- In Tab 2 ---
const bc = new BroadcastChannel('app_channel');
bc.onmessage = (event) => {
  console.log('Received message:', event.data); // 'User logged in!'
};
\`\`\`
### 📚 Key Concepts
-   **\`BroadcastChannel\`**: A browser API for cross-context communication on the same origin.
`,
  'what-is-a-macrotask-conceptual': `
### 💡 Problem Breakdown
This is a core concept of the event loop. A **macrotask** (also called a "task") represents a distinct, self-contained piece of work that the JavaScript engine needs to do. The event loop picks one macrotask from its queue in each "tick."

### ⚙️ Solution Walkthrough
Common examples of macrotasks include:
-   Executing the main script itself.
-   A callback for \`setTimeout\` or \`setInterval\`.
-   A callback for a user event, like a \`click\` or \`keydown\`.
-   I/O operations in Node.js.
-   The browser's rendering cycle (style, layout, paint).

After one macrotask completes, the engine will run all available microtasks before starting the next macrotask.

### 📚 Key Concepts
-   **Macrotask Queue**: The primary queue for asynchronous events in the JavaScript runtime.
`,
  'what-is-a-microtask-conceptual': `
### 💡 Problem Breakdown
A **microtask** is a short function that needs to run immediately after the currently executing script finishes, but before the browser has a chance to do other things like rendering or running the next macrotask. They have a higher priority than macrotasks.

### ⚙️ Solution Walkthrough
Common examples of microtasks include:
-   A callback for a promise's \`.then()\`, \`.catch()\`, or \`.finally()`.
-   Callbacks for \`MutationObserver\`.
-   Functions queued with \`queueMicrotask()\`.
-   Callbacks for \`process.nextTick()\` in Node.js (which has even higher priority than other microtasks).

The entire microtask queue is always emptied after each macrotask completes.

### 📚 Key Concepts
-   **Microtask Queue**: A high-priority queue that allows for immediate follow-up actions to the currently executing code.
`,
  'queuemicrotask-api': `
### 💡 Problem Breakdown
The \`queueMicrotask()\` global function provides a standard way to queue a function to be executed as a microtask. This is useful when you want to ensure a piece of code runs asynchronously but before the next macrotask (like \`setTimeout\`).

### ⚙️ Solution Walkthrough
The execution order is compared with \`setTimeout\`.
\`\`\`javascript
console.log('Sync 1');

setTimeout(() => console.log('Timeout (Macro)'), 0);
queueMicrotask(() => console.log('Microtask'));

console.log('Sync 2');

// Output: Sync 1, Sync 2, Microtask, Timeout (Macro)
\`\`\`
### 📚 Key Concepts
-   **\`queueMicrotask()\`**: A browser and Node.js API for queuing microtasks directly.
`,
  'promise-unwrapping-conceptual': `
### 💡 Problem Breakdown
This is a key feature of promise chains that prevents nesting. If you return a promise (\`p2\`) from inside a \`.then()\` handler, the chain doesn't simply resolve with the \`p2\` promise object. Instead, the chain "unwraps" \`p2\`, waits for it to settle, and then adopts its final state and value.

### ⚙️ Solution Walkthrough
A \`.then()\` handler returns another promise.
\`\`\`javascript
Promise.resolve()
  .then(() => {
    return new Promise(res => setTimeout(() => res("Inner resolved"), 200));
  })
  .then(result => {
    // 'result' is the *resolved value* of the inner promise ("Inner resolved"),
    // not the promise object itself.
    console.log(result);
  });
\`\`\`
### 📚 Key Concepts
-   **Promise Flattening**: This "unwrapping" behavior is what keeps promise chains flat and readable.
`,
  'async-pool-pattern-conceptual': `
### 💡 Problem Breakdown
An async pool (or concurrency limiter) is a pattern used to process a large number of asynchronous tasks while limiting the number of tasks that run concurrently. This is crucial for avoiding rate limits on an API or overwhelming a system with too many open connections.

### ⚙️ Solution Walkthrough
A conceptual implementation.
1.  You have a list of all tasks to be run.
2.  You have a pool of "workers," which is a small array (e.e., of size 5).
3.  Start the first 5 tasks from the list.
4.  Each time a task completes, it picks the next available task from the main list and starts it.
5.  This can be managed using \`Promise.all()\` on the worker pool or with more complex promise chain logic to ensure a worker always has a task if one is available.

### 📚 Key Concepts
-   **Concurrency Control**: A pattern for managing the execution of multiple async tasks to control resource usage.
`,
};