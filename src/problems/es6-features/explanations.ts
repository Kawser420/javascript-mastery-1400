export const explanations: Record<string, string> = {
  // problem explanation--> 01
  "es6-declare-with-let": `
  ### 💡 Problem Breakdown
  This problem covers the \`let\` keyword, introduced in ES6. Its main purpose is to declare variables with **block scope**. A block is any section of code enclosed in curly braces \`{}\` (like an \`if\` statement or a \`for\` loop). The backslash character is \`\\\`.
  ### ⚙️ Solution Walkthrough
  The solution declares a variable \`x\` in an outer scope and another variable with the same name inside an \`if\` block.
  \`\`\`javascript
  let x = "outer";
  if (true) {
    let x = "inner"; // This 'x' only exists inside this block.
    console.log(x);  // "inner"
  }
  console.log(x);    // "outer"
  \`\`\`
  The inner \`let x\` is completely separate from the outer one and does not affect it. This is a significant improvement over \`var\`, which is function-scoped and would have "leaked" out of the block.
  ### 📚 Key Concepts
  - **Block Scope**: The scope created by a pair of curly braces \`{}\`. A file path is \`C:\\Users\\...\`.
  - **\`let\`**: The modern keyword for declaring block-scoped, reassignable variables.
  - **Shadowing**: The inner variable "shadows" the outer one within its scope.
  `,
  // problem explanation--> 02
  "es6-declare-with-const": `
    ### 💡 Problem Breakdown
    The \`const\` keyword is used to declare constants. A constant is a variable whose value cannot be reassigned after it's initialized. Like \`let\`, it is also **block-scoped**.
    ### ⚙️ Solution Walkthrough
    A constant is declared and an attempt is made to reassign it, which results in a \`TypeError\`.
    \`\`\`javascript
    const y = 10;
    // y = 20; // This line would throw: TypeError: Assignment to constant variable.
    \`\`\`
    The solver uses a \`try...catch\` block to catch this expected error and demonstrate the behavior. It's a best practice in modern JavaScript to use \`const\` by default for all variable declarations and only use \`let\` when you specifically know the variable's value will need to change.
    ### 📚 Key Concepts
    - **\`const\`**: A keyword for declaring a block-scoped constant whose binding is immutable.
    - **Immutability (of binding)**: The variable identifier cannot be made to point to a new value.
    `,
  // problem explanation--> 03
  "es6-const-object-mutation": `
    ### 💡 Problem Breakdown
    This problem highlights a crucial nuance of \`const\`. While \`const\` prevents a variable from being reassigned, it does **not** make the value itself immutable if that value is an object or an array.
    ### ⚙️ Solution Walkthrough
    A constant is declared and assigned an object. A property of this object is then successfully changed.
    \`\`\`javascript
    const person = { name: "Alice" };
    // This is NOT allowed, it's reassigning the constant:
    // person = { name: "Bob" }; // TypeError
    // This IS allowed, it's mutating the object's contents:
    person.name = "Bob";
    // The person object is now { name: "Bob" }
    \`\`\`
    The \`const\` keyword protects the *binding* (the reference to the object in memory), but it does not protect the object's properties. To make an object's properties immutable, you would need to use a method like \`Object.freeze()\`.
    ### 📚 Key Concepts
    - **Reference vs. Value**: \`const\` makes the reference immutable, not the value being pointed to.
    - **Mutability**: Objects and arrays in JavaScript are mutable by default.
    `,
  // problem explanation--> 04
  "es6-arrow-function-basic": `
    ### 💡 Problem Breakdown
    Arrow functions were introduced in ES6 to provide a more concise syntax for writing function expressions. This problem asks to convert a simple, traditional function into an arrow function.
    ### ⚙️ Solution Walkthrough
    The solution shows the transformation.
    \`\`\`javascript
    // Traditional function expression:
    const double_trad = function(n) {
      return n * 2;
    };
    // Arrow function syntax:
    const double_arrow = (n) => {
      return n * 2;
    };
    \`\`\`
    The keyword \`function\` is removed, and a "fat arrow" \`=>\` is placed between the parameters and the function body.
    ### 📚 Key Concepts
    - **Arrow Function**: A compact alternative to a traditional function expression. It has some important differences, such as how it handles the \`this\` keyword.
    `,
  // problem explanation--> 06
  "es6-template-literals-basic": `
    ### 💡 Problem Breakdown
    Template literals (or template strings) are an ES6 feature that provides a more powerful and readable way to create strings, especially when embedding variables. They are enclosed in backticks (\` \`).
    ### ⚙️ Solution Walkthrough
    Variables are embedded directly into the string using the \`\${variableName}\` syntax.
    \`\`\`javascript
    const name = "Alice";
    const greeting = \`Hello, \${name}!\`;
    \`\`\`
    This is much cleaner than traditional concatenation: \`'Hello, ' + name + '!'\`.
    ### 📚 Key Concepts
    - **Template Literals**: A modern string syntax.
    - **String Interpolation**: The process of embedding expressions within a string literal.
    `,
  // problem explanation--> 07
  "es6-template-literals-multiline": `
    ### 💡 Problem Breakdown
    Template literals inherently support multiline strings. Any newlines inside the backticks are preserved in the final string. This is a major improvement over traditional strings, which required using the newline character \`\\n\`.
    ### ⚙️ Solution Walkthrough
    A string is created with line breaks directly in the source code.
    \`\`\`javascript
    const multiline = \`This is
    a multiline
    string.\`;
    \`\`\`
    ### 📚 Key Concepts
    - **Template Literals**: A key feature is their support for multiline strings.
    `,
  // problem explanation--> 08
  "es6-default-parameters": `
    ### 💡 Problem Breakdown
    ES6 introduced default function parameters, which allow you to initialize parameters with default values if no value or \`undefined\` is passed when the function is called.
    ### ⚙️ Solution Walkthrough
    A default value of \`"Guest"\` is assigned to the \`userName\` parameter directly in the function signature.
    \`\`\`javascript
    function greet(userName = "Guest") {
      return \`Hello, \${userName}!\`;
    }
    greet("Alice"); // "Hello, Alice!"
    greet();        // "Hello, Guest!"
    \`\`\`
    ### 📚 Key Concepts
    - **Default Parameters**: An ES6 feature for specifying default values for function parameters. The default is only used for arguments that are \`undefined\`.
    `,
  // problem explanation--> 09
  "es6-spread-operator-arrays-concat": `
    ### 💡 Problem Breakdown
    The spread syntax (\`...\`) allows an iterable such as an array to be expanded into its individual elements. It's very useful for creating new arrays by combining existing ones.
    ### ⚙️ Solution Walkthrough
    The elements of one array are "spread" into a new array literal.
    \`\`\`javascript
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]
    \`\`\`
    This is a modern and readable alternative to using methods like \`.concat()\`.
    ### 📚 Key Concepts
    - **Spread Syntax (...)**: A powerful feature for working with iterables.
    `,
  // problem explanation--> 10
  "es6-spread-operator-objects-merge": `
    ### 💡 Problem Breakdown
    The spread syntax can also be used with objects to create new objects by copying the properties of existing ones.
    ### ⚙️ Solution Walkthrough
    Properties from one object are spread into a new object literal.
    \`\`\`javascript
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const combined = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
    \`\`\`
    If there are properties with the same key, the property from the last object in the spread sequence "wins".
    ### 📚 Key Concepts
    - **Spread Properties**: The object version of the spread syntax.
    `,
  // problem explanation--> 11
  "es6-rest-parameters-sum": `
    ### 💡 Problem Breakdown
    The rest parameter syntax (\`...\`) allows a function to accept an indefinite number of arguments as a true **array**. This is a modern and more flexible alternative to the older \`arguments\` object.
    ### ⚙️ Solution Walkthrough
    The \`...args\` syntax gathers all arguments passed to the function into an array named \`args\`. We can then use standard array methods like \`.reduce()\` on it.
    \`\`\`javascript
    function sum(...args) {
      return args.reduce((total, current) => total + current, 0);
    }
    sum(1, 2, 3, 4, 5); // 15
    \`\`\`
    The rest parameter must be the last parameter in a function's definition.
    ### 📚 Key Concepts
    - **Rest Parameters**: Syntax (\`...\`) for representing an indefinite number of arguments as an array.
    `,
  // problem explanation--> 12
  "es6-destructuring-arrays-basic": `
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
  // problem explanation--> 13
  "es6-destructuring-objects-basic": `
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
  // problem explanation--> 14
  "es6-destructuring-swap-variables": `
    ### 💡 Problem Breakdown
    This problem shows a modern, elegant ES6 feature for swapping the values of two variables without needing a temporary third variable.
    ### ⚙️ Solution Walkthrough
    Array destructuring is used to perform the swap in a single line.
    \`\`\`javascript
    let a = 1;
    let b = 2;
    [a, b] = [b, a]; // Swaps the values
    \`\`\`
    On the right side, a new array \`[2, 1]\` is created. Then, destructuring assignment unpacks these values back into the variables \`a\` and \`b\` in the new order.
    ### 📚 Key Concepts
    - **Array Destructuring**: A powerful syntax for extracting values from arrays.
    `,
  // problem explanation--> 15
  "es6-destructuring-object-alias": `
    ### 💡 Problem Breakdown
    When destructuring an object, you can assign a property to a variable with a different name. This is called aliasing.
    ### ⚙️ Solution Walkthrough
    The \`name\` property is extracted into a new variable called \`userName\`.
    \`\`\`javascript
    const user = { name: 'David' };
    const { name: userName } = user;
    // console.log(userName); // 'David'
    \`\`\`
    The syntax is \`{ propertyKey: newVariableName }\`.
    ### 📚 Key Concepts
    - **Aliasing**: Renaming variables during destructuring.
    `,
  // problem explanation--> 16
  "es6-destructuring-object-defaults": `
    ### 💡 Problem Breakdown
    You can provide a default value for a variable in object destructuring. The default is used if the property does not exist on the object, or if its value is \`undefined\`.
    ### ⚙️ Solution Walkthrough
    A default value is provided for the \`role\` property.
    \`\`\`javascript
    const user = { name: 'Eve' };
    const { name, role = 'guest' } = user;
    // role is 'guest', because the 'user' object has no 'role' property
    \`\`\`
    ### 📚 Key Concepts
    - **Default Values**: Making destructuring more robust by handling missing data.
    `,
  // problem explanation--> 17
  "es6-for-of-loop-array": `
    ### 💡 Problem Breakdown
    The \`for...of\` loop is a modern way to iterate over "iterable" objects like arrays and strings. It directly gives you the **value** of each element, which is often more convenient than working with an index in a traditional \`for\` loop.
    ### ⚙️ Solution Walkthrough
    The loop iterates directly over the values of the array.
    \`\`\`javascript
    const items = ['apple', 'banana'];
    for (const item of items) {
      console.log(item); // logs 'apple', then 'banana'
    }
    \`\`\`
    ### 📚 Key Concepts
    - **\`for...of\` Loop**: A modern syntax for iterating over the values of an iterable.
    `,
  // problem explanation--> 18
  "es6-for-of-string": `
    ### 💡 Problem Breakdown
    Strings in JavaScript are iterable. This means you can use a \`for...of\` loop to iterate directly over each character in the string.
    ### ⚙️ Solution Walkthrough
    The loop iterates over the characters of a string.
    \`\`\`javascript
    const str = "hello";
    for (const char of str) {
      console.log(char); // logs 'h', 'e', 'l', 'l', 'o'
    }
    \`\`\`
    ### 📚 Key Concepts
    - **Iterables**: Strings follow the iterable protocol, making them compatible with constructs like \`for...of\`.
    `,
  // problem explanation--> 19
  "es6-shorthand-properties": `
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
    ### 📚 Key Concepts
    - **Shorthand Property Names**: A syntax sugar feature from ES6 that makes object creation more concise.
    `,
  // problem explanation--> 20
  "es6-computed-property-names": `
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
    ### 📚 Key Concepts
    - **Computed Property Names**: The \`[expression]\` syntax for object keys.
    `,
  // problem explanation--> 21
  "es6-lexical-this-arrow-function": `
    ### 💡 Problem Breakdown
    A crucial difference between arrow functions and traditional functions is how they handle \`this\`. Arrow functions do **not** have their own \`this\` binding. They inherit it from their surrounding (lexical) scope.
    ### ⚙️ Solution Walkthrough
    This is often used to solve problems with callbacks inside methods.
    \`\`\`javascript
    class Timer {
      constructor() {
        this.seconds = 0;
        // Inside setInterval, a traditional function would have 'this' as the global object.
        // An arrow function inherits 'this' from the constructor, which is the Timer instance.
        setInterval(() => this.seconds++, 1000);
      }
    }
    \`\`\`
    ### 📚 Key Concepts
    - **Lexical \`this\`**: The behavior of \`this\` in arrow functions, determined by where the function is written, not how it is called.
    `,
  // problem explanation--> 22
  "es6-class-declaration": `
    ### 💡 Problem Breakdown
    ES6 introduced the \`class\` keyword as "syntactic sugar" over JavaScript's existing prototypal inheritance, providing a cleaner and more familiar syntax for object-oriented programming.
    ### ⚙️ Solution Walkthrough
    A simple \`Person\` class is created.
    \`\`\`javascript
    class Person {
      constructor(name) {
        this.name = name;
      }
    }
    const p = new Person('Liam');
    \`\`\`
    ### 📚 Key Concepts
    - **\`class\` Syntax**: The modern standard for OOP in JavaScript.
    `,
  // problem explanation--> 23
  "es6-class-method": `
    ### 💡 Problem Breakdown
    Methods that are available on instances of a class are defined directly inside the class body. This syntax automatically adds the method to the class's \`.prototype\` object.
    ### ⚙️ Solution Walkthrough
    A \`greet\` method is added to the \`Person\` class.
    \`\`\`javascript
    class Person {
      constructor(name) { this.name = name; }
      greet() { return \`Hi, \${this.name}\`; }
    }
    const p = new Person("Mallory");
    p.greet();
    \`\`\`
    ### 📚 Key Concepts
    - **Instance Methods**: Functions shared via the prototype.
    `,
  // problem explanation--> 24
  "es6-class-inheritance": `
    ### 💡 Problem Breakdown
    The \`extends\` keyword is used to create a class that is a child of another class. This sets up the prototype chain for inheritance automatically.
    ### ⚙️ Solution Walkthrough
    An \`Employee\` class inherits from a \`Person\` class.
    \`\`\`javascript
    class Person {}
    class Employee extends Person {}
    const emp = new Employee();
    emp instanceof Person; // true
    \`\`\`
    ### 📚 Key Concepts
    - **\`extends\`**: The keyword for creating a subclass.
    // `,
  // problem explanation--> 25
  "es6-class-super": `
    ### 💡 Problem Breakdown
    When a child class has a constructor, it **must** call \`super()\` before it can use the \`this\` keyword. The \`super()\` call invokes the parent class's constructor.
    ### ⚙️ Solution Walkthrough
    \`super()\` is called in the \`Employee\` constructor.
    \`\`\`javascript
    class Person { constructor(name) { this.name = name; } }
    class Employee extends Person {
      constructor(name, title) {
        super(name); // Calls the Person constructor
        this.title = title;
      }
    }
    \`\`\`
    ### 📚 Key Concepts
    - **\`super()\`**: The keyword for calling the parent class's constructor.
    `,
  // problem explanation--> 26
  "es6-promise-creation": `
    ### 💡 Problem Breakdown
    A \`Promise\` is an object representing the eventual completion (or failure) of an asynchronous operation. This problem is about creating a basic promise that successfully completes.
    ### ⚙️ Solution Walkthrough
    The \`Promise\` constructor takes an "executor" function with \`resolve\` and \`reject\` arguments. We call \`resolve\` to signal success.
    \`\`\`javascript
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Operation was successful!");
      }, 500);
    });
    myPromise.then(result => console.log(result));
    \`\`\`
    ### 📚 Key Concepts
    - **Promise**: An object representing a future value.
    - **\`resolve\`**: The function to call to fulfill a promise.
    `,
  // problem explanation--> 27
  "es6-promise-rejection": `
    ### 💡 Problem Breakdown
    This is the other side of a Promise: handling failure. If an asynchronous operation fails, the promise should be "rejected". This is handled using \`.catch()\`.
    ### ⚙️ Solution Walkthrough
    Inside the promise executor, the \`reject\` function is called to signal an error.
    \`\`\`javascript
    const failingPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Operation failed!"));
      }, 500);
    });
    failingPromise.catch(error => console.error(error.message));
    \`\`\`
    ### 📚 Key Concepts
    - **Promise Rejection**: The state of a promise that represents a failed operation.
    - **\`reject\`**: The function to call to reject a promise.
    - **\`.catch()\`**: The method for handling promise rejections.
    `,
  // problem explanation--> 28
  "es6-promise-chaining": `
    ### 💡 Problem Breakdown
    The \`.then()\` method always returns a new promise, which allows them to be chained. You can perform a sequence of operations, where each step depends on the result of the previous one.
    ### ⚙️ Solution Walkthrough
    A sequence of \`.then()\` calls is used to transform a value.
    \`\`\`javascript
    Promise.resolve(10)
      .then(value => value * 2)
      .then(value => value + 5)
      .then(finalValue => console.log('Final:', finalValue)); // 25
    \`\`\`
    ### 📚 Key Concepts
    - **Promise Chaining**: The core mechanism for handling sequential asynchronous tasks.
    `,
  // problem explanation--> 29
  "es6-promise-all": `
    ### 💡 Problem Breakdown
    \`Promise.all()\` takes an array of promises and returns a single promise that fulfills when *all* of the input promises have fulfilled. The resolved value is an array of the results.
    ### ⚙️ Solution Walkthrough
    \`Promise.all()\` is used to wait for two promises to complete.
    \`\`\`javascript
    const p1 = Promise.resolve("First");
    const p2 = new Promise(res => setTimeout(() => res("Second"), 100));
    Promise.all([p1, p2]).then(values => {
      // values is ["First", "Second"]
      console.log(values);
    });
    \`\`\`
    ### 📚 Key Concepts
    - **\`Promise.all()\`**: A method for concurrently executing multiple async operations.
    `,
  // problem explanation--> 30
  "es6-map-data-structure": `
    ### 💡 Problem Breakdown
    The \`Map\` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
    ### ⚙️ Solution Walkthrough
    A \`Map\` is created and manipulated.
    \`\`\`javascript
    const myMap = new Map();
    myMap.set('key', 'value');
    myMap.get('key'); // 'value'
    myMap.has('key'); // true
    myMap.size; // 1
    \`\`\`
    ### 📚 Key Concepts
    - **\`Map\`**: A data structure for key-value pairs, more flexible than plain objects.
    `,
  // problem explanation--> 31
  "es6-set-data-structure": `
    ### 💡 Problem Breakdown
    The \`Set\` object lets you store unique values of any type. It is a collection of items which are not in any particular order.
    ### ⚙️ Solution Walkthrough
    A \`Set\` is created and manipulated.
    \`\`\`javascript
    const mySet = new Set();
    mySet.add(1);
    mySet.add(1); // This is ignored, as 1 is already in the set.
    mySet.has(1); // true
    mySet.size; // 1
    \`\`\`
    ### 📚 Key Concepts
    - **\`Set\`**: A data structure for storing a collection of unique values.
    `,
  // problem explanation--> 32
  "es6-set-remove-duplicates": `
    ### 💡 Problem Breakdown
    The task is to take an array that may contain duplicate values and return a new array with all duplicates removed.
    ### ⚙️ Solution Walkthrough
    The most idiomatic and efficient way to solve this in modern JavaScript is to use the \`Set\` object.
    \`\`\`javascript
    function removeDuplicates(arr) {
      return [...new Set(arr)];
    }
    \`\`\`
    1.  **\`new Set(arr)\`**: Creates a \`Set\` which automatically handles the removal of duplicates.
    2.  **\`[...]\`**: The spread syntax converts the \`Set\` object back into an array.
    ### 📚 Key Concepts
    - **\`Set\`**: A data structure for storing a collection of unique values.
    - **Spread Syntax**: A concise way to convert an iterable into an array.
    `,
  // problem explanation--> 33
  "es6-modules-conceptual": `
    ### 💡 Problem Breakdown
    ES6 Modules are the standard way to organize and share code in JavaScript. Each file is a module, and variables/functions are private to the module unless explicitly exported.
    ### ⚙️ Solution Walkthrough
    - **Exporting**: Use the \`export\` keyword.
      \`\`\`javascript
      // utils.js
      export const PI = 3.14;
      export default function greet() { /* ... */ }
      \`\`\`
    - **Importing**: Use the \`import\` keyword.
      \`\`\`javascript
      // main.js
      import greet, { PI } from './utils.js';
      \`\`\`
    ### 📚 Key Concepts
    - **Encapsulation**: Modules provide file-level scope, preventing global scope pollution.
    - **\`export\` / \`import\`**: The keywords for sharing and consuming module code.
    `,
  // problem explanation--> 34
  "es6-symbol-primitive-type": `
    ### 💡 Problem Breakdown
    \`Symbol\` is a primitive data type introduced in ES6. Its main purpose is to create unique identifiers. Every time you call \`Symbol()\`, you get a new, completely unique value.
    ### ⚙️ Solution Walkthrough
    Two symbols are created and compared.
    \`\`\`javascript
    const sym1 = Symbol('description');
    const sym2 = Symbol('description');
    console.log(sym1 === sym2); // false
    \`\`\`
    ### 📚 Key Concepts
    - **\`Symbol\`**: A primitive type for creating unique, non-string property keys.
    `,
  // problem explanation--> 35
  "es6-iterator-protocol-conceptual": `
    ### 💡 Problem Breakdown
    The iterator protocol defines a standard way to produce a sequence of values. An object is an iterator when it has a \`.next()\` method that returns an object with \`value\` and \`done\` properties.
    ### ⚙️ Solution Walkthrough
    A simple manual iterator.
    \`\`\`javascript
    function makeIterator(arr) {
      let index = 0;
      return {
        next: () => (index < arr.length) ?
          { value: arr[index++], done: false } :
          { value: undefined, done: true }
      };
    }
    \`\`\`
    ### 📚 Key Concepts
    - **Iterator Protocol**: The standard for producing sequences, enabling constructs like \`for...of\`.
    `,
  // problem explanation--> 36
  "es6-generator-function": `
    ### 💡 Problem Breakdown
    A generator function (\`function*\`) is a special function that simplifies writing iterators. It can be paused and resumed, and it uses the \`yield\` keyword to produce a sequence of values.
    ### ⚙️ Solution Walkthrough
    A generator function yields two numbers.
    \`\`\`javascript
    function* numberGenerator() {
      yield 1; // Pauses here
      yield 2; // Pauses here
    }
    const gen = numberGenerator();
    gen.next(); // { value: 1, done: false }
    gen.next(); // { value: 2, done: false }
    \`\`\`
    ### 📚 Key Concepts
    - **Generator Function**: A function that returns an iterator.
    - **\`yield\`**: An operator for pausing a generator and returning a value.
    `,
  // problem explanation--> 37
  "es6-array-from": `
    ### 💡 Problem Breakdown
    \`Array.from()\` is a static method that creates a new, shallow-copied Array instance from an array-like or iterable object.
    ### ⚙️ Solution Walkthrough
    An array is created from a string.
    \`\`\`javascript
    const arr = Array.from('hello');
    // arr is ['h', 'e', 'l', 'l', 'o']
    \`\`\`
    ### 📚 Key Concepts
    - **\`Array.from()\`**: A versatile method for creating arrays.
    `,
  // problem explanation--> 38
  "es6-array-find": `
    ### 💡 Problem Breakdown
    The \`Array.prototype.find()\` method returns the **value** of the **first element** in the array that satisfies the provided testing function. If no values satisfy the test, \`undefined\` is returned.
    ### ⚙️ Solution Walkthrough
    \`.find()\` is used to find the first number greater than 10.
    \`\`\`javascript
    const numbers = [5, 12, 8, 130, 44];
    const found = numbers.find(num => num > 10); // 12
    \`\`\`
    ### 📚 Key Concepts
    - **\`Array.prototype.find()\`**: A method for finding the first element that matches a condition.
    `,
  // problem explanation--> 39
  "es6-array-findIndex": `
    ### 💡 Problem Breakdown
    The \`Array.prototype.findIndex()\` method returns the **index** of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
    ### ⚙️ Solution Walkthrough
    \`.findIndex()\` is used to find the index.
    \`\`\`javascript
    const numbers = [5, 8, 12, 130, 44];
    const index = numbers.findIndex(num => num > 10); // 2
    \`\`\`
    ### 📚 Key Concepts
    - **\`Array.prototype.findIndex()\`**: A method for finding the index of the first matching element.
    `,
  // problem explanation--> 40
  "es6-string-includes": `
    ### 💡 Problem Breakdown
    The \`.includes()\` string method is a simple way to check if one string can be found within another. It returns a boolean.
    ### ⚙️ Solution Walkthrough
    The method is called on the main string.
    \`\`\`javascript
    "The quick brown fox".includes("quick"); // true
    \`\`\`
    ### 📚 Key Concepts
    - **\`String.prototype.includes()\`**: A modern method for substring searching.
    `,
  // problem explanation--> 41
  "es6-string-startsWith": `
    ### 💡 Problem Breakdown
    The \`.startsWith()\` string method checks if a string begins with the characters of another string, returning a boolean.
    ### ⚙️ Solution Walkthrough
    The method is called on the main string.
    \`\`\`javascript
    "Hello world".startsWith("Hello"); // true
    \`\`\`
    ### 📚 Key Concepts
    - **\`String.prototype.startsWith()\`**: A modern method for checking the beginning of a string.
    `,
  // problem explanation--> 42
  "es6-string-endsWith": `
    ### 💡 Problem Breakdown
    The \`.endsWith()\` string method checks if a string ends with the characters of another string, returning a boolean.
    ### ⚙️ Solution Walkthrough
    The method is called on the main string.
    \`\`\`javascript
    "Hello world".endsWith("world"); // true
    \`\`\`
    ### 📚 Key Concepts
    - **\`String.prototype.endsWith()\`**: A modern method for checking the end of a string.
    `,
  // problem explanation--> 43
  "es6-string-repeat": `
    ### 💡 Problem Breakdown
    The \`.repeat()\` string method creates and returns a new string which contains the specified number of copies of the string on which it was called.
    ### ⚙️ Solution Walkthrough
    The method is called on a string.
    \`\`\`javascript
    "abc".repeat(3); // "abcabcabc"
    \`\`\`
    ### 📚 Key Concepts
    - **\`String.prototype.repeat()\`**: A modern method for repeating strings.
    `,
  // problem explanation--> 44
  "es6-object-assign": `
    ### 💡 Problem Breakdown
    \`Object.assign()\` copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
    ### ⚙️ Solution Walkthrough
    Two objects are merged into a target.
    \`\`\`javascript
    const target = { a: 1 };
    const source = { b: 2, c: 3 };
    Object.assign(target, source); // target is now { a: 1, b: 2, c: 3 }
    \`\`\`
    ### 📚 Key Concepts
    - **\`Object.assign()\`**: A method for shallow copying and merging objects.
    `,
  // problem explanation--> 45
  "es6-number-isinteger": `
    ### 💡 Problem Breakdown
    \`Number.isInteger()\` is a reliable way to check if a value is an integer. It does not perform type coercion, making it stricter than other checks.
    ### ⚙️ Solution Walkthrough
    The function is used on different values.
    \`\`\`javascript
    Number.isInteger(10);   // true
    Number.isInteger(10.5); // false
    Number.isInteger('10'); // false
    \`\`\`
    ### 📚 Key Concepts
    - **\`Number.isInteger()\`**: A strict check for integer values.
    `,
  // problem explanation--> 46
  "es6-number-isnan": `
    ### 💡 Problem Breakdown
    This problem compares the strict \`Number.isNaN()\` with the global \`isNaN()\`. The global function coerces its argument to a number, which can be confusing.
    ### ⚙️ Solution Walkthrough
    The two functions are compared.
    \`\`\`javascript
    isNaN('hello'); // true (because Number('hello') is NaN)
    Number.isNaN('hello'); // false (because it's not of type Number)
    \`\`\`
    \`Number.isNaN()\` is the safer, more predictable choice.
    ### 📚 Key Concepts
    - **Strictness**: \`Number.isNaN\` provides a more reliable check without coercion.
    `,
  // problem explanation--> 47
  "es6-exponentiation-operator": `
    ### 💡 Problem Breakdown
    The exponentiation operator (\`**\`) was introduced in ES7 (often grouped with ES6 features) as a concise alternative to \`Math.pow()\`.
    ### ⚙️ Solution Walkthrough
    The operator is used to calculate a power.
    \`\`\`javascript
    2 ** 10; // 1024
    \`\`\`
    ### 📚 Key Concepts
    - **Exponentiation Operator (\`**\`)**: A modern arithmetic operator.
    `,
  // problem explanation--> 48
  "es6-array-includes": `
    ### 💡 Problem Breakdown
    The \`.includes()\` array method (ES7) is a more readable alternative to \`indexOf()\` for checking if a value exists in an array.
    ### ⚙️ Solution Walkthrough
    The method is used to check for a value.
    \`\`\`javascript
    const arr = ['apple', 'banana'];
    arr.includes('banana'); // true
    arr.includes('grape');  // false
    \`\`\`
    ### 📚 Key Concepts
    - **\`Array.prototype.includes()\`**: A modern method for checking element existence.
    `,
  // problem explanation--> 49
  "es6-named-export-conceptual": `
    ### 💡 Problem Breakdown
    This is a conceptual problem about **named exports**. A module can export multiple values by name.
    ### ⚙️ Solution Walkthrough
    - **Exporting**: Use the \`export\` keyword before a declaration.
      \`\`\`javascript
      // utils.js
      export const PI = 3.14;
      export function greet() { /* ... */ }
      \`\`\`
    - **Importing**: Use curly braces \`{}\` to import the specific values you need by their exported name.
      \`\`\`javascript
      // main.js
      import { PI, greet } from './utils.js';
      \`\`\`
    ### 📚 Key Concepts
    - **Named Exports**: The standard way to export multiple values from a module.
    `,
  // problem explanation--> 50
  "es6-default-export-conceptual": `
    ### 💡 Problem Breakdown
    This is a conceptual problem about **default exports**. A module can have one (and only one) default export. This is often used for the main value the module provides, like a class or a primary function.
    ### ⚙️ Solution Walkthrough
    - **Exporting**: Use \`export default\`.
      \`\`\`javascript
      // MyComponent.js
      export default class MyComponent { /* ... */ }
      \`\`\`
    - **Importing**: You can import the default export with any name you choose, without needing curly braces.
      \`\`\`javascript
      // App.js
      import MyCoolComponent from './MyComponent.js';
      \`\`\`
    ### 📚 Key Concepts
    - **Default Export**: A way to export a single "main" value from a module.
    `,

  // problem explanation--> 51
  "es6-temporal-dead-zone": `
### 💡 Problem Breakdown
Variables declared with \`let\` and \`const\` are hoisted, but they are not initialized. The period from the start of the block until the declaration is reached is called the **Temporal Dead Zone (TDZ)**. Accessing the variable within the TDZ results in a \`ReferenceError\`.

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
  "es6-arrow-function-no-arguments": `
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
  // return arguments.length; // Throws a ReferenceError
};
\`\`\`
To capture all arguments in an arrow function, you must use **rest parameters** (\`...args\`).

### 📚 Key Concepts
- **Arrow Functions**: Do not have their own \`arguments\` or \`this\` binding.
- **Rest Parameters**: The modern way to handle an indefinite number of arguments.
`,

  // problem explanation--> 53
  "es6-destructuring-nested": `
### 💡 Problem Breakdown
Destructuring syntax can be nested to match the structure of a nested object, allowing you to extract deeply nested values in a single statement.

### ⚙️ Solution Walkthrough
A nested destructuring pattern is used to extract the \`name\` property directly.
\`\`\`javascript
const data = { user: { name: 'Frank' } };
const { user: { name } } = data;
// name is 'Frank'
\`\`\`
The pattern \`{ user: { name } }\` says: "Go into the \`data\` object, find the \`user\` property, go into that object, find its \`name\` property, and assign its value to a new variable called \`name\`."

### 📚 Key Concepts
- **Nested Destructuring**: A powerful syntax for extracting data from complex structures.
`,

  // problem explanation--> 54
  "es6-destructuring-function-parameters": `
### 💡 Problem Breakdown
A very common and powerful pattern is to use object destructuring directly in a function's parameter list. This allows the function to accept a single "options" object and easily access its properties with default values.

### ⚙️ Solution Walkthrough
The function signature destructures the incoming object.
\`\`\`javascript
function greet({ name, role = 'user' }) {
  return \`Hello \${name}, the \${role}.\`;
}
// The function is called with an object
greet({ name: 'Grace' }); // "Hello Grace, the user."
\`\`\`
This makes the function call more readable (you can see what each value is for) and flexible (the order of properties in the object doesn't matter).

### 📚 Key Concepts
- **Named Parameters**: Destructuring provides a way to simulate named parameters in JavaScript.
`,

  // problem explanation--> 55
  "es6-rest-and-spread-difference": `
### 💡 Problem Breakdown
This problem clarifies the crucial difference between the rest and spread syntaxes, which both use the same \`...\` notation.
- **Spread**: "Expands" an iterable into its individual elements. It's used in places where multiple elements are expected, like in an array literal or a function call.
- **Rest**: "Gathers" the remaining elements into a single new array or object. It's used in places where you are declaring variables, like a function parameter list or a destructuring assignment.

### ⚙️ Solution Walkthrough
Examples of both are shown.
\`\`\`javascript
// Spread: expands the array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest: gathers arguments into an array
function sum(...numbers) { // 'numbers' is [1, 2, 3]
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6
\`\`\`

### 📚 Key Concepts
- **Spread Syntax**: Used for expanding iterables.
- **Rest Parameters/Properties**: Used for collecting multiple elements/properties.
`,

  // problem explanation--> 56
  "es6-class-static-method": `
### 💡 Problem Breakdown
The \`static\` keyword defines a static method for a class. Static methods are called directly on the class itself, not on an instance of the class. They are often used as utility functions that are related to the class but don't depend on any instance-specific data.

### ⚙️ Solution Walkthrough
A static method is defined and called on the class.
\`\`\`javascript
class MyClass {
  static createId() {
    return 123;
  }
}
const id = MyClass.createId(); // Called on the class
// const instance = new MyClass();
// instance.createId(); // This would be a TypeError
\`\`\`
### 📚 Key Concepts
- **\`static\`**: A keyword to define methods that belong to the class rather than an instance.
`,

  // problem explanation--> 57
  "es6-class-getters-setters": `
### 💡 Problem Breakdown
The \`get\` and \`set\` syntaxes bind an object property to a function that will be called when that property is looked up or set. They create "accessor properties," which look like regular properties but execute functions.

### ⚙️ Solution Walkthrough
A \`fullName\` getter and setter are created.
\`\`\`javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // This is a getter
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
  // This is a setter
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
}
const p = new Person("Olivia", "Pope");
p.fullName = "John Doe"; // Setter is called
console.log(p.fullName); // Getter is called, returns "John Doe"
\`\`\`
### 📚 Key Concepts
- **Accessor Properties**: Getters and setters, which execute functions on property access.
`,

  // problem explanation--> 58
  "es6-promise-resolve-static": `
### 💡 Problem Breakdown
\`Promise.resolve(value)\` is a static helper method that returns a \`Promise\` object that is resolved with the given value. It's a shortcut for creating a promise that you know will be immediately successful.

### ⚙️ Solution Walkthrough
A resolved promise is created from a simple value.
\`\`\`javascript
const p = Promise.resolve("Instant Success");

p.then(value => console.log(value)); // Logs "Instant Success" immediately
\`\`\`
This is useful for starting a promise chain or for converting a value (or "thenable") into a standard promise.

### 📚 Key Concepts
- **\`Promise.resolve()\`**: A factory method for creating fulfilled promises.
`,

  // problem explanation--> 59
  "es6-promise-reject-static": `
### 💡 Problem Breakdown
\`Promise.reject(reason)\` is a static helper method that returns a \`Promise\` object that is rejected with the given reason.

### ⚙️ Solution Walkthrough
A rejected promise is created.
\`\`\`javascript
const p = Promise.reject(new Error("Instant Failure"));

p.catch(error => console.error(error.message)); // "Instant Failure"
\`\`\`
This is a concise way to create a promise that is guaranteed to fail, often used for signaling errors early in an async function.

### 📚 Key Concepts
- **\`Promise.reject()\`**: A factory method for creating rejected promises.
`,

  // problem explanation--> 60
  "es6-promise-race": `
### 💡 Problem Breakdown
\`Promise.race()\` is a static method that takes an array of promises. It returns a new promise that settles (either fulfills or rejects) as soon as the *first* promise in the array settles.

### ⚙️ Solution Walkthrough
Two promises with different delays are passed to \`Promise.race()\`. The faster one "wins".
\`\`\`javascript
const p1 = new Promise(res => setTimeout(() => res("one"), 500));
const p2 = new Promise(res => setTimeout(() => res("two"), 100));

Promise.race([p1, p2]).then(result => {
  console.log(result); // "two"
});
\`\`\`
A common use case is implementing a timeout by racing an operation against a promise that rejects after a set time.

### 📚 Key Concepts
- **\`Promise.race()\`**: A method for handling multiple promises where you only care about the result of the first one to finish.
`,

  // problem explanation--> 61
  "es6-map-vs-object": `
### 💡 Problem Breakdown
A \`Map\` is a built-in object designed specifically for storing key-value pairs.  
While plain objects (\`{}\`) can also store key-value data, \`Map\` offers several advantages.

### ⚙️ Solution Walkthrough
Consider using both a \`Map\` and an object:

\`\`\`javascript
// Using a Map
const m = new Map();
const objKey = { id: 1 };
m.set(objKey, "value");
console.log(m.get(objKey)); // "value"

// Using a plain object
const o = {};
o[objKey] = "value";
console.log(o[objKey]); // "[object Object]" – key coerced to string
\`\`\`

Key differences:
- **Any value as a key**: \`Map\` keys can be objects, functions, or primitives.
- **Insertion order**: Iteration over a \`Map\` preserves the order of insertion.
- **Convenient size**: \`Map.size\` gives the number of entries without manual counting.

### 📚 Key Concepts
- **Flexible keys**: No automatic string coercion.
- **Reliable iteration**: Keys iterate in the order added.
- **Built-in size property**: Quickly check how many items the \`Map\` holds.
`,
  // problem explanation--> 62
  "es6-map-iteration": `
### 💡 Problem Breakdown
\`Map\` objects are directly iterable. The default iterator yields a \`[key, value]\` array for each entry. This makes iterating over them with a \`for...of\` loop and destructuring very convenient.

### ⚙️ Solution Walkthrough
A \`for...of\` loop is used to iterate over a map's entries.
\`\`\`javascript
const map = new Map([['a', 1], ['b', 2]]);

for (const [key, value] of map) {
  console.log(\`Key: \${key}, Value: \${value}\`);
}
\`\`\`
Maps also have \`.keys()\`, \`.values()\`, and \`.forEach()\` methods for different iteration needs.

### 📚 Key Concepts
- **Iterable Protocol**: Maps implement the iterable protocol, making them compatible with \`for...of\`.
`,

  // problem explanation--> 63
  "es6-set-from-array": `
### 💡 Problem Breakdown
A \`Set\` is an ES6 data structure that lets you store a collection of **unique** values of any type. Passing an array to the \`new Set()\` constructor is a concise way to create a set containing the unique elements of that array.

### ⚙️ Solution Walkthrough
A set is created from an array with duplicate values.
\`\`\`javascript
const arr = ['a', 'b', 'a', 'c'];
const mySet = new Set(arr);

// mySet will be a Set object containing {'a', 'b', 'c'}
console.log(mySet.size); // 3
\`\`\`
### 📚 Key Concepts
- **\`Set\`**: The ideal data structure for problems involving uniqueness.
`,

  // problem explanation--> 64
  "es6-symbol-for": `
### 💡 Problem Breakdown
This problem highlights the difference between \`Symbol()\` and \`Symbol.for()\`.
- **\`Symbol(description)\`**: Creates a new, completely unique symbol every time it's called.
- **\`Symbol.for(key)\`**: Creates a symbol in (or retrieves a symbol from) a global symbol registry. Calling it with the same string key will always return the same symbol.

### ⚙️ Solution Walkthrough
The two methods are compared.
\`\`\`javascript
Symbol('myKey') === Symbol('myKey');      // false
Symbol.for('myKey') === Symbol.for('myKey'); // true
\`\`\`
\`Symbol.for()\` is used when you need to share symbols across different parts of an application or different realms (like iframes).

### 📚 Key Concepts
- **Global Symbol Registry**: A shared registry for symbols created with \`Symbol.for()\`.
`,

  // problem explanation--> 65
  "es6-symbol-as-property-key": `
### 💡 Problem Breakdown
A key use case for \`Symbol\` is to create unique property keys on objects. This helps prevent accidental name collisions with other properties, especially when adding metadata to an object you don't control.

### ⚙️ Solution Walkthrough
A symbol is used to add a "hidden" ID to an object.
\`\`\`javascript
const id = Symbol('id');
const user = { name: 'Test', [id]: 123 };

// Symbol properties are not included in for...in or Object.keys
console.log(Object.keys(user)); // ['name']

// They must be accessed directly with the symbol
console.log(user[id]); // 123
\`\`\`
### 📚 Key Concepts
- **Symbols as Keys**: A way to create non-enumerable, unique property keys.
`,

  // problem explanation--> 66
  "es6-iterable-protocol-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a core ES6 feature. The **iterable protocol** is a set of rules that allow JavaScript objects to define their own iteration behavior. An object is **iterable** if it has a method with the well-known symbol key \`[Symbol.iterator]\`. This method must return an **iterator** object. An iterator is an object with a \`.next()\` method that returns an object like \`{ value, done }\`.

