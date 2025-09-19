import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "factorial-recursive",
    title: "Factorial of a Number",
    description:
      "Write a recursive function to calculate the factorial of a non-negative integer (n!).",
    category: "Recursion",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Calculate Factorial",
  },
  {
    id: "fibonacci-recursive",
    title: "Nth Fibonacci Number",
    description:
      "Write a recursive function to find the Nth number in the Fibonacci sequence. Note: This is inefficient but demonstrates recursion well.",
    category: "Recursion",
    inputs: [
      {
        id: "num",
        label: "Nth number to find",
        type: "number",
        defaultValue: 10,
      },
    ],
    buttonText: "Find Nth Fibonacci",
  },
  {
    id: "sum-array-recursive",
    title: "Sum Array Elements",
    description:
      "Write a recursive function that calculates the sum of all numbers in an array.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Sum Array",
  },
  {
    id: "power-recursive",
    title: "Power Function",
    description:
      "Write a recursive function that calculates the result of a base raised to the power of an exponent.",
    category: "Recursion",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 2 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 3 },
    ],
    buttonText: "Calculate Power",
  },
  {
    id: "reverse-string-recursive",
    title: "Reverse a String",
    description: "Write a recursive function to reverse a string.",
    category: "Recursion",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Reverse",
  },
  {
    id: "is-palindrome-recursive",
    title: "Check for Palindrome",
    description:
      "Write a recursive function to check if a string is a palindrome.",
    category: "Recursion",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "racecar" },
    ],
    buttonText: "Check Palindrome",
  },
  {
    id: "range-of-numbers-recursive",
    title: "Generate Range of Numbers",
    description:
      "Write a recursive function that generates an array of numbers in a range from a start to an end number.",
    category: "Recursion",
    inputs: [
      { id: "start", label: "Start Number", type: "number", defaultValue: 1 },
      { id: "end", label: "End Number", type: "number", defaultValue: 5 },
    ],
    buttonText: "Generate Range",
  },
  {
    id: "greatest-common-divisor-recursive",
    title: "Greatest Common Divisor (GCD)",
    description:
      "Write a recursive function to find the greatest common divisor of two numbers using the Euclidean algorithm.",
    category: "Recursion",
    inputs: [
      { id: "a", label: "First Number", type: "number", defaultValue: 48 },
      { id: "b", label: "Second Number", type: "number", defaultValue: 18 },
    ],
    buttonText: "Find GCD",
  },
  {
    id: "flatten-array-recursive",
    title: "Flatten a Nested Array",
    description:
      "Write a recursive function to flatten a multi-level nested array into a single-level array.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Nested Array (JSON)",
        type: "textarea",
        defaultValue: "[1, [2, 3], [[4], 5]]",
      },
    ],
    buttonText: "Flatten",
  },
  {
    id: "sum-of-digits-recursive",
    title: "Sum of Digits",
    description:
      "Write a recursive function to calculate the sum of the digits of a number.",
    category: "Recursion",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Sum Digits",
  },
  {
    id: "binary-search-recursive",
    title: "Binary Search",
    description:
      "Implement a binary search algorithm on a sorted array using recursion.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array (comma-separated)",
        type: "text",
        defaultValue: "2, 5, 7, 8, 11, 12",
      },
      { id: "target", label: "Target Value", type: "number", defaultValue: 11 },
    ],
    buttonText: "Binary Search",
  },
  {
    id: "count-occurrences-recursive",
    title: "Count Occurrences in Array",
    description:
      "Write a recursive function to count the occurrences of a specific element in an array.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 2, 4, 2",
      },
      {
        id: "target",
        label: "Element to Count",
        type: "number",
        defaultValue: 2,
      },
    ],
    buttonText: "Count",
  },
  {
    id: "sum-nested-object-recursive",
    title: "Sum Values in Nested Object",
    description:
      "Write a recursive function to sum all the numeric values in a potentially deeply nested object.",
    category: "Recursion",
    inputs: [
      {
        id: "obj",
        label: "Nested Object (JSON)",
        type: "textarea",
        defaultValue: '{"a": 1, "b": {"c": 2, "d": {"e": 3}}}',
      },
    ],
    buttonText: "Sum Values",
  },
  {
    id: "tree-traversal-conceptual",
    title: "Tree Traversal (Conceptual)",
    description:
      "Explain the three main Depth-First Search (DFS) tree traversal methods (In-order, Pre-order, Post-order) and how they are inherently recursive.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Traversals",
  },
  {
    id: "permutations-string-recursive",
    title: "String Permutations",
    description:
      "Write a recursive function to generate all permutations of a string.",
    category: "Recursion",
    inputs: [
      { id: "str", label: "String (short)", type: "text", defaultValue: "abc" },
    ],
    buttonText: "Generate Permutations",
  },
  {
    id: "collatz-conjecture-recursive",
    title: "Collatz Conjecture Steps",
    description:
      "Write a recursive function to find the number of steps it takes for a number to reach 1 using the Collatz conjecture rules (n/2 if even, 3n+1 if odd).",
    category: "Recursion",
    inputs: [
      { id: "num", label: "Starting Number", type: "number", defaultValue: 6 },
    ],
    buttonText: "Count Steps",
  },
  {
    id: "find-all-paths-in-grid-recursive",
    title: "Paths in a Grid",
    description:
      "Write a recursive function to find the number of unique paths from the top-left to the bottom-right of a grid, only moving right and down.",
    category: "Recursion",
    inputs: [
      { id: "rows", label: "Grid Rows (m)", type: "number", defaultValue: 3 },
      {
        id: "cols",
        label: "Grid Columns (n)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Count Paths",
  },
  {
    id: "merge-sort-recursive",
    title: "Merge Sort (Conceptual)",
    description:
      "Explain the recursive 'divide and conquer' nature of the Merge Sort algorithm.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Merge Sort",
  },
  {
    id: "is-even-odd-recursive",
    title: "Even or Odd Check",
    description:
      "Write a recursive function to determine if a number is even or odd without using the modulo operator.",
    category: "Recursion",
    inputs: [
      {
        id: "num",
        label: "Non-negative Number",
        type: "number",
        defaultValue: 5,
      },
    ],
    buttonText: "Check Even/Odd",
  },
  {
    id: "array-of-multiples-recursive",
    title: "Array of Multiples",
    description:
      "Write a recursive function that takes two numbers, `num` and `length`, and creates an array of multiples of `num` up to `length`.",
    category: "Recursion",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 7 },
      { id: "length", label: "Length", type: "number", defaultValue: 5 },
    ],
    buttonText: "Get Multiples",
  },
  {
    id: "product-of-array-recursive",
    title: "Product of Array",
    description:
      "Write a recursive function to find the product of all numbers in an array.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,3,4",
      },
    ],
    buttonText: "Calculate Product",
  },
  {
    id: "find-in-nested-array-recursive",
    title: "Find in Nested Array",
    description:
      "Write a recursive function that checks if a target value exists within a deeply nested array.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Nested Array (JSON)",
        type: "textarea",
        defaultValue: "[1, [2, 3], [[4], 5]]",
      },
      { id: "target", label: "Target Value", type: "number", defaultValue: 4 },
    ],
    buttonText: "Find Value",
  },
  {
    id: "exponentiation-by-squaring-recursive",
    title: "Fast Exponentiation",
    description:
      "Implement the more efficient exponentiation by squaring (binary exponentiation) algorithm using recursion.",
    category: "Recursion",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 3 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate Power",
  },
  {
    id: "decimal-to-binary-recursive",
    title: "Decimal to Binary",
    description:
      "Write a recursive function to convert a decimal number to its binary representation (as a string).",
    category: "Recursion",
    inputs: [
      { id: "num", label: "Decimal Number", type: "number", defaultValue: 13 },
    ],
    buttonText: "Convert to Binary",
  },
  {
    id: "replicate-string-recursive",
    title: "Replicate a String",
    description:
      "Write a recursive function to replicate a string a certain number of times.",
    category: "Recursion",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "ha" },
      {
        id: "times",
        label: "Times to Replicate",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Replicate",
  },
  {
    id: "recursive-every",
    title: "Implement `every` Recursively",
    description:
      "Write a recursive function that mimics the `Array.prototype.every` method.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "2,4,6,8",
      },
    ],
    buttonText: "Check if all are even",
  },
  {
    id: "recursive-some",
    title: "Implement `some` Recursively",
    description:
      "Write a recursive function that mimics the `Array.prototype.some` method.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,3,5,8",
      },
    ],
    buttonText: "Check if some are even",
  },
  {
    id: "recursive-filter",
    title: "Implement `filter` Recursively",
    description:
      "Write a recursive function that mimics the `Array.prototype.filter` method.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,3,4,5,6",
      },
    ],
    buttonText: "Filter for even numbers",
  },
  {
    id: "recursive-map",
    title: "Implement `map` Recursively",
    description:
      "Write a recursive function that mimics the `Array.prototype.map` method.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Double each number",
  },
  {
    id: "tower-of-hanoi-conceptual",
    title: "Tower of Hanoi (Conceptual)",
    description: "Explain the recursive solution to the Tower of Hanoi puzzle.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Hanoi",
  },
  {
    id: "count-consonants-recursive",
    title: "Count Consonants in String",
    description:
      "Write a recursive function to count the number of consonants in a string.",
    category: "Recursion",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello world" },
    ],
    buttonText: "Count Consonants",
  },
  {
    id: "pascals-triangle-recursive",
    title: "Pascal's Triangle Row",
    description:
      "Write a recursive function to return a specific row of Pascal's Triangle.",
    category: "Recursion",
    inputs: [
      {
        id: "row",
        label: "Row Number (0-indexed)",
        type: "number",
        defaultValue: 4,
      },
    ],
    buttonText: "Get Row",
  },
  {
    id: "search-nested-object-recursive",
    title: "Search Nested Object",
    description:
      "Write a recursive function that searches for a key in a nested object and returns its value.",
    category: "Recursion",
    inputs: [
      {
        id: "obj",
        label: "Nested Object (JSON)",
        type: "textarea",
        defaultValue: '{"a": 1, "b": {"c": 2, "d": {"e": "found"}}}',
      },
      { id: "key", label: "Key to Find", type: "text", defaultValue: "e" },
    ],
    buttonText: "Find Key",
  },
  {
    id: "count-down-up-recursive",
    title: "Countdown and Up",
    description:
      "Write a recursive function that logs a countdown from N to 1 and then back up to N.",
    category: "Recursion",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 3 }],
    buttonText: "Run",
  },
  {
    id: "remove-duplicates-recursive",
    title: "Remove Duplicates from Array",
    description:
      "Write a recursive function to remove duplicate elements from an array.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "1,2,2,3,4,3,5",
      },
    ],
    buttonText: "Remove Duplicates",
  },
  {
    id: "string-contains-char-recursive",
    title: "String Contains Character",
    description:
      "Write a recursive function that checks if a string contains a specific character.",
    category: "Recursion",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "javascript" },
      { id: "char", label: "Character", type: "text", defaultValue: "s" },
    ],
    buttonText: "Check",
  },
  {
    id: "length-of-array-recursive",
    title: "Length of Array",
    description:
      "Write a recursive function to find the length of an array without using the `.length` property.",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "a,b,c,d" },
    ],
    buttonText: "Calculate Length",
  },
  {
    id: "is-sorted-recursive",
    title: "Check if Array is Sorted",
    description:
      "Write a recursive function to check if an array of numbers is sorted in ascending order.",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,4" },
    ],
    buttonText: "Check Sort",
  },
  {
    id: "recursive-min",
    title: "Find Minimum in Array",
    description:
      "Write a recursive function to find the minimum value in an array of numbers.",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "5,3,8,2,9" },
    ],
    buttonText: "Find Minimum",
  },
  {
    id: "recursive-max",
    title: "Find Maximum in Array",
    description:
      "Write a recursive function to find the maximum value in an array of numbers.",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "5,3,8,2,9" },
    ],
    buttonText: "Find Maximum",
  },
  {
    id: "deep-reverse-array-recursive",
    title: "Deep Reverse Array",
    description:
      "Write a recursive function that reverses an array and also reverses any nested arrays within it.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Nested Array (JSON)",
        type: "textarea",
        defaultValue: "[1, [2, 3], 4]",
      },
    ],
    buttonText: "Deep Reverse",
  },
  {
    id: "balance-parentheses-recursive",
    title: "Balanced Parentheses Check",
    description:
      "Write a recursive function to check if a string of parentheses is balanced.",
    category: "Recursion",
    inputs: [
      {
        id: "str",
        label: "Parentheses String",
        type: "text",
        defaultValue: "(())",
      },
    ],
    buttonText: "Check Balance",
  },
  {
    id: "get-all-keys-nested-object-recursive",
    title: "Get All Keys from Nested Object",
    description:
      "Write a recursive function to get an array of all keys from a nested object.",
    category: "Recursion",
    inputs: [
      {
        id: "obj",
        label: "Nested Object (JSON)",
        type: "textarea",
        defaultValue: '{"a": 1, "b": {"c": 2}}',
      },
    ],
    buttonText: "Get All Keys",
  },
  {
    id: "subsets-of-set-recursive",
    title: "Subsets of a Set",
    description:
      "Write a recursive function to generate all possible subsets (the power set) of a given set (array).",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array (Set)", type: "text", defaultValue: "1,2,3" },
    ],
    buttonText: "Generate Subsets",
  },
  {
    id: "collect-strings-from-object-recursive",
    title: "Collect Strings from Object",
    description:
      "Write a function that accepts an object and returns an array of all the values in the object that have a typeof string.",
    category: "Recursion",
    inputs: [
      {
        id: "obj",
        label: "Object (JSON)",
        type: "textarea",
        defaultValue: '{"a": "hello", "b": 1, "c": {"d": "world"}}',
      },
    ],
    buttonText: "Collect Strings",
  },
  {
    id: "capitalize-words-recursive",
    title: "Capitalize Words",
    description:
      "Write a recursive function that capitalizes each word in an array of strings.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array of words",
        type: "text",
        defaultValue: "hello,world",
      },
    ],
    buttonText: "Capitalize",
  },
  {
    id: "capitalize-first-letter-recursive",
    title: "Capitalize First Letter of Strings",
    description:
      "Write a recursive function that capitalizes the first letter of each string in an array.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array of strings",
        type: "text",
        defaultValue: "apple,banana,cherry",
      },
    ],
    buttonText: "Capitalize First",
  },
  {
    id: "stringify-numbers-recursive",
    title: "Stringify Numbers in Object",
    description:
      "Write a function that takes an object and finds all of the values which are numbers and converts them to strings.",
    category: "Recursion",
    inputs: [
      {
        id: "obj",
        label: "Object (JSON)",
        type: "textarea",
        defaultValue: '{"num": 1, "test": [], "data": {"val": 4}}',
      },
    ],
    buttonText: "Stringify Numbers",
  },
  {
    id: "tail-call-optimization-conceptual",
    title: "Tail Call Optimization (Conceptual)",
    description:
      "Explain what Tail Call Optimization (TCO) is and show an example of a recursive function that is in tail-call position.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain TCO",
  },
  {
    id: "mutual-recursion",
    title: "Mutual Recursion",
    description:
      "Demonstrate mutual recursion where two or more functions call each other.",
    category: "Recursion",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Check Even/Odd",
  },
  {
    id: "ackermann-function-conceptual",
    title: "Ackermann Function (Conceptual)",
    description:
      "Explain the Ackermann function, a classic example of a total computable function that is not primitive recursive, known for its rapid growth.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Ackermann",
  },
  {
    id: "count-leaves-in-tree-conceptual",
    title: "Count Leaves in a Binary Tree",
    description:
      "Write a recursive function to count the number of leaf nodes (nodes with no children) in a binary tree.",
    category: "Recursion",
    inputs: [],
    buttonText: "Count Leaves (Conceptual)",
  },
  {
    id: "tree-depth-recursive",
    title: "Find Tree Depth",
    description:
      "Write a recursive function to find the maximum depth (or height) of a binary tree.",
    category: "Recursion",
    inputs: [],
    buttonText: "Find Depth (Conceptual)",
  },
  {
    id: "combinations-recursive",
    title: "Combinations of an Array",
    description:
      "Write a recursive function to generate all combinations of a specific size `k` from an array.",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,4" },
      {
        id: "k",
        label: "Combination Size (k)",
        type: "number",
        defaultValue: 2,
      },
    ],
    buttonText: "Generate Combinations",
  },
  {
    id: "coin-change-problem-recursive",
    title: "Coin Change Problem",
    description:
      "Given a set of coin denominations and a total amount, write a recursive function to find the number of ways to make change.",
    category: "Recursion",
    inputs: [
      {
        id: "coins",
        label: "Coins (comma-separated)",
        type: "text",
        defaultValue: "1,2,5",
      },
      { id: "amount", label: "Amount", type: "number", defaultValue: 5 },
    ],
    buttonText: "Count Ways",
  },
  {
    id: "array-includes-recursive",
    title: "Implement `.includes()` Recursively",
    description:
      "Write a recursive function that mimics the behavior of `Array.prototype.includes()`.",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "a,b,c" },
      { id: "target", label: "Target", type: "text", defaultValue: "b" },
    ],
    buttonText: "Check Inclusion",
  },
  {
    id: "array-indexOf-recursive",
    title: "Implement `.indexOf()` Recursively",
    description:
      "Write a recursive function that mimics the behavior of `Array.prototype.indexOf()`.",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "a,b,c" },
      { id: "target", label: "Target", type: "text", defaultValue: "c" },
    ],
    buttonText: "Find Index",
  },
  {
    id: "repeat-function-recursive",
    title: "Repeat a Function Call",
    description:
      "Write a recursive function that calls another function `n` times.",
    category: "Recursion",
    inputs: [
      { id: "n", label: "Times to Call", type: "number", defaultValue: 3 },
    ],
    buttonText: "Call N Times",
  },
  {
    id: "deep-object-clone-recursive",
    title: "Deep Clone an Object",
    description:
      "Write a recursive function to perform a deep clone of a JSON-serializable object.",
    category: "Recursion",
    inputs: [
      {
        id: "obj",
        label: "Object (JSON)",
        type: "textarea",
        defaultValue: '{"a":1, "b":{"c":2}}',
      },
    ],
    buttonText: "Deep Clone",
  },
  {
    id: "find-all-indices-recursive",
    title: "Find All Indices of a Value",
    description:
      "Write a recursive function to find all indices of a specific value in an array.",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,2,1,2" },
      { id: "target", label: "Target Value", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find All Indices",
  },
  {
    id: "luhn-algorithm-recursive-conceptual",
    title: "Luhn Algorithm Check (Conceptual)",
    description:
      "Explain how you could implement the Luhn algorithm for credit card validation using recursion.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Luhn Recursion",
  },
  {
    id: "directory-traversal-conceptual",
    title: "File Directory Traversal (Conceptual)",
    description:
      "Explain how recursion is used to traverse a file system directory and all its subdirectories.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Traversal",
  },
  {
    id: "json-stringify-recursive-conceptual",
    title: "Implement `JSON.stringify` (Conceptual)",
    description:
      "Outline the recursive logic for a function that mimics `JSON.stringify` for objects and arrays.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Logic",
  },
  {
    id: "dom-traversal-recursive-conceptual",
    title: "DOM Traversal (Conceptual)",
    description:
      "Explain how recursion is a natural fit for traversing a DOM tree to find or manipulate elements.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain DOM Traversal",
  },
  {
    id: "quick-sort-conceptual",
    title: "Quick Sort (Conceptual)",
    description:
      "Explain the recursive 'divide and conquer' nature of the Quick Sort algorithm.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Quick Sort",
  },
  {
    id: "object-dot-path-access-recursive",
    title: "Access Object by Path",
    description:
      "Write a function that takes an object and a path string (e.g., 'a.b.c') and returns the nested value.",
    category: "Recursion",
    inputs: [
      {
        id: "obj",
        label: "Object (JSON)",
        type: "textarea",
        defaultValue: '{"a":{"b":{"c":1}}}',
      },
      { id: "path", label: "Path String", type: "text", defaultValue: "a.b.c" },
    ],
    buttonText: "Get Value",
  },
  {
    id: "n-queens-problem-conceptual",
    title: "N-Queens Problem (Conceptual)",
    description:
      "Explain the backtracking recursive approach to solving the N-Queens puzzle (placing N queens on an N×N chessboard so that no two queens threaten each other).",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain N-Queens",
  },
  {
    id: "sudoku-solver-conceptual",
    title: "Sudoku Solver (Conceptual)",
    description:
      "Explain the backtracking recursive approach to solving a Sudoku puzzle.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Sudoku Solver",
  },
  {
    id: "word-break-problem-recursive",
    title: "Word Break Problem",
    description:
      "Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of one or more dictionary words using recursion.",
    category: "Recursion",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "applepenapple" },
      {
        id: "wordDict",
        label: "Dictionary (comma-separated)",
        type: "text",
        defaultValue: "apple,pen",
      },
    ],
    buttonText: "Check Word Break",
  },
  {
    id: "knapsack-problem-conceptual",
    title: "0/1 Knapsack Problem (Conceptual)",
    description:
      "Explain the recursive solution to the 0/1 knapsack problem: given items with weights and values, find the most valuable combination of items that fit in a knapsack of a certain capacity.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Knapsack",
  },
  {
    id: "catalan-numbers-recursive",
    title: "Catalan Numbers",
    description:
      "Write a recursive function to compute the nth Catalan number. Catalan numbers appear in many counting problems.",
    category: "Recursion",
    inputs: [
      { id: "n", label: "Nth Catalan Number", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate Catalan",
  },
  {
    id: "array-pair-sum-sequence",
    title: "Array Pair Sum Sequence",
    description:
      "Given an array of numbers, create a new array where each element is the sum of a pair of elements in the original array. For an odd-length array, the last element is paired with 0.",
    category: "Recursion",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,4,5" },
    ],
    buttonText: "Create Pair Sums",
  },
  {
    id: "deep-equals-recursive",
    title: "Deep Equality Check",
    description:
      "Write a recursive function that performs a deep equality check on two JSON-serializable values (objects, arrays, primitives).",
    category: "Recursion",
    inputs: [
      {
        id: "val1",
        label: "Value 1 (JSON)",
        type: "textarea",
        defaultValue: '{"a": 1, "b": {"c": 2}}',
      },
      {
        id: "val2",
        label: "Value 2 (JSON)",
        type: "textarea",
        defaultValue: '{"a": 1, "b": {"c": 2}}',
      },
    ],
    buttonText: "Deep Compare",
  },
  {
    id: "flood-fill-conceptual",
    title: "Flood Fill Algorithm (Conceptual)",
    description:
      "Explain the recursive flood fill algorithm used in paint programs to fill a contiguous area with a specific color.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Flood Fill",
  },
  {
    id: "tree-includes-recursive",
    title: "Tree Includes Value",
    description:
      "Write a recursive function to check if a value exists in a binary tree.",
    category: "Recursion",
    inputs: [],
    buttonText: "Check Tree (Conceptual)",
  },
  {
    id: "graph-dfs-conceptual",
    title: "Graph DFS (Conceptual)",
    description:
      "Explain how Depth-First Search (DFS) on a graph is a recursive algorithm, using a 'visited' set to avoid infinite loops.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Graph DFS",
  },
  {
    id: "phone-letter-combinations",
    title: "Letter Combinations of a Phone Number",
    description:
      "Given a string containing digits from 2-9, return all possible letter combinations that the number could represent, using recursion.",
    category: "Recursion",
    inputs: [
      { id: "digits", label: "Digits", type: "text", defaultValue: "23" },
    ],
    buttonText: "Generate Combinations",
  },
  {
    id: "digital-root-recursive",
    title: "Digital Root",
    description:
      "Write a recursive function to find the digital root of a number (the recursive sum of its digits until a single-digit number is achieved).",
    category: "Recursion",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 942 }],
    buttonText: "Find Digital Root",
  },
  {
    id: "step-combinations",
    title: "Step Combinations (Climbing Stairs)",
    description:
      "You can climb a staircase 1, 2, or 3 steps at a time. Write a recursive function to find the number of possible ways to reach the top (n steps).",
    category: "Recursion",
    inputs: [
      {
        id: "steps",
        label: "Number of Steps",
        type: "number",
        defaultValue: 4,
      },
    ],
    buttonText: "Count Ways",
  },
  {
    id: "find-uppercase-recursive",
    title: "Find First Uppercase Letter",
    description:
      "Write a recursive function to find the first uppercase letter in a string.",
    category: "Recursion",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "helloWorld" },
    ],
    buttonText: "Find Uppercase",
  },
  {
    id: "memoization-conceptual",
    title: "Memoization (Conceptual)",
    description:
      "Explain memoization as a technique to optimize recursive functions by caching the results of expensive computations.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Memoization",
  },
  {
    id: "permutations-with-duplicates",
    title: "Permutations with Duplicates",
    description:
      "Given a collection of numbers that might contain duplicates, return all possible unique permutations.",
    category: "Recursion",
    inputs: [
      {
        id: "arr",
        label: "Array with Duplicates",
        type: "text",
        defaultValue: "1,1,2",
      },
    ],
    buttonText: "Generate Permutations",
  },
  {
    id: "longest-common-subsequence-conceptual",
    title: "Longest Common Subsequence (Conceptual)",
    description:
      "Explain the recursive approach to finding the length of the longest common subsequence between two strings.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain LCS",
  },
  {
    id: "edit-distance-conceptual",
    title: "Edit Distance (Conceptual)",
    description:
      "Explain the recursive approach to finding the minimum number of operations (insert, delete, substitute) required to change one word into another.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Edit Distance",
  },
  {
    id: "is-prime-recursive",
    title: "Check if Prime",
    description:
      "Write a recursive function to check if a number is a prime number.",
    category: "Recursion",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 7 }],
    buttonText: "Check Prime",
  },
  {
    id: "all-unique-chars-recursive",
    title: "Check for All Unique Characters",
    description:
      "Write a recursive function to check if a string has all unique characters.",
    category: "Recursion",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abcdefg" },
    ],
    buttonText: "Check Uniqueness",
  },
  {
    id: "fractal-generation-conceptual",
    title: "Fractal Generation (Conceptual)",
    description:
      "Explain how recursion is the core principle behind generating fractals like the Sierpinski triangle or a fractal tree.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Fractals",
  },
  {
    id: "is-valid-bst-conceptual",
    title: "Is Valid Binary Search Tree (Conceptual)",
    description:
      "Explain the recursive algorithm to check if a binary tree is a valid Binary Search Tree (BST), passing min/max constraints down the tree.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain BST Validation",
  },
  {
    id: "tree-sum-recursive",
    title: "Sum of Tree Nodes",
    description:
      "Write a recursive function to find the sum of all node values in a binary tree.",
    category: "Recursion",
    inputs: [],
    buttonText: "Sum Tree Nodes (Conceptual)",
  },
  {
    id: "array-interleave-recursive",
    title: "Interleave Two Arrays",
    description:
      "Write a recursive function to interleave two arrays of equal length.",
    category: "Recursion",
    inputs: [
      { id: "arr1", label: "Array 1", type: "text", defaultValue: "a,b,c" },
      { id: "arr2", label: "Array 2", type: "text", defaultValue: "1,2,3" },
    ],
    buttonText: "Interleave",
  },
  {
    id: "is-power-of-two-recursive",
    title: "Is Power of Two",
    description:
      "Write a recursive function to determine if a number is a power of two.",
    category: "Recursion",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 16 }],
    buttonText: "Check Power of Two",
  },
  {
    id: "is-power-of-three-recursive",
    title: "Is Power of Three",
    description:
      "Write a recursive function to determine if a number is a power of three.",
    category: "Recursion",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 27 }],
    buttonText: "Check Power of Three",
  },
  {
    id: "remove-adjacent-duplicates-recursive",
    title: "Remove Adjacent Duplicates",
    description:
      "Write a recursive function to remove adjacent duplicate characters from a string.",
    category: "Recursion",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abbaca" },
    ],
    buttonText: "Remove Duplicates",
  },
  {
    id: "invert-binary-tree-conceptual",
    title: "Invert a Binary Tree (Conceptual)",
    description:
      "Explain the recursive algorithm to invert a binary tree (swap the left and right children of all nodes).",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Inversion",
  },
  {
    id: "decode-ways-conceptual",
    title: "Decode Ways (Conceptual)",
    description:
      "Explain the recursive approach to 'Decode Ways': a message containing letters A-Z is encoded into numbers. Given a string of digits, determine the total number of ways to decode it.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Decode Ways",
  },
  {
    id: "unique-binary-search-trees-conceptual",
    title: "Unique Binary Search Trees (Conceptual)",
    description:
      "Explain the recursive approach (using Catalan numbers) to find the number of structurally unique Binary Search Trees (BST) that can store values 1 through n.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Unique BSTs",
  },
  {
    id: "word-squares-conceptual",
    title: "Word Squares (Conceptual)",
    description:
      "Explain the backtracking recursive approach to finding all word squares from a given list of words.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Word Squares",
  },
  {
    id: "robot-in-a-grid-conceptual",
    title: "Robot in a Grid (Conceptual)",
    description:
      "Imagine a robot sitting on the upper left corner of grid with r rows and c columns. The robot can only move in two directions: right and down. Certain cells are 'off limits'. Design a recursive algorithm to find a path for the robot from the top left to the bottom right.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Robot Path",
  },
  {
    id: "magic-index-conceptual",
    title: "Magic Index (Conceptual)",
    description:
      "A magic index in an array A[0...n-1] is an index such that A[i] = i. Given a sorted array of distinct integers, explain a recursive algorithm to find a magic index, if one exists.",
    category: "Recursion",
    inputs: [],
    buttonText: "Explain Magic Index",
  },
];
