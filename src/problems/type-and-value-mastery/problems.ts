// problem--> 01
// import { Problem } from "../../types";

import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "tv-typeof-string",
    title: "`typeof` a String",
    description:
      "Use the `typeof` operator to determine the type of a string literal.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 02
  {
    id: "tv-typeof-number",
    title: "`typeof` a Number",
    description:
      "Use the `typeof` operator to determine the type of a number literal.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 03
  {
    id: "tv-typeof-boolean",
    title: "`typeof` a Boolean",
    description:
      "Use the `typeof` operator to determine the type of a boolean literal.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 04
  {
    id: "tv-typeof-undefined",
    title: "`typeof` undefined",
    description:
      "Declare a variable without initializing it and check its type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 05
  {
    id: "tv-typeof-null",
    title: "`typeof` null (The Bug)",
    description:
      'Demonstrate the famous JavaScript quirk where `typeof null` returns "object".',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 06
  {
    id: "tv-typeof-object",
    title: "`typeof` an Object",
    description: "Use the `typeof` operator on an object literal.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 07
  {
    id: "tv-typeof-array",
    title: "`typeof` an Array",
    description:
      'Show that `typeof` an array is "object" and demonstrate the correct way to check for an array.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 08
  {
    id: "tv-typeof-function",
    title: "`typeof` a Function",
    description: "Show that `typeof` has a special return value for functions.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 09
  {
    id: "tv-typeof-symbol",
    title: "`typeof` a Symbol",
    description: "Create a Symbol and check its type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 10
  {
    id: "tv-typeof-bigint",
    title: "`typeof` a BigInt",
    description: "Create a BigInt and check its type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 11
  {
    id: "tv-primitive-vs-object-string",
    title: "Primitive String vs. String Object",
    description:
      "Compare a string literal with a string created using the `new String()` constructor.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 12
  {
    id: "tv-pass-by-value",
    title: "Pass by Value (Primitives)",
    description:
      "Demonstrate that primitive types are passed by value. Modifying them inside a function does not affect the original.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Pass by Value",
  },
  // problem--> 13
  {
    id: "tv-pass-by-reference",
    title: "Pass by Reference (Objects)",
    description:
      "Demonstrate that objects are passed by sharing a reference. Modifying a property inside a function affects the original object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Pass by Reference",
  },
  // problem--> 14
  {
    id: "tv-reassigning-object-param",
    title: "Reassigning an Object Parameter",
    description:
      "Show that reassigning an object parameter inside a function does not affect the original variable outside.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Reassignment",
  },
  // problem--> 15
  {
    id: "tv-explicit-coercion-string-to-number",
    title: "Explicit Coercion: String to Number",
    description:
      "Use the `Number()` function to explicitly convert a string to a number.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "str",
        label: "String Number",
        type: "text",
        defaultValue: "123.45",
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 16
  {
    id: "tv-explicit-coercion-number-to-string",
    title: "Explicit Coercion: Number to String",
    description:
      "Use the `String()` function to explicitly convert a number to a string.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 123.45 },
    ],
    buttonText: "Convert",
  },
  // problem--> 17
  {
    id: "tv-explicit-coercion-to-boolean",
    title: "Explicit Coercion: To Boolean",
    description:
      "Use the `Boolean()` function to explicitly convert various values to their boolean equivalent.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "value",
        label: "Value to Convert",
        type: "text",
        defaultValue: "hello",
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 18
  {
    id: "tv-parseint",
    title: "Using `parseInt`",
    description:
      "Use `parseInt()` to convert a string to an integer, demonstrating how it handles non-numeric characters and different bases (radix).",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "str",
        label: "String to Parse",
        type: "text",
        defaultValue: "101 dalmatians",
      },
    ],
    buttonText: "Parse",
  },
  // problem--> 19
  {
    id: "tv-parsefloat",
    title: "Using `parseFloat`",
    description:
      "Use `parseFloat()` to convert a string to a floating-point number.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "str",
        label: "String to Parse",
        type: "text",
        defaultValue: "3.14 is pi",
      },
    ],
    buttonText: "Parse",
  },
  // problem--> 20
  {
    id: "tv-tostring-method",
    title: "`.toString()` Method",
    description:
      "Use the `.toString()` method to convert a number to its string representation, including a different base.",
    category: "Type and Value Mastery",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 10 }],
    buttonText: "Convert",
  },
  // problem--> 21
  {
    id: "tv-implicit-coercion-plus-string",
    title: "Implicit Coercion: `+` with String",
    description:
      "Demonstrate how the `+` operator performs string concatenation when one of the operands is a string.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: 'Evaluate `5 + "5"`',
  },
  // problem--> 22
  {
    id: "tv-implicit-coercion-minus-string",
    title: "Implicit Coercion: `-` with String",
    description:
      "Show how arithmetic operators other than `+` attempt to convert operands to numbers.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: 'Evaluate `"10" - 5`',
  },
  // problem--> 23
  {
    id: "tv-implicit-coercion-if-statement",
    title: "Implicit Coercion: `if` Statement",
    description:
      "Show how the condition in an `if` statement coerces a value to a boolean.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "value",
        label: "Value for condition",
        type: "text",
        defaultValue: "0",
      },
    ],
    buttonText: "Check Condition",
  },
  // problem--> 24
  {
    id: "tv-strict-equality",
    title: "Strict Equality (`===`)",
    description:
      "Compare a number and a string using strict equality to show that it checks both value and type without coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: 'Evaluate `5 === "5"`',
  },
  // problem--> 25
  {
    id: "tv-loose-equality",
    title: "Loose Equality (`==`)",
    description:
      "Compare a number and a string using loose equality to demonstrate type coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: 'Evaluate `5 == "5"`',
  },
  // problem--> 26
  {
    id: "tv-loose-equality-null-undefined",
    title: "Loose Equality: `null` and `undefined`",
    description:
      "Show the special case where `null` is loosely equal to `undefined`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate `null == undefined`",
  },
  // problem--> 27
  {
    id: "tv-loose-equality-boolean-number",
    title: "Loose Equality: Boolean and Number",
    description: "Show the result of `true == 1` due to type coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate `true == 1`",
  },
  // problem--> 28
  {
    id: "tv-loose-equality-object-primitive",
    title: "Loose Equality: Object and Primitive",
    description:
      "Demonstrate how an object is converted to a primitive when compared to a primitive with `==`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate `[10] == 10`",
  },
  // problem--> 29
  {
    id: "tv-truthy-values",
    title: "Truthy Values",
    description:
      'Demonstrate various "truthy" values that evaluate to true in a boolean context.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Truthy",
  },
  // problem--> 30
  {
    id: "tv-falsy-values",
    title: "Falsy Values",
    description:
      'Demonstrate the six "falsy" values in JavaScript: `false`, `0`, `""`, `null`, `undefined`, and `NaN`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Falsy",
  },
  // problem--> 31
  {
    id: "tv-double-not-to-boolean",
    title: "Coerce to Boolean with `!!`",
    description:
      "Use the double NOT operator (`!!`) as a concise way to convert any value to its strict boolean equivalent.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "value", label: "Any Value", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Coerce",
  },
  // problem--> 32
  {
    id: "tv-short-circuit-or",
    title: "Short-Circuiting with `||`",
    description:
      "Show how `||` returns the first truthy operand, which is often used for providing default values.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `||`",
  },
  // problem--> 33
  {
    id: "tv-short-circuit-and",
    title: "Short-Circuiting with `&&`",
    description:
      "Show how `&&` returns the first falsy operand, or the last operand if all are truthy.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `&&`",
  },
  // problem--> 34
  {
    id: "tv-nullish-coalescing",
    title: "Nullish Coalescing (`??`)",
    description:
      "Use `??` to provide a default value only for `null` or `undefined`, distinguishing it from `||`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `??` vs `||` with `0`",
  },
  // problem--> 35
  {
    id: "tv-object-is",
    title: "`Object.is()`",
    description:
      "Use `Object.is()` to compare values, showing how it differs from `===` with `NaN` and `-0`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 36
  {
    id: "tv-comparing-nan",
    title: "Comparing with `NaN`",
    description:
      "Demonstrate that `NaN` is not equal to anything, including itself, with any equality operator.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `NaN === NaN`",
  },
  // problem--> 37
  {
    id: "tv-comparing-negative-zero",
    title: "Comparing `-0` and `0`",
    description:
      "Show that `-0 === 0` is true, but `Object.is(-0, 0)` is false.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare Zeroes",
  },
  // problem--> 38
  {
    id: "tv-object-comparison",
    title: "Object Comparison",
    description:
      "Show that two separate objects with the same properties are not equal because they are compared by reference.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare Objects",
  },
  // problem--> 39
  {
    id: "tv-autoboxing",
    title: "Autoboxing",
    description:
      'Explain how JavaScript temporarily converts primitives to wrapper objects to allow method calls like `"hello".toUpperCase()`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Run Example",
  },
  // problem--> 40
  {
    id: "tv-valueof-method",
    title: "The `.valueOf()` Method",
    description:
      "Show how the `.valueOf()` method is used to retrieve the primitive value of an object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `.valueOf()`",
  },
  // problem--> 41
  {
    id: "tv-custom-valueof",
    title: "Custom `.valueOf()` for Coercion",
    description:
      "Create an object with a custom `.valueOf()` method to control how it is coerced to a number.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Coercion",
  },
  // problem--> 42
  {
    id: "tv-custom-tostring",
    title: "Custom `.toString()` for Coercion",
    description:
      "Create an object with a custom `.toString()` method to control how it is coerced to a string.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Coercion",
  },
  // problem--> 43
  {
    id: "tv-symbol-toprimitive",
    title: "`Symbol.toPrimitive`",
    description:
      "Implement the `[Symbol.toPrimitive]` method on an object to gain full control over its primitive conversion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `toPrimitive`",
  },
  // problem--> 44
  {
    id: "tv-unary-plus-coercion",
    title: "Unary Plus for Numeric Coercion",
    description:
      "Use the unary plus operator (`+`) as a concise way to convert various values to the number type.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "value",
        label: "Value to Convert",
        type: "text",
        defaultValue: "true",
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 45
  {
    id: "tv-number-constructor-coercion",
    title: "`Number()` Constructor without `new`",
    description:
      "Show how calling `Number()` as a function performs type conversion.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "value",
        label: "Value to Convert",
        type: "text",
        defaultValue: "false",
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 46
  {
    id: "tv-abstract-equality-algorithm",
    title: "Abstract Equality Algorithm (Conceptual)",
    description:
      "Explain the high-level steps of the Abstract Equality Comparison Algorithm (`==`), such as converting operands to the same type before comparison.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Example",
  },
  // problem--> 47
  {
    id: "tv-abstract-relational-comparison",
    title: "Abstract Relational Comparison (Conceptual)",
    description:
      "Explain how relational operators like `<` and `>` convert operands to primitives before comparing them.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Example",
  },
  // problem--> 48
  {
    id: "tv-isarray-check",
    title: "`Array.isArray()`",
    description:
      "Demonstrate that `Array.isArray()` is the correct and reliable way to check if a value is an array.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check",
  },
  // problem--> 49
  {
    id: "tv-isnan-check",
    title: "`Number.isNaN()`",
    description:
      "Show that `Number.isNaN()` is the correct way to check for `NaN`, as it does not coerce its argument.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check",
  },
  // problem--> 50
  {
    id: "tv-global-isnan-coercion",
    title: "Global `isNaN()` Coercion",
    description:
      "Demonstrate how the global `isNaN()` function coerces its argument, leading to potentially confusing results.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check",
  },
  // problem--> 51
  {
    id: "tv-infinity-type",
    title: "Type of Infinity",
    description:
      'Use `typeof` to show that `Infinity` and `-Infinity` are of the "number" type.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Types",
  },
  // problem--> 52
  {
    id: "tv-infinity-comparisons",
    title: "Comparisons with Infinity",
    description: "Show how `Infinity` compares with finite numbers and itself.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 53
  {
    id: "tv-division-by-zero",
    title: "Division by Zero",
    description:
      "Demonstrate that dividing a positive number by zero results in `Infinity`, a negative number results in `-Infinity`, and `0/0` results in `NaN`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 54
  {
    id: "tv-number-isinteger",
    title: "`Number.isInteger()`",
    description:
      "Use the `Number.isInteger()` method to reliably check if a value is an integer.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "num",
        label: "Number to Check",
        type: "text",
        defaultValue: "42.0",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 55
  {
    id: "tv-number-isfinite",
    title: "`Number.isFinite()`",
    description:
      "Use `Number.isFinite()` to check if a value is a finite number, distinguishing it from the global `isFinite()` which coerces types.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "value",
        label: "Value to Check",
        type: "text",
        defaultValue: '"42"',
      },
    ],
    buttonText: "Check",
  },
  // problem--> 56
  {
    id: "tv-number-issafeinteger",
    title: "`Number.isSafeInteger()`",
    description:
      "Use `Number.isSafeInteger()` to check if an integer is within the safe range where precision is not lost.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "num",
        label: "Integer to Check",
        type: "text",
        defaultValue: "9007199254740991",
      },
    ],
    buttonText: "Check",
  },
  // problem--> 57
  {
    id: "tv-max-safe-integer",
    title: "`Number.MAX_SAFE_INTEGER`",
    description:
      "Show the value of `Number.MAX_SAFE_INTEGER` and demonstrate an operation that exceeds it, showing the loss of precision.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Demonstrate",
  },
  // problem--> 58
  {
    id: "tv-bigint-precision",
    title: "`BigInt` Precision",
    description:
      "Use `BigInt` to perform an addition that would lose precision with the standard `Number` type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Demonstrate",
  },
  // problem--> 59
  {
    id: "tv-bigint-vs-number-equality",
    title: "`BigInt` vs. `Number` Equality",
    description:
      "Show how `BigInt` and `Number` values are compared using loose (`==`) and strict (`===`) equality.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 60
  {
    id: "tv-bigint-mixing-error",
    title: "Mixing `BigInt` and `Number` (Error)",
    description:
      "Demonstrate that attempting to mix `BigInt` and `Number` types in arithmetic operations throws a `TypeError`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Mixed Types",
  },
  // problem--> 61
  {
    id: "tv-string-coercion-object",
    title: "String Coercion of an Object",
    description:
      "Show what happens when you implicitly coerce a plain object to a string.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Coerce",
  },
  // problem--> 62
  {
    id: "tv-string-coercion-array",
    title: "String Coercion of an Array",
    description:
      "Show what happens when you implicitly coerce an array to a string.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Coerce",
  },
  // problem--> 63
  {
    id: "tv-number-coercion-object",
    title: "Number Coercion of an Object",
    description:
      "Show that attempting to coerce a plain object to a number results in `NaN`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Coerce",
  },
  // problem--> 64
  {
    id: "tv-number-coercion-array",
    title: "Number Coercion of an Array",
    description:
      "Demonstrate the coercion rules for converting arrays of different sizes to numbers.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Coerce",
  },
  // problem--> 65
  {
    id: "tv-tofixed-method",
    title: "`.toFixed()` Method",
    description:
      "Use the `.toFixed()` method to format a number with a specific number of decimal places, returning a string.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 3.14159 },
    ],
    buttonText: "Format",
  },
  // problem--> 66
  {
    id: "tv-toexponential-method",
    title: "`.toExponential()` Method",
    description:
      "Use the `.toExponential()` method to format a number in exponential notation.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Format",
  },
  // problem--> 67
  {
    id: "tv-toprecision-method",
    title: "`.toPrecision()` Method",
    description:
      "Use the `.toPrecision()` method to format a number to a specified total number of significant digits.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 123.456 },
    ],
    buttonText: "Format",
  },
  // problem--> 68
  {
    id: "tv-coercion-with-bitwise-not",
    title: "Coercion with Bitwise NOT (`~`)",
    description:
      "Demonstrate how `~` coerces values to 32-bit integers before inverting the bits.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "value",
        label: "Value to Invert",
        type: "text",
        defaultValue: '"5.5"',
      },
    ],
    buttonText: "Invert",
  },
  // problem--> 69
  {
    id: "tv-tricky-loose-equality-1",
    title: "Tricky Loose Equality 1",
    description:
      "Evaluate the expression `[] == ![]` and explain the coercion steps.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 70
  {
    id: "tv-tricky-loose-equality-2",
    title: "Tricky Loose Equality 2",
    description:
      'Evaluate the expression `0 == " \\t\\r\\n "` and explain the coercion.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 71
  {
    id: "tv-tricky-loose-equality-3",
    title: "Tricky Loose Equality 3",
    description:
      "Evaluate the expression `[null] == 0` and explain the coercion steps.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 72
  {
    id: "tv-tricky-addition-1",
    title: "Tricky Addition 1",
    description: "Evaluate the expression `[] + {}` and explain the coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 73
  {
    id: "tv-tricky-addition-2",
    title: "Tricky Addition 2",
    description:
      "Evaluate the expression `{} + []` and explain why its result differs in a console vs. a script.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 74
  {
    id: "tv-instanceof-primitive",
    title: "`instanceof` with Primitives",
    description:
      "Demonstrate that primitive values are not instances of their wrapper object constructors.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
  },
  // problem--> 75
  {
    id: "tv-instanceof-object",
    title: "`instanceof` with Object Wrappers",
    description:
      "Show that an object created with `new String()` is an instance of `String`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
  },
  // problem--> 76
  {
    id: "tv-constructor-property",
    title: "The `.constructor` Property",
    description:
      "Inspect the `.constructor` property of various values to see which function created them.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Inspect",
  },
  // problem--> 77
  {
    id: "tv-object-prototype-tostring",
    title: "`Object.prototype.toString.call()`",
    description:
      "Use `Object.prototype.toString.call()` for precise type checking of different values.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "value",
        label: "Value to check (e.g., /a/g)",
        type: "text",
        defaultValue: "/a/g",
      },
    ],
    buttonText: "Get Precise Type",
  },
  // problem--> 78
  {
    id: "tv-symbol-uniqueness",
    title: "Symbol as a Unique Key",
    description:
      "Show that two symbols with the same description are not equal.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare Symbols",
  },
  // problem--> 79
  {
    id: "tv-global-symbol-for",
    title: "Global `Symbol.for()`",
    description:
      "Use `Symbol.for()` to create or retrieve symbols from a global registry, showing that identical keys return the same symbol.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare Global Symbols",
  },
  // problem--> 80
  {
    id: "tv-symbol-keyfor",
    title: "`Symbol.keyFor()`",
    description:
      "Use `Symbol.keyFor()` to retrieve the key for a globally registered symbol.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Key for Symbol",
  },
  // problem--> 81
  {
    id: "tv-well-known-symbol-iterator",
    title: "Well-known Symbol: `Symbol.iterator`",
    description:
      "Make a custom object iterable by implementing the `[Symbol.iterator]` method.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Make Iterable",
  },
  // problem--> 82
  {
    id: "tv-empty-array-truthiness",
    title: "Empty Array Truthiness",
    description: "Demonstrate that an empty array is a truthy value.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Truthiness",
  },
  // problem--> 83
  {
    id: "tv-empty-object-truthiness",
    title: "Empty Object Truthiness",
    description: "Demonstrate that an empty object is a truthy value.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Truthiness",
  },
  // problem--> 84
  {
    id: "tv-string-object-equality",
    title: "String Object vs. Primitive Equality",
    description:
      'Compare `new String("a") == "a"` and `new String("a") === "a"` to understand reference and value equality.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 85
  {
    id: "tv-coercion-array-array",
    title: "Coercion with `[] + []`",
    description:
      "Evaluate the expression `[] + []` and explain the result based on string coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 86
  {
    id: "tv-coercion-array-object",
    title: "Coercion with `[] + {}`",
    description:
      "Evaluate `[] + {}` to see how array and object string coercion works.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 87
  {
    id: "tv-coercion-object-array-script",
    title: "Coercion with `{} + []` in a script",
    description:
      "Show how `{} + []` is parsed differently depending on context, leading to different results.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 88
  {
    id: "tv-true-plus-true-coercion",
    title: "`true + true` Coercion",
    description:
      "Show how booleans are coerced to numbers in an arithmetic context.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 89
  {
    id: "tv-relational-comparison-arrays",
    title: "Relational Comparison of Arrays",
    description:
      "Show the result of `[2] > [1]` and explain the string coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 90
  {
    id: "tv-abstract-equality-with-null-array",
    title: "Abstract Equality with `[null]`",
    description:
      'Evaluate `[null] == ""` to demonstrate `toString` coercion on arrays.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 91
  {
    id: "tv-strict-equality-zeros",
    title: "Strict Equality with `-0` and `0`",
    description: "Show that ` -0 === 0 ` is true.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 92
  {
    id: "tv-number-epsilon",
    title: "`Number.EPSILON`",
    description:
      "Explain and use `Number.EPSILON` for safe floating-point comparisons.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare Floats",
  },
  // problem--> 93
  {
    id: "tv-isfinite-vs-number-isfinite",
    title: "`isFinite()` vs `Number.isFinite()`",
    description:
      "Compare the global `isFinite` with `Number.isFinite` using a string input to show the difference in coercion.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "value",
        label: "Value to check",
        type: "text",
        defaultValue: '"42"',
      },
    ],
    buttonText: "Compare",
  },
  // problem--> 94
  {
    id: "tv-instanceof-and-prototype-chain",
    title: "`instanceof` and Prototype Chain",
    description:
      "Show that an instance of a subclass is also an instance of its parent class.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Inheritance",
  },
  // problem--> 95
  {
    id: "tv-null-prototype-type-check",
    title: "`null` prototype object type check",
    description:
      "Demonstrate how `instanceof` fails on objects created with `Object.create(null)`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `instanceof`",
  },
  // problem--> 96
  {
    id: "tv-implicit-coercion-document-all",
    title: "Implicit coercion of `document.all`",
    description:
      "Explain the legacy browser behavior where `document.all` is falsy for loose equality checks.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 97
  {
    id: "tv-tofixed-rounding-behavior",
    title: "`.toFixed` rounding behavior",
    description:
      "Show how `toFixed` can have unexpected rounding behavior for numbers ending in 5.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "num",
        label: "Number to fix",
        type: "number",
        defaultValue: 1.255,
      },
    ],
    buttonText: "Round",
  },
  // problem--> 98
  {
    id: "tv-void-operator",
    title: "The `void` operator",
    description:
      "Use the `void` operator to evaluate an expression and return `undefined`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `void`",
  },
  // problem--> 99
  {
    id: "tv-constructor-of-primitives",
    title: "Constructor of Primitives",
    description:
      "Inspect the `.constructor` property on primitive values to see their wrapper object constructor.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Inspect",
  },
  // problem--> 100
  {
    id: "tv-tricky-subtraction",
    title: "Tricky Subtraction",
    description:
      "Evaluate `[] - 1` and explain the numeric coercion of an empty array.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 101
  {
    id: "tv-json-stringify-undefined",
    title: "JSON.stringify and `undefined`",
    description:
      "Show how `JSON.stringify` handles `undefined` values in objects and arrays.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Stringify",
  },
  // problem--> 102
  {
    id: "tv-json-stringify-functions-symbols",
    title: "JSON.stringify with Functions and Symbols",
    description:
      "Demonstrate that functions and symbols are omitted when stringifying an object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Stringify",
  },
  // problem--> 103
  {
    id: "tv-json-stringify-circular",
    title: "JSON.stringify with Circular References",
    description:
      "Show the `TypeError` that occurs when trying to stringify an object with a circular reference.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Circular",
  },
  // problem--> 104
  {
    id: "tv-isinteger-vs-modulo",
    title: "`isInteger` vs Modulo Check",
    description:
      "Compare `Number.isInteger(x)` with `x % 1 === 0` and show where they might differ (e.g., for non-numbers).",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "val",
        label: "Value to check",
        type: "text",
        defaultValue: '"hello"',
      },
    ],
    buttonText: "Compare",
  },
  // problem--> 105
  {
    id: "tv-bigint-division",
    title: "`BigInt` Division",
    description:
      "Show that division with `BigInt`s is integer division (truncates the result).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate `10n / 3n`",
  },
  // problem--> 106
  {
    id: "tv-symbol-tostring",
    title: "Converting a Symbol to a String",
    description:
      "Demonstrate the difference between `String(mySymbol)` and `mySymbol.toString()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Convert",
  },
  // problem--> 107
  {
    id: "tv-well-known-symbol-species",
    title: "Well-known Symbol: `Symbol.species`",
    description:
      "Explain how a class can use `[Symbol.species]` to control the constructor used by methods like `.map()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 108
  {
    id: "tv-well-known-symbol-hasinstance",
    title: "Well-known Symbol: `Symbol.hasInstance`",
    description:
      "Explain how a class can customize the behavior of the `instanceof` operator with `[Symbol.hasInstance]`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 109
  {
    id: "tv-well-known-symbol-tostringtag",
    title: "Well-known Symbol: `Symbol.toStringTag`",
    description:
      "Implement `[Symbol.toStringTag]` to customize the output of `Object.prototype.toString.call()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Customize Tag",
  },
  // problem--> 110
  {
    id: "tv-constructor-of-null-error",
    title: "`.constructor` of `null` (Error)",
    description:
      "Show that attempting to access a property like `.constructor` on `null` or `undefined` throws a `TypeError`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Access",
  },
  // problem--> 111
  {
    id: "tv-array-plus-number-coercion",
    title: "`[1] + 2` Coercion",
    description:
      "Evaluate the expression `[1] + 2` and explain the string coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 112
  {
    id: "tv-array-minus-number-coercion",
    title: "`[5] - 2` Coercion",
    description:
      "Evaluate the expression `[5] - 2` and explain the numeric coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 113
  {
    id: "tv-string-coercion-order",
    title: "String Coercion Order",
    description:
      'Evaluate `1 + 2 + "3"` vs `"1" + 2 + 3` to demonstrate the left-to-right evaluation order.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 114
  {
    id: "tv-parseint-with-null",
    title: "`parseInt` with `null`",
    description:
      "Show the result of `parseInt(null)` to demonstrate how `parseInt` handles non-string inputs.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Parse `null`",
  },
  // problem--> 115
  {
    id: "tv-parseint-radix-pitfall",
    title: "`parseInt` Radix Pitfall",
    description:
      'Show the danger of omitting the radix in `parseInt` for strings starting with "0".',
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "str",
        label: "Octal-like string",
        type: "text",
        defaultValue: "010",
      },
    ],
    buttonText: "Parse",
  },
  // problem--> 116
  {
    id: "tv-coercion-of-date-objects",
    title: "Coercion of `Date` Objects",
    description:
      "Demonstrate how `Date` objects are coerced to numbers (timestamps) in arithmetic contexts.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Coercion",
  },
  // problem--> 117
  {
    id: "tv-isfinite-vs-number-isfinite-2",
    title: "`isFinite()` vs `Number.isFinite()` (revisited)",
    description:
      "Compare the global `isFinite` with `Number.isFinite` using a string input to show the difference in coercion.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "value",
        label: "Value to check",
        type: "text",
        defaultValue: '"42"',
      },
    ],
    buttonText: "Compare",
  },
  // problem--> 118
  {
    id: "tv-primitive-wrapper-truthiness",
    title: "Truthiness of Wrapper Objects",
    description:
      "Show that an object wrapper for a falsy primitive (e.g., `new Boolean(false)`) is still a truthy object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Truthiness",
  },
  // problem--> 119
  {
    id: "tv-to-primitive-conceptual",
    title: "The `ToPrimitive` Operation (Conceptual)",
    description:
      "Explain the internal `ToPrimitive` abstract operation and how it uses `.valueOf()` and `.toString()` to convert objects.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 120
  {
    id: "tv-loose-equality-pitfall-array-string",
    title: "Loose Equality Pitfall: Array and String",
    description:
      'Evaluate `[1,2] == "1,2"` to show how array-to-string coercion works with `==`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 121
  {
    id: "tv-minus-infinity",
    title: "Negative Infinity",
    description:
      "Demonstrate the special numeric value `-Infinity` and its properties.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show `-Infinity`",
  },
  // problem--> 122
  {
    id: "tv-number-max-value",
    title: "`Number.MAX_VALUE`",
    description:
      "Show the largest representable positive number in JavaScript and what happens when you exceed it.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Demonstrate",
  },
  // problem--> 123
  {
    id: "tv-number-min-value",
    title: "`Number.MIN_VALUE`",
    description:
      "Show the smallest positive number that can be represented (closest to zero).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Demonstrate",
  },
  // problem--> 124
  {
    id: "tv-bitwise-and-for-truncation",
    title: "Integer Truncation with Bitwise OR",
    description:
      "Demonstrate the `| 0` trick as a fast way to truncate a decimal to an integer.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "num",
        label: "Decimal Number",
        type: "number",
        defaultValue: 15.75,
      },
    ],
    buttonText: "Truncate",
  },
  // problem--> 125
  {
    id: "tv-instanceof-and-symbol-hasinstance",
    title: "Customizing `instanceof`",
    description:
      "Implement `[Symbol.hasInstance]` on a class to customize the behavior of the `instanceof` operator.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Custom `instanceof`",
  },
  // problem--> 126
  {
    id: "tv-property-access-on-primitives",
    title: "Property Access on Primitives",
    description:
      "Show that you can access properties on primitives due to autoboxing, but you cannot assign new properties to them.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Assignment",
  },
  // problem--> 127
  {
    id: "tv-new-target-conceptual",
    title: "`new.target` (Conceptual)",
    description:
      "Explain the `new.target` meta-property, which allows a function to detect if it was called as a constructor.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain `new.target`",
  },
  // problem--> 128
  {
    id: "tv-to-string-tag-customization",
    title: "Customizing Type String with `Symbol.toStringTag`",
    description:
      "Use `Symbol.toStringTag` to change the string returned by `Object.prototype.toString.call()` for a custom object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Customize",
  },
  // problem--> 129
  {
    id: "tv-regexp-object-type",
    title: "Type of RegExp",
    description: 'Demonstrate that the `typeof` a RegExp literal is "object".',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 130
  {
    id: "tv-date-object-type",
    title: "Type of Date",
    description: 'Demonstrate that the `typeof` a Date instance is "object".',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 131
  {
    id: "tv-plus-date-coercion",
    title: "`+new Date()` Coercion",
    description:
      "Show how the unary plus operator can be used to get the timestamp from a Date object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Timestamp",
  },
  // problem--> 132
  {
    id: "tv-symbol-to-number-error",
    title: "Converting a Symbol to a Number",
    description:
      "Show that attempting to explicitly or implicitly convert a Symbol to a number throws a `TypeError`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Conversion",
  },
  // problem--> 133
  {
    id: "tv-loose-equality-corner-case-1",
    title: "Loose Equality Corner Case 1",
    description: 'Evaluate and explain the result of `"" == [null]`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 134
  {
    id: "tv-loose-equality-corner-case-2",
    title: "Loose Equality Corner Case 2",
    description: 'Evaluate and explain the result of `false == "0"`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 135
  {
    id: "tv-loose-equality-corner-case-3",
    title: "Loose Equality Corner Case 3",
    description: "Evaluate and explain the result of `0 == []`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 136
  {
    id: "tv-loose-equality-corner-case-4",
    title: "Loose Equality Corner Case 4",
    description: 'Evaluate and explain the result of `" \\t\\r\\n" == 0`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 137
  {
    id: "tv-relational-comparison-null",
    title: "Relational Comparison with `null`",
    description:
      "Demonstrate the strange behavior of `null` with relational operators (`>`, `<`, `>=`, `<=`).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 138
  {
    id: "tv-globalthis",
    title: "The `globalThis` Object",
    description:
      "Explain and demonstrate the `globalThis` keyword, which provides a standard way to access the global object in any environment.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show `globalThis`",
  },
  // problem--> 139
  {
    id: "tv-string-iterator",
    title: "String as an Iterable",
    description:
      "Show that strings are iterable by getting and using their iterator from `[Symbol.iterator]`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Iterate",
  },
  // problem--> 140
  {
    id: "tv-bigint-and-json",
    title: "`BigInt` and JSON",
    description:
      "Show that `JSON.stringify` throws a `TypeError` when it encounters a `BigInt` value.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Stringify",
  },
  // problem--> 141
  {
    id: "tv-coercion-order-of-operations",
    title: "Coercion Order of Operations",
    description:
      'Evaluate `1 + 2 + "3"` vs `"1" + 2 + 3` to demonstrate the left-to-right evaluation order.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 142
  {
    id: "tv-tostring-on-null-error",
    title: "`.toString()` on `null` (Error)",
    description:
      "Demonstrate that calling a method on `null` or `undefined` throws a `TypeError`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
  },
  // problem--> 143
  {
    id: "tv-number-constructor-with-new",
    title: "`new Number()` Wrapper Object",
    description:
      "Create a number object wrapper with `new Number()` and inspect its type and value.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Create Wrapper",
  },
  // problem--> 144
  {
    id: "tv-boolean-constructor-with-new",
    title: "`new Boolean()` Wrapper Object",
    description:
      "Create a boolean object wrapper with `new Boolean()` and demonstrate its truthiness.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Create Wrapper",
  },
  // problem--> 145
  {
    id: "tv-object-keys-vs-for-in",
    title: "`Object.keys` vs `for...in`",
    description:
      "Compare `Object.keys()` with `for...in` on an object that inherits properties to show the difference.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 146
  {
    id: "tv-infinity-minus-infinity",
    title: "`Infinity - Infinity`",
    description:
      "Show that subtracting `Infinity` from `Infinity` results in `NaN`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 147
  {
    id: "tv-abstract-equality-table",
    title: "Abstract Equality Table (Conceptual)",
    description:
      "Explain some of the key rules from the ECMAScript specification's Abstract Equality Comparison table.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 148
  {
    id: "tv-string-concat-method",
    title: "`.concat()` String Method",
    description:
      "Use the `.concat()` method as an alternative to the `+` operator for joining strings.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Concatenate",
  },
  // problem--> 149
  {
    id: "tv-string-to-number-bitwise",
    title: "String to Integer with Bitwise OR",
    description:
      "Use the `| 0` bitwise trick to quickly convert a numeric string to a truncated integer.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "str",
        label: "String Number",
        type: "text",
        defaultValue: "123.99",
      },
    ],
    buttonText: "Convert",
  },
  // problem--> 150
  {
    id: "tv-well-known-symbol-match",
    title: "Well-known Symbol: `Symbol.match`",
    description:
      "Explain how `[Symbol.match]` allows an object to customize how it is used with `String.prototype.match()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 151
  {
    id: "tv-well-known-symbol-replace",
    title: "Well-known Symbol: `Symbol.replace`",
    description:
      "Explain how `[Symbol.replace]` allows an object to customize its behavior with `String.prototype.replace()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 152
  {
    id: "tv-well-known-symbol-search",
    title: "Well-known Symbol: `Symbol.search`",
    description:
      "Explain how `[Symbol.search]` allows an object to customize its behavior with `String.prototype.search()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 153
  {
    id: "tv-well-known-symbol-split",
    title: "Well-known Symbol: `Symbol.split`",
    description:
      "Explain how `[Symbol.split]` allows an object to customize its behavior with `String.prototype.split()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 154
  {
    id: "tv-well-known-symbol-isconcatspreadable",
    title: "Well-known Symbol: `Symbol.isConcatSpreadable`",
    description:
      "Explain how `[Symbol.isConcatSpreadable]` can be used to control if an object is flattened by `Array.prototype.concat()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 155
  {
    id: "tv-well-known-symbol-unscopables",
    title: "Well-known Symbol: `Symbol.unscopables`",
    description:
      "Explain the historical `[Symbol.unscopables]` property, which can control which properties are exposed to the deprecated `with` statement.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain Concept",
  },
  // problem--> 156
  {
    id: "tv-tostring-on-object-create-null",
    title: "`.toString()` on Null-Prototype Object (Error)",
    description:
      "Demonstrate that an object created with `Object.create(null)` has no prototype and thus no `.toString()` method.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
  },
  // problem--> 157
  {
    id: "tv-coercion-with-empty-string",
    title: "Coercion of Empty String to Number",
    description:
      'Show that an empty string `""` is coerced to `0` in a numeric context.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Coerce",
  },
  // problem--> 158
  {
    id: "tv-coercion-with-whitespace-string",
    title: "Coercion of Whitespace String to Number",
    description:
      "Show that a string containing only whitespace is coerced to `0`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Coerce",
  },
  // problem--> 159
  {
    id: "tv-coercion-of-hex-string",
    title: "Coercion of Hexadecimal String",
    description:
      "Demonstrate how `Number()` can parse hexadecimal string prefixes (`0x`).",
    category: "Type and Value Mastery",
    inputs: [
      { id: "hex", label: "Hex String", type: "text", defaultValue: "0xFF" },
    ],
    buttonText: "Coerce",
  },
  // problem--> 160
  {
    id: "tv-negative-zero-identity",
    title: "Negative Zero Identity",
    description: "Show that adding `-0` to a number does not change it.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
  },
  // problem--> 161
  {
    id: "tv-negative-zero-string",
    title: "String representation of `-0`",
    description: 'Demonstrate that `String(-0)` is `"0"`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Convert",
  },
  // problem--> 162
  {
    id: "tv-number-tostring-vs-string-constructor",
    title: "`number.toString()` vs `String(number)`",
    description:
      "Compare the two main ways of converting a number to a string and explain why `String()` is generally safer.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 163
  {
    id: "tv-json-parse-reviver",
    title: "`JSON.parse` Reviver Function",
    description:
      "Use a reviver function with `JSON.parse` to customize the deserialization process, e.g., to convert date strings back into Date objects.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Parse with Reviver",
  },
  // problem--> 164
  {
    id: "tv-json-stringify-replacer",
    title: "`JSON.stringify` Replacer Function",
    description:
      "Use a replacer function with `JSON.stringify` to customize the serialization of an object, e.g., to filter out certain properties.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Stringify with Replacer",
  },
  // problem--> 165
  {
    id: "tv-tag-function-for-template-literal",
    title: "Tagged Template Literals",
    description:
      "Create a tag function that intercepts a template literal to customize its output.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Use Tag Function",
  },
  // problem--> 166
  {
    id: "tv-raw-string-from-tag-function",
    title: "Raw Strings in Tagged Templates",
    description:
      "Access the raw, un-escaped string from within a tag function.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Raw String",
  },
  // problem--> 167
  {
    id: "tv-tolocalestring",
    title: "`.toLocaleString()`",
    description:
      "Use `.toLocaleString()` to format a number according to local conventions (e.g., with thousands separators).",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 1234567.89 },
    ],
    buttonText: "Format",
  },
  // problem--> 168
  {
    id: "tv-intl-numberformat",
    title: "`Intl.NumberFormat`",
    description:
      "Use the `Intl.NumberFormat` object for advanced, locale-aware number formatting (e.g., currency).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Format as Currency",
  },
  // problem--> 169
  {
    id: "tv-internal-class-property",
    title: "The [[Class]] Internal Property (Conceptual)",
    description:
      "Explain the historical internal [[Class]] property and how `Object.prototype.toString.call()` was used to access it.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 170
  {
    id: "tv-coercion-with-boolean-object",
    title: "Coercion with `new Boolean(false)`",
    description:
      "Demonstrate the confusing behavior where `new Boolean(false)` is a truthy object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 171
  {
    id: "tv-infinity-divided-by-infinity",
    title: "`Infinity / Infinity`",
    description:
      "Show that dividing `Infinity` by `Infinity` results in `NaN`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 172
  {
    id: "tv-number-plus-undefined",
    title: "`Number + undefined`",
    description: "Show that adding a number to `undefined` results in `NaN`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 173
  {
    id: "tv-number-plus-null",
    title: "`Number + null`",
    description: "Show that adding a number to `null` coerces `null` to 0.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 174
  {
    id: "tv-parseint-infinity",
    title: "`parseInt` with `Infinity`",
    description: "Show the result of `parseInt(Infinity)`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Parse",
  },
  // problem--> 175
  {
    id: "tv-number-max-value-plus-one",
    title: "Exceeding `Number.MAX_VALUE`",
    description:
      "Show that exceeding `Number.MAX_VALUE` results in `Infinity`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 176
  {
    id: "tv-boxing-and-unboxing",
    title: "Boxing and Unboxing (Conceptual)",
    description:
      'Explain the concepts of "boxing" (wrapping a primitive) and "unboxing" (retrieving the primitive value from a wrapper).',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 177
  {
    id: "tv-symbol-as-object-property",
    title: "Symbol as an Object Property",
    description:
      "Use a `Symbol` as a key for an object property and demonstrate how to access it.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
  },
  // problem--> 178
  {
    id: "tv-symbol-property-enumeration",
    title: "Symbol Property Enumeration",
    description:
      "Show that symbol-keyed properties are not included in `for...in` loops or `Object.keys()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
  },
  // problem--> 179
  {
    id: "tv-bigint-and-math-object",
    title: "`BigInt` and the `Math` Object",
    description:
      "Show that `Math` object methods do not work with `BigInt`s and will throw a `TypeError`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
  },
  // problem--> 180
  {
    id: "tv-coercion-with-logical-not",
    title: "Coercion with `!` Operator",
    description:
      "Demonstrate how the `!` operator coerces any value to a boolean before negation.",
    category: "Type and Value Mastery",
    inputs: [{ id: "val", label: "Value", type: "text", defaultValue: "1" }],
    buttonText: "Negate",
  },
  // problem--> 181
  {
    id: "tv-tricky-plus-plus-coercion",
    title: "`++` Coercion Pitfall",
    description:
      "Show the result of applying the increment operator to an empty array.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 182
  {
    id: "tv-instanceof-and-realm-conceptual",
    title: "`instanceof` and Realms (Conceptual)",
    description:
      "Explain why `instanceof` can fail for objects from different realms (e.g., iframes), because they have different global objects and constructors.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 183
  {
    id: "tv-to-locale-string-options",
    title: "`.toLocaleString()` with Options",
    description:
      "Use the options argument of `.toLocaleString()` to format a number as currency.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 1234.56 },
    ],
    buttonText: "Format",
  },
  // problem--> 184
  {
    id: "tv-number-constructor-vs-literal",
    title: "`Number` Constructor vs. Literal",
    description:
      "Compare the types and behaviors of a number primitive vs. a number object wrapper.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 185
  {
    id: "tv-loose-equality-with-document-all",
    title: "Loose Equality and `document.all`",
    description:
      "Demonstrate the unique legacy browser behavior where `document.all` is loosely equal to `undefined` and `null`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Behavior (Conceptual)",
  },
  // problem--> 186
  {
    id: "tv-relational-comparison-and-valueof",
    title: "Relational Comparison and `.valueOf()`",
    description:
      "Create an object with a custom `.valueOf()` method to control its behavior in relational comparisons.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Comparison",
  },
  // problem--> 187
  {
    id: "tv-coercion-with-bitwise-or",
    title: "Coercion with Bitwise OR (`|`)",
    description: "Show how `|` coerces its operands to 32-bit signed integers.",
    category: "Type and Value Mastery",
    inputs: [{ id: "val", label: "Value", type: "text", defaultValue: "3.14" }],
    buttonText: "Coerce",
  },
  // problem--> 188
  {
    id: "tv-getownpropertysymbols",
    title: "`Object.getOwnPropertySymbols()`",
    description:
      "Use `Object.getOwnPropertySymbols()` to get an array of all own symbol properties of an object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Symbols",
  },
  // problem--> 189
  {
    id: "tv-json-reviver-and-types",
    title: "Type Restoration with `JSON.parse` Reviver",
    description:
      "Use a reviver function to restore custom object types during JSON parsing.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Reviver",
  },
  // problem--> 190
  {
    id: "tv-tagged-template-security",
    title: "Tagged Templates for Security (Conceptual)",
    description:
      "Explain how tagged template literals can be used to sanitize inputs and prevent injection attacks (e.g., in SQL or HTML).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 191
  {
    id: "tv-bigint-and-relational-operators",
    title: "`BigInt` and Relational Operators",
    description:
      "Show that `BigInt` and `Number` values can be compared using relational operators.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 192
  {
    id: "tv-string-raw",
    title: "`String.raw` Tag Function",
    description:
      "Use the built-in `String.raw` tag function to get the raw string content of a template literal, without processing escape sequences.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Raw String",
  },
  // problem--> 193
  {
    id: "tv-coercion-corner-case-1",
    title: "Coercion Corner Case 1",
    description: "Evaluate and explain `[1] - - [1]`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 194
  {
    id: "tv-coercion-corner-case-2",
    title: "Coercion Corner Case 2",
    description: "Evaluate and explain `!+[]+[]+![]`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 195
  {
    id: "tv-coercion-corner-case-3",
    title: "Coercion Corner Case 3",
    description: "Evaluate and explain `[1,2,3] + [4,5,6]`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 196
  {
    id: "tv-coercion-corner-case-4",
    title: "Coercion Corner Case 4",
    description: 'Evaluate and explain `(+"1")`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
  },
  // problem--> 197
  {
    id: "tv-structured-clone",
    title: "Deep Clone with `structuredClone`",
    description:
      "Use the modern `structuredClone()` global function to perform a robust deep clone of an object with nested structures.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Deep Clone",
  },
  // problem--> 198
  {
    id: "tv-structured-clone-limitations",
    title: "`structuredClone` Limitations",
    description:
      "Explain the limitations of `structuredClone`, such as its inability to clone functions, DOM nodes, or an object's prototype chain.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 199
  {
    id: "tv-object-hasown",
    title: "`Object.hasOwn()`",
    description:
      "Use the static method `Object.hasOwn()` as a safer alternative to `.hasOwnProperty()` for checking an object's own properties.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Property",
  },
  // problem--> 200
  {
    id: "tv-final-summary",
    title: "Final Summary: Coercion and Equality",
    description:
      "Summarize the most important takeaways: why to prefer strict equality (`===`) and `Object.is()`, and how explicit coercion is clearer than relying on implicit coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Summarize",
  },
];