### 📚 Key Concepts
- **Iterable Protocol**: The foundation that allows data structures like \`Array\`, \`String\`, \`Map\`, and \`Set\` to work with constructs like \`for...of\` and the spread syntax.
`,

  // problem explanation--> 67
  "es6-custom-iterator": `
### 💡 Problem Breakdown
This problem shows how to make a custom object conform to the iterable protocol, allowing it to be used in a \`for...of\` loop.

### ⚙️ Solution Walkthrough
A \`Range\` object is made iterable by implementing a \`[Symbol.iterator]\` method, which is a generator function.
\`\`\`javascript
const range = {
  from: 1,
  to: 3,
  // This makes the object iterable
  [Symbol.iterator]: function*() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};
for (const num of range) {
  console.log(num); // 1, then 2, then 3
}
\`\`\`
Generator functions (\`function*\`) are a very convenient way to implement iterators.

### 📚 Key Concepts
- **\`Symbol.iterator\`**: The well-known symbol that makes an object iterable.
- **Generator Functions**: A simple way to create iterator objects.
`,

  // problem explanation--> 68
  "es6-generator-iterator": `
### 💡 Problem Breakdown
When you call a generator function, it does not execute its body. It returns an **iterator** object. This object is the controller for the generator. You use its \`.next()\` method to start or resume the generator's execution.

### ⚙️ Solution Walkthrough
The iterator from a generator is used.
\`\`\`javascript
function* abcGenerator() {
  yield 'a';
  yield 'b';
}
const gen = abcGenerator(); // Get the iterator

gen.next(); // { value: 'a', done: false }
gen.next(); // { value: 'b', done: false }
gen.next(); // { value: undefined, done: true }
\`\`\`
### 📚 Key Concepts
- **Iterator Protocol**: The pattern of an object with a \`.next()\` method that returns \`{ value, done }\` objects.
`,

  // problem explanation--> 69
  "es6-generator-infinite-sequence": `
### 💡 Problem Breakdown
This problem demonstrates a key advantage of generators: they produce values lazily (on demand). This allows you to define a potentially infinite sequence of values without running out of memory, because the values are only computed when requested by \`.next()\`.

### ⚙️ Solution Walkthrough
A generator is created with an infinite \`while (true)\` loop.
\`\`\`javascript
function* naturalNumbers() {
  let n = 0;
  while (true) {
    yield n++;
  }
}
const gen = naturalNumbers();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 2
\`\`\`
### 📚 Key Concepts
- **Lazy Evaluation**: Values are only computed when they are needed.
- **Generators**: A powerful tool for working with sequences, especially large or infinite ones.
`,

  // problem explanation--> 70
  "es6-array-from-with-map": `
### 💡 Problem Breakdown
\`Array.from()\` is a versatile static method for creating arrays. Its optional second argument is a mapping function, which is called for each element of the new array as it's being created. This is often more efficient than creating an array and then calling \`.map()\` on it.

### ⚙️ Solution Walkthrough
An array is created and mapped in a single step.
\`\`\`javascript
// Create an array of 5 elements, mapping each element to its index squared.
const arr = Array.from({ length: 5 }, (value, index) => index * index);
// arr is [0, 1, 4, 9, 16]
\`\`\`
### 📚 Key Concepts
- **\`Array.from()\`**: A powerful and flexible factory for creating arrays.
`,

  // problem explanation--> 71
  "es6-array-of": `
### 💡 Problem Breakdown
This problem highlights a confusing behavior of the \`Array()\` constructor and shows how \`Array.of()\` provides a more predictable alternative.
- **\`new Array(7)\`**: If the \`Array\` constructor is called with a single numeric argument, it creates an empty array with that \`length\`.
- **\`Array.of(7)\`**: \`Array.of()\` always creates a new array with the arguments you pass, regardless of their type or number.

### ⚙️ Solution Walkthrough
The two methods are compared.
\`\`\`javascript
new Array(7); // Creates an empty array of length 7: [ , , , , , , ]
Array.of(7);  // Creates an array with one element: [7]
\`\`\`
Use \`Array.of()\` when you want to reliably create an array from a set of arguments.

### 📚 Key Concepts
- **\`Array.of()\`**: A predictable factory method for creating arrays from arguments.
`,

  // problem explanation--> 72
  "es6-object-is": `
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
### 📚 Key Concepts
- **\`Object.is()\`**: A method for "same-value" equality, which is slightly more precise than strict equality.
`,

  // problem explanation--> 73
  "es7-array-includes": `
### 💡 Problem Breakdown
The \`Array.prototype.includes()\` method (ES7/ES2016) provides a simple, readable way to check if an array contains a certain value. It returns \`true\` or \`false\`.

### ⚙️ Solution Walkthrough
It's a more intuitive alternative to the older \`indexOf()\` method and has one key advantage: it can correctly find \`NaN\`.
\`\`\`javascript
const arr = [1, 2, NaN];
arr.includes(2);   // true
arr.indexOf(2) !== -1; // true

arr.includes(NaN); // true
arr.indexOf(NaN);  // -1 (this is the key difference)
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.includes()\`**: The modern, preferred method for checking for value existence in an array.
`,

  // problem explanation--> 74
  "es7-exponentiation-operator": `
### 💡 Problem Breakdown
The exponentiation operator (\`**\`) was introduced in ES7/ES2016. It provides an infix notation for calculating powers, which is often more readable than the older \`Math.pow()\` function.

### ⚙️ Solution Walkthrough
The operator is compared to \`Math.pow()\`.
\`\`\`javascript
2 ** 10;      // 1024
Math.pow(2, 10); // 1024
\`\`\`
It also has a compound assignment version, \`**=\`.

### 📚 Key Concepts
- **Exponentiation Operator (\`**\`)**: A modern arithmetic operator.
`,

  // problem explanation--> 75
  "es8-async-await": `
### 💡 Problem Breakdown
\`async/await\` (ES8/ES2017) is syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks and behaves like synchronous code, avoiding long \`.then()\` chains and simplifying error handling.

### ⚙️ Solution Walkthrough
An \`async\` function is created. The \`await\` keyword pauses the function's execution until a promise settles.
\`\`\`javascript
async function fetchTodo() {
  try {
    const response = await fetch('/api/todos/1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
\`\`\`
1. **\`async function\`**: Makes a function implicitly return a promise.
2. **\`await\`**: Pauses the function, waits for the promise on its right to resolve, and resumes with the resolved value.
3. **Error Handling**: Use standard synchronous \`try...catch\` blocks.

### 📚 Key Concepts
- **\`async/await\`**: The modern standard for handling Promises.
`,

  // problem explanation--> 76
  "es8-object-values": `
### 💡 Problem Breakdown
\`Object.values()\` (ES8/ES2017) is a static method that returns an array of an object's own enumerable property values, in the same order as provided by a \`for...in\` loop.

### ⚙️ Solution Walkthrough
The method is called on an object.
\`\`\`javascript
const obj = { a: 1, b: 'hello', c: true };
Object.values(obj); // [1, 'hello', true]
\`\`\`
It's the counterpart to \`Object.keys()\`.

### 📚 Key Concepts
- **Object Introspection**: Methods for inspecting an object's contents.
`,

  // problem explanation--> 77
  "es8-object-entries": `
### 💡 Problem Breakdown
\`Object.entries()\` (ES8/ES2017) returns an array of an object's own enumerable string-keyed property \`[key, value]\` pairs.

### ⚙️ Solution Walkthrough
The method is called on an object.
\`\`\`javascript
const obj = { a: 1, b: 'hello' };
Object.entries(obj); // [['a', 1], ['b', 'hello']]
\`\`\`
This is very useful for iterating over an object's key-value pairs with methods like \`.map()\` or in a \`for...of\` loop.

### 📚 Key Concepts
- **\`Object.entries()\`**: A powerful method for converting an object into an iterable of its key-value pairs.
`,

  // problem explanation--> 78
  "es8-string-padding": `
### 💡 Problem Breakdown
ES8/ES2017 introduced \`padStart()\` and \`padEnd()\` to easily pad a string with another string until it reaches a desired length. This is very useful for formatting output, like aligning text or formatting numbers.

### ⚙️ Solution Walkthrough
The two methods are demonstrated.
\`\`\`javascript
// padStart: pads from the beginning
'5'.padStart(4, '0'); // "0005"

// padEnd: pads from the end
'hi'.padEnd(5, '.'); // "hi..."
\`\`\`
### 📚 Key Concepts
- **String Formatting**: Built-in methods for controlling the presentation of strings.
`,

  // problem explanation--> 79
  "es8-object-getownpropertydescriptors": `
### 💡 Problem Breakdown
\`Object.getOwnPropertyDescriptors()\` (ES8/ES2017) is a static method that returns all own property descriptors of a given object. This is a more complete version of \`Object.getOwnPropertyDescriptor()\`, which only gets one.

### ⚙️ Solution Walkthrough
Its primary use case is for creating a precise shallow clone of an object, including its getters, setters, and non-enumerable properties, which is not possible with \`Object.assign\` or spread syntax.
\`\`\`javascript
const obj = { get myGetter() { return 1; } };
const descriptors = Object.getOwnPropertyDescriptors(obj);
const clone = Object.create(Object.getPrototypeOf(obj), descriptors);
\`\`\`
### 📚 Key Concepts
- **Property Descriptors**: The underlying metadata of a property.
- **Accurate Cloning**: A tool for creating a more faithful copy of an object.
`,

  // problem explanation--> 80
  "es9-async-iteration": `
### 💡 Problem Breakdown
This is a conceptual problem about an ES9/ES2018 feature. **Asynchronous iteration** allows you to iterate over a sequence of values that are generated asynchronously. It's built on two key concepts:
1. **Async Iterable**: An object with a \`[Symbol.asyncIterator]\` method.
2. **Async Iterator**: The object returned by that method. Its \`.next()\` method returns a **Promise** that resolves to \`{ value, done }\`.

### ⚙️ Solution Walkthrough
This protocol is consumed using the \`for-await...of\` loop.
\`\`\`javascript
// An async generator is the easiest way to create an async iterable
async function* myAsyncSequence() {
  await delay(50); yield 1;
  await delay(50); yield 2;
}

// Consume it with for-await...of
async function run() {
  for await (const value of myAsyncSequence()) {
    console.log(value); // 1, then 2
  }
}
\`\`\`
### 📚 Key Concepts
- **Async Iteration**: The protocol for handling asynchronous sequences.
- **\`for-await...of\`**: The syntax for consuming async iterables.
`,

  // problem explanation--> 81
  "es9-promise-finally": `
### 💡 Problem Breakdown
The \`.finally()\` method (ES9/ES2018) is used to specify a callback that will be executed when a promise is "settled" – that is, either fulfilled or rejected. It's useful for cleanup code that needs to run regardless of the outcome.

### ⚙️ Solution Walkthrough
A \`.finally()\` block is added to a promise chain.
\`\`\`javascript
fetchData()
  .then(data => { /* process data */ })
  .catch(error => { /* handle error */ })
  .finally(() => {
    // This runs regardless of success or failure
    hideLoadingSpinner(); 
  });
\`\`\`
The handler receives no arguments, and its return value is ignored (unless it returns a rejected promise).

### 📚 Key Concepts
- **\`.finally()\`**: A method for running cleanup code after a promise settles.
`,

  // problem explanation--> 82
  "es9-rest-properties": `
### 💡 Problem Breakdown
ES9/ES2018 extended the rest syntax (\`...\`) to object destructuring. It allows you to collect the remaining own enumerable properties of an object into a new object.

### ⚙️ Solution Walkthrough
The \`id\` property is extracted, and the remaining properties are collected.
\`\`\`javascript
const user = { id: 1, name: 'Product', price: 99, inStock: true };
const { id, ...rest } = user;
// id is 1
// rest is { name: 'Product', price: 99, inStock: true }
\`\`\`
### 📚 Key Concepts
- **Rest Properties**: The object version of the rest pattern, used for destructuring.
`,

  // problem explanation--> 83
  "es9-spread-properties": `
### 💡 Problem Breakdown
ES9/ES2018 officially added the spread syntax (\`...\`) to object literals. It allows you to copy the own enumerable properties from an existing object into a new object literal.

### ⚙️ Solution Walkthrough
Spread is used to create a shallow copy with an updated property.
\`\`\`javascript
const user = { id: 1, name: 'Alice' };
const updatedUser = { ...user, name: 'Bob' };
// updatedUser is { id: 1, name: 'Bob' }
\`\`\`
This is a cornerstone of immutable update patterns in modern JavaScript.

### 📚 Key Concepts
- **Spread Properties**: The object version of the spread syntax, used in object literals.
`,

  // problem explanation--> 84
  "es9-regexp-lookbehind-assertion": `
### 💡 Problem Breakdown
ES9/ES2018 added lookbehind assertions to regular expressions, which were a long-awaited feature.
- **Positive Lookbehind \`(?<=Y)X\`**: Matches \`X\` only if it is immediately preceded by \`Y\`.
- **Negative Lookbehind \`(?<!Y)X\`**: Matches \`X\` only if it is not immediately preceded by \`Y\`.

### ⚙️ Solution Walkthrough
A positive lookbehind is used to match a number that is preceded by a dollar sign, without including the dollar sign in the match itself.
\`\`\`javascript
const str = "$100";
const match = str.match(/(?<=\\$)\\d+/);
// match[0] is "100"
\`\`\`
### 📚 Key Concepts
- **Lookarounds**: Zero-width assertions that check for patterns without consuming characters.
`,

  // problem explanation--> 85
  "es9-regexp-named-capture-groups": `
### 💡 Problem Breakdown
ES9/ES2018 introduced named capture groups, which allow you to give a name to a capture group instead of just relying on its numerical index. This makes regular expressions much more readable and self-documenting.

### ⚙️ Solution Walkthrough
A date is parsed using named capture groups.
\`\`\`javascript
const str = "2024-07-26";
const regex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const result = str.match(regex);
// result.groups is { year: '2024', month: '07', day: '26' }
\`\`\`
The matched groups are available on a \`.groups\` property of the match object.

### 📚 Key Concepts
- **Named Capture Groups**: A syntax for making regular expression captures more readable.
`,

  // problem explanation--> 86
  "es10-array-flat": `
### 💡 Problem Breakdown
The \`.flat()\` method (ES10/ES2019) is a built-in way to create a new array with all sub-array elements concatenated into it recursively up to a specified depth.

### ⚙️ Solution Walkthrough
The \`.flat()\` method is called on a nested array.
\`\`\`javascript
const nested = [1, [2, 3], [4, [5]]];
nested.flat();       // [1, 2, 3, 4, [5]] (default depth is 1)
nested.flat(2);      // [1, 2, 3, 4, 5]
nested.flat(Infinity); // Flattens completely, regardless of depth
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.flat()\`**: A modern, built-in method for flattening arrays.
`,

  // problem explanation--> 87
  "es10-array-flatmap": `
### 💡 Problem Breakdown
The \`.flatMap()\` method (ES10/ES2019) combines the functionality of \`.map()\` and \`.flat(1)\` into a single, more efficient operation. It maps each element using a mapping function and then flattens the result into a new array.

### ⚙️ Solution Walkthrough
\`.flatMap()\` is used to map numbers to themselves and their doubles.
\`\`\`javascript
const arr = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
// result is [1, 2, 2, 4, 3, 6]
\`\`\`
This is useful when your mapping function naturally returns an array for each element.

### 📚 Key Concepts
- **\`Array.prototype.flatMap()\`**: A convenient method for mapping and flattening in one step.
`,

  // problem explanation--> 88
  "es10-string-trimstart-trimend": `
### 💡 Problem Breakdown
ES10/ES2019 introduced \`trimStart()\` and \`trimEnd()\` as the standardized names for removing whitespace from the beginning or end of a string. They are aliases for the older, non-standard \`trimLeft()\` and \`trimRight()\`, which were kept for backward compatibility.

### ⚙️ Solution Walkthrough
The methods are used on a string with surrounding whitespace.
\`\`\`javascript
const str = "   hello   ";
str.trimStart(); // "hello   "
str.trimEnd();   // "   hello"
\`\`\`
### 📚 Key Concepts
- **String Formatting**: Standardized methods for whitespace removal.
`,

  // problem explanation--> 89
  "es10-object-fromentries": `
### 💡 Problem Breakdown
\`Object.fromEntries()\` (ES10/ES2019) performs the inverse operation of \`Object.entries()\`. It takes an iterable of key-value pairs (like an array of \`[key, value]\` arrays) and transforms it into a new object.

### ⚙️ Solution Walkthrough
An object is created from an array of pairs.
\`\`\`javascript
const entries = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(entries);
// obj is { a: 1, b: 2 }
\`\`\`
This is particularly useful for transforming a \`Map\` back into a plain object.

### 📚 Key Concepts
- **\`Object.fromEntries()\`**: A standard method for creating an object from an iterable.
`,

  // problem explanation--> 90
  "es10-optional-catch-binding": `
### 💡 Problem Breakdown
ES10/ES2019 introduced a small syntactic improvement. If you have a \`catch\` block where you don't need to use the error object itself (e.g., you just want to log a generic message), you can now omit the parentheses and the binding.

### ⚙️ Solution Walkthrough
The syntax \`catch {}\` is shown.
\`\`\`javascript
try {
  throw new Error();
} catch { // No (e) needed
  console.log("An error occurred, but the details are not needed.");
}
\`\`\`
### 📚 Key Concepts
- **Syntax Sugar**: A small improvement to the language syntax for cleaner code.
`,

  // problem explanation--> 91
  "es11-bigint": `
### 💡 Problem Breakdown
\`BigInt\` (ES11/ES2020) is a new primitive numeric type that can represent integers with arbitrary precision, overcoming the limitations of the standard \`Number\` type (which cannot safely represent integers larger than \`2^53 - 1\`).

### ⚙️ Solution Walkthrough
A \`BigInt\` is created using the \`n\` suffix.
\`\`\`javascript
const maxSafe = Number.MAX_SAFE_INTEGER;
const bigNum = BigInt(maxSafe) + 2n;

console.log(bigNum.toString()); // "9007199254740993"
\`\`\`
### 📚 Key Concepts
- **\`BigInt\`**: A primitive type for arbitrary-precision integer arithmetic.
- **Type Safety**: You cannot mix \`BigInt\` and \`Number\` types in operations without explicit conversion.
`,

  // problem explanation--> 92
  "es11-dynamic-import": `
### 💡 Problem Breakdown
This is a conceptual problem about an ES11/ES2020 feature. Standard \`import\` statements are static and must be at the top level of a module. **Dynamic \`import()\`** is a function-like form that allows you to load an ES module on demand, from anywhere in your code. It returns a promise that resolves with the module namespace object.

### ⚙️ Solution Walkthrough
A module is loaded dynamically inside a click handler.
\`\`\`javascript
// Conceptual
button.addEventListener('click', async () => {
  try {
    const utils = await import('./utils.js');
    utils.doSomething();
  } catch(e) { /* handle error */ }
});
\`\`\`
This is the standard mechanism for **code splitting** in modern web applications, where code for a specific feature is only downloaded when the user needs it.

### 📚 Key Concepts
- **Dynamic \`import()\`**: A promise-based API for on-demand module loading.
- **Code Splitting**: A performance optimization technique.
`,

  // problem explanation--> 93
  "es11-nullish-coalescing": `
### 💡 Problem Breakdown
The nullish coalescing operator (\`??\`) (ES11/ES2020) is a logical operator that returns its right-hand side operand only when its left-hand side operand is \`null\` or \`undefined\`. It's a safer alternative to \`||\` for providing defaults.

### ⚙️ Solution Walkthrough
The operator is used to provide a default, showing how it treats \`0\` and \`''\` as valid values.
\`\`\`javascript
const count = 0;
const defaultCount = count ?? 10; // defaultCount is 0

const text = '';
const defaultText = text ?? 'default'; // defaultText is ''
\`\`\`
### 📚 Key Concepts
- **Nullish Coalescing Operator (??)**: Provides defaults specifically for \`null\` and \`undefined\`.
`,

  // problem explanation--> 94
  "es11-optional-chaining": `
### 💡 Problem Breakdown
The optional chaining operator (\`?.\`) (ES11/ES2020) permits reading the value of a property located deep within a chain of connected objects without having to explicitly validate each reference. If a reference is \`null\` or \`undefined\`, the expression "short-circuits" and evaluates to \`undefined\` instead of throwing an error.

### ⚙️ Solution Walkthrough
A nested property is accessed safely.
\`\`\`javascript
const user = { name: 'Bob' }; // user has no 'address' property
const street = user.address?.street; // street is undefined
\`\`\`
### 📚 Key Concepts
- **Optional Chaining Operator (?.)**: A modern syntax for safely accessing nested properties.
`,

  // problem explanation--> 95
  "es11-promise-allsettled": `
### 💡 Problem Breakdown
\`Promise.allSettled()\` (ES11/ES2020) is a promise combinator that, unlike \`Promise.all\`, never rejects. It waits for all promises to settle and returns a promise that resolves with an array of objects describing the outcome of each promise.

### ⚙️ Solution Walkthrough
\`Promise.allSettled()\` is called with one resolving and one rejecting promise.
\`\`\`javascript
Promise.allSettled([Promise.resolve('OK'), Promise.reject('Fail')])
  .then(results => {
    /* results is [
      { status: 'fulfilled', value: 'OK' },
      { status: 'rejected', reason: 'Fail' }
    ] */
  });
\`\`\`
### 📚 Key Concepts
- **\`Promise.allSettled()\`**: A method to get the outcome of every promise, without the fail-fast behavior of \`Promise.all\`.
`,

  // problem explanation--> 96
  "es11-globalthis": `
### 💡 Problem Breakdown
\`globalThis\` (ES11/ES2020) provides a standard, environment-agnostic way to access the global object. Previously, this was \`window\` in browsers, \`global\` in Node.js, and \`self\` in Web Workers.

### ⚙️ Solution Walkthrough
The \`globalThis\` property is accessed.
\`\`\`javascript
// In a browser:
console.log(globalThis === window); // true
\`\`\`
### 📚 Key Concepts
- **\`globalThis\`**: A standard property for accessing the global object.
`,

  // problem explanation--> 97
  "es11-string-matchall": `
### 💡 Problem Breakdown
The \`String.prototype.matchAll()\` method (ES11/ES2020) returns an **iterator** of all result objects for a global regular expression. This is more convenient than the older pattern of repeatedly calling \`regex.exec()\` in a loop.

### ⚙️ Solution Walkthrough
\`matchAll\` is used to find all occurrences of a word.
\`\`\`javascript
const text = 'cat dog cat';
const regex = /cat/g;
const matches = [...text.matchAll(regex)];
// matches is an array of match objects
// matches[0][0] is 'cat', matches[0].index is 0
// matches[1][0] is 'cat', matches[1].index is 8
\`\`\`
### 📚 Key Concepts
- **\`String.prototype.matchAll()\`**: The modern way to get all matches for a global regex.
`,

  // problem explanation--> 98
  "es12-logical-assignment-operators": `
### 💡 Problem Breakdown
ES12/ES2021 introduced logical assignment operators, which are a shorthand for combining a logical operation with an assignment.
- **\`||=\` (Logical OR assignment)**: \`x ||= y\` is like \`x = x || y\`. Assigns if \`x\` is falsy.
- **\`&&=\` (Logical AND assignment)**: \`x &&= y\` is like \`x = x && y\`. Assigns if \`x\` is truthy.
- **\`??=\` (Logical nullish assignment)**: \`x ??= y\` is like \`x = x ?? y\`. Assigns if \`x\` is nullish.

### 📚 Key Concepts
- **Logical Assignment Operators**: Concise syntax for conditional assignments.
`,

  // problem explanation--> 99
  "es12-string-replaceall": `
### 💡 Problem Breakdown
The \`.replaceAll()\` method (ES12/ES2021) provides a simple way to replace *all* occurrences of a substring with another string, without needing to use a regular expression.

### ⚙️ Solution Walkthrough
All occurrences of a character are replaced.
\`\`\`javascript
const str = "The quick brown fox jumps over the lazy dog.";
str.replaceAll('o', 'X'); // "The quick brXwn fXx jumps Xver the lazy dXg."
\`\`\`
This is simpler and more readable than \`str.replace(/o/g, 'X')\`.

### 📚 Key Concepts
- **\`String.prototype.replaceAll()\`**: A modern, convenient method for global string replacement.
`,

  // problem explanation--> 100
  "es12-promise-any": `
### 💡 Problem Breakdown
\`Promise.any()\` (ES12/ES2021) takes an array of promises and returns a single promise that fulfills as soon as *any* of the input promises fulfill, with the value of that first fulfilled promise. It only rejects if *all* of the input promises reject.

### ⚙️ Solution Walkthrough
\`Promise.any()\` is used with one rejecting and one resolving promise.
\`\`\`javascript
const p1 = Promise.reject('Failure');
const p2 = new Promise(res => setTimeout(() => res('First Success'), 100));

Promise.any([p1, p2]).then(result => {
  console.log(result); // "First Success"
});
\`\`\`
### 📚 Key Concepts
- **\`Promise.any()\`**: A method to get the value of the first promise to fulfill.
- **Redundancy**: A common use case for this method is to build redundant, fault-tolerant systems.
`,

  // problem explanation--> 101
  "es12-numeric-separators": `
### 💡 Problem Breakdown
This feature (ES2021) is purely for developer readability. It allows you to use an underscore (\`_\`) as a separator within number literals to make large numbers easier to read. The JavaScript engine completely ignores the underscores.

### ⚙️ Solution Walkthrough
A large number is written with separators to improve its readability.
\`\`\`javascript
const readableNumber = 1_000_000_000;
const normalNumber = 1000000000;

console.log(readableNumber === normalNumber); // true
\`\`\`
This works for integers, decimals, and numbers in other bases (binary, hex, octal).

### 📚 Key Concepts
- **Readability**: The primary goal of this feature is to make code easier for humans to read and understand.
- **Syntax Sugar**: A feature that provides a cleaner syntax without changing the underlying functionality of the language.
`,

  // problem explanation--> 102
  "es12-weakref": `
### 💡 Problem Breakdown
This is a conceptual problem about an advanced feature (ES2021). A \`WeakRef\` object lets you hold a "weak reference" to another object (the "target"). A weak reference does not prevent the target object from being garbage collected if it's the only reference remaining.

### ⚙️ Solution Walkthrough
A \`WeakRef\` is created, and its value is accessed using the \`.deref()\` method.
\`\`\`javascript
let myObject = { data: 'some data' };
const ref = new WeakRef(myObject);

// To access the object, you must call deref()
let retrievedObject = ref.deref();
// retrievedObject is { data: 'some data' }

// If we remove the only strong reference...
myObject = null;

// ...after some time, the garbage collector may run.
// If it does, deref() will now return undefined.
// retrievedObject = ref.deref(); // might return undefined
\`\`\`
This is a low-level feature used for specific caching or resource management scenarios and should be used with caution.

### 📚 Key Concepts
- **Weak References**: A reference that does not prevent an object from being garbage collected.
- **Garbage Collection**: The automatic process of freeing up memory that is no longer in use.
`,

  // problem explanation--> 103
  "es13-class-fields": `
### 💡 Problem Breakdown
This modern feature (ES2022) provides a more concise syntax for defining properties directly on a class body, rather than inside the constructor. These are called "public instance fields."

### ⚙️ Solution Walkthrough
A class field is declared directly within the class.
\`\`\`javascript
class MyClass {
  // This is a public instance field
  instanceField = 'hello from a field';
  
  constructor() {
    // The field is already initialized on 'this' before the constructor runs
  }
}

const instance = new MyClass();
console.log(instance.instanceField); // "hello from a field"
\`\`\`
This syntax is cleaner for properties that don't depend on constructor arguments.

### 📚 Key Concepts
- **Class Fields**: A modern syntax for defining instance properties.
`,

  // problem explanation--> 104
  "es13-private-methods-and-fields": `
### 💡 Problem Breakdown
This feature (ES2022) introduces truly private class members to JavaScript using a hash \`#\` prefix. Private fields and methods are only accessible from within the class body itself, providing strong encapsulation.

### ⚙️ Solution Walkthrough
A private field and a private method are defined and used.
\`\`\`javascript
class MyClass {
  #privateField = "secret"; // Private field
  
  #privateMethod() { // Private method
    return this.#privateField;
  }
  
  publicMethod() {
    return this.#privateMethod();
  }
}
const instance = new MyClass();
instance.publicMethod(); // "secret"
// instance.#privateField; // Throws a SyntaxError
\`\`\`
### 📚 Key Concepts
- **Encapsulation**: A core principle of OOP, enforced here by the language.
- **Private Members**: Fields and methods accessible only within the class.
`,

  // problem explanation--> 105
  "es13-static-class-features": `
### 💡 Problem Breakdown
This problem covers modern static features (ES2022) for classes.
- **Static Fields**: Properties that belong to the class itself, not instances.
- **Private Static Fields/Methods**: Static members that are private to the class.
- **Static Initialization Blocks**: A \`static {}\` block that runs once when the class is defined, used for complex static initialization.

### ⚙️ Solution Walkthrough
The features are demonstrated in a single class.
\`\`\`javascript
class MyClass {
  static publicStaticField = 'public';
  static #privateStaticField = 42;

  static {
    // This block runs once on class definition
    console.log('Static block is initializing...');
    console.log(this.#privateStaticField);
  }
}
\`\`\`
### 📚 Key Concepts
- **Static Members**: Belong to the class, not instances.
- **Class Initialization**: The \`static\` block provides a dedicated scope for class-level setup.
`,

  // problem explanation--> 106
  "es13-array-at": `
### 💡 Problem Breakdown
The \`.at()\` method (ES2022) provides a more convenient way to access array elements. Its key feature is that it accepts negative indices, which count back from the end of the array.

### ⚙️ Solution Walkthrough
The method is used to get the last element.
\`\`\`javascript
const arr = [1, 2, 3, 4];

// The new, convenient way
arr.at(-1); // 4

// The old way
arr[arr.length - 1]; // 4
\`\`\`
\`.at()\` is also available on strings and TypedArrays.

### 📚 Key Concepts
- **Negative Indexing**: A common feature in other languages, now available in JavaScript via \`.at()\`.
`,

  // problem explanation--> 107
  "es13-regexp-match-indices": `
### 💡 Problem Breakdown
This feature (ES2022) adds a \`/d\` flag to regular expressions. When this flag is used, the result object from a match (e.g., from \`.exec()\`) will contain an additional \`.indices\` property. This property is an array that holds the start and end indices of the matched capture groups.

### ⚙️ Solution Walkthrough
The \`/d\` flag is used to get match indices.
\`\`\`javascript
const text = 'a=1 b=2';
const regex = /a=(?<numA>\\d+)/d;
const match = regex.exec(text);

// match.indices.groups.numA will be [2, 3]
\`\`\`
This is very useful for tasks that require knowing the exact position of a match within the original string.

### 📚 Key Concepts
- **Regular Expressions**: The \`/d\` flag extends their functionality.
- **Match Indices**: Provides positional information about captures.
`,

  // problem explanation--> 108
  "es13-object-hasown": `
### 💡 Problem Breakdown
\`Object.hasOwn()\` (ES2022) is a static method that is the recommended replacement for \`Object.prototype.hasOwnProperty()\`. It is safer because it works correctly even on objects that do not inherit from \`Object.prototype\` (created with \`Object.create(null)\`) or objects that have overridden the \`hasOwnProperty\` method.

### ⚙️ Solution Walkthrough
The method is compared to the old way.
\`\`\`javascript
const obj = Object.create(null);
obj.prop = 'exists';

// This is the safe, modern way
Object.hasOwn(obj, 'prop'); // true

// The old way would fail here because obj has no prototype
// obj.hasOwnProperty('prop'); // TypeError
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: \`Object.hasOwn()\` is the modern, robust way to check for an object's own properties.
`,

  // problem explanation--> 109
  "es13-error-cause": `
### 💡 Problem Breakdown
The \`cause\` property (ES2022) allows you to specify the original error that caused another error. This is extremely useful for wrapping low-level errors in higher-level, more specific errors while preserving the original stack trace for debugging.

### ⚙️ Solution Walkthrough
An error is created with a \`cause\`.
\`\`\`javascript
try {
  try {
    // Low-level error
    throw new Error("Network connection lost");
  } catch (lowLevelError) {
    // Wrap it in a higher-level error with a 'cause'
    throw new Error("Failed to fetch user data", { cause: lowLevelError });
  }
} catch (highLevelError) {
  console.log(highLevelError.message);        // "Failed to fetch user data"
  console.log(highLevelError.cause.message); // "Network connection lost"
}
\`\`\`
### 📚 Key Concepts
- **Error Chaining**: A pattern for creating a chain of errors that shows the root cause of a failure.
`,

  // problem explanation--> 110
  "es13-top-level-await": `
### 💡 Problem Breakdown
Top-level \`await\` (ES2022) is a feature that allows the \`await\` keyword to be used at the top level of an ES module. This means you don't need to wrap it in an \`async\` function. It's particularly useful for modules that need to perform an async operation to initialize themselves.

### ⚙️ Solution Walkthrough
A conceptual module that fetches configuration data before exporting its functions.
\`\`\`javascript
// --- config.js (an ES module) ---
const response = await fetch('/api/config');
export const config = await response.json();

// --- main.js ---
// The execution of this module will pause until config.js has finished awaiting.
import { config } from './config.js'; 
console.log(config);
\`\`\`
### 📚 Key Concepts
- **Top-Level \`await\`**: A feature for handling async setup and initialization within modules.
`,

  // problem explanation--> 111
  "es14-array-findlast": `
### 💡 Problem Breakdown
The \`.findLast()\` method (ES2023) is the counterpart to \`.find()\`. It iterates an array from right to left and returns the value of the **last** element that satisfies the provided testing function.

### ⚙️ Solution Walkthrough
The method is used to find the last even number.
\`\`\`javascript
const arr = [1, 2, 3, 4, 5];
const lastEven = arr.findLast(n => n % 2 === 0); // 4
\`\`\`
This is more convenient and often more readable than reversing the array or using a complex loop.

### 📚 Key Concepts
- **New Array Methods**: \`.findLast()\` provides a convenient reverse search.
`,

  // problem explanation--> 112
  "es14-array-findlastindex": `
### 💡 Problem Breakdown
The \`.findLastIndex()\` method (ES2023) is the counterpart to \`.findIndex()\`. It iterates an array from right to left and returns the index of the **last** element that satisfies the testing function.

### ⚙️ Solution Walkthrough
The method is used to find the index of the last even number.
\`\`\`javascript
const arr = [1, 2, 3, 4, 5];
const lastEvenIndex = arr.findLastIndex(n => n % 2 === 0); // 3
\`\`\`
### 📚 Key Concepts
- **New Array Methods**: \`.findLastIndex()\` provides a convenient reverse index search.
`,

  // problem explanation--> 113
  "es14-array-immutable-methods": `
### 💡 Problem Breakdown
ES2023 introduced a set of new array methods that perform common operations but return a **new, modified array** instead of mutating the original. This is a huge benefit for functional programming and immutable state management.
- **\`.toSorted()\`**: Immutable version of \`.sort()\`
- **\`.toReversed()\`**: Immutable version of \`.reverse()\`
- **\`.toSpliced()\`**: Immutable version of \`.splice()\`
- **\`.with(index, value)\`**: Immutable way to set an element at an index.

### ⚙️ Solution Walkthrough
The \`.toSorted()\` method is demonstrated.
\`\`\`javascript
const original = [3, 1, 2];
const sorted = original.toSorted();

console.log(original); // [3, 1, 2] (unchanged)
console.log(sorted);   // [1, 2, 3] (new array)
\`\`\`
### 📚 Key Concepts
- **Immutability**: A key principle in modern JavaScript development for writing predictable code.
`,

  // problem explanation--> 114
  "es14-hashbang-grammar": `
### 💡 Problem Breakdown
This is a conceptual problem about a feature (ES2023) that standardizes an existing practice. A "hashbang" or "shebang" is a character sequence at the very beginning of a script (\`#!\`). In Unix-like operating systems, it tells the system what interpreter to use to run the file.

### ⚙️ Solution Walkthrough
A JavaScript file intended to be a command-line tool.
\`\`\`javascript
#!/usr/bin/env node

console.log('Hello from a Node.js script!');
\`\`\`
JavaScript engines will now formally treat this line as a comment, ensuring that JS files containing a hashbang are parsed correctly in any environment.

### 📚 Key Concepts
- **Shebang/Hashbang**: A standard convention for making script files executable.
`,

  // problem explanation--> 115
  "es14-symbols-as-weakmap-keys": `
### 💡 Problem Breakdown
This is a conceptual problem about a modern update (ES2023). Previously, only objects could be used as keys in \`WeakMap\`s and \`WeakSet\`s. This feature extends that capability to allow **non-registered, unique \`Symbol\`s** to be used as keys as well.

### ⚙️ Solution Walkthrough
A unique symbol is used as a key.
\`\`\`javascript
const weakMap = new WeakMap();
const myUniqueSymbol = Symbol('private');

weakMap.set(myUniqueSymbol, 'some private data');
\`\`\`
This allows these unique symbols to be garbage collected along with their associated values if they are no longer referenced anywhere else.

### 📚 Key Concepts
- **\`WeakMap\`**: A map that holds weak references to its keys.
- **\`Symbol\`**: A primitive for unique identifiers.
`,

  // problem explanation--> 116
  "es15-promise-withresolvables": `
### 💡 Problem Breakdown
\`Promise.withResolvables()\` is a new static method (ES2024) that creates a promise and conveniently exposes its \`resolve\` and \`reject\` functions. This simplifies patterns where you need to create a promise and settle it from outside the constructor's scope.

### ⚙️ Solution Walkthrough
The method is used to create a "deferred" promise.
\`\`\`javascript
const { promise, resolve, reject } = Promise.withResolvables();

// We can now use the promise
promise.then(console.log);

// And resolve it from somewhere else, later
setTimeout(() => resolve("Resolved from outside!"), 100);
\`\`\`
This avoids having to define \`let resolveFunc;\` outside the scope of a \`new Promise\` constructor.

### 📚 Key Concepts
- **\`Promise.withResolvables()\`**: A new utility for creating promises where the settlement functions are needed externally.
`,

  // problem explanation--> 117
  "es6-proxy-basic": `
### 💡 Problem Breakdown
A \`Proxy\` is an object that wraps another object (the "target") and allows you to intercept fundamental operations. A \`set\` trap is a function on the proxy's handler that intercepts property *writes* (assignments), which is ideal for validation.

### ⚙️ Solution Walkthrough
A proxy is created that validates that the \`age\` property can only be set to a number.
\`\`\`javascript
const target = { age: 0 };
const handler = {
  set: function(obj, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number.');
    }
    return Reflect.set(obj, prop, value);
  }
};
const proxy = new Proxy(target, handler);
proxy.age = 30; // works
// proxy.age = 'thirty'; // throws TypeError
\`\`\`
### 📚 Key Concepts
- **Proxy \`set\` Trap**: A handler for intercepting property assignments.
- **Metaprogramming**: Writing code that operates on other code.
`,

  // problem explanation--> 118
  "es6-proxy-get-trap": `
### 💡 Problem Breakdown
The \`get\` trap on a proxy's handler intercepts property *reads*. This is useful for things like logging, creating virtual properties, or providing default values.

### ⚙️ Solution Walkthrough
A proxy is created that returns a default value for any property that doesn't exist on the target object.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 'default';
  }
};
const proxy = new Proxy(target, handler);

proxy.a; // 1
proxy.b; // 'default'
\`\`\`
### 📚 Key Concepts
- **Proxy \`get\` Trap**: A handler for intercepting property reads.
`,

  // problem explanation--> 119
  "es6-reflect-api": `
### 💡 Problem Breakdown
The \`Reflect\` object is a built-in object that provides methods for interceptable JavaScript operations. The methods on \`Reflect\` have a one-to-one correspondence with the proxy traps. It is a best practice to use these \`Reflect\` methods inside proxy traps to forward the operation to the target object.

### ⚙️ Solution Walkthrough
\`Reflect.get()\` is used inside a proxy handler.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  get: function(obj, prop) {
    console.log('Getting...');
    // Use Reflect.get to perform the default operation
    return Reflect.get(obj, prop); 
  }
};
const proxy = new Proxy(target, handler);
proxy.a; // Logs "Getting..." and returns 1
\`\`\`
### 📚 Key Concepts
- **\`Reflect\`**: A standard library for meta-programming that mirrors the proxy traps.
`,

  // problem explanation--> 120
  "es6-generator-for-custom-iteration": `
### 💡 Problem Breakdown
This problem shows how to make a custom class iterable by implementing a \`[Symbol.iterator]\` method using a generator function. This is the cleanest and most modern way to define custom iteration behavior.

### ⚙️ Solution Walkthrough
A \`Team\` class has a generator method for its iterator.
\`\`\`javascript
class Team {
  constructor(...members) { this.members = members; }
  
  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}
const team = new Team('Alice', 'Bob');
// Because it's iterable, we can use for...of
for (const person of team) { console.log(person); }
\`\`\`
### 📚 Key Concepts
- **\`Symbol.iterator\`**: The well-known symbol that makes an object iterable.
- **Generator Methods**: Using the \`*\` syntax on a method to make it a generator.
`,

  // problem explanation--> 121
  "es6-tagged-template-literals": `
### 💡 Problem Breakdown
A "tagged template literal" is a more advanced form of a template literal. If you place a function name (a "tag") before the template literal, the function is called with the literal's contents. This allows you to parse and process the string in a custom way.

### ⚙️ Solution Walkthrough
A tag function is created to highlight interpolated values.
\`\`\`javascript
function highlight(strings, ...values) {
  // 'strings' is an array of the static string parts.
  // 'values' is an array of the interpolated values.
  let result = '';
  strings.forEach((str, i) => {
    result += str;
    if (values[i]) {
      result += \`<mark>\${values[i]}</mark>\`;
    }
  });
  return result;
}
const name = 'ES6';
const output = highlight\`Hello, \${name}!\`; // "Hello, <mark>ES6</mark>!"
\`\`\`
### 📚 Key Concepts
- **Tagged Template Literals**: A powerful feature for creating domain-specific languages (DSLs) or for string sanitization.
`,

  // problem explanation--> 122
  "es6-well-known-symbols": `
### 💡 Problem Breakdown
This is a conceptual problem. "Well-known symbols" are built-in \`Symbol\` values that are available as static properties on the \`Symbol\` object. They are used by JavaScript's built-in algorithms, and you can add them as properties to your own objects to hook into and customize these algorithms.

### ⚙️ Solution Walkthrough
Examples of well-known symbols and their purpose:
- **\`Symbol.iterator\`**: Makes an object iterable (for \`for...of\`).
- **\`Symbol.hasInstance\`**: Customizes the behavior of the \`instanceof\` operator.
- **\`Symbol.toPrimitive\`**: Customizes how an object is converted to a primitive value.
- **\`Symbol.toStringTag\`**: Customizes the string returned by \`Object.prototype.toString.call()\`.

### 📚 Key Concepts
- **Well-Known Symbols**: A low-level mechanism for customizing language behavior.
`,

  // problem explanation--> 123
  "es6-tail-call-optimization-conceptual": `
### 💡 Problem Breakdown
Tail Call Optimization (TCO) is a feature where a JavaScript engine can execute a function in a "tail-call position" without growing the call stack. A call is in a tail position if it's the absolute last action performed by a function before it returns.

### ⚙️ Solution Walkthrough
A tail-recursive function uses an accumulator to make the recursive call the final action.
\`\`\`javascript
// NOT in tail position (multiplication is the last action)
function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }

// IS in tail position (the recursive call is the last action)
function factorialTCO(n, acc = 1) {
  return n <= 1 ? acc : factorialTCO(n - 1, n * acc);
}
\`\`\`
**Note**: While part of the ES6 spec, TCO is not widely implemented in major JS engines, so this is mainly a theoretical concept in JavaScript.

### 📚 Key Concepts
- **Tail Call**: A function call that is the final action.
- **Accumulator Pattern**: A technique for converting functions to be tail-recursive.
`,

  // problem explanation--> 124
  "es6-binary-and-octal-literals": `
### 💡 Problem Breakdown
ES6 introduced a standardized syntax for writing number literals in binary (base-2) and octal (base-8).

### ⚙️ Solution Walkthrough
The \`0b\` prefix is for binary, and \`0o\` is for octal.
\`\`\`javascript
const binary = 0b101; // 1*4 + 0*2 + 1*1 = 5
const octal = 0o10;   // 1*8 + 0*1 = 8

console.log(binary); // 5
console.log(octal);  // 8
\`\`\`
### 📚 Key Concepts
- **Number Literals**: Different syntaxes for representing numbers in code.
`,

  // problem explanation--> 125
  "es6-unicode-code-point-escapes": `
### 💡 Problem Breakdown
ES6 introduced a new Unicode escape sequence syntax, \`\\u{...}\`, that can represent any Unicode code point, including those beyond the 16-bit Basic Multilingual Plane (like many emoji).

### ⚙️ Solution Walkthrough
An emoji is represented using the new syntax.
\`\`\`javascript
// The old syntax couldn't represent this character with a single escape.
const emoji = '\\u{1F60A}'; // Smiling face emoji 😊
\`\`\`
### 📚 Key Concepts
- **Unicode**: The standard for encoding characters.
- **Code Points**: The numeric value assigned to each character.
`,

  // problem explanation--> 126
  "es6-subclassing-builtins": `
### 💡 Problem Breakdown
With the \`class\` and \`extends\` syntax, it became straightforward to create subclasses of built-in JavaScript classes like \`Array\`, \`Error\`, or \`Map\`.

### ⚙️ Solution Walkthrough
A \`MyArray\` class extends \`Array\` and adds a new method.
\`\`\`javascript
class MyArray extends Array {
  last() {
    return this[this.length - 1];
  }
}
const arr = new MyArray(1, 2, 3);
arr.last(); // 3
arr.map(x => x*2) instanceof MyArray; // true
\`\`\`
Instances of \`MyArray\` will have all the standard array methods as well as the new custom methods.

### 📚 Key Concepts
- **Class Inheritance**: The \`extends\` keyword can be used with built-in constructors.
`,

  // problem explanation--> 127
  "es6-new-target-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about an ES6 meta-property. \`new.target\` is available inside any function.
