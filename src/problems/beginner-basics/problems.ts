import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "say-hello",
    title: "Say Hello",
    description:
      "Write a function that takes a name as a string and returns a greeting message like 'Hello, World!'.",
    category: "Beginner Basics",
    inputs: [
      { id: "name", label: "Name", type: "text", defaultValue: "World" },
    ],
    buttonText: "Greet",
    difficulty: "Beginner",
  },
  // problem--> 02
  {
    id: "simple-addition",
    title: "Simple Addition",
    description:
      "Write a function that takes two numbers as arguments and returns their sum.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 5 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 10 },
    ],
    buttonText: "Add",
    difficulty: "Beginner",
  },
  // problem--> 03
  {
    id: "declare-variable-let",
    title: "Declare a Variable (`let`)",
    description:
      "Declare a variable named `message` using `let` and assign it the value 'JavaScript is fun'. Return the variable.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  {
    id: "declare-constant-const",
    title: "Declare a Constant (`const`)",
    description:
      "Declare a constant named `DAYS_IN_WEEK` using `const` and assign it the value 7. Return the constant.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },

  // problem--> 05
  {
    id: "simple-subtraction",
    title: "Simple Subtraction",
    description:
      "Write a function that takes two numbers and returns their difference (number 1 - number 2).",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 20 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 8 },
    ],
    buttonText: "Subtract",
    difficulty: "Beginner",
  },
  // problem--> 06
  {
    id: "simple-multiplication",
    title: "Simple Multiplication",
    description:
      "Write a function that takes two numbers and returns their product.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 7 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 6 },
    ],
    buttonText: "Multiply",
    difficulty: "Beginner",
  },
  // problem--> 07
  {
    id: "simple-division",
    title: "Simple Division",
    description:
      "Write a function that divides one number by another. Handle the case where the divisor is zero by returning a specific message.",
    category: "Beginner Basics",
    inputs: [
      { id: "dividend", label: "Dividend", type: "number", defaultValue: 100 },
      { id: "divisor", label: "Divisor", type: "number", defaultValue: 10 },
    ],
    buttonText: "Divide",
    difficulty: "Beginner",
  },
  // problem--> 08
  {
    id: "find-remainder-modulo",
    title: "Find the Remainder (Modulo)",
    description:
      "Use the modulo operator (%) to find the remainder of a division.",
    category: "Beginner Basics",
    inputs: [
      { id: "dividend", label: "Dividend", type: "number", defaultValue: 10 },
      { id: "divisor", label: "Divisor", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Remainder",
    difficulty: "Beginner",
  },
  // problem--> 09
  {
    id: "exponentiation-operator",
    title: "Exponentiation",
    description:
      "Use the exponentiation operator (**) to calculate a number raised to a power (e.g., 2³).",
    category: "Beginner Basics",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 2 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 3 },
    ],
    buttonText: "Calculate Power",
    difficulty: "Beginner",
  },
  // problem--> 10
  {
    id: "increment-a-number",
    title: "Increment a Number",
    description:
      "Write a function that takes a number and returns the number incremented by one.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Increment",
    difficulty: "Beginner",
  },
  // problem--> 11
  {
    id: "decrement-a-number",
    title: "Decrement a Number",
    description:
      "Write a function that takes a number and returns the number decremented by one.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Decrement",
    difficulty: "Beginner",
  },
  // problem--> 12
  {
    id: "string-length",
    title: "Get String Length",
    description:
      "Use the `.length` property to find the number of characters in a string.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "JavaScript" },
    ],
    buttonText: "Get Length",
    difficulty: "Beginner",
  },
  // problem--> 13
  {
    id: "get-first-character",
    title: "Get First Character",
    description:
      "Get the first character of a string using bracket notation `[]`.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "Hello" },
    ],
    buttonText: "Get First Char",
    difficulty: "Beginner",
  },
  // problem--> 14
  {
    id: "get-last-character",
    title: "Get Last Character",
    description:
      "Get the last character of a string. This requires using the string's length.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "World" },
    ],
    buttonText: "Get Last Char",
    difficulty: "Beginner",
  },
  // problem--> 15
  {
    id: "concatenate-strings",
    title: "Concatenate Strings with `+`",
    description: "Combine two strings into one using the `+` operator.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str1",
        label: "First String",
        type: "text",
        defaultValue: "Hello, ",
      },
      {
        id: "str2",
        label: "Second String",
        type: "text",
        defaultValue: "World!",
      },
    ],
    buttonText: "Concatenate",
    difficulty: "Beginner",
  },
  // problem--> 16
  {
    id: "template-literals",
    title: "Create a String with Template Literals",
    description:
      "Use a template literal (``) with an embedded variable (`${...}`) to create a dynamic greeting string.",
    category: "Beginner Basics",
    inputs: [
      { id: "name", label: "Name", type: "text", defaultValue: "Alice" },
    ],
    buttonText: "Create Greeting",
    difficulty: "Beginner",
  },
  // problem--> 17
  {
    id: "typeof-string",
    title: "Check Type of String",
    description:
      "Use the `typeof` operator to verify that the data type of 'hello' is 'string'.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 18
  {
    id: "typeof-number",
    title: "Check Type of Number",
    description:
      "Use the `typeof` operator to verify the data type of 42 is 'number'.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 19
  {
    id: "typeof-boolean",
    title: "Check Type of Boolean",
    description:
      "Use the `typeof` operator to verify the data type of `true` is 'boolean'.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 20
  {
    id: "number-to-string",
    title: "Convert Number to String",
    description:
      "Explicitly convert a number to its string representation using `String()` and return the result.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 123 }],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 21
  {
    id: "string-to-number",
    title: "Convert String to Number",
    description:
      "Convert a string representing a number into an actual number type using `Number()`.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String Number", type: "text", defaultValue: "45.5" },
    ],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 22
  {
    id: "string-to-integer",
    title: "Convert String to Integer",
    description:
      "Use `parseInt()` to convert a string to a whole number (integer), discarding any decimal part.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String Number", type: "text", defaultValue: "99.9" },
    ],
    buttonText: "Parse Integer",
    difficulty: "Beginner",
  },
  // problem--> 23
  {
    id: "string-to-float",
    title: "Convert String to Float",
    description:
      "Use `parseFloat()` to convert a string to a floating-point number (a number with decimals).",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "String Number",
        type: "text",
        defaultValue: "123.456",
      },
    ],
    buttonText: "Parse Float",
    difficulty: "Beginner",
  },
  /// problem--> 24
  {
    id: "boolean-true",
    title: "Return `true`",
    description:
      "Write a function that simply returns the boolean value `true`.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 25
  {
    id: "boolean-false",
    title: "Return `false`",
    description:
      "Write a function that simply returns the boolean value `false`.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 26
  {
    id: "strict-equality",
    title: "Strict Equality (===)",
    description:
      "Compare two values for strict equality. The `===` operator checks for both equal value AND equal data type.",
    category: "Beginner Basics",
    inputs: [
      { id: "val1", label: "Value 1", type: "text", defaultValue: "5" },
      { id: "val2", label: "Value 2", type: "text", defaultValue: 5 },
    ],
    buttonText: "Compare with ===",
    difficulty: "Beginner",
  },
  // problem--> 27
  {
    id: "loose-equality",
    title: "Loose Equality (==)",
    description:
      "Compare two values for loose equality. The `==` operator performs type coercion, which can lead to unexpected results.",
    category: "Beginner Basics",
    inputs: [
      { id: "val1", label: "Value 1", type: "text", defaultValue: "5" },
      { id: "val2", label: "Value 2", type: "text", defaultValue: 5 },
    ],
    buttonText: "Compare with ==",
    difficulty: "Beginner",
  },
  // problem--> 28
  {
    id: "strict-inequality",
    title: "Strict Inequality (!==)",
    description:
      "Check if two values are not strictly equal (different value OR different type).",
    category: "Beginner Basics",
    inputs: [
      { id: "val1", label: "Value 1", type: "text", defaultValue: "5" },
      { id: "val2", label: "Value 2", type: "text", defaultValue: 5 },
    ],
    buttonText: "Compare with !==",
    difficulty: "Beginner",
  },
  // problem--> 29
  {
    id: "is-greater-than",
    title: "Greater Than (>)",
    description: "Check if one number is greater than another.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 5 },
    ],
    buttonText: "Compare with >",
    difficulty: "Beginner",
  },
  // problem--> 30
  {
    id: "is-less-than",
    title: "Less Than (<)",
    description: "Check if one number is less than another.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 5 },
    ],
    buttonText: "Compare with <",
    difficulty: "Beginner",
  },
  // problem--> 31
  {
    id: "is-greater-or-equal",
    title: "Greater Than or Equal To (>=)",
    description: "Check if one number is greater than or equal to another.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 10 },
    ],
    buttonText: "Compare with >=",
    difficulty: "Beginner",
  },
  // problem--> 32
  {
    id: "is-less-or-equal",
    title: "Less Than or Equal To (<=)",
    description: "Check if one number is less than or equal to another.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 5 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 10 },
    ],
    buttonText: "Compare with <=",
    difficulty: "Beginner",
  },
  // problem--> 33
  {
    id: "logical-and",
    title: "Logical AND (&&)",
    description:
      "Write a function that checks if a person is old enough to drive (age >= 18) AND has a license.",
    category: "Beginner Basics",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 21 },
      {
        id: "hasLicense",
        label: "Has License? (true/false)",
        type: "text",
        defaultValue: "true",
      },
    ],
    buttonText: "Check Conditions with &&",
    difficulty: "Beginner",
  },
  // problem--> 34
  {
    id: "logical-or",
    title: "Logical OR (||)",
    description:
      "Write a function that returns true if a user is either an 'admin' OR a 'manager'.",
    category: "Beginner Basics",
    inputs: [
      { id: "role", label: "User Role", type: "text", defaultValue: "admin" },
    ],
    buttonText: "Check Conditions with ||",
    difficulty: "Beginner",
  },
  // problem--> 35
  {
    id: "logical-not",
    title: "Logical NOT (!)",
    description:
      "Write a function that inverts a boolean value. If the input is true, it should return false, and vice-versa.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "bool",
        label: "Input Boolean (true/false)",
        type: "text",
        defaultValue: "true",
      },
    ],
    buttonText: "Invert with !",
    difficulty: "Beginner",
  },
  // problem--> 36
  {
    id: "simple-if-statement",
    title: "Simple `if` Statement",
    description:
      "Write a function that returns 'Access Granted' if a password is correct ('secret123'), otherwise it returns nothing.",
    category: "Beginner Basics",
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
  // problem--> 37
  {
    id: "simple-if-else",
    title: "Simple `if...else` Statement",
    description:
      "Write a function that returns 'Adult' if age is 18 or greater, and 'Minor' otherwise.",
    category: "Beginner Basics",
    inputs: [{ id: "age", label: "Age", type: "number", defaultValue: 21 }],
    buttonText: "Check Age",
    difficulty: "Beginner",
  },
  // problem--> 38
  {
    id: "check-is-even",
    title: "Check if Number is Even",
    description:
      "Write a function that takes a number and returns true if it is even, and false otherwise. Use the modulo operator.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 8 }],
    buttonText: "Check Evenness",
    difficulty: "Beginner",
  },
  // problem--> 39
  {
    id: "check-is-positive",
    title: "Check Positive, Negative, or Zero",
    description:
      "Write a function using `if...else if...else` to return 'Positive', 'Negative', or 'Zero' for a given number.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: -5 }],
    buttonText: "Check Number",
    difficulty: "Beginner",
  },
  // problem--> 40
  {
    id: "ternary-operator-check",
    title: "Check with Ternary Operator",
    description:
      "Use the ternary operator as a concise one-line `if...else` to return a welcome message if a user is logged in.",
    category: "Beginner Basics",
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
  // problem--> 41
  {
    id: "simple-switch-statement",
    title: "Simple `switch` Statement",
    description:
      "Use a `switch` statement to return a message based on a user's subscription level ('free', 'pro', 'vip'). Include a default case.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "level",
        label: "Subscription Level",
        type: "text",
        defaultValue: "pro",
      },
    ],
    buttonText: "Get Subscription Message",
    difficulty: "Beginner",
  },
  // problem--> 42
  {
    id: "simple-for-loop",
    title: "Simple `for` Loop",
    description:
      "Use a `for` loop to create and return a string of numbers from 0 to 4, separated by spaces.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 43
  {
    id: "for-loop-sum",
    title: "Sum with a `for` Loop",
    description:
      "Use a `for` loop to calculate the sum of all numbers from 1 to a given number.",
    category: "Beginner Basics",
    inputs: [
      { id: "num", label: "Sum up to", type: "number", defaultValue: 10 },
    ],
    buttonText: "Calculate Sum",
    difficulty: "Beginner",
  },
  // problem--> 44
  {
    id: "for-loop-countdown",
    title: "Countdown with a `for` Loop",
    description:
      "Use a `for` loop to generate a countdown string from a given number down to 1.",
    category: "Beginner Basics",
    inputs: [
      { id: "start", label: "Start from", type: "number", defaultValue: 5 },
    ],
    buttonText: "Start Countdown",
    difficulty: "Beginner",
  },
  // problem--> 45
  {
    id: "simple-while-loop",
    title: "Simple `while` Loop",
    description:
      "Use a `while` loop to count from 1 up to 5 and return the numbers as a string.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 46
  {
    id: "create-simple-function",
    title: "Create a Simple Function",
    description:
      "Create a function named `getGreeting` that takes no arguments and returns the string 'Hello, function!'.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 47
  {
    id: "function-with-one-parameter",
    title: "Function with One Parameter",
    description:
      "Write a function `square` that takes one number as a parameter and returns its square.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 8 }],
    buttonText: "Square",
    difficulty: "Beginner",
  },
  // problem--> 48
  {
    id: "function-expression",
    title: "Function Expression",
    description:
      "Create a function by assigning an anonymous function to a variable named `multiply`. The function should multiply two numbers.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 4 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 5 },
    ],
    buttonText: "Multiply",
    difficulty: "Beginner",
  },
  // problem--> 49
  {
    id: "arrow-function-syntax",
    title: "Arrow Function Syntax",
    description:
      "Rewrite a simple function that doubles a number using the more concise arrow function syntax.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 9 }],
    buttonText: "Double with Arrow",
    difficulty: "Beginner",
  },
  // problem--> 50
  {
    id: "function-return-boolean",
    title: "Function Returning a Boolean",
    description:
      "Write a function `isAdult` that takes an age and returns `true` if the age is 18 or over, and `false` otherwise.",
    category: "Beginner Basics",
    inputs: [{ id: "age", label: "Age", type: "number", defaultValue: 25 }],
    buttonText: "Check if Adult",
    difficulty: "Beginner",
  },
  // problem--> 51
  {
    id: "create-empty-array",
    title: "Create an Empty Array",
    description:
      "Create an empty array and assign it to a variable named `myArray`. Return a string describing the result.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 52
  {
    id: "create-array-with-elements",
    title: "Create an Array with Elements",
    description:
      "Create an array containing the numbers 1, 2, and 3. Return the array as a string.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 53
  {
    id: "get-array-length",
    title: "Get Array Length",
    description:
      "Find the number of elements in an array using the `.length` property.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "apple,banana,cherry",
      },
    ],
    buttonText: "Get Length",
    difficulty: "Beginner",
  },
  // problem--> 54
  {
    id: "access-first-array-element",
    title: "Access First Array Element",
    description: "Get the first element from an array using its index.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "red,green,blue",
      },
    ],
    buttonText: "Get First",
    difficulty: "Beginner",
  },
  // problem--> 55
  {
    id: "access-last-array-element",
    title: "Access Last Array Element",
    description: "Get the last element from an array using its length.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "red,green,blue",
      },
    ],
    buttonText: "Get Last",
    difficulty: "Beginner",
  },
  // problem--> 56
  {
    id: "modify-array-element",
    title: "Modify an Array Element",
    description:
      "Change the value of the second element in an array to 'new value'. Return the modified array as a string.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c",
      },
    ],
    buttonText: "Modify",
    difficulty: "Beginner",
  },
  // problem--> 57
  {
    id: "array-push",
    title: "Add to End of Array with `.push()`",
    description:
      "Add a new element to the end of an array using the `.push()` method. Return the new array.",
    category: "Beginner Basics",
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
        type: "number",
        defaultValue: 4,
      },
    ],
    buttonText: "Push",
    difficulty: "Beginner",
  },
  // problem--> 58
  {
    id: "array-pop",
    title: "Remove from End of Array with `.pop()`",
    description:
      "Remove the last element from an array using the `.pop()` method. Return the modified array.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Pop",
    difficulty: "Beginner",
  },
  // problem--> 59
  {
    id: "create-simple-object",
    title: "Create a Simple Object",
    description:
      "Create an object representing a car with properties for `make` and `model`. Return the object as a JSON string.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 60
  {
    id: "access-object-property-dot",
    title: "Access Object Property with Dot Notation",
    description:
      "Create a book object and access its `title` property using dot notation.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 61
  {
    id: "access-object-property-bracket",
    title: "Access Object Property with Bracket Notation",
    description:
      "Create a book object and access its `author` property using bracket notation.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 62
  {
    id: "modify-object-property",
    title: "Modify an Object Property",
    description:
      "Create a `person` object and then change the value of their `age` property. Return the modified object.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 63
  {
    id: "add-object-property",
    title: "Add a New Property to an Object",
    description:
      "Create a `product` object and then add a new property `inStock` with a boolean value. Return the modified object.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 64
  {
    id: "string-to-uppercase",
    title: "Convert String to Uppercase",
    description:
      "Use the `.toUpperCase()` method to convert a string to all uppercase letters.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello world" },
    ],
    buttonText: "To Uppercase",
    difficulty: "Beginner",
  },
  // problem--> 65
  {
    id: "string-to-lowercase",
    title: "Convert String to Lowercase",
    description:
      "Use the `.toLowerCase()` method to convert a string to all lowercase letters.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "HELLO WORLD" },
    ],
    buttonText: "To Lowercase",
    difficulty: "Beginner",
  },
  // problem--> 66
  {
    id: "string-includes",
    title: "Check if String Includes Substring",
    description:
      "Use the `.includes()` method to check if a string contains a specific substring.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "mainStr",
        label: "Main String",
        type: "text",
        defaultValue: "The quick brown fox",
      },
      {
        id: "subStr",
        label: "Substring to find",
        type: "text",
        defaultValue: "quick",
      },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 67
  {
    id: "string-slice",
    title: "Extract a Substring with `.slice()`",
    description: "Use the `.slice()` method to extract a portion of a string.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "JavaScript" },
      { id: "start", label: "Start Index", type: "number", defaultValue: 0 },
      { id: "end", label: "End Index", type: "number", defaultValue: 4 },
    ],
    buttonText: "Slice",
    difficulty: "Beginner",
  },
  // problem--> 68
  {
    id: "string-trim",
    title: "Remove Whitespace with `.trim()`",
    description:
      "Use the `.trim()` method to remove whitespace from the beginning and end of a string.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "   Hello   " },
    ],
    buttonText: "Trim",
    difficulty: "Beginner",
  },
  // problem--> 69
  {
    id: "for-loop-over-array",
    title: "Iterate Over an Array with a `for` Loop",
    description:
      "Use a standard `for` loop to iterate through an array and build a string of its elements.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c",
      },
    ],
    buttonText: "Iterate",
    difficulty: "Beginner",
  },
  // problem--> 70
  {
    id: "area-of-rectangle",
    title: "Calculate Area of a Rectangle",
    description:
      "Write a function that takes the width and height of a rectangle and returns its area.",
    category: "Beginner Basics",
    inputs: [
      { id: "width", label: "Width", type: "number", defaultValue: 10 },
      { id: "height", label: "Height", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate Area",
    difficulty: "Beginner",
  },
  // problem--> 71
  {
    id: "celsius-to-fahrenheit",
    title: "Convert Celsius to Fahrenheit",
    description:
      "Write a function to convert a temperature from Celsius to Fahrenheit. Formula: (C * 9/5) + 32.",
    category: "Beginner Basics",
    inputs: [
      { id: "celsius", label: "Celsius", type: "number", defaultValue: 20 },
    ],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 72
  {
    id: "check-undefined",
    title: "Check for `undefined`",
    description:
      "Demonstrate that an uninitialized variable has the value `undefined`.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 73
  {
    id: "check-null",
    title: "Check for `null`",
    description:
      "Explicitly assign `null` to a variable to show its value and type.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 74
  {
    id: "string-repeat",
    title: "Repeat a String with `.repeat()`",
    description:
      "Use the `.repeat()` method to create a new string by repeating an existing one.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abc" },
      { id: "count", label: "Repeat Count", type: "number", defaultValue: 3 },
    ],
    buttonText: "Repeat",
    difficulty: "Beginner",
  },
  // problem--> 75
  {
    id: "array-join",
    title: "Join Array Elements into a String",
    description:
      "Use the `.join()` method to combine all elements of an array into a single string.",
    category: "Beginner Basics",
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
    difficulty: "Beginner",
  },
  // problem--> 76
  {
    id: "find-array-average",
    title: "Find the Average of an Array",
    description:
      "Write a function that calculates the average of numbers in an array.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "10,20,30,40,50",
      },
    ],
    buttonText: "Calculate Average",
    difficulty: "Beginner",
  },
  // problem--> 77
  {
    id: "absolute-value",
    title: "Get Absolute Value",
    description:
      "Use `Math.abs()` to find the absolute value of a number (its distance from zero).",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: -10 }],
    buttonText: "Get Absolute Value",
    difficulty: "Beginner",
  },
  // problem--> 78
  {
    id: "round-number-up",
    title: "Round Number Up",
    description:
      "Use `Math.ceil()` to round a number up to the next largest integer.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 4.2 }],
    buttonText: "Round Up",
    difficulty: "Beginner",
  },
  // problem--> 79
  {
    id: "round-number-down",
    title: "Round Number Down",
    description:
      "Use `Math.floor()` to round a number down to the nearest integer.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 4.8 }],
    buttonText: "Round Down",
    difficulty: "Beginner",
  },
  // problem--> 80
  {
    id: "round-to-nearest",
    title: "Round to Nearest Integer",
    description: "Use `Math.round()` to round a number to the nearest integer.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 4.5 }],
    buttonText: "Round",
    difficulty: "Beginner",
  },
  // problem--> 81
  {
    id: "random-number",
    title: "Generate a Random Number",
    description:
      "Use `Math.random()` to generate a random decimal number between 0 (inclusive) and 1 (exclusive).",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 82
  {
    id: "random-integer-in-range",
    title: "Generate a Random Integer in a Range",
    description:
      "Write a function to generate a random integer between a min and max value (inclusive).",
    category: "Beginner Basics",
    inputs: [
      { id: "min", label: "Minimum", type: "number", defaultValue: 1 },
      { id: "max", label: "Maximum", type: "number", defaultValue: 10 },
    ],
    buttonText: "Generate",
    difficulty: "Beginner",
  },
  // problem--> 83
  {
    id: "string-starts-with",
    title: "Check if String Starts With Substring",
    description:
      "Use the `.startsWith()` method to check if a string begins with a specific substring.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "Main String",
        type: "text",
        defaultValue: "Hello world",
      },
      {
        id: "subStr",
        label: "Substring to check",
        type: "text",
        defaultValue: "Hello",
      },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 84
  {
    id: "string-ends-with",
    title: "Check if String Ends With Substring",
    description:
      "Use the `.endsWith()` method to check if a string ends with a specific substring.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "Main String",
        type: "text",
        defaultValue: "Hello world",
      },
      {
        id: "subStr",
        label: "Substring to check",
        type: "text",
        defaultValue: "world",
      },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 85
  {
    id: "string-replace-first",
    title: "Replace First Occurrence in a String",
    description:
      "Use the `.replace()` method to replace the first occurrence of a substring.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "good dog good day",
      },
      { id: "target", label: "Target", type: "text", defaultValue: "good" },
      {
        id: "replacement",
        label: "Replacement",
        type: "text",
        defaultValue: "happy",
      },
    ],
    buttonText: "Replace",
    difficulty: "Beginner",
  },
  // problem--> 86
  {
    id: "string-split",
    title: "Split a String into an Array",
    description:
      "Use the `.split()` method to break a sentence into an array of words.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "Sentence",
        type: "text",
        defaultValue: "JavaScript is fun",
      },
    ],
    buttonText: "Split",
    difficulty: "Beginner",
  },
  // problem--> 87
  {
    id: "array-shift",
    title: "Remove from Start of Array with `.shift()`",
    description:
      "Remove the first element from an array using the `.shift()` method. Return the modified array.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Shift",
    difficulty: "Beginner",
  },
  // problem--> 88
  {
    id: "array-unshift",
    title: "Add to Start of Array with `.unshift()`",
    description:
      "Add a new element to the beginning of an array using the `.unshift()` method. Return the new array.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "2,3,4",
      },
      {
        id: "element",
        label: "Element to add",
        type: "number",
        defaultValue: 1,
      },
    ],
    buttonText: "Unshift",
    difficulty: "Beginner",
  },
  // problem--> 89
  {
    id: "array-includes",
    title: "Check if Array Includes a Value",
    description:
      "Use the `.includes()` method to check if an array contains a specific value.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "apple,banana,cherry",
      },
      {
        id: "value",
        label: "Value to find",
        type: "text",
        defaultValue: "banana",
      },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 90
  {
    id: "array-index-of",
    title: "Find Index of an Element in an Array",
    description:
      "Use the `.indexOf()` method to find the index of the first occurrence of a value.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c,b",
      },
      { id: "value", label: "Value to find", type: "text", defaultValue: "b" },
    ],
    buttonText: "Find Index",
    difficulty: "Beginner",
  },
  // problem--> 91
  {
    id: "array-slice",
    title: "Extract a Portion of an Array with `.slice()`",
    description:
      "Use the `.slice()` method to create a new array containing a portion of an existing array.",
    category: "Beginner Basics",
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
    difficulty: "Beginner",
  },
  // problem--> 92
  {
    id: "for-of-loop-array",
    title: "Iterate Over an Array with `for...of`",
    description:
      "Use a `for...of` loop to iterate directly over the values of an array.",
    category: "Beginner Basics",
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
  // problem--> 93
  {
    id: "is-nan-check",
    title: "Check for `NaN`",
    description:
      "Use the `Number.isNaN()` method to correctly check if a value is `NaN` (Not a Number).",
    category: "Beginner Basics",
    inputs: [
      {
        id: "value",
        label: "Value to check",
        type: "text",
        defaultValue: "hello",
      },
    ],
    buttonText: "Check `NaN`",
    difficulty: "Beginner",
  },
  // problem--> 94
  {
    id: "check-truthy",
    title: "Check for Truthiness",
    description:
      "Write a function that returns `true` if a value is truthy, and `false` if it is falsy.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "value",
        label: "Value to check",
        type: "text",
        defaultValue: "hello",
      },
    ],
    buttonText: "Check Truthy",
    difficulty: "Beginner",
  },
  // problem--> 95
  {
    id: "check-falsy",
    title: "Check for Falsiness",
    description:
      "Write a function that returns `true` if a value is falsy, and `false` if it is truthy.",
    category: "Beginner Basics",
    inputs: [
      { id: "value", label: "Value to check", type: "text", defaultValue: "0" },
    ],
    buttonText: "Check Falsy",
    difficulty: "Beginner",
  },
  // problem--> 96
  {
    id: "get-square-root",
    title: "Calculate Square Root",
    description:
      "Use `Math.sqrt()` to calculate the square root of a non-negative number.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 16 }],
    buttonText: "Get Square Root",
    difficulty: "Beginner",
  },
  // problem--> 97
  {
    id: "get-current-year",
    title: "Get the Current Year",
    description: "Use the `Date` object to get the current four-digit year.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 98
  {
    id: "template-literal-expression",
    title: "Template Literal with an Expression",
    description:
      "Use a template literal to embed the result of an addition directly within a string.",
    category: "Beginner Basics",
    inputs: [
      { id: "a", label: "Number A", type: "number", defaultValue: 5 },
      { id: "b", label: "Number B", type: "number", defaultValue: 10 },
    ],
    buttonText: "Create String",
    difficulty: "Beginner",
  },
  // problem--> 99
  {
    id: "char-at-index",
    title: "Get Character at Index with `.charAt()`",
    description:
      "Use the `.charAt()` method to get the character at a specific index in a string.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "JavaScript" },
      { id: "index", label: "Index", type: "number", defaultValue: 4 },
    ],
    buttonText: "Get Char",
    difficulty: "Beginner",
  },
  // problem--> 100
  {
    id: "nested-object",
    title: "Create a Nested Object",
    description:
      "Create an object that has another object as one of its properties. Return the object as a JSON string.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 101
  {
    id: "access-nested-object-property",
    title: "Access a Nested Object Property",
    description:
      "Access a property from a nested object using chained dot notation.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 102
  {
    id: "nested-if-statement",
    title: "Nested `if` Statement",
    description:
      "Write a function that uses a nested `if` statement to check two conditions: if a number is positive, and if it's also even.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 10 }],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 103
  {
    id: "switch-with-fallthrough",
    title: "`switch` with Fall-through",
    description:
      "Use a `switch` statement where multiple cases share the same code block by omitting the `break` statement.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "day",
        label: "Day of the week",
        type: "text",
        defaultValue: "Sunday",
      },
    ],
    buttonText: "Check if Weekend",
    difficulty: "Beginner",
  },
  // problem--> 104
  {
    id: "for-loop-break",
    title: "Exit a `for` Loop with `break`",
    description:
      "Use the `break` statement to exit a `for` loop early when a condition is met (e.g., finding the first number greater than 5).",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,2,9,4,5",
      },
    ],
    buttonText: "Find > 5",
    difficulty: "Beginner",
  },
  // problem--> 105
  {
    id: "for-loop-continue",
    title: "Skip an Iteration with `continue`",
    description:
      "Use the `continue` statement to skip processing negative numbers while summing up all positive numbers in an array.",
    category: "Beginner Basics",
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
  // problem--> 106
  {
    id: "array-concat",
    title: "Combine Arrays with `.concat()`",
    description:
      "Use the `.concat()` method to merge two arrays into a new array.",
    category: "Beginner Basics",
    inputs: [
      { id: "arr1", label: "Array 1", type: "text", defaultValue: "a,b" },
      { id: "arr2", label: "Array 2", type: "text", defaultValue: "c,d" },
    ],
    buttonText: "Concatenate",
    difficulty: "Beginner",
  },
  // problem--> 107
  {
    id: "string-last-index-of",
    title: "Find Last Index of Substring",
    description:
      "Use the `.lastIndexOf()` method to find the index of the last occurrence of a substring.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "canal" },
      {
        id: "subStr",
        label: "Substring to find",
        type: "text",
        defaultValue: "a",
      },
    ],
    buttonText: "Find Last Index",
    difficulty: "Beginner",
  },
  // problem--> 108
  {
    id: "number-to-fixed",
    title: "Format a Number with `.toFixed()`",
    description:
      "Use the `.toFixed()` method to format a number with a specific number of digits after the decimal point.",
    category: "Beginner Basics",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 3.14159 },
      {
        id: "decimals",
        label: "Decimal Places",
        type: "number",
        defaultValue: 2,
      },
    ],
    buttonText: "Format",
    difficulty: "Beginner",
  },
  // problem--> 109
  {
    id: "for-in-loop-object",
    title: "Iterate Over Object Properties with `for...in`",
    description:
      "Use a `for...in` loop to iterate over the keys of an object and build a result string.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 110
  {
    id: "array-reverse",
    title: "Reverse an Array with `.reverse()`",
    description:
      "Use the `.reverse()` method to reverse the order of elements in an array in-place.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,3,4",
      },
    ],
    buttonText: "Reverse",
    difficulty: "Beginner",
  },
  // problem--> 111
  {
    id: "simple-type-coercion",
    title: "Implicit Type Coercion",
    description:
      "Demonstrate what happens when you use the `+` operator with a number and a string.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 112
  {
    id: "typeof-null-bug",
    title: "The `typeof null` Bug",
    description:
      "Demonstrate the long-standing bug in JavaScript where `typeof null` returns 'object'.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 113
  {
    id: "get-object-keys",
    title: "Get an Object's Keys",
    description:
      "Use `Object.keys()` to get an array of an object's own property names.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 114
  {
    id: "get-object-values",
    title: "Get an Object's Values",
    description:
      "Use `Object.values()` to get an array of an object's own property values.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 115
  {
    id: "check-property-exists",
    title: "Check if a Property Exists in an Object",
    description:
      "Use the `in` operator to check if a property exists on an object.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 116
  {
    id: "delete-object-property",
    title: "Delete an Object Property",
    description:
      "Use the `delete` operator to remove a property from an object. Return the modified object.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 117
  {
    id: "array-from-string",
    title: "Create an Array from a String",
    description:
      "Use `Array.from()` to convert a string into an array of its characters.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 118
  {
    id: "array-find",
    title: "Find an Element in an Array",
    description:
      "Use the `.find()` method to find the first element in an array that satisfies a condition (e.g., the first number greater than 10).",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "5,8,12,4",
      },
    ],
    buttonText: "Find > 10",
    difficulty: "Beginner",
  },
  // problem--> 119
  {
    id: "array-findIndex",
    title: "Find the Index of an Element",
    description:
      "Use the `.findIndex()` method to find the index of the first element in an array that satisfies a condition.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "5,8,12,4",
      },
    ],
    buttonText: "Find Index of > 10",
    difficulty: "Beginner",
  },
  // problem--> 120
  {
    id: "array-every",
    title: "Check if Every Element Passes a Test",
    description:
      "Use the `.every()` method to check if all elements in an array are positive numbers.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,5,9,12",
      },
    ],
    buttonText: "Check all positive",
    difficulty: "Beginner",
  },
  // problem--> 121
  {
    id: "array-some",
    title: "Check if Some Elements Pass a Test",
    description:
      "Use the `.some()` method to check if at least one element in an array is a negative number.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "1,5,-9,12",
      },
    ],
    buttonText: "Check for any negative",
    difficulty: "Beginner",
  },
  // problem--> 122
  {
    id: "string-replaceAll",
    title: "Replace All Occurrences in a String",
    description:
      "Use the `.replaceAll()` method to replace all occurrences of a substring.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "good dog good day",
      },
      { id: "target", label: "Target", type: "text", defaultValue: "good" },
      {
        id: "replacement",
        label: "Replacement",
        type: "text",
        defaultValue: "happy",
      },
    ],
    buttonText: "Replace All",
    difficulty: "Beginner",
  },
  // problem--> 123
  {
    id: "do-while-loop",
    title: "`do...while` Loop",
    description:
      "Use a `do...while` loop that executes at least once, even if the condition is initially false.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 124
  {
    id: "fahrenheit-to-celsius",
    title: "Convert Fahrenheit to Celsius",
    description:
      "Write a function to convert a temperature from Fahrenheit to Celsius. Formula: (F - 32) * 5/9.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "fahrenheit",
        label: "Fahrenheit",
        type: "number",
        defaultValue: 68,
      },
    ],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 125
  {
    id: "get-max-of-two",
    title: "Get Maximum of Two Numbers",
    description: "Use `Math.max()` to find the larger of two numbers.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 15 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 25 },
    ],
    buttonText: "Get Maximum",
    difficulty: "Beginner",
  },
  // problem--> 126
  {
    id: "get-min-of-two",
    title: "Get Minimum of Two Numbers",
    description: "Use `Math.min()` to find the smaller of two numbers.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 15 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 25 },
    ],
    buttonText: "Get Minimum",
    difficulty: "Beginner",
  },
  // problem--> 127
  {
    id: "object-with-method",
    title: "Object with a Method",
    description:
      "Create an object that has a property which is a function (a method). Call the method to get a result.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 128
  {
    id: "array-sort-numbers",
    title: "Sort an Array of Numbers",
    description:
      "Use the `.sort()` method with a compare function to correctly sort an array of numbers.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of numbers",
        type: "text",
        defaultValue: "10, 5, 8, 2, 1",
      },
    ],
    buttonText: "Sort",
    difficulty: "Beginner",
  },
  // problem--> 129
  {
    id: "array-sort-strings",
    title: "Sort an Array of Strings",
    description:
      "Use the `.sort()` method to sort an array of strings alphabetically.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of strings",
        type: "text",
        defaultValue: "cherry,apple,banana",
      },
    ],
    buttonText: "Sort",
    difficulty: "Beginner",
  },
  // problem--> 130
  {
    id: "find-max-in-array",
    title: "Find Maximum Value in an Array",
    description: "Write a function that finds the largest number in an array.",
    category: "Beginner Basics",
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
  // problem--> 131
  {
    id: "find-min-in-array",
    title: "Find Minimum Value in an Array",
    description: "Write a function that finds the smallest number in an array.",
    category: "Beginner Basics",
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
  // problem--> 132
  {
    id: "string-trimStart",
    title: "Remove Leading Whitespace",
    description:
      "Use the `.trimStart()` (or `.trimLeft()`) method to remove whitespace only from the beginning of a string.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "String with whitespace",
        type: "text",
        defaultValue: "   hello   ",
      },
    ],
    buttonText: "Trim Start",
    difficulty: "Beginner",
  },
  // problem--> 133
  {
    id: "string-trimEnd",
    title: "Remove Trailing Whitespace",
    description:
      "Use the `.trimEnd()` (or `.trimRight()`) method to remove whitespace only from the end of a string.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "String with whitespace",
        type: "text",
        defaultValue: "   hello   ",
      },
    ],
    buttonText: "Trim End",
    difficulty: "Beginner",
  },
  // problem--> 134
  {
    id: "array-forEach-loop",
    title: "Iterate with `.forEach()`",
    description:
      "Use the `.forEach()` method to iterate over an array's elements and perform an action.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of strings",
        type: "text",
        defaultValue: "a,b,c",
      },
    ],
    buttonText: "Iterate",
    difficulty: "Beginner",
  },
  // problem--> 135
  {
    id: "object-destructuring-basic",
    title: "Object Destructuring",
    description:
      "Use object destructuring to extract properties from an object into variables.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 136
  {
    id: "array-destructuring-basic",
    title: "Array Destructuring",
    description:
      "Use array destructuring to extract values from an array into variables.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 137
  {
    id: "spread-syntax-in-arrays",
    title: "Spread Syntax in Array Literals",
    description:
      "Use the spread syntax (`...`) to create a new array by combining two existing arrays.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 138
  {
    id: "spread-syntax-in-objects",
    title: "Spread Syntax in Object Literals",
    description:
      "Use the spread syntax (`...`) to create a new object by merging properties from two existing objects.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 139
  {
    id: "function-with-default-params",
    title: "Function with Default Parameters",
    description:
      "Create a function that uses default parameter values for arguments that are not provided.",
    category: "Beginner Basics",
    inputs: [
      { id: "name", label: "Name (optional)", type: "text", defaultValue: "" },
    ],
    buttonText: "Greet",
    difficulty: "Beginner",
  },
  // problem--> 140
  {
    id: "fizzbuzz",
    title: "FizzBuzz Challenge",
    description:
      "Write a function that loops from 1 to a given number. For multiples of 3, return 'Fizz'. For multiples of 5, return 'Buzz'. For multiples of both, return 'FizzBuzz'. Otherwise, return the number. This problem tests loops, conditionals, and the modulo operator.",
    category: "Beginner Basics",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 15 }],
    buttonText: "Run FizzBuzz",
    difficulty: "Beginner",
  },
  // problem--> 141
  {
    id: "count-string-characters",
    title: "Count Character Occurrences",
    description:
      "Write a function that counts how many times a specific character appears in a string.",
    category: "Beginner Basics",
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
    difficulty: "Beginner",
  },
  // problem--> 142
  {
    id: "check-if-array",
    title: "Check if a Variable is an Array",
    description:
      "Use the `Array.isArray()` method to determine if a value is an array.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "value",
        label: "Value to check (JSON)",
        type: "text",
        defaultValue: "[1, 2]",
      },
    ],
    buttonText: "Check Type",
    difficulty: "Beginner",
  },
  // problem--> 143
  {
    id: "remove-first-element-array",
    title: "Remove and Return First Element",
    description:
      "Use the `.shift()` method to remove and return the first element of an array, modifying the array in place.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c",
      },
    ],
    buttonText: "Shift",
    difficulty: "Beginner",
  },
  // problem--> 144
  {
    id: "add-first-element-array",
    title: "Add to the Beginning of an Array",
    description:
      "Use the `.unshift()` method to add one or more elements to the beginning of an array.",
    category: "Beginner Basics",
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
    buttonText: "Unshift",
    difficulty: "Beginner",
  },
  // problem--> 145
  {
    id: "array-copy-with-slice",
    title: "Copy an Array with `.slice()`",
    description:
      "Use the `.slice()` method with no arguments to create a shallow copy of an array.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 146
  {
    id: "array-copy-with-spread",
    title: "Copy an Array with Spread Syntax",
    description:
      "Use the spread syntax (`...`) to create a shallow copy of an array.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 147
  {
    id: "object-destructuring-with-defaults",
    title: "Object Destructuring with Defaults",
    description:
      "Use destructuring to extract a property from an object, providing a default value if the property does not exist.",
    category: "Beginner Basics",
    buttonText: "Run",
    inputs: [],
    difficulty: "Beginner",
  },
  // problem--> 148
  {
    id: "power-of-number",
    title: "Calculate the Power of a Number",
    description:
      "Use the `Math.pow()` function to calculate a base number raised to the power of an exponent.",
    category: "Beginner Basics",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 3 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 4 },
    ],
    buttonText: "Calculate",
    difficulty: "Beginner",
  },
  // problem--> 149
  {
    id: "ternary-operator-is-adult",
    title: "Ternary Operator for Age Check",
    description:
      "Use the ternary operator to return 'Adult' or 'Minor' based on an age variable.",
    category: "Beginner Basics",
    inputs: [{ id: "age", label: "Age", type: "number", defaultValue: 21 }],
    buttonText: "Check Age",
    difficulty: "Beginner",
  },
  // problem--> 150
  {
    id: "check-object-emptiness",
    title: "Check if an Object is Empty",
    description:
      "Write a function to check if a given object has any of its own properties.",
    category: "Beginner Basics",
    inputs: [
      { id: "obj", label: "Object (JSON)", type: "text", defaultValue: "{}" },
    ],
    buttonText: "Check Empty",
    difficulty: "Beginner",
  },
  // problem--> 151
  {
    id: "find-longest-word",
    title: "Find Longest Word in a Sentence",
    description:
      "Write a function that takes a sentence (a string of space-separated words) and returns the longest word.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        defaultValue: "The quick brown fox jumped over the lazy dog",
      },
    ],
    buttonText: "Find Longest",
    difficulty: "Beginner",
  },
  // problem--> 152
  {
    id: "remove-duplicates-from-array",
    title: "Remove Duplicates from an Array",
    description:
      "Write a function that takes an array and returns a new array with all duplicate elements removed.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "1,2,2,3,4,4,5",
      },
    ],
    buttonText: "Remove Duplicates",
    difficulty: "Beginner",
  },
  // problem--> 153
  {
    id: "is-palindrome",
    title: "Check for Palindrome",
    description:
      "Write a function that checks if a given string is a palindrome (reads the same forwards and backward), ignoring case.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "Racecar" },
    ],
    buttonText: "Check Palindrome",
    difficulty: "Beginner",
  },
  // problem--> 154
  {
    id: "title-case-sentence",
    title: "Title Case a Sentence",
    description:
      "Write a function that takes a sentence and returns it with the first letter of each word capitalized.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "sentence",
        label: "Sentence",
        type: "text",
        defaultValue: "I'm a little tea pot",
      },
    ],
    buttonText: "Title Case",
    difficulty: "Beginner",
  },
  // problem--> 155
  {
    id: "array-intersection",
    title: "Find Array Intersection",
    description:
      "Given two arrays, create a function that finds the intersection of the two arrays (elements that are present in both).",
    category: "Beginner Basics",
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
    difficulty: "Beginner",
  },
  // problem--> 156
  {
    id: "falsy-bouncer",
    title: "Falsy Bouncer",
    description:
      'Write a function that removes all falsy values from an array. Falsy values are false, null, 0, "", undefined, and NaN.',
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (JSON format)",
        type: "text",
        defaultValue: '[7, "ate", "", false, 9, null, 0]',
      },
    ],
    buttonText: "Remove Falsy",
    difficulty: "Beginner",
  },
  // problem--> 157
  {
    id: "array-rotation",
    title: "Rotate an Array",
    description:
      "Write a function that rotates an array to the left by a given number of positions.",
    category: "Beginner Basics",
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
    difficulty: "Beginner",
  },
  // problem--> 158
  {
    id: "anagram-check",
    title: "Check for Anagrams",
    description:
      "Write a function to check if two strings are anagrams of each other (contain the same characters in different orders).",
    category: "Beginner Basics",
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
    difficulty: "Beginner",
  },
  // problem--> 159
  {
    id: "sum-all-in-range",
    title: "Sum All Numbers in a Range",
    description:
      "Write a function that takes an array of two numbers and returns the sum of those two numbers plus the sum of all the numbers between them.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array with two numbers",
        type: "text",
        defaultValue: "1,4",
      },
    ],
    buttonText: "Sum Range",
    difficulty: "Beginner",
  },
  // problem--> 160
  {
    id: "caesars-cipher",
    title: "Caesars Cipher (ROT13)",
    description:
      "Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "Encoded String",
        type: "text",
        defaultValue: "SERR PBQR PNZC",
      },
    ],
    buttonText: "Decode",
    difficulty: "Beginner",
  },
  // problem--> 161
  {
    id: "max-char",
    title: "Max Character",
    description:
      "Given a string, return the character that is most commonly used in the string.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abcccccccd" },
    ],
    buttonText: "Find Max Char",
    difficulty: "Beginner",
  },
  // problem--> 162
  {
    id: "vowels-counter",
    title: "Vowels Counter",
    description:
      "Write a function that returns the number of vowels used in a string.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "Hi There!" },
    ],
    buttonText: "Count Vowels",
    difficulty: "Beginner",
  },
  // problem--> 163
  {
    id: "array-of-digits",
    title: "Convert Number to Array of Digits",
    description:
      "Write a function that takes a number and returns an array of its digits.",
    category: "Beginner Basics",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Convert to Array",
    difficulty: "Beginner",
  },
  // problem--> 164
  {
    id: "count-words-in-string",
    title: "Count Words in a String",
    description:
      "Write a function that returns the number of words in a sentence.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "Sentence",
        type: "text",
        defaultValue: "This is a sample sentence.",
      },
    ],
    buttonText: "Count Words",
    difficulty: "Beginner",
  },
  // problem--> 165
  {
    id: "truncate-string",
    title: "Truncate a String",
    description:
      "Truncate a string if it is longer than the given maximum string length. Return the truncated string with a `...` ending.",
    category: "Beginner Basics",
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
    difficulty: "Beginner",
  },
  // problem--> 166
  {
    id: "first-unique-char",
    title: "First Unique Character in a String",
    description:
      "Given a string, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "leetcode" },
    ],
    buttonText: "Find First Unique",
    difficulty: "Beginner",
  },
  // problem--> 167
  {
    id: "merge-sorted-arrays",
    title: "Merge Sorted Arrays",
    description:
      "Given two sorted integer arrays, merge them into a single, sorted array.",
    category: "Beginner Basics",
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
    difficulty: "Beginner",
  },
  // problem--> 168
  {
    id: "move-zeroes",
    title: "Move Zeroes",
    description:
      "Given an integer array, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "0,1,0,3,12",
      },
    ],
    buttonText: "Move Zeroes",
    difficulty: "Beginner",
  },
  // problem--> 169
  {
    id: "roman-to-integer",
    title: "Roman to Integer",
    description: "Given a roman numeral, convert it to an integer.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "roman",
        label: "Roman Numeral",
        type: "text",
        defaultValue: "MCMXCIV",
      },
    ],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 170
  {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    description:
      "Write a function to find the longest common prefix string amongst an array of strings.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of Strings",
        type: "text",
        defaultValue: "flower,flow,flight",
      },
    ],
    buttonText: "Find Prefix",
    difficulty: "Beginner",
  },
  // problem--> 171
  {
    id: "implement-strstr",
    title: "Implement strStr()",
    description:
      "Return the index of the first occurrence of a needle string in a haystack string, or -1 if needle is not part of haystack.",
    category: "Beginner Basics",
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
    difficulty: "Beginner",
  },
  // problem--> 172
  {
    id: "majority-element",
    title: "Majority Element",
    description:
      "Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "2,2,1,1,1,2,2",
      },
    ],
    buttonText: "Find Majority",
    difficulty: "Beginner",
  },
  // problem--> 173
  {
    id: "string-is-unique",
    title: "Check if String has Unique Characters",
    description:
      "Implement an algorithm to determine if a string has all unique characters.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abcdefg" },
    ],
    buttonText: "Check Uniqueness",
    difficulty: "Beginner",
  },
  // problem--> 174
  {
    id: "urlify-string",
    title: "URLify a String",
    description: "Write a method to replace all spaces in a string with '%20'.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "Mr John Smith",
      },
    ],
    buttonText: "URLify",
    difficulty: "Beginner",
  },
  // problem--> 175
  {
    id: "reverse-words-in-string",
    title: "Reverse Words in a String",
    description: "Given an input string, reverse the string word by word.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "the sky is blue",
      },
    ],
    buttonText: "Reverse Words",
    difficulty: "Beginner",
  },
  // problem--> 176
  {
    id: "best-time-to-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    description:
      "Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction, design an algorithm to find the maximum profit.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "prices",
        label: "Array of Prices",
        type: "text",
        defaultValue: "7,1,5,3,6,4",
      },
    ],
    buttonText: "Find Max Profit",
    difficulty: "Beginner",
  },
  // problem--> 177
  {
    id: "simple-calculator",
    title: "Simple Calculator",
    description:
      "Write a function that takes two numbers and an operator ('+', '-', '*', '/') and returns the result.",
    category: "Beginner Basics",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "operator", label: "Operator", type: "text", defaultValue: "*" },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 5 },
    ],
    buttonText: "Calculate",
    difficulty: "Beginner",
  },
  // problem--> 178
  {
    id: "remove-vowels",
    title: "Remove Vowels from a String",
    description:
      "Write a function that takes a string and returns a new string with all vowels removed.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello world" },
    ],
    buttonText: "Remove Vowels",
    difficulty: "Beginner",
  },
  // problem--> 179
  {
    id: "find-all-indexes",
    title: "Find All Indexes of a Value",
    description:
      "Write a function that finds all the indexes at which a given value appears in an array.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a1,b,a,c,a,d",
      },
      { id: "value", label: "Value to Find", type: "text", defaultValue: "a" },
    ],
    buttonText: "Find Indexes",
    difficulty: "Beginner",
  },
  // problem--> 180
  {
    id: "sum-of-squares",
    title: "Sum of Squares",
    description:
      "Write a function that takes an array of numbers and returns the sum of the squares of each number.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,3",
      },
    ],
    buttonText: "Calculate Sum of Squares",
    difficulty: "Beginner",
  },
  // problem--> 181
  {
    id: "object-from-arrays",
    title: "Create Object from Arrays",
    description:
      "Write a function that takes two arrays, one for keys and one for values, and creates an object from them.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "keys",
        label: "Keys (comma-separated)",
        type: "text",
        defaultValue: "name,age,city",
      },
      {
        id: "values",
        label: "Values (comma-separated)",
        type: "text",
        defaultValue: "John,30,New York",
      },
    ],
    buttonText: "Create Object",
    difficulty: "Beginner",
  },
  // problem--> 182
  {
    id: "pad-string-start",
    title: "Pad String at Start",
    description:
      "Use the `.padStart()` method to pad the beginning of a string with a specific character until it reaches a target length.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "123" },
      { id: "length", label: "Target Length", type: "number", defaultValue: 5 },
      {
        id: "padChar",
        label: "Padding Character",
        type: "text",
        defaultValue: "0",
      },
    ],
    buttonText: "Pad Start",
    difficulty: "Beginner",
  },
  // problem--> 183
  {
    id: "pad-string-end",
    title: "Pad String at End",
    description:
      "Use the `.padEnd()` method to pad the end of a string with a specific character until it reaches a target length.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "abc" },
      { id: "length", label: "Target Length", type: "number", defaultValue: 5 },
      {
        id: "padChar",
        label: "Padding Character",
        type: "text",
        defaultValue: "!",
      },
    ],
    buttonText: "Pad End",
    difficulty: "Beginner",
  },
  // problem--> 184
  {
    id: "check-leap-year",
    title: "Check for Leap Year",
    description:
      "Write a function that takes a year and returns `true` if it's a leap year, and `false` otherwise.",
    category: "Beginner Basics",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 2024 }],
    buttonText: "Check Year",
    difficulty: "Beginner",
  },
  // problem--> 185
  {
    id: "get-day-of-week",
    title: "Get Day of the Week",
    description:
      "Write a function that takes a date string (e.g., '2024-07-26') and returns the name of the day of the week.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "date",
        label: "Date (YYYY-MM-DD)",
        type: "text",
        defaultValue: "2024-07-26",
      },
    ],
    buttonText: "Get Day",
    difficulty: "Beginner",
  },
  // problem--> 186
  {
    id: "array-fill",
    title: "Fill an Array",
    description:
      "Use the `.fill()` method to create an array of a specific length filled with a static value.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "value",
        label: "Value to Fill With",
        type: "text",
        defaultValue: "x",
      },
      { id: "length", label: "Array Length", type: "number", defaultValue: 5 },
    ],
    buttonText: "Fill Array",
    difficulty: "Beginner",
  },
  // problem--> 187
  {
    id: "filter-out-numbers",
    title: "Filter Out Numbers",
    description:
      "Write a function that takes a string and returns a new string with all numeric digits removed.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "a1b2c3d4e5" },
    ],
    buttonText: "Filter String",
    difficulty: "Beginner",
  },
  // problem--> 188
  {
    id: "get-object-property-safely",
    title: "Access Object Property Safely",
    description:
      "Write a function that takes an object and a property name and returns the property's value, or a default value if the property does not exist.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "prop",
        label: "Property to Access",
        type: "text",
        defaultValue: "city",
      },
    ],
    buttonText: "Access Property",
    difficulty: "Beginner",
  },
  // problem--> 189
  {
    id: "double-array-elements",
    title: "Double Array Elements",
    description:
      "Use the `.map()` method to create a new array where each number from an original array is doubled.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,3,4",
      },
    ],
    buttonText: "Double",
    difficulty: "Beginner",
  },
  // problem--> 190
  {
    id: "filter-even-numbers",
    title: "Filter for Even Numbers",
    description:
      "Use the `.filter()` method to create a new array containing only the even numbers from an original array.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "1,2,3,4,5,6",
      },
    ],
    buttonText: "Filter Evens",
    difficulty: "Beginner",
  },
  // problem--> 191
  {
    id: "sum-with-reduce",
    title: "Sum with `.reduce()`",
    description:
      "Use the `.reduce()` method to calculate the sum of all numbers in an array.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array of Numbers",
        type: "text",
        defaultValue: "10,20,30,40",
      },
    ],
    buttonText: "Sum",
    difficulty: "Beginner",
  },
  // problem--> 192
  {
    id: "check-all-caps",
    title: "Check if String is All Caps",
    description:
      "Write a function that returns `true` if a string is written in all uppercase letters, and `false` otherwise.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "HELLO" },
    ],
    buttonText: "Check Case",
    difficulty: "Beginner",
  },
  // problem--> 193
  {
    id: "object-has-property",
    title: "Check if Object Has Property",
    description:
      "Use the `.hasOwnProperty()` method to safely check if an object has a specific property as its own (not inherited).",
    category: "Beginner Basics",
    inputs: [
      {
        id: "prop",
        label: "Property to Check",
        type: "text",
        defaultValue: "name",
      },
    ],
    buttonText: "Check Property",
    difficulty: "Beginner",
  },
  // problem--> 194
  {
    id: "get-last-n-elements",
    title: "Get Last N Elements of an Array",
    description:
      "Write a function that takes an array and a number `n` and returns the last `n` elements of the array.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "arr",
        label: "Array (comma-separated)",
        type: "text",
        defaultValue: "a,b,c,d,e",
      },
      { id: "n", label: "Number of Elements", type: "number", defaultValue: 3 },
    ],
    buttonText: "Get Elements",
    difficulty: "Beginner",
  },
  // problem--> 195
  {
    id: "string-to-camel-case",
    title: "String to Camel Case",
    description:
      "Write a function that converts a dash/underscore-separated string into camel case.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "hello-world_now",
      },
    ],
    buttonText: "To Camel Case",
    difficulty: "Beginner",
  },
  // problem--> 196
  {
    id: "remove-whitespace",
    title: "Remove All Whitespace",
    description:
      "Write a function that takes a string and returns a new string with all whitespace characters removed.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "  hello   world  ",
      },
    ],
    buttonText: "Remove Spaces",
    difficulty: "Beginner",
  },
  // problem--> 197
  {
    id: "find-unique-characters",
    title: "Find Unique Characters",
    description:
      "Write a function that takes a string and returns a string containing only the unique characters, in the order they first appeared.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello world" },
    ],
    buttonText: "Find Unique",
    difficulty: "Beginner",
  },
  // problem--> 198
  {
    id: "object-is-empty-check",
    title: "Check if Object is Empty (Revisited)",
    description:
      "Revisit the 'check for empty object' problem, explaining why `Object.keys(obj).length === 0` is the most common and reliable method.",
    category: "Beginner Basics",
    inputs: [
      { id: "obj", label: "Object (JSON)", type: "text", defaultValue: "{}" },
    ],
    buttonText: "Check Empty",
    difficulty: "Beginner",
  },
  // problem--> 199
  {
    id: "get-file-extension",
    title: "Get File Extension",
    description:
      "Write a function that takes a filename string and returns its extension.",
    category: "Beginner Basics",
    inputs: [
      {
        id: "filename",
        label: "Filename",
        type: "text",
        defaultValue: "document.pdf",
      },
    ],
    buttonText: "Get Extension",
    difficulty: "Beginner",
  },
  // problem--> 200
  {
    id: "simple-character-swap",
    title: "Simple Character Swap",
    description:
      "Write a function that takes a string and swaps the first and last characters.",
    category: "Beginner Basics",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Swap",
    difficulty: "Beginner",
  },
];
