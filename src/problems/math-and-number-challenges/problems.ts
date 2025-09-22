// problem--> 01
import { Problem } from "../types";

export const problems: Problem[] = [
  // --- Fundamentals ---
  // problem--> 01
  {
    id: "mn-add-two-numbers",
    title: "Add Two Numbers",
    description:
      "Write a function that takes two numbers and returns their sum.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 5 },
    ],
    buttonText: "Sum",
  },
  // problem--> 02
  {
    id: "mn-check-even-odd",
    title: "Check Even or Odd",
    description:
      "Write a function that takes an integer and returns 'Even' or 'Odd'.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 7 }],
    buttonText: "Check",
  },
  // problem--> 03
  {
    id: "mn-area-of-rectangle",
    title: "Area of a Rectangle",
    description:
      "Write a function that calculates the area of a rectangle given its width and height.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "width", label: "Width", type: "number", defaultValue: 10 },
      { id: "height", label: "Height", type: "number", defaultValue: 4 },
    ],
    buttonText: "Calculate Area",
  },
  // problem--> 04
  {
    id: "mn-celsius-to-fahrenheit",
    title: "Celsius to Fahrenheit",
    description:
      "Write a function to convert a temperature from Celsius to Fahrenheit. Formula: (C * 9/5) + 32.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "celsius", label: "Celsius", type: "number", defaultValue: 20 },
    ],
    buttonText: "Convert",
  },
  // problem--> 05
  {
    id: "mn-factorial-iterative",
    title: "Factorial of a Number (Iterative)",
    description:
      "Write a function to calculate the factorial of a non-negative integer (n!) using a loop.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Calculate Factorial",
  },
  // problem--> 06
  {
    id: "mn-is-prime",
    title: "Check for Prime Number",
    description:
      "Write a function to determine if a given number is a prime number.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 13 }],
    buttonText: "Check Prime",
  },
  // problem--> 07
  {
    id: "mn-fibonacci-iterative",
    title: "Nth Fibonacci Number (Iterative)",
    description:
      "Write an efficient iterative function to find the Nth number in the Fibonacci sequence.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Nth number", type: "number", defaultValue: 10 },
    ],
    buttonText: "Find Fibonacci",
  },
  // problem--> 08
  {
    id: "mn-find-max-number",
    title: "Find Maximum of Three Numbers",
    description:
      "Write a function that returns the largest of three given numbers.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 25 },
      { id: "num3", label: "Number 3", type: "number", defaultValue: 15 },
    ],
    buttonText: "Find Max",
  },
  // problem--> 09
  {
    id: "mn-power-of-number",
    title: "Power of a Number",
    description:
      "Write a function that calculates a base number raised to a power of an exponent, without using `**` or `Math.pow`.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 3 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 4 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 10
  {
    id: "mn-find-square-root",
    title: "Calculate Square Root",
    description:
      "Use a built-in method to find the square root of a non-negative number.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 81 }],
    buttonText: "Get Square Root",
  },
  // problem--> 11
  {
    id: "mn-is-integer",
    title: "Check if Number is an Integer",
    description: "Write a function to check if a given value is an integer.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Value", type: "text", defaultValue: "123.45" },
    ],
    buttonText: "Check Integer",
  },
  // problem--> 12
  {
    id: "mn-round-to-decimal-places",
    title: "Round to N Decimal Places",
    description:
      "Write a function to round a number to a specified number of decimal places.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 3.14159 },
      {
        id: "places",
        label: "Decimal Places",
        type: "number",
        defaultValue: 2,
      },
    ],
    buttonText: "Round",
  },
  // problem--> 13
  {
    id: "mn-sum-of-digits",
    title: "Sum of Digits",
    description:
      "Write a function that calculates the sum of the digits of a given number.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Sum Digits",
  },
  // problem--> 14
  {
    id: "mn-is-perfect-square",
    title: "Check for Perfect Square",
    description:
      "Write a function to determine if a given number is a perfect square.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 49 }],
    buttonText: "Check",
  },
  // problem--> 15
  {
    id: "mn-mean-of-array",
    title: "Calculate Mean (Average)",
    description:
      "Write a function that calculates the mean (average) of numbers in an array.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,3,4,5",
      },
    ],
    buttonText: "Calculate Mean",
  },
  // problem--> 16
  {
    id: "mn-median-of-array",
    title: "Calculate Median",
    description:
      "Write a function that calculates the median of numbers in an array.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "7,2,10,1,5",
      },
    ],
    buttonText: "Calculate Median",
  },
  // problem--> 17
  {
    id: "mn-mode-of-array",
    title: "Calculate Mode",
    description:
      "Write a function that finds the mode (most frequent number) of an array.",
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
  // problem--> 18
  {
    id: "mn-greatest-common-divisor",
    title: "Greatest Common Divisor (GCD)",
    description:
      "Write a function to find the greatest common divisor of two numbers using the Euclidean algorithm.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "Number 1", type: "number", defaultValue: 48 },
      { id: "b", label: "Number 2", type: "number", defaultValue: 18 },
    ],
    buttonText: "Find GCD",
  },
  // problem--> 19
  {
    id: "mn-least-common-multiple",
    title: "Least Common Multiple (LCM)",
    description:
      "Write a function to find the least common multiple of two numbers.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "Number 1", type: "number", defaultValue: 12 },
      { id: "b", label: "Number 2", type: "number", defaultValue: 18 },
    ],
    buttonText: "Find LCM",
  },
  // problem--> 20
  {
    id: "mn-is-palindrome-number",
    title: "Check for Palindrome Number",
    description:
      "Write a function that checks if a given number is a palindrome (reads the same forwards and backward).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12321 },
    ],
    buttonText: "Check",
  },
  // problem--> 21
  {
    id: "mn-reverse-integer",
    title: "Reverse an Integer",
    description:
      "Write a function that reverses the digits of a given 32-bit signed integer, handling negative signs and overflow.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: -123 },
    ],
    buttonText: "Reverse",
  },
  // problem--> 22
  {
    id: "mn-range-of-array",
    title: "Calculate Range",
    description:
      "Write a function that calculates the range (difference between max and min) of numbers in an array.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "10,2,8,5",
      },
    ],
    buttonText: "Calculate Range",
  },
  // problem--> 23
  {
    id: "mn-decimal-to-binary",
    title: "Decimal to Binary",
    description:
      "Write a function to convert a decimal number to its binary string representation.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Decimal Number", type: "number", defaultValue: 13 },
    ],
    buttonText: "Convert",
  },
  // problem--> 24
  {
    id: "mn-binary-to-decimal",
    title: "Binary to Decimal",
    description:
      "Write a function to convert a binary string representation to its decimal number.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "bin", label: "Binary String", type: "text", defaultValue: "1101" },
    ],
    buttonText: "Convert",
  },
  // problem--> 25
  {
    id: "mn-is-armstrong-number",
    title: "Check for Armstrong Number",
    description:
      "Write a function to check if a number is an Armstrong number (a number equal to the sum of its digits raised to the power of the number of digits).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 153 }],
    buttonText: "Check Armstrong",
  },
  // problem--> 26
  {
    id: "mn-is-power-of-two",
    title: "Check for Power of Two",
    description:
      "Write an efficient function to determine if a given integer is a power of two.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 16 }],
    buttonText: "Check",
  },
  // problem--> 27
  {
    id: "mn-collatz-conjecture-steps",
    title: "Collatz Conjecture Steps",
    description:
      "Write a function that finds the number of steps it takes for a number to reach 1 using the Collatz conjecture rules (n/2 if even, 3n+1 if odd).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Starting Number", type: "number", defaultValue: 6 },
    ],
    buttonText: "Count Steps",
  },
  // problem--> 28
  {
    id: "mn-sum-of-multiples",
    title: "Sum of Multiples",
    description:
      "Write a function that finds the sum of all multiples of 3 or 5 below a given number.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "limit", label: "Limit", type: "number", defaultValue: 1000 },
    ],
    buttonText: "Calculate Sum",
  },
  // problem--> 29
  {
    id: "mn-happy-number",
    title: "Check for Happy Number",
    description:
      "Write a function to determine if a number is 'happy' by repeatedly summing the squares of its digits.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 19 }],
    buttonText: "Check Happy",
  },
  // problem--> 30
  {
    id: "mn-pythagorean-theorem",
    title: "Pythagorean Theorem",
    description:
      "Given the two shorter sides of a right-angled triangle (a, b), calculate the length of the hypotenuse (c).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "Side A", type: "number", defaultValue: 3 },
      { id: "b", label: "Side B", type: "number", defaultValue: 4 },
    ],
    buttonText: "Find Hypotenuse",
  },
  // problem--> 31
  {
    id: "mn-count-set-bits",
    title: "Count Set Bits (Hamming Weight)",
    description:
      "Write a function that takes an unsigned integer and returns the number of '1' bits it has.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 13 }], // 1101
    buttonText: "Count Bits",
  },
  // problem--> 32
  {
    id: "mn-is-perfect-number",
    title: "Check for Perfect Number",
    description:
      "Write a function to check if a number is a perfect number (a number equal to the sum of its proper positive divisors).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 28 }],
    buttonText: "Check Perfect",
  },
  // problem--> 33
  {
    id: "mn-roman-to-integer",
    title: "Roman to Integer",
    description: "Given a roman numeral string, convert it to an integer.",
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
  // problem--> 34
  {
    id: "mn-integer-to-roman",
    title: "Integer to Roman",
    description: "Given an integer, convert it to a Roman numeral string.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Integer", type: "number", defaultValue: 1994 },
    ],
    buttonText: "Convert",
  },
  // problem--> 35
  {
    id: "mn-simplify-fraction",
    title: "Simplify a Fraction",
    description:
      "Write a function that takes a numerator and a denominator and returns the simplified fraction.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "numerator", label: "Numerator", type: "number", defaultValue: 12 },
      {
        id: "denominator",
        label: "Denominator",
        type: "number",
        defaultValue: 18,
      },
    ],
    buttonText: "Simplify",
  },
  // problem--> 36
  {
    id: "mn-add-fractions",
    title: "Add Two Fractions",
    description:
      "Write a function to add two fractions and return the simplified result.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "d1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "n2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "d2", label: "Denominator 2", type: "number", defaultValue: 3 },
    ],
    buttonText: "Add",
  },
  // problem--> 37
  {
    id: "mn-is-ugly-number",
    title: "Check for Ugly Number",
    description:
      "Write a function to check if a number is an ugly number (its prime factors are only 2, 3, or 5).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 14 }],
    buttonText: "Check Ugly",
  },
  // problem--> 38
  {
    id: "mn-random-integer-in-range",
    title: "Random Integer in a Range",
    description:
      "Write a function to generate a random integer between a min and max value (inclusive).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "min", label: "Minimum", type: "number", defaultValue: 1 },
      { id: "max", label: "Maximum", type: "number", defaultValue: 10 },
    ],
    buttonText: "Generate",
  },
  // problem--> 39
  {
    id: "mn-pascals-triangle-row",
    title: "Pascal's Triangle Row",
    description:
      "Given a non-negative integer rowIndex, return the rowIndex-th (0-indexed) row of Pascal's triangle.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "rowIndex", label: "Row Index", type: "number", defaultValue: 3 },
    ],
    buttonText: "Get Row",
  },
  // problem--> 40
  {
    id: "mn-distance-between-points",
    title: "Distance Between Two Points",
    description:
      "Write a function to calculate the Euclidean distance between two points (x1, y1) and (x2, y2) in a 2D plane.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 1 },
      { id: "y1", label: "y1", type: "number", defaultValue: 2 },
      { id: "x2", label: "x2", type: "number", defaultValue: 4 },
      { id: "y2", label: "y2", type: "number", defaultValue: 6 },
    ],
    buttonText: "Calculate Distance",
  },
  // problem--> 41
  {
    id: "mn-prime-factorization",
    title: "Prime Factorization",
    description:
      "Write a function that returns an array of the prime factors of a given number.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 84 }],
    buttonText: "Get Factors",
  },
  // problem--> 42
  {
    id: "mn-sieve-of-eratosthenes",
    title: "Sieve of Eratosthenes",
    description:
      "Implement the Sieve of Eratosthenes algorithm to find all prime numbers up to a specified number.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "limit", label: "Limit", type: "number", defaultValue: 100 },
    ],
    buttonText: "Find Primes",
  },
  // problem--> 43
  {
    id: "mn-add-binary-strings",
    title: "Add Binary Strings",
    description:
      "Given two binary strings, return their sum (also a binary string).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "Binary String 1", type: "text", defaultValue: "1010" },
      { id: "b", label: "Binary String 2", type: "text", defaultValue: "1011" },
    ],
    buttonText: "Add Binary",
  },
  // problem--> 44
  {
    id: "mn-multiply-large-strings",
    title: "Multiply Large Numbers as Strings",
    description:
      "Given two non-negative integers represented as strings, return their product as a string.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "text", defaultValue: "123" },
      { id: "num2", label: "Number 2", type: "text", defaultValue: "456" },
    ],
    buttonText: "Multiply",
  },
  // problem--> 45
  {
    id: "mn-digital-root",
    title: "Find the Digital Root",
    description:
      "Write a function to find the digital root of a number (the recursive sum of its digits until a single-digit number is achieved).",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 942 }],
    buttonText: "Find Digital Root",
  },
  // problem--> 46
  {
    id: "mn-permutation-coefficient",
    title: "Permutation Coefficient",
    description:
      "Calculate the permutation coefficient P(n, k), which is the number of ways to choose an ordered set of k elements from a set of n elements.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "n (total items)", type: "number", defaultValue: 10 },
      {
        id: "k",
        label: "k (items to choose)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Calculate P(n,k)",
  },
  // problem--> 47
  {
    id: "mn-combination-coefficient",
    title: "Combination Coefficient (nCk)",
    description:
      "Calculate the combination coefficient C(n, k), the number of ways to choose an unordered set of k elements from a set of n elements.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "n (total items)", type: "number", defaultValue: 10 },
      {
        id: "k",
        label: "k (items to choose)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Calculate C(n,k)",
  },
  // problem--> 48
  {
    id: "mn-is-power-of-three",
    title: "Check for Power of Three",
    description:
      "Write a function to determine if a given integer is a power of three.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 27 }],
    buttonText: "Check",
  },
  // problem--> 49
  {
    id: "mn-is-power-of-four",
    title: "Check for Power of Four",
    description:
      "Write a function to determine if a given integer is a power of four.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 16 }],
    buttonText: "Check",
  },
  // problem--> 50
  {
    id: "mn-angle-between-clock-hands",
    title: "Angle Between Clock Hands",
    description:
      "Given a time in hours and minutes, calculate the smaller angle between the two hands of an analog clock.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "hours", label: "Hours (1-12)", type: "number", defaultValue: 3 },
      {
        id: "minutes",
        label: "Minutes (0-59)",
        type: "number",
        defaultValue: 30,
      },
    ],
    buttonText: "Calculate Angle",
  },
  // problem--> 51
  {
    id: "mn-catalan-numbers",
    title: "Catalan Numbers",
    description:
      "Write a function to compute the nth Catalan number. Catalan numbers appear in many counting problems.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Nth Catalan Number", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 52
  {
    id: "mn-trailing-zeroes-in-factorial",
    title: "Trailing Zeroes in Factorial",
    description:
      "Given an integer n, return the number of trailing zeroes in n!.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Number (n)", type: "number", defaultValue: 25 },
    ],
    buttonText: "Count Zeroes",
  },
  // problem--> 53
  {
    id: "mn-excel-column-number",
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
  // problem--> 54
  {
    id: "mn-excel-column-title",
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
  // problem--> 55
  {
    id: "mn-gray-code",
    title: "Gray Code Sequence",
    description:
      "The gray code is a binary numeral system where two successive values differ in only one bit. Given n, return any valid gray code sequence of length 2^n.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "n (number of bits)", type: "number", defaultValue: 3 },
    ],
    buttonText: "Generate Sequence",
  },
  // problem--> 56
  {
    id: "mn-plus-one",
    title: "Plus One",
    description:
      "Given a large integer represented as an array of digits, increment it by one.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "digits",
        label: "Digits Array",
        type: "text",
        defaultValue: "9,9,9",
      },
    ],
    buttonText: "Increment",
  },
  // problem--> 57
  {
    id: "mn-count-primes",
    title: "Count Primes",
    description:
      "Count the number of prime numbers less than a non-negative number, n.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "n",
        label: "Count primes less than n",
        type: "number",
        defaultValue: 10,
      },
    ],
    buttonText: "Count",
  },
  // problem--> 58
  {
    id: "mn-divide-two-integers",
    title: "Divide Two Integers",
    description:
      "Divide two integers without using multiplication, division, and mod operator. Handle overflow.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "dividend", label: "Dividend", type: "number", defaultValue: 10 },
      { id: "divisor", label: "Divisor", type: "number", defaultValue: 3 },
    ],
    buttonText: "Divide",
  },
  // problem--> 59
  {
    id: "mn-pow-x-n",
    title: "Pow(x, n)",
    description:
      "Implement `pow(x, n)`, which calculates x raised to the power n. Aim for an efficient O(log n) solution.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "x", label: "Base (x)", type: "number", defaultValue: 2.0 },
      { id: "n", label: "Exponent (n)", type: "number", defaultValue: 10 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 60
  {
    id: "mn-sqrt-x",
    title: "Sqrt(x)",
    description:
      "Compute and return the square root of a non-negative integer x, rounded down to the nearest integer, without using `Math.sqrt`.",
    category: "Math and Number Challenges",
    inputs: [{ id: "x", label: "Number (x)", type: "number", defaultValue: 8 }],
    buttonText: "Calculate Square Root",
  },
  // problem--> 61
  {
    id: "mn-perfect-number-check",
    title: "Check Perfect Number",
    description:
      "A perfect number is a positive integer that is equal to the sum of its proper positive divisors. Check if a number is perfect.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 28 }],
    buttonText: "Check",
  },
  // problem--> 62
  {
    id: "mn-add-digits-digital-root",
    title: "Add Digits (Digital Root)",
    description:
      "Given a non-negative integer, repeatedly add all its digits until the result has only one digit. Find the result without loops/recursion.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 38 }],
    buttonText: "Find Root",
  },
  // problem--> 63
  {
    id: "mn-missing-number-in-sequence",
    title: "Missing Number in Sequence",
    description:
      "Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,0,1" },
    ],
    buttonText: "Find Missing",
  },
  // problem--> 64
  {
    id: "mn-single-number",
    title: "Single Number",
    description:
      "Given a non-empty array of integers, every element appears twice except for one. Find that single one.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "4,1,2,1,2" },
    ],
    buttonText: "Find Single",
  },
  // problem--> 65
  {
    id: "mn-title-to-number",
    title: "Excel Sheet Column Number",
    description:
      "Given a column title as it appears in an Excel sheet, return its corresponding column number.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "title", label: "Column Title", type: "text", defaultValue: "AB" },
    ],
    buttonText: "Convert",
  },
  // problem--> 66
  {
    id: "mn-number-to-title",
    title: "Excel Sheet Column Title",
    description:
      "Given a positive integer, return its corresponding column title as it appears in an Excel sheet.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Column Number", type: "number", defaultValue: 28 },
    ],
    buttonText: "Convert",
  },
  // problem--> 67
  {
    id: "mn-fraction-to-recurring-decimal",
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
  // problem--> 68
  {
    id: "mn-string-to-integer-atoi",
    title: "String to Integer (atoi)",
    description:
      "Implement the `atoi` function, which converts a string to an integer, handling all edge cases.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "  -42 with words",
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 69
  {
    id: "mn-largest-number",
    title: "Largest Number",
    description:
      "Given a list of non-negative integers, arrange them such that they form the largest possible number.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,30,34,5,9" },
    ],
    buttonText: "Arrange",
  },
  // problem--> 70
  {
    id: "mn-product-of-array-except-self",
    title: "Product of Array Except Self",
    description:
      "Given an integer array, return an array such that the output at index i is the product of all the elements of the original array except the one at i.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,4" },
    ],
    buttonText: "Calculate Products",
  },
  // problem--> 71
  {
    id: "mn-valid-perfect-square",
    title: "Valid Perfect Square",
    description:
      "Given a positive integer num, write a function which returns True if num is a perfect square else False.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 16 }],
    buttonText: "Check",
  },
  // problem--> 72
  {
    id: "mn-nth-digit",
    title: "Nth Digit",
    description:
      "Given an integer n, find the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 11 }],
    buttonText: "Find Digit",
  },
  // problem--> 73
  {
    id: "mn-arranging-coins",
    title: "Arranging Coins",
    description:
      "You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. Given n, return the number of complete rows of the staircase you will build.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n coins", type: "number", defaultValue: 5 }],
    buttonText: "Calculate Rows",
  },
  // problem--> 74
  {
    id: "mn-water-and-jug-problem",
    title: "Water and Jug Problem",
    description:
      "You are given two jugs with capacities jug1Capacity and jug2Capacity liters. You have an infinite water supply. Determine if it is possible to measure exactly targetCapacity liters.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "jug1", label: "Jug 1 Capacity", type: "number", defaultValue: 3 },
      { id: "jug2", label: "Jug 2 Capacity", type: "number", defaultValue: 5 },
      {
        id: "target",
        label: "Target Capacity",
        type: "number",
        defaultValue: 4,
      },
    ],
    buttonText: "Check",
  },
  // problem--> 75
  {
    id: "mn-valid-triangle-number",
    title: "Valid Triangle Number",
    description:
      "Given an integer array, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "2,2,3,4" },
    ],
    buttonText: "Count Triangles",
  },
  // problem--> 76
  {
    id: "mn-super-pow",
    title: "Super Pow",
    description:
      "Calculate a^b mod 1337 where a is a positive integer and b is an extremely large positive integer given as an array.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "Base a", type: "number", defaultValue: 2 },
      {
        id: "b",
        label: "Exponent b (array)",
        type: "text",
        defaultValue: "1,0",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 77
  {
    id: "mn-sum-of-square-numbers",
    title: "Sum of Square Numbers",
    description:
      "Given a non-negative integer c, decide whether there're two integers a and b such that a^2 + b^2 = c.",
    category: "Math and Number Challenges",
    inputs: [{ id: "c", label: "Number c", type: "number", defaultValue: 5 }],
    buttonText: "Check",
  },
  // problem--> 78
  {
    id: "mn-complex-number-multiplication",
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
  // problem--> 79
  {
    id: "mn-factorial-trailing-zeroes",
    title: "Factorial Trailing Zeroes",
    description:
      "Given an integer n, return the number of trailing zeroes in n!.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 25 }],
    buttonText: "Count",
  },
  // problem--> 80
  {
    id: "mn-pascals-triangle",
    title: "Pascal's Triangle",
    description:
      "Given an integer numRows, return the first numRows of Pascal's triangle.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "numRows",
        label: "Number of Rows",
        type: "number",
        defaultValue: 5,
      },
    ],
    buttonText: "Generate",
  },
  // problem--> 81
  {
    id: "mn-smallest-good-base",
    title: "Smallest Good Base",
    description:
      "For an integer n, we call k>=2 a good base of n, if all digits of n in base k are 1. Given n, return the smallest good base of n in string format.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "n",
        label: "Number (as string)",
        type: "text",
        defaultValue: "13",
      },
    ],
    buttonText: "Find Base",
  },
  // problem--> 82
  {
    id: "mn-robot-bounded-in-circle",
    title: "Robot Bounded In Circle",
    description:
      "On an infinite plane, a robot starts at (0, 0) and faces north. Given a string of instructions ('G', 'L', 'R'), determine if the robot's path is bounded in a circle.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "instructions",
        label: "Instructions",
        type: "text",
        defaultValue: "GGLLGG",
      },
    ],
    buttonText: "Check Bound",
  },
  // problem--> 83
  {
    id: "mn-reaching-points",
    title: "Reaching Points",
    description:
      "A move consists of taking a point (x, y) and transforming it to either (x, x+y) or (x+y, y). Given a starting point (sx, sy) and a target point (tx, ty), return true if and only if a sequence of moves exists to transform the start to the target.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "sx", label: "Start X", type: "number", defaultValue: 1 },
      { id: "sy", label: "Start Y", type: "number", defaultValue: 1 },
      { id: "tx", label: "Target X", type: "number", defaultValue: 3 },
      { id: "ty", label: "Target Y", type: "number", defaultValue: 5 },
    ],
    buttonText: "Check Reachable",
  },
  // problem--> 84
  {
    id: "mn-max-points-on-a-line",
    title: "Max Points on a Line",
    description:
      "Given an array of points where points[i] = [xi, yi], return the maximum number of points that lie on the same straight line.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Points (JSON)",
        type: "textarea",
        defaultValue: "[[1,1],[2,2],[3,3]]",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 85
  {
    id: "mn-integer-break",
    title: "Integer Break",
    description:
      "Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 10 }],
    buttonText: "Maximize Product",
  },
  // problem--> 86
  {
    id: "mn-count-numbers-with-unique-digits",
    title: "Count Numbers with Unique Digits",
    description:
      "Given a non-negative integer n, count all numbers with unique digits, x, where 0 <= x < 10^n.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 2 }],
    buttonText: "Count",
  },
  // problem--> 87
  {
    id: "mn-bulb-switcher",
    title: "Bulb Switcher",
    description:
      "There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n bulbs", type: "number", defaultValue: 3 }],
    buttonText: "Count On Bulbs",
  },
  // problem--> 88
  {
    id: "mn-ugly-number-ii",
    title: "Ugly Number II",
    description:
      "Write a program to find the n-th ugly number. Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "n-th ugly number", type: "number", defaultValue: 10 },
    ],
    buttonText: "Find",
  },
  // problem--> 89
  {
    id: "mn-super-ugly-number",
    title: "Super Ugly Number",
    description:
      "Write a program to find the nth super ugly number. Super ugly numbers are positive numbers whose all prime factors are in the given prime list.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "n",
        label: "n-th super ugly number",
        type: "number",
        defaultValue: 12,
      },
      {
        id: "primes",
        label: "Primes (comma-separated)",
        type: "text",
        defaultValue: "2,7,13,19",
      },
    ],
    buttonText: "Find",
  },
  // problem--> 90
  {
    id: "mn-rectangle-area",
    title: "Rectangle Area",
    description:
      "Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "ax1", label: "Rect A x1", type: "number", defaultValue: -3 },
      { id: "ay1", label: "Rect A y1", type: "number", defaultValue: 0 },
      { id: "ax2", label: "Rect A x2", type: "number", defaultValue: 3 },
      { id: "ay2", label: "Rect A y2", type: "number", defaultValue: 4 },
      { id: "bx1", label: "Rect B x1", type: "number", defaultValue: 0 },
      { id: "by1", label: "Rect B y1", type: "number", defaultValue: -1 },
      { id: "bx2", label: "Rect B x2", type: "number", defaultValue: 9 },
      { id: "by2", label: "Rect B y2", type: "number", defaultValue: 2 },
    ],
    buttonText: "Calculate Area",
  },
  // problem--> 91
  {
    id: "mn-line-reflection",
    title: "Line Reflection",
    description:
      "Given n points on a 2D plane, find if there is such a line parallel to the y-axis that reflects the given points.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Points (JSON)",
        type: "textarea",
        defaultValue: "[[1,1],[-1,1]]",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 92
  {
    id: "mn-the-kth-factor-of-n",
    title: "The kth Factor of n",
    description:
      "Given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0. Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or -1 if n has less than k factors.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "n", type: "number", defaultValue: 12 },
      { id: "k", label: "k", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Factor",
  },
  // problem--> 93
  {
    id: "mn-mirror-reflection",
    title: "Mirror Reflection",
    description:
      "There is a special square room with mirrors on each of the four walls. Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2. Given the dimensions of the room and the path of a laser beam, find which receptor the beam meets first.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "p", label: "p (width)", type: "number", defaultValue: 2 },
      { id: "q", label: "q (height)", type: "number", defaultValue: 1 },
    ],
    buttonText: "Find Receptor",
  },
  // problem--> 94
  {
    id: "mn-erect-the-fence",
    title: "Erect the Fence",
    description:
      "You are given an array trees where trees[i] = [xi, yi] represents the location of a tree in a garden. You are asked to fence the entire garden using the minimum length of rope. Return the coordinates of trees that are exactly located on the fence perimeter.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "trees",
        label: "Tree coordinates (JSON)",
        type: "textarea",
        defaultValue: "[[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]",
      },
    ],
    buttonText: "Find Fence",
  },
  // problem--> 95
  {
    id: "mn-global-and-local-inversions",
    title: "Global and Local Inversions",
    description:
      "We have some permutation A of [0, 1, ..., N-1], where N is the length of A. A global inversion is a pair of indices (i, j) with i < j and A[i] > A[j]. A local inversion is an index i with 0 <= i < N-1 and A[i] > A[i+1]. Determine if the number of global inversions is equal to the number of local inversions.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "A", label: "Permutation A", type: "text", defaultValue: "1,0,2" },
    ],
    buttonText: "Check",
  },
  // problem--> 96
  {
    id: "mn-max-chunks-to-make-sorted",
    title: "Max Chunks To Make Sorted",
    description:
      "Given an array arr that is a permutation of [0, 1, ..., arr.length - 1], we split the array into some number of 'chunks' (partitions), and individually sort each chunk. After concatenating them, the result must be the sorted array. What is the most number of chunks we could have made?",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "4,3,2,1,0" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 97
  {
    id: "mn-chalkboard-xor-game",
    title: "Chalkboard XOR Game",
    description:
      "We are given non-negative integers in an array nums. Alice and Bob take turns playing a game. Alice starts. On each turn, a player chooses a number and removes it from the array. The player who chooses a number that makes the bitwise XOR of all remaining numbers equal to 0 wins. Determine if Alice can win.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Numbers", type: "text", defaultValue: "1,1,2" },
    ],
    buttonText: "Can Alice Win?",
  },
  // problem--> 98
  {
    id: "mn-reach-a-number",
    title: "Reach a Number",
    description:
      "You are standing at position 0 on an infinite number line. There is a goal at position target. On each move, you can either go left or right. During the n-th move (starting from n = 1), you take n steps. Return the minimum number of steps required to reach the destination.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "target", label: "Target", type: "number", defaultValue: 2 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 99
  {
    id: "mn-random-point-in-non-overlapping-rectangles",
    title: "Random Point in Non-overlapping Rectangles",
    description:
      "Given a list of non-overlapping axis-aligned rectangles, write a function which randomly and uniformly picks an integer point in the space covered by the rectangles.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 100
  {
    id: "mn-random-pick-with-weight",
    title: "Random Pick with Weight",
    description:
      "You are given an array of positive integers w where w[i] describes the weight of ith index (0-indexed). Write a function which will randomly pick an index in proportion to its weight.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 101
  {
    id: "mn-sum-of-two-integers-bitwise",
    title: "Sum of Two Integers (Bitwise)",
    description:
      "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "a", label: "Number a", type: "number", defaultValue: 1 },
      { id: "b", label: "Number b", type: "number", defaultValue: 2 },
    ],
    buttonText: "Sum with Bitwise",
  },
  // problem--> 102
  {
    id: "mn-next-greater-element-iii",
    title: "Next Greater Element III",
    description:
      "Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "Number n", type: "number", defaultValue: 12 }],
    buttonText: "Find Next",
  },
  // problem--> 103
  {
    id: "mn-number-of-boomerangs",
    title: "Number of Boomerangs",
    description:
      "You are given n points in the plane that are all distinct. A boomerang is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k. Find the number of boomerangs.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Points (JSON)",
        type: "textarea",
        defaultValue: "[[0,0],[1,0],[2,0]]",
      },
    ],
    buttonText: "Count Boomerangs",
  },
  // problem--> 104
  {
    id: "mn-max-area-of-island",
    title: "Max Area of Island",
    description:
      "Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's connected 4-directionally. Find the maximum area of an island in the given 2D array.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "grid",
        label: "Grid (JSON)",
        type: "textarea",
        defaultValue: "[[0,0,1,0,0],[0,1,1,0,0],[0,0,0,1,1],[1,0,0,1,1]]",
      },
    ],
    buttonText: "Find Max Area",
  },
  // problem--> 105
  {
    id: "mn-reverse-bits",
    title: "Reverse Bits",
    description: "Reverse bits of a given 32-bit unsigned integer.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Number n", type: "number", defaultValue: 43261596 },
    ],
    buttonText: "Reverse",
  },
  // problem--> 106
  {
    id: "mn-rectangle-overlap",
    title: "Rectangle Overlap",
    description:
      "An axis-aligned rectangle is represented by its bottom-left and top-right coordinates. Given two rectangles, return true if they overlap, and false otherwise.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "rec1",
        label: "Rect 1 [x1,y1,x2,y2]",
        type: "text",
        defaultValue: "0,0,2,2",
      },
      {
        id: "rec2",
        label: "Rect 2 [x1,y1,x2,y2]",
        type: "text",
        defaultValue: "1,1,3,3",
      },
    ],
    buttonText: "Check Overlap",
  },
  // problem--> 107
  {
    id: "mn-minimum-moves-to-equal-array-elements",
    title: "Minimum Moves to Equal Array Elements",
    description:
      "Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 108
  {
    id: "mn-minimum-moves-to-equal-array-elements-ii",
    title: "Minimum Moves to Equal Array Elements II",
    description:
      "Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing or decrementing a single element by 1.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 109
  {
    id: "mn-construct-the-rectangle",
    title: "Construct the Rectangle",
    description:
      "For a web developer, you need to design a rectangular web page, whose area equals to the given integer area. The width W should not be larger than the length L. Your task is to find the dimensions [L, W] with the minimum possible difference between L and W.",
    category: "Math and Number Challenges",
    inputs: [{ id: "area", label: "Area", type: "number", defaultValue: 4 }],
    buttonText: "Construct",
  },
  // problem--> 110
  {
    id: "mn-largest-triangle-area",
    title: "Largest Triangle Area",
    description:
      "You have a list of points in a 2D plane. Return the area of the largest triangle that can be formed by any 3 of the points.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Points (JSON)",
        type: "textarea",
        defaultValue: "[[0,0],[0,1],[1,0],[0,2],[2,0]]",
      },
    ],
    buttonText: "Calculate Area",
  },
  // problem--> 111
  {
    id: "mn-powerful-integers",
    title: "Powerful Integers",
    description:
      "Given three integers x, y, and bound, return a list of all the powerful integers that have a value less than or equal to bound. An integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "x", label: "x", type: "number", defaultValue: 2 },
      { id: "y", label: "y", type: "number", defaultValue: 3 },
      { id: "bound", label: "bound", type: "number", defaultValue: 10 },
    ],
    buttonText: "Find Powerful Integers",
  },
  // problem--> 112
  {
    id: "mn-di-string-match",
    title: "DI String Match",
    description:
      "A permutation perm of [0, 1, ..., n] is called a DI sequence if for all i, if s[i] == 'I', then perm[i] < perm[i+1], and if s[i] == 'D', then perm[i] > perm[i+1]. Given a string s of 'I's and 'D's, return any permutation of [0, 1, ..., n] that matches s.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "s", label: "DI String", type: "text", defaultValue: "IDID" },
    ],
    buttonText: "Match",
  },
  // problem--> 113
  {
    id: "mn-self-dividing-numbers",
    title: "Self Dividing Numbers",
    description:
      "A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0. Given a lower and upper number bound, output a list of every possible self dividing number in that range.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "left", label: "Left Bound", type: "number", defaultValue: 1 },
      { id: "right", label: "Right Bound", type: "number", defaultValue: 22 },
    ],
    buttonText: "Find Numbers",
  },
  // problem--> 114
  {
    id: "mn-prime-number-of-set-bits-in-binary-representation",
    title: "Prime Number of Set Bits in Binary Representation",
    description:
      "Given two integers left and right, return the count of numbers in the inclusive range [left, right] that have a prime number of set bits in their binary representation.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "left", label: "Left Bound", type: "number", defaultValue: 6 },
      { id: "right", label: "Right Bound", type: "number", defaultValue: 10 },
    ],
    buttonText: "Count",
  },
  // problem--> 115
  {
    id: "mn-rotate-digits",
    title: "Rotate Digits",
    description:
      "An integer is a good number if each of its digits is rotated 180 degrees to form a valid and different number. Digits 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other. Digits 3, 4, and 7 are invalid. Given an integer n, return the number of good numbers in the range [1, n].",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 10 }],
    buttonText: "Count Good Numbers",
  },
  // problem--> 116
  {
    id: "mn-escape-the-ghosts",
    title: "Escape The Ghosts",
    description:
      "You are playing a simplified Pac-Man game. You are represented by a character Pac-Man and there are ghosts on the grid. Return true if and only if you can escape (reach the target) before any ghost reaches the target.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "ghosts",
        label: "Ghosts (JSON [[x,y],...])",
        type: "textarea",
        defaultValue: "[[1,0],[0,3]]",
      },
      {
        id: "target",
        label: "Target (JSON [x,y])",
        type: "textarea",
        defaultValue: "[0,1]",
      },
    ],
    buttonText: "Can Escape?",
  },
  // problem--> 117
  {
    id: "mn-number-of-lines-to-write-string",
    title: "Number of Lines To Write String",
    description:
      "You are given a string s of lowercase English letters and an array widths where widths[i] is the width of the ith letter. You want to write s on a number of lines, where each line is at most 100 pixels wide. Return an array of two integers, [number of lines, width of last line].",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "s",
        label: "String",
        type: "text",
        defaultValue: "abcdefghijklmnopqrstuvwxyz",
      },
      {
        id: "widths",
        label: "Widths Array",
        type: "text",
        defaultValue:
          "4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 118
  {
    id: "mn-unique-morse-code-words",
    title: "Unique Morse Code Words",
    description:
      "Given an array of words, each word can be written as a concatenation of the Morse code of each letter. Return the number of different transformations among all words in the given array.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "gin,zen,gig,msg",
      },
    ],
    buttonText: "Count",
  },
  // problem--> 119
  {
    id: "mn-projection-area-of-3d-shapes",
    title: "Projection Area of 3D Shapes",
    description:
      "You are given an n x n grid where we have placed some 1 x 1 x 1 cubes. The value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j). We view the projection of these cubes onto the xy, yz, and zx planes. Return the total area of all three projections.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "grid",
        label: "Grid (JSON)",
        type: "textarea",
        defaultValue: "[[1,2],[3,4]]",
      },
    ],
    buttonText: "Calculate Area",
  },
  // problem--> 120
  {
    id: "mn-x-of-a-kind-in-a-deck-of-cards",
    title: "X of a Kind in a Deck of Cards",
    description:
      "In a deck of cards, each card has an integer written on it. Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where each group has size X, and all cards in each group have the same integer.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "deck",
        label: "Deck of cards (comma-separated)",
        type: "text",
        defaultValue: "1,2,3,4,4,3,2,1",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 121
  {
    id: "mn-geometry-circle-area",
    title: "Area of a Circle",
    description:
      "Write a function to calculate the area of a circle given its radius. Formula: π * r^2.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate Area",
  },
  // problem--> 122
  {
    id: "mn-geometry-circle-circumference",
    title: "Circumference of a Circle",
    description:
      "Write a function to calculate the circumference of a circle given its radius. Formula: 2 * π * r.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate Circumference",
  },
  // problem--> 123
  {
    id: "mn-number-of-1-bits",
    title: "Number of 1 Bits",
    description:
      "Write a function that takes an integer and returns the number of '1' bits in its binary representation.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "Number", type: "number", defaultValue: 11 }],
    buttonText: "Count",
  },
  // problem--> 124
  {
    id: "mn-hamming-distance",
    title: "Hamming Distance",
    description:
      "The Hamming distance between two integers is the number of positions at which the corresponding bits are different. Given two integers, calculate the Hamming distance.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "x", label: "x", type: "number", defaultValue: 1 },
      { id: "y", label: "y", type: "number", defaultValue: 4 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 125
  {
    id: "mn-total-hamming-distance",
    title: "Total Hamming Distance",
    description:
      "The Hamming distance between two integers is the number of positions at which the corresponding bits are different. Given an integer array, return the sum of Hamming distances between all the pairs of the integers.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "4,14,2" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 126
  {
    id: "mn-single-number-ii",
    title: "Single Number II",
    description:
      "Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "2,2,3,2" },
    ],
    buttonText: "Find",
  },
  // problem--> 127
  {
    id: "mn-single-number-iii",
    title: "Single Number III",
    description:
      "Given an integer array, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,1,3,2,5" },
    ],
    buttonText: "Find",
  },
  // problem--> 128
  {
    id: "mn-bitwise-complement",
    title: "Complement of Base 10 Integer",
    description:
      "The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation. Given an integer n, return its complement.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Calculate",
  },
  // problem--> 129
  {
    id: "mn-number-complement",
    title: "Number Complement",
    description:
      "Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Find Complement",
  },
  // problem--> 130
  {
    id: "mn-convert-a-number-to-hexadecimal",
    title: "Convert a Number to Hexadecimal",
    description:
      "Given an integer, write an algorithm to convert it to hexadecimal. For negative integers, two’s complement method is used.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 26 }],
    buttonText: "Convert",
  },
  // problem--> 131
  {
    id: "mn-base-7",
    title: "Base 7",
    description: "Given an integer, return its base 7 string representation.",
    category: "Math and Number Challenges",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 100 }],
    buttonText: "Convert",
  },
  // problem--> 132
  {
    id: "mn-add-to-array-form-of-integer",
    title: "Add to Array-Form of Integer",
    description:
      "The array-form of an integer is an array representing its digits in left to right order. Given the array-form of an integer and an integer k, return the array-form of the integer num + k.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "arr", label: "Array-Form", type: "text", defaultValue: "1,2,0,0" },
      { id: "k", label: "k", type: "number", defaultValue: 34 },
    ],
    buttonText: "Add",
  },
  // problem--> 133
  {
    id: "mn-convert-to-base-neg-2",
    title: "Convert to Base -2",
    description:
      "Given an integer n, return a string that represents its base -2 representation.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "Number", type: "number", defaultValue: 2 }],
    buttonText: "Convert",
  },
  // problem--> 134
  {
    id: "mn-poor-pigs",
    title: "Poor Pigs",
    description:
      "There are buckets, one of which contains poison and the rest are filled with water. You have minutesToTest minutes to find out which bucket is poisonous. You can feed a certain number of pigs with the water from these buckets, and if a pig drinks poison it will die within minutesToDie minutes. Find the minimum number of pigs you need to figure out which bucket is poisonous within the given time.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "buckets", label: "Buckets", type: "number", defaultValue: 1000 },
      {
        id: "minutesToDie",
        label: "minutesToDie",
        type: "number",
        defaultValue: 15,
      },
      {
        id: "minutesToTest",
        label: "minutesToTest",
        type: "number",
        defaultValue: 60,
      },
    ],
    buttonText: "Calculate Pigs",
  },
  // problem--> 135
  {
    id: "mn-sequential-digits",
    title: "Sequential Digits",
    description:
      "An integer has sequential digits if and only if each digit in the number is one more than the previous digit. Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "low", label: "Low", type: "number", defaultValue: 100 },
      { id: "high", label: "High", type: "number", defaultValue: 300 },
    ],
    buttonText: "Find",
  },
  // problem--> 136
  {
    id: "mn-permutation-sequence",
    title: "Permutation Sequence",
    description:
      "The set [1, 2, 3, ..., n] contains a total of n! unique permutations. By listing and labeling all of the permutations in order, find the kth permutation sequence.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "n", type: "number", defaultValue: 3 },
      { id: "k", label: "k", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find",
  },
  // problem--> 137
  {
    id: "mn-broken-calculator",
    title: "Broken Calculator",
    description:
      "On a broken calculator that has a number showing, you can perform two operations: Double or Decrement. Given a startValue and a target, return the minimum number of operations required to display the target number.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "startValue",
        label: "Start Value",
        type: "number",
        defaultValue: 2,
      },
      { id: "target", label: "Target", type: "number", defaultValue: 3 },
    ],
    buttonText: "Calculate",
  },
  // problem--> 138
  {
    id: "mn-valid-square",
    title: "Valid Square",
    description:
      "Given the coordinates of four points in 2D space, return whether the four points could construct a square.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "p1", label: "Point 1 [x,y]", type: "text", defaultValue: "0,0" },
      { id: "p2", label: "Point 2 [x,y]", type: "text", defaultValue: "1,1" },
      { id: "p3", label: "Point 3 [x,y]", type: "text", defaultValue: "1,0" },
      { id: "p4", label: "Point 4 [x,y]", type: "text", defaultValue: "0,1" },
    ],
    buttonText: "Check",
  },
  // problem--> 139
  {
    id: "mn-integer-to-english-words",
    title: "Integer to English Words",
    description:
      "Convert a non-negative integer to its English words representation.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Convert",
  },
  // problem--> 140
  {
    id: "mn-basic-calculator",
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
  // problem--> 141
  {
    id: "mn-number-of-digit-one",
    title: "Number of Digit One",
    description:
      "Given an integer n, count the total number of times the digit 1 appears in all non-negative integers less than or equal to n.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 13 }],
    buttonText: "Count",
  },
  // problem--> 142
  {
    id: "mn-max-value-of-equation",
    title: "Max Value of Equation",
    description:
      "You are given an array points and an integer k. The equation is yi + yj + |xi - xj|. Find the maximum value of the equation for two distinct points (xi, yi) and (xj, yj) in the array, where |xi - xj| <= k.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Points (JSON)",
        type: "textarea",
        defaultValue: "[[1,3],[2,0],[5,10],[6,-10]]",
      },
      { id: "k", label: "k", type: "number", defaultValue: 1 },
    ],
    buttonText: "Calculate Max Value",
  },
  // problem--> 143
  {
    id: "mn-largest-perimeter-triangle",
    title: "Largest Perimeter Triangle",
    description:
      "Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "nums",
        label: "Side lengths",
        type: "text",
        defaultValue: "2,1,2",
      },
    ],
    buttonText: "Find Perimeter",
  },
  // problem--> 144
  {
    id: "mn-consecutive-numbers-sum",
    title: "Consecutive Numbers Sum",
    description:
      "Given an integer n, return the number of ways you can write n as a sum of consecutive positive integers.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n", type: "number", defaultValue: 15 }],
    buttonText: "Count Ways",
  },
  // problem--> 145
  {
    id: "mn-valid-boomberang",
    title: "Valid Boomerang",
    description:
      "Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang. A boomerang is a set of three points that are all distinct and not in a straight line.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "points",
        label: "Points (JSON)",
        type: "textarea",
        defaultValue: "[[1,1],[2,3],[3,2]]",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 146
  {
    id: "mn-day-of-the-year",
    title: "Day of the Year",
    description:
      "Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "date",
        label: "Date (YYYY-MM-DD)",
        type: "text",
        defaultValue: "2019-02-10",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 147
  {
    id: "mn-min-cost-climbing-stairs",
    title: "Min Cost Climbing Stairs",
    description:
      "You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the step with index 0, or the step with index 1. Return the minimum cost to reach the top of the floor.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "cost",
        label: "Cost Array",
        type: "text",
        defaultValue: "10,15,20",
      },
    ],
    buttonText: "Calculate Min Cost",
  },
  // problem--> 148
  {
    id: "mn-largest-time-for-given-digits",
    title: "Largest Time for Given Digits",
    description:
      "Given an array of 4 digits, return the largest 24 hour time that can be made. The smallest 24 hour time is 00:00, and the largest is 23:59. If no valid time can be made, return an empty string.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "arr",
        label: "Digits Array",
        type: "text",
        defaultValue: "1,2,3,4",
      },
    ],
    buttonText: "Find Time",
  },
  // problem--> 149
  {
    id: "mn-robot-return-to-origin",
    title: "Robot Return to Origin",
    description:
      "There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "moves",
        label: "Moves (U,D,L,R)",
        type: "text",
        defaultValue: "UD",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 150
  {
    id: "mn-number-of-good-pairs",
    title: "Number of Good Pairs",
    description:
      "Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Array", type: "text", defaultValue: "1,2,3,1,1,3" },
    ],
    buttonText: "Count Pairs",
  },
  // problem--> 151
  {
    id: "mn-kids-with-greatest-candies",
    title: "Kids With the Greatest Number of Candies",
    description:
      "Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has. For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "candies",
        label: "Candies Array",
        type: "text",
        defaultValue: "2,3,5,1,3",
      },
      {
        id: "extraCandies",
        label: "Extra Candies",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Check",
  },
  // problem--> 152
  {
    id: "mn-count-odd-numbers-in-interval",
    title: "Count Odd Numbers in an Interval Range",
    description:
      "Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).",
    category: "Math and Number Challenges",
    inputs: [
      { id: "low", label: "Low", type: "number", defaultValue: 3 },
      { id: "high", label: "High", type: "number", defaultValue: 7 },
    ],
    buttonText: "Count",
  },
  // problem--> 153
  {
    id: "mn-matrix-diagonal-sum",
    title: "Matrix Diagonal Sum",
    description:
      "Given a square matrix mat, return the sum of the matrix diagonals.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "mat",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Sum",
  },
  // problem--> 154
  {
    id: "mn-average-salary-excluding-min-max",
    title: "Average Salary Excluding Min and Max",
    description:
      "Given an array of unique integers salary where salary[i] is the salary of the ith employee. Return the average salary of the employees excluding the minimum and maximum salary.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "salary",
        label: "Salary Array",
        type: "text",
        defaultValue: "4000,3000,1000,2000",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 155
  {
    id: "mn-subtract-product-and-sum",
    title: "Subtract the Product and Sum of Digits",
    description:
      "Given an integer number n, return the difference between the product of its digits and the sum of its digits.",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "Number", type: "number", defaultValue: 234 }],
    buttonText: "Calculate",
  },
  // problem--> 156
  {
    id: "mn-check-if-straight-line",
    title: "Check If It Is a Straight Line",
    description:
      "You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "coordinates",
        label: "Coordinates (JSON)",
        type: "textarea",
        defaultValue: "[[1,2],[2,3],[3,4],[4,5]]",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 157
  {
    id: "mn-find-highest-altitude",
    title: "Find the Highest Altitude",
    description:
      "There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1. Return the highest altitude of a point.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "gain",
        label: "Gain Array",
        type: "text",
        defaultValue: "-5,1,5,0,-7",
      },
    ],
    buttonText: "Find Highest",
  },
  // problem--> 158
  {
    id: "mn-richest-customer-wealth",
    title: "Richest Customer Wealth",
    description:
      "You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "accounts",
        label: "Accounts (JSON)",
        type: "textarea",
        defaultValue: "[[1,5],[7,3],[3,5]]",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 159
  {
    id: "mn-running-sum-of-1d-array",
    title: "Running Sum of 1d Array",
    description:
      "Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Array", type: "text", defaultValue: "1,2,3,4" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 160
  {
    id: "mn-shuffle-the-array",
    title: "Shuffle the Array",
    description:
      "Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Array", type: "text", defaultValue: "2,5,1,3,4,7" },
    ],
    buttonText: "Shuffle",
  },
  // problem--> 161
  {
    id: "mn-nim-game",
    title: "Nim Game",
    description:
      "You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to move. Write a function to determine whether you can win the game given the number of stones in the heap.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "n", label: "Number of Stones", type: "number", defaultValue: 4 },
    ],
    buttonText: "Can Win?",
  },
  // problem--> 162
  {
    id: "mn-add-strings",
    title: "Add Strings",
    description:
      "Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "num1", label: "Number 1", type: "text", defaultValue: "123" },
      { id: "num2", label: "Number 2", type: "text", defaultValue: "456" },
    ],
    buttonText: "Add",
  },
  // problem--> 163
  {
    id: "mn-climbing-stairs",
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    category: "Math and Number Challenges",
    inputs: [{ id: "n", label: "n steps", type: "number", defaultValue: 3 }],
    buttonText: "Count Ways",
  },
  // problem--> 164
  {
    id: "mn-maximum-product-subarray",
    title: "Maximum Product Subarray",
    description:
      "Given an integer array, find the contiguous subarray within an array (containing at least one number) which has the largest product.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Array", type: "text", defaultValue: "2,3,-2,4" },
    ],
    buttonText: "Find Max Product",
  },
  // problem--> 165
  {
    id: "mn-find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    description:
      "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Find the minimum element of this array.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Array", type: "text", defaultValue: "3,4,5,1,2" },
    ],
    buttonText: "Find Minimum",
  },
  // problem--> 166
  {
    id: "mn-container-with-most-water",
    title: "Container With Most Water",
    description:
      "Given n non-negative integers where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "heights",
        label: "Heights Array",
        type: "text",
        defaultValue: "1,8,6,2,5,4,8,3,7",
      },
    ],
    buttonText: "Find Max Area",
  },
  // problem--> 167
  {
    id: "mn-find-peak-element",
    title: "Find Peak Element",
    description:
      "A peak element is an element that is strictly greater than its neighbors. Given an integer array, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "nums",
        label: "Array",
        type: "text",
        defaultValue: "1,2,1,3,5,6,4",
      },
    ],
    buttonText: "Find Peak",
  },
  // problem--> 168
  {
    id: "mn-majority-element",
    title: "Majority Element",
    description:
      "Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "nums",
        label: "Array",
        type: "text",
        defaultValue: "2,2,1,1,1,2,2",
      },
    ],
    buttonText: "Find",
  },
  // problem--> 169
  {
    id: "mn-kth-largest-element-in-array",
    title: "Kth Largest Element in an Array",
    description:
      "Given an integer array and an integer k, return the kth largest element in the array.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Array", type: "text", defaultValue: "3,2,1,5,6,4" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find",
  },
  // problem--> 170
  {
    id: "mn-maximum-subarray",
    title: "Maximum Subarray",
    description:
      "Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "nums",
        label: "Array",
        type: "text",
        defaultValue: "-2,1,-3,4,-1,2,1,-5,4",
      },
    ],
    buttonText: "Find Max Sum",
  },
  // problem--> 171
  {
    id: "mn-merge-sorted-array",
    title: "Merge Sorted Array",
    description:
      "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge them into a single array sorted in non-decreasing order.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "nums1",
        label: "Nums1 [with space]",
        type: "text",
        defaultValue: "1,2,3,0,0,0",
      },
      { id: "m", label: "m", type: "number", defaultValue: 3 },
      { id: "nums2", label: "Nums2", type: "text", defaultValue: "2,5,6" },
      { id: "n", label: "n", type: "number", defaultValue: 3 },
    ],
    buttonText: "Merge",
  },
  // problem--> 172
  {
    id: "mn-remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    description:
      "Given an integer array sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "nums",
        label: "Sorted Array",
        type: "text",
        defaultValue: "0,0,1,1,1,2,2",
      },
    ],
    buttonText: "Remove Duplicates",
  },
  // problem--> 173
  {
    id: "mn-remove-element",
    title: "Remove Element",
    description:
      "Given an integer array and an integer val, remove all occurrences of val in nums in-place. Return the number of elements in nums which are not equal to val.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Array", type: "text", defaultValue: "3,2,2,3" },
      { id: "val", label: "Value to Remove", type: "number", defaultValue: 3 },
    ],
    buttonText: "Remove",
  },
  // problem--> 174
  {
    id: "mn-search-insert-position",
    title: "Search Insert Position",
    description:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "nums",
        label: "Sorted Array",
        type: "text",
        defaultValue: "1,3,5,6",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 5 },
    ],
    buttonText: "Find",
  },
  // problem--> 175
  {
    id: "mn-best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "prices",
        label: "Prices Array",
        type: "text",
        defaultValue: "7,1,5,3,6,4",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 176
  {
    id: "mn-rotate-image",
    title: "Rotate Image",
    description:
      "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
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
  // problem--> 177
  {
    id: "mn-set-matrix-zeroes",
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
  // problem--> 178
  {
    id: "mn-spiral-matrix",
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
  // problem--> 179
  {
    id: "mn-search-2d-matrix",
    title: "Search a 2D Matrix",
    description:
      "Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 3 },
    ],
    buttonText: "Search",
  },
  // problem--> 180
  {
    id: "mn-game-of-life",
    title: "Game of Life",
    description:
      "According to Wikipedia's article: 'The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.' Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules. Compute the next state.",
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
  // problem--> 181
  {
    id: "mn-coin-change",
    title: "Coin Change",
    description:
      "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.",
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
  // problem--> 182
  {
    id: "mn-longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    description:
      "Given an integer array, return the length of the longest strictly increasing subsequence.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "nums",
        label: "Array",
        type: "text",
        defaultValue: "10,9,2,5,3,7,101,18",
      },
    ],
    buttonText: "Find Length",
  },
  // problem--> 183
  {
    id: "mn-combination-sum-iv",
    title: "Combination Sum IV",
    description:
      "Given an array of distinct integers and a target integer, return the number of possible combinations that add up to the target. Combinations are different if the order of the numbers is different.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Numbers", type: "text", defaultValue: "1,2,3" },
      { id: "target", label: "Target", type: "number", defaultValue: 4 },
    ],
    buttonText: "Count Combinations",
  },
  // problem--> 184
  {
    id: "mn-partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    description:
      "Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "nums", label: "Array", type: "text", defaultValue: "1,5,11,5" },
    ],
    buttonText: "Check Partition",
  },
  // problem--> 185
  {
    id: "mn-unique-paths",
    title: "Unique Paths",
    description:
      "A robot is located at the top-left corner of an m x n grid. The robot can only move either down or right. How many possible unique paths are there to the bottom-right corner?",
    category: "Math and Number Challenges",
    inputs: [
      { id: "m", label: "Rows (m)", type: "number", defaultValue: 3 },
      { id: "n", label: "Columns (n)", type: "number", defaultValue: 7 },
    ],
    buttonText: "Count Paths",
  },
  // problem--> 186
  {
    id: "mn-minimum-path-sum",
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
    buttonText: "Find Min Sum",
  },
  // problem--> 187
  {
    id: "mn-number-of-islands",
    title: "Number of Islands",
    description:
      "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "grid",
        label: "Grid (JSON)",
        type: "textarea",
        defaultValue:
          "[['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]",
      },
    ],
    buttonText: "Count Islands",
  },
  // problem--> 188
  {
    id: "mn-basic-calculator-ii",
    title: "Basic Calculator II",
    description:
      "Implement a basic calculator to evaluate an expression string containing `+`, `-`, `*`, `/` and non-negative integers. Handle operator precedence.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "s", label: "Expression", type: "text", defaultValue: "3+2*2" },
    ],
    buttonText: "Calculate",
  },
  // problem--> 189
  {
    id: "mn-encode-decode-tinyurl",
    title: "Encode and Decode TinyURL",
    description:
      "Design a service like TinyURL that can encode a long URL to a short one and decode it back.",
    category: "Math and Number Challenges",
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
  // problem--> 190
  {
    id: "mn-meeting-rooms-ii",
    title: "Meeting Rooms II",
    description:
      "Given an array of meeting time intervals, find the minimum number of conference rooms required.",
    category: "Math and Number Challenges",
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
  // problem--> 191
  {
    id: "mn-serialize-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    description:
      "Design an algorithm to serialize a binary tree to a string and deserialize the string back to the tree.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 192
  {
    id: "mn-insert-delete-getrandom-o1",
    title: "Insert Delete GetRandom O(1)",
    description:
      "Design a data structure that supports insert, remove, and getRandom in average O(1) time.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 193
  {
    id: "mn-regular-expression-matching",
    title: "Regular Expression Matching",
    description:
      "Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.",
    category: "Math and Number Challenges",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "aab" },
      { id: "p", label: "Pattern", type: "text", defaultValue: "c*a*b" },
    ],
    buttonText: "Match",
  },
  // problem--> 194
  {
    id: "mn-largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    description:
      "Given an array of integers representing the histogram's bar height, find the area of the largest rectangle in the histogram.",
    category: "Math and Number Challenges",
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
  // problem--> 195
  {
    id: "mn-maximal-rectangle",
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
          "[['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]",
      },
    ],
    buttonText: "Find Area",
  },
  // problem--> 196
  {
    id: "mn-basic-calculator-iii",
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
  // problem--> 197
  {
    id: "mn-sliding-window-median",
    title: "Sliding Window Median",
    description:
      "The median is the middle value in an ordered integer list. Find the median of all windows of size k as the window slides from left to right.",
    category: "Math and Number Challenges",
    inputs: [],
    buttonText: "Show Concept",
  },
  // problem--> 198
  {
    id: "mn-best-time-to-buy-and-sell-stock-iii",
    title: "Best Time to Buy and Sell Stock III",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve. You may complete at most two transactions.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "prices",
        label: "Prices Array",
        type: "text",
        defaultValue: "3,3,5,0,0,3,1,4",
      },
    ],
    buttonText: "Calculate Profit",
  },
  // problem--> 199
  {
    id: "mn-candy",
    title: "Candy",
    description:
      "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "ratings",
        label: "Ratings Array",
        type: "text",
        defaultValue: "1,0,2",
      },
    ],
    buttonText: "Calculate",
  },
  // problem--> 200
  {
    id: "mn-trapping-rain-water-ii",
    title: "Trapping Rain Water II",
    description:
      "Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.",
    category: "Math and Number Challenges",
    inputs: [
      {
        id: "heightMap",
        label: "Height Map (JSON)",
        type: "textarea",
        defaultValue: "[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]",
      },
    ],
    buttonText: "Calculate",
  },
];