- If the function is called with the \`new\` keyword (as a constructor), \`new.target\` will be a reference to the constructor function itself.
- If the function is called normally, \`new.target\` will be \`undefined\`.

### ⚙️ Solution Walkthrough
A function checks how it was called.
\`\`\`javascript
function MyConstructor() {
  if (!new.target) {
    throw 'MyConstructor must be called with new';
  }
}
\`\`\`
This was used to make old-style constructor functions safer before ES6 classes made calling without \`new\` a \`TypeError\` by default.

### 📚 Key Concepts
- **\`new.target\`**: A meta-property for introspecting how a function was invoked.
`,

  // problem explanation--> 128
  "es6-map-with-object-keys": `
### 💡 Problem Breakdown
This problem highlights a key advantage of the \`Map\` data structure over plain objects. A \`Map\` can use *any* value as a key, including objects, functions, or other primitives. A plain object will coerce non-string keys into strings.

### ⚙️ Solution Walkthrough
An object reference is used as a key in a \`Map\`.
\`\`\`javascript
const map = new Map();
const keyObject = { id: 1 };

map.set(keyObject, 'some data');
map.get(keyObject); // 'some data'

const obj = {};
obj[keyObject] = 'some data'; // This key becomes "[object Object]"
\`\`\`
### 📚 Key Concepts
- **\`Map\`**: A versatile key-value store that supports any data type for its keys.
`,

  // problem explanation--> 129
  "es6-weakmap-for-private-data": `
### 💡 Problem Breakdown
This problem demonstrates a classic pattern for creating private data associated with an object, used before the \`#\` private fields syntax. A \`WeakMap\` is used, where object instances are the keys and an object of private data is the value.

### ⚙️ Solution Walkthrough
A \`WeakMap\` is used to store private data for a class.
\`\`\`javascript
const privateData = new WeakMap();
class Person {
  constructor(name) {
    privateData.set(this, { name });
  }
  getName() {
    return privateData.get(this).name;
  }
}
\`\`\`
Because it's a \`WeakMap\`, if a \`Person\` instance is garbage collected, its entry will also be removed from the \`WeakMap\`, preventing memory leaks.

### 📚 Key Concepts
- **\`WeakMap\`**: A map that holds weak references to its keys, allowing them to be garbage collected.
- **Closures**: The \`privateData\` map is kept in a closure, making it inaccessible from outside.
`,

  // problem explanation--> 130
  "es6-weakset-for-object-tracking": `
### 💡 Problem Breakdown
A \`WeakSet\` is a collection that only stores objects and holds them "weakly." This means that if an object in the \`WeakSet\` has no other references to it, it can be garbage collected. This is useful for tracking a group of objects without causing memory leaks.

### ⚙️ Solution Walkthrough
An object is added to a \`WeakSet\`.
\`\`\`javascript
const ws = new WeakSet();
let obj = { id: 1 };
ws.add(obj);

// ws.has(obj) is true

// If we remove the only strong reference...
obj = null;
// ...the object will eventually be garbage collected and removed from the WeakSet.
\`\`\`
### 📚 Key Concepts
- **Weak References**: A reference that does not prevent an object from being garbage collected.
`,

  // problem explanation--> 131
  "es9-regexp-s-flag": `
### 💡 Problem Breakdown
ES9/ES2018 introduced the "dotAll" mode for regular expressions, enabled by the \`/s\` flag. In this mode, the dot character (\`.\`) will match any character, *including* newline characters (\`\\n\`), which it does not do by default.

### ⚙️ Solution Walkthrough
A regex with the \`/s\` flag is used to match a multiline string.
\`\`\`javascript
const regexDefault = /hello.world/;
regexDefault.test('hello\\nworld'); // false

const regexDotAll = /hello.world/s;
regexDotAll.test('hello\\nworld'); // true
\`\`\`
### 📚 Key Concepts
- **Regular Expressions**: The \`/s\` flag modifies the behavior of the \`.\` metacharacter.
`,

  // problem explanation--> 132
  "es9-regexp-unicode-property-escapes": `
### 💡 Problem Breakdown
ES9/ES2018 introduced Unicode property escapes. This allows you to match characters based on their Unicode properties using the \`\\p{...}\` and \`\\P{...}\` syntax inside a regular expression (which must also have the \`/u\` flag).

### ⚙️ Solution Walkthrough
A regex is used to match any emoji.
\`\`\`javascript
const regex = /\\p{Emoji}/u;
regex.test('👍'); // true
regex.test('a'); // false
\`\`\`
This is a powerful feature for working with international text and special characters.

### 📚 Key Concepts
- **Unicode**: The standard for encoding characters.
- **Regular Expressions**: The \`\\p{}\` syntax provides a new way to define character classes.
`,

  // problem explanation--> 133
  "es10-function-tostring-revision": `
### 💡 Problem Breakdown
ES10/ES2019 standardized the behavior of \`Function.prototype.toString()\`. It now guarantees that the string returned will be the original source code, including any comments and whitespace that were part of the original definition.

### ⚙️ Solution Walkthrough
The \`.toString()\` method is called on a function with comments.
\`\`\`javascript
function /* a comment */ add(a, b) { return a + b; }
add.toString(); // "function /* a comment */ add(a, b) { return a + b; }"
\`\`\`
### 📚 Key Concepts
- **Function Introspection**: The ability to inspect a function's source code.
`,

  // problem explanation--> 134
  "es10-symbol-description": `
### 💡 Problem Breakdown
ES10/ES2019 added a \`.description\` accessor property to \`Symbol.prototype\`. This provides a direct way to get the optional description string that was passed to the \`Symbol()\` constructor, without having to convert the whole symbol to a string first.

### ⚙️ Solution Walkthrough
The \`.description\` property is accessed.
\`\`\`javascript
const sym = Symbol('my description');
sym.description; // "my description"
\`\`\`
### 📚 Key Concepts
- **Symbol**: A primitive type for unique identifiers.
- **Introspection**: A convenient way to get metadata about a symbol.
`,

  // problem explanation--> 135
  "es12-finalization-registry": `
### 💡 Problem Breakdown
This is a conceptual problem about an advanced feature (ES2021). A \`FinalizationRegistry\` provides a way to request a callback to be run after an object has been garbage collected. This is used for cleanup of resources that are not managed by JavaScript's memory manager (e.g., a file handle or a connection to a WebAssembly module).

### 📚 Key Concepts
- **Garbage Collection**: The process that triggers the registry's callback.
- **Resource Management**: The primary use case for this advanced API.
`,

  // problem explanation--> 136
  "es14-array-tospliced": `
### 💡 Problem Breakdown
The \`.toSpliced()\` method (ES2023) is the immutable counterpart to \`.splice()\`. It returns a **new array** with elements removed and/or added, without modifying the original array.

### ⚙️ Solution Walkthrough
The method is used to create a new array.
\`\`\`javascript
const original = [1, 2, 5];
// Create a new array with 3 and 4 inserted at index 2
const updated = original.toSpliced(2, 0, 3, 4);

console.log(original); // [1, 2, 5] (unchanged)
console.log(updated);  // [1, 2, 3, 4, 5] (new array)
\`\`\`
### 📚 Key Concepts
- **Immutability**: A new method for immutable array updates.
`,

  // problem explanation--> 137
  "es6-destructuring-and-rest-in-arrays": `
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

  // problem explanation--> 138
  "es6-destructuring-and-defaults-in-arrays": `
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

  // problem explanation--> 139
  "es6-let-vs-var-in-loops": `
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

  // problem explanation--> 140
  "es6-spread-to-copy-array": `
