import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "create-simple-object",
    title: "Create a Simple Object",
    description:
      "Create an object literal representing a user with `name` and `age` properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Object",
  },
  {
    id: "access-object-property-dot",
    title: "Access Property with Dot Notation",
    description:
      "Given an object, access its `title` property using dot notation.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        defaultValue: '{"title": "My First Post", "likes": 10}',
      },
    ],
    buttonText: "Get Title",
  },
  {
    id: "access-object-property-bracket",
    title: "Access Property with Bracket Notation",
    description:
      "Access a property of an object where the key is stored in a variable.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "key",
        label: "Property to Access",
        type: "text",
        defaultValue: "city",
      },
    ],
    buttonText: "Get Property",
  },
  {
    id: "add-modify-object-property",
    title: "Add/Modify an Object Property",
    description:
      "Add a `status` property to an object. If it already exists, change its value.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Update Status",
  },
  {
    id: "delete-object-property",
    title: "Delete an Object Property",
    description: "Given an object, delete its `isDraft` property.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Delete Property",
  },
  {
    id: "check-property-existence",
    title: "Check for Property Existence",
    description:
      "Check if an object has a property named `email` using two different methods (`in` vs `hasOwnProperty`).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check for Email",
  },
  {
    id: "get-object-keys",
    title: "Get Object Keys",
    description:
      "Write a function that returns an array of a given object's own property names (keys).",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        defaultValue: '{"id": 1, "user": "test", "active": true}',
      },
    ],
    buttonText: "Get Keys",
  },
  {
    id: "get-object-values",
    title: "Get Object Values",
    description:
      "Write a function that returns an array of a given object's own property values.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        defaultValue: '{"id": 1, "user": "test", "active": true}',
      },
    ],
    buttonText: "Get Values",
  },
  {
    id: "get-object-entries",
    title: "Get Object Entries",
    description:
      "Use `Object.entries()` to return an array of a given object's own [key, value] pairs.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json",
        label: "JSON Object",
        type: "textarea",
        defaultValue: '{"a": 1, "b": 2, "c": 3}',
      },
    ],
    buttonText: "Get Entries",
  },
  {
    id: "merge-objects-spread",
    title: "Merge Objects with Spread Syntax",
    description:
      "Merge two objects into one using the spread syntax (`...`). The second object's properties should overwrite the first's.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json1",
        label: "First JSON Object",
        type: "textarea",
        defaultValue: '{"name": "User", "isAdmin": false}',
      },
      {
        id: "json2",
        label: "Second JSON Object",
        type: "textarea",
        defaultValue: '{"isAdmin": true, "theme": "dark"}',
      },
    ],
    buttonText: "Merge",
  },
  {
    id: "object-assign",
    title: "Merge with `Object.assign`",
    description:
      "Use `Object.assign()` to copy the values of all enumerable own properties from one or more source objects to a target object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Object.assign",
  },
  {
    id: "this-in-method",
    title: "`this` in an Object Method",
    description:
      "Create an object with a method that uses `this` to access another property of the same object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Call Method",
  },
  {
    id: "object-destructuring-basic",
    title: "Object Destructuring (Basic)",
    description:
      "Use destructuring to extract the `name` and `age` properties from a user object into variables.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Destructure",
  },
  {
    id: "nested-object-access",
    title: "Nested Object Access",
    description:
      "Access a deeply nested property (e.g., `user.address.street`).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Street",
  },
  {
    id: "nested-object-destructuring",
    title: "Nested Object Destructuring",
    description:
      "Use nested destructuring to extract the `city` from a user object's `address` property.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Destructure City",
  },
  {
    id: "loop-object-for-in",
    title: "Loop Through Object with `for...in`",
    description:
      "Iterate over the properties of an object using a `for...in` loop and log each key-value pair.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Loop Object",
  },
  {
    id: "object-freeze",
    title: "Freeze an Object",
    description:
      "Use `Object.freeze()` to prevent an object from being changed. Attempt to modify a frozen object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Freeze and Test",
  },
  {
    id: "object-seal",
    title: "Seal an Object",
    description:
      "Use `Object.seal()` to prevent adding/deleting properties, but allow existing properties to be modified.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Seal and Test",
  },
  {
    id: "constructor-function",
    title: "Constructor Function",
    description:
      "Create a `Car` constructor function that creates car objects with `make` and `model` properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Car",
  },
  {
    id: "prototype-property",
    title: "The `prototype` Property",
    description:
      "Add a `drive` method to the `Car` constructor's `prototype` so all car instances can share it.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Add Method to Prototype",
  },
  {
    id: "prototypal-inheritance",
    title: "Prototypal Inheritance",
    description:
      "Create an `ElectricCar` constructor that inherits from `Car` and adds a `battery` property.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Electric Car",
  },
  {
    id: "object-create",
    title: "Inheritance with `Object.create`",
    description:
      "Use `Object.create()` to create a new object with a specified prototype object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create with Prototype",
  },
  {
    id: "proto-vs-prototype",
    title: "`__proto__` vs `prototype` (Conceptual)",
    description:
      "Explain the difference between an object's `__proto__` (its actual prototype) and a constructor function's `prototype` property (the object that will become the prototype for new instances).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  {
    id: "instanceof-operator",
    title: "`instanceof` Operator",
    description:
      "Use the `instanceof` operator to check if an object is an instance of a particular constructor.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Instance",
  },
  {
    id: "object-is",
    title: "Strict Equality with `Object.is`",
    description:
      "Use `Object.is()` to compare two values, noting its difference from `===` when comparing `NaN` and `+0/-0`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Compare Values",
  },
  {
    id: "optional-chaining",
    title: "Optional Chaining `?.`",
    description:
      "Safely access a nested property that might not exist using the optional chaining operator `?.`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Safely Access Property",
  },
  {
    id: "nullish-coalescing-object",
    title: "Nullish Coalescing with Objects `??`",
    description:
      "Use the nullish coalescing operator `??` to provide a default value for a property that is `null` or `undefined`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Provide Default",
  },
  {
    id: "shorthand-property-names",
    title: "Shorthand Property Names",
    description:
      "Create an object from variables using the shorthand property name syntax.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create with Shorthand",
  },
  {
    id: "computed-property-names",
    title: "Computed Property Names",
    description:
      "Create an object with a property key that is determined by a variable's value.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create with Computed Key",
  },
  {
    id: "getter-syntax",
    title: "Getter Syntax",
    description:
      "Create a `fullName` getter on a person object that computes the full name from `firstName` and `lastName` properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Getter",
  },
  {
    id: "setter-syntax",
    title: "Setter Syntax",
    description:
      "Create a `fullName` setter that takes a full name string and updates the `firstName` and `lastName` properties accordingly.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "fullName",
        label: "New Full Name",
        type: "text",
        defaultValue: "Jane Doe",
      },
    ],
    buttonText: "Use Setter",
  },
  {
    id: "object-from-entries",
    title: "Create Object from Entries",
    description:
      "Use `Object.fromEntries()` to convert an array of [key, value] pairs back into an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create from Entries",
  },
  {
    id: "json-stringify",
    title: "Serialize with `JSON.stringify`",
    description: "Convert a JavaScript object into a JSON string.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Stringify Object",
  },
  {
    id: "json-parse",
    title: "Deserialize with `JSON.parse`",
    description: "Convert a JSON string back into a JavaScript object.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json",
        label: "JSON String",
        type: "textarea",
        defaultValue: '{"id":1,"name":"A book","inStock":true}',
      },
    ],
    buttonText: "Parse String",
  },
  {
    id: "json-stringify-replacer",
    title: "`JSON.stringify` with a Replacer",
    description:
      "Use the `replacer` argument in `JSON.stringify` to select which properties to include in the output string.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Stringify with Filter",
  },
  {
    id: "shallow-copy",
    title: "Shallow Copy",
    description:
      "Create a shallow copy of an object. Demonstrate that nested objects are still linked by reference.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Shallow Copy",
  },
  {
    id: "deep-copy-json",
    title: "Deep Copy with JSON",
    description:
      "Create a deep copy of an object using the `JSON.stringify` and `JSON.parse` trick. Note its limitations.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Deep Copy",
  },
  {
    id: "this-with-bind",
    title: "`this` with `.bind()`",
    description:
      "Create a new function with a permanently bound `this` context using the `.bind()` method.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Bind `this`",
  },
  {
    id: "check-empty-object",
    title: "Check if an Object is Empty",
    description:
      "Write a function to check if an object has no own properties.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json",
        label: "Object to Check (JSON)",
        type: "textarea",
        defaultValue: "{}",
      },
    ],
    buttonText: "Check if Empty",
  },
  {
    id: "invert-key-value",
    title: "Invert Key-Value Pairs",
    description:
      "Create a new object from a given object by swapping its keys and values.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json",
        label: "Object to Invert (JSON)",
        type: "textarea",
        defaultValue: '{"a": "1", "b": "2", "c": "3"}',
      },
    ],
    buttonText: "Invert Object",
  },
  {
    id: "property-descriptors",
    title: "Property Descriptors",
    description:
      "Use `Object.getOwnPropertyDescriptor()` to inspect the attributes of a property (value, writable, enumerable, configurable).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Descriptor",
  },
  {
    id: "object-define-property",
    title: "Define Property with `Object.defineProperty`",
    description:
      "Use `Object.defineProperty()` to create a new property with specific attributes, such as making it non-writable.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define and Test",
  },
  {
    id: "enumerable-properties",
    title: "Enumerable Properties",
    description:
      "Define a non-enumerable property and show that it does not appear in `for...in` loops or `Object.keys()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Enumerability",
  },
  {
    id: "object-prevent-extensions",
    title: "Prevent Extensions",
    description:
      "Use `Object.preventExtensions()` to prevent new properties from ever being added to an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Prevent and Test",
  },
  {
    id: "compare-objects",
    title: "Compare Two Objects",
    description:
      "Write a function to determine if two objects have the same properties with the same values (shallow equality check).",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json1",
        label: "First Object (JSON)",
        type: "textarea",
        defaultValue: '{"a": 1, "b": 2}',
      },
      {
        id: "json2",
        label: "Second Object (JSON)",
        type: "textarea",
        defaultValue: '{"b": 2, "a": 1}',
      },
    ],
    buttonText: "Compare",
  },
  {
    id: "map-vs-object",
    title: "Map vs. Object (Conceptual)",
    description:
      "Explain the key differences between using a `Map` and a plain `Object` for key-value storage, especially regarding key types and iteration.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain Differences",
  },
  {
    id: "object-get-prototype-of",
    title: "`Object.getPrototypeOf`",
    description:
      "Use `Object.getPrototypeOf()` to get the prototype of an object instance.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Prototype",
  },
  {
    id: "object-set-prototype-of",
    title: "`Object.setPrototypeOf`",
    description:
      "Use `Object.setPrototypeOf()` to change the prototype of an existing object. (Note: this is a slow operation).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Set Prototype",
  },
  {
    id: "factory-function",
    title: "Factory Function",
    description:
      "Create a factory function that returns new user objects, encapsulating the creation logic.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create User via Factory",
  },
  {
    id: "prototype-chain-conceptual",
    title: "The Prototype Chain (Conceptual)",
    description:
      "Explain how JavaScript uses the prototype chain to look up properties that don't exist on an object itself.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain Chain",
  },
  {
    id: "this-lost-context",
    title: "Lost `this` Context",
    description:
      "Demonstrate the common problem of `this` context being lost when a method is passed as a callback, and how to solve it.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Lost `this`",
  },
  {
    id: "object-create-null",
    title: "`Object.create(null)`",
    description:
      "Create an object that has no prototype using `Object.create(null)`. Show how it differs from `{}`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Null Prototype Object",
  },
  {
    id: "method-shorthand",
    title: "Method Shorthand Syntax",
    description:
      "Define a method in an object literal using the concise ES6 method shorthand syntax.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Method Shorthand",
  },
  {
    id: "destructuring-with-aliases-defaults",
    title: "Destructuring with Aliases & Defaults",
    description:
      "Combine aliases and default values in a single object destructuring assignment.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Destructure Advanced",
  },
  {
    id: "json-tojson-method",
    title: "`toJSON` Method",
    description:
      "Define a `toJSON` method on an object to customize its JSON serialization behavior when passed to `JSON.stringify`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Customize Serialization",
  },
  {
    id: "object-isextensible",
    title: "`Object.isExtensible()`",
    description:
      "Use `Object.isExtensible()` to check if new properties can be added to an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Extensibility",
  },
  {
    id: "object-isfrozen",
    title: "`Object.isFrozen()`",
    description:
      "Use `Object.isFrozen()` to check if an object is frozen (non-extensible, and all properties non-configurable and non-writable).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check if Frozen",
  },
  {
    id: "object-issealed",
    title: "`Object.isSealed()`",
    description:
      "Use `Object.isSealed()` to check if an object is sealed (non-extensible and all properties non-configurable).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check if Sealed",
  },
  {
    id: "this-arrow-function-method-pitfall",
    title: "Arrow Function as Method Pitfall",
    description:
      "Demonstrate the common pitfall of using an arrow function as a method, where `this` does not refer to the object itself.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Show Pitfall",
  },
  {
    id: "object-constructor",
    title: "The `Object` Constructor",
    description: "Create an object using the `new Object()` constructor.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Constructor",
  },
  {
    id: "object-tostring",
    title: "`Object.prototype.toString`",
    description:
      "Show the default string representation of an object by calling `.toString()` and how `Object.prototype.toString.call()` can be used for type checking.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test toString",
  },
  {
    id: "deep-copy-structuredclone",
    title: "Deep Copy with `structuredClone`",
    description:
      "Use the modern `structuredClone()` global function to create a deep copy of an object, a more robust method than the JSON trick.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use structuredClone",
  },
  {
    id: "dynamic-property-access",
    title: "Dynamic Property Access",
    description:
      "Write a function that takes an object and a property name (string) and returns the value of that property.",
    category: "Objects & Prototypes",
    inputs: [
      {
        id: "json",
        label: "Object (JSON)",
        type: "textarea",
        defaultValue: '{"user": "alpha", "score": 100}',
      },
      {
        id: "prop",
        label: "Property Name",
        type: "text",
        defaultValue: "score",
      },
    ],
    buttonText: "Get Property Value",
  },
  {
    id: "constructor-property",
    title: "The `.constructor` Property",
    description:
      "Demonstrate that an object's `.constructor` property typically references the constructor function that created it.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Constructor",
  },
  {
    id: "factory-function-private-state",
    title: "Factory Function with Private State",
    description:
      "Create a counter using a factory function that encapsulates the count variable, making it private.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Counter",
  },
  {
    id: "prototype-pollution-conceptual",
    title: "Prototype Pollution (Conceptual)",
    description:
      "Explain the security vulnerability of prototype pollution, where an attacker modifies `Object.prototype` to affect all objects.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain Vulnerability",
  },
  {
    id: "object-defineproperties",
    title: "`Object.defineProperties()`",
    description:
      "Use `Object.defineProperties()` to define or modify multiple properties on an object at once with specific descriptors.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Multiple",
  },
  {
    id: "mixin-pattern",
    title: "Mixin Pattern",
    description:
      "Create a 'mixin' object and use `Object.assign()` to add its methods to another object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Apply Mixin",
  },
  {
    id: "inheritance-vs-composition",
    title: "Inheritance vs. Composition (Conceptual)",
    description:
      "Explain the software design principle of 'composition over inheritance' with a simple conceptual example.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain Principle",
  },
  {
    id: "object-reference-vs-value",
    title: "Object Reference vs. Value",
    description:
      "Demonstrate that assigning an object to a new variable creates a reference, not a copy.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Reference",
  },
  {
    id: "prototype-chain-length",
    title: "Prototype Chain Length",
    description:
      "Write a function to determine the length of an object's prototype chain.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Calculate Length",
  },
  {
    id: "es5-class-pattern",
    title: "ES5 'Class' Pattern",
    description:
      "Show how classes were simulated in ES5 using a constructor function and its prototype.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Show ES5 Pattern",
  },
  {
    id: "object-key-ordering",
    title: "Object Key Ordering",
    description:
      "Demonstrate the modern key ordering guarantees for objects (integer keys first in order, then string keys in insertion order).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Show Key Order",
  },
  {
    id: "deep-object-access-optional-chaining",
    title: "Deep Access with Optional Chaining",
    description:
      "Safely access a property three levels deep in an object that might not have the full structure.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Deep Access",
  },
  {
    id: "object-property-iteration-methods",
    title: "Object Iteration Methods",
    description:
      "Compare and contrast the different ways to iterate over object properties: `for...in`, `Object.keys`, `Object.values`, and `Object.entries`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Compare Iteration",
  },
  {
    id: "shadowing-prototype-property",
    title: "Shadowing a Prototype Property",
    description:
      "Demonstrate that setting a property on an instance with the same name as a property on its prototype 'shadows' the prototype property.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Shadowing",
  },
  {
    id: "delete-from-prototype",
    title: "Deleting from Prototype",
    description:
      "Show that `delete` on an instance property does not affect the prototype, but deleting from the prototype affects all instances.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Deletion",
  },
  {
    id: "constructor-return-value",
    title: "Constructor Return Value",
    description:
      "Demonstrate that if a constructor function explicitly returns an object, that object is returned instead of `this`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Return",
  },
  {
    id: "object-destructuring-rest",
    title: "Object Destructuring with Rest",
    description:
      "Use object destructuring to pull some properties into variables and collect the rest into a new object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Destructure with Rest",
  },
  {
    id: "object-getownpropertysymbols",
    title: "`Object.getOwnPropertySymbols`",
    description:
      "Use `Object.getOwnPropertySymbols()` to retrieve an array of all symbol properties found directly upon a given object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Symbols",
  },
  {
    id: "this-in-arrow-function-in-method",
    title: "`this` in Arrow Function in Method",
    description:
      "Show how an arrow function inside a method correctly captures the method's `this` context.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Arrow `this`",
  },
  {
    id: "object-hasown-polyfill-conceptual",
    title: "`Object.hasOwn` Polyfill (Conceptual)",
    description:
      "Explain how to safely implement a polyfill for `Object.hasOwn` using `Object.prototype.hasOwnProperty.call`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain Polyfill",
  },
  {
    id: "object-property-with-spaces",
    title: "Object Property with Spaces",
    description:
      "Create and access an object property that contains spaces in its name, requiring bracket notation.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Spaced Key",
  },
  {
    id: "object-as-hash-map",
    title: "Object as a Hash Map",
    description:
      "Use an object to implement a simple hash map for counting character frequencies in a string.",
    category: "Objects & Prototypes",
    inputs: [
      { id: "str", label: "String", type: "text", defaultValue: "hello" },
    ],
    buttonText: "Count Frequencies",
  },
  {
    id: "proxy-vs-es5-getters",
    title: "Proxy vs. ES5 Getters (Conceptual)",
    description:
      "Explain the difference between using an ES6 Proxy vs. an ES5 getter for computed properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain Difference",
  },
  {
    id: "prototype-chain-limit",
    title: "End of the Prototype Chain",
    description:
      "Demonstrate that the prototype of `Object.prototype` is `null`, marking the end of the chain.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Find End of Chain",
  },
  {
    id: "object-isprototypeof",
    title: "`isPrototypeOf()` Method",
    description:
      "Use the `isPrototypeOf()` method to check if an object exists in another object's prototype chain.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Prototype",
  },
  {
    id: "json-stringify-space",
    title: "`JSON.stringify` with `space`",
    description:
      "Use the third argument of `JSON.stringify` to control spacing and pretty-print the JSON output.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Pretty-Print JSON",
  },
  {
    id: "object-destructuring-dynamic-key",
    title: "Destructuring with Dynamic Key",
    description:
      "Use computed property names within an object destructuring assignment to extract a property using a variable.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Dynamic Destructure",
  },
  {
    id: "deep-freeze-object-recursive",
    title: "Deep Freeze an Object",
    description:
      "Write a function that recursively freezes an object and all of its nested objects.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Deep Freeze",
  },
];
