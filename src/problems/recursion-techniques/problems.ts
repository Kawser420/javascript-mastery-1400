// import { Problem } from "../../types";

import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "recursion-factorial",
    title: "Calculate Factorial",
    description:
      "Write a recursive function to calculate the factorial of a non-negative integer n (n!). The factorial of 0 is 1.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Calculate Factorial",
  },
  // problem--> 02
  {
    id: "recursion-sum-range",
    title: "Sum of a Range",
    description:
      "Write a recursive function that takes a number and returns the sum of all numbers from 1 up to the number passed in.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Sum Range",
  },
  // problem--> 03
  {
    id: "recursion-power-function",
    title: "Power Function",
    description:
      "Write a recursive function that mimics `Math.pow()`. It should take a base and an exponent and return the result.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Calculate Power",
  },
  // problem--> 04
  {
    id: "recursion-fibonacci-sequence",
    title: "Fibonacci Sequence",
    description:
      "Write a recursive function that returns the Nth number in the Fibonacci sequence. The sequence starts 0, 1, 1, 2, 3, 5, ...",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Get Nth Fibonacci",
  },
  // problem--> 05
  {
    id: "recursion-array-sum",
    title: "Sum of Array Elements",
    description:
      "Write a recursive function to calculate the sum of all numbers in an array.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Sum Array",
  },
  // problem--> 06
  {
    id: "recursion-string-reversal",
    title: "Reverse a String",
    description:
      "Write a recursive function that takes a string and returns a new string with the characters in reverse order.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Reverse String",
  },
  // problem--> 07
  {
    id: "recursion-countdown",
    title: "Countdown",
    description:
      "Write a recursive function that takes a number and logs a countdown from that number to 1.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Start Countdown",
  },
  // problem--> 08
  {
    id: "recursion-palindrome-check",
    title: "Palindrome Checker",
    description:
      "Write a recursive function that checks if a string is a palindrome (reads the same forwards and backwards).",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Check Palindrome",
  },
  // problem--> 09
  {
    id: "recursion-greatest-common-divisor",
    title: "Greatest Common Divisor (GCD)",
    description:
      "Write a recursive function to find the greatest common divisor of two positive integers using the Euclidean algorithm.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Find GCD",
  },
  // problem--> 10
  {
    id: "recursion-count-vowels",
    title: "Count Vowels in a String",
    description:
      "Write a recursive function that counts the number of vowels (a, e, i, o, u) in a given string.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Count Vowels",
  },
  // problem--> 11
  {
    id: "recursion-array-product",
    title: "Product of Array Elements",
    description:
      "Write a recursive function to compute the product of all numbers in an array.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Calculate Product",
  },
  // problem--> 12
  {
    id: "recursion-find-max-in-array",
    title: "Find Max in Array",
    description:
      "Write a recursive function to find the largest number in an array of numbers.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Find Max",
  },
  // problem--> 13
  {
    id: "recursion-is-even-odd",
    title: "Even or Odd",
    description:
      "Determine if a positive integer is even or odd using recursion, without using the modulo operator.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Check Even/Odd",
  },
  // problem--> 14
  {
    id: "recursion-binary-representation",
    title: "Decimal to Binary",
    description:
      "Write a recursive function that converts a decimal number to its binary representation as a string.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Convert to Binary",
  },
  // problem--> 15
  {
    id: "recursion-count-occurrences",
    title: "Count Character Occurrences",
    description:
      "Write a recursive function that counts how many times a specific character appears in a string.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Count Occurrences",
  },
  // problem--> 16
  {
    id: "recursion-sum-of-digits",
    title: "Sum of Digits",
    description:
      "Write a recursive function that calculates the sum of the digits of a non-negative integer.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Sum Digits",
  },
  // problem--> 17
  {
    id: "recursion-collatz-conjecture-steps",
    title: "Collatz Conjecture Steps",
    description:
      "Write a recursive function that calculates the number of steps to reach 1 using the Collatz conjecture rules (if n is even, n = n/2; if n is odd, n = 3n + 1).",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Count Steps",
  },
  // problem--> 18
  {
    id: "recursion-repeat-string",
    title: "Repeat a String",
    description:
      "Write a recursive function that takes a string and a number, and returns the string repeated that many times.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Repeat String",
  },
  // problem--> 19
  {
    id: "recursion-array-includes",
    title: "Check if Array Includes Value",
    description:
      "Write a recursive function that checks if a value exists in an array, returning true or false.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Check for Value",
  },
  // problem--> 20
  {
    id: "recursion-nested-object-sum",
    title: "Sum of Nested Object Values",
    description:
      "Given an object where values are either numbers or other objects, write a recursive function to find the sum of all numeric values.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Sum Nested Values",
  },
  // problem--> 21
  {
    id: "recursion-range-of-numbers",
    title: "Generate a Range of Numbers",
    description:
      "Write a recursive function that takes two numbers, `start` and `end`, and returns an array containing all numbers in that range.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Generate Range",
  },
  // problem--> 22
  {
    id: "recursion-tree-node-count",
    title: "Count Nodes in a Tree",
    description:
      "Given a simple binary tree structure, write a recursive function to count the total number of nodes.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Count Tree Nodes",
  },
  // problem--> 23
  {
    id: "recursion-first-char-uppercase",
    title: "Capitalize First Letter",
    description:
      "Write a recursive function that takes an array of strings and returns a new array where the first letter of each string is capitalized.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Capitalize Array",
  },
  // problem--> 24
  {
    id: "recursion-remove-duplicates-string",
    title: "Remove Consecutive Duplicates",
    description:
      "Write a recursive function to remove consecutive duplicate characters from a string.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Remove Duplicates",
  },
  // problem--> 25
  {
    id: "recursion-sum-squares",
    title: "Sum of Squares",
    description:
      "Write a recursive function that takes a number `n` and returns the sum of squares from 1 to `n`.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Sum Squares",
  },
  // problem--> 26
  {
    id: "recursion-string-length",
    title: "Calculate String Length",
    description:
      "Write a recursive function that calculates the length of a string without using the `.length` property.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Calculate Length",
  },
  // problem--> 27
  {
    id: "recursion-tower-of-hanoi-moves",
    title: "Tower of Hanoi Moves",
    description:
      "Write a recursive function to calculate the minimum number of moves required to solve the Tower of Hanoi puzzle with `n` disks.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Calculate Moves",
  },
  // problem--> 28
  {
    id: "recursion-count-down-up",
    title: "Countdown Then Count Up",
    description:
      "Write a recursive function that counts down from a number `n` to 1, and then counts back up to `n`.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Run Sequence",
  },
  // problem--> 29
  {
    id: "recursion-pascal-triangle-number",
    title: "Pascal's Triangle Number",
    description:
      "Write a recursive function `pascal(row, col)` that returns the number at a specific row and column in Pascal's Triangle.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Find Number",
  },
  // problem--> 30
  {
    id: "recursion-balanced-parentheses-check",
    title: "Simple Balanced Parentheses",
    description:
      "Write a recursive function to check if a string containing only parentheses `()` is balanced.",
    difficulty: "Beginner",
    category: "Recursion Techniques",
    buttonText: "Check Balance",
  },
  // problem--> 31
  {
    id: "recursion-array-flatten",
    title: "Flatten a Nested Array",
    description:
      "Write a recursive function that takes a nested array and returns a new, single-level flattened array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Flatten Array",
  },
  // problem--> 32
  {
    id: "recursion-binary-search",
    title: "Recursive Binary Search",
    description:
      "Implement the binary search algorithm recursively to find the index of a target value in a sorted array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Perform Search",
  },
  // problem--> 33
  {
    id: "recursion-memoized-fibonacci",
    title: "Memoized Fibonacci",
    description:
      "Improve the recursive Fibonacci function by using memoization to avoid redundant calculations, making it much more efficient.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Calculate Efficiently",
  },
  // problem--> 34
  {
    id: "recursion-string-permutations",
    title: "String Permutations",
    description:
      "Write a recursive function that returns an array of all possible permutations of a given string.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Get Permutations",
  },
  // problem--> 35
  {
    id: "recursion-tree-traversal-inorder",
    title: "In-Order Tree Traversal",
    description:
      "Given a binary tree, write a recursive function to perform an in-order traversal (Left, Root, Right) and return the node values in an array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Traverse In-Order",
  },
  // problem--> 36
  {
    id: "recursion-tree-traversal-preorder",
    title: "Pre-Order Tree Traversal",
    description:
      "Given a binary tree, write a recursive function to perform a pre-order traversal (Root, Left, Right) and return the node values in an array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Traverse Pre-Order",
  },
  // problem--> 37
  {
    id: "recursion-tree-traversal-postorder",
    title: "Post-Order Tree Traversal",
    description:
      "Given a binary tree, write a recursive function to perform a post-order traversal (Left, Right, Root) and return the node values in an array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Traverse Post-Order",
  },
  // problem--> 38
  {
    id: "recursion-deep-object-clone",
    title: "Deep Clone an Object",
    description:
      "Write a recursive function to create a deep clone of a JSON-serializable object (containing nested objects and arrays).",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Deep Clone",
  },
  // problem--> 39
  {
    id: "recursion-subsets-of-a-set",
    title: "Subsets of a Set (Power Set)",
    description:
      "Write a recursive function that returns all possible subsets (the power set) of a given array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Generate Subsets",
  },
  // problem--> 40
  {
    id: "recursion-merge-sort-conceptual",
    title: "Merge Sort Algorithm",
    description:
      "Implement the Merge Sort algorithm, a classic divide-and-conquer sorting algorithm that uses recursion.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Perform Merge Sort",
  },
  // problem--> 41
  {
    id: "recursion-tree-depth",
    title: "Find Tree Depth",
    description:
      "Write a recursive function to calculate the maximum depth (or height) of a binary tree.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Calculate Depth",
  },
  // problem--> 42
  {
    id: "recursion-pathfinding-grid",
    title: "Grid Pathfinding",
    description:
      "Count all possible paths from the top-left to the bottom-right corner of an M×N grid, assuming you can only move right or down.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Count Paths",
  },
  // problem--> 43
  {
    id: "recursion-balanced-brackets",
    title: "Generalized Balanced Brackets",
    description:
      "Write a recursive function to check if a string containing `()`, `[]`, and `{}` is balanced.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Check Brackets",
  },
  // problem--> 44
  {
    id: "recursion-collect-strings-from-object",
    title: "Collect Strings from Object",
    description:
      "Given an object with nested objects, write a recursive function to find all values that are strings and return them in an array.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Collect Strings",
  },
  // problem--> 45
  {
    id: "recursion-all-combinations-of-length-k",
    title: "Combinations of Length K",
    description:
      "Given an array of unique elements, write a recursive function to find all combinations of a specific length `k`.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Find Combinations",
  },
  // problem--> 46
  {
    id: "recursion-digital-root",
    title: "Digital Root",
    description:
      "Write a recursive function that finds the digital root of a number (the single-digit value obtained by an iterative process of summing digits).",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Find Digital Root",
  },
  // problem--> 47
  {
    id: "recursion-valid-bst-check",
    title: "Validate a Binary Search Tree",
    description:
      "Write a recursive function to determine if a given binary tree is a valid Binary Search Tree (BST).",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Validate BST",
  },
  // problem--> 48
  {
    id: "recursion-tree-leaf-sum",
    title: "Sum of Tree Leaf Nodes",
    description:
      "Write a recursive function that sums the values of all the leaf nodes in a binary tree.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Sum Leaf Nodes",
  },
  // problem--> 49
  {
    id: "recursion-find-path-in-tree",
    title: "Find Path to Node in Tree",
    description:
      "Write a recursive function that finds and returns the path from the root to a given node value in a binary tree.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Find Path",
  },
  // problem--> 50
  {
    id: "recursion-graph-dfs",
    title: "Graph Depth-First Search",
    description:
      "Implement a recursive Depth-First Search (DFS) for a graph represented by an adjacency list, starting from a given node.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Perform DFS",
  },
  // problem--> 51
  {
    id: "recursion-integer-to-roman",
    title: "Integer to Roman Numeral",
    description:
      "Write a recursive function to convert an integer into its Roman numeral representation.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Convert to Roman",
  },
  // problem--> 52
  {
    id: "recursion-flatten-object",
    title: "Flatten a Nested Object",
    description:
      'Write a recursive function that flattens a nested object into a single-level object with dot-separated keys (e.g., `{ a: { b: 1 } }` becomes `{ "a.b": 1 }`).',
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Flatten Object",
  },
  // problem--> 53
  {
    id: "recursion-step-combinations",
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase with `n` steps. You can take 1, 2, or 3 steps at a time. Write a recursive function to find the total number of unique ways to reach the top.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Count Ways",
  },
  // problem--> 54
  {
    id: "recursion-is-tree-symmetric",
    title: "Symmetric Tree Check",
    description:
      "Write a recursive function to check if a binary tree is a mirror image of itself (symmetric around its center).",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Check Symmetry",
  },
  // problem--> 55
  {
    id: "recursion-lowest-common-ancestor-bst",
    title: "Lowest Common Ancestor in BST",
    description:
      "Given a Binary Search Tree (BST) and two nodes, find their Lowest Common Ancestor (LCA) using recursion.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Find LCA",
  },
  // problem--> 56
  {
    id: "recursion-quick-sort-conceptual",
    title: "Quick Sort Algorithm",
    description:
      "Implement the Quick Sort algorithm, a classic and efficient divide-and-conquer sorting algorithm that uses recursion.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Perform Quick Sort",
  },
  // problem--> 57
  {
    id: "recursion-generate-parentheses",
    title: "Generate Balanced Parentheses",
    description:
      "Given a number `n`, write a recursive function to generate all combinations of `n` pairs of well-formed parentheses.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Generate Parentheses",
  },
  // problem--> 58
  {
    id: "recursion-telephone-letter-combinations",
    title: "Phone Letter Combinations",
    description:
      "Given a string of digits, return all possible letter combinations that the number could represent, based on a standard telephone keypad.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Get Combinations",
  },
  // problem--> 59
  {
    id: "recursion-tree-to-linked-list",
    title: "Flatten Binary Tree to Linked List",
    description:
      'Write a recursive function to flatten a binary tree into a "linked list" structure in-place (pre-order).',
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Flatten Tree",
  },
  // problem--> 60
  {
    id: "recursion-word-break",
    title: "Word Break Problem",
    description:
      "Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of one or more dictionary words.",
    difficulty: "Intermediate",
    category: "Recursion Techniques",
    buttonText: "Check Word Break",
  },
  // problem--> 61
  {
    id: "recursion-n-queens-problem",
    title: "N-Queens Problem",
    description:
      "Write a function that solves the N-Queens problem. Return the total number of distinct solutions for placing N queens on an N×N chessboard so that no two queens threaten each other.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Solve N-Queens",
  },
  // problem--> 62
  {
    id: "recursion-sudoku-solver",
    title: "Sudoku Solver",
    description:
      "Write a recursive backtracking algorithm to solve a Sudoku puzzle represented by a 9x9 grid.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Solve Sudoku",
  },
  // problem--> 63
  {
    id: "recursion-longest-common-subsequence",
    title: "Longest Common Subsequence",
    description:
      "Given two strings, find the length of the longest common subsequence (LCS) using a recursive approach (with memoization for efficiency).",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Find LCS Length",
  },
  // problem--> 64
  {
    id: "recursion-knapsack-problem",
    title: "0/1 Knapsack Problem",
    description:
      "Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value. Implement a recursive solution.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Solve Knapsack",
  },
  // problem--> 65
  {
    id: "recursion-word-search-grid",
    title: "Word Search in a Grid",
    description:
      "Given a 2D grid of characters and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Search for Word",
  },
  // problem--> 66
  {
    id: "recursion-expression-evaluation",
    title: "Expression Evaluation",
    description:
      "Write a recursive descent parser to evaluate a simple arithmetic expression string (with +, *, and parentheses) and return the result.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Evaluate Expression",
  },
  // problem--> 67
  {
    id: "recursion-tail-call-optimization-concept",
    title: "Tail Call Optimization (TCO)",
    description:
      "Refactor a standard recursive function (like factorial) into a tail-recursive form, and explain why this form can be optimized to prevent stack overflow.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Demonstrate TCO",
  },
  // problem--> 68
  {
    id: "recursion-rat-in-a-maze",
    title: "Rat in a Maze",
    description:
      "A maze is given as an N*N binary matrix of blocks where source is the top-left block and destination is the bottom-right. Find if a path exists from source to destination.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Find Path in Maze",
  },
  // problem--> 69
  {
    id: "recursion-edit-distance",
    title: "Edit Distance",
    description:
      "Given two strings, find the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Calculate Edit Distance",
  },
  // problem--> 70
  {
    id: "recursion-regular-expression-matching",
    title: "Regular Expression Matching",
    description:
      "Implement a recursive function for regular expression matching that supports `.` (matches any single character) and `*` (matches zero or more of the preceding element).",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Perform Regex Match",
  },
  // problem--> 71
  {
    id: "recursion-optimal-bst",
    title: "Optimal Binary Search Tree",
    description:
      "Given a sorted array of keys and their search frequencies, build the Binary Search Tree that has the minimum total search cost. Implement a recursive solution.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Find Optimal Cost",
  },
  // problem--> 72
  {
    id: "recursion-sierpinski-triangle",
    title: "Sierpinski Triangle (Conceptual)",
    description:
      "Write a function that generates the coordinates for a Sierpinski Triangle fractal of a given depth using recursion. The output can be a list of triangles to draw.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Generate Fractal",
  },
  // problem--> 73
  {
    id: "recursion-find-all-paths-in-graph",
    title: "All Paths in a Graph",
    description:
      "Given a directed acyclic graph (DAG), find all possible paths from a source node to a target node.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Find All Paths",
  },
  // problem--> 74
  {
    id: "recursion-mutual-recursion",
    title: "Mutual Recursion Example",
    description:
      "Implement two functions, `isEven` and `isOdd`, that are mutually recursive (they call each other) to determine if a number is even or odd.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Test Mutual Recursion",
  },
  // problem--> 75
  {
    id: "recursion-matrix-chain-multiplication",
    title: "Matrix Chain Multiplication",
    description:
      "Given a sequence of matrices, find the most efficient way to multiply these matrices together. The problem is not to perform the multiplication, but merely to decide the sequence of multiplications.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Find Min Multiplications",
  },
  // problem--> 76
  {
    id: "recursion-y-combinator-concept",
    title: "The Y Combinator (Conceptual)",
    description:
      "Explain and implement a simplified version of the Y Combinator in JavaScript to achieve recursion without named functions, demonstrating a deep functional programming concept.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Implement U Combinator",
  },
  // problem--> 77
  {
    id: "recursion-flood-fill",
    title: "Flood Fill Algorithm",
    description:
      'Implement the "flood fill" algorithm. Given a 2D screen, a starting point, and a new color, fill in the surrounding area until the color changes from the original color.',
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Perform Flood Fill",
  },
  // problem--> 78
  {
    id: "recursion-trie-implementation",
    title: "Implement a Trie",
    description:
      "Implement a Trie (prefix tree) data structure with `insert` and `search` methods, which will internally use recursion for traversal.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Build and Test Trie",
  },
  // problem--> 79
  {
    id: "recursion-boggle-solver",
    title: "Boggle Solver",
    description:
      "Given a Boggle board and a dictionary, find all valid words on the board. A word can be formed from adjacent letters (horizontally, vertically, or diagonally).",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Solve Boggle",
  },
  // problem--> 80
  {
    id: "recursion-json-parser",
    title: "Simple JSON Parser",
    description:
      "Write a recursive descent parser that can parse a simplified JSON string (supporting nested objects, arrays, strings, and numbers) into a JavaScript object.",
    difficulty: "Advanced",
    category: "Recursion Techniques",
    buttonText: "Parse JSON",
  },
];

// Add more problems to reach 200
for (let i = 81; i <= 200; i++) {
  problems.push({
    id: `recursion-placeholder-${i}`,
    title: `Placeholder Problem ${i}`,
    description: `This is a placeholder for a unique recursion problem. Challenge: Implement a complex recursive algorithm.`,
    difficulty: i < 120 ? "Intermediate" : "Advanced",
    category: "Recursion Techniques",
    buttonText: "Solve It",
  });
}
