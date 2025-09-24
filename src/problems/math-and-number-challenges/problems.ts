import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "mnc-add-two-numbers",
    title: "Add Two Numbers",
    description:
      "Write a function that takes two numbers and returns their sum.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 5 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 10 },
    ],
    buttonText: "Add",
  },
  // problem--> 02
  {
    id: "mnc-check-even-or-odd",
    title: "Check Even or Odd",
    description:
      "Write a function that takes an integer and returns 'Even' if it's even and 'Odd' if it's odd.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 7 }],
    buttonText: "Check",
  },
  // problem--> 03
  {
    id: "mnc-find-max-number",
    title: "Find Maximum of Two Numbers",
    description:
      "Write a function that takes two numbers and returns the larger one without using `Math.max()`.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 15 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 8 },
    ],
    buttonText: "Find Maximum",
  },
  // problem--> 04
  {
    id: "mnc-factorial",
    title: "Factorial of a Number",
    description:
      "Write a function to calculate the factorial of a non-negative integer (n!). The factorial is the product of all positive integers up to that number.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Calculate Factorial",
  },
  // problem--> 05
  {
    id: "mnc-is-prime",
    title: "Check if a Number is Prime",
    description:
      "Write a function that takes a number and returns true if it's a prime number, false otherwise. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 13 }],
    buttonText: "Check Prime",
  },
  // problem--> 06
  {
    id: "mnc-fibonacci-sequence",
    title: "Nth Fibonacci Number",
    description:
      "Write a function to find the Nth number in the Fibonacci sequence (0, 1, 1, 2, 3, 5, ...).",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "num",
        label: "Nth Number (0-indexed)",
        type: "number",
        defaultValue: 10,
      },
    ],
    buttonText: "Find Fibonacci",
  },
  // problem--> 07
  {
    id: "mnc-power-of-number",
    title: "Power of a Number",
    description:
      "Write a function that calculates a base number raised to the power of an exponent without using `Math.pow()` or the `**` operator.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 3 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 4 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 08
  {
    id: "mnc-sum-of-digits",
    title: "Sum of Digits",
    description:
      "Write a function that takes an integer and returns the sum of its digits.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Sum Digits",
  },
  // problem--> 09
  {
    id: "mnc-reverse-number",
    title: "Reverse a Number",
    description:
      "Write a function that reverses the digits of an integer, preserving the sign.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: -12345 },
    ],
    buttonText: "Reverse",
  },
  // problem--> 10
  {
    id: "mnc-palindrome-number",
    title: "Palindrome Number Check",
    description:
      "Write a function that checks if a number is a palindrome (reads the same forwards and backwards) without converting it to a string.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 121 }],
    buttonText: "Check Palindrome",
  },
  // problem--> 11
  {
    id: "mnc-area-of-circle",
    title: "Area of a Circle",
    description:
      "Write a function to calculate the area of a circle (π * r^2) given its radius.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 10 },
    ],
    buttonText: "Calculate Area",
  },
  // problem--> 12
  {
    id: "mnc-celsius-to-fahrenheit",
    title: "Celsius to Fahrenheit",
    description:
      "Write a function to convert a temperature from Celsius to Fahrenheit. Formula: (C * 9/5) + 32.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "celsius", label: "Celsius", type: "number", defaultValue: 20 },
    ],
    buttonText: "Convert",
  },
  // problem--> 13
  {
    id: "mnc-fahrenheit-to-celsius",
    title: "Fahrenheit to Celsius",
    description:
      "Write a function to convert a temperature from Fahrenheit to Celsius. Formula: (F - 32) * 5/9.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "fahrenheit",
        label: "Fahrenheit",
        type: "number",
        defaultValue: 68,
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 14
  {
    id: "mnc-is-integer",
    title: "Check if Integer",
    description:
      "Write a function that checks if a given value is an integer without using `Number.isInteger()`.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "value", label: "Value", type: "text", defaultValue: "10.5" },
    ],
    buttonText: "Check",
  },
  // problem--> 15
  {
    id: "mnc-random-number-in-range",
    title: "Random Number in a Range",
    description:
      "Write a function to generate a random integer between a min and max value (inclusive).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "min", label: "Minimum", type: "number", defaultValue: 1 },
      { id: "max", label: "Maximum", type: "number", defaultValue: 10 },
    ],
    buttonText: "Generate",
  },
  // problem--> 16
  {
    id: "mnc-mean-of-array",
    title: "Mean of an Array",
    description:
      "Write a function that calculates the mean (average) of numbers in an array.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "10,20,30,40,50",
      },
    ],
    buttonText: "Calculate Mean",
  },
  // problem--> 17
  {
    id: "mnc-median-of-array",
    title: "Median of an Array",
    description:
      "Write a function that calculates the median of numbers in an array. The median is the middle value in a sorted list of numbers.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "7,3,1,9,4",
      },
    ],
    buttonText: "Calculate Median",
  },
  // problem--> 18
  {
    id: "mnc-mode-of-array",
    title: "Mode of an Array",
    description:
      "Write a function that finds the mode (most frequent number or numbers) of an array.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,2,3,4,2,5",
      },
    ],
    buttonText: "Calculate Mode",
  },
  // problem--> 19
  {
    id: "mnc-greatest-common-divisor",
    title: "Greatest Common Divisor (GCD)",
    description:
      "Write a function to find the greatest common divisor of two numbers using the Euclidean algorithm.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 48 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 18 },
    ],
    buttonText: "Find GCD",
  },
  // problem--> 20
  {
    id: "mnc-least-common-multiple",
    title: "Least Common Multiple (LCM)",
    description:
      "Write a function to find the least common multiple of two numbers.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 15 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 20 },
    ],
    buttonText: "Find LCM",
  },
  // problem--> 21
  {
    id: "mnc-is-perfect-square",
    title: "Perfect Square Check",
    description:
      "Write a function that determines if a number is a perfect square.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 25 }],
    buttonText: "Check",
  },
  // problem--> 22
  {
    id: "mnc-square-root",
    title: "Calculate Square Root",
    description:
      "Write a function that calculates the square root of a number without using `Math.sqrt()` (e.g., using the Babylonian method).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 16 }],
    buttonText: "Calculate",
  },
  // problem--> 23
  {
    id: "mnc-decimal-to-binary",
    title: "Decimal to Binary",
    description:
      "Write a function to convert a decimal number to its binary representation.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Decimal Number", type: "number", defaultValue: 13 },
    ],
    buttonText: "Convert",
  },
  // problem--> 24
  {
    id: "mnc-binary-to-decimal",
    title: "Binary to Decimal",
    description:
      "Write a function to convert a binary string to its decimal representation.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "binary",
        label: "Binary String",
        type: "text",
        defaultValue: "1101",
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 25
  {
    id: "mnc-is-leap-year",
    title: "Leap Year Check",
    description:
      "Write a function to determine if a given year is a leap year. A leap year is divisible by 4, except for years divisible by 100 unless they are also divisible by 400.",
    category: "Math and Number Challenges",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 2024 }],
    buttonText: "Check",
  },
  // problem--> 26
  {
    id: "mnc-sum-of-multiples",
    title: "Sum of Multiples",
    description:
      "Write a function that finds the sum of all multiples of 3 or 5 below a given number.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "limit", label: "Limit", type: "number", defaultValue: 1000 },
    ],
    buttonText: "Calculate Sum",
  },
  // problem--> 27
  {
    id: "mnc-is-armstrong-number",
    title: "Armstrong Number Check",
    description:
      "Write a function to check if a number is an Armstrong number (a number that is the sum of its own digits each raised to the power of the number of digits).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 153 }],
    buttonText: "Check",
  },
  // problem--> 28
  {
    id: "mnc-is-perfect-number",
    title: "Perfect Number Check",
    description:
      "Write a function to check if a number is a perfect number (a positive integer that is equal to the sum of its proper positive divisors).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 28 }],
    buttonText: "Check",
  },
  // problem--> 29
  {
    id: "mnc-is-happy-number",
    title: "Happy Number Check",
    description:
      "Write a function to check if a number is a happy number (a number which eventually reaches 1 when replaced by the sum of the square of each digit).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 19 }],
    buttonText: "Check",
  },
  // problem--> 30
  {
    id: "mnc-collatz-conjecture",
    title: "Collatz Conjecture Steps",
    description:
      "Write a function to find the number of steps to reach 1 using the Collatz conjecture (if n is even, n = n/2; if n is odd, n = 3n + 1).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 6 }],
    buttonText: "Count Steps",
  },
  // problem--> 31
  {
    id: "mnc-roman-to-integer",
    title: "Roman to Integer",
    description: "Convert a Roman numeral string to an integer.",
    category: "Math and Number Challenges",
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
  // problem--> 32
  {
    id: "mnc-integer-to-roman",
    title: "Integer to Roman",
    description: "Convert an integer to its Roman numeral representation.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Integer", type: "number", defaultValue: 1994 },
    ],
    buttonText: "Convert",
  },
  // problem--> 33
  {
    id: "mnc-sieve-of-eratosthenes",
    title: "Sieve of Eratosthenes",
    description:
      "Implement the Sieve of Eratosthenes to find all prime numbers up to a given limit.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "limit", label: "Limit", type: "number", defaultValue: 100 },
    ],
    buttonText: "Find Primes",
  },
  // problem--> 34
  {
    id: "mnc-pascals-triangle",
    title: "Pascal's Triangle",
    description: "Generate the first n rows of Pascal's Triangle.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "rows", label: "Number of Rows", type: "number", defaultValue: 5 },
    ],
    buttonText: "Generate",
  },
  // problem--> 35
  {
    id: "mnc-matrix-addition",
    title: "Matrix Addition",
    description: "Write a function to add two matrices (2D arrays).",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix1",
        label: "Matrix 1 (JSON)",
        type: "textarea",
        defaultValue: "[[1,2],[3,4]]",
      },
      {
        id: "matrix2",
        label: "Matrix 2 (JSON)",
        type: "textarea",
        defaultValue: "[[5,6],[7,8]]",
      },
    ],
    buttonText: "Add Matrices",
  },
  // problem--> 36
  {
    id: "mnc-matrix-multiplication",
    title: "Matrix Multiplication",
    description: "Write a function to multiply two matrices.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix1",
        label: "Matrix 1 (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6]]",
      },
      {
        id: "matrix2",
        label: "Matrix 2 (JSON)",
        type: "textarea",
        defaultValue: "[[7,8],[9,10],[11,12]]",
      },
    ],
    buttonText: "Multiply Matrices",
  },
  // problem--> 37
  {
    id: "mnc-permutations",
    title: "Permutations",
    description:
      "Write a function to generate all permutations of a given array of distinct numbers.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Generate Permutations",
  },
  // problem--> 38
  {
    id: "mnc-combinations",
    title: "Combinations",
    description:
      "Write a function to generate all combinations of a specific size from an array of distinct numbers.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,3,4",
      },
      {
        id: "size",
        label: "Combination Size",
        type: "number",
        defaultValue: 2,
      },
    ],
    buttonText: "Generate Combinations",
  },
  // problem--> 39
  {
    id: "mnc-fast-exponentiation",
    title: "Fast Exponentiation",
    description:
      "Implement the fast exponentiation (exponentiation by squaring) algorithm to calculate powers efficiently, especially for large exponents.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 3 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 13 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 40
  {
    id: "mnc-digital-root",
    title: "Digital Root",
    description:
      "Calculate the digital root of a number (the recursive sum of its digits until a single-digit number is achieved).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 942 }],
    buttonText: "Find Digital Root",
  },
  // problem--> 41
  {
    id: "mnc-base-conversion",
    title: "Base Conversion",
    description:
      "Write a function to convert a number from a given base to another base (bases 2-36).",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "numberStr",
        label: "Number (as string)",
        type: "text",
        defaultValue: "1A",
      },
      { id: "fromBase", label: "From Base", type: "number", defaultValue: 16 },
      { id: "toBase", label: "To Base", type: "number", defaultValue: 10 },
    ],
    buttonText: "Convert Base",
  },
  // problem--> 42
  {
    id: "mnc-is-power-of-two",
    title: "Is Power of Two",
    description:
      "Write a function to determine if a given integer is a power of two.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 16 }],
    buttonText: "Check",
  },
  // problem--> 43
  {
    id: "mnc-missing-number-in-sequence",
    title: "Missing Number in Sequence",
    description:
      "Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "3,0,1",
      },
    ],
    buttonText: "Find Missing",
  },
  // problem--> 44
  {
    id: "mnc-plus-one",
    title: "Plus One",
    description:
      "Given a large integer represented as an integer array, increment the integer by one and return the resulting array of digits.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "digits",
        label: "Array of digits",
        type: "text",
        defaultValue: "9,9,9",
      },
    ],
    buttonText: "Increment",
  },
  // problem--> 45
  {
    id: "mnc-excel-column-number",
    title: "Excel Sheet Column Number",
    description:
      "Given a column title as it appears in an Excel sheet, return its corresponding column number.",
    category: "Math and Number Challenges",
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
  // problem--> 46
  {
    id: "mnc-excel-column-title",
    title: "Excel Sheet Column Title",
    description:
      "Given a positive integer, return its corresponding column title as it appears in an Excel sheet.",
    category: "Math and Number Challenges",
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
  // problem--> 47
  {
    id: "mnc-single-number",
    title: "Single Number",
    description:
      "Given a non-empty array of integers where every element appears twice except for one, find that single one.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "4,1,2,1,2",
      },
    ],
    buttonText: "Find Single",
  },
  // problem--> 48
  {
    id: "mnc-add-binary",
    title: "Add Binary",
    description:
      "Given two binary strings, return their sum (also a binary string).",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "bin1",
        label: "Binary String 1",
        type: "text",
        defaultValue: "1010",
      },
      {
        id: "bin2",
        label: "Binary String 2",
        type: "text",
        defaultValue: "1011",
      },
    ],
    buttonText: "Add",
  },
  // problem--> 49
  {
    id: "mnc-trailing-zeroes-in-factorial",
    title: "Trailing Zeroes in Factorial",
    description:
      "Given an integer n, return the number of trailing zeroes in n!.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number (n)", type: "number", defaultValue: 25 },
    ],
    buttonText: "Count Zeroes",
  },
  // problem--> 50
  {
    id: "mnc-ugly-number",
    title: "Ugly Number Check",
    description:
      "An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Write a function to check if a number is ugly.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 6 }],
    buttonText: "Check",
  },
  // problem--> 51
  {
    id: "mnc-count-primes",
    title: "Count Primes",
    description:
      "Count the number of prime numbers less than a non-negative number, n.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 10 }],
    buttonText: "Count",
  },
  // problem--> 52
  {
    id: "mnc-add-digits",
    title: "Add Digits",
    description:
      "Given a non-negative integer, repeatedly add all its digits until the result has only one digit.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 38 }],
    buttonText: "Find Digital Root",
  },
  // problem--> 53
  {
    id: "mnc-valid-perfect-square",
    title: "Valid Perfect Square",
    description:
      "Given a positive integer num, write a function which returns True if num is a perfect square else False.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 16 }],
    buttonText: "Validate",
  },
  // problem--> 54
  {
    id: "mnc-arranging-coins",
    title: "Arranging Coins",
    description:
      "You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the i-th row has exactly i coins. Given n, return the number of full staircase rows that can be formed.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Number of coins", type: "number", defaultValue: 8 },
    ],
    buttonText: "Calculate Rows",
  },
  // problem--> 55
  {
    id: "mnc-diophantine-equation",
    title: "Linear Diophantine Equation",
    description:
      "Find a single integer solution (x, y) for the equation ax + by = c. Return 'No solution' if one does not exist.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 3 },
      { id: "b", label: "b", type: "number", defaultValue: 5 },
      { id: "c", label: "c", type: "number", defaultValue: 13 },
    ],
    buttonText: "Find Solution",
  },
  // problem--> 56
  {
    id: "mnc-pythagorean-triplet",
    title: "Pythagorean Triplet",
    description:
      "Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a^2 + b^2 = c^2.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "3,4,5,8,10",
      },
    ],
    buttonText: "Find Triplet",
  },
  // problem--> 57
  {
    id: "mnc-complex-number-multiplication",
    title: "Complex Number Multiplication",
    description:
      "Given two strings representing two complex numbers, return a string representing their multiplication.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "num1",
        label: "Complex Number 1",
        type: "text",
        defaultValue: "1+1i",
      },
      {
        id: "num2",
        label: "Complex Number 2",
        type: "text",
        defaultValue: "1+1i",
      },
    ],
    buttonText: "Multiply",
  },
  // problem--> 58
  {
    id: "mnc-fraction-to-recurring-decimal",
    title: "Fraction to Recurring Decimal",
    description:
      "Given two integers representing the numerator and denominator of a fraction, return the fraction in string format. If the fractional part is repeating, enclose the repeating part in parentheses.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "numerator", label: "Numerator", type: "number", defaultValue: 4 },
      {
        id: "denominator",
        label: "Denominator",
        type: "number",
        defaultValue: 333,
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 59
  {
    id: "mnc-pow-x-n",
    title: "Pow(x, n)",
    description:
      "Implement pow(x, n), which calculates x raised to the power n. Handle positive and negative exponents.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "x", label: "x", type: "number", defaultValue: 2.0 },
      { id: "n", label: "n", type: "number", defaultValue: -2 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 60
  {
    id: "mnc-multiply-strings",
    title: "Multiply Strings",
    description:
      "Given two non-negative integers represented as strings, return the product of the two numbers, also as a string.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "text", defaultValue: "123" },
      { id: "num2", label: "Number 2", type: "text", defaultValue: "456" },
    ],
    buttonText: "Multiply",
  },
  // problem--> 61
  {
    id: "mnc-angle-between-hands-of-a-clock",
    title: "Angle Between Hands of a Clock",
    description:
      "Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the hour and the minute hand.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "hour", label: "Hour", type: "number", defaultValue: 3 },
      { id: "minutes", label: "Minutes", type: "number", defaultValue: 15 },
    ],
    buttonText: "Calculate Angle",
  },
  // problem--> 62
  {
    id: "mnc-bulb-switcher",
    title: "Bulb Switcher",
    description:
      "There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb. For the i-th round, you toggle every i-th bulb. For the n-th round, you only toggle the last bulb. Find how many bulbs are on after n rounds.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n bulbs", type: "number", defaultValue: 7 }],
    buttonText: "Calculate On Bulbs",
  },
  // problem--> 63
  {
    id: "mnc-nth-digit",
    title: "Nth Digit",
    description:
      "Find the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 11 }],
    buttonText: "Find Digit",
  },
  // problem--> 64
  {
    id: "mnc-string-to-integer-atoi",
    title: "String to Integer (atoi)",
    description:
      "Implement a function that converts a string to a 32-bit signed integer, handling whitespace, signs, and overflow.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "s",
        label: "String",
        type: "text",
        defaultValue: "   -42 with words",
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 65
  {
    id: "mnc-integer-break",
    title: "Integer Break",
    description:
      "Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 10 }],
    buttonText: "Maximize Product",
  },
  // problem--> 66
  {
    id: "mnc-water-and-jug-problem",
    title: "Water and Jug Problem",
    description:
      "You have two jugs with capacities x and y litres. Determine whether it is possible to measure exactly z litres using these two jugs.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "x", label: "Jug 1 Capacity", type: "number", defaultValue: 3 },
      { id: "y", label: "Jug 2 Capacity", type: "number", defaultValue: 5 },
      { id: "z", label: "Target Capacity", type: "number", defaultValue: 4 },
    ],
    buttonText: "Check",
  },
  // problem--> 67
  {
    id: "mnc-nim-game",
    title: "Nim Game",
    description:
      "You are playing a game with your friend. There is a heap of stones on the table. You and your friend will alternate taking turns, and you go first. On each turn, the person whose turn it is will remove 1 to 3 stones from the heap. The one who removes the last stone is the winner. Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Number of stones", type: "number", defaultValue: 4 },
    ],
    buttonText: "Can I Win?",
  },
  // problem--> 68
  {
    id: "mnc-super-pow",
    title: "Super Pow",
    description:
      "Your task is to calculate a^b mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 2 },
      { id: "b", label: "b (as array)", type: "text", defaultValue: "1,0" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 69
  {
    id: "mnc-largest-triangle-area",
    title: "Largest Triangle Area",
    description:
      "Given a list of points, return the area of the largest triangle that can be formed by any 3 of the points.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Points (JSON)",
        type: "textarea",
        defaultValue: "[[0,0],[0,1],[1,0],[0,2],[2,0]]",
      },
    ],
    buttonText: "Find Area",
  },
  // problem--> 70
  {
    id: "mnc-minimum-moves-to-equal-array-elements",
    title: "Minimum Moves to Equal Array Elements",
    description:
      "Given an integer array, you may perform an operation on the array where you increment n - 1 elements by 1. Return the minimum number of moves required to make all array elements equal.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Calculate Moves",
  },
  // problem--> 71
  {
    id: "mnc-matrix-transpose",
    title: "Transpose Matrix",
    description:
      "Write a function that takes a 2D array (matrix) and returns its transpose.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6]]",
      },
    ],
    buttonText: "Transpose",
  },
  // problem--> 72
  {
    id: "mnc-determinant-2x2",
    title: "Determinant of a 2x2 Matrix",
    description:
      "Calculate the determinant of a 2x2 matrix. The formula is ad - bc.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix",
        label: "2x2 Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2],[3,4]]",
      },
    ],
    buttonText: "Calculate Determinant",
  },
  // problem--> 73
  {
    id: "mnc-dot-product",
    title: "Dot Product of Two Vectors",
    description:
      "Calculate the dot product of two vectors (represented as arrays).",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "vec1",
        label: "Vector 1 (comma-separated)",
        type: "text",
        defaultValue: "1,2,3",
      },
      {
        id: "vec2",
        label: "Vector 2 (comma-separated)",
        type: "text",
        defaultValue: "4,5,6",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 74
  {
    id: "mnc-amicable-numbers",
    title: "Amicable Numbers Check",
    description:
      "Check if two numbers are amicable. Amicable numbers are two different numbers so related that the sum of the proper divisors of each is equal to the other number.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 220 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 284 },
    ],
    buttonText: "Check",
  },
  // problem--> 75
  {
    id: "mnc-catalan-numbers",
    title: "Nth Catalan Number",
    description:
      "Write a function to compute the nth Catalan number. Catalan numbers appear in many counting problems.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Nth Catalan Number", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate Catalan",
  },
  // problem--> 76
  {
    id: "mnc-count-and-say",
    title: "Count and Say",
    description:
      "The count-and-say sequence is the sequence of integers with the first five terms as following: 1, 11, 21, 1211, 111221. Given an integer n, generate the nth term of the count-and-say sequence.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 4 }],
    buttonText: "Generate",
  },
  // problem--> 77
  {
    id: "mnc-spiral-matrix",
    title: "Spiral Matrix",
    description:
      "Given an m x n matrix, return all elements of the matrix in spiral order.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Traverse",
  },
  // problem--> 78
  {
    id: "mnc-rotate-image",
    title: "Rotate Image",
    description:
      "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place.",
    category: "Math and Number Challenges",
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
  // problem--> 79
  {
    id: "mnc-set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    description:
      "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,1,1],[1,0,1],[1,1,1]]",
      },
    ],
    buttonText: "Set Zeroes",
  },
  // problem--> 80
  {
    id: "mnc-valid-sudoku",
    title: "Valid Sudoku",
    description:
      "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the rules.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "board",
        label: "Sudoku Board (JSON)",
        type: "textarea",
        defaultValue:
          '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
      },
    ],
    buttonText: "Validate",
  },
  // problem--> 81
  {
    id: "mnc-game-of-life",
    title: "Game of Life",
    description:
      "Given a board with m by n cells, each cell has an initial state: live (1) or dead (0). Compute the next state based on the four rules of Conway's Game of Life.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "board",
        label: "Board (JSON)",
        type: "textarea",
        defaultValue: "[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
      },
    ],
    buttonText: "Next State",
  },
  // problem--> 82
  {
    id: "mnc-max-points-on-a-line",
    title: "Max Points on a Line",
    description:
      "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Points (JSON)",
        type: "textarea",
        defaultValue: "[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 83
  {
    id: "mnc-basic-calculator-ii",
    title: "Basic Calculator II",
    description:
      "Given a string which represents an expression, evaluate this expression and return its value. The expression string contains only non-negative integers, `+`, `-`, `*`, `/` operators and empty spaces.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "s", label: "Expression", type: "text", defaultValue: "3+2*2" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 84
  {
    id: "mnc-reverse-bits",
    title: "Reverse Bits",
    description: "Reverse bits of a given 32-bit unsigned integer.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "n",
        label: "Number (as binary string)",
        type: "text",
        defaultValue: "00000010100101000001111010011100",
      },
    ],
    buttonText: "Reverse",
  },
  // problem--> 85
  {
    id: "mnc-number-of-1-bits",
    title: "Number of 1 Bits",
    description:
      "Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "n",
        label: "Number (as binary string)",
        type: "text",
        defaultValue: "00000000000000000000000000001011",
      },
    ],
    buttonText: "Count",
  },
  // problem--> 86
  {
    id: "mnc-gray-code",
    title: "Gray Code",
    description:
      "The gray code is a binary numeral system where two successive values differ in only one bit. Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 2 }],
    buttonText: "Generate",
  },
  // problem--> 87
  {
    id: "mnc-majority-element",
    title: "Majority Element",
    description:
      "Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "2,2,1,1,1,2,2",
      },
    ],
    buttonText: "Find",
  },
  // problem--> 88
  {
    id: "mnc-kth-largest-element",
    title: "Kth Largest Element in an Array",
    description:
      "Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "3,2,1,5,6,4",
      },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find",
  },
  // problem--> 89
  {
    id: "mnc-product-of-array-except-self",
    title: "Product of Array Except Self",
    description:
      "Given an integer array, return an array such that the output at index i is the product of all the elements of the original array except the one at i.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,3,4",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 90
  {
    id: "mnc-container-with-most-water",
    title: "Container With Most Water",
    description:
      "Given n non-negative integers representing vertical lines, find two lines that form a container that contains the most water.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of heights",
        type: "text",
        defaultValue: "1,8,6,2,5,4,8,3,7",
      },
    ],
    buttonText: "Find Max Area",
  },
  // problem--> 91
  {
    id: "mnc-coin-change",
    title: "Coin Change",
    description:
      "You are given coins of different denominations and a total amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount cannot be made up by any combination of the coins, return -1.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "coins",
        label: "Coins (comma-separated)",
        type: "text",
        defaultValue: "1,2,5",
      },
      { id: "amount", label: "Amount", type: "number", defaultValue: 11 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 92
  {
    id: "mnc-longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    description:
      "Given an unsorted array of integers, find the length of the longest consecutive elements sequence.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "100,4,200,1,3,2",
      },
    ],
    buttonText: "Find Length",
  },
  // problem--> 93
  {
    id: "mnc-gas-station",
    title: "Gas Station",
    description:
      "There are n gas stations along a circular route. You are given two integer arrays gas and cost. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "gas",
        label: "Gas amounts",
        type: "text",
        defaultValue: "1,2,3,4,5",
      },
      {
        id: "cost",
        label: "Cost to travel",
        type: "text",
        defaultValue: "3,4,5,1,2",
      },
    ],
    buttonText: "Find Start Station",
  },
  // problem--> 94
  {
    id: "mnc-candy",
    title: "Candy Distribution",
    description:
      "There are N children standing in a line. Each child is assigned a rating value. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. What is the minimum candies you must give?",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "ratings",
        label: "Ratings array",
        type: "text",
        defaultValue: "1,0,2",
      },
    ],
    buttonText: "Calculate Candies",
  },
  // problem--> 95
  {
    id: "mnc-jump-game-ii",
    title: "Jump Game II",
    description:
      "Given an array of non-negative integers, you are initially positioned at the first index. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of jumps",
        type: "text",
        defaultValue: "2,3,1,1,4",
      },
    ],
    buttonText: "Find Minimum Jumps",
  },
  // problem--> 96
  {
    id: "mnc-first-missing-positive",
    title: "First Missing Positive",
    description:
      "Given an unsorted integer array, find the smallest missing positive integer.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "3,4,-1,1",
      },
    ],
    buttonText: "Find Missing Positive",
  },
  // problem--> 97
  {
    id: "mnc-next-permutation",
    title: "Next Permutation",
    description:
      "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Find Next Permutation",
  },
  // problem--> 98
  {
    id: "mnc-trapping-rain-water",
    title: "Trapping Rain Water",
    description:
      "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "heights",
        label: "Elevation map",
        type: "text",
        defaultValue: "0,1,0,2,1,0,1,3,2,1,2,1",
      },
    ],
    buttonText: "Calculate Water",
  },
  // problem--> 99
  {
    id: "mnc-largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    description:
      "Given an array of integers representing the histogram's bar height, find the area of the largest rectangle in the histogram.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "heights",
        label: "Histogram heights",
        type: "text",
        defaultValue: "2,1,5,6,2,3",
      },
    ],
    buttonText: "Find Largest Area",
  },
  // problem--> 100
  {
    id: "mnc-maximal-rectangle",
    title: "Maximal Rectangle",
    description:
      "Given a 2D binary matrix filled with 0s and 1s, find the largest rectangle containing only 1s and return its area.",
    category: "Math and Number Challenges",
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
  // problem--> 101
  {
    id: "mnc-chinese-remainder-theorem",
    title: "Chinese Remainder Theorem",
    description:
      "Solve a system of linear congruences. Given divisors (must be pairwise coprime) and remainders, find the smallest positive integer solution.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "divisors",
        label: "Divisors (coprime)",
        type: "text",
        defaultValue: "3,5,7",
      },
      {
        id: "remainders",
        label: "Remainders",
        type: "text",
        defaultValue: "2,3,2",
      },
    ],
    buttonText: "Solve",
  },
  // problem--> 102
  {
    id: "mnc-josephus-problem",
    title: "Josephus Problem",
    description:
      "There are n people standing in a circle waiting to be executed. The counting begins at some point in the circle and proceeds around the circle in a fixed direction. In each step, a certain number of people are skipped and the next person is executed. Find the position of the last person remaining.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "n",
        label: "Number of people (n)",
        type: "number",
        defaultValue: 7,
      },
      { id: "k", label: "Step size (k)", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Survivor",
  },
  // problem--> 103
  {
    id: "mnc-integer-partition",
    title: "Integer Partition",
    description:
      "Find the number of ways a positive integer can be expressed as a sum of positive integers. For n=4, the partitions are 4, 3+1, 2+2, 2+1+1, 1+1+1+1.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "Number (n)", type: "number", defaultValue: 5 }],
    buttonText: "Count Partitions",
  },
  // problem--> 104
  {
    id: "mnc-fft-conceptual",
    title: "Fast Fourier Transform (Conceptual)",
    description:
      "Explain the Fast Fourier Transform (FFT) algorithm and its application in fast polynomial multiplication.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 105
  {
    id: "mnc-miller-rabin-primality-test",
    title: "Miller-Rabin Primality Test",
    description:
      "Implement the Miller-Rabin probabilistic primality test, suitable for very large numbers.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Number to test", type: "text", defaultValue: "29" },
    ],
    buttonText: "Test Primality",
  },
  // problem--> 106
  {
    id: "mnc-karatsuba-multiplication",
    title: "Karatsuba Multiplication",
    description:
      "Implement the Karatsuba algorithm for fast multiplication of large integers, which is more efficient than the grade-school algorithm.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "num1",
        label: "Large Number 1",
        type: "text",
        defaultValue: "12345",
      },
      {
        id: "num2",
        label: "Large Number 2",
        type: "text",
        defaultValue: "67890",
      },
    ],
    buttonText: "Multiply",
  },
  // problem--> 107
  {
    id: "mnc-gaussian-elimination-conceptual",
    title: "Gaussian Elimination (Conceptual)",
    description:
      "Explain the process of Gaussian elimination for solving a system of linear equations represented by a matrix.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 108
  {
    id: "mnc-simplex-algorithm-conceptual",
    title: "Simplex Algorithm (Conceptual)",
    description:
      "Explain the high-level steps of the Simplex algorithm for solving linear programming optimization problems.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 109
  {
    id: "mnc-monty-hall-problem",
    title: "Monty Hall Problem",
    description:
      "Simulate the Monty Hall problem to demonstrate the counter-intuitive probabilities. A contestant chooses one of three doors. The host opens another door, revealing a goat, and offers the contestant a chance to switch. Does switching improve the odds?",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "simulations",
        label: "Number of Simulations",
        type: "number",
        defaultValue: 10000,
      },
    ],
    buttonText: "Simulate",
  },
  // problem--> 110
  {
    id: "mnc-birthday-paradox",
    title: "Birthday Paradox",
    description:
      "Calculate the approximate probability that in a group of n people, at least two share a birthday. Find the smallest n for which the probability is > 50%.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "n",
        label: "Number of people (n)",
        type: "number",
        defaultValue: 23,
      },
    ],
    buttonText: "Calculate Probability",
  },
  // problem--> 111
  {
    id: "mnc-reservoir-sampling",
    title: "Reservoir Sampling",
    description:
      "Implement an algorithm to select k items from a stream of items of unknown length, such that each item has an equal probability of being selected.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "stream",
        label: "Stream of numbers",
        type: "text",
        defaultValue: "1,2,3,4,5,6,7,8,9,10",
      },
      {
        id: "k",
        label: "Number of items to select (k)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Sample",
  },
  // problem--> 112
  {
    id: "mnc-fisher-yates-shuffle",
    title: "Fisher-Yates Shuffle",
    description:
      "Implement the Fisher-Yates algorithm to shuffle an array randomly in-place.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array to shuffle",
        type: "text",
        defaultValue: "1,2,3,4,5",
      },
    ],
    buttonText: "Shuffle",
  },
  // problem--> 113
  {
    id: "mnc-combination-sum",
    title: "Combination Sum",
    description:
      "Given a set of candidate numbers and a target, find all unique combinations where the candidates sum to the target. The same number may be chosen multiple times.",
    category: "Math and Number Challenges",
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
  // problem--> 114
  {
    id: "mnc-unique-paths",
    title: "Unique Paths",
    description:
      "A robot on an m x n grid can only move down or right. How many unique paths are there from the top-left to the bottom-right corner?",
    category: "Math and Number Challenges",
    inputs: [
      { id: "m", label: "Rows (m)", type: "number", defaultValue: 3 },
      { id: "n", label: "Columns (n)", type: "number", defaultValue: 7 },
    ],
    buttonText: "Count Paths",
  },
  // problem--> 115
  {
    id: "mnc-climbing-stairs",
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "n",
        label: "Number of steps (n)",
        type: "number",
        defaultValue: 5,
      },
    ],
    buttonText: "Count Ways",
  },
  // problem--> 116
  {
    id: "mnc-gray-code-to-integer",
    title: "Gray Code to Integer",
    description:
      "Convert a Gray code (represented as an integer) back to a standard binary integer.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "gray",
        label: "Gray Code Integer",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 117
  {
    id: "mnc-integer-to-gray-code",
    title: "Integer to Gray Code",
    description:
      "Convert a standard binary integer to its Gray code equivalent.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Integer", type: "number", defaultValue: 2 }],
    buttonText: "Convert",
  },
  // problem--> 118
  {
    id: "mnc-matrix-determinant",
    title: "Matrix Determinant",
    description:
      "Implement a function to calculate the determinant of a square matrix of any size using Laplace expansion.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 119
  {
    id: "mnc-newtons-method-sqrt",
    title: "Square Root via Newton's Method",
    description:
      "Implement Newton's method to find the square root of a number. This is an alternative to the Babylonian method.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 25 }],
    buttonText: "Calculate",
  },
  // problem--> 120
  {
    id: "mnc-shunting-yard-algorithm",
    title: "Shunting-Yard Algorithm",
    description:
      "Implement the Shunting-Yard algorithm to convert an infix mathematical expression to a postfix (Reverse Polish Notation) expression.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "infix",
        label: "Infix Expression",
        type: "text",
        defaultValue: "3 + 4 * 2 / ( 1 - 5 )",
      },
    ],
    buttonText: "Convert to RPN",
  },
  // problem--> 121
  {
    id: "mnc-evaluate-rpn",
    title: "Evaluate Reverse Polish Notation",
    description:
      "Evaluate a mathematical expression given in Reverse Polish Notation (postfix).",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "rpn",
        label: "RPN Expression (comma-separated tokens)",
        type: "text",
        defaultValue: "2,1,+,3,*",
      },
    ],
    buttonText: "Evaluate",
  },
  // problem--> 122
  {
    id: "mnc-line-through-most-points",
    title: "Line Through Most Points",
    description:
      "Given a set of 2D points, find the line that passes through the most number of points.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Points (JSON)",
        type: "textarea",
        defaultValue: "[[1,1],[2,2],[3,3],[1,2],[2,1]]",
      },
    ],
    buttonText: "Find Line",
  },
  // problem--> 123
  {
    id: "mnc-perfect-number-generation",
    title: "Perfect Number Generation",
    description:
      "Generate all perfect numbers up to a given limit using the Euclid-Euler theorem (based on Mersenne primes).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "limit", label: "Limit", type: "number", defaultValue: 10000 },
    ],
    buttonText: "Generate",
  },
  // problem--> 124
  {
    id: "mnc-median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    description:
      "There are two sorted arrays of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr1", label: "Array 1", type: "text", defaultValue: "1,3" },
      { id: "arr2", label: "Array 2", type: "text", defaultValue: "2,4" },
    ],
    buttonText: "Find Median",
  },
  // problem--> 125
  {
    id: "mnc-pi-leibniz-formula",
    title: "Approximate Pi (Leibniz Formula)",
    description:
      "Approximate the value of Pi using the Leibniz formula for a given number of iterations.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "iterations",
        label: "Iterations",
        type: "number",
        defaultValue: 10000,
      },
    ],
    buttonText: "Approximate Pi",
  },
  // problem--> 126
  {
    id: "mnc-pi-monte-carlo",
    title: "Approximate Pi (Monte Carlo)",
    description:
      "Approximate the value of Pi using a Monte Carlo simulation (random sampling).",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Number of Points",
        type: "number",
        defaultValue: 100000,
      },
    ],
    buttonText: "Approximate Pi",
  },
  // problem--> 127
  {
    id: "mnc-fast-inverse-sqrt",
    title: "Fast Inverse Square Root (Conceptual)",
    description:
      "Explain the famous 'Fast Inverse Square Root' algorithm from Quake III Arena, including the 'magic number' 0x5f3759df.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 128
  {
    id: "mnc-modular-exponentiation",
    title: "Modular Exponentiation",
    description:
      "Implement the modular exponentiation algorithm ( (base^exponent) % modulus ) efficiently without calculating the large intermediate power.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 3 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 200 },
      { id: "modulus", label: "Modulus", type: "number", defaultValue: 7 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 129
  {
    id: "mnc-modular-multiplicative-inverse",
    title: "Modular Multiplicative Inverse",
    description:
      "Find the modular multiplicative inverse of a number 'a' under modulo 'm'.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 3 },
      { id: "m", label: "m", type: "number", defaultValue: 11 },
    ],
    buttonText: "Find Inverse",
  },
  // problem--> 130
  {
    id: "mnc-euler-totient-function",
    title: "Euler's Totient Function",
    description:
      "Implement Euler's totient function φ(n), which counts the positive integers up to a given integer n that are relatively prime to n.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 9 }],
    buttonText: "Calculate φ(n)",
  },
  // problem--> 131
  {
    id: "mnc-find-primes-in-range",
    title: "Find Primes in a Range",
    description: "Find all prime numbers between a given start and end value.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "start", label: "Start", type: "number", defaultValue: 10 },
      { id: "end", label: "End", type: "number", defaultValue: 50 },
    ],
    buttonText: "Find Primes",
  },
  // problem--> 132
  {
    id: "mnc-sum-of-primes",
    title: "Sum of Primes",
    description: "Calculate the sum of all prime numbers up to a given limit.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "limit", label: "Limit", type: "number", defaultValue: 100 },
    ],
    buttonText: "Calculate Sum",
  },
  // problem--> 133
  {
    id: "mnc-mersenne-prime",
    title: "Mersenne Prime Check",
    description:
      "A Mersenne number is a number of the form 2^p - 1. If it is prime, it is a Mersenne prime. Check if a number is a Mersenne prime.",
    category: "Math and Number Challenges",
    inputs: [{ id: "p", label: "Exponent p", type: "number", defaultValue: 7 }],
    buttonText: "Check",
  },
  // problem--> 134
  {
    id: "mnc-friendly-numbers",
    title: "Friendly Numbers Check",
    description:
      "Check if two numbers are friendly. Friendly numbers share the same abundancy index (sum of divisors / number).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 6 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 28 },
    ],
    buttonText: "Check",
  },
  // problem--> 135
  {
    id: "mnc-perfect-power",
    title: "Perfect Power Check",
    description:
      "Determine if a given integer is a perfect power (i.e., can be expressed as a^b for integers a > 0, b > 1).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 27 }],
    buttonText: "Check",
  },
  // problem--> 136
  {
    id: "mnc-narcissistic-number",
    title: "Narcissistic Number Check",
    description:
      "An n-digit number that is the sum of the nth powers of its digits is called a narcissistic number. This is a synonym for an Armstrong number.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 1634 },
    ],
    buttonText: "Check",
  },
  // problem--> 137
  {
    id: "mnc-kaprekar-number",
    title: "Kaprekar Number Check",
    description:
      "A Kaprekar number for a given base is a non-negative integer, the representation of whose square in that base can be split into two parts that add up to the original number again.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 9 }],
    buttonText: "Check",
  },
  // problem--> 138
  {
    id: "mnc-automorphic-number",
    title: "Automorphic Number Check",
    description:
      'An automorphic number is a number whose square "ends" in the same digits as the number itself.',
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 76 }],
    buttonText: "Check",
  },
  // problem--> 139
  {
    id: "mnc-luhn-algorithm",
    title: "Luhn Algorithm Validation",
    description:
      "Implement the Luhn algorithm to validate identification numbers like credit card numbers.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "numStr",
        label: "Number String",
        type: "text",
        defaultValue: "79927398713",
      },
    ],
    buttonText: "Validate",
  },
  // problem--> 140
  {
    id: "mnc-taxicab-number",
    title: "Taxicab Number",
    description:
      "Find the nth taxicab number, which is the smallest number that can be expressed as a sum of two positive cubes in n distinct ways.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 2 }],
    buttonText: "Find",
  },
  // problem--> 141
  {
    id: "mnc-sqrt-decomposition",
    title: "SQRT Decomposition for Range Sum (Conceptual)",
    description:
      "Explain SQRT Decomposition as a method to answer range sum queries in O(sqrt(n)) time after O(n) preprocessing.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 142
  {
    id: "mnc-fenwick-tree",
    title: "Fenwick Tree for Range Sum (Conceptual)",
    description:
      "Explain the Fenwick Tree (Binary Indexed Tree) data structure for efficient O(log n) range sum queries and updates.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 143
  {
    id: "mnc-segment-tree",
    title: "Segment Tree for Range Minimum (Conceptual)",
    description:
      "Explain the Segment Tree data structure for efficient O(log n) range minimum queries and updates.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 144
  {
    id: "mnc-prime-factorization",
    title: "Prime Factorization",
    description:
      "Write a function to find all prime factors of a given integer.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 315 }],
    buttonText: "Find Factors",
  },
  // problem--> 145
  {
    id: "mnc-number-of-divisors",
    title: "Number of Divisors",
    description:
      "Write a function to count the total number of divisors of a given integer.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 100 }],
    buttonText: "Count Divisors",
  },
  // problem--> 146
  {
    id: "mnc-sum-of-divisors",
    title: "Sum of Divisors",
    description:
      "Write a function to find the sum of all divisors of a given integer.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 100 }],
    buttonText: "Calculate Sum",
  },
  // problem--> 147
  {
    id: "mnc-random-point-in-circle",
    title: "Random Point in a Circle",
    description:
      "Generate a uniformly distributed random point within a circle of a given radius centered at the origin.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 10 },
    ],
    buttonText: "Generate Point",
  },
  // problem--> 148
  {
    id: "mnc-vector-cross-product",
    title: "Vector Cross Product (3D)",
    description: "Calculate the cross product of two 3D vectors.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "vec1",
        label: "Vector 1 (x,y,z)",
        type: "text",
        defaultValue: "1,2,3",
      },
      {
        id: "vec2",
        label: "Vector 2 (x,y,z)",
        type: "text",
        defaultValue: "4,5,6",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 149
  {
    id: "mnc-matrix-rotation",
    title: "Rotate Matrix 90 Degrees",
    description: "Rotate an N x N matrix by 90 degrees clockwise in-place.",
    category: "Math and Number Challenges",
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
  // problem--> 150
  {
    id: "mnc-spiral-matrix-ii",
    title: "Spiral Matrix II",
    description:
      "Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 3 }],
    buttonText: "Generate",
  },
  // problem--> 151
  {
    id: "mnc-polygon-area",
    title: "Area of a Polygon",
    description:
      "Calculate the area of a polygon given its vertices using the Shoelace formula.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "vertices",
        label: "Vertices (JSON [[x,y],...])",
        type: "textarea",
        defaultValue: "[[0,0],[4,0],[4,3],[0,3]]",
      },
    ],
    buttonText: "Calculate Area",
  },
  // problem--> 152
  {
    id: "mnc-karatsuba-multiplication-conceptual",
    title: "Karatsuba Multiplication (Conceptual)",
    description:
      "Explain the Karatsuba algorithm for multiplying large numbers faster than the grade-school algorithm.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 153
  {
    id: "mnc-extended-euclidean-algorithm",
    title: "Extended Euclidean Algorithm",
    description:
      "Implement the Extended Euclidean Algorithm to find integer coefficients x and y such that ax + by = gcd(a, b).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 240 },
      { id: "b", label: "b", type: "number", defaultValue: 46 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 154
  {
    id: "mnc-rsa-encryption-conceptual",
    title: "RSA Encryption (Conceptual)",
    description:
      "Explain the high-level steps of the RSA asymmetric encryption algorithm.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Explain RSA",
  },
  // problem--> 155
  {
    id: "mnc-hailstone-sequence",
    title: "Hailstone Sequence (Collatz)",
    description:
      "Generate the Hailstone sequence for a given number until it reaches 1.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Start Number", type: "number", defaultValue: 7 },
    ],
    buttonText: "Generate Sequence",
  },
  // problem--> 156
  {
    id: "mnc-goldbach-conjecture",
    title: "Goldbach's Conjecture",
    description:
      "For a given even integer greater than 2, find two prime numbers that sum up to it (Goldbach's conjecture states such a pair always exists).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Even Number", type: "number", defaultValue: 28 },
    ],
    buttonText: "Find Prime Pair",
  },
  // problem--> 157
  {
    id: "mnc-magic-square-check",
    title: "Magic Square Check",
    description:
      "Determine if a given n x n matrix is a magic square (rows, columns, and diagonals sum to the same value).",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[2,7,6],[9,5,1],[4,3,8]]",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 158
  {
    id: "mnc-happy-number-cycle-detection",
    title: "Happy Number (Cycle Detection)",
    description:
      "Check if a number is a happy number using Floyd's Tortoise and Hare algorithm for cycle detection.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 2 }],
    buttonText: "Check",
  },
  // problem--> 159
  {
    id: "mnc-number-to-words",
    title: "Number to Words",
    description:
      "Convert a non-negative integer to its English words representation.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Convert",
  },
  // problem--> 160
  {
    id: "mnc-basic-calculator",
    title: "Basic Calculator",
    description:
      "Implement a basic calculator to evaluate a simple expression string containing `+`, `-`, `(`, `)`, and non-negative integers.",
    category: "Math and Number Challenges",
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
  // problem--> 161
  {
    id: "mnc-nth-ugly-number",
    title: "Nth Ugly Number",
    description:
      "Write a program to find the n-th ugly number. Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 10 }],
    buttonText: "Find",
  },
  // problem--> 162
  {
    id: "mnc-super-ugly-number",
    title: "Super Ugly Number",
    description:
      "Write a program to find the nth super ugly number. Super ugly numbers are positive numbers whose all prime factors are in the given prime list.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "n", type: "number", defaultValue: 12 },
      {
        id: "primes",
        label: "Primes",
        type: "text",
        defaultValue: "2,7,13,19",
      },
    ],
    buttonText: "Find",
  },
  // problem--> 163
  {
    id: "mnc-largest-number",
    title: "Largest Number",
    description:
      "Given a list of non-negative integers, arrange them such that they form the largest number.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "3,30,34,5,9",
      },
    ],
    buttonText: "Arrange",
  },
  // problem--> 164
  {
    id: "mnc-fraction-addition-and-subtraction",
    title: "Fraction Addition and Subtraction",
    description:
      "Given a string representing an expression of fraction addition and subtraction, return the result in string format.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "expression",
        label: "Expression",
        type: "text",
        defaultValue: "-1/2+1/2+1/3",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 165
  {
    id: "mnc-factorial-trailing-zeroes",
    title: "Factorial Trailing Zeroes",
    description:
      "Given an integer n, return the number of trailing zeroes in n!.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 30 }],
    buttonText: "Count",
  },
  // problem--> 166
  {
    id: "mnc-minimum-path-sum",
    title: "Minimum Path Sum",
    description:
      "Given a grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path. You can only move either down or right.",
    category: "Math and Number Challenges",
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
  // problem--> 167
  {
    id: "mnc-largest-perimeter-triangle",
    title: "Largest Perimeter Triangle",
    description:
      "Given an array of integers, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "2,1,2,5,4",
      },
    ],
    buttonText: "Find Perimeter",
  },
  // problem--> 168
  {
    id: "mnc-add-to-array-form-of-integer",
    title: "Add to Array-Form of Integer",
    description:
      "The array-form of an integer is an array representing its digits in left to right order. Given the array-form of an integer and an integer k, return the array-form of the integer num + k.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Array-form", type: "text", defaultValue: "1,2,0,0" },
      { id: "k", label: "k", type: "number", defaultValue: 34 },
    ],
    buttonText: "Add",
  },
  // problem--> 169
  {
    id: "mnc-divide-two-integers",
    title: "Divide Two Integers",
    description:
      "Given two integers, divide two integers without using multiplication, division, and mod operator.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "dividend", label: "Dividend", type: "number", defaultValue: 10 },
      { id: "divisor", label: "Divisor", type: "number", defaultValue: 3 },
    ],
    buttonText: "Divide",
  },
  // problem--> 170
  {
    id: "mnc-valid-number",
    title: "Valid Number",
    description:
      "Given a string, determine if it is a valid number (integer or decimal).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: " -90e3   " },
    ],
    buttonText: "Validate",
  },
  // problem--> 171
  {
    id: "mnc-permutation-sequence",
    title: "Permutation Sequence",
    description:
      "The set [1, 2, 3, ..., n] contains a total of n! unique permutations. Given n and k, return the kth permutation sequence.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "n", type: "number", defaultValue: 3 },
      { id: "k", label: "k", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Sequence",
  },
  // problem--> 172
  {
    id: "mnc-basic-calculator-iii",
    title: "Basic Calculator III",
    description:
      "Implement a basic calculator to evaluate an expression string containing `+`, `-`, `*`, `/`, `(`, `)`, and non-negative integers.",
    category: "Math and Number Challenges",
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
  // problem--> 173
  {
    id: "mnc-number-of-digit-one",
    title: "Number of Digit One",
    description:
      "Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 13 }],
    buttonText: "Count",
  },
  // problem--> 174
  {
    id: "mnc-max-sum-of-rectangle-no-larger-than-k",
    title: "Max Sum of Rectangle No Larger Than K",
    description:
      "Given an m x n matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,0,1],[0,-2,3]]",
      },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Max Sum",
  },
  // problem--> 175
  {
    id: "mnc-russian-peasant-multiplication",
    title: "Russian Peasant Multiplication",
    description:
      "Implement the Russian Peasant algorithm for multiplication, which uses halving, doubling, and summing.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 47 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 42 },
    ],
    buttonText: "Multiply",
  },
  // problem--> 176
  {
    id: "mnc-babylonian-sqrt",
    title: "Babylonian Method for Square Root",
    description:
      "Implement the Babylonian method to find the square root of a number.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "Number", type: "number", defaultValue: 50 }],
    buttonText: "Calculate",
  },
  // problem--> 177
  {
    id: "mnc-sum-of-two-integers",
    title: "Sum of Two Integers",
    description:
      "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 1 },
      { id: "b", label: "b", type: "number", defaultValue: 2 },
    ],
    buttonText: "Sum",
  },
  // problem--> 178
  {
    id: "mnc-integer-to-english-words",
    title: "Integer to English Words",
    description:
      "Convert a non-negative integer to its english words representation.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 1234567 },
    ],
    buttonText: "Convert",
  },
  // problem--> 179
  {
    id: "mnc-perfect-rectangle",
    title: "Perfect Rectangle",
    description:
      "Given an array of rectangles, where each rectangle is represented as [x1, y1, x2, y2], determine if all the rectangles together form an exact cover of a rectangular region.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "rectangles",
        label: "Rectangles (JSON)",
        type: "textarea",
        defaultValue: "[[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 180
  {
    id: "mnc-robot-bounded-in-circle",
    title: "Robot Bounded In Circle",
    description:
      "On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions: 'G', 'L', 'R'. Given a sequence of instructions, return true if the robot returns to the origin after some number of cycles, or is otherwise bounded.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "instructions",
        label: "Instructions",
        type: "text",
        defaultValue: "GGLLGG",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 181
  {
    id: "mnc-random-pick-with-weight",
    title: "Random Pick with Weight",
    description:
      "Given an array w of positive integers, where w[i] describes the weight of index i, write a function which randomly picks an index in proportion to its weight.",
    category: "Math and Number Challenges",
    inputs: [{ id: "w", label: "Weights", type: "text", defaultValue: "1,3" }],
    buttonText: "Pick Index",
  },
  // problem--> 182
  {
    id: "mnc-random-point-in-non-overlapping-rectangles",
    title: "Random Point in Non-overlapping Rectangles",
    description:
      "Given a list of non-overlapping axis-aligned rectangles, write a function that picks a random integer point inside the space covered by the rectangles.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "rects",
        label: "Rectangles (JSON)",
        type: "textarea",
        defaultValue: "[[-2,-2,-1,-1],[1,0,3,0]]",
      },
    ],
    buttonText: "Pick Point",
  },
  // problem--> 183
  {
    id: "mnc-check-if-it-is-a-straight-line",
    title: "Check If It Is a Straight Line",
    description:
      "You are given an array coordinates, where coordinates[i] = [x, y], representing a point. Check if these points make a straight line in the XY plane.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "coordinates",
        label: "Coordinates (JSON)",
        type: "textarea",
        defaultValue: "[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 184
  {
    id: "mnc-reach-a-number",
    title: "Reach a Number",
    description:
      "You are standing at position 0 on an infinite number line. There is a goal at `target`. On the ith move, you can take `i` steps in either the positive or negative direction. Return the minimum number of steps required to reach the destination.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "target", label: "Target", type: "number", defaultValue: 2 },
    ],
    buttonText: "Calculate Steps",
  },
  // problem--> 185
  {
    id: "mnc-reordered-power-of-2",
    title: "Reordered Power of 2",
    description:
      "Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero. Return true if and only if we can do this in a way such that the resulting number is a power of 2.",
    category: "Math and Number Challenges",
    inputs: [{ id: "N", label: "N", type: "number", defaultValue: 46 }],
    buttonText: "Check",
  },
  // problem--> 186
  {
    id: "mnc-rectangle-overlap",
    title: "Rectangle Overlap",
    description:
      "An axis-aligned rectangle is represented by its bottom-left and top-right coordinates. Given two rectangles, return true if they overlap, and false otherwise.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "rec1",
        label: "Rectangle 1 (x1,y1,x2,y2)",
        type: "text",
        defaultValue: "0,0,2,2",
      },
      {
        id: "rec2",
        label: "Rectangle 2 (x1,y1,x2,y2)",
        type: "text",
        defaultValue: "1,1,3,3",
      },
    ],
    buttonText: "Check Overlap",
  },
  // problem--> 187
  {
    id: "mnc-rectangle-area-ii",
    title: "Rectangle Area II",
    description:
      "We are given a list of axis-aligned rectangles. Return the total area covered by all rectangles in the plane.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "rectangles",
        label: "Rectangles (JSON)",
        type: "textarea",
        defaultValue: "[[0,0,2,2],[1,1,3,3],[2,0,4,1]]",
      },
    ],
    buttonText: "Calculate Area",
  },
  // problem--> 188
  {
    id: "mnc-powerful-integers",
    title: "Powerful Integers",
    description:
      "Given three integers x, y, and bound, return a list of all the powerful integers that have a value less than or equal to bound. An integer is powerful if it can be represented as x^i + y^j for some non-negative integers i and j.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "x", label: "x", type: "number", defaultValue: 2 },
      { id: "y", label: "y", type: "number", defaultValue: 3 },
      { id: "bound", label: "bound", type: "number", defaultValue: 10 },
    ],
    buttonText: "Find",
  },
  // problem--> 189
  {
    id: "mnc-smallest-integer-divisible-by-k",
    title: "Smallest Integer Divisible by K",
    description:
      "Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1.",
    category: "Math and Number Challenges",
    inputs: [{ id: "k", label: "k", type: "number", defaultValue: 3 }],
    buttonText: "Find Length",
  },
  // problem--> 190
  {
    id: "mnc-numbers-with-same-consecutive-differences",
    title: "Numbers With Same Consecutive Differences",
    description:
      "Return all non-negative integers of length n such that the absolute difference between every two consecutive digits is k.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Length (n)", type: "number", defaultValue: 3 },
      { id: "k", label: "Difference (k)", type: "number", defaultValue: 7 },
    ],
    buttonText: "Find Numbers",
  },
  // problem--> 191
  {
    id: "mnc-find-and-replace-pattern",
    title: "Find and Replace Pattern",
    description:
      "Given a list of strings words and a string pattern, return a list of words[i] that match pattern. A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "words",
        label: "Words",
        type: "text",
        defaultValue: "abc,deq,mee,aqq,dkd,ccc",
      },
      { id: "pattern", label: "Pattern", type: "text", defaultValue: "abb" },
    ],
    buttonText: "Find",
  },
  // problem--> 192
  {
    id: "mnc-consecutive-numbers-sum",
    title: "Consecutive Numbers Sum",
    description:
      "Given a positive integer n, how many ways can we write it as a sum of consecutive positive integers?",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 15 }],
    buttonText: "Count Ways",
  },
  // problem--> 193
  {
    id: "mnc-mirror-reflection",
    title: "Mirror Reflection",
    description:
      "There is a special square room with mirrors on each of the four walls. Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2. The square room has walls of length p and a laser ray from the southwest corner strikes the east wall at a distance q from the 0th receptor. Return the number of the receptor that the ray meets first.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "p", label: "p", type: "number", defaultValue: 2 },
      { id: "q", label: "q", type: "number", defaultValue: 1 },
    ],
    buttonText: "Find Receptor",
  },
  // problem--> 194
  {
    id: "mnc-global-and-local-inversions",
    title: "Global and Local Inversions",
    description:
      "An array A is a permutation of [0, 1, ..., N-1]. A global inversion is a pair (i, j) where 0 <= i < j < N and A[i] > A[j]. A local inversion is an index i where 0 <= i < N-1 and A[i] > A[i+1]. Determine if the number of global inversions is equal to the number of local inversions.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "A", label: "Array A", type: "text", defaultValue: "1,0,2" },
    ],
    buttonText: "Check",
  },
  // problem--> 195
  {
    id: "mnc-the-kth-factor-of-n",
    title: "The kth Factor of n",
    description:
      "Given two positive integers n and k. A factor of an integer n is an integer i where n % i == 0. Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "n", type: "number", defaultValue: 12 },
      { id: "k", label: "k", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Factor",
  },
  // problem--> 196
  {
    id: "mnc-count-good-triplets",
    title: "Count Good Triplets",
    description:
      "Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets. A triplet (arr[i], arr[j], arr[k]) is good if |arr[i] - arr[j]| <= a, |arr[j] - arr[k]| <= b, and |arr[i] - arr[k]| <= c.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,0,1,1,9,7" },
      { id: "a", label: "a", type: "number", defaultValue: 7 },
      { id: "b", label: "b", type: "number", defaultValue: 2 },
      { id: "c", label: "c", type: "number", defaultValue: 3 },
    ],
    buttonText: "Count Triplets",
  },
  // problem--> 197
  {
    id: "mnc-thousand-separator",
    title: "Thousand Separator",
    description:
      "Given an integer n, add a dot '.' as the thousands separator and return it in string format.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 1234567 }],
    buttonText: "Format",
  },
  // problem--> 198
  {
    id: "mnc-matrix-diagonal-sum",
    title: "Matrix Diagonal Sum",
    description:
      "Given a square matrix, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "mat",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Sum Diagonals",
  },
  // problem--> 199
  {
    id: "mnc-check-if-all-1s-are-at-least-length-k-places-away",
    title: "Check If All 1's Are at Least Length K Places Away",
    description:
      "Given an array of 0s and 1s and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "nums",
        label: "Array",
        type: "text",
        defaultValue: "1,0,0,0,1,0,0,1",
      },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Check",
  },
  // problem--> 200
  {
    id: "mnc-count-odd-numbers-in-an-interval-range",
    title: "Count Odd Numbers in an Interval Range",
    description:
      "Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "low", label: "low", type: "number", defaultValue: 3 },
      { id: "high", label: "high", type: "number", defaultValue: 7 },
    ],
    buttonText: "Count Odds",
  },
];
