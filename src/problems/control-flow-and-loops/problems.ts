import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "if-statement-basic",
    title: "Simple `if` Statement",
    description:
      "Write a function that returns 'Access Granted' if a given password is 'secret123', and returns nothing otherwise.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "password",
        label: "Password",
        type: "text",
        defaultValue: "secret123",
      },
    ],
    buttonText: "Check Password",
    difficulty: "Beginner",
  },
  // problem--> 02
  {
    id: "if-else-statement",
    title: "`if...else` Statement",
    description:
      "Write a function that returns 'Adult' if an age is 18 or greater, and 'Minor' otherwise.",
    category: "Control Flow and Loops",
    inputs: [{ id: "age", label: "Age", type: "number", defaultValue: 25 }],
    buttonText: "Check Age",
    difficulty: "Beginner",
  },
  // problem--> 03
  {
    id: "else-if-statement",
    title: "`else if` Statement",
    description:
      "Write a function that returns 'Positive', 'Negative', or 'Zero' for a given number using `if...else if...else`.",
    category: "Control Flow and Loops",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: -10 }],
    buttonText: "Check Number",
    difficulty: "Beginner",
  },
  // problem--> 04
  {
    id: "ternary-operator-basic",
    title: "Ternary Operator",
    description:
      "Use the ternary operator to return 'Welcome' if a user is logged in (`true`), or 'Please log in' otherwise.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "isLoggedIn",
        label: "Is Logged In? (true/false)",
        type: "text",
        defaultValue: "true",
      },
    ],
    buttonText: "Get Message",
    difficulty: "Beginner",
  },
  // problem--> 05
  {
    id: "switch-statement-basic",
    title: "Simple `switch` Statement",
    description:
      "Use a `switch` statement to return the name of the day for a given day number (1 for 'Monday', 2 for 'Tuesday', etc.). Include a default case for invalid numbers.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "dayNumber",
        label: "Day Number (1-7)",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Get Day Name",
    difficulty: "Beginner",
  },
  // problem--> 06
  {
    id: "switch-fallthrough",
    title: "`switch` with Fall-through",
    description:
      "Use a `switch` statement where multiple cases share the same code block to determine if a day is a 'Weekday' or 'Weekend'.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "day",
        label: "Day of the week",
        type: "text",
        defaultValue: "Saturday",
      },
    ],
    buttonText: "Check Day Type",
    difficulty: "Beginner",
  },
  // problem--> 07
  {
    id: "nested-if-statement",
    title: "Nested `if` Statement",
    description:
      "Write a function that uses a nested `if` statement to check if a number is positive AND even.",
    category: "Control Flow and Loops",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 12 }],
    buttonText: "Check Number",
    difficulty: "Beginner",
  },
  // problem--> 08
  {
    id: "logical-and-guard",
    title: "Logical AND for Guarding",
    description:
      "Use the `&&` operator as a guard to call a function only if a variable is true.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "shouldRun",
        label: "Should Function Run? (true/false)",
        type: "text",
        defaultValue: "true",
      },
    ],
    buttonText: "Run Guarded Function",
    difficulty: "Beginner",
  },
  // problem--> 09
  {
    id: "logical-or-default",
    title: "Logical OR for Defaults",
    description:
      "Use the `||` operator to provide a default username if the input is an empty string.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "username", label: "Username", type: "text", defaultValue: "" },
    ],
    buttonText: "Get Username",
    difficulty: "Beginner",
  },
  // problem--> 10
  {
    id: "nullish-coalescing-default",
    title: "Nullish Coalescing (`??`) for Defaults",
    description:
      "Use the `??` operator to provide a default value, showing how it differs from `||` by allowing `0` as a valid input.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "value",
        label: "Input Value (0, null, or text)",
        type: "text",
        defaultValue: "0",
      },
    ],
    buttonText: "Get Value",
    difficulty: "Beginner",
  },
  // problem--> 11
  {
    id: "check-voting-eligibility",
    title: "Check Voting Eligibility",
    description:
      "Write a function that checks if a person is eligible to vote based on age (>= 18) and citizenship (isCitizen === true).",
    category: "Control Flow and Loops",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 20 },
      {
        id: "isCitizen",
        label: "Is Citizen? (true/false)",
        type: "text",
        defaultValue: "true",
      },
    ],
    buttonText: "Check Eligibility",
    difficulty: "Beginner",
  },
  // problem--> 12
  {
    id: "movie-ticket-price",
    title: "Movie Ticket Price Calculator",
    description:
      "Calculate the price of a movie ticket based on age: under 12 is $5, 12-64 is $10, 65 and over is $7.",
    category: "Control Flow and Loops",
    inputs: [{ id: "age", label: "Age", type: "number", defaultValue: 30 }],
    buttonText: "Get Ticket Price",
    difficulty: "Beginner",
  },
  // problem--> 13
  {
    id: "season-finder",
    title: "Season Finder",
    description:
      "Given a month number (1-12), determine the season (e.g., Winter for 12, 1, 2).",
    category: "Control Flow and Loops",
    inputs: [
      { id: "month", label: "Month (1-12)", type: "number", defaultValue: 7 },
    ],
    buttonText: "Find Season",
    difficulty: "Beginner",
  },
  // problem--> 14
  {
    id: "check-leap-year",
    title: "Check for Leap Year",
    description:
      "Write a function that takes a year and returns `true` if it's a leap year, and `false` otherwise. (A leap year is divisible by 4, except for years divisible by 100 unless they are also divisible by 400).",
    category: "Control Flow and Loops",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 2024 }],
    buttonText: "Check Year",
    difficulty: "Beginner",
  },
  // problem--> 15
  {
    id: "simple-calculator-switch",
    title: "Simple Calculator with `switch`",
    description:
      "Write a function that takes two numbers and an operator ('+', '-', '*', '/') and returns the result using a `switch` statement.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "operator", label: "Operator", type: "text", defaultValue: "*" },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate",
    difficulty: "Beginner",
  },
  // --- Basic Loops ---
  // problem--> 16
  {
    id: "for-loop-basic",
    title: "Simple `for` Loop",
    description:
      "Use a `for` loop to generate a string of numbers from 0 to 4.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Run Loop",
    difficulty: "Beginner",
  },
  // problem--> 17
  {
    id: "for-loop-countdown",
    title: "`for` Loop Countdown",
    description:
      "Use a `for` loop to generate a countdown string from a given number down to 1.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "start",
        label: "Start Countdown from",
        type: "number",
        defaultValue: 5,
      },
    ],
    buttonText: "Start Countdown",
    difficulty: "Beginner",
  },
  // problem--> 18
  {
    id: "for-loop-sum",
    title: "Sum with a `for` Loop",
    description:
      "Use a `for` loop to calculate the sum of all numbers from 1 to a given number.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "num", label: "Sum up to", type: "number", defaultValue: 10 },
    ],
    buttonText: "Calculate Sum",
    difficulty: "Beginner",
  },
  // problem--> 19
  {
    id: "for-loop-over-array",
    title: "Iterate an Array with `for`",
    description:
      "Use a classic `for` loop with an index to iterate through an array and build a string of its elements.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "apple,banana,cherry",
      },
    ],
    buttonText: "Iterate",
    difficulty: "Beginner",
  },
  // problem--> 20
  {
    id: "while-loop-basic",
    title: "Simple `while` Loop",
    description: "Use a `while` loop to count from 1 up to 5.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Run Loop",
    difficulty: "Beginner",
  },
  // problem--> 21
  {
    id: "do-while-loop-basic",
    title: "`do...while` Loop",
    description:
      "Use a `do...while` loop that executes at least once, even if the condition is initially false.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Run Loop",
    difficulty: "Beginner",
  },
  // problem--> 22
  {
    id: "for-loop-break",
    title: "Exit a Loop with `break`",
    description:
      "Use the `break` statement to exit a `for` loop early when a specific condition is met.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,9,4,5",
      },
    ],
    buttonText: "Find first number > 5",
    difficulty: "Beginner",
  },
  // problem--> 23
  {
    id: "for-loop-continue",
    title: "Skip an Iteration with `continue`",
    description:
      "Use the `continue` statement to skip processing negative numbers while summing all positive numbers in an array.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,-2,3,-4,5",
      },
    ],
    buttonText: "Sum Positive Numbers",
    difficulty: "Beginner",
  },
  // problem--> 24
  {
    id: "for-of-loop-array",
    title: "Iterate Array Values with `for...of`",
    description:
      "Use a `for...of` loop to iterate directly over the values of an array.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "JS,is,great",
      },
    ],
    buttonText: "Iterate",
    difficulty: "Beginner",
  },
  // problem--> 25
  {
    id: "for-in-loop-object",
    title: "Iterate Object Keys with `for...in`",
    description:
      "Use a `for...in` loop to iterate over the keys of an object and build a result string.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Iterate Object",
    difficulty: "Beginner",
  },
  // problem--> 26
  {
    id: "for-loop-even-numbers",
    title: "`for` Loop for Even Numbers",
    description:
      "Use a `for` loop to generate a string of all even numbers from 2 up to a given limit.",
    category: "Control Flow and Loops",
    inputs: [{ id: "limit", label: "Limit", type: "number", defaultValue: 10 }],
    buttonText: "Get Evens",
    difficulty: "Beginner",
  },
  // problem--> 27
  {
    id: "factorial-with-loop",
    title: "Factorial with a Loop",
    description: "Calculate the factorial of a number using a `for` loop.",
    category: "Control Flow and Loops",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Calculate Factorial",
    difficulty: "Beginner",
  },
  // problem--> 28
  {
    id: "while-loop-power-of-two",
    title: "Powers of Two with `while`",
    description:
      "Use a `while` loop to find all powers of two less than a given number.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "limit", label: "Limit", type: "number", defaultValue: 100 },
    ],
    buttonText: "Find Powers",
    difficulty: "Beginner",
  },
  // problem--> 29
  {
    id: "for-loop-step",
    title: "`for` Loop with a Custom Step",
    description:
      "Use a `for` loop that increments by a step other than 1 (e.g., by 3).",
    category: "Control Flow and Loops",
    inputs: [{ id: "limit", label: "Limit", type: "number", defaultValue: 15 }],
    buttonText: "Run Loop",
    difficulty: "Beginner",
  },
  // problem--> 30
  {
    id: "iterate-string-backwards",
    title: "Iterate a String Backwards",
    description:
      "Use a `for` loop to iterate over a string from the last character to the first.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Reverse",
    difficulty: "Beginner",
  },
  // --- Intermediate Conditionals & Loops ---
  // problem--> 31
  {
    id: "fizzbuzz-challenge",
    title: "FizzBuzz Challenge",
    description:
      "Loop from 1 to a given number. For multiples of 3, output 'Fizz'. For 5, 'Buzz'. For both, 'FizzBuzz'. Otherwise, the number.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "num", label: "Loop up to", type: "number", defaultValue: 15 },
    ],
    buttonText: "Run FizzBuzz",
    difficulty: "Intermediate",
  },
  // problem--> 32
  {
    id: "nested-for-loop-pattern-square",
    title: "Nested `for` Loop: Square Pattern",
    description:
      "Use nested `for` loops to create a solid square pattern of a given size.",
    category: "Control Flow and Loops",
    inputs: [{ id: "size", label: "Size", type: "number", defaultValue: 4 }],
    buttonText: "Create Square",
    difficulty: "Intermediate",
  },
  // problem--> 33
  {
    id: "find-prime-numbers",
    title: "Find Prime Numbers",
    description:
      "Write a function that uses loops to find all prime numbers up to a given number.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "limit",
        label: "Find primes up to",
        type: "number",
        defaultValue: 20,
      },
    ],
    buttonText: "Find Primes",
    difficulty: "Intermediate",
  },
  // problem--> 34
  {
    id: "iterate-string-characters",
    title: "Iterate String Characters",
    description:
      "Use a `for...of` loop to iterate through each character of a string and count the vowels.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "javascript loops",
      },
    ],
    buttonText: "Count Vowels",
    difficulty: "Beginner",
  },
  // problem--> 35
  {
    id: "find-max-in-array",
    title: "Find Maximum in Array",
    description: "Use a loop to find the largest number in an array.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "3, 9, 1, 20, 5",
      },
    ],
    buttonText: "Find Max",
    difficulty: "Beginner",
  },
  // problem--> 36
  {
    id: "find-min-in-array",
    title: "Find Minimum in Array",
    description: "Use a loop to find the smallest number in an array.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "3, 9, 1, 20, -5",
      },
    ],
    buttonText: "Find Min",
    difficulty: "Beginner",
  },
  // problem--> 37
  {
    id: "optional-chaining-in-if",
    title: "Optional Chaining in `if`",
    description:
      "Use optional chaining (`?.`) within an `if` statement to safely check a deeply nested property.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Check Nested Property",
    difficulty: "Intermediate",
  },
  // problem--> 38
  {
    id: "reverse-array-in-place",
    title: "Reverse an Array (in-place)",
    description:
      "Use a `for` loop to reverse the elements of an array in-place, without creating a new array.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,4,5" },
    ],
    buttonText: "Reverse",
    difficulty: "Intermediate",
  },
  // problem--> 39
  {
    id: "while-loop-user-input-simulation",
    title: "`while` Loop: Input Validation",
    description:
      "Simulate a user input prompt that keeps asking until a valid number (e.g., between 1 and 10) is entered.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Simulate Validation",
    difficulty: "Intermediate",
  },
  // problem--> 40
  {
    id: "switch-with-ranges",
    title: "`switch(true)` for Range Checks",
    description:
      "Use the `switch(true)` pattern to check a value against multiple conditions or ranges, like assigning a letter grade.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "score", label: "Score (0-100)", type: "number", defaultValue: 85 },
    ],
    buttonText: "Get Grade",
    difficulty: "Intermediate",
  },
  // problem--> 41
  {
    id: "infinite-loop-conceptual",
    title: "Infinite Loop (Conceptual)",
    description:
      "Explain what an infinite loop is and show an example of a `while` loop that would cause one.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Beginner",
  },
  // problem--> 42
  {
    id: "iterate-2d-array",
    title: "Iterate a 2D Array",
    description:
      "Use nested `for` loops to iterate through all elements of a 2D array (matrix) and find their sum.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "matrix",
        label: "2D Array (JSON)",
        type: "textarea",
        defaultValue: "[[1, 2], [3, 4], [5, 6]]",
      },
    ],
    buttonText: "Sum Matrix",
    difficulty: "Intermediate",
  },
  // problem--> 43
  {
    id: "for-in-vs-for-of",
    title: "`for...in` vs. `for...of`",
    description:
      "Declare an array and show how `for...in` iterates over its keys (indices) while `for...of` iterates over its values.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Compare Loops",
    difficulty: "Intermediate",
  },
  // problem--> 44
  {
    id: "for-in-pitfall-arrays",
    title: "`for...in` Pitfall with Arrays",
    description:
      "Demonstrate why using `for...in` to iterate over an array is a bad practice (iterates over non-index properties and prototype chain).",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Show Pitfall",
    difficulty: "Intermediate",
  },
  // problem--> 45
  {
    id: "labeled-statement-break",
    title: "Labeled Statement with `break`",
    description:
      "Use a labeled statement to break out of a nested loop from the inner loop.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Run Labeled Break",
    difficulty: "Intermediate",
  },
  // problem--> 46
  {
    id: "labeled-statement-continue",
    title: "Labeled Statement with `continue`",
    description:
      "Use a labeled statement with `continue` to skip to the next iteration of an outer loop from an inner loop.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Run Labeled Continue",
    difficulty: "Intermediate",
  },
  // problem--> 47
  {
    id: "sum-object-values",
    title: "Sum Object Values",
    description:
      "Use a `for...in` loop to iterate through the values of an object and calculate their sum.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "obj",
        label: "Object (JSON)",
        type: "textarea",
        defaultValue: '{"a": 10, "b": 20, "c": 30}',
      },
    ],
    buttonText: "Sum Values",
    difficulty: "Beginner",
  },
  // problem--> 48
  {
    id: "fibonacci-sequence-loop",
    title: "Fibonacci Sequence with a Loop",
    description:
      "Generate the Fibonacci sequence up to the Nth term using an iterative approach (a `for` loop).",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "terms",
        label: "Number of terms",
        type: "number",
        defaultValue: 10,
      },
    ],
    buttonText: "Generate Sequence",
    difficulty: "Intermediate",
  },
  // problem--> 49
  {
    id: "filter-array-with-loop",
    title: "Filter an Array with a Loop",
    description:
      "Use a `for...of` loop and an `if` statement to create a new array containing only the even numbers from an original array.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,3,4,5,6,7,8",
      },
    ],
    buttonText: "Filter Evens",
    difficulty: "Intermediate",
  },
  // problem--> 50
  {
    id: "map-array-with-loop",
    title: "Map an Array with a Loop",
    description:
      "Use a `for` loop to create a new array where each number from an original array is doubled.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,3,4",
      },
    ],
    buttonText: "Double Numbers",
    difficulty: "Intermediate",
  },
  // problem--> 51
  {
    id: "pyramid-pattern",
    title: "Pyramid Pattern",
    description: "Use nested loops to print a pyramid pattern of stars.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "rows", label: "Number of Rows", type: "number", defaultValue: 5 },
    ],
    buttonText: "Create Pyramid",
    difficulty: "Intermediate",
  },
  // problem--> 52
  {
    id: "diamond-pattern",
    title: "Diamond Pattern",
    description: "Use nested loops to print a diamond pattern of stars.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "height",
        label: "Height (odd number)",
        type: "number",
        defaultValue: 5,
      },
    ],
    buttonText: "Create Diamond",
    difficulty: "Intermediate",
  },
  // problem--> 53
  {
    id: "check-all-pass-loop",
    title: "Check if All Elements Pass",
    description:
      "Use a `for` loop to check if all elements in an array satisfy a condition (implementing `.every()`).",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "2, 4, 6, 8",
      },
    ],
    buttonText: "Check if all are even",
    difficulty: "Intermediate",
  },
  // problem--> 54
  {
    id: "check-some-pass-loop",
    title: "Check if Some Elements Pass",
    description:
      "Use a `for` loop to check if at least one element in an array satisfies a condition (implementing `.some()`).",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1, 3, 5, 8",
      },
    ],
    buttonText: "Check if some are even",
    difficulty: "Intermediate",
  },
  // problem--> 55
  {
    id: "find-first-match-loop",
    title: "Find First Match in Array",
    description:
      "Use a `for` loop and `break` to find the first element in an array that satisfies a condition.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "11, 15, 8, 20, 12",
      },
    ],
    buttonText: "Find first number < 10",
    difficulty: "Intermediate",
  },
  // problem--> 56
  {
    id: "remove-array-elements-loop",
    title: "Remove Elements from Array While Looping",
    description:
      "Demonstrate the correct way to remove elements from an array while iterating over it (by looping backwards).",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1, 2, 3, 4, 5, 6",
      },
    ],
    buttonText: "Remove Odd Numbers",
    difficulty: "Intermediate",
  },
  // problem--> 57
  {
    id: "switch-vs-object-literal",
    title: "`switch` vs. Object Literal Lookup",
    description:
      "Rewrite a `switch` statement that returns values into a more concise object literal lookup.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "command", label: "Command", type: "text", defaultValue: "save" },
    ],
    buttonText: "Execute Command",
    difficulty: "Intermediate",
  },
  // problem--> 58
  {
    id: "caesar-cipher-loop",
    title: "Caesar Cipher with a Loop",
    description:
      "Implement the Caesar cipher (a simple substitution cipher) using a `for...of` loop and character code manipulation.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "str",
        label: "Text to encode",
        type: "text",
        defaultValue: "Hello, World!",
      },
      { id: "shift", label: "Shift amount", type: "number", defaultValue: 3 },
    ],
    buttonText: "Encode",
    difficulty: "Intermediate",
  },
  // problem--> 59
  {
    id: "loop-for-data-aggregation",
    title: "Data Aggregation with a Loop",
    description:
      "Given an array of transaction objects, use a loop to calculate the total amount for a specific transaction type.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Calculate Credit Total",
    difficulty: "Intermediate",
  },
  // problem--> 60
  {
    id: "while-loop-linked-list-conceptual",
    title: "Traversing a Linked List with `while` (Conceptual)",
    description:
      "Explain how a `while` loop is the natural choice for traversing a linked list data structure until the `next` pointer is null.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 61
  {
    id: "unique-characters-loop",
    title: "Check for Unique Characters",
    description:
      "Use a loop and a `Set` to determine if a string has all unique characters.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abcdefg" },
    ],
    buttonText: "Check Uniqueness",
    difficulty: "Intermediate",
  },
  // problem--> 62
  {
    id: "loop-over-map",
    title: "Loop over a `Map`",
    description:
      "Use a `for...of` loop with destructuring to iterate over the key-value pairs of an ES6 `Map`.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Iterate Map",
    difficulty: "Intermediate",
  },
  // problem--> 63
  {
    id: "loop-over-set",
    title: "Loop over a `Set`",
    description:
      "Use a `for...of` loop to iterate over the unique values of an ES6 `Set`.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Iterate Set",
    difficulty: "Intermediate",
  },
  // problem--> 64
  {
    id: "for-loop-empty-statement",
    title: "`for` Loop with Empty Statement",
    description:
      "Demonstrate a `for` loop where all the work is done in the final-expression part, leaving the body empty.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Run Loop",
    difficulty: "Intermediate",
  },
  // problem--> 65
  {
    id: "bubble-sort-loop",
    title: "Bubble Sort with Nested Loops",
    description:
      "Implement the classic Bubble Sort algorithm using nested `for` loops to sort an array of numbers.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Unsorted Array",
        type: "text",
        defaultValue: "5, 3, 8, 4, 2",
      },
    ],
    buttonText: "Sort",
    difficulty: "Intermediate",
  },
  // problem--> 66
  {
    id: "selection-sort-loop",
    title: "Selection Sort with Nested Loops",
    description:
      "Implement the Selection Sort algorithm using nested `for` loops.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Unsorted Array",
        type: "text",
        defaultValue: "64, 25, 12, 22, 11",
      },
    ],
    buttonText: "Sort",
    difficulty: "Intermediate",
  },
  // problem--> 67
  {
    id: "block-scope-in-loop",
    title: "Block Scope Inside a Loop",
    description:
      "Show that a `let` variable declared inside a `for` loop block is created fresh for each iteration and is not accessible outside the loop.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Demonstrate Scope",
    difficulty: "Intermediate",
  },
  // problem--> 68
  {
    id: "do-while-for-menu-simulation",
    title: "`do...while` for Menu Simulation",
    description:
      'Simulate a command-line menu that displays options and repeats until the user chooses to "exit".',
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Run Menu",
    difficulty: "Intermediate",
  },
  // problem--> 69
  {
    id: "for-of-with-destructuring-objects",
    title: "`for...of` with Object Destructuring",
    description:
      "Iterate over an array of objects, using object destructuring to directly access properties in each iteration.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Process Users",
    difficulty: "Intermediate",
  },
  // problem--> 70
  {
    id: "empty-loop-body-pitfall",
    title: "Empty Loop Body Pitfall",
    description:
      "Show a common bug where a semicolon is accidentally placed after a loop condition, creating an empty loop body.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Show Pitfall",
    difficulty: "Intermediate",
  },
  // problem--> 71
  {
    id: "hollow-square-pattern",
    title: "Hollow Square Pattern",
    description:
      "Use nested loops and conditional logic to print a hollow square pattern.",
    category: "Control Flow and Loops",
    inputs: [{ id: "size", label: "Size", type: "number", defaultValue: 5 }],
    buttonText: "Create Pattern",
    difficulty: "Intermediate",
  },
  // problem--> 72
  {
    id: "number-pyramid-pattern",
    title: "Number Pyramid Pattern",
    description: "Use nested loops to create a pyramid pattern with numbers.",
    category: "Control Flow and Loops",
    inputs: [{ id: "rows", label: "Rows", type: "number", defaultValue: 5 }],
    buttonText: "Create Pattern",
    difficulty: "Intermediate",
  },
  // problem--> 73
  {
    id: "pascals-triangle-loop",
    title: "Pascal's Triangle with Loops",
    description:
      "Generate a specified number of rows of Pascal's Triangle using nested loops.",
    category: "Control Flow and Loops",
    inputs: [{ id: "rows", label: "Rows", type: "number", defaultValue: 5 }],
    buttonText: "Generate Triangle",
    difficulty: "Intermediate",
  },
  // problem--> 74
  {
    id: "find-all-indices-loop",
    title: "Find All Indices of a Value",
    description:
      "Use a `for` loop to find all the indices at which a given value appears in an array.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "a,b,a,c,a,d" },
      { id: "value", label: "Value to Find", type: "text", defaultValue: "a" },
    ],
    buttonText: "Find Indices",
    difficulty: "Intermediate",
  },
  // problem--> 75
  {
    id: "greatest-common-divisor-loop",
    title: "Greatest Common Divisor with Loop",
    description:
      "Find the GCD of two numbers using the iterative Euclidean algorithm with a `while` loop.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 54 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 24 },
    ],
    buttonText: "Find GCD",
    difficulty: "Intermediate",
  },
  // problem--> 76
  {
    id: "least-common-multiple-loop",
    title: "Least Common Multiple with Loop",
    description: "Find the LCM of two numbers using a loop and their GCD.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 21 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 6 },
    ],
    buttonText: "Find LCM",
    difficulty: "Intermediate",
  },
  // problem--> 77
  {
    id: "loop-over-arguments",
    title: "Loop over `arguments` Object",
    description:
      "Use a `for` loop to iterate over the legacy `arguments` object in a traditional function.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Sum Arguments",
    difficulty: "Intermediate",
  },
  // problem--> 78
  {
    id: "grouping-data-with-loop",
    title: "Group Data with a Loop",
    description:
      "Given an array of objects, use a loop to group them by a specific property (e.g., category).",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Group Products",
    difficulty: "Intermediate",
  },
  // problem--> 79
  {
    id: "matrix-transposition",
    title: "Matrix Transposition",
    description:
      "Use nested loops to transpose a matrix (swap rows and columns).",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6]]",
      },
    ],
    buttonText: "Transpose",
    difficulty: "Intermediate",
  },
  // problem--> 80
  {
    id: "diagonal-sum-matrix",
    title: "Diagonal Sum of a Matrix",
    description:
      "Use a single `for` loop to calculate the sum of the main and anti-diagonals of a square matrix.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "matrix",
        label: "Square Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Calculate Diagonal Sum",
    difficulty: "Intermediate",
  },
  // problem--> 81
  {
    id: "find-longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    description:
      "Given an unsorted array of integers, find the length of the longest consecutive elements sequence.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "100, 4, 200, 1, 3, 2",
      },
    ],
    buttonText: "Find Sequence",
    difficulty: "Advanced",
  },
  // problem--> 82
  {
    id: "binary-search-loop",
    title: "Binary Search with a `while` Loop",
    description:
      "Implement the binary search algorithm iteratively using a `while` loop on a sorted array.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array",
        type: "text",
        defaultValue: "2, 5, 8, 12, 16, 23, 38, 56",
      },
      { id: "target", label: "Target", type: "number", defaultValue: 23 },
    ],
    buttonText: "Search",
    difficulty: "Intermediate",
  },
  // problem--> 83
  {
    id: "sliding-window-max-sum",
    title: "Sliding Window: Max Sum Subarray",
    description:
      "Given an array of integers and a number k, find the maximum sum of a subarray of size k.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "2, 1, 5, 1, 3, 2",
      },
      { id: "k", label: "Window Size (k)", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Max Sum",
    difficulty: "Intermediate",
  },
  // problem--> 84
  {
    id: "kadanes-algorithm-loop",
    title: "Kadane's Algorithm with a Loop",
    description:
      "Find the contiguous subarray with the largest sum within a one-dimensional array of numbers using a single `for` loop.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "-2, 1, -3, 4, -1, 2, 1, -5, 4",
      },
    ],
    buttonText: "Find Max Subarray Sum",
    difficulty: "Advanced",
  },
  // problem--> 85
  {
    id: "spiral-matrix-traversal",
    title: "Spiral Matrix Traversal",
    description:
      "Given an m x n matrix, return all elements of the matrix in spiral order using loops.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
      },
    ],
    buttonText: "Traverse Spiral",
    difficulty: "Advanced",
  },
  // problem--> 86
  {
    id: "run-length-encoding",
    title: "Run-Length Encoding",
    description:
      "Implement run-length encoding. Given a string like 'AAABBC', return 'A3B2C1'.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "str",
        label: "String to encode",
        type: "text",
        defaultValue: "AAABBC",
      },
    ],
    buttonText: "Encode",
    difficulty: "Intermediate",
  },
  // problem--> 87
  {
    id: "run-length-decoding",
    title: "Run-Length Decoding",
    description:
      "Implement run-length decoding. Given a string like 'A3B2C1', return 'AAABBC'.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "str",
        label: "String to decode",
        type: "text",
        defaultValue: "A3B2C1",
      },
    ],
    buttonText: "Decode",
    difficulty: "Intermediate",
  },
  // problem--> 88
  {
    id: "sieve-of-eratosthenes",
    title: "Sieve of Eratosthenes",
    description:
      "Implement the Sieve of Eratosthenes algorithm to find all prime numbers up to a specified number.",
    category: "Control Flow and Loops",
    inputs: [{ id: "limit", label: "Limit", type: "number", defaultValue: 30 }],
    buttonText: "Find Primes",
    difficulty: "Intermediate",
  },
  // problem--> 89
  {
    id: "two-sum-problem",
    title: "Two Sum Problem",
    description:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "2, 7, 11, 15" },
      { id: "target", label: "Target", type: "number", defaultValue: 9 },
    ],
    buttonText: "Find Indices",
    difficulty: "Intermediate",
  },
  // problem--> 90
  {
    id: "three-sum-problem-loop",
    title: "Three Sum Problem",
    description:
      "Find all unique triplets in the array which gives the sum of zero.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "-1, 0, 1, 2, -1, -4",
      },
    ],
    buttonText: "Find Triplets",
    difficulty: "Advanced",
  },
  // problem--> 91
  {
    id: "valid-sudoku-board",
    title: "Validate a Sudoku Board",
    description:
      "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the rules.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "board",
        label: "Sudoku Board (JSON)",
        type: "textarea",
        defaultValue: "[[...]]",
      },
    ],
    buttonText: "Validate",
    difficulty: "Advanced",
  },
  // problem--> 92
  {
    id: "insertion-sort-loop",
    title: "Insertion Sort with Loops",
    description:
      "Implement the Insertion Sort algorithm using a `for` loop and a nested `while` loop.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Unsorted Array",
        type: "text",
        defaultValue: "12, 11, 13, 5, 6",
      },
    ],
    buttonText: "Sort",
    difficulty: "Intermediate",
  },
  // problem--> 93
  {
    id: "merge-two-sorted-arrays-loop",
    title: "Merge Two Sorted Arrays with a Loop",
    description:
      "Merge two sorted arrays into one sorted array using a `while` loop, without using `.sort()`.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr1", label: "Array 1", type: "text", defaultValue: "1, 3, 5" },
      { id: "arr2", label: "Array 2", type: "text", defaultValue: "2, 4, 6" },
    ],
    buttonText: "Merge",
    difficulty: "Intermediate",
  },
  // problem--> 94
  {
    id: "roman-to-integer-loop",
    title: "Roman to Integer",
    description:
      "Given a roman numeral, convert it to an integer using a loop.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "roman",
        label: "Roman Numeral",
        type: "text",
        defaultValue: "MCMXCIV",
      },
    ],
    buttonText: "Convert",
    difficulty: "Intermediate",
  },
  // problem--> 95
  {
    id: "integer-to-roman-loop",
    title: "Integer to Roman",
    description:
      "Given an integer, convert it to a roman numeral using a loop.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "num", label: "Integer", type: "number", defaultValue: 1994 },
    ],
    buttonText: "Convert",
    difficulty: "Intermediate",
  },
  // problem--> 96
  {
    id: "find-peak-element-loop",
    title: "Find Peak Element",
    description:
      "A peak element is an element that is strictly greater than its neighbors. Given an integer array, find a peak element and return its index using a loop.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "1, 2, 1, 3, 5, 6, 4",
      },
    ],
    buttonText: "Find Peak",
    difficulty: "Intermediate",
  },
  // problem--> 97
  {
    id: "rotate-matrix-loop",
    title: "Rotate Matrix 90 Degrees",
    description:
      "Rotate an N x N matrix by 90 degrees clockwise in-place using nested loops.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Rotate",
    difficulty: "Advanced",
  },
  // problem--> 98
  {
    id: "product-of-array-except-self-loop",
    title: "Product of Array Except Self",
    description:
      "Given an array, return an array where `output[i]` is the product of all elements except `nums[i]`, using loops.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1, 2, 3, 4" },
    ],
    buttonText: "Calculate",
    difficulty: "Advanced",
  },
  // problem--> 99
  {
    id: "valid-parentheses-stack-loop",
    title: "Valid Parentheses",
    description:
      "Given a string of brackets '()[]{}', determine if it is valid using a loop and a stack.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "str", label: "Brackets", type: "text", defaultValue: "()[]{}" },
    ],
    buttonText: "Validate",
    difficulty: "Intermediate",
  },
  // problem--> 100
  {
    id: "container-with-most-water-loop",
    title: "Container With Most Water",
    description:
      "Given an array of heights, find two lines that form a container that contains the most water using the two-pointer technique.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "heights",
        label: "Heights",
        type: "text",
        defaultValue: "1, 8, 6, 2, 5, 4, 8, 3, 7",
      },
    ],
    buttonText: "Find Max Area",
    difficulty: "Intermediate",
  },
  // problem--> 101
  {
    id: "trapping-rain-water-loop",
    title: "Trapping Rain Water",
    description:
      "Given an elevation map, compute how much water it can trap after raining using loops.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "heights",
        label: "Heights",
        type: "text",
        defaultValue: "0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1",
      },
    ],
    buttonText: "Calculate",
    difficulty: "Advanced",
  },
  // problem--> 102
  {
    id: "longest-common-prefix-loop",
    title: "Longest Common Prefix",
    description:
      "Write a function to find the longest common prefix string amongst an array of strings using loops.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array of Strings",
        type: "text",
        defaultValue: "flower,flow,flight",
      },
    ],
    buttonText: "Find Prefix",
    difficulty: "Intermediate",
  },
  // problem--> 103
  {
    id: "valid-palindrome-two-pointers",
    title: "Valid Palindrome (Two Pointers)",
    description:
      "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases, using a two-pointer approach.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "A man, a plan, a canal: Panama",
      },
    ],
    buttonText: "Validate",
    difficulty: "Intermediate",
  },
  // problem--> 104
  {
    id: "move-zeroes-loop",
    title: "Move Zeroes",
    description:
      "Given an array, move all 0s to the end of it while maintaining the relative order of the non-zero elements, using a loop.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "0, 1, 0, 3, 12",
      },
    ],
    buttonText: "Move Zeroes",
    difficulty: "Intermediate",
  },
  // problem--> 105
  {
    id: "find-all-duplicates-loop",
    title: "Find All Duplicates in an Array",
    description:
      "Given an array of integers where 1 <= a[i] <= n (n = size of array), some elements appear twice and others appear once. Find all the elements that appear twice.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "4, 3, 2, 7, 8, 2, 3, 1",
      },
    ],
    buttonText: "Find Duplicates",
    difficulty: "Intermediate",
  },
  // problem--> 106
  {
    id: "majority-element-loop",
    title: "Majority Element",
    description:
      "Given an array of size n, find the majority element (the element that appears more than n/2 times) using a loop.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "2, 2, 1, 1, 1, 2, 2",
      },
    ],
    buttonText: "Find Majority Element",
    difficulty: "Intermediate",
  },
  // problem--> 107
  {
    id: "pascals-triangle-ii",
    title: "Pascal's Triangle II",
    description:
      "Given an integer rowIndex, return the rowIndex-th (0-indexed) row of Pascal's triangle using loops.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "rowIndex", label: "Row Index", type: "number", defaultValue: 3 },
    ],
    buttonText: "Get Row",
    difficulty: "Intermediate",
  },
  // problem--> 108
  {
    id: "missing-ranges",
    title: "Missing Ranges",
    description:
      "Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "0, 1, 3, 50, 75",
      },
      { id: "lower", label: "Lower Bound", type: "number", defaultValue: 0 },
      { id: "upper", label: "Upper Bound", type: "number", defaultValue: 99 },
    ],
    buttonText: "Find Missing Ranges",
    difficulty: "Intermediate",
  },
  // problem--> 109
  {
    id: "summary-ranges",
    title: "Summary Ranges",
    description:
      "Given a sorted unique integer array, return the smallest sorted list of ranges that cover all the numbers in the array exactly.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "0, 1, 2, 4, 5, 7",
      },
    ],
    buttonText: "Get Ranges",
    difficulty: "Intermediate",
  },
  // problem--> 110
  {
    id: "isomorphic-strings",
    title: "Isomorphic Strings",
    description:
      "Given two strings, determine if they are isomorphic. Two strings are isomorphic if the characters in the first string can be replaced to get the second string.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String s", type: "text", defaultValue: "egg" },
      { id: "t", label: "String t", type: "text", defaultValue: "add" },
    ],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 111
  {
    id: "word-pattern",
    title: "Word Pattern",
    description:
      "Given a pattern and a string, find if the string follows the same pattern.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "pattern", label: "Pattern", type: "text", defaultValue: "abba" },
      {
        id: "s",
        label: "String",
        type: "text",
        defaultValue: "dog cat cat dog",
      },
    ],
    buttonText: "Check Pattern",
    difficulty: "Intermediate",
  },
  // problem--> 112
  {
    id: "happy-number",
    title: "Happy Number",
    description:
      'Write an algorithm to determine if a number is "happy". A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy.',
    category: "Control Flow and Loops",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 19 }],
    buttonText: "Check if Happy",
    difficulty: "Intermediate",
  },
  // problem--> 113
  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    description:
      "Given an integer array, find if the array contains any duplicates.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1, 2, 3, 1" },
    ],
    buttonText: "Check for Duplicates",
    difficulty: "Beginner",
  },
  // problem--> 114
  {
    id: "contains-duplicate-ii",
    title: "Contains Duplicate II",
    description:
      "Given an integer array and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1, 2, 3, 1" },
      { id: "k", label: "k", type: "number", defaultValue: 3 },
    ],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 115
  {
    id: "valid-anagram",
    title: "Valid Anagram",
    description:
      "Given two strings, write a function to determine if the second string is an anagram of the first.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String s", type: "text", defaultValue: "anagram" },
      { id: "t", label: "String t", type: "text", defaultValue: "nagaram" },
    ],
    buttonText: "Check Anagram",
    difficulty: "Beginner",
  },
  // problem--> 116
  {
    id: "add-digits",
    title: "Add Digits",
    description:
      "Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.",
    category: "Control Flow and Loops",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 38 }],
    buttonText: "Add Digits",
    difficulty: "Intermediate",
  },
  // problem--> 117
  {
    id: "ugly-number",
    title: "Ugly Number",
    description:
      "Write a program to check whether a given number is an ugly number. Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.",
    category: "Control Flow and Loops",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 6 }],
    buttonText: "Check if Ugly",
    difficulty: "Intermediate",
  },
  // problem--> 118
  {
    id: "first-unique-character",
    title: "First Unique Character in a String",
    description:
      "Given a string, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "leetcode" },
    ],
    buttonText: "Find",
    difficulty: "Intermediate",
  },
  // problem--> 119
  {
    id: "find-the-difference",
    title: "Find the Difference",
    description:
      "You are given two strings s and t. String t is generated by random shuffling string s and then add one more letter at a random position. Return the letter that was added to t.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String s", type: "text", defaultValue: "abcd" },
      { id: "t", label: "String t", type: "text", defaultValue: "abcde" },
    ],
    buttonText: "Find Difference",
    difficulty: "Intermediate",
  },
  // problem--> 120
  {
    id: "ransom-note",
    title: "Ransom Note",
    description:
      "Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines; otherwise, it will return false.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "ransomNote",
        label: "Ransom Note",
        type: "text",
        defaultValue: "aa",
      },
      { id: "magazine", label: "Magazine", type: "text", defaultValue: "aab" },
    ],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 121
  {
    id: "keyboard-row",
    title: "Keyboard Row",
    description:
      "Given an array of strings, return the words that can be typed using letters of the alphabet on only one row of American keyboard.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "Hello,Alaska,Dad,Peace",
      },
    ],
    buttonText: "Find Words",
    difficulty: "Intermediate",
  },
  // problem--> 122
  {
    id: "longest-harmonious-subsequence",
    title: "Longest Harmonious Subsequence",
    description:
      "We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1. Given an integer array, find the length of its longest harmonious subsequence.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "1,3,2,2,5,2,3,7",
      },
    ],
    buttonText: "Find Length",
    difficulty: "Intermediate",
  },
  // problem--> 123
  {
    id: "set-mismatch",
    title: "Set Mismatch",
    description:
      "You have a set of integers from 1 to n. Due to an error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number. Given an array representing the data status of this set after the error. Find the number that occurs twice and the number that is missing and return them in the form of an array.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,2,4" },
    ],
    buttonText: "Find Mismatch",
    difficulty: "Intermediate",
  },
  // problem--> 124
  {
    id: "shortest-completing-word",
    title: "Shortest Completing Word",
    description:
      "Given a string licensePlate and an array of strings words, find the shortest completing word in words. A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "licensePlate",
        label: "License Plate",
        type: "text",
        defaultValue: "1s3 PSt",
      },
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "step,steps,stripe,stepple",
      },
    ],
    buttonText: "Find Word",
    difficulty: "Intermediate",
  },
  // problem--> 125
  {
    id: "goat-latin",
    title: "Goat Latin",
    description:
      'Given a string sentence made of words separated by spaces. Convert the sentence to "Goat Latin". The rules of Goat Latin are as follows: 1. If a word begins with a vowel, append "ma" to the end of the word. 2. If a word begins with a consonant, remove the first letter and append it to the end, then add "ma". 3. Add one letter "a" to the end of each word per its word index in the sentence, starting with 1.',
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        defaultValue: "I speak Goat Latin",
      },
    ],
    buttonText: "Translate",
    difficulty: "Intermediate",
  },
  // problem--> 126
  {
    id: "floyds-triangle",
    title: "Floyd's Triangle",
    description:
      "Use nested loops to print a specified number of rows of Floyd's Triangle, where numbers are consecutive.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "rows", label: "Number of Rows", type: "number", defaultValue: 5 },
    ],
    buttonText: "Create Triangle",
    difficulty: "Intermediate",
  },
  // problem--> 127
  {
    id: "dutch-national-flag-problem",
    title: "Dutch National Flag Problem",
    description:
      "Given an array containing only 0s, 1s, and 2s, sort the array in-place. You must solve this problem without using the library's sort function.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array (0s, 1s, 2s)",
        type: "text",
        defaultValue: "2,0,2,1,1,0",
      },
    ],
    buttonText: "Sort",
    difficulty: "Intermediate",
  },
  // problem--> 128
  {
    id: "find-all-anagrams-in-string",
    title: "Find All Anagrams in a String",
    description:
      "Given two strings s and p, return an array of all the start indices of p's anagrams in s.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String s", type: "text", defaultValue: "cbaebabacd" },
      { id: "p", label: "String p", type: "text", defaultValue: "abc" },
    ],
    buttonText: "Find Anagrams",
    difficulty: "Advanced",
  },
  // problem--> 129
  {
    id: "generate-pascal-row",
    title: "Generate a Specific Row of Pascal's Triangle",
    description:
      "Given a non-negative integer rowIndex, return the rowIndex-th (0-indexed) row of Pascal's triangle.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "rowIndex", label: "Row Index", type: "number", defaultValue: 4 },
    ],
    buttonText: "Generate Row",
    difficulty: "Intermediate",
  },
  // problem--> 130
  {
    id: "best-time-to-buy-sell-stock-ii",
    title: "Best Time to Buy and Sell Stock II",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You may complete as many transactions as you like. Find the maximum profit.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "prices",
        label: "Prices",
        type: "text",
        defaultValue: "7,1,5,3,6,4",
      },
    ],
    buttonText: "Calculate Profit",
    difficulty: "Intermediate",
  },
  // problem--> 131
  {
    id: "find-first-and-last-position-in-sorted-array",
    title: "Find First and Last Position in Sorted Array",
    description:
      "Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.",
    category: "Control Flow and Loops",
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
    difficulty: "Intermediate",
  },
  // problem--> 132
  {
    id: "excel-sheet-column-number",
    title: "Excel Sheet Column Number",
    description:
      "Given a string that represents a column title as it appears in an Excel sheet, return its corresponding column number.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "columnTitle",
        label: "Column Title",
        type: "text",
        defaultValue: "ZY",
      },
    ],
    buttonText: "Get Number",
    difficulty: "Intermediate",
  },
  // problem--> 133
  {
    id: "excel-sheet-column-title",
    title: "Excel Sheet Column Title",
    description:
      "Given a positive integer, return its corresponding column title as it appears in an Excel sheet.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "columnNumber",
        label: "Column Number",
        type: "number",
        defaultValue: 701,
      },
    ],
    buttonText: "Get Title",
    difficulty: "Intermediate",
  },
  // problem--> 134
  {
    id: "single-number",
    title: "Single Number",
    description:
      "Given a non-empty array of integers, every element appears twice except for one. Find that single one.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "4,1,2,1,2" },
    ],
    buttonText: "Find Single",
    difficulty: "Intermediate",
  },
  // problem--> 135
  {
    id: "plus-one",
    title: "Plus One",
    description:
      "Given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer, increment the large integer by one and return the resulting array of digits.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "digits",
        label: "Digits Array",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Plus One",
    difficulty: "Beginner",
  },
  // problem--> 136
  {
    id: "length-of-last-word",
    title: "Length of Last Word",
    description:
      "Given a string s consisting of words and spaces, return the length of the last word in the string.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "Hello World" },
    ],
    buttonText: "Get Length",
    difficulty: "Beginner",
  },
  // problem--> 137
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer, return true if the integer is a palindrome.",
    category: "Control Flow and Loops",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 121 }],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 138
  {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    description:
      "Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Sorted Array", type: "text", defaultValue: "1,1,2" },
    ],
    buttonText: "Remove Duplicates",
    difficulty: "Intermediate",
  },
  // problem--> 139
  {
    id: "remove-element",
    title: "Remove Element",
    description:
      "Given an array and a value, remove all instances of that value in-place and return the new length.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,2,2,3" },
      { id: "val", label: "Value to Remove", type: "number", defaultValue: 3 },
    ],
    buttonText: "Remove",
    difficulty: "Intermediate",
  },
  // problem--> 140
  {
    id: "search-insert-position",
    title: "Search Insert Position",
    description:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    category: "Control Flow and Loops",
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
    difficulty: "Beginner",
  },
  // problem--> 141
  {
    id: "game-of-life-iteration",
    title: "Conway's Game of Life (Single Step)",
    description:
      "Implement a function that takes a 2D grid representing a state in Conway's Game of Life and computes the next state after one iteration using nested loops and conditional logic.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "board",
        label: "Board State (JSON 0s and 1s)",
        type: "textarea",
        defaultValue: "[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
      },
    ],
    buttonText: "Compute Next Generation",
    difficulty: "Advanced",
  },
  // problem--> 142
  {
    id: "generator-as-control-flow-conceptual",
    title: "Generators for Control Flow (Conceptual)",
    description:
      "Explain how generator functions (`function*`) and the `yield` keyword were used with libraries to manage asynchronous control flow before `async/await` became standard.",
    category: "Control Flow and Loops",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 143
  {
    id: "palindrome-pairs",
    title: "Palindrome Pairs",
    description:
      "Given a list of unique words, return all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words words[i] + words[j] is a palindrome.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "abcd,dcba,lls,s,sssll",
      },
    ],
    buttonText: "Find Pairs",
    difficulty: "Advanced",
  },
  // problem--> 144
  {
    id: "gas-station",
    title: "Gas Station",
    description:
      "There are n gas stations along a circular route. You are given two integer arrays gas and cost. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "gas",
        label: "Gas Array",
        type: "text",
        defaultValue: "1,2,3,4,5",
      },
      {
        id: "cost",
        label: "Cost Array",
        type: "text",
        defaultValue: "3,4,5,1,2",
      },
    ],
    buttonText: "Find Start",
    difficulty: "Advanced",
  },
  // problem--> 145
  {
    id: "candy-distribution",
    title: "Candy Distribution",
    description:
      "There are N children standing in a line. Each child is assigned a rating value. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. What is the minimum candies you must give?",
    category: "Control Flow and Loops",
    inputs: [
      { id: "ratings", label: "Ratings", type: "text", defaultValue: "1,0,2" },
    ],
    buttonText: "Calculate Candies",
    difficulty: "Advanced",
  },
  // problem--> 146
  {
    id: "zigzag-conversion",
    title: "ZigZag Conversion",
    description:
      'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows. Write the code that will take a string and make this conversion.',
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "s",
        label: "String",
        type: "text",
        defaultValue: "PAYPALISHIRING",
      },
      {
        id: "numRows",
        label: "Number of Rows",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Convert",
    difficulty: "Intermediate",
  },
  // problem--> 147
  {
    id: "string-to-integer-atoi",
    title: "String to Integer (atoi)",
    description:
      "Implement the `atoi` function, which converts a string to an integer, handling whitespace, signs, and non-numeric characters.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "   -42" },
    ],
    buttonText: "Convert",
    difficulty: "Intermediate",
  },
  // problem--> 148
  {
    id: "jump-game-ii",
    title: "Jump Game II",
    description:
      "Given an array of non-negative integers, you are initially positioned at the first index. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "2,3,1,1,4" },
    ],
    buttonText: "Find Min Jumps",
    difficulty: "Advanced",
  },
  // problem--> 149
  {
    id: "first-missing-positive",
    title: "First Missing Positive",
    description:
      "Given an unsorted integer array, find the smallest missing positive integer.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,4,-1,1" },
    ],
    buttonText: "Find",
    difficulty: "Advanced",
  },
  // problem--> 150
  {
    id: "next-permutation",
    title: "Next Permutation",
    description:
      "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3" },
    ],
    buttonText: "Find Next",
    difficulty: "Advanced",
  },
  // problem--> 151
  {
    id: "h-index",
    title: "H-Index",
    description:
      "Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return compute the researcher's h-index.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "citations",
        label: "Citations",
        type: "text",
        defaultValue: "3,0,6,1,5",
      },
    ],
    buttonText: "Compute",
    difficulty: "Intermediate",
  },
  // problem--> 152
  {
    id: "reverse-vowels-of-a-string",
    title: "Reverse Vowels of a String",
    description: "Given a string, reverse only the vowels of the string.",
    category: "Control Flow and Loops",
    inputs: [{ id: "s", label: "String", type: "text", defaultValue: "hello" }],
    buttonText: "Reverse Vowels",
    difficulty: "Intermediate",
  },
  // problem--> 153
  {
    id: "intersection-of-two-arrays-ii",
    title: "Intersection of Two Arrays II",
    description:
      "Given two integer arrays, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr1", label: "Array 1", type: "text", defaultValue: "1,2,2,1" },
      { id: "arr2", label: "Array 2", type: "text", defaultValue: "2,2" },
    ],
    buttonText: "Find Intersection",
    difficulty: "Intermediate",
  },
  // problem--> 154
  {
    id: "longest-word-in-dictionary-through-deleting",
    title: "Longest Word in Dictionary through Deleting",
    description:
      "Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "abpcplea" },
      {
        id: "d",
        label: "Dictionary (comma-separated)",
        type: "text",
        defaultValue: "ale,apple,monkey,plea",
      },
    ],
    buttonText: "Find Longest Word",
    difficulty: "Intermediate",
  },
  // problem--> 155
  {
    id: "encode-and-decode-strings",
    title: "Encode and Decode Strings",
    description:
      "Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "strs",
        label: "Strings (comma-separated)",
        type: "text",
        defaultValue: "hello,world,this,is,a,test",
      },
    ],
    buttonText: "Encode/Decode",
    difficulty: "Advanced",
  },
  // problem--> 156
  {
    id: "find-celebrity",
    title: "Find the Celebrity",
    description:
      'Suppose you are at a party with n people. A "celebrity" is a person who is known by everyone but knows no one. Find the celebrity.',
    category: "Control Flow and Loops",
    inputs: [
      { id: "n", label: "Number of people", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Celebrity (Conceptual)",
    difficulty: "Intermediate",
  },
  // problem--> 157
  {
    id: "basic-calculator",
    title: "Basic Calculator",
    description:
      "Implement a basic calculator to evaluate a simple expression string containing `+`, `-`, `(`, `)`, and non-negative integers.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "s",
        label: "Expression",
        type: "text",
        defaultValue: "(1+(4+5+2)-3)+(6+8)",
      },
    ],
    buttonText: "Calculate",
    difficulty: "Advanced",
  },
  // problem--> 158
  {
    id: "text-justification",
    title: "Text Justification",
    description:
      "Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "words",
        label: "Words (comma-separated)",
        type: "text",
        defaultValue: "This,is,an,example,of,text,justification.",
      },
      { id: "maxWidth", label: "Max Width", type: "number", defaultValue: 16 },
    ],
    buttonText: "Justify",
    difficulty: "Advanced",
  },
  // problem--> 159
  {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    description:
      "Given two strings s and t, find the minimum window in s which will contain all the characters in t.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "s",
        label: "String s",
        type: "text",
        defaultValue: "ADOBECODEBANC",
      },
      { id: "t", label: "String t", type: "text", defaultValue: "ABC" },
    ],
    buttonText: "Find Window",
    difficulty: "Advanced",
  },
  // problem--> 160
  {
    id: "longest-substring-with-at-most-k-distinct-characters",
    title: "Longest Substring with At Most K Distinct Characters",
    description:
      "Given a string, find the length of the longest substring T that contains at most k distinct characters.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "eceba" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Length",
    difficulty: "Advanced",
  },
  // problem--> 161
  {
    id: "find-k-closest-elements",
    title: "Find K Closest Elements",
    description:
      "Given a sorted integer array, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,4,5" },
      { id: "k", label: "k", type: "number", defaultValue: 4 },
      { id: "x", label: "x", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Closest",
    difficulty: "Intermediate",
  },
  // problem--> 162
  {
    id: "minimum-size-subarray-sum",
    title: "Minimum Size Subarray Sum",
    description:
      "Given an array of positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "Target Sum (s)", type: "number", defaultValue: 7 },
      { id: "arr", label: "Array", type: "text", defaultValue: "2,3,1,2,4,3" },
    ],
    buttonText: "Find Length",
    difficulty: "Intermediate",
  },
  // problem--> 163
  {
    id: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    description:
      "Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,1,1" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Count Subarrays",
    difficulty: "Advanced",
  },
  // problem--> 164
  {
    id: "boats-to-save-people",
    title: "Boats to Save People",
    description:
      "The i-th person has weight people[i], and each boat can carry a maximum weight of limit. Each boat carries at most 2 people. Return the minimum number of boats to carry every given person.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "people",
        label: "People Weights",
        type: "text",
        defaultValue: "3,2,2,1",
      },
      { id: "limit", label: "Limit", type: "number", defaultValue: 3 },
    ],
    buttonText: "Calculate Boats",
    difficulty: "Intermediate",
  },
  // problem--> 165
  {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    description:
      "Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "temps",
        label: "Temperatures",
        type: "text",
        defaultValue: "73,74,75,71,69,72,76,73",
      },
    ],
    buttonText: "Calculate Waits",
    difficulty: "Intermediate",
  },
  // problem--> 166
  {
    id: "find-pivot-index",
    title: "Find Pivot Index",
    description:
      "Given an array of integers, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,7,3,6,5,6" },
    ],
    buttonText: "Find Pivot",
    difficulty: "Beginner",
  },
  // problem--> 167
  {
    id: "sort-colors",
    title: "Sort Colors",
    description:
      "Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the order red, white and blue (0, 1, 2).",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Colors Array",
        type: "text",
        defaultValue: "2,0,2,1,1,0",
      },
    ],
    buttonText: "Sort",
    difficulty: "Intermediate",
  },
  // problem--> 168
  {
    id: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    description:
      "Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,2,1,5,6,4" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find",
    difficulty: "Intermediate",
  },
  // problem--> 169
  {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    description:
      "Given a non-empty array of integers, return the k most frequent elements.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,1,1,2,2,3" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find",
    difficulty: "Intermediate",
  },
  // problem--> 170
  {
    id: "sort-characters-by-frequency",
    title: "Sort Characters By Frequency",
    description:
      "Given a string, sort it in decreasing order based on the frequency of characters.",
    category: "Control Flow and Loops",
    inputs: [{ id: "s", label: "String", type: "text", defaultValue: "tree" }],
    buttonText: "Sort",
    difficulty: "Intermediate",
  },
  // problem--> 171
  {
    id: "largest-number-at-least-twice-of-others",
    title: "Largest Number At Least Twice of Others",
    description:
      "In a given integer array, there is always exactly one largest element. Find whether the largest element in the array is at least twice as much as every other number in the array.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3, 6, 1, 0" },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 172
  {
    id: "maximum-product-of-three-numbers",
    title: "Maximum Product of Three Numbers",
    description:
      "Given an integer array, find the maximum product of three numbers in the array.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,3,4" },
    ],
    buttonText: "Find Max Product",
    difficulty: "Intermediate",
  },
  // problem--> 173
  {
    id: "array-partition-i",
    title: "Array Partition I",
    description:
      "Given an integer array of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,4,3,2" },
    ],
    buttonText: "Calculate Max Sum",
    difficulty: "Beginner",
  },
  // problem--> 174
  {
    id: "reshape-the-matrix",
    title: "Reshape the Matrix",
    description:
      "You're given a matrix represented by a 2D array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix. Reshape the given matrix to a new matrix with r rows and c columns.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "mat",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2],[3,4]]",
      },
      { id: "r", label: "Rows (r)", type: "number", defaultValue: 1 },
      { id: "c", label: "Columns (c)", type: "number", defaultValue: 4 },
    ],
    buttonText: "Reshape",
    difficulty: "Intermediate",
  },
  // problem--> 175
  {
    id: "toeplitz-matrix",
    title: "Toeplitz Matrix",
    description:
      "A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element. Given an M x N matrix, return True if and only if the matrix is Toeplitz.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3,4],[5,1,2,3],[9,5,1,2]]",
      },
    ],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 176
  {
    id: "transpose-matrix",
    title: "Transpose Matrix",
    description:
      "Given a 2D integer array matrix, return the transpose of matrix.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "matrix",
        label: "Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,2,3],[4,5,6],[7,8,9]]",
      },
    ],
    buttonText: "Transpose",
    difficulty: "Beginner",
  },
  // problem--> 177
  {
    id: "flipping-an-image",
    title: "Flipping an Image",
    description:
      "Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "image",
        label: "Image Matrix (JSON)",
        type: "textarea",
        defaultValue: "[[1,1,0],[1,0,1],[0,0,0]]",
      },
    ],
    buttonText: "Flip and Invert",
    difficulty: "Intermediate",
  },
  // problem--> 178
  {
    id: "valid-mountain-array",
    title: "Valid Mountain Array",
    description:
      "Given an array of integers, return true if and only if it is a valid mountain array.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "0,3,2,1" },
    ],
    buttonText: "Validate",
    difficulty: "Beginner",
  },
  // problem--> 179
  {
    id: "sort-array-by-parity",
    title: "Sort Array By Parity",
    description:
      "Given an array of integers, return an array where all the even integers appear at the beginning of the array, followed by all the odd integers.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,1,2,4" },
    ],
    buttonText: "Sort",
    difficulty: "Beginner",
  },
  // problem--> 180
  {
    id: "sort-array-by-parity-ii",
    title: "Sort Array By Parity II",
    description:
      "Given an array of integers where half of the integers are odd, and the other half are even. Sort the array so that whenever arr[i] is odd, i is odd, and whenever arr[i] is even, i is even.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "4,2,5,7" },
    ],
    buttonText: "Sort",
    difficulty: "Intermediate",
  },
  // problem--> 181
  {
    id: "squares-of-a-sorted-array",
    title: "Squares of a Sorted Array",
    description:
      "Given an integer array sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Sorted Array",
        type: "text",
        defaultValue: "-4,-1,0,3,10",
      },
    ],
    buttonText: "Square and Sort",
    difficulty: "Beginner",
  },
  // problem--> 182
  {
    id: "height-checker",
    title: "Height Checker",
    description:
      "A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Return the number of indices where the students' heights do not match the expected order.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "heights",
        label: "Heights",
        type: "text",
        defaultValue: "1,1,4,2,1,3",
      },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 183
  {
    id: "degree-of-an-array",
    title: "Degree of an Array",
    description:
      "Given a non-empty array of non-negative integers, the degree of this array is defined as the maximum frequency of any one of its elements. Find the smallest possible length of a contiguous subarray that has the same degree.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,2,3,1" },
    ],
    buttonText: "Find Length",
    difficulty: "Intermediate",
  },
  // problem--> 184
  {
    id: "magic-squares-in-grid",
    title: "Magic Squares In Grid",
    description:
      'A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all sum to the same value. Given a grid of integers, how many 3 x 3 "magic square" subgrids are there?',
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "grid",
        label: "Grid (JSON)",
        type: "textarea",
        defaultValue: "[[4,3,8,4],[9,5,1,9],[2,7,6,2]]",
      },
    ],
    buttonText: "Count",
    difficulty: "Advanced",
  },
  // problem--> 185
  {
    id: "teemo-attacking",
    title: "Teemo Attacking",
    description:
      "In LOL, our hero Teemo attacks his enemy Ashe. Teemo's attacks have a poison effect. Given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration, return the total time that Ashe is in poisoned condition.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "timeSeries",
        label: "Time Series",
        type: "text",
        defaultValue: "1,4",
      },
      { id: "duration", label: "Duration", type: "number", defaultValue: 2 },
    ],
    buttonText: "Calculate",
    difficulty: "Intermediate",
  },
  // problem--> 186
  {
    id: "can-place-flowers",
    title: "Can Place Flowers",
    description:
      "You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0s and 1s, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "flowerbed",
        label: "Flowerbed",
        type: "text",
        defaultValue: "1,0,0,0,1",
      },
      { id: "n", label: "n", type: "number", defaultValue: 1 },
    ],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 187
  {
    id: "maximum-average-subarray-i",
    title: "Maximum Average Subarray I",
    description:
      "You are given an integer array consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "1,12,-5,-6,50,3",
      },
      { id: "k", label: "k", type: "number", defaultValue: 4 },
    ],
    buttonText: "Find Max Average",
    difficulty: "Intermediate",
  },
  // problem--> 188
  {
    id: "k-diff-pairs-in-an-array",
    title: "K-diff Pairs in an Array",
    description:
      "Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. A k-diff pair is an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,1,4,1,5" },
      { id: "k", label: "k", type: "number", defaultValue: 2 },
    ],
    buttonText: "Find Pairs",
    difficulty: "Intermediate",
  },
  // problem--> 189
  {
    id: "find-the-town-judge",
    title: "Find the Town Judge",
    description:
      "In a town, there are N people labelled from 1 to N. There is a rumor that one of these people is secretly the town judge. If the town judge exists, then: The town judge trusts nobody. Everybody (except for the town judge) trusts the town judge. There is exactly one person that satisfies properties 1 and 2. Find the town judge.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "n", label: "N people", type: "number", defaultValue: 3 },
      {
        id: "trust",
        label: "Trust pairs (JSON)",
        type: "textarea",
        defaultValue: "[[1,3],[2,3]]",
      },
    ],
    buttonText: "Find Judge",
    difficulty: "Intermediate",
  },
  // problem--> 190
  {
    id: "pancake-sorting",
    title: "Pancake Sorting",
    description:
      "Given an array of integers, sort the array by performing a series of pancake flips. A pancake flip consists of choosing a positive integer k <= arr.length, then reversing the order of the first k elements of arr. Return the k-values corresponding to the pancake flips that sort arr.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "3,2,4,1" },
    ],
    buttonText: "Get Flips",
    difficulty: "Advanced",
  },
  // problem--> 191
  {
    id: "next-greater-element-i",
    title: "Next Greater Element I",
    description:
      "You are given two integer arrays nums1 and nums2, where nums1 is a subset of nums2. For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "nums1", label: "nums1", type: "text", defaultValue: "4,1,2" },
      { id: "nums2", label: "nums2", type: "text", defaultValue: "1,3,4,2" },
    ],
    buttonText: "Find",
    difficulty: "Intermediate",
  },
  // problem--> 192
  {
    id: "next-greater-element-ii",
    title: "Next Greater Element II",
    description:
      "Given a circular integer array (i.e., the next element of the last element is the first element), return the next greater number for every element in the array.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "arr",
        label: "Circular Array",
        type: "text",
        defaultValue: "1,2,1",
      },
    ],
    buttonText: "Find",
    difficulty: "Intermediate",
  },
  // problem--> 193
  {
    id: "dot-product-of-two-sparse-vectors",
    title: "Dot Product of Two Sparse Vectors",
    description: "Given two sparse vectors, compute their dot product.",
    category: "Control Flow and Loops",
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
    difficulty: "Intermediate",
  },
  // problem--> 194
  {
    id: "logger-rate-limiter",
    title: "Logger Rate Limiter",
    description:
      "Design a logger system that receives a stream of messages, each with its own timestamp. It should print a message only if that same message has not been printed in the last 10 seconds.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "messages",
        label: "Messages (JSON [[msg, ts]])",
        type: "textarea",
        defaultValue:
          '[["foo", 1], ["bar", 2], ["foo", 3], ["bar", 8], ["foo", 10], ["foo", 11]]',
      },
    ],
    buttonText: "Run Logger",
    difficulty: "Intermediate",
  },
  // problem--> 195
  {
    id: "moving-average-from-data-stream",
    title: "Moving Average from Data Stream",
    description:
      "Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "size", label: "Window Size", type: "number", defaultValue: 3 },
    ],
    buttonText: "Simulate",
    difficulty: "Intermediate",
  },
  // problem--> 196
  {
    id: "design-tic-tac-toe",
    title: "Design Tic-Tac-Toe",
    description:
      "Design a Tic-tac-toe game that is played between two players on a n x n grid. You may assume the following rules: A move is guaranteed to be valid and is placed on an empty block. Once a winning condition is reached, no more moves is allowed. A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.",
    category: "Control Flow and Loops",
    inputs: [{ id: "n", label: "Grid Size", type: "number", defaultValue: 3 }],
    buttonText: "Simulate Game",
    difficulty: "Advanced",
  },
  // problem--> 197
  {
    id: "battleships-in-a-board",
    title: "Battleships in a Board",
    description:
      "Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board. Battleships can only be placed horizontally or vertically on the board. In other words, they can only be made of the shape 1 x k or k x 1.",
    category: "Control Flow and Loops",
    inputs: [
      {
        id: "board",
        label: "Board (JSON)",
        type: "textarea",
        defaultValue: '[["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]',
      },
    ],
    buttonText: "Count",
    difficulty: "Intermediate",
  },
  // problem--> 198
  {
    id: "shortest-distance-to-a-character",
    title: "Shortest Distance to a Character",
    description:
      "Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.",
    category: "Control Flow and Loops",
    inputs: [
      { id: "s", label: "String", type: "text", defaultValue: "loveleetcode" },
      { id: "c", label: "Character", type: "text", defaultValue: "e" },
    ],
    buttonText: "Calculate Distances",
    difficulty: "Intermediate",
  },
  // problem--> 199
  {
    id: "binary-gap",
    title: "Binary Gap",
    description:
      "Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no adjacent 1's, return 0.",
    category: "Control Flow and Loops",
    inputs: [{ id: "n", label: "Number", type: "number", defaultValue: 22 }],
    buttonText: "Find Gap",
    difficulty: "Beginner",
  },
  // problem--> 200
  {
    id: "armstrong-number-check",
    title: "Armstrong Number Check",
    description:
      "An Armstrong number is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3*3*3 + 7*7*7 + 1*1*1 = 371. Write a function to check if a number is an Armstrong number.",
    category: "Control Flow and Loops",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 153 }],
    buttonText: "Check",
    difficulty: "Beginner",
  },
];
