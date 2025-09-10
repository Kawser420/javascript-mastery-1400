


export const explanations: Record<string, string> = {
    'closure-counter': `
### 💡 Problem Breakdown
The challenge is to create a counter that remembers its value between calls. If you call it once, it should return 1. Call it again, it should return 2, and so on. The key is that the variable holding the count should not be accessible from the global scope; it must be private to the counter mechanism. This is a classic problem to demonstrate closures.

### ⚙️ Solution Walkthrough
The solution uses a function factory pattern. An outer function is created and executed once, which sets up the private state and returns the inner function that will be used as the counter.

\`\`\`javascript
// (() => {
//     let count = 0; // This variable is "closed over"
//     const createCounter = () => {
//         // This inner function is returned
//         // FIX: Escape template literal placeholder
//         return () => \`Counter is now: \\\${++count}\`;
//     };
//     return createCounter();
// })()
\`\`\`

1.  **IIFE (Immediately Invoked Function Expression)**: The entire structure \`(() => { ... })()\` is an IIFE. It runs immediately and helps create a private scope.
2.  **\`let count = 0;\`**: A variable \`count\` is declared in the outer function's scope. This will be our persistent, private counter.
3.  **\`createCounter()\`**: This outer function defines another function inside it.
4.  **\`return () => ...\`**: The inner function is what gets returned from \`createCounter\`. This inner function has no variables of its own, but it increments and returns the \`count\` variable from its parent's scope.
5.  **The Closure**: When \`createCounter\` is executed and returns the inner function, the JavaScript engine ensures that the inner function maintains a reference to its parent's scope (its "lexical environment"). This \`"backpack"\` of variables (\`count\` in this case) is the closure. Even though the outer function has finished executing, the \`count\` variable is not garbage collected; it stays alive, accessible only to the inner function.

### 📚 Key Concepts
-   **Closure**: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In simpler terms, a closure gives you access to an outer function’s scope from an inner function.
-   **Lexical Environment**: Consists of any local variables that were in-scope at the time the closure was created.
-   **IIFE**: A JavaScript function that runs as soon as it is defined. It's a common way to create a private scope.
`,
    'lexical-scope': `
### 💡 Problem Breakdown
This problem demonstrates the fundamental concept of lexical (or static) scope in JavaScript. The goal is to show that a function's scope is determined by its physical placement in the code, not by where it is called. An inner function should be able to access variables from its containing outer function.

### ⚙️ Solution Walkthrough
The solution defines a nested function structure and shows the inner function accessing a variable from the outer scope.

\`\`\`javascript
// const outerVar = "I am outside!";
// function inner() {
//     // Inner function has access to outerVar due to lexical scope
//     // FIX: Escape template literal placeholder
//     return \`Inner function can access: "\\\${outerVar}"\`;
// }
// return inner();
\`\`\`

1.  **\`outerVar\` Declaration**: A variable \`outerVar\` is declared in the outer scope.
2.  **\`inner()\` Definition**: A function named \`inner\` is defined within the same scope.
3.  **Accessing \`outerVar\`**: Inside \`inner\`, the code references \`outerVar\`. When the JavaScript engine tries to resolve this variable, it first looks inside \`inner\`'s own scope. It doesn't find it.
4.  **Scope Chain**: Because of lexical scoping, the engine then looks one level up, in the scope where \`inner\` was defined (the outer scope). It finds \`outerVar\` there and uses its value. This "chain" of scopes is called the scope chain.
5.  **Return Value**: The \`inner\` function successfully builds and returns the string, having accessed the variable from its parent's scope.

### 📚 Key Concepts
-   **Lexical Scope**: The scope of a variable is determined by its location within the source code (it is a "lexical" property). Inner scopes have access to variables in their outer scopes.
-   **Scope Chain**: The chain of nested scopes that the JavaScript engine traverses upwards to find a variable's value.
`,
    'private-data-closure': `
### 💡 Problem Breakdown
The goal is to simulate private data, a key concept in Object-Oriented Programming, using closures. We need to create an object that holds a person's name, but the name itself should not be directly accessible or modifiable from outside the object. Instead, we should only be able to interact with the name through "public" methods like \`getName\` and \`setName\`.

### ⚙️ Solution Walkthrough
The solution is a function factory, \`createPerson\`, that uses a closure to protect the \`privateName\` variable.

\`\`\`javascript
// const createPerson = (name) => {
//     let privateName = name; // Private variable

//     return {
//         getName: () => privateName,
//         setName: (newName) => {
//             privateName = newName;
//         },
//     };
// };

// const person = createPerson('initialName');
// person.setName('Jane');
// You cannot do person.privateName, it will be undefined.
\`\`\`

1.  **\`createPerson(name)\`**: This is our factory function. It takes an initial name.
2.  **\`let privateName = name;\`**: This variable is local to the \`createPerson\` function's scope. This is the "private" data we want to protect.
3.  **\`return { ... }\`**: The factory returns an object. This object contains two methods: \`getName\` and \`setName\`. This object is the "public interface".
4.  **The Closure in Action**: Both \`getName\` and \`setName\` are inner functions defined within the scope of \`createPerson\`. Because of closures, they both maintain a persistent reference to the \`privateName\` variable from their parent scope.
5.  **Encapsulation**: When you call \`person.getName()\`, it executes the inner function which can read \`privateName\`. When you call \`person.setName('Jane')\`, it executes the inner function that can write to \`privateName\`. However, there is no way to access \`privateName\` directly from the outside (e.g., \`person.privateName\` doesn't work). The data is encapsulated.

### 📚 Key Concepts
-   **Encapsulation**: The bundling of data (properties) and the methods that operate on that data into a single unit (an object), and restricting direct access to some of the object's components. This is a fundamental principle of OOP.
-   **Module Pattern**: This is a classic JavaScript design pattern that uses closures to create modules with public and private members.
`,
};