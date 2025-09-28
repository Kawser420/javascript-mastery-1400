import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "closures-lexical-scope-basic",
    title: "Basic Lexical Scope",
    description:
      "Create a function that accesses a variable from its outer (parent) scope and returns it, demonstrating the core principle of lexical scoping.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Example",
  },
  // problem--> 02
  {
    id: "closures-simple-closure",
    title: "Your First Closure",
    description:
      "Write a function that returns another function. The inner function should have access to the outer function’s variables even after the outer function has returned.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Create Closure",
  },
  // problem--> 03
  {
    id: "closures-function-factory",
    title: "Function Factory",
    description:
      "Create a function `makeGreeter(greeting)` that returns a new function. The returned function should take a name and return a greeting string.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Factory",
  },
  // problem--> 04
  {
    id: "closures-private-counter",
    title: "Private Counter",
    description:
      "Create a counter function that uses a closure to maintain a private internal state (the count), which increments each time the function is called.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Counter",
  },
  // problem--> 05
  {
    id: "closures-scope-chain",
    title: "Scope Chain Lookup",
    description:
      "Demonstrate the scope chain by creating three nested functions, where the innermost function accesses variables from both of its outer scopes.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Scope Chain",
  },
  // problem--> 06
  {
    id: "closures-var-vs-let-scope",
    title: "`var` vs. `let` in Scopes",
    description:
      "Demonstrate the difference between function-scoped `var` and block-scoped `let` by declaring variables inside an `if` block and trying to access them outside.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Compare Scopes",
  },
  // problem--> 07
  {
    id: "closures-closure-in-loop-var",
    title: "The Classic `var` Loop Problem",
    description:
      "Create a loop that schedules three `setTimeout` callbacks. Each callback should log its loop index. Demonstrate the classic problem when using `var`.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run `var` Loop",
  },
  // problem--> 08
  {
    id: "closures-closure-in-loop-let",
    title: "The `let` Loop Solution",
    description:
      "Solve the classic loop problem from the previous exercise by simply replacing `var` with `let`, demonstrating how block scope provides a clean solution.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run `let` Loop",
  },
  // problem--> 09
  {
    id: "closures-closure-in-loop-iife-fix",
    title: "The IIFE Loop Fix (Pre-ES6)",
    description:
      "Solve the classic `var` loop problem using an Immediately Invoked Function Expression (IIFE) to create a new scope for each iteration.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run IIFE Fix",
  },
  // problem--> 10
  {
    id: "closures-stateful-function",
    title: "Stateful Function",
    description:
      'Create a function `toggle()` that returns "ON" the first time it is called, "OFF" the second time, "ON" the third, and so on, using a closure to keep state.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Toggle",
  },
  // problem--> 11
  {
    id: "closures-module-pattern",
    title: "The Module Pattern",
    description:
      'Create a "module" using an IIFE that exposes a public method but keeps its internal state private. The module should be a simple calculator with `add` and `getValue` methods.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Module",
  },
  // problem--> 12
  {
    id: "closures-function-once",
    title: "Run a Function Only Once",
    description:
      "Create a higher-order function `once(fn)` that takes a function and returns a new function that can only be invoked one time. Subsequent calls should not execute the original function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test `once` Function",
  },
  // problem--> 13
  {
    id: "closures-memoization",
    title: "Function Memoization",
    description:
      "Create a higher-order function `memoize(fn)` that caches the results of a function call. If the function is called again with the same arguments, it should return the cached result.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Memoization",
  },
  // problem--> 14
  {
    id: "closures-multiple-counters",
    title: "Independent Counters",
    description:
      "Using a counter factory function, create two separate counters and show that they maintain their own independent counts.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Counters",
  },
  // problem--> 15
  {
    id: "closures-password-protection",
    title: "Password-Protected Data",
    description:
      'Create a function that stores a "private" piece of data and returns a function that will only reveal the data if given the correct password.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Protection",
  },
  // problem--> 16
  {
    id: "closures-lexical-scope-with-parameters",
    title: "Lexical Scope with Parameters",
    description:
      "Demonstrate that an inner function's closure captures the actual values of the outer function's parameters at the time of its creation.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Example",
  },
  // problem--> 17
  {
    id: "closures-dynamic-event-handlers",
    title: "Dynamic Event Handlers",
    description:
      "Conceptually explain how closures are essential for creating event handlers inside a loop that correctly reference the variable associated with each iteration.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 18
  {
    id: "closures-currying-simple",
    title: "Simple Currying",
    description:
      "Create a curried function `add(a)(b)` that takes two numbers in separate function calls and returns their sum.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Currying",
  },
  // problem--> 19
  {
    id: "closures-partial-application",
    title: "Partial Application",
    description:
      "Create a function `multiply(a, b)`. Then, use a closure to create a new function `double` which is a partial application of `multiply` where `a` is always 2.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Partial Application",
  },
  // problem--> 20
  {
    id: "closures-hoisting-and-scope",
    title: "Hoisting and Scope",
    description:
      "Demonstrate how `var` is hoisted to the top of its function scope, and show that its value is `undefined` before the line it was declared on.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Hoisting",
  },
  // problem--> 21
  {
    id: "closures-block-scope-no-closure",
    title: "Block Scope without Closure",
    description:
      "Show that a simple block scope with `let` does not, by itself, create a lasting closure if no function is defined within it that escapes.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 22
  {
    id: "closures-garbage-collection-conceptual",
    title: "Closures and Garbage Collection",
    description:
      "Explain conceptually how a closure can prevent a variable from being garbage collected, and why this is a feature, not a bug.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 23
  {
    id: "closures-redefining-outer-variable",
    title: "Redefining an Outer Variable",
    description:
      "Create a closure. Call it, then change the value of the outer variable, and call the closure again to see if it reflects the change.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Redefinition",
  },
  // problem--> 24
  {
    id: "closures-shared-scope",
    title: "Shared Lexical Scope",
    description:
      "Create an outer function that returns an object with two methods. Show that both methods share the same lexical environment and can interact with the same private variables.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Shared Scope",
  },
  // problem--> 25
  {
    id: "closures-async-callback",
    title: "Asynchronous Callback Closure",
    description:
      "Use `setTimeout` to demonstrate that a closure captures its environment and can use it later, even after the original function has completed execution.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Async Example",
  },
  // problem--> 26
  {
    id: "closures-shadowing",
    title: "Variable Shadowing",
    description:
      "Demonstrate variable shadowing, where an inner variable with the same name as an outer variable temporarily hides the outer one.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Shadowing",
  },
  // problem--> 27
  {
    id: "closures-iife-privacy",
    title: "IIFE for Privacy",
    description:
      "Use an Immediately Invoked Function Expression (IIFE) to create a private scope and prevent a variable from polluting the global scope.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run IIFE",
  },
  // problem--> 28
  {
    id: "closures-item-manager",
    title: "Item Manager",
    description:
      "Create an item manager module. It should have `addItem`, `removeItem`, and `listItems` methods, but the internal array of items must be private.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Manager",
  },
  // problem--> 29
  {
    id: "closures-logger-factory",
    title: "Logger Factory",
    description:
      "Create a function `createLogger(prefix)` that returns a logging function. The returned function should prepend the specified prefix to any message it logs.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Logger",
  },
  // problem--> 30
  {
    id: "closures-this-and-lexical-scope",
    title: "`this` vs. Lexical Scope",
    description:
      "Explain the key difference between how `this` is determined (dynamically) and how variables are looked up in the scope chain (lexically).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Difference",
  },
  // problem--> 31
  {
    id: "closures-arrow-function-lexical-this",
    title: "Arrow Functions and Lexical `this`",
    description:
      "Demonstrate how an arrow function does not have its own `this` and lexically captures it from the surrounding context, solving common callback problems.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Lexical `this`",
  },
  // problem--> 32
  {
    id: "closures-retaining-state-in-map",
    title: "Retaining State in `.map()`",
    description:
      'Create a function factory that returns a "stepped" mapping function. For `[1, 1, 1]`, it should return `[1, 2, 3]` by keeping an internal counter.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Map State",
  },
  // problem--> 33
  {
    id: "closures-api-key-hiding",
    title: "API Key Encapsulation",
    description:
      'Create a function that "hides" a private API key. It should return a method that can make an API call using the key, without ever exposing the key itself.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain & Test",
  },
  // problem--> 34
  {
    id: "closures-rate-limiter",
    title: "Rate Limiter",
    description:
      "Create a higher-order function `limitCalls(fn, limit)` that returns a new function. This function can only be called `limit` times. Subsequent calls should be ignored.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Rate Limiter",
  },
  // problem--> 35
  {
    id: "closures-function-composition",
    title: "Function Composition",
    description:
      "Create a function `compose(f, g)` that takes two functions and returns a new function `h(x) = f(g(x))`. Use closures to achieve this.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Composition",
  },
  // problem--> 36
  {
    id: "closures-generator-conceptual",
    title: "Closures vs. Generators",
    description:
      "Conceptually explain how a generator can maintain state between calls using `yield`, and how this compares to a function using a closure for state.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Comparison",
  },
  // problem--> 37
  {
    id: "closures-closures-in-react-hooks-conceptual",
    title: "Closures in React Hooks (Conceptual)",
    description:
      "Explain how React's `useState` and `useEffect` hooks rely on closures to associate state and effects with a specific component instance.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 38
  {
    id: "closures-undo-functionality",
    title: "Undo Functionality",
    description:
      "Create a function that manages a value. It should return an object with `setValue` and `undo` methods. The `undo` method should revert the value to its previous state.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Undo",
  },
  // problem--> 39
  {
    id: "closures-closures-with-default-params",
    title: "Closures with Default Parameters",
    description:
      "Show how a closure can be formed over a default parameter in an outer function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Example",
  },
  // problem--> 40
  {
    id: "closures-closures-with-destructuring",
    title: "Closures with Destructuring",
    description:
      "Demonstrate creating a closure over variables that were declared using destructuring assignment in the outer function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Example",
  },
  // problem--> 41
  {
    id: "closures-private-constants",
    title: "Private Constants",
    description:
      "Use the module pattern to define a private constant that is used by public methods but cannot be modified from the outside.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Constant",
  },
  // problem--> 42
  {
    id: "closures-revisiting-scope-chain",
    title: "Revisiting the Scope Chain",
    description:
      "Create a scenario where a variable is not in the immediate parent scope, but one further up, to explicitly demonstrate multi-level scope chain lookup.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Test",
  },
  // problem--> 43
  {
    id: "closures-memory-leak-conceptual",
    title: "Potential Memory Leaks (Conceptual)",
    description:
      "Explain how a long-lived closure that references a large, unneeded object can unintentionally cause a memory leak.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 44
  {
    id: "closures-configuration-object",
    title: "Private Configuration",
    description:
      "Create a module that takes a configuration object upon initialization. This configuration should be private, but influence the behavior of the module’s public methods.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Configuration",
  },
  // problem--> 45
  {
    id: "closures-caching-with-time-limit",
    title: "Memoization with Expiration",
    description:
      "Extend the memoization function to include a cache expiration time. If a cached result is older than the specified time, the original function should be re-executed.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Expiration",
  },
  // problem--> 46
  {
    id: "closures-global-scope-pollution",
    title: "Avoiding Global Scope Pollution",
    description:
      'Show a "before" example of polluting the global scope with multiple variables and an "after" example using an IIFE to keep them contained.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Show Before & After",
  },
  // problem--> 47
  {
    id: "closures-function-context-binding",
    title: "Closure vs. `.bind()`",
    description:
      "Compare creating a closure to preserve context with using the `.bind()` method to explicitly set the `this` value of a function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Compare Methods",
  },
  // problem--> 48
  {
    id: "closures-closures-in-promises",
    title: "Closures in Promise Chains",
    description:
      "Show how a variable from an outer scope can be accessed in multiple `.then()` blocks of a promise chain, demonstrating the closure.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Promise Chain",
  },
  // problem--> 49
  {
    id: "closures-debounce-function",
    title: "Debounce Function",
    description:
      "Implement a `debounce(fn, delay)` higher-order function. It should return a new function that will only call `fn` after it has not been called for `delay` milliseconds.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain & Test",
  },
  // problem--> 50
  {
    id: "closures-throttle-function",
    title: "Throttle Function",
    description:
      "Implement a `throttle(fn, limit)` higher-order function. It should return a new function that will call `fn` at most once every `limit` milliseconds.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain & Test",
  },
  // problem--> 51
  {
    id: "closures-id-generator",
    title: "Unique ID Generator",
    description:
      "Create a function `createIdGenerator(prefix)` that returns a function. Each time the returned function is called, it generates a new unique ID with the given prefix (e.g., 'user-1', 'user-2').",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test ID Generator",
  },
  // problem--> 52
  {
    id: "closures-function-flipper",
    title: "Argument Flipper",
    description:
      "Create a higher-order function `flip(fn)` that takes a binary function (a function with two arguments) and returns a new function that takes the arguments in the reverse order.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Flipper",
  },
  // problem--> 53
  {
    id: "closures-sequence-generator",
    title: "Arithmetic Sequence Generator",
    description:
      "Write a function `createSequence(start, step)` that returns a function. Each call to the returned function should produce the next number in an arithmetic sequence.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Sequence",
  },
  // problem--> 54
  {
    id: "closures-call-tracker",
    title: "Function Call Tracker",
    description:
      "Create a function `trackCalls()` that returns an object with two methods: `fn` which increments a private counter, and `getCalls` which returns the count. `fn` can be passed around as a callback.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Tracker",
  },
  // problem--> 55
  {
    id: "closures-with-try-catch",
    title: "Closure over `try...catch`",
    description:
      "Show how a closure can be created inside a `try` block and still access variables from its outer scope, even if an error is caught.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Example",
  },
  // problem--> 56
  {
    id: "closures-singleton-pattern",
    title: "Singleton Pattern",
    description:
      "Use an IIFE and a closure to implement the Singleton pattern, ensuring that a 'class' or object can only be instantiated once.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Singleton",
  },
  // problem--> 57
  {
    id: "closures-dynamic-function-creation",
    title: "Dynamic Function Creation",
    description:
      "Create a function `createOperation(operator)` which returns a new function that performs the specified arithmetic operation ('+', '-', '*', '/').",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Operations",
  },
  // problem--> 58
  {
    id: "closures-circular-reference-conceptual",
    title: "Circular References (Conceptual)",
    description:
      "Explain how closures can create circular references between objects and how modern JavaScript engines' garbage collectors are able to handle them.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 59
  {
    id: "closures-with-async-await",
    title: "Closures with `async/await`",
    description:
      "Demonstrate that a closure created within an `async` function can correctly access variables from that function's scope, even across `await` points.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Async/Await Example",
  },
  // problem--> 60
  {
    id: "closures-simple-pub-sub",
    title: "Simple Pub/Sub Pattern",
    description:
      "Implement a simple Publish/Subscribe (or event emitter) system using closures to manage a private list of subscriber callbacks for different event types.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Pub/Sub",
  },
  // problem--> 61
  {
    id: "closures-lazy-evaluation",
    title: "Lazy Evaluation",
    description:
      'Create a function that returns a "thunk" (a zero-argument function) that performs an expensive calculation. The calculation should only happen when the thunk is called.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Lazy Eval",
  },
  // problem--> 62
  {
    id: "closures-for-each-fix-var",
    title: "The `forEach` Loop Fix",
    description:
      "Show how using `.forEach()` naturally solves the classic `var` loop problem because its callback function creates a new scope for each iteration.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run `forEach` Fix",
  },
  // problem--> 63
  {
    id: "closures-bank-account",
    title: "Bank Account Module",
    description:
      "Create a bank account module with `deposit`, `withdraw`, and `getBalance` methods. The balance must be private and cannot be directly manipulated.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Account",
  },
  // problem--> 64
  {
    id: "closures-conditional-function",
    title: "Conditional Function Definition",
    description:
      "Create a factory that, based on an initial setting, returns one of two different functions. Show how the closure remembers which function to be.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Conditional",
  },
  // problem--> 65
  {
    id: "closures-function-chaining",
    title: "Fluent API with Closures",
    description:
      "Create a simple object with methods that can be chained (e.g., `calculator.add(5).subtract(2).value()`). Use closures to maintain the internal state.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Chaining",
  },
  // problem--> 66
  {
    id: "closures-lexical-environment-object",
    title: "Lexical Environment Object (Conceptual)",
    description:
      "Explain that a lexical environment is an internal specification object with an environment record (variables) and a reference to the outer environment.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 67
  {
    id: "closures-iterator-with-closure",
    title: "Iterator with a Closure",
    description:
      "Implement the iterator protocol for a custom object by having the `.next()` method be a closure that keeps track of the current position.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Iterator",
  },
  // problem--> 68
  {
    id: "closures-access-log",
    title: "Property Access Logger",
    description:
      "Create a function that takes an object and returns a new object. When a property is accessed on the new object, it should log the access and then return the original value.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Logger Proxy",
  },
  // problem--> 69
  {
    id: "closures-closures-vs-classes",
    title: "Closures vs. Classes (Conceptual)",
    description:
      "Compare and contrast using a closure/module pattern for private state versus using an ES6 class with private fields (`#`).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Comparison",
  },
  // problem--> 70
  {
    id: "closures-retry-operation",
    title: "Retry Operation",
    description:
      "Create a higher-order function `retry(fn, retries)` that attempts to call an async function. If it fails, it should retry up to `retries` times.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Retry",
  },
  // problem--> 71
  {
    id: "closures-timed-function",
    title: "Timed Function Execution",
    description:
      "Create a higher-order function `time(fn)` that returns a new function. When the new function is called, it should execute the original function, measure the execution time, and log it.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Timer",
  },
  // problem--> 72
  {
    id: "closures-history-of-calls",
    title: "Argument History",
    description:
      "Create a function `withHistory(fn)` that returns a new function. The new function should keep a history of all arguments it has been called with.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test History",
  },
  // problem--> 73
  {
    id: "closures-poly-currying",
    title: "Advanced Currying",
    description:
      "Create a higher-order function `curry(fn)` that can curry any function, regardless of its number of arguments.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Advanced Curry",
  },
  // problem--> 74
  {
    id: "closures-lazy-array-mapping",
    title: "Lazy Array Mapping",
    description:
      "Create a function that performs a lazy map. It should not compute the mapped values until they are explicitly requested one by one.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Lazy Map",
  },
  // problem--> 75
  {
    id: "closures-with-web-workers-conceptual",
    title: "Closures and Web Workers (Conceptual)",
    description:
      "Explain why you cannot directly pass a closure to a Web Worker and what happens to its lexical environment.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 76
  {
    id: "closures-alphabet-generator",
    title: "Alphabet Generator",
    description:
      'Create a function that, when called repeatedly, returns the next letter of the alphabet ("A", "B", "C", ...).',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Alphabet Gen",
  },
  // problem--> 77
  {
    id: "closures-function-negation",
    title: "Function Negation",
    description:
      "Create a higher-order function `negate(predicate)` that returns a new function that will return the opposite boolean value of the original predicate function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Negate",
  },
  // problem--> 78
  {
    id: "closures-closures-in-recursion",
    title: "Closures in Recursion",
    description:
      "Demonstrate how a closure can be used to maintain state (like a cache) across multiple recursive calls to a function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Recursive Cache",
  },
  // problem--> 79
  {
    id: "closures-multi-level-memoization",
    title: "Multi-Level Memoization",
    description:
      "Create a memoization function that can handle functions with multiple arguments by creating a nested cache structure.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Multi-Arg Memo",
  },
  // problem--> 80
  {
    id: "closures-with-proxy-api",
    title: "Closures with the Proxy API",
    description:
      "Use a closure inside a Proxy handler to maintain private state or metadata about the proxy target.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Proxy Closure",
  },
  // problem--> 81
  {
    id: "closures-cache-invalidation",
    title: "Cache Invalidation",
    description:
      "Create a memoized function that also returns a method to manually invalidate and clear the cache.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Invalidation",
  },
  // problem--> 82
  {
    id: "closures-finite-state-machine",
    title: "Finite State Machine",
    description:
      "Implement a simple finite state machine (e.g., for a traffic light) using a closure to hold the current state.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test FSM",
  },
  // problem--> 83
  {
    id: "closures-shared-cache-module",
    title: "Shared Cache Module",
    description:
      "Create a module that provides `get` and `set` methods for a cache. Any part of the application that imports this module should interact with the same, single cache instance.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Module Cache",
  },
  // problem--> 84
  {
    id: "closures-closures-with-eval-conceptual",
    title: "Closures and `eval` (Conceptual)",
    description:
      "Explain how `eval` can interact with and even modify the lexical scope, and why this is generally considered a bad practice.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 85
  {
    id: "closures-closures-with-with-conceptual",
    title: "Closures and `with` (Conceptual)",
    description:
      "Explain how the `with` statement (now deprecated) dynamically alters the scope chain, and how this can unpredictably affect closures.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 86
  {
    id: "closures-tap-function",
    title: "The `tap` Function",
    description:
      'Create a higher-order function `tap(value, fn)` that calls `fn` with `value` and then returns `value`. This is useful for "tapping into" a chain of operations for debugging.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Tap",
  },
  // problem--> 87
  {
    id: "closures-accumulating-function",
    title: "Accumulator",
    description:
      "Create a function that takes an initial value. It should return a new function that takes another value and adds it to the accumulator, returning the new total.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Accumulator",
  },
  // problem--> 88
  {
    id: "closures-closures-in-jsonp-conceptual",
    title: "Closures in JSONP (Conceptual)",
    description:
      "Explain how closures are fundamental to the JSONP technique for making cross-domain requests, by creating a temporary global callback function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 89
  {
    id: "closures-lifecycle-events",
    title: "Lifecycle Events",
    description:
      "Create a function `withLifecycle(obj)` that adds `on` and `trigger` methods. Use closures to manage a private list of event listeners for the object.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Lifecycle",
  },
  // problem--> 90
  {
    id: "closures-spread-args",
    title: "Spreading Arguments in a Closure",
    description:
      "Create a higher-order function that logs arguments before calling the original function. Use the spread syntax to pass the arguments through.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Spread",
  },
  // problem--> 91
  {
    id: "closures-closures-in-nodejs-streams-conceptual",
    title: "Closures in Node.js Streams (Conceptual)",
    description:
      'Explain how event listeners on Node.js streams (`.on("data", ...)` ) are closures that can access variables from the scope where the stream was created.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 92
  {
    id: "closures-feature-flag-module",
    title: "Feature Flag Module",
    description:
      "Create a module for managing feature flags. It should have `setFlag(name, bool)` and `isEnabled(name)` methods, with the flags object being private.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Flags",
  },
  // problem--> 93
  {
    id: "closures-polyfill-bind-conceptual",
    title: "Polyfilling `.bind()`",
    description:
      "Conceptually explain how you would write a polyfill for `Function.prototype.bind` using closures to store the context (`thisArg`) and initial arguments.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Polyfill",
  },
  // problem--> 94
  {
    id: "closures-async-data-loader",
    title: "Async Data Loader with Cache",
    description:
      "Create a function that fetches data from an API. It should use a closure to cache the data, so subsequent calls return the cached data instead of making another network request.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Loader",
  },
  // problem--> 95
  {
    id: "closures-closures-in-web-components-conceptual",
    title: "Closures in Web Components (Conceptual)",
    description:
      "Explain how event listeners and methods within a custom element's class definition create closures over the component's instance properties and state.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 96
  {
    id: "closures-pipeline-function",
    title: "Function Pipeline",
    description:
      "Create a function `pipeline(...funcs)` that takes multiple functions and returns a new function. The new function passes its argument to the first function, the result to the second, and so on.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Pipeline",
  },
  // problem--> 97
  {
    id: "closures-execution-context-vs-scope",
    title: "Execution Context vs. Scope (Conceptual)",
    description:
      "Clarify the difference: an execution context is a temporary environment created when a function is called, while a scope (or lexical environment) is defined by where the function was written.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Difference",
  },
  // problem--> 98
  {
    id: "closures-dependency-injection",
    title: "Dependency Injection",
    description:
      'Create a function that takes a "service" (like a logger or API client) as an argument. Return a new function that is now "injected" with and can use that service via a closure.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Injection",
  },
  // problem--> 99
  {
    id: "closures-closures-in-es6-modules",
    title: "Closures in ES6 Modules",
    description:
      'Explain how top-level variables in an ES6 module are not global. They exist in a private "module scope," and functions exported from the module form closures over this scope.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Module Scope",
  },
  // problem--> 100
  {
    id: "closures-the-final-countdown",
    title: "The Final Countdown",
    description:
      'Create a function `countdown(n)` that returns a function. Each time the returned function is called, it logs the next number down from `n`, until it reaches 0 and logs "Blastoff!".',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Countdown",
  },
  // problem--> 101
  {
    id: "closures-hot-and-cold-observables",
    title: "Hot vs. Cold Observables (Conceptual)",
    description:
      'Explain how closures are used in reactive programming to create "cold" observables, where each subscriber gets its own private data producer.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 102
  {
    id: "closures-custom-array-methods",
    title: "Custom Array-Like Methods",
    description:
      "Create a function that wraps an array and returns an object with custom methods like `first()`, `last()`, and `take(n)`, using a closure to hold the array.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Custom Array",
  },
  // problem--> 103
  {
    id: "closures-binary-function-adapter",
    title: "Binary Function Adapter",
    description:
      "Create a higher-order function `binary(fn)` that takes a function with any number of arguments and returns a new function that only accepts the first two.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Binary Adapter",
  },
  // problem--> 104
  {
    id: "closures-function-delay",
    title: "Delayed Invocation",
    description:
      "Create a higher-order function `delay(fn, ms)` that returns a new function. When called, the new function will invoke `fn` after `ms` milliseconds.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Delay",
  },
  // problem--> 105
  {
    id: "closures-game-character-factory",
    title: "Game Character Factory",
    description:
      "Create a function that makes game characters. It should have private stats (health, mana) and public methods (`takeDamage`, `castSpell`).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Character",
  },
  // problem--> 106
  {
    id: "closures-closures-with-symbols",
    title: "Closures with Symbols",
    description:
      "Use a Symbol as a private key within a closure to store a value, demonstrating an alternative way to achieve privacy.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Symbol Privacy",
  },
  // problem--> 107
  {
    id: "closures-closures-with-generators-and-next",
    title: "Passing Values to Generators",
    description:
      "Show how a value passed to a generator's `.next(value)` call can be accessed by a closure defined inside the generator.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Gen Closure",
  },
  // problem--> 108
  {
    id: "closures-immutable-state-manager",
    title: "Immutable State Manager",
    description:
      "Create a simple state manager that holds a state object. Its `updateState` method must create a new state object instead of mutating the old one.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Immutable State",
  },
  // problem--> 109
  {
    id: "closures-the-this-keyword-in-loops",
    title: "`this` Inside Loop Callbacks",
    description:
      "Demonstrate how a traditional function callback inside a loop loses its `this` context, and how an arrow function solves this by lexical capture.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Compare `this`",
  },
  // problem--> 110
  {
    id: "closures-lock-and-key",
    title: "Lock and Key",
    description:
      "Create a function `createLock()` that returns a `lock` and `unlock` function. The `lock` can only be opened by its corresponding `unlock` function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Lock",
  },
  // problem--> 111
  {
    id: "closures-polling-function",
    title: "Polling Function",
    description:
      "Create a function `poll(fn, interval)` that calls `fn` repeatedly every `interval` milliseconds. It should return a `stop` function to end the polling.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Polling",
  },
  // problem--> 112
  {
    id: "closures-closures-in-error-handling",
    title: "Closures in Error Handlers",
    description:
      "Show how a `.catch` block on a promise is a closure that can access variables from the scope where the promise was created.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Catch Closure",
  },
  // problem--> 113
  {
    id: "closures-timed-once-function",
    title: "Timed `once` Function",
    description:
      "Create a function `once(fn, timeout)` that returns a function that can only be called once within a given `timeout` period.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Timed Once",
  },
  // problem--> 114
  {
    id: "closures-dynamic-scope-vs-lexical-scope",
    title: "Dynamic vs. Lexical Scope (Conceptual)",
    description:
      "Explain dynamic scope (where scope is determined by the call stack) and clarify that JavaScript uses lexical scope, not dynamic scope.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 115
  {
    id: "closures-closures-in-bookmorklets-conceptual",
    title: "Closures in Bookmarklets (Conceptual)",
    description:
      "Explain how an IIFE is crucial for writing bookmarklets to prevent variables from colliding with the global scope of the host page.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 116
  {
    id: "closures-settings-manager",
    title: "Settings Manager",
    description:
      "Create a settings manager with `get(key)`, `set(key, value)`, and `getAll()` methods. The settings object must be private.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Settings",
  },
  // problem--> 117
  {
    id: "closures-unary-function-adapter",
    title: "Unary Function Adapter",
    description:
      "Create a HOF `unary(fn)` that takes a function and returns one that accepts only one argument. This is useful for callbacks like `parseInt` in `map`.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Unary Adapter",
  },
  // problem--> 118
  {
    id: "closures-closures-in-server-middlewares",
    title: "Server Middlewares (Conceptual)",
    description:
      "Explain how Express.js-style middleware factories `(options) => (req, res, next) => {...}` are a powerful use of closures to configure middleware behavior.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 119
  {
    id: "closures-function-spy",
    title: "Function Spy",
    description:
      "Create a HOF `spyOn(fn)` that returns a new function. The new function should track how many times it was called and with what arguments.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Spy",
  },
  // problem--> 120
  {
    id: "closures-deeply-nested-scope-chain",
    title: "Deeply Nested Scope Chain",
    description:
      "Create a chain of 5 nested functions and have the innermost function access a variable from the outermost scope to highlight the chain lookup.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Deep Chain",
  },
  // problem--> 121
  {
    id: "closures-instance-counter",
    title: "Class Instance Counter",
    description:
      "Use a closure outside a class definition to keep a private static-like counter for how many instances of the class have been created.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Instance Count",
  },
  // problem--> 122
  {
    id: "closures-command-pattern",
    title: "Command Pattern",
    description:
      "Implement the Command design pattern where a command object encapsulates an action and its parameters, using a closure to bind the receiver and the action.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Command",
  },
  // problem--> 123
  {
    id: "closures-shopping-cart",
    title: "Shopping Cart Module",
    description:
      "Create a shopping cart module with `addItem`, `getCart`, and `getTotal`. The cart array and calculation logic should be private.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Cart",
  },
  // problem--> 124
  {
    id: "closures-hoisting-with-functions",
    title: "Function Hoisting vs. Closures",
    description:
      "Show how a function declaration is fully hoisted, while a function expression assigned to a `var` is not, and how this interacts with closures.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Compare Hoisting",
  },
  // problem--> 125
  {
    id: "closures-collecting-garbage",
    title: "Breaking a Closure Reference",
    description:
      "Demonstrate how setting a function that forms a closure to `null` allows the variables it was holding onto to be garbage collected.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain GC",
  },
  // problem--> 126
  {
    id: "closures-async-semaphore",
    title: "Async Semaphore",
    description:
      "Implement an async semaphore using closures to limit the number of concurrent async operations.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Semaphore",
  },
  // problem--> 127
  {
    id: "closures-closures-with-rest-parameters",
    title: "Closures with Rest Parameters",
    description:
      "Show how an inner function can form a closure over a rest parameter (`...args`) from its outer function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Rest Params",
  },
  // problem--> 128
  {
    id: "closures-closures-in-tagged-templates",
    title: "Closures in Tagged Templates",
    description:
      "Create a tagged template literal function that uses a closure to maintain state between template evaluations.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Tagged Template",
  },
  // problem--> 129
  {
    id: "closures-cancellable-interval",
    title: "Cancellable Interval",
    description:
      "Create a `cancellableInterval` function that works like `setInterval` but returns an object with a `cancel` method to stop it.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Interval",
  },
  // problem--> 130
  {
    id: "closures-the- revealing-module-pattern",
    title: "The Revealing Module Pattern",
    description:
      "Implement the Revealing Module Pattern, where an object literal is returned at the end that maps to the private functions and variables.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Revealing Module",
  },
  // problem--> 131
  {
    id: "closures-closures-over-block-scope",
    title: "Closure Over a Block Scope",
    description:
      "Explicitly show that a function can form a closure over a simple `{}` block scope, not just a function scope, thanks to `let` and `const`.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Block Scope Closure",
  },
  // problem--> 132
  {
    id: "closures-timed-cache",
    title: "Cache with TTL (Time To Live)",
    description:
      "Create a cache module where each entry has a specific time-to-live (TTL). After the TTL expires, the entry should be considered invalid.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test TTL Cache",
  },
  // problem--> 133
  {
    id: "closures-logging-decorator",
    title: "Logging Decorator",
    description:
      "Create a HOF `withLogging(fn)` that returns a new function. The new function logs when it's called and what it returns, before returning the value.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Decorator",
  },
  // problem--> 134
  {
    id: "closures-closures-in-web-assembly-conceptual",
    title: "Closures and WebAssembly (Conceptual)",
    description:
      "Explain how closures can be used on the JavaScript side to manage state for functions exported from a WebAssembly module.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 135
  {
    id: "closures-memoize-async-function",
    title: "Memoize an Async Function",
    description:
      "Create a memoization HOF that works correctly for async functions, caching the promised result and handling in-flight requests for the same arguments.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Async Memo",
  },
  // problem--> 136
  {
    id: "closures-closures-and-prototypal-inheritance",
    title: "Closures vs. Prototypal Inheritance",
    description:
      "Create an object using a constructor and another using a factory function (closure). Compare how they achieve state encapsulation and method sharing.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Compare Patterns",
  },
  // problem--> 137
  {
    id: "closures-lazy-data-initialization",
    title: "Lazy Initialization",
    description:
      "Create a module that has an expensive resource. This resource should only be initialized the first time it is requested, not when the module is defined.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Lazy Init",
  },
  // problem--> 138
  {
    id: "closures-conditional-logging",
    title: "Conditional Logging",
    description:
      "Create a logger factory `createLogger(level)` that returns a logger. The logger should only output messages that are at or above its configured level (e.g., INFO, WARN, ERROR).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Conditional Logger",
  },
  // problem--> 139
  {
    id: "closures-object-pool",
    title: "Object Pool Pattern",
    description:
      "Implement a simple object pool using closures to manage a private list of available and in-use objects to reduce the cost of object creation.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Object Pool",
  },
  // problem--> 140
  {
    id: "closures-closures-with-web-sockets-conceptual",
    title: "Closures in WebSocket Handlers (Conceptual)",
    description:
      "Explain how `socket.onmessage` and other WebSocket event handlers are closures that can interact with the state of your application.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 141
  {
    id: "closures-function-is-callable-check",
    title: "Is-Callable Check",
    description:
      "Create a HOF `callable(fn)` that returns a function which first checks if `fn` is still a function before calling it. Useful for dynamic callbacks that might be reassigned.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Callable Check",
  },
  // problem--> 142
  {
    id: "closures-chain-of-responsibility",
    title: "Chain of Responsibility Pattern",
    description:
      "Implement the Chain of Responsibility design pattern using closures, where a request is passed through a chain of handlers until one can process it.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Chain",
  },
  // problem--> 143
  {
    id: "closures-router-implementation",
    title: "Simple Router",
    description:
      "Implement a simple client-side router using closures to store a private routing table (`path -> callback`).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Router",
  },
  // problem--> 144
  {
    id: "closures-closures-over-getters-setters",
    title: "Closures Over Getters and Setters",
    description:
      "Show how a closure can capture and interact with an object that has getter and setter properties.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Getters/Setters",
  },
  // problem--> 145
  {
    id: "closures-internationalization-i18n",
    title: "Internationalization (i18n) Module",
    description:
      "Create a simple i18n module `createTranslator(translations)` that returns a `t(key)` function. The `t` function uses a closure to access the correct translation dictionary.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Translator",
  },
  // problem--> 146
  {
    id: "closures-once-per-argument",
    title: "`once` Per Argument",
    description:
      "Create a version of the `memoize` function that only caches the result, effectively ensuring the original function is only called once *per unique argument*.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Once Per Arg",
  },
  // problem--> 147
  {
    id: "closures-global-variable-shadowing",
    title: "Shadowing a Global Variable",
    description:
      "Demonstrate how a variable in an outer function scope can shadow a global variable (e.g., `name` or `length`), and how a closure will correctly reference the shadowed variable.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Global Shadowing",
  },
  // problem--> 148
  {
    id: "closures-call-count-limiter",
    title: "Call Count Limiter with Reset",
    description:
      "Create a HOF that limits a function to N calls, but also returns a `reset` function to reset the call counter.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Limiter with Reset",
  },
  // problem--> 149
  {
    id: "closures-closures-and-memory-profiling",
    title: "Memory Profiling Closures (Conceptual)",
    description:
      'Explain how to use browser developer tools to inspect the "Closure" section in the scope pane and identify variables being retained by a closure.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Profiling",
  },
  // problem--> 150
  {
    id: "closures-final-challenge-build-a-stream",
    title: "Final Challenge: Build a Simple Stream",
    description:
      'Build a simple "stream" or "observable" object. It should have a `subscribe` method that accepts a callback. Use a closure to manage a private list of subscribers.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Stream",
  },
  // problem--> 151
  {
    id: "closures-alternating-function",
    title: "Alternating Function",
    description:
      "Create a HOF `alternate(f, g)` that returns a function. The first call executes `f`, the second executes `g`, the third `f`, and so on.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Alternator",
  },
  // problem--> 152
  {
    id: "closures-circuit-breaker-pattern",
    title: "Circuit Breaker Pattern",
    description:
      "Implement a simple Circuit Breaker. Create a HOF that wraps a function. After N failures, it should 'trip' and stop trying to execute the function for a while.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Circuit Breaker",
  },
  // problem--> 153
  {
    id: "closures-private-property-bag",
    title: "Private Property Bag",
    description:
      "Use a `WeakMap` and a closure to associate truly private data with an object instance, a pattern used before native private fields.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test WeakMap Privacy",
  },
  // problem--> 154
  {
    id: "closures-lexical-environment-on-creation",
    title: "Environment Captured on Creation",
    description:
      "Demonstrate that a closure's lexical environment is determined when the function is *created*, not when it is *called*.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Creation Test",
  },
  // problem--> 155
  {
    id: "closures-batch-processor",
    title: "Batch Processor",
    description:
      "Create a function `createBatcher(processFn, threshold)` that collects items. When the number of items reaches the threshold, it calls `processFn` with all of them.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Batcher",
  },
  // problem--> 156
  {
    id: "closures-auto-incrementing-keys",
    title: "Auto-Incrementing Object Keys",
    description:
      "Create a function that returns an object with an `add` method. Each item added should be assigned a unique, auto-incrementing private ID.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Auto-Increment",
  },
  // problem--> 157
  {
    id: "closures-closures-with-dynamic-new-function",
    title: "Closures with `new Function()`",
    description:
      "Explain that functions created with `new Function()` do NOT create closures over their lexical environment; they only have access to the global scope.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Demonstrate `new Function`",
  },
  // problem--> 158
  {
    id: "closures-cancellable-promise",
    title: "Cancellable Promise Wrapper",
    description:
      "Create a function that wraps a Promise and returns an object containing the promise and a `cancel` method which prevents the promise's `then` from firing.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Cancellation",
  },
  // problem--> 159
  {
    id: "closures-api-versioning",
    title: "API Versioning",
    description:
      "Create a function `getAPI(version)` that returns an API object. The methods in the object should use the `version` from the closure to make calls to the correct endpoint.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test API Versioning",
  },
  // problem--> 160
  {
    id: "closures-undo-redo-manager",
    title: "Undo/Redo Manager",
    description:
      "Create a state manager with `setState`, `undo`, and `redo` methods, using closures to manage a private history of states.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Undo/Redo",
  },
  // problem--> 161
  {
    id: "closures-timed-batcher",
    title: "Timed Batch Processor",
    description:
      "Create a batch processor that processes items either when a threshold is met OR after a certain amount of time has passed, whichever comes first.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Timed Batcher",
  },
  // problem--> 162
  {
    id: "closures-fibonacci-generator",
    title: "Fibonacci Sequence Generator",
    description:
      "Create a function that, when called repeatedly, returns the next number in the Fibonacci sequence (0, 1, 1, 2, 3, ...).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Fibonacci",
  },
  // problem--> 163
  {
    id: "closures-closures-in-react-class-components",
    title: "Closures in React Classes (Conceptual)",
    description:
      "Explain how event handlers in React class components (e.g., `onClick={this.handleClick}`) can create closures if they are defined as arrow functions.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 164
  {
    id: "closures-mutex-lock",
    title: "Mutex for Async Functions",
    description:
      "Implement a `Mutex` (mutual exclusion lock). Create a function `withLock(asyncFn)` that ensures only one execution of `asyncFn` can happen at a time.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Mutex",
  },
  // problem--> 165
  {
    id: "closures-closures-in-service-workers",
    title: "Closures in Service Workers (Conceptual)",
    description:
      "Explain how event listeners (`'fetch'`, `'push'`) in a service worker are long-lived closures that can maintain state even when the browser tab is closed.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 166
  {
    id: "closures-lazy-getter-pattern",
    title: "Lazy Getter Pattern",
    description:
      "Implement an object where a property's expensive value is only computed the first time it is accessed, using a closure to store the computed value.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Lazy Getter",
  },
  // problem--> 167
  {
    id: "closures-closures-in-destructuring-defaults",
    title: "Closures in Destructuring Defaults",
    description:
      "Show how a default value in destructuring can be a function call that creates a closure.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Example",
  },
  // problem--> 168
  {
    id: "closures-private-slots-in-custom-elements",
    title: "Private Slots in Custom Elements",
    description:
      "Use a `WeakMap` and closures to simulate private instance variables ('slots') for Custom Elements, a common pattern before class fields were widely available.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Pattern",
  },
  // problem--> 169
  {
    id: "closures-state-reducer-pattern",
    title: "State Reducer Pattern",
    description:
      "Implement a simple state store using the reducer pattern. Create a `createStore(reducer)` function where the state is kept private in a closure.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Reducer",
  },
  // problem--> 170
  {
    id: "closures-lexical-vs-dynamic-this",
    title: "Revisiting Lexical vs Dynamic `this`",
    description:
      "Create a scenario with nested regular and arrow functions to clearly demonstrate the difference between lexically captured `this` and dynamically bound `this`.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Comparison",
  },
  // problem--> 171
  {
    id: "closures-scoped-css-in-js",
    title: "Scoped CSS-in-JS (Conceptual)",
    description:
      "Explain how CSS-in-JS libraries use closures to generate unique class names for components, effectively creating a private, scoped CSS-like environment.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 172
  {
    id: "closures-promisify-a-callback",
    title: "Promisify a Callback Function",
    description:
      "Create a HOF `promisify(fn)` that converts a Node.js-style callback function `(err, data) => ...` into a function that returns a promise.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Promisify",
  },
  // problem--> 173
  {
    id: "closures-chainable-api-with-async",
    title: "Chainable API with Async Methods",
    description:
      "Create a chainable (fluent) API where some of the methods are asynchronous, using closures to manage the promise chain internally.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Async Chaining",
  },
  // problem--> 174
  {
    id: "closures-memoize-with-custom-resolver",
    title: "Memoize with Custom Resolver",
    description:
      "Create a `memoize(fn, resolver)` HOF where the `resolver` function determines the cache key from the arguments.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Custom Memo",
  },
  // problem--> 175
  {
    id: "closures-closures-in-webgl-conceptual",
    title: "Closures in WebGL (Conceptual)",
    description:
      "Explain how closures are used to manage state and resources like shaders and buffers when setting up a WebGL rendering loop.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 176
  {
    id: "closures-timed-retry",
    title: "Retry with Exponential Backoff",
    description:
      "Implement an async retry function that waits progressively longer between retries (exponential backoff), using closures to track the attempt number.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Backoff",
  },
  // problem--> 177
  {
    id: "closures-environment-variable-provider",
    title: "Environment Variable Provider",
    description:
      "Create a module that reads environment variables once, stores them in a private closure, and provides a `get(key)` method to securely access them.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Env Provider",
  },
  // problem--> 178
  {
    id: "closures-function-overloading",
    title: "Function Overloading Simulation",
    description:
      "Simulate function overloading by creating a function that internally uses a closure to store different implementations and dispatches based on argument type or count.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Overloading",
  },
  // problem--> 179
  {
    id: "closures-scope-injection",
    title: "Scope Injection",
    description:
      "Create a function that takes an object and a function. It should execute the function in a way that the object's properties are available as local variables (simulating a `with`-like behavior safely).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Scope Injection",
  },
  // problem--> 180
  {
    id: "closures-closures-in-web-audio-api-conceptual",
    title: "Closures in Web Audio API (Conceptual)",
    description:
      "Explain how closures are used to manage audio nodes and their connections in a Web Audio API graph, even when events trigger changes.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 181
  {
    id: "closures-multi-step-form-wizard",
    title: "Multi-Step Form Wizard",
    description:
      'Create a "wizard" that manages the state of a multi-step form. It should have `next()`, `prev()`, and `getData()` methods, with the current step and form data kept private.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Wizard",
  },
  // problem--> 182
  {
    id: "closures-async-task-queue",
    title: "Sequential Async Task Queue",
    description:
      'Create a task queue that executes asynchronous tasks sequentially, one after another, using closures to manage the queue and the "in-progress" state.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Task Queue",
  },
  // problem--> 183
  {
    id: "closures-closures-in-proxy-traps",
    title: "Closures Inside Proxy Traps",
    description:
      "Demonstrate how a closure inside a Proxy trap (like `get` or `set`) can access variables from the scope where the proxy handler was defined.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Trap Closure",
  },
  // problem--> 184
  {
    id: "closures-conditional-memoization",
    title: "Conditional Memoization",
    description:
      "Create a memoization HOF that only caches the result if it meets a certain condition (e.g., is not `null` or `undefined`).",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Conditional Memo",
  },
  // problem--> 185
  {
    id: "closures-plugin-system",
    title: "Simple Plugin System",
    description:
      "Create a system where plugins (functions) can be registered. Use a closure to maintain a private list of registered plugins.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Plugin System",
  },
  // problem--> 186
  {
    id: "closures-the-y-combinator-conceptual",
    title: "The Y Combinator (Conceptual)",
    description:
      "Explain how the Y Combinator, a concept from functional programming, can be used to achieve recursion without named functions, relying heavily on closures.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 187
  {
    id: "closures-contextual-error-logging",
    title: "Contextual Error Logging",
    description:
      "Create an error logging factory that adds contextual information (e.g., user ID, request ID) to every log message, using a closure to hold the context.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Contextual Logger",
  },
  // problem--> 188
  {
    id: "closures-closures-vs-iife-for-loops",
    title: "Revisiting Loop Solutions",
    description:
      "Directly compare the IIFE solution for the `var` loop problem with the modern `let` solution, highlighting why `let` is cleaner and preferred.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Compare Solutions",
  },
  // problem--> 189
  {
    id: "closures-secret-handshake",
    title: "Secret Handshake",
    description:
      'Create a function that returns two functions. One can "set" a secret, and the other can "get" it, but a third-party cannot access the secret.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Handshake",
  },
  // problem--> 190
  {
    id: "closures-event-stream-processor",
    title: "Event Stream Processor",
    description:
      "Create a function that processes a stream of events. It should use a closure to maintain an aggregate state (e.g., a running total) over all events seen so far.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Stream Processor",
  },
  // problem--> 191
  {
    id: "closures-closures-in-d3-js-conceptual",
    title: "Closures in D3.js (Conceptual)",
    description:
      'Explain how D3.js extensively uses closures in its accessor functions (e.g., `.attr("cx", d => d.x)`) to bind data to visual elements.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 192
  {
    id: "closures-rolling-average-calculator",
    title: "Rolling Average Calculator",
    description:
      "Create a function that takes a window size `N`. It should return a function that accepts numbers and returns the rolling average of the last `N` numbers.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Rolling Average",
  },
  // problem--> 193
  {
    id: "closures-closures-with-top-level-await",
    title: "Closures with Top-Level `await`",
    description:
      "Show how a function in a module can form a closure over a variable that was initialized using top-level `await`.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 194
  {
    id: "closures-deeply-nested-this-and-closures",
    title: "Deeply Nested `this` and Closures",
    description:
      "Create a complex object with nested methods containing both regular and arrow functions to fully explore the interplay between dynamic `this` and lexical scope.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Run Deep Test",
  },
  // problem--> 195
  {
    id: "closures-transactional-state-updates",
    title: "Transactional State Updates",
    description:
      'Create a state manager where updates can be batched into a "transaction". The transaction can be committed or rolled back, using a closure to hold the pending changes.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Transaction",
  },
  // problem--> 196
  {
    id: "closures-custom-promise-implementation",
    title: "Custom Promise (Conceptual)",
    description:
      "Explain how closures are the core mechanism in a Promise implementation for storing the `then` and `catch` callbacks until the promise is settled.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Implementation",
  },
  // problem--> 197
  {
    id: "closures-private-static-members-simulation",
    title: "Private Static Members Simulation",
    description:
      "Before native private static fields, show how an IIFE could be used to simulate private static members for a constructor function.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Static Simulation",
  },
  // problem--> 198
  {
    id: "closures-performance-of-closures-conceptual",
    title: "Performance of Closures (Conceptual)",
    description:
      "Discuss the performance implications of closures, including slightly increased memory usage and scope chain lookup time, and why it's usually a micro-optimization.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Discuss Performance",
  },
  // problem--> 199
  {
    id: "closures-declarative-event-listener",
    title: "Declarative Event Listener",
    description:
      'Create a HOF `withEventListener(element, event, handler)` that returns a "cleanup" function, using a closure to remember which handler to remove.',
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Explain Pattern",
  },
  // problem--> 200
  {
    id: "closures-ultimate-challenge-redux-store",
    title: "Ultimate Challenge: A Mini Redux",
    description:
      "Implement a tiny version of a Redux store with `getState`, `dispatch`, and `subscribe`. Use closures to manage the private state, listeners, and reducer.",
    category: "Closures & Lexical Environment",
    inputs: [],
    buttonText: "Test Mini Redux",
  },
];
