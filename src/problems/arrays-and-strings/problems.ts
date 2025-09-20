// problem--> 01
// import { Problem } from "../../types";

import { Problem } from "@/types";

export const problems: Problem[] = [
  // --- Fundamentals: Basic String & Array Operations ---
  // problem--> 01
  {
    id: "as-reverse-string",
    title: "Reverse a String",
    description:
      "Write a function that takes a string and returns a new string with the characters in reverse order.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Reverse String",
  },
  // problem--> 02
  {
    id: "as-is-palindrome",
    title: "Check for Palindrome",
    description:
      "Write a function that checks if a given string is a palindrome (reads the same forwards and backward), ignoring case and non-alphanumeric characters.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "A man, a plan, a canal: Panama",
      },
    ],
    buttonText: "Check Palindrome",
  },
  // problem--> 03
  {
    id: "as-get-string-length",
    title: "Get String Length",
    description:
      "Write a function that returns the number of characters in a string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "JavaScript" },
    ],
    buttonText: "Get Length",
  },
  // problem--> 04
  {
    id: "as-string-to-uppercase",
    title: "Convert String to Uppercase",
    description:
      "Use a built-in method to convert a string to all uppercase letters.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello world" },
    ],
    buttonText: "To Uppercase",
  },
  // problem--> 05
  {
    id: "as-string-to-lowercase",
    title: "Convert String to Lowercase",
    description:
      "Use a built-in method to convert a string to all lowercase letters.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "HELLO WORLD" },
    ],
    buttonText: "To Lowercase",
  },
  // problem--> 06
  {
    id: "as-access-first-array-element",
    title: "Access First Array Element",
    description: "Given an array, return its first element.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "apple,banana,cherry",
      },
    ],
    buttonText: "Get First Element",
  },
  // problem--> 07
  {
    id: "as-access-last-array-element",
    title: "Access Last Array Element",
    description:
      "Given an array, return its last element without modifying the array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "apple,banana,cherry",
      },
    ],
    buttonText: "Get Last Element",
  },
  // problem--> 08
  {
    id: "as-array-push",
    title: "Add to End of Array with `.push()`",
    description:
      "Add a new element to the end of an array using the `.push()` method. Return the new array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,3",
      },
      {
        id: "element",
        label: "Element to add",
        type: "text",
        defaultValue: "4",
      },
    ],
    buttonText: "Push Element",
  },
  // problem--> 09
  {
    id: "as-array-pop",
    title: "Remove from End of Array with `.pop()`",
    description:
      "Remove the last element from an array using the `.pop()` method. Return the modified array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Pop Element",
  },
  // problem--> 10
  {
    id: "as-array-shift",
    title: "Remove from Start of Array with `.shift()`",
    description:
      "Remove the first element from an array using the `.shift()` method. Return the modified array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c",
      },
    ],
    buttonText: "Shift Element",
  },
  // problem--> 11
  {
    id: "as-array-unshift",
    title: "Add to Start of Array with `.unshift()`",
    description:
      "Add a new element to the beginning of an array using the `.unshift()` method. Return the new array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "b,c",
      },
      {
        id: "element",
        label: "Element to add",
        type: "text",
        defaultValue: "a",
      },
    ],
    buttonText: "Unshift Element",
  },
  // problem--> 12
  {
    id: "as-array-join",
    title: "Join Array Elements into a String",
    description:
      "Use the `.join()` method to combine all elements of an array into a single string, separated by a custom delimiter.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "fire,air,water",
      },
      {
        id: "separator",
        label: "Separator",
        type: "text",
        defaultValue: " - ",
      },
    ],
    buttonText: "Join",
  },
  // problem--> 13
  {
    id: "as-string-split",
    title: "Split a String into an Array",
    description:
      "Use the `.split()` method to break a sentence into an array of words.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "Sentence",
        type: "text",
        defaultValue: "JavaScript is fun",
      },
    ],
    buttonText: "Split",
  },
  // problem--> 14
  {
    id: "as-find-max-in-array",
    title: "Find Maximum in Array",
    description: "Use a loop to find the largest number in an array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "3, 9, 1, 20, 5",
      },
    ],
    buttonText: "Find Max",
  },
  // problem--> 15
  {
    id: "as-find-min-in-array",
    title: "Find Minimum in Array",
    description: "Use a loop to find the smallest number in an array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "3, 9, 1, 20, -5",
      },
    ],
    buttonText: "Find Min",
  },
  // problem--> 16
  {
    id: "as-sum-array-elements",
    title: "Sum All Array Elements",
    description:
      "Write a function that calculates the sum of all numbers in an array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,3,4,5",
      },
    ],
    buttonText: "Calculate Sum",
  },
  // problem--> 17
  {
    id: "as-count-characters",
    title: "Count Character Occurrences",
    description:
      "Write a function that counts how many times a specific character appears in a string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello world" },
      {
        id: "char",
        label: "Character to count",
        type: "text",
        defaultValue: "l",
      },
    ],
    buttonText: "Count",
  },
  // problem--> 18
  {
    id: "as-remove-duplicates-from-array",
    title: "Remove Duplicates from Array",
    description:
      "Write a function that takes an array and returns a new array with all duplicate elements removed.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,2,3,4,4,5",
      },
    ],
    buttonText: "Remove Duplicates",
  },
  // problem--> 19
  {
    id: "as-array-slice",
    title: "Extract a Portion of an Array with `.slice()`",
    description:
      "Use the `.slice()` method to create a new array containing a portion of an existing array without modifying the original.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c,d,e",
      },
      { id: "start", label: "Start Index", type: "number", defaultValue: 1 },
      { id: "end", label: "End Index", type: "number", defaultValue: 3 },
    ],
    buttonText: "Slice",
  },
  // problem--> 20
  {
    id: "as-array-splice",
    title: "Modify Array with `.splice()`",
    description:
      "Use the `.splice()` method to remove elements from and/or add new elements to an array. Return the modified array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,e,f",
      },
    ],
    buttonText: "Splice in 'c' and 'd'",
  },
  // problem--> 21
  {
    id: "as-fizzbuzz",
    title: "FizzBuzz Challenge",
    description:
      "Loop from 1 to a given number. For multiples of 3, output 'Fizz'. For 5, 'Buzz'. For both, 'FizzBuzz'. Otherwise, the number.",
    category: "Arrays & Strings",
    inputs: [
      { id: "num", label: "Loop up to", type: "number", defaultValue: 15 },
    ],
    buttonText: "Run FizzBuzz",
  },
  // problem--> 22
  {
    id: "as-vowels-counter",
    title: "Vowels Counter",
    description:
      "Write a function that returns the number of vowels used in a string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "Hi There!" },
    ],
    buttonText: "Count Vowels",
  },
  // problem--> 23
  {
    id: "as-find-longest-word",
    title: "Find Longest Word in String",
    description:
      "Write a function that takes a sentence and returns the longest word.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        defaultValue: "The quick brown fox jumped over the lazy dog",
      },
    ],
    buttonText: "Find Longest",
  },
  // problem--> 24
  {
    id: "as-title-case-sentence",
    title: "Title Case a Sentence",
    description:
      "Write a function that takes a sentence and returns it with the first letter of each word capitalized.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        defaultValue: "I'm a little tea pot",
      },
    ],
    buttonText: "Title Case",
  },
  // problem--> 25
  {
    id: "as-array-map-double",
    title: "Double Array Elements with `.map()`",
    description:
      "Use the `.map()` method to create a new array where each number from an original array is doubled.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,3,4",
      },
    ],
    buttonText: "Double",
  },
  // problem--> 26
  {
    id: "as-array-filter-evens",
    title: "Filter for Even Numbers with `.filter()`",
    description:
      "Use the `.filter()` method to create a new array containing only the even numbers from an original array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,3,4,5,6",
      },
    ],
    buttonText: "Filter Evens",
  },
  // problem--> 27
  {
    id: "as-array-reduce-sum",
    title: "Sum with `.reduce()`",
    description:
      "Use the `.reduce()` method to calculate the sum of all numbers in an array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "10,20,30,40",
      },
    ],
    buttonText: "Sum",
  },
  // problem--> 28
  {
    id: "as-array-find",
    title: "Find an Element with `.find()`",
    description:
      "Use the `.find()` method to find the first element in an array that satisfies a condition (e.g., the first number greater than 10).",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "5,8,12,4",
      },
    ],
    buttonText: "Find > 10",
  },
  // problem--> 29
  {
    id: "as-array-every",
    title: "Check All Elements with `.every()`",
    description:
      "Use the `.every()` method to check if all elements in an array are positive numbers.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,5,9,12",
      },
    ],
    buttonText: "Check all positive",
  },
  // problem--> 30
  {
    id: "as-array-some",
    title: "Check Some Elements with `.some()`",
    description:
      "Use the `.some()` method to check if at least one element in an array is a negative number.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,5,-9,12",
      },
    ],
    buttonText: "Check for any negative",
  },
  // problem--> 31
  {
    id: "as-array-sort-numbers",
    title: "Sort an Array of Numbers",
    description:
      "Use the `.sort()` method with a compare function to correctly sort an array of numbers in ascending order.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "10,5,8,2,1",
      },
    ],
    buttonText: "Sort Numbers",
  },
  // problem--> 32
  {
    id: "as-array-sort-strings",
    title: "Sort an Array of Strings",
    description:
      "Use the `.sort()` method to sort an array of strings alphabetically.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of strings",
        type: "text",
        defaultValue: "cherry,apple,banana",
      },
    ],
    buttonText: "Sort Strings",
  },
  // problem--> 33
  {
    id: "as-anagram-check",
    title: "Check for Anagrams",
    description:
      "Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequencies).",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str1",
        label: "First String",
        type: "text",
        defaultValue: "listen",
      },
      {
        id: "str2",
        label: "Second String",
        type: "text",
        defaultValue: "silent",
      },
    ],
    buttonText: "Check Anagrams",
  },
  // problem--> 34
  {
    id: "as-max-char",
    title: "Max Character",
    description:
      "Given a string, return the character that is most commonly used in the string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abcccccccd" },
    ],
    buttonText: "Find Max Char",
  },
  // problem--> 35
  {
    id: "as-array-chunking",
    title: "Array Chunking",
    description:
      "Write a function that splits an array into smaller arrays of a specified size.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c,d,e,f,g",
      },
      { id: "size", label: "Chunk Size", type: "number", defaultValue: 2 },
    ],
    buttonText: "Chunk Array",
  },
  // problem--> 36
  {
    id: "as-move-zeroes",
    title: "Move Zeroes",
    description:
      "Given an integer array, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "0,1,0,3,12",
      },
    ],
    buttonText: "Move Zeroes",
  },
  // problem--> 37
  {
    id: "as-array-flat",
    title: "Flatten a Nested Array with `.flat()`",
    description:
      "Use the `.flat()` method to create a new array with all sub-array elements concatenated into it.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Nested Array (JSON)",
        type: "textarea",
        defaultValue: "[1, [2, [3, [4]]]]",
      },
      { id: "depth", label: "Depth", type: "number", defaultValue: 2 },
    ],
    buttonText: "Flatten",
  },
  // problem--> 38
  {
    id: "as-array-intersection",
    title: "Find Array Intersection",
    description:
      "Given two arrays, create a function that finds the intersection of the two arrays (elements that are present in both).",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr1",
        label: "First Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,3,4",
      },
      {
        id: "arr2",
        label: "Second Array (comma-separated)",
        type: "text",
        defaultValue: "3,4,5,6",
      },
    ],
    buttonText: "Find Intersection",
  },
  // problem--> 39
  {
    id: "as-array-union",
    title: "Find Array Union",
    description:
      "Given two arrays, create a function that finds the union of the two arrays (all unique elements from both).",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr1",
        label: "First Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,3",
      },
      {
        id: "arr2",
        label: "Second Array (comma-separated)",
        type: "text",
        defaultValue: "2,3,4",
      },
    ],
    buttonText: "Find Union",
  },
  // problem--> 40
  {
    id: "as-is-isogram",
    title: "Check for Isogram",
    description:
      "An isogram is a word that has no repeating letters. Implement a function to determine if a string is an isogram, ignoring case.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "dermatoglyphics",
      },
    ],
    buttonText: "Check Isogram",
  },
  // problem--> 41
  {
    id: "as-group-anagrams",
    title: "Group Anagrams",
    description: "Given an array of strings, group the anagrams together.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Strings",
        type: "text",
        defaultValue: "eat,tea,tan,ate,nat,bat",
      },
    ],
    buttonText: "Group Anagrams",
  },
  // problem--> 42
  {
    id: "as-longest-substring-no-repeats",
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string, find the length of the longest substring without repeating characters.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abcabcbb" },
    ],
    buttonText: "Find Length",
  },
  // problem--> 43
  {
    id: "as-two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Integers",
        type: "text",
        defaultValue: "2,7,11,15",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 9 },
    ],
    buttonText: "Find Indices",
  },
  // problem--> 44
  {
    id: "as-container-with-most-water",
    title: "Container With Most Water",
    description:
      "Given n non-negative integers representing vertical lines, find two lines that form a container that contains the most water.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Heights",
        type: "text",
        defaultValue: "1,8,6,2,5,4,8,3,7",
      },
    ],
    buttonText: "Find Max Area",
  },
  // problem--> 45
  {
    id: "as-sliding-window-max-sum",
    title: "Sliding Window: Max Sum Subarray",
    description:
      "Given an array of integers and a number k, find the maximum sum of a subarray of size k.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "2,1,5,1,3,2" },
      { id: "k", label: "Window Size (k)", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Max Sum",
  },
  // problem--> 46
  {
    id: "as-kadanes-algorithm",
    title: "Maximum Subarray Sum (Kadane's Algorithm)",
    description:
      "Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Integers",
        type: "text",
        defaultValue: "-2,1,-3,4,-1,2,1,-5,4",
      },
    ],
    buttonText: "Find Max Sum",
  },
  // problem--> 47
  {
    id: "as-3sum",
    title: "3Sum",
    description:
      "Given an array of integers, find all unique triplets in the array which gives the sum of zero.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Integers",
        type: "text",
        defaultValue: "-1,0,1,2,-1,-4",
      },
    ],
    buttonText: "Find Triplets",
  },
  // problem--> 48
  {
    id: "as-product-of-array-except-self",
    title: "Product of Array Except Self",
    description:
      "Given an integer array, return an array such that the output at index i is the product of all the elements of the original array except the one at i.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Integers",
        type: "text",
        defaultValue: "1,2,3,4",
      },
    ],
    buttonText: "Calculate Products",
  },
  // problem--> 49
  {
    id: "as-valid-parentheses",
    title: "Valid Parentheses",
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "String of Brackets",
        type: "text",
        defaultValue: "()[]{}",
      },
    ],
    buttonText: "Validate",
  },
  // problem--> 50
  {
    id: "as-spiral-matrix-traversal",
    title: "Spiral Matrix Traversal",
    description:
      "Given an m x n matrix, return all elements of the matrix in spiral order.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
      },
    ],
    buttonText: "Traverse Spiral",
  },
  // problem--> 51
  {
    id: "as-rotate-matrix",
    title: "Rotate Matrix 90 Degrees",
    description: "Rotate an N x N matrix by 90 degrees clockwise in-place.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Rotate",
  },
  // problem--> 52
  {
    id: "as-set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    description:
      "Given an m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON 2D array)",
        type: "textarea",
        defaultValue: "[[1,1,1],[1,0,1],[1,1,1]]",
      },
    ],
    buttonText: "Set Zeroes",
  },
  // problem--> 53
  {
    id: "as-word-search-matrix",
    title: "Word Search in Matrix",
    description:
      "Given an m x n grid of characters and a word, return true if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "board",
        label: "Board (JSON 2D array of chars)",
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
    buttonText: "Search Word",
  },
  // problem--> 54
  {
    id: "as-minimum-window-substring",
    title: "Minimum Window Substring",
    description:
      "Given two strings S and T, find the minimum window in S which will contain all the characters in T.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "s",
        label: "Search String (S)",
        type: "text",
        defaultValue: "ADOBECODEBANC",
      },
      {
        id: "t",
        label: "Target String (T)",
        type: "text",
        defaultValue: "ABC",
      },
    ],
    buttonText: "Find Minimum Window",
  },
  // problem--> 55
  {
    id: "as-trapping-rain-water",
    title: "Trapping Rain Water",
    description:
      "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "heights",
        label: "Elevation Map Array",
        type: "text",
        defaultValue: "0,1,0,2,1,0,1,3,2,1,2,1",
      },
    ],
    buttonText: "Calculate Water",
  },
  // problem--> 56
  {
    id: "as-text-justification",
    title: "Text Justification",
    description:
      "Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "This,is,an,example,of,text,justification.",
      },
      { id: "maxWidth", label: "Max Width", type: "number", defaultValue: 16 },
    ],
    buttonText: "Justify Text",
  },
  // problem--> 57
  {
    id: "as-roman-to-integer",
    title: "Roman to Integer",
    description: "Given a roman numeral, convert it to an integer.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "roman",
        label: "Roman Numeral",
        type: "text",
        defaultValue: "MCMXCIV",
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 58
  {
    id: "as-integer-to-roman",
    title: "Integer to Roman",
    description: "Given an integer, convert it to a Roman numeral.",
    category: "Arrays & Strings",
    inputs: [
      { id: "num", label: "Integer", type: "number", defaultValue: 1994 },
    ],
    buttonText: "Convert",
  },
  // problem--> 59
  {
    id: "as-longest-common-prefix",
    title: "Longest Common Prefix",
    description:
      "Write a function to find the longest common prefix string amongst an array of strings.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Strings",
        type: "text",
        defaultValue: "flower,flow,flight",
      },
    ],
    buttonText: "Find Prefix",
  },
  // problem--> 60
  {
    id: "as-implement-strstr",
    title: "Implement strStr()",
    description:
      "Return the index of the first occurrence of a needle string in a haystack string, or -1 if needle is not part of haystack.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "haystack",
        label: "Haystack",
        type: "text",
        defaultValue: "hello",
      },
      { id: "needle", label: "Needle", type: "text", defaultValue: "ll" },
    ],
    buttonText: "Find Index",
  },
  // problem--> 61
  {
    id: "as-merge-sorted-arrays",
    title: "Merge Sorted Arrays",
    description:
      "Given two sorted integer arrays, merge the second array into the first one as a single sorted array. Assume the first array has enough space.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr1",
        label: "Array 1 (with space)",
        type: "text",
        defaultValue: "1,2,3,0,0,0",
      },
      {
        id: "m",
        label: "Elements in Array 1",
        type: "number",
        defaultValue: 3,
      },
      { id: "arr2", label: "Array 2", type: "text", defaultValue: "2,5,6" },
      {
        id: "n",
        label: "Elements in Array 2",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Merge Arrays",
  },
  // problem--> 62
  {
    id: "as-remove-duplicates-sorted-array-ii",
    title: "Remove Duplicates from Sorted Array II",
    description:
      "Given a sorted array, remove the duplicates in-place such that each unique element appears at most twice. Return the new length.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array",
        type: "text",
        defaultValue: "1,1,1,2,2,3",
      },
    ],
    buttonText: "Remove Duplicates",
  },
  // problem--> 63
  {
    id: "as-plus-one",
    title: "Plus One",
    description:
      "Given a large integer represented as an integer array, increment the integer by one and return the resulting array of digits.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Digits",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Increment",
  },
  // problem--> 64
  {
    id: "as-length-of-last-word",
    title: "Length of Last Word",
    description:
      "Given a string consisting of words and spaces, return the length of the last word in the string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "Hello World" },
    ],
    buttonText: "Get Length",
  },
  // problem--> 65
  {
    id: "as-rotate-array",
    title: "Rotate Array",
    description:
      "Given an array, rotate the array to the right by k steps, where k is non-negative.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "1,2,3,4,5,6,7",
      },
      { id: "k", label: "Steps (k)", type: "number", defaultValue: 3 },
    ],
    buttonText: "Rotate",
  },
  // problem--> 66
  {
    id: "as-longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    description: "Given a string, return the longest palindromic substring.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "babad" },
    ],
    buttonText: "Find Substring",
  },
  // problem--> 67
  {
    id: "as-zigzag-conversion",
    title: "ZigZag Conversion",
    description:
      "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows. Write the code that will take a string and make this conversion.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "PAYPALISHIRING",
      },
      { id: "rows", label: "Number of Rows", type: "number", defaultValue: 3 },
    ],
    buttonText: "Convert",
  },
  // problem--> 68
  {
    id: "as-string-to-integer-atoi",
    title: "String to Integer (atoi)",
    description:
      "Implement a function that converts a string to a 32-bit signed integer, handling whitespace, signs, and overflow.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "   -42" },
    ],
    buttonText: "Convert to Integer",
  },
  // problem--> 69
  {
    id: "as-jump-game",
    title: "Jump Game",
    description:
      "Given an array of non-negative integers, you are initially positioned at the first index. Each element represents your maximum jump length. Determine if you can reach the last index.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "2,3,1,1,4" },
    ],
    buttonText: "Can Jump?",
  },
  // problem--> 70
  {
    id: "as-find-all-duplicates",
    title: "Find All Duplicates in an Array",
    description:
      "Given an array of integers, 1 <= a[i] <= n (n = size of array), some elements appear twice and others appear once. Find all the elements that appear twice.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "4,3,2,7,8,2,3,1",
      },
    ],
    buttonText: "Find Duplicates",
  },
  // problem--> 71
  {
    id: "as-first-missing-positive",
    title: "First Missing Positive",
    description:
      "Given an unsorted integer array, find the smallest missing positive integer.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,4,-1,1" },
    ],
    buttonText: "Find Missing",
  },
  // problem--> 72
  {
    id: "as-next-permutation",
    title: "Next Permutation",
    description:
      "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3" },
    ],
    buttonText: "Find Next",
  },
  // problem--> 73
  {
    id: "as-search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    description:
      "You are given an integer array sorted in ascending order, that has been rotated at some unknown pivot. Given a target value, return its index if found, or -1 otherwise.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Rotated Array",
        type: "text",
        defaultValue: "4,5,6,7,0,1,2",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 0 },
    ],
    buttonText: "Search",
  },
  // problem--> 74
  {
    id: "as-find-first-last-position-sorted-array",
    title: "Find First and Last Position in Sorted Array",
    description:
      "Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array",
        type: "text",
        defaultValue: "5,7,7,8,8,10",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 8 },
    ],
    buttonText: "Find Position",
  },
  // problem--> 75
  {
    id: "as-permutations",
    title: "Permutations",
    description:
      "Given an array of distinct integers, return all the possible permutations.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3" },
    ],
    buttonText: "Generate Permutations",
  },
  // problem--> 76
  {
    id: "as-permutations-ii",
    title: "Permutations II (with Duplicates)",
    description:
      "Given a collection of numbers that might contain duplicates, return all possible unique permutations.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array with Duplicates",
        type: "text",
        defaultValue: "1,1,2",
      },
    ],
    buttonText: "Generate Unique Permutations",
  },
  // problem--> 77
  {
    id: "as-combinations",
    title: "Combinations",
    description:
      "Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.",
    category: "Arrays & Strings",
    inputs: [
      { id: "n", label: "n", type: "number", defaultValue: 4 },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Generate Combinations",
  },
  // problem--> 78
  {
    id: "as-combination-sum",
    title: "Combination Sum",
    description:
      "Given a set of candidate numbers (without duplicates) and a target number, find all unique combinations where the candidate numbers sum to target. The same number may be chosen multiple times.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "candidates",
        label: "Candidates",
        type: "text",
        defaultValue: "2,3,6,7",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 7 },
    ],
    buttonText: "Find Combinations",
  },
  // problem--> 79
  {
    id: "as-combination-sum-ii",
    title: "Combination Sum II (with Duplicates)",
    description:
      "Given a collection of candidate numbers that might contain duplicates and a target number, find all unique combinations where the candidate numbers sum to target. Each number may only be used once.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "candidates",
        label: "Candidates",
        type: "text",
        defaultValue: "10,1,2,7,6,1,5",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 8 },
    ],
    buttonText: "Find Unique Combinations",
  },
  // problem--> 80
  {
    id: "as-subsets",
    title: "Subsets",
    description:
      "Given an integer array of unique elements, return all possible subsets (the power set).",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3" },
    ],
    buttonText: "Generate Subsets",
  },
  // problem--> 81
  {
    id: "as-reshape-matrix",
    title: "Reshape the Matrix",
    description:
      "Given a 2D array and new dimensions (r, c), reshape the matrix. If impossible, return the original.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2],[3,4]]",
      },
      { id: "r", label: "New Rows (r)", type: "number", defaultValue: 1 },
      { id: "c", label: "New Columns (c)", type: "number", defaultValue: 4 },
    ],
    buttonText: "Reshape",
  },
  // problem--> 82
  {
    id: "as-toeplitz-matrix",
    title: "Toeplitz Matrix",
    description:
      "A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element. Check if a matrix is Toeplitz.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3,4],[5,1,2,3],[9,5,1,2]]",
      },
    ],
    buttonText: "Check if Toeplitz",
  },
  // problem--> 83
  {
    id: "as-flipping-an-image",
    title: "Flipping an Image",
    description:
      "Given a binary matrix, flip it horizontally and then invert it (0s become 1s and vice versa).",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Binary Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,1,0],[1,0,1],[0,0,0]]",
      },
    ],
    buttonText: "Flip and Invert",
  },
  // problem--> 84
  {
    id: "as-transpose-matrix",
    title: "Transpose Matrix",
    description:
      "Given a 2D integer array matrix, return the transpose of the matrix (swap rows and columns).",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Transpose",
  },
  // problem--> 85
  {
    id: "as-valid-mountain-array",
    title: "Valid Mountain Array",
    description:
      "An array is a mountain array if it's strictly increasing then strictly decreasing. Check if an array is a valid mountain array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "0,3,2,1",
      },
    ],
    buttonText: "Validate",
  },
  // problem--> 86
  {
    id: "as-sort-array-by-parity",
    title: "Sort Array By Parity",
    description:
      "Rearrange an array so that all even integers appear at the beginning, followed by all odd integers.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "3,1,2,4",
      },
    ],
    buttonText: "Sort by Parity",
  },
  // problem--> 87
  {
    id: "as-squares-of-sorted-array",
    title: "Squares of a Sorted Array",
    description:
      "Given a sorted array (possibly with negative numbers), return an array of the squares of each number, also in sorted order.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array",
        type: "text",
        defaultValue: "-4,-1,0,3,10",
      },
    ],
    buttonText: "Square and Sort",
  },
  // problem--> 88
  {
    id: "as-k-diff-pairs",
    title: "K-diff Pairs in an Array",
    description:
      "Given an array and an integer k, find the number of unique pairs in the array where the absolute difference is k.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,1,4,1,5" },
      { id: "k", label: "Difference (k)", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Pairs",
  },
  // problem--> 89
  {
    id: "as-isomorphic-strings",
    title: "Isomorphic Strings",
    description:
      "Determine if two strings are isomorphic, meaning characters in the first string can be replaced to get the second, preserving order and maintaining a one-to-one mapping.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str1", label: "String 1", type: "text", defaultValue: "egg" },
      { id: "str2", label: "String 2", type: "text", defaultValue: "add" },
    ],
    buttonText: "Check Isomorphic",
  },
  // problem--> 90
  {
    id: "as-word-pattern",
    title: "Word Pattern",
    description:
      "Given a pattern string and a sentence, determine if the sentence follows the pattern with a bijective mapping.",
    category: "Arrays & Strings",
    inputs: [
      { id: "pattern", label: "Pattern", type: "text", defaultValue: "abba" },
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        defaultValue: "dog cat cat dog",
      },
    ],
    buttonText: "Check Pattern",
  },
  // problem--> 91
  {
    id: "as-happy-number",
    title: "Happy Number",
    description:
      "Determine if a number is 'happy' by repeatedly summing the squares of its digits. If the process reaches 1, it's a happy number. If it enters a cycle, it is not.",
    category: "Arrays & Strings",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 19 }],
    buttonText: "Check if Happy",
  },
  // problem--> 92
  {
    id: "as-contains-duplicate",
    title: "Contains Duplicate",
    description:
      "Given an integer array, find if the array contains any duplicate values.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,1" },
    ],
    buttonText: "Check for Duplicates",
  },
  // problem--> 93
  {
    id: "as-contains-duplicate-ii",
    title: "Contains Duplicate II",
    description:
      "Find if there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,1,2,3" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Check Duplicates",
  },
  // problem--> 94
  {
    id: "as-add-digits",
    title: "Add Digits (Digital Root)",
    description:
      "Given a non-negative integer, repeatedly add all its digits until the result has only one digit.",
    category: "Arrays & Strings",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 38 }],
    buttonText: "Find Digital Root",
  },
  // problem--> 95
  {
    id: "as-ugly-number",
    title: "Ugly Number",
    description:
      "An ugly number is a positive number whose prime factors only include 2, 3, and 5. Check if a number is ugly.",
    category: "Arrays & Strings",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 6 }],
    buttonText: "Check if Ugly",
  },
  // problem--> 96
  {
    id: "as-first-unique-character",
    title: "First Unique Character in a String",
    description:
      "Given a string, find the first non-repeating character and return its index. If it does not exist, return -1.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "leetcode" },
    ],
    buttonText: "Find First Unique",
  },
  // problem--> 97
  {
    id: "as-find-the-difference",
    title: "Find the Difference",
    description:
      "Given two strings `s` and `t`, where `t` is a shuffled `s` with one extra letter, find the added letter.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String s", type: "text", defaultValue: "abcd" },
      { id: "t", label: "String t", type: "text", defaultValue: "abcde" },
    ],
    buttonText: "Find Difference",
  },
  // problem--> 98
  {
    id: "as-ransom-note",
    title: "Ransom Note",
    description:
      "Determine if a ransom note can be constructed from the letters in a magazine. Each letter in the magazine can only be used once.",
    category: "Arrays & Strings",
    inputs: [
      { id: "note", label: "Ransom Note", type: "text", defaultValue: "aa" },
      { id: "magazine", label: "Magazine", type: "text", defaultValue: "aab" },
    ],
    buttonText: "Check Note",
  },
  // problem--> 99
  {
    id: "as-longest-harmonious-subsequence",
    title: "Longest Harmonious Subsequence",
    description:
      "A harmonious array's max and min values differ by exactly 1. Find the length of the longest harmonious subsequence from a given array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "1,3,2,2,5,2,3,7",
      },
    ],
    buttonText: "Find Length",
  },
  // problem--> 100
  {
    id: "as-set-mismatch",
    title: "Set Mismatch",
    description:
      "An array that should contain numbers from 1 to n has one number duplicated and one number missing. Find both.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,2,4" },
    ],
    buttonText: "Find Mismatch",
  },
  // problem--> 101
  {
    id: "as-goat-latin",
    title: "Goat Latin",
    description:
      "Convert a sentence to 'Goat Latin' based on a set of rules involving vowels, consonants, and word index.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        defaultValue: "I speak Goat Latin",
      },
    ],
    buttonText: "Translate",
  },
  // problem--> 102
  {
    id: "as-dutch-national-flag",
    title: "Dutch National Flag Problem",
    description:
      "Given an array of 0s, 1s, and 2s, sort it in-place (also known as 'Sort Colors').",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of 0s, 1s, 2s",
        type: "text",
        defaultValue: "2,0,2,1,1,0",
      },
    ],
    buttonText: "Sort Colors",
  },
  // problem--> 103
  {
    id: "as-find-all-anagrams",
    title: "Find All Anagrams in a String",
    description:
      "Given two strings s and p, return an array of all the start indices of p's anagrams in s.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String s", type: "text", defaultValue: "cbaebabacd" },
      { id: "p", label: "String p", type: "text", defaultValue: "abc" },
    ],
    buttonText: "Find Anagram Indices",
  },
  // problem--> 104
  {
    id: "as-pascals-triangle-row",
    title: "Pascal's Triangle Row",
    description:
      "Given a non-negative integer rowIndex, return the rowIndex-th (0-indexed) row of Pascal's triangle.",
    category: "Arrays & Strings",
    inputs: [
      { id: "rowIndex", label: "Row Index", type: "number", defaultValue: 3 },
    ],
    buttonText: "Get Row",
  },
  // problem--> 105
  {
    id: "as-best-time-stock-ii",
    title: "Best Time to Buy and Sell Stock II",
    description:
      "Given stock prices for consecutive days, find the maximum profit you can achieve. You may complete as many transactions as you like.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "prices",
        label: "Prices",
        type: "text",
        defaultValue: "7,1,5,3,6,4",
      },
    ],
    buttonText: "Calculate Max Profit",
  },
  // problem--> 106
  {
    id: "as-excel-column-number",
    title: "Excel Sheet Column Number",
    description:
      "Given an Excel column title (e.g., 'A', 'B', 'AA', 'ZY'), return its corresponding column number.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "columnTitle",
        label: "Column Title",
        type: "text",
        defaultValue: "ZY",
      },
    ],
    buttonText: "Get Number",
  },
  // problem--> 107
  {
    id: "as-excel-column-title",
    title: "Excel Sheet Column Title",
    description:
      "Given a column number, return its corresponding Excel column title.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "columnNumber",
        label: "Column Number",
        type: "number",
        defaultValue: 701,
      },
    ],
    buttonText: "Get Title",
  },
  // problem--> 108
  {
    id: "as-single-number",
    title: "Single Number",
    description:
      "In a non-empty array of integers, every element appears twice except for one. Find that single one.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "4,1,2,1,2" },
    ],
    buttonText: "Find Single",
  },
  // problem--> 109
  {
    id: "as-palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer, return true if the integer is a palindrome without converting it to a string.",
    category: "Arrays & Strings",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 121 }],
    buttonText: "Check Palindrome",
  },
  // problem--> 110
  {
    id: "as-remove-element",
    title: "Remove Element",
    description:
      "Given an array and a value, remove all instances of that value in-place and return the new length.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,2,2,3" },
      { id: "val", label: "Value to Remove", type: "number", defaultValue: 3 },
    ],
    buttonText: "Remove Value",
  },
  // problem--> 111
  {
    id: "as-search-insert-position",
    title: "Search Insert Position",
    description:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array",
        type: "text",
        defaultValue: "1,3,5,6",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 5 },
    ],
    buttonText: "Find Position",
  },
  // problem--> 112
  {
    id: "as-battleships-in-board",
    title: "Battleships in a Board",
    description:
      "Count the number of battleships on a 2D board. Battleships are represented by 'X's, empty cells by '.', and they do not touch.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "board",
        label: "Board (JSON)",
        type: "textarea",
        defaultValue: '[["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]',
      },
    ],
    buttonText: "Count Battleships",
  },
  // problem--> 113
  {
    id: "as-shortest-distance-to-char",
    title: "Shortest Distance to a Character",
    description:
      "Given a string and a character, return an array of the shortest distances from each character to an occurrence of the target character.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "loveleetcode" },
      { id: "c", label: "Character", type: "text", defaultValue: "e" },
    ],
    buttonText: "Calculate Distances",
  },
  // problem--> 114
  {
    id: "as-binary-gap",
    title: "Binary Gap",
    description:
      "Given a positive integer, find the length of its longest binary gap (the longest sequence of consecutive zeros surrounded by ones).",
    category: "Arrays & Strings",
    inputs: [{ id: "n", label: "Number", type: "number", defaultValue: 22 }],
    buttonText: "Find Gap",
  },
  // problem--> 115
  {
    id: "as-armstrong-number",
    title: "Armstrong Number",
    description:
      "Check if a number is an Armstrong number (a number that is equal to the sum of its own digits each raised to the power of the number of digits).",
    category: "Arrays & Strings",
    inputs: [{ id: "n", label: "Number", type: "number", defaultValue: 153 }],
    buttonText: "Check Armstrong",
  },
  // problem--> 116
  {
    id: "as-find-pivot-index",
    title: "Find Pivot Index",
    description:
      "Find the pivot index of an array, which is the index where the sum of numbers to the left is equal to the sum of numbers to the right.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,7,3,6,5,6" },
    ],
    buttonText: "Find Pivot",
  },
  // problem--> 117
  {
    id: "as-kth-largest-element",
    title: "Kth Largest Element in an Array",
    description:
      "Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,2,1,5,6,4" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Element",
  },
  // problem--> 118
  {
    id: "as-top-k-frequent-elements",
    title: "Top K Frequent Elements",
    description:
      "Given a non-empty array of integers, return the k most frequent elements.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,1,1,2,2,3" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Frequent",
  },
  // problem--> 119
  {
    id: "as-sort-chars-by-frequency",
    title: "Sort Characters By Frequency",
    description:
      "Given a string, sort it in decreasing order based on the frequency of characters.",
    category: "Arrays & Strings",
    inputs: [{ id: "s", label: "String", type: "text", defaultValue: "tree" }],
    buttonText: "Sort by Frequency",
  },
  // problem--> 120
  {
    id: "as-max-product-of-three",
    title: "Maximum Product of Three Numbers",
    description:
      "Given an integer array, find the maximum product of three numbers in the array. Handle negative numbers correctly.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "-1,-2,-3,4" },
    ],
    buttonText: "Find Max Product",
  },
  // problem--> 121
  {
    id: "as-basic-calculator-ii",
    title: "Basic Calculator II",
    description:
      "Implement a basic calculator to evaluate an expression string containing `+`, `-`, `*`, `/` and non-negative integers. Handle operator precedence.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "Expression", type: "text", defaultValue: "3+2*2" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 122
  {
    id: "as-longest-substring-with-at-most-two-distinct",
    title: "Longest Substring with At Most Two Distinct Characters",
    description:
      "Given a string, find the length of the longest substring that contains at most two distinct characters.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "ccaabbb" },
    ],
    buttonText: "Find Length",
  },
  // problem--> 123
  {
    id: "as-encode-decode-tinyurl",
    title: "Encode and Decode TinyURL",
    description:
      "Design a service like TinyURL that can encode a long URL to a short one and decode it back.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "url",
        label: "Long URL",
        type: "text",
        defaultValue: "https://example.com/problems/design-tinyurl",
      },
    ],
    buttonText: "Encode & Decode",
  },
  // problem--> 124
  {
    id: "as-longest-repeating-character-replacement",
    title: "Longest Repeating Character Replacement",
    description:
      "Given a string and an integer k, you can change any character in the string to any other uppercase English character at most k times. Find the length of the longest substring containing all repeating letters.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "ABAB" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Length",
  },
  // problem--> 125
  {
    id: "as-number-of-islands",
    title: "Number of Islands",
    description:
      "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "grid",
        label: "Grid (JSON)",
        type: "textarea",
        defaultValue:
          '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      },
    ],
    buttonText: "Count Islands",
  },
  // problem--> 126
  {
    id: "as-decode-string",
    title: "Decode String",
    description:
      "Given an encoded string, return its decoded string. The encoding rule is: `k[encoded_string]`, where the encoded_string inside the square brackets is being repeated exactly k times.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "s",
        label: "Encoded String",
        type: "text",
        defaultValue: "3[a]2[bc]",
      },
    ],
    buttonText: "Decode",
  },
  // problem--> 127
  {
    id: "as-meeting-rooms-ii",
    title: "Meeting Rooms II",
    description:
      "Given an array of meeting time intervals, find the minimum number of conference rooms required.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "intervals",
        label: "Intervals (JSON)",
        type: "textarea",
        defaultValue: "[[0,30],[5,10],[15,20]]",
      },
    ],
    buttonText: "Calculate Rooms",
  },
  // problem--> 128
  {
    id: "as-merge-intervals",
    title: "Merge Intervals",
    description:
      "Given an array of intervals, merge all overlapping intervals and return an array of the non-overlapping intervals.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "intervals",
        label: "Intervals (JSON)",
        type: "textarea",
        defaultValue: "[[1,3],[2,6],[8,10],[15,18]]",
      },
    ],
    buttonText: "Merge",
  },
  // problem--> 129
  {
    id: "as-letter-case-permutation",
    title: "Letter Case Permutation",
    description:
      "Given a string, we can transform every letter individually to be lowercase or uppercase to create another string. Return a list of all possible strings we could create.",
    category: "Arrays & Strings",
    inputs: [{ id: "s", label: "String", type: "text", defaultValue: "a1b2" }],
    buttonText: "Generate Permutations",
  },
  // problem--> 130
  {
    id: "as-longest-word-in-dictionary",
    title: "Longest Word in Dictionary",
    description:
      "Given an array of strings `words`, find the longest word in `words` that can be built one character at a time by other words in `words`.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "w,wo,wor,worl,world",
      },
    ],
    buttonText: "Find Word",
  },
  // problem--> 131
  {
    id: "as-word-break",
    title: "Word Break",
    description:
      "Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of one or more dictionary words.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "leetcode" },
      {
        id: "dict",
        label: "Dictionary (comma-separated)",
        type: "text",
        defaultValue: "leet,code",
      },
    ],
    buttonText: "Check Word Break",
  },
  // problem--> 132
  {
    id: "as-combination-sum-iv",
    title: "Combination Sum IV",
    description:
      "Given an array of distinct integers and a target integer, return the number of possible combinations that add up to the target. Combinations are different if the order of the numbers is different.",
    category: "Arrays & Strings",
    inputs: [
      { id: "nums", label: "Numbers", type: "text", defaultValue: "1,2,3" },
      { id: "target", label: "Target", type: "number", defaultValue: 4 },
    ],
    buttonText: "Count Combinations",
  },
  // problem--> 133
  {
    id: "as-coin-change",
    title: "Coin Change",
    description:
      "You are given coins of different denominations and a total amount of money. Write a function to compute the fewest number of coins that you need to make up that amount.",
    category: "Arrays & Strings",
    inputs: [
      { id: "coins", label: "Coins", type: "text", defaultValue: "1,2,5" },
      { id: "amount", label: "Amount", type: "number", defaultValue: 11 },
    ],
    buttonText: "Find Fewest Coins",
  },
  // problem--> 134
  {
    id: "as-longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    description:
      "Given an integer array, return the length of the longest strictly increasing subsequence.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "nums",
        label: "Numbers",
        type: "text",
        defaultValue: "10,9,2,5,3,7,101,18",
      },
    ],
    buttonText: "Find Length",
  },
  // problem--> 135
  {
    id: "as-partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    description:
      "Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.",
    category: "Arrays & Strings",
    inputs: [
      { id: "nums", label: "Numbers", type: "text", defaultValue: "1,5,11,5" },
    ],
    buttonText: "Check Partition",
  },
  // problem--> 136
  {
    id: "as-unique-paths",
    title: "Unique Paths",
    description:
      "A robot is located at the top-left corner of an m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner. How many possible unique paths are there?",
    category: "Arrays & Strings",
    inputs: [
      { id: "m", label: "Rows (m)", type: "number", defaultValue: 3 },
      { id: "n", label: "Columns (n)", type: "number", defaultValue: 7 },
    ],
    buttonText: "Count Paths",
  },
  // problem--> 137
  {
    id: "as-unique-paths-ii",
    title: "Unique Paths II",
    description:
      "A robot is located at the top-left corner of a grid with obstacles. The robot can only move either down or right. Find the number of unique paths to the bottom-right corner.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "grid",
        label: "Obstacle Grid (JSON)",
        type: "textarea",
        defaultValue: "[[0,0,0],[0,1,0],[0,0,0]]",
      },
    ],
    buttonText: "Count Paths",
  },
  // problem--> 138
  {
    id: "as-minimum-path-sum",
    title: "Minimum Path Sum",
    description:
      "Given a grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path. You can only move either down or right.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "grid",
        label: "Grid (JSON)",
        type: "textarea",
        defaultValue: "[[1,3,1],[1,5,1],[4,2,1]]",
      },
    ],
    buttonText: "Find Minimum Sum",
  },
  // problem--> 139
  {
    id: "as-word-ladder",
    title: "Word Ladder",
    description:
      "Given two words, `beginWord` and `endWord`, and a dictionary's word list, find the length of the shortest transformation sequence from `beginWord` to `endWord`.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "beginWord",
        label: "Begin Word",
        type: "text",
        defaultValue: "hit",
      },
      { id: "endWord", label: "End Word", type: "text", defaultValue: "cog" },
      {
        id: "wordList",
        label: "Word List (comma-separated)",
        type: "text",
        defaultValue: "hot,dot,dog,lot,log,cog",
      },
    ],
    buttonText: "Find Length",
  },
  // problem--> 140
  {
    id: "as-maximal-square",
    title: "Maximal Square",
    description:
      "Given a 2D binary matrix filled with 0s and 1s, find the largest square containing only 1s and return its area.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue:
          '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
      },
    ],
    buttonText: "Find Area",
  },
  // problem--> 141
  {
    id: "as-serialize-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    description:
      "Design an algorithm to serialize a binary tree to a string and deserialize the string back to the tree.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 142
  {
    id: "as-insert-delete-getrandom-o1",
    title: "Insert Delete GetRandom O(1)",
    description:
      "Design a data structure that supports insert, remove, and getRandom in average O(1) time.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 143
  {
    id: "as-regular-expression-matching",
    title: "Regular Expression Matching",
    description:
      "Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "aab" },
      { id: "p", label: "Pattern", type: "text", defaultValue: "c*a*b" },
    ],
    buttonText: "Match",
  },
  // problem--> 144
  {
    id: "as-wildcard-matching",
    title: "Wildcard Matching",
    description:
      "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "adceb" },
      { id: "p", label: "Pattern", type: "text", defaultValue: "*a*b" },
    ],
    buttonText: "Match",
  },
  // problem--> 145
  {
    id: "as-largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    description:
      "Given an array of integers representing the histogram's bar height, find the area of the largest rectangle in the histogram.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "heights",
        label: "Heights",
        type: "text",
        defaultValue: "2,1,5,6,2,3",
      },
    ],
    buttonText: "Find Area",
  },
  // problem--> 146
  {
    id: "as-maximal-rectangle",
    title: "Maximal Rectangle",
    description:
      "Given a 2D binary matrix filled with 0s and 1s, find the largest rectangle containing only 1s and return its area.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue:
          '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
      },
    ],
    buttonText: "Find Area",
  },
  // problem--> 147
  {
    id: "as-word-search-ii",
    title: "Word Search II",
    description:
      "Given a 2D board and a list of words from the dictionary, find all words on the board.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 148
  {
    id: "as-basic-calculator-iii",
    title: "Basic Calculator III",
    description:
      "Implement a basic calculator to evaluate an expression string containing `+`, `-`, `*`, `/`, `(`, `)`, and non-negative integers.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "s",
        label: "Expression",
        type: "text",
        defaultValue: "2*(5+5*2)/3+(6/2+8)",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 149
  {
    id: "as-sliding-window-median",
    title: "Sliding Window Median",
    description:
      "The median is the middle value in an ordered integer list. Find the median of all windows of size k as the window slides from left to right.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 150
  {
    id: "as-longest-consecutive-sequence-ii",
    title: "Longest Consecutive Sequence II (in a 2D grid)",
    description:
      "Given a 2D grid, find the length of the longest consecutive path. A path can be formed by moving to an adjacent cell (up, down, left, right) with a value that is exactly one greater.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 151
  {
    id: "as-find-common-characters",
    title: "Find Common Characters",
    description:
      "Given an array of strings, return an array of all characters that show up in all strings in the list (including duplicates).",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "bella,label,roller",
      },
    ],
    buttonText: "Find Common",
  },
  // problem--> 152
  {
    id: "as-valid-palindrome-ii",
    title: "Valid Palindrome II",
    description:
      "Given a string, check if it can become a palindrome by deleting at most one character.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abca" },
    ],
    buttonText: "Validate",
  },
  // problem--> 153
  {
    id: "as-string-compression",
    title: "String Compression",
    description:
      "Implement a method to perform basic string compression using the counts of repeated characters. For example, 'aabcccccaaa' would become 'a2b1c5a3'.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "aabcccccaaa" },
    ],
    buttonText: "Compress",
  },
  // problem--> 154
  {
    id: "as-one-edit-away",
    title: "One Edit Away",
    description:
      "There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str1", label: "String 1", type: "text", defaultValue: "pale" },
      { id: "str2", label: "String 2", type: "text", defaultValue: "ple" },
    ],
    buttonText: "Check Edits",
  },
  // problem--> 155
  {
    id: "as-rotate-string",
    title: "Rotate String",
    description:
      "Given two strings, s and goal, return true if and only if s can become goal after some number of left shifts on s.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String s", type: "text", defaultValue: "abcde" },
      { id: "goal", label: "String goal", type: "text", defaultValue: "cdeab" },
    ],
    buttonText: "Check Rotation",
  },
  // problem--> 156
  {
    id: "as-min-add-to-make-parentheses-valid",
    title: "Minimum Add to Make Parentheses Valid",
    description:
      "Given a string of '(' and ')' parentheses, compute the minimum number of parentheses we must add to make the resulting string valid.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "Parentheses", type: "text", defaultValue: "())" },
    ],
    buttonText: "Calculate Additions",
  },
  // problem--> 157
  {
    id: "as-backspace-string-compare",
    title: "Backspace String Compare",
    description:
      "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String s", type: "text", defaultValue: "ab#c" },
      { id: "t", label: "String t", type: "text", defaultValue: "ad#c" },
    ],
    buttonText: "Compare",
  },
  // problem--> 158
  {
    id: "as-kth-missing-positive-number",
    title: "Kth Missing Positive Number",
    description:
      "Given an array of strictly increasing positive integers, and an integer k, return the k-th positive integer that is missing from this array.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "2,3,4,7,11" },
      { id: "k", label: "k", type: "number", defaultValue: 5 },
    ],
    buttonText: "Find Missing",
  },
  // problem--> 159
  {
    id: "as-max-consecutive-ones-iii",
    title: "Max Consecutive Ones III",
    description:
      "Given a binary array and an integer k, return the maximum number of consecutive 1s in the array if you can flip at most k 0s.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "1,1,1,0,0,0,1,1,1,1,0",
      },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Max",
  },
  // problem--> 160
  {
    id: "as-find-numbers-with-even-digits",
    title: "Find Numbers with Even Number of Digits",
    description:
      "Given an array of integers, return how many of them contain an even number of digits.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "12,345,2,6,7896",
      },
    ],
    buttonText: "Count",
  },
  // problem--> 161
  {
    id: "as-duplicate-zeros",
    title: "Duplicate Zeros",
    description:
      "Given a fixed-length integer array, duplicate each occurrence of zero, shifting the remaining elements to the right. Modify the input array in-place.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "1,0,2,3,0,4,5,0",
      },
    ],
    buttonText: "Duplicate Zeros",
  },
  // problem--> 162
  {
    id: "as-check-if-n-and-double-exist",
    title: "Check If N and Its Double Exist",
    description:
      "Given an array of integers, check if there exist two integers N and M such that N is the double of M (i.e., N = 2 * M).",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "10,2,5,3" },
    ],
    buttonText: "Check",
  },
  // problem--> 163
  {
    id: "as-replace-elements-with-greatest-on-right",
    title: "Replace Elements with Greatest Element on Right Side",
    description:
      "Given an array, replace every element with the greatest element among the elements to its right, and replace the last element with -1.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "17,18,5,4,6,1",
      },
    ],
    buttonText: "Replace",
  },
  // problem--> 164
  {
    id: "as-third-maximum-number",
    title: "Third Maximum Number",
    description:
      "Given a non-empty array of integers, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,2,1" },
    ],
    buttonText: "Find Third Max",
  },
  // problem--> 165
  {
    id: "as-generate-parentheses",
    title: "Generate Parentheses",
    description:
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    category: "Arrays & Strings",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 3 }],
    buttonText: "Generate",
  },
  // problem--> 166
  {
    id: "as-multiply-strings",
    title: "Multiply Strings",
    description:
      "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also as a string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "num1", label: "Number 1", type: "text", defaultValue: "123" },
      { id: "num2", label: "Number 2", type: "text", defaultValue: "456" },
    ],
    buttonText: "Multiply",
  },
  // problem--> 167
  {
    id: "as-basic-calculator",
    title: "Basic Calculator",
    description:
      "Implement a basic calculator to evaluate a simple expression string containing `+`, `-`, `(`, `)`, and non-negative integers.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "s",
        label: "Expression",
        type: "text",
        defaultValue: "(1+(4+5+2)-3)+(6+8)",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 168
  {
    id: "as-find-the-celebrity",
    title: "Find the Celebrity",
    description:
      "Suppose you are at a party with n people. A 'celebrity' is a person who is known by everyone but knows no one. Find the celebrity.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 169
  {
    id: "as-dot-product-of-two-sparse-vectors",
    title: "Dot Product of Two Sparse Vectors",
    description: "Given two sparse vectors, compute their dot product.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "vec1",
        label: "Vector 1",
        type: "text",
        defaultValue: "1,0,2,0,3",
      },
      {
        id: "vec2",
        label: "Vector 2",
        type: "text",
        defaultValue: "0,3,0,4,0",
      },
    ],
    buttonText: "Compute",
  },
  // problem--> 170
  {
    id: "as-pancake-sorting",
    title: "Pancake Sorting",
    description:
      "Given an array, sort it by performing a series of pancake flips (reversing a prefix of the array). Return the k-values corresponding to the flips.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,2,4,1" },
    ],
    buttonText: "Get Flips",
  },
  // problem--> 171
  {
    id: "as-reverse-words-in-a-string",
    title: "Reverse Words in a String",
    description: "Given an input string, reverse the order of the words.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "s",
        label: "String",
        type: "text",
        defaultValue: "the sky is blue",
      },
    ],
    buttonText: "Reverse Words",
  },
  // problem--> 172
  {
    id: "as-reverse-words-in-a-string-ii",
    title: "Reverse Words in a String II",
    description:
      "Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "abcdefg" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Reverse",
  },
  // problem--> 173
  {
    id: "as-valid-word-abbreviation",
    title: "Valid Word Abbreviation",
    description:
      "Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "word",
        label: "Word",
        type: "text",
        defaultValue: "internationalization",
      },
      {
        id: "abbr",
        label: "Abbreviation",
        type: "text",
        defaultValue: "i12iz4n",
      },
    ],
    buttonText: "Validate",
  },
  // problem--> 174
  {
    id: "as-find-and-replace-pattern",
    title: "Find and Replace Pattern",
    description:
      "Given a list of strings words and a string pattern, return a list of words[i] that match pattern.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "abc,deq,mee,aqq,dkd,ccc",
      },
      { id: "pattern", label: "Pattern", type: "text", defaultValue: "abb" },
    ],
    buttonText: "Find",
  },
  // problem--> 175
  {
    id: "as-count-binary-substrings",
    title: "Count Binary Substrings",
    description:
      "Give a binary string, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "s",
        label: "Binary String",
        type: "text",
        defaultValue: "00110011",
      },
    ],
    buttonText: "Count",
  },
  // problem--> 176
  {
    id: "as-reorganize-string",
    title: "Reorganize String",
    description:
      "Given a string, rearrange the characters so that any two adjacent characters are not the same. If possible, return one such string. Otherwise, return an empty string.",
    category: "Arrays & Strings",
    inputs: [{ id: "s", label: "String", type: "text", defaultValue: "aab" }],
    buttonText: "Reorganize",
  },
  // problem--> 177
  {
    id: "as-custom-sort-string",
    title: "Custom Sort String",
    description:
      "You are given two strings: order and str. All the characters of order are unique and were sorted in some custom order previously. Permute the characters of str so that they match the order that order was sorted in.",
    category: "Arrays & Strings",
    inputs: [
      { id: "order", label: "Order", type: "text", defaultValue: "cba" },
      { id: "s", label: "String", type: "text", defaultValue: "abcd" },
    ],
    buttonText: "Sort",
  },
  // problem--> 178
  {
    id: "as-partition-labels",
    title: "Partition Labels",
    description:
      "A string is partitioned into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "s",
        label: "String",
        type: "text",
        defaultValue: "ababcbacadefegdehijhklij",
      },
    ],
    buttonText: "Partition",
  },
  // problem--> 179
  {
    id: "as-repeated-string-match",
    title: "Repeated String Match",
    description:
      "Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible, return -1.",
    category: "Arrays & Strings",
    inputs: [
      { id: "a", label: "String a", type: "text", defaultValue: "abcd" },
      { id: "b", label: "String b", type: "text", defaultValue: "cdabcdab" },
    ],
    buttonText: "Match",
  },
  // problem--> 180
  {
    id: "as-longest-uncommon-subsequence-i",
    title: "Longest Uncommon Subsequence I",
    description:
      "Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such uncommon subsequence exists, return -1.",
    category: "Arrays & Strings",
    inputs: [
      { id: "a", label: "String a", type: "text", defaultValue: "aba" },
      { id: "b", label: "String b", type: "text", defaultValue: "cdc" },
    ],
    buttonText: "Find Length",
  },
  // problem--> 181
  {
    id: "as-verifying-an-alien-dictionary",
    title: "Verifying an Alien Dictionary",
    description:
      "In an alien language, they also use English lowercase letters, but possibly in a different order. Given a sequence of words and the order of the alphabet, return true if the given words are sorted lexicographically.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "hello,leetcode",
      },
      {
        id: "order",
        label: "Alien Alphabet Order",
        type: "text",
        defaultValue: "hlabcdefgijkmnopqrstuvwxyz",
      },
    ],
    buttonText: "Verify",
  },
  // problem--> 182
  {
    id: "as-remove-outermost-parentheses",
    title: "Remove Outermost Parentheses",
    description:
      "Given a valid parentheses string, remove the outermost parentheses of every primitive string in the decomposition of the input string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "(()())(())" },
    ],
    buttonText: "Remove",
  },
  // problem--> 183
  {
    id: "as-reverse-only-letters",
    title: "Reverse Only Letters",
    description:
      "Given a string, reverse the string according to the rule: All characters that are not English letters remain in the same position. All English letters should be reversed.",
    category: "Arrays & Strings",
    inputs: [{ id: "s", label: "String", type: "text", defaultValue: "ab-cd" }],
    buttonText: "Reverse",
  },
  // problem--> 184
  {
    id: "as-unique-email-addresses",
    title: "Unique Email Addresses",
    description:
      "Given a list of emails, we send one email to each address in the list. How many different addresses actually receive mails? Apply rules for '.' and '+' in local names.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "emails",
        label: "Emails (comma-separated)",
        type: "text",
        defaultValue:
          "test.email+alex@leetcode.com,test.e.mail+bob.cathy@leetcode.com,testemail+david@lee.tcode.com",
      },
    ],
    buttonText: "Count",
  },
  // problem--> 185
  {
    id: "as-reverse-string-ii",
    title: "Reverse String II",
    description:
      "Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "abcdefg" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Reverse",
  },
  // problem--> 186
  {
    id: "as-add-strings",
    title: "Add Strings",
    description:
      "Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "num1", label: "Number 1", type: "text", defaultValue: "123" },
      { id: "num2", label: "Number 2", type: "text", defaultValue: "456" },
    ],
    buttonText: "Add",
  },
  // problem--> 187
  {
    id: "as-add-binary",
    title: "Add Binary",
    description:
      "Given two binary strings, return their sum (also a binary string).",
    category: "Arrays & Strings",
    inputs: [
      { id: "a", label: "Binary String a", type: "text", defaultValue: "1010" },
      { id: "b", label: "Binary String b", type: "text", defaultValue: "1011" },
    ],
    buttonText: "Add",
  },
  // problem--> 188
  {
    id: "as-longest-common-substring",
    title: "Longest Common Substring",
    description:
      "Given two strings, find the length of the longest common substring between them.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str1", label: "String 1", type: "text", defaultValue: "ABABC" },
      { id: "str2", label: "String 2", type: "text", defaultValue: "BABCA" },
    ],
    buttonText: "Find Length",
  },
  // problem--> 189
  {
    id: "as-kmp-string-search",
    title: "KMP String Search Algorithm (Conceptual)",
    description:
      "Explain the Knuth-Morris-Pratt (KMP) algorithm for finding occurrences of a 'word' W within a main 'text' T by employing the observation that when a mismatch occurs, the word itself embodies sufficient information to determine where the next match could begin.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Explain KMP",
  },
  // problem--> 190
  {
    id: "as-rabin-karp-algorithm",
    title: "Rabin-Karp Algorithm (Conceptual)",
    description:
      "Explain the Rabin-Karp string-searching algorithm that uses hashing to find any one of a set of pattern strings in a text.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Explain Rabin-Karp",
  },
  // problem--> 191
  {
    id: "as-manachers-algorithm",
    title: "Manacher's Algorithm (Conceptual)",
    description:
      "Explain Manacher's algorithm, an efficient O(n) algorithm for finding the longest palindromic substring in any given string.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Explain Manacher's",
  },
  // problem--> 192
  {
    id: "as-z-algorithm",
    title: "Z-Algorithm (Conceptual)",
    description:
      "Explain the Z-Algorithm, a linear time string matching algorithm that constructs a Z-array. The Z-array stores the length of the longest substring starting from the current position that is also a prefix of the string.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Explain Z-Algorithm",
  },
  // problem--> 193
  {
    id: "as-suffix-array-conceptual",
    title: "Suffix Array (Conceptual)",
    description:
      "Explain what a Suffix Array is and how it can be used for various string problems, such as finding the longest repeated substring.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Explain Suffix Array",
  },
  // problem--> 194
  {
    id: "as-suffix-tree-conceptual",
    title: "Suffix Tree (Conceptual)",
    description:
      "Explain the Suffix Tree data structure, a powerful tool for solving complex string problems like finding all occurrences of multiple patterns.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Explain Suffix Tree",
  },
  // problem--> 195
  {
    id: "as-aho-corasick-algorithm",
    title: "Aho-Corasick Algorithm (Conceptual)",
    description:
      "Explain the Aho-Corasick algorithm, a string-searching algorithm that can find all occurrences of a finite set of keywords in a text simultaneously.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Explain Aho-Corasick",
  },
  // problem--> 196
  {
    id: "as-longest-palindromic-subsequence",
    title: "Longest Palindromic Subsequence",
    description:
      "Given a string, find the length of the longest palindromic subsequence. A subsequence is not necessarily contiguous.",
    category: "Arrays & Strings",
    inputs: [{ id: "s", label: "String", type: "text", defaultValue: "bbbab" }],
    buttonText: "Find Length",
  },
  // problem--> 197
  {
    id: "as-edit-distance",
    title: "Edit Distance",
    description:
      "Given two strings, find the minimum number of operations (insert, delete, or substitute a character) required to convert one string to the other.",
    category: "Arrays & Strings",
    inputs: [
      { id: "word1", label: "Word 1", type: "text", defaultValue: "horse" },
      { id: "word2", label: "Word 2", type: "text", defaultValue: "ros" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 198
  {
    id: "as-longest-common-subsequence",
    title: "Longest Common Subsequence",
    description:
      "Given two strings, find the length of the longest common subsequence.",
    category: "Arrays & Strings",
    inputs: [
      { id: "text1", label: "Text 1", type: "text", defaultValue: "abcde" },
      { id: "text2", label: "Text 2", type: "text", defaultValue: "ace" },
    ],
    buttonText: "Find Length",
  },
  // problem--> 199
  {
    id: "as-minimum-ascii-delete-sum",
    title: "Minimum ASCII Delete Sum for Two Strings",
    description:
      "Given two strings, find the lowest ASCII sum of deleted characters to make two strings equal.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s1", label: "String 1", type: "text", defaultValue: "sea" },
      { id: "s2", label: "String 2", type: "text", defaultValue: "eat" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 200
  {
    id: "as-integer-break",
    title: "Integer Break",
    description:
      "Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.",
    category: "Arrays & Strings",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 10 }],
    buttonText: "Maximize Product",
  },
];
