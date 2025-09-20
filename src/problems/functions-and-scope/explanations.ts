// problem explanation--> 01
export const explanations: Record<string, string> = {
  // problem explanation--> 01
  "simple-function-return": `
### 💡 Problem Breakdown
This is the most basic form of a function. The goal is to define a reusable block of code that takes no inputs (parameters) and returns a static, unchanging value.

### ⚙️ Solution Walkthrough
The solution uses a standard function declaration. The \`function\` keyword is followed by the function name, a pair of parentheses for parameters (empty in this case), and a block of code in curly braces.
\`\`\`javascript
function greet() {
  // The 'return' statement specifies the value the function will output when called.
  return "Hello, Functions!";
}

// To use the function, you "call" or "invoke" it.
greet(); // This expression evaluates to the string "Hello, Functions!"
\`\`\`
1. **\`function greet()\`**: Declares a function named \`greet\`.
2. **\`return "..."\`**: The \`return\` statement ends the function's execution and specifies the value to be returned to where the function was called.
3. **\`greet()\`**: This is the function call that executes the code inside \`greet\`.

### 📚 Key Concepts
- **Function Declaration**: The traditional syntax for defining a named function.
- **\`return\` Statement**: A statement that ends function execution and specifies a value to be returned.
`,
  // problem explanation--> 02
  "function-with-parameters": `
### 💡 Problem Breakdown
Functions become truly powerful when they can accept input and produce a result based on that input. This problem involves writing a function that takes two numbers as inputs (parameters) and returns their product.

### ⚙️ Solution Walkthrough
The function is defined with two parameters, \`x\` and \`y\`, which act as local variables inside the function.
\`\`\`javascript
function multiply(x, y) {
  return x * y;
}

// The values 8 and 4 are called "arguments".
// They are passed to the function and assigned to the parameters x and y.
multiply(8, 4); // The function returns 32
\`\`\`
1. **Parameters (\`x, y\`)**: These are placeholders for the values that will be passed into the function when it is called.
2. **Arguments (\`8, 4\`)**: These are the actual values passed to the function. The first argument (8) is assigned to the first parameter (\`x\`), and the second argument (4) is assigned to the second parameter (\`y\`).
3. **Return Value**: The function performs the multiplication and returns the result.

### 📚 Key Concepts
- **Parameters**: Variables listed in a function's definition.
- **Arguments**: The actual values passed to a function when it is invoked.
`,
  // problem explanation--> 03
  "arrow-function-syntax": `
### 💡 Problem Breakdown
ES6 introduced arrow functions, which provide a more concise syntax for writing function expressions. They are especially useful for short, single-line functions. This problem asks you to rewrite a simple function using this modern syntax.

### ⚙️ Solution Walkthrough
The solution defines an arrow function named \`square\` and assigns it to a constant.
\`\`\`javascript
// Traditional function expression:
// const square = function(n) {
//   return n * n;
// };

// Arrow function syntax:
const square = (n) => n * n;

square(9); // 81
\`\`\`
1. **\`const square = ...\`**: Arrow functions are expressions, so they are typically assigned to variables (usually \`const\` to prevent reassignment).
2. **`(n)`**: The parameters are listed in parentheses before the "arrow". For a single parameter, the parentheses are optional: \`n => n * n\`.
3. **\`=>\`**: The "fat arrow" syntax that separates the parameters from the function body.
4. **`n * n`**: For single-expression arrow functions, the curly braces \`{}\` and the \`return\` keyword are optional. The result of the expression is returned automatically. This is called an "implicit return".

### 📚 Key Concepts
- **Arrow Function**: A compact alternative to a traditional function expression. It has some differences, most notably how it handles the \`this\` keyword.
- **Implicit Return**: A feature of single-expression arrow functions that makes them very concise.
`,
  // problem explanation--> 04
  "function-declaration": `
### 💡 Problem Breakdown
This problem focuses on the standard, classic way of defining a function: the **function declaration**. A key characteristic of function declarations is that they are "hoisted".

### ⚙️ Solution Walkthrough
A function is defined using the \`function\` keyword, followed by its name, parameters, and body.
\`\`\`javascript
// Because of hoisting, we can call the function *before* it appears in the code.
const result = declaredFunction(); // This works!

function declaredFunction() {
  return "This function was hoisted!";
}
\`\`\`
Hoisting is a JavaScript mechanism where variable and function declarations are conceptually moved to the top of their containing scope before code execution. The entire function declaration (name and body) is hoisted, making it available everywhere in its scope.

### 📚 Key Concepts
- **Function Declaration**: A statement that defines a named function using the \`function\` keyword.
- **Hoisting**: JavaScript's behavior of moving declarations to the top of the current scope.
`,
  // problem explanation--> 05
  "function-expression": `
### 💡 Problem Breakdown
This problem demonstrates another way to create a function: the **function expression**. This involves creating a function (often anonymous) and assigning it to a variable. Unlike function declarations, function expressions are not fully hoisted.

### ⚙️ Solution Walkthrough
An anonymous function is created and assigned to a \`const\` variable.
\`\`\`javascript
// Trying to call expressionFunction() here would result in an error.

const expressionFunction = function() {
  // This is an anonymous function because it has no name after the 'function' keyword.
  return "This is a function expression.";
};

// It must be called after the assignment.
expressionFunction();
\`\`\`
If \`expressionFunction\` were declared with \`var\`, its declaration (\`var expressionFunction;\`) would be hoisted, but its assignment (the function body) would not. This would lead to a \`TypeError\` if called early, as the variable would be \`undefined\`, not a function.

### 📚 Key Concepts
- **Function Expression**: A syntax where a function is created as part of an expression, typically a variable assignment.
- **Anonymous Function**: A function without a name.
`,
  // problem explanation--> 06
  "default-parameters": `
### 💡 Problem Breakdown
ES6 introduced default function parameters, which allow you to initialize parameters with default values if no value or \`undefined\` is passed when the function is called. This makes functions more robust and avoids the need for manual checks inside the function body.

### ⚙️ Solution Walkthrough
A default value of \`"Guest"\` is assigned to the \`userName\` parameter directly in the function signature.
\`\`\`javascript
function greet(userName = "Guest") {
  return \`Hello, \${userName}!\`;
}

greet("Alice"); // "Hello, Alice!" (The provided argument is used)
greet();        // "Hello, Guest!" (No argument, so the default is used)
greet(undefined); // "Hello, Guest!" (undefined triggers the default)
greet(null);      // "Hello, null!" (null is a value, so the default is NOT used)
\`\`\`
### 📚 Key Concepts
- **Default Parameters**: An ES6 feature for specifying default values for function parameters. The default is only used for arguments that are \`undefined\`.
`,
  // problem explanation--> 07
  "rest-parameters-sum": `
### 💡 Problem Breakdown
The rest parameter syntax (\`...\`) allows a function to accept an indefinite number of arguments as a true **array**. This is a modern and more flexible alternative to the older \`arguments\` object.

### ⚙️ Solution Walkthrough
The \`...args\` syntax gathers all arguments passed to the function into an array named \`args\`. We can then use standard array methods like \`.reduce()\` on it.
\`\`\`javascript
function sum(...args) {
  // 'args' is a real array, e.g., [1, 2, 3, 4, 5]
  return args.reduce((total, current) => total + current, 0);
}

sum(1, 2, 3, 4, 5); // 15
\`\`\`
The rest parameter must be the last parameter in a function's definition.

### 📚 Key Concepts
- **Rest Parameters**: Syntax (\`...\`) for representing an indefinite number of arguments as an array.
- **\`Array.prototype.reduce()\`**: A powerful method for aggregating array values.
`,
  // problem explanation--> 08
  "iife-pattern": `
### 💡 Problem Breakdown
An IIFE (Immediately Invoked Function Expression) is a design pattern in JavaScript where a function is defined and executed at the same time. Its primary use case is to create a new **private scope**.

### ⚙️ Solution Walkthrough
The syntax involves wrapping a function expression in parentheses to tell the parser to treat it as an expression, and then immediately invoking it with a final pair of parentheses.
\`\`\`javascript
const result = (function() {
  const privateVar = "I'm private!";
  // This variable only exists inside this scope.
  return \`This IIFE returned: "\${privateVar}"\`;
})();

// Trying to access privateVar here would cause a ReferenceError.
\`\`\`
This pattern was essential for preventing "global scope pollution" before ES6 modules became the standard way to manage scope and dependencies.

### 📚 Key Concepts
- **IIFE**: A pattern for creating a private scope and executing code immediately.
- **Encapsulation**: The practice of keeping variables and functions private to a specific part of the code.
`,
  // problem explanation--> 09
  "hoisting-declaration": `
### 💡 Problem Breakdown
This problem demonstrates **hoisting** with function declarations. Hoisting is a JavaScript mechanism where declarations of variables and functions are conceptually moved to the top of their scope before the code is executed. For function declarations, the entire function body is hoisted.

### ⚙️ Solution Walkthrough
The function \`declaredFunction\` is called *before* its physical location in the code.
\`\`\`javascript
// JavaScript engine effectively sees this:
// function declaredFunction() {
//   return "This function was hoisted!";
// }
// const result = declaredFunction();

const result = declaredFunction(); // This works perfectly.

function declaredFunction() {
  return "This function was hoisted!";
}
\`\`\`
This behavior is unique to function declarations and is a key reason they differ from function expressions.

### 📚 Key Concepts
- **Hoisting**: A JavaScript behavior where declarations are processed before any code is executed.
`,
  // problem explanation--> 10
  "hoisting-expression-var": `
### 💡 Problem Breakdown
This problem highlights the difference in hoisting between function declarations and function expressions assigned to a \`var\`. While the function *declaration* is fully hoisted, the function *expression* is not. Only the \`var\` declaration itself is hoisted, and it is initialized with \`undefined\`.

### ⚙️ Solution Walkthrough
An attempt to call the function before its assignment results in a \`TypeError\`.
\`\`\`javascript
// The engine interprets this as:
// 1. var myFunc; (Hoisted declaration, initialized to undefined)
// 2. myFunc(); (Attempting to invoke 'undefined', which is not a function)
// 3. myFunc = function() { ... }; (Assignment happens here)

try {
  myFunc();
} catch (e) {
  console.log(e.name); // "TypeError"
}

var myFunc = function() { return "Expression"; };
\`\`\`
### 📚 Key Concepts
- **Variable Hoisting**: For \`var\`, only the declaration is hoisted, not the assignment. This leads to the variable being \`undefined\` until the assignment line is reached.
`,
  // problem explanation--> 11
  "global-scope": `
### 💡 Problem Breakdown
The **global scope** is the outermost scope in a JavaScript program. Variables declared at the top level (outside of any function or block) are global. They are accessible from anywhere in the program.

### ⚙️ Solution Walkthrough
A conceptual example shows a function accessing a global variable.
\`\`\`javascript
const globalVar = "I'm global";

function accessGlobal() {
  // The engine can't find 'globalVar' in the local scope,
  // so it looks up the scope chain and finds it in the global scope.
  return globalVar;
}
accessGlobal(); // "I'm global"
\`\`\`
Overusing global variables is generally considered bad practice as it can lead to naming conflicts ("global scope pollution").

### 📚 Key Concepts
- **Global Scope**: The top-level scope available everywhere.
- **Scope Chain**: The mechanism for looking up variables in nested scopes.
`,
  // problem explanation--> 12
  "function-scope": `
### 💡 Problem Breakdown
Variables declared with \`var\` are **function-scoped**. This means they are only accessible within the function where they are declared, regardless of any blocks (like \`if\` statements or \`for\` loops) inside that function.

### ⚙️ Solution Walkthrough
A variable declared with \`var\` inside a function is not accessible outside of it.
\`\`\`javascript
function test() {
  var functionScoped = "Only in function";
  return functionScoped;
}
test(); // "Only in function"

// console.log(functionScoped); // Throws a ReferenceError
\`\`\`
This is a fundamental encapsulation mechanism in JavaScript.

### 📚 Key Concepts
- **Function Scope**: The scope created by a function declaration or expression.
`,
  // problem explanation--> 13
  "block-scope-let": `
### 💡 Problem Breakdown
ES6 introduced \`let\` and \`const\`, which are **block-scoped**. A block is any section of code within curly braces \`{}\` (e.g., in an \`if\` statement, \`for\` loop, or even a standalone block). Variables declared with \`let\` are only accessible within that block.

### ⚙️ Solution Walkthrough
A variable is declared with \`let\` inside an \`if\` block. It is not accessible after the block ends.
\`\`\`javascript
if (true) {
    let blockScoped = "Only in block";
}
// console.log(blockScoped); // Throws a ReferenceError
\`\`\`
This more granular scoping is generally safer and less error-prone than the function-scoping of \`var\`.

### 📚 Key Concepts
- **Block Scope**: The scope created by a pair of curly braces.
- **\`let\`**: The modern keyword for declaring block-scoped, reassignable variables.
`,
  // problem explanation--> 14
  "scope-chain": `
### 💡 Problem Breakdown
The **scope chain** is the mechanism that allows a function to access variables from its containing scopes. When the engine needs to find the value of a variable, it first looks in the current function's scope. If it's not found, it looks in the immediate outer scope, then the next outer scope, and so on, all the way up to the global scope.

### ⚙️ Solution Walkthrough
A deeply nested function \`child\` accesses variables from both its parent and grandparent scopes.
\`\`\`javascript
const grandParentVar = "Grandparent"; // Global scope
function parent() {
  const parentVar = "Parent"; // parent's scope
  function child() {
    // When resolving 'parentVar', it's found in the parent scope.
    // When resolving 'grandParentVar', it's found in the global scope.
    return \`Child can see: \${parentVar} and \${grandParentVar}\`;
  }
  return child();
}
\`\`\`
### 📚 Key Concepts
- **Lexical Scoping**: The scope chain is determined by where the functions are physically written in the code.
`,
  // problem explanation--> 15
  "pure-function": `
### 💡 Problem Breakdown
A **pure function** is a fundamental concept in functional programming. It has two strict properties:
1. **Deterministic**: Given the same input, it will *always* return the same output.
2. **No Side Effects**: It does not cause any observable changes outside of itself (e.g., modifying an external variable, logging to the console, writing to a file, making a network request).

### ⚙️ Solution Walkthrough
A function that doubles a number is a classic example of a pure function.
\`\`\`javascript
function double(n) {
  return n * 2;
}
\`\`\`
Its output depends only on its input \`n\`, and it doesn't change anything in the outside world. Pure functions are easy to test, reason about, and reuse.

### 📚 Key Concepts
- **Pure Function**: A function with no side effects and a deterministic output.
- **Functional Programming**: A programming paradigm that emphasizes the use of pure functions.
`,
  // problem explanation--> 16
  "impure-function": `
### 💡 Problem Breakdown
An **impure function** is any function that is not pure. This means it either has side effects or is not deterministic (or both). Most functions that interact with the outside world (like the DOM, network, or console) are impure.

### ⚙️ Solution Walkthrough
This function is impure because it has a **side effect**: it modifies the \`externalCounter\` variable, which exists outside the function's scope.
\`\`\`javascript
let externalCounter = 0; // External state

function incrementExternal() {
  externalCounter++; // This is a side effect
  return \`External counter is now: \${externalCounter}\`;
}
\`\`\`
Calling \`incrementExternal()\` multiple times will produce a different result each time, even though the input is the same (no input), so it is also not deterministic.

### 📚 Key Concepts
- **Side Effect**: Any interaction a function has with the outside world.
- **Impure Function**: A function that has side effects or is non-deterministic.
`,
  // problem explanation--> 17
  "higher-order-function-argument": `
### 💡 Problem Breakdown
A **higher-order function** is a function that either takes one or more functions as arguments, or returns a function as its result. This problem demonstrates the first case: passing a function as an argument.

### ⚙️ Solution Walkthrough
The \`applyOperation\` function is a higher-order function because it accepts another function, \`operation\`, as a parameter.
\`\`\`javascript
// A simple function to be used as a callback
const square = (n) => n * n;

// The higher-order function
const applyOperation = (val, operation) => {
  // It calls the function it received
  return operation(val);
};

applyOperation(5, square); // Returns 25
\`\`\`
The function that is passed as an argument is often called a **callback function**. This pattern is extremely common in JavaScript (e.g., with \`.map()\`, \`.filter()\`, and event listeners).

### 📚 Key Concepts
- **Higher-Order Function**: A function that operates on other functions.
- **Callback Function**: A function passed as an argument to be executed later.
`,
  // problem explanation--> 18
  "higher-order-function-return": `
### 💡 Problem Breakdown
This problem demonstrates the second characteristic of a higher-order function: returning another function as its result. This pattern is often used to create "function factories" that produce specialized functions.

### ⚙️ Solution Walkthrough
The \`createMultiplier\` function is a higher-order function. It takes a \`factor\` and returns a *new* function. The returned function "remembers" the \`factor\` from its creation environment due to a closure.
\`\`\`javascript
// This is a function factory
function createMultiplier(factor) {
  // It returns this new function
  return function(n) {
    return n * factor;
  };
}

// Create a specialized function that doubles numbers
const double = createMultiplier(2);
// Create another specialized function that triples
const triple = createMultiplier(3);

double(7); // 14
triple(7); // 21
\`\`\`
### 📚 Key Concepts
- **Function Factory**: A function that creates and returns other functions.
- **Closure**: A core concept where an inner function has access to its outer function's scope, even after the outer function has returned.
`,
  // problem explanation--> 19
  "sync-callback": `
### 💡 Problem Breakdown
A **synchronous callback** is a callback function that is executed immediately during the execution of the higher-order function. The higher-order function waits for the callback to complete before it continues.

### ⚙️ Solution Walkthrough
The \`processArray\` function iterates through an array and calls the provided \`callback\` for each item. The execution is synchronous; the \`for\` loop does not finish until all the callback calls have completed.
\`\`\`javascript
function processArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    // The callback is executed immediately in each iteration
    callback(array[i]);
  }
}
processArray(['apple', 'banana'], (item) => {
  console.log(\`Processing \${item}\`);
});
console.log("Done");
// Output:
// Processing apple
// Processing banana
// Done
\`\`\`
This is the behavior of built-in array methods like \`.forEach()\`, \`.map()\`, and \`.filter()`.

### 📚 Key Concepts
- **Synchronous Callback**: A callback that is executed immediately and blocks further execution until it completes.
`,
  // problem explanation--> 20
  "arguments-object": `
### 💡 Problem Breakdown
This problem demonstrates the \`arguments\` object, which is a feature of traditional functions (declared with the \`function\` keyword). The \`arguments\` object is an array-like object that contains all the arguments passed to the function, regardless of the number of parameters defined.

### ⚙️ Solution Walkthrough
A \`sum\` function is defined with no parameters, but it uses the \`arguments\` object to access all the values it receives.
\`\`\`javascript
function sum() {
  // 'arguments' is array-like, but not a true array.
  // It has a .length property but not methods like .reduce() or .forEach().
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
sum(10, 20, 30); // 60
\`\`\`
**Note**: In modern JavaScript, it is a best practice to use **rest parameters** (\`...args\`) instead of the \`arguments\` object, as rest parameters provide a true array.

### 📚 Key Concepts
- **\`arguments\` Object**: A special, array-like object available in \`function\` functions that contains the passed arguments.
`,
  // problem explanation--> 21
  "object-method-this": `
### 💡 Problem Breakdown
A **method** is a function that is a property of an object. Inside a method, the keyword \`this\` refers to the object that the method was called on. This allows the method to access other properties of the same object.

### ⚙️ Solution Walkthrough
The \`greet\` method on the \`person\` object uses \`this.name\` to access the \`name\` property of that same object.
\`\`\`javascript
const person = {
  name: "Alice",
  greet: function () {
    // 'this' refers to the 'person' object
    return \`Hello, my name is \${this.name}.\`;
  },
};

person.greet(); // "Hello, my name is Alice."
\`\`\`
The value of \`this\` is determined by *how* the function is called. Because it's called as a method of \`person\` (\`person.greet()\`), \`this\` is bound to \`person\`.

### 📚 Key Concepts
- **Method**: A function that is a property of an object.
- **\`this\` Keyword**: A reference to the execution context of a function. In a method call, it refers to the object the method belongs to.
`,
  // problem explanation--> 22
  "this-global-scope": `
### 💡 Problem Breakdown
This is a conceptual problem about the default binding for the \`this\` keyword. When \`this\` is used in the **global scope** (outside of any function), it refers to the **global object**.

### ⚙️ Solution Walkthrough
- **In a browser environment**: The global object is \`window\`. So, \`this\` in the global scope is \`window\`.
- **In a Node.js environment**: The global object is \`global\`.
\`\`\`javascript
// In a browser's console
console.log(this === window); // true
\`\`\`
This also applies when a regular function is called without a specific context (not as a method, not with \`new\`, etc.) in non-strict mode.

### 📚 Key Concepts
- **Global Object**: The top-level object in a JavaScript environment (\`window\` in browsers).
- **\`this\` Binding**: The default binding for \`this\` is the global object (in non-strict mode).
`,
  // problem explanation--> 23
  "this-arrow-function-lexical": `
### 💡 Problem Breakdown
This problem highlights a crucial difference between arrow functions and traditional functions. Arrow functions do **not** have their own \`this\` binding. Instead, they inherit the \`this\` value from their **surrounding lexical scope**—the scope where they were defined.

### ⚙️ Solution Walkthrough
A conceptual example in an object method.
\`\`\`javascript
const myObject = {
  name: 'My Object',
  regularMethod: function() {
    // 'this' here is myObject
    const arrowFunc = () => {
      // 'this' inside the arrow function is inherited from regularMethod
      // so it is also myObject
      return this.name;
    };
    return arrowFunc();
  }
};
myObject.regularMethod(); // 'My Object'
\`\`\`
This behavior is extremely useful for callbacks inside methods (like in \`setTimeout\` or event listeners), as it avoids the common problem of losing the intended \`this\` context.

### 📚 Key Concepts
- **Lexical \`this\`**: The behavior of \`this\` in arrow functions, which is determined by where the function is written, not how it is called.
`,
  // problem explanation--> 24
  "function-call-method": `
### 💡 Problem Breakdown
The \`.call()\` method is a way to invoke a function and explicitly specify what the \`this\` keyword should refer to inside that function. It also allows you to pass arguments to the function individually.

### ⚙️ Solution Walkthrough
The \`greet\` function is "borrowed" and called with the context of \`person2\`.
\`\`\`javascript
function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}
const person1 = { name: "John" };
const person2 = { name: "Jane" };

// The first argument to .call() is the 'this' context.
// Subsequent arguments are passed to the function.
greet.call(person2, "Hi", "!"); // "Hi, Jane!"
\`\`\`
### 📚 Key Concepts
- **\`.call()\`**: A method on \`Function.prototype\` for explicit \`this\` binding.
- **Explicit Binding**: Manually setting the \`this\` context for a function call.
`,
  // problem explanation--> 25
  "function-apply-method": `
### 💡 Problem Breakdown
The \`.apply()\` method is very similar to \`.call()\`. It invokes a function with a specified \`this\` context. The only difference is how it accepts arguments: \`.apply()\` takes the arguments as a single **array**.

### ⚙️ Solution Walkthrough
The \`Math.max\` function is called with an array of numbers using \`.apply()\`.
\`\`\`javascript
const numbers = [5, 6, 2, 3, 7];

// Math.max expects individual arguments, not an array.
// .apply() "spreads" the array elements into arguments for Math.max.
const max = Math.max.apply(null, numbers); // max is 7
\`\`\`
The first argument to \`.apply()\` is the \`this\` context. For a simple function like \`Math.max\` that doesn't use \`this\`, \`null\` is typically passed. In modern JavaScript, the spread syntax (\`Math.max(...numbers)\`) is usually preferred over \`.apply()\` for this use case.

### 📚 Key Concepts
- **\`.apply()\`**: A method for explicit \`this\` binding where arguments are provided as an array.
`,
  // problem explanation--> 26
  "function-bind-method": `
### 💡 Problem Breakdown
The \`.bind()\` method is different from \`.call()\` and \`.apply()\`. It does **not** execute the function immediately. Instead, it creates a **new function** that, when called later, will have its \`this\` keyword permanently set to the provided value.

### ⚙️ Solution Walkthrough
A classic example is losing the \`this\` context when a method is passed as a callback. \`.bind()\` solves this.
\`\`\`javascript
const module = {
  x: 42,
  getX: function() { return this.x; }
};

const unboundGetX = module.getX;
// unboundGetX(); // Would return undefined (this is the global object)

// Create a new function where 'this' is permanently bound to 'module'
const boundGetX = unboundGetX.bind(module);
boundGetX(); // 42
\`\`\`
### 📚 Key Concepts
- **\`.bind()\`**: A method for creating a new function with a fixed \`this\` context.
- **Explicit Binding**: A way to permanently lock the \`this\` value for a function.
`,
  // problem explanation--> 27
  "recursive-countdown": `
### 💡 Problem Breakdown
A **recursive function** is a function that calls itself to solve a problem. Every recursive function needs two main parts:
1.  **Base Case**: A condition that stops the recursion to prevent an infinite loop.
2.  **Recursive Case**: The part of the function where it calls itself with a modified input that moves it closer to the base case.

### ⚙️ Solution Walkthrough
The function logs a number and then calls itself with a smaller number until it reaches the base case.
\`\`\`javascript
function countdown(n) {
  // Base Case: Stop when the number is less than 1.
  if (n < 1) {
    return;
  }
  
  console.log(n);
  
  // Recursive Case: Call the function with n - 1.
  countdown(n - 1);
}
\`\`\`
When \`countdown(5)\` is called, it logs 5, then calls \`countdown(4)\`, which logs 4, and so on, until the base case is reached.

### 📚 Key Concepts
- **Recursion**: A problem-solving technique where a function calls itself.
- **Base Case**: The stopping condition for the recursion.
`,
  // problem explanation--> 28
  "first-class-functions": `
### 💡 Problem Breakdown
In JavaScript, functions are "first-class citizens." This means a function is just another type of value. It can be treated like any other value, such as a number or a string. This includes:
- Assigning it to a variable.
- Storing it in an array or object.
- Passing it as an argument to another function.
- Returning it as the result of another function.

### ⚙️ Solution Walkthrough
This problem demonstrates assigning a function to a variable.
\`\`\`javascript
const sayHello = function() {
  return "Hello!";
};

// The variable 'myFunc' now holds a reference to the function.
const myFunc = sayHello;

// We can invoke the function through the new variable.
myFunc(); // "Hello!"
\`\`\`
This "first-class" nature is what makes higher-order functions possible in JavaScript.

### 📚 Key Concepts
- **First-Class Functions**: The ability to treat functions as values.
`,
  // problem explanation--> 29
  "named-function-expression": `
### 💡 Problem Breakdown
A **Named Function Expression (NFE)** is a function expression where the function is given a name. This name is primarily useful for two reasons:
1.  **Debugging**: The name will appear in stack traces, making it easier to debug.
2.  **Recursion**: The function can reliably refer to itself using its name, even if the variable it's assigned to changes.

### ⚙️ Solution Walkthrough
The name \`fac\` is only accessible *inside* the function itself.
\`\`\`javascript
const factorial = function fac(n) {
  // 'fac' is available here for the recursive call.
  return n < 2 ? 1 : n * fac(n - 1);
};

// 'fac' is NOT available here in the outer scope.
// fac(5); // Would throw a ReferenceError.
factorial(5); // 120
\`\`\`
### 📚 Key Concepts
- **Named Function Expression**: A function expression with a name that is local to the function's own scope.
`,
  // problem explanation--> 30
  "function-shadowing": `
### 💡 Problem Breakdown
This is the same as "Variable Shadowing." When a variable is declared in an inner scope with the same name as a variable in an outer scope, the inner variable "shadows" (or hides) the outer one. Within that inner scope, any reference to the name will resolve to the inner variable.

### ⚙️ Solution Walkthrough
A local variable \`x\` inside a function shadows the outer \`x\`.
\`\`\`javascript
let x = "outer";

function testShadow() {
  let x = "inner"; // This 'x' is a new, separate variable.
  return \`Inside function, x is "\${x}"\`; // "inner"
}

console.log(testShadow());
console.log(x); // "outer" (The outer 'x' is unaffected)
\`\`\`
### 📚 Key Concepts
- **Variable Shadowing**: A direct consequence of how lexical scoping works.
`,
  // problem explanation--> 31
  'anonymous-function': `
### 💡 Problem Breakdown
An anonymous function is a function that is declared without any named identifier. They are often used in scenarios where a function is created and immediately used, such as a callback function for another higher-order function.

### ⚙️ Solution Walkthrough
The most common use is as a callback. For example, with \`setTimeout\`.
\`\`\`javascript
setTimeout(function() {
  // This function has no name. It's defined right where it's needed.
  console.log("This is an anonymous function.");
}, 1000);

// Arrow functions are also a form of anonymous function.
const anArrowFunc = () => "Also anonymous";
\`\`\`
### 📚 Key Concepts
- **Anonymous Function**: A function without a name.
- **Callbacks**: A primary use case for anonymous functions, making code more self-contained.
`,
  // problem explanation--> 32
  'implicit-return-arrow': `
### 💡 Problem Breakdown
This problem focuses on a key syntactic sugar of arrow functions. If the body of an arrow function consists of only a single expression, you can omit the curly braces \`{}\` and the \`return\` keyword. The value of that expression will be implicitly returned.

### ⚙️ Solution Walkthrough
A concise arrow function is compared to its more verbose equivalent.
\`\`\`javascript
// Concise body with implicit return
const double = (n) => n * 2;

// Equivalent block body with explicit return
const doubleVerbose = (n) => {
  return n * 2;
};
\`\`\`
This feature makes arrow functions extremely popular for short callbacks, like those used in array methods.

### 📚 Key Concepts
- **Implicit Return**: A feature that makes single-expression arrow functions highly concise.
`,
  // problem explanation--> 33
  'function-length-property': `
### 💡 Problem Breakdown
Every function in JavaScript has a built-in \`.length\` property. This property is an integer that indicates the number of named parameters the function expects to receive. It does not count rest parameters or parameters with default values.

### ⚙️ Solution Walkthrough
The \`.length\` property of a function is inspected.
\`\`\`javascript
function example(a, b, c) {
  // ...
}
console.log(example.length); // 3

const another = (x, y) => {};
console.log(another.length); // 2
\`\`\`
### 📚 Key Concepts
- **Function Introspection**: The ability to inspect the properties of a function object itself.
- **Arity**: The number of arguments or parameters a function takes. \`.length\` reflects the function's arity.
`,
  // problem explanation--> 34
  'scope-let-vs-var-loop': `
### 💡 Problem Breakdown
This problem demonstrates a classic JavaScript pitfall that was solved by the introduction of \`let\`. When using \`var\` in a \`for\` loop to create asynchronous callbacks, all callbacks will reference the same single loop variable. By the time they execute, the loop has finished, and they all see the final value of the variable. \`let\`, being block-scoped, creates a new binding for each iteration, so each callback captures the correct value from its respective iteration.

### ⚙️ Solution Walkthrough
A loop with \`setTimeout\` is used to show the difference.
\`\`\`javascript
// With 'var', all callbacks log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(\`var: \${i}\`), 10);
}

// With 'let', the callbacks log 0, 1, 2
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(\`let: \${j}\`), 10);
}
\`\`\`
### 📚 Key Concepts
- **Block Scope**: The key feature of \`let\` that solves this problem.
- **Closures in Loops**: Understanding how closures capture variables from their surrounding scope.
`,
  // problem explanation--> 35
  'pass-by-value': `
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
  // problem explanation--> 36
  'pass-by-reference': `
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
  // problem explanation--> 37
  'function-constructor': `
### 💡 Problem Breakdown
This is a conceptual problem about an alternative, rarely used way to create functions: the \`Function\` constructor. It creates a new \`Function\` object from a string of code. Its use is generally discouraged.

### ⚙️ Solution Walkthrough
A simple function is created using the constructor.
\`\`\`javascript
// The last argument is the function body. Preceding arguments are parameter names.
const sum = new Function('a', 'b', 'return a + b');
sum(2, 3); // 5
\`\`\`
**Why it's not recommended**:
- **Security**: It has similar security risks to \`eval()\`.
- **Performance**: It's much slower than declaring a function normally.
- **Scope**: Functions created this way do not form closures; they are always created in the global scope.

### 📚 Key Concepts
- **`Function` Constructor**: A way to create functions from strings at runtime.
`,
  // problem explanation--> 38
  'currying-multiply': `
### 💡 Problem Breakdown
**Currying** is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument. For example, a function \`f(a, b, c)\` would be transformed into \`f(a)(b)(c)\`.

### ⚙️ Solution Walkthrough
A series of nested arrow functions is used to create the curried function.
\`\`\`javascript
const multiply = (a) => (b) => (c) => a * b * c;

const result = multiply(2)(3)(4); // 24
\`\`\`
Each time the function is called, it returns a new function that has "remembered" the previous argument via a closure, until all arguments have been provided and the final result can be calculated.

### 📚 Key Concepts
- **Currying**: A functional programming technique for transforming functions.
- **Closures**: The mechanism that allows each nested function to remember the arguments from the outer functions.
`,
  // problem explanation--> 39
  'partial-application': `
### 💡 Problem Breakdown
**Partial application** is a technique where you create a new function by pre-filling (or "binding") some of the arguments of an existing function. The new function will have fewer parameters than the original.

### ⚙️ Solution Walkthrough
The \`.bind()\` method is a perfect tool for partial application.
\`\`\`javascript
function add(a, b, c) {
  return a + b + c;
}

// Create a new function 'addTen' where the first argument 'a' is fixed to 10.
const addTen = add.bind(null, 10);

addTen(3, 5); // 10 + 3 + 5 = 18
\`\`\`
The first argument to \`.bind()\` sets the \`this\` context (we use \`null\` here as we don't need it). Subsequent arguments are the ones that get pre-filled.

### 📚 Key Concepts
- **Partial Application**: Creating a more specialized function from a more general one by fixing some of its arguments.
`,
  // problem explanation--> 40
  'this-event-handler': `
### 💡 Problem Breakdown
This is a conceptual problem about the value of \`this\` in browser event handlers. When you attach an event listener using a **traditional function expression**, the \`this\` keyword inside that handler will refer to the DOM element that the event was fired on.

### ⚙️ Solution Walkthrough
A conceptual example of attaching a click listener.
\`\`\`javascript
// In a browser environment:
const button = document.createElement('button');
button.textContent = 'Click Me';

button.addEventListener('click', function() {
  // 'this' refers to the 'button' element.
  console.log(this.textContent); // "Click Me"
  this.style.color = 'red';
});
\`\`\`
**Note**: If an arrow function were used as the event listener, \`this\` would be inherited from the surrounding scope, not the button.

### 📚 Key Concepts
- **Event Handling**: A core part of front-end JavaScript.
- **\`this\` Binding**: The context of \`this\` is determined by how the function is called. Event listeners call their handlers with \`this\` set to the target element.
`,
  // problem explanation--> 41
  'function-as-object-property': `
### 💡 Problem Breakdown
In JavaScript, functions are first-class citizens, which means they can be treated like any other value. This problem demonstrates storing a function as a property of an object. When a function is a property of an object, it is called a **method**.

### ⚙️ Solution Walkthrough
A \`config\` object is created with a property \`run\` that holds a function.
\`\`\`javascript
const config = {
  id: 1,
  run: function() {
    return "Running the config function!";
  }
};

// The function is called using method syntax.
config.run(); // "Running the config function!"
\`\`\`
### 📚 Key Concepts
- **First-Class Functions**: The ability to treat functions as values.
- **Method**: A function that is a property of an object.
`,
  // problem explanation--> 42
  'hoisting-var-declaration': `
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
  // problem explanation--> 43
  'temporal-dead-zone-let': `
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
  // problem explanation--> 44
  'arrow-function-no-arguments': `
### 💡 Problem Breakdown
This problem highlights a key difference between arrow functions and traditional functions. Arrow functions do **not** have their own \`arguments\` object. The \`arguments\` object is an array-like object available only in functions declared with the \`function\` keyword.

### ⚙️ Solution Walkthrough
A conceptual comparison.
\`\`\`javascript
// This works
function traditional() {
  return arguments.length;
}
traditional(1, 2, 3); // 3

// This does NOT work
const arrow = () => {
  // return arguments.length; // Throws a ReferenceError in strict mode
};
\`\`\`
To capture all arguments in an arrow function, you must use **rest parameters** (\`...args\`).

### 📚 Key Concepts
- **Arrow Functions**: Do not have their own \`arguments\` or \`this\` binding.
- **Rest Parameters**: The modern way to handle an indefinite number of arguments.
`,
  // problem explanation--> 45
  'iife-with-params': `
### 💡 Problem Breakdown
An Immediately Invoked Function Expression (IIFE) can be made more flexible by passing arguments to it. The arguments are passed in the final pair of parentheses that invokes the function.

### ⚙️ Solution Walkthrough
A string argument is passed into an IIFE.
\`\`\`javascript
const message = "Hello IIFE";

(function(p) {
  // 'p' is the parameter that receives the argument.
  console.log(\`The IIFE received: "\${p}"\`);
})(message);
\`\`\`
This was a common pattern for aliasing global variables (like passing \`window\` and naming it \`global\`) or for providing initial configuration values.

### 📚 Key Concepts
- **IIFE**: A design pattern for creating private scope.
- **Function Arguments**: The mechanism for passing data into functions.
`,
  // problem explanation--> 46
  'function-overwriting': `
### 💡 Problem Breakdown
In JavaScript, there is no traditional function "overloading" (having multiple functions with the same name but different parameters). If you declare a function with the same name as an existing function in the same scope, the new declaration will simply **overwrite** the previous one.

### ⚙️ Solution Walkthrough
A function is defined twice.
\`\`\`javascript
function myFunction() {
  return "First definition";
}

// This overwrites the previous definition.
function myFunction() {
  return "Second definition";
}

myFunction(); // returns "Second definition"
\`\`\`
Due to hoisting of function declarations, the second definition is what will be available throughout the entire scope.

### 📚 Key Concepts
- **Function Overwriting**: Later declarations overwrite earlier ones.
`,
  // problem explanation--> 47
  'callback-hell-conceptual': `
### 💡 Problem Breakdown
"Callback hell" (or the "pyramid of doom") is an anti-pattern that arises from deeply nested asynchronous callbacks. As each async operation depends on the one before it, the code becomes increasingly indented, making it extremely difficult to read, reason about, and handle errors in.

### ⚙️ Solution Walkthrough
A conceptual example of nested callbacks for sequential operations.
\`\`\`javascript
// Conceptual example
getData(function (a) {
  getMoreData(a, function (b) {
    getEvenMoreData(b, function (c) {
      // And so on...
      // Error handling at each step is complex.
    }, handleErrorC);
  }, handleErrorB);
}, handleErrorA);
\`\`\`
1.  **Readability**: The deep nesting makes the logical flow hard to follow.
2.  **Error Handling**: Managing errors at each separate level is cumbersome.
3.  **The Solution**: Promises and \`async/await\` were specifically designed to solve this problem, allowing you to write asynchronous code in a flat, linear, and more readable style.

### 📚 Key Concepts
-   **Callback Hell**: An anti-pattern resulting from deeply nested asynchronous callbacks.
`,
  // problem explanation--> 48
  'this-binding-new': `
### 💡 Problem Breakdown
This problem explores one of the four rules for \`this\` binding: the \`new\` binding. When a function is called with the \`new\` keyword (as a constructor), the JavaScript engine does a few things automatically:
1. Creates a brand new empty object.
2. Binds the \`this\` keyword to this new object.
3. Executes the constructor function.
4. Returns the new object (unless the constructor explicitly returns another object).

### ⚙️ Solution Walkthrough
A constructor function is called with \`new\`.
\`\`\`javascript
function Person(name) {
  // 'this' is a new empty object {}
  this.name = name;
  // 'this' is now { name: 'Alice' } and is returned
}
const p = new Person('Alice');
\`\`\`
### 📚 Key Concepts
- **Constructor Function**: A function designed to be used with the \`new\` keyword.
- **\`this\` Binding**: The \`new\` keyword has high precedence for determining the \`this\` context.
`,
  // problem explanation--> 49
  'this-strict-mode': `
### 💡 Problem Breakdown
This problem highlights a key difference that **strict mode** introduces for \`this\` binding. In non-strict mode, if a regular function is called without a specific context, \`this\` defaults to the global object (\`window\` in browsers). Strict mode prevents this potentially dangerous behavior.

### ⚙️ Solution Walkthrough
In strict mode, \`this\` remains \`undefined\` in a simple function call.
\`\`\`javascript
'use strict';
function checkThis() {
  // In strict mode, 'this' is undefined here.
  // In non-strict mode, it would be the 'window' object.
  return this;
}
checkThis(); // undefined
\`\`\`
This helps prevent accidental modification of global variables.

### 📚 Key Concepts
- **Strict Mode**: A more restrictive variant of JavaScript that catches common errors.
- **\`this\` Binding**: Strict mode changes the default binding from the global object to \`undefined\`.
`,
  // problem explanation--> 50
  'function-name-property': `
### 💡 Problem Breakdown
Every function in JavaScript has a built-in, read-only \`.name\` property that returns a string representing the name of the function. This is useful for debugging and logging.

### ⚙️ Solution Walkthrough
The \`.name\` property is inspected for different function types.
\`\`\`javascript
function namedFunction() {}
console.log(namedFunction.name); // "namedFunction"

const expression = function() {};
console.log(expression.name); // "expression" (inferred from the variable)

const arrow = () => {};
console.log(arrow.name); // "arrow" (inferred)

console.log((function(){}).name); // "" (an anonymous function)
\`\`\`
Modern JavaScript engines are very good at inferring the name from the context in which the function is defined.

### 📚 Key Concepts
- **Function Introspection**: Inspecting the properties of a function object.
`,
  // problem explanation--> 51
  'generator-function-basic': `
### 💡 Problem Breakdown
A **generator function** is a special type of function that can be paused and resumed. It is declared with \`function*\`. Instead of using \`return\`, a generator uses the \`yield\` keyword to produce a sequence of values.

### ⚙️ Solution Walkthrough
A simple generator function yields two numbers.
\`\`\`javascript
function* numberGenerator() {
  console.log('Starting');
  yield 1; // Pauses here, returns 1
  console.log('Resumed');
  yield 2; // Pauses here, returns 2
}

const gen = numberGenerator(); // Calling the function returns an iterator.
\`\`\`
Calling the generator does not execute its body. It returns an iterator object. The code inside the generator only runs when you call the \`.next()\` method on the iterator.

### 📚 Key Concepts
- **Generator Function**: A function declared with \`function*\` that returns an iterator.
- **`yield`**: An operator used to pause a generator and return a value.
`,
  // problem explanation--> 52
  'generator-function-iterator': `
### 💡 Problem Breakdown
When you call a generator function, it returns an **iterator** object. This object has a \`.next()\` method. Each time you call \`.next()\`, the generator's code executes until it hits a \`yield\` statement. The \`.next()\` call returns an object with two properties: \`value\` (the yielded value) and \`done\` (a boolean indicating if the generator has finished).

### ⚙️ Solution Walkthrough
The iterator from a generator is used.
\`\`\`javascript
function* abcGenerator() {
  yield 'a';
  yield 'b';
}
const gen = abcGenerator();

gen.next(); // { value: 'a', done: false }
gen.next(); // { value: 'b', done: false }
gen.next(); // { value: undefined, done: true }
\`\`\`
### 📚 Key Concepts
- **Iterator Protocol**: The pattern of an object with a \`.next()\` method that returns \`{ value, done }\` objects. Generators are a simple way to create iterators.
`,
  // problem explanation--> 53
  'lexical-environment-conceptual': `
### 💡 Problem Breakdown
This is a core conceptual problem about how JavaScript engines manage scope. A **Lexical Environment** is an internal data structure that holds identifier-variable mappings. It's essentially the "scope" of a function or block. Every lexical environment has two components:
1.  **Environment Record**: An object-like structure that stores the variable and function declarations for the current scope.
2.  **Reference to the Outer Environment**: A link to the lexical environment of the containing scope. This link is what forms the **scope chain**.

When code requests a variable, the engine searches the current environment record. If not found, it follows the reference to the outer environment and searches there, continuing all the way to the global scope.

### 📚 Key Concepts
- **Lexical Environment**: The formal specification term for "scope".
- **Scope Chain**: Formed by the nested links between lexical environments.
`,
  // problem explanation--> 54
  'this-with-settimeout': `
### 💡 Problem Breakdown
This problem demonstrates a classic JavaScript pitfall. When you use a traditional \`function\` as a callback for \`setTimeout\` inside a method, the \`this\` keyword inside that callback does not refer to the object. In a browser, it will refer to the \`window\` object because \`setTimeout\` calls it as a standalone function.

### ⚙️ Solution Walkthrough
The problem and two common solutions are shown.
\`\`\`javascript
const obj = {
  name: 'My Object',
  test: function() {
    // Problem: 'this' will be 'window' or 'undefined' in strict mode
    setTimeout(function() { console.log(this.name); }, 100);

    // Solution 1: Use 'bind'
    setTimeout(function() { console.log(this.name); }.bind(this), 100);

    // Solution 2 (Modern): Use an arrow function
    setTimeout(() => { console.log(this.name); }, 100);
  }
};
\`\`\`
The arrow function is the modern solution because it inherits \`this\` lexically from its surrounding scope (\`test\`), where \`this\` correctly refers to \`obj\`.

### 📚 Key Concepts
- **Losing \`this\`**: A common problem when passing methods as callbacks.
- **Lexical \`this\`**: The key feature of arrow functions that solves this problem.
`,
  // problem explanation--> 55
  'function-composition': `
### 💡 Problem Breakdown
**Function composition** is the process of combining two or more functions to produce a new function. The output of one function becomes the input of the next. Mathematically, `(f ∘ g)(x)` is equivalent to `f(g(x))`.

### ⚙️ Solution Walkthrough
A higher-order function \`compose\` is created to perform the composition.
\`\`\`javascript
const double = (x) => x * 2;
const addTen = (x) => x + 10;

// compose(f, g) means run g first, then f
const compose = (f, g) => (x) => f(g(x));

const composedFunc = compose(addTen, double);
composedFunc(5); // g(x) -> double(5) -> 10. f(10) -> addTen(10) -> 20.
\`\`\`
### 📚 Key Concepts
- **Function Composition**: A fundamental pattern in functional programming.
- **Higher-Order Functions**: \`compose\` is a higher-order function because it takes functions as arguments and returns a new function.
`,
  // problem explanation--> 56
  'function-piping': `
### 💡 Problem Breakdown
**Piping** (or pipelining) is similar to composition but the order of execution is more natural to read from left to right. \`pipe(f, g)(x)\` is equivalent to \`g(f(x))\`. It "pipes" the result of one function into the next.

### ⚙️ Solution Walkthrough
A higher-order function \`pipe\` is created using \`.reduce()\`.
\`\`\`javascript
const double = (x) => x * 2;
const addTen = (x) => x + 10;

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const pipedFunc = pipe(double, addTen);
pipedFunc(5); // double(5) -> 10. addTen(10) -> 20.
\`\`\`
### 📚 Key Concepts
- **Function Piping**: A left-to-right version of function composition.
- **`Array.prototype.reduce()`**: Used to elegantly chain the function calls together.
`,
  // problem explanation--> 57
  'side-effects-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem about a core tenet of functional programming. A **side effect** is any interaction a function has with the outside world that is observable outside of the function, other than its return value.
- **Pure functions** have no side effects.
- **Impure functions** have side effects.

### ⚙️ Solution Walkthrough
Common examples of side effects include:
- Modifying a global variable or an argument passed by reference.
- Writing to the console (\`console.log\`).
- Changing the DOM.
- Making a network request (\`fetch\`).
- Writing to a file or database.

While side effects are necessary for any useful program, a good practice is to isolate them from your core business logic, which should be composed of pure functions as much as possible.

### 📚 Key Concepts
- **Side Effect**: A function's interaction with the "outside world".
- **Purity**: The absence of side effects.
`,
  // problem explanation--> 58
  'memoization-closure': `
### 💡 Problem Breakdown
**Memoization** is an optimization technique where the results of expensive function calls are cached. When the function is called again with the same inputs, the cached result is returned instead of re-computing it. This is a practical application of a closure.

### ⚙️ Solution Walkthrough
A higher-order function \`memoize\` is created. It uses a closure to maintain a private \`cache\`.
\`\`\`javascript
const memoize = (fn) => {
  const cache = {}; // This cache is kept in a closure.
  
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key]; // Return from cache
    }
    const result = fn(...args);
    cache[key] = result; // Store in cache
    return result;
  };
};
\`\`\`
### 📚 Key Concepts
- **Memoization**: An optimization technique for speeding up functions.
- **Closure**: The \`cache\` object persists between calls because it is "closed over" by the returned function.
- **Higher-Order Function**: \`memoize\` takes a function and returns a new, enhanced function.
`,
  // problem explanation--> 59
  'block-scope-in-loop': `
### 💡 Problem Breakdown
This is a conceptual problem that reinforces a key behavior of \`let\` in loops. The JavaScript specification states that for loops like \`for\`, \`for...in\`, and \`for...of\`, if the loop variable is declared with \`let\`, a new lexical environment (a new scope) with a fresh binding for that variable is created for *each iteration*.

### ⚙️ Solution Walkthrough
This is the underlying reason why the \`let\`-in-loop with \`setTimeout\` works correctly.
\`\`\`javascript
// Conceptually, the engine does something like this:
{ // Iteration 1 scope
  let i = 0;
  setTimeout(() => console.log(i)); // This closure captures i=0
}
{ // Iteration 2 scope
  let i = 1;
  setTimeout(() => console.log(i)); // This closure captures i=1
}
// ...and so on.
\`\`\`
This behavior is specific to loop headers and is a crucial feature for writing correct asynchronous code in loops.

### 📚 Key Concepts
- **Loop Variable Binding**: A special behavior of \`let\` that creates a new binding for each loop iteration.
`,
  // problem explanation--> 60
  'arrow-function-no-prototype': `
### 💡 Problem Breakdown
This problem demonstrates a key limitation of arrow functions. Arrow functions cannot be used as constructors. They do not have their own \`.prototype\` property, and attempting to call one with the \`new\` keyword will result in a \`TypeError\`.

### ⚙️ Solution Walkthrough
The code attempts to use an arrow function with \`new\`.
\`\`\`javascript
const MyArrow = () => {};

// console.log(MyArrow.prototype); // undefined

// new MyArrow(); // Throws TypeError: MyArrow is not a constructor
\`\`\`
This is because arrow functions are designed to be lightweight and lexically bind \`this\`, so they lack the internal mechanisms required for constructors.

### 📚 Key Concepts
- **Constructors**: Functions designed to be called with \`new\` to create object instances.
- **Arrow Functions**: Cannot be used as constructors.
`,
  // problem explanation--> 61
  'this-in-nested-function': `
### 💡 Problem Breakdown
This shows another classic pitfall with \`this\`. When a regular \`function\` is defined inside a method, it does not inherit the \`this\` value of the method. Instead, its \`this\` is determined by how it's called. A simple invocation results in \`this\` being the global object (in non-strict mode) or \`undefined\` (in strict mode).

### ⚙️ Solution Walkthrough
A nested function loses the object context.
\`\`\`javascript
const obj = {
  name: "MyObj",
  process: function() {
    // 'this' here is 'obj'
    function nested() {
      // 'this' here is 'window' or 'undefined'
      return this.name;
    }
    return nested(); // returns undefined or window.name
  }
};
\`\`\`
The modern solution is to use an arrow function for `nested`, as it would lexically inherit the correct \`this\` from `process`.

### 📚 Key Concepts
- **Losing \`this\`**: A common problem when using regular functions as callbacks or nested helpers inside methods.
`,
  // problem explanation--> 62
  'default-param-evaluation': `
### 💡 Problem Breakdown
This problem clarifies *when* the expression for a default parameter is evaluated. It is not evaluated when the function is defined, but rather **at call time**, each time the function is invoked without a corresponding argument.

### ⚙️ Solution Walkthrough
A default parameter calls a function that has a side effect.
\`\`\`javascript
let counter = 0;
const getCount = () => ++counter;

function test(a = getCount()) {
  return a;
}

test(); // getCount() is called, returns 1
test(50); // getCount() is NOT called, returns 50
test(); // getCount() is called again, returns 2
\`\`\`
### 📚 Key Concepts
- **Lazy Evaluation**: Default parameter expressions are only evaluated when they are needed.
`,
  // problem explanation--> 63
  'function-arity': `
### 💡 Problem Breakdown
**Arity** refers to the number of arguments a function or operator takes. For a JavaScript function, its arity is the number of named parameters in its signature. This can be inspected using the function's built-in \`.length\` property.

### ⚙️ Solution Walkthrough
The \`.length\` property is checked.
\`\`\`javascript
function func(a, b) {}
console.log(func.length); // 2

// It does not include rest parameters or parameters after the first default value.
const arrow = (a, b = 10, ...c) => {};
console.log(arrow.length); // 1
\`\`\`
### 📚 Key Concepts
- **Arity**: A term from computer science for the number of function parameters.
- **Function Introspection**: Using \`.length\` to determine a function's expected number of arguments.
`,
  // problem explanation--> 64
  'iife-for-private-methods': `
### 💡 Problem Breakdown
This demonstrates the **Module Pattern**, a classic JavaScript design pattern for creating objects with public and private members. An IIFE is used to create a private scope.

### ⚙️ Solution Walkthrough
An IIFE returns an object literal.
\`\`\`javascript
const calculator = (function() {
  // This is a private helper function. It is not accessible from outside.
  function add(a, b) {
    return a + b;
  }

  // The returned object exposes a public API.
  return {
    calculate: function(a, b) {
      // The public method can access the private 'add' function via closure.
      return add(a, b);
    }
  };
})();

calculator.calculate(10, 5); // 15
// calculator.add(10, 5); // TypeError: calculator.add is not a function
\`\`\`
### 📚 Key Concepts
- **Module Pattern**: A pattern for creating objects with private state and public methods.
- **Closure**: The public methods "close over" the private functions and variables defined within the IIFE.
`,
  // problem explanation--> 65
  'function-as-a-value': `
### 💡 Problem Breakdown
This problem further demonstrates that functions are first-class citizens by showing they can be stored in data structures like arrays.

### ⚙️ Solution Walkthrough
Two functions are stored in an array.
\`\`\`javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const operations = [add, subtract];

// We can retrieve a function from the array and call it.
const result = operations[1](10, 3); // 7
\`\`\`
This pattern is useful for creating dynamic dispatch tables or collections of strategy functions.

### 📚 Key Concepts
- **First-Class Functions**: The ability to treat functions as data.
`,
  // problem explanation--> 66
  'variadic-function': `
### 💡 Problem Breakdown
A **variadic function** is one that accepts a variable number of arguments. In modern JavaScript, this is achieved using **rest parameters**.

### ⚙️ Solution Walkthrough
A function `findMax` uses rest parameters to accept any number of arguments.
\`\`\`javascript
const findMax = (...args) => {
  // 'args' is a true array
  if (args.length === 0) return -Infinity;
  return Math.max(...args);
};

findMax(1, 5, 2, 9, 3); // 9
\`\`\`
The spread syntax (`...args`) is then used to pass the elements of the `args` array as individual arguments to `Math.max`.

### 📚 Key Concepts
- **Variadic Function**: A function of indefinite arity.
- **Rest Parameters**: The standard way to create variadic functions in ES6+.
`,
  // problem explanation--> 67
  'execution-context-conceptual': `
### 💡 Problem Breakdown
This is a core conceptual problem about how the JavaScript engine runs code. An **Execution Context** is an abstract concept that holds all the information needed to run a piece of code. There is a global context, and a new one is created for each function call. Each context is created in two phases:
1.  **Creation Phase**:
    - The engine scans the code for variable and function declarations.
    - Memory is allocated for variables (hoisting), scope chain is defined, and \`this\` is determined.
2.  **Execution Phase**:
    - The code is executed line by line.

### 📚 Key Concepts
- **Execution Context**: The environment in which JavaScript code is evaluated and executed.
- **Call Stack**: The stack data structure where execution contexts are pushed and popped.
`,
  // problem explanation--> 68
  'this-in-callback': `
### 💡 Problem Breakdown
This problem shows a very common scenario where the \`this\` context is lost. When you pass an object's method as a callback to another function (like \`forEach\`), it gets detached from its object. When the callback is eventually invoked, it's a simple function call, so \`this\` will be \`undefined\` (in strict mode) or the global object.

### ⚙️ Solution Walkthrough
A method passed to \`forEach\` loses its context.
\`\`\`javascript
const obj = {
  name: 'MyObj',
  process: function(arr) {
    // 'this' inside process is 'obj'
    arr.forEach(function(item) {
      // 'this' inside this callback is NOT 'obj'.
      console.log(this.name, item); // Fails
    });
  }
};
\`\`\`
The modern solution is to use an arrow function for the callback, as it will lexically inherit the correct \`this\` from the \`process\` method.

### 📚 Key Concepts
- **Losing \`this\`**: A fundamental problem to understand when working with methods as callbacks.
`,
  // problem explanation--> 69
  'function-hoisting-pitfall': `
### 💡 Problem Breakdown
This is a conceptual problem about an inconsistent behavior of function declarations inside blocks in non-strict mode. For backward compatibility, some browsers will hoist a function declaration out of a block, but the behavior is not standardized and can be unreliable.

### ⚙️ Solution Walkthrough
A function is declared inside an \`if\` block.
\`\`\`javascript
// non-strict mode
if (true) {
  function sayHi() { return 'Hi'; }
} else {
  function sayHi() { return 'Hello'; }
}
// sayHi(); // In some engines, this might return 'Hello' due to hoisting!
\`\`\`
**Best Practice**: Never use function declarations inside blocks. Use function expressions assigned to `let` or `const` for predictable, block-scoped behavior. Strict mode also makes this behavior more consistent (block-scoped).

### 📚 Key Concepts
- **Legacy Behavior**: An example of inconsistent behavior from older JavaScript engines.
`,
  // problem explanation--> 70
  'call-vs-apply-vs-bind': `
### 💡 Problem Breakdown
This is a conceptual summary of the three main methods for explicitly setting the \`this\` context of a function.
- **`.call(thisContext, arg1, arg2, ...)`**: **C**alls the function immediately. Arguments are passed as a **C**omma-separated list.
- **`.apply(thisContext, [arg1, arg2, ...])`**: **A**pplies the function immediately. Arguments are passed in an **A**rray.
- **`.bind(thisContext, arg1, ...)`**: Does **not** call the function. It **B**inds \`this\` and optional arguments, returning a **B**ound, new function that can be called later.

### 📚 Key Concepts
- **Explicit Binding**: The core purpose of all three methods.
`,
  // problem explanation--> 71
  "currying-vs-partial-application": `
### 💡 Problem Breakdown
This is a conceptual problem that clarifies the difference between two related functional programming techniques.
- **Currying**: Transforms a function that takes multiple arguments into a sequence of functions that *each take a single argument*. For example, \`f(a, b)\` becomes \`f(a)(b)\`. The result is a chain of unary (single-argument) functions.
- **Partial Application**: Takes a function and "fixes" one or more of its arguments, returning a new function that takes the remaining arguments. For example, from \`f(a, b, c)\`, we can create a new function \`g(b, c)\` by fixing the value of \`a\`.

### ⚙️ Solution Walkthrough
Currying is a specific transformation, while partial application is a more general concept of fixing arguments.
\`\`\`javascript
// Currying: f(a,b) -> f(a)(b)
const add = (a, b) => a + b;
const curriedAdd = a => b => a + b;
const add5 = curriedAdd(5); // This is also partially applied

// Partial Application: Fixing 'a' to 5
const addTen = add.bind(null, 10); // addTen(5) -> 15
\`\`\`

### 📚 Key Concepts
- **Arity**: Currying always produces a chain of functions of arity 1. Partial application produces a new function with a lower arity than the original.
`,
  // problem explanation--> 72
  "function-overloading-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem. "Function overloading" is a feature in some languages (like C++ or Java) where you can define multiple functions with the same name but different parameter types or counts. JavaScript does **not** support this. If you declare two functions with the same name, the second one simply overwrites the first.

### ⚙️ Solution Walkthrough
To achieve a similar effect, you must create a single function and check the arguments inside it.
\`\`\`javascript
function doSomething(arg1) {
  if (typeof arg1 === 'string') {
    return 'Processing a string...';
  }
  if (typeof arg1 === 'number') {
    return 'Processing a number...';
  }
  if (arguments.length > 1) {
    return 'Processing multiple arguments...';
  }
}
\`\`\`
### 📚 Key Concepts
- **Dynamic Typing**: Because JavaScript is dynamically typed, it doesn't choose a function based on parameter types at compile time.
`,
  // problem explanation--> 73
  "self-referencing-function": `
### 💡 Problem Breakdown
This problem demonstrates how a **Named Function Expression (NFE)** can be used for recursion. By giving the function expression a name, the function can reliably call itself using that name, even if the variable it's assigned to is changed or is in a different scope.

### ⚙️ Solution Walkthrough
A factorial function is implemented using an NFE. The name \`fac\` is only accessible within the function itself.
\`\`\`javascript
const factorial = function fac(n) {
  if (n <= 1) return 1;
  return n * fac(n - 1); // Using the internal name 'fac' is reliable
};
\`\`\`
This is more robust than \`return n * factorial(n - 1)\`, because the variable \`factorial\` could potentially be reassigned.

### 📚 Key Concepts
- **Named Function Expression (NFE)**: The name provides a reliable reference to the function from within itself.
`,
  // problem explanation--> 74
  "closure-scope-preservation": `
### 💡 Problem Breakdown
A crucial concept about closures is that they hold a live **reference** to the variables in their parent scope, not a frozen copy of their values at the time the closure was created. This means if a parent's variable is changed *after* the closure is defined but *before* it is executed, the closure will see the updated value.

### ⚙️ Solution Walkthrough
An outer function defines a variable \`x\`, creates a closure that reads \`x\`, modifies \`x\`, and then returns the closure.
\`\`\`javascript
function outer() {
  let x = 1;
  const inner = () => x;
  x = 2; // Modify the variable
  return inner;
}
const myClosure = outer();
// myClosure() will return 2, the current value of x.
\`\`\`
### 📚 Key Concepts
- **Live Reference**: Closures maintain a live link to their lexical environment.
`,
  // problem explanation--> 75
  "higher-order-function-wrapper": `
### 💡 Problem Breakdown
This is a practical example of a higher-order function. A "wrapper" function takes another function as input and returns a new function that adds some extra behavior before or after calling the original function. This is a common pattern for logging, authentication, or performance measurement.

### ⚙️ Solution Walkthrough
A \`withLogging\` function is created. It takes a function \`fn\` and returns a new function.
\`\`\`javascript
const withLogging = (fn) => (...args) => {
  console.log(\`Calling '\${fn.name}' with arguments: \${args}\`);
  const result = fn(...args);
  console.log(\`Result was: \${result}\`);
  return result;
};
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(3, 4);
\`\`\`
### 📚 Key Concepts
- **Wrapper Function**: A higher-order function that enhances another function. This is also related to the "Decorator" design pattern.
`,
  // problem explanation--> 76
  "new-function-scope": `
### 💡 Problem Breakdown
This is a conceptual problem about the rarely-used \`Function\` constructor. A key behavior is that functions created with \`new Function(...)\` do **not** form closures to their creation contexts. They are always created in the **global scope**.

### ⚙️ Solution Walkthrough
An attempt is made to access a local variable from a function created with the constructor.
\`\`\`javascript
function createFunction() {
  let local = 'I am local';
  // This function is created in the global scope.
  const fn = new Function('return local;'); 
  // fn(); // This would throw a ReferenceError: local is not defined
}
\`\`\`
### 📚 Key Concepts
- **`Function` Constructor Scope**: A special case that breaks the standard rules of lexical scoping and closures.
`,
  // problem explanation--> 77
  "generator-function-return": `
### 💡 Problem Breakdown
The \`return\` statement in a generator function has a special meaning. It terminates the generator and sets the \`value\` property of the final object returned by \`.next()\`, where the \`done\` property becomes \`true\`. Any \`yield\` statements after the \`return\` will be ignored.

### ⚙️ Solution Walkthrough
A generator yields a value and then returns another.
\`\`\`javascript
function* gen() {
  yield 1;
  return 2;
  yield 3; // This is unreachable
}
const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: true }
g.next(); // { value: undefined, done: true }
\`\`\`
### 📚 Key Concepts
- **Generator Termination**: The \`return\` statement provides a way to specify a final value when the generator finishes.
`,
  // problem explanation--> 78
  "generator-yield-delegation": `
### 💡 Problem Breakdown
The \`yield*\` expression is used to delegate from one generator to another iterable object (like another generator or an array). It's as if the values of the second generator were yielded directly from the first one.

### ⚙️ Solution Walkthrough
One generator delegates to another to produce a combined sequence.
\`\`\`javascript
function* genA() { yield 1; yield 2; }
function* genB() {
  yield* genA(); // Yields all values from genA
  yield 3;
}
const arr = [...genB()]; // [1, 2, 3]
\`\`\`
This is a useful feature for composing and reusing generators.

### 📚 Key Concepts
- **`yield*`**: The syntax for delegating iteration.
`,
  // problem explanation--> 79
  "async-function-return": `
### 💡 Problem Breakdown
The \`async\` keyword fundamentally changes what a function returns. An \`async\` function *always* returns a Promise.
- If the function explicitly returns a value, the promise it returns will *resolve* with that value.
- If the function throws an error, the promise it returns will *reject* with that error.

### ⚙️ Solution Walkthrough
An async function returns a simple value, and we observe that the result is a Promise.
\`\`\`javascript
async function getData() {
  return "Data!";
}
const p = getData();
console.log(p instanceof Promise); // true
p.then(val => console.log(val)); // "Data!"
\`\`\`
### 📚 Key Concepts
- **\`async\` Functions**: Syntactic sugar that simplifies functions that work with promises.
`,
  // problem explanation--> 80
  "this-in-object-literal": `
### 💡 Problem Breakdown
This is a reinforcement of a core \`this\` binding rule. When a function is defined using the \`function\` keyword and called as a method of an object (e.g., \`obj.myMethod()\`), the \`this\` keyword inside that method refers to the object it was called on.

### ⚙️ Solution Walkthrough
A method accesses a property on its own object.
\`\`\`javascript
const obj = {
  name: 'Test',
  getName() { // Shorthand method syntax
    return this.name;
  }
};
obj.getName(); // 'Test'
\`\`\`
### 📚 Key Concepts
- **Method Call Binding**: One of the four rules for determining the value of \`this\`.
`,
  // problem explanation--> 81
  "function-as-property-value": `
### 💡 Problem Breakdown
This problem further demonstrates the concept of functions as "first-class citizens" in JavaScript. A function is just another type of value and can be assigned as the value for a property in an object literal. This is the definition of a "method".

### ⚙️ Solution Walkthrough
An object is created with two properties that are functions.
\`\`\`javascript
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

operations.add(10, 5); // 15
\`\`\`
### 📚 Key Concepts
- **First-Class Functions**: The ability to treat functions like any other data type.
`,
  // problem explanation--> 82
  "call-stack-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the **Call Stack**, which is a fundamental part of how the JavaScript engine keeps track of function execution. It's a LIFO (Last-In, First-Out) data structure.
1. When a script is run, a global execution context is pushed onto the stack.
2. When a function is called, a new execution context (a "stack frame") for that function is pushed onto the top of the stack.
3. If that function calls another function, another frame is pushed on top.
4. When a function returns, its frame is popped off the stack, and control returns to the function below it.

### ⚙️ Solution Walkthrough
A conceptual example of nested function calls.
\`\`\`javascript
function C() { /* ... */ }
function B() { C(); }
function A() { B(); }
A();
// Call Order: A -> B -> C
// Stack state when C is running: [global, A, B, C]
// Return Order: C -> B -> A
\`\`\`
A "stack overflow" error occurs when the stack grows too large, which can happen with infinitely or very deeply recursive functions.

### 📚 Key Concepts
- **Call Stack**: A LIFO data structure that manages execution contexts.
`,
  // problem explanation--> 83
  "function-binding-precedence": `
### 💡 Problem Breakdown
This is a conceptual problem that summarizes the rules of precedence for determining the value of \`this\` when multiple rules could apply. The order is as follows:
1.  **`new` Binding**: If the function is called with \`new\`, \`this\` is the newly created object.
2.  **Explicit Binding**: If the function is called with \`.call()\`, \`.apply()\`, or \`.bind()\`, \`this\` is the object that was explicitly provided.
3.  **Method Call Binding**: If the function is called as a method of an object (\`obj.myFunc()\`), \`this\` is the object.
4.  **Default Binding**: If none of the other rules apply, \`this\` is the global object (\`window\` in browsers) in non-strict mode, or \`undefined\` in strict mode.

Arrow functions are a special case; they don't have their own \`this\` and are not subject to these rules.

### 📚 Key Concepts
- **`this` Binding Rules**: The hierarchy that determines the context of a function call.
`,
  // problem explanation--> 84
  "polyfill-bind-method": `
### 💡 Problem Breakdown
This is a conceptual problem about implementing a "polyfill". A polyfill is a piece of code that provides the functionality of a modern feature in older JavaScript environments that don't support it. This problem asks for the logic to polyfill \`Function.prototype.bind\`.

### ⚙️ Solution Walkthrough
A simple polyfill would use a closure and the \`.apply()\` method.
\`\`\`javascript
// Conceptual polyfill
Function.prototype.myBind = function(ctx, ...boundArgs) {
  const fn = this; // 'this' is the function .myBind is called on
  
  return function(...callArgs) {
    // When the new function is called, use .apply()
    // to set the context and combine the bound arguments with the new arguments.
    return fn.apply(ctx, [...boundArgs, ...callArgs]);
  };
};
\`\`\`
1. **Closure**: The outer function captures the original function (`fn`), the desired `this` context, and any pre-filled `boundArgs`.
2. **Return New Function**: It returns a new function.
3. **`.apply()`**: When this new function is called, it uses `.apply()` to invoke the original function with the saved `context` and a combined list of the pre-filled and newly provided arguments.

### 📚 Key Concepts
- **Polyfill**: A way to provide modern functionality in older environments.
- **Closures**: Used to "remember" the context and bound arguments.
`,
  // problem explanation--> 85
  "default-params-and-scope": `
### 💡 Problem Breakdown
This is an advanced scope concept. The default values of function parameters are evaluated in an **intermediate scope** that exists between the scope where the function is defined (the outer scope) and the scope of the function's body.

### ⚙️ Solution Walkthrough
A default parameter captures the global \`x\`.
\`\`\`javascript
let x = 'global';
function test(a = x, b = () => x) { 
  // 'a' is evaluated. It finds the global 'x'.
  // The closure for 'b' is created and also captures the global 'x'.
  let x = 'inner'; // This 'x' is in the function body's scope and does not affect the closure.
  return b(); // Returns 'global'
}
\`\`\`
### 📚 Key Concepts
- **Parameter Scope**: A special, intermediate scope for evaluating default parameter values.
`,
  // problem explanation--> 86
  "arrow-function-and-this-in-object": `
### 💡 Problem Breakdown
This highlights a very common pitfall. When you use an arrow function as a method directly on an object literal, its \`this\` value is determined lexically. This means it inherits \`this\` from the scope where the object is *defined*, which is usually the global scope, not the object itself.

### ⚙️ Solution Walkthrough
An arrow function is incorrectly used as a method.
\`\`\`javascript
const obj = {
  name: 'My Object',
  // 'this' inside this arrow function is NOT 'obj'.
  // It's the global 'window' object (or 'undefined' in strict mode).
  getName: () => this.name 
};
// obj.getName(); // Returns undefined (or an error)
\`\`\`
**Rule of Thumb**: For object methods that need to access the object via \`this\`, always use the traditional \`function\` keyword or the ES6 method shorthand syntax.

### 📚 Key Concepts
- **Lexical \`this\`**: A core feature of arrow functions that makes them unsuitable for object methods that rely on a dynamic \`this\`.
`,
  // problem explanation--> 87
  "function-purity-and-arrays": `
### 💡 Problem Breakdown
This problem demonstrates the concept of function purity when working with mutable data structures like arrays. An impure function might modify (mutate) the input array directly, creating a side effect. A pure function will not change the original array; instead, it will create and return a new array with the changes.

### ⚙️ Solution Walkthrough
An impure and a pure sorting function are compared.
\`\`\`javascript
const original = ['c', 'a', 'b'];

// Impure: Modifies the original array
const impureSort = (arr) => arr.sort();

// Pure: Creates a copy first, then sorts the copy
const pureSort = (arr) => [...arr].sort(); 
\`\`\`
The pure function is safer and more predictable, as it doesn't have the side effect of changing the data that was passed into it.

### 📚 Key Concepts
- **Purity**: A function is pure if it has no side effects and is deterministic.
- **Immutability**: The practice of not changing data structures, but instead creating new ones. The spread syntax `...` is a key tool for this.
`,
  // problem explanation--> 88
  "iife-with-global-variable": `
### 💡 Problem Breakdown
This is a conceptual problem about a common pattern used in older JavaScript libraries, especially before module systems were standard. An IIFE can take the global object (`window` in browsers) as a parameter.

### ⚙️ Solution Walkthrough
The global object is passed into an IIFE.
\`\`\`javascript
// 'this' in the global scope refers to the window object
(function(global) {
  // Inside the IIFE, 'global' is a reliable alias for the window object.
  // This makes the code's dependency on the global object explicit.
  global.myLibrary = {}; 
})(this);
\`\`\`
This pattern made the code more portable and its dependencies clearer.

### 📚 Key Concepts
- **IIFE**: A pattern for creating a private scope.
- **Dependency Injection**: A pattern where a component's dependencies are passed to it from the outside.
`,
  // problem explanation--> 89
  "function-with-optional-params": `
### 💡 Problem Breakdown
This problem demonstrates the traditional way of handling optional parameters before ES6 default parameters were introduced. Inside the function, you check if the parameter's value is \`undefined\`. If it is, you assign a default value.

### ⚙️ Solution Walkthrough
The logical OR (\`||\`) operator is often used as a shorthand for this check.
\`\`\`javascript
function greet(name, greeting) {
  // If 'greeting' is undefined (or any other falsy value), use 'Hello'.
  const finalGreeting = greeting || 'Hello';
  return \`\${finalGreeting}, \${name}!\`;
}
greet('Alice'); // "Hello, Alice!"
\`\`\`
In modern JavaScript, using ES6 default parameters (\`function greet(name, greeting = 'Hello')\`) is the preferred and clearer way to achieve this.

### 📚 Key Concepts
- **Optional Parameters**: A common feature in function design.
`,
  // problem explanation--> 90
  "rest-params-vs-arguments": `
### 💡 Problem Breakdown
This is a conceptual summary comparing the modern rest parameters (`...args`) with the older `arguments` object.
- **`arguments` object**:
  - Available in all `function` functions.
  - Is **array-like**, but not a true array (no methods like `.map` or `.filter`).
  - Does **not** exist in arrow functions.
- **Rest Parameters**:
  - Must be the last parameter in the function signature.
  - Gathers remaining arguments into a **true array**.
  - **Works** in arrow functions.

### ⚙️ Solution Walkthrough
Rest parameters are almost always preferred in modern JavaScript for their clarity and the fact that they provide a real array.
\`\`\`javascript
const sum = (...args) => args.reduce((a, b) => a + b, 0);
\`\`\`

### 📚 Key Concepts
- **Rest Parameters**: The modern, preferred way to handle an indefinite number of arguments.
`,
  // problem explanation--> 91
  "named-args-with-destructuring": `
### 💡 Problem Breakdown
This demonstrates a very powerful and common pattern in modern JavaScript: using object destructuring in a function's parameter list to simulate "named arguments." This allows you to pass an object of options to a function, and the order of properties in the object doesn't matter.

### ⚙️ Solution Walkthrough
A function accepts an object and destructures it.
\`\`\`javascript
function createUser({ name, age, role = 'guest' }) {
  return \`Created user \${name} (age \${age}) with role \${role}.\`;
}
// Call with an object. The order of properties doesn't matter.
createUser({ age: 99, name: 'Admin' });
\`\`\`
This makes function calls more readable and self-documenting, and it's easy to handle optional parameters by providing default values in the destructuring pattern.

### 📚 Key Concepts
- **Destructuring in Parameters**: A key feature for improving function ergonomics and readability.
`,
  // problem explanation--> 92
  "function-to-string": `
### 💡 Problem Breakdown
This problem demonstrates a built-in feature of functions in JavaScript. When you call the `.toString()` method on a function object, it returns a string containing the source code of that function.

### ⚙️ Solution Walkthrough
The `.toString()` method is called on a function.
\`\`\`javascript
function add(a, b) {
  // a comment
  return a + b;
}
add.toString(); 
// Returns a string like: "function add(a, b) {\n  // a comment\n  return a + b;\n}"
\`\`\`
This is used by some developer tools and libraries for introspection, but it's not commonly used in day-to-day application code.

### 📚 Key Concepts
- **Function Introspection**: The ability to inspect a function's properties and source code.
`,
  // problem explanation--> 93
  "function-scope-vs-global-scope": `
### 💡 Problem Breakdown
This problem reinforces the fundamental concept of scope hierarchy. An inner scope (like a function's scope) can access variables from an outer scope (like the global scope), but the reverse is not true.

### ⚙️ Solution Walkthrough
A function accesses a global variable, and an attempt is made to access a function-scoped variable from the global scope.
\`\`\`javascript
let globalVar = 'global';
function testScope() {
  let funcVar = 'local';
  console.log(globalVar); // 'global' (This works)
}
testScope();
// console.log(funcVar); // This would throw a ReferenceError
\`\`\`
### 📚 Key Concepts
- **Scope Chain**: The one-way lookup chain from inner to outer scopes.
- **Encapsulation**: Scope rules provide encapsulation, preventing outer scopes from interfering with the internal variables of a function.
`,
  // problem explanation--> 94
  "block-scope-with-const": `
### 💡 Problem Breakdown
This problem demonstrates that constants declared with \`const\` are **block-scoped**, just like variables declared with \`let\`. A constant only exists within the block (\`{}\`) in which it is defined.

### ⚙️ Solution Walkthrough
A constant is declared inside an \`if\` block and is not accessible outside.
\`\`\`javascript
if (true) {
  const BLOCK_CONST = "I'm in a block";
}
// console.log(BLOCK_CONST); // Throws a ReferenceError
\`\`\`
### 📚 Key Concepts
- **Block Scope**: A key feature of modern variable and constant declarations that makes code more predictable.
`,
  // problem explanation--> 95
  "higher-order-function-foreach": `
### 💡 Problem Breakdown
This problem involves implementing a simple version of the \`Array.prototype.forEach\` method as a higher-order function. The function should take an array and a callback function, and it should execute the callback for each element in the array.

### ⚙️ Solution Walkthrough
A \`myForEach\` function is created.
\`\`\`javascript
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr); // Mimic the real forEach signature
  }
}

myForEach(['a', 'b', 'c'], (item) => {
  console.log(item.toUpperCase());
});
\`\`\`
This demonstrates the fundamental pattern of higher-order functions used for iteration: abstracting the "how" (the loop) from the "what" (the action performed in the callback).

### 📚 Key Concepts
- **Higher-Order Function**: `myForEach` is a higher-order function.
- **Callback Function**: The function passed to `myForEach` to be executed on each item.
`,
  // problem explanation--> 96
  "function-currying-practical": `
### 💡 Problem Breakdown
This shows a practical application of **currying**. By creating a curried function, we can create more specialized, reusable functions. Here, a generic `log` function that takes a logging level and a message is created. We can then use it to create specialized `logError` and `logInfo` functions.

### ⚙️ Solution Walkthrough
A curried \`log\` function is defined.
\`\`\`javascript
const log = (level) => (message) => \`[\${level.toUpperCase()}] - \${message}\`;

// Create specialized loggers via partial application
const logError = log('error');
const logInfo = log('info');

logError('Request failed!'); // "[ERROR] - Request failed!"
logInfo('User logged in.');   // "[INFO] - User logged in."
\`\`\`
### 📚 Key Concepts
- **Currying**: Used to create specialized functions.
- **Partial Application**: Calling the first function in the curried chain (`log('error')`) is an act of partial application.
`,
  // problem explanation--> 97
  "this-in-event-listener-arrow": `
### 💡 Problem Breakdown
This is a conceptual problem that highlights a major benefit of arrow functions in the context of classes and event handling. When you use a traditional \`function\` as an event handler inside a class method, the \`this\` keyword inside the handler will refer to the DOM element, not the class instance. An arrow function, however, inherits \`this\` lexically, solving the problem.

### ⚙️ Solution Walkthrough
A conceptual class with an event handler.
\`\`\`javascript
class MyComponent {
  constructor() {
    this.count = 0;
    const button = document.getElementById('my-button');
    // The arrow function ensures 'this' inside the listener is the class instance.
    button.addEventListener('click', () => this.increment());
  }
  increment() { this.count++; }
}
\`\`\`
Without the arrow function, you would have to use `.bind(this)` to manually fix the context.

### 📚 Key Concepts
- **Lexical \`this\`**: The defining feature of arrow functions regarding context, making them ideal for callbacks in methods.
`,
  // problem explanation--> 98
  "function-hoisting-with-var": `
### 💡 Problem Breakdown
This problem revisits the hoisting of function expressions. When a function expression is assigned to a variable declared with \`var\`, the variable declaration is hoisted, but the function body (the assignment) is not. This means that before the assignment line, the variable exists but its value is \`undefined\`, leading to a \`TypeError\` if you try to call it.

### ⚙️ Solution Walkthrough
An attempt is made to call the function before assignment.
\`\`\`javascript
// The code is interpreted as:
// 1. var myFunc;
// 2. try { myFunc(); } ...
// 3. myFunc = () => {};

try {
  myFunc();
} catch(e) {
  // e.name will be 'TypeError'
}
var myFunc = () => {};
\`\`\`
### 📚 Key Concepts
- **Hoisting**: The rules for function expressions are different from function declarations.
`,
  // problem explanation--> 99
  "destructuring-from-function-return-array": `
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
  // problem explanation--> 100
  "destructuring-from-function-return-object": `
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
  // problem explanation--> 101
  'redeclare-var': `
### 💡 Problem Breakdown
This problem highlights a peculiar and often problematic feature of \`var\`. A variable declared with \`var\` can be declared again in the same scope without causing an error. The second declaration simply acts as an assignment if one is provided.

### ⚙️ Solution Walkthrough
A variable \`x\` is declared twice with \`var\` in the same scope.
\`\`\`javascript
var x = 1;
var x = 2; // This is allowed and reassigns x
console.log(x); // 2
\`\`\`
This behavior can lead to bugs where a variable is accidentally redeclared in a large codebase, silently overwriting its previous value. This is one of the key reasons \`let\` was introduced.

### 📚 Key Concepts
- **Variable Redeclaration**: A behavior allowed by \`var\` but prohibited by \`let\` and \`const\`.
`,
  // problem explanation--> 102
  'redeclare-let-error': `
### 💡 Problem Breakdown
In contrast to \`var\`, \`let\` and \`const\` were designed to be safer. They do not allow a variable to be redeclared in the same scope. This prevents accidental redeclaration bugs and makes code more predictable.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing invalid syntax that would be caught by the JavaScript engine before the code runs.
\`\`\`javascript
let x = 1;
// This line will throw a SyntaxError because 'x' has already been declared in this scope.
let x = 2;
\`\`\`
The solver demonstrates this by returning a string explaining the error, as the code itself cannot be executed.

### 📚 Key Concepts
- **\`SyntaxError\`**: An error that occurs when the JavaScript engine encounters code that violates the language's syntax rules.
- **Safer Scoping Rules**: A key improvement of \`let\` and \`const\` over \`var\`.
`,
  // problem explanation--> 103
  'var-no-block-scope': `
### 💡 Problem Breakdown
This problem highlights a major difference between \`var\` and \`let\`/\`const\`. Variables declared with \`var\` are **not** block-scoped; they are function-scoped. This means a \`var\` declared inside a block (like an \`if\` or \`for\` loop) "leaks" out into the containing function's scope.

### ⚙️ Solution Walkthrough
A variable is declared with \`var\` inside an \`if\` block and is successfully accessed outside of it.
\`\`\`javascript
function testScope() {
  if (true) {
      var noBlock = "Visible outside";
  }
  return noBlock; // This works, returns "Visible outside"
}
\`\`\`
This behavior can lead to bugs where variables from a loop overwrite other variables, and is a primary reason to prefer \`let\` and \`const\`.

### 📚 Key Concepts
- **Function Scope vs. Block Scope**: A critical distinction between \`var\` and the newer \`let\`/\`const\`.
`,
  // problem explanation--> 104
  'const-array-reassignment-error': `
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
  // problem explanation--> 105
  'destructure-skip-array-items': `
### 💡 Problem Breakdown
Array destructuring provides a syntax to skip elements you are not interested in. You can simply omit a variable name and use a comma as a placeholder for each element you want to ignore.

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
  // problem explanation--> 106
  'let-in-for-loop': `
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
  // problem explanation--> 107
  'var-in-for-loop-pitfall': `
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
  // problem explanation--> 108
  'window-object-global-var': `
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
  // problem explanation--> 109
  'window-object-global-let': `
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
  // problem explanation--> 110
  'undeclared-variable-global': `
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
  // problem explanation--> 111
  'strict-mode-undeclared': `
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
  // problem explanation--> 112
  'scope-of-catch-block': `
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
  // problem explanation--> 113
  'const-mutate-object': `
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
  // problem explanation--> 114
  'const-mutate-array': `
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
  // problem explanation--> 115
  'object-freeze': `
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
  // problem explanation--> 116
  'const-in-for-of-loop': `
### 💡 Problem Breakdown
This problem demonstrates a specific behavior of \`for...of\` loops. You can safely use \`const\` to declare the loop variable because a *new binding* is created for each iteration of the loop.

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
  // problem explanation--> 117
  'const-in-for-loop-error': `
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
  // problem explanation--> 118
  'destructure-array-rest': `
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
  // problem explanation--> 119
  'destructure-object-rest': `
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
  // problem explanation--> 120
  'destructure-object-alias': `
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
  // problem explanation--> 121
  'destructure-array-defaults': `
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
  // problem explanation--> 122
  'destructure-object-defaults': `
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
  // problem explanation--> 123
  'destructure-nested-object': `
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
  // problem explanation--> 124
  'destructure-function-params-object': `
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
  // problem explanation--> 125
  'destructure-function-params-array': `
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
  // problem explanation--> 126
  'destructure-for-of-loop': `
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
  // problem explanation--> 127
  'destructure-string': `
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
  // problem explanation--> 128
  'destructure-with-defaults-and-alias': `
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
  // problem explanation--> 129
  'destructure-null-error': `
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
  // problem explanation--> 130
  'destructure-return-with-defaults': `
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
  // problem explanation--> 131
  'let-block-scope-in-standalone-block': `
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
  // problem explanation--> 132
  'dynamic-property-creation': `
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
  // problem explanation--> 133
  'primitive-wrapper-objects': `
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
  // problem explanation--> 134
  'symbol-primitive-type': `
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
- **`Symbol`**: A primitive type for creating unique, non-string property keys.
`,
  // problem explanation--> 135
  'bigint-primitive-type': `
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
- **`BigInt`**: A primitive type for representing integers of arbitrary precision.
`,
  // problem explanation--> 136
  'hoisting-order-var-and-function': `
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
  // problem explanation--> 137
  'hoisting-class-declaration': `
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
  // problem explanation--> 138
  'object-freeze-nested': `
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
  // problem explanation--> 139
  'object-seal': `
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
- **`Object.seal()`**: A method for making an object's structure fixed, but its values mutable.
`,
  // problem explanation--> 140
  'object-preventextensions': `
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
- **`Object.preventExtensions()`**: A method to lock down the addition of new properties.
`,
  // problem explanation--> 141
  'destructure-assignment-without-declaration': `
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
  // problem explanation--> 142
  'destructure-dynamic-property-name': `
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
  // problem explanation--> 143
  'destructure-mixed-array-object': `
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
- `{ id, ... }`: From the outer object, extract the property \`id\` into a variable \`id\`.
- `items: [...]`: Extract the property `items`. Instead of assigning it to a variable, apply a nested array destructuring pattern to it.
- `[, { type }]`: In the `items` array, skip the first element (`,`), then for the second element (which is an object), apply another nested object destructuring pattern `{ type }` to extract its `type` property.

### 📚 Key Concepts
- **Nested Destructuring**: Combining patterns to precisely target and extract deeply nested data.
`,
  // problem explanation--> 144
  'shadowing-in-catch-block': `
### 💡 Problem Breakdown
This explores the scope of the error parameter in a `catch` block. Before ES2019, if an outer variable with the same name as the `catch` parameter existed, some complex behaviors could arise. ES2019 standardized the behavior: the `catch` parameter *always* creates a new, block-scoped variable that shadows any outer variable.

### ⚙️ Solution Walkthrough
The `e` in the `catch` block is a completely separate variable from the outer `e`.
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
- **Block Scope**: The `catch` clause creates its own lexical scope.
`,
  // problem explanation--> 145
  'tdz-and-closures': `
### 💡 Problem Breakdown
This problem demonstrates the interaction between the Temporal Dead Zone (TDZ) and closures. A closure captures a variable, not its value at the time the closure is created. If the closure is called *before* the variable's declaration line is reached, it will still be subject to the TDZ.

### ⚙️ Solution Walkthrough
A function `fn` is created that forms a closure over `myLet`. It is then called before `myLet` is declared.
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
  // problem explanation--> 146
  'tdz-with-default-params': `
### 💡 Problem Breakdown
Function parameters are evaluated from left to right. This means a parameter can reference a parameter that came before it. However, if it references a parameter that comes *after* it, that second parameter will still be in its Temporal Dead Zone (TDZ).

### ⚙️ Solution Walkthrough
The default value for parameter `a` tries to access `b` before `b` has been initialized.
\`\`\`javascript
// This function definition is valid
function test(a = b, b = 5) {
  // ...
}

// Calling it with no arguments will cause an error:
// test(); // ReferenceError: Cannot access 'b' before initialization
\`\`\`
When `test()` is called, the engine tries to evaluate the default for `a`. It looks for `b`, but `b` has not been initialized yet (it's in the TDZ of the parameter scope), so a `ReferenceError` is thrown.

### 📚 Key Concepts
- **Parameter Scope**: Function parameters have their own intermediate scope.
- **Left-to-Right Evaluation**: Parameters are initialized in the order they are written.
`,
  // problem explanation--> 147
  'garbage-collection-conceptual': `
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
  // problem explanation--> 148
  'memory-leak-with-closures': `
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
Even after `createLeakyListener` finishes, the `listener` function is still alive (referenced by the DOM). Because the `listener` needs access to `largeData`, `largeData` is kept in memory and will not be garbage collected until the event listener is removed.

### 📚 Key Concepts
- **Memory Leak**: Unwanted memory retention.
- **Closures**: Can cause leaks by unintentionally keeping references to large objects from outer scopes.
`,
  // problem explanation--> 149
  'let-in-switch-case': `
### 💡 Problem Breakdown
This problem highlights a subtle aspect of scope. The entire `switch` statement is considered a single block. Therefore, you cannot declare the same block-scoped variable (\`let\` or \`const\`) in multiple `case` clauses without creating sub-blocks, because you would be trying to redeclare it in the same block.

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
- **Block Scope**: Understanding that the entire `switch` statement is one block is key.
`,
  // problem explanation--> 150
  'tdz-and-function-parameters': `
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
When the call happens, the engine tries to set the default value for `a`. It looks for `b`, but `b` has not been initialized yet from the argument list, so it is in the TDZ.

### 📚 Key Concepts
- **Parameter Scope**: Parameters live in a special scope that is created before the function body is executed.
`,
  // problem explanation--> 151
  'deep-freeze-utility-conceptual': `
### 💡 Problem Breakdown
`Object.freeze()` is shallow. A "deep freeze" utility would need to recursively traverse an object and apply `Object.freeze()` to every nested object and array.

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
2. **Recurse on Children**: It then iterates over the object's properties. If a property is an object that isn't already frozen, it makes a recursive call to `deepFreeze` on that property.

### 📚 Key Concepts
- **Recursion**: A natural fit for processing nested data structures.
- **Immutability**: A pattern for creating truly immutable data structures.
`,
  // problem explanation--> 152
  'hoisting-across-scripts-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem about the boundaries of hoisting. Hoisting is a mechanism that is limited to the scope of the current script or module file. It does not span across multiple `<script>` tags or separate module files.

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
The variable \`x\` is not hoisted across the script boundaries. Each `<script>` tag is treated as a separate compilation unit.

### 📚 Key Concepts
- **Hoisting Boundaries**: Hoisting is file-scoped or module-scoped.
`,
  // problem explanation--> 153
  'memory-lifecycle-conceptual': `
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
  // problem explanation--> 154
  'destructure-from-map': `
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
  // problem explanation--> 155
  'immutable-update-const': `
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
  // problem explanation--> 156
  'var-hoisting-pitfall-2': `
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
  // problem explanation--> 157
  'destructure-regex-groups': `
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
  // problem explanation--> 158
  'uninitialized-const-in-loop': `
### 💡 Problem Breakdown
This is conceptual: \`for (const x of [])\` is valid because the loop may not run, but \`for (const x; ; )\` is a syntax error because \`const\` requires an initializer.

### ⚙️ Solution Walkthrough
The syntax is checked at parse time for classic \`for\`, but \`for...of\` is more flexible.

### 📚 Key Concepts
- **Loop Semantics**: Different loops have different initialization rules.
`,
  // problem explanation--> 159
  'function-param-scope': `
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
  // problem explanation--> 160
  'destructure-sparse-array': `
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
  // problem explanation--> 161
  'block-scope-for-let-in-loop': `
### 💡 Problem Breakdown
In \`for\` loops, \`let\` is re-bound for each iteration, which is different from simple block scope. This solves closure issues in loops.

### ⚙️ Solution Walkthrough
The spec treats each iteration as a new scope for \`let\`.

### 📚 Key Concepts
- **Re-binding**: A special loop behavior for \`let\`.
`,
  // problem explanation--> 162
  'implicit-global-in-function-call': `
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
  // problem explanation--> 163
  'practical-let-event-listener': `
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
  // problem explanation--> 164
  'practical-const-function-expression': `
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
  // problem explanation--> 165
  'practical-destructuring-api-response': `
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
  // problem explanation--> 166
  'object-is-vs-triple-equals': `
### 💡 Problem Breakdown
\`Object.is()\` behaves like the strict equality operator (\`===\`) but with two key differences: it correctly handles \`NaN\` and distinguishes between \`+0\` and \`-0\`.

### ⚙️ Solution Walkthrough
The differences are demonstrated.
\`\`\`javascript
NaN === NaN; // false
Object.is(NaN, NaN); // true

0 === -0; // true
Object.is(0, -0); // false
\`\`\`
\`Object.is()\` is useful in specific cases where these edge cases matter.

### 📚 Key Concepts
- **`Object.is()`**: A method for determining if two values are the same value.
`,
  // problem explanation--> 167
  'primitive-vs-reference-assignment': `
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
  // problem explanation--> 168
  'hoisting-pitfall-with-blocks': `
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
  // problem explanation--> 169
  'destructuring-iterable': `
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
  // problem explanation--> 170
  'const-and-garbage-collection': `
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
  // problem explanation--> 171
  'var-in-eval-scope': `
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
- **`eval()`**: A powerful but dangerous function that should be avoided.
`,
  // problem explanation--> 172
  'let-in-eval-scope': `
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
  // problem explanation--> 173
  'var-without-window': `
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
  // problem explanation--> 174
  'destructuring-and-prototypes': `
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
  // problem explanation--> 175
  'variable-lifecycle-in-closure': `
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
  // problem explanation--> 176
  'using-symbols-for-metadata': `
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
- **`Symbol`**: Used for creating non-enumerable, unique property keys.
`,
  // problem explanation--> 177
  'const-for-math-constants': `
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
  // problem explanation--> 178
  'destructure-react-props': `
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
  // problem explanation--> 179
  'let-for-cached-value': `
### 💡 Problem Breakdown
This demonstrates a practical use of \`let\` for caching. Caching is a performance optimization where the result of an expensive operation is stored so that it doesn't need to be re-calculated on subsequent calls. The cached value needs to be stored in a variable that can be reassigned.

### ⚙️ Solution Walkthrough
A \`let\` variable is used to store a cached result.
\`\`\`javascript
let cachedData = null;
function getData() {
  if (cachedData) {
    return `(from cache) \${cachedData}\`;
  }
  // Simulate an expensive operation
  cachedData = 'expensive data';
  return `(calculated) \${cachedData}\`;
}
getData(); // Calculates the data
getData(); // Returns the cached data
\`\`\`
Because \`cachedData\` is reassigned from \`null\` to the actual data, \`let\` is the appropriate choice.

### 📚 Key Concepts
- **Caching**: A common performance optimization pattern.
- **State Management**: Using \`let\` for a variable whose state changes from "uncached" to "cached".
`,
  // problem explanation--> 180
  'tdz-in-class-bodies': `
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
  // problem explanation--> 181
  'shadowing-with-function-params': `
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
  // problem explanation--> 182
  'is-frozen-check': `
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
  // problem explanation--> 183
  'is-sealed-check': `
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
  // problem explanation--> 184
  'is-extensible-check': `
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
  // problem explanation--> 185
  'destructuring-and-type-coercion': `
### 💡 Problem Breakdown
This is a conceptual problem to clarify that destructuring assignment performs a direct value assignment without any automatic type coercion. This is in contrast to constructs like loose equality (`==`) or `if` statements that do perform coercion.

### ⚙️ Solution Walkthrough
The string `"0"` is destructured.
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
  // problem explanation--> 186
  'global-scope-pollution': `
### 💡 Problem Breakdown
This is a conceptual problem about a major drawback of overusing global variables. "Polluting the global scope" means declaring too many variables at the global level. This is considered bad practice because:
1.  **Naming Collisions**: Your global variable might have the same name as a variable in a third-party library you're using, causing one to overwrite the other and leading to hard-to-debug errors.
2.  **Code Readability**: It's difficult to track where a global variable is being read from or modified, making the code harder to reason about.

### ⚙️ Solution Walkthrough
The modern solutions to this problem are ES6 Modules and creating local scopes with functions or blocks.

### 📚 Key Concepts
- **Encapsulation**: Keeping variables contained within the scope where they are needed.
`,
  // problem explanation--> 187
  'using-block-scope-for-privacy': `
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
  // problem explanation--> 188
  'hoisting-let-and-const-conceptual': `
### 💡 Problem Breakdown
This is a common point of confusion. The statement "\`let\` and \`const\` are not hoisted" is technically incorrect. They *are* hoisted. The JavaScript engine is aware of them at the top of their scope during the compilation phase.

However, unlike \`var\` which is initialized to \`undefined\`, \`let\` and \`const\` are left **uninitialized**. The period where they are hoisted but uninitialized is the **Temporal Dead Zone (TDZ)**. Any attempt to access them in the TDZ results in a \`ReferenceError\`.

### 📚 Key Concepts
- **Hoisting**: Applies to all declaration types, but the initialization behavior is different.
- **Temporal Dead Zone (TDZ)**: The key difference in the hoisting behavior of \`let\` and \`const\`.
`,
  // problem explanation--> 189
  'destructuring-computed-property': `
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
  // problem explanation--> 190
  'reserved-words-as-variables': `
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
  // problem explanation--> 191
  'infinity-and-negative-infinity': `
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
- **`Infinity`**: A special numeric value representing a value greater than any other number.
`,
  // problem explanation--> 192
  'reassigning-object-param': `
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
  // problem explanation--> 193
  'const-enum-pattern': `
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
- **`Object.freeze()`**: Used to make the enum object immutable.
`,
  // problem explanation--> 194
  'destructuring-rename-and-rest': `
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
  // problem explanation--> 195
  'global-scope-without-window': `
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
- **`WorkerGlobalScope`**: The name of the global scope object inside a worker.
`,
  // problem explanation--> 196
  'automatic-semicolon-insertion': `
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
  // problem explanation--> 197
  'global-scope-modules-vs-scripts': `
### 💡 Problem Breakdown
This is a summary of a critical concept for modern web development.
- **Classic `<script>` files**: Run in a shared global scope. A \`var\` declared at the top level becomes a property of `window`. This can lead to "global scope pollution."
- **ES Modules (`<script type="module">` or `import`/`export`)**: Each module has its own private, top-level scope. Variables declared at the top level are local to that module. They do not become globals unless explicitly assigned to `window`. This provides strong encapsulation.

### 📚 Key Concepts
- **Module Scope**: The default privacy of ES modules.
`,
  // problem explanation--> 198
  'destructuring-primitive-wrappers': `
### 💡 Problem Breakdown
This problem shows how destructuring interacts with JavaScript's "autoboxing" of primitives. When you try to destructure a primitive, JavaScript temporarily creates a wrapper object, destructures the properties from that wrapper, and then discards it.

### ⚙️ Solution Walkthrough
Destructuring the `length` property from a string.
\`\`\`javascript
const { length } = 'hello'; // Behaves like \`const { length } = new String('hello');\`
// 'length' is 5
\`\`\`
If you try to destructure a property that doesn't exist on the wrapper (e.g., `const { foo } = 'hello'`), the result will be `undefined`.

### 📚 Key Concepts
- **Autoboxing**: The implicit wrapping of primitives in objects.
`,
  // problem explanation--> 199
  'shadowing-built-in-globals': `
### 💡 Problem Breakdown
You can declare a local variable that has the same name as a built-in global object, like `Array`, `Object`, or `String`. This is called shadowing. While possible, it is extremely bad practice as it can lead to confusing errors when you try to use the built-in functionality later in that scope.

### ⚙️ Solution Walkthrough
The global `Array` constructor is shadowed.
\`\`\`javascript
function test() {
  let Array = 'shadowed';
  // new Array(); // This would now be a TypeError, because 'Array' is a string.
  return \`typeof Array is now: \${typeof Array}\`;
}
test(); // "typeof Array is now: string"
\`\`\`

### 📚 Key Concepts
- **Variable Shadowing**: A behavior to be aware of and generally avoid, especially with built-in names.
`,
  // problem explanation--> 200
  'var-vs-let-vs-const-summary': `
### 💡 Problem Breakdown
This is a conceptual summary of the three ways to declare variables in JavaScript, focusing on their key differences. Understanding these is fundamental to writing modern, bug-free JavaScript.

### ⚙️ Solution Walkthrough
A summary of the behaviors:
| Feature             | \`var\`                               | \`let\`                               | \`const\`                              |
| ------------------- | ----------------------------------- | ----------------------------------- | ------------------------------------ |
| **Scope**           | Function-scoped                     | Block-scoped \`{}\`                    | Block-scoped \`{}\`                     |
| **Hoisting**        | Hoisted (initialized to \`undefined\`) | Hoisted (but in TDZ)                | Hoisted (but in TDZ)                 |
| **Reassignment**    | Allowed                             | Allowed                             | **Not** Allowed                      |
| **Redeclaration**   | Allowed (in same scope)             | **Not** Allowed (in same scope)       | **Not** Allowed (in same scope)        |
| **Global Property** | Yes (on \`window\`)                    | No                                  | No                                   |

**Best Practice**: Use \`const\` by default. Use \`let\` only when you know a variable needs to be reassigned. Avoid using \`var\` in modern JavaScript.

### 📚 Key Concepts
- **Scope**: Where a variable is accessible.
- **Hoisting**: The "lifting" of declarations to the top of their scope.
- **Temporal Dead Zone (TDZ)**: The period where a \`let\`/\`const\` variable cannot be accessed.
- **Immutability**: The concept of preventing change, which \`const\` helps enforce at the binding level.
`
};
