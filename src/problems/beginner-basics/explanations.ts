export const explanations: Record<string, string> = {
  // problem explanation--> 01
  "say-hello": `
### 💡 Problem Breakdown
This is a fundamental "Hello, World!" style problem. The goal is to create a reusable block of code (a function) that takes a name as input and produces a personalized greeting string.

### ⚙️ Solution Walkthrough
The solution uses a simple function that takes one parameter and returns a string created with a template literal.
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`
1.  **\`function greet(name)\`**: Defines a function named \`greet\` that accepts one argument, which will be stored in the parameter \`name\`.
2.  **Template Literal**: The string is created using backticks (\` \`). This allows us to embed variables directly into the string using the \`\${...}\` syntax.
3.  **\`return\`**: The \`return\` keyword sends the newly created string back as the result of the function call.

### 📚 Key Concepts
- **Functions**: Reusable blocks of code that perform a specific task.
- **Parameters**: Variables in a function definition that act as placeholders for the values (arguments) a function receives.
- **Template Literals**: A modern and readable way to create strings and embed expressions.
`,

  // problem explanation--> 02
  "simple-addition": `
### 💡 Problem Breakdown
This problem focuses on creating a function that performs a basic mathematical operation. It needs to accept two numbers as input and return their sum.

### ⚙️ Solution Walkthrough
The function is defined with two parameters, \`num1\` and \`num2\`, and it uses the \`+\` operator to calculate their sum.
\`\`\`javascript
function add(num1, num2) {
  return num1 + num2;
}
add(5, 10); // 15
\`\`\`
1. **Parameters \`(num1, num2)\`**: These are placeholders for the two numbers that will be passed into the function.
2. **Arguments \`(5, 10)\`**: The actual values passed to a function are called arguments.
3. **\`+\` Operator**: When used with numbers, the plus sign is the addition operator.
4. **Return Value**: The function returns the result of the addition.

### 📚 Key Concepts
- **Functions with Multiple Parameters**: Defining functions that can accept and work with more than one input.
- **Arithmetic Operators**: The \`+\` operator for addition.
`,

  // problem explanation--> 03
  "declare-variable-let": `
### 💡 Problem Breakdown
The \`let\` keyword, introduced in ES6 (2015), is the modern way to declare variables whose values can be changed later. The key feature of \`let\` is that it is **block-scoped**.

### ⚙️ Solution Walkthrough
A variable named \`message\` is declared using \`let\` and assigned a string value.
\`\`\`javascript
let message = 'JavaScript is fun';
return message;
\`\`\`
Using \`let\` is preferred over the older \`var\` keyword because its block-scoping behavior is more intuitive and helps prevent common bugs.

### 📚 Key Concepts
- **\`let\`**: A keyword for declaring a block-scoped variable that can be reassigned.
- **Variable Declaration**: The act of creating a new variable.
- **Assignment**: The act of giving a variable a value.
`,

  // problem explanation--> 04
  "declare-constant-const": `
### 💡 Problem Breakdown
The \`const\` keyword is used to declare "constants" – variables whose values are not intended to be changed after they are first assigned. Like \`let\`, \`const\` is also **block-scoped**.

### ⚙️ Solution Walkthrough
A constant named \`DAYS_IN_WEEK\` is declared using \`const\` and assigned the value 7.
\`\`\`javascript
const DAYS_IN_WEEK = 7;
return DAYS_IN_WEEK;
\`\`\`
It's a modern JavaScript best practice to use \`const\` by default and only use \`let\` when you specifically know that a variable's value needs to change. This makes your code safer and easier to understand.

### 📚 Key Concepts
- **\`const\`**: A keyword for declaring a block-scoped constant whose binding is immutable.
- **Immutability (of binding)**: \`const\` ensures that the variable identifier cannot be reassigned to a new value.
`,

  // problem explanation--> 05
  "simple-subtraction": `
### 💡 Problem Breakdown
This problem involves writing a function to perform subtraction, using the subtraction operator (\`-\`).

### ⚙️ Solution Walkthrough
The function takes two numbers and returns the result of subtracting the second number from the first.
\`\`\`javascript
function subtract(num1, num2) {
  return num1 - num2;
}
subtract(20, 8); // 12
\`\`\`
### 📚 Key Concepts
- **Arithmetic Operators**: The \`-\` operator for subtraction.
`,

  // problem explanation--> 06
  "simple-multiplication": `
### 💡 Problem Breakdown
This problem involves writing a function to perform multiplication, using the multiplication operator (\`*\`).

### ⚙️ Solution Walkthrough
The function takes two numbers and returns their product.
\`\`\`javascript
function multiply(num1, num2) {
  return num1 * num2;
}
multiply(7, 6); // 42
\`\`\`
### 📚 Key Concepts
- **Arithmetic Operators**: The \`*\` operator for multiplication.
`,

  // problem explanation--> 07
  "simple-division": `
### 💡 Problem Breakdown
This problem involves writing a function to perform division, using the division operator (\`/\`). It also introduces the concept of handling "edge cases," specifically division by zero, which is mathematically undefined.

### ⚙️ Solution Walkthrough
The function checks if the divisor is zero. If it is, a specific error message is returned. Otherwise, the division is performed.
\`\`\`javascript
function divide(dividend, divisor) {
  if (divisor === 0) {
    return "Error: Division by zero.";
  }
  return dividend / divisor;
}
divide(100, 10); // 10
divide(10, 0);   // "Error: Division by zero."
\`\`\`
### 📚 Key Concepts
- **Arithmetic Operators**: The \`/\` operator for division.
- **Edge Case Handling**: Writing code that anticipates and handles special cases to prevent errors or unexpected behavior.
`,

  // problem explanation--> 08
  "find-remainder-modulo": `
### 💡 Problem Breakdown
The modulo operator (\`%\`), sometimes called the remainder operator, gives the remainder of a division. For example, 10 divided by 3 is 3 with a remainder of 1. So, \`10 % 3\` is 1.

### ⚙️ Solution Walkthrough
The function uses the modulo operator to find the remainder.
\`\`\`javascript
function getRemainder(dividend, divisor) {
  return dividend % divisor;
}
getRemainder(10, 3); // 1
\`\`\`
The modulo operator is very useful for tasks like checking if a number is even or odd (\`num % 2 === 0\`).

### 📚 Key Concepts
- **Modulo Operator (\`%\`)**: An arithmetic operator that returns the remainder of a division.
`,

  // problem explanation--> 09
  "exponentiation-operator": `
### 💡 Problem Breakdown
Exponentiation is the operation of raising a number (the base) to a power (the exponent). ES2016 introduced the exponentiation operator (\`**\`) as a more readable alternative to the older \`Math.pow()\` function.

### ⚙️ Solution Walkthrough
The function uses the \`**\` operator to calculate the result.
\`\`\`javascript
function calculatePower(base, exponent) {
  return base ** exponent;
}
calculatePower(2, 3); // 8 (which is 2 * 2 * 2)
\`\`\`
### 📚 Key Concepts
- **Exponentiation Operator (\`**\`)**: A modern arithmetic operator for calculating powers.
`,

  // problem explanation--> 10
  "increment-a-number": `
### 💡 Problem Breakdown
The increment operator (\`++\`) is a shorthand way to add 1 to a number. It can be used as a prefix (\`++num\`) or postfix (\`num++\`).

### ⚙️ Solution Walkthrough
The function takes a number and returns the result of incrementing it.
\`\`\`javascript
function increment(num) {
  return ++num; // or num + 1
}
increment(5); // 6
\`\`\`
Using \`++num\` (prefix) increments the value and then returns the new value. Using \`num++\` (postfix) would return the original value and *then* increment it. For a simple return statement, both achieve a similar outcome, but their behavior differs in more complex expressions.

### 📚 Key Concepts
- **Increment Operator (\`++\`)**: A unary operator for adding one to its operand.
`,

  // problem explanation--> 11
  "decrement-a-number": `
### 💡 Problem Breakdown
The decrement operator (\`--\`) is the counterpart to the increment operator. It's a shorthand way to subtract 1 from a number.

### ⚙️ Solution Walkthrough
The function takes a number and returns the result of decrementing it.
\`\`\`javascript
function decrement(num) {
  return --num; // or num - 1
}
decrement(5); // 4
\`\`\`
Similar to the increment operator, \`--num\` (prefix) decrements the value and then returns the new value, while \`num--\` (postfix) returns the original value and then decrements it.

### 📚 Key Concepts
- **Decrement Operator (\`--\`)**: A unary operator for subtracting one from its operand.
`,

  // problem explanation--> 12
  "string-length": `
### 💡 Problem Breakdown
Strings in JavaScript have a built-in \`.length\` property that tells you how many characters are in the string.

### ⚙️ Solution Walkthrough
The function simply accesses the \`.length\` property on the input string and returns it.
\`\`\`javascript
function getLength(str) {
  return str.length;
}
getLength("JavaScript"); // 10
\`\`\`
### 📚 Key Concepts
- **Properties**: Values associated with an object (or in this case, a string primitive which behaves like an object).
- **\`.length\` property**: A common property on strings and arrays.
`,
  // problem explanation--> 13
  "get-first-character": `
### 💡 Problem Breakdown
You can access individual characters in a string using "bracket notation," similar to how you access elements in an array. The first character is at index 0.

### ⚙️ Solution Walkthrough
The function uses \`[0]\` to access the character at the first position of the string.
\`\`\`javascript
function getFirst(str) {
  return str[0];
}
getFirst("Hello"); // "H"
\`\`\`
### 📚 Key Concepts
- **Bracket Notation**: A syntax for accessing properties or elements using square brackets.
- **Zero-based Indexing**: A common convention in programming where the first element in a sequence has an index of 0.
`,

  // problem explanation--> 14
  "get-last-character": `
### 💡 Problem Breakdown
To get the last character of a string, you need to combine the \`.length\` property with bracket notation. Since strings are zero-indexed, the last character is always at the index \`length - 1\`.

### ⚙️ Solution Walkthrough
The function calculates the index of the last character and uses it to access that character.
\`\`\`javascript
function getLast(str) {
  return str[str.length - 1];
}
getLast("World"); // "d"
\`\`\`
### 📚 Key Concepts
- **Zero-based Indexing**: Understanding that the last index is one less than the length is a crucial concept.
`,

  // problem explanation--> 15
  "concatenate-strings": `
### 💡 Problem Breakdown
The plus operator (\`+\`) is used for both number addition and string concatenation. When used with strings, it joins them together.

### ⚙️ Solution Walkthrough
The function uses the \`+\` operator to combine two input strings.
\`\`\`javascript
function concatenate(str1, str2) {
  return str1 + str2;
}
concatenate("Hello, ", "World!"); // "Hello, World!"
\`\`\`
### 📚 Key Concepts
- **Operator Overloading**: The \`+\` operator has different meanings depending on the data types of its operands.
`,

  // problem explanation--> 16
  "template-literals": `
### 💡 Problem Breakdown
Template literals (ES6) provide an easier way to create strings, especially when you need to include variables or expressions inside them. They use backticks (\` \`) instead of single or double quotes.

### ⚙️ Solution Walkthrough
A variable \`name\` is embedded directly into a string using the \`\${...}\` syntax within a template literal.
\`\`\`javascript
function createGreeting(name) {
  return \`Hello, \${name}!\`;
}
createGreeting("Alice"); // "Hello, Alice!"
\`\`\`
This is often much more readable than traditional concatenation: \`'Hello, ' + name + '!'\`.

### 📚 Key Concepts
- **Template Literals**: A modern string syntax in JavaScript.
- **String Interpolation**: The process of embedding expressions or variables within a string literal.
`,

  // problem explanation--> 17
  "typeof-string": `
### 💡 Problem Breakdown
The \`typeof\` operator is used to determine the data type of a variable. This problem checks the type of a string literal.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is applied to the string 'hello'.
\`\`\`javascript
typeof 'hello'; // returns "string"
\`\`\`
The result of the \`typeof\` operator is always a string.

### 📚 Key Concepts
- **\`typeof\` operator**: A fundamental operator for inspecting data types.
`,

  // problem explanation--> 18
  "typeof-number": `
### 💡 Problem Breakdown
This problem checks the type of a number literal using the \`typeof\` operator.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is applied to the number 42.
\`\`\`javascript
typeof 42; // returns "number"
\`\`\`
### 📚 Key Concepts
- **\`typeof\` operator**: A fundamental operator for inspecting data types.
`,

  // problem explanation--> 19
  "typeof-boolean": `
### 💡 Problem Breakdown
This problem checks the type of a boolean literal using the \`typeof\` operator.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is applied to the boolean \`true\`.
\`\`\`javascript
typeof true; // returns "boolean"
\`\`\`
### 📚 Key Concepts
- **\`typeof\` operator**: A fundamental operator for inspecting data types.
`,

  // problem explanation--> 20
  "number-to-string": `
### 💡 Problem Breakdown
Type conversion (or type casting) is the process of converting a value from one data type to another. This problem demonstrates explicitly converting a number to a string.

### ⚙️ Solution Walkthrough
The \`String()\` constructor function is a reliable way to convert any value to its string representation.
\`\`\`javascript
const num = 123;
const str = String(num); // "123"
console.log(typeof str); // "string"
\`\`\`
### 📚 Key Concepts
- **Type Conversion**: Explicitly changing a value's data type.
- **\`String()\`**: A built-in function for string conversion.
`,

  // problem explanation--> 21
  "string-to-number": `
### 💡 Problem Breakdown
This problem demonstrates converting a string that contains a numeric value into an actual number type.

### ⚙️ Solution Walkthrough
The \`Number()\` constructor function is used to convert the string. It can parse both integers and floating-point numbers.
\`\`\`javascript
const str = "45.5";
const num = Number(str); // 45.5
console.log(typeof num); // "number"
\`\`\`
If the string cannot be converted to a number, \`Number()\` will return \`NaN\` (Not a Number).

### 📚 Key Concepts
- **Type Conversion**: Explicitly changing a value's data type.
- **\`Number()\`**: A built-in function for numeric conversion.
`,

  // problem explanation--> 22
  "string-to-integer": `
### 💡 Problem Breakdown
The \`parseInt()\` function is specifically for converting a string into an integer (a whole number). It stops parsing at the first non-numeric character and discards any fractional part.

### ⚙️ Solution Walkthrough
\`parseInt()\` is used to convert the string "99.9".
\`\`\`javascript
const str = "99.9";
const integer = parseInt(str, 10); // 99
\`\`\`
The second argument, \`10\`, is the "radix." It's a best practice to always include it to specify that the string should be parsed as a base-10 number.

### 📚 Key Concepts
- **\`parseInt()\`**: A built-in function for parsing integers from strings.
- **Radix**: The base of a numeral system (e.g., 10 for decimal, 2 for binary).
`,

  // problem explanation--> 23
  "string-to-float": `
### 💡 Problem Breakdown
The \`parseFloat()\` function is used to convert a string into a floating-point number (a number that can have a decimal part).

### ⚙️ Solution Walkthrough
\`parseFloat()\` is used to convert the string "123.456".
\`\`\`javascript
const str = "123.456";
const floatNum = parseFloat(str); // 123.456
\`\`\`
Like \`parseInt()\`, it stops parsing at the first character that isn't part of a valid number.

### 📚 Key Concepts
- **\`parseFloat()\`**: A built-in function for parsing floating-point numbers from strings.
`,

  // problem explanation--> 24
  "boolean-true": `
### 💡 Problem Breakdown
This problem demonstrates the use of the boolean literal \`true\`, which is a fundamental value in logic and control flow.

### ⚙️ Solution Walkthrough
A function is written that simply returns the boolean value \`true\`.
\`\`\`javascript
function returnTrue() {
  return true;
}
\`\`\`
### 📚 Key Concepts
- **Booleans**: A primitive data type that can only have one of two values: \`true\` or \`false\`.
`,

  // problem explanation--> 25
  "boolean-false": `
### 💡 Problem Breakdown
This problem demonstrates the use of the boolean literal \`false\`, the counterpart to \`true\`.

### ⚙️ Solution Walkthrough
A function is written that simply returns the boolean value \`false\`.
\`\`\`javascript
function returnFalse() {
  return false;
}
\`\`\`
### 📚 Key Concepts
- **Booleans**: A primitive data type that can only have one of two values: \`true\` or \`false\`.
`,

  // problem explanation--> 26
  "strict-equality": `
### 💡 Problem Breakdown
The strict equality operator (\`===\`) is the recommended way to compare two values in JavaScript. It checks for equality without performing type coercion. For two values to be strictly equal, they must have the same value AND the same data type.

### ⚙️ Solution Walkthrough
The string \`"5"\` is compared to the number \`5\`.
\`\`\`javascript
const string5 = "5";
const number5 = 5;

string5 === number5; // returns false
\`\`\`
Because the data types are different (string vs. number), the result is \`false\`.

### 📚 Key Concepts
- **Strict Equality (\`===\`)**: Compares value and type.
- **Type Coercion**: The automatic conversion of values from one data type to another. Strict equality avoids this.
`,

  // problem explanation--> 27
  "loose-equality": `
### 💡 Problem Breakdown
The loose equality operator (\`==\`) compares two values for equality *after* performing type coercion if their types are different. This can lead to unexpected and confusing results, and its use is generally discouraged.

### ⚙️ Solution Walkthrough
The string \`"5"\` is compared to the number \`5\` using loose equality.
\`\`\`javascript
const string5 = "5";
const number5 = 5;

string5 == number5; // returns true
\`\`\`
Before comparing, JavaScript coerces the string \`"5"\` into the number \`5\`. Since \`5\` is equal to \`5\`, the result is \`true\`.

### 📚 Key Concepts
- **Loose Equality (\`==\`)**: Compares value after attempting type coercion.
- **Type Coercion**: A behavior that can make code less predictable.
`,

  // problem explanation--> 28
  "strict-inequality": `
### 💡 Problem Breakdown
The strict inequality operator (\`!==\`) is the logical opposite of the strict equality operator. It returns \`true\` if two values are not equal or are not of the same type.

### ⚙️ Solution Walkthrough
The string \`"5"\` is compared to the number \`5\`.
\`\`\`javascript
const string5 = "5";
const number5 = 5;

string5 !== number5; // returns true
\`\`\`
Because their types are different, they are not strictly equal, so the strict inequality operator returns \`true\`.

### 📚 Key Concepts
- **Strict Inequality (\`!==\`)**: The recommended way to check if two values are not equal.
`,

  // problem explanation--> 29
  "is-greater-than": `
### 💡 Problem Breakdown
This problem demonstrates the use of the "greater than" comparison operator (\`>\`).

### ⚙️ Solution Walkthrough
The function checks if the first number is greater than the second.
\`\`\`javascript
function isGreaterThan(num1, num2) {
  return num1 > num2;
}
isGreaterThan(10, 5); // true
\`\`\`
### 📚 Key Concepts
- **Comparison Operators**: Operators used to compare values and produce a boolean result.
`,

  // problem explanation--> 30
  "is-less-than": `
### 💡 Problem Breakdown
This problem demonstrates the use of the "less than" comparison operator (\`<\`).

### ⚙️ Solution Walkthrough
The function checks if the first number is less than the second.
\`\`\`javascript
function isLessThan(num1, num2) {
  return num1 < num2;
}
isLessThan(10, 5); // false
\`\`\`
### 📚 Key Concepts
- **Comparison Operators**: Operators used to compare values and produce a boolean result.
`,

  // problem explanation--> 31
  "is-greater-or-equal": `
### 💡 Problem Breakdown
This problem demonstrates the use of the "greater than or equal to" comparison operator (\`>=\`).

### ⚙️ Solution Walkthrough
The function checks if the first number is greater than or equal to the second.
\`\`\`javascript
function isGreaterOrEqual(num1, num2) {
  return num1 >= num2;
}
isGreaterOrEqual(10, 10); // true
\`\`\`
### 📚 Key Concepts
- **Comparison Operators**: Operators used to compare values and produce a boolean result.
`,

  // problem explanation--> 32
  "is-less-or-e极": `
### 💡 Problem Breakdown
This problem demonstrates the use of the "less than or equal to" comparison operator (\`<=\`).

### ⚙️ Solution Walkthrough
The function checks if the first number is less than or equal to the second.
\`\`\`javascript
function isLessOrEqual(num1, num2) {
  return num1 <= num2;
}
isLessOrEqual(5, 10); // true
\`\`\`
### 📚 Key Concepts
- **Comparison Operators**: Operators used to compare values and produce a boolean result.
`,

  // problem explanation--> 33
  "logical-and": `
### 💡 Problem Breakdown
The logical AND operator (\`&&\`) is used to combine two boolean expressions. It returns \`true\` only if **both** expressions on its left and right are true.

### ⚙️ Solution Walkthrough
The function checks if a person's age is at least 18 AND if they have a license.
\`\`\`javascript
function canDrive(age, hasLicense) {
  return age >= 18 && hasLicense === true;
}
canDrive(21, true); // true
canDrive(17, true); // false
\`\`\`
### 📚 Key Concepts
- **Logical Operators**: Used to combine boolean values.
- **Short-circuiting**: If the first expression in an \`&&\` operation is false, the second expression is not even evaluated.
`,

  // problem explanation--> 34
  "logical-or": `
### 💡 Problem Breakdown
The logical OR operator (\`||\`) is used to combine two boolean expressions. It returns \`true\` if **at least one** of the expressions on its left or right is true.

### ⚙️ Solution Walkthrough
The function checks if a user's role is 'admin' OR 'manager'.
\`极\`\`javascript
function isAuthorized(role) {
  return role === 'admin' || role === 'manager';
}
isAuthorized('admin');   // true
isAuthorized('manager'); // true
isAuthorized('user');    // false
\`\`\`
### 📚 Key Concepts
- **Logical Operators**: Used to combine boolean values.
- **Short-circuiting**: If the first expression in an \`||\` operation is true, the second expression is not even evaluated.
`,

  // problem explanation--> 35
  "logical-not": `
### 💡 Problem Breakdown
The logical NOT operator (\`!\`), also known as the "bang" operator, inverts a boolean value. It turns \`true\` into \`false\` and \`false\` into \`true\`.

### ⚙️ Solution Walkthrough
The function takes a boolean and returns its opposite.
\`\`\`javascript
function invert(bool) {
  return !bool;
}
invert(true);  // false
invert(false); // true
\`\`\`
When used with non-boolean values, it first coerces the value to a boolean (its "truthiness") and then inverts it.

### 📚极 Key Concepts
- **Logical Operators**: The \`!\` is a unary logical operator.
`,

  // problem explanation--> 36
  "simple-if-statement": `
### 💡 Problem Breakdown
The \`if\` statement is the most basic control flow statement. It allows you to execute a block of code only if a specified condition is true.

### ⚙️ Solution Walkthrough
The function checks if the provided password is correct. If it is, the code inside the \`if\` block runs and returns a message. If the password is not correct, the block is skipped and the function implicitly returns \`undefined\`.
\`\`\`javascript
function checkPassword(password) {
  if (password === 'secret123') {
    return 'Access Granted';
  }
}
checkPassword('secret123'); // 'Access Granted'
checkPassword('wrong');     // undefined
\`\`\`
### 📚 Key Concepts
- **Conditional Logic**: Executing code based on certain conditions.
- **Control Flow**: The order in which the computer executes statements.
`,

  // problem explanation--> 37
  "simple-if-else": `
### 💡 Problem Breakdown
The \`if...else\` statement provides a secondary path of execution for when the \`if\` condition is false.

### ⚙️ Solution Walkthrough
The function checks if an age is 18 or greater. If the condition is true, the \`if\` block is executed. If it is false, the \`else\` block is executed instead.
\`\`\`javascript
function checkAge(age) {
  if (age >= 18) {
    return 'Adult';
  } else {
    return 'Minor';
  }
}
checkAge(21); // 'Adult'
极checkAge(16); // 'Minor'
\`\`\`
### 📚 Key Concepts
- **\`if...else\` Statement**: A fundamental control flow structure for making decisions between two paths.
`,

  // problem explanation--> 38
  "check-is-even": `
### 💡极 Problem Breakdown
This problem combines conditional logic with the modulo operator (\`%\`). A number is even if it can be divided by 2 with no remainder.

### ⚙️ Solution Walkthrough
The function uses the modulo operator to check the remainder of the number when divided by 2. The expression \`num % 2 === 0\` evaluates to a boolean (\`true\` or \`false\`), which can be directly returned.
\`\`\`javascript
function isEven(num) {
  return num % 2 === 0;
}
isEven(8); // true
isEven(7); // false
\`\`\`
### 📚 Key Concepts
- **Modulo Operator (\`%\`)**: A useful tool for solving problems related to divisibility.
`,

  // problem explanation--> 39
  "check-is-positive": `
### 💡 Problem Breakdown
The \`if...else if...else\` statement allows you to test a sequence of conditions. It provides multiple branches for your control flow.

### ⚙️ Solution Walkthrough
The function first checks if the number is positive. If not, it proceeds to the \`else if\` to check if it's negative. If that's also false, the final \`else\` block is executed as the default case.
\`\`\`javascript
function checkNumber(num) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  } else {
    return 'Zero';
  }
}
\`\`\`
### 📚 Key Concepts
- **\`if...else if...else\`**: A control structure for choosing one path out of several possibilities.
`,

  // problem explanation--> 40
  "ternary-operator-check": `
### 💡 Problem Breakdown
The conditional (or ternary) operator is a concise, one-line alternative to an \`if...else\` statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

### ⚙️ Solution Walkthrough
The syntax is \`condition ? value_if_true : value_if_false\`.
\`\`\`javascript
function getMessage(isLoggedIn) {
  return isLoggedIn ? 'Welcome, User!' : 'Please log in.';
}
\`极\`\`
This is functionally equivalent to the longer \`if...极else\` version, but is often used for simple conditional assignments due to its brevity.

### 📚 Key Concepts
- **Ternary Operator**: A shorthand for simple conditional statements.
`,

  // problem explanation--> 41
  "simple-switch-statement": `
### 💡 Problem Breakdown
A \`switch\` statement is another way to control program flow. It's useful when you have a single value that you need to compare against multiple possible options (\`case\`s).

### ⚙️ Solution Walkthrough
The \`switch\` statement evaluates the \`level\` variable. It then looks for a \`case\` that matches the value.
\`\`\`javascript
function getMessage(极level) {
  switch (level) {
    case 'free':
      return 'Free features available.';
    case 'pro':
      return 'Pro features unlocked!';
    case 'vip':
      return 'VIP access granted!';
    default:
      return 'Unknown subscription level.';
  }
}
\`\`\`
- **\`case\`**: Defines a specific value to match.
- **\`break\`**: (Not used here because \`return\` exits the function). In a typical \`switch\` statement, \`break\` is needed to prevent "fall-through" to the next case.
- **\`default\`**: This case runs if no other case matches.

### 📚 Key Concepts
- **\`switch\` Statement**: A control flow statement for multi-way branching based on the value of a single expression.
`,

  // problem explanation--> 42
  "simple-for-loop": `
### 💡 Problem Breakdown
Loops are used to execute a block of code repeatedly. The \`for\` loop is a common type of loop that is ideal when you know how many times you want the loop to run.

### ⚙️ Solution Walkthrough
A standard \`for\` loop has three parts in its parentheses, separated by semicolons:
1.  **Initialization**: \`let i = 0;\` - Runs once before the loop starts.
2.  **Condition**: \`i < 5;\` - Checked before each iteration. The loop continues as long as this is true.
3.  **Final Expression**: \`i++\` - Runs after each iteration.
\`\`\`javascript
let result = '';
for (let i = 0; i < 5; i++) {
  result += i + ' ';
}
// result becomes "0 1 2 3 4 "
\`\`\`
### 📚 Key Concepts
- **\`for\` Loop**: A fundamental control structure for iteration.
`,

  // problem explanation--> 43
  "for-loop-sum": `
### 💡 Problem Breakdown
This problem demonstrates a common pattern: using a loop to accumulate a value. Here, we sum a series of numbers.

### ⚙️ Solution Walkthrough
A variable \`sum\` is initialized to 0. The \`for\` loop then iterates from 1 up to the given number (\`num\`), and in each iteration, the current loop value (\`极i\`) is added to the \`sum\`.
\`\`\`javascript
function calculateSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i; // shorthand for sum = sum + i
  }
  return sum;
}
calculateSum(10); // 55
\`\`\`
### 📚 Key Concepts
- **Accumulator Pattern**: A variable that is updated in each iteration of a loop to compute a final result.
`,

  // problem explanation--> 44
  "for-loop-countdown": `
### 💡 Problem Breakdown
This problem shows how a \`for\` loop can be configured to count downwards instead of upwards.

### ⚙️ Solution Walkthrough
The \`for\` loop is set up differently:
1.  **Initialization**: \`let i = start;\` - We start at the given number.
2.  **Condition**: \`i >= 1;\` - We continue as long as the number is greater than or equal to 1.
3.  **Final Expression**: \`i--\` - We decrement the counter in each step.
\`\`\`javascript
function countdown(start) {
  let result = '';
  for (let i = start; i >= 1; i--) {
    result += i + '...';
  }
  return result + 'Blast off!';
}
\`\`\`
### 📚 Key Concepts
- **Loop Configuration**: The three parts of a \`for极\` loop are flexible and can be configured for many different iteration patterns.
`,

  // problem explanation--> 45
  "simple-while-loop": `
### 💡 Problem Breakdown
A \`while\` loop is another fundamental loop structure. It continues to execute a block of code as long as a specified condition is true. It's ideal when you don't know in advance how many times the loop needs to run.

### ⚙️ Solution Walkthrough
A counter variable \`i极\` is initialized outside the loop. The loop's condition is \`while (i <= 5)\`. Crucially, the counter variable must be manually updated *inside* the loop (\`i++\`) to prevent an infinite loop.
\`\`\`javascript
let i = 1;
let result = '';
while (i <= 5) {
  result += i + ' ';
  i++; // Don't forget to increment!
}
\`\`\`
### 📚 Key Concepts
- **\`while\` Loop**: A control structure that repeats a block of code as long as a condition is true.
`,

  // problem explanation--> 46
  "create-simple-function": `
### 💡 Problem Breakdown
This problem reviews the basic syntax for creating a named function that takes no inputs (parameters) and returns a static value.

### ⚙️ Solution Walkthrough
The \`function\` keyword is used to declare a function named \`getGreeting\`. It has empty parentheses because it takes no parameters. The \`return\` statement specifies its output.
\`\`\`javascript
function getGreeting() {
  return 'Hello, function!';
}
getGreeting(); // returns 'Hello, function!'
\`\`\`
### 📚 Key Concepts
- **Function Declaration**: The standard syntax for creating a named function.
`,

  // problem explanation--> 47
  "function-with-one-parameter": `
### 💡 Problem Breakdown
This problem demonstrates a function that takes a single input (a parameter) and uses it to perform a calculation.

### ⚙️ Solution Walkthrough
The function \`square\` is defined with one parameter, \`n\`. Inside the function, this parameter is used in the calculation \`n * n\`.
\`\`\`javascript
function square(n) {
  return n * n;
}
square(8); // 64
\`\`\`
### 📚 Key Concepts
- **Parameters and Arguments**: The core mechanism for passing data into functions.
`,

  // problem explanation--> 48
  "function-expression": `
### 💡 Problem Breakdown
A function expression is another way to define a function. Instead of a declaration statement, an anonymous function is created and assigned to a variable.

### ⚙️ Solution Walkthrough
An anonymous function \`function(a, b) { ... }\` is created and assigned to the constant \`multiply\`. This constant can then be used to call the function.
\`\`\`javascript
const multiply = function(a, b) {
  return a * b;
};
multiply(4, 5); // 20
\`\`\`
Unlike function declarations, function expressions are not fully hoisted, meaning you cannot call them before they are defined.

### 📚 Key Concepts
- **Function Expression**: A syntax where a function is created as part of an expression (typically a variable assignment).
- **Anonymous Function**: A function without a name.
`,

  // problem explanation--> 49
  "arrow-function-syntax": `
### 💡 Problem Breakdown
Arrow functions (ES6) provide a more concise syntax for writing function expressions. They are especially useful for short, single-line functions.

### ⚙️ Solution Walkthrough
The solution defines an arrow function named \`double\`.
\`\`\`javascript
const double = (n) => n * 2;
\`\`\`
- **\`const double = ...\`**: Arrow functions are expressions and are typically assigned to variables.
- **\`(n)\`**: The parameters.
- **\`=>\`**: The "arrow" that separates parameters from the function body.
- **\`n * 2\`**: Since there are no curly braces \`{}\`, this is an "implicit return." The result of the expression is automatically returned.

### 📚 Key Concepts
- **Arrow Function**: A compact alternative to a traditional function expression.
- **Implicit Return**: A feature of single-expression arrow functions.
`,

  // problem explanation--> 50
  "function-return-boolean": `
### 💡 Problem Breakdown
Functions can return values of any type, including bo极leans. This is a very common pattern for creating "predicate" functions that test a condition.

### ⚙️ Solution Walkthrough
The function \`isAdult\` takes an age and returns the result of the boolean expression \`age >= 18\`.
\`\`\`javascript
function isAdult(age) {
 极 return age >= 18;
}
isAdult(25); // true
isAdult(17); // false
\`\`\`
The comparison operator \`>=\` produces a boolean result (\`true\` or \`false\`), which is then directly returned by the function.

### 📚 Key Concepts
- **Boolean Return Values**: Functions that answer a "yes/no" question often return booleans.
`,

  // problem explanation--> 51
  "create-empty-array": `
### 💡 Problem Breakdown
An array is a fundamental data structure in JavaScript used to store an ordered list of values. This problem demonstrates how to create an empty array.

### ⚙️ Solution Walkthrough
An empty array is created using square brackets with nothing inside.
\`\`\`javascript
const myArray = [];
console.log(myArray.length); // 0
\`\`\`
This creates an array literal that is ready to have elements added to it later.

### 📚 Key Concepts
- **Array**: A data structure for storing a collection of elements.
- **Array Literal**: The \`[]\` syntax for creating an array.
`,

  // problem explanation--> 52
  "create-array-with-elements": `
### 💡 Problem Breakdown
This problem demonstrates how to create an array and initialize it with some elements at the same time.

### ⚙️ Solution Walkthrough
An array literal is used, with the initial elements listed inside the square brackets, separated by commas.
\`\`\`javascript
const myArray = [1, 2, 3];
console.log(myArray); // [1, 2, 3]
极\`\`\`
### 📚 Key Concepts
- **Array Literal**: The \`[]\` syntax for creating an array.
- **Initialization**: Providing initial values when declaring a variable.
`,

  // problem explanation--> 53
  "get-array-length": `
### 💡 Problem Breakdown
Just like strings, arrays have a built-in \`.length\` property. It tells you the number of elements in the array.

### ⚙️ Solution Walkthrough
The function accesses the \`.length\` property of the input array.
\`\`\`javascript
function getLength(arr) {
  return arr.length;
}
getLength(["apple", "banana", "cherry"]); // 3
\`\`\`
### 📚 Key Concepts
- **\`.length\` property**: A fundamental property of arrays.
`,

  // problem explanation--> 54
  "access-first-array-element": `
### 💡 Problem Breakdown
Elements in an array are accessed by their "index," which is their numerical position. JavaScript arrays are zero-indexed, meaning the first element is at index 0.

### ⚙️ Solution Walkthrough
Bracket notation \`[0]\` is used to get the element at the first position.
\`\`\`javascript
const colors = ["red", "green", "blue"];
const firstColor = colors[0]; // "red"
\`\`\`
### 📚 Key Concepts
- **Zero-based Indexing**: The first element is at index 0.
- **Bracket Notation**: The syntax for accessing array elements by their index.
`,

  // problem explanation--> 55
  "access-last-array-element": `
### 💡 Problem Breakdown
To get the last element of an array, you need to combine the \`.length\` property with bracket notation. Since arrays are zero-index极ed, the last element is always at index \`length - 1\`.

### ⚙️ Solution Walkthrough
The function calculates the index of the last element and uses it to access that element.
\`\`\`javascript
function getLast(arr) {
  return arr[arr.length - 1];
}
getLast(["red", "green", "blue"]); // "blue"
\`极\`\`
### 📚 Key Concepts
- **Zero-based Indexing**: A crucial concept for correctly calculating the last index.
`,

  // problem explanation--> 56
  "modify-array-element": `
### 💡 Problem Breakdown
Arrays in JavaScript are mutable, meaning you can change their contents. You can modify an element by accessing it via its index and using the assignment operator (\`=\`).

### ⚙️ Solution Walkthrough
The element at index 1 (极the second element) is accessed and assigned a new value.
\`\`\`javascript
const letters = ['a', 'b', 'c'];
letters[1] = 'new value';
console.log(letters); // ['a', 'new value', 'c']
\`\`\`
### 📚 Key Concepts
- **Mutability**: The ability to change a data structure's contents after it has been created.
`,

  // problem explanation--> 57
  "array-push": `
### 💡 Problem Breakdown
The \`.push()\` method is a fundamental array method used to add one or more elements to the **end** of an array. It modifies the array in place.

### ⚙️ Solution Walkthrough
The \`.push()\` method is called on the array with the new element as its argument.
\`\`\`javascript
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3极, 4]
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.push()\`**: A method for adding elements to the end of an array.
- **In-place Modification**: Methods that change the original array are said to modify it "in place".
`,

  // problem explanation--> 58
  "array-pop": `
### 💡 Problem Breakdown
The \`.pop()极\` method is the counterpart to \`.push()\`. It removes the **last** element from an array and returns that element. It also modifies the array in place.

### ⚙️ Solution Walkthrough
The \`.pop()\` method is called on the array.
\`\`\`javascript
const numbers = [1, 2, 3];
const removedElement = numbers.pop();
console.log(removedElement); // 3
console.log(numbers);       // [1, 2]
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.pop()\`**: A method for removing the last element from an array.
`,

  // problem explanation--> 59
  "create-simple-object": `
### 💡 Problem Breakdown
An object is another fundamental data structure in JavaScript. It's a collection of key-value pairs. This problem demonstrates how to create a simple object.

### ⚙️ Solution Walkthrough
An object literal is created using curly braces \`{}\`. Inside, key-value pairs are defined, with the key and value separated by a colon, and pairs separated by commas.
\`\`\`javascript
const car = {
  make: "Toyota",
  model: "Camry"
};
\`\`\`
- **Keys**: are usually strings (if they are valid identifiers, the quotes can be omitted).
- **Values**: can be any data type (string, number, array, even another object).

### 📚 Key Concepts
- **Object**: A data structure for storing related data as key-value pairs.
- **Object Literal**: The \`{...}\` syntax for creating an object.
`,

  // problem explanation--> 60
  "access-object-property-dot": `
### 💡 Problem Breakdown
Dot notation is the most common way to access the value of a property in an object. You use the object's name, followed by a dot, followed by the property key.

### ⚙️ Solution Walkthrough
The \`title\` property of the \`book\` object is accessed using dot notation.
\`\`\`javascript
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien"
};
const bookTitle = book.title; // "The Hobbit"
\`\`\`
### 📚 Key Concepts
- **Dot Notation**: A syntax for accessing object properties.
`,

  // problem explanation--> 61
  "access-object-property-bracket": `
### 💡 Problem Breakdown
Bracket notation is another way to access object properties. It is required when the property key is not a valid identifier (e.g., contains spaces) or when the key is stored in a variable.

### ⚙️ Solution Walkthrough
The \`author\` property of the \`book\` object is accessed using bracket notation. The key is provided as a string inside the brackets.
\`\`\`javascript
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien"
};
const bookAuthor = book['author']; // "J.R.R. Tolkien"
\`\`\`
### 📚 Key Concepts
- **Bracket Notation**: A syntax for accessing object properties, especially with dynamic keys.
`,

  // problem explanation--> 62
  "modify-object-property": `
### 💡 Problem Breakdown
Just like arrays, objects in JavaScript are mutable. You can change the value of an existing property using dot or bracket notation with the assignment operator (\`=\`).

### ⚙️ Solution Walkthrough
The \`age\` property of the \`person\` object is accessed and assigned a new value.
\`\`\`javascript
const person = { name: 'Alex', age: 30 };
person.age = 31;
console.log(person); // { name: 'Alex', age: 31 }
\`\`\`
### 📚 Key Concepts
- **Mutability**: Objects are mutable by default in JavaScript.
`,

  // problem explanation--> 63
  "add-object-property": `
### 💡 Problem Breakdown
You can add a new key-value pair to an existing object at any time by simply assigning a value to a new key.

### ⚙️ Solution Walkthrough
A new property \`inStock\` is added to the \`product\` object by assigning a value to it using dot notation.
\`\`\`javascript
const product = { name: 'Keyboard' };
product.inStock = true;
console.log(product); // { name: 'Keyboard', inStock: true }
\`\`\`
### 📚 Key Concepts
- **Dynamic Objects**: JavaScript objects are dynamic, meaning their structure can be changed at runtime.
`,

  // problem explanation--> 64
  "string-to-uppercase": `
### 💡 Problem Breakdown
The \`.toUpperCase()\` method is a built-in string method that returns a new string with all of the characters of the original string converted to uppercase.

### ⚙️ Solution Walkthrough
The method is called on the input string.
\`\`\`javascript
const greeting = "hello world";
const loudGreeting = greeting.toUpperCase(); // "HELLO WORLD"
\`\`\`
Note that string methods do not modify the original string; they return a new one.

### 📚 Key Concepts
- **\`String.prototype.toUpperCase()\`**: A standard method for string case conversion.
- **Immutability of Strings**: Primitives like strings are immutable. Methods that operate on them always return a new string.
`,

  // problem explanation--> 65
  "string-to-lowercase": `
### 💡 Problem Breakdown
The \`.toLowerCase()\` method is the counterpart to \`.toUpperCase()\`. It returns a new string with all characters converted to lowercase.

### ⚙️ Solution Walkthrough
极 The method is called on the input string.
\`\`\`javascript
const greeting = "HELLO WORLD";
const quietGreeting = greeting.toLowerCase(); // "hello world"
\`\`\`
### 📚 Key Concepts
- **\`String.prototype.toLowerCase()\`**: A standard method for string case conversion.
`,

  // problem explanation--> 66
  "string-includes": `
### 💡 Problem Breakdown
The \`.includes()\` string method (ES6) is a simple way to check if one string can be found within another. It returns a boolean (\`true\` or \`false\`).

### ⚙️ Solution Walkthrough
The method is called on the main string, with the substring to search for as the argument.
\`\`\`javascript
const sentence = "The quick brown fox";
const hasQuick = sentence.includes("quick"); // true
const hasCat = sentence.includes("cat");     // false
\`\`\`
The search is case-sensitive.

### 📚 Key Concepts
- **\`String.prototype.includes()\`**: A modern method for substring searching.
`,

  // problem explanation--> 67
  "string-slice": `
### 💡 Problem Breakdown
The \`.slice()\` string method extracts a section of a string and returns it as a new string, without modifying the original string.

### ⚙️ Solution Walkthrough
The method takes a start index and an optional end index.
\`\`\`javascript
const str = "JavaScript";
// Extracts from index 0 up to (but not including) index 4
const sliced = str.slice(0, 4); // "Java"
\`\`\`
If the end index is omitted, it slices to the end of the string.

### 📚 Key Concepts
- **\`String.prototype.slice()\`**: A method for extracting substrings.
`,

  // problem explanation--> 68
  "string-trim": `
### 💡 Problem Breakdown
The \`.trim()\` method removes whitespace (spaces, tabs, newlines) from both the beginning and end of a string.

### ⚙️ Solution Walkthrough
The method is called on a string that has leading and trailing spaces.
\`\`\`javascript
const greeting = "   Hello   ";
const trimmed = greeting.trim(); // "Hello"
\`\`\`
This is very useful for cleaning up user input before processing it.

### 📚 Key Concepts
- **\`String.prototype.trim()\`**: A method for removing surrounding whitespace.
`,

  // problem explanation--> 69
  "for-loop-over-array": `
### 💡 Problem Breakdown
This problem revisits the \`for\` loop, showing the traditional way to iterate through an array's elements using an index.

### ⚙️ Solution Walkthrough
A \`for极\` loop is set up to run as long as the counter \`i\` is less than the array's length. In each iteration, bracket notation \`arr[i]\` is used to access the element at the current index.
\`\`\`javascript
const letters = ['a', 'b', 'c'];
let result = '';
for (let i = 0; i < letters.length; i++) {
  result += letters[i] + ' ';
}
// result becomes "a b c "
\`\`\`
While modern alternatives like \`.forEach()\` or \`for...of\` are often preferred, this classic loop gives you full control over the index.

### 📚 Key Concepts
- **Array Iteration**: The process of visiting each element in an array.
`,

  // problem explanation--> 70
  "area-of-rectangle": `
### 💡 Problem Breakdown
This is a practical problem that applies basic multiplication. The area of a rectangle is calculated as its width multiplied by its height.

### ⚙️ Solution Walkthrough
A function takes width and height as parameters and returns their product.
\`\`\`javascript
function getArea(width, height) {
  return width * height;
}
getArea(10, 5); // 50
\`\`\`
### 📚 Key Concepts
- **Applying Math**: Using programming to solve simple real-world formulas.
`,

  // problem explanation--> 71
  "celsius-to-fahrenheit": `
### 💡 Problem Breakdown
This problem involves implementing a specific mathematical formula for temperature conversion: \`(Celsius * 9/5) + 32 = Fahrenheit\`.

### ⚙️ Solution Walkthrough
The function takes a Celsius value and applies the conversion formula.
\`\`\`javascript
function convertToF(celsius) {
  return (celsius * 9) / 5 + 32;
}
convertToF(20); // 68
\`\`\`
### 📚 Key Concepts
- **Operator Precedence**: JavaScript follows standard mathematical order of operations (multiplication/division before addition/sub极traction).
`,

  // problem explanation--> 72
  "check-undefined": `
### 💡 Problem Breakdown
This problem demonstrates the concept of \`undefined\`, which is the default value of a variable that has been declared but not yet assigned a value.

### ⚙️ Solution Walkthrough
A variable \`x\`极 is declared using \`极let\` without an assignment. When its value is checked, it is \`undefined\`.
\`\`\`javascript
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"
\`\`\`
### 📚 Key Concepts
- **\`undefined\`**: A primitive type and value in JavaScript.
`,

  // problem explanation--> 73
  "check-null": `
### 💡 Problem Breakdown
The value \`null\` is used to represent the intentional absence of any object value. It must be explicitly assigned by a developer. This problem highlights its value and a famous quirk of its type.

### ⚙️ Solution Walkthrough
A variable \`x\` is explicitly assigned the value \`null\`.
\`\`\`javascript
const x = null;
console.log(x); // null
console.log(typeof x); // "object"
\`\`\`
The fact that \`typeof null\` returns \`"object"\` is a well-known bug from the earliest days of JavaScript that cannot be fixed without breaking existing code.

### 📚 Key Concepts
- **\`null\`**: A primitive value representing the intentional absence of an object value.
`,

  // problem explanation--> 74
  "string-repeat": `
### 💡 Problem Breakdown
The \`.repeat()\` string method (ES6) creates and returns a new string which contains the specified number极 of copies of the string on which it was called, concatenated together.

### ⚙️ Solution Walkthrough
The method is called on the input string, with the number of repetitions as the argument.
\`\极\`javascript
const str = "abc";
const repeated = str.repeat(3); // "abcabcabc"
\`\`\`
### 📚 Key Concepts
- **\`String.prototype.repeat()\`**: A modern method for repeating strings.
`,

  // problem explanation--> 75
  "array-join": `
### 💡 Problem Breakdown
The \`.join()\` method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

### ⚙️ Solution Walkthrough
The method is called on an array. The argument passed to \`.join()\` is the "separator" that will be placed between each element.
\`\`\`javascript
const elements = ['fire', 'air', 'water'];
elements.join();         // "fire,air,water"
elements.join('');       // "fireairwater"
elements.join(' - ');    // "fire - air - water"
\`\`\`
If no separator is provided, a comma is used by default.

### 📚 Key Concepts
- **\`Array.prototype.join()极\`**: A method for converting an array into a string.
`,

  // problem explanation--> 76
  "find-array-average": `
### 💡 Problem Breakdown
This is a multi-step problem. To find the average of a set of numbers, you first need to find their sum, and then divide that sum by the count of the numbers.

### ⚙️ Solution Walkthrough
The solution first uses the \`.reduce()\` method to efficiently calculate the sum of all elements in the array. Then, it divides the sum by the array's length.
\`\`\`javascript
function findAverage(arr) {
  if (arr.length === 0) return 0; // Handle edge case of empty array
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / arr.length;
}
findAverage([10, 20, 30, 40, 50]); // 极30
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.reduce()\`**: A powerful method for reducing an array to a single value (like a sum).
- **Average**: A fundamental statistical calculation.
`,

  // problem explanation--> 77
  "absolute-value": `
### 💡 Problem Breakdown
The absolute value of a number is its distance from zero on the number line, which is always non-negative. For example, the absolute value of -10 is 10. The \`Math.abs()\` function is used for this.

### ⚙️ Solution Walkthrough
The \`Math.abs()\` function is called with the input number.
\`\`\`javascript
Math.abs(-10); // 10
Math.abs(10);  // 10
\`\`\`
### 📚 Key Concepts
- **\`Math.abs()\`**: A static method of the \`Math\` object for getting the absolute value.
`,

  // problem explanation--> 78
  "round-number-up": `
### 💡 Problem Breakdown
The \`Math.ceil()\` function ("ceil" is short for "ceiling") always rounds a number **up** to the next largest integer.

### ⚙️ Solution Walkthrough
The \`Math.ceil()\` function is called with the input number.
\`\`\`javascript
Math极.ceil(4.2);  // 5
Math.ceil(4.8);  // 5
Math.ceil(4.0);  // 4
\`\`\`
### 📚 Key Concepts
- **\`Math.ceil()\`**: A static method of the \`Math\` object for rounding up.
`,

  // problem explanation--> 79
  "round-number-down": `
### 💡 Problem Breakdown
The \`Math.floor()\` function always rounds a number **down** to the nearest integer.

### ⚙️ Solution Walkthrough
The \`Math.floor()\` function is called with the input number.
\`\`\`javascript
Math.floor(4.2);  // 4
Math.floor(4.8);  // 4
Math.floor(4.0);  // 4
\`\`\`
### 📚 Key Concepts
- **\`Math.floor()\`**: A static method of the \`Math\` object for rounding down.
`,

  // problem explanation--> 80
  "极round-to-nearest": `
### 💡 Problem Breakdown
The \`Math.round()\` function rounds a number to the nearest integer, following standard mathematical rules (0.5 and higher rounds up).

### ⚙️ Solution Walkthrough
The \`Math.round()\` function is called with the input number.
\`\`\`javascript
Math.round(4.2); // 4
Math.round(4.8); // 5
Math.round(4.5); // 5
\`\`\`
### 📚 Key Concepts
- **\`Math.round()\`**: A static method of the \`Math\` object for standard rounding.
`,

  // problem explanation--> 81
  "random-number": `
### 💡 Problem Breakdown
The \`Math.random()\` function generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).

### ⚙️ Solution Walkthrough
The function is called with no arguments.
\`\`\`javascript
Math.random(); // returns a value like 0.123456789...
\`\`\`
This function is the basis for generating random numbers within any range.

### 📚 Key Concepts
- **\`Math.random()\`**: A static method of the \`Math\` object for generating random numbers.
`,

  // problem explanation--> 82
  "random-integer-in-range": `
### 💡 Problem Breakdown
This is a common practical problem that builds on \`Math.random()\`. The goal is to generate a random *integer* between a specified minimum and maximum value, inclusive of both.

### ⚙️ Solution Walkthrough
The standard formula for this is:
\`\`\`javascript
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
\`\`\`
1.  **\`Math.random() * (max - min + 1)\`**: This generates a random decimal between 0 and the size of our range.
2.  **\`Math.floor(...)\`**: This converts the random decimal into an integer.
3.  **\`... + min\`**: This shifts the range so that it starts at our desired minimum value.

### 📚 Key Concepts
- **Random Number Generation**: A common programming task with a standard formula.
`,

  // problem explanation--> 83
  "string-starts-with": `
### 💡 Problem Breakdown
The \`.startsWith()\` string method (ES6) checks if极 a string begins with the characters of another string. It returns a boolean.

### ⚙️ Solution Walkthrough
The method is called on the main string with the substring to check for as the argument.
\`\`\`javascript
const str = "Hello world";
str.startsWith("Hello"); // true
str.startsWith("world"); // false
\`\`\`
The search is case-sensitive.

### 📚 Key Concepts
- **\`String.prototype.startsWith()\`**: A modern method for checking the beginning of a string.
`,

  // problem explanation--> 84
  "string-ends-with": `
### 💡 Problem Breakdown
The \`.endsWith()\` string method (ES6) is the counterpart to \`.startsWith()\`. It checks if a string ends with the characters of another string.

### ⚙️ Solution Walkthrough
The method is called on the main string with the substring to check for as the argument.
\`\`\`javascript
const str = "Hello world";
str.endsWith("world"); // true
str.endsWith("Hello"); // false
\`\`\`
The search is case-sensitive.

### 📚 Key Concepts
- **\`String.prototype.endsWith()\`**: A modern method for checking the end of a string.
`,

  // problem explanation--> 85
  "string-replace-first": `
### 💡 Problem Breakdown
The \`.replace()\` string method searches a string for a specified value and returns a new string where the **first match** has been replaced.

### ⚙️ Solution Walkthrough
The method is called with the target substring and the replacement substring.
\`\`\`javascript
const str = "good dog good day";
const newStr = str.replace("good", "happy"); // "happy dog good day"
\`\`\`
Note that only the first occurrence of "good" was replaced.

### 📚 Key Concepts
- **\`String.prototype.replace()\`**: A fundamental method for string substitution.
`,

  // problem explanation--> 86
  "string-split": `
### 💡 Problem Breakdown
The \`.split()\` method divides a string into an ordered list of substrings by searching for a separator pattern, puts these substrings into an array, and returns the array.

### ⚙️ Solution Walkthrough
The method is called on a sentence with a space character as the separator.
\`\`\`javascript
const str = "JavaScript is fun";
const words = str.split(' '); // ["JavaScript", "is", "极fun"]
\`极\`\`
This is a very common way to break a sentence into an array of words for further processing.

### 📚 Key Concepts
- **\`String.prototype.split()\`**: A method for converting a string into an array.
`,

  // problem explanation--> 87
  "array-shift": `
### 💡 Problem Breakdown
The \`.shift()\` method removes the **first** element from an array and returns that removed element. This method changes the length of the array.

### ⚙️ Solution Walkthrough
The method is called on an array with no arguments.
\`\`\`javascript
const numbers = [1, 2, 3];
const first = numbers.shift();
console.log(first);   // 1
console.log(numbers); // [2, 3]
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.shift()\`**: A method for removing the first element of极 an array.
`,

  // problem explanation--> 88
  "array-unshift": `
### 💡 Problem Breakdown
The \`.unshift()\` method is the counterpart to \`.shift()\`. It adds one or more elements to the **beginning** of an array and returns the new length of the array.

### ⚙️ Solution Walkthrough
The method is called with the element(s) to add to the front.
\`\`\`javascript
const numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4]
极\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.unshift()\`**: A method for adding elements to the beginning of an array.
`,

  // problem explanation--> 89
  "array-includes": `
### 💡 Problem Breakdown
The \`.includes()\` array method (ES6) determines whether an array includes a certain value among its entries, returning \`true\` or \`false\`.

### ⚙️ Solution Walkthrough
The method is called with the value to search for.
\`\`\`javascript
const fruits = ["apple", "banana", "cherry"];
fruits.includes("banana"); // true
fruits.includes("grape");  // false
\`\`\`
It uses a more intuitive comparison than \`.indexOf()\` (e.g., it can correctly find \`NaN\`).

### 📚 Key Concepts
- **\`Array.prototype.includes()\`**: A modern and readable way to check for the presence of an element in an array.
`,

  // problem explanation--> 90
  "array-index-of": `
### 💡 Problem Breakdown
The \`.indexOf()\` method returns the first index at which a given element can be found in the array. If the element is not present, it returns -1.

### ⚙️ Solution Walkthrough
The method is called with the value极 to search for.
\`\`\`javascript
const letters = ['a', 'b', 'c', 'b'];
letters.indexOf('b'); // 1 (finds the first occurrence)
letters.indexOf('极d'); // -1 (极not found)
\`\`\`
Before \`.includes()\` was added, checking \`arr.indexOf(val) !== -1极\` was the standard way to see if an array contained a value.

### 📚 Key Concepts
- **\`Array.prototype.indexOf()\`**: A method for finding the index of an element.
`,

  // problem explanation--> 91
  "array-slice": `
### 💡 Problem Breakdown
The \`.slice()\` array method returns a shallow copy of a portion of an array into a new array object. The original array is not modified.

### ⚙极 Solution Walkthrough
The method takes a start index and an optional end index.
\`\`\`javascript
const letters = ['a', 'b', 'c', 'd', 'e'];
// Extracts from index 1 up to (but not including) index 3
const sliced = letters.slice(1, 3); // ['b', 'c']
\`\`\`
If called with no arguments (\`letters.slice()\`), it creates a shallow copy of the entire array.

### 📚 Key Concepts
- **\`Array.prototype.slice()\`**: A non-mutating method for creating subarrays.
`,

  // problem explanation--> 92
  "for-of-loop-array": `
### 💡 Problem Breakdown
The \`for...of\` loop (极ES6) is the modern, preferred way to iterate over "iterable" objects like arrays, strings, maps, and sets. It directly gives you the **value** of each element, which is often more convenient than working with an index.

### ⚙️ Solution Walkthrough
The loop iterates directly over the values of the array.
\`\`\`javascript
const words = ["JS", "is", "great"];
let sentence = '';
for (const word of words) {
  sentence += word + ' ';
}
// sentence becomes "JS is great "
\`\`\`
### 📚 Key Concepts
- **\`for...of\` Loop**: A modern syntax for iterating over the values of an iterable.
`,

  // problem explanation--> 93
  "is-nan-check": `
### 💡 Problem Breakdown
\`NaN\` ("Not a Number") is a special numeric value that has the unique property of not being equal to itself (\`NaN === NaN\` is false). Therefore, you cannot check for it with an equality operator. The correct way is to use the global \`isNaN()\` function or the more reliable \`Number.isNaN()\`.

### ⚙️ Solution Walkthrough
The \`Number.isNaN()\` method is used. It returns \`true\` only if the value is of type Number and is also \`NaN\`.
\`\`\`javascript
Number.isNaN(NaN);        // true
Number.isNaN(0 / 0);      // true
Number.isNaN("hello");    // false (because it's not of type Number)
\`\`\`
The older global \`isNaN("hello")\` coerces the string to a number first, resulting in \`NaN\`, so it returns \`true\`, which can be confusing. \`Number.isNaN()\` is stricter and generally preferred.

### 📚 Key Concepts
- **\`NaN\`**: A special value in the number type.
- **\`Number.isNaN()\`**: The safest way to check if a value is \`NaN\`.
`,

  // problem explanation--> 94
  "check-truthy": `
### 💡 Problem Breakdown
In JavaScript, a "truthy" value is a value that is considered \`true\` when encountered in a boolean context. All values are truth极y except for the six "falsy" values.

### ⚙️ Solution Walkthrough
You can check for truthiness by using a value directly in a condition or by coercing it to a boolean with the double NOT operator (\`!!\`).
\`\`\`javascript
function isTruthy(value) {
  return !!value;
}
isTruthy("hello"); // true
isTruthy(1);       // true
isTruthy({});      // true
isTruthy(0);       // false
\`\`\`
### 📚 Key Concepts
- **Truthy**: Any value that is not falsy.
`,

  // problem explanation--> 95
  "check-falsy": `
### 💡 Problem Breakdown
A "falsy" value is a value that is considered \`false\` when encountered in a boolean context. There are only six falsy values in JavaScript:
- \`false\`
- \`0\`
- \`""\` (empty string)
- \`null\`
- \`undefined极\`
- \`NaN\`

### ⚙️ Solution Walkthrough
You can check for falsiness by using the logical NOT operator (\`!\`).
\`\`\`javascript
function isFalsy(value) {
  return !value;
}
isFalsy(0);       // true
isFalsy("");      // true
isFalsy(null);    // true
isFalsy("hello"); // false
\`\`\`
### 📚 Key Concepts
- **Falsy**: A small, specific set of values that evaluate to false in boolean contexts.
`,

  // problem explanation--> 96
  "get-square-root": `
### 💡 Problem Breakdown
The \`Math.sqrt()\` function is used to calculate the square root of a number.

### ⚙️ Solution Walkthrough
The function is called with a non-negative number.
\`\`\`javascript
Math.sqrt(16); // 4
Math.sqrt(9);  // 3
\`\`\`
If a negative number is provided, it returns \`NaN\`.

### 📚 Key Concepts
- **\`Math.sqrt()\`**: A static method of the \`Math\` object.
`,

  // problem explanation--> 97
  "get-current-year": `
### 💡 Problem Breakdown
The built-in \`Date\` object is used to work with dates and times in JavaScript. This problem demonstrates how to create a new \`Date\` object for the current moment and extract the year from it.

### ⚙️ Solution Walkthrough
First, a new \`Date\` object is created. Then, the \`.getFullYear()\` method is called on it.
\`\`\`javascript
function getCurrentYear() {
  const now = new Date();
  return now.getFullYear();
}
getCurrentYear(); // e.g., 2024
\`\`\`
### 📚 Key Concepts
- **\`Date\` Object**: The built-in object for handling dates and times.
- **\`getFullYear()\`**: A method on \`Date\` instances to get the four-digit year.
`,

  // problem explanation--> 98
  "template-literal-expression": `
### 💡 Problem Breakdown
Template literals are powerful because they can embed not just variables, but any valid JavaScript expression.

### ⚙️ Solution Walkthrough
An addition expression (\`a + b\`) is placed directly inside the \`\${...}\` placeholder within a template literal. The expression is evaluated first, and its result is then embedded into the string.
\`\`\`javascript
function createSumString(a, b) {
  return \`The sum of \${a} and \${b} is \${a + b}.\`;
}
createSumString(5, 10); // "The sum of 5 and 10 is 15."
\`\`\`
### 📚 Key Concepts
- **Expressions in Template Literals**: A key feature that enhances their flexibility.
`,

  // problem explanation--> 99
  "char-at极-index": `
### 💡 Problem Breakdown
The \`.charAt()\` method is another way to get the character at a specific index in a string. It is functionally very similar to using bracket notation (\`str[index]\`).

### ⚙️ Solution Walkthrough
The \`.charAt()\` method is called on the string with the desired index as its argument.
\`\`\`javascript
const str = "JavaScript";
const char = str.charAt(4); // "S"
\`\`\`
A minor difference from bracket notation is that if the index is out of bounds, \`.charAt()\` returns an empty string, whereas bracket notation returns \`undefined\`.

### 📚 Key Concepts
- **\`String.prototype.charAt()\`**: A standard method for accessing characters by index.
`,

  // problem explanation--> 100
  "nested-object": `
### 💡 Problem Breakdown
Objects can contain values of any type, including other objects. This allows you极 to create nested or hierarchical data structures.

### ⚙️ Solution Walkthrough
A \`person\` object is created. One of its properties, \`address\`, has another object as its value.
\`\`\`javascript
const person = {
  name: "John Doe",
  address: {
    street: "极123 Main St",
    city: "Anytown"
  }
};
\`\`\`
This structure is very common for representing complex data, such as from a JSON API.

### 📚 Key Concepts
- **Nested Data Structures**: Building complex data representations by nesting objects and arrays.
`,

  // problem explanation--> 101
  "access-nested-object-property": `
### 💡 Problem Breakdown
To access a property in a nested object, you "chain" the accessors together.

### ⚙️ Solution Walkthrough
Chained dot notation is used to first access the \`address\` object within the \`person\` object, and then access the \`city\` property within that \`address\` object.
\`\`\`javascript
const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};
const city = person.address.city; // "Anytown"
\`\`\`
### 📚 Key Concepts
- **Chaining**: Using dot or bracket notation sequentially to navigate a nested data structure.
`,

  // problem explanation--> 102
  "nested-if-statement": `
### 💡 Problem Breakdown
You can place an \`if\` statement inside another \`if极\` statement to check a secondary condition only if the first condition is met.

### ⚙️ Solution Walkthrough
The outer \`if\` checks if the number is positive. Only if that is true does the inner \`if\` statement run to check if the number is even.
\`\`\`javascript
function checkNumber(num) {
  if (num > 极0) {
    if (num % 2 === 0) {
      return 'Positive and Even';
    } else {
      return 'Positive and Odd';
    }
  }
  return 'Not positive';
}
checkNumber(10); // "Positive and Even"
\`\`\`
### 📚 Key Concepts
- **Nested Control Flow**: Embedding control structures within one another to create more complex logic.
`,

  // problem explanation--> 103
  "switch-with-fallthrough": `
### 💡 Problem Breakdown
In a \`switch\` statement, if you omit the \`break\` statement for a \`case\`, the execution will "fall through" to the next \`case\`'s code block. This can be used intentionally to have multiple cases share the same result.

### ⚙️ Solution Walkthrough
The \`switch\` statement checks the day of the week. For the \`case 'saturday':\`, there is no \`break\`. This means if the day is "saturday", execution will fall through and run the code for \`case 'sunday':\` as well.
\`\`\`javascript
function checkWeekend(day) {
  switch (day.toLowerCase()) {
    case 'saturday':
    case 'sunday':
      return "It's the weekend!";
    default:
      return "It's a weekday.";
  }
}
checkWeekend("Sunday"); // "It's the weekend!"
\`\`\`
### 📚 Key Concepts
- **Fall-through**: The default behavior of a \`switch\` statement without \`break\` keywords.
`,

  // problem explanation--> 104
  "for-loop-break": `
### 💡 Problem Breakdown
The \`break\` statement is used to exit a loop (like \`for\`, \`while\`, or \`switch\`) immediately, regardless of the loop's condition.

### ⚙️ Solution Walkthrough
The \`for\` loop iterates through an array. Inside the loop, an \`if\` statement checks if the current number is greater than 5. If it is, \`break\` is called, and the loop terminates immediately.
\`\`\`javascript
function findFirstBigNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      return \`Found \${arr[i]} at index \${i} and stopped.\`;
      break; // Exit the loop
    }
  }
  return 'No number greater than 5 found.';
}
findFirstBigNumber([1, 2, 9, 4, 5]); // "Found 9 at index 2 and stopped."
\`\`\`
### 📚 Key Concepts
- **\`break\` Statement**: A control flow statement for exiting loops and switches.
`,

  // problem explanation--> 105
  "for-loop-continue": `
### 💡 Problem Breakdown
The \`continue\` statement is used inside a loop to skip the rest极 of the current iteration and proceed to the next one.

### ⚙️ Solution Walkthrough
The极 \`for\` loop iterates through an array to sum its positive numbers. Inside the loop, an \`if\` statement checks if the current number is negative. If it is, \`continue\` is called, which skips the \`sum += arr[i]\` line and starts the next iteration of the loop.
\`\`\`javascript
function sumPositive(arr极) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      continue; // Skip this iteration
    }
    sum += arr[i];
  }
  return sum;
}
sumPositive([1, -2, 3, -4, 5]); // 9
\`\`\`
### 📚 Key Concepts
- **\`continue\` Statement**: A control flow statement for skipping an iteration in a loop.
`,

  // problem explanation--> 106
  "array-concat": `
### 💡 Problem Breakdown
The \`.concat()\` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

### ⚙️ Solution Walkthrough
The \`.concat()\` method is called on the first array, with the second array passed as an argument.
\`\`\`javascript
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];
const newArr = arr1.concat(arr2);
console.log(newArr); // ['a', 'b', 'c', 'd']
\`\`\`
The spread syntax (\`[...arr1, ...arr2]\`) is a more modern and often preferred way to achieve the same result.

### 📚 Key Concepts
- **\`Array.prototype.concat()\`**: A method for merging arrays.
`,

  // problem explanation--> 107
  "string-last-index-of": `
### 💡 Problem Breakdown
The \`.lastIndexOf()\` method returns the index of the **last** occurrence of a specified value in a string. It searches the string backwards. If the value is not found, it returns -1.

### ⚙️ Solution Walkthrough
The method is called on the string with the substring to search for.
\`\`\`javascript
const str = "can极al";
str.lastIndexOf('a'); // 3
\`\`极\`
This is useful when you need to find the last occurrence of a character, for example, to find a file extension by looking for the last ".".

### 📚 Key Concepts
- **\`String.prototype.lastIndexOf()\`**: A method for finding the last index of a substring.
`,

  // problem explanation--> 108
  "number-to-fixed": `
### 💡 Problem Breakdown
The \`.toFixed()\` method formats a number using fixed-point notation and returns a **string** representation of the number. It's commonly used for formatting currency values.

### ⚙️ Solution Walkthrough
The method is called on a number, with the desired number of decimal places as the argument.
\`\`\`javascript
const num = 3.14159;
num.toFixed(2); // returns "3.14"
\`\`\`
The result is rounded if necessary.

### 📚 Key Concepts
- **\`Number.prototype.toFixed()\`**: A method for formatting numbers to a specific number of decimal places.
`,

  // problem explanation--> 109
  "for-in-loop-object": `
### 💡 Problem Breakdown
The \`for...in\` loop is a way to iterate over the **enumerable properties (keys)** of an object.

### ⚙️ Solution Walkthrough
The loop iterates through the \`person\` object. In each iteration, the variable \`key\` holds the name of the current property (e.g., "name", then "age"). Bracket notation \`person[key]\` is then used to access the value.
\`\`\`javascript
const person = { name: 'Alice', age: 28 };
let result = '';
for (const key in person) {
  result += \`\${key}: \${person[key]} | \`;
}
// result becomes "name: Alice | age: 28 | "
\`\`\`
Note: \`极for...in\` should generally not be used to iterate over arrays because it can iterate over unexpected properties and doesn't guarantee order. Use \`for...of\` for arrays instead.

### 📚 Key Concepts
- **\`for...in\` Loop**: A loop for iterating over object keys.
`,

  // problem explanation--> 110
  "array-reverse": `
### 💡 Problem Breakdown
The \`.reverse()\` method reverses an array **in place**. The first array element becomes the last, and the last array element becomes the first.

### ⚙️ Solution Walkthrough
The method is called on an array with no arguments.
\`\`\`javascript
const numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers); // [4, 3, 2极, 1]
\`\`\`
Because it modifies the original array, if you need to preserve the original, you should create a copy first (e.g., \`[...arr].reverse()\`).

### 📚 Key Concepts
- **\`Array.prototype.reverse()\`**: A method for reversing the order of array elements.
- **In-place Modification**: A method that mutates the original data structure.
`,

  // problem explanation--> 111
  "simple-type-coercion": `
### 💡 Problem Breakdown
Type coercion is the automatic conversion of values from one data type to another. The \`+\` operator is a common example. If one of the operands is a string, JavaScript will convert the other operand to a string and perform concatenation.

### ⚙️ Solution Walkthrough
The number \`5\` is added to the string \`'5'\`.
\`\`\`javascript
const result = 5 + '5'; // The number 5 is coer极ed to the string '5'
console.log(result);      // "55"
console.log(typeof result); // "string"
\`\`\`
This behavior can be a source of bugs if not understood properly.

### 📚 Key Concepts
- **Type Coercion**: A core, and sometimes tricky, feature of JavaScript.
`,

  // problem explanation--> 112
  "typeof-null-b极ug": `
### 💡 Problem Breakdown
This problem highlights a famous, long-standing bug in JavaScript. When the \`typeof\` operator is used on the value \`null\`, it incorrectly returns the string \`"object"\`.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is applied to \`null\`.
\`\`\`javascript
typeof null; // "object"
\`\`\`
This is a mistake from the very first version of JavaScript that has been kept for backward compatibility. The correct way to check for \`null\` is with strict equality: \`value === null\`.

### 📚 Key Concepts
- **Legacy Bugs**: quirks in the language that are maintained for compatibility with older code.
`,

  // problem explanation--> 113
  "get-object-keys": `
### 💡 Problem Breakdown
The \`Object.keys()\` method returns an array of a given object's own enumerable property **names (keys)**.

### ⚙️ Solution Walkthrough
The method is called with the object as its argument.
\`\`\`javascript
const obj = { a: 1, b: 2, c极: 3 };
const keys = Object.keys(obj); // ["a", "b", "c"]
极\`\`\`
This is very useful for when you need to iterate over an object's keys.

### 📚 Key Concepts
- **\`Object.keys()\`**: A static method of the \`Object\` constructor.
`,

  // problem explanation--> 114
  "get-object-values": `
### 💡 Problem Breakdown
The \`Object.values()\` method (ES2017) returns an array of a given object's own enumerable property **values**.

### ⚙️ Solution Walkthrough
The method is called with the object as its argument.
\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj); // [1, 2, 3]
\`\`\`
### 📚 Key Concepts
- **\`Object.values()\`**: A modern static method of the \`Object\` constructor for extracting values.
`,

  // problem explanation--> 115
  "check-property-exists": `
### 💡 Problem Breakdown
The \`in\` operator is a simple way to check if a specified property exists in an object. It returns \`true\` if the property is found, including properties from the object's prototype chain.

### ⚙️ Solution Walkthrough
The \`in\` operator is used to check for the existence of two keys.
\`\`\`javascript
const obj = { a: 1 };
'a' in obj; // true
'b' in obj; // false
\`\`\`
A more common method is \`obj.hasOwnProperty('a')\`, which does *not极* check the prototype chain.

### 📚 Key Concepts
- **\`in\` operator**: An operator for checking property existence.
`,

  // problem explanation--> 116
  "delete-object-property": `
### 💡 Problem Breakdown
The \`delete\` operator is used to remove a property from an object.

### ⚙️ Solution Walkthrough
The \`delete\` operator is used on the \`b\` property of the object.
\`\`\`javascript
const obj = { a: 1, b: 2 };
delete obj.b;
console.log(obj); // { a: 1 }
\`\`\`
The operation returns \`true\极 if successful. It should not be used on variables or function names.

### 📚极 Key Concepts
- **\`delete\` operator**: An operator for removing object properties.
`,

  // problem explanation--> 117
  "array-from-string": `
### 💡 Problem Breakdown
The \`Array.from()\` method (ES6) creates a new, shallow-copied \`Array\` instance from an iterable or array-like object. Strings are iterable, so this method can be used to convert a string into an array of its characters.

### ⚙️ Solution Walkthrough
The method is called with the string as its argument.
\`\`\`javascript
const str = "hello";
const arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
\`\`\`
This is functionally similar to \`str.split('')\`.

### 📚 Key Concepts
- **\`Array.from()\`**: A modern static method for creating arrays.
`,

  // problem explanation--> 118
  "array-find": `
### 💡 Problem Breakdown
The \`.find()\` method returns the **value** of the first element in the provided array that satisfies the provided testing function (a "predicate"). If no values satisfy the testing function, \`undefined\` is returned.

### ⚙️ Solution Walkthrough
The method is called with a predicate function that checks if a number is greater than 10.
\`\`\`javascript
const numbers = [5, 8, 12, 4];
const firstBigNumber = numbers.find(n => n > 10); // 12
\`\`\`
It stops searching as soon as it finds the first match.

### 📚 Key Concepts
- **\`Array.prototype.find()\`**: A method for finding the first element that matches a condition.
`,

  // problem explanation--> 119
  "array-findIndex": `
### 💡 Problem Breakdown
The \`.findIndex()\` method is similar to \`.极find()\`, but it returns the **index** of the first element that satisfies the predicate, instead of its value. If no element极 is found, it returns -1.

### ⚙️ Solution Walkthrough
The method is called with a predicate function that checks if a number is greater than 10.
\`\`\`javascript
const numbers = [5, 8, 12, 4];
const index极 = numbers.findIndex(n => n > 10); // 2
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.findIndex()\`**: A method for finding the index of the first element that matches a condition.
`,

  // problem explanation--> 120
  "array-every": `
### 💡 Problem Breakdown
The \`.every()\` method tests whether **all** elements in the array pass the test implemented by the provided predicate function. It returns a boolean value.

### ⚙️ Solution Walkthrough
The method is called with a predicate that checks if a number is positive.
\`\`\`javascript
const numbers = [1, 5, 9, 12];
const allPositive = numbers.every(n => n > 0); // true
\`\`\`
The method will stop and return \`false\` as soon as it finds the first element that does not pass the test.

### 📚 Key Concepts
- **\`Array.prototype.every()\`**: A method for universal quantification ("for all").
`,

  // problem explanation--> 121
  "array-some": `
### 💡 Problem Breakdown
The \`.some()\` method tests whether **at least one** element in the array passes the test implemented by the provided predicate function. It returns a boolean value.

### ⚙️ Solution Walkthrough
The method is called with a predicate that checks if a number is negative.
\`\`\`javascript
const numbers = [1, 5, -9, 12];
const hasNegative = numbers.some(n => n < 0); //极 true
\`\`\`
The method will stop and return \`true\` as soon as it finds the first element that passes the test.

### 📚 Key Concepts
- **\`Array.prototype.some()\`**: A method for existential quantification ("极there exists at least one").
`,

  // problem explanation--> 122
  "string-replaceAll": `
### 💡 Problem Breakdown
The \`.replaceAll()\` method (ES2021) returns a new string with **all** matches of a pattern replaced by a replacement. This极 is a convenient alternative to using \`.replace()\` with a global regular expression.

### ⚙️ Solution Walkthrough
The method is called with the target string and the replacement string.
\`\`\`javascript
const str = "good dog good day";
const newStr = str.replaceAll("good", "happy"); // "happy dog happy day"
\`\`\`
### 📚 Key Concepts
- **\`String.prototype.replaceAll()\`**: A modern method for global string substitution.
`,

  // problem explanation--> 123
  "do-while-loop": `
### 💡 Problem Breakdown
The \`do...while\` loop is a variant of the \`while\` loop. Its key feature is that the code block is executed **at least once**, because the condition is checked *after* the block runs.

### ⚙️ Solution Walkthrough
A loop is created where the condition \`i < 5\` is initially false.
\`\`\`javascript
let i = 5;
let result = '';
do {
  result += i + ' ';
  i++;
} while (i < 5);
// result becomes "5 "
\`\`\`
The code block runs once, setting \`result\` to "5 ". Then, the condition \`5 < 5\` is checked, which is false, and the loop terminates.

### 📚 Key Concepts
- **\`do...while\` Loop**: A loop that guarantees at least one execution.
`,

  // problem explanation--> 124
  "fahrenheit-to-celsius": `
### 💡 Problem Breakdown
This is the reverse temperature conversion, implementing the formula: \`(Fahrenheit - 32) * 5/9 = Celsius\`.

### ⚙️ Solution Walkthrough
The function takes a Fahrenheit value and applies the conversion formula. Parentheses are important to ensure the subtraction happens before the multiplication.
\`\`\`javascript
function convertToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
convert极ToC(68); // 20
\`\`\`
### 📚 Key Concepts
- **Operator Precedence**: Using parentheses \`()\` to control the order of operations.
`,

  // problem explanation--> 125
  "get-max-of-two": `
### 💡 Problem Breakdown
The \`Math.max()\` function is a convenient way to find the largest of two or more numbers.

### ⚙️ Solution Walkthrough
The function is called with the two numbers as arguments.
\`\`\`javascript
Math.max(15, 25); // 25
\`\`\`
### 📚 Key Concepts
- **\`Math.max()\`**: A static method of the \`Math\` object.
`,

  // problem explanation--> 126
  "get-min-of-two": `
### 💡 Problem Breakdown
The \`Math.min()\` function is the counterpart to \`Math.max()\`, returning the smallest of its numeric arguments.

### ⚙️ Solution Walkthrough
The function is called with the two numbers as arguments.
\`\`\`javascript
Math.min(15, 25); // 15
\`\`\`
### 📚 Key Concepts
- **\`Math.min()\`**: A static method of the \`Math\` object.
`,

  // problem explanation--> 127
  "object-with-method": `
### 💡 Problem Breakdown
A "method" is a function that is a property of an object. This problem demonstrates how极 to define and call a method.

### ⚙️ Solution Walkthrough
An object \`greeter\` is created with a property named \`greet\` whose value is a function. This method is then called using dot notation.
\`\`\`javascript
const greeter = {
  greeting: "Hello",
  greet: function(name) {
    // 'this' refers to the greeter object
    return \`\${this.greeting}, \${name}!\`;
  }
};
greeter.greet("Method"); // "Hello, Method!"
\`\`\`
### 📚 Key Concepts
- **Method**:极 A function associated with an object.
- **\`this\` Keyword**: Inside a method, \`this\` refers to the object the method was called on.
`,

  // problem explanation--> 128
  "array-sort-numbers": `
### 💡 Problem Breakdown
The \`.sort()\` method sorts the elements of an array. However, by default, it sorts them lexicographically (as strings). To sort numbers correctly, you must provide a "compare function".

### ⚙️ Solution Walkthrough
The \`.sort()\` method is called with a compare function \`(a, b) => a - b\`.
\`\`\`javascript
const numbers = [10, 5, 8, 2, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 8, 10]
\`\`\`
- If \`a - b\` returns a negative value, \`a\` is sorted before \`b\`.
- If \`a - b\` returns a positive value, \`b\` is sorted before \`a\`.
- If it returns 0, their order is unchanged.
This logic correctly sorts numbers in ascending order.

### 📚 Key Concepts
- **Compare Function**: A function provided to \`.sort()\` to define the sort order.
`,

  // problem explanation--> 129
  "array-sort-strings": `
### 💡 Problem Breakdown
When the \`.sort()\` method is called on an array of strings without a compare function, it sorts the strings alphabetically by default.

### ⚙️ Solution Walkthrough
极 The method is called on an array极 of strings.
\`\`\`javascript
const fruits = ["cherry", "apple", "banana"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]
\`\`\`
### 📚 Key Concepts
- **Lexicographical Sort**: The default sort order, which works well for strings.
`,

  // problem explanation--> 130
  "find-max-in-array": `
### 💡 Problem Breakdown
This is a classic problem of finding the largest value in a collection.

### ⚙️ Solution Walkthrough
A modern and concise way to solve this is to use the \`Math.max()\` function combined with the spread syntax (\`...\`).
\`\`\`javascript
function findMax(arr) {
  if (arr.length === 0) return -Infinity;
  return Math.max(...arr);
}
findMax([3, 9, 1, 20, 5]); // 20
\`\`\`
The spread syntax \`...arr\` expands the array elements into individual arguments for the \`Math.max\` function, so \`Math.max(...[3, 9, 1])\` becomes \`Math.max(3, 9, 1)\`.

### 📚 Key Concepts
- **Spread Syntax (\`...\`)**: A powerful feature for expanding iterables.
`,

  // problem explanation--> 131
  "find-min-in-array": `
### 💡 Problem Breakdown
This is the counterpart to the previous problem: finding the smallest value in an array.

### ⚙️ Solution Walkthrough
The solution is symmetrical to finding the max, using \`Math.min()\` with the spread syntax.
\`\`\`javascript
function findMin(arr) {
  if (arr.length === 0) return Infinity;
  return Math.min(...极arr);
}
findMin([3, 9, 1, 20, -5]); // -5
极\`\`\`
### 📚 Key Concepts
- **Spread Syntax (\`...\`)**: Used to pass array elements as arguments to a function.
`,

  // problem explanation--> 132
  "string-trimStart": `
### 💡 Problem Breakdown
The \`.trimStart()\` method (or its alias \`.trimLeft()\`) removes whitespace only from the **beginning** of a string.

### ⚙️ Solution Walkthrough
The method is called on a string with surrounding whitespace.
\`\`\`javascript
const str = "   hello   ";
str.trimStart(); // "hello   "
\`\`\`
### 📚 Key Concepts
- **\`String.prototype.trimStart()\`**: A method for removing leading whitespace.
`,

  // problem explanation--> 133
  "string-trimEnd": `
### 💡 Problem Breakdown
The \`.trimEnd()\` method (or its alias \`.trimRight()\`) removes whitespace only from the **极end** of a string.

### ⚙️ Solution Walkthrough
The method is called on a string with surrounding whitespace.
\`\`\`javascript
const str = "   hello   ";
str.trimEnd(); // "   hello"
\`\`\`
### 📚 Key Concepts
- **\`String.prototype.trimEnd()\`**: A method for removing trailing whitespace.
`,

  // problem explanation--> 134
  "array-forEach-loop": `
### 💡 Problem Breakdown
The \`.forEach()\` method is a modern way to iterate over an array's elements. It executes a provided callback function once for each array element.

### ⚙️ Solution Walkthrough
The \`.forEach()\` method is called on the array with a callback function as its argument.
\`\`\`javascript
const letters = ['a', 'b', 'c'];
let result = '';
letters.forEach(item => {
  result += \`Item: \${item}; \`;
});
\`\`\`
Unlike a \`for\` loop, \`.forEach()\` does not have a simple way to \`break\` out of it early.

### 📚 Key Concepts
- **\`Array.prototype.forEach()\`**: A functional method for array iteration.
`,

  // problem explanation--> 135
  "object-destructuring-basic": `
### 💡 Problem Breakdown
Object destructuring is an ES6 syntax that makes it possible to unpack properties from objects into distinct variables. This provides a very convenient way to access object data.

### ⚙️ Solution Walkthrough
The pattern \`const { name, age } = person;\` creates two new constants, \`name\` and \`age\`, and assigns them the values of the corresponding properties from the \`person\` object.
\`\`\`javascript
const person = { name: "Jane", age: 30, city: "New York" };
const { name, age } = person;

console.log(name); // "Jane"
console.log(age);  // 30
\`\`\`
### 📚 Key Concepts
- **Destructuring**: A convenient way to extract data from arrays and objects.
`,

  // problem explanation--> 136
  "array-destructuring-basic": `
### 💡 Problem Breakdown
Array destructuring allows you to unpack values from arrays into distinct variables based on their position.

### ⚙️ Solution Walkthrough
The pattern \`const [first, second] = numbers;\` creates two new constants, assigning the value at index 0 to \`first\` and the value at index 1 to \`second\`.
\`\`\`javascript
const numbers = [10, 20, 30];
const [first, second] = numbers;

console.log(first);  // 10
console.log(second); // 20
\`极\`\`
### 📚 Key Concepts
- **Destructuring**: A convenient way to extract data from arrays and objects.
`,

  // problem explanation--> 137
  "spread-syntax-in-arrays": `
### 💡 Problem Breakdown
The spread syntax (\`...\`) allows an iterable such as an array to be expanded into its individual elements. It's very useful for creating new arrays by combining existing ones.

### ⚙️ Solution Walkthrough
Two arrays are combined into a new array by spreading their elements inside a new array literal.
\`\`\`javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [极1, 2, 3, 4]
\`\`\`
This is a modern and readable alternative to using the \`.concat()极\` method.

### 📚 Key Concepts
- **Spread Syntax (\`...\`)**: A powerful feature for working with iterables.
`,

  // problem explanation--> 138
  "spread-syntax-in-objects": `
### 💡 Problem Breakdown
The spread syntax can also be used with objects to create new objects by merging the properties of existing ones.

### ⚙️ Solution Walkthrough
Two objects are merged. If there are any properties with the same key, the property from the last object in the spread sequence "wins".
\`\`\`javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4, b: 99 };
const combined = { ...obj1, ...obj2 }; // { a: 1, b: 99, c: 3, d极: 4 }
\`\`\`
### 📚 Key Concepts
- **Spread Properties**: The object version of the spread syntax.
`,

  // problem explanation--> 139
  "function-with-default-params": `
### 💡 Problem Breakdown
Default parameters (ES6) allow you to initialize function parameters with default values if no value or \`undefined\` is passed. This makes functions more robust.

### ⚙️ Solution Walkthrough
The \`userName\` parameter is given a default value of "Guest" directly in the function signature.
\`\`\`javascript
function greet(userName = "Guest") {
  return \`Hello, \${userName}!\`;
}

gre极et("Alice"); // "Hello, Alice!"
greet();        // "Hello, Guest!"
greet("");      // "Hello, !" (An empty string is not undefined)
\`\`\`
### 📚 Key Concepts
- **Default Parameters**: A feature for specifying default values for function parameters.
`,

  // problem explanation--> 140
  fizzbuzz: `
### 💡 Problem Breakdown
FizzBuzz is a classic, simple programming challenge. The goal is to loop through a sequence of numbers. If a number is divisible by 3, you output "Fizz". If it's divisible by 5, you output "Buzz". If it's divisible by both 3 and 5, you output "FizzBuzz". Otherwise, you just output the number.

### ⚙️ Solution Walkthrough
A loop and conditional statements are used to implement the logic. The key is to check for the "FizzBuzz" condition (divisible by 15) first, as it's the most specific case.
\`\`\`javascript
function fizzBuzz(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result.join(', ');
}
\`\`\`
### 📚 Key Concepts
- **Control Flow**: Combines loops (\`for\`) and conditionals (\`if...else if...else\`).
- **Modulo Operator (\`%\`)**: Used to check for divisibility.
`,

  // problem explanation--> 141
  "count-string-characters": `
### 💡 Problem Breakdown
The goal is to count how many times a specific character appears within a larger string.

### ⚙️ Solution Walkthrough
A simple way to do this is to loop through the string and increment a counter each time the target character is found. A more concise way is to use the \`.split()\` method.
\`\`\`javascript
function countChar(str, char) {
  // Splitting by the character creates an array. The number of occurrences
  // is one less than the length of this array.
  return str.split(char).length - 1;
}
countChar("hello world", "l"); // 3
\`\`\`
### 📚 Key Concepts
- **\`String.prototype.split()\`**: A creative use of the split method for counting.
`,

  // problem explanation--> 142
  "check-if-array": `
### 💡 Problem Breakdown
In JavaScript, \`typeof []\` returns \`"object"\`, which is not specific enough. The correct and reliable way to check if a value is an array is to use the \`Array.isArray()\` method.

### ⚙️ Solution Walkthrough
The static method \`Array.isArray()\` is called with the value to check.
\`\`\`javascript
Array.isArray([1, 2]);   // true
Array.isArray({});     // false
Array.isArray("hello"); // false
\`\`极\`
### 📚 Key Concepts
- **\`Array.isArray()\`**: The standard method for checking if a value is极 an array.
`,

  // problem explanation--> 143
  "remove-first-element-array": `
### 💡 Problem Breakdown
The \`.shift()\` method removes the **first** element from an array. It modifies the original array and returns the element that was removed.

### ⚙️ Solution Walkthrough
The method is called on the array. The return value is the removed element, and the original array is shortened.
\`\`\`javascript
const letters = ['a', 'b', 'c'];
const removed = letters.shift();
console.log(removed); // 'a'
console.log(letters); // ['b', 'c']
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.shift()\`**: A method for removing elements from the start of an array.
`,

  // problem explanation--> 144
  "add-first-element-array": `
### 💡 Problem Breakdown
The \`.unshift()\` method adds one or more elements to the **beginning** of an array. It modifies the original array and returns the new length of the array.

### ⚙️ Solution Walkthrough
The method is called on the array with the new element to add.
\`\`\`javascript
const letters = ['b', 'c'];
letters.unshift('a');
console.log(letters); // ['a', 'b', 'c']
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.unshift()\`**: A method for adding elements极 to the start of an array.
`,

  // problem explanation--> 145
  "array-copy-with-slice": `
### 💡 Problem Breakdown
The \`.slice()\` method can be used to create a "shallow copy" of an array. A shallow copy means that a new array is created, but if the elements are objects or other arrays, the references to those objects are copied, not the objects themselves.

### ⚙️ Solution Walkthrough
Calling \`.slice()\` with no arguments copies the entire array from beginning to end.
极\`\`\`javascript
const original = [1, 2, 3];
const copy = original.slice();
copy.push(4);

console.log(original); // [1, 2, 3] (unchanged)
console.log(copy);     // [1, 2, 3, 4]
\`\`\`
### 📚 Key Concepts
- **Shallow Copy**: Creating a copy of the top-level structure of an array or object.
- **Immutability**: Creating copies before making changes is a key principle of immutable patterns.
`,

  // problem explanation--> 146
  "array极-copy-with-spread": `
### 💡 Problem Breakdown
The spread syntax (\`...\`) provides a modern and highly readable way to create a shallow copy极 of an array.

### ⚙️ Solution Walkthrough
The elements of the original array are "spread" into a new array literal.
\`\`\`javascript
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);

console.log(original); // [1, 2, 3] (unchanged)
console.log(copy);     // [1, 2, 3, 4]
\`\`\`
This is often the preferred method for creating shallow copies in modern JavaScript.

### 📚 Key极 Concepts
- **Spread Syntax (\`...\`)**: A versatile tool for working with iterables.
`,

  // problem explanation--> 147
  "object-destructuring-with-defaults": `
### 💡 Problem Breakdown
You can provide a default value when destructuring an object property. This default value is used only if the property does not exist on the object, or if its value is \`undefined\`.

### ⚙️ Solution Walkthrough
The \`settings\` object does not have a \`fontSize\` property. The destructuring assignment provides a default value of 16 for it.
\`\`\`javascript
const settings = { theme: "dark" };
const { theme, fontSize = 16 } = settings;

console.log(theme);     // "dark"
console.log(fontSize);  // 16
\`\`\`
### 📚 Key Concepts
- **Default Values**: Making destructuring more robust by handling missing data.
`,

  // problem explanation--> 148
  "power-of-number": `
### 💡 Problem Breakdown
The \`Math.pow()\` function is the traditional way to calculate a base number raised to the power of an exponent. It takes two arguments: the base and the exponent.

### ⚙️ Solution Walkthrough
The function is called with the base and exponent.
\`\`\`javascript
Math.pow(3, 极4); // 81 (which is 3 * 3 * 3 * 3)
\`\`\`
The modern exponentiation operator (\`**\`) is often preferred for readability (\`3 ** 4\`), but \`Math.pow()\` is still perfectly valid.

### 📚 Key Concepts
- **\`极Math.pow()\`**: A static method of the \`Math\` object for calculating powers.
`,

  // problem explanation--> 149
  "ternary-operator-is-adult": `
### 💡 Problem Breakdown
This is a practical application of the ternary operator for a common conditional check.

### ⚙️ Solution Walkthrough
The condition \`age >= 18\` is evaluated. If it's true, the first value ('Adult') is returned. If it's false, the second value ('Minor') is returned.
\`\`\`javascript
function checkAge(age) {
  return age >= 18 ? 'Adult' : 'Minor';
}
checkAge(21); // "Adult"
\`\`\`
### 📚 Key Concepts
- **Ternary Operator**: A concise conditional operator.
`,

  // problem explanation--> 150
  "check-object-emptiness": `
### 💡 Problem Breakdown
Checking if an object is empty is a common task. A simple check like \`obj === {}\` will not work, because two different objects are never equal. The most reliable way is极 to check if the object has any keys.

### ⚙️ Solution Walkthrough
The \`Object.keys()\` method is used to get an array of the object's keys. If the length of this array is 0, the object is empty.
\`\`\`javascript
function isEmpty(obj极) {
  return Object.keys(obj).length === 0;
}
isEmpty({});        // true
isEmpty({ a: 1 }); // false
\`\`\`
### 📚 Key Concepts
- **\`Object.keys()\`**: A method for getting an array of an object's property names.
`,

  // problem explanation--> 151
  "find-longest-word": `
### 💡 Problem Breakdown
The challenge is to analyze a sentence and identify the single longest word within it. If there are multiple words with the same maximum length, the first one encountered is usually sufficient.

### ⚙️ Solution Walkthrough
This solution uses \`split()\` to break the sentence into words and then \`reduce()\` to find the longest one.
\`\`\`javascript
function findLongestWord(sentence) {
    return sentence.split(' ').reduce((longest, current) =>
        current.length > longest.length ? current : longest
    , "");
}
\`\`\`
1.  **\`sentence.split(' ')\`**: First, we split the sentence into an array of words.
2.  **\`.reduce()\`**: We use the \`reduce\` method to iterate through the words and find the single longest one. The empty string \`""\` is our starting value for the longest word.
3.  **Callback**: In each step, we compare the \`current\` word's length to the \`longest\` word's length found so far and keep the longer one.

### 📚 Key Concepts
- **\`Array.prototype.reduce()\`**: A core functional programming method that reduces an array to a single value.
`,

  // problem explanation--> 152
  "remove-duplicates-from-array": `
### 💡 Problem Breakdown
The goal is to take an array that may contain duplicate elements and produce a new array containing only the unique elements from the original.

### ⚙️ Solution Walkthrough
The most elegant and modern way to solve this is by using the \`Set\极\` data structure, which inherently stores only unique values.
\`\`\`javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
\`\`\`
1.  **\`new Set(arr)\`**: A new \`Set\` object is created from the input array, automatically discarding all duplicates.
2.  **\`[...]\` (Spread Syntax)**: The spread syntax is used to convert the \`Set\` object back into an array.

### 📚 Key Concepts
- **\`Set\`**: An ES6 data structure that lets you store unique values of any type.
`,

  // problem explanation--> 153
  "is-palindrome": `
### 💡 Problem Breakdown
A palindrome is a word or phrase that reads the same backward as forward. The task is to write a function that can verify if a given string is a palindrome, ignoring case.

### ⚙️ Solution Walkthrough
The strategy is to first "normalize" the string by converting it to a standard case. Then, we can compare the normalized string with its reversed version.
\`\`\`javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
\`\`\`
1.  **Cleaning**: \`.toLowerCase()\` converts the string to lowercase. \`.replace(/[\W_]/g, '')\` uses a regular expression to remove all non-alphanumeric characters.
2.  **Re极versing**: The standard \`.split().reverse().join()\` technique is used.
3.  **Comparison**: A strict equality check (\`===\`) determines if the string is a palindrome.

### 📚 Key Concepts
- **String Normalization**: The process of transforming a string into a canonical form for easier processing.
`,

  // problem explanation--> 154
  "title-case-sentence": `
### 💡 Problem Breakdown
The task is to convert a sentence into "title case," where the first letter of each word is capitalized and the rest of the letters are lowercase.

### ⚙️ Solution Walkthrough
The solution involves splitting the sentence into words, transforming each word, and then joining them back together.
\`\`\`javascript
function titleCase(sentence) {
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
\`\`\`
1.  **\`toLowerCase()\`**: First, the entire sentence is converted to lowercase to ensure consistent casing.
2.  **\`split(' ')\极\`**: The sentence is split into an array of words.
3.  **\`map(...)\`**: The \`.map()\` method is used极 to create a new array by transforming each word.
4.  **Transformation**: For each word, we take the first character (\`.charAt(0)\`), convert it to uppercase, and concatenate it with the rest of the word (\`.slice(1)\`).
5.  **\`join(' ')\`**: The array of title-cased words is joined back into a single string.

### 📚 Key Concepts
- **Method Chaining**: Combining multiple array and string methods together to perform a complex transformation concisely.
`,

  // problem explanation--> 155
  "array-intersection": `
### 💡 Problem Breakdown
The goal is to find the "intersection" of two arrays—that is, the set of elements that are present in both arrays.

### ⚙️ Solution Walkthrough
An efficient way to solve this is to use a \`Set\` for fast lookups.
\`\`\`javascript
function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}
\`\`\`
1.  **Create a \`Set\`**: A \`Set\` is created from the first array (\`arr1\`). A \`Set\` provides very fast lookups for its elements.
2.  **Filter**: The second array (\`arr2\`) is then filtered. For each item in \`arr2\`, we check if it exists in \`set1\`. If it does, it's kept in the final intersection array.

### 📚 Key Concepts
- **\`Set\`**: An ES6 data structure that is highly optimized for storing unique values and checking for their existence.
`,

  // problem explanation--> 156
  "falsy-bouncer": `
### 💡 Problem Breakdown
The task is to remove all "falsy" values from an array. In JavaScript, a falsy value is one that is considered \`false\` in a boolean context. The six falsy values are \`false\`, \`null\`, \`0\`, \`""\` (empty string), \`undefined\`, and \`NaN\`.

### ⚙️ Solution Walkthrough
The \`filter\` method can be used with the \`Boolean\` constructor as a concise callback function.
\`\`\`javascript
function bouncer(arr) {
  return arr.filter(Boolean);
}
\`\`\`
When the \`Boolean\` constructor is passed as a function, it coerces its argument to a boolean. Falsy values are coerced to \`false\` and are thus "filtered out," while truthy values are coerced to \`true\` and are kept.

### 📚 Key Concepts
- **Truthy and Falsy**: A core concept in JavaScript that determines how values behave in logical operations.
`,

  // problem explanation--> 157
  "array-rotation": `
### 💡 Problem Breakdown
The goal is to perform a "left rotation" on an array. This means that the first \`n\` elements of the array are moved to the end. For example, rotating \`[1,2,3,4,5]\` left by 2 positions results in \`[3,4,5,1,2]\`.

### ⚙️ Solution Walkthrough
The solution can be elegantly achieved using the \`.slice()\` method.
\`\`\`极javascript
function rotateLeft(arr, positions) {
  const p = positions % arr.length; // Handle rotations larger than array length
  return arr.slice(p).concat(arr.slice(0, p));
}
\`\`\`
1.  **\`arr.slice(p)\`**: This creates a new array containing the part of the array that will become the new front.
2.  **\`arr.slice(0, p)\`**: This creates a new array containing the part of the array that will be moved to the end.
3.  **\`concat()\`**: The two slices are joined together in the new order.

### 📚 Key Concepts
- **\`Array.prototype.slice()\`**: A non-mutating method for extracting a portion of an array.
`,

  // problem explanation--> 158
  "anagram-check": `
### 💡 Problem Breakdown
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase. The task is to check if two strings are anagrams. The core idea is that if they are anagrams, they must contain the exact same characters with the exact same frequencies.

### ⚙️ Solution Walkthrough
The simplest way to check this is to "normalize" both strings by converting them to a standard form and then comparing them.
\`\`\`javascript
function areAnagrams(str1, str2) {
  const clean = (s) => s.toLowerCase().replace(/[\W_]/极g, '').split('').sort().join('');
  return clean(str1) === clean(str2);
}
\`\`\`
1.  **\`clean(s)\` helper**: This function normalizes a string by making it lowercase, removing non-letters, splitting it into an array of characters, sorting them alphabetically, and joining them back into a string.
2.  **Comparison**: If the two normalized strings are identical, the original strings were anagrams.

### 📚 Key Concepts
- **Normalization**: Transforming data into a canonical form for comparison.
`,

  // problem explanation--> 159
  "sum-all-in-range": `
### 💡 Problem Breakdown
The task is to sum all integers between two given numbers, inclusive. The two numbers are provided in an array and may not be in order.

### ⚙️ Solution Walkthrough
First, identify the minimum and maximum numbers极 in the input array. Then, loop from the minimum to the maximum, accumulating the sum.
\`\`\`javascript
function sumAll(arr) {
  const start = Math.min(...arr);
  const end = Math.max(...arr);
  let极 sum = 0;
  for (let i = start; i极 <= end; i++) {
    sum += i;
  }
  return sum;
}
\`\`\`
1.  **\`Math.min\` and \`Math.max\`**: These are used with the spread operator (\`...\`) to determine the start and end of the loop, regardless of the input order.
2.  **\`for\` loop**: A standard loop iterates through every number in the range.
3.  **Accumulator**: The \`sum\` variable accumulates the total.

### 📚 Key Concepts
- **Accumulator Pattern**: A common pattern where a variable is initialized and then updated inside a loop to compute a final value.
`,

  // problem explanation--> 160
  "caesars-cipher": `
### 💡 Problem Breakdown
This is a classic substitution cipher. ROT13 ("rotate by 13 places") is a specific type of Caesars cipher where each letter is replaced by the letter 13 places after it in the alphabet. To decode, you simply apply the same process again.

### ⚙️ Solution Walkthrough
The solution uses \`.replace()\` with a regular expression to find all uppercase letters. A replacer function then calculates the new character code.
\`\`\`javascript
function rot13(str) {
  return str.replace(/[A-Z]/g, (char) =>
    String.fromCharCode(
      (char.charCodeAt(0) - 65 + 13) % 26 + 65
    )
  );
}
\`\`\`
1.  **\`char.charCodeAt(0) - 65\`**: Converts the letter to a 0-25 index (A=0, B=1, ...).
2.  **\`+ 13\`**: "Shifts" the letter by 13 places.
3.  **\`% 26\`**: The modulo operator makes the alphabet "wrap around".
4.  **\`+ 65\`**: Converts the 0-25 index back to the correct character code for an uppercase letter.
5.  **\`String.fromCharCode(...)\`**: Converts the final code back to a character.

### 📚 Key Concepts
- **Character Codes**: Using numeric character codes to perform mathematical transformations on letters.
- **Modulo Arithmetic**: Useful for problems involving cycles or "wrap-around" logic.
`,

  // problem explanation--> 161
  "max-char": `
### 💡 Problem Breakdown
The goal is to find the character that appears most frequently in a given string. For example, in "abcccccccd", the character "极c" appears most often.

### ⚙️ Solution Walkthrough
A common solution is to use an object (acting as a hash map) to store the counts of each character.
\`\`\`javascript
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (const char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (const char in charMap极) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
\`\`\`
1.  **Character Map**: The first loop iterates through the string, building an object where keys are the characters and values are their frequencies.
2.  **Find Max**: The second loop iterates through the \`charMap\` to find the character with the highest frequency.

### 📚 Key Concepts
- **Hash Map**: Using an object to store key-value mappings is a fundamental pattern for counting and efficient lookups.
`,

  // problem explanation--> 162
  "vowels-counter": `
### 💡 Problem Breakdown
The task is to count the number of vowels (a, e, i, o, u) in a string. The check should be case-insensitive.

### ⚙️ Solution Walkthrough
A simple and readable solution uses a regular expression to find all vowel matches.
\`\`\`javascript
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
\`\`\`
1.  **\`str.match(...)\`**: This string method retrieves the result of matching a string against a regular expression.
2.  **\`/[aeiou]/gi\`**: This is the regular expression.
    -   \`[aeiou]\`: Matches any single character in the set.
    -   \`g\`: The "global" flag, to find all matches, not just the first one.
    -   \`i极\`: The "case-insensitive" flag.
3.  **Result**: \`.match()\` returns an array of all matches found, or \`null\` if no matches are found. We return the length of the array or 0.

### 📚 Key Concepts
- **Regular Expressions**: A powerful tool for pattern matching in strings.
`,

  // problem explanation--> 163
  "array-of-digits": `
### 💡 Problem Breakdown
Convert a number into an array of its individual digits.

### ⚙️ Solution Walkthrough
The solution converts the number to a string, splits it into characters, then maps each character back to a number.
\`\`\`javascript
function numberToDigits(num) {
  return String(num).split('').map(Number);
}
numberToDigits(12345); // [1, 2, 3, 4, 5]
\`\`\`

### 📚 Key Concepts
- **Type Conversion**: Converting between number and string types
- **Array Mapping**: Transforming array elements using map()
`,

  // problem explanation--> 164
  "count-words-in-string": `
### 💡 Problem Breakdown
Count the number of words in a string, where words are separated by whitespace.

### ⚙️ Solution Walkthrough
Split the string by whitespace and count the resulting array elements.
\`极\`\`javascript
function countWords(str) {
  return str.trim().split(/\\s+/).length;
}
countWords("This is a sample sentence."); // 5
\`\`\`

### 📚 Key Concepts
- **Regular Expressions**: Using /\\s+/ to handle multiple spaces
- **String Trimming**: Removing leading/trailing spaces
`,

  // problem explanation--> 165
  "truncate-string": `
### 💡 Problem Breakdown
Shorten a string if it exceeds a specified length, adding "..." at the end.

### ⚙️ Solution Walkthrough
Check string length and use slice() to truncate if needed.
\`\`\`javascript
function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
truncate("A-tisket a-tasket A green and yellow basket", 8); // "A-tisket..."
\`\`\`

### 📚 Key Concepts
- **Ternary Operator**: Compact conditional logic
- **String Slicing**: Extracting portions of strings
`,

  // problem explanation--> 166
  "first-unique-char": `
### 💡 Problem Breakdown
Find the first non-repeating character in a string and return its index.

### ⚙️ Solution Walkthrough
Use a character frequency map to track counts, then find the first character with count of 1.
\`\`\`javascript
function firstUniqChar(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) return i;
  }
  return -1;
}
firstUniqChar("leetcode"); // 0 (l is first unique)
\`\`\`

### 📚 Key Concepts
- **Character Frequency**: Tracking occurrences of each character
- **Linear Search**: Finding the first matching element
`,

  // problem explanation--> 167
  "merge-sorted-arrays": `
### 💡 Problem Breakdown
Merge two sorted arrays into a single sorted array.

### ⚙️ Solution Walkthrough
Use a two-pointer approach to efficiently merge the arrays.
\`\`\`javascript
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
mergeSortedArrays([1,2,4], [1,3,4]); // [1,1,2,3,4,4]
\`\`\`

### 📚 Key Concepts
- **Two-Pointer Technique**: Efficient algorithm for merging sorted arrays
- **Array Concatenation**: Combining array remnants
`,

  // problem explanation--> 168
  "move-zeroes": `
### 💡 Problem Breakdown
Move all zeros to the end of an array while maintaining the order of other elements.

### ⚙️ Solution Walkthrough
Use a two-pointer approach with one pointer tracking the position for non-zero elements.
\`\`\`javascript
function moveZeroes(nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex++] = nums[i];
    }
  }
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}
moveZeroes([0,1,0,3,12]); // [1,3,12,0,0]
\`\`\`

### 📚 Key Concepts
- **In-Place Modification**: Modifying the array without creating a copy
- **Two-Pointer Technique**: Efficient array manipulation
`,

  // problem explanation--> 169
  "roman-to-integer": `
### 💡 Problem Breakdown
Convert a Roman numeral string to its integer equivalent.

### ⚙️ Solution Walkthrough
Process the string from left to right, adding values but subtracting when a smaller value precedes a larger one.
\`\`\`javascript
function romanToInt(s) {
  const values = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && values[s[i]] < values[s[i + 1]]) {
      total -= values[s[i]];
    } else {
      total += values[s[i]];
    }
  }
  return total;
}
romanToInt("MCMXCIV"); // 1994
\`\`\`

### 📚 Key Concepts
- **Roman Numeral Rules**: Understanding subtraction cases (IV = 4, IX = 9, etc.)
- **Dictionary Lookup**: Using an object for value mapping
`,

  // problem explanation--> 170
  "longest-common-prefix": `
### 💡 Problem Breakdown
Find the longest common prefix string amongst an array of strings.

### ⚙️ Solution Walkthrough
Compare characters of the first string with corresponding characters in other strings.
\`\`\`javascript
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
longestCommonPrefix(["flower","flow","flight"]); // "fl"
\`\`\`

### 📚 Key Concepts
- **String Comparison**: Finding common prefixes
- **Substring Manipulation**: Gradually reducing the prefix
`,

  // problem explanation--> 171
  "implement-strstr": `
### 💡 Problem Breakdown
Find the index of the first occurrence of a substring (needle) in a string (haystack).

### ⚙️ Solution Walkthrough
Use the built-in indexOf method or implement a manual search.
\`\`\`javascript
function strStr(haystack, needle) {
  if (needle === "") return 0;
  return haystack.indexOf(needle);
}
strStr("hello", "ll"); // 2
\`\`\`

### 📚 Key Concepts
- **String Search**: Finding substrings within strings
- **Built-in Methods**: Leveraging JavaScript's string methods
`,

  // problem explanation--> 172
  "majority-element": `
### 💡 Problem Breakdown
Find the element that appears more than n/2 times in an array.

### ⚙️ Solution Walkthrough
Use the Boyer-Moore Voting Algorithm for an efficient solution.
\`\`\`javascript
function majorityElement(nums) {
  let count = 0;
  let candidate = null;
  
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  
  return candidate;
}
majorityElement([2,2,1,1,1,2,2]); // 2
\`\`\`

### 📚 Key Concepts
- **Voting Algorithm**: Efficient majority element detection
- **Space Complexity**: O(1) solution
`,

  // problem explanation--> 173
  "string-is-unique": `
### 💡 Problem Breakdown
Check if a string has all unique characters.

### ⚙️ Solution Walkthrough
Use a Set to track seen characters and check for duplicates.
\`\`\`javascript
function isUnique(str) {
  const seen = new Set();
  for (let char of str) {
    if (seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}
isUnique("abcdefg"); // true
\`\`\`

### 📚 Key Concepts
- **Set Data Structure**: Efficient duplicate detection
- **Character Tracking**: Monitoring which characters have been seen
`,

  // problem explanation--> 174
  "urlify-string": `
### 💡 Problem Breakdown
Replace all spaces in a string with '%20'.

### ⚙️ Solution Walkthrough
Use replace with a global regular expression.
\`\`\`javascript
function urlify(str) {
  return str.trim().replace(/\\s/g, '%20');
}
urlify("Mr John Smith"); // "Mr%20John%20Smith"
\`\`\`

### 📚 Key Concepts
- **String Replacement**: Global pattern replacement
- **URL Encoding**: Converting spaces to %20
`,

  // problem explanation--> 175
  "reverse-words-in-string": `
### 💡 Problem Breakdown
Reverse the order of words in a string.

### ⚙️ Solution Walkthrough
Split into words, reverse the array, then join back.
\`\`\`javascript
function reverseWords(str) {
  return str.trim().split(/\\s+/).reverse().join(' ');
}
reverseWords("the sky is blue"); // "blue is sky the"
\`\`\`

### 📚 Key Concepts
- **Array Reversal**: Reversing order of elements
- **String Joining**: Combining array elements into a string
`,

  // problem explanation--> 176
  "best-time-to-buy-sell-stock": `
### 💡 Problem Breakdown
Find the maximum profit from buying and selling stock with one transaction.

### ⚙️ Solution Walkthrough
Track the minimum price and maximum profit simultaneously.
\`\`\`javascript
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  
  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  
  return maxProfit;
}
maxProfit([7,1,5,3,6,4]); // 5
\`\`\`

### 📚 Key Concepts
- **Single Pass Algorithm**: O(n) time complexity
- **Profit Calculation**: Buying low and selling high
`,

  // problem explanation--> 177
  "simple-calculator": `
### 💡 Problem Breakdown
Create a basic calculator that handles +, -, *, / operations.

### ⚙️ Solution Walkthrough
Use a switch statement to handle different operators.
\`\`\`javascript
function calculate(num1, operator, num2) {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : "Division by zero";
    default: throw new Error("Invalid operator");
  }
}
calculate(10, '*', 5); // 50
\`\`\`

### 📚 Key Concepts
- **Switch Statement**: Handling multiple cases
- **Error Handling**: Dealing with division by zero
`,

  // problem explanation--> 178
  "remove-vowels": `
### 💡 Problem Breakdown
Remove all vowels from a string.

### ⚙️ Solution Walkthrough
Use replace with a regular expression to remove vowels.
\`\`\`javascript
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}
removeVowels("hello world"); // "hll wrld"
\`\`\`

### 📚 Key Concepts
- **Regular Expressions**: Pattern matching for vowel removal
- **Case Insensitivity**: The 'i' flag for case-insensitive matching
`,

  // problem explanation--> 179
  "find-all-indexes": `
### 💡 Problem Breakdown
Find all indexes where a value appears in an array.

### ⚙️ Solution Walkthrough
Use reduce or forEach to collect indexes where value matches.
\`\`\`javascript
function findAllIndexes(arr, value) {
  const indexes = [];
  arr.forEach((item, index) => {
    if (item === value) indexes.push(index);
  });
  return indexes;
}
findAllIndexes(['a','b','a','c','a','d'], 'a'); // [0, 2, 4]
\`\`\`

### 📚 Key Concepts
- **Array Iteration**: Processing each element
- **Index Collection**: Storing matching indexes
`,

  // problem explanation--> 180
  "sum-of-squares": `
### 💡 Problem Breakdown
Calculate the sum of squares of all numbers in an array.

### ⚙️ Solution Walkthrough
Use reduce to accumulate the sum of squares.
\`\`\`javascript
function sumOfSquares(arr) {
  return arr.reduce((sum, num) => sum + num * num, 0);
}
sumOfSquares([1,2,3]); // 14
\`\`\`

### 📚 Key Concepts
- **Array Reduction**: Accumulating values
- **Mathematical Operations**: Squaring numbers
`,

  // problem explanation--> 181
  "object-from-arrays": `
### 💡 Problem Breakdown
Create an object from arrays of keys and values.

### ⚙️ Solution Walkthrough
Use reduce to build an object from parallel arrays.
\`\`\`javascript
function objectFromArrays(keys, values) {
  const obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}
objectFromArrays(['name','age','city'], ['John',30,'New York']);
// {name: "John", age: 30, city: "New York"}
\`\`\`

### 📚 Key Concepts
- **Object Construction**: Building objects dynamically
- **Array Parallelism**: Working with corresponding arrays
`,

  // problem explanation--> 182
  "pad-string-start": `
### 💡 Problem Breakdown
Pad the start of a string to a specific length with a given character.

### ⚙️ Solution Walkthrough
Use the padStart method.
\`\`\`javascript
function padStart(str, length, padChar) {
  return str.padStart(length, padChar);
}
padStart("123", 5, "0"); // "00123"
\`\`\`

### 📚 Key Concepts
- **String Padding**: Adding characters to reach desired length
- **Built-in Methods**: Using padStart
`,

  // problem explanation--> 183
  "pad-string-end": `
### 💡 Problem Breakdown
Pad the end of a string to a specific length with a given character.

### ⚙️ Solution Walkthrough
Use the padEnd method.
\`\`\`javascript
function padEnd(str, length, padChar) {
  return str.padEnd(length, padChar);
}
padEnd("abc", 5, "!"); // "abc!!"
\`\`\`

### 📚 Key Concepts
- **String Padding**: Adding characters to reach desired length
- **Built-in Methods**: Using padEnd
`,

  // problem explanation--> 184
  "check-leap-year": `
### 💡 Problem Breakdown
Determine if a year is a leap year.

### ⚙️ Solution Walkthrough
Implement the leap year rules: divisible by 4, but not by 100 unless also by 400.
\`\`\`javascript
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
isLeapYear(2024); // true
\`\`\`

### 📚 Key Concepts
- **Modulo Arithmetic**: Checking divisibility
- **Leap Year Rules**: Understanding the specific conditions
`,

  // problem explanation--> 185
  "get-day-of-week": `
### 💡 Problem Breakdown
Get the day of the week from a date string.

### ⚙️ Solution Walkthrough
Use the Date object to get the day index, then map to day name.
\`\`\`javascript
function getDayOfWeek(dateStr) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateStr);
  return days[date.getUTCDay()];
}
getDayOfWeek("2024-07-26"); // "Friday"
\`\`\`

### 📚 Key Concepts
- **Date Object**: Working with dates in JavaScript
- **Array Mapping**: Converting numeric day to string
`,

  // problem explanation--> 186
  "array-fill": `
### 💡 Problem Breakdown
Create an array filled with a specific value.

### ⚙️ Solution Walkthrough
Use the Array constructor with fill method.
\`\`\`javascript
function fillArray(value, length) {
  return new Array(length).fill(value);
}
fillArray("x", 5); // ["x", "x", "x", "x", "x"]
\`\`\`

### 📚 Key Concepts
- **Array Construction**: Creating arrays of specific length
- **Fill Method**: Populating arrays with values
`,

  // problem explanation--> 187
  "filter-out-numbers": `
### 💡 Problem Breakdown
Remove all numeric digits from a string.

### ⚙️ Solution Walkthrough
Use replace with a regular expression to remove digits.
\`\`\`javascript
function filterNumbers(str) {
  return str.replace(/[0-9]/g, '');
}
filterNumbers("a1b2c3d4e5"); // "abcde"
\`\`\`

### 📚 Key Concepts
- **Regular Expressions**: Pattern matching for digit removal
- **String Filtering**: Removing specific characters
`,

  // problem explanation--> 188
  "get-object-property-safely": `
### 💡 Problem Breakdown
Safely access an object property with a default value if not found.

### ⚙️ Solution Walkthrough
Use optional chaining and nullish coalescing.
\`\`\`javascript
function getPropertySafely(obj, prop, defaultValue) {
  return obj?.[prop] ?? defaultValue;
}
getPropertySafely({name: "Alice"}, "city", "Not Found"); // "Not Found"
\`\`\`

### 📚 Key Concepts
- **Optional Chaining**: Safe property access
- **Nullish Coalescing**: Providing default values
`,

  // problem explanation--> 189
  "double-array-elements": `
### 💡 Problem Breakdown
Double each element in an array.

### ⚙️ Solution Walkthrough
Use map to transform each element.
\`\`\`javascript
function doubleElements(arr) {
  return arr.map(num => num * 2);
}
doubleElements([1,2,3,4]); // [2,4,6,8]
\`\`\`

### 📚 Key Concepts
- **Array Mapping**: Transforming each element
- **Mathematical Operations**: Doubling values
`,

  // problem explanation--> 190
  "filter-even-numbers": `
### 💡 Problem Breakdown
Filter an array to keep only even numbers.

### ⚙️ Solution Walkthrough
Use filter with modulo check.
\`\`\`javascript
function filterEvens(arr) {
  return arr.filter(num => num % 2 === 0);
}
filterEvens([1,2,3,4,5,6]); // [2,4,6]
\`\`\`

### 📚 Key Concepts
- **Array Filtering**: Selecting elements based on condition
- **Modulo Operation**: Checking for even numbers
`,

  // problem explanation--> 191
  "sum-with-reduce": `
### 💡 Problem Breakdown
Calculate the sum of all numbers in an array.

### ⚙️ Solution Walkthrough
Use reduce to accumulate the sum.
\`\`\`javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
sumArray([10,20,30,40]); // 100
\`\`\`

### 📚 Key Concepts
- **Array Reduction**: Accumulating values
- **Sum Calculation**: Basic arithmetic operation
`,

  // problem explanation--> 192
  "check-all-caps": `
### 💡 Problem Breakdown
Check if a string is all uppercase.

### ⚙️ Solution Walkthrough
Compare the string to its uppercase version.
\`\`\`javascript
function isAllCaps(str) {
  return str === str.toUpperCase();
}
isAllCaps("HELLO"); // true
\`\`\`

### 📚 Key Concepts
- **String Comparison**: Checking equality
- **Case Conversion**: Converting to uppercase
`,

  // problem explanation--> 193
  "object-has-property": `
### 💡 Problem Breakdown
Check if an object has a specific property.

### ⚙️ Solution Walkthrough
Use hasOwnProperty method.
\`\`\`javascript
function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
hasProperty({name: "Bob"}, "name"); // true
\`\`\`

### 📚 Key Concepts
- **Property Checking**: Verifying object properties
- **hasOwnProperty**: Safe property existence check
`,

  "get-last-n-elements": `
### 💡 Problem Breakdown
Get the last N elements from an array.

### ⚙️ Solution Walkthrough
Use slice with negative index.
\`\`\`javascript
function getLastNElements(arr, n) {
  return arr.slice(-n);
}
getLastNElements(['a','b','c','d','e'], 3); // ['c','d','e']
\`\`\`

### 📚 Key Concepts
- **Array Slicing**: Extracting portions of arrays
- **Negative Indices**: Counting from the end
`,

  // problem explanation--> 195
  "string-to-camel-case": `
### 💡 Problem Breakdown
Convert a dash/underscore-separated string to camelCase.

### ⚙️ Solution Walkthrough
Use replace with a regular expression to convert separators to uppercase.
\`\`\`javascript
function toCamelCase(str) {
  return str.replace(/[-_](\\w)/g, (_, c) => c.toUpperCase());
}
toCamelCase("hello-world_now"); // "helloWorldNow"
\`\`\`

### 📚 Key Concepts
- **Regular Expressions**: Pattern matching for separators
- **String Transformation**: Converting case and removing separators
`,

  // problem explanation--> 196
  "remove-whitespace": `
### 💡 Problem Breakdown
Remove all whitespace from a string.

### ⚙️ Solution Walkthrough
Use replace with a regular expression to remove whitespace.
\`\`\`javascript
function removeWhitespace(str) {
  return str.replace(/\\s/g, '');
}
removeWhitespace("  hello   world  "); // "helloworld"
\`\`\`

### 📚 Key Concepts
- **Regular Expressions**: Pattern matching for whitespace
- **String Cleaning**: Removing unwanted characters
`,

  // problem explanation--> 197
  "find-unique-characters": `
### 💡 Problem Breakdown
Find all unique characters in a string in order of first appearance.

### ⚙️ Solution Walkthrough
Use a Set to track unique characters while preserving order.
\`\`\`javascript
function findUniqueChars(str) {
  const seen = new Set();
  const result = [];
  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result.push(char);
    }
  }
  return result.join('');
}
findUniqueChars("hello world"); // "helo wrd"
\`\`\`

### 📚 Key Concepts
- **Set Data Structure**: Tracking unique values
- **Order Preservation**: Maintaining first occurrence order
`,

  // problem explanation--> 198
  "object-is-empty-check": `
### 💡 Problem Breakdown
Check if an object is empty (has no own properties).

### ⚙️ Solution Walkthrough
Check if Object.keys length is 0.
\`\`\`javascript
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
isEmptyObject({}); // true
\`\`\`

### 📚 Key Concepts
- **Object Inspection**: Checking property count
- **Empty Object Detection**: Identifying objects with no properties
`,

  // problem explanation--> 199
  "get-file-extension": `
### 💡 Problem Breakdown
Extract the file extension from a filename.

### ⚙️ Solution Walkthrough
Use lastIndexOf and slice to get the extension.
\`\`\`javascript
function getFileExtension(filename) {
  return filename.slice(filename.lastIndexOf('.'));
}
getFileExtension("document.pdf"); // ".pdf"
\`\`\`

### 📚 Key Concepts
- **String Manipulation**: Extracting substrings
- **File Path Processing**: Working with filenames
`,

  // problem explanation--> 200
  "simple-character-swap": `
### 💡 Problem Breakdown
Swap the first and last characters of a string.

### ⚙️ Solution Walkthrough
Use string indexing and concatenation to swap characters.
\`\`\`javascript
function swapFirstLast(str) {
  if (str.length < 2) return str;
  return str[str.length - 1] + str.slice(1, -1) + str[0];
}
swapFirstLast("hello");
\`\`\`

### 📚 Key Concepts
- **String Indexing**: Accessing specific characters
- **String Concatenation**: Building new strings from parts
`,
};
