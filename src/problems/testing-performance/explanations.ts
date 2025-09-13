export const explanations: Record<string, string> = {
  "big-o-time-complexity-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about Big-O notation, a fundamental concept in computer science used to describe the performance or complexity of an algorithm. **Time Complexity** specifically describes how the execution time of an algorithm scales as the size of its input grows.

### ⚙️ Solution Walkthrough
Big-O describes the worst-case scenario. Here's a comparison of common complexities:
-   **O(1) - Constant Time**: The algorithm takes the same amount of time regardless of the input size.
    \`\`\`javascript
    // Accessing an array element by its index is O(1)
    function getElement(arr, index) { return arr[index]; }
    \`\`\`
-   **O(n) - Linear Time**: The runtime is directly proportional to the size of the input (\`n\`). If the input doubles, the runtime roughly doubles.
    \`\`\`javascript
    // Searching through an array is O(n)
    function findValue(arr, value) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
      }
    }
    \`\`\`
-   **O(n²) - Quadratic Time**: The runtime is proportional to the square of the input size. This is common with nested loops.
    \`\`\`javascript
    // Checking for duplicate values with a nested loop is O(n²)
    function hasDuplicates(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) return true;
        }
      }
    }
    \`\`\`

### 📚 Key Concepts
-   **Time Complexity**: A way of describing how the runtime of an algorithm grows as the input size grows.
-   **Scalability**: Understanding Big-O helps you choose algorithms that will perform well as data scales.
`,
  "big-o-space-complexity-conceptual": `
### 💡 Problem Breakdown
**Space Complexity** describes the amount of memory space an algorithm requires as a function of its input size. It's the other side of algorithmic analysis, complementing time complexity.

### ⚙️ Solution Walkthrough
-   **O(1) - Constant Space**: The algorithm uses a fixed amount of memory, regardless of the input size. The space used does not grow with \`n\`.
    \`\`\`javascript
    // This function only uses a few variables, regardless of the array's size.
    function sumArray(arr) {
      let total = 0;
      for (const num of arr) { total += num; }
      return total;
    }
    \`\`\`
-   **O(n) - Linear Space**: The memory usage is directly proportional to the input size.
    \`\`\`javascript
    // This function creates a new array of the same size as the input.
    function doubleArray(arr) {
      const newArr = [];
      for (const num of arr) {
        newArr.push(num * 2);
      }
      return newArr;
    }
    \`\`\`

### 📚 Key Concepts
-   **Space Complexity**: A measure of the memory an algorithm uses.
-   **In-Place**: An algorithm that has O(1) space complexity is called an "in-place" algorithm (though sometimes it allows for a small, logarithmic amount of extra space).
`,
  "unit-test-jest-conceptual": `
### 💡 Problem Breakdown
Unit testing is the practice of testing small, isolated pieces of code (the "units") to ensure they work as expected. This helps catch bugs early and provides confidence when refactoring code. Jest is a popular JavaScript testing framework. The goal here is to understand the basic structure of a Jest test file.

### ⚙️ Solution Walkthrough
The solution shows two conceptual files: the code to be tested and the test file itself.

**File 1: \`sum.js\` (The Code)**
\`\`\`javascript
const sum = (a, b) => a + b;
module.exports = sum; // Using CommonJS export for the example
\`\`\`
**File 2: \`sum.test.js\` (The Test)**
\`\`\`javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
\`\`\`
1.  **Convention**: Jest automatically finds and runs files named \`*.test.js\` or \`*.spec.js\`.
2.  **\`test(name, fn)\`**: The main Jest function for defining a test case. The name should describe what the test is supposed to do.
3.  **\`expect(value)\`**: The \`expect\` function is the core of every assertion. You wrap the result of your function call in it.
4.  **\`.toBe(expectedValue)\`**: This is a "matcher" function. It uses strict equality (\`===\`) to check if the result is exactly \`3\`. If it is, the test passes. If not, it fails.

### 📚 Key Concepts
-   **Unit Test**: A test that verifies the behavior of a small, isolated piece of code.
-   **Assertion**: A statement that a condition is expected to be true. In Jest, assertions are made using \`expect\` and matchers.
-   **Matcher**: Functions that let you validate values in different ways (e.g., \`.toBe()\`, \`.toEqual()\`, \`.toBeTruthy()\`).
`,
  "test-driven-development-conceptual": `
### 💡 Problem Breakdown
Test-Driven Development (TDD) is a software development process that reverses the traditional "write code, then test" workflow. In TDD, you write a test *before* you write the code to implement the feature. This process is often called the "Red-Green-Refactor" cycle.

### ⚙️ Solution Walkthrough
The TDD cycle for creating a \`subtract\` function would be:
1.  **Red**: Write a failing test first.
    \`\`\`javascript
    // subtract.test.js
    test('subtracts 5 - 2 to equal 3', () => {
      expect(subtract(5, 2)).toBe(3);
    });
    // Running this test will fail because \`subtract\` doesn't exist yet.
    \`\`\`
2.  **Green**: Write the absolute minimum amount of code to make the test pass.
    \`\`\`javascript
    // subtract.js
    const subtract = (a, b) => a - b;
    // Now, the test will pass.
    \`\`\`
3.  **Refactor**: Look at the code you wrote. Can it be improved, cleaned up, or optimized? Make those changes while ensuring the test still passes. This step builds a robust and maintainable codebase.

### 📚 Key Concepts
-   **TDD**: A development methodology that uses tests to drive the design and implementation of software. It provides a safety net for refactoring and ensures high test coverage.
`,
  "jest-matchers-conceptual": `
### 💡 Problem Breakdown
"Matchers" are the methods you call on the object returned by \`expect()\` in a Jest test. They let you assert different things about your values.

### ⚙️ Solution Walkthrough
A demonstration of some of the most common matchers:
\`\`\`javascript
test('demonstrates common matchers', () => {
  const name = "Alice";
  const user = { name: "Alice", age: 30 };
  const user2 = { name: "Alice", age: 30 };
  
  // .toBe() - for strict equality (===) with primitives
  expect(name).toBe("Alice");
  
  // .toEqual() - for deep equality of objects or arrays
  expect(user).toEqual(user2);
  
  // .toBeTruthy() / .toBeFalsy() - for checking truthiness
  expect(name).toBeTruthy();
  expect(0).toBeFalsy();
  
  // .toContain() - for checking if an array contains an item
  expect(['a', 'b', 'c']).toContain('b');
});
\`\`\`
### 📚 Key Concepts
-   **Matcher**: A function provided by a testing framework to perform a specific type of assertion. Jest has a rich library of matchers for almost any situation.
`,
  "jest-mocking-conceptual": `
### 💡 Problem Breakdown
When writing a **unit test**, you want to test a single piece of code in isolation. If that code has dependencies (like making an API call or calling another complex function), you don't want to actually execute those dependencies. "Mocking" is the process of replacing a dependency with a "mock" – a fake version that you can control.

### ⚙️ Solution Walkthrough
We want to test a function that calls an API. We mock the API call so we can test our function's logic without making a real network request.
\`\`\`javascript
// --- api.js ---
export const fetchData = () => { /* ... makes a real API call ... */ };

// --- my-function.js ---
import { fetchData } from './api';
export const processData = async () => {
  const data = await fetchData();
  return data.toUpperCase();
};

// --- my-function.test.js ---
import { fetchData } from './api';
import { processData } from './my-function';

jest.mock('./api'); // Mocks the entire api module

test('processData should uppercase the fetched data', async () => {
  // We control the mock's return value for this test
  fetchData.mockResolvedValue("hello");
  
  const result = await processData();
  
  expect(result).toBe("HELLO");
});
\`\`\`
### 📚 Key Concepts
-   **Mocking**: The technique of replacing real dependencies with controlled fakes during testing.
-   **Isolation**: Mocks are essential for isolating the "unit" under test.
`,
  "performance-now": `
### 💡 Problem Breakdown
The \`performance.now()\` method provides a high-resolution timestamp, measured in milliseconds, from a fixed point in time (the start of the page load). It's more accurate and reliable for measuring performance than using \`Date.now()\`, which is based on the system clock and can be subject to changes.

### ⚙️ Solution Walkthrough
The duration of an operation is measured by taking timestamps before and after.
\`\`\`javascript
const start = performance.now();

// Perform some work that takes time
for (let i = 0; i < 1000000; i++) {
  // ...
}

const end = performance.now();
const duration = end - start;
console.log(\`Operation took \${duration.toFixed(4)} milliseconds.\`);
\`\`\`
### 📚 Key Concepts
-   **Performance API**: A browser API for measuring web application performance.
-   **High-Resolution Time**: Provides timestamps accurate to fractions of a millisecond, which is crucial for fine-grained performance measurement.
`,
  "console-time": `
### 💡 Problem Breakdown
\`console.time()\` and \`console.timeEnd()\` provide a simple, convenient way to measure the duration of an operation without manually calculating the difference between timestamps.

### ⚙️ Solution Walkthrough
A timer is started with a label, and then stopped with the same label. The browser automatically calculates and logs the duration.
\`\`\`javascript
// Start a timer with a specific label
console.time('my-operation');

// Perform some work
for (let i = 0; i < 1000000; i++) {
  // ...
}

// Stop the timer and log the result
console.timeEnd('my-operation');
// Console output: my-operation: 3.52ms (or similar)
\`\`\`
### 📚 Key Concepts
-   **\`console\` API**: The \`console\` object has many useful methods for debugging beyond just \`.log()\`.
`,
  "memoization-performance": `
### 💡 Problem Breakdown
Memoization is an optimization technique where you cache the results of expensive, pure function calls. When the same function is called again with the same inputs, the cached result is returned instantly, avoiding re-computation. This is a form of trading memory (for the cache) for speed.

### ⚙️ Solution Walkthrough
A higher-order function \`memoize\` wraps the expensive function.
\`\`\`javascript
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    
    console.log("Computing...");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const slowFib = (n) => { /* ... */ };
const fastFib = memoize(slowFib);
fastFib(40); // Logs "Computing..."
fastFib(40); // Does not log, returns cached result instantly.
\`\`\`
### 📚 Key Concepts
-   **Caching**: A general performance technique.
-   **Pure Functions**: Memoization is only safe to use on pure functions, as their output is guaranteed to be the same for the same input.
`,
  "tree-shaking-performance": `
### 💡 Problem Breakdown
This is a conceptual problem about a performance optimization performed by modern module bundlers like Vite or Webpack. "Tree shaking" is a form of dead code elimination. Because ES Modules use a static \`import\`/\`export\` syntax, the bundler can analyze the entire dependency graph *before* executing any code.

### ⚙️ Solution Walkthrough
A bundler can see exactly which functions are imported and used.
\`\`\`javascript
// --- In file: utils.js ---
export function add() { /* ... */ }
export function subtract() { /* ... */ } // This is unused

// --- In file: main.js ---
import { add } from './utils.js';
console.log(add(2, 3));

// --- In the final bundled output file ---
// The bundler sees that 'subtract' was never imported or used.
// It will be completely removed from the final production code,
// resulting in a smaller file size and faster load times.
\`\`\`
### 📚 Key Concepts
-   **Tree Shaking**: A dead-code elimination optimization.
-   **Static Analysis**: The process of analyzing code without executing it, which is what enables tree shaking for ES Modules.
`,
  "code-splitting-performance": `
### 💡 Problem Breakdown
"Code-splitting" is a performance optimization technique where a module bundler is configured to split the application's code into multiple smaller files ("chunks") instead of one large bundle. These chunks can then be "lazy-loaded" on demand.

### ⚙️ Solution Walkthrough
The main benefit is improved initial page load time.
1.  **Initial Load**: The user only has to download the essential code needed for the initial page view (e.g., the login page).
2.  **On Demand**: When the user navigates to a different part of the application (e.g., the dashboard), the JavaScript chunk for the dashboard is then loaded dynamically.
This is typically implemented using the dynamic \`import()\` syntax, which bundlers understand and use as split points.

### 📚 Key Concepts
-   **Code-Splitting**: A key performance pattern for modern web applications.
-   **Lazy Loading**: The practice of delaying the loading of resources until they are needed.
`,
  "browser-profiling-conceptual": `
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
  "memory-leaks-debugging-conceptual": `
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
  "debouncing-performance": `
### 💡 Problem Breakdown
Debouncing is a rate-limiting technique. It ensures that a function is only executed *after* a certain period of inactivity. This is extremely useful for events that can fire rapidly, like keyboard input in a search bar. You don't want to send an API request for every single keystroke, but rather only after the user has stopped typing for a moment.

### ⚙️ Solution Walkthrough
A higher-order function \`debounce\` is created. It uses a closure to store a timer ID.
\`\`\`javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId); // Clear the previous timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
\`\`\`
### 📚 Key Concepts
-   **Debouncing**: A performance pattern to delay execution until a series of events has stopped.
`,
  "throttling-performance": `
### 💡 Problem Breakdown
Throttling is another rate-limiting technique. It ensures that a function is executed at most *once* per specified time interval. This is useful for events that fire continuously, like \`scroll\` or \`mousemove\`, where you want to react periodically but not for every single event.

### ⚙️ Solution Walkthrough
A higher-order function \`throttle\` uses a closure to store a "cooling down" flag.
\`\`\`javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
\`\`\`
### 📚 Key Concepts
-   **Throttling**: A performance pattern to guarantee that a function is not executed more than once per a given time period.
`,
  "performance-observer-conceptual": `
### 💡 Problem Breakdown
The \`PerformanceObserver\` API provides a way to asynchronously listen for performance measurement events as they are recorded by the browser. This is a more efficient way to collect performance data than manually polling for it.

### ⚙️ Solution Walkthrough
An observer is created to listen for specific types of performance entries.
\`\`\`javascript
// Create a callback function
const observerCallback = (list) => {
  for (const entry of list.getEntries()) {
    console.log(\`Name: \${entry.name}, Duration: \${entry.duration}\`);
  }
};

// Create a new observer
const observer = new PerformanceObserver(observerCallback);

// Tell the observer what to look for
observer.observe({ entryTypes: ["measure", "paint", "navigation"] });
\`\`\`
Now, whenever the browser records a new performance entry of the specified types (e.g., from \`performance.measure()\` or a First Contentful Paint), the callback will be invoked.

### 📚 Key Concepts
-   **\`PerformanceObserver\`**: A browser API for subscribing to performance measurement events.
`,
  "web-vitals-conceptual": `
### 💡 Problem Breakdown
Core Web Vitals are a set of specific, user-centric metrics that Google uses to measure a page's overall user experience. They are:
1.  **LCP (Largest Contentful Paint)**: Measures **loading** performance. It reports the render time of the largest image or text block visible within the viewport. A good LCP is 2.5 seconds or less.
2.  **INP (Interaction to Next Paint)**: Measures **interactivity**. It measures the latency of all user interactions throughout a page's lifecycle. A good INP is 200 milliseconds or less. (This replaced FID).
3.  **CLS (Cumulative Layout Shift)**: Measures **visual stability**. It quantifies how much unexpected layout shifts occur as the page loads. A good CLS score is 0.1 or less.

### 📚 Key Concepts
-   **User Experience (UX)**: These metrics are designed to quantify real-world user experience rather than just technical timings.
`,
  "integration-testing-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a level of the testing pyramid. While unit tests check individual functions in isolation, **integration tests** verify that multiple units work together as expected. They are a crucial step to ensure that the "contracts" between different parts of your application are being met.

### ⚙️ Solution Walkthrough
A conceptual example for a simple e-commerce app:
-   **Units**: You might have a \`Cart\` module and a \`ProductAPI\` module.
-   **Integration Test**: An integration test would verify that when you call the \`addToCart\` function (from the \`Cart\` module), it correctly calls the \`fetchProduct\` function (from the \`ProductAPI\` module) to get the product details before adding the item to the cart state. It tests the interaction *between* the two modules.

### 📚 Key Concepts
-   **Integration Testing**: The phase in software testing in which individual software modules are combined and tested as a group.
`,
  "e2e-testing-conceptual": `
### 💡 Problem Breakdown
End-to-End (E2E) testing is the highest level of the testing pyramid. Its purpose is to test the entire application from start to finish, simulating a real user workflow. It verifies that all the integrated pieces of the system (front-end, back-end, database, APIs) work together correctly in a production-like environment.

### ⚙️ Solution Walkthrough
A test is written using a tool like Cypress or Playwright, which automates a real browser.
\`\`\`javascript
// Conceptual E2E test with Cypress-like syntax
it('should allow a user to log in and see the dashboard', () => {
  cy.visit('/login'); // 1. Visit the login page
  cy.get('input[name="email"]').type('test@example.com'); // 2. Fill out the form
  cy.get('input[name="password"]').type('password123');
  cy.get('button[type="submit"]').click(); // 3. Click submit
  
  // 4. Assert that the page navigated and the correct content is shown
  cy.url().should('include', '/dashboard');
  cy.contains('h1', 'Welcome to your Dashboard');
});
\`\`\`
### 📚 Key Concepts
-   **End-to-End Testing**: A methodology used to test whether the flow of an application is performing as designed from start to finish.
`,
  "critical-rendering-path-conceptual": `
### 💡 Problem Breakdown
The Critical Rendering Path (CRP) refers to the sequence of steps the browser must take to convert the HTML, CSS, and JavaScript into pixels on the screen. Optimizing this path is the key to achieving a fast initial page load and a good user experience.

### ⚙️ Solution Walkthrough
The main steps in the CRP are:
1.  **DOM Construction**: The browser parses the HTML into the Document Object Model (DOM).
2.  **CSSOM Construction**: The browser parses the CSS into the CSS Object Model (CSSOM).
3.  **Render Tree**: The DOM and CSSOM are combined into a Render Tree, which contains only the nodes required to render the page.
4.  **Layout (Reflow)**: The browser calculates the size and position of each object in the Render Tree.
5.  **Paint**: The browser paints the pixels to the screen.

**Optimization**: To optimize the CRP, you want to minimize anything that blocks these steps. For example, loading CSS asynchronously or inlining critical CSS can speed up the construction of the Render Tree. Deferring JavaScript execution prevents it from blocking the DOM construction.

### 📚 Key Concepts
-   **Critical Rendering Path (CRP)**: The sequence of steps required to render the initial view of a web page.
`,
  "big-o-logarithmic-time": `
### 💡 Problem Breakdown
O(log n) or logarithmic time complexity is a hallmark of highly efficient algorithms. It means that the time it takes to run the algorithm increases logarithmically as the input size \`n\` grows. In practical terms, for every doubling of the input size, the number of operations only increases by a constant amount.

### ⚙️ Solution Walkthrough
**Binary Search** is the classic example.
\`\`\`javascript
function binarySearch(sortedArr, target) {
  let left = 0, right = sortedArr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === target) return mid;
    if (sortedArr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
\`\`\`
With each comparison, the algorithm discards half of the remaining search space. To search an array of 1,000,000 items, it takes at most 20 comparisons (2^20 ≈ 1,000,000), whereas a linear search would take 1,000,000.

### 📚 Key Concepts
- **Logarithmic Time**: A very desirable time complexity, common in "divide and conquer" algorithms.
`,
  "big-o-log-linear-time": `
### 💡 Problem Breakdown
O(n log n) or log-linear time complexity is a common and very efficient time complexity for sorting algorithms. It's significantly faster than O(n²) but slower than O(n).

### ⚙️ Solution Walkthrough
**Merge Sort** is a classic example.
1.  The "divide" step recursively splits the array in half. This process takes \`log n\` levels of recursion.
2.  The "conquer" step involves merging the sorted halves. At each level of the recursion, every element must be processed once, which takes \`n\` operations.

Combining these gives a time complexity of \`n\` operations done \`log n\` times, resulting in O(n log n).

### 📚 Key Concepts
- **Log-linear Time**: The time complexity of many efficient comparison-based sorting algorithms.
`,
  "jest-async-testing": `
### 💡 Problem Breakdown
Jest needs to know when an asynchronous test has completed. It provides several ways to handle this.

### ⚙️ Solution Walkthrough
-   **Promises**: Return the promise from your test. Jest will wait for it to resolve. Use the \`.resolves\` or \`.rejects\` matchers.
    \`\`\`javascript
    test('the data is peanut butter', () => {
      return fetchData().then(data => {
        expect(data).toBe('peanut butter');
      });
    });
    \`\`\`
-   **Async/Await**: The cleanest approach. Make the test function \`async\` and use \`await\`.
    \`\`\`javascript
    test('the data is peanut butter', async () => {
      const data = await fetchData();
      expect(data).toBe('peanut butter');
    });
    
    test('the fetch fails with an error', async () => {
      await expect(fetchData()).rejects.toThrow('error');
    });
    \`\`\`

### 📚 Key Concepts
- **Asynchronous Testing**: Special syntax is required to ensure the testing framework waits for async operations to complete before ending the test.
`,
  "jest-setup-teardown": `
### 💡 Problem Breakdown
Tests often require some setup work before they run (like creating a database connection or initializing a variable) and cleanup work after they run. Jest provides "hook" functions for this.

### ⚙️ Solution Walkthrough
-   **\`beforeEach(fn)\`**: Runs the function \`fn\` before each test in the file.
-   **\`afterEach(fn)\`**: Runs after each test.
-   **\`beforeAll(fn)\`**: Runs once before any tests in the file.
-   **\`afterAll(fn)\`**: Runs once after all tests in the file.

\`\`\`javascript
let cityDatabase;
beforeEach(() => {
  cityDatabase = initializeCityDatabase();
});
afterEach(() => {
  cityDatabase.clear();
});
test('city database has Vienna', () => {
  expect(cityDatabase.isCity('Vienna')).toBeTruthy();
});
\`\`\`
This ensures each test runs with a fresh, clean database state.

### 📚 Key Concepts
- **Test Hooks**: Functions that run before or after tests to manage state and perform setup/teardown.
`,
  "jest-spies": `
### 💡 Problem Breakdown
A "spy" is a type of mock that allows you to observe a function's behavior (e.g., how many times it was called, what it was called with) without completely replacing its original implementation.

### ⚙️ Solution Walkthrough
\`jest.spyOn()\` is used to create a spy on an object's method.
\`\`\`javascript
const video = {
  play() { return true; }
};

test('plays video', () => {
  const spy = jest.spyOn(video, 'play');
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled(); // Check if the method was called
  expect(isPlaying).toBe(true); // The original implementation still ran

  spy.mockRestore(); // Clean up the spy
});
\`\`\`
### 📚 Key Concepts
- **Spy**: A mock that can also observe the original function's execution.
`,
  "snapshot-testing": `
### 💡 Problem Breakdown
Snapshot testing is a technique used to ensure that your UI (or a large data structure) doesn't change unexpectedly. The first time a test with a snapshot matcher runs, Jest creates a "snapshot" file that stores the output. On subsequent runs, the new output is compared to the stored snapshot.

### ⚙️ Solution Walkthrough
A React component's rendered output is tested against a snapshot.
\`\`\`javascript
import renderer from 'react-test-renderer';
import Link from '../Link';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Jest will create a __snapshots__/Link.test.js.snap file
\`\`\`
If the component's output changes, the test will fail, and you will be prompted to either fix the component or update the snapshot if the change was intentional.

### 📚 Key Concepts
- **Snapshot Testing**: A type of test that compares the output of a component or function against a stored "golden" version.
`,
  "image-optimization-conceptual": `
### 💡 Problem Breakdown
Images are often the largest assets on a web page and can significantly impact load times. Optimizing images is a critical performance strategy.

### ⚙️ Solution Walkthrough
Key techniques include:
1.  **Compression**: Using tools like ImageOptim or online services to reduce the file size of JPGs and PNGs without a significant loss in quality.
2.  **Modern Formats**: Serving images in modern formats like **WebP** or **AVIF**, which offer superior compression compared to older formats. The \`<picture>\` element can be used to provide fallbacks.
3.  **Responsive Images**: Using the \`srcset\` attribute on \`<img>\` tags to provide different image sizes for different screen resolutions, so a mobile device doesn't have to download a huge desktop-sized image.
4.  **Lazy Loading**: Using the \`loading="lazy"\` attribute on \`<img>\` tags to tell the browser to only load images when they are about to scroll into the viewport.

### 📚 Key Concepts
- **Web Performance**: A set of best practices for making websites fast.
`,
  "caching-strategies-conceptual": `
### 💡 Problem Breakdown
Caching is the process of storing copies of files in a temporary storage location so they can be accessed more quickly. Web performance relies heavily on caching.

### ⚙️ Solution Walkthrough
There are several layers of caching:
1.  **Browser Cache**: The browser stores assets locally. This is controlled by HTTP headers sent from the server, primarily \`Cache-Control\`. For example, \`Cache-Control: max-age=31536000\` tells the browser it can reuse the asset for one year.
2.  **CDN (Content Delivery Network)**: A CDN is a network of servers distributed globally. It caches your assets on "edge" servers that are geographically closer to your users, which dramatically reduces network latency.
3.  **Service Worker Cache**: A Service Worker can intercept network requests and serve responses directly from a programmatic cache you control via the Cache API. This enables offline functionality.

### 📚 Key Concepts
- **Caching**: A fundamental technique for improving web performance.
`,
  "virtualization-lists-conceptual": `
### 💡 Problem Breakdown
Rendering a very long list of items (e.g., thousands of rows in a table) can be very slow and consume a lot of memory, as the browser has to create and manage thousands of DOM nodes. Virtualization (or "windowing") is a performance technique to solve this.

### ⚙️ Solution Walkthrough
The core idea is to only render the items that are currently visible in the viewport (the "window").
1.  The component calculates which items should be visible based on the scroll position.
2.  It renders only those items into the DOM.
3.  Large, empty spacer elements are used to create a scrollbar of the correct total size, giving the illusion that all items are present.
4.  As the user scrolls, the component recalculates which items should be visible and re-renders, replacing the old items with the new ones.
Libraries like \`react-window\` and \`react-virtualized\` implement this pattern.

### 📚 Key Concepts
- **Virtualization**: A technique for rendering only a subset of data to improve performance for long lists.
`,
  "bundle-analysis-conceptual": `
### 💡 Problem Breakdown
A "bundle" is the final JavaScript file produced by a bundler like Vite or Webpack. Sometimes, these bundles can become very large, slowing down page load times. A bundle analyzer is a tool that helps you understand what's inside your bundle.

### ⚙️ Solution Walkthrough
A bundle analyzer (like \`webpack-bundle-analyzer\` or \`rollup-plugin-visualizer\`) generates an interactive treemap visualization of your bundle.
-   Each rectangle represents a module from your code or \`node_modules\`.
-   The size of the rectangle is proportional to the size of the module in the final bundle.
This allows you to visually identify:
-   Large dependencies that might be candidates for removal or code-splitting.
-   Duplicate modules that are being included multiple times.
-   Code that you thought was being tree-shaken but is still present.

### 📚 Key Concepts
- **Bundle Analysis**: The process of inspecting the contents of a production bundle to identify opportunities for optimization.
`,
  "first-contentful-paint": `
### 💡 Problem Breakdown
First Contentful Paint (FCP) is a user-centric performance metric that measures the time from when the page starts loading to when any part of the page's content is rendered on the screen. "Content" refers to text, images (including background images), \`<svg>\` elements, or non-white \`<canvas>\` elements.

### ⚙️ Solution Walkthrough
FCP marks the first point in the page load timeline where the user can see *something* on the screen, giving them feedback that the page is loading. A fast FCP helps reassure the user. A good FCP is considered to be 1.8 seconds or less. Optimizing the Critical Rendering Path (especially by ensuring CSS doesn't block rendering for too long) is key to improving FCP.

### 📚 Key Concepts
- **Performance Metrics**: Standardized ways to measure application performance.
- **Perceived Performance**: How fast an application feels to the user, which FCP is a key indicator of.
`,
  "time-to-first-byte": `
### 💡 Problem Breakdown
Time to First Byte (TTFB) is a foundational performance metric that measures the time from when the user initiates a request (e.g., clicking a link) to when the first byte of the HTML document is received by their browser.

### ⚙️ Solution Walkthrough
TTFB is a measure of server responsiveness. A high TTFB can be caused by:
-   Network latency between the user and the server.
-   A slow server that takes a long time to process the request and generate the HTML.
-   Slow database queries that block the server from responding.

Improving TTFB often involves server-side optimizations, database indexing, or using a CDN to reduce network latency. A good TTFB is considered to be under 800 milliseconds.

### 📚 Key Concepts
- **Server Responsiveness**: A measure of how quickly a server can respond to a request.
`,
  "time-to-interactive": `
### 💡 Problem Breakdown
Time to Interactive (TTI) is a performance metric that measures the time from when a page starts loading to when it has become reliably responsive to user input. "Reliably responsive" means that the main thread is not blocked by long tasks and can respond to user interactions (like clicks) within 50ms.

### ⚙️ Solution Walkthrough
TTI marks the point where the page is fully usable. A page might be visually rendered (FCP/LCP), but if a large JavaScript bundle is still being parsed and executed on the main thread, the page will not be interactive. Clicking a button might do nothing. TTI measures when this main-thread work has completed. Optimizing TTI involves reducing the amount of JavaScript that needs to be run on page load, often through code-splitting.

### 📚 Key Concepts
- **Interactivity**: The ability of a page to respond quickly to user input.
`,
  "load-testing-vs-stress-testing": `
### 💡 Problem Breakdown
This is a conceptual problem about two different types of performance testing for a backend system.
- **Load Testing**: The goal is to simulate the *expected* amount of user traffic (and maybe slightly more) to verify that the system performs as expected under normal conditions. It answers the question: "Can our system handle the normal daily load?"
- **Stress Testing**: The goal is to find the system's breaking point. It involves progressively increasing the load far beyond normal operational capacity until the system fails. It answers the question: "How much load can our system handle before it breaks, and how does it recover?"

### 📚 Key Concepts
- **Performance Testing**: A category of testing focused on a system's speed, scalability, and stability.
`,
  "code-coverage": `
### 💡 Problem Breakdown
Code coverage is a metric produced by testing tools (like Jest) that measures what percentage of your codebase is executed when your test suite runs.

### ⚙️ Solution Walkthrough
Coverage reports typically include several metrics:
-   **Statement Coverage**: What percentage of statements in the code have been executed?
-   **Branch Coverage**: What percentage of branches (e.g., the \`if\` and \`else\` blocks of a conditional) have been executed?
-   **Function Coverage**: What percentage of functions have been called?
-   **Line Coverage**: What percentage of executable lines have been run?

**Important**: 100% code coverage does not mean your code is bug-free. It only means the code was *executed*. It doesn't guarantee that you have \`expect\` assertions for all the possible outcomes. However, very low coverage is a strong indicator that you have a high risk of undetected bugs.

### 📚 Key Concepts
- **Test Quality**: Code coverage is one measure of the quality and thoroughness of a test suite.
`,
  "static-analysis-tools": `
### 💡 Problem Breakdown
Static analysis is the process of analyzing code for potential errors *without* actually running the code. This is a powerful way to catch common bugs and enforce code style automatically.
- **Linters (e.g., ESLint)**: A linter analyzes code to find potential bugs, stylistic errors, and suspicious constructs. For example, it can warn you if you use a variable before it's declared or if you have an empty \`catch\` block.
- **Formatters (e.g., Prettier)**: A formatter automatically reformats your code to conform to a consistent style guide (e.g., consistent indentation, line length, quote style). This eliminates debates about style in code reviews and makes the codebase easier to read.

### 📚 Key Concepts
- **Static Analysis**: A key part of a modern development workflow for maintaining high code quality.
`,
  "web-worker-performance": `
### 💡 Problem Breakdown
JavaScript in the browser runs on a single main thread, which is also responsible for rendering the UI and responding to user input. If you run a long-running, CPU-intensive task on this thread, the entire page will freeze. Web Workers are the solution to this problem.

### ⚙️ Solution Walkthrough
A Web Worker allows you to run a script on a separate background thread.
1.  **Main Thread**: The main thread's only job is to create the worker, send it the data it needs to process using \`worker.postMessage()\`, and listen for the final result with \`worker.onmessage\`.
2.  **Worker Thread**: The worker receives the data, performs the long, synchronous, CPU-intensive calculation, and then posts the result back to the main thread.

This ensures that while the heavy calculation is happening, the main thread remains free to handle user input and keep the UI responsive.

### 📚 Key Concepts
- **Multi-threading**: A technique for achieving concurrency.
- **UI Responsiveness**: Offloading long tasks is critical for maintaining a smooth user experience.
`,
  "server-side-rendering-performance": `
### 💡 Problem Breakdown
This is a conceptual problem about an architectural pattern for web applications.
- **Client-Side Rendering (CSR)**: The browser receives a minimal HTML file and a large JavaScript bundle. The JavaScript then runs to fetch data and render the page. The user sees a blank screen or a loading spinner initially.
- **Server-Side Rendering (SSR)**: The server runs the application code, fetches the data, and renders a full HTML page. It sends this complete page to the browser. The browser can display the content immediately, resulting in a much faster **First Contentful Paint (FCP)** and **Largest Contentful Paint (LCP)**.

### ⚙️ Solution Walkthrough
SSR improves perceived performance because the user sees meaningful content much faster. While the page might not be fully interactive until the JavaScript "hydrates" it, the initial loading experience is significantly better. Frameworks like Next.js (for React) and Nuxt.js (for Vue) are built around this principle.

### 📚 Key Concepts
- **Server-Side Rendering (SSR)**: A rendering pattern that improves perceived performance and SEO.
`,
  "cdn-performance": `
### 💡 Problem Breakdown
A Content Delivery Network (CDN) is a geographically distributed network of proxy servers. Its purpose is to provide high availability and performance by distributing content closer to end-users.

### ⚙️ Solution Walkthrough
When you use a CDN for your static assets (JavaScript, CSS, images, fonts):
1.  You upload your assets to an origin server.
2.  The CDN copies these assets to its many "edge" servers located in data centers around the world.
3.  When a user in Japan requests an image, they are served the copy from an edge server in Japan, rather than having to make a long-distance request to a server in the United States.
4.  This dramatically reduces **network latency**, which is the time it takes for data to travel between the user and the server, resulting in much faster load times.

### 📚 Key Concepts
- **Content Delivery Network (CDN)**: A fundamental tool for building high-performance, global websites.
- **Latency**: A key factor in web performance.
`,
  "database-n-plus-one-problem": `
### 💡 Problem Breakdown
The N+1 query problem is a common and severe performance bottleneck that occurs when accessing data from a database, especially with Object-Relational Mappers (ORMs).

### ⚙️ Solution Walkthrough
Imagine you want to display a list of 100 blog posts and their authors.
- **The N+1 Problem**:
  1.  **Query 1**: \`SELECT * FROM posts LIMIT 100;\` (1 query)
  2.  **Loop**: For each of the 100 posts, you then make a separate query to get the author: \`SELECT * FROM users WHERE id = ?;\` (N=100 queries)
  - This results in a total of 101 database queries, which is very slow.

- **The Solution**: Fetch all the required data in a more efficient way.
  - **Using a JOIN**: \`SELECT * FROM posts JOIN users ON posts.author_id = users.id;\` (1 query)
  - **Batching**: Get all the post IDs, then make a second query to get all the required authors at once: \`SELECT * FROM users WHERE id IN ( ...list of author IDs... );\` (2 queries total)

### 📚 Key Concepts
- **Database Performance**: A common source of performance issues in web applications.
`,
  "css-selectors-performance": `
### 💡 Problem Breakdown
This is a conceptual problem about how browsers evaluate CSS selectors. Browsers match selectors from **right to left**. This has important performance implications.

### ⚙️ Solution Walkthrough
-   **Fast Selector**: \` #nav a\`
    - The browser first finds the single element with the ID \`nav\`. Then, it only has to check the descendants of that one element to find the \`a\` tags.
-   **Slow Selector**: \`* > .menu-item\`
    - The browser must first find *every single element* in the entire DOM (\`*\`).
    - For each of those elements, it must then check if its direct parent matches, which is a very expensive operation.

**Rule of thumb**: Make the rightmost part of your selector (the "key") as specific as possible. ID and class selectors are much faster than universal (\`*\`) or attribute selectors.

### 📚 Key Concepts
- **CSS Selector Engine**: Understanding how the browser's engine works can help you write more performant CSS.
`,
  "layout-thrashing-conceptual": `
### 💡 Problem Breakdown
"Layout thrashing" (or forced synchronous layout) is a browser performance issue. The browser's rendering process is normally optimized. However, if you mix DOM "reads" that require layout information (like \`element.offsetHeight\`) with DOM "writes" that change the layout (like \`element.style.width\`), you can force the browser into a cycle of repeated, unnecessary layout calculations.

### ⚙️ Solution Walkthrough
An example of code that causes layout thrashing:
\`\`\`javascript
// BAD: Mixes reads and writes in a loop
for (let i = 0; i < elements.length; i++) {
  // Read: triggers layout calculation
  const width = container.offsetWidth; 
  // Write: invalidates the layout
  elements[i].style.width = width + 'px'; 
}

// GOOD: Batch reads, then batch writes
// Read: calculate width once
const width = container.offsetWidth; 
for (let i = 0; i < elements.length; i++) {
  // Write: only write inside the loop
  elements[i].style.width = width + 'px'; 
}
\`\`\`
### 📚 Key Concepts
- **Layout (Reflow)**: The browser process of calculating the position and size of elements. It is computationally expensive.
`,
  "regression-testing-conceptual": `
### 💡 Problem Breakdown
Regression testing is the process of re-running functional and non-functional tests to ensure that previously developed and tested software still performs correctly after a change. The goal is to catch "regressions" – bugs that were introduced by new code into existing features.

### ⚙️ Solution Walkthrough
1.  A developer fixes a bug or adds a new feature.
2.  Before merging the code, the entire suite of existing unit tests, integration tests, and E2E tests is run automatically by a Continuous Integration (CI) server.
3.  If all the old tests still pass, it provides confidence that the new code has not broken anything that was previously working.
4.  If any test fails, a regression has been introduced and must be fixed.

A comprehensive test suite is the safety net that allows developers to refactor and add features without fear of breaking the application.

### 📚 Key Concepts
- **Regression**: The re-emergence of a bug that was previously fixed.
- **Continuous Integration (CI)**: The practice of automatically running tests on every code change.
`,
  "visual-regression-testing-conceptual": `
### 💡 Problem Breakdown
Visual regression testing is a specific type of regression testing that focuses on the visual appearance of the user interface. It's designed to catch unintended visual changes, such as CSS changes that accidentally affect a component in another part of the application.

### ⚙️ Solution Walkthrough
Tools like Percy or Storybook's snapshot testing work as follows:
1.  **Baseline**: The first time the tests are run, the tool takes screenshots of your UI components and saves them as "baseline" or "golden" images.
2.  **Comparison**: On subsequent test runs (e.g., after a code change), the tool takes new screenshots.
3.  **Diffing**: It then compares the new screenshots to the baseline images pixel by pixel.
4.  **Review**: If any visual differences are found, the test fails. A developer can then review the visual "diff" to see if the change was intentional (and approve the new baseline) or if it was an unintended bug that needs to be fixed.

### 📚 Key Concepts
- **Visual Regression Testing**: An automated process to catch visual bugs.
`,
  "accessibility-testing-conceptual": `
### 💡 Problem Breakdown
Web accessibility (often abbreviated as a11y) is the practice of ensuring that websites and applications are designed and coded in a way that people with disabilities can use them. Accessibility testing is the process of verifying this.

### ⚙️ Solution Walkthrough
Testing involves a combination of automated and manual checks:
- **Automated Tools**: Tools like **Axe** (available as a browser extension or testing library) can be run to automatically catch many common violations of the Web Content Accessibility Guidelines (WCAG), such as missing alt text for images, poor color contrast, or missing form labels.
- **Manual Checks**: These are crucial as automated tools can't catch everything.
  - **Keyboard Navigation**: Can you use the entire site with only the Tab, Enter, and Space keys? Is the focus order logical?
  - **Screen Reader**: Use a screen reader (like VoiceOver on Mac, NVDA on Windows) to navigate the site and ensure the content is read out logically and that all interactive elements are clearly described.

### 📚 Key Concepts
- **Accessibility (a11y)**: The inclusive practice of making web content usable by as many people as possible.
`,
  "fuzz-testing-conceptual": `
### 💡 Problem Breakdown
Fuzz testing (or "fuzzing") is a quality assurance technique used to discover coding errors and security loopholes. It involves providing invalid, unexpected, or random data as input to a computer program and then monitoring for exceptions such as crashes, failing built-in code assertions, or potential memory leaks.

### ⚙️ Solution Walkthrough
A conceptual example for a function that parses a query string.
1.  **Valid Input**: \`parse("?name=test&value=1")\`
2.  **Fuzz Inputs**: A fuzzing tool would automatically generate thousands of malformed inputs to test edge cases, such as:
    - \`parse("?&&&&&")\`
    - \`parse("?name=%00%00%00")\` (null bytes)
    - \`parse("?longstring=...")\` (very long strings)
    - \`parse(12345)\` (wrong input type)
The goal is to see if any of these inputs cause the program to crash or enter an unexpected state, which could indicate a bug or a security vulnerability.

### 📚 Key Concepts
- **Fuzzing**: An automated software testing technique that involves providing random data as input to a program.
`,
  "property-based-testing-conceptual": `
### 💡 Problem Breakdown
Property-based testing is a different way of thinking about testing. Instead of writing tests for specific inputs and expecting a specific output, you define a *property* of your function that should hold true for *all* valid inputs. The testing framework then generates hundreds of random inputs to try and find a "counter-example" that falsifies the property.

### ⚙️ Solution Walkthrough
Testing a \`sort\` function.
-   **Example-based test**: \`expect(sort([3,1,2])).toEqual([1,2,3]);\`
-   **Property-based test**:
    1.  **Property**: "The output array should have the same length as the input array."
    2.  **Property**: "Every element in the output array should be less than or equal to the element that follows it."
    3.  **Property**: "The output array should contain the exact same elements as the input array."

The framework (like \`fast-check\` in JavaScript) will then generate many different arrays (empty, long, with duplicates, etc.) to see if it can break these properties.

### 📚 Key Concepts
- **Property-Based Testing**: A testing methodology that focuses on the general properties of a function rather than specific examples.
`,
  "mutation-testing-conceptual": `
### 💡 Problem Breakdown
Mutation testing is a technique for evaluating the quality and effectiveness of your test suite. It works by making small, deliberate changes ("mutations") to your source code and then running your tests.

### ⚙️ Solution Walkthrough
1.  **Mutation**: A mutation testing tool (like Stryker) takes your code, for example \`a > b\`, and creates a "mutant" by changing it to \`a < b\` or \`a >= b\`.
2.  **Run Tests**: It then runs your entire test suite against this mutated code.
3.  **Analysis**:
    - If your tests **fail**, the mutant is considered "killed." This is good! It means your tests were able to detect the defect.
    - If your tests **still pass**, the mutant "survived." This is bad! It indicates a weakness in your test suite, as it couldn't detect the introduced bug.

The goal is to achieve a high "mutation score" by writing tests that are robust enough to kill as many mutants as possible.

### 📚 Key Concepts
- **Mutation Testing**: A technique to assess the quality of tests.
`,
  "alpha-beta-testing-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about two different phases of user testing before a full software launch.
- **Alpha Testing**: This is the first phase of user testing, and it's performed **internally** by the organization developing the software. The testers are usually employees (developers, QA engineers, product managers). The goal is to find bugs and get early feedback on usability in a controlled environment.
- **Beta Testing**: This is the second phase of user testing, where the software is released to a **limited external audience** of real users. This is often an open or invite-only "beta program." The goal is to get feedback from a wider range of users on different devices and in real-world scenarios before the official public release.

### 📚 Key Concepts
- **Software Release Lifecycle**: The process of developing, testing, and releasing software.
`,
  "performance-budget-conceptual": `
### 💡 Problem Breakdown
A performance budget is a set of constraints that are defined by a development team to ensure that a web application remains fast and responsive over time. It's a proactive approach to performance management.

### ⚙️ Solution Walkthrough
A performance budget consists of defined limits for key metrics. For example, a team might agree that:
-   The total JavaScript bundle size must not exceed 170 KB.
-   The Largest Contentful Paint (LCP) must occur within 2.5 seconds.
-   The total number of HTTP requests on initial load must be under 50.
-   The Lighthouse performance score must not drop below 90.

These budgets can be automatically enforced in a Continuous Integration (CI) pipeline. If a code change causes a metric to exceed the budget, the build will fail, forcing the team to address the performance regression before it gets to production.

### 📚 Key Concepts
- **Performance Budget**: A set of limits on performance metrics that a team agrees not to exceed.
`,
};
