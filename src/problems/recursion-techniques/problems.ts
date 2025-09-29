import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "recursion-factorial",
    title: "Calculate Factorial",
    description:
      "Write a recursive function to calculate the factorial of a non-negative integer n. The factorial of n (n!) is the product of all positive integers less than or equal to n.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Integer (n)", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate Factorial",
  },
  // problem--> 02
  {
    id: "recursion-fibonacci",
    title: "Fibonacci Number",
    description:
      "Write a recursive function to find the nth number in the Fibonacci sequence. The sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [{ id: "n", label: "Index (n)", type: "number", defaultValue: 6 }],
    buttonText: "Calculate Fibonacci",
  },
  // problem--> 03
  {
    id: "recursion-sum-array",
    title: "Sum of Array Elements",
    description:
      "Write a recursive function to calculate the sum of all numbers in an array.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "[1, 2, 3, 4, 5]",
      },
    ],
    buttonText: "Sum Array",
  },
  // problem--> 04
  {
    id: "recursion-power-function",
    title: "Power Function",
    description:
      "Write a recursive function that takes a base and an exponent and returns the result of base raised to the power of exponent. Assume the exponent is a non-negative integer.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 2 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate Power",
  },
  // problem--> 05
  {
    id: "recursion-string-reversal",
    title: "Reverse a String",
    description: "Write a recursive function to reverse a given string.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "str",
        label: "String to reverse",
        type: "text",
        defaultValue: "hello",
      },
    ],
    buttonText: "Reverse String",
  },
  // problem--> 06
  {
    id: "recursion-countdown",
    title: "Countdown",
    description:
      "Write a recursive function that takes a number n and returns an array of numbers from n down to 1.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [{ id: "n", label: "Number (n)", type: "number", defaultValue: 5 }],
    buttonText: "Start Countdown",
  },
  // problem--> 07
  {
    id: "recursion-range-of-numbers",
    title: "Range of Numbers",
    description:
      "Write a recursive function that takes two numbers, startNum and endNum, and returns an array containing all numbers in the range from startNum to endNum (inclusive).",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "startNum",
        label: "Start Number",
        type: "number",
        defaultValue: 1,
      },
      { id: "endNum", label: "End Number", type: "number", defaultValue: 5 },
    ],
    buttonText: "Generate Range",
  },
  // problem--> 08
  {
    id: "recursion-greatest-common-divisor",
    title: "Greatest Common Divisor (GCD)",
    description:
      "Write a recursive function to find the greatest common divisor (GCD) of two positive integers using the Euclidean algorithm.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      { id: "a", label: "First Number", type: "number", defaultValue: 48 },
      { id: "b", label: "Second Number", type: "number", defaultValue: 18 },
    ],
    buttonText: "Find GCD",
  },
  // problem--> 09
  {
    id: "recursion-is-palindrome",
    title: "Check for Palindrome",
    description:
      "Write a recursive function that checks if a given string is a palindrome (reads the same forwards and backward).",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "str",
        label: "String to check",
        type: "text",
        defaultValue: "racecar",
      },
    ],
    buttonText: "Check Palindrome",
  },
  // problem--> 10
  {
    id: "recursion-count-occurrences",
    title: "Count Occurrences in Array",
    description:
      "Write a recursive function to count the number of times a specific element appears in an array.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "[1, 2, 3, 2, 4, 2]",
      },
      {
        id: "target",
        label: "Target Element",
        type: "number",
        defaultValue: 2,
      },
    ],
    buttonText: "Count Occurrences",
  },
  // problem--> 11
  {
    id: "recursion-sum-of-digits",
    title: "Sum of Digits",
    description:
      "Write a recursive function that takes a non-negative integer and returns the sum of its digits.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Integer (n)", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Sum Digits",
  },
  // problem--> 12
  {
    id: "recursion-is-even",
    title: "Is Even?",
    description:
      "Write a recursive function that determines if a positive integer is even without using the modulo (%) operator. Hint: isEven(n) is the same as !isEven(n-1).",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Integer (n)", type: "number", defaultValue: 10 },
    ],
    buttonText: "Check if Even",
  },
  // problem--> 13
  {
    id: "recursion-product-of-array",
    title: "Product of Array Elements",
    description:
      "Write a recursive function that computes the product of all numbers in an array.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "[1, 2, 3, 4]",
      },
    ],
    buttonText: "Calculate Product",
  },
  // problem--> 14
  {
    id: "recursion-decimal-to-binary",
    title: "Decimal to Binary Conversion",
    description:
      "Write a recursive function to convert a positive decimal number into its binary representation (as a string).",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Decimal Number", type: "number", defaultValue: 23 },
    ],
    buttonText: "Convert to Binary",
  },
  // problem--> 15
  {
    id: "recursion-replicate-element",
    title: "Replicate Element",
    description:
      "Write a recursive function that takes a value and a count and returns an array with the value replicated count times.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "element",
        label: "Value to replicate",
        type: "text",
        defaultValue: "hi",
      },
      { id: "count", label: "Count", type: "number", defaultValue: 3 },
    ],
    buttonText: "Replicate Element",
  },
  // problem--> 16
  {
    id: "recursion-binary-search",
    title: "Binary Search",
    description:
      "Implement a recursive binary search algorithm to find the index of a target value in a sorted array of numbers. Return -1 if the target is not found.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array",
        type: "text",
        defaultValue: "[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]",
      },
      { id: "target", label: "Target Value", type: "number", defaultValue: 23 },
    ],
    buttonText: "Run Binary Search",
  },
  // problem--> 17
  {
    id: "recursion-merge-sort",
    title: "Merge Sort",
    description:
      "Implement the recursive Merge Sort algorithm to sort an array of numbers.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Unsorted Array",
        type: "text",
        defaultValue: "[38, 27, 43, 3, 9, 82, 10]",
      },
    ],
    buttonText: "Run Merge Sort",
  },
  // problem--> 18
  {
    id: "recursion-tree-sum",
    title: "Sum of Tree Nodes",
    description:
      "Given a binary tree where each node has a numeric value, write a recursive function to find the sum of all node values. The tree is represented as a nested object.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 10, "left": {"value": 5, "left": null, "right": null}, "right": {"value": 15, "left": null, "right": {"value": 20, "left": null, "right": null}}}',
      },
    ],
    buttonText: "Sum Tree Nodes",
  },
  // problem--> 19
  {
    id: "recursion-tree-depth",
    title: "Maximum Depth of Binary Tree",
    description:
      "Write a recursive function to find the maximum depth (or height) of a binary tree. The depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 3, "left": {"value": 9, "left": null, "right": null}, "right": {"value": 20, "left": {"value": 15, "left": null, "right": null}, "right": {"value": 7, "left": null, "right": null}}}',
      },
    ],
    buttonText: "Find Tree Depth",
  },
  // problem--> 20
  {
    id: "recursion-string-permutations",
    title: "String Permutations",
    description:
      "Write a recursive function that returns all possible permutations of a given string.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "str", label: "Input String", type: "text", defaultValue: "abc" },
    ],
    buttonText: "Generate Permutations",
  },
  // problem--> 21
  {
    id: "recursion-subsets-of-a-set",
    title: "Subsets of a Set (Power Set)",
    description:
      "Write a recursive function that returns all possible subsets (the power set) of a given set of unique elements (represented as an array).",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "set",
        label: "Set as Array",
        type: "text",
        defaultValue: "[1, 2, 3]",
      },
    ],
    buttonText: "Generate Power Set",
  },
  // problem--> 22
  {
    id: "recursion-climbing-stairs",
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. Write a recursive function to find the total number of distinct ways you can climb to the top.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Number of Steps (n)",
        type: "number",
        defaultValue: 4,
      },
    ],
    buttonText: "Count Ways",
  },
  // problem--> 23
  {
    id: "recursion-flatten-array",
    title: "Flatten a Nested Array",
    description:
      "Write a recursive function to flatten a deeply nested array of any depth.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Nested Array",
        type: "text",
        defaultValue: "[1, [2, 3], [4, [5]]]",
      },
    ],
    buttonText: "Flatten Array",
  },
  // problem--> 24
  {
    id: "recursion-pascal-triangle",
    title: "Pascal's Triangle Row",
    description:
      "Write a recursive function that takes a row index and returns that row of Pascal's Triangle as an array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "rowIndex",
        label: "Row Index (0-based)",
        type: "number",
        defaultValue: 4,
      },
    ],
    buttonText: "Get Triangle Row",
  },
  // problem--> 25
  {
    id: "recursion-tree-contains-value",
    title: "Tree Contains Value",
    description:
      "Write a recursive function that checks if a value exists in a binary tree.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 10, "left": {"value": 5}, "right": {"value": 15}}',
      },
      { id: "value", label: "Value to find", type: "number", defaultValue: 5 },
    ],
    buttonText: "Search in Tree",
  },
  // problem--> 26
  {
    id: "recursion-n-queens",
    title: "N-Queens Problem",
    description:
      "The N-Queens puzzle is the problem of placing N chess queens on an N×N chessboard so that no two queens threaten each other. Write a function to find all distinct solutions.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Board Size (N)", type: "number", defaultValue: 4 },
    ],
    buttonText: "Solve N-Queens",
  },
  // problem--> 27
  {
    id: "recursion-sudoku-solver",
    title: "Sudoku Solver",
    description:
      "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the rules of Sudoku. The input is a 9x9 board represented as a 2D array, with 0s for empty cells.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "board",
        label: "Sudoku Board (9x9)",
        type: "textarea",
        defaultValue:
          "[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]]",
      },
    ],
    buttonText: "Solve Sudoku",
  },
  // problem--> 28
  {
    id: "recursion-coin-change",
    title: "Coin Change Combinations",
    description:
      "Given an amount and an array of coin denominations, write a recursive function to find the total number of ways to make change for the amount. You have an infinite supply of each coin.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "amount", label: "Amount", type: "number", defaultValue: 4 },
      {
        id: "coins",
        label: "Coin Denominations",
        type: "text",
        defaultValue: "[1, 2, 3]",
      },
    ],
    buttonText: "Find Combinations",
  },
  // problem--> 29
  {
    id: "recursion-word-search",
    title: "Word Search",
    description:
      'Given a 2D board of characters and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "board",
        label: "Board (2D Array)",
        type: "textarea",
        defaultValue: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]',
      },
      {
        id: "word",
        label: "Word to Find",
        type: "text",
        defaultValue: "ABCCED",
      },
    ],
    buttonText: "Search for Word",
  },
  // problem--> 30
  {
    id: "recursion-tower-of-hanoi",
    title: "Tower of Hanoi",
    description:
      "Solve the classic Tower of Hanoi puzzle. Write a function that returns an array of strings representing the steps to move N disks from a source rod to a destination rod using an auxiliary rod.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "disks",
        label: "Number of Disks",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Solve Hanoi",
  },
  // problem--> 31
  {
    id: "recursion-combinations",
    title: "Combinations",
    description:
      "Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Range up to (n)", type: "number", defaultValue: 4 },
      {
        id: "k",
        label: "Combination size (k)",
        type: "number",
        defaultValue: 2,
      },
    ],
    buttonText: "Find Combinations",
  },
  // problem--> 32
  {
    id: "recursion-generate-parentheses",
    title: "Generate Parentheses",
    description:
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Number of pairs (n)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Generate Parentheses",
  },
  // problem--> 33
  {
    id: "recursion-letter-case-permutation",
    title: "Letter Case Permutation",
    description:
      "Given a string, we can transform every letter individually to be lowercase or uppercase to create another string. Return a list of all possible strings we could create.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "str", label: "Input String", type: "text", defaultValue: "a1b2" },
    ],
    buttonText: "Generate Permutations",
  },
  // problem--> 34
  {
    id: "recursion-decode-string",
    title: "Decode String",
    description:
      'Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. For example, "3[a]2[bc]" becomes "aaabcbc".',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "s",
        label: "Encoded String",
        type: "text",
        defaultValue: "3[a2[c]]",
      },
    ],
    buttonText: "Decode String",
  },
  // problem--> 35
  {
    id: "recursion-tree-in-order-traversal",
    title: "Binary Tree In-Order Traversal",
    description:
      "Write a recursive function to perform an in-order traversal (Left, Root, Right) of a binary tree and return the node values in an array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 4, "left": {"value": 2, "left": {"value": 1, "left": null, "right": null}, "right": {"value": 3, "left": null, "right": null}}, "right": {"value": 5, "left": null, "right": null}}',
      },
    ],
    buttonText: "Traverse Tree",
  },
  // problem--> 36
  {
    id: "recursion-tree-pre-order-traversal",
    title: "Binary Tree Pre-Order Traversal",
    description:
      "Write a recursive function to perform a pre-order traversal (Root, Left, Right) of a binary tree and return the node values in an array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 4, "left": {"value": 2, "left": {"value": 1, "left": null, "right": null}, "right": {"value": 3, "left": null, "right": null}}, "right": {"value": 5, "left": null, "right": null}}',
      },
    ],
    buttonText: "Traverse Tree",
  },
  // problem--> 37
  {
    id: "recursion-tree-post-order-traversal",
    title: "Binary Tree Post-Order Traversal",
    description:
      "Write a recursive function to perform a post-order traversal (Left, Right, Root) of a binary tree and return the node values in an array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 4, "left": {"value": 2, "left": {"value": 1, "left": null, "right": null}, "right": {"value": 3, "left": null, "right": null}}, "right": {"value": 5, "left": null, "right": null}}',
      },
    ],
    buttonText: "Traverse Tree",
  },
  // problem--> 38
  {
    id: "recursion-collect-strings-from-object",
    title: "Collect Strings from Object",
    description:
      "Write a function which accepts an object and returns an array of all the values in the object that have a typeof string.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "obj",
        label: "Object",
        type: "textarea",
        defaultValue:
          '{"a": "hello", "b": 123, "c": {"d": "world", "e": false}}',
      },
    ],
    buttonText: "Collect Strings",
  },
  // problem--> 39
  {
    id: "recursion-fibonacci-memoization",
    title: "Fibonacci Number with Memoization",
    description:
      "Write an efficient recursive function to find the nth Fibonacci number. Use memoization to avoid redundant calculations.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [{ id: "n", label: "Index (n)", type: "number", defaultValue: 20 }],
    buttonText: "Calculate Efficiently",
  },
  // problem--> 40
  {
    id: "recursion-nested-even-sum",
    title: "Nested Even Sum",
    description:
      "Write a recursive function that returns the sum of all even numbers in an object which may contain nested objects.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "obj",
        label: "Nested Object",
        type: "textarea",
        defaultValue: '{"a": 2, "b": {"c": 3, "d": 4}, "e": 5, "f": {"g": 6}}',
      },
    ],
    buttonText: "Calculate Sum",
  },
  // problem--> 41
  {
    id: "recursion-capitalize-words",
    title: "Capitalize Words in Array",
    description:
      "Write a recursive function that, given an array of strings, returns a new array containing each word capitalized.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array of strings",
        type: "text",
        defaultValue: '["apple", "banana", "cherry"]',
      },
    ],
    buttonText: "Capitalize Words",
  },
  // problem--> 42
  {
    id: "recursion-stringify-numbers",
    title: "Stringify Numbers in Object",
    description:
      "Write a function that takes an object and finds all of the values which are numbers and converts them to strings. Recursion should be used to handle nested objects.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "obj",
        label: "Nested Object",
        type: "textarea",
        defaultValue:
          '{"num": 1, "test": [], "data": {"val": 4, "info": {"isRight": true, "blah": 123}}}',
      },
    ],
    buttonText: "Stringify Numbers",
  },
  // problem--> 43
  {
    id: "recursion-is-sorted",
    title: "Check if Array is Sorted",
    description:
      "Write a recursive function that checks if an array of numbers is sorted in ascending order.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "[1, 2, 4, 8, 10]",
      },
    ],
    buttonText: "Check If Sorted",
  },
  // problem--> 44
  {
    id: "recursion-reverse-linked-list",
    title: "Reverse a Linked List",
    description:
      "Write a recursive function to reverse a singly linked list. The list is represented by its head node.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "list",
        label: "Linked List Head Object",
        type: "textarea",
        defaultValue:
          '{"value": 1, "next": {"value": 2, "next": {"value": 3, "next": null}}}',
      },
    ],
    buttonText: "Reverse List",
  },
  // problem--> 45
  {
    id: "recursion-path-sum-in-tree",
    title: "Path Sum in Binary Tree",
    description:
      "Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 5, "left": {"value": 4, "left": {"value": 11, "left": {"value": 7}, "right": {"value": 2}}}, "right": {"value": 8, "left": {"value": 13}, "right": {"value": 4, "right": {"value": 1}}}}',
      },
      { id: "sum", label: "Target Sum", type: "number", defaultValue: 22 },
    ],
    buttonText: "Find Path Sum",
  },
  // problem--> 46
  {
    id: "recursion-permutations-with-duplicates",
    title: "Permutations with Duplicates",
    description:
      "Given a collection of numbers that might contain duplicates, return all possible unique permutations.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Array of numbers",
        type: "text",
        defaultValue: "[1, 1, 2]",
      },
    ],
    buttonText: "Generate Permutations",
  },
  // problem--> 47
  {
    id: "recursion-subsets-with-duplicates",
    title: "Subsets with Duplicates",
    description:
      "Given a collection of integers that might contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Array of numbers",
        type: "text",
        defaultValue: "[1, 2, 2]",
      },
    ],
    buttonText: "Generate Subsets",
  },
  // problem--> 48
  {
    id: "recursion-combination-sum",
    title: "Combination Sum",
    description:
      "Given a set of candidate numbers (without duplicates) and a target number, find all unique combinations in candidates where the candidate numbers sum to target. The same repeated number may be chosen from candidates unlimited number of times.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "candidates",
        label: "Candidate Numbers",
        type: "text",
        defaultValue: "[2, 3, 6, 7]",
      },
      { id: "target", label: "Target Sum", type: "number", defaultValue: 7 },
    ],
    buttonText: "Find Combinations",
  },
  // problem--> 49
  {
    id: "recursion-palindrome-partitioning",
    title: "Palindrome Partitioning",
    description:
      "Given a string, partition it such that every substring of the partition is a palindrome. Return all possible palindrome partitionings.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s", label: "Input String", type: "text", defaultValue: "aab" },
    ],
    buttonText: "Partition String",
  },
  // problem--> 50
  {
    id: "recursion-quick-sort",
    title: "Quick Sort",
    description:
      "Implement the recursive Quick Sort algorithm to sort an array of numbers.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Unsorted Array",
        type: "text",
        defaultValue: "[10, 80, 30, 90, 40, 50, 70]",
      },
    ],
    buttonText: "Run Quick Sort",
  },
  // problem--> 51
  {
    id: "recursion-count-vowels",
    title: "Count Vowels in String",
    description:
      "Write a recursive function to count the number of vowels (a, e, i, o, u) in a string.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "str",
        label: "Input String",
        type: "text",
        defaultValue: "hello world",
      },
    ],
    buttonText: "Count Vowels",
  },
  // problem--> 52
  {
    id: "recursion-is-valid-bst",
    title: "Validate Binary Search Tree",
    description:
      "Given a binary tree, determine if it is a valid binary search tree (BST). A BST has the property that all values in the left subtree are less than the root, and all values in the right subtree are greater.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 5, "left": {"value": 1}, "right": {"value": 7, "left": {"value": 6}, "right": {"value": 8}}}',
      },
    ],
    buttonText: "Validate BST",
  },
  // problem--> 53
  {
    id: "recursion-tiling-problem",
    title: "Tiling Problem",
    description:
      'Given a "2 x n" board and tiles of size "2 x 1", count the number of ways to tile the given board using the 2 x 1 tiles. A tile can either be placed horizontally or vertically.',
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Board length (n)", type: "number", defaultValue: 4 },
    ],
    buttonText: "Count Tiling Ways",
  },
  // problem--> 54
  {
    id: "recursion-all-paths-in-grid",
    title: "All Paths in a Grid",
    description:
      "Given an M x N grid, find the number of all possible paths from the top-left corner to the bottom-right corner. You can only move down or right at any point.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "m", label: "Grid Rows (M)", type: "number", defaultValue: 3 },
      { id: "n", label: "Grid Columns (N)", type: "number", defaultValue: 3 },
    ],
    buttonText: "Count Paths",
  },
  // problem--> 55
  {
    id: "recursion-word-break",
    title: "Word Break",
    description:
      "Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of one or more dictionary words. Use recursion.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "leetcode" },
      {
        id: "wordDict",
        label: "Word Dictionary",
        type: "text",
        defaultValue: '["leet", "code"]',
      },
    ],
    buttonText: "Check Word Break",
  },
  // problem--> 56
  {
    id: "recursion-find-max-in-array",
    title: "Find Maximum in Array",
    description:
      "Write a recursive function to find the maximum number in an array.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "[1, 5, 2, 9, 3]",
      },
    ],
    buttonText: "Find Maximum",
  },
  // problem--> 57
  {
    id: "recursion-lca-of-bst",
    title: "Lowest Common Ancestor of a BST",
    description:
      "Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "BST Object",
        type: "textarea",
        defaultValue:
          '{"value": 6, "left": {"value": 2, "left": {"value": 0}, "right": {"value": 4}}, "right": {"value": 8, "left": {"value": 7}, "right": {"value": 9}}}',
      },
      { id: "p", label: "First Node Value", type: "number", defaultValue: 2 },
      { id: "q", label: "Second Node Value", type: "number", defaultValue: 8 },
    ],
    buttonText: "Find LCA",
  },
  // problem--> 58
  {
    id: "recursion-balanced-binary-tree",
    title: "Balanced Binary Tree",
    description:
      "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 3, "left": {"value": 9}, "right": {"value": 20, "left": {"value": 15}, "right": {"value": 7}}}',
      },
    ],
    buttonText: "Check Balance",
  },
  // problem--> 59
  {
    id: "recursion-regular-expression-matching",
    title: "Regular Expression Matching",
    description:
      "Implement regular expression matching with support for '.' and '*'. '.' Matches any single character. '*' Matches zero or more of the preceding element.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "aab" },
      { id: "p", label: "Pattern", type: "text", defaultValue: "c*a*b" },
    ],
    buttonText: "Match Pattern",
  },
  // problem--> 60
  {
    id: "recursion-digital-root",
    title: "Digital Root",
    description:
      "The digital root is the recursive sum of digits of a number until a single-digit number is achieved. Write a function that calculates the digital root of a non-negative integer.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Integer (n)", type: "number", defaultValue: 38 },
    ],
    buttonText: "Calculate Digital Root",
  },
  // problem--> 61
  {
    id: "recursion-find-first-occurrence",
    title: "Find First Occurrence",
    description:
      "Given an array and a target element, write a recursive function to find the index of the first occurrence of the target. Return -1 if not found.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "[1, 2, 3, 2, 4]",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find First Index",
  },
  // problem--> 62
  {
    id: "recursion-find-last-occurrence",
    title: "Find Last Occurrence",
    description:
      "Given an array and a target element, write a recursive function to find the index of the last occurrence of the target. Return -1 if not found.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "[1, 2, 3, 2, 4]",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Last Index",
  },
  // problem--> 63
  {
    id: "recursion-print-pattern",
    title: "Print a Pattern",
    description:
      "Write a recursive function that takes an integer n and prints a pattern. For n=4, it should print: ****, ***, **, *. The result should be an array of strings.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [{ id: "n", label: "Number (n)", type: "number", defaultValue: 4 }],
    buttonText: "Print Pattern",
  },
  // problem--> 64
  {
    id: "recursion-tree-leaf-count",
    title: "Count Leaf Nodes in a Tree",
    description:
      "Write a recursive function to count the number of leaf nodes (nodes with no children) in a binary tree.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 1, "left": {"value": 2}, "right": {"value": 3, "left": {"value": 4}, "right": {"value": 5}}}',
      },
    ],
    buttonText: "Count Leaf Nodes",
  },
  // problem--> 65
  {
    id: "recursion-josephus-problem",
    title: "Josephus Problem",
    description:
      "There are n people standing in a circle waiting to be executed. The counting out begins at some point in the circle and proceeds around the circle in a fixed direction. In each step, a certain number of people k are skipped and the next person is executed. The elimination proceeds around the circle. Find the position of the last person remaining.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Number of people (n)",
        type: "number",
        defaultValue: 5,
      },
      { id: "k", label: "Skip count (k)", type: "number", defaultValue: 2 },
    ],
    buttonText: "Solve Josephus Problem",
  },
  // problem--> 66
  {
    id: "recursion-phone-number-mnemonics",
    title: "Phone Number Mnemonics",
    description:
      "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "digits",
        label: "Digits String",
        type: "text",
        defaultValue: "23",
      },
    ],
    buttonText: "Find Combinations",
  },
  // problem--> 67
  {
    id: "recursion-flood-fill",
    title: "Flood Fill",
    description:
      'An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image. You are given a starting pixel (sr, sc) and a new color. "Flood fill" the image. To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with the new color.',
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "image",
        label: "Image Grid",
        type: "textarea",
        defaultValue: "[[1,1,1],[1,1,0],[1,0,1]]",
      },
      { id: "sr", label: "Start Row", type: "number", defaultValue: 1 },
      { id: "sc", label: "Start Column", type: "number", defaultValue: 1 },
      { id: "newColor", label: "New Color", type: "number", defaultValue: 2 },
    ],
    buttonText: "Fill Image",
  },
  // problem--> 68
  {
    id: "recursion-unique-paths-with-obstacles",
    title: "Unique Paths with Obstacles",
    description:
      "You are given an m x n integer array grid. There is a robot on the top-left corner. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner. Now consider if some cells are obstacles. An obstacle is marked as 1. How many unique paths would there be?",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "obstacleGrid",
        label: "Grid with Obstacles",
        type: "textarea",
        defaultValue: "[[0,0,0],[0,1,0],[0,0,0]]",
      },
    ],
    buttonText: "Count Paths",
  },
  // problem--> 69
  {
    id: "recursion-gray-code",
    title: "Gray Code",
    description:
      "The gray code is a binary numeral system where two successive values differ in only one bit. Given an integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Number of bits (n)", type: "number", defaultValue: 2 },
    ],
    buttonText: "Generate Gray Code",
  },
  // problem--> 70
  {
    id: "recursion-deep-clone-object",
    title: "Deep Clone an Object",
    description:
      "Write a recursive function to create a deep clone of a JSON-serializable object. A deep clone means that all nested objects and arrays are also cloned, not just referenced.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "obj",
        label: "Object to clone",
        type: "textarea",
        defaultValue: '{"a": 1, "b": {"c": [2, 3]}}',
      },
    ],
    buttonText: "Deep Clone Object",
  },
  // problem--> 71
  {
    id: "recursion-ackermann-function",
    title: "Ackermann Function",
    description:
      "Implement the Ackermann function, a classic example of a recursive function that is not primitive recursive. A(m, n) is defined as: n+1 if m=0; A(m-1, 1) if m>0 and n=0; A(m-1, A(m, n-1)) if m>0 and n>0.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "m", label: "m", type: "number", defaultValue: 2 },
      { id: "n", label: "n", type: "number", defaultValue: 1 },
    ],
    buttonText: "Calculate Ackermann",
  },
  // problem--> 72
  {
    id: "recursion-remove-duplicates-from-sorted-list",
    title: "Remove Duplicates from Sorted List",
    description:
      "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "head",
        label: "Linked List Head Object",
        type: "textarea",
        defaultValue:
          '{"value": 1, "next": {"value": 1, "next": {"value": 2, "next": null}}}',
      },
    ],
    buttonText: "Remove Duplicates",
  },
  // problem--> 73
  {
    id: "recursion-tree-is-symmetric",
    title: "Symmetric Tree",
    description:
      "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 1, "left": {"value": 2, "left": {"value": 3}, "right": {"value": 4}}, "right": {"value": 2, "left": {"value": 4}, "right": {"value": 3}}}',
      },
    ],
    buttonText: "Check Symmetry",
  },
  // problem--> 74
  {
    id: "recursion-search-in-bst",
    title: "Search in a Binary Search Tree",
    description:
      "You are given the root of a binary search tree (BST) and an integer val. Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "root",
        label: "BST Root Object",
        type: "textarea",
        defaultValue:
          '{"value": 4, "left": {"value": 2, "left": {"value": 1}, "right": {"value": 3}}, "right": {"value": 7}}',
      },
      { id: "val", label: "Value to search", type: "number", defaultValue: 2 },
    ],
    buttonText: "Search in BST",
  },
  // problem--> 75
  {
    id: "recursion-construct-bst-from-sorted-array",
    title: "Convert Sorted Array to Binary Search Tree",
    description:
      "Given an integer array where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Sorted Array",
        type: "text",
        defaultValue: "[-10, -3, 0, 5, 9]",
      },
    ],
    buttonText: "Convert to BST",
  },
  // problem--> 76
  {
    id: "recursion-expression-add-operators",
    title: "Expression Add Operators",
    description:
      "Given a string num that contains only digits and an integer target, return all possibilities to add binary operators (+, -, or *) between the digits of num so that the resultant expression evaluates to the target value.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "num", label: "Number String", type: "text", defaultValue: "123" },
      { id: "target", label: "Target Value", type: "number", defaultValue: 6 },
    ],
    buttonText: "Find Expressions",
  },
  // problem--> 77
  {
    id: "recursion-knapsack-problem",
    title: "0/1 Knapsack Problem",
    description:
      "Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "values",
        label: "Values Array",
        type: "text",
        defaultValue: "[60, 100, 120]",
      },
      {
        id: "weights",
        label: "Weights Array",
        type: "text",
        defaultValue: "[10, 20, 30]",
      },
      { id: "W", label: "Knapsack Capacity", type: "number", defaultValue: 50 },
    ],
    buttonText: "Solve Knapsack",
  },
  // problem--> 78
  {
    id: "recursion-longest-common-subsequence",
    title: "Longest Common Subsequence",
    description:
      "Given two strings, find the length of the longest common subsequence. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "text1",
        label: "First String",
        type: "text",
        defaultValue: "abcde",
      },
      {
        id: "text2",
        label: "Second String",
        type: "text",
        defaultValue: "ace",
      },
    ],
    buttonText: "Find LCS Length",
  },
  // problem--> 79
  {
    id: "recursion-edit-distance",
    title: "Edit Distance",
    description:
      "Given two strings, find the minimum number of operations (insert, delete, or replace a character) required to convert one string to the other.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "word1", label: "First Word", type: "text", defaultValue: "horse" },
      { id: "word2", label: "Second Word", type: "text", defaultValue: "ros" },
    ],
    buttonText: "Calculate Distance",
  },
  // problem--> 80
  {
    id: "recursion-all-paths-source-to-target-graph",
    title: "All Paths From Source to Target (Graph)",
    description:
      "Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n-1, find all possible paths from node 0 to node n-1 and return them in any order. The graph is given as an adjacency list.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "graph",
        label: "Graph (Adjacency List)",
        type: "textarea",
        defaultValue: "[[1,2],[3],[3],[]]",
      },
    ],
    buttonText: "Find All Paths",
  },
  // problem--> 81
  {
    id: "recursion-count-and-say",
    title: "Count and Say",
    description:
      "The count-and-say sequence is the sequence of integers with the first five terms as following: 1, 11, 21, 1211, 111221. Given an integer n, generate the nth term of the count-and-say sequence.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [{ id: "n", label: "Term (n)", type: "number", defaultValue: 4 }],
    buttonText: "Generate Term",
  },
  // problem--> 82
  {
    id: "recursion-group-sum",
    title: "Group Sum",
    description:
      "Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target? This is a classic backtracking problem.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array of Integers",
        type: "text",
        defaultValue: "[2, 4, 8]",
      },
      { id: "target", label: "Target Sum", type: "number", defaultValue: 10 },
    ],
    buttonText: "Check for Group Sum",
  },
  // problem--> 83
  {
    id: "recursion-group-sum-clump",
    title: "Group Sum with Clumps",
    description:
      "Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target, with this additional constraint: if a value in the array is chosen to be in the group, all adjacent identical values must also be chosen.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array of Integers",
        type: "text",
        defaultValue: "[2, 4, 4, 8]",
      },
      { id: "target", label: "Target Sum", type: "number", defaultValue: 10 },
    ],
    buttonText: "Check for Group Sum",
  },
  // problem--> 84
  {
    id: "recursion-magic-index",
    title: "Magic Index",
    description:
      "A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array of Integers",
        type: "text",
        defaultValue: "[-10, -5, 0, 3, 7]",
      },
    ],
    buttonText: "Find Magic Index",
  },
  // problem--> 85
  {
    id: "recursion-paint-fill",
    title: "Paint Fill",
    description:
      'Implement the "paint fill" function that one might see on many image editing programs. That is, given a screen (represented by a 2D array of colors), a point, and a new color, fill in the surrounding area until the color changes from the original color.',
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "screen",
        label: "Screen (2D Array)",
        type: "textarea",
        defaultValue: "[[1,1,1,1],[1,1,2,1],[1,2,2,2],[0,0,0,2]]",
      },
      { id: "r", label: "Start Row", type: "number", defaultValue: 1 },
      { id: "c", label: "Start Column", type: "number", defaultValue: 1 },
      { id: "newColor", label: "New Color", type: "number", defaultValue: 3 },
    ],
    buttonText: "Fill with Paint",
  },
  // problem--> 86
  {
    id: "recursion-robot-in-a-grid",
    title: "Robot in a Grid",
    description:
      'Imagine a robot sitting on the upper left corner of grid with r rows and c columns. The robot can only move in two directions: right and down. Certain cells are "off limits". Design an algorithm to find a path for the robot from the top left to the bottom right.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "grid",
        label: "Grid (0=free, 1=off-limits)",
        type: "textarea",
        defaultValue: "[[0,0,0],[0,1,0],[0,0,0]]",
      },
    ],
    buttonText: "Find Robot Path",
  },
  // problem--> 87
  {
    id: "recursion-optimal-bst",
    title: "Optimal Binary Search Tree",
    description:
      "Given a sorted array of keys and an array of frequencies, find the cost of the optimal binary search tree. The cost of a BST is the sum of (key * level) for all keys.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "keys",
        label: "Keys Array",
        type: "text",
        defaultValue: "[10, 12, 20]",
      },
      {
        id: "freq",
        label: "Frequencies Array",
        type: "text",
        defaultValue: "[34, 8, 50]",
      },
    ],
    buttonText: "Find Optimal Cost",
  },
  // problem--> 88
  {
    id: "recursion-matrix-chain-multiplication",
    title: "Matrix Chain Multiplication",
    description:
      "Given a sequence of matrices, find the most efficient way to multiply these matrices together. The problem is not actually to perform the multiplications, but merely to decide the sequence of the matrix multiplications.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "dims",
        label: "Matrix Dimensions Array",
        type: "text",
        defaultValue: "[10, 30, 5, 60]",
      },
    ],
    buttonText: "Find Optimal Order",
  },
  // problem--> 89
  {
    id: "recursion-print-all-subsequences",
    title: "Print All Subsequences",
    description:
      "Given a string, print all of its subsequences. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "str", label: "Input String", type: "text", defaultValue: "abc" },
    ],
    buttonText: "Generate Subsequences",
  },
  // problem--> 90
  {
    id: "recursion-check-ab",
    title: "Check AB String Rules",
    description:
      "Suppose you have a string made up of only 'a's and 'b's. Write a recursive function that checks if the string follows the following rules: 1. the string begins with an 'a'. 2. each 'a' is followed by nothing or an 'a' or \"bb\". 3. each \"bb\" is followed by nothing or an 'a'.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "str", label: "Input String", type: "text", defaultValue: "abb" },
    ],
    buttonText: "Check String Rules",
  },
  // problem--> 91
  {
    id: "recursion-staircase-search",
    title: "Staircase Search in 2D Array",
    description:
      "Given an M x N matrix that is sorted row-wise and column-wise, write a recursive function to search for a key.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "matrix",
        label: "Sorted Matrix",
        type: "textarea",
        defaultValue:
          "[[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]]",
      },
      { id: "key", label: "Search Key", type: "number", defaultValue: 29 },
    ],
    buttonText: "Search Matrix",
  },
  // problem--> 92
  {
    id: "recursion-friends-pairing",
    title: "Friends Pairing Problem",
    description:
      "Given n friends who want to go to a party, each one can remain single or can be paired up with some other friend. Each friend can be paired only once. Find the total number of ways in which friends can remain single or can be paired up.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Number of Friends", type: "number", defaultValue: 3 },
    ],
    buttonText: "Count Pairings",
  },
  // problem--> 93
  {
    id: "recursion-all-indices-of-number",
    title: "All Indices of a Number",
    description:
      "Given an array of length N and an integer x, you want to find all the indices where x is present in the input array. Save all the indices in an array and return it.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "[9, 8, 10, 8, 8]",
      },
      { id: "x", label: "Number to find", type: "number", defaultValue: 8 },
    ],
    buttonText: "Find All Indices",
  },
  // problem--> 94
  {
    id: "recursion-power-set-lexicographical",
    title: "Power Set in Lexicographical Order",
    description:
      "Given a string, find all its subsequences (power set) in lexicographically sorted order.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "str", label: "Input String", type: "text", defaultValue: "cab" },
    ],
    buttonText: "Generate Power Set",
  },
  // problem--> 95
  {
    id: "recursion-combination-sum-ii",
    title: "Combination Sum II",
    description:
      "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "candidates",
        label: "Candidates Array",
        type: "text",
        defaultValue: "[10,1,2,7,6,1,5]",
      },
      { id: "target", label: "Target Sum", type: "number", defaultValue: 8 },
    ],
    buttonText: "Find Combinations",
  },
  // problem--> 96
  {
    id: "recursion-beautiful-arrangement",
    title: "Beautiful Arrangement",
    description:
      "Suppose you have n integers labeled 1 through n. A permutation of those n integers perm is called a beautiful arrangement if for every i (1-indexed), either perm[i-1] is divisible by i, or i is divisible by perm[i-1]. Given an integer n, return the number of the beautiful arrangements that you can construct.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [{ id: "n", label: "Number (n)", type: "number", defaultValue: 2 }],
    buttonText: "Count Arrangements",
  },
  // problem--> 97
  {
    id: "recursion-target-sum",
    title: "Target Sum",
    description:
      "You are given an integer array nums and an integer target. You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers. Return the number of different expressions that you can build, which evaluates to target.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Numbers Array",
        type: "text",
        defaultValue: "[1,1,1,1,1]",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Expressions",
  },
  // problem--> 98
  {
    id: "recursion-permutations-in-string",
    title: "Find all Permutations of a Substring",
    description:
      "Given two strings s1 and s2, return true if s2 contains a permutation of s1. In other words, one of s1's permutations is the substring of s2.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s1", label: "Substring s1", type: "text", defaultValue: "ab" },
      {
        id: "s2",
        label: "Main String s2",
        type: "text",
        defaultValue: "eidbaooo",
      },
    ],
    buttonText: "Check for Permutation",
  },
  // problem--> 99
  {
    id: "recursion-shopping-offers",
    title: "Shopping Offers",
    description:
      "In a special shopping mall, you can buy items with prices, and there are special offers. An offer is represented as a special list of items with a discounted price. You want to buy a specific number of items (needs). Find the lowest price to purchase your shopping list.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "price",
        label: "Prices of items",
        type: "text",
        defaultValue: "[2,5]",
      },
      {
        id: "special",
        label: "Special Offers",
        type: "textarea",
        defaultValue: "[[3,0,5],[1,2,10]]",
      },
      {
        id: "needs",
        label: "Items needed",
        type: "text",
        defaultValue: "[3,2]",
      },
    ],
    buttonText: "Find Lowest Price",
  },
  // problem--> 100
  {
    id: "recursion-wildcard-matching",
    title: "Wildcard Matching",
    description:
      "Implement wildcard pattern matching with support for '?' and '*'. '?' Matches any single character. '*' Matches any sequence of characters (including the empty sequence).",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "adceb" },
      { id: "p", label: "Pattern", type: "text", defaultValue: "*a*b" },
    ],
    buttonText: "Match Pattern",
  },
  // problem--> 101
  {
    id: "recursion-print-nodes-at-k-distance",
    title: "Print Nodes at K Distance",
    description:
      "Given a binary tree, a target node, and an integer k, return an array of the values of all nodes that have a distance k from the target node.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value":3,"left":{"value":5,"left":{"value":6},"right":{"value":2,"left":{"value":7},"right":{"value":4}}},"right":{"value":1,"left":{"value":0},"right":{"value":8}}}',
      },
      {
        id: "targetValue",
        label: "Target Node Value",
        type: "number",
        defaultValue: 5,
      },
      { id: "k", label: "Distance K", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Nodes",
  },
  // problem--> 102
  {
    id: "recursion-flatten-binary-tree-to-linked-list",
    title: "Flatten Binary Tree to Linked List",
    description:
      'Given the root of a binary tree, flatten the tree into a "linked list" where the right child pointer points to the next node in the pre-order traversal and the left child pointer is always null.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value":1,"left":{"value":2,"left":{"value":3},"right":{"value":4}},"right":{"value":5,"right":{"value":6}}}',
      },
    ],
    buttonText: "Flatten Tree",
  },
  // problem--> 103
  {
    id: "recursion-partition-to-k-equal-sum-subsets",
    title: "Partition to K Equal Sum Subsets",
    description:
      "Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Numbers Array",
        type: "text",
        defaultValue: "[4,3,2,3,5,2,1]",
      },
      {
        id: "k",
        label: "Number of Subsets (k)",
        type: "number",
        defaultValue: 4,
      },
    ],
    buttonText: "Check Partition",
  },
  // problem--> 104
  {
    id: "recursion-construct-quad-tree",
    title: "Construct Quad Tree",
    description:
      "Given a n * n matrix grid of 0's and 1's, represent the grid using a Quad-Tree. A Quad-Tree is a tree data structure in which each internal node has exactly four children.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "grid",
        label: "N x N Grid",
        type: "textarea",
        defaultValue: "[[0,1],[1,0]]",
      },
    ],
    buttonText: "Construct Tree",
  },
  // problem--> 105
  {
    id: "recursion-verbal-arithmetic-puzzle",
    title: "Verbal Arithmetic Puzzle",
    description:
      "Given an equation, represented by words on the left side and the result on the right side. You need to assign digits to letters to make the equation true. Each character is a unique digit. Return true if it's possible to solve the equation.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "words",
        label: "Words Array",
        type: "text",
        defaultValue: '["SEND","MORE"]',
      },
      {
        id: "result",
        label: "Result Word",
        type: "text",
        defaultValue: "MONEY",
      },
    ],
    buttonText: "Solve Puzzle",
  },
  // problem--> 106
  {
    id: "recursion-string-to-integer-atoi",
    title: "String to Integer (atoi)",
    description:
      "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function). Use recursion.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "s", label: "Input String", type: "text", defaultValue: "   -42" },
    ],
    buttonText: "Convert to Integer",
  },
  // problem--> 107
  {
    id: "recursion-reverse-nodes-in-k-group",
    title: "Reverse Nodes in k-Group",
    description:
      "Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "list",
        label: "Linked List Head Object",
        type: "textarea",
        defaultValue:
          '{"value": 1, "next": {"value": 2, "next": {"value": 3, "next": {"value": 4, "next": {"value": 5, "next": null}}}}}',
      },
      { id: "k", label: "Group size (k)", type: "number", defaultValue: 2 },
    ],
    buttonText: "Reverse List Groups",
  },
  // problem--> 108
  {
    id: "recursion-remove-invalid-parentheses",
    title: "Remove Invalid Parentheses",
    description:
      "Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid. Return all possible results.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s", label: "Input String", type: "text", defaultValue: "()())()" },
    ],
    buttonText: "Remove Invalid",
  },
  // problem--> 109
  {
    id: "recursion-split-array-into-fibonacci-sequence",
    title: "Split Array into Fibonacci Sequence",
    description:
      'You are given a string of digits num, such as "123456579". You can split it into a Fibonacci-like sequence [123, 456, 579]. Return any such sequence.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "num",
        label: "Number String",
        type: "text",
        defaultValue: "11235813",
      },
    ],
    buttonText: "Split into Sequence",
  },
  // problem--> 110
  {
    id: "recursion-solve-the-maze",
    title: "Solve the Maze",
    description:
      "Given a 2D array representing a maze, a start point, and a destination, determine if a path exists. 1 represents walls, 0 represents walkable space.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "maze",
        label: "Maze Grid",
        type: "textarea",
        defaultValue:
          "[[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]]",
      },
      {
        id: "start",
        label: "Start [row, col]",
        type: "text",
        defaultValue: "[0,4]",
      },
      {
        id: "destination",
        label: "Destination [row, col]",
        type: "text",
        defaultValue: "[4,4]",
      },
    ],
    buttonText: "Solve Maze",
  },
  // problem--> 111
  {
    id: "recursion-number-of-islands",
    title: "Number of Islands",
    description:
      "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "grid",
        label: "Grid of 1s and 0s",
        type: "textarea",
        defaultValue:
          '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      },
    ],
    buttonText: "Count Islands",
  },
  // problem--> 112
  {
    id: "recursion-longest-increasing-path-in-matrix",
    title: "Longest Increasing Path in a Matrix",
    description:
      "Given an m x n integers matrix, return the length of the longest increasing path in the matrix. From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "matrix",
        label: "Matrix",
        type: "textarea",
        defaultValue: "[[9,9,4],[6,6,8],[2,1,1]]",
      },
    ],
    buttonText: "Find Longest Path",
  },
  // problem--> 113
  {
    id: "recursion-restore-ip-addresses",
    title: "Restore IP Addresses",
    description:
      "A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros. Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "s",
        label: "Digit String",
        type: "text",
        defaultValue: "25525511135",
      },
    ],
    buttonText: "Restore IPs",
  },
  // problem--> 114
  {
    id: "recursion-word-squares",
    title: "Word Squares",
    description:
      "Given an array of unique strings words, return all the word squares you can build from words. A sequence of strings forms a valid word square if the kth row and column read the same string, for 0 <= k < max(numRows, numColumns).",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "words",
        label: "Array of Words",
        type: "text",
        defaultValue: '["area","lead","wall","lady","ball"]',
      },
    ],
    buttonText: "Build Word Squares",
  },
  // problem--> 115
  {
    id: "recursion-optimal-account-balancing",
    title: "Optimal Account Balancing",
    description:
      "You are given an array of transactions where transactions[i] = [from, to, amount]. You are asked to settle all the debts with the minimum number of transactions. Return the minimum number of transactions required.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "transactions",
        label: "Transactions Array",
        type: "textarea",
        defaultValue: "[[0,1,10],[2,0,5]]",
      },
    ],
    buttonText: "Settle Debts",
  },
  // problem--> 116
  {
    id: "recursion-file-system-traversal",
    title: "File System Traversal",
    description:
      "Given a nested object representing a file system, write a recursive function that returns an array of all file paths. A file is a string, and a directory is an object.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "fs",
        label: "File System Object",
        type: "textarea",
        defaultValue:
          '{"root": {"home": {"user": {"file1.txt": "content", "projects": {"project1": {"index.js": "..."}}}}, "etc": {"hosts": "127.0.0.1"}}}',
      },
    ],
    buttonText: "Traverse File System",
  },
  // problem--> 117
  {
    id: "recursion-lca-of-binary-tree",
    title: "Lowest Common Ancestor of a Binary Tree",
    description:
      "Given a binary tree (not a BST), find the lowest common ancestor (LCA) of two given nodes in the tree. The LCA is the lowest node that has both nodes as descendants.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 3, "left": {"value": 5, "left": {"value": 6}, "right": {"value": 2}}, "right": {"value": 1, "left": {"value": 0}, "right": {"value": 8}}}',
      },
      { id: "p", label: "First Node Value", type: "number", defaultValue: 5 },
      { id: "q", label: "Second Node Value", type: "number", defaultValue: 1 },
    ],
    buttonText: "Find LCA",
  },
  // problem--> 118
  {
    id: "recursion-word-break-ii",
    title: "Word Break II",
    description:
      "Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "catsanddog" },
      {
        id: "wordDict",
        label: "Word Dictionary",
        type: "text",
        defaultValue: '["cat", "cats", "and", "sand", "dog"]',
      },
    ],
    buttonText: "Find Sentences",
  },
  // problem--> 119
  {
    id: "recursion-parse-lisp-expression",
    title: "Parse Lisp Expression",
    description:
      "You are given a string expression representing a Lisp-like expression to return the integer value of. Expressions can be integers, let-expressions, add-expressions, or mult-expressions.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "expression",
        label: "Lisp Expression",
        type: "text",
        defaultValue: "(add 1 2)",
      },
    ],
    buttonText: "Evaluate Expression",
  },
  // problem--> 120
  {
    id: "recursion-tree-diameter",
    title: "Diameter of Binary Tree",
    description:
      "Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 1, "left": {"value": 2, "left": {"value": 4}, "right": {"value": 5}}, "right": {"value": 3}}',
      },
    ],
    buttonText: "Find Diameter",
  },
  // problem--> 121
  {
    id: "recursion-number-of-atoms",
    title: "Number of Atoms",
    description:
      "Given a chemical formula (given as a string), return the count of each atom. An atomic element always starts with an uppercase letter, then zero or more lowercase letters, representing the name. e.g., H2O and K4(ON(SO3)2)2 are possible formulas.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "formula",
        label: "Chemical Formula",
        type: "text",
        defaultValue: "Mg(OH)2",
      },
    ],
    buttonText: "Count Atoms",
  },
  // problem--> 122
  {
    id: "recursion-longest-univalue-path",
    title: "Longest Univalue Path",
    description:
      "Given the root of a binary tree, return the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value": 5, "left": {"value": 4, "left": {"value": 1}, "right": {"value": 1}}, "right": {"value": 5, "right": {"value": 5}}}',
      },
    ],
    buttonText: "Find Longest Path",
  },
  // problem--> 123
  {
    id: "recursion-24-game",
    title: "24 Game",
    description:
      "You are given an integer array cards of length 4. You have four cards, each containing a number from 1 to 9. You need to judge whether they could operate through *, /, +, -, (, ) to get the value of 24.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "cards",
        label: "Cards Array",
        type: "text",
        defaultValue: "[4, 1, 8, 7]",
      },
    ],
    buttonText: "Solve 24 Game",
  },
  // problem--> 124
  {
    id: "recursion-cracking-the-safe",
    title: "Cracking the Safe",
    description:
      "There is a safe protected by a password. The password is a sequence of n digits where each digit can be in the range [0, k-1]. You can type one digit at a time. The safe opens if the last n digits typed match the password. Find the shortest string that contains all possible passwords as substrings.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Password Length (n)",
        type: "number",
        defaultValue: 2,
      },
      {
        id: "k",
        label: "Number of Digits (k)",
        type: "number",
        defaultValue: 2,
      },
    ],
    buttonText: "Crack the Safe",
  },
  // problem--> 125
  {
    id: "recursion-making-a-large-island",
    title: "Making A Large Island",
    description:
      "You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1. Return the size of the largest island in grid after applying this operation.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "grid",
        label: "Grid of 1s and 0s",
        type: "textarea",
        defaultValue: "[[1,0],[0,1]]",
      },
    ],
    buttonText: "Find Largest Island",
  },
  // problem--> 126
  {
    id: "recursion-basic-calculator",
    title: "Basic Calculator",
    description:
      "Given a string s representing a valid expression, implement a basic calculator to evaluate it and return the result of the evaluation. The expression can contain parentheses, +, -, and non-negative integers.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "s",
        label: "Expression String",
        type: "text",
        defaultValue: "(1+(4+5+2)-3)+(6+8)",
      },
    ],
    buttonText: "Evaluate Expression",
  },
  // problem--> 127
  {
    id: "recursion-dom-tree-traversal",
    title: "DOM Tree Traversal",
    description:
      "Given a nested object representing a simplified DOM tree, write a recursive function to find the text content of the first element with a specific tag name.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "dom",
        label: "DOM Tree Object",
        type: "textarea",
        defaultValue:
          '{"tag": "html", "children": [{"tag": "body", "children": [{"tag": "p", "text": "Hello"}, {"tag": "div", "children": [{"tag": "span", "text": "World"}]}]}]}',
      },
      {
        id: "tagName",
        label: "Tag to Find",
        type: "text",
        defaultValue: "span",
      },
    ],
    buttonText: "Traverse DOM",
  },
  // problem--> 128
  {
    id: "recursion-rod-cutting",
    title: "Rod Cutting Problem",
    description:
      "Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n. Determine the maximum value obtainable by cutting up the rod and selling the pieces.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "prices",
        label: "Prices Array (1-indexed)",
        type: "text",
        defaultValue: "[1, 5, 8, 9, 10, 17, 17, 20]",
      },
      { id: "n", label: "Rod Length", type: "number", defaultValue: 8 },
    ],
    buttonText: "Maximize Value",
  },
  // problem--> 129
  {
    id: "recursion-longest-palindromic-subsequence",
    title: "Longest Palindromic Subsequence",
    description:
      "Given a string s, find the longest palindromic subsequence's length in s. A subsequence is a sequence that can be derived from another sequence by deleting some or no characters without changing the order of the remaining elements.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s", label: "Input String", type: "text", defaultValue: "bbbab" },
    ],
    buttonText: "Find Longest Subsequence",
  },
  // problem--> 130
  {
    id: "recursion-unique-binary-search-trees-ii",
    title: "Unique Binary Search Trees II",
    description:
      "Given an integer n, return all the structurally unique binary search trees (BSTs) which has exactly n nodes of unique values from 1 to n.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Number of Nodes (n)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Generate Unique BSTs",
  },
  // problem--> 131
  {
    id: "recursion-minimum-path-sum",
    title: "Minimum Path Sum in Grid",
    description:
      "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "grid",
        label: "Grid of Numbers",
        type: "textarea",
        defaultValue: "[[1,3,1],[1,5,1],[4,2,1]]",
      },
    ],
    buttonText: "Find Minimum Path",
  },
  // problem--> 132
  {
    id: "recursion-knight-probability-on-chessboard",
    title: "Knight Probability on Chessboard",
    description:
      "On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The knight has an equal probability of moving to any of its 8 possible directions. Return the probability that the knight remains on the board after it has stopped moving.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Board Size (n)", type: "number", defaultValue: 3 },
      { id: "k", label: "Moves (k)", type: "number", defaultValue: 2 },
      { id: "row", label: "Start Row", type: "number", defaultValue: 0 },
      { id: "column", label: "Start Column", type: "number", defaultValue: 0 },
    ],
    buttonText: "Calculate Probability",
  },
  // problem--> 133
  {
    id: "recursion-android-unlock-patterns",
    title: "Android Unlock Patterns",
    description:
      "Given an integer m and an integer n, return the number of unique unlock patterns of the Android lock screen, which consist of strokes connecting an ordered sequence of dots, where the number of dots connected is between m and n inclusive.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "m", label: "Min Length (m)", type: "number", defaultValue: 1 },
      { id: "n", label: "Max Length (n)", type: "number", defaultValue: 1 },
    ],
    buttonText: "Count Patterns",
  },
  // problem--> 134
  {
    id: "recursion-trie-prefix-search",
    title: "Trie Prefix Search",
    description:
      "Implement a Trie (prefix tree) and a recursive method to find all words in the trie that start with a given prefix.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "words",
        label: "Words to insert",
        type: "text",
        defaultValue: '["apple", "apply", "apt", "apricot", "banana"]',
      },
      {
        id: "prefix",
        label: "Prefix to search",
        type: "text",
        defaultValue: "ap",
      },
    ],
    buttonText: "Search with Prefix",
  },
  // problem--> 135
  {
    id: "recursion-interleaving-string",
    title: "Interleaving String",
    description:
      "Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2. An interleaving is formed by merging the characters of s1 and s2 while maintaining their relative order.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s1", label: "String s1", type: "text", defaultValue: "aabcc" },
      { id: "s2", label: "String s2", type: "text", defaultValue: "dbbca" },
      {
        id: "s3",
        label: "String s3",
        type: "text",
        defaultValue: "aadbbcbcac",
      },
    ],
    buttonText: "Check Interleaving",
  },
  // problem--> 136
  {
    id: "recursion-max-area-of-island",
    title: "Max Area of Island",
    description:
      "You are given an m x n binary matrix grid. An island is a group of 1's connected 4-directionally. The area of an island is the number of cells with a value 1 in the island. Return the maximum area of an island in grid. If there is no island, return 0.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "grid",
        label: "Grid of 1s and 0s",
        type: "textarea",
        defaultValue: "[[0,0,1,0,0],[0,1,1,0,0],[0,0,0,0,0],[1,1,0,1,1]]",
      },
    ],
    buttonText: "Find Max Area",
  },
  // problem--> 137
  {
    id: "recursion-different-ways-to-add-parentheses",
    title: "Different Ways to Add Parentheses",
    description:
      "Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "expression",
        label: "Expression String",
        type: "text",
        defaultValue: "2*3-4*5",
      },
    ],
    buttonText: "Compute All Results",
  },
  // problem--> 138
  {
    id: "recursion-subset-sum-problem",
    title: "Subset Sum Problem",
    description:
      "Given a set of non-negative integers and a value sum, determine if there is a subset of the given set with a sum equal to the given sum.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "set",
        label: "Set of Numbers",
        type: "text",
        defaultValue: "[3, 34, 4, 12, 5, 2]",
      },
      { id: "sum", label: "Target Sum", type: "number", defaultValue: 9 },
    ],
    buttonText: "Check for Subset Sum",
  },
  // problem--> 139
  {
    id: "recursion-unique-paths-iii",
    title: "Unique Paths III",
    description:
      "You are given an m x n integer array grid where grid[i][j] could be 1 (starting square), 2 (ending square), 0 (empty square), -1 (obstacle). Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "grid",
        label: "Grid",
        type: "textarea",
        defaultValue: "[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]",
      },
    ],
    buttonText: "Count Unique Paths",
  },
  // problem--> 140
  {
    id: "recursion-boggle-solver",
    title: "Boggle Solver",
    description:
      'Given a dictionary of words and a Boggle board (a grid of characters), find all the words that can be formed on the board. A word can be formed from letters of sequentially adjacent cells, where "adjacent" cells are those horizontally, vertically, or diagonally neighboring.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "board",
        label: "Boggle Board",
        type: "textarea",
        defaultValue:
          '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]',
      },
      {
        id: "dictionary",
        label: "Dictionary",
        type: "text",
        defaultValue: '["oath","pea","eat","rain"]',
      },
    ],
    buttonText: "Solve Boggle",
  },
  // problem--> 141
  {
    id: "recursion-construct-tree-from-preorder-inorder",
    title: "Construct Tree from Preorder and Inorder Traversal",
    description:
      "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "preorder",
        label: "Preorder Traversal",
        type: "text",
        defaultValue: "[3,9,20,15,7]",
      },
      {
        id: "inorder",
        label: "Inorder Traversal",
        type: "text",
        defaultValue: "[9,3,15,20,7]",
      },
    ],
    buttonText: "Construct Tree",
  },
  // problem--> 142
  {
    id: "recursion-construct-tree-from-inorder-postorder",
    title: "Construct Tree from Inorder and Postorder Traversal",
    description:
      "Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "inorder",
        label: "Inorder Traversal",
        type: "text",
        defaultValue: "[9,3,15,20,7]",
      },
      {
        id: "postorder",
        label: "Postorder Traversal",
        type: "text",
        defaultValue: "[9,15,7,20,3]",
      },
    ],
    buttonText: "Construct Tree",
  },
  // problem--> 143
  {
    id: "recursion-serialize-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    description:
      "Design an algorithm to serialize a binary tree to a string and deserialize the string back to the original tree structure. Your functions should be recursive.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree to process",
        type: "textarea",
        defaultValue:
          '{"value":1,"left":{"value":2},"right":{"value":3,"left":{"value":4},"right":{"value":5}}}',
      },
    ],
    buttonText: "Process Tree",
  },
  // problem--> 144
  {
    id: "recursion-find-kth-smallest-element-in-bst",
    title: "Kth Smallest Element in a BST",
    description:
      "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "root",
        label: "BST Root",
        type: "textarea",
        defaultValue:
          '{"value":3,"left":{"value":1,"right":{"value":2}},"right":{"value":4}}',
      },
      { id: "k", label: "K", type: "number", defaultValue: 1 },
    ],
    buttonText: "Find Kth Smallest",
  },
  // problem--> 145
  {
    id: "recursion-partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    description:
      "Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Numbers Array",
        type: "text",
        defaultValue: "[1,5,11,5]",
      },
    ],
    buttonText: "Check Partition",
  },
  // problem--> 146
  {
    id: "recursion-find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    description:
      "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array, find its minimum element. You must write an algorithm that runs in O(log n) time, which suggests a recursive, binary search-like approach.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Rotated Sorted Array",
        type: "text",
        defaultValue: "[3,4,5,1,2]",
      },
    ],
    buttonText: "Find Minimum",
  },
  // problem--> 147
  {
    id: "recursion-search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    description:
      "There is an integer array nums sorted in ascending order (with distinct values), which has been rotated. Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. Implement a recursive solution.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Rotated Sorted Array",
        type: "text",
        defaultValue: "[4,5,6,7,0,1,2]",
      },
      { id: "target", label: "Target Value", type: "number", defaultValue: 0 },
    ],
    buttonText: "Search Array",
  },
  // problem--> 148
  {
    id: "recursion-populating-next-right-pointers",
    title: "Populating Next Right Pointers in Each Node",
    description:
      "You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Perfect Binary Tree",
        type: "textarea",
        defaultValue:
          '{"value":1,"left":{"value":2,"left":{"value":4},"right":{"value":5}},"right":{"value":3,"left":{"value":6},"right":{"value":7}}}',
      },
    ],
    buttonText: "Connect Nodes",
  },
  // problem--> 149
  {
    id: "recursion-beautiful-array",
    title: "Beautiful Array",
    description:
      "An array nums is beautiful if for every i < j, there is no k with i < k < j such that nums[k] * 2 = nums[i] + nums[j]. Given an integer n, return any beautiful array nums of length n. It is guaranteed that such an array exists.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Array Length (n)", type: "number", defaultValue: 4 },
    ],
    buttonText: "Generate Array",
  },
  // problem--> 150
  {
    id: "recursion-cheapest-flights-within-k-stops",
    title: "Cheapest Flights Within K Stops",
    description:
      "There are n cities connected by some number of flights. You are given an array flights where flights[i] = [from, to, price]. You are also given three integers src, dst, and k. Return the cheapest price from src to dst with at most k stops.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Number of cities", type: "number", defaultValue: 3 },
      {
        id: "flights",
        label: "Flights Array",
        type: "textarea",
        defaultValue: "[[0,1,100],[1,2,100],[0,2,500]]",
      },
      { id: "src", label: "Source City", type: "number", defaultValue: 0 },
      { id: "dst", label: "Destination City", type: "number", defaultValue: 2 },
      { id: "k", label: "Max Stops (k)", type: "number", defaultValue: 1 },
    ],
    buttonText: "Find Cheapest Price",
  },
  // problem--> 151
  {
    id: "recursion-zuma-game",
    title: "Zuma Game",
    description:
      'You have a row of balls on a table, represented by a string "board". You also have a handful of balls, represented by a string "hand". Find the minimum number of balls you need to insert from your hand into the board to remove all the balls on the table. When 3 or more balls of the same color are adjacent, they are removed. This removal can trigger others recursively.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "board",
        label: "Board String",
        type: "text",
        defaultValue: '"WWRRBBWW"',
      },
      {
        id: "hand",
        label: "Hand String",
        type: "text",
        defaultValue: '"WRBRW"',
      },
    ],
    buttonText: "Solve Zuma",
  },
  // problem--> 152
  {
    id: "recursion-concatenated-words",
    title: "Concatenated Words",
    description:
      "Given an array of strings words (without duplicates), return all the concatenated words in the given list of words. A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "words",
        label: "Array of Words",
        type: "text",
        defaultValue:
          '["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]',
      },
    ],
    buttonText: "Find Words",
  },
  // problem--> 153
  {
    id: "recursion-k-th-symbol-in-grammar",
    title: "K-th Symbol in Grammar",
    description:
      "We build a table of n rows (1-indexed). We start with 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10. Given n and k, return the k-th (1-indexed) symbol in the n-th row.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Row (n)", type: "number", defaultValue: 4 },
      { id: "k", label: "Index (k)", type: "number", defaultValue: 5 },
    ],
    buttonText: "Find Symbol",
  },
  // problem--> 154
  {
    id: "recursion-number-of-squareful-arrays",
    title: "Number of Squareful Arrays",
    description:
      "An array is squareful if the sum of every pair of adjacent elements is a perfect square. Given an integer array, return the number of permutations of the array that are squareful.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Numbers Array",
        type: "text",
        defaultValue: "[1, 17, 8]",
      },
    ],
    buttonText: "Count Permutations",
  },
  // problem--> 155
  {
    id: "recursion-escape-a-large-maze",
    title: "Escape a Large Maze",
    description:
      "In a 10^6 x 10^6 grid, a list of blocked cells is given. We are given a source and a target cell. Determine whether a path from source to target exists. The path can only move 4-directionally.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "blocked",
        label: "Blocked Cells",
        type: "textarea",
        defaultValue: "[[0,1],[1,0]]",
      },
      {
        id: "source",
        label: "Source [row, col]",
        type: "text",
        defaultValue: "[0,0]",
      },
      {
        id: "target",
        label: "Target [row, col]",
        type: "text",
        defaultValue: "[0,2]",
      },
    ],
    buttonText: "Check Path",
  },
  // problem--> 156
  {
    id: "recursion-tiling-a-rectangle-with-fewest-squares",
    title: "Tiling a Rectangle with the Fewest Squares",
    description:
      "Given a rectangle of size n x m, return the minimum number of integer-sided squares that tile the rectangle.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Height (n)", type: "number", defaultValue: 2 },
      { id: "m", label: "Width (m)", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Fewest Squares",
  },
  // problem--> 157
  {
    id: "recursion-path-with-maximum-gold",
    title: "Path with Maximum Gold",
    description:
      "In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty. Return the maximum amount of gold you can collect under the conditions: 1. You can start and stop collecting gold from any position. 2. You can move one step to the left, right, up, or down. 3. You can't visit the same cell more than once.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "grid",
        label: "Gold Mine Grid",
        type: "textarea",
        defaultValue: "[[0,6,0],[5,8,7],[0,9,0]]",
      },
    ],
    buttonText: "Collect Max Gold",
  },
  // problem--> 158
  {
    id: "recursion-ambiguous-coordinates",
    title: "Ambiguous Coordinates",
    description:
      'We are given a string s representing a list of numbers. Return all the possible ways to restore it as a list of coordinates "(x, y)". A valid number is one that doesn\'t have extraneous zeros. E.g., "00", "0.0", "0.00" are invalid.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "s",
        label: 'Coordinate String (e.g., "(123)")',
        type: "text",
        defaultValue: "(123)",
      },
    ],
    buttonText: "Restore Coordinates",
  },
  // problem--> 159
  {
    id: "recursion-k-th-permutation",
    title: "K-th Permutation Sequence",
    description:
      "The set [1, 2, 3, ..., n] contains a total of n! unique permutations. By listing and labeling all of the permutations in order, we get the permutation sequence. Given n and k, return the k-th permutation sequence.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Number of elements (n)",
        type: "number",
        defaultValue: 3,
      },
      { id: "k", label: "K", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Kth Permutation",
  },
  // problem--> 160
  {
    id: "recursion-matchsticks-to-square",
    title: "Matchsticks to Square",
    description:
      "You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to form one square. You cannot break any stick. Return true if you can make this square and false otherwise.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "matchsticks",
        label: "Matchstick Lengths",
        type: "text",
        defaultValue: "[1,1,2,2,2]",
      },
    ],
    buttonText: "Check for Square",
  },
  // problem--> 161
  {
    id: "recursion-can-i-win",
    title: "Can I Win",
    description:
      'In the "100 game," two players take turns adding, from a common pool of integers from 1 to maxChoosableInteger, to a running total. The player who first causes the running total to reach or exceed desiredTotal wins. Given integers maxChoosableInteger and desiredTotal, return true if the first player to move can force a win, assuming both players play optimally.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "maxChoosableInteger",
        label: "Max Choosable Integer",
        type: "number",
        defaultValue: 10,
      },
      {
        id: "desiredTotal",
        label: "Desired Total",
        type: "number",
        defaultValue: 11,
      },
    ],
    buttonText: "Check If I Can Win",
  },
  // problem--> 162
  {
    id: "recursion-the-skyline-problem",
    title: "The Skyline Problem",
    description:
      "A city's skyline is the outer contour of the silhouette formed by all the buildings in that city. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively. This is a classic divide and conquer problem.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "buildings",
        label: "Buildings [[left, right, height], ...]",
        type: "textarea",
        defaultValue: "[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]",
      },
    ],
    buttonText: "Generate Skyline",
  },
  // problem--> 163
  {
    id: "recursion-count-of-smaller-numbers-after-self",
    title: "Count of Smaller Numbers After Self",
    description:
      "Given an integer array nums, you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i]. A recursive merge-sort approach is well-suited for this.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Numbers Array",
        type: "text",
        defaultValue: "[5,2,6,1]",
      },
    ],
    buttonText: "Count Smaller Numbers",
  },
  // problem--> 164
  {
    id: "recursion-frog-jump",
    title: "Frog Jump",
    description:
      "A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water. Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "stones",
        label: "Stone Positions",
        type: "text",
        defaultValue: "[0,1,3,5,6,8,12,17]",
      },
    ],
    buttonText: "Check if Frog Can Cross",
  },
  // problem--> 165
  {
    id: "recursion-burst-balloons",
    title: "Burst Balloons",
    description:
      "You are given n balloons, indexed from 0 to n - 1. Each balloon has a number painted on it representing the coins you get if you burst it. You are asked to burst all the balloons to maximize your coins. If you burst the ith balloon, you get nums[i-1] * nums[i] * nums[i+1] coins. Find the maximum coins you can collect.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Balloons Array",
        type: "text",
        defaultValue: "[3,1,5,8]",
      },
    ],
    buttonText: "Maximize Coins",
  },
  // problem--> 166
  {
    id: "recursion-remove-boxes",
    title: "Remove Boxes",
    description:
      "You are given several boxes with different colors represented by different positive numbers. You may remove any number of boxes of the same color that are contiguous. The score you get is k * k for removing k boxes. Find the maximum score you can get.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "boxes",
        label: "Boxes Array",
        type: "text",
        defaultValue: "[1,3,2,2,2,3,4,3,1]",
      },
    ],
    buttonText: "Maximize Score",
  },
  // problem--> 167
  {
    id: "recursion-student-attendance-record-ii",
    title: "Student Attendance Record II",
    description:
      "An attendance record for a student can be represented as a string where each character is 'A' (absent), 'L' (late), or 'P' (present). A student is eligible for an attendance award if they meet BOTH of the following criteria: The student was absent ('A') for strictly fewer than 2 days total. The student was never late ('L') for 3 or more consecutive days. Given an integer n, return the number of possible attendance records of length n that are awardable.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Record Length (n)", type: "number", defaultValue: 2 },
    ],
    buttonText: "Count Awardable Records",
  },
  // problem--> 168
  {
    id: "recursion-find-the-shortest-superstring",
    title: "Find the Shortest Superstring",
    description:
      "Given an array of strings words, return the shortest string that contains each string in words as a substring. If there are multiple valid strings, return any of them. This can be modeled as a variation of the Traveling Salesperson Problem.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "words",
        label: "Words Array",
        type: "text",
        defaultValue: '["alex","loves","leetcode"]',
      },
    ],
    buttonText: "Find Superstring",
  },
  // problem--> 169
  {
    id: "recursion-critical-connections-in-a-network",
    title: "Critical Connections in a Network",
    description:
      "There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network. A critical connection is a connection that, if removed, will make some servers unable to reach some other server. Return all critical connections. (Tarjan's bridge-finding algorithm is a recursive DFS approach).",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Number of Servers", type: "number", defaultValue: 4 },
      {
        id: "connections",
        label: "Connections Array",
        type: "textarea",
        defaultValue: "[[0,1],[1,2],[2,0],[1,3]]",
      },
    ],
    buttonText: "Find Critical Connections",
  },
  // problem--> 170
  {
    id: "recursion-palindrome-partitioning-ii",
    title: "Palindrome Partitioning II",
    description:
      "Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum cuts needed for a palindrome partitioning of s.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "s", label: "Input String", type: "text", defaultValue: "aab" },
    ],
    buttonText: "Find Minimum Cuts",
  },
  // problem--> 171
  {
    id: "recursion-max-value-of-equation",
    title: "Max Value of Equation",
    description:
      "You are given an array points of coordinates and an integer k. Find the maximum value of yi + yj + |xi - xj| where |xi - xj| <= k and i < j. A recursive solution for this would be too slow, but it demonstrates the brute-force thought process.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "points",
        label: "Points Array",
        type: "textarea",
        defaultValue: "[[1,3],[2,0],[5,10],[6,-10]]",
      },
      { id: "k", label: "K", type: "number", defaultValue: 1 },
    ],
    buttonText: "Find Max Value",
  },
  // problem--> 172
  {
    id: "recursion-basic-calculator-ii",
    title: "Basic Calculator II",
    description:
      "Given a string s which represents an expression, evaluate this expression and return its value. The expression string contains only non-negative integers, +, -, *, / operators and empty spaces. The integer division should truncate toward zero. A recursive descent parser is a natural fit.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "s",
        label: "Expression String",
        type: "text",
        defaultValue: '"3+2*2"',
      },
    ],
    buttonText: "Evaluate Expression",
  },
  // problem--> 173
  {
    id: "recursion-strange-printer",
    title: "Strange Printer",
    description:
      "There is a strange printer with the following two special properties: 1. The printer can only print a sequence of the same character each time. 2. At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters. Given a string s, return the minimum number of turns the printer needed to print it.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "s",
        label: "String to Print",
        type: "text",
        defaultValue: '"aaabbb"',
      },
    ],
    buttonText: "Find Minimum Turns",
  },
  // problem--> 174
  {
    id: "recursion-number-of-ways-to-reorder-array-to-get-same-bst",
    title: "Number of Ways to Reorder Array to Get Same BST",
    description:
      "Given an array nums that represents a permutation of integers from 1 to n. We are going to construct a binary search tree by inserting the elements of nums in order into an initially empty BST. Find the number of different ways to reorder nums so that the constructed BST is identical to the one formed from the original array.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Numbers Array",
        type: "text",
        defaultValue: "[2,1,3]",
      },
    ],
    buttonText: "Count Reorderings",
  },
  // problem--> 175
  {
    id: "recursion-cherry-pickup-ii",
    title: "Cherry Pickup II",
    description:
      "You are given a rows x cols matrix grid representing a field of cherries where grid[i][j] is the number of cherries that you can collect from the (i, j) cell. You have two robots that can collect cherries for you. Both robots start at the top-left corner (0, 0) and (0, cols-1) respectively. Return the maximum number of cherries collection using both robots by moving down one row and to the left, straight, or right.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "grid",
        label: "Cherry Grid",
        type: "textarea",
        defaultValue: "[[3,1,1],[2,5,1],[1,5,5],[2,1,1]]",
      },
    ],
    buttonText: "Collect Cherries",
  },
  // problem--> 176
  {
    id: "recursion-largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    description:
      "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram. This can be solved with a recursive divide and conquer approach.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "heights",
        label: "Heights Array",
        type: "text",
        defaultValue: "[2,1,5,6,2,3]",
      },
    ],
    buttonText: "Find Largest Area",
  },
  // problem--> 177
  {
    id: "recursion-reverse-pairs",
    title: "Reverse Pairs",
    description:
      "Given an integer array nums, return the number of reverse pairs in the array. A reverse pair is a pair (i, j) where 0 <= i < j < nums.length and nums[i] > 2 * nums[j]. A solution using a modified merge sort is very efficient.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Numbers Array",
        type: "text",
        defaultValue: "[1,3,2,3,1]",
      },
    ],
    buttonText: "Count Reverse Pairs",
  },
  // problem--> 178
  {
    id: "recursion-minimum-cost-to-merge-stones",
    title: "Minimum Cost to Merge Stones",
    description:
      "There are n piles of stones arranged in a row. The ith pile has stones[i] stones. A move consists of merging exactly k consecutive piles into one pile, and the cost of this move is equal to the total number of stones in these k piles. Return the minimum cost to merge all piles of stones into one pile. If it is impossible, return -1.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "stones",
        label: "Stones Array",
        type: "text",
        defaultValue: "[3,2,4,1]",
      },
      { id: "k", label: "Merge Count (k)", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Minimum Cost",
  },
  // problem--> 179
  {
    id: "recursion-sum-of-distances-in-tree",
    title: "Sum of Distances in Tree",
    description:
      "You are given an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges. Return an array answer of length n where answer[i] is the sum of the distances between the ith node in the tree and all other nodes.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Number of Nodes", type: "number", defaultValue: 6 },
      {
        id: "edges",
        label: "Edges Array",
        type: "textarea",
        defaultValue: "[[0,1],[0,2],[2,3],[2,4],[2,5]]",
      },
    ],
    buttonText: "Calculate Distances",
  },
  // problem--> 180
  {
    id: "recursion-number-of-ways-to-stay-in-the-same-place-after-some-steps",
    title: "Ways to Stay in Same Place After Steps",
    description:
      "You have a pointer at index 0 in an array of size arrLen. At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place. Given two integers steps and arrLen, return the number of ways such that your pointer is still at index 0 after exactly steps steps.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "steps",
        label: "Number of Steps",
        type: "number",
        defaultValue: 3,
      },
      { id: "arrLen", label: "Array Length", type: "number", defaultValue: 2 },
    ],
    buttonText: "Count Ways",
  },
  // problem--> 181
  {
    id: "recursion-string-transformation",
    title: "String Transformation",
    description:
      "Given two strings, start and end, and a dictionary, find the minimum number of transformations to convert start to end, where each transformation consists of changing a single letter, and each intermediate word must exist in the dictionary.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      { id: "start", label: "Start Word", type: "text", defaultValue: '"hit"' },
      { id: "end", label: "End Word", type: "text", defaultValue: '"cog"' },
      {
        id: "dict",
        label: "Dictionary",
        type: "text",
        defaultValue: '["hot","dot","dog","lot","log","cog"]',
      },
    ],
    buttonText: "Find Transformations",
  },
  // problem--> 182
  {
    id: "recursion-find-all-anagrams-in-a-string",
    title: "Find All Anagrams in a String",
    description:
      "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order. This can be approached with a recursive sliding window concept.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "s",
        label: "Main String (s)",
        type: "text",
        defaultValue: '"cbaebabacd"',
      },
      {
        id: "p",
        label: "Pattern String (p)",
        type: "text",
        defaultValue: '"abc"',
      },
    ],
    buttonText: "Find Anagrams",
  },
  // problem--> 183
  {
    id: "recursion-count-good-nodes-in-binary-tree",
    title: "Count Good Nodes in Binary Tree",
    description:
      "Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X. Return the number of good nodes in the binary tree.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value":3,"left":{"value":1,"left":{"value":3}},"right":{"value":4,"left":{"value":1},"right":{"value":5}}}',
      },
    ],
    buttonText: "Count Good Nodes",
  },
  // problem--> 184
  {
    id: "recursion-sum-root-to-leaf-numbers",
    title: "Sum Root to Leaf Numbers",
    description:
      "You are given the root of a binary tree containing digits from 0 to 9 only. Each root-to-leaf path in the tree represents a number. For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123. Return the total sum of all root-to-leaf numbers.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value":4,"left":{"value":9,"left":{"value":5},"right":{"value":1}},"right":{"value":0}}',
      },
    ],
    buttonText: "Calculate Sum",
  },
  // problem--> 185
  {
    id: "recursion-binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    description:
      "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. A path's sum is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value":-10,"left":{"value":9},"right":{"value":20,"left":{"value":15},"right":{"value":7}}}',
      },
    ],
    buttonText: "Find Maximum Path Sum",
  },
  // problem--> 186
  {
    id: "recursion-all-nodes-distance-k-in-binary-tree",
    title: "All Nodes Distance K in Binary Tree",
    description:
      "Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value":3,"left":{"value":5,"left":{"value":6},"right":{"value":2,"left":{"value":7},"right":{"value":4}}},"right":{"value":1,"left":{"value":0},"right":{"value":8}}}',
      },
      {
        id: "target",
        label: "Target Node Value",
        type: "number",
        defaultValue: 5,
      },
      { id: "k", label: "Distance K", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Nodes",
  },
  // problem--> 187
  {
    id: "recursion-unique-binary-search-trees",
    title: "Unique Binary Search Trees",
    description:
      "Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Number of nodes (n)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Count Unique BSTs",
  },
  // problem--> 188
  {
    id: "recursion-step-by-step-directions-from-a-binary-tree-node-to-another",
    title: "Directions From a Binary Tree Node to Another",
    description:
      "You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue and an integer destValue. Find the shortest path starting from the node with startValue and ending at the node with destValue. The path should be represented as a string of 'L', 'R', and 'U'.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value":5,"left":{"value":1,"left":{"value":3}},"right":{"value":2,"left":{"value":6},"right":{"value":4}}}',
      },
      {
        id: "startValue",
        label: "Start Node Value",
        type: "number",
        defaultValue: 3,
      },
      {
        id: "destValue",
        label: "Destination Node Value",
        type: "number",
        defaultValue: 6,
      },
    ],
    buttonText: "Find Directions",
  },
  // problem--> 189
  {
    id: "recursion-minimum-difficulty-of-a-job-schedule",
    title: "Minimum Difficulty of a Job Schedule",
    description:
      "You want to schedule a list of jobs in d days. Jobs are dependent, i.e., you have to finish job i before job j if i < j. You have to finish at least one task every day. The difficulty of a day is the maximum difficulty of a job done on that day. The difficulty of a job schedule is the sum of difficulties of each day. Given an array of job difficulties and an integer d, return the minimum difficulty of a job schedule. If you cannot schedule all the jobs in d days, return -1.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "jobDifficulty",
        label: "Job Difficulty Array",
        type: "text",
        defaultValue: "[6,5,4,3,2,1]",
      },
      { id: "d", label: "Number of Days (d)", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Min Difficulty",
  },
  // problem--> 190
  {
    id: "recursion-path-sum-iii",
    title: "Path Sum III",
    description:
      "Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum. The path does not need to start or end at the root or a leaf, but it must go downwards.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value":10,"left":{"value":5,"left":{"value":3,"left":{"value":3},"right":{"value":-2}},"right":{"value":2,"right":{"value":1}}},"right":{"value":-3,"right":{"value":11}}}',
      },
      { id: "targetSum", label: "Target Sum", type: "number", defaultValue: 8 },
    ],
    buttonText: "Count Paths",
  },
  // problem--> 191
  {
    id: "recursion-count-univalue-subtrees",
    title: "Count Univalue Subtrees",
    description:
      "Given the root of a binary tree, return the number of univalue subtrees. A univalue subtree means all nodes of the subtree have the same value.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tree",
        label: "Binary Tree Object",
        type: "textarea",
        defaultValue:
          '{"value":5,"left":{"value":1,"left":{"value":5},"right":{"value":5}},"right":{"value":5,"right":{"value":5}}}',
      },
    ],
    buttonText: "Count Subtrees",
  },
  // problem--> 192
  {
    id: "recursion-all-possible-full-binary-trees",
    title: "All Possible Full Binary Trees",
    description:
      "Given an integer n, return a list of all possible full binary trees with n nodes. A full binary tree is a binary tree where each node has exactly 0 or 2 children.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Number of nodes (n)",
        type: "number",
        defaultValue: 7,
      },
    ],
    buttonText: "Generate Trees",
  },
  // problem--> 193
  {
    id: "recursion-longest-string-chain",
    title: "Longest String Chain",
    description:
      "You are given an array of words where each word consists of lowercase English letters. A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A word is a predecessor of another if we can add exactly one letter anywhere in the first word to make it equal to the second. Find the longest possible length of a word chain.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "words",
        label: "Array of Words",
        type: "text",
        defaultValue: '["a","b","ba","bca","bda","bdca"]',
      },
    ],
    buttonText: "Find Longest Chain",
  },
  // problem--> 194
  {
    id: "recursion-alien-dictionary",
    title: "Alien Dictionary",
    description:
      "There is a new alien language that uses the English alphabet. However, the order among the letters is unknown. You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language. This can be solved by building a graph and using recursive topological sort (DFS).",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "words",
        label: "Sorted Words Array",
        type: "text",
        defaultValue: '["wrt","wrf","er","ett","rftt"]',
      },
    ],
    buttonText: "Derive Alien Order",
  },
  // problem--> 195
  {
    id: "recursion-reconstruct-itinerary",
    title: "Reconstruct Itinerary",
    description:
      'You are given a list of airline tickets where tickets[i] = [from, to]. Reconstruct the itinerary in order and return it. All of the tickets belong to a man who departs from "JFK". Thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "tickets",
        label: "Tickets Array",
        type: "textarea",
        defaultValue:
          '[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]',
      },
    ],
    buttonText: "Reconstruct Itinerary",
  },
  // problem--> 196
  {
    id: "recursion-maximum-number-of-achievable-transfer-requests",
    title: "Maximum Number of Achievable Transfer Requests",
    description:
      "We have n buildings and a number of transfer requests. We must find the maximum number of achievable requests. A request is achievable if it is granted and the net change in employees in any building is 0. This is a backtracking problem where we try every subset of requests.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Number of Buildings (n)",
        type: "number",
        defaultValue: 5,
      },
      {
        id: "requests",
        label: "Requests Array",
        type: "textarea",
        defaultValue: "[[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]]",
      },
    ],
    buttonText: "Find Max Requests",
  },
  // problem--> 197
  {
    id: "recursion-numbers-with-same-consecutive-differences",
    title: "Numbers With Same Consecutive Differences",
    description:
      "Return all non-negative integers of length n such that the absolute difference between every two consecutive digits is k.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    inputs: [
      { id: "n", label: "Length (n)", type: "number", defaultValue: 3 },
      { id: "k", label: "Difference (k)", type: "number", defaultValue: 7 },
    ],
    buttonText: "Find Numbers",
  },
  // problem--> 198
  {
    id: "recursion-largest-component-size-by-common-factor",
    title: "Largest Component Size by Common Factor",
    description:
      "You are given an integer array nums of unique positive integers. Consider the following graph: there is an edge between nums[i] and nums[j] if gcd(nums[i], nums[j]) > 1. Return the size of the largest connected component in the graph.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Numbers Array",
        type: "text",
        defaultValue: "[4,6,15,35]",
      },
    ],
    buttonText: "Find Largest Component",
  },
  // problem--> 199
  {
    id: "recursion-the-number-of-good-subsets",
    title: "The Number of Good Subsets",
    description:
      "You are given an integer array nums. A subset of nums is good if its product can be represented as a product of one or more distinct prime numbers. Return the number of different good subsets under modulo 10^9 + 7.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "nums",
        label: "Numbers Array",
        type: "text",
        defaultValue: "[1,2,3,4]",
      },
    ],
    buttonText: "Count Good Subsets",
  },
  // problem--> 200
  {
    id: "recursion-stone-game-iv",
    title: "Stone Game IV",
    description:
      "Alice and Bob take turns playing a game, with Alice starting first. Initially, there are n stones in a pile. On each player's turn, that player makes a move consisting of removing any non-zero square number of stones in the pile. If a player cannot make a move, they lose the game. Given a positive integer n, return true if and only if Alice wins the game assuming both players play optimally.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    inputs: [
      {
        id: "n",
        label: "Number of Stones (n)",
        type: "number",
        defaultValue: 4,
      },
    ],
    buttonText: "Solve Stone Game",
  },
];
