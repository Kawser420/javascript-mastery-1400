export const explanations: Record<string, string> = {
  "simple-function-return": `
### 💡 Problem Breakdown
This is the most basic form of a function. The goal is to define a reusable block of code that returns a specific string.

### ⚙️ Solution Walkthrough
The solution uses a standard function declaration.
\`\`\`javascript
function greet() {
    return "Hello, Functions!";
}
greet();
\`\`\`
1. **function greet()**: The function keyword declares a function named greet.
2. **return "..."**: The return statement specifies the value to output.
3. **greet()**: This executes the code inside the greet function.

### 📚 Key Concepts
- **Function Declaration**: Traditional way to define a function.
- **return Statement**: Ends function execution and returns a value.
`,

  "function-with-parameters": `
### 💡 Problem Breakdown
Functions become powerful when they accept input. This problem involves writing a function that takes two numbers and returns their product.

### ⚙️ Solution Walkthrough
The function is defined with two parameters and returns their product.
\`\`\`javascript
function multiply(x, y) {
    return x * y;
}
multiply(8, 4); // 32
\`\`\`
1. **Parameters (x, y)**: Placeholders for values passed to the function.
2. **Arguments (8, 4)**: Actual values passed when calling the function.
3. **Return Value**: The result of the multiplication.

### 📚 Key Concepts
- **Parameters**: Variables listed in function definition.
- **Arguments**: Actual values passed to the function.
`,

  "arrow-function-syntax": `
### 💡 Problem Breakdown
The goal is to rewrite a function using arrow function syntax, which provides a more concise way to write functions.

### ⚙️ Solution Walkthrough
The solution defines and calls a one-line arrow function.
\`\`\`javascript
const square = (n) => n * n;
square(9); // 81
\`\`\`
1. **const square = ...**: Arrow function assigned to a variable.
2. **(n) => ...**: Core arrow function syntax.
3. **n * n**: Single expression implicitly returned.

### 📚 Key Concepts
- **Arrow Function**: Compact alternative to traditional functions.
- **Implicit Return**: Single-expression body automatically returns result.
`,

  "function-declaration": `
### 💡 Problem Breakdown
Function declarations are "hoisted," meaning they can be called before they appear in code.

### ⚙️ Solution Walkthrough
A function is defined using the function keyword.
\`\`\`javascript
const result = declaredFunction(); // Works due to hoisting

function declaredFunction() {
    return "This function was hoisted!";
}
\`\`\`
1. **function declaredFunction()**: Function declaration.
2. **Hoisting**: JavaScript moves declarations to the top of their scope.

### 📚 Key Concepts
- **Function Declaration**: Statement that defines a named function.
- **Hoisting**: Mechanism where declarations are moved to top of scope.
`,

  "function-expression": `
### 💡 Problem Breakdown
Function expressions define functions as part of variable assignments and are not fully hoisted.

### ⚙️ Solution Walkthrough
An anonymous function is assigned to a variable.
\`\`\`javascript
const expressionFunction = function() {
    return "This is a function expression.";
};
expressionFunction(); // Must be called after assignment
\`\`\`
1. **const expressionFunction = ...**: Variable declaration.
2. **function() {...}**: Anonymous function.
3. **Assignment**: Function assigned as variable value.

### 📚 Key Concepts
- **Function Expression**: Syntax to define anonymous functions assigned to variables.
`,

  "default-parameters": `
### 💡 Problem Breakdown
Default parameters allow initializing parameters with default values if no value is passed.

### ⚙️ Solution Walkthrough
The userName parameter has a default value.
\`\`\`javascript
function greet(userName = "Guest") {
    return \`Hello, \${userName}!\`;
}
greet("Alice"); // "Hello, Alice!"
greet();        // "Hello, Guest!"
\`\`\`
1. **userName = "Guest"**: Default parameter syntax.
2. **Execution**: Uses argument if provided, otherwise uses default.

### 📚 Key Concepts
- **Default Parameters**: Feature for specifying default parameter values.
`,

  "rest-parameters-sum": `
### 💡 Problem Breakdown
Rest parameter syntax allows functions to accept indefinite arguments as an array.

### ⚙️ Solution Walkthrough
The ...args syntax gathers all arguments into an array.
\`\`\`javascript
function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}
sum(1, 2, 3, 4, 5); // 15
\`\`\`
1. **...args**: Collects all remaining arguments.
2. **True Array**: args is a real JavaScript array.

### 📚 Key Concepts
- **Rest Parameters**: Syntax for representing indefinite arguments as an array.
`,

  "iife-pattern": `
### 💡 Problem Breakdown
IIFE (Immediately Invoked Function Expression) creates a private scope and executes immediately.

### ⚙️ Solution Walkthrough
Function expression wrapped and immediately invoked.
\`\`\`javascript
const result = (function() {
    const privateVar = "I'm private!";
    return \`This IIFE returned: "\${privateVar}"\`;
})();
// privateVar is not accessible here
\`\`\`
1. **(function(){...})**: Creates function expression.
2. **()**: Executes function immediately.

### 📚 Key Concepts
- **IIFE**: Pattern for creating private scopes and avoiding global pollution.
`,

  "hoisting-declaration": `
### 💡 Problem Breakdown
Function declarations are fully hoisted, allowing them to be called before they're defined.

### ⚙️ Solution Walkthrough
Function is called before its declaration.
\`\`\`javascript
const result = declaredFunction(); // Works

function declaredFunction() {
    return "This function was hoisted!";
}
\`\`\`
1. **Hoisting**: JavaScript moves function declarations to the top.
2. **Execution**: Function is available throughout the scope.

### 📚 Key Concepts
- **Hoisting**: JavaScript's behavior of moving declarations to the top.
`,

  "hoisting-expression-var": `
### 💡 Problem Breakdown
Function expressions assigned to var variables have their declaration hoisted but not their assignment.

### ⚙️ Solution Walkthrough
Calling before assignment results in error.
\`\`\`javascript
console.log(myFunc); // undefined
var myFunc = function() { return "Expression"; };
\`\`\`
1. **Variable Hoisting**: Declaration is hoisted, assignment is not.
2. **undefined**: Variable exists but has no value yet.

### 📚 Key Concepts
- **Variable Hoisting**: Only declarations are hoisted, not assignments.
`,

  "global-scope": `
### 💡 Problem Breakdown
Variables declared outside functions have global scope and are accessible everywhere.

### ⚙️ Solution Walkthrough
Variable declared in global scope.
\`\`\`javascript
const globalVar = "I'm global";

function accessGlobal() {
    return globalVar; // Accessible here
}
\`\`\`
1. **Global Declaration**: Outside any function or block.
2. **Global Access**: Available throughout the program.

### 📚 Key Concepts
- **Global Scope**: The outermost scope in JavaScript.
`,

  "function-scope": `
### 💡 Problem Breakdown
Variables declared with var inside a function are function-scoped.

### ⚙️ Solution Walkthrough
Variable accessible only within function.
\`\`\`javascript
function test() {
    var functionScoped = "Only in function";
    return functionScoped;
}
// console.log(functionScoped); // Error
\`\`\`
1. **Function Scope**: Variables are confined to the function.
2. **No External Access**: Cannot be accessed outside function.

### 📚 Key Concepts
- **Function Scope**: Variables are limited to their containing function.
`,

  "block-scope-let": `
### 💡 Problem Breakdown
let and const declarations are block-scoped, confined to their containing block.

### ⚙️ Solution Walkthrough
Variable accessible only within block.
\`\`\`javascript
if (true) {
    let blockScoped = "Only in block";
}
// console.log(blockScoped); // Error
\`\`\`
1. **Block Scope**: Variables limited to their block.
2. **Temporal Dead Zone**: Cannot access before declaration.

### 📚 Key Concepts
- **Block Scope**: Variables confined to their block.
`,

  "scope-chain": `
### 💡 Problem Breakdown
JavaScript uses lexical scoping - inner functions can access variables from outer functions.

### ⚙️ Solution Walkthrough
Nested function accessing outer variables.
\`\`\`javascript
function outer() {
    const outerVar = "outer";
    function inner() {
        return outerVar; // Access outer variable
    }
    return inner();
}
\`\`\`
1. **Scope Chain**: Inner functions can access outer scopes.
2. **Lexical Scoping**: Based on where functions are declared.

### 📚 Key Concepts
- **Scope Chain**: Hierarchy of accessible scopes.
`,

  "pure-function": `
### 💡 Problem Breakdown
Pure functions always return the same output for the same input and have no side effects.

### ⚙️ Solution Walkthrough
Function with no side effects.
\`\`\`javascript
function pureAdd(a, b) {
    return a + b; // No side effects
}
\`\`\`
1. **Deterministic**: Same input → same output.
2. **No Side Effects**: Doesn't modify external state.

### 📚 Key Concepts
- **Pure Function**: No side effects, deterministic.
`,

  "impure-function": `
### 💡 Problem Breakdown
Impure functions may have side effects or return different results for same inputs.

### ⚙️ Solution Walkthrough
Function with side effects.
\`\`\`javascript
let counter = 0;
function impureIncrement() {
    counter++; // Side effect
    return counter;
}
\`\`\`
1. **Side Effects**: Modifies external state.
2. **Non-Deterministic**: May return different results.

### 📚 Key Concepts
- **Impure Function**: Has side effects or non-deterministic.
`,

  "higher-order-function-argument": `
### 💡 Problem Breakdown
Higher-order functions accept other functions as arguments.

### ⚙️ Solution Walkthrough
Function accepting another function.
\`\`\`javascript
function operate(a, b, operation) {
    return operation(a, b);
}
operate(5, 3, (x, y) => x * y);
\`\`\`
1. **Function as Argument**: Passing functions to other functions.
2. **Callback**: The function being passed.

### 📚 Key Concepts
- **Higher-Order Function**: Accepts or returns functions.
`,

  "higher-order-function-return": `
### 💡 Problem Breakdown
Higher-order functions can return other functions.

### ⚙️ Solution Walkthrough
Function returning another function.
\`\`\`javascript
function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}
const double = multiplier(2);
\`\`\`
1. **Function Factory**: Creates and returns functions.
2. **Closure**: Returned function remembers its creation environment.

### 📚 Key Concepts
- **Function Factory**: Function that creates other functions.
`,

  "sync-callback": `
### 💡 Problem Breakdown
Synchronous callbacks are executed immediately during function execution.

### ⚙️ Solution Walkthrough
Callback executed immediately.
\`\`\`javascript
function processArray(arr, callback) {
    for (let item of arr) {
        callback(item);
    }
}
processArray([1, 2, 3], console.log);
\`\`\`
1. **Immediate Execution**: Callback runs during function execution.
2. **Blocking**: Execution waits for callback to complete.

### 📚 Key Concepts
- **Synchronous Callback**: Executed immediately during function call.
`,

  "arguments-object": `
### 💡 Problem Breakdown
The arguments object is available in functions and contains all passed arguments.

### ⚙️ Solution Walkthrough
Accessing function arguments.
\`\`\`javascript
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
\`\`\`
1. **arguments Object**: Array-like object containing all arguments.
2. **No Parameters Needed**: Works even without formal parameters.

### 📚 Key Concepts
- **arguments Object**: Contains all arguments passed to a function.
`,

  "object-method-this": `
### 💡 Problem Breakdown
Methods are functions attached to objects, and this refers to the object.

### ⚙️ Solution Walkthrough
Method using this keyword.
\`\`\`javascript
const person = {
    name: "John",
    greet() {
        return \`Hello, \${this.name}\`;
    }
};
\`\`\`
1. **Method**: Function attached to an object.
2. **this Context**: Refers to the owning object.

### 📚 Key Concepts
- **Method**: Function that is a property of an object.
`,

  "this-global-scope": `
### 💡 Problem Breakdown
In global scope, this refers to the global object (window in browsers).

### ⚙️ Solution Walkthrough
this in global context.
\`\`\`javascript
console.log(this); // Window in browsers
\`\`\`
1. **Global Context**: Outside any function.
2. **Global Object**: Refers to the global environment.

### 📚 Key Concepts
- **Global this**: Refers to the global object.
`,

  "this-arrow-function-lexical": `
### 💡 Problem Breakdown
Arrow functions don't have their own this binding - they inherit it from the surrounding scope.

### ⚙️ Solution Walkthrough
Arrow function using lexical this.
\`\`\`javascript
const obj = {
    value: 42,
    getValue: () => this.value // Inherits this
};
\`\`\`
1. **Lexical this**: Inherited from surrounding scope.
2. **No Binding**: Doesn't have its own this.

### 📚 Key Concepts
- **Lexical this**: Inherited from parent scope.
`,

  "function-call-method": `
### 💡 Problem Breakdown
The call() method calls a function with a specified this value and arguments.

### ⚙️ Solution Walkthrough
Using call to set this context.
\`\`\`javascript
function greet() {
    return \`Hello, \${this.name}\`;
}
const person = {name: "Alice"};
greet.call(person);
\`\`\`
1. **Explicit this**: Manually set this value.
2. **Argument Passing**: Pass arguments individually.

### 📚 Key Concepts
- **call()**: Method to call functions with explicit this.
`,

  "function-apply-method": `
### 💡 Problem Breakdown
The apply() method calls a function with a specified this value and arguments as array.

### ⚙️ Solution Walkthrough
Using apply to set this context.
\`\`\`javascript
function introduce(name, age) {
    return \`\${name} is \${age} years old\`;
}
introduce.apply(null, ["Alice", 30]);
\`\`\`
1. **Array Arguments**: Pass arguments as array.
2. **this Binding**: Set this context.

### 📚 Key Concepts
- **apply()**: Similar to call() but with array arguments.
`,

  "function-bind-method": `
### 💡 Problem Breakdown
The bind() method creates a new function with a bound this value and optional arguments.

### ⚙️ Solution Walkthrough
Creating bound function.
\`\`\`javascript
function multiply(a, b) {
    return a * b;
}
const double = multiply.bind(null, 2);
\`\`\`
1. **Function Binding**: Create new function with bound context.
2. **Partial Application**: Pre-set some arguments.

### 📚 Key Concepts
- **bind()**: Creates new function with bound context.
`,

  "recursive-countdown": `
### 💡 Problem Breakdown
Recursive functions call themselves to solve problems by breaking them down.

### ⚙️ Solution Walkthrough
Function calling itself.
\`\`\`javascript
function countdown(n) {
    if (n <= 0) return;
    console.log(n);
    countdown(n - 1);
}
\`\`\`
1. **Base Case**: Condition to stop recursion.
2. **Recursive Call**: Function calls itself.

### 📚 Key Concepts
- **Recursion**: Function that calls itself.
`,

  "first-class-functions": `
### 💡 Problem Breakdown
In JavaScript, functions are first-class citizens - they can be treated like any other value.

### ⚙️ Solution Walkthrough
Treating functions as values.
\`\`\`javascript
const sayHello = function() { return "Hello"; };
const func = sayHello; // Assign to variable
\`\`\`
1. **Function Assignment**: Can be assigned to variables.
2. **Function Passing**: Can be passed as arguments.

### 📚 Key Concepts
- **First-Class Functions**: Treated like any other value.
`,

  "named-function-expression": `
### 💡 Problem Breakdown
Named function expressions have a name that is only accessible within the function.

### ⚙️ Solution Walkthrough
Function expression with name.
\`\`\`javascript
const factorial = function fac(n) {
    return n <= 1 ? 1 : n * fac(n - 1);
};
\`\`\`
1. **Internal Name**: Only accessible inside function.
2. **Self-Reference**: Useful for recursion.

### 📚 Key Concepts
- **Named Expression**: Function expression with name.
`,

  "function-shadowing": `
### 💡 Problem Breakdown
Variable shadowing occurs when a variable in an inner scope has the same name as one in an outer scope.

### ⚙️ Solution Walkthrough
Inner variable shadows outer variable.
\`\`\`javascript
const x = "global";
function test() {
    const x = "local"; // Shadows global x
    return x;
}
\`\`\`
1. **Scope Hierarchy**: Inner scopes can shadow outer variables.
2. **Name Precedence**: Inner variable takes precedence.

### 📚 Key Concepts
- **Variable Shadowing**: Inner variable hides outer variable.
`,

  "anonymous-function": `
### 💡 Problem Breakdown
Anonymous functions are functions without a name, often used as callbacks.

### ⚙️ Solution Walkthrough
Function without name.
\`\`\`javascript
setTimeout(function() {
    console.log("Anonymous function");
}, 1000);
\`\`\`
1. **No Name**: Function without identifier.
2. **Callback Usage**: Commonly used for callbacks.

### 📚 Key Concepts
- **Anonymous Function**: Function without a name.
`,

  "implicit-return-arrow": `
### 💡 Problem Breakdown
Arrow functions with a single expression can implicitly return without the return keyword.

### ⚙️ Solution Walkthrough
Arrow function with implicit return.
\`\`\`javascript
const double = (x) => x * 2; // Implicit return
\`\`\`
1. **Concise Syntax**: No curly braces needed.
2. **Implicit Return**: Automatically returns expression result.

### 📚 Key Concepts
- **Implicit Return**: Automatic return in arrow functions.
`,

  "function-length-property": `
### 💡 Problem Breakdown
The length property of a function indicates the number of parameters it expects.

### ⚙️ Solution Walkthrough
Checking function length.
\`\`\`javascript
function example(a, b, c) {}
console.log(example.length); // 3
\`\`\`
1. **Parameter Count**: Number of formal parameters.
2. **Function Property**: Available on all functions.

### 📚 Key Concepts
- **Function Length**: Number of expected parameters.
`,

  "scope-let-vs-var-loop": `
### 💡 Problem Breakdown
let and var behave differently in loops due to their scoping rules.

### ⚙️ Solution Walkthrough
Loop with different variable declarations.
\`\`\`javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 3,3,3
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100); // 0,1,2
}
\`\`\`
1. **var Scoping**: Function-scoped, shared across iterations.
2. **let Scoping**: Block-scoped, new binding each iteration.

### 📚 Key Concepts
- **Loop Scoping**: Different behavior between var and let.
`,

  "pass-by-value": `
### 💡 Problem Breakdown
Primitive values are passed by value - a copy is made when passed to functions.

### ⚙️ Solution Walkthrough
Primitive value passing.
\`\`\`javascript
let a = 1;
function modify(val) {
    val = 2; // Doesn't affect original
}
modify(a);
\`\`\`
1. **Value Copy**: Primitive values are copied.
2. **No Side Effects**: Changes don't affect original.

### 📚 Key Concepts
- **Pass by Value**: Primitive values are copied when passed.
`,

  "pass-by-reference": `
### 💡 Problem Breakdown
Objects are passed by reference - the function receives a reference to the original object.

### ⚙️ Solution Walkthrough
Object passing.
\`\`\`javascript
const obj = {value: 1};
function modify(object) {
    object.value = 2; // Affects original
}
modify(obj);
\`\`\`
1. **Reference Passing**: Objects are passed by reference.
2. **Side Effects**: Changes affect the original object.

### 📚 Key Concepts
- **Pass by Reference**: Objects are passed by reference.
`,

  "function-constructor": `
### 💡 Problem Breakdown
The Function constructor can create functions from strings, but is generally not recommended.

### ⚙️ Solution Walkthrough
Creating function with constructor.
\`\`\`javascript
const add = new Function('a', 'b', 'return a + b');
\`\`\`
1. **String Evaluation**: Code is evaluated from strings.
2. **Security Risk**: Potential security issues.

### 📚 Key Concepts
- **Function Constructor**: Creates functions from strings.
`,

  "currying-multiply": `
### 💡 Problem Breakdown
Currying transforms a function that takes multiple arguments into a sequence of functions.

### ⚙️ Solution Walkthrough
Curried multiplication function.
\`\`\`javascript
const multiply = (a) => (b) => (c) => a * b * c;
multiply(2)(3)(4); // 24
\`\`\`
1. **Function Sequencing**: Series of single-argument functions.
2. **Partial Application**: Apply arguments step by step.

### 📚 Key Concepts
- **Currying**: Transforming multi-argument functions.
`,

  "partial-application": `
### 💡 Problem Breakdown
Partial application involves fixing some arguments of a function, producing a new function.

### ⚙️ Solution Walkthrough
Partially applying function.
\`\`\`javascript
function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
\`\`\`
1. **Argument Fixing**: Pre-setting some arguments.
2. **New Function**: Creating specialized functions.

### 📚 Key Concepts
- **Partial Application**: Fixing some function arguments.
`,

  "this-event-handler": `
### 💡 Problem Breakdown
In event handlers, this typically refers to the element that received the event.

### ⚙️ Solution Walkthrough
this in event handler.
\`\`\`javascript
button.addEventListener('click', function() {
    console.log(this); // The button element
});
\`\`\`
1. **Event Context**: this refers to the event target.
2. **Dynamic Binding**: Value depends on how function is called.

### 📚 Key Concepts
- **Event Handler this**: Refers to the event target.
`,

  "function-as-object-property": `
### 💡 Problem Breakdown
Functions can be properties of objects, in which case they're called methods.

### ⚙️ Solution Walkthrough
Function as object property.
\`\`\`javascript
const obj = {
    method() {
        return "I'm a method";
    }
};
\`\`\`
1. **Method**: Function that is an object property.
2. **this Binding**: Methods have access to object via this.

### 📚 Key Concepts
- **Method**: Function that is an object property.
`,

  "hoisting-var-declaration": `
### 💡 Problem Breakdown
var declarations are hoisted to the top of their scope but initialized as undefined.

### ⚙️ Solution Walkthrough
var hoisting behavior.
\`\`\`javascript
console.log(x); // undefined
var x = 5;
\`\`\`
1. **Declaration Hoisting**: Declaration moved to top.
2. **Undefined Initialization**: Initialized as undefined.

### 📚 Key Concepts
- **var Hoisting**: Declarations hoisted, assignments not.
`,

  "temporal-dead-zone-let": `
### 💡 Problem Breakdown
let and const declarations are hoisted but cannot be accessed before declaration (Temporal Dead Zone).

### ⚙️ Solution Walkthrough
TDZ with let.
\`\`\`javascript
console.log(x); // ReferenceError
let x = 5;
\`\`\`
1. **TDZ**: Cannot access variable before declaration.
2. **Hoisting Difference**: Different from var hoisting.

### 📚 Key Concepts
- **Temporal Dead Zone**: Cannot access let/const before declaration.
`,

  "arrow-function-no-arguments": `
### 💡 Problem Breakdown
Arrow functions don't have their own arguments object.

### ⚙️ Solution Walkthrough
No arguments in arrow functions.
\`\`\`javascript
const func = () => {
    console.log(arguments); // ReferenceError
};
\`\`\`
1. **No arguments**: Arrow functions lack arguments object.
2. **Rest Parameters**: Use ...args instead.

### 📚 Key Concepts
- **Arrow Function Limitations**: No arguments object.
`,

  "iife-with-params": `
### 💡 Problem Breakdown
IIFEs can accept parameters just like regular functions.

### ⚙️ Solution Walkthrough
IIFE with parameters.
\`\`\`javascript
const result = (function(name) {
    return \`Hello, \${name}\`;
})("World");
\`\`\`
1. **Parameter Passing**: Pass arguments to IIFE.
2. **Immediate Execution**: Executed with passed arguments.

### 📚 Key Concepts
- **IIFE with Parameters**: Immediately invoked with arguments.
`,

  "function-overwriting": `
### 💡 Problem Breakdown
Functions can be overwritten by assigning new values to them.

### ⚙️ Solution Walkthrough
Overwriting function.
\`\`\`javascript
function greet() { return "Hello"; }
greet = function() { return "Hi"; }; // Overwritten
\`\`\`
1. **Function Reassignment**: Functions can be reassigned.
2. **Dynamic Nature**: JavaScript's dynamic typing allows this.

### 📚 Key Concepts
- **Function Overwriting**: Replacing function implementation.
`,

  "callback-hell-conceptual": `
### 💡 Problem Breakdown
Callback hell refers to heavily nested callbacks that make code hard to read and maintain.

### ⚙️ Solution Walkthrough
Nested callbacks example.
\`\`\`javascript
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            // Nested callback hell
        });
    });
});
\`\`\`
1. **Pyramid of Doom**: Deeply nested callbacks.
2. **Readability Issues**: Hard to read and maintain.

### 📚 Key Concepts
- **Callback Hell**: Deeply nested asynchronous callbacks.
`,

  "this-binding-new": `
### 💡 Problem Breakdown
When a function is called with new, this is bound to the newly created object.

### ⚙️ Solution Walkthrough
Constructor function with new.
\`\`\`javascript
function Person(name) {
    this.name = name;
}
const john = new Person("John");
\`\`\`
1. **new Keyword**: Creates new object instance.
2. **this Binding**: this refers to the new instance.

### 📚 Key Concepts
- **new Binding**: this bound to new instance.
`,

  "this-strict-mode": `
### 💡 Problem Breakdown
In strict mode, this is undefined in regular function calls instead of the global object.

### ⚙️ Solution Walkthrough
this in strict mode.
\`\`\`javascript
"use strict";
function test() {
    console.log(this); // undefined
}
test();
\`\`\`
1. **Strict Mode**: Changes this behavior.
2. **Undefined this**: Instead of global object.

### 📚 Key Concepts
- **Strict Mode this**: undefined in regular function calls.
`,

  "function-name-property": `
### 💡 Problem Breakdown
Functions have a name property that contains the function's name.

### ⚙️ Solution Walkthrough
Accessing function name.
\`\`\`javascript
function myFunction() {}
console.log(myFunction.name); // "myFunction"
\`\`\`
1. **Function Name**: Available as property.
2. **Anonymous Functions**: May have empty or inferred names.

### 📚 Key Concepts
- **Function Name**: Name of the function as string.
`,

  "generator-function-basic": `
### 💡 Problem Breakdown
Generator functions can be paused and resumed using the yield keyword.

### ⚙️ Solution Walkthrough
Basic generator function.
\`\`\`javascript
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
\`\`\`
1. **function***: Generator function syntax.
2. **yield**: Pauses execution and returns value.

### 📚 Key Concepts
- **Generator Function**: Can pause and resume execution.
`,

  "generator-function-iterator": `
### 💡 Problem Breakdown
Generator functions return iterator objects that can be used to control execution.

### ⚙️ Solution Walkthrough
Using generator iterator.
\`\`\`javascript
function* generator() {
    yield 1;
    yield 2;
}
const gen = generator();
console.log(gen.next().value); // 1
\`\`\`
1. **Iterator Object**: Controls generator execution.
2. **next() Method**: Resumes generator execution.

### 📚 Key Concepts
- **Generator Iterator**: Controls generator execution.
`,

  "lexical-environment-conceptual": `
### 💡 Problem Breakdown
A lexical environment is a specification structure that holds identifier-variable mappings.

### ⚙️ Solution Walkthrough
Conceptual explanation.
\`\`\`javascript
// Lexical environment conceptually:
{
    environmentRecord: {
        // identifier: variable mappings
    },
    outer: null // reference to outer environment
}
\`\`\`
1. **Environment Record**: Stores variables and functions.
2. **Outer Reference**: Link to parent environment.

### 📚 Key Concepts
- **Lexical Environment**: Spec structure for scoping.
`,

  "this-with-settimeout": `
### 💡 Problem Breakdown
this inside setTimeout callbacks often doesn't work as expected due to execution context.

### ⚙️ Solution Walkthrough
this issue with setTimeout.
\`\`\`javascript
const obj = {
    value: 42,
    test() {
        setTimeout(function() {
            console.log(this.value); // undefined
        }, 100);
    }
};
\`\`\`
1. **Execution Context**: setTimeout runs function in global context.
2. **this Binding**: Lost original this binding.

### 📚 Key Concepts
- **setTimeout this**: this binding issues with setTimeout.
`,

  "function-composition": `
### 💡 Problem Breakdown
Function composition combines multiple functions to create a new function.

### ⚙️ Solution Walkthrough
Composing functions.
\`\`\`javascript
const compose = (f, g) => (x) => f(g(x));
const double = (x) => x * 2;
const increment = (x) => x + 1;
const doubleThenIncrement = compose(increment, double);
\`\`\`
1. **Function Combination**: Creating new functions from existing ones.
2. **Data Transformation**: Applying multiple transformations.

### 📚 Key Concepts
- **Function Composition**: Combining functions to create new ones.
`,

  "function-piping": `
### 💡 Problem Breakdown
Function piping is similar to composition but applies functions in left-to-right order.

### ⚙️ Solution Walkthrough
Piping functions.
\`\`\`javascript
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const double = (x) => x * 2;
const increment = (x) => x + 1;
const doubleThenIncrement = pipe(double, increment);
\`\`\`
1. **Left-to-Right**: Functions applied in sequence.
2. **Data Flow**: Output of one function becomes input to next.

### 📚 Key Concepts
- **Function Piping**: Applying functions in sequence.
`,

  "side-effects-conceptual": `
### 💡 Problem Breakdown
Side effects are any changes a function makes outside its own scope or observable interactions.

### ⚙️ Solution Walkthrough
Function with side effects.
\`\`\`javascript
let counter = 0;
function withSideEffect() {
    counter++; // Side effect
    console.log("Hello"); // Side effect
}
\`\`\`
1. **External Changes**: Modifying variables outside function.
2. **Observable Interactions**: Logging, DOM manipulation, etc.

### 📚 Key Concepts
- **Side Effects**: Changes outside function scope.
`,

  "memoization-closure": `
### 💡 Problem Breakdown
Memoization caches function results to avoid recomputation, often implemented with closures.

### ⚙️ Solution Walkthrough
Memoization with closure.
\`\`\`javascript
function memoize(fn) {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        return cache[key] || (cache[key] = fn(...args));
    };
}
\`\`\`
1. **Result Caching**: Store results of expensive computations.
2. **Closure**: Cache persists between function calls.

### 📚 Key Concepts
- **Memoization**: Caching function results.
`,

  "block-scope-in-loop": `
### 💡 Problem Breakdown
Block scope in loops creates a new binding for each iteration when using let/const.

### ⚙️ Solution Walkthrough
Block scope in loop.
\`\`\`javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 0,1,2
}
\`\`\`
1. **Per-Iteration Binding**: New variable binding each iteration.
2. **Closure Capture**: Each callback captures different variable.

### 📚 Key Concepts
- **Loop Block Scope**: New binding per iteration.
`,

  "arrow-function-no-prototype": `
### 💡 Problem Breakdown
Arrow functions don't have a prototype property and can't be used as constructors.

### ⚙️ Solution Walkthrough
Arrow function without prototype.
\`\`\`javascript
const arrow = () => {};
console.log(arrow.prototype); // undefined
\`\`\`
1. **No prototype**: Arrow functions lack prototype.
2. **No Constructor**: Cannot be used with new.

### 📚 Key Concepts
- **Arrow Function Limitations**: No prototype property.
`,

  "this-in-nested-function": `
### 💡 Problem Breakdown
this in nested functions doesn't inherit the outer function's this binding.

### ⚙️ Solution Walkthrough
this in nested function.
\`\`\`javascript
const obj = {
    value: 42,
    test() {
        function nested() {
            console.log(this); // Global object
        }
        nested();
    }
};
\`\`\`
1. **this Binding**: Nested functions don't inherit this.
2. **Global Fallback**: Falls back to global object.

### 📚 Key Concepts
- **Nested Function this**: Doesn't inherit outer this.
`,

  "default-param-evaluation": `
### 💡 Problem Breakdown
Default parameters are evaluated at call time, not function creation time.

### ⚙️ Solution Walkthrough
Default parameter evaluation.
\`\`\`javascript
let x = 1;
function test(a = x) {
    return a;
}
x = 2;
test(); // 2
\`\`\`
1. **Call-Time Evaluation**: Default values evaluated when function is called.
2. **Dynamic Defaults**: Can use expressions and variables.

### 📚 Key Concepts
- **Default Parameter Evaluation**: Evaluated at call time.
`,

  "function-arity": `
### 💡 Problem Breakdown
Function arity refers to the number of arguments a function expects.

### ⚙️ Solution Walkthrough
Checking function arity.
\`\`\`javascript
function example(a, b, c) {}
console.log(example.length); // 3
\`\`\`
1. **arity**: Number of formal parameters.
2. **length Property**: Available on all functions.

### 📚 Key Concepts
- **Function Arity**: Number of expected arguments.
`,

  "iife-for-private-methods": `
### 💡 Problem Breakdown
IIFEs can be used to create private methods and variables through closure.

### ⚙️ Solution Walkthrough
IIFE with private methods.
\`\`\`javascript
const counter = (function() {
    let count = 0;
    return {
        increment() { count++; },
        getCount() { return count; }
    };
})();
\`\`\`
1. **Private State**: Variables inaccessible from outside.
2. **Public Interface**: Returned object provides access.

### 📚 Key Concepts
- **IIFE for Privacy**: Creating private scope with IIFE.
`,

  "function-as-a-value": `
### 💡 Problem Breakdown
Functions are first-class values that can be assigned to variables, passed as arguments, etc.

### ⚙️ Solution Walkthrough
Function as value.
\`\`\`javascript
const func = function() { return "Hello"; };
const arr = [func];
const obj = {method: func};
\`\`\`
1. **First-Class Citizen**: Treated like any other value.
2. **Flexible Usage**: Can be assigned, passed, returned.

### 📚 Key Concepts
- **Function as Value**: Treated like any other value.
`,

  "variadic-function": `
### 💡 Problem Breakdown
Variadic functions accept a variable number of arguments, typically using rest parameters.

### ⚙️ Solution Walkthrough
Variadic function with rest parameters.
\`\`\`javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
\`\`\`
1. **Variable Arguments**: Accept any number of arguments.
2. **Rest Parameters**: ... syntax collects arguments into array.

### 📚 Key Concepts
- **Variadic Function**: Accepts variable number of arguments.
`,

  "execution-context-conceptual": `
### 💡 Problem Breakdown
Execution context is the environment in which JavaScript code is executed.

### ⚙️ Solution Walkthrough
Conceptual explanation.
\`\`\`javascript
// Execution context conceptually:
{
    variableEnvironment: { /* variables */ },
    lexicalEnvironment: { /* variables */ },
    thisBinding: /* this value */
}
\`\`\`
1. **Variable Environment**: Stores variables and functions.
2. **this Binding**: The this value for the context.

### 📚 Key Concepts
- **Execution Context**: Environment for code execution.
`,

  "this-in-callback": `
### 💡 Problem Breakdown
this in callbacks often doesn't work as expected due to how the callback is invoked.

### ⚙️ Solution Walkthrough
this issue in callback.
\`\`\`javascript
const obj = {
    value: 42,
    process(data, callback) {
        data.forEach(callback);
    }
};
obj.process([1, 2, 3], function(item) {
    console.log(this.value); // undefined
});
\`\`\`
1. **Callback Invocation**: Called by forEach, not by obj.
2. **this Binding**: Lost original context.

### 📚 Key Concepts
- **Callback this**: this binding issues in callbacks.
`,

  "function-hoisting-pitfall": `
### 💡 Problem Breakdown
Function hoisting can lead to unexpected behavior if not understood properly.

### ⚙️ Solution Walkthrough
Hoisting pitfall.
\`\`\`javascript
console.log(typeof func); // "function"
if (false) {
    function func() { return "First"; }
}
function func() { return "Second"; }
\`\`\`
1. **Block Hoisting**: Functions in blocks are hoisted inconsistently.
2. **Unexpected Behavior**: Can lead to confusing results.

### 📚 Key Concepts
- **Hoisting Pitfalls**: Unexpected behavior due to hoisting.
`,

  "call-vs-apply-vs-bind": `
### 💡 Problem Breakdown
call, apply, and bind are methods to control this binding, with slight differences.

### ⚙️ Solution Walkthrough
Comparison of call, apply, bind.
\`\`\`javascript
function test(a, b) { return this.value + a + b; }
const obj = {value: 10};

test.call(obj, 1, 2);     // 13
test.apply(obj, [1, 2]);  // 13
const bound = test.bind(obj, 1);
bound(2);                 // 13
\`\`\`
1. **call**: Invokes function with this and individual arguments.
2. **apply**: Invokes function with this and array of arguments.
3. **bind**: Creates new function with bound this and arguments.

### 📚 Key Concepts
- **this Binding Methods**: call, apply, and bind.
`,

  "currying-vs-partial-application": `
### 💡 Problem Breakdown
Currying and partial application are related but distinct techniques for function manipulation.

### ⚙️ Solution Walkthrough
Currying vs partial application.
\`\`\`javascript
// Currying
const curriedMultiply = (a) => (b) => (c) => a * b * c;

// Partial application
function multiply(a, b, c) { return a * b * c; }
const partialMultiply = multiply.bind(null, 2);
\`\`\`
1. **Currying**: Transforming multi-argument function into nested single-argument functions.
2. **Partial Application**: Fixing some arguments of a function.

### 📚 Key Concepts
- **Currying vs Partial Application**: Related but distinct concepts.
`,

  "function-overloading-conceptual": `
### 💡 Problem Breakdown
JavaScript doesn't support function overloading natively, but it can be simulated.

### ⚙️ Solution Walkthrough
Simulating function overloading.
\`\`\`javascript
function example() {
    if (arguments.length === 1) {
        return arguments[0] * 2;
    } else if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    }
}
\`\`\`
1. **No Native Overloading**: JavaScript doesn't support overloading.
2. **Simulation**: Can be simulated by checking arguments.

### 📚 Key Concepts
- **Function Overloading**: Not natively supported in JavaScript.
`,

  "self-referencing-function": `
### 💡 Problem Breakdown
Functions can reference themselves, which is useful for recursion and self-modification.

### ⚙️ Solution Walkthrough
Self-referencing function.
\`\`\`javascript
const factorial = function calc(n) {
    return n <= 1 ? 1 : n * calc(n - 1);
};
\`\`\`
1. **Self-Reference**: Function can reference itself.
2. **Named Expression**: Helps with self-reference.

### 📚 Key Concepts
- **Self-Reference**: Function referencing itself.
`,

  "closure-scope-preservation": `
### 💡 Problem Breakdown
Closures preserve the scope in which they were created, even after that scope has exited.

### ⚙️ Solution Walkthrough
Closure preserving scope.
\`\`\`javascript
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const counter = createCounter();
\`\`\`
1. **Scope Preservation**: Closure remembers its creation environment.
2. **Persistent State**: Variables persist between calls.

### 📚 Key Concepts
- **Closure**: Function that remembers its lexical scope.
`,

  "higher-order-function-wrapper": `
### 💡 Problem Breakdown
Higher-order functions can wrap other functions to add functionality.

### ⚙️ Solution Walkthrough
Function wrapper.
\`\`\`javascript
function withLogging(fn) {
    return function(...args) {
        console.log("Calling function with", args);
        return fn(...args);
    };
}
\`\`\`
1. **Function Wrapping**: Creating wrappers around functions.
2. **Behavior Addition**: Adding functionality like logging.

### 📚 Key Concepts
- **Function Wrapper**: Higher-order function that wraps another.
`,

  "new-function-scope": `
### 💡 Problem Breakdown
Functions created with the Function constructor have unique scope characteristics.

### ⚙️ Solution Walkthrough
Function constructor scope.
\`\`\`javascript
const x = 10;
const func = new Function('return x;');
console.log(func()); // ReferenceError
\`\`\`
1. **Global Scope**: Created in global scope only.
2. **No Closure Access**: Cannot access surrounding scope.

### 📚 Key Concepts
- **Function Constructor Scope**: Unique scope behavior.
`,

  "generator-function-return": `
### 💡 Problem Breakdown
Generator functions can return values using the return statement.

### ⚙️ Solution Walkthrough
Generator with return.
\`\`\`javascript
function* generator() {
    yield 1;
    return 2;
}
const gen = generator();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: true}
\`\`\`
1. **return in Generators**: Can return final value.
2. **Done State**: return sets done to true.

### 📚 Key Concepts
- **Generator Return**: Returning values from generators.
`,

  "generator-yield-delegation": `
### 💡 Problem Breakdown
Generators can delegate to other generators using yield*.

### ⚙️ Solution Walkthrough
Yield delegation.
\`\`\`javascript
function* gen1() {
    yield 1;
    yield 2;
}
function* gen2() {
    yield* gen1();
    yield 3;
}
\`\`\`
1. **yield***: Delegates to another generator.
2. **Generator Composition**: Combining multiple generators.

### 📚 Key Concepts
- **Yield Delegation**: Delegating to other generators.
`,

  "async-function-return": `
### 💡 Problem Breakdown
Async functions always return promises, even if they return non-promise values.

### ⚙️ Solution Walkthrough
Async function return.
\`\`\`javascript
async function test() {
    return 42;
}
test().then(console.log); // 42
\`\`\`
1. **Promise Return**: Always returns a promise.
2. **Value Wrapping**: Non-promise values are wrapped in promises.

### 📚 Key Concepts
- **Async Function Return**: Always returns a promise.
`,

  "this-in-object-literal": `
### 💡 Problem Breakdown
In object literal methods, this refers to the object itself.

### ⚙️ Solution Walkthrough
this in object literal.
\`\`\`javascript
const obj = {
    value: 42,
    getValue() {
        return this.value;
    }
};
\`\`\`
1. **Method Invocation**: this refers to the object.
2. **Object Context**: Methods have access to object properties.

### 📚 Key Concepts
- **Object Literal this**: Refers to the object itself.
`,

  "function-as-property-value": `
### 💡 Problem Breakdown
Functions can be values of object properties, making them methods.

### ⚙️ Solution Walkthrough
Function as property value.
\`\`\`javascript
const obj = {
    method: function() {
        return "I'm a method";
    }
};
\`\`\`
1. **Method Property**: Function as object property value.
2. **this Binding**: Method has access to object via this.

### 📚 Key Concepts
- **Method**: Function that is an object property.
`,

  "call-stack-conceptual": `
### 💡 Problem Breakdown
The call stack is a data structure that tracks function calls and their execution contexts.

### ⚙️ Solution Walkthrough
Conceptual explanation.
\`\`\`javascript
function a() { b(); }
function b() { c(); }
function c() { }
a();
// Call stack: a -> b -> c
\`\`\`
1. **LIFO Structure**: Last-In-First-Out stack.
2. **Execution Tracking**: Tracks currently executing functions.

### 📚 Key Concepts
- **Call Stack**: Tracks function execution order.
`,

  "function-binding-precedence": `
### 💡 Problem Breakdown
JavaScript has rules for determining this binding precedence in different situations.

### ⚙️ Solution Walkthrough
this binding precedence.
\`\`\`javascript
// Precedence order:
// 1. new binding
// 2. explicit binding (call, apply, bind)
// 3. implicit binding (method call)
// 4. default binding (global or undefined)
\`\`\`
1. **Binding Rules**: Specific rules for this determination.
2. **Precedence Order**: Certain bindings take precedence over others.

### 📚 Key Concepts
- **this Binding Precedence**: Rules for determining this.
`,

  "polyfill-bind-method": `
### 💡 Problem Breakdown
A polyfill for the bind method can be implemented to understand how it works.

### ⚙️ Solution Walkthrough
Simple bind polyfill.
\`\`\`javascript
Function.prototype.myBind = function(context, ...args) {
    const fn = this;
    return function(...innerArgs) {
        return fn.apply(context, [...args, ...innerArgs]);
    };
};
\`\`\`
1. **Closure Implementation**: Uses closure to remember context and arguments.
2. **Function Application**: Applies function with correct context.

### 📚 Key Concepts
- **bind Polyfill**: Custom implementation of bind.
`,

  "default-params-and-scope": `
### 💡 Problem Breakdown
Default parameters have their own scope between the outer scope and function body.

### ⚙️ Solution Walkthrough
Default parameter scope.
\`\`\`javascript
const x = 1;
function test(a = x, b = () => x) {
    const x = 2;
    return b(); // 1, not 2
}
\`\`\`
1. **Intermediate Scope**: Between outer and function scope.
2. **Variable Resolution**: Uses scope at parameter position.

### 📚 Key Concepts
- **Default Parameter Scope**: Unique scope for default parameters.
`,

  "arrow-function-and-this-in-object": `
### 💡 Problem Breakdown
Using arrow functions as methods in objects leads to unexpected this behavior.

### ⚙️ Solution Walkthrough
Arrow function as method.
\`\`\`javascript
const obj = {
    value: 42,
    getValue: () => this.value // undefined
};
\`\`\`
1. **Lexical this**: Inherits from surrounding scope, not object.
2. **Method Pitfall**: Not suitable for object methods.

### 📚 Key Concepts
- **Arrow Function Method**: Unexpected this behavior.
`,

  "function-purity-and-arrays": `
### 💡 Problem Breakdown
Function purity is especially important when working with arrays to avoid unintended mutations.

### ⚙️ Solution Walkthrough
Pure vs impure array functions.
\`\`\`javascript
// Impure - mutates original array
function impureSort(arr) { return arr.sort(); }

// Pure - returns new array
function pureSort(arr) { return [...arr].sort(); }
\`\`\`
1. **Array Mutation**: Arrays are reference types, easily mutated.
2. **Pure Alternatives**: Create copies to avoid mutation.

### 📚 Key Concepts
- **Array Purity**: Avoiding mutation of input arrays.
`,

  "iife-with-global-variable": `
### 💡 Problem Breakdown
IIFEs can be used to avoid polluting the global scope with temporary variables.

### ⚙️ Solution Walkthrough
IIFE for avoiding globals.
\`\`\`javascript
(function() {
    const temp = "temporary value";
    // Use temp here
})();
// temp is not available here
\`\`\`
1. **Scope Isolation**: Variables confined to IIFE.
2. **Global Protection**: Prevents global namespace pollution.

### 📚 Key Concepts
- **IIFE for Scope**: Isolating variables from global scope.
`,

  "function-with-optional-params": `
### 💡 Problem Breakdown
JavaScript functions can have optional parameters that may be omitted when calling.

### ⚙️ Solution Walkthrough
Optional parameters.
\`\`\`javascript
function greet(name, greeting = "Hello") {
    return \`\${greeting}, \${name}\`;
}
greet("John"); // "Hello, John"
\`\`\`
1. **Parameter Optionality**: Parameters can be omitted.
2. **Default Values**: Can provide default values for optional parameters.

### 📚 Key Concepts
- **Optional Parameters**: Parameters that can be omitted.
`,

  "rest-params-vs-arguments": `
### 💡 Problem Breakdown
Rest parameters and the arguments object both provide access to function arguments but with differences.

### ⚙️ Solution Walkthrough
Rest parameters vs arguments.
\`\`\`javascript
function withRest(...args) {
    // args is a real array
}

function withArguments() {
    // arguments is array-like
}
\`\`\`
1. **Rest Parameters**: Real array, better syntax.
2. **arguments Object**: Array-like, legacy feature.

### 📚 Key Concepts
- **Rest vs Arguments**: Modern vs legacy approach to arguments.
`,

  "named-args-with-destructuring": `
### 💡 Problem Breakdown
Named arguments can be simulated using object destructuring in function parameters.

### ⚙️ Solution Walkthrough
Named arguments with destructuring.
\`\`\`javascript
function createUser({name, age, role = "user"}) {
    return \`Name: \${name}, Age: \${age}, Role: \${role}\`;
}
\`\`\`
1. **Object Parameter**: Accept options object.
2. **Destructuring**: Extract properties directly in parameters.

### 📚 Key Concepts
- **Named Arguments**: Simulating named parameters with destructuring.
`,

  "function-to-string": `
### 💡 Problem Breakdown
The toString() method of functions returns a string representation of the function.

### ⚙️ Solution Walkthrough
Function toString.
\`\`\`javascript
function example(a, b) { return a + b; }
console.log(example.toString());
\`\`\`
1. **String Representation**: Returns function source code as string.
2. **Function Inspection**: Useful for debugging and reflection.

### 📚 Key Concepts
- **Function toString**: String representation of function.
`,

  "function-scope-vs-global-scope": `
### 💡 Problem Breakdown
Understanding the difference between function scope and global scope is fundamental.

### ⚙️ Solution Walkthrough
Scope comparison.
\`\`\`javascript
const globalVar = "global";

function test() {
    const localVar = "local";
    return globalVar; // Accessible
}
// localVar not accessible here
\`\`\`
1. **Global Scope**: Accessible everywhere.
2. **Function Scope**: Accessible only within function.

### 📚 Key Concepts
- **Scope Differences**: Global vs function scope.
`,

  "block-scope-with-const": `
### 💡 Problem Breakdown
const declarations are block-scoped like let but cannot be reassigned.

### ⚙️ Solution Walkthrough
const block scope.
\`\`\`javascript
if (true) {
    const x = 1;
}
// x not accessible here
\`\`\`
1. **Block Scope**: Confined to block.
2. **No Reassignment**: Cannot be reassigned after declaration.

### 📚 Key Concepts
- **const Block Scope**: Block-scoped and immutable binding.
`,

  "higher-order-function-foreach": `
### 💡 Problem Breakdown
Implementing a forEach function demonstrates higher-order function concepts.

### ⚙️ Solution Walkthrough
Custom forEach implementation.
\`\`\`javascript
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
\`\`\`
1. **Array Iteration**: Process each array element.
2. **Callback Invocation**: Call callback for each element.

### 📚 Key Concepts
- **forEach Implementation**: Custom array iteration.
`,

  "function-currying-practical": `
### 💡 Problem Breakdown
Currying has practical applications for creating specialized functions.

### ⚙️ Solution Walkthrough
Practical currying example.
\`\`\`javascript
const log = (level) => (message) => \`[\${level}] \${message}\`;
const logError = log("ERROR");
logError("Something went wrong");
\`\`\`
1. **Function Specialization**: Create specialized functions.
2. **Parameter Partial Application**: Fix some parameters upfront.

### 📚 Key Concepts
- **Practical Currying**: Real-world use of currying.
`,

  "this-in-event-listener-arrow": `
### 💡 Problem Breakdown
Using arrow functions for event listeners affects this binding behavior.

### ⚙️ Solution Walkthrough
Arrow function event listener.
\`\`\`javascript
button.addEventListener('click', () => {
    console.log(this); // Inherits from surrounding scope
});
\`\`\`
1. **Lexical this**: Inherits this from surrounding scope.
2. **Event Listener Context**: Different from regular function.

### 📚 Key Concepts
- **Arrow Event Listener**: Different this binding in event listeners.
`,

  "function-hoisting-with-var": `
### 💡 Problem Breakdown
Function expressions assigned to var variables have specific hoisting behavior.

### ⚙️ Solution Walkthrough
Function expression with var hoisting.
\`\`\`javascript
console.log(typeof func); // "undefined"
var func = function() {};
\`\`\`
1. **Variable Hoisting**: Declaration hoisted, assignment not.
2. **undefined Value**: Variable exists but has undefined value.

### 📚 Key Concepts
- **Function Expression Hoisting**: Specific hoisting behavior.
`,
};
