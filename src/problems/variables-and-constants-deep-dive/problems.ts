import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "declare-with-var",
    title: "Declare with `var`",
    description:
      "Declare a variable named `myVar` using the `var` keyword and assign it a value.",
    inputs: [
      {
        id: "value",
        label: "Value to assign",
        type: "text",
        defaultValue: "Hello",
      },
    ],
    buttonText: "Declare and Show",
  },
  // problem--> 02
  {
    id: "declare-with-let",
    title: "Declare with `let`",
    description:
      "Declare a variable named `myLet` using the `let` keyword and assign it a value.",
    difficulty: "Beginner",
    inputs: [
      {
        id: "value",
        label: "Value to assign",
        type: "number",
        defaultValue: 100,
      },
    ],
    buttonText: "Declare and Show",
  },
  // problem--> 03
  {
    id: "declare-with-const",
    title: "Declare with `const`",
    description:
      "Declare a constant named `myConst` using the `const` keyword and assign it a value.",
    category: "Beginner",
    inputs: [
      {
        id: "value",
        label: "Value to assign",
        type: "text",
        defaultValue: "Constant",
      },
    ],
    buttonText: "Declare and Show",
  },
  // problem--> 04
  {
    id: "reassign-let-variable",
    title: "Reassign a `let` Variable",
    description:
      "Declare a variable with `let`, assign it an initial value, and then reassign it to a new value.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Reassign `let`",
  },
  // problem--> 05
  {
    id: "const-reassignment-primitive",
    title: "Reassigning a `const` Primitive",
    description:
      "Declare a constant with a primitive value (e.g., a number) and then attempt to reassign it. Observe the error.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Reassignment",
  },
  // problem--> 06
  {
    id: "uninitialized-variable",
    title: "Uninitialized Variable",
    description:
      "Declare a variable using `let` without assigning it a value, and check its initial value.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Check Value",
  },
  // problem--> 07
  {
    id: "const-must-be-initialized",
    title: "`const` Must Be Initialized",
    description:
      "Attempt to declare a constant using `const` without an initial value to see the resulting `SyntaxError`.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Declaration",
  },
  // problem--> 08
  {
    id: "variable-naming-rules",
    title: "Variable Naming Rules",
    description:
      "Demonstrate valid variable names (starting with letters, $, or _) and an invalid one (starting with a number).",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Show Naming Rules",
  },
  // problem--> 09
  {
    id: "case-sensitivity",
    title: "Case Sensitivity",
    description:
      "Declare two variables with the same name but different casing (e.g., `myVariable` and `myvariable`) to show they are distinct.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Case Sensitivity",
  },
  // problem--> 10
  {
    id: "type-of-variable",
    title: "Using `typeof`",
    description:
      "Declare variables of different primitive types (string, number, boolean) and use the `typeof` operator to check their type.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Check Types",
  },
  // problem--> 11
  {
    id: "dynamic-typing",
    title: "Dynamic Typing",
    description:
      "Declare a variable with `let`, assign it a number, check its type, then reassign it to a string and check its type again.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Dynamic Typing",
  },
  // problem--> 12
  {
    id: "declare-multiple-variables",
    title: "Declare Multiple Variables",
    description:
      "Show how to declare multiple variables in a single `let` statement.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Declare Multiple",
  },
  // problem--> 13
  {
    id: "string-concatenation-vars",
    title: "Variable String Concatenation",
    description:
      "Declare two string variables and concatenate them to form a new string.",
    difficulty: "Beginner",
    inputs: [
      { id: "str1", label: "First Name", type: "text", defaultValue: "John" },
      { id: "str2", label: "Last Name", type: "text", defaultValue: "Doe" },
    ],
    buttonText: "Concatenate",
  },
  // problem--> 14
  {
    id: "template-literals-vars",
    title: "Template Literals with Variables",
    description:
      "Use template literals (backticks ``) to embed variables directly into a string.",
    difficulty: "Beginner",
    inputs: [
      { id: "name", label: "Name", type: "text", defaultValue: "Alice" },
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
    ],
    buttonText: "Create String",
  },
  // problem--> 15
  {
    id: "null-vs-undefined",
    title: "`null` vs. `undefined`",
    description:
      "Show the difference between a variable that is uninitialized (`undefined`) and a variable explicitly assigned `null`.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 16
  {
    id: "shorthand-property-names",
    title: "Shorthand Property Names",
    description:
      "Show how to create an object literal from variables with the same name using the ES6 shorthand syntax.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Shorthand",
  },
  // problem--> 17
  {
    id: "nan-is-weird",
    title: "The Peculiarity of `NaN`",
    description:
      "Demonstrate that `NaN` (Not a Number) is the only value in JavaScript that is not equal to itself, and show the correct way to check for it.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test `NaN`",
  },
  // problem--> 18
  {
    id: "destructure-swap-variables",
    title: "Swap Variables with Destructuring",
    description:
      "Show the elegant ES6 syntax for swapping two variables in a single line using array destructuring.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Swap Variables",
  },
  // problem--> 19
  {
    id: "destructure-array",
    title: "Array Destructuring",
    description:
      "Use array destructuring to unpack values from an array into distinct variables.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Destructure Array",
  },
  // problem--> 20
  {
    id: "destructure-object",
    title: "Object Destructuring",
    description:
      "Use object destructuring to unpack properties from an object into variables.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Destructure Object",
  },
  // problem--> 21
  {
    id: "when-to-use-let-vs-const",
    title: "When to Use `let` vs. `const` (Conceptual)",
    description:
      "Explain the best practice: default to `const` and only use `let` when you know a variable needs to be reassigned.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Explain Best Practice",
  },
  // problem--> 22
  {
    id: "destructure-from-function-return-array",
    title: "Destructuring a Function's Return (Array)",
    description:
      "Destructure the array returned by a function directly into variables.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Destructure Return",
  },
  // problem--> 23
  {
    id: "destructure-from-function-return-object",
    title: "Destructuring a Function's Return (Object)",
    description:
      "Destructure the object returned by a function directly into variables.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Destructure Return",
  },
  // problem--> 24
  {
    id: "redeclare-var",
    title: "Redeclaring `var`",
    description:
      "Show that a variable declared with `var` can be redeclared in the same scope without an error.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Redeclare `var`",
  },
  // problem--> 25
  {
    id: "redeclare-let-error",
    title: "Redeclaring `let` (Error)",
    description:
      "Attempt to redeclare a variable with `let` in the same scope to see the `SyntaxError`.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Redeclare `let`",
  },
  // problem--> 26
  {
    id: "global-scope-var",
    title: "Global Scope with `var`",
    description:
      "Declare a global variable with `var` and access it from within a function.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Access Global `var`",
  },
  // problem--> 27
  {
    id: "function-scope-var",
    title: "Function Scope with `var`",
    description:
      "Show that a variable declared with `var` inside a function is not accessible from outside that function.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Function Scope",
  },
  // problem--> 28
  {
    id: "block-scope-let",
    title: "Block Scope with `let`",
    description:
      "Demonstrate that a variable declared with `let` inside a block (e.g., an if-statement) is not accessible outside that block.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Block Scope",
  },
  // problem--> 29
  {
    id: "block-scope-const",
    title: "Block Scope with `const`",
    description: "Show that `const` is also block-scoped, just like `let`.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test `const` Scope",
  },
  // problem--> 30
  {
    id: "var-no-block-scope",
    title: "`var` Ignores Block Scope",
    description:
      "Show that `var` is function-scoped and does not respect block scope, which can lead to bugs.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test `var` in Block",
  },
  // problem--> 31
  {
    id: "global-scope-let",
    title: "Global Scope with `let`",
    description:
      "Declare a global variable with `let` and access it from a function.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Access Global `let`",
  },
  // problem--> 32
  {
    id: "shadowing-global-variable",
    title: "Shadowing a Global Variable",
    description:
      "Declare a global variable and a local variable with the same name inside a function to show how the local one takes precedence.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Global Shadowing",
  },
  // problem--> 33
  {
    id: "const-array-reassignment-error",
    title: "Reassigning a `const` Array (Error)",
    description:
      "Attempt to reassign a `const` array to a new array to observe the `TypeError`.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Reassignment",
  },
  // problem--> 34
  {
    id: "destructure-skip-array-items",
    title: "Skipping Items in Array Destructuring",
    description:
      "Use a comma to skip over an element when destructuring an array.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Skip Items",
  },
  // problem--> 35
  {
    id: "practical-let-for-state",
    title: "Practical `let`: State Variable",
    description:
      "Use `let` to manage a state variable, such as a counter that gets updated by a function.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Increment Counter",
  },
  // problem--> 36
  {
    id: "practical-const-for-config",
    title: "Practical `const`: Config Object",
    description:
      "Use `const` to store a configuration object, like an API endpoint URL, which should not be changed during runtime.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Show Config",
  },
  // problem--> 37
  {
    id: "variable-shadowing",
    title: "Variable Shadowing",
    description:
      "Demonstrate variable shadowing, where a variable in an inner scope has the same name as a variable in an outer scope.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Shadowing",
  },
  // problem--> 38
  {
    id: "lexical-scoping",
    title: "Lexical Scoping",
    description:
      "Demonstrate lexical (static) scoping by showing that a nested function can access variables from its containing function.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Lexical Scope",
  },
  // problem--> 39
  {
    id: "scope-chain",
    title: "Scope Chain",
    description:
      "Demonstrate the scope chain by having a deeply nested function access a variable from its grandparent scope.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Scope Chain",
  },
  // problem--> 40
  {
    id: "iife-scope",
    title: "IIFE for Scope",
    description:
      "Use an Immediately Invoked Function Expression (IIFE) to create a private scope and avoid polluting the global scope.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Run IIFE",
  },
  // problem--> 41
  {
    id: "let-in-for-loop",
    title: "`let` in a `for` Loop",
    description:
      "Demonstrate how `let` creates a new binding for each iteration of a `for` loop, solving a common closure problem.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test `let` in Loop",
  },
  // problem--> 42
  {
    id: "var-in-for-loop-pitfall",
    title: "`var` in a `for` Loop Pitfall",
    description:
      "Show the classic problem of using `var` in a `for` loop with an asynchronous callback.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test `var` Pitfall",
  },
  // problem--> 43
  {
    id: "window-object-global-var",
    title: "`var` and the `window` Object",
    description:
      "Show that in a browser, global variables declared with `var` become properties of the `window` object.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Check `window`",
  },
  // problem--> 44
  {
    id: "window-object-global-let",
    title: "`let` and the `window` Object",
    description:
      "Show that global variables declared with `let` or `const` do not become properties of the `window` object.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Check `window`",
  },
  // problem--> 45
  {
    id: "undeclared-variable-global",
    title: "Undeclared Variable (Global Leak)",
    description:
      "Show how assigning to an undeclared variable in non-strict mode accidentally creates a global variable.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Global Leak",
  },
  // problem--> 46
  {
    id: "strict-mode-undeclared",
    title: "Undeclared Variable in Strict Mode",
    description:
      "Demonstrate that strict mode prevents accidental global variables by throwing a `ReferenceError` on assignment to an undeclared variable.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Strict Mode",
  },
  // problem--> 47
  {
    id: "scope-of-catch-block",
    title: "Scope of `catch` Block",
    description:
      "Show that the error variable in a `try...catch` block is block-scoped to the `catch` block.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test `catch` Scope",
  },
  // problem--> 48
  {
    id: "hoisting-var-declaration",
    title: "Hoisting: `var` Declaration",
    description:
      "Demonstrate that `var` declarations are hoisted, but their assignments are not, resulting in `undefined` when accessed before assignment.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test `var` Hoisting",
  },
  // problem--> 49
  {
    id: "hoisting-function-declaration",
    title: "Hoisting: Function Declaration",
    description:
      "Show that an entire function declaration is hoisted, allowing it to be called before it is defined in the code.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Function Hoisting",
  },
  // problem--> 50
  {
    id: "hoisting-function-expression",
    title: "Hoisting: Function Expression",
    description:
      "Demonstrate that a function expression assigned to a `var` is not fully hoisted, leading to a `TypeError` if called before assignment.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Expression Hoisting",
  },
  // problem--> 51
  {
    id: "temporal-dead-zone-let",
    title: "Temporal Dead Zone (`let`)",
    description:
      "Show that accessing a `let` variable before its declaration results in a `ReferenceError` due to the Temporal Dead Zone (TDZ).",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test TDZ",
  },
  // problem--> 52
  {
    id: "temporal-dead-zone-const",
    title: "Temporal Dead Zone (`const`)",
    description:
      "Demonstrate that `const` variables are also subject to the Temporal Dead Zone.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test TDZ for `const`",
  },
  // problem--> 53
  {
    id: "var-redeclared-in-function",
    title: "`var` Hoisting within Function",
    description:
      "Demonstrate how a `var` with the same name as a global variable, when declared inside a function, is hoisted to the top of that function.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Function Hoisting",
  },
  // problem--> 54
  {
    id: "hoisting-in-strict-mode",
    title: "Hoisting in Strict Mode",
    description:
      "Explain that hoisting behavior for `var` and functions is largely the same in strict mode, but other behaviors (like undeclared variables) change.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain Strict Hoisting",
  },
  // problem--> 55
  {
    id: "const-mutate-object",
    title: "Mutating a `const` Object",
    description:
      "Show that while a `const` variable cannot be reassigned, the properties of the object it refers to can be mutated.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Mutate Object",
  },
  // problem--> 56
  {
    id: "const-mutate-array",
    title: "Mutating a `const` Array",
    description:
      "Demonstrate that you can add, remove, or change elements in an array declared with `const`.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Mutate Array",
  },
  // problem--> 57
  {
    id: "const-reassign-object",
    title: "Reassigning a `const` Object (Error)",
    description:
      "Attempt to reassign a constant variable that holds an object to a new object, observing the `TypeError`.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Reassignment",
  },
  // problem--> 58
  {
    id: "object-freeze",
    title: "`Object.freeze()`",
    description:
      "Use `Object.freeze()` to make an object truly immutable, preventing its properties from being changed.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Freeze Object",
  },
  // problem--> 59
  {
    id: "const-in-for-of-loop",
    title: "`const` in a `for...of` Loop",
    description:
      "Demonstrate that you can use `const` to declare the loop variable in a `for...of` loop, as a new binding is created for each iteration.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test `const` in Loop",
  },
  // problem--> 60
  {
    id: "const-in-for-loop-error",
    title: "`const` in a classic `for` Loop (Error)",
    description:
      "Show that using `const` in the initializer of a classic `for` loop will cause an error because the loop tries to reassign it.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test `const` in `for`",
  },
  // problem--> 61
  {
    id: "destructure-array-rest",
    title: "Array Destructuring with Rest",
    description:
      "Use the rest pattern (`...`) in array destructuring to collect the remaining elements into a new array.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Use Rest Pattern",
  },
  // problem--> 62
  {
    id: "destructure-object-rest",
    title: "Object Destructuring with Rest",
    description:
      "Use the rest pattern (`...`) in object destructuring to collect the remaining properties into a new object.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Use Rest Pattern",
  },
  // problem--> 63
  {
    id: "destructure-object-alias",
    title: "Object Destructuring with Aliases",
    description:
      "Assign object properties to new variable names using alias syntax (e.g., `{ name: newName }`).",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Use Aliases",
  },
  // problem--> 64
  {
    id: "destructure-array-defaults",
    title: "Array Destructuring with Defaults",
    description:
      "Provide default values for variables in array destructuring for cases where the array is shorter than expected.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Use Defaults",
  },
  // problem--> 65
  {
    id: "destructure-object-defaults",
    title: "Object Destructuring with Defaults",
    description:
      "Provide default values for variables in object destructuring for cases where a property does not exist.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Use Defaults",
  },
  // problem--> 66
  {
    id: "destructure-nested-object",
    title: "Nested Object Destructuring",
    description:
      "Use nested destructuring to extract values from a nested object in a single statement.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Destructure Nested",
  },
  // problem--> 67
  {
    id: "destructure-function-params-object",
    title: "Destructuring in Function Parameters (Object)",
    description:
      "Use object destructuring directly in a function's parameter list to handle an options object.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Function",
  },
  // problem--> 68
  {
    id: "destructure-function-params-array",
    title: "Destructuring in Function Parameters (Array)",
    description:
      "Use array destructuring directly in a function's parameter list.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Function",
  },
  // problem--> 69
  {
    id: "destructure-for-of-loop",
    title: "Destructuring in a `for...of` Loop",
    description:
      "Use array destructuring in a `for...of` loop to easily access elements of a nested array.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Loop",
  },
  // problem--> 70
  {
    id: "destructure-string",
    title: "Destructuring a String",
    description:
      "Show that strings can be destructured like arrays to get individual characters.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Destructure String",
  },
  // problem--> 71
  {
    id: "destructure-with-defaults-and-alias",
    title: "Destructuring with Defaults and Aliases",
    description:
      "Combine default values and aliasing in a single object destructuring statement.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Combine Features",
  },
  // problem--> 72
  {
    id: "destructure-null-error",
    title: "Destructuring `null` or `undefined`",
    description:
      "Show that attempting to destructure `null` or `undefined` will result in a `TypeError`.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Null Destructuring",
  },
  // problem--> 73
  {
    id: "destructure-return-with-defaults",
    title: "Destructuring Return with Defaults",
    description:
      "Destructure an object returned by a function, providing a default value for a potentially missing property.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Return with Defaults",
  },
  // problem--> 74
  {
    id: "let-block-scope-in-standalone-block",
    title: "Scope of Standalone Blocks",
    description:
      "Demonstrate that a pair of curly braces not attached to any statement (like `if` or `for`) still creates a new block scope for `let` and `const`.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Standalone Block",
  },
  // problem--> 75
  {
    id: "dynamic-property-creation",
    title: "Dynamic Property Creation",
    description:
      "Use a variable to define a property name when creating an object literal (computed property names).",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Computed Property",
  },
  // problem--> 76
  {
    id: "primitive-wrapper-objects",
    title: "Primitive Wrapper Objects (Conceptual)",
    description:
      'Explain how JavaScript temporarily converts primitives to objects so you can call methods on them (e.g., `"hello".toUpperCase()`).',
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain Wrappers",
  },
  // problem--> 77
  {
    id: "symbol-primitive-type",
    title: "The `Symbol` Primitive Type",
    description:
      "Create a `Symbol` and show that it is a unique, immutable primitive value, often used as an object property key.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Create a Symbol",
  },
  // problem--> 78
  {
    id: "bigint-primitive-type",
    title: "The `BigInt` Primitive Type",
    description:
      "Create a `BigInt` to work with integers larger than the maximum safe integer in JavaScript.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Create a BigInt",
  },
  // problem--> 79
  {
    id: "var-function-scope-loop-pitfall",
    title: "Function Scope vs. Loop Body",
    description:
      "Show that a `var` declared in a loop is actually scoped to the entire function, not just the loop.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Demonstrate Scope",
  },
  // problem--> 80
  {
    id: "let-scope-in-catch",
    title: "`let` Behavior in `catch`",
    description:
      "Demonstrate that if a `catch` block uses a `let` with the same name as an outer variable, it properly shadows it without conflict.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test `catch` Scope",
  },
  // problem--> 81
  {
    id: "hoisting-var-at-global-scope",
    title: "Hoisting of `var` at Global Scope",
    description:
      "Explain how `var` declarations are conceptually moved to the top of the script before execution begins.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain Global Hoisting",
  },
  // problem--> 82
  {
    id: "const-primitive-vs-object-deep-dive",
    title: "`const`: Value vs. Reference",
    description:
      "Deep dive into why `const` only protects the variable binding (the reference), not the value of the object itself.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain `const` Behavior",
  },
  // problem--> 83
  {
    id: "global-object-conceptual",
    title: "The Global Object (Conceptual)",
    description:
      "Explain the role of the global object (`window` in browsers, `global` in Node.js) and the introduction of `globalThis`.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain Global Object",
  },
  // problem--> 84
  {
    id: "typeof-in-tdz",
    title: "`typeof` in the TDZ",
    description:
      "Show that even the `typeof` operator will throw a `ReferenceError` when used on a `let` or `const` variable in its TDZ.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `typeof`",
  },
  // problem--> 85
  {
    id: "hoisting-order-var-and-function",
    title: "Hoisting Order: `var` vs Function",
    description:
      "Demonstrate that function declarations are hoisted before variable declarations when they have the same name.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Hoisting Order",
  },
  // problem--> 86
  {
    id: "hoisting-class-declaration",
    title: "Hoisting: Class Declaration",
    description:
      "Show that ES6 class declarations are hoisted but, like `let`, are in a TDZ, preventing them from being used before declaration.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Class Hoisting",
  },
  // problem--> 87
  {
    id: "object-freeze-nested",
    title: "Shallow Nature of `Object.freeze()`",
    description:
      "Show that `Object.freeze()` is shallow, meaning it does not freeze nested objects within the main object.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Nested Freeze",
  },
  // problem--> 88
  {
    id: "object-seal",
    title: "`Object.seal()`",
    description:
      "Use `Object.seal()` to prevent adding or deleting properties from an object, while still allowing existing properties to be modified.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Seal Object",
  },
  // problem--> 89
  {
    id: "object-preventextensions",
    title: "`Object.preventExtensions()`",
    description:
      "Use `Object.preventExtensions()` to prevent new properties from ever being added to an object.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Prevent Extensions",
  },
  // problem--> 90
  {
    id: "destructure-assignment-without-declaration",
    title: "Destructuring Assignment without Declaration",
    description:
      "Show the syntax for assigning to existing variables using object destructuring, which requires parentheses.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Assignment",
  },
  // problem--> 91
  {
    id: "destructure-dynamic-property-name",
    title: "Destructuring with Dynamic Property Name",
    description:
      "Demonstrate the limitation of destructuring with dynamic keys and show the correct alternative using bracket notation.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Dynamic Destructuring",
  },
  // problem--> 92
  {
    id: "destructure-mixed-array-object",
    title: "Mixed Array and Object Destructuring",
    description:
      "Destructure a complex data structure that contains both arrays and objects.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Mixed Destructuring",
  },
  // problem--> 93
  {
    id: "shadowing-in-catch-block",
    title: "Shadowing with `catch` Parameter",
    description:
      "Show how the error parameter in a `catch` block can shadow an outer variable, a behavior that changed in ES2019.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `catch` Shadowing",
  },
  // problem--> 94
  {
    id: "tdz-and-closures",
    title: "TDZ and Closures",
    description:
      "Create a closure that captures a `let` variable and call it before the variable is declared to show the TDZ applies.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test TDZ in Closure",
  },
  // problem--> 95
  {
    id: "tdz-with-default-params",
    title: "TDZ with Default Parameters",
    description:
      "Show how a default function parameter can be in the TDZ for another parameter in the same function signature.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Default Param TDZ",
  },
  // problem--> 96
  {
    id: "garbage-collection-conceptual",
    title: "Garbage Collection (Conceptual)",
    description:
      "Explain the basic concept of garbage collection in JavaScript, focusing on how unreferenced variables and objects are cleaned up.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain GC",
  },
  // problem--> 97
  {
    id: "memory-leak-with-closures",
    title: "Memory Leaks with Closures (Conceptual)",
    description:
      "Explain how a long-lived closure can unintentionally keep variables in memory, leading to a memory leak.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Leak",
  },
  // problem--> 98
  {
    id: "let-in-switch-case",
    title: "`let` and `const` in `switch` cases",
    description:
      "Show that the entire `switch` statement is a single block, and declaring a `let` variable in one `case` makes it unavailable in others without its own block.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `switch` Scope",
  },
  // problem--> 99
  {
    id: "tdz-and-function-parameters",
    title: "TDZ in Function Parameters",
    description:
      "Show how the Temporal Dead Zone applies to function parameters when one parameter references another that has not yet been initialized.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Parameter TDZ",
  },
  // problem--> 100
  {
    id: "deep-freeze-utility-conceptual",
    title: "Deep Freeze Utility (Conceptual)",
    description:
      'Conceptually outline a recursive function that can "deep freeze" an object, applying `Object.freeze()` to all nested objects.',
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Deep Freeze",
  },
  // problem--> 101
  {
    id: "hoisting-across-scripts-conceptual",
    title: "Hoisting Across Scripts (Conceptual)",
    description:
      "Explain that hoisting is a file-scoped (or module-scoped) mechanism and does not apply between different `<script>` tags or modules.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Hoisting Boundary",
  },
  // problem--> 102
  {
    id: "memory-lifecycle-conceptual",
    title: "Memory Lifecycle (Conceptual)",
    description:
      "Explain the three steps of the memory lifecycle in JavaScript: Allocation, Use, and Release (Garbage Collection).",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Lifecycle",
  },
  // problem--> 103
  {
    id: "destructure-from-map",
    title: "Destructuring from `Map`",
    description:
      "Use destructuring in a `for...of` loop to iterate over the key-value pairs of an ES6 `Map`.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Destructure Map",
  },
  // problem--> 104
  {
    id: "immutable-update-const",
    title: "Immutable Update Pattern",
    description:
      'Demonstrate the pattern of "updating" a `const` object by creating a new object with the old properties spread in, plus the new changes.',
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Show Immutable Update",
  },
  // problem--> 105
  {
    id: "for-in-vs-for-of",
    title: "`for...in` vs. `for...of`",
    description:
      "Declare an array and show how `for...in` iterates over its keys (indices) while `for...of` iterates over its values.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Compare Loops",
  },
  // problem--> 106
  {
    id: "var-hoisting-pitfall-2",
    title: "Conditional `var` Hoisting",
    description:
      "Show that a `var` inside an `if (false)` block is still hoisted, which can be unintuitive.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Conditional Hoisting",
  },
  // problem--> 107
  {
    id: "destructure-regex-groups",
    title: "Destructuring RegExp Groups",
    description:
      "Use array destructuring on the result of `string.match()` to capture groups from a regular expression.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Destructure RegExp",
  },
  // problem--> 108
  {
    id: "uninitialized-const-in-loop",
    title: "Uninitialized `const` in a Loop",
    description:
      "Conceptually explain why `for (const x of []) {}` is valid (x is never created) but `for (const x; ; ) {}` is a syntax error.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Loop Declarations",
  },
  // problem--> 109
  {
    id: "function-param-scope",
    title: "Function Parameter Scope",
    description:
      "Show that function parameters have their own scope, separate from the function body's scope.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Parameter Scope",
  },
  // problem--> 110
  {
    id: "destructure-sparse-array",
    title: "Destructuring a Sparse Array",
    description:
      "Demonstrate what happens when you destructure a sparse array (an array with empty slots).",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Sparse Array",
  },
  // problem--> 111
  {
    id: "block-scope-for-let-in-loop",
    title: "`let` Re-binding in Loops",
    description:
      "Conceptually explain that in a `for` loop, `let` is not just scoped to the block, but is re-bound for each iteration.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Re-binding",
  },
  // problem--> 112
  {
    id: "implicit-global-in-function-call",
    title: "Implicit Global from Function Call",
    description:
      "Show how calling a method detached from its object in non-strict mode can lead to `this` being the global object, potentially modifying global variables.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Implicit Global",
  },
  // problem--> 113
  {
    id: "practical-let-event-listener",
    title: "Practical `let`: Event Listener State",
    description:
      "Use `let` to manage a state variable (like a toggle) inside an event listener callback.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Show Toggle State",
  },
  // problem--> 114
  {
    id: "practical-const-function-expression",
    title: "Practical `const`: Function Expressions",
    description:
      "Show the common practice of assigning function expressions and arrow functions to a `const` to prevent them from being accidentally overwritten.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Show `const` Function",
  },
  // problem--> 115
  {
    id: "practical-destructuring-api-response",
    title: "Practical Destructuring: API Response",
    description:
      "Show how to destructure a complex JSON object from a mock API response to extract only the needed data.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Destructure API Data",
  },
  // problem--> 116
  {
    id: "object-is-for-nan",
    title: "`Object.is` for `NaN` comparison",
    description:
      "Demonstrate that `Object.is(NaN, NaN)` is `true`, making it a reliable way to check for `NaN` values.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test `Object.is`",
  },
  // problem--> 117
  {
    id: "primitive-vs-reference-assignment",
    title: "Primitive vs. Reference Assignment",
    description:
      "Assign a primitive to a new variable and modify it. Then do the same with an object to show the difference between copy-by-value and copy-by-reference.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Compare Assignment",
  },
  // problem--> 118
  {
    id: "hoisting-pitfall-with-blocks",
    title: "Function Hoisting within Blocks",
    description:
      "Explain the strange, inconsistent behavior of hoisting function declarations out of blocks in non-strict mode.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Block Hoisting",
  },
  // problem--> 119
  {
    id: "destructuring-iterable",
    title: "Destructuring any Iterable",
    description:
      "Show that any object that implements the iterable protocol (like a `Set`) can be used in an array destructuring assignment.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Destructure a Set",
  },
  // problem--> 120
  {
    id: "const-and-garbage-collection",
    title: "`const` and Garbage Collection",
    description:
      "Explain that using `const` does not affect when a variable is garbage collected; reachability is the only factor.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain GC and `const`",
  },
  // problem--> 121
  {
    id: "var-in-eval-scope",
    title: "`var` and `eval` Scope",
    description:
      'Demonstrate how `var` declared inside an `eval()` call can "leak" into the surrounding function scope.',
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `eval` Scope",
  },
  // problem--> 122
  {
    id: "let-in-eval-scope",
    title: "`let` and `eval` Scope",
    description:
      "Show that `let` declared inside an `eval()` call respects the scope of the `eval` and does not leak out.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `let` in `eval`",
  },
  // problem--> 123
  {
    id: "var-without-window",
    title: "Global `var` outside Browsers",
    description:
      "Explain that in environments like Node.js, a global `var` does not attach to a `window` object but to a `global` object.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain Node Global",
  },
  // problem--> 124
  {
    id: "destructuring-and-prototypes",
    title: "Destructuring and Prototypes",
    description:
      "Show that object destructuring will access properties from the object's prototype chain if they are not on the object itself.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Prototype Destructuring",
  },
  // problem--> 125
  {
    id: "variable-lifecycle-in-closure",
    title: "Variable Lifecycle in Closures",
    description:
      'Explain how a variable from an outer function "survives" after the outer function returns because it is kept alive by a closure.',
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Show Closure Lifecycle",
  },
  // problem--> 126
  {
    id: "using-symbols-for-metadata",
    title: "Real-World Symbol: Metadata",
    description:
      'Attach "hidden" metadata to an object using a `Symbol` as a key, which won\'t be picked up by `JSON.stringify` or `for...in` loops.',
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Attach Metadata",
  },
  // problem--> 127
  {
    id: "const-for-math-constants",
    title: "Real-World `const`: Math Constants",
    description:
      "Declare a mathematical constant like PI or GRAVITY and use it in a calculation.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Calculate with Constant",
  },
  // problem--> 128
  {
    id: "destructure-react-props",
    title: "Real-World Destructuring: React Props",
    description:
      "Show the common pattern of destructuring a `props` object in a React component's function signature.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Show React Props Pattern",
  },
  // problem--> 129
  {
    id: "let-for-cached-value",
    title: "Real-World `let`: Caching a Value",
    description:
      "Use `let` to implement a simple cache where a value is calculated and stored on first access, then retrieved from the variable on subsequent accesses.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Cache",
  },
  // problem--> 130
  {
    id: "temporal-dead-zone-in-classes",
    title: "TDZ in Class Bodies",
    description:
      "Demonstrate that the TDZ applies within a class body, for example when initializing a property with a value from another property declared later.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Class TDZ",
  },
  // problem--> 131
  {
    id: "shadowing-with-function-params",
    title: "Shadowing with Function Parameters",
    description:
      "Show how a function parameter can shadow a variable from an outer scope.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Parameter Shadowing",
  },
  // problem--> 132
  {
    id: "is-frozen-check",
    title: "Checking if an Object is Frozen",
    description:
      "Use `Object.isFrozen()` to check if an object has been frozen.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Check Frozen Status",
  },
  // problem--> 133
  {
    id: "is-sealed-check",
    title: "Checking if an Object is Sealed",
    description:
      "Use `Object.isSealed()` to check if an object has been sealed.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Check Sealed Status",
  },
  // problem--> 134
  {
    id: "is-extensible-check",
    title: "Checking if an Object is Extensible",
    description:
      "Use `Object.isExtensible()` to check if new properties can be added to an object.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Check Extensible Status",
  },
  // problem--> 135
  {
    id: "destructuring-and-type-coercion",
    title: "Destructuring and Type Coercion",
    description:
      "Demonstrate that destructuring assigns the exact value without type coercion, unlike some other language constructs.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Coercion",
  },
  // problem--> 136
  {
    id: "global-scope-pollution",
    title: "Global Scope Pollution (Conceptual)",
    description:
      'Explain why creating many global variables is bad practice ("polluting the global scope") and can lead to naming conflicts with third-party libraries.',
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain Pollution",
  },
  // problem--> 137
  {
    id: "using-block-scope-for-privacy",
    title: "Using Block Scope for Privacy",
    description:
      "Use a standalone block `{}` to create temporary helper variables that don't leak into the surrounding scope.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Demonstrate Privacy",
  },
  // problem--> 138
  {
    id: "hoisting-let-and-const-conceptual",
    title: "Hoisting of `let` and `const` (Conceptual)",
    description:
      "Clarify the common misconception: `let` and `const` *are* hoisted (their memory is allocated), but they are not initialized, which is why the TDZ exists.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain `let` Hoisting",
  },
  // problem--> 139
  {
    id: "destructuring-computed-property",
    title: "Destructuring with Computed Property Alias",
    description:
      "Show an advanced pattern where you use computed property names to extract a property and give it a static alias.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Computed Alias",
  },
  // problem--> 140
  {
    id: "reserved-words-as-variables",
    title: "Reserved Words as Variables",
    description:
      "Demonstrate that you cannot use reserved keywords like `if`, `for`, or `class` as variable names.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Reserved Words",
  },
  // problem--> 141
  {
    id: "infinity-and-negative-infinity",
    title: "`Infinity` and `-Infinity`",
    description:
      "Show the global `Infinity` and `-Infinity` variables, which represent the mathematical concepts.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Show Infinity",
  },
  // problem--> 142
  {
    id: "passing-primitives-to-functions",
    title: "Pass-by-Value (Primitives)",
    description:
      "Demonstrate that when a primitive is passed to a function, it is passed by value (a copy is made). Modifying it inside the function does not affect the original.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Pass-by-Value",
  },
  // problem--> 143
  {
    id: "passing-objects-to-functions",
    title: "Pass-by-Reference (Objects)",
    description:
      'Demonstrate that when an object is passed to a function, it is passed by "sharing" the reference. Modifying a property of the object inside the function affects the original object.',
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Pass-by-Reference",
  },
  // problem--> 144
  {
    id: "reassigning-object-param",
    title: "Reassigning an Object Parameter",
    description:
      "Show that while you can mutate an object passed to a function, reassigning the parameter to a new object does not affect the original variable outside.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Parameter Reassignment",
  },
  // problem--> 145
  {
    id: "hoisting-in-eval",
    title: "Hoisting Inside `eval`",
    description:
      "Demonstrate the complex and often unpredictable hoisting behavior of `var` within a string executed by `eval`.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Hoisting in `eval`",
  },
  // problem--> 146
  {
    id: "const-enum-pattern",
    title: "Real-World `const`: Enum Pattern",
    description:
      "Use a frozen object declared with `const` to create a simple, safe enumeration (enum) for representing a set of named constants.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Show Enum Pattern",
  },
  // problem--> 147
  {
    id: "destructure-and-rename-rest",
    title: "Destructuring and Renaming with Rest",
    description:
      "Show how to combine renaming a property with collecting the rest of the properties into a new object.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Rename with Rest",
  },
  // problem--> 148
  {
    id: "global-scope-without-window",
    title: "Global Scope in Web Workers",
    description:
      "Explain that Web Workers have their own global scope, separate from the main window, which can be referenced by `self`.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Worker Scope",
  },
  // problem--> 149
  {
    id: "scope-of-default-parameters",
    title: "Scope of Default Parameters",
    description:
      "Demonstrate that default parameters exist in an intermediate scope between the outer scope and the function body's scope.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Default Param Scope",
  },
  // problem--> 150
  {
    id: "automatic-semicolon-insertion",
    title: "Automatic Semicolon Insertion (ASI)",
    description:
      "Explain how ASI can affect variable declarations, especially with `let` or `const` on a new line after a `return` statement.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain ASI",
  },
  // problem--> 151
  {
    id: "object-is-vs-triple-equals",
    title: "`Object.is` vs. `===`",
    description:
      "Compare the behavior of `Object.is()` with the strict equality operator `===`, highlighting the differences with `NaN` and `-0`.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Compare `Object.is` and `===`",
  },
  // problem--> 152
  {
    id: "global-let-in-modules",
    title: "Global `let` in ES Modules",
    description:
      "Explain that a top-level `let`, `const`, or `class` in an ES module is scoped to that module and does not create a global variable.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain Module Scope",
  },
  // problem--> 153
  {
    id: "destructure-from-generator",
    title: "Destructuring from a Generator",
    description:
      "Use array destructuring to pull values yielded from a generator function.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Destructure Generator",
  },
  // problem--> 154
  {
    id: "immutable-array-push",
    title: 'Immutable Array "Push"',
    description:
      "Demonstrate how to create a new array with an added element at the end without mutating the original, using spread syntax.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Show Immutable Push",
  },
  // problem--> 155
  {
    id: "immutable-array-pop",
    title: 'Immutable Array "Pop"',
    description:
      "Demonstrate how to create a new array with the last element removed without mutating the original, using `.slice()`.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Show Immutable Pop",
  },
  // problem--> 156
  {
    id: "immutable-object-delete",
    title: "Immutable Object Property Delete",
    description:
      "Show a common pattern for creating a new object with a property removed, using destructuring and the rest syntax.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Show Immutable Delete",
  },
  // problem--> 157
  {
    id: "with-statement-conceptual",
    title: "The `with` statement (Conceptual)",
    description:
      "Explain the deprecated `with` statement, why it is forbidden in strict mode, and how it can create ambiguous variable scopes.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain `with`",
  },
  // problem--> 158
  {
    id: "let-in-switch-fallthrough",
    title: "`let` in `switch` with Fallthrough",
    description:
      "Show how a `let` declared in a `case` can cause a `ReferenceError` in a subsequent `case` due to fallthrough and the TDZ.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Fallthrough Error",
  },
  // problem--> 159
  {
    id: "destructuring-and-getters",
    title: "Destructuring Triggers Getters",
    description:
      "Demonstrate that destructuring a property from an object will execute that property's getter method.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Getter",
  },
  // problem--> 160
  {
    id: "destructuring-and-setters",
    title: "Destructuring Assignment Triggers Setters",
    description:
      "Demonstrate that using destructuring for assignment on an object with a setter will execute the setter method.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Setter",
  },
  // problem--> 161
  {
    id: "scope-of-class-static-blocks",
    title: "Scope of `static` Blocks",
    description:
      "Explain the scope within a `static {}` initialization block in a class, showing it has access to private static fields.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain `static` Block",
  },
  // problem--> 162
  {
    id: "block-scope-functions-strict",
    title: "Block-Scoped Functions in Strict Mode",
    description:
      "Show that in strict mode, function declarations are block-scoped, unlike their inconsistent hoisting behavior in non-strict mode.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Strict Function Scope",
  },
  // problem--> 163
  {
    id: "const-with-object-defineproperty",
    title: "`const` vs. `Object.defineProperty`",
    description:
      "Show that `const` does not prevent a property from being modified using `Object.defineProperty`.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `defineProperty`",
  },
  // problem--> 164
  {
    id: "destructuring-proxy",
    title: "Destructuring a `Proxy` Object",
    description:
      "Demonstrate that destructuring a `Proxy` object triggers the `get` handler for each property being destructured.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Proxy Destructuring",
  },
  // problem--> 165
  {
    id: "freezing-const-array-of-objects",
    title: "Freezing an Array of Objects",
    description:
      "Demonstrate that freezing an array does not freeze the objects contained within it.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Frozen Array",
  },
  // problem--> 166
  {
    id: "let-vs-var-deep-dive",
    title: "`let` vs. `var` Scope Deep Dive",
    description:
      "Provide a clear example showing `var` leaking from a loop block while `let` remains contained.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Compare Scopes",
  },
  // problem--> 167
  {
    id: "tdz-circular-reference-params",
    title: "TDZ with Circular Default Parameters",
    description:
      "Show a `ReferenceError` caused by two default parameters referencing each other in a circular way.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Circular Reference",
  },
  // problem--> 168
  {
    id: "const-object-as-namespace",
    title: "Real-World `const`: Namespace",
    description:
      "Use a `const` object as a simple namespace to group related utility functions.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Show Namespace Pattern",
  },
  // problem--> 169
  {
    id: "destructuring-null-default",
    title: "Destructuring Default for `null`",
    description:
      "Show that the destructuring default assignment (`=`) only triggers for `undefined`, not `null`, and how to handle `null` with the OR operator.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Handle `null` Default",
  },
  // problem--> 170
  {
    id: "tdz-and-eval",
    title: "`eval` and the TDZ",
    description:
      "Demonstrate that code executed by `eval()` respects the Temporal Dead Zone of its surrounding scope.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `eval` TDZ",
  },
  // problem--> 171
  {
    id: "shadowing-across-modules-conceptual",
    title: "Shadowing Across Modules (Conceptual)",
    description:
      "Explain that because ES modules have their own scope, it is impossible for a variable in one module to shadow a variable in another.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Module Shadowing",
  },
  // problem--> 172
  {
    id: "immutable-nested-update",
    title: "Immutable Nested Update Pattern",
    description:
      "Show the pattern for immutably updating a property deep inside a nested object using multiple levels of spread syntax.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Show Nested Update",
  },
  // problem--> 173
  {
    id: "destructuring-arguments-object",
    title: "Destructuring the `arguments` Object",
    description:
      "Show how to convert the array-like `arguments` object into an array to use destructuring on it.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Destructure `arguments`",
  },
  // problem--> 174
  {
    id: "var-hoisting-and-try-catch",
    title: "`var` Hoisting and `try...catch`",
    description:
      "Demonstrate that a `var` declared inside a `try` block is hoisted to the top of the function, not just the `try` block.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test `try` Scope",
  },
  // problem--> 175
  {
    id: "const-and-proxy",
    title: "`const` and `Proxy` Objects",
    description:
      "Show that a `const` reference to a `Proxy` does not prevent the proxy's target object from being mutated via traps.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `const` Proxy",
  },
  // problem--> 176
  {
    id: "using-well-known-symbols",
    title: "Well-Known Symbol: `Symbol.iterator`",
    description:
      "Use the well-known symbol `Symbol.iterator` to make a custom object iterable so it can be used in a `for...of` loop and with destructuring.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Make Object Iterable",
  },
  // problem--> 177
  {
    id: "hoisting-and-new-function",
    title: "`new Function()` and Hoisting",
    description:
      "Show that functions created with `new Function()` are not subject to standard hoisting rules and do not form closures over their creation scope.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `new Function`",
  },
  // problem--> 178
  {
    id: "destructuring-rename-and-rest",
    title: "Destructuring: Rename and Rest",
    description:
      "Combine renaming a property with collecting the rest of the properties into a new object in a single destructuring statement.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Rename with Rest",
  },
  // problem--> 179
  {
    id: "arrow-function-param-scope",
    title: "Arrow Function Parameter Scope",
    description:
      "Explain that arrow function parameters share the same scoping rules as regular function parameters, including the intermediate scope for defaults.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Arrow Param Scope",
  },
  // problem--> 180
  {
    id: "var-leakage-named-function-expression",
    title: "`var` and Named Function Expressions",
    description:
      "Show an edge case where in non-strict mode, some engines would create a variable for the name of a named function expression in the outer scope.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test NFE Leakage",
  },
  // problem--> 181
  {
    id: "global-scope-modules-vs-scripts",
    title: "Global Scope: Modules vs. Scripts",
    description:
      "Summarize the key difference: top-level `var` in a classic `<script>` becomes a `window` property, while top-level `var`/`let`/`const` in a module are scoped to the module.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Compare Scopes",
  },
  // problem--> 182
  {
    id: "destructuring-primitive-wrappers",
    title: "Destructuring Primitives",
    description:
      "Show what happens when you attempt to destructure a primitive like a number or boolean, and how it accesses properties on the temporary wrapper object.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Primitive Destructuring",
  },
  // problem--> 183
  {
    id: "shadowing-built-in-globals",
    title: "Shadowing Built-in Globals",
    description:
      "Demonstrate how a local variable (e.g., `let Array = ...`) can shadow a built-in global constructor, which can lead to bugs.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Shadowing `Array`",
  },
  // problem--> 184
  {
    id: "const-with-weakmap-keys",
    title: "`const` Objects and `WeakMap`",
    description:
      "Explain that using a `const` object as a key in a `WeakMap` allows the entry to be garbage collected if the `const` variable goes out of scope and there are no other references to the object.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain `WeakMap` GC",
  },
  // problem--> 185
  {
    id: "variable-declarations-and-performance",
    title: "Variable Declarations and Performance (Conceptual)",
    description:
      "Briefly discuss how modern JavaScript engines (JIT compilers) can better optimize code when `const` is used, as it provides a guarantee that the variable's reference will not change.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Performance",
  },
  // problem--> 186
  {
    id: "destructuring-property-access-order",
    title: "Destructuring Property Access Order",
    description:
      "Demonstrate that property access during destructuring happens in the order they appear on the right-hand side, not the order in the destructuring pattern.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Access Order",
  },
  // problem--> 187
  {
    id: "global-var-and-delete",
    title: "Deleting Global `var`",
    description:
      "Show that properties created on the global object via `var` are non-configurable and cannot be removed with the `delete` operator.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test `delete`",
  },
  // problem--> 188
  {
    id: "tdz-and-recursion",
    title: "TDZ and Recursion",
    description:
      "Create a recursive function with a default parameter that causes a `ReferenceError` by calling itself before the parameter's `let` is initialized.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Recursive TDZ",
  },
  // problem--> 189
  {
    id: "const-assertions-typescript",
    title: "`const` Assertions in TypeScript (Conceptual)",
    description:
      "Explain how TypeScript's `as const` assertion creates the most specific, deep `readonly` type possible, which is a powerful tool for immutability at the type level.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain `as const`",
  },
  // problem--> 190
  {
    id: "scope-in-generator-functions",
    title: "Scope in Generator Functions",
    description:
      "Show that variables declared with `let` and `const` inside a generator function are scoped to the entire generator and persist across `yield` statements.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Generator Scope",
  },
  // problem--> 191
  {
    id: "destructuring-invalid-identifiers",
    title: "Destructuring Invalid Identifiers",
    description:
      'Show how to destructure a property whose name is not a valid identifier (e.g., "foo-bar") by using quotes and aliasing.',
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test Invalid Identifier",
  },
  // problem--> 192
  {
    id: "var-hoisting-conditional-function",
    title: "Conditional Function Declaration Hoisting",
    description:
      "Explain the inconsistent, browser-dependent hoisting behavior of function declarations inside `if` blocks in non-strict mode.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain Conditional Hoisting",
  },
  // problem--> 193
  {
    id: "let-and-const-with-proxy-traps",
    title: "TDZ and `Proxy` Traps",
    description:
      "Demonstrate how a `Proxy`'s `has` or `get` trap can be triggered for a variable that is in its TDZ, causing a `ReferenceError`.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Test Proxy and TDZ",
  },
  // problem--> 194
  {
    id: "immutable-update-structuredclone",
    title: "Immutable Update with `structuredClone`",
    description:
      "Use the modern `structuredClone()` API to create a deep copy of an object for a truly immutable update.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Use `structuredClone`",
  },
  // problem--> 195
  {
    id: "shadowing-with-with-statement",
    title: "Shadowing with `with` (Conceptual)",
    description:
      "Explain how the deprecated `with` statement can make variable shadowing unpredictable by dynamically adding an object's properties to the scope chain.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Explain `with` Shadowing",
  },
  // problem--> 196
  {
    id: "destructuring-empty-source",
    title: "Destructuring from Empty Sources",
    description:
      "Show what happens when you destructure from an empty array or object, both with and without default values.",
    difficulty: "Beginner",
    inputs: [],
    buttonText: "Test Empty Source",
  },
  // problem--> 197
  {
    id: "scope-of-class-fields",
    title: "Scope of Class Fields",
    description:
      "Explain that public and private class fields are scoped to the class instance and are set after `super()` is called in a constructor.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Explain Class Field Scope",
  },
  // problem--> 198
  {
    id: "var-in-nodejs-repl",
    title: "`var` in the Node.js REPL",
    description:
      "Demonstrate that in the Node.js REPL (interactive console), top-level `var` behaves like it does in the browser, attaching to the `global` object.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Test REPL Scope",
  },
  // problem--> 199
  {
    id: "destructuring-and-symbols",
    title: "Destructuring Symbol Properties",
    description:
      "Show the syntax for destructuring properties from an object that are keyed by `Symbol`s.",
    difficulty: "Advanced",
    inputs: [],
    buttonText: "Destructure Symbol Key",
  },
  // problem--> 200
  {
    id: "var-vs-let-vs-const-summary",
    title: "Summary: `var` vs. `let` vs. `const`",
    description:
      "Provide a final conceptual summary of the key differences in scope, hoisting, reassignment, and global object attachment.",
    difficulty: "Intermediate",
    inputs: [],
    buttonText: "Summarize Differences",
  },
];
