export const explanations: Record<string, string> = {
  "create-simple-object": `
### 💡 Problem Breakdown
This is the most fundamental task when working with objects. The goal is to create an "object literal," which is a comma-separated list of key-value pairs wrapped in curly braces. This represents a single entity (like a user) and its associated data.

### ⚙️ Solution Walkthrough
The solution uses curly braces \`{}\` to define the object and colons \`: \` to separate keys from values.
\`\`\`javascript
const user = {
  name: "John Doe",
  age: 30
};
\`\`\`
1. **\`const user = ... \`\**: A constant variable \`user\` is declared to hold the object.
2. **\`{}\`\**: The curly braces define the start and end of the object.
3. **\`name: "John Doe"\`\**: This is a key-value pair. The key (or property name) is \`name\`, and its value is the string \`"John Doe"\`.
4. **\`, \`\**: A comma separates the key-value pairs.

### 📚 Key Concepts
- **Object Literal**: A syntax for creating an object in JavaScript. It's the most common and straightforward way.
- **Key-Value Pair**: The fundamental structure of an object, where a unique key maps to a specific value.
`,
  "access-object-property-dot": `
### 💡 Problem Breakdown
Once you have an object, you need to retrieve the data stored within it. Dot notation is the most common way to access an object's properties. It's used when the property key is a valid JavaScript identifier (e.g., no spaces, doesn't start with a number).

### ⚙️ Solution Walkthrough
The solution uses the object's name followed by a dot and the property name.
\`\`\`javascript
const post = { title: "My First Post", likes: 10 };
const postTitle = post.title; // "My First Post"
\`\`\`
1. **\`post\`\**: The variable holding our object.
2. **\`.\`\**: The dot operator used for property access.
3. **\`title\`\**: The name of the key whose value we want to retrieve.

### 📚 Key Concepts
- **Dot Notation**: A concise and readable syntax for accessing object properties.
- **Property Accessor**: An operator used to get the value of a property.
`,
  "access-object-property-bracket": `
### 💡 Problem Breakdown
Bracket notation is an alternative to dot notation for accessing object properties. It's used when the property key is not a valid identifier (e.g., contains spaces, starts with a number) or when the key is stored in a variable.

### ⚙️ Solution Walkthrough
The solution uses square brackets to access the property dynamically.
\`\`\`javascript
const user = { name: "Jane", age: 25, city: "New York" };
const key = "name";
const value = user[key]; // "Jane"
\`\`\`
1. **\`user[key]\`\**: The square brackets allow us to use the value of \`key\` as the property name.
2. **Dynamic Access**: Since \`key\` is a variable, we can change it to access different properties.

### 📚 Key Concepts
- **Bracket Notation**: Allows dynamic or non-identifier key access.
- **Dynamic Property Access**: Useful when property names are determined at runtime.
`,
  "add-modify-object-property": `
### 💡 Problem Breakdown
Objects in JavaScript are mutable, meaning you can add or modify properties after creation. This task involves adding a new property or updating an existing one.

### ⚙️ Solution Walkthrough
The solution adds a new property and modifies it.
\`\`\`javascript
const task = { id: 1, title: "Learn JS" };
task.status = "in-progress";
task.status = "completed";
\`\`\`
1. **\`task.status = "in-progress"\`\**: Adds a new property \`status\` to the object.
2. **\`task.status = "completed"\`\**: Updates the existing \`status\` property.

### 📚 Key Concepts
- **Mutable Objects**: Objects can be modified after creation.
- **Property Assignment**: Use dot or bracket notation to add or update properties.
`,
  "delete-object-property": `
### 💡 Problem Breakdown
You can remove properties from an object using the \`delete\` operator. This is useful when you want to clean up an object by removing unnecessary data.

### ⚙️ Solution Walkthrough
The solution removes a property using the \`delete\` operator.
\`\`\`javascript
const settings = { theme: "dark", isDraft: true, notifications: false };
delete settings.isDraft;
\`\`\`
1. **\`delete settings.isDraft\`\**: Removes the \`isDraft\` property from the object.
2. **Result**: The object no longer has the \`isDraft\` property.

### 📚 Key Concepts
- **\`delete\` Operator**: Removes a property from an object.
- **Object Mutability**: Objects can lose properties as well as gain them.
`,
  "check-property-existence": `
### 💡 Problem Breakdown
You need to check if a property exists on an object, either directly or in its prototype chain. This uses the \`in\` operator or \`hasOwnProperty\`.

### ⚙️ Solution Walkthrough
The solution checks both own and inherited properties.
\`\`\`javascript
const user = { name: "Alex" };
const proto = { country: "USA" };
Object.setPrototypeOf(user, proto);
const hasOwn = Object.prototype.hasOwnProperty.call(user, "name");
const inOp = "country" in user;
\`\`\`
1. **\`hasOwnProperty.call\`\**: Checks if \`name\` is an own property of \`user\`.
2. **\`in\` Operator**: Checks if \`country\` exists in the prototype chain.

### 📚 Key Concepts
- **\`in\` Operator**: Checks for property existence in the object and its prototype chain.
- **\`hasOwnProperty\`\**: Checks only for own properties, not inherited ones.
`,
  "get-object-keys": `
### 💡 Problem Breakdown
You need to retrieve all enumerable own property keys of an object. The \`Object.keys\` method is perfect for this.

### ⚙️ Solution Walkthrough
The solution uses \`Object.keys\` to get the keys.
\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj); // ["a", "b", "c"]
\`\`\`
1. **\`Object.keys(obj)\`\**: Returns an array of the object's enumerable own property names.

### 📚 Key Concepts
- **\`Object.keys\`\**: Returns an array of an object's own enumerable property names.
- **Enumerable Properties**: Properties that can be iterated over in loops like \`for...in\`.
`,
  "get-object-values": `
### 💡 Problem Breakdown
This task requires retrieving all enumerable own property values of an object using \`Object.values\`.

### ⚙️ Solution Walkthrough
The solution extracts values using \`Object.values\`.
\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj); // [1, 2, 3]
\`\`\`
1. **\`Object.values(obj)\`\**: Returns an array of the object's enumerable own property values.

### 📚 Key Concepts
- **\`Object.values\`\**: Returns an array of an object's own enumerable property values.
- **Enumerable Properties**: Properties that appear in loops and object methods.
`,
  "get-object-entries": `
### 💡 Problem Breakdown
To get both keys and values as an array of arrays, use \`Object.entries\`. This is useful for iterating over key-value pairs.

### ⚙️ Solution Walkthrough
The solution uses \`Object.entries\` to get key-value pairs.
\`\`\`javascript
const obj = { a: 1, b: 2 };
const entries = Object.entries(obj); // [["a", 1], ["b", 2]]
\`\`\`
1. **\`Object.entries(obj)\`\**: Returns an array of arrays, where each inner array contains a key and its value.

### 📚 Key Concepts
- **\`Object.entries\`\**: Returns an array of key-value pair arrays for own enumerable properties.
- **Key-Value Pair Iteration**: Useful for transforming or looping over object data.
`,
  "merge-objects-spread": `
### 💡 Problem Breakdown
Merging objects combines properties from multiple objects into one. The spread operator (\`...\`) is a modern way to achieve this.

### ⚙️ Solution Walkthrough
The solution merges two objects using the spread operator.
\`\`\`javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2 }
\`\`\`
1. **\`...\`\**: The spread operator copies all enumerable own properties from the source objects.
2. **Later properties override earlier ones**: If keys overlap, the last object's value is used.

### 📚 Key Concepts
- **Spread Operator**: Copies properties from one or more objects into a new object.
- **Shallow Merge**: Only top-level properties are copied, not nested objects.
`,
  "object-assign": `
### 💡 Problem Breakdown
\`Object.assign\` is an older method to merge objects, similar to the spread operator, but it mutates the target object.

### ⚙️ Solution Walkthrough
The solution uses \`Object.assign\` to merge multiple objects.
\`\`\`javascript
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3, a: 4 };
Object.assign(target, source1, source2); // target is now { a: 4, b: 2, c: 3 }
\`\`\`
1. **\`Object.assign(target, ...sources)\`\**: Copies properties from source objects to the target.
2. **Mutation**: The target object is modified directly.

### 📚 Key Concepts
- **\`Object.assign\`\**: Copies enumerable own properties from source objects to a target object.
- **Mutating Behavior**: Unlike the spread operator, it modifies the first argument.
`,
  "this-in-method": `
### 💡 Problem Breakdown
The \`this\` keyword in a method refers to the object the method is called on. This allows methods to access the object's properties dynamically.

### ⚙️ Solution Walkthrough
The solution defines a method that uses \`this\` to access the object's \`name\` property.
\`\`\`javascript
const person = {
  name: "Alice",
  greet: function() { return \`Hello, \${this.name}!\`; }
};
person.greet(); // "Hello, Alice!"
\`\`\`
1. **\`this.name\`\**: Refers to the \`name\` property of the object (\`person\`).
2. **Method Call**: The method is called on the object, setting \`this\` to the object.

### 📚 Key Concepts
- **\`this\` Keyword**: Refers to the object the method is called on.
- **Method Context**: The value of \`this\` depends on how the method is invoked.
`,
  "object-destructuring-basic": `
### 💡 Problem Breakdown
Destructuring allows you to extract properties from an object into individual variables in a single statement. It's concise and readable.

### ⚙️ Solution Walkthrough
The solution destructures two properties from an object.
\`\`\`javascript
const user = { name: "Bob", age: 42, role: "admin" };
const { name, age } = user; // name = "Bob", age = 42
\`\`\`
1. **\`{ name, age }\`\**: Specifies which properties to extract.
2. **Assignment**: Creates variables with the same names as the properties.

### 📚 Key Concepts
- **Destructuring Assignment**: Extracts object properties into variables.
- **Property Matching**: Variable names must match property names unless aliases are used.
`,
  "nested-object-access": `
### 💡 Problem Breakdown
Objects can contain other objects (nested objects). Accessing nested properties requires chaining dot or bracket notation.

### ⚙️ Solution Walkthrough
The solution accesses a deeply nested property.
\`\`\`javascript
const user = { id: 1, info: { name: "Charlie", address: { street: "123 Main St" } } };
const street = user.info.address.street; // "123 Main St"
\`\`\`
1. **Chained Dot Notation**: Each dot moves deeper into the object structure.
2. **Access**: Retrieves the value of the innermost property.

### 📚 Key Concepts
- **Nested Objects**: Objects can have properties that are themselves objects.
- **Property Access**: Use multiple dots to reach nested properties.
`,
  "nested-object-destructuring": `
### 💡 Problem Breakdown
Destructuring can also extract nested properties in a single statement, making code more concise.

### ⚙️ Solution Walkthrough
The solution destructures a nested property directly.
\`\`\`javascript
const user = { id: 1, info: { name: "David", address: { city: "London" } } };
const { info: { address: { city } } } = user; // city = "London"
\`\`\`
1. **Nested Destructuring**: The syntax mirrors the object structure.
2. **Assignment**: Creates a variable for the nested property.

### 📚 Key Concepts
- **Nested Destructuring**: Extracts deeply nested properties in one line.
- **Syntax Mirroring**: The destructuring pattern matches the object hierarchy.
`,
  "loop-object-for-in": `
### 💡 Problem Breakdown
The \`for...in\` loop iterates over an object's enumerable properties, including inherited ones. It's useful for processing object keys.

### ⚙️ Solution Walkthrough
The solution iterates over an object's keys and builds a string.
\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };
let result = "";
for (const key in obj) {
  result += \`\${key}: \${obj[key]}; \`;
}
\`\`\`
1. **\`for (const key in obj)\`\**: Iterates over each enumerable property key.
2. **Access**: Uses bracket notation to get the value for each key.

### 📚 Key Concepts
- **\`for...in\` Loop**: Iterates over enumerable properties (own and inherited).
- **Bracket Notation**: Necessary for dynamic key access in loops.
`,
  "object-freeze": `
### 💡 Problem Breakdown
Freezing an object prevents any modifications, including adding, deleting, or changing properties. Use \`Object.freeze\` for this.

### ⚙️ Solution Walkthrough
The solution freezes an object and attempts modifications.
\`\`\`javascript
const obj = { prop: "value" };
Object.freeze(obj);
obj.prop = "new value"; // Fails silently in non-strict mode
\`\`\`
1. **\`Object.freeze(obj)\`\**: Makes the object immutable.
2. **Attempted Modification**: Changes are ignored.

### 📚 Key Concepts
- **\`Object.freeze\`\**: Prevents all modifications to an object.
- **Immutability**: Useful for ensuring data integrity.
`,
  "object-seal": `
### 💡 Problem Breakdown
Sealing an object prevents adding or deleting properties but allows modifying existing ones. Use \`Object.seal\` for this.

### ⚙️ Solution Walkthrough
The solution seals an object and tests modifications.
\`\`\`javascript
const obj = { prop: "value" };
Object.seal(obj);
obj.prop = "new value"; // Allowed
obj.newProp = 123; // Fails silently
\`\`\`
1. **\`Object.seal(obj)\`\**: Prevents adding or removing properties.
2. **Modification**: Existing properties can still be changed.

### 📚 Key Concepts
- **\`Object.seal\`\**: Restricts object structure but allows property updates.
- **Partial Immutability**: Balances flexibility and control.
`,
  "constructor-function": `
### 💡 Problem Breakdown
Constructor functions create objects with shared behavior via prototypes. They are called with the \`new\` keyword.

### ⚙️ Solution Walkthrough
The solution defines a constructor and creates an instance.
\`\`\`javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}
const myCar = new Car("Toyota", "Corolla");
\`\`\`
1. **Constructor**: Defines properties on the new object using \`this\`.
2. **\`new\` Keyword**: Creates an instance with the constructor's prototype.

### 📚 Key Concepts
- **Constructor Function**: A blueprint for creating objects.
- **\`new\` Operator**: Sets up the object and its prototype chain.
`,
  "prototype-property": `
### 💡 Problem Breakdown
The prototype property on constructor functions allows adding shared methods to all instances.

### ⚙️ Solution Walkthrough
The solution adds a method to a constructor's prototype.
\`\`\`javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.drive = function() { return \`The \${this.make} is driving.\`; };
const myCar = new Car("Ford", "Focus");
\`\`\`
1. **\`Car.prototype\`\**: The shared blueprint for all instances.
2. **Method Addition**: Adds a method accessible to all instances.

### 📚 Key Concepts
- **Prototype**: A shared object for all instances of a constructor.
- **Shared Methods**: Saves memory by defining methods once on the prototype.
`,
  "prototypal-inheritance": `
### 💡 Problem Breakdown
Prototypal inheritance allows one constructor to inherit properties and methods from another via the prototype chain.

### ⚙️ Solution Walkthrough
The solution sets up inheritance between two constructors.
\`\`\`javascript
function Car(make) { this.make = make; }
Car.prototype.drive = function() { return \`The \${this.make} is driving.\`; };
function ElectricCar(make, battery) {
  Car.call(this, make);
  this.battery = battery;
}
ElectricCar.prototype = Object.create(Car.prototype);
\`\`\`
1. **\`Car.call(this, make)\`\**: Inherits instance properties.
2. **\`Object.create\`\**: Sets up the prototype chain.

### 📚 Key Concepts
- **Prototypal Inheritance**: Objects inherit from other objects via prototypes.
- **Prototype Chain**: Properties are looked up through the chain.
`,
  "object-create": `
### 💡 Problem Breakdown
\`Object.create\` creates a new object with a specified prototype, allowing manual control over inheritance.

### ⚙️ Solution Walkthrough
The solution creates an object with a custom prototype.
\`\`\`javascript
const vehiclePrototype = { drive() { return "Moving..."; } };
const car = Object.create(vehiclePrototype);
\`\`\`
1. **\`Object.create\`\**: Creates a new object with the specified prototype.
2. **Inheritance**: The new object inherits the prototype's properties.

### 📚 Key Concepts
- **\`Object.create\`\**: Creates objects with a custom prototype.
- **Manual Inheritance**: Fine-grained control over the prototype chain.
`,
  "proto-vs-prototype": `
### 💡 Problem Breakdown
Understanding the difference between \`__proto__\` and \`prototype\` is key to mastering JavaScript's object model.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
function MyClass() {}
const instance = new MyClass();
instance.__proto__ === MyClass.prototype; // true
\`\`\`
1. **\`prototype\`\**: A property on constructor functions, used as the blueprint for instances.
2. **\`__proto__\`\**: An internal property on instances, pointing to their prototype.

### 📚 Key Concepts
- **\`prototype\`\**: The constructor's blueprint for instances.
- **\`__proto__\`\**: The instance's link to its prototype (getter/setter).
`,
  "instanceof-operator": `
### 💡 Problem Breakdown
The \`instanceof\` operator checks if an object is an instance of a constructor by examining the prototype chain.

### ⚙️ Solution Walkthrough
The solution tests if an object is an instance of a constructor.
\`\`\`javascript
function Dog() {}
const buddy = new Dog();
buddy instanceof Dog; // true
\`\`\`
1. **\`instanceof\`\**: Checks if the constructor's prototype is in the object's prototype chain.

### 📚 Key Concepts
- **\`instanceof\`\**: Tests prototype chain membership.
- **Prototype Chain**: Used to determine inheritance relationships.
`,
  "object-is": `
### 💡 Problem Breakdown
\`Object.is\` is a method for comparing values, handling edge cases like \`NaN\` and \`-0\` differently from \`===\`.

### ⚙️ Solution Walkthrough
The solution compares values using \`Object.is\`.
\`\`\`javascript
Object.is(NaN, NaN); // true
NaN === NaN; // false
\`\`\`
1. **\`Object.is\`\**: Compares values with strict equality but treats \`NaN\` as equal.
2. **Edge Cases**: Handles \`-0\` vs. \`0\` and \`NaN\` specially.

### 📚 Key Concepts
- **\`Object.is\`\**: A stricter equality check with special cases.
- **Edge Cases**: Important for handling non-standard values like \`NaN\`.
`,
  "optional-chaining": `
### 💡 Problem Breakdown
Optional chaining (\`?.\`) allows safe access to nested properties without throwing errors if a property is undefined or null.

### ⚙️ Solution Walkthrough
The solution uses optional chaining to access a potentially missing property.
\`\`\`javascript
const user = { name: "Eve" };
user?.address?.street; // undefined, no error
\`\`\`
1. **\`?.\`\**: Checks if the property exists before accessing it.
2. **Safe Access**: Prevents runtime errors on undefined properties.

### 📚 Key Concepts
- **Optional Chaining**: Prevents errors when accessing nested properties.
- **Null Safety**: Works with both \`null\` and \`undefined\`.
`,
  "nullish-coalescing-object": `
### 💡 Problem Breakdown
The nullish coalescing operator (\`??\`) provides a default value when a property is \`null\` or \`undefined\`, but not for falsy values like \`0\` or empty strings.

### ⚙️ Solution Walkthrough
The solution uses \`??\` to provide a default for a missing property.
\`\`\`javascript
const settings = { theme: null };
const effectiveTheme = settings.theme ?? "light"; // "light"
\`\`\`
1. **\`??\`\**: Returns the right-hand value if the left-hand is \`null\` or \`undefined\`.
2. **Default Value**: Useful for safe fallbacks.

### 📚 Key Concepts
- **Nullish Coalescing**: A safer alternative to \`||\` for defaults.
- **Nullish Values**: Only \`null\` and \`undefined\` trigger the default.
`,
  "shorthand-property-names": `
### 💡 Problem Breakdown
Shorthand property names allow creating objects with variable names as keys without repeating the name.

### ⚙️ Solution Walkthrough
The solution uses shorthand syntax for object creation.
\`\`\`javascript
const name = "Frank", age = 50;
const obj = { name, age }; // { name: "Frank", age: 50 }
\`\`\`
1. **Shorthand Syntax**: Omits the key when it matches the variable name.
2. **Concise**: Reduces boilerplate in object literals.

### 📚 Key Concepts
- **Shorthand Property Names**: Simplifies object creation.
- **ES6 Feature**: Part of modern JavaScript syntax.
`,
  "computed-property-names": `
### 💡 Problem Breakdown
Computed property names allow dynamic key names in object literals using expressions inside square brackets.

### ⚙️ Solution Walkthrough
The solution creates an object with a dynamic key.
\`\`\`javascript
const propName = "role";
const obj = { name: "Grace", [propName]: "editor" };
\`\`\`
1. **\`[propName]\`\**: The expression inside brackets becomes the key.
2. **Dynamic Keys**: Enables flexible object creation.

### 📚 Key Concepts
- **Computed Property Names**: Allows runtime-determined property names.
- **ES6 Feature**: Enhances object literal flexibility.
`,
  "getter-syntax": `
### 💡 Problem Breakdown
Getters are special methods that allow property-like access to computed values.

### ⚙️ Solution Walkthrough
The solution defines a getter for a computed property.
\`\`\`javascript
const person = {
  firstName: "John",
  lastName: "Smith",
  get fullName() { return \`\${this.firstName} \${this.lastName}\`; }
};
person.fullName; // "John Smith"
\`\`\`
1. **\`get\`\**: Defines a getter method that acts like a property.
2. **Computed Property**: The value is calculated on access.

### 📚 Key Concepts
- **Getters**: Methods that look like properties when accessed.
- **Encapsulation**: Hides computation logic behind property-like syntax.
`,
  "setter-syntax": `
### 💡 Problem Breakdown
Setters allow defining custom behavior when a property is assigned a value.

### ⚙️ Solution Walkthrough
The solution defines a setter to split a full name.
\`\`\`javascript
const person = {
  firstName: "John",
  lastName: "Smith",
  set fullName(name) { [this.firstName, this.lastName] = name.split(" "); }
};
person.fullName = "Jane Doe";
\`\`\`
1. **\`set\`\**: Defines a setter method for the property.
2. **Custom Assignment**: Processes the assigned value.

### 📚 Key Concepts
- **Setters**: Methods that handle property assignments.
- **Encapsulation**: Allows custom logic for property updates.
`,
  "object-from-entries": `
### 💡 Problem Breakdown
\`Object.fromEntries\` creates an object from an array of key-value pairs, the inverse of \`Object.entries\`.

### ⚙️ Solution Walkthrough
The solution converts an array of entries into an object.
\`\`\`javascript
const entries = [["a", 1], ["b", 2]];
const obj = Object.fromEntries(entries); // { a: 1, b: 2 }
\`\`\`
1. **\`Object.fromEntries\`\**: Takes an array of [key, value] pairs and creates an object.
2. **Inverse Operation**: Complements \`Object.entries\`.

### 📚 Key Concepts
- **\`Object.fromEntries\`\**: Creates objects from key-value pair arrays.
- **Data Transformation**: Useful for converting data structures.
`,
  "json-stringify": `
### 💡 Problem Breakdown
\`JSON.stringify\` converts an object to a JSON string, useful for serialization.

### ⚙️ Solution Walkthrough
The solution stringifies an object with formatting.
\`\`\`javascript
const obj = { id: 1, name: "A book", inStock: true };
JSON.stringify(obj, null, 2);
\`\`\`
1. **\`JSON.stringify(obj, null, 2)\`\**: Converts the object to a formatted JSON string.
2. **Formatting**: The \`2\` argument adds indentation for readability.

### 📚 Key Concepts
- **Serialization**: Converting objects to strings for storage or transmission.
- **\`JSON.stringify\`\**: Standard method for object-to-string conversion.
`,
  "json-parse": `
### 💡 Problem Breakdown
\`JSON.parse\` converts a JSON string back into a JavaScript object.

### ⚙️ Solution Walkthrough
The solution parses a JSON string and accesses a property.
\`\`\`javascript
const json = '{"name": "Heidi"}';
const obj = JSON.parse(json);
obj.name; // "Heidi"
\`\`\`
1. **\`JSON.parse\`\**: Converts a JSON string to an object.
2. **Property Access**: Uses the resulting object like any other.

### 📚 Key Concepts
- **Deserialization**: Converting strings back to objects.
- **\`JSON.parse\`\**: Standard method for string-to-object conversion.
`,
  "json-stringify-replacer": `
### 💡 Problem Breakdown
The replacer parameter in \`JSON.stringify\` allows selective serialization of properties.

### ⚙️ Solution Walkthrough
The solution stringifies only specific properties.
\`\`\`javascript
const obj = { id: 123, name: "Heidi", password: "secret" };
JSON.stringify(obj, ["id", "name"], 2);
\`\`\`
1. **Replacer Array**: Specifies which properties to include.
2. **Formatting**: Adds indentation for readability.

### 📚 Key Concepts
- **Selective Serialization**: Control which properties are included in the JSON output.
- **Replacer Function**: Can also be a function for custom serialization logic.
`,
  "shallow-copy": `
### 💡 Problem Breakdown
A shallow copy duplicates top-level properties but shares nested objects.

### ⚙️ Solution Walkthrough
The solution creates a shallow copy and modifies a nested property.
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };
copy.b.c = 200; // Affects original.b.c
\`\`\`
1. **\`...\`\**: Creates a shallow copy of the object.
2. **Nested Mutation**: Changes to nested objects affect the original.

### 📚 Key Concepts
- **Shallow Copy**: Copies top-level properties only.
- **Reference Sharing**: Nested objects are not copied, only referenced.
`,
  "deep-copy-json": `
### 💡 Problem Breakdown
A deep copy creates a completely independent copy of an object, including nested objects, using \`JSON.stringify\` and \`JSON.parse\`.

### ⚙️ Solution Walkthrough
The solution creates a deep copy and modifies it.
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
copy.b.c = 200; // Does not affect original
\`\`\`
1. **\`JSON.stringify\`\**: Converts the object to a string.
2. **\`JSON.parse\`\**: Converts the string back to a new object.

### 📚 Key Concepts
- **Deep Copy**: Creates a fully independent copy.
- **Serialization Limitation**: Cannot handle functions or special objects like Dates.
`,
  "this-with-bind": `
### 💡 Problem Breakdown
The \`bind\` method creates a new function with a fixed \`this\` context, useful when a method is used outside its object.

### ⚙️ Solution Walkthrough
The solution binds a method to its object.
\`\`\`javascript
const user = {
  name: "Ivy",
  getName: function() { return this.name; }
};
const boundGetName = user.getName.bind(user);
boundGetName(); // "Ivy"
\`\`\`
1. **\`bind\`\**: Creates a new function with \`this\` set to \`user\`.
2. **Context Preservation**: Ensures the method works correctly when called standalone.

### 📚 Key Concepts
- **\`bind\`\**: Fixes the \`this\` context of a function.
- **Method Extraction**: Useful when passing methods as callbacks.
`,
  "check-empty-object": `
### 💡 Problem Breakdown
Checking if an object is empty involves verifying it has no own enumerable properties.

### ⚙️ Solution Walkthrough
The solution checks the length of the keys array.
\`\`\`javascript
const obj = {};
Object.keys(obj).length === 0; // true
\`\`\`
1. **\`Object.keys\`\**: Returns an array of own enumerable property names.
2. **Length Check**: An empty array means the object is empty.

### 📚 Key Concepts
- **Empty Object**: An object with no own enumerable properties.
- **\`Object.keys\`\**: Reliable way to check object contents.
`,
  "invert-key-value": `
### 💡 Problem Breakdown
Inverting an object swaps its keys and values, creating a new object where values become keys and vice versa.

### ⚙️ Solution Walkthrough
The solution uses \`Object.entries\` and \`Object.fromEntries\`.
\`\`\`javascript
const obj = { a: "1", b: "2" };
const inverted = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
\`\`\`
1. **\`Object.entries\`\**: Converts the object to an array of key-value pairs.
2. **Map and Swap**: Swaps each pair's key and value.
3. **\`Object.fromEntries\`\**: Converts the array back to an object.

### 📚 Key Concepts
- **Key-Value Inversion**: Useful for lookup tables.
- **Data Transformation**: Combines multiple object methods for complex operations.
`,
  "property-descriptors": `
### 💡 Problem Breakdown
Property descriptors provide metadata about an object's properties, like writability and enumerability.

### ⚙️ Solution Walkthrough
The solution retrieves a property descriptor.
\`\`\`javascript
const obj = { a: 1 };
Object.getOwnPropertyDescriptor(obj, "a"); // { value: 1, writable: true, enumerable: true, configurable: true }
\`\`\`
1. **\`Object.getOwnPropertyDescriptor\`\**: Returns the descriptor for a specific property.

### 📚 Key Concepts
- **Property Descriptors**: Metadata about properties (value, writable, enumerable, configurable).
- **Fine-Grained Control**: Allows precise property behavior customization.
`,
  "object-define-property": `
### 💡 Problem Breakdown
\`Object.defineProperty\` allows defining or modifying a property with specific attributes (e.g., read-only).

### ⚙️ Solution Walkthrough
The solution defines a read-only property.
\`\`\`javascript
const obj = {};
Object.defineProperty(obj, "readOnly", { value: 10, writable: false });
obj.readOnly = 20; // Fails silently
\`\`\`
1. **\`Object.defineProperty\`\**: Sets the property with specified attributes.
2. **\`writable: false\`\**: Prevents the property from being modified.

### 📚 Key Concepts
- **Property Attributes**: Control behavior like writability and enumerability.
- **\`Object.defineProperty\`\**: Precise property definition.
`,
  "enumerable-properties": `
### 💡 Problem Breakdown
Enumerable properties are those that appear in loops and object methods like \`Object.keys\`. Non-enumerable properties are hidden from these.

### ⚙️ Solution Walkthrough
The solution defines a non-enumerable property.
\`\`\`javascript
const obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2, enumerable: false });
Object.keys(obj); // ["a"]
\`\`\`
1. **\`enumerable: false\`\**: Hides the property from iteration.
2. **\`Object.keys\`\**: Only returns enumerable properties.

### 📚 Key Concepts
- **Enumerable Properties**: Appear in loops and object methods.
- **Property Attributes**: Control visibility in iteration.
`,
  "object-prevent-extensions": `
### 💡 Problem Breakdown
\`Object.preventExtensions\` prevents adding new properties to an object but allows modifying or deleting existing ones.

### ⚙️ Solution Walkthrough
The solution prevents extensions and tests it.
\`\`\`javascript
const obj = { a: 1 };
Object.preventExtensions(obj);
obj.b = 2; // Fails silently
\`\`\`
1. **\`Object.preventExtensions\`\**: Locks the object's structure.
2. **Existing Properties**: Can still be modified or deleted.

### 📚 Key Concepts
- **\`Object.preventExtensions\`\**: Prevents adding new properties.
- **Partial Restriction**: Less strict than sealing or freezing.
`,
  "compare-objects": `
### 💡 Problem Breakdown
Comparing objects for equality involves checking if they have the same keys and values. Objects are never equal by reference unless they are the same object.

### ⚙️ Solution Walkthrough
The solution compares two objects manually.
\`\`\`javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every(key => obj2[key] === obj1[key]);
\`\`\`
1. **Key Comparison**: Checks if both objects have the same number of keys.
2. **Value Comparison**: Ensures each key maps to the same value.

### 📚 Key Concepts
- **Object Equality**: Requires manual comparison of keys and values.
- **Reference Inequality**: Different objects are never equal by reference.
`,
  "map-vs-object": `
### 💡 Problem Breakdown
\`Map\` is an alternative to objects for key-value storage, with advantages like arbitrary key types and guaranteed order.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
const map = new Map([["key1", "value1"], [true, "value2"]]);
const obj = { key1: "value1", true: "value2" };
\`\`\`
1. **\`Map\`\**: Allows any type as keys (e.g., booleans, objects).
2. **Object**: Keys are coerced to strings or symbols.

### 📚 Key Concepts
- **\`Map\`\**: A collection for key-value pairs with flexible keys.
- **Key Order**: \`Map\` preserves insertion order; objects may not (pre-ES2015).
`,
  "object-get-prototype-of": `
### 💡 Problem Breakdown
\`Object.getPrototypeOf\` retrieves an object's prototype, revealing its inheritance chain.

### ⚙️ Solution Walkthrough
The solution gets the prototype of an instance.
\`\`\`javascript
function Animal() {}
const leo = new Animal();
Object.getPrototypeOf(leo) === Animal.prototype; // true
\`\`\`
1. **\`Object.getPrototypeOf\`\**: Returns the object's prototype.
2. **Prototype Chain**: Shows the inheritance structure.

### 📚 Key Concepts
- **Prototype**: The object from which another object inherits.
- **\`Object.getPrototypeOf\`\**: Accesses an object's prototype.
`,
  "object-set-prototype-of": `
### 💡 Problem Breakdown
\`Object.setPrototypeOf\` changes an object's prototype, allowing dynamic inheritance changes (use cautiously due to performance).

### ⚙️ Solution Walkthrough
The solution sets a new prototype for an object.
\`\`\`javascript
const dog = {};
const animal = { speak: () => "Animal sound" };
Object.setPrototypeOf(dog, animal);
dog.speak(); // "Animal sound"
\`\`\`
1. **\`Object.setPrototypeOf\`\**: Sets the prototype of \`dog\` to \`animal\`.
2. **Dynamic Inheritance**: Adds inherited behavior.

### 📚 Key Concepts
- **Dynamic Prototype**: Change an object's prototype at runtime.
- **Performance Note**: Use sparingly due to optimization issues.
`,
  "factory-function": `
### 💡 Problem Breakdown
Factory functions create objects without using constructors or prototypes, offering a simple alternative for object creation.

### ⚙️ Solution Walkthrough
The solution creates a user object with a factory function.
\`\`\`javascript
const createUser = (name, age) => ({
  name,
  age,
  greet() { return \`Hi, I'm \${this.name}\`; }
});
const user = createUser("Jack", 28);
\`\`\`
1. **Factory Function**: Returns a new object with properties and methods.
2. **No Prototype**: Avoids constructor-based inheritance.

### 📚 Key Concepts
- **Factory Function**: A function that returns a new object.
- **Encapsulation**: Can include private state via closures.
`,
  "prototype-chain-conceptual": `
### 💡 Problem Breakdown
The prototype chain is how JavaScript resolves property lookups, moving up from an object to its prototype, and so on.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
const obj = {};
obj.__proto__ === Object.prototype; // true
Object.prototype.toString; // Exists
\`\`\`
1. **Property Lookup**: If a property isn't found on the object, JS checks its prototype.
2. **Chain End**: The chain ends at \`Object.prototype\`, whose prototype is \`null\`.

### 📚 Key Concepts
- **Prototype Chain**: The sequence of objects checked for property lookup.
- **Inheritance**: Properties are inherited through the chain.
`,
  "this-lost-context": `
### 💡 Problem Breakdown
When a method is called outside its object, \`this\` may lose its context, leading to errors in strict mode.

### ⚙️ Solution Walkthrough
The solution demonstrates the issue and a fix with \`bind\`.
\`\`\`javascript
const person = {
  name: "Jill",
  greet() { return this.name; }
};
const standaloneGreet = person.greet;
// standaloneGreet(); // Error in strict mode
person.greet.bind(person)(); // "Jill"
\`\`\`
1. **Lost Context**: \`this\` is undefined when the method is called standalone.
2. **\`bind\`\**: Fixes the context to the original object.

### 📚 Key Concepts
- **\`this\` Context**: Depends on how a function is called.
- **\`bind\`\**: Ensures the correct \`this\` value.
`,
  "object-create-null": `
### 💡 Problem Breakdown
\`Object.create(null)\` creates an object with no prototype, useful for clean dictionaries without inherited properties.

### ⚙️ Solution Walkthrough
The solution creates a prototype-less object.
\`\`\`javascript
const dict = Object.create(null);
dict.key = "value";
dict.toString; // undefined
\`\`\`
1. **\`Object.create(null)\`\**: Creates an object with no prototype.
2. **No Inherited Properties**: Avoids methods like \`toString\`.

### 📚 Key Concepts
- **Prototype-less Object**: No inherited properties or methods.
- **Dictionary Use Case**: Ideal for pure key-value storage.
`,
  "method-shorthand": `
### 💡 Problem Breakdown
Method shorthand in object literals simplifies defining methods without the \`function\` keyword.

### ⚙️ Solution Walkthrough
The solution uses method shorthand.
\`\`\`javascript
const obj = {
  greet() { return "Hello!"; }
};
obj.greet(); // "Hello!"
\`\`\`
1. **Method Shorthand**: Omits the \`function\` keyword for conciseness.
2. **Same Behavior**: Behaves like a traditional method.

### 📚 Key Concepts
- **Method Shorthand**: A concise ES6 syntax for object methods.
- **Readability**: Improves code clarity.
`,
  "destructuring-with-aliases-defaults": `
### 💡 Problem Breakdown
Destructuring can use aliases (different variable names) and default values for missing properties.

### ⚙️ Solution Walkthrough
The solution destructures with aliases and defaults.
\`\`\`javascript
const { a: alpha = "default", b: beta } = { b: 2 };
\`\`\`
1. **Alias (\`a: alpha\`\)**: Assigns the value of \`a\` to a variable named \`alpha\`.
2. **Default (\`= "default"\`\)**: Provides a fallback if the property is missing.

### 📚 Key Concepts
- **Destructuring Aliases**: Rename properties during extraction.
- **Default Values**: Handle missing properties gracefully.
`,
  "json-tojson-method": `
### 💡 Problem Breakdown
The \`toJSON\` method on an object customizes its serialization behavior in \`JSON.stringify\`.

### ⚙️ Solution Walkthrough
The solution defines a custom \`toJSON\` method.
\`\`\`javascript
const obj = {
  a: 1,
  toJSON() { return { b: this.a * 2 }; }
};
JSON.stringify(obj); // '{"b":2}'
\`\`\`
1. **\`toJSON\`\**: Called automatically by \`JSON.stringify\`.
2. **Custom Serialization**: Returns a different object structure.

### 📚 Key Concepts
- **\`toJSON\`\**: Customizes JSON serialization.
- **Serialization Control**: Allows fine-grained output control.
`,
  "object-isextensible": `
### 💡 Problem Breakdown
\`Object.isExtensible\` checks if an object can have new properties added.

### ⚙️ Solution Walkthrough
The solution tests extensibility.
\`\`\`javascript
Object.isExtensible({}); // true
Object.isExtensible(Object.preventExtensions({})); // false
\`\`\`
1. **\`Object.isExtensible\`\**: Returns true if new properties can be added.
2. **Effect of Extensions**: Shows the impact of \`preventExtensions\`.

### 📚 Key Concepts
- **Extensibility**: Whether an object can accept new properties.
- **\`Object.isExtensible\`\**: Checks the extensibility state.
`,
  "object-isfrozen": `
### 💡 Problem Breakdown
\`Object.isFrozen\` checks if an object is frozen (immutable and non-extensible).

### ⚙️ Solution Walkthrough
The solution tests if an object is frozen.
\`\`\`javascript
Object.isFrozen(Object.freeze({})); // true
\`\`\`
1. **\`Object.isFrozen\`\**: Returns true if the object is frozen.
2. **Immutability Check**: Verifies no changes are possible.

### 📚 Key Concepts
- **Frozen Object**: Cannot be modified, extended, or reconfigured.
- **\`Object.isFrozen\`\**: Checks the frozen state.
`,
  "object-issealed": `
### 💡 Problem Breakdown
\`Object.isSealed\` checks if an object is sealed (non-extensible and non-configurable).

### ⚙️ Solution Walkthrough
The solution tests if an object is sealed.
\`\`\`javascript
Object.isSealed(Object.seal({})); // true
\`\`\`
1. **\`Object.isSealed\`\**: Returns true if the object is sealed.
2. **Sealed State**: Properties cannot be added or reconfigured.

### 📚 Key Concepts
- **Sealed Object**: Non-extensible and non-configurable.
- **\`Object.isSealed\`\**: Checks the sealed state.
`,
  "this-arrow-function-method-pitfall": `
### 💡 Problem Breakdown
Arrow functions do not have their own \`this\`; they inherit it from the surrounding scope, which can be problematic in object methods.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
const obj = {
  name: "MyObj",
  process: () => this.name // 'this' is not obj, but the outer scope
};
\`\`\`
1. **Arrow Function**: Inherits \`this\` from the lexical scope, not the object.
2. **Pitfall**: Avoid arrow functions for methods expecting object context.

### 📚 Key Concepts
- **Arrow Function \`this\`\**: Lexically scoped, not dynamically bound.
- **Method Definition**: Use regular functions for object methods.
`,
  "object-constructor": `
### 💡 Problem Breakdown
The \`Object\` constructor creates a new object, equivalent to an object literal.

### ⚙️ Solution Walkthrough
The solution creates an object using the constructor.
\`\`\`javascript
const obj = new Object();
obj.a = 1;
\`\`\`
1. **\`new Object()\`\**: Creates a new empty object.
2. **Property Assignment**: Adds properties like with an object literal.

### 📚 Key Concepts
- **\`Object\` Constructor**: An alternative to object literals.
- **Basic Object Creation**: Rarely used but equivalent to \`{}\`.
`,
  "object-tostring": `
### 💡 Problem Breakdown
The \`toString\` method converts an object to a string representation, and \`Object.prototype.toString\` reveals an object's type.

### ⚙️ Solution Walkthrough
The solution demonstrates different \`toString\` behaviors.
\`\`\`javascript
[1, 2].toString(); // "1,2"
Object.prototype.toString.call([1, 2]); // "[object Array]"
\`\`\`
1. **\`toString\`\**: Returns a string representation of the object.
2. **\`Object.prototype.toString\`\**: Reveals the object's internal type.

### 📚 Key Concepts
- **\`toString\`\**: Converts objects to strings.
- **Type Checking**: Use \`Object.prototype.toString\` for reliable type detection.
`,
  "deep-copy-structuredclone": `
### 💡 Problem Breakdown
\`structuredClone\` creates a deep copy of an object, including special types like Dates, unlike JSON-based copying.

### ⚙️ Solution Walkthrough
The solution uses \`structuredClone\` for a deep copy.
\`\`\`javascript
const original = { a: 1, b: new Date() };
const copy = structuredClone(original);
copy.a = 100;
\`\`\`
1. **\`structuredClone\`\**: Creates a deep copy of the object.
2. **Independence**: Modifications to the copy don't affect the original.

### 📚 Key Concepts
- **Deep Copy**: Fully independent copy, including nested objects.
- **\`structuredClone\`\**: Modern API for deep copying with broader support.
`,
  "dynamic-property-access": `
### 💡 Problem Breakdown
Dynamic property access uses bracket notation to access properties with variable names.

### ⚙️ Solution Walkthrough
The solution accesses a property dynamically.
\`\`\`javascript
const obj = { prop: "value" };
const propName = "prop";
obj[propName]; // "value"
\`\`\`
1. **Bracket Notation**: Uses a variable to determine the property name.
2. **Dynamic Access**: Flexible for runtime property names.

### 📚 Key Concepts
- **Dynamic Property Access**: Access properties using variables.
- **Bracket Notation**: Essential for non-static property access.
`,
  "constructor-property": `
### 💡 Problem Breakdown
The \`constructor\` property on an instance points to its constructor function.

### ⚙️ Solution Walkthrough
The solution accesses the constructor's name.
\`\`\`javascript
function MyClass() {}
const instance = new MyClass();
instance.constructor.name; // "MyClass"
\`\`\`
1. **\`constructor\`\**: References the function that created the instance.
2. **Name Property**: Useful for debugging or type checking.

### 📚 Key Concepts
- **\`constructor\`\**: Links an instance to its constructor.
- **Prototype Chain**: Part of the inheritance mechanism.
`,
  "factory-function-private-state": `
### 💡 Problem Breakdown
Factory functions can encapsulate private state using closures, unlike constructors.

### ⚙️ Solution Walkthrough
The solution creates a counter with private state.
\`\`\`javascript
const createCounter = () => {
  let count = 0;
  return {
    inc: () => ++count,
    get: () => count
  };
};
const counter = createCounter();
counter.inc();
counter.get(); // 1
\`\`\`
1. **Closure**: The inner functions retain access to \`count\`.
2. **Private State**: \`count\` is inaccessible outside the returned object.

### 📚 Key Concepts
- **Closure**: Functions retaining access to their outer scope.
- **Private State**: Encapsulation without exposing internal variables.
`,
  "prototype-pollution-conceptual": `
### 💡 Problem Breakdown
Prototype pollution is a security vulnerability where modifying \`Object.prototype\` affects all objects.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
Object.prototype.isAdmin = true;
const user = {};
user.isAdmin; // true (unexpected!)
\`\`\`
1. **Prototype Modification**: Changes to \`Object.prototype\` affect all objects.
2. **Security Risk**: Can lead to unintended behavior in applications.

### 📚 Key Concepts
- **Prototype Pollution**: Modifying shared prototypes.
- **Security Practices**: Avoid modifying built-in prototypes.
`,
  "object-defineproperties": `
### 💡 Problem Breakdown
\`Object.defineProperties\` defines multiple properties with specific attributes at once.

### ⚙️ Solution Walkthrough
The solution defines multiple properties with attributes.
\`\`\`javascript
const obj = {};
Object.defineProperties(obj, {
  a: { value: 1, writable: true },
  b: { value: 2, writable: false }
});
\`\`\`
1. **\`Object.defineProperties\`\**: Sets multiple properties with descriptors.
2. **Attributes**: Controls writability, enumerability, etc.

### 📚 Key Concepts
- **Property Descriptors**: Define behavior for multiple properties.
- **Bulk Definition**: More efficient than multiple \`defineProperty\` calls.
`,
  "mixin-pattern": `
### 💡 Problem Breakdown
The mixin pattern adds functionality to objects by copying properties from another object.

### ⚙️ Solution Walkthrough
The solution applies a mixin to an object.
\`\`\`javascript
const canFly = { fly() { return "Flying!"; } };
const bird = { name: "Sparrow" };
Object.assign(bird, canFly);
bird.fly(); // "Flying!"
\`\`\`
1. **\`Object.assign\`\**: Copies properties from the mixin to the target.
2. **Mixin**: A reusable set of properties or methods.

### 📚 Key Concepts
- **Mixin Pattern**: Adds functionality without inheritance.
- **Composition**: Combines behaviors from multiple sources.
`,
  "inheritance-vs-composition": `
### 💡 Problem Breakdown
Inheritance uses a prototype chain (IS-A), while composition uses object inclusion (HAS-A). Composition is often more flexible.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
// Inheritance
class Dog extends Animal {}
// Composition
class Car {
  constructor() { this.engine = new Engine(); }
}
\`\`\`
1. **Inheritance**: Creates an IS-A relationship via prototypes.
2. **Composition**: Creates a HAS-A relationship by including objects.

### 📚 Key Concepts
- **Inheritance**: Rigid, hierarchical relationships.
- **Composition**: Flexible, modular design.
`,
  "object-reference-vs-value": `
### 💡 Problem Breakdown
Objects are passed by reference, not value, so modifications affect all references.

### ⚙️ Solution Walkthrough
The solution demonstrates reference behavior.
\`\`\`javascript
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;
obj1.a; // 2
\`\`\`
1. **Reference Assignment**: Both variables point to the same object.
2. **Mutation**: Changes via one reference affect all references.

### 📚 Key Concepts
- **Pass-by-Reference**: Objects share the same memory location.
- **Mutation**: Changes are visible across all references.
`,
  "prototype-chain-length": `
### 💡 Problem Breakdown
The prototype chain length is the number of prototype hops from an object to \`null\`.

### ⚙️ Solution Walkthrough
The solution counts prototype chain steps.
\`\`\`javascript
function A() {}
function B() {}
B.prototype = new A();
const instance = new B();
let count = 0;
let p = instance;
while (Object.getPrototypeOf(p)) {
  p = Object.getPrototypeOf(p);
  count++;
}
\`\`\`
1. **Prototype Traversal**: Follows the chain using \`Object.getPrototypeOf\`.
2. **Chain Length**: Counts steps until reaching \`null\`.

### 📚 Key Concepts
- **Prototype Chain**: The sequence of prototypes for property lookup.
- **Chain Length**: Measures inheritance depth.
`,
  "es5-class-pattern": `
### 💡 Problem Breakdown
The ES5 class pattern uses constructor functions and prototypes, which ES6 classes abstract.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
function Car() {}
Car.prototype.drive = function() {};
// ES6 equivalent: class Car { drive() {} }
\`\`\`
1. **Constructor Function**: Defines instance properties.
2. **Prototype Methods**: Adds shared methods to the prototype.

### 📚 Key Concepts
- **ES5 Classes**: Use constructors and prototypes.
- **ES6 Classes**: Syntactic sugar over the ES5 pattern.
`,
  "object-key-ordering": `
### 💡 Problem Breakdown
Object keys are ordered: integer-like keys first (in numeric order), then others (in insertion order).

### ⚙️ Solution Walkthrough
The solution demonstrates key ordering.
\`\`\`javascript
const obj = { b: 1, "10": 2, a: 3, "1": 4 };
Object.keys(obj); // ["1", "10", "b", "a"]
\`\`\`
1. **Key Ordering**: Integer keys are sorted numerically, others follow insertion order.
2. **\`Object.keys\`\**: Reflects the ordering rules.

### 📚 Key Concepts
- **Key Ordering**: Defined behavior since ES2015.
- **Integer-like Keys**: Strings that parse to integers are treated specially.
`,
  "deep-object-access-optional-chaining": `
### 💡 Problem Breakdown
Optional chaining simplifies deep property access by safely handling missing properties.

### ⚙️ Solution Walkthrough
The solution uses optional chaining for deep access.
\`\`\`javascript
const user = { profile: {} };
user.profile?.address?.street; // undefined
\`\`\`
1. **\`?.\`\**: Checks each level for existence before proceeding.
2. **Safe Navigation**: Prevents errors on missing properties.

### 📚 Key Concepts
- **Optional Chaining**: Safe deep property access.
- **Error Prevention**: Avoids null/undefined errors.
`,
  "object-property-iteration-methods": `
### 💡 Problem Breakdown
Different methods iterate object properties differently: \`for...in\` includes inherited properties, while \`Object.keys/values/entries\` only include own properties.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
const obj = { a: 1 };
Object.setPrototypeOf(obj, { b: 2 });
for (const key in obj) { console.log(key); } // "a", "b"
Object.keys(obj); // ["a"]
\`\`\`
1. **\`for...in\`\**: Iterates own and inherited enumerable properties.
2. **\`Object.keys\`\**: Only own enumerable properties.

### 📚 Key Concepts
- **Property Iteration**: Different methods for different needs.
- **Own vs. Inherited**: Key distinction in iteration behavior.
`,
  "shadowing-prototype-property": `
### 💡 Problem Breakdown
An own property on an object shadows (overrides) a property with the same name on its prototype.

### ⚙️ Solution Walkthrough
The solution demonstrates property shadowing.
\`\`\`javascript
const proto = { value: "proto" };
const instance = Object.create(proto);
instance.value = "instance";
instance.value; // "instance"
\`\`\`
1. **Shadowing**: The own property takes precedence over the prototype's.
2. **Prototype Access**: The prototype's property is still intact.

### 📚 Key Concepts
- **Property Shadowing**: Own properties override prototype properties.
- **Prototype Chain**: Lookup checks own properties first.
`,
  "delete-from-prototype": `
### 💡 Problem Breakdown
Deleting an own property reveals the prototype's property, but deleting from the prototype affects all instances.

### ⚙️ Solution Walkthrough
The solution deletes properties and checks effects.
\`\`\`javascript
function MyClass() {}
MyClass.prototype.prop = 1;
const inst = new MyClass();
delete inst.prop; // Does nothing
delete MyClass.prototype.prop; // Affects all instances
\`\`\`
1. **Own Property Deletion**: Has no effect if the property is inherited.
2. **Prototype Deletion**: Impacts all instances sharing the prototype.

### 📚 Key Concepts
- **Prototype Mutation**: Changes affect all instances.
- **Property Lookup**: Own properties are checked before prototype.
`,
  "constructor-return-value": `
### 💡 Problem Breakdown
A constructor can return an object, overriding the default instance creation.

### ⚙️ Solution Walkthrough
The solution returns a custom object from a constructor.
\`\`\`javascript
function MyClass() {
  return { a: 1 };
}
const instance = new MyClass();
instance; // { a: 1 }
\`\`\`
1. **Explicit Return**: If a constructor returns an object, it overrides the default.
2. **Non-Object Return**: Ignored if not an object.

### 📚 Key Concepts
- **Constructor Return**: Can override default instance creation.
- **Instance Creation**: Normally creates an object linked to the prototype.
`,
  "object-destructuring-rest": `
### 💡 Problem Breakdown
The rest syntax in destructuring collects remaining properties into a new object.

### ⚙️ Solution Walkthrough
The solution uses rest syntax in destructuring.
\`\`\`javascript
const { a, ...rest } = { a: 1, b: 2, c: 3 };
rest; // { b: 2, c: 3 }
\`\`\`
1. **Rest Syntax**: Collects all properties not explicitly destructured.
2. **New Object**: Creates a new object with remaining properties.

### 📚 Key Concepts
- **Rest Destructuring**: Gathers remaining properties.
- **Object Extraction**: Useful for separating specific properties.
`,
  "object-getownpropertysymbols": `
### 💡 Problem Breakdown
\`Object.getOwnPropertySymbols\` retrieves an object's own Symbol properties.

### ⚙️ Solution Walkthrough
The solution accesses a Symbol property.
\`\`\`javascript
const sym1 = Symbol("s1");
const obj = { a: 1, [sym1]: 2 };
Object.getOwnPropertySymbols(obj); // [Symbol(s1)]
\`\`\`
1. **\`Object.getOwnPropertySymbols\`\**: Returns an array of Symbol keys.
2. **Symbol Properties**: Special keys not included in regular property iteration.

### 📚 Key Concepts
- **Symbols**: Unique identifiers for properties.
- **\`Object.getOwnPropertySymbols\`\**: Accesses Symbol-based properties.
`,
  "this-in-arrow-function-in-method": `
### 💡 Problem Breakdown
Arrow functions in methods capture the outer scope's \`this\`, which can be useful for nested functions.

### ⚙️ Solution Walkthrough
The solution uses an arrow function to preserve \`this\`.
\`\`\`javascript
const obj = {
  name: "MyObj",
  process() {
    const inner = () => this.name;
    return inner();
  }
};
obj.process(); // "MyObj"
\`\`\`
1. **Arrow Function**: Inherits \`this\` from the outer method.
2. **Context Preservation**: Avoids losing the object context.

### 📚 Key Concepts
- **Arrow Function \`this\`\**: Lexically scoped, useful in nested functions.
- **Context Management**: Solves issues with nested function contexts.
`,
  "object-hasown-polyfill-conceptual": `
### 💡 Problem Breakdown
A polyfill for \`Object.hasOwn\` safely checks for own properties, avoiding issues with overridden \`hasOwnProperty\`.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
Object.hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
\`\`\`
1. **Polyfill**: Uses \`call\` to invoke the original \`hasOwnProperty\`.
2. **Safety**: Avoids errors if the object has a property named \`hasOwnProperty\`.

### 📚 Key Concepts
- **Own Property Check**: Safely verifies property ownership.
- **Polyfill**: Provides compatibility for modern methods.
`,
  "object-property-with-spaces": `
### 💡 Problem Breakdown
Properties with spaces or special characters require bracket notation for access.

### ⚙️ Solution Walkthrough
The solution accesses a property with spaces.
\`\`\`javascript
const obj = { "my property": "value" };
obj["my property"]; // "value"
\`\`\`
1. **Bracket Notation**: Required for non-identifier property names.
2. **Flexible Access**: Handles any valid key string.

### 📚 Key Concepts
- **Non-Identifier Keys**: Require bracket notation.
- **Property Access**: Bracket notation is more flexible than dot notation.
`,
  "object-as-hash-map": `
### 💡 Problem Breakdown
Objects can be used as hash maps to count occurrences or store key-value pairs dynamically.

### ⚙️ Solution Walkthrough
The solution counts character occurrences in a string.
\`\`\`javascript
const counts = {};
for (const char of "hello") {
  counts[char] = (counts[char] || 0) + 1;
}
\`\`\`
1. **Dynamic Keys**: Uses characters as property names.
2. **Counting**: Increments values for each occurrence.

### 📚 Key Concepts
- **Hash Map**: Objects as key-value stores for counting or mapping.
- **Dynamic Properties**: Flexible key creation at runtime.
`,
  "proxy-vs-es5-getters": `
### 💡 Problem Breakdown
Proxies intercept property access for all properties, while ES5 getters are defined per property.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
const proxy = new Proxy({}, {
  get(target, prop) { return "Intercepted!"; }
});
const obj = { get prop() { return "Getter!"; } };
\`\`\`
1. **Proxy**: Intercepts all property access dynamically.
2. **Getter**: Specific to one property, defined statically.

### 📚 Key Concepts
- **Proxy**: General-purpose interception of object operations.
- **Getters**: Property-specific computed values.
`,
  "prototype-chain-limit": `
### 💡 Problem Breakdown
The prototype chain ends at \`Object.prototype\`, whose prototype is \`null\`.

### ⚙️ Solution Walkthrough
The solution checks the end of the prototype chain.
\`\`\`javascript
Object.getPrototypeOf(Object.prototype); // null
\`\`\`
1. **Chain End**: The topmost prototype is \`Object.prototype\`.
2. **\`null\`\**: Indicates the end of the chain.

### 📚 Key Concepts
- **Prototype Chain**: Ends at \`Object.prototype\`.
- **\`Object.getPrototypeOf\`\**: Retrieves the next prototype.
`,
  "object-isprototypeof": `
### 💡 Problem Breakdown
\`isPrototypeOf\` checks if an object is in another object's prototype chain.

### ⚙️ Solution Walkthrough
The solution tests prototype chain membership.
\`\`\`javascript
function A() {}
const instance = new A();
A.prototype.isPrototypeOf(instance); // true
\`\`\`
1. **\`isPrototypeOf\`\**: Checks if the object is in the prototype chain.
2. **Inheritance Check**: Verifies constructor relationships.

### 📚 Key Concepts
- **\`isPrototypeOf\`\**: Tests prototype chain membership.
- **Inheritance**: Core to JavaScript's object model.
`,
  "json-stringify-space": `
### 💡 Problem Breakdown
The space parameter in \`JSON.stringify\` adds indentation for readable output.

### ⚙️ Solution Walkthrough
The solution stringifies with formatting.
\`\`\`javascript
const obj = { a: 1, b: 2 };
JSON.stringify(obj, null, 2);
\`\`\`
1. **Space Parameter**: Adds newlines and indentation.
2. **Readable Output**: Useful for debugging or display.

### 📚 Key Concepts
- **Formatted JSON**: Improves readability of serialized data.
- **\`JSON.stringify\`\**: Supports formatting options.
`,
  "object-destructuring-dynamic-key": `
### 💡 Problem Breakdown
Destructuring with dynamic keys allows extracting properties using variable names as keys.

### ⚙️ Solution Walkthrough
The solution destructures with a dynamic key.
\`\`\`javascript
const myKey = "prop2";
const obj = { prop1: "a", prop2: "b" };
const { [myKey]: value } = obj; // value = "b"
\`\`\`
1. **Dynamic Key**: Uses a variable to specify the property to extract.
2. **Destructuring**: Assigns the property value to a variable.

### 📚 Key Concepts
- **Dynamic Destructuring**: Uses computed property names in destructuring.
- **Flexible Extraction**: Handles runtime property names.
`,
  "deep-freeze-object-recursive": `
### 💡 Problem Breakdown
A deep freeze recursively freezes an object and its nested objects to make them fully immutable.

### ⚙️ Solution Walkthrough
This is a conceptual explanation.
\`\`\`javascript
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
}
\`\`\`
1. **Recursive Freeze**: Freezes the object and its nested objects.
2. **Immutability**: Ensures no part of the object can be modified.

### 📚 Key Concepts
- **Deep Freeze**: Recursively applies \`Object.freeze\`.
- **Immutability**: Protects entire object graphs.
`,
};
