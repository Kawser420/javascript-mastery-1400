import { Problem } from "../types";

export const problems: Problem[] = [
  // =================================================================================================
  // BEGINNER (50+) Problem
  // =================================================================================================
  {
    id: "sum-two-numbers",
    title: "Sum Two Numbers",
    description:
      "Write a function that takes two numbers as input and returns their sum.",
    category: "Beginner",
    inputs: [
      {
        id: "num1",
        label: "First Number",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: 5,
      },
      {
        id: "num2",
        label: "Second Number",
        type: "number",
        placeholder: "Enter another number",
        defaultValue: 10,
      },
    ],
    buttonText: "Calculate Sum",
  },
  {
    id: "reverse-string",
    title: "Reverse a String",
    description:
      "Write a function that takes a string and returns a new string with the characters in reverse order.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "Enter text to reverse",
        defaultValue: "hello world",
      },
    ],
    buttonText: "Reverse It",
  },
  {
    id: "simple-string-concatenation",
    title: "Concatenate Two Strings",
    description:
      "Write a function that takes two strings and joins them together.",
    category: "Beginner",
    inputs: [
      {
        id: "str1",
        label: "First String",
        type: "text",
        placeholder: "Enter first word",
        defaultValue: "Java",
      },
      {
        id: "str2",
        label: "Second String",
        type: "text",
        placeholder: "Enter second word",
        defaultValue: "Script",
      },
    ],
    buttonText: "Concatenate",
  },
  {
    id: "get-string-length",
    title: "Get String Length",
    description:
      "Write a function that returns the number of characters in a given string.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "Enter a string",
        defaultValue: "Supercalifragilisticexpialidocious",
      },
    ],
    buttonText: "Count Length",
  },
  {
    id: "check-is-even",
    title: "Check if Number is Even",
    description:
      "Write a function that takes a number and returns true if it is even, and false otherwise.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: 8,
      },
    ],
    buttonText: "Check Even/Odd",
  },
  {
    id: "simple-multiplication",
    title: "Multiply Two Numbers",
    description:
      "Write a function that takes two numbers and returns their product.",
    category: "Beginner",
    inputs: [
      {
        id: "num1",
        label: "First Number",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: 7,
      },
      {
        id: "num2",
        label: "Second Number",
        type: "number",
        placeholder: "Enter another number",
        defaultValue: 6,
      },
    ],
    buttonText: "Multiply",
  },
  {
    id: "convert-to-uppercase",
    title: "Convert to Uppercase",
    description: "Write a function that converts a given string to uppercase.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "Enter a string",
        defaultValue: "make me big",
      },
    ],
    buttonText: "Uppercase",
  },
  {
    id: "convert-to-lowercase",
    title: "Convert to Lowercase",
    description: "Write a function that converts a given string to lowercase.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "Enter a string",
        defaultValue: "MAKE ME SMALL",
      },
    ],
    buttonText: "Lowercase",
  },
  {
    id: "get-first-element-of-array",
    title: "Get First Element of Array",
    description:
      "Write a function that takes an array (as a comma-separated string) and returns its first element.",
    category: "Beginner",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "e.g., apple, banana, cherry",
        defaultValue: "apple, banana, cherry",
      },
    ],
    buttonText: "Get First",
  },
  {
    id: "get-last-element-of-array",
    title: "Get Last Element of Array",
    description:
      "Write a function that takes an array (as a comma-separated string) and returns its last element.",
    category: "Beginner",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "e.g., 10, 20, 30",
        defaultValue: "10, 20, 30",
      },
    ],
    buttonText: "Get Last",
  },
  {
    id: "check-boolean",
    title: "Check Boolean Value",
    description:
      "Write a function that checks if a value is a boolean true or false.",
    category: "Beginner",
    inputs: [
      {
        id: "val",
        label: "Value",
        type: "text",
        placeholder: "Enter true or false",
        defaultValue: "true",
      },
    ],
    buttonText: "Is Boolean?",
  },
  {
    id: "simple-division",
    title: "Divide Two Numbers",
    description:
      "Write a function that divides the first number by the second. Handle division by zero.",
    category: "Beginner",
    inputs: [
      {
        id: "num1",
        label: "Dividend",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: 100,
      },
      {
        id: "num2",
        label: "Divisor",
        type: "number",
        placeholder: "Enter another number",
        defaultValue: 10,
      },
    ],
    buttonText: "Divide",
  },
  {
    id: "area-of-rectangle",
    title: "Area of a Rectangle",
    description:
      "Write a function that calculates the area of a rectangle given its length and width.",
    category: "Beginner",
    inputs: [
      {
        id: "length",
        label: "Length",
        type: "number",
        placeholder: "Enter length",
        defaultValue: 10,
      },
      {
        id: "width",
        label: "Width",
        type: "number",
        placeholder: "Enter width",
        defaultValue: 5,
      },
    ],
    buttonText: "Calculate Area",
  },
  {
    id: "celsius-to-fahrenheit",
    title: "Celsius to Fahrenheit",
    description:
      "Write a function to convert a temperature from Celsius to Fahrenheit. Formula: (C * 9/5) + 32.",
    category: "Beginner",
    inputs: [
      {
        id: "celsius",
        label: "Temperature in Celsius",
        type: "number",
        placeholder: "e.g., 0",
        defaultValue: 25,
      },
    ],
    buttonText: "Convert",
  },
  {
    id: "fahrenheit-to-celsius",
    title: "Fahrenheit to Celsius",
    description:
      "Write a function to convert a temperature from Fahrenheit to Celsius. Formula: (F - 32) * 5/9.",
    category: "Beginner",
    inputs: [
      {
        id: "fahrenheit",
        label: "Temperature in Fahrenheit",
        type: "number",
        placeholder: "e.g., 32",
        defaultValue: 77,
      },
    ],
    buttonText: "Convert",
  },
  {
    id: "count-vowels",
    title: "Count Vowels in a String",
    description:
      "Write a function that counts the number of vowels (a, e, i, o, u) in a given string. Case-insensitive.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "Enter a string",
        defaultValue: "JavaScript is awesome",
      },
    ],
    buttonText: "Count Vowels",
  },
  {
    id: "remove-whitespaces",
    title: "Remove Whitespace",
    description:
      "Write a function that removes all whitespace from the beginning and end of a string.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String with whitespace",
        type: "text",
        placeholder: "  text  ",
        defaultValue: "  hello world  ",
      },
    ],
    buttonText: "Trim It",
  },
  {
    id: "repeat-string",
    title: "Repeat a String",
    description:
      "Write a function that repeats a string a specified number of times.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "e.g., abc",
        defaultValue: "JS",
      },
      {
        id: "times",
        label: "Number of times",
        type: "number",
        placeholder: "e.g., 3",
        defaultValue: 5,
      },
    ],
    buttonText: "Repeat",
  },
  {
    id: "is-positive",
    title: "Check if Number is Positive",
    description:
      "Write a function that returns true if a number is positive, and false otherwise. Zero is not considered positive.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: 42,
      },
    ],
    buttonText: "Check Sign",
  },
  {
    id: "is-negative",
    title: "Check if Number is Negative",
    description:
      "Write a function that returns true if a number is negative, and false otherwise.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: -7,
      },
    ],
    buttonText: "Check Sign",
  },
  {
    id: "get-absolute-value",
    title: "Get Absolute Value",
    description:
      "Write a function that returns the absolute value of a number.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: -15,
      },
    ],
    buttonText: "Get Absolute",
  },
  {
    id: "simple-for-loop",
    title: "Simple For Loop",
    description:
      "Use a for loop to create a string of numbers from 0 up to (but not including) a given number, separated by dashes.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Loop until",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: 5,
      },
    ],
    buttonText: "Run Loop",
  },
  {
    id: "simple-while-loop",
    title: "Simple While Loop",
    description:
      "Use a while loop to create a string of numbers counting down from a given number to 1, separated by spaces.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Countdown from",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: 5,
      },
    ],
    buttonText: "Run Loop",
  },
  {
    id: "array-length",
    title: "Get Array Length",
    description:
      "Write a function that returns the number of elements in an array (from a comma-separated string).",
    category: "Beginner",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "e.g., a,b,c,d",
        defaultValue: "a,b,c,d",
      },
    ],
    buttonText: "Count Elements",
  },
  {
    id: "simple-if-else",
    title: "Simple If/Else",
    description:
      'Write a function that returns "adult" if age is 18 or over, and "minor" otherwise.',
    category: "Beginner",
    inputs: [
      {
        id: "age",
        label: "Age",
        type: "number",
        placeholder: "Enter an age",
        defaultValue: 21,
      },
    ],
    buttonText: "Check Age",
  },
  {
    id: "check-string-includes",
    title: "Check if String Includes Substring",
    description:
      "Write a function that checks if a string contains a specific substring.",
    category: "Beginner",
    inputs: [
      {
        id: "mainStr",
        label: "Main String",
        type: "text",
        placeholder: "The quick brown fox",
        defaultValue: "The quick brown fox",
      },
      {
        id: "subStr",
        label: "Substring to find",
        type: "text",
        placeholder: "fox",
        defaultValue: "fox",
      },
    ],
    buttonText: "Check Includes",
  },
  {
    id: "get-random-number",
    title: "Get Random Number",
    description:
      "Write a function that returns a random integer between 0 and a given maximum number (inclusive).",
    category: "Beginner",
    inputs: [
      {
        id: "max",
        label: "Maximum Value",
        type: "number",
        placeholder: "e.g., 100",
        defaultValue: 10,
      },
    ],
    buttonText: "Get Random",
  },
  {
    id: "round-number-up",
    title: "Round Number Up",
    description:
      "Write a function that rounds a number up to the nearest integer.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 4.2",
        defaultValue: 4.2,
      },
    ],
    buttonText: "Round Up",
  },
  {
    id: "round-number-down",
    title: "Round Number Down",
    description:
      "Write a function that rounds a number down to the nearest integer.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 9.9",
        defaultValue: 9.9,
      },
    ],
    buttonText: "Round Down",
  },
  {
    id: "round-to-nearest",
    title: "Round to Nearest Integer",
    description:
      "Write a function that rounds a number to the nearest integer.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 3.5",
        defaultValue: 3.5,
      },
    ],
    buttonText: "Round",
  },
  {
    id: "power-of-number",
    title: "Power of a Number",
    description:
      "Write a function that calculates the result of a number raised to a given power.",
    category: "Beginner",
    inputs: [
      {
        id: "base",
        label: "Base",
        type: "number",
        placeholder: "e.g., 2",
        defaultValue: 2,
      },
      {
        id: "exponent",
        label: "Exponent",
        type: "number",
        placeholder: "e.g., 8",
        defaultValue: 8,
      },
    ],
    buttonText: "Calculate Power",
  },
  {
    id: "square-root",
    title: "Square Root",
    description:
      "Write a function that calculates the square root of a number.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 81",
        defaultValue: 81,
      },
    ],
    buttonText: "Calculate Root",
  },
  {
    id: "simple-array-join",
    title: "Join Array Elements",
    description:
      "Write a function that joins all elements of an array (from a comma-separated string) into a single string, separated by a specified separator.",
    category: "Beginner",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "e.g., red,green,blue",
        defaultValue: "red,green,blue",
      },
      {
        id: "separator",
        label: "Separator",
        type: "text",
        placeholder: "e.g., -",
        defaultValue: " - ",
      },
    ],
    buttonText: "Join",
  },
  {
    id: "string-to-number",
    title: "Convert String to Number",
    description:
      "Write a function that converts a string representation of a number into an actual number.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String Number",
        type: "text",
        placeholder: "e.g., 123",
        defaultValue: "123.45",
      },
    ],
    buttonText: "Convert",
  },
  {
    id: "number-to-string",
    title: "Convert Number to String",
    description:
      "Write a function that converts a number into its string representation.",
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 42",
        defaultValue: 42,
      },
    ],
    buttonText: "Convert",
  },
  {
    id: "get-char-at-index",
    title: "Get Character at Index",
    description:
      "Write a function that returns the character at a specific index in a string.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "e.g., JavaScript",
        defaultValue: "JavaScript",
      },
      {
        id: "index",
        label: "Index",
        type: "number",
        placeholder: "e.g., 4",
        defaultValue: 4,
      },
    ],
    buttonText: "Get Character",
  },
  {
    id: "simple-object-access",
    title: "Access Object Property",
    description:
      "Given a simple JSON object, write a function that accesses and returns the value of a specific property.",
    category: "Beginner",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        placeholder: '{"name": "John", "age": 30}',
        defaultValue: '{"name": "John", "age": 30, "city": "New York"}',
      },
      {
        id: "key",
        label: "Property Key",
        type: "text",
        placeholder: "e.g., age",
        defaultValue: "age",
      },
    ],
    buttonText: "Get Property",
  },
  {
    id: "check-array-includes",
    title: "Check if Array Contains Value",
    description:
      "Write a function that checks if an array (from a comma-separated string) contains a specific value.",
    category: "Beginner",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "e.g., apple,banana,cherry",
        defaultValue: "apple,banana,cherry",
      },
      {
        id: "value",
        label: "Value to find",
        type: "text",
        placeholder: "e.g., banana",
        defaultValue: "banana",
      },
    ],
    buttonText: "Check Array",
  },
  {
    id: "find-index-of",
    title: "Find Index of Element",
    description:
      "Write a function that finds the index of the first occurrence of a specified value in an array.",
    category: "Beginner",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "e.g., 10,20,30,40",
        defaultValue: "10,20,30,40,30",
      },
      {
        id: "value",
        label: "Value to find",
        type: "text",
        placeholder: "e.g., 30",
        defaultValue: "30",
      },
    ],
    buttonText: "Find Index",
  },
  {
    id: "string-slice",
    title: "Slice a String",
    description:
      "Write a function that extracts a portion of a string from a start index to an end index.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "e.g., The quick brown fox",
        defaultValue: "The quick brown fox",
      },
      {
        id: "start",
        label: "Start Index",
        type: "number",
        placeholder: "e.g., 4",
        defaultValue: 4,
      },
      {
        id: "end",
        label: "End Index",
        type: "number",
        placeholder: "e.g., 9",
        defaultValue: 9,
      },
    ],
    buttonText: "Slice",
  },
  {
    id: "array-slice",
    title: "Slice an Array",
    description:
      "Write a function that returns a shallow copy of a portion of an array (from a comma-separated string) into a new array object.",
    category: "Beginner",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "a,b,c,d,e",
        defaultValue: "a,b,c,d,e",
      },
      {
        id: "start",
        label: "Start Index",
        type: "number",
        placeholder: "e.g., 1",
        defaultValue: 1,
      },
      {
        id: "end",
        label: "End Index",
        type: "number",
        placeholder: "e.g., 3",
        defaultValue: 3,
      },
    ],
    buttonText: "Slice Array",
  },
  {
    id: "simple-ternary-operator",
    title: "Simple Ternary Operator",
    description:
      'Use the ternary operator to return "true" if a number is greater than 10, and "false" otherwise.',
    category: "Beginner",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "Enter a number",
        defaultValue: 20,
      },
    ],
    buttonText: "Check with Ternary",
  },
  {
    id: "modulo-operator",
    title: "Modulo Operator (Remainder)",
    description:
      "Write a function that returns the remainder of a division between two numbers.",
    category: "Beginner",
    inputs: [
      {
        id: "dividend",
        label: "Dividend",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: 10,
      },
      {
        id: "divisor",
        label: "Divisor",
        type: "number",
        placeholder: "e.g., 3",
        defaultValue: 3,
      },
    ],
    buttonText: "Get Remainder",
  },
  {
    id: "count-words-in-string",
    title: "Count Words in a String",
    description:
      "Write a function that counts the number of words in a sentence.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "Sentence",
        type: "text",
        placeholder: "Enter a sentence",
        defaultValue: "This is a sample sentence.",
      },
    ],
    buttonText: "Count Words",
  },
  {
    id: "check-if-starts-with",
    title: "Check if String Starts With",
    description:
      "Write a function to check if a string starts with a specific substring.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "e.g., Hello world",
        defaultValue: "Hello world",
      },
      {
        id: "substr",
        label: "Starts with",
        type: "text",
        placeholder: "e.g., Hello",
        defaultValue: "Hello",
      },
    ],
    buttonText: "Check Start",
  },
  {
    id: "check-if-ends-with",
    title: "Check if String Ends With",
    description:
      "Write a function to check if a string ends with a specific substring.",
    category: "Beginner",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "e.g., Hello world",
        defaultValue: "Hello world",
      },
      {
        id: "substr",
        label: "Ends with",
        type: "text",
        placeholder: "e.g., world",
        defaultValue: "world",
      },
    ],
    buttonText: "Check End",
  },
  {
    id: "simple-array-sum",
    title: "Sum of Array Elements",
    description:
      "Write a function that calculates the sum of all numbers in an array (from a comma-separated string).",
    category: "Beginner",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        placeholder: "1, 2, 3, 4",
        defaultValue: "1, 2, 3, 4",
      },
    ],
    buttonText: "Calculate Sum",
  },
  {
    id: "get-date-today",
    title: "Get Today's Date",
    description:
      "Write a function that returns today's date in a readable format (e.g., YYYY-MM-DD).",
    category: "Beginner",
    inputs: [],
    buttonText: "Get Date",
  },
  {
    id: "get-current-time",
    title: "Get Current Time",
    description:
      "Write a function that returns the current time in a readable format (e.g., HH:MM:SS).",
    category: "Beginner",
    inputs: [],
    buttonText: "Get Time",
  },
  {
    id: "simple-bmi-calculator",
    title: "Simple BMI Calculator",
    description:
      "Calculate Body Mass Index (BMI). Formula: weight (kg) / (height (m) ^ 2).",
    category: "Beginner",
    inputs: [
      {
        id: "weight",
        label: "Weight (kg)",
        type: "number",
        placeholder: "e.g., 70",
        defaultValue: 70,
      },
      {
        id: "height",
        label: "Height (m)",
        type: "number",
        placeholder: "e.g., 1.75",
        defaultValue: 1.75,
        step: "0.01",
      },
    ],
    buttonText: "Calculate BMI",
  },
  {
    id: "is-leap-year",
    title: "Check for Leap Year",
    description:
      "Write a function to determine if a year is a leap year. A leap year is divisible by 4, but not by 100 unless it is also divisible by 400.",
    category: "Beginner",
    inputs: [
      {
        id: "year",
        label: "Year",
        type: "number",
        placeholder: "Enter a year",
        defaultValue: 2024,
      },
    ],
    buttonText: "Check Year",
  },

  // =================================================================================================
  // INTERMEDIATE (50+)
  // =================================================================================================
  {
    id: "find-max-number",
    title: "Find Max Number in Array",
    description:
      "Write a function that takes an array of numbers (as a comma-separated string) and returns the largest number in the array.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        placeholder: "e.g., 1, 5, 2, 8, 3",
        defaultValue: "1, 5, 2, 8, 3",
      },
    ],
    buttonText: "Find Maximum",
  },
  {
    id: "is-palindrome",
    title: "Check for Palindrome",
    description:
      "A palindrome reads the same backward as forward. Write a function to check if a string is a palindrome, ignoring case and non-alphanumeric characters.",
    category: "Intermediate",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "e.g., A man, a plan, a canal: Panama",
        defaultValue: "A man, a plan, a canal: Panama",
      },
    ],
    buttonText: "Check Palindrome",
  },
  {
    id: "factorial-of-number",
    title: "Factorial of a Number",
    description:
      "Write a recursive function to calculate the factorial of a non-negative integer. Factorial of n (n!) is the product of all positive integers up to n.",
    category: "Intermediate",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "Enter a non-negative integer",
        defaultValue: 5,
      },
    ],
    buttonText: "Calculate Factorial",
  },
  {
    id: "fibonacci-sequence",
    title: "Fibonacci Sequence",
    description:
      "Write a function to generate the first n numbers of the Fibonacci sequence. Each number is the sum of the two preceding ones, starting from 0 and 1.",
    category: "Intermediate",
    inputs: [
      {
        id: "count",
        label: "Number of terms",
        type: "number",
        placeholder: "Enter a positive integer",
        defaultValue: 10,
      },
    ],
    buttonText: "Generate Sequence",
  },
  {
    id: "find-longest-word",
    title: "Find Longest Word in String",
    description:
      "Write a function that takes a sentence and returns the longest word.",
    category: "Intermediate",
    inputs: [
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        placeholder: "Enter a sentence",
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
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "1, 2, 2, 3, 4, 4, 5",
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
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "a, b, c, d, e, f, g",
        defaultValue: "a,b,c,d,e,f,g",
      },
      {
        id: "size",
        label: "Chunk Size",
        type: "number",
        placeholder: "e.g., 2",
        defaultValue: 2,
      },
    ],
    buttonText: "Chunk Array",
  },
  {
    id: "capitalize-first-letter",
    title: "Capitalize First Letter of Each Word",
    description:
      "Write a function that takes a sentence and capitalizes the first letter of each word.",
    category: "Intermediate",
    inputs: [
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        placeholder: "Enter a sentence",
        defaultValue: "hello world from javascript",
      },
    ],
    buttonText: "Capitalize Words",
  },
  {
    id: "check-anagrams",
    title: "Check for Anagrams",
    description:
      "Write a function to check if two strings are anagrams of each other (contain the same characters in the same quantity).",
    category: "Intermediate",
    inputs: [
      {
        id: "str1",
        label: "First String",
        type: "text",
        placeholder: "e.g., listen",
        defaultValue: "listen",
      },
      {
        id: "str2",
        label: "Second String",
        type: "text",
        placeholder: "e.g., silent",
        defaultValue: "silent",
      },
    ],
    buttonText: "Check Anagrams",
  },
  {
    id: "fizzbuzz",
    title: "FizzBuzz Challenge",
    description:
      'Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both, print "FizzBuzz".',
    category: "Intermediate",
    inputs: [
      {
        id: "num",
        label: "Count up to",
        type: "number",
        placeholder: "e.g., 15",
        defaultValue: 15,
      },
    ],
    buttonText: "Run FizzBuzz",
  },
  {
    id: "sum-all-primes",
    title: "Sum All Primes",
    description:
      "Write a function that sums all prime numbers up to and including a given number.",
    category: "Intermediate",
    inputs: [
      {
        id: "num",
        label: "Sum primes up to",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: 10,
      },
    ],
    buttonText: "Sum Primes",
  },
  {
    id: "array-intersection",
    title: "Find Array Intersection",
    description:
      "Write a function that returns an array of elements found in both of the two given arrays.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr1",
        label: "First Array (comma-separated)",
        type: "text",
        placeholder: "1, 2, 3, 4",
        defaultValue: "1, 2, 3, 4",
      },
      {
        id: "arr2",
        label: "Second Array (comma-separated)",
        type: "text",
        placeholder: "3, 4, 5, 6",
        defaultValue: "3, 4, 5, 6",
      },
    ],
    buttonText: "Find Intersection",
  },
  {
    id: "array-difference",
    title: "Find Array Difference",
    description:
      "Write a function that returns the elements in the first array that are not present in the second array.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr1",
        label: "First Array (comma-separated)",
        type: "text",
        placeholder: "1, 2, 3, 4",
        defaultValue: "1, 2, 3, 4, 5",
      },
      {
        id: "arr2",
        label: "Second Array (comma-separated)",
        type: "text",
        placeholder: "3, 4",
        defaultValue: "4, 5",
      },
    ],
    buttonText: "Find Difference",
  },
  {
    id: "object-key-value-pairs",
    title: "Object to Key-Value Pairs",
    description:
      'Write a function that converts a JSON object into an array of its key-value pairs (e.g., [["key1", "value1"], ["key2", "value2"]]).',
    category: "Intermediate",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        placeholder: '{"a": 1, "b": 2}',
        defaultValue: '{"name": "Alice", "age": 25}',
      },
    ],
    buttonText: "Convert to Pairs",
  },
  {
    id: "count-character-occurrences",
    title: "Count Character Occurrences",
    description:
      "Write a function that counts the number of times each character appears in a string.",
    category: "Intermediate",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        placeholder: "Enter a string",
        defaultValue: "hello",
      },
    ],
    buttonText: "Count Characters",
  },
  {
    id: "rotate-array-left",
    title: "Rotate Array Left",
    description:
      "Write a function that rotates an array to the left by a specified number of steps.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "1, 2, 3, 4, 5",
        defaultValue: "1, 2, 3, 4, 5",
      },
      {
        id: "steps",
        label: "Steps to rotate",
        type: "number",
        placeholder: "e.g., 2",
        defaultValue: 2,
      },
    ],
    buttonText: "Rotate Left",
  },
  {
    id: "flatten-array",
    title: "Flatten a Nested Array",
    description:
      "Write a function to flatten a nested array (one level deep) into a single-level array.",
    category: "Intermediate",
    inputs: [
      {
        id: "jsonArr",
        label: "Nested Array (JSON format)",
        type: "textarea",
        placeholder: "[1, [2, 3], 4, [5]]",
        defaultValue: "[1, [2, 3], 4, [5]]",
      },
    ],
    buttonText: "Flatten Array",
  },
  {
    id: "title-case-sentence",
    title: "Title Case a Sentence",
    description:
      "Write a function to convert a sentence into title case (the first letter of each word is capitalized).",
    category: "Intermediate",
    inputs: [
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        placeholder: "i'm a little tea pot",
        defaultValue: "i'm a little tea pot",
      },
    ],
    buttonText: "Title Case",
  },
  {
    id: "find-missing-number",
    title: "Find Missing Number",
    description:
      "Given an array of numbers from 1 to n with one number missing, write a function to find the missing number.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        placeholder: "e.g., 1, 2, 4, 5",
        defaultValue: "1, 2, 4, 5",
      },
    ],
    buttonText: "Find Missing",
  },
  {
    id: "is-perfect-square",
    title: "Check for Perfect Square",
    description:
      "Write a function that determines if a given number is a perfect square without using the built-in Math.sqrt function.",
    category: "Intermediate",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 25",
        defaultValue: 25,
      },
    ],
    buttonText: "Check Square",
  },
  {
    id: "validate-email",
    title: "Validate Email Address",
    description:
      "Write a function that uses a regular expression to validate an email address format.",
    category: "Intermediate",
    inputs: [
      {
        id: "email",
        label: "Email Address",
        type: "text",
        placeholder: "test@example.com",
        defaultValue: "test@example.com",
      },
    ],
    buttonText: "Validate",
  },
  {
    id: "sort-array-of-strings",
    title: "Sort Array of Strings",
    description: "Write a function to sort an array of strings alphabetically.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array of strings (comma-separated)",
        type: "text",
        placeholder: "banana, apple, cherry",
        defaultValue: "banana, apple, cherry, date",
      },
    ],
    buttonText: "Sort Strings",
  },
  {
    id: "sort-array-of-numbers",
    title: "Sort Array of Numbers",
    description:
      "Write a function to sort an array of numbers in ascending order.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        placeholder: "10, 5, 8, 2, 1",
        defaultValue: "10, 5, 8, 2, 1",
      },
    ],
    buttonText: "Sort Numbers",
  },
  {
    id: "average-of-array",
    title: "Calculate Array Average",
    description:
      "Write a function that calculates the average of all numbers in an array.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        placeholder: "1, 2, 3, 4, 5",
        defaultValue: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Calculate Average",
  },
  {
    id: "group-by-property",
    title: "Group Objects by Property",
    description:
      "Given an array of objects (as a JSON string), write a function to group them based on a specified property.",
    category: "Intermediate",
    inputs: [
      {
        id: "jsonArr",
        label: "Array of Objects (JSON)",
        type: "textarea",
        placeholder:
          '[{"cat":"A", "val":1}, {"cat":"B", "val":2}, {"cat":"A", "val":3}]',
        defaultValue:
          '[{"category":"fruit", "name":"apple"}, {"category":"veg", "name":"carrot"}, {"category":"fruit", "name":"banana"}]',
      },
      {
        id: "key",
        label: "Property to group by",
        type: "text",
        placeholder: "e.g., category",
        defaultValue: "category",
      },
    ],
    buttonText: "Group Objects",
  },
  {
    id: "object-from-entries",
    title: "Object from Key-Value Pairs",
    description:
      'Write a function that creates an object from an array of key-value pairs (e.g., [["key1", "value1"], ["key2", "value2"]]).',
    category: "Intermediate",
    inputs: [
      {
        id: "jsonArr",
        label: "Array of Pairs (JSON)",
        type: "textarea",
        placeholder: '[["a", 1], ["b", 2]]',
        defaultValue: '[["name", "Bob"], ["age", 40]]',
      },
    ],
    buttonText: "Create Object",
  },
  {
    id: "get-object-keys",
    title: "Get Object Keys",
    description:
      "Write a function that returns an array of a given object's own enumerable property names (keys).",
    category: "Intermediate",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        placeholder: '{"a": 1, "b": 2}',
        defaultValue: '{"id": 101, "title": "My Post", "active": true}',
      },
    ],
    buttonText: "Get Keys",
  },
  {
    id: "get-object-values",
    title: "Get Object Values",
    description:
      "Write a function that returns an array of a given object's own enumerable property values.",
    category: "Intermediate",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        placeholder: '{"a": 1, "b": 2}',
        defaultValue: '{"id": 101, "title": "My Post", "active": true}',
      },
    ],
    buttonText: "Get Values",
  },
  {
    id: "has-property",
    title: "Check if Object Has Property",
    description:
      "Write a function to check if an object has a specific property.",
    category: "Intermediate",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        placeholder: '{"a": 1}',
        defaultValue: '{"name": "Laptop", "price": 1200}',
      },
      {
        id: "key",
        label: "Property Key",
        type: "text",
        placeholder: "e.g., price",
        defaultValue: "price",
      },
    ],
    buttonText: "Check Property",
  },
  {
    id: "merge-objects",
    title: "Merge Two Objects",
    description:
      "Write a function that merges two objects into one. If keys conflict, the second object's value should be used.",
    category: "Intermediate",
    inputs: [
      {
        id: "json1",
        label: "First JSON Object",
        type: "textarea",
        placeholder: '{"a": 1, "b": 2}',
        defaultValue: '{"name": "User", "isAdmin": false}',
      },
      {
        id: "json2",
        label: "Second JSON Object",
        type: "textarea",
        placeholder: '{"b": 3, "c": 4}',
        defaultValue: '{"isAdmin": true, "theme": "dark"}',
      },
    ],
    buttonText: "Merge",
  },
  {
    id: "is-prime-number",
    title: "Check for Prime Number",
    description:
      "Write a function to check if a number is a prime number (a number greater than 1 that has no positive divisors other than 1 and itself).",
    category: "Intermediate",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 13",
        defaultValue: 13,
      },
    ],
    buttonText: "Check Prime",
  },
  {
    id: "greatest-common-divisor",
    title: "Greatest Common Divisor (GCD)",
    description:
      "Write a function to find the greatest common divisor of two positive integers using the Euclidean algorithm.",
    category: "Intermediate",
    inputs: [
      {
        id: "num1",
        label: "First Number",
        type: "number",
        placeholder: "e.g., 48",
        defaultValue: 48,
      },
      {
        id: "num2",
        label: "Second Number",
        type: "number",
        placeholder: "e.g., 18",
        defaultValue: 18,
      },
    ],
    buttonText: "Find GCD",
  },
  {
    id: "roman-numeral-converter",
    title: "Roman Numeral Converter",
    description:
      "Write a function to convert a given number into a Roman numeral.",
    category: "Intermediate",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 36",
        defaultValue: 36,
      },
    ],
    buttonText: "Convert",
  },
  {
    id: "median-of-array",
    title: "Calculate Array Median",
    description:
      "Write a function to find the median of an array of numbers. The median is the middle value of a sorted dataset.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        placeholder: "1, 2, 3, 4, 5",
        defaultValue: "7, 2, 10, 4, 1",
      },
    ],
    buttonText: "Find Median",
  },
  {
    id: "sum-of-digits",
    title: "Sum of Digits",
    description:
      "Write a function that takes a number and returns the sum of its digits.",
    category: "Intermediate",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 1234",
        defaultValue: 1234,
      },
    ],
    buttonText: "Sum Digits",
  },
  {
    id: "is-armstrong-number",
    title: "Check Armstrong Number",
    description:
      "An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits. E.g., 153 = 1^3 + 5^3 + 3^3.",
    category: "Intermediate",
    inputs: [
      {
        id: "num",
        label: "Number",
        type: "number",
        placeholder: "e.g., 153",
        defaultValue: 153,
      },
    ],
    buttonText: "Check Armstrong",
  },
  {
    id: "deep-equality-check",
    title: "Deep Equality Check",
    description:
      "Write a function that performs a deep comparison between two JSON objects to check if they are equal.",
    category: "Intermediate",
    inputs: [
      {
        id: "json1",
        label: "First JSON Object",
        type: "textarea",
        defaultValue: '{"a": 1, "b": {"c": 2}}',
      },
      {
        id: "json2",
        label: "Second JSON Object",
        type: "textarea",
        defaultValue: '{"a": 1, "b": {"c": 2}}',
      },
    ],
    buttonText: "Deep Compare",
  },
  {
    id: "random-hex-color",
    title: "Generate Random Hex Color",
    description:
      "Write a function that generates a random hexadecimal color code (e.g., #a3c1e9).",
    category: "Intermediate",
    inputs: [],
    buttonText: "Generate Color",
  },
  {
    id: "find-most-frequent",
    title: "Find Most Frequent Element",
    description:
      "Write a function that finds the most frequently occurring element in an array.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "apple, banana, apple, cherry, banana, apple",
      },
    ],
    buttonText: "Find Mode",
  },
  {
    id: "truncate-string",
    title: "Truncate a String",
    description:
      'Write a function to truncate a string if it is longer than the given maximum string length. The truncation should be indicated by "..." at the end.',
    category: "Intermediate",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "A-tisket a-tasket A green and yellow basket",
      },
      { id: "length", label: "Max Length", type: "number", defaultValue: 8 },
    ],
    buttonText: "Truncate",
  },
  {
    id: "is-array-sorted",
    title: "Check if Array is Sorted",
    description:
      "Write a function to check if an array of numbers is sorted in ascending order.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Check Sort Order",
  },
  {
    id: "format-currency",
    title: "Format as Currency",
    description:
      "Write a function that formats a number as a currency string (e.g., USD).",
    category: "Intermediate",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 1234.56 },
      {
        id: "currency",
        label: "Currency Code (e.g., USD, EUR, JPY)",
        type: "text",
        defaultValue: "USD",
      },
    ],
    buttonText: "Format Currency",
  },
  {
    id: "hamming-distance",
    title: "Hamming Distance",
    description:
      "The Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. Write a function to calculate it.",
    category: "Intermediate",
    inputs: [
      {
        id: "str1",
        label: "First String",
        type: "text",
        defaultValue: "karolin",
      },
      {
        id: "str2",
        label: "Second String",
        type: "text",
        defaultValue: "kathrin",
      },
    ],
    buttonText: "Calculate Distance",
  },
  {
    id: "remove-falsy-values",
    title: "Remove Falsy Values from Array",
    description:
      'Write a function that removes all falsy values (false, null, 0, "", undefined, and NaN) from an array.',
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "7,ate,,false,9",
      },
    ],
    buttonText: "Remove Falsy",
  },
  {
    id: "is-isogram",
    title: "Check for Isogram",
    description:
      "An isogram is a word that has no repeating letters, consecutive or non-consecutive. Write a function to check if a string is an isogram.",
    category: "Intermediate",
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
    id: "power-of-two",
    title: "Check if Power of Two",
    description:
      "Write a function that determines if a given number is a power of two.",
    category: "Intermediate",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 16 }],
    buttonText: "Check Power",
  },
  {
    id: "mask-string",
    title: "Mask String Characters",
    description:
      'Write a function that masks all but the last four characters of a string with "#".',
    category: "Intermediate",
    inputs: [
      {
        id: "str",
        label: "String to mask (e.g., credit card)",
        type: "text",
        defaultValue: "1234567890123456",
      },
    ],
    buttonText: "Mask",
  },
  {
    id: "shuffle-array",
    title: "Shuffle an Array",
    description:
      "Write a function to shuffle the elements of an array in place using the Fisher-Yates algorithm.",
    category: "Intermediate",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5, 6, 7, 8",
      },
    ],
    buttonText: "Shuffle",
  },
  {
    id: "days-between-dates",
    title: "Days Between Two Dates",
    description:
      "Write a function that calculates the number of days between two dates (YYYY-MM-DD format).",
    category: "Intermediate",
    inputs: [
      {
        id: "date1",
        label: "Start Date (YYYY-MM-DD)",
        type: "text",
        defaultValue: "2024-01-01",
      },
      {
        id: "date2",
        label: "End Date (YYYY-MM-DD)",
        type: "text",
        defaultValue: "2024-01-31",
      },
    ],
    buttonText: "Calculate Days",
  },

  // =================================================================================================
  // SYNCHRONOUS (50+)
  // =================================================================================================
  {
    id: "closure-counter",
    title: "Closure Counter",
    description:
      "Create a counter function using a closure. The outer function should be called once, and the returned inner function should increment a private counter on each call.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Increment Counter",
  },
  {
    id: "this-keyword-simple",
    title: "`this` in a Method",
    description:
      "Demonstrate the use of the `this` keyword inside an object method. The method should return a property from the object itself.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Get Name",
  },
  {
    id: "function-binding",
    title: "Function Binding with .bind()",
    description:
      "Show how `.bind()` can permanently set the `this` context for a function, even when called from a different context.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Run Bound Function",
  },
  {
    id: "prototype-inheritance",
    title: "Prototype Inheritance",
    description:
      'Create a "parent" constructor and a "child" constructor. Demonstrate how the child can inherit methods from the parent\'s prototype.',
    category: "Synchronous",
    inputs: [],
    buttonText: "Test Inheritance",
  },
  {
    id: "iife-example",
    title: "IIFE for Private Scope",
    description:
      "Use an Immediately Invoked Function Expression (IIFE) to create a private scope and expose only a public interface.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Get Public Value",
  },
  {
    id: "hoisting-var-declaration",
    title: "Variable Hoisting with `var`",
    description:
      "Demonstrate variable hoisting. Access a `var` variable before its declaration to show it is `undefined`, not an error.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Test Hoisting",
  },
  {
    id: "let-block-scope",
    title: "Block Scope with `let`",
    description:
      "Show how `let` creates block-scoped variables that are not accessible outside their containing block (e.g., an `if` statement).",
    category: "Synchronous",
    inputs: [],
    buttonText: "Test Block Scope",
  },
  {
    id: "const-declaration",
    title: "Constant Declaration with `const`",
    description:
      "Demonstrate that a variable declared with `const` cannot be reassigned. Also show that for objects, its properties can still be modified.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Test `const`",
  },
  {
    id: "type-coercion-plus-operator",
    title: "Type Coercion with `+`",
    description:
      "Show the different behaviors of the `+` operator with numbers and strings, demonstrating implicit type coercion.",
    category: "Synchronous",
    inputs: [
      { id: "val1", label: "Value 1", type: "text", defaultValue: "5" },
      { id: "val2", label: "Value 2", type: "text", defaultValue: "10" },
    ],
    buttonText: "Add Values",
  },
  {
    id: "strict-equality",
    title: "Strict vs. Loose Equality",
    description:
      "Compare two values using both strict (`===`) and loose (`==`) equality to demonstrate how type coercion affects the comparison.",
    category: "Synchronous",
    inputs: [
      { id: "val1", label: "Value 1", type: "text", defaultValue: "7" },
      { id: "val2", label: "Value 2", type: "text", defaultValue: 7 },
    ],
    buttonText: "Compare",
  },
  {
    id: "pass-by-value",
    title: "Pass by Value (Primitives)",
    description:
      "Demonstrate that primitive types (string, number, boolean) are passed by value to functions.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Test Pass by Value",
  },
  {
    id: "pass-by-reference",
    title: "Pass by Reference (Objects)",
    description:
      "Demonstrate that objects (and arrays) are passed by reference to functions, allowing the function to modify the original object.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Test Pass by Reference",
  },
  {
    id: "higher-order-function-filter",
    title: "Higher-Order Function: Filter",
    description:
      "Create a simple higher-order function that takes an array and a callback function to filter the array.",
    category: "Synchronous",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5, 6",
      },
    ],
    buttonText: "Filter Even Numbers",
  },
  {
    id: "higher-order-function-map",
    title: "Higher-Order Function: Map",
    description:
      "Create a simple higher-order function that takes an array and a callback function to transform the array.",
    category: "Synchronous",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "10, 20, 30",
      },
    ],
    buttonText: "Triple Each Number",
  },
  {
    id: "higher-order-function-reduce",
    title: "Higher-Order Function: Reduce",
    description:
      "Use the `reduce` method to calculate the sum of all numbers in an array.",
    category: "Synchronous",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "5, 10, 15, 20",
      },
    ],
    buttonText: "Reduce to Sum",
  },
  {
    id: "recursion-countdown",
    title: "Recursion: Countdown",
    description:
      "Write a recursive function that takes a number and returns an array counting down from that number to 1.",
    category: "Synchronous",
    inputs: [
      {
        id: "num",
        label: "Start countdown from",
        type: "number",
        defaultValue: 5,
      },
    ],
    buttonText: "Start Countdown",
  },
  {
    id: "call-apply-methods",
    title: ".call() and .apply()",
    description:
      "Demonstrate how `.call()` and `.apply()` can be used to invoke a function with a specified `this` context and arguments.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Test Call/Apply",
  },
  {
    id: "short-circuiting-and",
    title: "Short-Circuiting with `&&`",
    description:
      "Demonstrate how the logical AND (`&&`) operator can be used for short-circuiting to run a function only if a condition is true.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Test Short-Circuit",
  },
  {
    id: "short-circuiting-or",
    title: "Short-Circuiting with `||`",
    description:
      "Demonstrate how the logical OR (`||`) operator can be used for short-circuiting to provide a default value.",
    category: "Synchronous",
    inputs: [
      {
        id: "username",
        label: "Username (leave blank for default)",
        type: "text",
        placeholder: "Enter username",
        defaultValue: "",
      },
    ],
    buttonText: "Get Username",
  },
  {
    id: "arguments-object",
    title: "The `arguments` Object",
    description:
      "Write a traditional function (not an arrow function) that can sum an arbitrary number of arguments using the `arguments` object.",
    category: "Synchronous",
    inputs: [
      {
        id: "args",
        label: "Numbers to sum (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Sum Arguments",
  },
  {
    id: "currying-simple",
    title: "Simple Currying",
    description:
      "Create a curried function `add(a)(b)` that takes two numbers in separate function calls and returns their sum.",
    category: "Synchronous",
    inputs: [
      { id: "num1", label: "First Number", type: "number", defaultValue: 10 },
      { id: "num2", label: "Second Number", type: "number", defaultValue: 20 },
    ],
    buttonText: "Curry Add",
  },
  {
    id: "switch-statement",
    title: "Switch Statement",
    description:
      "Use a switch statement to return the name of a day based on a number (1-7).",
    category: "Synchronous",
    inputs: [
      {
        id: "dayNum",
        label: "Day Number (1-7)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Get Day Name",
  },
  {
    id: "object-property-shorthand",
    title: "Object Property Shorthand",
    description:
      "Demonstrate creating an object where property names match variable names, using property shorthand.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Create Object",
  },
  {
    id: "for-in-loop",
    title: "`for...in` Loop for Objects",
    description:
      "Iterate over the properties of an object using a `for...in` loop to create a descriptive string.",
    category: "Synchronous",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        defaultValue: '{"make": "Ford", "model": "Mustang", "year": 1969}',
      },
    ],
    buttonText: "Iterate Properties",
  },
  {
    id: "for-of-loop",
    title: "`for...of` Loop for Arrays",
    description:
      "Iterate over the values of an array using a `for...of` loop to calculate their sum.",
    category: "Synchronous",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "10, 20, 30, 40",
      },
    ],
    buttonText: "Sum with for...of",
  },
  {
    id: "truthy-falsy-check",
    title: "Truthy and Falsy Check",
    description:
      "Write a function that checks if a given value is truthy or falsy.",
    category: "Synchronous",
    inputs: [
      {
        id: "value",
        label: "Value to check",
        type: "text",
        placeholder: 'e.g., 0, "", null, "hello"',
        defaultValue: "0",
      },
    ],
    buttonText: "Check Truthiness",
  },
  {
    id: "event-loop-conceptual",
    title: "Event Loop (Conceptual)",
    description:
      "Demonstrate the non-blocking nature of JavaScript using `setTimeout` to show the order of execution between synchronous code and asynchronous code.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Run Execution Order Test",
  },
  {
    id: "error-handling-try-catch",
    title: "Error Handling with `try...catch`",
    description:
      "Use a `try...catch` block to handle an error gracefully when parsing an invalid JSON string.",
    category: "Synchronous",
    inputs: [
      {
        id: "json",
        label: "JSON String",
        type: "textarea",
        defaultValue: '{"name": "John", "age": 30',
      },
    ],
    buttonText: "Parse JSON",
  },
  {
    id: "custom-error",
    title: "Throwing Custom Errors",
    description:
      "Create a function that throws a custom Error object if a condition is not met (e.g., a number is negative).",
    category: "Synchronous",
    inputs: [
      {
        id: "num",
        label: "Enter a positive number",
        type: "number",
        defaultValue: -5,
      },
    ],
    buttonText: "Validate Number",
  },
  {
    id: "array-every",
    title: "`Array.prototype.every()`",
    description:
      "Use the `every()` method to check if all numbers in an array are positive.",
    category: "Synchronous",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "10, 20, 30, -5, 40",
      },
    ],
    buttonText: "Check if All Positive",
  },
  {
    id: "array-some",
    title: "`Array.prototype.some()`",
    description:
      "Use the `some()` method to check if at least one number in an array is negative.",
    category: "Synchronous",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "10, 20, 30, -5, 40",
      },
    ],
    buttonText: "Check for Any Negative",
  },
  {
    id: "array-find",
    title: "`Array.prototype.find()`",
    description:
      "Use the `find()` method to find the first even number in an array.",
    category: "Synchronous",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 3, 5, 8, 9, 10",
      },
    ],
    buttonText: "Find First Even",
  },
  {
    id: "array-findIndex",
    title: "`Array.prototype.findIndex()`",
    description:
      "Use the `findIndex()` method to find the index of the first number greater than a target value.",
    category: "Synchronous",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "5, 12, 8, 130, 44",
      },
      {
        id: "target",
        label: "Target value",
        type: "number",
        defaultValue: 100,
      },
    ],
    buttonText: "Find Index",
  },
  {
    id: "lexical-scope",
    title: "Lexical Scoping",
    description:
      "Demonstrate lexical scoping where an inner function has access to the variables of its outer (parent) function.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Run Scope Test",
  },
  {
    id: "function-composition",
    title: "Simple Function Composition",
    description:
      "Compose two functions, `double` and `addFive`, into a new function that performs both operations in sequence.",
    category: "Synchronous",
    inputs: [
      { id: "num", label: "Input Number", type: "number", defaultValue: 10 },
    ],
    buttonText: "Compose and Execute",
  },
  {
    id: "iife-module-pattern",
    title: "IIFE Module Pattern",
    description:
      "Use an IIFE to create a simple module with private state and public methods to interact with that state.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Interact with Module",
  },
  {
    id: "memoization-simple",
    title: "Simple Memoization",
    description:
      "Create a memoized version of a slow function (e.g., squaring a number) to demonstrate caching results.",
    category: "Synchronous",
    inputs: [
      {
        id: "num",
        label: "Number to square (slowly)",
        type: "number",
        defaultValue: 25,
      },
    ],
    buttonText: "Calculate Twice",
  },
  {
    id: "global-scope-pollution",
    title: "Global Scope Pollution",
    description:
      "Demonstrate the danger of global scope pollution by defining a variable without `var`, `let`, or `const` inside a function.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Pollute and Check",
  },
  {
    id: "function-constructor",
    title: "The `Function` Constructor",
    description:
      "Use the `Function` constructor to create a new function from a string. (Note: This is generally not recommended due to security and performance issues).",
    category: "Synchronous",
    inputs: [
      { id: "arg1", label: "Argument Name 1", type: "text", defaultValue: "a" },
      { id: "arg2", label: "Argument Name 2", type: "text", defaultValue: "b" },
      {
        id: "body",
        label: "Function Body",
        type: "textarea",
        defaultValue: "return a * b;",
      },
    ],
    buttonText: "Create and Run",
  },
  {
    id: "object-is",
    title: "`Object.is()` for Comparison",
    description:
      "Compare `Object.is()` with `===` to show its different handling of special cases like `-0` and `NaN`.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Run Comparisons",
  },
  {
    id: "array-from",
    title: "`Array.from()`",
    description: "Use `Array.from()` to create a new array from a string.",
    category: "Synchronous",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Create Array from String",
  },
  {
    id: "array-of",
    title: "`Array.of()`",
    description:
      "Use `Array.of()` to create a new array instance with a variable number of arguments, regardless of number or type of the arguments.",
    category: "Synchronous",
    inputs: [
      {
        id: "args",
        label: "Elements for array (comma-separated)",
        type: "text",
        defaultValue: "7, hello, true",
      },
    ],
    buttonText: "Create Array with .of()",
  },
  {
    id: "array-fill",
    title: "`Array.prototype.fill()`",
    description:
      "Use `fill()` to change all elements in an array to a static value.",
    category: "Synchronous",
    inputs: [
      {
        id: "arr",
        label: "Array to fill (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5",
      },
      {
        id: "value",
        label: "Value to fill with",
        type: "text",
        defaultValue: "0",
      },
    ],
    buttonText: "Fill Array",
  },
  {
    id: "string-codepointat",
    title: "`String.prototype.codePointAt()`",
    description:
      "Get the Unicode code point value of a character at a specific position in a string, showing how it handles astral symbols.",
    category: "Synchronous",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "ABC😜" },
      { id: "index", label: "Index", type: "number", defaultValue: 3 },
    ],
    buttonText: "Get Code Point",
  },
  {
    id: "instanceof-operator",
    title: "The `instanceof` Operator",
    description:
      "Use the `instanceof` operator to check if an object is an instance of a particular constructor or class.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Check Instance",
  },
  {
    id: "typeof-operator-quirks",
    title: "`typeof` Operator Quirks",
    description:
      'Demonstrate some of the quirks of the `typeof` operator, such as `typeof null` returning "object".',
    category: "Synchronous",
    inputs: [],
    buttonText: "Test `typeof`",
  },
  {
    id: "bitwise-not",
    title: "Bitwise NOT `~`",
    description:
      "Use the bitwise NOT operator (`~`) as a shorthand to check if `indexOf` found a match (i.e., didn't return -1).",
    category: "Synchronous",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "Hello World" },
      {
        id: "char",
        label: "Character to find",
        type: "text",
        defaultValue: "o",
      },
    ],
    buttonText: "Find with Bitwise NOT",
  },
  {
    id: "tagged-templates",
    title: "Tagged Templates",
    description:
      "Create a simple tag function that modifies the output of a template literal.",
    category: "Synchronous",
    inputs: [
      { id: "name", label: "Name", type: "text", defaultValue: "Alex" },
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
    ],
    buttonText: "Use Tag Function",
  },
  {
    id: "comma-operator",
    title: "The Comma Operator",
    description:
      "Demonstrate the comma operator, which evaluates each of its operands (from left to right) and returns the value of the last operand.",
    category: "Synchronous",
    inputs: [],
    buttonText: "Test Comma Operator",
  },

  // =================================================================================================
  // ES6+ (50+)
  // =================================================================================================
  {
    id: "arrow-function-map",
    title: "Arrow Functions & `.map()`",
    description:
      "Given an array of numbers (as a comma-separated string), use an ES6 arrow function and the `.map()` method to create a new array where each number is doubled.",
    category: "ES6+",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        placeholder: "1, 2, 3, 4",
        defaultValue: "1, 2, 3, 4",
      },
    ],
    buttonText: "Double Numbers",
  },
  {
    id: "template-literals",
    title: "Template Literals",
    description:
      "Use template literals (backticks) to create a multi-line string with embedded expressions.",
    category: "ES6+",
    inputs: [
      {
        id: "name",
        label: "Name",
        type: "text",
        placeholder: "e.g., Jane",
        defaultValue: "Jane",
      },
      {
        id: "item",
        label: "Item",
        type: "text",
        placeholder: "e.g., apples",
        defaultValue: "apples",
      },
    ],
    buttonText: "Create String",
  },
  {
    id: "array-destructuring",
    title: "Array Destructuring",
    description:
      "Use destructuring assignment to unpack values from an array into distinct variables.",
    category: "ES6+",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        placeholder: "1, 2, 3",
        defaultValue: "1, 2, 3",
      },
    ],
    buttonText: "Destructure Array",
  },
  {
    id: "object-destructuring",
    title: "Object Destructuring",
    description:
      "Use destructuring assignment to unpack properties from a JSON object into distinct variables.",
    category: "ES6+",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        placeholder: '{"name": "John", "age": 30}',
        defaultValue: '{"name": "John", "age": 30}',
      },
    ],
    buttonText: "Destructure Object",
  },
  {
    id: "rest-parameters",
    title: "Rest Parameters",
    description:
      "Write a function that uses rest parameters to accept an indefinite number of arguments as an array and sum them.",
    category: "ES6+",
    inputs: [
      {
        id: "args",
        label: "Numbers to sum (comma-separated)",
        type: "text",
        placeholder: "1, 2, 3, 4",
        defaultValue: "1, 2, 3, 4",
      },
    ],
    buttonText: "Sum with Rest",
  },
  {
    id: "spread-operator-arrays",
    title: "Spread Operator for Arrays",
    description:
      "Use the spread operator (`...`) to combine two arrays into a single new array.",
    category: "ES6+",
    inputs: [
      {
        id: "arr1",
        label: "First Array (comma-separated)",
        type: "text",
        placeholder: "a, b, c",
        defaultValue: "a, b, c",
      },
      {
        id: "arr2",
        label: "Second Array (comma-separated)",
        type: "text",
        placeholder: "d, e, f",
        defaultValue: "d, e, f",
      },
    ],
    buttonText: "Combine Arrays",
  },
  {
    id: "spread-operator-objects",
    title: "Spread Operator for Objects",
    description: "Use the spread operator (`...`) to merge two JSON objects.",
    category: "ES6+",
    inputs: [
      {
        id: "json1",
        label: "First JSON Object",
        type: "textarea",
        placeholder: '{"a": 1}',
        defaultValue: '{"a": 1, "b": 2}',
      },
      {
        id: "json2",
        label: "Second JSON Object",
        type: "textarea",
        placeholder: '{"b": 3}',
        defaultValue: '{"b": 3, "c": 4}',
      },
    ],
    buttonText: "Merge Objects",
  },
  {
    id: "default-parameters",
    title: "Default Parameters",
    description:
      "Create a function that uses default parameter values for its arguments.",
    category: "ES6+",
    inputs: [
      {
        id: "name",
        label: "Name (optional)",
        type: "text",
        placeholder: "Enter name",
        defaultValue: "",
      },
    ],
    buttonText: "Greet",
  },
  {
    id: "es6-classes",
    title: "ES6 Classes",
    description:
      "Create a simple `Person` class with a constructor and a `greet` method.",
    category: "ES6+",
    inputs: [
      {
        id: "name",
        label: "Name",
        type: "text",
        placeholder: "e.g., Alice",
        defaultValue: "Alice",
      },
    ],
    buttonText: "Create and Greet",
  },
  {
    id: "class-inheritance",
    title: "Class Inheritance with `extends`",
    description:
      "Create a `Student` class that inherits from the `Person` class and adds a `study` method.",
    category: "ES6+",
    inputs: [
      { id: "name", label: "Student Name", type: "text", defaultValue: "Bob" },
      { id: "subject", label: "Subject", type: "text", defaultValue: "Math" },
    ],
    buttonText: "Create Student",
  },
  {
    id: "promise-basics",
    title: "Promise Basics",
    description: "Create a simple promise that resolves after a short delay.",
    category: "ES6+",
    inputs: [],
    buttonText: "Run Promise",
  },
  {
    id: "promise-rejection",
    title: "Promise Rejection",
    description:
      "Create a promise that rejects and handle the rejection using `.catch()`.",
    category: "ES6+",
    inputs: [],
    buttonText: "Run Rejecting Promise",
  },
  {
    id: "set-data-structure",
    title: "`Set` for Unique Values",
    description:
      "Use a `Set` to store only the unique values from an array with duplicates.",
    category: "ES6+",
    inputs: [
      {
        id: "arr",
        label: "Array with duplicates (comma-separated)",
        type: "text",
        defaultValue: "a, b, a, c, b, d",
      },
    ],
    buttonText: "Get Unique Values",
  },
  {
    id: "map-data-structure",
    title: "`Map` for Key-Value Pairs",
    description:
      "Use a `Map` to store key-value pairs where keys can be any datatype. Create a map and retrieve a value.",
    category: "ES6+",
    inputs: [],
    buttonText: "Use Map",
  },
  {
    id: "string-includes",
    title: "`String.prototype.includes()`",
    description:
      "Use the `.includes()` method to check if a string contains a substring (case-sensitive).",
    category: "ES6+",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "The future is now.",
      },
      {
        id: "substr",
        label: "Substring to find",
        type: "text",
        defaultValue: "future",
      },
    ],
    buttonText: "Check Includes",
  },
  {
    id: "string-startswith",
    title: "`String.prototype.startsWith()`",
    description:
      "Use the `.startsWith()` method to check if a string begins with a specified substring.",
    category: "ES6+",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "JavaScript is fun",
      },
      {
        id: "substr",
        label: "Prefix to check",
        type: "text",
        defaultValue: "Java",
      },
    ],
    buttonText: "Check Starts With",
  },
  {
    id: "string-endswith",
    title: "`String.prototype.endsWith()`",
    description:
      "Use the `.endsWith()` method to check if a string ends with a specified substring.",
    category: "ES6+",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "JavaScript is fun",
      },
      {
        id: "substr",
        label: "Suffix to check",
        type: "text",
        defaultValue: "fun",
      },
    ],
    buttonText: "Check Ends With",
  },
  {
    id: "for-of-loop-es6",
    title: "`for...of` Loop",
    description:
      "Iterate over the elements of an array using the `for...of` loop to build a new string.",
    category: "ES6+",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "J,S,M,A,S,T,E,R,Y",
      },
    ],
    buttonText: "Iterate with for...of",
  },
  {
    id: "destructuring-in-function-params",
    title: "Destructuring in Function Parameters",
    description:
      "Create a function that accepts a JSON object and uses destructuring directly in the parameter list to access its properties.",
    category: "ES6+",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        defaultValue: '{"name": "Test User", "id": 123, "isAdmin": true}',
      },
    ],
    buttonText: "Get User Info",
  },
  {
    id: "array-find-es6",
    title: "`Array.prototype.find()`",
    description:
      "Use the `.find()` method to get the first element in an array that satisfies a testing function.",
    category: "ES6+",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "5, 12, 8, 130, 44",
      },
    ],
    buttonText: "Find First > 10",
  },
  {
    id: "modules-conceptual",
    title: "ES6 Modules (Conceptual)",
    description:
      "This example conceptually demonstrates how you would use `export` to expose a function from one file and `import` to use it in another.",
    category: "ES6+",
    inputs: [],
    buttonText: "Show Module Code",
  },
  {
    id: "symbol-data-type",
    title: "`Symbol` Data Type",
    description:
      "Create a symbol and use it as a property key in an object to demonstrate its use for creating unique properties.",
    category: "ES6+",
    inputs: [],
    buttonText: "Use Symbol",
  },
  {
    id: "generators-basic",
    title: "Basic Generators",
    description:
      "Create a simple generator function that yields a sequence of numbers.",
    category: "ES6+",
    inputs: [],
    buttonText: "Generate Numbers",
  },
  {
    id: "optional-chaining",
    title: "Optional Chaining `?.`",
    description:
      "Use optional chaining to safely access nested properties of an object that might not exist, avoiding errors.",
    category: "ES6+",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        defaultValue: '{"user": {"profile": {"name": "Alice"}}}',
      },
    ],
    buttonText: "Access Nested Property",
  },
  {
    id: "nullish-coalescing",
    title: "Nullish Coalescing Operator `??`",
    description:
      'Use the nullish coalescing operator to provide a default value for a variable that is `null` or `undefined`, but not for other falsy values like `0` or `""`.',
    category: "ES6+",
    inputs: [
      {
        id: "value",
        label: 'Input Value (try null, undefined, 0, "")',
        type: "text",
        defaultValue: "null",
      },
    ],
    buttonText: "Get Value with ??",
  },
  {
    id: "array-flat",
    title: "`Array.prototype.flat()`",
    description:
      "Use the `.flat()` method to create a new array with all sub-array elements concatenated into it recursively up to a specified depth.",
    category: "ES6+",
    inputs: [
      {
        id: "jsonArr",
        label: "Nested Array (JSON)",
        type: "textarea",
        defaultValue: "[1, 2, [3, 4, [5, 6]]]",
      },
      { id: "depth", label: "Depth", type: "number", defaultValue: 1 },
    ],
    buttonText: "Flatten Array",
  },
  {
    id: "array-flatMap",
    title: "`Array.prototype.flatMap()`",
    description:
      "Use `.flatMap()` to first map each element using a mapping function, and then flatten the result into a new array. It is identical to a `map()` followed by a `flat()` of depth 1.",
    category: "ES6+",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "1, 2, 3, 4",
      },
    ],
    buttonText: "Map and Flatten",
  },
  {
    id: "object-fromentries",
    title: "`Object.fromEntries()`",
    description:
      "Use `Object.fromEntries()` to transform a list of key-value pairs (an array of arrays) into an object.",
    category: "ES6+",
    inputs: [
      {
        id: "jsonArr",
        label: "Array of Pairs (JSON)",
        type: "textarea",
        defaultValue: '[["name", "Sonia"], ["level", 99]]',
      },
    ],
    buttonText: "Create Object",
  },
  {
    id: "globalthis",
    title: "`globalThis`",
    description:
      "Use `globalThis` to access the global object, regardless of the context (window, global, self).",
    category: "ES6+",
    inputs: [],
    buttonText: "Identify Global Object",
  },
  {
    id: "promise-all",
    title: "`Promise.all()`",
    description:
      "Use `Promise.all()` to wait for multiple promises to resolve and get an array of their results.",
    category: "ES6+",
    inputs: [],
    buttonText: "Run Parallel Promises",
  },
  {
    id: "promise-race",
    title: "`Promise.race()`",
    description:
      "Use `Promise.race()` to get the result of the first promise that resolves or rejects.",
    category: "ES6+",
    inputs: [],
    buttonText: "Race Promises",
  },
  {
    id: "promise-finally",
    title: "`Promise.prototype.finally()`",
    description:
      "Use `.finally()` to execute code after a promise is settled (either fulfilled or rejected).",
    category: "ES6+",
    inputs: [],
    buttonText: "Run Promise with Finally",
  },
  {
    id: "string-matchall",
    title: "`String.prototype.matchAll()`",
    description:
      "Use `matchAll()` with a regular expression to get an iterator of all results matching a string.",
    category: "ES6+",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "test1test2" },
      {
        id: "regex",
        label: "Regex (without /g)",
        type: "text",
        defaultValue: "t(e)(st(\\d?))",
      },
    ],
    buttonText: "Find All Matches",
  },
  {
    id: "dynamic-import",
    title: "Dynamic `import()` (Conceptual)",
    description:
      "This demonstrates the syntax for dynamic `import()`, which allows loading modules on demand. This is useful for code splitting.",
    category: "ES6+",
    inputs: [],
    buttonText: "Show Dynamic Import",
  },
  {
    id: "bigint",
    title: "`BigInt`",
    description:
      "Use `BigInt` to safely represent and operate on integers larger than the number `MAX_SAFE_INTEGER`.",
    category: "ES6+",
    inputs: [],
    buttonText: "Use BigInt",
  },
  {
    id: "string-replaceall",
    title: "`String.prototype.replaceAll()`",
    description:
      "Use `.replaceAll()` to replace all occurrences of a substring with a new substring.",
    category: "ES6+",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "The cat saw another cat.",
      },
      { id: "search", label: "To Replace", type: "text", defaultValue: "cat" },
      {
        id: "replace",
        label: "Replace With",
        type: "text",
        defaultValue: "dog",
      },
    ],
    buttonText: "Replace All",
  },
  {
    id: "promise-any",
    title: "`Promise.any()`",
    description:
      "Use `Promise.any()` to get the result of the first promise that fulfills. It ignores rejected promises until all have rejected.",
    category: "ES6+",
    inputs: [],
    buttonText: "Get First Fulfilled",
  },
  {
    id: "weakset",
    title: "`WeakSet`",
    description:
      'Demonstrate `WeakSet`, which holds "weak" references to objects, allowing them to be garbage collected if no other references exist.',
    category: "ES6+",
    inputs: [],
    buttonText: "Test WeakSet",
  },
  {
    id: "weakmap",
    title: "`WeakMap`",
    description:
      "Demonstrate `WeakMap`, which allows garbage collection of its keys if they are no longer referenced elsewhere.",
    category: "ES6+",
    inputs: [],
    buttonText: "Test WeakMap",
  },
  {
    id: "class-static-methods",
    title: "Class Static Methods",
    description:
      "Define and call a static method on a class. Static methods are called on the class itself, not on instances of the class.",
    category: "ES6+",
    inputs: [],
    buttonText: "Call Static Method",
  },
  {
    id: "class-getters-setters",
    title: "Class Getters and Setters",
    description:
      "Use `get` and `set` syntax to create a computed property in a class.",
    category: "ES6+",
    inputs: [
      {
        id: "firstName",
        label: "First Name",
        type: "text",
        defaultValue: "John",
      },
      { id: "lastName", label: "Last Name", type: "text", defaultValue: "Doe" },
    ],
    buttonText: "Use Getter/Setter",
  },
  {
    id: "array-from-mapping",
    title: "`Array.from()` with Mapping",
    description:
      "Use the mapping function argument of `Array.from()` to create a new array and transform its elements in one step.",
    category: "ES6+",
    inputs: [
      { id: "length", label: "Array Length", type: "number", defaultValue: 5 },
    ],
    buttonText: "Create and Map",
  },
  {
    id: "object-getownpropertysymbols",
    title: "`Object.getOwnPropertySymbols()`",
    description:
      "Use this method to retrieve an array of all symbol properties found directly upon a given object.",
    category: "ES6+",
    inputs: [],
    buttonText: "Get Symbol Properties",
  },
  {
    id: "destructuring-with-rest",
    title: "Destructuring with Rest Syntax",
    description:
      "Use rest syntax in a destructuring assignment to capture the remaining elements of an array.",
    category: "ES6+",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c,d,e",
      },
    ],
    buttonText: "Destructure with Rest",
  },
  {
    id: "destructuring-default-values",
    title: "Destructuring with Default Values",
    description:
      "Provide default values for variables in an object destructuring assignment, to be used if the property is missing from the object.",
    category: "ES6+",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        defaultValue: '{"name": "Alice"}',
      },
    ],
    buttonText: "Destructure with Defaults",
  },
  {
    id: "async-generators",
    title: "Async Generators",
    description:
      "Create an async generator that yields data fetched from an API.",
    category: "ES6+",
    inputs: [],
    buttonText: "Run Async Generator",
  },
  {
    id: "class-private-fields",
    title: "Class Private Fields `#`",
    description:
      "Use the `#` prefix to create private fields within a class that cannot be accessed from outside the class.",
    category: "ES6+",
    inputs: [],
    buttonText: "Test Private Field",
  },
  {
    id: "at-method",
    title: "`.at()` Method for Indexing",
    description:
      "Use the `.at()` method on an array to access elements from the end using negative indices.",
    category: "ES6+",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c,d,e",
      },
      {
        id: "index",
        label: "Index (can be negative)",
        type: "number",
        defaultValue: -2,
      },
    ],
    buttonText: "Get Element with .at()",
  },
  {
    id: "object-hasown",
    title: "`Object.hasOwn()`",
    description:
      "Use `Object.hasOwn()` as a more robust alternative to `hasOwnProperty` to check for direct properties on an object.",
    category: "ES6+",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        defaultValue: '{"prop": "exists"}',
      },
      { id: "key", label: "Property Key", type: "text", defaultValue: "prop" },
    ],
    buttonText: "Check with hasOwn",
  },

  // =================================================================================================
  // ASYNCHRONOUS (50+)
  // =================================================================================================
  {
    id: "fetch-api-data",
    title: "Fetch API Data",
    description:
      "Use the Fetch API to get data from a public API (JSONPlaceholder). Click the button to fetch the title of the first todo item.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Fetch Todo",
  },
  {
    id: "async-await-syntax",
    title: "`async/await` Syntax",
    description:
      "Rewrite the Fetch API example using the more modern `async/await` syntax for cleaner asynchronous code.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Fetch with async/await",
  },
  {
    id: "settimeout-callback",
    title: "`setTimeout` Callback",
    description:
      "Use `setTimeout` to execute a function after a specified delay.",
    category: "Asynchronous",
    inputs: [
      {
        id: "delay",
        label: "Delay (ms)",
        type: "number",
        placeholder: "e.g., 2000",
        defaultValue: 2000,
      },
    ],
    buttonText: "Run with Delay",
  },
  {
    id: "setinterval-example",
    title: "`setInterval` Example",
    description:
      "Use `setInterval` to run a function repeatedly at a specified interval. The example will count up and stop after a few iterations.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Start Interval",
  },
  {
    id: "promise-chaining",
    title: "Promise Chaining",
    description:
      "Chain multiple `.then()` calls to perform a sequence of asynchronous operations.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Run Promise Chain",
  },
  {
    id: "promise-all-async",
    title: "`Promise.all` with `async/await`",
    description:
      "Use `Promise.all` within an `async` function to fetch data from multiple API endpoints concurrently.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Fetch Multiple Todos",
  },
  {
    id: "error-handling-async-await",
    title: "Error Handling with `async/await`",
    description:
      "Use a `try...catch` block inside an `async` function to handle potential errors from a failed API request.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Fetch with Error Handling",
  },
  {
    id: "callback-hell-simulation",
    title: "Callback Hell Simulation",
    description:
      'Simulate "callback hell" with nested `setTimeout` calls to demonstrate why Promises and async/await are preferred.',
    category: "Asynchronous",
    inputs: [],
    buttonText: "Simulate Callback Hell",
  },
  {
    id: "promisify-a-callback",
    title: "Promisify a Callback Function",
    description:
      "Convert a traditional callback-based asynchronous function (like `setTimeout`) into a modern promise-based function.",
    category: "Asynchronous",
    inputs: [
      { id: "delay", label: "Delay (ms)", type: "number", defaultValue: 1500 },
    ],
    buttonText: "Run Promisified Function",
  },
  {
    id: "fetch-post-request",
    title: "Fetch POST Request",
    description:
      "Use the Fetch API to send a POST request with a JSON body to a public API endpoint.",
    category: "Asynchronous",
    inputs: [
      {
        id: "title",
        label: "Post Title",
        type: "text",
        defaultValue: "My New Post",
      },
      {
        id: "body",
        label: "Post Body",
        type: "textarea",
        defaultValue: "This is the content of the post.",
      },
    ],
    buttonText: "Create Post",
  },
  {
    id: "xmlhttprequest-get",
    title: "XMLHttpRequest GET Request (Legacy)",
    description:
      "Use the older `XMLHttpRequest` object to make an asynchronous GET request to an API.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Fetch with XHR",
  },
  {
    id: "concurrent-async-tasks",
    title: "Concurrent Async Tasks",
    description:
      "Start multiple independent asynchronous tasks and log their results as they complete, without waiting for all of them.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Run Concurrent Tasks",
  },
  {
    id: "sequential-async-tasks",
    title: "Sequential Async Tasks",
    description:
      "Use `await` in a loop to perform a series of asynchronous tasks one after another.",
    category: "Asynchronous",
    inputs: [
      {
        id: "ids",
        label: "Todo IDs to fetch (comma-separated)",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Fetch Sequentially",
  },
  {
    id: "promise-race-timeout",
    title: "`Promise.race` for Timeout",
    description:
      "Use `Promise.race` to implement a timeout for a slow asynchronous operation. If the operation takes too long, it will reject.",
    category: "Asynchronous",
    inputs: [
      {
        id: "timeout",
        label: "Timeout (ms)",
        type: "number",
        defaultValue: 1000,
      },
    ],
    buttonText: "Race against Timeout",
  },
  {
    id: "async-function-return-value",
    title: "`async` Function Return Value",
    description:
      "Demonstrate that an `async` function always returns a promise, and the `return` value is the resolved value of that promise.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Get Async Return",
  },
  {
    id: "microtask-macrotask-queue",
    title: "Microtask vs. Macrotask Queue",
    description:
      "Show the execution order difference between a microtask (`Promise.resolve().then()`) and a macrotask (`setTimeout`) to illustrate event loop priorities.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Test Event Loop Order",
  },
  {
    id: "async-iteration-for-await-of",
    title: "Async Iteration with `for await...of`",
    description:
      "Use a `for await...of` loop to iterate over an asynchronous iterable (like a stream of data).",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Run Async Iterator",
  },
  {
    id: "custom-promise",
    title: "Create a Custom Promise",
    description:
      "Manually create a new Promise using the `Promise` constructor to wrap an asynchronous operation.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Create and Run",
  },
  {
    id: "promise-allsettled",
    title: "`Promise.allSettled()`",
    description:
      "Use `Promise.allSettled()` to wait for all promises to settle (either fulfill or reject), which is useful when you need to know the outcome of every promise.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Run allSettled",
  },
  {
    id: "top-level-await-conceptual",
    title: "Top-Level `await` (Conceptual)",
    description:
      "This demonstrates the syntax for top-level `await`, which allows using the `await` keyword outside of an `async` function in ES modules.",
    category: "Asynchronous",
    inputs: [],
    buttonText: "Show Top-Level Await",
  },

  // =================================================================================================
  // WEB APIS & DOM (50+)
  // =================================================================================================
  {
    id: "dom-get-element-by-id",
    title: "Get Element by ID",
    description:
      "Use `document.getElementById` to select a specific DOM element and change its text content.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Change Text by ID",
  },
  {
    id: "dom-queryselector",
    title: "Query Selector",
    description:
      "Use `document.querySelector` with a CSS selector to find the first matching element and change its style.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Change Style with Query",
  },
  {
    id: "dom-queryselectorall",
    title: "Query Selector All",
    description:
      "Use `document.querySelectorAll` to select all elements matching a selector and apply a change to each of them.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Change All List Items",
  },
  {
    id: "dom-addeventlistener",
    title: "Add Event Listener",
    description:
      "Attach a `click` event listener to a button that triggers an alert.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Click Me (Event Listener)",
  },
  {
    id: "dom-create-element",
    title: "Create and Append Element",
    description:
      "Use `document.createElement` and `appendChild` to dynamically create a new list item and add it to an existing list.",
    category: "Web APIs & DOM",
    inputs: [
      {
        id: "text",
        label: "Text for new item",
        type: "text",
        defaultValue: "New Item",
      },
    ],
    buttonText: "Add Item to List",
  },
  {
    id: "dom-remove-element",
    title: "Remove Element",
    description:
      "Select an element and use the `.remove()` method to remove it from the DOM.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Remove Last Item",
  },
  {
    id: "dom-toggle-class",
    title: "Toggle a CSS Class",
    description:
      "Use `element.classList.toggle()` to add or remove a CSS class from an element, changing its appearance.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Toggle Highlight",
  },
  {
    id: "dom-get-set-attribute",
    title: "Get and Set Attribute",
    description:
      "Use `getAttribute` to read an attribute and `setAttribute` to change the `href` of a link.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Change Link",
  },
  {
    id: "dom-innerhtml",
    title: "Manipulate with `innerHTML`",
    description:
      "Use the `innerHTML` property to replace the entire content of an element with new HTML.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Replace Content",
  },
  {
    id: "dom-textcontent",
    title: "Manipulate with `textContent`",
    description:
      "Use the `textContent` property to change only the text inside an element, ignoring any HTML.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Change Text Content",
  },
  {
    id: "localstorage-set-get",
    title: "LocalStorage: Set & Get",
    description:
      "Use `localStorage.setItem()` to save data that persists even after the browser is closed, and `localStorage.getItem()` to retrieve it.",
    category: "Web APIs & DOM",
    inputs: [
      { id: "key", label: "Key", type: "text", defaultValue: "userTheme" },
      { id: "value", label: "Value", type: "text", defaultValue: "dark" },
    ],
    buttonText: "Save to localStorage",
  },
  {
    id: "localstorage-remove",
    title: "LocalStorage: Remove Item",
    description:
      "Use `localStorage.removeItem()` to delete a specific item from local storage.",
    category: "Web APIs & DOM",
    inputs: [
      {
        id: "key",
        label: "Key to Remove",
        type: "text",
        defaultValue: "userTheme",
      },
    ],
    buttonText: "Remove from localStorage",
  },
  {
    id: "sessionstorage",
    title: "SessionStorage",
    description:
      "Use `sessionStorage.setItem()` to save data for a single browser session. The data is cleared when the tab is closed.",
    category: "Web APIs & DOM",
    inputs: [
      { id: "key", label: "Key", type: "text", defaultValue: "sessionID" },
      { id: "value", label: "Value", type: "text", defaultValue: "xyz-123" },
    ],
    buttonText: "Save to sessionStorage",
  },
  {
    id: "geolocation-api",
    title: "Geolocation API",
    description:
      "Use the Geolocation API (`navigator.geolocation`) to get the user's current latitude and longitude. Requires browser permission.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Get My Location",
  },
  {
    id: "dom-event-delegation",
    title: "Event Delegation",
    description:
      "Attach a single event listener to a parent element to handle events from its child elements, improving performance.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Add Item & Test Delegation",
  },
  {
    id: "web-worker-simple",
    title: "Simple Web Worker",
    description:
      "Use a Web Worker to perform a heavy calculation in a background thread without freezing the main UI thread.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Run Heavy Calculation",
  },
  {
    id: "history-api",
    title: "History API (`pushState`)",
    description:
      "Use `history.pushState()` to change the browser URL without a full page refresh, a key part of single-page applications (SPAs).",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Change URL with pushState",
  },
  {
    id: "intersection-observer",
    title: "Intersection Observer API",
    description:
      "Use the Intersection Observer to detect when an element becomes visible in the viewport, useful for lazy loading images or triggering animations.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Observe Element",
  },
  {
    id: "canvas-api-simple-drawing",
    title: "Canvas API: Simple Drawing",
    description:
      "Use the Canvas API to draw a simple shape (e.g., a rectangle) onto a canvas element.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Draw on Canvas",
  },
  {
    id: "audio-api-play",
    title: "Web Audio API: Play Sound",
    description:
      "Use the Web Audio API to load and play a sound file on a button click.",
    category: "Web APIs & DOM",
    inputs: [],
    buttonText: "Play Sound",
  },

  // =================================================================================================
  // ALGORITHMS (50+)
  // =================================================================================================
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of numbers and a target, return the indices of the two numbers that add up to the target.",
    category: "Algorithms",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "2, 7, 11, 15",
      },
      { id: "target", label: "Target Sum", type: "number", defaultValue: 9 },
    ],
    buttonText: "Find Indices",
  },
  {
    id: "binary-search",
    title: "Binary Search",
    description:
      "Implement a binary search algorithm to find the index of a target value in a sorted array.",
    category: "Algorithms",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array (comma-separated)",
        type: "text",
        defaultValue: "2, 5, 7, 8, 11, 12",
      },
      { id: "target", label: "Target Value", type: "number", defaultValue: 12 },
    ],
    buttonText: "Binary Search",
  },
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    description:
      "Implement the bubble sort algorithm to sort an array of numbers in ascending order.",
    category: "Algorithms",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "64, 34, 25, 12, 22, 11, 90",
      },
    ],
    buttonText: "Bubble Sort",
  },
  {
    id: "selection-sort",
    title: "Selection Sort",
    description:
      "Implement the selection sort algorithm to sort an array of numbers.",
    category: "Algorithms",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "29, 10, 14, 37, 13",
      },
    ],
    buttonText: "Selection Sort",
  },
  {
    id: "insertion-sort",
    title: "Insertion Sort",
    description:
      "Implement the insertion sort algorithm to sort an array of numbers.",
    category: "Algorithms",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "12, 11, 13, 5, 6",
      },
    ],
    buttonText: "Insertion Sort",
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    description:
      "Implement the merge sort algorithm, a classic divide-and-conquer sorting algorithm.",
    category: "Algorithms",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "38, 27, 43, 3, 9, 82, 10",
      },
    ],
    buttonText: "Merge Sort",
  },
  {
    id: "quick-sort",
    title: "Quick Sort",
    description:
      "Implement the quick sort algorithm, another efficient divide-and-conquer sorting algorithm.",
    category: "Algorithms",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers (comma-separated)",
        type: "text",
        defaultValue: "10, 7, 8, 9, 1, 5",
      },
    ],
    buttonText: "Quick Sort",
  },
  {
    id: "max-subarray-sum",
    title: "Maximum Subarray Sum",
    description:
      "Given an array of integers, find the contiguous subarray with the largest sum using Kadane's algorithm.",
    category: "Algorithms",
    inputs: [
      {
        id: "arr",
        label: "Array of integers (comma-separated)",
        type: "text",
        defaultValue: "-2, 1, -3, 4, -1, 2, 1, -5, 4",
      },
    ],
    buttonText: "Find Max Sum",
  },
  {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    description:
      "Given a string, find the longest substring which is a palindrome.",
    category: "Algorithms",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "babad" },
    ],
    buttonText: "Find Longest Palindrome",
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description:
      "Given a string containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.",
    category: "Algorithms",
    inputs: [
      {
        id: "str",
        label: "String of parentheses",
        type: "text",
        defaultValue: "()[]{}",
      },
    ],
    buttonText: "Check Validity",
  },
  {
    id: "caesar-cipher",
    title: "Caesar Cipher",
    description:
      "Implement a Caesar cipher, a simple substitution cipher where each letter is shifted by a certain number of places down the alphabet.",
    category: "Algorithms",
    inputs: [
      {
        id: "str",
        label: "String to encrypt",
        type: "text",
        defaultValue: "Hello, World!",
      },
      { id: "shift", label: "Shift amount", type: "number", defaultValue: 3 },
    ],
    buttonText: "Encrypt",
  },
  {
    id: "sieve-of-eratosthenes",
    title: "Sieve of Eratosthenes",
    description:
      "Implement the Sieve of Eratosthenes algorithm to find all prime numbers up to a specified number.",
    category: "Algorithms",
    inputs: [
      {
        id: "num",
        label: "Find primes up to",
        type: "number",
        defaultValue: 30,
      },
    ],
    buttonText: "Find Primes",
  },

  // =================================================================================================
  // DATA STRUCTURES (50+)
  // =================================================================================================
  {
    id: "implement-stack",
    title: "Implement a Stack",
    description:
      "Implement a Stack class with `push`, `pop`, `peek`, and `isEmpty` methods. A stack is a LIFO (Last-In, First-Out) data structure.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Stack",
  },
  {
    id: "implement-queue",
    title: "Implement a Queue",
    description:
      "Implement a Queue class with `enqueue`, `dequeue`, `front`, and `isEmpty` methods. A queue is a FIFO (First-In, First-Out) data structure.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Queue",
  },
  {
    id: "implement-singly-linked-list",
    title: "Implement a Singly Linked List",
    description:
      "Implement a Singly Linked List with methods to `append`, `prepend`, `delete`, and `find` nodes.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Linked List",
  },
  {
    id: "reverse-linked-list",
    title: "Reverse a Linked List",
    description: "Write a function to reverse a singly linked list.",
    category: "Data Structures",
    inputs: [
      {
        id: "arr",
        label: "Initial list values (comma-separated)",
        type: "text",
        defaultValue: "1,2,3,4,5",
      },
    ],
    buttonText: "Reverse List",
  },
  {
    id: "implement-hash-table",
    title: "Implement a Hash Table",
    description:
      "Implement a simple Hash Table (or Map) with `set`, `get`, and `remove` methods, handling collisions with chaining.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Hash Table",
  },
  {
    id: "binary-search-tree-traversal",
    title: "Binary Search Tree Traversals",
    description:
      "Implement a Binary Search Tree (BST) and its three main traversal methods: In-order, Pre-order, and Post-order.",
    category: "Data Structures",
    inputs: [
      {
        id: "arr",
        label: "Values to insert (comma-separated)",
        type: "text",
        defaultValue: "8,3,10,1,6,14,4,7,13",
      },
    ],
    buttonText: "Traverse BST",
  },
  {
    id: "graph-bfs",
    title: "Graph: Breadth-First Search (BFS)",
    description:
      "Implement a breadth-first search traversal for a graph represented by an adjacency list.",
    category: "Data Structures",
    inputs: [
      { id: "startNode", label: "Start Node", type: "text", defaultValue: "A" },
    ],
    buttonText: "Run BFS",
  },
  {
    id: "graph-dfs",
    title: "Graph: Depth-First Search (DFS)",
    description:
      "Implement a depth-first search traversal for a graph represented by an adjacency list.",
    category: "Data Structures",
    inputs: [
      { id: "startNode", label: "Start Node", type: "text", defaultValue: "A" },
    ],
    buttonText: "Run DFS",
  },
];
