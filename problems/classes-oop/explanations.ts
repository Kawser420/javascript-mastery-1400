


export const explanations: Record<string, string> = {
    'es6-classes': `
### 💡 Problem Breakdown
This problem introduces Object-Oriented Programming (OOP) in JavaScript using the ES6 \`class\` syntax. The goal is to create a "blueprint" (a class) for \`Person\` objects. Every person created from this blueprint should have a name and a method to introduce themselves.

### ⚙️ Solution Walkthrough
The solution defines a \`Person\` class with a constructor and a method, then creates an instance of it.

\`\`\`javascript
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         // FIX: Escape template literal
//         return \`Hello, my name is \\\${this.name}.\`;
//     }
// }
// const p = new Person('some name');
// p.greet();
\`\`\`

1.  **\`class Person { ... }\`**: This declares a new class named \`Person\`.
2.  **\`constructor(name) { ... }\`**: The constructor is a special method for creating and initializing an object created with a class. It's called automatically when you use the \`new\` keyword.
3.  **\`this.name = name;\`**: Inside the constructor, \`this\` refers to the new object instance being created. This line takes the \`name\` passed to the constructor and assigns it as a property on the new object.
4.  **\`greet() { ... }\`**: This defines a method (a function that is a property of an object) on the \`Person\` class. All instances of \`Person\` will have this method.
5.  **\`new Person(name)\`**: This creates a new instance of the \`Person\` class, calling the constructor with the provided \`name\`.
6.  **\`p.greet()\`**: This calls the \`greet\` method on the newly created instance \`p\`.

### 📚 Key Concepts
-   **Class**: A template or blueprint for creating objects. It encapsulates data (properties) and code to work on that data (methods).
-   **Instance**: A specific object created from a class.
-   **Constructor**: A special method for initializing a new instance of a class.
-   **\`this\` keyword**: In the context of a class constructor or method, \`this\` refers to the instance the method was called on.
-   **Method**: A function associated with an object or, in this case, a class.
`,
    'class-inheritance': `
### 💡 Problem Breakdown
This task is about inheritance, a core principle of OOP. You need to create a new class, \`Student\`, that is a more specialized version of the \`Person\` class. A \`Student\` should have all the properties and methods of a \`Person\` (like a name), plus its own unique properties and methods (like studying a subject).

### ⚙️ Solution Walkthrough
The solution uses the \`extends\` and \`super\` keywords to establish the inheritance relationship.

\`\`\`javascript
// class Person { /* ... */ }
// class Student extends Person {
//     constructor(name, subject) {
//         super(name); // Call the parent constructor
//         this.subject = subject;
//     }
//     study() {
//         // FIX: Escape template literal placeholders
//         return \`\\\${this.name} is studying \\\${this.subject}.\`;
//     }
// }
\`\`\`

1.  **\`class Student extends Person\`**: The \`extends\` keyword sets up the prototype chain, making \`Student\` a "subclass" or "child class" of \`Person\` (the "superclass" or "parent class"). \`Student\` now inherits all methods from \`Person\`.
2.  **\`constructor(name, subject)\`**: The \`Student\` constructor takes both the shared property (\`name\`) and its own property (\`subject\`).
3.  **\`super(name)\`**: This is a crucial step. \`super()\` calls the constructor of the parent class (\`Person\`). You **must** call \`super()\` in a subclass constructor before you can use the \`this\` keyword. It's how the parent part of the object gets initialized.
4.  **\`this.subject = subject;\`**: After the parent constructor has run, we can initialize the subclass's own properties.
5.  **\`study()\`**: This is a new method that only exists on the \`Student\` class.

### 📚 Key Concepts
-   **Inheritance**: A mechanism in OOP where a new class derives properties and methods from an existing class. It promotes code reuse.
-   **\`extends\`**: The keyword used to create a subclass.
-   **\`super\`**: A keyword used to call corresponding methods of the superclass. When used in a constructor, it calls the parent constructor.
`,
    'class-static-methods': `
### 💡 Problem Breakdown
The goal is to understand the difference between instance methods and static methods. A static method is a utility function that belongs to the class itself, not to any particular instance of the class. You can call it without creating a new object from the class.

### ⚙️ Solution Walkthrough
The solution uses the \`static\` keyword to define the method.

\`\`\`javascript
// class MyClass {
//     static staticMethod() {
//         return "Static method called";
//     }
// }
// MyClass.staticMethod();
\`\`\`

1.  **\`static staticMethod()\`**: The \`static\` keyword before the method name declares it as a static method.
2.  **Calling the Method**: Notice the call is \`MyClass.staticMethod()\`, directly on the class name. You do **not** do \`const instance = new MyClass(); instance.staticMethod();\` — that would result in an error because the method does not exist on the instance.

### 📚 Key Concepts
-   **Static Method**: A method that is callable on the class itself, not on an instance of the class. They are often used for creating utility functions that are related to a class, but don't need access to any instance-specific data (i.e., they don't use the \`this\` keyword to refer to instance properties). \`Object.keys()\` and \`Array.from()\` are examples of built-in static methods.
`,
    'class-getters-setters': `
### 💡 Problem Breakdown
This problem is about creating "computed properties" on a class. Sometimes, a property's value depends on other properties. Getters and setters provide a way to handle this elegantly, allowing you to "get" a computed value as if it were a regular property and "set" it in a way that intelligently updates the underlying data.

### ⚙️ Solution Walkthrough
The solution uses the \`get\` and \`set\` keywords to define the \`fullName\` computed property.

\`\`\`javascript
// class Person {
//     // FIX: Use standard JavaScript constructor syntax for clarity.
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() {
//         // FIX: Escape template literal placeholders
//         return \`\\\${this.firstName} \\\${this.lastName}\`;
//     }
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// }
// const p = new Person('firstName', 'lastName');
// const initial = p.fullName; // Calls the getter
// p.fullName = "Jane Smith"; // Calls the setter
\`\`\`

1.  **\`get fullName()\`**: The \`get\` keyword defines a getter. When you access \`p.fullName\` (without parentheses), this function is automatically executed, and its return value is given. It computes the full name from the \`firstName\` and \`lastName\` properties.
2.  **\`set fullName(name)\`**: The \`set\` keyword defines a setter. When you assign a value to \`p.fullName\`, like \`p.fullName = "Jane Smith"\`, this function is automatically executed. The assigned value ("Jane Smith") is passed as the \`name\` argument.
3.  **Setter Logic**: Inside the setter, the incoming full name is split into two parts, and these parts are used to update the underlying \`firstName\` and \`lastName\` properties.

### 📚 Key Concepts
-   **Getter**: A method that gets the value of a specific property. It allows you to run code when a property is read.
-   **Setter**: A method that sets the value of a specific property. It allows you to run code when a property is written to.
-   **Encapsulation**: Getters and setters are a form of encapsulation. They hide the internal complexity of how data is stored and managed, providing a simple public interface (\`fullName\`) to interact with that data.
`,
};