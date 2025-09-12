export const explanations: Record<string, string> = {
  'arrow-function-map': `
### 💡 Problem Breakdown
This problem combines two ES6 features: arrow functions and the \`.map()\` array method. The goal is to take an array of numbers and create a new array where each number has been doubled. Arrow functions provide a concise syntax for the callback function required by \`.map()\`.

### ⚙️ Solution Walkthrough
The solution uses \`.map()\` with a one-line arrow function that performs the doubling.
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]
\`\`\`
1.  **\`numbers.map(...)\`**: The \`.map()\` method creates a new array by calling a provided function on every element in the original array.
2.  **\`n => n * 2\`**: This is the arrow function.
    *   \`n\`: The parameter, representing each number from the array during iteration.
    *   \`=>\`: The arrow syntax.
    *   \`n * 2\`: The single expression that is the body of the function. Because there are no curly braces, its result is implicitly returned.

### 📚 Key Concepts
-   **Arrow Function**: A compact syntax for writing function expressions.
-   **\`Array.prototype.map()\`**: A standard array method for creating a new array by transforming each element of an existing array.
-   **Implicit Return**: A feature of single-expression arrow functions that makes code for callbacks very clean.
`,
  'template-literals': `
### 💡 Problem Breakdown
Template literals (or template strings) are a modern way to create strings in JavaScript. They allow for easy embedding of variables and expressions (interpolation) and support for multi-line strings, which were cumbersome to create before.

### ⚙️ Solution Walkthrough
The solution uses backticks (`` \` \``) to define the string and the \`\${...}\` syntax to embed variables.
\`\`\`javascript
const name = "Jane";
const item = "apples";

const message = \`Hello, \${name}!
Here are your \${item}.\`;
\`\`\`
1.  **Backticks (\` \`)**: Instead of single or double quotes, template literals use backticks.
2.  **Multi-line**: You can simply press Enter to create a new line within the string. No need for \`\\n\`.
3.  **Interpolation (\`\${...}\`)**: Any valid JavaScript expression inside the \`\${...}\` placeholder will be evaluated, and its result will be converted to a string and inserted at that position.

### 📚 Key Concepts
-   **Template Literals**: A new string syntax introduced in ES6.
-   **String Interpolation**: The process of embedding expressions inside a string literal.
`,
  'array-destructuring': `
### 💡 Problem Breakdown
Destructuring assignment is an ES6 feature that makes it possible to unpack values from arrays or properties from objects into distinct variables. This problem focuses on destructuring arrays.

### ⚙️ Solution Walkthrough
The solution uses square brackets on the left side of an assignment to create variables from the array elements.
\`\`\`javascript
const values = [1, 2, 3];
const [a, b, c] = values;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
\`\`\`
1.  **\`[a, b, c]\`**: This is the destructuring pattern. It creates three new variables: \`a\`, \`b\`, and \`c\`.
2.  **Assignment**: The first element of the \`values\` array is assigned to \`a\`, the second to \`b\`, and so on.

### 📚 Key Concepts
-   **Destructuring Assignment**: A syntax that allows you to unpack values from arrays or objects.
-   **Syntactic Sugar**: Destructuring is "syntactic sugar" for what would otherwise require multiple lines of code (e.g., \`const a = values[0];\`).
`,
  'object-destructuring': `
### 💡 Problem Breakdown
Similar to array destructuring, object destructuring allows you to unpack properties from an object into distinct variables. This is extremely common in modern JavaScript for working with objects and function parameters.

### ⚙️ Solution Walkthrough
The solution uses curly braces on the left side of an assignment to create variables whose names match the object's property keys.
\`\`\`javascript
const user = { name: "John", age: 30 };
const { name, age } = user;

console.log(name); // "John"
console.log(age); // 30
\`\`\`
1.  **\`{ name, age }\`**: This is the destructuring pattern. The variable names inside the braces must match the property keys on the object.
2.  **Assignment**: The value of the \`user.name\` property is assigned to the new \`name\` variable, and \`user.age\` is assigned to the \`age\` variable.

### 📚 Key Concepts
-   **Destructuring Assignment**: A powerful feature for extracting data from objects concisely.
`,
  'rest-parameters': `
### 💡 Problem Breakdown
The rest parameter syntax allows a function to accept an indefinite number of arguments as a true array. This is the modern replacement for the older, array-like \`arguments\` object.

### ⚙️ Solution Walkthrough
The \`...args\` syntax is used in the function definition to gather all passed arguments into an array.
\`\`\`javascript
function sum(...args) {
    // 'args' is a real array, so we can use .reduce()
    return args.reduce((total, current) => total + current, 0);
}

sum(1, 2, 3, 4); // 10
\`\`\`
1.  **\`...args\`**: The three dots followed by a name (here, \`args\`) is the rest parameter. It must be the last parameter in a function's definition.
2.  **True Array**: Unlike the old \`arguments\` object, \`args\` is a genuine JavaScript array, so all array methods are immediately available.

### 📚 Key Concepts
-   **Rest Parameters**: A syntax for representing an indefinite number of arguments as an array.
`,
  'spread-operator-arrays': `
### 💡 Problem Breakdown
The spread operator or spread syntax (\`...\`) is the opposite of rest parameters. It allows an iterable such as an array to be expanded into its individual elements. It's extremely useful for creating shallow copies of arrays and for combining arrays.

### ⚙️ Solution Walkthrough
The spread operator is used inside a new array literal to expand the elements of the source arrays.
\`\`\`javascript
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

const combined = [...arr1, ...arr2]; // ['a', 'b', 'c', 'd', 'e', 'f']
\`\`\`
1.  **\`...arr1\`**: This "spreads" the elements of \`arr1\` into the new array.
2.  **\`...arr2\`**: This then spreads the elements of \`arr2\`. The result is a new, combined array.

### 📚 Key Concepts
-   **Spread Syntax (\`...\`)**: Used to expand array elements in places where zero or more elements are expected.
`,
  'let-const-scope': `
### 💡 Problem Breakdown
This is a conceptual problem about a major change in ES6: the introduction of block-scoped variables with \`let\` and \`const\`. Before ES6, \`var\` was function-scoped, which often led to bugs, especially in loops.

### ⚙️ Solution Walkthrough
A conceptual demonstration of the difference in scope.
\`\`\`javascript
// 'var' is function-scoped
if (true) {
    var x = 5;
}
console.log(x); // 5 (x "leaked" out of the if-block)

// 'let' is block-scoped
if (true) {
    let y = 10;
}
// console.log(y); // ReferenceError: y is not defined
\`\`\`
1.  **Function Scope (\`var\`)**: The scope of a \`var\` variable is the entire function it's declared in, regardless of blocks.
2.  **Block Scope (\`let\`, \`const\`)**: The scope of a \`let\` or \`const\` variable is limited to the block (the code within \`{...}\`) in which it is defined. This is more predictable and helps prevent bugs.
3.  **\`const\`**: Works just like \`let\` in terms of scope, but the variable cannot be reassigned.

### 📚 Key Concepts
-   **Block Scope**: The scope created by a pair of curly braces.
-   **`let` & `const`**: The modern way to declare variables in JavaScript.
`,
  'default-parameters-es6': `
### 💡 Problem Breakdown
ES6 introduced a clean, declarative way to specify default values for function parameters. This avoids the need for older patterns like \`name = name || 'Guest';\`.

### ⚙️ Solution Walkthrough
A default value is assigned directly in the function's parameter list.
\`\`\`javascript
function greet(name = "Guest") {
    return \`Hello, \${name}!\`;
}

greet("Alice"); // "Hello, Alice!"
greet();        // "Hello, Guest!" (default is used)
\`\`\`
1.  **\`name = "Guest"\`**: This is the syntax. If the \`name\` argument is not provided or is explicitly \`undefined\`, it will be assigned the default value "Guest".

### 📚 Key Concepts
-   **Default Parameters**: A feature for specifying default values for function parameters.
`,
  'for-of-loop': `
### 💡 Problem Breakdown
The \`for...of\` loop is a modern (ES6) loop for iterating over "iterable" objects, such as arrays, strings, Maps, and Sets. It provides a cleaner syntax than a traditional \`for\` loop for simply accessing each *value* in a sequence.

### ⚙️ Solution Walkthrough
A \`for...of\` loop is used to iterate directly over the values of an array.
\`\`\`javascript
const letters = ['a', 'b', 'c'];
for (const letter of letters) {
    console.log(letter); // 'a', then 'b', then 'c'
}
\`\`\`
1.  **\`for (const letter of letters)\`**:
    *   \`letters\`: The iterable object (the array).
    *   \`letter\`: A variable that is assigned the value of the next item in the iterable on each loop iteration.
2.  **Simplicity**: This loop avoids the need for a counter variable (\`i\`) and index-based access (\`letters[i]\`), making the code more readable and less error-prone.

### 📚 Key Concepts
-   **\`for...of\` Loop**: A modern loop for iterating over the values of an iterable.
-   **Iterable Protocol**: A set of rules that, when implemented, make an object iterable.
`,
  'spread-operator-objects': `
### 💡 Problem Breakdown
The spread syntax (\`...\`) was extended to work with object literals in ES2018. It allows you to copy the own enumerable properties from one object into another, which is a very convenient way to create shallow copies and merge objects.

### ⚙️ Solution Walkthrough
A new object literal is created, and the source objects are "spread" into it.
\`\`\`javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
\`\`\`
1.  **\`{ ...obj1 }\`**: This copies all properties from \`obj1\` into the new object.
2.  **\`{ ...obj2 }\`**: This then copies all properties from \`obj2\`. Because \`obj2\` also has a property \`b\`, its value (\`3\`) overwrites the value from \`obj1\`.

### 📚 Key Concepts
-   **Spread Syntax (\`...\`) for Objects**: A modern syntax for copying properties between objects.
`,
  'promise-basics': `
### 💡 Problem Breakdown
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. This problem is about creating a basic promise that successfully completes.

### ⚙️ Solution Walkthrough
A new \`Promise\` is created. The function passed to it (the "executor") is given two functions: \`resolve\` and \`reject\`. We call \`resolve\` to indicate success.
\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  // Simulate an async operation
  setTimeout(() => {
    resolve("Success!");
  }, 500);
});

myPromise.then(result => {
  console.log(result); // "Success!"
});
\`\`\`
1.  **Executor Function**: \`(resolve, reject) => { ... }\` is run immediately.
2.  **\`resolve(value)\`**: This is called when the async operation is successful. The value passed to it is then sent to the \`.then()\` handler.
3.  **`.then(handler)`**: The \`.then\` method is used to schedule a callback to be executed when the promise is fulfilled.

### 📚 Key Concepts
-   **Promise**: An object representing a future result.
-   **Asynchronous Programming**: Handling operations (like network requests or timers) that don't complete immediately.
`,
  'async-await-basics': `
### 💡 Problem Breakdown
\`async/await\` is modern (ES2017) syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and debug.

### ⚙️ Solution Walkthrough
An \`async\` function is created which uses the \`await\` keyword to "pause" until a promise settles.
\`\`\`javascript
// A function that returns a promise
const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function myAsyncFunction() {
  console.log("Waiting...");
  await delay(1000); // Pauses execution here for 1 second
  console.log("Done!");
  return "Finished";
}
\`\`\`
1.  **\`async function\`**: The \`async\` keyword before a function declaration makes it an async function. Async functions always return a Promise.
2.  **\`await\`**: The \`await\` keyword can only be used inside an \`async\` function. It pauses the function's execution and waits for the Promise to resolve, then resumes and gives you the resolved value.

### 📚 Key Concepts
-   **`async/await`**: Modern syntax for handling Promises that improves readability.
`,
  'es6-map-data-structure': `
### 💡 Problem Breakdown
A \`Map\` is an ES6 data structure for key-value pairs. Unlike plain objects, a \`Map\` allows keys of any type (not just strings/symbols), maintains insertion order, and has a useful \`.size\` property.

### ⚙️ Solution Walkthrough
A \`Map\` is created and its basic methods are used.
\`\`\`javascript
const myMap = new Map();

// .set(key, value)
myMap.set('name', 'John');
myMap.set(1, 'is a number key');

// .get(key)
myMap.get('name'); // "John"

// .has(key)
myMap.has(1); // true

// .size
myMap.size; // 2
\`\`\`
### 📚 Key Concepts
-   **`Map`**: A built-in data structure for key-value pairs with advantages over plain objects for map-like collections.
`,
  'es6-set-data-structure': `
### 💡 Problem Breakdown
A \`Set\` is an ES6 data structure that lets you store a collection of unique values of any type. It's useful for tasks like removing duplicate elements from an array.

### ⚙️ Solution Walkthrough
A \`Set\` is created and its basic methods are used.
\`\`\`javascript
const mySet = new Set();

// .add(value)
mySet.add(1);
mySet.add(5);
mySet.add(5); // This is ignored, as 5 is already in the set

// .has(value)
mySet.has(1); // true

// .delete(value)
mySet.delete(5);

// .size
mySet.size; // 1
\`\`\`
### 📚 Key Concepts
-   **`Set`**: A built-in data structure for storing unique values.
`,
  'symbol-data-type-es6': `
### 💡 Problem Breakdown
\`Symbol\` is a primitive data type introduced in ES6. The value of a symbol is unique and immutable. Symbols are often used as unique property keys for objects to avoid naming collisions.

### ⚙️ Solution Walkthrough
A symbol is created and used as an object key.
\`\`\`javascript
const id = Symbol('id'); // The description 'id' is for debugging

const user = {
  name: 'Test',
  [id]: 123 // Use the symbol as a key
};

// Symbol keys are ignored by JSON.stringify and Object.keys
console.log(Object.keys(user)); // ['name']

// Access the property using the symbol
console.log(user[id]); // 123
\`\`\`
1.  **Creation**: \`Symbol()\` creates a new, unique symbol.
2.  **Usage**: It's used as a computed property key to add a "hidden" property that won't clash with any other string-based keys.

### 📚 Key Concepts
-   **Symbol**: A unique and immutable primitive value.
`,
  'destructuring-with-aliases': `
### 💡 Problem Breakdown
When destructuring an object, you might want to create a variable with a different name from the property key. This is done using aliases.

### ⚙️ Solution Walkthrough
The colon syntax is used in the destructuring pattern to create an alias.
\`\`\`javascript
const obj = { n: 'John', a: 30 };
const { n: name, a: age } = obj;

console.log(name); // "John"
console.log(age);  // 30
// console.log(n); // ReferenceError: n is not defined
\`\`\`
1.  **`n: name`**: This means "find the property named \`n\` on the object, and create a new variable named \`name\` with its value."

### 📚 Key Concepts
-   **Destructuring Aliases**: A syntax for renaming variables during destructuring.
`,
  'destructuring-with-defaults': `
### 💡 Problem Breakdown
When destructuring, you can provide a default value for a property in case it doesn't exist on the object being destructured.

### ⚙️ Solution Walkthrough
The equals sign is used in the destructuring pattern to provide a default value.
\`\`\`javascript
const obj = { name: 'John' };
// 'role' does not exist on obj
const { name, role = 'user' } = obj;

console.log(name); // "John"
console.log(role); // "user"
\`\`\`
1.  **`role = 'user'`**: This means "find the property named \`role\`. If it's \`undefined\`, use the default value 'user'."

### 📚 Key Concepts
-   **Destructuring Defaults**: A syntax for providing fallback values when destructuring.
`,
  'array-destructuring-skip': `
### 💡 Problem Breakdown
When destructuring an array, you can skip elements you're not interested in by using a comma as a placeholder.

### ⚙️ Solution Walkthrough
An empty spot with a comma is used in the destructuring pattern to skip an element.
\`\`\`javascript
const values = ["one", "two", "three"];
const [first, , third] = values;

console.log(first); // "one"
console.log(third); // "three"
\`\`\`
1.  **`, ,`**: The extra comma effectively skips the element at index 1 ("two").

### 📚 Key Concepts
-   **Destructuring Assignment**: A flexible syntax for unpacking array elements.
`,
  'array-destructuring-rest': `
### 💡 Problem Breakdown
When destructuring an array, you can use the rest syntax (\`...\`) to collect the remaining elements into a new array.

### ⚙️ Solution Walkthrough
The rest syntax is used as the last element in the destructuring pattern.
\`\`\`javascript
const values = [1, 2, 3, 4, 5];
const [first, ...rest] = values;

console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
\`\`\`
1.  **`...rest`**: This must be the last element in an array destructuring pattern. It gathers all remaining elements into a new array called \`rest\`.

### 📚 Key Concepts
-   **Rest Syntax in Destructuring**: A powerful feature for splitting an array into a head and tail.
`,
  'promise-catch': `
### 💡 Problem Breakdown
This problem focuses on error handling with Promises. The \`.catch()\` method provides a way to handle any errors that occur in the promise chain, such as a promise being rejected.

### ⚙️ Solution Walkthrough
A promise is created that immediately rejects. The \`.catch()\` method is chained to handle the rejection.
\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

myPromise
  .then(result => console.log(result)) // This part is skipped
  .catch(error => console.log("Caught:", error)); // "Caught: Something went wrong!"
\`\`\`
1.  **`reject(reason)`**: This is called to indicate the promise has failed. The reason (usually an \`Error\` object) is passed to the \`.catch()\` handler.
2.  **`.catch(handler)`**: Schedules a callback to be executed if the promise is rejected.

### 📚 Key Concepts
-   **Promise Error Handling**: Using \`.catch()\` is essential for robust asynchronous code to prevent "unhandled promise rejection" errors.
`,
  'promise-finally': `
### 💡 Problem Breakdown
The \`.finally()\` method is used to specify a callback that will be executed when a promise is "settled" – that is, either fulfilled (resolved) or rejected. It's useful for cleanup code that needs to run regardless of the outcome, like hiding a loading spinner.

### ⚙️ Solution Walkthrough
A \`.finally()\` block is added to a promise chain.
\`\`\`javascript
new Promise(resolve => resolve("Success"))
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => {
    console.log("This will run no matter what.");
  });
\`\`\`
1.  **`.finally(handler)`**: The handler function receives no arguments and its return value is ignored.

### 📚 Key Concepts
-   **`.finally()`**: A method for running cleanup code after a promise settles.
`,
  'promise-all': `
### 💡 Problem Breakdown
\`Promise.all()\` is a helper function that takes an array of promises and returns a new promise. This new promise resolves when *all* of the input promises have resolved, and it provides an array of their results. If *any* of the input promises reject, \`Promise.all()\` immediately rejects with the reason of the first promise that rejected.

### ⚙️ Solution Walkthrough
Two promises are created, and \`Promise.all()\` is used to wait for both.
\`\`\`javascript
const p1 = Promise.resolve(3);
const p2 = 42; // Not a promise, treated as a resolved promise
const p3 = new Promise(res => setTimeout(() => res("foo"), 100));

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 42, "foo"]
});
\`\`\`
### 📚 Key Concepts
-   **`Promise.all()`**: A method for concurrently executing multiple asynchronous operations and waiting for them all to complete.
`,
  'promise-race': `
### 💡 Problem Breakdown
\`Promise.race()\` is a helper function that takes an array of promises. It returns a new promise that settles (either resolves or rejects) as soon as the *first* promise in the array settles.

### ⚙️ Solution Walkthrough
Two promises with different delays are passed to \`Promise.race()\`.
\`\`\`javascript
const p1 = new Promise(res => setTimeout(() => res("one"), 500));
const p2 = new Promise(res => setTimeout(() => res("two"), 100));

Promise.race([p1, p2]).then(result => {
  console.log(result); // "two"
});
\`\`\`
1.  **First to Settle**: \`p2\` will resolve after 100ms, which is before \`p1\` resolves. Therefore, the promise returned by \`Promise.race()\` will resolve with the value "two".

### 📚 Key Concepts
-   **`Promise.race()`**: A method for handling multiple promises where you only care about the result of the first one to finish.
`,
  'es6-classes-basic': `
### 💡 Problem Breakdown
This is an introduction to Object-Oriented Programming (OOP) using the modern \`class\` syntax. A class is a blueprint for creating objects.

### ⚙️ Solution Walkthrough
A \`Person\` class is defined with a constructor and a method.
\`\`\`javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return \`Hi, \${this.name}\`;
  }
}
const p = new Person('Test');
p.greet(); // "Hi, Test"
\`\`\`
1.  **`class Person`**: Declares the class.
2.  **`constructor()`**: A special method for initializing an instance of the class.
3.  **`greet()`**: A method (function) that belongs to the class.

### 📚 Key Concepts
-   **Class**: A template for creating objects.
-   **Constructor**: A method for initializing an object's state.
-   **Instance**: An object created from a class.
`,
  'es6-modules-conceptual': `
### 💡 Problem Breakdown
ES6 introduced a standardized module system to JavaScript. Modules allow you to split your code into separate, reusable files. You can \`export\` variables, functions, or classes from one file and \`import\` them for use in another.

### ⚙️ Solution Walkthrough
A conceptual example of exporting and importing.
\`\`\`javascript
// --- file: math.js ---
export const add = (a, b) => a + b;
export const PI = 3.14;

// --- file: main.js ---
import { add, PI } from './math.js';
console.log(add(2, 3)); // 5
\`\`\`
1.  **`export`**: The \`export\` keyword makes functions, variables, or classes available to other files.
2.  **`import`**: The \`import\` keyword is used to bring exported members into the current file's scope.

### 📚 Key Concepts
-   **Modules**: Self-contained units of code that can be shared and reused.
-   **`import`/`export`**: The syntax for using ES6 modules.
`,
  'object-property-shorthand': `
### 💡 Problem Breakdown
This ES6 feature provides a more concise syntax for creating object literals when the variable names are the same as the property keys.

### ⚙️ Solution Walkthrough
An object is created from variables without explicitly writing the key-value colon.
\`\`\`javascript
const name = "Test";
const age = 99;

// Instead of { name: name, age: age }
const user = { name, age }; // { name: "Test", age: 99 }
\`\`\`
### 📚 Key Concepts
-   **Shorthand Property Names**: Syntactic sugar for creating object literals.
`,
  'computed-property-names-es6': `
### 💡 Problem Breakdown
This ES6 feature allows you to use an expression (like a variable) as the property key when creating an object literal.

### ⚙️ Solution Walkthrough
A variable is placed inside square brackets \`[]\` in the key position.
\`\`\`javascript
const key = 'dynamic_key';
const obj = {
  [key]: 'value'
};
// obj is { dynamic_key: 'value' }
\`\`\`
### 📚 Key Concepts
-   **Computed Property Names**: A syntax for dynamically setting property keys.
`,
  'string-methods-es6': `
### 💡 Problem Breakdown
ES6 added several useful methods to the \`String\` prototype for common searching tasks.

### ⚙️ Solution Walkthrough
Demonstrating the new methods.
\`\`\`javascript
const str = "Hello world";
str.startsWith("Hello"); // true
str.endsWith("world");   // true
str.includes("lo w");    // true
\`\`\`
1.  **`.startsWith()`**: Checks if a string begins with the characters of another string.
2.  **`.endsWith()`**: Checks if a string ends with the characters of another string.
3.  **`.includes()`**: Checks if a string contains another string.

### 📚 Key Concepts
-   **String Manipulation**: ES6 provides more declarative methods for working with strings.
`,
  'array-from-es6': `
### 💡 Problem Breakdown
\`Array.from()\` is a static method that creates a new, shallow-copied \`Array\` instance from an array-like or iterable object.

### ⚙️ Solution Walkthrough
A string, which is an iterable, is converted into an array of characters.
\`\`\`javascript
const str = "abc";
const arr = Array.from(str); // ['a', 'b', 'c']
\`\`\`
### 📚 Key Concepts
-   **`Array.from()`**: A versatile method for creating arrays from other data types.
`,
  'array-find-es6': `
### 💡 Problem Breakdown
The \`.find()\` method returns the **value** of the first element in an array that satisfies a provided testing function. If no values satisfy the function, \`undefined\` is returned.

### ⚙️ Solution Walkthrough
\`.find()\` is used with a callback to find a specific number.
\`\`\`javascript
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(element => element > 10); // 12
\`\`\`
### 📚 Key Concepts
-   **`Array.prototype.find()`**: A declarative method for searching for an element in an array.
`,
  'array-findindex-es6': `
### 💡 Problem Breakdown
The \`.findIndex()\` method is similar to \`.find()\`, but it returns the **index** of the first element that satisfies the testing function. If no element is found, it returns -1.

### ⚙️ Solution Walkthrough
\`.findIndex()\` is used to find the position of a specific number.
\`\`\`javascript
const numbers = [5, 8, 12, 130, 44];
const index = numbers.findIndex(element => element > 10); // 2
\`\`\`
### 📚 Key Concepts
-   **`Array.prototype.findIndex()`**: A method for finding the index of an element that matches a condition.
`,
  'number-isinteger-es6': `
### 💡 Problem Breakdown
\`Number.isInteger()\` is a static method that determines whether the passed value is an integer. It's more robust than checks like \`x % 1 === 0\`.

### ⚙️ Solution Walkthrough
The method is tested with different values.
\`\`\`javascript
Number.isInteger(123);   // true
Number.isInteger(123.0); // true
Number.isInteger(123.4); // false
Number.isInteger("123"); // false (it does not coerce type)
\`\`\`
### 📚 Key Concepts
-   **`Number.isInteger()`**: A reliable method for type-checking integers.
`,
  'object-is-es6': `
### 💡 Problem Breakdown
\`Object.is()\` provides a stricter value comparison than \`===\`. It treats \`NaN\` as equal to itself and distinguishes between \`-0\` and \`+0\`.

### ⚙️ Solution Walkthrough
Comparing special number values.
\`\`\`javascript
Object.is(NaN, NaN); // true
NaN === NaN;         // false

Object.is(-0, +0); // false
-0 === +0;         // true
\`\`\`
### 📚 Key Concepts
-   **`Object.is()`**: A method for a more precise equality check in certain edge cases.
`,
  'optional-chaining-operator': `
### 💡 Problem Breakdown
The optional chaining operator (\`?.\`) provides a way to safely access deep properties of an object without having to write long chains of existence checks.

### ⚙️ Solution Walkthrough
The \`?.\` operator is used to prevent an error when accessing a missing property.
\`\`\`javascript
const user = { name: 'test' };
// Without optional chaining, this would throw a TypeError:
// const street = user.address.street;

// With optional chaining:
const street = user?.address?.street; // undefined
\`\`\`
1.  **\`?.\`**: If the value on the left is \`null\` or \`undefined\`, the expression short-circuits and returns \`undefined\`.

### 📚 Key Concepts
-   **Optional Chaining (\`?.\`)**: A modern syntax for safe property access.
`,
  'nullish-coalescing-operator': `
### 💡 Problem Breakdown
The nullish coalescing operator (\`??\`) is a logical operator that returns its right-hand side operand when its left-hand side is \`null\` or \`undefined\`. It's a more precise way to provide default values than the logical OR (\`||\`) operator, which triggers for all "falsy" values (like \`0\` or \`''\`).

### ⚙️ Solution Walkthrough
Providing a default value for a nullish property.
\`\`\`javascript
const config = { speed: 0, theme: null };
const theme = config.theme ?? 'light'; // 'light'
const speed = config.speed ?? 100;   // 0
\`\`\`
### 📚 Key Concepts
-   **Nullish Coalescing Operator (\`??\`)**: A logical operator for providing defaults for nullish values.
`,
  'promise-allsettled': `
### 💡 Problem Breakdown
\`Promise.allSettled()\` is a promise combinator that waits for all given promises to settle (either fulfill or reject). It's useful when you have multiple independent async tasks and you want to know the outcome of each one, regardless of whether others fail.

### ⚙️ Solution Walkthrough
\`Promise.allSettled()\` is called with an array containing one resolving and one rejecting promise.
\`\`\`javascript
const p1 = Promise.resolve('Success');
const p2 = Promise.reject('Failure');

Promise.allSettled([p1, p2]).then(results => {
  console.log(results);
  /* [
    { status: 'fulfilled', value: 'Success' },
    { status: 'rejected', reason: 'Failure' }
  ] */
});
\`\`\`
### 📚 Key Concepts
-   **`Promise.allSettled()`**: A method to get the outcome of every promise in an iterable.
`,
  'promise-any': `
### 💡 Problem Breakdown
\`Promise.any()\` takes an array of promises and returns a single promise that resolves as soon as *any* of the input promises resolve. It rejects only if *all* of the input promises reject.

### ⚙️ Solution Walkthrough
\`Promise.any()\` is used with one rejecting and one resolving promise.
\`\`\`javascript
const p1 = Promise.reject('Failure');
const p2 = new Promise(res => setTimeout(() => res('Success'), 100));

Promise.any([p1, p2]).then(result => {
  console.log(result); // "Success"
});
\`\`\`
### 📚 Key Concepts
-   **`Promise.any()`**: A method to get the value of the first promise to fulfill.
`,
  'string-matchall': `
### 💡 Problem Breakdown
The \`.matchAll()\` method returns an iterator of all results matching a string against a regular expression, including capturing groups. This is an improvement over \`.match()\` with a global flag, which doesn't return capture groups.

### ⚙️ Solution Walkthrough
\`.matchAll()\` is used to find all occurrences of a pattern.
\`\`\`javascript
const str = 'test1test2';
const regex = /t(e)(st(\\d?))/g; // Must have the global 'g' flag
const matches = [...str.matchAll(regex)];

console.log(matches[0][0]); // "test1" (full match)
console.log(matches[0][1]); // "e" (first capture group)
\`\`\`
### 📚 Key Concepts
-   **`String.prototype.matchAll()`**: A modern method for comprehensive regex matching.
`,
  'dynamic-import': `
### 💡 Problem Breakdown
Dynamic \`import()\` allows you to load an ES module on demand. Unlike static \`import\`, which must be at the top level of a file, \`import()\` can be used anywhere (e.g., inside an \`if\` block or an event handler). It returns a promise that resolves to the module object.

### ⚙️ Solution Walkthrough
A conceptual example of loading a module when needed.
\`\`\`javascript
async function onButtonClick() {
  if (someCondition) {
    const { utilityFunction } = await import('./utils.js');
    utilityFunction();
  }
}
\`\`\`
### 📚 Key Concepts
-   **Dynamic \`import()\`**: A feature for "code-splitting" and loading modules on demand.
`,
  'weakmap-es6': `
### 💡 Problem Breakdown
A \`WeakMap\` is a special type of map where the keys must be objects. The references to the keys are held "weakly." This means that if there are no other references to an object used as a key, the garbage collector can remove it, and its corresponding value will also be removed from the \`WeakMap\`.

### ⚙️ Solution Walkthrough
A conceptual demonstration of its garbage collection behavior.
\`\`\`javascript
let myObj = { name: "data" };
const weakMap = new WeakMap();
weakMap.set(myObj, "some metadata");

// Now, if we lose the only other reference to myObj...
myObj = null;

// Eventually, the garbage collector will remove the object
// and its entry from the weakMap automatically.
\`\`\`
### 📚 Key Concepts
-   **`WeakMap`**: A map with weakly-held keys, useful for associating metadata with objects without preventing them from being garbage collected.
`,
  'weakset-es6': `
### 💡 Problem Breakdown
A \`WeakSet\` is similar to a \`WeakMap\`. It's a collection of objects that are held weakly. If an object in the \`WeakSet\` has no other references, it can be garbage collected.

### ⚙️ Solution Walkthrough
A conceptual demonstration of its use.
\`\`\`javascript
const weakSet = new WeakSet();
let myObj = { active: true };
weakSet.add(myObj);

// Now, if myObj is no longer reachable...
myObj = null;

// The object will eventually be removed from the weakSet by the GC.
\`\`\`
### 📚 Key Concepts
-   **`WeakSet`**: A set for storing objects weakly, useful for tracking object membership without causing memory leaks.
`,
  'iterator-protocol-conceptual': `
### 💡 Problem Breakdown
This is a conceptual explanation of a core ES6 protocol. An object is considered an **iterable** if it implements a method with the key \`Symbol.iterator\`. This method must return an **iterator** object. The iterator object must have a \`.next()\` method that returns an object with \`value\` and \`done\` properties.

### ⚙️ Solution Walkthrough
A simple iterator example.
\`\`\`javascript
const myIterator = {
  data: [1, 2],
  index: 0,
  next: function() {
    if (this.index < this.data.length) {
      return { value: this.data[this.index++], done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
};
\`\`\`
### 📚 Key Concepts
-   **Iterator Protocol**: The set of rules that allow constructs like \`for...of\` to traverse a data structure.
`,
  'generator-function': `
### 💡 Problem Breakdown
A generator function is a special type of function that can be paused and resumed. It simplifies the process of creating iterators.

### ⚙️ Solution Walkthrough
A generator function is defined with \`function*\` and uses the \`yield\` keyword.
\`\`\`javascript
function* myGenerator() {
  console.log("First");
  yield 1;
  console.log("Second");
  yield 2;
}
const iterator = myGenerator();
iterator.next(); // Logs "First", returns { value: 1, done: false }
iterator.next(); // Logs "Second", returns { value: 2, done: false }
\`\`\`
1.  **`function*`**: The syntax to define a generator.
2.  **`yield`**: Pauses the function's execution and returns the value on its right.

### 📚 Key Concepts
-   **Generator Function**: A factory for iterators.
-   **`yield`**: The keyword used to pause and resume a generator function.
`,
  'bigint-es2020': `
### 💡 Problem Breakdown
\`BigInt\` is a primitive type used to represent whole numbers larger than the maximum safe integer for a regular \`Number\` (which is 2^53 - 1).

### ⚙️ Solution Walkthrough
A \`BigInt\` is created by appending \`n\` to the end of an integer literal.
\`\`\`javascript
const maxSafeInt = Number.MAX_SAFE_INTEGER;
const largeNumber = maxSafeInt + 2; // Inaccurate

const largeBigInt = BigInt(maxSafeInt) + 2n; // Accurate
\`\`\`
### 📚 Key Concepts
-   **`BigInt`**: A numeric primitive for arbitrary-precision integers.
`,
  'globalthis-es2020': `
### 💡 Problem Breakdown
\`globalThis\` provides a universal way to access the global object, regardless of the JavaScript environment (e.g., \`window\` in browsers, \`global\` in Node.js, \`self\` in web workers).

### ⚙️ Solution Walkthrough
Accessing the global object.
\`\`\`javascript
// In a browser:
console.log(globalThis === window); // true

// In Node.js:
console.log(globalThis === global); // true
\`\`\`
### 📚 Key Concepts
-   **`globalThis`**: A standard property to access the global object.
`,
  'logical-assignment-operators': `
### 💡 Problem Breakdown
These ES2021 operators (\`&&=\`, \`||=\`, \`??=\`) combine a logical operation with an assignment.

### ⚙️ Solution Walkthrough
Demonstrating the operators.
\`\`\`javascript
let a = { prop: 1 };
let b = { prop: null };
let c = { prop: 0 };

a.prop &&= 2; // a.prop becomes 2
b.prop ||= 5; // b.prop becomes 5
c.prop ??= 10; // c.prop remains 0
\`\`\`
-   **`x &&= y`** is equivalent to **`x && (x = y)`**.
-   **`x ||= y`** is equivalent to **`x || (x = y)`**.
-   **`x ??= y`** is equivalent to **`x ?? (x = y)`**.

### 📚 Key Concepts
-   **Logical Assignment**: A concise syntax for conditional assignment.
`,
  'numeric-separators': `
### 💡 Problem Breakdown
ES2021 introduced the ability to use underscores (\`_\`) as separators in numeric literals to improve readability.

### ⚙️ Solution Walkthrough
Using the separator in a large number.
\`\`\`javascript
const billion = 1_000_000_000;
console.log(billion); // 1000000000
\`\`\`
1.  **Readability**: The JavaScript engine ignores the underscores. They are purely for human readability.

### 📚 Key Concepts
-   **Numeric Separators**: Syntactic sugar for improving code clarity.
`,
  'array-at-method': `
### 💡 Problem Breakdown
The \`.at()\` method (ES2022) provides a simple way to access array elements, with the key advantage of allowing negative indices to count back from the end of the array.

### ⚙️ Solution Walkthrough
Accessing the last element of an array.
\`\`\`javascript
const arr = ['a', 'b', 'c', 'd'];
// Old way to get the last element:
arr[arr.length - 1]; // 'd'
// New way with .at():
arr.at(-1); // 'd'
\`\`\`
### 📚 Key Concepts
-   **`.at()`**: A method for indexed element access that supports negative indices.
`,
  'object-hasown': `
### 💡 Problem Breakdown
\`Object.hasOwn()\` (ES2022) is a static method that is the recommended replacement for \`Object.prototype.hasOwnProperty\`. It's safer because it works correctly even if an object has a property named "hasOwnProperty" or has a \`null\` prototype.

### ⚙️ Solution Walkthrough
Using \`Object.hasOwn()\` to check for a property.
\`\`\`javascript
const obj = { prop: 1 };
Object.hasOwn(obj, 'prop'); // true
Object.hasOwn(obj, 'toString'); // false (it's inherited)
\`\`\`
### 📚 Key Concepts
-   **`Object.hasOwn()`**: The modern, safe way to check for an object's own properties.
`,
  'async-await-error-handling': `
### 💡 Problem Breakdown
A key advantage of \`async/await\` is that it allows you to handle errors from asynchronous operations using standard, synchronous \`try...catch\` blocks, which is often cleaner than chaining \`.catch()\` methods.

### ⚙️ Solution Walkthrough
A rejecting promise is awaited inside a \`try\` block.
\`\`\`javascript
async function test() {
  try {
    const result = await Promise.reject('Oops!');
    console.log(result); // This line is never reached
  } catch (error) {
    console.log('Caught:', error); // "Caught: Oops!"
  }
}
\`\`\`
1.  **`await` Rejection**: When you \`await\` a promise that rejects, it throws an exception.
2.  **`try...catch`**: This exception can be caught by a standard \`try...catch\` block, just like a synchronous error.

### 📚 Key Concepts
-   **Asynchronous Error Handling**: Using \`try...catch\` with \`async/await\` provides a unified error handling model for both sync and async code.
`,
'destructuring-function-params': `
### 💡 Problem Breakdown
Object destructuring can be used directly in a function's parameter list. This is a very common and powerful pattern for handling named arguments or options objects, making function signatures clearer and more flexible.

### ⚙️ Solution Walkthrough
The function `displayUser` expects a single object as its argument. Inside the parameter definition, destructuring is used to immediately pull the `name` and `age` properties into local variables.
\`\`\`javascript
function displayUser({ name, age, role = 'guest' }) {
    return \`User: \${name}, Age: \${age}, Role: \${role}\`;
}
const user = { name: 'Alice', age: 30 };
displayUser(user);
\`\`\`
1.  **`{ name, age, role = 'guest' }`**: This is the destructuring pattern in the parameter list. It unpacks the properties from the incoming object.
2.  **Defaults**: You can also combine this with default values (e.g., `role = 'guest'`).
3.  **Readability**: This makes it clear which properties the function depends on and allows callers to pass arguments in any order within the object.

### 📚 Key Concepts
-   **Parameter Destructuring**: A concise and readable way to handle named arguments passed as an object.
`,
'array-flat': `
### 💡 Problem Breakdown
The `.flat()` method (ES2019) is used to create a new array with all sub-array elements concatenated into it recursively up to a specified depth. It's a simple way to "flatten" a nested array.

### ⚙️ Solution Walkthrough
The `.flat()` method is called on a nested array.
\`\`\`javascript
const nested = [1, [2, 3], [4, [5]]];

// Default depth of 1
nested.flat(); // [1, 2, 3, 4, [5]]

// With a specified depth
nested.flat(2); // [1, 2, 3, 4, 5]

// To flatten completely, regardless of depth
nested.flat(Infinity); // [1, 2, 3, 4, 5]
\`\`\`
1.  **`array.flat(depth)`**: The optional `depth` argument specifies how deep a nested array structure should be flattened. It defaults to 1.

### 📚 Key Concepts
-   **`Array.prototype.flat()`**: A method for flattening nested arrays into a new array.
`,
'array-flatmap': `
### 💡 Problem Breakdown
The `.flatMap()` method (ES2019) is a combination of `.map()` followed by `.flat()` with a depth of 1. It's more efficient than doing the two operations separately.

### ⚙️ Solution Walkthrough
`.flatMap()` is used to map each element to an array and then flatten the result.
\`\`\`javascript
const arr = [1, 2, 3];

// Goal: create an array with each number and its double
const result = arr.flatMap(x => [x, x * 2]);
// [[1, 2], [2, 4], [3, 6]] is created by map, then flattened.
// result is [1, 2, 2, 4, 3, 6]
\`\`\`
### 📚 Key Concepts
-   **`Array.prototype.flatMap()`**: A convenient and efficient method for mapping and then flattening an array.
`,
'object-fromentries': `
### 💡 Problem Breakdown
`Object.fromEntries()` (ES2019) is the inverse of `Object.entries()`. It transforms a list of key-value pairs (like an array of arrays or a `Map`) into a new object.

### ⚙️ Solution Walkthrough
A `Map` is converted into a plain object.
\`\`\`javascript
const map = new Map([['a', 1], ['b', 2]]);
const obj = Object.fromEntries(map); // { a: 1, b: 2 }
\`\`\`
### 📚 Key Concepts
-   **`Object.fromEntries()`**: A method for creating an object from an iterable of key-value pairs.
`,
'string-trimstart-trimend': `
### 💡 Problem Breakdown
These methods (ES2019) provide more granular control over removing whitespace than the original `.trim()` method. `.trimStart()` (or its alias `.trimLeft()`) removes whitespace only from the beginning of a string, and `.trimEnd()` (or `.trimRight()`) removes it only from the end.

### ⚙️ Solution Walkthrough
The methods are called on a string with leading and trailing whitespace.
\`\`\`javascript
const str = "   hello   ";
str.trimStart(); // "hello   "
str.trimEnd();   // "   hello"
\`\`\`
### 📚 Key Concepts
-   **String Manipulation**: Modern additions to the string prototype for more specific use cases.
`,
'symbol-description': `
### 💡 Problem Breakdown
When creating a `Symbol`, you can provide an optional string description for debugging purposes. The `.description` property (ES2019) allows you to access this description.

### ⚙️ Solution Walkthrough
A symbol is created with a description, which is then accessed.
\`\`\`javascript
const mySymbol = Symbol('My Description');
mySymbol.description; // "My Description"
\`\`\`
### 📚 Key Concepts
-   **Symbol**: A unique primitive value. The description is purely for debugging and does not affect its uniqueness.
`,
'well-known-symbol-iterator': `
### 💡 Problem Breakdown
An object can become "iterable" (meaning it can be used in a `for...of` loop) by implementing the `Symbol.iterator` method. This method must return an iterator object. Generator functions are a very convenient way to implement this.

### ⚙️ Solution Walkthrough
A custom object `myIterable` implements `Symbol.iterator` using a generator method.
\`\`\`javascript
const myIterable = {
  from: 1, to: 3,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  }
};

for (const num of myIterable) {
  console.log(num); // 1, 2, 3
}
\`\`\`
### 📚 Key Concepts
-   **Iterable Protocol**: The set of rules for making an object iterable.
-   **`Symbol.iterator`**: A "well-known symbol" that specifies the default iterator for an object.
-   **Generator Method**: A concise way to define an iterator for a class or object.
`,
'generator-yield-delegation-es6': `
### 💡 Problem Breakdown
The `yield*` expression is used to delegate from one generator to another iterable (like another generator or an array). This allows you to compose generators together.

### ⚙️ Solution Walkthrough
`gen2` uses `yield*` to yield all the values from `gen1` before yielding its own value.
\`\`\`javascript
function* gen1() { yield 1; yield 2; }
function* gen2() {
  yield* gen1(); // Delegate to gen1
  yield 3;
}
const iterator = gen2();
[...iterator]; // [1, 2, 3]
\`\`\`
### 📚 Key Concepts
-   **`yield*`**: An expression for delegating to another iterable.
`,
'generator-passing-values': `
### 💡 Problem Breakdown
Generators can not only produce values (`yield value`) but also consume values from the outside. The value passed to the `.next(value)` method becomes the return value of the `yield` expression that paused the generator.

### ⚙️ Solution Walkthrough
A two-way generator asks for a name and then uses the name passed into its next invocation.
\`\`\`javascript
function* twoWayGenerator() {
  const name = yield "What's your name?"; // Pauses here, returns the string
  yield \`Hello, \${name}!\`; // Resumes with the value passed to .next()
}

const it = twoWayGenerator();
it.next().value;      // "What's your name?"
it.next('Alice').value; // "Hello, Alice!"
\`\`\`
### 📚 Key Concepts
-   **Two-Way Generators**: Generators can be used for more complex, co-routine-like behavior where they both produce and consume data.
`,
'proxy-get-trap': `
### 💡 Problem Breakdown
An ES6 `Proxy` lets you create a "wrapper" around a target object. You can define "traps" to intercept fundamental operations. The `get` trap is called whenever a property is read from the proxy.

### ⚙️ Solution Walkthrough
A proxy is created with a `get` trap that adds a message before returning the property's value.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  get: function(obj, prop) {
    return \`Accessing property '\${String(prop)}', value is: \${obj[prop]}\`;
  }
};
const proxy = new Proxy(target, handler);
proxy.a; // "Accessing property 'a', value is: 1"
\`\`\`
### 📚 Key Concepts
-   **Proxy**: An object that wraps another object and intercepts operations.
-   **Trap**: A method on the handler that provides access to an operation (e.g., the `get` trap).
`,
'proxy-set-trap': `
### 💡 Problem Breakdown
The `set` trap on a Proxy is called whenever there is an attempt to set a property on the proxy object. This is extremely useful for implementing validation or logging.

### ⚙️ Solution Walkthrough
A proxy's `set` trap is used to ensure that only numeric values can be assigned to the `age` property.
\`\`\`javascript
const target = { age: 0 };
const handler = {
  set: function(obj, prop, value) {
    if (prop === 'age' && typeof value === 'number') {
      obj[prop] = value;
      return true; // Indicate success
    }
    return false; // Indicate failure
  }
};
const proxy = new Proxy(target, handler);
proxy.age = 30;         // Success
// proxy.age = "thirty"; // Fails
\`\`\`
### 📚 Key Concepts
-   **Proxy**: An object for creating custom behavior for fundamental operations.
-   **Validation**: Using a `set` trap is a powerful way to enforce data integrity.
`,
'reflect-api-get-set': `
### 💡 Problem Breakdown
The `Reflect` object is a built-in object that provides methods for interceptable JavaScript operations. The methods on `Reflect` have a one-to-one mapping with the traps for Proxies. It's considered best practice to use `Reflect` methods inside proxy traps to perform the default underlying operation.

### ⚙️ Solution Walkthrough
`Reflect.get` and `Reflect.set` are used to perform the default operations within proxy traps.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  get: function(obj, prop) {
    console.log('Getting...');
    return Reflect.get(obj, prop); // Default get behavior
  },
  set: function(obj, prop, value) {
    console.log('Setting...');
    return Reflect.set(obj, prop, value); // Default set behavior
  }
};
const proxy = new Proxy(target, handler);
\`\`\`
### 📚 Key Concepts
-   **Reflect**: A built-in object that provides methods for JavaScript operations.
-   **Proxy Best Practices**: Using `Reflect` within proxy traps makes them more robust and maintainable.
`,
'promise-chaining-es6': `
### 💡 Problem Breakdown
The `.then()` method of a Promise returns a new promise. This allows you to chain multiple `.then()` calls together to handle a sequence of asynchronous operations in a clean, flat structure, avoiding "callback hell."

### ⚙️ Solution Walkthrough
A sequence of `.then()` calls is used to transform a value asynchronously.
\`\`\`javascript
Promise.resolve(10)
  .then(value => {
    console.log(value); // 10
    return value * 2; // Returns a new promise that resolves to 20
  })
  .then(value => {
    console.log(value); // 20
    return value + 5;   // Returns a new promise that resolves to 25
  })
  .then(value => {
    console.log('Final:', value); // 25
  });
\`\`\`
### 📚 Key Concepts
-   **Promise Chaining**: The core mechanism for handling sequential asynchronous tasks with promises.
`,
'async-generator': `
### 💡 Problem Breakdown
An async generator (`async function*`) combines the features of async functions and generator functions. It allows you to use both `await` and `yield` within the same function, making it easy to create iterators that produce values from asynchronous sources (like network requests).

### ⚙️ Solution Walkthrough
An async generator yields data fetched from an API.
\`\`\`javascript
async function* fetchUsers() {
  yield await (await fetch('.../users/1')).json();
  yield await (await fetch('.../users/2')).json();
}

// To consume it, you use a for-await-of loop.
\`\`\`
### 📚 Key Concepts
-   **Async Generator**: A function that returns an async iterator.
-   **Async Iterator**: An iterator whose `.next()` method returns a promise that resolves to the standard `{ value, done }` object.
`,
'for-await-of-loop': `
### 💡 Problem Breakdown
The `for-await...of` loop (ES2018) is a special loop for iterating over async iterables, such as the ones produced by async generators. It automatically handles waiting for the promise returned by the iterator's `.next()` method to resolve at each step.

### ⚙️ Solution Walkthrough
The loop is used to consume values from an async generator.
\`\`\`javascript
async function* myAsyncGen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
}
async function run() {
  for await (const value of myAsyncGen()) {
    console.log(value); // Logs 1, then 2
  }
}
\`\`\`
### 📚 Key Concepts
-   **`for-await...of`**: A loop for iterating over async iterables.
`,
'string-replaceall': `
### 💡 Problem Breakdown
Before ES2021, to replace all occurrences of a substring, you had to use `.replace()` with a regular expression and the global flag. The `.replaceAll()` method provides a much simpler way to do this for simple string replacements.

### ⚙️ Solution Walkthrough
The `.replaceAll()` method is called on a string.
\`\`\`javascript
const str = "cat dog cat";
str.replaceAll('cat', 'ferret'); // "ferret dog ferret"
\`\`\`
### 📚 Key Concepts
-   **`String.prototype.replaceAll()`**: A modern method for replacing all occurrences of a substring.
`,
'private-class-fields': `
### 💡 Problem Breakdown
True privacy for class properties was introduced with "hash names." The goal is to create a class property that is completely inaccessible from outside the class instance.

### ⚙️ Solution Walkthrough
A `#balance` field is declared. Any attempt to access it from outside the class is a syntax error.
\`\`\`javascript
class Wallet {
    #balance = 0;
    constructor(b) { this.#balance = b; }
    getBalance() { return this.#balance; }
}
const myWallet = new Wallet(100);
// myWallet.#balance; // SyntaxError
\`\`\`
### 📚 Key Concepts
-   **Encapsulation**: Private fields are a key tool for encapsulation.
-   **Private Class Fields**: A feature for declaring fields that are only accessible within the class body.
`,
'static-class-fields': `
### 💡 Problem Breakdown
A static field (or property) belongs to the class itself, not to any instance. It's shared across all instances and is accessed directly on the class name.

### ⚙️ Solution Walkthrough
A `version` property is defined using the `static` keyword.
\`\`\`javascript
class AppConfig {
    static version = "1.0.2";
}
AppConfig.version; // "1.0.2"
\`\`\`
### 📚 Key Concepts
-   **Static Property**: A property of the class constructor itself, rather than of the instances.
`,
'top-level-await': `
### 💡 Problem Breakdown
Top-level `await` (ES2022) allows you to use the `await` keyword at the top level of an ES module, outside of an `async` function. This is useful for initializing resources or fetching configuration data when a module is first loaded.

### ⚙️ Solution Walkthrough
A conceptual example in a module.
\`\`\`javascript
// --- my-module.js ---
const connection = await createDbConnection();
export function getData() { /* uses connection */ }

// Another module that imports this one will wait for the
// connection promise to resolve before it executes.
\`\`\`
### 📚 Key Concepts
-   **Top-Level `await`**: A feature for handling async setup in modules.
`,
'object-destructuring-rest': `
### 💡 Problem Breakdown
The rest syntax (`...`) can also be used in object destructuring. It collects all the remaining own, enumerable properties of an object into a new object.

### ⚙️ Solution Walkthrough
The rest syntax is used to separate some properties from the rest.
\`\`\`javascript
const user = { id: 1, name: 'A', age: 30, active: true };
const { id, ...rest } = user;

// id is 1
// rest is { name: 'A', age: 30, active: true }
\`\`\`
### 📚 Key Concepts
-   **Rest Properties in Destructuring**: A feature for collecting remaining object properties.
`,
'map-iteration': `
### 💡 Problem Breakdown
The `Map` object is an iterable. You can use a `for...of` loop to iterate over its entries, keys, or values.

### ⚙️ Solution Walkthrough
Using `for...of` and the `.keys()`, `.values()`, `.entries()` methods.
\`\`\`javascript
const map = new Map([['a', 1], ['b', 2]]);

for (const [key, value] of map) { /* ... */ } // Default is entries
for (const key of map.keys()) { /* ... */ }
for (const value of map.values()) { /* ... */ }
\`\`\`
### 📚 Key Concepts
-   **Iterable Protocol**: `Map` objects implement the iterable protocol, making them easy to loop over.
`,
'set-from-array-spread': `
### 💡 Problem Breakdown
The spread syntax (`...`) can be used to convert an iterable, like a `Set`, into an array. This is a common pattern used in conjunction with creating a `Set` to get the unique values from an array.

### ⚙️ Solution Walkthrough
A `Set` is spread into an array literal.
\`\`\`javascript
const mySet = new Set([1, 1, 2, 3, 3]); // Set is {1, 2, 3}
const uniqueArray = [...mySet]; // [1, 2, 3]
\`\`\`
### 📚 Key Concepts
-   **Spread Syntax**: Can be used on any iterable object.
`,
'tagged-template-literals': `
### 💡 Problem Breakdown
A "tag" function is a function that can be placed before a template literal. This function gets called with the processed parts of the template literal: an array of the static string parts, followed by the evaluated expressions. It allows you to parse a template literal in a custom way.

### ⚙️ Solution Walkthrough
A `highlight` tag function is created to wrap interpolated values in a `<mark>` tag.
\`\`\`javascript
function highlight(strings, ...values) {
  let str = '';
  strings.forEach((s, i) => {
    str += s + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  });
  return str;
}
const name = 'Bob';
highlight\`Hello, \${name}!\`; // "Hello, <mark>Bob</mark>!"
\`\`\`
### 📚 Key Concepts
-   **Tagged Template**: An advanced form of template literal for custom parsing.
`,
'arrow-function-no-this': `
### 💡 Problem Breakdown
A key feature of arrow functions is that they do not have their own \`this\` binding. They inherit \`this\` from the surrounding (lexical) scope. This is a major difference from traditional functions and is often a desired behavior.

### ⚙️ Solution Walkthrough
An arrow function used as a method on an object fails to get the object as its `this` context.
\`\`\`javascript
const myObject = {
  name: "My Object",
  // This is a common pitfall!
  getName: () => {
    // 'this' is inherited from the global scope, not the object.
    return this.name;
  }
};
// myObject.getName(); // Would likely be undefined
\`\`\`
### 📚 Key Concepts
-   **Lexical \`this\`**: Arrow functions capture the `this` value of the enclosing context.
`,
'destructuring-swapping-vars': `
### 💡 Problem Breakdown
Array destructuring provides a very concise and readable way to swap the values of two variables without needing a temporary third variable.

### ⚙️ Solution Walkthrough
A destructuring assignment is used to swap two variables.
\`\`\`javascript
let a = 1;
let b = 2;

[a, b] = [b, a];

// a is now 2, b is now 1
\`\`\`
1.  **Right side**: An array `[b, a]` (which is `[2, 1]`) is created.
2.  **Left side**: This new array is destructured, assigning its first element (2) to `a` and its second element (1) to `b`.

### 📚 Key Concepts
-   **Destructuring Assignment**: A versatile syntax for value swapping.
`,
'string-padstart-padend': `
### 💡 Problem Breakdown
These ES2017 methods are used to pad a string with another string until the resulting string reaches the desired length. The padding is applied from the start (`.padStart`) or end (`.padEnd`).

### ⚙️ Solution Walkthrough
The methods are used to format a string.
\`\`\`javascript
'5'.padStart(3, '0'); // "005"
'ID'.padEnd(5, '-'); // "ID---"
\`\`\`
### 📚 Key Concepts
-   **String Padding**: Useful for formatting text, dates, and numbers for display.
`,
'object-getownpropertydescriptors': `
### 💡 Problem Breakdown
`Object.getOwnPropertyDescriptors()` (ES2017) is a static method that returns an object containing all of an object's own property descriptors. This is useful for creating precise copies (including getters, setters, and non-enumerable properties) of an object.

### ⚙️ Solution Walkthrough
The method is used to get all descriptors of an object.
\`\`\`javascript
const obj = { a: 1, get b() { return 2; } };
const descriptors = Object.getOwnPropertyDescriptors(obj);
// descriptors contains the full descriptor objects for 'a' and 'b'
\`\`\`
### 📚 Key Concepts
-   **Property Descriptors**: The underlying metadata that defines a property's behavior.
`,
'array-includes-es7': `
### 💡 Problem Breakdown
The `.includes()` method (ES2016) provides a simple boolean check to see if an array contains a specific element. It's often more readable than the older `indexOf(el) !== -1` pattern.

### ⚙️ Solution Walkthrough
The method is used to check for an element.
\`\`\`javascript
const arr = ['a', 'b', 'c'];
arr.includes('b'); // true
arr.includes('d'); // false
\`\`\`
### 📚 Key Concepts
-   **`Array.prototype.includes()`**: A declarative method for checking for the presence of an element.
`,
'async-await-parallel': `
### 💡 Problem Breakdown
While `await` pauses execution for a single promise, you often want to run multiple asynchronous operations concurrently and wait for them all to finish. This is achieved by combining `await` with `Promise.all()`.

### ⚙️ Solution Walkthrough
Two async operations are started at the same time and `Promise.all` is awaited.
\`\`\`javascript
async function runParallel() {
  const p1 = fetch(url1); // Starts the fetch
  const p2 = fetch(url2); // Starts the second fetch immediately
  
  // Wait for both promises to resolve
  const [result1, result2] = await Promise.all([p1, p2]);
}
\`\`\`
### 📚 Key Concepts
-   **Concurrent Operations**: Starting multiple async tasks without waiting for the previous ones to complete.
`,
'optional-chaining-with-functions': `
### 💡 Problem Breakdown
Optional chaining can also be used to safely call a function or method that may not exist. The syntax is `?.()`.

### ⚙️ Solution Walkthrough
A function is called using optional chaining.
\`\`\`javascript
const objWithFunc = { myFunc: () => 'called' };
const objWithoutFunc = {};

objWithFunc.myFunc?.(); // "called"
objWithoutFunc.myFunc?.(); // undefined (and no error is thrown)
\`\`\`
### 📚 Key Concepts
-   **Optional Chaining (\`?.()\`)**: A syntax for safely calling optional methods.
`,
'regexp-lookbehind-assertions': `
### 💡 Problem Breakdown
Lookbehind assertions in regular expressions (ES2018) allow you to match a pattern only if it is preceded (or not preceded) by another pattern, without including the preceding pattern in the actual match result.

### ⚙️ Solution Walkthrough
A positive lookbehind `(?<=...)` is used to match a number only if it's preceded by a dollar sign.
\`\`\`javascript
const str = "Price: $100";
const match = str.match(/(?<=\$)\\d+/);
// match[0] is "100" (the '$' is not included)
\`\`\`
### 📚 Key Concepts
-   **Lookbehind Assertions**: An advanced regular expression feature for more precise matching.
`,
'regexp-named-capture-groups': `
### 💡 Problem Breakdown
Named capture groups (ES2018) allow you to give names to your capturing groups in a regular expression, making them easier to access from the match result object.

### ⚙️ Solution Walkthrough
A regex with named groups is used to parse a date.
\`\`\`javascript
const regex = /(?<year>\\d{4})-(?<month>\\d{2})/;
const match = '2024-01-20'.match(regex);
match.groups.year; // "2024"
match.groups.month; // "01"
\`\`\`
### 📚 Key Concepts
-   **Named Capture Groups**: A feature that improves the readability and maintainability of complex regular expressions.
`,
'regexp-s-dotall-flag': `
### 💡 Problem Breakdown
The `s` (dotAll) flag (ES2018) for regular expressions allows the `.` special character to match any character, *including* newline characters (`\\n`), which it doesn't match by default.

### ⚙️ Solution Walkthrough
The `s` flag is used to match a string that spans multiple lines.
\`\`\`javascript
const regex = /foo.bar/s;
regex.test('foo\\nbar'); // true
\`\`\`
### 📚 Key Concepts
-   **`s` (dotAll) flag**: A regex flag that changes the behavior of the `.` metacharacter.
`,
'promise-finally-use-case': `
### 💡 Problem Breakdown
A practical use for `.finally()` is any cleanup action that must happen regardless of an async operation's outcome. A common example is hiding a loading indicator.

### ⚙️ Solution Walkthrough
A conceptual example of managing a loading state.
\`\`\`javascript
showLoadingSpinner();
fetchData()
  .then(data => { /* display data */ })
  .catch(error => { /* display error */ })
  .finally(() => {
    // This always runs
    hideLoadingSpinner();
  });
\`\`\`
### 📚 Key Concepts
-   **`finally()`**: Ideal for code that needs to run after an async operation, such as cleanup or final state updates.
`,
'well-known-symbol-species': `
### 💡 Problem Breakdown
The `Symbol.species` symbol allows you to control which constructor is used by methods on a subclass that return new instances (like `Array.prototype.map`).

### ⚙️ Solution Walkthrough
A custom array subclass overrides `Symbol.species` to ensure its `.map` method returns a standard `Array`.
\`\`\`javascript
class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
}
const a = new MyArray(1, 2, 3);
const mapped = a.map(x => x * x);
// mapped is a standard Array, not a MyArray instance
\`\`\`
### 📚 Key Concepts
-   **`Symbol.species`**: A "well-known symbol" used to specify a constructor function that is used to create derived objects.
`,
'well-known-symbol-tostringtag': `
### 💡 Problem Breakdown
`Symbol.toStringTag` allows you to customize the string returned by `Object.prototype.toString.call()`, providing more descriptive type information.

### ⚙️ Solution Walkthrough
A custom class sets its `Symbol.toStringTag`.
\`\`\`javascript
class MyClass {
    get [Symbol.toStringTag]() { return 'CustomTag'; }
}
Object.prototype.toString.call(new MyClass()); // "[object CustomTag]"
\`\`\`
### 📚 Key Concepts
-   **`Symbol.toStringTag`**: A symbol for specifying an object's default string description.
`,
'object-destructuring-in-loop': `
### 💡 Problem Breakdown
Using object destructuring inside a `for...of` loop is a very clean and readable way to access the properties of objects within an array.

### ⚙️ Solution Walkthrough
A loop iterates over an array of user objects, destructuring each object to get its properties.
\`\`\`javascript
const users = [{ name: 'A', age: 1 }, { name: 'B', age: 2 }];
for (const { name, age } of users) {
  console.log(\`\${name} is \${age}\`);
}
\`\`\`
### 📚 Key Concepts
-   **Destructuring**: Can be combined with other language features like loops to write very expressive code.
`,
'set-operations-spread': `
### 💡 Problem Breakdown
The `Set` data structure, combined with the spread syntax, provides a concise way to perform set operations like union and intersection on arrays.

### ⚙️ Solution Walkthrough
`Set` and spread are used to find the union and intersection of two arrays.
\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
// Union
const union = [...new Set([...arr1, ...arr2])]; // [1, 2, 3, 4]
// Intersection
const set1 = new Set(arr1);
const intersection = arr2.filter(x => set1.has(x)); // [2, 3]
\`\`\`
### 📚 Key Concepts
-   **`Set`**: Useful for ensuring uniqueness.
-   **Spread Syntax**: Used to combine arrays and convert Sets back to arrays.
`,
'async-function-as-method': `
### 💡 Problem Breakdown
You can define an `async` method directly within an ES6 class. When called, this method will return a promise that resolves with the method's return value.

### ⚙️ Solution Walkthrough
A `DataService` class has an `async` method to fetch data.
\`\`\`javascript
class DataService {
  async fetchData(id) {
    // const response = await fetch(\`/data/\${id}\`);
    // const data = await response.json();
    return { id, data: "..." }; // This is the resolved value of the promise
  }
}
const service = new DataService();
service.fetchData(1).then(result => console.log(result));
\`\`\`
### 📚 Key Concepts
-   **`async` Methods**: A clean syntax for defining asynchronous methods in classes.
`,
'destructuring-function-return': `
### 💡 Problem Breakdown
Destructuring can be used to immediately capture the results from a function that returns an array or an object into separate variables.

### ⚙️ Solution Walkthrough
A function returns an object, which is then destructured at the call site.
\`\`\`javascript
function getCoords() {
  return { x: 10, y: 20, z: 30 };
}
const { x, y } = getCoords(); // Captures x and y
\`\`\`
### 📚 Key Concepts
-   **Destructuring**: A convenient way to work with the return values of functions.
`,
'map-to-object': `
### 💡 Problem Breakdown
The task is to convert a `Map` data structure into a plain JavaScript object. The `Object.fromEntries()` method is perfect for this.

### ⚙️ Solution Walkthrough
`Object.fromEntries()` is called on the map.
\`\`\`javascript
const map = new Map([['a', 1], ['b', 2]]);
const obj = Object.fromEntries(map); // { a: 1, b: 2 }
\`\`\`
### 📚 Key Concepts
-   **`Object.fromEntries()`**: A method for converting an iterable of key-value pairs into an object.
`,
'object-to-map': `
### 💡 Problem Breakdown
The task is to convert a plain JavaScript object into a `Map`. This is done by first getting the object's key-value pairs using `Object.entries()` and then passing that to the `Map` constructor.

### ⚙️ Solution Walkthrough
The `Map` constructor is used with `Object.entries()`.
\`\`\`javascript
const obj = { a: 1, b: 2 };
const map = new Map(Object.entries(obj));
map.get('a'); // 1
\`\`\`
### 📚 Key Concepts
-   **`Object.entries()`**: Returns an array of an object's key-value pairs.
-   **`Map` Constructor**: Can take an iterable of key-value pairs to initialize the map.
`,
'array-copywithin': `
### 💡 Problem Breakdown
The `.copyWithin()` method shallow copies part of an array to another location within the same array and returns the modified array. It does not alter the length of the array.

### ⚙️ Solution Walkthrough
Part of an array is copied to the beginning.
\`\`\`javascript
const arr = [1, 2, 3, 4, 5];
// Copy to index 0 the elements from index 3 to the end
arr.copyWithin(0, 3); // [4, 5, 3, 4, 5]
\`\`\`
### 📚 Key Concepts
-   **`Array.prototype.copyWithin()`**: A mutating method for copying sequences of array elements.
`,
'array-fill': `
### 💡 Problem Breakdown
The `.fill()` method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

### ⚙️ Solution Walkthrough
Part of an array is filled with a static value.
\`\`\`javascript
const arr = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
arr.fill(0, 2, 4); // [1, 2, 0, 0]
\`\`\`
### 📚 Key Concepts
-   **`Array.prototype.fill()`**: A mutating method for populating an array with a static value.
`,
'array-findlast': `
### 💡 Problem Breakdown
These ES2023 methods are the counterparts to `.find()` and `.findIndex()`. They iterate the array from the last element to the first, returning the first value or index that satisfies the testing function.

### ⚙️ Solution Walkthrough
The methods are used to find the last element that meets a condition.
\`\`\`javascript
const arr = [10, 20, 30, 40, 50];
arr.findLast(n => n > 25); // 50
arr.findLastIndex(n => n > 25); // 4
\`\`\`
### 📚 Key Concepts
-   **`.findLast()` & `.findLastIndex()`**: Methods for searching an array from right to left.
`,
'array-with': `
### 💡 Problem Breakdown
The `.with()` method (ES2023) is the immutable counterpart to using bracket notation for assignment (`arr[1] = 99`). It returns a *new* array with the element at the specified index replaced, leaving the original array unchanged.

### ⚙️ Solution Walkthrough
An element is updated immutably.
\`\`\`javascript
const arr = [1, 2, 3];
const newArr = arr.with(1, 99);

console.log(newArr); // [1, 99, 3]
console.log(arr);    // [1, 2, 3] (original is not modified)
\`\`\`
### 📚 Key Concepts
-   **Immutability**: A programming paradigm that avoids changing data in place, leading to more predictable code.
-   **`Array.prototype.with()`**: A modern method for immutable array updates.
`,
'array-toreversed-tosorted-tospliced': `
### 💡 Problem Breakdown
ES2023 introduced new immutable versions of common array methods. `.toReversed()`, `.toSorted()`, and `.toSpliced()` work just like their counterparts (`.reverse()`, `.sort()`, `.splice()`) but they return a new, modified array instead of mutating the original one.

### ⚙️ Solution Walkthrough
The immutable methods are used on an array.
\`\`\`javascript
const arr = [3, 1, 2];
const reversed = arr.toReversed(); // [2, 1, 3]
const sorted = arr.toSorted();   // [1, 2, 3]

console.log(arr); // [3, 1, 2] (original is unchanged)
\`\`\`
### 📚 Key Concepts
-   **Immutability**: These new methods make it easier to follow functional programming patterns by avoiding side effects.
`,
'private-in-operator': `
### 💡 Problem Breakdown
ES2022 introduced the ability to use the `in` operator to check for the existence of a private field on an object from within the class. This is necessary because you cannot access or check for private fields from outside a class, and a normal check would throw a syntax error.

### ⚙️ Solution Walkthrough
A static method is used to check if an instance has a private field.
\`\`\`javascript
class MyClass {
    #privateField = 1;
    static hasPrivate(obj) {
        return #privateField in obj;
    }
}
const instance = new MyClass();
MyClass.hasPrivate(instance); // true
\`\`\`
### 📚 Key Concepts
-   **Ergonomic Brand Checks**: The primary use case for this feature is to allow one class to check if an object it receives is a true instance of that class (has its private fields), which is more robust than `instanceof`.
`,
};
