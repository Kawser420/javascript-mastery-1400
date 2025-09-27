export const explanations: Record<string, string> = {
  // problem explanation--> 01
  "tvm-typeof-string": `
### 💡 Problem Breakdown
This is a fundamental concept. The \`typeof\` operator is used to determine the data type of a variable or value. The task is to check the type of a string literal.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is placed before the value. It returns a string representing the type.
\`\`\`javascript
typeof 'hello'; // returns the string "string"
\`\`\`
### 📚 Key Concepts
- **\`typeof\` operator**: A fundamental operator for inspecting data types.
- **Primitives**: A string is one of JavaScript's primitive data types.
`,

  // problem explanation--> 02
  "tvm-typeof-number": `
### 💡 Problem Breakdown
This problem checks the type of a number literal using the \`typeof\` operator.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is applied to the number 42.
\`\`\`javascript
typeof 42; // returns "number"
typeof 3.14; // also "number"
typeof NaN; // also "number", a special case
\`\`\`
### 📚 Key Concepts
- **\`typeof\` operator**: A fundamental operator for inspecting data types.
- **Number**: A primitive data type for both integers and floating-point numbers.
`,

  // problem explanation--> 03
  "tvm-typeof-boolean": `
### 💡 Problem Breakdown
This problem checks the type of a boolean literal using the \`typeof\` operator.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is applied to the boolean \`true\`.
\`\`\`javascript
typeof true; // returns "boolean"
typeof false; // also "boolean"
\`\`\`
### 📚 Key Concepts
- **\`typeof\` operator**: A fundamental operator for inspecting data types.
- **Boolean**: A primitive data type that can only be \`true\` or \`false\`.
`,

  // problem explanation--> 04
  "tvm-typeof-undefined": `
### 💡 Problem Breakdown
This problem shows the type of a variable that has been declared but not assigned a value. In JavaScript, such variables are automatically initialized with the value \`undefined\`, and their type is also \`"undefined"\`.

### ⚙️ Solution Walkthrough
A variable is declared with \`let\` without an initial value.
\`\`\`javascript
let x;
console.log(x);        // undefined
console.log(typeof x); // "undefined"
\`\`\`
### 📚 Key Concepts
- **\`undefined\`**: Both a primitive type and a value.
`,

  // problem explanation--> 05
  "tvm-typeof-null-bug": `
### 💡 Problem Breakdown
This problem highlights a famous, long-standing bug in JavaScript. When the \`typeof\` operator is used on the value \`null\`, it incorrectly returns the string \`"object"\`.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is applied to \`null\`.
\`\`\`javascript
typeof null; // "object"
\`\`\`
This is a mistake from the very first version of JavaScript that has been kept for backward compatibility. The correct way to check for \`null\` is with strict equality: \`value === null\`.

### 📚 Key Concepts
- **Legacy Bugs**: Quirks in the language that are maintained for compatibility with older code.
`,

  // problem explanation--> 06
  "tvm-typeof-object": `
### 💡 Problem Breakdown
This problem checks the type of an object literal. The \`typeof\` operator correctly identifies objects.

### ⚙️ Solution Walkthrough
The operator is used on an empty object literal.
\`\`\`javascript
typeof {}; // returns "object"
\`\`\`
However, it's important to know that \`typeof\` also returns \`"object"\` for arrays and \`null\`, so it's not a precise check for plain objects.

### 📚 Key Concepts
- **Object**: A fundamental data structure in JavaScript.
`,

  // problem explanation--> 07
  "tvm-typeof-array": `
### 💡 Problem Breakdown
This problem demonstrates a well-known quirk of the \`typeof\` operator. Because arrays are a type of object in JavaScript's data model, \`typeof\` returns \`"object"\` for an array. It does not distinguish them from plain objects.

### ⚙️ Solution Walkthrough
The correct way to check for an array is shown.
\`\`\`javascript
const arr = [];
typeof arr; // "object"

// The correct way to check if a value is an array:
Array.isArray(arr); // true
\`\`\`
Always use \`Array.isArray()\` to check for arrays.

### 📚 Key Concepts
- **\`Array.isArray()\`**: The standard, reliable method for checking if a value is an array.
`,

  // problem explanation--> 08
  "tvm-typeof-function": `
### 💡 Problem Breakdown
This problem shows a special case for the \`typeof\` operator. Even though functions are technically a type of object in JavaScript, \`typeof\` has a special return value for them to distinguish them from plain objects.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is used on a function.
\`\`\`javascript
const fn = () => {};
typeof fn; // "function"
\`\`\`
This is a reliable way to check if a variable holds a function.

### 📚 Key Concepts
- **\`typeof\` Operator**: Has a specific return value for functions.
`,

  // problem explanation--> 09
  "tvm-typeof-symbol": `
### 💡 Problem Breakdown
This problem confirms the data type of the \`Symbol\` primitive. The \`typeof\` operator has a specific return value for it.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is used on a \`Symbol\`.
\`\`\`javascript
typeof Symbol('id'); // "symbol"
\`\`\`
This distinguishes symbols from other primitive types and objects.

### 📚 Key Concepts
- **\`Symbol\`**: An ES6 primitive type for unique identifiers.
`,

  // problem explanation--> 10
  "tvm-typeof-bigint": `
### 💡 Problem Breakdown
This problem confirms the data type of the \`BigInt\` primitive. The \`typeof\` operator has a specific return value for it.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is used on a \`BigInt\`.
\`\`\`javascript
typeof 123n; // "bigint"
\`\`\`
This distinguishes BigInts from the standard \`number\` type.

### 📚 Key Concepts
- **\`BigInt\`**: An ES2020 primitive type for arbitrarily large integers.
`,

  // problem explanation--> 11
  "tvm-primitive-vs-object-string": `
### 💡 Problem Breakdown
This problem highlights the difference between a primitive string and a String wrapper object. While they can behave similarly due to autoboxing, they are fundamentally different types.

### ⚙️ Solution Walkthrough
The \`typeof\` operator reveals the difference.
\`\`\`javascript
const primitive = 'hello';
const object = new String('hello');

typeof primitive; // "string"
typeof object;    // "object"
\`\`\`
In modern JavaScript, you should almost never use the \`new String()\` constructor.

### 📚 Key Concepts
- **Primitives vs. Objects**: A fundamental distinction in JavaScript.
`,

  // problem explanation--> 12
  "tvm-value-of-null": `
### 💡 Problem Breakdown
The task is to show the value of the primitive \`null\`. \`null\` is a special keyword in JavaScript that represents the intentional absence of any object value.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const myVar = null;
// The value is null
\`\`\`
It must be explicitly assigned. It's often used where an object could be, but no object is relevant.

### 📚 Key Concepts
- **\`null\`**: A primitive type and value.
`,

  // problem explanation--> 13
  "tvm-value-of-undefined": `
### 💡 Problem Breakdown
The task is to show the value of the primitive \`undefined\`. \`undefined\` is the default value for variables that have been declared but not yet assigned a value.

### ⚙️ Solution Walkthrough
\`\`\`javascript
let myVar;
// The value of myVar is undefined
\`\`\`
### 📚 Key Concepts
- **\`undefined\`**: A primitive type and value representing the absence of an assigned value.
`,

  // problem explanation--> 14
  "tvm-dynamic-typing": `
### 💡 Problem Breakdown
JavaScript is a dynamically-typed (or loosely-typed) language. This means you do not have to specify the type of a variable when you declare it, and the type can change at runtime when you reassign the variable.

### ⚙️ Solution Walkthrough
A variable is first assigned a number and then reassigned to a string. The \`typeof\` operator confirms that the variable's type has changed.
\`\`\`javascript
let dynamicVar = 123;
// typeof dynamicVar is "number"

dynamicVar = "hello";
// typeof dynamicVar is now "string"
\`\`\`
### 📚 Key Concepts
- **Dynamic Typing**: A core feature of languages like JavaScript and Python, contrasting with statically-typed languages like Java or C#.
`,

  // problem explanation--> 15
  "tvm-pass-by-value": `
### 💡 Problem Breakdown
This demonstrates "pass-by-value." When you pass a primitive type (like a number, string, or boolean) as an argument to a function, the function receives a **copy** of that value. Any modifications made to the parameter inside the function do not affect the original variable.

### ⚙️ Solution Walkthrough
A number is passed to a function that tries to modify it.
\`\`\`javascript
let myNum = 10;
function modify(num) {
  num = 20; // 'num' is a local copy
}
modify(myNum);
// myNum is still 10
\`\`\`
### 📚 Key Concepts
- **Pass by Value**: The function receives a copy of the primitive's value.
`,

  // problem explanation--> 16
  "tvm-pass-by-reference": `
### 💡 Problem Breakdown
When you pass an object (including an array) to a function, the "pass-by-sharing" mechanism is used. The function receives a **copy of the reference** (the memory address) to the object. Because both the original variable and the function's parameter point to the *same* object in memory, modifying the object's properties inside the function will affect the original object.

### ⚙️ Solution Walkthrough
An object's property is modified inside a function.
\`\`\`javascript
let myObj = { val: 10 };
function modify(obj) {
  obj.val = 20;
}
modify(myObj);
// myObj.val is now 20
\`\`\`
### 📚 Key Concepts
- **Pass by Reference (Sharing)**: The function receives a reference to the same object.
`,

  // problem explanation--> 17
  "tvm-primitive-immutability": `
### 💡 Problem Breakdown
Primitive types in JavaScript are **immutable**. This means that once a primitive value is created, it cannot be changed. Operations that appear to modify a primitive, like string methods, actually create and return a *new* primitive value.

### ⚙️ Solution Walkthrough
The \`.toUpperCase()\` method is called on a string.
\`\`\`javascript
let str = 'hello';
str.toUpperCase(); // This returns a NEW string "HELLO"
// The original string 'str' is unchanged.
console.log(str); // 'hello'
\`\`\`
### 📚 Key Concepts
- **Immutability**: A fundamental property of primitive values.
`,

  // problem explanation--> 18
  "tvm-object-mutability": `
### 💡 Problem Breakdown
In contrast to primitives, objects (including arrays) are **mutable**. This means their properties can be changed, added, or removed after they are created.

### ⚙️ Solution Walkthrough
A new property is added to an object.
\`\`\`javascript
const obj = { a: 1 };
obj.b = 2; // The object is mutated
// obj is now { a: 1, b: 2 }
\`\`\`
### 📚 Key Concepts
- **Mutability**: A core characteristic of reference types.
`,

  // problem explanation--> 19
  "tvm-array-mutability": `
### 💡 Problem Breakdown
Arrays are a type of object and are also mutable. Methods like \`.push()\`, \`.pop()\`, \`.sort()\`, and \`.splice()\` modify the array in place.

### ⚙️ Solution Walkthrough
An element is added to an array.
\`\`\`javascript
const arr = [1, 2];
arr.push(3); // The array is mutated
// arr is now [1, 2, 3]
\`\`\`
### 📚 Key Concepts
- **Mutability**: Arrays are mutable.
`,

  // problem explanation--> 20
  "tvm-typeof-undeclared": `
### 💡 Problem Breakdown
This problem highlights a unique and sometimes useful quirk of the \`typeof\` operator. It is the only operator that can be used on a variable that has not been declared at all without throwing a \`ReferenceError\`. In this case, it will simply return the string \`"undefined"\`.

### ⚙️ Solution Walkthrough
A conceptual example.
\`\`\`javascript
// Assume 'undeclaredVar' has not been declared anywhere.
typeof undeclaredVar; // returns "undefined"
// undeclaredVar; // would throw a ReferenceError
\`\`\`
This can be used to check for the existence of global variables without a \`try...catch\` block.

### 📚 Key Concepts
- **\`typeof\` Operator**: Has a special behavior for undeclared identifiers.
`,

  // problem explanation--> 21
  "tvm-strict-equality": `
### 💡 Problem Breakdown
The strict equality operator (\`===\`) is the recommended way to compare two values in JavaScript. It returns \`true\` only if the operands are equal and of the **same type**. It does not perform type coercion.

### ⚙️ Solution Walkthrough
A number is compared to a string.
\`\`\`javascript
5 === "5"; // false
\`\`\`
Even though the values look the same, their types (\`number\` and \`string\`) are different, so the result is \`false\`.

### 📚 Key Concepts
- **Strict Equality (===)**: Compares both value and type.
`,

  // problem explanation--> 22
  "tvm-loose-equality": `
### 💡 Problem Breakdown
The loose equality operator (\`==\`) compares two values for equality *after* attempting to convert them to a common type. This is called type coercion. Its behavior can sometimes be unpredictable, so \`===\` is generally preferred.

### ⚙️ Solution Walkthrough
A number is compared to a string.
\`\`\`javascript
5 == "5"; // true
\`\`\`
Before comparing, JavaScript coerces the string \`"5"\` into the number \`5\`. Since \`5\` is equal to \`5\`, the result is \`true\`.

### 📚 Key Concepts
- **Loose Equality (==)**: Compares value after attempting type coercion.
`,

  // problem explanation--> 23
  "tvm-loose-equality-null-undefined": `
### 💡 Problem Breakdown
This problem explores a special case in JavaScript's equality rules. \`null\` and \`undefined\` are the only two values that are loosely equal to each other but not to anything else. They are not strictly equal because they are of different types.

### ⚙️ Solution Walkthrough
The two values are compared with both operators.
\`\`\`javascript
null == undefined;  // true
null === undefined; // false
\`\`\`
### 📚 Key Concepts
- **Equality Rules**: Understanding the specific edge cases for \`null\` and \`undefined\`.
`,

  // problem explanation--> 24
  "tvm-strict-equality-null-undefined": `
### 💡 Problem Breakdown
This problem confirms that \`null\` and \`undefined\` are not strictly equal. The strict equality operator (\`===\`) checks both value and type. Since \`null\` has type "object" (due to a bug) and \`undefined\` has type "undefined", they are not the same.

### ⚙️ Solution Walkthrough
The two values are compared with \`===\`.
\`\`\`javascript
null === undefined; // false
\`\`\`
### 📚 Key Concepts
- **Strict Equality (===)**: Always use this for precise comparisons.
`,

  // problem explanation--> 25
  "tvm-loose-equality-boolean-number": `
### 💡 Problem Breakdown
When loose equality (\`==\`) is used to compare a boolean and a number, the boolean is first converted to a number (\`true\` -> 1, \`false\` -> 0), and then the numbers are compared.

### ⚙️ Solution Walkthrough
\`true\` is compared to \`1\`.
\`\`\`javascript
true == 1; // true, because true becomes 1
false == 0; // true, because false becomes 0
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: The rules for how booleans are converted to numbers.
`,

  // problem explanation--> 26
  "tvm-loose-equality-object-primitive": `
### 💡 Problem Breakdown
This demonstrates a more complex type coercion rule for loose equality (\`==\`). When an object is compared to a primitive, the object is converted to a primitive first using the \`ToPrimitive\` internal operation (which usually calls \`.toString()\` or \`.valueOf()\`).

### ⚙️ Solution Walkthrough
An array is compared to a number.
\`\`\`javascript
// The array [5] is converted to a primitive.
// [5].toString() results in the string "5".
// The expression becomes "5" == 5.
// The string "5" is coerced to the number 5.
// The expression becomes 5 == 5, which is true.
[5] == 5; // true
\`\`\`
### 📚 Key Concepts
- **\`ToPrimitive\` Operation**: The internal process for converting an object to a primitive value.
`,

  // problem explanation--> 27
  "tvm-plus-operator-coercion-string": `
### 💡 Problem Breakdown
This demonstrates the type coercion rule for the \`+\` operator. If one operand is a string and the other is a number, the number will be converted to a string, and then the two strings will be concatenated.

### ⚙️ Solution Walkthrough
A string and a number are combined.
\`\`\`javascript
'5' + 3; // The number 3 is converted to the string "3"
         // The result is "53"
\`\`\`
### 📚 Key Concepts
- **Operator Overloading**: The \`+\` operator performs a different action based on the types of its operands.
`,

  // problem explanation--> 28
  "tvm-other-arithmetic-coercion": `
### 💡 Problem Breakdown
In contrast to the \`+\` operator, other arithmetic operators like subtraction (\`-\`), multiplication (\`*\`), and division (\`/\`) will always attempt to convert non-numeric operands to numbers before performing the operation.

### ⚙️ Solution Walkthrough
A string is used in a subtraction operation.
\`\`\`javascript
'5' - 3; // The string "5" is coerced to the number 5.
         // The result is 2 (a number).
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: Different operators have different coercion rules.
`,

  // problem explanation--> 29
  "tvm-explicit-conversion-string": `
### 💡 Problem Breakdown
Type conversion (or type casting) is the process of explicitly converting a value from one data type to another. The \`String()\` constructor function is a reliable way to convert any value to its string representation.

### ⚙️ Solution Walkthrough
A number is converted to a string.
\`\`\`javascript
const num = 123;
const str = String(num); // "123"
console.log(typeof str); // "string"
\`\`\`
### 📚 Key Concepts
- **Explicit Conversion**: Manually changing a value's data type, which is clearer and safer than relying on implicit coercion.
`,

  // problem explanation--> 30
  "tvm-explicit-conversion-number": `
### 💡 Problem Breakdown
The \`Number()\` constructor function is used to explicitly convert a value to a number. It can parse both integers and floating-point numbers.

### ⚙️ Solution Walkthrough
A string is converted to a number.
\`\`\`javascript
const str = "456";
const num = Number(str); // 456
console.log(typeof num); // "number"
\`\`\`
### 📚 Key Concepts
- **Explicit Conversion**: A safe way to handle type changes.
`,

  // problem explanation--> 31
  "tvm-explicit-conversion-boolean": `
### 💡 Problem Breakdown
The \`Boolean()\` constructor function is used to explicitly convert any value to its boolean equivalent, based on whether the value is "truthy" or "falsy".

### ⚙️ Solution Walkthrough
A value is converted to a boolean.
\`\`\`javascript
Boolean('hello'); // true
Boolean(0);       // false
\`\`\`
### 📚 Key Concepts
- **Truthiness and Falsiness**: Core concepts in JavaScript's conditional logic.
`,

  // problem explanation--> 32
  "tvm-unary-plus-conversion": `
### 💡 Problem Breakdown
The unary plus operator (\`+\`) is a concise shorthand for the \`Number()\` function. It's often considered the fastest way to convert a value to a number.

### ⚙️ Solution Walkthrough
The operator is applied to a string.
\`\`\`javascript
const str = '789';
const num = +str; // num is now the number 789
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: A shorthand way to perform explicit type conversion.
`,

  // problem explanation--> 33
  "tvm-double-not-conversion": `
### 💡 Problem Breakdown
The double NOT operator (\`!!\`) is a concise idiom for converting any JavaScript value to its corresponding boolean equivalent.

### ⚙️ Solution Walkthrough
The operator is applied to a value.
\`\`\`javascript
!!'hello'; // true
!!0;       // false
\`\`\`
1.  The first \`!\` coerces the value to a boolean and inverts it (\`!'hello'\` -> \`false\`).
2.  The second \`!\` inverts it back to its original boolean value (\`!false\` -> \`true\`).

### 📚 Key Concepts
- **Type Coercion**: A shorthand for explicit conversion using \`Boolean()\`.
`,

  // problem explanation--> 34
  "tvm-truthiness-check": `
### 💡 Problem Breakdown
This demonstrates "truthiness." When a non-boolean value is used in a context that expects a boolean (like an \`if\` statement), it is implicitly coerced. All values are considered "truthy" except for the six "falsy" values.

### ⚙️ Solution Walkthrough
A non-empty string is truthy, so the \`if\` block executes.
\`\`\`javascript
if ('hello') {
  // This code runs
}
\`\`\`
### 📚 Key Concepts
- **Truthy**: Any value that is not one of the six falsy values.
`,

  // problem explanation--> 35
  "tvm-falsiness-check": `
### 💡 Problem Breakdown
This demonstrates "falsiness." The number \`0\` is one of the six falsy values in JavaScript. When used in a boolean context, it is treated as \`false\`.

### ⚙️ Solution Walkthrough
The number \`0\` is falsy, so the \`else\` block executes.
\`\`\`javascript
if (0) {
  // This code is skipped
} else {
  // This code runs
}
\`\`\`
### 📚 Key Concepts
- **Falsy**: A value that is considered \`false\` in a boolean context.
`,

  // problem explanation--> 36
  "tvm-list-falsy-values": `
### 💡 Problem Breakdown
A "falsy" value is a value that is considered \`false\` when encountered in a boolean context. There are only **six** falsy values in JavaScript.

### ⚙️ Solution Walkthrough
The six falsy values are:
- \`false\`
- \`0\`
- \`""\` (empty string)
- \`null\`
- \`undefined\`
- \`NaN\`

It's important to memorize this short list. Every other value is truthy.

### 📚 Key Concepts
- **Falsy**: A small, specific set of values that evaluate to false in boolean contexts.
`,

  // problem explanation--> 37
  "tvm-truthiness-of-empty-object": `
### 💡 Problem Breakdown
This demonstrates that an empty object literal (\`{}\`) is a **truthy** value.

### ⚙️ Solution Walkthrough
An empty object is used in an \`if\` statement.
\`\`\`javascript
if ({}) {
  // This code will execute
}
\`\`\`
In JavaScript, all objects are truthy, regardless of whether they have properties.

### 📚 Key Concepts
- **Truthy**: All objects, including empty ones, are truthy.
`,

  // problem explanation--> 38
  "tvm-truthiness-of-empty-array": `
### 💡 Problem Breakdown
Like objects, an empty array literal (\`[]\`) is also a **truthy** value.

### ⚙️ Solution Walkthrough
An empty array is used in an \`if\` statement.
\`\`\`javascript
if ([]) {
  // This code will execute
}
\`\`\`
This can be a common source of bugs if a developer assumes an empty array is falsy. To check if an array has items, you must check its \`.length\` property.

### 📚 Key Concepts
- **Truthy**: All arrays, including empty ones, are truthy.
`,

  // problem explanation--> 39
  "tvm-parseint-basic": `
### 💡 Problem Breakdown
The \`parseInt()\` function parses a string argument and returns an integer of the specified radix. It stops parsing at the first character that is not a valid digit.

### ⚙️ Solution Walkthrough
A string is parsed into an integer.
\`\`\`javascript
parseInt("101 dalmatians", 10); // 101
\`\`\`
It's a best practice to always provide the second argument, the radix (usually 10 for decimal).

### 📚 Key Concepts
- **\`parseInt()\`**: A built-in function for parsing integers from strings.
`,

  // problem explanation--> 40
  "tvm-parsefloat-basic": `
### 💡 Problem Breakdown
The \`parseFloat()\` function parses a string argument and returns a floating-point number.

### ⚙️ Solution Walkthrough
A string is parsed into a float.
\`\`\`javascript
parseFloat("3.14 is pi"); // 3.14
\`\`\`
### 📚 Key Concepts
- **\`parseFloat()\`**: A built-in function for parsing floating-point numbers from strings.
`,

  // problem explanation--> 41
  "tvm-number-tostring": `
### 💡 Problem Breakdown
The \`.toString()\` method is a standard method available on number primitives that returns a string representing the number.

### ⚙️ Solution Walkthrough
A number is converted to a string.
\`\`\`javascript
const num = 123;
num.toString(); // "123"
\`\`\`
### 📚 Key Concepts
- **Method**: A function associated with an object. Primitives like numbers can access methods via autoboxing.
`,

  // problem explanation--> 42
  "tvm-number-tostring-radix": `
### 💡 Problem Breakdown
The \`.toString()\` method on a number can take an optional \`radix\` (or base) argument, which allows you to convert the number to a string representation in a different numeral system.

### ⚙️ Solution Walkthrough
A number is converted to binary and hexadecimal.
\`\`\`javascript
const num = 255;
num.toString(2);  // "11111111" (binary)
num.toString(16); // "ff" (hexadecimal)
\`\`\`
### 📚 Key Concepts
- **Base Conversion**: A common task in computer science.
`,

  // problem explanation--> 43
  "tvm-if-assignment-pitfall": `
### 💡 Problem Breakdown
This demonstrates a classic bug where a single equals sign (\`=\`) is used in an \`if\` condition instead of an equality operator (\`===\`).

### ⚙️ Solution Walkthrough
The expression \`x = 0\` assigns \`0\` to \`x\`, and the expression itself evaluates to the assigned value, \`0\`. Since \`0\` is a falsy value, the \`if\` block is not executed.
\`\`\`javascript
let x = 1;
if (x = 0) { // Assigns 0 to x and evaluates to 0 (falsy)
  // this block is skipped
}
// x is now 0.
\`\`\`
### 📚 Key Concepts
- **Assignment as an Expression**: The root cause of this behavior.
`,

  // problem explanation--> 44
  "tvm-abstract-relational-comparison": `
### 💡 Problem Breakdown
Relational operators like \`>\` and \`<\` will also perform type coercion if the operands are of different types. If one operand is a string and the other is a number, the string will be converted to a number.

### ⚙️ Solution Walkthrough
A numeric string is compared to a number.
\`\`\`javascript
'10' > 5; // true, because "10" is converted to the number 10.
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: A behavior that applies to relational operators.
`,

  // problem explanation--> 45
  "tvm-abstract-relational-string-comparison": `
### 💡 Problem Breakdown
This problem shows a key rule for relational operators. If **both** operands are strings, the comparison is done **lexicographically** (like in a dictionary), not numerically.

### ⚙️ Solution Walkthrough
Two strings are compared.
\`\`\`javascript
'2' > '10'; // true
\`\`\`
The result is \`true\` because the character '2' has a higher character code value than '1'.

### 📚 Key Concepts
- **Lexicographical Comparison**: The standard method for ordering strings.
`,

  // problem explanation--> 46
  "tvm-tostring-vs-valueof-coercion": `
### 💡 Problem Breakdown
This is a conceptual problem about a low-level JavaScript operation called \`ToPrimitive\`. When JavaScript needs to convert an object to a primitive value, it follows these steps:
1. It calls the object's \`[Symbol.toPrimitive]\` method if it exists.
2. If not, and the context suggests a number is needed (like with \`-\`), it tries \`valueOf()\` first, then \`toString()\`.
3. If the context suggests a string is needed, it tries \`toString()\` first, then \`valueOf()\`.

### 📚 Key Concepts
- **\`ToPrimitive\`**: The internal abstract operation that governs object-to-primitive coercion.
`,

  // problem explanation--> 47
  "tvm-valueof-example": `
### 💡 Problem Breakdown
This problem demonstrates how you can customize an object's coercion to a number by providing a custom \`.valueOf()\` method.

### ⚙️ Solution Walkthrough
An object is created with a \`valueOf\` method that returns 100. When this object is used in a numeric context, the \`valueOf\` method is called.
\`\`\`javascript
const obj = {
  valueOf: () => 100
};
obj + 5; // The result is 105
\`\`\`
### 📚 Key Concepts
- **\`.valueOf()\`**: A method used in the object-to-primitive conversion process.
`,

  // problem explanation--> 48
  "tvm-tostring-example": `
### 💡 Problem Breakdown
This problem shows how to customize an object's coercion to a string by providing a custom \`.toString()\` method.

### ⚙️ Solution Walkthrough
An object is created with a \`toString\` method. When this object is used in a string context, the custom method is called.
\`\`\`javascript
const obj = {
  toString: () => 'custom'
};
String(obj); // 'custom'
\`\`\`
### 📚 Key Concepts
- **\`.toString()\`**: A standard method for getting a string representation of an object.
`,

  // problem explanation--> 49
  "tvm-symbol-toprimitive": `
### 💡 Problem Breakdown
This demonstrates the most modern and powerful way to control an object's coercion: the \`[Symbol.toPrimitive]\` method. This method takes a "hint" (\`'number'\`, \`'string'\`, or \`'default'\`) and allows you to return a different primitive value depending on the context.

### ⚙️ Solution Walkthrough
An object implements this method to behave differently in numeric and string contexts.
\`\`\`javascript
const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return 42;
    return 'hello';
  }
};
obj * 2;       // 84 (used the 'number' hint)
String(obj); // 'hello' (used the 'string' or 'default' hint)
\`\`\`
### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
`,

  // problem explanation--> 50
  "tvm-plus-date-coercion": `
### 💡 Problem Breakdown
This problem demonstrates how a \`Date\` object is coerced to a primitive. When a \`Date\` object is used in a numeric context, it is converted to its timestamp. The unary plus (\`+\`) is a simple way to trigger this numeric coercion.

### ⚙️ Solution Walkthrough
The unary plus is applied to a \`new Date()\`.
\`\`\`javascript
+new Date(); // Returns the current timestamp
\`\`\`
This is equivalent to \`new Date().getTime()\`.

### 📚 Key Concepts
- **Type Coercion**: A special rule for how \`Date\` objects are converted to numbers.
`,

  // problem explanation--> 51
  "tvm-coercion-with-join": `
### 💡 Problem Breakdown
This problem shows how the \`.join()\` array method implicitly coerces its elements to strings. Special values like \`null\` and \`undefined\` become empty strings.

### ⚙️ Solution Walkthrough
An array with \`null\` and \`undefined\` is joined.
\`\`\`javascript
const arr = [1, null, undefined];
arr.join(','); // "1,,"
\`\`\`
This behavior is important to remember when constructing strings from arrays that might contain these values.

### 📚 Key Concepts
- **Implicit Coercion**: The \`.join()\` method performs string coercion on all array elements.
`,

  // problem explanation--> 52
  "tvm-alert-coercion": `
### 💡 Problem Breakdown
This is a conceptual problem about implicit coercion in browser APIs. When you pass a non-string value to a function like \`alert()\`, it must be converted to a string to be displayed. JavaScript does this automatically by effectively calling \`String(value)\`, which in turn often calls the \`.toString()\` method on objects.

### ⚙️ Solution Walkthrough
- \`alert({ a: 1 })\` will display \`"[object Object]"\`.
- \`alert([1, 2, 3])\` will display \`"1,2,3"\`.

### 📚 Key Concepts
- **String Coercion**: A common implicit conversion that happens when a string is expected.
`,

  // problem explanation--> 53
  "tvm-object-property-key-coercion": `
### 💡 Problem Breakdown
This problem demonstrates a fundamental rule of object properties. When you use a non-string value as a property key in bracket notation, JavaScript implicitly coerces that value to a string.

### ⚙️ Solution Walkthrough
A number is used as a key.
\`\`\`javascript
const obj = {};
obj[123] = 'hello';

// The key 123 was coerced to the string "123".
Object.keys(obj); // ["123"]
\`\`\`
This is why \`obj[123]\` and \`obj['123']\` access the same property. The only exception to this are \`Symbol\`s, which can be keys without being converted to strings.

### 📚 Key Concepts
- **Property Keys**: Must be either strings or Symbols.
`,

  // problem explanation--> 54
  "tvm-loose-equality-tricky-1": `
### 💡 Problem Breakdown
This is an infamous example of JavaScript's complex type coercion rules for loose equality (\`==\`). The expression \`[] == ![]\` evaluates to \`true\`, which is highly unintuitive.

### ⚙️ Solution Walkthrough
1. \`![]\` (NOT operator on an array): An array is truthy, so \`![]\` is \`false\`. The expression becomes \`[] == false\`.
2. \`[] == false\`: The boolean is converted to a number: \`[] == 0\`.
3. The object \`[]\` is converted to a primitive: \`[].toString()\` is \`""\`. The expression becomes \`"" == 0\`.
4. The string is converted to a number: \`Number("")\` is \`0\`. The expression becomes \`0 == 0\`.
5. \`0 == 0\` is \`true\`.

### 📚 Key Concepts
- **Loose Equality (\`==\`)**: Has complex and often surprising coercion rules. This is a primary reason to always use strict equality (\`===\`).
`,

  // problem explanation--> 55
  "tvm-loose-equality-tricky-2": `
### 💡 Problem Breakdown
This is another tricky example of loose equality. The expression \`'' == [null]\` evaluates to \`true\`.

### ⚙️ Solution Walkthrough
1. \`'' == [null]\`: The object \`[null]\` is converted to a primitive. \`[null].toString()\` is \`""\` (an empty string).
2. The expression becomes \`'' == ''\`.
3. \`'' == ''\` is \`true\`.

### 📚 Key Concepts
- **Type Coercion**: The \`toString\` method of an array calls \`join\`, and \`[null]\` joining results in an empty string.
`,

  // problem explanation--> 56
  "tvm-instanceof-and-primitives": `
### 💡 Problem Breakdown
The \`instanceof\` operator checks the prototype chain of an **object**. Primitive values (string, number, boolean, etc.) are not objects, so \`instanceof\` will always return \`false\` for them.

### ⚙️ Solution Walkthrough
The operator is used on a string primitive and a String wrapper object.
\`\`\`javascript
"hello" instanceof String;           // false
new String("hello") instanceof String; // true
\`\`\`
### 📚 Key Concepts
- **Primitives vs. Objects**: A fundamental distinction in JavaScript. \`instanceof\` only works on objects.
`,

  // problem explanation--> 57
  "tvm-isarray-check": `
### 💡 Problem Breakdown
This problem shows the correct, modern way to check if a value is an array. Because \`typeof []\` returns \`'object'\`, you cannot rely on \`typeof\`. The standard method is \`Array.isArray()\`.

### ⚙️ Solution Walkthrough
The method is demonstrated.
\`\`\`javascript
Array.isArray([]);       // true
Array.isArray({});       // false
Array.isArray('hello');  // false
\`\`\`
This method is reliable and works correctly across different JavaScript realms (e.g., iframes).

### 📚 Key Concepts
- **\`Array.isArray()\`**: The standard, reliable method for checking if a value is an array.
`,

  // problem explanation--> 58
  "tvm-number-isnan-check": `
### 💡 Problem Breakdown
This problem compares the modern, stricter \`Number.isNaN()\` with the older global \`isNaN()\`. The global \`isNaN()\` function first coerces its argument to a number, which can lead to confusing results. \`Number.isNaN()\` does not perform this coercion.

### ⚙️ Solution Walkthrough
Both functions are tested with a non-numeric string.
\`\`\`javascript
isNaN('hello'); // true (because Number('hello') is NaN)
Number.isNaN('hello'); // false (because 'hello' is not of type Number)
\`\`\`
\`Number.isNaN()\` is the safer and more precise check.

### 📚 Key Concepts
- **\`Number.isNaN()\`**: The modern, strict function for checking for \`NaN\`.
`,

  // problem explanation--> 59
  "tvm-object-is-check": `
### 💡 Problem Breakdown
\`Object.is()\` is a static method that determines if two values are the "same value". It behaves almost identically to the strict equality operator (\`===\`), but with two key differences that make it more precise in edge cases.

### ⚙️ Solution Walkthrough
The two main differences are highlighted.
\`\`\`javascript
// Difference 1: NaN
NaN === NaN;           // false
Object.is(NaN, NaN); // true

// Difference 2: Zeroes
0 === -0;           // true
Object.is(0, -0); // false
\`\`\`
### 📚 Key Concepts
- **\`Object.is()\`**: A method for "same-value" equality, which is slightly more precise than strict equality for certain edge cases.
`,

  // problem explanation--> 60
  "tvm-bigint-literal": `
### 💡 Problem Breakdown
This problem shows how to create a \`BigInt\` primitive using a literal. A \`BigInt\` is a special numeric type that can represent integers with arbitrary precision, unlike the standard \`Number\` type which has a safe integer limit.

### ⚙️ Solution Walkthrough
A \`BigInt\` literal is created by appending the \`n\` suffix to an integer number.
\`\`\`javascript
const big = 9007199254740991n;
console.log(typeof big); // "bigint"
\`\`\`
### 📚 Key Concepts
- **\`BigInt\`**: An ES2020 primitive type for arbitrarily large integers.
`,

  // problem explanation--> 61
  "tvm-bigint-constructor": `
### 💡 Problem Breakdown
You can also create a \`BigInt\` by calling the \`BigInt()\` constructor function with a number or a string as an argument.

### ⚙️ Solution Walkthrough
A \`BigInt\` is created from a string.
\`\`\`javascript
const big = BigInt("9007199254740991");
console.log(typeof big); // "bigint"
\`\`\`
### 📚 Key Concepts
- **\`BigInt()\`**: A constructor function for creating BigInts.
`,

  // problem explanation--> 62
  "tvm-bigint-mixed-type-error": `
### 💡 Problem Breakdown
This problem demonstrates a strict rule for the \`BigInt\` numeric type. To prevent accidental loss of precision, JavaScript does not allow you to mix \`BigInt\` and regular \`Number\` types in arithmetic operations. Doing so will throw a \`TypeError\`.

### ⚙️ Solution Walkthrough
The code attempts to add a \`BigInt\` and a \`Number\`.
\`\`\`javascript
// 1n + 2; // Throws a TypeError.
// You must explicitly convert:
BigInt(2) + 1n; // 3n
Number(1n) + 2; // 3
\`\`\`
### 📚 Key Concepts
- **\`BigInt\`**: A separate numeric type that requires explicit conversions when mixing with \`Number\`.
`,

  // problem explanation--> 63
  "tvm-bigint-comparisons": `
### 💡 Problem Breakdown
While you cannot mix \`BigInt\` and \`Number\` in arithmetic, you *can* compare them using relational (\`>\`) and equality (\`==\`, \`===\`) operators.

### ⚙️ Solution Walkthrough
Comparisons are demonstrated.
\`\`\`javascript
10n > 5;      // true
10n == 10;    // true
10n === 10;   // false (because they are different types)
\`\`\`
### 📚 Key Concepts
- **Type System**: \`BigInt\` and \`Number\` are distinct types, which is why strict equality fails.
`,

  // problem explanation--> 64
  "tvm-symbol-uniqueness": `
### 💡 Problem Breakdown
\`Symbol\` is a primitive data type introduced in ES6. Its main purpose is to create unique identifiers. Every time you call \`Symbol()\`, you get a new, completely unique value, even if you provide the same description.

### ⚙️ Solution Walkthrough
Two symbols are created and compared.
\`\`\`javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false
\`\`\`
Symbols are often used as keys for object properties that you want to be "hidden" or to avoid naming collisions with other properties.

### 📚 Key Concepts
- **\`Symbol\`**: A primitive type for creating unique, non-string property keys.
`,

  // problem explanation--> 65
  "tvm-symbol-as-property-key": `
### 💡 Problem Breakdown
Symbols can be used as keys for object properties. This is a primary use case for them. To use a symbol as a key, you must use the computed property name syntax (\`[]\`).

### ⚙️ Solution Walkthrough
A symbol is used as a property key.
\`\`\`javascript
const id = Symbol('id');
const obj = {
  [id]: 123
};
console.log(obj[id]); // 123
\`\`\`
### 📚 Key Concepts
- **Computed Property Names**: The syntax for using expressions (like a symbol variable) as a key.
`,

  // problem explanation--> 66
  "tvm-symbol-for-global": `
### 💡 Problem Breakdown
While \`Symbol()\` always creates a new, unique symbol, \`Symbol.for(key)\` creates a symbol in a global symbol registry. If a symbol with the given key already exists in the registry, it returns that symbol. Otherwise, it creates a new one, adds it to the registry, and returns it.

### ⚙️ Solution Walkthrough
\`Symbol.for()\` is called twice with the same key.
\`\`\`javascript
Symbol.for('a') === Symbol.for('a'); // true
\`\`\`
This allows you to create symbols that can be shared across different parts of an application, or even across different realms (like iframes).

### 📚 Key Concepts
- **Global Symbol Registry**: A registry for creating reusable symbols.
`,

  // problem explanation--> 67
  "tvm-symbol-keyfor": `
### 💡 Problem Breakdown
\`Symbol.keyFor(symbol)\` is the inverse of \`Symbol.for()\`. It takes a symbol and, if that symbol was created with \`Symbol.for()\`, it returns the key (the string) that was used to create it. If the symbol is not in the global registry, it returns \`undefined\`.

### ⚙️ Solution Walkthrough
The key for a global symbol is retrieved.
\`\`\`javascript
const sym = Symbol.for('globalKey');
Symbol.keyFor(sym); // "globalKey"
\`\`\`
### 📚 Key Concepts
- **Global Symbol Registry**: A registry for creating and retrieving shared symbols.
`,

  // problem explanation--> 68
  "tvm-symbol-property-is-hidden": `
### 💡 Problem Breakdown
A key feature of symbol-keyed properties is that they are not included in standard enumeration mechanisms like \`for...in\` loops, \`Object.keys()\`, or \`JSON.stringify()\`. This makes them ideal for adding metadata or internal properties to objects without interfering with code that iterates over the object's properties.

### ⚙️ Solution Walkthrough
An object with a symbol key is enumerated.
\`\`\`javascript
const id = Symbol('id');
const obj = { [id]: 123, a: 1 };

Object.keys(obj); // ['a']
\`\`\`
### 📚 Key Concepts
- **Enumerability**: Symbol keys are non-enumerable by default.
`,

  // problem explanation--> 69
  "tvm-getownpropertysymbols": `
### 💡 Problem Breakdown
Since symbol properties are not returned by \`Object.keys()\`, a separate method is needed to discover them. \`Object.getOwnPropertySymbols()\` returns an array of all own symbol properties found on an object.

### ⚙️ Solution Walkthrough
The method is used to find a symbol-keyed property.
\`\`\`javascript
const sym = Symbol('s');
const obj = { [sym]: 1, a: 2 };

Object.getOwnPropertySymbols(obj); // [Symbol(s)]
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: A method specifically for discovering symbol properties.
`,

  // problem explanation--> 70
  "tvm-wrapper-object-pitfall": `
### 💡 Problem Breakdown
This problem shows a classic pitfall with wrapper objects. A \`new Boolean(false)\` or \`new String("")\` creates an **object**. In JavaScript, all objects are **truthy**, even if they represent a "falsy" primitive value.

### ⚙️ Solution Walkthrough
An \`if\` statement checks the truthiness of a Boolean wrapper object.
\`\`\`javascript
const myBool = new Boolean(false);
if (myBool) {
  // This code runs, because 'myBool' is an object and is therefore truthy.
}
\`\`\`
This is a primary reason why you should almost never use the object wrapper constructors (\`new String\`, \`new Number\`, \`new Boolean\`).

### 📚 Key Concepts
- **Truthiness**: All objects are truthy.
- **Wrapper Objects**: Should generally be avoided in favor of their primitive counterparts.
`,

  // problem explanation--> 71
  "tvm-autoboxing-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a behind-the-scenes mechanism in JavaScript. Primitive values (like strings, numbers, booleans) do not have methods themselves. However, when you try to access a property or method on a primitive (e.g., \`"hello".length\`), JavaScript temporarily creates a "wrapper object" of the corresponding type (\`new String("hello")\`), accesses the property on that object, and then discards the object.

### ⚙️ Solution Walkthrough
The code \`"hello".toUpperCase()\` demonstrates this.
1. JavaScript sees a property access on a string primitive.
2. It implicitly creates a temporary \`String\` wrapper object: \`new String("hello")\`.
3. It calls the \`.toUpperCase()\` method on this temporary object.
4. The method returns the new string "HELLO".
5. The temporary wrapper object is discarded.

This process is called "autoboxing".

### 📚 Key Concepts
- **Autoboxing**: The automatic wrapping of primitives in objects to allow property access.
`,

  // problem explanation--> 72
  "tvm-object-isextensible": `
### 💡 Problem Breakdown
The \`Object.isExtensible()\` method determines if new properties can be added to an object. By default, all objects created via literals or constructors are extensible.

### ⚙️ Solution Walkthrough
The method is called on a plain object.
\`\`\`javascript
const obj = {};
Object.isExtensible(obj); // true
\`\`\`
This can be changed using methods like \`Object.preventExtensions()\`, \`Object.seal()\`, or \`Object.freeze()\`.

### 📚 Key Concepts
- **Object Extensibility**: Whether new properties can be added to an object.
- **Object Introspection**: Methods that allow you to check the state or configuration of an object.
`,

  // problem explanation--> 73
  "tvm-object-preventextensions": `
### 💡 Problem Breakdown
\`Object.preventExtensions()\` is a method that makes an object non-extensible. Once an object is non-extensible, new properties cannot be added to it.

### ⚙️ Solution Walkthrough
An object is made non-extensible.
\`\`\`javascript
const obj = {};
Object.preventExtensions(obj);
// obj.newProp = 1; // This fails silently in non-strict mode, throws TypeError in strict mode.
\`\`\`
Note that existing properties can still be modified or deleted.

### 📚 Key Concepts
- **\`Object.preventExtensions()\`**: A method to lock down the addition of new properties.
`,

  // problem explanation--> 74
  "tvm-object-issealed": `
### 💡 Problem Breakdown
The \`Object.isSealed()\` method is used to determine if an object has been sealed. An object is considered sealed if it is not extensible and all of its own properties are non-configurable.

### ⚙️ Solution Walkthrough
The status of an object is checked after sealing it.
\`\`\`javascript
const obj = {};
Object.seal(obj);
Object.isSealed(obj); // true
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: Checking an object's state.
`,

  // problem explanation--> 75
  "tvm-object-seal": `
### 💡 Problem Breakdown
\`Object.seal()\` is a method that seals an object. Sealing an object prevents new properties from being added and marks all existing properties as non-configurable. This means you cannot delete properties, but you can still change the value of existing writable properties.

### ⚙️ Solution Walkthrough
An object is sealed, and its property is modified.
\`\`\`javascript
const obj = { a: 1 };
Object.seal(obj);
obj.a = 2; // Allowed
// delete obj.a; // Not allowed
\`\`\`
### 📚 Key Concepts
- **\`Object.seal()\`**: A method for making an object's structure fixed, but its values mutable.
`,

  // problem explanation--> 76
  "tvm-object-isfrozen": `
### 💡 Problem Breakdown
The \`Object.isFrozen()\` method is used to determine if an object has been frozen. An object is frozen if it is not extensible, all its properties are non-configurable, and all its data properties are non-writable.

### ⚙️ Solution Walkthrough
The status of an object is checked after freezing.
\`\`\`javascript
const obj = {};
Object.freeze(obj);
Object.isFrozen(obj); // true
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: Checking an object's state.
`,

  // problem explanation--> 77
  "tvm-object-freeze": `
### 💡 Problem Breakdown
\`Object.freeze()\` is the most restrictive method for making an object immutable. It prevents adding new properties, deleting existing properties, and changing the values of existing properties.

### ⚙️ Solution Walkthrough
An attempt to modify a frozen object fails.
\`\`\`javascript
'use strict';
const obj = { a: 1 };
Object.freeze(obj);
// obj.a = 2; // Throws a TypeError in strict mode.
\`\`\`
### 📚 Key Concepts
- **\`Object.freeze()\`**: A method for making an object immutable.
`,

  // problem explanation--> 78
  "tvm-shallow-freeze": `
### 💡 Problem Breakdown
This problem demonstrates an important limitation of \`Object.freeze()\`: it is a **shallow** operation. It makes the top-level properties of the object immutable, but if one of those properties is another object, that nested object is *not* frozen.

### ⚙️ Solution Walkthrough
A nested object is mutated after the parent object has been frozen.
\`\`\`javascript
const obj = { nested: { a: 1 } };
Object.freeze(obj);
obj.nested.a = 99; // This is allowed!
\`\`\`
### 📚 Key Concepts
- **Shallow vs. Deep Operations**: Shallow operations affect only the top level of a data structure.
`,

  // problem explanation--> 79
  "tvm-is-finite-check": `
### 💡 Problem Breakdown
This problem compares the global \`isFinite()\` function with the modern \`Number.isFinite()\`.
- **\`isFinite()\`**: Coerces its argument to a number before checking.
- **\`Number.isFinite()\`**: Does *not* coerce. It returns \`true\` only if the value is of type number and is finite.

### ⚙️ Solution Walkthrough
The two functions are compared.
\`\`\`javascript
isFinite('123');           // true (coerced)
Number.isFinite('123'); // false (not a number type)
\`\`\`
\`Number.isFinite()\` is generally safer as it avoids unexpected coercion.

### 📚 Key Concepts
- **Type Coercion**: A key difference between the older global functions and newer static methods on the \`Number\` object.
`,

  // problem explanation--> 80
  "tvm-number-tofixed": `
### 💡 Problem Breakdown
The \`.toFixed()\` method is used to format a number into a string, keeping a specified number of decimal places. It will round or pad with zeros as necessary.

### ⚙️ Solution Walkthrough
The method is called with the number of digits.
\`\`\`javascript
(3.14159).toFixed(2); // "3.14"
(5).toFixed(2);       // "5.00"
\`\`\`
### 📚 Key Concepts
- **Number Formatting**: A common requirement for displaying data to users.
`,

  // problem explanation--> 81
  "tvm-number-toprecision": `
### 💡 Problem Breakdown
The \`.toPrecision()\` method formats a number to a specified total number of significant digits. It may return in exponential notation if needed.

### ⚙️ Solution Walkthrough
The method is called with the desired precision.
\`\`\`javascript
(123.456).toPrecision(4); // "123.5"
(12345).toPrecision(2);   // "1.2e+4"
\`\`\`
### 📚 Key Concepts
- **Significant Digits**: The number of digits that carry meaning contributing to a number's precision.
`,

  // problem explanation--> 82
  "tvm-number-toexponential": `
### 💡 Problem Breakdown
The \`.toExponential()\` method returns a string representing the number in exponential (scientific) notation.

### ⚙️ Solution Walkthrough
The method is called on a number.
\`\`\`javascript
(12345).toExponential(); // "1.2345e+4"
\`\`\`
### 📚 Key Concepts
- **Scientific Notation**: A way of expressing very large or very small numbers.
`,

  // problem explanation--> 83
  "tvm-object-is-pitfall-objects": `
### 💡 Problem Breakdown
This problem reinforces that \`Object.is()\` behaves just like strict equality (\`===\`) when it comes to comparing objects. It compares by reference, not by value.

### ⚙️ Solution Walkthrough
Two separate but identical objects are compared.
\`\`\`javascript
Object.is({}, {}); // false
\`\`\`
They are different objects in memory, so the result is \`false\`.

### 📚 Key Concepts
- **Reference vs. Value**: A fundamental concept for object comparison.
`,

  // problem explanation--> 84
  "tvm-coercion-to-primitive-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the internal \`ToPrimitive\` operation. When JavaScript needs to convert an object to a primitive value (e.g., for \`obj + 5\` or \`alert(obj)\`), it follows a specific process:
1.  It calls the method at \`obj[Symbol.toPrimitive](hint)\` if it exists.
2.  If not, and the context ("hint") suggests a number, it tries \`obj.valueOf()\` first, then \`obj.toString()\`.
3.  If the context suggests a string, it tries \`obj.toString()\` first, then \`obj.valueOf()\`.

### 📚 Key Concepts
- **\`ToPrimitive\`**: A key abstract operation in the JavaScript specification.
`,

  // problem explanation--> 85
  "tvm-well-known-symbol-iterator": `
### 💡 Problem Breakdown
This problem introduces "well-known symbols," which are built-in \`Symbol\` values that JavaScript uses to define internal language behaviors. \`Symbol.iterator\` is the one that makes an object iterable, allowing it to be used with constructs like the \`for...of\` loop.

### ⚙️ Solution Walkthrough
A custom object is made iterable.
\`\`\`javascript
const range = {
  from: 1, to: 3,
  [Symbol.iterator]: function*() {
    for (let value = this.from; value <= this.to; value++) yield value;
  }
};
// Now it can be used with a for...of loop.
\`\`\`
### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
- **Iterable Protocol**: The set of rules an object must follow to be iterable.
`,

  // problem explanation--> 86
  "tvm-well-known-symbol-tostringtag": `
### 💡 Problem Breakdown
You can add the \`Symbol.toStringTag\` symbol as a property to your own objects to customize the string that is returned by the default \`Object.prototype.toString.call()\` method.

### ⚙️ Solution Walkthrough
A custom class gets a \`toStringTag\`.
\`\`\`javascript
class MyType {
  get [Symbol.toStringTag]() {
    return "MyCustomType";
  }
}
Object.prototype.toString.call(new MyType()); // "[object MyCustomType]"
\`\`\`
### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
`,

  // problem explanation--> 87
  "tvm-property-descriptor": `
### 💡 Problem Breakdown
Every property on an object has a set of internal attributes called a "property descriptor." The main attributes are: \`value\`, \`writable\`, \`enumerable\`, and \`configurable\`.

### ⚙️ Solution Walkthrough
\`Object.getOwnPropertyDescriptor()\` is used to inspect these attributes.
\`\`\`javascript
const obj = { a: 1 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
// descriptor is { value: 1, writable: true, enumerable: true, configurable: true }
\`\`\`
### 📚 Key Concepts
- **Property Descriptors**: The underlying metadata that controls property behavior.
`,

  // problem explanation--> 88
  "tvm-object-defineproperty": `
### 💡 Problem Breakdown
\`Object.defineProperty()\` is a low-level method that allows you to add or modify a property on an object with precise control over its descriptor attributes.

### ⚙️ Solution Walkthrough
A property is defined with specific attributes.
\`\`\`javascript
const obj = {};
Object.defineProperty(obj, 'a', { value: 1, writable: false });
\`\`\`
When attributes are not specified, they default to \`false\`.

### 📚 Key Concepts
- **\`Object.defineProperty()\`**: The core method for fine-grained control over object properties.
`,

  // problem explanation--> 89
  "tvm-non-writable-property": `
### 💡 Problem Breakdown
By setting the \`writable\` attribute of a property descriptor to \`false\`, you can create a read-only property.

### ⚙️ Solution Walkthrough
An attempt to change a non-writable property fails.
\`\`\`javascript
'use strict';
const obj = {};
Object.defineProperty(obj, 'a', { value: 1, writable: false });
// obj.a = 2; // Throws a TypeError in strict mode.
\`\`\`
### 📚 Key Concepts
- **\`writable\` attribute**: Controls whether a property's value can be changed.
`,

  // problem explanation--> 90
  "tvm-non-enumerable-property": `
### 💡 Problem Breakdown
By setting the \`enumerable\` attribute to \`false\`, you can create a property that is "hidden" from enumeration loops like \`for...in\` and methods like \`Object.keys()\`.

### ⚙️ Solution Walkthrough
A non-enumerable property is not included in \`Object.keys()\`.
\`\`\`javascript
const obj = {};
Object.defineProperty(obj, 'hidden', { value: 1, enumerable: false });
Object.keys(obj); // []
\`\`\`
### 📚 Key Concepts
- **\`enumerable\` attribute**: Controls whether a property appears in loops.
`,

  // problem explanation--> 91
  "tvm-non-configurable-property": `
### 💡 Problem Breakdown
A non-configurable property is one whose descriptor attributes cannot be changed and which cannot be deleted.

### ⚙️ Solution Walkthrough
An attempt to delete a non-configurable property fails.
\`\`\`javascript
'use strict';
const obj = {};
Object.defineProperty(obj, 'a', { value: 1, configurable: false });
// delete obj.a; // Throws a TypeError in strict mode.
\`\`\`
### 📚 Key Concepts
- **\`configurable\` attribute**: The most restrictive attribute, permanently locking a property's definition.
`,

  // problem explanation--> 92
  "tvm-getter-property": `
### 💡 Problem Breakdown
A "getter" is a special type of property, also known as an "accessor property." It's bound to a function that gets executed to compute a value every time the property is accessed.

### ⚙️ Solution Walkthrough
A getter is defined to compute a value.
\`\`\`javascript
const obj = {
  _a: 1,
  get a() { return this._a * 2; }
};
obj.a; // 2
\`\`\`
### 📚 Key Concepts
- **Accessor Properties**: Getters and setters, which execute functions on property access.
`,

  // problem explanation--> 93
  "tvm-setter-property": `
### 💡 Problem Breakdown
A "setter" is the counterpart to a getter. It's a function that gets executed whenever there's an attempt to assign a value to the property.

### ⚙️ Solution Walkthrough
A setter is used to validate input.
\`\`\`javascript
const obj = {
  _val: 0,
  set value(v) { if (typeof v === 'number') this._val = v; }
};
obj.value = 10;   // Setter is called
obj.value = 'ten'; // Setter is called, but validation fails
\`\`\`
### 📚 Key Concepts
- **Accessor Properties**: Getters and setters for controlled property access.
`,

  // problem explanation--> 94
  "tvm-prototype-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about JavaScript's core inheritance mechanism. Every object has an internal link to another object, called its **prototype**. If a property is not found on the object itself, the search continues on its prototype.

### 📚 Key Concepts
- **Prototype**: The object from which another object inherits properties.
`,

  // problem explanation--> 95
  "tvm-prototype-chain": `
### 💡 Problem Breakdown
The **prototype chain** is the linked list of prototypes that an object inherits from. The lookup process for a property continues up this chain until the property is found or the end of the chain (\`null\`) is reached.

### ⚙️ Solution Walkthrough
The \`.toString()\` method is called on an empty object, which is found on \`Object.prototype\`.
\`\`\`javascript
({}).toString(); // Works, inherited from Object.prototype
\`\`\`
### 📚 Key Concepts
- **Prototype Chain**: The core of JavaScript's inheritance.
`,

  // problem explanation--> 96
  "tvm-object-create": `
### 💡 Problem Breakdown
\`Object.create()\` is a method that creates a brand new object, using an existing object as the prototype of the newly created object. This is a direct way to set up prototypal inheritance.

### ⚙️ Solution Walkthrough
An object \`child\` is created that inherits from \`parent\`.
\`\`\`javascript
const parent = { greet: () => "Hello" };
const child = Object.create(parent);
child.greet(); // "Hello"
\`\`\`
### 📚 Key Concepts
- **\`Object.create()\`**: A fundamental method for creating objects with a specific prototype.
`,

  // problem explanation--> 97
  "tvm-get-prototype-of": `
### 💡 Problem Breakdown
\`Object.getPrototypeOf()\` is the standard method for accessing an object's internal prototype link.

### ⚙️ Solution Walkthrough
The prototype of an object literal is inspected.
\`\`\`javascript
Object.getPrototypeOf({}) === Object.prototype; // true
\`\`\`
This shows that plain objects inherit from \`Object.prototype\`.

### 📚 Key Concepts
- **\`Object.getPrototypeOf()\`**: The standard way to inspect an object's prototype.
`,

  // problem explanation--> 98
  "tvm-null-prototype-object": `
### 💡 Problem Breakdown
Using \`Object.create(null)\` creates an object that does not inherit from \`Object.prototype\`. This makes it a "pure" dictionary with no inherited properties or methods.

### ⚙️ Solution Walkthrough
A null-prototype object is created.
\`\`\`javascript
const map = Object.create(null);
// map.toString(); // Throws a TypeError
\`\`\`
This is a good practice for creating hash maps to prevent key collisions with built-in properties.

### 📚 Key Concepts
- **\`Object.create(null)\`**: A pattern for creating a secure, prototype-less object.
`,

  // problem explanation--> 99
  "tvm-hasownproperty": `
### 💡 Problem Breakdown
The \`.hasOwnProperty()\` method returns a boolean indicating whether the object has the specified property as its **own** property (as opposed to inheriting it).

### ⚙️ Solution Walkthrough
The method checks for an own and an inherited property.
\`\`\`javascript
const obj = { a: 1 };
obj.hasOwnProperty('a');        // true
obj.hasOwnProperty('toString'); // false
\`\`\`
This is more precise than the \`in\` operator.

### 📚 Key Concepts
- **\`.hasOwnProperty()\`**: A method for checking for "own" properties.
`,

  // problem explanation--> 100
  "tvm-object-hasown-static": `
### 💡 Problem Breakdown
\`Object.hasOwn()\` is a modern static method that is the recommended replacement for \`Object.prototype.hasOwnProperty()\`. It is safer because it works correctly even on objects created with \`Object.create(null)\` or objects that have a property named \`hasOwnProperty\`.

### ⚙️ Solution Walkthrough
\`Object.hasOwn()\` is used to check for properties.
\`\`\`javascript
const obj = Object.create({ inherited: true });
obj.own = true;
Object.hasOwn(obj, 'own');       // true
Object.hasOwn(obj, 'inherited'); // false
\`\`\`
### 📚 Key Concepts
- **\`Object.hasOwn()\`**: The modern, safe way to check for an object's own properties.
`,

  // problem explanation--> 101
  "tvm-array-is-object": `
### 💡 Problem Breakdown
This problem demonstrates a fundamental aspect of JavaScript's type system. Arrays are technically a specialized type of object. This means the \`typeof\` operator will return \`"object"\` for an array, which can be misleading.

### ⚙️ Solution Walkthrough
The solution shows the result of \`typeof\` and then introduces the correct method for checking if a value is an array.
\`\`\`javascript
const arr = [];
typeof arr; // "object"

// The correct way to check for an array is using Array.isArray()
Array.isArray(arr); // true
\`\`\`
It's crucial to use \`Array.isArray()\` for reliable array checks because it correctly identifies arrays from different realms (e.g., iframes), where an \`instanceof Array\` check might fail.

### 📚 Key Concepts
- **Data Types**: In JavaScript, arrays are objects.
- **\`Array.isArray()\`**: The standard, reliable method for checking if a value is an array.
`,

  // problem explanation--> 102
  "tvm-constructor-property": `
### 💡 Problem Breakdown
Every object created from a constructor (or class) inherits a \`.constructor\` property from its prototype. This property is a reference that points back to the constructor function that created the instance.

### ⚙️ Solution Walkthrough
The \`.constructor\` property of an instance is inspected.
\`\`\`javascript
function Person() {}
const p = new Person();

// The constructor property of 'p' points to the Person function.
p.constructor === Person; // true
\`\`\`
This can be useful for introspection or for creating a new instance of the same type as an existing instance.

### 📚 Key Concepts
- **\`.constructor\` Property**: A property on an object's prototype that points to the constructor function.
`,

  // problem explanation--> 103
  "tvm-coercion-in-relational-operators": `
### 💡 Problem Breakdown
When relational operators (\`<\`, \`>\`) are used on operands of different types, JavaScript performs type coercion. If one operand is a string and the other is a number, the string will be converted to a number for the comparison.

### ⚙️ Solution Walkthrough
A numeric string is compared to a number.
\`\`\`javascript
'10' > 5; // true, because '10' is converted to the number 10.
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: A behavior that applies to relational operators.
`,

  // problem explanation--> 104
  "tvm-infinity-type": `
### 💡 Problem Breakdown
This problem confirms the data type of the special global value \`Infinity\`. Although it represents a concept, in JavaScript it is a value of the \`number\` type.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is used on the \`Infinity\` global property.
\`\`\`javascript
typeof Infinity; // "number"
\`\`\`
This allows \`Infinity\` to be used in numerical comparisons and calculations.

### 📚 Key Concepts
- **Special Numeric Values**: JavaScript's \`number\` type includes finite numbers, \`Infinity\`, \`-Infinity\`, and \`NaN\`.
`,

  // problem explanation--> 105
  "tvm-negative-zero": `
### 💡 Problem Breakdown
JavaScript has two representations of zero: positive zero (\`0\`) and negative zero (\`-0\`). This problem demonstrates their existence and how they compare.

### ⚙️ Solution Walkthrough
Strict equality treats them as the same, but \`Object.is()\` distinguishes them.
\`\`\`javascript
0 === -0;           // true
Object.is(0, -0); // false
\`\`\`
Negative zero can arise from certain mathematical operations.

### 📚 Key Concepts
- **Floating-Point Representation**: The IEEE 754 standard defines both +0 and -0.
`,

  // problem explanation--> 106
  "tvm-is-finite": `
### 💡 Problem Breakdown
This problem compares the global \`isFinite()\` function with the modern \`Number.isFinite()\`.
- **\`isFinite()\`**: Coerces its argument to a number before checking.
- **\`Number.isFinite()\`**: Does *not* coerce. It returns \`true\` only if the value is of type number and is finite.

### ⚙️ Solution Walkthrough
The two functions are compared.
\`\`\`javascript
isFinite('123');           // true (coerced)
Number.isFinite('123'); // false (not a number type)
\`\`\`
\`Number.isFinite()\` is generally safer as it avoids unexpected coercion.

### 📚 Key Concepts
- **Type Coercion**: A key difference between the older global functions and newer static methods on the \`Number\` object.
`,

  // problem explanation--> 107
  "tvm-number-is-safe-integer": `
### 💡 Problem Breakdown
JavaScript's standard \`Number\` type can only safely represent integers up to \`Number.MAX_SAFE_INTEGER\`. Beyond this, precision can be lost. The \`Number.isSafeInteger()\` method is used to check if a number is within this safe range.

### ⚙️ Solution Walkthrough
A safe and an unsafe integer are checked.
\`\`\`javascript
Number.isSafeInteger(9007199254740991); // true
Number.isSafeInteger(9007199254740992); // false
\`\`\`
### 📚 Key Concepts
- **Floating-Point Precision**: Understanding the limits of standard numbers.
`,

  // problem explanation--> 108
  "tvm-max-safe-integer": `
### 💡 Problem Breakdown
This problem shows the largest integer that can be safely represented with a JavaScript \`Number\`. Any integer larger than this may lose precision.

### ⚙️ Solution Walkthrough
The constant is displayed and an operation that exceeds it is shown.
\`\`\`javascript
const max = Number.MAX_SAFE_INTEGER; // 9007199254740991
max + 1 === max + 2; // true! Precision is lost.
\`\`\`
For larger integers, you must use the \`BigInt\` type.

### 📚 Key Concepts
- **\`Number.MAX_SAFE_INTEGER\`**: A constant representing the upper bound of safe integers.
`,

  // problem explanation--> 109
  "tvm-string-coercion-via-template": `
### 💡 Problem Breakdown
When you embed a non-string value inside a template literal (\`\${...}\`), JavaScript automatically performs a string coercion on that value. This is equivalent to calling the \`.toString()\` method on it.

### ⚙️ Solution Walkthrough
An array is embedded in a template literal.
\`\`\`javascript
const arr = [1, 2];
const str = \`My array: \${arr}\`; // "My array: 1,2"
\`\`\`
### 📚 Key Concepts
- **String Interpolation**: A feature of template literals.
- **Type Coercion**: An implicit string conversion.
`,

  // problem explanation--> 110
  "tvm-bitwise-and-coercion": `
### 💡 Problem Breakdown
All bitwise operators in JavaScript work on 32-bit signed integers. If you use a floating-point number as an operand, it will first be coerced into a 32-bit integer by truncating the decimal part.

### ⚙️ Solution Walkthrough
A bitwise operation is performed on floats.
\`\`\`javascript
5.5 & 3.3; // Becomes 5 & 3, which is 1
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: Bitwise operators trigger integer coercion.
`,

  // problem explanation--> 111
  "tvm-instanceof-pitfall-realms": `
### 💡 Problem Breakdown
This is a conceptual problem. A "realm" is a distinct global environment. An iframe or a Web Worker has a different realm than the main page. This means they have their own global object, their own constructors (\`Array\`, \`Object\`, etc.). An array created in an iframe is an instance of the iframe's \`Array\`, not the main page's \`Array\`. Therefore, \`instanceof Array\` will return \`false\`.

### 📚 Key Concepts
- **Realms**: Separate global environments in JavaScript.
- **\`Array.isArray()\`**: The reliable solution, as it works across realms.
`,

  // problem explanation--> 112
  "tvm-object-tostring-type-check": `
### 💡 Problem Breakdown
This problem shows a classic, highly reliable trick for determining the precise internal type of a JavaScript value. Calling \`Object.prototype.toString.call(value)\` returns a string in the format \`[object Type]\`.

### ⚙️ Solution Walkthrough
The method is used on different data types.
\`\`\`javascript
Object.prototype.toString.call([]);        // "[object Array]"
Object.prototype.toString.call(null);     // "[object Null]"
\`\`\`
This is more specific than the \`typeof\` operator.

### 📚 Key Concepts
- **Introspection**: A technique for examining the type of an object at runtime.
`,

  // problem explanation--> 113
  "tvm-primitive-property-access": `
### 💡 Problem Breakdown
This demonstrates the "autoboxing" feature. You can access properties on primitives (like \`.length\` on a string), but you cannot assign new properties to them.

### ⚙️ Solution Walkthrough
An attempt is made to assign a property to a string.
\`\`\`javascript
let str = "hi";
str.prop = true; // Fails silently in non-strict mode
console.log(str.prop); // undefined
\`\`\`
The assignment happens on a temporary wrapper object that is immediately discarded.

### 📚 Key Concepts
- **Autoboxing**: The implicit wrapping of primitives.
`,

  // problem explanation--> 114
  "tvm-well-known-symbol-hasinstance": `
### 💡 Problem Breakdown
This is an advanced conceptual problem. You can customize the behavior of the \`instanceof\` operator for a class by implementing a static method with the well-known symbol \`Symbol.hasInstance\`.

### ⚙️ Solution Walkthrough
A class customizes the \`instanceof\` check.
\`\`\`javascript
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
[] instanceof MyArray; // true, because our custom logic was used.
\`\`\`
### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into internal language behaviors.
`,

  // problem explanation--> 115
  "tvm-bigint-division": `
### 💡 Problem Breakdown
This problem shows that division with \`BigInt\` values performs integer division, similar to \`Math.floor()\` in regular number arithmetic. Any fractional part is truncated.

### ⚙️ Solution Walkthrough
A BigInt division is performed.
\`\`\`javascript
10n / 3n; // 3n
\`\`\`
### 📚 Key Concepts
- **\`BigInt\`**: A numeric type for arbitrary-precision integer arithmetic.
`,

  // problem explanation--> 116
  "tvm-truthiness-of-string-false": `
### 💡 Problem Breakdown
This problem highlights a common point of confusion. A value's "truthiness" is determined by whether it is on the list of six "falsy" values. The non-empty string \`"false"\` is not on that list, so it is a truthy value.

### ⚙️ Solution Walkthrough
The truthiness of the string is checked.
\`\`\`javascript
if ('false') {
  // This code block will execute.
}
Boolean('false'); // true
\`\`\`
### 📚 Key Concepts
- **Truthy vs. Falsy**: A core concept in JavaScript's conditional logic.
`,

  // problem explanation--> 117
  "tvm-abstract-equality-algorithm": `
### 💡 Problem Breakdown
This is a conceptual problem about the rules for loose equality (\`==\`). The Abstract Equality Comparison Algorithm in the ECMAScript specification is a complex set of rules. The key takeaway is that it performs type conversions in a specific order:
- If types are the same, it's like \`===\`.
- \`null == undefined\` is a special case.
- If number and string, it converts the string to a number.
- If boolean, it converts the boolean to a number first.
- If object and primitive, it converts the object to a primitive.

### 📚 Key Concepts
- **ECMAScript Specification**: The official document that defines the JavaScript language.
`,

  // problem explanation--> 118
  "tvm-same-value-zero-algorithm": `
### 💡 Problem Breakdown
This is a conceptual problem about an equality algorithm used internally by some JavaScript features, notably \`Set\` and \`Map\` for key comparison. Same-Value-Zero is almost identical to strict equality (\`===\`), with one difference: it treats \`+0\` and \`-0\` as equal.

### ⚙️ Solution Walkthrough
- \`Object.is(0, -0)\` is \`false\`.
- The Same-Value-Zero algorithm would consider them equal.
- \`NaN\` is treated as equal to \`NaN\`, just like \`Object.is\`.

### 📚 Key Concepts
- **Equality Algorithms**: JavaScript has four distinct equality algorithms: \`==\`, \`===\`, \`Object.is\`, and Same-Value-Zero.
`,

  // problem explanation--> 119
  "tvm-coercion-with-alert": `
### 💡 Problem Breakdown
This is a conceptual problem. When a non-string value is passed to a function that expects a string, like the browser's \`alert()\`, JavaScript implicitly converts the value to a string. For an array, this is done by calling its \`.toString()\` method, which is equivalent to \`.join(',')\`.

### ⚙️ Solution Walkthrough
Passing an array to \`alert\`.
\`\`\`javascript
alert([1, 2, 3]); // The alert box will display the string "1,2,3".
\`\`\`
### 📚 Key Concepts
- **Implicit Coercion**: An automatic conversion performed by the language.
`,

  // problem explanation--> 120
  "tvm-json-stringify-undefined": `
### 💡 Problem Breakdown
The \`JSON.stringify\` function has specific rules for handling the \`undefined\` value.
- If \`undefined\` is a value in an object property, that entire property is omitted.
- If \`undefined\` is an element in an array, it is converted to \`null\`.

### ⚙️ Solution Walkthrough
An object with \`undefined\` values is serialized.
\`\`\`javascript
const data = { a: undefined, b: [undefined, 1] };
JSON.stringify(data); // '{"b":[null,1]}'
\`\`\`
### 📚 Key Concepts
- **JSON Serialization**: The process has specific rules for special JavaScript values.
`,

  // problem explanation--> 121
  "tvm-object-property-access-order": `
### 💡 Problem Breakdown
This is a conceptual problem. When multiple properties are accessed in an expression (like destructuring or spread), the operations are performed in the order the properties are defined in the source object itself, not the order they appear in the pattern.

### ⚙️ Solution Walkthrough
A destructuring pattern accesses properties in a different order than their definition.
\`\`\`javascript
const source = {
  get a() { console.log('get a'); },
  get b() { console.log('get b'); }
};
const { b, a } = source;
// Console output: 'get a', then 'get b'
\`\`\`
### 📚 Key Concepts
- **Property Enumeration Order**: While not always guaranteed, modern engines have a consistent order for simple object properties.
`,

  // problem explanation--> 122
  "tvm-number-epsilon": `
### 💡 Problem Breakdown
\`Number.EPSILON\` is a constant representing the smallest difference between 1 and the very next representable floating-point number greater than 1. It is used as a tolerance value for comparing floating-point numbers to account for their inherent imprecision.

### ⚙️ Solution Walkthrough
The constant is used to compare \`0.1 + 0.2\` with \`0.3\`.
\`\`\`javascript
Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON; // true
\`\`\`
### 📚 Key Concepts
- **Floating-Point Arithmetic**: A fundamental concept in computer science.
- **\`Number.EPSILON\`**: The standard way to define a tolerance for float comparisons.
`,

  // problem explanation--> 123
  "tvm-well-known-symbol-isconcatspreadable": `
### 💡 Problem Breakdown
This is a conceptual problem about a well-known symbol, \`Symbol.isConcatSpreadable\`. This boolean property controls whether an object should be "flattened" when passed to \`Array.prototype.concat()\`.

### ⚙️ Solution Walkthrough
An array-like object is made non-spreadable.
\`\`\`javascript
const arr = [3, 4];
arr[Symbol.isConcatSpreadable] = false;
[1, 2].concat(arr); // [1, 2, [3, 4]]
\`\`\`
### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
`,

  // problem explanation--> 124
  "tvm-proxy-for-type-validation": `
### 💡 Problem Breakdown
A \`Proxy\` is an object that wraps another object and allows you to intercept fundamental operations. A \`set\` trap can be used to validate data before it is assigned to a property.

### ⚙️ Solution Walkthrough
A proxy validates that \`age\` is a number.
\`\`\`javascript
const handler = {
  set(obj, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number.');
    }
    return Reflect.set(...arguments);
  }
};
\`\`\`
### 📚 Key Concepts
- **Proxy \`set\` Trap**: A powerful hook for data validation.
`,

  // problem explanation--> 125
  "tvm-globalthis": `
### 💡 Problem Breakdown
\`globalThis\` (ES2020) provides a standard, environment-agnostic way to access the global object. Previously, this was \`window\` in browsers, \`global\` in Node.js, and \`self\` in Web Workers.

### ⚙️ Solution Walkthrough
The \`globalThis\` property is accessed.
\`\`\`javascript
// In a browser:
globalThis === window; // true
\`\`\`
### 📚 Key Concepts
- **\`globalThis\`**: A standard property for accessing the global object.
`,

  // problem explanation--> 126
  "tvm-max-value-constant": `
### 💡 Problem Breakdown
\`Number.MAX_VALUE\` is a constant representing the largest positive number that can be represented in JavaScript. Any number larger than this is represented as \`Infinity\`.

### ⚙️ Solution Walkthrough
The constant is displayed.
\`\`\`javascript
Number.MAX_VALUE; // approx 1.797e+308
Number.MAX_VALUE * 2; // Infinity
\`\`\`
### 📚 Key Concepts
- **Number Limits**: Understanding the bounds of JavaScript's \`Number\` type.
`,

  // problem explanation--> 127
  "tvm-min-value-constant": `
### 💡 Problem Breakdown
\`Number.MIN_VALUE\` is a constant representing the smallest positive number closest to zero that can be represented, not the most negative number.

### ⚙️ Solution Walkthrough
The constant is displayed.
\`\`\`javascript
Number.MIN_VALUE; // 5e-324
\`\`\`
### 📚 Key Concepts
- **Number Limits**: Understanding the precision limits of JavaScript's \`Number\` type.
`,

  // problem explanation--> 128
  "tvm-infinity-arithmetic": `
### 💡 Problem Breakdown
\`Infinity\` has special rules for arithmetic operations.
- \`Infinity + Infinity\` is \`Infinity\`.
- \`Infinity - Infinity\` is \`NaN\`.
- \`Infinity * Infinity\` is \`Infinity\`.
- \`Infinity / Infinity\` is \`NaN\`.

### 📚 Key Concepts
- **\`Infinity\`**: A special numeric value with defined arithmetic behavior.
`,

  // problem explanation--> 129
  "tvm-tostring-on-prototype": `
### 💡 Problem Breakdown
You can override the default \`.toString()\` method on a custom object's prototype to control how instances are coerced to strings.

### ⚙️ Solution Walkthrough
A \`Person\` constructor's prototype is modified.
\`\`\`javascript
function Person(name) { this.name = name; }
Person.prototype.toString = function() { return this.name; };
const p = new Person('Alice');
String(p); // "Alice"
\`\`\`
### 📚 Key Concepts
- **Method Overriding**: Providing a custom implementation for an inherited method.
`,

  // problem explanation--> 130
  "tvm-coercion-in-bitwise-not": `
### 💡 Problem Breakdown
The bitwise NOT operator (\`~\`) coerces its operand to a 32-bit signed integer before inverting the bits. This means it can be used on strings that represent numbers.

### ⚙️ Solution Walkthrough
The operator is used on a numeric string.
\`\`\`javascript
~'5'; // -6
// '5' is coerced to the number 5, then ~5 is calculated.
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: A behavior of bitwise operators.
`,

  // problem explanation--> 131
  "tvm-is-prototype-of": `
### 💡 Problem Breakdown
The \`.isPrototypeOf()\` method checks if an object exists in another object's prototype chain. It is the counterpart to \`instanceof\`.

### ⚙️ Solution Walkthrough
The method is used to check the prototype relationship.
\`\`\`javascript
Object.prototype.isPrototypeOf({}); // true
Array.prototype.isPrototypeOf([]); // true
\`\`\`
### 📚 Key Concepts
- **\`.isPrototypeOf()\`**: A method for directly checking the prototype chain.
`,

  // problem explanation--> 132
  "tvm-finalization-registry-conceptual": `
### 💡 Problem Breakdown
A \`FinalizationRegistry\` provides a way to request a callback to be run after an object has been garbage collected. This is used for cleanup of external resources not managed by JS.

### 📚 Key Concepts
- **Garbage Collection**: The process that triggers the registry's callback.
- **Resource Management**: The primary use case for this advanced API.
`,

  // problem explanation--> 133
  "tvm-weakset-conceptual": `
### 💡 Problem Breakdown
A \`WeakSet\` is a collection that only stores objects weakly, allowing them to be garbage collected if no other references exist, thus preventing memory leaks.

### 📚 Key Concepts
- **Weak References**: A reference that does not prevent an object from being garbage collected.
`,

  // problem explanation--> 134
  "tvm-weakmap-conceptual": `
### 💡 Problem Breakdown
A \`WeakMap\` holds weak references to its keys (which must be objects), allowing for garbage collection and enabling patterns for private data.

### 📚 Key Concepts
- **\`WeakMap\`**: A key data structure for advanced patterns and memory management.
`,

  // problem explanation--> 135
  "tvm-structuredclone": `
### 💡 Problem Breakdown
\`structuredClone()\` is a modern, built-in API designed for creating deep clones of objects, handling many complex types that the JSON trick cannot.

### ⚙️ Solution Walkthrough
An object with a \`Date\` is cloned.
\`\`\`javascript
const obj = { date: new Date() };
const clone = structuredClone(obj);
clone.date instanceof Date; // true
\`\`\`
### 📚 Key Concepts
- **\`structuredClone()\`**: The standard API for deep cloning objects.
`,

  // problem explanation--> 136
  "tvm-json-clone-limitations": `
### 💡 Problem Breakdown
The \`JSON.stringify\`/\`JSON.parse\` trick for deep cloning is simple but has significant limitations. It cannot handle data types not supported by JSON.

### ⚙️ Solution Walkthrough
- \`undefined\`, functions, and symbols are omitted.
- \`Date\` objects are converted to strings.
- It cannot handle circular references.

### 📚 Key Concepts
- **JSON Format Limitations**: Understanding what data can and cannot be represented by JSON.
`,

  // problem explanation--> 137
  "tvm-well-known-symbol-match": `
### 💡 Problem Breakdown
An object can implement \`[Symbol.match]\` to provide custom behavior for \`String.prototype.match()\`.

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into internal language behaviors.
`,

  // problem explanation--> 138
  "tvm-well-known-symbol-replace": `
### 💡 Problem Breakdown
An object can implement \`[Symbol.replace]\` to provide custom logic for \`String.prototype.replace()\`.

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into internal language behaviors.
`,

  // problem explanation--> 139
  "tvm-well-known-symbol-search": `
### 💡 Problem Breakdown
An object can implement \`[Symbol.search]\` to provide custom logic for \`String.prototype.search()\`.

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into internal language behaviors.
`,

  // problem explanation--> 140
  "tvm-well-known-symbol-split": `
### 💡 Problem Breakdown
An object can implement \`[Symbol.split]\` to provide custom logic for \`String.prototype.split()\`.

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into internal language behaviors.
`,

  // problem explanation--> 141
  "tvm-reflect-ownkeys": `
### 💡 Problem Breakdown
\`Reflect.ownKeys()\` provides the most complete list of an object's own properties. It returns an array of both string-keyed and symbol-keyed properties.

### ⚙️ Solution Walkthrough
The method gets all keys.
\`\`\`javascript
const sym = Symbol('s');
const obj = { a: 1, [sym]: 2 };
Reflect.ownKeys(obj); // ['a', Symbol(s)]
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: \`Reflect.ownKeys()\` is the most comprehensive method for getting all own keys.
`,

  // problem explanation--> 142
  "tvm-proxy-get-own-property-descriptor-trap": `
### 💡 Problem Breakdown
A proxy's \`getOwnPropertyDescriptor\` trap intercepts \`Object.getOwnPropertyDescriptor(proxy, ...)\` allowing you to report custom property attributes.

### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 143
  "tvm-revocable-proxy": `
### 💡 Problem Breakdown
\`Proxy.revocable()\` creates a proxy that can be "turned off." It returns an object with \`proxy\` and \`revoke\` properties. Calling \`revoke()\` disables the proxy.

### 📚 Key Concepts
- **Revocable Proxy**: A proxy that can be disabled for resource management.
`,

  // problem explanation--> 144
  "tvm-object-fromEntries": `
### 💡 Problem Breakdown
\`Object.fromEntries()\` performs the inverse of \`Object.entries()\`. It takes an iterable of key-value pairs and creates a new object.

### ⚙️ Solution Walkthrough
An object is created from an array of pairs.
\`\`\`javascript
const entries = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(entries); // { a: 1, b: 2 }
\`\`\`
### 📚 Key Concepts
- **\`Object.fromEntries()\`**: A standard method for creating an object from an iterable.
`,

  // problem explanation--> 145
  "tvm-json-replacer-function": `
### 💡 Problem Breakdown
\`JSON.stringify\` can take a "replacer" function to customize serialization, for example, to filter out properties.

### ⚙️ Solution Walkthrough
A replacer function omits a property.
\`\`\`javascript
JSON.stringify(obj, (key, value) => key === 'secret' ? undefined : value);
\`\`\`
### 📚 Key Concepts
- **Replacer Function**: A powerful callback for customizing JSON serialization.
`,

  // problem explanation--> 146
  "tvm-json-reviver-function": `
### 💡 Problem Breakdown
\`JSON.parse\` can take a "reviver" function to customize deserialization, for example, to convert date strings back into Date objects.

### ⚙️ Solution Walkthrough
A reviver function converts a date string.
\`\`\`javascript
JSON.parse(json, (key, value) => key === 'date' ? new Date(value) : value);
\`\`\`
### 📚 Key Concepts
- **Reviver Function**: A callback for transforming data during JSON parsing.
`,

  // problem explanation--> 147
  "tvm-coercion-in-if": `
### 💡 Problem Breakdown
The expression inside an \`if()\` statement is implicitly coerced to a boolean to determine which block to execute.

### ⚙️ Solution Walkthrough
An empty string is checked.
\`\`\`javascript
if ("") { /* This is not executed */ }
\`\`\`
The empty string \`""\` is a falsy value.

### 📚 Key Concepts
- **Implicit Coercion**: An automatic conversion performed by the language.
`,

  // problem explanation--> 148
  "tvm-coercion-with-bitwise-or": `
### 💡 Problem Breakdown
Bitwise operators coerce their operands to 32-bit signed integers. This has the side effect of truncating any decimal part.

### ⚙️ Solution Walkthrough
A bitwise OR is used on a float.
\`\`\`javascript
10.9 | 0; // 10
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: A side effect of bitwise operations.
`,

  // problem explanation--> 149
  "tvm-primitive-property-assignment": `
### 💡 Problem Breakdown
Assigning a new property to a primitive value fails silently in non-strict mode because the assignment happens on a temporary wrapper object which is then discarded.

### ⚙️ Solution Walkthrough
A property is assigned to a string.
\`\`\`javascript
let str = "hi";
str.prop = true;
console.log(str.prop); // undefined
\`\`\`
### 📚 Key Concepts
- **Autoboxing**: The implicit wrapping of primitives.
`,

  // problem explanation--> 150
  "tvm-number-isinteger": `
### 💡 Problem Breakdown
\`Number.isInteger()\` is the reliable way to check if a value is an integer. It does not perform type coercion.

### ⚙️ Solution Walkthrough
The function is used on different values.
\`\`\`javascript
Number.isInteger(10);   // true
Number.isInteger(10.5); // false
Number.isInteger('10'); // false
\`\`\`
### 📚 Key Concepts
- **\`Number.isInteger()\`**: A strict check for integer values.
`,

  // problem explanation--> 151
  "tvm-proxy-construct-trap": `
### 💡 Problem Breakdown
A proxy's \`construct\` trap intercepts the \`new\` operator, allowing you to customize object instantiation.

### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 152
  "tvm-proxy-delete-trap": `
### 💡 Problem Breakdown
A proxy's \`deleteProperty\` trap intercepts the \`delete\` operator, allowing you to prevent deletion or add custom logic.

### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 153
  "tvm-proxy-get-prototype-of-trap": `
### 💡 Problem Breakdown
A proxy's \`getPrototypeOf\` trap intercepts \`Object.getPrototypeOf()\`, allowing you to report a custom prototype.

### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 154
  "tvm-proxy-set-prototype-of-trap": `
### 💡 Problem Breakdown
A proxy's \`setPrototypeOf\` trap intercepts \`Object.setPrototypeOf()\`, allowing you to prevent prototype changes.

### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 155
  "tvm-proxy-is-extensible-trap": `
### 💡 Problem Breakdown
A proxy's \`isExtensible\` trap intercepts \`Object.isExtensible()\`, allowing you to report a custom extensibility status.

### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 156
  "tvm-proxy-prevent-extensions-trap": `
### 💡 Problem Breakdown
A proxy's \`preventExtensions\` trap intercepts \`Object.preventExtensions()\`.

### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 157
  "tvm-proxy-invariants-conceptual": `
### 💡 Problem Breakdown
Proxy traps must obey certain rules (invariants) to maintain language consistency. For example, a trap cannot report a non-configurable property as deleted.

### 📚 Key Concepts
- **Proxy Invariants**: Rules that ensure proxies do not break the fundamental semantics of JavaScript objects.
`,

  // problem explanation--> 158
  "tvm-reflect-api-conceptual": `
### 💡 Problem Breakdown
\`Reflect\` is a built-in object whose methods (e.g., \`Reflect.get\`) correspond to proxy traps and provide the default behavior for those operations. It's best practice to use them inside traps.

### 📚 Key Concepts
- **\`Reflect\`**: A standard library for meta-programming that mirrors the proxy traps.
`,

  // problem explanation--> 159
  "tvm-reflect-get-set": `
### 💡 Problem Breakdown
\`Reflect.get()\` and \`Reflect.set()\` are the functional equivalents of property access and assignment.

### ⚙️ Solution Walkthrough
The methods are used to access properties.
\`\`\`javascript
const obj = { a: 1 };
Reflect.set(obj, 'a', 2);
Reflect.get(obj, 'a'); // 2
\`\`\`
### 📚 Key Concepts
- **\`Reflect\` API**: A library of methods for meta-programming.
`,

  // problem explanation--> 160
  "tvm-reflect-construct": `
### 💡 Problem Breakdown
\`Reflect.construct()\` is the functional equivalent of the \`new\` operator.

### ⚙️ Solution Walkthrough
An instance is created using \`Reflect\`.
\`\`\`javascript
class C { constructor(public a) {} }
const instance = Reflect.construct(C, [10]);
\`\`\`
### 📚 Key Concepts
- **\`Reflect\` API**: A library of methods for meta-programming.
`,

  // problem explanation--> 161
  "tvm-reflect-apply": `
### 💡 Problem Breakdown
\`Reflect.apply()\` is the functional equivalent of \`Function.prototype.apply()\`.

### ⚙️ Solution Walkthrough
A function is called using \`Reflect\`.
\`\`\`javascript
Reflect.apply(Math.max, null, [1, 5, 2]); // 5
\`\`\`
### 📚 Key Concepts
- **\`Reflect\` API**: A library of methods for meta-programming.
`,

  // problem explanation--> 162
  "tvm-reflect-has": `
### 💡 Problem Breakdown
\`Reflect.has()\` is the functional equivalent of the \`in\` operator.

### ⚙️ Solution Walkthrough
Property existence is checked with \`Reflect\`.
\`\`\`javascript
Reflect.has({ a: 1 }, 'a'); // true
\`\`\`
### 📚 Key Concepts
- **\`Reflect\` API**: A library of methods for meta-programming.
`,

  // problem explanation--> 163
  "tvm-deep-clone-and-prototypes": `
### 💡 Problem Breakdown
Deep cloning methods like \`structuredClone\` or the JSON trick do not preserve an object's prototype; they create plain objects.

### 📚 Key Concepts
- **Deep Clone**: Typically only copies own data properties, not the prototype.
`,

  // problem explanation--> 164
  "tvm-well-known-symbol-species": `
### 💡 Problem Breakdown
\`Symbol.species\` allows a class to control the constructor used for new instances created by its methods (like \`.map()\`).

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into internal language behaviors.
`,

  // problem explanation--> 165
  "tvm-well-known-symbol-unscopables": `
### 💡 Problem Breakdown
A legacy feature to hide properties from the deprecated \`with\` statement. \`Array.prototype[Symbol.unscopables]\` hides newer methods.

### 📚 Key Concepts
- **\`with\` Statement**: A deprecated feature to be avoided.
`,

  // problem explanation--> 166
  "tvm-json-and-bigint-error": `
### 💡 Problem Breakdown
\`JSON.stringify(10n)\` throws a \`TypeError\` because BigInts cannot be serialized to JSON by default.

### 📚 Key Concepts
- **JSON Serialization**: Has specific rules for different JavaScript types.
`,

  // problem explanation--> 167
  "tvm-number-is-integer-vs-modulo": `
### 💡 Problem Breakdown
\`Number.isInteger()\` is stricter than \`n % 1 === 0\`. \`isInteger\` returns false for non-number types, while the modulo trick will coerce them first.

### 📚 Key Concepts
- **Strictness**: \`Number.isInteger\` provides a more reliable check without coercion.
`,

  // problem explanation--> 168
  "tvm-min-safe-integer": `
### 💡 Problem Breakdown
\`Number.MIN_SAFE_INTEGER\` is the smallest integer \`-(2^53 - 1)\` that can be safely represented.

### 📚 Key Concepts
- **Number Limits**: Understanding the bounds of JavaScript's \`Number\` type.
`,

  // problem explanation--> 169
  "tvm-epsilon-constant": `
### 💡 Problem Breakdown
\`Number.EPSILON\` is the difference between 1 and the smallest floating-point number greater than 1, used for float comparisons.

### 📚 Key Concepts
- **Floating-Point Arithmetic**: \`EPSILON\` provides a standard tolerance.
`,

  // problem explanation--> 170
  "tvm-coercion-in-equality-null": `
### 💡 Problem Breakdown
\`null\` is only loosely equal (\`==\`) to \`undefined\`. It is not loosely equal to \`0\`, \`false\`, or \`""\`.

### 📚 Key Concepts
- **Loose Equality (\`==\`)**: Has specific, sometimes unintuitive rules.
`,

  // problem explanation--> 171
  "tvm-coercion-with-empty-array": `
### 💡 Problem Breakdown
\`Number([])\` coerces to \`0\` because \`[].toString()\` is \`""\`, and \`Number("")\` is \`0\`. \`String([])\` is \`""\`.

### 📚 Key Concepts
- **Object to Primitive Coercion**: An array first converts to a string.
`,

  // problem explanation--> 172
  "tvm-coercion-with-single-element-array": `
### 💡 Problem Breakdown
\`[5]\` coerces to the string \`"5"\`, which then coerces to the number \`5\`. So, \`[5] == 5\` is true.

### 📚 Key Concepts
- **Object to Primitive Coercion**: An array first converts to a string.
`,

  // problem explanation--> 173
  "tvm-prototype-of-null-object": `
### 💡 Problem Breakdown
An object created with \`Object.create(null)\` has \`null\` as its prototype, ending the chain.

### ⚙️ Solution Walkthrough
\`Object.getPrototypeOf(Object.create(null))\` returns \`null\`.

### 📚 Key Concepts
- **Prototype Chain**: Can be explicitly terminated with \`null\`.
`,

  // problem explanation--> 174
  "tvm-well-known-symbol-species-example": `
### 💡 Problem Breakdown
A subclass of Array can use \`Symbol.species\` to make methods like \`.map()\` return a base Array instead of a subclass instance.

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into internal language behaviors.
`,

  // problem explanation--> 175
  "tvm-proxy-and-this-keyword": `
### 💡 Problem Breakdown
Using \`Reflect\` methods inside traps ensures that the original \`this\` context is preserved when forwarding the operation to the target, which is a best practice.

### 📚 Key Concepts
- **\`Reflect\` API**: Essential for correctly implementing proxy traps.
`,

  // problem explanation--> 176
  "tvm-object-prototype-tostring": `
### 💡 Problem Breakdown
The default \`toString\` method on \`Object.prototype\` returns the string \`"[object Object]"\`.

### 📚 Key Concepts
- **Default Methods**: Built-in methods on \`Object.prototype\`.
`,

  // problem explanation--> 177
  "tvm-array-prototype-tostring": `
### 💡 Problem Breakdown
The \`toString\` method on \`Array.prototype\` is equivalent to calling \`.join(',')\`.

### ⚙️ Solution Walkthrough
\`[1,2,3].toString()\` returns \`"1,2,3"\`.

### 📚 Key Concepts
- **Method Overriding**: \`Array\` provides its own \`toString\` method.
`,

  // problem explanation--> 178
  "tvm-function-prototype-tostring": `
### 💡 Problem Breakdown
Calling \`.toString()\` on a function returns its source code as a string.

### 📚 Key Concepts
- **Function Introspection**: A way to inspect a function's source.
`,

  // problem explanation--> 179
  "tvm-coercion-with-boolean-object": `
### 💡 Problem Breakdown
\`new Boolean(false)\` is an object, and all objects are truthy. Therefore, \`if (new Boolean(false)) { ... }\` will execute.

### 📚 Key Concepts
- **Wrapper Objects**: Are objects and therefore truthy.
`,

  // problem explanation--> 180
  "tvm-coercion-with-number-object": `
### 💡 Problem Breakdown
\`new Number(0)\` is an object. \`new Number(0) === 0\` is false. But \`new Number(0) == 0\` is true because the object is coerced to its primitive value for loose equality.

### 📚 Key Concepts
- **Wrapper Objects**: Have complex equality behavior.
`,

  // problem explanation--> 181
  "tvm-numeric-separator-syntax": `
### 💡 Problem Breakdown
Numeric separators (\`_\`) are a modern syntax for improving the readability of large numbers. The engine ignores them.

### ⚙️ Solution Walkthrough
\`1_000_000\` is exactly the same as \`1000000\`.

### 📚 Key Concepts
- **Syntax Sugar**: A feature that improves readability without changing functionality.
`,

  // problem explanation--> 182
  "tvm-private-class-fields": `
### 💡 Problem Breakdown
Private class fields (\`#\`) provide true privacy. They are not accessible from outside the class.

### 📚 Key Concepts
- **Encapsulation**: A core OOP principle.
`,

  // problem explanation--> 183
  "tvm-private-class-methods": `
### 💡 Problem Breakdown
Private class methods (\`#\`) provide a way to define helper methods that are only callable from within the class.

### 📚 Key Concepts
- **Encapsulation**: Hiding implementation details.
`,

  // problem explanation--> 184
  "tvm-static-class-fields": `
### 💡 Problem Breakdown
Static fields are properties of the class itself, not instances. They are accessed via \`ClassName.fieldName\`.

### 📚 Key Concepts
- **Static Members**: Belong to the class, not instances.
`,

  // problem explanation--> 185
  "tvm-static-private-class-fields": `
### 💡 Problem Breakdown
A combination of \`static\` and \`#\` creates a field that is private to the class itself.

### 📚 Key Concepts
- **Encapsulation**: For static members.
`,

  // problem explanation--> 186
  "tvm-static-class-methods": `
### 💡 Problem Breakdown
Static methods are functions on the class itself, not instances. They are often used for utility functions.

### 📚 Key Concepts
- **Static Members**: Belong to the class, not instances.
`,

  // problem explanation--> 187
  "tvm-static-initialization-blocks": `
### 💡 Problem Breakdown
A \`static {}\` block runs once when the class is defined, allowing for complex multi-statement initialization of static properties.

### 📚 Key Concepts
- **\`static\` Blocks**: A feature for complex static initialization.
`,

  // problem explanation--> 188
  "tvm-error-cause-property": `
### 💡 Problem Breakdown
The \`cause\` property on an \`Error\` object preserves the original error when wrapping it in a new, higher-level error.

### 📚 Key Concepts
- **Error Chaining**: A modern pattern for preserving error context.
`,

  // problem explanation--> 189
  "tvm-regexp-hasindices-flag": `
### 💡 Problem Breakdown
The \`/d\` flag on a regex causes the result of \`.exec()\` to have an \`.indices\` property showing the start/end indices of capture groups.

### 📚 Key Concepts
- **Regular Expressions**: New features are added to the language.
`,

  // problem explanation--> 190
  "tvm-at-method-on-arrays": `
### 💡 Problem Breakdown
The \`.at()\` method allows for accessing array elements with negative indices, where \`.at(-1)\` is the last element.

### 📚 Key Concepts
- **New Array Methods**: \`.at()\` provides more convenient element access.
`,

  // problem explanation--> 191
  "tvm-at-method-on-strings": `
### 💡 Problem Breakdown
The \`.at()\` method also works on strings, allowing \`str.at(-1)\` to get the last character.

### 📚 Key Concepts
- **New String Methods**: A consistent API with arrays.
`,

  // problem explanation--> 192
  "tvm-private-field-in-operator-check": `
### 💡 Problem Breakdown
\`#field in obj\` is a reliable way to check if \`obj\` is a true instance of the class that defines \`#field\`.

### 📚 Key Concepts
- **Brand Checking**: A robust pattern for type checking class instances.
`,

  // problem explanation--> 193
  "tvm-class-fields-initialization-order": `
### 💡 Problem Breakdown
Class fields are initialized *before* the constructor body runs.

### 📚 Key Concepts
- **Class Initialization Order**: A specific sequence that ensures properties are available when the constructor code executes.
`,

  // problem explanation--> 194
  "tvm-top-level-await": `
### 💡 Problem Breakdown
Top-level \`await\` allows using \`await\` outside of an \`async\` function in ES modules, which is useful for async initialization.

### 📚 Key Concepts
- **Top-Level \`await\`**: An ES module feature.
`,

  // problem explanation--> 195
  "tvm-promise-withresolvables": `
### 💡 Problem Breakdown
\`Promise.withResolvables()\` returns an object with a promise and its \`resolve\`/\`reject\` functions, simplifying patterns where settlement is controlled externally.

### 📚 Key Concepts
- **\`Promise.withResolvables()\`**: A new utility for creating promises.
`,

  // problem explanation--> 196
  "tvm-array-findlast": `
### 💡 Problem Breakdown
The \`.findLast()\` method iterates an array backwards to find the last element that satisfies a condition.

### 📚 Key Concepts
- **New Array Methods**: \`.findLast()\` provides a convenient reverse search.
`,

  // problem explanation--> 197
  "tvm-array-findlastindex": `
### 💡 Problem Breakdown
The \`.findLastIndex()\` method iterates an array backwards to find the index of the last element that satisfies a condition.

### 📚 Key Concepts
- **New Array Methods**: \`.findLastIndex()\` provides a convenient reverse index search.
`,

  // problem explanation--> 198
  "tvm-array-with": `
### 💡 Problem Breakdown
The \`.with(index, value)\` method returns a new array with the element at a given index replaced, providing an immutable alternative.

### 📚 Key Concepts
- **Immutability**: A new method for immutable array updates.
`,

  // problem explanation--> 199
  "tvm-array-tosorted": `
### 💡 Problem Breakdown
The \`.toSorted()\` method returns a new, sorted copy of an array without mutating the original, providing an immutable alternative to \`.sort()\`.

### 📚 Key Concepts
- **Immutability**: A new method for immutable sorting.
`,

  // problem explanation--> 200
  "tvm-array-toreversed": `
### 💡 Problem Breakdown
The \`.toReversed()\` method returns a new, reversed copy of an array without mutating the original, providing an immutable alternative to \`.reverse()\`.

### 📚 Key Concepts
- **Immutability**: A new method for immutable reversal.
`,
};
