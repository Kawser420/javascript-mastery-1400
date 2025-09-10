
export const explanations: Record<string, string> = {
    'es6-modules-conceptual': `
### 💡 Problem Breakdown
As applications grow, keeping all your code in one file becomes unmanageable. Modules allow you to split your code into separate, reusable files. The goal is to understand the basic syntax for making code from one file available to another using the ES6 \`import\`/\`export\` standard.

### ⚙️ Solution Walkthrough
The solution shows two conceptual files: a module that exports a function, and a main file that imports and uses it.

**File 1: \`math.js\` (The Module)**
\`\`\`javascript
// This makes the 'add' function available to other files
export const add = (a, b) => a + b;

// We could have other functions here that are NOT exported,
// making them private to this module.
const privateHelper = () => { /* ... */ };
\`\`\`
1.  **\`export\`**: The \`export\` keyword is placed before a declaration (like \`const\`, \`let\`, \`function\`, or \`class\`). This marks it as a "named export" that can be imported by other modules.

**File 2: \`main.js\` (The Consumer)**
\`\`\`javascript
// Import the specific function we need from math.js
import { add } from './math.js';

console.log(add(5, 3)); // 8
\`\`\`
1.  **\`import { ... }\`**: The \`import\` keyword is used to bring in exported members from another module.
2.  **\`{ add }\`**: For named exports, you use curly braces to specify exactly which members you want to import by their exported name.
3.  **The \`from './math.js'\` clause**: This specifies the path to the module file you are importing from.

### 📚 Key Concepts
-   **Module**: A self-contained file of JavaScript code. Modules help organize code, enforce separation of concerns, and avoid polluting the global scope.
-   **\`export\`**: The statement used to export functions, objects, or primitive values from a module so they can be used by other programs.
-   **\`import\`**: The statement used to import bindings that are exported by another module.
`,
    'named-vs-default-export': `
### 💡 Problem Breakdown
ES6 modules provide two primary ways to export code: named exports and default exports. It's important to understand the difference and when to use each.

### ⚙️ Solution Walkthrough
The solution shows conceptual code for both patterns.

**1. Named Exports**
\`\`\`javascript
// utils.js
export const pi = 3.14;
export const calculateCircumference = (radius) => 2 * pi * radius;

// main.js
import { pi, calculateCircumference } from './utils.js';
\`\`\`
-   **Use Case**: Best for exporting several related utility functions or constants from a single file. It's like a library of tools.
-   **Syntax**: Use the \`export\` keyword before each variable/function.
-   **Importing**: You **must** use curly braces \`{...}\` and the exact exported names when importing. You can import as many or as few as you need.

**2. Default Export**
\`\`\`javascript
// MyComponent.js
class MyComponent {
  // ... class implementation
}
export default MyComponent;

// main.js
import TheComponentName from './MyComponent.js';
\`\`\`
-   **Use Case**: Best for files that have one primary "thing" to export, like a single class or a main function.
-   **Syntax**: Use \`export default\`. You can only have **one** default export per file.
-   **Importing**: You do **not** use curly braces. You can also assign any name you want to the import (e.g., \`TheComponentName\`), although it's conventional to use the name of the thing being exported.

### 📚 Key Concepts
-   **Named Export**: Allows a module to export multiple values. When importing, you must use the same names for the corresponding values.
-   **Default Export**: Allows a module to export a single value as its "default". When importing, you can use any name you like.
-   **Best Practice**: A common pattern is to use the default export for the main "thing" in a file and named exports for any secondary, helper utilities. A file can have both a default export and multiple named exports.
`,
};