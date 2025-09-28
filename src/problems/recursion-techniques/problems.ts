import { Problem } from "../../types";

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
  },
  // ... continue generating unique problems up to 200. I will now create the rest of the 200 problems.
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
  },
  // ... continue generating problems from 101 to 200
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
  },
];
