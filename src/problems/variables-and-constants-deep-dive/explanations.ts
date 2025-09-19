
export const explanations: Record<string, string> = {
  // problem--> 01
  'declare-with-var': `
### 💡 Problem Breakdown
The \`var\` keyword is the original way to declare variables in JavaScript. It creates a function-scoped or globally-scoped variable.

### ⚙️ Solution Walkthrough
The solver declares a variable \`myVar\` using \`var\` and assigns it the provided value.
\`\`\`javascript
var myVar = 'Hello';
console.log(myVar); // "Hello"
\`\`\`
While functional, \`var\` has hoisting behaviors and scoping rules that can be confusing, which is why \`let\` and \`const\` are preferred in modern JavaScript.

### 📚 Key Concepts
- **\`var\`**: A keyword for variable declaration.
- **Function Scope**: Variables declared with \`var\` are accessible anywhere within the function they are declared in.
`,
  // problem--> 02
  'declare-with-let': `
### 💡 Problem Breakdown
The \`let\` keyword, introduced in ES6 (2015), is the modern way to declare variables that can be reassigned. Its key feature is that it is **block-scoped**.

### ⚙️ Solution Walkthrough
The solver declares a variable \`myLet\` using \`let\` and assigns it a value.
\`\`\`javascript
let myLet = 100;
console.log(myLet); // 100
\`\`\`
Using \`let\` avoids many of the common issues associated with \`var\`, such as its unusual hoisting behavior and lack of block scope.

### 📚 Key Concepts
- **\`let\`**: A keyword for block-scoped variable declaration.
- **Block Scope**: A variable declared with \`let\` is only accessible within the block (\`{...}\`) it is defined in.
`,
  // problem--> 03
  'declare-with-const': `
### 💡 Problem Breakdown
The \`const\` keyword (ES6) is used to declare constants. A constant is a variable whose value cannot be changed through reassignment. Like \`let\`, it is **block-scoped**.

### ⚙️ Solution Walkthrough
The solver declares a constant \`myConst\` and assigns it a value.
\`\`\`javascript
const myConst = 'Constant';
console.log(myConst); // "Constant"
\`\`\`
It's a best practice to use \`const\` by default for all variable declarations and only switch to \`let\` if you know you'll need to reassign the variable.

### 📚 Key Concepts
- **\`const\`**: A keyword for block-scoped constant declaration.
- **Reassignment**: \`const\` prevents the variable identifier from being reassigned to a new value.
`,
  // problem--> 04
  'reassign-let-variable': `
### 💡 Problem Breakdown
Variables declared with \`let\` are mutable, meaning their value can be changed after they are declared. This problem demonstrates this fundamental behavior.

### ⚙️ Solution Walkthrough
A variable is declared and initialized, then a new value is assigned to it.
\`\`\`javascript
let reassignable = 'Initial';
console.log(reassignable); // "Initial"
reassignable = 'Reassigned';
console.log(reassignable); // "Reassigned"
\`\`\`

### 📚 Key Concepts
- **Mutability**: The ability of a variable's value to be changed.
- **Assignment Operator (\`=\`)**: Used to assign a value to a variable.
`,
  // problem--> 05
  'const-reassignment-primitive': `
### 💡 Problem Breakdown
The \`const\` declaration creates a read-only reference to a value. This means the variable identifier cannot be reassigned. This problem tests the fundamental behavior of \`const\` with primitive data types.

### ⚙️ Solution Walkthrough
When you attempt to assign a new value to a constant variable, JavaScript will throw a \`TypeError\`.
\`\`\`javascript
const myConst = 10;
myConst = 20; // -> TypeError: Assignment to constant variable.
\`\`\`
The solver captures this expected error to demonstrate the concept.

### 📚 Key Concepts
- **\`const\`**: Creates a block-scoped constant.
- **Reassignment**: The action of assigning a new value to an already declared variable identifier.
- **Immutability (of binding)**: \`const\` creates an immutable *binding*. The variable name is permanently bound to its initial value.
`,
  // problem--> 06
  'uninitialized-variable': `
### 💡 Problem Breakdown
When a variable is declared but not given a value at the same time, JavaScript automatically assigns it the special primitive value \`undefined\`.

### ⚙️ Solution Walkthrough
A variable \`myVar\` is declared without an equals sign. When its value is checked, it is \`undefined\`.
\`\`\`javascript
let myVar;
console.log(myVar); // undefined
\`\`\`
This is different from a variable that hasn't been declared at all, which would cause a \`ReferenceError\`.

### 📚 Key Concepts
- **\`undefined\`**: A primitive type and value in JavaScript that represents the absence of an assigned value.
`,
  // problem--> 07
  'const-must-be-initialized': `
### 💡 Problem Breakdown
Because \`const\` variables cannot be reassigned, JavaScript requires that they be given a value at the same time they are declared. Attempting to declare a \`const\` without an initial value is a syntax error.

### ⚙️ Solution Walkthrough
This is a conceptual problem. Executing code like this would prevent the script from running.
\`\`\`javascript
const myConst; // -> SyntaxError: Missing initializer in const declaration
\`\`\`
The JavaScript engine needs to know the value that the constant will hold for its entire lifetime at the moment of its creation.

### 📚 Key Concepts
- **Initialization**: The act of assigning an initial value to a variable at the time of its declaration.
- **SyntaxError**: An error that occurs when code violates the grammatical rules of the JavaScript language.
`,
  // problem--> 08
  'variable-naming-rules': `
### 💡 Problem Breakdown
JavaScript has specific rules for variable names (identifiers):
1.  Names can contain letters, digits, underscores, and dollar signs.
2.  Names must begin with a letter, a dollar sign (\`$\`), or an underscore (\`_\`).
3.  Names cannot begin with a number.
4.  Names are case-sensitive.
5.  Reserved keywords (like \`let\`, \`const\`, \`function\`) cannot be used as names.

### ⚙️ Solution Walkthrough
The solver demonstrates a couple of valid names and explains why a name starting with a number is invalid.
\`\`\`javascript
// Valid
let name;
let $name;
let _name;
let name1;

// Invalid
// let 1name; // -> SyntaxError
\`\`\`

### 📚 Key Concepts
- **Identifier**: The formal name for a variable, function, or property in programming.
`,
  // problem--> 09
  'case-sensitivity': `
### 💡 Problem Breakdown
JavaScript is a case-sensitive language. This means that \`myVariable\` and \`myvariable\` are treated as two completely different variables.

### ⚙️ Solution Walkthrough
Two variables are declared with names that differ only by the case of one letter. The solver shows that they hold their own distinct values.
\`\`\`javascript
let myVariable = 'Hello';
let myvariable = 'World';

console.log(myVariable); // "Hello"
console.log(myvariable); // "World"
\`\`\`

### 📚 Key Concepts
- **Case Sensitivity**: A property of a language where uppercase and lowercase letters are treated as distinct characters.
`,
  // problem--> 10
  'type-of-variable': `
### 💡 Problem Breakdown
The \`typeof\` operator is a built-in JavaScript operator that returns a string indicating the type of the unevaluated operand. It's a fundamental tool for inspecting the data your variables hold.

### ⚙️ Solution Walkthrough
The solver declares several variables with different primitive types and uses \`typeof\` on each one to show the resulting type string.
\`\`\`javascript
const str = 'hello';
const num = 42;
const bool = true;
const uninitialized = undefined;

console.log(typeof str);  // "string"
console.log(typeof num);  // "number"
console.log(typeof bool); // "boolean"
console.log(typeof uninitialized); // "undefined"
\`\`\`

### 📚 Key Concepts
- **\`typeof\` operator**: A unary operator used to determine the data type of a variable.
- **Primitive Types**: The most basic data types in JavaScript: \`string\`, \`number\`, \`boolean\`, \`undefined\`, \`null\`, \`symbol\`, and \`bigint\`.
`,
  // problem--> 11
  'dynamic-typing': `
### 💡 Problem Breakdown
JavaScript is a dynamically-typed language. This means you do not have to specify the data type of a variable when you declare it. The variable's type is determined at runtime based on the value it currently holds, and it can change if you reassign it to a value of a different type.

### ⚙️ Solution Walkthrough
A variable \`dynamicVar\` is first assigned a number, and its type is checked. Then, it's reassigned a string, and its type is checked again, demonstrating that the type has changed.
\`\`\`javascript
let dynamicVar = 123;
console.log(typeof dynamicVar); // "number"

dynamicVar = 'hello';
console.log(typeof dynamicVar); // "string"
\`\`\`

### 📚 Key Concepts
- **Dynamic Typing**: A language feature where variable types are not explicitly declared and can change. This is in contrast to statically-typed languages like TypeScript or Java.
`,
  // problem--> 12
  'declare-multiple-variables': `
### 💡 Problem Breakdown
JavaScript allows you to declare (and initialize) multiple variables in a single statement by separating them with commas.

### ⚙️ Solution Walkthrough
Three variables, \`a\`, \`b\`, and \`c\`, are declared and initialized in one line using the \`let\` keyword.
\`\`\`javascript
let a = 1, b = 2, c = 3;
console.log(a, b, c); // 1 2 3
\`\`\`
This can be a concise way to declare related variables, but for readability, many style guides recommend declaring each variable on its own line.

### 📚 Key Concepts
- **Syntax**: The grammatical rules of a language. This demonstrates a specific syntax for variable declaration.
`,
  // problem--> 13
  'string-concatenation-vars': `
### 💡 Problem Breakdown
Concatenation is the process of joining strings together. The \`+\` operator is used to concatenate strings in JavaScript.

### ⚙️ Solution Walkthrough
Two variables holding parts of a name are declared. They are then joined together with a space in between using the \`+\` operator.
\`\`\`javascript
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName; // "John Doe"
\`\`\`

### 📚 Key Concepts
- **Concatenation**: The operation of joining character strings end-to-end.
- **Operator Overloading**: The \`+\` operator behaves differently for numbers (addition) and strings (concatenation).
`,
  // problem--> 14
  'template-literals-vars': `
### 💡 Problem Breakdown
Template literals (or template strings) are an ES6 feature that provides a more powerful and readable way to create strings. They are enclosed by backticks (\` \`) and allow for embedded expressions and variables using the \`\${...}\` syntax.

### ⚙️ Solution Walkthrough
A template literal is used to construct a sentence by embedding the \`name\` and \`age\` variables directly into the string.
\`\`\`javascript
const name = 'Alice';
const age = 30;
const sentence = \`\${name} is \${age} years old.\`;
console.log(sentence); // "Alice is 30 years old."
\`\`\`
This is generally preferred over traditional concatenation with the \`+\` operator for its improved readability.

### 📚 Key Concepts
- **Template Literals**: A modern string syntax in JavaScript.
- **String Interpolation**: The process of embedding expressions or variables within a string literal.
`,
  // problem--> 15
  'null-vs-undefined': `
### 💡 Problem Breakdown
\`null\` and \`undefined\` both represent the absence of a value, but they have different semantic meanings.
- **\`undefined\`**: Typically means a variable has been declared but not yet assigned a value. It's the default state.
- **\`null\`**: Represents the intentional absence of any object value. It must be explicitly assigned by a developer.

### ⚙️ Solution Walkthrough
The solver shows that an uninitialized variable is \`undefined\`, while another variable is explicitly set to \`null\`. It also highlights a famous legacy bug where \`typeof null\` returns \`"object"\` instead of \`"null"\`.
\`\`\`javascript
let uninitialized; // value is undefined
let hasNoValue = null; // value is null

console.log(typeof uninitialized); // "undefined"
console.log(typeof hasNoValue);   // "object" (the legacy bug)
\`\`\`

### 📚 Key Concepts
- **\`null\`**: A primitive value representing the intentional absence of an object value.
- **\`undefined\`**: A primitive value representing the absence of an assigned value.
`,
  // problem--> 16
  'global-scope-var': `
### 💡 Problem Breakdown
The global scope is the outermost scope in a JavaScript environment. Variables declared here are accessible from any other scope in the program.

### ⚙️ Solution Walkthrough
A variable is declared with \`var\` outside any function, making it global. A function then successfully accesses this variable.
\`\`\`javascript
var globalVar = "I am everywhere!";

function accessGlobal() {
    return globalVar; // Accesses the variable from the outer scope
}
accessGlobal(); // "I am everywhere!"
\`\`\`
Over-reliance on global variables is generally discouraged as it can lead to naming conflicts and hard-to-debug code.

### 📚 Key Concepts
- **Global Scope**: The top-level scope.
- **Scope Chain Lookup**: When a variable isn't found in the current scope, the JavaScript engine looks up the scope chain until it reaches the global scope.
`,
  // problem--> 17
  'function-scope-var': `
### 💡 Problem Breakdown
Variables declared with \`var\` are "function-scoped." This means they are accessible anywhere within the function they are declared in, regardless of blocks, but not outside of it.

### ⚙️ Solution Walkthrough
A variable \`scopedVar\` is declared with \`var\` inside a function. An attempt to access it from outside would fail with a \`ReferenceError\`.
\`\`\`javascript
function myFunction() {
    var scopedVar = "I am private to this function.";
    console.log(scopedVar);
}
myFunction(); // Logs the message
// console.log(scopedVar); // Throws a ReferenceError
\`\`\`
This is a fundamental way JavaScript encapsulates state within functions.

### 📚 Key Concepts
- **Function Scope**: The scope created by a function.
`,
  // problem--> 18
  'block-scope-let': `
### 💡 Problem Breakdown
ES6 introduced \`let\` and \`const\`, which are "block-scoped." A block is any section of code within curly braces \`{}\` (e.g., in an \`if\` statement or a \`for\` loop). Variables declared with \`let\` are only accessible within that block.

### ⚙️ Solution Walkthrough
A variable \`blockVar\` is declared inside an \`if\` block. It is not accessible after the block ends.
\`\`\`javascript
if (true) {
    let blockVar = "I am only visible in this block.";
    console.log(blockVar);
}
// console.log(blockVar); // Throws a ReferenceError
\`\`\`

### 📚 Key Concepts
- **Block Scope**: The scope created by a pair of curly braces. \`let\` and \`const\` enable this more granular level of scoping, which helps prevent bugs.
`,
  // problem--> 19
  'block-scope-const': `
### 💡 Problem Breakdown
Like \`let\`, variables declared with \`const\` are also block-scoped. They are only accessible within the \`{...}\` block where they are defined.

### ⚙️ Solution Walkthrough
A constant \`blockConst\` is declared inside a \`for\` loop block. An attempt to access it after the loop would result in a \`ReferenceError\`.
\`\`\`javascript
for (let i = 0; i < 1; i++) {
  const blockConst = "Hello";
}
// console.log(blockConst); // ReferenceError: blockConst is not defined
\`\`\`

### 📚 Key Concepts
- **Block Scope**: Both \`let\` and \`const\` follow block scoping rules, which is a major improvement over \`var\`.
`,
  // problem--> 20
  'var-no-block-scope': `
### 💡 Problem Breakdown
This problem highlights a key difference between \`var\` and \`let\`/\`const\`. \`var\` declarations are not block-scoped; they are function-scoped. This means a \`var\` declared inside a block (like an \`if\` statement) is actually "lifted" to the scope of the containing function.

### ⚙️ Solution Walkthrough
A \`var\` is declared inside an \`if\` block, but it is successfully accessed after the block has finished.
\`\`\`javascript
function testVarScope() {
  if (true) {
    var noBlock = "Visible outside the block";
  }
  return noBlock; // This works!
}
testVarScope(); // "Visible outside the block"
\`\`\`
This behavior can be a source of bugs and is a primary reason to prefer \`let\` and \`const\`.

### 📚 Key Concepts
- **Function Scope vs. Block Scope**: The critical distinction between how \`var\` and \`let\`/\`const\` handle scope.
`,
  // problem--> 21
  'variable-shadowing': `
### 💡 Problem Breakdown
Variable shadowing occurs when a variable declared within a certain scope (e.g., an inner function) has the same name as a variable in an outer scope. When this happens, the inner variable "shadows" or takes precedence over the outer one within its own scope.

### ⚙️ Solution Walkthrough
Both the outer and inner scopes have a variable named \`x\`.
\`\`\`javascript
let x = "outer";
function testShadow() {
    let x = "inner";
    return \`Inside function, x is "\${x}"\`;
}
// testShadow() returns "Inside function, x is "inner""
\`\`\`
When the code inside \`testShadow\` looks for \`x\`, it finds the one declared locally and stops searching up the scope chain.

### 📚 Key Concepts
- **Variable Shadowing**: A behavior of nested scopes that can sometimes be a source of bugs if not intended.
`,
  // problem--> 22
  'lexical-scoping': `
### 💡 Problem Breakdown
Lexical scoping (also called static scoping) means that the scope of a variable is determined by its position in the source code. A function's scope includes variables defined in its containing (parent) functions.

### ⚙️ Solution Walkthrough
A \`child\` function is defined inside a \`parent\` function. The \`child\` function can access \`parentVar\` because of lexical scoping; its scope is lexically nested inside the parent's.
\`\`\`javascript
function parent() {
    let parentVar = "Parent";
    function child() {
        return \`Child can see: \${parentVar}\`;
    }
    return child();
}
parent(); // "Child can see: Parent"
\`\`\`

### 📚 Key Concepts
- **Lexical Scoping**: The scope is defined at author-time, not run-time.
- **Closures**: Lexical scoping is the mechanism that makes closures possible.
`,
  // problem--> 23
  'scope-chain': `
### 💡 Problem Breakdown
The scope chain is the mechanism that allows a function to access variables from its containing (lexical) scopes. When a variable is used, the JavaScript engine searches the current scope, then the outer scope, then the next outer scope, and so on, up to the global scope, until it finds the variable.

### ⚙️ Solution Walkthrough
A deeply nested function \`child\` accesses variables from its parent and grandparent scopes.
\`\`\`javascript
const grandParentVar = "Grandparent";

function parent() {
    const parentVar = "Parent";
    function child() {
        return \`Child can see: \${parentVar} and \${grandParentVar}\`;
    }
    return child();
}
parent();
\`\`\`
### 📚 Key Concepts
- **Scope Chain**: The ordered list of scopes that are searched to resolve a variable's value.
`,
  // problem--> 24
  'redeclare-var': `
### 💡 Problem Breakdown
A variable declared with \`var\` can be declared again in the same scope without causing an error. The second declaration will simply overwrite the first one.

### ⚙️ Solution Walkthrough
A variable \`x\` is declared twice with \`var\`. No error occurs, and the variable holds the second value.
\`\`\`javascript
var x = 1;
var x = 2; // This is allowed
console.log(x); // 2
\`\`\`
This behavior can lead to bugs where a variable is accidentally overwritten.

### 📚 Key Concepts
- **Redeclaration**: Declaring a variable that has already been declared. \`let\` and \`const\` do not allow this in the same scope.
`,
  // problem--> 25
  'redeclare-let-error': `
### 💡 Problem Breakdown
Unlike \`var\`, you cannot redeclare the same variable within the same scope using \`let\` or \`const\`. Attempting to do so will result in a \`SyntaxError\`.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing code that would prevent a script from compiling.
\`\`\`javascript
let x = 1;
let x = 2; // -> SyntaxError: Identifier 'x' has already been declared.
\`\`\`
This feature of \`let\` and \`const\` helps prevent accidental variable redeclaration, making code safer and less prone to bugs.

### 📚 Key Concepts
- **SyntaxError**: An error indicating that the code is not syntactically valid.
`,
  // problem--> 26
  'global-scope-let': `
### 💡 Problem Breakdown
Just like \`var\`, variables declared with \`let\` at the top level of a script are in the global scope and are accessible from anywhere in the program, including inside functions.

### ⚙️ Solution Walkthrough
A variable \`globalLet\` is declared globally with \`let\`, and a function successfully accesses it.
\`\`\`javascript
let globalLet = "I am global";
function accessGlobal() {
  return globalLet;
}
accessGlobal(); // "I am global"
\`\`\`
The key difference from \`var\` is that global \`let\` variables do not become properties of the \`window\` object in browsers.

### 📚 Key Concepts
- **Global Scope**: The outermost scope accessible by all other scopes.
`,
  // problem--> 27
  'iife-scope': `
### 💡 Problem Breakdown
An Immediately Invoked Function Expression (IIFE) is a design pattern where a function is defined and executed at the same time. It's primarily used to create a private scope to avoid polluting the global namespace.

### ⚙️ Solution Walkthrough
A function expression is wrapped in parentheses, and then immediately invoked with a final pair of parentheses.
\`\`\`javascript
const result = (function() {
    var privateVar = "I'm private!";
    return \`This IIFE returned: "\${privateVar}"\`;
})();
// 'privateVar' is not accessible here in the global scope.
\`\`\`
### 📚 Key Concepts
- **IIFE**: A common pattern for creating local scopes and avoiding global variable conflicts, especially in older code before modules were common.
`,
  // problem--> 28
  'shadowing-global-variable': `
### 💡 Problem Breakdown
If a local variable is declared with the same name as a global variable, the local variable takes precedence (shadows) within its scope.

### ⚙️ Solution Walkthrough
A global variable \`color\` is declared. Inside a function, another variable named \`color\` is declared. The function uses the local one, while the global one remains unchanged.
\`\`\`javascript
let color = 'blue';
function showColor() {
  let color = 'green';
  console.log(\`Inside: \${color}\`); // "Inside: green"
}
showColor();
console.log(\`Outside: \${color}\`); // "Outside: blue"
\`\`\`

### 📚 Key Concepts
- **Variable Shadowing**: When a variable in a local scope "hides" a variable of the same name in an outer scope.
`,
  // problem--> 29
  'let-in-for-loop': `
### 💡 Problem Breakdown
This illustrates one of the most important reasons to prefer \`let\` over \`var\`. When a closure is created in a loop, \`let\` creates a new variable for each iteration, whereas \`var\` creates a single variable for the whole loop.

### ⚙️ Solution Walkthrough
A loop with an async callback (\`setTimeout\`) demonstrates the correct behavior of \`let\`.
\`\`\`javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 10);
}
// Logs: 0, 1, 2
\`\`\`
Because \`let\` is block-scoped, a new \`i\` variable is created for each iteration of the loop. Each callback closes over a *different* \`i\` variable with the correct value for that iteration.

### 📚 Key Concepts
- **Block Scope**: The critical difference between \`let\`/\`const\` and \`var\`.
`,
  // problem--> 30
  'var-in-for-loop-pitfall': `
### 💡 Problem Breakdown
This demonstrates the classic problem with using \`var\` in loops with closures. Since \`var\` is function-scoped, there is only *one* \`i\` variable for the entire loop. By the time the asynchronous callbacks execute, the loop has already finished, and the value of \`i\` is its final value.

### ⚙️ Solution Walkthrough
A loop with \`setTimeout\` shows the incorrect value being captured.
\`\`\`javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 10);
}
// Logs: 3, 3, 3
\`\`\`
All three callbacks reference the *same* \`i\` variable, which has a value of 3 after the loop terminates.

### 📚 Key Concepts
- **Closures**: The callbacks form a closure over the loop's variable.
- **Function Scope**: The root cause of the problem is that \`var\` does not create a new variable for each iteration.
`,
  // problem--> 31
  'window-object-global-var': `
### 💡 Problem Breakdown
In the context of a web browser, the global scope is represented by the \`window\` object. A unique characteristic of \`var\` is that when it's used to declare a variable in the global scope, that variable also becomes a property on the \`window\` object.

### ⚙️ Solution Walkthrough
A global \`var\` is declared and then accessed as a property of \`window\`.
\`\`\`javascript
var myGlobal = "hello";
console.log(window.myGlobal === myGlobal); // true
\`\`\`

### 📚 Key Concepts
- **Global Object**: The \`window\` object in browsers.
- **Side Effects**: This behavior can be considered a side effect and is another reason why \`let\` and \`const\` are preferred.
`,
  // problem--> 32
  'window-object-global-let': `
### 💡 Problem Breakdown
Unlike \`var\`, global variables declared with \`let\` and \`const\` are still in the global scope but are stored in a different, inaccessible location. They do **not** become properties of the \`window\` object.

### ⚙️ Solution Walkthrough
A global \`let\` is declared, and an attempt to access it on \`window\` results in \`undefined\`.
\`\`\`javascript
let myGlobalLet = "hello";
console.log(myGlobalLet); // "hello"
console.log(window.myGlobalLet); // undefined
\`\`\`
This behavior makes the global scope cleaner and avoids potential conflicts with existing properties on the \`window\` object.

### 📚 Key Concepts
- **Global Lexical Environment**: The separate memory space where global \`let\` and \`const\` variables are stored.
`,
  // problem--> 33
  'undeclared-variable-global': `
### 💡 Problem Breakdown
In non-strict mode, if you assign a value to a variable that has not been declared with \`var\`, \`let\`, or \`const\`, JavaScript will "helpfully" create a global variable for you. This is almost always a bug and is known as "leaking" a variable into the global scope.

### ⚙️ Solution Walkthrough
Inside a function, an assignment is made to an undeclared variable. It becomes a global.
\`\`\`javascript
function createGlobalLeak() {
  myLeakedVar = "I am global now";
}
createGlobalLeak();
console.log(myLeakedVar); // "I am global now"
\`\`\`

### 📚 Key Concepts
- **Strict Mode**: This behavior is a primary reason to always use strict mode, which turns this into an error.
`,
  // problem--> 34
  'strict-mode-undeclared': `
### 💡 Problem Breakdown
Strict mode is a restricted variant of JavaScript that catches common coding mistakes and "unsafe" actions. One of its key features is that it prevents accidental global variables.

### ⚙️ Solution Walkthrough
The same code from the previous problem is executed with \`'use strict';\` enabled.
\`\`\`javascript
'use strict';
function createGlobalLeak() {
  myLeakedVar = "This will throw an error";
}
// createGlobalLeak(); // -> ReferenceError: myLeakedVar is not defined
\`\`\`
By turning this silent error into a thrown error, strict mode makes your code more robust.

### 📚 Key Concepts
- **Strict Mode**: A special mode you can opt into by putting \`'use strict';\` at the top of a file or function.
`,
  // problem--> 35
  'scope-of-catch-block': `
### 💡 Problem Breakdown
The error variable declared in a \`catch (err)\` block is block-scoped to that \`catch\` block. It cannot be accessed outside of it.

### ⚙️ Solution Walkthrough
An error is thrown and caught. An attempt to access the error variable \`e\` outside the \`catch\` block would fail.
\`\`\`javascript
try {
  throw new Error("Test error");
} catch (e) {
  console.log("Inside catch:", e.message);
}
// console.log(e); // -> ReferenceError: e is not defined
\`\`\`

### 📚 Key Concepts
- **Block Scope**: The \`catch\` block creates its own declarative environment for the error variable.
`,
  // problem--> 36
  'hoisting-var-declaration': `
### 💡 Problem Breakdown
Hoisting is a JavaScript mechanism where the interpreter appears to move declarations to the top of their scope before code execution. For \`var\`, only the **declaration** is hoisted, not the **initialization** (the assignment).

### ⚙️ Solution Walkthrough
A \`var\` is accessed before its assignment. It doesn't throw a \`ReferenceError\` because it has been declared, but its value is \`undefined\`.
\`\`\`javascript
// How the engine sees it:
// var myVar;
// console.log(myVar);
// myVar = 5;

console.log(myVar); // undefined
var myVar = 5;
\`\`\`
### 📚 Key Concepts
- **Hoisting**: A core JavaScript behavior related to how execution contexts are created.
`,
  // problem--> 37
  'hoisting-function-declaration': `
### 💡 Problem Breakdown
Unlike variables, function declarations are hoisted completely—both the name and the function body are moved to the top of their scope. This allows you to call a function before it appears in your code.

### ⚙️ Solution Walkthrough
The \`hoistedFunc\` is called before its physical location in the code. This works without error.
\`\`\`javascript
const result = hoistedFunc(); 
console.log(result); // "I was hoisted!"

function hoistedFunc() {
    return "I was hoisted!";
}
\`\`\`
### 📚 Key Concepts
- **Hoisting**: Function declarations are fully hoisted.
`,
  // problem--> 38
  'hoisting-function-expression': `
### 💡 Problem Breakdown
A function expression assigned to a \`var\` has different hoisting behavior. The variable declaration (\`var expressionFunc\`) is hoisted and is \`undefined\`, but the function body itself is not.

### ⚙️ Solution Walkthrough
An attempt to call \`expressionFunc\` before its definition results in a \`TypeError\`.
\`\`\`javascript
try {
    expressionFunc(); 
} catch (e) {
    console.log(e.name); // "TypeError"
}

var expressionFunc = function() {
    console.log("This will not run yet.");
};
\`\`\`
At the time of the call, it's like trying to invoke \`undefined()\`.

### 📚 Key Concepts
- **Hoisting with \`var\`**: Only the declaration is hoisted, not the initialization.
`,
  // problem--> 39
  'temporal-dead-zone-let': `
### 💡 Problem Breakdown
Variables declared with \`let\` and \`const\` are hoisted, but they are not initialized. They are in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration is encountered. Accessing a variable in the TDZ results in a \`ReferenceError\`.

### ⚙️ Solution Walkthrough
The code attempts to access a \`let\` variable before its declaration line.
\`\`\`javascript
try {
    console.log(myLet);
} catch (e) {
    console.log(e.name); // "ReferenceError"
}
let myLet = 5;
\`\`\`
The TDZ prevents you from accidentally using a variable before it has been properly declared.

### 📚 Key Concepts
- **Temporal Dead Zone (TDZ)**: The period of time during which a \`let\` or \`const\` variable exists but cannot be accessed.
`,
  // problem--> 40
  'temporal-dead-zone-const': `
### 💡 Problem Breakdown
Like \`let\`, variables declared with \`const\` are also hoisted but remain in the Temporal Dead Zone (TDZ) until their declaration is reached.

### ⚙️ Solution Walkthrough
An attempt to access \`myConst\` before it is declared results in a \`ReferenceError\`.
\`\`\`javascript
// The TDZ for myConst starts here at the top of the block.
try {
  console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
} catch (e) {
  console.log(e.name);
}
// The TDZ for myConst ends here.
const myConst = 10;
\`\`\`

### 📚 Key Concepts
- **TDZ**: A safety feature for \`let\` and \`const\` that prevents certain types of bugs common with \`var\`.
`,
  // problem--> 41
  'typeof-in-tdz': `
### 💡 Problem Breakdown
This is an interesting edge case. The \`typeof\` operator is usually safe to use on undeclared variables (it returns \`"undefined"\`). However, if you use it on a \`let\` or \`const\` variable that is currently in its Temporal Dead Zone, it will still throw a \`ReferenceError\`.

### ⚙️ Solution Walkthrough
\`typeof\` is used on a \`let\` variable before its declaration.
\`\`\`javascript
try {
  console.log(typeof myVariable); // Throws ReferenceError
} catch (e) {
  console.log(e.name);
}
let myVariable = 123;
\`\`\`

### 📚 Key Concepts
- **TDZ**: The TDZ is a strict rule; no access of any kind is permitted before the declaration.
`,
  // problem--> 42
  'hoisting-order-var-and-function': `
### 💡 Problem Breakdown
When a variable and a function are declared with the same name in the same scope, the function declaration is hoisted with a higher priority than the variable declaration.

### ⚙️ Solution Walkthrough
Even though the \`var myValue\` appears first, the \`function myValue()\` declaration is hoisted above it.
\`\`\`javascript
console.log(typeof myValue); // "function"

var myValue = "I am a variable";

function myValue() {
  return "I am a function";
}

console.log(typeof myValue); // "string"
\`\`\`
After hoisting, the code is effectively treated as the function declaration first, then the variable assignment overwrites it.

### 📚 Key Concepts
- **Hoisting Precedence**: Functions are hoisted over variables.
`,
  // problem--> 43
  'hoisting-class-declaration': `
### 💡 Problem Breakdown
ES6 class declarations are hoisted, but like \`let\` and \`const\`, they fall into the Temporal Dead Zone. You cannot create an instance of a class before its declaration statement.

### ⚙️ Solution Walkthrough
An attempt to instantiate \`MyClass\` before it is declared results in a \`ReferenceError\`.
\`\`\`javascript
try {
  const myInstance = new MyClass();
} catch (e) {
  console.log(e.name); // "ReferenceError"
}

class MyClass {}
\`\`\`
This behavior is consistent with \`let\` and \`const\` and helps prevent bugs related to hoisting.

### 📚 Key Concepts
- **Class Declarations**: Behave like \`let\` with respect to hoisting and the TDZ.
`,
  // problem--> 44
  'var-redeclared-in-function': `
### 💡 Problem Breakdown
When a \`var\` is declared inside a function with the same name as a global variable, the local declaration is hoisted to the top of the function's scope. This can lead to confusing behavior where the global variable appears to be \`undefined\` at the start of the function.

### ⚙️ Solution Walkthrough
The \`var x = 'local'\` inside the function causes \`x\` to be treated as a local variable for the entire function scope due to hoisting.
\`\`\`javascript
var x = 'global';
function test() {
  // Hoisting makes the engine see 'var x;' here.
  console.log(x); // undefined, not 'global'
  var x = 'local';
  console.log(x); // 'local'
}
test();
\`\`\`
### 📚 Key Concepts
- **Hoisting within Functions**: Variable declarations are hoisted to the top of their containing function's scope.
`,
  // problem--> 45
  'hoisting-in-strict-mode': `
### 💡 Problem Breakdown
This is a conceptual problem. Strict mode (\`'use strict';\`) does not change the fundamental hoisting behavior of \`var\`, \`let\`, \`const\`, or function declarations. However, it introduces other rules that make the effects of hoisting more predictable. For example, by disallowing assignment to undeclared variables, it prevents accidental global variable creation which can be confused with hoisting.

### 📚 Key Concepts
- **Strict Mode**: A stricter variant of JavaScript that makes the language less error-prone.
`,
  // problem--> 46
  'const-mutate-object': `
### 💡 Problem Breakdown
This is a crucial concept. \`const\` creates an immutable *binding*, not an immutable *value*. When a \`const\` variable refers to an object, the variable cannot be reassigned to point to a different object. However, the properties of the object itself can be freely changed.

### ⚙️ Solution Walkthrough
A \`person\` object is declared with \`const\`. One of its properties is then successfully modified.
\`\`\`javascript
const person = { name: 'John', age: 30 };
person.age = 31; // This is allowed
console.log(person.age); // 31
\`\`\`
### 📚 Key Concepts
- **Reference Types**: Objects and arrays are reference types. The variable holds a reference (a memory address) to the value, not the value itself.
`,
  // problem--> 47
  'const-mutate-array': `
### 💡 Problem Breakdown
Just like objects, arrays declared with \`const\` can also be mutated. You can add, remove, or change elements within the array. The \`const\` keyword only prevents the variable from being reassigned to a completely new array.

### ⚙️ Solution Walkthrough
An array is declared with \`const\`. Elements are added using \`.push()\` and modified using index assignment.
\`\`\`javascript
const numbers = [1, 2, 3];
numbers.push(4); // OK
numbers[0] = 99; // OK
console.log(numbers); // [99, 2, 3, 4]
\`\`\`

### 📚 Key Concepts
- **Reference Types**: Arrays are a type of object and follow the same reference rules. \`const\` protects the reference, not the content.
`,
  // problem--> 48
  'const-reassign-object': `
### 💡 Problem Breakdown
This problem demonstrates the core constraint of \`const\`: you cannot reassign the variable. If a \`const\` variable holds a reference to an object, you cannot assign a new object reference to that variable.

### ⚙️ Solution Walkthrough
An attempt to reassign the \`person\` constant to a new object results in a \`TypeError\`.
\`\`\`javascript
const person = { name: 'Alice' };
// person = { name: 'Bob' }; // -> TypeError: Assignment to constant variable.
\`\`\`

### 📚 Key Concepts
- **Immutable Binding**: The core feature of \`const\`.
`,
  // problem--> 49
  'object-freeze': `
### 💡 Problem Breakdown
If you need to make the *value* of an object truly immutable (preventing its properties from being changed), you can use the built-in \`Object.freeze()\` method. It makes an object's properties read-only.

### ⚙️ Solution Walkthrough
An object is "frozen". In strict mode, an attempt to modify a property of a frozen object will throw a \`TypeError\`. (In non-strict mode, it fails silently.)
\`\`\`javascript
'use strict';
const frozenObj = { a: 1 };
Object.freeze(frozenObj);

try {
  frozenObj.a = 2; // This will throw an error in strict mode
} catch (e) {
  console.log(e.name); // "TypeError"
}
\`\`\`

### 📚 Key Concepts
- **`Object.freeze()`**: A method to make an object's properties immutable.
`,
  // problem--> 50
  'object-freeze-nested': `
### 💡 Problem Breakdown
A key limitation of \`Object.freeze()\` is that it is "shallow." It only freezes the properties of the object it's called on. If one of those properties is another object, that nested object is **not** frozen.

### ⚙️ Solution Walkthrough
A nested object is frozen. A property of the top-level object cannot be changed, but a property of the nested object can.
\`\`\`javascript
const user = { name: 'Alice', details: { age: 30 } };
Object.freeze(user);

// user.name = 'Bob'; // This would fail

// This works because the 'details' object itself was not frozen
user.details.age = 31; 
console.log(user.details.age); // 31
\`\`\`
To deep-freeze an object, you would need to write a recursive function that applies \`Object.freeze()\` to all nested objects.

### 📚 Key Concepts
- **Shallow vs. Deep Operations**: A common concept in programming. Shallow operations affect only the top level of a data structure, while deep operations recurse through all levels.
`,
  // problem--> 51
  'const-in-for-of-loop': `
### 💡 Problem Breakdown
It is valid and often preferred to use \`const\` to declare the loop variable in a \`for...of\` loop. This works because a new, separate binding for the variable is created for each iteration of the loop.

### ⚙️ Solution Walkthrough
A \`for...of\` loop successfully iterates over an array using a \`const\` variable.
\`\`\`javascript
const numbers = [10, 20, 30];
let sum = 0;
for (const num of numbers) {
  // A new 'num' constant is created for each iteration
  sum += num;
}
console.log(sum); // 60
\`\`\`

### 📚 Key Concepts
- **Loop Variable Binding**: \`for...of\` loops create a new lexical environment for each iteration, allowing \`const\` to be used safely.
`,
  // problem--> 52
  'const-in-for-loop-error': `
### 💡 Problem Breakdown
While \`const\` works in a \`for...of\` loop, it cannot be used for the counter in a traditional C-style \`for\` loop. The reason is that the update expression (e.g., \`i++\`) attempts to reassign the counter variable, which violates the rule of \`const\`.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing code that would throw a \`TypeError\`.
\`\`\`javascript
// for (const i = 0; i < 3; i++) { // -> TypeError: Assignment to constant variable.
//   console.log(i);
// }
\`\`\`
You must use \`let\` for the counter in a traditional \`for\` loop.

### 📚 Key Concepts
- **Reassignment in Loops**: The update part of a \`for\` loop is a reassignment operation.
`,
  // problem--> 53
  'when-to-use-let-vs-const': `
### 💡 Problem Breakdown
This is a conceptual problem about modern JavaScript best practices. The general rule is:
1.  **Default to \`const\`**: Always declare variables with \`const\` first. This signals that the variable's binding should not change, which makes code easier to reason about.
2.  **Use \`let\` only when necessary**: If you know you will need to reassign a variable's value (e.g., a loop counter, a variable that tracks changing state), then use \`let\`.
3.  **Avoid \`var\`**: In modern codebases, there is rarely a good reason to use \`var\`.

### 📚 Key Concepts
- **Code Readability**: Using \`const\` communicates intent and helps prevent accidental reassignments.
`,
  // problem--> 54
  'object-seal': `
### 💡 Problem Breakdown
\`Object.seal()\` provides a level of immutability between \`const\` and \`Object.freeze()\`. When an object is sealed:
- You **can** change the values of existing properties.
- You **cannot** add new properties.
- You **cannot** delete existing properties.

### ⚙️ Solution Walkthrough
An object is sealed. An existing property is successfully modified, but an attempt to add a new property would fail.
\`\`\`javascript
'use strict';
const sealedObj = { a: 1 };
Object.seal(sealedObj);

sealedObj.a = 2; // Allowed
// sealedObj.b = 3; // Throws TypeError in strict mode

console.log(sealedObj.a); // 2
\`\`\`

### 📚 Key Concepts
- **`Object.seal()`**: A method for making an object's structure fixed.
`,
  // problem--> 55
  'object-preventextensions': `
### 💡 Problem Breakdown
\`Object.preventExtensions()\` is the most lenient of the object immutability methods. It only prevents new properties from being added to an object. You can still modify and delete existing properties.

### ⚙️ Solution Walkthrough
An object has extensions prevented. An attempt to add a new property would fail.
\`\`\`javascript
'use strict';
const obj = { a: 1 };
Object.preventExtensions(obj);

obj.a = 2; // Allowed
delete obj.a; // Allowed
// obj.b = 3; // Throws TypeError in strict mode
\`\`\`

### 📚 Key Concepts
- **`Object.preventExtensions()`**: A method for locking down an object's set of properties.
`,
  // problem--> 56
  'destructure-array': `
### 💡 Problem Breakdown
Destructuring assignment is an ES6 syntax that makes it possible to unpack values from arrays or properties from objects into distinct variables. This problem shows the basic syntax for arrays.

### ⚙️ Solution Walkthrough
Values from the array \`[10, 20]\` are unpacked into two new constants, \`a\` and \`b\`.
\`\`\`javascript
const coordinates = [10, 20];
const [a, b] = coordinates;

console.log(a); // 10
console.log(b); // 20
\`\`\`

### 📚 Key Concepts
- **Destructuring**: A convenient way to extract data from arrays and objects.
`,
  // problem--> 57
  'destructure-object': `
### 💡 Problem Breakdown
Object destructuring allows you to extract properties from an object and bind them to variables. The variable names must match the property keys.

### ⚙️ Solution Walkthrough
Properties \`name\` and \`age\` are extracted from the \`user\` object into new constants with the same names.
\`\`\`javascript
const user = { name: 'Bob', age: 40 };
const { name, age } = user;

console.log(name); // "Bob"
console.log(age); // 40
\`\`\`

### 📚 Key Concepts
- **Destructuring**: Using curly braces \`{}\` on the left side of an assignment to unpack object properties.
`,
  // problem--> 58
  'destructure-skip-array-items': `
### 💡 Problem Breakdown
When destructuring an array, you can skip elements you're not interested in by using a comma as a placeholder.

### ⚙️ Solution Walkthrough
The destructuring pattern \`[a, , c]\` assigns the first element to \`a\`, skips the second element, and assigns the third element to \`c\`.
\`\`\`javascript
const numbers = [1, 2, 3];
const [a, , c] = numbers;

console.log(a); // 1
console.log(c); // 3
\`\`\`

### 📚 Key Concepts
- **Array Destructuring Syntax**: The comma is a positional placeholder.
`,
  // problem--> 59
  'destructure-array-rest': `
### 💡 Problem Breakdown
The rest pattern (\`...\`) can be used in array destructuring to collect all remaining elements into a new array. It must be the last element in the pattern.

### ⚙️ Solution Walkthrough
The pattern \`[first, ...rest]\` assigns the first element to \`first\` and all subsequent elements to a new array called \`rest\`.
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const [first, ...rest] = numbers;

console.log(first); // 1
console.log(rest);  // [2, 3, 4]
\`\`\`

### 📚 Key Concepts
- **Rest Syntax**: A powerful feature for working with a variable number of elements or properties.
`,
  // problem--> 60
  'destructure-object-rest': `
### 💡 Problem Breakdown
Similar to array destructuring, the rest pattern (\`...\`) can be used in object destructuring to collect the remaining properties into a new object.

### ⚙️ Solution Walkthrough
The pattern \`{ id, ...rest }\` extracts the \`id\` property and then gathers all other properties into a new object called \`rest\`.
\`\`\`javascript
const product = { id: 1, name: 'Product', price: 99 };
const { id, ...rest } = product;

console.log(id);   // 1
console.log(rest); // { name: 'Product', price: 99 }
\`\`\`
This is very useful for cloning an object while omitting certain properties.

### 📚 Key Concepts
- **Rest Properties**: The object version of the rest syntax.
`,
  // problem--> 61
  'destructure-object-alias': `
### 💡 Problem Breakdown
When destructuring an object, you might want the new variable to have a different name than the property key. You can do this by creating an alias using a colon (\`:\`).

### ⚙️ Solution Walkthrough
The pattern \`{ name: userName }\` extracts the property \`name\` from the object but assigns its value to a new constant called \`userName\`.
\`\`\`javascript
const user = { name: 'Charlie' };
const { name: userName } = user;

console.log(userName); // "Charlie"
// console.log(name); // -> ReferenceError: name is not defined
\`\`\`

### 📚 Key Concepts
- **Aliasing**: Renaming variables during destructuring.
`,
  // problem--> 62
  'destructure-array-defaults': `
### 💡 Problem Breakdown
You can provide a default value for a variable in an array destructuring pattern. The default value will be used if the array doesn't have an element at that position (or if the element is \`undefined\`).

### ⚙️ Solution Walkthrough
The array only has one element. \`a\` gets this value. Since there is no second element, \`b\` gets its default value of 2.
\`\`\`javascript
const source = [10];
const [a = 1, b = 2] = source;

console.log(a); // 10
console.log(b); // 2
\`\`\`

### 📚 Key Concepts
- **Default Values**: Making destructuring more robust by handling missing data.
`,
  // problem--> 63
  'destructure-object-defaults': `
### 💡 Problem Breakdown
Default values can also be used in object destructuring. The default value is used if the property key does not exist on the object, or if its value is \`undefined\`.

### ⚙️ Solution Walkthrough
The source object has an \`a\` property but no \`b\` property. Therefore, \`a\` gets the value from the object, and \`b\` gets its specified default value.
\`\`\`javascript
const source = { a: 10 };
const { a = 1, b = 2 } = source;

console.log(a); // 10
console.log(b); // 2
\`\`\`

### 📚 Key Concepts
- **Default Values**: A way to ensure variables have a sensible value even when the source data is incomplete.
`,
  // problem--> 64
  'destructure-nested-object': `
### 💡 Problem Breakdown
Destructuring syntax can be nested to match the structure of a nested object or array, allowing you to pull out deeply nested values in a single statement.

### ⚙️ Solution Walkthrough
The pattern \`{ user: { name } }\` mirrors the object's structure. It first looks for a property \`user\`, then within that object, it looks for a property \`name\` and assigns its value to a new constant called \`name\`.
\`\`\`javascript
const data = { user: { name: 'David', id: 456 } };
const { user: { name } } = data;

console.log(name); // "David"
\`\`\`

### 📚 Key Concepts
- **Nested Destructuring**: A concise syntax for accessing data in complex objects.
`,
  // problem--> 65
  'destructure-function-params-object': `
### 💡 Problem Breakdown
This is a very common and powerful pattern in modern JavaScript. Instead of a function accepting multiple arguments, it can accept a single "options" object. Destructuring in the parameter list allows you to conveniently unpack the properties of this object into local variables.

### ⚙️ Solution Walkthrough
The \`greet\` function's parameter is \`{ name, greeting = 'Hello' }\`. This tells JavaScript to expect an object and to pull the \`name\` and \`greeting\` properties out of it, providing a default for \`greeting\`.
\`\`\`javascript
function greet({ name, greeting = 'Hello' }) {
  return \`\${greeting}, \${name}!\`;
}

greet({ name: 'Eve', greeting: 'Hi' }); // "Hi, Eve!"
greet({ name: 'Frank' });            // "Hello, Frank!"
\`\`\`

### 📚 Key Concepts
- **Named Arguments**: This pattern simulates named arguments, making function calls more readable as the order of properties in the object doesn't matter.
`,
  // problem--> 66
  'destructure-function-params-array': `
### 💡 Problem Breakdown
Just like with objects, you can use array destructuring in a function's parameter list to immediately unpack the elements of an array that is passed as an argument.

### ⚙️ Solution Walkthrough
The function \`processCoords\` expects an array as its single argument. The pattern \`[x, y]\` in the parameter list immediately destructures this array into local variables \`x\` and \`y\`.
\`\`\`javascript
function processCoords([x, y]) {
  return \`The coordinates are (\${x}, \${y})\`;
}

processCoords([10, 20]); // "The coordinates are (10, 20)"
\`\`\`

### 📚 Key Concepts
- **Function Signatures**: Using destructuring to create more expressive and self-documenting function signatures.
`,
  // problem--> 67
  'destructure-swap-variables': `
### 💡 Problem Breakdown
Traditionally, swapping two variables required a third, temporary variable. ES6 array destructuring provides a much more elegant, single-line solution.

### ⚙️ Solution Walkthrough
The expression \`[a, b] = [b, a]\` works as follows:
1.  On the right side, a new array \`[b, a]\` is created in memory (e.g., \`[2, 1]\`).
2.  On the left side, array destructuring unpacks this new array. The first element (2) is assigned to \`a\`, and the second element (1) is assigned to \`b\`.
\`\`\`javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
\`\`\`

### 📚 Key Concepts
- **Syntactic Sugar**: A concise syntax that simplifies a common task.
`,
  // problem--> 68
  'destructure-from-function-return-array': `
### 💡 Problem Breakdown
This problem shows how you can apply array destructuring directly to the result of a function call that returns an array.

### ⚙️ Solution Walkthrough
The function \`getCoords\` returns an array. The destructuring pattern \`const [x, y]\` is applied directly to the function's return value, immediately assigning the array elements to the new constants.
\`\`\`javascript
const getCoords = () => [5, 10, 15];
const [x, y] = getCoords();

console.log(x); // 5
console.log(y); // 10
\`\`\`

### 📚 Key Concepts
- **Expressions**: A function call is an expression that evaluates to a value. Destructuring can be applied to any expression that results in an array or object.
`,
  // problem--> 69
  'destructure-from-function-return-object': `
### 💡 Problem Breakdown
This is the object counterpart to the previous problem. You can destructure the object returned by a function call in a single statement.

### ⚙️ Solution Walkthrough
The function \`getUser\` returns an object. The destructuring pattern \`const { id, name }\` is applied to this return value, creating two new constants, \`id\` and \`name\`.
\`\`\`javascript
const getUser = () => ({ id: 123, name: 'Frank', role: 'admin' });
const { id, name } = getUser();

console.log(id);   // 123
console.log(name); // "Frank"
\`\`\`

### 📚 Key Concepts
- **Clean Code**: This pattern leads to very clean and readable code when working with functions that return structured data.
`,
  // problem--> 70
  'destructure-for-of-loop': `
### 💡 Problem Breakdown
When iterating over an array of arrays (or other iterables), you can use destructuring directly in the \`for...of\` loop definition to unpack the elements of each inner array.

### ⚙️ Solution Walkthrough
The \`pairs\` array contains nested arrays. The loop definition \`for (const [num, char] of pairs)\` tells JavaScript that for each iteration, it should take the inner array and destructure it into the constants \`num\` and \`char\`.
\`\`\`javascript
const pairs = [[1, 'a'], [2, 'b']];
for (const [num, char] of pairs) {
  console.log(\`Number: \${num}, Char: \${char}\`);
}
\`\`\`
This is much cleaner than accessing elements by index (e.g., \`pair[0]\`, \`pair[1]\`).

### 📚 Key Concepts
- **Iteration**: Combining iteration and destructuring for elegant data processing.
`,
  // problem--> 71
  'destructure-string': `
### 💡 Problem Breakdown
Strings in JavaScript are iterable. This means they can be used in places that expect an iterable, such as a \`for...of\` loop or, in this case, array destructuring.

### ⚙️ Solution Walkthrough
When you apply array destructuring to a string, it treats the string as an array of its characters.
\`\`\`javascript
const myString = "Hello";
const [a, b, c] = myString;

console.log(a); // "H"
console.log(b); // "e"
console.log(c); // "l"
\`\`\`

### 📚 Key Concepts
- **Iterable Protocol**: A core concept in modern JavaScript that defines how objects can be iterated over. Strings, arrays, maps, and sets are all built-in iterables.
`,
  // problem--> 72
  'destructure-assignment-without-declaration': `
### 💡 Problem Breakdown
This problem addresses a syntactic edge case. If you want to use object destructuring to assign values to variables that have already been declared, you must wrap the entire assignment statement in parentheses.

### ⚙️ Solution Walkthrough
Without the parentheses, the JavaScript engine would interpret the opening curly brace \`{\` as the start of a block statement, not an object literal, leading to a \`SyntaxError\`.
\`\`\`javascript
let a, b;
const source = { a: 1, b: 2 };

// The parentheses are required here
({ a, b } = source);

console.log(a, b); // 1 2
\`\`\`

### 📚 Key Concepts
- **JavaScript Grammar**: Understanding how the JavaScript parser interprets syntax is key to avoiding this kind of error.
`,
  // problem--> 73
  'destructure-dynamic-property-name': `
### 💡 Problem Breakdown
This is a conceptual problem about a limitation of destructuring. The destructuring syntax is static; it requires you to know the property names at the time you write the code. You cannot use a variable to specify which property to extract.

### ⚙️ Solution Walkthrough
The problem explains that destructuring is the wrong tool for this job. To access a property using a dynamic key stored in a variable, you must use standard bracket notation.
\`\`\`javascript
const user = { name: 'Alice', role: 'admin' };
const keyToGet = 'role';

// You CANNOT do this:
// const { [keyToGet]: value } = user; // This is computed property syntax for CREATING objects

// You MUST do this:
const value = user[keyToGet];
console.log(value); // "admin"
\`\`\`

### 📚 Key Concepts
- **Bracket Notation**: The way to access object properties using a variable or expression for the key.
`,
  // problem--> 74
  'destructure-with-defaults-and-alias': `
### 💡 Problem Breakdown
You can combine multiple destructuring features into a single, powerful statement. This problem shows how to provide a default value for a property that you are also renaming with an alias.

### ⚙️ Solution Walkthrough
The pattern \`{ name: userName = 'Guest' }\` is read from right to left:
1.  Look for the property \`name\`.
2.  If it doesn't exist or is \`undefined\`, use the default value \`'Guest'\`.
3.  Assign the final value to a new variable called \`userName\`.
\`\`\`javascript
const user = { age: 30 }; // 'name' property is missing
const { name: userName = 'Guest' } = user;

console.log(userName); // "Guest"
\`\`\`

### 📚 Key Concepts
- **Expressive Syntax**: Combining destructuring features allows for highly expressive and concise code.
`,
  // problem--> 75
  'destructure-mixed-array-object': `
### 💡 Problem Breakdown
Destructuring syntax can be nested to perfectly match complex, mixed data structures containing both arrays and objects.

### ⚙️ Solution Walkthrough
The data structure has an \`items\` property which is an array. We want to skip the first element of the array and destructure the second element, which is an object.
\`\`\`javascript
const data = { id: 1, items: ['apple', { type: 'banana', color: 'yellow' }] };

// { id, items: [ , { type }] }
// 1. Get \`id\` from \`data\`.
// 2. Get \`items\` array from \`data\`.
// 3. In the \`items\` array, skip the first element (the comma).
// 4. For the second element, which is an object, get its \`type\` property.
const { id, items: [, { type }] } = data;

console.log(id);   // 1
console.log(type); // "banana"
\`\`\`
### 📚 Key Concepts
- **Pattern Matching**: The destructuring pattern on the left side of the assignment acts as a pattern to match against the data structure on the right.
`,
  // problem--> 76
  'shadowing-in-catch-block': `
### 💡 Problem Breakdown
This is an advanced conceptual problem. Before ES2019, if you had a variable named \`e\` in an outer scope, a \`catch (e)\` block would not create a new \`e\` if the error was conditional, leading to potential bugs. ES2019 standardized that the \`catch\` binding is always created in its own, separate scope.

### ⚙️ Solution Walkthrough
In modern JavaScript, the \`err\` in the \`catch\` block safely shadows the outer \`err\` variable.
\`\`\`javascript
let err = "outer error";
try {
  throw "inner error";
} catch (err) {
  // This 'err' is block-scoped to the catch block
  console.log(err); // "inner error"
}
console.log(err); // "outer error"
\`\`\`
### 📚 Key Concepts
- **Lexical Environments**: A \`catch\` block creates its own lexical environment for its error variable.
`,
  // problem--> 77
  'tdz-and-closures': `
### 💡 Problem Breakdown
This problem explores the interaction between the Temporal Dead Zone (TDZ) and closures. A closure captures a variable, not its value. If that variable is a \`let\` or \`const\`, the closure respects its TDZ.

### ⚙️ Solution Walkthrough
A function \`fn\` is created that forms a closure over \`myLet\`. If \`fn\` is called *before* the \`let\` declaration is reached, it will throw a \`ReferenceError\` because it's trying to access a variable that is still in its TDZ.
\`\`\`javascript
function test() {
  const fn = () => myLet; // Closure captures 'myLet'
  
  // Calling fn() here would throw a ReferenceError
  
  let myLet = 5; // TDZ for 'myLet' ends here
  
  return fn(); // Calling it here is fine
}
test(); // 5
\`\`\`
### 📚 Key Concepts
- **Closures**: An inner function's reference to its outer scope.
- **TDZ**: The rule that you cannot access a block-scoped variable before its declaration.
`,
  // problem--> 78
  'tdz-with-default-params': `
### 💡 Problem Breakdown
Function parameters are evaluated from left to right. Each parameter is added to a special intermediate scope. This can lead to a TDZ situation where one parameter tries to access another that has not yet been initialized.

### ⚙️ Solution Walkthrough
In the function signature \`function test(a = b, b = 5)\`, parameter \`a\` is evaluated first. It tries to access \`b\`, but \`b\` has not been initialized yet and is therefore in its TDZ.
\`\`\`javascript
// This function definition will throw a ReferenceError when called without arguments
// function test(a = b, b = 5) {
//   return [a, b];
// }
// test(); // -> ReferenceError: Cannot access 'b' before initialization
\`\`\`
### 📚 Key Concepts
- **Parameter Scope**: Function parameters have their own scope, separate from the function body.
`,
  // problem--> 79
  'global-object-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem about the global object in JavaScript.
- In browsers, the global object is \`window\`. It holds global functions like \`setTimeout\` and properties related to the browser window.
- In Node.js, the global object is \`global\`.
- This difference made it difficult to write universal code. **\`globalThis\`** was introduced in ES2020 as a standard, environment-agnostic way to always get a reference to the global object.

### 📚 Key Concepts
- **Global Object**: The object at the top of the scope chain.
- **\`globalThis\`**: The standard way to access the global object.
`,
  // problem--> 80
  'const-primitive-vs-object-deep-dive': `
### 💡 Problem Breakdown
This is a conceptual deep dive into how \`const\` works.
- **For Primitive Types** (string, number, boolean): The variable holds the actual value. Since \`const\` prevents the variable's value from being changed, primitives declared with \`const\` are effectively immutable.
- **For Reference Types** (object, array): The variable holds a *reference* (a memory address) to where the object is stored. \`const\` makes this reference immutable—you can't make the variable point to a different object. However, it does **not** make the object itself immutable. You can still change the properties of the object that the reference points to.

### 📚 Key Concepts
- **Value vs. Reference**: The fundamental difference between how primitives and objects are stored and assigned in JavaScript.
`,
  // problem--> 81
  'garbage-collection-conceptual': `
### 💡 Problem Breakdown
JavaScript has automatic memory management. The Garbage Collector (GC) is a process that runs in the background. Its job is to identify memory that is no longer "reachable" from any part of the application and free it up. A variable becomes unreachable when there are no more references to it (e.g., a local variable in a function after the function has returned).

### ⚙️ Solution Walkthrough
The main algorithm used by modern JavaScript engines is called **Mark-and-Sweep**:
1.  The GC starts from a set of "roots" (global variables, the current call stack).
2.  It "marks" all objects reachable from these roots.
3.  It then "sweeps" through all objects in memory. Any object that was not marked is considered unreachable and is garbage collected.

### 📚 Key Concepts
- **Garbage Collection**: Automatic memory management.
- **Reachability**: The core concept the GC uses to determine if memory is still in use.
`,
  // problem--> 82
  'memory-leak-with-closures': `
### 💡 Problem Breakdown
A memory leak occurs when memory that is no longer needed is not released. Closures are a common source of memory leaks in JavaScript. If an inner function (a closure) is kept alive long after its parent function has run, it will keep a reference to its entire parent scope. If that parent scope contained large variables, they will not be garbage collected.

### ⚙️ Solution Walkthrough
A conceptual example.
\`\`\`javascript
function createLeakyListener() {
  const largeData = new Array(1000000).fill('*'); // 1 million items

  // This inner function is a closure
  const listener = () => {
    // It doesn't even need to use largeData...
    console.log("Clicked!");
  };
  
  // ...but because it's in the same scope, it keeps it alive.
  document.body.addEventListener('click', listener);
}
\`\`\`
If the \`listener\` is never removed, the \`largeData\` array will never be garbage collected.

### 📚 Key Concepts
- **Memory Leak**: A common type of bug where memory is not deallocated correctly.
- **Closures**: Understanding that closures capture their entire lexical environment is key to avoiding this issue.
`,
  // problem--> 83
  'let-in-switch-case': `
### 💡 Problem Breakdown
This is an advanced scope problem. The entire body of a \`switch\` statement is considered a single block. If you declare a variable with \`let\` or \`const\` in one \`case\` block, that variable exists for the whole \`switch\` block, but it's in a Temporal Dead Zone until its declaration. This can lead to errors.

### ⚙️ Solution Walkthrough
Attempting to declare \`x\` in two different cases causes a \`SyntaxError\`.
\`\`\`javascript
switch (1) {
  case 1:
    let x = 'one';
    break;
  case 2:
    // let x = 'two'; // -> SyntaxError: Identifier 'x' has already been declared
    break;
}
// The fix is to give each case its own block scope:
switch (1) {
    case 1: { // Start new block
        let x = 'one';
        break;
    } // End block
    case 2: { // Start new block
        let x = 'two';
        break;
    } // End block
}
\`\`\`
### 📚 Key Concepts
- **Block Scope**: The scope created by curly braces \`{}\`.
`,
  // problem--> 84
  'dynamic-property-creation': `
### 💡 Problem Breakdown
ES6 introduced "computed property names," which allow you to use an expression (like a variable) to define a property name inside an object literal.

### ⚙️ Solution Walkthrough
A variable \`propName\` holds the desired key. Bracket notation \`[propName]\` is used inside the object literal to use the variable's value as the key.
\`\`\`javascript
const propName = 'dynamicKey';
const obj = {
  [propName]: 'Hello World',
  staticKey: 'Hi'
};

console.log(obj.dynamicKey); // "Hello World"
\`\`\`
### 📚 Key Concepts
- **Computed Property Names**: A modern JavaScript syntax for creating objects with dynamic keys.
`,
  // problem--> 85
  'shorthand-property-names': `
### 💡 Problem Breakdown
ES6 introduced a convenient shorthand for creating object properties. If you have a variable whose name is the same as the object key you want to create, you can just include the variable name in the object literal.

### ⚙️ Solution Walkthrough
The variables \`name\` and \`age\` are used to create an object. The shorthand syntax \`{ name, age }\` is equivalent to the older \`{ name: name, age: age }\`.
\`\`\`javascript
const name = 'Alice';
const age = 25;

// Shorthand syntax
const user = { name, age };

console.log(user.name); // "Alice"
console.log(user.age);  // 25
\`\`\`
### 📚 Key Concepts
- **Shorthand Property Names**: A syntax that makes object creation more concise.
`,
  // problem--> 86
  'primitive-wrapper-objects': `
### 💡 Problem Breakdown
Primitives like strings and numbers do not have methods. However, JavaScript has "primitive wrapper objects" (\`String\`, \`Number\`, \`Boolean\`). When you try to access a property or method on a primitive, JavaScript temporarily wraps it in the corresponding object to perform the action.

### ⚙️ Solution Walkthrough
This is a conceptual explanation of "autoboxing".
\`\`\`javascript
const greeting = "hello";
// What happens behind the scenes:
// 1. JS sees you're accessing a property on a primitive.
// 2. It creates a temporary wrapper object: new String("hello")
// 3. It calls the .toUpperCase() method on that object.
// 4. The method returns "HELLO".
// 5. The temporary object is discarded.
const loudGreeting = greeting.toUpperCase();
\`\`\`
### 📚 Key Concepts
- **Autoboxing**: The process of automatically wrapping a primitive in an object.
`,
  // problem--> 87
  'nan-is-weird': `
### 💡 Problem Breakdown
\`NaN\` stands for "Not a Number". It's a special numeric value that results from operations that cannot produce a meaningful number (e.g., \`0 / 0\`). It has a unique property: it is not equal to any other value, including itself.

### ⚙️ Solution Walkthrough
The solver demonstrates the inequality and shows the correct way to check for \`NaN\`.
\`\`\`javascript
console.log(NaN === NaN); // false

// Incorrect way to check:
let x = 0/0;
if (x === NaN) { /* this will never run */ }

// Correct way to check:
if (Number.isNaN(x)) { /* this works */ }
\`\`\`
### 📚 Key Concepts
- **\`NaN\`**: A special value in the number type.
- **`Number.isNaN()`**: The only reliable way to check if a value is \`NaN\`.
`,
  // problem--> 88
  'symbol-primitive-type': `
### 💡 Problem Breakdown
The \`Symbol\` type was introduced in ES6. A symbol is a primitive value that is guaranteed to be unique. They are often used as keys for object properties to avoid name collisions.

### ⚙️ Solution Walkthrough
Two symbols are created with the same description, but they are not equal.
\`\`\`javascript
const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2); // false
console.log(typeof sym1);   // "symbol"

const user = {
  [sym1]: 123
};
console.log(user[sym1]); // 123
\`\`\`
### 📚 Key Concepts
- **\`Symbol\`**: A primitive type for creating unique identifiers.
`,
  // problem--> 89
  'bigint-primitive-type': `
### 💡 Problem Breakdown
JavaScript's standard \`Number\` type can only safely represent integers up to \`Number.MAX_SAFE_INTEGER\`. The \`BigInt\` type was introduced to work with arbitrarily large integers.

### ⚙️ Solution Walkthrough
A \`BigInt\` is created by appending \`n\` to the end of an integer literal or by calling the \`BigInt()\` constructor.
\`\`\`javascript
const max = Number.MAX_SAFE_INTEGER;
const bigNum = BigInt(max) + 2n;

console.log(bigNum); // A very large number
console.log(typeof bigNum); // "bigint"

// You cannot mix BigInt and Number types in operations.
// const error = bigNum + 2; // -> TypeError
\`\`\`
### 📚 Key Concepts
- **\`BigInt\`**: A primitive type for representing integers of arbitrary precision.
`,
  // problem--> 90
  'var-function-scope-loop-pitfall': `
### 💡 Problem Breakdown
This is a variation of the classic loop pitfall. Because \`var\` is function-scoped, a variable declared in a loop is accessible after the loop finishes, holding its final value. This can be unintuitive.

### ⚙️ Solution Walkthrough
A \`var\` declared in a \`for\` loop is accessed after the loop.
\`\`\`javascript
function test() {
  for (var i = 0; i < 3; i++) {
    // ...
  }
  // 'i' is still accessible here because it's scoped to the function.
  return i; 
}
console.log(test()); // 3
\`\`\`
If \`let\` were used, this would throw a \`ReferenceError\` because \`i\` would only exist inside the loop's block scope.

### 📚 Key Concepts
- **Function Scope**: A core concept for understanding \`var\`.
`,
  // problem--> 91
  'let-scope-in-catch': `
### 💡 Problem Breakdown
This problem explores variable shadowing specifically within a \`catch\` block. If you declare a new variable inside the block with the same name as an outer variable, it correctly shadows the outer one without conflict.

### ⚙️ Solution Walkthrough
An outer \`err\` variable is declared. Inside a \`catch\` block, a new \`err\` variable is declared with \`let\`. They are shown to be two distinct variables.
\`\`\`javascript
let err = 'outer';
try {
  throw 'inner';
} catch (e) {
  let err = e; // This is a new variable, scoped to the catch block.
  console.log(err); // 'inner'
}
console.log(err); // 'outer'
\`\`\`
### 📚 Key Concepts
- **Block Scope**: The \`catch\` block creates its own scope.
- **Shadowing**: The inner \`err\` temporarily hides the outer \`err\`.
`,
  // problem--> 92
  'hoisting-var-at-global-scope': `
### 💡 Problem Breakdown
This conceptual problem explains that when a JavaScript file is loaded, the engine first makes a pass to find all \`var\` and \`function\` declarations. It allocates memory for them in the global scope. This is why they are "hoisted."

### ⚙️ Solution Walkthrough
An explanation of the two-pass process:
1.  **Creation Phase**: The engine scans the code. It finds \`var myGlobal;\` and allocates space for it, initializing it to \`undefined\`.
2.  **Execution Phase**: The engine runs the code line by line. When it hits \`console.log(myGlobal)\`, it finds the variable in memory and logs its current value (\`undefined\`). Later, it hits \`myGlobal = 5;\` and updates the value in memory.

### 📚 Key Concepts
- **Execution Context**: The environment in which JavaScript code is executed. It has a creation phase and an execution phase.
`,
  // problem--> 93
  'tdz-and-function-parameters': `
### 💡 Problem Breakdown
The Temporal Dead Zone (TDZ) also applies to the parameters of a function. Parameters are initialized from left to right. You cannot access a parameter in a default value if that parameter has not been initialized yet.

### ⚙️ Solution Walkthrough
This shows a function signature that will throw an error.
\`\`\`javascript
// This works:
// function test(a = 1, b = a) { return b; }
// test(); // returns 1

// This fails:
// function test(a = b, b = 1) { return a; }
// test(); // ReferenceError: Cannot access 'b' before initialization
\`\`\`
In the failing example, when the default value for \`a\` is evaluated, it tries to access \`b\`, but \`b\` is still in its TDZ.

### 📚 Key Concepts
- **Parameter Scope**: Function parameters have their own special scope that exists between the outer scope and the inner function body's scope.
`,
  // problem--> 94
  'const-array-reassignment-error': `
### 💡 Problem Breakdown
This problem reinforces the core rule of \`const\`. It prevents the variable's binding from being changed. For an array, this means you cannot make the variable point to a brand new array.

### ⚙️ Solution Walkthrough
The code attempts to assign a new array literal to a variable declared with \`const\`. This results in a \`TypeError\`.
\`\`\`javascript
const arr = [1, 2];
// arr = [3, 4]; // -> TypeError: Assignment to constant variable.
\`\`\`
While you can change the contents of the original array (e.g., \`arr.push(3)\`), you cannot change which array the variable \`arr\` refers to.

### 📚 Key Concepts
- **Immutable Binding**: The variable-to-value link is permanent.
`,
  // problem--> 95
  'deep-freeze-utility-conceptual': `
### 💡 Problem Breakdown
Since \`Object.freeze()\` is shallow, a common utility in functional programming is a "deep freeze" function. This function would need to recursively traverse an object and apply \`Object.freeze()\` to every nested object and array.

### ⚙️ Solution Walkthrough
A conceptual recursive function is outlined:
\`\`\`javascript
function deepFreeze(obj) {
  // Freeze the top-level object first.
  Object.freeze(obj);
  
  // Iterate over its properties.
  Object.keys(obj).forEach(key => {
    const prop = obj[key];
    // If a property is a non-null object, recursively freeze it.
    if (prop !== null && typeof prop === 'object' && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });
  return obj;
}
\`\`\`
### 📚 Key Concepts
- **Recursion**: The natural way to process nested data structures.
- **Immutability**: A core principle in functional programming that helps prevent bugs by ensuring data structures cannot be changed after creation.
`,
  // problem--> 96
  'destructure-null-error': `
### 💡 Problem Breakdown
Destructuring assignment works by accessing properties on the value on the right-hand side. If that value is \`null\` or \`undefined\`, it has no properties to access, which results in a \`TypeError\`.

### ⚙️ Solution Walkthrough
The code attempts to destructure an object property from \`null\`.
\`\`\`javascript
const source = null;
try {
  const { a } = source; // This is like trying to do null.a
} catch (e) {
  console.log(e.name); // "TypeError"
}
\`\`\`
This is a common error when working with data that might be missing, such as the result of an API call.

### 📚 Key Concepts
- **Error Handling**: It's important to check if a value is \`null\` or \`undefined\` before attempting to destructure it.
`,
  // problem--> 97
  'destructure-return-with-defaults': `
### 💡 Problem Breakdown
This combines two powerful features: destructuring a function's return value and providing default values. This is a robust pattern for handling functions that might return objects with optional properties.

### ⚙️ Solution Walkthrough
A function returns an object that is missing the \`role\` property. The destructuring assignment provides a default value for \`role\`.
\`\`\`javascript
const getPartialData = () => ({ name: 'Alice', id: 123 });

const { name, role = 'guest' } = getPartialData();

console.log(name); // "Alice"
console.log(role); // "guest"
\`\`\`
### 📚 Key Concepts
- **Defensive Programming**: Using default values makes your code more resilient to incomplete or changing data structures.
`,
  // problem--> 98
  'let-block-scope-in-standalone-block': `
### 💡 Problem Breakdown
In JavaScript, you can create a block scope at any time by simply using a pair of curly braces \`{}\`. This is not common, but it can be used to limit the lifespan of a variable declared with \`let\` or \`const\`.

### ⚙️ Solution Walkthrough
A variable \`x\` is declared in the outer scope. Inside a standalone block, another \`x\` is declared, which shadows the outer one. After the block, the outer \`x\` is unaffected.
\`\`\`javascript
let x = 'outer';
{
  let x = 'inner';
  console.log(x); // "inner"
}
console.log(x); // "outer"
\`\`\`
### 📚 Key Concepts
- **Block Scope**: Any pair of curly braces creates a new lexical environment.
`,
  // problem--> 99
  'hoisting-across-scripts-conceptual': `
### 💡 Problem Breakdown
This conceptual problem clarifies a common misunderstanding. Hoisting is a mechanism that occurs *within* a single script or module during its compilation phase. It does not apply across different scripts. Each script is compiled and executed independently.

### ⚙️ Solution Walkthrough
If you have two separate HTML script tags, the first cannot access a variable from the second before it has run.
\`\`\`html
<!-- This will throw a ReferenceError because 'x' is not defined yet. -->
<script>console.log(x);</script>

<!-- This script runs later, so 'x' is not available to the one above. -->
<script>var x = 5;</script>
\`\`\`
### 📚 Key Concepts
- **Compilation Scope**: Hoisting is a compile-time concept that is scoped to individual files/modules.
`,
  // problem--> 100
  'memory-lifecycle-conceptual': `
### 💡 Problem Breakdown
This is a high-level conceptual problem about how memory is managed in a language like JavaScript. The lifecycle has three main steps:
1.  **Allocation**: When you declare a variable or create an object (\`let x = {}\`), the JavaScript engine allocates a spot in memory for it.
2.  **Use**: Your code reads from and writes to the variable, using the allocated memory (\`x.name = 'test'\`).
3.  **Release**: When the allocated memory is no longer needed (the object is no longer reachable), the Garbage Collector (GC) automatically reclaims it. You do not deallocate memory manually.

### 📚 Key Concepts
- **Memory Management**: The process of allocating and freeing computer memory.
- **Garbage Collection**: The specific automatic memory management system used by JavaScript.
`,
};
