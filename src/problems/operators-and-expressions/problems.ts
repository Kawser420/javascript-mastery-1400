// problem--> 01
// import { Problem } from "../../types";

import { Problem } from "@/types";

export const problems: Problem[] = [
  // --- Arithmetic Operators ---
  // problem--> 01
  {
    id: "addition-operator",
    title: "Addition Operator (+)",
    description: "Write an expression that calculates the sum of two numbers.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 5 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 10 },
    ],
    buttonText: "Add",
  },
  // problem--> 02
  {
    id: "subtraction-operator",
    title: "Subtraction Operator (-)",
    description:
      "Write an expression that calculates the difference between two numbers.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 20 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 8 },
    ],
    buttonText: "Subtract",
  },
  // problem--> 03
  {
    id: "multiplication-operator",
    title: "Multiplication Operator (*)",
    description:
      "Write an expression that calculates the product of two numbers.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 7 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 6 },
    ],
    buttonText: "Multiply",
  },
  // problem--> 04
  {
    id: "division-operator",
    title: "Division Operator (/)",
    description: "Write an expression that divides one number by another.",
    category: "Operators and Expressions",
    inputs: [
      { id: "dividend", label: "Dividend", type: "number", defaultValue: 100 },
      { id: "divisor", label: "Divisor", type: "number", defaultValue: 10 },
    ],
    buttonText: "Divide",
  },
  // problem--> 05
  {
    id: "remainder-operator",
    title: "Remainder Operator (%)",
    description:
      "Use the modulo operator (%) to find the remainder of a division.",
    category: "Operators and Expressions",
    inputs: [
      { id: "dividend", label: "Dividend", type: "number", defaultValue: 10 },
      { id: "divisor", label: "Divisor", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Remainder",
  },
  // problem--> 06
  {
    id: "exponentiation-operator",
    title: "Exponentiation Operator (**)",
    description:
      "Use the exponentiation operator (**) to calculate a number raised to a power (e.g., 2³).",
    category: "Operators and Expressions",
    inputs: [
      { id: "base", label: "Base", type: "number", defaultValue: 2 },
      { id: "exponent", label: "Exponent", type: "number", defaultValue: 3 },
    ],
    buttonText: "Calculate Power",
  },
  // problem--> 07
  {
    id: "increment-operator",
    title: "Increment Operator (++)",
    description: "Use the increment operator to add one to a number.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Increment",
  },
  // problem--> 08
  {
    id: "decrement-operator",
    title: "Decrement Operator (--)",
    description: "Use the decrement operator to subtract one from a number.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Decrement",
  },
  // problem--> 09
  {
    id: "prefix-vs-postfix-increment",
    title: "Prefix vs. Postfix Increment",
    description:
      "Show the difference in return value between prefix (++x) and postfix (x++) increment.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 10 }],
    buttonText: "Compare",
  },
  // problem--> 10
  {
    id: "operator-precedence-1",
    title: "Operator Precedence (*/+)",
    description:
      "Evaluate an expression like `2 + 3 * 4` to demonstrate that multiplication has higher precedence than addition.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 11
  {
    id: "operator-precedence-parens",
    title: "Operator Precedence with Parentheses",
    description:
      "Evaluate an expression like `(2 + 3) * 4` to show how parentheses can override the default operator precedence.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 12
  {
    id: "unary-negation",
    title: "Unary Negation (-)",
    description:
      "Use the unary negation operator to turn a positive number into a negative one.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 15 }],
    buttonText: "Negate",
  },
  // problem--> 13
  {
    id: "unary-plus",
    title: "Unary Plus (+)",
    description:
      "Use the unary plus operator to convert a string representation of a number into an actual number.",
    category: "Operators and Expressions",
    inputs: [
      { id: "str", label: "String Number", type: "text", defaultValue: "50" },
    ],
    buttonText: "Convert to Number",
  },
  // problem--> 14
  {
    id: "string-concatenation-operator",
    title: "String Concatenation Operator (+)",
    description: "Use the `+` operator to concatenate two strings.",
    category: "Operators and Expressions",
    inputs: [
      {
        id: "str1",
        label: "First String",
        type: "text",
        defaultValue: "Hello",
      },
      {
        id: "str2",
        label: "Second String",
        type: "text",
        defaultValue: " World",
      },
    ],
    buttonText: "Concatenate",
  },
  // problem--> 15
  {
    id: "type-coercion-add-string-number",
    title: "Type Coercion: String + Number",
    description:
      "Show what happens when you use the `+` operator with a string and a number.",
    category: "Operators and Expressions",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "Score: " },
      { id: "num", label: "Number", type: "number", defaultValue: 100 },
    ],
    buttonText: "Combine",
  },
  // problem--> 16
  {
    id: "assignment-operator",
    title: "Assignment Operator (=)",
    description:
      "Use the basic assignment operator to assign a value to a variable.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Assign",
  },
  // problem--> 17
  {
    id: "addition-assignment",
    title: "Addition Assignment (+=)",
    description:
      "Use the addition assignment operator to add a value to a variable.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Add and Assign",
  },
  // problem--> 18
  {
    id: "subtraction-assignment",
    title: "Subtraction Assignment (-=)",
    description:
      "Use the subtraction assignment operator to subtract a value from a variable.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Subtract and Assign",
  },
  // problem--> 19
  {
    id: "multiplication-assignment",
    title: "Multiplication Assignment (*=)",
    description:
      "Use the multiplication assignment operator to multiply a variable by a value.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Multiply and Assign",
  },
  // problem--> 20
  {
    id: "division-assignment",
    title: "Division Assignment (/=)",
    description:
      "Use the division assignment operator to divide a variable by a value.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Divide and Assign",
  },
  // problem--> 21
  {
    id: "remainder-assignment",
    title: "Remainder Assignment (%=)",
    description: "Use the remainder assignment operator.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Remainder and Assign",
  },
  // problem--> 22
  {
    id: "exponentiation-assignment",
    title: "Exponentiation Assignment (**=)",
    description: "Use the exponentiation assignment operator.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Exponentiate and Assign",
  },
  // problem--> 23
  {
    id: "chained-assignment",
    title: "Chained Assignment",
    description:
      "Use chained assignment (`a = b = c`) to assign the same value to multiple variables.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Chain Assign",
  },
  // problem--> 24
  {
    id: "string-concatenation-assignment",
    title: "String Concatenation with +=",
    description:
      "Use the `+=` operator to append a string to an existing string variable.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Append String",
  },
  // problem--> 25
  {
    id: "assignment-in-expression",
    title: "Assignment as an Expression",
    description:
      "Demonstrate that an assignment is an expression that evaluates to the assigned value.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 26
  {
    id: "strict-equality",
    title: "Strict Equality (===)",
    description:
      "Compare a number and a string representation of the same number using strict equality.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Compare `5` and `"5"` with ===',
  },
  // problem--> 27
  {
    id: "loose-equality",
    title: "Loose Equality (==)",
    description:
      "Compare a number and a string representation of the same number using loose equality to see type coercion in action.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Compare `5` and `"5"` with ==',
  },
  // problem--> 28
  {
    id: "strict-inequality",
    title: "Strict Inequality (!==)",
    description:
      "Use the strict inequality operator to check if two values have a different value or a different type.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Compare `5` and `"5"` with !==',
  },
  // problem--> 29
  {
    id: "loose-inequality",
    title: "Loose Inequality (!=)",
    description:
      "Use the loose inequality operator, which performs type coercion before comparison.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Compare `5` and `"5"` with !=',
  },
  // problem--> 30
  {
    id: "greater-than",
    title: "Greater Than (>)",
    description: "Check if one number is greater than another.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 5 },
    ],
    buttonText: "Compare",
  },
  // problem--> 31
  {
    id: "less-than",
    title: "Less Than (<)",
    description: "Check if one number is less than another.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 5 },
    ],
    buttonText: "Compare",
  },
  // problem--> 32
  {
    id: "greater-than-or-equal",
    title: "Greater Than or Equal To (>=)",
    description: "Check if one number is greater than or equal to another.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 10 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 10 },
    ],
    buttonText: "Compare",
  },
  // problem--> 33
  {
    id: "less-than-or-equal",
    title: "Less Than or Equal To (<=)",
    description: "Check if one number is less than or equal to another.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 5 },
      { id: "num2", label: "Number 2", type: "number", defaultValue: 10 },
    ],
    buttonText: "Compare",
  },
  // problem--> 34
  {
    id: "comparing-strings",
    title: "Comparing Strings",
    description:
      "Show how strings are compared lexicographically (dictionary order).",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Compare "apple" and "banana"',
  },
  // problem--> 35
  {
    id: "comparing-null-and-undefined",
    title: "Comparing `null` and `undefined`",
    description:
      "Show the results of comparing `null` and `undefined` with both loose (==) and strict (===) equality.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 36
  {
    id: "comparing-nan",
    title: "Comparing with `NaN`",
    description:
      "Demonstrate that `NaN` is not equal to anything, including itself, using any equality operator.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `NaN === NaN`",
  },
  // problem--> 37
  {
    id: "object-comparison-pitfall",
    title: "Object Comparison Pitfall",
    description:
      "Show that two different objects with the same properties are not equal because they are compared by reference.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Compare `{a:1}` and `{a:1}`",
  },
  // problem--> 38
  {
    id: "comparing-boolean-and-number",
    title: "Loose Equality: Boolean and Number",
    description:
      "Show the result of `true == 1` and `false == 0` due to type coercion.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 39
  {
    id: "comparing-string-number-greater-than",
    title: "Relational Comparison with Type Coercion",
    description: 'Show how `>` coerces types, e.g., `"10" > 5`.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Compare `"10"` and `5`',
  },
  // problem--> 40
  {
    id: "object-is-comparison",
    title: "`Object.is()` Comparison",
    description:
      "Use `Object.is()` to show its differences from `===` when comparing `NaN` and `-0`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `Object.is`",
  },
  // problem--> 41
  {
    id: "logical-and",
    title: "Logical AND (&&)",
    description:
      "Write an expression that returns true only if two conditions are both true.",
    category: "Operators and Expressions",
    inputs: [
      {
        id: "cond1",
        label: "Condition 1 (true/false)",
        type: "text",
        defaultValue: "true",
      },
      {
        id: "cond2",
        label: "Condition 2 (true/false)",
        type: "text",
        defaultValue: "true",
      },
    ],
    buttonText: "Check with &&",
  },
  // problem--> 42
  {
    id: "logical-or",
    title: "Logical OR (||)",
    description:
      "Write an expression that returns true if at least one of two conditions is true.",
    category: "Operators and Expressions",
    inputs: [
      {
        id: "cond1",
        label: "Condition 1 (true/false)",
        type: "text",
        defaultValue: "false",
      },
      {
        id: "cond2",
        label: "Condition 2 (true/false)",
        type: "text",
        defaultValue: "true",
      },
    ],
    buttonText: "Check with ||",
  },
  // problem--> 43
  {
    id: "logical-not",
    title: "Logical NOT (!)",
    description: "Use the logical NOT operator to invert a boolean value.",
    category: "Operators and Expressions",
    inputs: [
      {
        id: "bool",
        label: "Input Boolean (true/false)",
        type: "text",
        defaultValue: "true",
      },
    ],
    buttonText: "Invert with !",
  },
  // problem--> 44
  {
    id: "truthy-values",
    title: "Truthy Values",
    description:
      'Demonstrate that non-empty strings, non-zero numbers, and objects are "truthy".',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Truthy Values",
  },
  // problem--> 45
  {
    id: "falsy-values",
    title: "Falsy Values",
    description:
      'Demonstrate the six falsy values in JavaScript: `false`, `0`, `""`, `null`, `undefined`, and `NaN`.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Falsy Values",
  },
  // problem--> 46
  {
    id: "logical-and-short-circuit",
    title: "`&&` Short-Circuiting",
    description:
      "Show how the logical AND operator short-circuits: if the first operand is falsy, the second is not evaluated.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Short-Circuit",
  },
  // problem--> 47
  {
    id: "logical-or-short-circuit",
    title: "`||` Short-Circuiting",
    description:
      "Show how the logical OR operator short-circuits: if the first operand is truthy, the second is not evaluated.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Short-Circuit",
  },
  // problem--> 48
  {
    id: "logical-or-for-defaults",
    title: "Using `||` for Default Values",
    description:
      'Show the common pattern of using the OR operator to provide a default value for a potentially "falsy" variable.',
    category: "Operators and Expressions",
    inputs: [
      {
        id: "name",
        label: "Name (can be empty)",
        type: "text",
        defaultValue: "",
      },
    ],
    buttonText: "Get Name",
  },
  // problem--> 49
  {
    id: "double-not-to-boolean",
    title: "Double NOT (!!) to Coerce to Boolean",
    description:
      "Use the double NOT operator (`!!`) as a concise way to convert any value to its boolean equivalent.",
    category: "Operators and Expressions",
    inputs: [
      { id: "value", label: "Any Value", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Coerce to Boolean",
  },
  // problem--> 50
  {
    id: "logical-operator-precedence",
    title: "Logical Operator Precedence",
    description:
      "Evaluate an expression like `true || false && false` to show that `&&` has higher precedence than `||`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 51
  {
    id: "logical-and-return-value",
    title: "`&&` Return Value",
    description:
      "Show that `&&` returns the first falsy operand, or the last operand if all are truthy.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Return Value",
  },
  // problem--> 52
  {
    id: "logical-or-return-value",
    title: "`||` Return Value",
    description:
      "Show that `||` returns the first truthy operand, or the last operand if all are falsy.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Return Value",
  },
  // problem--> 53
  {
    id: "bitwise-and",
    title: "Bitwise AND (&)",
    description: "Perform a bitwise AND operation on two numbers.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 5 }, // 0101
      { id: "num2", label: "Number 2", type: "number", defaultValue: 3 }, // 0011
    ],
    buttonText: "Calculate `&`",
  },
  // problem--> 54
  {
    id: "bitwise-or",
    title: "Bitwise OR (|)",
    description: "Perform a bitwise OR operation on two numbers.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 5 }, // 0101
      { id: "num2", label: "Number 2", type: "number", defaultValue: 3 }, // 0011
    ],
    buttonText: "Calculate `|`",
  },
  // problem--> 55
  {
    id: "bitwise-xor",
    title: "Bitwise XOR (^)",
    description:
      "Perform a bitwise XOR (exclusive OR) operation on two numbers.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", defaultValue: 5 }, // 0101
      { id: "num2", label: "Number 2", type: "number", defaultValue: 3 }, // 0011
    ],
    buttonText: "Calculate `^`",
  },
  // problem--> 56
  {
    id: "bitwise-not",
    title: "Bitwise NOT (~)",
    description:
      "Perform a bitwise NOT operation on a number, which inverts all its bits.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 5 }],
    buttonText: "Calculate `~`",
  },
  // problem--> 57
  {
    id: "bitwise-left-shift",
    title: "Left Shift (<<)",
    description:
      "Use the left shift operator to shift the bits of a number to the left (equivalent to multiplying by 2 for each shift).",
    category: "Operators and Expressions",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 5 },
      { id: "bits", label: "Bits to Shift", type: "number", defaultValue: 1 },
    ],
    buttonText: "Calculate `<<`",
  },
  // problem--> 58
  {
    id: "bitwise-right-shift",
    title: "Sign-propagating Right Shift (>>)",
    description:
      "Use the sign-propagating right shift operator (equivalent to flooring division by 2 for each shift).",
    category: "Operators and Expressions",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: -10 },
      { id: "bits", label: "Bits to Shift", type: "number", defaultValue: 1 },
    ],
    buttonText: "Calculate `>>`",
  },
  // problem--> 59
  {
    id: "bitwise-zero-fill-right-shift",
    title: "Zero-fill Right Shift (>>>)",
    description:
      "Use the zero-fill right shift operator, which fills with zeros from the left, treating the number as unsigned.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: -10 },
      { id: "bits", label: "Bits to Shift", type: "number", defaultValue: 1 },
    ],
    buttonText: "Calculate `>>>`",
  },
  // problem--> 60
  {
    id: "bitwise-check-odd-even",
    title: "Check Odd/Even with Bitwise AND",
    description:
      "Use the bitwise AND operator as an efficient way to check if a number is even or odd.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 7 }],
    buttonText: "Check",
  },
  // problem--> 61
  {
    id: "bitwise-swap-variables",
    title: "Swap Variables with Bitwise XOR",
    description:
      "Demonstrate how to swap two integer variables without a temporary variable using the XOR operator.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Swap with `^`",
  },
  // problem--> 62
  {
    id: "conditional-ternary-operator",
    title: "Conditional (Ternary) Operator (? :)",
    description:
      "Use the ternary operator as a concise one-line `if...else` statement.",
    category: "Operators and Expressions",
    inputs: [{ id: "age", label: "Age", type: "number", defaultValue: 21 }],
    buttonText: "Check Age",
  },
  // problem--> 63
  {
    id: "comma-operator",
    title: "Comma Operator (,)",
    description:
      "Demonstrate the comma operator, which evaluates each of its operands (from left to right) and returns the value of the last operand.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate with Comma",
  },
  // problem--> 64
  {
    id: "delete-operator",
    title: "`delete` Operator",
    description:
      "Use the `delete` operator to remove a property from an object.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Delete Property",
  },
  // problem--> 65
  {
    id: "typeof-operator",
    title: "`typeof` Operator",
    description:
      "Use the `typeof` operator to find the data type of a variable.",
    category: "Operators and Expressions",
    inputs: [
      { id: "value", label: "Value", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Get Type",
  },
  // problem--> 66
  {
    id: "in-operator",
    title: "`in` Operator",
    description:
      "Use the `in` operator to check if a specified property exists in an object.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check for Property",
  },
  // problem--> 67
  {
    id: "instanceof-operator",
    title: "`instanceof` Operator",
    description:
      "Use the `instanceof` operator to check if an object is an instance of a particular constructor or class.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Instance",
  },
  // problem--> 68
  {
    id: "void-operator",
    title: "`void` Operator",
    description:
      "Use the `void` operator to evaluate an expression and return `undefined`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Use `void`",
  },
  // problem--> 69
  {
    id: "grouping-operator",
    title: "Grouping Operator ( )",
    description:
      "Demonstrate how the grouping operator `()` controls the precedence of evaluation in expressions.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `(2 + 3) * 4`",
  },
  // problem--> 70
  {
    id: "new-operator",
    title: "`new` Operator",
    description:
      "Use the `new` operator to create an instance of a user-defined object type or of a built-in object type that has a constructor.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Create Instance",
  },
  // problem--> 71
  {
    id: "super-operator-conceptual",
    title: "`super` Operator (Conceptual)",
    description:
      "Explain that the `super` keyword is used to call functions on an object's parent, typically in classes.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain `super`",
  },
  // problem--> 72
  {
    id: "spread-operator-array",
    title: "Spread Syntax (...) in Arrays",
    description: "Use the spread syntax to expand an array into another array.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Spread Array",
  },
  // problem--> 73
  {
    id: "spread-operator-object",
    title: "Spread Syntax (...) in Objects",
    description:
      "Use the spread syntax to expand an object's properties into another object.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Spread Object",
  },
  // problem--> 74
  {
    id: "yield-operator-conceptual",
    title: "`yield` Operator (Conceptual)",
    description:
      "Explain that the `yield` keyword is used to pause and resume a generator function.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain `yield`",
  },
  // problem--> 75
  {
    id: "yield-star-operator-conceptual",
    title: "`yield*` Operator (Conceptual)",
    description:
      "Explain that the `yield*` operator is used to delegate to another generator or iterable object.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain `yield*`",
  },
  // problem--> 76
  {
    id: "async-await-operator",
    title: "`await` Operator",
    description:
      "Use the `await` operator to pause an async function and wait for a Promise to settle.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Use `await`",
  },
  // problem--> 77
  {
    id: "nullish-coalescing-operator",
    title: "Nullish Coalescing Operator (??)",
    description:
      "Use the nullish coalescing operator `??` to provide a default value for a variable that is `null` or `undefined`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `??`",
  },
  // problem--> 78
  {
    id: "nullish-vs-or",
    title: "Nullish Coalescing (??) vs. Logical OR (||)",
    description:
      'Show the key difference between `??` and `||` when dealing with falsy values like `0` or `""`.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Compare `??` and `||`",
  },
  // problem--> 79
  {
    id: "optional-chaining-operator",
    title: "Optional Chaining Operator (?.)",
    description:
      "Use the optional chaining operator `?.` to safely access a property of a potentially `null` or `undefined` object.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `?.`",
  },
  // problem--> 80
  {
    id: "optional-chaining-with-methods",
    title: "Optional Chaining with Method Calls",
    description:
      "Use optional chaining to safely call a method that might not exist.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `?.()`",
  },
  // problem--> 81
  {
    id: "optional-chaining-with-arrays",
    title: "Optional Chaining with Array Access",
    description:
      "Use optional chaining to safely access an element of a potentially non-existent array.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `?.[]`",
  },
  // problem--> 82
  {
    id: "logical-nullish-assignment",
    title: "Logical Nullish Assignment (??=)",
    description:
      "Use the logical nullish assignment operator `??=` to assign a value to a variable only if it is `null` or `undefined`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `??=`",
  },
  // problem--> 83
  {
    id: "logical-and-assignment",
    title: "Logical AND Assignment (&&=)",
    description:
      "Use the logical AND assignment operator `&&=` to assign a value only if the variable is currently truthy.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `&&=`",
  },
  // problem--> 84
  {
    id: "logical-or-assignment",
    title: "Logical OR Assignment (||=)",
    description:
      "Use the logical OR assignment operator `||=` to assign a value only if the variable is currently falsy.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `||=`",
  },
  // problem--> 85
  {
    id: "bitwise-flags-conceptual",
    title: "Bitwise Flags (Conceptual)",
    description:
      "Explain how bitwise operators can be used to store multiple boolean flags in a single number.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain Flags",
  },
  // problem--> 86
  {
    id: "bitwise-check-flag",
    title: "Check a Bitwise Flag",
    description:
      "Use the bitwise AND operator to check if a specific permission flag is set in a permissions variable.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Read Permission",
  },
  // problem--> 87
  {
    id: "bitwise-set-flag",
    title: "Set a Bitwise Flag",
    description:
      "Use the bitwise OR assignment operator (`|=`) to add a permission flag to a permissions variable.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Add Write Permission",
  },
  // problem--> 88
  {
    id: "bitwise-clear-flag",
    title: "Clear a Bitwise Flag",
    description:
      "Use the bitwise AND and NOT operators to remove a permission flag from a permissions variable.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Remove Execute Permission",
  },
  // problem--> 89
  {
    id: "bitwise-toggle-flag",
    title: "Toggle a Bitwise Flag",
    description:
      "Use the bitwise XOR assignment operator (`^=`) to toggle a permission flag.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Toggle Write Permission",
  },
  // problem--> 90
  {
    id: "fast-floor-with-double-not",
    title: "Fast Floor with Double Bitwise NOT",
    description:
      "Demonstrate the `~~` trick as a potentially faster (but less readable) alternative to `Math.floor()` for positive numbers.",
    category: "Operators and Expressions",
    inputs: [
      {
        id: "num",
        label: "Decimal Number",
        type: "number",
        defaultValue: 5.95,
      },
    ],
    buttonText: "Floor with `~~`",
  },
  // problem--> 91
  {
    id: "fast-multiply-by-two",
    title: "Fast Multiply by 2 with Left Shift",
    description: "Show how `n << 1` can be used to multiply an integer by 2.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 21 }],
    buttonText: "Multiply",
  },
  // problem--> 92
  {
    id: "fast-divide-by-two",
    title: "Fast Divide by 2 with Right Shift",
    description:
      "Show how `n >> 1` can be used to perform an integer division by 2.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 42 }],
    buttonText: "Divide",
  },
  // problem--> 93
  {
    id: "associativity-of-exponentiation",
    title: "Associativity of Exponentiation",
    description:
      "Demonstrate that the exponentiation operator is right-associative (e.g., `2 ** 3 ** 2` is `2 ** 9`, not `8 ** 2`).",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `2 ** 3 ** 2`",
  },
  // problem--> 94
  {
    id: "associativity-of-assignment",
    title: "Associativity of Assignment",
    description:
      "Explain that assignment operators are right-associative, which is why chained assignment (`a = b = 5`) works.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain Associativity",
  },
  // problem--> 95
  {
    id: "ternary-operator-nesting",
    title: "Nested Ternary Operator",
    description:
      "Show an example of a nested ternary operator for multi-condition checks, and discuss why it can be hard to read.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 0 }],
    buttonText: "Check Sign",
  },
  // problem--> 96
  {
    id: "in-operator-and-prototypes",
    title: "`in` Operator and Prototypes",
    description:
      "Demonstrate that the `in` operator checks for properties in an object's prototype chain.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check for `toString`",
  },
  // problem--> 97
  {
    id: "instanceof-and-prototypes",
    title: "`instanceof` and the Prototype Chain",
    description:
      "Explain that `instanceof` works by checking if a constructor's `.prototype` property appears anywhere in an object's prototype chain.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain `instanceof`",
  },
  // problem--> 98
  {
    id: "spread-to-copy-array",
    title: "Use Spread to Copy an Array",
    description:
      "Show the common use of the spread syntax to create a shallow copy of an array.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Copy Array",
  },
  // problem--> 99
  {
    id: "spread-to-merge-objects",
    title: "Use Spread to Merge Objects",
    description:
      "Demonstrate merging two objects, where properties from the second object overwrite those in the first.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Merge Objects",
  },
  // problem--> 100
  {
    id: "spread-with-function-arguments",
    title: "Spread Syntax with Function Arguments",
    description:
      "Use the spread syntax to pass the elements of an array as individual arguments to a function.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Sum with Spread",
  },
  // problem--> 101
  {
    id: "prefix-vs-postfix-decrement",
    title: "Prefix vs. Postfix Decrement",
    description:
      "Show the difference in return value between prefix (--x) and postfix (x--) decrement.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 10 }],
    buttonText: "Compare",
  },
  // problem--> 102
  {
    id: "operator-precedence-complex",
    title: "Operator Precedence (Complex)",
    description:
      "Evaluate a complex expression like `5 + 10 / 2 * 3 - 1` to test understanding of precedence and associativity.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 103
  {
    id: "type-coercion-subtract-string",
    title: "Type Coercion: Number - String",
    description:
      "Show what happens when you use the `-` operator with a number and a numeric string, forcing coercion.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Evaluate `20 - "10"`',
  },
  // problem--> 104
  {
    id: "assignment-in-condition",
    title: "Assignment in a Conditional (Pitfall)",
    description:
      "Show the common pitfall of using a single equals sign (`=`) instead of `==` or `===` in an `if` condition.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Pitfall",
  },
  // problem--> 105
  {
    id: "comparing-arrays-pitfall",
    title: "Array Comparison Pitfall",
    description:
      "Show that two different arrays with the same elements are not equal because they are compared by reference.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Compare `[1,2]` and `[1,2]`",
  },
  // problem--> 106
  {
    id: "logical-and-with-non-booleans",
    title: "`&&` with Non-Boolean Values",
    description:
      "Show how the `&&` operator works with non-boolean operands, returning the first falsy or the last truthy value.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Test `1 && "hello"`',
  },
  // problem--> 107
  {
    id: "logical-or-with-non-booleans",
    title: "`||` with Non-Boolean Values",
    description:
      "Show how the `||` operator works with non-boolean operands, returning the first truthy or the last falsy value.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Test `null || "hello"`',
  },
  // problem--> 108
  {
    id: "bitwise-permission-masking",
    title: "Bitwise Permission Masking",
    description:
      "Use bitwise AND with a mask to check for multiple permissions at once.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Read/Write Permission",
  },
  // problem--> 109
  {
    id: "delete-array-element",
    title: "`delete` on Array Element",
    description:
      "Demonstrate that using `delete` on an array element removes the element but leaves an empty slot, not changing the array length.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Delete from Array",
  },
  // problem--> 110
  {
    id: "typeof-null-bug",
    title: "The `typeof null` Bug",
    description:
      'Demonstrate the famous JavaScript quirk where the `typeof` a `null` value is `"object"`.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `typeof null`",
  },
  // problem--> 111
  {
    id: "optional-chaining-with-expression",
    title: "Optional Chaining with Expression",
    description:
      "Use optional chaining to access a property name stored in a variable: `obj?.[propName]`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `?.[]` with Variable",
  },
  // problem--> 112
  {
    id: "spread-string-to-array",
    title: "Spread a String into an Array",
    description:
      "Use the spread syntax to convert a string into an array of its characters.",
    category: "Operators and Expressions",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "spread" },
    ],
    buttonText: "Spread String",
  },
  // problem--> 113
  {
    id: "logical-assignment-order",
    title: "Logical Assignment Evaluation Order",
    description:
      "Demonstrate that the right-hand side of a logical assignment operator is only evaluated if the assignment happens.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Evaluation",
  },
  // problem--> 114
  {
    id: "remainder-with-negative-numbers",
    title: "Remainder with Negative Numbers",
    description:
      "Show how the remainder operator `%` behaves with negative numbers.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `-10 % 3`",
  },
  // problem--> 115
  {
    id: "comma-operator-in-loop",
    title: "Comma Operator in a `for` loop",
    description:
      "Use the comma operator to have multiple variables or expressions in a `for` loop's initialization or final-expression part.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Run Loop",
  },
  // problem--> 116
  {
    id: "relational-comparison-of-objects",
    title: "Relational Comparison of Objects (Conceptual)",
    description:
      "Explain how objects are converted to primitives (using `valueOf` or `toString`) when compared with `<`, `>`, `<=`, or `>=`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain Comparison",
  },
  // problem--> 117
  {
    id: "in-vs-hasownproperty",
    title: "`in` vs. `hasOwnProperty`",
    description:
      "Compare the `in` operator with `Object.prototype.hasOwnProperty` to show how they differ in checking for inherited properties.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 118
  {
    id: "bitwise-color-channel-extraction",
    title: "Bitwise Color Channel Extraction",
    description:
      "Use bitwise AND and right shift operators to extract the red, green, and blue channel values from a single integer color representation.",
    category: "Operators and Expressions",
    inputs: [
      {
        id: "color",
        label: "Color (integer)",
        type: "number",
        defaultValue: 16711935,
      },
    ], // #FF00FF
    buttonText: "Extract Channels",
  },
  // problem--> 119
  {
    id: "short-circuit-for-guarding",
    title: "Short-Circuit for Guarding",
    description:
      "Show the common pattern of using `&&` to conditionally call a function or access a property only if an object exists.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Guard Pattern",
  },
  // problem--> 120
  {
    id: "instanceof-with-inheritance",
    title: "`instanceof` with Inheritance",
    description:
      "Show that `instanceof` correctly reports `true` for an object and its parent class.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Inheritance",
  },
  // problem--> 121
  {
    id: "infinity-type",
    title: "Type of Infinity",
    description:
      "Use the `typeof` operator to check the data type of the `Infinity` value.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 122
  {
    id: "destructuring-assignment-with-assignment",
    title: "Destructuring with Assignment",
    description:
      "Show how an assignment operator can be used within a destructuring pattern.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Destructuring",
  },
  // problem--> 123
  {
    id: "void-operator-in-links",
    title: "`void` in `javascript:` links (Conceptual)",
    description:
      'Explain the historical use of `void(0)` in `href="javascript:void(0)"` to create a link that does nothing.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain Use Case",
  },
  // problem--> 124
  {
    id: "optional-chaining-and-nullish-coalescing",
    title: "Combining `?.` and `??`",
    description:
      "Show a common pattern of using optional chaining to safely access a property and nullish coalescing to provide a default value.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Combine Operators",
  },
  // problem--> 125
  {
    id: "bitwise-xor-find-unique",
    title: "Find Unique Number with XOR",
    description:
      "Use the bitwise XOR operator to find the single number in an array that does not appear twice.",
    category: "Operators and Expressions",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "2,3,4,3,2" },
    ],
    buttonText: "Find Unique",
  },
  // problem--> 126
  {
    id: "exponentiation-with-negative-exponent",
    title: "Exponentiation with Negative Exponent",
    description:
      "Use the `**` operator with a negative exponent to calculate a fraction.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `2 ** -3`",
  },
  // problem--> 127
  {
    id: "spread-set-to-array",
    title: "Spread a `Set` into an Array",
    description:
      "Use the spread syntax to convert an ES6 `Set` object into an array.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Convert Set",
  },
  // problem--> 128
  {
    id: "operator-precedence-assignment",
    title: "Operator Precedence of Assignment",
    description:
      "Demonstrate that assignment operators have very low precedence.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `x = 5 + 3`",
  },
  // problem--> 129
  {
    id: "type-coercion-with-subtraction",
    title: "Type Coercion with `-`, `*`, `/`",
    description:
      "Show that unlike `+`, the other arithmetic operators will always try to convert operands to numbers.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Evaluate `"10" - 5`',
  },
  // problem--> 130
  {
    id: "delete-non-configurable",
    title: "`delete` on Non-configurable Property",
    description:
      "Show that `delete` will fail (throwing an error in strict mode) if you try to remove a non-configurable property.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Delete",
  },
  // problem--> 131
  {
    id: "typeof-function",
    title: "`typeof` a Function",
    description:
      'Demonstrate that the `typeof` operator returns `"function"` for functions.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 132
  {
    id: "typeof-array",
    title: "`typeof` an Array",
    description:
      'Demonstrate the quirk that `typeof` an array returns `"object"`, and show how to correctly check for an array.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 133
  {
    id: "division-by-infinity",
    title: "Division by Infinity",
    description:
      "Show that dividing a finite number by `Infinity` results in `0`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `100 / Infinity`",
  },
  // problem--> 134
  {
    id: "remainder-of-zero",
    title: "Remainder of Zero",
    description:
      "Show that the remainder of dividing zero by any number is zero.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `0 % 5`",
  },
  // problem--> 135
  {
    id: "remainder-by-zero",
    title: "Remainder by Zero",
    description:
      "Show that taking the remainder of a division by zero results in `NaN`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `5 % 0`",
  },
  // problem--> 136
  {
    id: "prefix-vs-postfix-in-array",
    title: "Prefix/Postfix in Array Index",
    description:
      "Demonstrate how using prefix vs. postfix increment affects which array element is accessed.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Indexing",
  },
  // problem--> 137
  {
    id: "string-comparison-case-sensitivity",
    title: "String Comparison Case Sensitivity",
    description:
      'Demonstrate that string comparisons are case-sensitive by comparing `"a"` and `"A"`.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Compare `"a"` and `"A"`',
  },
  // problem--> 138
  {
    id: "assignment-and-equality-pitfall",
    title: "Assignment vs. Equality Pitfall",
    description:
      "Show a classic coding error where a single equals sign (`=`) is used in an `if` statement instead of a double (`==`) or triple (`===`) equals.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `if (x=0)`",
  },
  // problem--> 139
  {
    id: "logical-not-on-non-booleans",
    title: "`!` on Non-Booleans",
    description:
      "Show how the logical NOT operator (`!`) coerces any truthy value to `false` and any falsy value to `true`.",
    category: "Operators and Expressions",
    inputs: [
      {
        id: "value",
        label: "Value to negate",
        type: "text",
        defaultValue: "hello",
      },
    ],
    buttonText: "Negate",
  },
  // problem--> 140
  {
    id: "bitwise-and-for-truncation",
    title: "Bitwise Truncation with `&`",
    description:
      "Show how a bitwise AND with `0xFFFFFFFF` can be used to truncate a number to a 32-bit signed integer.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 4294967297 },
    ],
    buttonText: "Truncate",
  },
  // problem--> 141
  {
    id: "conditional-operator-associativity",
    title: "Conditional Operator Associativity",
    description:
      "Show that the conditional (ternary) operator is right-associative.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `a ? b : c ? d : e`",
  },
  // problem--> 142
  {
    id: "delete-and-strict-mode",
    title: "`delete` in Strict Mode",
    description:
      "Show that attempting to `delete` a plain variable in strict mode throws a `SyntaxError`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `delete`",
  },
  // problem--> 143
  {
    id: "spread-with-iterables",
    title: "Spread with any Iterable",
    description:
      "Demonstrate that the spread syntax (`...`) can be used on any iterable object, such as a `Set` or `Map`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Spread a Set",
  },
  // problem--> 144
  {
    id: "logical-and-assignment-pitfall",
    title: "`&&=` Pitfall with Falsy Values",
    description:
      'Show that `&&=` will not assign if the left-hand side is a "falsy" value like `0` or `""`.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `&&=`",
  },
  // problem--> 145
  {
    id: "bitwise-integer-check",
    title: "Check for Integer with XOR",
    description:
      "Use a bitwise XOR with 0 (`n ^ 0`) to check if a number is an integer, as it only works correctly for integers.",
    category: "Operators and Expressions",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12.5 },
    ],
    buttonText: "Check Integer",
  },
  // problem--> 146
  {
    id: "optional-chaining-and-assignment",
    title: "Optional Chaining and Assignment (Error)",
    description:
      "Demonstrate that optional chaining `?.` cannot be used on the left-hand side of an assignment.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Assignment",
  },
  // problem--> 147
  {
    id: "typeof-undeclared-variable",
    title: "`typeof` on Undeclared Variable",
    description:
      "Show that `typeof` is the only operator that can be used on an undeclared variable without throwing a `ReferenceError`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `typeof`",
  },
  // problem--> 148
  {
    id: "spread-clone-and-mutate",
    title: "Shallow Clone with Spread",
    description:
      "Demonstrate that using spread syntax to clone an object creates a shallow copy, so nested objects are still shared.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Shallow Clone",
  },
  // problem--> 149
  {
    id: "numeric-separator",
    title: "Numeric Separator (_)",
    description:
      "Show how the numeric separator `_` can be used to improve the readability of large number literals.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Show Separator",
  },
  // problem--> 150
  {
    id: "expression-vs-statement",
    title: "Expression vs. Statement (Conceptual)",
    description:
      "Explain the difference between an expression (evaluates to a value) and a statement (performs an action).",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 151
  {
    id: "comma-operator-return-value",
    title: "Comma Operator Return Value",
    description:
      "Confirm that a sequence of expressions using the comma operator evaluates to the value of the last expression.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 152
  {
    id: "new-target-conceptual",
    title: "`new.target` (Conceptual)",
    description:
      "Explain the `new.target` meta-property, which allows you to detect whether a function was called as a constructor.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain `new.target`",
  },
  // problem--> 153
  {
    id: "prefix-increment-in-expression",
    title: "Prefix Increment in an Expression",
    description:
      "Show how prefix increment `++x` updates the variable *before* its value is used in an expression.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `5 + ++x`",
  },
  // problem--> 154
  {
    id: "postfix-increment-in-expression",
    title: "Postfix Increment in an Expression",
    description:
      "Show how postfix increment `x++` uses the variable's original value in an expression *before* updating it.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `5 + x++`",
  },
  // problem--> 155
  {
    id: "type-coercion-in-loose-equality",
    title: "Loose Equality Coercion Rules",
    description:
      "Demonstrate a tricky coercion rule, like `[] == ![]`, to show why loose equality is best avoided.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `[] == ![]`",
  },
  // problem--> 156
  {
    id: "bitwise-or-for-rounding",
    title: "Fast Rounding with Bitwise OR",
    description:
      "Show how a bitwise OR with 0 (`n | 0`) can be used as a fast way to truncate a decimal to an integer.",
    category: "Operators and Expressions",
    inputs: [
      {
        id: "num",
        label: "Decimal Number",
        type: "number",
        defaultValue: 15.75,
      },
    ],
    buttonText: "Truncate with `|`",
  },
  // problem--> 157
  {
    id: "optional-chaining-with-function-call",
    title: "Optional Chaining with Function Call",
    description:
      "Show how optional chaining can be used to safely call a function that might not exist.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `?.()`",
  },
  // problem--> 158
  {
    id: "delete-return-value",
    title: "Return Value of `delete`",
    description:
      "Show that the `delete` operator returns `true` if the operation is successful.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Return Value",
  },
  // problem--> 159
  {
    id: "instanceof-and-primitives",
    title: "`instanceof` with Primitives",
    description:
      "Demonstrate that `instanceof` returns `false` for primitive values.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Primitives",
  },
  // problem--> 160
  {
    id: "spread-from-string",
    title: "Spread Syntax on a String",
    description:
      "Use spread syntax to convert a string into an array of characters.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Spread a String",
  },
  // problem--> 161
  {
    id: "nullish-coalescing-precedence",
    title: "Nullish Coalescing Precedence",
    description:
      "Show that `??` has lower precedence than `||` and `&&`, and that parentheses are required when mixing them.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Precedence",
  },
  // problem--> 162
  {
    id: "bitwise-extracting-rgba-parts",
    title: "Bitwise RGBA Extraction",
    description:
      "Use bitwise operators to extract R, G, B, and A channels from a 32-bit integer color value.",
    category: "Operators and Expressions",
    inputs: [
      {
        id: "color",
        label: "Color (32-bit integer)",
        type: "number",
        defaultValue: 4278190335,
      },
    ], // #FF0000FF
    buttonText: "Extract RGBA",
  },
  // problem--> 163
  {
    id: "in-operator-on-arrays",
    title: "`in` Operator on Arrays",
    description:
      "Show that the `in` operator checks for the existence of an *index* in an array, not a value.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `in` on Array",
  },
  // problem--> 164
  {
    id: "exponentiation-with-decimals",
    title: "Exponentiation with Decimals",
    description:
      "Demonstrate that the exponentiation operator `**` works with non-integer bases and exponents.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `4 ** 0.5`",
  },
  // problem--> 165
  {
    id: "assignment-in-return-statement",
    title: "Assignment in a Return Statement",
    description:
      "Show how an assignment can be part of a `return` statement, returning the assigned value.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Return",
  },
  // problem--> 166
  {
    id: "infinity-comparisons",
    title: "Comparisons with Infinity",
    description: "Show the results of comparing numbers with `Infinity`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 167
  {
    id: "logical-operators-with-objects",
    title: "Logical Operators with Objects",
    description:
      "Demonstrate that object instances are always truthy, and how this affects `&&` and `||`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test with Objects",
  },
  // problem--> 168
  {
    id: "bitwise-xor-for-encryption",
    title: "XOR Encryption (Simple)",
    description:
      "Demonstrate the simple symmetric encryption concept using the bitwise XOR operator.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Encrypt/Decrypt",
  },
  // problem--> 169
  {
    id: "ternary-vs-if-else",
    title: "Ternary vs. if/else (Conceptual)",
    description:
      "Explain that the ternary operator is an expression (evaluates to a value), while `if/else` is a statement (performs an action).",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 170
  {
    id: "typeof-symbol",
    title: "`typeof` a Symbol",
    description:
      'Show that the `typeof` operator returns `"symbol"` for Symbol primitives.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 171
  {
    id: "spread-to-remove-duplicates",
    title: "Spread Syntax to Remove Duplicates",
    description:
      "Show the common pattern of combining a `Set` with the spread syntax to create an array with unique values.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Remove Duplicates",
  },
  // problem--> 172
  {
    id: "optional-chaining-pitfall",
    title: "Optional Chaining Pitfall with Numbers",
    description:
      "Show that `?.` does not work on numbers that might be `0`, as `0` is not `null` or `undefined`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Pitfall",
  },
  // problem--> 173
  {
    id: "unary-plus-with-null",
    title: "Unary Plus with `null`",
    description: "Show that the unary plus operator coerces `null` to `0`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `+null`",
  },
  // problem--> 174
  {
    id: "assignment-in-loop-condition",
    title: "Assignment in a Loop Condition",
    description:
      "Show a pattern where an assignment is used as the condition in a `while` loop.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Run Loop",
  },
  // problem--> 175
  {
    id: "plus-plus-with-string-coercion",
    title: "`++` with String Coercion",
    description:
      "Demonstrate that the increment operator will coerce a numeric string to a number before incrementing.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: 'Test `++"5"`',
  },
  // problem--> 176
  {
    id: "instanceof-with-null-and-undefined",
    title: "`instanceof` with `null` and `undefined`",
    description:
      "Show that `instanceof` returns `false` when the left-hand side is `null` or `undefined`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `null` and `undefined`",
  },
  // problem--> 177
  {
    id: "spread-in-function-call-vs-apply",
    title: "Spread vs. `.apply()` (Conceptual)",
    description:
      "Explain that the spread syntax in a function call (`fn(...args)`) is the modern and more readable equivalent of `fn.apply(null, args)`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 178
  {
    id: "comma-operator-in-arrow-function",
    title: "Comma Operator in Arrow Function",
    description:
      "Show how the comma operator can be used in a concise arrow function to perform multiple actions and return the result of the last one.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Arrow Function",
  },
  // problem--> 179
  {
    id: "delete-on-variable",
    title: "`delete` on a Variable",
    description:
      "Show that `delete` cannot be used on variables and will return `false` (or throw an error in strict mode).",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `delete`",
  },
  // problem--> 180
  {
    id: "optional-chaining-with-destructuring",
    title: "Optional Chaining with Destructuring",
    description:
      "Demonstrate how optional chaining can be used to prevent an error when destructuring a potentially missing nested object.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Destructuring",
  },
  // problem--> 181
  {
    id: "operator-precedence-with-bitwise",
    title: "Operator Precedence with Bitwise Operators",
    description:
      "Show that bitwise operators have lower precedence than arithmetic operators but higher than logical operators.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `5 + 3 & 7`",
  },
  // problem--> 182
  {
    id: "logical-assignment-with-methods",
    title: "Logical Assignment with Method Calls",
    description:
      "Show how a logical assignment operator can be used to lazily initialize a property by calling a method.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Lazy Init",
  },
  // problem--> 183
  {
    id: "spread-arguments-object",
    title: "Spread the `arguments` Object",
    description:
      "Show how to use the spread syntax to convert the array-like `arguments` object into a true array.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Spread `arguments`",
  },
  // problem--> 184
  {
    id: "string-addition-vs-subtraction-coercion",
    title: "String Coercion: `+` vs. `-`",
    description:
      'Compare `"5" + 5` with `"5" - 5` to highlight the different coercion rules of the addition and subtraction operators.',
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 185
  {
    id: "infinity-is-not-finite",
    title: "Checking for Finite Numbers",
    description:
      "Use the `isFinite()` global function to show that `Infinity` is not a finite number.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Check `isFinite`",
  },
  // problem--> 186
  {
    id: "bitwise-xor-to-find-missing",
    title: "Find Missing Number with XOR",
    description:
      "Use bitwise XOR to find a missing number in a sequence from 1 to n.",
    category: "Operators and Expressions",
    inputs: [
      { id: "arr", label: "Array", type: "text", defaultValue: "1,2,4,5" },
    ],
    buttonText: "Find Missing",
  },
  // problem--> 187
  {
    id: "optional-chaining-and-short-circuiting",
    title: "Optional Chaining Short-Circuiting",
    description:
      "Show that if the left-hand side of `?.` is `null` or `undefined`, the rest of the expression is not evaluated.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Short-Circuiting",
  },
  // problem--> 188
  {
    id: "void-operator-and-iife",
    title: "`void` Operator and IIFE",
    description:
      "Show an old pattern of using `void` to ensure an IIFE is treated as an expression.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `void` IIFE",
  },
  // problem--> 189
  {
    id: "instanceof-with-symbol-hasinstance",
    title: "Customizing `instanceof` (Conceptual)",
    description:
      "Explain that you can customize the behavior of the `instanceof` operator for a class by implementing the `[Symbol.hasInstance]` method.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Explain `Symbol.hasInstance`",
  },
  // problem--> 190
  {
    id: "plus-and-bigint-error",
    title: "`+` and `BigInt` (TypeError)",
    description:
      "Demonstrate that you cannot mix `BigInt` and `Number` types in arithmetic operations, which throws a `TypeError`.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Mixed Types",
  },
  // problem--> 191
  {
    id: "nullish-coalescing-and-assignment",
    title: "`??` in an Assignment Chain",
    description:
      "Demonstrate how `??` can be used within a larger assignment expression.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Assignment",
  },
  // problem--> 192
  {
    id: "bitwise-sign-flipping",
    title: "Sign Flipping with Bitwise NOT",
    description:
      "Show the pattern `~n + 1` for flipping the sign of an integer.",
    category: "Operators and Expressions",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 10 }],
    buttonText: "Flip Sign",
  },
  // problem--> 193
  {
    id: "ternary-operator-as-l-value",
    title: "Ternary Operator as an L-value (Error)",
    description:
      "Demonstrate that the result of a ternary operator cannot be the target of an assignment.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Assignment",
  },
  // problem--> 194
  {
    id: "typeof-and-tdz",
    title: "`typeof` and the TDZ (Error)",
    description:
      "Show that using `typeof` on a `let` or `const` variable before its declaration throws a `ReferenceError` because of the TDZ.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `typeof`",
  },
  // problem--> 195
  {
    id: "spread-with-getters",
    title: "Spread Syntax Triggers Getters",
    description:
      "Show that using the spread syntax on an object will execute the getter methods for its properties.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Getters",
  },
  // problem--> 196
  {
    id: "logical-and-with-side-effects",
    title: "`&&` with Side Effects",
    description:
      "Show how `&&` can be used to conditionally execute a function with a side effect.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Side Effect",
  },
  // problem--> 197
  {
    id: "bitwise-right-shift-and-negative-numbers",
    title: "`>>` and Negative Numbers",
    description:
      "Show how the sign-propagating right shift `>>` preserves the sign of a negative number.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test `>>`",
  },
  // problem--> 198
  {
    id: "typeof-operator-precedence",
    title: "Operator Precedence of `typeof`",
    description:
      "Demonstrate that `typeof` has high precedence, evaluating before most binary operators.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `typeof 1 + 2`",
  },
  // problem--> 199
  {
    id: "optional-chaining-and-nullish-coalescing-precedence",
    title: "`?.` and `??` Precedence (Error)",
    description:
      "Show that you must use parentheses to explicitly state the precedence when combining optional chaining with nullish coalescing.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Test Precedence",
  },
  // problem--> 200
  {
    id: "complex-expression-evaluation-order",
    title: "Complex Expression Evaluation Order",
    description:
      "Evaluate a complex expression involving multiple operators with different precedence and associativity to determine the final result.",
    category: "Operators and Expressions",
    inputs: [],
    buttonText: "Evaluate `1 + 2 ** 3 * 4 / 2 || 0`",
  },
];
