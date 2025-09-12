export const explanations: Record<string, string> = {
    'fp-map-double': `
### 💡 Problem Breakdown
The goal is to transform an array of numbers. For each number in the original array, we need to create a new number that is double its value, and collect these new numbers in a new array. This is a classic use case for the \`map\` function, a cornerstone of functional programming.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`Array.prototype.map\` method with a simple "doubler" callback function.
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const doubler = (n) => n * 2;
const doubledNumbers = numbers.map(doubler); // [2, 4, 6, 8, 10]
\`\`\`
1.  **Callback Function (\`doubler\`):** A function is defined that knows how to perform the desired transformation on a single element. In this case, it takes a number \`n\` and returns \`n * 2\`.
2.  **\`numbers.map(doubler)\`:** The \`map\` method is called on the input array. It takes our \`doubler\` function as an argument.
3.  **Execution:** \`map\` iterates over every element in the \`numbers\` array. For each element, it calls the \`doubler\` function, passing the element as an argument. It then collects the return value from each of these calls into a **new array**.
4.  **Return Value:** The \`map\` method returns the newly created array of doubled numbers. The original array remains unchanged.

### 📚 Key Concepts
-   **Functional Programming (FP):** A programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.
-   **Higher-Order Function:** A function that either takes another function as an argument, returns a function, or both. \`map\` is a higher-order function because it takes the \`doubler\` function as an argument.
-   **Immutability:** The principle of not changing data in place. \`map\` follows this principle by returning a new array instead of modifying the original one.
`,
    'fp-filter-even': `
### 💡 Problem Breakdown
The task is to select a subset of elements from an array based on a specific condition. We need to go through an array of numbers and create a new array that contains only the numbers that are even. This is the perfect job for the \`filter\` method.

### ⚙️ Solution Walkthrough
The solution uses the \`Array.prototype.filter\` method with a "predicate" function that checks for evenness.
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (n) => n % 2 === 0;
const evenNumbers = numbers.filter(isEven); // [2, 4, 6]
\`\`\`
1.  **Predicate Function (\`isEven\`):** A "predicate" is a function that returns a boolean (\`true\` or \`false\`). This function, \`isEven\`, takes a number \`n\` and returns \`true\` if it's even and \`false\` otherwise.
2.  **\`numbers.filter(isEven)\`:** The \`filter\` method is called on the array. It accepts our \`isEven\` predicate function.
3.  **Execution:** \`filter\` iterates through every element in the \`numbers\` array. For each element, it calls the \`isEven\` function. If \`isEven\` returns \`true\`, the element is included in the new array. If it returns \`false\`, the element is skipped.
4.  **Return Value:** \`filter\` returns a new array containing only the elements that passed the predicate's test.

### 📚 Key Concepts
-   **Predicate Function:** A function that takes an input and returns a boolean value, typically used for testing conditions.
-   **\`Array.prototype.filter()\`:** A higher-order function that creates a new array with all elements that pass the test implemented by the provided predicate function.
-   **Declarative Programming:** Describing *what* you want to achieve rather than *how* to achieve it. \`numbers.filter(isEven)\` declares that we want even numbers, without us having to write the loop and \`if\` statement ourselves (which would be imperative).
`,
    'fp-reduce-sum': `
### 💡 Problem Breakdown
The objective is to take an array of numbers and "reduce" it down to a single value, in this case, their sum. While this can be done with a simple loop, the \`reduce\` method provides a powerful functional programming pattern for this kind of aggregation.

### ⚙️ Solution Walkthrough
The solution uses the \`Array.prototype.reduce\` method with a "reducer" function.
\`\`\`javascript
const numbers = [10, 20, 30, 40];
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
const total = numbers.reduce(sumReducer, 0); // 100
\`\`\`
1.  **Reducer Function (\`sumReducer\`):** This function takes two main arguments:
    *   \`accumulator\`: The value resulting from the previous iteration. It's like a running total.
    *   \`currentValue\`: The current element being processed in the array.
    The function's job is to combine the \`accumulator\` and the \`currentValue\` and return the new \`accumulator\` for the next iteration. Here, it simply adds them.
2.  **Initial Value (\`0\`):** The \`reduce\` method takes a second argument, which is the initial value for the \`accumulator\`. For a sum, this is logically 0.
3.  **Execution:**
    *   Iteration 1: \`accumulator\` is 0, \`currentValue\` is 10. Returns 10.
    *   Iteration 2: \`accumulator\` is now 10, \`currentValue\` is 20. Returns 30.
    *   ...and so on, until the end of the array.
4.  **Return Value:** After the final iteration, \`reduce\` returns the final value of the accumulator.

### 📚 Key Concepts
-   **Aggregation**: The process of taking many values and combining them into a single summary value.
-   **\`Array.prototype.reduce()\`**: A higher-order function that executes a user-supplied "reducer" callback function on each element of the array, passing in the return value from the calculation on the preceding element.
`,
    'currying-simple': `
### 💡 Problem Breakdown
Currying is a functional programming technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. Instead of a function \`add(a, b)\`, we want to create a function that works like \`add(a)(b)\`. This allows for creating specialized functions by "partially applying" arguments.

### ⚙️ Solution Walkthrough
The solution uses a nested arrow function to achieve the curried effect.
\`\`\`javascript
const add = (a) => (b) => a + b;

// Calling it:
const add10 = add(10); // add10 is now a new function that will always add 10.
const result = add10(20); // The result is 30.
\`\`\`
1.  **\`const add = (a) => ...\`**: The outer function \`add\` takes the first argument, \`a\`.
2.  **\`=> (b) => a + b\`**: The outer function does not return a value. Instead, it returns *another function*. This inner function "remembers" the value of \`a\` because of a closure.
3.  **Inner Function**: The returned inner function takes the second argument, \`b\`, and completes the calculation using the remembered \`a\` and the new \`b\`.

### 📚 Key Concepts
-   **Currying**: The process of transforming a function with multiple arguments into a sequence of nested functions, each taking a single argument.
-   **Partial Application**: The process of fixing a number of arguments to a function, producing another function of smaller arity (fewer arguments). Currying makes partial application easy.
-   **Closures**: Currying relies heavily on closures. The inner function maintains a closure over the parent function's scope, allowing it to access the parent's arguments.
`,
    'pure-function-example': `
### 💡 Problem Breakdown
A pure function is a fundamental concept in functional programming. It must satisfy two conditions:
1.  **Deterministic**: Given the same input, it will always return the same output.
2.  **No Side Effects**: It does not modify any state outside of its own scope (e.g., no modifying global variables, no writing to the console or a file).
The task is to write a simple pure function.

### ⚙️ Solution Walkthrough
The `square` function is pure. Its output depends only on its input `n`, and it doesn't change anything else in the program.
\`\`\`javascript
function square(n) {
    return n * n;
}
\`\`\`
-   Calling \`square(8)\` will always return 64.
-   The function does not log to the console, modify a global variable, or make a network request. It has no side effects.

### 📚 Key Concepts
-   **Pure Function**: A function that is deterministic and has no side effects. Pure functions are predictable, testable, and easier to reason about.
-   **Side Effects**: Any interaction a function has with the outside world beyond its return value.
`,
    'higher-order-function-basic': `
### 💡 Problem Breakdown
A higher-order function is a function that either takes one or more functions as arguments, or returns a function as its result. This is a core concept that enables many other functional programming patterns. This problem demonstrates the simplest case: passing a function as an argument.

### ⚙️ Solution Walkthrough
The \`callFunc\` function is a higher-order function. It takes a function \`fn\` as its argument and then executes it.
\`\`\`javascript
const greet = () => "Hello!";

// 'callFunc' is a Higher-Order Function
const callFunc = (fn) => fn();

callFunc(greet); // Returns "Hello!"
\`\`\`
1.  **Function as Argument**: The \`greet\` function is passed as an argument to \`callFunc\`.
2.  **Callback Execution**: Inside \`callFunc\`, the parameter \`fn\` holds the \`greet\` function, which is then invoked with \`fn()\`.

### 📚 Key Concepts
-   **Higher-Order Function**: A function that operates on other functions.
-   **Callback Function**: A function passed into another function as an argument, which is then invoked inside the outer function.
`,
    'immutability-array': `
### 💡 Problem Breakdown
Immutability is a core principle of functional programming. It means not changing data structures in place. Instead of modifying an existing array, you create a new array with the desired changes. This prevents side effects and makes state management more predictable.

### ⚙️ Solution Walkthrough
The spread syntax (`...`) is used to create a new array with an added element, leaving the original array untouched.
\`\`\`javascript
const original = ['a', 'b', 'c'];

// Create a new array with the new element
const newArray = [...original, 'd'];

// original is still ['a', 'b', 'c']
// newArray is ['a', 'b', 'c', 'd']
\`\`\`
1.  **Spread Syntax (`...original`)**: This expands the elements of the `original` array.
2.  **New Array Literal (`[...]`)**: These expanded elements are placed inside a new array literal, along with the new element 'd'.

### 📚 Key Concepts
-   **Immutability**: The practice of not modifying data structures.
-   **Pure Operations**: Operations that do not have side effects. Creating a new array instead of mutating the old one is a pure operation.
`,
    'immutability-object': `
### 💡 Problem Breakdown
Just like with arrays, the principle of immutability applies to objects. Instead of directly changing a property on an object, you create a new object with the updated property.

### ⚙️ Solution Walkthrough
The spread syntax (`...`) is used to shallow-copy the properties from the original object into a new object, and then the specific property to be changed is overwritten.
\`\`\`javascript
const original = { name: "John", age: 30 };

// Create a new object with the updated age
const updated = { ...original, age: 31 };

// original is still { name: "John", age: 30 }
// updated is { name: "John", age: 31 }
\`\`\`
1.  **Spread Syntax (`...original`)**: Copies all key-value pairs from the `original` object into the new object literal.
2.  **Overwrite Property**: After spreading the original properties, the `age: 31` property is defined. This overwrites the `age` property that was copied from the original.

### 📚 Key Concepts
-   **Immutability**: A key principle for predictable state management, especially in libraries like React.
-   **Spread Syntax for Objects**: A concise way to create shallow copies and perform immutable updates.
`,
    'function-composition': `
### 💡 Problem Breakdown
Function composition is the process of applying one function to the result of another: `f(g(x))`. A higher-order `compose` function can be created to automate this, allowing you to build a complex pipeline from simple, reusable functions. Composition typically works from right to left.

### ⚙️ Solution Walkthrough
A `compose` function takes two functions, `f` and `g`, and returns a new function.
\`\`\`javascript
const compose = (f, g) => (x) => f(g(x));

const double = (n) => n * 2;
const addTen = (n) => n + 10;

// Create a new function that doubles a number, then adds 10
const composedFunc = compose(addTen, double);

composedFunc(5); // g(x) -> double(5) is 10. f(10) -> addTen(10) is 20.
\`\`\`
### 📚 Key Concepts
-   **Function Composition**: A core pattern in functional programming for building complex logic from simple, reusable pieces.
`,
    'fp-reduce-to-object': `
### 💡 Problem Breakdown
The `reduce` method is incredibly versatile. This problem demonstrates how to use it to transform an array of key-value pairs (e.g., \`[['a', 1], ['b', 2]]\`) into a single object.

### ⚙️ Solution Walkthrough
The `reduce` method is used with an empty object as the initial value for the accumulator. In each step, the current key-value pair is added to the accumulator object.
\`\`\`javascript
const pairs = [['a', 1], ['b', 2]];

const obj = pairs.reduce((accumulator, [key, value]) => {
  accumulator[key] = value;
  return accumulator;
}, {}); // Start with an empty object

// obj is { a: 1, b: 2 }
\`\`\`
1.  **Initial Value (`{}`)**: We tell `reduce` to start with an empty object as the `accumulator`.
2.  **Reducer Logic**: In each iteration, we use array destructuring `[key, value]` to get the parts of the pair and assign them as a new property on the `accumulator`.

### 📚 Key Concepts
-   **`Array.prototype.reduce()`**: A powerful method for transforming an array into any other data type, including an object.
`,
    'partial-application': `
### 💡 Problem Breakdown
Partial application is the process of creating a new function by "pre-filling" or "fixing" some of the arguments of an existing, more general function. This allows you to create specialized, more convenient functions.

### ⚙️ Solution Walkthrough
A generic `add` function is created. Then, a new function `addTen` is created that always has `5` as its first argument when it calls `add`.
\`\`\`javascript
function add(a, b) {
  return a + b;
}

// Create a specialized function by partially applying 'a'
const addTen = (b) => add(10, b);

addTen(5); // 15
\`\`\`
A closure is what allows `addTen` to "remember" that its first argument should be 10.

### 📚 Key Concepts
-   **Partial Application**: A technique for creating specialized functions from more general ones. It's a key benefit of currying and higher-order functions.
`,
    'fp-find-first-even': `
### 💡 Problem Breakdown
The \`.find()\` method is a higher-order function that iterates over an array and returns the **value** of the first element that satisfies a provided testing function (a predicate).

### ⚙️ Solution Walkthrough
The \`.find()\` method is used with a predicate function that checks if a number is even.
\`\`\`javascript
const numbers = [1, 3, 5, 6, 7, 8];
const isEven = (n) => n % 2 === 0;

const firstEven = numbers.find(isEven); // 6
\`\`\`
1.  **Execution**: \`.find()\` calls `isEven` for each number in order.
2.  **Short-circuiting**: As soon as the predicate returns `true` (for the number 6), \`.find()` stops iterating and immediately returns that value. If no element passes the test, it returns `undefined`.

### 📚 Key Concepts
-   **`Array.prototype.find()`**: A declarative method for searching for the first element in an array that matches a condition.
`,
    'point-free-style': `
### 💡 Problem Breakdown
"Point-free" or "tacit" programming is a style where function definitions do not explicitly identify the arguments (the "points") they operate on. This is achieved by composing functions or using higher-order functions.

### ⚙️ Solution Walkthrough
A "pointy" function is rewritten in a point-free style.
\`\`\`javascript
// "Pointy" version: the 'arr' argument is explicitly mentioned
const doubleAllPointy = (arr) => arr.map(x => x * 2);

// Point-free version
const double = (x) => x * 2;
// 'doubleAll' does not mention its 'arr' argument.
// It's a function that takes an array and maps 'double' over it.
const doubleAllPointfree = (arr) => arr.map(double); 
// In some libraries, this could be written even more tersely.
\`\`\`
The goal is to think about transformations on the data as a whole rather than manipulations of individual arguments.

### 📚 Key Concepts
-   **Point-Free Style**: A programming style that emphasizes function composition and avoids explicitly mentioning arguments.
`,
    'side-effects-conceptual': `
### 💡 Problem Breakdown
A "side effect" is any effect of a function, other than its return value, that is observable to the outside world. Pure functions have no side effects. Functional programming aims to minimize and control side effects.

### ⚙️ Solution Walkthrough
Examples of impure functions with side effects:
\`\`\`javascript
let counter = 0;
// Impure: Modifies a variable outside its scope
function increment() {
  counter++;
}

// Impure: Logs to the console (interacts with an external API)
function greet(name) {
  console.log(\`Hello, \${name}\`);
}

// Impure: Modifies its input argument
function makeUpperCase(arr) {
  arr[0] = arr[0].toUpperCase();
  return arr;
}
\`\`\`
Side effects make code less predictable and harder to test.

### 📚 Key Concepts
-   **Side Effects**: Any interaction a function has with the outside world beyond its return value.
`,
    'referential-transparency-conceptual': `
### 💡 Problem Breakdown
Referential transparency is a property of pure functions. It means that a function call can be replaced with its return value without changing the behavior of the program. This makes code much easier to reason about and debug.

### ⚙️ Solution Walkthrough
A pure function is referentially transparent, while an impure one is not.
\`\`\`javascript
// Pure function: add(2, 3) can always be replaced with 5.
const add = (a, b) => a + b;

// Impure function: Math.random() cannot be replaced with its value,
// because it would return a different value on the next call.
const getRandom = () => Math.random();
\`\`\`
If a function is referentially transparent, its results can be safely cached (memoized).

### 📚 Key Concepts
-   **Referential Transparency**: A property of expressions that ensures they can be replaced by their corresponding value without affecting the program's behavior. It's a direct result of a function being pure.
`,
    'fp-every-check': `
### 💡 Problem Breakdown
The \`.every()\` method is a higher-order function that tests whether *all* elements in an array pass the test implemented by a provided predicate function. It returns a single boolean value.

### ⚙️ Solution Walkthrough
The \`.every()\` method is used with a predicate that checks if a number is positive.
\`\`\`javascript
const numbers = [1, 5, 9, 12];
const allPositive = numbers.every(n => n > 0); // true

const mixedNumbers = [1, 5, -2, 8];
const allPositive2 = mixedNumbers.every(n => n > 0); // false
\`\`\`
1.  **Short-circuiting**: As soon as the predicate returns `false` for any element (like -2), \`.every()` stops iterating and immediately returns `false`.

### 📚 Key Concepts
-   **`Array.prototype.every()`**: A declarative method for verifying a condition for all elements of an array.
`,
    'fp-some-check': `
### 💡 Problem Breakdown
The \`.some()\` method is the counterpart to \`.every()`. It tests whether *at least one* element in an array passes the test implemented by a provided predicate function.

### ⚙️ Solution Walkthrough
The \`.some()\` method is used with a predicate that checks if a number is negative.
\`\`\`javascript
const numbers = [1, 5, 9, 12];
const anyNegative = numbers.some(n => n < 0); // false

const mixedNumbers = [1, 5, -2, 8];
const anyNegative2 = mixedNumbers.some(n => n < 0); // true
\`\`\`
1.  **Short-circuiting**: As soon as the predicate returns `true` for any element (like -2), \`.some()` stops iterating and immediately returns `true`.

### 📚 Key Concepts
-   **`Array.prototype.some()`**: A declarative method for checking if any element in an array matches a condition.
`,
    'function-piping': `
### 💡 Problem Breakdown
Piping is a pattern for function composition where data flows from left to right. The output of one function becomes the input of the next. A `pipe` function automates this, taking multiple functions and returning a new function that represents the entire sequence.

### ⚙️ Solution Walkthrough
A `pipe` function uses `reduce` to chain the function calls.
\`\`\`javascript
const pipe = (...fns) => (initialValue) => 
  fns.reduce((acc, fn) => fn(acc), initialValue);

const double = (n) => n * 2;
const addTen = (n) => n + 10;

// Create a function that doubles, then adds 10
const pipedFunc = pipe(double, addTen);

pipedFunc(5); // double(5) -> 10, then addTen(10) -> 20
\`\`\`
### 📚 Key Concepts
-   **Piping**: A readable way to chain data transformations.
-   **`Array.prototype.reduce()`**: Used here to apply the functions in sequence to the accumulated value.
`,
    'immutable-deep-update': `
### 💡 Problem Breakdown
Immutably updating a nested property in an object requires creating a shallow copy at each level of the nesting down to the property you want to change. This ensures that the original object and its nested structures are not modified.

### ⚙️ Solution Walkthrough
The spread syntax (`...`) is used at each level to perform the shallow copies.
\`\`\`javascript
const state = {
  user: {
    name: "John",
    address: {
      city: "New York"
    }
  }
};

// To immutably update the city:
const newState = {
  ...state, // Copy top-level properties
  user: {
    ...state.user, // Copy user properties
    address: {
      ...state.user.address, // Copy address properties
      city: "London" // Overwrite the city
    }
  }
};
\`\`\`
This pattern is fundamental to state management in libraries like React and Redux.

### 📚 Key Concepts
-   **Immutability**: A core principle for predictable state changes.
-   **Deep Update**: The process of immutably changing a property within a nested data structure.
`,
    'fp-reduce-right': `
### 💡 Problem Breakdown
The \`.reduceRight()\` method works just like \`.reduce()`, but it processes the array from right to left instead of left to right.

### ⚙️ Solution Walkthrough
\`.reduceRight()\` is used to reverse a string by prepending each character to the accumulator.
\`\`\`javascript
const str = "hello";
const reversed = str.split('').reduceRight((accumulator, char) => {
  return accumulator + char;
}, ""); // "olleh"
\`\`\`
1.  **Iteration Order**:
    - `acc=""`, `char="o"` -> "o"
    - `acc="o"`, `char="l"` -> "ol"
    - `acc="ol"`, `char="l"` -> "oll"
    - ...and so on.

### 📚 Key Concepts
-   **`Array.prototype.reduceRight()`**: A method for reducing an array from the last element to the first.
`,
'fp-map-objects': `
### 💡 Problem Breakdown
The `.map()` function is not limited to simple values like numbers and strings. It is a powerful tool for transforming arrays of objects into new arrays. This problem requires extracting a single property's value from each object in an array.

### ⚙️ Solution Walkthrough
The `.map()` method is called on the array of objects. The callback function takes an object as its argument and returns the value of the desired property.
\`\`\`javascript
const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
const names = users.map(user => user.name);
// names is ["Alice", "Bob"]
\`\`\`
1.  **Callback Function**: The arrow function \`user => user.name\` is executed for each object in the \`users\` array.
2.  **Transformation**: For the first object, it returns "Alice". For the second, it returns "Bob".
3.  **New Array**: The `.map()` method collects these return values into a new array.

### 📚 Key Concepts
-   **Data Transformation**: A core use case for functional methods is transforming data from one shape to another.
`,
'fp-filter-objects': `
### 💡 Problem Breakdown
Similar to mapping over objects, the `.filter()` method is used to create a new array containing only the objects from the original array that satisfy a specific condition.

### ⚙️ Solution Walkthrough
The `.filter()` method is called with a predicate function that checks a property of each object.
\`\`\`javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 29 }
];

const usersOver28 = users.filter(user => user.age > 28);
// usersOver28 is [{ name: "Bob", age: 30 }, { name: "Charlie", age: 29 }]
\`\`\`
1.  **Predicate Function**: The arrow function \`user => user.age > 28\` is the predicate. It returns \`true\` or \`false\` for each user object.
2.  **Filtering**: The `.filter()` method includes only those objects for which the predicate returned \`true\` in the new array.

### 📚 Key Concepts
-   **Data Filtering**: A common task of selecting a subset of data based on a condition.
`,
'fp-reduce-max': `
### 💡 Problem Breakdown
The `.reduce()` method is a powerful tool for aggregation. The goal is to use it to find the single largest number in an array.

### ⚙️ Solution Walkthrough
The reducer function compares the current number with the accumulator (the maximum number found *so far*).
\`\`\`javascript
const numbers = [1, 9, 2, 8, 5];
const max = numbers.reduce((currentMax, currentNum) => {
  return currentNum > currentMax ? currentNum : currentMax;
}, -Infinity); // Start with a very small number
\`\`\`
1.  **Initial Value**: We initialize the accumulator (\`currentMax\`) with a value that is guaranteed to be smaller than any number in the array, like \`-Infinity\`. (Alternatively, you can omit the initial value, and `reduce` will use the first element of the array as the initial `currentMax`).
2.  **Reducer Logic**: In each step, we compare the current number with the max found so far and return the larger of the two.

### 📚 Key Concepts
-   **Aggregation**: Using `.reduce()` to "reduce" an array to a single summary value.
`,
'memoization-closure-fp': `
### 💡 Problem Breakdown
Memoization is an optimization technique where you cache the results of expensive, pure functions. A closure is the perfect way to store this cache privately. This is a core functional programming pattern.

### ⚙️ Solution Walkthrough
A higher-order function \`memoize\` wraps another function. The closure of the returned function holds the \`cache\` object.
\`\`\`javascript
const memoize = (fn) => {
  const cache = {}; // The cache is stored in the closure
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key]; // Return from cache
    
    const result = fn(...args);
    cache[key] = result; // Compute and store in cache
    return result;
  };
};
\`\`\`
### 📚 Key Concepts
-   **Memoization**: A caching technique for speeding up pure functions.
-   **Higher-Order Function**: \`memoize\` is a HOF because it takes and returns functions.
-   **Closure**: Provides the private, persistent state for the cache.
`,
'currying-advanced': `
### 💡 Problem Breakdown
The goal is to create a generic \`curry\` function. This higher-order function will take any other function and convert it into a curried version. The curried function will accept arguments one at a time, or in groups, and will only execute the original function once it has received all of its expected arguments.

### ⚙️ Solution Walkthrough
The \`curry\` function returns a new function that collects arguments. It checks the `.length\` property of the original function to know how many arguments it's waiting for.
\`\`\`javascript
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
};

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
curriedSum(1)(2)(3); // 6
curriedSum(1, 2)(3); // 6
\`\`\`
### 📚 Key Concepts
-   **Currying**: A core functional programming concept.
-   **Recursion & Closures**: The inner \`curried\` function recursively calls itself and uses closures to accumulate arguments.
`,
'fp-chaining-methods': `
### 💡 Problem Breakdown
Functional array methods like `.map()` and `.filter()` are designed to be chainable. Because they each return a new array, you can immediately call another array method on the result. This allows you to build a clean, readable data processing pipeline.

### ⚙️ Solution Walkthrough
The solution chains `.filter()` and `.map()` to first select only the even numbers and then double them.
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(n => n % 2 === 0) // [2, 4, 6]
  .map(n => n * 2);        // [4, 8, 12]
\`\`\`
1.  **First Step**: `numbers.filter(...)` runs first and returns a new array `[2, 4, 6]`.
2.  **Second Step**: `.map(...)` is then called on this intermediate array to produce the final result.

### 📚 Key Concepts
-   **Method Chaining**: Creating a pipeline of operations. This is highly declarative and readable.
`,
'fp-declarative-vs-imperative': `
### 💡 Problem Breakdown
This is a conceptual problem about two different programming styles.
- **Imperative Programming**: Focuses on describing *how* a program should operate. You explicitly write the steps, loops, and conditional logic to achieve a result.
- **Declarative Programming**: Focuses on describing *what* the result should be, without specifying the step-by-step control flow. Functional programming is a form of declarative programming.

### ⚙️ Solution Walkthrough
Compare two ways to filter for even numbers.
\`\`\`javascript
const numbers = [1, 2, 3, 4];
// Imperative (HOW)
const evensImperative = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evensImperative.push(numbers[i]);
  }
}

// Declarative (WHAT)
const evensDeclarative = numbers.filter(n => n % 2 === 0);
\`\`\`
The declarative version is more concise and arguably easier to understand at a glance. It describes *what* you want (even numbers), not *how* to loop and check for them.

### 📚 Key Concepts
-   **Declarative vs. Imperative**: A fundamental distinction in programming paradigms.
`,
'fp-first-class-functions': `
### 💡 Problem Breakdown
In JavaScript, functions are "first-class citizens," which is a prerequisite for functional programming. This means a function is treated like any other value. It can be:
- Assigned to a variable.
- Stored in a data structure (like an array or object).
- Passed as an argument to another function.
- Returned as the result from another function.

### ⚙️ Solution Walkthrough
This demonstrates storing functions in an array and then calling them.
\`\`\`javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const operations = [add, subtract];

// Retrieve and call the subtract function from the array
const result = operations[1](10, 3); // 7
\`\`\`
### 📚 Key Concepts
-   **First-Class Functions**: A core feature of JavaScript that enables higher-order functions and other functional patterns.
`,
'fp-flatmap': `
### 💡 Problem Breakdown
The `.flatMap()` method (ES2019) is a combination of `.map()` followed by `.flat()` with a depth of 1. It is more efficient than performing the two operations separately. It's very useful when your mapping function returns an array for each element.

### ⚙️ Solution Walkthrough
`.flatMap()` is used to take an array of sentences and produce a single array of all the words.
\`\`\`javascript
const sentences = ["hello world", "how are you"];
// .map() would produce: [["hello", "world"], ["how", "are", "you"]]
// .flatMap() maps and then flattens that result.
const words = sentences.flatMap(s => s.split(' '));
// words is ["hello", "world", "how", "are", "you"]
\`\`\`
### 📚 Key Concepts
-   **`Array.prototype.flatMap()`**: A convenient and efficient method for mapping and then flattening an array in a single step.
`,
'fp-sorting-immutably': `
### 💡 Problem Breakdown
The standard `.sort()` array method is **mutating**; it sorts the array in place. In functional programming, we want to avoid mutations. The goal is to sort an array without changing the original.

### ⚙️ Solution Walkthrough
The solution is to create a *copy* of the array before sorting it. The modern `.toSorted()` method (ES2023) does this, but it can also be done manually with spread syntax or `.slice()`.
\`\`\`javascript
const numbers = [3, 1, 4, 2];

// ES2023 immutable method
const sorted1 = numbers.toSorted((a, b) => a - b);

// Manual immutable sort
const sorted2 = [...numbers].sort((a, b) => a - b);

// In both cases, 'numbers' remains [3, 1, 4, 2]
\`\`\`
### 📚 Key Concepts
-   **Immutability**: A core principle of FP.
-   **Pure Operations**: Creating a new sorted array is a pure operation, while sorting in place is impure (it has a side effect).
`,
'fp-group-by': `
### 💡 Problem Breakdown
The task is to take an array of objects and group them into a new object based on the value of one of their properties. `.reduce()` is the perfect tool for this aggregation task.

### ⚙️ Solution Walkthrough
`.reduce()` is used to build up an object of grouped items.
\`\`\`javascript
const items = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
  { type: "fruit", name: "banana" }
];

const grouped = items.reduce((acc, item) => {
  const key = item.type;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {});
\`\`\`
The `grouped` result will be `{ fruit: [...], veg: [...] }`.

### 📚 Key Concepts
-   **Aggregation**: Using `.reduce()` to transform an array into a different data structure (an object).
`,
'fp-transducer-conceptual': `
### 💡 Problem Breakdown
This is an advanced functional programming concept. When you chain multiple array methods like `.filter().map()`, an intermediate array is created after the `filter` step, which is then iterated over by `map`. For very large arrays, this can be inefficient. A **transducer** is a composable function that combines the logic of multiple transformations into a single pass.

### ⚙️ Solution Walkthrough
A transducer is a higher-order reducer. It's a function that takes one reducer (like the one you'd pass to `.reduce()`) and returns a new, enhanced reducer.
\`\`\`javascript
// Simplified conceptual example
const map = (fn) => (reducer) => (acc, val) => reducer(acc, fn(val));
const filter = (pred) => (reducer) => (acc, val) => pred(val) ? reducer(acc, val) : acc;

// Compose the transformations
const xform = compose(
  filter(n => n % 2 === 0), // filter first
  map(n => n * 2)             // then map
);

// Apply the composed transformation to a standard reducer
const finalReducer = xform((acc, val) => { acc.push(val); return acc; });
[1,2,3,4,5,6].reduce(finalReducer, []); // [4, 8, 12]
\`\`\`
The key is that the data is processed one element at a time through the entire transformation pipeline, without creating intermediate arrays.

### 📚 Key Concepts
-   **Transducer**: A composable, high-performance pattern for data transformation.
`,
'fp-functor-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem from functional programming theory. A **Functor** is a design pattern. It's a "container" or "context" that holds a value and has a `.map()` method. The `.map()` method allows you to apply a function to the value inside the container without having to take the value out. The method must return a new container of the same type, holding the new value.

### ⚙️ Solution Walkthrough
The JavaScript `Array` is a classic example of a Functor.
\`\`\`javascript
const numbers = [1, 2, 3]; // The array is the "container"
const double = (x) => x * 2;

// .map applies 'double' to the values inside the container
const doubledNumbers = numbers.map(double); // [2, 4, 6]
// The result is a new container of the same type (an Array).
\`\`\`
Other examples could be custom objects like a `Maybe` or `Either` type for handling null values or errors.

### 📚 Key Concepts
-   **Functor**: A "mappable" container data type. It's an abstraction that allows you to work with different data structures (arrays, promises, etc.) in a uniform way.
`,
'fp-monad-conceptual': `
### 💡 Problem Breakdown
This is another advanced conceptual problem. A **Monad** is a design pattern that builds on top of Functors. A Monad is a container that, in addition to a `.map()` method, has a method for "flattening" or "chaining" operations. In JavaScript, this is often called `flatMap` or is handled implicitly by `.then()` for Promises.

### ⚙️ Solution Walkthrough
The `Promise` is a great example of a Monad.
\`\`\`javascript
// 'fetch' returns a Promise (a container for a future value)
fetch('/api/user/1')
  .then(response => response.json()) // .then is like .map
  .then(user => {
    // This .then returns a new Promise (a nested container)
    return fetch(\`/api/posts/\${user.id}\`); 
  })
  .then(posts => {
    // The promise chain AUTOMATICALLY flattens the nested promise.
    // 'posts' is the value, not a Promise holding the value.
    console.log(posts);
  });
\`\`\`
`Array.prototype.flatMap` is another monadic operation. It maps a function over an array and then flattens the result by one level.

### 📚 Key Concepts
-   **Monad**: A design pattern for sequencing computations. Monads are a way to manage side effects, asynchronicity, and other complex control flows in a structured, functional way.
`,
'fp-arity': `
### 💡 Problem Breakdown
"Arity" is the term for the number of arguments or operands a function or operation takes. Understanding arity is important in functional programming because many patterns, like currying and composition, involve transforming functions to change their arity.

### ⚙️ Solution Walkthrough
-   **Unary function (arity 1)**: \`const square = x => x * x;\`
-   **Binary function (arity 2)**: \`const add = (x, y) => x + y;\`
-   **Ternary function (arity 3)**: \`const sum = (x, y, z) => x + y + z;\`

In JavaScript, you can check a function's declared arity with its `.length` property.
\`\`\`javascript
const add = (x, y) => x + y;
console.log(add.length); // 2
\`\`\`
Currying is the process of converting a function of arity N into N functions of arity 1.

### 📚 Key Concepts
-   **Arity**: The number of arguments a function is declared to receive.
`,
'fp-recursively-map': `
### 💡 Problem Breakdown
This problem involves re-implementing the `.map()` array method using recursion. The recursive logic is: the mapped version of an array is the result of applying the mapper to the first element, combined with the mapped version of the rest of the array.

### ⚙️ Solution Walkthrough
The function takes the head and tail of the array, processes the head, and recursively calls itself on the tail.
\`\`\`javascript
function map(arr, mapper) {
  // Base case: mapping an empty array is an empty array
  if (arr.length === 0) {
    return [];
  }
  const [head, ...tail] = arr;
  // Apply mapper to the head, and recurse on the tail
  return [mapper(head), ...map(tail, mapper)];
}
\`\`\`
### 📚 Key Concepts
-   **Recursion**: A way to process data structures by breaking them down into smaller, self-similar problems.
-   **Head/Tail Recursion**: A common pattern for processing lists recursively.
`,
'fp-recursively-filter': `
### 💡 Problem Breakdown
This problem involves re-implementing the `.filter()` array method using recursion. The logic: check if the first element passes the predicate. If it does, include it in the result and combine it with the filtered version of the rest of the array. If not, just return the filtered version of the rest of the array.

### ⚙️ Solution Walkthrough
The function checks the head of the array and decides whether to include it in the final result.
\`\`\`javascript
function filter(arr, predicate) {
  if (arr.length === 0) return []; // Base case
  
  const [head, ...tail] = arr;
  const filteredTail = filter(tail, predicate); // Recurse on the tail
  
  if (predicate(head)) {
    return [head, ...filteredTail];
  } else {
    return filteredTail;
  }
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Filtering**: Applying a conditional check recursively through a list.
`,
'fp-recursively-reduce': `
### 💡 Problem Breakdown
This problem involves re-implementing the `.reduce()` array method using recursion. The logic is: apply the reducer function to the accumulator and the first element, then use that new accumulator value in the recursive call for the rest of the array.

### ⚙️ Solution Walkthrough
The recursive function passes the updated accumulator down to the next call.
\`\`\`javascript
function reduce(arr, reducer, accumulator) {
  // Base case: if the array is empty, we're done.
  if (arr.length === 0) {
    return accumulator;
  }
  const [head, ...tail] = arr;
  // Apply the reducer to get the new accumulator
  const newAccumulator = reducer(accumulator, head);
  // Recurse on the tail with the new accumulator
  return reduce(tail, reducer, newAccumulator);
}
\`\`\`
### 📚 Key Concepts
-   **Tail Recursion**: This implementation is tail-recursive, as the recursive call is the very last action. This can be optimized by some language environments to avoid stack overflow errors.
`,
'fp-identity-function': `
### 💡 Problem Breakdown
The identity function is a very simple function that takes an argument and returns it without any changes. Its formula is \`f(x) = x\`. While it seems trivial, it's a fundamental building block in functional programming.

### ⚙️ Solution Walkthrough
The function is a simple one-liner.
\`\`\`javascript
const identity = (x) => x;
\`\`\`
It's often used as a default callback or as a starting point for function composition. For example, if a `.map()` operation is optional, you might pass the identity function to it so that it returns a new array with the same values, preserving the chain.

### 📚 Key Concepts
-   **Identity Function**: A function that always returns its input. It is the identity element under the operation of function composition.
`,
'fp-tap-utility': `
### 💡 Problem Breakdown
The `tap` utility (also known as `K` for the Kestrel combinator in functional programming) is a higher-order function used for debugging. It takes a function, returns a new function that, when called with a value, will execute the original function with that value (for a side effect, like logging) and then return the *original value* untouched.

### ⚙️ Solution Walkthrough
The `tap` function allows you to "tap into" a chain of operations without breaking it.
\`\`\`javascript
const tap = (fn) => (value) => {
  fn(value); // Perform the side effect
  return value; // Return the original value
};

// Usage in a chain:
[1, 2, 3]
  .map(n => n * 2)
  .map(tap(val => console.log(\`Value is: \${val}\`))) // Log without breaking the chain
  .filter(n => n > 4);
\`\`\`
### 📚 Key Concepts
-   **Side Effects**: The `tap` utility provides a controlled way to introduce side effects (like logging) into a pure functional pipeline for debugging.
`,
'fp-zip-arrays': `
### 💡 Problem Breakdown
The `zip` function takes two or more arrays and returns a new array where the elements at the same index are grouped together into a sub-array. For example, zipping \`['a', 'b']\` and \`[1, 2]\` results in \`[['a', 1], ['b', 2]]\`.

### ⚙️ Solution Walkthrough
A solution can be created by iterating up to the length of the shortest input array.
\`\`\`javascript
function zip(arr1, arr2) {
  const length = Math.min(arr1.length, arr2.length);
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}
\`\`\`
### 📚 Key Concepts
-   **Data Combination**: `zip` is a common utility for combining related data streams that are stored in separate arrays.
`,
'fp-partition-array': `
### 💡 Problem Breakdown
The `partition` function is a variation of `filter`. Instead of just returning the elements that pass a predicate, it returns two arrays: one with the elements that passed, and one with the elements that failed.

### ⚙️ Solution Walkthrough
This can be implemented efficiently using a single pass with `.reduce()`.
\`\`\`javascript
const partition = (arr, predicate) => {
  return arr.reduce((acc, val) => {
    // Add the value to the first (truthy) or second (falsy) sub-array
    acc[predicate(val) ? 0 : 1].push(val);
    return acc;
  }, [[], []]); // Initial value is an array of two empty arrays
};

partition([1,2,3,4,5], n => n % 2 === 0); // [[2, 4], [1, 3, 5]]
\`\`\`
### 📚 Key Concepts
-   **`Array.prototype.reduce()`**: A powerful tool for transforming an array into another data structure.
`,
'fp-debounce-function': `
### 💡 Problem Breakdown
Debouncing is a rate-limiting technique. It ensures that a function is only executed *after* a certain period of inactivity. This is very useful for events that can fire rapidly, like keyboard input in a search bar. You don't want to send an API request for every single keystroke, but rather only after the user has stopped typing for a moment.

### ⚙️ Solution Walkthrough
A higher-order function `debounce` is created. It uses a closure to store a timer ID.
\`\`\`javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId); // Clear the previous timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
// const debouncedSearch = debounce(apiSearch, 300);
// searchInput.addEventListener('input', debouncedSearch);
\`\`\`
### 📚 Key Concepts
-   **Debouncing**: A performance pattern to delay execution until a series of events has stopped.
`,
'fp-throttle-function': `
### 💡 Problem Breakdown
Throttling is another rate-limiting technique. It ensures that a function is executed at most *once* per specified time interval. This is useful for events that fire continuously, like `scroll` or `mousemove`, where you want to react periodically but not for every single event.

### ⚙️ Solution Walkthrough
A higher-order function `throttle` uses a closure to store a "cooling down" flag.
\`\`\`javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
// window.addEventListener('scroll', throttle(handleScroll, 200));
\`\`\`
### 📚 Key Concepts
-   **Throttling**: A performance pattern to guarantee that a function is not executed more than once per a given time period.
`,
'immutable-update-nested-array': `
### 💡 Problem Breakdown
This is a common task in state management for applications (e.g., in Redux or React). The goal is to immutably update an item within an array that is itself a nested property of an object. This requires creating copies at each level of the data structure.

### ⚙️ Solution Walkthrough
The solution uses a combination of object spread syntax and the `.map()` array method.
\`\`\`javascript
const state = {
  user: "John",
  items: [{ id: 1, text: 'A' }, { id: 2, text: 'B' }]
};

// To update item with id 2
const newState = {
  ...state, // 1. Copy the top-level object
  items: state.items.map(item => { // 2. Create a new items array
    if (item.id === 2) {
      return { ...item, text: 'C' }; // 3. Copy and update the target item
    }
    return item; // Return other items unchanged
  })
};
\`\`\`
### 📚 Key Concepts
-   **Immutability**: A core principle for predictable state changes.
-   **Data Transformation**: Combining different functional and immutable patterns to safely update complex state.
`,
'fp-function-lifting': `
### 💡 Problem Breakdown
"Lifting" is a concept where you take a function that operates on simple values and transform it into a function that operates on values "lifted" into a context or container, like an Array, a Promise, or a Maybe. The container's `.map()` method is a form of lifting.

### ⚙️ Solution Walkthrough
A simple \`double\` function is "lifted" to work on an array of numbers using `.map`.
\`\`\`javascript
// A simple function on values
const double = x => x * 2;

// Lifting this function to work on arrays
const doubleAll = (arr) => arr.map(double);

// doubleAll([1, 2, 3]); // [2, 4, 6]
\`\`\`
The `.map` method abstracts away the logic of handling the "container" (the array), allowing you to apply the simple \`double\` function to the values inside it. This concept applies to other Functors as well.

### 📚 Key Concepts
-   **Lifting**: The process of transforming a function to operate within a specific context (Functor).
-   **Functor**: Any data structure with a `.map` method that allows you to "lift" a function into its context.
`,
'fp-applicative-functor-conceptual': `
### 💡 Problem Breakdown
This is an advanced functional programming concept. An Applicative Functor (or just "Applicative") is a Functor with an additional method, typically called `ap`. While `.map` lets you apply a simple function to a value in a container, `ap` lets you apply a *function that is also in a container* to a value in a container.

### ⚙️ Solution Walkthrough
A conceptual example with arrays.
\`\`\`javascript
// Imagine an array of functions
const functions = [x => x + 1, x => x * 2];
const values = [10, 20];

// An applicative 'ap' would apply each function to each value
// Conceptual result: [(10+1), (20+1), (10*2), (20*2)] -> [11, 21, 20, 40]
\`\`\`
Applicatives are powerful for combining multiple independent computations that are themselves wrapped in a context (like multiple form fields that could each be valid or invalid).

### 📚 Key Concepts
-   **Applicative Functor**: A design pattern that builds on Functors, allowing for more complex function application within a context.
`,
'fp-once-function': `
### 💡 Problem Breakdown
The task is to create a higher-order function named \`once\`. This function will take another function as input and return a new function that can only be executed a single time. All subsequent calls to the new function should not re-execute the original function but should return the result of the first execution.

### ⚙️ Solution Walkthrough
The \`once\` function uses a closure to store a boolean flag and the result of the first call.
\`\`\`javascript
const once = (fn) => {
  let hasBeenCalled = false;
  let result;
  return (...args) => {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args);
    }
    return result;
  };
};
\`\`\`
### 📚 Key Concepts
-   **Higher-Order Function**: \`once\` is a higher-order function that wraps and modifies the behavior of another function.
-   **Stateful Closure**: The closure provides a private, persistent state for the wrapper function.
`,
'fp-flip-arguments': `
### 💡 Problem Breakdown
The `flip` utility is a higher-order function that takes a function as an argument and returns a new function that accepts its arguments in the reverse order. This is useful for adapting functions to fit APIs that expect arguments in a different sequence.

### ⚙️ Solution Walkthrough
The `flip` function returns a new function that uses `.reverse()` on the collected arguments before applying them to the original function.
\`\`\`javascript
const subtract = (a, b) => a - b;
// subtract(10, 2) is 8

const flip = (fn) => (...args) => fn(...args.reverse());

const flippedSubtract = flip(subtract);
// flippedSubtract(10, 2) is the same as subtract(2, 10), which is -8
\`\`\`
### 📚 Key Concepts
-   **Higher-Order Function**: `flip` is a HOF that transforms another function.
-   **Rest/Spread Syntax**: Used to easily collect and apply arguments.
`,
'fp-prop-utility': `
### 💡 Problem Breakdown
The `prop` utility is a curried function that makes property access more functional. It takes a property name (key) and returns a new function. This new function takes an object and returns the value of that property from the object.

### ⚙️ Solution Walkthrough
A curried arrow function is used.
\`\`\`javascript
const prop = (key) => (obj) => obj[key];

const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
const getName = prop('name');

// Now 'getName' can be used with .map
const names = users.map(getName); // ["Alice", "Bob"]
\`\`\`
This creates a clean, reusable function (`getName`) for a common operation, leading to more declarative code.

### 📚 Key Concepts
-   **Currying**: The core technique that makes this pattern work.
-   **Point-Free Style**: `users.map(prop('name'))` is a common point-free pattern.
`,
'fp-idempotence-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem about a property of operations. An operation is **idempotent** if applying it multiple times produces the same result as applying it just once. This is a very desirable property in system design, especially for network requests.

### ⚙️ Solution Walkthrough
-   **Idempotent**: \`Math.abs(x)\`. No matter how many times you apply it, \`Math.abs(Math.abs(-10))\` is the same as \`Math.abs(-10)\`. Setting an object property (\`obj.x = 5\`) is also idempotent.
-   **Not Idempotent**: \`x + 1\`. Applying this twice (\`(x+1)+1\`) is different from applying it once. Pushing to an array is not idempotent.

In network APIs, HTTP methods like \`GET\`, \`PUT\`, and \`DELETE\` are expected to be idempotent. \`POST\` is not.

### 📚 Key Concepts
-   **Idempotence**: A property of an operation that ensures it can be repeated without unintended effects.
`,
'fp-y-combinator-conceptual': `
### 💡 Problem Breakdown
This is a very advanced and theoretical concept from lambda calculus. The **Y Combinator** is a higher-order function that can be used to implement recursion without requiring the function to have a name. It finds the "fixed point" of another function.

### ⚙️ Solution Walkthrough
In JavaScript, we don't need the Y Combinator because we have named function expressions and variable declarations that allow a function to easily call itself. However, it demonstrates a deep principle of computation: recursion can be achieved purely through anonymous functions and function application. A simplified version in JS looks something like this:
\`\`\`javascript
const Y = (f) =>
  ((x) => f((v) => x(x)(v)))(
  (x) => f((v) => x(x)(v)));
\`\`\`
This is primarily of academic interest in the context of JavaScript.

### 📚 Key Concepts
-   **Lambda Calculus**: The mathematical foundation of functional programming.
-   **Fixed-Point Combinator**: A higher-order function that finds a fixed point of other functions.
`,
'fp-monoid-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem from category theory, which influences functional programming. A **Monoid** is a simple algebraic structure consisting of three things:
1.  A **set** of values (a type).
2.  A binary **associative operation** that combines two values of the set to produce a third value of the same set (e.g., \`concat\`). Associativity means \`(a.b).c\` is the same as \`a.(b.c)\`.
3.  An **identity element** (\`empty\`) for that operation, such that combining any value with the identity element results in the original value (\`a.empty = a\`).

### ⚙️ Solution Walkthrough
Examples of Monoids in JavaScript:
-   **Numbers with addition**: Set = Numbers, Operation = \`+\`, Identity = \`0\`.
-   **Numbers with multiplication**: Set = Numbers, Operation = \`*\`, Identity = \`1\`.
-   **Strings with concatenation**: Set = Strings, Operation = \`+\`, Identity = \`""\`.
-   **Arrays with concatenation**: Set = Arrays, Operation = \`.concat()\`, Identity = \`[]\`.

This structure is useful because if you have a Monoid, you know you can safely reduce a list of its values into a single value.

### 📚 Key Concepts
-   **Category Theory**: A branch of mathematics that provides a formal foundation for many functional programming concepts.
`,
'fp-difference-arrays': `
### 💡 Problem Breakdown
The goal is to find the "difference" between two arrays: a new array containing only the elements from the first array that are *not* present in the second array.

### ⚙️ Solution Walkthrough
This can be solved efficiently by converting the second array into a `Set` for fast lookups, and then filtering the first array.
\`\`\`javascript
const difference = (arr1, arr2) => {
  const set2 = new Set(arr2);
  return arr1.filter(x => !set2.has(x));
};
difference([1, 2, 3, 4], [3, 4, 5]); // [1, 2]
\`\`\`
### 📚 Key Concepts
-   **`Set`**: Used for efficient (`O(1)`) lookups to check for the presence of elements.
-   **`Array.prototype.filter()`**: The higher-order function used to declaratively build the resulting array.
`,
'fp-pluck-utility': `
### 💡 Problem Breakdown
The `pluck` utility is a common functional helper. It's a specialized version of `map` for the common case of extracting a single property's value from an array of objects.

### ⚙️ Solution Walkthrough
A `pluck` function takes a property key and an array. It then uses `.map()` to perform the extraction.
\`\`\`javascript
const pluck = (key, list) => list.map(obj => obj[key]);

const users = [{ name: 'Alice' }, { name: 'Bob' }];
pluck('name', users); // ['Alice', 'Bob']
\`\`\`
This can also be written in a curried, point-free style: \`const pluck = key => list => list.map(obj => obj[key]);\`.

### 📚 Key Concepts
-   **Data Transformation**: A common pattern of reshaping data from one form to another.
`,
'fp-memoize-with-key': `
### 💡 Problem Breakdown
The simple `memoize` function uses `JSON.stringify` on the arguments to create a cache key. This might not be ideal for arguments that are complex objects or functions. `memoizeWith` is a more powerful version that takes a custom key-generating function as its first argument.

### ⚙️ Solution Walkthrough
The HOF `memoizeWith` takes a `keyFn` and the function to memoize.
\`\`\`javascript
const memoizeWith = (keyFn, fn) => {
  const cache = {};
  return (...args) => {
    const key = keyFn(...args); // Use the custom key function
    if (key in cache) return cache[key];
    
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

// Example: cache based on an object's 'id' property
const processUser = (user) => \`Processing \${user.name}\`;
const memoizedProcess = memoizeWith(user => user.id, processUser);
\`\`\`
### 📚 Key Concepts
-   **Higher-Order Functions**: Building flexible and reusable utilities by taking functions as arguments.
`,
'fp-unary-function': `
### 💡 Problem Breakdown
A "unary" function is a function that accepts exactly one argument. The `unary` utility is a higher-order function that takes a function that might accept multiple arguments and returns a new version of it that will only ever accept one. This is useful for preventing unexpected behavior when passing functions as callbacks to methods like `.map()`, which provides more than one argument (`value`, `index`, `array`).

### ⚙️ Solution Walkthrough
A classic example is using `parseInt` with `.map()`.
\`\`\`javascript
const unary = (fn) => (arg) => fn(arg);
// ['1', '2', '3'].map(parseInt) -> [1, NaN, NaN] (because of the index argument)
// ['1', '2', '3'].map(unary(parseInt)) -> [1, 2, 3]
\`\`\`
### 📚 Key Concepts
-   **Function Arity**: Controlling the number of arguments a function receives.
`,
'fp-binary-function': `
### 💡 Problem Breakdown
Similar to the `unary` utility, a `binary` function is one that accepts exactly two arguments. The `binary` utility is a HOF that takes a function and returns a new version that only accepts its first two arguments.

### ⚙️ Solution Walkthrough
The returned function explicitly ignores any arguments beyond the first two.
\`\`\`javascript
const binary = (fn) => (arg1, arg2) => fn(arg1, arg2);

const add = (...args) => args.reduce((a, b) => a + b, 0);
const binaryAdd = binary(add);
// add(1, 2, 3, 4) -> 10
// binaryAdd(1, 2, 3, 4) -> 3
\`\`\`
### 📚 Key Concepts
-   **Function Arity**: A utility for creating a new function with a fixed arity of 2.
`,
'fp-converge-utility': `
### 💡 Problem Breakdown
The `converge` utility is a powerful composition pattern. It takes a "converging" function and a list of "branching" functions. It applies the branching functions to its arguments, and then passes their results as arguments to the converging function.

### ⚙️ Solution Walkthrough
A classic example is calculating the average of a list of numbers.
\`\`\`javascript
const divide = (a, b) => a / b;
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const length = (arr) => arr.length;
const converge = (convergingFn, branchingFns) => 
  (...args) => convergingFn(...branchingFns.map(fn => fn(...args)));

const average = converge(divide, [sum, length]);
average([10, 20, 30]); // sum([10,20,30]) -> 60. length([10,20,30]) -> 3. divide(60, 3) -> 20.
\`\`\`
### 📚 Key Concepts
-   **Function Composition**: A pattern for building complex functions by combining simpler ones in a branching structure.
`,
'fp-trampoline-recursion': `
### 💡 Problem Breakdown
Deep recursion can cause a "stack overflow" error. A "trampoline" is a technique to run a recursive function without growing the call stack. It works by having the recursive function return a "thunk" (a zero-argument function) instead of calling itself directly. The trampoline then runs these thunks in a loop.

### ⚙️ Solution Walkthrough
A `trampoline` function takes a function and runs it in a loop until it returns a non-function value.
\`\`\`javascript
const trampoline = (fn) => (...args) => {
  let result = fn(...args);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
};
// You would then rewrite your recursive function to return thunks.
\`\`\`
This technique converts deep recursion into simple iteration, making it stack-safe.

### 📚 Key Concepts
-   **Stack Overflow**: An error that occurs when there is too much recursion.
-   **Thunk**: A function that wraps an expression to delay its evaluation.
`,
'lens-conceptual': `
### 💡 Problem Breakdown
A "Lens" is an advanced functional programming concept for working with immutable nested data structures. It's a pair of functions—a "getter" and a "setter"—bundled together. The getter can "view" a piece of data deep inside a structure. The setter can "update" that piece of data, but it does so immutably, returning a completely new top-level object with the change applied.

### ⚙️ Solution Walkthrough
A conceptual example of a lens for an address's street property.
\`\`\`javascript
const streetLens = lens(
  (obj) => obj.address.street, // Getter
  (newStreet, obj) => ({...obj, address: {...obj.address, street: newStreet}}) // Setter
);
const user = { address: { street: '123 Main' } };

view(streetLens, user); // '123 Main'
set(streetLens, '456 Oak', user); // Returns a new user object with the updated street
\`\`\`
Lenses are highly composable, allowing you to build up paths to deeply nested data.

### 📚 Key Concepts
-   **Lens**: A functional optic for viewing and immutably updating parts of a data structure.
`,
'fp-intersection-arrays': `
### 💡 Problem Breakdown
The goal is to find the "intersection" of two arrays—that is, the set of elements that are present in both arrays. The result should be a new array containing only these common elements.

### ⚙️ Solution Walkthrough
An efficient way to solve this is to use a `Set` for fast lookups.
\`\`\`javascript
const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
};
intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
\`\`\`
### 📚 Key Concepts
-   **`Set`**: Used for efficient (`O(1)`) lookups to check for the presence of elements.
-   **`Array.prototype.filter()`**: The higher-order function used to declaratively build the resulting array.
`,
'fp-union-arrays': `
### 💡 Problem Breakdown
The "union" of two arrays is a new array containing all the unique elements from both input arrays.

### ⚙️ Solution Walkthrough
The most concise solution is to combine both arrays and then use a `Set` to automatically handle the deduplication.
\`\`\`javascript
const union = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};
union([1, 2, 3], [2, 3, 4]); // [1, 2, 3, 4]
\`\`\`
### 📚 Key Concepts
-   **`Set`**: An ideal data structure for problems involving uniqueness.
-   **Spread Syntax**: Used to combine the input arrays and to convert the final `Set` back into an array.
`,
'fp-negate-predicate': `
### 💡 Problem Breakdown
The `negate` utility is a higher-order function that takes a predicate function (one that returns `true` or `false`) and returns a new predicate function that returns the opposite boolean value.

### ⚙️ Solution Walkthrough
The `negate` function wraps the original predicate and applies the NOT (`!`) operator to its result.
\`\`\`javascript
const negate = (predicate) => (...args) => !predicate(...args);

const isEven = (n) => n % 2 === 0;
const isOdd = negate(isEven);

isOdd(3); // true
isOdd(4); // false
\`\`\`
### 📚 Key Concepts
-   **Higher-Order Function**: A function that takes and/or returns another function.
-   **Predicate Function**: A function that returns a boolean, often used with methods like `.filter()`.
`,
'fp-maybe-monad-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem about the "Maybe" monad (also called "Option"). It's a functional way to handle values that might be `null` or `undefined`. A Maybe is a container that can be in one of two states: `Just(value)` if a value is present, or `Nothing` if it's absent. You use `.map()` to operate on it, and the operation is only applied if the container is a `Just`.

### ⚙️ Solution Walkthrough
A conceptual example.
\`\`\`javascript
// Conceptual Maybe object
const user = { name: "Alice" }; // Maybe.Just({ name: "Alice" })
const noUser = null; // Maybe.Nothing

// const street = user.address.street; // This would throw an error
// With Maybe, you could do:
// Maybe.of(user).map(u => u.address).map(a => a.street);
// This chain would safely result in a 'Nothing' without throwing an error.
\`\`\`
The Maybe monad abstracts away null checks, allowing you to chain operations on potentially missing data in a clean, functional way.

### 📚 Key Concepts
-   **Maybe (Option) Monad**: A design pattern for safely handling nullish values.
`,
'fp-either-monad-conceptual': `
### 💡 Problem Breakdown
The "Either" monad is another conceptual pattern for handling operations that can fail. It's a container that can be in one of two states: `Right(value)` to represent a successful computation, or `Left(error)` to represent a failure. Like Maybe, you use `.map()` on it, but the mapping function is only ever applied to a `Right` value.

### ⚙️ Solution Walkthrough
A conceptual example of a function that might fail.
\`\`\`javascript
// Conceptual function that returns an Either
function findUser(id) {
  const user = db.find(id);
  return user ? Either.Right(user) : Either.Left("User not found");
}

// Chaining operations
// findUser(1)
//   .map(user => user.name)
//   .map(name => name.toUpperCase());
// If the user was found, the result is Right("ALICE").
// If not found, the result is Left("User not found"), and the maps are skipped.
\`\`\`
The Either monad provides a functional way to handle errors without using `try...catch` blocks, allowing errors to be passed down a chain of computations as values.

### 📚 Key Concepts
-   **Either Monad**: A design pattern for handling success and failure cases as explicit values.
`,
'fp-all-any-utilities': `
### 💡 Problem Breakdown
This involves creating standalone utility functions that mimic the behavior of the `Array.prototype.every` (`all`) and `Array.prototype.some` (`any`) methods.

### ⚙️ Solution Walkthrough
These functions take a predicate and an array as arguments.
\`\`\`javascript
const all = (predicate, list) => list.every(predicate);
const any = (predicate, list) => list.some(predicate);

const isEven = n => n % 2 === 0;
const nums = [2, 4, 7, 8];

all(isEven, nums); // false
any(isEven, nums); // true
\`\`\`
### 📚 Key Concepts
-   **Functional Utilities**: Creating small, reusable helper functions is a core part of functional programming.
`,
'fp-immutable-splice': `
### 💡 Problem Breakdown
The `.splice()` array method is powerful but **mutating**. The goal is to create a pure function that mimics its behavior for removing elements, but returns a new array instead of modifying the original.

### ⚙️ Solution Walkthrough
The solution uses `.slice()` to get the parts of the array before and after the removed section, and then concatenates them.
\`\`\`javascript
const immutableSplice = (arr, start, deleteCount) => {
  const startChunk = arr.slice(0, start);
  const endChunk = arr.slice(start + deleteCount);
  return [...startChunk, ...endChunk];
};

const original = [1, 2, 3, 4, 5];
const result = immutableSplice(original, 1, 2); // [1, 4, 5]
// 'original' is still [1, 2, 3, 4, 5]
\`\`\`
### 📚 Key Concepts
-   **Immutability**: A core principle of FP, ensuring that functions do not have side effects.
`,
};
