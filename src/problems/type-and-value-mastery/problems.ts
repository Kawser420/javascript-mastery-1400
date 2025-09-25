import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "tvm-typeof-string",
    title: "Typeof String",
    description:
      "Use the `typeof` operator to determine the type of a string literal.",
    category: "Type and Value Mastery",
    buttonText: "Get Type",
    inputs: [],
  },
  // problem--> 02
  {
    id: "tvm-typeof-number",
    title: "Typeof Number",
    description:
      "Use the `typeof` operator to determine the type of a number literal.",
    category: "Type and Value Mastery",
    buttonText: "Get Type",
    inputs: [],
  },
  // problem--> 03
  {
    id: "tvm-typeof-boolean",
    title: "Typeof Boolean",
    description:
      "Use the `typeof` operator to determine the type of a boolean literal.",
    category: "Type and Value Mastery",
    buttonText: "Get Type",
    inputs: [],
  },
  // problem--> 04
  {
    id: "tvm-typeof-undefined",
    title: "Typeof Undefined",
    description:
      "Use the `typeof` operator on an uninitialized variable to see its type.",
    category: "Type and Value Mastery",
    buttonText: "Get Type",
    inputs: [],
  },
  // problem--> 05
  {
    id: "tvm-typeof-object",
    title: "Typeof Object",
    description: "Use the `typeof` operator on an object literal.",
    category: "Type and Value Mastery",
    buttonText: "Get Type",
    inputs: [],
  },
  // problem--> 06
  {
    id: "tvm-typeof-function",
    title: "Typeof Function",
    description:
      "Use the `typeof` operator on a function to see its special type.",
    category: "Type and Value Mastery",
    buttonText: "Get Type",
    inputs: [],
  },
  // problem--> 07
  {
    id: "tvm-typeof-null-bug",
    title: "The `typeof null` Bug",
    description:
      "Demonstrate the famous JavaScript quirk where `typeof null` returns 'object'.",
    category: "Type and Value Mastery",
    buttonText: "Get Type",
    inputs: [],
  },
  // problem--> 08
  {
    id: "tvm-typeof-array-bug",
    title: "Typeof Array",
    description:
      "Show that `typeof` an array is 'object' and demonstrate the correct way to check for an array.",
    category: "Type and Value Mastery",
    buttonText: "Check Type",
    inputs: [],
  },
  // problem--> 09
  {
    id: "tvm-check-for-null",
    title: "Check for `null`",
    description:
      "Demonstrate the correct way to check if a value is strictly equal to `null`.",
    category: "Type and Value Mastery",
    buttonText: "Check `null`",
    inputs: [],
  },
  // problem--> 10
  {
    id: "tvm-check-for-undefined",
    title: "Check for `undefined`",
    description:
      "Demonstrate the correct way to check if a value is strictly equal to `undefined`.",
    category: "Type and Value Mastery",
    buttonText: "Check `undefined`",
    inputs: [],
  },
  // problem--> 11
  {
    id: "tvm-check-is-array",
    title: "Check if Array",
    description:
      "Use the `Array.isArray()` method to correctly identify an array.",
    category: "Type and Value Mastery",
    buttonText: "Check if Array",
    inputs: [],
  },
  // problem--> 12
  {
    id: "tvm-strict-equality-same-type",
    title: "Strict Equality (Same Type)",
    description:
      "Use the strict equality operator (`===`) to compare two numbers with the same value.",
    category: "Type and Value Mastery",
    buttonText: "Compare `5` and `5`",
    inputs: [],
  },
  // problem--> 13
  {
    id: "tvm-strict-equality-diff-type",
    title: "Strict Equality (Different Type)",
    description:
      "Use `===` to compare a number and a string with the same apparent value.",
    category: "Type and Value Mastery",
    buttonText: 'Compare `5` and `"5"`',
    inputs: [],
  },
  // problem--> 14
  {
    id: "tvm-loose-equality-coercion",
    title: "Loose Equality (Coercion)",
    description:
      "Use the loose equality operator (`==`) to compare a number and a string, demonstrating type coercion.",
    category: "Type and Value Mastery",
    buttonText: 'Compare `5` and `"5"`',
    inputs: [],
  },
  // problem--> 15
  {
    id: "tvm-loose-equality-null-undefined",
    title: "Loose Equality: `null` and `undefined`",
    description: "Show the special case where `null == undefined` is true.",
    category: "Type and Value Mastery",
    buttonText: "Compare `null` and `undefined`",
    inputs: [],
  },
  // problem--> 16
  {
    id: "tvm-strict-inequality",
    title: "Strict Inequality (`!==`)",
    description:
      "Use `!==` to show that a number and a string with the same value are not strictly equal.",
    category: "Type and Value Mastery",
    buttonText: 'Compare `5` and `"5"`',
    inputs: [],
  },
  // problem--> 17
  {
    id: "tvm-loose-inequality",
    title: "Loose Inequality (`!=`)",
    description:
      "Use `!=` to show that a number and a string with the same value are considered equal after coercion.",
    category: "Type and Value Mastery",
    buttonText: 'Compare `5` and `"5"`',
    inputs: [],
  },
  // problem--> 18
  {
    id: "tvm-nan-equality-pitfall",
    title: "`NaN` Equality Pitfall",
    description:
      "Demonstrate that `NaN` is not equal to anything, including itself.",
    category: "Type and Value Mastery",
    buttonText: "Compare `NaN` with `NaN`",
    inputs: [],
  },
  // problem--> 19
  {
    id: "tvm-check-is-nan",
    title: "Check for `NaN`",
    description:
      "Use the `Number.isNaN()` method to correctly check if a value is `NaN`.",
    category: "Type and Value Mastery",
    buttonText: "Check `NaN`",
    inputs: [],
  },
  // problem--> 20
  {
    id: "tvm-object-is-comparison",
    title: "`Object.is()` Comparison",
    description:
      "Use `Object.is()` to show its behavior with `NaN` and `-0` compared to `===`.",
    category: "Type and Value Mastery",
    buttonText: "Test `Object.is`",
    inputs: [],
  },
  // problem--> 21
  {
    id: "tvm-truthy-string",
    title: "Truthy: Non-empty String",
    description: "Show that a non-empty string is a 'truthy' value.",
    category: "Type and Value Mastery",
    buttonText: "Check 'hello'",
    inputs: [],
  },
  // problem--> 22
  {
    id: "tvm-truthy-number",
    title: "Truthy: Non-zero Number",
    description: "Show that any number other than 0 is 'truthy'.",
    category: "Type and Value Mastery",
    buttonText: "Check -1",
    inputs: [],
  },
  // problem--> 23
  {
    id: "tvm-truthy-object",
    title: "Truthy: Object",
    description: "Show that an empty object (`{}`) is 'truthy'.",
    category: "Type and Value Mastery",
    buttonText: "Check `{}`",
    inputs: [],
  },
  // problem--> 24
  {
    id: "tvm-truthy-array",
    title: "Truthy: Array",
    description: "Show that an empty array (`[]`) is 'truthy'.",
    category: "Type and Value Mastery",
    buttonText: "Check `[]`",
    inputs: [],
  },
  // problem--> 25
  {
    id: "tvm-falsy-empty-string",
    title: "Falsy: Empty String",
    description: "Show that an empty string (`''`) is a 'falsy' value.",
    category: "Type and Value Mastery",
    buttonText: "Check `''`",
    inputs: [],
  },
  // problem--> 26
  {
    id: "tvm-falsy-zero",
    title: "Falsy: Zero",
    description: "Show that the number `0` is a 'falsy' value.",
    category: "Type and Value Mastery",
    buttonText: "Check `0`",
    inputs: [],
  },
  // problem--> 27
  {
    id: "tvm-falsy-null",
    title: "Falsy: `null`",
    description: "Show that `null` is a 'falsy' value.",
    category: "Type and Value Mastery",
    buttonText: "Check `null`",
    inputs: [],
  },
  // problem--> 28
  {
    id: "tvm-falsy-undefined",
    title: "Falsy: `undefined`",
    description: "Show that `undefined` is a 'falsy' value.",
    category: "Type and Value Mastery",
    buttonText: "Check `undefined`",
    inputs: [],
  },
  // problem--> 29
  {
    id: "tvm-falsy-nan",
    title: "Falsy: `NaN`",
    description: "Show that `NaN` is a 'falsy' value.",
    category: "Type and Value Mastery",
    buttonText: "Check `NaN`",
    inputs: [],
  },
  // problem--> 30
  {
    id: "tvm-falsy-false",
    title: "Falsy: `false`",
    description: "Show that the boolean `false` is a 'falsy' value.",
    category: "Type and Value Mastery",
    buttonText: "Check `false`",
    inputs: [],
  },
  // problem--> 31
  {
    id: "tvm-double-not-truthy",
    title: "Coerce to Boolean (`!!`) - Truthy",
    description:
      "Use the double NOT operator (`!!`) to convert a truthy value to `true`.",
    category: "Type and Value Mastery",
    buttonText: "Test `!!'hello'`",
    inputs: [],
  },
  // problem--> 32
  {
    id: "tvm-double-not-falsy",
    title: "Coerce to Boolean (`!!`) - Falsy",
    description:
      "Use the double NOT operator (`!!`) to convert a falsy value to `false`.",
    category: "Type and Value Mastery",
    buttonText: "Test `!!0`",
    inputs: [],
  },
  // problem--> 33
  {
    id: "tvm-explicit-conversion-string",
    title: "Explicit Conversion to String",
    description:
      "Use the `String()` constructor to explicitly convert a number to a string.",
    category: "Type and Value Mastery",
    buttonText: "Convert `123`",
    inputs: [],
  },
  // problem--> 34
  {
    id: "tvm-explicit-conversion-number",
    title: "Explicit Conversion to Number",
    description:
      "Use the `Number()` constructor to explicitly convert a string to a number.",
    category: "Type and Value Mastery",
    buttonText: 'Convert `"123"`',
    inputs: [],
  },
  // problem--> 35
  {
    id: "tvm-explicit-conversion-boolean",
    title: "Explicit Conversion to Boolean",
    description:
      "Use the `Boolean()` constructor to explicitly convert a value to a boolean.",
    category: "Type and Value Mastery",
    buttonText: "Convert `1`",
    inputs: [],
  },
  // problem--> 36
  {
    id: "tvm-implicit-coercion-add",
    title: "Implicit Coercion (+)",
    description:
      "Show how the `+` operator coerces a number to a string when one operand is a string.",
    category: "Type and Value Mastery",
    buttonText: 'Evaluate `5 + "5"`',
    inputs: [],
  },
  // problem--> 37
  {
    id: "tvm-implicit-coercion-subtract",
    title: "Implicit Coercion (-)",
    description: "Show how the `-` operator coerces a string to a number.",
    category: "Type and Value Mastery",
    buttonText: 'Evaluate `"5" - 5`',
    inputs: [],
  },
  // problem--> 38
  {
    id: "tvm-implicit-coercion-if",
    title: "Implicit Coercion in `if` Statement",
    description:
      "Demonstrate how an `if` statement implicitly coerces its condition to a boolean.",
    category: "Type and Value Mastery",
    buttonText: "Test `if (1)`",
    inputs: [],
  },
  // problem--> 39
  {
    id: "tvm-parseint-basic",
    title: "`parseInt()` - Basic",
    description:
      "Use `parseInt()` to convert a string to an integer, showing it ignores trailing non-numeric characters.",
    category: "Type and Value Mastery",
    buttonText: 'Parse `"100px"`',
    inputs: [],
  },
  // problem--> 40
  {
    id: "tvm-parseint-radix",
    title: "`parseInt()` with Radix",
    description:
      "Use `parseInt()` with a radix of 2 to convert a binary string to a decimal number.",
    category: "Type and Value Mastery",
    buttonText: 'Parse `"101"` (base 2)',
    inputs: [],
  },
  // problem--> 41
  {
    id: "tvm-parsefloat-basic",
    title: "`parseFloat()`",
    description:
      "Use `parseFloat()` to convert a string to a floating-point number.",
    category: "Type and Value Mastery",
    buttonText: 'Parse `"3.14"`',
    inputs: [],
  },
  // problem--> 42
  {
    id: "tvm-number-tostring",
    title: "`.toString()` Method",
    description:
      "Use the `.toString()` method on a number to convert it to a string.",
    category: "Type and Value Mastery",
    buttonText: "Convert `(10).toString()`",
    inputs: [],
  },
  // problem--> 43
  {
    id: "tvm-number-tostring-radix",
    title: "`.toString()` with Radix",
    description:
      "Use `.toString(16)` on a number to convert it to its hexadecimal string representation.",
    category: "Type and Value Mastery",
    buttonText: "Convert `255` to hex",
    inputs: [],
  },
  // problem--> 44
  {
    id: "tvm-object-comparison",
    title: "Object Comparison (by Reference)",
    description:
      "Demonstrate that two separate objects with identical content are not equal.",
    category: "Type and Value Mastery",
    buttonText: "Compare `{}` and `{}`",
    inputs: [],
  },
  // problem--> 45
  {
    id: "tvm-array-comparison",
    title: "Array Comparison (by Reference)",
    description:
      "Demonstrate that two separate arrays with identical content are not equal.",
    category: "Type and Value Mastery",
    buttonText: "Compare `[]` and `[]`",
    inputs: [],
  },
  // problem--> 46
  {
    id: "tvm-object-reference-assignment",
    title: "Object Assignment (by Reference)",
    description:
      "Show that assigning an object to a new variable copies the reference, not the object.",
    category: "Type and Value Mastery",
    buttonText: "Test Reference",
    inputs: [],
  },
  // problem--> 47
  {
    id: "tvm-primitive-assignment",
    title: "Primitive Assignment (by Value)",
    description:
      "Show that assigning a primitive to a new variable copies the value.",
    category: "Type and Value Mastery",
    buttonText: "Test Value Copy",
    inputs: [],
  },
  // problem--> 48
  {
    id: "tvm-pass-primitive-to-function",
    title: "Pass Primitive to Function (by Value)",
    description:
      "Show that modifying a primitive parameter inside a function does not affect the original variable.",
    category: "Type and Value Mastery",
    buttonText: "Test Pass by Value",
    inputs: [],
  },
  // problem--> 49
  {
    id: "tvm-pass-object-to-function",
    title: "Pass Object to Function (by Reference)",
    description:
      "Show that modifying an object parameter's property inside a function affects the original object.",
    category: "Type and Value Mastery",
    buttonText: "Test Pass by Reference",
    inputs: [],
  },
  // problem--> 50
  {
    id: "tvm-reassign-object-param",
    title: "Reassigning an Object Parameter",
    description:
      "Show that reassigning an object parameter inside a function does not affect the original variable.",
    category: "Type and Value Mastery",
    buttonText: "Test Reassignment",
    inputs: [],
  },
  // problem--> 51
  {
    id: "tvm-infinity-type",
    title: "Type of `Infinity`",
    description:
      "Use `typeof` to check the type of the `Infinity` global property.",
    category: "Type and Value Mastery",
    buttonText: "Get Type",
    inputs: [],
  },
  // problem--> 52
  {
    id: "tvm-infinity-comparison",
    title: "`Infinity` Comparison",
    description:
      "Demonstrate that `Infinity` is greater than any other number.",
    category: "Type and Value Mastery",
    buttonText: "Compare with `Number.MAX_VALUE`",
    inputs: [],
  },
  // problem--> 53
  {
    id: "tvm-division-by-zero",
    title: "Division by Zero",
    description: "Show that dividing a number by zero results in `Infinity`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `10 / 0`",
    inputs: [],
  },
  // problem--> 54
  {
    id: "tvm-zero-divided-by-zero",
    title: "Zero Divided by Zero",
    description: "Show that dividing zero by zero results in `NaN`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `0 / 0`",
    inputs: [],
  },
  // problem--> 55
  {
    id: "tvm-infinity-minus-infinity",
    title: "`Infinity - Infinity`",
    description:
      "Show that subtracting `Infinity` from `Infinity` results in `NaN`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate",
    inputs: [],
  },
  // problem--> 56
  {
    id: "tvm-negative-infinity",
    title: "Negative Infinity",
    description:
      "Show that dividing a negative number by zero results in `-Infinity`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `-10 / 0`",
    inputs: [],
  },
  // problem--> 57
  {
    id: "tvm-isfinite",
    title: "`isFinite()`",
    description:
      "Use the global `isFinite()` function to check if a value is a finite number.",
    category: "Type and Value Mastery",
    buttonText: "Check `Infinity`",
    inputs: [],
  },
  // problem--> 58
  {
    id: "tvm-tofixed",
    title: "`.toFixed()`",
    description:
      "Use the `.toFixed()` method to format a number to a specific number of decimal places, returning a string.",
    category: "Type and Value Mastery",
    buttonText: "Format `3.14159`",
    inputs: [],
  },
  // problem--> 59
  {
    id: "tvm-toprecision",
    title: "`.toPrecision()`",
    description:
      "Use the `.toPrecision()` method to format a number to a specific number of significant figures.",
    category: "Type and Value Mastery",
    buttonText: "Format `123.456`",
    inputs: [],
  },
  // problem--> 60
  {
    id: "tvm-toexponential",
    title: "`.toExponential()`",
    description:
      "Use the `.toExponential()` method to represent a number in exponential notation.",
    category: "Type and Value Mastery",
    buttonText: "Format `1000`",
    inputs: [],
  },
  // problem--> 61
  {
    id: "tvm-unary-plus-coercion",
    title: "Unary Plus for Coercion",
    description:
      "Use the unary plus operator (`+`) as a concise way to convert a value to a number.",
    category: "Type and Value Mastery",
    buttonText: 'Convert `+"100"`',
    inputs: [],
  },
  // problem--> 62
  {
    id: "tvm-string-wrapper-object",
    title: "String Wrapper Object",
    description:
      "Demonstrate creating a String wrapper object with `new String()` and show how it differs from a primitive string.",
    category: "Type and Value Mastery",
    buttonText: "Compare `String` types",
    inputs: [],
  },
  // problem--> 63
  {
    id: "tvm-number-wrapper-object",
    title: "Number Wrapper Object",
    description:
      "Demonstrate creating a Number wrapper object with `new Number()` and show its `typeof` is 'object'.",
    category: "Type and Value Mastery",
    buttonText: "Compare `Number` types",
    inputs: [],
  },
  // problem--> 64
  {
    id: "tvm-boolean-wrapper-object",
    title: "Boolean Wrapper Object",
    description: "Show that `new Boolean(false)` is a truthy object.",
    category: "Type and Value Mastery",
    buttonText: "Check Truthiness",
    inputs: [],
  },
  // problem--> 65
  {
    id: "tvm-autoboxing",
    title: "Autoboxing (Conceptual)",
    description:
      "Explain how JavaScript automatically wraps primitives with objects to allow method calls like `'hello'.toUpperCase()`.",
    category: "Type and Value Mastery",
    buttonText: "Explain Autoboxing",
    inputs: [],
  },
  // problem--> 66
  {
    id: "tvm-symbol-basic",
    title: "Creating a `Symbol`",
    description: "Use `Symbol()` to create a symbol and check its type.",
    category: "Type and Value Mastery",
    buttonText: "Create Symbol",
    inputs: [],
  },
  // problem--> 67
  {
    id: "tvm-symbol-uniqueness",
    title: "`Symbol` Uniqueness",
    description:
      "Create two symbols with the same description to show that they are not equal.",
    category: "Type and Value Mastery",
    buttonText: "Compare Symbols",
    inputs: [],
  },
  // problem--> 68
  {
    id: "tvm-symbol-as-key",
    title: "`Symbol` as an Object Key",
    description: "Use a symbol as a key in an object literal.",
    category: "Type and Value Mastery",
    buttonText: "Test Symbol Key",
    inputs: [],
  },
  // problem--> 69
  {
    id: "tvm-symbol-for",
    title: "`Symbol.for()` (Global Symbols)",
    description:
      "Use `Symbol.for()` to create a symbol in the global symbol registry and retrieve it again.",
    category: "Type and Value Mastery",
    buttonText: "Test Global Symbol",
    inputs: [],
  },
  // problem--> 70
  {
    id: "tvm-symbol-keyfor",
    title: "`Symbol.keyFor()`",
    description:
      "Use `Symbol.keyFor()` to retrieve the key (description) for a global symbol.",
    category: "Type and Value Mastery",
    buttonText: "Get Symbol Key",
    inputs: [],
  },
  // problem--> 71
  {
    id: "tvm-bigint-basic",
    title: "Creating a `BigInt`",
    description:
      "Create a `BigInt` by appending `n` to an integer literal and check its type.",
    category: "Type and Value Mastery",
    buttonText: "Create BigInt",
    inputs: [],
  },
  // problem--> 72
  {
    id: "tvm-bigint-and-number-type-error",
    title: "`BigInt` and `Number` `TypeError`",
    description:
      "Demonstrate that you cannot mix `BigInt` and `Number` types in arithmetic operations.",
    category: "Type and Value Mastery",
    buttonText: "Test Mixed Types",
    inputs: [],
  },
  // problem--> 73
  {
    id: "tvm-bigint-comparison",
    title: "`BigInt` and `Number` Comparison",
    description:
      "Show that you can compare `BigInt` and `Number` values with `==` and `>`.",
    category: "Type and Value Mastery",
    buttonText: "Compare `10n` and `10`",
    inputs: [],
  },
  // problem--> 74
  {
    id: "tvm-bigint-strict-equality",
    title: "`BigInt` and `Number` Strict Equality",
    description:
      "Show that `BigInt` and `Number` values are not strictly equal even if their values are the same.",
    category: "Type and Value Mastery",
    buttonText: "Compare `10n` and `10` with `===`",
    inputs: [],
  },
  // problem--> 75
  {
    id: "tvm-bigint-math-functions",
    title: "`BigInt` and `Math` Object",
    description:
      "Show that you cannot use methods from the `Math` object with `BigInt` values.",
    category: "Type and Value Mastery",
    buttonText: "Test `Math.max`",
    inputs: [],
  },
  // problem--> 76
  {
    id: "tvm-object-prototype-tostring",
    title: "`Object.prototype.toString` for Type Checking",
    description:
      "Use the classic pattern of `Object.prototype.toString.call()` to get a precise type string.",
    category: "Type and Value Mastery",
    buttonText: "Check `[object Array]`",
    inputs: [],
  },
  // problem--> 77
  {
    id: "tvm-constructor-property",
    title: "The `.constructor` Property",
    description:
      "Inspect the `.constructor` property of an instance to see that it points to the function that created it.",
    category: "Type and Value Mastery",
    buttonText: "Check Constructor",
    inputs: [],
  },
  // problem--> 78
  {
    id: "tvm-primitive-methods-autoboxing",
    title: "Primitive Methods (Autoboxing)",
    description:
      "Show that you can call methods on a primitive string, demonstrating autoboxing.",
    category: "Type and Value Mastery",
    buttonText: "Call `.toUpperCase()`",
    inputs: [],
  },
  // problem--> 79
  {
    id: "tvm-valueof-method",
    title: "The `.valueOf()` Method",
    description:
      "Demonstrate the `.valueOf()` method on a Number wrapper object to get its primitive value.",
    category: "Type and Value Mastery",
    buttonText: "Test `.valueOf()`",
    inputs: [],
  },
  // problem--> 80
  {
    id: "tvm-to-primitive-conceptual",
    title: "`Symbol.toPrimitive` (Conceptual)",
    description:
      "Explain how an object can customize its conversion to a primitive value by implementing `[Symbol.toPrimitive]`.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 81
  {
    id: "tvm-loose-equality-array-string",
    title: "Loose Equality: Array vs. String",
    description:
      "Show that `[42] == '42'` is true due to the array being converted to a primitive string.",
    category: "Type and Value Mastery",
    buttonText: "Compare `[42]` and `'42'`",
    inputs: [],
  },
  // problem--> 82
  {
    id: "tvm-loose-equality-object-string",
    title: "Loose Equality: Object vs. String",
    description: "Demonstrate the result of `({ valueOf: () => 10 }) == '10'`.",
    category: "Type and Value Mastery",
    buttonText: "Compare Object and String",
    inputs: [],
  },
  // problem--> 83
  {
    id: "tvm-plus-operator-object",
    title: "Coercion with `+` and an Object",
    description:
      "Show the result of adding a number to an object, triggering the `ToPrimitive` operation.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `10 + {}`",
    inputs: [],
  },
  // problem--> 84
  {
    id: "tvm-json-stringify-types",
    title: "`JSON.stringify` and Types",
    description:
      "Show how `JSON.stringify` handles `undefined`, `Symbol`, and `function` properties.",
    category: "Type and Value Mastery",
    buttonText: "Stringify Object",
    inputs: [],
  },
  // problem--> 85
  {
    id: "tvm-prototype-of-primitives",
    title: "Prototype of Primitives",
    description:
      "Use `Object.getPrototypeOf()` on a primitive to show the prototype of its wrapper object.",
    category: "Type and Value Mastery",
    buttonText: "Get Prototype of `''`",
    inputs: [],
  },
  // problem--> 86
  {
    id: "tvm-constructor-of-primitives",
    title: "Constructor of Primitives",
    description:
      "Access the `.constructor` property of a primitive to see its wrapper constructor.",
    category: "Type and Value Mastery",
    buttonText: "Get Constructor of `123`",
    inputs: [],
  },
  // problem--> 87
  {
    id: "tvm-instanceof-primitive-wrappers",
    title: "`instanceof` with Primitive Wrappers",
    description:
      "Compare `instanceof` behavior for a primitive vs. its wrapper object.",
    category: "Type and Value Mastery",
    buttonText: "Test `instanceof String`",
    inputs: [],
  },
  // problem--> 88
  {
    id: "tvm-loose-equality-array-boolean",
    title: "Loose Equality: Array vs. Boolean",
    description:
      "Show the surprising result of `[] == false` and explain the coercion steps.",
    category: "Type and Value Mastery",
    buttonText: "Compare `[]` and `false`",
    inputs: [],
  },
  // problem--> 89
  {
    id: "tvm-relational-operator-coercion",
    title: "Relational Operator Coercion",
    description:
      "Demonstrate that relational operators like `<` convert `null` to `0` but not `undefined`.",
    category: "Type and Value Mastery",
    buttonText: "Compare `null` and `undefined` with `>`",
    inputs: [],
  },
  // problem--> 90
  {
    id: "tvm-object-keys-vs-for-in",
    title: "`Object.keys` vs. `for...in`",
    description:
      "Show how `Object.keys` only gets own properties, while `for...in` includes inherited enumerable properties.",
    category: "Type and Value Mastery",
    buttonText: "Compare Iteration",
    inputs: [],
  },
  // problem--> 91
  {
    id: "tvm-property-descriptor-defaults",
    title: "Property Descriptor Defaults",
    description:
      "Use `Object.defineProperty` to create a property and show that its attributes (`writable`, `enumerable`, `configurable`) default to `false`.",
    category: "Type and Value Mastery",
    buttonText: "Define Property",
    inputs: [],
  },
  // problem--> 92
  {
    id: "tvm-is-frozen",
    title: "`Object.isFrozen()`",
    description:
      "Use `Object.freeze()` on an object and verify its status with `Object.isFrozen()`.",
    category: "Type and Value Mastery",
    buttonText: "Freeze and Check",
    inputs: [],
  },
  // problem--> 93
  {
    id: "tvm-is-sealed",
    title: "`Object.isSealed()`",
    description:
      "Use `Object.seal()` on an object and verify its status with `Object.isSealed()`.",
    category: "Type and Value Mastery",
    buttonText: "Seal and Check",
    inputs: [],
  },
  // problem--> 94
  {
    id: "tvm-is-extensible",
    title: "`Object.isExtensible()`",
    description:
      "Use `Object.preventExtensions()` on an object and verify its status with `Object.isExtensible()`.",
    category: "Type and Value Mastery",
    buttonText: "Prevent Extensions and Check",
    inputs: [],
  },
  // problem--> 95
  {
    id: "tvm-globalthis",
    title: "`globalThis`",
    description:
      "Explain and demonstrate the `globalThis` property, which provides a standard way to access the global object across environments.",
    category: "Type and Value Mastery",
    buttonText: "Show `globalThis`",
    inputs: [],
  },
  // problem--> 96
  {
    id: "tvm-well-known-symbol-tostringtag",
    title: "`Symbol.toStringTag`",
    description:
      "Customize the string returned by `Object.prototype.toString.call()` using `Symbol.toStringTag`.",
    category: "Type and Value Mastery",
    buttonText: "Customize Tag",
    inputs: [],
  },
  // problem--> 97
  {
    id: "tvm-well-known-symbol-hasinstance",
    title: "`Symbol.hasInstance` (Conceptual)",
    description:
      "Explain how to customize the behavior of the `instanceof` operator using `Symbol.hasInstance`.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 98
  {
    id: "tvm-well-known-symbol-isconcatspreadable",
    title: "`Symbol.isConcatSpreadable`",
    description:
      "Control whether an object is flattened by `Array.prototype.concat()` using `Symbol.isConcatSpreadable`.",
    category: "Type and Value Mastery",
    buttonText: "Test Spreading",
    inputs: [],
  },
  // problem--> 99
  {
    id: "tvm-bigint-division",
    title: "`BigInt` Division",
    description:
      "Show that division with `BigInt` values truncates the result, as `BigInt` cannot have fractional parts.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `10n / 3n`",
    inputs: [],
  },
  // problem--> 100
  {
    id: "tvm-negative-zero",
    title: "Negative Zero (`-0`)",
    description:
      "Demonstrate the existence of `-0` and show how it compares to `0`.",
    category: "Type and Value Mastery",
    buttonText: "Test `-0`",
    inputs: [],
  },
  // problem--> 101
  {
    id: "tvm-abstract-equality-algorithm",
    title: "Abstract Equality Algorithm (Conceptual)",
    description:
      "Explain the high-level steps of the Abstract Equality Comparison Algorithm (for `==`), focusing on the number conversion rule.",
    category: "Type and Value Mastery",
    buttonText: "Explain `==`",
    inputs: [],
  },
  // problem--> 102
  {
    id: "tvm-tostring-vs-valueof",
    title: "`.toString()` vs `.valueOf()` (Conceptual)",
    description:
      "Explain the order in which `valueOf()` and `toString()` are called when an object is coerced to a primitive.",
    category: "Type and Value Mastery",
    buttonText: "Explain Coercion Order",
    inputs: [],
  },
  // problem--> 103
  {
    id: "tvm-coercion-edge-case-array-plus-array",
    title: "Coercion Edge Case: Array + Array",
    description: "Show the surprising result of adding two arrays together.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `[1] + [2]`",
    inputs: [],
  },
  // problem--> 104
  {
    id: "tvm-coercion-edge-case-object-plus-array",
    title: "Coercion Edge Case: Object + Array",
    description:
      "Show the even more surprising result of adding an object to an array.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `{} + []`",
    inputs: [],
  },
  // problem--> 105
  {
    id: "tvm-boolean-constructor-pitfall",
    title: "Boolean Constructor Pitfall",
    description:
      "Show that `new Boolean(false)` is an object and therefore truthy, a common source of bugs.",
    category: "Type and Value Mastery",
    buttonText: "Test `if (new Boolean(false))`",
    inputs: [],
  },
  // problem--> 106
  {
    id: "tvm-object-create-null-safety",
    title: "Safety of `Object.create(null)`",
    description:
      "Create a null-prototype object and show that it doesn't have methods like `toString`, preventing prototype pollution attacks.",
    category: "Type and Value Mastery",
    buttonText: "Test `toString`",
    inputs: [],
  },
  // problem--> 107
  {
    id: "tvm-number-max-safe-integer",
    title: "`Number.MAX_SAFE_INTEGER`",
    description:
      "Demonstrate the largest integer that can be safely represented with the `Number` type and show what happens when you exceed it.",
    category: "Type and Value Mastery",
    buttonText: "Show Safe Integer",
    inputs: [],
  },
  // problem--> 108
  {
    id: "tvm-number-epsilon",
    title: "`Number.EPSILON`",
    description:
      "Explain and use `Number.EPSILON` for safe floating-point equality checks.",
    category: "Type and Value Mastery",
    buttonText: "Compare `0.1 + 0.2`",
    inputs: [],
  },
  // problem--> 109
  {
    id: "tvm-well-known-symbol-species",
    title: "`Symbol.species` (Conceptual)",
    description:
      "Explain how a class can use `Symbol.species` to control what constructor is used for new instances created by methods like `.map()`.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 110
  {
    id: "tvm-well-known-symbol-match",
    title: "`Symbol.match` (Conceptual)",
    description:
      "Explain how an object can customize its behavior with `String.prototype.match()` by implementing `[Symbol.match]`.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 111
  {
    id: "tvm-well-known-symbol-replace",
    title: "`Symbol.replace` (Conceptual)",
    description:
      "Explain how an object can customize its behavior with `String.prototype.replace()` by implementing `[Symbol.replace]`.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 112
  {
    id: "tvm-well-known-symbol-search",
    title: "`Symbol.search` (Conceptual)",
    description:
      "Explain how an object can customize its behavior with `String.prototype.search()` by implementing `[Symbol.search]`.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 113
  {
    id: "tvm-well-known-symbol-split",
    title: "`Symbol.split` (Conceptual)",
    description:
      "Explain how an object can customize its behavior with `String.prototype.split()` by implementing `[Symbol.split]`.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 114
  {
    id: "tvm-well-known-symbol-unscopables",
    title: "`Symbol.unscopables` (Conceptual)",
    description:
      "Explain the historical `Symbol.unscopables` property, which controls which properties are exposed to the deprecated `with` statement.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 115
  {
    id: "tvm-proxy-get-trap-type",
    title: "Proxy `get` Trap for Type Safety",
    description:
      "Use a Proxy `get` trap to return a default value of the correct type for non-existent properties.",
    category: "Type and Value Mastery",
    buttonText: "Test Proxy",
    inputs: [],
  },
  // problem--> 116
  {
    id: "tvm-proxy-set-trap-type",
    title: "Proxy `set` Trap for Type Validation",
    description:
      "Use a Proxy `set` trap to enforce types on an object's properties.",
    category: "Type and Value Mastery",
    buttonText: "Test Proxy",
    inputs: [],
  },
  // problem--> 117
  {
    id: "tvm-reflect-getprototypeof",
    title: "`Reflect.getPrototypeOf()`",
    description:
      "Use `Reflect.getPrototypeOf()` as the modern, reflective equivalent of `Object.getPrototypeOf()`.",
    category: "Type and Value Mastery",
    buttonText: "Get Prototype",
    inputs: [],
  },
  // problem--> 118
  {
    id: "tvm-structuredclone-types",
    title: "`structuredClone()` and Complex Types",
    description:
      "Demonstrate that `structuredClone()` can correctly clone complex types like `Date`, `RegExp`, `Map`, and `Set`.",
    category: "Type and Value Mastery",
    buttonText: "Clone Complex Object",
    inputs: [],
  },
  // problem--> 119
  {
    id: "tvm-structuredclone-error",
    title: "`structuredClone()` Error Cases",
    description:
      "Show that `structuredClone()` cannot clone functions or DOM nodes and will throw an error.",
    category: "Type and Value Mastery",
    buttonText: "Test Error",
    inputs: [],
  },
  // problem--> 120
  {
    id: "tvm-weakmap-value-types",
    title: "`WeakMap` Value Types",
    description:
      "Demonstrate that while keys in a `WeakMap` must be objects, values can be of any type.",
    category: "Type and Value Mastery",
    buttonText: "Test WeakMap",
    inputs: [],
  },
  // problem--> 121
  {
    id: "tvm-weakset-value-types",
    title: "`WeakSet` Value Types",
    description:
      "Demonstrate that a `WeakSet` can only contain objects and will throw an error if you try to add a primitive.",
    category: "Type and Value Mastery",
    buttonText: "Test WeakSet",
    inputs: [],
  },
  // problem--> 122
  {
    id: "tvm-coercion-relational-null",
    title: "Coercion: `null >= 0`",
    description:
      "Show the results of `null >= 0` and `null > 0` to demonstrate how `null` is coerced to `0` in relational comparisons.",
    category: "Type and Value Mastery",
    buttonText: "Test Comparisons",
    inputs: [],
  },
  // problem--> 123
  {
    id: "tvm-coercion-relational-undefined",
    title: "Coercion: `undefined > 0`",
    description:
      "Show that `undefined` coerces to `NaN` in relational comparisons, making all comparisons with it false.",
    category: "Type and Value Mastery",
    buttonText: "Test Comparisons",
    inputs: [],
  },
  // problem--> 124
  {
    id: "tvm-boxing-unboxing-conceptual",
    title: "Boxing and Unboxing (Conceptual)",
    description:
      "Explain the concepts of boxing (wrapping a primitive) and unboxing (getting the primitive value from a wrapper).",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 125
  {
    id: "tvm-temporal-api-conceptual",
    title: "The Temporal API (Conceptual)",
    description:
      "Explain how the upcoming `Temporal` API aims to solve the shortcomings of `Date` by providing immutable, explicit objects for different date/time concepts.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 126
  {
    id: "tvm-primitive-property-assignment",
    title: "Assigning Property to Primitive",
    description:
      "Demonstrate that assigning a property to a primitive value fails silently in non-strict mode because the temporary wrapper object is discarded.",
    category: "Type and Value Mastery",
    buttonText: "Test Assignment",
    inputs: [],
  },
  // problem--> 127
  {
    id: "tvm-object-is-gotcha-objects",
    title: "`Object.is` with Objects",
    description:
      "Show that `Object.is` behaves the same as `===` for objects, comparing by reference.",
    category: "Type and Value Mastery",
    buttonText: "Compare `{}` and `{}`",
    inputs: [],
  },
  // problem--> 128
  {
    id: "tvm-abstract-relational-comparison",
    title: "Abstract Relational Comparison (Conceptual)",
    description:
      "Explain the high-level steps of the Abstract Relational Comparison Algorithm, which defines how `<`, `>`, etc., work.",
    category: "Type and Value Mastery",
    buttonText: "Explain `<`",
    inputs: [],
  },
  // problem--> 129
  {
    id: "tvm-prototype-pollution-conceptual",
    title: "Prototype Pollution (Conceptual)",
    description:
      "Explain the prototype pollution vulnerability, where unsafe object merges can modify `Object.prototype`, affecting all objects.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 130
  {
    id: "tvm-private-brand-check",
    title: "Private Field Brand Check",
    description:
      "Use the `in` operator with a private field to reliably check if an object is an instance of a class.",
    category: "Type and Value Mastery",
    buttonText: "Test Brand Check",
    inputs: [],
  },
  // problem--> 131
  {
    id: "tvm-instanceof-and-primitives",
    title: "`instanceof` with Primitives",
    description:
      "Demonstrate that `instanceof` returns `false` for primitive values.",
    category: "Type and Value Mastery",
    buttonText: "Test Primitives",
    inputs: [],
  },
  // problem--> 132
  {
    id: "tvm-void-operator",
    title: "The `void` Operator",
    description:
      "Use the `void` operator to evaluate an expression and return `undefined`.",
    category: "Type and Value Mastery",
    buttonText: "Test `void 0`",
    inputs: [],
  },
  // problem--> 133
  {
    id: "tvm-comma-operator-return",
    title: "The Comma Operator",
    description:
      "Demonstrate that the comma operator evaluates all operands but returns the value of the last one.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `(1, 2, 3)`",
    inputs: [],
  },
  // problem--> 134
  {
    id: "tvm-instanceof-and-prototypes",
    title: "`instanceof` and the Prototype Chain",
    description:
      "Explain that `instanceof` works by checking if a constructor's `.prototype` property appears anywhere in an object's prototype chain.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 135
  {
    id: "tvm-nullish-coalescing-operator",
    title: "Nullish Coalescing Operator (`??`)",
    description:
      "Use `??` to provide a default for `null` or `undefined`, but not for other falsy values like `0` or `''`.",
    category: "Type and Value Mastery",
    buttonText: "Test `0 ?? 'default'`",
    inputs: [],
  },
  // problem--> 136
  {
    id: "tvm-optional-chaining-operator",
    title: "Optional Chaining Operator (`?.`)",
    description:
      "Use `?.` to safely access a property of a potentially `null` or `undefined` object.",
    category: "Type and Value Mastery",
    buttonText: "Test `null?.prop`",
    inputs: [],
  },
  // problem--> 137
  {
    id: "tvm-logical-nullish-assignment",
    title: "Logical Nullish Assignment (`??=`)",
    description:
      "Use `??=` to assign a value to a variable only if it is `null` or `undefined`.",
    category: "Type and Value Mastery",
    buttonText: "Test `null ??= 10`",
    inputs: [],
  },
  // problem--> 138
  {
    id: "tvm-logical-and-assignment",
    title: "Logical AND Assignment (`&&=`)",
    description:
      "Use `&&=` to assign a value only if the variable is currently truthy.",
    category: "Type and Value Mastery",
    buttonText: "Test `x &&= 10`",
    inputs: [],
  },
  // problem--> 139
  {
    id: "tvm-logical-or-assignment",
    title: "Logical OR Assignment (`||=`)",
    description:
      "Use `||=` to assign a value only if the variable is currently falsy.",
    category: "Type and Value Mastery",
    buttonText: "Test `x ||= 10`",
    inputs: [],
  },
  // problem--> 140
  {
    id: "tvm-numeric-separators",
    title: "Numeric Separators (`_`)",
    description:
      "Use underscores as numeric separators to improve the readability of large number literals.",
    category: "Type and Value Mastery",
    buttonText: "Test `1_000_000`",
    inputs: [],
  },
  // problem--> 141
  {
    id: "tvm-coercion-corner-case-1",
    title: "Coercion Corner Case: `[] + {}`",
    description:
      "Show the result of `[] + {}` and explain the coercion to string.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate",
    inputs: [],
  },
  // problem--> 142
  {
    id: "tvm-coercion-corner-case-2",
    title: "Coercion Corner Case: `{} + []`",
    description:
      "Show the result of `{} + []` in a console and explain why it's different from the previous problem.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate",
    inputs: [],
  },
  // problem--> 143
  {
    id: "tvm-coercion-corner-case-3",
    title: "Coercion Corner Case: `true + true`",
    description:
      "Demonstrate that booleans are coerced to numbers in arithmetic operations.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate",
    inputs: [],
  },
  // problem--> 144
  {
    id: "tvm-coercion-corner-case-4",
    title: "Coercion Corner Case: `[1,2] + [3,4]`",
    description:
      "Show the result of adding two arrays, demonstrating that both are converted to strings first.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate",
    inputs: [],
  },
  // problem--> 145
  {
    id: "tvm-coercion-corner-case-5",
    title: "Coercion Corner Case: WAT",
    description:
      "Break down the evaluation of the infamous WAT talk expression `!+[]+[]+![]`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate WAT",
    inputs: [],
  },
  // problem--> 146
  {
    id: "tvm-object-is-vs-equals-summary",
    title: "Summary: `==` vs `===` vs `Object.is`",
    description:
      "Provide a summary comparing the three equality operators and their main use cases.",
    category: "Type and Value Mastery",
    buttonText: "Summarize",
    inputs: [],
  },
  // problem--> 147
  {
    id: "tvm-check-for-object-not-null",
    title: "Check for Object (but not Array or null)",
    description:
      "Write a reliable function to check if a value is a plain object.",
    category: "Type and Value Mastery",
    buttonText: "Test `isObject`",
    inputs: [],
  },
  // problem--> 148
  {
    id: "tvm-getownpropertydescriptors",
    title: "`Object.getOwnPropertyDescriptors()`",
    description:
      "Use `Object.getOwnPropertyDescriptors()` to get an object containing all own property descriptors of an object.",
    category: "Type and Value Mastery",
    buttonText: "Get Descriptors",
    inputs: [],
  },
  // problem--> 149
  {
    id: "tvm-is-arraylike",
    title: "Check if Array-Like",
    description:
      "Write a function to check if a value is 'array-like' (has a non-negative integer `length` property).",
    category: "Type and Value Mastery",
    buttonText: "Test `isArrayLike`",
    inputs: [],
  },
  // problem--> 150
  {
    id: "tvm-string-is-well-formed",
    title: "String Well-Formed Check",
    description:
      "Use the modern `.isWellFormed()` string method to check for lone surrogates.",
    category: "Type and Value Mastery",
    buttonText: "Check String",
    inputs: [],
  },
  // problem--> 151
  {
    id: "tvm-finalization-registry",
    title: "`FinalizationRegistry` (Conceptual)",
    description:
      "Explain the `FinalizationRegistry` API for running cleanup callbacks after an object is garbage collected.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 152
  {
    id: "tvm-error-cause",
    title: "Error `cause` Property",
    description:
      "Demonstrate creating an `Error` with a `cause` property to chain errors.",
    category: "Type and Value Mastery",
    buttonText: "Test Error Cause",
    inputs: [],
  },
  // problem--> 153
  {
    id: "tvm-object-hasown",
    title: "`Object.hasOwn()`",
    description:
      "Use the static `Object.hasOwn()` method as a safer alternative to `.hasOwnProperty()`.",
    category: "Type and Value Mastery",
    buttonText: "Test `Object.hasOwn`",
    inputs: [],
  },
  // problem--> 154
  {
    id: "tvm-coercion-with-custom-valueof",
    title: "Coercion with Custom `.valueOf()`",
    description:
      "Create an object with a custom `.valueOf()` method to control its numeric coercion.",
    category: "Type and Value Mastery",
    buttonText: "Test Custom Coercion",
    inputs: [],
  },
  // problem--> 155
  {
    id: "tvm-coercion-with-custom-tostring",
    title: "Coercion with Custom `.toString()`",
    description:
      "Create an object with a custom `.toString()` method to control its string coercion.",
    category: "Type and Value Mastery",
    buttonText: "Test Custom Coercion",
    inputs: [],
  },
  // problem--> 156
  {
    id: "tvm-array-plus-number",
    title: "Coercion: Array + Number",
    description:
      "Show the result of `[1, 2] + 3` and explain the string conversion.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `[1, 2] + 3`",
    inputs: [],
  },
  // problem--> 157
  {
    id: "tvm-empty-string-to-number",
    title: "Coercion: Empty String to Number",
    description: "Show that an empty string coerces to `0`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `Number('')`",
    inputs: [],
  },
  // problem--> 158
  {
    id: "tvm-whitespace-string-to-number",
    title: "Coercion: Whitespace String to Number",
    description:
      "Show that a string containing only whitespace coerces to `0`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `Number('   ')`",
    inputs: [],
  },
  // problem--> 159
  {
    id: "tvm-true-to-number",
    title: "Coercion: `true` to Number",
    description: "Show that `true` coerces to `1`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `Number(true)`",
    inputs: [],
  },
  // problem--> 160
  {
    id: "tvm-false-to-number",
    title: "Coercion: `false` to Number",
    description: "Show that `false` coerces to `0`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `Number(false)`",
    inputs: [],
  },
  // problem--> 161
  {
    id: "tvm-undefined-to-number",
    title: "Coercion: `undefined` to Number",
    description: "Show that `undefined` coerces to `NaN`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `Number(undefined)`",
    inputs: [],
  },
  // problem--> 162
  {
    id: "tvm-null-to-number",
    title: "Coercion: `null` to Number",
    description: "Show that `null` coerces to `0`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `Number(null)`",
    inputs: [],
  },
  // problem--> 163
  {
    id: "tvm-object-to-number",
    title: "Coercion: Object to Number",
    description: "Show that a plain object coerces to `NaN`.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `Number({})`",
    inputs: [],
  },
  // problem--> 164
  {
    id: "tvm-array-to-number",
    title: "Coercion: Array to Number",
    description:
      "Show how different arrays are coerced to numbers (e.g., `[]`, `[5]`, `[1,2]`).",
    category: "Type and Value Mastery",
    buttonText: "Test Array Coercion",
    inputs: [],
  },
  // problem--> 165
  {
    id: "tvm-isinteger",
    title: "`Number.isInteger()`",
    description:
      "Use `Number.isInteger()` to differentiate between integers and floating-point numbers.",
    category: "Type and Value Mastery",
    buttonText: "Test `isInteger`",
    inputs: [],
  },
  // problem--> 166
  {
    id: "tvm-issafeinteger",
    title: "`Number.isSafeInteger()`",
    description:
      "Use `Number.isSafeInteger()` to check if a number is within the safe representable range.",
    category: "Type and Value Mastery",
    buttonText: "Test Safe Integer",
    inputs: [],
  },
  // problem--> 167
  {
    id: "tvm-equality-empty-arrays",
    title: "Equality of Empty Arrays",
    description: "Explain why `[] == []` is false but `[] == ![]` is true.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 168
  {
    id: "tvm-equality-string-vs-wrapper",
    title: "Equality: String Primitive vs Wrapper",
    description:
      "Compare a string primitive and a String object using `==` and `===`.",
    category: "Type and Value Mastery",
    buttonText: "Compare `'a'` and `new String('a')`",
    inputs: [],
  },
  // problem--> 169
  {
    id: "tvm-coercion-to-primitive-hint-number",
    title: "`ToPrimitive` Hint 'number'",
    description:
      "Create an object that behaves differently based on the `ToPrimitive` hint.",
    category: "Type and Value Mastery",
    buttonText: "Test Hint 'number'",
    inputs: [],
  },
  // problem--> 170
  {
    id: "tvm-coercion-to-primitive-hint-string",
    title: "`ToPrimitive` Hint 'string'",
    description:
      "Create an object that behaves differently based on the `ToPrimitive` hint.",
    category: "Type and Value Mastery",
    buttonText: "Test Hint 'string'",
    inputs: [],
  },
  // problem--> 171
  {
    id: "tvm-coercion-in-relational-operators",
    title: "Coercion in Relational Operators",
    description:
      "Show that `[2] > 1` is true because the array is coerced to a primitive.",
    category: "Type and Value Mastery",
    buttonText: "Evaluate `[2] > 1`",
    inputs: [],
  },
  // problem--> 172
  {
    id: "tvm-proxy-has-trap",
    title: "Proxy `has` Trap",
    description:
      "Use a Proxy `has` trap to customize the behavior of the `in` operator.",
    category: "Type and Value Mastery",
    buttonText: "Test `has` Trap",
    inputs: [],
  },
  // problem--> 173
  {
    id: "tvm-proxy-delete-trap",
    title: "Proxy `deleteProperty` Trap",
    description:
      "Use a Proxy `deleteProperty` trap to prevent a property from being deleted.",
    category: "Type and Value Mastery",
    buttonText: "Test `delete` Trap",
    inputs: [],
  },
  // problem--> 174
  {
    id: "tvm-reflect-has",
    title: "`Reflect.has()`",
    description:
      "Use `Reflect.has()` as the functional equivalent of the `in` operator.",
    category: "Type and Value Mastery",
    buttonText: "Test `Reflect.has`",
    inputs: [],
  },
  // problem--> 175
  {
    id: "tvm-reflect-delete",
    title: "`Reflect.deleteProperty()`",
    description:
      "Use `Reflect.deleteProperty()` as the functional equivalent of the `delete` operator.",
    category: "Type and Value Mastery",
    buttonText: "Test `Reflect.deleteProperty`",
    inputs: [],
  },
  // problem--> 176
  {
    id: "tvm-property-enumerable",
    title: "Enumerable Property",
    description:
      "Define a property with `enumerable: false` and show it's skipped by `Object.keys()`.",
    category: "Type and Value Mastery",
    buttonText: "Test Enumerable",
    inputs: [],
  },
  // problem--> 177
  {
    id: "tvm-property-writable",
    title: "Writable Property",
    description:
      "Define a property with `writable: false` and show that attempts to change it fail.",
    category: "Type and Value Mastery",
    buttonText: "Test Writable",
    inputs: [],
  },
  // problem--> 178
  {
    id: "tvm-property-configurable",
    title: "Configurable Property",
    description:
      "Define a property with `configurable: false` and show that it cannot be deleted.",
    category: "Type and Value Mastery",
    buttonText: "Test Configurable",
    inputs: [],
  },
  // problem--> 179
  {
    id: "tvm-accessor-descriptor",
    title: "Accessor Descriptor (`get`/`set`)",
    description:
      "Use `Object.defineProperty` to create a getter/setter pair for a property.",
    category: "Type and Value Mastery",
    buttonText: "Define Getter/Setter",
    inputs: [],
  },
  // problem--> 180
  {
    id: "tvm-data-descriptor",
    title: "Data Descriptor (`value`/`writable`)",
    description:
      "Use `Object.defineProperty` to create a standard data property.",
    category: "Type and Value Mastery",
    buttonText: "Define Data Property",
    inputs: [],
  },
  // problem--> 181
  {
    id: "tvm-getownpropertynames",
    title: "`Object.getOwnPropertyNames()`",
    description:
      "Use `Object.getOwnPropertyNames()` to get all own properties, including non-enumerable ones.",
    category: "Type and Value Mastery",
    buttonText: "Get Names",
    inputs: [],
  },
  // problem--> 182
  {
    id: "tvm-getownpropertysymbols",
    title: "`Object.getOwnPropertySymbols()`",
    description:
      "Use `Object.getOwnPropertySymbols()` to get all own symbol-keyed properties.",
    category: "Type and Value Mastery",
    buttonText: "Get Symbols",
    inputs: [],
  },
  // problem--> 183
  {
    id: "tvm-reflect-ownkeys",
    title: "`Reflect.ownKeys()`",
    description:
      "Use `Reflect.ownKeys()` to get all own keys, both string and symbol.",
    category: "Type and Value Mastery",
    buttonText: "Get All Keys",
    inputs: [],
  },
  // problem--> 184
  {
    id: "tvm-isprototypeof",
    title: "`.isPrototypeOf()`",
    description:
      "Use `.isPrototypeOf()` to check the prototype chain relationship between two objects.",
    category: "Type and Value Mastery",
    buttonText: "Test Prototype",
    inputs: [],
  },
  // problem--> 185
  {
    id: "tvm-object-fromEntries",
    title: "`Object.fromEntries()`",
    description:
      "Use `Object.fromEntries()` to create an object from an array of key-value pairs.",
    category: "Type and Value Mastery",
    buttonText: "Create from Entries",
    inputs: [],
  },
  // problem--> 186
  {
    id: "tvm-coercion-with-equality-null",
    title: "Coercion: `null == 0`",
    description:
      "Demonstrate that `null == 0` is false, a specific rule in the abstract equality algorithm.",
    category: "Type and Value Mastery",
    buttonText: "Test `null == 0`",
    inputs: [],
  },
  // problem--> 187
  {
    id: "tvm-coercion-with-equality-empty-string",
    title: "Coercion: `'' == 0`",
    description:
      "Demonstrate that `'' == 0` is true, as the empty string is coerced to a number.",
    category: "Type and Value Mastery",
    buttonText: "Test `'' == 0`",
    inputs: [],
  },
  // problem--> 188
  {
    id: "tvm-coercion-with-equality-false",
    title: "Coercion: `'' == false`",
    description:
      "Demonstrate that `'' == false` is true, as both are coerced to 0.",
    category: "Type and Value Mastery",
    buttonText: "Test `'' == false`",
    inputs: [],
  },
  // problem--> 189
  {
    id: "tvm-json-reviver",
    title: "`JSON.parse` with Reviver",
    description:
      "Use a reviver function with `JSON.parse` to transform values during parsing, like converting date strings to Date objects.",
    category: "Type and Value Mastery",
    buttonText: "Parse with Reviver",
    inputs: [],
  },
  // problem--> 190
  {
    id: "tvm-json-replacer",
    title: "`JSON.stringify` with Replacer",
    description:
      "Use a replacer function with `JSON.stringify` to filter out or transform values during serialization.",
    category: "Type and Value Mastery",
    buttonText: "Stringify with Replacer",
    inputs: [],
  },
  // problem--> 191
  {
    id: "tvm-error-cause-property",
    title: "Error `cause` Property",
    description:
      "Create a new `Error` with a `cause` property to chain errors for better debugging.",
    category: "Type and Value Mastery",
    buttonText: "Test Error Cause",
    inputs: [],
  },
  // problem--> 192
  {
    id: "tvm-finalization-registry-conceptual",
    title: "`FinalizationRegistry` (Conceptual)",
    description:
      "Explain the `FinalizationRegistry` API for running cleanup callbacks after an object is garbage collected.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 193
  {
    id: "tvm-weakref-conceptual",
    title: "`WeakRef` (Conceptual)",
    description:
      "Explain the `WeakRef` object, which holds a weak reference to another object without preventing it from being garbage collected.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 194
  {
    id: "tvm-at-method-array",
    title: "`.at()` Method for Arrays",
    description:
      "Use the `.at()` method to access array elements from the end using negative indices.",
    category: "Type and Value Mastery",
    buttonText: "Test `arr.at(-1)`",
    inputs: [],
  },
  // problem--> 195
  {
    id: "tvm-at-method-string",
    title: "`.at()` Method for Strings",
    description:
      "Use the `.at()` method to access string characters from the end using negative indices.",
    category: "Type and Value Mastery",
    buttonText: "Test `str.at(-1)`",
    inputs: [],
  },
  // problem--> 196
  {
    id: "tvm-string-is-well-formed",
    title: "String Well-Formed Check",
    description:
      "Use the modern `.isWellFormed()` string method to check for lone surrogates, which can cause issues with UTF-8 encoding.",
    category: "Type and Value Mastery",
    buttonText: "Check String",
    inputs: [],
  },
  // problem--> 197
  {
    id: "tvm-string-to-well-formed",
    title: "String `.toWellFormed()`",
    description:
      "Use the modern `.toWellFormed()` string method to replace lone surrogates with the Unicode replacement character (U+FFFD).",
    category: "Type and Value Mastery",
    buttonText: "Sanitize String",
    inputs: [],
  },
  // problem--> 198
  {
    id: "tvm-shadowrealm-api-conceptual",
    title: "ShadowRealm API (Conceptual)",
    description:
      "Explain the proposed `ShadowRealm` API for creating a new global environment to securely execute third-party code.",
    category: "Type and Value Mastery",
    buttonText: "Explain",
    inputs: [],
  },
  // problem--> 199
  {
    id: "tvm-memory-model-conceptual",
    title: "JavaScript Memory Model (Conceptual)",
    description:
      "Explain the high-level concepts of the Stack (for primitives and function calls) and the Heap (for objects and complex data).",
    category: "Type and Value Mastery",
    buttonText: "Explain Memory",
    inputs: [],
  },
  // problem--> 200
  {
    id: "tvm-final-summary",
    title: "Final Summary: Type & Value",
    description:
      "Provide a conceptual summary of the key takeaways: strict equality, explicit coercion, and understanding the difference between primitive and reference types.",
    category: "Type and Value Mastery",
    buttonText: "Summarize",
    inputs: [],
  },
];
