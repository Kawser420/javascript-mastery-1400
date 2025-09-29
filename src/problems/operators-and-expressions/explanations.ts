// problem explanation--> 01
export const explanations: Record<string, string> = {
  "addition-operator": `
### 💡 Problem Breakdown
This is the most fundamental arithmetic operation. The goal is to use the addition operator (\`+\`) to find the sum of two numbers.

### ⚙️ Solution Walkthrough
The \`+\` operator is placed between two numeric operands.
\`\`\`javascript
5 + 10; // The expression evaluates to 15
\`\`\`
When used with numbers, the \`+\` operator performs mathematical addition. When used with strings, it performs concatenation.

### 📚 Key Concepts
- **Operator**: A symbol that performs an operation on one or more values (operands).
- **Operand**: The value that an operator acts upon.
- **Expression**: A combination of values, variables, and operators that computes to a value.
`,

  // problem explanation--> 02
  "subtraction-operator": `
### 💡 Problem Breakdown
This problem uses the subtraction operator (\`-\`) to find the difference between two numbers.

### ⚙️ Solution Walkthrough
The \`-\` operator is placed between two numeric operands. Unlike the \`+\` operator, it will attempt to convert non-numeric operands to numbers.
\`\`\`javascript
20 - 8; // The expression evaluates to 12
"20" - 8; // The string "20" is coerced to a number, evaluates to 12
\`\`\`
### 📚 Key Concepts
- **Arithmetic Operators**: Symbols used for mathematical calculations.
- **Type Coercion**: The automatic conversion of a value from one data type to another. The subtraction operator triggers numeric coercion.
`,

  // problem explanation--> 03
  "multiplication-operator": `
### 💡 Problem Breakdown
This problem uses the multiplication operator (\`*\`) to find the product of two numbers.

### ⚙️ Solution Walkthrough
The \`*\` operator is placed between two numeric operands. It will also attempt to coerce non-numeric types to numbers.
\`\`\`javascript
7 * 6; // The expression evaluates to 42
\`\`\`
### 📚 Key Concepts
- **Arithmetic Operators**: Symbols used for mathematical calculations.
`,

  // problem explanation--> 04
  "division-operator": `
### 💡 Problem Breakdown
This problem uses the division operator (\`/\`) to divide one number by another.

### ⚙️ Solution Walkthrough
The \`/\` operator is placed between two numeric operands.
\`\`\`javascript
100 / 10; // The expression evaluates to 10
10 / 0;   // The expression evaluates to Infinity
\`\`\`
Unlike some languages, division by zero in JavaScript does not throw an error; it results in the special numeric value \`Infinity\`.

### 📚 Key Concepts
- **\`Infinity\`**: A special numeric value representing a value greater than any other number.
`,

  // problem explanation--> 05
  "remainder-operator": `
### 💡 Problem Breakdown
The remainder operator (\`%\`), also known as the modulo operator, returns the integer remainder of dividing two operands. For example, 10 divided by 3 is 3 with a remainder of 1.

### ⚙️ Solution Walkthrough
The \`%\` operator is used.
\`\`\`javascript
10 % 3; // The expression evaluates to 1
\`\`\`
This operator is very useful for tasks like checking if a number is even or odd (e.g., \`num % 2 === 0\`).

### 📚 Key Concepts
- **Modulo Operator (%)**: An arithmetic operator that returns the remainder of an integer division.
`,

  // problem explanation--> 06
  "exponentiation-operator": `
### 💡 Problem Breakdown
Exponentiation is the operation of raising a number (the base) to a power (the exponent). ES2016 introduced the exponentiation operator (\`**\`) as a concise alternative to the older \`Math.pow()\` function.

### ⚙️ Solution Walkthrough
The \`**\` operator is used.
\`\`\`javascript
2 ** 3; // The expression evaluates to 8 (which is 2 * 2 * 2)
\`\`\`
### 📚 Key Concepts
- **Exponentiation Operator (**)**: A modern arithmetic operator for calculating powers.
`,

  // problem explanation--> 07
  "increment-operator": `
### 💡 Problem Breakdown
The increment operator (\`++\`) is a shorthand way to add 1 to a number. It's a unary operator because it acts on a single operand.

### ⚙️ Solution Walkthrough
The \`++\` operator is applied to a variable.
\`\`\`javascript
let num = 5;
num++; // num is now 6
++num; // num is now 7
\`\`\`
It can be used as a prefix (\`++num\`) or postfix (\`num++\`), which have different return values in an expression.

### 📚 Key Concepts
- **Increment Operator (++)**: A unary operator for adding one to its operand.
`,

  // problem explanation--> 08
  "decrement-operator": `
### 💡 Problem Breakdown
The decrement operator (\`--\`) is the counterpart to the increment operator. It's a shorthand way to subtract 1 from a number.

### ⚙️ Solution Walkthrough
The \`--\` operator is applied to a variable.
\`\`\`javascript
let num = 5;
num--; // num is now 4
--num; // num is now 3
\`\`\`
Like the increment operator, it has prefix and postfix versions.

### 📚 Key Concepts
- **Decrement Operator (--)**: A unary operator for subtracting one from its operand.
`,

  // problem explanation--> 09
  "prefix-vs-postfix-increment": `
### 💡 Problem Breakdown
This problem highlights the important difference between the prefix and postfix versions of the increment operator when they are used within a larger expression.
- **Prefix (\`++x\`)**: The variable is incremented *first*, and the expression evaluates to the *new* value.
- **Postfix (\`x++\`)**: The expression evaluates to the *original* value of the variable, and *then* the variable is incremented.

### ⚙️ Solution Walkthrough
The two versions are compared.
\`\`\`javascript
let x = 10;
let y = 10;

const prefixResult = ++x; // x becomes 11, prefixResult is 11
const postfixResult = y++; // postfixResult is 10, then y becomes 11
\`\`\`

### 📚 Key Concepts
- **Prefix/Postfix Operators**: The position of the operator relative to the operand changes the value of the expression.
`,

  // problem explanation--> 10
  "operator-precedence-1": `
### 💡 Problem Breakdown
Operator precedence determines the order in which operators are evaluated in a complex expression. In JavaScript, multiplication (\`*\`) and division (\`/\`) have higher precedence than addition (\`+\`) and subtraction (\`-\`), just like in standard mathematics.

### ⚙️ Solution Walkthrough
The multiplication is performed before the addition.
\`\`\`javascript
2 + 3 * 4; // is evaluated as 2 + (3 * 4)
           // which is 2 + 12 = 14
\`\`\`

### 📚 Key Concepts
- **Operator Precedence**: The set of rules that govern the order of operations.
`,

  // problem explanation--> 11
  "operator-precedence-parens": `
### 💡 Problem Breakdown
The grouping operator (parentheses \`()\`) has the highest precedence. It allows you to override the default order of operations, forcing the expression inside the parentheses to be evaluated first.

### ⚙️ Solution Walkthrough
The addition inside the parentheses is evaluated first.
\`\`\`javascript
(2 + 3) * 4; // is evaluated as (5) * 4
           // which is 20
\`\`\`
### 📚 Key Concepts
- **Grouping Operator ()**: The primary tool for controlling the order of evaluation.
`,

  // problem explanation--> 12
  "unary-negation": `
### 💡 Problem Breakdown
The unary negation operator (\`-\`) is placed before a single operand. It converts its operand into a number (if it isn't one already) and then negates it.

### ⚙️ Solution Walkthrough
The operator is applied to a positive number.
\`\`\`javascript
const num = 15;
const negativeNum = -num; // -15
\`\`\`
### 📚 Key Concepts
- **Unary Operator**: An operator that works on a single operand.
`,

  // problem explanation--> 13
  "unary-plus": `
### 💡 Problem Breakdown
The unary plus operator (\`+\`) is the fastest way to convert a value to a number. It's often used as a concise alternative to \`Number()\`.

### ⚙️ Solution Walkthrough
The operator is applied to a string.
\`\`\`javascript
const str = '50';
const num = +str; // num is now the number 50
\`\`\`
If the value cannot be converted, the result is \`NaN\`.

### 📚 Key Concepts
- **Type Coercion**: A shorthand way to perform explicit type conversion.
`,

  // problem explanation--> 14
  "string-concatenation-operator": `
### 💡 Problem Breakdown
The addition operator (\`+\`) is "overloaded." When one or both of its operands are strings, it performs string concatenation instead of numeric addition.

### ⚙️ Solution Walkthrough
Two strings are joined together.
\`\`\`javascript
'Hello' + ' World'; // "Hello World"
\`\`\`
### 📚 Key Concepts
- **Operator Overloading**: The ability of an operator to have different implementations depending on the types of its operands.
`,

  // problem explanation--> 15
  "type-coercion-add-string-number": `
### 💡 Problem Breakdown
This demonstrates the type coercion rule for the \`+\` operator. If one operand is a string and the other is a number, the number will be converted to a string, and then the two strings will be concatenated.

### ⚙️ Solution Walkthrough
A string and a number are combined.
\`\`\`javascript
'Score: ' + 100; // The number 100 is converted to the string "100"
                  // The result is "Score: 100"
\`\`\`
This can be a source of bugs if you expect numeric addition but one of your variables is a string.

### 📚 Key Concepts
- **Type Coercion**: The automatic conversion of values from one data type to another.
`,

  // problem explanation--> 16
  "assignment-operator": `
### 💡 Problem Breakdown
The basic assignment operator (\`=\`) assigns the value of its right-hand operand to its left-hand operand.

### ⚙️ Solution Walkthrough
A value is assigned to a variable.
\`\`\`javascript
let x;
x = 10; // x now holds the value 10
\`\`\`
It's important not to confuse it with the equality operators (\`==\` or \`===\`).

### 📚 Key Concepts
- **Assignment**: The process of giving a variable a value.
`,

  // problem explanation--> 17
  "addition-assignment": `
### 💡 Problem Breakdown
Compound assignment operators are a shorthand way to combine an arithmetic operation with an assignment. The addition assignment operator (\`+=\`) adds the right operand to the left operand and assigns the result back to the left operand.

### ⚙️ Solution Walkthrough
A value is added to a variable.
\`\`\`javascript
let x = 10;
x += 5; // Equivalent to x = x + 5
// x is now 15
\`\`\`
### 📚 Key Concepts
- **Compound Assignment**: A concise syntax for updating a variable's value.
`,

  // problem explanation--> 18
  "subtraction-assignment": `
### 💡 Problem Breakdown
The subtraction assignment operator (\`-=\`) subtracts the right operand from the left operand and assigns the result to the left operand.

### ⚙️ Solution Walkthrough
A value is subtracted from a variable.
\`\`\`javascript
let x = 20;
x -= 5; // Equivalent to x = x - 5
// x is now 15
\`\`\`
### 📚 Key Concepts
- **Compound Assignment**: A concise syntax for updating a variable's value.
`,

  // problem explanation--> 19
  "multiplication-assignment": `
### 💡 Problem Breakdown
The multiplication assignment operator (\`*=\`) multiplies the left operand by the right operand and assigns the result to the left operand.

### ⚙️ Solution Walkthrough
A variable is multiplied by a value.
\`\`\`javascript
let x = 5;
x *= 3; // Equivalent to x = x * 3
// x is now 15
\`\`\`
### 📚 Key Concepts
- **Compound Assignment**: A concise syntax for updating a variable's value.
`,

  // problem explanation--> 20
  "division-assignment": `
### 💡 Problem Breakdown
The division assignment operator (\`/=\`) divides the left operand by the right operand and assigns the result to the left operand.

### ⚙️ Solution Walkthrough
A variable is divided by a value.
\`\`\`javascript
let x = 100;
x /= 4; // Equivalent to x = x / 4
// x is now 25
\`\`\`
### 📚 Key Concepts
- **Compound Assignment**: A concise syntax for updating a variable's value.
`,

  // problem explanation--> 21
  "remainder-assignment": `
### 💡 Problem Breakdown
The remainder assignment operator (\`%=\`) divides the left operand by the right operand and assigns the remainder to the left operand.

### ⚙️ Solution Walkthrough
The remainder is assigned to a variable.
\`\`\`javascript
let x = 10;
x %= 3; // Equivalent to x = x % 3
// x is now 1
\`\`\`
### 📚 Key Concepts
- **Compound Assignment**: A concise syntax for updating a variable's value.
`,

  // problem explanation--> 22
  "exponentiation-assignment": `
### 💡 Problem Breakdown
The exponentiation assignment operator (\`**=\`) raises the left operand to the power of the right operand and assigns the result to the left operand.

### ⚙️ Solution Walkthrough
A variable is raised to a power.
\`\`\`javascript
let x = 2;
x **= 3; // Equivalent to x = x ** 3
// x is now 8
\`\`\`
### 📚 Key Concepts
- **Compound Assignment**: A concise syntax for updating a variable's value.
`,

  // problem explanation--> 23
  "chained-assignment": `
### 💡 Problem Breakdown
The assignment operator is right-associative, which means you can chain assignments together to assign the same value to multiple variables in one line.

### ⚙️ Solution Walkthrough
The expression \`c = "Assigned"\` is evaluated first. It assigns the string to \`c\` and the expression itself evaluates to the assigned value ("Assigned"). This value is then assigned to \`b\`, and so on.
\`\`\`javascript
let a, b, c;
a = b = c = "Assigned";
// a, b, and c are all "Assigned"
\`\`\`
### 📚 Key Concepts
- **Right-Associativity**: The order in which operators of the same precedence are evaluated.
- **Assignment as an Expression**: The assignment operator not only assigns a value but also returns that value.
`,

  // problem explanation--> 24
  "string-concatenation-assignment": `
### 💡 Problem Breakdown
The addition assignment operator (\`+=\`) can also be used for string concatenation. It appends the string on the right to the string variable on the left.

### ⚙️ Solution Walkthrough
A string is appended to another.
\`\`\`javascript
let message = "Hello";
message += " World"; // Equivalent to message = message + " World"
// message is now "Hello World"
\`\`\`
### 📚 Key Concepts
- **Operator Overloading**: The \`+=\` operator has different meanings for numbers and strings.
`,

  // problem explanation--> 25
  "assignment-in-expression": `
### 💡 Problem Breakdown
A key concept in JavaScript is that an assignment (\`x = 5\`) is an expression, not just a statement. This means it evaluates to a value—specifically, the value that was assigned.

### ⚙️ Solution Walkthrough
An assignment is performed inside the initialization of another variable.
\`\`\`javascript
let x;
const y = (x = 5);
// 1. The expression (x = 5) assigns 5 to x.
// 2. The expression (x = 5) evaluates to 5.
// 3. The value 5 is assigned to y.
\`\`\`
This can be a source of subtle bugs, especially when used in conditional statements (e.g., \`if (x = 0)\`).

### 📚 Key Concepts
- **Expression vs. Statement**: An expression evaluates to a value; a statement performs an action. Assignment in JavaScript is an expression.
`,

  // problem explanation--> 26
  "strict-equality": `
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
- **Type Coercion**: The automatic conversion of values between types, which strict equality avoids.
`,

  // problem explanation--> 27
  "loose-equality": `
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
- **Type Coercion**: A behavior that can make code less predictable.
`,

  // problem explanation--> 28
  "strict-inequality": `
### 💡 Problem Breakdown
The strict inequality operator (\`!==\`) is the logical opposite of the strict equality operator. It returns \`true\` if the operands are not equal or are not of the same type. It does not perform type coercion.

### ⚙️ Solution Walkthrough
A number is compared to a string.
\`\`\`javascript
5 !== "5"; // true
\`\`\`
Because their types are different, they are not strictly equal, so the strict inequality operator returns \`true\`.

### 📚 Key Concepts
- **Strict Inequality (!==)**: The recommended way to check if two values are not equal.
`,

  // problem explanation--> 29
  "loose-inequality": `
### 💡 Problem Breakdown
The loose inequality operator (\`!=\`) is the logical opposite of the loose equality operator (\`==\`). It compares two values for inequality after attempting type coercion.

### ⚙️ Solution Walkthrough
A number is compared to a string.
\`\`\`javascript
5 != "5"; // false
\`\`\`
Before comparing, JavaScript coerces the string \`"5"\` into the number \`5\`. Since \`5\` is equal to \`5\`, the inequality check returns \`false\`.

### 📚 Key Concepts
- **Loose Inequality (!=)**: Compares value after attempting type coercion. Its use is generally discouraged.
`,

  // problem explanation--> 30
  "greater-than": `
### 💡 Problem Breakdown
This problem demonstrates the use of the "greater than" comparison operator (\`>\`), which returns a boolean value.

### ⚙️ Solution Walkthrough
The operator checks if the left operand is greater than the right operand.
\`\`\`javascript
10 > 5; // true
5 > 10; // false
\`\`\`
### 📚 Key Concepts
- **Comparison Operators**: Operators used to compare values and produce a boolean result.
`,

  // problem explanation--> 31
  "less-than": `
### 💡 Problem Breakdown
This problem demonstrates the use of the "less than" comparison operator (\`<\`).

### ⚙️ Solution Walkthrough
The operator checks if the left operand is less than the right operand.
\`\`\`javascript
10 < 5; // false
5 < 10; // true
\`\`\`
### 📚 Key Concepts
- **Comparison Operators**: Operators used to compare values and produce a boolean result.
`,

  // problem explanation--> 32
  "greater-than-or-equal": `
### 💡 Problem Breakdown
This problem demonstrates the use of the "greater than or equal to" comparison operator (\`>=\`).

### ⚙️ Solution Walkthrough
The operator checks if the left operand is greater than or equal to the right operand.
\`\`\`javascript
10 >= 5;  // true
10 >= 10; // true
\`\`\`
### 📚 Key Concepts
- **Comparison Operators**: Operators used to compare values and produce a boolean result.
`,

  // problem explanation--> 33
  "less-than-or-equal": `
### 💡 Problem Breakdown
This problem demonstrates the use of the "less than or equal to" comparison operator (\`<=\`).

### ⚙️ Solution Walkthrough
The operator checks if the left operand is less than or equal to the right operand.
\`\`\`javascript
5 <= 10; // true
5 <= 5;  // true
\`\`\`
### 📚 Key Concepts
- **Comparison Operators**: Operators used to compare values and produce a boolean result.
`,

  // problem explanation--> 34
  "comparing-strings": `
### 💡 Problem Breakdown
When comparison operators (\`<\`, \`>\`) are used on strings, they are compared **lexicographically** based on their character code values. This is similar to dictionary order, but with an important distinction for uppercase and lowercase letters.

### ⚙️ Solution Walkthrough
Two comparisons are shown.
\`\`\`javascript
'apple' < 'banana'; // true, because 'a' comes before 'b'
'Zebra' < 'apple';  // true, because uppercase letters have lower character codes than lowercase letters.
\`\`\`
The comparison is done character by character from left to right.

### 📚 Key Concepts
- **Lexicographical Comparison**: The standard method for ordering strings.
- **Character Codes (Unicode)**: The underlying numeric values that determine string order.
`,

  // problem explanation--> 35
  "comparing-null-and-undefined": `
### 💡 Problem Breakdown
This problem explores a special case in JavaScript's equality rules. \`null\` and \`undefined\` are the only two values that are loosely equal to each other but not to anything else. They are not strictly equal because they are of different types.

### ⚙️ Solution Walkthrough
The two values are compared with both operators.
\`\`\`javascript
null == undefined;  // true
null === undefined; // false
\`\`\`
The loose equality between \`null\` and \`undefined\` is a specific rule in the language specification.

### 📚 Key Concepts
- **Equality Rules**: Understanding the specific edge cases for \`null\` and \`undefined\`.
`,

  // problem explanation--> 36
  "comparing-nan": `
### 💡 Problem Breakdown
\`NaN\` (Not a Number) is a unique numeric value in JavaScript. It is the only value that is not equal to itself, using either loose (==) or strict (===) equality.

### ⚙️ Solution Walkthrough
\`NaN\` is compared to itself.
\`\`\`javascript
NaN === NaN; // false
NaN == NaN;  // false
\`\`\`
Because of this behavior, you must use the \`Number.isNaN()\` function to reliably check if a value is \`NaN\`.

### 📚 Key Concepts
- **\`NaN\`**: A special numeric value representing an unrepresentable or undefined mathematical operation.
`,

  // problem explanation--> 37
  "object-comparison-pitfall": `
### 💡 Problem Breakdown
This problem demonstrates a fundamental concept: objects are compared by **reference**, not by value. This means that two different object variables are only considered equal if they point to the exact same object in memory.

### ⚙️ Solution Walkthrough
Two separate but identical-looking objects are compared.
\`\`\`javascript
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

obj1 === obj2; // false, because they are two different objects in memory.
obj1 === obj3; // true, because they both point to the same object.
\`\`\`
### 📚 Key Concepts
- **Reference vs. Value**: Primitives are compared by value; objects are compared by reference.
`,

  // problem explanation--> 38
  "comparing-boolean-and-number": `
### 💡 Problem Breakdown
When loose equality (\`==\`) is used to compare a boolean and a number, the boolean is first converted to a number (\`true\` -> 1, \`false\` -> 0), and then the numbers are compared.

### ⚙️ Solution Walkthrough
\`true\` is compared to \`1\`.
\`\`\`javascript
true == 1; // true, because true becomes 1
false == 0; // true, because false becomes 0
\`\`\`
This is another example of type coercion that can lead to confusion, reinforcing the preference for strict equality (\`===\`).

### 📚 Key Concepts
- **Type Coercion**: The rules for how booleans are converted to numbers.
`,

  // problem explanation--> 39
  "comparing-string-number-greater-than": `
### 💡 Problem Breakdown
Relational operators like \`>\` and \`<\` will also perform type coercion if the operands are of different types. If one operand is a string and the other is a number, the string will be converted to a number for the comparison.

### ⚙️ Solution Walkthrough
A numeric string is compared to a number.
\`\`\`javascript
"10" > 5; // true, because "10" is converted to the number 10.
"2" > 10; // false, because "2" is converted to the number 2.
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: A behavior that applies to relational operators as well as equality operators.
`,

  // problem explanation--> 40
  "object-is-comparison": `
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
For all other comparisons, \`Object.is(a, b)\` is the same as \`a === b\`.

### 📚 Key Concepts
- **\`Object.is()\`**: A method for "same-value" equality, which is slightly more precise than strict equality for certain edge cases.
`,

  // problem explanation--> 41
  "logical-and": `
### 💡 Problem Breakdown
The logical AND operator (\`&&\`) is used to combine two boolean expressions. It returns \`true\` only if **both** the expression on its left and the expression on its right are true.

### ⚙️ Solution Walkthrough
Two boolean values are combined.
\`\`\`javascript
true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false
\`\`\`
### 📚 Key Concepts
- **Logical Operators**: Used to combine boolean values.
- **Boolean Algebra**: The underlying logic for these operations.
`,

  // problem explanation--> 42
  "logical-or": `
### 💡 Problem Breakdown
The logical OR operator (\`||\`) is used to combine two boolean expressions. It returns \`true\` if **at least one** of the expressions on its left or right is true.

### ⚙️ Solution Walkthrough
Two boolean values are combined.
\`\`\`javascript
true || true;   // true
true || false;  // true
false || true;  // true
false || false; // false
\`\`\`
### 📚 Key Concepts
- **Logical Operators**: Used to combine boolean values.
`,

  // problem explanation--> 43
  "logical-not": `
### 💡 Problem Breakdown
The logical NOT operator (\`!\`), also known as the "bang" operator, is a unary operator that inverts a boolean value. It turns \`true\` into \`false\` and \`false\` into \`true\`.

### ⚙️ Solution Walkthrough
The operator is applied to a boolean.
\`\`\`javascript
!true;  // false
!false; // true
\`\`\`
When used with non-boolean values, it first coerces the value to a boolean based on its "truthiness" and then inverts it.

### 📚 Key Concepts
- **Logical Operators**: The \`!\` is a unary logical operator.
`,

  // problem explanation--> 44
  "truthy-values": `
### 💡 Problem Breakdown
In JavaScript, a "truthy" value is a value that is considered \`true\` when encountered in a boolean context (like an \`if\` statement). All values are truthy except for the six specific "falsy" values.

### ⚙️ Solution Walkthrough
The \`Boolean()\` function is used to explicitly show the truthiness of various values.
\`\`\`javascript
Boolean('hello'); // true (non-empty string)
Boolean(1);       // true (non-zero number)
Boolean({});      // true (any object)
Boolean([]);      // true (any array)
\`\`\`
### 📚 Key Concepts
- **Truthy**: Any value that is not one of the six falsy values.
`,

  // problem explanation--> 45
  "falsy-values": `
### 💡 Problem Breakdown
A "falsy" value is a value that is considered \`false\` when encountered in a boolean context. There are only **six** falsy values in JavaScript.

### ⚙️ Solution Walkthrough
The six falsy values are demonstrated.
\`\`\`javascript
Boolean(false);     // false
Boolean(0);         // false
Boolean('');        // false (empty string)
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
\`\`\`
It's important to memorize this short list. Every other value is truthy.

### 📚 Key Concepts
- **Falsy**: A small, specific set of values that evaluate to false in boolean contexts.
`,

  // problem explanation--> 46
  "logical-and-short-circuit": `
### 💡 Problem Breakdown
The logical AND operator (\`&&\`) exhibits "short-circuiting" behavior. If the first operand evaluates to a falsy value, the operator immediately returns that falsy value without ever evaluating the second operand.

### ⚙️ Solution Walkthrough
A function call is placed as the second operand.
\`\`\`javascript
let secondOperandEvaluated = false;
function func() {
  secondOperandEvaluated = true;
  return true;
}

false && func(); // The call to func() never happens.
\`\`\`
This is a very useful feature for performance and for creating "guards" (e.g., \`user && user.name\`).

### 📚 Key Concepts
- **Short-Circuit Evaluation**: A performance optimization where the second operand of a logical expression is only evaluated if necessary.
`,

  // problem explanation--> 47
  "logical-or-short-circuit": `
### 💡 Problem Breakdown
The logical OR operator (\`||\`) also short-circuits. If the first operand evaluates to a truthy value, the operator immediately returns that truthy value without ever evaluating the second operand.

### ⚙️ Solution Walkthrough
A function call is placed as the second operand.
\`\`\`javascript
let secondOperandEvaluated = false;
function func() {
  secondOperandEvaluated = true;
  return true;
}

true || func(); // The call to func() never happens.
\`\`\`
### 📚 Key Concepts
- **Short-Circuit Evaluation**: A common feature of logical operators in many programming languages.
`,

  // problem explanation--> 48
  "logical-or-for-defaults": `
### 💡 Problem Breakdown
A common and historic pattern in JavaScript is to use the short-circuiting behavior of the logical OR operator (\`||\`) to provide a default value for a variable.

### ⚙️ Solution Walkthrough
The OR operator provides a default for an empty string.
\`\`\`javascript
const name = '';
const displayName = name || 'Guest'; // displayName is 'Guest'
\`\`\`
Because the \`name\` variable is an empty string (which is falsy), the expression evaluates to the second operand, "Guest". A potential pitfall is that this pattern will also override other intentional falsy values like \`0\` or \`false\`.

### 📚 Key Concepts
- **Short-Circuit Evaluation**: Used here as a concise conditional assignment.
`,

  // problem explanation--> 49
  "double-not-to-boolean": `
### 💡 Problem Breakdown
The double NOT operator (\`!!\`) is a concise idiom for converting any JavaScript value to its corresponding boolean equivalent.

### ⚙️ Solution Walkthrough
The operator is applied to a value.
\`\`\`javascript
!!'hello'; // true
!!0;       // false
!!{};      // true
\`\`\`
1.  The first \`!\` coerces the value to a boolean and inverts it (\`!'hello'\` -> \`false\`).
2.  The second \`!\` inverts it back to its original boolean value (\`!false\` -> \`true\`).

### 📚 Key Concepts
- **Type Coercion**: A shorthand for explicit conversion using \`Boolean()\`.
`,

  // problem explanation--> 50
  "logical-operator-precedence": `
### 💡 Problem Breakdown
This problem tests the precedence among logical operators. The logical AND operator (\`&&\`) has higher precedence than the logical OR operator (\`||\`). The logical NOT operator (\`!\`) has the highest precedence of the three.

### ⚙️ Solution Walkthrough
The expression is evaluated according to precedence rules.
\`\`\`javascript
true || false && false; // is evaluated as true || (false && false)
                        // which is true || false = true
\`\`\`
### 📚 Key Concepts
- **Operator Precedence**: Understanding the order of logical operations.
`,

  // problem explanation--> 51
  "logical-and-return-value": `
### 💡 Problem Breakdown
The logical AND operator (\`&&\`) does not always return \`true\` or \`false\`. It returns the value of one of its operands.
- If the first operand is falsy, it returns the first operand's value.
- If the first operand is truthy, it returns the second operand's value.

### ⚙️ Solution Walkthrough
Two scenarios are demonstrated.
\`\`\`javascript
0 && 'dog';        // returns 0 (the first falsy operand)
'cat' && 'dog';    // returns 'dog' (the last operand, as all were truthy)
\`\`\`
### 📚 Key Concepts
- **Short-Circuit Evaluation**: The return value is a direct consequence of the short-circuiting behavior.
`,

  // problem explanation--> 52
  "logical-or-return-value": `
### 💡 Problem Breakdown
The logical OR operator (\`||\`) also returns the value of one of its operands.
- If the first operand is truthy, it returns the first operand's value.
- If the first operand is falsy, it returns the second operand's value.

### ⚙️ Solution Walkthrough
Two scenarios are demonstrated.
\`\`\`javascript
'cat' || 'dog';    // returns 'cat' (the first truthy operand)
0 || 'dog';        // returns 'dog' (the last operand)
\`\`\`
This behavior is why it's commonly used for providing default values.

### 📚 Key Concepts
- **Short-Circuit Evaluation**: The return value is a direct consequence of the short-circuiting behavior.
`,

  // problem explanation--> 53
  "bitwise-and": `
### 💡 Problem Breakdown
Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones). The bitwise AND operator (\`&\`) returns a new number where each bit is set to 1 only if the corresponding bits in *both* operands were 1.

### ⚙️ Solution Walkthrough
The operation is performed on 5 and 3.
\`\`\`javascript
//   5 -> 0101
// & 3 -> 0011
//   --------
//   1 -> 0001
5 & 3; // result is 1
\`\`\`
### 📚 Key Concepts
- **Bitwise Operators**: Low-level operators that work directly on the binary representation of numbers.
`,

  // problem explanation--> 54
  "bitwise-or": `
### 💡 Problem Breakdown
The bitwise OR operator (\`|\`) returns a new number where each bit is set to 1 if the corresponding bit in *either* of the two operands was 1.

### ⚙️ Solution Walkthrough
The operation is performed on 5 and 3.
\`\`\`javascript
//   5 -> 0101
// | 3 -> 0011
//   --------
//   7 -> 0111
5 | 3; // result is 7
\`\`\`
### 📚 Key Concepts
- **Bitwise Operators**: Low-level operators that work directly on the binary representation of numbers.
`,

  // problem explanation--> 55
  "bitwise-xor": `
### 💡 Problem Breakdown
The bitwise XOR (exclusive OR) operator (\`^\`) returns a new number where each bit is set to 1 if the corresponding bits in the two operands were *different*.

### ⚙️ Solution Walkthrough
The operation is performed on 5 and 3.
\`\`\`javascript
//   5 -> 0101
// ^ 3 -> 0011
//   --------
//   6 -> 0110
5 ^ 3; // result is 6
\`\`\`
### 📚 Key Concepts
- **Bitwise Operators**: Low-level operators that work directly on the binary representation of numbers.
`,

  // problem explanation--> 56
  "bitwise-not": `
### 💡 Problem Breakdown
The bitwise NOT operator (\`~\`) is a unary operator that inverts all the bits of its operand. It returns the "two's complement" of the number, which is effectively \`-(x + 1)\`.

### ⚙️ Solution Walkthrough
The operation is performed on 5.
\`\`\`javascript
// 5 -> ...00000101
// ~5 -> ...11111010 (which is -6 in two's complement)
~5; // result is -6
\`\`\`
### 📚 Key Concepts
- **Two's Complement**: The standard way computers represent signed integers.
`,

  // problem explanation--> 57
  "bitwise-left-shift": `
### 💡 Problem Breakdown
The left shift operator (\`<<\`) shifts the bits of the first operand to the left by the number of places specified by the second operand. New bits on the right are filled with zeros. Each shift to the left is equivalent to multiplying by 2.

### ⚙️ Solution Walkthrough
5 is shifted left by 1 bit.
\`\`\`javascript
// 5 -> 0101
// 5 << 1 -> 1010 (which is 10)
5 << 1; // result is 10
\`\`\`
### 📚 Key Concepts
- **Bit Shifting**: An efficient way to perform multiplication or division by powers of 2.
`,

  // problem explanation--> 58
  "bitwise-right-shift": `
### 💡 Problem Breakdown
The sign-propagating right shift operator (\`>>\`) shifts the bits of the first operand to the right. Bits shifted off the right are discarded. The new bits on the left are filled with a copy of the original leftmost bit (the sign bit). This preserves the sign of the number.

### ⚙️ Solution Walkthrough
-10 is shifted right by 1 bit.
\`\`\`javascript
// -10 -> ...11110110
// -10 >> 1 -> ...11111011 (which is -5)
-10 >> 1; // result is -5
\`\`\`
This is equivalent to flooring division by 2.

### 📚 Key Concepts
- **Sign Propagation**: The behavior of the \`>>\` operator that preserves the number's sign.
`,

  // problem explanation--> 59
  "bitwise-zero-fill-right-shift": `
### 💡 Problem Breakdown
The zero-fill right shift operator (\`>>>\`) is similar to \`>>\`, but it always fills the new bits on the left with zeros, regardless of the sign of the number. This means it treats the number as an unsigned 32-bit integer.

### ⚙️ Solution Walkthrough
-10 is shifted right by 1 bit.
\`\`\`javascript
// -10 -> 11111111 11111111 11111111 11110110
// -10 >>> 1 -> 01111111 11111111 11111111 11111011 (a large positive number)
-10 >>> 1; // result is 2147483643
\`\`\`
### 📚 Key Concepts
- **Unsigned Integer**: Treating the number as if it has no sign bit.
`,

  // problem explanation--> 60
  "bitwise-check-odd-even": `
### 💡 Problem Breakdown
This problem shows an efficient alternative to the modulo operator for checking if an integer is odd or even. In binary, all even numbers have their last bit (the "least significant bit") as 0, and all odd numbers have it as 1.

### ⚙️ Solution Walkthrough
We can use bitwise AND with 1 to isolate the last bit.
\`\`\`javascript
7 & 1; // 7 is 0111, 1 is 0001. 0111 & 0001 = 1. The number is odd.
6 & 1; // 6 is 0110, 1 is 0001. 0110 & 0001 = 0. The number is even.
\`\`\`
The expression \`(num & 1) === 0\` will be true if the number is even.

### 📚 Key Concepts
- **Binary Representation**: Understanding the binary patterns of odd and even numbers.
- **Bit Masking**: Using bitwise AND to isolate specific bits.
`,

  // problem explanation--> 61
  "bitwise-swap-variables": `
### 💡 Problem Breakdown
This is a classic programming trick. The properties of the bitwise XOR operator can be used to swap the values of two integer variables without needing a third temporary variable.

### ⚙️ Solution Walkthrough
The three-step XOR swap algorithm is applied.
\`\`\`javascript
let a = 5; // 0101
let b = 9; // 1001

a = a ^ b; // a is now 12 (1100)
b = a ^ b; // b is now 5 (1100 ^ 1001 = 0101)
a = a ^ b; // a is now 9 (1100 ^ 0101 = 1001)
\`\`\`
### 📚 Key Concepts
- **XOR Properties**: The key properties used are \`x ^ x = 0\` and \`x ^ 0 = x\`.
`,

  // problem explanation--> 62
  "conditional-ternary-operator": `
### 💡 Problem Breakdown
The conditional (or ternary) operator is a concise, one-line alternative to an \`if...else\` statement. It is the only JavaScript operator that takes three operands.

### ⚙️ Solution Walkthrough
The syntax is \`condition ? value_if_true : value_if_false\`.
\`\`\`javascript
const age = 21;
const status = age >= 18 ? 'Adult' : 'Minor'; // status is 'Adult'
\`\`\`
This is functionally equivalent to the longer \`if...else\` version, but is often used for simple conditional assignments due to its brevity.

### 📚 Key Concepts
- **Ternary Operator**: A shorthand for simple conditional expressions.
`,

  // problem explanation--> 63
  "comma-operator": `
### 💡 Problem Breakdown
The comma operator (\`,\`) evaluates each of its operands from left to right and returns the value of the **last** operand. It's most commonly used to put multiple expressions in a location that expects a single expression, like in a \`for\` loop.

### ⚙️ Solution Walkthrough
Two expressions are evaluated, and the value of the second is returned.
\`\`\`javascript
let x = 1;
// x++ is evaluated (x becomes 2), then x + 2 is evaluated.
// The whole expression returns the value of the last part (4).
const y = (x++, x + 2);
\`\`\`
### 📚 Key Concepts
- **Comma Operator**: An operator for sequencing expressions.
`,

  // problem explanation--> 64
  "delete-operator": `
### 💡 Problem Breakdown
The \`delete\` operator is used to remove a property from an object. It does not delete variables or functions.

### ⚙️ Solution Walkthrough
A property is removed from an object.
\`\`\`javascript
const obj = { a: 1, b: 2 };
delete obj.b;
// obj is now { a: 1 }
\`\`\`
The \`delete\` operator returns \`true\` if the operation was successful. It will fail on non-configurable properties.

### 📚 Key Concepts
- **\`delete\` Operator**: An operator for removing object properties.
`,

  // problem explanation--> 65
  "typeof-operator": `
### 💡 Problem Breakdown
The \`typeof\` operator returns a string indicating the data type of an operand. It's a fundamental tool for runtime type checking.

### ⚙️ Solution Walkthrough
The operator is used on a value.
\`\`\`javascript
typeof 'hello';      // "string"
typeof 42;           // "number"
typeof true;         // "boolean"
typeof {};           // "object"
typeof undefined;    // "undefined"
\`\`\`
### 📚 Key Concepts
- **\`typeof\` Operator**: The primary way to inspect the primitive type of a value.
`,

  // problem explanation--> 66
  "in-operator": `
### 💡 Problem Breakdown
The \`in\` operator returns \`true\` if the specified property is in the specified object or its prototype chain.

### ⚙️ Solution Walkthrough
The operator checks for the existence of a property.
\`\`\`javascript
const obj = { a: 1 };
'a' in obj;      // true
'b' in obj;      // false
'toString' in obj; // true (because it's inherited from Object.prototype)
\`\`\`
### 📚 Key Concepts
- **\`in\` Operator**: An operator for checking property existence, including inherited properties.
`,

  // problem explanation--> 67
  "instanceof-operator": `
### 💡 Problem Breakdown
The \`instanceof\` operator tests to see if the \`prototype\` property of a constructor appears anywhere in the prototype chain of an object.

### ⚙️ Solution Walkthrough
An object is checked against its constructor.
\`\`\`javascript
const arr = [];
arr instanceof Array;  // true
arr instanceof Object; // true (because Array.prototype inherits from Object.prototype)
\`\`\`
It's used to determine if an object is of a certain type or was created from a certain class.

### 📚 Key Concepts
- **\`instanceof\` Operator**: A tool for checking an object's lineage.
- **Prototype Chain**: The mechanism for inheritance in JavaScript.
`,

  // problem explanation--> 68
  "void-operator": `
### 💡 Problem Breakdown
The \`void\` operator evaluates a given expression and then returns \`undefined\`. Its main historical use was to obtain the \`undefined\` primitive value or to create a link that does nothing.

### ⚙️ Solution Walkthrough
The operator is used on an expression.
\`\`\`javascript
void (1 + 1); // returns undefined
void 0;       // returns undefined (a common shorthand)
\`\`\`
In modern JavaScript, its use cases are very rare.

### 📚 Key Concepts
- **\`void\` Operator**: An operator that evaluates an expression and returns \`undefined\`.
`,

  // problem explanation--> 69
  "grouping-operator": `
### 💡 Problem Breakdown
The grouping operator consists of a pair of parentheses \`()\` around an expression. It is used to control the precedence of evaluation.

### ⚙️ Solution Walkthrough
Parentheses are used to force addition to happen before multiplication.
\`\`\`javascript
(2 + 3) * 4; // evaluates to 20
\`\`\`
Without the parentheses, the result would be 14.

### 📚 Key Concepts
- **Operator Precedence**: The grouping operator has the highest precedence.
`,

  // problem explanation--> 70
  "new-operator": `
### 💡 Problem Breakdown
The \`new\` operator is used to create an instance of an object that has a constructor function. It performs four main actions:
1. Creates a new, empty plain object.
2. Links this new object to the constructor's prototype.
3. Binds the \`this\` keyword to the new object and executes the constructor function.
4. Returns the new object (unless the constructor returns a different object).

### ⚙️ Solution Walkthrough
A new instance of a custom type is created.
\`\`\`javascript
function Person(name) {
  this.name = name;
}
const p = new Person('Alice');
// p is now an object { name: 'Alice' }
\`\`\`
### 📚 Key Concepts
- **\`new\` Operator**: The primary way to perform instantiation in constructor-based OOP.
- **Constructor Function**: A function designed to be used with the \`new\` keyword.
`,

  // problem explanation--> 71
  "super-operator-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a keyword used in ES6 classes. The \`super\` keyword is used to access and call functions on an object's parent.
- **\`super()\`**: When used in a constructor, it calls the parent class's constructor. This must be done before the \`this\` keyword can be used in the constructor.
- **\`super.method()\`**: When used in a method, it calls the parent class's version of that method.

### ⚙️ Solution Walkthrough
A conceptual example of a subclass.
\`\`\`javascript
class Animal {
  constructor(name) { this.name = name; }
  speak() { return \`My name is \${this.name}\`; }
}
class Dog extends Animal {
  constructor(name) {
    super(name); // Calls the Animal constructor
  }
  speak() {
    return \`\${super.speak()} and I am a dog.\`; // Calls the Animal's speak method
  }
}
\`\`\`

### 📚 Key Concepts
- **\`super\`**: A keyword for accessing parent class members.
- **Class Inheritance**: The mechanism for creating a new class based on an existing one.
`,

  // problem explanation--> 72
  "spread-operator-array": `
### 💡 Problem Breakdown
The spread syntax (\`...\`) allows an iterable such as an array to be expanded into its individual elements. It's very useful for creating new arrays by combining existing ones.

### ⚙️ Solution Walkthrough
The elements of one array are "spread" into a new array literal.
\`\`\`javascript
const arr1 = [1, 2];
const combined = [...arr1, 3, 4]; // [1, 2, 3, 4]
\`\`\`
This is a modern and readable alternative to using methods like \`.concat()\`.

### 📚 Key Concepts
- **Spread Syntax (...)**: A powerful feature for working with iterables.
`,

  // problem explanation--> 73
  "spread-operator-object": `
### 💡 Problem Breakdown
The spread syntax can also be used with objects to create new objects by copying the properties of existing ones.

### ⚙️ Solution Walkthrough
Properties from one object are spread into a new object literal.
\`\`\`javascript
const obj1 = { a: 1, b: 2 };
const combined = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
\`\`\`
If there are properties with the same key, the property from the last object in the spread sequence "wins".

### 📚 Key Concepts
- **Spread Properties**: The object version of the spread syntax.
`,

  // problem explanation--> 74
  "yield-operator-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about **generator functions**. A generator function (\`function*\`) is a special type of function that can be paused and resumed. The \`yield\` keyword is used inside a generator to pause the function's execution and return a value to the caller.

### ⚙️ Solution Walkthrough
A simple generator yields two values.
\`\`\`javascript
function* myGenerator() {
  console.log('Starting');
  yield 1; // Pauses here, returns 1
  console.log('Resumed');
  yield 2; // Pauses here, returns 2
}
const gen = myGenerator();
gen.next(); // Logs 'Starting', returns { value: 1, done: false }
gen.next(); // Logs 'Resumed', returns { value: 2, done: false }
\`\`\`
### 📚 Key Concepts
- **Generator Function**: A function that returns an iterator object.
- **\`yield\`**: An operator for pausing a generator and returning a value.
`,

  // problem explanation--> 75
  "yield-star-operator-conceptual": `
### 💡 Problem Breakdown
This is another conceptual problem about generators. The \`yield*\` operator is used to delegate the iteration process to another generator or iterable object. It's like a "yield all" from another source.

### ⚙️ Solution Walkthrough
One generator delegates to another.
\`\`\`javascript
function* gen1() {
  yield 2;
  yield 3;
}
function* gen2() {
  yield 1;
  yield* gen1(); // Delegates to gen1
  yield 4;
}
const gen = gen2();
// The values produced would be 1, 2, 3, 4
\`\`\`
This is a convenient way to compose generators.

### 📚 Key Concepts
- **\`yield*\`**: An operator for delegating iteration.
`,

  // problem explanation--> 76
  "async-await-operator": `
### 💡 Problem Breakdown
The \`await\` operator is used to wait for a \`Promise\` to settle. It can only be used inside an \`async\` function. When \`await\` is used, it pauses the execution of the \`async\` function until the promise is resolved or rejected.

### ⚙️ Solution Walkthrough
\`await\` is used to get the resolved value of a promise.
\`\`\`javascript
async function myAsyncFunction() {
  const result = await Promise.resolve('Hello from await!');
  return result; // 'Hello from await!'
}
\`\`\`
This syntax allows you to write asynchronous code that looks and behaves like synchronous code.

### 📚 Key Concepts
- **\`await\` Operator**: A keyword for pausing an async function and waiting for a promise.
- **\`async\` Function**: A special function that implicitly returns a promise.
`,

  // problem explanation--> 77
  "nullish-coalescing-operator": `
### 💡 Problem Breakdown
The nullish coalescing operator (\`??\`) is a logical operator that returns its right-hand side operand when its left-hand side operand is \`null\` or \`undefined\`, and otherwise returns its left-hand side operand.

### ⚙️ Solution Walkthrough
The operator is used to provide a default value.
\`\`\`javascript
const nullValue = null;
const someValue = nullValue ?? 'default value'; // someValue is 'default value'

const definedValue = 'hello';
const anotherValue = definedValue ?? 'default value'; // anotherValue is 'hello'
\`\`\`
It is a safer alternative to the logical OR (\`||\`) for providing defaults, as it doesn't override other "falsy" values like \`0\` or \`''\`.

### 📚 Key Concepts
- **Nullish Coalescing Operator (??)**: A logical operator that provides defaults specifically for \`null\` and \`undefined\`.
`,

  // problem explanation--> 78
  "nullish-vs-or": `
### 💡 Problem Breakdown
This problem highlights the key difference between the nullish coalescing operator (\`??\`) and the logical OR operator (\`||\`) when providing default values.
- **\`||\`** returns the right-hand side for **any falsy** value (\`false\`, \`0\`, \`''\`, \`null\`, \`undefined\`, \`NaN\`).
- **\`??\`** returns the right-hand side **only for \`null\` or \`undefined\`**.

### ⚙️ Solution Walkthrough
The behavior with an empty string is compared.
\`\`\`javascript
const emptyString = '';
const val1 = emptyString || 'default'; // val1 is 'default'
const val2 = emptyString ?? 'default'; // val2 is '' (the empty string)
\`\`\`
Use \`??\` when you want to allow falsy values like \`0\` or \`''\` as valid inputs.

### 📚 Key Concepts
- **Truthiness vs. Nullishness**: A subtle but important distinction in JavaScript's logical operators.
`,

  // problem explanation--> 79
  "optional-chaining-operator": `
### 💡 Problem Breakdown
The optional chaining operator (\`?.\`) permits reading the value of a property located deep within a chain of connected objects without having to explicitly validate that each reference in the chain is valid. If a reference is \`null\` or \`undefined\`, the expression "short-circuits" and evaluates to \`undefined\` instead of throwing an error.

### ⚙️ Solution Walkthrough
A nested property is accessed safely.
\`\`\`javascript
const user = { name: 'Bob' }; // user has no 'address' property

// Without optional chaining, this would throw a TypeError:
// const street = user.address.street;

// With optional chaining:
const street = user.address?.street; // street is undefined
\`\`\`
### 📚 Key Concepts
- **Optional Chaining Operator (?.)**: A modern syntax for safely accessing nested properties.
`,

  // problem explanation--> 80
  "optional-chaining-with-methods": `
### 💡 Problem Breakdown
Optional chaining can also be used to safely call a method that may not exist on an object.

### ⚙️ Solution Walkthrough
The syntax \`?.()\` is used.
\`\`\`javascript
const user = {
  name: 'Carol',
  // No 'getName' method
};

const name = user.getName?.(); // name is undefined, no error is thrown
\`\`\`
If \`getName\` existed, it would be called. Since it doesn't, the expression short-circuits.

### 📚 Key Concepts
- **Optional Chaining**: A versatile operator that works for property access, method calls, and array access.
`,

  // problem explanation--> 81
  "optional-chaining-with-arrays": `
### 💡 Problem Breakdown
Optional chaining can be used with bracket notation to safely access an element from an array that may not exist.

### ⚙️ Solution Walkthrough
The syntax \`?.[]\` is used.
\`\`\`javascript
const user = {
  data: {
    posts: ['Post 1']
  }
};

const firstPost = user.data?.posts?.[0];   // 'Post 1'
const firstComment = user.data?.comments?.[0]; // undefined
\`\`\`
This allows you to safely access \`[0]\` only if the \`comments\` array itself exists.

### 📚 Key Concepts
- **Optional Chaining**: Works with both dot and bracket notation.
`,

  // problem explanation--> 82
  "logical-nullish-assignment": `
### 💡 Problem Breakdown
The logical nullish assignment operator (\`??=\`) is an ES2021 feature. It only assigns the right-hand value to the left-hand variable if the left-hand variable is currently \`null\` or \`undefined\`.

### ⚙️ Solution Walkthrough
The operator is used on two variables.
\`\`\`javascript
let a = null;
let b = 0;

a ??= 'default'; // a becomes 'default'
b ??= 'default'; // b remains 0, because 0 is not nullish
\`\`\`
It's a concise way to write \`a = a ?? 'default';\`.

### 📚 Key Concepts
- **Logical Assignment Operators**: A set of new operators that combine a logical operation with an assignment.
`,

  // problem explanation--> 83
  "logical-and-assignment": `
### 💡 Problem Breakdown
The logical AND assignment operator (\`&&=\`) only assigns the right-hand value to the left-hand variable if the left-hand variable is currently **truthy**.

### ⚙️ Solution Walkthrough
The operator is used on two variables.
\`\`\`javascript
let a = { name: 'Dave' }; // truthy
let b = null;             // falsy

a &&= { name: 'Updated' }; // a is reassigned
b &&= 'No change';         // b is not reassigned
\`\`\`
It's a concise way to write \`a = a && { name: 'Updated' };\`.

### 📚 Key Concepts
- **Logical Assignment Operators**: A modern shorthand for conditional assignments.
`,

  // problem explanation--> 84
  "logical-or-assignment": `
### 💡 Problem Breakdown
The logical OR assignment operator (\`||=\`) only assigns the right-hand value to the left-hand variable if the left-hand variable is currently **falsy**.

### ⚙️ Solution Walkthrough
The operator is used on two variables.
\`\`\`javascript
let a = 0;         // falsy
let b = 'Initial'; // truthy

a ||= 'Assigned'; // a is reassigned
b ||= 'No change'; // b is not reassigned
\`\`\`
It's a concise way to write \`a = a || 'Assigned';\`.

### 📚 Key Concepts
- **Logical Assignment Operators**: A modern shorthand for conditional assignments.
`,

  // problem explanation--> 85
  "bitwise-flags-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a classic programming technique. Bitwise flags allow you to store multiple boolean states (on/off) in a single integer. This is done by assigning each flag a value that is a power of two (1, 2, 4, 8, ...), which corresponds to a single bit being "on" in the binary representation.

### ⚙️ Solution Walkthrough
Flags are defined and combined.
\`\`\`javascript
const READ = 4;    // 0100
const WRITE = 2;   // 0010
const EXECUTE = 1; // 0001

// Give a user READ and EXECUTE permissions
let userPermissions = READ | EXECUTE; // 0100 | 0001 = 0101 (which is 5)
\`\`\`
Bitwise OR (\`|\`) is used to combine flags. This is very memory-efficient.

### 📚 Key Concepts
- **Bitwise Flags**: A memory-efficient pattern for managing boolean states.
- **Powers of Two**: The basis for assigning flag values.
`,

  // problem explanation--> 86
  "bitwise-check-flag": `
### 💡 Problem Breakdown
To check if a specific flag is "on" in a permissions variable, you can use the bitwise AND operator (\`&\`).

### ⚙️ Solution Walkthrough
A user's permissions are checked for the READ flag.
\`\`\`javascript
const READ = 4; // 0100
let permissions = 5; // 0101 (READ and EXECUTE)

// The & operator will be non-zero only if the READ bit is set
if ((permissions & READ) > 0) {
  // Has read permission
}
\`\`\`
\`0101 & 0100 = 0100\` (which is 4). Since 4 is greater than 0, the check passes.

### 📚 Key Concepts
- **Bit Masking**: Using bitwise AND to check the status of specific bits.
`,

  // problem explanation--> 87
  "bitwise-set-flag": `
### 💡 Problem Breakdown
To add a flag (turn a bit "on") to a permissions variable without affecting other flags, you can use the bitwise OR assignment operator (\`|=\`).

### ⚙️ Solution Walkthrough
The WRITE permission is added to a user.
\`\`\`javascript
const WRITE = 2; // 0010
let permissions = 5; // 0101

permissions |= WRITE; // 0101 | 0010 = 0111 (which is 7)
\`\`\`
Now the permissions variable has READ, WRITE, and EXECUTE flags set.

### 📚 Key Concepts
- **Bitwise OR**: Used to combine flags.
`,

  // problem explanation--> 88
  "bitwise-clear-flag": `
### 💡 Problem Breakdown
To remove a flag (turn a bit "off") from a permissions variable without affecting other flags, you use a combination of bitwise NOT (\`~\`) and bitwise AND (\`&\`).

### ⚙️ Solution Walkthrough
The EXECUTE permission is removed.
\`\`\`javascript
const EXECUTE = 1; // 0001
let permissions = 7; // 0111

// ~EXECUTE creates a mask with the EXECUTE bit off: ...11111110
permissions &= ~EXECUTE; // 0111 & ...1110 = 0110 (which is 6)
\`\`\`
This operation effectively turns off only the bit corresponding to the EXECUTE flag.

### 📚 Key Concepts
- **Bit Masking**: Using NOT and AND to selectively turn off a bit.
`,

  // problem explanation--> 89
  "bitwise-toggle-flag": `
### 💡 Problem Breakdown
To toggle a flag (turn it on if it's off, and off if it's on), you can use the bitwise XOR assignment operator (\`^=\`).

### ⚙️ Solution Walkthrough
The WRITE permission is toggled twice.
\`\`\`javascript
const WRITE = 2; // 0010
let permissions = 5; // 0101

permissions ^= WRITE; // 0101 ^ 0010 = 0111 (7). The flag is now on.
permissions ^= WRITE; // 0111 ^ 0010 = 0101 (5). The flag is now off again.
\`\`\`
### 📚 Key Concepts
- **Bitwise XOR**: Used to flip the state of a bit.
`,

  // problem explanation--> 90
  "fast-floor-with-double-not": `
### 💡 Problem Breakdown
This problem demonstrates a classic bitwise "trick". The double bitwise NOT operator (\`~~\`) can be used as a very fast way to truncate a decimal part of a number, effectively acting like \`Math.floor()\` for positive numbers and \`Math.ceil()\` for negative numbers.

### ⚙️ Solution Walkthrough
The operator is applied to a decimal.
\`\`\`javascript
~~5.95;  // 5
~~-5.95; // -5
\`\`\`
This works because the first \`~\` converts the number to a 32-bit integer (truncating the decimal) and inverts the bits. The second \`~\` inverts the bits back, leaving just the truncated integer. While potentially faster in some older JS engines, \`Math.floor()\` is more readable and generally preferred.

### 📚 Key Concepts
- **Bitwise Operations**: Can sometimes be used for fast mathematical tricks.
`,

  // problem explanation--> 91
  "fast-multiply-by-two": `
### 💡 Problem Breakdown
This is a bitwise trick for performance. Shifting the bits of an integer to the left by one position is mathematically equivalent to multiplying it by 2.

### ⚙️ Solution Walkthrough
The left shift operator is used.
\`\`\`javascript
21 << 1; // 42
\`\`\`
This is often faster at the machine level than a standard multiplication operation.

### 📚 Key Concepts
- **Bit Shifting**: An efficient way to multiply by powers of two.
`,

  // problem explanation--> 92
  "fast-divide-by-two": `
### 💡 Problem Breakdown
This is the counterpart to the previous problem. Shifting the bits of an integer to the right by one position is equivalent to performing an integer division by 2 (and flooring the result).

### ⚙️ Solution Walkthrough
The right shift operator is used.
\`\`\`javascript
42 >> 1; // 21
43 >> 1; // 21 (the .5 is truncated)
\`\`\`
### 📚 Key Concepts
- **Bit Shifting**: An efficient way to divide by powers of two.
`,

  // problem explanation--> 93
  "associativity-of-exponentiation": `
### 💡 Problem Breakdown
This problem demonstrates the **associativity** of an operator, which determines how operators of the same precedence are grouped in the absence of parentheses. Most binary operators are left-associative. The exponentiation operator (\`**\`) is an exception; it is **right-associative**.

### ⚙️ Solution Walkthrough
The expression is evaluated from right to left.
\`\`\`javascript
2 ** 3 ** 2; // is evaluated as 2 ** (3 ** 2)
             // which is 2 ** 9 = 512
// It is NOT (2 ** 3) ** 2, which would be 8 ** 2 = 64.
\`\`\`
### 📚 Key Concepts
- **Right-Associativity**: A property of the exponentiation operator.
`,

  // problem explanation--> 94
  "associativity-of-assignment": `
### 💡 Problem Breakdown
This is a conceptual problem about the associativity of assignment operators. All assignment operators (\`=\`, \`+=\`, etc.) are **right-associative**. This is what allows chained assignments to work as expected.

### ⚙️ Solution Walkthrough
The chain \`a = b = 5\` is evaluated from right to left.
1. The expression \`b = 5\` is evaluated first. It assigns 5 to \`b\` and the whole expression evaluates to 5.
2. The expression then becomes \`a = 5\`, which assigns 5 to \`a\`.

### 📚 Key Concepts
- **Right-Associativity**: The grouping order for assignment operators.
`,

  // problem explanation--> 95
  "ternary-operator-nesting": `
### 💡 Problem Breakdown
The ternary operator can be nested to create an \`if...else if...else\`-like structure. While this is possible, it is often discouraged because it can quickly become very difficult to read.

### ⚙️ Solution Walkthrough
A nested ternary is used to check for positive, negative, or zero.
\`\`\`javascript
const num = 0;
const result = num > 0 ? 'Positive' : (num < 0 ? 'Negative' : 'Zero');
\`\`\`
The second ternary is nested in the "else" part of the first one.

### 📚 Key Concepts
- **Readability**: A key consideration when choosing between different language constructs. A standard \`if/else if/else\` is usually more readable for this case.
`,

  // problem explanation--> 96
  "in-operator-and-prototypes": `
### 💡 Problem Breakdown
This problem demonstrates that the \`in\` operator doesn't just check for an object's "own" properties; it also checks up the entire prototype chain.

### ⚙️ Solution Walkthrough
The \`in\` operator is used to check for the \`toString\` method on a plain object.
\`\`\`javascript
const obj = {};
'toString' in obj; // true
\`\`\`
The result is \`true\` because even though \`obj\` itself doesn't have a \`toString\` property, it inherits one from \`Object.prototype\`.

### 📚 Key Concepts
- **Prototype Chain**: The mechanism for inheritance in JavaScript.
- **\`in\` Operator**: A tool for checking for the existence of properties, including inherited ones.
`,

  // problem explanation--> 97
  "instanceof-and-prototypes": `
### 💡 Problem Breakdown
This is a conceptual problem about how the \`instanceof\` operator works. The expression \`object instanceof Constructor\` checks if the \`Constructor.prototype\` object exists anywhere in the prototype chain of \`object\`.

### ⚙️ Solution Walkthrough
An array is checked against \`Array\` and \`Object\`.
\`\`\`javascript
const arr = [];
arr instanceof Array;  // true, because arr's prototype is Array.prototype
arr instanceof Object; // true, because Array.prototype's prototype is Object.prototype
\`\`\`
### 📚 Key Concepts
- **Prototype Chain**: The core mechanism that \`instanceof\` uses to work.
`,

  // problem explanation--> 98
  "spread-to-copy-array": `
### 💡 Problem Breakdown
This shows a common, modern, and readable way to create a **shallow copy** of an array. The spread syntax (\`...\`) expands the elements of the original array into a new array literal.

### ⚙️ Solution Walkthrough
A new array is created from an existing one.
\`\`\`javascript
const original = [1, 2];
const copy = [...original];

copy.push(3);
// 'original' is still [1, 2]
// 'copy' is [1, 2, 3]
\`\`\`
This is often preferred over \`original.slice()\` for its readability.

### 📚 Key Concepts
- **Shallow Copy**: Creating a new array, but if the elements are objects, the references are copied, not the objects themselves.
- **Immutability**: A common pattern for working with data immutably.
`,

  // problem explanation--> 99
  "spread-to-merge-objects": `
### 💡 Problem Breakdown
The spread syntax is a powerful tool for merging objects. You can combine the properties of multiple objects into a new object. If there are any properties with the same key, the property from the object that appears later in the spread sequence will overwrite the earlier ones.

### ⚙️ Solution Walkthrough
Two objects are merged.
\`\`\`javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
// merged is { a: 1, b: 3, c: 4 }
\`\`\`
The \`b\` property from \`obj2\` overwrites the one from \`obj1\`.

### 📚 Key Concepts
- **Object Merging**: A common task, especially when dealing with configuration or state updates.
- **Spread Properties**: The object version of the spread syntax.
`,

  // problem explanation--> 100
  "spread-with-function-arguments": `
### 💡 Problem Breakdown
The spread syntax can be used when calling a function to expand an array into individual arguments. This is a modern and more readable alternative to using the \`.apply()\` method.

### ⚙️ Solution Walkthrough
An array of numbers is passed to \`Math.max()\`.
\`\`\`javascript
const nums = [1, 5, 2, 9];

// Instead of Math.max(1, 5, 2, 9)
const max = Math.max(...nums); // max is 9
\`\`\`
### 📚 Key Concepts
- **Spread Syntax**: Used here to pass array elements as function arguments.
`,

  // problem explanation--> 101
  "prefix-vs-postfix-decrement": `
### 💡 Problem Breakdown
This is the counterpart to the increment problem. It highlights the difference between prefix and postfix versions of the decrement operator within expressions.
- **Prefix (\`--x\`)**: Decrements the variable *first*, then evaluates to the *new* value.
- **Postfix (\`x--\`)**: Evaluates to the *original* value, and *then* decrements the variable.

### ⚙️ Solution Walkthrough
The two versions are compared.
\`\`\`javascript
let x = 10;
let y = 10;

const prefixResult = --x; // x becomes 9, prefixResult is 9
const postfixResult = y--; // postfixResult is 10, then y becomes 9
\`\`\`

### 📚 Key Concepts
- **Prefix/Postfix Operators**: The position of the operator changes the expression's return value.
`,

  // problem explanation--> 102
  "operator-precedence-complex": `
### 💡 Problem Breakdown
This problem tests a fuller understanding of operator precedence. The general order is:
1. Grouping \`()\`
2. Exponentiation \`**\`
3. Multiplication \`*\`, Division \`/\`, Remainder \`%\` (left-to-right)
4. Addition \`+\`, Subtraction \`-\` (left-to-right)

### ⚙️ Solution Walkthrough
The expression is evaluated step-by-step.
\`\`\`javascript
// 5 + 10 / 2 * 3 - 1
// 1. Division: 10 / 2 = 5
//    Expression becomes: 5 + 5 * 3 - 1
// 2. Multiplication: 5 * 3 = 15
//    Expression becomes: 5 + 15 - 1
// 3. Addition: 5 + 15 = 20
//    Expression becomes: 20 - 1
// 4. Subtraction: 20 - 1 = 19
\`\`\`

### 📚 Key Concepts
- **Operator Precedence**: A full set of rules for evaluation order.
- **Associativity**: The order for operators with the same precedence (e.g., \`*\` and \`/\` are left-associative).
`,

  // problem explanation--> 103
  "type-coercion-subtract-string": `
### 💡 Problem Breakdown
This problem shows how type coercion differs for the subtraction operator versus the addition operator. While \`+\` performs concatenation if one operand is a string, other arithmetic operators like \`-\` will always attempt to convert both operands to numbers first.

### ⚙️ Solution Walkthrough
A numeric string is used in a subtraction.
\`\`\`javascript
"20" - "10"; // Both strings are coerced to numbers
             // The result is 10 (a number)
\`\`\`
If the string cannot be converted to a valid number, the result will be \`NaN\`.

### 📚 Key Concepts
- **Type Coercion**: Different operators have different rules for how they coerce types.
`,

  // problem explanation--> 104
  "assignment-in-condition": `
### 💡 Problem Breakdown
This demonstrates a very common bug, especially for beginners. Using the assignment operator (\`=\`) inside a conditional (like an \`if\` statement) instead of an equality operator (\`===\` or \`==\`) is valid syntax, but usually not what is intended.

### ⚙️ Solution Walkthrough
The assignment expression \`x = 0\` is evaluated.
\`\`\`javascript
let x = 1;
if (x = 0) {
  // This block is skipped
}
// After the if statement, x is now 0.
\`\`\`
1.  The expression \`(x = 0)\` assigns 0 to \`x\`.
2.  The expression itself evaluates to the assigned value, which is 0.
3.  Since 0 is a falsy value, the \`if\` condition is false, and the block is not executed.

### 📚 Key Concepts
- **Assignment as an Expression**: The root cause of this behavior.
- **Falsy Values**: Understanding that 0 is falsy is key to seeing why the block is skipped.
`,

  // problem explanation--> 105
  "comparing-arrays-pitfall": `
### 💡 Problem Breakdown
This problem demonstrates a fundamental concept for reference types: arrays (like objects) are compared by **reference**, not by value. Two different arrays are never equal, even if they contain the exact same elements.

### ⚙️ Solution Walkthrough
Two separate but identical-looking arrays are compared.
\`\`\`javascript
const arr1 = [1, 2];
const arr2 = [1, 2];
const arr3 = arr1;

arr1 === arr2; // false, because they are two different array objects in memory.
arr1 === arr3; // true, because they both point to the same array object.
\`\`\`
### 📚 Key Concepts
- **Reference vs. Value**: Primitives are compared by value; objects and arrays are compared by reference.
`,

  // problem explanation--> 106
  "logical-and-with-non-booleans": `
### 💡 Problem Breakdown
The logical AND operator (\`&&\`) doesn't always return a boolean. It returns the value of one of its operands based on its short-circuiting behavior. It returns the first falsy operand it finds, or if all operands are truthy, it returns the value of the last operand.

### ⚙️ Solution Walkthrough
The operator is used with non-boolean values.
\`\`\`javascript
1 && "hello";      // returns "hello" (the last truthy value)
null && "hello";   // returns null (the first falsy value)
\`\`\`
### 📚 Key Concepts
- **Short-Circuit Evaluation**: The return value is a direct result of this behavior.
`,

  // problem explanation--> 107
  "logical-or-with-non-booleans": `
### 💡 Problem Breakdown
The logical OR operator (\`||\`) returns the first truthy operand it finds, or if all operands are falsy, it returns the value of the last operand.

### ⚙️ Solution Walkthrough
The operator is used with non-boolean values.
\`\`\`javascript
null || "hello";   // returns "hello" (the first truthy value)
0 || null;         // returns null (the last falsy value)
\`\`\`
### 📚 Key Concepts
- **Short-Circuit Evaluation**: This behavior is the basis for using \`||\` to provide default values.
`,

  // problem explanation--> 108
  "bitwise-permission-masking": `
### 💡 Problem Breakdown
This problem demonstrates a more advanced use of bitwise flags. A "mask" can be created by OR-ing together multiple permission flags. You can then use bitwise AND with this mask to check if a user has *all* the permissions in the mask.

### ⚙️ Solution Walkthrough
A mask for READ and WRITE permissions is created and checked.
\`\`\`javascript
const READ = 4;    // 0100
const WRITE = 2;   // 0010
const EXECUTE = 1; // 0001
const userPermissions = READ | EXECUTE; // 5 (0101)
const READ_WRITE_MASK = READ | WRITE;   // 6 (0110)

// Check if all bits in the mask are also in the user's permissions
(userPermissions & READ_WRITE_MASK) === READ_WRITE_MASK; // false
\`\`\`
The expression checks if the result of the AND operation is equal to the mask itself.

### 📚 Key Concepts
- **Bit Masking**: A powerful technique for checking, setting, or clearing multiple bits at once.
`,

  // problem explanation--> 109
  "delete-array-element": `
### 💡 Problem Breakdown
This problem shows the effect of using the \`delete\` operator on an array element. While it does remove the value, it leaves an "empty slot" or "hole" in the array. It does **not** change the length of the array or re-index the subsequent elements.

### ⚙️ Solution Walkthrough
The second element of an array is deleted.
\`\`\`javascript
const arr = [1, 2, 3];
delete arr[1];
// arr is now [1, <1 empty item>, 3]
// arr.length is still 3
\`\`\`
Because of this behavior, it's almost always better to use array methods like \`.splice()\` or \`.filter()\` to remove elements.

### 📚 Key Concepts
- **\`delete\` Operator**: Not recommended for removing array elements.
- **Sparse Arrays**: Arrays that have empty slots.
`,

  // problem explanation--> 110
  "typeof-null-bug": `
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

  // problem explanation--> 111
  "optional-chaining-with-expression": `
### 💡 Problem Breakdown
Optional chaining can be used with bracket notation, allowing you to safely access a property whose name is stored in a variable.

### ⚙️ Solution Walkthrough
The syntax \`?.[]\` is used with a variable key.
\`\`\`javascript
const user = { profile: { name: 'Eve' } };
const propName = 'profile';

// Safely access user[propName], then safely access .name
const name = user?.[propName]?.name; // "Eve"
\`\`\`

### 📚 Key Concepts
- **Optional Chaining**: Works with both dot and bracket notation.
- **Computed Properties**: Accessing properties using a variable key.
`,

  // problem explanation--> 112
  "spread-string-to-array": `
### 💡 Problem Breakdown
Since strings are iterable in JavaScript, the spread syntax (\`...\`) can be used on them directly inside an array literal to convert the string into an array of its individual characters.

### ⚙️ Solution Walkthrough
A string is spread into an array.
\`\`\`javascript
const str = "spread";
const arr = [...str]; // ['s', 'p', 'r', 'e', 'a', 'd']
\`\`\`
This is a very concise and readable alternative to \`str.split('')\`.

### 📚 Key Concepts
- **Iterables**: The spread syntax works on any iterable object, not just arrays.
`,

  // problem explanation--> 113
  "logical-assignment-order": `
### 💡 Problem Breakdown
The logical assignment operators (\`||=\`, \`&&=\`, \`??=\`) also use short-circuiting. The right-hand side of the operator (e.g., a function call) is only evaluated if the assignment is actually going to happen.

### ⚙️ Solution Walkthrough
A function is placed on the right-hand side of \`||=\`.
\`\`\`javascript
let x = "initial";
let funcWasCalled = false;
const func = () => { funcWasCalled = true; return 'changed'; };

x ||= func(); // 'x' is truthy, so func() is not called.
\`\`\`
This demonstrates that these operators can be used for lazy initialization or conditional execution.

### 📚 Key Concepts
- **Short-Circuit Evaluation**: A core behavior of logical operators that extends to logical assignment.
`,

  // problem explanation--> 114
  "remainder-with-negative-numbers": `
### 💡 Problem Breakdown
This problem explores the behavior of the remainder operator (\`%\`) with negative numbers. In JavaScript, the sign of the result always matches the sign of the **dividend** (the first number).

### ⚙️ Solution Walkthrough
The remainder of \`-10 % 3\` is calculated.
\`\`\`javascript
-10 % 3; // -1
10 % -3; // 1
\`\`\`
This is different from a true mathematical modulo operation, where the result is always non-negative.

### 📚 Key Concepts
- **Remainder vs. Modulo**: A subtle distinction in how different languages handle the \`%\` operator with negative numbers.
`,

  // problem explanation--> 115
  "comma-operator-in-loop": `
### 💡 Problem Breakdown
The comma operator's ability to sequencing multiple expressions is most commonly seen in \`for\` loops. It allows you to initialize or update multiple variables in the loop's header.

### ⚙️ Solution Walkthrough
A loop with two counters is created.
\`\`\`javascript
let result = '';
// Initialize i and j; update i and j in each step
for (let i = 0, j = 5; i < j; i++, j--) {
  result += \`(\${i},\${j}) \`;
}
\`\`\`
This loop runs with \`i\` counting up and \`j\` counting down.

### 📚 Key Concepts
- **\`for\` Loop Syntax**: The comma operator allows for more complex control within the loop's three parts.
`,

  // problem explanation--> 116
  "relational-comparison-of-objects": `
### 💡 Problem Breakdown
This is a conceptual problem about a strange corner of JavaScript's type coercion. When objects are compared using relational operators (\`<\`, \`>\`), JavaScript attempts to convert them to primitives to perform the comparison. It first tries calling the \`.valueOf()\` method, and if that doesn't return a primitive, it calls \`.toString()\`.

### ⚙️ Solution Walkthrough
Comparing two arrays.
\`\`\`javascript
[2] > [1]; // true
// 1. [2].toString() becomes "2"
// 2. [1].toString() becomes "1"
// 3. "2" > "1" is true
\`\`\`
This behavior is generally not useful and can be very confusing, so it's best to avoid relational comparisons on objects.

### 📚 Key Concepts
- **Type Coercion**: A complex set of rules for converting objects to primitives.
`,

  // problem explanation--> 117
  "in-vs-hasownproperty": `
### 💡 Problem Breakdown
This problem compares two ways to check for the existence of a property on an object.
- **\`in\` operator**: Returns \`true\` if the property exists on the object **or** in its prototype chain.
- **\`Object.prototype.hasOwnProperty()\`**: Returns \`true\` only if the property exists directly on the object itself (it's an "own" property).

### ⚙️ Solution Walkthrough
An inherited property is checked.
\`\`\`javascript
const proto = { inherited: true };
const obj = Object.create(proto);

'inherited' in obj;      // true
obj.hasOwnProperty('inherited'); // false
\`\`\`
\`hasOwnProperty\` is generally safer and more precise if you only care about the object's own properties.

### 📚 Key Concepts
- **Own vs. Inherited Properties**: A key distinction in JavaScript's prototypal inheritance model.
`,

  // problem explanation--> 118
  "bitwise-color-channel-extraction": `
### 💡 Problem Breakdown
This problem shows a practical application of bitwise operators. A 24-bit color value is often stored as a single integer, with 8 bits for red, 8 for green, and 8 for blue. Bitwise shifting and masking can be used to extract these individual channel values.

### ⚙️ Solution Walkthrough
The channels of \`#FF00FF\` (magenta) are extracted.
\`\`\`javascript
const color = 0xFF00FF; // 16711935

// Shift the red channel all the way to the right
const red = (color >> 16) & 0xFF; // 255
// Shift the green channel to the right
const green = (color >> 8) & 0xFF; // 0
// No shift needed for blue, just mask it
const blue = color & 0xFF; // 255
\`\`\`
1. **Shifting**: The \`>>\` operator moves the desired 8-bit channel to the far right.
2. **Masking**: The \`& 0xFF\` (which is \`255\` or \`11111111\` in binary) operation isolates just those 8 bits.

### 📚 Key Concepts
- **Bit Masking**: A common technique in low-level programming for extracting data packed into a single integer.
`,

  // problem explanation--> 119
  "short-circuit-for-guarding": `
### 💡 Problem Breakdown
This shows a common pattern that leverages the short-circuiting behavior of the \`&&\` operator. It's used as a "guard" to prevent an error from occurring when trying to access a property on an object that might be \`null\` or \`undefined\`.

### ⚙️ Solution Walkthrough
A property is accessed only if the object exists.
\`\`\`javascript
const user = { profile: { name: 'Frank' } };
const noUser = null;

// The right side is only evaluated if the left side is truthy.
const name1 = user && user.profile && user.profile.name; // 'Frank'
const name2 = noUser && noUser.profile; // returns null, no error
\`\`\`
This pattern is still common, but modern JavaScript often uses the optional chaining operator (\`?.\`) for the same purpose, which is more concise.

### 📚 Key Concepts
- **Short-Circuit Evaluation**: A core feature of logical operators used here for conditional execution.
`,

  // problem explanation--> 120
  "instanceof-with-inheritance": `
### 💡 Problem Breakdown
This problem demonstrates that the \`instanceof\` operator correctly traverses the prototype chain. An object is considered an instance of its own class, its parent class, its grandparent class, and so on, all the way up to \`Object\`.

### ⚙️ Solution Walkthrough
An instance of a \`Dog\` class is checked.
\`\`\`javascript
class Animal {}
class Dog extends Animal {}
const myDog = new Dog();

myDog instanceof Dog;    // true
myDog instanceof Animal; // true
\`\`\`
This works because the prototype of \`myDog\` is \`Dog.prototype\`, and the prototype of \`Dog.prototype\` is \`Animal.prototype\`.

### 📚 Key Concepts
- **Prototype Chain**: The basis for JavaScript inheritance.
- **\`instanceof\` Operator**: A tool for inspecting an object's inheritance hierarchy.
`,

  // problem explanation--> 121
  "infinity-type": `
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

  // problem explanation--> 122
  "destructuring-assignment-with-assignment": `
### 💡 Problem Breakdown
This problem demonstrates an advanced feature where you can combine a default value assignment with the destructuring pattern. This is particularly useful for extracting properties from objects that may be missing certain fields.

### ⚙️ Solution Walkthrough
An object property \`x\` is destructured. If it's undefined in the source object, a default value of 10 is assigned to it.
\`\`\`javascript
const obj = { y: 20 };
let { x = 10 } = obj;
// x is 10
// y is not defined in this scope
\`\`\`
The syntax elegantly handles missing data by providing a fallback value directly in the assignment.

### 📚 Key Concepts
- **Destructuring Defaults**: A core feature for writing robust code that handles missing properties.
`,

  // problem explanation--> 123
  "void-operator-in-links": `
### 💡 Problem Breakdown
This is a conceptual problem about a historical use of the \`void\` operator. In older HTML, to create a link that executed JavaScript but didn't navigate the page, developers would use the \`javascript:\` pseudo-protocol. However, if the script returned a value, the browser would replace the page with it. \`void(0)\` evaluates to \`undefined\` and prevents this navigation.

### ⚙️ Solution Walkthrough
Conceptual HTML:
\`\`\`html
<!-- Clicking this link does nothing and doesn't navigate -->
<a href="javascript:void(0);">Do Nothing</a>
\`\`\`
In modern web development, this pattern is obsolete. Event listeners (\`addEventListener\`) are used instead to handle clicks without affecting the URL.

### 📚 Key Concepts
- **\`void\` Operator**: Evaluates an expression and returns \`undefined\`.
- **Legacy Web Patterns**: Understanding historical practices provides context for modern best practices.
`,

  // problem explanation--> 124
  "optional-chaining-and-nullish-coalescing": `
### 💡 Problem Breakdown
This problem shows a very common and powerful pattern in modern JavaScript that combines two ES2020 operators.
1. **Optional Chaining (\`?.\`)**: Safely access a nested property. If any part of the chain is \`null\` or \`undefined\`, it stops and returns \`undefined\`.
2. **Nullish Coalescing (\`??\`)**: Provide a default value if the result of an expression is \`null\` or \`undefined\`.

### ⚙️ Solution Walkthrough
A default value is provided for a potentially missing nested property.
\`\`\`javascript
const user = { profile: null };

// Safely access user.profile.name, and if it's null/undefined, use 'Guest'
const name = user.profile?.name ?? 'Guest'; // name is 'Guest'
\`\`\`
This is a very robust and concise way to handle potentially missing data.

### 📚 Key Concepts
- **Composability**: Combining modern language features to write clean, safe code.
`,

  // problem explanation--> 125
  "bitwise-xor-find-unique": `
### 💡 Problem Breakdown
This problem demonstrates a clever trick using the bitwise XOR (\`^\`) operator. The XOR operator has the property that \`x ^ x = 0\` and \`x ^ 0 = x\`. If you XOR all numbers in an array where every number appears twice except for one, all the paired numbers will cancel each other out (\`n ^ n = 0\`), leaving only the unique number.

### ⚙️ Solution Walkthrough
The \`reduce\` method is used to XOR all elements together.
\`\`\`javascript
const nums = [2, 3, 4, 3, 2];
const unique = nums.reduce((acc, val) => acc ^ val, 0);
// ((((0^2)^3)^4)^3)^2 = 4
\`\`\`
The final result is the unique number.

### 📚 Key Concepts
- **XOR Properties**: Leveraging the mathematical properties of bitwise operators to solve problems efficiently.
`,

  // problem explanation--> 126
  "exponentiation-with-negative-exponent": `
### 💡 Problem Breakdown
The exponentiation operator (\`**\`) works according to standard mathematical rules, including for negative exponents. A negative exponent \`x ** -n\` is equivalent to \`1 / (x ** n)\`.

### ⚙️ Solution Walkthrough
The expression \`2 ** -3\` is evaluated.
\`\`\`javascript
2 ** -3; // equivalent to 1 / (2 ** 3) = 1 / 8 = 0.125
\`\`\`
### 📚 Key Concepts
- **Exponentiation Operator**: A versatile arithmetic operator.
`,

  // problem explanation--> 127
  "spread-set-to-array": `
### 💡 Problem Breakdown
The spread syntax (\`...\`) can be used on any iterable object. Since an ES6 \`Set\` is iterable, this provides a very simple and direct way to convert a \`Set\` into an \`Array\`.

### ⚙️ Solution Walkthrough
A \`Set\` is spread into an array literal.
\`\`\`javascript
const mySet = new Set([1, 2, 3]);
const arr = [...mySet]; // [1, 2, 3]
\`\`\`
This is the most common way to perform this conversion in modern JavaScript.

### 📚 Key Concepts
- **Iterables**: The spread syntax works on any object that follows the iterable protocol.
`,

  // problem explanation--> 128
  "operator-precedence-assignment": `
### 💡 Problem Breakdown
This is a conceptual problem about operator precedence. Assignment operators (\`=\`, \`+=\`, etc.) have a very low precedence. This means that in an expression like \`x = 5 + 3\`, the right side of the assignment is almost always fully evaluated before the assignment itself takes place.

### ⚙️ Solution Walkthrough
The addition is performed before the assignment.
\`\`\`javascript
let x;
x = 5 + 3; // 5 + 3 is evaluated to 8 first. Then, 8 is assigned to x.
\`\`\`
### 📚 Key Concepts
- **Operator Precedence**: Understanding that assignment happens last is key to reading complex expressions.
`,

  // problem explanation--> 129
  "type-coercion-with-subtraction": `
### 💡 Problem Breakdown
This problem contrasts the behavior of the addition operator (\`+\`) with other arithmetic operators like subtraction (\`-\`). While \`+\` will perform string concatenation if either operand is a string, the \`-\`, \`*\`, and \`/\` operators will always attempt to convert both operands to numbers before performing the operation.

### ⚙️ Solution Walkthrough
Subtraction is performed on a numeric string.
\`\`\`javascript
"10" - 5; // The string "10" is coerced to the number 10. The result is 5.
\`\`\`
This makes the behavior of these operators more predictable for mathematical calculations.

### 📚 Key Concepts
- **Type Coercion**: Different operators follow different coercion rules.
`,

  // problem explanation--> 130
  "delete-non-configurable": `
### 💡 Problem Breakdown
Object properties have internal attributes, one of which is \`configurable\`. If a property's \`configurable\` attribute is \`false\`, it cannot be deleted. The \`delete\` operator will fail (returning \`false\` in non-strict mode, and throwing a \`TypeError\` in strict mode).

### ⚙️ Solution Walkthrough
The \`delete\` operator is used on a non-configurable property.
\`\`\`javascript
'use strict';
try {
  delete Object.prototype; // This property is non-configurable
} catch (e) {
  // A TypeError is thrown
}
\`\`\`
### 📚 Key Concepts
- **Property Descriptors**: The internal attributes (\`writable\`, \`enumerable\`, \`configurable\`) that define a property's behavior.
`,

  // problem explanation--> 131
  "typeof-function": `
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

  // problem explanation--> 132
  "typeof-array": `
### 💡 Problem Breakdown
This problem demonstrates a well-known quirk of the \`typeof\` operator. Because arrays are a type of object, \`typeof\` returns \`"object"\` for an array. It does not distinguish them from plain objects.

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

  // problem explanation--> 133
  "division-by-infinity": `
### 💡 Problem Breakdown
This problem explores calculations with the special numeric value \`Infinity\`. In JavaScript, dividing any finite number by \`Infinity\` results in \`0\`.

### ⚙️ Solution Walkthrough
A number is divided by \`Infinity\`.
\`\`\`javascript
100 / Infinity; // 0
\`\`\`
### 📚 Key Concepts
- **\`Infinity\`**: A global property representing the mathematical concept of infinity.
`,

  // problem explanation--> 134
  "remainder-of-zero": `
### 💡 Problem Breakdown
This problem checks the result of the remainder operator when the dividend (the first operand) is zero. The remainder of dividing zero by any non-zero number is always zero.

### ⚙️ Solution Walkthrough
The expression \`0 % 5\` is evaluated.
\`\`\`javascript
0 % 5; // 0
\`\`\`
### 📚 Key Concepts
- **Remainder Operator**: Follows standard mathematical rules for division of zero.
`,

  // problem explanation--> 135
  "remainder-by-zero": `
### 💡 Problem Breakdown
This problem shows another edge case for the remainder operator: division by zero. Just like the division operator \`/\`, the remainder operator \`%\` will result in \`NaN\` when the divisor (the second operand) is zero.

### ⚙️ Solution Walkthrough
The expression \`5 % 0\` is evaluated.
\`\`\`javascript
5 % 0; // NaN
\`\`\`
### 📚 Key Concepts
- **\`NaN\` (Not a Number)**: The result of an undefined or unrepresentable mathematical operation.
`,

  // problem explanation--> 136
  "prefix-vs-postfix-in-array": `
### 💡 Problem Breakdown
This problem combines array indexing with the prefix and postfix increment operators to show how the order of operations affects the result.

### ⚙️ Solution Walkthrough
- **Postfix \`i++\`**: The original value of \`i\` is used for the array index, and *then* \`i\` is incremented.
- **Prefix \`++i\`**: \`i\` is incremented *first*, and then the new value is used for the array index.
\`\`\`javascript
const arr = [10, 20, 30];
let i = 0;
const postfixVal = arr[i++]; // Accesses arr[0], then i becomes 1.
i = 0;
const prefixVal = arr[++i]; // i becomes 1, then accesses arr[1].
\`\`\`

### 📚 Key Concepts
- **Prefix/Postfix Operators**: The order of incrementing vs. returning the value is critical.
`,

  // problem explanation--> 137
  "string-comparison-case-sensitivity": `
### 💡 Problem Breakdown
This problem highlights that lexicographical string comparison is case-sensitive. In Unicode (and ASCII), all uppercase letters have character codes that are smaller than all lowercase letters.

### ⚙️ Solution Walkthrough
The comparison \`"a" > "A"\` is evaluated.
\`\`\`javascript
"a" > "A"; // true
"z" > "A"; // true
\`\`\`
Because 'a' has a higher character code than 'A', the expression is true. This is why sorting an array of strings like \`['Zebra', 'apple']\` will place "Zebra" first.

### 📚 Key Concepts
- **Character Codes**: The underlying numeric values that determine string comparison order.
`,

  // problem explanation--> 138
  "assignment-vs-equality-pitfall": `
### 💡 Problem Breakdown
This demonstrates a classic and very common coding bug. Using a single equals sign (\`=\`), which is the assignment operator, inside an \`if\` condition instead of an equality operator (\`===\`).

### ⚙️ Solution Walkthrough
The expression \`x = 0\` is an assignment. It assigns \`0\` to \`x\`, and the expression itself evaluates to the assigned value, \`0\`. Since \`0\` is a falsy value, the \`if\` block is not executed.
\`\`\`javascript
let x = 1;
if (x = 0) { // This assigns 0 to x and evaluates to 0 (falsy)
  // this block is skipped
}
// After the if statement, the value of x has been changed to 0.
\`\`\`
### 📚 Key Concepts
- **Assignment as an Expression**: The core reason this pattern can lead to bugs.
`,

  // problem explanation--> 139
  "logical-not-on-non-booleans": `
### 💡 Problem Breakdown
The logical NOT operator (\`!\`) can be used on any value, not just booleans. It first implicitly coerces the value to its boolean equivalent (based on whether it's truthy or falsy) and then inverts that boolean value.

### ⚙️ Solution Walkthrough
The operator is used on a truthy string and a falsy number.
\`\`\`javascript
!'hello'; // 'hello' is truthy -> true. !true -> false.
!0;       // 0 is falsy -> false. !false -> true.
\`\`\`

### 📚 Key Concepts
- **Type Coercion**: The \`!\` operator performs boolean coercion.
`,

  // problem explanation--> 140
  "bitwise-and-for-truncation": `
### 💡 Problem Breakdown
This is a conceptual problem about a bitwise trick. All bitwise operations in JavaScript are performed on 32-bit signed integers. When a larger number is used, it is first truncated to 32 bits. A bitwise AND with \`0xFFFFFFFF\` (all 32 bits set to 1) is a no-op for a 32-bit integer, but it forces this truncation on a larger number.

### ⚙️ Solution Walkthrough
The operation forces a 33-bit number to be truncated.
\`\`\`javascript
4294967297 & 0xFFFFFFFF; // 1
// 4294967297 in binary is 100000000000000000000000000000001 (33 bits)
// The operation effectively discards the highest bit.
\`\`\`

### 📚 Key Concepts
- **32-bit Integers**: The underlying representation for bitwise operations.
`,

  // problem explanation--> 141
  "conditional-operator-associativity": `
### 💡 Problem Breakdown
This is a conceptual problem about operator associativity. The conditional (ternary) operator (\`? :\`) is **right-associative**. This means a nested expression like \`a ? b : c ? d : e\` is grouped from the right.

### ⚙️ Solution Walkthrough
The expression is parsed as if it had parentheses on the right.
\`\`\`javascript
// a ? b : c ? d : e
// is equivalent to:
// a ? b : (c ? d : e)

false ? 'b' : (true ? 'd' : 'e'); // evaluates to 'd'
\`\`\`
This makes nesting more predictable, though often still hard to read.

### 📚 Key Concepts
- **Right-Associativity**: The grouping order for the ternary operator.
`,

  // problem explanation--> 142
  "delete-and-strict-mode": `
### 💡 Problem Breakdown
This problem shows a difference in behavior for the \`delete\` operator in strict mode. In non-strict mode, attempting to delete something that cannot be deleted (like a variable) will fail silently and return \`false\`. In **strict mode**, this same operation will throw a \`SyntaxError\` or \`TypeError\`.

### ⚙️ Solution Walkthrough
A conceptual example in strict mode.
\`\`\`javascript
'use strict';
let x = 1;
// delete x; // This line would throw a SyntaxError.
\`\`\`

### 📚 Key Concepts
- **Strict Mode**: Catches common errors and unsafe actions by throwing errors instead of failing silently.
`,

  // problem explanation--> 143
  "spread-with-iterables": `
### 💡 Problem Breakdown
This problem demonstrates the versatility of the spread syntax (\`...\`). It can be used on **any iterable object**, not just arrays. This includes \`Set\`, \`Map\`, \`String\`, and others.

### ⚙️ Solution Walkthrough
A \`Set\` is spread into an array literal.
\`\`\`javascript
const mySet = new Set(['a', 'b']);
const arr = [...mySet]; // ['a', 'b']
\`\`\`
This works because the spread syntax uses the object's iterator to get its values.

### 📚 Key Concepts
- **Iterable Protocol**: A set of rules that objects can implement to define their iteration behavior.
`,

  // problem explanation--> 144
  "logical-and-assignment-pitfall": `
### 💡 Problem Breakdown
This problem highlights a potential pitfall of the logical AND assignment operator (\`&&=\`). Because it only assigns when the left-hand side is truthy, it will not perform an assignment if the variable is a "falsy" value that you might want to update, such as \`0\` or an empty string \`""\`.

### ⚙️ Solution Walkthrough
The operator is used on a variable with the value \`0\`.
\`\`\`javascript
let x = 0;
x &&= 10;
// 'x' is still 0, because 0 is falsy.
\`\`\`

### 📚 Key Concepts
- **Truthiness**: Understanding which values are truthy and falsy is crucial for using logical assignment operators correctly.
`,

  // problem explanation--> 145
  "bitwise-integer-check": `
### 💡 Problem Breakdown
This problem shows a bitwise trick. Since bitwise operators only work on 32-bit integers, any non-integer part of a number is truncated. The XOR operator has the property that \`x ^ 0 = x\`. Therefore, \`n ^ 0 === n\` will only be true if \`n\` is an integer.

### ⚙️ Solution Walkthrough
The trick is used on an integer and a float.
\`\`\`javascript
(12 ^ 0) === 12;      // true
(12.5 ^ 0) === 12.5; // false, because (12.5 ^ 0) is 12.
\`\`\`
This is a clever but often cryptic way to check if a number is an integer.

### 📚 Key Concepts
- **Bitwise Operations**: Truncate decimal parts of numbers.
`,

  // problem explanation--> 146
  "optional-chaining-and-assignment": `
### 💡 Problem Breakdown
This is a conceptual problem demonstrating a syntactic rule. The optional chaining operator (\`?.\`) is used for reading properties and cannot appear on the left-hand side of an assignment operation.

### ⚙️ Solution Walkthrough
The invalid syntax is shown.
\`\`\`javascript
const obj = {};
// obj?.prop = 10; // This is a SyntaxError.
\`\`\`
The language designers made this decision to avoid ambiguity. The correct way to perform this conditional assignment would be: \`if (obj) { obj.prop = 10; }\`.

### 📚 Key Concepts
- **L-value**: The left-hand side of an assignment must be a reference to a memory location (a "left-value"). The result of an optional chain is a value, not a reference.
`,

  // problem explanation--> 147
  "typeof-undeclared-variable": `
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

  // problem explanation--> 148
  "spread-clone-and-mutate": `
### 💡 Problem Breakdown
This problem reinforces that the spread syntax for objects (\`...\`) creates a **sh shallow copy**. It copies the top-level properties. If one of those properties is an object or array, the *reference* to that nested object is copied, not the object itself.

### ⚙️ Solution Walkthrough
A nested object is mutated in the copy, affecting the original.
\`\`\`javascript
const original = { a: 1, nested: { b: 2 } };
const copy = { ...original };

copy.nested.b = 99;
// original.nested.b is now also 99!
\`\`\`
Both \`original.nested\` and \`copy.nested\` point to the same object in memory.

### 📚 Key Concepts
- **Shallow Copy vs. Deep Copy**: A fundamental distinction when working with nested data structures.
`,

  // problem explanation--> 149
  "numeric-separator": `
### 💡 Problem Breakdown
ES2021 introduced numeric separators, which allow you to use an underscore (\`_\`) as a separator within number literals to improve readability. The JavaScript engine simply ignores the underscores.

### ⚙️ Solution Walkthrough
A large number is written with separators.
\`\`\`javascript
const readableNumber = 1_000_000;
const normalNumber = 1000000;

readableNumber === normalNumber; // true
\`\`\`
This is purely a syntactic sugar for developers and has no effect on the value.

### 📚 Key Concepts
- **Numeric Separator**: An ES2021 feature for code readability.
`,

  // problem explanation--> 150
  "expression-vs-statement": `
### 💡 Problem Breakdown
This is a fundamental conceptual problem in programming languages.
- An **Expression** is any piece of code that evaluates to (produces) a single value. Examples: \`5 + 3\`, \`myVar\`, \`myFunc()\`.
- A **Statement** is an instruction that performs an action. Examples: \`let x = 8;\`, \`if (true) { ... }\`, \`return;\`.

Some constructs can be both. For example, \`x = 8\` is an assignment *expression* that evaluates to 8, but the entire line \`let x = 8;\` is a declaration *statement*.

### 📚 Key Concepts
- **Expression**: Evaluates to a value.
- **Statement**: Performs an action.
`,

  // problem explanation--> 151
  "comma-operator-return-value": `
### 💡 Problem Breakdown
This problem reinforces the behavior of the comma operator. It evaluates a sequence of expressions and the value of the entire comma-separated expression is the value of the very last expression.

### ⚙️ Solution Walkthrough
The expression \`(1+2, 3+4)\` is evaluated.
\`\`\`javascript
// 1+2 is evaluated to 3, but the result is discarded.
// 3+4 is evaluated to 7.
// The entire expression returns 7.
const result = (1+2, 3+4); // result is 7
\`\`\`
### 📚 Key Concepts
- **Comma Operator**: A tool for sequencing expressions, where only the final result matters.
`,

  // problem explanation--> 152
  "new-target-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about an ES6 meta-property. \`new.target\` is available inside any function.
- If the function is called with the \`new\` keyword (as a constructor), \`new.target\` will be a reference to the constructor function itself.
- If the function is called normally (not as a constructor), \`new.target\` will be \`undefined\`.

### ⚙️ Solution Walkthrough
A conceptual function checks how it was called.
\`\`\`javascript
function MyConstructor() {
  if (new.target) {
    console.log("Called with 'new'");
  } else {
    console.log("Called as a regular function");
  }
}
new MyConstructor(); // Logs "Called with 'new'"
MyConstructor();     // Logs "Called as a regular function"
\`\`\`

### 📚 Key Concepts
- **\`new.target\`**: A meta-property for introspecting how a function was invoked.
`,

  // problem explanation--> 153
  "prefix-increment-in-expression": `
### 💡 Problem Breakdown
This problem demonstrates how the prefix increment operator (\`++x\`) behaves within a larger expression. The variable is incremented *before* its value is used in the surrounding expression.

### ⚙️ Solution Walkthrough
The expression \`5 + ++x\` is evaluated.
\`\`\`javascript
let x = 1;
// 1. ++x is evaluated. x becomes 2, and the expression returns 2.
// 2. The main expression becomes 5 + 2.
const result = 5 + ++x; // result is 7
// x is now 2.
\`\`\`
### 📚 Key Concepts
- **Prefix Increment**: Increments first, then returns the new value.
`,

  // problem explanation--> 154
  "postfix-increment-in-expression": `
### 💡 Problem Breakdown
This problem demonstrates how the postfix increment operator (\`x++\`) behaves within a larger expression. The variable's *original* value is used in the surrounding expression, and the increment happens *after* the expression has been evaluated.

### ⚙️ Solution Walkthrough
The expression \`5 + x++\` is evaluated.
\`\`\`javascript
let x = 1;
// 1. x++ is evaluated. The expression returns the original value, 1.
// 2. The main expression becomes 5 + 1.
// 3. After the main expression is evaluated, x is incremented to 2.
const result = 5 + x++; // result is 6
// x is now 2.
\`\`\`
### 📚 Key Concepts
- **Postfix Increment**: Returns the original value, then increments.
`,

  // problem explanation--> 155
  "type-coercion-in-loose-equality": `
### 💡 Problem Breakdown
This problem shows an infamous example of JavaScript's complex type coercion rules for loose equality (\`==\`). The expression \`[] == ![]\` evaluates to \`true\`, which is highly unintuitive.

### ⚙️ Solution Walkthrough
The expression is evaluated step-by-step:
1. \`![]\` (NOT operator on an array): An array is a truthy value. \`!true\` is \`false\`. The expression becomes \`[] == false\`.
2. \`[] == false\`: The loose equality algorithm sees an object and a boolean. It converts the boolean to a number (\`false\` -> \`0\`). The expression becomes \`[] == 0\`.
3. \`[] == 0\`: The algorithm now sees an object and a number. It tries to convert the object to a primitive. \`[].toString()\` results in \`""\` (empty string). The expression becomes \`"" == 0\`.
4. \`"" == 0\`: The algorithm sees a string and a number. It converts the string to a number (\`""\` -> \`0\`). The expression becomes \`0 == 0\`.
5. \`0 == 0\` is \`true\`.

### 📚 Key Concepts
- **Loose Equality (\`==\`)**: Has complex and often surprising coercion rules. This is a primary reason to always use strict equality (\`===\`).
`,

  // problem explanation--> 156
  "bitwise-or-for-rounding": `
### 💡 Problem Breakdown
This problem demonstrates a bitwise trick for fast truncation. A bitwise OR with 0 (\`n | 0\`) forces the number to be converted to a 32-bit integer, which effectively truncates any decimal part. It's similar to \`~~n\`.

### ⚙️ Solution Walkthrough
The operator is applied to a decimal number.
\`\`\`javascript
15.75 | 0; // 15
-15.75 | 0; // -15
\`\`\`
This is a fast but less readable alternative to \`Math.trunc()\` or \`Math.floor()\` for positive numbers.

### 📚 Key Concepts
- **Bitwise Operations**: Can be used for fast, low-level mathematical operations.
`,

  // problem explanation--> 157
  "optional-chaining-with-function-call": `
### 💡 Problem Breakdown
This shows another use case for optional chaining. The \`?.()\` syntax allows you to safely *call* a function that might not exist on an object. If the property exists and is a function, it gets called. If it doesn't exist or is not a function, the expression short-circuits and returns \`undefined\`.

### ⚙️ Solution Walkthrough
An attempt is made to call an existing and a non-existing method.
\`\`\`javascript
const obj = {
  run: () => "Ran!"
};

obj.run?.();   // "Ran!"
obj.stop?.();  // undefined
\`\`\`
### 📚 Key Concepts
- **Optional Chaining**: A versatile operator that works for property access, method calls, and array indexing.
`,

  // problem explanation--> 158
  "delete-return-value": `
### 💡 Problem Breakdown
The \`delete\` operator returns a boolean value indicating whether the operation was successful. It returns \`true\` if it successfully deleted a property, and also \`true\` if the property didn't exist in the first place. It returns \`false\` only if it fails to delete a non-configurable property in non-strict mode.

### ⚙️ Solution Walkthrough
The return value of \`delete\` is checked.
\`\`\`javascript
const obj = { a: 1 };
delete obj.a;    // returns true
delete obj.b;    // returns true (property doesn't exist)
\`\`\`
### 📚 Key Concepts
- **\`delete\` Operator**: Returns a boolean indicating success.
`,

  // problem explanation--> 159
  "instanceof-with-primitives": `
### 💡 Problem Breakdown
The \`instanceof\` operator checks the prototype chain of an **object**. Primitive values (string, number, boolean, null, undefined, symbol, bigint) are not objects, so \`instanceof\` will always return \`false\` for them.

### ⚙️ Solution Walkthrough
The operator is used on a string primitive and a String wrapper object.
\`\`\`javascript
"hello" instanceof String;           // false
new String("hello") instanceof String; // true
\`\`\`
### 📚 Key Concepts
- **Primitives vs. Objects**: A fundamental distinction in JavaScript. \`instanceof\` only works on objects.
`,

  // problem explanation--> 160
  "spread-from-string": `
### 💡 Problem Breakdown
Since strings are iterable, the spread syntax (\`...\`) can be used to expand a string's characters. This is a very common and concise way to create an array of characters from a string.

### ⚙️ Solution Walkthrough
A string is spread inside an array literal.
\`\`\`javascript
const arr = [..."abc"]; // ['a', 'b', 'c']
\`\`\`
This is often preferred over \`str.split('')\` for its readability.

### 📚 Key Concepts
- **Iterables**: The spread syntax can be used on any iterable.
`,

  // problem explanation--> 161
  "nullish-coalescing-precedence": `
### 💡 Problem Breakdown
This is a conceptual problem about a specific rule for the nullish coalescing operator (\`??\`). To avoid bugs, JavaScript does not allow you to directly combine \`??\` with the logical AND (\`&&\`) or OR (\`||\`) operators without explicitly specifying the order with parentheses.

### ⚙️ Solution Walkthrough
An attempt to combine the operators without parentheses.
\`\`\`javascript
// null || undefined ?? 'default'; // This is a SyntaxError.
// Must be explicit:
(null || undefined) ?? 'default'; // returns 'default'
null || (undefined ?? 'default'); // returns 'default'
\`\`\`
### 📚 Key Concepts
- **Operator Precedence**: A language rule to prevent ambiguous expressions.
`,

  // problem explanation--> 162
  "bitwise-extracting-rgba-parts": `
### 💡 Problem Breakdown
This shows a practical application of bitwise operators. A 32-bit RGBA color is often stored as a single integer. Bitwise shifting and masking can be used to extract these individual channel values.

### ⚙️ Solution Walkthrough
The channels of \`#FF0000FF\` (opaque red) are extracted.
\`\`\`javascript
const color = 0xFF0000FF;

const red   = (color >> 24) & 0xFF; // 255
const green = (color >> 16) & 0xFF; // 0
const blue  = (color >> 8)  & 0xFF; // 0
const alpha = color & 0xFF;         // 255
\`\`\`
1. **Shifting**: The \`>>\` operator moves the desired 8-bit channel to the far right.
2. **Masking**: The \`& 0xFF\` operation isolates just those 8 bits.

### 📚 Key Concepts
- **Bit Masking**: A common technique in graphics programming.
`,

  // problem explanation--> 163
  "in-operator-on-arrays": `
### 💡 Problem Breakdown
This problem highlights a common point of confusion. When used on an array, the \`in\` operator checks for the existence of an **index** (which is a property key), not for the existence of a **value**.

### ⚙️ Solution Walkthrough
The \`in\` operator is used to check for an index and a value.
\`\`\`javascript
const arr = ['a', 'b'];
'1' in arr; // true (because the index '1' exists)
'b' in arr; // false (it's a value, not an index)
\`\`\`
To check for the presence of a value, you should use \`arr.includes('b')\`.

### 📚 Key Concepts
- **Arrays as Objects**: Arrays are objects where the indices are property keys.
`,

  // problem explanation--> 164
  "exponentiation-with-decimals": `
### 💡 Problem Breakdown
The exponentiation operator (\`**\`) is not limited to integers. It works with floating-point numbers as well, following standard mathematical rules. For example, an exponent of \`0.5\` is equivalent to taking the square root.

### ⚙️ Solution Walkthrough
A number is raised to the power of 0.5.
\`\`\`javascript
4 ** 0.5; // 2 (the square root of 4)
\`\`\`
### 📚 Key Concepts
- **Exponentiation Operator**: A versatile arithmetic operator that works with non-integers.
`,

  // problem explanation--> 165
  "assignment-in-return-statement": `
### 💡 Problem Breakdown
Since assignment is an expression that evaluates to the assigned value, it can be used within a \`return\` statement. The function will perform the assignment and then return the assigned value.

### ⚙️ Solution Walkthrough
A function assigns a value to an external variable and returns it.
\`\`\`javascript
let x = 0;
function test() {
  return (x = 5);
}
const result = test(); // result is 5, and x is now 5
\`\`\`
While syntactically valid, this pattern can sometimes make code less clear, as the function has a side effect.

### 📚 Key Concepts
- **Assignment as an Expression**: A core concept that enables this pattern.
`,

  // problem explanation--> 166
  "infinity-comparisons": `
### 💡 Problem Breakdown
The special numeric value \`Infinity\` behaves as expected in comparisons. It is greater than any finite number and is equal to itself.

### ⚙️ Solution Walkthrough
Comparisons with \`Infinity\` are shown.
\`\`\`javascript
100 < Infinity;       // true
Infinity > Infinity;  // false
Infinity === Infinity; // true
\`\`\`
### 📚 Key Concepts
- **\`Infinity\`**: A numeric value that behaves predictably in comparisons.
`,

  // problem explanation--> 167
  "logical-operators-with-objects": `
### 💡 Problem Breakdown
This problem demonstrates how logical operators work with non-boolean values, specifically objects. In JavaScript, all objects (including empty objects and arrays) are **truthy**.

### ⚙️ Solution Walkthrough
Logical operators are used with object literals.
\`\`\`javascript
const a = { val: 1 };
const b = { val: 2 };
const nullValue = null;

(a && b); // returns b, because 'a' is truthy
(nullValue || b); // returns b, because null is falsy
\`\`\`
### 📚 Key Concepts
- **Truthy Values**: All objects are truthy.
- **Short-Circuit Evaluation**: The operators return the value of one of their operands.
`,

  // problem explanation--> 168
  "bitwise-xor-for-encryption": `
### 💡 Problem Breakdown
This shows a simplified conceptual use of the bitwise XOR operator. XOR has the property that \`(A ^ K) ^ K = A\`. This means if you XOR a message with a key to "encrypt" it, you can XOR the encrypted result with the same key to get the original message back.

### ⚙️ Solution Walkthrough
A number is encrypted and then decrypted with a key.
\`\`\`javascript
const message = 12345;
const key = 54321;

const encrypted = message ^ key;
const decrypted = encrypted ^ key; // This will be 12345
\`\`\`
This is a simple symmetric encryption scheme.

### 📚 Key Concepts
- **XOR Properties**: The reversible nature of XOR makes it useful in cryptography and data manipulation.
`,

  // problem explanation--> 169
  "ternary-vs-if-else": `
### 💡 Problem Breakdown
This is a conceptual problem about a key difference between the ternary operator and an \`if/else\` block.
- **Ternary Operator (\`? :\`)**: Is an **expression**, which means it evaluates to a value.
- **\`if/else\`**: Is a **statement**, which means it performs an action but does not evaluate to a value itself.

### ⚙️ Solution Walkthrough
This difference determines where they can be used.
\`\`\`javascript
// GOOD: Ternary can be used in an assignment because it's an expression.
const message = age >= 18 ? 'Adult' : 'Minor';

// BAD: if/else is a statement and cannot be used in an assignment.
// const message = if (age >= 18) { 'Adult' } else { 'Minor' }; // SyntaxError
\`\`\`
### 📚 Key Concepts
- **Expression vs. Statement**: A fundamental distinction in the structure of programming languages.
`,

  // problem explanation--> 170
  "typeof-symbol": `
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
- **\`typeof\` Operator**: Returns a string indicating the type.
`,

  // problem explanation--> 171
  "spread-to-remove-duplicates": `
### 💡 Problem Breakdown
This shows a very common and idiomatic way to remove duplicate values from an array in modern JavaScript. It combines the \`Set\` data structure (which only stores unique values) with the spread syntax.

### ⚙️ Solution Walkthrough
The pattern is applied to an array with duplicates.
\`\`\`javascript
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)]; // [1, 2, 3]
\`\`\`
1. \`new Set(arr)\`: Creates a \`Set\` object from the array, automatically discarding the duplicate \`2\`. The result is \`{1, 2, 3}\`.
2. \`[... ]\`: The spread syntax converts the \`Set\` back into an array.

### 📚 Key Concepts
- **\`Set\`**: The ideal data structure for handling uniqueness.
- **Spread Syntax**: A concise way to convert iterables (like a \`Set\`) into an array.
`,

  // problem explanation--> 172
  "optional-chaining-pitfall": `
### 💡 Problem Breakdown
This problem highlights an important rule for the optional chaining operator (\`?.\`). It only "short-circuits" for \`null\` or \`undefined\`. It does **not** stop for other "falsy" values like \`0\`, \`""\`, or \`false\`.

### ⚙️ Solution Walkthrough
An attempt to access a property on the number \`0\`.
\`\`\`javascript
const data = { count: 0 };

// This will throw a TypeError: Cannot read properties of undefined (reading 'toString')
// const result = data.missing?.toString(); // this part is fine, result is undefined

// This will throw a TypeError: Cannot read properties of number (reading 'toString')
// because 0 is not nullish, the chain continues
// const result = data.count?.toString(); // Fails!
\`\`\`
The expression \`data.count?.toString()\` fails because \`data.count\` is \`0\`, which is not \`null\` or \`undefined\`, so the chain continues and tries to access \`.toString\` on the number primitive \`0\`, which is not an error itself, but the example in the solver is flawed. Let's correct the concept.
A better example is: \`data.missing?.length\` is \`undefined\`, but \`data.count?.length\` would be \`undefined\` as well, because \`0\` has no length property. The point is \`?.\` doesn't stop for \`0\`.

### 📚 Key Concepts
- **Nullishness**: \`?.\` is based on nullishness, not truthiness.
`,

  // problem explanation--> 173
  "unary-plus-with-null": `
### 💡 Problem Breakdown
This problem explores the type coercion behavior of the unary plus operator (\`+\`) on the \`null\` value.

### ⚙️ Solution Walkthrough
The operator is applied to \`null\`.
\`\`\`javascript
+null; // 0
\`\`\`
The specification for numeric conversion defines that \`null\` becomes \`0\`.

### 📚 Key Concepts
- **Type Coercion**: Specific rules apply to how different primitives are converted to numbers.
`,

  // problem explanation--> 174
  "assignment-in-loop-condition": `
### 💡 Problem Breakdown
This problem demonstrates a pattern where an assignment expression is used as the condition for a \`while\` loop.

### ⚙️ Solution Walkthrough
The \`arr.shift()\` method is used, which removes and returns the first element, or \`undefined\` if the array is empty.
\`\`\`javascript
const arr = [3, 2, 1];
let head;
while ((head = arr.shift()) !== undefined) {
  // ...
}
\`\`\`
### 📚 Key Concepts
- **Assignment as an Expression**: The core concept that allows this pattern to work.
`,
  // problem explanation--> 175
  "plus-plus-with-string-coercion": `
### 💡 Problem Breakdown
This problem shows that the increment operator (\`++\`) will attempt to coerce its operand to a number if it is not one already.

### ⚙️ Solution Walkthrough
The increment operator is used on a numeric string.
\`\`\`javascript
let x = "5";
x++;
// x is now the number 6
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: An implicit conversion performed by certain operators.
`,

  // problem explanation--> 176
  "instanceof-with-null-and-undefined": `
### 💡 Problem Breakdown
This problem confirms the behavior of the \`instanceof\` operator with \`null\` and \`undefined\`.

### ⚙️ Solution Walkthrough
The operator is used on \`null\` and \`undefined\`.
\`\`\`javascript
null instanceof Object;      // false
undefined instanceof Object; // false
\`\`\`
### 📚 Key Concepts
- **\`instanceof\` Operator**: Only works with objects on the left-hand side.
`,

  // problem explanation--> 177
  "spread-in-function-call-vs-apply": `
### 💡 Problem Breakdown
This is a conceptual problem comparing the modern spread syntax with the older \`.apply()\` method.

### ⚙️ Solution Walkthrough
- **Old way**: \`Math.max.apply(null, [1, 2, 3])\`
- **Modern way**: \`Math.max(...[1, 2, 3])\`
\`\`\`javascript
Math.max(...[1, 2, 3]); // 3
\`\`\`
### 📚 Key Concepts
- **Spread Syntax**: A versatile feature that replaced many of the use cases for \`.apply()\`.
`,

  // problem explanation--> 178
  "comma-operator-in-arrow-function": `
### 💡 Problem Breakdown
This problem demonstrates how the comma operator can be used within a concise arrow function.

### ⚙️ Solution Walkthrough
An arrow function increments a variable and then returns its new value.
\`\`\`javascript
let x = 0;
const fn = () => (x++, x);
fn(); // returns 1
\`\`\`
### 📚 Key Concepts
- **Comma Operator**: Sequences expressions and returns the last one.
- **Implicit Return**: A feature of concise arrow functions.
`,

  // problem explanation--> 179
  "delete-on-variable": `
### 💡 Problem Breakdown
This problem shows that the \`delete\` operator is only for deleting properties from objects.

### ⚙️ Solution Walkthrough
An attempt is made to delete a variable.
\`\`\`javascript
let x = 1;
// delete x; // This would fail
\`\`\`
### 📚 Key Concepts
- **\`delete\` Operator**: Only works on object properties.
`,

  // problem explanation--> 180
  "optional-chaining-with-destructuring": `
### 💡 Problem Breakdown
This shows a useful pattern for safely destructuring a nested object that might be missing.

### ⚙️ Solution Walkthrough
A potentially null object is safely destructured.
\`\`\`javascript
const user = { data: null };
const { name = 'Guest' } = user.data?.profile ?? {};
// name is 'Guest'
\`\`\`
### 📚 Key Concepts
- **Composability**: Combining modern operators for robust data handling.
`,

  // problem explanation--> 181
  "operator-precedence-with-bitwise": `
### 💡 Problem Breakdown
This problem explores where bitwise operators fit in the precedence hierarchy.

### ⚙️ Solution Walkthrough
The expression \`5 + 3 & 7\` is evaluated.
\`\`\`javascript
5 + 3 & 7; // 0
// Evaluated as (5 + 3) & 7 = 8 & 7 = 0
\`\`\`
### 📚 Key Concepts
- **Operator Precedence**: A full set of rules for evaluation order.
`,

  // problem explanation--> 182
  "logical-assignment-with-methods": `
### 💡 Problem Breakdown
This problem shows a practical use for logical assignment operators: lazy initialization.

### ⚙️ Solution Walkthrough
The \`??=\` operator is used to lazily calculate a value.
\`\`\`javascript
const obj = {
  _value: null,
  getValue() {
    this._value ??= "Calculated!";
    return this._value;
  }
};
\`\`\`
### 📚 Key Concepts
- **Lazy Initialization**: A performance pattern where you defer an expensive computation until it's actually needed.
`,

  // problem explanation--> 183
  "spread-arguments-object": `
### 💡 Problem Breakdown
This shows the modern way to convert the old, array-like \`arguments\` object into a true array.

### ⚙️ Solution Walkthrough
The spread syntax is used inside a traditional function.
\`\`\`javascript
function getArgsAsArray() {
  return [...arguments];
}
\`\`\`
### 📚 Key Concepts
- **Spread Syntax**: Can convert any iterable or array-like object into an array.
`,

  // problem explanation--> 184
  "string-addition-vs-subtraction-coercion": `
### 💡 Problem Breakdown
This problem provides a direct comparison to highlight the different coercion rules of the \`+\` operator versus other arithmetic operators.

### ⚙️ Solution Walkthrough
The two expressions are evaluated.
\`\`\`javascript
"5" + 5; // "55" (concatenation)
"5" - 5; // 0 (numeric subtraction)
\`\`\`
### 📚 Key Concepts
- **Operator Overloading**: The \`+\` operator has dual meaning, which is the root of this difference.
`,

  // problem explanation--> 185
  "infinity-is-not-finite": `
### 💡 Problem Breakdown
This problem introduces the global \`isFinite()\` function.

### ⚙️ Solution Walkthrough
The function is called on \`Infinity\`.
\`\`\`javascript
isFinite(Infinity); // false
isFinite(123);      // true
\`\`\`
### 📚 Key Concepts
- **\`isFinite()\`**: A global utility function for checking if a value is a regular, finite number.
`,

  // problem explanation--> 186
  "bitwise-xor-to-find-missing": `
### 💡 Problem Breakdown
This is another clever XOR trick for finding a missing number in a sequence.

### ⚙️ Solution Walkthrough
The logic is applied to an array missing the number 3.
\`\`\`javascript
const arr = [1, 2, 4, 5];
let xor1 = 0;
for(let i = 1; i <= 5; i++) xor1 ^= i;
let xor2 = arr.reduce((acc, n) => acc ^ n, 0);
const missing = xor1 ^ xor2; // 3
\`\`\`
### 📚 Key Concepts
- **XOR Properties**: Leveraging bitwise properties for efficient problem-solving.
`,

  // problem explanation--> 187
  "optional-chaining-and-short-circuiting": `
### 💡 Problem Breakdown
This problem demonstrates that the optional chaining operator (\`?.\`) also exhibits short-circuiting behavior.

### ⚙️ Solution Walkthrough
A function call is placed on the right-hand side of an optional chain.
\`\`\`javascript
let counter = 0;
const func = () => counter++;
const obj = null;
obj?.[func()]; // func() is never called
\`\`\`
### 📚 Key Concepts
- **Short-Circuit Evaluation**: A key feature of the optional chaining operator.
`,

  // problem explanation--> 188
  "void-operator-and-iife": `
### 💡 Problem Breakdown
This is a conceptual problem about a historical JavaScript pattern using \`void\` with IIFEs.

### ⚙️ Solution Walkthrough
The \`void\` operator forces the \`function\` keyword to be parsed as part of an expression.
\`\`\`javascript
void function() {
  console.log("This IIFE ran!");
}();
\`\`\`
### 📚 Key Concepts
- **Expression vs. Statement**: The core parsing rule that necessitated this pattern.
`,

  // problem explanation--> 189
  "instanceof-with-symbol-hasinstance": `
### 💡 Problem Breakdown
This is an advanced conceptual problem about customizing the behavior of the \`instanceof\` operator.

### ⚙️ Solution Walkthrough
A class customizes the \`instanceof\` check.
\`\`\`javascript
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
[] instanceof MyArray; // true
\`\`\`
### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into and customizing internal language behaviors.
`,

  // problem explanation--> 190
  "plus-and-bigint-error": `
### 💡 Problem Breakdown
This problem demonstrates a strict rule for the \`BigInt\` numeric type.

### ⚙️ Solution Walkthrough
The code attempts to add a \`BigInt\` and a \`Number\`.
\`\`\`javascript
// 1n + 2; // Throws a TypeError.
\`\`\`
### 📚 Key Concepts
- **\`BigInt\`**: A separate numeric type that requires explicit conversions when mixing with \`Number\`.
`,

  // problem explanation--> 191
  "nullish-coalescing-and-assignment": `
### 💡 Problem Breakdown
This problem shows a common use case for the nullish coalescing operator (\`??\`) in assignments.

### ⚙️ Solution Walkthrough
A default value is assigned from a potentially null property.
\`\`\`javascript
const settings = { timeout: null };
const timeout = settings.timeout ?? 5000; // timeout is 5000
\`\`\`
### 📚 Key Concepts
- **Nullish Coalescing Operator (\`??\`)**: A modern tool for providing default values.
`,

  // problem explanation--> 192
  "bitwise-sign-flipping": `
### 💡 Problem Breakdown
This problem shows a bitwise trick for flipping the sign of a 32-bit signed integer.

### ⚙️ Solution Walkthrough
The sign of 10 is flipped.
\`\`\`javascript
let n = 10;
const flipped = ~n + 1; // -10
\`\`\`
### 📚 Key Concepts
- **Two's Complement**: The underlying binary representation that makes this trick work.
`,

  // problem explanation--> 193
  "ternary-operator-as-l-value": `
### 💡 Problem Breakdown
This is a conceptual problem about a syntactic rule for the ternary operator.

### ⚙️ Solution Walkthrough
The invalid syntax is shown.
\`\`\`javascript
let a, b;
// (true ? a : b) = 5; // This is a SyntaxError.
\`\`\`
### 📚 Key Concepts
- **L-value vs. R-value**: A distinction in language grammar between expressions that represent memory locations and those that represent values.
`,

  // problem explanation--> 194
  "typeof-and-tdz": `
### 💡 Problem Breakdown
This problem reinforces a strict rule of the Temporal Dead Zone (TDZ) for \`let\` and \`const\`.

### ⚙️ Solution Walkthrough
A conceptual example of the error.
\`\`\`javascript
// typeof x; // Throws ReferenceError: Cannot access 'x' before initialization
let x = 5;
\`\`\`
### 📚 Key Concepts
- **Temporal Dead Zone (TDZ)**: A strict rule to prevent using variables before they are initialized.
`,

  // problem explanation--> 195
  "spread-with-getters": `
### 💡 Problem Breakdown
This problem shows that the spread syntax (\`...\`) for objects involves accessing properties.

### ⚙️ Solution Walkthrough
A getter method is triggered by the spread syntax.
\`\`\`javascript
let getterCalled = false;
const obj = {
  get a() {
    getterCalled = true;
    return 1;
  }
};
const copy = { ...obj }; // The getter for 'a' is called
\`\`\`
### 📚 Key Concepts
- **Getters**: Special methods that are executed when a property is accessed.
- **Spread Syntax**: An operation that involves property access.
`,

  // problem explanation--> 196
  "logical-and-with-side-effects": `
### 💡 Problem Breakdown
This problem demonstrates how the short-circuiting behavior of the logical AND operator (\`&&\`) can be used to conditionally execute a function.

### ⚙️ Solution Walkthrough
A function with a side effect (logging) is called conditionally.
\`\`\`javascript
const shouldLog = true;
const logMessage = () => console.log('Message logged!');
shouldLog && logMessage(); // The function is called
\`\`\`
### 📚 Key Concepts
- **Short-Circuit Evaluation**: Used here for conditional execution.
`,

  // problem explanation--> 197
  "bitwise-right-shift-and-negative-numbers": `
### 💡 Problem Breakdown
This problem focuses on the sign-propagating right shift operator (\`>>\`) with negative numbers.

### ⚙️ Solution Walkthrough
A negative number is shifted right.
\`\`\`javascript
-10 >> 1; // -5
\`\`\`
### 📚 Key Concepts
- **Sign Propagation**: The key behavior of the \`>>\` operator.
`,

  // problem explanation--> 198
  "typeof-operator-precedence": `
### 💡 Problem Breakdown
This problem explores operator precedence of the \`typeof\` operator.

### ⚙️ Solution Walkthrough
The expression \`typeof 1 + 2\` is evaluated.
\`\`\`javascript
typeof 1 + 2; // "number2"
\`\`\`
### 📚 Key Concepts
- **Operator Precedence**: \`typeof\` is evaluated before \`+\`.
`,

  // problem explanation--> 199
  "optional-chaining-and-nullish-coalescing-precedence": `
### 💡 Problem Breakdown
This is a conceptual problem about a specific language rule for combining operators.

### ⚙️ Solution Walkthrough
The invalid and valid syntax are shown.
\`\`\`javascript
// obj?.prop ?? 'default'; // This is a SyntaxError.
// (obj?.prop) ?? 'default'; // This is valid.
\`\`\`
### 📚 Key Concepts
- **Operator Precedence**: A language rule designed to force developers to be explicit about their intent.
`,

  // problem explanation--> 200
  "complex-expression-evaluation-order": `
### 💡 Problem Breakdown
This problem tests a comprehensive understanding of operator precedence and associativity for a complex expression.

### ⚙️ Solution Walkthrough
The expression is evaluated step by step.
\`\`\`javascript
1 + 2 ** 3 * 4 / 2 || 0; // 17
// 1. 2 ** 3 = 8
// 2. 8 * 4 = 32
// 3. 32 / 2 = 16
// 4. 1 + 16 = 17
// 5. 17 || 0 = 17
\`\`\`
### 📚 Key Concepts
- **Operator Precedence**: The strict set of rules governing evaluation order.
- **Associativity**: The rule that determines the order for operators of the same precedence.
`,
};
