import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "es6-classes",
    title: "ES6 Classes",
    description:
      "Create a simple `Person` class with a constructor and a `greet` method.",
    category: "Classes & OOP",
    inputs: [
      { id: "name", label: "Name", type: "text", defaultValue: "Alice" },
    ],
    buttonText: "Create and Greet",
  },
  {
    id: "class-inheritance",
    title: "Class Inheritance with `extends`",
    description:
      "Create a `Student` class that inherits from the `Person` class and adds a `study` method.",
    category: "Classes & OOP",
    inputs: [
      { id: "name", label: "Student Name", type: "text", defaultValue: "Bob" },
      { id: "subject", label: "Subject", type: "text", defaultValue: "Math" },
    ],
    buttonText: "Create Student",
  },
  {
    id: "class-static-methods",
    title: "Class Static Methods",
    description:
      "Define and call a static method on a class. Static methods are called on the class itself, not on instances.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Call Static Method",
  },
  {
    id: "class-getters-setters",
    title: "Class Getters and Setters",
    description:
      "Use `get` and `set` syntax to create a computed `fullName` property in a class.",
    category: "Classes & OOP",
    inputs: [
      {
        id: "firstName",
        label: "First Name",
        type: "text",
        defaultValue: "John",
      },
      { id: "lastName", label: "Last Name", type: "text", defaultValue: "Doe" },
    ],
    buttonText: "Use Getter/Setter",
  },
  {
    id: "class-private-fields",
    title: "Class Private Fields (`#`)",
    description:
      "Create a class with a private field using the `#` syntax to demonstrate true encapsulation.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Private Field",
  },
  {
    id: "super-in-constructor",
    title: "`super()` in Constructor",
    description:
      "Demonstrate the necessity of calling `super()` in a subclass constructor before using `this`.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test `super()`",
  },
  {
    id: "method-overriding",
    title: "Method Overriding",
    description:
      "Create a subclass that provides a specific implementation of a method that is already provided by its superclass.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Overriding",
  },
  {
    id: "super-in-methods",
    title: "`super` in Methods",
    description:
      "Use `super` within a subclass method to call the parent class's version of that same method.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Call Parent Method",
  },
  {
    id: "class-expression",
    title: "Class Expression",
    description:
      "Define a class using a class expression (both named and anonymous) and assign it to a variable.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Create from Expression",
  },
  {
    id: "static-properties",
    title: "Static Properties",
    description:
      "Define a static property on a class that holds a value shared by all instances of the class.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Access Static Property",
  },
  {
    id: "instanceof-with-classes",
    title: "`instanceof` with Classes",
    description:
      "Use the `instanceof` operator to check the type of an object created from a class and its parent class.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Check Type",
  },
  {
    id: "class-without-constructor",
    title: "Class without Constructor",
    description:
      "Demonstrate that if you do not supply a constructor, a default one is created for you.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Default Constructor",
  },
  {
    id: "class-computed-method-names",
    title: "Computed Method Names",
    description:
      "Define a method in a class where the name of the method is determined by an expression.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Call Computed Method",
  },
  {
    id: "class-public-fields",
    title: "Class Public Fields",
    description:
      "Use the class field declaration syntax to define public properties directly on a class.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Public Fields",
  },
  {
    id: "class-private-methods",
    title: "Class Private Methods (`#`)",
    description:
      "Define a private method in a class using the `#` syntax, making it inaccessible from outside the class.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Private Method",
  },
  {
    id: "abstract-class-conceptual",
    title: "Abstract Class (Conceptual)",
    description:
      "Conceptually demonstrate how to simulate an abstract class that cannot be instantiated directly and must be subclassed.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Concept",
  },
  {
    id: "polymorphism-example",
    title: "Polymorphism Example",
    description:
      "Demonstrate polymorphism by having different subclasses respond to the same method call in their own unique ways.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Polymorphism",
  },
  {
    id: "chaining-class-methods",
    title: "Chaining Class Methods",
    description:
      "Design a class where methods return `this` to allow for method chaining.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Chain Methods",
  },
  {
    id: "extends-built-in-array",
    title: "Extending Built-in Objects",
    description:
      "Create a custom array class that extends `Array` and adds a new method.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Use Custom Array",
  },
  {
    id: "class-mixins-conceptual",
    title: "Mixins (Conceptual)",
    description:
      "Show a conceptual pattern for 'mixins' where a class can inherit methods from multiple sources without a traditional inheritance hierarchy.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Mixin Pattern",
  },
  {
    id: "class-this-lexical-arrow",
    title: "`this` with Arrow Functions in Classes",
    description:
      "Demonstrate how an arrow function used as a class method captures the lexical `this` of the instance, avoiding binding issues.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Arrow `this`",
  },
  {
    id: "class-static-init-block",
    title: "Static Initialization Block",
    description:
      "Use a `static {}` block to perform one-time setup for a class when it's first loaded.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Static Block Result",
  },
  {
    id: "class-error-subclass",
    title: "Creating Custom Error Classes",
    description:
      "Create a custom error class by extending the built-in `Error` class.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Throw Custom Error",
  },
  {
    id: "class-factory-pattern",
    title: "Factory Pattern with Classes",
    description:
      "Create a factory function that returns instances of different classes based on an input type.",
    category: "Classes & OOP",
    inputs: [
      {
        id: "type",
        label: "Type ('dog' or 'cat')",
        type: "text",
        defaultValue: "dog",
      },
    ],
    buttonText: "Create Animal",
  },
  {
    id: "class-singleton-pattern",
    title: "Singleton Pattern with Classes",
    description:
      "Implement the Singleton pattern, ensuring that a class has only one instance and provides a global point of access to it.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Singleton",
  },
  {
    id: "class-composition-vs-inheritance",
    title: "Composition vs. Inheritance (Conceptual)",
    description:
      "Explain the principle of 'Composition over Inheritance' with a conceptual code example.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Explain Concept",
  },
  {
    id: "class-method-binding",
    title: "Class Method Binding",
    description:
      "Show the common problem of `this` being lost when a method is passed as a callback, and solve it by binding in the constructor.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Binding",
  },
  {
    id: "class-private-static-fields",
    title: "Private Static Fields",
    description:
      "Create a class with a private static field, accessible only from within the class.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Access Private Static",
  },
  {
    id: "class-private-static-methods",
    title: "Private Static Methods",
    description: "Create and use a private static method within a class.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Use Private Static Method",
  },
  {
    id: "class-static-getters-setters",
    title: "Static Getters and Setters",
    description:
      "Define static getters and setters on a class to manage a static property.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Use Static Accessors",
  },
  {
    id: "class-iterable-protocol",
    title: "Iterable Class with `Symbol.iterator`",
    description:
      "Make a custom class iterable by implementing the `Symbol.iterator` method, allowing it to be used in a `for...of` loop.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Iterate Custom Class",
  },
  {
    id: "class-generator-method",
    title: "Class with a Generator Method",
    description:
      "Add a generator method (`*method()`) to a class to control its iteration.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Use Generator",
  },
  {
    id: "class-species-pattern",
    title: "The `Symbol.species` Pattern",
    description:
      "Use `Symbol.species` to control what constructor is used when a subclass method (like `map`) needs to return a new instance.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Test Species",
  },
  {
    id: "class-tostring-tag",
    title: "`Symbol.toStringTag`",
    description:
      "Customize the string returned by `Object.prototype.toString.call()` for an instance of a class by setting `Symbol.toStringTag`.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Get String Tag",
  },
  {
    id: "class-protected-properties-conceptual",
    title: "Protected Properties (Conceptual)",
    description:
      "Demonstrate a common convention (using a `_` prefix) to signal that a property is 'protected' and not intended for external use.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Convention",
  },
  {
    id: "class-final-method-conceptual",
    title: "Final Method (Conceptual)",
    description:
      "Show a pattern to prevent a method from being overridden in a subclass.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Pattern",
  },
  {
    id: "class-interface-conceptual",
    title: "Interface (Conceptual)",
    description:
      "Demonstrate how to enforce an 'interface' in JavaScript, where a class must implement certain methods.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Interface Pattern",
  },
  {
    id: "class-dependency-injection",
    title: "Dependency Injection",
    description:
      "Create a class that receives its dependencies (other objects it needs to work) through its constructor.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Inject Dependency",
  },
  {
    id: "class-command-pattern",
    title: "Command Pattern (Conceptual)",
    description:
      "Implement the Command design pattern, encapsulating a request as an object, thereby letting you parameterize clients with different requests.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Command Pattern",
  },
  {
    id: "class-observer-pattern",
    title: "Observer Pattern (Conceptual)",
    description:
      "Implement the Observer design pattern, where a 'subject' object maintains a list of its dependents, called 'observers', and notifies them automatically of any state changes.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Observer Pattern",
  },
  {
    id: "class-decorator-conceptual",
    title: "Decorator Pattern (Conceptual)",
    description:
      "Show the Decorator pattern, which allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Decorator Pattern",
  },
  {
    id: "class-adapter-pattern",
    title: "Adapter Pattern (Conceptual)",
    description:
      "Implement the Adapter pattern, which allows the interface of an existing class to be used as another interface.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Adapter Pattern",
  },
  {
    id: "class-facade-pattern",
    title: "Facade Pattern (Conceptual)",
    description:
      "Implement the Facade pattern, which provides a simplified interface to a library, a framework, or any other complex set of classes.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Facade Pattern",
  },
  {
    id: "class-proxy-pattern",
    title: "Proxy Pattern (Conceptual)",
    description:
      "Show the Proxy pattern, where a class functions as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Proxy Pattern",
  },
  {
    id: "class-builder-pattern",
    title: "Builder Pattern (Conceptual)",
    description:
      "Implement the Builder pattern to construct a complex object step by step, producing different types and representations of an object using the same construction process.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Builder Pattern",
  },
  {
    id: "class-flyweight-pattern",
    title: "Flyweight Pattern (Conceptual)",
    description:
      "Use the Flyweight pattern to minimize memory usage or computational expenses by sharing as much as possible with other similar objects.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Flyweight Pattern",
  },
  {
    id: "class-mediator-pattern",
    title: "Mediator Pattern (Conceptual)",
    description:
      "Use the Mediator pattern to reduce coupling between components of a program by making them communicate indirectly, through a special mediator object.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Mediator Pattern",
  },
  {
    id: "class-memento-pattern",
    title: "Memento Pattern (Conceptual)",
    description:
      "Implement the Memento pattern to capture and externalize an object's internal state so that the object can be restored to this state later.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Memento Pattern",
  },
  {
    id: "class-visitor-pattern",
    title: "Visitor Pattern (Conceptual)",
    description:
      "Use the Visitor design pattern to represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.",
    category: "Classes & OOP",
    inputs: [],
    buttonText: "Show Visitor Pattern",
  },
];
