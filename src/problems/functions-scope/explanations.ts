
export const explanations: Record<string, string> = {
  'simple-function-return': `
### 💡 Problem Breakdown
This is the most basic form of a function. The goal is to define a reusable block of code that, when called, performs a simple action: returning a specific string of text.

### ⚙️ Solution Walkthrough
The solution uses a standard function declaration.
\`\`\`javascript
function greet() {
    return "Hello, Functions!";
}
greet();
\`\`\`
1.  **\`function greet()\`**: The \`function\` keyword is used to declare a function named \`greet\`.
2.  **\`return "..."\`**: The \`return\` statement specifies the value that the function will output.
3.  **\`greet()\`**: This is the function call. It executes the code inside the \`greet\` function.

### 📚 Key Concepts
-   **Function Declaration**: A traditional way to define a function using the \`function\` keyword.
-   **\`return\` Statement**: Ends function execution and specifies a value to be returned.
`,
  'function-with-parameters': `
### 💡 Problem Breakdown
Functions become powerful when they can accept input. This problem involves writing a function that takes two inputs (parameters) and uses them in a calculation.

### ⚙️ Solution Walkthrough
The function is defined with two parameters, \`x\` and \`y\`, and returns their product.
\`\`\`javascript
function multiply(x, y) {
    return x * y;
}
multiply(8, 4); // 32
\`\`\`
1. **Parameters \`(x, y)\`**: These are placeholders for the values that will be passed into the function when it's called.
2. **Arguments \`(8, 4)\`**: The actual values passed to a function are called arguments.
3. **Return Value**: The function performs a multiplication and returns the result.

### 📚 Key Concepts
- **Parameters**: Variables listed as part of a function definition.
- **Arguments**: The actual values passed to the function when it is invoked.
`,
  'arrow-function-syntax': `
### 💡 Problem Breakdown
The goal is to perform a simple calculation using the modern ES6 arrow function syntax. Arrow functions provide a more concise way to write functions, especially for simple, one-line operations.

### ⚙️ Solution Walkthrough
The solution defines and calls a one-line arrow function.
\`\`\`javascript
const square = (n) => n * n;
square(9); // 81
\`\`\`
1.  **\`const square = ...\`**: An arrow function is an expression, so it is typically assigned to a variable.
2.  **\`(n) => ...\`**: This is the core syntax. \`(n)\` are the parameters, \`=>\` separates them from the body.
3.  **\`n * n\`**: Because the body is a single expression and has no curly braces \`{}\`, the result is implicitly returned.

### 📚 Key Concepts
-   **Arrow Function**: A compact alternative to a traditional function expression.
-   **Implicit Return**: A feature of arrow functions where a single-expression body automatically returns its result.
`,
  'function-declaration': `
### 💡 Problem Breakdown
A function declaration is the "classic" way to define a function in JavaScript. A key feature is that declarations are "hoisted," meaning the JavaScript engine moves them to the top of their scope before code execution.

### ⚙️ Solution Walkthrough
A function is defined using the \`function\` keyword, followed by the function name, parameters, and body.
\`\`\`javascript
// The function can be called before it is defined
const result = declaredFunction(); 

function declaredFunction() {
    return "This function was hoisted!";
}
\`\`\`
1. **\`function declaredFunction() { ... }\`**: This entire block is a function declaration.
2. **Hoisting**: The JavaScript interpreter conceptually moves the entire function declaration to the top of its current scope, which is why it can be called before it appears in the code.

### 📚 Key Concepts
- **Function Declaration**: A statement that defines a named function.
- **Hoisting**: A JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.
`,
  'function-expression': `
### 💡 Problem Breakdown
A function expression defines a function as part of a larger expression, typically a variable assignment. Unlike declarations, function expressions are not fully hoisted.

### ⚙️ Solution Walkthrough
An anonymous function is created and assigned to a constant \`expressionFunction\`.
\`\`\`javascript
// This would cause a TypeError because expressionFunction is not a function yet
// expressionFunction(); 

const expressionFunction = function() {
    return "This is a function expression.";
};

// It must be called after it is defined
expressionFunction();
\`\`\`
1. **\`const expressionFunction = ...\`**: A variable is declared.
2. **\`function() { ... }\`**: An anonymous function is created.
3. **Assignment**: The function is assigned as the value for the \`expressionFunction\` variable.
4. **Hoisting Behavior**: While the variable declaration \`const expressionFunction\` is hoisted, its assignment (the function itself) is not. This is why you cannot call it before the line where it is defined.

### 📚 Key Concepts
- **Function Expression**: A syntax to define a function that can be anonymous and assigned to a variable.
`,
  'default-parameters': `
### 💡 Problem Breakdown
Default parameters, introduced in ES6, allow you to initialize function parameters with default values if no value or \`undefined\` is passed. This makes functions more robust and avoids manual checks for undefined parameters.

### ⚙️ Solution Walkthrough
The \`userName\` parameter is given a default value of "Guest" directly in the function signature.
\`\`\`javascript
function greet(userName = "Guest") {
    return \`Hello, \${userName}!\`;
}

greet("Alice"); // "Hello, Alice!"
greet();        // "Hello, Guest!"
\`\`\`
1. **\`userName = "Guest"\`**: This is the default parameter syntax.
2. **Execution**: If the \`greet\` function is called with an argument, \`userName\` takes that argument's value. If it's called with no arguments, \`userName\` is assigned the default value "Guest".

### 📚 Key Concepts
- **Default Parameters**: A feature for specifying default values for function parameters.
`,
  'rest-parameters-sum': `
### 💡 Problem Breakdown
Rest parameter syntax allows a function to accept an indefinite number of arguments as an array. This provides a more modern and cleaner alternative to the older \`arguments\` object.

### ⚙️ Solution Walkthrough
The \`...args\` syntax gathers all arguments passed to the \`sum\` function into a true array named \`args\`.
\`\`\`javascript
function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}

sum(1, 2, 3, 4, 5); // 15
\`\`\`
1. **\`...args\`**: This must be the last parameter in the function definition. It collects all remaining arguments.
2. **True Array**: \`args\` is a real JavaScript array, so we can immediately use array methods like \`.reduce()\` on it.

### 📚 Key Concepts
- **Rest Parameters**: A syntax for representing an indefinite number of arguments as an array.
`,
  'iife-pattern': `
### 💡 Problem Breakdown
An Immediately Invoked Function Expression (IIFE) is a design pattern where a function is defined and executed at the same time. It's primarily used to create a private scope to avoid polluting the global namespace.

### ⚙️ Solution Walkthrough
A function expression is wrapped in parentheses, and then immediately invoked with a final pair of parentheses.
\`\`\`javascript
const result = (function() {
    const privateVar = "I'm private!";
    return \`This IIFE returned: "\${privateVar}"\`;
})();
// 'result' is "This IIFE returned: "I'm private!""
// 'privateVar' is not accessible here.
\`\`\`
1. **\`(function(){...})\`**: This creates a function expression.
2. **\`()\`**: The second pair of parentheses at the end executes the function immediately.
3. **Private Scope**: Variables declared inside the IIFE are only accessible within that function.

### 📚 Key Concepts
- **IIFE**: A common pattern for creating local scopes and avoiding global variable conflicts.
`,
  'hoisting-declaration': `
### 💡 Problem Breakdown
Hoisting is a JavaScript mechanism where the interpreter appears to move declarations of functions, variables, or classes to the top of their scope, prior to execution of the code. Function declarations are hoisted completely (both name and body).

### ⚙️ Solution Walkthrough
The \`declaredFunction\` is called before its physical location in the code. This works without error.
\`\`\`javascript
// No error is thrown here.
const result = declaredFunction(); 

function declaredFunction() {
    return "This function was hoisted!";
}
\`\`\`
1. **Declaration Pass**: Before executing the code, the JavaScript engine makes a pass to find all function declarations and conceptually "moves" them to the top of their scope.
2. **Execution Pass**: When the code is executed, \`declaredFunction\` is already known and available for use.

### 📚 Key Concepts
- **Hoisting**: A core JavaScript behavior related to how execution contexts are created.
`,
  'hoisting-expression-var': `
### 💡 Problem Breakdown
While function declarations are fully hoisted, function expressions assigned to variables have different hoisting behavior. If a \`var\` is used, the variable declaration is hoisted, but its assignment (the function) is not. This leads to a common error.

### ⚙️ Solution Walkthrough
An attempt to call \`expressionFunc\` is made before its definition.
\`\`\`javascript
try {
    expressionFunc(); // This will throw a TypeError
} catch (e) {
    console.log(e.name); // "TypeError"
}

var expressionFunc = function() {
    console.log("This will not run yet.");
};
\`\`\`
1. **Hoisted Declaration**: The engine processes \`var expressionFunc;\` at the top of the scope. At this point, \`expressionFunc\` exists but its value is \`undefined\`.
2. **Execution Error**: When \`expressionFunc()\` is called, it's like trying to invoke \`undefined()\`, which results in a \`TypeError\`.

### 📚 Key Concepts
- **Hoisting with \`var\`**: Only the declaration is hoisted, not the initialization.
`,
  'global-scope': `
### 💡 Problem Breakdown
The global scope is the outermost scope in a JavaScript environment. Variables declared here are accessible from any other scope in the program. In browsers, the global object is \`window\`.

### ⚙️ Solution Walkthrough
A variable is declared outside any function, making it global. A function then accesses this variable.
\`\`\`javascript
// This is in the global scope
let globalVar = "I am everywhere!";

function accessGlobal() {
    return globalVar; // Accesses the variable from the outer scope
}
accessGlobal(); // "I am everywhere!"
\`\`\`
1. **Global Declaration**: \`globalVar\` is not inside any function, so it's global.
2. **Scope Chain Lookup**: When \`accessGlobal\` runs, it looks for \`globalVar\` in its own scope. Not finding it, it looks up the scope chain to the next outer scope (the global one), where it finds the variable.

### 📚 Key Concepts
- **Global Scope**: The top-level scope. Over-reliance on global variables is generally discouraged as it can lead to naming conflicts and hard-to-debug code.
`,
  'function-scope': `
### 💡 Problem Breakdown
Variables declared with \`var\` inside a function are "function-scoped." This means they are only accessible anywhere within that function, but not outside of it.

### ⚙️ Solution Walkthrough
A variable \`scopedVar\` is declared with \`var\` inside a function. An attempt to access it from outside would fail.
\`\`\`javascript
function myFunction() {
    var scopedVar = "I am private to this function.";
    console.log(scopedVar);
}
myFunction(); // Logs the message
// console.log(scopedVar); // Throws a ReferenceError
\`\`\`
1. **Local Variable**: \`scopedVar\` is local to \`myFunction\`.
2. **Encapsulation**: This is a fundamental way JavaScript encapsulates state within functions, preventing it from leaking into other parts of the program.

### 📚 Key Concepts
- **Function Scope**: The scope created by a function. Variables declared with \`var\` are scoped to the entire function.
`,
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
1. **Block Scope**: The scope of \`blockVar\` is limited to the \`{}\` of the \`if\` statement.
2. **`let` vs. `var`**: If \`var\` had been used instead of \`let\`, the variable would have been accessible outside the block (scoped to the function or global scope), which is a common source of bugs.

### 📚 Key Concepts
- **Block Scope**: The scope created by a pair of curly braces. \`let\` and \`const\` enable this more granular level of scoping.
`,
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
1. **Innermost Scope**: \`child\`'s scope is searched first.
2. **Outer Scope**: \`parent\`'s scope is searched next.
3. **Global Scope**: The global scope is searched last.

### 📚 Key Concepts
- **Scope Chain**: The ordered list of scopes that are searched to resolve a variable's value.
- **Lexical Scoping**: The scope chain is determined by how the functions are nested in the source code (lexically), not by how they are called.
`,
  'pure-function': `
### 💡 Problem Breakdown
A pure function is a fundamental concept in functional programming. It has two main properties:
1.  **Deterministic**: Given the same input, it will always return the same output.
2.  **No Side Effects**: It does not modify any state outside of its own scope (e.g., no modifying global variables, no writing to the console or a file).

### ⚙️ Solution Walkthrough
The \`double\` function is pure. Its output depends only on its input \`n\`, and it doesn't change anything else in the program.
\`\`\`javascript
function double(n) {
    return n * 2;
}
\`\`\`
Pure functions are predictable, testable, and easier to reason about, which makes them a cornerstone of writing reliable software.

### 📚 Key Concepts
- **Pure Function**: A function that is deterministic and has no side effects.
- **Side Effects**: Any interaction a function has with the outside world beyond its return value.
`,
  'impure-function': `
### 💡 Problem Breakdown
An impure function is the opposite of a pure function. It may produce different outputs for the same input, or it may have side effects, meaning it modifies state outside of its own scope.

### ⚙️ Solution Walkthrough
The \`incrementExternal\` function modifies a variable \`externalCounter\` that exists outside of its own scope. This is a side effect.
\`\`\`javascript
let externalCounter = 0; // External state

function incrementExternal() {
    externalCounter++; // This is a side effect
    return \`Counter is now: \${externalCounter}\`;
}
\`\`\`
The output of \`incrementExternal()\` depends on the previous state of \`externalCounter\`, so it is not deterministic.

### 📚 Key Concepts
- **Impure Function**: A function that has side effects or whose output is not solely determined by its inputs.
- **Side Effects**: Modifying external variables, logging to the console, making network requests, and changing the DOM are all examples of side effects.
`,
  'higher-order-function-argument': `
### 💡 Problem Breakdown
A higher-order function is a function that either takes one or more functions as arguments, or returns a function as its result. This problem demonstrates passing a function as an argument.

### ⚙️ Solution Walkthrough
The \`applyOperation\` function is a higher-order function. It takes a value \`val\` and a function \`operation\` as arguments. It then calls the \`operation\` function, passing \`val\` to it.
\`\`\`javascript
const square = (n) => n * n;
const double = (n) => n * 2;

const applyOperation = (val, operation) => operation(val);

applyOperation(5, square); // 25
applyOperation(5, double); // 10
\`\`\`
1. **Function as Argument**: \`square\` and \`double\` are passed as the \`operation\` argument.
2. **Callback Execution**: Inside \`applyOperation\`, the \`operation\` parameter (which holds the passed-in function) is invoked.

### 📚 Key Concepts
- **Higher-Order Function**: A function that takes another function as an argument or returns a function.
- **Callback Function**: A function passed into another function as an argument, which is then invoked inside the outer function.
`,
  'higher-order-function-return': `
### 💡 Problem Breakdown
This is the other side of higher-order functions: a function that *returns* a new function. This is often used to create "function factories" that produce specialized functions based on some initial configuration.

### ⚙️ Solution Walkthrough
The \`createMultiplier\` function takes a \`factor\` and returns a new function. This returned function "remembers" the \`factor\` and multiplies its own argument by it.
\`\`\`javascript
const createMultiplier = (factor) => {
    // This returned function is a closure
    return (number) => number * factor;
};

const multiplyBy3 = createMultiplier(3);
multiplyBy3(7); // 21
\`\`\`
1. **Function Factory**: \`createMultiplier\` creates and returns a new function.
2. **Closure**: The returned function has access to the \`factor\` variable from its parent scope, even after \`createMultiplier\` has finished executing. This is a closure.

### 📚 Key Concepts
- **Closures**: The mechanism that allows an inner function to access variables from its outer (enclosing) function's scope.
`,
  'sync-callback': `
### 💡 Problem Breakdown
A synchronous callback is a function passed as an argument that is executed immediately within the outer function, blocking further execution until it completes. This is in contrast to asynchronous callbacks (like in \`setTimeout\`) which are executed later.

### ⚙️ Solution Walkthrough
A \`processArray\` function iterates over an array and executes a callback for each item. The main thread of execution waits for the entire loop and all callback executions to finish.
\`\`\`javascript
function processArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
let result = '';
processArray(["apple", "banana"], (item) => { result += item + ' '; });
// By the time this line is reached, 'result' is "apple banana "
\`\`\`
1. **Immediate Execution**: The callback function is called and completes for each item before the \`processArray\` function itself can return. Array methods like \`forEach\`, \`map\`, and \`filter\` all use synchronous callbacks.

### 📚 Key Concepts
- **Synchronous Execution**: Code is executed line by line, in order. Each operation must complete before the next one begins.
`,
  'arguments-object': `
### 💡 Problem Breakdown
The \`arguments\` object is an array-like object accessible inside **traditional functions** that contains the values of the arguments passed to that function. It's considered somewhat "legacy" as modern rest parameters (\`...args\`) are generally preferred. Arrow functions do not have their own \`arguments\` object.

### ⚙️ Solution Walkthrough
A traditional \`function\` is used to access the \`arguments\` object, which is then looped over.
\`\`\`javascript
function sum() { // No named parameters
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
sum(10, 20, 30); // 60
\`\`\`
1. **Array-like**: \`arguments\` has a \`length\` property and can be indexed, but it is not a true array and does not have methods like \`forEach\` or \`reduce\` (unless you convert it first).

### 📚 Key Concepts
- **\`arguments\` object**: A special object available in non-arrow functions that provides access to the arguments passed to the function.
`,
  'object-method-this': `
### 💡 Problem Breakdown
When a function is called as a method of an object (\`object.method()\`), its \`this\` keyword is automatically set to the object the method was called on. This allows methods to access other properties of the same object.

### ⚙️ Solution Walkthrough
A \`person\` object has a \`greet\` method that uses \`this.name\` to access the \`name\` property of the \`person\` object itself.
\`\`\`javascript
const person = {
    name: "Alice",
    greet: function() {
        return \`Hello, my name is \${this.name}.\`;
    }
};
person.greet(); // "Hello, my name is Alice."
\`\`\`
1. **Method Invocation Context**: The way the function is called (\`person.greet()\`) determines the value of \`this\`.

### 📚 Key Concepts
- **\`this\` Keyword**: A reference to the current execution context. In an object method call, it refers to the object.
`,
  'this-global-scope': `
### 💡 Problem Breakdown
This is a conceptual problem. In the global scope (outside of any function), \`this\` refers to the global object. In a web browser, the global object is \`window\`.

### ⚙️ Solution Walkthrough
Checking \`this\` in the global scope of a browser's console.
\`\`\`javascript
// In a browser's global scope (non-strict mode)
console.log(this === window); // true

var myGlobal = "hello";
console.log(this.myGlobal); // "hello" (because 'var' adds to the global object)
\`\`\`
1. **Global Context**: The default execution context is the global object.
2. **Strict Mode Difference**: In strict mode (\`'use strict';\`), \`this\` in the global scope is still the global object, but \`this\` inside a regular function called without a specific context will be \`undefined\` instead of the global object.

### 📚 Key Concepts
- **Global Object**: The top-level object in the JavaScript scope chain (\`window\` in browsers).
`,
  'this-arrow-function-lexical': `
### 💡 Problem Breakdown
This is a key feature and a major difference between arrow functions and traditional functions. Arrow functions do **not** have their own \`this\` binding. Instead, they inherit \`this\` from the surrounding (parent) scope where they were defined. This is called "lexical \`this\`".

### ⚙️ Solution Walkthrough
An arrow function is used as a callback inside a method. It correctly captures the \`this\` of the method.
\`\`\`javascript
const myObject = {
    name: "My Object",
    process() {
        setTimeout(() => {
            // This arrow function inherits 'this' from the 'process' method.
            console.log(this.name); // "My Object"
        }, 100);
    }
};
\`\`\`
1. **Lexical Capture**: The arrow function "captures" the \`this\` from its surrounding environment (\`process\`), where \`this\` correctly refers to \`myObject\`. This avoids the common problem where a traditional \`function\` callback would have its \`this\` set to the global object.

### 📚 Key Concepts
- **Lexical \`this\`**: The behavior of arrow functions that makes them predictable and extremely useful for callbacks.
`,
  'function-call-method': `
### 💡 Problem Breakdown
The \`.call()\` method is a way to invoke a function while explicitly specifying what the \`this\` keyword should refer to inside that function. It allows you to "borrow" a method from one object and apply it to another. Arguments are passed individually after the \`this\` context.

### ⚙️ Solution Walkthrough
A standalone \`greet\` function is "called" with the context of \`person2\`, making \`this\` inside \`greet\` refer to \`person2\`.
\`\`\`javascript
const person2 = { name: "Jane" };

function greet() {
    return \`Hello, \${this.name}!\`;
}

greet.call(person2); // "Hello, Jane!"
\`\`\`
1. **\`function.call(thisArg, arg1, arg2, ...)\`**:
   - \`thisArg\`: The value to be used as \`this\` inside the function call.
   - \`arg1, ...\`: Arguments to be passed to the function.

### 📚 Key Concepts
- **\`.call()\`**: A method on functions to invoke them with a specific \`this\` context and individual arguments.
`,
  'function-apply-method': `
### 💡 Problem Breakdown
The \`.apply()\` method is very similar to \`.call()\`. It also invokes a function with a specified \`this\` context. The only difference is how it accepts arguments: \`.apply()\` takes arguments as an array (or an array-like object).

### ⚙️ Solution Walkthrough
\`.apply()\` is used to pass an array of numbers to \`Math.max\`, which normally expects individual arguments.
\`\`\`javascript
const numbers = [5, 6, 2, 3, 7];

// Instead of Math.max(5, 6, 2, 3, 7)
const max = Math.max.apply(null, numbers); // 7
\`\`\`
1. **\`function.apply(thisArg, [argsArray])\`**:
   - \`thisArg\`: The \`this\` context. For utility functions like \`Math.max\` that don't use \`this\`, \`null\` is typically used.
   - \`[argsArray]\`: An array of arguments.

### 📚 Key Concepts
- **\`.apply()\`**: A method on functions to invoke them with a specific \`this\` context and an array of arguments.
`,
  'function-bind-method': `
### 💡 Problem Breakdown
The \`.bind()\` method creates a **new function** that, when called, has its \`this\` keyword permanently set to the provided value. Unlike \`.call()\` and \`.apply()`, \`.bind()\` does **not** execute the function immediately. It returns a new, bound function that can be called later.

### ⚙️ Solution Walkthrough
A method is detached from its object, losing its \`this\` context. \`.bind()\` is used to create a new version of the function with the context permanently fixed.
\`\`\`javascript
const module = {
    x: 42,
    getX: function() { return this.x; }
};

const unboundGetX = module.getX;
const boundGetX = unboundGetX.bind(module);
boundGetX(); // 42
\`\`\`
1. **\`function.bind(thisArg)\`**: Returns a new function.
2. **Permanent Binding**: The returned \`boundGetX\` will *always* have \`this\` set to \`module\`, no matter how or where it is called. This is extremely useful for event listeners and callbacks.

### 📚 Key Concepts
- **\`.bind()\`**: A method for creating a new function with a fixed \`this\` value.
`,
  'recursive-countdown': `
### 💡 Problem Breakdown
A recursive function is one that calls itself to solve a problem. The task is to create a countdown by repeatedly calling the function with a smaller number until it reaches a "base case" that stops the recursion.

### ⚙️ Solution Walkthrough
The \`countdown\` function calls itself with \`n - 1\`.
\`\`\`javascript
let result = [];
function countdown(n) {
    if (n < 1) { // Base case
        return;
    }
    result.push(n);
    countdown(n - 1); // Recursive step
}
countdown(5); // result will be [5, 4, 3, 2, 1]
\`\`\`
1. **Base Case**: \`if (n < 1)\` is the condition that stops the chain of calls.
2. **Recursive Step**: \`countdown(n - 1)\` is the call that continues the process with a smaller version of the problem.

### 📚 Key Concepts
- **Recursion**: A fundamental programming concept where a function calls itself.
- **Call Stack**: Each recursive call adds a new frame to the call stack. The base case allows the stack to unwind without overflowing.
`,
  'first-class-functions': `
### 💡 Problem Breakdown
In JavaScript, functions are "first-class citizens." This means a function is just another type of value. It can be treated like any other variable: it can be assigned to variables, stored in arrays, passed as an argument to other functions, and returned from functions.

### ⚙️ Solution Walkthrough
A function expression is assigned to a variable \`greet\`, and then that variable is assigned to another variable \`myFunc\`.
\`\`\`javascript
const greet = function() {
    return "I'm a first-class function!";
};

const myFunc = greet;
myFunc();
\`\`\`
This demonstrates that the function itself is a value that can be passed around.

### 📚 Key Concepts
- **First-Class Functions**: A core feature of JavaScript that enables functional programming patterns.
`,
  'named-function-expression': `
### 💡 Problem Breakdown
A function expression can optionally have a name. This name is primarily useful for two things: debugging (the name will appear in stack traces) and recursion (the function can refer to itself via its name from within its own body).

### ⚙️ Solution Walkthrough
The function expression is given the name \`fac\`, which is then used for the recursive call.
\`\`\`javascript
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
factorial(5); // 120
\`\`\`
1. **Internal Name**: The name (\`fac\`) is only available in the function's own scope.
2. **Recursion**: Using the internal name makes the recursive call independent of the variable (\`factorial\`) it was assigned to.

### 📚 Key Concepts
- **Named Function Expression**: A function expression with an identifier, useful for debugging and self-reference.
`,
  'function-shadowing': `
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
1. **Scope Resolution**: When the code inside \`testShadow\` looks for \`x\`, it finds the one declared locally and stops searching up the scope chain.

### 📚 Key Concepts
- **Variable Shadowing**: A behavior of nested scopes that can sometimes be a source of bugs if not intended.
`,
  'anonymous-function': `
### 💡 Problem Breakdown
An anonymous function is a function that is defined without a name. They are very common in JavaScript, especially when used as function expressions or as callback functions passed to other methods.

### ⚙️ Solution Walkthrough
An anonymous function is passed directly as the callback to \`setTimeout\`.
\`\`\`javascript
setTimeout(() => {
    console.log("Hi");
}, 1000);
\`\`\`
1. **No Identifier**: There is no name between the \`()\` for arrow functions and the parameter list.

### 📚 Key Concepts
- **Anonymous Function**: A function without a name identifier.
`,
  'implicit-return-arrow': `
### 💡 Problem Breakdown
A key syntactic feature of arrow functions is "implicit return." If the function body consists of only a single expression (with no curly braces \`{}\`), the result of that expression is automatically returned.

### ⚙️ Solution Walkthrough
An arrow function is defined on a single line without curly braces or a \`return\` keyword.
\`\`\`javascript
const double = (n) => n * 2;
\`\`\`
1. **Concise Body**: The lack of \`{}\` signals to the JavaScript engine that the expression \`n * 2\` should be evaluated and its result returned.

### 📚 Key Concepts
- **Implicit Return**: A feature that makes arrow functions very concise for simple data transformations.
`,
  'function-length-property': `
### 💡 Problem Breakdown
Every function in JavaScript has a built-in \`.length\` property. This property returns an integer indicating the number of named parameters the function expects (its "arity").

### ⚙️ Solution Walkthrough
The \`.length\` property is accessed on a function.
\`\`\`javascript
function example(a, b, c) {}
console.log(example.length); // 3
\`\`\`
1. **Arity**: The \`.length\` property indicates the number of formal parameters. It does not count rest parameters.

### 📚 Key Concepts
- **Function Arity**: The number of arguments a function is declared to accept.
`,
  'scope-let-vs-var-loop': `
### 💡 Problem Breakdown
This illustrates one of the most important reasons to prefer \`let\` over \`var\`. When a closure is created in a loop, \`let\` creates a new variable for each iteration, whereas \`var\` creates a single variable for the whole loop.

### ⚙️ Solution Walkthrough
A loop with \`setTimeout\` demonstrates the different behaviors.
\`\`\`javascript
// 'var' logs 3, 3, 3
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 10);
}

// 'let' logs 0, 1, 2
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 10);
}
\`\`\`
1. **\`var\` Behavior**: All three callbacks form a closure over the *same* \`i\` variable.
2. **\`let\` Behavior**: \`let\` is block-scoped. For each iteration, a new \`j\` variable is created. Each callback closes over a *different* \`j\` variable.

### 📚 Key Concepts
- **Block Scope vs. Function Scope**: The critical difference between \`let\`/\`const\` and \`var\`.
`,
  'pass-by-value': `
### 💡 Problem Breakdown
When a primitive value (like a \`Number\`, \`String\`, or \`Boolean\`) is passed as an argument to a function, a *copy* of the value is created. Modifying this copy does not affect the original variable.

### ⚙️ Solution Walkthrough
A number is passed to a function that tries to modify it. The original number remains unchanged.
\`\`\`javascript
let a = 10;
function modify(val) { val = 20; }
modify(a);
console.log(a); // 10
\`\`\`
### 📚 Key Concepts
- **Pass by Value**: A parameter-passing mechanism where a copy of the argument's value is used.
`,
  'pass-by-reference': `
### 💡 Problem Breakdown
When an object (including arrays) is passed as an argument, a copy of the *reference* (the memory address) is passed. Modifying the object's properties inside the function *will* affect the original object.

### ⚙️ Solution Walkthrough
An object is passed to a function which modifies one of its properties. The change is visible outside the function.
\`\`\`javascript
let obj = { x: 10 };
function modify(o) { o.x = 20; }
modify(obj);
console.log(obj.x); // 20
\`\`\`
### 📚 Key Concepts
- **Pass by Reference (Sharing)**: A parameter-passing mechanism where a reference to the argument is used.
`,
  'function-constructor': `
### 💡 Problem Breakdown
This is a conceptual problem about an alternative, but rarely recommended, way to create functions. The \`Function\` constructor creates a new \`Function\` object. The arguments and function body are passed as strings.

### ⚙️ Solution Walkthrough
A new \`sum\` function is created by passing strings to the \`Function\` constructor.
\`\`\`javascript
const sum = new Function('a', 'b', 'return a + b');
sum(2, 6); // 8
\`\`\`
1. **Security and Performance**: This is not recommended because code in strings is harder for the engine to optimize and can be a security risk (similar to \`eval()\`).
2. **Scope**: Functions created this way only have access to the global scope.

### 📚 Key Concepts
- **\`Function\` Constructor**: A less common method for creating functions dynamically from strings.
`,
  'currying-multiply': `
### 💡 Problem Breakdown
Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument. This problem applies the concept to multiplication.

### ⚙️ Solution Walkthrough
A series of nested functions is created. Each inner function is a closure that "remembers" the arguments from the outer functions.
\`\`\`javascript
const multiply = (a) => (b) => (c) => a * b * c;
multiply(2)(3)(4); // 24
\`\`\`
### 📚 Key Concepts
- **Currying**: A functional programming pattern made possible by closures.
`,
  'partial-application': `
### 💡 Problem Breakdown
Partial application involves creating a new function by "pre-filling" some of the arguments of an existing function. \`.bind()\` is a perfect tool for this.

### ⚙️ Solution Walkthrough
\`.bind()\` is used to create a new \`addTen\` function from a generic \`add\` function.
\`\`\`javascript
function add(a, b) { return a + b; }
const addTen = add.bind(null, 10);
addTen(5); // 15
\`\`\`
1. **\`add.bind(null, 10)\`**:
   - \`null\`: We don't care about the \`this\` context here.
   - \`10\`: This value is permanently "bound" as the first argument to \`add\`.

### 📚 Key Concepts
- **Partial Application**: A technique for creating specialized functions from more general ones.
`,
  'this-event-handler': `
### 💡 Problem Breakdown
This is a conceptual problem about how \`this\` behaves in DOM event handlers. When a traditional \`function\` is used as an event handler, the browser automatically sets \`this\` inside the handler to be the DOM element that triggered the event.

### ⚙️ Solution Walkthrough
A click handler is attached to a button.
\`\`\`javascript
const button = document.getElementById('myBtn');
button.addEventListener('click', function() {
    console.log(this.textContent);
});
\`\`\`
1. **Event Context**: If an arrow function were used, \`this\` would not refer to the button. It would be inherited from the surrounding scope.

### 📚 Key Concepts
- **Event Handling**: A core part of front-end JavaScript.
`,
  'function-as-object-property': `
### 💡 Problem Breakdown
Because functions are first-class citizens, they can be used as the value for an object's property. When a function is a property of an object, it's called a "method."

### ⚙️ Solution Walkthrough
A \`config\` object is created with a \`run\` property whose value is a function.
\`\`\`javascript
const config = {
    id: 1,
    run: () => "Running the config function!"
};
config.run();
\`\`\`
### 📚 Key Concepts
- **Method**: A function that is a property of an object.
`,
  'hoisting-var-declaration': `
### 💡 Problem Breakdown
This is a conceptual problem that revisits hoisting with \`var\`. While the declaration \`var myVar;\` is hoisted, its assignment \`myVar = 5;\` is not. This means the variable exists but its value is \`undefined\` until the assignment line.

### ⚙️ Solution Walkthrough
The code attempts to log a \`var\` before its assignment.
\`\`\`javascript
console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5
\`\`\`
### 📚 Key Concepts
- **Hoisting**: Only declarations are hoisted, not initializations.
`,
  'temporal-dead-zone-let': `
### 💡 Problem Breakdown
Variables declared with \`let\` and \`const\` are hoisted, but are in a "Temporal Dead Zone" (TDZ) until the declaration is encountered. Accessing a variable in the TDZ results in a \`ReferenceError\`.

### ⚙️ Solution Walkthrough
The code attempts to access a \`let\` variable before its declaration.
\`\`\`javascript
try {
    console.log(myLet); // ReferenceError
} catch (e) {}
let myLet = 5;
\`\`\`
1. **TDZ**: The TDZ prevents you from accidentally using a variable before it has been declared.

### 📚 Key Concepts
- **Temporal Dead Zone (TDZ)**: The period of time during which a \`let\` or \`const\` variable exists but cannot be accessed.
`,
  'arrow-function-no-arguments': `
### 💡 Problem Breakdown
Arrow functions do not have their own \`arguments\` object. To access all arguments passed to an arrow function, you must use rest parameters.

### ⚙️ Solution Walkthrough
An arrow function attempts to access \`arguments\`, which fails.
\`\`\`javascript
const myArrowFuncWithRest = (...args) => {
    return args; // 'args' is a true array
};
myArrowFuncWithRest(1, 2, 3); // [1, 2, 3]
\`\`\`
### 📚 Key Concepts
- **Rest Parameters (\`...args\`)**: The modern way to handle an indefinite number of arguments in all functions.
`,
  'iife-with-params': `
### 💡 Problem Breakdown
An IIFE can accept arguments, just like any other function. This is useful for passing in global objects or for providing initial configuration values.

### ⚙️ Solution Walkthrough
A parameter \`p\` is defined for the IIFE, and a value is passed in the final pair of parentheses.
\`\`\`javascript
const myParam = "Hello IIFE";
(function(p) {
    console.log(\`The IIFE received: "\${p}"\`);
})(myParam);
\`\`\`
### 📚 Key Concepts
- **IIFE**: A flexible pattern for creating private scopes with initial values.
`,
  'function-overwriting': `
### 💡 Problem Breakdown
JavaScript does not support "function overloading". If you declare a function with a name that has already been used, the new definition will overwrite the old one.

### ⚙️ Solution Walkthrough
Two function expressions are assigned to the same variable. The second one overwrites the first.
\`\`\`javascript
let myFunction = function() { return "First"; };
myFunction = function() { return "Second"; };
myFunction(); // "Second"
\`\`\`
### 📚 Key Concepts
- **Function Overwriting**: The last function definition for a given name is the one that will be used.
`,
  'callback-hell-conceptual': `
### 💡 Problem Breakdown
"Callback hell" describes a situation where multiple nested asynchronous callbacks make code hard to read and debug. Each callback is indented further than the last, creating a pyramid shape.

### ⚙️ Solution Walkthrough
A conceptual example of nested callbacks.
\`\`\`javascript
getData(function (a) {
    getMoreData(a, function (b) {
        getEvenMoreData(b, function (c) {});
    });
});
\`\`\`
1. **The Solution**: Modern JavaScript solves this with **Promises** and **\`async/await\`**, which allow you to chain asynchronous operations in a flat, readable way.

### 📚 Key Concepts
- **Callback Hell**: An anti-pattern resulting from deeply nested asynchronous callbacks.
`,
  'this-binding-new': `
### 💡 Problem Breakdown
When a function is called with the \`new\` keyword (as a constructor), \`this\` inside that function is automatically bound to the brand new object that is being created.

### ⚙️ Solution Walkthrough
A constructor function is called with \`new\`.
\`\`\`javascript
function Person(name) {
    this.name = name;
}
const p = new Person("Alice");
// p is { name: "Alice" }
\`\`\`
1. **\`new\` Keyword**: Triggers a special \`this\` binding rule. \`this\` becomes the new instance.

### 📚 Key Concepts
- **Constructor Invocation**: The \`new\` keyword creates a new object and sets its \`this\` context.
`,
  'this-strict-mode': `
### 💡 Problem Breakdown
In strict mode, \`this\` is \`undefined\` in a regular function call, preventing accidental access to the global object.

### ⚙️ Solution Walkthrough
A function is called in strict mode.
\`\`\`javascript
'use strict';
function showThis() {
    console.log(this);
}
showThis(); // undefined
\`\`\`
### 📚 Key Concepts
- **Strict Mode**: A restricted variant of JavaScript that catches common coding mistakes.
`,
'function-name-property': `
### 💡 Problem Breakdown
Every function has a `.name` property that holds the function's name as a string. For anonymous functions, the name is inferred from the variable it's assigned to.

### ⚙️ Solution Walkthrough
The `.name` property is accessed on both a named declaration and an anonymous expression.
\`\`\`javascript
function namedFunction() {}
const anonFunc = () => {};
console.log(namedFunction.name); // "namedFunction"
console.log(anonFunc.name);      // "anonFunc"
\`\`\`
### 📚 Key Concepts
- **Function Introspection**: The ability to inspect properties of a function object itself, which is useful for debugging.
`,
'generator-function-basic': `
### 💡 Problem Breakdown
A generator function is a special function that can be paused and resumed. It simplifies creating iterators. It's defined with `function*` and uses the `yield` keyword to produce values.

### ⚙️ Solution Walkthrough
A generator yields two numbers.
\`\`\`javascript
function* numberGenerator() {
    yield 1;
    yield 2;
}
const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
\`\`\`
### 📚 Key Concepts
- **Generator**: A function that can be exited and later re-entered, with its context saved across re-entrances.
- **`yield`**: Pauses the generator and returns a value.
`,
'generator-function-iterator': `
### 💡 Problem Breakdown
Calling a generator function does not execute its body. It returns a special "iterator" object. You must call the `.next()` method on this iterator to execute the generator until the next `yield`.

### ⚙️ Solution Walkthrough
The `.next()` method is called on the generator's iterator.
\`\`\`javascript
function* myGenerator() { yield 'a'; }
const iterator = myGenerator();
const result = iterator.next();
// result is { value: 'a', done: false }
\`\`\`
### 📚 Key Concepts
- **Iterator Protocol**: The structure of the object returned by `.next()`, with `value` and `done` properties, is part of JavaScript's iterator protocol.
`,
'lexical-environment-conceptual': `
### 💡 Problem Breakdown
This is a core conceptual topic. A lexical environment is an internal JavaScript data structure that holds identifier-variable mappings. It's how the engine keeps track of variables and their scopes. It has two components:
1.  **Environment Record**: Stores the variable and function declarations within the local scope.
2.  **Reference to the Outer Environment**: A link to the parent's lexical environment, which forms the scope chain.

### ⚙️ Solution Walkthrough
When a function is called, a new lexical environment is created for that call. When code inside the function references a variable, the engine first looks in the local Environment Record. If it's not found, it follows the reference to the outer environment to continue the search. This is the scope chain in action.

### 📚 Key Concepts
- **Lexical Environment**: The specification mechanism for how scopes and closures work.
`,
'this-with-settimeout': `
### 💡 Problem Breakdown
This is a classic "gotcha". When you use a traditional `function` as a callback for `setTimeout` inside an object method, the `this` context is lost. The callback is invoked by the `setTimeout` mechanism, not by the object, so `this` defaults to the global object (`window`) or is `undefined` in strict mode.

### ⚙️ Solution Walkthrough
The solution is to use an arrow function, which inherits `this` lexically.
\`\`\`javascript
const obj = {
    name: 'My Object',
    logName() {
        setTimeout(() => {
            // Arrow function inherits 'this' from logName
            console.log(this.name); // 'My Object'
        }, 100);
    }
};
\`\`\`
### 📚 Key Concepts
- **Lexical `this`**: The primary reason arrow functions are so useful for callbacks.
`,
'function-composition': `
### 💡 Problem Breakdown
Function composition is the process of applying one function to the result of another: `f(g(x))`. A higher-order `compose` function can be created to automate this.

### ⚙️ Solution Walkthrough
A `compose` function takes two functions, `f` and `g`, and returns a new function.
\`\`\`javascript
const compose = (f, g) => (x) => f(g(x));
const double = (x) => x * 2;
const addTen = (x) => x + 10;
const composed = compose(addTen, double);
composed(5); // 20 (double(5) -> 10, then addTen(10) -> 20)
\`\`\`
### 📚 Key Concepts
- **Function Composition**: A core pattern in functional programming for building complex logic from simple, reusable pieces.
`,
'function-piping': `
### 💡 Problem Breakdown
Piping is similar to composition but applies functions in left-to-right order. It chains functions together, passing the output of one as the input to the next.

### ⚙️ Solution Walkthrough
A `pipe` function uses `reduce` to chain the function calls.
\`\`\`javascript
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const double = (x) => x * 2;
const addTen = (x) => x + 10;
const piped = pipe(double, addTen);
piped(5); // 20 (double(5) -> 10, then addTen(10) -> 20)
\`\`\`
### 📚 Key Concepts
- **Piping**: A readable way to chain data transformations.
`,
'side-effects-conceptual': `
### 💡 Problem Breakdown
A "side effect" is any effect of a function, other than its return value, that is observable to the outside world. This includes modifying a global variable, changing the DOM, writing to the console, or making a network request. Pure functions have no side effects.

### ⚙️ Solution Walkthrough
An impure function is contrasted with a pure one.
\`\`\`javascript
let total = 0;
// Impure: modifies external state
function addToTotal(n) { total += n; }

// Pure: does not modify external state
function add(a, b) { return a + b; }
\`\`\`
### 📚 Key Concepts
- **Side Effects**: A key concept in functional programming. Minimizing side effects makes code more predictable and easier to test.
`,
'memoization-closure': `
### 💡 Problem Breakdown
Memoization is an optimization technique that caches the results of expensive, pure functions. A closure is the perfect way to store the cache privately.

### ⚙️ Solution Walkthrough
A higher-order `memoize` function wraps the target function.
\`\`\`javascript
const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        return (cache[key] = fn(...args));
    };
};
\`\`\`
### 📚 Key Concepts
- **Memoization**: A specific form of caching for function results.
- **Closure**: Provides the private, persistent state for the cache.
`,
'block-scope-in-loop': `
### 💡 Problem Breakdown
This problem clarifies *why* closures in loops work correctly with `let`. The `let` declaration in a `for` loop's header creates a new lexical environment and a new variable binding for each iteration of the loop.

### ⚙️ Solution Walkthrough
Each callback function created inside the loop forms a closure over a *different* `i` variable.
\`\`\`javascript
for (let i = 0; i < 3; i++) {
    // Each iteration has its own 'i'.
    // The closure captures the 'i' for that specific iteration.
    setTimeout(() => console.log(i), 10);
}
// Logs 0, 1, 2
\`\`\`
### 📚 Key Concepts
- **Lexical Environment**: A new one is created for each loop iteration when `let` is used.
`,
'arrow-function-no-prototype': `
### 💡 Problem Breakdown
Arrow functions cannot be used as constructors. This is because they do not have their own `this` binding and they do not have a `.prototype` property, which is necessary for the `new` keyword to work.

### ⚙️ Solution Walkthrough
Attempting to use `new` with an arrow function throws a `TypeError`.
\`\`\`javascript
const MyArrow = () => {};
// new MyArrow(); // TypeError: MyArrow is not a constructor
console.log(MyArrow.prototype); // undefined
\`\`\`
### 📚 Key Concepts
- **Constructors**: Functions designed to be called with `new`. Arrow functions are not designed for this.
`,
'this-in-nested-function': `
### 💡 Problem Breakdown
This is a classic problem demonstrating how a traditional nested `function` inside a method gets its own `this` context, which is typically the global object (`window`) or `undefined` in strict mode, not the object the method belongs to.

### ⚙️ Solution Walkthrough
The `nested` function's `this` is not the `obj`.
\`\`\`javascript
const obj = {
    name: 'MyObj',
    process() {
        function nested() { return this.name; }
        return nested(); // Throws error in strict mode
    }
};
// Solutions:
// 1. const self = this;
// 2. nested.call(this);
// 3. (Modern) Use an arrow function for 'nested'.
\`\`\`
### 📚 Key Concepts
- **`this` Binding Rules**: The value of `this` depends on how the function is called. A plain function call sets `this` to the global object or `undefined`.
`,
'default-param-evaluation': `
### 💡 Problem Breakdown
Default parameter expressions are not evaluated when the function is defined, but rather at *call time*, when the function is invoked and an argument for that parameter is omitted.

### ⚙️ Solution Walkthrough
A function's default parameter calls another function.
\`\`\`javascript
let x = 1;
function getValue() { return x; }
function test(a = getValue()) { return a; }
test(); // 1
x = 2;
test(); // 2
\`\`\`
Because `getValue()` is called each time `test()` is run without an argument, it gets the current value of `x`.

### 📚 Key Concepts
- **Lazy Evaluation**: Default parameter expressions are evaluated lazily, only when needed.
`,
'function-arity': `
### 💡 Problem Breakdown
"Arity" refers to the number of arguments a function is declared to accept. In JavaScript, this can be inspected via the function's `.length` property.

### ⚙️ Solution Walkthrough
The `.length` property is checked on various functions.
\`\`\`javascript
function func(a, b) {}
const arrow = (a, b, c) => {};
console.log(func.length); // 2
console.log(arrow.length); // 3
// Note: It does not include rest parameters or parameters after the first default.
\`\`\`
### 📚 Key Concepts
- **Function Arity**: The number of expected arguments.
`,
'iife-for-private-methods': `
### 💡 Problem Breakdown
The Module Pattern can be used to create objects that have private helper methods which are used by the public methods but are not themselves exposed.

### ⚙️ Solution Walkthrough
An IIFE creates a private `add` function. The returned object has a public `calculate` method that can call `add` via its closure.
\`\`\`javascript
const calculator = (function() {
    function add(a, b) { return a + b; } // private
    return {
        calculate(a, b) { return add(a, b); } // public
    };
})();
calculator.calculate(10, 5); // 15
// calculator.add(10, 5); // TypeError
\`\`\`
### 📚 Key Concepts
- **Module Pattern**: A pattern for encapsulation.
`,
'function-as-a-value': `
### 💡 Problem Breakdown
This problem demonstrates that functions are "first-class citizens" by storing them as values within an array.

### ⚙️ Solution Walkthrough
An array of functions is created, and then one of the functions is retrieved from the array and invoked.
\`\`\`javascript
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const ops = [add, sub];
ops[1](10, 3); // 7
\`\`\`
### 📚 Key Concepts
- **First-Class Functions**: Functions can be treated like any other value (stored in variables, arrays, etc.).
`,
'variadic-function': `
### 💡 Problem Breakdown
A "variadic" function is one that accepts a variable number of arguments. Rest parameters are the modern way to create variadic functions in JavaScript.

### ⚙️ Solution Walkthrough
A `findMax` function uses rest parameters to accept any number of arguments and find the maximum.
\`\`\`javascript
const findMax = (...args) => Math.max(...args);
findMax(1, 5, 2, 9, 3); // 9
\`\`\`
### 📚 Key Concepts
- **Variadic Function**: A function of indefinite arity.
- **Rest Parameters**: The syntax for creating variadic functions.
`,
'execution-context-conceptual': `
### 💡 Problem Breakdown
This is a core conceptual topic. The "Execution Context" is the environment in which JavaScript code is evaluated and executed. The engine creates a new one every time a function is called. It has two phases:
1.  **Creation Phase**: The engine scans the code. It sets up the Variable Environment (memory for variables and functions, handling hoisting), defines the Scope Chain, and determines the value of `this`.
2.  **Execution Phase**: The engine executes the code line by line.

### 📚 Key Concepts
- **Execution Context**: The fundamental concept that manages code execution, scope, and `this` binding in JavaScript.
`,
'this-in-callback': `
### 💡 Problem Breakdown
This shows another example of losing the `this` context. When you pass an object method directly as a callback to a function like `forEach`, it gets invoked as a regular function, not as a method of the object.

### ⚙️ Solution Walkthrough
A traditional function callback to `forEach` loses its `this`.
\`\`\`javascript
const obj = {
    name: 'X',
    process(data) {
        data.forEach(function(item) {
            // 'this' is undefined in strict mode, not 'obj'
            console.log(this.name); // Throws TypeError
        });
    }
};
// Solution: Use an arrow function: data.forEach(item => console.log(this.name));
\`\`\`
### 📚 Key Concepts
- **Callback Invocation**: The function that calls the callback (e.g., `forEach`) determines its `this` context, unless an arrow function is used.
`,
'function-hoisting-pitfall': `
### 💡 Problem Breakdown
While function declarations are hoisted, their behavior within blocks can be inconsistent across different JavaScript environments due to legacy compatibility. A function declared inside an `if` block might be hoisted in a non-strict browser environment but not in strict mode or other environments.

### ⚙️ Solution Walkthrough
A function is declared inside a block.
\`\`\`javascript
// This behavior can be unreliable across engines
if (false) {
    function myFunc() { console.log("Hoisted?"); }
}
// In some non-strict browsers, myFunc might exist but be undefined.
// In strict mode, it would be a ReferenceError.
\`\`\`
Because of this inconsistency, it's a strong best practice to **never** declare functions inside blocks. Use function expressions instead.

### 📚 Key Concepts
- **Block-level Function Declarations**: A feature with inconsistent behavior; should be avoided.
`,
'call-vs-apply-vs-bind': `
### 💡 Problem Breakdown
This is a summary of the three primary methods for controlling a function's `this` context.
- **`.call(thisArg, arg1, arg2, ...)`**: **Invokes** the function immediately. Arguments are passed individually.
- **`.apply(thisArg, [arg1, arg2])`**: **Invokes** the function immediately. Arguments are passed as an array.
- **`.bind(thisArg, arg1, ...)`**: **Returns a new function**. It does not invoke the function. The new function has its `this` context and any initial arguments permanently bound.

### 📚 Key Concepts
- **Explicit `this` Binding**: The collective term for using these three methods.
`,
'currying-vs-partial-application': `
### 💡 Problem Breakdown
These are related but distinct functional programming concepts.
- **Currying**: Transforms a function that takes multiple arguments into a sequence of functions that each take a single argument. E.g., `f(a, b, c)` becomes `f(a)(b)(c)`.
- **Partial Application**: Provides *some* of a function's arguments upfront, creating a new function that is of smaller "arity" (fewer parameters). E.g., from `f(a, b, c)`, you could create `g(c)` by pre-filling `a` and `b`.

### ⚙️ Solution Walkthrough
Currying is a specific technique that makes partial application easy, but they are not the same thing. You can partially apply a function with `.bind()` without currying it.

### 📚 Key Concepts
- **Currying**: A transformation of a function's structure.
- **Partial Application**: The result of fixing one or more arguments to a function.
`,
'function-overloading-conceptual': `
### 💡 Problem Breakdown
"Function overloading" is a feature in some languages where you can define multiple functions with the same name but different parameter types or counts. JavaScript does not support this. The last function defined with a given name will overwrite all previous ones.

### ⚙️ Solution Walkthrough
You can mimic overloading by having a single function that inspects its arguments.
\`\`\`javascript
function doSomething(arg) {
    if (typeof arg === 'string') {
        // Handle string case
    } else if (typeof arg === 'number') {
        // Handle number case
    }
}
\`\`\`
### 📚 Key Concepts
- **Dynamic Typing**: Because JavaScript is dynamically typed, a single function parameter can accept values of any type, which is why traditional overloading isn't necessary.
`,
'self-referencing-function': `
### 💡 Problem Breakdown
A "named function expression" allows a function to refer to itself by its internal name. This is useful for recursion, as it makes the recursive call independent of the variable the function is assigned to.

### ⚙️ Solution Walkthrough
A factorial function is defined as a named expression `fac`.
\`\`\`javascript
const factorial = function fac(n) {
    if (n <= 1) return 1;
    return n * fac(n - 1); // Can use 'fac' for recursion
};

const anotherVar = factorial;
// factorial = null; // Even if the original var is changed...
anotherVar(5); // ...this still works because it calls 'fac'.
\`\`\`
### 📚 Key Concepts
- **Named Function Expression**: A function expression with an identifier that is local to the function's scope.
`,
'closure-scope-preservation': `
### 💡 Problem Breakdown
This problem demonstrates that a closure holds a live *reference* to the variables in its parent scope, not a frozen copy of their values at the time the closure was created.

### ⚙️ Solution Walkthrough
An outer function creates a closure, then modifies a variable *after* the closure is created but *before* it is called.
\`\`\`javascript
function outer() {
    let x = 1;
    const inner = () => x; // 'inner' closes over 'x'
    x = 2; // Modify the closed-over variable
    return inner;
}
const myFn = outer();
myFn(); // 2
\`\`\`
When `myFn` is eventually called, it reads the *current* value of `x` from its closure, which is 2.

### 📚 Key Concepts
- **Live Reference**: A closure maintains a live link to its lexical environment.
`,
'higher-order-function-wrapper': `
### 💡 Problem Breakdown
This is a practical example of a higher-order function. We want to create a "wrapper" function that takes another function and returns a new version of it with added functionality, like logging.

### ⚙️ Solution Walkthrough
The `withLogging` function takes a function `fn` and returns a new function.
\`\`\`javascript
const withLogging = (fn) => {
    return (...args) => {
        console.log(\`Calling \${fn.name}...\`);
        const result = fn(...args);
        console.log("...finished.");
        return result;
    };
};
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);
\`\`\`
### 📚 Key Concepts
- **Decorator Pattern**: This is a simple form of the Decorator pattern, where behavior is added to an object (in this case, a function) dynamically.
`,
'new-function-scope': `
### 💡 Problem Breakdown
This demonstrates a major "gotcha" of the `Function` constructor. Functions created this way do **not** create a closure over their creation environment. They are always created in the global scope.

### ⚙️ Solution Walkthrough
An attempt is made to access a local variable from a function created with `new Function`.
\`\`\`javascript
function createFunc() {
    let x = 1;
    // This function is created in the global scope, it cannot see 'x'.
    return new Function('return x;');
}
// createFunc()(); // Throws a ReferenceError: x is not defined
\`\`\`
### 📚 Key Concepts
- **Scope**: The `Function` constructor breaks the normal rules of lexical scoping, which is one reason it's rarely used.
`,
'generator-function-return': `
### 💡 Problem Breakdown
A generator function can have a `return` statement. When the generator executes this `return`, it finishes and produces one final object from its iterator where `done` is `true` and `value` is the returned value.

### ⚙️ Solution Walkthrough
A generator yields once and then returns.
\`\`\`javascript
function* gen() {
    yield 1;
    return "Finished";
}
const it = gen();
it.next(); // { value: 1, done: false }
it.next(); // { value: "Finished", done: true }
\`\`\`
### 📚 Key Concepts
- **Generator Execution Flow**: Understanding the final state of a generator when it returns.
`,
'generator-yield-delegation': `
### 💡 Problem Breakdown
The `yield*` expression delegates the iteration to another generator or iterable. It's like "inlining" the values from another iterable into the current generator.

### ⚙️ Solution Walkthrough
`genB` uses `yield*` to first yield all values from `genA`.
\`\`\`javascript
function* genA() { yield 1; yield 2; }
function* genB() {
    yield* genA();
    yield 3;
}
[...genB()]; // [1, 2, 3]
\`\`\`
### 📚 Key Concepts
- **`yield*`**: A syntax for composing generators.
`,
'async-function-return': `
### 💡 Problem Breakdown
An `async` function *always* returns a Promise.
- If the function explicitly returns a value, the promise it returns will *resolve* with that value.
- If the function throws an error, the promise it returns will *reject* with that error.

### ⚙️ Solution Walkthrough
An async function returns a simple value.
\`\`\`javascript
async function getData() {
    return "Data!";
}
const p = getData(); // 'p' is a Promise
p.then(val => console.log(val)); // "Data!"
\`\`\`
### 📚 Key Concepts
- **`async` Functions**: A core part of modern asynchronous JavaScript. They provide a cleaner syntax for functions that work with promises.
`,
'this-in-object-literal': `
### 💡 Problem Breakdown
This clarifies the `this` context for methods defined in an object literal. When you use a traditional `function` or the method shorthand syntax, `this` inside that method refers to the object itself when called as a method.

### ⚙️ Solution Walkthrough
A method `getName` uses `this.name` to refer to its own object's property.
\`\`\`javascript
const obj = {
    name: "Test",
    getName() { // Method shorthand
        return this.name;
    }
};
obj.getName(); // "Test"
\`\`\`
### 📚 Key Concepts
- **Method Invocation**: The call `obj.getName()` sets the `this` context to `obj`.
`,
'function-as-property-value': `
### 💡 Problem Breakdown
This demonstrates the "first-class" nature of functions. A function can be assigned as the value of an object property, at which point it is called a "method."

### ⚙️ Solution Walkthrough
An `operations` object stores two functions as properties.
\`\`\`javascript
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
operations.add(10, 5); // 15
\`\`\`
### 📚 Key Concepts
- **First-Class Functions**: Functions can be treated like any other data type.
`,
'call-stack-conceptual': `
### 💡 Problem Breakdown
This is a core concept of how JavaScript executes code. The "Call Stack" is a data structure that keeps track of the currently executing function. It operates on a Last-In, First-Out (LIFO) principle.
- When a function is called, it's added (pushed) to the top of the stack.
- When a function returns, it's removed (popped) from the top of the stack.

### ⚙️ Solution Walkthrough
A conceptual trace of nested function calls.
\`\`\`javascript
function C() { /* ... */ }
function B() { C(); }
function A() { B(); }
A();
// Call Stack becomes:
// 1. [A]
// 2. [A, B]
// 3. [A, B, C]
// 4. [A, B] (C returns)
// 5. [A] (B returns)
// 6. [] (A returns)
\`\`\`
### 📚 Key Concepts
- **Call Stack**: The mechanism for tracking function execution in the JavaScript engine. A "stack overflow" error occurs when the stack grows too large (e.g., from infinite recursion).
`,
'function-binding-precedence': `
### 💡 Problem Breakdown
There are four rules for determining the value of `this` in a function call. This problem explains their order of precedence, from highest to lowest:
1.  **`new` Binding**: If the function is called with `new`, `this` is the newly created object.
2.  **Explicit Binding**: If the function is called with `.call()`, `.apply()`, or `.bind()`, `this` is the object explicitly provided.
3.  **Method Invocation**: If the function is called as a method of an object (`obj.fn()`), `this` is that object.
4.  **Default Binding**: If none of the above apply, `this` is the global object (`window`) in non-strict mode, or `undefined` in strict mode.

### 📚 Key Concepts
- **`this` Binding Rules**: A crucial set of rules for understanding function execution context.
`,
'polyfill-bind-method': `
### 💡 Problem Breakdown
A "polyfill" is a piece of code that provides functionality that you expect the browser to provide natively. This problem outlines the logic for creating a simple polyfill for `.bind()`.

### ⚙️ Solution Walkthrough
The polyfill uses a closure to "remember" the `this` context and any initial arguments. It returns a new function that uses `.apply()` to call the original function with the stored context.
\`\`\`javascript
Function.prototype.myBind = function(context, ...boundArgs) {
  const originalFunc = this;
  return function(...args) {
    return originalFunc.apply(context, [...boundArgs, ...args]);
  };
};
\`\`\`
### 📚 Key Concepts
- **Polyfill**: A way to provide modern features in older environments.
- **Closures**: The core mechanism that makes the polyfill work.
`,
'default-params-and-scope': `
### 💡 Problem Breakdown
This demonstrates a subtle scope rule. Default parameters have their own intermediate scope that sits between the outer scope and the function body's scope.

### ⚙️ Solution Walkthrough
A function `test` has a default parameter `b` that is a function. This inner function `b` forms a closure over the outer scope, not the function body's scope.
\`\`\`javascript
const x = 'global';
function test(a = x, b = function() { return x; }) {
    const x = 'inner'; // This shadows the global 'x'
    return b(); // Returns 'global'
}
\`\`\`
The closure for the default parameter `b` is created *before* the function body is executed, so it captures the global `x`, not the `x` declared inside the function.

### 📚 Key Concepts
- **Scope**: A deep dive into the specific scoping rules of function parameters.
`,
'arrow-function-and-this-in-object': `
### 💡 Problem Breakdown
This is a common pitfall. If you use an arrow function as a method directly on an object literal, its `this` will be determined lexically from the scope where the object is defined, not the object itself.

### ⚙️ Solution Walkthrough
An object method is defined with an arrow function.
\`\`\`javascript
const myObject = {
  name: "My Object",
  getName: () => {
    // Fails because 'this' is not 'myObject'
    return this.name;
  }
};
\`\`\`
To get the correct `this` binding, you must use a traditional function or the method shorthand syntax for object methods.

### 📚 Key Concepts
- **Lexical `this`**: The defining behavior of arrow functions, which is not suitable for standard object methods.
`,
'function-purity-and-arrays': `
### 💡 Problem Breakdown
This problem illustrates function purity in the context of arrays. An impure function might mutate the array passed to it (a side effect), while a pure function would return a new array, leaving the original unchanged.

### ⚙️ Solution Walkthrough
Two sorting functions are compared.
\`\`\`javascript
const original = ['c', 'a', 'b'];
// Impure: mutates the original array
const impureSort = (arr) => arr.sort();
// Pure: creates a copy first
const pureSort = (arr) => [...arr].sort();

pureSort(original); // Returns ['a', 'b', 'c']
// 'original' is still ['c', 'a', 'b']

impureSort(original); // Returns ['a', 'b', 'c']
// 'original' is now ['a', 'b', 'c']
\`\`\`
### 📚 Key Concepts
- **Purity**: A key concept in functional programming.
- **Immutability**: The practice of not changing data in place, which leads to more predictable code.
`,
'iife-with-global-variable': `
### 💡 Problem Breakdown
This shows a common pattern used in older JavaScript libraries. An IIFE can take arguments, and it was common practice to pass in global objects like `window`. This makes the dependency on the global object explicit and can also be used to create a safe alias (e.g., mapping `jQuery` to `$` inside the IIFE).

### ⚙️ Solution Walkthrough
The `window` object is passed into an IIFE.
\`\`\`javascript
(function(global) {
  // 'global' here is a reference to the window object
  // This makes the code's dependency on the global scope clear.
})(this); // In global browser scope, 'this' is window
\`\`\`
### 📚 Key Concepts
- **Dependency Management**: An older pattern for making a module's dependencies explicit.
`,
'function-with-optional-params': `
### 💡 Problem Breakdown
Before default parameters, the common way to handle optional parameters was to check if they were `undefined` inside the function body and assign a default value if so.

### ⚙️ Solution Walkthrough
An `if` statement checks for an undefined parameter.
\`\`\`javascript
function greet(name, greeting) {
  const finalGreeting = greeting === undefined ? "Hello" : greeting;
  return \`\${finalGreeting}, \${name}!\`;
}
greet("User"); // "Hello, User!"
\`\`\`
### 📚 Key Concepts
- **Defensive Programming**: Checking for expected but potentially missing inputs.
`,
'rest-params-vs-arguments': `
### 💡 Problem Breakdown
This is a conceptual summary. Rest parameters (`...args`) are superior to the older `arguments` object for several reasons:
1.  **True Array**: Rest parameters are a real array, so array methods like `.map()` and `.filter()` can be used directly. The `arguments` object is only "array-like" and must be converted first.
2.  **Arrow Functions**: Rest parameters work in arrow functions; the `arguments` object does not.
3.  **Clarity**: They are more explicit about which arguments are being collected.

### 📚 Key Concepts
- **Modern JavaScript**: Preferring modern syntax (`...args`) over older, clunkier alternatives (`arguments`).
`,
'named-args-with-destructuring': `
### 💡 Problem Breakdown
This is a very popular and powerful pattern in modern JavaScript. Instead of a function taking many parameters in a fixed order, it takes a single object. Destructuring is used in the parameter list to unpack the "named" arguments from that object.

### ⚙️ Solution Walkthrough
A function uses parameter destructuring to accept options.
\`\`\`javascript
function createUser({ name, age, role = 'guest' }) {
  return \`Created \${name}, \${age}, as \${role}.\`;
}
// Callers can pass arguments in any order
createUser({ age: 99, name: "Admin" });
\`\`\`
### 📚 Key Concepts
- **Named Arguments**: A pattern that improves function call readability and flexibility.
`,
'function-to-string': `
### 💡 Problem Breakdown
Every function has a `.toString()` method that returns a string representation of the function's source code.

### ⚙️ Solution Walkthrough
`.toString()` is called on a function.
\`\`\`javascript
function add(a, b) { return a + b; }
add.toString(); // "function add(a, b) { return a + b; }"
\`\`\`
### 📚 Key Concepts
- **Function Introspection**: Examining the properties of a function object.
`,
'function-scope-vs-global-scope': `
### 💡 Problem Breakdown
This reinforces the concept of the scope chain. A function has access to its own scope and all outer scopes, up to the global scope. However, an outer scope does not have access to the variables defined inside an inner scope.

### ⚙️ Solution Walkthrough
A conceptual example of scope access.
\`\`\`javascript
let globalVar = 1;
function myFunc() {
  let funcVar = 2;
  console.log(globalVar); // Works (accessing outer scope)
}
myFunc();
// console.log(funcVar); // ReferenceError (cannot access inner scope)
\`\`\`
### 📚 Key Concepts
- **Scope Chain**: A one-way chain of visibility from inner to outer scopes.
`,
'block-scope-with-const': `
### 💡 Problem Breakdown
`const` is just like `let` in that it is block-scoped. The key difference is that a variable declared with `const` cannot be reassigned after it is initialized.

### ⚙️ Solution Walkthrough
A `const` is declared inside a block.
\`\`\`javascript
if (true) {
  const x = 1;
}
// console.log(x); // ReferenceError: x is not defined

const y = 2;
// y = 3; // TypeError: Assignment to constant variable.
\`\`\`
### 📚 Key Concepts
- **`const`**: For declaring constants whose values (or references, for objects) will not change.
`,
'higher-order-function-foreach': `
### 💡 Problem Breakdown
This problem involves implementing your own version of the `forEach` array method to understand how higher-order functions and callbacks work.

### ⚙️ Solution Walkthrough
A function `myForEach` takes an array and a callback. It loops through the array and executes the callback for each element.
\`\`\`javascript
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
myForEach(['a', 'b'], (item) => console.log(item));
\`\`\`
### 📚 Key Concepts
- **Higher-Order Function**: `myForEach` takes a function as an argument.
`,
'function-currying-practical': `
### 💡 Problem Breakdown
This shows a practical use case for currying: creating specialized functions from a more general one. We create a generic logger and use it to create specific loggers for different levels.

### ⚙️ Solution Walkthrough
A curried `log` function is used to create an `errorLogger`.
\`\`\`javascript
const log = (level) => (message) => \`[\${level.toUpperCase()}] - \${message}\`;
const errorLogger = log('error');
errorLogger("Request failed."); // "[ERROR] - Request failed."
\`\`\`
### 📚 Key Concepts
- **Currying**: A useful pattern for creating configurable functions.
`,
'this-in-event-listener-arrow': `
### 💡 Problem Breakdown
This is a conceptual problem that shows the advantage of using arrow functions for event listeners within classes or objects. An arrow function will lexically capture the correct `this` from its surrounding method, avoiding the need to use `.bind(this)`.

### ⚙️ Solution Walkthrough
An arrow function is used as an event handler callback.
\`\`\`javascript
class MyComponent {
  constructor() { this.name = "My Component"; }
  attachHandler() {
    button.addEventListener('click', () => {
      // 'this' correctly refers to the MyComponent instance
      console.log(this.name);
    });
  }
}
\`\`\`
### 📚 Key Concepts
- **Lexical `this`**: The key feature of arrow functions that simplifies `this` management in callbacks.
`,
'function-hoisting-with-var': `
### 💡 Problem Breakdown
This is another look at the hoisting behavior of function expressions assigned to a `var`. The variable declaration (`var myFunc;`) is hoisted and initialized with `undefined`. The assignment (`= function(){...}`) happens where it is in the code.

### ⚙️ Solution Walkthrough
A call is made before the assignment.
\`\`\`javascript
try {
  myFunc();
} catch (e) {
  console.log(e.name); // 'TypeError'
}
var myFunc = () => { console.log("Hello"); };
\`\`\`
The code fails because at the time of the call, `myFunc` is `undefined`, not a function.

### 📚 Key Concepts
- **Hoisting**: The distinction between hoisting a declaration and an assignment.
`,
};
