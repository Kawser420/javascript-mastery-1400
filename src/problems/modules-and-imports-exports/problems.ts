import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "es-modules-named-export",
    title: "ESM: Named Export",
    description:
      "Show the syntax for exporting a single, named function from a module file.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Named Export",
  },
  {
    id: "es-modules-multiple-named-exports",
    title: "ESM: Multiple Named Exports",
    description:
      "Show how to export multiple variables or functions from a single module.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Multiple Exports",
  },
  {
    id: "es-modules-default-export",
    title: "ESM: Default Export",
    description:
      "Show the syntax for a `default export`, which is used for the primary value a module provides. A module can only have one default export.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Default Export",
  },
  {
    id: "es-modules-import-named",
    title: "ESM: Importing Named Exports",
    description:
      "Show how to import specific, named exports from a module using curly braces `{}`.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Named Import",
  },
  {
    id: "es-modules-import-default",
    title: "ESM: Importing a Default Export",
    description:
      "Show how to import a `default export`. You can assign any name to the import.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Default Import",
  },
  {
    id: "es-modules-import-rename",
    title: "ESM: Renaming Imports with `as`",
    description:
      "Show how to rename a named import to avoid naming conflicts using the `as` keyword.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Renamed Import",
  },
  {
    id: "es-modules-namespace-import",
    title: "ESM: Namespace Import",
    description:
      "Show how to import all named exports from a module into a single object using `import * as ...`.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Namespace Import",
  },
  {
    id: "es-modules-mixed-exports",
    title: "ESM: Mixed Exports",
    description:
      "Show how a single module can have both a default export and multiple named exports, and how to import them.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Mixed Imports",
  },
  {
    id: "es-modules-dynamic-import",
    title: "ESM: Dynamic `import()`",
    description:
      "Explain how to use the dynamic `import()` function to load a module on demand, which returns a promise.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Dynamic Import",
  },
  {
    id: "esm-vs-commonjs",
    title: "ESM vs. CommonJS (Conceptual)",
    description:
      "Explain the key differences in syntax and behavior between ES Modules (`import`/`export`) and Node.js's traditional CommonJS (`require`/`module.exports`).",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Compare ESM vs CJS",
  },
  {
    id: "commonjs-require",
    title: "CJS: `require`",
    description:
      "Show the basic syntax for importing a module in a CommonJS environment using the `require` function.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show `require`",
  },
  {
    id: "commonjs-module-exports",
    title: "CJS: `module.exports`",
    description:
      "Show how to export a single value (like an object or a class) from a CommonJS module using `module.exports`.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show `module.exports`",
  },
  {
    id: "commonjs-exports-shorthand",
    title: "CJS: `exports` Shorthand",
    description:
      "Show how to export multiple values by attaching them as properties to the `exports` object.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show `exports` shorthand",
  },
  {
    id: "commonjs-exports-vs-module-exports",
    title: "CJS: `exports` vs `module.exports`",
    description:
      "Explain the relationship between the `exports` shorthand and `module.exports` and the common pitfall of reassigning `exports`.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain the Difference",
  },
  {
    id: "es-modules-re-export",
    title: "ESM: Re-exporting",
    description:
      "Show how to use the `export ... from ...` syntax to re-export named exports from another module.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Re-export",
  },
  {
    id: "es-modules-re-export-default",
    title: "ESM: Re-exporting a Default",
    description:
      "Show the syntax for importing a default export and then re-exporting it as either a named or default export.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Default Re-export",
  },
  {
    id: "es-modules-re-export-all",
    title: "ESM: Re-exporting All",
    description:
      "Show how to re-export all named exports from another module using the `export * from ...` syntax.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show `export *`",
  },
  {
    id: "es-modules-side-effect-import",
    title: "ESM: Side-effect Import",
    description:
      "Show the syntax for importing a module only for its side effects (e.g., a polyfill), without importing any of its exports.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Side-effect Import",
  },
  {
    id: "module-scope-conceptual",
    title: "Module Scope (Conceptual)",
    description:
      "Explain that each module has its own top-level scope, and variables declared in one module are not globally accessible unless explicitly exported.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Module Scope",
  },
  {
    id: "tree-shaking-conceptual",
    title: "Tree Shaking (Conceptual)",
    description:
      "Explain the concept of 'tree shaking' as a dead-code elimination process used by modern bundlers with ES Modules to reduce bundle size.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Tree Shaking",
  },
  {
    id: "circular-dependencies-conceptual",
    title: "Circular Dependencies (Conceptual)",
    description:
      "Explain what a circular dependency is (Module A imports B, and B imports A) and how ESM handles it (one of the imports will be `undefined` at execution time).",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Circular Deps",
  },
  {
    id: "top-level-await-module",
    title: "Top-Level `await` in Modules",
    description:
      "Explain how top-level `await` can be used in an ES module to perform an asynchronous initialization before the module's exports are made available.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Top-Level `await`",
  },
  {
    id: "module-resolution-conceptual",
    title: "Module Resolution (Conceptual)",
    description:
      "Explain the difference between a bare module specifier (e.g., 'react') and a relative path specifier (e.g., './utils.js') and how they are resolved.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Resolution",
  },
  {
    id: "package-json-type-module",
    title: '`package.json`: `"type": "module"`',
    description:
      'Explain how setting `"type": "module"` in a `package.json` file tells Node.js to treat `.js` files as ES Modules by default.',
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain `type: module`",
  },
  {
    id: "node-cjs-in-esm",
    title: "Node: Using CommonJS in ESM",
    description:
      "Show how you can `import` a CommonJS module from an ES Module in Node.js.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show CJS in ESM",
  },
  {
    id: "node-esm-in-cjs",
    title: "Node: Using ESM in CommonJS",
    description:
      "Explain how you must use dynamic `import()` to load an ES Module from a CommonJS module in Node.js.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show ESM in CJS",
  },
  {
    id: "this-value-in-modules",
    title: "`this` Value in Modules",
    description:
      "Explain that the value of `this` at the top level of an ES Module is `undefined`, unlike in traditional scripts where it would be the global object.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain `this` in ESM",
  },
  {
    id: "live-bindings-esm",
    title: "ESM Live Bindings",
    description:
      "Demonstrate that imports in ES Modules are live, read-only views of the exported values. If the exporting module changes a value, the change is reflected in the importing module.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Live Bindings",
  },
  {
    id: "cached-bindings-cjs",
    title: "CommonJS Cached Bindings",
    description:
      "Demonstrate that `require()` in CommonJS returns a cached copy of the `module.exports` object. Changes to the original object are reflected, but reassigning `module.exports` after the first require has no effect on other modules.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Cached Bindings",
  },
  {
    id: "import-attributes-conceptual",
    title: "Import Attributes (Conceptual)",
    description:
      "Explain the `with { type: 'json' }` syntax for static imports to ensure a module is being imported with the correct format.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Attributes",
  },
  {
    id: "bundlers-and-modules-conceptual",
    title: "Bundlers and Modules (Conceptual)",
    description:
      "Explain the role of a module bundler (like Vite or Webpack) in processing `import`/`export` statements to create a single, optimized file for the browser.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Bundlers",
  },
  {
    id: "conditional-exports-conceptual",
    title: "Conditional Exports (Conceptual)",
    description:
      'Explain how the `"exports"` field in `package.json` can be used to provide different module versions for different environments (e.g., CommonJS vs ESM, Node vs Browser).',
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Conditional Exports",
  },
  {
    id: "dynamic-import-for-lazy-loading",
    title: "Dynamic Import for Lazy Loading",
    description:
      "Show a conceptual example of using dynamic `import()` in a web framework to lazy-load a component only when it's needed.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Lazy Loading",
  },
  {
    id: "module-script-tag",
    title: 'The `<script type="module">` Tag',
    description:
      'Explain the key characteristics of using `<script type="module">` in HTML, such as enabling `import`/`export`, running in strict mode, and preventing global scope pollution.',
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Module Script",
  },
  {
    id: "import-map-conceptual",
    title: "Import Maps (Conceptual)",
    description:
      "Explain how an import map in an HTML file allows you to use bare module specifiers (e.g., `import React from 'react'`) in the browser without a build step.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Import Maps",
  },
  {
    id: "re-exporting-with-rename",
    title: "Re-exporting with a Rename",
    description:
      "Show how to re-export a named export from another module under a different name using the `as` keyword.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Renamed Re-export",
  },
  {
    id: "amd-modules-conceptual",
    title: "AMD Modules (Conceptual)",
    description:
      "Briefly explain the Asynchronous Module Definition (AMD) format (`define(['dep'], function...){}`) as a historical module system for browsers.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain AMD",
  },
  {
    id: "umd-modules-conceptual",
    title: "UMD Modules (Conceptual)",
    description:
      "Briefly explain the Universal Module Definition (UMD) pattern, a historical pattern that allowed a module to work in AMD, CommonJS, and global variable environments.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain UMD",
  },
  {
    id: "json-modules-conceptual",
    title: "JSON Modules (Conceptual)",
    description:
      "Explain the feature of directly importing JSON files as modules using import attributes.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain JSON Modules",
  },
  {
    id: "css-modules-conceptual",
    title: "CSS Modules (Conceptual)",
    description:
      "Explain how bundlers allow you to import CSS files into JavaScript, providing features like locally scoped class names to prevent style conflicts.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain CSS Modules",
  },
  {
    id: "commonjs-built-in-modules",
    title: "CJS: Built-in Modules",
    description:
      "Show how to import built-in Node.js modules like `fs` (File System) and `path` using `require`.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Built-in Require",
  },
  {
    id: "commonjs-directory-modules",
    title: "CJS: Directory as Module",
    description:
      "Explain how `require('./my-dir')` can resolve to `my-dir/index.js` in a CommonJS environment.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Directory Modules",
  },
  {
    id: "commonjs-caching",
    title: "CJS: Module Caching",
    description:
      "Demonstrate that CommonJS modules are cached after the first time they are required.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Caching",
  },
  {
    id: "es-modules-in-browser-paths",
    title: "ESM in Browser: Paths",
    description:
      "Explain that in a browser environment (without a bundler), module paths must be valid URLs (relative or absolute), and bare specifiers are not allowed without an import map.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain Browser Paths",
  },
  {
    id: "export-default-expression",
    title: "ESM: `export default` with Expression",
    description:
      "Show how `export default` can be used with any expression, such as the result of a function call.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Default Expression",
  },
  {
    id: "commonjs-wrapper-function",
    title: "CJS: Wrapper Function (Conceptual)",
    description:
      "Explain that Node.js wraps each CommonJS module in a function, which provides the module-local scope and objects like `require`, `exports`, and `module`.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain CJS Wrapper",
  },
  {
    id: "static-vs-dynamic-modules",
    title: "Static vs. Dynamic Nature (Conceptual)",
    description:
      "Summarize the key difference: ESM is static (analyzed before runtime), enabling optimizations. CJS is dynamic (loaded at runtime), offering more flexibility but fewer optimizations.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Compare Static vs Dynamic",
  },
  {
    id: "re-exporting-default-as-named",
    title: "Re-exporting Default as Named",
    description:
      "Show how to import a default export and immediately re-export it as a named export.",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Show Re-export Pattern",
  },
  {
    id: "import-meta-conceptual",
    title: "`import.meta` (Conceptual)",
    description:
      "Explain the `import.meta` object, which provides context-specific metadata about the module, such as its URL (`import.meta.url`).",
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain `import.meta`",
  },
  {
    id: "package-json-main-field",
    title: "`package.json`: `main` field",
    description:
      'Explain how the `"main"` field in `package.json` specifies the entry point for a package when it\'s imported in a CommonJS environment.',
    category: "Modules & Imports/Exports",
    inputs: [],
    buttonText: "Explain `main` field",
  },
];
