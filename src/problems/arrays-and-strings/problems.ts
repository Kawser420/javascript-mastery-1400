import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "reverse-string",
    title: "Reverse a String",
    description:
      "Write a function that takes a string and returns a new string with the characters in reverse order.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello world" },
    ],
    buttonText: "Reverse It",
  },
  {
    id: "find-longest-word",
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
  {
    id: "remove-duplicates-from-array",
    title: "Remove Duplicates from Array",
    description:
      "Write a function that takes an array (comma-separated string) and returns a new array with all duplicate elements removed.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 2, 3, 4, 4, 5",
      },
    ],
    buttonText: "Remove Duplicates",
  },
  {
    id: "array-chunking",
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
  {
    id: "is-palindrome",
    title: "Check for Palindrome",
    description:
      "Write a function that checks if a given string is a palindrome (reads the same forwards and backward), ignoring punctuation, case, and spacing.",
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
  {
    id: "title-case-sentence",
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
  {
    id: "array-intersection",
    title: "Find Array Intersection",
    description:
      "Given two arrays, create a function that finds the intersection of the two arrays (elements that are present in both).",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr1",
        label: "First Array (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4",
      },
      {
        id: "arr2",
        label: "Second Array (comma-separated)",
        type: "text",
        defaultValue: "3, 4, 5, 6",
      },
    ],
    buttonText: "Find Intersection",
  },
  {
    id: "falsy-bouncer",
    title: "Falsy Bouncer",
    description:
      'Write a function that removes all falsy values from an array. Falsy values are false, null, 0, "", undefined, and NaN.',
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (JSON format)",
        type: "text",
        defaultValue: '[7, "ate", "", false, 9, null, 0]',
      },
    ],
    buttonText: "Remove Falsy",
  },
  {
    id: "array-rotation",
    title: "Rotate an Array",
    description:
      "Write a function that rotates an array to the left by a given number of positions.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,3,4,5,6,7",
      },
      {
        id: "positions",
        label: "Positions to Rotate Left",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Rotate Array",
  },
  {
    id: "anagram-check",
    title: "Check for Anagrams",
    description:
      "Write a function to check if two strings are anagrams of each other (contain the same characters in different orders).",
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
  {
    id: "find-missing-number",
    title: "Find Missing Number",
    description:
      "Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "3,0,1",
      },
    ],
    buttonText: "Find Missing",
  },
  {
    id: "sum-all-in-range",
    title: "Sum All Numbers in a Range",
    description:
      "Write a function that takes an array of two numbers and returns the sum of those two numbers plus the sum of all the numbers between them.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array with two numbers",
        type: "text",
        defaultValue: "1, 4",
      },
    ],
    buttonText: "Sum Range",
  },
  {
    id: "diff-two-arrays",
    title: "Diff Two Arrays",
    description:
      "Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr1",
        label: "First Array",
        type: "text",
        defaultValue: "1,2,3,5",
      },
      {
        id: "arr2",
        label: "Second Array",
        type: "text",
        defaultValue: "1,2,3,4,5",
      },
    ],
    buttonText: "Find Difference",
  },
  {
    id: "seek-and-destroy",
    title: "Seek and Destroy",
    description:
      "Write a function that takes an initial array followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Initial Array",
        type: "text",
        defaultValue: "1,2,3,1,2,3",
      },
      {
        id: "targets",
        label: "Values to Destroy",
        type: "text",
        defaultValue: "2,3",
      },
    ],
    buttonText: "Destroy",
  },
  {
    id: "wherefore-art-thou",
    title: "Wherefore art thou (Object Filter)",
    description:
      "Write a function that looks through an array of objects and returns an array of all objects that have matching name and value pairs as the second argument.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "collection",
        label: "Array of Objects (JSON)",
        type: "textarea",
        defaultValue:
          '[{"first": "Romeo", "last": "Montague"}, {"first": "Mercutio", "last": null}, {"first": "Tybalt", "last": "Capulet"}]',
      },
      {
        id: "source",
        label: "Source Object (JSON)",
        type: "textarea",
        defaultValue: '{"last": "Capulet"}',
      },
    ],
    buttonText: "Filter Collection",
  },
  {
    id: "spinal-tap-case",
    title: "Spinal Tap Case",
    description:
      "Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "This Is Spinal Tap",
      },
    ],
    buttonText: "Spinal Case",
  },
  {
    id: "pig-latin",
    title: "Pig Latin Translator",
    description:
      "Translate the provided string to Pig Latin. For words that begin with a consonant, move the consonant cluster to the end and add 'ay'. For words that begin with a vowel, add 'way' to the end.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "california" },
    ],
    buttonText: "Translate",
  },
  {
    id: "search-and-replace",
    title: "Search and Replace",
    description:
      "Perform a search and replace on the sentence using the arguments provided and return the new sentence. Preserve the case of the first character of the word being replaced.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "Sentence",
        type: "text",
        defaultValue: "He is a good boy",
      },
      {
        id: "before",
        label: "Word to replace",
        type: "text",
        defaultValue: "good",
      },
      {
        id: "after",
        label: "Replacement word",
        type: "text",
        defaultValue: "ok",
      },
    ],
    buttonText: "Replace",
  },
  {
    id: "dna-pairing",
    title: "DNA Pairing",
    description:
      "The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. A-T and C-G are pairs.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "DNA Strand", type: "text", defaultValue: "GCG" },
    ],
    buttonText: "Pair DNA",
  },
  {
    id: "missing-letters",
    title: "Find Missing Letter",
    description:
      "Find the missing letter in the passed letter range and return it. If all letters are present, return undefined.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "Letter Range", type: "text", defaultValue: "abce" },
    ],
    buttonText: "Find Missing",
  },
  {
    id: "sorted-union",
    title: "Sorted Union",
    description:
      "Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr1", label: "Array 1", type: "text", defaultValue: "1, 3, 2" },
      {
        id: "arr2",
        label: "Array 2",
        type: "text",
        defaultValue: "5, 2, 1, 4",
      },
      { id: "arr3", label: "Array 3", type: "text", defaultValue: "2, 1" },
    ],
    buttonText: "Create Union",
  },
  {
    id: "convert-html-entities",
    title: "Convert HTML Entities",
    description:
      "Convert the characters &, <, >, \", and ' in a string to their corresponding HTML entities.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "Dolce & Gabbana",
      },
    ],
    buttonText: "Convert",
  },
  {
    id: "sum-all-odd-fibonacci",
    title: "Sum All Odd Fibonacci Numbers",
    description:
      "Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.",
    category: "Arrays & Strings",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 10 }],
    buttonText: "Sum Odd Fibonacci",
  },
  {
    id: "sum-all-primes",
    title: "Sum All Primes",
    description:
      "A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. Write a function that returns the sum of all prime numbers that are less than or equal to a given number.",
    category: "Arrays & Strings",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 10 }],
    buttonText: "Sum Primes",
  },
  {
    id: "smallest-common-multiple",
    title: "Smallest Common Multiple",
    description:
      "Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Range (e.g., 1,5)",
        type: "text",
        defaultValue: "1,5",
      },
    ],
    buttonText: "Find SCM",
  },
  {
    id: "drop-it",
    title: "Drop It",
    description:
      "Given an array, iterate through and remove each element from the front until the predicate function returns true. Then return the rest of the array.",
    category: "Arrays & Strings",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,4" },
    ],
    buttonText: "Drop until > 2",
  },
  {
    id: "steamroller",
    title: "Steamroller (Flatten Array)",
    description:
      "Flatten a nested array. You must account for varying levels of nesting.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Nested Array (JSON)",
        type: "textarea",
        defaultValue: "[1, [2], [3, [[4]]]]",
      },
    ],
    buttonText: "Flatten",
  },
  {
    id: "caesars-cipher",
    title: "Caesars Cipher (ROT13)",
    description:
      "Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "Encoded String",
        type: "text",
        defaultValue: "SERR PBQR PNZC",
      },
    ],
    buttonText: "Decode",
  },
  {
    id: "telephone-number-validator",
    title: "Telephone Number Validator",
    description:
      "Return true if the passed string looks like a valid US phone number. The user may fill out the form field any way they choose as long as it has the format of a valid US number.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "Phone Number",
        type: "text",
        defaultValue: "555-555-5555",
      },
    ],
    buttonText: "Validate",
  },
  {
    id: "cash-register",
    title: "Cash Register",
    description:
      "Design a cash register drawer function that returns change in coins and bills, handles insufficient funds, and manages a closed drawer.",
    category: "Arrays & Strings",
    inputs: [
      { id: "price", label: "Price", type: "number", defaultValue: 19.5 },
      { id: "cash", label: "Cash Paid", type: "number", defaultValue: 20 },
      {
        id: "cid",
        label: "Cash-in-Drawer (JSON)",
        type: "textarea",
        defaultValue:
          '[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]',
      },
    ],
    buttonText: "Calculate Change",
  },
  {
    id: "max-char",
    title: "Max Character",
    description:
      "Given a string, return the character that is most commonly used in the string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abcccccccd" },
    ],
    buttonText: "Find Max Char",
  },
  {
    id: "vowels-counter",
    title: "Vowels Counter",
    description:
      "Write a function that returns the number of vowels used in a string.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "Hi There!" },
    ],
    buttonText: "Count Vowels",
  },
  {
    id: "array-from-string",
    title: "Create Array from String",
    description:
      "Use `Array.from()` to convert a string into an array of its characters.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Convert",
  },
  {
    id: "find-unique-values",
    title: "Find Unique Values",
    description:
      "Given an array of values, return an array with all the unique values.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "1,1,2,3,3,4,5,5",
      },
    ],
    buttonText: "Find Unique",
  },
  {
    id: "array-of-digits",
    title: "Convert Number to Array of Digits",
    description:
      "Write a function that takes a number and returns an array of its digits.",
    category: "Arrays & Strings",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Convert to Array",
  },
  {
    id: "count-words-in-string",
    title: "Count Words in a String",
    description:
      "Write a function that returns the number of words in a sentence.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "Sentence",
        type: "text",
        defaultValue: "This is a sample sentence.",
      },
    ],
    buttonText: "Count Words",
  },
  {
    id: "is-isogram",
    title: "Check for Isogram",
    description:
      "An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function to determine if a string is an isogram.",
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
  {
    id: "hamming-distance",
    title: "Hamming Distance",
    description:
      "Calculate the Hamming distance between two strings of equal length. The Hamming distance is the number of positions at which the corresponding symbols are different.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str1", label: "String 1", type: "text", defaultValue: "karolin" },
      { id: "str2", label: "String 2", type: "text", defaultValue: "kathrin" },
    ],
    buttonText: "Calculate Distance",
  },
  {
    id: "is-pangram",
    title: "Check for Pangram",
    description:
      "A pangram is a sentence that contains every single letter of the alphabet at least once. Write a function to check if a sentence is a pangram.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "Sentence",
        type: "text",
        defaultValue: "The quick brown fox jumps over the lazy dog",
      },
    ],
    buttonText: "Check Pangram",
  },
  {
    id: "truncate-string",
    title: "Truncate a String",
    description:
      "Truncate a string if it is longer than the given maximum string length. Return the truncated string with a `...` ending.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "A-tisket a-tasket A green and yellow basket",
      },
      { id: "num", label: "Max Length", type: "number", defaultValue: 8 },
    ],
    buttonText: "Truncate",
  },
  {
    id: "longest-substring-no-repeats",
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string, find the length of the longest substring without repeating characters.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abcabcbb" },
    ],
    buttonText: "Find Length",
  },
  {
    id: "3sum",
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
  {
    id: "group-anagrams",
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
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    description:
      "Given n non-negative integers representing vertical lines, find two lines that together with the x-axis form a container, such that the container contains the most water.",
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
  {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    description:
      "Given an m x n matrix, return all elements of the matrix in spiral order.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON 2D array)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Traverse Spiral",
  },
  {
    id: "rotate-image",
    title: "Rotate Image (Matrix)",
    description:
      "You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise). You have to rotate the image in-place.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON 2D array)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Rotate",
  },
  {
    id: "product-of-array-except-self",
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
  {
    id: "valid-parentheses",
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
  {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    description: "Given a string, return the longest palindromic substring.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "babad" },
    ],
    buttonText: "Find Substring",
  },
  {
    id: "string-compression",
    title: "String Compression",
    description:
      "Implement a method to perform basic string compression using the counts of repeated characters. For example, 'aabcccccaaa' would become 'a2b1c5a3'.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "aabcccccaaa" },
    ],
    buttonText: "Compress",
  },
  {
    id: "first-unique-char",
    title: "First Unique Character in a String",
    description:
      "Given a string, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "leetcode" },
    ],
    buttonText: "Find First Unique",
  },
  {
    id: "kadanes-algorithm",
    title: "Maximum Subarray Sum",
    description:
      "Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum (Kadane's Algorithm).",
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
  {
    id: "merge-sorted-arrays",
    title: "Merge Sorted Arrays",
    description:
      "Given two sorted integer arrays, merge them into a single, sorted array.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr1",
        label: "First Sorted Array",
        type: "text",
        defaultValue: "1,2,4",
      },
      {
        id: "arr2",
        label: "Second Sorted Array",
        type: "text",
        defaultValue: "1,3,4",
      },
    ],
    buttonText: "Merge",
  },
  {
    id: "move-zeroes",
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
  {
    id: "find-all-duplicates-in-array",
    title: "Find All Duplicates in an Array",
    description:
      "Given an array of integers, where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Find all the elements that appear twice.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "4,3,2,7,8,2,3,1",
      },
    ],
    buttonText: "Find Duplicates",
  },
  {
    id: "string-to-integer-atoi",
    title: "String to Integer (atoi)",
    description:
      "Implement the `atoi` function, which converts a string to an integer, handling whitespace, signs, and non-numeric characters.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "   -42" },
    ],
    buttonText: "Convert (atoi)",
  },
  {
    id: "word-search-matrix",
    title: "Word Search in Matrix",
    description:
      "Given an m x n grid of characters and a word, return true if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where 'adjacent' cells are horizontally or vertically neighboring.",
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
  {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    description:
      "Given two strings S and T, find the minimum window in S which will contain all the characters in T in complexity O(n).",
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
  {
    id: "roman-to-integer",
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
  {
    id: "integer-to-roman",
    title: "Integer to Roman",
    description: "Given an integer, convert it to a roman numeral.",
    category: "Arrays & Strings",
    inputs: [
      { id: "num", label: "Integer", type: "number", defaultValue: 1994 },
    ],
    buttonText: "Convert",
  },
  {
    id: "longest-common-prefix",
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
  {
    id: "implement-strstr",
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
  {
    id: "text-justification",
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
  {
    id: "set-matrix-zeroes",
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
  {
    id: "find-peak-element",
    title: "Find Peak Element",
    description:
      "A peak element is an element that is strictly greater than its neighbors. Given an integer array, find a peak element, and return its index.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,1,3,5,6,4",
      },
    ],
    buttonText: "Find Peak",
  },
  {
    id: "majority-element",
    title: "Majority Element",
    description:
      "Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "2,2,1,1,1,2,2",
      },
    ],
    buttonText: "Find Majority",
  },
  {
    id: "string-is-unique",
    title: "Check if String has Unique Characters",
    description:
      "Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abcdefg" },
    ],
    buttonText: "Check Uniqueness",
  },
  {
    id: "urlify-string",
    title: "URLify a String",
    description:
      "Write a method to replace all spaces in a string with '%20'. Assume the string has sufficient space at the end to hold the additional characters.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "Mr John Smith    ",
      },
    ],
    buttonText: "URLify",
  },
  {
    id: "palindrome-permutation",
    title: "Palindrome Permutation",
    description:
      "Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "Tact Coa" },
    ],
    buttonText: "Check Permutation",
  },
  {
    id: "one-away-strings",
    title: "One Away Strings",
    description:
      "There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.",
    category: "Arrays & Strings",
    inputs: [
      { id: "str1", label: "String 1", type: "text", defaultValue: "pale" },
      { id: "str2", label: "String 2", type: "text", defaultValue: "ple" },
    ],
    buttonText: "Check One Away",
  },
  {
    id: "zero-matrix",
    title: "Zero Matrix",
    description:
      "Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON 2D array)",
        type: "textarea",
        defaultValue: "[[1,1,1],[1,0,1],[1,1,1]]",
      },
    ],
    buttonText: "Zero Out",
  },
  {
    id: "string-rotation",
    title: "String Rotation",
    description:
      "Assume you have a method `isSubstring` which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to `isSubstring` (e.g., 'waterbottle' is a rotation of 'erbottlewat').",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "s1",
        label: "String 1",
        type: "text",
        defaultValue: "waterbottle",
      },
      {
        id: "s2",
        label: "String 2 (Rotation)",
        type: "text",
        defaultValue: "erbottlewat",
      },
    ],
    buttonText: "Check Rotation",
  },
  {
    id: "basic-calculator-ii",
    title: "Basic Calculator II",
    description:
      "Given a string which represents a basic arithmetic expression, implement a calculator to evaluate it. The expression string contains non-negative integers, +, -, *, / operators and empty spaces. Integer division should truncate toward zero.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "expression",
        label: "Expression",
        type: "text",
        defaultValue: "3+2*2",
      },
    ],
    buttonText: "Calculate",
  },
  {
    id: "reverse-words-in-string",
    title: "Reverse Words in a String",
    description: "Given an input string, reverse the string word by word.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "the sky is blue",
      },
    ],
    buttonText: "Reverse Words",
  },
  {
    id: "decode-string",
    title: "Decode String",
    description:
      "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "str",
        label: "Encoded String",
        type: "text",
        defaultValue: "3[a]2[bc]",
      },
    ],
    buttonText: "Decode",
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    description:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
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
  {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    description:
      "You are given an array of integers and a window size k. Find the maximum value in each sliding window of size k.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,3,-1,-3,5,3,6,7",
      },
      { id: "k", label: "Window Size (k)", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Maxima",
  },
  {
    id: "first-missing-positive",
    title: "First Missing Positive",
    description:
      "Given an unsorted integer array, find the smallest missing positive integer.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "3,4,-1,1",
      },
    ],
    buttonText: "Find Missing Positive",
  },
  {
    id: "largest-rectangle-histogram",
    title: "Largest Rectangle in Histogram",
    description:
      "Given an array of integers representing the histogram's bar height where the width of each bar is 1, find the area of the largest rectangle in the histogram.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "heights",
        label: "Histogram Heights",
        type: "text",
        defaultValue: "2,1,5,6,2,3",
      },
    ],
    buttonText: "Find Largest Area",
  },
  {
    id: "generate-parentheses",
    title: "Generate Parentheses",
    description:
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "n",
        label: "Number of pairs (n)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Generate",
  },
  {
    id: "next-permutation",
    title: "Next Permutation",
    description:
      "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Find Next",
  },
  {
    id: "jump-game",
    title: "Jump Game",
    description:
      "Given an array of non-negative integers, you are initially positioned at the first index. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Jumps",
        type: "text",
        defaultValue: "2,3,1,1,4",
      },
    ],
    buttonText: "Can Jump?",
  },
  {
    id: "word-break",
    title: "Word Break",
    description:
      "Given a non-empty string and a dictionary containing a list of non-empty words, determine if the string can be segmented into a space-separated sequence of one or more dictionary words.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "leetcode" },
      {
        id: "wordDict",
        label: "Word Dictionary (comma-separated)",
        type: "text",
        defaultValue: "leet,code",
      },
    ],
    buttonText: "Check Word Break",
  },
  {
    id: "lru-cache-conceptual",
    title: "LRU Cache (Conceptual)",
    description:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. It should support `get` and `put` operations.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Explain LRU Cache",
  },
  {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    description:
      "Given two sorted arrays of size m and n respectively, return the median of the two sorted arrays.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr1",
        label: "First Sorted Array",
        type: "text",
        defaultValue: "1,3",
      },
      {
        id: "arr2",
        label: "Second Sorted Array",
        type: "text",
        defaultValue: "2",
      },
    ],
    buttonText: "Find Median",
  },
  {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    description:
      "Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.",
    category: "Arrays & Strings",
    inputs: [
      { id: "s", label: "String (s)", type: "text", defaultValue: "aab" },
      { id: "p", label: "Pattern (p)", type: "text", defaultValue: "c*a*b" },
    ],
    buttonText: "Match",
  },
  {
    id: "best-time-to-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    description:
      "Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction, design an algorithm to find the maximum profit.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "prices",
        label: "Array of Prices",
        type: "text",
        defaultValue: "7,1,5,3,6,4",
      },
    ],
    buttonText: "Find Max Profit",
  },
  {
    id: "find-the-duplicate-number",
    title: "Find the Duplicate Number",
    description:
      "Given an array of integers containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.",
    category: "Arrays & Strings",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,3,4,2,2",
      },
    ],
    buttonText: "Find Duplicate",
  },
  {
    id: "serialize-deserialize-binary-tree-conceptual",
    title: "Serialize/Deserialize Binary Tree (Conceptual)",
    description:
      "Design an algorithm to serialize and deserialize a binary tree. Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.",
    category: "Arrays & Strings",
    inputs: [],
    buttonText: "Explain Serialization",
  },
];
