export const explanations: Record<string, string> = {
  // problem explanation--> 01
  "declare-with-var": `
### 💡 Problem Breakdown
This problem covers the original way to declare variables in JavaScript using the \`var\` keyword. Variables declared with \`var\` are function-scoped or globally-scoped.

### ⚙️ Solution Walkthrough
A variable named \`myVar\` is declared and assigned a value.
\`\`\`javascript
var myVar = 'Hello';
return \`Declared myVar with value: "\${myVar}"\`;
\`\`\`
While still functional, \`var\` has been largely superseded by \`let\` and \`const\` in modern JavaScript because of its sometimes confusing hoisting and scoping rules.

### 📚 Key Concepts
- **\`var\`**: A keyword for declaring a function-scoped or globally-scoped variable.
- **Function Scope**: Variables declared with \`var\` are accessible anywhere within the function they are defined in, regardless of block boundaries.
`,

  // problem explanation--> 02
  "declare-with-let": `
### 💡 Problem Breakdown
The \`let\` keyword, introduced in ES6 (2015), is the modern way to declare variables whose values might need to change. The key feature of \`let\` is that it is **block-scoped**.

### ⚙️ Solution Walkthrough
A variable named \`myLet\` is declared and assigned a number.
\`\`\`javascript
let myLet = 100;
return \`Declared myLet with value: \${myLet}\`;
\`\`\`
Using \`let\` is preferred over \`var\` because its block-scoping behavior is more intuitive and helps prevent common bugs related to scope.

### 📚 Key Concepts
- **\`let\`**: A keyword for declaring a block-scoped variable that can be reassigned.
- **Block Scope**: The scope created by a pair of curly braces \`{}\`. A variable declared with \`let\` only exists within that block.
`,

  // problem explanation--> 03
  "declare-with-const": `
### 💡 Problem Breakdown
The \`const\` keyword is used to declare "constants" – variables whose values are not intended to be changed after they are first assigned. It's important to understand that \`const\` protects the variable's *binding* (the reference), not the value itself if it's an object or array. Like \`let\`, it is **block-scoped**.

### ⚙️ Solution Walkthrough
A constant named \`myConst\` is declared and assigned a string.
\`\`\`javascript
const myConst = 'Constant';
return \`Declared myConst with value: "\${myConst}"\`;
\`\`\`
Modern best practice is to use \`const\` by default and only switch to \`let\` if you know the variable needs to be reassigned.

### 📚 Key Concepts
- **\`const\`**: A keyword for declaring a block-scoped constant whose binding is immutable.
- **Immutability (of binding)**: The variable identifier cannot be reassigned to point to a new value.
`,

  // problem explanation--> 04
  "reassign-let-variable": `
### 💡 Problem Breakdown
This problem demonstrates the primary feature of variables declared with \`let\`: they are mutable and can be reassigned to a new value after their initial declaration.

### ⚙️ Solution Walkthrough
A variable is initialized and then its value is updated.
\`\`\`javascript
let reassignable = "Initial";
reassignable = "Reassigned";
return \`Final value: "\${reassignable}"\`;
\`\`\`
The variable \`reassignable\` successfully points to a new string value.

### 📚 Key Concepts
- **Reassignment**: The ability to change the value a variable holds. This is the main characteristic of \`let\` compared to \`const\`.
`,

  // problem explanation--> 05
  "const-reassignment-primitive": `
### 💡 Problem Breakdown
This problem shows the core rule of \`const\`: a constant cannot be reassigned. When the value is a primitive type (like a number, string, or boolean), this effectively makes the value immutable.

### ⚙️ Solution Walkthrough
The code attempts to reassign a constant, which throws a \`TypeError\`.
\`\`\`javascript
const myConst = 10;
myConst = 20; // This line will throw a TypeError
\`\`\`
The solver catches this expected error. This behavior is desirable because it prevents accidental changes to values that should remain constant throughout the program.

### 📚 Key Concepts
- **\`TypeError\`**: The specific error thrown when trying to reassign a constant variable.
- **Immutability**: For primitive types, \`const\` provides true immutability.
`,

  // problem explanation--> 06
  "uninitialized-variable": `
### 💡 Problem Breakdown
This problem demonstrates what happens when a variable is declared but not given an initial value. In JavaScript, such variables are automatically initialized with the special value \`undefined\`.

### ⚙️ Solution Walkthrough
A variable is declared with \`let\` without an assignment operator.
\`\`\`javascript
let myVar;
console.log(myVar); // undefined
\`\`\`
The initial value is \`undefined\`, and its type is also \`"undefined"\`.

### 📚 Key Concepts
- **\`undefined\`**: A primitive value in JavaScript that represents the absence of a value.
- **Initialization**: The process of assigning an initial value to a variable.
`,

  // problem explanation--> 07
  "const-must-be-initialized": `
### 💡 Problem Breakdown
Unlike \`let\` or \`var\`, constants declared with \`const\` *must\` be given a value at the same time they are declared. Failing to do so results in a \`SyntaxError\`.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing invalid syntax.
\`\`\`javascript
// This is invalid code and will not run
const myConst; 
// SyntaxError: 'const' declarations must be initialized.
\`\`\`
The reason for this rule is that a \`const\` cannot be reassigned later, so if it weren't initialized at declaration, it could never be given a value.

### 📚 Key Concepts
- **\`SyntaxError\`**: An error that occurs when the JavaScript engine encounters code that violates the language's syntax rules.
`,

  // problem explanation--> 08
  "variable-naming-rules": `
### 💡 Problem Breakdown
JavaScript has specific rules for variable names (identifiers):
1.  They must start with a letter, an underscore (\`_\`), or a dollar sign (\`$\`).
2.  After the first character, they can also contain numbers.
3.  They are case-sensitive.
4.  They cannot be a reserved keyword (like \`if\`, \`let\`, \`const\`).

### ⚙️ Solution Walkthrough
The code demonstrates valid and invalid names.
\`\`\`javascript
// Valid
const _name = 'Underscore';
const $name = 'Dollar';
const name1 = 'Letter then number';

// Invalid
// const 1name = 'Starts with number'; // SyntaxError
\`\`\`
### 📚 Key Concepts
- **Identifiers**: The names given to variables, functions, and other parts of a program.
`,

  // problem explanation--> 09
  "case-sensitivity": `
### 💡 Problem Breakdown
A key rule for JavaScript identifiers is that they are case-sensitive. This means \`myVariable\`, \`MyVariable\`, and \`myvariable\` are treated as three completely different variables.

### ⚙️ Solution Walkthrough
Two variables are declared with names that differ only by case.
\`\`\`javascript
let myVariable = "lowercase v";
let myvariable = "all lowercase";
\`\`\`
The code shows that they hold different values and do not interfere with each other. While possible, using variable names that only differ by case is generally considered bad practice as it can be confusing.

### 📚 Key Concepts
- **Case-Sensitivity**: A fundamental property of the JavaScript language.
`,

  // problem explanation--> 10
  "type-of-variable": `
### 💡 Problem Breakdown
The \`typeof\` operator is a unary operator that returns a string indicating the data type of the unevaluated operand. It's a fundamental tool for inspecting the type of a variable at runtime.

### ⚙️ Solution Walkthrough
The operator is used on variables holding different primitive types.
\`\`\`javascript
const str = "hello"; // typeof is "string"
const num = 42;      // typeof is "number"
const bool = true;   // typeof is "boolean"
\`\`\`
The result of the \`typeof\` operator is always a string.

### 📚 Key Concepts
- **\`typeof\` operator**: The primary way to check the primitive type of a value.
- **Primitive Types**: The basic data types in JavaScript: string, number, boolean, null, undefined, symbol, bigint.
`,

  // problem explanation--> 11
  "dynamic-typing": `
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

  // problem explanation--> 12
  "declare-multiple-variables": `
### 💡 Problem Breakdown
JavaScript allows you to declare (and optionally initialize) multiple variables in a single statement, separated by commas.

### ⚙️ Solution Walkthrough
Three variables are declared and initialized in one line using a single \`let\` keyword.
\`\`\`javascript
let a = 1, b = 2, c = 3;
\`\`\`
While this syntax is compact, modern code style often prefers declaring each variable on its own line for better readability.

### 📚 Key Concepts
- **Syntax Sugar**: A more concise syntax for a common operation.
`,

  // problem explanation--> 13
  "string-concatenation-vars": `
### 💡 Problem Breakdown
The addition operator (\`+\`) is used for both adding numbers and concatenating strings. When used with string variables, it joins them together to form a new string.

### ⚙️ Solution Walkthrough
Two string variables are joined with a space literal in between.
\`\`\`javascript
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName; // "John Doe"
\`\`\`
### 📚 Key Concepts
- **Operator Overloading**: The \`+\` operator performs a different action based on the types of its operands.
`,

  // problem explanation--> 14
  "template-literals-vars": `
### 💡 Problem Breakdown
Template literals (or template strings) are an ES6 feature that provides a more powerful and readable way to create strings, especially when embedding variables. They are enclosed in backticks (\` \`).

### ⚙️ Solution Walkthrough
Variables are embedded directly into the string using the \`\${variableName}\` syntax.
\`\`\`javascript
const name = "Alice";
const age = 30;
const sentence = \`\${name} is \${age} years old.\`;
\`\`\`
This is much cleaner than traditional concatenation: \`name + ' is ' + age + ' years old.'\`.

### 📚 Key Concepts
- **Template Literals**: A modern string syntax in JavaScript.
- **String Interpolation**: The process of embedding expressions or variables within a string literal.
`,

  // problem explanation--> 15
  "null-vs-undefined": `
### 💡 Problem Breakdown
This problem highlights the difference between two primitive values that both represent "no value".
- **\`undefined\`**: The default value of a variable that has been declared but not assigned a value. It means a value has not been set yet.
- **\`null\`**: A value that must be explicitly assigned. It represents the intentional absence of any object value.

### ⚙️ Solution Walkthrough
The \`typeof\` operator is used to show a key difference.
\`\`\`javascript
let uninitialized; // value is undefined, typeof is "undefined"
let noValue = null; // value is null, typeof is "object"
\`\`\`
The fact that \`typeof null\` returns \`"object"\` is a famous, long-standing bug in JavaScript that cannot be changed for backward compatibility.

### 📚 Key Concepts
- **\`undefined\` vs. \`null\`**: A subtle but important distinction in JavaScript.
`,

  // problem explanation--> 16
  "shorthand-property-names": `
### 💡 Problem Breakdown
ES6 introduced a concise syntax for creating object literals when the keys of the object have the same name as the variables you want to assign to them.

### ⚙️ Solution Walkthrough
An object is created from two variables.
\`\`\`javascript
const name = "Alice";
const age = 25;

// Instead of { name: name, age: age }
const user = { name, age }; 
\`\`\`
If the variable name and the desired property name are identical, you only need to write the name once.

### 📚 Key Concepts
- **Shorthand Property Names**: A syntax sugar feature from ES6 that makes object creation more concise.
`,

  // problem explanation--> 17
  "nan-is-weird": `
### 💡 Problem Breakdown
\`NaN\` (Not a Number) is a special numeric value that results from an operation that cannot produce a valid number (e.g., \`0 / 0\` or \`Math.sqrt(-1)\`). It has a unique property: it is not equal to anything, including itself.

### ⚙️ Solution Walkthrough
The code shows that \`NaN === NaN\` is false. The correct way to check if a value is \`NaN\` is to use the \`Number.isNaN()\` function.
\`\`\`javascript
NaN === NaN; // false
Number.isNaN(NaN); // true
\`\`\`
### 📚 Key Concepts
- **\`NaN\`**: A special value of the number type.
- **\`Number.isNaN()\`**: The modern, reliable function for checking for \`NaN\`.
`,

  // problem explanation--> 18
  "destructure-swap-variables": `
### 💡 Problem Breakdown
This problem shows a modern, elegant ES6 feature for swapping the values of two variables without needing a temporary third variable.

### ⚙️ Solution Walkthrough
Array destructuring is used to perform the swap in a single line.
\`\`\`javascript
let a = 1;
let b = 2;

// The old way:
// const temp = a;
// a = b;
// b = temp;

// The new way:
[a, b] = [b, a];
\`\`\`
On the right side, a new array \`[2, 1]\` is created. Then, destructuring assignment unpacks these values back into the variables \`a\` and \`b\` in the new order.

### 📚 Key Concepts
- **Array Destructuring**: A powerful syntax for extracting values from arrays.
`,

  // problem explanation--> 19
  "destructure-array": `
### 💡 Problem Breakdown
Array destructuring is an ES6 feature that allows you to "unpack" values from arrays into distinct variables in a concise way.

### ⚙️ Solution Walkthrough
Values from an array literal are assigned to two new constants.
\`\`\`javascript
const coordinates = [10, 20];
const [x, y] = coordinates;

// x is 10, y is 20
\`\`\`
The assignment is based on the position of the elements in the array.

### 📚 Key Concepts
- **Destructuring Assignment**: A syntax that makes it easy to extract data from arrays or objects.
`,

  // problem explanation--> 20
  "destructure-object": `
### 💡 Problem Breakdown
Object destructuring is the counterpart to array destructuring. It allows you to unpack properties from objects into distinct variables.

### ⚙️ Solution Walkthrough
Properties from an object literal are assigned to new constants.
\`\`\`javascript
const user = { name: 'Bob', age: 40 };
const { name, age } = user;

// name is "Bob", age is 40
\`\`\`
The assignment is based on the property names. The variable names must match the property keys.

### 📚 Key Concepts
- **Destructuring Assignment**: A syntax that makes it easy to extract data from arrays or objects.
`,

  // problem explanation--> 21
  "when-to-use-let-vs-const": `
### 💡 Problem Breakdown
This is a conceptual problem about modern JavaScript best practices for variable declaration.

### ⚙️ Solution Walkthrough
The rule of thumb is:
1.  **Default to \`const\`**: Always start by declaring variables with \`const\`. This signals that the variable's reference should not be changed, which makes the code easier to reason about and prevents accidental reassignments.
2.  **Use \`let\` only when necessary**: If you know that a variable's value needs to be reassigned later (e.g., a loop counter, a state variable that gets updated), then use \`let\`.
3.  **Avoid \`var\`**: In modern codebases, \`var\` should generally be avoided due to its confusing scoping and hoisting rules.

### 📚 Key Concepts
- **Code Readability**: Using \`const\` clearly communicates intent.
- **Immutability**: Favoring immutability leads to more predictable and safer code.
`,

  // problem explanation--> 22
  "destructure-from-function-return-array": `
### 💡 Problem Breakdown
Destructuring can be combined with function calls. If a function returns an array, you can immediately destructure its return value into variables.

### ⚙️ Solution Walkthrough
A function returns an array, and its result is destructured.
\`\`\`javascript
function getCoords() {
  return [5, 10];
}

const [x, y] = getCoords();
// x becomes 5, y becomes 10
\`\`\`
This makes for very clean and expressive code, avoiding the need for a temporary variable to hold the array.

### 📚 Key Concepts
- **Function Composition**: Combining different language features (functions and destructuring) to write elegant code.
`,

  // problem explanation--> 23
  "destructure-from-function-return-object": `
### 💡 Problem Breakdown
Similar to destructuring an array return, if a function returns an object, you can immediately destructure its properties into variables.

### ⚙️ Solution Walkthrough
A function returns an object, and its properties are destructured.
\`\`\`javascript
function getUser() {
  return { id: 123, name: 'Frank' };
}

const { id, name } = getUser();
// id becomes 123, name becomes "Frank"
\`\`\`
This is an extremely common pattern when working with functions that return structured data.

### 📚 Key Concepts
- **Function Composition**: A clean pattern for extracting data from function results.
`,

  // problem explanation--> 24
  "redeclare-var": `
### 💡 Problem Breakdown
This problem highlights a peculiar and often problematic feature of \`var\`. A variable declared with \`var\` can be declared again in the same scope without causing an error. The second declaration simply acts as an assignment.

### ⚙️ Solution Walkthrough
A variable \`x\` is declared twice with \`var\`.
\`\`\`javascript
var x = 1;
var x = 2; // This is allowed
console.log(x); // 2
\`\`\`
This behavior can lead to bugs where a variable is accidentally redeclared in a large codebase.

### 📚 Key Concepts
- **Variable Redeclaration**: A behavior allowed by \`var\` but prohibited by \`let\` and \`const\`.
`,

  // problem explanation--> 25
  "redeclare-let-error": `
### 💡 Problem Breakdown
In contrast to \`var\`, \`let\` and \`const\` were designed to be safer. They do not allow a variable to be redeclared in the same scope. This prevents accidental redeclaration bugs.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing invalid syntax.
\`\`\`javascript
let x = 1;
let x = 2; // This line will throw a SyntaxError
\`\`\`
The JavaScript engine will refuse to run this code, citing that the identifier 'x' has already been declared.

### 📚 Key Concepts
- **\`SyntaxError\`**: An error indicating that the code does not conform to the rules of the language.
- **Safer Scoping Rules**: A key improvement of \`let\` and \`const\` over \`var\`.
`,

  // problem explanation--> 26
  "global-scope-var": `
### 💡 Problem Breakdown
When a variable is declared with \`var\` outside of any function, it is added to the **global scope**. Variables in the global scope are accessible from anywhere in the program, including inside functions.

### ⚙️ Solution Walkthrough
A global variable is declared and then accessed from within a function.
\`\`\`javascript
var globalVar = "Hi";
function test() {
  console.log(globalVar); // Accesses the global variable
}
test(); // "Hi"
\`\`\`
### 📚 Key Concepts
- **Global Scope**: The outermost scope in a JavaScript program.
- **Scope Chain**: The mechanism by which the function looks outside its own scope to find the \`globalVar\` variable.
`,

  // problem explanation--> 27
  "function-scope-var": `
### 💡 Problem Breakdown
Variables declared with \`var\` are **function-scoped**. This means they are accessible anywhere within the function in which they are declared, but not outside of it.

### ⚙️ Solution Walkthrough
A variable is declared inside a function. Trying to access it outside the function results in an error.
\`\`\`javascript
function test() {
  var funcVar = "Local";
}
// console.log(funcVar); // Throws a ReferenceError
\`\`\`
This behavior is a fundamental way JavaScript provides encapsulation, keeping a function's internal variables private.

### 📚 Key Concepts
- **Function Scope**: The scope created by a function.
- **Encapsulation**: The principle of bundling data and the methods that operate on that data together, and restricting direct access to some of the object's components.
`,

  // problem explanation--> 28
  "block-scope-let": `
### 💡 Problem Breakdown
ES6 introduced \`let\` and \`const\`, which are **block-scoped**. A block is any section of code within curly braces \`{}\` (e.g., in an \`if\` statement or a \`for\` loop). Variables declared with \`let\` are only accessible within that block.

### ⚙️ Solution Walkthrough
A variable is declared with \`let\` inside an \`if\` block. It is not accessible after the block ends.
\`\`\`javascript
if (true) {
    let blockVar = "In block";
}
// console.log(blockVar); // Throws a ReferenceError
\`\`\`
This more granular scoping is generally safer and less error-prone than the function-scoping of \`var\`.

### 📚 Key Concepts
- **Block Scope**: The scope created by a pair of curly braces.
`,

  // problem explanation--> 29
  "block-scope-const": `
### 💡 Problem Breakdown
Like \`let\`, constants declared with \`const\` are also **block-scoped**. They only exist within the block in which they are defined.

### ⚙️ Solution Walkthrough
A constant is declared inside an \`if\` block. It cannot be accessed outside.
\`\`\`javascript
if (true) {
    const blockConst = "In block";
}
// console.log(blockConst); // Throws a ReferenceError
\`\`\`
### 📚 Key Concepts
- **Block Scope**: A key feature of modern variable declarations in JavaScript.
`,

  // problem explanation--> 30
  "var-no-block-scope": `
### 💡 Problem Breakdown
This problem highlights a major difference between \`var\` and \`let\`/\`const\`. Variables declared with \`var\` are **not** block-scoped; they are function-scoped. This means a \`var\` declared inside a block (like an \`if\` or \`for\` loop) "leaks" out into the containing function's scope.

### ⚙️ Solution Walkthrough
A variable is declared with \`var\` inside an \`if\` block and is successfully accessed outside of it.
\`\`\`javascript
if (true) {
    var noBlock = "Visible outside";
}
console.log(noBlock); // "Visible outside"
\`\`\`
This behavior can lead to bugs where variables from a loop overwrite other variables, and is a primary reason to prefer \`let\` and \`const\`.

### 📚 Key Concepts
- **Function Scope vs. Block Scope**: A critical distinction between \`var\` and the newer \`let\`/\`const\`.
`,

  // problem explanation--> 31
  "global-scope-let": `
### 💡 Problem Breakdown
Just like \`var\`, a variable declared with \`let\` at the top level (outside any function) is in the global scope and is accessible from anywhere in the program.

### ⚙️ Solution Walkthrough
A global \`let\` is accessed from within a function.
\`\`\`javascript
let globalLet = "Hi";
function test() {
  console.log(globalLet); // "Hi"
}
\`\`\`
The main difference from a global \`var\` is that a global \`let\` does not become a property on the \`window\` object in browsers.

### 📚 Key Concepts
- **Global Scope**: The top-level scope accessible by all parts of the program.
`,

  // problem explanation--> 32
  "shadowing-global-variable": `
### 💡 Problem Breakdown
"Shadowing" occurs when a variable declared in a certain scope (e.g., a local scope) has the same name as a variable in an outer scope. When this happens, the inner variable takes precedence within its scope, temporarily "hiding" or "shadowing" the outer variable.

### ⚙️ Solution Walkthrough
A local variable \`color\` shadows the global variable of the same name.
\`\`\`javascript
let color = 'blue'; // Global variable
function showColor() {
  let color = 'green'; // Local variable, shadows the global one
  return \`The color inside the function is \${color}.\`; // 'green'
}
// The global variable is unaffected.
\`\`\`
### 📚 Key Concepts
- **Variable Shadowing**: A situation where a variable in an inner scope hides a variable from an outer scope.
`,

  // problem explanation--> 33
  "const-array-reassignment-error": `
### 💡 Problem Breakdown
This problem clarifies the behavior of \`const\` with reference types like arrays. \`const\` prevents the variable from being reassigned to a *new* reference, but it does not make the array itself immutable.

### ⚙️ Solution Walkthrough
An attempt is made to assign a new array to a variable declared with \`const\`, resulting in a \`TypeError\`.
\`\`\`javascript
const arr = [1, 2];
arr.push(3); // This is allowed
// arr = [3, 4]; // This would throw a TypeError
\`\`\`
The solver catches the expected error. You can modify the *contents* of the array, but you cannot make the variable point to a different array.

### 📚 Key Concepts
- **Binding vs. Value**: \`const\` makes the binding immutable, not the value being pointed to.
`,

  // problem explanation--> 34
  "destructure-skip-array-items": `
### 💡 Problem Breakdown
Array destructuring provides a syntax to skip elements you are not interested in. You can simply omit a variable name and use a comma as a placeholder.

### ⚙️ Solution Walkthrough
The second element of an array is skipped during destructuring.
\`\`\`javascript
const numbers = [1, 2, 3];
const [a, , c] = numbers;
// a is 1
// The element at index 1 (value 2) is skipped
// c is 3
\`\`\`
### 📚 Key Concepts
- **Array Destructuring**: A flexible syntax for extracting values from arrays.
`,

  // problem explanation--> 35
  "practical-let-for-state": `
### 💡 Problem Breakdown
This demonstrates a common, practical use case for \`let\`: managing a state that changes over time. A counter that needs to be incremented is a perfect example of a variable that must be reassigned.

### ⚙️ Solution Walkthrough
A counter variable is declared with \`let\` outside a function. The function modifies this external state.
\`\`\`javascript
let counter = 0;
function increment() {
  counter++;
}
increment();
increment();
// counter is now 2
\`\`\`
Because the \`counter\` variable needs to be reassigned, \`let\` is the correct choice.

### 📚 Key Concepts
- **State Management**: Using variables to keep track of the state of an application or component.
`,

  // problem explanation--> 36
  "practical-const-for-config": `
### 💡 Problem Breakdown
A common use for \`const\` is to declare configuration values that should never change during the program's execution, such as API keys, URLs, or settings.

### ⚙️ Solution Walkthrough
A configuration object is declared with \`const\`.
\`\`\`javascript
const CONFIG = {
  API_URL: 'https://api.example.com',
  TIMEOUT: 5000
};
\`\`\`
Using \`const\` makes the code's intent clear (this configuration should not be changed) and prevents accidental modification of the reference to the config object.

### 📚 Key Concepts
- **Configuration Management**: Storing application settings in a clear and safe way.
`,

  // problem explanation--> 37
  "variable-shadowing": `
### 💡 Problem Breakdown
"Shadowing" occurs when a variable declared in an inner scope has the same name as a variable in an outer scope. Inside the inner scope, any reference to that variable name will resolve to the inner variable.

### ⚙️ Solution Walkthrough
A variable \`x\` in an inner function shadows the \`x\` from the outer scope.
\`\`\`javascript
let x = 'outer';
function test() {
  let x = 'inner'; // This 'x' is completely separate
  console.log(x); // 'inner'
}
test();
console.log(x); // 'outer'
\`\`\`
The inner \`x\` only exists within the \`test\` function. The outer \`x\` is unaffected.

### 📚 Key Concepts
- **Variable Shadowing**: A direct consequence of how lexical scoping works.
`,

  // problem explanation--> 38
  "lexical-scoping": `
### 💡 Problem Breakdown
JavaScript uses **lexical scoping** (also known as static scoping). This means that the scope of a variable is determined by its position in the source code. An inner function can access variables from its outer, containing function because of where it was *defined*, not where it was *called*.

### ⚙️ Solution Walkthrough
The \`child\` function is defined inside the scope of the \`parent\` function, so it has access to \`parentVar\`.
\`\`\`javascript
function parent() {
  let parentVar = 'Parent';
  function child() {
    // child's lexical environment contains a reference to parent's environment
    console.log(parentVar); // 'Parent'
  }
  child();
}
\`\`\`
This forms a "closure," where the inner function "closes over" the variables of its parent.

### 📚 Key Concepts
- **Lexical Scoping**: Scope is determined by the author-time placement of code.
- **Closures**: A core concept in JavaScript where a function remembers the environment in which it was created.
`,

  // problem explanation--> 39
  "scope-chain": `
### 💡 Problem Breakdown
The scope chain is the mechanism that allows a function to access variables from its containing scopes. When a variable is used, the JavaScript engine searches the current scope. If it's not found, it searches the immediate outer scope, then the next outer scope, and so on, up to the global scope.

### ⚙️ Solution Walkthrough
A deeply nested function \`child\` accesses variables from both its immediate parent and its grandparent scopes.
\`\`\`javascript
let grandparent = 'L1';
function parent() {
  let parent = 'L2';
  function child() {
    // Searches its own scope (finds nothing),
    // then parent's scope (finds 'parent'),
    // then grandparent's (global) scope (finds 'grandparent').
    return \`Can see \${parent} and \${grandparent}.\`;
  }
  return child();
}
\`\`\`
### 📚 Key Concepts
- **Scope Chain**: The ordered list of scopes that are searched to resolve a variable's value.
`,

  // problem explanation--> 40
  "iife-scope": `
### 💡 Problem Breakdown
An Immediately Invoked Function Expression (IIFE) is a design pattern used to create a new scope. By wrapping a function in parentheses and executing it immediately, you can declare variables that will not leak into the surrounding (often global) scope.

### ⚙️ Solution Walkthrough
An IIFE creates a private variable \`privateVar\`.
\`\`\`javascript
(function() {
  var privateVar = "I'm private";
  // This variable only exists inside these parentheses.
})();
// console.log(privateVar); // Throws a ReferenceError
\`\`\`
This was a very common pattern for creating privacy before ES6 modules became the standard.

### 📚 Key Concepts
- **IIFE**: A pattern for creating privacy.
- **Global Scope Pollution**: IIFEs help prevent adding unnecessary variables to the global scope.
`,

  // problem explanation--> 41
  "let-in-for-loop": `
### 💡 Problem Breakdown
This problem demonstrates a key feature of \`let\` in \`for\` loops. When you use \`let\` to declare the loop counter, JavaScript creates a *new* binding for that variable for each iteration of the loop. This is crucial for closures created inside loops.

### ⚙️ Solution Walkthrough
A loop creates asynchronous callbacks. Because \`let\` is used, each callback captures the value of \`i\` from its specific iteration.
\`\`\`javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    // Each timeout has its own 'i'
    console.log(i); 
  }, 10);
}
// Output will be: 0, 1, 2
\`\`\`
### 📚 Key Concepts
- **Block Scope**: \`let\` is block-scoped.
- **Loop Variable Binding**: The new binding per iteration is a special behavior of \`let\` in loops that solves many common problems.
`,

  // problem explanation--> 42
  "var-in-for-loop-pitfall": `
### 💡 Problem Breakdown
This shows the classic problem with using \`var\` in loops with closures. Because \`var\` is function-scoped, there is only *one* \`i\` variable for the entire loop. By the time the asynchronous \`setTimeout\` callbacks run, the loop has already finished, and the single \`i\` variable holds its final value (3).

### ⚙️ Solution Walkthrough
The callbacks all reference the same shared \`i\` variable.
\`\`\`javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    // All three callbacks see the final value of 'i'
    console.log(i);
  }, 10);
}
// Output will be: 3, 3, 3
\`\`\`
This behavior was a very common source of bugs for junior developers, and is a primary reason \`let\` was introduced.

### 📚 Key Concepts
- **Function Scope**: \`var\` creates a single variable for the entire function containing the loop.
`,

  // problem explanation--> 43
  "window-object-global-var": `
### 💡 Problem Breakdown
In a browser environment, the global scope is represented by the \`window\` object. When you declare a variable with \`var\` in the global scope, it becomes a property of the \`window\` object.

### ⚙️ Solution Walkthrough
This is a conceptual problem for a browser context.
\`\`\`javascript
var myGlobal = 'hello';
console.log(window.myGlobal === myGlobal); // true
\`\`\`
This can lead to accidentally overwriting built-in properties of the \`window\` object and is generally considered bad practice.

### 📚 Key Concepts
- **Global Object**: The \`window\` object in browsers.
`,

  // problem explanation--> 44
  "window-object-global-let": `
### 💡 Problem Breakdown
ES6 changed the behavior for global variables declared with \`let\` and \`const\`. Unlike \`var\`, they are still in the global scope, but they do **not** become properties of the global \`window\` object.

### ⚙️ Solution Walkthrough
This is a conceptual problem for a browser context.
\`\`\`javascript
let myGlobal = 'hello';
console.log(window.myGlobal); // undefined
\`\`\`
This change helps to keep the global namespace cleaner and prevents accidental overwrites of \`window\` properties.

### 📚 Key Concepts
- **Global Lexical Environment**: \`let\` and \`const\` at the global level live in a separate conceptual space from the properties of the \`window\` object.
`,

  // problem explanation--> 45
  "undeclared-variable-global": `
### 💡 Problem Breakdown
This demonstrates a behavior of non-strict mode that can cause serious bugs. If you assign a value to a variable that has not been declared, JavaScript automatically creates a global variable with that name without causing an error. This is called a "global leak".

### ⚙️ Solution Walkthrough
A function accidentally creates a global variable.
\`\`\`javascript
// non-strict mode
function createLeak() {
  myLeakedVar = "oops"; // No let, const, or var
}
createLeak();
// console.log(myLeakedVar); // "oops" - it's now global!
\`\`\`
### 📚 Key Concepts
- **Global Leak**: An unintended creation of a global variable.
`,

  // problem explanation--> 46
  "strict-mode-undeclared": `
### 💡 Problem Breakdown
"Strict mode" is a feature that enables a more restrictive set of rules for JavaScript, catching common errors and preventing unsafe actions. One of its key benefits is that it prevents accidental global leaks.

### ⚙️ Solution Walkthrough
Assigning to an undeclared variable in strict mode throws a \`ReferenceError\`.
\`\`\`javascript
'use strict';
function noLeak() {
  // myLeakedVar = "oops"; // This would throw a ReferenceError
}
\`\`\`
It is a best practice to always write JavaScript in strict mode, which is the default in ES6 modules.

### 📚 Key Concepts
- **Strict Mode**: A way to opt into a more secure and less error-prone variant of JavaScript.
`,

  // problem explanation--> 47
  "scope-of-catch-block": `
### 💡 Problem Breakdown
The error variable declared in a \`catch\` block has its own special scope. It is **block-scoped** to the \`catch\` block itself and is not accessible outside of it.

### ⚙️ Solution Walkthrough
The \`err\` variable only exists inside the \`catch\` block.
\`\`\`javascript
try {
  throw new Error('test error');
} catch (err) {
  console.log(err.message); // 'test error'
}
// console.log(err); // Throws a ReferenceError
\`\`\`
### 📚 Key Concepts
- **Block Scope**: The \`catch\` block creates its own scope for its parameter.
`,

  // problem explanation--> 48
  "hoisting-var-declaration": `
### 💡 Problem Breakdown
Hoisting is a JavaScript mechanism where variable and function declarations are conceptually moved to the top of their scope before code execution. For variables declared with \`var\`, only the *declaration* is hoisted, not the *initialization* (assignment).

### ⚙️ Solution Walkthrough
A \`var\` is accessed before its assignment.
\`\`\`javascript
// During compilation, this is treated as:
// var myVar;
// console.log(myVar);
// myVar = 5;

console.log(myVar); // logs 'undefined'
var myVar = 5;
\`\`\`
The variable exists due to hoisting, but its value is \`undefined\` until the assignment line is reached.

### 📚 Key Concepts
- **Hoisting**: A core JavaScript behavior.
`,

  // problem explanation--> 49
  "hoisting-function-declaration": `
### 💡 Problem Breakdown
Unlike \`var\` declarations, **function declarations** are fully hoisted. This means the entire function, including its body, is moved to the top of the scope, allowing you to call it before it appears in your code.

### ⚙️ Solution Walkthrough
The conceptual code shows this behavior.
\`\`\`javascript
// This works because the entire function is hoisted.
const result = hoistedFunc(); 

function hoistedFunc() {
  return 'I was hoisted!';
}
\`\`\`
### 📚 Key Concepts
- **Function Hoisting**: A specific hoisting rule that applies only to function declarations.
`,

  // problem explanation--> 50
  "hoisting-function-expression": `
### 💡 Problem Breakdown
Function expressions (where a function is assigned to a variable) are **not** fully hoisted. If assigned to a \`var\`, the variable declaration is hoisted, but the function assignment is not. This leads to a \`TypeError\`.

### ⚙️ Solution Walkthrough
An attempt is made to call a function expression before its assignment.
\`\`\`javascript
// The code is interpreted as:
// var expressionFunc;
// expressionFunc(); // TypeError: expressionFunc is not a function
// expressionFunc = function() { ... };

try {
  expressionFunc(); 
} catch(e) {
  console.log(e.name); // "TypeError"
}
var expressionFunc = function() {};
\`\`\`
At the time of the call, \`expressionFunc\` is \`undefined\`, not a function.

### 📚 Key Concepts
- **Hoisting**: The rules for function expressions are different from function declarations.
`,

  // problem explanation--> 51
  "temporal-dead-zone-let": `
### 💡 Problem Breakdown
Variables declared with \`let\` and \`const\` are also hoisted, but they are not initialized. The period from the start of the block until the declaration is reached is called the **Temporal Dead Zone (TDZ)**. Accessing the variable within the TDZ results in a \`ReferenceError\`.

### ⚙️ Solution Walkthrough
An attempt is made to access a \`let\` variable before its declaration.
\`\`\`javascript
// The start of the TDZ for myLet
// console.log(myLet); // Throws a ReferenceError
// The end of the TDZ for myLet
let myLet = 5; 
\`\`\`
This prevents bugs that could occur with \`var\` where a variable might be used while its value is still \`undefined\`.

### 📚 Key Concepts
- **Temporal Dead Zone (TDZ)**: The state where a variable has been hoisted but cannot be accessed.
- **\`ReferenceError\`**: The error thrown when accessing a variable in its TDZ.
`,

  // problem explanation--> 52
  "temporal-dead-zone-const": `
### 💡 Problem Breakdown
Like \`let\`, constants declared with \`const\` are also subject to the Temporal Dead Zone (TDZ). They are hoisted but cannot be accessed before their declaration.

### ⚙️ Solution Walkthrough
An attempt to access a \`const\` in its TDZ.
\`\`\`javascript
// TDZ for myConst starts
// console.log(myConst); // Throws a ReferenceError
// TDZ for myConst ends
const myConst = 5;
\`\`\`
### 📚 Key Concepts
- **Temporal Dead Zone (TDZ)**: A key feature of \`let\` and \`const\` that improves code safety.
`,

  // problem explanation--> 53
  "var-redeclared-in-function": `
### 💡 Problem Breakdown
This demonstrates how \`var\` hoisting works within a function, even when an outer variable has the same name.

### ⚙️ Solution Walkthrough
The local \`var x\` declaration is hoisted to the top of the function.
\`\`\`javascript
var x = "global";
function test() {
  // Hoisting makes the code behave like this:
  // var x;
  // console.log(x); // 'undefined'
  // x = 'local';
  
  console.log(x); 
  var x = 'local';
}
test();
\`\`\`
The local \`x\` is hoisted, shadowing the global \`x\`. When it's logged, it exists but is \`undefined\`, not "global".

### 📚 Key Concepts
- **Hoisting**: Hoisting is scope-specific. A function-scoped \`var\` is hoisted to the top of its function.
`,

  // problem explanation--> 54
  "hoisting-in-strict-mode": `
### 💡 Problem Breakdown
This is a conceptual problem. Strict mode does not change the fundamental hoisting behavior of \`var\` (declaration hoisted, assignment not) or functions (fully hoisted). However, it introduces other errors that make some hoisting-related bugs easier to find. For example, strict mode prevents accidental global variable creation, which is a common issue related to scope and hoisting.

### 📚 Key Concepts
- **Strict Mode**: While not changing hoisting directly, it makes the language safer overall.
`,

  // problem explanation--> 55
  "const-mutate-object": `
### 💡 Problem Breakdown
This is a crucial concept for \`const\`. When you declare an object with \`const\`, it means the variable's *reference* to the object is constant. It does **not** mean the object's contents are constant. The object itself is still mutable.

### ⚙️ Solution Walkthrough
A property of a \`const\` object is changed.
\`\`\`javascript
const person = { name: 'John' };
person.name = 'Jane'; // This is perfectly valid.
// person = {}; // This would be a TypeError.
\`\`\`
The reference stored in \`person\` hasn't changed; it still points to the same object in memory.

### 📚 Key Concepts
- **Reference vs. Value**: \`const\` protects the reference, not the underlying value for objects and arrays.
`,

  // problem explanation--> 56
  "const-mutate-array": `
### 💡 Problem Breakdown
Similar to objects, when an array is declared with \`const\`, the variable holds a constant reference to the array. The contents of the array itself can be freely changed.

### ⚙️ Solution Walkthrough
Elements are added and modified in a \`const\` array.
\`\`\`javascript
const arr = [1, 2];
arr.push(3);    // OK
arr[0] = 0;       // OK
// arr = [4, 5]; // This would be a TypeError.
\`\`\`
### 📚 Key Concepts
- **Mutability**: Arrays are mutable objects in JavaScript.
- **\`const\` with Reference Types**: A key behavior to understand for modern JavaScript development.
`,

  // problem explanation--> 57
  "const-reassign-object": `
### 💡 Problem Breakdown
This problem shows the direct consequence of the \`const\` rule. It is a \`TypeError\` to attempt to assign a new object reference to a variable that was declared with \`const\`.

### ⚙️ Solution Walkthrough
The code attempts to reassign a constant variable holding an object.
\`\`\`javascript
const person = { name: 'Alice' };
// person = { name: 'Bob' }; // Throws TypeError: Assignment to constant variable.
\`\`\`
This prevents you from accidentally changing which object the variable points to.

### 📚 Key Concepts
- **\`TypeError\`**: The error thrown for an invalid assignment to a constant.
`,

  // problem explanation--> 58
  "object-freeze": `
### 💡 Problem Breakdown
If you need an object to be truly immutable (meaning its properties cannot be changed, added, or removed), you can use \`Object.freeze()\`.

### ⚙️ Solution Walkthrough
An object is frozen, and an attempt to mutate it fails.
\`\`\`javascript
'use strict'; // In strict mode, this will throw an error.
const frozenObj = { a: 1 };
Object.freeze(frozenObj);
// frozenObj.a = 2; // Throws a TypeError in strict mode.
\`\`\`
In non-strict mode, the mutation fails silently. It's important to note that \`Object.freeze()\` is shallow.

### 📚 Key Concepts
- **\`Object.freeze()\`**: A method for making an object immutable.
- **Immutability**: A programming paradigm that helps prevent bugs by avoiding shared, mutable state.
`,

  // problem explanation--> 59
  "const-in-for-of-loop": `
### 💡 Problem Breakdown
This problem demonstrates a specific behavior of \`for...of\` loops. You can safely use \`const\` to declare the loop variable because a *new* binding is created for each iteration of the loop.

### ⚙️ Solution Walkthrough
A \`for...of\` loop uses \`const\` for its loop variable.
\`\`\`javascript
const arr = [1, 2, 3];
for (const item of arr) {
  // 'item' is a new constant in each iteration.
  console.log(item);
}
\`\`\`
This works because the loop is not trying to *reassign* the \`item\` variable in subsequent iterations; it's creating a fresh one each time.

### 📚 Key Concepts
- **Loop Variable Binding**: The \`for...of\` loop has special semantics for how its variable is bound in each iteration.
`,

  // problem explanation--> 60
  "const-in-for-loop-error": `
### 💡 Problem Breakdown
In contrast to a \`for...of\` loop, a classic \`for\` loop cannot use \`const\` for its counter. The reason is that the final expression of the loop (e.g., \`i++\`) attempts to *reassign* the counter variable, which violates the rule of \`const\`.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing invalid syntax.
\`\`\`javascript
// This will throw a TypeError on the i++ step.
for (const i = 0; i < 3; i++) { 
  // ...
}
\`\`\`
### 📚 Key Concepts
- **Reassignment**: The core reason this fails is the reassignment in the loop's final expression.
`,

  // problem explanation--> 61
  "destructure-array-rest": `
### 💡 Problem Breakdown
The rest pattern (\`...\`) can be used in array destructuring to collect all remaining elements into a new array. It must be the last element in the destructuring pattern.

### ⚙️ Solution Walkthrough
The first element is extracted, and the rest are collected.
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const [first, ...rest] = numbers;
// first is 1
// rest is [2, 3, 4]
\`\`\`
### 📚 Key Concepts
- **Rest Pattern**: A powerful ES6 feature for working with a variable number of elements.
`,

  // problem explanation--> 62
  "destructure-object-rest": `
### 💡 Problem Breakdown
The rest pattern can also be used in object destructuring to collect the remaining properties of an object into a new object.

### ⚙️ Solution Walkthrough
The \`id\` property is extracted, and the remaining properties are collected into a new object.
\`\`\`javascript
const product = { id: 1, name: 'Product', price: 99 };
const { id, ...rest } = product;
// id is 1
// rest is { name: 'Product', price: 99 }
\`\`\`
### 📚 Key Concepts
- **Rest Properties**: The object version of the rest pattern.
`,

  // problem explanation--> 63
  "destructure-object-alias": `
### 💡 Problem Breakdown
When destructuring an object, you can assign a property to a variable with a different name. This is called aliasing.

### ⚙️ Solution Walkthrough
The \`name\` property is extracted into a new variable called \`userName\`.
\`\`\`javascript
const user = { name: 'Charlie' };
const { name: userName } = user;
// console.log(name); // ReferenceError: name is not defined
// console.log(userName); // 'Charlie'
\`\`\`
The syntax is \`{ propertyKey: newVariableName }\`.

### 📚 Key Concepts
- **Aliasing**: Renaming variables during destructuring.
`,

  // problem explanation--> 64
  "destructure-array-defaults": `
### 💡 Problem Breakdown
You can provide a default value for a variable in an array destructuring assignment. The default value is used if the element at that position in the array is \`undefined\` (or if the position does not exist).

### ⚙️ Solution Walkthrough
A default value is provided for \`b\`.
\`\`\`javascript
const numbers = [10];
const [a = 1, b = 2] = numbers;
// a gets its value from the array (10)
// The array has no element at index 1, so b gets its default value (2)
\`\`\`
### 📚 Key Concepts
- **Default Values**: Making destructuring more robust by handling missing data.
`,

  // problem explanation--> 65
  "destructure-object-defaults": `
### 💡 Problem Breakdown
Similarly to arrays, you can provide default values for variables in object destructuring. The default is used if the property does not exist on the object, or if its value is \`undefined\`.

### ⚙️ Solution Walkthrough
A default value is provided for the \`b\` property.
\`\`\`javascript
const settings = { a: 10 };
const { a = 1, b = 2 } = settings;
// a gets its value from the object (10)
// The object has no 'b' property, so b gets its default value (2)
\`\`\`
### 📚 Key Concepts
- **Default Values**: A key feature for safely destructuring objects that may have optional properties.
`,

  // problem explanation--> 66
  "destructure-nested-object": `
### 💡 Problem Breakdown
Destructuring syntax can be nested to match the structure of a nested object or array, allowing you to extract deeply nested values in a single statement.

### ⚙️ Solution Walkthrough
A nested destructuring pattern is used to extract the \`name\` property directly.
\`\`\`javascript
const data = { user: { name: 'David' } };
const { user: { name } } = data;
// name is 'David'
\`\`\`
The pattern \`{ user: { name } }\` says: "Go into the \`data\` object, find the \`user\` property, go into that object, find its \`name\` property, and assign its value to a new variable called \`name\`."

### 📚 Key Concepts
- **Nested Destructuring**: A powerful syntax for extracting data from complex structures.
`,

  // problem explanation--> 67
  "destructure-function-params-object": `
### 💡 Problem Breakdown
A very common and powerful pattern is to use object destructuring directly in a function's parameter list. This allows the function to accept a single "options" object and easily access its properties with default values.

### ⚙️ Solution Walkthrough
The function signature destructures the incoming object.
\`\`\`javascript
function greet({ name, greeting = 'Hello' }) {
  return \`\${greeting}, \${name}!\`;
}
// The function is called with an object
greet({ name: 'Eve' }); // "Hello, Eve!"
\`\`\`
This makes the function call more readable (you can see what each value is for) and flexible (the order of properties in the object doesn't matter).

### 📚 Key Concepts
- **Named Parameters**: Destructuring provides a way to simulate named parameters in JavaScript.
`,

  // problem explanation--> 68
  "destructure-function-params-array": `
### 💡 Problem Breakdown
While less common than with objects, array destructuring can also be used in a function's parameter list, allowing you to give meaningful names to positional arguments.

### ⚙️ Solution Walkthrough
A function that processes coordinates destructures its array parameter.
\`\`\`javascript
function processCoords([x, y]) {
  return \`x=\${x}, y=\${y}\`;
}
processCoords([10, 20]); // "x=10, y=20"
\`\`\`
### 📚 Key Concepts
- **Destructuring in Parameters**: A feature that improves function signature readability.
`,

  // problem explanation--> 69
  "destructure-for-of-loop": `
### 💡 Problem Breakdown
Destructuring is especially useful inside loops, particularly \`for...of\`, when iterating over an array of arrays or an array of objects.

### ⚙️ Solution Walkthrough
Destructuring is used to unpack each inner array into named variables within the loop.
\`\`\`javascript
const pairs = [[1, 'a'], [2, 'b']];
for (const [num, char] of pairs) {
  // In each iteration, num and char are assigned directly
  console.log(\`Number: \${num}, Char: \${char}\`);
}
\`\`\`
This is much cleaner than accessing elements by index (e.g., \`pair[0]\`, \`pair[1]\`).

### 📚 Key Concepts
- **Ergonomics**: Destructuring makes iterating over complex data structures much more convenient.
`,

  // problem explanation--> 70
  "destructure-string": `
### 💡 Problem Breakdown
Since strings are iterable, they can be treated like an array of characters for the purpose of destructuring.

### ⚙️ Solution Walkthrough
Array destructuring is applied to a string literal.
\`\`\`javascript
const [a, b] = "Hello";
// a becomes "H"
// b becomes "e"
\`\`\`
This can be a convenient way to get the first few characters of a string.

### 📚 Key Concepts
- **Iterables**: Destructuring works on any iterable object, not just arrays.
`,

  // problem explanation--> 71
  "destructure-with-defaults-and-alias": `
### 💡 Problem Breakdown
You can combine aliasing and default values in a single object destructuring statement.

### ⚙️ Solution Walkthrough
The \`name\` property is sought. If it doesn't exist, a default value of "Guest" is used. The final value is then assigned to a new variable called \`userName\`.
\`\`\`javascript
const user = {};
const { name: userName = 'Guest' } = user;
// userName is 'Guest'
\`\`\`
The syntax is \`{ propertyKey: newVariableName = defaultValue }\`.

### 📚 Key Concepts
- **Combining Features**: Destructuring syntax is composable, allowing for powerful and concise data extraction.
`,

  // problem explanation--> 72
  "destructure-null-error": `
### 💡 Problem Breakdown
This demonstrates a common error. Destructuring works by trying to access properties on a source value. If that source value is \`null\` or \`undefined\`, it has no properties, so the attempt to access them results in a \`TypeError\`.

### ⚙️ Solution Walkthrough
The code attempts to destructure a \`null\` value.
\`\`\`javascript
const source = null;
// const { a } = source; // Throws TypeError
\`\`\`
To prevent this, you can provide a default value for the *entire object* if it might be null or undefined: \`const { a } = source || {};\`.

### 📚 Key Concepts
- **Error Handling**: Anticipating that a value might be \`null\` or \`undefined\` before attempting to access its properties.
`,

  // problem explanation--> 73
  "destructure-return-with-defaults": `
### 💡 Problem Breakdown
This combines two common patterns: destructuring a function's return value and providing a default value for a property that might not be included in the return object.

### ⚙️ Solution Walkthrough
A function returns an object with a missing property. The destructuring assignment provides a default for it.
\`\`\`javascript
const getPartialData = () => ({ a: 1 });
const { a, b = 'default' } = getPartialData();
// a is 1
// b is 'default'
\`\`\`
This is very useful for working with APIs that may have optional fields in their responses.

### 📚 Key Concepts
- **Defensive Programming**: Using default values to make code more robust and prevent errors from missing data.
`,

  // problem explanation--> 74
  "let-block-scope-in-standalone-block": `
### 💡 Problem Breakdown
This problem shows that a block doesn't need to be part of an \`if\`, \`for\`, or \`while\` statement to create a scope. A simple pair of curly braces \`{}\` anywhere in your code will create a new block scope.

### ⚙️ Solution Walkthrough
A standalone block is used to create a temporary, private scope.
\`\`\`javascript
let x = 'outer';
{
  let x = 'inner';
  // This 'x' only exists inside this block
}
// The outer 'x' is unaffected.
console.log(x); // 'outer'
\`\`\`
This can be used to encapsulate helper variables without creating a full function (like an IIFE).

### 📚 Key Concepts
- **Block Scope**: A fundamental scoping rule for \`let\` and \`const\`.
`,

  // problem explanation--> 75
  "dynamic-property-creation": `
### 💡 Problem Breakdown
ES6 introduced "computed property names," a syntax that allows you to use an expression (like a variable) as a property name when creating an object literal.

### ⚙️ Solution Walkthrough
A variable is used inside square brackets \`[]\` to define a property key.
\`\`\`javascript
const propName = 'dynamicKey';
const obj = {
  [propName]: 'Hello World'
};
// obj is { dynamicKey: 'Hello World' }
\`\`\`
This is a powerful feature for creating objects with keys that are determined at runtime.

### 📚 Key Concepts
- **Computed Property Names**: The \`[expression]\` syntax for object keys.
`,

  // problem explanation--> 76
  "primitive-wrapper-objects": `
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

  // problem explanation--> 77
  "symbol-primitive-type": `
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

  // problem explanation--> 78
  "bigint-primitive-type": `
### 💡 Problem Breakdown
The standard \`number\` type in JavaScript cannot safely represent integers larger than \`Number.MAX_SAFE_INTEGER\` (about 9 quadrillion). ES2020 introduced the \`BigInt\` primitive type to work with arbitrarily large integers.

### ⚙️ Solution Walkthrough
A \`BigInt\` is created by appending \`n\` to an integer literal or by calling the \`BigInt()\` constructor.
\`\`\`javascript
const veryLargeNumber = 9007199254740991n; // Note the 'n'
const result = veryLargeNumber + 2n;
console.log(result.toString()); // '9007199254740993'
\`\`\`
You cannot mix \`BigInt\` and regular \`number\` types in arithmetic operations; you must explicitly convert one.

### 📚 Key Concepts
- **\`BigInt\`**: A primitive type for representing integers of arbitrary precision.
`,

  // problem explanation--> 79
  "var-function-scope-loop-pitfall": `
### 💡 Problem Breakdown
This is a deeper look at the scope of \`var\`. When \`var\` is used in a \`for\` loop, that variable is not scoped to the loop's block. It is scoped to the entire containing function (or the global scope).

### ⚙️ Solution Walkthrough
A \`var\` declared in a loop is accessed after the loop has finished.
\`\`\`javascript
function test() {
  for (var i = 0; i < 3; i++) {
    // ...
  }
  // Because 'i' is function-scoped, it still exists here.
  return \`The value of i after the loop is: \${i}\`; // i is 3
}
\`\`\`
This shows that the variable "leaks" out of the loop block.

### 📚 Key Concepts
- **Function Scope**: A core concept for understanding \`var\`.
`,

  // problem explanation--> 80
  "let-scope-in-catch": `
### 💡 Problem Breakdown
This problem explores variable shadowing within a \`catch\` block. A \`let\` variable declared inside the \`catch\` block can safely shadow an outer variable of the same name because the \`catch\` block has its own scope.

### ⚙️ Solution Walkthrough
An outer \`err\` variable is declared. A \`catch\` block catches an error, and a *new* \`let err\` is declared inside it, which shadows the outer one.
\`\`\`javascript
let err = 'outer';
try {
  throw 'inner';
} catch (e) {
  let err = e; // This is a new 'err' scoped to the catch block
  console.log(\`Inside catch, the new 'err' is "\${err}"\`); // 'inner'
}
console.log(\`Outside, the original 'err' is still "\${err}"\`); // 'outer'
\`\`\`
### 📚 Key Concepts
- **Block Scope**: The \`catch\` block creates a distinct scope for its variables.
`,

  // problem explanation--> 81
  "hoisting-var-at-global-scope": `
### 💡 Problem Breakdown
This is a conceptual problem about how hoisting works at the very top level of a script. Before any code is executed, the JavaScript engine performs a compilation pass. During this pass, it finds all \`var\` and \`function\` declarations and allocates memory for them in the global scope.

### ⚙️ Solution Walkthrough
The code \`console.log(x); var x = 5;\` is interpreted by the engine in this order:
1. **Compilation Pass**: See \`var x;\`. Allocate space for \`x\` in the global scope and initialize it to \`undefined\`.
2. **Execution Pass**:
   - Execute \`console.log(x)\`. The value of \`x\` is currently \`undefined\`.
   - Execute the assignment \`x = 5\`. The value of \`x\` is now 5.

### 📚 Key Concepts
- **Execution Context**: Hoisting is part of the "creation" phase of an execution context.
`,

  // problem explanation--> 82
  "const-primitive-vs-object-deep-dive": `
### 💡 Problem Breakdown
This is a core concept. \`const\` does not make a value immutable. It creates an immutable *binding*.
- For **primitives**, the value is stored directly in the variable's location. Since the binding is immutable, the value itself cannot be changed.
- For **objects/arrays**, the value stored in the variable is a *reference* (a memory address). \`const\` prevents this reference from being changed, but it does nothing to the object at that memory address, which can still be mutated.

### ⚙️ Solution Walkthrough
- \`const x = 10;\` The variable \`x\` is bound to the value 10. You cannot change this binding.
- \`const y = {};\` The variable \`y\` is bound to the memory address of a new object. You cannot change this binding (you can't make \`y\` point to a different object). However, you can access the object via that address and change its properties: \`y.prop = 'new'\`.

### 📚 Key Concepts
- **Value vs. Reference**: The fundamental difference in how primitives and objects are stored and passed in JavaScript.
`,

  // problem explanation--> 83
  "global-object-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the global environment in JavaScript.
- **Global Object**: In any JavaScript environment, there is a global object that contains built-in functions (\`parseInt\`, \`isNaN\`) and, in some cases, global variables.
- **\`window\`**: In web browsers, the global object is named \`window\`. It also represents the browser tab and has many browser-specific APIs.
- **\`global\`**: In Node.js, the global object is named \`global\`.
- **\`globalThis\`**: Because the name of the global object was different across environments, ES2020 introduced \`globalThis\`, which provides a standard, environment-agnostic way to access the global object.

### 📚 Key Concepts
- **JavaScript Runtimes**: Understanding that JavaScript runs in different environments (browser, server, etc.) which may have different global objects.
`,

  // problem explanation--> 84
  "typeof-in-tdz": `
### 💡 Problem Breakdown
This problem highlights a strict rule of the Temporal Dead Zone (TDZ). Unlike with \`var\` (where \`typeof myVar\` would be \`'undefined'\` before declaration), trying to use *any* operator or function on a \`let\` or \`const\` variable before its declaration line results in a \`ReferenceError\`. This includes \`typeof\`.

### ⚙️ Solution Walkthrough
The conceptual code demonstrates this error.
\`\`\`javascript
// TDZ for myLet starts
// typeof myLet; // This line would throw a ReferenceError
let myLet = 5;
\`\`\`
This enforces stricter code by preventing you from interacting with a variable in any way before it has been properly initialized.

### 📚 Key Concepts
- **Temporal Dead Zone (TDZ)**: The check is performed at access-time.
`,

  // problem explanation--> 85
  "hoisting-order-var-and-function": `
### 💡 Problem Breakdown
When the JavaScript engine hoists declarations, it has a clear order of precedence. **Function declarations are hoisted before variable declarations.**

### ⚙️ Solution Walkthrough
A function and a variable with the same name are declared.
\`\`\`javascript
// During compilation, this is processed as:
// 1. function myThing() { return 'function'; } // Function is hoisted first.
// 2. var myThing; // This is now a duplicate declaration and is ignored.

console.log(typeof myThing); // 'function'
var myThing = 'variable';
console.log(typeof myThing); // 'string'
\`\`\`
The function declaration "wins" the hoisting race. The subsequent \`var\` declaration is effectively ignored, and only the assignment part of that line is executed later.

### 📚 Key Concepts
- **Hoisting Precedence**: Functions > Variables.
`,

  // problem explanation--> 86
  "hoisting-class-declaration": `
### 💡 Problem Breakdown
ES6 \`class\` declarations have a similar hoisting behavior to \`let\`. They *are* hoisted (the name is known to the scope), but they remain in the Temporal Dead Zone (TDZ) until the declaration line is executed.

### ⚙️ Solution Walkthrough
An attempt is made to instantiate a class before its declaration.
\`\`\`javascript
// new MyClass(); // Throws a ReferenceError
class MyClass {}
\`\`\`
This behavior prevents certain types of errors and ensures that a class is fully defined before it can be used.

### 📚 Key Concepts
- **Class Declarations**: Behave like \`let\` with respect to hoisting and the TDZ.
`,

  // problem explanation--> 87
  "object-freeze-nested": `
### 💡 Problem Breakdown
This problem demonstrates an important limitation of \`Object.freeze()\`: it is a **shallow** operation. It makes the top-level properties of the object immutable, but if one of those properties is another object, that nested object is *not* frozen.

### ⚙️ Solution Walkthrough
A nested object is modified after the parent object has been frozen.
\`\`\`javascript
const user = {
  name: 'Alice',
  details: { age: 30 }
};
Object.freeze(user);

// user.name = 'Bob'; // This would fail.
user.details.age = 31; // This succeeds!
\`\`\`
To make an object deeply immutable, you would need to write a recursive function that applies \`Object.freeze()\` to all nested objects.

### 📚 Key Concepts
- **Shallow vs. Deep Operations**: A common concept in programming. Shallow operations affect only the top level of a data structure, while deep operations recurse into nested structures.
`,

  // problem explanation--> 88
  "object-seal": `
### 💡 Problem Breakdown
\`Object.seal()\` is another method for controlling object mutability. A sealed object is less restrictive than a frozen one. On a sealed object:
- You **cannot** add new properties.
- You **cannot** delete existing properties.
- You **can** modify the values of existing properties.

### ⚙️ Solution Walkthrough
An object is sealed, and its existing property is modified.
\`\`\`javascript
const sealedObj = { a: 1 };
Object.seal(sealedObj);

sealedObj.a = 2; // Allowed
// delete sealedObj.a; // Not allowed (fails silently in non-strict mode)
// sealedObj.b = 3; // Not allowed (fails silently in non-strict mode)
\`\`\`
### 📚 Key Concepts
- **\`Object.seal()\`**: A method for making an object's structure fixed, but its values mutable.
`,

  // problem explanation--> 89
  "object-preventextensions": `
### 💡 Problem Breakdown
\`Object.preventExtensions()\` is the least restrictive of the object immutability methods. It only prevents new properties from being added to an object. You can still modify and delete existing properties.

### ⚙️ Solution Walkthrough
An object's extensions are prevented, but an existing property is deleted.
\`\`\`javascript
const obj = { a: 1 };
Object.preventExtensions(obj);

// obj.b = 2; // Not allowed
delete obj.a; // Allowed
\`\`\`
### 📚 Key Concepts
- **\`Object.preventExtensions()\`**: A method to lock down the addition of new properties.
`,

  // problem explanation--> 90
  "destructure-assignment-without-declaration": `
### 💡 Problem Breakdown
You can use destructuring to assign values to variables that have already been declared. However, when destructuring an object this way, the statement must be wrapped in parentheses.

### ⚙️ Solution Walkthrough
Variables \`a\` and \`b\` are assigned values from an object.
\`\`\`javascript
let a, b;
// The parentheses are required here
({ a, b } = { a: 1, b: 2 });
\`\`\`
The reason for the parentheses is to disambiguate the code. Without them, the JavaScript parser would see the opening curly brace \`{\` and interpret it as the start of a block statement, not an object literal, which would lead to a \`SyntaxError\`.

### 📚 Key Concepts
- **Syntactic Ambiguity**: A situation where a piece of code can be interpreted in more than one way by the language parser.
`,

  // problem explanation--> 91
  "destructure-dynamic-property-name": `
### 💡 Problem Breakdown
This problem explores a limitation of destructuring. The destructuring syntax requires static, known property names at author-time. You cannot use a variable to specify which property to extract directly within the destructuring pattern itself.

### ⚙️ Solution Walkthrough
The conceptual code shows that this is not possible and provides the correct alternative.
\`\`\`javascript
const obj = { name: 'Ivy', role: 'admin' };
const propToGet = 'role';

// This syntax is NOT valid:
// const { [propToGet]: value } = obj; 

// The correct way is to use standard bracket notation:
const value = obj[propToGet]; // 'admin'
\`\`\`
While you can use computed property names when *creating* an object, you cannot use them in the same way for *destructuring*.

### 📚 Key Concepts
- **Destructuring Limitations**: Understanding what the syntax can and cannot do.
- **Bracket Notation**: The standard way to access object properties using a dynamic key.
`,

  // problem explanation--> 92
  "destructure-mixed-array-object": `
### 💡 Problem Breakdown
Destructuring patterns can be nested to any depth, and can mix and match array and object patterns to precisely extract data from complex, nested structures.

### ⚙️ Solution Walkthrough
A complex object containing an array is destructured.
\`\`\`javascript
const data = {
  id: 1,
  items: ['apple', { type: 'banana' }]
};

// We want the id and the type of the second item.
const { id, items: [, { type }] } = data;
\`\`\`
Let's break down the pattern \`{ id, items: [, { type }] }\`:
- \`{ id, ... }\`: From the outer object, extract the property \`id\` into a variable \`id\`.
- \`items: [...]\`: Extract the property \`items\`. Instead of assigning it to a variable, apply a nested array destructuring pattern to it.
- \`[, { type }]\`: In the \`items\` array, skip the first element (\`,\`), then for the second element (which is an object), apply another nested object destructuring pattern \`{ type }\` to extract its \`type\` property.

### 📚 Key Concepts
- **Nested Destructuring**: Combining patterns to precisely target and extract deeply nested data.
`,

  // problem explanation--> 93
  "shadowing-in-catch-block": `
### 💡 Problem Breakdown
This explores the scope of the error parameter in a \`catch\` block. Before ES2019, if an outer variable with the same name as the \`catch\` parameter existed, some complex behaviors could arise. ES2019 standardized the behavior: the \`catch\` parameter *always* creates a new, block-scoped variable that shadows any outer variable.

### ⚙️ Solution Walkthrough
The \`e\` in the \`catch\` block is a completely separate variable from the outer \`e\`.
\`\`\`javascript
let e = 'outer';
try {
  throw 'inner';
} catch (e) {
  // This 'e' is block-scoped to the catch block
  console.log(e); // 'inner'
}
console.log(e); // 'outer'
\`\`\`
This behavior is now consistent and predictable.

### 📚 Key Concepts
- **Block Scope**: The \`catch\` clause creates its own lexical scope.
`,

  // problem explanation--> 94
  "tdz-and-closures": `
### 💡 Problem Breakdown
This problem demonstrates the interaction between the Temporal Dead Zone (TDZ) and closures. A closure captures a variable, not its value at the time the closure is created. If the closure is called *before* the variable's declaration line is reached, it will still be subject to the TDZ.

### ⚙️ Solution Walkthrough
A function \`fn\` is created that forms a closure over \`myLet\`. It is then called before \`myLet\` is declared.
\`\`\`javascript
function test() {
  const fn = () => myLet; // Closure captures the 'myLet' variable
  
  // Calling fn() here would throw a ReferenceError
  // because myLet is still in its TDZ.
  
  let myLet = 5;
  
  return fn(); // Calling it here is fine.
}
\`\`\`
The key takeaway is that the TDZ check happens when the variable is *accessed*, not when the closure is *created*.

### 📚 Key Concepts
- **Closures**: An inner function's reference to its outer scope.
- **Temporal Dead Zone (TDZ)**: The check is performed at access-time.
`,

  // problem explanation--> 95
  "tdz-with-default-params": `
### 💡 Problem Breakdown
Function parameters are evaluated from left to right. This means a parameter can reference a parameter that came before it. However, if it references a parameter that comes *after* it, that second parameter will still be in its Temporal Dead Zone (TDZ).

### ⚙️ Solution Walkthrough
The default value for parameter \`a\` tries to access \`b\` before \`b\` has been initialized.
\`\`\`javascript
// This function definition is valid
function test(a = b, b = 5) {
  // ...
}

// Calling it with no arguments will cause an error:
// test(); // ReferenceError: Cannot access 'b' before initialization
\`\`\`
When \`test()\` is called, the engine tries to evaluate the default for \`a\`. It looks for \`b\`, but \`b\` has not been initialized yet (it's in the TDZ of the parameter scope), so a \`ReferenceError\` is thrown.

### 📚 Key Concepts
- **Parameter Scope**: Function parameters have their own intermediate scope.
- **Left-to-Right Evaluation**: Parameters are initialized in the order they are written.
`,

  // problem explanation--> 96
  "garbage-collection-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about how JavaScript manages memory. JavaScript has automatic memory management, performed by a process called a **Garbage Collector (GC)**. The core principle is **reachability**.

### ⚙️ Solution Walkthrough
- **Allocation**: When you declare a variable or create an object (\`let x = {}\`), memory is allocated.
- **Use**: Your code reads from and writes to this memory (\`x.prop = 5\`).
- **Release (Garbage Collection)**: The GC periodically runs in the background. It starts from a set of "roots" (like the global object) and traverses all references to find all "reachable" objects. Any object that is *not* reachable is considered garbage and the memory it occupies is reclaimed.

An object becomes unreachable when there are no more variables or other objects that have a reference to it (e.g., a local variable goes out of scope and nothing else points to its object).

### 📚 Key Concepts
- **Garbage Collection**: The process of automatic memory reclamation.
- **Reachability**: The core concept the GC uses to determine if memory is still in use.
`,

  // problem explanation--> 97
  "memory-leak-with-closures": `
### 💡 Problem Breakdown
A memory leak occurs when a piece of memory is no longer needed by the application but is not released by the garbage collector. Closures are a common source of memory leaks if not managed carefully.

### ⚙️ Solution Walkthrough
A conceptual example:
\`\`\`javascript
function createLeakyListener() {
  const largeData = new Array(1000000).fill('*'); // 1. A large variable is created.
  
  // 2. An inner function (closure) is created that uses this variable.
  const listener = () => {
    console.log(largeData[0]); 
  };
  
  // 3. The closure is assigned as an event listener, which is a long-lived reference.
  document.body.addEventListener('click', listener);
}
\`\`\`
Even after \`createLeakyListener\` finishes, the \`listener\` function is still alive (referenced by the DOM). Because the \`listener\` needs access to \`largeData\`, \`largeData\` is kept in memory and will not be garbage collected until the event listener is removed.

### 📚 Key Concepts
- **Memory Leak**: Unwanted memory retention.
- **Closures**: Can cause leaks by unintentionally keeping references to large objects from outer scopes.
`,

  // problem explanation--> 98
  "let-in-switch-case": `
### 💡 Problem Breakdown
This problem highlights a subtle aspect of scope. The entire \`switch\` statement is considered a single block. Therefore, you cannot declare the same block-scoped variable (\`let\` or \`const\`) in multiple \`case\` clauses without creating sub-blocks, because you would be trying to redeclare it in the same block.

### ⚙️ Solution Walkthrough
An attempt to declare \`x\` in two different cases.
\`\`\`javascript
switch(1) {
  case 1:
    let x = 1;
    break;
  case 2:
    // let x = 2; // SyntaxError: Identifier 'x' has already been declared
    break;
}
// The fix is to give each case its own block scope:
switch(1) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    let x = 2; // This is now fine
    break;
  }
}
\`\`\`

### 📚 Key Concepts
- **Block Scope**: Understanding that the entire \`switch\` statement is one block is key.
`,

  // problem explanation--> 99
  "tdz-and-function-parameters": `
### 💡 Problem Breakdown
This is similar to the default parameters problem but applies to all parameter initializations. The parameters of a function are evaluated from left to right, and each one is in the TDZ until its initializer has been evaluated.

### ⚙️ Solution Walkthrough
A function is defined where one parameter references another that appears later in the list.
\`\`\`javascript
// This function definition is valid, but calling it can cause an error.
function test(a = b, b) {
  // ...
}

// test(undefined, 5); // This would throw a ReferenceError for 'b'
\`\`\`
When the call happens, the engine tries to set the default value for \`a\`. It looks for \`b\`, but \`b\` has not been initialized yet from the argument list, so it is in the TDZ.

### 📚 Key Concepts
- **Parameter Scope**: Parameters live in a special scope that is created before the function body is executed.
`,

  // problem explanation--> 100
  "deep-freeze-utility-conceptual": `
### 💡 Problem Breakdown
\`Object.freeze()\` is shallow. A "deep freeze" utility would need to recursively traverse an object and apply \`Object.freeze()\` to every nested object and array.

### ⚙️ Solution Walkthrough
A conceptual recursive function.
\`\`\`javascript
function deepFreeze(obj) {
  // Freeze the top-level object first.
  Object.freeze(obj);

  // Recurse for all properties that are objects.
  Object.keys(obj).forEach(key => {
    const prop = obj[key];
    if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  return obj;
}
\`\`\`
1. **Freeze Parent**: The function first freezes the object passed to it.
2. **Recurse on Children**: It then iterates over the object's properties. If a property is an object that isn't already frozen, it makes a recursive call to \`deepFreeze\` on that property.

### 📚 Key Concepts
- **Recursion**: A natural fit for processing nested data structures.
- **Immutability**: A pattern for creating truly immutable data structures.
`,

  // problem explanation--> 101
  "hoisting-across-scripts-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the boundaries of hoisting. Hoisting is a mechanism that is limited to the scope of the current script or module file. It does not span across multiple \`<script>\` tags or separate module files.

### ⚙️ Solution Walkthrough
In a browser with multiple script tags:
\`\`\`html
<script>
  console.log(x); // ReferenceError: x is not defined
</script>
<script>
  var x = 5;
</script>
\`\`\`
The variable \`x\` is not hoisted across the script boundaries. Each \`<script>\` tag is treated as a separate compilation unit.

### 📚 Key Concepts
- **Hoisting Boundaries**: Hoisting is file-scoped or module-scoped.
`,

  // problem explanation--> 102
  "memory-lifecycle-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the lifecycle of memory in JavaScript. Memory management is automatic, but understanding the steps helps in writing efficient code.

### ⚙️ Solution Walkthrough
The three steps of the memory lifecycle:
1. **Allocation**: Memory is allocated when variables or objects are created (e.g., \`let x = new Array(100)\`).
2. **Use**: The memory is read from or written to during the program's execution (e.g., \`x.push(1)\`).
3. **Release**: When the memory is no longer reachable (e.g., \`x = null\`), the garbage collector frees it.

### 📚 Key Concepts
- **Memory Lifecycle**: Allocation, Use, Release.
- **Garbage Collection**: Automatic release of unused memory.
`,

  // problem explanation--> 103
  "destructure-from-map": `
### 💡 Problem Breakdown
ES6 \`Map\` is an iterable object, so you can use array destructuring in a \`for...of\` loop to extract key-value pairs.

### ⚙️ Solution Walkthrough
Iterating over a \`Map\` and destructuring each entry.
\`\`\`javascript
const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(\`Key: \${key}, Value: \${value}\`);
}
\`\`\`
This is very useful for working with key-value data structures.

### 📚 Key Concepts
- **Iterables**: \`Map\` is iterable, allowing destructuring in loops.
`,

  // problem explanation--> 104
  "immutable-update-const": `
### 💡 Problem Breakdown
This demonstrates an immutable update pattern using spread syntax to create a new object while updating a property, keeping the original unchanged.

### ⚙️ Solution Walkthrough
Using spread to create a new object.
\`\`\`javascript
const user = { name: "Alex", role: "user" };
const adminUser = { ...user, role: "admin" };
// user remains unchanged
\`\`\`
This is common in functional programming and state management (e.g., Redux).

### 📚 Key Concepts
- **Immutable Update**: Creating new data instead of mutating existing.
- **Spread Syntax**: \`...\` for copying properties.
`,

  // problem explanation--> 105
  "for-in-vs-for-of": `
### 💡 Problem Breakdown
\`for...in\` iterates over an object's enumerable property keys, while \`for...of\` iterates over the values of an iterable object like an array.

### ⚙️ Solution Walkthrough
Comparing the two loops on an array.
\`\`\`javascript
const arr = ["a", "b"];
for (const key in arr) {
  console.log(key); // "0", "1" (indices)
}
for (const value of arr) {
  console.log(value); // "a", "b" (values)
}
\`\`\`
Use \`for...of\` for values, \`for...in\` for keys.

### 📚 Key Concepts
- **Iteration Protocols**: \`for...in\` for objects, \`for...of\` for iterables.
`,

  // problem explanation--> 106
  "var-hoisting-pitfall-2": `
### 💡 Problem Breakdown
This shows how \`var\` declarations are hoisted even if they are inside a conditional block that doesn't execute.

### ⚙️ Solution Walkthrough
A \`var\` in an unexecuted block is hoisted.
\`\`\`javascript
function test() {
  if (false) {
    var x = 5;
  }
  console.log(x); // undefined
}
\`\`\`
The declaration is hoisted, but the assignment is not executed.

### 📚 Key Concepts
- **Hoisting**: Declarations are moved to the top, regardless of conditionals.
`,

  // problem explanation--> 107
  "destructure-regex-groups": `
### 💡 Problem Breakdown
The result of \`string.match(regex)\` is an array that can be destructured to extract capture groups from the regular expression.

### ⚙️ Solution Walkthrough
Destructuring the match result.
\`\`\`javascript
const dateString = "2024-07-26";
const regex = /(\\d{4})-(\\d{2})-(\\d{2})/;
const [, year, month, day] = dateString.match(regex) || [];
// year is "2024", month is "07", day is "26"
\`\`\`
Skip the first element (full match) with a comma.

### 📚 Key Concepts
- **Capture Groups**: Using destructuring to extract regex matches.
`,

  // problem explanation--> 108
  "uninitialized-const-in-loop": `
### 💡 Problem Breakdown
This is conceptual: \`for (const x of [])\` is valid because the loop may not run, but \`for (const x; ; )\` is a syntax error because \`const\` requires an initializer.

### ⚙️ Solution Walkthrough
The syntax is checked at parse time for classic \`for\`, but \`for...of\` is more flexible.

### 📚 Key Concepts
- **Loop Semantics**: Different loops have different initialization rules.
`,

  // problem explanation--> 109
  "function-param-scope": `
### 💡 Problem Breakdown
Function parameters have their own scope, separate from the function body, allowing defaults to reference outer scopes but not the body.

### ⚙️ Solution Walkthrough
Parameters capture outer variables.
\`\`\`javascript
let x = "outer";
function test(xParam = x) {
  let inner = "inner";
  return xParam; // "outer"
}
\`\`\`
Parameters are in an intermediate scope.

### 📚 Key Concepts
- **Parameter Scope**: An intermediate scope between outer and body.
`,

  // problem explanation--> 110
  "destructure-sparse-array": `
### 💡 Problem Breakdown
Sparse arrays have "empty" slots (undefined). Destructuring treats them as \`undefined\`, triggering defaults if provided.

### ⚙️ Solution Walkthrough
Destructuring a sparse array.
\`\`\`javascript
const sparse = [1, , 3];
const [a, b = "default", c] = sparse;
// a=1, b="default", c=3
\`\`\`
Empty slots are \`undefined\`.

### 📚 Key Concepts
- **Sparse Arrays**: Arrays with holes, treated as \`undefined\` in destructuring.
`,

  // problem explanation--> 111
  "block-scope-for-let-in-loop": `
### 💡 Problem Breakdown
In \`for\` loops, \`let\` is re-bound for each iteration, which is different from simple block scope. This solves closure issues in loops.

### ⚙️ Solution Walkthrough
The spec treats each iteration as a new scope for \`let\`.

### 📚 Key Concepts
- **Re-binding**: A special loop behavior for \`let\`.
`,

  // problem explanation--> 112
  "implicit-global-in-function-call": `
### 💡 Problem Breakdown
In non-strict mode, detached method calls set \`this\` to the global object, potentially modifying globals.

### ⚙️ Solution Walkthrough
A detached method modifies global.
\`\`\`javascript
var name = 'global';
const obj = { name: 'obj', getName: function() { return this.name; } };
const fn = obj.getName;
fn(); // 'global'
\`\`\`
### 📚 Key Concepts
- **Implicit Global**: \`this\` falls back to global in non-strict mode.
`,

  // problem explanation--> 113
  "practical-let-event-listener": `
### 💡 Problem Breakdown
Use \`let\` for state in event listeners, like a toggle that changes on clicks.

### ⚙️ Solution Walkthrough
A \`let\` state is flipped in a listener.
\`\`\`javascript
let isToggled = false;
button.addEventListener('click', () => {
  isToggled = !isToggled;
});
\`\`\`
### 📚 Key Concepts
- **Event State**: \`let\` for mutable state in callbacks.
`,

  // problem explanation--> 114
  "practical-const-function-expression": `
### 💡 Problem Breakdown
Assign functions to \`const\` to prevent accidental overwrites.

### ⚙️ Solution Walkthrough
A const function expression.
\`\`\`javascript
const greet = () => "Hello!";
 // greet = () => "Goodbye!"; // TypeError
\`\`\`
### 📚 Key Concepts
- **Function Expressions**: Use \`const\` for safety.
`,

  // problem explanation--> 115
  "practical-destructuring-api-response": `
### 💡 Problem Breakdown
Destructure nested API responses to extract needed data.

### ⚙️ Solution Walkthrough
Nested destructuring from a JSON-like object.
\`\`\`javascript
const apiResponse = { data: { user: { id: 1, name: "Grace" } } };
const { data: { user: { name } } } = apiResponse;
\`\`\`
### 📚 Key Concepts
- **API Data Extraction**: Destructuring for clean access.
`,

  // problem explanation--> 116
  "object-is-for-nan": `
### 💡 Problem Breakdown
This problem demonstrates that \`Object.is()\` provides a reliable way to check for \`NaN\` values, unlike the strict equality operator (\`===\`) which fails for \`NaN\` comparisons.

### ⚙️ Solution Walkthrough
\`Object.is(NaN, NaN)\` returns \`true\`, making it the only reliable equality check for \`NaN\` values in JavaScript. This is particularly useful for validation and error handling where \`NaN\` values need to be detected.

\`\`\`javascript
// Traditional NaN check (problematic)
NaN === NaN; // false

// Reliable NaN check with Object.is
Object.is(NaN, NaN); // true

// Alternative reliable methods
Number.isNaN(NaN); // true
isNaN(NaN); // true (but has coercion issues)
\`\`\`

### 📚 Key Concepts
- **\`NaN\` Quirks**: \`NaN\` is the only value in JavaScript that is not equal to itself when using standard equality operators.
- **\`Object.is()\`**: Implements "SameValue" algorithm that correctly handles \`NaN\` comparisons.
- **Use Cases**: Essential for mathematical operations, data validation, and debugging where \`NaN\` values need precise detection.
`,

  // problem explanation--> 117
  "primitive-vs-reference-assignment": `
### 💡 Problem Breakdown
This problem illustrates a fundamental concept in JavaScript: how values are assigned.
- **Primitives (string, number, etc.)** are passed by **value**. A copy of the value is made.
- **Objects (including arrays)** are passed by **reference** (or more accurately, "copy of a reference"). A copy of the memory address is made.

### ⚙️ Solution Walkthrough
The code compares the two behaviors.
\`\`\`javascript
// Pass by value
let a = 10;
let b = a; // 'b' gets a copy of the value 10
b = 20;    // 'a' is unaffected

// Pass by reference
let obj1 = { val: 10 };
let obj2 = obj1; // 'obj2' gets a copy of the reference to the object
obj2.val = 20;   // 'obj1' is affected because both variables point to the same object
\`\`\`

### 📚 Key Concepts
- **Pass by Value vs. Pass by Reference**: A critical distinction for understanding how data is manipulated in JavaScript.
`,

  // problem explanation--> 118
  "hoisting-pitfall-with-blocks": `
### 💡 Problem Breakdown
This is a conceptual problem about a strange behavior in non-strict mode. Function declarations inside blocks (like an \`if\` statement) are supposed to be block-scoped, but for backward compatibility, many browsers also hoist them to the top of the containing function, which can be very confusing.

### ⚙️ Solution Walkthrough
In non-strict mode, the behavior can be unpredictable.
\`\`\`javascript
// non-strict mode
if (true) {
  function sayHi() { console.log('Hi'); }
}
// sayHi(); // This might work in some browsers but not others.
\`\`\`
**Best Practice**: Never use function declarations inside blocks. Use function expressions assigned to \`let\` or \`const\` instead. In strict mode, function declarations are properly block-scoped.

### 📚 Key Concepts
- **Legacy Behavior**: An example of inconsistent behavior from older versions of JavaScript.
`,

  // problem explanation--> 119
  "destructuring-iterable": `
### 💡 Problem Breakdown
Array destructuring is not limited to arrays. It can be used on any object that implements the **iterable protocol**. This includes strings, arrays, \`Map\`s, and \`Set\`s.

### ⚙️ Solution Walkthrough
Array destructuring is used on a \`Set\`.
\`\`\`javascript
const mySet = new Set(['a', 'b', 'c']);
const [first, second] = mySet;
// first is 'a'
// second is 'b'
\`\`\`
The destructuring assignment requests the first two values from the set's iterator.

### 📚 Key Concepts
- **Iterable Protocol**: A set of rules that objects can implement to define their iteration behavior, making them compatible with constructs like \`for...of\` and destructuring.
`,

  // problem explanation--> 120
  "const-and-garbage-collection": `
### 💡 Problem Breakdown
This is a conceptual problem. The choice of \`let\` vs. \`const\` has no direct impact on garbage collection. The garbage collector determines if an object is "reachable" from the root of the program (like the global object). If an object is no longer reachable, it can be collected.

### ⚙️ Solution Walkthrough
Whether a variable is declared with \`let\` or \`const\`, once it goes out of scope and no other references to its object exist, the object becomes eligible for garbage collection.
\`\`\`javascript
function test() {
  const largeObject = { /* ... */ };
  // ...
}
// After test() runs, 'largeObject' goes out of scope. 
// If nothing else refers to the object it pointed to, it can be garbage collected.
\`\`\`

### 📚 Key Concepts
- **Garbage Collection**: Based on reachability, not variable type.
`,

  // problem explanation--> 121
  "var-in-eval-scope": `
### 💡 Problem Breakdown
The \`eval()\` function executes a string of JavaScript code. When \`var\` is used inside an \`eval()\` string, it declares the variable in the scope where \`eval()\` was called. This is generally considered a bad practice and a security risk.

### ⚙️ Solution Walkthrough
A variable declared in \`eval\` becomes available in the containing function.
\`\`\`javascript
function demo() {
  eval("var hidden = 'I escaped!';");
  // 'hidden' is now a variable in the 'demo' function's scope
  return hidden;
}
demo(); // "I escaped!"
\`\`\`
### 📚 Key Concepts
- **\`eval()\`**: A powerful but dangerous function that should be avoided.
`,

  // problem explanation--> 122
  "let-in-eval-scope": `
### 💡 Problem Breakdown
In contrast to \`var\`, when you use \`let\` or \`const\` inside an \`eval()\` call, the variable is scoped only to the block created by the \`eval\` execution. It does not "leak" into the surrounding scope.

### ⚙️ Solution Walkthrough
A \`let\` variable declared in \`eval\` is not accessible outside.
\`\`\`javascript
function demo() {
  eval("let secret = 'I am contained.';");
  // console.log(secret); // Throws a ReferenceError
}
\`\`\`
### 📚 Key Concepts
- **Block Scope**: The rules of block scope for \`let\` and \`const\` are maintained even within \`eval\`.
`,

  // problem explanation--> 123
  "var-without-window": `
### 💡 Problem Breakdown
This is a conceptual problem about different JavaScript environments. While global \`var\` declarations attach to the \`window\` object in browsers, this is not true in all environments. In Node.js, a top-level \`var\` in a file is scoped to the **module**, not the true global object (\`global\`).

### ⚙️ Solution Walkthrough
- **Node.js Module**:
  \`\`\`javascript
  // in my-module.js
  var moduleVar = 5;
  // console.log(global.moduleVar); // undefined
  \`\`\`
- **Node.js REPL (interactive console)**:
  \`\`\`
  > var replVar = 10;
  > global.replVar // 10
  \`\`\`
The behavior depends on the execution context (module vs. REPL).

### 📚 Key Concepts
- **Module Scope**: ES Modules and CommonJS modules have their own scope to prevent global pollution.
`,

  // problem explanation--> 124
  "destructuring-and-prototypes": `
### 💡 Problem Breakdown
When you destructure an object, the JavaScript engine looks for properties on the object itself first. If it doesn't find a property, it will then look up the **prototype chain**.

### ⚙️ Solution Walkthrough
A property from a prototype is successfully destructured.
\`\`\`javascript
const proto = { inherited: 'yes' };
const obj = Object.create(proto); // 'obj' inherits from 'proto'
obj.own = 'no';

const { inherited, own } = obj;
// 'own' is found on obj itself.
// 'inherited' is not on obj, so the engine looks up to 'proto' and finds it.
\`\`\`

### 📚 Key Concepts
- **Prototype Chain**: The mechanism in JavaScript for objects to inherit properties from other objects.
`,

  // problem explanation--> 125
  "variable-lifecycle-in-closures": `
### 💡 Problem Breakdown
This problem demonstrates a key aspect of closures. When an inner function is returned from an outer function, it maintains a reference to its parent's scope. This means that variables from the parent scope are not garbage collected, even after the parent function has finished executing. They "survive" as long as the inner function exists.

### ⚙️ Solution Walkthrough
The \`count\` variable persists between calls to the \`counter\` function.
\`\`\`javascript
function outer() {
  let count = 0; // 'count' is created here
  return function inner() {
    count++; // 'inner' has a closure over 'count'
    return count;
  };
}

const counter = outer(); // 'outer' runs and finishes, but 'count' is not garbage collected.
counter(); // 1
counter(); // 2
counter(); // 3
\`\`\`
### 📚 Key Concepts
- **Closures**: The combination of a function and the lexical environment within which that function was declared.
`,

  // problem explanation--> 126
  "using-symbols-for-metadata": `
### 💡 Problem Breakdown
A great use case for \`Symbol\` is to add properties to an object that act as "metadata" without the risk of naming collisions. Symbol-keyed properties are also ignored by default by constructs like \`JSON.stringify()\` and \`for...in\` loops, making them ideal for internal data.

### ⚙️ Solution Walkthrough
A unique symbol is used to attach a private-like ID to an object.
\`\`\`javascript
const idSymbol = Symbol('id');
const user = { name: 'Test' };
user[idSymbol] = 123;

console.log(JSON.stringify(user)); // '{"name":"Test"}' (the symbol is ignored)
console.log(user[idSymbol]); // 123 (can still be accessed directly)
\`\`\`

### 📚 Key Concepts
- **\`Symbol\`**: Used for creating non-enumerable, unique property keys.
`,

  // problem explanation--> 127
  "const-for-math-constants": `
### 💡 Problem Breakdown
This is a straightforward, practical use case for \`const\`. Mathematical or scientific constants that are used in calculations are perfect candidates for \`const\` because their values should never change.

### ⚙️ Solution Walkthrough
A constant for PI is declared and used.
\`\`\`javascript
const PI = 3.14159;
const radius = 5;
const area = PI * radius * radius;
\`\`\`
Using \`const\` makes the code's intent clear and prevents accidental reassignment.

### 📚 Key Concepts
- **Constants**: Using \`const\` for values that are conceptually fixed.
`,

  // problem explanation--> 128
  "destructure-react-props": `
### 💡 Problem Breakdown
This is a conceptual problem showing a very common pattern in the React library. React components are functions that receive a single object called \`props\`. It is standard practice to destructure this \`props\` object directly in the function's parameter list to get access to the needed values.

### ⚙️ Solution Walkthrough
A conceptual React component.
\`\`\`javascript
// Instead of this:
// function User(props) {
//   return <div>{props.name}</div>;
// }

// It's more common to do this:
function User({ name, avatarUrl }) {
  return <div><img src={avatarUrl} />{name}</div>;
}
\`\`\`
This makes the code more concise and clearly documents which props the component expects to receive.

### 📚 Key Concepts
- **Destructuring in Parameters**: A powerful feature for improving function ergonomics.
`,

  // problem explanation--> 129
  "let-for-cached-value": `
### 💡 Problem Breakdown
This demonstrates a practical use of \`let\` for caching. Caching is a performance optimization where the result of an expensive operation is stored so that it doesn't need to be re-calculated on subsequent calls. The cached value needs to be stored in a variable that can be reassigned.

### ⚙️ Solution Walkthrough
A \`let\` variable is used to store a cached result.
\`\`\`javascript
let cachedData = null;
function getData() {
  if (cachedData) {
    return \`(from cache) \${cachedData}\`;
  }
  // Simulate an expensive operation
  cachedData = 'expensive data';
  return \`(calculated) \${cachedData}\`;
}
getData(); // Calculates the data
getData(); // Returns the cached data
\`\`\`
Because \`cachedData\` is reassigned from \`null\` to the actual data, \`let\` is the appropriate choice.

### 📚 Key Concepts
- **Caching**: A common performance optimization pattern.
- **State Management**: Using \`let\` for a variable whose state changes from "uncached" to "cached".
`,

  // problem explanation--> 130
  "temporal-dead-zone-in-classes": `
### 💡 Problem Breakdown
This problem shows that the Temporal Dead Zone (TDZ) also applies to class properties. Class fields are initialized from top to bottom. If you try to initialize one field using another field that is defined later in the class body, you will get a \`ReferenceError\`.

### ⚙️ Solution Walkthrough
A conceptual class with an initialization order issue.
\`\`\`javascript
class MyClass {
  // This line tries to access 'this.prop2' before it is initialized.
  prop1 = this.prop2; // Throws a ReferenceError
  prop2 = 5;
}
// const instance = new MyClass(); // This would cause the error.
\`\`\`
### 📚 Key Concepts
- **Class Initialization**: Class fields are initialized in order of definition.
`,

  // problem explanation--> 131
  "shadowing-with-function-params": `
### 💡 Problem Breakdown
This is a specific example of variable shadowing. When a function has a parameter with the same name as a variable in an outer scope, the parameter acts as a local variable within the function, "shadowing" the outer variable.

### ⚙️ Solution Walkthrough
The parameter \`x\` shadows the outer variable \`x\`.
\`\`\`javascript
let x = 'outer';
function test(x) { // This 'x' is a new, local variable
  console.log(x); // 'inner'
}
test('inner');
console.log(x); // 'outer'
\`\`\`
### 📚 Key Concepts
- **Parameter Scope**: Parameters are local variables within a function's scope.
`,

  // problem explanation--> 132
  "is-frozen-check": `
### 💡 Problem Breakdown
The \`Object.isFrozen()\` method is used to determine if an object has been frozen with \`Object.freeze()\`.

### ⚙️ Solution Walkthrough
The status of an object is checked before and after freezing.
\`\`\`javascript
const obj = { a: 1 };
console.log(Object.isFrozen(obj)); // false
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: Methods that allow you to check the state or configuration of an object.
`,

  // problem explanation--> 133
  "is-sealed-check": `
### 💡 Problem Breakdown
The \`Object.isSealed()\` method determines if an object has been sealed with \`Object.seal()\`.

### ⚙️ Solution Walkthrough
The status of an object is checked after sealing.
\`\`\`javascript
const obj = { a: 1 };
Object.seal(obj);
console.log(Object.isSealed(obj)); // true
\`\`\`
Note that a frozen object is also considered sealed.

### 📚 Key Concepts
- **Object Introspection**: Checking an object's state.
`,

  // problem explanation--> 134
  "is-extensible-check": `
### 💡 Problem Breakdown
The \`Object.isExtensible()\` method determines if new properties can be added to an object.

### ⚙️ Solution Walkthrough
The status is checked after calling \`Object.preventExtensions()\`.
\`\`\`javascript
const obj = { a: 1 };
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false
\`\`\`
Both sealed and frozen objects are also non-extensible.

### 📚 Key Concepts
- **Object Introspection**: Checking an object's state.
`,

  // problem explanation--> 135
  "destructuring-and-type-coercion": `
### 💡 Problem Breakdown
This is a conceptual problem to clarify that destructuring assignment performs a direct value assignment without any automatic type coercion. This is in contrast to constructs like loose equality (\`==\`) or \`if\` statements that do perform coercion.

### ⚙️ Solution Walkthrough
The string \`"0"\` is destructured.
\`\`\`javascript
const { val } = { val: "0" };
// val is the string "0"
// It is not coerced to the number 0.
// An \`if (val)\` check would be false, because "0" is truthy.
\`\`\`
The assigned variable has the exact type and value of the source property.

### 📚 Key Concepts
- **Type Coercion**: Destructuring avoids this, making it predictable.
`,

  // problem explanation--> 136
  "global-scope-pollution": `
### 💡 Problem Breakdown
This is a conceptual problem about a major drawback of overusing global variables. "Polluting the global scope" means declaring too many variables at the global level. This is considered bad practice because:
1.  **Naming Collisions**: Your global variable might have the same name as a variable in a third-party library you're using, causing one to overwrite the other and leading to hard-to-debug errors.
2.  **Code Readability**: It's difficult to track where a global variable is being read from or modified, making the code harder to reason about.

### ⚙️ Solution Walkthrough
The modern solutions to this problem are ES6 Modules and creating local scopes with functions or blocks.

### 📚 Key Concepts
- **Encapsulation**: Keeping variables contained within the scope where they are needed.
`,

  // problem explanation--> 137
  "using-block-scope-for-privacy": `
### 💡 Problem Breakdown
This demonstrates a practical use for standalone block scopes. You can use a pair of curly braces to create a temporary "private" scope for helper variables that you don't want to exist in the surrounding scope.

### ⚙️ Solution Walkthrough
A block is used to contain \`temp\` and \`helper\`.
\`\`\`javascript
let result;
{
  let temp = 5;
  let helper = 10;
  result = temp + helper;
}
// 'temp' and 'helper' are not accessible here.
// They have been garbage collected.
\`\`\`
This is a lightweight alternative to an IIFE for achieving local scope.

### 📚 Key Concepts
- **Block Scope**: A tool for creating temporary, private scopes.
`,

  // problem explanation--> 138
  "hoisting-let-and-const-conceptual": `
### 💡 Problem Breakdown
This is a common point of confusion. The statement "\`let\` and \`const\` are not hoisted" is technically incorrect. They *are* hoisted. The JavaScript engine is aware of them at the top of their scope during the compilation phase.

However, unlike \`var\` which is initialized to \`undefined\`, \`let\` and \`const\` are left **uninitialized**. The period where they are hoisted but uninitialized is the **Temporal Dead Zone (TDZ)**. Any attempt to access them in the TDZ results in a \`ReferenceError\`.

### 📚 Key Concepts
- **Hoisting**: Applies to all declaration types, but the initialization behavior is different.
- **Temporal Dead Zone (TDZ)**: The key difference in the hoisting behavior of \`let\` and \`const\`.
`,

  // problem explanation--> 139
  "destructuring-computed-property": `
### 💡 Problem Breakdown
This shows an advanced destructuring pattern. While you can't use a variable to define which property to extract, you *can* use a variable (a computed property) as the source property and then immediately alias it to a new, static variable name.

### ⚙️ Solution Walkthrough
A variable \`key\` is used to specify the property to extract.
\`\`\`javascript
const key = 'name';
const { [key]: personName } = { name: 'Ivy' };
// 'personName' is now 'Ivy'
\`\`\`
This pattern is not very common but demonstrates the flexibility of the syntax.

### 📚 Key Concepts
- **Computed Properties**: Using \`[]\` in object literals (and destructuring patterns) to use an expression as a property name.
`,

  // problem explanation--> 140
  "reserved-words-as-variables": `
### 💡 Problem Breakdown
JavaScript has a set of "reserved words" (or keywords) that have special meaning in the language. You cannot use these words as names for variables, constants, or functions.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing invalid syntax.
\`\`\`javascript
// All of these will cause a SyntaxError
// let for = 5;
// const if = true;
// var class = {};
\`\`\`
### 📚 Key Concepts
- **Reserved Words**: Keywords that are part of the language's syntax, such as \`if\`, \`else\`, \`for\`, \`while\`, \`function\`, \`class\`, \`let\`, \`const\`, etc.
`,

  // problem explanation--> 141
  "infinity-and-negative-infinity": `
### 💡 Problem Breakdown
JavaScript has global variables, \`Infinity\` and \`-Infinity\`, that represent the mathematical concepts of infinity. These typically result from operations like dividing by zero.

### ⚙️ Solution Walkthrough
The results of division by zero are shown.
\`\`\`javascript
1 / 0;   // Infinity
-1 / 0;  // -Infinity
\`\`\`
These are of the \`number\` type.

### 📚 Key Concepts
- **\`Infinity\`**: A special numeric value representing a value greater than any other number.
`,

  // problem explanation--> 142
  "passing-primitives-to-functions": `
### 💡 Problem Breakdown
This demonstrates "pass-by-value." When you pass a primitive value (like a number or string) as an argument to a function, a **copy** of that value is made. The function receives the copy, and any modifications to it inside the function do not affect the original variable.

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
- **Pass by Value**: The function receives a copy of the primitive value.
`,

  // problem explanation--> 143
  "passing-objects-to-functions": `
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

  // problem explanation--> 144
  "reassigning-object-param": `
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

  // problem explanation--> 145
  "hoisting-in-eval": `
### 💡 Problem Breakdown
This demonstrates a complex and often undesirable interaction. Code inside an \`eval()\` string is executed within the scope where \`eval\` is called. A \`var\` declaration inside the evaluated string will be hoisted to the top of that containing scope.

### ⚙️ Solution Walkthrough
A \`var x\` is hoisted from the \`eval\` string.
\`\`\`javascript
function test() {
  eval("console.log(x); var x = 5;"); // logs 'undefined'
}
\`\`\`
This happens because the \`var x\` is hoisted within the \`test\` function's scope. This behavior is another reason why \`eval\` is generally avoided.

### 📚 Key Concepts
- **\`eval()\`**: Executes code with the privileges of the caller, which can have significant security and scope implications.
`,

  // problem explanation--> 146
  "const-enum-pattern": `
### 💡 Problem Breakdown
JavaScript does not have a built-in \`enum\` type like some other languages. A common pattern to create a safe, simple enumeration is to use a plain object, declared with \`const\`, and then freeze it with \`Object.freeze()\`.

### ⚙️ Solution Walkthrough
A \`STATUS\` enum is created.
\`\`\`javascript
const STATUS = Object.freeze({
  PENDING: 'pending',
  COMPLETE: 'complete',
  FAILED: 'failed'
});
// Now STATUS.PENDING can be used, but STATUS cannot be reassigned,
// and its properties cannot be changed.
\`\`\`
This pattern provides a single source of truth for a set of related constants.

### 📚 Key Concepts
- **Enum (Enumeration)**: A data type consisting of a set of named values.
- **\`Object.freeze()\`**: Used to make the enum object immutable.
`,

  // problem explanation--> 147
  "destructuring-and-rename-rest": `
### 💡 Problem Breakdown
This problem combines three powerful destructuring features: extracting a property, renaming it (aliasing), and collecting all other properties into a new object.

### ⚙️ Solution Walkthrough
The \`id\` property is extracted and renamed to \`userID\`, and the rest are collected.
\`\`\`javascript
const user = { id: 99, name: 'Zoe', active: true };
const { id: userID, ...otherInfo } = user;
// userID is 99
// otherInfo is { name: 'Zoe', active: true }
\`\`\`
### 📚 Key Concepts
- **Composability**: Destructuring features can be combined in a single expression for powerful data extraction.
`,

  // problem explanation--> 148
  "global-scope-without-window": `
### 💡 Problem Breakdown
This is a conceptual problem about the global scope in a Web Worker. A Web Worker runs in a separate thread from the main browser UI thread. As such, it has its own, distinct global scope. It does not have access to the main thread's \`window\` object or the DOM.

### ⚙️ Solution Walkthrough
In a worker script:
\`\`\`javascript
// inside worker.js
console.log(self); // Logs the WorkerGlobalScope
console.log(self === this); // true
// console.log(window); // ReferenceError: window is not defined
\`\`\`
The global scope in a worker is referenced by the keyword \`self\`.

### 📚 Key Concepts
- **Web Workers**: Provide a multi-threaded environment in the browser.
- **\`WorkerGlobalScope\`**: The name of the global scope object inside a worker.
`,

  // problem explanation--> 149
  "scope-of-default-parameters": `
### 💡 Problem Breakdown
This is an advanced scope concept. The default values of function parameters are evaluated in an **intermediate scope** that exists between the scope where the function is defined and the scope of the function's body.

### ⚙️ Solution Walkthrough
A default parameter captures the global \`x\`.
\`\`\`javascript
let x = 'global';
function test(a = x) { // 'a' is evaluated. It looks for 'x' and finds the global one.
  let x = 'inner'; // This 'x' is in the function body's scope.
  return a; // Returns the value captured by the parameter, which was 'global'.
}
test(); // returns 'global'
\`\`\`
### 📚 Key Concepts
- **Parameter Scope**: A special, intermediate scope for evaluating default parameter values.
`,

  // problem explanation--> 150
  "automatic-semicolon-insertion": `
### 💡 Problem Breakdown
JavaScript has a feature called Automatic Semicolon Insertion (ASI) where the parser automatically inserts semicolons at the end of lines if they are missing. This can lead to unexpected behavior, especially with the \`return\` statement.

### ⚙️ Solution Walkthrough
A newline after \`return\` causes a semicolon to be inserted.
\`\`\`javascript
function test() {
  return // <-- ASI inserts a semicolon here!
  {
    value: 1 // This becomes unreachable code.
  }
}
test(); // returns undefined
\`\`\`
The code is interpreted as \`return;\`, and the function returns \`undefined\` before the object literal is ever reached.

### 📚 Key Concepts
- **ASI (Automatic Semicolon Insertion)**: A JavaScript feature that can sometimes lead to bugs. It's a key reason why opening curly braces are conventionally placed on the same line.
`,

  // problem explanation--> 151
  "object-is-vs-triple-equals": `
### 💡 Problem Breakdown
This problem highlights the subtle but important differences between \`Object.is()\` and the strict equality operator (\`===\`), specifically regarding \`NaN\` values and signed zeros.

### ⚙️ Solution Walkthrough
While \`Object.is()\` behaves identically to \`===\` for most values, it differs in two critical edge cases:

\`\`\`javascript
// NaN comparison
NaN === NaN;    // false (problematic)
Object.is(NaN, NaN); // true (correct)

// Signed zero comparison
0 === -0;       // true (hides distinction)
Object.is(0, -0);    // false (preserves distinction)
\`\`\`

### 📚 Key Concepts
- **SameValue vs Strict Equality**: \`Object.is()\` implements the "SameValue" algorithm defined in the ECMAScript specification.
- **\`NaN\` Handling**: \`Object.is()\` correctly identifies that two \`NaN\` values represent the same invalid number concept.
- **Signed Zeros**: JavaScript distinguishes between positive zero (\`+0\`) and negative zero (\`-0\`), and \`Object.is()\` preserves this distinction while \`===\` does not.
- **Practical Use**: Use \`Object.is()\` when you need precise value identity checking, particularly in mathematical computations and library implementations where these edge cases matter.
`,
  // problem explanation--> 152
  "global-let-in-modules": `
### 💡 Problem Breakdown
This is a conceptual problem about the scope of variables in ES Modules. Unlike classic scripts, ES modules have their own top-level scope. A variable declared with \`let\`, \`const\`, or even \`var\` at the top level of a module is **local to that module**. It does not become a global variable accessible in other modules or on the \`window\` object.

### ⚙️ Solution Walkthrough
- **\`moduleA.js\`**: \`let x = 10;\`
- **\`moduleB.js\`**: \`import './moduleA.js'; console.log(x); // ReferenceError\`

The variable \`x\` is private to \`moduleA.js\` unless it is explicitly exported (\`export let x = 10;\`) and imported.

### 📚 Key Concepts
- **Module Scope**: A key feature of ES Modules that provides strong encapsulation and prevents global scope pollution.
`,

  // problem explanation--> 153
  "destructure-from-generator": `
### 💡 Problem Breakdown
A generator function, when called, returns an iterator object. This iterator object is an **iterable**, which means it can be used with array destructuring.

### ⚙️ Solution Walkthrough
Values are destructured from a generator's iterator.
\`\`\`javascript
function* myGen() {
  yield 1;
  yield 2;
}
const [a, b] = myGen();
// 'a' is 1, 'b' is 2
\`\`\`
The destructuring assignment will call the iterator's \`.next()\` method as many times as there are variables in the pattern, assigning the \`value\` from each result.

### 📚 Key Concepts
- **Generators and Iterables**: Generators provide a simple way to create iterable objects.
`,

  // problem explanation--> 154
  "immutable-array-push": `
### 💡 Problem Breakdown
This demonstrates a core pattern of immutable programming. Instead of mutating an array by calling \`.push()\`, you create a **new** array that contains all the elements of the original, plus the new element. The spread syntax (\`...\`) makes this very clean.

### ⚙️ Solution Walkthrough
A new array is created with an added element.
\`\`\`javascript
const original = [1, 2];
const updated = [...original, 3];
// original is still [1, 2]
// updated is [1, 2, 3]
\`\`\`

### 📚 Key Concepts
- **Immutability**: The practice of not changing data structures, but instead creating new ones with the updated data.
- **Spread Syntax**: A concise way to copy array elements into a new array.
`,

  // problem explanation--> 155
  "immutable-array-pop": `
### 💡 Problem Breakdown
This problem demonstrates how to perform an immutable "pop" operation on an array. The goal is to create a new array that is identical to the original except without the last element, leaving the original array unchanged. This is a common pattern in functional programming and state management systems.

### ⚙️ Solution Walkthrough
The \`.slice()\` method is used to create a shallow copy of the array up to the second-to-last element.
\`\`\`javascript
const original = [1, 2, 3];
const updated = original.slice(0, -1);
// original is still [1, 2, 3]
// updated is [1, 2]
\`\`\`
The arguments to \`.slice(0, -1)\` mean "start from index 0 and end at the index that is 1 before the last element."

### 📚 Key Concepts
- **Immutability**: Avoiding direct modifications to data structures to make code more predictable and easier to debug.
- **\`.slice()\`**: A non-mutating array method that returns a new array containing a portion of the original.
`,
  // problem explanation--> 156
  "immutable-object-delete": `
### 💡 Problem Breakdown
This shows a modern, immutable pattern for "deleting" a property from an object. Instead of using the \`delete\` operator (which mutates the object), you create a new object that contains all properties *except* the one you want to remove.

### ⚙️ Solution Walkthrough
Object destructuring and the rest syntax are combined for this.
\`\`\`javascript
const original = { a: 1, b: 2, c: 3 };
const { b, ...rest } = original;
// New object is missing 'b': { a: 1, c: 3 }
\`\`\`
The \`b\` property is destructured out, and the remaining properties are collected into a new object using the rest syntax.

### 📚 Key Concepts
- **Rest Properties**: Using \`...\` to collect remaining object properties
- **Immutable Update**: Creating new objects instead of mutating existing ones
`,

  // problem explanation--> 157
  "with-statement-conceptual": `
### 💡 Problem Breakdown
This explains the deprecated \`with\` statement, which was used to extend the scope chain but caused significant performance and predictability issues.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// Deprecated syntax - do not use
with (Math) {
  console.log(PI, cos(PI));
}
\`\`\`
The \`with\` statement adds an object to the scope chain, making its properties available as local variables.

### 📚 Key Concepts
- **Scope Chain Pollution**: \`with\` modifies the scope chain dynamically
- **Performance Issues**: Prevents JavaScript engine optimizations
- **Strict Mode**: \`with\` is forbidden in strict mode
`,

  // problem explanation--> 158
  "let-in-switch-fallthrough": `
### 💡 Problem Breakdown
This demonstrates how \`let\` declarations in \`switch\` statements work with case fallthrough and the Temporal Dead Zone.

### ⚙️ Solution Walkthrough
\`\`\`javascript
switch (1) {
  case 1:
    let x = 1; // TDZ starts
    break;
  case 2:
    // console.log(x); // ReferenceError: x is in TDZ
    break;
}
\`\`\`
Each \`case\` doesn't create a new block scope, so \`let\` declarations are visible to subsequent cases.

### 📚 Key Concepts
- **Switch Scope**: The entire \`switch\` is one block scope
- **TDZ in Switch**: Variables declared with \`let\` are in TDZ until declared
`,

  // problem explanation--> 159
  "destructuring-and-getters": `
### 💡 Problem Breakdown
This shows that destructuring invokes getter functions on objects, which can have side effects.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const obj = {
  get value() {
    console.log('Getter called');
    return 42;
  }
};
const { value } = obj; // Logs "Getter called"
\`\`\`
The getter function is executed during the destructuring process.

### 📚 Key Concepts
- **Getter Invocation**: Destructuring triggers property getters
- **Side Effects**: Getters can have unintended side effects
`,

  // problem explanation--> 160
  "destructuring-and-setters": `
### 💡 Problem Breakdown
This demonstrates that destructuring assignment can invoke setter functions when assigning to object properties.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const obj = {
  set value(val) {
    console.log('Setter called with:', val);
  }
};
({ value: obj.value } = { value: 42 }); // Logs "Setter called with: 42"
\`\`\`
The setter is triggered during the assignment phase of destructuring.

### 📚 Key Concepts
- **Setter Invocation**: Destructuring assignment triggers setters
- **Assignment Patterns**: Complex destructuring can have side effects
`,
  // problem explanation--> 161
  "scope-of-class-static-blocks": `
### 💡 Problem Breakdown
This explains the scope and behavior of static initialization blocks in ES2022 classes, which allow complex static initialization logic.

### ⚙️ Solution Walkthrough
\`\`\`javascript
class MyClass {
  static #privateStaticField;
  
  static {
    // This block runs once when class is defined
    this.#privateStaticField = computeComplexValue();
    console.log('Static block executed');
  }
}
\`\`\`
Static blocks have access to private static fields and run during class evaluation.

### 📚 Key Concepts
- **Static Initialization**: One-time setup for static class members
- **Private Access**: Static blocks can access private static fields
- **Execution Timing**: Runs when class is defined, not instantiated
`,

  // problem explanation--> 162
  "block-scope-functions-strict": `
### 💡 Problem Breakdown
This demonstrates how function declarations behave differently in blocks under strict mode vs non-strict mode.

### ⚙️ Solution Walkthrough
\`\`\`javascript
'use strict';
if (true) {
  function blockScoped() {
    return "I'm block-scoped in strict mode";
  }
}
// blockScoped(); // ReferenceError in strict mode
\`\`\`
In strict mode, function declarations are block-scoped like let/const variables.

### 📚 Key Concepts
- **Strict Mode**: Changes function declaration behavior
- **Block Scoping**: Functions follow let/const scoping rules in strict mode
- **Browser Compatibility**: Behavior was inconsistent before ES6
`,

  // problem explanation--> 163
  "const-with-object-defineproperty": `
### 💡 Problem Breakdown
This shows that const prevents reassignment but doesn't prevent property modification via Object.defineProperty.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const obj = { value: 1 };
Object.defineProperty(obj, 'value', {
  value: 2,
  writable: false
});
// obj.value is now 2 and cannot be changed
\`\`\`
const protects the variable binding, not the object's mutability.

### 📚 Key Concepts
- **Binding vs Mutability**: const protects the reference, not the object
- **Property Descriptors**: Object.defineProperty can modify const object properties
- **Immutability Levels**: Different ways to achieve immutability in JS
`,

  // problem explanation--> 164
  "destructuring-proxy": `
### 💡 Problem Breakdown
This demonstrates how destructuring interacts with Proxy objects and their traps.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const proxy = new Proxy({ a: 1, b: 2 }, {
  get(target, prop) {
    console.log('Accessed:', prop);
    return target[prop];
  }
});
const { a, b } = proxy; // Triggers get trap for both properties
\`\`\`
Destructuring a Proxy triggers get traps for each accessed property.

### 📚 Key Concepts
- **Proxy Traps**: Destructuring activates get traps
- **Transparent Proxying**: Proxies can intercept destructuring operations
- **Meta Programming**: Advanced JavaScript feature for intercepting operations
`,

  // problem explanation--> 165
  "freezing-const-array-of-objects": `
### 💡 Problem Breakdown
This shows that Object.freeze() is shallow and doesn't freeze nested objects in arrays.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const users = [{ name: 'Alice' }, { name: 'Bob' }];
Object.freeze(users);
users[0].name = 'Eve'; // This works - freeze is shallow
// users.push({}) would fail
\`\`\`
Only the array structure is frozen, not the objects it contains.

### 📚 Key Concepts
- **Shallow Freeze**: Object.freeze doesn't recurse into nested objects
- **Deep Freeze Pattern**: Need custom function for complete immutability
- **Array Contents**: Array elements remain mutable after freezing array
`,

  // problem explanation--> 166
  "let-vs-var-deep-dive": `
### 💡 Problem Breakdown
This provides a comprehensive comparison of let and var scoping differences.

### ⚙️ Solution Walkthrough
\`\`\`javascript
function test() {
  if (true) {
    var functionScoped = 'I exist throughout function';
    let blockScoped = 'I exist only in this block';
  }
  console.log(functionScoped); // Works
  // console.log(blockScoped); // ReferenceError
}
\`\`\`
let is block-scoped while var is function-scoped.

### 📚 Key Concepts
- **Block Scope**: let respects {} boundaries
- **Function Scope**: var ignores block boundaries
- **Temporal Dead Zone**: let variables can't be accessed before declaration
`,

  // problem explanation--> 167
  "tdz-circular-reference-params": `
### 💡 Problem Breakdown
This demonstrates Temporal Dead Zone issues with circular references in default parameters.

### ⚙️ Solution Walkthrough
\`\`\`javascript
function circular(a = b, b = a) {
  return [a, b];
}
// circular(); // ReferenceError: b is not defined
\`\`\`
Parameters are evaluated left-to-right, creating TDZ issues for circular references.

### 📚 Key Concepts
- **Parameter Evaluation Order**: Left to right evaluation
- **Circular References**: Default parameters can't reference later parameters
- **TDZ in Parameters**: Parameters have their own temporal dead zone
`,

  // problem explanation--> 168
  "const-object-as-namespace": `
### 💡 Problem Breakdown
This shows how to use const objects as namespaces to organize code and avoid global pollution.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const MathUtils = {
  PI: 3.14159,
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; }
};
MathUtils.add(2, 3); // 5
\`\`\`
Const objects provide a way to group related functionality.

### 📚 Key Concepts
- **Namespacing**: Organizing code into logical groups
- **Global Pollution**: Avoiding too many global variables
- **Module Pattern**: Precursor to ES6 modules
`,

  // problem explanation--> 169
  "destructuring-null-default": `
### 💡 Problem Breakdown
This demonstrates that destructuring defaults only work for undefined, not null.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const { a = 'default' } = { a: null };
// a is null, not 'default'
\`\`\`
Default values in destructuring are only applied for undefined, not other falsy values.

### 📚 Key Concepts
- **Default Values**: Only trigger for undefined
- **Null vs Undefined**: Different semantics in destructuring
- **Falsy Values**: null, 0, '' don't trigger defaults
`,

  // problem explanation--> 170
  "tdz-and-eval": `
### 💡 Problem Breakdown
This shows that eval() respects the Temporal Dead Zone of its surrounding scope.

### ⚙️ Solution Walkthrough
\`\`\`javascript
function test() {
  // eval('console.log(x)'); // ReferenceError
  let x = 5;
}
\`\`\`
Code executed by eval() is subject to the same TDZ rules as regular code.

### 📚 Key Concepts
- **Eval Scope**: eval executes in current lexical context
- **TDZ Enforcement**: eval respects TDZ like regular code
- **Dynamic Code Evaluation**: eval's behavior with modern JS features
`,

  // problem explanation--> 171
  "shadowing-across-modules-conceptual": `
### 💡 Problem Breakdown
This explains that variables in different modules don't shadow each other due to module isolation.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// module1.js
export const value = 1;

// module2.js  
export const value = 2; // No conflict - modules are isolated
\`\`\`
ES modules have their own scope, preventing naming conflicts between modules.

### 📚 Key Concepts
- **Module Scope**: Each module has its own top-level scope
- **No Global Pollution**: Modules don't add to global scope by default
- **Export Isolation**: Exported names can be renamed on import
`,

  // problem explanation--> 172
  "immutable-nested-update": `
### 💡 Problem Breakdown
This demonstrates patterns for updating nested data structures immutably.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const state = {
  user: {
    profile: {
      name: 'Alice',
      age: 30
    }
  }
};

const newState = {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      age: 31
    }
  }
};
\`\`\`
Nested updates require spreading at each level of the structure.

### 📚 Key Concepts
- **Immutability Patterns**: Spread operator at each nesting level
- **Structural Sharing**: Unchanged parts are reused
- **Performance Considerations**: Deep copies can be expensive
`,

  // problem explanation--> 173
  "destructuring-arguments-object": `
### 💡 Problem Breakdown
This shows how to destructure the legacy arguments object in functions.

### ⚙️ Solution Walkthrough
\`\`\`javascript
function traditional() {
  const [first, second] = Array.from(arguments);
  return { first, second };
}
traditional(1, 2); // { first: 1, second: 2 }
\`\`\`
The arguments object must be converted to an array before destructuring.

### 📚 Key Concepts
- **Arguments Object**: Array-like but not iterable
- **Array Conversion**: Need Array.from() or spread operator
- **Rest Parameters**: Modern alternative to arguments
`,

  // problem explanation--> 174
  "var-hoisting-and-try-catch": `
### 💡 Problem Breakdown
This demonstrates that var declarations in try blocks are hoisted to the function scope.

### ⚙️ Solution Walkthrough
\`\`\`javascript
function test() {
  try {
    var x = 1;
  } catch (e) {}
  console.log(x); // 1 - var is hoisted to function scope
}
\`\`\`
var declarations are hoisted regardless of block structure.

### 📚 Key Concepts
- **Hoisting Behavior**: var ignores block boundaries
- **Function Scope**: var is always function-scoped
- **Try-Catch Blocks**: Don't create scope for var declarations
`,

  // problem explanation--> 175
  "const-and-proxy": `
### 💡 Problem Breakdown
This shows that const prevents reassignment but doesn't prevent Proxy interception.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const target = { value: 1 };
const proxy = new Proxy(target, {
  set(obj, prop, value) {
    console.log('Setting', prop, value);
    obj[prop] = value;
    return true;
  }
});

proxy.value = 2; // Logs "Setting value 2"
\`\`\`
const protects the reference to the Proxy, not the Proxy's behavior.

### 📚 Key Concepts
- **Reference Immutability**: const protects the variable binding
- **Proxy Interception**: Proxies can still intercept operations
- **Object Mutability**: The proxied object remains mutable
`,

  // problem explanation--> 176
  "using-well-known-symbols": `
### 💡 Problem Breakdown
This demonstrates using built-in Symbols like Symbol.iterator to customize object behavior.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const iterableObject = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const num of iterableObject) {
  console.log(num); // 1, 2, 3
}
\`\`\`
Well-known Symbols allow objects to customize built-in behaviors.

### 📚 Key Concepts
- **Protocol Customization**: Symbols allow objects to implement protocols
- **Iterator Protocol**: Symbol.iterator makes objects iterable
- **Built-in Behaviors**: Many JS features use Symbol-based protocols
`,

  // problem explanation--> 177
  "hoisting-and-new-function": `
### 💡 Problem Breakdown
This shows that functions created with new Function() don't capture their creation scope.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const x = 1;
const dynamicFn = new Function('return x');
// dynamicFn(); // ReferenceError: x is not defined
\`\`\`
new Function() creates functions in the global scope, not the current lexical scope.

### 📚 Key Concepts
- **Dynamic Function Creation**: new Function() creates functions at runtime
- **Scope Isolation**: Dynamic functions don't capture lexical environment
- **Global Scope**: Dynamic functions execute in global context
`,

  // problem explanation--> 178
  "destructuring-rename-and-rest": `
### 💡 Problem Breakdown
This demonstrates combining property renaming with rest collection in destructuring.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };
const { a: first, ...rest } = obj;
// first = 1, rest = { b: 2, c: 3 }
\`\`\`
You can rename a property while collecting the remaining properties.

### 📚 Key Concepts
- **Property Renaming**: : syntax for assigning to different variable names
- **Rest Properties**: ... collects remaining properties
- **Combined Syntax**: Using both features together
`,

  // problem explanation--> 179
  "arrow-function-param-scope": `
### 💡 Problem Breakdown
This explains that arrow function parameters follow the same scoping rules as regular functions.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const x = 1;
const arrow = (a = x, b = a) => [a, b];
arrow(); // [1, 1] - parameters can reference outer scope and each other
\`\`\`
Arrow function parameters have their own scope and can reference outer variables.

### 📚 Key Concepts
- **Parameter Scope**: Arrow functions have parameter scope like regular functions
- **Default Parameters**: Can reference outer scope and previous parameters
- **Lexical This**: Arrow functions don't have their own this, but parameters work normally
`,

  // problem explanation--> 180
  "var-leakage-named-function-expression": `
### 💡 Problem Breakdown
This explains a historical issue where named function expressions could leak variables in some browsers.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// Old browser bug behavior (mostly fixed now):
var f = function g() {};
// typeof g might be 'function' in some old browsers
\`\`\`
This was an implementation bug in early JavaScript engines that has been largely fixed.

### 📚 Key Concepts
- **Historical Bug**: Early JS engines incorrectly exposed function expression names
- **Scope Pollution**: Bug caused unwanted variable creation
- **Modern Compliance**: Current engines follow the specification correctly
`,

  // problem explanation--> 181
  "global-scope-modules-vs-scripts": `
### 💡 Problem Breakdown
This explains the difference between global scope in traditional scripts vs ES modules.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// Traditional script:
var globalVar = 'I become a window property';

// ES module:
export const moduleVar = 'I stay module-scoped';
\`\`\`
Traditional scripts pollute the global scope, while modules keep variables scoped to the module.

### 📚 Key Concepts
- **Global Pollution**: Traditional scripts add properties to global object
- **Module Isolation**: ES modules have their own top-level scope
- **Strict Mode**: Modules automatically use strict mode
`,

  // problem explanation--> 182
  "destructuring-primitive-wrappers": `
### 💡 Problem Breakdown
This shows that destructuring primitives temporarily wraps them in objects to access properties.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const { length } = 'hello'; // length = 5
// Equivalent to: const length = new String('hello').length;
\`\`\`
JavaScript temporarily wraps primitives in objects when accessing properties.

### 📚 Key Concepts
- **Primitive Wrappers**: Temporary object creation for property access
- **Autoboxing**: Automatic conversion between primitives and wrapper objects
- **String Properties**: Strings have properties like length despite being primitives
`,

  // problem explanation--> 183
  "shadowing-built-in-globals": `
### 💡 Problem Breakdown
This demonstrates that local variables can shadow built-in global objects like Array, Object, etc.

### ⚙️ Solution Walkthrough
\`\`\`javascript
function test() {
  const Array = 'I shadow the global Array';
  console.log(Array); // 'I shadow the global Array'
  // new Array() would now throw an error
}
\`\`\`
Local variables with names of built-in globals will shadow the global versions.

### 📚 Key Concepts
- **Name Shadowing**: Local variables can override global names
- **Built-in Objects**: Array, Object, String, etc. can be shadowed
- **Name Conflicts**: Potential pitfalls of shadowing built-ins
`,

  // problem explanation--> 184
  "const-with-weakmap-keys": `
### 💡 Problem Breakdown
This explains that const doesn't prevent WeakMap keys from being garbage collected.

### ⚙️ Solution Walkthrough
\`\`\`javascript
let key = { id: 1 };
const map = new WeakMap();
map.set(key, 'value');

key = null; // The object can now be garbage collected
\`\`\`
WeakMap keys are weakly held, so they can be collected even if referenced by a const variable.

### 📚 Key Concepts
- **Weak References**: WeakMap keys don't prevent garbage collection
- **Memory Management**: WeakMaps are useful for metadata and caches
- **Const vs Garbage Collection**: const doesn't affect reachability
`,

  // problem explanation--> 185
  "variable-declarations-and-performance": `
### 💡 Problem Breakdown
This discusses the performance implications of different variable declaration patterns.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// Modern engines can optimize const better than var
const fixedValue = 1; // Potentially better optimization
let changingValue = 1; // May require more runtime checks
\`\`\`
Modern JavaScript engines can make better optimization decisions with const and let.

### 📚 Key Concepts
- **Optimization Hints**: const gives engines more information for optimization
- **Temporal Dead Zone**: let/const have different initialization patterns
- **Modern Engines**: Current JS engines heavily optimize variable access
`,

  // problem explanation--> 186
  "destructuring-property-access-order": `
### 💡 Problem Breakdown
This explains that property access during destructuring happens in source object order.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const obj = {
  get a() { console.log('a'); return 1; },
  get b() { console.log('b'); return 2; }
};
const { b, a } = obj; // Logs 'a' then 'b'
\`\`\`
Properties are accessed in the order they exist in the source object, not the destructuring pattern.

### 📚 Key Concepts
- **Property Order**: Access follows source object enumeration order
- **Getter Invocation**: Getters are called during destructuring
- **Side Effects**: Destructuring can have observable side effects
`,

  // problem explanation--> 187
  "global-var-and-delete": `
### 💡 Problem Breakdown
This shows that global var declarations create non-configurable properties that can't be deleted.

### ⚙️ Solution Walkthrough
\`\`\`javascript
var globalVar = 1;
delete window.globalVar; // false - cannot delete

window.globalProp = 2;
delete window.globalProp; // true - can delete
\`\`\`
var declarations in global scope create non-configurable properties.

### 📚 Key Concepts
- **Property Attributes**: var creates non-configurable properties
- **Delete Operator**: Only works on configurable properties
- **Global Object**: var adds properties to global object (window in browsers)
`,

  // problem explanation--> 188
  "tdz-and-recursion": `
### 💡 Problem Breakdown
This demonstrates Temporal Dead Zone issues with recursive function references.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1); // ReferenceError in TDZ
};
\`\`\`
A function expression can't reference itself in its initializer due to TDZ.

### 📚 Key Concepts
- **Recursive Functions**: Function expressions can't reference themselves immediately
- **TDZ Limitations**: Variables can't be used in their own initializers
- **Named Function Workaround**: Named function expressions can reference themselves
`,

  // problem explanation--> 189
  "const-assertions-typescript": `
### 💡 Problem Breakdown
This explains TypeScript's const assertions which create deeply readonly types.

### ⚙️ Solution Walkthrough
\`\`\`typescript
// TypeScript example
const arr = [1, 2, 3] as const;
// arr is readonly [1, 2, 3] - elements can't be modified
\`\`\`
const assertions tell TypeScript to infer the most specific literal type.

### 📚 Key Concepts
- **Type Narrowing**: const assertions narrow types to literals
- **Readonly Types**: Creates deeply immutable type structures
- **TypeScript Feature**: Specific to TypeScript, not JavaScript
`,

  // problem explanation--> 190
  "scope-in-generator-functions": `
### 💡 Problem Breakdown
This explains how variable scoping works in generator functions across yields.

### ⚙️ Solution Walkthrough
\`\`\`javascript
function* generator() {
  let count = 0;
  while (true) {
    yield count++;
  }
}
const gen = generator();
gen.next(); // { value: 0, done: false }
gen.next(); // { value: 1, done: false }
\`\`\`
Generator functions maintain their variable state across yield statements.

### 📚 Key Concepts
- **Generator State**: Local variables persist between yields
- **Execution Suspension**: Generators can pause and resume execution
- **Closure Preservation**: Generator closures are maintained across yields
`,

  // problem explanation--> 191
  "destructuring-invalid-identifiers": `
### 💡 Problem Breakdown
This shows how to destructure properties with names that aren't valid JavaScript identifiers.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const obj = { 'invalid-identifier': 42 };
const { 'invalid-identifier': validName } = obj;
// validName = 42
\`\`\`
You can destructure invalid identifiers by quoting them and providing a valid alias.

### 📚 Key Concepts
- **Property Names**: JavaScript allows various string values as property names
- **Identifier Rules**: Variable names have different rules than property names
- **Aliasing**: Mapping invalid identifiers to valid variable names
`,

  // problem explanation--> 192
  "var-hoisting-conditional-function": `
### 💡 Problem Breakdown
This explains the historical inconsistent behavior of function declarations in blocks.

### ⚙️ Solution Walkthrough
\`\`\`javascript
if (true) {
  function conditional() { return 'I behave differently in different browsers'; }
}
\`\`\`
Older browsers had different behaviors for function declarations in blocks.

### 📚 Key Concepts
- **Historical Inconsistency**: Different browsers implemented this differently
- **Strict Mode**: ES5 strict mode standardized the behavior
- **Legacy Code**: Older code may rely on specific browser behaviors
`,

  // problem explanation--> 193
  "let-and-const-with-proxy-traps": `
### 💡 Problem Breakdown
This shows that Proxy traps respect the Temporal Dead Zone for let and const.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const proxy = new Proxy({}, {
  get(target, prop) {
    // This would throw if prop is in TDZ
    return target[prop];
  }
});

// let x = proxy.someProperty; // Could cause TDZ error
\`\`\`
Proxy traps can't access variables that are in the Temporal Dead Zone.

### 📚 Key Concepts
- **TDZ Enforcement**: Proxies respect the Temporal Dead Zone
- **Trap Limitations**: Some operations can't be intercepted due to TDZ
- **Security Implications**: TDZ prevents some meta-programming patterns
`,

  // problem explanation--> 194
  "immutable-update-structuredclone": `
### 💡 Problem Breakdown
This introduces the structuredClone() API for deep copying objects immutably.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const original = { nested: { value: 1 } };
const copy = structuredClone(original);
copy.nested.value = 2; // Does not affect original
\`\`\`
structuredClone() creates a deep copy that can be safely mutated.

### 📚 Key Concepts
- **Deep Copying**: structuredClone() recursively copies objects
- **Immutable Updates**: Safe pattern for updating nested data
- **Browser API**: Modern browser feature (Node.js has similar utilities)
`,

  // problem explanation--> 195
  "shadowing-with-with-statement": `
### 💡 Problem Breakdown
This explains how the deprecated with statement can cause unexpected variable shadowing.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const x = 1;
const obj = { x: 2 };

with (obj) {
  console.log(x); // 2 - obj.x shadows outer x
}
\`\`\`
The with statement adds an object's properties to the scope chain, causing shadowing.

### 📚 Key Concepts
- **With Statement**: Deprecated feature that modifies scope chain
- **Unpredictable Shadowing**: Hard to predict which variable will be accessed
- **Performance Issues**: with prevents many JavaScript optimizations
`,

  // problem explanation--> 196
  "destructuring-empty-source": `
### 💡 Problem Breakdown
This shows the behavior of destructuring when the source is empty or doesn't have expected properties.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const [a = 1] = []; // a = 1 (default used)
const { b = 2 } = {}; // b = 2 (default used)
const { c } = null; // TypeError
\`\`\`
Destructuring handles empty sources gracefully with defaults, but null/undefined cause errors.

### 📚 Key Concepts
- **Empty Values**: Arrays/objects without expected properties
- **Default Values**: Used when property doesn't exist
- **Null Sources**: Destructuring null/undefined throws errors
`,

  // problem explanation--> 197
  "scope-of-class-fields": `
### 💡 Problem Breakdown
This explains how class fields are scoped and initialized in modern JavaScript classes.

### ⚙️ Solution Walkthrough
\`\`\`javascript
class Example {
  instanceField = 'per instance';
  static staticField = 'per class';
}
\`\`\`
Instance fields are created per instance, static fields are created per class.

### 📚 Key Concepts
- **Instance Fields**: Each instance gets its own copy
- **Static Fields**: Shared across all instances
- **Field Initialization**: Happens at object construction time
`,

  // problem explanation--> 198
  "var-in-nodejs-repl": `
### 💡 Problem Breakdown
This explains the special behavior of var in Node.js REPL vs Node.js modules.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// In Node.js REPL:
var x = 1;
global.x; // 1 - var creates global properties in REPL

// In Node.js module:
var y = 2;
global.y; // undefined - var is module-scoped in files
\`\`\`
Node.js REPL behaves differently from Node.js modules for historical reasons.

### 📚 Key Concepts
- **REPL vs Modules**: Different scoping rules in different environments
- **Global Pollution**: var in REPL pollutes global object
- **Module Scope**: var in modules is scoped to the module
`,

  // problem explanation--> 199
  "destructuring-and-symbols": `
### 💡 Problem Breakdown
This shows how to destructure properties keyed by Symbols.

### ⚙️ Solution Walkthrough
\`\`\`javascript
const sym = Symbol('key');
const obj = { [sym]: 'value' };
const { [sym]: value } = obj; // value = 'value'
\`\`\`
You can destructure Symbol-keyed properties using computed property syntax.

### 📚 Key Concepts
- **Symbol Properties**: Properties keyed by Symbols
- **Computed Property Names**: Required for Symbol keys in destructuring
- **Unique Keys**: Symbols create unique property keys
`,

  // problem explanation--> 200
  "var-vs-let-vs-const-summary": `
### 💡 Problem Breakdown
This provides a comprehensive summary of the differences between var, let, and const.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// var - function-scoped, hoisted, can be redeclared
var x = 1;
var x = 2; // No error

// let - block-scoped, TDZ, no redeclaration
let y = 1;
// let y = 2; // SyntaxError

// const - block-scoped, must be initialized, no reassignment
const z = 1;
// z = 2; // TypeError
\`\`\`
Each declaration type has different scoping, hoisting, and mutability characteristics.

### 📚 Key Concepts
- **Scoping Differences**: function vs block scope
- **Hoisting Behavior**: var vs let/const hoisting
- **Mutability**: const vs let/var reassignment rules
- **Modern Best Practices**: Prefer const, then let, avoid var
`,
};
