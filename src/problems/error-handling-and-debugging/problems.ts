import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "try-catch-basic",
    title: "`try...catch` Block",
    description:
      "Use a `try...catch` block to handle a potential `ReferenceError` when accessing an undefined variable.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Test `try...catch`",
  },
  {
    id: "json-parse-error",
    title: "Handling `JSON.parse` Errors",
    description:
      "Use a `try...catch` block to gracefully handle a `SyntaxError` when parsing an invalid JSON string.",
    category: "Error Handling & Debugging",
    inputs: [
      {
        id: "json",
        label: "JSON String (try making it invalid)",
        type: "textarea",
        defaultValue: '{"name": "John", "age": 30',
      },
    ],
    buttonText: "Parse JSON",
  },
  {
    id: "finally-block",
    title: "The `finally` Block",
    description:
      "Demonstrate the `finally` block, which executes after `try` and `catch`, regardless of whether an error was thrown or caught.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Run with Finally",
  },
  {
    id: "throwing-custom-error",
    title: "Throwing a Custom Error",
    description:
      "Create a function that throws a new `Error` object with a custom message if an input is invalid (e.g., a number is negative).",
    category: "Error Handling & Debugging",
    inputs: [
      {
        id: "num",
        label: "Enter a positive number",
        type: "number",
        defaultValue: -5,
      },
    ],
    buttonText: "Validate Number",
  },
  {
    id: "creating-custom-error-class",
    title: "Creating a Custom Error Class",
    description:
      "Create a custom `ValidationError` class by extending the built-in `Error` class for more specific error handling.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Throw Custom Error Type",
  },
  {
    id: "promise-catch-error",
    title: "Handling Promise Rejections with `.catch()`",
    description:
      "Create a Promise that rejects and handle the error using the `.catch()` method.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Run Rejecting Promise",
  },
  {
    id: "async-await-try-catch",
    title: "Error Handling with `async/await`",
    description:
      "Use a `try...catch` block to handle a rejected promise within an `async` function.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Catch Async Error",
  },
  {
    id: "window-onerror-conceptual",
    title: "Global Error Handling: `window.onerror`",
    description:
      "Explain how a global `window.onerror` handler can be used to catch all uncaught runtime errors for logging purposes.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Global Handler",
  },
  {
    id: "unhandled-rejection-conceptual",
    title: "Global Promise Rejection Handling",
    description:
      "Explain how to listen for the `unhandledrejection` event on `window` to catch promise rejections that were not handled with a `.catch()` block.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Rejection Handler",
  },
  {
    id: "error-object-properties",
    title: "Error Object Properties",
    description:
      "Demonstrate the standard properties of an `Error` object, such as `name`, `message`, and `stack`.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Inspect Error Object",
  },
  {
    id: "fetch-error-handling-conceptual",
    title: "Fetch API Error Handling",
    description:
      "Explain the common pitfall of Fetch API error handling: it only rejects on network errors, not on HTTP error statuses like 404 or 500. Show the correct way to check `response.ok`.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Fetch Errors",
  },
  {
    id: "console-log-debugging",
    title: "Debugging with `console.log`",
    description:
      "Explain the basic use of `console.log()` as a fundamental debugging tool to inspect the value of variables at different points in your code.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain `console.log`",
  },
  {
    id: "console-error-warn",
    title: "Using `console.error` and `console.warn`",
    description:
      "Demonstrate `console.error()` and `console.warn()` for logging messages with more semantic meaning and distinct styling in the browser console.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Show Log Levels",
  },
  {
    id: "console-table-debugging",
    title: "Debugging with `console.table`",
    description:
      "Use `console.table()` to display an array or object in a clean, tabular format for easier inspection.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Show `console.table`",
  },
  {
    id: "console-group-debugging",
    title: "Grouping Logs with `console.group`",
    description:
      "Use `console.group()` and `console.groupEnd()` to organize related console output into collapsible, indented groups.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Show Grouped Logs",
  },
  {
    id: "console-trace-debugging",
    title: "Stack Traces with `console.trace`",
    description:
      "Use `console.trace()` to log a stack trace at a specific point in your code to understand how a function was called.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Show Stack Trace",
  },
  {
    id: "debugger-statement",
    title: "Using the `debugger` Statement",
    description:
      "Explain how the `debugger` statement can be used to programmatically pause code execution at a specific line, invoking the browser's or Node.js's debugging tools.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain `debugger`",
  },
  {
    id: "error-cause-property",
    title: "Error `cause` Property",
    description:
      "Demonstrate creating an `Error` with a `cause` property to chain errors, providing better debugging context for the root cause of a failure.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Throw Chained Error",
  },
  {
    id: "promise-all-error-handling",
    title: "Error Handling with `Promise.all`",
    description:
      "Demonstrate that `Promise.all` is 'fail-fast' and will reject as soon as any of its input promises reject, ignoring the results of other promises.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Test `Promise.all` Failure",
  },
  {
    id: "aggregate-error-conceptual",
    title: "`AggregateError` (Conceptual)",
    description:
      "Explain the `AggregateError` object, which is thrown by `Promise.any()` when all input promises reject, and how its `.errors` property contains all the individual rejection reasons.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain AggregateError",
  },
  {
    id: "typeerror-example",
    title: "Triggering a `TypeError`",
    description:
      "Show an example of code that typically throws a `TypeError`, such as calling a non-function value.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Trigger TypeError",
  },
  {
    id: "rangeerror-example",
    title: "Triggering a `RangeError`",
    description:
      "Show an example of code that throws a `RangeError`, such as creating an array with an invalid length.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Trigger RangeError",
  },
  {
    id: "urierror-example",
    title: "Triggering a `URIError`",
    description:
      "Show an example of code that throws a `URIError` by using a malformed URI with a URI handling function.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Trigger URIError",
  },
  {
    id: "internalerror-conceptual",
    title: "InternalError (Conceptual)",
    description:
      "Explain the concept of an `InternalError`, which is thrown for internal errors in the JavaScript engine, such as 'too much recursion'.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain InternalError",
  },
  {
    id: "defensive-programming-conceptual",
    title: "Defensive Programming (Conceptual)",
    description:
      "Explain the concept of defensive programming, such as checking function parameters for valid types and values to prevent unexpected errors.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Concept",
  },
  {
    id: "error-boundaries-react-conceptual",
    title: "Error Boundaries in React (Conceptual)",
    description:
      "Explain the concept of Error Boundaries in React as components that catch JavaScript errors anywhere in their child component tree.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Error Boundaries",
  },
  {
    id: "console-time-debugging",
    title: "Timing with `console.time`",
    description:
      "Use `console.time()` and `console.timeEnd()` to measure the duration of an operation.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Measure Time",
  },
  {
    id: "console-assert-debugging",
    title: "Assertions with `console.assert`",
    description:
      "Use `console.assert()` to log a message and stack trace if a condition is falsy.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Test Assertion",
  },
  {
    id: "sourcemaps-conceptual",
    title: "Source Maps (Conceptual)",
    description:
      "Explain what source maps are and why they are essential for debugging minified or transpiled code in a production environment.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Source Maps",
  },
  {
    id: "breakpoints-conceptual",
    title: "Browser Breakpoints (Conceptual)",
    description:
      "Explain how to set breakpoints in the browser's developer tools to pause execution and inspect code.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Breakpoints",
  },
  {
    id: "conditional-breakpoints-conceptual",
    title: "Conditional Breakpoints (Conceptual)",
    description:
      "Explain how to set a conditional breakpoint that only pauses execution when a specific condition is met.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Conditional Breakpoints",
  },
  {
    id: "watch-expressions-conceptual",
    title: "Watch Expressions (Conceptual)",
    description:
      "Explain how to use the 'Watch' panel in a debugger to monitor the value of a variable or expression over time.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Watch Expressions",
  },
  {
    id: "call-stack-debugging-conceptual",
    title: "The Call Stack in Debugging (Conceptual)",
    description:
      "Explain how the Call Stack panel in a debugger helps you understand the execution path that led to a breakpoint or an error.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Call Stack",
  },
  {
    id: "scope-pane-debugging-conceptual",
    title: "The Scope Pane in Debugging (Conceptual)",
    description:
      "Explain how the Scope pane in a debugger allows you to inspect the values of all variables in the current and outer (closure) scopes.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Scope Pane",
  },
  {
    id: "dom-breakpoints-conceptual",
    title: "DOM Change Breakpoints (Conceptual)",
    description:
      "Explain how to set DOM change breakpoints in browser developer tools to pause execution when a specific DOM node is modified.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain DOM Breakpoints",
  },
  {
    id: "xhr-breakpoints-conceptual",
    title: "XHR/Fetch Breakpoints (Conceptual)",
    description:
      "Explain how to set breakpoints that pause execution whenever a Fetch or XHR request is made that contains a specific URL fragment.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain XHR Breakpoints",
  },
  {
    id: "event-listener-breakpoints-conceptual",
    title: "Event Listener Breakpoints (Conceptual)",
    description:
      "Explain how to use browser developer tools to pause on all events of a certain type (e.g., all 'click' events).",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Event Breakpoints",
  },
  {
    id: "memory-leaks-conceptual",
    title: "Memory Leaks (Conceptual)",
    description:
      "Explain what a memory leak is (e.g., detached DOM nodes, uncleared intervals) and how browser memory profiling tools can help find them.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Memory Leaks",
  },
  {
    id: "performance-profiling-conceptual",
    title: "Performance Profiling (Conceptual)",
    description:
      "Explain how to use the Performance tab in browser developer tools to record and analyze runtime performance, identifying bottlenecks.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Profiling",
  },
  {
    id: "promise-chain-error-catch-and-continue",
    title: "Promise Chain: Catch and Continue",
    description:
      "Demonstrate how returning a value from a `.catch()` block allows a promise chain to recover from an error and continue with a resolved state.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Test Catch and Continue",
  },
  {
    id: "async-await-finally",
    title: "`finally` with `async/await`",
    description:
      "Show how a `finally` block is used with `async/await` to run cleanup code regardless of whether the `try` block succeeds or throws an error.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Test `async` with `finally`",
  },
  {
    id: "node-process-rejection-conceptual",
    title: "Node.js Rejection Handling (Conceptual)",
    description:
      "Explain how to handle unhandled promise rejections at the process level in Node.js using `process.on('unhandledRejection', ...)`.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Node.js Handler",
  },
  {
    id: "node-process-exception-conceptual",
    title: "Node.js Exception Handling (Conceptual)",
    description:
      "Explain how `process.on('uncaughtException', ...)` can be used as a last resort to handle uncaught synchronous errors in Node.js.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Node.js Handler",
  },
  {
    id: "strict-mode-errors",
    title: "Strict Mode Errors",
    description:
      "Explain how 'strict mode' (`'use strict';`) changes some silent errors into thrown errors, such as assigning to a non-writable property.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Strict Mode",
  },
  {
    id: "console-count-debugging",
    title: "Counting with `console.count`",
    description:
      "Use `console.count()` to count the number of times a particular piece of code has been executed.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Test `console.count`",
  },
  {
    id: "console-dir-debugging",
    title: "Inspecting with `console.dir`",
    description:
      "Use `console.dir()` to display an interactive, explorable list of the properties of a JavaScript object, especially useful for DOM elements.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain `console.dir`",
  },
  {
    id: "try-catch-performance-conceptual",
    title: "`try...catch` Performance (Conceptual)",
    description:
      "Explain the historical performance implications of `try...catch` blocks and why modern JavaScript engines have largely mitigated these issues.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Performance",
  },
  {
    id: "error-first-callback-pattern",
    title: "Error-First Callback Pattern (Conceptual)",
    description:
      "Explain the 'error-first' callback convention common in Node.js, where the first argument to any callback is reserved for an error object.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Pattern",
  },
  {
    id: "graceful-degradation-conceptual",
    title: "Graceful Degradation (Conceptual)",
    description:
      "Explain graceful degradation as a design philosophy where you provide a baseline experience even if certain features (like a third-party API) fail, often using error handling.",
    category: "Error Handling & Debugging",
    inputs: [],
    buttonText: "Explain Concept",
  },
];
