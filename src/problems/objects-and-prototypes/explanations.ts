export const explanations: Record<string, string> = {
  // problem explanation--> 01
  "op-create-object-literal": `
### 💡 Problem Breakdown
This is the most fundamental way to create an object in JavaScript. The task is to use the "object literal" syntax, which is a pair of curly braces \`{}\`, to define an object and its properties.

### ⚙️ Solution Walkthrough
The solution creates a \`const\` variable and assigns it an object literal containing key-value pairs.
\`\`\`javascript
const person = {
  name: "Alice",
  age: 30
};
\`\`\`
- **Keys**: \`name\` and \`age\` are the property keys (or names). They are usually strings.
- **Values**: \`"Alice"\` and \`30\` are the values associated with those keys. They can be any JavaScript data type.
- **Pairs**: Each key-value pair is separated by a comma.

### 📚 Key Concepts
- **Object Literal**: The \`{...}\` syntax for creating an object.
- **Key-Value Pair**: The fundamental structure of an object, where a key maps to a value.
`,

  // problem explanation--> 02
  "op-access-property-dot": `
### 💡 Problem Breakdown
Dot notation is the most common way to access the value of a property on an object. The task is to use this syntax to retrieve a specific value.

### ⚙️ Solution Walkthrough
The syntax is \`objectName.propertyName\`.
\`\`\`javascript
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien"
};

const bookTitle = book.title; // "The Hobbit"
\`\`\`
Dot notation is simple and readable. It works as long as the property key is a valid JavaScript identifier (i.e., it doesn't contain spaces, hyphens, or start with a number).

### 📚 Key Concepts
- **Dot Notation**: A primary method for property access.
- **Property Accessor**: An expression that retrieves a value from an object.
`,

  // problem explanation--> 03
  "op-access-property-bracket": `
### 💡 Problem Breakdown
Bracket notation is another way to access object properties. It is more versatile than dot notation because the key inside the brackets is treated as a string. This allows you to access properties with keys that are not valid identifiers or to use a variable as the key.

### ⚙️ Solution Walkthrough
The syntax is \`objectName['propertyName']\`.
\`\`\`javascript
const data = {
  "property-with-hyphen": "value"
};

// Dot notation would fail here: data.property-with-hyphen
const value = data["property-with-hyphen"]; // "value"

// It also works with variables:
const key = "property-with-hyphen";
const valueFromVar = data[key]; // "value"
\`\`\`
### 📚 Key Concepts
- **Bracket Notation**: A versatile method for property access, required for keys that are not valid identifiers or when using dynamic keys.
`,

  // problem explanation--> 04
  "op-modify-property": `
### 💡 Problem Breakdown
Objects in JavaScript are mutable by default, meaning their properties can be changed after they are created. The task is to access an existing property and assign it a new value.

### ⚙️ Solution Walkthrough
Property accessors (dot or bracket notation) are used on the left side of an assignment operator (\`=\`).
\`\`\`javascript
const user = { name: "Bob", status: "offline" };

// Modify the 'status' property
user.status = "online";
// The user object is now { name: "Bob", status: "online" }
\`\`\`
### 📚 Key Concepts
- **Mutability**: The ability for an object's state to be changed after its creation.
- **Assignment Operator (=)**: Used to update the value of a property.
`,

  // problem explanation--> 05
  "op-add-property": `
### 💡 Problem Breakdown
JavaScript objects are dynamic, meaning you can add new properties to them at any time, even after they've been created.

### ⚙️ Solution Walkthrough
To add a new property, you simply assign a value to a new key using either dot or bracket notation.
\`\`\`javascript
const car = { make: "Toyota", model: "Camry" };

// Add a new 'year' property
car.year = 2021;
// The car object is now { make: "Toyota", model: "Camry", year: 2021 }
\`\`\`
### 📚 Key Concepts
- **Dynamic Objects**: JavaScript objects are not fixed in structure. Their properties can be added or removed at runtime.
`,

  // problem explanation--> 06
  "op-delete-property": `
### 💡 Problem Breakdown
The \`delete\` operator is used to remove a property from an object. It modifies the object in place.

### ⚙️ Solution Walkthrough
The operator is used before a property accessor.
\`\`\`javascript
const item = { name: "Widget", price: 10, inStock: true };
delete item.inStock;
// The item object is now { name: "Widget", price: 10 }
\`\`\`
The \`delete\` operator returns \`true\` if the deletion was successful. It will fail on non-configurable properties.

### 📚 Key Concepts
- **\`delete\` Operator**: An operator for removing object properties.
- **Mutability**: Objects can be changed by removing properties.
`,

  // problem explanation--> 07
  "op-object-keys": `
### 💡 Problem Breakdown
\`Object.keys()\` is a static method that takes an object as an argument and returns an array of its own **enumerable** property names (keys).

### ⚙️ Solution Walkthrough
The method is called with the target object.
\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
// keys is ["a", "b", "c"]
\`\`\`
This is very useful for iterating over an object's properties when you only need the keys.

### 📚 Key Concepts
- **\`Object.keys()\`**: A standard method for object introspection.
- **Enumerable Properties**: Properties that are included in operations like \`for...in\` loops and \`Object.keys\`.
`,

  // problem explanation--> 08
  "op-object-values": `
### 💡 Problem Breakdown
\`Object.values()\` is a static method that returns an array of an object's own **enumerable** property values.

### ⚙️ Solution Walkthrough
The method is called with the target object.
\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
// values is [1, 2, 3]
\`\`\`
The order of the values matches the order of the keys returned by \`Object.keys()\`.

### 📚 Key Concepts
- **\`Object.values()\`**: A standard method for object introspection.
`,

  // problem explanation--> 09
  "op-object-entries": `
### 💡 Problem Breakdown
\`Object.entries()\` is a static method that returns an array of an object's own **enumerable** string-keyed property \`[key, value]\` pairs.

### ⚙️ Solution Walkthrough
The method is called with the target object.
\`\`\`javascript
const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
// entries is [["a", 1], ["b", 2]]
\`\`\`
This is particularly useful when you want to iterate over an object as if it were a \`Map\`, using destructuring in a \`for...of\` loop.

### 📚 Key Concepts
- **\`Object.entries()\`**: A standard method for object introspection.
`,

  // problem explanation--> 10
  "op-in-operator": `
### 💡 Problem Breakdown
The \`in\` operator is used to check if a specified property exists in an object. It returns \`true\` if the property exists on the object itself **or** in its prototype chain.

### ⚙️ Solution Walkthrough
The operator checks for an own property and an inherited property.
\`\`\`javascript
const obj = { a: 1 };
'a' in obj;        // true (own property)
'toString' in obj; // true (inherited from Object.prototype)
'b' in obj;        // false (does not exist)
\`\`\`
### 📚 Key Concepts
- **\`in\` Operator**: An operator for checking property existence, including inherited properties.
- **Prototype Chain**: The mechanism for inheritance in JavaScript.
`,

  // problem explanation--> 11
  "op-hasownproperty": `
### 💡 Problem Breakdown
The \`.hasOwnProperty()\` method returns a boolean indicating whether the object has the specified property as its **own** property (as opposed to inheriting it).

### ⚙️ Solution Walkthrough
The method is called on an object to check for an own and an inherited property.
\`\`\`javascript
const obj = { a: 1 };
obj.hasOwnProperty('a');        // true
obj.hasOwnProperty('toString'); // false
\`\`\`
This is a more precise check than the \`in\` operator if you only care about properties defined directly on the object. In modern JS, \`Object.hasOwn()\` is preferred.

### 📚 Key Concepts
- **\`.hasOwnProperty()\`**: A method for checking for "own" properties.
`,

  // problem explanation--> 12
  "op-shorthand-properties": `
### 💡 Problem Breakdown
ES6 introduced a concise syntax for creating object literals when the keys of the object have the same name as the variables you want to assign to them.

### ⚙️ Solution Walkthrough
An object is created from two variables.
\`\`\`javascript
const name = "Alice";
const age = 25;

// Instead of { name: name, age: age }
const user = { name, age }; 
// user is { name: "Alice", age: 25 }
\`\`\`
If the variable name and the desired property name are identical, you only need to write the name once.

### 📚 Key Concepts
- **Shorthand Property Names**: A syntax sugar feature from ES6 that makes object creation more concise.
`,

  // problem explanation--> 13
  "op-computed-property-names": `
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
This is a powerful feature for creating objects with keys that are determined at runtime.

### 📚 Key Concepts
- **Computed Property Names**: The \`[expression]\` syntax for object keys.
`,

  // problem explanation--> 14
  "op-object-method": `
### 💡 Problem Breakdown
A method is simply a function that is stored as a property of an object. The task is to create an object that contains a method.

### ⚙️ Solution Walkthrough
A \`greet\` function is defined as a property on an object.
\`\`\`javascript
const greeter = {
  // Traditional function expression as a property
  sayHello: function() {
    return "Hello!";
  },
  // ES6 method shorthand syntax
  sayGoodbye() {
    return "Goodbye!";
  }
};

greeter.sayHello(); // "Hello!"
\`\`\`
### 📚 Key Concepts
- **Method**: A function associated with an object.
- **Method Shorthand**: An ES6 syntax for defining methods more concisely.
`,

  // problem explanation--> 15
  "op-this-in-method": `
### 💡 Problem Breakdown
The \`this\` keyword is a special identifier in JavaScript. When a function is called as a method of an object, \`this\` inside that method refers to the object it was called on. This allows the method to access other properties of the same object.

### ⚙️ Solution Walkthrough
The \`greet\` method uses \`this.name\` to access the \`name\` property of the \`person\` object.
\`\`\`javascript
const person = {
  name: "Alice",
  greet() {
    // 'this' refers to the 'person' object
    return \`Hi, I'm \${this.name}.\`;
  }
};

person.greet(); // "Hi, I'm Alice."
\`\`\`
### 📚 Key Concepts
- **\`this\` Keyword**: A reference to the execution context of a function.
- **Method Call Binding**: The rule that determines the value of \`this\` when a function is called as a method.
`,

  // problem explanation--> 16
  "op-nested-object": `
### 💡 Problem Breakdown
Object properties can hold values of any type, including other objects. This allows you to create nested data structures. The task is to create an object that has another object as one of its property values.

### ⚙️ Solution Walkthrough
An object literal is nested inside another object literal.
\`\`\`javascript
const user = {
  name: "Bob",
  address: {
    city: "New York",
    zip: "10001"
  }
};
\`\`\`
The \`address\` property holds an object with its own properties.

### 📚 Key Concepts
- **Nested Data Structures**: A way to model hierarchical or complex data.
`,

  // problem explanation--> 17
  "op-access-nested-property": `
### 💡 Problem Breakdown
To access a property from a nested object, you can chain property accessors (like dot notation) together.

### ⚙️ Solution Walkthrough
Chained dot notation is used to get the \`city\`.
\`\`\`javascript
const user = {
  name: "Bob",
  address: {
    city: "New York",
    zip: "10001"
  }
};

const city = user.address.city; // "New York"
\`\`\`
The expression \`user.address\` is evaluated first, which returns the nested address object. Then, the \`.city\` property is accessed on that returned object.

### 📚 Key Concepts
- **Chaining**: Applying operators or methods sequentially to access deeply nested data.
`,

  // problem explanation--> 18
  "op-object-destructuring-basic": `
### 💡 Problem Breakdown
Object destructuring is an ES6 feature that allows you to "unpack" properties from objects into distinct variables in a concise way.

### ⚙️ Solution Walkthrough
Properties from an object literal are assigned to new constants.
\`\`\`javascript
const user = { name: 'Carol', age: 40 };
const { name, age } = user;

// 'name' is now a constant with the value "Carol"
// 'age' is now a constant with the value 40
\`\`\`
The assignment is based on the property names. The variable names must match the property keys.

### 📚 Key Concepts
- **Destructuring Assignment**: A syntax that makes it easy to extract data from objects.
`,

  // problem explanation--> 19
  "op-object-destructuring-alias": `
### 💡 Problem Breakdown
When destructuring an object, you can assign a property to a variable with a different name. This is called aliasing.

### ⚙️ Solution Walkthrough
The \`name\` property is extracted into a new variable called \`userName\`.
\`\`\`javascript
const user = { name: 'David' };
const { name: userName } = user;

// console.log(name); // ReferenceError: name is not defined
// console.log(userName); // 'David'
\`\`\`
The syntax is \`{ propertyKey: newVariableName }\`.

### 📚 Key Concepts
- **Aliasing**: Renaming variables during destructuring.
`,

  // problem explanation--> 20
  "op-object-destructuring-defaults": `
### 💡 Problem Breakdown
You can provide a default value for a variable in object destructuring. The default is used if the property does not exist on the object, or if its value is \`undefined\`.

### ⚙️ Solution Walkthrough
A default value is provided for the \`role\` property.
\`\`\`javascript
const user = { name: 'Eve' };
const { name, role = 'guest' } = user;

// name is 'Eve'
// role is 'guest', because the 'user' object has no 'role' property
\`\`\`
This is a key feature for safely destructuring objects that may have optional properties.

### 📚 Key Concepts
- **Default Values**: Making destructuring more robust by handling missing data.
`,

  // problem explanation--> 21
  "op-object-destructuring-nested": `
### 💡 Problem Breakdown
Destructuring syntax can be nested to match the structure of a nested object, allowing you to extract deeply nested values in a single statement.

### ⚙️ Solution Walkthrough
A nested destructuring pattern is used to extract the \`name\` property directly.
\`\`\`javascript
const data = { user: { name: 'Frank' } };
const { user: { name } } = data;

// 'name' is 'Frank'
\`\`\`
The pattern \`{ user: { name } }\` says: "Go into the \`data\` object, find the \`user\` property, go into that object, find its \`name\` property, and assign its value to a new variable called \`name\`."

### 📚 Key Concepts
- **Nested Destructuring**: A powerful syntax for extracting data from complex structures.
`,

  // problem explanation--> 22
  "op-object-destructuring-rest": `
### 💡 Problem Breakdown
The rest pattern (\`...\`) can be used in object destructuring to collect the remaining properties of an object into a new object.

### ⚙️ Solution Walkthrough
The \`id\` property is extracted, and the remaining properties are collected into a new object.
\`\`\`javascript
const product = { id: 1, name: 'Product', price: 99 };
const { id, ...rest } = product;

// id is 1
// rest is { name: 'Product', price: 99 }
\`\`\`
### 📚 Key Concepts
- **Rest Properties**: The object version of the rest pattern.
`,

  // problem explanation--> 23
  "op-loop-for-in": `
### 💡 Problem Breakdown
The \`for...in\` loop is a way to iterate over the **enumerable** property keys of an object. It's important to note that it will also iterate over keys from the object's prototype chain.

### ⚙️ Solution Walkthrough
The loop iterates through the keys of a simple object.
\`\`\`javascript
const obj = { a: 1, b: 2 };
let result = "";
for (const key in obj) {
  result += key + " ";
}
// result is "a b "
\`\`\`
For iterating over an object's own keys, it is generally safer to use \`Object.keys()\`.

### 📚 Key Concepts
- **\`for...in\` Loop**: A control structure for iterating over object keys.
`,

  // problem explanation--> 24
  "op-loop-object-keys": `
### 💡 Problem Breakdown
The modern and recommended way to iterate over an object's own keys is to use \`Object.keys()\`. This method returns an array of the keys, which you can then iterate over with any standard array looping method, like \`.forEach\` or \`for...of\`.

### ⚙️ Solution Walkthrough
\`Object.keys()\` is combined with \`forEach\`.
\`\`\`javascript
const obj = { a: 1, b: 2 };
let result = "";
Object.keys(obj).forEach(key => {
  result += \`\${key}: \${obj[key]}; \`;
});
// result is "a: 1; b: 2; "
\`\`\`
This approach avoids the potential pitfalls of \`for...in\` by not iterating over the prototype chain.

### 📚 Key Concepts
- **\`Object.keys()\`**: A safe way to get an array of an object's own keys.
`,

  // problem explanation--> 25
  "op-loop-object-entries": `
### 💡 Problem Breakdown
The most convenient way to iterate over both the keys and values of an object is to use \`Object.entries()\` combined with a \`for...of\` loop and destructuring.

### ⚙️ Solution Walkthrough
The key and value are destructured in each iteration of the loop.
\`\`\`javascript
const obj = { a: 1, b: 2 };
let result = "";
for (const [key, value] of Object.entries(obj)) {
  result += \`\${key}: \${value}; \`;
}
// result is "a: 1; b: 2; "
\`\`\`
This pattern is very readable and is the modern standard for iterating over object key-value pairs.

### 📚 Key Concepts
- **\`Object.entries()\`**: Returns an array of \`[key, value]\` pairs.
- **Destructuring in Loops**: A powerful feature for cleanly accessing iterated data.
`,

  // problem explanation--> 26
  "op-object-comparison-pitfall": `
### 💡 Problem Breakdown
This problem demonstrates a fundamental concept: objects are compared by **reference**, not by value. This means that two different object variables are only considered equal if they point to the exact same object in memory.

### ⚙️ Solution Walkthrough
Two separate but identical-looking objects are compared.
\`\`\`javascript
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

obj1 === obj2; // false, because they are two different objects in memory.
obj1 === obj3; // true, because they both point to the same object.
\`\`\`
### 📚 Key Concepts
- **Reference vs. Value**: Primitives are compared by value; objects are compared by reference.
`,

  // problem explanation--> 27
  "op-copy-by-reference": `
### 💡 Problem Breakdown
When you assign an object variable to another variable, you are not creating a new object. You are only copying the **reference** (the memory address). Both variables now point to the same single object.

### ⚙️ Solution Walkthrough
A change made through one variable is visible through the other.
\`\`\`javascript
const original = { value: 10 };
const reference = original; // Both variables point to the same object

reference.value = 20;

// The change is reflected in the original variable
console.log(original.value); // 20
\`\`\`
### 📚 Key Concepts
- **Reference Types**: Objects and arrays are reference types in JavaScript.
`,

  // problem explanation--> 28
  "op-shallow-copy-spread": `
### 💡 Problem Breakdown
The spread syntax (\`...\`) is a modern and concise way to create a **shallow copy** of an object. A shallow copy means a new object is created and its top-level properties are copied. However, if any of those properties are themselves objects, the *references* to those nested objects are copied, not the objects themselves.

### ⚙️ Solution Walkthrough
A shallow copy is created, and a nested object is mutated.
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };

// Mutating the nested object in the copy...
copy.b.c = 99;

// ...also affects the original, because they share the same nested object.
console.log(original.b.c); // 99
\`\`\`
### 📚 Key Concepts
- **Shallow Copy**: Creating a new top-level object but sharing references to nested objects.
- **Spread Properties**: A key tool for immutable patterns.
`,

  // problem explanation--> 29
  "op-shallow-copy-assign": `
### 💡 Problem Breakdown
\`Object.assign()\` is another way to create a shallow copy of an object. It copies all enumerable own properties from one or more source objects to a target object.

### ⚙️ Solution Walkthrough
A shallow copy is created by assigning properties from the original object to a new empty object.
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, original);

// The behavior is the same as with the spread syntax.
copy.b.c = 99;
console.log(original.b.c); // 99
\`\`\`
### 📚 Key Concepts
- **\`Object.assign()\`**: A method for copying properties between objects.
- **Shallow Copy**: The copy shares references to nested objects.
`,

  // problem explanation--> 30
  "op-merge-objects-spread": `
### 💡 Problem Breakdown
The spread syntax is a powerful tool for merging objects. You can combine the properties of multiple objects into a new object. If there are any properties with the same key, the property from the object that appears later in the spread sequence will overwrite the earlier ones.

### ⚙️ Solution Walkthrough
Two objects are merged.
\`\`\`javascript
const defaults = { a: 1, b: 2 };
const overrides = { b: 3, c: 4 };
const merged = { ...defaults, ...overrides };

// merged is { a: 1, b: 3, c: 4 }
\`\`\`
The \`b\` property from \`overrides\` overwrites the one from \`defaults\`.

### 📚 Key Concepts
- **Object Merging**: A common task, especially when dealing with configuration or state updates.
`,

  // problem explanation--> 31
  "op-get-prototype": `
### 💡 Problem Breakdown
Every object in JavaScript has an internal link to another object, called its **prototype**. \`Object.getPrototypeOf()\` is the standard method for accessing this internal link.

### ⚙️ Solution Walkthrough
The prototype of a simple object literal is inspected.
\`\`\`javascript
const obj = {};
const proto = Object.getPrototypeOf(obj);

// The prototype of a plain object literal is always Object.prototype
console.log(proto === Object.prototype); // true
\`\`\`
This shows that our empty object \`obj\` inherits properties and methods (like \`toString\`) from \`Object.prototype\`.

### 📚 Key Concepts
- **Prototype**: The object from which another object inherits properties.
- **\`Object.getPrototypeOf()\`**: The standard way to inspect an object's prototype.
`,

  // problem explanation--> 32
  "op-prototype-chain": `
### 💡 Problem Breakdown
When you try to access a property on an object, if JavaScript doesn't find it on the object itself, it follows the prototype link to the next object in the **prototype chain** and looks for the property there. This process continues until the property is found or the end of the chain (which is \`null\`) is reached.

### ⚙️ Solution Walkthrough
The \`.toString()\` method is called on an empty object.
\`\`\`javascript
const obj = {};
obj.toString(); // Works, returns "[object Object]"
\`\`\`
1. The engine looks for a \`toString\` property on \`obj\`. It doesn't find one.
2. It follows the prototype link from \`obj\` to \`Object.prototype\`.
3. It finds the \`toString\` method on \`Object.prototype\` and executes it.

### 📚 Key Concepts
- **Prototype Chain**: The linked list of prototypes that an object inherits from. This is the core of JavaScript's inheritance mechanism.
`,

  // problem explanation--> 33
  "op-object-create": `
### 💡 Problem Breakdown
\`Object.create()\` is a method that creates a brand new object, using an existing object as the prototype of the newly created object. This is a direct way to set up prototypal inheritance.

### ⚙️ Solution Walkthrough
A new object \`child\` is created that inherits from \`parent\`.
\`\`\`javascript
const parent = {
  greet: () => "Hello from parent"
};

const child = Object.create(parent);

// 'child' is an empty object, but it can access the 'greet' method
// from its prototype, 'parent'.
child.greet(); // "Hello from parent"
\`\`\`
### 📚 Key Concepts
- **\`Object.create()\`**: A fundamental method for creating objects with a specific prototype.
- **Prototypal Inheritance**: Directly setting up the inheritance link between two objects.
`,

  // problem explanation--> 34
  "op-constructor-function": `
### 💡 Problem Breakdown
A **constructor function** is a regular function that is used with the \`new\` keyword to create and initialize objects. By convention, constructor function names start with a capital letter. The \`this\` keyword inside a constructor refers to the new object being created.

### ⚙️ Solution Walkthrough
A \`Person\` constructor is defined.
\`\`\`javascript
function Person(name, age) {
  // 'this' refers to the new empty object being created
  this.name = name;
  this.age = age;
}
\`\`\`
This function acts as a blueprint for creating person objects. When called with \`new Person("Alice", 30)\`, it will create an object like \`{ name: "Alice", age: 30 }\`.

### 📚 Key Concepts
- **Constructor Function**: A function used as a blueprint for creating objects.
- **\`this\` Keyword**: In a constructor call, \`this\` is bound to the new instance being created.
`,

  // problem explanation--> 35
  "op-new-keyword": `
### 💡 Problem Breakdown
The \`new\` keyword is an operator that is used to create an instance of an object from a constructor function. It automates the process of object creation and linking the prototype.

### ⚙️ Solution Walkthrough
The \`new\` keyword is used with the \`Person\` constructor from the previous problem.
\`\`\`javascript
function Person(name) {
  this.name = name;
}
const instance = new Person("Grace");
// 'instance' is a new object: { name: 'Grace' }
// The prototype of 'instance' is Person.prototype
\`\`\`
The \`new\` keyword does four things:
1. Creates a new empty object.
2. Sets the prototype of this new object to be the constructor's \`prototype\` property.
3. Calls the constructor function with \`this\` bound to the new object.
4. Returns the new object.

### 📚 Key Concepts
- **\`new\` Operator**: The primary way to perform instantiation in constructor-based OOP.
- **Instantiation**: The process of creating a new object instance from a blueprint (constructor/class).
`,

  // problem explanation--> 36
  "op-function-prototype-property": `
### 💡 Problem Breakdown
Every regular function in JavaScript automatically gets a special property called \`prototype\`. This property is an object that contains a \`.constructor\` property pointing back to the function itself. This \`prototype\` object is what will be assigned as the prototype for all instances created with that function using the \`new\` keyword.

### ⚙️ Solution Walkthrough
The \`.prototype\` property of a function is inspected.
\`\`\`javascript
function MyFunc() {}
console.log(typeof MyFunc.prototype); // "object"
console.log(MyFunc.prototype.constructor === MyFunc); // true
\`\`\`
Note: Arrow functions do not have a \`.prototype\` property and cannot be used as constructors.

### 📚 Key Concepts
- **Function \`prototype\` Property**: A crucial part of the constructor and prototype mechanism. It is *not* the prototype of the function itself, but the prototype that will be assigned to its instances.
`,

  // problem explanation--> 37
  "op-add-method-to-prototype": `
### 💡 Problem Breakdown
A key benefit of using prototypes is efficiency. Instead of adding methods directly to each instance inside the constructor (which would create a separate copy of the function for every object), you can add the method once to the constructor's \`prototype\` object. All instances will then share this single method through the prototype chain.

### ⚙️ Solution Walkthrough
A \`greet\` method is added to \`Person.prototype\`.
\`\`\`javascript
function Person(name) { this.name = name; }
Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};
const p1 = new Person("Heidi");
const p2 = new Person("Ivan");
// Both p1 and p2 can access the same greet method.
p1.greet(); // "Hi, I'm Heidi"
\`\`\`
### 📚 Key Concepts
- **Method Sharing**: The core principle of prototypal inheritance for methods. It's more memory-efficient than creating methods on each instance.
`,

  // problem explanation--> 38
  "op-instanceof-operator": `
### 💡 Problem Breakdown
The \`instanceof\` operator is used to test if an object is an instance of a particular constructor. It works by checking if the constructor's \`.prototype\` object exists anywhere in the object's prototype chain.

### ⚙️ Solution Walkthrough
An object is checked against its constructor.
\`\`\`javascript
function Person() {}
const p = new Person();

p instanceof Person;  // true
p instanceof Object; // true (because Person.prototype inherits from Object.prototype)
\`\`\`
It's a common way to check the "type" of an object when dealing with constructor-based or class-based object-oriented programming.

### 📚 Key Concepts
- **\`instanceof\` Operator**: A tool for checking an object's lineage.
`,

  // problem explanation--> 39
  "op-inheritance-with-prototypes": `
### 💡 Problem Breakdown
This problem demonstrates how to set up inheritance between two constructor functions. The goal is for instances of an \`Employee\` constructor to inherit methods from the \`Person\` constructor's prototype.

### ⚙️ Solution Walkthrough
The key is to set the \`Employee.prototype\` to be a new object whose own prototype is \`Person.prototype\`. This is done using \`Object.create()\`.
\`\`\`javascript
function Person() {}
function Employee() {}

// Set up the prototype chain: Employee -> Person -> Object
Employee.prototype = Object.create(Person.prototype);

const emp = new Employee();
emp instanceof Person; // true
\`\`\`
This single line correctly links the prototype chains. You also need to chain the constructors themselves to inherit properties (see next problem).

### 📚 Key Concepts
- **Prototypal Inheritance**: The mechanism for creating "subclass" relationships in classic JavaScript.
- **\`Object.create()\`**: The standard way to set up the prototype chain for inheritance.
`,

  // problem explanation--> 40
  "op-call-for-inheritance": `
### 💡 Problem Breakdown
Setting up the prototype chain handles method inheritance. To inherit *properties* from a parent constructor, you need to call the parent constructor from within the child constructor, making sure to set the correct \`this\` context. The \`.call()\` method is perfect for this.

### ⚙️ Solution Walkthrough
\`Person.call(this, ...)\` is used inside the \`Employee\` constructor.
\`\`\`javascript
function Person(name) { this.name = name; }
function Employee(name, title) {
  // Call the Person constructor, but with the 'this' of the new Employee instance.
  Person.call(this, name);
  this.title = title;
}
const emp = new Employee("Ivan", "Engineer");
// emp now has { name: 'Ivan', title: 'Engineer' }
\`\`\`
This ensures that the property initialization logic from the parent constructor runs on the new child instance.

### 📚 Key Concepts
- **Constructor Chaining**: The process of a child constructor calling its parent constructor.
- **\`.call()\`**: A method for invoking a function with an explicitly set \`this\` context.
`,

  // problem explanation--> 41
  "op-this-in-function": `
### 💡 Problem Breakdown
This problem highlights the default binding for the \`this\` keyword. When a regular function is called as a standalone function (not as a method, not with \`new\`), its \`this\` context depends on whether the code is in strict mode.
- **Non-strict mode**: \`this\` defaults to the global object (\`window\` in browsers).
- **Strict mode**: \`this\` is \`undefined\`.

### ⚙️ Solution Walkthrough
A function that returns \`this\` is called.
\`\`\`javascript
function checkThis() {
  'use strict';
  return this;
}
checkThis(); // undefined
\`\`\`
This behavior is a common source of bugs, as functions can accidentally modify the global object in non-strict mode.

### 📚 Key Concepts
- **\`this\` Binding**: The default binding rule.
- **Strict Mode**: Changes the default binding to \`undefined\` for safety.
`,

  // problem explanation--> 42
  "op-losing-this-context": `
### 💡 Problem Breakdown
This demonstrates a very common problem in JavaScript. When you take a method off of an object and call it as a standalone function (e.g., by assigning it to a variable or passing it as a callback), its connection to the original object is broken. When called, its \`this\` context will fall back to the default binding (\`undefined\` in strict mode).

### ⚙️ Solution Walkthrough
A method is assigned to a variable and called.
\`\`\`javascript
'use strict';
const person = {
  name: "Judy",
  greet: function() { return this.name; }
};

const unboundGreet = person.greet;
// unboundGreet(); // Throws TypeError: Cannot read properties of undefined (reading 'name')
\`\`\`
### 📚 Key Concepts
- **Losing \`this\`**: A fundamental problem to understand when working with methods as callbacks (e.g., in event listeners or \`setTimeout\`).
`,

  // problem explanation--> 43
  "op-bind-method": `
### 💡 Problem Breakdown
The \`.bind()\` method is the primary solution for the "losing \`this\`" problem. It creates a **new function** that, when called, will have its \`this\` keyword permanently set to the provided value, regardless of how it is called.

### ⚙️ Solution Walkthrough
\`.bind()\` is used to fix the context of the detached method.
\`\`\`javascript
const person = {
  name: "Judy",
  greet: function() { return this.name; }
};
const unboundGreet = person.greet;
// Create a new function with 'this' permanently bound to 'person'
const boundGreet = unboundGreet.bind(person);

boundGreet(); // "Judy"
\`\`\`
### 📚 Key Concepts
- **\`.bind()\`**: A method for creating a new function with a fixed \`this\` context.
- **Explicit Binding**: A way to permanently lock the \`this\` value for a function.
`,

  // problem explanation--> 44
  "op-call-method": `
### 💡 Problem Breakdown
The \`.call()\` method invokes a function and allows you to explicitly specify what the \`this\` keyword should refer to inside that function for that specific call. Arguments to the function are passed individually after the \`this\` context.

### ⚙️ Solution Walkthrough
A standalone function is "borrowed" and called with the context of a \`person\` object.
\`\`\`javascript
function greet() {
  return this.name;
}
const person = { name: "Kate" };

// Invoke 'greet', but set 'this' inside it to be 'person'
greet.call(person); // "Kate"
\`\`\`
### 📚 Key Concepts
- **\`.call()\`**: A method on \`Function.prototype\` for explicit \`this\` binding.
- **Function Borrowing**: A pattern where a method from one object is used with the context of another.
`,

  // problem explanation--> 45
  "op-apply-method": `
### 💡 Problem Breakdown
The \`.apply()\` method is very similar to \`.call()\`. It invokes a function with a specified \`this\` context. The only difference is how it accepts arguments: \`.apply()\` takes the arguments as a single **array**.

### ⚙️ Solution Walkthrough
The \`Math.max\` function is called with an array of numbers using \`.apply()\`.
\`\`\`javascript
const numbers = [1, 5, 2];

// Math.max expects individual arguments, not an array.
// .apply() "spreads" the array elements into arguments for Math.max.
Math.max.apply(null, numbers); // 5
\`\`\`
The first argument to \`.apply()\` is the \`this\` context. For a simple function like \`Math.max\` that doesn't use \`this\`, \`null\` is typically passed.

### 📚 Key Concepts
- **\`.apply()\`**: A method for explicit \`this\` binding where arguments are provided as an array.
`,

  // problem explanation--> 46
  "op-class-syntax-basic": `
### 💡 Problem Breakdown
ES6 introduced the \`class\` keyword as "syntactic sugar" over JavaScript's existing prototypal inheritance. It provides a much cleaner and more familiar syntax for creating constructor functions and managing prototypes.

### ⚙️ Solution Walkthrough
A simple \`Person\` class is created.
\`\`\`javascript
class Person {
  // Constructor and methods will go here
}
const p = new Person();
\`\`\`
Under the hood, this still creates a constructor function named \`Person\` and a \`Person.prototype\` object. The \`class\` syntax just makes it easier to work with.

### 📚 Key Concepts
- **\`class\` Syntax**: The modern standard for object-oriented programming in JavaScript.
- **Syntactic Sugar**: A syntax that is easier to read but doesn't introduce new functionality.
`,

  // problem explanation--> 47
  "op-class-constructor": `
### 💡 Problem Breakdown
The \`constructor\` method is a special method for creating and initializing an object created with a class. There can be only one special method with the name "constructor" in a class.

### ⚙️ Solution Walkthrough
A constructor is defined to initialize instance properties.
\`\`\`javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
const p = new Person("Liam");
// p.name is "Liam"
\`\`\`
The constructor is automatically called when you use the \`new\` keyword.

### 📚 Key Concepts
- **\`constructor\`**: The special method that initializes new instances of a class.
`,

  // problem explanation--> 48
  "op-class-instance-method": `
### 💡 Problem Breakdown
Methods that are available on instances of a class are defined directly inside the class body. This syntax automatically adds the method to the class's \`.prototype\` object.

### ⚙️ Solution Walkthrough
A \`greet\` method is added to the \`Person\` class.
\`\`\`javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  
  // This method is added to Person.prototype
  greet() {
    return \`Hi, \${this.name}\`;
  }
}
const p = new Person("Mallory");
p.greet(); // "Hi, Mallory"
\`\`\`
This is the modern, clean equivalent of writing \`Person.prototype.greet = function() { ... }\`.

### 📚 Key Concepts
- **Instance Methods**: Functions that belong to an instance of a class and are shared via the prototype.
`,

  // problem explanation--> 49
  "op-class-extends": `
### 💡 Problem Breakdown
The \`extends\` keyword is used in class declarations to create a class that is a child of another class. This sets up the prototype chain for inheritance automatically.

### ⚙️ Solution Walkthrough
An \`Employee\` class inherits from a \`Person\` class.
\`\`\`javascript
class Person {}
class Employee extends Person {}

const emp = new Employee();
emp instanceof Person; // true
\`\`\`
The \`Employee.prototype\` will now have \`Person.prototype\` as its prototype.

### 📚 Key Concepts
- **\`extends\`**: The keyword for creating a subclass.
- **Class Inheritance**: The modern syntax for prototypal inheritance.
`,

  // problem explanation--> 50
  "op-class-super": `
### 💡 Problem Breakdown
When a child class has a constructor, it **must** call \`super()\` before it can use the \`this\` keyword. The \`super()\` call invokes the parent class's constructor, which is necessary to properly initialize the parent part of the new instance.

### ⚙️ Solution Walkthrough
\`super()\` is called in the \`Employee\` constructor.
\`\`\`javascript
class Person {
  constructor(name) { this.name = name; }
}
class Employee extends Person {
  constructor(name, title) {
    super(name); // Calls the Person constructor with the name
    this.title = title;
  }
}
const emp = new Employee("Nancy", "Developer");
// emp has { name: "Nancy", title: "Developer" }
\`\`\`
### 📚 Key Concepts
- **\`super()\`**: The keyword for calling the parent class's constructor.
`,

  // problem explanation--> 51
  "op-class-super-method": `
### 💡 Problem Breakdown
The \`super\` keyword can also be used inside a method to call a method of the same name on the parent class. This is useful for extending behavior rather than completely replacing it.

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

  // problem explanation--> 52
  "op-class-static-method": `
### 💡 Problem Breakdown
The \`static\` keyword defines a static method for a class. Static methods are called directly on the class itself, not on an instance of the class. They are often used as utility functions that are related to the class but don't depend on any instance-specific data.

### ⚙️ Solution Walkthrough
A static method is defined and called on the class.
\`\`\`javascript
class MyClass {
  static createId() {
    return Math.random();
  }
}
const id = MyClass.createId(); // Called on the class
// const instance = new MyClass();
// instance.createId(); // This would be a TypeError
\`\`\`
### 📚 Key Concepts
- **\`static\`**: A keyword to define methods that belong to the class rather than an instance.
`,

  // problem explanation--> 53
  "op-class-getters": `
### 💡 Problem Breakdown
The \`get\` syntax binds an object property to a function that will be called when that property is looked up. It creates a "getter" property, which looks like a regular property but executes a function to compute its value.

### ⚙️ Solution Walkthrough
A \`fullName\` getter is created that computes its value from \`firstName\` and \`lastName\`.
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
}
const p = new Person("Olivia", "Pope");
p.fullName; // Accessed like a property, not a method: "Olivia Pope"
\`\`\`
### 📚 Key Concepts
- **Getter**: A special method for retrieving a property's value. Also known as an "accessor property".
`,

  // problem explanation--> 54
  "op-class-setters": `
### 💡 Problem Breakdown
The \`set\` syntax binds an object property to a function that will be called when there is an attempt to set that property. It creates a "setter" property, allowing you to run code (like validation) when a property is assigned a value.

### ⚙️ Solution Walkthrough
A \`name\` setter is created to validate and format the input.
\`\`\`javascript
class Person {
  constructor() {
    this._name = ''; // Backing field
  }
  set name(value) {
    if (value.length < 2) {
      console.log("Name is too short!");
      return;
    }
    this._name = value;
  }
  get name() {
    return this._name;
  }
}
const p = new Person();
p.name = "Quincy"; // The setter is called
\`\`\`
### 📚 Key Concepts
- **Setter**: A special method for setting a property's value.
- **Backing Field**: A private or internal property (often prefixed with \`_\`) used to store the actual value for a getter/setter pair.
`,

  // problem explanation--> 55
  "op-class-private-fields": `
### 💡 Problem Breakdown
A modern JavaScript feature (ES2022) is the ability to create truly private class fields using a hash \`#\` prefix. These fields are not accessible from outside the class instance.

### ⚙️ Solution Walkthrough
A private field \`#privateField\` is defined and accessed from a public method.
\`\`\`javascript
class MyClass {
  #privateField = "secret"; // Declare the private field
  
  getSecret() {
    return this.#privateField; // Accessible inside the class
  }
}
const instance = new MyClass();
instance.getSecret(); // "secret"
// instance.#privateField; // This would be a SyntaxError
\`\`\`
### 📚 Key Concepts
- **Encapsulation**: Private fields provide strong encapsulation, preventing external code from tampering with an object's internal state.
`,

  // problem explanation--> 56
  "op-this-in-arrow-function-method-pitfall": `
### 💡 Problem Breakdown
This highlights a common pitfall. When you use an arrow function as a method directly on an object literal, its \`this\` value is determined lexically. This means it inherits \`this\` from the scope where the object is *defined*, which is usually the global scope, not the object itself.

### ⚙️ Solution Walkthrough
An arrow function is incorrectly used as a method.
\`\`\`javascript
const obj = {
  name: 'My Object',
  // 'this' inside this arrow function is NOT 'obj'.
  // It's the global 'window' object (or 'undefined' in strict mode).
  getName: () => this.name 
};
// obj.getName(); // Returns undefined (or an error)
\`\`\`
**Rule of Thumb**: For object methods that need to access the object via \`this\`, always use the traditional \`function\` keyword or the ES6 method shorthand syntax.

### 📚 Key Concepts
- **Lexical \`this\`**: A core feature of arrow functions that makes them unsuitable for object methods that rely on a dynamic \`this\`.
`,

  // problem explanation--> 57
  "op-class-field-arrow-function": `
### 💡 Problem Breakdown
This demonstrates a powerful modern pattern for handling the "losing \`this\`" problem in classes. By defining a method as a class field assigned to an arrow function, you create a method where \`this\` is permanently and lexically bound to the class instance.

### ⚙️ Solution Walkthrough
An arrow function is used for an event handler-like method.
\`\`\`javascript
class ClickHandler {
  constructor() {
    this.message = "Clicked!";
  }
  // 'this' inside handleClick is always the instance
  handleClick = () => {
    console.log(this.message);
  }
}
const handler = new ClickHandler();
// Even if you detach the method, 'this' is correct
const detachedHandler = handler.handleClick;
detachedHandler(); // "Clicked!"
\`\`\`
This pattern avoids the need for using \`.bind(this)\` in the constructor.

### 📚 Key Concepts
- **Lexical \`this\`**: The arrow function captures the \`this\` value from the context where it's defined (the class instance).
`,

  // problem explanation--> 58
  "op-object-freeze": `
### 💡 Problem Breakdown
If you need an object to be truly immutable (meaning its properties cannot be changed, added, or removed), you can use \`Object.freeze()\`.

### ⚙️ Solution Walkthrough
An object is frozen, and an attempt to mutate it fails.
\`\`\`javascript
'use strict'; // In strict mode, this will throw an error.
const frozenObj = { a: 1 };
Object.freeze(frozenObj);
// frozenObj.a = 2; // Throws a TypeError in strict mode.
\`\`\`
In non-strict mode, the mutation fails silently. It's important to note that \`Object.freeze()\` is shallow.

### 📚 Key Concepts
- **\`Object.freeze()\`**: A method for making an object immutable.
- **Immutability**: A programming paradigm that helps prevent bugs by avoiding shared, mutable state.
`,

  // problem explanation--> 59
  "op-object-seal": `
### 💡 Problem Breakdown
\`Object.seal()\` is another method for controlling object mutability. A sealed object is less restrictive than a frozen one. On a sealed object:
- You **cannot** add new properties.
- You **cannot** delete existing properties.
- You **can** modify the values of existing properties.

### ⚙️ Solution Walkthrough
An object is sealed, and its existing property is modified.
\`\`\`javascript
const sealedObj = { a: 1 };
Object.seal(sealedObj);

sealedObj.a = 2; // Allowed
// delete sealedObj.a; // Not allowed (fails silently in non-strict mode)
// sealedObj.b = 3; // Not allowed (fails silently in non-strict mode)
\`\`\`
### 📚 Key Concepts
- **\`Object.seal()\`**: A method for making an object's structure fixed, but its values mutable.
`,

  // problem explanation--> 60
  "op-object-preventextensions": `
### 💡 Problem Breakdown
\`Object.preventExtensions()\` is the least restrictive of the object immutability methods. It only prevents new properties from being added to an object. You can still modify and delete existing properties.

### ⚙️ Solution Walkthrough
An object's extensions are prevented, but an existing property is deleted.
\`\`\`javascript
const obj = { a: 1 };
Object.preventExtensions(obj);

// obj.b = 2; // Not allowed
delete obj.a; // Allowed
\`\`\`
### 📚 Key Concepts
- **\`Object.preventExtensions()\`**: A method to lock down the addition of new properties.
`,

  // problem explanation--> 61
  "op-object-isfrozen": `
### 💡 Problem Breakdown
The \`Object.isFrozen()\` method is used to determine if an object has been frozen with \`Object.freeze()\`. An object is frozen if it is not extensible, and all of its properties are non-configurable and non-writable.

### ⚙️ Solution Walkthrough
The status of an object is checked before and after freezing.
\`\`\`javascript
const obj = { a: 1 };
console.log(Object.isFrozen(obj)); // false
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: Methods that allow you to check the state or configuration of an object.
`,

  // problem explanation--> 62
  "op-property-descriptor": `
### 💡 Problem Breakdown
Every property on an object has a set of internal attributes called a "property descriptor." This descriptor defines how the property behaves. The main attributes are:
- **\`value\`**: The value of the property.
- **\`writable\`**: If \`true\`, the value can be changed.
- **\`enumerable\`**: If \`true\`, the property will show up in \`for...in\` loops and \`Object.keys()\`.
- **\`configurable\`**: If \`true\`, the property can be deleted and its attributes can be changed.

### ⚙️ Solution Walkthrough
\`Object.getOwnPropertyDescriptor()\` is used to inspect these attributes.
\`\`\`javascript
const obj = { a: 1 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
// descriptor is { value: 1, writable: true, enumerable: true, configurable: true }
\`\`\`
### 📚 Key Concepts
- **Property Descriptors**: The underlying metadata that controls property behavior.
`,

  // problem explanation--> 63
  "op-object-defineproperty": `
### 💡 Problem Breakdown
\`Object.defineProperty()\` is a low-level method that allows you to add or modify a property on an object with precise control over its descriptor attributes (writable, enumerable, configurable).

### ⚙️ Solution Walkthrough
A property is defined with specific attributes.
\`\`\`javascript
const obj = {};
Object.defineProperty(obj, 'a', {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: true
});
\`\`\`
When attributes are not specified, they default to \`false\` (except when modifying an existing property). This method is the foundation for creating more complex object behaviors like getters and setters.

### 📚 Key Concepts
- **\`Object.defineProperty()\`**: The core method for fine-grained control over object properties.
`,

  // problem explanation--> 64
  "op-non-writable-property": `
### 💡 Problem Breakdown
By setting the \`writable\` attribute of a property descriptor to \`false\`, you can create a read-only property.

### ⚙️ Solution Walkthrough
An attempt to change a non-writable property fails.
\`\`\`javascript
'use strict';
const obj = {};
Object.defineProperty(obj, 'a', { value: 1, writable: false });

// obj.a = 2; // Throws a TypeError in strict mode.
\`\`\`
In non-strict mode, the assignment would fail silently.

### 📚 Key Concepts
- **\`writable\` attribute**: Controls whether a property's value can be changed with the assignment operator.
`,

  // problem explanation--> 65
  "op-non-enumerable-property": `
### 💡 Problem Breakdown
By setting the \`enumerable\` attribute of a property descriptor to \`false\`, you can create a property that is "hidden" from enumeration loops like \`for...in\` and from methods like \`Object.keys()\` and \`JSON.stringify()\`.

### ⚙️ Solution Walkthrough
A non-enumerable property is defined and is not included in \`Object.keys()\`.
\`\`\`javascript
const obj = {};
Object.defineProperty(obj, 'hidden', { value: 1, enumerable: false });
Object.defineProperty(obj, 'visible', { value: 2, enumerable: true });

Object.keys(obj); // ["visible"]
\`\`\`
### 📚 Key Concepts
- **\`enumerable\` attribute**: Controls whether a property appears in loops.
`,

  // problem explanation--> 66
  "op-non-configurable-property": `
### 💡 Problem Breakdown
A non-configurable property is one whose descriptor attributes cannot be changed and which cannot be deleted. Once a property is made non-configurable, this state cannot be undone.

### ⚙️ Solution Walkthrough
An attempt to delete a non-configurable property fails.
\`\`\`javascript
'use strict';
const obj = {};
Object.defineProperty(obj, 'a', { value: 1, configurable: false });

// delete obj.a; // Throws a TypeError in strict mode.
// Object.defineProperty(obj, 'a', { enumerable: true }); // Also throws a TypeError.
\`\`\`
### 📚 Key Concepts
- **\`configurable\` attribute**: The most restrictive attribute. Making it \`false\` permanently locks down the property's definition.
`,

  // problem explanation--> 67
  "op-object-defineproperties": `
### 💡 Problem Breakdown
\`Object.defineProperties()\` is a convenience method that allows you to define or modify multiple properties on an object at once, each with its own property descriptor.

### ⚙️ Solution Walkthrough
Two properties are defined with different attributes.
\`\`\`javascript
const obj = {};
Object.defineProperties(obj, {
  'readOnly': { value: 1, writable: false },
  'hidden': { value: 2, enumerable: false }
});
\`\`\`
This is equivalent to calling \`Object.defineProperty()\` multiple times.

### 📚 Key Concepts
- **\`Object.defineProperties()\`**: A method for defining multiple properties with their descriptors.
`,

  // problem explanation--> 68
  "op-getter-property": `
### 💡 Problem Breakdown
A "getter" is a special type of property, also known as an "accessor property." Instead of storing a static value, it's bound to a function that gets executed to compute a value every time the property is accessed.

### ⚙️ Solution Walkthrough
\`Object.defineProperty()\` is used to define a getter.
\`\`\`javascript
const obj = { _a: 1 };
Object.defineProperty(obj, 'a', {
  get: function() {
    return this._a * 2;
  }
});

obj.a; // 2
\`\`\`
The \`get\` key in the property descriptor defines the getter function. Note that accessor properties cannot have \`value\` or \`writable\` attributes.

### 📚 Key Concepts
- **Accessor Properties**: Getters and setters, which execute functions on property access.
`,

  // problem explanation--> 69
  "op-setter-property": `
### 💡 Problem Breakdown
A "setter" is the counterpart to a getter. It's a function that gets executed whenever there's an attempt to assign a value to the property. This allows you to run validation or other logic during assignment.

### ⚙️ Solution Walkthrough
\`Object.defineProperty()\` is used to define a setter.
\`\`\`javascript
const obj = { _val: 0 };
Object.defineProperty(obj, 'value', {
  set: function(newValue) {
    if (typeof newValue === 'number') {
      this._val = newValue;
    }
  }
});

obj.value = 10;   // The setter is called, _val becomes 10
obj.value = 'ten'; // The setter is called, but the validation fails, _val remains 10
\`\`\`
### 📚 Key Concepts
- **Accessor Properties**: Getters and setters, which execute functions on property access.
`,

  // problem explanation--> 70
  "op-symbol-as-key": `
### 💡 Problem Breakdown
\`Symbol\` is a primitive data type introduced in ES6. Its main purpose is to create unique identifiers. Symbols can be used as keys for object properties. A key benefit is that symbol-keyed properties are not enumerated by default in \`for...in\` loops or \`Object.keys()\`, making them ideal for adding metadata to objects without interfering with standard iteration.

### ⚙️ Solution Walkthrough
A unique symbol is used to attach a private-like ID to an object.
\`\`\`javascript
const idSymbol = Symbol('id');
const user = { name: 'Test' };
user[idSymbol] = 123;

console.log(JSON.stringify(user)); // '{"name":"Test"}' (the symbol is ignored)
console.log(user[idSymbol]); // 123 (can still be accessed directly)
\`\`\`

### 📚 Key Concepts
- **\`Symbol\`**: Used for creating non-enumerable, unique property keys.
`,

  // problem explanation--> 71
  "op-well-known-symbol-iterator": `
### 💡 Problem Breakdown
This problem introduces "well-known symbols," which are built-in \`Symbol\` values that JavaScript uses to define internal language behaviors. You can add these symbols as properties to your own objects to hook into these behaviors. \`Symbol.iterator\` is the one that makes an object iterable, allowing it to be used with constructs like the \`for...of\` loop and the spread syntax.

### ⚙️ Solution Walkthrough
A custom object is made iterable by adding a \`[Symbol.iterator]\` method, which must be a generator function or a function that returns an iterator object.
\`\`\`javascript
const range = {
  from: 1,
  to: 3,
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

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
- **Iterable Protocol**: The set of rules an object must follow to be iterable.
`,

  // problem explanation--> 72
  "op-deep-clone-json": `
### 💡 Problem Breakdown
This problem demonstrates a common and simple (though limited) trick for creating a **deep clone** of an object. A deep clone means that the object and all of its nested objects and arrays are duplicated, not just referenced.

### ⚙️ Solution Walkthrough
The trick involves serializing the object to a JSON string and then parsing it back into a new object.
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));

copy.b.c = 99;
// 'original' is unaffected because the nested object was also copied.
console.log(original.b.c); // 2
\`\`\`
**Limitations**: This method does not work for data types that are not supported by JSON, such as \`undefined\`, functions, \`Symbol\`s, or \`Date\` objects (which are converted to strings).

### 📚 Key Concepts
- **Deep Clone**: Creating a completely independent copy of a nested data structure.
- **Serialization**: The process of converting an object into a string.
`,

  // problem explanation--> 73
  "op-structured-clone": `
### 💡 Problem Breakdown
The \`structuredClone()\` global function is a modern, built-in API designed specifically for creating deep clones of objects. It is much more robust than the JSON trick.

### ⚙️ Solution Walkthrough
The function is called with the object to be cloned.
\`\`\`javascript
const original = {
  date: new Date(),
  data: new Set([1, 2])
};
const copy = structuredClone(original);

// 'copy' is a true deep clone. 'original' is unaffected by changes to 'copy'.
console.log(copy.date instanceof Date); // true
console.log(copy.data.has(1)); // true
\`\`\`
\`structuredClone()\` can handle many complex data types that the JSON trick cannot, including \`Date\`, \`RegExp\`, \`Map\`, \`Set\`, and typed arrays. It cannot, however, clone functions or DOM nodes.

### 📚 Key Concepts
- **\`structuredClone()\`**: The modern, standard API for deep cloning objects.
`,

  // problem explanation--> 74
  "op-factory-function": `
### 💡 Problem Breakdown
A factory function is a function that returns a new object. It is an alternative to using a constructor function with the \`new\` keyword. Factory functions are often simpler and more flexible.

### ⚙️ Solution Walkthrough
A function \`createPerson\` is defined that creates and returns a person object.
\`\`\`javascript
const createPerson = (name, age) => ({
  name,
  age,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
});

const p1 = createPerson('Grace', 28);
const p2 = createPerson('Heidi', 32);
\`\`\`
**Pros**: Simple, no need for \`new\`, doesn't use \`this\` in a way that can be easily lost, can provide true privacy for variables using closures.
**Cons**: Can be less memory-efficient as methods are re-created for each instance (unless defined outside), and \`instanceof\` checks don't work.

### 📚 Key Concepts
- **Factory Function**: A design pattern where a function is responsible for creating objects.
`,

  // problem explanation--> 75
  "op-mixin-pattern": `
### 💡 Problem Breakdown
A mixin is a pattern that allows you to add functionality to an object or a class's prototype without using traditional inheritance. It's a way to achieve a form of multiple inheritance by composing functionality.

### ⚙️ Solution Walkthrough
\`Object.assign()\` is used to copy the methods from a mixin object onto a class's prototype.
\`\`\`javascript
// A mixin object containing methods
const canSayHi = {
  sayHi() { return 'Hello'; }
};
const canSayBye = {
  sayBye() { return 'Goodbye'; }
};

class Person {}

// Apply the mixins to the prototype
Object.assign(Person.prototype, canSayHi, canSayBye);

const p = new Person();
p.sayHi(); // "Hello"
p.sayBye(); // "Goodbye"
\`\`\`
### 📚 Key Concepts
- **Mixin**: A pattern for code reuse and composition.
- **\`Object.assign()\`**: The core method for copying properties from one or more source objects to a target object.
`,

  // problem explanation--> 76
  "op-proxy-get-trap": `
### 💡 Problem Breakdown
A \`Proxy\` is a special object that wraps another object (the "target") and allows you to intercept fundamental operations, such as property access. The \`get\` trap is a function on the proxy's handler that intercepts property *reads*.

### ⚙️ Solution Walkthrough
A proxy is created that returns a default value for any property that doesn't exist on the target object.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  // trap for getting property values
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 'default';
  }
};
const proxy = new Proxy(target, handler);

proxy.a; // 1 (exists on target)
proxy.b; // 'default' (doesn't exist, so the trap's logic is used)
\`\`\`
### 📚 Key Concepts
- **Proxy**: An object for creating custom behaviors for fundamental object operations.
- **Traps**: The handler functions on a proxy (like \`get\`, \`set\`, \`has\`).
- **Meta-programming**: Writing code that operates on other code.
`,

  // problem explanation--> 77
  "op-proxy-set-trap": `
### 💡 Problem Breakdown
The \`set\` trap on a proxy handler intercepts property *writes* (assignments). This is very useful for implementing validation, logging, or triggering side effects when a property is changed.

### ⚙️ Solution Walkthrough
A proxy is created that validates that the \`age\` property can only be set to a number.
\`\`\`javascript
const target = { age: 0 };
const handler = {
  // trap for setting property values
  set: function(obj, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number.');
    }
    // Forward the operation to the original object
    Reflect.set(obj, prop, value);
    return true; // The set trap must return a boolean indicating success
  }
};
const proxy = new Proxy(target, handler);
proxy.age = 30; // works
// proxy.age = 'thirty'; // throws TypeError
\`\`\`
### 📚 Key Concepts
- **Proxy \`set\` Trap**: A handler for intercepting property assignments.
`,

  // problem explanation--> 78
  "op-proxy-has-trap": `
### 💡 Problem Breakdown
The \`has\` trap on a proxy handler intercepts the \`in\` operator. It allows you to customize the behavior of checking for property existence.

### ⚙️ Solution Walkthrough
A proxy is created that hides properties that start with an underscore.
\`\`\`javascript
const target = { public: 1, _private: 2 };
const handler = {
  // trap for the 'in' operator
  has: function(obj, prop) {
    if (prop.startsWith('_')) {
      return false; // Lie and say it doesn't exist
    }
    return Reflect.has(obj, prop);
  }
};
const proxy = new Proxy(target, handler);

'public' in proxy;   // true
'_private' in proxy; // false
\`\`\`
### 📚 Key Concepts
- **Proxy \`has\` Trap**: A handler for intercepting the \`in\` operator.
`,

  // problem explanation--> 79
  "op-proxy-apply-trap": `
### 💡 Problem Breakdown
The \`apply\` trap is used when the proxy's target is a **function**. It intercepts calls to the function.

### ⚙️ Solution Walkthrough
A proxy is created around a function to log its arguments before calling it.
\`\`\`javascript
const targetFunc = (a, b) => a + b;
const handler = {
  // trap for function calls
  apply: function(target, thisArg, argumentsList) {
    console.log(\`Calling function with args: \${argumentsList}\`);
    // Forward the call to the original function using Reflect.apply
    return Reflect.apply(target, thisArg, argumentsList);
  }
};
const proxyFunc = new Proxy(targetFunc, handler);
proxyFunc(5, 10); // Logs the message and returns 15
\`\`\`
### 📚 Key Concepts
- **Proxy \`apply\` Trap**: A handler for intercepting function invocations.
`,

  // problem explanation--> 80
  "op-reflect-api": `
### 💡 Problem Breakdown
The \`Reflect\` object is a built-in object that provides methods for interceptable JavaScript operations. The methods on \`Reflect\` have a one-to-one correspondence with the proxy traps. For example, \`Reflect.get()\` corresponds to the \`get\` trap. It is considered a best practice to use these \`Reflect\` methods inside proxy traps to forward the operation to the target object.

### ⚙️ Solution Walkthrough
\`Reflect.get()\` and \`Reflect.set()\` are used inside a proxy handler.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  get: function(obj, prop) {
    console.log('Getting...');
    return Reflect.get(obj, prop); // Use Reflect.get
  },
  set: function(obj, prop, value) {
    console.log('Setting...');
    return Reflect.set(obj, prop, value); // Use Reflect.set
  }
};
const proxy = new Proxy(target, handler);
proxy.a = 2; // triggers set trap
\`\`\`
### 📚 Key Concepts
- **\`Reflect\`**: A standard library for meta-programming that mirrors the proxy traps.
`,

  // problem explanation--> 81
  "op-private-methods-with-sharp": `
### 💡 Problem Breakdown
In addition to private fields, the \`#\` syntax can be used to define private methods in an ES6 class. These methods are only callable from within the class itself.

### ⚙️ Solution Walkthrough
A private method \`#privateMethod\` is defined and called from a public method.
\`\`\`javascript
class MyClass {
  #privateMethod() {
    return "secret";
  }
  
  publicMethod() {
    // We can call the private method from here.
    return this.#privateMethod();
  }
}
const instance = new MyClass();
instance.publicMethod(); // "secret"
// instance.#privateMethod(); // SyntaxError
\`\`\`
### 📚 Key Concepts
- **Encapsulation**: Private methods provide a way to hide implementation details of a class.
`,

  // problem explanation--> 82
  "op-private-static-fields": `
### 💡 Problem Breakdown
You can combine the \`static\` and private (\`#\`) keywords to create private static fields. These are properties that belong to the class itself (not instances) and are only accessible from within the class's static context.

### ⚙️ Solution Walkthrough
A private static field \`#count\` is used as a counter.
\`\`\`javascript
class MyClass {
  static #count = 0; // Private static field
  
  static increment() {
    this.#count++;
  }
  
  static getCount() {
    return this.#count;
  }
}
MyClass.increment();
MyClass.getCount(); // 1
// MyClass.#count; // SyntaxError
\`\`\`
### 📚 Key Concepts
- **Static Members**: Properties and methods that belong to the class.
- **Private Members**: Fields and methods accessible only within the class.
`,

  // problem explanation--> 83
  "op-static-block": `
### 💡 Problem Breakdown
A \`static {}\` initialization block is a modern (ES2022) feature that allows for more complex, multi-statement initialization of static properties in a class. This block is executed once when the class is defined.

### ⚙️ Solution Walkthrough
A static block is used to initialize a static property based on another one.
\`\`\`javascript
class MyClass {
  static staticData;
  static #privateData = { value: 42 };

  static {
    // This block runs once when the class is defined.
    // It can access other static fields, including private ones.
    console.log("Static block is running...");
    this.staticData = this.#privateData;
  }
}
// MyClass.staticData is now { value: 42 }
\`\`\`
### 📚 Key Concepts
- **\`static\` Blocks**: A feature for complex static initialization in classes.
`,

  // problem explanation--> 84
  "op-error-cause-property": `
### 💡 Problem Breakdown
A modern JavaScript feature (ES2022) allows you to specify a \`cause\` for an error. This is extremely useful for wrapping a lower-level error in a more specific, higher-level error while preserving the original error for debugging purposes.

### ⚙️ Solution Walkthrough
A new \`Error\` is created with a \`cause\` property.
\`\`\`javascript
try {
  try {
    // Simulate a low-level network failure
    throw new Error("Network connection lost");
  } catch (lowLevelError) {
    // Wrap it in a higher-level error
    throw new Error("Failed to fetch user data", { cause: lowLevelError });
  }
} catch (highLevelError) {
  console.log(highLevelError.message); // "Failed to fetch user data"
  console.log(highLevelError.cause.message); // "Network connection lost"
}
\`\`\`
### 📚 Key Concepts
- **Error Chaining**: A pattern for creating a chain of errors that shows the root cause of a failure.
`,

  // problem explanation--> 85
  "op-object-hasown-static": `
### 💡 Problem Breakdown
\`Object.hasOwn()\` is a modern (ES2022) static method that is the recommended replacement for \`Object.prototype.hasOwnProperty()\`. It solves a few edge cases and is generally safer to use.

### ⚙️ Solution Walkthrough
\`Object.hasOwn()\` is used to check for an own property and an inherited one.
\`\`\`javascript
const proto = { inherited: true };
const obj = Object.create(proto);
obj.own = true;

Object.hasOwn(obj, 'own');       // true
Object.hasOwn(obj, 'inherited'); // false
\`\`\`
It's safer because it works correctly even on objects created with \`Object.create(null)\` (which don't have \`.hasOwnProperty\`) and objects that might have a property named \`hasOwnProperty\`.

### 📚 Key Concepts
- **\`Object.hasOwn()\`**: The modern, safe way to check for an object's own properties.
`,

  // problem explanation--> 86
  "op-prototype-pollution-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a type of security vulnerability. Prototype pollution occurs when an attacker finds a way to modify the properties of \`Object.prototype\`. Since most objects in JavaScript inherit from \`Object.prototype\`, this modification can affect almost every object in an application, potentially leading to denial-of-service or remote code execution. This often happens through unsafe merging of objects with user-supplied data.

### ⚙️ Solution Walkthrough
A conceptual example of an unsafe merge.
\`\`\`javascript
// Attacker sends a malicious JSON payload like:
// {"__proto__": {"isAdmin": true}}

// An unsafe recursive merge function might do this:
// merge(target, source) -> target["__proto__"]["isAdmin"] = true
// This modifies Object.prototype itself!

// Now, any new object will have this property:
const user = {};
// user.isAdmin is now true!
\`\`\`
### 📚 Key Concepts
- **Prototype Pollution**: A security vulnerability.
- **Defensive Programming**: Libraries should have checks to prevent modification of keys like \`__proto__\`, \`constructor\`, and \`prototype\`.
`,

  // problem explanation--> 87
  "op-null-prototype-object": `
### 💡 Problem Breakdown
This problem demonstrates how to create an object that does not inherit from \`Object.prototype\`. This is done using \`Object.create(null)\`. The resulting object is a "pure" dictionary that has no inherited properties or methods (like \`toString\`, \`hasOwnProperty\`, etc.).

### ⚙️ Solution Walkthrough
A null-prototype object is created.
\`\`\`javascript
const map = Object.create(null);
map.key = 'value';

// It has no inherited methods:
// map.toString(); // TypeError: map.toString is not a function

// It's a safe container for arbitrary key-value data.
\`\`\`
This is a good practice for creating hash maps where the keys might be user-supplied, as it prevents conflicts with built-in property names.

### 📚 Key Concepts
- **\`Object.create(null)\`**: A pattern for creating a secure, prototype-less object.
`,

  // problem explanation--> 88
  "op-weakmap-for-private-data": `
### 💡 Problem Breakdown
This problem demonstrates a classic pattern for creating private data associated with an object, used before the \`#\` private fields syntax was introduced. A \`WeakMap\` is used, where the object instances are the keys and an object of private data is the value.

### ⚙️ Solution Walkthrough
A \`WeakMap\` is used to store private data for a class.
\`\`\`javascript
const privateData = new WeakMap();

class Person {
  constructor(name) {
    // 'this' (the instance) is the key.
    privateData.set(this, { name: name });
  }
  getName() {
    return privateData.get(this).name;
  }
}
const p = new Person("Victor");
p.getName(); // "Victor"
\`\`\`
Because it's a \`WeakMap\`, if the \`p\` instance is garbage collected, its entry in the \`WeakMap\` will also be removed, preventing memory leaks.

### 📚 Key Concepts
- **\`WeakMap\`**: A map that holds weak references to its keys, allowing them to be garbage collected.
- **Closures**: The \`privateData\` map is kept in a closure, making it inaccessible from outside the module.
`,

  // problem explanation--> 89
  "op-isprototypeof": `
### 💡 Problem Breakdown
The \`.isPrototypeOf()\` method is the counterpart to \`instanceof\`. While \`instanceof\` checks if a constructor's prototype is in an object's chain (\`obj instanceof Ctor\`), \`.isPrototypeOf()\` checks if an object's prototype is in another object's chain (\`Ctor.prototype.isPrototypeOf(obj)\`).

### ⚙️ Solution Walkthrough
The method is used to check the prototype relationship directly.
\`\`\`javascript
function Animal() {}
const cat = new Animal();

// Is the Animal.prototype object a prototype of cat?
Animal.prototype.isPrototypeOf(cat); // true
Object.prototype.isPrototypeOf(cat); // true
\`\`\`
### 📚 Key Concepts
- **\`.isPrototypeOf()\`**: A method for directly checking the prototype chain relationship between two objects.
`,

  // problem explanation--> 90
  "op-object-tostring-tag": `
### 💡 Problem Breakdown
This problem introduces the well-known symbol \`Symbol.toStringTag\`. You can add this symbol as a property to your own objects to customize the string that is returned by the default \`Object.prototype.toString.call()\` method.

### ⚙️ Solution Walkthrough
A custom class gets a \`toStringTag\`.
\`\`\`javascript
class MyType {
  get [Symbol.toStringTag]() {
    return "MyType";
  }
}
const instance = new MyType();
Object.prototype.toString.call(instance); // "[object MyType]"
\`\`\`
This is useful for debugging and creating custom types that behave like built-in ones.

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
`,

  // problem explanation--> 91
  "op-class-private-getter-setter": `
### 💡 Problem Breakdown
The \`#\` syntax for private members can also be applied to getters and setters. This allows you to create private accessor properties that can only be used from within the class.

### ⚙️ Solution Walkthrough
A private getter/setter pair is created for a private field.
\`\`\`javascript
class MyClass {
  #value;
  
  get #doubled() {
    return this.#value * 2;
  }

  set #doubled(val) {
    this.#value = val / 2;
  }

  constructor(val) {
    this.#value = val;
  }

  useAccessors() {
    this.#doubled = 100; // uses the setter
    return this.#doubled; // uses the getter
  }
}
const instance = new MyClass(10);
instance.useAccessors(); // returns 100
\`\`\`
### 📚 Key Concepts
- **Private Class Members**: A comprehensive feature for encapsulation, applying to fields, methods, and accessors.
`,

  // problem explanation--> 92
  "op-factory-vs-constructor-conceptual": `
### 💡 Problem Breakdown
This is a conceptual comparison of two major patterns for object creation in JavaScript.
- **Constructors / Classes**:
  - **Pros**: Standard OOP syntax, methods are shared on the prototype (memory efficient), \`instanceof\` works as expected.
  - **Cons**: Requires the \`new\` keyword, \`this\` can be confusing.
- **Factory Functions**:
  - **Pros**: Simpler (just a function call), don't use \`new\` or \`this\`, can provide true privacy for data using closures.
  - **Cons**: Methods are often re-created for each instance (less memory efficient), \`instanceof\` doesn't work.

### 📚 Key Concepts
- **Design Patterns**: Understanding different approaches to a common problem (object creation) and their trade-offs.
`,

  // problem explanation--> 93
  "op-prototype-property-attributes": `
### 💡 Problem Breakdown
This problem explores the default property descriptors for methods added to a prototype. Unlike properties added with \`Object.defineProperty()\` (which default to \`false\`), methods added directly to the prototype object are enumerable, writable, and configurable by default.

### ⚙️ Solution Walkthrough
The descriptor for a prototype method is inspected.
\`\`\`javascript
function Person() {}
Person.prototype.greet = () => {};
const descriptor = Object.getOwnPropertyDescriptor(Person.prototype, 'greet');
// descriptor.enumerable is true
// descriptor.writable is true
// descriptor.configurable is true
\`\`\`
### 📚 Key Concepts
- **Property Descriptors**: The default attributes for properties depend on how they are created.
`,

  // problem explanation--> 94
  "op-shadowing-prototype-method": `
### 💡 Problem Breakdown
"Shadowing" occurs when a property on an instance has the same name as a property on its prototype. When the property is accessed on the instance, the instance's "own" property is found first and is returned, effectively hiding or "shadowing" the prototype property.

### ⚙️ Solution Walkthrough
An instance method shadows a prototype method.
\`\`\`javascript
class Parent {
  say() {
    return "Parent";
  }
}
const instance = new Parent();

// Add an 'own' property with the same name
instance.say = () => "Instance";

instance.say(); // "Instance"
\`\`\`
The lookup on the prototype chain stops as soon as the property is found on the instance itself.

### 📚 Key Concepts
- **Property Shadowing**: A direct consequence of how the prototype chain lookup works.
`,

  // problem explanation--> 95
  "op-object-seal-and-prototypes": `
### 💡 Problem Breakdown
This problem demonstrates that sealing an object with \`Object.seal()\` only affects the object itself. It has no effect on the object's prototype. You can still add, modify, or delete properties on the prototype, and the sealed object will see those changes through inheritance.

### ⚙️ Solution Walkthrough
A property is added to the prototype of a sealed object.
\`\`\`javascript
const proto = {};
const obj = Object.create(proto);
Object.seal(obj);

// Adding to the prototype still works
proto.newProp = true;

// The sealed object inherits the new property
obj.newProp; // true
\`\`\`
### 📚 Key Concepts
- **Shallow Operation**: \`Object.seal()\` only affects the target object, not its prototype.
`,

  // problem explanation--> 96
  "op-object-getownpropertynames": `
### 💡 Problem Breakdown
\`Object.getOwnPropertyNames()\` is a method that returns an array of all properties (including non-enumerable properties) found directly on a given object. It is similar to \`Object.keys()\` but includes non-enumerable properties. It does not include symbol-keyed properties.

### ⚙️ Solution Walkthrough
The method is used on an object with a non-enumerable property.
\`\`\`javascript
const obj = { a: 1 };
Object.defineProperty(obj, 'b', { value: 2, enumerable: false });

Object.keys(obj); // ['a']
Object.getOwnPropertyNames(obj); // ['a', 'b']
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: A method for getting a more complete list of an object's own properties.
`,

  // problem explanation--> 97
  "op-object-getownpropertysymbols": `
### 💡 Problem Breakdown
\`Object.getOwnPropertySymbols()\` is a method that returns an array of all symbol properties found directly upon a given object.

### ⚙️ Solution Walkthrough
The method is used to find a symbol-keyed property.
\`\`\`javascript
const sym = Symbol('s');
const obj = { [sym]: 1, a: 2 };

Object.getOwnPropertySymbols(obj); // [Symbol(s)]
\`\`\`
This is the primary way to discover symbol properties on an object if you don't have a reference to the symbols themselves.

### 📚 Key Concepts
- **Object Introspection**: A method specifically for discovering symbol properties.
`,

  // problem explanation--> 98
  "op-reflect-ownkeys": `
### 💡 Problem Breakdown
\`Reflect.ownKeys()\` provides the most complete list of an object's own properties. It returns an array of the target object's own property keys, which is equivalent to \`Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))\`.

### ⚙️ Solution Walkthrough
The method is used to get all string and symbol keys.
\`\`\`javascript
const sym = Symbol('s');
const obj = { a: 1, [sym]: 2 };
Object.defineProperty(obj, 'b', { value: 3 }); // non-enumerable

Reflect.ownKeys(obj); // ['a', 'b', Symbol(s)]
\`\`\`
### 📚 Key Concepts
- **\`Reflect\`**: A built-in object that provides methods for interceptable JavaScript operations.
- **Object Introspection**: \`Reflect.ownKeys()\` is the most comprehensive method for getting all own keys.
`,

  // problem explanation--> 99
  "op-proxy-deleteproperty-trap": `
### 💡 Problem Breakdown
The \`deleteProperty\` trap on a proxy handler intercepts the \`delete\` operator. It allows you to prevent a property from being deleted or to perform some action when a deletion is attempted.

### ⚙️ Solution Walkthrough
A proxy is created that prevents a property from being deleted.
\`\`\`javascript
'use strict';
const target = { a: 1 };
const handler = {
  deleteProperty: function(obj, prop) {
    if (prop === 'a') {
      console.log("Cannot delete property 'a'");
      return false; // Veto the deletion
    }
    return Reflect.deleteProperty(obj, prop);
  }
};
const proxy = new Proxy(target, handler);

// delete proxy.a; // Throws a TypeError in strict mode because the trap returned false.
\`\`\`
The trap must return a boolean indicating whether the deletion was successful.

### 📚 Key Concepts
- **Proxy \`deleteProperty\` Trap**: A handler for intercepting the \`delete\` operator.
`,

  // problem explanation--> 100
  "op-proxy-construct-trap": `
### 💡 Problem Breakdown
The \`construct\` trap is used when the proxy's target is a **constructor** (a class or a function). It intercepts the \`new\` operator. This allows you to customize the object creation process.

### ⚙️ Solution Walkthrough
A proxy is created around a class to modify the arguments passed to its constructor.
\`\`\`javascript
class Target {
  constructor(val) { this.val = val; }
}
const handler = {
  construct: function(target, args) {
    console.log('Intercepting construction...');
    // Create a new instance, but with a modified argument.
    return new target(args[0] * 10);
  }
};
const ProxyClass = new Proxy(Target, handler);

const instance = new ProxyClass(5);
// instance.val is 50
\`\`\`
### 📚 Key Concepts
- **Proxy \`construct\` Trap**: A handler for intercepting the \`new\` operator.
`,

  // problem explanation--> 101
  "op-json-replacer-function": `
### 💡 Problem Breakdown
The \`JSON.stringify\` method can take an optional second argument, a "replacer" function. This function is called for each key-value pair in the object being serialized, allowing you to modify or filter values before they are added to the JSON string.

### ⚙️ Solution Walkthrough
A replacer function is used to filter out a property named 'internalId'.
\`\`\`javascript
const user = { name: "Alice", age: 30, internalId: 123 };

const replacer = (key, value) => {
  // If the key is 'internalId', return undefined to exclude it.
  if (key === "internalId") {
    return undefined;
  }
  // Otherwise, return the value as is.
  return value;
};

JSON.stringify(user, replacer); // '{"name":"Alice","age":30}'
\`\`\`
1. **Replacer Function Signature**: It receives the \`key\` and \`value\` of the property being processed.
2. **Filtering**: If the replacer function returns \`undefined\`, the property is completely omitted from the final JSON string.
3. **Transformation**: You can also return a new value to transform it during serialization (e.g., converting a \`Date\` object to a specific string format).

### 📚 Key Concepts
- **\`JSON.stringify()\`**: A standard method for serializing JavaScript objects to JSON strings.
- **Replacer Function**: A powerful callback for customizing the JSON serialization process.
- **Serialization**: The process of converting an object into a storable or transmittable format.
`,

  // problem explanation--> 102
  "op-json-reviver-function": `
### 💡 Problem Breakdown
The \`JSON.parse\` method, the counterpart to \`JSON.stringify\`, can take an optional second argument: a "reviver" function. This function is called for each key-value pair during the parsing process, allowing you to transform values as they are being parsed.

### ⚙️ Solution Walkthrough
A reviver function is used to automatically convert a date string back into a JavaScript \`Date\` object.
\`\`\`javascript
const json = '{"name":"Bob","eventDate":"2024-01-01T00:00:00.000Z"}';

const reviver = (key, value) => {
  // If the key is 'eventDate', parse it into a Date object.
  if (key === "eventDate") {
    return new Date(value);
  }
  // Otherwise, return the value unchanged.
  return value;
};

const obj = JSON.parse(json, reviver);
// obj.eventDate is now a Date object, not a string.
\`\`\`
### 📚 Key Concepts
- **\`JSON.parse()\`**: A standard method for parsing JSON strings into JavaScript objects.
- **Reviver Function**: A callback for transforming data during the JSON parsing process.
- **Deserialization**: The process of converting a serialized format (like a JSON string) back into an object.
`,

  // problem explanation--> 103
  "op-object-fromEntries": `
### 💡 Problem Breakdown
\`Object.fromEntries()\` is a modern (ES2019) static method that performs the inverse operation of \`Object.entries()\`. It takes an iterable of key-value pairs (like an array of arrays) and transforms it into a new object.

### ⚙️ Solution Walkthrough
An object is created from an array of \`[key, value]\` pairs.
\`\`\`javascript
const entries = [
  ['a', 1],
  ['b', 2]
];

const obj = Object.fromEntries(entries);
// obj is { a: 1, b: 2 }
\`\`\`
This is particularly useful for transforming a \`Map\` object back into a plain object.

### 📚 Key Concepts
- **\`Object.fromEntries()\`**: A standard method for creating an object from an iterable of key-value pairs.
- **Data Transformation**: A convenient tool for converting between different data structures (e.g., Map to Object).
`,

  // problem explanation--> 104
  "op-well-known-symbol-species": `
### 💡 Problem Breakdown
This is a conceptual problem about an advanced feature. The well-known symbol \`Symbol.species\` allows a subclass to specify what constructor should be used when one of its inherited methods (like \`Array.prototype.map\`) needs to create a new instance. By default, the subclass's constructor is used.

### ⚙️ Solution Walkthrough
A custom array subclass overrides \`Symbol.species\` to ensure its \`.map()\` method returns a regular \`Array\`, not another instance of the subclass.
\`\`\`javascript
class MyArray extends Array {
  // Override the species to return the base Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}

const myArr = new MyArray(1, 2, 3);
const mapped = myArr.map(x => x * 2);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
\`\`\`
### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
- **\`Symbol.species\`**: Controls the constructor used for derived objects.
`,

  // problem explanation--> 105
  "op-private-static-methods": `
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
    // We can call the private static method from here.
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

  // problem explanation--> 106
  "op-ergonomic-brand-checks": `
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

  // problem explanation--> 107
  "op-optional-chaining-with-methods": `
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
If \`getName\` existed, it would be called. Since it doesn't, the expression short-circuits.

### 📚 Key Concepts
- **Optional Chaining**: A versatile operator that works for property access, method calls, and array access.
`,

  // problem explanation--> 108
  "op-prototype-of-function": `
### 💡 Problem Breakdown
This problem explores the prototype chain of functions themselves. In JavaScript, functions are objects. As such, they also have a prototype. The prototype of any function you create is the built-in \`Function.prototype\` object.

### ⚙️ Solution Walkthrough
\`Object.getPrototypeOf()\` is used on a simple function.
\`\`\`javascript
function myFunc() {}
const proto = Object.getPrototypeOf(myFunc);

console.log(proto === Function.prototype); // true
\`\`\`
This is why all functions inherit methods like \`.call()\`, \`.apply()\`, and \`.bind()\`.

### 📚 Key Concepts
- **Functions as Objects**: A core concept in JavaScript.
- **Prototype Chain**: The chain of inheritance applies to functions just like it does to other objects.
`,

  // problem explanation--> 109
  "op-constructor-property": `
### 💡 Problem Breakdown
Every object created from a constructor (or class) inherits a \`.constructor\` property from its prototype. This property is a reference that points back to the constructor function that created the instance.

### ⚙️ Solution Walkthrough
The \`.constructor\` property of an instance is inspected.
\`\`\`javascript
function Person() {}
const p = new Person();

console.log(p.constructor === Person); // true
\`\`\`
This can be useful for introspection or for creating a new instance of the same type as an existing instance.

### 📚 Key Concepts
- **\`.constructor\` Property**: A property on an object's prototype that points to the constructor function.
`,

  // problem explanation--> 110
  "op-set-prototype-of": `
### 💡 Problem Breakdown
\`Object.setPrototypeOf()\` is a method that sets the prototype (the internal \`[[Prototype]]\` property) of a specified object to another object or \`null\`. This allows you to change an object's inheritance chain at runtime.

### ⚙️ Solution Walkthrough
The prototype of an object is changed.
\`\`\`javascript
const proto = { greet: "hello" };
const obj = {};

Object.setPrototypeOf(obj, proto);

// 'obj' now inherits from 'proto'
console.log(obj.greet); // "hello"
\`\`\`
**Note**: Changing an object's prototype is a very slow operation in JavaScript engines and should generally be avoided in performance-critical code. It's better to set the prototype at creation time with \`Object.create()\`.

### 📚 Key Concepts
- **\`Object.setPrototypeOf()\`**: A method for dynamically changing an object's prototype.
`,

  // problem explanation--> 111
  "op-deep-clone-limitations-json": `
### 💡 Problem Breakdown
This problem highlights the significant limitations of using the \`JSON.stringify\`/\`JSON.parse\` trick for deep cloning. The JSON format can only represent a limited set of data types.

### ⚙️ Solution Walkthrough
An object with unsupported types is cloned.
\`\`\`javascript
const original = {
  u: undefined,
  d: new Date(),
  fn: () => {}
};

const copy = JSON.parse(JSON.stringify(original));
// copy is { d: "2024-..." }
\`\`\`
- **\`undefined\`**: Properties with the value \`undefined\` are completely omitted.
- **Functions and Symbols**: Are also omitted.
- **Dates**: Are converted into their ISO string representation, losing their \`Date\` object type.
- Other complex types like \`Map\`, \`Set\`, \`RegExp\` are not handled correctly.
For these reasons, \`structuredClone()\` is the modern, preferred solution.

### 📚 Key Concepts
- **JSON Format Limitations**: Understanding what data can and cannot be represented by JSON.
`,

  // problem explanation--> 112
  "op-for-in-and-prototype-chain": `
### 💡 Problem Breakdown
This problem demonstrates that the \`for...in\` loop will iterate over not only the object's "own" enumerable properties but also any enumerable properties it inherits from its prototype chain.

### ⚙️ Solution Walkthrough
A property is added to a prototype, and \`for...in\` finds it.
\`\`\`javascript
const proto = { inherited: true };
const obj = Object.create(proto);
obj.own = true;

let keys = '';
for (const key in obj) {
  keys += key + ' ';
}
// keys will be "own inherited" (order not guaranteed)
\`\`\`
This is why it's a common practice to use a \`.hasOwnProperty()\` check inside a \`for...in\` loop if you only want to process the object's own properties.

### 📚 Key Concepts
- **\`for...in\` Loop**: Iterates over inherited enumerable properties.
`,

  // problem explanation--> 113
  "op-class-fields-initialization-order": `
### 💡 Problem Breakdown
This problem clarifies the initialization order in an ES6 class.
1.  Parent class fields are initialized.
2.  Parent class constructor runs.
3.  Child class fields are initialized.
4.  Child class constructor runs.

This means that class fields are always initialized *before* the constructor body of their respective class runs.

### ⚙️ Solution Walkthrough
A class logs messages to show the order.
\`\`\`javascript
let log = [];
class MyClass {
  field = log.push('field initialized'); // This runs first
  constructor() {
    log.push('constructor ran'); // This runs second
  }
}
new MyClass();
// log will be ["field initialized", "constructor ran"]
\`\`\`

### 📚 Key Concepts
- **Class Initialization Order**: A specific sequence that ensures properties are available when the constructor code executes.
`,

  // problem explanation--> 114
  "op-super-outside-class-error": `
### 💡 Problem Breakdown
This is a conceptual problem about a syntactic rule. The \`super\` keyword is special and is only valid within the context of a derived class. Using \`super\` outside of a class declaration (or an object literal with a prototype) is a \`SyntaxError\`.

### ⚙️ Solution Walkthrough
The invalid syntax is shown.
\`\`\`javascript
// This is invalid code and will not run
// function myFunc() {
//   super(); // SyntaxError: 'super' is only valid in derived class constructors
// }
\`\`\`
\`super\` has a dynamic meaning that depends on the class context, so it cannot exist on its own.

### 📚 Key Concepts
- **\`super\`**: A context-dependent keyword reserved for use within classes.
`,

  // problem explanation--> 115
  "op-object-is-comparison": `
### 💡 Problem Breakdown
This problem compares two ways to check for equality. \`Object.is()\` behaves very similarly to the strict equality operator (\`===\`), but it differs in two edge cases:
1. \`Object.is(NaN, NaN)\` is \`true\`, while \`NaN === NaN\` is \`false\`.
2. \`Object.is(0, -0)\` is \`false\`, while \`0 === -0\` is \`true\`.

### ⚙️ Solution Walkthrough
The differences are demonstrated directly.
\`\`\`javascript
Object.is(NaN, NaN); // true
Object.is(0, -0); // false
\`\`\`
For all other values, \`Object.is(a, b)\` is the same as \`a === b\`.

### 📚 Key Concepts
- **\`Object.is()\`**: A method for checking "same-value" equality, which is slightly more precise than strict equality for certain edge cases.
`,

  // problem explanation--> 116
  "op-proxy-get-prototype-of-trap": `
### 💡 Problem Breakdown
The \`getPrototypeOf\` trap on a proxy handler intercepts calls to \`Object.getPrototypeOf()\`. This allows you to control what is reported as the proxy's prototype.

### ⚙️ Solution Walkthrough
A proxy lies about its prototype.
\`\`\`javascript
const target = {};
const customProto = { isCustom: true };
const handler = {
  getPrototypeOf(obj) {
    return customProto;
  }
};
const proxy = new Proxy(target, handler);

Object.getPrototypeOf(proxy) === customProto; // true
\`\`\`
### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 117
  "op-proxy-set-prototype-of-trap": `
### 💡 Problem Breakdown
The \`setPrototypeOf\` trap on a proxy handler intercepts calls to \`Object.setPrototypeOf()\`. This allows you to prevent the prototype of an object from being changed, or to perform some action when a change is attempted.

### ⚙️ Solution Walkthrough
A proxy prevents its prototype from being changed.
\`\`\`javascript
const target = {};
const handler = {
  setPrototypeOf(obj, proto) {
    console.log("Prototype change blocked!");
    return false; // Veto the operation
  }
};
const proxy = new Proxy(target, handler);

// Object.setPrototypeOf(proxy, {}); // Logs the message and throws TypeError in strict mode
\`\`\`
### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 118
  "op-proxy-is-extensible-trap": `
### 💡 Problem Breakdown
The \`isExtensible\` trap on a proxy handler intercepts calls to \`Object.isExtensible()\`. This allows you to control the reported extensibility of the proxy.

### ⚙️ Solution Walkthrough
A proxy reports that it is not extensible, even if its target is.
\`\`\`javascript
const target = {}; // Extensible by default
const handler = {
  isExtensible(obj) {
    return false; // Lie and say it's not extensible
  }
};
const proxy = new Proxy(target, handler);

Object.isExtensible(proxy); // false
\`\`\`
### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 119
  "op-proxy-prevent-extensions-trap": `
### 💡 Problem Breakdown
The \`preventExtensions\` trap on a proxy handler intercepts calls to \`Object.preventExtensions()\`. This allows you to customize the behavior when code attempts to make the proxy non-extensible.

### ⚙️ Solution Walkthrough
A proxy logs a message when \`preventExtensions\` is called.
\`\`\`javascript
const target = {};
const handler = {
  preventExtensions(obj) {
    console.log('Preventing extensions...');
    return Reflect.preventExtensions(obj);
  }
};
const proxy = new Proxy(target, handler);
Object.preventExtensions(proxy); // Logs the message
\`\`\`
### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 120
  "op-proxy-define-property-trap": `
### 💡 Problem Breakdown
The \`defineProperty\` trap on a proxy handler intercepts calls to \`Object.defineProperty()\`. This gives you fine-grained control over how properties are defined on the proxy.

### ⚙️ Solution Walkthrough
A proxy prevents properties from being made non-writable.
\`\`\`javascript
const target = {};
const handler = {
  defineProperty(obj, prop, descriptor) {
    if (descriptor.writable === false) {
      throw new Error('Cannot make properties non-writable!');
    }
    return Reflect.defineProperty(obj, prop, descriptor);
  }
};
const proxy = new Proxy(target, handler);
// Object.defineProperty(proxy, 'a', { value: 1, writable: false }); // Throws error
\`\`\`
### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 121
  "op-proxy-get-own-property-descriptor-trap": `
### 💡 Problem Breakdown
The \`getOwnPropertyDescriptor\` trap on a proxy handler intercepts calls to \`Object.getOwnPropertyDescriptor()\`. This allows you to customize the property descriptor that is reported for a property.

### ⚙️ Solution Walkthrough
A proxy hides a property by reporting its descriptor as \`undefined\`.
\`\`\`javascript
const target = { _private: 1 };
const handler = {
  getOwnPropertyDescriptor(obj, prop) {
    if (prop.startsWith('_')) {
      return undefined; // Lie and say it doesn't have this own property
    }
    return Reflect.getOwnPropertyDescriptor(obj, prop);
  }
};
const proxy = new Proxy(target, handler);
Object.getOwnPropertyDescriptor(proxy, '_private'); // undefined
\`\`\`
### 📚 Key Concepts
- **Proxy Traps**: Handlers that intercept fundamental JavaScript operations.
`,

  // problem explanation--> 122
  "op-revocable-proxy": `
### 💡 Problem Breakdown
\`Proxy.revocable()\` is a factory method that creates a proxy that can be "turned off." It returns an object with two properties: \`proxy\` and \`revoke\`. Calling the \`revoke()\` function disables the proxy, and any further operations on it will throw a \`TypeError\`.

### ⚙️ Solution Walkthrough
A proxy is created and then revoked.
\`\`\`javascript
const target = { a: 1 };
const { proxy, revoke } = Proxy.revocable(target, {});

console.log(proxy.a); // 1

revoke(); // Turn off the proxy

// console.log(proxy.a); // Throws TypeError
\`\`\`
This is useful for managing access to an object and being able to completely cut off that access when it's no longer needed.

### 📚 Key Concepts
- **Revocable Proxy**: A proxy that can be disabled.
- **Resource Management**: A pattern for controlling access to an object.
`,

  // problem explanation--> 123
  "op-this-in-static-method": `
### 💡 Problem Breakdown
This problem clarifies the context of \`this\` inside a \`static\` class method. Unlike an instance method, where \`this\` refers to the instance, \`this\` inside a \`static\` method refers to the **class constructor** itself.

### ⚙️ Solution Walkthrough
A static method accesses \`this.name\`, which refers to the \`name\` property of the class constructor function.
\`\`\`javascript
class MyClass {
  static whoAmI() {
    return this.name; // 'this' refers to MyClass
  }
}
MyClass.whoAmI(); // "MyClass"
\`\`\`
This allows static methods to call other static methods or access other static properties using \`this\`.

### 📚 Key Concepts
- **\`this\` Keyword**: Its value is determined by how the function is called. Static methods are called on the class.
`,

  // problem explanation--> 124
  "op-class-expression": `
### 💡 Problem Breakdown
Similar to function expressions, a class can also be defined using a **class expression**. This involves creating a class (which can be named or anonymous) and assigning it to a variable.

### ⚙️ Solution Walkthrough
A class is assigned to a constant.
\`\`\`javascript
const MyClass = class {
  constructor(name) {
    this.name = name;
  }
};

const instance = new MyClass('Test');
\`\`\`
Like function expressions, class expressions are not hoisted, meaning you cannot use them before they are defined.

### 📚 Key Concepts
- **Class Expression**: An alternative syntax for defining classes.
`,

  // problem explanation--> 125
  "op-prototype-property-shadowing": `
### 💡 Problem Breakdown
"Shadowing" occurs when you assign a value to a property on an instance that has the same name as a property on its prototype. This creates a new "own" property on the instance that hides, or "shadows," the prototype property.

### ⚙️ Solution Walkthrough
An instance property shadows a prototype property.
\`\`\`javascript
const proto = { value: 'proto' };
const instance = Object.create(proto);

console.log(instance.value); // 'proto' (from prototype)

// This creates an 'own' property on the instance.
instance.value = 'instance';

console.log(instance.value); // 'instance' (the own property is found first)
console.log(proto.value);    // 'proto' (the prototype is unchanged)
\`\`\`
### 📚 Key Concepts
- **Property Shadowing**: A direct consequence of how the prototype chain lookup works.
`,

  // problem explanation--> 126
  "op-constructor-return-value-primitive": `
### 💡 Problem Breakdown
This problem explores a specific rule of the \`new\` operator. If a constructor function explicitly returns a primitive value (a string, number, boolean, etc.), that \`return\` statement is ignored, and the newly created instance (\`this\`) is returned as usual.

### ⚙️ Solution Walkthrough
A constructor tries to return a number.
\`\`\`javascript
function Ctor() {
  this.a = 1;
  return 5; // This primitive return value is ignored.
}
const instance = new Ctor();
// instance is { a: 1 }, not 5.
\`\`\`
### 📚 Key Concepts
- **\`new\` Operator Behavior**: A specific rule for how \`return\` statements are handled in constructors.
`,

  // problem explanation--> 127
  "op-constructor-return-value-object": `
### 💡 Problem Breakdown
This is the counterpart to the previous problem. If a constructor function explicitly returns a non-primitive value (an object or an array), that object is returned as the result of the \`new\` expression, and the newly created instance (\`this\`) is discarded.

### ⚙️ Solution Walkthrough
A constructor returns an explicit object.
\`\`\`javascript
const explicitObj = { custom: true };
function Ctor() {
  this.a = 1; // This 'this' object is discarded
  return explicitObj;
}
const instance = new Ctor();

// instance is the explicitObj, not { a: 1 }
console.log(instance.custom); // true
\`\`\`
This is a rarely used feature but demonstrates the full behavior of the \`new\` operator.

### 📚 Key Concepts
- **\`new\` Operator Behavior**: A specific rule for how \`return\` statements are handled in constructors.
`,

  // problem explanation--> 128
  "op-object-assign-multiple-sources": `
### 💡 Problem Breakdown
\`Object.assign()\` can take multiple source objects. It copies the properties from all source objects into the target object in the order they are provided. If multiple sources have a property with the same key, the value from the last source object wins.

### ⚙️ Solution Walkthrough
Properties from two sources are merged into a target.
\`\`\`javascript
const target = { a: 1 };
const source1 = { b: 2, c: 3 };
const source2 = { c: 4, d: 5 };

Object.assign(target, source1, source2);
// target is { a: 1, b: 2, c: 4, d: 5 }
\`\`\`
The \`c\` property from \`source2\` overwrites the one from \`source1\`.

### 📚 Key Concepts
- **\`Object.assign()\`**: A versatile method for copying and merging objects.
`,

  // problem explanation--> 129
  "op-object-is-sealed": `
### 💡 Problem Breakdown
The \`Object.isSealed()\` method is used to determine if an object has been sealed with \`Object.seal()\`. An object is sealed if it is not extensible and all of its properties are non-configurable.

### ⚙️ Solution Walkthrough
The status of an object is checked after sealing.
\`\`\`javascript
const obj = { a: 1 };
console.log(Object.isSealed(obj)); // false
Object.seal(obj);
console.log(Object.isSealed(obj)); // true
\`\`\`
A frozen object is also considered sealed.

### 📚 Key Concepts
- **Object Introspection**: Checking an object's state.
`,

  // problem explanation--> 130
  "op-object-is-extensible": `
### 💡 Problem Breakdown
The \`Object.isExtensible()\` method determines if new properties can be added to an object. By default, objects are extensible.

### ⚙️ Solution Walkthrough
The status is checked after calling \`Object.preventExtensions()\`.
\`\`\`javascript
const obj = { a: 1 };
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false
\`\`\`
Both sealed and frozen objects are also non-extensible.

### 📚 Key Concepts
- **Object Introspection**: Checking an object's state.
`,

  // problem explanation--> 131
  "op-class-private-static-methods": `
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
    // We can call the private static method from here.
    return this.#privateStaticHelper();
  }
}
MyClass.publicStaticMethod();
\`\`\`
### 📚 Key Concepts
- **Static Members**: Methods that belong to the class, not instances.
- **Private Members**: Methods that provide encapsulation.
`,

  // problem explanation--> 132
  "op-private-field-in-operator-check": `
### 💡 Problem Breakdown
This problem demonstrates a modern (ES2022) and very reliable way to check if an object is a true instance of a class. A better way than \`instanceof\` is to check for the presence of a private class field using the \`in\` operator.

### ⚙️ Solution Walkthrough
A static method uses the \`in\` operator to check for a private field.
\`\`\`javascript
class MyClass {
  #brand; // A private field that exists on every instance.
  
  static isMyClass(obj) {
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

  // problem explanation--> 133
  "op-class-fields-vs-constructor-properties": `
### 💡 Problem Breakdown
This is a conceptual problem about the two ways to define properties in a class.
- **Class Fields**: \`myProp = 'value';\` defined at the top level of the class. They are cleaner for simple assignments and are added to the instance *before* the constructor runs.
- **Constructor Properties**: \`this.myProp = 'value';\` defined inside the constructor. They are necessary when the property's value depends on a constructor argument.

### ⚙️ Solution Walkthrough
Both achieve a similar result of creating an "own" property on the instance, but their syntax and use cases differ slightly.
\`\`\`javascript
class MyClass {
  // Class field
  isInitialized = true;

  // Constructor property
  constructor(name) {
    this.name = name;
  }
}
\`\`\`
### 📚 Key Concepts
- **Class Syntax**: Understanding the different places to define properties.
`,

  // problem explanation--> 134
  "op-class-with-no-constructor": `
### 💡 Problem Breakdown
This problem demonstrates that if you do not provide a \`constructor\` method for a class, a default empty one is automatically provided for you.

### ⚙️ Solution Walkthrough
A class is defined without a constructor.
\`\`\`javascript
class MyClass {}
// This is equivalent to:
// class MyClass {
//   constructor() {}
// }
const instance = new MyClass(); // This works perfectly.
\`\`\`
For a subclass, the default constructor automatically calls \`super()\` with any arguments passed to it.

### 📚 Key Concepts
- **Default Constructor**: A convenience provided by the language for classes without explicit constructors.
`,

  // problem explanation--> 135
  "op-super-property-access": `
### 💡 Problem Breakdown
In a child class, the \`super\` keyword can be used to access properties and methods from the parent's prototype. \`super.propertyName\` looks up the property on the prototype of the current object's prototype.

### ⚙️ Solution Walkthrough
A child class accesses a parent's getter.
\`\`\`javascript
class Parent {
  get name() { return 'Parent'; }
}
class Child extends Parent {
  get name() {
    return super.name + ' & Child';
  }
}
new Child().name; // 'Parent & Child'
\`\`\`
### 📚 Key Concepts
- **\`super\`**: A keyword for accessing parent class members.
`,

  // problem explanation--> 136
  "op-well-known-symbol-tostringtag": `
### 💡 Problem Breakdown
This problem introduces the well-known symbol \`Symbol.toStringTag\`. You can add this symbol as a property to your own objects to customize the string that is returned by the default \`Object.prototype.toString.call()\` method.

### ⚙️ Solution Walkthrough
A custom class gets a \`toStringTag\`.
\`\`\`javascript
class MyType {
  get [Symbol.toStringTag]() {
    return "MyCustomType";
  }
}
const instance = new MyType();
Object.prototype.toString.call(instance); // "[object MyCustomType]"
\`\`\`
### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
`,

  // problem explanation--> 137
  "op-functional-inheritance-pattern": `
### 💡 Problem Breakdown
This is a conceptual problem about an alternative to prototypal or class-based inheritance. In functional inheritance, a factory function creates a "base" object and then enhances it with new properties and methods before returning it. It relies on closures, not prototypes.

### ⚙️ Solution Walkthrough
A conceptual example.
\`\`\`javascript
const person = (name) => ({
  sayName: () => console.log(name)
});

const employee = (name, title) => {
  const self = person(name); // Create a base object
  self.sayTitle = () => console.log(title);
  return self;
};

const emp = employee('Bob', 'Developer');
\`\`\`
### 📚 Key Concepts
- **Composition over Inheritance**: A design principle favored by this pattern.
- **Closures**: Used to achieve data privacy.
`,

  // problem explanation--> 138
  "op-method-chaining": `
### 💡 Problem Breakdown
Method chaining is a popular pattern where methods on an object return the object itself (\`this\`), allowing you to call multiple methods in a single, fluent expression.

### ⚙️ Solution Walkthrough
A simple class is implemented with chainable methods.
\`\`\`javascript
class Calc {
  constructor() { this.value = 0; }
  add(n) {
    this.value += n;
    return this; // Return the instance to allow chaining
  }
  multiply(n) {
    this.value *= n;
    return this;
  }
}
const result = new Calc().add(5).multiply(2).value; // result is 10
\`\`\`
### 📚 Key Concepts
- **Fluent Interface**: A design pattern that provides a more readable API by allowing chained calls.
`,

  // problem explanation--> 139
  "op-deep-clone-with-recursion": `
### 💡 Problem Breakdown
This problem asks for the implementation of a basic deep cloning function using recursion. The function must handle primitives, arrays, and plain objects.

### ⚙️ Solution Walkthrough
The function recursively traverses the object. It creates a new object or array at each level and copies the properties, making recursive calls for any nested objects.
\`\`\`javascript
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  
  const newObj = Array.isArray(obj) ? [] : {};
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  
  return newObj;
}
\`\`\`
### 📚 Key Concepts
- **Recursion**: A natural fit for processing nested data structures.
`,

  // problem explanation--> 140
  "op-prototype-of-class": `
### 💡 Problem Breakdown
This problem explores the "meta" level of classes. A class declaration itself, e.g., \`class C {}\`, creates a constructor function. Since all functions are objects that inherit from \`Function.prototype\`, a class constructor is no different.

### ⚙️ Solution Walkthrough
The prototype of the class constructor itself is inspected.
\`\`\`javascript
class MyClass {}
Object.getPrototypeOf(MyClass) === Function.prototype; // true
\`\`\`
### 📚 Key Concepts
- **Classes as Functions**: ES6 classes are primarily syntactic sugar over constructor functions.
`,

  // problem explanation--> 141
  "op-this-binding-precedence": `
### 💡 Problem Breakdown
This is a conceptual problem that summarizes the rules of precedence for determining the value of \`this\` when multiple rules could apply. The order is as follows:
1.  **\`new\` Binding**: If the function is called with \`new\`, \`this\` is the newly created object.
2.  **Explicit Binding**: If the function is called with \`.call()\`, \`.apply()\`, or \`.bind()\`, \`this\` is the object that was explicitly provided.
3.  **Method Call Binding**: If the function is called as a method of an object (\`obj.myFunc()\`), \`this\` is the object.
4.  **Default Binding**: If none of the other rules apply, \`this\` is the global object (\`window\` in browsers) in non-strict mode, or \`undefined\` in strict mode.

Arrow functions are a special case; they don't have their own \`this\` and are not subject to these rules.

### 📚 Key Concepts
- **\`this\` Binding Rules**: The hierarchy that determines the context of a function call.
`,

  // problem explanation--> 142
  "op-prototype-of-class-prototype": `
### 💡 Problem Breakdown
This problem delves one level deeper into the prototype chain. A class \`C\` has a \`C.prototype\` property. This problem asks for the prototype of *that* object. For a base class, its prototype object inherits directly from \`Object.prototype\`.

### ⚙️ Solution Walkthrough
The prototype chain is inspected.
\`\`\`javascript
class MyClass {}
// The prototype of the class's prototype is Object.prototype
Object.getPrototypeOf(MyClass.prototype) === Object.prototype; // true
\`\`\`
### 📚 Key Concepts
- **Prototype Chain**: Understanding the complete chain from instance to \`Object.prototype\`.
`,

  // problem explanation--> 143
  "op-for-in-vs-object-keys": `
### 💡 Problem Breakdown
This problem provides a direct comparison between two ways of iterating over object properties.
- **\`for...in\`**: Iterates over all **enumerable** properties of an object, including those it inherits from its prototype chain.
- **\`Object.keys()\`**: Returns an array of an object's **own enumerable** properties, ignoring the prototype chain.

### ⚙️ Solution Walkthrough
The two methods are used on an object with an inherited property.
\`\`\`javascript
const proto = { inherited: 1 };
const obj = Object.create(proto);
obj.own = 2;
// for...in will loop over 'own' and 'inherited'
// Object.keys(obj) will return ['own']
\`\`\`
### 📚 Key Concepts
- **Own vs. Inherited Properties**: A key distinction in JavaScript's object model.
`,

  // problem explanation--> 144
  "op-well-known-symbol-hasinstance": `
### 💡 Problem Breakdown
This is an advanced conceptual problem. You can customize the behavior of the \`instanceof\` operator for a class by implementing a static method with the well-known symbol \`Symbol.hasInstance\`.

### ⚙️ Solution Walkthrough
A class customizes the \`instanceof\` check.
\`\`\`javascript
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
[] instanceof MyArray; // true, because our custom logic was used.
\`\`\`
This allows you to define what it means for an object to be an "instance" of your class, even if it wasn't created by its constructor.

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into and customizing internal language behaviors.
`,

  // problem explanation--> 145
  "op-reflect-construct": `
### 💡 Problem Breakdown
The \`Reflect\` API provides a set of methods for meta-programming. \`Reflect.construct()\` is the functional equivalent of the \`new\` operator. It calls a constructor function to create a new instance.

### ⚙️ Solution Walkthrough
\`Reflect.construct()\` is used to create an instance.
\`\`\`javascript
class C {
  constructor(a) { this.a = a; }
}
const instance = Reflect.construct(C, [10]); // target, argumentsList
// instance is a new C with { a: 10 }
\`\`\`
This is particularly useful inside proxy traps.

### 📚 Key Concepts
- **\`Reflect\` API**: A modern API for meta-programming.
`,

  // problem explanation--> 146
  "op-reflect-getprototypeof": `
### 💡 Problem Breakdown
\`Reflect.getPrototypeOf()\` is the functional equivalent of \`Object.getPrototypeOf()\`. It's part of the \`Reflect\` API and is the recommended way to get an object's prototype, especially within proxy traps.

### ⚙️ Solution Walkthrough
The method is used to inspect a prototype.
\`\`\`javascript
const obj = {};
Reflect.getPrototypeOf(obj) === Object.prototype; // true
\`\`\`
### 📚 Key Concepts
- **\`Reflect\` API**: Provides methods that correspond to fundamental language operations.
`,

  // problem explanation--> 147
  "op-object-create-with-properties": `
### 💡 Problem Breakdown
The \`Object.create()\` method can take an optional second argument. This argument is a properties object, the same kind of object used by \`Object.defineProperties()\`, which allows you to define "own" properties for the new object with specific property descriptors.

### ⚙️ Solution Walkthrough
An object is created with a prototype and an own property.
\`\`\`javascript
const proto = { inherited: true };
const obj = Object.create(proto, {
  own: {
    value: true,
    enumerable: true
  }
});
// obj has its own 'own' property and inherits 'inherited'.
\`\`\`
### 📚 Key Concepts
- **\`Object.create()\`**: A versatile method for object creation.
- **Property Descriptors**: The low-level mechanism for defining property attributes.
`,

  // problem explanation--> 148
  "op-class-with-dynamic-method-name": `
### 💡 Problem Breakdown
ES6 classes support computed property names, just like object literals. This allows you to define a method with a name that is determined by a variable or expression at runtime.

### ⚙️ Solution Walkthrough
A method name is stored in a variable.
\`\`\`javascript
const methodName = 'myDynamicMethod';
class C {
  [methodName]() {
    return 'Dynamic!';
  }
}
const instance = new C();
instance.myDynamicMethod(); // 'Dynamic!'
\`\`\`
### 📚 Key Concepts
- **Computed Property Names**: A flexible syntax that applies to both object literals and class bodies.
`,

  // problem explanation--> 149
  "op-proxy-for-validation": `
### 💡 Problem Breakdown
This problem shows a practical use case for a \`Proxy\`. By using a \`set\` trap, you can validate data before it's assigned to an object's property, ensuring the object's state remains consistent.

### ⚙️ Solution Walkthrough
A proxy is created to ensure \`age\` is a number.
\`\`\`javascript
const target = {};
const handler = {
  set(obj, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number.');
    }
    return Reflect.set(...arguments); // Forward the operation
  }
};
const proxy = new Proxy(target, handler);
// proxy.age = 'invalid'; // Throws TypeError
\`\`\`
### 📚 Key Concepts
- **Proxy \`set\` Trap**: A powerful hook for data validation.
`,

  // problem explanation--> 150
  "op-proxy-for-default-values": `
### 💡 Problem Breakdown
This shows another practical use case for a \`Proxy\`. A \`get\` trap can be used to return a default value for any property that does not exist on the target object, preventing \`undefined\`-related errors.

### ⚙️ Solution Walkthrough
A proxy's \`get\` trap returns a default value.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  get(obj, prop) {
    return Reflect.has(obj, prop) ? Reflect.get(obj, prop) : 'default';
  }
};
const proxy = new Proxy(target, handler);
proxy.b; // 'default'
\`\`\`
### 📚 Key Concepts
- **Proxy \`get\` Trap**: A hook for intercepting property reads.
`,

  // problem explanation--> 151
  "op-weakset-for-object-tracking": `
### 💡 Problem Breakdown
A \`WeakSet\` is a special collection object that only stores objects and holds them "weakly." This means that if an object in the \`WeakSet\` has no other references to it in the program, it can be garbage collected. This makes \`WeakSet\` ideal for tracking a group of objects without causing memory leaks.

### ⚙️ Solution Walkthrough
An object is added to a \`WeakSet\`. When the only reference to that object is removed, it becomes eligible for garbage collection, and will eventually be removed from the \`WeakSet\`.
\`\`\`javascript
const ws = new WeakSet();
let obj1 = { id: 1 };
let obj2 = { id: 2 };

ws.add(obj1);
ws.add(obj2);

ws.has(obj1); // true

// Remove the only strong reference to obj1
obj1 = null; 

// After garbage collection (which is non-deterministic), 
// ws.has(obj1) would become false.
\`\`\`

### 📚 Key Concepts
- **Weak References**: A reference that does not prevent an object from being garbage collected.
- **Memory Management**: \`WeakSet\` is a tool for managing memory by avoiding unintentional memory leaks.
`,

  // problem explanation--> 152
  "op-finalization-registry-conceptual": `
### 💡 Problem Breakdown
This is an advanced conceptual problem. A \`FinalizationRegistry\` (ES2021) provides a way to request a callback to be run after an object has been garbage collected. This is used for cleanup of resources that are not managed by JavaScript's memory manager (e.g., a file handle or a connection to a WebAssembly module).

### ⚙️ Solution Walkthrough
A conceptual example of its usage.
\`\`\`javascript
// Create a registry with a cleanup callback
const registry = new FinalizationRegistry(heldValue => {
  console.log(\`An object was garbage collected, cleaning up: \${heldValue}\`);
});

(function() {
  const obj = {};
  // Register 'obj'. When 'obj' is garbage collected,
  // the callback will be called with "SomeResourceID".
  registry.register(obj, "SomeResourceID");
})();
// Sometime after this IIFE finishes, the message will be logged.
\`\`\`
**Important**: The callback is not guaranteed to run, and if it does, its timing is unpredictable. It should only be used for cleanup, not for any critical application logic.

### 📚 Key Concepts
- **Garbage Collection**: The process that triggers the registry's callback.
- **Resource Management**: The primary use case for this advanced API.
`,

  // problem explanation--> 153
  "op-this-in-getter-setter": `
### 💡 Problem Breakdown
This problem confirms the context of \`this\` within getter and setter methods. Just like regular instance methods, \`this\` inside a getter or setter refers to the object instance on which the property is being accessed or modified.

### ⚙️ Solution Walkthrough
A class uses \`this\` to access a private-like backing field from its getter and setter.
\`\`\`javascript
class Person {
  constructor(name) {
    this._name = name; // Backing field
  }
  get name() {
    console.log("Getter called");
    return this._name;
  }
  set name(value) {
    console.log("Setter called");
    this._name = value.toUpperCase();
  }
}

const p = new Person("alice");
p.name = "bob"; // Triggers the setter, 'this' is 'p'
console.log(p.name); // Triggers the getter, 'this' is 'p'
\`\`\`

### 📚 Key Concepts
- **\`this\` Keyword**: Its context is determined by how the function (or accessor) is invoked. Property access/assignment is a form of method call on the instance.
`,

  // problem explanation--> 154
  "op-object-is-vs-triple-equals": `
### 💡 Problem Breakdown
This is a summary problem comparing the strict equality operator (\`===\`) with the \`Object.is()\` method. They are almost identical, but differ in two specific edge cases.

### ⚙️ Solution Walkthrough
The differences are demonstrated directly.
\`\`\`javascript
// Difference 1: NaN
NaN === NaN;           // false
Object.is(NaN, NaN); // true

// Difference 2: Zeroes
0 === -0;           // true
Object.is(0, -0); // false
\`\`\`
For all other comparisons, \`Object.is(a, b)\` is the same as \`a === b\`. You should use \`Object.is\` only when you specifically need to handle these edge cases differently.

### 📚 Key Concepts
- **\`Object.is()\`**: A method for "same-value" equality, which is slightly more precise than strict equality.
`,

  // problem explanation--> 155
  "op-parasitic-combination-inheritance-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the most robust pattern for implementing prototypal inheritance in ES5 (before the \`class\` keyword). It combines "constructor stealing" with a clean prototype chain setup to correctly inherit both own properties and prototype methods.

### ⚙️ Solution Walkthrough
The pattern has two main parts.
\`\`\`javascript
function Parent(name) {
  this.name = name; // Own property
}
Parent.prototype.greet = function() { /* ... */ }; // Prototype method

function Child(name, title) {
  // 1. Constructor Stealing: Call the parent constructor for own properties.
  Parent.call(this, name);
  this.title = title;
}

// 2. Clean Prototype Chain: Create a new object with the parent's prototype,
//    and assign it as the child's prototype.
Child.prototype = Object.create(Parent.prototype);
// Reset the constructor property.
Child.prototype.constructor = Child;
\`\`\`
This pattern correctly sets up inheritance without the side effects of older patterns (like \`Child.prototype = new Parent()\`). ES6 \`class\` syntax handles all of this automatically.

### 📚 Key Concepts
- **Prototypal Inheritance**: The classic patterns for achieving inheritance in JavaScript.
`,

  // problem explanation--> 156
  "op-class-private-brand-check-error": `
### 💡 Problem Breakdown
This problem demonstrates the strong encapsulation provided by private class fields. If you attempt to access a private field on an object that is not an instance of the class where the field was defined, JavaScript will throw a \`TypeError\`.

### ⚙️ Solution Walkthrough
An attempt is made to call a method that accesses a private field, but on the wrong type of object.
\`\`\`javascript
class MyClass {
  #privateField = 42;
  
  getValue() {
    return this.#privateField;
  }
}

const instance = new MyClass();
const impostor = {};

instance.getValue(); // Works, returns 42

// This will throw a TypeError because 'impostor' does not have the #privateField.
// MyClass.prototype.getValue.call(impostor); // Throws TypeError
\`\`\`
This behavior is the basis for the "ergonomic brand check" (\`#field in obj\`), as it's a reliable way to check if an object is a true instance of a class.

### 📚 Key Concepts
- **Encapsulation**: Private fields provide strong guarantees about an object's internal state.
`,

  // problem explanation--> 157
  "op-well-known-symbol-isconcatspreadable": `
### 💡 Problem Breakdown
This is a conceptual problem about another well-known symbol, \`Symbol.isConcatSpreadable\`. This boolean property controls whether an object should be "spread" (flattened) when passed to the \`Array.prototype.concat()\` method. By default, arrays are spreadable, and most other objects are not.

### ⚙️ Solution Walkthrough
An array-like object is made non-spreadable.
\`\`\`javascript
const arr = [3, 4];
arr[Symbol.isConcatSpreadable] = false;

const result = [1, 2].concat(arr);
// result is [1, 2, [3, 4]]
// The 'arr' was added as a single element instead of being flattened.
\`\`\`
This gives you fine-grained control over how your custom objects behave when combined with standard array methods.

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
`,

  // problem explanation--> 158
  "op-prototype-of-arrow-function": `
### 💡 Problem Breakdown
This problem reinforces a key characteristic of arrow functions. Unlike functions created with the \`function\` keyword, arrow functions do **not** have a \`.prototype\` property.

### ⚙️ Solution Walkthrough
The \`.prototype\` property of an arrow function is checked.
\`\`\`javascript
const myArrowFunc = () => {};
console.log(myArrowFunc.prototype); // undefined
\`\`\`
This is because arrow functions are not designed to be used as constructors. They cannot be called with the \`new\` keyword, so they don't need a \`.prototype\` property to assign to new instances.

### 📚 Key Concepts
- **Arrow Functions**: Designed to be lightweight and lexically bind \`this\`; they lack the full functionality of traditional functions, including being constructors.
`,

  // problem explanation--> 159
  "op-object-create-null-for-map": `
### 💡 Problem Breakdown
This problem demonstrates a best practice for using plain JavaScript objects as hash maps or dictionaries. If you use a standard object literal (\`{}\`), it inherits from \`Object.prototype\`, which has properties like \`toString\`. A user-supplied key could accidentally collide with these built-in properties.

### ⚙️ Solution Walkthrough
Using \`Object.create(null)\` creates an object with no prototype, making it a "clean" key-value store.
\`\`\`javascript
const map = Object.create(null);

// You can now safely use any key, even 'toString'.
map.toString = "my value";
console.log(map.toString); // "my value"

const unsafeMap = {};
// This does not assign a value, it just references the inherited method.
console.log(unsafeMap.toString); // [Function: toString]
\`\`\`
### 📚 Key Concepts
- **Prototype Pollution Prevention**: A key reason to use null-prototype objects for maps.
- **\`Object.create(null)\`**: A pattern for creating a secure, prototype-less object.
`,

  // problem explanation--> 160
  "op-object-tostring-for-type-checking": `
### 💡 Problem Breakdown
This problem shows a classic, highly reliable trick for determining the precise internal type of a JavaScript value. Calling the original \`Object.prototype.toString\` method with a different \`this\` context (using \`.call()\`) will return a string in the format \`[object Type]\`.

### ⚙️ Solution Walkthrough
The method is used on different data types.
\`\`\`javascript
Object.prototype.toString.call([]);        // "[object Array]"
Object.prototype.toString.call(new Date()); // "[object Date]"
Object.prototype.toString.call(null);     // "[object Null]"
Object.prototype.toString.call(/.*/);     // "[object RegExp]"
\`\`\`
This is more specific and reliable than the \`typeof\` operator, which returns \`"object"\` for all of these.

### 📚 Key Concepts
- **\`.call()\`**: Used to change the \`this\` context of a function call.
- **Introspection**: A technique for examining the type or properties of an object at runtime.
`,

  // problem explanation--> 161
  "op-prototype-constructor-correction": `
### 💡 Problem Breakdown
This shows a common step when manually setting up prototypal inheritance in ES5. When you overwrite a function's prototype (e.g., \`Child.prototype = Object.create(Parent.prototype)\`), you also overwrite its original \`.constructor\` property. It's good practice to reset it back to the child constructor.

### ⚙️ Solution Walkthrough
The constructor property is manually corrected.
\`\`\`javascript
function Parent() {}
function Child() {}
Child.prototype = Object.create(Parent.prototype);

// At this point, new Child().constructor would be Parent.
// This corrects it:
Child.prototype.constructor = Child;

const c = new Child();
console.log(c.constructor === Child); // true
\`\`\`
ES6 \`class\` syntax handles this correction automatically.

### 📚 Key Concepts
- **Prototypal Inheritance**: A detail of setting up inheritance manually.
`,

  // problem explanation--> 162
  "op-this-in-arrow-function-global": `
### 💡 Problem Breakdown
This problem clarifies the \`this\` context for an arrow function defined in the global scope. An arrow function always inherits \`this\` from its lexical (surrounding) scope. For a function defined at the top level of a script, this scope is the global scope.

### ⚙️ Solution Walkthrough
A global arrow function is defined.
\`\`\`javascript
// In a browser environment
const getGlobalThis = () => this;
console.log(getGlobalThis() === window); // true
\`\`\`
In a browser, the global \`this\` is the \`window\` object. In a Node.js module, it would be \`module.exports\`.

### 📚 Key Concepts
- **Lexical \`this\`**: The core rule for \`this\` in arrow functions.
`,

  // problem explanation--> 163
  "op-object-fromEntries-with-map": `
### 💡 Problem Breakdown
An ES6 \`Map\` is an iterable of \`[key, value]\` pairs. \`Object.fromEntries()\` is designed to take exactly this kind of iterable and convert it into a plain object. This is the standard way to convert a Map to an Object.

### ⚙️ Solution Walkthrough
A \`Map\` is passed to \`Object.fromEntries\`.
\`\`\`javascript
const map = new Map([
  ['a', 1],
  ['b', 2]
]);
const obj = Object.fromEntries(map);
// obj is { a: 1, b: 2 }
\`\`\`
This can be useful when you need a plain object for reasons like JSON serialization, as \`Map\`s don't serialize directly.

### 📚 Key Concepts
- **\`Object.fromEntries()\`**: The inverse of \`Object.entries()\`.
- **Data Transformation**: A tool for converting between data structures.
`,

  // problem explanation--> 164
  "op-class-private-static-getter": `
### 💡 Problem Breakdown
You can combine the \`static\`, \`get\`, and private (\`#\`) syntaxes to create a private static getter. This is an accessor property that belongs to the class itself and can only be accessed from within the class's static context.

### ⚙️ Solution Walkthrough
A private static getter is defined.
\`\`\`javascript
class MyClass {
  static get #secret() {
    return 42;
  }
  static getPublicSecret() {
    return this.#secret; // Access the private static getter
  }
}
MyClass.getPublicSecret(); // 42
\`\`\`

### 📚 Key Concepts
- **Class Features**: Combining static, private, and accessor features.
`,

  // problem explanation--> 165
  "op-reflect-has": `
### 💡 Problem Breakdown
\`Reflect.has()\` is a method on the \`Reflect\` object that provides a functional way to perform the same check as the \`in\` operator. It returns \`true\` if a property exists on an object or its prototype chain.

### ⚙️ Solution Walkthrough
The method checks for an own and inherited property.
\`\`\`javascript
const obj = { a: 1 };
Reflect.has(obj, 'a');        // true
Reflect.has(obj, 'toString'); // true
\`\`\`
Using \`Reflect.has()\` is the recommended approach inside a proxy \`has\` trap.

### 📚 Key Concepts
- **\`Reflect\` API**: A library of methods for meta-programming.
`,

  // problem explanation--> 166
  "op-reflect-deleteproperty": `
### 💡 Problem Breakdown
\`Reflect.deleteProperty()\` is the functional equivalent of the \`delete\` operator. It takes an object and a property key, attempts to delete the property, and returns a boolean indicating whether the deletion was successful.

### ⚙️ Solution Walkthrough
A property is deleted using \`Reflect\`.
\`\`\`javascript
const obj = { a: 1 };
Reflect.deleteProperty(obj, 'a'); // true
console.log(obj.a); // undefined
\`\`\`
This is the recommended way to forward a \`delete\` operation from within a proxy \`deleteProperty\` trap.

### 📚 Key Concepts
- **\`Reflect\` API**: A library of methods for meta-programming.
`,

  // problem explanation--> 167
  "op-proxy-for-logging": `
### 💡 Problem Breakdown
This is a practical example of using a \`Proxy\` to create a wrapper around an object that logs all interactions. By implementing the \`get\` and \`set\` traps, we can intercept and log every property read and write.

### ⚙️ Solution Walkthrough
A proxy handler is created with logging \`get\` and \`set\` traps.
\`\`\`javascript
const target = { value: 0 };
const handler = {
  get(obj, prop) {
    console.log(\`[LOG] Getting property: \${String(prop)}\`);
    return Reflect.get(...arguments);
  },
  set(obj, prop, value) {
    console.log(\`[LOG] Setting property: \${String(prop)} to \${value}\`);
    return Reflect.set(...arguments);
  }
};
const proxy = new Proxy(target, handler);

proxy.value; // Logs "Getting property: value"
proxy.value = 10; // Logs "Setting property: value to 10"
\`\`\`

### 📚 Key Concepts
- **Proxy Traps**: A powerful tool for debugging, validation, and creating observable objects.
- **\`Reflect\`**: Used to safely forward the original operation after logging.
`,

  // problem explanation--> 168
  "op-object-property-shorthand-and-methods": `
### 💡 Problem Breakdown
ES6 introduced a concise syntax for defining methods in object literals. Instead of writing \`myMethod: function() {}\`, you can simply write \`myMethod() {}\`.

### ⚙️ Solution Walkthrough
An object is created with a shorthand method.
\`\`\`javascript
const calculator = {
  // Instead of: add: function(a, b) { ... }
  add(a, b) {
    return a + b;
  }
};
calculator.add(5, 3); // 8
\`\`\`
This syntax is functionally equivalent to the older version but is cleaner and more readable.

### 📚 Key Concepts
- **Method Shorthand**: An ES6 syntax sugar for object literals.
`,

  // problem explanation--> 169
  "op-prototype-of-null": `
### 💡 Problem Breakdown
This problem explores an edge case. The \`Object.getPrototypeOf()\` method is designed to take an object. Since \`null\` is a primitive value (despite \`typeof null\` being \`"object"\`), passing it to this method will result in a \`TypeError\`.

### ⚙️ Solution Walkthrough
The code attempts to get the prototype of \`null\`.
\`\`\`javascript
// Object.getPrototypeOf(null); // Throws TypeError: Cannot convert undefined or null to object
\`\`\`
This is consistent with the idea that the prototype chain ends at \`null\`, so \`null\` itself does not have a prototype.

### 📚 Key Concepts
- **Error Handling**: Understanding how built-in methods handle invalid inputs.
`,

  // problem explanation--> 170
  "op-this-in-event-listener-with-bind": `
### 💡 Problem Breakdown
This problem shows the classic pattern for preserving the \`this\` context in event handlers before arrow functions became widespread. When you pass a class method as a callback, its \`this\` context is lost. Using \`.bind(this)\` in the constructor creates a new function with \`this\` permanently bound to the class instance.

### ⚙️ Solution Walkthrough
A conceptual example of binding a method in a constructor.
\`\`\`javascript
class MyComponent {
  constructor() {
    this.message = 'Clicked!';
    // 'this.handleClick' would lose its context.
    // 'this.handleClick.bind(this)' creates a new function with the correct 'this'.
    // button.addEventListener('click', this.handleClick.bind(this));
  }
  handleClick() {
    console.log(this.message);
  }
}
\`\`\`
The modern alternative is to use an arrow function as a class field: \`handleClick = () => { ... }\`.

### 📚 Key Concepts
- **\`.bind()\`**: A method for creating a new function with a fixed \`this\` context.
- **Losing \`this\`**: A common problem when methods are used as callbacks.
`,

  // problem explanation--> 171
  "op-class-fields-with-this": `
### 💡 Problem Breakdown
This problem demonstrates the initialization order of class fields. A class field initializer is evaluated during instance construction and has access to \`this\`. This means it can reference properties that were already set in the constructor (specifically, after \`super()\` in a subclass).

### ⚙️ Solution Walkthrough
A class field uses \`this\` to initialize its value.
\`\`\`javascript
class MyClass {
  constructor() {
    this.base = 10;
  }
  // This field initializer runs after the constructor body has set 'this.base'.
  doubled = this.base * 2;
}

const instance = new MyClass();
// instance.doubled is 20
\`\`\`
This can be useful, but be aware that fields are initialized in the order they are defined.

### 📚 Key Concepts
- **Class Fields**: A modern syntax for defining instance properties.
- **Initialization Order**: Understanding when fields are initialized relative to the constructor.
`,

  // problem explanation--> 172
  "op-object-defineproperty-getter-setter": `
### 💡 Problem Breakdown
This problem shows how to use \`Object.defineProperty\` to create an "accessor property" that has both a getter and a setter.

### ⚙️ Solution Walkthrough
A property \`fullName\` is defined with a getter and a setter.
\`\`\`javascript
const obj = {
  _firstName: '',
  _lastName: ''
};
Object.defineProperty(obj, 'fullName', {
  get() {
    return \`\${this._firstName} \${this._lastName}\`;
  },
  set(value) {
    [this._firstName, this._lastName] = value.split(' ');
  }
});

obj.fullName = 'Jane Doe';
console.log(obj.fullName); // "Jane Doe"
\`\`\`

### 📚 Key Concepts
- **Accessor Properties**: Properties defined by \`get\` and \`set\` functions instead of a static value.
- **\`Object.defineProperty\`**: The low-level method for creating accessor properties.
`,

  // problem explanation--> 173
  "op-prototype-chain-length": `
### 💡 Problem Breakdown
The task is to write a function that measures the length of an object's prototype chain. The chain starts at the object itself and ends when the prototype is \`null\`.

### ⚙️ Solution Walkthrough
An iterative solution using a \`while\` loop is straightforward.
\`\`\`javascript
function getChainLength(obj) {
  let count = 0;
  let current = obj;
  while (current !== null) {
    count++;
    current = Object.getPrototypeOf(current);
  }
  return count;
}
const arr = [];
// Chain is: arr -> Array.prototype -> Object.prototype -> null (length 4)
getChainLength(arr); // 4
\`\`\`

### 📚 Key Concepts
- **Prototype Chain**: The linked list of prototypes that an object inherits from.
- **\`Object.getPrototypeOf()\`**: The standard method for walking up the prototype chain.
`,

  // problem explanation--> 174
  "op-immutable-update-pattern": `
### 💡 Problem Breakdown
This demonstrates a core pattern of immutable programming. Instead of mutating an object declared with \`const\`, you create a **new** object that contains all the properties of the original, plus the new or updated property. The spread syntax (\`...\`) makes this very clean.

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
- **Immutability**: The practice of not changing data structures, but instead creating new ones.
- **Spread Syntax**: A concise way to copy properties into a new object.
`,

  // problem explanation--> 175
  "op-deep-clone-and-prototypes": `
### 💡 Problem Breakdown
This is a conceptual problem about a major limitation of most deep cloning methods, including the new \`structuredClone()\` and the old JSON trick. These methods are designed to copy the "data" of an object (its own properties). They do **not** preserve the object's prototype chain.

### ⚙️ Solution Walkthrough
A cloned instance loses its connection to its class.
\`\`\`javascript
class MyClass { greet() {} }
const instance = new MyClass();

const cloned = structuredClone(instance);

console.log(cloned instanceof MyClass); // false
// 'cloned' is a plain object, not an instance of MyClass.
\`\`\`
If you need to deep clone an object while preserving its class/prototype, you need a more sophisticated, custom cloning library.

### 📚 Key Concepts
- **Deep Clone**: Typically only copies own data properties, not the prototype.
`,

  // problem explanation--> 176
  "op-sealed-object-modification": `
### 💡 Problem Breakdown
This problem reinforces the behavior of \`Object.seal()\`. Sealing an object prevents adding or deleting properties, but it does **not** prevent the modification of the values of existing, writable properties.

### ⚙️ Solution Walkthrough
A property of a sealed object is changed.
\`\`\`javascript
const obj = { a: 1 };
Object.seal(obj);

obj.a = 99; // This is allowed.
// obj.b = 2; // This is not allowed.
\`\`\`

### 📚 Key Concepts
- **\`Object.seal()\`**: Makes an object's structure non-configurable but leaves its values writable.
`,

  // problem explanation--> 177
  "op-constructor-without-new-error": `
### 💡 Problem Breakdown
This problem demonstrates a key safety feature of ES6 classes. A class constructor **must** be called with the \`new\` keyword. Calling it like a regular function will result in a \`TypeError\`.

### ⚙️ Solution Walkthrough
An attempt is made to call a class constructor without \`new\`.
\`\`\`javascript
class MyClass {}
// MyClass(); // Throws TypeError: Class constructor MyClass cannot be invoked without 'new'
\`\`\`
This is a major improvement over old constructor functions, which, if called without \`new\`, would often pollute the global object.

### 📚 Key Concepts
- **Class Constructors**: Have stricter invocation rules than traditional constructor functions.
`,

  // problem explanation--> 178
  "op-proxy-invariants-conceptual": `
### 💡 Problem Breakdown
This is an advanced conceptual problem about \`Proxy\` objects. To maintain the fundamental consistency of the JavaScript language, proxy traps are not allowed to do anything they want. They must obey certain "invariants." An invariant is a rule that must always hold true.

### ⚙️ Solution Walkthrough
An example of an invariant for the \`deleteProperty\` trap.
- **Invariant**: If a property on the target object is non-configurable, the \`deleteProperty\` trap *must* return \`false\`. It cannot lie and claim to have deleted a property that is impossible to delete.
\`\`\`javascript
const target = {};
Object.defineProperty(target, 'a', { configurable: false });
const handler = {
  deleteProperty() { return true; } // This violates the invariant
};
const proxy = new Proxy(target, handler);
// delete proxy.a; // Throws TypeError: 'deleteProperty' on proxy: trap returned truish for property 'a' which is non-configurable in the proxy target
\`\`\`
Each trap has its own set of invariants that must be followed.

### 📚 Key Concepts
- **Proxy Invariants**: Rules that ensure proxies do not break the fundamental semantics of JavaScript objects.
`,

  // problem explanation--> 179
  "op-well-known-symbol-unscopables": `
### 💡 Problem Breakdown
This is a conceptual problem about a legacy feature. The \`with\` statement is deprecated, but to support it, JavaScript has a mechanism to control which properties are exposed inside a \`with\` block. An object can have a property with the well-known symbol \`Symbol.unscopables\`. The value of this property is an object whose keys are the names of properties to hide from the \`with\` statement's scope.

### ⚙️ Solution Walkthrough
\`Array.prototype\` has a \`[Symbol.unscopables]\` property to hide newer methods from legacy code that might be using \`with\`.
\`\`\`javascript
console.log(Array.prototype[Symbol.unscopables]);
// { copyWithin: true, entries: true, fill: true, find: true, ... }
\`\`\`
This is almost never used in modern code because the \`with\` statement itself should not be used.

### 📚 Key Concepts
- **\`with\` Statement**: A deprecated feature to be avoided.
- **Well-Known Symbols**: A mechanism for customizing low-level JavaScript behaviors.
`,

  // problem explanation--> 180
  "op-object-destructuring-and-getters": `
### 💡 Problem Breakdown
This problem shows that destructuring is not just a simple assignment; it's an operation that involves accessing properties. If a property is defined with a getter method, that method will be executed during the destructuring process.

### ⚙️ Solution Walkthrough
A getter method logs a message when it's called.
\`\`\`javascript
const obj = {
  get name() {
    console.log('Getter for "name" was called!');
    return 'Test';
  }
};
const { name } = obj; // This line triggers the getter.
\`\`\`
### 📚 Key Concepts
- **Getters**: Special methods for retrieving the value of a property.
- **Destructuring**: An operation that involves property access.
`,

  // problem explanation--> 181
  "op-object-destructuring-assignment-with-setters": `
### 💡 Problem Breakdown
This is a conceptual problem showing the counterpart to getters. If you use a destructuring pattern on the left side of an assignment to an object that has a setter for that property, the setter method will be executed.

### ⚙️ Solution Walkthrough
Conceptual code for a setter.
\`\`\`javascript
const obj = {
  _name: '',
  set name(value) {
    console.log('Setter for "name" was called!');
    this._name = value;
  }
};
// Destructuring on the LEFT side of an assignment
({ name: obj.name } = { name: 'Alice' }); 
\`\`\`
This pattern is much less common than destructuring from an object but shows the completeness of the feature.

### 📚 Key Concepts
- **Setters**: Special methods for setting the value of a property.
`,

  // problem explanation--> 182
  "op-this-in-a-module": `
### 💡 Problem Breakdown
This is a conceptual problem about the context of \`this\` in an ES Module. Unlike a classic script where the top-level \`this\` refers to the global object (\`window\`), in an ES module, the value of \`this\` at the top level is **\`undefined\`**.

### ⚙️ Solution Walkthrough
- **\`classic.js\`**: \`console.log(this === window); // true\`
- **\`module.js\`**: \`console.log(this); // undefined\`

This is a deliberate design choice to prevent modules from accidentally modifying the global object and to provide a cleaner environment.

### 📚 Key Concepts
- **Module Scope**: ES Modules have their own scope, and this includes having a different \`this\` binding.
`,

  // problem explanation--> 183
  "op-prototype-of-class-instance": `
### 💡 Problem Breakdown
This problem reinforces the connection between a class instance and its prototype. When you create an instance with \`new MyClass()\`, the internal prototype of the new instance is set to \`MyClass.prototype\`.

### ⚙️ Solution Walkthrough
\`Object.getPrototypeOf()\` is used to inspect the instance's prototype.
\`\`\`javascript
class MyClass {}
const instance = new MyClass();

console.log(Object.getPrototypeOf(instance) === MyClass.prototype); // true
\`\`\`

### 📚 Key Concepts
- **\`class\` Syntax**: A syntactic sugar over the underlying constructor function and prototype mechanism.
`,

  // problem explanation--> 184
  "op-class-private-getter-setter-validation": `
### 💡 Problem Breakdown
This problem shows a practical use case for private setters. You can expose a public setter that then calls a private setter to perform validation before assigning a value to a private field.

### ⚙️ Solution Walkthrough
A class validates a name's length using a private setter.
\`\`\`javascript
class Person {
  #name;
  
  set #setName(value) {
    if (value.length < 2) throw new Error("Name is too short");
    this.#name = value;
  }

  set name(value) {
    this.#setName = value;
  }
  
  get name() {
    return this.#name;
  }
}
const p = new Person();
// p.name = 'A'; // Throws an error
\`\`\`
### 📚 Key Concepts
- **Encapsulation**: Using private members to control how an object's state can be changed.
`,

  // problem explanation--> 185
  "op-prevent-extensions-and-prototypes": `
### 💡 Problem Breakdown
This problem shows that making an object non-extensible with \`Object.preventExtensions()\` only affects the object itself. It does not prevent you from adding new properties to its prototype, and the instance will still be able to access these new inherited properties.

### ⚙️ Solution Walkthrough
A property is added to the prototype of a non-extensible object.
\`\`\`javascript
const proto = {};
const obj = Object.create(proto);
Object.preventExtensions(obj);

// Adding a new property to the prototype still works.
proto.newProp = true;

// The instance can access the new inherited property.
console.log(obj.newProp); // true
\`\`\`

### 📚 Key Concepts
- **Shallow Operation**: \`Object.preventExtensions()\` only affects the target object, not its prototype.
`,

  // problem explanation--> 186
  "op-well-known-symbol-toprimitive": `
### 💡 Problem Breakdown
This is an advanced conceptual problem. An object can customize how it is converted to a primitive value (e.g., when used in an arithmetic operation like \`+\` or a string context) by implementing a method with the key \`Symbol.toPrimitive\`.

### ⚙️ Solution Walkthrough
A conceptual object with a custom primitive conversion.
\`\`\`javascript
const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return 42;
    if (hint === 'string') return 'hello';
    return true; // default
  }
};

console.log(obj * 2);      // 84 (hint was 'number')
console.log(\`\${obj}\`); // "hello" (hint was 'string')
\`\`\`

### 📚 Key Concepts
- **Well-Known Symbols**: A mechanism for hooking into and customizing internal language behaviors.
`,

  // problem explanation--> 187
  "op-subclassing-array": `
### 💡 Problem Breakdown
You can create a custom class that inherits from built-in JavaScript classes like \`Array\` using the \`extends\` keyword. This allows you to create specialized array-like objects with custom methods.

### ⚙️ Solution Walkthrough
A \`MyArray\` class extends \`Array\` and adds a \`.last()\` method.
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
Instances of \`MyArray\` will have all the standard array methods (\`.map\`, \`.filter\`, etc.) as well as the new custom methods.

### 📚 Key Concepts
- **Class Inheritance**: The \`extends\` keyword can be used with built-in constructors.
`,

  // problem explanation--> 188
  "op-new-target-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about an ES6 meta-property. \`new.target\` is available inside any function.
- If the function is called with the \`new\` keyword (as a constructor), \`new.target\` will be a reference to the constructor function itself.
- If the function is called normally (not as a constructor), \`new.target\` will be \`undefined\`.

### ⚙️ Solution Walkthrough
A conceptual function checks how it was called.
\`\`\`javascript
function MyConstructor() {
  if (!new.target) {
    throw 'MyConstructor must be called with new';
  }
  console.log("Called correctly as a constructor.");
}
new MyConstructor();
\`\`\`
This was used to make old-style constructor functions safer before ES6 classes made calling without \`new\` a \`TypeError\` by default.

### 📚 Key Concepts
- **\`new.target\`**: A meta-property for introspecting how a function was invoked.
`,

  // problem explanation--> 189
  "op-object-create-and-constructor": `
### 💡 Problem Breakdown
This problem demonstrates how the \`.constructor\` property is inherited. When you create an object using \`Object.create(SomePrototype)\`, the new object does not have its own \`.constructor\` property. When you access \`.constructor\` on it, the lookup goes up the prototype chain and finds the \`.constructor\` property on \`SomePrototype\`.

### ⚙️ Solution Walkthrough
The \`.constructor\` of an object created with \`Object.create\` is inspected.
\`\`\`javascript
function C() {}
const obj = Object.create(C.prototype);

console.log(obj.constructor === C); // true
\`\`\`
The \`obj\` itself doesn't have a constructor property, but its prototype (\`C.prototype\`) does, and it points to \`C\`.

### 📚 Key Concepts
- **Prototype Chain**: The mechanism for inheriting properties.
`,

  // problem explanation--> 190
  "op-proxy-for-caching": `
### 💡 Problem Breakdown
This problem shows a practical use case for a \`Proxy\`: creating a cache or memoizing function results. A \`get\` trap can intercept property access. If the value has already been computed and is in a cache, it can be returned directly. Otherwise, it can be computed, stored in the cache, and then returned.

### ⚙️ Solution Walkthrough
A proxy is used to cache the results of an expensive calculation.
\`\`\`javascript
const expensiveService = {
  calculate(n) { console.log('Calculating...'); return n * 2; }
};
const cache = new Map();
const handler = {
  get(target, prop) {
    if (prop === 'calculate') {
      return (n) => {
        if (cache.has(n)) return cache.get(n);
        const result = target.calculate(n);
        cache.set(n, result);
        return result;
      };
    }
    return target[prop];
  }
};
const proxy = new Proxy(expensiveService, handler);
proxy.calculate(5); // Logs "Calculating..."
proxy.calculate(5); // Does not log, returns from cache
\`\`\`
### 📚 Key Concepts
- **Proxy \`get\` Trap**: Intercepts property reads to inject caching logic.
- **Memoization**: A performance optimization technique.
`,

  // problem explanation--> 191
  "op-class-static-inheritance": `
### 💡 Problem Breakdown
This problem demonstrates that when a class \`extends\` another, it inherits not only the instance methods (via the prototype chain) but also the \`static\` methods and properties.

### ⚙️ Solution Walkthrough
A child class calls a static method inherited from its parent.
\`\`\`javascript
class Parent {
  static staticMethod() {
    return 'Hello from Parent';
  }
}
class Child extends Parent {}

Child.staticMethod(); // 'Hello from Parent'
\`\`\`
This works because the prototype of the \`Child\` constructor is the \`Parent\` constructor.

### 📚 Key Concepts
- **Class Inheritance**: The \`extends\` keyword sets up inheritance for both instance and static members.
`,

  // problem explanation--> 192
  "op-multiple-inheritance-with-mixins": `
### 💡 Problem Breakdown
This problem shows a pattern for simulating multiple inheritance in JavaScript, which does not support it natively. The "mixin" pattern involves creating objects that contain a set of methods and then using \`Object.assign\` to copy those methods onto a single class's prototype.

### ⚙️ Solution Walkthrough
Methods from two mixin objects are applied to a class.
\`\`\`javascript
const canFly = { fly() { return 'Flying!'; } };
const canSwim = { swim() { return 'Swimming!'; } };

class Duck {
  quack() { return 'Quack!'; }
}
// Apply both mixins
Object.assign(Duck.prototype, canFly, canSwim);

const duck = new Duck();
duck.fly(); // 'Flying!'
duck.swim(); // 'Swimming!'
\`\`\`
### 📚 Key Concepts
- **Composition over Inheritance**: A design principle where objects gain functionality by being composed of smaller pieces of functionality (mixins) rather than inheriting from multiple parents.
`,

  // problem explanation--> 193
  "op-object-seal-on-array": `
### 💡 Problem Breakdown
This problem explores the effect of \`Object.seal()\` on an array. Since arrays are objects, they can be sealed. A sealed array behaves as follows:
- Existing elements **can** be changed.
- No new elements **can** be added (e.g., via \`.push()\` or direct assignment to a new index).
- No existing elements **can** be removed (e.g., via \`.pop()\` or \`delete\`).

### ⚙️ Solution Walkthrough
An attempt is made to push to a sealed array.
\`\`\`javascript
'use strict';
const arr = [1, 2];
Object.seal(arr);

arr[0] = 99; // This works.
// arr.push(3); // This would throw a TypeError in strict mode.
\`\`\`

### 📚 Key Concepts
- **\`Object.seal()\`**: Prevents additions and deletions, making an object's structure fixed.
`,

  // problem explanation--> 194
  "op-null-vs-undefined-in-properties": `
### 💡 Problem Breakdown
This is a conceptual problem about the semantic difference between \`null\` and \`undefined\` as property values.
- **\`undefined\`**: Typically means a property has not been assigned a value. It's the default state.
- **\`null\`**: Represents the intentional absence of a value. It means a developer has explicitly set the property to have "no value".

### ⚙️ Solution Walkthrough
A key practical difference is how they are handled by \`JSON.stringify\`.
\`\`\`javascript
const obj = {
  a: undefined,
  b: null
};

JSON.stringify(obj); // '{"b":null}'
\`\`\`
Properties with \`undefined\` values are omitted, while properties with \`null\` values are included.

### 📚 Key Concepts
- **\`undefined\` vs. \`null\`**: A subtle but important distinction in JavaScript.
`,

  // problem explanation--> 195
  "op-prototype-of-object-prototype": `
### 💡 Problem Breakdown
This problem explores the very end of the prototype chain. Every object in JavaScript inherits properties from other objects, forming a chain. The final link in this chain for almost all objects is \`Object.prototype\`. This problem asks: what is the prototype of \`Object.prototype\` itself?

### ⚙️ Solution Walkthrough
\`Object.getPrototypeOf()\` is called on \`Object.prototype\`.
\`\`\`javascript
Object.getPrototypeOf(Object.prototype); // null
\`\`\`
The result is \`null\`, which signifies the end of the prototype chain.

### 📚 Key Concepts
- **Prototype Chain**: A linked list of objects that terminates with \`null\`.
`,

  // problem explanation--> 196
  "op-json-stringify-and-prototypes": `
### 💡 Problem Breakdown
This problem demonstrates that the \`JSON.stringify()\` method only serializes an object's **own enumerable** properties. It completely ignores any properties that the object inherits from its prototype chain.

### ⚙️ Solution Walkthrough
An object with an inherited property is serialized.
\`\`\`javascript
const proto = { inherited: 1 };
const obj = Object.create(proto);
obj.own = 2;

JSON.stringify(obj); // '{"own":2}'
// The 'inherited' property is not included in the output.
\`\`\`

### 📚 Key Concepts
- **\`JSON.stringify()\`**: A method for serializing an object's own data state.
`,

  // problem explanation--> 197
  "op-this-in-destructured-method": `
### 💡 Problem Breakdown
This problem shows another common way the "losing \`this\`" problem can occur. When you destructure a method from an object, you are essentially pulling the function out and assigning it to a new variable. When you call this new variable, it's a standalone function call, and its \`this\` context will be \`undefined\` (in strict mode).

### ⚙️ Solution Walkthrough
A method is destructured and called.
\`\`\`javascript
'use strict';
const obj = {
  name: 'Test',
  getName() { return this.name; }
};

const { getName } = obj;
// getName(); // Throws TypeError: Cannot read properties of undefined (reading 'name')
\`\`\`
The solution would be to use \`.bind()\` before destructuring or use an arrow function field in the original object.

### 📚 Key Concepts
- **Losing \`this\`**: A fundamental problem to be aware of when passing methods around.
`,

  // problem explanation--> 198
  "op-class-field-scoping": `
### 💡 Problem Breakdown
This is a conceptual problem about the initialization order of class fields. They are evaluated in the order they are written in the class body. This means a field initializer cannot reference another field that is defined later in the class.

### ⚙️ Solution Walkthrough
A conceptual class with an incorrect initialization order.
\`\`\`javascript
class MyClass {
  // 'b' is not yet defined when this line is evaluated.
  // a = this.b; // Throws an error or results in undefined behavior.
  b = 5;
}
\`\`\`
### 📚 Key Concepts
- **Class Initialization Order**: Fields are initialized sequentially from top to bottom.
`,

  // problem explanation--> 199
  "op-class-vs-object-literal": `
### 💡 Problem Breakdown
This is a conceptual problem about when to choose one object creation pattern over another.
- **Object Literal (\`{}\`):** Use for creating a single, one-off object. It's a simple key-value store, a configuration object, or a namespace. There's no need for a "blueprint" because you only need one.
- **Class (\`class {}\`):** Use when you need a blueprint to create multiple objects (\`instances\`) that share the same structure and behavior (methods). The methods are defined once on the prototype, which is memory-efficient.

### 📚 Key Concepts
- **Object-Oriented Programming**: Choosing the right tool for the job based on whether you need multiple instances of a type.
`,

  // problem explanation--> 200
  "op-final-review-conceptual": `
### 💡 Problem Breakdown
This is a conceptual summary of the evolution of object-oriented programming in JavaScript.
- **Phase 1: Constructor Functions**: The original pattern. It was powerful but verbose. Developers had to manually manage the prototype property (\`Person.prototype.greet = ...\`), correctly set up the prototype chain (\`Object.create\`), and chain constructors (\`.call(this)\`). This was error-prone.
- **Phase 2: ES6 Classes**: The \`class\`, \`constructor\`, \`extends\`, and \`super\` keywords were introduced as "syntactic sugar" over the existing prototypal inheritance mechanism. They provide a much cleaner, more readable, and less error-prone syntax for doing the exact same thing.

**Why Classes are Standard**: They provide a standard, clear, and familiar syntax for OOP that is easier for developers (especially those coming from other languages) to understand and use correctly. They reduce boilerplate and prevent common mistakes associated with manual prototype manipulation.

### 📚 Key Concepts
- **Syntactic Sugar**: A syntax that simplifies a common, more verbose pattern.
`,
};
