export const explanations: Record<string, string> = {
  "es-modules-named-export": `
### 💡 Problem Breakdown
This problem covers the most common type of export: a "named" export. This is used when a module file might provide several distinct pieces of functionality (functions, variables, classes), and you want to export them by their specific names.

### ⚙️ Solution Walkthrough
The \`export\` keyword is placed before the declaration of the function or variable you want to make available to other modules.
\`\`\`javascript
// --- In file: utils.js ---

// Exporting a function declaration
export function greet(name) {
  return \`Hello, \${name}\`;
}

// Exporting a constant variable
export const version = "1.0";
\`\`\`
1.  **\`export function greet...\`**: This makes the \`greet\` function available for import by other modules under the name "greet".
2.  **\`export const version...\`**: This makes the \`version\` constant available under the name "version".

### 📚 Key Concepts
-   **Named Export**: An export that is identified by its name. A module can have multiple named exports.
-   **Module**: A self-contained file of JavaScript code that can export and import functionality.
`,
  "es-modules-multiple-named-exports": `
### 💡 Problem Breakdown
A single module file can act as a library, exporting multiple pieces of functionality. The task is to show how to export several named constants and functions from one file.

### ⚙️ Solution Walkthrough
You can place the \`export\` keyword before each individual declaration. Alternatively, you can declare everything first and then export a list of them at the end of the file.
\`\`\`javascript
// --- In file: math.js ---

// Method 1: Exporting as you declare
export const PI = 3.14;
export const add = (a, b) => a + b;

// Method 2: Exporting at the end (functionally the same)
const E = 2.718;
const subtract = (a, b) => a - b;
export { E, subtract };
\`\`\`
1.  **Inline Export**: The first method is very common and clear.
2.  **Export List**: The second method, using \`export { ... };\`, is useful for seeing at a glance all the public members of the module.

### 📚 Key Concepts
-   **Named Export**: A module can export an unlimited number of named values.
-   **Module API**: The set of exported members forms the "public API" of the module.
`,
  "es-modules-default-export": `
### 💡 Problem Breakdown
A module can have one (and only one) "default" export. This is intended to be the main value that the module provides, such as a single class or a primary function.

### ⚙️ Solution Walkthrough
The syntax is \`export default\`, followed by the value to be exported. The value can be anonymous.
\`\`\`javascript
// --- In file: MyComponent.js ---

// The class is the main export of this file.
export default class {
  render() {
    return "<div>My Component</div>";
  }
}

// You can also export a function or a value:
// export default () => "Hello!";
\`\`\`
1.  **\`export default ...\`**: This marks the primary export.
2.  **No Name Needed**: The class expression after \`export default\` doesn't need a name because the importing file will assign it one.

### 📚 Key Concepts
-   **Default Export**: Designates the main export of a module. There can be at most one per module.
`,
  "es-modules-import-named": `
### 💡 Problem Breakdown
The task is to show how to import functionality that has been exported from another module using named exports.

### ⚙️ Solution Walkthrough
The \`import\` statement is used with curly braces \`{}\` to specify which named exports you want to bring into the current module's scope.
\`\`\`javascript
// --- In file: math.js ---
export const PI = 3.14;
export const add = (a, b) => a + b;

// --- In file: main.js ---
// Import both named exports from math.js
import { PI, add } from './math.js';

console.log(\`The sum of 2 and PI is \${add(2, PI)}\`);
\`\`\`
1.  **\`import { ... } from '...'\`**: This is the syntax for named imports.
2.  **\`{ PI, add }\`**: The names inside the curly braces must exactly match the names of the exports from the other file.

### 📚 Key Concepts
-   **Named Import**: The syntax used to import values that were exported with a specific name.
`,
  "es-modules-import-default": `
### 💡 Problem Breakdown
Importing a default export has a slightly different syntax from importing named exports. The key difference is that you don't use curly braces, and you can assign any name you want to the imported value.

### ⚙️ Solution Walkthrough
The \`import\` statement is used without curly braces.
\`\`\`javascript
// --- In file: MyComponent.js ---
export default class { /* ... */ }

// --- In file: main.js ---
// You can give the import any name you want.
// By convention, you often use the module's filename in PascalCase.
import MyComponent from './MyComponent.js';

const component = new MyComponent();
\`\`\`
1.  **\`import MyComponent from ...\`**: The lack of curly braces tells JavaScript to import the default export from that module.
2.  **Variable Name**: The name \`MyComponent\` is a new variable in \`main.js\` that holds the default exported class.

### 📚 Key Concepts
-   **Default Import**: The syntax for importing a module's default export.
`,
  "es-modules-import-rename": `
### 💡 Problem Breakdown
Sometimes, you might import a named export from a module, but that name is already in use in your current file, or you simply want to use a more descriptive name. The \`as\` keyword allows you to rename an import.

### ⚙️ Solution Walkthrough
The \`as\` keyword is used within the curly braces of a named import.
\`\`\`javascript
// --- In file: utils.js ---
export const add = (a, b) => a + b;

// --- In file: main.js ---
// 'add' might already be defined, so we rename the import.
import { add as sum } from './utils.js';

console.log(sum(5, 5)); // 10
// console.log(add(5, 5)); // ReferenceError: add is not defined
\`\`\`
1.  **\`add as sum\`**: This tells the engine to import the value exported as \`add\`, but to create a local variable named \`sum\` to hold it.

### 📚 Key Concepts
-   **Import Aliasing**: Using the \`as\` keyword to rename imports to avoid naming conflicts or improve clarity.
`,
  "es-modules-namespace-import": `
### 💡 Problem Breakdown
If a module has many named exports, it can be cumbersome to list them all in the \`import\` statement. A "namespace import" allows you to import all of a module's named exports as properties of a single object.

### ⚙️ Solution Walkthrough
The \`import * as ...\` syntax is used.
\`\`\`javascript
// --- In file: math.js ---
export const PI = 3.14;
export const add = (a, b) => a + b;

// --- In file: main.js ---
import * as mathUtils from './math.js';

console.log(mathUtils.PI);      // 3.14
console.log(mathUtils.add(2, 3)); // 5
\`\`\`
1.  **\`import * as mathUtils\`**: This creates an object named \`mathUtils\` in the current scope.
2.  **Module Namespace Object**: This object contains all the named exports from \`math.js\` as its properties. Note that it does **not** include the default export.

### 📚 Key Concepts
-   **Namespace Import**: A way to group all of a module's exports under a single name.
`,
  "es-modules-mixed-exports": `
### 💡 Problem Breakdown
A single module can have both a default export and any number of named exports. The task is to show how to import both types in a single \`import\` statement.

### ⚙️ Solution Walkthrough
The \`import\` statement combines the syntax for default and named imports. The default import must come first.
\`\`\`javascript
// --- In file: MyLibrary.js ---
export default class MyLibrary { /* ... */ }
export const version = "1.0";
export function helper() { /* ... */ }

// --- In file: main.js ---
import MyLibrary, { version, helper } from './MyLibrary.js';

console.log(\`Using version \${version}\`);
const lib = new MyLibrary();
\`\`\`
1.  **\`import MyLibrary, { ... }\`**: The default import (\`MyLibrary\`) is listed first, followed by a comma, and then the named imports in curly braces.

### 📚 Key Concepts
-   **Mixed Imports**: A combined syntax for importing both default and named exports.
`,
  "es-modules-dynamic-import": `
### 💡 Problem Breakdown
Static \`import\` statements must be at the top level of a module. Sometimes, however, you only want to load a module in response to a user action (like a click) or a certain condition. This is called "code-splitting." The dynamic \`import()\` function allows you to do this.

### ⚙️ Solution Walkthrough
\`import()\` is a function-like syntax that returns a promise.
\`\`\`javascript
// --- In file: main.js ---
const myButton = document.getElementById('my-button');

myButton.addEventListener('click', async () => {
  try {
    // The module is only loaded when the button is clicked
    const { someFunction } = await import('./heavy-module.js');
    someFunction();
  } catch (error) {
    console.error("Failed to load module:", error);
  }
});
\`\`\`
1.  **\`import('./path/to/module.js')\`**: This is the dynamic import call. It returns a promise.
2.  **\`await\`**: We \`await\` the promise. When it resolves, it provides the module namespace object (the same object you would get from \`import * as ...\`).
3.  **Destructuring**: We can then destructure the specific functions we need from the module object.

### 📚 Key Concepts
-   **Dynamic \`import()\`**: A promise-based function for loading modules on demand.
-   **Code-Splitting**: A performance optimization technique where code is split into smaller chunks that are loaded only when needed.
`,
  "esm-vs-commonjs": `
### 💡 Problem Breakdown
This is a conceptual problem about the two major module systems in JavaScript.
- **ES Modules (ESM)**: The official standard, used by browsers and modern Node.js. It uses \`import\` and \`export\` syntax.
- **CommonJS (CJS)**: The original module system used by Node.js. It uses \`require()\` and \`module.exports\`.

### ⚙️ Solution Walkthrough
A comparison of the key differences:
-   **Syntax**:
    -   ESM: \`import { x } from './m.js'; export const y = 1;\`
    -   CJS: \`const { x } = require('./m.js'); module.exports = { y: 1 };\`
-   **Loading**:
    -   ESM is **asynchronous** and **static**. The module graph is determined at parse time, before any code is executed. This allows for powerful static analysis and optimizations like tree-shaking.
    -   CJS is **synchronous**. When \`require()\` is called, the file is read from disk, compiled, and executed, and the call doesn't return until this is done. This can be a performance bottleneck.
-   **Context**:
    -   ESM is the standard for web browsers.
    -   CJS is the traditional standard for Node.js, though Node.js now fully supports ESM as well.

### 📚 Key Concepts
-   **ES Modules (ESM)**: The modern, static, standard module system.
-   **CommonJS (CJS)**: The legacy, synchronous module system from Node.js.
`,
  "commonjs-require": `
### 💡 Problem Breakdown
CommonJS is the module system historically used by Node.js. The primary way to import a module in a CommonJS environment is with the global \`require()\` function.

### ⚙️ Solution Walkthrough
The \`require\` function takes a string (the module path) and returns the \`module.exports\` object from that module.
\`\`\`javascript
// --- In a Node.js file (e.g., index.js) ---

// Import a built-in Node.js module
const fs = require('fs');

// Import a local file
const myUtils = require('./utils.js');

myUtils.someFunction();
\`\`\`
1.  **\`require('path')\`**: The path can be a built-in module name, a path to a local file, or the name of a package in the \`node_modules\` directory.
2.  **Synchronous**: The \`require\` call is synchronous. It blocks execution, reads the file from disk, executes it, and returns its exports.

### 📚 Key Concepts
-   **CommonJS**: The legacy module system of Node.js.
-   **\`require()\`**: The function used to import modules in CommonJS.
`,
  "commonjs-module-exports": `
### 💡 Problem Breakdown
In CommonJS, the object that a module makes available to other files is \`module.exports\`. By default, this is an empty object. To export a single value (like a class, function, or object), you should reassign \`module.exports\` to that value.

### ⚙️ Solution Walkthrough
The \`module.exports\` object is reassigned to a class.
\`\`\`javascript
// --- In file: MyClass.js ---

class MyClass {
  // ...
}

// Reassign module.exports to the class
module.exports = MyClass;

// --- In file: main.js ---
const MyClass = require('./MyClass.js');
const instance = new MyClass();
\`\`\`
### 📚 Key Concepts
-   **\`module.exports\`**: The object that is actually returned as the result of a \`require()\` call.
`,
  "commonjs-exports-shorthand": `
### 💡 Problem Breakdown
If you want to export multiple values from a CommonJS module, you can add them as properties to the \`module.exports\` object. As a convenience, CommonJS provides a shorthand variable, \`exports\`, which is a reference to the initial \`module.exports\` object.

### ⚙️ Solution Walkthrough
Properties are added to the \`exports\` object.
\`\`\`javascript
// --- In file: utils.js ---

// 'exports' is a shorthand for 'module.exports'
exports.add = (a, b) => a + b;
exports.PI = 3.14;

// --- In file: main.js ---
const { add, PI } = require('./utils.js');
console.log(add(2, PI));
\`\`\`
### 📚 Key Concepts
-   **\`exports\` shorthand**: A variable that provides a convenient way to add properties to \`module.exports\`.
`,
  "commonjs-exports-vs-module-exports": `
### 💡 Problem Breakdown
This is a very common point of confusion in CommonJS.
- **\`module.exports\`**: This is the "real" object that gets returned by a \`require\` call.
- **\`exports\`**: This is just a variable that starts out as a reference to \`module.exports\`.

The pitfall is that if you reassign \`exports\` (\`exports = ...\`), you are only changing what the local \`exports\` variable points to; you are not changing \`module.exports\`. The \`require\` call will still return the original \`module.exports\` object.

### ⚙️ Solution Walkthrough
A conceptual example of the pitfall.
\`\`\`javascript
// --- In file: my-module.js ---
// This BREAKS the link. 'exports' no longer points to module.exports.
exports = function() { console.log('hello'); };
// The require call will return an empty object, not this function.

// Correct way to export a single function:
// module.exports = function() { console.log('hello'); };
\`\`\`
**Rule of thumb**: It's safe to add properties (\`exports.myFunc = ...\`), but if you want to export a single, non-object value, always reassign \`module.exports\`.

### 📚 Key Concepts
-   **Reference vs. Value**: The \`exports\` variable holds a reference, and reassigning it breaks that reference.
`,
  "es-modules-re-export": `
### 💡 Problem Breakdown
Sometimes you want to create a "barrel" file (e.g., an \`index.js\`) that collects exports from several other modules and re-exports them. The \`export ... from ...\` syntax provides a concise way to do this without having to \`import\` and then \`export\` in separate statements.

### ⚙️ Solution Walkthrough
An \`index.js\` file re-exports named exports from another module.
\`\`\`javascript
// --- In file: math.js ---
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// --- In file: index.js ---
// Re-export 'add' and 'subtract' from math.js
export { add, subtract } from './math.js';

// --- In file: main.js ---
// Now we can import directly from the barrel file
import { add } from './index.js';
\`\`\`
### 📚 Key Concepts
-   **Re-exporting**: A syntax for passing through an export from another module.
-   **Barrel Files**: A common pattern for creating a single, convenient entry point for a directory of modules.
`,
  "es-modules-re-export-default": `
### 💡 Problem Breakdown
Re-exporting a default export requires a slightly different syntax because the default export doesn't have a name that can be referenced in the \`export { ... }\` clause.

### ⚙️ Solution Walkthrough
You first \`import\` the default, giving it a name, and then \`export\` it. A more concise syntax is also available.
\`\`\`javascript
// --- In file: MyComponent.js ---
export default class { /* ... */ }

// --- In file: index.js ---
// This imports the default export from MyComponent.js and re-exports it
// as the default export of index.js.
export { default } from './MyComponent.js';

// To re-export it as a named export:
// export { default as MyComponent } from './MyComponent.js';
\`\`\`
### 📚 Key Concepts
-   **Default Re-export**: A specific syntax for re-exporting default exports.
`,
  "es-modules-re-export-all": `
### 💡 Problem Breakdown
The \`export * from ...\` syntax allows you to re-export all of the *named* exports from another module in a single line.

### ⚙️ Solution Walkthrough
An \`index.js\` file aggregates all named exports from two other utility files.
\`\`\`javascript
// --- In file: all-utils.js ---

// Re-exports all named exports from math.js and string.js
export * from './math.js';
export * from './string.js';

// --- In file: main.js ---
// Now we can import any of the named exports from the aggregate file
import { add, capitalize } from './all-utils.js';
\`\`\`
**Note**: \`export *\` does **not** re-export the default export of the module.

### 📚 Key Concepts
-   **Namespace Re-export**: The \`export *\` syntax is used for aggregating modules.
`,
  "es-modules-side-effect-import": `
### 💡 Problem Breakdown
Sometimes you need to import a module solely for its side effects, without actually using any of the values it exports. A common example is importing a "polyfill," which is a piece of code that adds a modern feature to an older environment.

### ⚙️ Solution Walkthrough
The \`import\` statement is used with just the module specifier.
\`\`\`javascript
// --- In file: polyfill.js ---
// This code adds a feature if it doesn't exist.
if (!String.prototype.startsWith) {
  // ... implementation ...
}
console.log("Polyfill loaded!");

// --- In file: main.js ---
// This imports the module and executes its code, but does not
// create any local variables.
import './polyfill.js';
\`\`\`
The code inside \`polyfill.js\` will run once, and that's all that's needed.

### 📚 Key Concepts
-   **Side Effect**: An action a module takes that affects the global scope or environment.
-   **Polyfill**: Code that implements a feature on older environments that do not have it natively.
`,
  "module-scope-conceptual": `
### 💡 Problem Breakdown
This is a fundamental concept of modules. Unlike traditional scripts where top-level variables declared with \`var\` become properties of the global \`window\` object, each ES module has its own, separate top-level scope.

### ⚙️ Solution Walkthrough
A variable declared in one module is not accessible in another unless it is explicitly exported and imported.
\`\`\`javascript
// --- In file: moduleA.js ---
const myVar = "I am private to moduleA";
export const publicVar = "I am public";

// --- In file: moduleB.js ---
import { publicVar } from './moduleA.js';

console.log(publicVar); // "I am public"
// console.log(myVar);   // ReferenceError: myVar is not defined
\`\`\`
This prevents pollution of the global namespace and makes dependencies between different parts of your code explicit and clear.

### 📚 Key Concepts
-   **Module Scope**: Each module has its own private scope.
-   **Encapsulation**: Modules provide a mechanism for encapsulation at the file level.
`,
  "tree-shaking-conceptual": `
### 💡 Problem Breakdown
Tree shaking is a term for a "dead code elimination" process. It's an optimization performed by modern module bundlers (like Vite, Webpack, Rollup). Because ES Modules use a static syntax (\`import\`/\`export\`), the bundler can analyze the entire dependency graph *before* executing any code.

### ⚙️ Solution Walkthrough
A conceptual example of how a bundler performs tree shaking.
\`\`\`javascript
// --- In file: utils.js ---
export function add() { /* ... */ }
export function subtract() { /* ... */ } // This is unused

// --- In file: main.js ---
import { add } from './utils.js';
console.log(add(2, 3));

// --- In the final bundled output file ---
// The bundler sees that 'subtract' was never imported or used.
// It will be completely removed from the final production code,
// resulting in a smaller file size.
\`\`\`
### 📚 Key Concepts
-   **Tree Shaking**: A dead-code elimination optimization.
-   **Static Analysis**: The process of analyzing code without executing it, which is what enables tree shaking for ES Modules.
`,
  "circular-dependencies-conceptual": `
### 💡 Problem Breakdown
A circular dependency occurs when Module A depends on (imports) Module B, and Module B also depends on Module A. This can create a paradoxical situation. ES Modules handle this gracefully, but it can lead to unexpected behavior.

### ⚙️ Solution Walkthrough
1.  **\`main.js\` imports \`a.js\`**. The engine starts executing \`a.js\`.
2.  **\`a.js\` imports \`b.js\`**. The execution of \`a.js\` is paused, and the engine starts executing \`b.js\`.
3.  **\`b.js\` imports \`a.js\`**. The engine sees a circular dependency. To break the loop, it provides \`b.js\` with a "snapshot" of \`a.js\`'s exports *as they exist so far*.
4.  \`b.js\` finishes executing.
5.  \`a.js\` resumes execution. Its import of \`b.js\` is now complete.
The pitfall is that when \`b.js\` was executing, the exports from \`a.js\` were not yet initialized, so they would be \`undefined\`.

### 📚 Key Concepts
-   **Circular Dependency**: A dependency cycle between modules. It's generally an architectural smell and should be avoided by refactoring if possible.
`,
  "top-level-await-module": `
### 💡 Problem Breakdown
Top-level \`await\` (ES2022) allows the \`await\` keyword to be used at the top level of an ES module, outside of an \`async\` function. This is particularly useful for modules that need to perform an asynchronous operation to initialize themselves, such as fetching configuration data or connecting to a database.

### ⚙️ Solution Walkthrough
A module fetches configuration data and then exports it.
\`\`\`javascript
// --- In file: config.js ---
const response = await fetch('/api/config');
const config = await response.json();

export default config;

// --- In file: main.js ---
// The execution of main.js will be paused by the engine
// until the top-level await in config.js is resolved.
import config from './config.js'; 

console.log(config.apiKey);
\`\`\`
### 📚 Key Concepts
-   **Top-Level \`await\`**: A feature for handling async setup and initialization within modules.
`,
  "module-resolution-conceptual": `
### 💡 Problem Breakdown
"Module resolution" is the process by which the JavaScript engine or a bundler finds the actual file on disk based on the string in an \`import\` or \`require\` statement.
- **Relative Path Specifier**: Starts with \`./\` or \`../\`. The resolver looks for the file relative to the location of the current module. Example: \`import './utils.js'\`.
- **Bare Module Specifier**: Does not start with \`/\` or \`.\`. The resolver looks for this module in the \`node_modules\` directory. Example: \`import 'react'\`.
- **Absolute Path Specifier**: Starts with \`/\`. The resolver looks for the file starting from the root of the file system or web server.

### 📚 Key Concepts
-   **Module Resolution**: The algorithm used to locate a module file.
`,
  "package-json-type-module": `
### 💡 Problem Breakdown
By default, Node.js treats files with a \`.js\` extension as CommonJS modules. The \`type\` field in \`package.json\` allows you to change this default behavior.

### ⚙️ Solution Walkthrough
Setting \`\"type\": \"module\"\` in \`package.json\` tells Node.js to treat \`.js\` files as ES Modules.
\`\`\`json
// --- In package.json ---
{
  "name": "my-esm-package",
  "type": "module"
}
\`\`\`
Now, in your Node.js project:
- A file named \`index.js\` will be treated as an ES Module, and you should use \`import\`/\`export\`.
- If you need to write a CommonJS file in this project, you must name it with a \`.cjs\` extension.

### 📚 Key Concepts
-   **Module Format Configuration**: The \`type\` field in \`package.json\` is the standard way to configure the default module system for a Node.js project.
`,
  "node-cjs-in-esm": `
### 💡 Problem Breakdown
In Node.js, you can use CommonJS modules within an ES Module. Node.js provides an interoperability layer that makes this possible.

### ⚙️ Solution Walkthrough
A standard \`import\` statement can be used.
\`\`\`javascript
// --- In file: my-cjs-module.js ---
module.exports = {
  name: 'CommonJS Module'
};

// --- In file: index.mjs (an ES Module) ---
// You can import the default export (module.exports)
import cjsModule from './my-cjs-module.js';

console.log(cjsModule.name); // "CommonJS Module"
\`\`\`
Node.js wraps the CommonJS module and exposes its \`module.exports\` as the default export to the ES Module.

### 📚 Key Concepts
-   **Module Interoperability**: The ability for different module systems to work together.
`,
  "node-esm-in-cjs": `
### 💡 Problem Breakdown
Using an ES Module from a CommonJS module is more complex because \`require()\` is synchronous, but ESM loading is asynchronous. Therefore, you cannot use a standard \`require()\` call to load an ESM file.

### ⚙️ Solution Walkthrough
You must use the dynamic \`import()\` function, which returns a promise.
\`\`\`javascript
// --- In file: my-esm-module.mjs ---
export const message = "Hello from ESM";

// --- In file: index.js (a CommonJS module) ---
async function loadEsm() {
  const esmModule = await import('./my-esm-module.mjs');
  console.log(esmModule.message); // "Hello from ESM"
}
loadEsm();
\`\`\`
### 📚 Key Concepts
-   **Asynchronous Loading**: The key difference that necessitates the use of dynamic \`import()\` for this direction of interoperability.
`,
  "this-value-in-modules": `
### 💡 Problem Breakdown
This is a conceptual problem about a subtle difference between classic scripts and ES Modules.
- In a **classic script** (\`<script src="..."></script>\`) running in a browser in non-strict mode, the value of \`this\` at the top-level (global) scope is the \`window\` object.
- In an **ES Module** (\`<script type="module">\`), the value of \`this\` at the top-level scope is **\`undefined\`**.

### ⚙️ Solution Walkthrough
This behavior is part of the ESM specification and helps to prevent accidental pollution of the global object.
\`\`\`javascript
// --- In file: my-module.js ---
console.log(this); // undefined
\`\`\`
This makes modules more self-contained and less prone to side effects.

### 📚 Key Concepts
-   **Module Context**: ES Modules have a different execution context than classic scripts.
`,
  "live-bindings-esm": `
### 💡 Problem Breakdown
Imports in ES Modules are not simple copies of the exported values; they are live, read-only "bindings" or views into the exported values. If the module that exported a value changes it, that change will be visible in the module that imported it.

### ⚙️ Solution Walkthrough
A module exports a variable and a function that changes it.
\`\`\`javascript
// --- In file: counter.js ---
export let count = 1;
export function increment() {
  count++;
}

// --- In file: main.js ---
import { count, increment } from './counter.js';

console.log(count); // 1
increment();
console.log(count); // 2 (The imported 'count' reflects the change)
// count = 3; // This would throw a TypeError, as imports are read-only.
\`\`\`
### 📚 Key Concepts
-   **Live Bindings**: A key feature of ES Module imports that distinguishes them from CommonJS \`require()\`.
`,
  "cached-bindings-cjs": `
### 💡 Problem Breakdown
CommonJS \`require()\` works differently from ESM \`import\`. When you \`require\` a module, its code is executed once, and the resulting \`module.exports\` object is cached. Subsequent \`require\` calls for the same module will return the exact same cached object.

### ⚙️ Solution Walkthrough
If the exporting module changes a property on its \`exports\` object, the change is visible. But if it reassigns the entire \`module.exports\` object, this does not affect modules that have already required it.
\`\`\`javascript
// --- In file: state.js ---
let state = { count: 1 };
module.exports = state;
setTimeout(() => { state.count = 99; }, 100);

// --- In file: main.js ---
const state = require('./state.js');
console.log(state.count); // 1
setTimeout(() => { console.log(state.count); }, 200); // 99
\`\`\`
The imported \`state\` is a reference to the same object, so property changes are reflected.

### 📚 Key Concepts
-   **Module Caching**: The mechanism by which CommonJS avoids re-executing modules on every \`require\` call.
`,
  "import-attributes-conceptual": `
### 💡 Problem Breakdown
Import Attributes (formerly Import Assertions) are a syntax for providing additional information about a module being imported, most commonly its type. This allows the JavaScript host (like a browser or Node.js) to be sure it's handling the file correctly.

### ⚙️ Solution Walkthrough
The most common use case is for importing JSON modules.
\`\`\`javascript
// The 'with' keyword is the standard syntax
import config from './config.json' with { type: 'json' };
\`\`\`
This tells the engine to parse the file as JSON. This is safer than letting the server's \`Content-Type\` header be the only source of truth, which could be misconfigured and lead to a security issue if an executable script was served instead of JSON.

### 📚 Key Concepts
-   **Import Attributes**: A security feature for ES modules that provides hints about a module's expected format.
`,
  "bundlers-and-modules-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a key part of the modern front-end development toolchain. Browsers traditionally did not support the \`import\`/\`export\` syntax or the Node.js module resolution algorithm. A **module bundler** is a tool that takes your application's entry point, follows all the \`import\` statements to build a dependency graph, and then combines all the necessary modules into one or more optimized JavaScript files that a browser can execute.

### ⚙️ Solution Walkthrough
Tools like Vite, Webpack, and Rollup are bundlers. They perform several key tasks:
1.  **Dependency Resolution**: They find all the modules your application needs.
2.  **Transpilation**: They can convert modern JavaScript into older versions for browser compatibility (using tools like Babel).
3.  **Optimization**: They perform optimizations like **tree shaking** (removing unused code) and **minification** (removing whitespace and shortening names) to reduce the final file size.
4.  **Asset Handling**: They can also process and bundle other assets like CSS, images, and fonts.

### 📚 Key Concepts
-   **Module Bundler**: A tool that combines multiple JavaScript modules into a single file for use in a browser.
`,
  "conditional-exports-conceptual": `
### 💡 Problem Breakdown
A single JavaScript package might need to provide different files depending on the environment it's being used in. For example, it might need to provide a CommonJS version for older Node.js and an ES Module version for modern Node.js or browsers. The \`exports\` field in \`package.json\` is the modern, standard way to define these conditional exports.

### ⚙️ Solution Walkthrough
An example of the \`exports\` field in \`package.json\`.
\`\`\`json
{
  "name": "my-library",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  }
}
\`\`\`
When a user does \`import 'my-library'\`, an ESM-aware environment will get \`index.mjs\`. When they do \`require('my-library')\`, a CJS environment will get \`index.cjs\`.

### 📚 Key Concepts
-   **Conditional Exports**: A feature in \`package.json\` that allows a package to define different entry points for different module systems and environments.
`,
  "dynamic-import-for-lazy-loading": `
### 💡 Problem Breakdown
"Lazy loading" is a performance optimization pattern where you delay loading parts of your application until they are actually needed. Dynamic \`import()\` is the primary language feature that enables this for JavaScript modules, often referred to as "code-splitting."

### ⚙️ Solution Walkthrough
A conceptual example in a web application router.
\`\`\`javascript
// When the user navigates to the '/dashboard' route
router.on('/dashboard', async () => {
  // The code for the Dashboard component is only downloaded
  // and executed at this moment.
  const { Dashboard } = await import('./components/Dashboard.js');
  render(new Dashboard());
});
\`\`\`
This means the initial page load is much faster, as the user doesn't have to download the code for the dashboard until they actually go there.

### 📚 Key Concepts
-   **Lazy Loading / Code-Splitting**: A key performance pattern for modern web applications.
-   **Dynamic \`import()\`**: The core JavaScript feature that enables lazy loading of modules.
`,
  "module-script-tag": `
### 💡 Problem Breakdown
To use ES Modules directly in a browser, you must use the \`<script type="module">\` tag. This tells the browser to treat the script as an ES Module, which has several key characteristics that differ from a classic script.

### ⚙️ Solution Walkthrough
Key characteristics of \`<script type="module">\`:
1.  **Enables \`import\`/\`export\`**: You can use the ES Module syntax.
2.  **Strict Mode**: Module code always runs in strict mode by default.
3.  **No Global Pollution**: Top-level variables declared in a module do not become properties of the \`window\` object.
4.  **Deferred by Default**: Module scripts are automatically deferred. The browser will parse the HTML, download the script in parallel, and only execute it after the HTML parsing is complete.

\`\`\`html
<script type="module" src="app.js"></script>
\`\`\`
### 📚 Key Concepts
-   **\`<script type="module">\`**: The HTML syntax required to load an ES Module in a browser.
`,
  "import-map-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a modern browser feature. By default, browsers do not understand "bare" module specifiers like \`import React from 'react'\`. They only understand URLs. An **import map** is a JSON object defined in a \`<script type="importmap">\` tag that allows you to map bare specifiers to actual URLs.

### ⚙️ Solution Walkthrough
An import map is defined in the HTML file before any module scripts.
\`\`\`html
<script type="importmap">
{
  "imports": {
    "react": "https://cdn.skypack.dev/react",
    "my-utils/": "./src/utils/"
  }
}
</script>
<script type="module">
  import React from 'react'; // Browser now knows to fetch this from the CDN
  import { helper } from 'my-utils/helpers.js'; // Resolves to ./src/utils/helpers.js
</script>
\`\`\`
Import maps allow you to write module code that is portable between a browser environment and a Node.js/bundled environment without changing the import statements.

### 📚 Key Concepts
-   **Import Map**: A browser feature for controlling module resolution for bare and path-based specifiers.
`,
  "re-exporting-with-rename": `
### 💡 Problem Breakdown
When re-exporting a named export from another module, you can use the \`as\` keyword to change its name. This is useful for creating a more consistent or convenient public API for your "barrel" module.

### ⚙️ Solution Walkthrough
The \`add\` function is re-exported with the new name \`sum\`.
\`\`\`javascript
// --- In file: math.js ---
export const add = (a, b) => a + b;

// --- In file: index.js ---
// Re-export 'add' from math.js, but with the name 'sum'
export { add as sum } from './math.js';

// --- In file: main.js ---
// Now we import 'sum' from the barrel file
import { sum } from './index.js';
\`\`\`
### 📚 Key Concepts
-   **Re-exporting**: A syntax for passing through an export from another module.
-   **Export Aliasing**: Using \`as\` in an \`export\` statement to rename an export.
`,
  "amd-modules-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a historical module system. Asynchronous Module Definition (AMD) was one of the early module formats created to solve the problem of loading JavaScript modules asynchronously in the browser before ES Modules were standardized. The most popular implementation was RequireJS.

### ⚙️ Solution Walkthrough
AMD uses a \`define\` function.
\`\`\`javascript
// An AMD module
define(
  // Array of dependencies
  ['./dependency1', './dependency2'],
  // The factory function, which receives the exports of the dependencies
  function(dep1, dep2) {
    // ... your module code ...
    
    // Return the value to be exported
    return {
      myMethod: function() {}
    };
  }
);
\`\`\`
### 📚 Key Concepts
-   **Asynchronous Module Definition (AMD)**: A pre-ESM module system designed for asynchronous loading in browsers.
`,
  "umd-modules-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about another historical module pattern. The Universal Module Definition (UMD) was a pattern that attempted to make a module compatible with multiple environments. A UMD file could work as an AMD module, a CommonJS module, or as a global variable if no module system was detected.

### ⚙️ Solution Walkthrough
A UMD module is wrapped in a complex IIFE that checks for the existence of \`define\` (for AMD) or \`module.exports\` (for CommonJS) to determine how to register itself. This made it possible for library authors to publish a single file that would work everywhere, but the wrapper code was verbose and complex. Modern bundlers and package exports have made UMD largely obsolete.

### 📚 Key Concepts
-   **Universal Module Definition (UMD)**: A historical pattern for creating modules that work across different environments.
`,
  "json-modules-conceptual": `
### 💡 Problem Breakdown
JSON Modules are a modern feature that allows you to \`import\` a JSON file directly. The JavaScript engine will parse the file and provide the resulting object as the module's default export.

### ⚙️ Solution Walkthrough
The import uses an "import attribute" to specify the type.
\`\`\`javascript
// --- config.json ---
// { "apiKey": "abc12345" }

// --- main.js ---
import config from './config.json' with { type: 'json' };

console.log(config.apiKey); // "abc12345"
\`\`\`
This is safer and more ergonomic than using \`fetch\` to get the file, then calling \`response.json()\`.

### 📚 Key Concepts
-   **Import Attributes**: A security and convenience feature for ES modules.
`,
  "css-modules-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a feature provided by module bundlers like Vite or Webpack, not by JavaScript itself. CSS Modules allow you to import a CSS file into your JavaScript module. The bundler processes the CSS, typically by renaming the class names to be unique (e.g., \`.myClass\` becomes \`.MyComponent_myClass__aB123\`).

### ⚙️ Solution Walkthrough
The \`import\` statement returns an object that maps your original class names to the new, unique names.
\`\`\`javascript
// --- In file: MyComponent.module.css ---
// .title { color: blue; }

// --- In file: MyComponent.js ---
import styles from './MyComponent.module.css';

function MyComponent() {
  // styles.title will be a unique string like "MyComponent_title__1a2b3"
  return \`<div class="\${styles.title}">Hello</div>\`;
}
\`\`\`
This solves the problem of global CSS and class name conflicts in large applications.

### 📚 Key Concepts
-   **CSS Modules**: A system for locally scoping CSS class names.
-   **Build Tools**: This functionality is provided by build tools, not by the browser or Node.js natively.
`,
  "commonjs-built-in-modules": `
### 💡 Problem Breakdown
Node.js comes with a rich standard library of built-in modules for interacting with the operating system, file system, network, and more. In a CommonJS environment, you load these modules using the \`require\` function with the module's name.

### ⚙️ Solution Walkthrough
The \`fs\` (File System) and \`path\` modules are imported and used.
\`\`\`javascript
// In a Node.js file
const fs = require('fs');
const path = require('path');

// Use the modules
const filePath = path.join(__dirname, 'data.txt');
fs.writeFileSync(filePath, 'Hello, Node.js!');
\`\`\`
### 📚 Key Concepts
-   **Node.js Standard Library**: A collection of built-in modules that provide core functionality.
-   **\`require()\`**: The function used to load modules in CommonJS.
`,
  "commonjs-directory-modules": `
### 💡 Problem Breakdown
CommonJS has a specific algorithm for resolving modules. If you \`require\` a directory path, Node.js will look for a \`package.json\` file inside that directory and use its \`"main"\` field. If there is no \`package.json\`, it will look for a file named \`index.js\` inside the directory.

### ⚙️ Solution Walkthrough
A conceptual file structure and \`require\` call.
\`\`\`
/project
  - main.js
  - /my-feature
    - index.js
\`\`\`
\`\`\`javascript
// --- In file: /project/main.js ---
// This will automatically load and execute /my-feature/index.js
const myFeature = require('./my-feature');
\`\`\`
This allows you to group related module files into a directory and provide a single entry point.

### 📚 Key Concepts
-   **Module Resolution**: The algorithm used by Node.js to find a module on the file system.
`,
  "commonjs-caching": `
### 💡 Problem Breakdown
A key behavior of CommonJS is that modules are cached after the first time they are \`require\`d. When you \`require\` the same module again, the code inside that module is **not** executed a second time. Instead, the cached \`module.exports\` object from the first run is returned.

### ⚙️ Solution Walkthrough
A module with a side effect is required multiple times.
\`\`\`javascript
// --- In file: my-module.js ---
console.log('Module is executing!');
module.exports = { id: Math.random() };

// --- In file: main.js ---
const mod1 = require('./my-module.js'); // Logs "Module is executing!"
const mod2 = require('./my-module.js'); // Does NOT log again

console.log(mod1 === mod2); // true
\`\`\`
The "Module is executing!" message is only logged once, and both \`mod1\` and \`mod2\` point to the exact same object.

### 📚 Key Concepts
-   **Module Caching**: The mechanism by which CommonJS avoids re-executing modules on every \`require\` call, ensuring efficiency and singleton-like behavior for modules.
`,
  "es-modules-in-browser-paths": `
### 💡 Problem Breakdown
When using ES Modules directly in the browser (without a bundler), the paths in your \`import\` statements must be valid URLs that the browser can fetch. This has some important implications.

### ⚙️ Solution Walkthrough
-   **Bare Specifiers are NOT allowed** (without an import map).
    -   \`import 'react';\` **FAILS**.
-   **Relative Paths are REQUIRED**.
    -   \`import './utils.js';\` **WORKS**. The \`./\` is mandatory.
-   **File Extensions are REQUIRED**.
    -   \`import './utils';\` **FAILS**. You must include \`.js\`.

\`\`\`javascript
// Correct browser import
import { helper } from './utils/helper.js';
\`\`\`
### 📚 Key Concepts
-   **Browser Module Resolution**: The browser's module resolver is much simpler than Node.js's and works with URLs, not file system paths.
`,
  "export-default-expression": `
### 💡 Problem Breakdown
The \`export default\` syntax can be followed by any expression. The result of the expression will be the module's default export.

### ⚙️ Solution Walkthrough
A function is called, and its return value is the default export.
\`\`\`javascript
// --- In file: config.js ---
function createConfig() {
  return { setting: true, timestamp: Date.now() };
}

// Export the result of calling the function
export default createConfig();

// --- In file: main.js ---
import config from './config.js';
// 'config' is { setting: true, timestamp: ... }
\`\`\`
### 📚 Key Concepts
-   **\`export default\`**: Can be used with any value or expression.
`,
  "commonjs-wrapper-function": `
### 💡 Problem Breakdown
This is a conceptual problem about how CommonJS achieves its module-local scope. Before executing a CJS module, Node.js wraps the entire file's content in a function.

### ⚙️ Solution Walkthrough
The conceptual wrapper function looks like this:
\`\`\`javascript
(function(exports, require, module, __filename, __dirname) {
  // Your module code is placed here by Node.js
  const myVar = 1;
  module.exports.myFunc = () => {};
});
\`\`\`
1.  **Scope**: This function provides a new scope, so \`myVar\` is local and not global.
2.  **Special Variables**: The function is called by Node.js with five arguments: \`exports\`, \`require\`, \`module\`, \`\_\_filename\`, and \`\_\_dirname\`. This is how these "global-looking" variables are made available to your module.

### 📚 Key Concepts
-   **Module Pattern**: The wrapper function is an implementation of the module pattern.
`,
  "static-vs-dynamic-modules": `
### 💡 Problem Breakdown
This is a conceptual problem about a fundamental difference between ESM and CJS.
- **ESM is Static**: The \`import\` and \`export\` statements must be at the top level of the module. They cannot be inside \`if\` blocks or functions. This static structure allows build tools to analyze the dependency graph without running the code, which is what enables optimizations like **tree shaking**.
- **CJS is Dynamic**: The \`require()\` function is a regular function. It can be called from anywhere in the code (e.g., inside an \`if\` block). The module to be loaded can even be determined by a variable. This provides more flexibility but makes static analysis impossible.

### 📚 Key Concepts
-   **Static Analysis**: The process of analyzing code without executing it. ESM is designed for this.
`,
  "re-exporting-default-as-named": `
### 💡 Problem Breakdown
A common pattern is to create a "barrel" file (\`index.js\`) that aggregates modules. You might want to import a default export from one file and make it available as a named export from your barrel file.

### ⚙️ Solution Walkthrough
The \`export { default as ... }\` syntax is used.
\`\`\`javascript
// --- In file: MyComponent.js ---
export default class { /* ... */ }

// --- In file: index.js ---
// Import the default from MyComponent.js and re-export it
// with the name 'MyComponent'.
export { default as MyComponent } from './MyComponent.js';

// --- In file: main.js ---
// Now you can import it as a named export from the barrel.
import { MyComponent } from './index.js';
\`\`\`
### 📚 Key Concepts
-   **Re-exporting**: A syntax for creating a unified public API for a set of modules.
`,
  "import-meta-conceptual": `
### 💡 Problem Breakdown
\`import.meta\` is an object available within an ES Module that provides metadata about the module. The most common property is \`import.meta.url\`, which gives the full URL of the module file.

### ⚙️ Solution Walkthrough
\`import.meta.url\` can be used to resolve paths to assets (like images or worker scripts) relative to the location of the JavaScript module itself.
\`\`\`javascript
// --- In file: my-component.js ---

// This creates a URL for 'image.png' that is in the same directory
// as 'my-component.js'.
const imageUrl = new URL('./image.png', import.meta.url);

const img = document.createElement('img');
img.src = imageUrl.href;
\`\`\`
This is more robust than using relative paths like \`'./image.png'\`, which can be interpreted differently depending on the context.

### 📚 Key Concepts
-   **\`import.meta\`**: A meta-property that exposes context-specific metadata to a JavaScript module.
`,
  "package-json-main-field": `
### 💡 Problem Breakdown
The \`main\` field in a project's \`package.json\` file is a core part of the CommonJS module resolution algorithm in Node.js. It specifies the primary entry point to the package.

### ⚙️ Solution Walkthrough
When you \`require('my-package')\`, Node.js finds \`my-package\` in the \`node_modules\` directory and reads its \`package.json\`.
\`\`\`json
// --- In my-package/package.json ---
{
  "name": "my-package",
  "version": "1.0.0",
  "main": "lib/index.js"
}
\`\`\`
Node.js will then load the file specified in the \`main\` field, in this case, \`lib/index.js\`. This allows package authors to organize their source code without exposing the internal structure to consumers.

### 📚 Key Concepts
-   **\`package.json\`**: The manifest file for a Node.js project or package.
-   **Module Entry Point**: The file that is loaded when a package is required.
`,
};
