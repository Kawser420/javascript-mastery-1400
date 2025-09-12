export const solvers: Record<string, Function> = {
  "try-catch-basic": () => {
    try {
      // This line will cause a ReferenceError
      const undefinedVar = (undefined as any).property;
      return "This will not be returned.";
    } catch (error: any) {
      return `Caught an error! Name: ${error.name}, Message: ${error.message}`;
    }
  },
  "json-parse-error": ({ json }: { json: string }) => {
    try {
      const data = JSON.parse(json);
      return `JSON parsed successfully! Name: ${data.name}`;
    } catch (e: any) {
      return `Caught a SyntaxError: ${e.message}`;
    }
  },
  "finally-block": () => {
    let status = "pending";
    try {
      status = "in-try";
      // Uncomment the next line to test the error path
      // throw new Error("test error");
    } catch (e) {
      status = "in-catch";
    } finally {
      status += " in-finally";
    }
    return `Final status: "${status}". The finally block always runs.`;
  },
  "throwing-custom-error": ({ num }: { num: any }) => {
    function checkPositive(n: number) {
      if (n < 0) {
        throw new Error("Number cannot be negative.");
      }
      return "Number is positive!";
    }
    try {
      return checkPositive(Number(num));
    } catch (e: any) {
      return `Caught custom error: ${e.message}`;
    }
  },
  "creating-custom-error-class": () => {
    class ValidationError extends Error {
      constructor(message: string) {
        super(message);
        this.name = "ValidationError";
      }
    }
    try {
      throw new ValidationError("Invalid input provided.");
    } catch (e: any) {
      if (e instanceof ValidationError) {
        return `Caught a specific ValidationError. Name: ${e.name}`;
      }
      return `Caught a generic error.`;
    }
  },
  "promise-catch-error": async () => {
    try {
      await Promise.reject("Something went wrong!");
    } catch (e) {
      return `Caught rejected promise: ${e}`;
    }
    return `This should not be reached.`;
  },
  "async-await-try-catch": async () => {
    const failingPromise = () => Promise.reject("Async operation failed");
    try {
      await failingPromise();
    } catch (e) {
      return `Caught async error: ${e}`;
    }
    return `This should not be reached.`;
  },
  "window-onerror-conceptual": () =>
    `(Conceptual) \`window.onerror = function(message, source, lineno, colno, error) { ... }\`. This global handler can catch uncaught runtime errors, ideal for sending reports to a logging service.`,
  "unhandled-rejection-conceptual": () =>
    `(Conceptual) \`window.addEventListener('unhandledrejection', event => { ... })\`. This global handler catches any promise rejections that don't have a \`.catch()\` block attached, preventing silent failures.`,
  "error-object-properties": () => {
    try {
      throw new Error("This is a test error.");
    } catch (e: any) {
      return `Name: ${e.name}\nMessage: ${e.message}\nStack: (A string showing the call stack)`;
    }
  },
  "fetch-error-handling-conceptual": () =>
    `(Conceptual) \`fetch\` only rejects on network errors. For HTTP 404/500 errors, the promise resolves. You must check \`if (!response.ok)\` and throw an error manually to be caught by a \`.catch()\` or \`try...catch\` block.`,
  "console-log-debugging": () =>
    `(Conceptual) The most basic debugging tool. Place \`console.log(myVariable)\` at different points in your code to inspect its value and trace the execution flow.`,
  "console-error-warn": () =>
    `(Conceptual) \`console.error("Failed")\` logs a styled error message. \`console.warn("Check this")\` logs a warning. They help categorize and find important messages in the console.`,
  "console-table-debugging": () =>
    `(Conceptual) \`console.table([{ name: 'A' }, { name: 'B' }])\` displays the array of objects in a clean, sortable table in the browser console, which is great for inspecting complex data.`,
  "console-group-debugging": () =>
    `(Conceptual) \`console.group('My Group'); console.log('Item 1'); console.groupEnd();\` creates a collapsible, indented group in the console to organize related logs.`,
  "console-trace-debugging": () =>
    `(Conceptual) Placing \`console.trace()\` inside a function will print the full call stack to the console, showing how that function was called.`,
  "debugger-statement": () =>
    `(Conceptual) Placing the \`debugger;\` statement in your code will automatically pause execution at that line if the browser's developer tools are open, allowing you to inspect the current state.`,
  "error-cause-property": () => {
    try {
      try {
        // Low-level error
        throw new Error("Database connection failed");
      } catch (lowLevelError) {
        // High-level error, chaining the cause
        throw new Error("Failed to load user data", { cause: lowLevelError });
      }
    } catch (e: any) {
      return `High-level error: ${e.message}\nCause: ${e.cause.message}`;
    }
    return `This should not be reached.`;
  },
  "promise-all-error-handling": async () => {
    try {
      await Promise.all([
        Promise.resolve("Success"),
        Promise.reject("Failure"),
      ]);
    } catch (e) {
      return `Promise.all rejected with reason: ${e}`;
    }
    return `This should not be reached.`;
  },
  "aggregate-error-conceptual": () =>
    `(Conceptual) \`Promise.any()\` rejects with an \`AggregateError\` when all promises fail. The \`error.errors\` property is an array containing all the individual rejection reasons.`,
  "typeerror-example": () => {
    try {
      const x: any = null;
      x();
    } catch (e: any) {
      return `Caught: ${e.name}`;
    }
    return "No error";
  },
  "rangeerror-example": () => {
    try {
      new Array(-1);
    } catch (e: any) {
      return `Caught: ${e.name}`;
    }
    return "No error";
  },
  "urierror-example": () => {
    try {
      decodeURIComponent("%");
    } catch (e: any) {
      return `Caught: ${e.name}`;
    }
    return "No error";
  },
  "internalerror-conceptual": () =>
    `(Conceptual) This error is thrown for issues within the JS engine, most commonly "too much recursion" which causes a stack overflow. It indicates a problem with the code's structure, not user input.`,
  "defensive-programming-conceptual": () =>
    `(Conceptual) Writing code that anticipates potential issues. E.g., a function \`divide(a, b)\` should check if \`b\` is 0 before performing the division to prevent an error or an invalid result like \`Infinity\`.`,
  "error-boundaries-react-conceptual": () =>
    `(Conceptual) An Error Boundary is a React component that defines a \`static getDerivedStateFromError()\` or \`componentDidCatch()\` lifecycle method. It catches JS errors in its child component tree, logs them, and displays a fallback UI.`,
  "console-time-debugging": () =>
    `(Conceptual) \`console.time('my-operation');\` starts a timer. \`console.timeEnd('my-operation');\` stops it and logs the elapsed time. Useful for simple performance measurements.`,
  "console-assert-debugging": () =>
    `(Conceptual) \`console.assert(1 === 2, 'This is an assertion failure');\` will log the message and a stack trace because the first argument is false. If true, it does nothing.`,
  "sourcemaps-conceptual": () =>
    `(Conceptual) A source map is a file that maps from the transformed/minified code back to the original source code. It allows you to see your original, readable code in the debugger even when running the optimized version in production.`,
  "breakpoints-conceptual": () =>
    `(Conceptual) In browser dev tools, you can click on a line number in the 'Sources' panel to set a breakpoint. Code execution will pause at that line, allowing you to inspect variables and the call stack.`,
  "conditional-breakpoints-conceptual": () =>
    `(Conceptual) In a debugger, you can right-click a breakpoint and add a condition (e.g., \`i > 10\`). The code will only pause at that breakpoint if the condition is true.`,
  "watch-expressions-conceptual": () =>
    `(Conceptual) In the 'Watch' panel of a debugger, you can add expressions like \`myObject.property.length\`. The debugger will continuously evaluate this expression and show its result as you step through the code.`,
  "call-stack-debugging-conceptual": () =>
    `(Conceptual) The 'Call Stack' panel in a debugger shows the chain of function calls that led to the current point of execution. Clicking on a function in the stack lets you inspect the state of that function's scope.`,
  "scope-pane-debugging-conceptual": () =>
    `(Conceptual) When paused at a breakpoint, the 'Scope' pane shows you all variables and their values that are currently accessible: local variables, closure variables, and global variables.`,
  "dom-breakpoints-conceptual": () =>
    `(Conceptual) In the 'Elements' panel of browser dev tools, you can right-click an element and set a breakpoint to pause execution whenever its attributes, subtree, or the node itself is modified.`,
  "xhr-breakpoints-conceptual": () =>
    `(Conceptual) In the 'Sources' panel, you can set a breakpoint that will pause execution whenever a Fetch or XHR request is made that contains a specific URL fragment.`,
  "event-listener-breakpoints-conceptual": () =>
    `(Conceptual) In the 'Sources' panel, you can select specific event types (e.g., Mouse -> click). The debugger will then pause on the first line of any 'click' event listener that is executed.`,
  "memory-leaks-conceptual": () =>
    `(Conceptual) A memory leak occurs when memory is no longer needed but is not released. Common causes: uncleared intervals/timeouts, detached DOM nodes still held in JS variables, or accidental global variables. Browser dev tools have a 'Memory' tab with heap snapshots to help find leaks.`,
  "performance-profiling-conceptual": () =>
    `(Conceptual) The 'Performance' tab in dev tools lets you record a "profile" of your code as it runs. It generates a flame chart showing which functions took the most time to execute, helping you identify performance bottlenecks.`,
  "promise-chain-error-catch-and-continue": async () => {
    const result = await Promise.resolve()
      .then(() => {
        throw new Error("Failed step 1");
      })
      .catch((err) => {
        return "Recovered value"; // Handle the error and return a new value
      })
      .then((val) => {
        return `Chain continued with: ${val}`;
      });
    return result;
  },
  "async-await-finally": async () => {
    let resourceState = "acquired";
    try {
      await Promise.reject("Operation failed");
    } catch (e) {
      // handle error
    } finally {
      resourceState = "released"; // This will always run
    }
    return `Final resource state: ${resourceState}`;
  },
  "node-process-rejection-conceptual": () =>
    `(Conceptual) In Node.js: \`process.on('unhandledRejection', (reason, promise) => { ... })\`. This catches promises that reject without a \`.catch()\` handler. It's a best practice to log the error and exit the process.`,
  "node-process-exception-conceptual": () =>
    `(Conceptual) In Node.js: \`process.on('uncaughtException', err => { ... })\`. This is a last resort for synchronous errors not caught by try/catch. The process is in an unstable state, so you should log the error and exit gracefully.`,
  "strict-mode-errors": () =>
    `(Conceptual) \`'use strict';\`. Assigning to an undeclared variable, which creates a global in sloppy mode, will throw a ReferenceError. Assigning to a non-writable property will throw a TypeError.`,
  "console-count-debugging": () =>
    `(Conceptual) Call \`console.count('myLabel')\` multiple times. The console will log "myLabel: 1", "myLabel: 2", etc. Useful for checking how many times a function is being called.`,
  "console-dir-debugging": () =>
    `(Conceptual) \`console.log(document.body)\` prints the HTML element. \`console.dir(document.body)\` prints the JS object representation of the DOM element with all its properties, which you can inspect.`,
  "try-catch-performance-conceptual": () =>
    `(Conceptual) Historically, \`try...catch\` blocks prevented optimizations in JS engines. Modern engines like V8 are much better at this, and the performance cost is now negligible for most applications. You should not avoid using it for performance reasons.`,
  "error-first-callback-pattern": () =>
    `(Conceptual) A common Node.js pattern: \`fs.readFile('file.txt', (err, data) => { if (err) { /* handle error */ return; } /* use data */ });\`. The first argument to the callback is always reserved for an error object.`,
  "graceful-degradation-conceptual": () =>
    `(Conceptual) A design approach where you provide a fallback experience if a feature fails. For example, in a \`try...catch\` block for a data fetch, the \`catch\` block might display a message and show cached data instead of crashing the app.`,
};
