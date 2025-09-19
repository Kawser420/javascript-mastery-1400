import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "simple-function-return",
    title: "Simple Function Return",
    description:
      "Define a function that takes no arguments and returns a specific string.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Call Function",
  },
  {
    id: "function-with-parameters",
    title: "Function with Parameters",
    description:
      "Write a function that takes two numbers as parameters and returns their product.",
    category: "Functions & Scope",
    inputs: [
      { id: "a", label: "First Number", type: "number", defaultValue: 8 },
      { id: "b", label: "Second Number", type: "number", defaultValue: 4 },
    ],
    buttonText: "Calculate Product",
  },
  {
    id: "arrow-function-syntax",
    title: "Arrow Function Syntax",
    description:
      "Rewrite a simple function that calculates the square of a number using arrow function syntax.",
    category: "Functions & Scope",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 9 }],
    buttonText: "Square with Arrow",
  },
  {
    id: "function-declaration",
    title: "Function Declaration",
    description:
      "Create a function using the `function` keyword. This method is subject to hoisting.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Declare and Call",
  },
  {
    id: "function-expression",
    title: "Function Expression",
    description:
      "Create a function by assigning an anonymous function to a variable. These are not fully hoisted.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Create Expression",
  },
  {
    id: "default-parameters",
    title: "Default Parameters",
    description:
      "Write a function that greets a user, but defaults to 'Guest' if no name is provided.",
    category: "Functions & Scope",
    inputs: [{ id: "name", label: "Name (optional)", type: "text" }],
    buttonText: "Greet User",
  },
  {
    id: "rest-parameters-sum",
    title: "Rest Parameters for Summation",
    description:
      "Write a function that uses rest parameters to accept any number of arguments and returns their sum.",
    category: "Functions & Scope",
    inputs: [
      {
        id: "numbers",
        label: "Numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Sum All",
  },
  {
    id: "iife-pattern",
    title: "Immediately Invoked Function Expression (IIFE)",
    description:
      "Use an IIFE to create a private scope and execute a function immediately upon definition.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Run IIFE",
  },
  {
    id: "hoisting-declaration",
    title: "Hoisting: Function Declaration",
    description:
      "Demonstrate that a function declaration can be called before it is defined in the code due to hoisting.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Hoisting",
  },
  {
    id: "hoisting-expression-var",
    title: "Hoisting: Function Expression (var)",
    description:
      "Show that a function expression assigned to a `var` is hoisted, but only the variable declaration, not the function assignment.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test `var` Hoisting",
  },
  {
    id: "global-scope",
    title: "Global Scope",
    description:
      "Declare a variable in the global scope and access it from within a function.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Access Global Var",
  },
  {
    id: "function-scope",
    title: "Function Scope",
    description:
      "Show that a variable declared with `var` inside a function is not accessible from outside that function.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Function Scope",
  },
  {
    id: "block-scope-let",
    title: "Block Scope with `let`",
    description:
      "Demonstrate that a variable declared with `let` inside a block (e.g., an if-statement) is not accessible outside that block.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Block Scope",
  },
  {
    id: "scope-chain",
    title: "Scope Chain",
    description:
      "Demonstrate the scope chain by having a deeply nested function access a variable from its grandparent scope.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Scope Chain",
  },
  {
    id: "pure-function",
    title: "Pure Function Example",
    description:
      "Write a pure function that takes a number and returns its value doubled. A pure function has no side effects.",
    category: "Functions & Scope",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 10 }],
    buttonText: "Double Purely",
  },
  {
    id: "impure-function",
    title: "Impure Function Example",
    description:
      "Write an impure function that modifies an external variable. Its output is not solely determined by its input.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Run Impure Function",
  },
  {
    id: "higher-order-function-argument",
    title: "Higher-Order Function: Passing a Function",
    description:
      "Create a higher-order function that takes a number and a callback function, and applies the callback to the number.",
    category: "Functions & Scope",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Apply Function",
  },
  {
    id: "higher-order-function-return",
    title: "Higher-Order Function: Returning a Function",
    description:
      "Create a higher-order function that returns a new function. The returned function should multiply its argument by a specific number.",
    category: "Functions & Scope",
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
  },
  {
    id: "sync-callback",
    title: "Synchronous Callback",
    description:
      "Create a function that processes an array and executes a callback function for each item synchronously.",
    category: "Functions & Scope",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "apple, banana, cherry",
      },
    ],
    buttonText: "Process with Callback",
  },
  {
    id: "arguments-object",
    title: "The `arguments` Object",
    description:
      "Write a function using the `function` keyword that uses the array-like `arguments` object to sum all values passed to it.",
    category: "Functions & Scope",
    inputs: [
      {
        id: "numbers",
        label: "Numbers (comma-separated)",
        type: "text",
        defaultValue: "10, 20, 30",
      },
    ],
    buttonText: "Sum with `arguments`",
  },
  {
    id: "object-method-this",
    title: "Object Method and `this`",
    description:
      "Create an object with a method that uses the `this` keyword to access another property of the same object.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Call Object Method",
  },
  {
    id: "this-global-scope",
    title: "`this` in the Global Scope",
    description:
      "Demonstrate what `this` refers to in the global scope in a browser environment (non-strict mode).",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Check Global `this`",
  },
  {
    id: "this-arrow-function-lexical",
    title: "Lexical `this` in Arrow Functions",
    description:
      "Show how an arrow function does not have its own `this` binding but inherits it from the surrounding (lexical) scope.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Arrow Function `this`",
  },
  {
    id: "function-call-method",
    title: "Function `.call()` Method",
    description:
      "Use the `.call()` method to invoke a function with a specified `this` context and individual arguments.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Use `.call()`",
  },
  {
    id: "function-apply-method",
    title: "Function `.apply()` Method",
    description:
      "Use the `.apply()` method to invoke a function with a specified `this` context and arguments provided as an array.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Use `.apply()`",
  },
  {
    id: "function-bind-method",
    title: "Function `.bind()` Method",
    description:
      "Use the `.bind()` method to create a new function that, when called, has its `this` keyword set to a provided value.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Use `.bind()`",
  },
  {
    id: "recursive-countdown",
    title: "Recursive Countdown",
    description:
      "Write a simple recursive function that logs a countdown from a given number to 1.",
    category: "Functions & Scope",
    inputs: [
      { id: "num", label: "Start from", type: "number", defaultValue: 5 },
    ],
    buttonText: "Start Countdown",
  },
  {
    id: "first-class-functions",
    title: "First-Class Functions",
    description:
      "Demonstrate that functions are 'first-class citizens' by assigning a function to a variable and then invoking it.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test First-Class Function",
  },
  {
    id: "named-function-expression",
    title: "Named Function Expression",
    description:
      "Create a named function expression. The name is only accessible within the function itself, useful for debugging or recursion.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Run Named Expression",
  },
  {
    id: "function-shadowing",
    title: "Variable Shadowing",
    description:
      "Demonstrate variable shadowing, where a variable in an inner scope has the same name as a variable in an outer scope.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Shadowing",
  },
  {
    id: "anonymous-function",
    title: "Anonymous Function",
    description:
      "Show an example of an anonymous function, often used as an argument to another function (a callback).",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Use Anonymous Function",
  },
  {
    id: "implicit-return-arrow",
    title: "Implicit Return in Arrow Functions",
    description:
      "Showcase the implicit return feature of single-expression arrow functions without curly braces.",
    category: "Functions & Scope",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 7 }],
    buttonText: "Test Implicit Return",
  },
  {
    id: "function-length-property",
    title: "Function `.length` Property",
    description:
      "Demonstrate the `.length` property of a function, which indicates the number of named parameters it expects.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Get Function Length",
  },
  {
    id: "scope-let-vs-var-loop",
    title: "`let` vs. `var` in Loops",
    description:
      "Demonstrate the common pitfall of using `var` in a loop with an asynchronous callback, and how `let` solves it.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Run Loop Test",
  },
  {
    id: "pass-by-value",
    title: "Pass by Value (Primitives)",
    description:
      "Demonstrate that primitive types are passed by value. Modifying them inside a function does not affect the original.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Pass by Value",
  },
  {
    id: "pass-by-reference",
    title: "Pass by Reference (Objects)",
    description:
      "Demonstrate that objects are passed by reference. Modifying a property inside a function affects the original object.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Pass by Reference",
  },
  {
    id: "function-constructor",
    title: "Function Constructor (Conceptual)",
    description:
      "Show the syntax for the `Function` constructor. Note: This is generally not recommended due to security and performance reasons.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Show Constructor Syntax",
  },
  {
    id: "currying-multiply",
    title: "Currying for Multiplication",
    description:
      "Create a curried function `multiply(a)(b)(c)` that takes three numbers in separate calls and returns their product.",
    category: "Functions & Scope",
    inputs: [
      { id: "a", label: "First Number", type: "number", defaultValue: 2 },
      { id: "b", label: "Second Number", type: "number", defaultValue: 3 },
      { id: "c", label: "Third Number", type: "number", defaultValue: 4 },
    ],
    buttonText: "Curry Multiply",
  },
  {
    id: "partial-application",
    title: "Partial Application with `.bind()`",
    description:
      "Use `.bind()` to create a partially applied function by pre-setting some arguments.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Create Partial Function",
  },
  {
    id: "this-event-handler",
    title: "`this` in an Event Handler",
    description:
      "Conceptually show how `this`, in a traditional function used as an event handler, refers to the element that triggered the event.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Show `this` in Handler",
  },
  {
    id: "function-as-object-property",
    title: "Function as an Object Property",
    description:
      "Create a 'config' object that stores a function as one of its properties.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Run Config Function",
  },
  {
    id: "hoisting-var-declaration",
    title: "Hoisting: `var` Declaration",
    description:
      "Demonstrate that `var` declarations are hoisted, but their assignments are not, resulting in `undefined`.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test `var` Hoisting",
  },
  {
    id: "temporal-dead-zone-let",
    title: "Temporal Dead Zone (`let`)",
    description:
      "Show that accessing a `let` variable before its declaration results in a `ReferenceError` due to the Temporal Dead Zone (TDZ).",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test TDZ",
  },
  {
    id: "arrow-function-no-arguments",
    title: "Arrow Functions Have No `arguments` Object",
    description:
      "Demonstrate that arrow functions do not have their own `arguments` object, but can use rest parameters instead.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test `arguments` in Arrow",
  },
  {
    id: "iife-with-params",
    title: "IIFE with Parameters",
    description:
      "Show how to pass arguments into an IIFE to provide it with initial values.",
    category: "Functions & Scope",
    inputs: [
      {
        id: "param",
        label: "Parameter to pass",
        type: "text",
        defaultValue: "Hello IIFE",
      },
    ],
    buttonText: "Run IIFE with Param",
  },
  {
    id: "function-overwriting",
    title: "Function Overwriting",
    description:
      "Demonstrate how defining a function with the same name as a previous one will overwrite the original.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Overwriting",
  },
  {
    id: "callback-hell-conceptual",
    title: "Callback Hell (Conceptual)",
    description:
      "Show a conceptual example of 'callback hell' or the 'pyramid of doom,' which modern Promises and async/await solve.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Show Callback Hell",
  },
  {
    id: "this-binding-new",
    title: "`this` with the `new` Keyword",
    description:
      "Show that when a function is called with the `new` keyword (as a constructor), `this` is bound to the newly created object.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test `new` Binding",
  },
  {
    id: "this-strict-mode",
    title: "`this` in Strict Mode",
    description:
      "Demonstrate that in strict mode, `this` is `undefined` in a regular function call, preventing accidental access to the global object.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Strict Mode `this`",
  },
  {
    id: "function-name-property",
    title: "Function `.name` Property",
    description:
      "Demonstrate the `.name` property of a function for both named and anonymous functions.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Get Function Names",
  },
  {
    id: "generator-function-basic",
    title: "Generator Function: Basic",
    description:
      "Create a simple generator function that yields a sequence of numbers.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Generate Numbers",
  },
  {
    id: "generator-function-iterator",
    title: "Generator Function as Iterator",
    description:
      "Use the iterator returned by a generator function with the `.next()` method to get yielded values.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Use Iterator",
  },
  {
    id: "lexical-environment-conceptual",
    title: "Lexical Environment (Conceptual)",
    description:
      "Explain what a Lexical Environment is and its two components: the Environment Record and the reference to the outer environment.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Explain",
  },
  {
    id: "this-with-settimeout",
    title: "`this` in `setTimeout`",
    description:
      "Demonstrate the classic problem where `this` inside a `setTimeout` callback in a method is not what you expect, and show solutions.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Timeout `this`",
  },
  {
    id: "function-composition",
    title: "Function Composition",
    description:
      "Create a `compose` function that takes two functions and returns a new function that is their mathematical composition.",
    category: "Functions & Scope",
    inputs: [
      { id: "num", label: "Input Number", type: "number", defaultValue: 5 },
    ],
    buttonText: "Compose and Run",
  },
  {
    id: "function-piping",
    title: "Function Piping",
    description:
      "Create a `pipe` function that takes multiple functions and chains them together, passing the output of one as the input to the next.",
    category: "Functions & Scope",
    inputs: [
      { id: "num", label: "Input Number", type: "number", defaultValue: 5 },
    ],
    buttonText: "Pipe and Run",
  },
  {
    id: "side-effects-conceptual",
    title: "Side Effects (Conceptual)",
    description:
      "Explain what a side effect is in the context of functions (e.g., modifying an external variable, logging to console, writing to a file).",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Explain Side Effects",
  },
  {
    id: "memoization-closure",
    title: "Memoization with Closures",
    description:
      "Implement a higher-order function `memoize` that takes a function and returns a memoized version of it using a closure for the cache.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Memoization",
  },
  {
    id: "block-scope-in-loop",
    title: "Block Scope in a Loop",
    description:
      "Show how `let` creates a new lexical environment for each iteration of a `for` loop.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Show Loop Scope",
  },
  {
    id: "arrow-function-no-prototype",
    title: "Arrow Functions Have No `prototype`",
    description:
      "Demonstrate that arrow functions do not have a `.prototype` property and cannot be used as constructors.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test `prototype`",
  },
  {
    id: "this-in-nested-function",
    title: "`this` in a Nested Function",
    description:
      "Show how a regular nested function inside a method gets its own `this` context (usually global), and how to solve it.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Nested `this`",
  },
  {
    id: "default-param-evaluation",
    title: "Default Parameter Evaluation",
    description:
      "Demonstrate that default parameter expressions are evaluated at call time.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Evaluate Defaults",
  },
  {
    id: "function-arity",
    title: "Function Arity",
    description:
      "Explain function arity (the number of arguments a function expects) and show how the `.length` property reflects this.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Check Arity",
  },
  {
    id: "iife-for-private-methods",
    title: "IIFE for Private Methods",
    description:
      "Use the module pattern with an IIFE to create an object with public methods that can access private helper functions.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Private Methods",
  },
  {
    id: "function-as-a-value",
    title: "Function as a Value",
    description:
      "Demonstrate functions as first-class citizens by storing them in an array and then iterating and calling them.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Call Functions from Array",
  },
  {
    id: "variadic-function",
    title: "Variadic Function",
    description:
      "Create a variadic function (a function that accepts a variable number of arguments) using rest parameters to find the maximum number.",
    category: "Functions & Scope",
    inputs: [
      {
        id: "numbers",
        label: "Numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 5, 2, 9, 3",
      },
    ],
    buttonText: "Find Max",
  },
  {
    id: "execution-context-conceptual",
    title: "Execution Context (Conceptual)",
    description:
      "Explain the two phases of the Execution Context: Creation (variable environment, `this` binding) and Execution.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Explain Context",
  },
  {
    id: "this-in-callback",
    title: "`this` in a Callback",
    description:
      "Demonstrate how the value of `this` is lost when a method is passed as a callback to another function (e.g., `forEach`).",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Callback `this`",
  },
  {
    id: "function-hoisting-pitfall",
    title: "Function Hoisting Pitfall",
    description:
      "Show a potential pitfall where a function declaration is unconditionally hoisted from within a block, leading to unexpected behavior.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Show Pitfall",
  },
  {
    id: "call-vs-apply-vs-bind",
    title: "`call` vs `apply` vs `bind`",
    description:
      "Summarize the key differences between `.call()`, `.apply()`, and `.bind()` for controlling the `this` context.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Summarize",
  },
  {
    id: "currying-vs-partial-application",
    title: "Currying vs. Partial Application",
    description:
      "Explain the subtle difference between currying (a series of unary functions) and partial application (fixing some arguments).",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Explain Difference",
  },
  {
    id: "function-overloading-conceptual",
    title: "Function Overloading (Conceptual)",
    description:
      "Explain why JavaScript does not support traditional function overloading and how to achieve similar results by checking arguments.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Explain Overloading",
  },
  {
    id: "self-referencing-function",
    title: "Self-Referencing Function",
    description:
      "Use a named function expression to allow a function to refer to itself, useful for recursion without being dependent on the variable it's assigned to.",
    category: "Functions & Scope",
    inputs: [
      { id: "num", label: "Factorial of", type: "number", defaultValue: 4 },
    ],
    buttonText: "Calculate Factorial",
  },
  {
    id: "closure-scope-preservation",
    title: "Closure Scope Preservation",
    description:
      "Demonstrate that a closure holds a reference to its scope, not a copy, by modifying a variable after the closure is created but before it's called.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Scope Reference",
  },
  {
    id: "higher-order-function-wrapper",
    title: "Higher-Order Function Wrapper",
    description:
      "Create a higher-order function that wraps another function to log its arguments and return value.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Wrap and Call",
  },
  {
    id: "new-function-scope",
    title: "Scope of `new Function`",
    description:
      "Demonstrate that functions created with the `Function` constructor do not create closures to their creation contexts; they always have global scope.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test `new Function` Scope",
  },
  {
    id: "generator-function-return",
    title: "Generator with `return`",
    description:
      "Show how a `return` statement in a generator function sets the `value` of the final object where `done` is true.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Run Generator to End",
  },
  {
    id: "generator-yield-delegation",
    title: "Generator `yield*`",
    description:
      "Use `yield*` to delegate the iteration control from one generator to another.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test `yield*`",
  },
  {
    id: "async-function-return",
    title: "`async` Function Return Value",
    description:
      "Demonstrate that an `async` function always returns a Promise, which resolves with the function's return value.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Call Async Function",
  },
  {
    id: "this-in-object-literal",
    title: "`this` in Object Literal Method",
    description:
      "Clarify that `this` inside a method defined in an object literal refers to the object itself.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Object `this`",
  },
  {
    id: "function-as-property-value",
    title: "Function as Property Value",
    description:
      "Create an object where one of the property values is a function, and then call that function.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Call Function Property",
  },
  {
    id: "call-stack-conceptual",
    title: "Call Stack (Conceptual)",
    description:
      "Explain what the Call Stack is and how it keeps track of function calls, including a simple example of `A()` calls `B()` calls `C()`.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Explain Call Stack",
  },
  {
    id: "function-binding-precedence",
    title: "`this` Binding Precedence",
    description:
      "Conceptually explain the order of precedence for `this` binding: `new` > explicit binding (`bind`, `call`) > method call > default (global).",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Explain Precedence",
  },
  {
    id: "polyfill-bind-method",
    title: "Polyfill `.bind()` (Conceptual)",
    description:
      "Outline the logic for creating a simple polyfill for the `Function.prototype.bind` method using closures and `.apply()`.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Show Polyfill Logic",
  },
  {
    id: "default-params-and-scope",
    title: "Default Parameters and Scope",
    description:
      "Demonstrate that default parameters have their own scope, which is between the parent scope and the function body's scope.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Default Param Scope",
  },
  {
    id: "arrow-function-and-this-in-object",
    title: "Arrow Function as Method Pitfall",
    description:
      "Show the common pitfall of using an arrow function as a method directly on an object literal, where `this` does not refer to the object.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Show Pitfall",
  },
  {
    id: "function-purity-and-arrays",
    title: "Function Purity with Arrays",
    description:
      "Write an impure function that sorts an array in place, and a pure function that returns a new, sorted array.",
    category: "Functions & Scope",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "c,a,b" },
    ],
    buttonText: "Sort Pure vs. Impure",
  },
  {
    id: "iife-with-global-variable",
    title: "IIFE with Global Variable",
    description:
      "Demonstrate passing a global object (like `window`) into an IIFE to explicitly define dependencies.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Show IIFE Pattern",
  },
  {
    id: "function-with-optional-params",
    title: "Function with Optional Parameters",
    description:
      "Write a function where some parameters are optional by checking if they are `undefined`.",
    category: "Functions & Scope",
    inputs: [{ id: "name", label: "Name", type: "text", defaultValue: "User" }],
    buttonText: "Greet",
  },
  {
    id: "rest-params-vs-arguments",
    title: "Rest Parameters vs. `arguments`",
    description:
      "Summarize the key advantages of using rest parameters (`...args`) over the older `arguments` object.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Compare",
  },
  {
    id: "named-args-with-destructuring",
    title: "Named Arguments with Destructuring",
    description:
      "Write a function that accepts an object of named arguments and uses destructuring in the parameter list.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Use Named Arguments",
  },
  {
    id: "function-to-string",
    title: "Function `toString()`",
    description:
      "Demonstrate that calling `.toString()` on a function returns its source code as a string.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Get Source Code",
  },
  {
    id: "function-scope-vs-global-scope",
    title: "Function Scope vs. Global Scope",
    description:
      "Demonstrate that a function can access global variables, but the global scope cannot access function-scoped variables.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Scope Access",
  },
  {
    id: "block-scope-with-const",
    title: "Block Scope with `const`",
    description:
      "Show that `const` is block-scoped like `let` but also cannot be reassigned.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test `const` Scope",
  },
  {
    id: "higher-order-function-foreach",
    title: "Higher-Order Function: `forEach`",
    description:
      "Implement a simple version of the `forEach` method as a higher-order function that takes an array and a callback.",
    category: "Functions & Scope",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "a,b,c" },
    ],
    buttonText: "Run Custom forEach",
  },
  {
    id: "function-currying-practical",
    title: "Practical Currying",
    description:
      "Create a curried function `log(level)(message)` for practical, specialized logging.",
    category: "Functions & Scope",
    inputs: [
      {
        id: "msg",
        label: "Message",
        type: "text",
        defaultValue: "Request successful",
      },
    ],
    buttonText: "Log with Curried Function",
  },
  {
    id: "this-in-event-listener-arrow",
    title: "`this` in Event Listener (Arrow)",
    description:
      "Conceptually show how an arrow function as an event listener inherits `this` from its surrounding scope, which is often desirable in classes.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Explain Arrow `this`",
  },
  {
    id: "function-hoisting-with-var",
    title: "Function Hoisting with `var`",
    description:
      "Demonstrate that a function expression assigned to a `var` has its declaration hoisted, but the function body is not, leading to a `TypeError` if called early.",
    category: "Functions & Scope",
    inputs: [],
    buttonText: "Test Hoisting",
  },
];
