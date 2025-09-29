import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "ehd-try-catch-basic",
    title: "Basic `try...catch`",
    description:
      "Write a function that intentionally throws an error and use a `try...catch` block to catch it and return a custom message.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run try...catch",
    difficulty: "Beginner",
  },
  // problem--> 02
  {
    id: "ehd-reference-error",
    title: "Catch a `ReferenceError`",
    description:
      "Write code that tries to access an undeclared variable and catch the specific `ReferenceError`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Trigger ReferenceError",
    difficulty: "Beginner",
  },
  // problem--> 03
  {
    id: "ehd-type-error",
    title: "Catch a `TypeError`",
    description:
      "Write code that tries to call a method on `null` and catch the specific `TypeError`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Trigger TypeError",
    difficulty: "Beginner",
  },
  // problem--> 04
  {
    id: "ehd-throw-string",
    title: "Throwing a String",
    description:
      "Use the `throw` statement to throw a simple string value and catch it. Note: This is generally considered bad practice.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Throw String",
    difficulty: "Beginner",
  },
  // problem--> 05
  {
    id: "ehd-throw-error-object",
    title: "Throwing an `Error` Object",
    description:
      "Use the `throw` statement with a `new Error()` object and inspect its `name` and `message` properties in the `catch` block.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Throw Error Object",
    difficulty: "Beginner",
  },
  // problem--> 06
  {
    id: "ehd-try-catch-finally",
    title: "`try...catch...finally`",
    description:
      "Demonstrate a `try...catch...finally` block. Show that the `finally` block executes whether an error was thrown or not.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run with Finally",
    difficulty: "Beginner",
  },
  // problem--> 07
  {
    id: "ehd-finally-after-return",
    title: "`finally` After `return`",
    description:
      "Show that the `finally` block executes even if the `try` or `catch` block has a `return` statement.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test `finally` with return",
    difficulty: "Intermediate",
  },
  // problem--> 08
  {
    id: "ehd-custom-error-class",
    title: "Custom Error Class",
    description:
      "Create a custom error class (e.g., `ValidationError`) that extends the built-in `Error` class.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Throw Custom Error",
    difficulty: "Intermediate",
  },
  // problem--> 09
  {
    id: "ehd-instanceof-error",
    title: "Checking Error Type with `instanceof`",
    description:
      "Throw a custom error and use `instanceof` in the `catch` block to handle it differently from a generic `Error`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Check Error Type",
    difficulty: "Intermediate",
  },
  // problem--> 10
  {
    id: "ehd-json-parse-error",
    title: "Handling `JSON.parse` Errors",
    description:
      "Use a `try...catch` block to handle the `SyntaxError` that occurs when parsing an invalid JSON string.",
    category: "Error Handling and Debugging",
    inputs: [
      {
        id: "json",
        label: "JSON String",
        type: "text",
        defaultValue: '{"key": "value"}',
      },
    ],
    buttonText: "Parse JSON",
    difficulty: "Beginner",
  },
  // problem--> 11
  {
    id: "ehd-error-message-property",
    title: "The Error `message` Property",
    description:
      "Create an error with a specific message and log only the `message` property in the `catch` block.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log Message",
    difficulty: "Beginner",
  },
  // problem--> 12
  {
    id: "ehd-error-name-property",
    title: "The Error `name` Property",
    description:
      "Catch a `TypeError` and log its `name` property to see the type of error.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log Error Name",
    difficulty: "Beginner",
  },
  // problem--> 13
  {
    id: "ehd-error-stack-property",
    title: "The Error `stack` Property",
    description:
      "Catch an error and log its `stack` property to see the function call stack trace.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log Stack Trace",
    difficulty: "Intermediate",
  },
  // problem--> 14
  {
    id: "ehd-range-error",
    title: "Catch a `RangeError`",
    description:
      "Write code that creates a `RangeError` (e.g., by creating an array with an invalid length) and catch it.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Trigger RangeError",
    difficulty: "Intermediate",
  },
  // problem--> 15
  {
    id: "ehd-uri-error",
    title: "Catch a `URIError`",
    description:
      "Write code that uses an invalid value with a URI function (like `decodeURIComponent`) to trigger a `URIError` and catch it.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Trigger URIError",
    difficulty: "Intermediate",
  },
  // problem--> 16
  {
    id: "ehd-rethrowing-error",
    title: "Rethrowing an Error",
    description:
      "In a `catch` block, catch an error, log it, and then rethrow it to be handled by a higher-level error handler.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Rethrow Error",
    difficulty: "Intermediate",
  },
  // problem--> 17
  {
    id: "ehd-defensive-programming-null-check",
    title: "Defensive Programming: Null Check",
    description:
      "Write a function that safely accesses an object's property only after checking that the object is not `null` or `undefined`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run Check",
    difficulty: "Beginner",
  },
  // problem--> 18
  {
    id: "ehd-defensive-programming-type-check",
    title: "Defensive Programming: Type Check",
    description:
      "Write a function that only performs an operation if its argument is of the expected type (e.g., a number), throwing an error otherwise.",
    category: "Error Handling and Debugging",
    inputs: [
      { id: "input", label: "Input Value", type: "text", defaultValue: "5" },
    ],
    buttonText: "Process Input",
    difficulty: "Beginner",
  },
  // problem--> 19
  {
    id: "ehd-finally-with-error",
    title: "`finally` When an Error is Thrown",
    description:
      "Show that the `finally` block executes after a `try` block fails and the `catch` block runs.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test with Error",
    difficulty: "Beginner",
  },
  // problem--> 20
  {
    id: "ehd-optional-chaining-for-safety",
    title: "Optional Chaining (`?.`) for Safety",
    description:
      "Use optional chaining to safely access a deeply nested property that may not exist, avoiding a `TypeError`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Safely Access Property",
    difficulty: "Intermediate",
  },
  // problem--> 21
  {
    id: "ehd-error-in-event-listener",
    title: "Error in an Event Listener",
    description:
      "Show that a `try...catch` block in the code that *adds* an event listener does not catch errors that occur *inside* the event listener's callback itself.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate",
    difficulty: "Intermediate",
  },
  // problem--> 22
  {
    id: "ehd-error-in-setTimeout-callback",
    title: "Error in a `setTimeout` Callback",
    description:
      "Show that a `try...catch` block does not catch errors thrown asynchronously in a `setTimeout` callback. The error must be handled inside the callback.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate",
    difficulty: "Intermediate",
  },
  // problem--> 23
  {
    id: "ehd-catch-block-scope",
    title: "Scope of the `catch` Block Variable",
    description:
      "Demonstrate that the error variable declared in a `catch` block is only scoped to that block.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Scope",
    difficulty: "Beginner",
  },
  // problem--> 24
  {
    id: "ehd-throw-in-finally",
    title: "Throwing from a `finally` Block",
    description:
      "Show what happens when an error is thrown from a `finally` block, and how it can mask an original error.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test `throw` in `finally`",
    difficulty: "Advanced",
  },
  // problem--> 25
  {
    id: "ehd-validation-function",
    title: "Validation Function Pattern",
    description:
      "Create a function that validates an object based on a schema and throws a custom error if validation fails.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Validate User",
    difficulty: "Intermediate",
  },
  // problem--> 26
  {
    id: "ehd-promise-catch",
    title: "Promise `.catch()`",
    description:
      "Create a promise that rejects and handle the rejection using the `.catch()` method.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run Promise",
    difficulty: "Beginner",
  },
  // problem--> 27
  {
    id: "ehd-async-await-try-catch",
    title: "`async/await` with `try...catch`",
    description:
      "Use an `async` function and `await` a rejecting promise, handling the error with a `try...catch` block.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run Async Function",
    difficulty: "Intermediate",
  },
  // problem--> 28
  {
    id: "ehd-promise-chain-catch",
    title: "Error Handling in Promise Chains",
    description:
      "Show how a single `.catch()` at the end of a promise chain can handle a rejection from any of the preceding `.then()` blocks.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Chain Catch",
    difficulty: "Intermediate",
  },
  // problem--> 29
  {
    id: "ehd-promise-all-rejection",
    title: "`Promise.all()` Rejection",
    description:
      "Demonstrate that `Promise.all()` is 'fail-fast' and rejects as soon as any of its input promises reject.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Rejection",
    difficulty: "Intermediate",
  },
  // problem--> 30
  {
    id: "ehd-promise-allsettled",
    title: "Handling All Outcomes with `Promise.allSettled()`",
    description:
      "Use `Promise.allSettled()` to wait for all promises to complete, and then inspect the results array to see which ones were fulfilled and which were rejected.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run allSettled",
    difficulty: "Intermediate",
  },
  // problem--> 31
  {
    id: "ehd-fetch-error-handling",
    title: "Handling `fetch` Errors",
    description:
      "Demonstrate how to properly handle HTTP errors (like 404 Not Found) with `fetch`, which requires checking the `response.ok` property because it doesn't cause a promise rejection.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Fetch Error",
    difficulty: "Intermediate",
  },
  // problem--> 32
  {
    id: "ehd-unhandled-rejection-conceptual",
    title: "Unhandled Rejection (Conceptual)",
    description:
      "Explain what an 'unhandled promise rejection' is and why it's important to always have a `.catch()` on a promise chain.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Beginner",
  },
  // problem--> 33
  {
    id: "ehd-async-error-propagation",
    title: "Async Error Propagation",
    description:
      "Show that if an awaited function throws an error, the error propagates up and can be caught by a `try...catch` block in the calling `async` function.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Propagation",
    difficulty: "Intermediate",
  },
  // problem--> 34
  {
    id: "ehd-console-log",
    title: "Basic `console.log`",
    description:
      "Use `console.log` to print a variable's value to the browser console for simple debugging.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log to Console",
    difficulty: "Beginner",
  },
  // problem--> 35
  {
    id: "ehd-console-error",
    title: "`console.error`",
    description:
      "Use `console.error` to log an error message to the console, which is often styled differently and may include a stack trace.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log an Error",
    difficulty: "Beginner",
  },
  // problem--> 36
  {
    id: "ehd-console-warn",
    title: "`console.warn`",
    description: "Use `console.warn` to log a warning message to the console.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log a Warning",
    difficulty: "Beginner",
  },
  // problem--> 37
  {
    id: "ehd-console-table",
    title: "`console.table`",
    description:
      "Use `console.table` to display an array of objects in a tabular format in the console for easy inspection.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log as Table",
    difficulty: "Intermediate",
  },
  // problem--> 38
  {
    id: "ehd-debugger-statement",
    title: "`debugger` Statement",
    description:
      "Use the `debugger` statement in your code to programmatically create a breakpoint, pausing execution if the browser's developer tools are open.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Trigger Debugger",
    difficulty: "Beginner",
  },
  // problem--> 39
  {
    id: "ehd-promise-any-rejection",
    title: "`Promise.any()` with All Rejections",
    description:
      "Demonstrate that `Promise.any()` rejects with an `AggregateError` if all of the input promises reject.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test `any` Rejection",
    difficulty: "Advanced",
  },
  // problem--> 40
  {
    id: "ehd-error-cause-property",
    title: "Error `cause` Property",
    description:
      "Create a new `Error` with a `cause` property to chain errors, showing how to wrap a low-level error in a more descriptive high-level one.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Error Cause",
    difficulty: "Advanced",
  },
  // problem--> 41
  {
    id: "ehd-aggregate-error",
    title: "`AggregateError`",
    description:
      "Manually create and throw an `AggregateError` to group multiple errors into a single error object.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Throw AggregateError",
    difficulty: "Advanced",
  },
  // problem--> 42
  {
    id: "ehd-console-group",
    title: "`console.group` and `console.groupEnd`",
    description:
      "Use `console.group()` to create an indented, collapsible group of log messages in the console.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log Grouped Messages",
    difficulty: "Intermediate",
  },
  // problem--> 43
  {
    id: "ehd-console-time",
    title: "`console.time` and `console.timeEnd`",
    description:
      "Use `console.time()` and `console.timeEnd()` to measure the duration of a specific operation.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Measure Duration",
    difficulty: "Intermediate",
  },
  // problem--> 44
  {
    id: "ehd-console-assert",
    title: "`console.assert`",
    description:
      "Use `console.assert()` to log an error message to the console only if an assertion is false.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run Assertion",
    difficulty: "Intermediate",
  },
  // problem--> 45
  {
    id: "ehd-window-onerror",
    title: "`window.onerror` (Conceptual)",
    description:
      "Explain how to set up a global error handler for uncaught synchronous errors using `window.onerror`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 46
  {
    id: "ehd-window-onunhandledrejection",
    title: "`window.onunhandledrejection` (Conceptual)",
    description:
      "Explain how to set up a global handler for unhandled promise rejections using `window.onunhandledrejection`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 47
  {
    id: "ehd-conditional-breakpoint-conceptual",
    title: "Conditional Breakpoints (Conceptual)",
    description:
      "Explain how to set a conditional breakpoint in browser developer tools to pause execution only when a specific condition is met.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 48
  {
    id: "ehd-logpoints-conceptual",
    title: "Logpoints (Conceptual)",
    description:
      "Explain what a logpoint is in browser dev tools and how it allows you to log values to the console without modifying your code.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 49
  {
    id: "ehd-call-stack-inspection-conceptual",
    title: "Call Stack Inspection (Conceptual)",
    description:
      "Explain how the Call Stack panel in developer tools helps you trace the execution path that led to a breakpoint.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Beginner",
  },
  // problem--> 50
  {
    id: "ehd-scope-inspection-conceptual",
    title: "Scope Inspection (Conceptual)",
    description:
      "Explain how the Scope panel in developer tools allows you to inspect the values of variables in the local, closure, and global scopes.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Beginner",
  },
  // problem--> 51
  {
    id: "ehd-async-stack-trace-conceptual",
    title: "Async Stack Traces (Conceptual)",
    description:
      "Explain how modern developer tools provide 'async stack traces' that link asynchronous operations across different turns of the event loop.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 52
  {
    id: "ehd-source-maps-conceptual",
    title: "Source Maps (Conceptual)",
    description:
      "Explain what a source map is and how it enables you to debug your original, un-minified source code in the browser.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 53
  {
    id: "ehd-network-panel-debugging-conceptual",
    title: "Network Panel Debugging (Conceptual)",
    description:
      "Explain how to use the Network panel to inspect API requests, check their status codes, and view their response payloads for debugging.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 54
  {
    id: "ehd-graceful-degradation-conceptual",
    title: "Graceful Degradation (Conceptual)",
    description:
      "Explain the concept of graceful degradation, where you catch an error from an optional feature (like a third-party API) and allow the main application to continue functioning.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 55
  {
    id: "ehd-async-retry-pattern",
    title: "Async Retry Pattern",
    description:
      "Implement a function that attempts an async operation multiple times with a delay if it fails, a common pattern for handling transient network errors.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Retry",
    difficulty: "Advanced",
  },
  // problem--> 56
  {
    id: "ehd-timeout-with-promise-race",
    title: "Implementing a Timeout with `Promise.race`",
    description:
      "Create a function that takes a promise and a timeout duration, and rejects if the promise doesn't resolve within the given time.",
    category: "Error Handling and Debugging",
    inputs: [
      {
        id: "timeout",
        label: "Timeout (ms)",
        type: "number",
        defaultValue: 100,
      },
    ],
    buttonText: "Test Timeout",
    difficulty: "Advanced",
  },
  // problem--> 57
  {
    id: "ehd-finally-in-async",
    title: "`finally` in `async/await`",
    description:
      "Demonstrate that a `finally` block in a `try...catch` statement within an `async` function executes regardless of whether the awaited promise resolves or rejects.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Async `finally`",
    difficulty: "Intermediate",
  },
  // problem--> 58
  {
    id: "ehd-dom-exception-conceptual",
    title: "`DOMException` (Conceptual)",
    description:
      "Explain what a `DOMException` is and provide examples of Web APIs that throw it (e.g., `AbortController`, `querySelector`).",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 59
  {
    id: "ehd-debugging-off-by-one-error",
    title: "Debugging an Off-by-One Error",
    description:
      "Analyze a `for` loop that uses `<=` instead of `<` with an array's length, causing an out-of-bounds access, and fix it.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Fix Loop",
    difficulty: "Beginner",
  },
  // problem--> 60
  {
    id: "ehd-debugging-mutation",
    title: "Debugging Unintended Mutation",
    description:
      "Analyze code where a function mutates an object passed by reference, leading to unexpected behavior in the calling code, and fix it by creating a copy.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Fix Mutation",
    difficulty: "Intermediate",
  },
  // problem--> 61
  {
    id: "ehd-debugging-closure-loop",
    title: "Debugging a Closure in a Loop",
    description:
      "Analyze the classic problem of using `var` in a loop with callbacks, and fix it by changing `var` to `let`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Fix Closure",
    difficulty: "Intermediate",
  },
  // problem--> 62
  {
    id: "ehd-debugging-floating-point",
    title: "Debugging Floating Point Inaccuracy",
    description:
      "Demonstrate the `0.1 + 0.2 !== 0.3` issue and show how to compare floating-point numbers safely using a small epsilon value.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Compare Floats",
    difficulty: "Intermediate",
  },
  // problem--> 63
  {
    id: "ehd-debugging-this-context",
    title: "Debugging `this` Context",
    description:
      "Analyze a class method passed as a callback that loses its `this` context, and fix it using `.bind()` or an arrow function field.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Fix `this`",
    difficulty: "Intermediate",
  },
  // problem--> 64
  {
    id: "ehd-circuit-breaker-pattern-conceptual",
    title: "Circuit Breaker Pattern (Conceptual)",
    description:
      "Explain the Circuit Breaker design pattern for handling repeated failures when communicating with a remote service.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 65
  {
    id: "ehd-abortcontroller-fetch",
    title: "AbortController with Fetch",
    description:
      "Demonstrate how to use an `AbortController` to cancel an in-flight `fetch` request and catch the resulting `AbortError`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Abortable Fetch",
    difficulty: "Advanced",
  },
  // problem--> 66
  {
    id: "ehd-type-guard-function",
    title: "Type Guard Function",
    description:
      "Write a user-defined type guard function in TypeScript to narrow down the type of a variable and avoid runtime errors.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate Type Guard",
    difficulty: "Advanced",
  },
  // problem--> 67
  {
    id: "ehd-never-type-conceptual",
    title: "The `never` Type (Conceptual)",
    description:
      "Explain TypeScript's `never` type and its use in exhaustive checks within `switch` statements to catch unhandled cases at compile time.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 68
  {
    id: "ehd-optional-catch-binding",
    title: "Optional `catch` Binding",
    description:
      "Show the modern syntax where you can omit the binding variable in a `catch` block if you don't need to use the error object.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test `catch {}`",
    difficulty: "Intermediate",
  },
  // problem--> 69
  {
    id: "ehd-debugging-regex",
    title: "Debugging a Regular Expression",
    description:
      "Analyze a complex regular expression that isn't matching as expected and use an online regex debugger tool (conceptually) to fix it.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Debug Regex",
    difficulty: "Intermediate",
  },
  // problem--> 70
  {
    id: "ehd-error-boundary-react-conceptual",
    title: "Error Boundaries in React (Conceptual)",
    description:
      "Explain what an Error Boundary is in a React application and how it's used to catch JavaScript errors in its child component tree.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 71
  {
    id: "ehd-performance-profiling-conceptual",
    title: "Performance Profiling (Conceptual)",
    description:
      "Explain how to use the Performance or Profiler tab in browser dev tools to find and debug performance bottlenecks like slow functions.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 72
  {
    id: "ehd-memory-leak-debugging-conceptual",
    title: "Memory Leak Debugging (Conceptual)",
    description:
      "Explain how to use the Memory tab and heap snapshots in browser dev tools to identify and debug memory leaks caused by detached DOM nodes or closures.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 73
  {
    id: "ehd-structured-logging-conceptual",
    title: "Structured Logging (Conceptual)",
    description:
      "Explain the benefits of structured logging (e.g., logging JSON objects instead of plain strings) for easier parsing and analysis in production environments.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 74
  {
    id: "ehd-sentry-integration-conceptual",
    title: "Error Monitoring Services (Conceptual)",
    description:
      "Explain the role of third-party error monitoring services like Sentry or Bugsnag in aggregating, alerting, and providing context for production errors.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 75
  {
    id: "ehd-fail-safe-default-value",
    title: "Fail-Safe Default Value",
    description:
      "In a function that parses data, use a `try...catch` block to return a sensible default value if the parsing fails, preventing the error from crashing the application.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Parse Safely",
    difficulty: "Intermediate",
  },
  // problem--> 76
  {
    id: "ehd-top-level-await-rejection",
    title: "Top-Level `await` Rejection",
    description:
      "Show that an unhandled rejection from a top-level `await` in an ES module will prevent that module and any dependent modules from executing.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate",
    difficulty: "Advanced",
  },
  // problem--> 77
  {
    id: "ehd-finally-and-async-return",
    title: "`finally` and `async` Return Value",
    description:
      "Demonstrate that if a `finally` block in an `async` function returns a value, it will override the value returned from the `try` block.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Return",
    difficulty: "Advanced",
  },
  // problem--> 78
  {
    id: "ehd-assert-function",
    title: "Creating an `assert` Function",
    description:
      "Create a simple `assert` function that throws an error if a condition is not met. This is useful for validating invariants during development.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Assertion",
    difficulty: "Intermediate",
  },
  // problem--> 79
  {
    id: "ehd-stack-overflow-error",
    title: "Stack Overflow Error",
    description:
      "Write a recursive function without a proper base case to trigger a 'Maximum call stack size exceeded' error.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Trigger Stack Overflow",
    difficulty: "Intermediate",
  },
  // problem--> 80
  {
    id: "ehd-heap-out-of-memory-conceptual",
    title: "Heap Out of Memory (Conceptual)",
    description:
      "Explain what a 'heap out of memory' error is and how it can be caused by creating an extremely large data structure in a loop.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 81
  {
    id: "ehd-uncaught-exception-node-conceptual",
    title: "`process.on('uncaughtException')` (Conceptual)",
    description:
      "Explain the purpose of the `uncaughtException` event in Node.js and why it's generally recommended to let the process crash instead of trying to continue.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 82
  {
    id: "ehd-unhandled-rejection-node-conceptual",
    title: "`process.on('unhandledRejection')` (Conceptual)",
    description:
      "Explain the `unhandledRejection` event in Node.js and its different modes (e.g., `throw`, `warn`).",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 83
  {
    id: "ehd-domains-node-conceptual",
    title: "Node.js `domain` Module (Conceptual)",
    description:
      "Explain the deprecated `domain` module in Node.js and its original purpose for handling errors in a specific execution context.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 84
  {
    id: "ehd-async-hooks-conceptual",
    title: "Node.js `async_hooks` (Conceptual)",
    description:
      "Explain the `async_hooks` module in Node.js for tracking the lifecycle of asynchronous resources, a powerful tool for advanced debugging.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 85
  {
    id: "ehd-error-normalization-conceptual",
    title: "Error Normalization (Conceptual)",
    description:
      "Explain the practice of 'normalizing' errors, where different types of errors (e.g., from APIs, database, validation) are caught and re-thrown as a consistent, application-specific error type.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 86
  {
    id: "ehd-idempotent-operations-conceptual",
    title: "Idempotent Operations (Conceptual)",
    description:
      "Explain idempotency in the context of error handling, where retrying an operation has the same effect as performing it once, preventing issues from duplicate requests after a failure.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 87
  {
    id: "ehd-transactional-rollback-conceptual",
    title: "Transactional Rollback (Conceptual)",
    description:
      "Explain the concept of a transaction, where a series of operations must all succeed or all fail together. If an error occurs, a 'rollback' is performed to undo the completed steps.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 88
  {
    id: "ehd-observability-conceptual",
    title: "Observability (Conceptual)",
    description:
      "Explain the three pillars of observability (logs, metrics, and traces) and how they provide a comprehensive view for debugging complex distributed systems.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 89
  {
    id: "ehd-post-mortem-debugging-conceptual",
    title: "Post-Mortem Debugging (Conceptual)",
    description:
      "Explain the process of post-mortem debugging, where developers analyze logs, core dumps, and other artifacts after a system has failed to determine the root cause.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 90
  {
    id: "ehd-race-condition-debugging-conceptual",
    title: "Race Condition Debugging (Conceptual)",
    description:
      "Explain what a race condition is and discuss strategies for debugging these difficult, timing-dependent issues.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 91
  {
    id: "ehd-debugging-memory-corruption-conceptual",
    title: "Memory Corruption Debugging (Conceptual)",
    description:
      "Explain the concept of memory corruption and how tools like Valgrind or AddressSanitizer are used in other languages to debug it, and what the equivalents are in a memory-managed language like JS (e.g., heap snapshots).",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 92
  {
    id: "ehd-deadlock-debugging-conceptual",
    title: "Deadlock Debugging (Conceptual)",
    description:
      "Explain what a deadlock is (e.g., two processes waiting for a resource the other holds) and how to debug it by analyzing resource dependency graphs.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 93
  {
    id: "ehd-flaky-test-debugging-conceptual",
    title: "Debugging Flaky Tests (Conceptual)",
    description:
      "Discuss strategies for debugging 'flaky' tests, which pass sometimes and fail others, often due to race conditions, timing issues, or unmanaged state.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 94
  {
    id: "ehd-chaos-engineering-conceptual",
    title: "Chaos Engineering (Conceptual)",
    description:
      "Explain Chaos Engineering as a discipline of experimenting on a system to build confidence in its ability to withstand turbulent conditions in production.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 95
  {
    id: "ehd-async-mutex-pattern",
    title: "Async Mutex Pattern",
    description:
      "Implement a simple async mutex to ensure that only one async operation can access a critical section of code at a time.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Mutex",
    difficulty: "Advanced",
  },
  // problem--> 96
  {
    id: "ehd-error-in-promise-constructor",
    title: "Error in Promise Constructor",
    description:
      "Show that an error thrown synchronously inside a Promise executor function causes the promise to be rejected.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 97
  {
    id: "ehd-overriding-console-log-conceptual",
    title: "Overriding `console.log` (Conceptual)",
    description:
      "Explain how and why you might override `console.log` in a production environment to send logs to a remote service instead of the browser console.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 98
  {
    id: "ehd-proxy-for-debugging",
    title: "Proxy for Debugging",
    description:
      "Create a `Proxy` with `get` and `set` traps that log all property accesses and modifications on an object, acting as a powerful debugging tool.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Logging Proxy",
    difficulty: "Advanced",
  },
  // problem--> 99
  {
    id: "ehd-console-trace",
    title: "`console.trace`",
    description:
      "Use `console.trace()` to log a message along with a stack trace to the console, showing how the function was called.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Trace Function Call",
    difficulty: "Intermediate",
  },
  // problem--> 100
  {
    id: "ehd-debugging-binary-search",
    title: "Debugging Binary Search",
    description:
      "Analyze a common off-by-one error in a binary search implementation (e.g., `left <= right` vs `left < right`) and fix it.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Fix Binary Search",
    difficulty: "Intermediate",
  },
  // problem--> 101
  {
    id: "ehd-debugging-incorrect-regex",
    title: "Debugging an Incorrect Regex",
    description:
      "Analyze a regular expression meant to validate a username that is too permissive (e.g., allows symbols) and correct it.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Fix Regex",
    difficulty: "Intermediate",
  },
  // problem--> 102
  {
    id: "ehd-console-dir",
    title: "`console.dir`",
    description:
      "Use `console.dir` to display an interactive, expandable list of an object's properties in the console.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log Object with dir",
    difficulty: "Intermediate",
  },
  // problem--> 103
  {
    id: "ehd-dom-breakpoint-conceptual",
    title: "DOM Change Breakpoints (Conceptual)",
    description:
      "Explain how to set a breakpoint in browser dev tools that pauses execution when a specific DOM node is modified (subtree, attribute, or node removal).",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 104
  {
    id: "ehd-event-listener-breakpoint-conceptual",
    title: "Event Listener Breakpoints (Conceptual)",
    description:
      "Explain how to use the Event Listener Breakpoints panel in dev tools to pause on the code that runs after a specific event (like a 'click').",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },

  // problem--> 105
  {
    id: "ehd-xhr-breakpoint-conceptual",
    title: "XHR/Fetch Breakpoints (Conceptual)",
    description:
      "Explain how to set a breakpoint that pauses execution whenever any `fetch` request is made or when a request to a specific URL is made.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 106
  {
    id: "ehd-watch-expression-conceptual",
    title: "Watch Expressions (Conceptual)",
    description:
      "Explain how the Watch panel in dev tools allows you to monitor the value of a variable or expression over time as you step through code.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Beginner",
  },
  // problem--> 107
  {
    id: "ehd-promise-that-never-settles",
    title: "Promise That Never Settles",
    description:
      "Create a promise that never calls `resolve` or `reject`. Show how this can cause an application to hang.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate",
    difficulty: "Intermediate",
  },
  // problem--> 108
  {
    id: "ehd-error-in-promise-then",
    title: "Error Thrown in `.then()`",
    description:
      "Show that a synchronous error thrown inside a `.then()` handler will cause the returned promise to reject.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 109
  {
    id: "ehd-error-in-async-function",
    title: "Error Thrown in `async` function",
    description:
      "Show that throwing a synchronous error inside an `async` function returns a rejected promise.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 110
  {
    id: "ehd-debugging-z-index",
    title: "Debugging a z-index Issue (Conceptual)",
    description:
      "Explain the common CSS debugging scenario where an element is not clickable due to another element with a higher `z-index` covering it, and how to use dev tools to find the culprit.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 111
  {
    id: "ehd-debugging-cors-error",
    title: "Debugging a CORS Error (Conceptual)",
    description:
      "Explain what a CORS (Cross-Origin Resource Sharing) error is, why it occurs, and how to debug it by checking the `Access-Control-Allow-Origin` header in the Network panel.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 112
  {
    id: "ehd-debugging-type-coercion",
    title: "Debugging Type Coercion",
    description:
      "Analyze code where a `+` operator is unintentionally concatenating strings instead of adding numbers, and fix it with explicit type conversion.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Fix Coercion",
    difficulty: "Beginner",
  },
  // problem--> 113
  {
    id: "ehd-console-count",
    title: "`console.count`",
    description:
      "Use `console.count()` inside a loop to count how many times a piece of code is executed.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run Counter",
    difficulty: "Intermediate",
  },
  // problem--> 114
  {
    id: "ehd-console-time-log",
    title: "`console.timeLog`",
    description:
      "Use `console.timeLog()` to log intermediate timestamps for a timer started with `console.time()`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log with Timestamps",
    difficulty: "Intermediate",
  },
  // problem--> 115
  {
    id: "ehd-pretty-print-object",
    title: "Pretty-Print an Object",
    description:
      "Use `JSON.stringify` with its formatting arguments to log a large object to the console in an indented, human-readable format.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Pretty-Print",
    difficulty: "Intermediate",
  },
  // problem--> 116
  {
    id: "ehd-blackboxing-script-conceptual",
    title: "Blackboxing Scripts (Conceptual)",
    description:
      "Explain the 'blackboxing' feature in browser dev tools, which allows you to ignore scripts (like third-party libraries) when stepping through code.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 117
  {
    id: "ehd-dead-code-elimination-conceptual",
    title: "Dead Code Elimination (Conceptual)",
    description:
      "Explain how build tools and linters can help identify 'dead code' (code that is never executed), which can be a source of bugs or maintenance overhead.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 118
  {
    id: "ehd-try-catch-performance-conceptual",
    title: "`try...catch` Performance (Conceptual)",
    description:
      "Explain the potential performance impact of putting `try...catch` blocks inside performance-critical hot loops due to de-optimization in older JS engines.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 119
  {
    id: "ehd-error-in-generator-conceptual",
    title: "Errors in Generators (Conceptual)",
    description:
      "Explain how to throw and catch errors in a generator function using the `.throw()` method on the iterator object.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 120
  {
    id: "ehd-debugging-event-propagation",
    title: "Debugging Event Propagation (Conceptual)",
    description:
      "Explain how to debug issues with event bubbling and capturing (e.g., using `event.stopPropagation()`) by inspecting event listeners in the dev tools.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 121
  {
    id: "ehd-console-dirxml",
    title: "`console.dirxml`",
    description:
      "Use `console.dirxml` to display an interactive XML/HTML tree for a DOM element in the console.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log DOM Element",
    difficulty: "Intermediate",
  },
  // problem--> 122
  {
    id: "ehd-sentinel-value-conceptual",
    title: "Sentinel Values (Conceptual)",
    description:
      "Explain the concept of a 'sentinel value' (a special value used to indicate the end of a sequence or an error condition, like -1 from `.indexOf()`).",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 123
  {
    id: "ehd-async-queue-with-error-handling",
    title: "Async Queue with Error Handling",
    description:
      "Implement a queue that processes async tasks sequentially, ensuring that if one task fails, the entire queue stops and reports the error.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Process Queue",
    difficulty: "Advanced",
  },
  // problem--> 124
  {
    id: "ehd-rubber-duck-debugging-conceptual",
    title: "Rubber Duck Debugging (Conceptual)",
    description:
      "Explain the 'Rubber Duck Debugging' technique, where you solve a problem by explaining it line-by-line to an inanimate object.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Beginner",
  },
  // problem--> 125
  {
    id: "ehd-bisection-method-debugging-conceptual",
    title: "Bisection Method Debugging (Conceptual)",
    description:
      "Explain how to use the bisection method (like a manual binary search) by commenting out halves of the code to quickly isolate the section where a bug is occurring.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 126
  {
    id: "ehd-error-in-web-worker-conceptual",
    title: "Errors in a Web Worker (Conceptual)",
    description:
      "Explain how to handle errors that occur inside a Web Worker by listening for the 'error' event on the worker object in the main thread.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 127
  {
    id: "ehd-debugging-css-cascade",
    title: "Debugging CSS Cascade (Conceptual)",
    description:
      "Explain how to use the 'Computed' and 'Styles' panels in browser dev tools to debug CSS issues by seeing which styles are being applied and which are being overridden.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 128
  {
    id: "ehd-silent-errors-conceptual",
    title: "Silent Errors (Conceptual)",
    description:
      "Explain what 'silent errors' are (e.g., a failed assignment in non-strict mode, an empty catch block) and why they are detrimental to debugging.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 129
  {
    id: "ehd-promise-race-and-memory-leaks-conceptual",
    title: "`Promise.race` and Memory Leaks (Conceptual)",
    description:
      "Explain how a `Promise.race` can lead to a memory leak if the 'losing' promise represents a resource that is never cleaned up.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 130
  {
    id: "ehd-debugging-timing-issues",
    title: "Debugging Timing Issues",
    description:
      "Analyze a scenario where code fails because it tries to access a DOM element before the DOM has fully loaded, and fix it using the `DOMContentLoaded` event.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Fix Timing Issue",
    difficulty: "Intermediate",
  },
  // problem--> 131
  {
    id: "ehd-console-clear",
    title: "`console.clear`",
    description: "Use `console.clear()` to clear the browser console.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Clear Console",
    difficulty: "Beginner",
  },
  // problem--> 132
  {
    id: "ehd-console-countreset",
    title: "`console.countReset`",
    description:
      "Use `console.countReset()` to reset a counter initialized with `console.count()`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run and Reset Counter",
    difficulty: "Intermediate",
  },
  // problem--> 133
  {
    id: "ehd-global-error-vs-unhandledrejection",
    title: "Global Error vs. Unhandled Rejection",
    description:
      "Explain the difference between the `error` event for sync errors and the `unhandledrejection` event for async promise errors.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 134
  {
    id: "ehd-error-in-json-replacer",
    title: "Error in JSON.stringify Replacer",
    description:
      "Show that an error thrown from within a `JSON.stringify` replacer function is not caught by a surrounding `try...catch` block in some environments.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test",
    difficulty: "Advanced",
  },
  // problem--> 135
  {
    id: "ehd-error-in-json-reviver",
    title: "Error in JSON.parse Reviver",
    description:
      "Demonstrate that an error thrown from within a `JSON.parse` reviver function can be caught.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 136
  {
    id: "ehd-invariant-checking-conceptual",
    title: "Invariant Checking (Conceptual)",
    description:
      "Explain the concept of 'invariants' (conditions that should always be true) and how assertion functions can be used to check them during development.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain Invariants",
    difficulty: "Intermediate",
  },
  // problem--> 137
  {
    id: "ehd-heisenbug-conceptual",
    title: "Heisenbug (Conceptual)",
    description:
      "Explain what a 'Heisenbug' is (a bug that seems to disappear or alter its behavior when one tries to study it) and discuss common causes like uninitialized memory or race conditions.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 138
  {
    id: "ehd-idempotency-and-retries",
    title: "Idempotency and Retries",
    description:
      "Explain why making an API endpoint idempotent is crucial when implementing a client-side retry mechanism for POST/PUT requests.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 139
  {
    id: "ehd-error-in-destructuring",
    title: "Error in Destructuring",
    description:
      "Show the `TypeError` that occurs when attempting to destructure `null` or `undefined`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Trigger Error",
    difficulty: "Intermediate",
  },
  // problem--> 140
  {
    id: "ehd-safe-navigation-with-if",
    title: "Safe Navigation with `if` checks",
    description:
      "Show the classic pre-optional-chaining way of safely accessing nested properties using chained `if` or `&&` checks.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate",
    difficulty: "Beginner",
  },
  // problem--> 141
  {
    id: "ehd-logging-levels-conceptual",
    title: "Logging Levels (Conceptual)",
    description:
      "Explain the concept of different logging levels (e.g., DEBUG, INFO, WARN, ERROR, FATAL) and their purpose.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 142
  {
    id: "ehd-async-await-in-foreach-pitfall",
    title: "`await` in `forEach` Pitfall",
    description:
      "Demonstrate that using `await` inside a `.forEach()` callback does not pause the loop, as `.forEach` is not promise-aware. A `for...of` loop should be used instead.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Show Pitfall",
    difficulty: "Intermediate",
  },
  // problem--> 143
  {
    id: "ehd-error-in-promise-all-settled",
    title: "`Promise.allSettled` Never Rejects",
    description:
      "Show that the promise returned by `Promise.allSettled` never rejects, even if all input promises reject.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate",
    difficulty: "Intermediate",
  },
  // problem--> 144
  {
    id: "ehd-debugging-infinite-recursion",
    title: "Debugging Infinite Recursion",
    description:
      "Analyze a recursive function that is missing a base case and explain how the 'Maximum call stack size exceeded' error helps identify the problem.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 145
  {
    id: "ehd-console-time-with-label",
    title: "`console.time` with Label",
    description:
      "Demonstrate using a label with `console.time` and `console.timeEnd` to manage multiple timers simultaneously.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run Timers",
    difficulty: "Intermediate",
  },
  // problem--> 146
  {
    id: "ehd-finally-and-promise-state",
    title: "`finally` and Promise State",
    description:
      "Show that returning a value from `.finally()` does not change the resolved value of the promise chain, but throwing an error does.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test `finally` Return",
    difficulty: "Advanced",
  },
  // problem--> 147
  {
    id: "ehd-debugging-css-specificity",
    title: "Debugging CSS Specificity (Conceptual)",
    description:
      "Explain how to use browser dev tools to debug why a CSS rule isn't being applied by inspecting the specificity of competing selectors.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 148
  {
    id: "ehd-dom-exception-names-conceptual",
    title: "`DOMException` Names (Conceptual)",
    description:
      "List and explain common `DOMException` names like 'NotFoundError', 'NotAllowedError', and 'AbortError'.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain Names",
    difficulty: "Intermediate",
  },
  // problem--> 149
  {
    id: "ehd-promise-chain-no-return",
    title: "Promise Chain without `return`",
    description:
      "Demonstrate the pitfall of not returning a value or promise from a `.then()` handler, which causes the next `.then()` to receive `undefined`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Show Pitfall",
    difficulty: "Intermediate",
  },
  // problem--> 150
  {
    id: "ehd-debugging-api-rate-limits",
    title: "Debugging API Rate Limits (Conceptual)",
    description:
      "Explain how to identify an HTTP 429 'Too Many Requests' error in the Network panel and strategies for handling it (e.g., exponential backoff).",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 151
  {
    id: "ehd-finalization-registry-conceptual",
    title: "`FinalizationRegistry` (Conceptual)",
    description:
      "Explain the `FinalizationRegistry` API, which lets you request a callback to be invoked when an object is garbage collected.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 152
  {
    id: "ehd-weakmap-for-private-data",
    title: "`WeakMap` for Private Data",
    description:
      "Use a `WeakMap` to associate private data with an object instance, a classic pattern for privacy before # fields that also prevents memory leaks.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test `WeakMap` Privacy",
    difficulty: "Advanced",
  },
  // problem--> 153
  {
    id: "ehd-weakset-for-object-tracking",
    title: "`WeakSet` for Object Tracking",
    description:
      "Use a `WeakSet` to keep track of a collection of objects without preventing them from being garbage collected.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test `WeakSet`",
    difficulty: "Advanced",
  },
  // problem--> 154
  {
    id: "ehd-prototype-pollution-conceptual",
    title: "Prototype Pollution (Conceptual)",
    description:
      "Explain the concept of prototype pollution, a vulnerability where an attacker modifies `Object.prototype`, and how to prevent it.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 155
  {
    id: "ehd-revocable-proxy",
    title: "Revocable Proxy",
    description:
      "Use `Proxy.revocable()` to create a proxy that can be turned off, preventing further access to the target object and throwing an error.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Create and Revoke Proxy",
    difficulty: "Advanced",
  },
  // problem--> 156
  {
    id: "ehd-error-in-destructuring-assignment",
    title: "Error in Destructuring Assignment",
    description:
      "Show the `TypeError` that occurs when attempting to destructure `null` or `undefined` during an assignment.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Trigger Error",
    difficulty: "Intermediate",
  },
  // problem--> 157
  {
    id: "ehd-error-in-generator-throw",
    title: "Error Handling in Generators with `.throw()`",
    description:
      "Demonstrate how to inject an error into a generator from the outside using the `.throw()` method on its iterator.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test `.throw()`",
    difficulty: "Advanced",
  },
  // problem--> 158
  {
    id: "ehd-error-in-async-generator",
    title: "Error Handling in Async Generators",
    description:
      "Show how to handle errors in an async generator using a `try...catch` block within the generator and a `.catch()` on the consuming end.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Async Generator Error",
    difficulty: "Advanced",
  },
  // problem--> 159
  {
    id: "ehd-debugging-with-console-groupcollapsed",
    title: "`console.groupCollapsed`",
    description:
      "Use `console.groupCollapsed()` to create a log group that is initially collapsed, useful for reducing console noise.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log Collapsed Group",
    difficulty: "Intermediate",
  },
  // problem--> 160
  {
    id: "ehd-debugging-event-listener-options",
    title: "Debugging Event Listeners with `getEventListeners`",
    description:
      "Explain how to use the browser console's `getEventListeners(element)` utility to inspect all event listeners attached to a DOM element.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain Utility",
    difficulty: "Intermediate",
  },
  // problem--> 161
  {
    id: "ehd-error-cause-chain-inspection",
    title: "Inspecting an Error Cause Chain",
    description:
      "Write a function that traverses the `.cause` property of a series of nested errors to log the full error chain.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Inspect Chain",
    difficulty: "Advanced",
  },
  // problem--> 162
  {
    id: "ehd-suppressed-error-conceptual",
    title: "`SuppressedError` (Conceptual)",
    description:
      "Explain the `SuppressedError` type (ES2023), used by `Promise.any` and in conjunction with `try...catch` with resource management patterns.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 163
  {
    id: "ehd-debugging-css-in-js",
    title: "Debugging CSS-in-JS (Conceptual)",
    description:
      "Discuss strategies for debugging styles generated by CSS-in-JS libraries, such as inspecting generated class names and using source maps.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 164
  {
    id: "ehd-debugging-hydration-errors",
    title: "Debugging Hydration Errors (Conceptual)",
    description:
      "Explain what a hydration error is in the context of Server-Side Rendering (SSR) frameworks like React or Next.js, and how to debug mismatches.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 165
  {
    id: "ehd-static-analysis-tools-conceptual",
    title: "Static Analysis Tools (Conceptual)",
    description:
      "Explain the role of static analysis tools like ESLint and TypeScript in catching errors and potential bugs *before* the code is run.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 166
  {
    id: "ehd-null-object-pattern-conceptual",
    title: "Null Object Pattern (Conceptual)",
    description:
      "Explain the Null Object design pattern, where you create an object that conforms to an interface but does nothing, to avoid constant null checks.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 167
  {
    id: "ehd-debugging-service-workers",
    title: "Debugging Service Workers (Conceptual)",
    description:
      "Discuss the challenges of debugging Service Workers (e.g., caching issues, lifecycle events) and how to use the 'Application' tab in browser dev tools.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 168
  {
    id: "ehd-debugging-event-listeners-leaks",
    title: "Debugging Event Listener Leaks",
    description:
      "Explain how to debug a common memory leak where event listeners are added but never removed, and use dev tools to inspect listeners on an element.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 169
  {
    id: "ehd-error-in-web-assembly-conceptual",
    title: "Error Handling in WebAssembly (Conceptual)",
    description:
      "Explain how JavaScript interoperates with WebAssembly (Wasm) and handles exceptions that are thrown from within a Wasm module.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 170
  {
    id: "ehd-debugging-content-security-policy",
    title: "Debugging CSP Errors (Conceptual)",
    description:
      "Explain what a Content Security Policy (CSP) is and how to debug CSP violation errors that appear in the browser console.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 171
  {
    id: "ehd-debugging-binary-data",
    title: "Debugging Binary Data (Conceptual)",
    description:
      "Discuss strategies for debugging binary data protocols (e.g., from WebSockets or files), such as using `DataView` and logging hex values.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 172
  {
    id: "ehd-defensive-api-design-conceptual",
    title: "Defensive API Design (Conceptual)",
    description:
      "Explain principles of defensive API design, such as validating input, returning consistent error shapes (e.g., `{ error: { message: '...' } }`), and using appropriate HTTP status codes.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 173
  {
    id: "ehd-root-cause-analysis-conceptual",
    title: "Root Cause Analysis (RCA) (Conceptual)",
    description:
      "Explain the Root Cause Analysis process (e.g., the '5 Whys') as a systematic method of post-mortem debugging to find the fundamental cause of a bug, not just its symptoms.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 174
  {
    id: "ehd-debugging-strict-mode-errors",
    title: "Debugging Strict Mode Errors",
    description:
      "Show an example of code that runs silently in non-strict mode but throws an error in strict mode, such as assigning to a non-writable property.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Strict Mode",
    difficulty: "Intermediate",
  },
  // problem--> 175
  {
    id: "ehd-error-in-proxy-trap",
    title: "Error Handling in Proxy Traps",
    description:
      "Show that an error thrown from within a proxy trap (e.g., `get` or `set`) can be caught by a `try...catch` block.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Proxy Trap",
    difficulty: "Advanced",
  },
  // problem--> 176
  {
    id: "ehd-suppressed-error-example",
    title: "`SuppressedError` in Action",
    description:
      "Manually create and throw a `SuppressedError` to demonstrate its structure, which includes an `error` property and a `suppressed` property.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Throw SuppressedError",
    difficulty: "Advanced",
  },
  // problem--> 177
  {
    id: "ehd-debugging-with-object-freeze",
    title: "Debugging with `Object.freeze`",
    description:
      "Show how `Object.freeze` can be used during development to quickly find parts of the code that are unintentionally mutating an object.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 178
  {
    id: "ehd-error-in-destructuring-assignment-with-defaults",
    title: "Error in Destructuring Assignment with Defaults",
    description:
      "Show that a `TypeError` still occurs when destructuring `null` or `undefined`, even if default values are provided for the properties.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Error",
    difficulty: "Intermediate",
  },
  // problem--> 179
  {
    id: "ehd-console-count-with-label",
    title: "`console.count` with a Label",
    description:
      "Use `console.count()` with a specific label to manage multiple independent counters.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Run Counters",
    difficulty: "Intermediate",
  },
  // problem--> 180
  {
    id: "ehd-error-event-on-window",
    title: "Listening for the Global `error` Event",
    description:
      "Show how to add an event listener for the global `error` event to create a centralized error logger.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate (Conceptual)",
    difficulty: "Intermediate",
  },
  // problem--> 181
  {
    id: "ehd-debugging-unicode-issues",
    title: "Debugging Unicode String Issues",
    description:
      "Analyze a string with a surrogate pair emoji and show how `.length` can be misleading, and how to correctly iterate over its code points.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Analyze String",
    difficulty: "Advanced",
  },
  // problem--> 182
  {
    id: "ehd-safe-integer-check",
    title: "Safe Integer Check",
    description:
      "Use `Number.isSafeInteger()` to check if a number is within the range where integer arithmetic is precise.",
    category: "Error Handling and Debugging",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "text",
        defaultValue: "9007199254740992",
      },
    ],
    buttonText: "Check Integer",
    difficulty: "Intermediate",
  },
  // problem--> 183
  {
    id: "ehd-error-in-web-worker-from-main",
    title: "Handling Worker Errors from Main Thread",
    description:
      "Demonstrate listening for the `error` event on a Web Worker instance to catch unhandled exceptions that occur within the worker.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate (Conceptual)",
    difficulty: "Intermediate",
  },
  // problem--> 184
  {
    id: "ehd-console-group-collapsed",
    title: "`console.groupCollapsed`",
    description:
      "Use `console.groupCollapsed()` to create a log group that starts in a collapsed state, useful for reducing console noise.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Log Collapsed Group",
    difficulty: "Intermediate",
  },
  // problem--> 185
  {
    id: "ehd-debugging-with-geteventlisteners",
    title: "Debugging with `getEventListeners`",
    description:
      "Explain how to use the browser console's `getEventListeners(element)` utility to inspect all event listeners attached to a DOM element.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain Utility",
    difficulty: "Intermediate",
  },
  // problem--> 186
  {
    id: "ehd-error-in-class-constructor",
    title: "Error in a Class Constructor",
    description:
      "Show that throwing an error from a class constructor prevents the instance from being created and can be caught.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Constructor Error",
    difficulty: "Intermediate",
  },
  // problem--> 187
  {
    id: "ehd-custom-error-with-data",
    title: "Custom Error with Extra Data",
    description:
      "Extend a custom error class to accept and store additional contextual data (e.g., an error code or metadata).",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Throw Custom Error with Data",
    difficulty: "Advanced",
  },
  // problem--> 188
  {
    id: "ehd-debugging-async-race-condition",
    title: "Debugging an Async Race Condition",
    description:
      "Analyze a scenario with two parallel async operations that update the same state, leading to a race condition, and show a solution using a flag or a lock.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate Race Condition",
    difficulty: "Advanced",
  },
  // problem--> 189
  {
    id: "ehd-finally-in-promise-chain",
    title: "`finally` in a Promise Chain",
    description:
      "Demonstrate using `.finally()` in a promise chain to perform cleanup, showing that it runs for both resolution and rejection.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test `finally`",
    difficulty: "Intermediate",
  },
  // problem--> 190
  {
    id: "ehd-debugging-css-in-js-issues",
    title: "Debugging CSS-in-JS (Conceptual)",
    description:
      "Discuss strategies for debugging styles generated by CSS-in-JS libraries, such as inspecting generated class names and using source maps.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 191
  {
    id: "ehd-debugging-hydration-errors-react",
    title: "Debugging Hydration Errors (Conceptual)",
    description:
      "Explain what a hydration error is in the context of Server-Side Rendering (SSR) frameworks like React or Next.js, and how to debug mismatches between server and client HTML.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 192
  {
    id: "ehd-static-analysis-tools-linting",
    title: "Static Analysis Tools (Conceptual)",
    description:
      "Explain the role of static analysis tools like ESLint and TypeScript in catching errors and potential bugs *before* the code is run.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 193
  {
    id: "ehd-null-object-pattern-example",
    title: "Null Object Pattern (Conceptual)",
    description:
      "Explain the Null Object design pattern, where you create an object that conforms to an interface but does nothing, to avoid constant null checks.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 194
  {
    id: "ehd-debugging-service-workers-caching",
    title: "Debugging Service Workers (Conceptual)",
    description:
      "Discuss the challenges of debugging Service Workers (e.g., caching issues, lifecycle events) and how to use the 'Application' tab in browser dev tools.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 195
  {
    id: "ehd-promise-chain-error-recovery",
    title: "Error Recovery in a Promise Chain",
    description:
      "Show how a `.catch()` block can handle an error and return a new value, allowing the subsequent `.then()` handlers to execute.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Recovery",
    difficulty: "Intermediate",
  },
  // problem--> 196
  {
    id: "ehd-browser-compatibility-errors",
    title: "Browser Compatibility Errors (Conceptual)",
    description:
      "Explain how to debug errors that only occur in specific browsers, using tools like BrowserStack and checking compatibility tables like MDN or Can I Use.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 197
  {
    id: "ehd-global-error-event-details",
    title: "Global Error Event Details",
    description:
      "Demonstrate the `ErrorEvent` object passed to a global `window.onerror` handler, inspecting properties like `message`, `filename`, and `lineno`.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Demonstrate (Conceptual)",
    difficulty: "Intermediate",
  },
  // problem--> 198
  {
    id: "ehd-final-summary-debugging-mindset",
    title: "The Debugging Mindset",
    description:
      "Summarize a systematic approach to debugging: 1. Reproduce. 2. Hypothesize. 3. Test/Isolate. 4. Fix root cause. 5. Add regression test.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Summarize",
    difficulty: "Beginner",
  },
  // problem--> 199
  {
    id: "ehd-error-in-class-static-block",
    title: "Error in a Static Block",
    description:
      "Show that an error thrown from within a `static {}` initialization block prevents the class from being defined and can be caught.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Test Error",
    difficulty: "Advanced",
  },
  // problem--> 200
  {
    id: "ehd-debugging-with-sourcemaps",
    title: "Debugging with Source Maps (Conceptual)",
    description:
      "Explain how source maps connect minified production code back to the original source, allowing for meaningful stack traces and breakpoints in the debugger.",
    category: "Error Handling and Debugging",
    inputs: [],
    buttonText: "Explain Source Maps",
    difficulty: "Intermediate",
  },
];
