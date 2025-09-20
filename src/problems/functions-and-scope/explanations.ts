// problem explanation--> 01
export const explanations: Record<string, string> = {
  "simple-function-return": `
### 💡 Problem Breakdown
This is the most basic form of a function. The goal is to define a reusable block of code that takes no inputs (parameters) and returns a static, unchanging value.

### ⚙️ Solution Walkthrough
The solution uses a standard function declaration. The \`function\` keyword is followed by the function name, a pair of parentheses for parameters (empty in this case), and a block of code in curly braces.
\`\`\`javascript
function greet() {
  return "Hello, Functions!";
}
greet();
\`\`\`
1. **\`function greet()\`**: Declares a function named \`greet\`
2. **\`return "..."\`**: Specifies the value to be returned
3. **\`greet()\`**: Executes the function

### 📚 Key Concepts
- **Function Declaration**: Traditional syntax for defining named functions
- **\`return\` Statement**: Ends function execution and specifies return value
`,

  // problem explanation--> 02
  "function-with-parameters": `
### 💡 Problem Breakdown
Functions become powerful when they accept input and produce results based on that input. This problem involves writing a function that takes two numbers and returns their product.

### ⚙️ Solution Walkthrough
The function is defined with two parameters, \`x\` and \`y\`, which act as local variables.
\`\`\`javascript
function multiply(x, y) {
  return x * y;
}
multiply(8, 4); // Returns 32
\`\`\`
1. **Parameters**: Placeholders for values passed to the function
2. **Arguments**: Actual values passed during function call
3. **Return Value**: Result of the multiplication

### 📚 Key Concepts
- **Parameters**: Variables listed in function definition
- **Arguments**: Actual values passed during invocation
`,

  // problem explanation--> 03
  "arrow-function-syntax": `
### 💡 Problem Breakdown
ES6 introduced arrow functions, which provide a more concise syntax for writing function expressions. This problem asks you to rewrite a simple function using this modern syntax.

### ⚙️ Solution Walkthrough
The solution defines an arrow function named \`square\` and assigns it to a constant.
\`\`\`javascript
const square = (n) => n * n;
square(9); // 81
\`\`\`
1. **\`const square = ...\`**: Arrow functions are expressions assigned to variables
2. **\`(n)\`**: Parameters listed before the arrow
3. **\`=>\`**: The "fat arrow" syntax
4. **\`n * n\`**: Single-expression arrow functions have implicit return

### 📚 Key Concepts
- **Arrow Function**: Compact alternative to traditional function expressions
- **Implicit Return**: Feature of single-expression arrow functions
`,

  // problem explanation--> 04
  "function-declaration": `
### 💡 Problem Breakdown
This problem focuses on the standard way of defining a function: the function declaration. A key characteristic is that they are "hoisted".

### ⚙️ Solution Walkthrough
A function is defined using the \`function\` keyword, followed by its name, parameters, and body.
\`\`\`javascript
const result = declaredFunction(); // This works due to hoisting
function declaredFunction() {
  return "This function was hoisted!";
}
\`\`\`
Hoisting is a JavaScript mechanism where function declarations are moved to the top of their scope before code execution.

### 📚 Key Concepts
- **Function Declaration**: Statement that defines a named function
- **Hoisting**: JavaScript's behavior of moving declarations to the top
`,

  // problem explanation--> 05
  "function-expression": `
### 💡 Problem Breakdown
This problem demonstrates another way to create a function: the function expression. This involves creating a function and assigning it to a variable.

### ⚙️ Solution Walkthrough
An anonymous function is created and assigned to a \`const\` variable.
\`\`\`javascript
const expressionFunction = function() {
  return "This is a function expression.";
};
expressionFunction();
\`\`\`
Unlike function declarations, function expressions are not fully hoisted.

### 📚 Key Concepts
- **Function Expression**: Syntax where a function is created as part of an expression
- **Anonymous Function**: A function without a name
`,

  // problem explanation--> 06
  "default-parameters": `
### 💡 Problem Breakdown
ES6 introduced default function parameters, which allow you to initialize parameters with default values if no value is passed.

### ⚙️ Solution Walkthrough
A default value of \`"Guest"\` is assigned to the \`userName\` parameter.
\`\`\`javascript
function greet(userName = "Guest") {
  return \`Hello, \${userName}!\`;
}
greet("Alice"); // "Hello, Alice!"
greet();        // "Hello, Guest!"
\`\`\`
The default is only used for arguments that are \`undefined\`.

### 📚 Key Concepts
- **Default Parameters**: ES6 feature for specifying default values
`,

  // problem explanation--> 07
  "rest-parameters-sum": `
### 💡 Problem Breakdown
The rest parameter syntax (\`...\`) allows a function to accept an indefinite number of arguments as an array.

### ⚙️ Solution Walkthrough
The \`...args\` syntax gathers all arguments into an array named \`args\`.
\`\`\`javascript
function sum(...args) {
  return args.reduce((total, current) => total + current, 0);
}
sum(1, 2, 3, 4, 5); // 15
\`\`\`
The rest parameter must be the last parameter in a function's definition.

### 📚 Key Concepts
- **Rest Parameters**: Syntax for representing indefinite arguments as an array
- **\`Array.prototype.reduce()\`**: Method for aggregating array values
`,

  // problem explanation--> 08
  "iife-pattern": `
### 💡 Problem Breakdown
An IIFE (Immediately Invoked Function Expression) is a design pattern where a function is defined and executed at the same time.

### ⚙️ Solution Walkthrough
The syntax involves wrapping a function expression in parentheses and immediately invoking it.
\`\`\`javascript
const result = (function() {
  const privateVar = "I'm private!";
  return \`This IIFE returned: "\${privateVar}"\`;
})();
\`\`\`
This pattern creates a private scope and executes code immediately.

### 📚 Key Concepts
- **IIFE**: Pattern for creating private scope and executing code immediately
- **Encapsulation**: Practice of keeping variables and functions private
`,

  // problem explanation--> 09
  "hoisting-declaration": `
### 💡 Problem Breakdown
This problem demonstrates hoisting with function declarations. Hoisting is a JavaScript mechanism where declarations are moved to the top of their scope.

### ⚙️ Solution Walkthrough
The function is called before its physical location in the code.
\`\`\`javascript
const result = declaredFunction(); // This works due to hoisting
function declaredFunction() {
  return "This function was hoisted!";
}
\`\`\`
This behavior is unique to function declarations.

### 📚 Key Concepts
- **Hoisting**: JavaScript behavior where declarations are processed before code execution
`,

  // problem explanation--> 10
  "hoisting-expression-var": `
### 💡 Problem Breakdown
This problem highlights the difference in hoisting between function declarations and function expressions assigned to a \`var\`.

### ⚙️ Solution Walkthrough
An attempt to call the function before its assignment results in a \`TypeError\`.
\`\`\`javascript
try {
  myFunc();
} catch (e) {
  console.log(e.name); // "TypeError"
}
var myFunc = function() { return "Expression"; };
\`\`\`
Only the \`var\` declaration is hoisted, not the function assignment.

### 📚 Key Concepts
- **Variable Hoisting**: For \`var\`, only declaration is hoisted, not assignment
`,

  // problem explanation--> 11
  "global-scope": `
### 💡 Problem Breakdown
The global scope is the outermost scope in a JavaScript program. Variables declared at the top level are accessible from anywhere in the program.

### ⚙️ Solution Walkthrough
A function accessing a global variable.
\`\`\`javascript
const globalVar = "I'm global";
function accessGlobal() {
  return globalVar;
}
accessGlobal(); // "I'm global"
\`\`\`
Overusing global variables is considered bad practice as it can lead to naming conflicts.

### 📚 Key Concepts
- **Global Scope**: The top-level scope available everywhere
- **Scope Chain**: Mechanism for looking up variables in nested scopes
`,

  // problem explanation--> 12
  "function-scope": `
### 💡 Problem Breakdown
Variables declared with \`var\` are function-scoped. This means they are only accessible within the function where they are declared.

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
- **Function Scope**: The scope created by a function declaration or expression
`,

  // problem explanation--> 13
  "block-scope-let": `
### 💡 Problem Breakdown
ES6 introduced \`let\` and \`const\`, which are block-scoped. A block is any section of code within curly braces \`{}\`.

### ⚙️ Solution Walkthrough
A variable is declared with \`let\` inside an \`if\` block. It is not accessible after the block ends.
\`\`\`javascript
if (true) {
  let blockScoped = "Only in block";
}
// console.log(blockScoped); // Throws a ReferenceError
\`\`\`
This more granular scoping is generally safer than function-scoping of \`var\`.

### 📚 Key Concepts
- **Block Scope**: The scope created by a pair of curly braces
- **\`let\`**: Modern keyword for declaring block-scoped, reassignable variables
`,

  // problem explanation--> 14
  "scope-chain": `
### 💡 Problem Breakdown
The scope chain is the mechanism that allows a function to access variables from its containing scopes.

### ⚙️ Solution Walkthrough
A deeply nested function accesses variables from both its parent and grandparent scopes.
\`\`\`javascript
const grandParentVar = "Grandparent";
function parent() {
  const parentVar = "Parent";
  function child() {
    return \`Child can see: \${parentVar} and \${grandParentVar}\`;
  }
  return child();
}
\`\`\`
When resolving variables, the engine looks in the current scope, then outer scopes.

### 📚 Key Concepts
- **Lexical Scoping**: The scope chain is determined by where functions are physically written
`,

  // problem explanation--> 15
  "pure-function": `
### 💡 Problem Breakdown
A pure function is a fundamental concept in functional programming. It has two strict properties: deterministic and no side effects.

### ⚙️ Solution Walkthrough
A function that doubles a number is a classic example of a pure function.
\`\`\`javascript
function double(n) {
  return n * 2;
}
\`\`\`
Its output depends only on its input \`n\`, and it doesn't change anything in the outside world.

### 📚 Key Concepts
- **Pure Function**: A function with no side effects and deterministic output
- **Functional Programming**: Programming paradigm that emphasizes pure functions
`,

  // problem explanation--> 16
  "impure-function": `
### 💡 Problem Breakdown
An impure function is any function that is not pure. This means it either has side effects or is not deterministic.

### ⚙️ Solution Walkthrough
This function is impure because it modifies an external variable.
\`\`\`javascript
let externalCounter = 0;
function incrementExternal() {
  externalCounter++;
  return \`External counter is now: \${externalCounter}\`;
}
\`\`\`
Calling it multiple times will produce different results, even with the same input.

### 📚 Key Concepts
- **Side Effect**: Any interaction a function has with the outside world
- **Impure Function**: A function that has side effects or is non-deterministic
`,

  // problem explanation--> 17
  "higher-order-function-argument": `
### 💡 Problem Breakdown
A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.

### ⚙️ Solution Walkthrough
The \`applyOperation\` function is a higher-order function because it accepts another function as a parameter.
\`\`\`javascript
const square = (n) => n * n;
const applyOperation = (val, operation) => {
  return operation(val);
};
applyOperation(5, square); // Returns 25
\`\`\`
The function that is passed as an argument is called a callback function.

### 📚 Key Concepts
- **Higher-Order Function**: A function that operates on other functions
- **Callback Function**: A function passed as an argument to be executed later
`,

  // problem explanation--> 18
  "higher-order-function-return": `
### 💡 Problem Breakdown
This problem demonstrates the second characteristic of a higher-order function: returning another function as its result.

### ⚙️ Solution Walkthrough
The \`createMultiplier\` function is a higher-order function that returns a new function.
\`\`\`javascript
function createMultiplier(factor) {
  return function(n) {
    return n * factor;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
double(7); // 14
triple(7); // 21
\`\`\`
The returned function "remembers" the \`factor\` from its creation environment due to closure.

### 📚 Key Concepts
- **Function Factory**: A function that creates and returns other functions
- **Closure**: Inner function has access to its outer function's scope
`,

  // problem explanation--> 19
  "sync-callback": `
### 💡 Problem Breakdown
A synchronous callback is a callback function that is executed immediately during the execution of the higher-order function.

### ⚙️ Solution Walkthrough
The \`processArray\` function iterates through an array and calls the provided \`callback\` for each item.
\`\`\`javascript
function processArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
processArray(['apple', 'banana'], (item) => {
  console.log(\`Processing \${item}\`);
});
\`\`\`
The execution is synchronous; the \`for\` loop doesn't finish until all callback calls complete.

### 📚 Key Concepts
- **Synchronous Callback**: A callback that is executed immediately and blocks execution
`,

  // problem explanation--> 20
  "arguments-object": `
### 💡 Problem Breakdown
This problem demonstrates the \`arguments\` object, which is a feature of traditional functions that contains all the arguments passed to the function.

### ⚙️ Solution Walkthrough
A \`sum\` function is defined with no parameters but uses the \`arguments\` object.
\`\`\`javascript
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
sum(10, 20, 30); // 60
\`\`\`
In modern JavaScript, it's best practice to use rest parameters instead of the \`arguments\` object.

### 📚 Key Concepts
- **\`arguments\` Object**: Array-like object available in traditional functions
`,
  // problem explanation--> 21
  "object-method-this": `
### 💡 Problem Breakdown
A method is a function that is a property of an object. Inside a method, the keyword \`this\` refers to the object that the method was called on.

### ⚙️ Solution Walkthrough
The \`greet\` method on the \`person\` object uses \`this.name\` to access the \`name\` property of that same object.
\`\`\`javascript
const person = {
  name: "Alice",
  greet: function () {
    return \`Hello, my name is \${this.name}.\`;
  },
};
person.greet(); // "Hello, my name is Alice."
\`\`\`
The value of \`this\` is determined by how the function is called.

### 📚 Key Concepts
- **Method**: A function that is a property of an object
- **\`this\` Keyword**: Reference to the execution context of a function
`,

  // problem explanation--> 22
  "this-global-scope": `
### 💡 Problem Breakdown
This is a conceptual problem about the default binding for the \`this\` keyword. When \`this\` is used in the global scope, it refers to the global object.

### ⚙️ Solution Walkthrough
- **In a browser environment**: The global object is \`window\`
- **In a Node.js environment**: The global object is \`global\`
\`\`\`javascript
// In a browser's console
console.log(this === window); // true
\`\`\`
This also applies when a regular function is called without a specific context in non-strict mode.

### 📚 Key Concepts
- **Global Object**: The top-level object in a JavaScript environment
- **\`this\` Binding**: Default binding for \`this\` is the global object
`,

  // problem explanation--> 23
  "this-arrow-function-lexical": `
### 💡 Problem Breakdown
This problem highlights a crucial difference between arrow functions and traditional functions. Arrow functions do not have their own \`this\` binding.

### ⚙️ Solution Walkthrough
Arrow functions inherit the \`this\` value from their surrounding lexical scope.
\`\`\`javascript
const myObject = {
  name: 'My Object',
  regularMethod: function() {
    const arrowFunc = () => {
      return this.name;
    };
    return arrowFunc();
  }
};
myObject.regularMethod(); // 'My Object'
\`\`\`
This behavior is extremely useful for callbacks inside methods.

### 📚 Key Concepts
- **Lexical \`this\`**: Behavior of \`this\` in arrow functions
`,

  // problem explanation--> 24
  "function-call-method": `
### 💡 Problem Breakdown
The \`.call()\` method is a way to invoke a function and explicitly specify what the \`this\` keyword should refer to inside that function.

### ⚙️ Solution Walkthrough
The \`greet\` function is "borrowed" and called with the context of \`person2\`.
\`\`\`javascript
function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}
const person1 = { name: "John" };
const person2 = { name: "Jane" };
greet.call(person2, "Hi", "!"); // "Hi, Jane!"
\`\`\`
The first argument to \`.call()\` is the 'this' context.

### 📚 Key Concepts
- **\`.call()\`**: Method for explicit \`this\` binding
- **Explicit Binding**: Manually setting the \`this\` context
`,

  // problem explanation--> 25
  "function-apply-method": `
### 💡 Problem Breakdown
The \`.apply()\` method is similar to \`.call()\` but takes arguments as a single array.

### ⚙️ Solution Walkthrough
The \`Math.max\` function is called with an array of numbers using \`.apply()\`.
\`\`\`javascript
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers); // max is 7
\`\`\`
The first argument to \`.apply()\` is the \`this\` context. In modern JavaScript, spread syntax is usually preferred.

### 📚 Key Concepts
- **\`.apply()\`**: Method for explicit \`this\` binding with array arguments
`,

  // problem explanation--> 26
  "function-bind-method": `
### 💡 Problem Breakdown
The \`.bind()\` method creates a new function with its \`this\` keyword permanently set to the provided value.

### ⚙️ Solution Walkthrough
\`.bind()\` solves the problem of losing \`this\` context when a method is passed as a callback.
\`\`\`javascript
const module = {
  x: 42,
  getX: function() { return this.x; }
};
const unboundGetX = module.getX;
// unboundGetX(); // Would return undefined
const boundGetX = unboundGetX.bind(module);
boundGetX(); // 42
\`\`\`

### 📚 Key Concepts
- **\`.bind()\`**: Method for creating a new function with fixed \`this\` context
- **Explicit Binding**: Way to permanently lock the \`this\` value
`,

  // problem explanation--> 27
  "recursive-countdown": `
### 💡 Problem Breakdown
A recursive function is a function that calls itself to solve a problem. Every recursive function needs a base case and a recursive case.

### ⚙️ Solution Walkthrough
The function logs a number and then calls itself with a smaller number until it reaches the base case.
\`\`\`javascript
function countdown(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  countdown(n - 1);
}
\`\`\`
When \`countdown(5)\` is called, it logs 5, then calls \`countdown(4)\`, and so on.

### 📚 Key Concepts
- **Recursion**: Problem-solving technique where a function calls itself
- **Base Case**: Stopping condition for the recursion
`,

  // problem explanation--> 28
  "first-class-functions": `
### 💡 Problem Breakdown
In JavaScript, functions are "first-class citizens." This means a function is just another type of value that can be treated like any other value.

### ⚙️ Solution Walkthrough
This problem demonstrates assigning a function to a variable.
\`\`\`javascript
const sayHello = function() {
  return "Hello!";
};
const myFunc = sayHello;
myFunc(); // "Hello!"
\`\`\`
This "first-class" nature is what makes higher-order functions possible.

### 📚 Key Concepts
- **First-Class Functions**: Ability to treat functions as values
`,

  // problem explanation--> 29
  "named-function-expression": `
### 💡 Problem Breakdown
A Named Function Expression (NFE) is a function expression where the function is given a name.

### ⚙️ Solution Walkthrough
The name \`fac\` is only accessible inside the function itself.
\`\`\`javascript
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
factorial(5); // 120
// fac(5); // Would throw a ReferenceError
\`\`\`
This is useful for debugging and recursion.

### 📚 Key Concepts
- **Named Function Expression**: Function expression with a name local to the function's own scope
`,

  // problem explanation--> 30
  "function-shadowing": `
### 💡 Problem Breakdown
When a variable is declared in an inner scope with the same name as a variable in an outer scope, the inner variable "shadows" the outer one.

### ⚙️ Solution Walkthrough
A local variable \`x\` inside a function shadows the outer \`x\`.
\`\`\`javascript
let x = "outer";
function testShadow() {
  let x = "inner";
  return \`Inside function, x is "\${x}"\`; // "inner"
}
console.log(testShadow());
console.log(x); // "outer"
\`\`\`

### 📚 Key Concepts
- **Variable Shadowing**: Direct consequence of lexical scoping
`,

  /// problem explanation--> 31
  "anonymous-function": `
### 💡 Problem Breakdown
An anonymous function is a function that is declared without any named identifier. They are often used in scenarios where a function is created and immediately used, such as a callback function for another higher-order function.

### ⚙️ Solution Walkthrough
The most common use is as a callback. For example, with \`setTimeout\`.
\`\`\`javascript
setTimeout(function() {
  console.log("This is an anonymous function.");
}, 1000);

// Arrow functions are also a form of anonymous function.
const anArrowFunc = () => "Also anonymous";
\`\`\`

### 📚 Key Concepts
- **Anonymous Function**: A function without a name
- **Callbacks**: A primary use case for anonymous functions
`,

  // problem explanation--> 32
  "implicit-return-arrow": `
### 💡 Problem Breakdown
This problem focuses on a key syntactic sugar of arrow functions. If the body of an arrow function consists of only a single expression, you can omit the curly braces \`{}\` and the \`return\` keyword.

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
This feature makes arrow functions extremely popular for short callbacks.

### 📚 Key Concepts
- **Implicit Return**: A feature that makes single-expression arrow functions highly concise
`,

  // problem explanation--> 33
  "function-length-property": `
### 💡 Problem Breakdown
Every function in JavaScript has a built-in \`.length\` property. This property indicates the number of named parameters the function expects to receive.

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
- **Function Introspection**: Ability to inspect properties of a function object
- **Arity**: Number of arguments or parameters a function takes
`,

  // problem explanation--> 34
  "scope-let-vs-var-loop": `
### 💡 Problem Breakdown
This problem demonstrates a classic JavaScript pitfall that was solved by the introduction of \`let\`. When using \`var\` in a \`for\` loop to create asynchronous callbacks, all callbacks will reference the same single loop variable.

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
- **Block Scope**: Key feature of \`let\` that solves this problem
- **Closures in Loops**: Understanding how closures capture variables
`,

  // problem explanation--> 35
  "pass-by-value": `
### 💡 Problem Breakdown
This problem demonstrates "pass-by-value". When you pass a primitive type as an argument to a function, the function receives a copy of that value.

### ⚙️ Solution Walkthrough
A number is passed to a function that tries to modify it.
\`\`\`javascript
let myNum = 10;
function modify(num) {
  num = 20;
  console.log(\`Inside function: \${num}\`); // 20
}
modify(myNum);
console.log(\`Outside function: \${myNum}\`); // 10
\`\`\`

### 📚 Key Concepts
- **Pass by Value**: Function receives a copy of the primitive's value
- **Primitives**: Data types that are passed by value
`,

  // problem explanation--> 36
  "pass-by-reference": `
### 💡 Problem Breakdown
When you pass an object to a function, the function receives a copy of the reference to the object. Modifying the object's properties inside the function will affect the original object.

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
- **Pass by Reference**: Function receives a reference to the same object
`,

  // problem explanation--> 37
  "function-constructor": `
### 💡 Problem Breakdown
This is a conceptual problem about an alternative, rarely used way to create functions: the \`Function\` constructor.

### ⚙️ Solution Walkthrough
A simple function is created using the constructor.
\`\`\`javascript
const sum = new Function('a', 'b', 'return a + b');
sum(2, 3); // 5
\`\`\`
**Why it's not recommended**:
- Security risks similar to \`eval()\`
- Much slower than declaring a function normally
- Functions created this way do not form closures

### 📚 Key Concepts
- **\`Function\` Constructor**: Way to create functions from strings at runtime
`,

  // problem explanation--> 38
  "currying-multiply": `
### 💡 Problem Breakdown
**Currying** is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

### ⚙️ Solution Walkthrough
A series of nested arrow functions is used to create the curried function.
\`\`\`javascript
const multiply = (a) => (b) => (c) => a * b * c;
const result = multiply(2)(3)(4); // 24
\`\`\`
Each time the function is called, it returns a new function that has "remembered" the previous argument via a closure.

### 📚 Key Concepts
- **Currying**: Functional programming technique for transforming functions
- **Closures**: Mechanism that allows nested functions to remember arguments
`,

  // problem explanation--> 39
  "partial-application": `
### 💡 Problem Breakdown
**Partial application** is a technique where you create a new function by pre-filling some of the arguments of an existing function.

### ⚙️ Solution Walkthrough
The \`.bind()\` method is a perfect tool for partial application.
\`\`\`javascript
function add(a, b, c) {
  return a + b + c;
}
const addTen = add.bind(null, 10);
addTen(3, 5); // 10 + 3 + 5 = 18
\`\`\`
The first argument to \`.bind()\` sets the \`this\` context.

### 📚 Key Concepts
- **Partial Application**: Creating a more specialized function by fixing some arguments
`,

  // problem explanation--> 40
  "this-event-handler": `
### 💡 Problem Breakdown
This is a conceptual problem about the value of \`this\` in browser event handlers. When you attach an event listener using a traditional function, \`this\` refers to the DOM element.

### ⚙️ Solution Walkthrough
A conceptual example of attaching a click listener.
\`\`\`javascript
const button = document.createElement('button');
button.textContent = 'Click Me';
button.addEventListener('click', function() {
  console.log(this.textContent); // "Click Me"
  this.style.color = 'red';
});
\`\`\`
**Note**: If an arrow function were used, \`this\` would be inherited from the surrounding scope.

### 📚 Key Concepts
- **Event Handling**: Core part of front-end JavaScript
- **\`this\` Binding**: Context of \`this\` is determined by how function is called
`,
  // problem explanation--> 41
  "function-as-object-property": `
### 💡 Problem Breakdown
In JavaScript, functions are first-class citizens, which means they can be treated like any other value. This problem demonstrates storing a function as a property of an object.

### ⚙️ Solution Walkthrough
A \`config\` object is created with a property \`run\` that holds a function.
\`\`\`javascript
const config = {
  id: 1,
  run: function() {
    return "Running the config function!";
  }
};
config.run(); // "Running the config function!"
\`\`\`

### 📚 Key Concepts
- **First-Class Functions**: Ability to treat functions as values
- **Method**: A function that is a property of an object
`,

  // problem explanation--> 42
  "hoisting-var-declaration": `
### 💡 Problem Breakdown
Hoisting is a JavaScript mechanism where variable and function declarations are conceptually moved to the top of their scope before code execution.

### ⚙️ Solution Walkthrough
A \`var\` is accessed before its assignment.
\`\`\`javascript
console.log(myVar); // logs 'undefined'
var myVar = 5;
\`\`\`
The variable exists due to hoisting, but its value is \`undefined\` until the assignment line is reached.

### 📚 Key Concepts
- **Hoisting**: Core JavaScript behavior
`,

  // problem explanation--> 43
  "temporal-dead-zone-let": `
### 💡 Problem Breakdown
Variables declared with \`let\` and \`const\` are hoisted but not initialized. The period from the start of the block until the declaration is reached is called the Temporal Dead Zone (TDZ).

### ⚙️ Solution Walkthrough
An attempt is made to access a \`let\` variable before its declaration.
\`\`\`javascript
// console.log(myLet); // Throws a ReferenceError
let myLet = 5;
\`\`\`
This prevents bugs that could occur with \`var\`.

### 📚 Key Concepts
- **Temporal Dead Zone (TDZ)**: State where a variable has been hoisted but cannot be accessed
- **\`ReferenceError\`**: Error thrown when accessing a variable in its TDZ
`,

  // problem explanation--> 44
  "arrow-function-no-arguments": `
### 💡 Problem Breakdown
Arrow functions do not have their own \`arguments\` object. The \`arguments\` object is only available in functions declared with the \`function\` keyword.

### ⚙️ Solution Walkthrough
A conceptual comparison.
\`\`\`javascript
function traditional() {
  return arguments.length;
}
traditional(1, 2, 3); // 3

const arrow = () => {
  // return arguments.length; // Throws a ReferenceError
};
\`\`\`
To capture all arguments in an arrow function, you must use rest parameters (\`...args\`).

### 📚 Key Concepts
- **Arrow Functions**: Do not have their own \`arguments\` object
- **Rest Parameters**: Modern way to handle an indefinite number of arguments
`,

  // problem explanation--> 45
  "iife-with-params": `
### 💡 Problem Breakdown
An IIFE can be made more flexible by passing arguments to it. The arguments are passed in the final pair of parentheses that invokes the function.

### ⚙️ Solution Walkthrough
A string argument is passed into an IIFE.
\`\`\`javascript
const message = "Hello IIFE";
(function(p) {
  console.log(\`The IIFE received: "\${p}"\`);
})(message);
\`\`\`
This was a common pattern for aliasing global variables or providing initial configuration values.

### 📚 Key Concepts
- **IIFE**: Design pattern for creating private scope
- **Function Arguments**: Mechanism for passing data into functions
`,

  // problem explanation--> 46
  "function-overwriting": `
### 💡 Problem Breakdown
In JavaScript, there is no traditional function "overloading". If you declare a function with the same name as an existing function in the same scope, the new declaration will overwrite the previous one.

### ⚙️ Solution Walkthrough
A function is defined twice.
\`\`\`javascript
function myFunction() {
  return "First definition";
}
function myFunction() {
  return "Second definition";
}
myFunction(); // returns "Second definition"
\`\`\`
Due to hoisting of function declarations, the second definition is what will be available throughout the entire scope.

### 📚 Key Concepts
- **Function Overwriting**: Later declarations overwrite earlier ones
`,

  // problem explanation--> 47
  "callback-hell-conceptual": `
### 💡 Problem Breakdown
"Callback hell" is an anti-pattern that arises from deeply nested asynchronous callbacks. The code becomes increasingly indented, making it difficult to read and handle errors.

### ⚙️ Solution Walkthrough
A conceptual example of nested callbacks for sequential operations.
\`\`\`javascript
getData(function (a) {
  getMoreData(a, function (b) {
    getEvenMoreData(b, function (c) {
      // And so on...
    }, handleErrorC);
  }, handleErrorB);
}, handleErrorA);
\`\`\`
1. **Readability**: Deep nesting makes logical flow hard to follow
2. **Error Handling**: Managing errors at each separate level is cumbersome
3. **The Solution**: Promises and \`async/await\` were designed to solve this problem

### 📚 Key Concepts
- **Callback Hell**: Anti-pattern resulting from deeply nested asynchronous callbacks
`,

  // problem explanation--> 48
  "this-binding-new": `
### 💡 Problem Breakdown
When a function is called with the \`new\` keyword, the JavaScript engine creates a new object and binds \`this\` to it.

### ⚙️ Solution Walkthrough
A constructor function is called with \`new\`.
\`\`\`javascript
function Person(name) {
  this.name = name;
}
const p = new Person('Alice');
\`\`\`

### 📚 Key Concepts
- **Constructor Function**: Function designed to be used with \`new\`
- **\`this\` Binding**: \`new\` keyword has high precedence for determining \`this\`
`,

  // problem explanation--> 49
  "this-strict-mode": `
### 💡 Problem Breakdown
Strict mode changes the default binding for \`this\`. In non-strict mode, \`this\` defaults to the global object. In strict mode, it remains \`undefined\`.

### ⚙️ Solution Walkthrough
In strict mode, \`this\` remains \`undefined\` in a simple function call.
\`\`\`javascript
'use strict';
function checkThis() {
  return this;
}
checkThis(); // undefined
\`\`\`
This helps prevent accidental modification of global variables.

### 📚 Key Concepts
- **Strict Mode**: More restrictive variant of JavaScript
- **\`this\` Binding**: Strict mode changes default binding to \`undefined\`
`,

  // problem explanation--> 50
  "function-name-property": `
### 💡 Problem Breakdown
Every function in JavaScript has a built-in, read-only \`.name\` property that returns a string representing the name of the function.

### ⚙️ Solution Walkthrough
The \`.name\` property is inspected for different function types.
\`\`\`javascript
function namedFunction() {}
console.log(namedFunction.name); // "namedFunction"

const expression = function() {};
console.log(expression.name); // "expression"

const arrow = () => {};
console.log(arrow.name); // "arrow"
\`\`\`
Modern JavaScript engines are good at inferring names from context.

### 📚 Key Concepts
- **Function Introspection**: Inspecting properties of a function object
`,
  // problem explanation--> 51
  "generator-function-basic": `
### 💡 Problem Breakdown
A generator function is a special type of function that can be paused and resumed. It is declared with \`function*\` and uses the \`yield\` keyword to produce a sequence of values.

### ⚙️ Solution Walkthrough
A simple generator function yields two numbers.
\`\`\`javascript
function* numberGenerator() {
  console.log('Starting');
  yield 1;
  console.log('Resumed');
  yield 2;
}

const gen = numberGenerator(); // Returns an iterator
\`\`\`
Calling the generator does not execute its body. It returns an iterator object.

### 📚 Key Concepts
- **Generator Function**: Function declared with \`function*\` that returns an iterator
- **\`yield\`**: Operator used to pause a generator and return a value
`,

  // problem explanation--> 52
  "generator-function-iterator": `
### 💡 Problem Breakdown
When you call a generator function, it returns an iterator object with a \`.next()\` method that returns objects with \`value\` and \`done\` properties.

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
- **Iterator Protocol**: Pattern of an object with a \`.next()\` method
`,

  // problem explanation--> 53
  "lexical-environment-conceptual": `
### 💡 Problem Breakdown
A Lexical Environment is an internal data structure that holds identifier-variable mappings. It's essentially the "scope" of a function or block.

### ⚙️ Solution Walkthrough
Every lexical environment has two components:
1. **Environment Record**: Object-like structure that stores variable and function declarations
2. **Reference to the Outer Environment**: Link to the lexical environment of the containing scope

### 📚 Key Concepts
- **Lexical Environment**: Formal specification term for "scope"
- **Scope Chain**: Formed by nested links between lexical environments
`,

  // problem explanation--> 54
  "this-with-settimeout": `
### 💡 Problem Breakdown
This problem demonstrates a classic JavaScript pitfall. When you use a traditional function as a callback for \`setTimeout\` inside a method, \`this\` does not refer to the object.

### ⚙️ Solution Walkthrough
The problem and two common solutions are shown.
\`\`\`javascript
const obj = {
  name: 'My Object',
  test: function() {
    // Problem: 'this' will be 'window' or 'undefined'
    setTimeout(function() { console.log(this.name); }, 100);

    // Solution 1: Use 'bind'
    setTimeout(function() { console.log(this.name); }.bind(this), 100);

    // Solution 2: Use an arrow function
    setTimeout(() => { console.log(this.name); }, 100);
  }
};
\`\`\`

### 📚 Key Concepts
- **Losing \`this\`**: Common problem when passing methods as callbacks
- **Lexical \`this\`**: Key feature of arrow functions
`,

  // problem explanation--> 55
  "function-composition": `
### 💡 Problem Breakdown
Function composition is the process of combining two or more functions to produce a new function.

### ⚙️ Solution Walkthrough
A higher-order function \`compose\` is created to perform composition.
\`\`\`javascript
const double = (x) => x * 2;
const addTen = (x) => x + 10;

const compose = (f, g) => (x) => f(g(x));
const composedFunc = compose(addTen, double);
composedFunc(5); // 20
\`\`\`

### 📚 Key Concepts
- **Function Composition**: Fundamental pattern in functional programming
- **Higher-Order Functions**: Functions that operate on other functions
`,

  // problem explanation--> 56
  "function-piping": `
### 💡 Problem Breakdown
Piping is similar to composition but the order of execution is more natural to read from left to right.

### ⚙️ Solution Walkthrough
A higher-order function \`pipe\` is created using \`.reduce()\`.
\`\`\`javascript
const double = (x) => x * 2;
const addTen = (x) => x + 10;

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const pipedFunc = pipe(double, addTen);
pipedFunc(5); // 20
\`\`\`

### 📚 Key Concepts
- **Function Piping**: Left-to-right version of function composition
- **\`Array.prototype.reduce()\`**: Used to chain function calls
`,

  // problem explanation--> 57
  "side-effects-conceptual": `
### 💡 Problem Breakdown
A side effect is any interaction a function has with the outside world that is observable outside of the function, other than its return value.

### ⚙️ Solution Walkthrough
Common examples of side effects include:
- Modifying a global variable
- Writing to the console (\`console.log\`)
- Changing the DOM
- Making a network request

### 📚 Key Concepts
- **Side Effect**: Function's interaction with the "outside world"
- **Purity**: Absence of side effects
`,

  // problem explanation--> 58
  "memoization-closure": `
### 💡 Problem Breakdown
Memoization is an optimization technique where the results of expensive function calls are cached.

### ⚙️ Solution Walkthrough
A higher-order function \`memoize\` is created using a closure.
\`\`\`javascript
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};
\`\`\`

### 📚 Key Concepts
- **Memoization**: Optimization technique for speeding up functions
- **Closure**: \`cache\` object persists between calls
`,

  // problem explanation--> 59
  "block-scope-in-loop": `
### 💡 Problem Breakdown
For loops with \`let\`, a new lexical environment with a fresh binding for that variable is created for each iteration.

### ⚙️ Solution Walkthrough
This is the underlying reason why \`let\`-in-loop with \`setTimeout\` works correctly.
\`\`\`javascript
// Conceptually, the engine does:
{ let i = 0; setTimeout(() => console.log(i)); }
{ let i = 1; setTimeout(() => console.log(i)); }
{ let i = 2; setTimeout(() => console.log(i)); }
\`\`\`

### 📚 Key Concepts
- **Loop Variable Binding**: Special behavior of \`let\` in loops
`,

  // problem explanation--> 60
  "arrow-function-no-prototype": `
### 💡 Problem Breakdown
Arrow functions cannot be used as constructors. They do not have their own \`.prototype\` property.

### ⚙️ Solution Walkthrough
The code attempts to use an arrow function with \`new\`.
\`\`\`javascript
const MyArrow = () => {};
// console.log(MyArrow.prototype); // undefined
// new MyArrow(); // Throws TypeError
\`\`\`

### 📚 Key Concepts
- **Constructors**: Functions designed to be called with \`new\`
- **Arrow Functions**: Cannot be used as constructors
`,

  // problem explanation--> 61
  "this-in-nested-function": `
### 💡 Problem Breakdown
When a regular function is defined inside a method, it does not inherit the \`this\` value of the method.

### ⚙️ Solution Walkthrough
A nested function loses the object context.
\`\`\`javascript
const obj = {
  name: "MyObj",
  process: function() {
    function nested() {
      return this.name; // 'this' is 'window' or 'undefined'
    }
    return nested();
  }
};
\`\`\`
The modern solution is to use an arrow function for \`nested\`.

### 📚 Key Concepts
- **Losing \`this\`**: Common problem when using regular functions as nested helpers
`,

  // problem explanation--> 62
  "default-param-evaluation": `
### 💡 Problem Breakdown
Default parameter expressions are evaluated at call time, each time the function is invoked without a corresponding argument.

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
- **Lazy Evaluation**: Default parameter expressions are only evaluated when needed
`,

  // problem explanation--> 63
  "function-arity": `
### 💡 Problem Breakdown
Arity refers to the number of arguments a function or operator takes. For a JavaScript function, its arity is the number of named parameters in its signature.

### ⚙️ Solution Walkthrough
The \`.length\` property is checked.
\`\`\`javascript
function func(a, b) {}
console.log(func.length); // 2

const arrow = (a, b = 10, ...c) => {};
console.log(arrow.length); // 1
\`\`\`

### 📚 Key Concepts
- **Arity**: Term for the number of function parameters
- **Function Introspection**: Using \`.length\` to determine expected number of arguments
`,

  // problem explanation--> 64
  "iife-for-private-methods": `
### 💡 Problem Breakdown
This demonstrates the Module Pattern, a classic JavaScript design pattern for creating objects with public and private members.

### ⚙️ Solution Walkthrough
An IIFE returns an object literal.
\`\`\`javascript
const calculator = (function() {
  function add(a, b) {
    return a + b;
  }

  return {
    calculate: function(a, b) {
      return add(a, b);
    }
  };
})();

calculator.calculate(10, 5); // 15
// calculator.add(10, 5); // TypeError
\`\`\`

### 📚 Key Concepts
- **Module Pattern**: Pattern for creating objects with private state and public methods
- **Closure**: Public methods "close over" private functions
`,

  // problem explanation--> 65
  "function-as-a-value": `
### 💡 Problem Breakdown
This problem demonstrates that functions are first-class citizens by showing they can be stored in data structures like arrays.

### ⚙️ Solution Walkthrough
Two functions are stored in an array.
\`\`\`javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const operations = [add, subtract];
const result = operations[1](10, 3); // 7
\`\`\`
This pattern is useful for creating dynamic dispatch tables.

### 📚 Key Concepts
- **First-Class Functions**: Ability to treat functions as data
`,

  // problem explanation--> 66
  "variadic-function": `
### 💡 Problem Breakdown
A variadic function is one that accepts a variable number of arguments. In modern JavaScript, this is achieved using rest parameters.

### ⚙️ Solution Walkthrough
A function \`findMax\` uses rest parameters to accept any number of arguments.
\`\`\`javascript
const findMax = (...args) => {
  if (args.length === 0) return -Infinity;
  return Math.max(...args);
};

findMax(1, 5, 2, 9, 3); // 9
\`\`\`
The spread syntax is used to pass array elements as individual arguments.

### 📚 Key Concepts
- **Variadic Function**: Function of indefinite arity
- **Rest Parameters**: Standard way to create variadic functions in ES6+
`,

  // problem explanation--> 67
  "execution-context-conceptual": `
### 💡 Problem Breakdown
An Execution Context is an abstract concept that holds all the information needed to run a piece of code.

### ⚙️ Solution Walkthrough
Each context is created in two phases:
1. **Creation Phase**: Engine scans for declarations, allocates memory, defines scope chain
2. **Execution Phase**: Code is executed line by line

### 📚 Key Concepts
- **Execution Context**: Environment in which JavaScript code is evaluated
- **Call Stack**: Stack data structure where execution contexts are pushed and popped
`,

  // problem explanation--> 68
  "this-in-callback": `
### 💡 Problem Breakdown
This problem shows a common scenario where the \`this\` context is lost when passing an object's method as a callback.

### ⚙️ Solution Walkthrough
A method passed to \`forEach\` loses its context.
\`\`\`javascript
const obj = {
  name: 'MyObj',
  process: function(arr) {
    arr.forEach(function(item) {
      console.log(this.name, item); // Fails
    });
  }
};
\`\`\`
The modern solution is to use an arrow function for the callback.

### 📚 Key Concepts
- **Losing \`this\`**: Fundamental problem when working with methods as callbacks
`,

  // problem explanation--> 69
  "function-hoisting-pitfall": `
### 💡 Problem Breakdown
This is a conceptual problem about inconsistent behavior of function declarations inside blocks in non-strict mode.

### ⚙️ Solution Walkthrough
A function is declared inside an \`if\` block.
\`\`\`javascript
// non-strict mode
if (true) {
  function sayHi() { return 'Hi'; }
} else {
  function sayHi() { return 'Hello'; }
}
// sayHi(); // In some engines, might return 'Hello'
\`\`\`
**Best Practice**: Never use function declarations inside blocks.

### 📚 Key Concepts
- **Legacy Behavior**: Inconsistent behavior from older JavaScript engines
`,

  // problem explanation--> 70
  "call-vs-apply-vs-bind": `
### 💡 Problem Breakdown
Summary of the three main methods for explicitly setting the \`this\` context of a function.

### ⚙️ Solution Walkthrough
- **\`.call(thisContext, arg1, arg2, ...)\`**: Calls immediately with comma-separated arguments
- **\`.apply(thisContext, [arg1, arg2, ...])\`**: Calls immediately with array arguments
- **\`.bind(thisContext, arg1, ...)\`**: Returns new function with bound context

### 📚 Key Concepts
- **Explicit Binding**: Core purpose of all three methods
`,

  // problem explanation--> 71
  "currying-vs-partial-application": `
### 💡 Problem Breakdown
This clarifies the difference between two related functional programming techniques.

### ⚙️ Solution Walkthrough
Currying is a specific transformation, while partial application is a more general concept.
\`\`\`javascript
// Currying: f(a,b) -> f(a)(b)
const add = (a, b) => a + b;
const curriedAdd = a => b => a + b;

// Partial Application: Fixing 'a' to 5
const addTen = add.bind(null, 10);
\`\`\`

### 📚 Key Concepts
- **Arity**: Currying produces a chain of functions of arity 1
`,

  // problem explanation--> 72
  "function-overloading-conceptual": `
### 💡 Problem Breakdown
"Function overloading" is a feature in some languages where you can define multiple functions with the same name but different parameter types or counts.

### ⚙️ Solution Walkthrough
To achieve a similar effect in JavaScript, you must create a single function and check the arguments inside it.
\`\`\`javascript
function doSomething(arg1) {
  if (typeof arg1 === 'string') {
    return 'Processing a string...';
  }
  if (typeof arg1 === 'number') {
    return 'Processing a number...';
  }
}
\`\`\`

### 📚 Key Concepts
- **Dynamic Typing**: JavaScript doesn't choose functions based on parameter types
`,

  // problem explanation--> 73
  "self-referencing-function": `
### 💡 Problem Breakdown
This demonstrates how a Named Function Expression (NFE) can be used for recursion.

### ⚙️ Solution Walkthrough
A factorial function is implemented using an NFE.
\`\`\`javascript
const factorial = function fac(n) {
  if (n <= 1) return 1;
  return n * fac(n - 1);
};
\`\`\`
The name \`fac\` is only accessible within the function itself.

### 📚 Key Concepts
- **Named Function Expression (NFE)**: Provides a reliable reference for recursion
`,

  // problem explanation--> 74
  "closure-scope-preservation": `
### 💡 Problem Breakdown
A crucial concept about closures is that they hold a live reference to the variables in their parent scope, not a frozen copy.

### ⚙️ Solution Walkthrough
An outer function defines a variable \`x\`, creates a closure that reads \`x\`, modifies \`x\`, and then returns the closure.
\`\`\`javascript
function outer() {
  let x = 1;
  const inner = () => x;
  x = 2;
  return inner;
}
const myClosure = outer();
myClosure(); // Returns 2
\`\`\`

### 📚 Key Concepts
- **Live Reference**: Closures maintain a live link to their lexical environment
`,

  // problem explanation--> 75
  "higher-order-function-wrapper": `
### 💡 Problem Breakdown
This is a practical example of a higher-order function. A "wrapper" function takes another function as input and returns a new function that adds some extra behavior.

### ⚙️ Solution Walkthrough
A \`withLogging\` function is created.
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
- **Wrapper Function**: Higher-order function that enhances another function
`,

  // problem explanation--> 76
  "new-function-scope": `
### 💡 Problem Breakdown
This is a conceptual problem about the rarely-used \`Function\` constructor. Functions created with \`new Function(...)\` do not form closures to their creation contexts.

### ⚙️ Solution Walkthrough
An attempt is made to access a local variable from a function created with the constructor.
\`\`\`javascript
function createFunction() {
  let local = 'I am local';
  const fn = new Function('return local;'); 
  // fn(); // This would throw a ReferenceError
}
\`\`\`

### 📚 Key Concepts
- **\`Function\` Constructor Scope**: Special case that breaks standard rules of lexical scoping
`,

  // problem explanation--> 77
  "generator-function-return": `
### 💡 Problem Breakdown
The \`return\` statement in a generator function has a special meaning. It terminates the generator and sets the final value.

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
\`\`\`

### 📚 Key Concepts
- **Generator Termination**: \`return\` statement provides a way to specify a final value
`,

  // problem explanation--> 78
  "generator-yield-delegation": `
### 💡 Problem Breakdown
The \`yield*\` expression is used to delegate from one generator to another iterable object.

### ⚙️ Solution Walkthrough
One generator delegates to another to produce a combined sequence.
\`\`\`javascript
function* genA() { yield 1; yield 2; }
function* genB() {
  yield* genA();
  yield 3;
}
const arr = [...genB()]; // [1, 2, 3]
\`\`\`

### 📚 Key Concepts
- **\`yield*\`**: Syntax for delegating iteration
`,

  // problem explanation--> 79
  "async-function-return": `
### 💡 Problem Breakdown
The \`async\` keyword fundamentally changes what a function returns. An \`async\` function always returns a Promise.

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
- **\`async\` Functions**: Syntactic sugar that simplifies functions that work with promises
`,

  // problem explanation--> 80
  "this-in-object-literal": `
### 💡 Problem Breakdown
This is a reinforcement of a core \`this\` binding rule. When a function is called as a method of an object, \`this\` refers to the object.

### ⚙️ Solution Walkthrough
A method accesses a property on its own object.
\`\`\`javascript
const obj = {
  name: 'Test',
  getName() {
    return this.name;
  }
};
obj.getName(); // 'Test'
\`\`\`

### 📚 Key Concepts
- **Method Call Binding**: One of the rules for determining the value of \`this\`
`,

  // problem explanation--> 81
  "function-as-property-value": `
### 💡 Problem Breakdown
This problem demonstrates the concept of functions as "first-class citizens" in JavaScript. A function can be assigned as the value for a property in an object literal, creating a "method".

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
- **First-Class Functions**: The ability to treat functions like any other data type
- **Method**: A function that is a property of an object
`,

  // problem explanation--> 82
  "call-stack-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the **Call Stack**, which is a fundamental part of how the JavaScript engine keeps track of function execution.

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
- **Call Stack**: A LIFO data structure that manages execution contexts
- **Stack Overflow**: Error that occurs when the call stack exceeds its maximum size
`,

  // problem explanation--> 83
  "function-binding-precedence": `
### 💡 Problem Breakdown
This is a conceptual problem that summarizes the rules of precedence for determining the value of \`this\` when multiple rules could apply.

### ⚙️ Solution Walkthrough
The order of precedence is as follows:
1. **\`new\` Binding**: If the function is called with \`new\`, \`this\` is the newly created object
2. **Explicit Binding**: If the function is called with \`call\`, \`apply\`, or \`bind\`, \`this\` is the explicitly provided object
3. **Method Call Binding**: If the function is called as a method of an object, \`this\` is the object
4. **Default Binding**: If none of the other rules apply, \`this\` is the global object or \`undefined\` in strict mode

### 📚 Key Concepts
- **\`this\` Binding Rules**: The hierarchy that determines the context of a function call
- **Arrow Functions**: Special case that don't have their own \`this\` and are not subject to these rules
`,

  // problem explanation--> 84
  "polyfill-bind-method": `
### 💡 Problem Breakdown
This is a conceptual problem about implementing a "polyfill" for \`Function.prototype.bind\`.

### ⚙️ Solution Walkthrough
A simple polyfill would use a closure and the \`apply\` method.
\`\`\`javascript
Function.prototype.myBind = function(ctx, ...boundArgs) {
  const fn = this;
  return function(...callArgs) {
    return fn.apply(ctx, [...boundArgs, ...callArgs]);
  };
};
\`\`\`
1. **Closure**: The outer function captures the original function, context, and pre-filled arguments
2. **Return New Function**: Returns a new function that can be called later
3. **\`apply\`**: When called, uses \`apply\` to invoke the original function with the saved context and combined arguments

### 📚 Key Concepts
- **Polyfill**: Code that provides modern functionality in older environments
- **Closures**: Used to "remember" the context and bound arguments
`,

  // problem explanation--> 85
  "default-params-and-scope": `
### 💡 Problem Breakdown
This is an advanced scope concept. The default values of function parameters are evaluated in an intermediate scope between the outer scope and the function's body scope.

### ⚙️ Solution Walkthrough
A default parameter captures the global \`x\`.
\`\`\`javascript
let x = 'global';
function test(a = x, b = () => x) { 
  let x = 'inner';
  return b(); // Returns 'global'
}
\`\`\`

### 📚 Key Concepts
- **Parameter Scope**: A special, intermediate scope for evaluating default parameter values
- **Closures**: Default parameter expressions create closures that capture values from their evaluation scope
`,

  // problem explanation--> 86
  "arrow-function-and-this-in-object": `
### 💡 Problem Breakdown
This highlights a common pitfall. When you use an arrow function as a method directly on an object literal, its \`this\` value is determined lexically from the scope where the object is defined.

### ⚙️ Solution Walkthrough
An arrow function is incorrectly used as a method.
\`\`\`javascript
const obj = {
  name: 'My Object',
  getName: () => this.name // 'this' is NOT 'obj'
};
// obj.getName(); // Returns undefined or throws error
\`\`\`
**Rule of Thumb**: For object methods that need to access the object via \`this\`, always use traditional functions or method shorthand syntax.

### 📚 Key Concepts
- **Lexical \`this\`**: A core feature of arrow functions that makes them unsuitable for object methods that rely on dynamic \`this\`
- **Method Shorthand**: ES6 syntax for defining methods: \`{ method() { ... } }\`
`,

  // problem explanation--> 87
  "function-purity-and-arrays": `
### 💡 Problem Breakdown
This problem demonstrates the concept of function purity when working with mutable data structures like arrays.

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
- **Purity**: A function is pure if it has no side effects and is deterministic
- **Immutability**: The practice of not changing data structures, but instead creating new ones
`,

  // problem explanation--> 88
  "iife-with-global-variable": `
### 💡 Problem Breakdown
This is a conceptual problem about a common pattern used in older JavaScript libraries. An IIFE can take the global object as a parameter.

### ⚙️ Solution Walkthrough
The global object is passed into an IIFE.
\`\`\`javascript
(function(global) {
  global.myLibrary = {}; 
})(this);
\`\`\`
This pattern made the code more portable and its dependencies clearer.

### 📚 Key Concepts
- **IIFE**: A pattern for creating a private scope
- **Dependency Injection**: A pattern where a component's dependencies are passed to it from the outside
`,

  // problem explanation--> 89
  "function-with-optional-params": `
### 💡 Problem Breakdown
This problem demonstrates the traditional way of handling optional parameters before ES6 default parameters were introduced.

### ⚙️ Solution Walkthrough
The logical OR (\`||\`) operator is often used as a shorthand for checking if a parameter is undefined.
\`\`\`javascript
function greet(name, greeting) {
  const finalGreeting = greeting || 'Hello';
  return \`\${finalGreeting}, \${name}!\`;
}
greet('Alice'); // "Hello, Alice!"
\`\`\`
In modern JavaScript, using ES6 default parameters is the preferred way.

### 📚 Key Concepts
- **Optional Parameters**: A common feature in function design
- **Default Parameters**: Modern ES6 syntax for handling optional parameters
`,

  // problem explanation--> 90
  "rest-params-vs-arguments": `
### 💡 Problem Breakdown
This is a conceptual summary comparing the modern rest parameters (\`...args\`) with the older \`arguments\` object.

### ⚙️ Solution Walkthrough
Rest parameters are almost always preferred in modern JavaScript.
\`\`\`javascript
const sum = (...args) => args.reduce((a, b) => a + b, 0);
\`\`\`
- **\`arguments\` object**: Available in all \`function\` functions, array-like but not a true array
- **Rest parameters**: Must be last parameter, gathers remaining arguments into a true array, works in arrow functions

### 📚 Key Concepts
- **Rest Parameters**: The modern, preferred way to handle an indefinite number of arguments
- **\`arguments\` object**: Legacy approach with limitations
`,

  // problem explanation--> 91
  "named-args-with-destructuring": `
### 💡 Problem Breakdown
This demonstrates a powerful pattern in modern JavaScript: using object destructuring in a function's parameter list to simulate "named arguments".

### ⚙️ Solution Walkthrough
A function accepts an object and destructures it.
\`\`\`javascript
function createUser({ name, age, role = 'guest' }) {
  return \`Created user \${name} (age \${age}) with role \${role}.\`;
}
createUser({ age: 99, name: 'Admin' });
\`\`\`
This makes function calls more readable and self-documenting.

### 📚 Key Concepts
- **Destructuring in Parameters**: A key feature for improving function ergonomics and readability
- **Named Arguments**: Simulating named parameters using object destructuring
`,

  // problem explanation--> 92
  "function-to-string": `
### 💡 Problem Breakdown
This problem demonstrates a built-in feature of functions in JavaScript. When you call \`.toString()\` on a function object, it returns a string containing the source code of that function.

### ⚙️ Solution Walkthrough
The \`.toString()\` method is called on a function.
\`\`\`javascript
function add(a, b) {
  return a + b;
}
add.toString(); // Returns string representation
\`\`\`
This is used by some developer tools and libraries for introspection.

### 📚 Key Concepts
- **Function Introspection**: The ability to inspect a function's properties and source code
`,

  // problem explanation--> 93
  "function-scope-vs-global-scope": `
### 💡 Problem Breakdown
This problem reinforces the fundamental concept of scope hierarchy. An inner scope can access variables from an outer scope, but the reverse is not true.

### ⚙️ Solution Walkthrough
A function accesses a global variable, and an attempt is made to access a function-scoped variable from the global scope.
\`\`\`javascript
let globalVar = 'global';
function testScope() {
  let funcVar = 'local';
  console.log(globalVar); // 'global'
}
testScope();
// console.log(funcVar); // ReferenceError
\`\`\`

### 📚 Key Concepts
- **Scope Chain**: The one-way lookup chain from inner to outer scopes
- **Encapsulation**: Scope rules provide encapsulation, preventing outer scopes from interfering with internal variables
`,

  // problem explanation--> 94
  "block-scope-with-const": `
### 💡 Problem Breakdown
This problem demonstrates that constants declared with \`const\` are block-scoped, just like variables declared with \`let\`.

### ⚙️ Solution Walkthrough
A constant is declared inside an \`if\` block and is not accessible outside.
\`\`\`javascript
if (true) {
  const BLOCK_CONST = "I'm in a block";
}
// console.log(BLOCK_CONST); // ReferenceError
\`\`\`

### 📚 Key Concepts
- **Block Scope**: A key feature of modern variable and constant declarations
`,

  // problem explanation--> 95
  "higher-order-function-foreach": `
### 💡 Problem Breakdown
This problem involves implementing a simple version of the \`Array.prototype.forEach\` method as a higher-order function.

### ⚙️ Solution Walkthrough
A \`myForEach\` function is created.
\`\`\`javascript
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

myForEach(['a', 'b', 'c'], (item) => {
  console.log(item.toUpperCase());
});
\`\`\`
This demonstrates the fundamental pattern of higher-order functions used for iteration.

### 📚 Key Concepts
- **Higher-Order Function**: \`myForEach\` is a higher-order function
- **Callback Function**: The function passed to \`myForEach\` to be executed on each item
`,

  // problem explanation--> 96
  "function-currying-practical": `
### 💡 Problem Breakdown
This shows a practical application of currying. By creating a curried function, we can create more specialized, reusable functions.

### ⚙️ Solution Walkthrough
A curried \`log\` function is defined.
\`\`\`javascript
const log = (level) => (message) => \`[\${level.toUpperCase()}] - \${message}\`;

const logError = log('error');
const logInfo = log('info');

logError('Request failed!'); // "[ERROR] - Request failed!"
logInfo('User logged in.');   // "[INFO] - User logged in."
\`\`\`

### 📚 Key Concepts
- **Currying**: Used to create specialized functions
- **Partial Application**: Calling the first function in the curried chain is an act of partial application
`,

  // problem explanation--> 97
  "this-in-event-listener-arrow": `
### 💡 Problem Breakdown
This is a conceptual problem that highlights a major benefit of arrow functions in the context of classes and event handling.

### ⚙️ Solution Walkthrough
A conceptual class with an event handler.
\`\`\`javascript
class MyComponent {
  constructor() {
    this.count = 0;
    const button = document.getElementById('my-button');
    button.addEventListener('click', () => this.increment());
  }
  increment() { this.count++; }
}
\`\`\`
Without the arrow function, you would have to use \`.bind(this)\` to manually fix the context.

### 📚 Key Concepts
- **Lexical \`this\`**: The defining feature of arrow functions regarding context
`,

  // problem explanation--> 98
  "function-hoisting-with-var": `
### 💡 Problem Breakdown
This problem revisits the hoisting of function expressions. When a function expression is assigned to a variable declared with \`var\`, the variable declaration is hoisted, but the function body is not.

### ⚙️ Solution Walkthrough
An attempt is made to call the function before assignment.
\`\`\`javascript
try {
  myFunc();
} catch(e) {
  // e.name will be 'TypeError'
}
var myFunc = () => {};
\`\`\`

### 📚 Key Concepts
- **Hoisting**: The rules for function expressions are different from function declarations
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
This makes for very clean and expressive code.

### 📚 Key Concepts
- **Function Composition**: Combining different language features to write elegant code
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
- **Function Composition**: A clean pattern for extracting data from function results
`,

  // problem explanation--> 101
  "redeclare-var": `
### 💡 Problem Breakdown
This problem highlights a peculiar feature of \`var\`. A variable declared with \`var\` can be declared again in the same scope without causing an error.

### ⚙️ Solution Walkthrough
A variable \`x\` is declared twice with \`var\` in the same scope.
\`\`\`javascript
var x = 1;
var x = 2; // This is allowed and reassigns x
console.log(x); // 2
\`\`\`
This behavior can lead to bugs where a variable is accidentally redeclared.

### 📚 Key Concepts
- **Variable Redeclaration**: A behavior allowed by \`var\` but prohibited by \`let\` and \`const\`
`,

  // problem explanation--> 102
  "redeclare-let-error": `
### 💡 Problem Breakdown
In contrast to \`var\`, \`let\` and \`const\` do not allow a variable to be redeclared in the same scope.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing invalid syntax.
\`\`\`javascript
let x = 1;
// let x = 2; // This line will throw a SyntaxError
\`\`\`
The solver demonstrates this by returning a string explaining the error.

### 📚 Key Concepts
- **\`SyntaxError\`**: Error that occurs when code violates language syntax rules
- **Safer Scoping Rules**: Key improvement of \`let\` and \`const\` over \`var\`
`,

  // problem explanation--> 103
  "var-no-block-scope": `
### 💡 Problem Breakdown
Variables declared with \`var\` are not block-scoped; they are function-scoped. This means a \`var\` declared inside a block "leaks" out.

### ⚙️ Solution Walkthrough
A variable is declared with \`var\` inside an \`if\` block and is successfully accessed outside.
\`\`\`javascript
function testScope() {
  if (true) {
    var noBlock = "Visible outside";
  }
  return noBlock; // This works
}
\`\`\`
This behavior can lead to bugs and is a reason to prefer \`let\` and \`const\`.

### 📚 Key Concepts
- **Function Scope vs. Block Scope**: Critical distinction between \`var\` and newer declarations
`,

  // problem explanation--> 104
  "const-array-reassignment-error": `
### 💡 Problem Breakdown
\`const\` prevents the variable from being reassigned to a new reference, but it does not make the array itself immutable.

### ⚙️ Solution Walkthrough
An attempt is made to assign a new array to a variable declared with \`const\`.
\`\`\`javascript
const arr = [1, 2];
arr.push(3); // This is allowed
// arr = [3, 4]; // This would throw a TypeError
\`\`\`
You can modify the contents of the array, but not the reference.

### 📚 Key Concepts
- **Binding vs. Value**: \`const\` makes the binding immutable, not the value
`,

  // problem explanation--> 105
  "destructure-skip-array-items": `
### 💡 Problem Breakdown
Array destructuring provides a syntax to skip elements you are not interested in.

### ⚙️ Solution Walkthrough
The second element of an array is skipped during destructuring.
\`\`\`javascript
const numbers = [1, 2, 3];
const [a, , c] = numbers;
// a is 1, c is 3
\`\`\`

### 📚 Key Concepts
- **Array Destructuring**: Flexible syntax for extracting values from arrays
`,

  // problem explanation--> 106
  "let-in-for-loop": `
### 💡 Problem Breakdown
When you use \`let\` to declare the loop counter, JavaScript creates a new binding for that variable for each iteration.

### ⚙️ Solution Walkthrough
A loop creates asynchronous callbacks. Because \`let\` is used, each callback captures the value of \`i\` from its specific iteration.
\`\`\`javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Each timeout has its own 'i'
  }, 10);
}
// Output: 0, 1, 2
\`\`\`

### 📚 Key Concepts
- **Block Scope**: \`let\` is block-scoped
- **Loop Variable Binding**: New binding per iteration solves common problems
`,

  // problem explanation--> 107
  "var-in-for-loop-pitfall": `
### 💡 Problem Breakdown
This shows the classic problem with using \`var\` in loops with closures.

### ⚙️ Solution Walkthrough
The callbacks all reference the same shared \`i\` variable.
\`\`\`javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // All callbacks see the final value
  }, 10);
}
// Output: 3, 3, 3
\`\`\`
This was a common source of bugs before \`let\` was introduced.

### 📚 Key Concepts
- **Function Scope**: \`var\` creates a single variable for the entire function
`,

  // problem explanation--> 108
  "window-object-global-var": `
### 💡 Problem Breakdown
In a browser environment, the global scope is represented by the \`window\` object.

### ⚙️ Solution Walkthrough
This is a conceptual problem for a browser context.
\`\`\`javascript
var myGlobal = 'hello';
console.log(window.myGlobal === myGlobal); // true
\`\`\`
This can lead to accidentally overwriting built-in properties.

### 📚 Key Concepts
- **Global Object**: The \`window\` object in browsers
`,

  // problem explanation--> 109
  "window-object-global-let": `
### 💡 Problem Breakdown
ES6 changed the behavior for global variables declared with \`let\` and \`const\`.

### ⚙️ Solution Walkthrough
This is a conceptual problem for a browser context.
\`\`\`javascript
let myGlobal = 'hello';
console.log(window.myGlobal); // undefined
\`\`\`
This change helps keep the global namespace cleaner.

### 📚 Key Concepts
- **Global Lexical Environment**: \`let\` and \`const\` at the global level live in a separate space
`,

  // problem explanation--> 110
  "undeclared-variable-global": `
### 💡 Problem Breakdown
This demonstrates a behavior of non-strict mode that can cause serious bugs.

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
- **Global Leak**: Unintended creation of a global variable
`,

  // problem explanation--> 111
  "strict-mode-undeclared": `
### 💡 Problem Breakdown
"Strict mode" is a feature that enables a more restrictive set of rules for JavaScript.

### ⚙️ Solution Walkthrough
Assigning to an undeclared variable in strict mode throws a \`ReferenceError\`.
\`\`\`javascript
'use strict';
function noLeak() {
  // myLeakedVar = "oops"; // This would throw a ReferenceError
}
\`\`\`
It is a best practice to always write JavaScript in strict mode.

### 📚 Key Concepts
- **Strict Mode**: Way to opt into a more secure variant of JavaScript
`,

  // problem explanation--> 112
  "scope-of-catch-block": `
### 💡 Problem Breakdown
The error variable declared in a \`catch\` block has its own special scope.

### ⚙️ Solution Walkthrough
The \`err\` variable only exists inside the \`catch\` block.
\`\`\`javascript
try {
  throw new Error('test error');
} catch (err) {
  console.log(err.message); // 'test error'
}
// console.log(err); // ReferenceError
\`\`\`

### 📚 Key Concepts
- **Block Scope**: The \`catch\` block creates its own scope
`,

  // problem explanation--> 113
  "const-mutate-object": `
### 💡 Problem Breakdown
When you declare an object with \`const\`, it means the variable's reference to the object is constant.

### ⚙️ Solution Walkthrough
A property of a \`const\` object is changed.
\`\`\`javascript
const person = { name: 'John' };
person.name = 'Jane'; // This is valid
// person = {}; // This would be a TypeError
\`\`\`
The reference hasn't changed; it still points to the same object.

### 📚 Key Concepts
- **Reference vs. Value**: \`const\` protects the reference, not the underlying value
`,

  // problem explanation--> 114
  "const-mutate-array": `
### 💡 Problem Breakdown
Similar to objects, when an array is declared with \`const\`, the variable holds a constant reference to the array.

### ⚙️ Solution Walkthrough
Elements are added and modified in a \`const\` array.
\`\`\`javascript
const arr = [1, 2];
arr.push(3);    // OK
arr[0] = 0;     // OK
// arr = [4, 5]; // TypeError
\`\`\`

### 📚 Key Concepts
- **Mutability**: Arrays are mutable objects
- **\`const\` with Reference Types**: Key behavior for modern JavaScript development
`,

  // problem explanation--> 115
  "object-freeze": `
### 💡 Problem Breakdown
If you need an object to be truly immutable, you can use \`Object.freeze()\`.

### ⚙️ Solution Walkthrough
An object is frozen, and an attempt to mutate it fails.
\`\`\`javascript
'use strict';
const frozenObj = { a: 1 };
Object.freeze(frozenObj);
// frozenObj.a = 2; // Throws a TypeError
\`\`\`
In non-strict mode, the mutation fails silently.

### 📚 Key Concepts
- **\`Object.freeze()\`**: Method for making an object immutable
- **Immutability**: Programming paradigm that helps prevent bugs
`,

  // problem explanation--> 116
  "const-in-for-of-loop": `
### 💡 Problem Breakdown
You can safely use \`const\` to declare the loop variable in a \`for...of\` loop.

### ⚙️ Solution Walkthrough
A \`for...of\` loop uses \`const\` for its loop variable.
\`\`\`javascript
const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item);
}
\`\`\`
This works because a new binding is created for each iteration.

### 📚 Key Concepts
- **Loop Variable Binding**: The \`for...of\` loop has special semantics for variable binding
`,

  // problem explanation--> 117
  "const-in-for-loop-error": `
### 💡 Problem Breakdown
A classic \`for\` loop cannot use \`const\` for its counter because the final expression attempts to reassign the counter variable.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing invalid syntax.
\`\`\`javascript
// This will throw a TypeError
// for (const i = 0; i < 3; i++) { }
\`\`\`

### 📚 Key Concepts
- **Reassignment**: The core reason this fails is the reassignment in the loop's final expression
`,

  // problem explanation--> 118
  "destructure-array-rest": `
### 💡 Problem Breakdown
The rest pattern (\`...\`) can be used in array destructuring to collect all remaining elements into a new array.

### ⚙️ Solution Walkthrough
The first element is extracted, and the rest are collected.
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const [first, ...rest] = numbers;
// first is 1, rest is [2, 3, 4]
\`\`\`

### 📚 Key Concepts
- **Rest Pattern**: Powerful ES6 feature for working with variable number of elements
`,

  // problem explanation--> 119
  "destructure-object-rest": `
### 💡 Problem Breakdown
The rest pattern can also be used in object destructuring to collect the remaining properties of an object into a new object.

### ⚙️ Solution Walkthrough
The \`id\` property is extracted, and the remaining properties are collected.
\`\`\`javascript
const product = { id: 1, name: 'Product', price: 99 };
const { id, ...rest } = product;
// id is 1, rest is { name: 'Product', price: 99 }
\`\`\`

### 📚 Key Concepts
- **Rest Properties**: The object version of the rest pattern
`,

  // problem explanation--> 120
  "destructure-object-alias": `
### 💡 Problem Breakdown
When destructuring an object, you can assign a property to a variable with a different name.

### ⚙️ Solution Walkthrough
The \`name\` property is extracted into a new variable called \`userName\`.
\`\`\`javascript
const user = { name: 'Charlie' };
const { name: userName } = user;
// userName is 'Charlie'
\`\`\`
The syntax is \`{ propertyKey: newVariableName }\`.

### 📚 Key Concepts
- **Aliasing**: Renaming variables during destructuring
`,

  // problem explanation--> 121
  "destructure-array-defaults": `
### 💡 Problem Breakdown
You can provide a default value for a variable in an array destructuring assignment. The default value is used if the element at that position is \`undefined\` or if the position does not exist.

### ⚙️ Solution Walkthrough
A default value is provided for \`b\`.
\`\`\`javascript
const numbers = [10];
const [a = 1, b = 2] = numbers;
// a gets 10 (from array), b gets 2 (default)
\`\`\`

### 📚 Key Concepts
- **Default Values**: Making destructuring more robust by handling missing data
`,

  // problem explanation--> 122
  "destructure-object-defaults": `
### 💡 Problem Breakdown
Similarly to arrays, you can provide default values for variables in object destructuring. The default is used if the property does not exist on the object, or if its value is \`undefined\`.

### ⚙️ Solution Walkthrough
A default value is provided for the \`b\` property.
\`\`\`javascript
const settings = { a: 10 };
const { a = 1, b = 2 } = settings;
// a gets 10 (from object), b gets 2 (default)
\`\`\`

### 📚 Key Concepts
- **Default Values**: A key feature for safely destructuring objects with optional properties
`,

  // problem explanation--> 123
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

### 📚 Key Concepts
- **Nested Destructuring**: A powerful syntax for extracting data from complex structures
`,

  // problem explanation--> 124
  "destructure-function-params-object": `
### 💡 Problem Breakdown
A very common and powerful pattern is to use object destructuring directly in a function's parameter list.

### ⚙️ Solution Walkthrough
The function signature destructures the incoming object.
\`\`\`javascript
function greet({ name, greeting = 'Hello' }) {
  return \`\${greeting}, \${name}!\`;
}
greet({ name: 'Eve' }); // "Hello, Eve!"
\`\`\`
This makes the function call more readable and flexible.

### 📚 Key Concepts
- **Named Parameters**: Destructuring provides a way to simulate named parameters in JavaScript
`,

  // problem explanation--> 125
  "destructure-function-params-array": `
### 💡 Problem Breakdown
While less common than with objects, array destructuring can also be used in a function's parameter list.

### ⚙️ Solution Walkthrough
A function that processes coordinates destructures its array parameter.
\`\`\`javascript
function processCoords([x, y]) {
  return \`x=\${x}, y=\${y}\`;
}
processCoords([10, 20]); // "x=10, y=20"
\`\`\`

### 📚 Key Concepts
- **Destructuring in Parameters**: A feature that improves function signature readability
`,

  // problem explanation--> 126
  "destructure-for-of-loop": `
### 💡 Problem Breakdown
Destructuring is especially useful inside loops, particularly \`for...of\`, when iterating over an array of arrays or an array of objects.

### ⚙️ Solution Walkthrough
Destructuring is used to unpack each inner array into named variables within the loop.
\`\`\`javascript
const pairs = [[1, 'a'], [2, 'b']];
for (const [num, char] of pairs) {
  console.log(\`Number: \${num}, Char: \${char}\`);
}
\`\`\`
This is much cleaner than accessing elements by index.

### 📚 Key Concepts
- **Ergonomics**: Destructuring makes iterating over complex data structures more convenient
`,

  // problem explanation--> 127
  "destructure-string": `
### 💡 Problem Breakdown
Since strings are iterable, they can be treated like an array of characters for the purpose of destructuring.

### ⚙️ Solution Walkthrough
Array destructuring is applied to a string literal.
\`\`\`javascript
const [a, b] = "Hello";
// a becomes "H", b becomes "e"
\`\`\`
This can be a convenient way to get the first few characters of a string.

### 📚 Key Concepts
- **Iterables**: Destructuring works on any iterable object, not just arrays
`,

  // problem explanation--> 128
  "destructure-with-defaults-and-alias": `
### 💡 Problem Breakdown
You can combine aliasing and default values in a single object destructuring statement.

### ⚙️ Solution Walkthrough
The \`name\` property is sought. If it doesn't exist, a default value of "Guest" is used.
\`\`\`javascript
const user = {};
const { name: userName = 'Guest' } = user;
// userName is 'Guest'
\`\`\`
The syntax is \`{ propertyKey: newVariableName = defaultValue }\`.

### 📚 Key Concepts
- **Combining Features**: Destructuring syntax is composable, allowing for powerful data extraction
`,

  // problem explanation--> 129
  "destructure-null-error": `
### 💡 Problem Breakdown
This demonstrates a common error. Destructuring works by trying to access properties on a source value.

### ⚙️ Solution Walkthrough
The code attempts to destructure a \`null\` value.
\`\`\`javascript
const source = null;
// const { a } = source; // Throws TypeError
\`\`\`
To prevent this, you can provide a default value: \`const { a } = source || {};\`.

### 📚 Key Concepts
- **Error Handling**: Anticipating that a value might be \`null\` or \`undefined\` before destructuring
`,

  // problem explanation--> 130
  "destructure-return-with-defaults": `
### 💡 Problem Breakdown
This combines two common patterns: destructuring a function's return value and providing a default value.

### ⚙️ Solution Walkthrough
A function returns an object with a missing property. The destructuring assignment provides a default for it.
\`\`\`javascript
const getPartialData = () => ({ a: 1 });
const { a, b = 'default' } = getPartialData();
// a is 1, b is 'default'
\`\`\`
This is very useful for working with APIs that may have optional fields.

### 📚 Key Concepts
- **Defensive Programming**: Using default values to make code more robust
`,

  // problem explanation--> 131
  "let-block-scope-in-standalone-block": `
### 💡 Problem Breakdown
A block doesn't need to be part of an \`if\`, \`for\`, or \`while\` statement to create a scope.

### ⚙️ Solution Walkthrough
A standalone block is used to create a temporary, private scope.
\`\`\`javascript
let x = 'outer';
{
  let x = 'inner';
}
console.log(x); // 'outer'
\`\`\`
This can be used to encapsulate helper variables without creating a full function.

### 📚 Key Concepts
- **Block Scope**: A fundamental scoping rule for \`let\` and \`const\`
`,

  // problem explanation--> 132
  "dynamic-property-creation": `
### 💡 Problem Breakdown
ES6 introduced "computed property names," a syntax that allows you to use an expression as a property name.

### ⚙️ Solution Walkthrough
A variable is used inside square brackets \`[]\` to define a property key.
\`\`\`javascript
const propName = 'dynamicKey';
const obj = {
  [propName]: 'Hello World'
};
// obj is { dynamicKey: 'Hello World' }
\`\`\`
This is a powerful feature for creating objects with keys determined at runtime.

### 📚 Key Concepts
- **Computed Property Names**: The \`[expression]\` syntax for object keys
`,

  // problem explanation--> 133
  "primitive-wrapper-objects": `
### 💡 Problem Breakdown
This is a conceptual problem about a behind-the-scenes mechanism in JavaScript.

### ⚙️ Solution Walkthrough
When you try to access a property or method on a primitive, JavaScript temporarily creates a "wrapper object".
\`\`\`javascript
"hello".toUpperCase(); // JavaScript creates: new String("hello")
\`\`\`
This process is called "autoboxing".

### 📚 Key Concepts
- **Autoboxing**: The automatic wrapping of primitives in objects to allow property access
`,

  // problem explanation--> 134
  "symbol-primitive-type": `
### 💡 Problem Breakdown
\`Symbol\` is a primitive data type introduced in ES6. Its main purpose is to create unique identifiers.

### ⚙️ Solution Walkthrough
Two symbols are created and compared.
\`\`\`javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false
\`\`\`
Symbols are often used as keys for object properties that you want to be "hidden".

### 📚 Key Concepts
- **\`Symbol\`**: A primitive type for creating unique, non-string property keys
`,

  // problem explanation--> 135
  "bigint-primitive-type": `
### 💡 Problem Breakdown
The standard \`number\` type cannot safely represent integers larger than \`Number.MAX_SAFE_INTEGER\`.

### ⚙️ Solution Walkthrough
A \`BigInt\` is created by appending \`n\` to an integer literal.
\`\`\`javascript
const veryLargeNumber = 9007199254740991n;
const result = veryLargeNumber + 2n;
console.log(result.toString()); // '9007199254740993'
\`\`\`
You cannot mix \`BigInt\` and regular \`number\` types in arithmetic operations.

### 📚 Key Concepts
- **\`BigInt\`**: A primitive type for representing integers of arbitrary precision
`,

  // problem explanation--> 136
  "hoisting-order-var-and-function": `
### 💡 Problem Breakdown
When the JavaScript engine hoists declarations, function declarations are hoisted before variable declarations.

### ⚙️ Solution Walkthrough
A function and a variable with the same name are declared.
\`\`\`javascript
console.log(typeof myThing); // 'function'
var myThing = 'variable';
console.log(typeof myThing); // 'string'
\`\`\`
The function declaration "wins" the hoisting race.

### 📚 Key Concepts
- **Hoisting Precedence**: Functions > Variables
`,

  // problem explanation--> 137
  "hoisting-class-declaration": `
### 💡 Problem Breakdown
ES6 \`class\` declarations have a similar hoisting behavior to \`let\`. They are hoisted but remain in the Temporal Dead Zone (TDZ).

### ⚙️ Solution Walkthrough
An attempt is made to instantiate a class before its declaration.
\`\`\`javascript
// new MyClass(); // Throws a ReferenceError
class MyClass {}
\`\`\`
This behavior prevents certain types of errors.

### 📚 Key Concepts
- **Class Declarations**: Behave like \`let\` with respect to hoisting and the TDZ
`,

  // problem explanation--> 138
  "object-freeze-nested": `
### 💡 Problem Breakdown
This problem demonstrates an important limitation of \`Object.freeze()\`: it is a shallow operation.

### ⚙️ Solution Walkthrough
A nested object is modified after the parent object has been frozen.
\`\`\`javascript
const user = {
  name: 'Alice',
  details: { age: 30 }
};
Object.freeze(user);
user.details.age = 31; // This succeeds!
\`\`\`
To make an object deeply immutable, you would need to write a recursive function.

### 📚 Key Concepts
- **Shallow vs. Deep Operations**: Shallow operations affect only the top level
`,

  // problem explanation--> 139
  "object-seal": `
### 💡 Problem Breakdown
\`Object.seal()\` is another method for controlling object mutability.

### ⚙️ Solution Walkthrough
An object is sealed, and its existing property is modified.
\`\`\`javascript
const sealedObj = { a: 1 };
Object.seal(sealedObj);
sealedObj.a = 2; // Allowed
// delete sealedObj.a; // Not allowed
// sealedObj.b = 3; // Not allowed
\`\`\`

### 📚 Key Concepts
- **\`Object.seal()\`**: A method for making an object's structure fixed, but its values mutable
`,

  // problem explanation--> 140
  "object-preventextensions": `
### 💡 Problem Breakdown
\`Object.preventExtensions()\` is the least restrictive of the object immutability methods.

### ⚙️ Solution Walkthrough
An object's extensions are prevented, but an existing property is deleted.
\`\`\`javascript
const obj = { a: 1 };
Object.preventExtensions(obj);
// obj.b = 2; // Not allowed
delete obj.a; // Allowed
\`\`\`

### 📚 Key Concepts
- **\`Object.preventExtensions()\`**: A method to lock down the addition of new properties
`,

  // problem explanation--> 141
  "destructure-assignment-without-declaration": `
### 💡 Problem Breakdown
You can use destructuring to assign values to variables that have already been declared.

### ⚙️ Solution Walkthrough
Variables \`a\` and \`b\` are assigned values from an object.
\`\`\`javascript
let a, b;
({ a, b } = { a: 1, b: 2 });
\`\`\`
The parentheses are required to disambiguate the code.

### 📚 Key Concepts
- **Syntactic Ambiguity**: A situation where code can be interpreted in more than one way
`,

  // problem explanation--> 142
  "destructure-dynamic-property-name": `
### 💡 Problem Breakdown
This problem explores a limitation of destructuring. You cannot use a variable to specify which property to extract directly within the destructuring pattern.

### ⚙️ Solution Walkthrough
The conceptual code shows that this is not possible and provides the correct alternative.
\`\`\`javascript
const obj = { name: 'Ivy', role: 'admin' };
const propToGet = 'role';
const value = obj[propToGet]; // 'admin'
\`\`\`

### 📚 Key Concepts
- **Destructuring Limitations**: Understanding what the syntax can and cannot do
- **Bracket Notation**: The standard way to access object properties using a dynamic key
`,

  // problem explanation--> 143
  "destructure-mixed-array-object": `
### 💡 Problem Breakdown
Destructuring patterns can be nested to any depth, and can mix and match array and object patterns.

### ⚙️ Solution Walkthrough
A complex object containing an array is destructured.
\`\`\`javascript
const data = {
  id: 1,
  items: ['apple', { type: 'banana' }]
};
const { id, items: [, { type }] } = data;
\`\`\`

### 📚 Key Concepts
- **Nested Destructuring**: Combining patterns to precisely target and extract deeply nested data
`,

  // problem explanation--> 144
  "shadowing-in-catch-block": `
### 💡 Problem Breakdown
This explores the scope of the error parameter in a \`catch\` block.

### ⚙️ Solution Walkthrough
The \`e\` in the \`catch\` block is a completely separate variable from the outer \`e\`.
\`\`\`javascript
let e = 'outer';
try {
  throw 'inner';
} catch (e) {
  console.log(e); // 'inner'
}
console.log(e); // 'outer'
\`\`\`

### 📚 Key Concepts
- **Block Scope**: The \`catch\` clause creates its own lexical scope
`,

  // problem explanation--> 145
  "tdz-and-closures": `
### 💡 Problem Breakdown
This problem demonstrates the interaction between the Temporal Dead Zone (TDZ) and closures.

### ⚙️ Solution Walkthrough
A function \`fn\` is created that forms a closure over \`myLet\`. It is then called before \`myLet\` is declared.
\`\`\`javascript
function test() {
  const fn = () => myLet;
  let myLet = 5;
  return fn();
}
\`\`\`
The TDZ check happens when the variable is accessed, not when the closure is created.

### 📚 Key Concepts
- **Closures**: An inner function's reference to its outer scope
- **Temporal Dead Zone (TDZ)**: The check is performed at access-time
`,

  // problem explanation--> 146
  "tdz-with-default-params": `
### 💡 Problem Breakdown
Function parameters are evaluated from left to right. A parameter cannot reference a parameter that comes after it.

### ⚙️ Solution Walkthrough
The default value for parameter \`a\` tries to access \`b\` before \`b\` has been initialized.
\`\`\`javascript
function test(a = b, b = 5) {
  // ...
}
// test(); // ReferenceError: Cannot access 'b' before initialization
\`\`\`

### 📚 Key Concepts
- **Parameter Scope**: Function parameters have their own intermediate scope
- **Left-to-Right Evaluation**: Parameters are initialized in the order they are written
`,

  // problem explanation--> 147
  "garbage-collection-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about how JavaScript manages memory.

### ⚙️ Solution Walkthrough
The three steps of the memory lifecycle:
1. **Allocation**: Memory is allocated when variables or objects are created
2. **Use**: The memory is read from or written to during program execution
3. **Release**: When memory is no longer reachable, the garbage collector frees it

### 📚 Key Concepts
- **Garbage Collection**: The process of automatic memory reclamation
- **Reachability**: The core concept the GC uses to determine if memory is still in use
`,

  // problem explanation--> 148
  "memory-leak-with-closures": `
### 💡 Problem Breakdown
A memory leak occurs when a piece of memory is no longer needed but is not released by the garbage collector.

### ⚙️ Solution Walkthrough
A conceptual example:
\`\`\`javascript
function createLeakyListener() {
  const largeData = new Array(1000000).fill('*');
  const listener = () => {
    console.log(largeData[0]);
  };
  document.body.addEventListener('click', listener);
}
\`\`\`
Even after \`createLeakyListener\` finishes, the \`listener\` function is still alive and keeps \`largeData\` in memory.

### 📚 Key Concepts
- **Memory Leak**: Unwanted memory retention
- **Closures**: Can cause leaks by unintentionally keeping references to large objects
`,

  // problem explanation--> 149
  "let-in-switch-case": `
### 💡 Problem Breakdown
This problem highlights a subtle aspect of scope. The entire \`switch\` statement is considered a single block.

### ⚙️ Solution Walkthrough
An attempt to declare \`x\` in two different cases.
\`\`\`javascript
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
- **Block Scope**: Understanding that the entire \`switch\` statement is one block
`,

  // problem explanation--> 150
  "tdz-and-function-parameters": `
### 💡 Problem Breakdown
This is similar to the default parameters problem but applies to all parameter initializations.

### ⚙️ Solution Walkthrough
A function is defined where one parameter references another that appears later in the list.
\`\`\`javascript
function test(a = b, b) {
  // ...
}
// test(undefined, 5); // This would throw a ReferenceError
\`\`\`

### 📚 Key Concepts
- **Parameter Scope**: Parameters live in a special scope that is created before the function body
`,

  // problem explanation--> 151
  "deep-freeze-utility-conceptual": `
### 💡 Problem Breakdown
\`Object.freeze()\` is shallow. A "deep freeze" utility would need to recursively traverse an object and apply \`Object.freeze()\` to every nested object and array.

### ⚙️ Solution Walkthrough
A conceptual recursive function.
\`\`\`javascript
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach(key => {
    const prop = obj[key];
    if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });
  return obj;
}
\`\`\`
1. **Freeze Parent**: The function first freezes the object passed to it
2. **Recurse on Children**: It then iterates over the object's properties and recursively freezes any object properties

### 📚 Key Concepts
- **Recursion**: A natural fit for processing nested data structures
- **Immutability**: A pattern for creating truly immutable data structures
`,

  // problem explanation--> 152
  "hoisting-across-scripts-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the boundaries of hoisting. Hoisting is limited to the scope of the current script or module file.

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
The variable \`x\` is not hoisted across the script boundaries.

### 📚 Key Concepts
- **Hoisting Boundaries**: Hoisting is file-scoped or module-scoped
`,

  // problem explanation--> 153
  "memory-lifecycle-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the lifecycle of memory in JavaScript.

### ⚙️ Solution Walkthrough
The three steps of the memory lifecycle:
1. **Allocation**: Memory is allocated when variables or objects are created
2. **Use**: The memory is read from or written to during program execution
3. **Release**: When memory is no longer reachable, the garbage collector frees it

### 📚 Key Concepts
- **Memory Lifecycle**: Allocation, Use, Release
- **Garbage Collection**: Automatic release of unused memory
`,

  // problem explanation--> 154
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

### 📚 Key Concepts
- **Iterables**: \`Map\` is iterable, allowing destructuring in loops
`,

  // problem explanation--> 155
  "immutable-update-const": `
### 💡 Problem Breakdown
This demonstrates an immutable update pattern using spread syntax to create a new object while updating a property.

### ⚙️ Solution Walkthrough
Using spread to create a new object.
\`\`\`javascript
const user = { name: "Alex", role: "user" };
const adminUser = { ...user, role: "admin" };
// user remains unchanged
\`\`\`
This is common in functional programming and state management.

### 📚 Key Concepts
- **Immutable Update**: Creating new data instead of mutating existing
- **Spread Syntax**: \`...\` for copying properties
`,

  // problem explanation--> 156
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
- **Hoisting**: Declarations are moved to the top, regardless of conditionals
`,

  // problem explanation--> 157
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
- **Capture Groups**: Using destructuring to extract regex matches
`,

  // problem explanation--> 158
  "uninitialized-const-in-loop": `
### 💡 Problem Breakdown
This is conceptual: \`for (const x of [])\` is valid because the loop may not run, but \`for (const x; ; )\` is a syntax error.

### ⚙️ Solution Walkthrough
The syntax is checked at parse time for classic \`for\`, but \`for...of\` is more flexible.
\`\`\`javascript
// Valid
for (const item of [1, 2, 3]) {
  console.log(item);
}

// Invalid syntax
// for (const i = 0; i < 3; i++) { }
\`\`\`

### 📚 Key Concepts
- **Loop Semantics**: Different loops have different initialization rules
`,

  // problem explanation--> 159
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
- **Parameter Scope**: An intermediate scope between outer and body
`,

  // problem explanation--> 160
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
- **Sparse Arrays**: Arrays with holes, treated as \`undefined\` in destructuring
`,

  // problem explanation--> 161
  "block-scope-for-let-in-loop": `
### 💡 Problem Breakdown
In \`for\` loops, \`let\` is re-bound for each iteration, which is different from simple block scope.

### ⚙️ Solution Walkthrough
The spec treats each iteration as a new scope for \`let\`.
\`\`\`javascript
for (let i = 0; i < 3; i++) {
  // Each iteration has its own 'i'
  setTimeout(() => console.log(i), 10);
}
// Output: 0, 1, 2
\`\`\`

### 📚 Key Concepts
- **Re-binding**: A special loop behavior for \`let\`
`,

  // problem explanation--> 162
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
- **Implicit Global**: \`this\` falls back to global in non-strict mode
`,

  // problem explanation--> 163
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
- **Event State**: \`let\` for mutable state in callbacks
`,

  // problem explanation--> 164
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
- **Function Expressions**: Use \`const\` for safety
`,

  // problem explanation--> 165
  "practical-destructuring-api-response": `
### 💡 Problem Breakdown
Destructure nested API responses to extract needed data.

### ⚙️ Solution Walkthrough
Nested destructuring from a JSON-like object.
\`\`\`javascript
const apiResponse = { data: { user: { id: 1, name: "Grace" } } };
const { data: { user: { name } } } = apiResponse;
// name is "Grace"
\`\`\`

### 📚 Key Concepts
- **API Data Extraction**: Destructuring for clean access
`,

  // problem explanation--> 166
  "object-is-vs-triple-equals": `
### 💡 Problem Breakdown
\`Object.is()\` behaves like the strict equality operator (\`===\`) but with two key differences.

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
- **\`Object.is()\`**: A method for determining if two values are the same value
`,

  // problem explanation--> 167
  "primitive-vs-reference-assignment": `
### 💡 Problem Breakdown
This illustrates a fundamental concept in JavaScript: how values are assigned.

### ⚙️ Solution Walkthrough
The code compares the two behaviors.
\`\`\`javascript
// Pass by value
let a = 10;
let b = a; // 'b' gets a copy of the value 10
b = 20;    // 'a' is unaffected

// Pass by reference
let obj1 = { val: 10 };
let obj2 = obj1; // 'obj2' gets a copy of the reference
obj2.val = 20;   // 'obj1' is affected
\`\`\`

### 📚 Key Concepts
- **Pass by Value vs. Pass by Reference**: A critical distinction for understanding data manipulation
`,

  // problem explanation--> 168
  "hoisting-pitfall-with-blocks": `
### 💡 Problem Breakdown
This is a conceptual problem about a strange behavior in non-strict mode.

### ⚙️ Solution Walkthrough
In non-strict mode, the behavior can be unpredictable.
\`\`\`javascript
// non-strict mode
if (true) {
  function sayHi() { console.log('Hi'); }
}
// sayHi(); // This might work in some browsers but not others
\`\`\`
**Best Practice**: Never use function declarations inside blocks.

### 📚 Key Concepts
- **Legacy Behavior**: An example of inconsistent behavior from older versions
`,

  // problem explanation--> 169
  "destructuring-iterable": `
### 💡 Problem Breakdown
Array destructuring is not limited to arrays. It can be used on any object that implements the iterable protocol.

### ⚙️ Solution Walkthrough
Array destructuring is used on a \`Set\`.
\`\`\`javascript
const mySet = new Set(['a', 'b', 'c']);
const [first, second] = mySet;
// first is 'a', second is 'b'
\`\`\`

### 📚 Key Concepts
- **Iterable Protocol**: A set of rules that objects can implement to define their iteration behavior
`,

  // problem explanation--> 170
  "const-and-garbage-collection": `
### 💡 Problem Breakdown
This is a conceptual problem. The choice of \`let\` vs \`const\` has no direct impact on garbage collection.

### ⚙️ Solution Walkthrough
Whether a variable is declared with \`let\` or \`const\`, once it goes out of scope and no other references exist, the object becomes eligible for garbage collection.
\`\`\`javascript
function test() {
  const largeObject = { /* ... */ };
  // ...
}
// After test() runs, 'largeObject' goes out of scope
\`\`\`

### 📚 Key Concepts
- **Garbage Collection**: Based on reachability, not variable type
`,

  // problem explanation--> 171
  "var-in-eval-scope": `
### 💡 Problem Breakdown
The \`eval()\` function executes a string of JavaScript code. When \`var\` is used inside \`eval()\`, it declares the variable in the scope where \`eval()\` was called.

### ⚙️ Solution Walkthrough
A variable declared in \`eval\` becomes available in the containing function.
\`\`\`javascript
function demo() {
  eval("var hidden = 'I escaped!';");
  return hidden; // "I escaped!"
}
\`\`\`

### 📚 Key Concepts
- **\`eval()\`**: A powerful but dangerous function that should be avoided
`,

  // problem explanation--> 172
  "let-in-eval-scope": `
### 💡 Problem Breakdown
In contrast to \`var\`, when you use \`let\` or \`const\` inside an \`eval()\` call, the variable is scoped only to the block created by the \`eval\` execution.

### ⚙️ Solution Walkthrough
A \`let\` variable declared in \`eval\` is not accessible outside.
\`\`\`javascript
function demo() {
  eval("let secret = 'I am contained.';");
  // console.log(secret); // ReferenceError
}
\`\`\`

### 📚 Key Concepts
- **Block Scope**: The rules of block scope for \`let\` and \`const\` are maintained even within \`eval\`
`,

  // problem explanation--> 173
  "var-without-window": `
### 💡 Problem Breakdown
This is a conceptual problem about different JavaScript environments.

### ⚙️ Solution Walkthrough
- **Node.js Module**:
  \`\`\`javascript
  // in my-module.js
  var moduleVar = 5;
  // console.log(global.moduleVar); // undefined
  \`\`\`
- **Node.js REPL**:
  \`\`\`javascript
  > var replVar = 10;
  > global.replVar // 10
  \`\`\`
The behavior depends on the execution context.

### 📚 Key Concepts
- **Module Scope**: ES Modules and CommonJS modules have their own scope
`,

  // problem explanation--> 174
  "destructuring-and-prototypes": `
### 💡 Problem Breakdown
When you destructure an object, the JavaScript engine looks for properties on the object itself first, then up the prototype chain.

### ⚙️ Solution Walkthrough
A property from a prototype is successfully destructured.
\`\`\`javascript
const proto = { inherited: 'yes' };
const obj = Object.create(proto);
obj.own = 'no';

const { inherited, own } = obj;
// 'own' is found on obj, 'inherited' is found on proto
\`\`\`

### 📚 Key Concepts
- **Prototype Chain**: The mechanism in JavaScript for objects to inherit properties
`,

  // problem explanation--> 175
  "variable-lifecycle-in-closure": `
### 💡 Problem Breakdown
This problem demonstrates a key aspect of closures. When an inner function is returned from an outer function, it maintains a reference to its parent's scope.

### ⚙️ Solution Walkthrough
The \`count\` variable persists between calls to the \`counter\` function.
\`\`\`javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
\`\`\`

### 📚 Key Concepts
- **Closures**: The combination of a function and the lexical environment within which that function was declared
`,

  // problem explanation--> 176
  "using-symbols-for-metadata": `
### 💡 Problem Breakdown
A great use case for \`Symbol\` is to add properties to an object that act as "metadata" without the risk of naming collisions.

### ⚙️ Solution Walkthrough
A unique symbol is used to attach a private-like ID to an object.
\`\`\`javascript
const idSymbol = Symbol('id');
const user = { name: 'Test' };
user[idSymbol] = 123;

console.log(JSON.stringify(user)); // '{"name":"Test"}'
console.log(user[idSymbol]); // 123
\`\`\`

### 📚 Key Concepts
- **\`Symbol\`**: Used for creating non-enumerable, unique property keys
`,

  // problem explanation--> 177
  "const-for-math-constants": `
### 💡 Problem Breakdown
This is a straightforward, practical use case for \`const\`. Mathematical constants are perfect candidates for \`const\`.

### ⚙️ Solution Walkthrough
A constant for PI is declared and used.
\`\`\`javascript
const PI = 3.14159;
const radius = 5;
const area = PI * radius * radius;
\`\`\`
Using \`const\` makes the code's intent clear and prevents accidental reassignment.

### 📚 Key Concepts
- **Constants**: Using \`const\` for values that are conceptually fixed
`,

  // problem explanation--> 178
  "destructure-react-props": `
### 💡 Problem Breakdown
This is a conceptual problem showing a very common pattern in the React library.

### ⚙️ Solution Walkthrough
A conceptual React component.
\`\`\`javascript
function User({ name, avatarUrl }) {
  return <div><img src={avatarUrl} />{name}</div>;
}
\`\`\`
This makes the code more concise and clearly documents which props the component expects.

### 📚 Key Concepts
- **Destructuring in Parameters**: A powerful feature for improving function ergonomics
`,

  // problem explanation--> 179
  "let-for-cached-value": `
### 💡 Problem Breakdown
This demonstrates a practical use of \`let\` for caching. Caching is a performance optimization where the result of an expensive operation is stored.

### ⚙️ Solution Walkthrough
A \`let\` variable is used to store a cached result.
\`\`\`javascript
let cachedData = null;
function getData() {
  if (cachedData) {
    return \`(from cache) \${cachedData}\`;
  }
  cachedData = 'expensive data';
  return \`(calculated) \${cachedData}\`;
}
getData(); // Calculates
getData(); // Returns cached
\`\`\`
Because \`cachedData\` is reassigned from \`null\` to the actual data, \`let\` is appropriate.

### 📚 Key Concepts
- **Caching**: A common performance optimization pattern
- **State Management**: Using \`let\` for a variable whose state changes
`,

  // problem explanation--> 180
  "tdz-in-class-bodies": `
### 💡 Problem Breakdown
This problem shows that the Temporal Dead Zone (TDZ) also applies to class properties.

### ⚙️ Solution Walkthrough
A conceptual class with an initialization order issue.
\`\`\`javascript
class MyClass {
  prop1 = this.prop2; // Throws a ReferenceError
  prop2 = 5;
}
\`\`\`

### 📚 Key Concepts
- **Class Initialization**: Class fields are initialized in order of definition
`,

  // problem explanation--> 181
  "shadowing-with-function-params": `
### 💡 Problem Breakdown
This is a specific example of variable shadowing. When a function has a parameter with the same name as a variable in an outer scope, the parameter shadows the outer variable.

### ⚙️ Solution Walkthrough
The parameter \`x\` shadows the outer variable \`x\`.
\`\`\`javascript
let x = 'outer';
function test(x) {
  console.log(x); // 'inner'
}
test('inner');
console.log(x); // 'outer'
\`\`\`

### 📚 Key Concepts
- **Parameter Scope**: Parameters are local variables within a function's scope
`,

  // problem explanation--> 182
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
- **Object Introspection**: Methods that allow you to check the state of an object
`,

  // problem explanation--> 183
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
- **Object Introspection**: Checking an object's state
`,

  // problem explanation--> 184
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
- **Object Introspection**: Checking an object's state
`,

  // problem explanation--> 185
  "destructuring-and-type-coercion": `
### 💡 Problem Breakdown
This is a conceptual problem to clarify that destructuring assignment performs a direct value assignment without any automatic type coercion.

### ⚙️ Solution Walkthrough
The string \`"0"\` is destructured.
\`\`\`javascript
const { val } = { val: "0" };
// val is the string "0"
// An \`if (val)\` check would be true, because "0" is truthy
\`\`\`
The assigned variable has the exact type and value of the source property.

### 📚 Key Concepts
- **Type Coercion**: Destructuring avoids this, making it predictable
`,

  // problem explanation--> 186
  "global-scope-pollution": `
### 💡 Problem Breakdown
This is a conceptual problem about a major drawback of overusing global variables.

### ⚙️ Solution Walkthrough
The modern solutions to this problem are ES6 Modules and creating local scopes with functions or blocks.
\`\`\`javascript
// Bad: Pollutes global scope
var globalVar = "I'm global";

// Better: Uses module pattern
(function() {
  var privateVar = "I'm private";
})();

// Best: Uses ES6 modules
// export const moduleVar = "I'm module-scoped";
\`\`\`

### 📚 Key Concepts
- **Encapsulation**: Keeping variables contained within the scope where they are needed
- **Module Pattern**: Using IIFE to create private scope
- **ES6 Modules**: Modern solution for scope management
`,

  // problem explanation--> 187
  "using-block-scope-for-privacy": `
### 💡 Problem Breakdown
This demonstrates a practical use for standalone block scopes. You can use a pair of curly braces to create a temporary "private" scope for helper variables.

### ⚙️ Solution Walkthrough
A block is used to contain \`temp\` and \`helper\`.
\`\`\`javascript
let result;
{
  let temp = 5;
  let helper = 10;
  result = temp + helper;
}
// 'temp' and 'helper' are not accessible here
\`\`\`
This is a lightweight alternative to an IIFE for achieving local scope.

### 📚 Key Concepts
- **Block Scope**: A tool for creating temporary, private scopes
`,

  // problem explanation--> 188
  "hoisting-let-and-const-conceptual": `
### 💡 Problem Breakdown
This is a common point of confusion. The statement "\`let\` and \`const\` are not hoisted" is technically incorrect.

### ⚙️ Solution Walkthrough
They *are* hoisted. However, unlike \`var\` which is initialized to \`undefined\`, \`let\` and \`const\` are left uninitialized. The period where they are hoisted but uninitialized is the Temporal Dead Zone (TDZ).

### 📚 Key Concepts
- **Hoisting**: Applies to all declaration types, but initialization behavior differs
- **Temporal Dead Zone (TDZ)**: Key difference in hoisting behavior of \`let\` and \`const\`
`,

  // problem explanation--> 189
  "destructure-computed-property": `
### 💡 Problem Breakdown
This shows an advanced destructuring pattern. You can use a computed property as the source property and alias it to a new variable.

### ⚙️ Solution Walkthrough
A variable \`key\` is used to specify the property to extract.
\`\`\`javascript
const key = 'name';
const { [key]: personName } = { name: 'Ivy' };
// 'personName' is now 'Ivy'
\`\`\`
This pattern is not very common but demonstrates the flexibility of the syntax.

### 📚 Key Concepts
- **Computed Properties**: Using \`[]\` in object literals to use an expression as a property name
`,

  // problem explanation--> 190
  "reserved-words-as-variables": `
### 💡 Problem Breakdown
JavaScript has a set of "reserved words" that have special meaning in the language. You cannot use these words as names for variables.

### ⚙️ Solution Walkthrough
This is a conceptual problem showing invalid syntax.
\`\`\`javascript
// All of these will cause a SyntaxError
// let for = 5;
// const if = true;
// var class = {};
\`\`\`

### 📚 Key Concepts
- **Reserved Words**: Keywords that are part of the language's syntax
`,

  // problem explanation--> 191
  "infinity-and-negative-infinity": `
### 💡 Problem Breakdown
JavaScript has global variables, \`Infinity\` and \`-Infinity\`, that represent the mathematical concepts of infinity.

### ⚙️ Solution Walkthrough
The results of division by zero are shown.
\`\`\`javascript
1 / 0;   // Infinity
-1 / 0;  // -Infinity
\`\`\`
These are of the \`number\` type.

### 📚 Key Concepts
- **\`Infinity\`**: A special numeric value representing a value greater than any other number
`,

  // problem explanation--> 192
  "reassigning-object-param": `
### 💡 Problem Breakdown
This clarifies a common point of confusion with "pass-by-reference." While you can mutate the object a parameter refers to, you cannot change the original external variable by reassigning the parameter.

### ⚙️ Solution Walkthrough
The function's parameter is reassigned to a new object.
\`\`\`javascript
let myObj = { val: 10 };
function reassign(obj) {
  obj = { val: 20 };
}
reassign(myObj);
// myObj is still { val: 10 }
\`\`\`

### 📚 Key Concepts
- **Local Scope**: Function parameters are local variables
`,

  // problem explanation--> 193
  "const-enum-pattern": `
### 💡 Problem Breakdown
JavaScript does not have a built-in \`enum\` type. A common pattern is to use a plain object, declared with \`const\`, and then freeze it.

### ⚙️ Solution Walkthrough
A \`STATUS\` enum is created.
\`\`\`javascript
const STATUS = Object.freeze({
  PENDING: 'pending',
  COMPLETE: 'complete',
  FAILED: 'failed'
});
\`\`\`
This pattern provides a single source of truth for a set of related constants.

### 📚 Key Concepts
- **Enum (Enumeration)**: A data type consisting of a set of named values
- **\`Object.freeze()\`**: Used to make the enum object immutable
`,

  // problem explanation--> 194
  "destructuring-rename-and-rest": `
### 💡 Problem Breakdown
This problem combines three powerful destructuring features: extracting a property, renaming it, and collecting all other properties.

### ⚙️ Solution Walkthrough
The \`id\` property is extracted and renamed to \`userID\`, and the rest are collected.
\`\`\`javascript
const user = { id: 99, name: 'Zoe', active: true };
const { id: userID, ...otherInfo } = user;
// userID is 99, otherInfo is { name: 'Zoe', active: true }
\`\`\`

### 📚 Key Concepts
- **Composability**: Destructuring features can be combined in a single expression
`,

  // problem explanation--> 195
  "global-scope-without-window": `
### 💡 Problem Breakdown
This is a conceptual problem about the global scope in a Web Worker.

### ⚙️ Solution Walkthrough
In a worker script:
\`\`\`javascript
// inside worker.js
console.log(self); // Logs the WorkerGlobalScope
console.log(self === this); // true
// console.log(window); // ReferenceError
\`\`\`
The global scope in a worker is referenced by the keyword \`self\`.

### 📚 Key Concepts
- **Web Workers**: Provide a multi-threaded environment in the browser
- **\`WorkerGlobalScope\`**: The name of the global scope object inside a worker
`,

  // problem explanation--> 196
  "automatic-semicolon-insertion": `
### 💡 Problem Breakdown
JavaScript has a feature called Automatic Semicolon Insertion (ASI) where the parser automatically inserts semicolons at the end of lines if they are missing.

### ⚙️ Solution Walkthrough
A newline after \`return\` causes a semicolon to be inserted.
\`\`\`javascript
function test() {
  return // ASI inserts a semicolon here!
  {
    value: 1 // This becomes unreachable
  }
}
test(); // returns undefined
\`\`\`
The code is interpreted as \`return;\`, and the function returns \`undefined\`.

### 📚 Key Concepts
- **ASI (Automatic Semicolon Insertion)**: A JavaScript feature that can sometimes lead to bugs
`,

  // problem explanation--> 197
  "global-scope-modules-vs-scripts": `
### 💡 Problem Breakdown
This is a summary of a critical concept for modern web development.

### ⚙️ Solution Walkthrough
- **Classic \`<script>\` files**: Run in a shared global scope. A \`var\` becomes a property of \`window\`
- **ES Modules (\`<script type="module">\` or \`import\`/\`export\`)**: Each module has its own private, top-level scope

### 📚 Key Concepts
- **Module Scope**: The default privacy of ES modules
`,

  // problem explanation--> 198
  "destructuring-primitive-wrappers": `
### 💡 Problem Breakdown
This problem shows how destructuring interacts with JavaScript's "autoboxing" of primitives.

### ⚙️ Solution Walkthrough
Destructuring the \`length\` property from a string.
\`\`\`javascript
const { length } = 'hello'; // Behaves like \`const { length } = new String('hello')\`
// 'length' is 5
\`\`\`
If you try to destructure a property that doesn't exist, the result will be \`undefined\`.

### 📚 Key Concepts
- **Autoboxing**: The implicit wrapping of primitives in objects
`,

  // problem explanation--> 199
  "shadowing-built-in-globals": `
### 💡 Problem Breakdown
You can declare a local variable that has the same name as a built-in global object. This is called shadowing.

### ⚙️ Solution Walkthrough
The global \`Array\` constructor is shadowed.
\`\`\`javascript
function test() {
  let Array = 'shadowed';
  // new Array(); // This would now be a TypeError
  return \`typeof Array is now: \${typeof Array}\`;
}
test(); // "typeof Array is now: string"
\`\`\`
While possible, it is extremely bad practice.

### 📚 Key Concepts
- **Variable Shadowing**: A behavior to be aware of and generally avoid
`,

  // problem explanation--> 200
  "var-vs-let-vs-const-summary": `
### 💡 Problem Breakdown
Summary of the three variable declaration types in JavaScript, focusing on their key differences.

### ⚙️ Solution Walkthrough
Comparison of behaviors:
| Feature             | \`var\`           | \`let\`           | \`const\`          |
|---------------------|-------------------|-------------------|--------------------|
| **Scope**           | Function-scoped   | Block-scoped      | Block-scoped       |
| **Hoisting**        | Hoisted           | TDZ               | TDZ                |
| **Reassignment**    | Allowed           | Allowed           | Not allowed        |
| **Redeclaration**   | Allowed           | Not allowed       | Not allowed        |

### 📚 Key Concepts
- Use \`const\` by default
- Use \`let\` when reassignment is needed
- Avoid \`var\` in modern JavaScript
`,
};