### 💡 Problem Breakdown
The spread syntax (\`...\`) is a modern and concise way to create a **shallow copy** of an array. A shallow copy means a new object is created and its top-level properties are copied. However, if any of those properties are themselves objects, the *references* to those nested objects are copied, not the objects themselves.

### ⚙️ Solution Walkthrough
A shallow copy is created, and a nested object is mutated.
\`\`\`javascript
const original = [{ a: 1 }];
const copy = [...original];

// Mutating the nested object in the copy...
copy[0].a = 99;

// ...also affects the original, because they share the same nested object.
console.log(original[0].a); // 99
\`\`\`
### 📚 Key Concepts
- **Shallow Copy**: Creating a new top-level object but sharing references to nested objects.
- **Spread Syntax**: A key tool for immutable patterns.
`,

  // problem explanation--> 141
  "es6-map-object-keys": `
### 💡 Problem Breakdown
This problem highlights a key advantage of the \`Map\` data structure over plain objects. A \`Map\` can use *any* value as a key, including objects, functions, or other primitives. A plain object will coerce non-string keys into strings.

### ⚙️ Solution Walkthrough
An object reference is used as a key in a \`Map\`.
\`\`\`javascript
const map = new Map();
const keyObject = { id: 1 };

map.set(keyObject, 'some data');
map.get(keyObject); // 'some data'

const obj = {};
obj[keyObject] = 'some data'; // This key becomes "[object Object]"
\`\`\`
### 📚 Key Concepts
- **\`Map\`**: A versatile key-value store that supports any data type for its keys.
`,

  // problem explanation--> 142
  "es6-promise-unwrapping": `
### 💡 Problem Breakdown
A key feature of promise chains is that they automatically "unwrap" or "flatten" promises returned from a \`.then()\` handler. If you return a new promise, the chain doesn't resolve with that promise object itself; instead, it waits for that inner promise to settle and adopts its final state and value.

### ⚙️ Solution Walkthrough
A \`.then()\` handler returns another promise.
\`\`\`javascript
Promise.resolve()
  .then(() => {
    return new Promise(res => setTimeout(() => res("Inner resolved"), 200));
  })
  .then(result => {
    // 'result' is the *resolved value* of the inner promise ("Inner resolved"),
    // not the promise object itself.
    console.log(result);
  });
\`\`\`
### 📚 Key Concepts
- **Promise Flattening**: This "unwrapping" behavior is what keeps promise chains flat and readable.
`,

  // problem explanation--> 143
  "es6-super-method-call": `
### 💡 Problem Breakdown
The \`super\` keyword can be used inside a method to call a method of the same name on the parent class. This is useful for extending behavior rather than completely replacing it.

### ⚙️ Solution Walkthrough
The \`Employee\` class overrides the \`greet\` method but calls the parent's version using \`super.greet()\`.
\`\`\`javascript
class Person {
  greet() {
    return "Hello";
  }
}
class Employee extends Person {
  greet() {
    return \`\${super.greet()} from Employee\`;
  }
}
const emp = new Employee();
emp.greet(); // "Hello from Employee"
\`\`\`
### 📚 Key Concepts
- **\`super\`**: Used to access the parent's prototype.
- **Method Overriding**: Providing a new implementation for an inherited method.
`,

  // problem explanation--> 144
  "es6-generator-with-return": `
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

  // problem explanation--> 145
  "es8-async-await-error-handling": `
### 💡 Problem Breakdown
A key advantage of \`async/await\` is that it allows you to handle errors from asynchronous operations using standard, synchronous \`try...catch\` blocks. This is often cleaner and more intuitive than chaining \`.catch()\` methods.

### ⚙️ Solution Walkthrough
A rejecting promise is awaited inside a \`try\` block. The rejection is caught by the \`catch\` block.
\`\`\`javascript
async function testError() {
  try {
    const result = await Promise.reject(new Error('Oops!'));
    console.log(result); // This line is never reached
  } catch (error) {
    console.log('Caught the error:', error.message);
  }
}
\`\`\`
When you \`await\` a promise that rejects, it throws an exception at that line, which is then caught by the surrounding \`try...catch\` block.

### 📚 Key Concepts
- **Asynchronous Error Handling**: Using \`try...catch\` with \`async/await\` provides a unified error handling model for both sync and async code.
`,

  // problem explanation--> 146
  "es8-shared-array-buffer-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about an advanced feature. A \`SharedArrayBuffer\` is a raw, fixed-size binary data buffer, similar to an \`ArrayBuffer\`, but with one key difference: it can be shared between the main browser thread and multiple Web Workers.

### ⚙️ Solution Walkthrough
Instead of copying data with \`postMessage\`, both the main thread and a worker can have a reference to the *same* block of memory. This allows for extremely fast communication and parallel processing of large datasets. However, it also introduces the risk of race conditions, which is why it must be used with the \`Atomics\` object.

### 📚 Key Concepts
- **\`SharedArrayBuffer\`**: A low-level API for shared-memory multi-threading.
- **Concurrency**: A powerful tool for high-performance computing on the web.
`,

  // problem explanation--> 147
  "es8-atomics-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the \`Atomics\` object. When you use \`SharedArrayBuffer\` to share memory between threads, you can create race conditions if multiple threads try to read and write to the same memory location at the same time. The \`Atomics\` object provides a set of static methods to perform atomic operations on \`SharedArrayBuffer\`s.

### ⚙️ Solution Walkthrough
"Atomic" means the operation is guaranteed to complete fully without interruption.
- **\`Atomics.add(typedArray, index, value)\`**: Atomically adds a value.
- **\`Atomics.load(typedArray, index)\`**: Atomically reads a value.
- **\`Atomics.store(typedArray, index, value)\`**: Atomically writes a value.
- **\`Atomics.wait()\` and \`Atomics.notify()\`**: Used to create locks and coordinate between threads.

These tools are essential for preventing race conditions and writing correct concurrent code.

### 📚 Key Concepts
- **Atomic Operations**: Operations that are indivisible and uninterruptible.
- **Race Condition**: A bug that occurs when the outcome of an operation depends on the unpredictable timing of concurrent events.
`,

  // problem explanation--> 148
  "es11-optional-chaining-with-methods": `
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
If \`getName\` existed, it would be called. Since it doesn't, the expression short-circuits and returns \`undefined\`.

### 📚 Key Concepts
- **Optional Chaining**: A versatile operator that works for property access, method calls, and array access.
`,

  // problem explanation--> 149
  "es12-string-replaceall-with-regex": `
### 💡 Problem Breakdown
The \`.replaceAll()\` method is primarily for replacing simple substrings, but it can also be used with a regular expression, provided the regex has the **global (\`/g\`)** flag set.

### ⚙️ Solution Walkthrough
\`replaceAll\` is used with a global regex.
\`\`\`javascript
const str = "apple and orange and apple";
str.replaceAll(/apple/g, "fruit"); // "fruit and orange and fruit"

// Using a non-global regex would throw a TypeError.
// str.replaceAll(/apple/, "fruit"); // TypeError
\`\`\`
### 📚 Key Concepts
- **\`String.prototype.replaceAll()\`**: A modern method for global string replacement.
`,

  // problem explanation--> 150
  "es13-private-brand-check": `
### 💡 Problem Breakdown
This problem demonstrates a modern (ES2022) and very reliable way to check if an object is a true instance of a class. The standard \`instanceof\` can be fooled. A better way is to check for the presence of a private class field using the \`in\` operator.

### ⚙️ Solution Walkthrough
A static method uses the \`in\` operator to check for a private field.
\`\`\`javascript
class MyClass {
  #brand; // A private field that exists on every instance.
  
  static isMyClass(obj) {
    // This check is reliable. It returns true only if obj
    // was created from this class and has this private field.
    return #brand in obj;
  }
}

const instance = new MyClass();
const plainObject = {};

MyClass.isMyClass(instance);     // true
MyClass.isMyClass(plainObject); // false
\`\`\`
### 📚 Key Concepts
- **Brand Checking**: A robust pattern for type checking class instances.
- **Private Fields (\`#\`)**: The core feature that makes this reliable check possible.
`,

  // problem explanation--> 151
  "es6-destructuring-for-of-loop": `
### 💡 Problem Breakdown
Destructuring can be combined with a \`for...of\` loop to make iterating over complex data structures, like an array of arrays, much cleaner and more readable. Instead of accessing elements by index, you can unpack them directly into named variables.

### ⚙️ Solution Walkthrough
The solution iterates over an array of key-value pairs. In each iteration, array destructuring is used to assign the elements of the inner array to the variables \`key\` and \`value\`.
\`\`\`javascript
const pairs = [['a', 1], ['b', 2]];
for (const [key, value] of pairs) {
  console.log(\`Key: \${key}, Value: \${value}\`);
}

// Without destructuring, the code would be less clear:
// for (const pair of pairs) {
//   const key = pair[0];
//   const value = pair[1];
//   console.log(\`Key: \${key}, Value: \${value}\`);
// }
\`\`\`
### 📚 Key Concepts
- **\`for...of\` Loop**: The modern standard for iterating over the values of an iterable.
- **Destructuring Assignment**: A syntax that makes it easy to extract data from arrays or objects.
- **Readability**: Combining these features makes the code's intent clearer and more concise.
`,

  // problem explanation--> 152
  "es6-map-chaining": `
### 💡 Problem Breakdown
This problem demonstrates a convenient feature of the ES6 \`Map\` data structure. The \`.set()\` method on a \`Map\` returns the map instance itself. This allows you to "chain" multiple \`.set()\` calls together in a single statement.

### ⚙️ Solution Walkthrough
A new \`Map\` is created and populated using method chaining.
\`\`\`javascript
const myMap = new Map();

// Chaining .set() calls
myMap
  .set('name', 'Alice')
  .set('age', 30)
  .set('isAdmin', true);

console.log(myMap.size); // 3
\`\`\`
This is a common pattern known as a "fluent interface," which makes code more concise and often more readable when setting up an object.

### 📚 Key Concepts
- **Fluent Interface**: A design pattern in which method calls can be chained together.
- **\`Map.prototype.set()\`**: The method for adding or updating an element in a \`Map\`.
`,

  // problem explanation--> 153
  "es6-generator-yield-delegation": `
### 💡 Problem Breakdown
The \`yield*\` expression is used to delegate from one generator to another iterable object (like another generator or an array). It's as if the values of the second generator were yielded directly from the first one.

### ⚙️ Solution Walkthrough
One generator delegates to another to produce a combined sequence.
\`\`\`javascript
function* gen1() { yield 2; yield 3; }
function* gen2() {
  yield 1;
  yield* gen1(); // Yields all values from gen1
  yield 4;
}
const arr = [...gen2()]; // [1, 2, 3, 4]
\`\`\`
This is a useful feature for composing and reusing generators.

### 📚 Key Concepts
- **\`yield*\`**: The syntax for delegating iteration to another iterable.
- **Generators**: Functions that can be paused and resumed, producing a sequence of values.
`,

  // problem explanation--> 154
  "es8-async-sequential-vs-parallel": `
### 💡 Problem Breakdown
This problem compares two ways of handling multiple asynchronous operations: sequentially and in parallel. Sequential operations wait for the previous one to finish, while parallel operations start at the same time.

### ⚙️ Solution Walkthrough
1.  **Sequential**: Each \`await\` call pauses the function. The total time is the sum of all delays.
    \`\`\`javascript
    // Total time: ~200ms
    const result1 = await delay(100);
    const result2 = await delay(100);
    \`\`\`
2.  **Parallel**: The operations are started without \`await\`. The promises are collected into an array, and \`Promise.all()\` is used to wait for all of them to complete. The total time is the time of the longest operation.
    \`\`\`javascript
    // Total time: ~100ms
    const p1 = delay(100);
    const p2 = delay(100);
    const [result1, result2] = await Promise.all([p1, p2]);
    \`\`\`
### 📚 Key Concepts
- **\`async/await\`**: Provides syntax for both sequential and parallel execution.
- **\`Promise.all()\`**: The primary tool for managing concurrent promise-based operations.
`,

  // problem explanation--> 155
  "es9-promise-finally-rejection": `
### 💡 Problem Breakdown
The \`.finally()\` method (ES2018) is used to specify a callback that will be executed when a promise is "settled" – that is, either fulfilled or rejected. This problem shows that the \`finally\` callback runs even when the promise rejects.

### ⚙️ Solution Walkthrough
A rejecting promise has a \`.finally()\` and a \`.catch()\` block.
\`\`\`javascript
let status = 'pending';
Promise.reject('Error')
  .finally(() => {
    status = 'ran finally'; // This runs
  })
  .catch(err => {
    // This also runs
  });
\`\`\`
The \`finally\` block is guaranteed to execute, making it ideal for cleanup code that must run regardless of the outcome (e.g., hiding a loading spinner).

### 📚 Key Concepts
- **\`.finally()\`**: A method for running cleanup code after a promise settles.
- **Promise States**: A promise is "settled" when it is no longer pending.
`,

  // problem explanation--> 156
  "es10-object-fromentries-map": `
### 💡 Problem Breakdown
\`Object.fromEntries()\` (ES2019) performs the inverse operation of \`Object.entries()\`. It takes an iterable of key-value pairs (like an array of arrays or a \`Map\`) and transforms it into a new object.

### ⚙️ Solution Walkthrough
A \`Map\` is converted into a plain object.
\`\`\`javascript
const map = new Map([
  ['a', 1],
  ['b', 2]
]);
const obj = Object.fromEntries(map);
// obj is { a: 1, b: 2 }
\`\`\`
This is very useful when you need a plain object for reasons like JSON serialization, as \`Map\`s don't serialize directly.

### 📚 Key Concepts
- **\`Object.fromEntries()\`**: A standard method for creating an object from an iterable of key-value pairs.
- **Data Transformation**: A convenient tool for converting between data structures.
`,

  // problem explanation--> 157
  "es11-optional-chaining-with-arrays": `
### 💡 Problem Breakdown
Optional chaining (\`?.\`) can be used with bracket notation to safely access an element from an array that may be \`null\` or \`undefined\`.

### ⚙️ Solution Walkthrough
The syntax \`?.[]\` is used to safely access an array index.
\`\`\`javascript
const user = {
  data: {
    posts: ['Post 1']
  }
};

const firstPost = user.data?.posts?.[0];   // 'Post 1'
// 'comments' is undefined, but no error is thrown
const firstComment = user.data?.comments?.[0]; // undefined
\`\`\`
This allows you to safely access an index only if the array itself exists.

### 📚 Key Concepts
- **Optional Chaining**: A versatile operator that works with both dot and bracket notation.
`,

  // problem explanation--> 158
  "es12-promise-any-rejection": `
### 💡 Problem Breakdown
\`Promise.any()\` rejects only when *all* of its input promises have rejected. When it does, it rejects with a special \`AggregateError\` object. This error object has an \`.errors\` property which is an array containing all the individual rejection reasons.

### ⚙️ Solution Walkthrough
Two promises are rejected, and the resulting \`AggregateError\` is caught.
\`\`\`javascript
const p1 = Promise.reject("Error 1");
const p2 = Promise.reject("Error 2");

Promise.any([p1, p2])
  .then(val => { /* Not called */ })
  .catch(err => {
    console.log(err instanceof AggregateError); // true
    console.log(err.errors); // ["Error 1", "Error 2"]
  });
\`\`\`
### 📚 Key Concepts
- **\`AggregateError\`**: A special error subclass used by \`Promise.any()\` to collect multiple errors.
`,

  // problem explanation--> 159
  "es13-class-static-private-methods": `
### 💡 Problem Breakdown
You can combine the \`static\` keyword with the private \`#\` syntax to create private static methods. These are helper methods that belong to the class itself and are only callable from other static methods within the same class.

### ⚙️ Solution Walkthrough
A private static method is defined and called from a public static method.
\`\`\`javascript
class MyClass {
  static #privateStaticHelper() {
    return "secret data";
  }
  
  static publicStaticMethod() {
    return this.#privateStaticHelper();
  }
}

MyClass.publicStaticMethod(); // "secret data"
// MyClass.#privateStaticHelper(); // SyntaxError
\`\`\`
### 📚 Key Concepts
- **Static Members**: Methods that belong to the class, not instances.
- **Private Members**: Methods that provide encapsulation.
`,

  // problem explanation--> 160
  "es14-array-with": `
### 💡 Problem Breakdown
The \`.with(index, value)\` method (ES2023) is the immutable counterpart to a simple index assignment (\`arr[index] = value\`). It returns a **new array** with the element at the specified index replaced with the new value, leaving the original array unchanged.

### ⚙️ Solution Walkthrough
The method is used to create a new, updated array.
\`\`\`javascript
const original = [1, 2, 3];
const updated = original.with(1, 99);

console.log(original); // [1, 2, 3] (unchanged)
console.log(updated);  // [1, 99, 3] (new array)
\`\`\`
### 📚 Key Concepts
- **Immutability**: A key principle in modern JavaScript development for writing predictable code.
- **New Array Methods**: \`.with()\` is part of a set of new methods for immutable array manipulation.
`,

  // problem explanation--> 161
  "es6-immutable-update-pattern": `
### 💡 Problem Breakdown
This demonstrates a core pattern of immutable programming. Instead of mutating an object, you create a **new** object that contains all the properties of the original, plus the new or updated property. The spread syntax (\`...\`) makes this very clean.

### ⚙️ Solution Walkthrough
A new state object is created from an old one.
\`\`\`javascript
const state = { count: 0, user: 'guest' };
const newState = { ...state, count: 1 };

// 'state' is still { count: 0, user: 'guest' }
// 'newState' is { count: 1, user: 'guest' }
\`\`\`
This pattern is fundamental to state management in libraries like React and Redux, as it makes state changes predictable.

### 📚 Key Concepts
- **Immutability**: The practice of not changing data structures, but instead creating new ones with the updated data.
- **Spread Syntax**: A concise way to copy properties into a new object.
`,

  // problem explanation--> 162
  "es6-map-foreach": `
### 💡 Problem Breakdown
The ES6 \`Map\` object has a built-in \`.forEach()\` method, similar to the one on arrays. It allows you to execute a callback function for each key-value pair in the map.

### ⚙️ Solution Walkthrough
The \`.forEach\` method is used to iterate over a map.
\`\`\`javascript
const map = new Map([['a', 1], ['b', 2]]);
map.forEach((value, key) => {
  console.log(\`Key: \${key}, Value: \${value}\`);
});
\`\`\`
Note that the callback for \`Map.forEach\` receives \`(value, key)\`, which is the reverse of the order in a \`for...of\` loop with destructuring.

### 📚 Key Concepts
- **\`Map.prototype.forEach()\`**: A built-in method for iterating over a \`Map\`.
`,

  // problem explanation--> 163
  "es6-set-to-array-spread": `
### 💡 Problem Breakdown
This problem shows the most common and idiomatic way to convert a \`Set\` object back into an array: using the spread syntax (\`...\`). Since a \`Set\` is an iterable, the spread syntax can expand its unique elements directly into a new array literal.

### ⚙️ Solution Walkthrough
A \`Set\` is converted to an array.
\`\`\`javascript
const mySet = new Set([1, 2, 3, 2, 1]); // Set is {1, 2, 3}
const arr = [...mySet]; // arr is [1, 2, 3]
\`\`\`
This combines the uniqueness of a \`Set\` with the utility of an array.

### 📚 Key Concepts
- **Iterables**: The spread syntax works on any iterable object.
- **Data Transformation**: A concise pattern for converting between \`Set\` and \`Array\`.
`,

  // problem explanation--> 164
  "es6-generator-yield-expression": `
### 💡 Problem Breakdown
This demonstrates the two-way communication capability of generators. The \`yield\` keyword is an expression that evaluates to the value passed to the iterator's \`.next()\` method.

### ⚙️ Solution Walkthrough
A value is passed back into a paused generator.
\`\`\`javascript
function* myGen() {
  console.log('Started');
  const valueFromNext = yield 1; // Pauses here
  console.log('Resumed with:', valueFromNext);
  return 'Done';
}
const g = myGen();
g.next();           // Starts, logs 'Started', returns { value: 1, done: false }
g.next('Hello!'); // Resumes, logs 'Resumed with: Hello!', returns { value: 'Done', done: true }
\`\`\`
The first \`.next()\` call starts the generator. The value passed to the *second* \`.next()\` call is what the first \`yield\` expression evaluates to.

### 📚 Key Concepts
- **\`yield\` as an Expression**: The ability to send data back into a generator, making it a powerful tool for coroutines.
`,

  // problem explanation--> 165
  "es8-async-await-in-map-pitfall": `
### 💡 Problem Breakdown
This is a very common pitfall. The \`.map()\` array method is not "promise-aware." If you pass an \`async\` function to \`.map()\`, it will start all the async operations, but it will **not** wait for them to complete. It will immediately return an array of pending Promises.

### ⚙️ Solution Walkthrough
The incorrect and correct ways are shown.
\`\`\`javascript
const ids = [1, 2, 3];
// INCORRECT: This does not wait
const promises = ids.map(async (id) => await fetchData(id));
// 'promises' is [Promise, Promise, Promise]

// CORRECT: Wrap with Promise.all
async function processArray() {
  const promises = ids.map(id => fetchData(id));
  const results = await Promise.all(promises);
  return results;
}
\`\`\`
### 📚 Key Concepts
- **Promise-Awareness**: Understanding which language constructs and methods work directly with promises and which do not.
`,

  // problem explanation--> 166
  "es9-regexp-lookbehind-negative": `
### 💡 Problem Breakdown
ES9/ES2018 introduced lookbehind assertions to JavaScript regular expressions. A **negative lookbehind** (\`(?<!...)\`) is a zero-width assertion that matches a pattern only if it is *not* preceded by another specific pattern.

### ⚙️ Solution Walkthrough
A regex is used to find numbers that are not preceded by a currency symbol.
\`\`\`javascript
const text = '€100 and $200';
const regex = /(?<!€)\\d+/g; // Match digits not preceded by €
text.match(regex); // ["200"]
\`\`\`
The \`(?<!€)\` part checks the text before the current position without consuming any characters.

### 📚 Key Concepts
- **Regular Expressions**: Lookarounds are advanced features for complex pattern matching.
`,

  // problem explanation--> 167
  "es10-flat-with-infinity": `
### 💡 Problem Breakdown
The \`.flat()\` method takes an optional \`depth\` argument. If you want to flatten a deeply nested array of unknown depth completely, you can pass \`Infinity\` as the depth.

### ⚙️ Solution Walkthrough
A deeply nested array is completely flattened.
\`\`\`javascript
const arr = [1, [2, [3, [4]]]];
arr.flat(Infinity); // [1, 2, 3, 4]
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.flat()\`**: A versatile method for flattening nested arrays.
`,

  // problem explanation--> 168
  "es11-bigint-comparisons": `
### 💡 Problem Breakdown
This problem clarifies how \`BigInt\` and \`Number\` types interact in comparisons.
- **Relational (\`>\`, \`<\`) and Loose Equality (\`==\`)**: These operators perform type coercion, so you can compare \`BigInt\`s and \`Number\`s directly.
- **Strict Equality (\`===\`)**: This operator checks for type, so a \`BigInt\` is never strictly equal to a \`Number\`.

### ⚙️ Solution Walkthrough
Comparisons are demonstrated.
\`\`\`javascript
10n == 10;   // true
10n === 10;  // false
10n > 5;     // true
\`\`\`
### 📚 Key Concepts
- **\`BigInt\`**: A separate primitive type from \`Number\`.
`,

  // problem explanation--> 169
  "es12-logical-nullish-assignment": `
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

  // problem explanation--> 170
  "es13-class-static-private-fields": `
### 💡 Problem Breakdown
You can combine the \`static\` and private (\`#\`) keywords to create private static fields. These are properties that belong to the class itself (not instances) and are only accessible from within the class's static context.

### ⚙️ Solution Walkthrough
A private static field \`#count\` is used as a counter.
\`\`\`javascript
class MyClass {
  static #count = 0; // Private static field
  
  static increment() { this.#count++; }
  static getCount() { return this.#count; }
}
MyClass.increment();
MyClass.getCount(); // 1
\`\`\`
### 📚 Key Concepts
- **Static Members**: Properties and methods that belong to the class.
- **Private Members**: Fields and methods accessible only within the class.
`,

  // problem explanation--> 171
  "es14-array-toreversed": `
### 💡 Problem Breakdown
The \`.toReversed()\` method (ES2023) is the immutable counterpart to \`.reverse()\`. It returns a **new, reversed array** without modifying the original array.

### ⚙️ Solution Walkthrough
The method is used to create a new, reversed array.
\`\`\`javascript
const original = [1, 2, 3];
const reversed = original.toReversed();

console.log(original); // [1, 2, 3] (unchanged)
console.log(reversed); // [3, 2, 1] (new array)
\`\`\`
### 📚 Key Concepts
- **Immutability**: A key principle in modern JavaScript development.
`,

  // problem explanation--> 172
  "es6-template-literal-tag-function": `
### 💡 Problem Breakdown
A "tagged template literal" is an advanced form of a template literal. If you place a function name (a "tag") before the template literal, the function is called with the literal's contents. This allows you to parse and process the string in a custom way.

### ⚙️ Solution Walkthrough
A tag function is created to highlight interpolated values.
\`\`\`javascript
function highlight(strings, ...values) {
  // 'strings' is an array of the static string parts.
  // 'values' is an array of the interpolated values.
  let result = '';
  strings.forEach((str, i) => {
    result += str;
    if (values[i]) {
      result += \`<mark>\${values[i]}</mark>\`;
    }
  });
  return result;
}
const name = 'ES6';
const output = highlight\`Hello, \${name}!\`; // "Hello, <mark>ES6</mark>!"
\`\`\`
### 📚 Key Concepts
- **Tagged Template Literals**: A powerful feature for creating domain-specific languages (DSLs) or for string sanitization.
`,

  // problem explanation--> 173
  "es6-promise-race-rejection": `
### 💡 Problem Breakdown
This problem demonstrates the behavior of \`Promise.race()\` when one of the promises rejects. The \`Promise.race()\` promise will settle as soon as the first input promise settles, and it will adopt that promise's outcome. If the first one to finish is a rejection, \`Promise.race()\` will reject.

### ⚙️ Solution Walkthrough
A fast-rejecting promise "wins" the race.
\`\`\`javascript
const p1 = new Promise(res => setTimeout(() => res("Success"), 200));
const p2 = new Promise((_, rej) => setTimeout(() => rej("Failure"), 100));

Promise.race([p1, p2])
  .then(val => {}) // Not called
  .catch(err => console.error(err)); // "Failure"
\`\`\`
### 📚 Key Concepts
- **\`Promise.race()\`**: Settles with the result of the first promise to settle, whether it's a fulfillment or a rejection.
`,

  // problem explanation--> 174
  "es6-class-field-arrow-function": `
### 💡 Problem Breakdown
This demonstrates a powerful modern pattern for handling the "losing \`this\`" problem in classes. By defining a method as a class field assigned to an arrow function, you create a method where \`this\` is permanently and lexically bound to the class instance.

### ⚙️ Solution Walkthrough
An arrow function is used for an event handler-like method.
\`\`\`javascript
class ClickHandler {
  constructor() { this.message = "Clicked!"; }
  // 'this' inside handleClick is always the instance
  handleClick = () => {
    console.log(this.message);
  }
}
const handler = new ClickHandler();
const detachedHandler = handler.handleClick;
detachedHandler(); // "Clicked!" (this context is preserved)
\`\`\`
This pattern avoids the need for using \`.bind(this)\` in the constructor.

### 📚 Key Concepts
- **Lexical \`this\`**: The arrow function captures the \`this\` value from the context where it's defined (the class instance).
`,

  // problem explanation--> 175
  "es8-async-await-in-loops": `
### 💡 Problem Breakdown
Using \`await\` inside a standard \`for\` loop or a \`for...of\` loop is a straightforward way to process a sequence of asynchronous tasks one by one (sequentially).

### ⚙️ Solution Walkthrough
A \`for...of\` loop is used to process an array of IDs.
\`\`\`javascript
async function processSequentially(ids) {
  for (const id of ids) {
    // The loop will pause here and wait for each fetch to complete
    const data = await fetchData(id);
    console.log(data);
  }
}
\`\`\`
This pattern is very useful when the result of one operation is needed for the next, or when you want to avoid overwhelming an API.

### 📚 Key Concepts
- **Sequential Iteration**: A simple and readable pattern for processing async tasks in order.
`,

  // problem explanation--> 176
  "es9-regexp-dotall-flag": `
### 💡 Problem Breakdown
ES9/ES2018 introduced the "dotAll" mode for regular expressions, enabled by the \`/s\` flag. In this mode, the dot character (\`.\`) will match any character, *including* newline characters (\`\\n\`), which it does not do by default.

### ⚙️ Solution Walkthrough
A regex with the \`/s\` flag is used to match a multiline string.
\`\`\`javascript
const regexDefault = /hello.world/;
regexDefault.test('hello\\nworld'); // false

const regexDotAll = /hello.world/s;
regexDotAll.test('hello\\nworld'); // true
\`\`\`
### 📚 Key Concepts
- **Regular Expressions**: The \`/s\` flag modifies the behavior of the \`.\` metacharacter.
`,

  // problem explanation--> 177
  "es10-string-trim-start-end": `
### 💡 Problem Breakdown
ES10/ES2019 standardized the \`trimStart()\` and \`trimEnd()\` methods. They remove whitespace from either the beginning or the end of a string, respectively. They are aliases for the older, non-standard \`trimLeft()\` and \`trimRight()\`.

### ⚙️ Solution Walkthrough
The methods are used to trim a string.
\`\`\`javascript
const str = "   Hello World   ";
str.trimStart(); // "Hello World   "
str.trimEnd();   // "   Hello World"
\`\`\`
### 📚 Key Concepts
- **String Manipulation**: Standardized methods for whitespace removal.
`,

  // problem explanation--> 178
  "es11-promise-allsettled-rejection": `
### 💡 Problem Breakdown
This problem highlights the key feature of \`Promise.allSettled()\`. It **never rejects**. It always fulfills with an array of status objects, even if some or all of the input promises reject.

### ⚙️ Solution Walkthrough
The method is called with a rejecting promise.
\`\`\`javascript
Promise.allSettled([Promise.reject('fail')])
  .then(results => {
    // This block is always executed
    // results is [{ status: 'rejected', reason: 'fail' }]
  })
  .catch(err => {
    // This is never reached
  });
\`\`\`
### 📚 Key Concepts
- **\`Promise.allSettled()\`**: A promise combinator that is useful for knowing the outcome of all operations, regardless of failure.
`,

  // problem explanation--> 179
  "es12-weakref-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about an advanced feature (ES2021). A \`WeakRef\` object lets you hold a "weak reference" to another object. A weak reference does not prevent the target object from being garbage collected.

### ⚙️ Solution Walkthrough
A \`WeakRef\` is created, and its value is accessed using the \`.deref()\` method.
\`\`\`javascript
let myObject = { data: 'some data' };
const ref = new WeakRef(myObject);
ref.deref(); // { data: 'some data' }
myObject = null;
// After some time, the garbage collector may run.
// ref.deref(); // might return undefined
\`\`\`
This is a low-level feature used for specific caching or resource management scenarios.

### 📚 Key Concepts
- **Weak References**: A reference that does not prevent an object from being garbage collected.
`,

  // problem explanation--> 180
  "es13-string-at-method": `
### 💡 Problem Breakdown
The \`.at()\` method (ES2022) provides a more convenient way to access string characters. Its key feature is that it accepts negative indices, which count back from the end of the string.

### ⚙️ Solution Walkthrough
The method is used to get the last character.
\`\`\`javascript
const str = 'JavaScript';

str.at(-1); // 't'
str.at(-2); // 'p'
\`\`\`
This is more concise than the older way: \`str[str.length - 1]\`.

### 📚 Key Concepts
- **Negative Indexing**: A common feature in other languages, now available in JavaScript via \`.at()\`.
`,

  // problem explanation--> 181
  "es14-array-tosorted": `
### 💡 Problem Breakdown
The \`.toSorted()\` method (ES2023) is the immutable counterpart to \`.sort()\`. It returns a **new, sorted array** without modifying the original array.

### ⚙️ Solution Walkthrough
The method is used to create a new, sorted array.
\`\`\`javascript
const original = [3, 1, 2];
const sorted = original.toSorted();

console.log(original); // [3, 1, 2] (unchanged)
console.log(sorted);   // [1, 2, 3] (new array)
\`\`\`
### 📚 Key Concepts
- **Immutability**: A key principle in modern JavaScript development for writing predictable code.
`,

  // problem explanation--> 182
  "es6-destructuring-array-with-rest": `
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

  // problem explanation--> 183
  "es6-proxy-get-handler": `
### 💡 Problem Breakdown
A \`Proxy\` is an object that wraps another object and allows you to intercept fundamental operations. A \`get\` trap is a function on the proxy's handler that intercepts property *reads*.

### ⚙️ Solution Walkthrough
A proxy is created with a \`get\` trap.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  get(obj, prop) {
    return \`Accessed property: \${String(prop)}\`;
  }
};
const proxy = new Proxy(target, handler);
proxy.a; // "Accessed property: a"
\`\`\`
### 📚 Key Concepts
- **Proxy \`get\` Trap**: A handler for intercepting property reads.
`,

  // problem explanation--> 184
  "es6-proxy-set-handler": `
### 💡 Problem Breakdown
The \`set\` trap on a proxy handler intercepts property *writes* (assignments). This is very useful for implementing validation or logging.

### ⚙️ Solution Walkthrough
A proxy is created with a \`set\` trap.
\`\`\`javascript
const target = { age: 0 };
const handler = {
  set(obj, prop, value) {
    console.log(\`Set \${String(prop)} to \${value}\`);
    return Reflect.set(obj, prop, value);
  }
};
const proxy = new Proxy(target, handler);
proxy.age = 30; // Logs "Set age to 30"
\`\`\`
### 📚 Key Concepts
- **Proxy \`set\` Trap**: A handler for intercepting property assignments.
`,

  // problem explanation--> 185
  "es8-async-await-parallel": `
### 💡 Problem Breakdown
When async operations don't depend on each other, it's more efficient to run them in parallel. The key is to start all the operations without \`await\`, collect the promises, and then use \`await Promise.all()\`.

### ⚙️ Solution Walkthrough
Two operations are run concurrently.
\`\`\`javascript
// Total time: ~100ms
const p1 = delay(100, 'First');
const p2 = delay(100, 'Second');
const [result1, result2] = await Promise.all([p1, p2]);
\`\`\`
### 📚 Key Concepts
- **Concurrency**: Running multiple tasks at the same time.
- **\`Promise.all()\`**: The primary tool for managing concurrent promise-based operations.
`,

  // problem explanation--> 186
  "es9-regexp-lookahead-assertion": `
### 💡 Problem Breakdown
A **positive lookahead** (\`(?=...)\`) is a zero-width assertion in a regex that matches a pattern only if it is *followed* by another specific pattern, without including the second pattern in the actual match.

### ⚙️ Solution Walkthrough
A regex is used to match a name only if it's followed by "Newton".
\`\`\`javascript
const text = 'Isaac Newton';
text.match(/Isaac(?= Newton)/); // The match is just "Isaac"
\`\`\`
### 📚 Key Concepts
- **Regular Expressions**: Lookarounds are advanced features for complex pattern matching.
`,

  // problem explanation--> 187
  "es10-symbol-description-property": `
### 💡 Problem Breakdown
ES10/ES2019 added a \`.description\` accessor property to \`Symbol.prototype\`. This provides a direct way to get the optional description string that was passed to the \`Symbol()\` constructor.

### ⚙️ Solution Walkthrough
The \`.description\` property is accessed.
\`\`\`javascript
const sym = Symbol('my description');
sym.description; // "my description"
\`\`\`
### 📚 Key Concepts
- **\`Symbol\`**: A primitive type for unique identifiers.
`,

  // problem explanation--> 188
  "es11-bigint-constructor": `
### 💡 Problem Breakdown
In addition to the \`n\` suffix, you can create a \`BigInt\` by passing a number or a string to the \`BigInt()\` constructor function. This is necessary when the number is too large to be represented as a literal or is in a string variable.

### ⚙️ Solution Walkthrough
A \`BigInt\` is created from a string.
\`\`\`javascript
const largeNumStr = '12345678901234567890';
const big = BigInt(largeNumStr);
\`\`\`
### 📚 Key Concepts
- **\`BigInt\`**: A numeric type for arbitrary-precision integer arithmetic.
`,

  // problem explanation--> 189
  "es12-logical-and-assignment": `
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

  // problem explanation--> 190
  "es13-class-private-getters-setters": `
### 💡 Problem Breakdown
The \`#\` syntax for private members can also be applied to getters and setters. This allows you to create private accessor properties that can only be used from within the class.

### ⚙️ Solution Walkthrough
A private getter/setter pair is created for a private field.
\`\`\`javascript
class MyClass {
  #value;
  get #doubled() { return this.#value * 2; }
  set #doubled(val) { this.#value = val / 2; }
  
  constructor(val) { this.#value = val; }

  useAccessors() {
    this.#doubled = 100; // uses the setter
    return this.#doubled; // uses the getter
  }
}
\`\`\`
### 📚 Key Concepts
- **Private Class Members**: A comprehensive feature for encapsulation.
`,

  // problem explanation--> 191
  "es14-array-tospliced-immutable": `
### 💡 Problem Breakdown
The \`.toSpliced()\` method (ES2023) is the immutable counterpart to \`.splice()\`. It returns a **new array** with elements removed and/or added, without modifying the original array.

### ⚙️ Solution Walkthrough
The method is used to create a new array.
\`\`\`javascript
const original = [1, 2, 5];
const updated = original.toSpliced(2, 0, 3, 4);

console.log(original); // [1, 2, 5] (unchanged)
console.log(updated);  // [1, 2, 3, 4, 5] (new array)
\`\`\`
### 📚 Key Concepts
- **Immutability**: A new method for immutable array updates.
`,

  // problem explanation--> 192
  "es6-reflect-get-set": `
### 💡 Problem Breakdown
\`Reflect.get()\` and \`Reflect.set()\` are methods on the \`Reflect\` object that provide a functional way to perform property access and assignment.

### ⚙️ Solution Walkthrough
The methods are used to get and set a property.
\`\`\`javascript
const obj = { a: 1 };
Reflect.set(obj, 'a', 2);
const value = Reflect.get(obj, 'a'); // 2
\`\`\`
They are the recommended way to forward operations inside proxy traps.

### 📚 Key Concepts
- **\`Reflect\` API**: A library of methods for meta-programming.
`,

  // problem explanation--> 193
  "es8-object-getownpropertydescriptors-clone": `
### 💡 Problem Breakdown
This problem shows how to create a more accurate shallow clone of an object. \`Object.assign()\` and spread syntax only copy property *values*. They do not copy getters, setters, or other property attributes. The combination of \`Object.getOwnPropertyDescriptors()\` and \`Object.defineProperties()\` creates a true shallow clone that preserves these attributes.

### ⚙️ Solution Walkthrough
A clone is created that preserves a getter.
\`\`\`javascript
const source = { get a() { return 1; } };
const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source));
\`\`\`
### 📚 Key Concepts
- **Property Descriptors**: The underlying metadata that controls property behavior.
`,

  // problem explanation--> 194
  "es9-promise-finally-chaining": `
### 💡 Problem Breakdown
The \`.finally()\` handler does not receive any arguments and its return value is ignored (unless it returns a rejected promise or throws an error). The promise chain continues with the original settlement value.

### ⚙️ Solution Walkthrough
A \`.finally()\` block is used in a resolving chain.
\`\`\`javascript
Promise.resolve('Success')
  .finally(() => {
    return 'Ignored return';
  })
  .then(val => {
    // 'val' is still 'Success'
  });
\`\`\`
### 📚 Key Concepts
- **\`.finally()\`**: Primarily for side effects and cleanup, not for transforming values.
`,

  // problem explanation--> 195
  "es10-flatmap-practical": `
### 💡 Problem Breakdown
\`.flatMap()\` combines the functionality of \`.map()\` and \`.flat(1)\`. It's useful for cases where a mapping function returns an array for each element, and you want a single, flat list as the result.

### ⚙️ Solution Walkthrough
An array of sentences is converted to an array of words.
\`\`\`javascript
const sentences = ["hello world", "javascript is fun"];
const words = sentences.flatMap(s => s.split(' '));
// words is ["hello", "world", "javascript", "is", "fun"]
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.flatMap()\`**: A convenient method for mapping and flattening in a single step.
`,

  // problem explanation--> 196
  "es11-matchall-iterator": `
### 💡 Problem Breakdown
The \`.matchAll()\` method returns an **iterator** of all results matching a regular expression, including capturing groups. This is different from \`.match()\` with a global flag, which only returns the full matches, not the groups.

### ⚙️ Solution Walkthrough
The iterator is converted to an array to see all match objects.
\`\`\`javascript
const text = 'cat dog cat';
const iterator = text.matchAll(/cat/g);
const matches = [...iterator];
// matches is an array of match objects
\`\`\`
### 📚 Key Concepts
- **\`String.prototype.matchAll()\`**: The standard way to get all detailed matches for a global regex.
`,

  // problem explanation--> 197
  "es12-logical-or-assignment": `
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

  // problem explanation--> 198
  "es13-error-cause-chaining": `
### 💡 Problem Breakdown
The \`cause\` property on an \`Error\` object can be used to chain multiple errors together, creating a clear path from a high-level application error back to the low-level root cause.

### ⚙️ Solution Walkthrough
A chain of three errors is created.
\`\`\`javascript
try {
  const e1 = new Error("DB Error");
  const e2 = new Error("API Error", { cause: e1 });
  throw new Error("App Error", { cause: e2 });
} catch (e) {
  // e.cause is the API Error
  // e.cause.cause is the DB Error
}
\`\`\`
### 📚 Key Concepts
- **Error Chaining**: A modern pattern for preserving error context.
`,

  // problem explanation--> 199
  "es14-array-immutable-methods-all": `
### 💡 Problem Breakdown
This is a summary problem demonstrating the new set of immutable array methods from ES2023, which allow for complex transformations without mutating the original data.

### ⚙️ Solution Walkthrough
The methods are chained together.
\`\`\`javascript
const original = [5, 4, 3, 2, 1];
const result = original
  .toSorted()         // [1, 2, 3, 4, 5]
  .with(0, 99)        // [99, 2, 3, 4, 5]
  .toSpliced(1, 1)    // [99, 3, 4, 5]
  .toReversed();      // [5, 4, 3, 99]
\`\`\`
The original array \`[5, 4, 3, 2, 1]\` remains unchanged throughout the process.

### 📚 Key Concepts
- **Immutability**: A key principle in modern JavaScript for writing predictable and maintainable code.
`,

  // problem explanation--> 200
  "es-future-decorators-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about **decorators**, a feature that is currently a Stage 3 proposal for ECMAScript. Decorators provide a declarative syntax for annotating and modifying classes, methods, and properties at design time.

### ⚙️ Solution Walkthrough
A decorator is a special kind of function that is prefixed with an \`@\` symbol.
\`\`\`javascript
// Conceptual syntax
@logged
class MyClass {
  @readonly
  myMethod() { /* ... */ }
}
\`\`\`
- The \`@logged\` decorator might wrap the class to log its instantiation.
- The \`@readonly\` decorator might modify the property descriptor of \`myMethod\` to make it non-writable.

Decorators are a powerful tool for metaprogramming and are widely used in frameworks like Angular and NestJS (often via TypeScript's implementation).

### 📚 Key Concepts
- **Metaprogramming**: Writing code that operates on other code.
- **Decorators**: A declarative syntax for modifying classes and their members.
`,
};
