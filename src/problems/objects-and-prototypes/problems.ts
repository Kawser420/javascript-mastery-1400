// problem--> 01
// import { Problem } from '../../types';

import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "op-create-object-literal",
    title: "Create an Object Literal",
    description:
      "Create a simple object representing a person with properties for `name` and `age`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Person Object",
  },
  // problem--> 02
  {
    id: "op-access-property-dot",
    title: "Access Property with Dot Notation",
    description:
      "Create an object and access its `title` property using dot notation.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Title",
  },
  // problem--> 03
  {
    id: "op-access-property-bracket",
    title: "Access Property with Bracket Notation",
    description:
      "Create an object and access a property using bracket notation, which is useful for keys with special characters or variables.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Property",
  },
  // problem--> 04
  {
    id: "op-modify-property",
    title: "Modify a Property",
    description:
      "Create an object, then change the value of one of its properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Update Age",
  },
  // problem--> 05
  {
    id: "op-add-property",
    title: "Add a New Property",
    description:
      "Create an object and add a new property to it after its creation.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Add City",
  },
  // problem--> 06
  {
    id: "op-delete-property",
    title: "Delete a Property",
    description:
      "Use the `delete` operator to remove a property from an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Delete Property",
  },
  // problem--> 07
  {
    id: "op-object-keys",
    title: "`Object.keys()`",
    description:
      "Use `Object.keys()` to get an array of an object's own property names.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Keys",
  },
  // problem--> 08
  {
    id: "op-object-values",
    title: "`Object.values()`",
    description:
      "Use `Object.values()` to get an array of an object's own property values.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Values",
  },
  // problem--> 09
  {
    id: "op-object-entries",
    title: "`Object.entries()`",
    description:
      "Use `Object.entries()` to get an array of an object's own `[key, value]` pairs.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Entries",
  },
  // problem--> 10
  {
    id: "op-in-operator",
    title: "The `in` Operator",
    description:
      "Use the `in` operator to check if a property exists in an object (including its prototype chain).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check for Property",
  },
  // problem--> 11
  {
    id: "op-hasownproperty",
    title: "`.hasOwnProperty()`",
    description:
      "Use `.hasOwnProperty()` to check if an object has a property directly on itself (not inherited).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Own Property",
  },
  // problem--> 12
  {
    id: "op-shorthand-properties",
    title: "Shorthand Properties",
    description:
      "Create an object from variables that have the same name as the desired property keys using ES6 shorthand.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create with Shorthand",
  },
  // problem--> 13
  {
    id: "op-computed-property-names",
    title: "Computed Property Names",
    description:
      "Create an object with a property key that is determined by a variable.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create with Computed Key",
  },
  // problem--> 14
  {
    id: "op-object-method",
    title: "Object Method",
    description:
      "Create an object with a method (a function as a property) that returns a greeting.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Call Method",
  },
  // problem--> 15
  {
    id: "op-this-in-method",
    title: "`this` in a Method",
    description:
      "Create an object with a method that uses the `this` keyword to access another property of the same object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `this`",
  },
  // problem--> 16
  {
    id: "op-nested-object",
    title: "Nested Object",
    description:
      "Create an object that contains another object as one of its properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Nested Object",
  },
  // problem--> 17
  {
    id: "op-access-nested-property",
    title: "Access a Nested Property",
    description:
      "Access a property from a nested object using chained dot notation.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Access Nested Value",
  },
  // problem--> 18
  {
    id: "op-object-destructuring-basic",
    title: "Object Destructuring (Basic)",
    description:
      "Use object destructuring to extract properties from an object into variables.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Destructure",
  },
  // problem--> 19
  {
    id: "op-object-destructuring-alias",
    title: "Object Destructuring with Aliases",
    description:
      "Use object destructuring to extract a property and assign it to a variable with a different name.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Destructure with Alias",
  },
  // problem--> 20
  {
    id: "op-object-destructuring-defaults",
    title: "Object Destructuring with Defaults",
    description:
      "Use object destructuring to provide a default value for a property that may not exist.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Destructure with Default",
  },
  // problem--> 21
  {
    id: "op-object-destructuring-nested",
    title: "Nested Object Destructuring",
    description:
      "Use nested destructuring to extract a property from a nested object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Destructure Nested",
  },
  // problem--> 22
  {
    id: "op-object-destructuring-rest",
    title: "Object Destructuring with Rest",
    description:
      "Use the rest syntax in object destructuring to collect remaining properties into a new object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Destructure with Rest",
  },
  // problem--> 23
  {
    id: "op-loop-for-in",
    title: "Loop with `for...in`",
    description: "Use a `for...in` loop to iterate over the keys of an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Loop Keys",
  },
  // problem--> 24
  {
    id: "op-loop-object-keys",
    title: "Loop with `Object.keys`",
    description:
      "Use `Object.keys()` and a `forEach` loop to iterate over an object's keys and values.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Loop with `Object.keys`",
  },
  // problem--> 25
  {
    id: "op-loop-object-entries",
    title: "Loop with `Object.entries`",
    description:
      "Use `Object.entries()` and a `for...of` loop with destructuring to iterate over an object's key-value pairs.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Loop with `Object.entries`",
  },
  // problem--> 26
  {
    id: "op-object-comparison-pitfall",
    title: "Object Comparison Pitfall",
    description:
      "Demonstrate that two separate objects with the same properties are not equal because they are compared by reference.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Compare Objects",
  },
  // problem--> 27
  {
    id: "op-copy-by-reference",
    title: "Copy by Reference",
    description:
      "Show that assigning an object to a new variable creates a reference, not a copy. Modifying the new variable affects the original.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Reference",
  },
  // problem--> 28
  {
    id: "op-shallow-copy-spread",
    title: "Shallow Copy with Spread Syntax",
    description:
      "Use the spread syntax (`...`) to create a shallow copy of an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Shallow Copy",
  },
  // problem--> 29
  {
    id: "op-shallow-copy-assign",
    title: "Shallow Copy with `Object.assign`",
    description: "Use `Object.assign()` to create a shallow copy of an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Shallow Copy with `assign`",
  },
  // problem--> 30
  {
    id: "op-merge-objects-spread",
    title: "Merge Objects with Spread",
    description:
      "Use the spread syntax to merge two objects into a new one. Show how properties from later objects overwrite earlier ones.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Merge Objects",
  },
  // problem--> 31
  {
    id: "op-get-prototype",
    title: "Get an Object's Prototype",
    description:
      "Use `Object.getPrototypeOf()` to inspect the prototype of an object literal.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Prototype",
  },
  // problem--> 32
  {
    id: "op-prototype-chain",
    title: "The Prototype Chain",
    description:
      "Demonstrate that accessing a property not on an object will cause JavaScript to look for it on the object's prototype.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `toString`",
  },
  // problem--> 33
  {
    id: "op-object-create",
    title: "`Object.create()`",
    description:
      "Use `Object.create()` to create a new object with a specified prototype object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create with Prototype",
  },
  // problem--> 34
  {
    id: "op-constructor-function",
    title: "Constructor Function",
    description:
      "Create a `Person` constructor function that initializes `name` and `age` properties using `this`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Constructor",
  },
  // problem--> 35
  {
    id: "op-new-keyword",
    title: "The `new` Keyword",
    description:
      "Use the `new` keyword with your `Person` constructor to create a new instance.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Instance",
  },
  // problem--> 36
  {
    id: "op-function-prototype-property",
    title: "Function's `prototype` Property",
    description:
      "Demonstrate that every function has a `prototype` property, which is an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Inspect Prototype",
  },
  // problem--> 37
  {
    id: "op-add-method-to-prototype",
    title: "Add Method to Prototype",
    description:
      "Add a `greet` method to the `Person` constructor's prototype so all instances can share it.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Add Method",
  },
  // problem--> 38
  {
    id: "op-instanceof-operator",
    title: "`instanceof` Operator",
    description:
      "Use the `instanceof` operator to check if an object is an instance of a specific constructor.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Instance",
  },
  // problem--> 39
  {
    id: "op-inheritance-with-prototypes",
    title: "Prototypal Inheritance",
    description:
      "Create an `Employee` constructor that inherits from a `Person` constructor.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Implement Inheritance",
  },
  // problem--> 40
  {
    id: "op-call-for-inheritance",
    title: "`.call()` for Constructor Chaining",
    description:
      "Use `Person.call(this, ...)` inside the `Employee` constructor to chain constructors.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Chain Constructors",
  },
  // problem--> 41
  {
    id: "op-this-in-function",
    title: "`this` in a Regular Function",
    description:
      "Show that `this` inside a regular function call (non-strict mode) refers to the global object (`window`).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check `this`",
  },
  // problem--> 42
  {
    id: "op-losing-this-context",
    title: "Losing `this` Context",
    description:
      "Demonstrate the common problem where `this` context is lost when a method is passed as a callback.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Show Problem",
  },
  // problem--> 43
  {
    id: "op-bind-method",
    title: "`.bind()` Method",
    description:
      "Use the `.bind()` method to create a new function with a permanently bound `this` context.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Fix with `bind`",
  },
  // problem--> 44
  {
    id: "op-call-method",
    title: "`.call()` Method",
    description:
      "Use the `.call()` method to invoke a function with a specified `this` context and individual arguments.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `call`",
  },
  // problem--> 45
  {
    id: "op-apply-method",
    title: "`.apply()` Method",
    description:
      "Use the `.apply()` method to invoke a function with a specified `this` context and arguments provided as an array.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `apply`",
  },
  // problem--> 46
  {
    id: "op-class-syntax-basic",
    title: "Basic `class` Syntax",
    description:
      "Rewrite the `Person` constructor function using the ES6 `class` syntax.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Class",
  },
  // problem--> 47
  {
    id: "op-class-constructor",
    title: "Class `constructor`",
    description:
      "Define a `constructor` method within a class to initialize instance properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Constructor",
  },
  // problem--> 48
  {
    id: "op-class-instance-method",
    title: "Class Instance Method",
    description: "Define an instance method directly within the class body.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Method",
  },
  // problem--> 49
  {
    id: "op-class-extends",
    title: "Class Inheritance with `extends`",
    description:
      "Create an `Employee` class that inherits from a `Person` class using the `extends` keyword.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `extends`",
  },
  // problem--> 50
  {
    id: "op-class-super",
    title: "`super()` in Constructor",
    description:
      "Use `super()` in the `Employee` constructor to call the parent `Person` constructor.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `super()`",
  },
  // problem--> 51
  {
    id: "op-class-super-method",
    title: "`super` in Methods",
    description:
      "Override a method in a child class and use `super.methodName()` to call the parent's version of the method.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Call Parent Method",
  },
  // problem--> 52
  {
    id: "op-class-static-method",
    title: "`static` Method",
    description:
      "Define a `static` method on a class. Static methods are called on the class itself, not on instances.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Static Method",
  },
  // problem--> 53
  {
    id: "op-class-getters",
    title: "Class `get` Syntax",
    description:
      "Use the `get` keyword to create a getter property that computes its value when accessed.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Getter",
  },
  // problem--> 54
  {
    id: "op-class-setters",
    title: "Class `set` Syntax",
    description:
      "Use the `set` keyword to create a setter property that executes a function when a property is set.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Setter",
  },
  // problem--> 55
  {
    id: "op-class-private-fields",
    title: "Private Class Fields (`#`)",
    description:
      "Use the `#` prefix to create a private field in a class that is not accessible from outside the class.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Private Field",
  },
  // problem--> 56
  {
    id: "op-this-in-arrow-function-method-pitfall",
    title: "`this` in Arrow Function Method Pitfall",
    description:
      "Show the common pitfall of using an arrow function for a method, where `this` does not refer to the instance.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Show Pitfall",
  },
  // problem--> 57
  {
    id: "op-class-field-arrow-function",
    title: "Arrow Function as Class Field",
    description:
      "Use a class field with an arrow function to create a method with a lexically bound `this`, solving callback issues.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Arrow Function Field",
  },
  // problem--> 58
  {
    id: "op-object-freeze",
    title: "`Object.freeze()`",
    description:
      "Use `Object.freeze()` to make an object immutable. Its properties cannot be added, removed, or changed.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Freeze Object",
  },
  // problem--> 59
  {
    id: "op-object-seal",
    title: "`Object.seal()`",
    description:
      "Use `Object.seal()` to prevent adding/deleting properties, while still allowing existing properties to be modified.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Seal Object",
  },
  // problem--> 60
  {
    id: "op-object-preventextensions",
    title: "`Object.preventExtensions()`",
    description:
      "Use `Object.preventExtensions()` to prevent new properties from being added to an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Prevent Extensions",
  },
  // problem--> 61
  {
    id: "op-object-isfrozen",
    title: "`Object.isFrozen()`",
    description:
      "Use `Object.isFrozen()` to check if an object has been frozen.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Frozen Status",
  },
  // problem--> 62
  {
    id: "op-property-descriptor",
    title: "Property Descriptors",
    description:
      "Use `Object.getOwnPropertyDescriptor()` to inspect the attributes of an object's property (value, writable, enumerable, configurable).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Descriptor",
  },
  // problem--> 63
  {
    id: "op-object-defineproperty",
    title: "`Object.defineProperty()`",
    description:
      "Use `Object.defineProperty()` to create or modify a property with precise control over its attributes.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Property",
  },
  // problem--> 64
  {
    id: "op-non-writable-property",
    title: "Non-Writable Property",
    description:
      "Use `Object.defineProperty()` to create a property that cannot be changed.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Writable",
  },
  // problem--> 65
  {
    id: "op-non-enumerable-property",
    title: "Non-Enumerable Property",
    description:
      "Use `Object.defineProperty()` to create a property that does not show up in `for...in` loops or `Object.keys()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Enumerable",
  },
  // problem--> 66
  {
    id: "op-non-configurable-property",
    title: "Non-Configurable Property",
    description:
      "Use `Object.defineProperty()` to create a property that cannot be deleted or have its attributes changed.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Configurable",
  },
  // problem--> 67
  {
    id: "op-object-defineproperties",
    title: "`Object.defineProperties()`",
    description:
      "Use `Object.defineProperties()` to define multiple properties on an object at once.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Multiple",
  },
  // problem--> 68
  {
    id: "op-getter-property",
    title: "Getter Property",
    description: "Use `Object.defineProperty()` to create a getter property.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Getter",
  },
  // problem--> 69
  {
    id: "op-setter-property",
    title: "Setter Property",
    description: "Use `Object.defineProperty()` to create a setter property.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Setter",
  },
  // problem--> 70
  {
    id: "op-symbol-as-key",
    title: "Symbol as a Property Key",
    description:
      "Use a `Symbol` to create a unique property key, which is not discoverable by `for...in` or `Object.keys()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Symbol",
  },
  // problem--> 71
  {
    id: "op-well-known-symbol-iterator",
    title: "`Symbol.iterator`",
    description:
      "Implement the `[Symbol.iterator]` method to make a custom object iterable so it can be used with a `for...of` loop.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Make Iterable",
  },
  // problem--> 72
  {
    id: "op-deep-clone-json",
    title: "Deep Clone with JSON",
    description:
      "Use the `JSON.stringify` and `JSON.parse` trick to perform a deep clone of a simple object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Deep Clone",
  },
  // problem--> 73
  {
    id: "op-structured-clone",
    title: "Deep Clone with `structuredClone`",
    description:
      "Use the modern `structuredClone()` global function to perform a robust deep clone.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `structuredClone`",
  },
  // problem--> 74
  {
    id: "op-factory-function",
    title: "Factory Function",
    description:
      "Create a factory function that returns new person objects, as an alternative to constructors.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Factory",
  },
  // problem--> 75
  {
    id: "op-mixin-pattern",
    title: "Mixin Pattern",
    description:
      "Use a mixin object with `Object.assign()` to add new capabilities to a class's prototype.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Apply Mixin",
  },
  // problem--> 76
  {
    id: "op-proxy-get-trap",
    title: "Proxy `get` Trap",
    description:
      "Create a `Proxy` that intercepts property access and returns a default value for non-existent properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `get` Trap",
  },
  // problem--> 77
  {
    id: "op-proxy-set-trap",
    title: "Proxy `set` Trap",
    description:
      "Create a `Proxy` that intercepts property assignments to perform validation.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `set` Trap",
  },
  // problem--> 78
  {
    id: "op-proxy-has-trap",
    title: "Proxy `has` Trap",
    description:
      "Create a `Proxy` that customizes the behavior of the `in` operator.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `has` Trap",
  },
  // problem--> 79
  {
    id: "op-proxy-apply-trap",
    title: "Proxy `apply` Trap",
    description: "Create a `Proxy` around a function to intercept its call.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `apply` Trap",
  },
  // problem--> 80
  {
    id: "op-reflect-api",
    title: "`Reflect` API",
    description:
      "Use `Reflect.get()` and `Reflect.set()` to access and modify properties, which is the recommended way within proxy traps.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `Reflect`",
  },
  // problem--> 81
  {
    id: "op-private-methods-with-sharp",
    title: "Private Class Methods",
    description: "Define a private method in a class using the `#` syntax.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Private Method",
  },
  // problem--> 82
  {
    id: "op-private-static-fields",
    title: "Private Static Fields",
    description: "Define a private static field in a class.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Access Static Private",
  },
  // problem--> 83
  {
    id: "op-static-block",
    title: "Static Initialization Block",
    description:
      "Use a `static {}` block for complex initialization of a class's static properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Initialize with Static Block",
  },
  // problem--> 84
  {
    id: "op-error-cause-property",
    title: "Error `cause` Property",
    description:
      "Create a new `Error` with a `cause` property to chain errors for better debugging.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Error Cause",
  },
  // problem--> 85
  {
    id: "op-object-hasown-static",
    title: "`Object.hasOwn()`",
    description:
      "Use the static method `Object.hasOwn()` as a safer alternative to `.hasOwnProperty()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `Object.hasOwn`",
  },
  // problem--> 86
  {
    id: "op-prototype-pollution-conceptual",
    title: "Prototype Pollution (Conceptual)",
    description:
      "Explain the concept of prototype pollution, a vulnerability where an attacker modifies `Object.prototype`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 87
  {
    id: "op-null-prototype-object",
    title: "Null-Prototype Object",
    description:
      "Create an object with `Object.create(null)` that has no prototype, making it a pure, secure dictionary.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Null Prototype Object",
  },
  // problem--> 88
  {
    id: "op-weakmap-for-private-data",
    title: "`WeakMap` for Private Data",
    description:
      "Use a `WeakMap` to associate private data with an object instance, a classic pattern for privacy before `#` fields.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `WeakMap` Privacy",
  },
  // problem--> 89
  {
    id: "op-isprototypeof",
    title: "`.isPrototypeOf()`",
    description:
      "Use the `.isPrototypeOf()` method to check if an object exists in another object's prototype chain.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Prototype",
  },
  // problem--> 90
  {
    id: "op-object-tostring-tag",
    title: "`Symbol.toStringTag`",
    description:
      "Use the `[Symbol.toStringTag]` well-known symbol to customize the string returned by `Object.prototype.toString.call()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Customize Tag",
  },
  // problem--> 91
  {
    id: "op-class-private-getter-setter",
    title: "Private Getters and Setters",
    description:
      "Define private getter and setter methods in a class using the `#` syntax.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Private Accessors",
  },
  // problem--> 92
  {
    id: "op-factory-vs-constructor-conceptual",
    title: "Factory vs. Constructor (Conceptual)",
    description:
      "Explain the pros and cons of using factory functions versus constructor functions/classes.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 93
  {
    id: "op-prototype-property-attributes",
    title: "Prototype Property Attributes",
    description:
      "Show that methods added to a prototype are enumerable and configurable by default, unlike some built-in properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Inspect Prototype Method",
  },
  // problem--> 94
  {
    id: "op-shadowing-prototype-method",
    title: "Shadowing a Prototype Method",
    description:
      "Add a method directly to an instance that has the same name as a method on its prototype, demonstrating that the instance method takes precedence.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Shadowing",
  },
  // problem--> 95
  {
    id: "op-object-seal-and-prototypes",
    title: "`Object.seal` and Prototypes",
    description:
      "Demonstrate that sealing an object does not affect its prototype.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Seal with Prototype",
  },
  // problem--> 96
  {
    id: "op-object-getownpropertynames",
    title: "`Object.getOwnPropertyNames`",
    description:
      "Use `Object.getOwnPropertyNames()` to get all own property keys (including non-enumerable ones, but not symbols).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Own Property Names",
  },
  // problem--> 97
  {
    id: "op-object-getownpropertysymbols",
    title: "`Object.getOwnPropertySymbols`",
    description:
      "Use `Object.getOwnPropertySymbols()` to get an array of all own symbol properties found on an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Symbol Properties",
  },
  // problem--> 98
  {
    id: "op-reflect-ownkeys",
    title: "`Reflect.ownKeys`",
    description:
      "Use `Reflect.ownKeys()` to get all own property keys, including both string and symbol keys, enumerable or not.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get All Own Keys",
  },
  // problem--> 99
  {
    id: "op-proxy-deleteproperty-trap",
    title: "Proxy `deleteProperty` Trap",
    description:
      "Create a `Proxy` that intercepts the `delete` operator to prevent a property from being deleted.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `deleteProperty` Trap",
  },
  // problem--> 100
  {
    id: "op-proxy-construct-trap",
    title: "Proxy `construct` Trap",
    description:
      "Create a `Proxy` around a class to intercept the `new` operator.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `construct` Trap",
  },
  // problem--> 101
  {
    id: "op-json-replacer-function",
    title: "JSON.stringify Replacer Function",
    description:
      "Use a replacer function with `JSON.stringify` to customize the serialization of an object, for example, to filter out certain properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Stringify with Replacer",
  },
  // problem--> 102
  {
    id: "op-json-reviver-function",
    title: "JSON.parse Reviver Function",
    description:
      "Use a reviver function with `JSON.parse` to customize the deserialization process, for example, to convert date strings back into Date objects.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Parse with Reviver",
  },
  // problem--> 103
  {
    id: "op-object-fromEntries",
    title: "`Object.fromEntries()`",
    description:
      "Use `Object.fromEntries()` to create an object from an array of key-value pairs (the inverse of `Object.entries()`).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Object from Entries",
  },
  // problem--> 104
  {
    id: "op-well-known-symbol-species",
    title: "`Symbol.species` (Conceptual)",
    description:
      "Explain how a class can use `[Symbol.species]` to control what constructor is used for new instances created by methods like `.map()` or `.slice()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain Symbol.species",
  },
  // problem--> 105
  {
    id: "op-private-static-methods",
    title: "Private Static Methods",
    description:
      "Define and call a private static method within a class using the `#` syntax.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Private Static Method",
  },
  // problem--> 106
  {
    id: "op-ergonomic-brand-checks",
    title: "Ergonomic Brand Checks for Private Fields",
    description:
      "Use the `in` operator to check if an object has a specific private field, a reliable way to check if an object is an instance of your class.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Brand Check",
  },
  // problem--> 107
  {
    id: "op-optional-chaining-with-methods",
    title: "Optional Chaining with Method Calls",
    description:
      "Use optional chaining `?.()` to safely call a method that might not exist on an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Safely Call Method",
  },
  // problem--> 108
  {
    id: "op-prototype-of-function",
    title: "Prototype of a Function",
    description:
      "Use `Object.getPrototypeOf()` on a function to show that it inherits from `Function.prototype`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Function Prototype",
  },
  // problem--> 109
  {
    id: "op-constructor-property",
    title: "The `.constructor` Property",
    description:
      "Inspect the `.constructor` property on an instance to see that it points back to the constructor function that created it.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Inspect Constructor Property",
  },
  // problem--> 110
  {
    id: "op-set-prototype-of",
    title: "`Object.setPrototypeOf()`",
    description:
      "Use `Object.setPrototypeOf()` to change the prototype of an existing object. (Note: this is a slow operation and should be avoided in performance-critical code).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Change Prototype",
  },
  // problem--> 111
  {
    id: "op-deep-clone-limitations-json",
    title: "Limitations of JSON Deep Clone",
    description:
      "Demonstrate that the `JSON.parse(JSON.stringify(obj))` trick for deep cloning does not work for special types like `undefined`, `Date`, or functions.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Show Limitations",
  },
  // problem--> 112
  {
    id: "op-for-in-and-prototype-chain",
    title: "`for...in` and the Prototype Chain",
    description:
      "Show that a `for...in` loop will iterate over enumerable properties from an object's prototype chain.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `for...in` Inheritance",
  },
  // problem--> 113
  {
    id: "op-class-fields-initialization-order",
    title: "Class Fields Initialization Order",
    description:
      "Demonstrate that class fields are initialized before the constructor body runs.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Initialization Order",
  },
  // problem--> 114
  {
    id: "op-super-outside-class-error",
    title: "`super` Outside of a Class (Error)",
    description:
      "Show that using `super` outside of a class method results in a `SyntaxError`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `super`",
  },
  // problem--> 115
  {
    id: "op-object-is-comparison",
    title: "`Object.is()`",
    description:
      "Use `Object.is()` to compare values, showing its difference from `===` with `NaN` and `-0`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Compare with Object.is",
  },
  // problem--> 116
  {
    id: "op-proxy-get-prototype-of-trap",
    title: "Proxy `getPrototypeOf` Trap",
    description:
      "Create a `Proxy` that intercepts calls to `Object.getPrototypeOf()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `getPrototypeOf` Trap",
  },
  // problem--> 117
  {
    id: "op-proxy-set-prototype-of-trap",
    title: "Proxy `setPrototypeOf` Trap",
    description:
      "Create a `Proxy` that intercepts calls to `Object.setPrototypeOf()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `setPrototypeOf` Trap",
  },
  // problem--> 118
  {
    id: "op-proxy-is-extensible-trap",
    title: "Proxy `isExtensible` Trap",
    description:
      "Create a `Proxy` that intercepts calls to `Object.isExtensible()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `isExtensible` Trap",
  },
  // problem--> 119
  {
    id: "op-proxy-prevent-extensions-trap",
    title: "Proxy `preventExtensions` Trap",
    description:
      "Create a `Proxy` that intercepts calls to `Object.preventExtensions()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `preventExtensions` Trap",
  },
  // problem--> 120
  {
    id: "op-proxy-define-property-trap",
    title: "Proxy `defineProperty` Trap",
    description:
      "Create a `Proxy` that intercepts calls to `Object.defineProperty()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `defineProperty` Trap",
  },
  // problem--> 121
  {
    id: "op-proxy-get-own-property-descriptor-trap",
    title: "Proxy `getOwnPropertyDescriptor` Trap",
    description:
      "Create a `Proxy` that intercepts calls to `Object.getOwnPropertyDescriptor()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `getOwnPropertyDescriptor` Trap",
  },
  // problem--> 122
  {
    id: "op-revocable-proxy",
    title: "Revocable Proxy",
    description:
      "Use `Proxy.revocable()` to create a proxy that can be turned off, preventing further access to the target object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create and Revoke Proxy",
  },
  // problem--> 123
  {
    id: "op-this-in-static-method",
    title: "`this` in a Static Method",
    description:
      "Demonstrate that `this` inside a static method refers to the class constructor itself, not an instance.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Static `this`",
  },
  // problem--> 124
  {
    id: "op-class-expression",
    title: "Class Expression",
    description:
      "Create a class by assigning a class expression to a variable, similar to a function expression.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Class Expression",
  },
  // problem--> 125
  {
    id: "op-prototype-property-shadowing",
    title: "Prototype Property Shadowing",
    description:
      "Demonstrate that assigning a value to a property on an instance creates an 'own' property that shadows the property of the same name on the prototype.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Shadowing",
  },
  // problem--> 126
  {
    id: "op-constructor-return-value-primitive",
    title: "Constructor Return Value (Primitive)",
    description:
      "Show that if a constructor function returns a primitive value, it is ignored and the newly created instance is returned instead.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Primitive Return",
  },
  // problem--> 127
  {
    id: "op-constructor-return-value-object",
    title: "Constructor Return Value (Object)",
    description:
      "Show that if a constructor function returns an object, that object is returned as the result of the `new` expression instead of the newly created instance.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Object Return",
  },
  // problem--> 128
  {
    id: "op-object-assign-multiple-sources",
    title: "`Object.assign` with Multiple Sources",
    description:
      "Use `Object.assign()` to merge properties from multiple source objects into a target object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Merge Multiple",
  },
  // problem--> 129
  {
    id: "op-object-is-sealed",
    title: "`Object.isSealed()`",
    description:
      "Use `Object.isSealed()` to check if an object has been sealed.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Sealed Status",
  },
  // problem--> 130
  {
    id: "op-object-is-extensible",
    title: "`Object.isExtensible()`",
    description:
      "Use `Object.isExtensible()` to check if new properties can be added to an object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Extensible Status",
  },
  // problem--> 131
  {
    id: "op-class-private-static-methods",
    title: "Private Static Methods",
    description:
      "Define a private static method using the `#` syntax and call it from a public static method.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Private Static Method",
  },
  // problem--> 132
  {
    id: "op-private-field-in-operator-check",
    title: "Private Field `in` Operator Check",
    description:
      "Use the `in` operator to create a static method that checks if an object is a true instance of the class by checking for a private field.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Instance Check",
  },
  // problem--> 133
  {
    id: "op-class-fields-vs-constructor-properties",
    title: "Class Fields vs. Constructor Properties (Conceptual)",
    description:
      "Explain the difference between defining properties as class fields versus defining them within the constructor.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 134
  {
    id: "op-class-with-no-constructor",
    title: "Class without a Constructor",
    description:
      "Demonstrate that if a class does not have a constructor, a default empty one is provided.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Default Constructor",
  },
  // problem--> 135
  {
    id: "op-super-property-access",
    title: "`super` for Property Access",
    description:
      "Use `super.propertyName` to access a property or getter on the parent class's prototype.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Access Parent Property",
  },
  // problem--> 136
  {
    id: "op-well-known-symbol-tostringtag",
    title: "`Symbol.toStringTag`",
    description:
      "Implement the `[Symbol.toStringTag]` property to customize the output of `Object.prototype.toString.call()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Customize Tag",
  },
  // problem--> 137
  {
    id: "op-functional-inheritance-pattern",
    title: "Functional Inheritance Pattern (Conceptual)",
    description:
      "Explain the functional inheritance pattern, which uses factory functions and closures to achieve encapsulation and inheritance without using `this` or prototypes.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 138
  {
    id: "op-method-chaining",
    title: "Method Chaining",
    description:
      "Implement a simple class where methods return `this` to allow for method chaining.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Chaining",
  },
  // problem--> 139
  {
    id: "op-deep-clone-with-recursion",
    title: "Deep Clone with Recursion",
    description:
      "Implement a basic recursive function to perform a deep clone of a JSON-serializable object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Deep Clone",
  },
  // problem--> 140
  {
    id: "op-prototype-of-class",
    title: "Prototype of a Class",
    description:
      "Use `Object.getPrototypeOf()` on a class to show that it inherits from `Function.prototype`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Class Prototype",
  },
  // problem--> 141
  {
    id: "op-this-binding-precedence",
    title: "`this` Binding Precedence (Conceptual)",
    description:
      "Explain the order of precedence for `this` binding: `new` > explicit (`bind`, `call`) > method call > default (global).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 142
  {
    id: "op-prototype-of-class-prototype",
    title: "Prototype of a Class's Prototype",
    description:
      "Show that the prototype of a base class's `prototype` property is `Object.prototype`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Inspect Chain",
  },
  // problem--> 143
  {
    id: "op-for-in-vs-object-keys",
    title: "`for...in` vs. `Object.keys()`",
    description:
      "Compare `for...in` and `Object.keys()` to show that the former includes inherited enumerable properties while the latter does not.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 144
  {
    id: "op-well-known-symbol-hasinstance",
    title: "`Symbol.hasInstance` (Conceptual)",
    description:
      "Explain how a class can implement `[Symbol.hasInstance]` to customize the behavior of the `instanceof` operator.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 145
  {
    id: "op-reflect-construct",
    title: "`Reflect.construct()`",
    description:
      "Use `Reflect.construct()` to call a constructor, similar to the `new` operator but as a function.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Construct with Reflect",
  },
  // problem--> 146
  {
    id: "op-reflect-getprototypeof",
    title: "`Reflect.getPrototypeOf()`",
    description:
      "Use `Reflect.getPrototypeOf()` as the modern, reflective equivalent of `Object.getPrototypeOf()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Prototype with Reflect",
  },
  // problem--> 147
  {
    id: "op-object-create-with-properties",
    title: "`Object.create()` with Properties",
    description:
      "Use the second argument of `Object.create()` to define own properties for the new object using a property descriptor map.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create with Properties",
  },
  // problem--> 148
  {
    id: "op-class-with-dynamic-method-name",
    title: "Class with Dynamic Method Name",
    description:
      "Use computed property syntax to define a method in a class with a name determined by a variable.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Dynamic Method",
  },
  // problem--> 149
  {
    id: "op-proxy-for-validation",
    title: "Proxy for Validation",
    description:
      "Create a proxy with a `set` trap to validate data before it is assigned to an object's property.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Validation Proxy",
  },
  // problem--> 150
  {
    id: "op-proxy-for-default-values",
    title: "Proxy for Default Values",
    description:
      "Use a proxy's `get` trap to return a default value for any property that does not exist on the target object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Default Value Proxy",
  },
  // problem--> 151
  {
    id: "op-weakset-for-object-tracking",
    title: "`WeakSet` for Object Tracking",
    description:
      "Use a `WeakSet` to keep track of a collection of objects without preventing them from being garbage collected.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `WeakSet`",
  },
  // problem--> 152
  {
    id: "op-finalization-registry-conceptual",
    title: "`FinalizationRegistry` (Conceptual)",
    description:
      "Explain the `FinalizationRegistry` API, which lets you request a callback to be invoked when an object is garbage collected.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 153
  {
    id: "op-this-in-getter-setter",
    title: "`this` in Getters and Setters",
    description:
      "Demonstrate that `this` within a getter or setter on an object refers to the object instance.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `this` in Accessors",
  },
  // problem--> 154
  {
    id: "op-object-is-vs-triple-equals",
    title: "`Object.is()` vs. `===`",
    description:
      "Compare `Object.is()` with `===`, highlighting the differences with `NaN` and `-0`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Compare",
  },
  // problem--> 155
  {
    id: "op-parasitic-inheritance-conceptual",
    title: "Parasitic Combination Inheritance (Conceptual)",
    description:
      "Explain the classic parasitic combination inheritance pattern, which was the most robust way to implement inheritance before ES6 classes.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 156
  {
    id: "op-class-private-brand-check-error",
    title: "Private Field Brand Check (Error)",
    description:
      "Show that attempting to access a private field on an object that isn't an instance of the class throws a `TypeError`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Invalid Access",
  },
  // problem--> 157
  {
    id: "op-well-known-symbol-isconcatspreadable",
    title: "`Symbol.isConcatSpreadable` (Conceptual)",
    description:
      "Explain how `[Symbol.isConcatSpreadable]` can be used to control whether an object is flattened by `Array.prototype.concat()`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 158
  {
    id: "op-prototype-of-arrow-function",
    title: "Prototype of an Arrow Function",
    description:
      "Demonstrate that an arrow function does not have a `.prototype` property.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Prototype",
  },
  // problem--> 159
  {
    id: "op-object-create-null-for-map",
    title: "`Object.create(null)` for a Map",
    description:
      "Create a null-prototype object to use as a secure map, preventing conflicts with properties like `toString`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Create Secure Map",
  },
  // problem--> 160
  {
    id: "op-object-tostring-for-type-checking",
    title: "`Object.prototype.toString` for Type Checking",
    description:
      "Show the classic pattern of using `Object.prototype.toString.call(value)` to get a precise type string like `[object Array]`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Type",
  },
  // problem--> 161
  {
    id: "op-prototype-constructor-correction",
    title: "Prototype Constructor Correction",
    description:
      "Show why it's important to manually reset the `.constructor` property when overwriting a prototype for inheritance.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Correct Constructor",
  },
  // problem--> 162
  {
    id: "op-this-arrow-function-global",
    title: "`this` in a Global Arrow Function",
    description:
      "Demonstrate that an arrow function defined in the global scope captures the global `this`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Global Arrow `this`",
  },
  // problem--> 163
  {
    id: "op-object-fromEntries-with-map",
    title: "`Object.fromEntries` with `Map`",
    description:
      "Use `Object.fromEntries` to convert an ES6 `Map` object into a plain object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Convert Map to Object",
  },
  // problem--> 164
  {
    id: "op-class-static-private-getter",
    title: "Private Static Getters",
    description: "Define a private static getter in a class using `#`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Private Static Getter",
  },
  // problem--> 165
  {
    id: "op-reflect-has",
    title: "`Reflect.has()`",
    description:
      "Use `Reflect.has()` as the functional equivalent of the `in` operator.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `Reflect.has`",
  },
  // problem--> 166
  {
    id: "op-reflect-deleteproperty",
    title: "`Reflect.deleteProperty()`",
    description:
      "Use `Reflect.deleteProperty()` as the functional equivalent of the `delete` operator.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use `Reflect.deleteProperty`",
  },
  // problem--> 167
  {
    id: "op-proxy-for-logging",
    title: "Proxy for Logging",
    description:
      "Create a proxy with `get` and `set` traps that logs all property accesses and modifications.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Logging Proxy",
  },
  // problem--> 168
  {
    id: "op-object-property-shorthand-and-methods",
    title: "Method Shorthand in Object Literals",
    description: "Use the ES6 method shorthand syntax in an object literal.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Use Method Shorthand",
  },
  // problem--> 169
  {
    id: "op-prototype-of-null",
    title: "Prototype of `null` (Error)",
    description:
      "Show that attempting to get the prototype of `null` throws a `TypeError`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `Object.getPrototypeOf(null)`",
  },
  // problem--> 170
  {
    id: "op-this-in-event-listener-with-bind",
    title: "`this` in Event Listener with `.bind`",
    description:
      "Show the classic pre-arrow-function pattern of using `.bind(this)` to correctly set the context for a method used as an event handler.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Show `.bind` Pattern",
  },
  // problem--> 171
  {
    id: "op-class-fields-with-this",
    title: "Class Fields Referencing `this`",
    description:
      "Demonstrate that a class field initializer can reference `this` to access properties set in the constructor.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test `this` in Field",
  },
  // problem--> 172
  {
    id: "op-object-defineproperty-getter-setter",
    title: "`defineProperty` with Getters and Setters",
    description:
      "Use `Object.defineProperty` to define a property with both a getter and a setter.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Define Accessor Property",
  },
  // problem--> 173
  {
    id: "op-prototype-chain-length",
    title: "Measuring Prototype Chain Length",
    description:
      "Write a function to determine the length of an object's prototype chain.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Get Chain Length",
  },
  // problem--> 174
  {
    id: "op-immutable-update-pattern",
    title: "Immutable Update Pattern",
    description:
      "Demonstrate the pattern of 'updating' a `const` object by creating a new object with spread syntax and the new value.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Show Immutable Update",
  },
  // problem--> 175
  {
    id: "op-deep-clone-and-prototypes",
    title: "Deep Cloning and Prototypes (Conceptual)",
    description:
      "Explain that most deep cloning methods (like `structuredClone` or JSON methods) do not preserve an object's prototype.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 176
  {
    id: "op-sealed-object-modification",
    title: "Modifying a Sealed Object",
    description:
      "Demonstrate that you can still change the value of existing properties on a sealed object.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Modify Sealed Object",
  },
  // problem--> 177
  {
    id: "op-constructor-without-new-error",
    title: "Class Constructor without `new` (Error)",
    description:
      "Show that ES6 class constructors cannot be called as regular functions and will throw a `TypeError`.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Invalid Call",
  },
  // problem--> 178
  {
    id: "op-proxy-invariants-conceptual",
    title: "Proxy Invariants (Conceptual)",
    description:
      "Explain the concept of proxy invariants – rules that proxy traps must obey to maintain the basic integrity of JavaScript objects (e.g., a trap cannot report a non-configurable property as non-existent).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 179
  {
    id: "op-well-known-symbol-unscopables",
    title: "`Symbol.unscopables` (Conceptual)",
    description:
      "Explain the historical `[Symbol.unscopables]` property, which can be used to control which properties are exposed to the deprecated `with` statement.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 180
  {
    id: "op-object-destructuring-and-getters",
    title: "Destructuring Triggers Getters",
    description:
      "Demonstrate that destructuring a property from an object will execute that property's getter method.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Getter",
  },
  // problem--> 181
  {
    id: "op-object-destructuring-assignment-with-setters",
    title: "Destructuring Assignment with Setters",
    description:
      "Demonstrate that using a destructuring pattern on the left side of an assignment will trigger an object's setter methods.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Setter",
  },
  // problem--> 182
  {
    id: "op-this-in-a-module",
    title: "`this` at the Top Level of a Module",
    description:
      "Show that `this` is `undefined` at the top level of an ES module.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Module `this`",
  },
  // problem--> 183
  {
    id: "op-prototype-of-class-instance",
    title: "Prototype of a Class Instance",
    description:
      "Use `Object.getPrototypeOf` on an instance of a class to show it is the class's `.prototype` property.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Instance Prototype",
  },
  // problem--> 184
  {
    id: "op-class-private-getter-setter-validation",
    title: "Private Setters for Validation",
    description:
      "Use a private setter in a class to validate a value before assigning it to a private field.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Validation",
  },
  // problem--> 185
  {
    id: "op-prevent-extensions-and-prototypes",
    title: "`preventExtensions` and Prototypes",
    description:
      "Show that preventing extensions on an object does not prevent you from adding properties to its prototype.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Prototype Modification",
  },
  // problem--> 186
  {
    id: "op-well-known-symbol-toprimitive",
    title: "`Symbol.toPrimitive` (Conceptual)",
    description:
      "Explain how to implement `[Symbol.toPrimitive]` on an object to customize its conversion to a primitive value.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 187
  {
    id: "op-subclassing-array",
    title: "Subclassing `Array`",
    description:
      "Create a custom array class that extends `Array` and adds a new method.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Subclass",
  },
  // problem--> 188
  {
    id: "op-new-target-conceptual",
    title: "`new.target` (Conceptual)",
    description:
      "Explain the `new.target` meta-property, which allows you to detect whether a function was called as a constructor.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain new.target",
  },
  // problem--> 189
  {
    id: "op-object-create-and-constructor",
    title: "`Object.create` and the Constructor Property",
    description:
      "Show that an object created with `Object.create` will inherit the `.constructor` property from its prototype.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check Constructor",
  },
  // problem--> 190
  {
    id: "op-proxy-for-caching",
    title: "Proxy for Caching/Memoization",
    description:
      "Use a proxy's `get` trap to implement a cache for the results of an expensive function.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Caching Proxy",
  },
  // problem--> 191
  {
    id: "op-class-static-inheritance",
    title: "Static Property Inheritance",
    description:
      "Demonstrate that static methods and properties are also inherited by subclasses.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Static Inheritance",
  },
  // problem--> 192
  {
    id: "op-multiple-inheritance-with-mixins",
    title: "Multiple Inheritance with Mixins",
    description:
      "Show a pattern for simulating multiple inheritance by composing multiple mixin objects onto a class.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Multiple Mixins",
  },
  // problem--> 193
  {
    id: "op-object-seal-on-array",
    title: "Sealing an Array",
    description:
      "Demonstrate the effect of `Object.seal()` on an array: existing elements can be changed, but no elements can be added or removed.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Seal Array",
  },
  // problem--> 194
  {
    id: "op-null-vs-undefined-in-properties",
    title: "`null` vs `undefined` in Properties",
    description:
      "Explain the semantic difference between a property that is `undefined` (may not have been set) and `null` (intentionally has no value).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 195
  {
    id: "op-prototype-of-object-prototype",
    title: "End of the Prototype Chain",
    description:
      "Use `Object.getPrototypeOf()` on `Object.prototype` to show that it is `null`, marking the end of the chain.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Check End of Chain",
  },
  // problem--> 196
  {
    id: "op-json-stringify-and-prototypes",
    title: "`JSON.stringify` and Prototypes",
    description:
      "Demonstrate that `JSON.stringify` only serializes an object's own properties and ignores inherited properties.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Stringify",
  },
  // problem--> 197
  {
    id: "op-this-in-destructured-method",
    title: "`this` in a Destructured Method",
    description:
      "Show that destructuring a method from an object and calling it as a standalone function causes `this` to be lost.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Destructured `this`",
  },
  // problem--> 198
  {
    id: "op-class-field-scoping",
    title: "Class Field Scoping",
    description:
      "Demonstrate that class fields are not in scope within other field initializers that appear before them.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Test Field Scope",
  },
  // problem--> 199
  {
    id: "op-class-vs-object-literal",
    title: "Class vs. Object Literal (Conceptual)",
    description:
      "Summarize when to use a class (for creating multiple instances with shared behavior) versus a simple object literal (for a single, unique object).",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Explain",
  },
  // problem--> 200
  {
    id: "op-final-review-conceptual",
    title: "Final Review (Conceptual)",
    description:
      "Summarize the evolution from constructor functions to ES6 classes and explain why classes are now the standard for OOP in JavaScript.",
    category: "Objects & Prototypes",
    inputs: [],
    buttonText: "Summarize OOP Evolution",
  },
];
