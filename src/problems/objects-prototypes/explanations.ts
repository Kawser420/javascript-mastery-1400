
export const explanations: Record<string, string> = {
  'create-simple-object': `
### 💡 Problem Breakdown
This is the most fundamental task when working with objects. The goal is to create an "object literal," which is a comma-separated list of key-value pairs wrapped in curly braces. This represents a single entity (like a user) and its associated data.

### ⚙️ Solution Walkthrough
The solution uses curly braces \`{}\` to define the object and colons \`:\` to separate keys from values.
\`\`\`javascript
const user = {
  name: "John Doe",
  age: 30
};
\`\`\`
1.  **\`const user = ...\`**: A constant variable \`user\` is declared to hold the object.
2.  **\`{...}\`**: The curly braces define the start and end of the object.
3.  **\`name: "John Doe"\`**: This is a key-value pair. The key (or property name) is \`name\`, and its value is the string \`"John Doe"\`.
4.  **\`,\`**: A comma separates the key-value pairs.

### 📚 Key Concepts
-   **Object Literal**: A syntax for creating an object in JavaScript. It's the most common and straightforward way.
-   **Key-Value Pair**: The fundamental structure of an object, where a unique key maps to a specific value.
`,
  'access-object-property-dot': `
### 💡 Problem Breakdown
Once you have an object, you need to retrieve the data stored within it. Dot notation is the most common way to access an object's properties. It's used when the property key is a valid JavaScript identifier (e.g., no spaces, doesn't start with a number).

### ⚙️ Solution Walkthrough
The solution uses the object's name followed by a dot and the property name.
\`\`\`javascript
const post = {"title": "My First Post", "likes": 10};
const postTitle = post.title; // "My First Post"
\`\`\`
1.  **\`post\`**: The variable holding our object.
2.  **\`.\`**: The dot operator used for property access.
3.  **\`title\`**: The name of the key whose value we want to retrieve.

### 📚 Key Concepts
-   **Dot Notation**: A syntax for accessing the properties of an object. It's concise and readable.
-   **Property Accessor**: An operator used to get the value of a property.
`,
  'access-object-property-bracket': `
### 💡 Problem Breakdown
Bracket notation is the other way to access object properties. It is required when the property key is not a valid identifier (e.g., "first-name") or when the key is dynamic (i.e., stored in a variable).

### ⚙️ Solution Walkthrough
The solution uses square brackets \`[]\` with a variable inside to access the property.
\`\`\`javascript
const user = { name: "Jane", age: 25, city: "New York" };
const keyToAccess = "city";
const userCity = user[keyToAccess]; // "New York"
\`\`\`
1.  **\`user[...]\`**: The square brackets indicate property access.
2.  **\`keyToAccess\`**: The expression inside the brackets is evaluated first. Its result (the string "city") is then used as the key to look up in the object.

### 📚 Key Concepts
-   **Bracket Notation**: A syntax for accessing object properties that allows for dynamic keys.
-   **Dynamic Properties**: Accessing properties whose names are determined at runtime.
`,
  'add-modify-object-property': `
### 💡 Problem Breakdown
Objects in JavaScript are mutable, meaning their properties can be changed after they are created. This task involves both adding a new property to an object and updating the value of an existing one.

### ⚙️ Solution Walkthrough
The solution uses the assignment operator \`=\` with dot notation.
\`\`\`javascript
const task = { id: 1, title: "Learn JS" };
// Add a new property
task.status = "in-progress";
// Modify the existing property
task.status = "completed";
\`\`\`
1.  **Assignment**: If the property (\`status\`) does not exist on the object, JavaScript will create it. If it already exists, the assignment operator will update its value.

### 📚 Key Concepts
-   **Mutability**: The ability of an object to be changed after it is created.
-   **Assignment Operator**: The \`=\` operator is used to assign values to variables and object properties.
`,
  'delete-object-property': `
### 💡 Problem Breakdown
The task is to completely remove a property (both the key and its value) from an object.

### ⚙️ Solution Walkthrough
The solution uses the \`delete\` operator.
\`\`\`javascript
const settings = { theme: "dark", isDraft: true, notifications: false };
delete settings.isDraft;
// settings is now { theme: "dark", notifications: false }
\`\`\`
1.  **\`delete\` operator**: This operator removes a given property from an object. It returns \`true\` if the operation was successful.

### 📚 Key Concepts
-   **\`delete\` operator**: An operator used to remove properties from objects.
`,
  'check-property-existence': `
### 💡 Problem Breakdown
The task is to determine if an object has a certain property. There's a key distinction: does the object have the property *directly* (an "own" property), or does it inherit it from its prototype?

### ⚙️ Solution Walkthrough
Two methods are shown: the \`in\` operator and the \`.hasOwnProperty()\` method.
\`\`\`javascript
const user = { name: "Alex" };
Object.setPrototypeOf(user, { country: "USA" }); // Inherited property

'name' in user; // true
'country' in user; // true (checks prototype chain)

user.hasOwnProperty('name'); // true (own property)
user.hasOwnProperty('country'); // false (not an own property)
\`\`\`
1.  **\`in\` operator**: Returns \`true\` if the specified property is in the object or its prototype chain.
2.  **\`.hasOwnProperty()\`**: Returns \`true\` only if the specified property is a direct property of the object, not inherited.

### 📚 Key Concepts
-   **Own Property**: A property that is defined directly on an object.
-   **Prototype Chain**: The series of objects that an object inherits properties from.
`,
  'get-object-keys': `
### 💡 Problem Breakdown
This task involves extracting all the "keys" (or property names) from an object and returning them as an array. This is useful for when you need to iterate over an object's properties.

### ⚙️ Solution Walkthrough
The solution uses the static \`Object.keys()\` method.
\`\`\`javascript
const user = { "id": 1, "user": "test", "active": true };
const keys = Object.keys(user); // ["id", "user", "active"]
\`\`\`
1.  **\`Object.keys(obj)\`**: This method takes an object as an argument and returns an array of strings representing all the enumerable, *own* properties of the object.

### 📚 Key Concepts
-   **Object Introspection**: The process of examining an object's structure, such as its keys and values.
-   **Enumerable Property**: A property that will be included in \`for...in\` loops and \`Object.keys()\`.
`,
  'get-object-values': `
### 💡 Problem Breakdown
Similar to getting the keys, this task is about extracting all the "values" from an object's own properties and returning them as an array.

### ⚙️ Solution Walkthrough
The solution uses the static \`Object.values()\` method.
\`\`\`javascript
const user = { "id": 1, "user": "test", "active": true };
const values = Object.values(user); // [1, "test", true]
\`\`\`
1.  **\`Object.values(obj)\`**: This method takes an object and returns an array containing the values of its own enumerable properties. The order of the values corresponds to the order of the keys returned by \`Object.keys()\`.

### 📚 Key Concepts
-   **\`Object.values()\`**: A modern (ES2017) and convenient way to get an object's values as an array.
`,
  'get-object-entries': `
### 💡 Problem Breakdown
This task involves converting an object into an array of its key-value pairs. Each key-value pair is represented as a two-element array \`[key, value]\`. This format is very useful for iterating over objects with methods like \`forEach\` or for converting objects to \`Map\`s.

### ⚙️ Solution Walkthrough
The solution uses the static \`Object.entries()\` method.
\`\`\`javascript
const user = { "a": 1, "b": 2, "c": 3 };
const entries = Object.entries(user); 
// [["a", 1], ["b", 2], ["c", 3]]
\`\`\`
1.  **\`Object.entries(obj)\`**: This method returns an array of the given object's own enumerable string-keyed property \`[key, value]\` pairs.

### 📚 Key Concepts
-   **\`Object.entries()\`**: An ES2017 method that provides an easy way to iterate over an object's key-value pairs.
`,
  'merge-objects-spread': `
### 💡 Problem Breakdown
The task is to combine the properties of two or more objects into a single new object. The spread syntax (\`...\`) provides a modern and highly readable way to do this. A key rule is that if properties have the same name, the property from the object that comes later in the spread order will "win."

### ⚙️ Solution Walkthrough
A new object literal is created, and the source objects are "spread" into it.
\`\`\`javascript
const obj1 = { name: "User", isAdmin: false };
const obj2 = { isAdmin: true, theme: "dark" };

const merged = { ...obj1, ...obj2 };
// { name: "User", isAdmin: true, theme: "dark" }
\`\`\`
1.  **\`{ ...obj1 }\`**: This copies all the own, enumerable properties from \`obj1\` into the new object.
2.  **\`{ ...obj2 }\`**: This then copies all the properties from \`obj2\`. Since \`obj2\` also has an \`isAdmin\` property, its value (\`true\`) overwrites the value from \`obj1\`.

### 📚 Key Concepts
-   **Spread Syntax (\`...\`)**: A modern (ES2018 for objects) syntax for copying properties from one object to another. It's a concise way to create shallow copies and merge objects.
`,
  'object-assign': `
### 💡 Problem Breakdown
\`Object.assign()\` is the pre-ES2018 way to merge objects. It copies all enumerable own properties from one or more source objects to a target object. A crucial difference from the spread syntax is that \`Object.assign()\` *mutates* the target object.

### ⚙️ Solution Walkthrough
The method is called with a target object and one or more source objects.
\`\`\`javascript
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3, a: 4 };

const merged = Object.assign(target, source1, source2);

// merged is { a: 4, b: 2, c: 3 }
// target is also { a: 4, b: 2, c: 3 } because it was mutated
\`\`\`
1.  **\`Object.assign(target, ...sources)\`**: The properties from the source objects are copied onto the target object.
2.  **To avoid mutation**: A common pattern is to use an empty object as the target: \`const merged = Object.assign({}, source1, source2);\`. This is effectively what the spread syntax \`{ ...source1, ...source2 }\` does.

### 📚 Key Concepts
-   **\`Object.assign()\`**: A method for copying properties between objects.
-   **Mutation**: The act of changing an object's state. It's important to be aware of which methods mutate objects to avoid unintended side effects.
`,
  'this-in-method': `
### 💡 Problem Breakdown
The value of the \`this\` keyword in JavaScript is determined by how a function is called. When a function is called as a method of an object (e.g., \`object.myMethod()\`), \`this\` inside that method is set to the object the method was called on.

### ⚙️ Solution Walkthrough
A \`person\` object has a \`greet\` method that refers to \`this.name\`.
\`\`\`javascript
const person = {
    name: "Alice",
    greet: function() {
        return \`Hello, \${this.name}!\`;
    }
};

person.greet(); // "Hello, Alice!"
\`\`\`
1.  **Method Call**: The call \`person.greet()\` sets the context. Inside \`greet\`, \`this\` refers to \`person\`.
2.  **Property Access**: Therefore, \`this.name\` correctly resolves to \`person.name\`, which is "Alice".

### 📚 Key Concepts
-   **\`this\` Keyword**: A reference to the execution context of a function. Its value changes depending on how the function is invoked.
-   **Method Invocation**: The specific call syntax (\`object.method()\`) that sets \`this\` to the object.
`,
  'object-destructuring-basic': `
### 💡 Problem Breakdown
Object destructuring is a modern (ES6) syntax that makes it convenient to "unpack" properties from objects into distinct variables. It provides a cleaner alternative to repeatedly accessing properties using dot notation.

### ⚙️ Solution Walkthrough
A destructuring assignment statement is used to create variables that match the property names of the object.
\`\`\`javascript
const user = { name: "Bob", age: 42, role: "admin" };

// Destructuring assignment
const { name, age } = user;

console.log(name); // "Bob"
console.log(age);  // 42
\`\`\`
1.  **\`const { name, age } = user;\`**: This syntax looks for properties named \`name\` and \`age\` on the \`user\` object and creates new constants with those names, assigning them the corresponding values from the object.

### 📚 Key Concepts
-   **Destructuring Assignment**: A syntax for unpacking values from objects or arrays into variables. It can make code more concise and readable.
`,
  'nested-object-access': `
### 💡 Problem Breakdown
Real-world data is often nested. The task is to access a property that is several levels deep inside an object. This is done by chaining property accessors.

### ⚙️ Solution Walkthrough
Dot notation is chained to traverse down through the object structure.
\`\`\`javascript
const user = {
    id: 1,
    info: {
        name: "Charlie",
        address: {
            street: "123 Main St"
        }
    }
};

const street = user.info.address.street; // "123 Main St"
\`\`\`
1.  **Chaining**: \`user.info\` returns the \`info\` object. \`.address\` is then accessed on that returned object, and finally \`.street\` is accessed on the \`address\` object.

### 📚 Key Concepts
-   **Nested Objects**: Objects that contain other objects as properties, creating a tree-like data structure.
`,
  'nested-object-destructuring': `
### 💡 Problem Breakdown
Destructuring syntax can also be used to unpack properties from nested objects in a single, concise statement.

### ⚙️ Solution Walkthrough
The destructuring pattern mirrors the structure of the object itself.
\`\`\`javascript
const user = {
    id: 1,
    info: {
        name: "David",
        address: {
            city: "London"
        }
    }
};

const { info: { address: { city } } } = user;

console.log(city); // "London"
\`\`\`
1.  **\`{ info: { ... } }\`**: This tells the engine to look inside the \`info\` property.
2.  **\`{ address: { ... } }\`**: This tells it to look inside the \`address\` property of the \`info\` object.
3.  **\`{ city }\`**: This finally unpacks the \`city\` property into a new variable called \`city\`.

### 📚 Key Concepts
-   **Nested Destructuring**: A powerful feature for extracting data from complex, nested objects.
`,
  'loop-object-for-in': `
### 💡 Problem Breakdown
The task is to iterate over all the enumerable properties of an object. The \`for...in\` loop is the traditional way to do this. It iterates over the property *keys* of an object.

### ⚙️ Solution Walkthrough
A \`for...in\` loop is used to get each key. Bracket notation is then used inside the loop to get the corresponding value.
\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
    // It's good practice to check if the property is an "own" property
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(\`Key: \${key}, Value: \${obj[key]}\`);
    }
}
\`\`\`
1. **\`for (const key in obj)\`**: On each iteration, the \`key\` variable is assigned the next property name (as a string) from the \`obj\`.
2. **\`obj[key]\`**: Bracket notation must be used to access the value, because the key's name is stored in the \`key\` variable. \`obj.key\` would incorrectly look for a property named "key".

### 📚 Key Concepts
- **\`for...in\` loop**: A control statement for iterating over the enumerable properties of an object.
- **Note**: This loop also iterates over inherited properties, which is why the \`hasOwnProperty\` check is often recommended. For iterating only own properties, \`Object.keys(obj).forEach(...)\` is a more modern alternative.
`,
  'object-freeze': `
### 💡 Problem Breakdown
The goal is to make an object immutable, meaning its properties cannot be added, deleted, or changed. \`Object.freeze()\` provides the highest level of immutability.

### ⚙️ Solution Walkthrough
The \`Object.freeze()\` method is called on an object. Any subsequent attempts to modify the object will fail.
\`\`\`javascript
const obj = { prop: "value" };
Object.freeze(obj);

// These attempts will fail silently in non-strict mode,
// or throw a TypeError in strict mode.
obj.prop = "new value";
obj.newProp = 123;
delete obj.prop;

// obj is still { prop: "value" }
\`\`\`
1. **\`Object.freeze(obj)\`**: This method "freezes" the object. It's important to note that this is a *shallow* freeze; if a property of the object is another object, that nested object is *not* frozen.

### 📚 Key Concepts
- **Immutability**: The principle that data should not be changed after it is created.
- **\`Object.freeze()\`**: A method to make an object completely immutable at its top level.
`,
  'object-seal': `
### 💡 Problem Breakdown
\`Object.seal()\` is a slightly less restrictive version of \`Object.freeze()\`. A sealed object prevents new properties from being added and existing properties from being deleted. However, the values of existing properties *can* still be changed.

### ⚙️ Solution Walkthrough
\`Object.seal()\` is called on an object, and then various modifications are attempted.
\`\`\`javascript
const obj = { prop: "value" };
Object.seal(obj);

obj.prop = "new value"; // This is allowed.
obj.newProp = 123;      // This fails.
delete obj.prop;        // This fails.

// obj is now { prop: "new value" }
\`\`\`
1. **\`Object.seal(obj)\`**: Seals the object, making its set of properties fixed, but leaving the values of those properties writable.

### 📚 Key Concepts
- **\`Object.seal()\`**: A method for making an object's structure fixed, while allowing its values to be updated.
`,
  'constructor-function': `
### 💡 Problem Breakdown
Before ES6 classes, constructor functions were the primary way to create objects with a shared structure and behavior. A constructor function is a regular function that is called with the \`new\` keyword.

### ⚙️ Solution Walkthrough
A function \`Car\` is defined. Inside, \`this\` refers to the new object being created, and properties are assigned to it.
\`\`\`javascript
function Car(make, model) {
    this.make = make;
    this.model = model;
}

const myCar = new Car("Toyota", "Corolla");
// myCar is now { make: "Toyota", model: "Corolla" }
\`\`\`
1. **\`function Car(...)\`**: By convention, constructor function names are capitalized.
2. **\`new\` keyword**: The \`new\` keyword is crucial. It does four things:
   a. Creates a new, empty object.
   b. Sets the prototype of this new object to \`Car.prototype\`.
   c. Binds the \`this\` keyword to the new object.
   d. Returns the new object (unless the constructor explicitly returns another object).

### 📚 Key Concepts
- **Constructor Function**: A function used as a blueprint for creating objects with the \`new\` keyword.
- **\`new\` keyword**: An operator that initiates the creation of a new object instance.
`,
  'prototype-property': `
### 💡 Problem Breakdown
Every JavaScript function has a \`prototype\` property, which is an object. When you use that function as a constructor with \`new\`, the new object's internal \`[[Prototype]]\` (or \`__proto__\`) is linked to the constructor's \`prototype\` object. This is the mechanism for prototypal inheritance. Adding methods to the \`.prototype\` is efficient because all instances will share a single copy of the method, saving memory.

### ⚙️ Solution Walkthrough
A \`drive\` method is added to the \`Car.prototype\` object.
\`\`\`javascript
function Car(make, model) { /* ... */ }

// Add a method to the prototype
Car.prototype.drive = function() {
    return \`The \${this.make} is driving.\`;
};

const myCar = new Car("Ford", "Focus");
myCar.drive(); // Works because myCar inherits from Car.prototype
\`\`\`
1. **\`Car.prototype.drive\`**: A new property \`drive\` (which is a function) is added to the \`prototype\` object of the \`Car\` constructor.
2. **Inheritance**: When \`myCar.drive()\` is called, JavaScript doesn't find \`drive\` directly on \`myCar\`. It looks up the prototype chain, finds it on \`Car.prototype\`, and executes it.

### 📚 Key Concepts
- **Prototype**: An object from which other objects inherit properties.
- **Prototypal Inheritance**: The mechanism by which objects can inherit features from one another in JavaScript.
`,
  'prototypal-inheritance': `
### 💡 Problem Breakdown
The task is to create a "subclass" using constructor functions. An \`ElectricCar\` should have all the features of a \`Car\` and also some of its own. This requires manually setting up the prototype chain.

### ⚙️ Solution Walkthrough
The solution involves three key steps: calling the parent constructor, setting the prototype, and resetting the constructor property.
\`\`\`javascript
function Car(make) { this.make = make; }
Car.prototype.drive = function() { /* ... */ };

function ElectricCar(make, battery) {
    // 1. Call the parent constructor
    Car.call(this, make);
    this.battery = battery;
}

// 2. Set up the prototype chain
ElectricCar.prototype = Object.create(Car.prototype);

// 3. Reset the constructor property
ElectricCar.prototype.constructor = ElectricCar;

const myTesla = new ElectricCar("Tesla", 100);
\`\`\`
1. **\`Car.call(this, make)\`**: This calls the \`Car\` constructor, but with \`this\` explicitly set to the new \`ElectricCar\` instance being created. This ensures properties like \`this.make\` are initialized.
2. **\`Object.create(Car.prototype)\`**: This creates a new empty object whose \`[[Prototype]]\` is set to \`Car.prototype\`. This new object becomes \`ElectricCar.prototype\`, establishing the inheritance link for methods.
3. **\`constructor = ElectricCar\`**: This step corrects the \`.constructor\` property on the prototype, which was overwritten in the previous step. It's good practice for introspection.

### 📚 Key Concepts
- **Classical Inheritance Pattern**: This is the traditional pattern for simulating class-based inheritance in pre-ES6 JavaScript.
`,
  'object-create': `
### 💡 Problem Breakdown
\`Object.create()\` is a method that creates a new object, using an existing object as the prototype of the newly created object. It's a direct way to set up prototypal inheritance without using constructor functions.

### ⚙️ Solution Walkthrough
A new \`car\` object is created with \`vehiclePrototype\` as its prototype.
\`\`\`javascript
const vehiclePrototype = {
    drive() { return "Moving..."; }
};

const car = Object.create(vehiclePrototype);

car.drive(); // "Moving..."
\`\`\`
1. **\`Object.create(proto)\`**: \`car\` is initially an empty object, but its internal \`[[Prototype]]\` link points directly to \`vehiclePrototype\`.
2. **Inheritance**: When \`car.drive()\` is called, JavaScript finds the \`drive\` method on its prototype, \`vehiclePrototype\`.

### 📚 Key Concepts
- **\`Object.create()\`**: A method for creating a new object with a specified prototype.
`,
  'proto-vs-prototype': `
### 💡 Problem Breakdown
This is a crucial conceptual point in understanding JavaScript inheritance.
- **\`prototype\`**: An object property that exists on **constructor functions**. It's the "blueprint" object that will be assigned as the prototype for all instances created by that constructor.
- **\`__proto__\`** (or \`[[Prototype]]\`): An internal property that exists on **every object instance**. It's a direct link to the object's actual prototype in the chain (the object it inherits from).

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
function Dog() {}
// Dog.prototype is the blueprint object.

const buddy = new Dog();
// buddy.__proto__ is a link to Dog.prototype.
// Therefore, buddy.__proto__ === Dog.prototype is true.
\`\`\`
In short: **Constructors have a \`.prototype\` property. Instances have a \`.__proto__\` link.** ES6 classes abstract this away, but it's how inheritance works under the hood.

### 📚 Key Concepts
- **Prototype Chain**: The chain of objects linked by their \`__proto__\` properties.
`,
  'instanceof-operator': `
### 💡 Problem Breakdown
The \`instanceof\` operator checks if an object is an instance of a particular constructor function. It does this by checking if the constructor's \`.prototype\` object exists anywhere in the object's prototype chain.

### ⚙️ Solution Walkthrough
The operator is used to check an instance created from a constructor.
\`\`\`javascript
function Dog() {}
function Animal() {}
Dog.prototype = Object.create(Animal.prototype);

const buddy = new Dog();

buddy instanceof Dog;    // true
buddy instanceof Animal; // true (because it's in the prototype chain)
buddy instanceof Object; // true (all objects inherit from Object)
\`\`\`
1. **\`object instanceof Constructor\`**: This expression returns \`true\` or \`false\`.
2. **Chain Traversal**: It checks \`object.__proto__\`, then \`object.__proto__.__proto__\`, and so on, looking for \`Constructor.prototype\`.

### 📚 Key Concepts
- **\`instanceof\` operator**: A reliable way to check an object's type, respecting the inheritance hierarchy.
`,
  'object-is': `
### 💡 Problem Breakdown
\`Object.is()\` is a modern (ES6) method for comparing two values. It works almost identically to the strict equality operator (\`===\`), but with two key differences that make it more precise in certain edge cases.

### ⚙️ Solution Walkthrough
The method is used to compare special number values.
\`\`\`javascript
Object.is(NaN, NaN); // true
NaN === NaN;         // false (this is a quirk of ===)

Object.is(-0, +0); // false
-0 === +0;         // true (=== does not distinguish between -0 and +0)
\`\`\`
1. **\`Object.is(value1, value2)\`**: Returns \`true\` if the values are the same.
2. **Differences**:
   - It correctly identifies \`NaN\` as being equal to itself.
   - It correctly distinguishes between positive zero (\`+0\`) and negative zero (\`-0\`).

### 📚 Key Concepts
- **\`Object.is()\`**: A method for determining if two values are the same value, providing a more robust equality check than \`===\` for edge cases.
`,
  'optional-chaining': `
### 💡 Problem Breakdown
Accessing nested properties in an object can lead to a \`TypeError\` if an intermediate property is \`null\` or \`undefined\`. The optional chaining operator (\`?.\`) provides a way to safely access deep properties without having to write long chains of \`&&\` checks.

### ⚙️ Solution Walkthrough
The \`?.\` operator is used before accessing the \`address\` property.
\`\`\`javascript
const userWithAddress = { address: { street: "123 Main St" } };
const userWithoutAddress = { name: "Eve" };

const street1 = userWithAddress?.address?.street; // "123 Main St"
const street2 = userWithoutAddress?.address?.street; // undefined
\`\`\`
1. **\`?.\` operator**: If the value on the left of \`?.\` is \`null\` or \`undefined\`, the expression "short-circuits" and immediately returns \`undefined\`, preventing an error. Otherwise, it proceeds with the property access.

### 📚 Key Concepts
- **Optional Chaining (\`?.\`)**: A modern (ES2020) syntax for safely accessing nested object properties.
- **Defensive Programming**: Writing code that is resilient to unexpected or missing data.
`,
  'nullish-coalescing-object': `
### 💡 Problem Breakdown
The nullish coalescing operator (\`??\`) is a logical operator that returns its right-hand side operand when its left-hand side operand is \`null\` or \`undefined\`, and otherwise returns its left-hand side operand. It's useful for providing default values.

### ⚙️ Solution Walkthrough
The \`??\` operator is used to provide a default theme.
\`\`\`javascript
const settings = { theme: null, fontSize: 16, animationSpeed: 0 };

const theme = settings.theme ?? 'light'; // 'light' (because theme is null)
const speed = settings.animationSpeed ?? 1; // 0 (because 0 is not null or undefined)
\`\`\`
1. **\`left ?? right\`**: If \`left\` is "nullish" (\`null\` or \`undefined\`), the expression evaluates to \`right\`. Otherwise, it evaluates to \`left\`.
2. **Difference from \`||\`**: The logical OR operator (\`||\`) would have returned \`1\` for \`animationSpeed\` because \`0\` is a "falsy" value. The \`??\` operator is more precise as it only triggers for \`null\` and \`undefined\`.

### 📚 Key Concepts
- **Nullish Coalescing Operator (\`??\`)**: A modern (ES2020) operator for providing default values when a value might be \`null\` or \`undefined\`.
`,
  'shorthand-property-names': `
### 💡 Problem Breakdown
This ES6 feature provides a more concise syntax for creating object literals when the variable names you want to use as keys are the same as the variable names holding the values.

### ⚙️ Solution Walkthrough
An object is created from variables without explicitly writing the key-value colon.
\`\`\`javascript
const name = "Frank";
const age = 50;

// Instead of writing { name: name, age: age }
const user = { name, age };

// user is { name: "Frank", age: 50 }
\`\`\`
1. **Shorthand Syntax**: If the property name and the variable name are identical, you can just write the name once.

### 📚 Key Concepts
-   **Shorthand Property Names**: Syntactic sugar for creating object literals more concisely.
`,
  'computed-property-names': `
### 💡 Problem Breakdown
This ES6 feature allows you to use an expression (like a variable) as the property key when creating an object literal. The expression is evaluated, and its result is used as the key.

### ⚙️ Solution Walkthrough
A variable is placed inside square brackets \`[]\` in the key position of an object literal.
\`\`\`javascript
const propName = "role";

const user = {
    name: "Grace",
    [propName]: "editor"
};

// user is { name: "Grace", role: "editor" }
\`\`\`
1. **\`[propName]\`**: The expression \`propName\` is evaluated to the string "role", and the object is created with a property of that name.

### 📚 Key Concepts
- **Computed Property Names**: A syntax for dynamically setting property keys in an object literal.
`,
  'getter-syntax': `
### 💡 Problem Breakdown
A getter binds an object property to a function that will be called when that property is looked up. It allows you to create a "computed property" that appears like a regular data property but whose value is calculated on the fly.

### ⚙️ Solution Walkthrough
The \`get\` keyword is used to define a \`fullName\` property that is computed from other properties.
\`\`\`javascript
const person = {
    firstName: "John",
    lastName: "Smith",
    get fullName() {
        return \`\${this.firstName} \${this.lastName}\`;
    }
};

person.fullName; // "John Smith" (accessed like a property, not called like a method)
\`\`\`
1. **\`get fullName()\`**: This syntax defines the getter.
2. **Access**: When you access \`person.fullName\`, the function is executed, and its return value is provided.

### 📚 Key Concepts
- **Getter**: A special method for retrieving the value of a property.
`,
  'setter-syntax': `
### 💡 Problem Breakdown
A setter is the counterpart to a getter. It binds an object property to a function that will be called when there is an attempt to set that property. It allows you to run code whenever a property is assigned a new value.

### ⚙️ Solution Walkthrough
The \`set\` keyword defines a \`fullName\` property that, when assigned a value, intelligently updates the underlying \`firstName\` and \`lastName\` properties.
\`\`\`javascript
const person = {
    firstName: "John",
    lastName: "Smith",
    set fullName(name) {
        // Run code to parse the input and update other properties
        [this.firstName, this.lastName] = name.split(" ");
    }
};

person.fullName = "Jane Doe"; // The setter is called
// person is now { firstName: "Jane", lastName: "Doe", ... }
\`\`\`
1. **\`set fullName(name)\`**: This syntax defines the setter. The value being assigned is passed as the argument (\`name\`).

### 📚 Key Concepts
- **Setter**: A special method for setting the value of a property.
`,
  'object-from-entries': `
### 💡 Problem Breakdown
\`Object.fromEntries()\` is the inverse of \`Object.entries()\`. It takes an iterable of key-value pairs (like an array of \`[key, value]\` arrays) and transforms it into a new object.

### ⚙️ Solution Walkthrough
The method is called on an array of entries.
\`\`\`javascript
const entries = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(entries);
// obj is { a: 1, b: 2 }
\`\`\`
1. **\`Object.fromEntries(iterable)\`**: This method is useful for converting other data structures, like \`Map\`s, back into plain objects, or for creating an object after manipulating its entries as an array (e.g., filtering or mapping them).

### 📚 Key Concepts
- **\`Object.fromEntries()\`**: A modern (ES2019) method for creating an object from an iterable of key-value pairs.
`,
  'json-stringify': `
### 💡 Problem Breakdown
JSON (JavaScript Object Notation) is a standard text-based format for representing structured data. \`JSON.stringify()\` is a built-in method that converts a JavaScript object or value into a JSON string. This is essential for sending data to a web server or storing it in a file or \`localStorage\`.

### ⚙️ Solution Walkthrough
The method is called with a JavaScript object.
\`\`\`javascript
const obj = { id: 1, name: "A book", inStock: true };
const jsonString = JSON.stringify(obj);
// '{"id":1,"name":"A book","inStock":true}'
\`\`\`
1. **\`JSON.stringify(value)\`**: The method serializes the value. Note that functions and \`undefined\` values are omitted from the output.

### 📚 Key Concepts
- **Serialization**: The process of converting an object into a format that can be stored or transmitted.
- **JSON**: A lightweight, human-readable data-interchange format.
`,
  'json-parse': `
### 💡 Problem Breakdown
\`JSON.parse()\` is the inverse of \`JSON.stringify()\`. It takes a JSON string and transforms it back into a JavaScript object or value. This is used to consume data received from a server or read from a file.

### ⚙️ Solution Walkthrough
The method is called with a valid JSON string.
\`\`\`javascript
const jsonString = '{"id":1,"name":"A book","inStock":true}';
const obj = JSON.parse(jsonString);
// obj is a normal JavaScript object: { id: 1, ... }
\`\`\`
1. **\`JSON.parse(text)\`**: The method deserializes the string. If the string is not valid JSON, it will throw a \`SyntaxError\`.

### 📚 Key Concepts
- **Deserialization / Parsing**: The process of converting a data format (like a JSON string) back into an in-memory object.
`,
  'json-stringify-replacer': `
### 💡 Problem Breakdown
\`JSON.stringify()\` can take an optional second argument, a "replacer". If the replacer is an array of strings, it acts as a whitelist, and only the properties whose keys are in the array will be included in the resulting JSON string. This is useful for filtering out sensitive or unnecessary data.

### ⚙️ Solution Walkthrough
An array of keys is passed as the replacer to filter the object.
\`\`\`javascript
const user = { id: 123, name: "Heidi", password: "secret", role: "admin" };
const replacer = ['id', 'name', 'role']; // Whitelist of keys to include

const jsonString = JSON.stringify(user, replacer);
// '{"id":123,"name":"Heidi","role":"admin"}' (password is omitted)
\`\`\`
1. **\`JSON.stringify(value, replacer)\`**: The replacer filters the properties. The replacer can also be a function for more complex logic.

### 📚 Key Concepts
- **Data Filtering**: Selectively choosing which data to include in a serialized format.
`,
  'shallow-copy': `
### 💡 Problem Breakdown
A shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made. If a property value is a primitive (like a number or string), it's copied directly. But if a property value is an object or array, only the *reference* to that object is copied, not the object itself.

### ⚙️ Solution Walkthrough
A shallow copy is created using the spread syntax. Modifying a nested object in the copy also affects the original.
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };
const copy = { ...original }; // Shallow copy

copy.a = 100; // Does NOT affect original.a
copy.b.c = 200; // DOES affect original.b.c

// original is now { a: 1, b: { c: 200 } }
\`\`\`
1. **Top-level properties**: Copied by value.
2. **Nested objects**: Copied by reference. Both \`original.b\` and \`copy.b\` point to the exact same object in memory.

### 📚 Key Concepts
- **Shallow Copy**: A bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object.
- **Reference vs. Value**: A critical distinction in how JavaScript handles primitives vs. objects.
`,
  'deep-copy-json': `
### 💡 Problem Breakdown
A deep copy of an object is a copy whose properties do not share the same references as those of the source object. All nested objects are also recursively copied. A common and simple (but limited) way to achieve this is by serializing the object to a JSON string and then parsing it back.

### ⚙️ Solution Walkthrough
\`JSON.stringify\` and \`JSON.parse\` are used to create a deep copy.
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));

copy.b.c = 200; // This does NOT affect the original

// original is still { a: 1, b: { c: 2 } }
\`\`\`
1. **Serialization**: \`JSON.stringify(original)\` turns the entire object structure into a string.
2. **Deserialization**: \`JSON.parse()\` creates a brand new object structure from that string. No references to the original objects are maintained.
3. **Limitations**: This trick does not work for non-JSON-safe values like functions, \`undefined\`, \`Map\`, \`Set\`, etc.

### 📚 Key Concepts
- **Deep Copy**: A copy where all values are recursively copied, resulting in a completely independent object.
`,
  'this-with-bind': `
### 💡 Problem Breakdown
When a method is detached from its object and called as a standalone function, it loses its \`this\` context. The \`.bind()\` method creates a *new function* that, when called, has its \`this\` keyword permanently set to the provided value.

### ⚙️ Solution Walkthrough
A method is extracted from an object. \`.bind()\` is used to create a bound version of that function.
\`\`\`javascript
const user = {
    name: "Ivy",
    getName: function() { return this.name; }
};

const standaloneGetName = user.getName;
// standaloneGetName(); // Throws TypeError in strict mode, 'this' is undefined

const boundGetName = standaloneGetName.bind(user);
boundGetName(); // "Ivy"
\`\`\`
1. **Detached Method**: \`standaloneGetName\` is just a reference to the function; it has no connection to the \`user\` object anymore.
2. **\`.bind(thisArg)\`**: \`standaloneGetName.bind(user)\` returns a new function that is an exact copy of \`standaloneGetName\` but with \`this\` permanently "bound" to the \`user\` object.

### 📚 Key Concepts
- **\`.bind()\`**: A method on functions for creating a new function with a fixed execution context (\`this\`).
`,
  'check-empty-object': `
### 💡 Problem Breakdown
The task is to determine if an object has no own (non-inherited) properties. A simple truthiness check (\`if (obj)\`) is not sufficient, as an empty object \`{}\` is "truthy".

### ⚙️ Solution Walkthrough
The most reliable way is to get an array of the object's keys and check if the array's length is zero.
\`\`\`javascript
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

isEmpty({}); // true
isEmpty({ a: 1 }); // false
\`\`\`
1. **\`Object.keys(obj)\`**: This returns an array containing the names of the object's own enumerable properties.
2. **\`.length === 0\`**: If the resulting array is empty, it means the object had no own enumerable properties.

### 📚 Key Concepts
- **Object Introspection**: Using methods like \`Object.keys()\` to examine the contents of an object.
`,
  'invert-key-value': `
### 💡 Problem Breakdown
The task is to swap the keys and values of an object. For example, \`{ a: "1", b: "2" }\` should become \`{ "1": "a", "2": "b" }\`. This assumes all values are unique and can be converted to valid string keys.

### ⚙️ Solution Walkthrough
The solution uses \`Object.entries()\` to get an array of pairs, \`map\` to swap them, and \`Object.fromEntries()\` to convert the result back into an object.
\`\`\`javascript
const obj = { "a": "1", "b": "2", "c": "3" };

const inverted = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
);
// inverted is { "1": "a", "2": "b", "3": "c" }
\`\`\`
1. **\`Object.entries(obj)\`**: Creates \`[['a', '1'], ['b', '2'], ...]\`.
2. **\`.map(([key, value]) => [value, key])\`**: Iterates over this array, swapping the positions of the key and value in each pair, creating \`[['1', 'a'], ['2', 'b'], ...]\`.
3. **\`Object.fromEntries(...)\`**: Converts the swapped array of pairs back into a new object.

### 📚 Key Concepts
- **Data Transformation**: Using a combination of modern object and array methods to transform data structures efficiently.
`,
  'property-descriptors': `
### 💡 Problem Breakdown
Every property on an object has a "property descriptor," which is an object that describes the property's attributes. The main attributes are:
- \`value\`: The property's value.
- \`writable\`: If \`true\`, the value can be changed.
- \`enumerable\`: If \`true\`, the property will show up in \`for...in\` loops and \`Object.keys()\`.
- \`configurable\`: If \`true\`, the property can be deleted, and its attributes can be changed.

### ⚙️ Solution Walkthrough
\`Object.getOwnPropertyDescriptor()\` is used to inspect the descriptor of a property.
\`\`\`javascript
const obj = { a: 1 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
/* descriptor is:
{
  "value": 1,
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
\`\`\`
1. **\`Object.getOwnPropertyDescriptor(obj, prop)\`**: This method returns the property descriptor for an own property.

### 📚 Key Concepts
- **Property Descriptors**: The underlying metadata that defines the behavior of an object's properties.
`,
  'object-define-property': `
### 💡 Problem Breakdown
\`Object.defineProperty()\` is a powerful method that allows you to add a new property to an object or modify an existing one with precise control over its attributes (its property descriptor).

### ⚙️ Solution Walkthrough
A \`readOnly\` property is defined on an object with \`writable\` set to \`false\`.
\`\`\`javascript
const obj = {};
Object.defineProperty(obj, 'readOnly', {
    value: 10,
    writable: false,
    enumerable: true,
    configurable: true
});

obj.readOnly = 20; // This will fail silently (or throw in strict mode)
// obj.readOnly is still 10
\`\`\`
1. **\`Object.defineProperty(obj, prop, descriptor)\`**: This method defines or modifies a property.
2. **\`writable: false\`**: This attribute prevents the property's value from being changed with the assignment operator.

### 📚 Key Concepts
- **\`Object.defineProperty()\`**: The core method for low-level property manipulation in JavaScript.
`,
  'enumerable-properties': `
### 💡 Problem Breakdown
An enumerable property is one that is included in iterations like \`for...in\` loops and in the result of \`Object.keys()\`. By default, properties created via simple assignment are enumerable. \`Object.defineProperty()\` allows you to create non-enumerable properties.

### ⚙️ Solution Walkthrough
A non-enumerable property \`b\` is added to an object.
\`\`\`javascript
const obj = { a: 1 };
Object.defineProperty(obj, 'b', {
    value: 2,
    enumerable: false // This is the key part
});

Object.keys(obj); // ["a"] ('b' is not included)
for (const key in obj) { console.log(key); } // only logs 'a'
\`\`\`
1. **\`enumerable: false\`**: This attribute hides the property from standard enumeration mechanisms. You can still access the property directly (\`obj.b\`), however.

### 📚 Key Concepts
- **Enumerability**: An attribute of an object property that determines if it will be included in certain iterations.
`,
  'object-prevent-extensions': `
### 💡 Problem Breakdown
\`Object.preventExtensions()\` is a method that makes it impossible to add new properties to an object. Existing properties can still be modified or deleted.

### ⚙️ Solution Walkthrough
The method is called on an object, and then an attempt is made to add a new property.
\`\`\`javascript
const obj = { a: 1 };
Object.preventExtensions(obj);

// This will fail silently (or throw in strict mode)
obj.b = 2;

// obj is still { a: 1 }
\`\`\`
1. **\`Object.preventExtensions(obj)\`**: This method makes the object non-extensible.

### 📚 Key Concepts
- **Object Extensibility**: An attribute of an object that determines whether new properties can be added to it.
`,
  'compare-objects': `
### 💡 Problem Breakdown
The task is to write a function that performs a "shallow" equality check on two objects. It should return \`true\` if they have the same keys with the same values, regardless of the order of the keys. Note that \`obj1 === obj2\` only checks if they are the same object in memory, not if they are structurally equivalent.

### ⚙️ Solution Walkthrough
The function compares the number of keys and then iterates through the keys of one object, checking if the key and its corresponding value exist in the second object.
\`\`\`javascript
function areEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!Object.prototype.hasOwnProperty.call(obj2, key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
\`\`\`
1. **Key Count Check**: An easy first check. If they have a different number of properties, they can't be equal.
2. **Key and Value Check**: The loop ensures every key in \`obj1\` also exists in \`obj2\` and that the values for that key are strictly equal.

### 📚 Key Concepts
- **Object Equality**: Distinguishing between reference equality (\`===\`) and structural equality.
`,
  'map-vs-object': `
### 💡 Problem Breakdown
This is a conceptual problem about choosing the right data structure. While plain objects can be used for key-value maps, the ES6 \`Map\` object was specifically designed for this and has several advantages.

### ⚙️ Solution Walkthrough
This is a summary of key differences:
- **Key Types**: \`Map\` keys can be **any value** (including objects, functions, etc.). \`Object\` keys must be either a \`String\` or a \`Symbol\`.
- **Iteration Order**: \`Map\` preserves the insertion order of its keys. The order of \`Object\` properties is complex and was not guaranteed until ES2015.
- **Size**: \`Map\` has a \`.size\` property to easily get the number of entries. For an \`Object\`, you have to use \`Object.keys(obj).length\`.
- **Performance**: For frequent additions and removals of key-value pairs, \`Map\` can be more performant.
- **Prototypes**: A \`Map\` doesn't have a prototype, so you don't have to worry about accidentally overwriting inherited keys like \`toString\`.

### 📚 Key Concepts
- **\`Map\`**: A built-in ES6 data structure for key-value pairs that offers advantages over using plain objects for map-like collections.
`,
  'object-get-prototype-of': `
### 💡 Problem Breakdown
The task is to get a direct reference to an object's prototype (the object it inherits from). While \`obj.__proto__\` works in many environments, the official and recommended way is \`Object.getPrototypeOf()\`.

### ⚙️ Solution Walkthrough
The method is used on an instance of a constructor.
\`\`\`javascript
function Animal() {}
const leo = new Animal();

// Get the prototype of the 'leo' instance
const leoPrototype = Object.getPrototypeOf(leo);

leoPrototype === Animal.prototype; // true
\`\`\`
1. **\`Object.getPrototypeOf(obj)\`**: This method returns the prototype of the specified object.

### 📚 Key Concepts
- **Prototype Chain**: The chain of objects an object inherits from. \`Object.getPrototypeOf()\` lets you inspect this chain one level up.
`,
  'object-set-prototype-of': `
### 💡 Problem Breakdown
This task involves changing an object's prototype *after* it has been created. \`Object.setPrototypeOf()\` is the official ES6 method for doing this. It's a powerful but potentially slow operation that should be used with caution.

### ⚙️ Solution Walkthrough
The prototype of a \`dog\` object is changed to be an \`animal\` object.
\`\`\`javascript
const dog = { name: "Buddy" };
const animal = {
    speak() { return "Animal sound"; }
};

// Set the prototype of 'dog' to be 'animal'
Object.setPrototypeOf(dog, animal);

dog.speak(); // "Animal sound" (inherited from its new prototype)
\`\`\`
1. **\`Object.setPrototypeOf(obj, prototype)\`**: This method sets the prototype of a specified object to another object or \`null\`.

### 📚 Key Concepts
- **Dynamic Prototypes**: The ability to change an object's inheritance chain at runtime.
`,
  'factory-function': `
### 💡 Problem Breakdown
A factory function is a function that returns a new object. It's an alternative to using constructor functions or classes. Factories can be simpler and more flexible, and they are excellent at creating objects with private data using closures.

### ⚙️ Solution Walkthrough
A function \`createUser\` takes arguments and returns a new object literal.
\`\`\`javascript
const createUser = (name, age) => {
    return {
        name,
        age,
        greet() {
            return \`Hi, I'm \${this.name}\`;
        }
    };
};

const user = createUser("Jack", 28);
user.greet(); // "Hi, I'm Jack"
\`\`\`
1. **No \`new\` or \`this\` confusion**: Factory functions are just regular functions, so you don't use the \`new\` keyword, and \`this\` behaves as it normally would (or isn't needed at all if you use closures).

### 📚 Key Concepts
- **Factory Function**: A design pattern where a function is used to create and return objects.
`,
  'prototype-chain-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem about the core of JavaScript inheritance. When you try to access a property on an object, if the property isn't found on the object itself, the JavaScript engine looks at the object's prototype. If it's not there, it looks at that prototype's prototype, and so on, until it finds the property or reaches the end of the chain (`null`).

### ⚙️ Solution Walkthrough
A simple inheritance chain is created.
\`\`\`javascript
const grandParent = { greet() { return "Hello!"; } };
const parent = Object.create(grandParent);
const child = Object.create(parent);

// child does not have 'greet'. It looks up to parent.
// parent does not have 'greet'. It looks up to grandParent.
// grandParent has 'greet'. It is found and executed.
child.greet(); // "Hello!"
\`\`\`
### 📚 Key Concepts
-   **Prototype Chain**: The linked list of objects that an object inherits from. It's the mechanism for property and method lookup.
`,
  'this-lost-context': `
### 💡 Problem Breakdown
A very common problem in JavaScript is losing the `this` context. When you pass an object's method as a callback (e.g., to `setTimeout` or an event listener), the function is invoked without its original object context. In non-strict mode, `this` will default to the global object (`window`), and in strict mode, it will be `undefined`, usually causing a `TypeError`.

### ⚙️ Solution Walkthrough
A method is extracted and called as a standalone function, losing its context.
\`\`\`javascript
const person = {
  name: 'Jill',
  greet() { console.log(this.name); }
};

const standaloneGreet = person.greet;
// standaloneGreet(); // Throws TypeError in strict mode because 'this' is undefined.

// Solution: Use .bind()
const boundGreet = person.greet.bind(person);
boundGreet(); // Logs "Jill"
\`\`\`
### 📚 Key Concepts
-   **Execution Context**: The value of `this` is determined by *how* a function is called, not where it's defined.
-   **`.bind()`**: The primary method for creating a function with a permanently fixed `this` context.
`,
  'object-create-null': `
### 💡 Problem Breakdown
`Object.create(null)` creates an object that does not inherit from `Object.prototype`. This creates a "pure" dictionary object that is completely empty and has no inherited properties or methods like `.toString()`, `.hasOwnProperty()`, etc.

### ⚙️ Solution Walkthrough
An object is created with a null prototype.
\`\`\`javascript
const pureDict = Object.create(null);

pureDict.key = 'value';
console.log(pureDict.key); // 'value'
// console.log(pureDict.toString()); // TypeError: pureDict.toString is not a function

'toString' in pureDict; // false
\`\`\`
### 📚 Key Concepts
-   **Prototype Chain**: This technique creates an object that is at the very end of its own prototype chain.
-   **Safe Dictionaries**: Useful when using an object as a map/dictionary to prevent conflicts with built-in property names.
`,
  'method-shorthand': `
### 💡 Problem Breakdown
ES6 introduced a more concise syntax for defining methods in object literals. You can omit the `function` keyword and the colon.

### ⚙️ Solution Walkthrough
A `greet` method is defined using the shorthand syntax.
\`\`\`javascript
// Old way
const objOld = {
  greet: function() { return "Hello!"; }
};

// ES6 method shorthand
const objNew = {
  greet() { return "Hello!"; }
};
\`\`\`
Both objects are functionally identical. The shorthand is just cleaner.

### 📚 Key Concepts
-   **Syntactic Sugar**: A language feature that provides a more concise way to write code without adding new functionality.
`,
  'destructuring-with-aliases-defaults': `
### 💡 Problem Breakdown
Object destructuring syntax is flexible and allows you to combine features. This problem involves using both aliasing (renaming the variable) and providing a default value in the same statement.

### ⚙️ Solution Walkthrough
The `role` property is destructured, renamed to `userRole`, and given a default value.
\`\`\`javascript
const user = { name: "Admin" };

const { name, role: userRole = "guest" } = user;

console.log(name); // "Admin"
console.log(userRole); // "guest"
\`\`\`
### 📚 Key Concepts
-   **Destructuring**: A powerful and flexible syntax for unpacking object properties.
`,
  'json-tojson-method': `
### 💡 Problem Breakdown
You can control how an object is serialized by `JSON.stringify` by defining a `toJSON` method on the object. When `JSON.stringify` encounters an object with a `toJSON` method, it calls this method and stringifies the value *returned* by it, instead of the original object.

### ⚙️ Solution Walkthrough
A `user` object has a `toJSON` method that returns a new object with the `password` property removed.
\`\`\`javascript
const user = {
  name: "Heidi",
  password: "secret",
  toJSON() {
    return { name: this.name }; // Return a "safe" version of the object
  }
};

JSON.stringify(user); // '{"name":"Heidi"}'
\`\`\`
### 📚 Key Concepts
-   **Serialization**: Controlling the process of converting an object to a string.
-   **`toJSON`**: A special method used as a hook by `JSON.stringify`.
`,
  'object-isextensible': `
### 💡 Problem Breakdown
`Object.isExtensible()` is a method that determines if an object is extensible (i.e., if new properties can be added to it).

### ⚙️ Solution Walkthrough
The method is checked before and after using `Object.preventExtensions()`.
\`\`\`javascript
const obj = {};
Object.isExtensible(obj); // true

Object.preventExtensions(obj);
Object.isExtensible(obj); // false
\`\`\`
### 📚 Key Concepts
-   **Object Extensibility**: An attribute of an object that determines if its set of properties can be expanded.
`,
  'object-isfrozen': `
### 💡 Problem Breakdown
`Object.isFrozen()` determines if an object is frozen. An object is frozen if it is not extensible, and all of its own properties are non-configurable and non-writable.

### ⚙️ Solution Walkthrough
The method is checked on a normal object and a frozen object.
\`\`\`javascript
Object.isFrozen({}); // false

const frozenObj = Object.freeze({ a: 1 });
Object.isFrozen(frozenObj); // true
\`\`\`
### 📚 Key Concepts
-   **Immutability**: `Object.isFrozen()` is the check for the highest level of immutability provided by `Object.freeze()`.
`,
  'object-issealed': `
### 💡 Problem Breakdown
`Object.isSealed()` determines if an object is sealed. An object is sealed if it is not extensible, and all of its own properties are non-configurable.

### ⚙️ Solution Walkthrough
The method is checked on a sealed object.
\`\`\`javascript
const sealedObj = Object.seal({ a: 1 });
Object.isSealed(sealedObj); // true

// A frozen object is also sealed
const frozenObj = Object.freeze({ a: 1 });
Object.isSealed(frozenObj); // true
\`\`\`
### 📚 Key Concepts
-   **Object State**: A method for checking if an object's structure is fixed.
`,
  'this-arrow-function-method-pitfall': `
### 💡 Problem Breakdown
This demonstrates a common pitfall. Because arrow functions have lexical `this`, if you use one as a method in an object literal, its `this` will not be the object itself, but rather the surrounding scope where the object was defined (often the global `window` object).

### ⚙️ Solution Walkthrough
An object method is defined with an arrow function.
\`\`\`javascript
const myObject = {
  name: "My Object",
  // This is an anti-pattern!
  getName: () => {
    // 'this' is inherited from the surrounding scope, NOT myObject
    return this.name;
  }
};

// myObject.getName(); // In a browser, this would likely try to access window.name
\`\`\`
For object methods, you should almost always use a traditional function or the method shorthand syntax to ensure `this` is bound correctly.

### 📚 Key Concepts
-   **Lexical `this`**: The defining characteristic of `this` in arrow functions, which can be a "gotcha" in this context.
`,
  'object-constructor': `
### 💡 Problem Breakdown
While object literals (`{}`) are the most common way to create objects, you can also use the `Object` constructor with the `new` keyword.

### ⚙️ Solution Walkthrough
An object is created using `new Object()`.
\`\`\`javascript
const obj = new Object();
obj.a = 1;
// obj is { a: 1 }
\`\`\`
This is functionally equivalent to `const obj = {};`. The literal syntax is generally preferred for being more concise.

### 📚 Key Concepts
-   **Constructors**: Functions designed to be called with `new` to create object instances.
`,
  'object-tostring': `
### 💡 Problem Breakdown
The default `.toString()` method inherited by objects returns a generic string like `"[object Object]"`. However, the version of this method on `Object.prototype` is a powerful tool for type checking when used with `.call()`.

### ⚙️ Solution Walkthrough
The method is called on different data types.
\`\`\`javascript
Object.prototype.toString.call({});       // "[object Object]"
Object.prototype.toString.call([]);       // "[object Array]"
Object.prototype.toString.call(/regex/); // "[object RegExp]"
Object.prototype.toString.call(null);    // "[object Null]"
\`\`\`
This is one of the most reliable ways to get the internal `[[Class]]` of a value.

### 📚 Key Concepts
-   **Type Checking**: A robust method for determining the specific type of a value.
`,
  'deep-copy-structuredclone': `
### 💡 Problem Breakdown
The `structuredClone()` global function is a modern API for creating a deep copy of a JavaScript value. It is more robust than the `JSON.parse(JSON.stringify(obj))` trick because it can handle more data types, such as `Date`, `RegExp`, `Map`, `Set`, and cyclical references.

### ⚙️ Solution Walkthrough
An object with a `Date` is deep-copied using `structuredClone`.
\`\`\`javascript
const original = {
  name: "Event",
  date: new Date()
};

const copy = structuredClone(original);

// The objects are not the same reference
console.log(original === copy); // false
// The nested Date objects are also not the same reference
console.log(original.date === copy.date); // false
\`\`\`
### 📚 Key Concepts
-   **Deep Copy**: Creating a completely independent copy of a data structure.
-   **`structuredClone()`**: The modern, built-in API for deep copying.
`,
  'dynamic-property-access': `
### 💡 Problem Breakdown
This problem reinforces the use of bracket notation for accessing an object's property when the property name is determined at runtime (i.e., stored in a variable).

### ⚙️ Solution Walkthrough
A function takes an object and a property name string.
\`\`\`javascript
function getProperty(obj, propName) {
  return obj[propName];
}

const user = { "user": "alpha", "score": 100 };
getProperty(user, "score"); // 100
\`\`\`
Bracket notation `obj[propName]` is used because `propName` is a variable. Using `obj.propName` would incorrectly look for a property literally named "propName".

### 📚 Key Concepts
-   **Bracket Notation**: Essential for dynamic property access.
`,
  'constructor-property': `
### 💡 Problem Breakdown
Most object instances have a `.constructor` property that points back to the constructor function that created them. This can be useful for introspection.

### ⚙️ Solution Walkthrough
The `.constructor` property of an instance is checked.
\`\`\`javascript
function MyClass() {}
const instance = new MyClass();

instance.constructor === MyClass; // true
instance.constructor.name;      // "MyClass"
\`\`\`
**Note**: The `.constructor` property can be changed, so it's not a completely foolproof way to check an object's origin. `instanceof` is generally more reliable.

### 📚 Key Concepts
-   **`.constructor` Property**: A property on an instance's prototype that references the constructor function.
`,
  'factory-function-private-state': `
### 💡 Problem Breakdown
This problem combines the factory function pattern with closures to create objects with truly private state. The state is held in a variable within the factory's closure, and the returned object's methods have access to it.

### ⚙️ Solution Walkthrough
A `createCounter` factory creates a private `count` variable.
\`\`\`javascript
const createCounter = () => {
  let count = 0; // This is private to the closure.
  return {
    inc: () => ++count,
    get: () => count,
  };
};

const counter1 = createCounter();
counter1.inc();
counter1.get(); // 1

const counter2 = createCounter();
counter2.get(); // 0 (it has its own private 'count')
\`\`\`
### 📚 Key Concepts
-   **Factory Function**: A function that returns an object.
-   **Closures**: The mechanism that provides the private state for the returned object's methods.
`,
  'prototype-pollution-conceptual': `
### 💡 Problem Breakdown
Prototype pollution is a JavaScript vulnerability where an attacker modifies `Object.prototype`. Since most objects in JavaScript inherit from `Object.prototype`, this modification can add or change properties on nearly every object in the application, potentially leading to security issues like privilege escalation.

### ⚙️ Solution Walkthrough
A conceptual example shows how an unguarded object merge could be exploited.
\`\`\`javascript
// Malicious JSON payload from an attacker
const maliciousPayload = '{"__proto__": {"isAdmin": true}}';

// A vulnerable merge function
let user = {};
let data = JSON.parse(maliciousPayload);
// A simple merge could pollute the prototype
// In a real scenario, this would be a deep merge function.

// Now, every object could appear to be an admin
const anotherUser = {};
console.log(anotherUser.isAdmin); // true (if polluted)
\`\`\`
### 📚 Key Concepts
-   **Security**: Understanding how JavaScript's dynamic nature and prototype chain can be exploited.
-   **Defensive Programming**: Libraries should have checks to prevent modification of `__proto__`.
`,
  'object-defineproperties': `
### 💡 Problem Breakdown
`Object.defineProperties()` is like `Object.defineProperty()`, but it allows you to define or modify multiple properties on an object at once. It takes the object to modify and an object where the keys are the property names and the values are their descriptor objects.

### ⚙️ Solution Walkthrough
Two properties are defined on an object simultaneously.
\`\`\`javascript
const obj = {};
Object.defineProperties(obj, {
  'a': { value: 1, writable: true, enumerable: true },
  'b': { value: 2, writable: false, enumerable: true }
});

obj.a = 10; // Works
// obj.b = 20; // Fails
\`\`\`
### 📚 Key Concepts
-   **Property Descriptors**: The underlying attributes of an object's properties.
`,
  'mixin-pattern': `
### 💡 Problem Breakdown
A "mixin" is an object that contains methods that can be used by other objects. The mixin pattern is a form of composition where you can "mix in" functionality to an object or a class's prototype without using inheritance.

### ⚙️ Solution Walkthrough
An object `canFly` is created. Its methods are copied to a `bird` object using `Object.assign()`.
\`\`\`javascript
const canFly = {
  fly() {
    return \`\${this.name} is flying!\`;
  }
};

const bird = { name: "Sparrow" };
Object.assign(bird, canFly);

bird.fly(); // "Sparrow is flying!"
\`\`\`
### 📚 Key Concepts
-   **Composition**: Building objects by combining functionality from multiple sources.
`,
  'inheritance-vs-composition': `
### 💡 Problem Breakdown
This is a fundamental software design principle.
- **Inheritance (IS-A relationship)**: A `Dog` *is an* `Animal`. This creates a tight coupling between the parent and child.
- **Composition (HAS-A relationship)**: A `Car` *has an* `Engine`. This is more flexible. The car doesn't care about the specifics of the engine, only that it conforms to a certain interface.

### ⚙️ Solution Walkthrough
Favoring composition often leads to more flexible and reusable code, as you can easily swap out components (e.g., give the car a different engine) without changing the core classes. Inheritance hierarchies can become rigid and hard to manage.

### 📚 Key Concepts
-   **Software Design Principles**: High-level guidelines for writing maintainable and scalable code.
`,
  'object-reference-vs-value': `
### 💡 Problem Breakdown
This problem demonstrates a critical concept in JavaScript. Primitives (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) are passed and assigned by **value** (a copy is made). Objects (including arrays) are passed and assigned by **reference** (a pointer to the same location in memory).

### ⚙️ Solution Walkthrough
An object is assigned to a new variable. Modifying the object through the new variable also affects the original.
\`\`\`javascript
const obj1 = { a: 1 };
const obj2 = obj1; // obj2 now references the SAME object as obj1

obj2.a = 2;

console.log(obj1.a); // 2
\`\`\`
### 📚 Key Concepts
-   **Reference vs. Value**: A fundamental distinction that explains how data is passed and assigned in JavaScript.
`,
  'prototype-chain-length': `
### 💡 Problem Breakdown
The task is to write a function that calculates how many objects are in an object's prototype chain, up to and including `Object.prototype`.

### ⚙️ Solution Walkthrough
A `while` loop is used with `Object.getPrototypeOf()` to traverse up the chain until it reaches `null`.
\`\`\`javascript
function getChainLength(obj) {
  let count = 0;
  let current = obj;
  while (Object.getPrototypeOf(current)) {
    current = Object.getPrototypeOf(current);
    count++;
  }
  return count;
}
\`\`\`
### 📚 Key Concepts
-   **Prototype Chain**: The linked series of objects that JavaScript uses for inheritance.
`,
  'es5-class-pattern': `
### 💡 Problem Breakdown
This shows how "classes" were simulated in JavaScript before the `class` keyword was introduced in ES6. It involved a constructor function for properties and adding methods to its `.prototype` property.

### ⚙️ Solution Walkthrough
The pattern is demonstrated with a `Car` constructor.
\`\`\`javascript
// 1. The constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// 2. Methods are added to the prototype
Car.prototype.drive = function() {
  return \`The \${this.make} is driving.\`;
};

const myCar = new Car("Honda", "Civic");
\`\`\`
The ES6 `class` syntax is essentially syntactic sugar over this exact pattern.

### 📚 Key Concepts
-   **Prototypal Inheritance**: The underlying mechanism for object inheritance in JavaScript.
`,
  'object-key-ordering': `
### 💡 Problem Breakdown
This problem addresses the order of property keys in JavaScript objects. Since ES2015, the order is guaranteed and predictable for most operations.
1.  Integer keys (like "1", "10") come first, sorted in ascending numerical order.
2.  All other string keys come next, in the order they were inserted.
3.  Symbol keys come last, in their insertion order.

### ⚙️ Solution Walkthrough
An object is created with a mix of key types.
\`\`\`javascript
const obj = { 'b': 1, '10': 2, 'a': 3, '1': 4 };
Object.keys(obj); // ["1", "10", "b", "a"]
\`\`\`
### 📚 Key Concepts
-   **Object Property Order**: The specified order in which object keys are iterated.
`,
  'deep-object-access-optional-chaining': `
### 💡 Problem Breakdown
This is a practical application of optional chaining (`?.`) to safely access a property that is several levels deep inside an object, where any of the intermediate levels might be `null` or `undefined`.

### ⚙️ Solution Walkthrough
Optional chaining is used to access `user.profile.address.street`.
\`\`\`javascript
const user1 = { profile: { address: { street: "123 Oak St" } } };
const user2 = { profile: {} }; // 'address' is missing

user1?.profile?.address?.street; // "123 Oak St"
user2?.profile?.address?.street; // undefined (no error is thrown)
\`\`\`
### 📚 Key Concepts
-   **Optional Chaining**: A modern syntax that prevents `TypeError` when accessing properties of nullish values.
`,
  'object-property-iteration-methods': `
### 💡 Problem Breakdown
This is a conceptual comparison of the primary ways to iterate over an object's properties.
- **`for...in`**: Iterates over all *enumerable* properties, including those from the prototype chain.
- **`Object.keys(obj)`**: Returns an array of *own*, *enumerable*, string-keyed property names.
- **`Object.values(obj)`**: Returns an array of *own*, *enumerable*, string-keyed property values.
- **`Object.entries(obj)`**: Returns an array of `[key, value]` pairs for *own*, *enumerable*, string-keyed properties.

For most cases, `Object.keys`, `Object.values`, or `Object.entries` are preferred because they don't include inherited properties, which is usually the desired behavior.

### 📚 Key Concepts
-   **Object Iteration**: The different methods available for processing an object's properties.
`,
  'shadowing-prototype-property': `
### 💡 Problem Breakdown
"Shadowing" occurs when you add a property to an instance that has the same name as a property on its prototype. When you access that property on the instance, JavaScript finds the instance's "own" property first and stops searching up the prototype chain. The prototype property is not overwritten; it's just "hidden" or "shadowed".

### ⚙️ Solution Walkthrough
An instance property `value` shadows the prototype property of the same name.
\`\`\`javascript
const proto = { value: 'prototype value' };
const instance = Object.create(proto);

instance.value = 'instance value'; // This creates an "own" property

console.log(instance.value); // "instance value"
console.log(proto.value); // "prototype value"
\`\`\`
### 📚 Key Concepts
-   **Property Lookup**: The process by which the JavaScript engine searches for a property, starting on the instance and moving up the prototype chain.
`,
  'delete-from-prototype': `
### 💡 Problem Breakdown
This demonstrates the effect of the `delete` operator in the context of prototypes.
- Deleting a property from an *instance* only removes the "shadowing" property. Future lookups will then find the property on the prototype.
- Deleting a property from the *prototype* object itself will remove it from all instances that inherit from that prototype (unless they have their own shadowing property).

### ⚙️ Solution Walkthrough
A property is shadowed, then the instance property is deleted.
\`\`\`javascript
const proto = { value: 'proto' };
const instance = Object.create(proto);
instance.value = 'instance'; // Shadows the prototype

delete instance.value; // Deletes the own property

console.log(instance.value); // "proto" (now finds it on the prototype)
\`\`\`
### 📚 Key Concepts
-   **Prototype Chain**: A dynamic link. Changes to a prototype object are reflected in all objects that inherit from it.
`,
  'constructor-return-value': `
### 💡 Problem Breakdown
This explores a specific behavior of constructor functions called with `new`. Normally, a constructor implicitly returns `this`. However, if you explicitly `return` a non-primitive value (an object or array) from a constructor, that value will be returned instead of `this`.

### ⚙️ Solution Walkthrough
A constructor function explicitly returns a different object.
\`\`\`javascript
function MyClass() {
  this.a = 1; // This is assigned to the new 'this' object
  
  // But we return a different object entirely
  return { b: 2 };
}

const instance = new MyClass();
console.log(instance); // { b: 2 }
console.log(instance.a); // undefined
\`\`\`
Returning a primitive value (like a string or number) from a constructor is ignored, and `this` is returned as usual.

### 📚 Key Concepts
-   **`new` Keyword**: Understanding the detailed mechanics of the `new` operator.
`,
  'object-destructuring-rest': `
### 💡 Problem Breakdown
The rest syntax (`...`) can be used in object destructuring to collect all the remaining enumerable properties of an object into a new object. This is useful for separating a few properties you need from the rest of the object.

### ⚙️ Solution Walkthrough
The `id` property is extracted, and all other properties are collected into a `rest` object.
\`\`\`javascript
const user = { id: 1, name: 'A', age: 30, active: true };
const { id, ...rest } = user;

console.log(id);   // 1
console.log(rest); // { name: 'A', age: 30, active: true }
\`\`\`
### 📚 Key Concepts
-   **Rest Properties**: A feature for collecting remaining object properties during destructuring.
`,
  'object-getownpropertysymbols': `
### 💡 Problem Breakdown
Standard iteration methods like `Object.keys()` and `for...in` ignore properties whose keys are Symbols. `Object.getOwnPropertySymbols()` is a specific method to retrieve an array of all symbol properties found directly on a given object.

### ⚙️ Solution Walkthrough
The method is used to find a symbol-keyed property.
\`\`\`javascript
const sym1 = Symbol('s1');
const obj = {
  a: 1,
  [sym1]: 2
};

Object.keys(obj); // ["a"]
Object.getOwnPropertySymbols(obj); // [Symbol(s1)]
\`\`\`
### 📚 Key Concepts
-   **Symbol**: A unique primitive type often used for "hidden" metadata properties.
-   **Object Introspection**: Specific methods are needed to inspect symbol properties.
`,
  'this-in-arrow-function-in-method': `
### 💡 Problem Breakdown
This problem clarifies the behavior of arrow functions when used *inside* a traditional method. Because the arrow function has lexical `this`, it captures the `this` from its surrounding context, which is the method. This solves the "lost `this` context" problem for callbacks in a very clean way.

### ⚙️ Solution Walkthrough
An arrow function is used as a callback inside a method.
\`\`\`javascript
const obj = {
  name: "MyObj",
  process() {
    // This is a traditional method, so 'this' is 'obj'.
    const inner = () => {
      // This arrow function captures the 'this' from 'process'.
      return \`Inner 'this' is: \${this.name}\`;
    };
    return inner();
  }
};
obj.process(); // "Inner 'this' is: MyObj"
\`\`\`
### 📚 Key Concepts
-   **Lexical `this`**: The core feature of arrow functions that makes them ideal for callbacks within methods.
`,
  'object-hasown-polyfill-conceptual': `
### 💡 Problem Breakdown
`Object.hasOwn()` is a modern (ES2022) and safer alternative to the older `obj.hasOwnProperty()`. The problem with `hasOwnProperty` is that an object could have a property with that name, or it could have a `null` prototype, both of which would cause errors. A "polyfill" is a piece of code that provides modern functionality in older environments.

### ⚙️ Solution Walkthrough
The safe implementation uses `Object.prototype.hasOwnProperty.call(obj, key)`.
- **`Object.prototype.hasOwnProperty`**: This gets the original, trustworthy `hasOwnProperty` function directly from `Object.prototype`.
- **`.call(obj, key)`**: This calls that original function, but with `this` manually set to be our object (`obj`). This works even if `obj` has its own property named `hasOwnProperty` or doesn't inherit from `Object.prototype`.

This logic is exactly what `Object.hasOwn()` does internally.

### 📚 Key Concepts
-   **Polyfill**: A way to provide modern features in older JavaScript environments.
-   **Defensive Programming**: Writing robust code that avoids common pitfalls.
`,
  'object-property-with-spaces': `
### 💡 Problem Breakdown
Object property keys must be strings or symbols. While it's most common to use keys that are valid identifiers, you can use strings with spaces or other special characters. When you do, you must use bracket notation to access them.

### ⚙️ Solution Walkthrough
An object is created with a key containing a space.
\`\`\`javascript
const obj = {
  "my property": "value"
};

// Dot notation fails: obj.my property // SyntaxError

// Bracket notation works:
obj["my property"]; // "value"
\`\`\`
### 📚 Key Concepts
-   **Bracket Notation**: Required for property keys that are not valid JavaScript identifiers.
`,
  'object-as-hash-map': `
### 💡 Problem Breakdown
A very common use case for plain JavaScript objects is to act as a "hash map" or "dictionary" for storing and retrieving data, especially for counting frequencies.

### ⚙️ Solution Walkthrough
The function iterates through a string. For each character, it uses an object to store or increment its count.
\`\`\`javascript
const str = "hello";
const counts = {};

for (const char of str) {
  counts[char] = (counts[char] || 0) + 1;
}
// counts is { h: 1, e: 1, l: 2, o: 1 }
\`\`\`
1. **`counts[char] = (counts[char] || 0) + 1;`**: This is a concise idiom.
   - If `counts[char]` exists, it uses its value.
   - If it doesn't exist (`undefined`), the `|| 0` provides a default value of 0.
   - It then increments the value and assigns it back.

### 📚 Key Concepts
-   **Hash Map**: A data structure that maps keys to values for efficient lookup.
`,
  'proxy-vs-es5-getters': `
### 💡 Problem Breakdown
This is a conceptual problem comparing two ways to achieve computed or intercepted property access.
- **ES5 Getters**:
  - Defined *per property*. You must know the property names in advance.
  - `const obj = { get myProp() { return ... } };`
- **ES6 Proxies**:
  - The `get` trap intercepts access to *any* property on the object, including ones that don't exist.
  - More powerful and general. Can be used to implement things like default values for any property, logging, or validation.

A Proxy is a more powerful, meta-programming tool, while a getter is a simpler feature for a specific, known property.

### 📚 Key Concepts
-   **Metaprogramming**: Code that can read or manipulate other code. Proxies are a form of metaprogramming.
`,
  'prototype-chain-limit': `
### 💡 Problem Breakdown
The prototype chain must end somewhere. The final link in almost every prototype chain is `Object.prototype`. The prototype of `Object.prototype` itself is `null`. This is the signal to the JavaScript engine to stop searching for a property.

### ⚙️ Solution Walkthrough
`Object.getPrototypeOf()` is used on `Object.prototype`.
\`\`\`javascript
const p = Object.prototype;
const endOfChain = Object.getPrototypeOf(p);

console.log(endOfChain); // null
\`\`\`
### 📚 Key Concepts
-   **Prototype Chain**: A finite chain of objects that terminates with `null`.
`,
  'object-isprototypeof': `
### 💡 Problem Breakdown
The `.isPrototypeOf()` method checks if an object exists in another object's prototype chain. It's the inverse of the `instanceof` operator.

### ⚙️ Solution Walkthrough
The method is called on the prototype object.
\`\`\`javascript
function A() {}
const instance = new A();

// Does the instance inherit from A.prototype?
A.prototype.isPrototypeOf(instance); // true

// Is the instance an instance of A?
instance instanceof A; // true
\`\`\`
The syntax is `prototypeObj.isPrototypeOf(instanceObj)`.

### 📚 Key Concepts
-   **`isPrototypeOf()`**: A method for checking an object's prototype chain.
`,
  'json-stringify-space': `
### 💡 Problem Breakdown
`JSON.stringify` can take a third argument, `space`, which controls the spacing in the final string to make it more human-readable. This is often called "pretty-printing".

### ⚙️ Solution Walkthrough
The `space` argument is provided as a number.
\`\`\`javascript
const obj = { a: 1, b: { c: 2 } };
JSON.stringify(obj, null, 2); 
/*
"{
  "a": 1,
  "b": {
    "c": 2
  }
}"
*/
\`\`\`
1.  **`JSON.stringify(value, replacer, space)`**: If `space` is a number, it indicates the number of space characters to use for indentation (capped at 10). If it's a string, that string is used as the indent.

### 📚 Key Concepts
-   **JSON Formatting**: Controlling the output format of `JSON.stringify` for readability.
`,
  'object-destructuring-dynamic-key': `
### 💡 Problem Breakdown
This combines two ES6 features: computed property names and destructuring. It allows you to extract a property from an object where the key you want to extract is stored in a variable.

### ⚙️ Solution Walkthrough
Computed property syntax (`[]`) is used on the left side of a destructuring assignment.
\`\`\`javascript
const myKey = 'prop2';
const obj = { prop1: 'a', prop2: 'b' };

// Find the property named by myKey ('prop2') and
// assign its value to a new variable called 'value'.
const { [myKey]: value } = obj;

console.log(value); // 'b'
\`\`\`
### 📚 Key Concepts
-   **Computed Property Names**: Can be used in both object literals and destructuring patterns.
`,
  'deep-freeze-object-recursive': `
### 💡 Problem Breakdown
`Object.freeze()` only performs a shallow freeze. To make a nested object completely immutable, you need to traverse it and freeze every object and array within it recursively.

### ⚙️ Solution Walkthrough
A function takes an object, freezes it, and then iterates over its properties. If a property is an object, it recursively calls itself on that property.
\`\`\`javascript
function deepFreeze(obj) {
  // Freeze the top-level object.
  Object.freeze(obj);

  // Recursively freeze nested objects.
  Object.values(obj).forEach(value => {
    if (typeof value === 'object' && value !== null) {
      deepFreeze(value);
    }
  });
  return obj;
}
\`\`\`
### 📚 Key Concepts
-   **Recursion**: The core technique for traversing the nested structure.
-   **Immutability**: A pattern for creating data that cannot be changed.
`,
};
