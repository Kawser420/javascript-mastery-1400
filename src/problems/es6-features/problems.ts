
// import { Problem } from '../../types';

import { Problem } from "@/types";

export const es6FeaturesProblems: Problem[] = [
  // problem--> 01
  {
    id: "es6-declare-with-let",
    title: "Block Scope with `let`",
    description: "Declare a variable with `let` inside a block and show that it's not accessible outside the block, unlike `var`.",
    category: "ES6+ Features",
    buttonText: "Test Block Scope",
    inputs:
  },
  // problem--> 02
  {
    id: "es6-declare-with-const",
    title: "Declaring Constants with `const`",
    description: "Declare a constant with `const` and attempt to reassign it to demonstrate that it throws an error.",
    category: "ES6+ Features",
    buttonText: "Test Reassignment",
  },
  // problem--> 03
  {
    id: "es6-const-object-mutation",
    title: "Mutating `const` Objects",
    description: "Show that while a `const` variable cannot be reassigned, the properties of the object it refers to can be mutated.",
    category: "ES6+ Features",
    buttonText: "Mutate Object",
  },
  // problem--> 04
  {
    id: "es6-arrow-function-basic",
    title: "Basic Arrow Function",
    description: "Rewrite a simple function that doubles a number using the more concise arrow function syntax.",
    category: "ES6+ Features",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 9 }],
    buttonText: "Double with Arrow",
  },
  // problem--> 05
  {
    id: "es6-arrow-function-implicit-return",
    title: "Arrow Function with Implicit Return",
    description: "Write a single-expression arrow function that calculates the square of a number without using the `return` keyword.",
    category: "ES6+ Features",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 8 }],
    buttonText: "Square",
  },
  // problem--> 06
  {
    id: "es6-template-literals-basic",
    title: "Template Literals",
    description: "Use a template literal (backticks ``) with an embedded variable (`${...}`) to create a dynamic greeting string.",
    category: "ES6+ Features",
    inputs: [{ id: "name", label: "Name", type: "text", defaultValue: "Alice" }],
    buttonText: "Create Greeting",
  },
  // problem--> 07
  {
    id: "es6-template-literals-multiline",
    title: "Multiline Strings with Template Literals",
    description: "Create a multiline string using template literals without needing to use `\\n`.",
    category: "ES6+ Features",
    buttonText: "Create Multiline String",
  },
  // problem--> 08
  {
    id: "es6-default-parameters",
    title: "Default Parameters",
    description: "Write a function that greets a user, but defaults to 'Guest' if no name is provided.",
    category: "ES6+ Features",
    inputs: [{ id: "name", label: "Name (optional)", type: "text", defaultValue: "" }],
    buttonText: "Greet User",
  },
  // problem--> 09
  {
    id: "es6-spread-operator-arrays",
    title: "Spread Syntax in Arrays",
    description: "Use the spread syntax (`...`) to create a new array by combining two existing arrays.",
    category: "ES6+ Features",
    buttonText: "Combine Arrays",
  },
  // problem--> 10
  {
    id: "es6-spread-operator-objects",
    title: "Spread Syntax in Objects",
    description: "Use the spread syntax (`...`) to create a new object by merging properties from two existing objects.",
    category: "ES6+ Features",
    buttonText: "Merge Objects",
  },
  // problem--> 11
  {
    id: "es6-rest-parameters",
    title: "Rest Parameters",
    description: "Write a function that uses rest parameters (`...`) to accept any number of arguments and return their sum.",
    category: "ES6+ Features",
    inputs: [{ id: "numbers", label: "Numbers (comma-separated)", type: "text", defaultValue: "1, 2, 3, 4, 5" }],
    buttonText: "Sum All",
  },
  // problem--> 12
  {
    id: "es6-destructuring-arrays",
    title: "Array Destructuring",
    description: "Use array destructuring to unpack values from an array into distinct variables.",
    category: "ES6+ Features",
    buttonText: "Destructure Array",
  },
  // problem--> 13
  {
    id: "es6-destructuring-objects",
    title: "Object Destructuring",
    description: "Use object destructuring to unpack properties from an object into variables.",
    category: "ES6+ Features",
    buttonText: "Destructure Object",
  },
  // problem--> 14
  {
    id: "es6-destructuring-swap-variables",
    title: "Swap Variables with Destructuring",
    description: "Show the elegant ES6 syntax for swapping two variables in a single line using array destructuring.",
    category: "ES6+ Features",
    buttonText: "Swap Variables",
  },
  // problem--> 15
  {
    id: "es6-destructuring-object-alias",
    title: "Object Destructuring with Aliases",
    description: "Use object destructuring to extract a property and assign it to a variable with a different name.",
    category: "ES6+ Features",
    buttonText: "Destructure with Alias",
  },
  // problem--> 16
  {
    id: "es6-destructuring-object-defaults",
    title: "Object Destructuring with Defaults",
    description: "Use object destructuring to provide a default value for a property that may not exist.",
    category: "ES6+ Features",
    buttonText: "Destructure with Default",
  },
  // problem--> 17
  {
    id: "es6-for-of-loop",
    title: "`for...of` Loop",
    description: "Use a `for...of` loop to iterate directly over the values of an array, which is simpler than a traditional `for` loop.",
    category: "ES6+ Features",
    inputs: [{ id: "items", label: "Items (comma-separated)", type: "text", defaultValue: "apple,banana,cherry" }],
    buttonText: "Iterate with for...of",
  },
  // problem--> 18
  {
    id: "es6-for-of-string",
    title: "`for...of` on a String",
    description: "Use a `for...of` loop to iterate over the characters of a string.",
    category: "ES6+ Features",
    inputs: [{ id: "str", label: "String", type: "text", defaultValue: "hello" }],
    buttonText: "Iterate String",
  },
  // problem--> 19
  {
    id: "es6-shorthand-properties",
    title: "Shorthand Properties",
    description: "Create an object from variables that have the same name as the desired property keys using ES6 shorthand.",
    category: "ES6+ Features",
    buttonText: "Create with Shorthand",
  },
  // problem--> 20
  {
    id: "es6-computed-property-names",
    title: "Computed Property Names",
    description: "Create an object with a property key that is determined by a variable's value at runtime.",
    category: "ES6+ Features",
    buttonText: "Create with Computed Key",
  },
  // problem--> 21
  {
    id: "es6-lexical-this-arrow-function",
    title: "Lexical `this` in Arrow Functions",
    description: "Demonstrate how an arrow function lexically captures the `this` value from its surrounding context, solving a common callback problem.",
    category: "ES6+ Features",
    buttonText: "Test Lexical `this`",
  },
  // problem--> 22
  {
    id: "es6-class-declaration",
    title: "Basic Class Declaration",
    description: "Define a simple `Person` class with a constructor that initializes a `name` property.",
    category: "ES6+ Features",
    buttonText: "Define and Instantiate",
  },
  // problem--> 23
  {
    id: "es6-class-method",
    title: "Class Instance Method",
    description: "Add a `greet` method to the `Person` class that returns a greeting string using the person's name.",
    category: "ES6+ Features",
    buttonText: "Call Method",
  },
  // problem--> 24
  {
    id: "es6-class-inheritance",
    title: "Class Inheritance with `extends`",
    description: "Create an `Employee` class that inherits from a `Person` class using the `extends` keyword.",
    category: "ES6+ Features",
    buttonText: "Test Inheritance",
  },
  // problem--> 25
  {
    id: "es6-class-super",
    title: "`super()` in Constructor",
    description: "Use `super()` in the `Employee` constructor to call the parent `Person` constructor.",
    category: "ES6+ Features",
    buttonText: "Use `super()`",
  },
  // problem--> 26
  {
    id: "es6-promise-creation",
    title: "Creating a Simple Promise",
    description: "Create a new Promise that resolves with a success message after a short delay.",
    category: "ES6+ Features",
    buttonText: "Create and Resolve",
  },
  // problem--> 27
  {
    id: "es6-promise-rejection",
    title: "Handling a Promise Rejection",
    description: "Create a new Promise that rejects with an error message and handle it with `.catch()`.",
    category: "ES6+ Features",
    buttonText: "Create and Reject",
  },
  // problem--> 28
  {
    id: "es6-promise-chaining",
    title: "Promise Chaining with `.then()`",
    description: "Chain multiple `.then()` calls to perform a sequence of asynchronous operations.",
    category: "ES6+ Features",
    buttonText: "Run Promise Chain",
  },
  // problem--> 29
  {
    id: "es6-promise-all",
    title: "`Promise.all()`",
    description: "Use `Promise.all()` to wait for multiple promises to resolve concurrently.",
    category: "ES6+ Features",
    buttonText: "Run Promise.all",
  },
  // problem--> 30
  {
    id: "es6-map-data-structure",
    title: "`Map` Data Structure",
    description: "Use the `Map` object to store key-value pairs. Show how to `set`, `get`, and check for a key with `has`.",
    category: "ES6+ Features",
    buttonText: "Use Map",
  },
  // problem--> 31
  {
    id: "es6-set-data-structure",
    title: "`Set` Data Structure",
    description: "Use the `Set` object to store a collection of unique values. Show how to `add`, `delete`, and check for a value with `has`.",
    category: "ES6+ Features",
    buttonText: "Use Set",
  },
  // problem--> 32
  {
    id: "es6-set-remove-duplicates",
    title: "Remove Duplicates with `Set`",
    description: "Show the common idiom of using `new Set(array)` and the spread syntax to easily remove duplicate values from an array.",
    category: "ES6+ Features",
    inputs: [{ id: "arr", label: "Array with duplicates", type: "text", defaultValue: "1,2,2,3,4,3" }],
    buttonText: "Remove Duplicates",
  },
  // problem--> 33
  {
    id: "es6-modules-conceptual",
    title: "ES6 Modules (Conceptual)",
    description: "Explain the syntax for `export` and `import` and their role in creating modular, reusable, and encapsulated code.",
    category: "ES6+ Features",
    buttonText: "Explain Modules",
  },
  // problem--> 34
  {
    id: "es6-symbol-primitive-type",
    title: "`Symbol` Primitive Type",
    description: "Create a `Symbol` and show that it is a unique, immutable primitive value, often used for unique object property keys.",
    category: "ES6+ Features",
    buttonText: "Create a Symbol",
  },
  // problem--> 35
  {
    id: "es6-iterator-protocol-conceptual",
    title: "Iterator Protocol (Conceptual)",
    description: "Explain what an iterator is (an object with a `.next()` method) and how it enables iteration over data structures.",
    category: "ES6+ Features",
    buttonText: "Explain Iterator",
  },
  // problem--> 36
  {
    id: "es6-generator-function",
    title: "Generator Function",
    description: "Create a simple generator function (`function*`) that uses the `yield` keyword to produce a sequence of values.",
    category: "ES6+ Features",
    buttonText: "Generate Numbers",
  },
  // problem--> 37
  {
    id: "es6-array-from",
    title: "`Array.from()`",
    description: "Use `Array.from()` to create a new array from an array-like or iterable object, such as a string or a `NodeList`.",
    category: "ES6+ Features",
    buttonText: "Create Array from String",
  },
  // problem--> 38
  {
    id: "es6-array-find",
    title: "`Array.prototype.find()`",
    description: "Use the `.find()` method to get the first element in an array that satisfies a testing function.",
    category: "ES6+ Features",
    inputs: [{ id: "arr", label: "Array of numbers", type: "text", defaultValue: "5, 12, 8, 130, 44" }],
    buttonText: "Find first number > 10",
  },
  // problem--> 39
  {
    id: "es6-array-findIndex",
    title: "`Array.prototype.findIndex()`",
    description: "Use the `.findIndex()` method to get the index of the first element in an array that satisfies a testing function.",
    category: "ES6+ Features",
    inputs: [{ id: "arr", label: "Array of numbers", type: "text", defaultValue: "5, 8, 12, 130, 44" }],
    buttonText: "Find index of first number > 10",
  },
  // problem--> 40
  {
    id: "es6-string-includes",
    title: "`String.prototype.includes()`",
    description: "Use the `.includes()` method to check if a string contains a specific substring.",
    category: "ES6+ Features",
    inputs: [
      { id: "mainStr", label: "Main String", type: "text", defaultValue: "The quick brown fox" },
      { id: "subStr", label: "Substring to find", type: "text", defaultValue: "quick" },
    ],
    buttonText: "Check Inclusion",
  },
  // problem--> 41
  {
    id: "es6-string-startsWith",
    title: "`String.prototype.startsWith()`",
    description: "Use the `.startsWith()` method to check if a string begins with a specific substring.",
    category: "ES6+ Features",
    inputs: [
      { id: "str", label: "Main String", type: "text", defaultValue: "Hello world" },
      { id: "subStr", label: "Substring to check", type: "text", defaultValue: "Hello" },
    ],
    buttonText: "Check Start",
  },
  // problem--> 42
  {
    id: "es6-string-endsWith",
    title: "`String.prototype.endsWith()`",
    description: "Use the `.endsWith()` method to check if a string ends with a specific substring.",
    category: "ES6+ Features",
    inputs: [
      { id: "str", label: "Main String", type: "text", defaultValue: "Hello world" },
      { id: "subStr", label: "Substring to check", type: "text", defaultValue: "world" },
    ],
    buttonText: "Check End",
  },
  // problem--> 43
  {
    id: "es6-string-repeat",
    title: "`String.prototype.repeat()`",
    description: "Use the `.repeat()` method to create a new string by repeating an existing one a certain number of times.",
    category: "ES6+ Features",
    inputs: [
      { id: "str", label: "String to repeat", type: "text", defaultValue: "abc" },
      { id: "count", label: "Repeat count", type: "number", defaultValue: 3 },
    ],
    buttonText: "Repeat",
  },
  // problem--> 44
  {
    id: "es6-object-assign",
    title: "`Object.assign()`",
    description: "Use `Object.assign()` to copy the values of all enumerable own properties from one or more source objects to a target object.",
    category: "ES6+ Features",
    buttonText: "Merge Objects",
  },
  // problem--> 45
  {
    id: "es6-number-isinteger",
    title: "`Number.isInteger()`",
    description: "Use `Number.isInteger()` to reliably check if a value is an integer.",
    category: "ES6+ Features",
    inputs: [{ id: "val", label: "Value to check", type: "text", defaultValue: "10.5" }],
    buttonText: "Check Integer",
  },
  // problem--> 46
  {
    id: "es6-number-isnan",
    title: "`Number.isNaN()`",
    description: "Demonstrate the difference between the strict `Number.isNaN()` and the global `isNaN()`, which performs type coercion.",
    category: "ES6+ Features",
    buttonText: "Compare `isNaN`",
  },
  // problem--> 47
  {
    id: "es6-exponentiation-operator",
    title: "Exponentiation Operator (`**`)",
    description: "Use the exponentiation operator `**` as a concise alternative to `Math.pow()`.",
    category: "ES6+ Features",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 2 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 10 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 48
  {
    id: "es6-array-includes",
    title: "`Array.prototype.includes()`",
    description: "Use the `.includes()` method to check if an array contains a specific value.",
    category: "ES6+ Features",
    inputs: [
      { id: "arr", label: "Array (comma-separated)", type: "text", defaultValue: "apple,banana,cherry" },
      { id: "value", label: "Value to find", type: "text", defaultValue: "banana" },
    ],
    buttonText: "Check Inclusion",
  },
  // problem--> 49
  {
    id: "es6-named-export-conceptual",
    title: "Named Export (Conceptual)",
    description: "Explain the syntax for exporting multiple, named values from a module.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // problem--> 50
  {
    id: "es6-default-export-conceptual",
    title: "Default Export (Conceptual)",
    description: "Explain the syntax for exporting a single, default value from a module.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // --- Core Concepts ---
  // problem--> 51
  {
    id: "es6-let-vs-var-loop",
    title: "`let` vs. `var` in Loops",
    description: "Demonstrate the classic pitfall of using `var` in a loop with an asynchronous callback, and how `let` solves it by creating a new binding for each iteration.",
    category: "ES6+ Features",
    buttonText: "Run Loop Test",
  },
  // problem--> 52
  {
    id: "es6-temporal-dead-zone",
    title: "Temporal Dead Zone (TDZ)",
    description: "Show that accessing a `let` variable before its declaration results in a `ReferenceError` due to the TDZ.",
    category: "ES6+ Features",
    buttonText: "Trigger TDZ",
  },
  // problem--> 53
  {
    id: "es6-arrow-function-no-this",
    title: "Arrow Functions have no `this`",
    description: "Demonstrate that arrow functions do not have their own `this` binding, but inherit it from the surrounding scope, which is useful for callbacks.",
    category: "ES6+ Features",
    buttonText: "Test `this`",
  },
  // problem--> 54
  {
    id: "es6-arrow-function-no-arguments",
    title: "Arrow Functions have no `arguments` object",
    description: "Show that arrow functions do not have their own `arguments` object, and that rest parameters should be used instead.",
    category: "ES6+ Features",
    buttonText: "Test `arguments`",
  },
  // problem--> 55
  {
    id: "es6-destructuring-nested",
    title: "Nested Destructuring",
    description: "Use nested destructuring syntax to extract a value from a deeply nested object.",
    category: "ES6+ Features",
    buttonText: "Destructure Nested",
  },
  // problem--> 56
  {
    id: "es6-destructuring-function-parameters",
    title: "Destructuring in Function Parameters",
    description: "Use object destructuring directly in a function's parameter list to handle an options object elegantly.",
    category: "ES6+ Features",
    buttonText: "Call Function",
  },
  // problem--> 57
  {
    id: "es6-rest-and-spread-difference",
    title: "Rest vs. Spread",
    description: "Explain the difference: Spread (`...`) expands an iterable into individual elements. Rest (`...`) collects multiple elements into a single array.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // problem--> 58
  {
    id: "es6-class-static-method",
    title: "`static` Method",
    description: "Define a `static` method on a class. Static methods are called on the class itself, not on instances.",
    category: "ES6+ Features",
    buttonText: "Define and Call",
  },
  // problem--> 59
  {
    id: "es6-class-getters-setters",
    title: "Class Getters and Setters",
    description: "Use the `get` and `set` keywords to create accessor properties in a class.",
    category: "ES6+ Features",
    buttonText: "Use Getters/Setters",
  },
  // problem--> 60
  {
    id: "es6-promise-resolve-static",
    title: "Static `Promise.resolve()`",
    description: "Use the static method `Promise.resolve()` to create a promise that is already resolved with a given value.",
    category: "ES6+ Features",
    inputs: [{ id: "value", label: "Value to resolve with", type: "text", defaultValue: "Instant" }],
    buttonText: "Resolve Instantly",
  },
  // problem--> 61
  {
    id: "es6-promise-reject-static",
    title: "Static `Promise.reject()`",
    description: "Use the static method `Promise.reject()` to create a promise that is already rejected with a given reason.",
    category: "ES6+ Features",
    inputs: [{ id: "reason", label: "Rejection reason", type: "text", defaultValue: "Instant Error" }],
    buttonText: "Reject Instantly",
  },
  // problem--> 62
  {
    id: "es6-promise-finally",
    title: "Promise `.finally()`",
    description: "Demonstrate the `.finally()` method, which executes code once a promise is settled (either resolved or rejected).",
    category: "ES6+ Features",
    buttonText: "Run with Finally",
  },
  // problem--> 63
  {
    id: "es6-promise-race",
    title: "`Promise.race()`",
    description: "Use `Promise.race()` to get the result of the first promise to settle (either resolve or reject).",
    category: "ES6+ Features",
    buttonText: "Run Promise Race",
  },
  // problem--> 64
  {
    id: "es6-map-vs-object",
    title: "`Map` vs. Plain Object",
    description: "Explain the key advantages of using a `Map` over a plain object for key-value storage (e.g., any value as a key, iteration order, `.size` property).",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // problem--> 65
  {
    id: "es6-map-iteration",
    title: "Iterating a `Map`",
    description: "Use a `for...of` loop with destructuring to iterate over the key-value pairs of a `Map`.",
    category: "ES6+ Features",
    buttonText: "Iterate Map",
  },
  // problem--> 66
  {
    id: "es6-set-from-array",
    title: "`Set` from an Array",
    description: "Create a `Set` from an array to quickly get a collection of unique values.",
    category: "ES6+ Features",
    inputs: [{ id: "arr", label: "Array with duplicates", type: "text", defaultValue: "a,b,a,c" }],
    buttonText: "Create Set",
  },
  // problem--> 67
  {
    id: "es6-symbol-for",
    title: "`Symbol.for()`",
    description: "Use `Symbol.for()` to create or retrieve a symbol from a global symbol registry, showing how it differs from the `Symbol()` constructor.",
    category: "ES6+ Features",
    buttonText: "Test `Symbol.for`",
  },
  // problem--> 68
  {
    id: "es6-symbol-as-property-key",
    title: "Symbol as a Property Key",
    description: "Use a `Symbol` to create a property on an object that is 'hidden' from `for...in` loops and `JSON.stringify`.",
    category: "ES6+ Features",
    buttonText: "Use Symbol Key",
  },
  // problem--> 69
  {
    id: "es6-iterable-protocol-conceptual",
    title: "Iterable Protocol (Conceptual)",
    description: "Explain how an object can become iterable by implementing a `[Symbol.iterator]` method.",
    category: "ES6+ Features",
    buttonText: "Explain Iterable",
  },
  // problem--> 70
  {
    id: "es6-custom-iterator",
    title: "Custom Iterator",
    description: "Make a custom object iterable by implementing the `[Symbol.iterator]` method, allowing it to be used in a `for...of` loop.",
    category: "ES6+ Features",
    buttonText: "Make Object Iterable",
  },
  // problem--> 71
  {
    id: "es6-generator-iterator",
    title: "Generator as an Iterator",
    description: "Use the iterator returned by a generator function with the `.next()` method to get the yielded values one by one.",
    category: "ES6+ Features",
    buttonText: "Use Iterator",
  },
  // problem--> 72
  {
    id: "es6-generator-infinite-sequence",
    title: "Generator for an Infinite Sequence",
    description: "Create a generator function that produces an infinite sequence of values (e.g., natural numbers).",
    category: "ES6+ Features",
    buttonText: "Generate Sequence",
  },
  // problem--> 73
  {
    id: "es6-array-from-with-map",
    title: "`Array.from` with Mapping Function",
    description: "Use the optional mapping function of `Array.from` to create and populate an array in a single step.",
    category: "ES6+ Features",
    buttonText: "Create and Map",
  },
  // problem--> 74
  {
    id: "es6-array-of",
    title: "`Array.of()`",
    description: "Demonstrate how `Array.of()` creates an array from its arguments, unlike the `Array` constructor which has special behavior for a single numeric argument.",
    category: "ES6+ Features",
    buttonText: "Compare `Array.of(7)` and `new Array(7)`",
  },
  // problem--> 75
  {
    id: "es6-object-is",
    title: "`Object.is()`",
    description: "Use `Object.is()` to show its differences from `===` when comparing `NaN` and `-0`.",
    category: "ES6+ Features",
    buttonText: "Test `Object.is`",
  },
  // problem--> 76
  {
    id: "es7-array-includes",
    title: "ES7: `Array.prototype.includes()`",
    description: "Demonstrate the `.includes()` method as a more readable alternative to `indexOf()` for checking if a value exists in an array.",
    category: "ES6+ Features",
    buttonText: "Test `.includes()`",
  },
  // problem--> 77
  {
    id: "es7-exponentiation-operator",
    title: "ES7: Exponentiation Operator (`**`)",
    description: "Use the exponentiation operator `**` as a concise alternative to `Math.pow()`.",
    category: "ES6+ Features",
    inputs: [{ id: "base", label: "Base", type: "number", defaultValue: 7 }, { id: "exp", label: "Exponent", type: "number", defaultValue: 2 }],
    buttonText: "Calculate",
  },
  // problem--> 78
  {
    id: "es8-async-await",
    title: "ES8: `async/await`",
    description: "Rewrite a promise-based fetch operation using the more modern and readable `async/await` syntax.",
    category: "ES6+ Features",
    buttonText: "Fetch with async/await",
  },
  // problem--> 79
  {
    id: "es8-object-values",
    title: "ES8: `Object.values()`",
    description: "Use `Object.values()` to get an array of an object's own property values.",
    category: "ES6+ Features",
    buttonText: "Get Values",
  },
  // problem--> 80
  {
    id: "es8-object-entries",
    title: "ES8: `Object.entries()`",
    description: "Use `Object.entries()` to get an array of an object's own `[key, value]` pairs.",
    category: "ES6+ Features",
    buttonText: "Get Entries",
  },
  // problem--> 81
  {
    id: "es8-string-padding",
    title: "ES8: String Padding",
    description: "Use `padStart()` and `padEnd()` to pad a string with another string until it reaches a given length.",
    category: "ES6+ Features",
    buttonText: "Pad String",
  },
  // problem--> 82
  {
    id: "es8-object-getownpropertydescriptors",
    title: "ES8: `Object.getOwnPropertyDescriptors()`",
    description: "Use `Object.getOwnPropertyDescriptors()` to get an object containing all own property descriptors of an object.",
    category: "ES6+ Features",
    buttonText: "Get Descriptors",
  },
  // problem--> 83
  {
    id: "es8-trailing-commas",
    title: "ES8: Trailing Commas in Functions",
    description: "Demonstrate the use of trailing commas in function parameter lists and calls.",
    category: "ES6+ Features",
    buttonText: "Show Syntax",
  },
  // problem--> 84
  {
    id: "es9-async-iteration",
    title: "ES9: Asynchronous Iteration",
    description: "Explain the concept of async iterators and show how to consume them with a `for-await...of` loop.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // problem--> 85
  {
    id: "es9-promise-finally",
    title: "ES9: Promise `.finally()`",
    description: "Demonstrate the `.finally()` method for running cleanup code after a promise settles.",
    category: "ES6+ Features",
    buttonText: "Test `.finally()`",
  },
  // problem--> 86
  {
    id: "es9-rest-properties",
    title: "ES9: Rest Properties for Objects",
    description: "Use the rest syntax in object destructuring to collect remaining properties into a new object.",
    category: "ES6+ Features",
    buttonText: "Use Rest Properties",
  },
  // problem--> 87
  {
    id: "es9-spread-properties",
    title: "ES9: Spread Properties for Objects",
    description: "Show how spread syntax can be used in object literals to copy properties from another object.",
    category: "ES6+ Features",
    buttonText: "Use Spread Properties",
  },
  // problem--> 88
  {
    id: "es9-regexp-lookbehind-assertion",
    title: "ES9: RegExp Lookbehind Assertions",
    description: "Use a positive lookbehind `(?<=...)` in a regular expression to match a pattern that is preceded by another pattern.",
    category: "ES6+ Features",
    buttonText: "Test Lookbehind",
  },
  // problem--> 89
  {
    id: "es9-regexp-named-capture-groups",
    title: "ES9: RegExp Named Capture Groups",
    description: "Use named capture groups `(?<name>...)` in a regular expression to extract matched data into a `groups` object.",
    category: "ES6+ Features",
    buttonText: "Use Named Groups",
  },
  // problem--> 90
  {
    id: "es9-regexp-s-flag",
    title: "ES9: RegExp `s` (dotAll) flag",
    description: "Demonstrate how the `s` flag allows the `.` character in a regex to match newline characters.",
    category: "ES6+ Features",
    buttonText: "Test `s` flag",
  },
  // problem--> 91
  {
    id: "es10-array-flat",
    title: "ES10: `Array.prototype.flat()`",
    description: "Use `.flat()` to create a new array with all sub-array elements concatenated into it up to a specified depth.",
    category: "ES6+ Features",
    inputs: [{ id: "arr", label: "Nested Array (JSON)", type: "textarea", defaultValue: "[1, [2, [3, [4]]]]" }],
    buttonText: "Flatten Array",
  },
  // problem--> 92
  {
    id: "es10-array-flatmap",
    title: "ES10: `Array.prototype.flatMap()`",
    description: "Use `.flatMap()` to map each element using a mapping function, then flatten the result into a new array. It's equivalent to a `map` followed by a `flat` of depth 1.",
    category: "ES6+ Features",
    buttonText: "Use `flatMap`",
  },
  // problem--> 93
  {
    id: "es10-string-trimstart-trimend",
    title: "ES10: `trimStart()` and `trimEnd()`",
    description: "Use `trimStart()` and `trimEnd()` to remove whitespace from the beginning or end of a string.",
    category: "ES6+ Features",
    buttonText: "Trim String",
  },
  // problem--> 94
  {
    id: "es10-object-fromentries",
    title: "ES10: `Object.fromEntries()`",
    description: "Use `Object.fromEntries()` to create an object from an array of key-value pairs (the inverse of `Object.entries()`).",
    category: "ES6+ Features",
    buttonText: "Create from Entries",
  },
  // problem--> 95
  {
    id: "es10-optional-catch-binding",
    title: "ES10: Optional `catch` Binding",
    description: "Show the syntax where you can omit the binding variable in a `catch` block if you don't need to use the error object.",
    category: "ES6+ Features",
    buttonText: "Use Optional Binding",
  },
  // problem--> 96
  {
    id: "es10-symbol-description",
    title: "ES10: `Symbol.prototype.description`",
    description: "Use the `.description` property to get the optional description of a Symbol.",
    category: "ES6+ Features",
    buttonText: "Get Description",
  },
  // problem--> 97
  {
    id: "es11-bigint",
    title: "ES11: `BigInt`",
    description: "Create a `BigInt` to work with integers larger than `Number.MAX_SAFE_INTEGER` and perform an arithmetic operation.",
    category: "ES6+ Features",
    buttonText: "Use `BigInt`",
  },
  // problem--> 98
  {
    id: "es11-dynamic-import",
    title: "ES11: Dynamic `import()` (Conceptual)",
    description: "Explain how dynamic `import()` allows you to load an ES module on demand, returning a promise.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // problem--> 99
  {
    id: "es11-nullish-coalescing",
    title: "ES11: Nullish Coalescing Operator (`??`)",
    description: "Use `??` to provide a default value for a variable that is `null` or `undefined`, showing how it differs from `||`.",
    category: "ES6+ Features",
    buttonText: "Test `??`",
  },
  // problem--> 100
  {
    id: "es11-optional-chaining",
    title: "ES11: Optional Chaining (`?.`)",
    description: "Use `?.` to safely access a property of a potentially `null` or `undefined` object.",
    category: "ES6+ Features",
    buttonText: "Test `?.`",
  },
  // problem--> 101
  {
    id: "es11-promise-allsettled",
    title: "ES11: `Promise.allSettled()`",
    description: "Use `Promise.allSettled()` to wait for all promises to settle and get an array of their outcomes (fulfilled or rejected).",
    category: "ES6+ Features",
    buttonText: "Run `allSettled`",
  },
  // problem--> 102
  {
    id: "es11-globalthis",
    title: "ES11: `globalThis`",
    description: "Demonstrate `globalThis` as a standard way to access the global object in any JavaScript environment.",
    category: "ES6+ Features",
    buttonText: "Show `globalThis`",
  },
  // problem--> 103
  {
    id: "es11-string-matchall",
    title: "ES11: `String.prototype.matchAll()`",
    description: "Use `matchAll()` with a global regex to get an iterator for all matches, including capture groups.",
    category: "ES6+ Features",
    buttonText: "Use `matchAll`",
  },
  // problem--> 104
  {
    id: "es12-logical-assignment-operators",
    title: "ES12: Logical Assignment Operators",
    description: "Demonstrate the logical assignment operators: `||=`, `&&=`, and `??=`.",
    category: "ES6+ Features",
    buttonText: "Test Operators",
  },
  // problem--> 105
  {
    id: "es12-string-replaceall",
    title: "ES12: `String.prototype.replaceAll()`",
    description: "Use `replaceAll()` to replace all occurrences of a substring, a simpler alternative to a global regex.",
    category: "ES6+ Features",
    inputs: [{ id: "str", label: "String", type: "text", defaultValue: "The quick brown fox jumps over the lazy dog." }],
    buttonText: "Replace All 'o's",
  },
  // problem--> 106
  {
    id: "es12-promise-any",
    title: "ES12: `Promise.any()`",
    description: "Use `Promise.any()` to get the value of the first promise to be fulfilled.",
    category: "ES6+ Features",
    buttonText: "Run `any`",
  },
  // problem--> 107
  {
    id: "es12-numeric-separators",
    title: "ES12: Numeric Separators",
    description: "Show how the numeric separator `_` can be used to improve the readability of large number literals.",
    category: "ES6+ Features",
    buttonText: "Show Separator",
  },
  // problem--> 108
  {
    id: "es12-weakref",
    title: "ES12: `WeakRef` (Conceptual)",
    description: "Explain `WeakRef` as an object that holds a weak reference to another object, without preventing garbage collection.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // problem--> 109
  {
    id: "es12-finalizationregistry",
    title: "ES12: `FinalizationRegistry` (Conceptual)",
    description: "Explain `FinalizationRegistry` as an API to request a callback when an object is garbage collected.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // problem--> 110
  {
    id: "es13-class-fields",
    title: "ES13: Class Fields",
    description: "Demonstrate public instance class fields as a concise way to define properties on a class.",
    category: "ES6+ Features",
    buttonText: "Use Class Fields",
  },
  // problem--> 111
  {
    id: "es13-private-methods-and-fields",
    title: "ES13: Private Methods and Fields (`#`)",
    description: "Use the `#` prefix to create private fields and methods in a class that are not accessible from outside.",
    category: "ES6+ Features",
    buttonText: "Test Private Members",
  },
  // problem--> 112
  {
    id: "es13-static-class-features",
    title: "ES13: Static Class Features",
    description: "Demonstrate static class fields, static private methods, and static initialization blocks.",
    category: "ES6+ Features",
    buttonText: "Test Static Features",
  },
  // problem--> 113
  {
    id: "es13-array-at",
    title: "ES13: `Array.prototype.at()`",
    description: "Use the `.at()` method to access array elements with negative indices (e.g., `.at(-1)` for the last element).",
    category: "ES6+ Features",
    buttonText: "Use `.at()`",
  },
  // problem--> 114
  {
    id: "es13-regexp-match-indices",
    title: "ES13: RegExp Match Indices (`/d` flag)",
    description: "Use the `/d` flag on a regular expression to get the start and end indices of matched capture groups.",
    category: "ES6+ Features",
    buttonText: "Test `/d` flag",
  },
  // problem--> 115
  {
    id: "es13-object-hasown",
    title: "ES13: `Object.hasOwn()`",
    description: "Use the static method `Object.hasOwn()` as a safer alternative to `Object.prototype.hasOwnProperty()`.",
    category: "ES6+ Features",
    buttonText: "Use `Object.hasOwn`",
  },
  // problem--> 116
  {
    id: "es13-error-cause",
    title: "ES13: Error `cause` Property",
    description: "Create a new `Error` with a `cause` property to chain errors, showing how to wrap a low-level error in a more descriptive high-level one.",
    category: "ES6+ Features",
    buttonText: "Test Error Cause",
  },
  // problem--> 117
  {
    id: "es13-top-level-await",
    title: "ES13: Top-Level `await` (Conceptual)",
    description: "Explain how top-level `await` allows using `await` outside of an `async` function in ES modules.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // problem--> 118
  {
    id: "es14-array-findlast",
    title: "ES14: `Array.prototype.findLast()`",
    description: "Use the `.findLast()` method to iterate an array backwards and find the last element that satisfies a condition.",
    category: "ES6+ Features",
    buttonText: "Use `findLast()`",
  },
  // problem--> 119
  {
    id: "es14-array-findlastindex",
    title: "ES14: `Array.prototype.findLastIndex()`",
    description: "Use the `.findLastIndex()` method to iterate an array backwards and find the index of the last element that satisfies a condition.",
    category: "ES6+ Features",
    buttonText: "Use `findLastIndex()`",
  },
  // problem--> 120
  {
    id: "es14-array-immutable-methods",
    title: "ES14: New Immutable Array Methods",
    description: "Demonstrate the new immutable array methods: `.toSorted()`, `.toReversed()`, `.toSpliced()`, and `.with()`.",
    category: "ES6+ Features",
    buttonText: "Test Immutable Methods",
  },
  // problem--> 121
  {
    id: "es14-hashbang-grammar",
    title: "ES14: Hashbang Grammar (Conceptual)",
    description: "Explain the Hashbang (`#!`) syntax and its standardization for making JavaScript files directly executable in shell environments.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // problem--> 122
  {
    id: "es14-symbols-as-weakmap-keys",
    title: "ES14: Symbols as `WeakMap` Keys",
    description: "Demonstrate using a non-registered Symbol as a key in a `WeakMap`.",
    category: "ES6+ Features",
    buttonText: "Test Symbol Key",
  },
  // problem--> 123
  {
    id: "es15-promise-withresolvables",
    title: "ES15: `Promise.withResolvables()` (Conceptual)",
    description: "Explain the new `Promise.withResolvables()` static method (ES2024) that returns an object with a promise and its `resolve`/`reject` functions.",
    category: "ES6+ Features",
    buttonText: "Explain",
  },
  // --- Expert / Advanced Applications ---
  // problem--> 124
  {
    id: "es6-proxy-basic",
    title: "Proxy for Validation",
    description: "Create a `Proxy` with a `set` trap to validate data before it is assigned to an object's property.",
    category: "ES6+ Features",
    buttonText: "Use Validation Proxy",
  },
  // problem--> 125
  {
    id: "es6-proxy-get-trap",
    title: "Proxy for Default Values",
    description: "Use a proxy's `get` trap to return a default value for any property that does not exist on the target object.",
    category: "ES6+ Features",
    buttonText: "Use Default Value Proxy",
  },
  // problem--> 126
  {
    id: "es6-reflect-api",
    title: "`Reflect` API",
    description: "Use `Reflect.get()` and `Reflect.set()` to access and modify properties, which is the recommended way within proxy traps.",
    category: "ES6+ Features",
    buttonText: "Use `Reflect`",
  },
  // problem--> 127
  {
    id: "es6-generator-for-custom-iteration",
    title: "Generator for Custom Iteration",
    description: "Create a class that uses a generator method for its `[Symbol.iterator]` to define a custom iteration behavior.",
    category: "ES6+ Features",
    buttonText: "Iterate Custom Object",
  },
  // problem--> 128
  {
    id: "es6-async-await-in-map",
    title: "`async/await` inside `.map()` with `Promise.all`",
    description: "Demonstrate the correct pattern for running async operations on all array elements in parallel: use `.map()` to create an array of promises, then use `Promise.all()` to await them.",
    category: "ES6+ Features",
    buttonText: "Process in Parallel",
  },
  // problem--> 129
  {
    id: "es6-destructuring-and-rename-rest",
    title: "Destructuring: Rename and Rest",
    description: "Combine renaming a property with collecting the rest of the properties into a new object in a single destructuring statement.",
    category: "ES6+ Features",
    buttonText: "Test Rename with Rest",
  },
  // problem--> 130
  {
    id: "es6-private-data-with-weakmap",
    title: "Private Data with `WeakMap`",
    description: "Use a `WeakMap` to associate private data with an object instance, a classic pattern for privacy before `#` fields.",
    category: "ES6+ Features",
    buttonText: "Test `WeakMap` Privacy",
  },
  // problem--> 131 to 200
  ...Array.from({ length: 70 }, (_, i) => ({
    id: `es6-advanced-conceptual-${i + 1}`,
    title: `Advanced ES Feature #${i + 1} (Conceptual)`,
    description: `This problem explores an advanced or niche ES6+ feature, its internal workings, or a complex real-world application. For example, implementing a custom async iterable, the intricacies of the memory model for SharedArrayBuffer, or advanced proxy traps.`,
    category: "ES6+ Features",
    buttonText: "Explain Concept"
  }))
];
