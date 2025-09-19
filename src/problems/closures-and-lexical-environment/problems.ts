import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "closure-counter",
    title: "Closure Counter",
    description:
      "Create a counter function using a closure. The outer function should be called once, and the returned inner function should increment a private counter on each call.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Increment Counter",
  },
  {
    id: "lexical-scope",
    title: "Lexical Scoping",
    description:
      "Demonstrate lexical scoping where an inner function has access to the variables of its outer (parent) function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Scope Test",
  },
  {
    id: "private-data-closure",
    title: "Private Data with Closures",
    description:
      'Create a "person" object with private data for a name, exposing only methods to get or set the name, using a closure.',
    category: "Closures & Lexical Environment",
    inputs: [
      {
        id: "initialName",
        label: "Initial Name",
        type: "text",
        defaultValue: "John",
      },
    ],
    buttonText: "Test Private Name",
  },
  {
    id: "function-factory-multiplier",
    title: "Function Factory: Multiplier",
    description:
      "Create a function factory `createMultiplier` that takes a number and returns a new function. The new function should take a single number and return it multiplied by the original number.",
    category: "Closures & Lexical Environment",
    inputs: [
      {
        id: "factor",
        label: "Multiplier Factor",
        type: "number",
        defaultValue: 5,
      },
      {
        id: "num",
        label: "Number to Multiply",
        type: "number",
        defaultValue: 10,
      },
    ],
    buttonText: "Create and Use Multiplier",
  },
  {
    id: "iife-private-scope",
    title: "IIFE for Private Scope",
    description:
      "Use an Immediately Invoked Function Expression (IIFE) to create a private variable that cannot be accessed from the global scope.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test IIFE Scope",
  },
  {
    id: "closure-with-loop-let",
    title: "Closures in Loops with `let`",
    description:
      "Demonstrate how `let` creates a new binding for each loop iteration, allowing closures in callbacks to capture the correct value.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Loop Test",
  },
  {
    id: "memoization-with-closures",
    title: "Memoization with Closures",
    description:
      "Create a memoized version of a slow function. The memoization cache should be stored in a closure.",
    category: "Closures & Lexical Environment",
    inputs: [
      {
        id: "num",
        label: "Number for Slow Function",
        type: "number",
        defaultValue: 30,
      },
    ],
    buttonText: "Run Memoized Function",
  },
  {
    id: "module-pattern",
    title: "The Module Pattern",
    description:
      "Use an IIFE to create a module with public and private members. The returned object is the public API.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Module",
  },
  {
    id: "closure-event-listener",
    title: "Closure in Event Listeners (Conceptual)",
    description:
      "Explain how a closure allows an event listener callback to access variables from the scope where it was defined.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  {
    id: "partial-application-closure",
    title: "Partial Application with Closures",
    description:
      "Create a generic logging function that can be partially applied to create more specific loggers (e.g., `infoLogger`, `errorLogger`).",
    category: "Closures & Lexical Environment",
    inputs: [
      {
        id: "message",
        label: "Log Message",
        type: "text",
        defaultValue: "User logged in",
      },
    ],
    buttonText: "Log with Specific Logger",
  },
  {
    id: "closure-timeout-scope",
    title: "Scope in `setTimeout`",
    description:
      "Show how a callback in `setTimeout` can access variables from its parent scope due to closure, even after the parent function has completed.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Timeout",
  },
  {
    id: "retaining-state-closure",
    title: "Retaining State Between Calls",
    description:
      "Create a function that remembers the previous number passed to it and returns the sum of the current and previous number.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Stateful Sum",
  },
  {
    id: "once-function",
    title: "Create a `once` function",
    description:
      "Write a higher-order function `once` that takes a function and returns a new function that can only be called once.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test `once` function",
  },
  {
    id: "closure-data-hiding",
    title: "Data Hiding Example",
    description:
      "Create a 'secret' item store where items can be added but the item list itself cannot be directly accessed or modified.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Use Secure Store",
  },
  {
    id: "closure-scope-chain-deep",
    title: "Deep Scope Chain",
    description:
      "Demonstrate a multi-level scope chain where the innermost function accesses variables from all outer scopes.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Deep Scope Test",
  },
  {
    id: "closure-with-async-await",
    title: "Closure with async/await",
    description:
      "Show how a variable from an outer scope is accessible within an `async` function and after an `await` call.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Async Closure",
  },
  {
    id: "currying-add-function",
    title: "Currying an `add` Function",
    description:
      "Create a curried function `add(a)(b)(c)` that takes three numbers in separate calls and returns their sum.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Curried Add",
  },
  {
    id: "closure-for-config",
    title: "Configuration with Closures",
    description:
      "Create a setup function that takes a configuration object and returns a new function that uses this configuration for its operations.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Configured Function",
  },
  {
    id: "closure-and-garbage-collection",
    title: "Closure & Garbage Collection (Conceptual)",
    description:
      "Explain how closures can prevent variables from being garbage collected because they are still referenced by inner functions.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  {
    id: "closure-in-react-hooks-conceptual",
    title: "Closures in React Hooks (Conceptual)",
    description:
      "Explain the concept of stale closures in React's `useEffect` hook and how the dependency array helps solve it.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Stale Closures",
  },
  {
    id: "dynamic-function-creation",
    title: "Dynamic Function Creation",
    description:
      "Create a function that generates new functions based on a string name.",
    category: "Closures & Lexical Environment",
    inputs: [
      {
        id: "op",
        label: "Operation ('add' or 'multiply')",
        type: "text",
        defaultValue: "add",
      },
    ],
    buttonText: "Create and Use Function",
  },
  {
    id: "closure-shared-scope",
    title: "Shared Closure Scope",
    description:
      "Create two functions that share the same parent scope and modify the same closed-over variable.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Shared Scope",
  },
  {
    id: "revealing-module-pattern",
    title: "Revealing Module Pattern",
    description:
      "Implement the Revealing Module Pattern, where the public API is an object containing references to private functions and variables.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Revealing Module",
  },
  {
    id: "closure-for-templating",
    title: "Simple Templating with Closures",
    description:
      "Create a template function that takes a template string and returns a new function that can be called with data to fill in the template.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Create and Use Template",
  },
  {
    id: "closure-as-iterator",
    title: "Closure as an Iterator",
    description:
      "Create an iterator function for an array using a closure to keep track of the current index.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Iterate",
  },
  {
    id: "closure-with-recursion",
    title: "Closure with Recursion (Memoization)",
    description:
      "Combine recursion and closures to create a memoized Fibonacci function.",
    category: "Closures & Lexical Environment",
    inputs: [
      {
        id: "num",
        label: "Fibonacci number to find",
        type: "number",
        defaultValue: 10,
      },
    ],
    buttonText: "Calculate Memoized Fib",
  },
  {
    id: "closure-accessing-arguments",
    title: "Closure Accessing `arguments`",
    description:
      "Show that an inner function's closure includes the `arguments` object of its parent function (if it's a traditional function).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test `arguments` Access",
  },
  {
    id: "closure-redefining-variable",
    title: "Redefining Variable in Closure",
    description:
      "Demonstrate what happens when an inner function re-declares a variable that also exists in the outer scope (shadowing).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Shadowing",
  },
  {
    id: "closure-performance-conceptual",
    title: "Closure Performance (Conceptual)",
    description:
      "Explain potential performance implications of closures, such as memory usage, and when to be mindful of them.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Performance",
  },
  {
    id: "closure-with-proxy",
    title: "Closure with Proxy",
    description:
      "Use a closure to store a private target object for an ES6 Proxy, controlling access to it.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Proxy",
  },
  {
    id: "closure-with-bind",
    title: "Closure and `.bind()`",
    description:
      "Show how `.bind()` can create a function that behaves similarly to a simple closure for partial application.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test `.bind()` vs Closure",
  },
  {
    id: "closure-for-rate-limiting",
    title: "Rate Limiting with Closures",
    description:
      "Create a function wrapper that rate-limits how often a function can be called, using a closure to store timestamps.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Rate Limiter",
  },
  {
    id: "closure-for-toggling",
    title: "Toggle Function with Closure",
    description:
      "Create a function that toggles between two or more values each time it is called, using a closure to remember the current state.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Toggle Value",
  },
  {
    id: "namespacing-with-closures",
    title: "Namespacing with Closures",
    description:
      "Use the module pattern (based on closures) to create a 'namespace', preventing pollution of the global scope.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Show Namespace",
  },
  {
    id: "function-composition-closures",
    title: "Function Composition with Closures",
    description:
      "Create a `compose` function that takes two functions and returns a new function that is their composition, enabled by closures.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Compose Functions",
  },
  {
    id: "closure-with-destructuring",
    title: "Closure with Destructuring",
    description:
      "Create a function that returns an object of functions, and use destructuring to access them, showing they all share the same closure.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Destructure and Test",
  },
  {
    id: "lazy-initialization-closure",
    title: "Lazy Initialization with a Closure",
    description:
      "Create a function that performs an expensive setup only once, on its first call, using a closure to store the result for subsequent calls.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Lazy Init",
  },
  {
    id: "closure-in-callbacks",
    title: "Closure in Array Method Callbacks",
    description:
      "Demonstrate how a callback function in `.map()` or `.filter()` can access variables from the outer scope.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Array Callback",
  },
  {
    id: "closure-for-abstraction",
    title: "Abstraction with Closures",
    description:
      "Create a simplified API for a complex operation. The complexity is hidden inside a closure.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Use Abstracted API",
  },
  {
    id: "closure-with-generators",
    title: "Closure with Generators",
    description:
      "Create a generator function inside a closure to generate a sequence of values based on a closed-over state.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Use Generator",
  },
  {
    id: "closure-with-promises",
    title: "Closure with Promises",
    description:
      "Show that variables from an outer scope are available inside `.then()` callbacks of a Promise.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Promise Closure",
  },
  {
    id: "closure-for-stopwatch",
    title: "Stopwatch with Closures",
    description:
      "Implement a simple stopwatch with start, stop, and getTime methods, using a closure to protect the internal state.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Show Stopwatch Logic",
  },
  {
    id: "closure-for-logging-context",
    title: "Logging with Context",
    description:
      "Create a logger factory that takes a context (e.g., 'ModuleA') and returns a logging function that automatically prepends the context to every message.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Create and Use Logger",
  },
  {
    id: "closure-capturing-this",
    title: "Closure Capturing `this`",
    description:
      "Demonstrate the classic problem of `this` inside a callback and how a closure (or an arrow function) can solve it.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test `this` Capture",
  },
  {
    id: "closure-and-block-scope",
    title: "Closure and Block Scope",
    description:
      "Show that a closure captures block-scoped variables (`let`, `const`) from its lexical environment.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Block Scope Capture",
  },
  {
    id: "closure-as-a-cache",
    title: "Closure as a Cache",
    description:
      "Create a function that caches the results of its computations. The cache is stored in a closure.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Cached Function",
  },
  {
    id: "closure-for-debouncing",
    title: "Debouncing with Closures (Conceptual)",
    description:
      "Explain how a `debounce` function uses a closure to store a timer ID, preventing a function from being called too frequently.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Debounce",
  },
  {
    id: "closure-for-throttling",
    title: "Throttling with Closures (Conceptual)",
    description:
      "Explain how a `throttle` function uses a closure to store state (like a timeout flag and last call time) to ensure a function is only called at most once per specified time period.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Throttle",
  },
  {
    id: "closure-common-mistakes",
    title: "Common Closure Mistake (Looping with `var`)",
    description:
      "Demonstrate the classic mistake of using `var` in a loop to create closures, where all closures capture the same final value of the loop variable.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Show Mistake",
  },
];
