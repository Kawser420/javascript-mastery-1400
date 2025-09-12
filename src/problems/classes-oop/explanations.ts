

export const explanations: Record<string, string> = {
  'es6-classes': `
### 💡 Problem Breakdown
This problem introduces Object-Oriented Programming (OOP) in JavaScript using the ES6 \`class\` syntax. The goal is to create a "blueprint" (a class) for \`Person\` objects. Every person created from this blueprint should have a name and a method to introduce themselves.

### ⚙️ Solution Walkthrough
The solution defines a \`Person\` class with a constructor and a method, then creates an instance of it.
\`\`\`javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return \`Hello, my name is \${this.name}.\`;
    }
}
const p = new Person('Alice');
p.greet();
\`\`\`
1.  **\`class Person { ... }\`**: This declares a new class named \`Person\`.
2.  **\`constructor(name)\`**: The constructor is a special method for creating and initializing an object created with a class. It's called automatically when you use the \`new\` keyword.
3.  **\`this.name = name;\`**: Inside the constructor, \`this\` refers to the new object instance being created. This line takes the \`name\` passed to the constructor and assigns it as a property on the new object.
4.  **\`greet()\`**: This defines a method (a function that is a property of an object) on the \`Person\` class. All instances of \`Person\` will have this method.

### 📚 Key Concepts
-   **Class**: A template or blueprint for creating objects. It encapsulates data (properties) and code to work on that data (methods).
-   **Instance**: A specific object created from a class.
-   **Constructor**: A special method for initializing a new instance of a class.
`,
  'class-inheritance': `
### 💡 Problem Breakdown
This task is about inheritance, a core principle of OOP. You need to create a new class, \`Student\`, that is a more specialized version of the \`Person\` class. A \`Student\` should have all the properties and methods of a \`Person\` (like a name), plus its own unique properties and methods (like studying a subject).

### ⚙️ Solution Walkthrough
The solution uses the \`extends\` and \`super\` keywords to establish the inheritance relationship.
\`\`\`javascript
class Person { /* ... */ }
class Student extends Person {
    constructor(name, subject) {
        super(name); // Call the parent constructor
        this.subject = subject;
    }
    study() {
        return \`\${this.name} is studying \${this.subject}.\`;
    }
}
\`\`\`
1.  **\`class Student extends Person\`**: The \`extends\` keyword sets up the prototype chain, making \`Student\` a "subclass" or "child class" of \`Person\` (the "superclass" or "parent class"). \`Student\` now inherits all methods from \`Person\`.
2.  **\`constructor(name, subject)\`**: The \`Student\` constructor takes both the shared property (\`name\`) and its own property (\`subject\`).
3.  **\`super(name)\`**: This is a crucial step. \`super()\` calls the constructor of the parent class (\`Person\`). You **must** call \`super()\` in a subclass constructor before you can use the \`this\` keyword. It's how the parent part of the object gets initialized.
4.  **\`this.subject = subject;\`**: After the parent constructor has run, we can initialize the subclass's own properties.

### 📚 Key Concepts
-   **Inheritance**: A mechanism in OOP where a new class derives properties and methods from an existing class. It promotes code reuse.
-   **\`extends\`**: The keyword used to create a subclass.
-   **\`super\`**: A keyword used to call corresponding methods of the superclass.
`,
  'class-static-methods': `
### 💡 Problem Breakdown
The goal is to understand the difference between instance methods and static methods. A static method is a utility function that belongs to the class itself, not to any particular instance of the class. You can call it without creating a new object from the class.

### ⚙️ Solution Walkthrough
The solution uses the \`static\` keyword to define the method.
\`\`\`javascript
class MyClass {
    static staticMethod() {
        return "Static method called";
    }
}
MyClass.staticMethod();
\`\`\`
1.  **\`static staticMethod()\`**: The \`static\` keyword before the method name declares it as a static method.
2.  **Calling the Method**: Notice the call is \`MyClass.staticMethod()\`, directly on the class name. You do **not** do \`const instance = new MyClass(); instance.staticMethod();\` — that would result in an error because the method does not exist on the instance.

### 📚 Key Concepts
-   **Static Method**: A method that is callable on the class itself, not on an instance of the class. They are often used for creating utility functions that are related to a class but don't need instance-specific data (i.e., they don't use \`this\`).
`,
  'class-getters-setters': `
### 💡 Problem Breakdown
This problem is about creating "computed properties" on a class. Sometimes, a property's value depends on other properties. Getters and setters provide a way to handle this elegantly, allowing you to "get" a computed value as if it were a regular property and "set" it in a way that intelligently updates the underlying data.

### ⚙️ Solution Walkthrough
The solution uses the \`get\` and \`set\` keywords to define the \`fullName\` computed property.
\`\`\`javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return \`\${this.firstName} \${this.lastName}\`;
    }
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}
\`\`\`
1.  **\`get fullName()\`**: The \`get\` keyword defines a getter. When you access \`person.fullName\` (without parentheses), this function is automatically executed, and its return value is given.
2.  **\`set fullName(name)\`**: The \`set\` keyword defines a setter. When you assign a value to \`person.fullName\`, this function is automatically executed. The assigned value is passed as the \`name\` argument.

### 📚 Key Concepts
-   **Getter**: A method that gets the value of a specific property. It allows you to run code when a property is read.
-   **Setter**: A method that sets the value of a specific property. It allows you to run code when a property is written to.
-   **Encapsulation**: Getters and setters hide the internal complexity of how data is stored, providing a simple public interface (\`fullName\`).
`,
  'class-private-fields': `
### 💡 Problem Breakdown
True privacy for class properties was a long-requested feature in JavaScript. The goal is to create a class property that is completely inaccessible from outside the class instance. The modern syntax uses a hash \`#\` prefix.

### ⚙️ Solution Walkthrough
A \`#balance\` field is declared and used within the class.
\`\`\`javascript
class Wallet {
    #balance = 0; // Declare the private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    getBalance() {
        // We can access it inside the class
        return this.#balance;
    }
}

const myWallet = new Wallet(100);
// console.log(myWallet.#balance); // This would throw a SyntaxError
\`\`\`
1.  **\`#balance\`**: The \`#\` prefix marks \`balance\` as a private field. It must be declared at the top level of the class.
2.  **Internal Access**: Inside the class methods (like the constructor and \`getBalance\`), you can access it using \`this.#balance\`.
3.  **External Inaccessibility**: Any attempt to access \`myWallet.#balance\` from outside the class will result in a syntax error, enforcing true privacy.

### 📚 Key Concepts
-   **Encapsulation**: The bundling of data with the methods that operate on that data, and restricting direct access to some of the object's components. Private fields are a key tool for encapsulation.
-   **Private Class Fields**: A feature for declaring fields that are only accessible within the class body.
`,
  'super-in-constructor': `
### 💡 Problem Breakdown
When a class extends another class, the subclass constructor must properly initialize the parent class part of the object. This is done by calling \`super()\`. The rule is that you must call \`super()\` *before* you can access the \`this\` keyword in the subclass constructor.

### ⚙️ Solution Walkthrough
The \`Dog\` constructor calls \`super()\` with the \`age\` parameter before it sets its own \`name\` property.
\`\`\`javascript
class Animal {
    constructor(age) { this.age = age; }
}
class Dog extends Animal {
    constructor(name, age) {
        super(age); // Call the parent constructor first
        this.name = name; // Now we can use 'this'
    }
}
\`\`\`
1.  **\`super(age)\`**: This call executes the parent class's (\`Animal\`) constructor. This is what actually creates the object and sets up properties defined in the parent, like \`this.age\`.
2.  **Using \`this\`**: Only after \`super()\` has been called is the \`this\` keyword initialized and available for use in the subclass constructor to set properties like \`this.name\`.

### 📚 Key Concepts
-   **Constructor Chaining**: The process of a subclass constructor calling its superclass constructor.
-   **\`super()\`**: A special function call that invokes the parent class's constructor.
`,
  'method-overriding': `
### 💡 Problem Breakdown
Method overriding is a feature of inheritance where a subclass provides its own specific implementation for a method that is already defined in its superclass. This allows the subclass to "specialize" behavior.

### ⚙️ Solution Walkthrough
The \`Cat\` class extends \`Animal\` but provides its own \`speak\` method, which "overrides" the parent's version.
\`\`\`javascript
class Animal {
    speak() {
        return "Some generic animal sound";
    }
}
class Cat extends Animal {
    speak() { // This method overrides the one in Animal
        return "Meow";
    }
}
const myCat = new Cat();
myCat.speak(); // "Meow"
\`\`\`
1.  **Same Method Name**: The subclass defines a method with the exact same name as a method in the superclass.
2.  **Resolution**: When \`myCat.speak()\` is called, JavaScript's method lookup finds the \`speak\` method on the \`Cat\` class first and executes it. It doesn't proceed up the prototype chain to find the \`Animal\` version.

### 📚 Key Concepts
-   **Method Overriding**: Providing a specific implementation for an inherited method in a subclass.
-   **Polymorphism**: The ability of an object to take on many forms. Here, both an \`Animal\` and a \`Cat\` can \`.speak()\`, but they do so differently.
`,
  'super-in-methods': `
### 💡 Problem Breakdown
Sometimes, when overriding a method, you don't want to completely replace the parent's behavior but rather *add* to it. The \`super\` keyword can be used within a method to call the parent's version of that same method.

### ⚙️ Solution Walkthrough
The \`Employee.introduce\` method first calls the parent's \`Person.introduce\` method using \`super.introduce()\` and then appends its own additional information.
\`\`\`javascript
class Person {
    introduce() { return \`My name is \${this.name}.\`; }
}
class Employee extends Person {
    introduce() {
        // Call the parent's method and add to it
        return \`\${super.introduce()} I am a \${this.title}.\`;
    }
}
\`\`\`
1.  **\`super.introduce()\`**: This expression calls the \`introduce\` method from the parent class (\`Person\`) and returns its result.
2.  **Augmentation**: The subclass method then takes this result and combines it with its own logic to produce the final, specialized output.

### 📚 Key Concepts
-   **\`super\` Keyword**: In a method, \`super\` refers to the parent object's prototype, allowing you to access the parent's methods.
`,
  'class-expression': `
### 💡 Problem Breakdown
Just like functions, classes can be defined in two ways: declarations and expressions. A class expression allows you to define a class and assign it to a variable. This is useful for creating classes dynamically or passing them as arguments.

### ⚙️ Solution Walkthrough
A class is defined without a name and assigned to the \`Rectangle\` constant.
\`\`\`javascript
// Anonymous class expression
const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Named class expression (name is only available inside the class)
const Circle = class MyCircle {
    // ...
};
\`\`\`
1.  **Anonymous Expression**: The most common form, where the class has no name after the \`class\` keyword.
2.  **Named Expression**: You can give a class expression a name, but that name is only visible within the class body itself, which can be useful for debugging.

### 📚 Key Concepts
-   **Class Expression**: A way to define a class that can be assigned to a variable. Unlike declarations, class expressions are not hoisted.
`,
  'static-properties': `
### 💡 Problem Breakdown
A static property is a property that belongs to the class itself, not to any instance of the class. It's shared across all instances and is accessed directly on the class name. It's useful for constants or configuration values related to the class.

### ⚙️ Solution Walkthrough
A \`version\` property is defined using the \`static\` keyword.
\`\`\`javascript
class AppConfig {
    static version = "1.0.2";
    static appName = "My App";
}

console.log(AppConfig.version); // "1.0.2"

const instance = new AppConfig();
console.log(instance.version); // undefined
\`\`\`
1.  **\`static version = ...\`**: The \`static\` keyword declares the property.
2.  **Access**: It must be accessed via the class name (\`AppConfig.version\`), not through an instance.

### 📚 Key Concepts
-   **Static Property**: A property of the class constructor itself, rather than of the instances.
`,
  'instanceof-with-classes': `
### 💡 Problem Breakdown
The \`instanceof\` operator is a reliable way to check the type of an object when working with classes. It checks if the class's \`.prototype\` object exists anywhere in the instance's prototype chain.

### ⚙️ Solution Walkthrough
The operator is used to check an instance of a subclass.
\`\`\`javascript
class A {}
class B extends A {}
const instanceB = new B();

instanceB instanceof B; // true, because B.prototype is in its chain
instanceB instanceof A; // true, because it inherited from A, so A.prototype is also in its chain
\`\`\`
1.  **Prototype Chain Check**: \`instanceof\` traverses the entire prototype chain. Since \`instanceB\` inherits from \`A\`, it's considered an instance of both \`B\` and \`A\`.

### 📚 Key Concepts
-   **\`instanceof\` operator**: Checks the prototype chain of an object to determine if it's an instance of a given class.
`,
  'class-without-constructor': `
### 💡 Problem Breakdown
The \`constructor\` method is optional in a class definition. If you don't provide one, JavaScript will automatically create a default, empty constructor for you.

### ⚙️ Solution Walkthrough
A \`Simple\` class is defined with no constructor.
\`\`\`javascript
class Simple {}
const s = new Simple(); // This works perfectly

// The above is equivalent to:
class SimpleWithDefault {
    constructor() {}
}
\`\`\`
1.  **Default Constructor**: If a class doesn't extend another class, the default constructor is empty. If it *does* extend another class, the default constructor will automatically call \`super()\` with any arguments passed to it.

### 📚 Key Concepts
-   **Default Methods**: JavaScript provides default implementations for certain class methods like the constructor if they are not explicitly defined.
`,
  'class-computed-method-names': `
### 💡 Problem Breakdown
Just like with object literals, you can use a computed expression to define the name of a method in a class. The expression is evaluated, and its result is used as the method name.

### ⚙️ Solution Walkthrough
A variable is used inside square brackets \`[]\` to name a method.
\`\`\`javascript
const methodName = "sayHi";

class Greeter {
    [methodName]() {
        return "Hello!";
    }
}
const g = new Greeter();
g.sayHi(); // "Hello!"
\`\`\`
1.  **\`[methodName]\`**: The expression \`methodName\` is evaluated to the string "sayHi", and the class is created with a method of that name.

### 📚 Key Concepts
-   **Computed Property Names**: This syntax extends to method names in classes, allowing for dynamic method creation.
`,
  'class-public-fields': `
### 💡 Problem Breakdown
This modern syntax (class fields) allows you to declare public properties directly on the class body, outside of the constructor. This can make the class structure clearer by listing all properties at the top.

### ⚙️ Solution Walkthrough
A \`count\` property is declared directly in the class body.
\`\`\`javascript
class Counter {
    count = 0; // Public field declaration

    increment() {
        this.count++;
    }
}
const c = new Counter();
c.count; // 0
c.increment();
c.count; // 1
\`\`\`
1.  **Field Declaration**: \`count = 0;\` is equivalent to writing \`this.count = 0;\` inside the constructor. It's syntactic sugar that improves readability.

### 📚 Key Concepts
-   **Class Fields**: A syntax for declaring class properties directly in the class body.
`,
  'class-private-methods': `
### 💡 Problem Breakdown
Similar to private fields, this feature allows you to declare methods that are only accessible from within the class itself. This is another key tool for encapsulation.

### ⚙️ Solution Walkthrough
A method is prefixed with \`#\` to make it private.
\`\`\`javascript
class Secretive {
    #secretMessage() {
        return "This is a secret.";
    }

    reveal() {
        // We can call it internally
        return this.#secretMessage();
    }
}
const s = new Secretive();
s.reveal(); // "This is a secret."
// s.#secretMessage(); // This would throw a SyntaxError
\`\`\`
1.  **\`#secretMessage()\`**: The \`#\` prefix makes the method private.
2.  **Internal Call**: It can be called from other methods within the class using \`this.#secretMessage()\`.
3.  **External Inaccessibility**: It cannot be called on an instance from outside the class.

### 📚 Key Concepts
-   **Private Class Methods**: A feature for creating methods that are truly private to a class.
`,
  'abstract-class-conceptual': `
### 💡 Problem Breakdown
An abstract class is a class that is intended to be inherited from but not instantiated directly. It serves as a blueprint for other classes. JavaScript doesn't have a built-in \`abstract\` keyword, but the behavior can be simulated.

### ⚙️ Solution Walkthrough
The solution is to check \`new.target\` in the base class constructor. \`new.target\` refers to the constructor that was directly invoked by \`new\`.
\`\`\`javascript
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class 'Shape' directly.");
        }
    }
}
class Circle extends Shape {
    constructor() {
        super(); // new.target will be Circle here
    }
}

// const s = new Shape(); // This throws an error
const c = new Circle(); // This works
\`\`\`
1.  **\`new.target\` check**: Inside the \`Shape\` constructor, we check if it was called directly (\`new Shape()\`). If so, \`new.target\` will be \`Shape\`, and we throw an error.
2.  **Subclass Call**: When \`new Circle()\` is called, \`super()\` invokes the \`Shape\` constructor, but \`new.target\` remains \`Circle\`, so the check passes.

### 📚 Key Concepts
-   **Abstract Class**: A design pattern for creating base classes that are not meant to be instantiated.
-   **\`new.target\`**: A meta-property that lets you detect whether a function was called with the \`new\` operator.
`,
  'polymorphism-example': `
### 💡 Problem Breakdown
Polymorphism is a core OOP concept where objects of different classes can respond to the same method call. A single interface (the method name) can be used for a general class of actions.

### ⚙️ Solution Walkthrough
Multiple classes inherit from a base \`Shape\` class and provide their own implementation of the \`draw\` method.
\`\`\`javascript
class Shape { draw() { return "drawing a shape"; } }
class Circle extends Shape { draw() { return "drawing a circle"; } }
class Square extends Shape { draw() { return "drawing a square"; } }

const shapes = [new Circle(), new Square(), new Shape()];
// We can call .draw() on any of them, regardless of their specific type
const results = shapes.map(s => s.draw());
// ["drawing a circle", "drawing a square", "drawing a shape"]
\`\`\`
1.  **Common Interface**: All classes have a \`draw()\` method.
2.  **Different Behavior**: Each class implements \`draw()\` differently.
3.  **Unified Treatment**: We can treat a collection of different shapes uniformly, calling \`draw()\` on each one and getting the correct, specialized behavior.

### 📚 Key Concepts
-   **Polymorphism**: From Greek, meaning "many forms." The ability of different objects to respond to the same message (method call) in different ways.
`,
  'chaining-class-methods': `
### 💡 Problem Breakdown
Method chaining is a popular pattern where multiple methods are called on the same object in a single statement (e.g., \`object.doThis().doThat()\`). To enable this, each method in the chain must return a reference to the object itself (\`this\`).

### ⚙️ Solution Walkthrough
The \`add\` and \`subtract\` methods of the \`Calculator\` class each end with \`return this;\`.
\`\`\`javascript
class Calculator {
    constructor() { this.value = 0; }
    add(num) {
        this.value += num;
        return this; // Return the instance to allow chaining
    }
    subtract(num) {
        this.value -= num;
        return this; // Return the instance
    }
}
const result = new Calculator().add(10).subtract(3).value; // result is 7
\`\`\`
1.  **\`return this\`**: By returning the instance (\`this\`) from a method, the result of the method call is the object itself, which is then immediately ready for the next method call in the chain.

### 📚 Key Concepts
-   **Method Chaining**: A syntax for invoking multiple method calls in a single statement.
-   **Fluent Interface**: An API design that relies heavily on method chaining to be more readable.
`,
  'extends-built-in-array': `
### 💡 Problem Breakdown
Classes can extend built-in JavaScript objects like \`Array\`, \`Error\`, and \`Map\`. This allows you to create custom versions of these objects with additional functionality while retaining all their original behavior.

### ⚙️ Solution Walkthrough
A \`MyArray\` class is created that \`extends Array\` and adds a new helper method, \`first()\`.
\`\`\`javascript
class MyArray extends Array {
    first() {
        if (this.length === 0) return undefined;
        return this[0];
    }
}
const arr = MyArray.from([1, 2, 3]);
arr.first(); // 1
arr.map(x => x * 2); // [2, 4, 6] (still works like a normal array)
\`\`\`
1.  **\`extends Array\`**: This sets up the prototype chain so that \`MyArray\` inherits all of \`Array\`'s methods (like \`.map()\`, \`.filter()\`, etc.).
2.  **New Method**: We can then add our own custom methods like \`first()\`.

### 📚 Key Concepts
-   **Subclassing Built-ins**: The ability to extend core JavaScript objects to create more specialized versions.
`,
  'class-mixins-conceptual': `
### 💡 Problem Breakdown
JavaScript only supports single inheritance (a class can only extend one other class). Mixins are a pattern that allows for a form of multiple inheritance, enabling a class to "mix in" methods from multiple sources.

### ⚙️ Solution Walkthrough
A mixin is a function that takes a superclass, adds methods to a new class that extends it, and returns the new class.
\`\`\`javascript
// Mixin function
const FlyingMixin = (superclass) => class extends superclass {
    fly() { return "I'm flying!"; }
};
const SwimmingMixin = (superclass) => class extends superclass {
    swim() { return "I'm swimming!"; }
};

class Bird {}
// Apply mixins
class Duck extends SwimmingMixin(FlyingMixin(Bird)) {}

const myDuck = new Duck();
myDuck.fly(); // "I'm flying!"
myDuck.swim(); // "I'm swimming!"
\`\`\`
1.  **Mixin as a Function**: Each mixin is a function that takes a class and returns a new class with added functionality.
2.  **Composition**: By nesting the mixin calls (\`SwimmingMixin(FlyingMixin(Bird))\`), we compose a new class that inherits features from all sources.

### 📚 Key Concepts
-   **Mixin**: A pattern for adding functionality to a class without using traditional inheritance.
-   **Composition**: Building complex objects by combining simpler ones.
`,
  'class-this-lexical-arrow': `
### 💡 Problem Breakdown
A common issue in JavaScript classes is losing the \`this\` context when a method is passed as a callback (e.g., to an event listener). An arrow function used as a class field solves this elegantly because it doesn't have its own \`this\`; it lexically captures the \`this\` of the instance.

### ⚙️ Solution Walkthrough
An arrow function is used for the \`handleClick\` method.
\`\`\`javascript
class MyComponent {
    constructor() { this.name = "My Component"; }

    // Arrow function as a class field
    handleClick = () => {
        // 'this' is lexically bound to the instance
        console.log(this.name);
    };
}
const c = new MyComponent();
const standaloneClick = c.handleClick;
standaloneClick(); // Logs "My Component" correctly
\`\`\`
1.  **Arrow Function Field**: The method is defined as a property on the instance using arrow function syntax.
2.  **Lexical \`this\`**: The arrow function "remembers" the \`this\` from the context where it was defined (the class instance), so even when called as a standalone function, it still works correctly. This avoids the need for \`.bind(this)\` in the constructor.

### 📚 Key Concepts
-   **Lexical \`this\`**: The behavior of arrow functions inheriting \`this\` from their parent scope.
-   **Class Fields**: Using this modern syntax to define methods can help solve common \`this\`-related problems.
`,
  'class-static-init-block': `
### 💡 Problem Breakdown
A static initialization block is a modern feature that allows you to perform complex, one-time setup for a class when it is first defined and loaded by the JavaScript engine. This is useful for setting up static properties that require some computation.

### ⚙️ Solution Walkthrough
A \`static {}\` block is used to perform calculations and set static properties.
\`\`\`javascript
class MyClass {
    static data;
    static {
        // This block runs once when the class is defined.
        const complexData = { value: "Initialized!" };
        this.data = complexData.value;
    }
}
MyClass.data; // "Initialized!"
\`\`\`
1.  **\`static {}\`**: The code inside this block is executed only once, when the class is loaded.
2.  **\`this\` in Static Context**: Inside a static block or static method, \`this\` refers to the class constructor itself, allowing you to set static properties like \`this.data\`.

### 📚 Key Concepts
-   **Static Initialization Block**: A dedicated block for running one-time setup code for a class.
`,
  'class-error-subclass': `
### 💡 Problem Breakdown
Creating custom error types by extending the built-in \`Error\` class is a powerful pattern. It allows you to create more specific, descriptive errors that can be caught and handled differently from generic errors.

### ⚙️ Solution Walkthrough
A \`ValidationError\` class is created by extending \`Error\`.
\`\`\`javascript
class ValidationError extends Error {
    constructor(message) {
        super(message); // Pass message to the parent Error constructor
        this.name = "ValidationError"; // Set the custom error name
    }
}

try {
    throw new ValidationError("Invalid email.");
} catch (e) {
    if (e instanceof ValidationError) {
        console.log("Caught a specific validation error:", e.message);
    }
}
\`\`\`
1.  **\`extends Error\`**: Sets up the inheritance.
2.  **\`super(message)\`**: It's important to call the parent \`Error\` constructor to properly set up the error message.
3.  **\`this.name\`**: Setting a custom name helps in identifying the error type.
4.  **Specific Catch**: You can now use \`instanceof\` in a \`catch\` block to handle this specific type of error differently from others.

### 📚 Key Concepts
-   **Custom Errors**: A best practice for creating robust and maintainable applications with clear error handling paths.
`,
  'class-factory-pattern': `
### 💡 Problem Breakdown
A Factory is a design pattern that provides an interface for creating objects in a superclass, but lets subclasses alter the type of objects that will be created. A simple factory function can return instances of different classes based on some input.

### ⚙️ Solution Walkthrough
The \`AnimalFactory\` function takes a \`type\` string and returns an instance of either \`Dog\` or \`Cat\` accordingly.
\`\`\`javascript
class Dog { speak() { return "Woof"; } }
class Cat { speak() { return "Meow"; } }

function AnimalFactory(type) {
    switch (type) {
        case 'dog': return new Dog();
        case 'cat': return new Cat();
        default: return null;
    }
}
const myPet = AnimalFactory('dog');
myPet.speak(); // "Woof"
\`\`\`
1.  **Decoupling**: The code that uses the factory (\`AnimalFactory('dog')\`) doesn't need to know about the \`Dog\` or \`Cat\` constructors directly. This decouples the client code from the specific classes.

### 📚 Key Concepts
-   **Factory Pattern**: A creational design pattern for creating objects without specifying the exact class of the object that will be created.
`,
  'class-singleton-pattern': `
### 💡 Problem Breakdown
The Singleton pattern is a design pattern that restricts the instantiation of a class to a single object. This is useful when exactly one object is needed to coordinate actions across the system (e.g., a single database connection or a settings manager).

### ⚙️ Solution Walkthrough
The class maintains a private static instance of itself. The constructor is made private (conceptually, or by throwing an error), and a static method provides the single point of access.
\`\`\`javascript
class DatabaseConnection {
    static #instance;

    constructor() {
        if (DatabaseConnection.#instance) {
             throw new Error("Use getInstance() to get the single instance of this class.");
        }
    }

    static getInstance() {
        if (!DatabaseConnection.#instance) {
            DatabaseConnection.#instance = new DatabaseConnection();
        }
        return DatabaseConnection.#instance;
    }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // true
\`\`\`
1.  **Private Static Field**: \`#instance\` holds the single instance.
2.  **\`getInstance()\` Method**: This static method is the only way to get the object. It creates the instance on the first call and returns that same instance on all subsequent calls.

### 📚 Key Concepts
-   **Singleton Pattern**: A creational pattern that ensures a class has only one instance and provides a global access point to it.
`,
  'class-composition-vs-inheritance': `
### 💡 Problem Breakdown
This is a high-level software design principle. "Composition over inheritance" suggests that you should favor composing objects out of smaller, single-purpose objects rather than inheriting features from a large, monolithic base class. Composition often leads to more flexible and maintainable code.

### ⚙️ Solution Walkthrough
Instead of a \`FlyingBird\` inheriting from \`Bird\`, we create a separate \`canFly\` object and compose a bird with that functionality.
\`\`\`javascript
// Composition
const canWalk = { walk() { return "Walking..."; } };
const canFly = { fly() { return "Flying..."; } };

const walkingBird = Object.assign({}, canWalk);
const flyingBird = Object.assign({}, canWalk, canFly);

// Inheritance
class Bird { walk() { /*...*/ } }
class FlyingBird extends Bird { fly() { /*...*/ } }
// Problem: What about a Penguin? It's a Bird but can't fly. Inheritance can be rigid.
\`\`\`
1.  **Composition**: We build objects by combining smaller "capability" objects. This is flexible; a penguin object could be composed with \`canWalk\` and \`canSwim\` mixins, for example.
2.  **Inheritance**: The "IS-A" relationship (\`FlyingBird IS-A Bird\`) can become rigid and lead to complex hierarchies when exceptions arise.

### 📚 Key Concepts
-   **Composition**: A "HAS-A" relationship. An object is composed of other objects.
-   **Inheritance**: An "IS-A" relationship. An object is a more specific type of another object.
`,
  'class-method-binding': `
### 💡 Problem Breakdown
When a class method is passed as a callback (e.g., to an event listener), it's detached from its instance, and its \`this\` context is lost. A common solution is to explicitly bind the method to the instance in the constructor.

### ⚙️ Solution Walkthrough
In the constructor, \`this.handleClick.bind(this)\` creates a new function where \`this\` is permanently bound to the class instance.
\`\`\`javascript
class MyButton {
    constructor() {
        this.text = "Click Me";
        // Bind the method to this instance
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this.text);
    }
}
const button = new MyButton();
// Simulating passing it as a callback
const callback = button.handleClick;
callback(); // Logs "Click Me" correctly
\`\`\`
1.  **Binding in Constructor**: This is a classic pattern. The original method on the prototype is replaced on the instance with a new, permanently bound version. This ensures \`this\` is always correct, no matter how the method is called.

### 📚 Key Concepts
-   **\`.bind()\`**: Creates a new function with a fixed \`this\` context.
-   **Execution Context**: Understanding that how a function is called determines its \`this\` value.
`,
  'class-private-static-fields': `
### 💡 Problem Breakdown
A private static field is a property that belongs to the class itself (not instances) and is only accessible from within the class's own static or instance methods. It combines the features of static and private properties.

### ⚙️ Solution Walkthrough
A private static field \`#apiKey\` is defined and accessed via a public static method.
\`\`\`javascript
class ApiConfig {
    static #apiKey = "SECRET123";
    
    static getApiKey() {
        // Can be accessed from a static method
        return this.#apiKey;
    }
    
    getApiKeyFromInstance() {
        // Can also be accessed from an instance method
        return ApiConfig.#apiKey;
    }
}
// ApiConfig.#apiKey; // SyntaxError
ApiConfig.getApiKey(); // "SECRET123"
\`\`\`
1.  **\`static #apiKey\`**: Declares a field that is both static and private.
2.  **Access**: It can only be accessed from within the class body, using \`ClassName.#fieldName\`.

### 📚 Key Concepts
-   **Static Members**: Properties and methods that belong to the class, not instances.
-   **Private Members**: Properties and methods accessible only within the class.
`,
  'class-private-static-methods': `
### 💡 Problem Breakdown
A private static method is a utility function that belongs to the class itself and can only be called by other static methods within the same class. It's used for internal helper logic related to the class as a whole.

### ⚙️ Solution Walkthrough
A private static helper method \`#isEmail\` is used by a public static validation method.
\`\`\`javascript
class Validator {
    static #isEmail(str) {
        // simple check for demonstration
        return str.includes('@');
    }
    
    static validate(value) {
        // Call the private static method
        return this.#isEmail(value) ? "Valid" : "Invalid";
    }
}
Validator.validate("test@example.com"); // "Valid"
// Validator.#isEmail("test"); // SyntaxError
\`\`\`
1.  **\`static #isEmail()\`**: Declares a method that is both static and private.
2.  **Internal Call**: It's called from another static method using \`this.#isEmail(...)\`. Inside a static context, \`this\` refers to the class constructor.

### 📚 Key Concepts
-   **Private Static Methods**: Encapsulated helper functions that operate on a class level.
`,
  'class-static-getters-setters': `
### 💡 Problem Breakdown
Just like with instance properties, you can define getters and setters for static properties. This allows you to run code when a static property is read from or written to, providing a controlled public interface for a private static field.

### ⚙️ Solution Walkthrough
A private static field \`#currentTheme\` is managed by public static get and set accessors.
\`\`\`javascript
class Theme {
    static #currentTheme = "dark";
    
    static get current() {
        return \`Current theme is \${this.#currentTheme}\`;
    }
    
    static set current(theme) {
        if (['dark', 'light'].includes(theme)) {
            this.#currentTheme = theme;
        }
    }
}

Theme.current; // "Current theme is dark"
Theme.current = "light";
Theme.current; // "Current theme is light"
\`\`\`
1.  **\`static get current()\`**: A static getter. Accessed via \`Theme.current\`.
2.  **\`static set current(theme)\`**: A static setter. Invoked via \`Theme.current = "newTheme"\`.

### 📚 Key Concepts
-   **Accessors (Getters/Setters)**: Provide a clean API for interacting with class properties while hiding the internal implementation.
`,
  'class-iterable-protocol': `
### 💡 Problem Breakdown
The iterable protocol in JavaScript allows objects to define their own iteration behavior. By implementing a method whose key is \`Symbol.iterator\`, you can make your custom class work with constructs like the \`for...of\` loop and the spread syntax (\`[...]\`).

### ⚙️ Solution Walkthrough
The \`MyRange\` class implements a \`[Symbol.iterator]\` method, which is a generator function that yields numbers in its range.
\`\`\`javascript
class MyRange {
    constructor(from, to) { this.from = from; this.to = to; }
    
    * [Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    }
}
const range = new MyRange(1, 3);
for (const num of range) {
    console.log(num); // 1, then 2, then 3
}
[...range]; // [1, 2, 3]
\`\`\`
1.  **\`[Symbol.iterator]\`**: This is the well-known symbol that JavaScript looks for when it needs to iterate an object.
2.  **Generator Function (\`*\`)**: Using a generator function makes implementing the iterator protocol much easier. The \`yield\` keyword pauses the function and produces the next value in the sequence for the loop.

### 📚 Key Concepts
-   **Iterable Protocol**: A set of rules that, when implemented, make an object iterable.
-   **\`Symbol.iterator\`**: A built-in symbol that specifies the default iterator for an object.
-   **Generator Functions**: Functions that can be paused and resumed, producing a sequence of values.
`,
  'class-generator-method': `
### 💡 Problem Breakdown
This is a more direct application of the previous concept. A generator method is a method within a class that is defined using the \`function*\` syntax (or \`* methodName()\`). It provides a convenient way to create an iterator for the class or for a specific purpose.

### ⚙️ Solution Walkthrough
The class has a generator method that yields the characters of its internal word property.
\`\`\`javascript
class WordGenerator {
    constructor(word) { this.word = word; }

    * letters() {
        for (const char of this.word) {
            yield char;
        }
    }
}
const gen = new WordGenerator("Hi");
const iterator = gen.letters();
iterator.next().value; // "H"
iterator.next().value; // "i"
\`\`\`
1.  **\`* letters()\`**: The asterisk \`*\` before the method name marks it as a generator method.
2.  **Calling it**: When you call \`gen.letters()\`, it doesn't run the code. It returns an iterator object.
3.  **Iteration**: You can then use \`.next()\` on the iterator, or use it in a \`for...of\` loop, to get the yielded values.

### 📚 Key Concepts
-   **Generator Method**: A class method that returns an iterator.
`,
  'class-species-pattern': `
### 💡 Problem Breakdown
The \`Symbol.species\` well-known symbol allows you to control which constructor is used by methods on a subclass that return new instances (like \`Array.prototype.map\`). By default, if you extend \`Array\` and call \`.map()\` on your subclass, it will return a new instance of your subclass. Sometimes you may want it to return a standard \`Array\` instead.

### ⚙️ Solution Walkthrough
The \`MyArray\` subclass defines a static getter for \`Symbol.species\` that returns the base \`Array\` constructor.
\`\`\`javascript
class MyArray extends Array {
    // Override the species to return a regular Array from methods
    static get [Symbol.species]() {
        return Array;
    }
}
const a = new MyArray(1, 2, 3);
const mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
\`\`\`
1.  **\`static get [Symbol.species]\`**: This static getter is called by inherited methods like \`map\` to determine what constructor to use for the return value.
2.  **\`return Array\`**: By returning the base \`Array\` constructor, we ensure that \`mapped\` is a plain array, not another \`MyArray\`.

### 📚 Key Concepts
-   **\`Symbol.species\`**: A "well-known symbol" used to specify a constructor function that is used to create derived objects.
`,
  'class-tostring-tag': `
### 💡 Problem Breakdown
The default behavior of \`Object.prototype.toString.call(obj)\` returns a string like \`"[object Object]"\`. The \`Symbol.toStringTag\` well-known symbol allows you to customize the part after "object" for instances of your class, providing more descriptive type information.

### ⚙️ Solution Walkthrough
A getter for \`Symbol.toStringTag\` is added to the class, returning a custom string.
\`\`\`javascript
class MyCustomClass {
    get [Symbol.toStringTag]() {
        return 'Custom';
    }
}
const instance = new MyCustomClass();
Object.prototype.toString.call(instance); // "[object Custom]"
\`\`\`
1.  **\`get [Symbol.toStringTag]\`**: By defining this getter, you control the string tag. Many built-in JavaScript objects, like \`Map\` and \`Promise\`, use this internally.

### 📚 Key Concepts
-   **\`Symbol.toStringTag\`**: A well-known symbol that specifies the string value that is used in the default description of an object.
`,
  'class-protected-properties-conceptual': `
### 💡 Problem Breakdown
While JavaScript has true private fields (\`#\`), it does not have a concept of "protected" (accessible to the class and its subclasses, but not externally). A widely adopted convention is to prefix a property name with an underscore (\`_\`) to signal that it is intended for internal use and should not be modified from the outside.

### ⚙️ Solution Walkthrough
A \`_id\` property is used to demonstrate the convention.
\`\`\`javascript
class User {
    constructor(id) {
        this._id = id; // By convention, this is "protected"
    }
}
const user = new User(123);
// Technically, you can still access it:
console.log(user._id); // 123
// But the underscore signals that you shouldn't.
\`\`\`
1.  **\`_id\`**: The underscore has no effect on the language; it is purely a signal to other developers.

### 📚 Key Concepts
-   **Programming Conventions**: Agreed-upon practices that are not enforced by the language but are followed by developers to improve code readability and maintainability.
`,
  'class-final-method-conceptual': `
### 💡 Problem Breakdown
Some languages have a \`final\` keyword to prevent a method from being overridden by subclasses. JavaScript does not. However, this behavior can be simulated by checking in the parent constructor if the method has been changed on the subclass's prototype.

### ⚙️ Solution Walkthrough
The parent constructor checks if the instance's method is the same as the one on its own prototype.
\`\`\`javascript
class Parent {
    constructor() {
        if (this.myMethod !== Parent.prototype.myMethod) {
            throw new Error("myMethod cannot be overridden.");
        }
    }
    myMethod() { /* ... */ }
}
class Child extends Parent {
    myMethod() { /* I am overriding! */ }
}
// new Child(); // This would throw the error.
\`\`\`
1.  **Constructor Check**: This check happens when an instance is created. It compares the method found on the instance's prototype chain with the method on the parent's prototype. If a subclass has overridden it, they will not be the same function reference.

### 📚 Key Concepts
-   **Defensive Programming**: Writing code that anticipates potential misuse and protects against it.
`,
  'class-interface-conceptual': `
### 💡 Problem Breakdown
An "interface" is a contract that specifies a set of methods a class must implement. Languages like TypeScript have formal interfaces. In plain JavaScript, you can simulate this by having a base class throw an error if a required method is not implemented by a subclass.

### ⚙️ Solution Walkthrough
The base class \`Storable\` requires subclasses to implement \`save\` and \`load\`.
\`\`\`javascript
class Storable {
    constructor() {
        if (typeof this.save !== 'function' || typeof this.load !== 'function') {
            throw new Error("Class must implement save() and load() methods.");
        }
    }
}
class FileStorage extends Storable {
    save() { /* ... */ }
    load() { /* ... */ }
}
// new Storable(); // Would throw error
// class BadStorage extends Storable {}
// new BadStorage(); // Would throw error
const goodStorage = new FileStorage(); // Works
\`\`\`
1.  **Constructor Check**: The base class constructor inspects \`this\` (which will be the instance of the subclass) to ensure the required methods exist.

### 📚 Key Concepts
-   **Interface**: A description of the properties and methods that an object must have.
-   **Duck Typing**: The principle that "if it walks like a duck and it quacks like a duck, then it must be a duck." This check enforces a form of duck typing.
`,
  'class-dependency-injection': `
### 💡 Problem Breakdown
Dependency Injection (DI) is a design pattern where an object receives other objects that it depends on (its "dependencies") from an external source, rather than creating them itself. This makes code more modular, flexible, and easier to test.

### ⚙️ Solution Walkthrough
The \`App\` class doesn't create its own \`Logger\`. Instead, it receives a logger instance in its constructor.
\`\`\`javascript
class Logger { log(msg) { /*...*/ } }
class App {
    constructor(logger) {
        this.logger = logger; // The dependency is "injected"
    }
    run() {
        this.logger.log("App running");
    }
}
const myLogger = new Logger();
const myApp = new App(myLogger); // Injecting the dependency
\`\`\`
1.  **Decoupling**: The \`App\` class is no longer tightly coupled to a specific \`Logger\` implementation. You could easily pass in a different kind of logger (e.g., a \`FileLogger\` or a \`ConsoleLogger\`) without changing the \`App\` class itself.

### 📚 Key Concepts
-   **Dependency Injection**: A pattern where dependencies are passed into an object instead of being created by it.
-   **Inversion of Control (IoC)**: DI is a form of IoC. The control of creating dependencies is inverted from the object itself to an external entity.
`,
  'class-command-pattern': `
### 💡 Problem Breakdown
The Command pattern is a behavioral design pattern that turns a request into a stand-alone object containing all information about the request. This lets you parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.

### ⚙️ Solution Walkthrough
A \`Light\` (Receiver) has on/off methods. \`LightOnCommand\` and \`LightOffCommand\` (Commands) encapsulate these actions. An \`Invoker\` triggers the command's \`execute\` method.
\`\`\`javascript
class Light { // Receiver
  on() { return "Light is ON"; }
  off() { return "Light is OFF"; }
}
class LightOnCommand { // Command
  constructor(light) { this.light = light; }
  execute() { return this.light.on(); }
}
const light = new Light();
const turnOn = new LightOnCommand(light);
// An invoker would simply call turnOn.execute()
turnOn.execute(); // "Light is ON"
\`\`\`
1.  **Encapsulation**: The \`LightOnCommand\` object encapsulates the receiver (\`light\`) and the action (\`on\`). The client code only needs to know about the command's \`execute\` method, not the details of the \`Light\` class.

### 📚 Key Concepts
-   **Command Pattern**: A pattern that decouples the object that invokes an operation from the object that knows how to perform it.
`,
  'class-observer-pattern': `
### 💡 Problem Breakdown
The Observer pattern is a behavioral design pattern where a "subject" object maintains a list of its dependents, called "observers," and notifies them automatically of any state changes, usually by calling one of their methods. It's the foundation of event-driven systems.

### ⚙️ Solution Walkthrough
A \`WeatherStation\` (Subject) notifies multiple \`Display\` (Observer) objects when its temperature changes.
\`\`\`javascript
class WeatherStation { // Subject
  constructor() { this.observers = []; }
  add(observer) { this.observers.push(observer); }
  setTemperature(temp) {
    this.temperature = temp;
    this.observers.forEach(o => o.update(temp));
  }
}
class TemperatureDisplay { // Observer
  update(temp) { console.log(\`Display: \${temp}\`); }
}
const station = new WeatherStation();
station.add(new TemperatureDisplay());
station.setTemperature(25); // Notifies the display
\`\`\`
1.  **Subject**: Maintains a list of observers.
2.  **Observer**: Has an \`update\` method that the subject calls.
3.  **Notification**: When the subject's state changes (\`setTemperature\`), it iterates through its observers and notifies them.

### 📚 Key Concepts
-   **Observer Pattern**: A pattern for establishing a one-to-many dependency between objects.
`,
  'class-decorator-pattern': `
### 💡 Problem Breakdown
The Decorator pattern allows you to attach new behaviors to objects dynamically by placing them inside special "wrapper" objects. This is a flexible alternative to subclassing for extending functionality.

### ⚙️ Solution Walkthrough
A \`BoldDecorator\` wraps a \`Text\` component. When its \`render\` method is called, it adds bold tags around the result of the original component's \`render\` method.
\`\`\`javascript
class SimpleText {
  constructor(text) { this.text = text; }
  render() { return this.text; }
}
class BoldDecorator {
  constructor(component) { this.component = component; }
  render() { return \`<b>\${this.component.render()}</b>\`; }
}
const myText = new SimpleText("Hello");
const boldText = new BoldDecorator(myText);
boldText.render(); // "<b>Hello</b>"
\`\`\`
1.  **Wrapping**: The decorator takes the original component in its constructor.
2.  **Delegation**: The decorator's method calls the original component's method and then "decorates" the result with additional functionality.

### 📚 Key Concepts
-   **Decorator Pattern**: A structural pattern for adding new functionality to an object without altering its structure.
`,
  'class-adapter-pattern': `
### 💡 Problem Breakdown
The Adapter pattern acts as a bridge between two incompatible interfaces. It involves a single class which is responsible for joining functionalities of independent or incompatible interfaces.

### ⚙️ Solution Walkthrough
An old API returns XML. A new system expects JSON. The \`XmlToJsonAdapter\` wraps the old API and converts its output to the format the new system expects.
\`\`\`javascript
class OldApi {
  fetchXml() { return "<data>hello</data>"; }
}
class XmlToJsonAdapter {
  constructor(oldApi) { this.oldApi = oldApi; }
  fetchJson() {
    const xml = this.oldApi.fetchXml();
    // (conceptual conversion)
    return \`{ "data": "hello" }\`;
  }
}
const adapter = new XmlToJsonAdapter(new OldApi());
adapter.fetchJson();
\`\`\`
1.  **Wrapping**: The adapter contains an instance of the object with the incompatible interface.
2.  **Translation**: The adapter's methods translate calls into a format the original object understands and/or translate the results back into the format the client expects.

### 📚 Key Concepts
-   **Adapter Pattern**: A structural pattern that allows objects with incompatible interfaces to collaborate.
`,
  'class-facade-pattern': `
### 💡 Problem Breakdown
The Facade pattern provides a simplified, unified interface to a more complex set of subsystems or classes. It hides the complexity of the subsystems and provides a simple entry point for common tasks.

### ⚙️ Solution Walkthrough
A \`HomeTheaterFacade\` provides simple methods like \`watchMovie()\`. Internally, this one method makes several complex calls to different subsystem classes (\`Amplifier\`, \`DvdPlayer\`, \`Projector\`).
\`\`\`javascript
// Subsystems (complex)
class DvdPlayer { on() { /*...*/ } play() { /*...*/ } }
class Projector { on() { /*...*/ } }

class HomeTheaterFacade { // Facade
  constructor(dvd, projector) {
    this.dvd = dvd;
    this.projector = projector;
  }
  watchMovie() {
    this.projector.on();
    this.dvd.on();
    this.dvd.play();
    return "Movie is playing!";
  }
}
\`\`\`
1.  **Simplification**: The client code only needs to interact with the Facade's simple \`watchMovie\` method, not the individual components.

### 📚 Key Concepts
-   **Facade Pattern**: A structural pattern that provides a simplified interface to a complex system.
`,
  'class-proxy-pattern': `
### 💡 Problem Breakdown
A Proxy provides a surrogate or placeholder for another object to control access to it. It's structurally similar to a Decorator but is used for different purposes, such as lazy initialization, access control, or logging.

### ⚙️ Solution Walkthrough
An \`ImageProxy\` controls access to a large \`RealImage\` object. The real image is only loaded from disk when its \`display\` method is actually called for the first time.
\`\`\`javascript
class RealImage {
  constructor(filename) { this.filename = filename; /* load from disk... */ }
  display() { return \`Displaying \${this.filename}\`; }
}
class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null; // Not loaded yet
  }
  display() {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    return this.realImage.display();
  }
}
\`\`\`
1.  **Lazy Initialization**: The proxy defers the creation of the expensive \`RealImage\` object until it's actually needed.

### 📚 Key Concepts
-   **Proxy Pattern**: A structural pattern for providing a placeholder for another object to control access to it.
`,
  'class-builder-pattern': `
### 💡 Problem Breakdown
The Builder pattern is a creational pattern used to construct complex objects step by step. It separates the construction of a complex object from its representation, so the same construction process can create different representations.

### ⚙️ Solution Walkthrough
A \`PizzaBuilder\` has methods to set the dough, sauce, and toppings. The final \`build()\` method returns the configured \`Pizza\` object. This allows for creating different types of pizzas using the same builder.
\`\`\`javascript
class Pizza { /* ... */ }
class PizzaBuilder {
  constructor() { this.pizza = new Pizza(); }
  setDough(dough) { this.pizza.dough = dough; return this; }
  setSauce(sauce) { this.pizza.sauce = sauce; return this; }
  addTopping(topping) { this.pizza.toppings.push(topping); return this; }
  build() { return this.pizza; }
}

const myPizza = new PizzaBuilder()
  .setDough("thin")
  .setSauce("tomato")
  .addTopping("cheese")
  .build();
\`\`\`
1.  **Step-by-Step Construction**: The builder guides the creation process.
2.  **Fluent Interface**: The methods return \`this\` to allow for chaining.

### 📚 Key Concepts
-   **Builder Pattern**: A pattern for separating object construction from its representation.
`,
  'class-flyweight-pattern': `
### 💡 Problem Breakdown
The Flyweight pattern is a structural pattern used to minimize memory usage by sharing as much data as possible with other similar objects. It's useful when you need to create a large number of similar objects.

### ⚙️ Solution Walkthrough
To render thousands of trees in a game, we separate their state. The \`TreeType\` (Flyweight) stores the *intrinsic* state (shared data like mesh, texture). Many \`Tree\` objects store the *extrinsic* state (unique data like position). A factory ensures that only one \`TreeType\` object is created for each type.
\`\`\`javascript
// Flyweight
class TreeType { constructor(mesh, texture) { /*...*/ } }

// Flyweight Factory
class TreeFactory {
  static treeTypes = {};
  static getTreeType(mesh, texture) {
    if (!this.treeTypes[mesh]) {
      this.treeTypes[mesh] = new TreeType(mesh, texture);
    }
    return this.treeTypes[mesh];
  }
}

// Context object
class Tree {
  constructor(x, y, type) { this.x = x; this.y = y; this.type = type; }
}
\`\`\`
1.  **Shared State**: The mesh and texture data for an "Oak Tree" is stored only once in a single \`TreeType\` object.
2.  **Unique State**: Each of the thousands of individual tree objects only needs to store its unique x, y coordinates.

### 📚 Key Concepts
-   **Flyweight Pattern**: A pattern for sharing data to reduce memory consumption.
-   **Intrinsic vs. Extrinsic State**: Intrinsic state is shared, while extrinsic state is unique to each object.
`,
  'class-mediator-pattern': `
### 💡 Problem Breakdown
The Mediator pattern is a behavioral pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

### ⚙️ Solution Walkthrough
Instead of \`User\` objects knowing about each other directly, they only know about a central \`Chatroom\` (Mediator). When a user sends a message, they send it to the chatroom, which then broadcasts it to all other users.
\`\`\`javascript
class Chatroom { // Mediator
  constructor() { this.users = {}; }
  register(user) { this.users[user.name] = user; user.chatroom = this; }
  send(message, from, to) {
    this.users[to].receive(message, from);
  }
}
class User { // Colleague
  constructor(name) { this.name = name; }
  send(message, to) { this.chatroom.send(message, this, to); }
  receive(message, from) { /*...*/ }
}
\`\`\`
1.  **Centralized Communication**: The \`Chatroom\` is the single hub for communication, reducing the number of direct connections between users.

### 📚 Key Concepts
-   **Mediator Pattern**: A pattern that promotes loose coupling by keeping objects from referring to each other explicitly.
`,
  'class-memento-pattern': `
### 💡 Problem Breakdown
The Memento pattern is a behavioral pattern that lets you save and restore the previous state of an object without revealing the details of its implementation. It's useful for implementing undo/redo functionality.

### ⚙️ Solution Walkthrough
An \`Editor\` (Originator) can create a \`Snapshot\` (Memento) of its state. The \`History\` (Caretaker) stores a list of these snapshots. The Editor can then restore its state from a snapshot without the History needing to know the snapshot's internal structure.
\`\`\`javascript
class Snapshot { // Memento
  constructor(content) { this.content = content; }
}
class Editor { // Originator
  constructor() { this.content = ""; }
  createSnapshot() { return new Snapshot(this.content); }
  restore(snapshot) { this.content = snapshot.content; }
}
class History { // Caretaker
  constructor() { this.snapshots = []; }
  push(snapshot) { this.snapshots.push(snapshot); }
  pop() { return this.snapshots.pop(); }
}
\`\`\`
1.  **Three Roles**: The pattern involves the Originator (the object with the state), the Memento (an object that stores the state), and the Caretaker (an object that holds the mementos).

### 📚 Key Concepts
-   **Memento Pattern**: A pattern for capturing and restoring an object's internal state.
`,
  'class-visitor-pattern': `
### 💡 Problem Breakdown
The Visitor pattern is a way of separating an algorithm from an object structure on which it operates. A key benefit is the ability to add new operations to existing object structures without modifying those structures.

### ⚙️ Solution Walkthrough
We have different shapes (\`Circle\`, \`Square\`). Instead of adding an \`export()\` method to each shape, we create a single \`ExportVisitor\` with different \`visit\` methods for each shape type. Each shape has an \`accept(visitor)\` method that calls the correct method on the visitor.
\`\`\`javascript
class ExportVisitor { // Visitor
  visitCircle(circle) { return "Exporting Circle"; }
  visitSquare(square) { return "Exporting Square"; }
}
class Circle { // Element
  accept(visitor) { return visitor.visitCircle(this); }
}
class Square { // Element
  accept(visitor) { return visitor.visitSquare(this); }
}

const shapes = [new Circle(), new Square()];
const visitor = new ExportVisitor();
shapes.forEach(shape => shape.accept(visitor));
\`\`\`
1.  **Double Dispatch**: The \`accept\` method is a form of double dispatch. The operation that gets executed depends on both the type of the shape and the type of the visitor.

### 📚 Key Concepts
-   **Visitor Pattern**: A behavioral pattern for separating algorithms from the objects they operate on.
`
};