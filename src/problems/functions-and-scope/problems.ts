import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "simple-function-return",
    title: "Simple Function Return",
    description:
      "Define a function that takes no arguments and returns a specific string.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Call Function",
    difficulty: "Beginner",
  },
  // problem--> 02
  {
    id: "function-with-parameters",
    title: "Function with Parameters",
    description:
      "Write a function that takes two numbers as parameters and returns their product.",
    category: "Functions and Scope",
    inputs: [
      { id: "a", label: "First Number", type: "number", defaultValue: 8 },
      { id: "b", label: "Second Number", type: "number", defaultValue: 4 },
    ],
    buttonText: "Calculate Product",
    difficulty: "Beginner",
  },
  // problem--> 03
  {
    id: "arrow-function-syntax",
    title: "Arrow Function Syntax",
    description:
      "Rewrite a simple function that calculates the square of a number using arrow function syntax.",
    category: "Functions and Scope",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 9 }],
    buttonText: "Square with Arrow",
    difficulty: "Beginner",
  },
  // problem--> 04
  {
    id: "function-declaration",
    title: "Function Declaration",
    description:
      "Create a function using the `function` keyword. This method is subject to hoisting.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Declare and Call",
    difficulty: "Beginner",
  },
  // problem--> 05
  {
    id: "function-expression",
    title: "Function Expression",
    description:
      "Create a function by assigning an anonymous function to a variable. These are not fully hoisted.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Create Expression",
    difficulty: "Beginner",
  },
  // problem--> 06
  {
    id: "default-parameters",
    title: "Default Parameters",
    description:
      "Write a function that greets a user, but defaults to 'Guest' if no name is provided.",
    category: "Functions and Scope",
    inputs: [{ id: "name", label: "Name (optional)", type: "text" }],
    buttonText: "Greet User",
    difficulty: "Beginner",
  },
  // problem--> 07
  {
    id: "rest-parameters-sum",
    title: "Rest Parameters for Summation",
    description:
      "Write a function that uses rest parameters to accept any number of arguments and returns their sum.",
    category: "Functions and Scope",
    inputs: [
      {
        id: "numbers",
        label: "Numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Sum All",
    difficulty: "Intermediate",
  },
  // problem--> 08
  {
    id: "iife-pattern",
    title: "Immediately Invoked Function Expression (IIFE)",
    description:
      "Use an IIFE to create a private scope and execute a function immediately upon definition.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Run IIFE",
    difficulty: "Intermediate",
  },
  // problem--> 09
  {
    id: "hoisting-declaration",
    title: "Hoisting: Function Declaration",
    description:
      "Demonstrate that a function declaration can be called before it is defined in the code due to hoisting.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Hoisting",
    difficulty: "Intermediate",
  },
  // problem--> 10
  {
    id: "hoisting-expression-var",
    title: "Hoisting: Function Expression (var)",
    description:
      "Show that a function expression assigned to a `var` is hoisted, but only the variable declaration, not the function assignment.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `var` Hoisting",
    difficulty: "Intermediate",
  },
  // problem--> 11
  {
    id: "global-scope",
    title: "Global Scope",
    description:
      "Declare a variable in the global scope and access it from within a function.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Access Global Var",
    difficulty: "Beginner",
  },
  // problem--> 12
  {
    id: "function-scope",
    title: "Function Scope",
    description:
      "Show that a variable declared with `var` inside a function is not accessible from outside that function.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Function Scope",
    difficulty: "Beginner",
  },
  // problem--> 13
  {
    id: "block-scope-let",
    title: "Block Scope with `let`",
    description:
      "Demonstrate that a variable declared with `let` inside a block (e.g., an if-statement) is not accessible outside that block.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Block Scope",
    difficulty: "Beginner",
  },
  // problem--> 14
  {
    id: "scope-chain",
    title: "Scope Chain",
    description:
      "Demonstrate the scope chain by having a deeply nested function access a variable from its grandparent scope.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Scope Chain",
    difficulty: "Intermediate",
  },
  // problem--> 15
  {
    id: "pure-function",
    title: "Pure Function Example",
    description:
      "Write a pure function that takes a number and returns its value doubled. A pure function has no side effects.",
    category: "Functions and Scope",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 10 }],
    buttonText: "Double Purely",
    difficulty: "Intermediate",
  },
  // problem--> 16
  {
    id: "impure-function",
    title: "Impure Function Example",
    description:
      "Write an impure function that modifies an external variable. Its output is not solely determined by its input.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Run Impure Function",
    difficulty: "Intermediate",
  },
  // problem--> 17
  {
    id: "higher-order-function-argument",
    title: "Higher-Order Function: Passing a Function",
    description:
      "Create a higher-order function that takes a number and a callback function, and applies the callback to the number.",
    category: "Functions and Scope",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Apply Function",
    difficulty: "Intermediate",
  },
  // problem--> 18
  {
    id: "higher-order-function-return",
    title: "Higher-Order Function: Returning a Function",
    description:
      "Create a higher-order function that returns a new function. The returned function should multiply its argument by a specific number.",
    category: "Functions and Scope",
    inputs: [
      {
        id: "multiplier",
        label: "Multiplier",
        type: "number",
        defaultValue: 3,
      },
      {
        id: "num",
        label: "Number to Multiply",
        type: "number",
        defaultValue: 7,
      },
    ],
    buttonText: "Create and Use Multiplier",
    difficulty: "Intermediate",
  },
  // problem--> 19
  {
    id: "sync-callback",
    title: "Synchronous Callback",
    description:
      "Create a function that processes an array and executes a callback function for each item synchronously.",
    category: "Functions and Scope",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "apple, banana, cherry",
      },
    ],
    buttonText: "Process with Callback",
    difficulty: "Intermediate",
  },
  // problem--> 20
  {
    id: "arguments-object",
    title: "The `arguments` Object",
    description:
      "Write a function using the `function` keyword that uses the array-like `arguments` object to sum all values passed to it.",
    category: "Functions and Scope",
    inputs: [
      {
        id: "numbers",
        label: "Numbers (comma-separated)",
        type: "text",
        defaultValue: "10, 20, 30",
      },
    ],
    buttonText: "Sum with `arguments`",
    difficulty: "Intermediate",
  },
  // problem--> 21
  {
    id: "object-method-this",
    title: "Object Method and `this`",
    description:
      "Create an object with a method that uses the `this` keyword to access another property of the same object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Call Object Method",
    difficulty: "Intermediate",
  },
  // problem--> 22
  {
    id: "this-global-scope",
    title: "`this` in the Global Scope",
    description:
      "Demonstrate what `this` refers to in the global scope in a browser environment (non-strict mode).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Check Global `this`",
    difficulty: "Intermediate",
  },
  // problem--> 23
  {
    id: "this-arrow-function-lexical",
    title: "Lexical `this` in Arrow Functions",
    description:
      "Show how an arrow function does not have its own `this` binding but inherits it from the surrounding (lexical) scope.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Arrow Function `this`",
    difficulty: "Intermediate",
  },
  // problem--> 24
  {
    id: "function-call-method",
    title: "Function `.call()` Method",
    description:
      "Use the `.call()` method to invoke a function with a specified `this` context and individual arguments.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use `.call()`",
    difficulty: "Intermediate",
  },
  // problem--> 25
  {
    id: "function-apply-method",
    title: "Function `.apply()` Method",
    description:
      "Use the `.apply()` method to invoke a function with a specified `this` context and arguments provided as an array.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use `.apply()`",
    difficulty: "Intermediate",
  },
  // problem--> 26
  {
    id: "function-bind-method",
    title: "Function `.bind()` Method",
    description:
      "Use the `.bind()` method to create a new function that, when called, has its `this` keyword set to a provided value.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use `.bind()`",
    difficulty: "Intermediate",
  },
  // problem--> 27
  {
    id: "recursive-countdown",
    title: "Recursive Countdown",
    description:
      "Write a simple recursive function that logs a countdown from a given number to 1.",
    category: "Functions and Scope",
    inputs: [
      { id: "num", label: "Start from", type: "number", defaultValue: 5 },
    ],
    buttonText: "Start Countdown",
    difficulty: "Intermediate",
  },
  // problem--> 28
  {
    id: "first-class-functions",
    title: "First-Class Functions",
    description:
      "Demonstrate that functions are 'first-class citizens' by assigning a function to a variable and then invoking it.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test First-Class Function",
    difficulty: "Beginner",
  },
  // problem--> 29
  {
    id: "named-function-expression",
    title: "Named Function Expression",
    description:
      "Create a named function expression. The name is only accessible within the function itself, useful for debugging or recursion.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Run Named Expression",
    difficulty: "Intermediate",
  },
  // problem--> 30
  {
    id: "function-shadowing",
    title: "Variable Shadowing",
    description:
      "Demonstrate variable shadowing, where a variable in an inner scope has the same name as a variable in an outer scope.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Shadowing",
    difficulty: "Intermediate",
  },
  // problem--> 31
  {
    id: "anonymous-function",
    title: "Anonymous Function",
    description:
      "Show an example of an anonymous function, often used as an argument to another function (a callback).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use Anonymous Function",
    difficulty: "Beginner",
  },
  // problem--> 32
  {
    id: "implicit-return-arrow",
    title: "Implicit Return in Arrow Functions",
    description:
      "Showcase the implicit return feature of single-expression arrow functions without curly braces.",
    category: "Functions and Scope",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 7 }],
    buttonText: "Test Implicit Return",
    difficulty: "Beginner",
  },
  // problem--> 33
  {
    id: "function-length-property",
    title: "Function `.length` Property",
    description:
      "Demonstrate the `.length` property of a function, which indicates the number of named parameters it expects.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Get Function Length",
    difficulty: "Intermediate",
  },
  // problem--> 34
  {
    id: "scope-let-vs-var-loop",
    title: "`let` vs. `var` in Loops",
    description:
      "Demonstrate the common pitfall of using `var` in a loop with an asynchronous callback, and how `let` solves it.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Run Loop Test",
    difficulty: "Intermediate",
  },
  // problem--> 35
  {
    id: "pass-by-value",
    title: "Pass by Value (Primitives)",
    description:
      "Demonstrate that primitive types are passed by value. Modifying them inside a function does not affect the original.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Pass by Value",
    difficulty: "Intermediate",
  },
  // problem--> 36
  {
    id: "pass-by-reference",
    title: "Pass by Reference (Objects)",
    description:
      "Demonstrate that objects are passed by reference. Modifying a property inside a function affects the original object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Pass by Reference",
    difficulty: "Intermediate",
  },
  // problem--> 37
  {
    id: "function-constructor",
    title: "Function Constructor (Conceptual)",
    description:
      "Show the syntax for the `Function` constructor. Note: This is generally not recommended due to security and performance reasons.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Constructor Syntax",
    difficulty: "Advanced",
  },
  // problem--> 38
  {
    id: "currying-multiply",
    title: "Currying for Multiplication",
    description:
      "Create a curried function `multiply(a)(b)(c)` that takes three numbers in separate calls and returns their product.",
    category: "Functions and Scope",
    inputs: [
      { id: "a", label: "First Number", type: "number", defaultValue: 2 },
      { id: "b", label: "Second Number", type: "number", defaultValue: 3 },
      { id: "c", label: "Third Number", type: "number", defaultValue: 4 },
    ],
    buttonText: "Curry Multiply",
    difficulty: "Intermediate",
  },
  // problem--> 39
  {
    id: "partial-application",
    title: "Partial Application with `.bind()`",
    description:
      "Use `.bind()` to create a partially applied function by pre-setting some arguments.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Create Partial Function",
    difficulty: "Intermediate",
  },
  // problem--> 40
  {
    id: "this-event-handler",
    title: "`this` in an Event Handler",
    description:
      "Conceptually show how `this`, in a traditional function used as an event handler, refers to the element that triggered the event.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show `this` in Handler",
    difficulty: "Intermediate",
  },
  // problem--> 41
  {
    id: "function-as-object-property",
    title: "Function as an Object Property",
    description:
      "Create a 'config' object that stores a function as one of its properties.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Run Config Function",
    difficulty: "Beginner",
  },
  // problem--> 42
  {
    id: "hoisting-var-declaration",
    title: "Hoisting: `var` Declaration",
    description:
      "Demonstrate that `var` declarations are hoisted, but their assignments are not, resulting in `undefined`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `var` Hoisting",
    difficulty: "Intermediate",
  },
  // problem--> 43
  {
    id: "temporal-dead-zone-let",
    title: "Temporal Dead Zone (`let`)",
    description:
      "Show that accessing a `let` variable before its declaration results in a `ReferenceError` due to the Temporal Dead Zone (TDZ).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test TDZ",
    difficulty: "Advanced",
  },
  // problem--> 44
  {
    id: "arrow-function-no-arguments",
    title: "Arrow Functions Have No `arguments` Object",
    description:
      "Demonstrate that arrow functions do not have their own `arguments` object, but can use rest parameters instead.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `arguments` in Arrow",
    difficulty: "Intermediate",
  },
  // problem--> 45
  {
    id: "iife-with-params",
    title: "IIFE with Parameters",
    description:
      "Show how to pass arguments into an IIFE to provide it with initial values.",
    category: "Functions and Scope",
    inputs: [
      {
        id: "param",
        label: "Parameter to pass",
        type: "text",
        defaultValue: "Hello IIFE",
      },
    ],
    buttonText: "Run IIFE with Param",
    difficulty: "Intermediate",
  },
  // problem--> 46
  {
    id: "function-overwriting",
    title: "Function Overwriting",
    description:
      "Demonstrate how defining a function with the same name as a previous one will overwrite the original.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Overwriting",
    difficulty: "Intermediate",
  },
  // problem--> 47
  {
    id: "callback-hell-conceptual",
    title: "Callback Hell (Conceptual)",
    description:
      "Show a conceptual example of 'callback hell' or the 'pyramid of doom,' which modern Promises and async/await solve.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Callback Hell",
    difficulty: "Intermediate",
  },
  // problem--> 48
  {
    id: "this-binding-new",
    title: "`this` with the `new` Keyword",
    description:
      "Show that when a function is called with the `new` keyword (as a constructor), `this` is bound to the newly created object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `new` Binding",
    difficulty: "Intermediate",
  },
  // problem--> 49
  {
    id: "this-strict-mode",
    title: "`this` in Strict Mode",
    description:
      "Demonstrate that in strict mode, `this` is `undefined` in a regular function call, preventing accidental access to the global object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Strict Mode `this`",
    difficulty: "Advanced",
  },
  // problem--> 50
  {
    id: "function-name-property",
    title: "Function `.name` Property",
    description:
      "Demonstrate the `.name` property of a function for both named and anonymous functions.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Get Function Names",
    difficulty: "Intermediate",
  },
  // problem--> 51
  {
    id: "generator-function-basic",
    title: "Generator Function: Basic",
    description:
      "Create a simple generator function that yields a sequence of numbers.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Generate Numbers",
    difficulty: "Intermediate",
  },
  // problem--> 52
  {
    id: "generator-function-iterator",
    title: "Generator Function as Iterator",
    description:
      "Use the iterator returned by a generator function with the `.next()` method to get yielded values.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use Iterator",
    difficulty: "Intermediate",
  },
  // problem--> 53
  {
    id: "lexical-environment-conceptual",
    title: "Lexical Environment (Conceptual)",
    description:
      "Explain what a Lexical Environment is and its two components: the Environment Record and the reference to the outer environment.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 54
  {
    id: "this-with-settimeout",
    title: "`this` in `setTimeout`",
    description:
      "Demonstrate the classic problem where `this` inside a `setTimeout` callback in a method is not what you expect, and show solutions.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Timeout `this`",
    difficulty: "Intermediate",
  },
  // problem--> 55
  {
    id: "function-composition",
    title: "Function Composition",
    description:
      "Create a `compose` function that takes two functions and returns a new function that is their mathematical composition.",
    category: "Functions and Scope",
    inputs: [
      { id: "num", label: "Input Number", type: "number", defaultValue: 5 },
    ],
    buttonText: "Compose and Run",
    difficulty: "Intermediate",
  },
  // problem--> 56
  {
    id: "function-piping",
    title: "Function Piping",
    description:
      "Create a `pipe` function that takes multiple functions and chains them together, passing the output of one as the input to the next.",
    category: "Functions and Scope",
    inputs: [
      { id: "num", label: "Input Number", type: "number", defaultValue: 5 },
    ],
    buttonText: "Pipe and Run",
    difficulty: "Intermediate",
  },
  // problem--> 57
  {
    id: "side-effects-conceptual",
    title: "Side Effects (Conceptual)",
    description:
      "Explain what a side effect is in the context of functions (e.g., modifying an external variable, logging to console, writing to a file).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Side Effects",
    difficulty: "Intermediate",
  },
  // problem--> 58
  {
    id: "memoization-closure",
    title: "Memoization with Closures",
    description:
      "Implement a higher-order function `memoize` that takes a function and returns a memoized version of it using a closure for the cache.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Memoization",
    difficulty: "Advanced",
  },
  // problem--> 59
  {
    id: "block-scope-in-loop",
    title: "Block Scope in a Loop",
    description:
      "Show how `let` creates a new lexical environment for each iteration of a `for` loop.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Loop Scope",
    difficulty: "Intermediate",
  },
  // problem--> 60
  {
    id: "arrow-function-no-prototype",
    title: "Arrow Functions Have No `prototype`",
    description:
      "Demonstrate that arrow functions do not have a `.prototype` property and cannot be used as constructors.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `prototype`",
    difficulty: "Intermediate",
  },
  // problem--> 61
  {
    id: "this-in-nested-function",
    title: "`this` in a Nested Function",
    description:
      "Show how a regular nested function inside a method gets its own `this` context (usually global), and how to solve it.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Nested `this`",
    difficulty: "Intermediate",
  },
  // problem--> 62
  {
    id: "default-param-evaluation",
    title: "Default Parameter Evaluation",
    description:
      "Demonstrate that default parameter expressions are evaluated at call time.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Evaluate Defaults",
    difficulty: "Intermediate",
  },
  // problem--> 63
  {
    id: "function-arity",
    title: "Function Arity",
    description:
      "Explain function arity (the number of arguments a function expects) and show how the `.length` property reflects this.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Check Arity",
    difficulty: "Intermediate",
  },
  // problem--> 64
  {
    id: "iife-for-private-methods",
    title: "IIFE for Private Methods",
    description:
      "Use the module pattern with an IIFE to create an object with public methods that can access private helper functions.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Private Methods",
    difficulty: "Intermediate",
  },
  // problem--> 65
  {
    id: "function-as-a-value",
    title: "Function as a Value",
    description:
      "Demonstrate functions as first-class citizens by storing them in an array and then iterating and calling them.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Call Functions from Array",
    difficulty: "Intermediate",
  },
  // problem--> 66
  {
    id: "variadic-function",
    title: "Variadic Function",
    description:
      "Create a variadic function (a function that accepts a variable number of arguments) using rest parameters to find the maximum number.",
    category: "Functions and Scope",
    inputs: [
      {
        id: "numbers",
        label: "Numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 5, 2, 9, 3",
      },
    ],
    buttonText: "Find Max",
    difficulty: "Intermediate",
  },
  // problem--> 67
  {
    id: "execution-context-conceptual",
    title: "Execution Context (Conceptual)",
    description:
      "Explain the two phases of the Execution Context: Creation (variable environment, `this` binding) and Execution.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Context",
    difficulty: "Advanced",
  },
  // problem--> 68
  {
    id: "this-in-callback",
    title: "`this` in a Callback",
    description:
      "Demonstrate how the value of `this` is lost when a method is passed as a callback to another function (e.g., `forEach`).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Callback `this`",
    difficulty: "Intermediate",
  },
  // problem--> 69
  {
    id: "function-hoisting-pitfall",
    title: "Function Hoisting Pitfall",
    description:
      "Show a potential pitfall where a function declaration is unconditionally hoisted from within a block, leading to unexpected behavior.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Pitfall",
    difficulty: "Advanced",
  },
  // problem--> 70
  {
    id: "call-vs-apply-vs-bind",
    title: "`call` vs `apply` vs `bind`",
    description:
      "Summarize the key differences between `.call()`, `.apply()`, and `.bind()` for controlling the `this` context.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Summarize",
    difficulty: "Intermediate",
  },
  // problem--> 71
  {
    id: "currying-vs-partial-application",
    title: "Currying vs. Partial Application",
    description:
      "Explain the subtle difference between currying (a series of unary functions) and partial application (fixing some arguments).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Difference",
    difficulty: "Advanced",
  },
  // problem--> 72
  {
    id: "function-overloading-conceptual",
    title: "Function Overloading (Conceptual)",
    description:
      "Explain why JavaScript does not support traditional function overloading and how to achieve similar results by checking arguments.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Overloading",
    difficulty: "Intermediate",
  },
  // problem--> 73
  {
    id: "self-referencing-function",
    title: "Self-Referencing Function",
    description:
      "Use a named function expression to allow a function to refer to itself, useful for recursion without being dependent on the variable it's assigned to.",
    category: "Functions and Scope",
    inputs: [
      { id: "num", label: "Factorial of", type: "number", defaultValue: 4 },
    ],
    buttonText: "Calculate Factorial",
    difficulty: "Intermediate",
  },
  // problem--> 74
  {
    id: "closure-scope-preservation",
    title: "Closure Scope Preservation",
    description:
      "Demonstrate that a closure holds a reference to its scope, not a copy, by modifying a variable after the closure is created but before it's called.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Scope Reference",
    difficulty: "Advanced",
  },
  // problem--> 75
  {
    id: "higher-order-function-wrapper",
    title: "Higher-Order Function Wrapper",
    description:
      "Create a higher-order function that wraps another function to log its arguments and return value.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Wrap and Call",
    difficulty: "Intermediate",
  },
  // problem--> 76
  {
    id: "new-function-scope",
    title: "Scope of `new Function`",
    description:
      "Demonstrate that functions created with the `Function` constructor do not create closures to their creation contexts; they always have global scope.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `new Function` Scope",
    difficulty: "Advanced",
  },
  // problem--> 77
  {
    id: "generator-function-return",
    title: "Generator with `return`",
    description:
      "Show how a `return` statement in a generator function sets the `value` of the final object where `done` is true.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Run Generator to End",
    difficulty: "Intermediate",
  },
  // problem--> 78
  {
    id: "generator-yield-delegation",
    title: "Generator `yield*`",
    description:
      "Use `yield*` to delegate the iteration control from one generator to another.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `yield*`",
    difficulty: "Advanced",
  },
  // problem--> 79
  {
    id: "async-function-return",
    title: "`async` Function Return Value",
    description:
      "Demonstrate that an `async` function always returns a Promise, which resolves with the function's return value.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Call Async Function",
    difficulty: "Intermediate",
  },
  // problem--> 80
  {
    id: "this-in-object-literal",
    title: "`this` in Object Literal Method",
    description:
      "Clarify that `this` inside a method defined in an object literal refers to the object itself.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Object `this`",
    difficulty: "Intermediate",
  },
  // problem--> 81
  {
    id: "function-as-property-value",
    title: "Function as Property Value",
    description:
      "Create an object where one of the property values is a function, and then call that function.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Call Function Property",
    difficulty: "Beginner",
  },
  // problem--> 82
  {
    id: "call-stack-conceptual",
    title: "Call Stack (Conceptual)",
    description:
      "Explain what the Call Stack is and how it keeps track of function calls, including a simple example of `A()` calls `B()` calls `C()`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Call Stack",
    difficulty: "Advanced",
  },
  // problem--> 83
  {
    id: "function-binding-precedence",
    title: "`this` Binding Precedence",
    description:
      "Conceptually explain the order of precedence for `this` binding: `new` > explicit binding (`bind`, `call`) > method call > default (global).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Precedence",
    difficulty: "Advanced",
  },
  // problem--> 84
  {
    id: "polyfill-bind-method",
    title: "Polyfill `.bind()` (Conceptual)",
    description:
      "Outline the logic for creating a simple polyfill for the `Function.prototype.bind` method using closures and `.apply()`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Polyfill Logic",
    difficulty: "Advanced",
  },
  // problem--> 85
  {
    id: "default-params-and-scope",
    title: "Default Parameters and Scope",
    description:
      "Demonstrate that default parameters have their own scope, which is between the parent scope and the function body's scope.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Default Param Scope",
    difficulty: "Advanced",
  },
  // problem--> 86
  {
    id: "arrow-function-and-this-in-object",
    title: "Arrow Function as Method Pitfall",
    description:
      "Show the common pitfall of using an arrow function as a method directly on an object literal, where `this` does not refer to the object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Pitfall",
    difficulty: "Intermediate",
  },
  // problem--> 87
  {
    id: "function-purity-and-arrays",
    title: "Function Purity with Arrays",
    description:
      "Write an impure function that sorts an array in place, and a pure function that returns a new, sorted array.",
    category: "Functions and Scope",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "c,a,b" },
    ],
    buttonText: "Sort Pure vs. Impure",
    difficulty: "Intermediate",
  },
  // problem--> 88
  {
    id: "iife-with-global-variable",
    title: "IIFE with Global Variable",
    description:
      "Demonstrate passing a global object (like `window`) into an IIFE to explicitly define dependencies.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show IIFE Pattern",
    difficulty: "Intermediate",
  },
  // problem--> 89
  {
    id: "function-with-optional-params",
    title: "Function with Optional Parameters",
    description:
      "Write a function where some parameters are optional by checking if they are `undefined`.",
    category: "Functions and Scope",
    inputs: [{ id: "name", label: "Name", type: "text", defaultValue: "User" }],
    buttonText: "Greet",
    difficulty: "Beginner",
  },
  // problem--> 90
  {
    id: "rest-params-vs-arguments",
    title: "Rest Parameters vs. `arguments`",
    description:
      "Summarize the key advantages of using rest parameters (`...args`) over the older `arguments` object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Compare",
    difficulty: "Intermediate",
  },
  // problem--> 91
  {
    id: "named-args-with-destructuring",
    title: "Named Arguments with Destructuring",
    description:
      "Write a function that accepts an object of named arguments and uses destructuring in the parameter list.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use Named Arguments",
    difficulty: "Intermediate",
  },
  // problem--> 92
  {
    id: "function-to-string",
    title: "Function `toString()`",
    description:
      "Demonstrate that calling `.toString()` on a function returns its source code as a string.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Get Source Code",
    difficulty: "Intermediate",
  },
  // problem--> 93
  {
    id: "function-scope-vs-global-scope",
    title: "Function Scope vs. Global Scope",
    description:
      "Demonstrate that a function can access global variables, but the global scope cannot access function-scoped variables.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Scope Access",
    difficulty: "Beginner",
  },
  // problem--> 94
  {
    id: "block-scope-with-const",
    title: "Block Scope with `const`",
    description:
      "Show that `const` is block-scoped like `let` but also cannot be reassigned.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `const` Scope",
    difficulty: "Beginner",
  },
  // problem--> 95
  {
    id: "higher-order-function-foreach",
    title: "Higher-Order Function: `forEach`",
    description:
      "Implement a simple version of the `forEach` method as a higher-order function that takes an array and a callback.",
    category: "Functions and Scope",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "a,b,c" },
    ],
    buttonText: "Run Custom forEach",
    difficulty: "Intermediate",
  },
  // problem--> 96
  {
    id: "function-currying-practical",
    title: "Practical Currying",
    description:
      "Create a curried function `log(level)(message)` for practical, specialized logging.",
    category: "Functions and Scope",
    inputs: [
      {
        id: "msg",
        label: "Message",
        type: "text",
        defaultValue: "Request successful",
      },
    ],
    buttonText: "Log with Curried Function",
    difficulty: "Intermediate",
  },
  // problem--> 97
  {
    id: "this-in-event-listener-arrow",
    title: "`this` in Event Listener (Arrow)",
    description:
      "Conceptually show how an arrow function as an event listener inherits `this` from its surrounding scope, which is often desirable in classes.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Arrow `this`",
    difficulty: "Intermediate",
  },
  // problem--> 98
  {
    id: "function-hoisting-with-var",
    title: "Function Hoisting with `var`",
    description:
      "Demonstrate that a function expression assigned to a `var` has its declaration hoisted, but the function body is not, leading to a `TypeError` if called early.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Hoisting",
    difficulty: "Intermediate",
  },
  // problem--> 99
  {
    id: "destructuring-from-function-return-array",
    title: "Destructuring a Function's Return (Array)",
    description:
      "Destructure the array returned by a function directly into variables.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Destructure Return",
    difficulty: "Intermediate",
  },
  // problem--> 100
  {
    id: "destructuring-from-function-return-object",
    title: "Destructuring a Function's Return (Object)",
    description:
      "Destructure the object returned by a function directly into variables.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Destructure Return",
    difficulty: "Intermediate",
  },
  // problem--> 101
  {
    id: "redeclare-var",
    title: "Redeclaring `var`",
    description:
      "Show that a variable declared with `var` can be redeclared in the same scope without an error.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Redeclare `var`",
    difficulty: "Beginner",
  },
  // problem--> 102
  {
    id: "redeclare-let-error",
    title: "Redeclaring `let` (Error)",
    description:
      "Attempt to redeclare a variable with `let` in the same scope to see the `SyntaxError`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Redeclare `let`",
    difficulty: "Beginner",
  },
  // problem--> 103
  {
    id: "var-no-block-scope",
    title: "`var` Ignores Block Scope",
    description:
      "Show that `var` is function-scoped and does not respect block scope, which can lead to bugs.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `var` in Block",
    difficulty: "Beginner",
  },
  // problem--> 104
  {
    id: "const-array-reassignment-error",
    title: "Reassigning a `const` Array (Error)",
    description:
      "Attempt to reassign a `const` array to a new array to observe the `TypeError`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Reassignment",
    difficulty: "Beginner",
  },
  // problem--> 105
  {
    id: "destructure-skip-array-items",
    title: "Skipping Items in Array Destructuring",
    description:
      "Use a comma to skip over an element when destructuring an array.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Skip Items",
    difficulty: "Intermediate",
  },
  // problem--> 106
  {
    id: "let-in-for-loop",
    title: "`let` in a `for` Loop",
    description:
      "Demonstrate how `let` creates a new binding for each iteration of a `for` loop, solving a common closure problem.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `let` in Loop",
    difficulty: "Intermediate",
  },
  // problem--> 107
  {
    id: "var-in-for-loop-pitfall",
    title: "`var` in a `for` Loop Pitfall",
    description:
      "Show the classic problem of using `var` in a `for` loop with an asynchronous callback.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `var` Pitfall",
    difficulty: "Intermediate",
  },
  // problem--> 108
  {
    id: "window-object-global-var",
    title: "`var` and the `window` Object",
    description:
      "Show that in a browser, global variables declared with `var` become properties of the `window` object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Check `window`",
    difficulty: "Intermediate",
  },
  // problem--> 109
  {
    id: "window-object-global-let",
    title: "`let` and the `window` Object",
    description:
      "Show that global variables declared with `let` or `const` do not become properties of the `window` object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Check `window`",
    difficulty: "Intermediate",
  },
  // problem--> 110
  {
    id: "undeclared-variable-global",
    title: "Undeclared Variable (Global Leak)",
    description:
      "Show how assigning to an undeclared variable in non-strict mode accidentally creates a global variable.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Global Leak",
    difficulty: "Intermediate",
  },
  // problem--> 111
  {
    id: "strict-mode-undeclared",
    title: "Undeclared Variable in Strict Mode",
    description:
      "Demonstrate that strict mode prevents accidental global variables by throwing a `ReferenceError` on assignment to an undeclared variable.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Strict Mode",
    difficulty: "Intermediate",
  },
  // problem--> 112
  {
    id: "scope-of-catch-block",
    title: "Scope of `catch` Block",
    description:
      "Show that the error variable in a `try...catch` block is block-scoped to the `catch` block.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `catch` Scope",
    difficulty: "Intermediate",
  },
  // problem--> 113
  {
    id: "const-mutate-object",
    title: "Mutating a `const` Object",
    description:
      "Show that while a `const` variable cannot be reassigned, the properties of the object it refers to can be mutated.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Mutate Object",
    difficulty: "Beginner",
  },
  // problem--> 114
  {
    id: "const-mutate-array",
    title: "Mutating a `const` Array",
    description:
      "Demonstrate that you can add, remove, or change elements in an array declared with `const`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Mutate Array",
    difficulty: "Beginner",
  },
  // problem--> 115
  {
    id: "object-freeze",
    title: "`Object.freeze()`",
    description:
      "Use `Object.freeze()` to make an object truly immutable, preventing its properties from being changed.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Freeze Object",
    difficulty: "Intermediate",
  },
  // problem--> 116
  {
    id: "const-in-for-of-loop",
    title: "`const` in a `for...of` Loop",
    description:
      "Demonstrate that you can use `const` to declare the loop variable in a `for...of` loop, as a new binding is created for each iteration.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `const` in Loop",
    difficulty: "Intermediate",
  },
  // problem--> 117
  {
    id: "const-in-for-loop-error",
    title: "`const` in a classic `for` Loop (Error)",
    description:
      "Show that using `const` in the initializer of a classic `for` loop will cause an error because the loop tries to reassign it.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `const` in `for`",
    difficulty: "Intermediate",
  },
  // problem--> 118
  {
    id: "destructure-array-rest",
    title: "Array Destructuring with Rest",
    description:
      "Use the rest pattern (`...`) in array destructuring to collect the remaining elements into a new array.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use Rest Pattern",
    difficulty: "Intermediate",
  },
  // problem--> 119
  {
    id: "destructure-object-rest",
    title: "Object Destructuring with Rest",
    description:
      "Use the rest pattern (`...`) in object destructuring to collect the remaining properties into a new object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use Rest Pattern",
    difficulty: "Intermediate",
  },
  // problem--> 120
  {
    id: "destructure-object-alias",
    title: "Object Destructuring with Aliases",
    description:
      "Assign object properties to new variable names using alias syntax (e.g., `{ name: newName }`).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use Aliases",
    difficulty: "Intermediate",
  },
  // problem--> 121
  {
    id: "destructure-array-defaults",
    title: "Array Destructuring with Defaults",
    description:
      "Provide default values for variables in array destructuring for cases where the array is shorter than expected.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use Defaults",
    difficulty: "Intermediate",
  },
  // problem--> 122
  {
    id: "destructure-object-defaults",
    title: "Object Destructuring with Defaults",
    description:
      "Provide default values for variables in object destructuring for cases where a property does not exist.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Use Defaults",
    difficulty: "Intermediate",
  },
  // problem--> 123
  {
    id: "destructure-nested-object",
    title: "Nested Object Destructuring",
    description:
      "Use nested destructuring to extract values from a nested object in a single statement.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Destructure Nested",
    difficulty: "Intermediate",
  },
  // problem--> 124
  {
    id: "destructure-function-params-object",
    title: "Destructuring in Function Parameters (Object)",
    description:
      "Use object destructuring directly in a function's parameter list to handle an options object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Function",
    difficulty: "Intermediate",
  },
  // problem--> 125
  {
    id: "destructure-function-params-array",
    title: "Destructuring in Function Parameters (Array)",
    description:
      "Use array destructuring directly in a function's parameter list.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Function",
    difficulty: "Intermediate",
  },
  // problem--> 126
  {
    id: "destructure-for-of-loop",
    title: "Destructuring in a `for...of` Loop",
    description:
      "Use array destructuring in a `for...of` loop to easily access elements of a nested array.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Loop",
    difficulty: "Intermediate",
  },
  // problem--> 127
  {
    id: "destructure-string",
    title: "Destructuring a String",
    description:
      "Show that strings can be destructured like arrays to get individual characters.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Destructure String",
    difficulty: "Intermediate",
  },
  // problem--> 128
  {
    id: "destructure-with-defaults-and-alias",
    title: "Destructuring with Defaults and Aliases",
    description:
      "Combine default values and aliasing in a single object destructuring statement.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Combine Features",
    difficulty: "Intermediate",
  },
  // problem--> 129
  {
    id: "destructure-null-error",
    title: "Destructuring `null` or `undefined`",
    description:
      "Show that attempting to destructure `null` or `undefined` will result in a `TypeError`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Null Destructuring",
    difficulty: "Intermediate",
  },
  // problem--> 130
  {
    id: "destructure-return-with-defaults",
    title: "Destructuring Return with Defaults",
    description:
      "Destructure an object returned by a function, providing a default value for a potentially missing property.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Return with Defaults",
    difficulty: "Intermediate",
  },
  // problem--> 131
  {
    id: "let-block-scope-in-standalone-block",
    title: "Scope of Standalone Blocks",
    description:
      "Demonstrate that a pair of curly braces not attached to any statement (like `if` or `for`) still creates a new block scope for `let` and `const`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Standalone Block",
    difficulty: "Intermediate",
  },
  // problem--> 132
  {
    id: "dynamic-property-creation",
    title: "Dynamic Property Creation",
    description:
      "Use a variable to define a property name when creating an object literal (computed property names).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Computed Property",
    difficulty: "Intermediate",
  },
  // problem--> 133
  {
    id: "primitive-wrapper-objects",
    title: "Primitive Wrapper Objects (Conceptual)",
    description:
      'Explain how JavaScript temporarily converts primitives to objects so you can call methods on them (e.g., `"hello".toUpperCase()`).',
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Wrappers",
    difficulty: "Advanced",
  },
  // problem--> 134
  {
    id: "symbol-primitive-type",
    title: "The `Symbol` Primitive Type",
    description:
      "Create a `Symbol` and show that it is a unique, immutable primitive value, often used as an object property key.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Create a Symbol",
    difficulty: "Intermediate",
  },
  // problem--> 135
  {
    id: "bigint-primitive-type",
    title: "The `BigInt` Primitive Type",
    description:
      "Create a `BigInt` to work with integers larger than the maximum safe integer in JavaScript.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Create a BigInt",
    difficulty: "Intermediate",
  },
  // problem--> 136
  {
    id: "hoisting-order-var-and-function",
    title: "Hoisting Order: `var` vs Function",
    description:
      "Demonstrate that function declarations are hoisted before variable declarations when they have the same name.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Hoisting Order",
    difficulty: "Advanced",
  },
  // problem--> 137
  {
    id: "hoisting-class-declaration",
    title: "Hoisting: Class Declaration",
    description:
      "Show that ES6 class declarations are hoisted but, like `let`, are in a TDZ, preventing them from being used before declaration.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Class Hoisting",
    difficulty: "Advanced",
  },
  // problem--> 138
  {
    id: "object-freeze-nested",
    title: "Shallow Nature of `Object.freeze()`",
    description:
      "Show that `Object.freeze()` is shallow, meaning it does not freeze nested objects within the main object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Nested Freeze",
    difficulty: "Intermediate",
  },
  // problem--> 139
  {
    id: "object-seal",
    title: "`Object.seal()`",
    description:
      "Use `Object.seal()` to prevent adding or deleting properties from an object, while still allowing existing properties to be modified.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Seal Object",
    difficulty: "Intermediate",
  },
  // problem--> 140
  {
    id: "object-preventextensions",
    title: "`Object.preventExtensions()`",
    description:
      "Use `Object.preventExtensions()` to prevent new properties from ever being added to an object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Prevent Extensions",
    difficulty: "Intermediate",
  },
  // problem--> 141
  {
    id: "destructure-assignment-without-declaration",
    title: "Destructuring Assignment without Declaration",
    description:
      "Show the syntax for assigning to existing variables using object destructuring, which requires parentheses.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Assignment",
    difficulty: "Advanced",
  },
  // problem--> 142
  {
    id: "destructure-dynamic-property-name",
    title: "Destructuring with Dynamic Property Name",
    description:
      "Demonstrate the limitation of destructuring with dynamic keys and show the correct alternative using bracket notation.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Dynamic Destructuring",
    difficulty: "Advanced",
  },
  // problem--> 143
  {
    id: "destructure-mixed-array-object",
    title: "Mixed Array and Object Destructuring",
    description:
      "Destructure a complex data structure that contains both arrays and objects.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Mixed Destructuring",
    difficulty: "Intermediate",
  },
  // problem--> 144
  {
    id: "shadowing-in-catch-block",
    title: "Shadowing with `catch` Parameter",
    description:
      "Show how the error parameter in a `catch` block can shadow an outer variable, a behavior that changed in ES2019.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `catch` Shadowing",
    difficulty: "Advanced",
  },
  // problem--> 145
  {
    id: "tdz-and-closures",
    title: "TDZ and Closures",
    description:
      "Create a closure that captures a `let` variable and call it before the variable is declared to show the TDZ applies.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test TDZ in Closure",
    difficulty: "Advanced",
  },
  // problem--> 146
  {
    id: "tdz-with-default-params",
    title: "TDZ with Default Parameters",
    description:
      "Show how a default function parameter can be in the TDZ for another parameter in the same function signature.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Default Param TDZ",
    difficulty: "Advanced",
  },
  // problem--> 147
  {
    id: "garbage-collection-conceptual",
    title: "Garbage Collection (Conceptual)",
    description:
      "Explain the basic concept of garbage collection in JavaScript, focusing on how unreferenced variables and objects are cleaned up.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain GC",
    difficulty: "Advanced",
  },
  // problem--> 148
  {
    id: "memory-leak-with-closures",
    title: "Memory Leaks with Closures (Conceptual)",
    description:
      "Explain how a long-lived closure can unintentionally keep variables in memory, leading to a memory leak.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Leak",
    difficulty: "Advanced",
  },
  // problem--> 149
  {
    id: "let-in-switch-case",
    title: "`let` and `const` in `switch` cases",
    description:
      "Show that the entire `switch` statement is a single block, and declaring a `let` variable in one `case` makes it unavailable in others without its own block.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `switch` Scope",
    difficulty: "Advanced",
  },
  // problem--> 150
  {
    id: "tdz-and-function-parameters",
    title: "TDZ in Function Parameters",
    description:
      "Show how the Temporal Dead Zone applies to function parameters when one parameter references another that has not yet been initialized.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Parameter TDZ",
    difficulty: "Advanced",
  },
  // problem--> 151
  {
    id: "deep-freeze-utility-conceptual",
    title: "Deep Freeze Utility (Conceptual)",
    description:
      'Conceptually outline a recursive function that can "deep freeze" an object, applying `Object.freeze()` to all nested objects.',
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Deep Freeze",
    difficulty: "Advanced",
  },
  // problem--> 152
  {
    id: "hoisting-across-scripts-conceptual",
    title: "Hoisting Across Scripts (Conceptual)",
    description:
      "Explain that hoisting is a file-scoped (or module-scoped) mechanism and does not apply between different `<script>` tags or modules.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Hoisting Boundary",
    difficulty: "Advanced",
  },
  // problem--> 153
  {
    id: "memory-lifecycle-conceptual",
    title: "Memory Lifecycle (Conceptual)",
    description:
      "Explain the three steps of the memory lifecycle in JavaScript: Allocation, Use, and Release (Garbage Collection).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Lifecycle",
    difficulty: "Advanced",
  },
  // problem--> 154
  {
    id: "destructure-from-map",
    title: "Destructuring from `Map`",
    description:
      "Use destructuring in a `for...of` loop to iterate over the key-value pairs of an ES6 `Map`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Destructure Map",
    difficulty: "Intermediate",
  },
  // problem--> 155
  {
    id: "immutable-update-const",
    title: "Immutable Update Pattern",
    description:
      'Demonstrate the pattern of "updating" a `const` object by creating a new object with the old properties spread in, plus the new changes.',
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Immutable Update",
    difficulty: "Intermediate",
  },
  // problem--> 156
  {
    id: "var-hoisting-pitfall-2",
    title: "Conditional `var` Hoisting",
    description:
      "Show that a `var` inside an `if (false)` block is still hoisted, which can be unintuitive.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Conditional Hoisting",
    difficulty: "Advanced",
  },
  // problem--> 157
  {
    id: "destructure-regex-groups",
    title: "Destructuring RegExp Groups",
    description:
      "Use array destructuring on the result of `string.match()` to capture groups from a regular expression.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Destructure RegExp",
    difficulty: "Intermediate",
  },
  // problem--> 158
  {
    id: "uninitialized-const-in-loop",
    title: "Uninitialized `const` in a Loop",
    description:
      "Conceptually explain why `for (const x of []) {}` is valid (x is never created) but `for (const x; ; ) {}` is a syntax error.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Loop Declarations",
    difficulty: "Advanced",
  },
  // problem--> 159
  {
    id: "function-param-scope",
    title: "Function Parameter Scope",
    description:
      "Show that function parameters have their own scope, separate from the function body's scope.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Parameter Scope",
    difficulty: "Advanced",
  },
  // problem--> 160
  {
    id: "destructure-sparse-array",
    title: "Destructuring a Sparse Array",
    description:
      "Demonstrate what happens when you destructure a sparse array (an array with empty slots).",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Sparse Array",
    difficulty: "Intermediate",
  },
  // problem--> 161
  {
    id: "block-scope-for-let-in-loop",
    title: "`let` Re-binding in Loops",
    description:
      "Conceptually explain that in a `for` loop, `let` is not just scoped to the block, but is re-bound for each iteration.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Re-binding",
    difficulty: "Advanced",
  },
  // problem--> 162
  {
    id: "implicit-global-in-function-call",
    title: "Implicit Global from Function Call",
    description:
      "Show how calling a method detached from its object in non-strict mode can lead to `this` being the global object, potentially modifying global variables.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Implicit Global",
    difficulty: "Advanced",
  },
  // problem--> 163
  {
    id: "practical-let-event-listener",
    title: "Practical `let`: Event Listener State",
    description:
      "Use `let` to manage a state variable (like a toggle) inside an event listener callback.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Toggle State",
    difficulty: "Intermediate",
  },
  // problem--> 164
  {
    id: "practical-const-function-expression",
    title: "Practical `const`: Function Expressions",
    description:
      "Show the common practice of assigning function expressions and arrow functions to a `const` to prevent them from being accidentally overwritten.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show `const` Function",
    difficulty: "Intermediate",
  },
  // problem--> 165
  {
    id: "practical-destructuring-api-response",
    title: "Practical Destructuring: API Response",
    description:
      "Show how to destructure a complex JSON object from a mock API response to extract only the needed data.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Destructure API Data",
    difficulty: "Intermediate",
  },
  // problem--> 166
  {
    id: "object-is-vs-triple-equals",
    title: "`Object.is` vs. `===`",
    description:
      "Compare the behavior of `Object.is()` with the strict equality operator `===`, highlighting the differences with `NaN` and `-0`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Compare `Object.is` and `===`",
    difficulty: "Advanced",
  },
  // problem--> 167
  {
    id: "primitive-vs-reference-assignment",
    title: "Primitive vs. Reference Assignment",
    description:
      "Assign a primitive to a new variable and modify it. Then do the same with an object to show the difference between copy-by-value and copy-by-reference.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Compare Assignment",
    difficulty: "Intermediate",
  },
  // problem--> 168
  {
    id: "hoisting-pitfall-with-blocks",
    title: "Function Hoisting within Blocks",
    description:
      "Explain the strange, inconsistent behavior of hoisting function declarations out of blocks in non-strict mode.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Block Hoisting",
    difficulty: "Advanced",
  },
  // problem--> 169
  {
    id: "destructuring-iterable",
    title: "Destructuring any Iterable",
    description:
      "Show that any object that implements the iterable protocol (like a `Set`) can be used in an array destructuring assignment.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Destructure a Set",
    difficulty: "Advanced",
  },
  // problem--> 170
  {
    id: "const-and-garbage-collection",
    title: "`const` and Garbage Collection",
    description:
      "Explain that using `const` does not affect when a variable is garbage collected; reachability is the only factor.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain GC and `const`",
    difficulty: "Advanced",
  },
  // problem--> 171
  {
    id: "var-in-eval-scope",
    title: "`var` and `eval` Scope",
    description:
      'Demonstrate how `var` declared inside an `eval()` call can "leak" into the surrounding function scope.',
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `eval` Scope",
    difficulty: "Advanced",
  },
  // problem--> 172
  {
    id: "let-in-eval-scope",
    title: "`let` and `eval` Scope",
    description:
      "Show that `let` declared inside an `eval()` call respects the scope of the `eval` and does not leak out.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test `let` in `eval`",
    difficulty: "Advanced",
  },
  // problem--> 173
  {
    id: "var-without-window",
    title: "Global `var` outside Browsers",
    description:
      "Explain that in environments like Node.js, a global `var` does not attach to a `window` object but to a `global` object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Node Global",
    difficulty: "Advanced",
  },
  // problem--> 174
  {
    id: "destructuring-and-prototypes",
    title: "Destructuring and Prototypes",
    description:
      "Show that object destructuring will access properties from the object's prototype chain if they are not on the object itself.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Prototype Destructuring",
    difficulty: "Advanced",
  },
  // problem--> 175
  {
    id: "variable-lifecycle-in-closure",
    title: "Variable Lifecycle in Closures",
    description:
      'Explain how a variable from an outer function "survives" after the outer function returns because it is kept alive by a closure.',
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Closure Lifecycle",
    difficulty: "Advanced",
  },
  // problem--> 176
  {
    id: "using-symbols-for-metadata",
    title: "Real-World Symbol: Metadata",
    description:
      'Attach "hidden" metadata to an object using a `Symbol` as a key, which won\'t be picked up by `JSON.stringify` or `for...in` loops.',
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Attach Metadata",
    difficulty: "Intermediate",
  },
  // problem--> 177
  {
    id: "const-for-math-constants",
    title: "Real-World `const`: Math Constants",
    description:
      "Declare a mathematical constant like PI or GRAVITY and use it in a calculation.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Calculate with Constant",
    difficulty: "Beginner",
  },
  // problem--> 178
  {
    id: "destructure-react-props",
    title: "Real-World Destructuring: React Props",
    description:
      "Show the common pattern of destructuring a `props` object in a React component's function signature.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show React Props Pattern",
    difficulty: "Intermediate",
  },
  // problem--> 179
  {
    id: "let-for-cached-value",
    title: "Real-World `let`: Caching a Value",
    description:
      "Use `let` to implement a simple cache where a value is calculated and stored on first access, then retrieved from the variable on subsequent accesses.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Cache",
    difficulty: "Intermediate",
  },
  // problem--> 180
  {
    id: "tdz-in-class-bodies",
    title: "TDZ in Class Bodies",
    description:
      "Demonstrate that the TDZ applies within a class body, for example when initializing a property with a value from another property declared later.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Class TDZ",
    difficulty: "Advanced",
  },
  // problem--> 181
  {
    id: "shadowing-with-function-params",
    title: "Shadowing with Function Parameters",
    description:
      "Show how a function parameter can shadow a variable from an outer scope.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Parameter Shadowing",
    difficulty: "Intermediate",
  },
  // problem--> 182
  {
    id: "is-frozen-check",
    title: "Checking if an Object is Frozen",
    description:
      "Use `Object.isFrozen()` to check if an object has been frozen.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Check Frozen Status",
    difficulty: "Intermediate",
  },
  // problem--> 183
  {
    id: "is-sealed-check",
    title: "Checking if an Object is Sealed",
    description:
      "Use `Object.isSealed()` to check if an object has been sealed.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Check Sealed Status",
    difficulty: "Intermediate",
  },
  // problem--> 184
  {
    id: "is-extensible-check",
    title: "Checking if an Object is Extensible",
    description:
      "Use `Object.isExtensible()` to check if new properties can be added to an object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Check Extensible Status",
    difficulty: "Intermediate",
  },
  // problem--> 185
  {
    id: "destructuring-and-type-coercion",
    title: "Destructuring and Type Coercion",
    description:
      "Demonstrate that destructuring assigns the exact value without type coercion, unlike some other language constructs.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Coercion",
    difficulty: "Advanced",
  },
  // problem--> 186
  {
    id: "global-scope-pollution",
    title: "Global Scope Pollution (Conceptual)",
    description:
      'Explain why creating many global variables is bad practice ("polluting the global scope") and can lead to naming conflicts with third-party libraries.',
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Pollution",
    difficulty: "Intermediate",
  },
  // problem--> 187
  {
    id: "using-block-scope-for-privacy",
    title: "Using Block Scope for Privacy",
    description:
      "Use a standalone block `{}` to create temporary helper variables that don't leak into the surrounding scope.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Demonstrate Privacy",
    difficulty: "Intermediate",
  },
  // problem--> 188
  {
    id: "hoisting-let-and-const-conceptual",
    title: "Hoisting of `let` and `const` (Conceptual)",
    description:
      "Clarify the common misconception: `let` and `const` *are* hoisted (their memory is allocated), but they are not initialized, which is why the TDZ exists.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain `let` Hoisting",
    difficulty: "Advanced",
  },
  // problem--> 189
  {
    id: "destructuring-computed-property",
    title: "Destructuring with Computed Property Alias",
    description:
      "Show an advanced pattern where you use computed property names to extract a property and give it a static alias.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Computed Alias",
    difficulty: "Advanced",
  },
  // problem--> 190
  {
    id: "reserved-words-as-variables",
    title: "Reserved Words as Variables",
    description:
      "Demonstrate that you cannot use reserved keywords like `if`, `for`, or `class` as variable names.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Reserved Words",
    difficulty: "Beginner",
  },
  // problem--> 191
  {
    id: "infinity-and-negative-infinity",
    title: "`Infinity` and `-Infinity`",
    description:
      "Show the global `Infinity` and `-Infinity` variables, which represent the mathematical concepts.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Infinity",
    difficulty: "Beginner",
  },
  // problem--> 192
  {
    id: "reassigning-object-param",
    title: "Reassigning an Object Parameter",
    description:
      "Show that while you can mutate an object passed to a function, reassigning the parameter to a new object does not affect the original variable outside.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Parameter Reassignment",
    difficulty: "Intermediate",
  },
  // problem--> 193
  {
    id: "const-enum-pattern",
    title: "Real-World `const`: Enum Pattern",
    description:
      "Use a frozen object declared with `const` to create a simple, safe enumeration (enum) for representing a set of named constants.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Show Enum Pattern",
    difficulty: "Intermediate",
  },
  // problem--> 194
  {
    id: "destructuring-and-rename-rest",
    title: "Destructuring and Renaming with Rest",
    description:
      "Show how to combine renaming a property with collecting the rest of the properties into a new object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Rename with Rest",
    difficulty: "Intermediate",
  },
  // problem--> 195
  {
    id: "global-scope-without-window",
    title: "Global Scope in Web Workers",
    description:
      "Explain that Web Workers have their own global scope, separate from the main window, which can be referenced by `self`.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain Worker Scope",
    difficulty: "Advanced",
  },
  // problem--> 196
  {
    id: "automatic-semicolon-insertion",
    title: "Automatic Semicolon Insertion (ASI)",
    description:
      "Explain how ASI can affect variable declarations, especially with `let` or `const` on a new line after a `return` statement.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Explain ASI",
    difficulty: "Advanced",
  },
  // problem--> 197
  {
    id: "global-scope-modules-vs-scripts",
    title: "Global Scope: Modules vs. Scripts",
    description:
      "Summarize the key difference: top-level `var` in a classic `<script>` becomes a `window` property, while top-level `var`/`let`/`const` in a module are scoped to the module.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Compare Scopes",
    difficulty: "Advanced",
  },
  // problem--> 198
  {
    id: "destructuring-primitive-wrappers",
    title: "Destructuring Primitives",
    description:
      "Show what happens when you attempt to destructure a primitive like a number or boolean, and how it accesses properties on the temporary wrapper object.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Primitive Destructuring",
    difficulty: "Advanced",
  },
  // problem--> 199
  {
    id: "shadowing-built-in-globals",
    title: "Shadowing Built-in Globals",
    description:
      "Demonstrate how a local variable (e.g., `let Array = ...`) can shadow a built-in global constructor, which can lead to bugs.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Test Shadowing `Array`",
    difficulty: "Intermediate",
  },
  // problem--> 200
  {
    id: "var-vs-let-vs-const-summary",
    title: "Summary: `var` vs. `let` vs. `const`",
    description:
      "Provide a final conceptual summary of the key differences in scope, hoisting, reassignment, and global object attachment.",
    category: "Functions and Scope",
    inputs: [],
    buttonText: "Summarize Differences",
    difficulty: "Beginner",
  },
];
