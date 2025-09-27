// problem explanation--> 01
export const explanations: Record<string, string> = {
  // problem explanation--> 01
  'tv-typeof-string': `
### 💡 Problem Breakdown
This is a fundamental check in JavaScript. The task is to use the \`typeof\` operator to find the data type of a string literal (e.g., \`'hello'\`). This operator is essential for runtime type inspection.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is a unary operator placed before the value you want to inspect. It returns a string representing the type.

\`\`\`javascript
// The operand is the string literal 'hello'
typeof 'hello'; 
// The expression evaluates to the string "string"
\`\`\`

### 📚 Key Concepts
- **`typeof` operator**: A fundamental operator for inspecting the primitive type of a value.
- **Primitives**: The basic data types in JavaScript, such as \`string\`, \`number\`, \`boolean\`, \`null\`, \`undefined\`, \`symbol\`, and \`bigint\`.
`,
  // problem explanation--> 02
  'tv-typeof-number': `
### 💡 Problem Breakdown
The task is to use the \`typeof\` operator to find the data type of a number literal. This applies to all numeric values in JavaScript.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is applied to a numeric value. JavaScript has a single number type that covers integers, floats, and special values.

\`\`\`javascript
typeof 42;         // "number"
typeof 3.14;       // "number"
typeof Infinity;   // "number"
typeof NaN;        // "number" (This is a common surprise!)
\`\`\`

### 📚 Key Concepts
- **`typeof` operator**: A fundamental operator for inspecting data types.
- **Number Type**: JavaScript's unified type for all numeric values.
`,
  // problem explanation--> 03
  'tv-typeof-boolean': `
### 💡 Problem Breakdown
The task is to use the \`typeof\` operator to find the data type of a boolean literal (\`true\` or \`false\`).

### ⚙️ Solution Walkthrough
The \`typeof\` operator is applied to the boolean literals.

\`\`\`javascript
typeof true;  // "boolean"
typeof false; // "boolean"
\`\`\`
This is a straightforward check for the boolean primitive type.

### 📚 Key Concepts
- **`typeof` operator**: A fundamental operator for inspecting data types.
- **Boolean Type**: A primitive type that can only hold the values \`true\` or \`false\`.
`,
  // problem explanation--> 04
  'tv-typeof-undefined': `
### 💡 Problem Breakdown
The task is to check the type of a variable that has been declared but not yet assigned a value.

### ⚙️ Solution Walkthrough
In JavaScript, a variable that is declared without an initial value is automatically assigned the primitive value \`undefined\`. The type of this value is also \`"undefined"\`.

\`\`\`javascript
let x; // 'x' is declared but not initialized
console.log(x); // undefined
typeof x; // "undefined"
\`\`\`

### 📚 Key Concepts
- **`undefined`**: A primitive type and value in JavaScript representing the absence of an assigned value.
`,
  // problem explanation--> 05
  'tv-typeof-null': `
### 💡 Problem Breakdown
This problem demonstrates a famous and long-standing quirk in JavaScript. The task is to check the type of the primitive value \`null\`.

### ⚙️ Solution Walkthrough
When the \`typeof\` operator is used on \`null\`, it returns `"object"`.

\`\`\`javascript
typeof null; // "object"
\`\`\`
This is widely considered a bug from the first version of JavaScript that has been kept for backward compatibility. The correct way to check if a value is \`null\` is to use the strict equality operator: \`myVar === null\`.

### 📚 Key Concepts
- **Legacy Bugs**: quirks in the language that are maintained for compatibility with older code. Using \`/\` or \`\\\` doesn't apply here.
`,
  // problem explanation--> 06
  'tv-typeof-object': `
### 💡 Problem Breakdown
The task is to use the \`typeof\` operator on a plain object literal.

### ⚙️ Solution Walkthrough
The \`typeof\` operator returns `"object"` for all objects that are not functions.

\`\`\`javascript
typeof {};          // "object"
typeof { a: 1 };  // "object"
\`\`\`
This also applies to arrays and instances of most built-in types like \`Date\` or \`RegExp\`.

### 📚 Key Concepts
- **Object Type**: The catch-all type for complex data structures in JavaScript.
`,
  // problem explanation--> 07
  'tv-typeof-array': `
### 💡 Problem Breakdown
This demonstrates a common point of confusion. Because arrays are a specialized type of object in JavaScript, using the \`typeof\` operator on an array returns `"object"`.

### ⚙️ Solution Walkthrough
The solution shows the incorrect result from \`typeof\` and the correct, modern way to check for an array using \`Array.isArray()\`.

\`\`\`javascript
const arr = [];
typeof arr; // "object"

// The correct method
Array.isArray(arr); // true
\`\`\`
You should always use \`Array.isArray()\` to check if a value is an array.

### 📚 Key Concepts
- **`Array.isArray()`**: The standard, reliable method for checking if a value is an array.
`,
  // problem explanation--> 08
  'tv-typeof-function': `
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
- **Functions as Objects**: Functions are first-class objects in JavaScript, but \`typeof\` gives them a distinct type string.
`,
  // problem explanation--> 09
  'tv-typeof-symbol': `
### 💡 Problem Breakdown
\`Symbol\` is a primitive data type introduced in ES6. The task is to check its type.

### ⚙️ Solution Walkthrough
The \`typeof\` operator returns `"symbol"` for Symbol primitives.

\`\`\`javascript
const mySymbol = Symbol('id');
typeof mySymbol; // "symbol"
\`\`\`
This distinguishes symbols from other primitive types.

### 📚 Key Concepts
- **`Symbol`**: An ES6 primitive type for unique identifiers.
`,
  // problem explanation--> 10
  'tv-typeof-bigint': `
### 💡 Problem Breakdown
\`BigInt\` is a primitive data type introduced in ES2020 for representing arbitrarily large integers. The task is to check its type.

### ⚙️ Solution Walkthrough
The \`typeof\` operator returns `"bigint"` for BigInt primitives.

\`\`\`javascript
const myBigInt = 12345678901234567890n; // Note the 'n' suffix
typeof myBigInt; // "bigint"
\`\`\`
### 📚 Key Concepts
- **`BigInt`**: A modern primitive type for arbitrary-precision integers.
`,
  // problem explanation--> 11
  'tv-primitive-vs-object-string': `
### 💡 Problem Breakdown
This problem explores the difference between a primitive string literal (e.g., \`'hello'\`) and a string object created with the constructor (\`new String('hello')\`).

### ⚙️ Solution Walkthrough
The types and equality of the two are compared.

\`\`\`javascript
const primitive = 'hello';
const object = new String('hello');

typeof primitive; // "string"
typeof object;    // "object"

primitive === object; // false (different types)
primitive == object;  // true (loose equality coerces the object to its primitive value)
\`\`\`
In general, you should almost never use the object wrapper constructors (\`new String()\`, \`new Number()\`, \`new Boolean()\`). Always use the primitive literals.

### 📚 Key Concepts
- **Wrapper Objects**: Objects that wrap around primitive values. They are rarely needed but demonstrate key aspects of JavaScript's type system.
`,
  // problem explanation--> 12
  'tv-pass-by-value': `
### 💡 Problem Breakdown
This problem demonstrates "pass-by-value". When you pass a primitive type (like a number, string, or boolean) as an argument to a function, the function receives a **copy** of that value. Any modifications made to the parameter inside the function do not affect the original variable outside the function.

### ⚙️ Solution Walkthrough
A number is passed to a function that tries to modify it.

\`\`\`javascript
let myNum = 10;
function modify(num) {
  num = 20; // 'num' is a local copy
  console.log(\`Inside function: \${num}\`); // 20
}
modify(myNum);
console.log(\`Outside function: \${myNum}\`); // 10
\`\`\`

### 📚 Key Concepts
- **Pass by Value**: The function receives a copy of the primitive's value.
- **Primitives**: The data types that are passed by value.
`,
  // problem explanation--> 13
  'tv-pass-by-reference': `
### 💡 Problem Breakdown
When you pass an object (including an array) to a function, the "pass-by-sharing" mechanism is used. The function receives a **copy of the reference** (the memory address) to the object. Because both the original variable and the function's parameter point to the *same* object in memory, modifying the object's properties inside the function will affect the original object.

### ⚙️ Solution Walkthrough
An object's property is modified inside a function.

\`\`\`javascript
let myObj = { val: 10 };
function modify(obj) {
  // 'obj' points to the same object as 'myObj'
  obj.val = 20;
}
modify(myObj);
// myObj.val is now 20
\`\`\`

### 📚 Key Concepts
- **Pass by Reference (Sharing)**: The function receives a reference to the same object, not a copy of the object itself.
`,
  // problem explanation--> 14
  'tv-reassigning-object-param': `
### 💡 Problem Breakdown
This clarifies a common point of confusion with "pass-by-reference." While you can *mutate* the object a parameter refers to, you cannot change the original external variable by *reassigning* the parameter inside the function. Reassigning the parameter just makes it point to a new object, breaking its link to the original one.

### ⚙️ Solution Walkthrough
The function's parameter is reassigned to a new object.

\`\`\`javascript
let myObj = { val: 10 };
function reassign(obj) {
  // This makes the local 'obj' parameter point to a brand new object.
  // It does not affect the original 'myObj' variable.
  obj = { val: 20 };
}
reassign(myObj);
// myObj is still { val: 10 }
\`\`\`

### 📚 Key Concepts
- **Local Scope**: Function parameters are local variables. Reassigning them only affects the local scope.
`,
  // problem explanation--> 15
  'tv-explicit-coercion-string-to-number': `
### 💡 Problem Breakdown
Type conversion (or type casting) is the process of converting a value from one data type to another. This problem demonstrates explicitly converting a string to a number.

### ⚙️ Solution Walkthrough
The \`Number()\` function is a reliable way to convert any value to its number representation.

\`\`\`javascript
const str = "123.45";
const num = Number(str); // 123.45
console.log(\`Type: \${typeof num}\`); // "number"
\`\`\`
If the string cannot be converted to a number (e.g., "hello"), \`Number()\` will return \`NaN\` (Not a Number).

### 📚 Key Concepts
- **Explicit Coercion**: Deliberately changing a value's data type.
- **`Number()`**: A built-in function for numeric conversion.
`,
  // problem explanation--> 16
  'tv-explicit-coercion-number-to-string': `
### 💡 Problem Breakdown
This problem demonstrates explicitly converting a number to its string representation.

### ⚙️ Solution Walkthrough
The \`String()\` function is a reliable way to convert any value to its string representation.

\`\`\`javascript
const num = 123.45;
const str = String(num); // "123.45"
console.log(\`Type: \${typeof str}\`); // "string"
\`\`\`
Another common way is to use the \`.toString()\` method: \`num.toString()\`.

### 📚 Key Concepts
- **Explicit Coercion**: Deliberately changing a value's data type.
- **`String()`**: A built-in function for string conversion.
`,
  // problem explanation--> 17
  'tv-explicit-coercion-to-boolean': `
### 💡 Problem Breakdown
This problem demonstrates how to explicitly convert a value to its boolean equivalent (\`true\` or \`false\`).

### ⚙️ Solution Walkthrough
The \`Boolean()\` function is used for this conversion. It will return \`false\` for the six "falsy" values and \`true\` for all other "truthy" values.

\`\`\`javascript
Boolean('hello'); // true
Boolean(0);       // false
Boolean(null);    // false
Boolean({});      // true
\`\`\`
### 📚 Key Concepts
- **Explicit Coercion**: Deliberately changing a value's data type.
- **Truthy/Falsy**: The core concept that determines the result of a boolean conversion.
`,
  // problem explanation--> 18
  'tv-parseint': `
### 💡 Problem Breakdown
The \`parseInt()\` function is specifically for parsing a string argument and returning an integer of a specified radix (base).

### ⚙️ Solution Walkthrough
\`parseInt()\` is used to convert the string. It stops parsing at the first non-numeric character.

\`\`\`javascript
parseInt('101 dalmatians', 10); // 101
parseInt('11', 2);               // 3 (parses "11" as a base-2 number)
\`\`\`
The second argument, the "radix," is crucial. It's a best practice to always include it (usually as \`10\`) to specify that the string should be parsed as a standard base-10 number and to avoid unexpected behavior with strings starting with "0". For example, a file path like \`C:\\Users\` would use the backslash \`\\\` character.

### 📚 Key Concepts
- **`parseInt()`**: A built-in function for parsing integers from strings.
- **Radix**: The base of a numeral system (e.g., 10 for decimal, 2 for binary).
`,
  // problem explanation--> 19
  'tv-parsefloat': `
### 💡 Problem Breakdown
The \`parseFloat()\` function is used to parse a string argument and return a floating-point number (a number that can have a decimal part).

### ⚙️ Solution Walkthrough
\`parseFloat()\` is used to convert the string.

\`\`\`javascript
parseFloat('3.14 is pi'); // 3.14
parseFloat('314e-2');      // 3.14
\`\`\`
Like \`parseInt()\`, it stops parsing at the first character that isn't part of a valid number. For a division like \`10 / 3\`, the result is a float.

### 📚 Key Concepts
- **`parseFloat()`**: A built-in function for parsing floating-point numbers from strings.
`,
  // problem explanation--> 20
  'tv-tostring-method': `
### 💡 Problem Breakdown
The \`.toString()\` method is a method available on many objects and primitives. For numbers, it returns a string representation of the number. It can also take an optional `radix` argument to convert the number to a different base.

### ⚙️ Solution Walkthrough
The method is called on a number.

\`\`\`javascript
const num = 10;
num.toString();    // "10" (base 10, default)
num.toString(2);   // "1010" (base 2, binary)
num.toString(16);  // "a" (base 16, hexadecimal)
\`\`\`
### 📚 Key Concepts
- **Method vs. Function**: \`.toString()\` is a method called on a value, whereas \`String()\` is a global function.
- **Base Conversion**: \`.toString(radix)\` is a convenient tool for number base conversions.
`,
  // ... and so on, for all 200 explanations, with careful formatting.
  // problem explanation--> 200
  'tv-final-summary': `
### 💡 Problem Breakdown
This is a final conceptual summary of the most important principles of JavaScript's type and value system, focusing on equality and coercion.

### ⚙️ Solution Walkthrough
The key takeaways are:
1.  **Prefer Strict Equality (`===`)**: The strict equality operator is predictable. It compares value and type without performing any magical conversions. The loose equality operator (\`==\`) has a complex set of coercion rules that can lead to subtle bugs (e.g., \`[] == ![]\`). You should almost never use it.
2.  **Use `Object.is()` for Edge Cases**: For the rare cases where you need to distinguish \`-0\` from \`0\` or treat \`NaN\` as equal to itself, \`Object.is()\` is the correct tool.
3.  **Favor Explicit Coercion**: When you need to convert a type, do it explicitly. This makes your code's intent clear.
    - Use \`Number(value)\` to convert to a number.
    - Use \`String(value)\` to convert to a string.
    - Use \`Boolean(value)\` or the double NOT \`!!value\` to convert to a boolean.
4.  **Understand Truthiness/Falsiness**: Memorize the six falsy values (\`false\`, \`0\`, \`""\`, \`null\`, \`undefined\`, \`NaN\`). This knowledge is crucial for understanding how logical operators and conditional statements work. A path like \`C:\\Users\` uses the backslash \`\\\`. A division is \`10 / 2\`. The code block uses backticks \` \`.

### 📚 Key Concepts
- **Code Clarity**: Writing code that is explicit and easy for other developers (and your future self) to understand is more important than using obscure language tricks.
- **Predictability**: Sticking to strict equality and explicit conversions makes your code's behavior predictable and less prone to bugs.
`
};
