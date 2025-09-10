

export const explanations: Record<string, string> = {
    'generators-basic': `
### 💡 Problem Breakdown
This problem introduces generator functions, an advanced ES6 feature. A generator is a special type of function that can be paused and resumed, allowing it to produce a sequence of values over time instead of computing them all at once. The goal is to create a simple generator that "yields" a series of numbers one by one.

### ⚙️ Solution Walkthrough
The solution uses the \`function*\` syntax to define a generator and the \`yield\` keyword to pause its execution and produce a value.

\`\`\`javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numberGenerator();
\`\`\`

1.  **\`function*\`**: The asterisk (\`*\`) after the \`function\` keyword marks this as a generator function.
2.  **Calling the Generator**: When you call \`numberGenerator()\\\`, it does **not** run the code inside. Instead, it returns a special "generator object" (an iterator).
3.  **The \`yield\` keyword**: The \`yield\` keyword is what makes generators special. When the generator's \`.next()\` method is called, the function executes until it hits a \`yield\` keyword.
    *   It then pauses its execution.
    *   It returns the value specified after \`yield\`.
4.  **The \`.next()\` method**: To get values from the generator, you call \`.next()\` on the generator object.
    *   \`gen.next()\\\`: The function runs, hits \`yield 1\\\`, pauses, and returns \`{ value: 1, done: false }\\\`.
    *   \`gen.next()\\\`: The function resumes from its paused state, hits \`yield 2\\\`, pauses again, and returns \`{ value: 2, done: false }\\\`.
    *   \`gen.next()\\\`: Resumes, hits \`yield 3\\\`, pauses, returns \`{ value: 3, done: false }\\\`.
    *   \`gen.next()\\\`: Resumes, finds no more \`yield\` keywords and reaches the end of the function. It returns \`{ value: undefined, done: true }\\\`, signaling that it's finished.

### 📚 Key Concepts
-   **Generator Function**: A function that can be exited and later re-entered. Its context (variable bindings) will be saved across re-entrances.
-   **Iterator**: An object which defines a sequence and potentially a return value upon its termination. A generator object is a type of iterator.
-   **\`yield\`**: A keyword that pauses generator function execution and returns the value of the expression following the \`yield\` keyword.
`,
    'symbol-data-type': `
### 💡 Problem Breakdown
The goal is to understand the \`Symbol\` primitive type, introduced in ES6. A symbol is a completely unique, immutable value. They are primarily used as unique keys for object properties to avoid naming collisions. For example, if you are creating a library and want to add a property to a user's object, using a symbol key ensures you won't accidentally overwrite a property with the same name that the user might have defined.

### ⚙️ Solution Walkthrough
The solution creates a symbol, uses it as an object key, and then shows how it is "hidden" from common object inspection methods.

\`\`\`javascript
const id = Symbol('id'); // The string 'id' is just a description
const user = { 
    name: 'Test',
    [id]: 123 // Use computed property syntax to set the key
};
\`\`\`

1.  **\`Symbol('id')\`**: Creates a new unique symbol. The description "id" is optional and used for debugging; every symbol is unique regardless of its description.
2.  **\`[id]: 123\`**: To use a symbol as an object key, you must use the computed property name syntax (square brackets).
3.  **Accessing the Property**: You can only access the property using the symbol itself: \`user[id]\`. You cannot use \`user.id\` or \`user['id']\`.
4.  **"Hidden" Nature**: The key characteristic is that symbol-keyed properties are not enumerated by default. They are ignored by \`for...in\` loops, \`Object.keys()\`, and \`JSON.stringify()\`, making them ideal for adding "meta" properties to objects without interfering with normal operations.

### 📚 Key Concepts
-   **Symbol**: A unique and immutable primitive data type.
-   **Computed Property Names**: A syntax that allows you to use an expression (like a variable holding a symbol) as a property key in an object literal.
-   **Enumerability**: A property is enumerable if it shows up during enumeration (e.g., in a \`for...in\` loop). Symbol properties are non-enumerable.
`,
    'proxy-basic': `
### 💡 Problem Breakdown
A Proxy is an advanced ES6 feature that allows you to create a "wrapper" around another object (the "target"). This wrapper can intercept fundamental operations on the target object, like getting a property, setting a property, or calling a function. This is a form of metaprogramming and is useful for logging, validation, formatting, and much more.

### ⚙️ Solution Walkthrough
The solution creates a target object, a handler with "traps" for get and set operations, and then a proxy from them.

\`\`\`javascript
const target = { message: "hello" };

const handler = {
    get(target, prop, receiver) { /* ... */ },
    set(target, prop, value) { /* ... */ }
};

const proxy = new Proxy(target, handler);
\`\`\`

1.  **\`target\`**: The original object we want to wrap.
2.  **\`handler\`**: An object whose properties are functions called "traps". Each trap corresponds to a fundamental operation.
3.  **The \`get\` Trap**: The \`get(target, prop, receiver)\` function is a trap that runs whenever a property is *read* from the proxy. We can log the operation and then return the actual value from the target.
4.  **The \`set\` Trap**: The \`set(target, prop, value)\` function is a trap that runs whenever a property is *written to* on the proxy. We can log the operation, perform the actual assignment (\`target[prop] = value\`), and then must return \`true\` to indicate the operation was successful.
5.  **\`new Proxy(target, handler)\`**: This creates the proxy object.
6.  **Interaction**: From now on, you interact with \`proxy\`, not \`target\`. When you do \`proxy.message\`, the \`get\` trap runs. When you do \`proxy.message = "world"\`, the \`set\` trap runs.

### 📚 Key Concepts
-   **Proxy**: An object that wraps another object and allows you to intercept operations on the wrapped object.
-   **Target**: The original object being proxied.
-   **Handler**: An object containing the "traps".
-   **Trap**: A method on the handler that provides access to a corresponding internal method on the target object (e.g., the \`get\` trap intercepts the \`[[Get]]\` internal method).
-   **Metaprogramming**: A programming technique in which computer programs have the ability to treat other programs as their data. It means that a program can be designed to read, generate, analyze or transform other programs, and even modify itself while running.
`,
};