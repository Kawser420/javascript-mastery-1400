import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "es6-declare-with-let",
    title: "Block Scope with `let`",
    description:
      "Declare a variable with `let` inside an `if` block and show that it's not accessible outside, demonstrating block scope.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Block Scope",
    difficulty: "Beginner",
  },
  // problem--> 02
  {
    id: "es6-declare-with-const",
    title: "Declaring Constants with `const`",
    description:
      "Declare a constant with `const` and attempt to reassign it to demonstrate that it throws a `TypeError`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Reassignment",
    difficulty: "Beginner",
  },
  // problem--> 03
  {
    id: "es6-const-object-mutation",
    title: "Mutating `const` Objects",
    description:
      "Show that while a `const` variable cannot be reassigned, the properties of the object it refers to can be mutated.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Mutate Object",
    difficulty: "Beginner",
  },
  // problem--> 04
  {
    id: "es6-arrow-function-basic",
    title: "Basic Arrow Function",
    description:
      "Rewrite a simple function that doubles a number using the more concise arrow function syntax.",
    category: "ES6+ Features",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 9 }],
    buttonText: "Double with Arrow",
    difficulty: "Beginner",
  },
  // problem--> 05
  {
    id: "es6-arrow-function-implicit-return",
    title: "Arrow Function with Implicit Return",
    description:
      "Write a single-expression arrow function that calculates the square of a number without using the `return` keyword.",
    category: "ES6+ Features",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 8 }],
    buttonText: "Square",
    difficulty: "Beginner",
  },
  // problem--> 06
  {
    id: "es6-template-literals-basic",
    title: "Template Literals",
    description:
      "Use a template literal (backticks ``) with an embedded variable (`${...}`) to create a dynamic greeting string.",
    category: "ES6+ Features",
    inputs: [
      { id: "name", label: "Name", type: "text", defaultValue: "Alice" },
    ],
    buttonText: "Create Greeting",
    difficulty: "Beginner",
  },
  // problem--> 07
  {
    id: "es6-template-literals-multiline",
    title: "Multiline Strings with Template Literals",
    description:
      "Create a multiline string using template literals without needing to use `\\n`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create Multiline String",
    difficulty: "Beginner",
  },
  // problem--> 08
  {
    id: "es6-default-parameters",
    title: "Default Parameters",
    description:
      "Write a function that greets a user, but defaults to 'Guest' if no name is provided.",
    category: "ES6+ Features",
    inputs: [
      { id: "name", label: "Name (optional)", type: "text", defaultValue: "" },
    ],
    buttonText: "Greet User",
    difficulty: "Beginner",
  },
  // problem--> 09
  {
    id: "es6-spread-operator-arrays-concat",
    title: "Spread Syntax to Concatenate Arrays",
    description:
      "Use the spread syntax (`...`) to create a new array by combining two existing arrays.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Combine Arrays",
    difficulty: "Beginner",
  },
  // problem--> 10
  {
    id: "es6-spread-operator-objects-merge",
    title: "Spread Syntax to Merge Objects",
    description:
      "Use the spread syntax (`...`) to create a new object by merging properties from two existing objects.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Merge Objects",
    difficulty: "Beginner",
  },
  // problem--> 11
  {
    id: "es6-rest-parameters-sum",
    title: "Rest Parameters for Summation",
    description:
      "Write a function that uses rest parameters (`...`) to accept any number of arguments and return their sum.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "numbers",
        label: "Numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Sum All",
    difficulty: "Beginner",
  },
  // problem--> 12
  {
    id: "es6-destructuring-arrays-basic",
    title: "Basic Array Destructuring",
    description:
      "Use array destructuring to unpack values from an array into distinct variables.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Destructure Array",
    difficulty: "Beginner",
  },
  // problem--> 13
  {
    id: "es6-destructuring-objects-basic",
    title: "Basic Object Destructuring",
    description:
      "Use object destructuring to unpack properties from an object into variables.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Destructure Object",
    difficulty: "Beginner",
  },
  // problem--> 14
  {
    id: "es6-destructuring-swap-variables",
    title: "Swap Variables with Destructuring",
    description:
      "Show the elegant ES6 syntax for swapping two variables in a single line using array destructuring.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Swap Variables",
    difficulty: "Beginner",
  },
  // problem--> 15
  {
    id: "es6-destructuring-object-alias",
    title: "Object Destructuring with Aliases",
    description:
      "Use object destructuring to extract a property and assign it to a variable with a different name.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Destructure with Alias",
    difficulty: "Beginner",
  },
  // problem--> 16
  {
    id: "es6-destructuring-object-defaults",
    title: "Object Destructuring with Defaults",
    description:
      "Use object destructuring to provide a default value for a property that may not exist.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Destructure with Default",
    difficulty: "Beginner",
  },
  // problem--> 17
  {
    id: "es6-for-of-loop-array",
    title: "`for...of` Loop on an Array",
    description:
      "Use a `for...of` loop to iterate directly over the values of an array, which is simpler than a traditional `for` loop.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "items",
        label: "Items (comma-separated)",
        type: "text",
        defaultValue: "apple,banana,cherry",
      },
    ],
    buttonText: "Iterate with for...of",
    difficulty: "Beginner",
  },
  // problem--> 18
  {
    id: "es6-for-of-string",
    title: "`for...of` on a String",
    description:
      "Use a `for...of` loop to iterate over the characters of a string.",
    category: "ES6+ Features",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Iterate String",
    difficulty: "Beginner",
  },
  // problem--> 19
  {
    id: "es6-shorthand-properties",
    title: "Shorthand Properties",
    description:
      "Create an object from variables that have the same name as the desired property keys using ES6 shorthand.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create with Shorthand",
    difficulty: "Beginner",
  },
  // problem--> 20
  {
    id: "es6-computed-property-names",
    title: "Computed Property Names",
    description:
      "Create an object with a property key that is determined by a variable's value at runtime.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create with Computed Key",
    difficulty: "Intermediate",
  },
  // problem--> 21
  {
    id: "es6-lexical-this-arrow-function",
    title: "Lexical `this` in Arrow Functions",
    description:
      "Demonstrate how an arrow function lexically captures the `this` value from its surrounding context, solving a common callback problem.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Lexical `this`",
    difficulty: "Intermediate",
  },
  // problem--> 22
  {
    id: "es6-class-declaration",
    title: "Basic Class Declaration",
    description:
      "Define a simple `Person` class with a constructor that initializes a `name` property.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Define and Instantiate",
    difficulty: "Beginner",
  },
  // problem--> 23
  {
    id: "es6-class-method",
    title: "Class Instance Method",
    description:
      "Add a `greet` method to the `Person` class that returns a greeting string using the person's name.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Call Method",
    difficulty: "Beginner",
  },
  // problem--> 24
  {
    id: "es6-class-inheritance",
    title: "Class Inheritance with `extends`",
    description:
      "Create an `Employee` class that inherits from a `Person` class using the `extends` keyword.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Inheritance",
    difficulty: "Intermediate",
  },
  // problem--> 25
  {
    id: "es6-class-super",
    title: "`super()` in Constructor",
    description:
      "Use `super()` in the `Employee` constructor to call the parent `Person` constructor.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use `super()`",
    difficulty: "Intermediate",
  },
  // problem--> 26
  {
    id: "es6-promise-creation",
    title: "Creating a Simple Promise",
    description:
      "Create a new Promise that resolves with a success message after a short delay.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create and Resolve",
    difficulty: "Intermediate",
  },
  // problem--> 27
  {
    id: "es6-promise-rejection",
    title: "Handling a Promise Rejection",
    description:
      "Create a new Promise that rejects with an error message and handle it with `.catch()`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create and Reject",
    difficulty: "Intermediate",
  },
  // problem--> 28
  {
    id: "es6-promise-chaining",
    title: "Promise Chaining with `.then()`",
    description:
      "Chain multiple `.then()` calls to perform a sequence of asynchronous operations.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Run Promise Chain",
    difficulty: "Intermediate",
  },
  // problem--> 29
  {
    id: "es6-promise-all",
    title: "`Promise.all()`",
    description:
      "Use `Promise.all()` to wait for multiple promises to resolve concurrently.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Run Promise.all",
    difficulty: "Intermediate",
  },
  // problem--> 30
  {
    id: "es6-map-data-structure",
    title: "`Map` Data Structure",
    description:
      "Use the `Map` object to store key-value pairs. Show how to `set`, `get`, and check for a key with `has`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Map",
    difficulty: "Intermediate",
  },
  // problem--> 31
  {
    id: "es6-set-data-structure",
    title: "`Set` Data Structure",
    description:
      "Use the `Set` object to store a collection of unique values. Show how to `add`, `delete`, and check for a value with `has`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Set",
    difficulty: "Intermediate",
  },
  // problem--> 32
  {
    id: "es6-set-remove-duplicates",
    title: "Remove Duplicates with `Set`",
    description:
      "Show the common idiom of using `new Set(array)` and the spread syntax to easily remove duplicate values from an array.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "arr",
        label: "Array with duplicates",
        type: "text",
        defaultValue: "1,2,2,3,4,3",
      },
    ],
    buttonText: "Remove Duplicates",
    difficulty: "Beginner",
  },
  // problem--> 33
  {
    id: "es6-modules-conceptual",
    title: "ES6 Modules (Conceptual)",
    description:
      "Explain the syntax for `export` and `import` and their role in creating modular, reusable, and encapsulated code.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain Modules",
    difficulty: "Intermediate",
  },
  // problem--> 34
  {
    id: "es6-symbol-primitive-type",
    title: "`Symbol` Primitive Type",
    description:
      "Create a `Symbol` and show that it is a unique, immutable primitive value, often used for unique object property keys.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create a Symbol",
    difficulty: "Intermediate",
  },
  // problem--> 35
  {
    id: "es6-iterator-protocol-conceptual",
    title: "Iterator Protocol (Conceptual)",
    description:
      "Explain what an iterator is (an object with a `.next()` method) and how it enables iteration over data structures.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain Iterator",
    difficulty: "Advanced",
  },
  // problem--> 36
  {
    id: "es6-generator-function",
    title: "Generator Function",
    description:
      "Create a simple generator function (`function*`) that uses the `yield` keyword to produce a sequence of values.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Generate Numbers",
    difficulty: "Advanced",
  },
  // problem--> 37
  {
    id: "es6-array-from",
    title: "`Array.from()`",
    description:
      "Use `Array.from()` to create a new array from an array-like or iterable object, such as a string or a `NodeList`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create Array from String",
    difficulty: "Intermediate",
  },
  // problem--> 38
  {
    id: "es6-array-find",
    title: "`Array.prototype.find()`",
    description:
      "Use the `.find()` method to get the first element in an array that satisfies a testing function.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "5, 12, 8, 130, 44",
      },
    ],
    buttonText: "Find first number > 10",
    difficulty: "Beginner",
  },
  // problem--> 39
  {
    id: "es6-array-findIndex",
    title: "`Array.prototype.findIndex()`",
    description:
      "Use the `.findIndex()` method to get the index of the first element in an array that satisfies a testing function.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "5, 8, 12, 130, 44",
      },
    ],
    buttonText: "Find index of first number > 10",
    difficulty: "Beginner",
  },
  // problem--> 40
  {
    id: "es6-string-includes",
    title: "`String.prototype.includes()`",
    description:
      "Use the `.includes()` method to check if a string contains a specific substring.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "mainStr",
        label: "Main String",
        type: "text",
        defaultValue: "The quick brown fox",
      },
      {
        id: "subStr",
        label: "Substring to find",
        type: "text",
        defaultValue: "quick",
      },
    ],
    buttonText: "Check Inclusion",
    difficulty: "Beginner",
  },
  // problem--> 41
  {
    id: "es6-string-startsWith",
    title: "`String.prototype.startsWith()`",
    description:
      "Use the `.startsWith()` method to check if a string begins with a specific substring.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "str",
        label: "Main String",
        type: "text",
        defaultValue: "Hello world",
      },
      {
        id: "subStr",
        label: "Substring to check",
        type: "text",
        defaultValue: "Hello",
      },
    ],
    buttonText: "Check Start",
    difficulty: "Beginner",
  },
  // problem--> 42
  {
    id: "es6-string-endsWith",
    title: "`String.prototype.endsWith()`",
    description:
      "Use the `.endsWith()` method to check if a string ends with a specific substring.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "str",
        label: "Main String",
        type: "text",
        defaultValue: "Hello world",
      },
      {
        id: "subStr",
        label: "Substring to check",
        type: "text",
        defaultValue: "world",
      },
    ],
    buttonText: "Check End",
    difficulty: "Beginner",
  },
  // problem--> 43
  {
    id: "es6-string-repeat",
    title: "`String.prototype.repeat()`",
    description:
      "Use the `.repeat()` method to create a new string by repeating an existing one a certain number of times.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "str",
        label: "String to repeat",
        type: "text",
        defaultValue: "abc",
      },
      { id: "count", label: "Repeat count", type: "number", defaultValue: 3 },
    ],
    buttonText: "Repeat",
    difficulty: "Beginner",
  },
  // problem--> 44
  {
    id: "es6-object-assign",
    title: "`Object.assign()`",
    description:
      "Use `Object.assign()` to copy the values of all enumerable own properties from one or more source objects to a target object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Merge Objects",
    difficulty: "Beginner",
  },
  // problem--> 45
  {
    id: "es6-number-isinteger",
    title: "`Number.isInteger()`",
    description:
      "Use `Number.isInteger()` to reliably check if a value is an integer.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "val",
        label: "Value to check",
        type: "text",
        defaultValue: "10.5",
      },
    ],
    buttonText: "Check Integer",
    difficulty: "Beginner",
  },
  // problem--> 46
  {
    id: "es6-number-isnan",
    title: "`Number.isNaN()`",
    description:
      "Demonstrate the difference between the strict `Number.isNaN()` and the global `isNaN()`, which performs type coercion.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Compare `isNaN`",
    difficulty: "Intermediate",
  },
  // problem--> 47
  {
    id: "es6-exponentiation-operator",
    title: "Exponentiation Operator (`**`)",
    description:
      "Use the exponentiation operator `**` as a concise alternative to `Math.pow()`.",
    category: "ES6+ Features",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 2 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 10 },
    ],
    buttonText: "Calculate",
    difficulty: "Beginner",
  },
  // problem--> 48
  {
    id: "es6-array-includes",
    title: "`Array.prototype.includes()`",
    description:
      "Use the `.includes()` method to check if an array contains a specific value.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "apple,banana,cherry",
      },
      {
        id: "value",
        label: "Value to find",
        type: "text",
        defaultValue: "banana",
      },
    ],
    buttonText: "Check Inclusion",
    difficulty: "Beginner",
  },
  // problem--> 49
  {
    id: "es6-named-export-conceptual",
    title: "Named Export (Conceptual)",
    description:
      "Explain the syntax for exporting multiple, named values from a module: `export const myVar = ...` and `import { myVar } from './module'`. ",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 50
  {
    id: "es6-default-export-conceptual",
    title: "Default Export (Conceptual)",
    description:
      "Explain the syntax for exporting a single, default value from a module: `export default myFunc` and `import myFunc from './module'`. ",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 51
  {
    id: "es6-temporal-dead-zone",
    title: "Temporal Dead Zone (TDZ)",
    description:
      "Show that accessing a `let` variable before its declaration results in a `ReferenceError` due to the TDZ.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Trigger TDZ",
    difficulty: "Intermediate",
  },
  // problem--> 52
  {
    id: "es6-arrow-function-no-arguments",
    title: "Arrow Functions have no `arguments` object",
    description:
      "Show that arrow functions do not have their own `arguments` object, and that rest parameters should be used instead.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `arguments`",
    difficulty: "Intermediate",
  },
  // problem--> 53
  {
    id: "es6-destructuring-nested",
    title: "Nested Destructuring",
    description:
      "Use nested destructuring syntax to extract a value from a deeply nested object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Destructure Nested",
    difficulty: "Intermediate",
  },
  // problem--> 54
  {
    id: "es6-destructuring-function-parameters",
    title: "Destructuring in Function Parameters",
    description:
      "Use object destructuring directly in a function's parameter list to handle an options object elegantly.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Call Function",
    difficulty: "Intermediate",
  },
  // problem--> 55
  {
    id: "es6-rest-and-spread-difference",
    title: "Rest vs. Spread",
    description:
      "Explain the difference: Spread (`...`) expands an iterable into individual elements. Rest (`...`) collects multiple elements into a single array.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Beginner",
  },
  // problem--> 56
  {
    id: "es6-class-static-method",
    title: "`static` Method",
    description:
      "Define a `static` method on a class. Static methods are called on the class itself, not on instances.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Define and Call",
    difficulty: "Intermediate",
  },
  // problem--> 57
  {
    id: "es6-class-getters-setters",
    title: "Class Getters and Setters",
    description:
      "Use the `get` and `set` keywords to create accessor properties in a class.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Getters/Setters",
    difficulty: "Intermediate",
  },
  // problem--> 58
  {
    id: "es6-promise-resolve-static",
    title: "Static `Promise.resolve()`",
    description:
      "Use the static method `Promise.resolve()` to create a promise that is already resolved with a given value.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "value",
        label: "Value to resolve with",
        type: "text",
        defaultValue: "Instant",
      },
    ],
    buttonText: "Resolve Instantly",
    difficulty: "Intermediate",
  },
  // problem--> 59
  {
    id: "es6-promise-reject-static",
    title: "Static `Promise.reject()`",
    description:
      "Use the static method `Promise.reject()` to create a promise that is already rejected with a given reason.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "reason",
        label: "Rejection reason",
        type: "text",
        defaultValue: "Instant Error",
      },
    ],
    buttonText: "Reject Instantly",
    difficulty: "Intermediate",
  },
  // problem--> 60
  {
    id: "es6-promise-race",
    title: "`Promise.race()`",
    description:
      "Use `Promise.race()` to get the result of the first promise to settle (either resolve or reject).",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Run Promise Race",
    difficulty: "Intermediate",
  },
  // problem--> 61
  {
    id: "es6-map-vs-object",
    title: "`Map` vs. Plain Object",
    description:
      "Explain the key advantages of using a `Map` over a plain object for key-value storage (e.g., any value as a key, iteration order, `.size` property).",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 62
  {
    id: "es6-map-iteration",
    title: "Iterating a `Map`",
    description:
      "Use a `for...of` loop with destructuring to iterate over the key-value pairs of a `Map`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Iterate Map",
    difficulty: "Intermediate",
  },
  // problem--> 63
  {
    id: "es6-set-from-array",
    title: "`Set` from an Array",
    description:
      "Create a `Set` from an array to quickly get a collection of unique values.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "arr",
        label: "Array with duplicates",
        type: "text",
        defaultValue: "a,b,a,c",
      },
    ],
    buttonText: "Create Set",
    difficulty: "Beginner",
  },
  // problem--> 64
  {
    id: "es6-symbol-for",
    title: "`Symbol.for()`",
    description:
      "Use `Symbol.for()` to create or retrieve a symbol from a global symbol registry, showing how it differs from the `Symbol()` constructor.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `Symbol.for`",
    difficulty: "Advanced",
  },
  // problem--> 65
  {
    id: "es6-symbol-as-property-key",
    title: "Symbol as a Property Key",
    description:
      "Use a `Symbol` to create a property on an object that is 'hidden' from `for...in` loops and `JSON.stringify`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Symbol Key",
    difficulty: "Advanced",
  },
  // problem--> 66
  {
    id: "es6-iterable-protocol-conceptual",
    title: "Iterable Protocol (Conceptual)",
    description:
      "Explain how an object can become iterable by implementing a `[Symbol.iterator]` method.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain Iterable",
    difficulty: "Advanced",
  },
  // problem--> 67
  {
    id: "es6-custom-iterator",
    title: "Custom Iterator",
    description:
      "Make a custom object iterable by implementing the `[Symbol.iterator]` method, allowing it to be used in a `for...of` loop.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Make Object Iterable",
    difficulty: "Advanced",
  },
  // problem--> 68
  {
    id: "es6-generator-iterator",
    title: "Generator as an Iterator",
    description:
      "Use the iterator returned by a generator function with the `.next()` method to get the yielded values one by one.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Iterator",
    difficulty: "Advanced",
  },
  // problem--> 69
  {
    id: "es6-generator-infinite-sequence",
    title: "Generator for an Infinite Sequence",
    description:
      "Create a generator function that produces an infinite sequence of values (e.g., natural numbers).",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Generate Sequence",
    difficulty: "Advanced",
  },
  // problem--> 70
  {
    id: "es6-array-from-with-map",
    title: "`Array.from` with Mapping Function",
    description:
      "Use the optional mapping function of `Array.from` to create and populate an array in a single step.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create and Map",
    difficulty: "Intermediate",
  },
  // problem--> 71
  {
    id: "es6-array-of",
    title: "`Array.of()`",
    description:
      "Demonstrate how `Array.of()` creates an array from its arguments, unlike the `Array` constructor which has special behavior for a single numeric argument.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Compare `Array.of(7)` and `new Array(7)`",
    difficulty: "Intermediate",
  },
  // problem--> 72
  {
    id: "es6-object-is",
    title: "`Object.is()`",
    description:
      "Use `Object.is()` to show its differences from `===` when comparing `NaN` and `-0`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `Object.is`",
    difficulty: "Intermediate",
  },
  // problem--> 73
  {
    id: "es7-array-includes",
    title: "ES7: `Array.prototype.includes()`",
    description:
      "Demonstrate the `.includes()` method as a more readable alternative to `indexOf()` for checking if a value exists in an array.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `.includes()`",
    difficulty: "Beginner",
  },
  // problem--> 74
  {
    id: "es7-exponentiation-operator",
    title: "ES7: Exponentiation Operator (`**`)",
    description:
      "Use the exponentiation operator `**` as a concise alternative to `Math.pow()`.",
    category: "ES6+ Features",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 7 },
      { id: "exp", label: "Exponent", type: "number", defaultValue: 2 },
    ],
    buttonText: "Calculate",
    difficulty: "Beginner",
  },
  // problem--> 75
  {
    id: "es8-async-await",
    title: "ES8: `async/await`",
    description:
      "Rewrite a promise-based fetch operation using the more modern and readable `async/await` syntax.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Fetch with async/await",
    difficulty: "Intermediate",
  },
  // problem--> 76
  {
    id: "es8-object-values",
    title: "ES8: `Object.values()`",
    description:
      "Use `Object.values()` to get an array of an object's own property values.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Get Values",
    difficulty: "Beginner",
  },
  // problem--> 77
  {
    id: "es8-object-entries",
    title: "ES8: `Object.entries()`",
    description:
      "Use `Object.entries()` to get an array of an object's own `[key, value]` pairs.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Get Entries",
    difficulty: "Beginner",
  },
  // problem--> 78
  {
    id: "es8-string-padding",
    title: "ES8: String Padding",
    description:
      "Use `padStart()` and `padEnd()` to pad a string with another string until it reaches a given length.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Pad String",
    difficulty: "Beginner",
  },
  // problem--> 79
  {
    id: "es8-object-getownpropertydescriptors",
    title: "ES8: `Object.getOwnPropertyDescriptors()`",
    description:
      "Use `Object.getOwnPropertyDescriptors()` to get an object containing all own property descriptors of an object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Get Descriptors",
    difficulty: "Advanced",
  },
  // problem--> 80
  {
    id: "es9-async-iteration",
    title: "ES9: Asynchronous Iteration",
    description:
      "Explain the concept of async iterators and show how to consume them with a `for-await...of` loop.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 81
  {
    id: "es9-promise-finally",
    title: "ES9: Promise `.finally()`",
    description:
      "Demonstrate the `.finally()` method for running cleanup code after a promise settles.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `.finally()`",
    difficulty: "Intermediate",
  },
  // problem--> 82
  {
    id: "es9-rest-properties",
    title: "ES9: Rest Properties for Objects",
    description:
      "Use the rest syntax in object destructuring to collect remaining properties into a new object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Rest Properties",
    difficulty: "Intermediate",
  },
  // problem--> 83
  {
    id: "es9-spread-properties",
    title: "ES9: Spread Properties for Objects",
    description:
      "Show how spread syntax can be used in object literals to copy properties from another object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Spread Properties",
    difficulty: "Beginner",
  },
  // problem--> 84
  {
    id: "es9-regexp-lookbehind-assertion",
    title: "ES9: RegExp Lookbehind Assertions",
    description:
      "Use a positive lookbehind `(?<=...)` in a regular expression to match a pattern that is preceded by another pattern.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Lookbehind",
    difficulty: "Advanced",
  },
  // problem--> 85
  {
    id: "es9-regexp-named-capture-groups",
    title: "ES9: RegExp Named Capture Groups",
    description:
      "Use named capture groups `(?<name>...)` in a regular expression to extract matched data into a `groups` object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Named Groups",
    difficulty: "Advanced",
  },
  // problem--> 86
  {
    id: "es10-array-flat",
    title: "ES10: `Array.prototype.flat()`",
    description:
      "Use `.flat()` to create a new array with all sub-array elements concatenated into it up to a specified depth.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "arr",
        label: "Nested Array (JSON)",
        type: "textarea",
        defaultValue: "[1, [2, [3, [4]]]]",
      },
    ],
    buttonText: "Flatten Array",
    difficulty: "Intermediate",
  },
  // problem--> 87
  {
    id: "es10-array-flatmap",
    title: "ES10: `Array.prototype.flatMap()`",
    description:
      "Use `.flatMap()` to map each element using a mapping function, then flatten the result into a new array. It's equivalent to a `map` followed by a `flat` of depth 1.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use `flatMap`",
    difficulty: "Intermediate",
  },
  // problem--> 88
  {
    id: "es10-string-trimstart-trimend",
    title: "ES10: `trimStart()` and `trimEnd()`",
    description:
      "Use `trimStart()` and `trimEnd()` to remove whitespace from the beginning or end of a string.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Trim String",
    difficulty: "Beginner",
  },
  // problem--> 89
  {
    id: "es10-object-fromentries",
    title: "ES10: `Object.fromEntries()`",
    description:
      "Use `Object.fromEntries()` to create an object from an array of key-value pairs (the inverse of `Object.entries()`).",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create from Entries",
    difficulty: "Intermediate",
  },
  // problem--> 90
  {
    id: "es10-optional-catch-binding",
    title: "ES10: Optional `catch` Binding",
    description:
      "Show the syntax where you can omit the binding variable in a `catch` block if you don't need to use the error object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Optional Binding",
    difficulty: "Intermediate",
  },
  // problem--> 91
  {
    id: "es11-bigint",
    title: "ES11: `BigInt`",
    description:
      "Create a `BigInt` to work with integers larger than `Number.MAX_SAFE_INTEGER` and perform an arithmetic operation.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use `BigInt`",
    difficulty: "Intermediate",
  },
  // problem--> 92
  {
    id: "es11-dynamic-import",
    title: "ES11: Dynamic `import()` (Conceptual)",
    description:
      "Explain how dynamic `import()` allows you to load an ES module on demand, returning a promise.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 93
  {
    id: "es11-nullish-coalescing",
    title: "ES11: Nullish Coalescing Operator (`??`)",
    description:
      "Use `??` to provide a default value for a variable that is `null` or `undefined`, showing how it differs from `||`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `??`",
    difficulty: "Beginner",
  },
  // problem--> 94
  {
    id: "es11-optional-chaining",
    title: "ES11: Optional Chaining (`?.`)",
    description:
      "Use `?.` to safely access a property of a potentially `null` or `undefined` object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `?.`",
    difficulty: "Beginner",
  },
  // problem--> 95
  {
    id: "es11-promise-allsettled",
    title: "ES11: `Promise.allSettled()`",
    description:
      "Use `Promise.allSettled()` to wait for all promises to settle and get an array of their outcomes (fulfilled or rejected).",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Run `allSettled`",
    difficulty: "Intermediate",
  },
  // problem--> 96
  {
    id: "es11-globalthis",
    title: "ES11: `globalThis`",
    description:
      "Demonstrate `globalThis` as a standard way to access the global object in any JavaScript environment.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Show `globalThis`",
    difficulty: "Intermediate",
  },
  // problem--> 97
  {
    id: "es11-string-matchall",
    title: "ES11: `String.prototype.matchAll()`",
    description:
      "Use `matchAll()` with a global regex to get an iterator for all matches, including capture groups.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use `matchAll`",
    difficulty: "Intermediate",
  },
  // problem--> 98
  {
    id: "es12-logical-assignment-operators",
    title: "ES12: Logical Assignment Operators",
    description:
      "Demonstrate the logical assignment operators: `||=`, `&&=`, and `??=`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Operators",
    difficulty: "Intermediate",
  },
  // problem--> 99
  {
    id: "es12-string-replaceall",
    title: "ES12: `String.prototype.replaceAll()`",
    description:
      "Use `replaceAll()` to replace all occurrences of a substring, a simpler alternative to a global regex.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "The quick brown fox jumps over the lazy dog.",
      },
    ],
    buttonText: "Replace All 'o's",
    difficulty: "Beginner",
  },
  // problem--> 100
  {
    id: "es12-promise-any",
    title: "ES12: `Promise.any()`",
    description:
      "Use `Promise.any()` to get the value of the first promise to be fulfilled.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Run `any`",
    difficulty: "Intermediate",
  },
  // problem--> 101
  {
    id: "es12-numeric-separators",
    title: "ES12: Numeric Separators",
    description:
      "Show how the numeric separator `_` can be used to improve the readability of large number literals.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Show Separator",
    difficulty: "Beginner",
  },
  // problem--> 102
  {
    id: "es12-weakref",
    title: "ES12: `WeakRef` (Conceptual)",
    description:
      "Explain `WeakRef` as an object that holds a weak reference to another object, without preventing garbage collection.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 103
  {
    id: "es13-class-fields",
    title: "ES13: Class Fields",
    description:
      "Demonstrate public instance class fields as a concise way to define properties on a class.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Class Fields",
    difficulty: "Intermediate",
  },
  // problem--> 104
  {
    id: "es13-private-methods-and-fields",
    title: "ES13: Private Methods and Fields (`#`)",
    description:
      "Use the `#` prefix to create private fields and methods in a class that are not accessible from outside.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Private Members",
    difficulty: "Advanced",
  },
  // problem--> 105
  {
    id: "es13-static-class-features",
    title: "ES13: Static Class Features",
    description:
      "Demonstrate static class fields, static private methods, and static initialization blocks.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Static Features",
    difficulty: "Advanced",
  },
  // problem--> 106
  {
    id: "es13-array-at",
    title: "ES13: `Array.prototype.at()`",
    description:
      "Use the `.at()` method to access array elements with negative indices (e.g., `.at(-1)` for the last element).",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use `.at()`",
    difficulty: "Beginner",
  },
  // problem--> 107
  {
    id: "es13-regexp-match-indices",
    title: "ES13: RegExp Match Indices (`/d` flag)",
    description:
      "Use the `/d` flag on a regular expression to get the start and end indices of matched capture groups.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `/d` flag",
    difficulty: "Advanced",
  },
  // problem--> 108
  {
    id: "es13-object-hasown",
    title: "ES13: `Object.hasOwn()`",
    description:
      "Use the static method `Object.hasOwn()` as a safer alternative to `Object.prototype.hasOwnProperty()`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use `Object.hasOwn`",
    difficulty: "Beginner",
  },
  // problem--> 109
  {
    id: "es13-error-cause",
    title: "ES13: Error `cause` Property",
    description:
      "Create a new `Error` with a `cause` property to chain errors, showing how to wrap a low-level error in a more descriptive high-level one.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Error Cause",
    difficulty: "Intermediate",
  },
  // problem--> 110
  {
    id: "es13-top-level-await",
    title: "ES13: Top-Level `await` (Conceptual)",
    description:
      "Explain how top-level `await` allows using `await` outside of an `async` function in ES modules.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 111
  {
    id: "es14-array-findlast",
    title: "ES14: `Array.prototype.findLast()`",
    description:
      "Use the `.findLast()` method to iterate an array backwards and find the last element that satisfies a condition.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use `findLast()`",
    difficulty: "Beginner",
  },
  // problem--> 112
  {
    id: "es14-array-findlastindex",
    title: "ES14: `Array.prototype.findLastIndex()`",
    description:
      "Use the `.findLastIndex()` method to iterate an array backwards and find the index of the last element that satisfies a condition.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use `findLastIndex()`",
    difficulty: "Beginner",
  },
  // problem--> 113
  {
    id: "es14-array-immutable-methods",
    title: "ES14: New Immutable Array Methods",
    description:
      "Demonstrate the new immutable array methods: `.toSorted()`, `.toReversed()`, `.toSpliced()`, and `.with()`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Immutable Methods",
    difficulty: "Intermediate",
  },
  // problem--> 114
  {
    id: "es14-hashbang-grammar",
    title: "ES14: Hashbang Grammar (Conceptual)",
    description:
      "Explain the Hashbang (`#!`) syntax and its standardization for making JavaScript files directly executable in shell environments.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 115
  {
    id: "es14-symbols-as-weakmap-keys",
    title: "ES14: Symbols as `WeakMap` Keys",
    description:
      "Demonstrate using a non-registered Symbol as a key in a `WeakMap`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Symbol Key",
    difficulty: "Advanced",
  },
  // problem--> 116
  {
    id: "es15-promise-withresolvables",
    title: "ES15: `Promise.withResolvables()`",
    description:
      "Use the new `Promise.withResolvables()` static method to get a promise and its `resolve`/`reject` functions.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `withResolvables`",
    difficulty: "Advanced",
  },
  // problem--> 117
  {
    id: "es6-proxy-basic",
    title: "Proxy for Validation",
    description:
      "Create a `Proxy` with a `set` trap to validate data before it is assigned to an object's property.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Validation Proxy",
    difficulty: "Advanced",
  },
  // problem--> 118
  {
    id: "es6-proxy-get-trap",
    title: "Proxy for Default Values",
    description:
      "Use a proxy's `get` trap to return a default value for any property that does not exist on the target object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Default Value Proxy",
    difficulty: "Advanced",
  },
  // problem--> 119
  {
    id: "es6-reflect-api",
    title: "`Reflect` API",
    description:
      "Use `Reflect.get()` and `Reflect.set()` to access and modify properties, which is the recommended way within proxy traps.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use `Reflect`",
    difficulty: "Advanced",
  },
  // problem--> 120
  {
    id: "es6-generator-for-custom-iteration",
    title: "Generator for Custom Iteration",
    description:
      "Create a class that uses a generator method for its `[Symbol.iterator]` to define a custom iteration behavior.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Iterate Custom Object",
    difficulty: "Advanced",
  },
  // problem--> 121
  {
    id: "es6-tagged-template-literals",
    title: "Tagged Template Literals",
    description:
      "Create a tag function that receives the string parts and interpolated values of a template literal to perform custom processing.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Tag Function",
    difficulty: "Advanced",
  },
  // problem--> 122
  {
    id: "es6-well-known-symbols",
    title: "Well-Known Symbols (Conceptual)",
    description:
      "Explain the purpose of well-known symbols like `Symbol.iterator` and `Symbol.toStringTag` for customizing built-in language behaviors.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 123
  {
    id: "es6-tail-call-optimization-conceptual",
    title: "Tail Call Optimization (Conceptual)",
    description:
      "Explain Tail Call Optimization (TCO) and show a recursive function that is in a tail-call position, preventing stack overflow for deep recursion.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain TCO",
    difficulty: "Advanced",
  },
  // problem--> 124
  {
    id: "es6-binary-and-octal-literals",
    title: "Binary and Octal Literals",
    description:
      "Show the syntax for binary (`0b...`) and octal (`0o...`) number literals.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Show Literals",
    difficulty: "Beginner",
  },
  // problem--> 125
  {
    id: "es6-unicode-code-point-escapes",
    title: "Unicode Code Point Escapes",
    description:
      "Use the `\\u{...}` escape sequence in a string to represent Unicode characters beyond the 16-bit limit.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Show Unicode Escape",
    difficulty: "Intermediate",
  },
  // problem--> 126
  {
    id: "es6-subclassing-builtins",
    title: "Subclassing Built-ins",
    description:
      "Create a custom array class that extends `Array` and adds a new method, showing that built-in classes can be extended.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Extend `Array`",
    difficulty: "Advanced",
  },
  // problem--> 127
  {
    id: "es6-new-target-conceptual",
    title: "`new.target` (Conceptual)",
    description:
      "Explain the `new.target` meta-property, which allows you to detect whether a function was called as a constructor with `new`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 128
  {
    id: "es6-map-with-object-keys",
    title: "`Map` with Object Keys",
    description:
      "Demonstrate a key advantage of `Map` by using an object as a key, which is not possible with plain objects.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Object Key",
    difficulty: "Intermediate",
  },
  // problem--> 129
  {
    id: "es6-weakmap-for-private-data",
    title: "`WeakMap` for Private Data",
    description:
      "Show the classic pattern of using a `WeakMap` to associate private data with an object instance without preventing garbage collection.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `WeakMap` Privacy",
    difficulty: "Advanced",
  },
  // problem--> 130
  {
    id: "es6-weakset-for-object-tracking",
    title: "`WeakSet` for Object Tracking",
    description:
      "Use a `WeakSet` to keep track of a collection of objects without preventing them from being garbage collected.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `WeakSet`",
    difficulty: "Advanced",
  },
  // problem--> 131
  {
    id: "es9-regexp-s-flag",
    title: "ES9: RegExp `s` (dotAll) flag",
    description:
      "Use the `/s` flag on a regular expression to make the `.` character match newline characters as well.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `/s` flag",
    difficulty: "Advanced",
  },
  // problem--> 132
  {
    id: "es9-regexp-unicode-property-escapes",
    title: "ES9: RegExp Unicode Property Escapes",
    description:
      "Use Unicode property escapes `\\p{...}` in a regular expression to match characters based on their Unicode properties, like `Script` or `Emoji`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Match Emoji",
    difficulty: "Advanced",
  },
  // problem--> 133
  {
    id: "es10-function-tostring-revision",
    title: "ES10: `.toString()` Revision",
    description:
      "Show that `function.toString()` now returns the exact source code, including comments and whitespace.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Get Source Code",
    difficulty: "Advanced",
  },
  // problem--> 134
  {
    id: "es10-symbol-description",
    title: "ES10: `Symbol.prototype.description`",
    description:
      "Use the `.description` property to access the description of a `Symbol` without needing to convert the whole symbol to a string.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Get Description",
    difficulty: "Intermediate",
  },
  // problem--> 135
  {
    id: "es12-finalization-registry",
    title: "ES12: `FinalizationRegistry` (Conceptual)",
    description:
      "Explain the `FinalizationRegistry` API, which lets you request a callback to be invoked after an object has been garbage collected, for resource cleanup.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 136
  {
    id: "es14-array-tospliced",
    title: "ES14: `Array.prototype.toSpliced()`",
    description:
      "Use `.toSpliced()` to get a new array with elements removed and/or added, without mutating the original (immutable equivalent of `.splice()`).",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `.toSpliced()`",
    difficulty: "Intermediate",
  },
  // problem--> 137
  {
    id: "es6-destructuring-and-rest-in-arrays",
    title: "Array Destructuring with Rest",
    description:
      "Use the rest pattern (`...`) in array destructuring to collect the remaining elements into a new array.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Rest Pattern",
    difficulty: "Beginner",
  },
  // problem--> 138
  {
    id: "es6-destructuring-and-defaults-in-arrays",
    title: "Array Destructuring with Defaults",
    description:
      "Provide default values for variables in array destructuring for cases where the array is shorter than expected.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Defaults",
    difficulty: "Beginner",
  },
  // problem--> 139
  {
    id: "es6-let-vs-var-in-loops",
    title: "`let` vs `var` in Loops Deep Dive",
    description:
      "Create a classic closure-in-a-loop problem with `var` and show how simply changing it to `let` fixes the issue due to block scoping.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Compare `let` and `var`",
    difficulty: "Intermediate",
  },
  // problem--> 140
  {
    id: "es6-spread-to-copy-array",
    title: "Shallow Copy Array with Spread",
    description:
      "Use the spread syntax to create a shallow copy of an array and show how modifying nested objects affects the original.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Shallow Copy",
    difficulty: "Intermediate",
  },
  // problem--> 141
  {
    id: "es6-map-object-keys",
    title: "Using Objects as Map Keys",
    description:
      "Demonstrate a key advantage of `Map` by using object references as keys, which is not possible with plain objects.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Object Keys",
    difficulty: "Intermediate",
  },
  // problem--> 142
  {
    id: "es6-promise-unwrapping",
    title: "Promise Unwrapping",
    description:
      "Show that if you return a promise from inside a `.then()` handler, the chain will wait for that inner promise to resolve.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Promise Unwrapping",
    difficulty: "Intermediate",
  },
  // problem--> 143
  {
    id: "es6-super-method-call",
    title: "`super` for Method Calls",
    description:
      "Override a method in a child class and use `super.methodName()` to call the parent's version of the method.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Call Parent Method",
    difficulty: "Intermediate",
  },
  // problem--> 144
  {
    id: "es6-generator-with-return",
    title: "Generator with `return`",
    description:
      "Show how a `return` statement in a generator function sets the `value` of the final object where `done` is true.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Run Generator to End",
    difficulty: "Advanced",
  },
  // problem--> 145
  {
    id: "es8-async-await-error-handling",
    title: "ES8: `async/await` Error Handling",
    description:
      "Use a `try...catch` block to handle a rejected promise within an `async` function.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Catch Async Error",
    difficulty: "Intermediate",
  },
  // problem--> 146
  {
    id: "es8-shared-array-buffer-conceptual",
    title: "ES8: `SharedArrayBuffer` (Conceptual)",
    description:
      "Explain `SharedArrayBuffer` for sharing memory between web workers and the main thread, enabling high-performance parallelism.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 147
  {
    id: "es8-atomics-conceptual",
    title: "ES8: `Atomics` Object (Conceptual)",
    description:
      "Explain the `Atomics` object and its role in performing atomic operations on `SharedArrayBuffer` to prevent race conditions.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 148
  {
    id: "es11-optional-chaining-with-methods",
    title: "ES11: Optional Chaining with Methods",
    description:
      "Use optional chaining `?.()` to safely call a method that might not exist on an object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Safely Call Method",
    difficulty: "Beginner",
  },
  // problem--> 149
  {
    id: "es12-string-replaceall-with-regex",
    title: "ES12: `replaceAll` with Global RegExp",
    description:
      "Show that `replaceAll` works with a global regular expression to replace all matches.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "apple and orange and apple",
      },
    ],
    buttonText: "Replace All",
    difficulty: "Intermediate",
  },
  // problem--> 150
  {
    id: "es13-private-brand-check",
    title: "ES13: Private Field Brand Check",
    description:
      "Use the `in` operator to check for a private field, a reliable way to verify if an object is an instance of a specific class.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Check Instance Brand",
    difficulty: "Advanced",
  },
  // problem--> 151
  {
    id: "es6-destructuring-for-of-loop",
    title: "Destructuring in `for...of` Loop",
    description:
      "Use array destructuring within a `for...of` loop to easily access elements of nested arrays.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Iterate and Destructure",
    difficulty: "Intermediate",
  },
  // problem--> 152
  {
    id: "es6-map-chaining",
    title: "`Map` Method Chaining",
    description:
      "Demonstrate that the `.set()` method on a `Map` returns the map itself, allowing for chained calls.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Chain `.set()` Calls",
    difficulty: "Intermediate",
  },
  // problem--> 153
  {
    id: "es6-generator-yield-delegation",
    title: "Generator `yield*`",
    description:
      "Use `yield*` to delegate the iteration control from one generator to another iterable, like an array.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `yield*`",
    difficulty: "Advanced",
  },
  // problem--> 154
  {
    id: "es8-async-sequential-vs-parallel",
    title: "ES8: Sequential vs Parallel `await`",
    description:
      "Compare running two async operations sequentially vs in parallel with `Promise.all` to show the performance difference.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Compare Execution",
    difficulty: "Intermediate",
  },
  // problem--> 155
  {
    id: "es9-promise-finally-rejection",
    title: "ES9: `.finally()` with Rejection",
    description:
      "Show that `.finally()` executes even when a promise chain is rejected.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Rejection",
    difficulty: "Intermediate",
  },
  // problem--> 156
  {
    id: "es10-object-fromentries-map",
    title: "ES10: `Object.fromEntries` with `Map`",
    description:
      "Use `Object.fromEntries` to convert an ES6 `Map` object into a plain object.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Convert Map to Object",
    difficulty: "Intermediate",
  },
  // problem--> 157
  {
    id: "es11-optional-chaining-with-arrays",
    title: "ES11: Optional Chaining with Arrays",
    description:
      "Use optional chaining `?.[]` to safely access an element of a potentially non-existent array.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Safely Access Index",
    difficulty: "Beginner",
  },
  // problem--> 158
  {
    id: "es12-promise-any-rejection",
    title: "ES12: `Promise.any()` with All Rejections",
    description:
      "Demonstrate that `Promise.any()` rejects with an `AggregateError` if all of the input promises reject.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `any` Rejection",
    difficulty: "Intermediate",
  },
  // problem--> 159
  {
    id: "es13-class-static-private-methods",
    title: "ES13: Private Static Methods",
    description:
      "Define and call a private static method within a class using the `#` syntax.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Private Static Method",
    difficulty: "Advanced",
  },
  // problem--> 160
  {
    id: "es14-array-with",
    title: "ES14: `Array.prototype.with()`",
    description:
      "Use the `.with(index, value)` method to create a new array with an element at a given index replaced (immutable).",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `.with()`",
    difficulty: "Beginner",
  },
  // problem--> 161
  {
    id: "es6-immutable-update-pattern",
    title: "Immutable Update Pattern",
    description:
      "Demonstrate the pattern of 'updating' a `const` object by creating a new object with spread syntax.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Show Immutable Update",
    difficulty: "Intermediate",
  },
  // problem--> 162
  {
    id: "es6-map-foreach",
    title: "Iterating a Map with `forEach`",
    description:
      "Use the built-in `.forEach` method to iterate over the key-value pairs of a Map.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Iterate with `forEach`",
    difficulty: "Intermediate",
  },
  // problem--> 163
  {
    id: "es6-set-to-array-spread",
    title: "Convert Set to Array with Spread",
    description:
      "Use the spread syntax `[...mySet]` to convert a Set into an array.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Convert Set",
    difficulty: "Beginner",
  },
  // problem--> 164
  {
    id: "es6-generator-yield-expression",
    title: "Passing Values to `next()`",
    description:
      "Demonstrate passing a value to `iterator.next(value)` to send data back into a paused generator.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Pass Value to Generator",
    difficulty: "Advanced",
  },
  // problem--> 165
  {
    id: "es8-async-await-in-map-pitfall",
    title: "ES8: `async/await` in `.map()` Pitfall",
    description:
      "Demonstrate that using `await` inside `.map()` does not pause the execution and returns an array of promises, requiring `Promise.all`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Show Pitfall",
    difficulty: "Intermediate",
  },
  // problem--> 166
  {
    id: "es9-regexp-lookbehind-negative",
    title: "ES9: Negative Lookbehind Assertion",
    description:
      "Use a negative lookbehind `(?<!...)` to match a pattern only if it's not preceded by another pattern.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "text",
        label: "Text",
        type: "text",
        defaultValue: "€100 and $200",
      },
    ],
    buttonText: "Match Numbers without €",
    difficulty: "Advanced",
  },
  // problem--> 167
  {
    id: "es10-flat-with-infinity",
    title: "ES10: `flat(Infinity)`",
    description:
      "Use `.flat(Infinity)` to completely flatten a deeply nested array, regardless of its depth.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Flatten Completely",
    difficulty: "Intermediate",
  },
  // problem--> 168
  {
    id: "es11-bigint-comparisons",
    title: "ES11: `BigInt` Comparisons",
    description:
      "Show that `BigInt` and `Number` values can be compared using relational and loose equality operators, but not strict equality.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Compare `BigInt` and `Number`",
    difficulty: "Intermediate",
  },
  // problem--> 169
  {
    id: "es12-logical-nullish-assignment",
    title: "ES12: Logical Nullish Assignment (`??=`)",
    description:
      "Use `??=` to assign a value to a variable only if it is `null` or `undefined`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `??=`",
    difficulty: "Intermediate",
  },
  // problem--> 170
  {
    id: "es13-class-static-private-fields",
    title: "ES13: Private Static Fields",
    description:
      "Define a private static field using `static #` and access it from a static method.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Private Static Field",
    difficulty: "Advanced",
  },
  // problem--> 171
  {
    id: "es14-array-toreversed",
    title: "ES14: `Array.prototype.toReversed()`",
    description:
      "Use `.toReversed()` to get a new, reversed copy of an array without mutating the original.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `.toReversed()`",
    difficulty: "Beginner",
  },
  // problem--> 172
  {
    id: "es6-template-literal-tag-function",
    title: "Tagged Template Literals",
    description:
      "Create a 'tag' function to parse a template literal, receiving the raw string parts and the interpolated values.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Tag Function",
    difficulty: "Advanced",
  },
  // problem--> 173
  {
    id: "es6-promise-race-rejection",
    title: "`Promise.race()` with Rejection",
    description:
      "Demonstrate that `Promise.race()` will reject if the first promise to settle is a rejection.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Race Rejection",
    difficulty: "Intermediate",
  },
  // problem--> 174
  {
    id: "es6-class-field-arrow-function",
    title: "Arrow Function as Class Field",
    description:
      "Use a class field with an arrow function to create a method with a lexically bound `this`, solving callback issues.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Arrow Function Field",
    difficulty: "Intermediate",
  },
  // problem--> 175
  {
    id: "es8-async-await-in-loops",
    title: "ES8: `await` in a `for...of` Loop",
    description:
      "Demonstrate how to correctly use `await` inside a `for...of` loop to process items sequentially.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Run Loop with Await",
    difficulty: "Intermediate",
  },
  // problem--> 176
  {
    id: "es9-regexp-dotall-flag",
    title: "ES9: RegExp `s` (dotAll) Flag",
    description:
      "Use the `/s` flag on a regular expression to make the `.` character match newline characters.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `/s` Flag",
    difficulty: "Advanced",
  },
  // problem--> 177
  {
    id: "es10-string-trim-start-end",
    title: "ES10: `trimStart()` and `trimEnd()`",
    description:
      "Use the standardized `trimStart()` and `trimEnd()` methods to remove whitespace from either the beginning or end of a string.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "text",
        label: "Text with whitespace",
        type: "text",
        defaultValue: "   Hello World   ",
      },
    ],
    buttonText: "Trim Text",
    difficulty: "Beginner",
  },
  // problem--> 178
  {
    id: "es11-promise-allsettled-rejection",
    title: "ES11: `Promise.allSettled()` with Rejection",
    description:
      "Show that `Promise.allSettled()` resolves even if some promises reject, returning a status object for each.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `allSettled`",
    difficulty: "Intermediate",
  },
  // problem--> 179
  {
    id: "es12-weakref-conceptual",
    title: "ES12: `WeakRef` (Conceptual)",
    description:
      "Explain `WeakRef` as an object that holds a weak reference to another object, without preventing garbage collection.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 180
  {
    id: "es13-string-at-method",
    title: "ES13: `String.prototype.at()`",
    description:
      "Use the `.at()` method on a string to access characters with negative indices.",
    category: "ES6+ Features",
    inputs: [
      { id: "text", label: "Text", type: "text", defaultValue: "JavaScript" },
    ],
    buttonText: "Get Last Character",
    difficulty: "Beginner",
  },
  // problem--> 181
  {
    id: "es14-array-tosorted",
    title: "ES14: `Array.prototype.toSorted()`",
    description:
      "Use `.toSorted()` to get a new, sorted copy of an array without mutating the original.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `.toSorted()`",
    difficulty: "Beginner",
  },
  // problem--> 182
  {
    id: "es6-destructuring-array-with-rest",
    title: "Array Destructuring with Rest",
    description:
      "Use the rest pattern (`...`) to capture the remaining elements of an array during destructuring.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Destructure and Rest",
    difficulty: "Beginner",
  },
  // problem--> 183
  {
    id: "es6-proxy-get-handler",
    title: "Proxy `get` Handler",
    description:
      "Create a proxy with a `get` handler to intercept property read access.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `get` Handler",
    difficulty: "Advanced",
  },
  // problem--> 184
  {
    id: "es6-proxy-set-handler",
    title: "Proxy `set` Handler",
    description:
      "Create a proxy with a `set` handler to intercept property write access.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `set` Handler",
    difficulty: "Advanced",
  },
  // problem--> 185
  {
    id: "es8-async-await-parallel",
    title: "ES8: Parallel `await`",
    description:
      "Show how to run multiple independent async operations in parallel and wait for all of them using `await` with `Promise.all`.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Run in Parallel",
    difficulty: "Intermediate",
  },
  // problem--> 186
  {
    id: "es9-regexp-lookahead-assertion",
    title: "ES9: RegExp Lookahead Assertion",
    description:
      "Use a positive lookahead `(?=...)` in a regular expression to match a pattern that is followed by another pattern without including it in the match.",
    category: "ES6+ Features",
    inputs: [
      { id: "text", label: "Text", type: "text", defaultValue: "Isaac Newton" },
    ],
    buttonText: "Match 'Isaac' followed by 'Newton'",
    difficulty: "Advanced",
  },
  // problem--> 187
  {
    id: "es10-symbol-description-property",
    title: "ES10: `Symbol.prototype.description`",
    description:
      "Use the `.description` property to access the optional description of a Symbol directly.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Get Symbol Description",
    difficulty: "Intermediate",
  },
  // problem--> 188
  {
    id: "es11-bigint-constructor",
    title: "ES11: `BigInt` from String",
    description:
      "Create a `BigInt` from a string representation of a large number.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "largeNumStr",
        label: "Large Number String",
        type: "text",
        defaultValue: "12345678901234567890",
      },
    ],
    buttonText: "Create `BigInt`",
    difficulty: "Intermediate",
  },
  // problem--> 189
  {
    id: "es12-logical-and-assignment",
    title: "ES12: Logical AND Assignment (`&&=`)",
    description:
      "Use the `&&=` operator to assign a value only if the left-hand variable is truthy.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `&&=`",
    difficulty: "Intermediate",
  },
  // problem--> 190
  {
    id: "es13-class-private-getters-setters",
    title: "ES13: Private Getters and Setters",
    description:
      "Define private getter and setter methods in a class using the `#` syntax.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Private Accessors",
    difficulty: "Advanced",
  },
  // problem--> 191
  {
    id: "es14-array-toSpliced-immutable",
    title: "ES14: `Array.prototype.toSpliced()`",
    description:
      "Use `.toSpliced()` to get a new array with elements removed/added without mutating the original.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `.toSpliced()`",
    difficulty: "Intermediate",
  },
  // problem--> 192
  {
    id: "es6-reflect-get-set",
    title: "Reflect API: `get` and `set`",
    description:
      "Use `Reflect.get()` and `Reflect.set()` to programmatically access and modify object properties.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Use Reflect",
    difficulty: "Advanced",
  },
  // problem--> 193
  {
    id: "es8-object-getownpropertydescriptors-clone",
    title: "ES8: Clone with `getOwnPropertyDescriptors`",
    description:
      "Use `Object.getOwnPropertyDescriptors` and `Object.defineProperties` to create a more accurate shallow clone of an object, preserving getters and setters.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Clone with Descriptors",
    difficulty: "Advanced",
  },
  // problem--> 194
  {
    id: "es9-promise-finally-chaining",
    title: "ES9: `.finally()` in a Promise Chain",
    description:
      "Demonstrate how `.finally()` can perform cleanup and does not affect the resolved value passed down the chain.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test Chaining",
    difficulty: "Intermediate",
  },
  // problem--> 195
  {
    id: "es10-flatmap-practical",
    title: "ES10: `flatMap` Practical Use Case",
    description:
      "Use `.flatMap()` to process an array of sentences into an array of individual words.",
    category: "ES6+ Features",
    inputs: [
      {
        id: "sentences",
        label: "Sentences (use ; to separate)",
        type: "textarea",
        defaultValue: "hello world;javascript is fun",
      },
    ],
    buttonText: "Get Words",
    difficulty: "Intermediate",
  },
  // problem--> 196
  {
    id: "es11-matchall-iterator",
    title: "ES11: `matchAll` Iterator",
    description:
      "Use the iterator returned by `matchAll` with the spread syntax to get all match objects in an array.",
    category: "ES6+ Features",
    inputs: [
      { id: "text", label: "Text", type: "text", defaultValue: "cat dog cat" },
    ],
    buttonText: "Find All 'cat's",
    difficulty: "Intermediate",
  },
  // problem--> 197
  {
    id: "es12-logical-or-assignment",
    title: "ES12: Logical OR Assignment (`||=`)",
    description:
      "Use the `||=` operator to assign a value only if the left-hand variable is falsy.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Test `||=`",
    difficulty: "Intermediate",
  },
  // problem--> 198
  {
    id: "es13-error-cause-chaining",
    title: "ES13: Chaining Errors with `cause`",
    description:
      "Create a chain of three errors using the `cause` property to show how to trace a problem back to its root.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Create Error Chain",
    difficulty: "Intermediate",
  },
  // problem--> 199
  {
    id: "es14-array-immutable-methods-all",
    title: "ES14: All New Immutable Array Methods",
    description:
      "Provide a comprehensive example using `.toSorted()`, `.toReversed()`, `.toSpliced()`, and `.with()` in a chain to demonstrate immutable array manipulation.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Chain Immutable Methods",
    difficulty: "Intermediate",
  },
  // problem--> 200
  {
    id: "es-future-decorators-conceptual",
    title: "Future ES: Decorators (Conceptual)",
    description:
      "Explain the concept of decorators, a stage 3 proposal for metaprogramming that allows you to annotate and modify classes and their members.",
    category: "ES6+ Features",
    inputs: [],
    buttonText: "Explain Decorators",
    difficulty: "Advanced",
  },
];
