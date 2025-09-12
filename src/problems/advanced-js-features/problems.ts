import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "generator-function-basic",
    title: "Generator Function: Basic",
    description:
      "Create a simple generator function that `yield`s a sequence of numbers.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Run Generator",
  },
  {
    id: "generator-iterator-protocol",
    title: "Generator as Iterator",
    description:
      "Use the iterator returned by a generator function with the `.next()` method to get the yielded values and the `done` status.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Use Iterator",
  },
  {
    id: "generator-yield-delegation",
    title: "Generator `yield*`",
    description:
      "Use `yield*` to delegate the iteration control from one generator to another iterable (like an array).",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test `yield*`",
  },
  {
    id: "generator-passing-values",
    title: "Passing Values to Generators",
    description:
      "Demonstrate how to pass a value back into a generator via the `.next(value)` method to create two-way communication.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Run Two-Way Generator",
  },
  {
    id: "generator-return",
    title: "Generator with `return`",
    description:
      "Show how a `return` statement in a generator function sets the `value` of the final object where `done` is true.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Run Generator to End",
  },
  {
    id: "proxy-get-trap",
    title: "Proxy `get` Trap",
    description:
      "Create an ES6 Proxy with a `get` trap to intercept and customize property access on an object, for example, to return a default value for non-existent properties.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test `get` Trap",
  },
  {
    id: "proxy-set-trap",
    title: "Proxy `set` Trap",
    description:
      "Create a Proxy with a `set` trap to validate values before they are assigned to an object's property.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test `set` Trap",
  },
  {
    id: "proxy-apply-trap",
    title: "Proxy `apply` Trap",
    description:
      "Use a Proxy with an `apply` trap to intercept a function call.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test `apply` Trap",
  },
  {
    id: "proxy-construct-trap",
    title: "Proxy `construct` Trap",
    description:
      "Use a Proxy with a `construct` trap to intercept the `new` operator on a class.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test `construct` Trap",
  },
  {
    id: "proxy-revocable",
    title: "Revocable Proxy",
    description:
      "Create a revocable Proxy using `Proxy.revocable()`, which can be turned off to deny access to the target object.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Create and Revoke",
  },
  {
    id: "reflect-api-get-set",
    title: "`Reflect.get()` and `Reflect.set()`",
    description:
      "Use `Reflect.get()` and `Reflect.set()` to access and modify object properties, often used within Proxy traps.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Use Reflect",
  },
  {
    id: "reflect-apply",
    title: "`Reflect.apply()`",
    description:
      "Use `Reflect.apply()` to call a function with a specified `this` context and an array of arguments.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Apply Function",
  },
  {
    id: "reflect-construct",
    title: "`Reflect.construct()`",
    description:
      "Use `Reflect.construct()` to invoke a constructor, similar to using the `new` operator.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Construct Instance",
  },
  {
    id: "reflect-has",
    title: "`Reflect.has()`",
    description:
      "Use `Reflect.has()` to check if a property exists on an object, equivalent to the `in` operator.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Check Property",
  },
  {
    id: "symbol-unique-keys",
    title: "Symbols for Unique Keys",
    description:
      "Create a `Symbol` and use it as a unique object key to avoid property name collisions.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Use Symbol Key",
  },
  {
    id: "symbol-for-and-keyfor",
    title: "`Symbol.for()` and `Symbol.keyFor()`",
    description:
      "Use `Symbol.for()` to create a symbol in a global registry and `Symbol.keyFor()` to retrieve its key.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test Global Symbols",
  },
  {
    id: "well-known-symbol-iterator",
    title: "Well-Known Symbol: `Symbol.iterator`",
    description:
      "Make a custom object iterable so it can be used in a `for...of` loop by implementing the `[Symbol.iterator]` method.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Make Iterable",
  },
  {
    id: "well-known-symbol-tostringtag",
    title: "Well-Known Symbol: `Symbol.toStringTag`",
    description:
      "Customize the string returned by `Object.prototype.toString.call()` for an instance of a class by setting `Symbol.toStringTag`.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Get Custom String Tag",
  },
  {
    id: "sharedarraybuffer-conceptual",
    title: "`SharedArrayBuffer` (Conceptual)",
    description:
      "Explain the concept of `SharedArrayBuffer` for sharing memory between the main thread and Web Workers, enabling high-performance parallel processing.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain SAB",
  },
  {
    id: "atomics-conceptual",
    title: "`Atomics` (Conceptual)",
    description:
      "Explain the purpose of the `Atomics` object for performing atomic operations on `SharedArrayBuffer` locations to prevent race conditions.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Atomics",
  },
  {
    id: "intl-datetimeformat",
    title: "`Intl.DateTimeFormat`",
    description:
      "Use the `Intl.DateTimeFormat` object to format a date into a locale-sensitive string.",
    category: "Advanced JS Features",
    inputs: [
      {
        id: "locale",
        label: "Locale (e.g., en-US, de-DE)",
        type: "text",
        defaultValue: "de-DE",
      },
    ],
    buttonText: "Format Date",
  },
  {
    id: "intl-numberformat",
    title: "`Intl.NumberFormat`",
    description:
      "Use the `Intl.NumberFormat` object to format a number into a locale-sensitive string, for example, as currency.",
    category: "Advanced JS Features",
    inputs: [
      {
        id: "locale",
        label: "Locale (e.g., en-US, ja-JP)",
        type: "text",
        defaultValue: "ja-JP",
      },
      {
        id: "currency",
        label: "Currency Code (e.g., USD, JPY)",
        type: "text",
        defaultValue: "JPY",
      },
    ],
    buttonText: "Format as Currency",
  },
  {
    id: "intl-collator",
    title: "`Intl.Collator`",
    description:
      "Use `Intl.Collator` to sort an array of strings in a locale-sensitive manner.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Sort Strings",
  },
  {
    id: "intl-pluralrules",
    title: "`Intl.PluralRules`",
    description:
      "Use `Intl.PluralRules` to determine the correct plural category ('one', 'other', 'few', 'many') for a number in a given language.",
    category: "Advanced JS Features",
    inputs: [{ id: "num", label: "Number", type: "number", defaultValue: 2 }],
    buttonText: "Get Plural Category",
  },
  {
    id: "intl-relativetimeformat",
    title: "`Intl.RelativeTimeFormat`",
    description:
      "Use `Intl.RelativeTimeFormat` to format a time difference in a human-readable, locale-sensitive way (e.g., 'in 2 days').",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Format Relative Time",
  },
  {
    id: "weakref-conceptual",
    title: "`WeakRef` (Conceptual)",
    description:
      "Explain the concept of `WeakRef` for creating a weak reference to an object, which does not prevent the object from being garbage collected.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain WeakRef",
  },
  {
    id: "finalizationregistry-conceptual",
    title: "`FinalizationRegistry` (Conceptual)",
    description:
      "Explain the `FinalizationRegistry` object, which lets you request a callback to be called after a registered object has been garbage collected.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Registry",
  },
  {
    id: "private-in-operator-adv",
    title: "Private Field `in` Operator",
    description:
      "Use the `in` operator with a private field (`#field in obj`) to check if an object has that private field, which is more robust than `instanceof` for brand checking.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Check for Private Field",
  },
  {
    id: "array-groupby-conceptual",
    title: "`Array.prototype.groupBy` (Conceptual)",
    description:
      "Explain the new `Array.prototype.groupBy` method for grouping the elements of an array according to the string value returned by a callback function.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain groupBy",
  },
  {
    id: "regexp-match-indices",
    title: "RegExp Match Indices (`d` flag)",
    description:
      "Use the `d` flag on a regular expression to get the start and end indices of matched capture groups.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Get Match Indices",
  },
  {
    id: "import-assertions-conceptual",
    title: "Import Attributes (Conceptual)",
    description:
      "Explain the `with { type: 'json' }` syntax for static imports to ensure a module is being imported with the correct format.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Attributes",
  },
  {
    id: "error-cause-property",
    title: "Error `cause` Property",
    description:
      "Demonstrate creating an `Error` with a `cause` property to chain errors, providing better debugging context.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Throw Chained Error",
  },
  {
    id: "shadowrealms-conceptual",
    title: "ShadowRealm API (Conceptual)",
    description:
      "Explain the concept of the ShadowRealm API for creating a new, isolated global environment within the same agent, useful for running code securely.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain ShadowRealm",
  },
  {
    id: "temporal-api-conceptual",
    title: "Temporal API (Conceptual)",
    description:
      "Explain the purpose of the upcoming `Temporal` global object as a modern, more robust replacement for the `Date` object.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Temporal",
  },
  {
    id: "decorator-metadata-conceptual",
    title: "Decorators (Conceptual)",
    description:
      "Explain the concept of decorators (`@myDecorator`) as functions that modify class declarations, methods, or properties at design time.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Decorators",
  },
  {
    id: "proxy-has-trap",
    title: "Proxy `has` Trap",
    description:
      "Use a Proxy with a `has` trap to intercept the `in` operator.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test `has` Trap",
  },
  {
    id: "proxy-delete-trap",
    title: "Proxy `deleteProperty` Trap",
    description:
      "Use a Proxy with a `deleteProperty` trap to intercept the `delete` operator.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test `delete` Trap",
  },
  {
    id: "proxy-ownkeys-trap",
    title: "Proxy `ownKeys` Trap",
    description:
      "Use a Proxy with an `ownKeys` trap to intercept operations like `Object.keys()` and `for...in` loops.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test `ownKeys` Trap",
  },
  {
    id: "reflect-delete-property",
    title: "`Reflect.deleteProperty()`",
    description:
      "Use `Reflect.deleteProperty()` to delete a property from an object, which is the functional equivalent of the `delete` operator.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Delete with Reflect",
  },
  {
    id: "reflect-own-keys",
    title: "`Reflect.ownKeys()`",
    description:
      "Use `Reflect.ownKeys()` to get an array of an object's own property keys, including both string and symbol keys.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Get Own Keys",
  },
  {
    id: "generator-as-state-machine",
    title: "Generator as State Machine",
    description:
      "Implement a simple state machine (e.g., a traffic light) using a generator function.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Run State Machine",
  },
  {
    id: "async-generator-basic",
    title: "Async Generator: Basic",
    description:
      "Create a simple async generator that yields a sequence of values with a delay between each.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Run Async Generator",
  },
  {
    id: "for-await-of",
    title: "`for-await...of` Loop",
    description:
      "Use the `for-await...of` loop to consume the values produced by an async generator or any other async iterable.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Consume with Loop",
  },
  {
    id: "well-known-symbol-toprimitive",
    title: "Well-Known Symbol: `Symbol.toPrimitive`",
    description:
      "Implement the `[Symbol.toPrimitive]` method on an object to control how it is converted to a primitive value.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test Primitive Conversion",
  },
  {
    id: "well-known-symbol-hasinstance",
    title: "Well-Known Symbol: `Symbol.hasInstance`",
    description:
      "Customize the behavior of the `instanceof` operator for a class by implementing the static `[Symbol.hasInstance]` method.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test Custom `instanceof`",
  },
  {
    id: "well-known-symbol-species",
    title: "Well-Known Symbol: `Symbol.species`",
    description:
      "Use `Symbol.species` in a custom Array subclass to control what constructor is used by methods like `map`.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test Species",
  },
  {
    id: "intl-listformat",
    title: "`Intl.ListFormat`",
    description:
      "Use the `Intl.ListFormat` object to format an array of strings into a locale-sensitive list (e.g., 'A, B, and C').",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Format List",
  },
  {
    id: "intl-displaynames",
    title: "`Intl.DisplayNames`",
    description:
      "Use the `Intl.DisplayNames` object to get the localized name for a language, region, or currency.",
    category: "Advanced JS Features",
    inputs: [
      {
        id: "code",
        label: "Region Code (e.g., US, JP, DE)",
        type: "text",
        defaultValue: "DE",
      },
    ],
    buttonText: "Get Region Name",
  },
  {
    id: "intl-segmenter-conceptual",
    title: "`Intl.Segmenter` (Conceptual)",
    description:
      "Explain how `Intl.Segmenter` can be used for locale-sensitive text segmentation, correctly splitting a string into words, sentences, or graphemes.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Segmenter",
  },
  {
    id: "jit-compilation-conceptual",
    title: "JIT Compilation (Conceptual)",
    description:
      "Explain the concept of Just-In-Time (JIT) compilation in modern JavaScript engines like V8, which compiles code to machine code at runtime for performance.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain JIT",
  },
  {
    id: "garbage-collection-conceptual",
    title: "Garbage Collection (Conceptual)",
    description:
      "Explain the high-level concept of garbage collection in JavaScript, focusing on the mark-and-sweep algorithm for automatic memory management.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain GC",
  },
  {
    id: "tail-call-optimization-conceptual-adv",
    title: "Tail Call Optimization (Conceptual)",
    description:
      "Explain what Tail Call Optimization (TCO) is and show an example of a recursive function that is in a tail-call position, allowing for stack-safe recursion.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain TCO",
  },
  {
    id: "atomics-wait-notify-conceptual",
    title: "`Atomics.wait` & `Atomics.notify` (Conceptual)",
    description:
      "Explain how `Atomics.wait` and `Atomics.notify` can be used to create a low-level locking mechanism between Web Workers.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Wait/Notify",
  },
  {
    id: "json-modules-conceptual",
    title: "JSON Modules (Conceptual)",
    description:
      "Explain the new feature of directly importing JSON files as modules using import attributes.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain JSON Modules",
  },
  {
    id: "array-findlast-es2023",
    title: "`Array.findLast()`",
    description:
      "Use the `.findLast()` method to find the last element in an array that satisfies a testing function.",
    category: "Advanced JS Features",
    inputs: [
      {
        id: "arr",
        label: "Array",
        type: "text",
        defaultValue: "10,20,30,40,50",
      },
    ],
    buttonText: "Find Last > 25",
  },
  {
    id: "array-immutable-methods-es2023",
    title: "Immutable Array Methods",
    description:
      "Demonstrate the new immutable array methods `.toReversed()`, `.toSorted()`, and `.toSpliced()` which return a new array instead of mutating the original.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test Immutable Methods",
  },
  {
    id: "hashbang-grammar-conceptual",
    title: "Hashbang Grammar (Conceptual)",
    description:
      "Explain the Hashbang / Shebang (`#!`) syntax, which allows JavaScript files to be run directly as executable scripts in shell environments like Bash.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Hashbang",
  },
  {
    id: "promise-withresolvables-conceptual-adv",
    title: "`Promise.withResolvables()` (Conceptual)",
    description:
      "Explain the `Promise.withResolvables()` static method that returns an object with a promise and its `resolve`/`reject` functions.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain `withResolvables`",
  },
  {
    id: "well-known-symbol-unscopables",
    title: "Well-Known Symbol: `Symbol.unscopables`",
    description:
      "Use `Symbol.unscopables` to control which of an object's properties are exposed to the deprecated `with` statement.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Test `unscopables`",
  },
  {
    id: "proxy-for-dom-nodes",
    title: "Proxy for DOM Nodes (Conceptual)",
    description:
      "Explain how a Proxy could be used to intercept interactions with a DOM node, for example, to log all property accesses.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain DOM Proxy",
  },
  {
    id: "generator-for-async-control-flow",
    title: "Generators for Async Control Flow",
    description:
      "Demonstrate how generators were used with a runner function to mimic `async/await` before it was introduced.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Show Async Pattern",
  },
  {
    id: "structured-clone",
    title: "`structuredClone()`",
    description:
      "Use the modern `structuredClone()` global function to create a deep copy of an object, a more robust method than the JSON trick.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Use structuredClone",
  },
  {
    id: "intl-locale-conceptual",
    title: "`Intl.Locale` (Conceptual)",
    description:
      "Explain the `Intl.Locale` object for parsing and manipulating Unicode locale identifiers.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Locale Object",
  },
  {
    id: "intl-calendars-timezones",
    title: "`Intl` Calendars & Time Zones",
    description:
      "Demonstrate formatting a date into a non-Gregorian calendar and a specific time zone using `Intl.DateTimeFormat` options.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Format with Calendar/Time Zone",
  },
  {
    id: "reflect-getprototypeof",
    title: "`Reflect.getPrototypeOf()`",
    description:
      "Use `Reflect.getPrototypeOf()` to get the prototype of an object, equivalent to `Object.getPrototypeOf()`.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Get Prototype with Reflect",
  },
  {
    id: "proxy-for-operator-overloading",
    title: "Proxy for Operator Overloading (Conceptual)",
    description:
      "Explain how Proxies can be used to conceptually simulate operator overloading for custom objects, a feature not native to JavaScript.",
    category: "Advanced JS Features",
    inputs: [],
    buttonText: "Explain Operator Overloading",
  },
];
