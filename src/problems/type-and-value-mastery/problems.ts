import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "tvm-typeof-string",
    title: "`typeof` a String",
    description:
      "Use the `typeof` operator to determine the data type of a string literal like 'hello'.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Beginner",
  },
  // problem--> 02
  {
    id: "tvm-typeof-number",
    title: "`typeof` a Number",
    description:
      "Use the `typeof` operator to determine the data type of a number literal like 42.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Beginner",
  },
  // problem--> 03
  {
    id: "tvm-typeof-boolean",
    title: "`typeof` a Boolean",
    description:
      "Use the `typeof` operator to determine the data type of the boolean literal `true`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Beginner",
  },
  // problem--> 04
  {
    id: "tvm-typeof-undefined",
    title: "`typeof` an Uninitialized Variable",
    description:
      "Declare a variable without initializing it and use `typeof` to check its type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Beginner",
  },
  // problem--> 05
  {
    id: "tvm-typeof-null-bug",
    title: "The `typeof null` Bug",
    description:
      "Demonstrate the long-standing bug in JavaScript where `typeof null` returns 'object'.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Beginner",
  },
  // problem--> 06
  {
    id: "tvm-typeof-object",
    title: "`typeof` an Object",
    description:
      "Use the `typeof` operator to check the type of an object literal `{}`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Beginner",
  },
  // problem--> 07
  {
    id: "tvm-typeof-array",
    title: "`typeof` an Array",
    description:
      "Demonstrate that `typeof` an array `[]` returns 'object', and show the correct way to check for an array.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Beginner",
  },
  // problem--> 08
  {
    id: "tvm-typeof-function",
    title: "`typeof` a Function",
    description:
      "Show that `typeof` has a special return value of 'function' for functions.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Beginner",
  },
  // problem--> 09
  {
    id: "tvm-typeof-symbol",
    title: "`typeof` a Symbol",
    description:
      "Create a `Symbol` and use `typeof` to check its primitive type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Intermediate",
  },
  // problem--> 10
  {
    id: "tvm-typeof-bigint",
    title: "`typeof` a BigInt",
    description:
      "Create a `BigInt` and use `typeof` to check its primitive type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Intermediate",
  },
  // problem--> 11
  {
    id: "tvm-primitive-vs-object-string",
    title: "Primitive String vs. String Object",
    description:
      "Compare the `typeof` a string literal with a string object created via `new String()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare Types",
    difficulty: "Intermediate",
  },
  // problem--> 12
  {
    id: "tvm-value-of-null",
    title: "Value of `null`",
    description: "Show the value of the `null` primitive.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Value",
    difficulty: "Beginner",
  },
  // problem--> 13
  {
    id: "tvm-value-of-undefined",
    title: "Value of `undefined`",
    description: "Show the value of the `undefined` primitive.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Value",
    difficulty: "Beginner",
  },
  // problem--> 14
  {
    id: "tvm-dynamic-typing",
    title: "Dynamic Typing",
    description:
      "Demonstrate dynamic typing by assigning a number to a variable, then reassigning it to a string and checking its type each time.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Beginner",
  },
  // problem--> 15
  {
    id: "tvm-pass-by-value",
    title: "Pass by Value (Primitives)",
    description:
      "Show that when a primitive type is passed to a function, it is passed by value (a copy is made).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Pass by Value",
    difficulty: "Intermediate",
  },
  // problem--> 16
  {
    id: "tvm-pass-by-reference",
    title: "Pass by Reference (Objects)",
    description:
      "Show that when an object is passed to a function, it is passed by reference (sharing). Modifying the object inside the function affects the original.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Pass by Reference",
    difficulty: "Intermediate",
  },
  // problem--> 17
  {
    id: "tvm-primitive-immutability",
    title: "Immutability of Primitives",
    description:
      "Demonstrate that primitive values are immutable by showing that string methods do not change the original string.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Immutability",
    difficulty: "Intermediate",
  },
  // problem--> 18
  {
    id: "tvm-object-mutability",
    title: "Mutability of Objects",
    description:
      "Demonstrate that objects are mutable by adding a new property to an existing object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Mutability",
    difficulty: "Beginner",
  },
  // problem--> 19
  {
    id: "tvm-array-mutability",
    title: "Mutability of Arrays",
    description:
      "Demonstrate that arrays are mutable by using the `.push()` method to modify an array in place.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Mutability",
    difficulty: "Beginner",
  },
  // problem--> 20
  {
    id: "tvm-typeof-undeclared",
    title: "`typeof` an Undeclared Variable",
    description:
      "Show the unique behavior of `typeof` where it returns 'undefined' for an undeclared variable instead of throwing a ReferenceError.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 21
  {
    id: "tvm-strict-equality",
    title: "Strict Equality (===)",
    description:
      "Compare a number and a string representation of the same number using strict equality to show it checks type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare `5` and `'5'`",
    difficulty: "Beginner",
  },
  // problem--> 22
  {
    id: "tvm-loose-equality",
    title: "Loose Equality (==)",
    description:
      "Compare a number and a string representation of the same number using loose equality to show type coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare `5` and `'5'`",
    difficulty: "Beginner",
  },
  // problem--> 23
  {
    id: "tvm-loose-equality-null-undefined",
    title: "Loose Equality of `null` and `undefined`",
    description: "Show the special case where `null == undefined` is true.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
    difficulty: "Beginner",
  },
  // problem--> 24
  {
    id: "tvm-strict-equality-null-undefined",
    title: "Strict Equality of `null` and `undefined`",
    description:
      "Show that `null === undefined` is false because they are different types.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
    difficulty: "Beginner",
  },
  // problem--> 25
  {
    id: "tvm-loose-equality-boolean-number",
    title: "Loose Equality of Boolean and Number",
    description:
      "Demonstrate the coercion of `true` to 1 and `false` to 0 in loose equality checks.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare `true` and `1`",
    difficulty: "Intermediate",
  },
  // problem--> 26
  {
    id: "tvm-loose-equality-object-primitive",
    title: "Loose Equality of Object and Primitive",
    description:
      "Show how an object is converted to a primitive (via `toString` or `valueOf`) when compared to a primitive with loose equality.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare `[5]` and `5`",
    difficulty: "Advanced",
  },
  // problem--> 27
  {
    id: "tvm-plus-operator-coercion-string",
    title: "Coercion with `+` Operator (String)",
    description:
      "Demonstrate that the `+` operator performs string concatenation if either operand is a string.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: `Evaluate \`'5' + 3\``,
    difficulty: "Beginner",
  },
  // problem--> 28
  {
    id: "tvm-other-arithmetic-coercion",
    title: "Coercion with other Arithmetic Operators",
    description:
      "Show that other arithmetic operators (`-`, `*`, `/`) will attempt to convert operands to numbers.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: `Evaluate \`'5' - 3\``,
    difficulty: "Beginner",
  },
  // problem--> 29
  {
    id: "tvm-explicit-conversion-string",
    title: "Explicit Conversion to String",
    description:
      "Use the `String()` function to explicitly convert a number to a string.",
    category: "Type and Value Mastery",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 123 }],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 30
  {
    id: "tvm-explicit-conversion-number",
    title: "Explicit Conversion to Number",
    description:
      "Use the `Number()` function to explicitly convert a string to a number.",
    category: "Type and Value Mastery",
    inputs: [{ id: "str", label: "String", type: "text", defaultValue: "456" }],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 31
  {
    id: "tvm-explicit-conversion-boolean",
    title: "Explicit Conversion to Boolean",
    description:
      "Use the `Boolean()` function to explicitly convert a value to a boolean and see its truthiness.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "val", label: "Value", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 32
  {
    id: "tvm-unary-plus-conversion",
    title: "Conversion with Unary Plus",
    description:
      "Use the unary plus operator (`+`) as a shorthand to convert a string to a number.",
    category: "Type and Value Mastery",
    inputs: [{ id: "str", label: "String", type: "text", defaultValue: "789" }],
    buttonText: "Convert",
    difficulty: "Intermediate",
  },
  // problem--> 33
  {
    id: "tvm-double-not-conversion",
    title: "Conversion with Double NOT (`!!`)",
    description:
      "Use the double NOT operator as a shorthand to convert any value to its boolean equivalent.",
    category: "Type and Value Mastery",
    inputs: [{ id: "val", label: "Value", type: "text", defaultValue: "0" }],
    buttonText: "Convert",
    difficulty: "Intermediate",
  },
  // problem--> 34
  {
    id: "tvm-truthiness-check",
    title: "Truthiness in an `if` Statement",
    description:
      "Show how a non-empty string is treated as `true` in an `if` statement.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Truthiness",
    difficulty: "Beginner",
  },
  // problem--> 35
  {
    id: "tvm-falsiness-check",
    title: "Falsiness in an `if` Statement",
    description:
      "Show how the number `0` is treated as `false` in an `if` statement.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Falsiness",
    difficulty: "Beginner",
  },
  // problem--> 36
  {
    id: "tvm-list-falsy-values",
    title: "The Six Falsy Values",
    description:
      "Demonstrate all six falsy values in JavaScript: `false`, `0`, `''`, `null`, `undefined`, and `NaN`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "List Falsy Values",
    difficulty: "Beginner",
  },
  // problem--> 37
  {
    id: "tvm-truthiness-of-empty-object",
    title: "Truthiness of an Empty Object",
    description: "Show that an empty object `{}` is a truthy value.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 38
  {
    id: "tvm-truthiness-of-empty-array",
    title: "Truthiness of an Empty Array",
    description: "Show that an empty array `[]` is a truthy value.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 39
  {
    id: "tvm-parseint-basic",
    title: "`parseInt` with Radix",
    description:
      "Use `parseInt()` with a radix of 10 to convert a string to an integer, correctly handling trailing non-numeric characters.",
    category: "Type and Value Mastery",
    inputs: [
      {
        id: "str",
        label: "String",
        type: "text",
        defaultValue: "101 dalmatians",
      },
    ],
    buttonText: "Parse",
    difficulty: "Intermediate",
  },
  // problem--> 40
  {
    id: "tvm-parsefloat-basic",
    title: "`parseFloat`",
    description:
      "Use `parseFloat()` to convert a string to a floating-point number.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "3.14 is pi" },
    ],
    buttonText: "Parse",
    difficulty: "Intermediate",
  },
  // problem--> 41
  {
    id: "tvm-number-tostring",
    title: "`.toString()` Method",
    description:
      "Use the `.toString()` method to convert a number variable to a string.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 42
  {
    id: "tvm-number-tostring-radix",
    title: "`.toString()` with Radix",
    description:
      "Use the `.toString()` method with a radix argument to convert a number to a different base (e.g., binary or hexadecimal).",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 255 },
      { id: "base", label: "Base", type: "number", defaultValue: 16 },
    ],
    buttonText: "Convert",
    difficulty: "Intermediate",
  },
  // problem--> 43
  {
    id: "tvm-if-assignment-pitfall",
    title: "Assignment in `if` Condition Pitfall",
    description:
      "Show the common bug where a single `=` is used instead of `===`, causing an assignment and unexpected truthiness.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Pitfall",
    difficulty: "Beginner",
  },
  // problem--> 44
  {
    id: "tvm-abstract-relational-comparison",
    title: "Abstract Relational Comparison",
    description:
      "Demonstrate how relational operators (`>`) perform numeric coercion on strings.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: `Evaluate \`'10' > 5\``,
    difficulty: "Intermediate",
  },
  // problem--> 45
  {
    id: "tvm-abstract-relational-string-comparison",
    title: "Relational String Comparison",
    description:
      "Show that if both operands are strings, the relational comparison is done lexicographically.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: `Evaluate \`'2' > '10'\``,
    difficulty: "Intermediate",
  },
  // problem--> 46
  {
    id: "tvm-tostring-vs-valueof-coercion",
    title: "Object to Primitive Conversion (Conceptual)",
    description:
      "Explain the `ToPrimitive` abstract operation, including the roles of `toString()` and `valueOf()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 47
  {
    id: "tvm-valueof-example",
    title: "Custom `valueOf`",
    description:
      "Create an object with a custom `valueOf` method to control how it is coerced to a number.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Coercion",
    difficulty: "Advanced",
  },
  // problem--> 48
  {
    id: "tvm-tostring-example",
    title: "Custom `toString`",
    description:
      "Create an object with a custom `toString` method to control how it is coerced to a string.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Coercion",
    difficulty: "Advanced",
  },
  // problem--> 49
  {
    id: "tvm-symbol-toprimitive",
    title: "`Symbol.toPrimitive`",
    description:
      "Use the `Symbol.toPrimitive` well-known symbol to create an object with custom coercion logic.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Advanced",
  },
  // problem--> 50
  {
    id: "tvm-plus-date-coercion",
    title: "Coercing a `Date` Object",
    description:
      "Show that using the unary plus operator on a `Date` object coerces it to its timestamp.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Coerce Date",
    difficulty: "Intermediate",
  },
  // problem--> 51
  {
    id: "tvm-coercion-with-join",
    title: "Coercion with Array `.join`",
    description:
      "Demonstrate how the `.join()` method on an array coerces its elements to strings.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Join",
    difficulty: "Intermediate",
  },
  // problem--> 52
  {
    id: "tvm-alert-coercion",
    title: "`alert` String Coercion (Conceptual)",
    description:
      "Explain how functions like `alert()` implicitly call `toString()` on their arguments.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 53
  {
    id: "tvm-object-property-key-coercion",
    title: "Object Property Key Coercion",
    description:
      "Show that object property keys are always coerced to strings (or Symbols).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Key Coercion",
    difficulty: "Intermediate",
  },
  // problem--> 54
  {
    id: "tvm-loose-equality-tricky-1",
    title: "Tricky Loose Equality 1: `[] == ![]`",
    description:
      "Explain the step-by-step coercion that leads to the surprising result `[] == ![]` being `true`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
    difficulty: "Advanced",
  },
  // problem--> 55
  {
    id: "tvm-loose-equality-tricky-2",
    title: "Tricky Loose Equality 2: `'' == [null]`",
    description:
      "Explain the step-by-step coercion that leads to `'' == [null]` being `true`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate",
    difficulty: "Advanced",
  },
  // problem--> 56
  {
    id: "tvm-instanceof-and-primitives",
    title: "`instanceof` with Primitives",
    description:
      "Demonstrate that `instanceof` always returns `false` for primitive values.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 57
  {
    id: "tvm-isarray-check",
    title: "`Array.isArray()` Check",
    description:
      "Show that `Array.isArray()` is the correct and reliable way to check if a value is an array.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Beginner",
  },
  // problem--> 58
  {
    id: "tvm-number-isnan-check",
    title: "`Number.isNaN()` Check",
    description:
      "Compare the strict `Number.isNaN()` with the global `isNaN()` which performs type coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
    difficulty: "Intermediate",
  },
  // problem--> 59
  {
    id: "tvm-object-is-check",
    title: "`Object.is()` Check",
    description:
      "Use `Object.is()` to show its specific behavior with `NaN` and `-0` compared to `===`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
    difficulty: "Intermediate",
  },
  // problem--> 60
  {
    id: "tvm-bigint-literal",
    title: "`BigInt` Literal",
    description: "Create a `BigInt` using the `n` suffix and verify its type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Create",
    difficulty: "Intermediate",
  },
  // problem--> 61
  {
    id: "tvm-bigint-constructor",
    title: "`BigInt` Constructor",
    description:
      "Create a `BigInt` from a string using the `BigInt()` constructor function.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Create",
    difficulty: "Intermediate",
  },
  // problem--> 62
  {
    id: "tvm-bigint-mixed-type-error",
    title: "`BigInt` and `Number` TypeError",
    description:
      "Demonstrate the `TypeError` that occurs when you try to mix `BigInt` and `Number` types in arithmetic operations.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 63
  {
    id: "tvm-bigint-comparisons",
    title: "`BigInt` Comparisons",
    description:
      "Show that `BigInt` and `Number` values can be compared using relational and equality operators.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
    difficulty: "Intermediate",
  },
  // problem--> 64
  {
    id: "tvm-symbol-uniqueness",
    title: "`Symbol` Uniqueness",
    description:
      "Create two symbols with the same description to show that they are still unique and not equal.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 65
  {
    id: "tvm-symbol-as-property-key",
    title: "Symbol as a Property Key",
    description: "Use a `Symbol` to create a property on an object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 66
  {
    id: "tvm-symbol-for-global",
    title: "`Symbol.for()`",
    description:
      "Use `Symbol.for()` to create or retrieve a symbol from a global symbol registry.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 67
  {
    id: "tvm-symbol-keyfor",
    title: "`Symbol.keyFor()`",
    description:
      "Use `Symbol.keyFor()` to retrieve the key for a symbol from the global registry.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 68
  {
    id: "tvm-symbol-property-is-hidden",
    title: "Symbol Properties are Hidden",
    description:
      "Show that symbol-keyed properties are not enumerated by `for...in` loops or `Object.keys()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 69
  {
    id: "tvm-getownpropertysymbols",
    title: "`Object.getOwnPropertySymbols()`",
    description:
      "Use `Object.getOwnPropertySymbols()` to retrieve an object's symbol-keyed properties.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 70
  {
    id: "tvm-wrapper-object-pitfall",
    title: "Wrapper Object Pitfall",
    description:
      "Show the pitfall of using a `String` object in a conditional, where it is always truthy, even if it's empty.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 71
  {
    id: "tvm-autoboxing-conceptual",
    title: "Autoboxing (Conceptual)",
    description:
      'Explain how JavaScript temporarily wraps a primitive in an object to allow property access, like `"hello".length`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 72
  {
    id: "tvm-object-isextensible",
    title: "`Object.isExtensible()`",
    description:
      "Use `Object.isExtensible()` to check if new properties can be added to an object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 73
  {
    id: "tvm-object-preventextensions",
    title: "`Object.preventExtensions()`",
    description:
      "Use `Object.preventExtensions()` to make an object non-extensible.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 74
  {
    id: "tvm-object-issealed",
    title: "`Object.isSealed()`",
    description: "Use `Object.isSealed()` to check if an object is sealed.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 75
  {
    id: "tvm-object-seal",
    title: "`Object.seal()`",
    description:
      "Use `Object.seal()` to make an object non-extensible and its properties non-configurable.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 76
  {
    id: "tvm-object-isfrozen",
    title: "`Object.isFrozen()`",
    description: "Use `Object.isFrozen()` to check if an object is frozen.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 77
  {
    id: "tvm-object-freeze",
    title: "`Object.freeze()`",
    description:
      "Use `Object.freeze()` to make an object's properties non-writable and non-configurable.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 78
  {
    id: "tvm-shallow-freeze",
    title: "Shallow Nature of `Object.freeze()`",
    description:
      "Demonstrate that `Object.freeze()` is shallow and does not apply to nested objects.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 79
  {
    id: "tvm-is-finite-check",
    title: "`Number.isFinite()`",
    description:
      "Use `Number.isFinite()` to check if a value is a finite number, without coercing the type.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 80
  {
    id: "tvm-number-tofixed",
    title: "`.toFixed()`",
    description:
      "Use the `.toFixed()` method to format a number as a string with a specific number of decimal places.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 3.14159 },
      { id: "digits", label: "Digits", type: "number", defaultValue: 2 },
    ],
    buttonText: "Format",
    difficulty: "Beginner",
  },
  // problem--> 81
  {
    id: "tvm-number-toprecision",
    title: "`.toPrecision()`",
    description:
      "Use the `.toPrecision()` method to format a number to a specified length (total number of significant digits).",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 123.456 },
      { id: "precision", label: "Precision", type: "number", defaultValue: 4 },
    ],
    buttonText: "Format",
    difficulty: "Intermediate",
  },
  // problem--> 82
  {
    id: "tvm-number-toexponential",
    title: "`.toExponential()`",
    description:
      "Use the `.toExponential()` method to get a string representing the number in exponential notation.",
    category: "Type and Value Mastery",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 12345 },
    ],
    buttonText: "Format",
    difficulty: "Intermediate",
  },
  // problem--> 83
  {
    id: "tvm-object-is-pitfall-objects",
    title: "`Object.is` with Objects",
    description:
      "Show that `Object.is()` behaves like `===` for objects, comparing by reference, not value.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 84
  {
    id: "tvm-coercion-to-primitive-conceptual",
    title: "`ToPrimitive` Abstract Operation (Conceptual)",
    description:
      "Explain the internal `ToPrimitive` operation and how it uses `valueOf` and `toString` to convert an object to a primitive.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 85
  {
    id: "tvm-well-known-symbol-iterator",
    title: "Well-Known Symbol: `Symbol.iterator`",
    description:
      "Implement the `[Symbol.iterator]` method to make a custom object iterable so it can be used with a `for...of` loop.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Advanced",
  },
  // problem--> 86
  {
    id: "tvm-well-known-symbol-tostringtag",
    title: "Well-Known Symbol: `Symbol.toStringTag`",
    description:
      "Use `[Symbol.toStringTag]` to customize the output of `Object.prototype.toString.call()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Advanced",
  },
  // problem--> 87
  {
    id: "tvm-property-descriptor",
    title: "Property Descriptors",
    description:
      "Use `Object.getOwnPropertyDescriptor()` to inspect the attributes of an object's property (value, writable, enumerable, configurable).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Descriptor",
    difficulty: "Intermediate",
  },
  // problem--> 88
  {
    id: "tvm-object-defineproperty",
    title: "`Object.defineProperty()`",
    description:
      "Use `Object.defineProperty()` to create or modify a property with precise control over its attributes.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Define Property",
    difficulty: "Intermediate",
  },
  // problem--> 89
  {
    id: "tvm-non-writable-property",
    title: "Non-Writable Property",
    description:
      "Use `Object.defineProperty()` to create a property that cannot be changed.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 90
  {
    id: "tvm-non-enumerable-property",
    title: "Non-Enumerable Property",
    description:
      "Use `Object.defineProperty()` to create a property that does not show up in `for...in` loops or `Object.keys()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 91
  {
    id: "tvm-non-configurable-property",
    title: "Non-Configurable Property",
    description:
      "Use `Object.defineProperty()` to create a property that cannot be deleted or have its attributes changed.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 92
  {
    id: "tvm-getter-property",
    title: "Getter Property",
    description: "Use `Object.defineProperty()` to create a getter property.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Define Getter",
    difficulty: "Intermediate",
  },
  // problem--> 93
  {
    id: "tvm-setter-property",
    title: "Setter Property",
    description: "Use `Object.defineProperty()` to create a setter property.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Define Setter",
    difficulty: "Intermediate",
  },
  // problem--> 94
  {
    id: "tvm-prototype-conceptual",
    title: "Prototype (Conceptual)",
    description:
      "Explain the concept of a prototype as an object that another object inherits from.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 95
  {
    id: "tvm-prototype-chain",
    title: "The Prototype Chain",
    description:
      "Demonstrate the prototype chain by accessing a method (`toString`) on an empty object that is inherited from `Object.prototype`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Chain",
    difficulty: "Intermediate",
  },
  // problem--> 96
  {
    id: "tvm-object-create",
    title: "`Object.create()`",
    description:
      "Use `Object.create()` to create a new object with a specified prototype object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Create",
    difficulty: "Intermediate",
  },
  // problem--> 97
  {
    id: "tvm-get-prototype-of",
    title: "`Object.getPrototypeOf()`",
    description:
      "Use `Object.getPrototypeOf()` to inspect the prototype of an object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Inspect",
    difficulty: "Intermediate",
  },
  // problem--> 98
  {
    id: "tvm-null-prototype-object",
    title: "Null-Prototype Object",
    description:
      "Create an object with `Object.create(null)` that has no prototype, making it a pure dictionary.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Create",
    difficulty: "Intermediate",
  },
  // problem--> 99
  {
    id: "tvm-hasownproperty",
    title: "`.hasOwnProperty()`",
    description:
      "Use `.hasOwnProperty()` to check if an object has a property directly on itself (not inherited).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 100
  {
    id: "tvm-object-hasown-static",
    title: "`Object.hasOwn()`",
    description:
      "Use the static method `Object.hasOwn()` as a safer alternative to `.hasOwnProperty()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 101
  {
    id: "tvm-array-is-object",
    title: "Array is an Object",
    description:
      "Demonstrate that an array is a subtype of object by checking its `typeof` and its prototype chain.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Demonstrate",
    difficulty: "Beginner",
  },
  // problem--> 102
  {
    id: "tvm-constructor-property",
    title: "The `.constructor` Property",
    description:
      "Show how the `.constructor` property on an instance points back to the function that created it.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Inspect Constructor",
    difficulty: "Intermediate",
  },
  // problem--> 103
  {
    id: "tvm-coercion-in-relational-operators",
    title: "Coercion in Relational Operators",
    description:
      "Compare `5 < '10'` to demonstrate how relational operators coerce strings to numbers.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
    difficulty: "Intermediate",
  },
  // problem--> 104
  {
    id: "tvm-infinity-type",
    title: "Type of `Infinity`",
    description: "Show that `typeof Infinity` is 'number'.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get Type",
    difficulty: "Beginner",
  },
  // problem--> 105
  {
    id: "tvm-negative-zero",
    title: "Negative Zero (-0)",
    description:
      "Demonstrate the existence of `-0` and show how it compares to `0` using `===` and `Object.is`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare Zeroes",
    difficulty: "Intermediate",
  },
  // problem--> 106
  {
    id: "tvm-is-finite",
    title: "`isFinite()` Global Function",
    description:
      "Use the global `isFinite()` function to check if a value is a finite number, noting its type coercion.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `isFinite`",
    difficulty: "Intermediate",
  },
  // problem--> 107
  {
    id: "tvm-number-is-safe-integer",
    title: "`Number.isSafeInteger()`",
    description:
      "Use `Number.isSafeInteger()` to check if a number is within the range where integer arithmetic is precise.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Safety",
    difficulty: "Intermediate",
  },
  // problem--> 108
  {
    id: "tvm-max-safe-integer",
    title: "`Number.MAX_SAFE_INTEGER`",
    description:
      "Show the value of `Number.MAX_SAFE_INTEGER` and demonstrate an operation that exceeds it.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Constant",
    difficulty: "Intermediate",
  },
  // problem--> 109
  {
    id: "tvm-string-coercion-via-template",
    title: "String Coercion in Template Literals",
    description:
      "Demonstrate how embedding a non-string value in a template literal implicitly calls its `toString()` method.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 110
  {
    id: "tvm-bitwise-and-coercion",
    title: "Coercion in Bitwise Operators",
    description:
      "Show how bitwise operators coerce their operands to 32-bit signed integers, truncating any decimals.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `5.5 & 3.3`",
    difficulty: "Advanced",
  },
  // problem--> 111
  {
    id: "tvm-instanceof-pitfall-realms",
    title: "`instanceof` Pitfall Across Realms (Conceptual)",
    description:
      "Explain why `instanceof Array` can fail for an array created in a different realm (e.g., an iframe or a Web Worker).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 112
  {
    id: "tvm-object-tostring-type-check",
    title: "Precise Type Checking with `toString`",
    description:
      "Show the classic pattern of using `Object.prototype.toString.call(value)` to get a precise internal type like `[object Array]`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Type",
    difficulty: "Intermediate",
  },
  // problem--> 113
  {
    id: "tvm-primitive-property-access",
    title: "Property Access on Primitives",
    description:
      "Demonstrate that you can access properties on primitives like strings due to autoboxing, but cannot add new properties to them.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 114
  {
    id: "tvm-well-known-symbol-hasinstance",
    title: "`Symbol.hasInstance` (Conceptual)",
    description:
      "Explain how a class can implement `[Symbol.hasInstance]` to customize the behavior of the `instanceof` operator.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 115
  {
    id: "tvm-bigint-division",
    title: "`BigInt` Division",
    description:
      "Show that division with `BigInt` values performs integer division, truncating any remainder.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Evaluate `10n / 3n`",
    difficulty: "Intermediate",
  },
  // problem--> 116
  {
    id: "tvm-truthiness-of-string-false",
    title: "Truthiness of the String 'false'",
    description:
      "Demonstrate that the non-empty string `'false'` is a truthy value.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 117
  {
    id: "tvm-abstract-equality-algorithm",
    title: "Abstract Equality Algorithm (Conceptual)",
    description:
      "Provide a high-level overview of the complex rules the Abstract Equality Comparison Algorithm (`==`) follows.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 118
  {
    id: "tvm-same-value-zero-algorithm",
    title: "Same-Value-Zero Algorithm (Conceptual)",
    description:
      "Explain the Same-Value-Zero algorithm (used by `Set` and `Map` keys) and how it differs from `===` by treating `+0` and `-0` as equal.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 119
  {
    id: "tvm-coercion-with-alert",
    title: "Coercion in `alert()`",
    description:
      "Demonstrate how passing an array or object to `alert()` implicitly calls `.toString()` or `.join()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `alert([1,2,3])`",
    difficulty: "Intermediate",
  },
  // problem--> 120
  {
    id: "tvm-json-stringify-undefined",
    title: "JSON.stringify and `undefined`",
    description:
      "Show that `JSON.stringify` omits object properties with `undefined` values and converts `undefined` in an array to `null`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 121
  {
    id: "tvm-object-property-access-order",
    title: "Property Access Order with Getters",
    description:
      "Demonstrate that property access order follows the definition order in an object when triggered by destructuring or spread syntax.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Order",
    difficulty: "Advanced",
  },
  // problem--> 122
  {
    id: "tvm-number-epsilon",
    title: "`Number.EPSILON`",
    description:
      "Explain and use `Number.EPSILON` for safe comparison of floating-point numbers.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare `0.1 + 0.2` and `0.3`",
    difficulty: "Advanced",
  },
  // problem--> 123
  {
    id: "tvm-well-known-symbol-isconcatspreadable",
    title: "`Symbol.isConcatSpreadable` (Conceptual)",
    description:
      "Explain how `[Symbol.isConcatSpreadable]` can be used to control whether an object is flattened by `Array.prototype.concat()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 124
  {
    id: "tvm-proxy-for-type-validation",
    title: "Proxy for Type Validation",
    description:
      "Create a Proxy with a `set` trap to enforce types on an object's properties.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Proxy",
    difficulty: "Advanced",
  },
  // problem--> 125
  {
    id: "tvm-globalthis",
    title: "`globalThis`",
    description:
      "Demonstrate `globalThis` as a standard way to access the global object in any JavaScript environment.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show `globalThis`",
    difficulty: "Intermediate",
  },
  // problem--> 126
  {
    id: "tvm-max-value-constant",
    title: "`Number.MAX_VALUE`",
    description:
      "Show the largest positive representable number and what happens when you exceed it.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Constant",
    difficulty: "Intermediate",
  },
  // problem--> 127
  {
    id: "tvm-min-value-constant",
    title: "`Number.MIN_VALUE`",
    description:
      "Show the smallest positive number closest to zero that can be represented.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Constant",
    difficulty: "Intermediate",
  },
  // problem--> 128
  {
    id: "tvm-infinity-arithmetic",
    title: "Arithmetic with `Infinity`",
    description:
      "Demonstrate the results of arithmetic operations involving `Infinity`, such as `Infinity + Infinity` and `Infinity / Infinity`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Arithmetic",
    difficulty: "Intermediate",
  },
  // problem--> 129
  {
    id: "tvm-tostring-on-prototype",
    title: "Overriding `toString` on a Prototype",
    description:
      "Create a constructor function and override the `toString` method on its prototype to customize string coercion for all instances.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Custom `toString`",
    difficulty: "Advanced",
  },
  // problem--> 130
  {
    id: "tvm-coercion-in-bitwise-not",
    title: "Coercion in Bitwise NOT",
    description:
      "Show how the bitwise NOT operator (`~`) coerces its operand to a 32-bit signed integer before inverting.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `~'5'`",
    difficulty: "Advanced",
  },
  // problem--> 131
  {
    id: "tvm-is-prototype-of",
    title: "`.isPrototypeOf()`",
    description:
      "Use the `.isPrototypeOf()` method to check if an object exists in another object's prototype chain.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check Prototype",
    difficulty: "Intermediate",
  },
  // problem--> 132
  {
    id: "tvm-finalization-registry-conceptual",
    title: "`FinalizationRegistry` (Conceptual)",
    description:
      "Explain the `FinalizationRegistry` API, which lets you request a callback to be invoked when an object is garbage collected.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 133
  {
    id: "tvm-weakset-conceptual",
    title: "`WeakSet` (Conceptual)",
    description:
      "Explain the `WeakSet` collection, which only stores objects and holds them weakly, preventing memory leaks.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 134
  {
    id: "tvm-weakmap-conceptual",
    title: "`WeakMap` (Conceptual)",
    description:
      "Explain the `WeakMap` collection, which holds weak references to its keys, allowing for garbage collection and enabling patterns for private data.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 135
  {
    id: "tvm-structuredclone",
    title: "`structuredClone()`",
    description:
      "Use the modern `structuredClone()` global function to perform a robust deep clone of an object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Deep Clone",
    difficulty: "Intermediate",
  },
  // problem--> 136
  {
    id: "tvm-json-clone-limitations",
    title: "Limitations of JSON Deep Clone",
    description:
      "Demonstrate that the JSON trick for deep cloning does not work for special types like `undefined`, `Date`, or functions.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Limitations",
    difficulty: "Intermediate",
  },
  // problem--> 137
  {
    id: "tvm-well-known-symbol-match",
    title: "`Symbol.match` (Conceptual)",
    description:
      "Explain how an object can implement `[Symbol.match]` to provide custom behavior for `String.prototype.match()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 138
  {
    id: "tvm-well-known-symbol-replace",
    title: "`Symbol.replace` (Conceptual)",
    description:
      "Explain how an object can implement `[Symbol.replace]` to provide custom logic for `String.prototype.replace()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 139
  {
    id: "tvm-well-known-symbol-search",
    title: "`Symbol.search` (Conceptual)",
    description:
      "Explain how an object can implement `[Symbol.search]` to provide custom logic for `String.prototype.search()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 140
  {
    id: "tvm-well-known-symbol-split",
    title: "`Symbol.split` (Conceptual)",
    description:
      "Explain how an object can implement `[Symbol.split]` to provide custom logic for `String.prototype.split()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 141
  {
    id: "tvm-reflect-ownkeys",
    title: "`Reflect.ownKeys`",
    description:
      "Use `Reflect.ownKeys()` to get all own property keys, including both string and symbol keys, enumerable or not.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Get All Own Keys",
    difficulty: "Advanced",
  },
  // problem--> 142
  {
    id: "tvm-proxy-get-own-property-descriptor-trap",
    title: "Proxy `getOwnPropertyDescriptor` Trap",
    description:
      "Create a `Proxy` that intercepts calls to `Object.getOwnPropertyDescriptor()`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `getOwnPropertyDescriptor` Trap",
    difficulty: "Advanced",
  },
  // problem--> 143
  {
    id: "tvm-revocable-proxy",
    title: "Revocable Proxy",
    description:
      "Use `Proxy.revocable()` to create a proxy that can be turned off, preventing further access to the target object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Create and Revoke Proxy",
    difficulty: "Advanced",
  },
  // problem--> 144
  {
    id: "tvm-object-fromEntries",
    title: "`Object.fromEntries()`",
    description:
      "Use `Object.fromEntries()` to create an object from an array of key-value pairs (the inverse of `Object.entries()`).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Create Object from Entries",
    difficulty: "Intermediate",
  },
  // problem--> 145
  {
    id: "tvm-json-replacer-function",
    title: "JSON.stringify Replacer Function",
    description:
      "Use a replacer function with `JSON.stringify` to customize the serialization of an object, for example, to filter out certain properties.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Stringify with Replacer",
    difficulty: "Intermediate",
  },
  // problem--> 146
  {
    id: "tvm-json-reviver-function",
    title: "JSON.parse Reviver Function",
    description:
      "Use a reviver function with `JSON.parse` to customize the deserialization process, for example, to convert date strings back into Date objects.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Parse with Reviver",
    difficulty: "Intermediate",
  },
  // problem--> 147
  {
    id: "tvm-coercion-in-if",
    title: "Coercion in `if` Statements",
    description:
      "Demonstrate that the expression inside an `if()` is implicitly coerced to a boolean.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Beginner",
  },
  // problem--> 148
  {
    id: "tvm-coercion-with-bitwise-or",
    title: "Coercion with Bitwise OR",
    description:
      "Show how `|` coerces floating-point numbers to integers as a side effect.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `10.9 | 0`",
    difficulty: "Advanced",
  },
  // problem--> 149
  {
    id: "tvm-primitive-property-assignment",
    title: "Property Assignment on Primitives",
    description:
      "Show that assigning a property to a primitive value in non-strict mode fails silently.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 150
  {
    id: "tvm-number-isinteger",
    title: "`Number.isInteger()`",
    description:
      "Use `Number.isInteger()` to reliably check if a value is an integer.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 151
  {
    id: "tvm-proxy-construct-trap",
    title: "Proxy `construct` Trap",
    description:
      "Use a `Proxy` to intercept the `new` operator on a class constructor.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `construct` Trap",
    difficulty: "Advanced",
  },
  // problem--> 152
  {
    id: "tvm-proxy-delete-trap",
    title: "Proxy `deleteProperty` Trap",
    description:
      "Use a `Proxy` to intercept the `delete` operator on an object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `delete` Trap",
    difficulty: "Advanced",
  },
  // problem--> 153
  {
    id: "tvm-proxy-get-prototype-of-trap",
    title: "Proxy `getPrototypeOf` Trap",
    description: "Use a `Proxy` to intercept `Object.getPrototypeOf()` calls.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Trap",
    difficulty: "Advanced",
  },
  // problem--> 154
  {
    id: "tvm-proxy-set-prototype-of-trap",
    title: "Proxy `setPrototypeOf` Trap",
    description: "Use a `Proxy` to intercept `Object.setPrototypeOf()` calls.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Trap",
    difficulty: "Advanced",
  },
  // problem--> 155
  {
    id: "tvm-proxy-is-extensible-trap",
    title: "Proxy `isExtensible` Trap",
    description: "Use a `Proxy` to intercept `Object.isExtensible()` calls.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Trap",
    difficulty: "Advanced",
  },
  // problem--> 156
  {
    id: "tvm-proxy-prevent-extensions-trap",
    title: "Proxy `preventExtensions` Trap",
    description:
      "Use a `Proxy` to intercept `Object.preventExtensions()` calls.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Trap",
    difficulty: "Advanced",
  },
  // problem--> 157
  {
    id: "tvm-proxy-invariants-conceptual",
    title: "Proxy Invariants (Conceptual)",
    description:
      "Explain that proxy traps must obey certain rules (invariants) to maintain language consistency.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 158
  {
    id: "tvm-reflect-api-conceptual",
    title: "`Reflect` API (Conceptual)",
    description:
      "Explain the `Reflect` object as a collection of methods for interceptable operations, often used within Proxies.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 159
  {
    id: "tvm-reflect-get-set",
    title: "`Reflect.get()` and `Reflect.set()`",
    description:
      "Use `Reflect.get()` and `Reflect.set()` to access and modify object properties.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Reflect",
    difficulty: "Advanced",
  },
  // problem--> 160
  {
    id: "tvm-reflect-construct",
    title: "`Reflect.construct()`",
    description:
      "Use `Reflect.construct()` to call a constructor, which is the reflective equivalent of the `new` operator.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `construct`",
    difficulty: "Advanced",
  },
  // problem--> 161
  {
    id: "tvm-reflect-apply",
    title: "`Reflect.apply()`",
    description:
      "Use `Reflect.apply()` to call a function with a specified `this` context and arguments.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `apply`",
    difficulty: "Advanced",
  },
  // problem--> 162
  {
    id: "tvm-reflect-has",
    title: "`Reflect.has()`",
    description:
      "Use `Reflect.has()` to check for property existence, which is the reflective equivalent of the `in` operator.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `has`",
    difficulty: "Advanced",
  },
  // problem--> 163
  {
    id: "tvm-deep-clone-and-prototypes",
    title: "Deep Cloning and Prototypes",
    description:
      "Show that deep cloning methods like `structuredClone` do not preserve an object's prototype.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 164
  {
    id: "tvm-well-known-symbol-species",
    title: "`Symbol.species` (Conceptual)",
    description:
      "Explain how `[Symbol.species]` allows a class to control the constructor used for new instances created by its methods.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 165
  {
    id: "tvm-well-known-symbol-unscopables",
    title: "`Symbol.unscopables` (Conceptual)",
    description:
      "Explain the legacy `[Symbol.unscopables]` property, which hides certain properties from the deprecated `with` statement.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 166
  {
    id: "tvm-json-and-bigint-error",
    title: "JSON.stringify and `BigInt`",
    description:
      "Show that `JSON.stringify` throws a `TypeError` when it encounters a `BigInt`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 167
  {
    id: "tvm-number-is-integer-vs-modulo",
    title: "`Number.isInteger` vs. Modulo",
    description:
      "Compare `Number.isInteger()` with the `n % 1 === 0` trick for checking if a value is an integer.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Compare",
    difficulty: "Intermediate",
  },
  // problem--> 168
  {
    id: "tvm-min-safe-integer",
    title: "`Number.MIN_SAFE_INTEGER`",
    description: "Show the value of the smallest safe integer in JavaScript.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Constant",
    difficulty: "Intermediate",
  },
  // problem--> 169
  {
    id: "tvm-epsilon-constant",
    title: "`Number.EPSILON` Constant",
    description:
      "Show the value of `Number.EPSILON`, the difference between 1 and the smallest floating point number greater than 1.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Constant",
    difficulty: "Intermediate",
  },
  // problem--> 170
  {
    id: "tvm-coercion-in-equality-null",
    title: "Coercion in Equality with `null`",
    description:
      "Demonstrate that `null` is only loosely equal to `undefined` and nothing else.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `null == 0`",
    difficulty: "Intermediate",
  },
  // problem--> 171
  {
    id: "tvm-coercion-with-empty-array",
    title: "Coercion with Empty Array",
    description:
      'Show that `Number([])` coerces to `0` while `String([])` coerces to `""`.',
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Coercion",
    difficulty: "Intermediate",
  },
  // problem--> 172
  {
    id: "tvm-coercion-with-single-element-array",
    title: "Coercion with Single-Element Array",
    description:
      "Show how an array with a single numeric element coerces to that number.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Coercion",
    difficulty: "Intermediate",
  },
  // problem--> 173
  {
    id: "tvm-prototype-of-null-object",
    title: "Prototype of a Null-Prototype Object",
    description:
      "Use `Object.getPrototypeOf` on an object created with `Object.create(null)` to confirm its prototype is `null`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 174
  {
    id: "tvm-well-known-symbol-species-example",
    title: "`Symbol.species` in Action",
    description:
      "Create a subclass of Array that uses `Symbol.species` to ensure its `.map()` method returns a base Array.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `Symbol.species`",
    difficulty: "Advanced",
  },
  // problem--> 175
  {
    id: "tvm-proxy-and-this-keyword",
    title: "`this` Keyword in Proxy Traps",
    description:
      "Demonstrate how `this` behaves inside a proxy trap and why using `Reflect` methods is important for preserving the correct context.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `this`",
    difficulty: "Advanced",
  },
  // problem--> 176
  {
    id: "tvm-object-prototype-tostring",
    title: "`Object.prototype.toString`",
    description:
      "Demonstrate the default `toString` behavior for a plain object.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Beginner",
  },
  // problem--> 177
  {
    id: "tvm-array-prototype-tostring",
    title: "`Array.prototype.toString`",
    description:
      "Demonstrate that an array's `toString` method is equivalent to its `.join()` method.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Beginner",
  },
  // problem--> 178
  {
    id: "tvm-function-prototype-tostring",
    title: "`Function.prototype.toString`",
    description:
      "Show that calling `.toString()` on a function returns its source code as a string.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 179
  {
    id: "tvm-coercion-with-boolean-object",
    title: "Coercion with Boolean Object",
    description:
      "Demonstrate the confusing behavior of a `new Boolean(false)` object, which is truthy.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 180
  {
    id: "tvm-coercion-with-number-object",
    title: "Coercion with Number Object",
    description:
      "Compare the loose equality of a `new Number(0)` object and other values.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 181
  {
    id: "tvm-numeric-separator-syntax",
    title: "Numeric Separator Syntax",
    description:
      "Show how the numeric separator `_` can be used to improve the readability of large number literals.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Show Separator",
    difficulty: "Beginner",
  },
  // problem--> 182
  {
    id: "tvm-private-class-fields",
    title: "Private Class Fields (`#`)",
    description:
      "Use the `#` prefix to create a private field in a class that is not accessible from outside the class.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Private Field",
    difficulty: "Intermediate",
  },
  // problem--> 183
  {
    id: "tvm-private-class-methods",
    title: "Private Class Methods (`#`)",
    description: "Use the `#` prefix to create a private method in a class.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Private Method",
    difficulty: "Intermediate",
  },
  // problem--> 184
  {
    id: "tvm-static-class-fields",
    title: "Static Class Fields",
    description:
      "Define a static field on a class, which is a property of the class itself, not its instances.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Static Field",
    difficulty: "Intermediate",
  },
  // problem--> 185
  {
    id: "tvm-static-private-class-fields",
    title: "Static Private Class Fields",
    description: "Define a static private field using `static #`.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 186
  {
    id: "tvm-static-class-methods",
    title: "Static Class Methods",
    description:
      "Define a static method on a class, which is called on the class itself.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Static Method",
    difficulty: "Intermediate",
  },
  // problem--> 187
  {
    id: "tvm-static-initialization-blocks",
    title: "Static Initialization Blocks",
    description:
      "Use a `static {}` block for complex, multi-statement initialization of static class properties.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test",
    difficulty: "Intermediate",
  },
  // problem--> 188
  {
    id: "tvm-error-cause-property",
    title: "Error `cause` Property",
    description:
      "Create a new `Error` with a `cause` property to chain errors for better debugging.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Error Cause",
    difficulty: "Intermediate",
  },
  // problem--> 189
  {
    id: "tvm-regexp-hasindices-flag",
    title: "RegExp `d` flag (hasIndices)",
    description:
      "Use the `/d` flag on a regular expression to get the start and end indices of matched capture groups.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `/d` flag",
    difficulty: "Intermediate",
  },
  // problem--> 190
  {
    id: "tvm-at-method-on-arrays",
    title: "`.at()` Method on Arrays",
    description:
      "Use the `.at()` method to access array elements with negative indices.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `.at()`",
    difficulty: "Beginner",
  },
  // problem--> 191
  {
    id: "tvm-at-method-on-strings",
    title: "`.at()` Method on Strings",
    description:
      "Use the `.at()` method to access characters in a string with negative indices.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `.at()`",
    difficulty: "Beginner",
  },
  // problem--> 192
  {
    id: "tvm-private-field-in-operator-check",
    title: "Private Field `in` Operator Check",
    description:
      "Use the `in` operator to create a static method that checks if an object is a true instance of the class by checking for a private field.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Instance Check",
    difficulty: "Advanced",
  },
  // problem--> 193
  {
    id: "tvm-class-fields-initialization-order",
    title: "Class Fields Initialization Order",
    description:
      "Demonstrate that class fields are initialized before the constructor body runs.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test Initialization Order",
    difficulty: "Intermediate",
  },
  // problem--> 194
  {
    id: "tvm-top-level-await",
    title: "Top-Level `await` (Conceptual)",
    description:
      "Explain how top-level `await` allows using `await` outside of an `async` function in ES modules.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 195
  {
    id: "tvm-promise-withresolvables",
    title: "`Promise.withResolvables()` (Conceptual)",
    description:
      "Explain the new `Promise.withResolvables()` static method (ES2024) that returns an object with a promise and its `resolve`/`reject` functions.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 196
  {
    id: "tvm-array-findlast",
    title: "`Array.prototype.findLast()`",
    description:
      "Use the `.findLast()` method to iterate an array backwards and find the last element that satisfies a condition.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `.findLast()`",
    difficulty: "Intermediate",
  },
  // problem--> 197
  {
    id: "tvm-array-findlastindex",
    title: "`Array.prototype.findLastIndex()`",
    description:
      "Use the `.findLastIndex()` method to iterate an array backwards and find the index of the last element that satisfies a condition.",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `.findLastIndex()`",
    difficulty: "Intermediate",
  },
  // problem--> 198
  {
    id: "tvm-array-with",
    title: "`Array.prototype.with()`",
    description:
      "Use the `.with(index, value)` method to create a new array with the element at a given index replaced with a new value (immutable equivalent of `arr[index] = value`).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `.with()`",
    difficulty: "Intermediate",
  },
  // problem--> 199
  {
    id: "tvm-array-tosorted",
    title: "`Array.prototype.toSorted()`",
    description:
      "Use the `.toSorted()` method to get a new, sorted copy of an array without mutating the original (immutable equivalent of `.sort()`).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `.toSorted()`",
    difficulty: "Intermediate",
  },
  // problem--> 200
  {
    id: "tvm-array-toreversed",
    title: "`Array.prototype.toReversed()`",
    description:
      "Use the `.toReversed()` method to get a new, reversed copy of an array without mutating the original (immutable equivalent of `.reverse()`).",
    category: "Type and Value Mastery",
    inputs: [],
    buttonText: "Test `.toReversed()`",
    difficulty: "Intermediate",
  },
];
