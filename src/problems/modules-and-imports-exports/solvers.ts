export const solvers: Record<string, Function> = {
  "es-modules-named-export": () =>
    `// In file: utils.js\nexport const greet = (name) => \`Hello, \${name}\`;`,
  "es-modules-multiple-named-exports": () =>
    `// In file: math.js\nexport const PI = 3.14;\nexport const add = (a, b) => a + b;`,
  "es-modules-default-export": () =>
    `// In file: MyClass.js\nexport default class MyClass { /* ... */ }`,
  "es-modules-import-named": () =>
    `// In file: main.js\nimport { add, PI } from './math.js';\nconsole.log(\`PI is \${PI}\`);`,
  "es-modules-import-default": () =>
    `// In file: main.js\n// 'MyComponent' can be any name you choose.\nimport MyComponent from './MyClass.js';\nconst instance = new MyComponent();`,
  "es-modules-import-rename": () =>
    `// In file: main.js\nimport { add as sum } from './math.js';\nconsole.log(sum(2, 3)); // 5`,
  "es-modules-namespace-import": () =>
    `// In file: main.js\nimport * as mathUtils from './math.js';\nconsole.log(mathUtils.PI); // 3.14\nconsole.log(mathUtils.add(2, 3)); // 5`,
  "es-modules-mixed-exports": () =>
    `// In file: main.js\n// Import the default and named exports together.\nimport MyClass, { helperFunction } from './MyClass.js';`,
  "es-modules-dynamic-import": () =>
    `(Conceptual) Use \`import()\` inside an async function to load a module on demand:\nasync function loadModule() {\n  const { someExport } = await import('./module.js');\n  someExport();\n}`,
  "esm-vs-commonjs": () =>
    `ESM (\`import\`): Static (imports resolved at parse time), asynchronous.\nCommonJS (\`require\`): Dynamic (can be called anywhere), synchronous. ESM is the modern standard.`,
  "commonjs-require": () =>
    `// In a CommonJS file (e.g., Node.js)\nconst path = require('path');\nconsole.log(path.join('/foo', 'bar'));`,
  "commonjs-module-exports": () =>
    `// In file: my-module.js\nclass MyClass {}\nmodule.exports = MyClass;`,
  "commonjs-exports-shorthand": () =>
    `// In file: utils.js\nexports.add = (a, b) => a + b;\nexports.subtract = (a, b) => a - b;`,
  "commonjs-exports-vs-module-exports": () =>
    `(Conceptual) \`exports\` is just a reference to \`module.exports\`. You can add properties to \`exports\`, but if you reassign it (\`exports = ...\`), you break the link. Always use \`module.exports\` for reassignments.`,
  "es-modules-re-export": () =>
    `// In file: index.js (a barrel file)\n// This makes 'add' and 'subtract' available to import from 'index.js'\nexport { add, subtract } from './math.js';`,
  "es-modules-re-export-default": () =>
    `// In file: MyComponent/index.js\nexport { default } from './MyComponent.js';`,
  "es-modules-re-export-all": () =>
    `// In file: all-utils.js\n// Re-exports all named exports from both modules.\nexport * from './math.js';\nexport * from './string.js';`,
  "es-modules-side-effect-import": () =>
    `// In file: main.js\n// This runs the code in 'polyfill.js' but doesn't import any variables.\nimport './polyfill.js';`,
  "module-scope-conceptual": () =>
    `(Conceptual) A variable \`const myVar = 1;\` in \`moduleA.js\` is local to that module. It does not create a global variable. Another module cannot access \`myVar\` unless it is exported from \`moduleA.js\`.`,
  "tree-shaking-conceptual": () =>
    `(Conceptual) A bundler analyzes static \`import\`/\`export\` statements. If you import \`{ add }\` from a large math library but not \`subtract\`, the bundler can safely remove the unused \`subtract\` function from the final production bundle.`,
  "circular-dependencies-conceptual": () =>
    `(Conceptual) If A imports B and B imports A, when A is executed, its import of B is evaluated. B then starts executing and sees its import of A. Since A is still being initialized, the import of A in B will be an object with its exports, but their values will be \`undefined\` at that point.`,
  "top-level-await-module": () =>
    `(Conceptual) In an ES module: \`const config = await fetch('/api/config').then(res => res.json()); export default config;\`. Other modules that import this one will pause and wait for the fetch to complete.`,
  "module-resolution-conceptual": () =>
    `(Conceptual) Bare specifier (\`import 'react'\`): The resolver looks in \`node_modules\`. Relative path (\`import './utils.js'\`): The resolver looks for the file relative to the current module's location.`,
  "package-json-type-module": () =>
    `(Conceptual) Adding \`"type": "module"\` to \`package.json\` tells Node.js that all \`.js\` files in that package should be treated as ES Modules. Without it, they are treated as CommonJS by default.`,
  "node-cjs-in-esm": () =>
    `// In an ESM file (e.g., index.mjs)\nimport path from 'path'; // Node can import some built-in CJS modules directly.\nimport myCjsModule from './my-module.js'; // Can import the default export of a CJS module.`,
  "node-esm-in-cjs": () =>
    `// In a CJS file (e.g., index.js)\nasync function loadEsm() {\n  const { myExport } = await import('./my-module.mjs');\n  myExport();\n}\nloadEsm();`,
  "this-value-in-modules": () =>
    `(Conceptual) At the top-level of a classic script, \`this\` refers to \`window\`. At the top-level of an ES Module (\`<script type="module">\`), \`this\` is \`undefined\`.`,
  "live-bindings-esm": () =>
    `(Conceptual) moduleA.js: \`export let count = 1; export function inc() { count++; }\`. main.js: \`import { count, inc } from './moduleA.js'; console.log(count); inc(); console.log(count);\`. The log will show 1, then 2. The imported \`count\` reflects the change.`,
  "cached-bindings-cjs": () =>
    `(Conceptual) moduleA.js: \`let count = 1; module.exports = { count };\`. main.js: \`const { count } = require('./moduleA.js');\`. Even if moduleA later changes its internal count variable, the imported \`count\` in main.js will remain 1 because it's a copy of the primitive value.`,
  "import-attributes-conceptual": () =>
    `(Conceptual) \`import config from './config.json' with { type: 'json' };\`. This ensures the file is treated as JSON, preventing a security issue if a server misconfigured the file's MIME type to be executable JavaScript.`,
  "bundlers-and-modules-conceptual": () =>
    `(Conceptual) A bundler like Vite takes an entry file, follows all \`import\` statements to build a dependency graph, and combines all the necessary modules into one or more optimized JavaScript files that a browser can execute efficiently.`,
  "conditional-exports-conceptual": () =>
    `(Conceptual) In \`package.json\`, the "exports" field can map an import path to different files based on the environment: \`"exports": { "import": "./index.mjs", "require": "./index.cjs" }\`.`,
  "dynamic-import-for-lazy-loading": () =>
    `(Conceptual) In a router: \`const MyComponent = () => import('./MyComponent.js');\`. The code for MyComponent.js is only downloaded from the server when the user navigates to the route that renders it.`,
  "module-script-tag": () =>
    `(Conceptual) \`<script type="module" src="app.js">\`. This tells the browser the script uses ES Modules. It is automatically deferred, runs in strict mode, and variables declared at the top level do not become properties of the global \`window\` object.`,
  "import-map-conceptual": () =>
    `(Conceptual) In HTML: \`<script type="importmap">{"imports": {"react": "https://cdn.skypack.dev/react"}}</script>\`. In your module script, you can now write \`import React from 'react';\`, and the browser will know to fetch it from the CDN URL.`,
  "re-exporting-with-rename": () =>
    `// In file: index.js\n// Imports 'add' from math.js and re-exports it with the name 'sum'\nexport { add as sum } from './math.js';`,
  "amd-modules-conceptual": () =>
    `(Conceptual) Asynchronous Module Definition was a pre-ESM standard for browsers. Syntax: \`define(['jquery'], function($) { /* module code */ return myModule; });\`. It managed async loading of dependencies.`,
  "umd-modules-conceptual": () =>
    `(Conceptual) Universal Module Definition was a pattern that wrapped a module in a way that it could work in AMD, CommonJS, or as a global variable, making it compatible with multiple environments.`,
  "json-modules-conceptual": () =>
    `(Conceptual) A modern feature allowing direct import of JSON files. \`import data from './data.json' with { type: 'json' };\`. This is simpler and safer than fetching and parsing manually.`,
  "css-modules-conceptual": () =>
    `(Conceptual) With a bundler, you can do \`import styles from './styles.css';\`. The bundler processes the CSS and \`styles\` becomes an object like \`{ myClass: 'styles_myClass__aB123' }\`. This locally scopes class names to prevent conflicts.`,
  "commonjs-built-in-modules": () =>
    `// In a Node.js file\nconst fs = require('fs');\nconst path = require('path');\nfs.writeFileSync(path.join(__dirname, 'file.txt'), 'hello');`,
  "commonjs-directory-modules": () =>
    `(Conceptual) If you have a directory \`./my-feature\` containing an \`index.js\` file, \`require('./my-feature')\` will automatically load and execute \`./my-feature/index.js\`.`,
  "commonjs-caching": () =>
    `(Conceptual) If \`moduleA.js\` is required in two different files, the code inside \`moduleA.js\` will only execute once. The second time it is required, the cached \`module.exports\` object from the first execution is returned immediately.`,
  "es-modules-in-browser-paths": () =>
    `(Conceptual) In a browser, \`import { x } from 'lodash'\` will fail. You must provide a valid URL path: \`import { x } from './utils.js'\` or \`import { x } from '/libs/lodash.js'\`.`,
  "export-default-expression": () =>
    `// In file: config.js\nfunction createConfig() { return { setting: true }; }\nexport default createConfig();`,
  "commonjs-wrapper-function": () =>
    `(Conceptual) Node wraps a CJS module like this: \`(function(exports, require, module, __filename, __dirname) { /* your code here */ });\`. This provides the module-local scope and these special variables.`,
  "static-vs-dynamic-modules": () =>
    `(Conceptual) ESM is static: you can't have an \`import\` inside an \`if\` block. This allows bundlers to "tree-shake" unused code. CJS is dynamic: \`if (condition) { require('module') }\` is valid, offering flexibility but making static analysis harder.`,
  "re-exporting-default-as-named": () =>
    `// In file: index.js\n// This imports the default export from my-func.js and re-exports it\n// as a named export called 'myFunc'.\nexport { default as myFunc } from './my-func.js';`,
  "import-meta-conceptual": () =>
    `(Conceptual) Inside an ES Module, \`import.meta\` is an object with metadata. \`import.meta.url\` gives the full URL of the current module file, which is useful for resolving paths to assets relative to the module.`,
  "package-json-main-field": () =>
    `(Conceptual) In \`package.json\`: \`"main": "./lib/index.js"\`. When another CJS module does \`require('my-package')\`, Node.js will load the file specified in the \`main\` field.`,
};
