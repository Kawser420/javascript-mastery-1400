// import { Problem } from "../../types";

import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "class-syntax-declaration",
    title: "Your First Class",
    description:
      "Declare a simple empty class named `User` using the `class` keyword.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Declare Class",
  },
  // problem--> 02
  {
    id: "class-constructor-basic",
    title: "The Constructor Method",
    description:
      "Create a `Person` class with a `constructor` that accepts a `name` argument and sets it as a property on the instance.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Constructor",
  },
  // problem--> 03
  {
    id: "class-instantiation",
    title: "Creating an Instance",
    description:
      "Instantiate a new object from a `Car` class using the `new` keyword.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Instantiate Object",
  },
  // problem--> 04
  {
    id: "class-methods-basic",
    title: "Defining a Method",
    description:
      "Add a `greet()` method to a `Greeter` class that returns a welcome string.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Method",
  },
  // problem--> 05
  {
    id: "class-this-keyword",
    title: "Using `this`",
    description:
      "Create a `Dog` class. Its `bark()` method should use `this.name` to include the dog's name in the output string.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test `this`",
  },
  // problem--> 06
  {
    id: "class-getters-basic",
    title: "Using a Getter",
    description:
      "Create a `Rectangle` class with `width` and `height`. Add a getter named `area` that calculates and returns the area.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Use Getter",
  },
  // problem--> 07
  {
    id: "class-setters-basic",
    title: "Using a Setter",
    description:
      "Create a `Temperature` class. Add a setter for `celsius` that also calculates and sets a `fahrenheit` property.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Use Setter",
  },
  // problem--> 08
  {
    id: "class-static-methods-basic",
    title: "Static Method",
    description:
      "Create a `Calculator` class with a static method `add(a, b)` that returns the sum of two numbers, callable without creating an instance.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Call Static Method",
  },
  // problem--> 09
  {
    id: "class-inheritance-extends",
    title: "Basic Inheritance",
    description:
      "Create a base class `Animal` and a derived class `Bird` that inherits from `Animal` using the `extends` keyword.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Inheritance",
  },
  // problem--> 10
  {
    id: "class-inheritance-super",
    title: "Calling `super()`",
    description:
      "In a `Manager` class that extends `Employee`, call the parent's constructor using `super()` to pass up the employee's name.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Use `super()`",
  },
  // problem--> 11
  {
    id: "class-instanceof-operator",
    title: "`instanceof` Operator",
    description:
      "Create a `Vehicle` class and a `Motorcycle` class that extends it. Verify that an instance of `Motorcycle` is also an instance of `Vehicle`.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Check Instance Type",
  },
  // problem--> 12
  {
    id: "class-method-overriding",
    title: "Method Overriding",
    description:
      'An `Animal` class has a `speak()` method. Create a `Cow` subclass that overrides `speak()` to return "Moo" instead.',
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Override Method",
  },
  // problem--> 13
  {
    id: "class-super-method-call",
    title: "Calling Parent Methods with `super`",
    description:
      "A `Parent` has a `log()` method. A `Child` class overrides `log()` but also calls the parent's version using `super.log()`.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Call `super.log()`",
  },
  // problem--> 14
  {
    id: "class-expression",
    title: "Class Expressions",
    description:
      "Define a class using a class expression and assign it to a variable, then create an instance from that variable.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Use Class Expression",
  },
  // problem--> 15
  {
    id: "class-unnamed-expression",
    title: "Unnamed Class Expressions",
    description:
      "Create an unnamed class expression directly in a return statement of a factory function.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Factory",
  },
  // problem--> 16
  {
    id: "class-static-properties",
    title: "Static Properties",
    description:
      "Add a static property `defaultColor` to a `Color` class and access it directly from the class.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Access Static Property",
  },
  // problem--> 17
  {
    id: "class-computed-method-names",
    title: "Computed Method Names",
    description:
      "Create a class with a method whose name is determined by a variable using computed property syntax.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Computed Name",
  },
  // problem--> 18
  {
    id: "class-getter-setter-validation",
    title: "Validation in Setters",
    description:
      "In a `User` class, create a setter for an `age` property that throws an error if the provided age is negative.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Validation",
  },
  // problem--> 19
  {
    id: "class-chaining-methods",
    title: "Method Chaining",
    description:
      "Design a `StringBuilder` class where methods like `append()` and `prepend()` return `this` to allow for method chaining.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Chain Methods",
  },
  // problem--> 20
  {
    id: "class-no-hoisting",
    title: "Classes are not Hoisted",
    description:
      "Demonstrate that unlike function declarations, class declarations are not hoisted and trying to access one before its declaration throws a ReferenceError.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Demonstrate Hoisting",
  },
  // problem--> 21
  {
    id: "class-default-parameters-constructor",
    title: "Default Constructor Parameters",
    description:
      "Create a `Settings` class where the constructor accepts a `config` object, with default values for properties like `theme` and `language`.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Defaults",
  },
  // problem--> 22
  {
    id: "class-multiple-instances",
    title: "Multiple Independent Instances",
    description:
      "Create a `Counter` class. Instantiate two separate counters and show that their counts are independent of each other.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Instances",
  },
  // problem--> 23
  {
    id: "class-property-types",
    title: "Properties with Different Types",
    description:
      "Create a `Book` class with properties for `title` (string), `pages` (number), and `isAvailable` (boolean).",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Create Book",
  },
  // problem--> 24
  {
    id: "class-method-parameters",
    title: "Methods with Parameters",
    description:
      "Create a `Wallet` class with a `deposit(amount)` method that increases the wallet's balance.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Deposit",
  },
  // problem--> 25
  {
    id: "class-return-from-method",
    title: "Returning Values from Methods",
    description:
      "Add a `getBalance()` method to the `Wallet` class that returns the current balance.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Get Balance",
  },
  // problem--> 26
  {
    id: "class-getter-readonly-simulation",
    title: "Read-Only Property with Getter",
    description:
      "Create a `Circle` class. Store the `radius` and expose a public getter for it, but provide no setter to make it effectively read-only.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Read-Only",
  },
  // problem--> 27
  {
    id: "class-constructor-logic",
    title: "Logic in the Constructor",
    description:
      "Create a `Point` class that takes `x` and `y` coordinates. In the constructor, calculate a `distanceFromOrigin` property.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Calculate Distance",
  },
  // problem--> 28
  {
    id: "class-static-utility",
    title: "Static Utility Class",
    description:
      "Create a `StringUtils` class with only static methods like `capitalize(str)` and `reverse(str)`. The class should not be instantiable.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Use Utilities",
  },
  // problem--> 29
  {
    id: "class-inheritance-shared-methods",
    title: "Inheriting Methods",
    description:
      "An `Animal` class has an `eat()` method. Show that a `Cat` subclass instance can call `eat()` without defining it itself.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Inherited Method",
  },
  // problem--> 30
  {
    id: "class-prototype-check",
    title: "Checking the Prototype",
    description:
      "Create a `User` class and an instance. Use `Object.getPrototypeOf()` to show that the instance's prototype is `User.prototype`.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Check Prototype",
  },
  // problem--> 31
  {
    id: "class-constructor-property-check",
    title: "The `constructor` Property",
    description:
      "Verify that an instance of a `Player` class has a `constructor` property that points back to the `Player` class itself.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Verify Constructor",
  },
  // problem--> 32
  {
    id: "class-methods-vs-properties-explained",
    title: "Methods vs. Properties Explained",
    description:
      "Explain and demonstrate the difference between a class method (a function on the prototype) and a class property (data on the instance).",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Explain Difference",
  },
  // problem--> 33
  {
    id: "class-setter-data-formatting",
    title: "Formatting Data in Setters",
    description:
      "Create a `Person` class with a `name` setter that automatically trims whitespace and capitalizes the first letter of the name.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Formatting",
  },
  // problem--> 34
  {
    id: "class-static-constants",
    title: "Static Constants",
    description:
      'Define static "constant" properties on a `MathConstants` class, such as `PI` and `E`.',
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Access Constants",
  },
  // problem--> 35
  {
    id: "class-inheritance-property-access",
    title: "Accessing Parent Properties",
    description:
      "Create a `Product` class with a `price`. Create a `TaxedProduct` subclass that accesses `this.price` from the parent to calculate a final price.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Calculate Tax",
  },
  // problem--> 36
  {
    id: "class-object-as-property",
    title: "Object as a Property",
    description:
      "Create a `User` class that has an `address` property, where the address itself is an object with `street` and `city` properties.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Test Object Property",
  },
  // problem--> 37
  {
    id: "class-array-as-property",
    title: "Array as a Property",
    description:
      "Create a `Playlist` class with a `songs` property that is an array. Add methods to `addSong()` and `listSongs()`.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Manage Playlist",
  },
  // problem--> 38
  {
    id: "class-this-in-callbacks-problem",
    title: "The `this` Problem in Callbacks",
    description:
      "Demonstrate how the value of `this` is lost when a method is used as a callback (e.g., in `setTimeout`).",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Show `this` Problem",
  },
  // problem--> 39
  {
    id: "class-this-in-callbacks-bind-solution",
    title: "Solving `this` with `.bind()`",
    description:
      "Fix the `this` problem from the previous exercise by using the `.bind()` method to permanently set the context for the callback.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Fix with `.bind()`",
  },
  // problem--> 40
  {
    id: "class-simple-rpg-character",
    title: "Simple RPG Character",
    description:
      "Create a `Character` class with `name`, `health`, and `attack()` methods. The `attack()` method should accept another character as a target.",
    difficulty: "Beginner",
    category: "Classes and OOP",
    buttonText: "Simulate Combat",
  },
  // problem--> 41
  {
    id: "class-public-fields",
    title: "Public Class Fields",
    description:
      "Refactor a class to use public field declarations for its properties instead of setting them inside the constructor.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Use Public Fields",
  },
  // problem--> 42
  {
    id: "class-private-fields",
    title: "Private Class Fields",
    description:
      "Create a `BankAccount` class with a private field `#balance`. Ensure it can only be accessed by methods within the class.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Test Privacy",
  },
  // problem--> 43
  {
    id: "class-private-methods",
    title: "Private Methods",
    description:
      "Add a private method `#calculateTax()` to an `Invoice` class that is called by a public method but cannot be called from outside.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Test Private Method",
  },
  // problem--> 44
  {
    id: "class-extends-array",
    title: "Extending `Array`",
    description:
      "Create a `NumberList` class that extends `Array`. Add a `sum()` method to it that calculates the sum of its elements.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Extend Array",
  },
  // problem--> 45
  {
    id: "class-new-target",
    title: "Understanding `new.target`",
    description:
      "In a base class constructor, use `new.target` to check if it was instantiated directly or via a subclass.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Check `new.target`",
  },
  // problem--> 46
  {
    id: "class-static-blocks",
    title: "Static Initialization Blocks",
    description:
      "Use a `static` block in a `Config` class to perform complex, one-time setup when the class is first loaded.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Use Static Block",
  },
  // problem--> 47
  {
    id: "class-mixin-pattern",
    title: "The Mixin Pattern",
    description:
      "Create a `canFly` mixin as a function and apply its methods to a `Bird` class prototype to add flying behavior without using inheritance.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Apply Mixin",
  },
  // problem--> 48
  {
    id: "class-custom-error",
    title: "Custom Error Classes",
    description:
      "Create a custom `ValidationError` class that extends the built-in `Error` class and adds extra properties.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Create Custom Error",
  },
  // problem--> 49
  {
    id: "class-polymorphism",
    title: "Polymorphism in Action",
    description:
      "Create several `Shape` subclasses (Circle, Square) with a `getArea()` method. Write a function that iterates over an array of shapes and sums their areas.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Demonstrate Polymorphism",
  },
  // problem--> 50
  {
    id: "class-abstract-simulation",
    title: "Simulating Abstract Classes",
    description:
      "Create a base `DataStore` class that throws an error in its constructor if instantiated directly, forcing it to be subclassed.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Simulate Abstract",
  },
  // problem--> 51
  {
    id: "class-arrow-function-methods",
    title: "Arrow Functions as Methods",
    description:
      "Create a class with a method defined as a public field arrow function. Demonstrate how `this` is lexically bound, solving common callback issues.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Test Lexical `this`",
  },
  // problem--> 52
  {
    id: "class-private-getter-setter",
    title: "Private Field with Getter/Setter",
    description:
      "Use a private field `#name` with a public getter and setter to control access and add validation logic.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Test Private Accessors",
  },
  // problem--> 53
  {
    id: "class-extends-null",
    title: "Extending `null`",
    description:
      "Create a class that `extends null`. Show that its instances do not have a prototype chain linked to `Object.prototype`.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Test `extends null`",
  },
  // problem--> 54
  {
    id: "class-static-private-methods",
    title: "Private Static Methods",
    description:
      "Create a class with a private static method used as a helper for a public static method.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Test Private Static",
  },
  // problem--> 55
  {
    id: "class-composition-basic",
    title: "Basic Object Composition",
    description:
      "Create `Engine` and `Wheels` classes. Then, create a `Car` class that has instances of `Engine` and `Wheels` as properties in its constructor.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Compose Objects",
  },
  // problem--> 56
  {
    id: "class-delegation",
    title: "Method Delegation",
    description:
      "In the composed `Car` class, add a `start()` method that calls the `start()` method on its internal `engine` instance.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Delegate Method",
  },
  // problem--> 57
  {
    id: "class-super-properties",
    title: "Accessing Parent Properties with `super`",
    description:
      "Show how a subclass method can access a getter from its parent class using `super`.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Use `super` Property",
  },
  // problem--> 58
  {
    id: "class-private-field-check",
    title: "Checking for Private Fields",
    description:
      "Use the `in` operator to write a static method that checks if an object is a valid instance with a specific private field.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Check Private Field",
  },
  // problem--> 59
  {
    id: "class-constructor-return-value",
    title: "Constructor Return Override",
    description:
      "Demonstrate that if a constructor explicitly returns an object, that object becomes the result of the `new` expression instead of `this`.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Override Return",
  },
  // problem--> 60
  {
    id: "class-factory-function-vs-class",
    title: "Factory Functions vs Classes",
    description:
      "Compare and contrast creating objects using a factory function (with closures for privacy) versus using an ES6 class with private fields.",
    difficulty: "Intermediate",
    category: "Classes and OOP",
    buttonText: "Compare Patterns",
  },
  // problem--> 61
  {
    id: "class-symbol-iterator",
    title: "Making a Class Iterable",
    description:
      "Implement the `[Symbol.iterator]` method for a `Range` class so it can be used in a `for...of` loop.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Iterator",
  },
  // problem--> 62
  {
    id: "class-singleton-pattern",
    title: "The Singleton Pattern",
    description:
      "Implement the Singleton design pattern using a class with a private static instance and a static `getInstance()` method.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Singleton",
  },
  // problem--> 63
  {
    id: "class-factory-pattern",
    title: "The Factory Pattern",
    description:
      "Create a `ShapeFactory` class with a static method that returns instances of different `Shape` subclasses based on a string input.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Use Factory",
  },
  // problem--> 64
  {
    id: "class-proxy-handler",
    title: "Metaprogramming with Proxies",
    description:
      "Wrap a class instance with a `Proxy` to log all property accesses and method calls.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Wrap with Proxy",
  },
  // problem--> 65
  {
    id: "class-decorator-pattern",
    title: "The Decorator Pattern",
    description:
      "Implement the Decorator pattern by creating wrapper classes that add new functionality to a base `Coffee` object.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Apply Decorator",
  },
  // problem--> 66
  {
    id: "class-observer-pattern",
    title: "The Observer Pattern",
    description:
      "Implement the Observer pattern. Create a `Subject` class that can notify multiple `Observer` objects when its state changes.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Observer",
  },
  // problem--> 67
  {
    id: "class-symbol-species",
    title: "`Symbol.species`",
    description:
      "Use `Symbol.species` on a custom `MyArray` class to ensure that methods like `.map()` return instances of the base `Array` instead of `MyArray`.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test `Symbol.species`",
  },
  // problem--> 68
  {
    id: "class-private-static-fields",
    title: "Private Static Fields",
    description:
      "Use a private static field in a class to keep a registry of all instances that have been created, identified by name.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Use Instance Registry",
  },
  // problem--> 69
  {
    id: "class-composition-vs-inheritance-explained",
    title: "Composition over Inheritance",
    description:
      "Explain and refactor a deep inheritance hierarchy into a composition-based design using component objects.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Explain & Refactor",
  },
  // problem--> 70
  {
    id: "class-command-pattern",
    title: "The Command Pattern",
    description:
      "Implement the Command design pattern. Create command classes that encapsulate an action and its parameters, which can then be executed.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Command Pattern",
  },
  // problem--> 71
  {
    id: "class-strategy-pattern",
    title: "The Strategy Pattern",
    description:
      "Implement the Strategy pattern. Create a `Shipping` context class that uses different strategy objects (e.g., `UPS`, `FedEx`) to calculate costs.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Strategy Pattern",
  },
  // problem--> 72
  {
    id: "class-symbol-toprimitive",
    title: "Customizing Type Coercion",
    description:
      "Implement the `[Symbol.toPrimitive]` method on a `Money` class to control how it behaves in numeric and string contexts.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Type Coercion",
  },
  // problem--> 73
  {
    id: "class-private-slots-weakmap",
    title: "Private State with WeakMaps",
    description:
      "Before private fields, `WeakMap` was used to associate private data with class instances. Implement this pattern.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Use WeakMap Privacy",
  },
  // problem--> 74
  {
    id: "class-fluent-interface",
    title: "Advanced Fluent Interface",
    description:
      "Create a `QueryBuilder` class with a fluent (chainable) interface for building a complex data query object.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Build Fluent API",
  },
  // problem--> 75
  {
    id: "class-state-pattern",
    title: "The State Pattern",
    description:
      "Implement the State pattern. An `Order` object transitions through different state classes (`Pending`, `Shipped`, `Delivered`) which control its behavior.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test State Pattern",
  },
  // problem--> 76
  {
    id: "class-challenge-event-emitter",
    title: "Challenge: Build an Event Emitter",
    description:
      "Create a full `EventEmitter` class with `on`, `off`, `once`, and `emit` methods for managing and triggering custom events.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Build Event Emitter",
  },
  // problem--> 77
  {
    id: "class-mediator-pattern",
    title: "The Mediator Pattern",
    description:
      "Implement the Mediator pattern to reduce coupling between objects. Create a chat room (mediator) that allows users (colleagues) to communicate without knowing about each other directly.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Mediator",
  },
  // problem--> 78
  {
    id: "class-prototype-pattern",
    title: "The Prototype Pattern",
    description:
      "Implement the Prototype pattern. Create a `clone()` method on a class that creates a new instance by copying the properties of the original.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Prototype Clone",
  },
  // problem--> 79
  {
    id: "class-memento-pattern",
    title: "The Memento Pattern",
    description:
      "Implement the Memento pattern to save and restore the state of an object without revealing its implementation details.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Memento State",
  },
  // problem--> 80
  {
    id: "class-visitor-pattern",
    title: "The Visitor Pattern",
    description:
      "Implement the Visitor pattern, which lets you add new operations to classes without changing them. Create shapes and a visitor that can calculate area or perimeter.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Visitor",
  },
  // problem--> 81
  {
    id: "class-finalization-registry",
    title: "`FinalizationRegistry`",
    description:
      "Use a `FinalizationRegistry` to run a cleanup callback after a class instance has been garbage collected.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Cleanup",
  },
  // problem--> 82
  {
    id: "class-iterator-and-generator-method",
    title: "Generator Method as Iterator",
    description:
      "Refactor the iterable `Range` class to use a generator method (`* [Symbol.iterator]()`) for a cleaner implementation.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Use Generator Method",
  },
  // problem--> 83
  {
    id: "class-template-method-pattern",
    title: "The Template Method Pattern",
    description:
      "Implement the Template Method pattern. A base class defines the skeleton of an algorithm, and subclasses override specific steps.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Template Method",
  },
  // problem--> 84
  {
    id: "class-chain-of-responsibility-pattern",
    title: "Chain of Responsibility Pattern",
    description:
      "Implement the Chain of Responsibility pattern. Create a chain of objects that can handle a request, passing it along until a handler is found.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Request Chain",
  },
  // problem--> 85
  {
    id: "class-bridge-pattern",
    title: "The Bridge Pattern",
    description:
      "Implement the Bridge pattern to decouple an abstraction from its implementation, allowing both to vary independently.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Bridge",
  },
  // problem--> 86
  {
    id: "class-flyweight-pattern",
    title: "The Flyweight Pattern",
    description:
      "Implement the Flyweight pattern to minimize memory usage by sharing common data between multiple objects.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Flyweight",
  },
  // problem--> 87
  {
    id: "class-facade-pattern",
    title: "The Facade Pattern",
    description:
      "Implement the Facade pattern to provide a simplified interface to a complex subsystem of classes.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Facade",
  },
  // problem--> 88
  {
    id: "class-adapter-pattern",
    title: "The Adapter Pattern",
    description:
      "Implement the Adapter pattern to make two incompatible interfaces work together.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Adapter",
  },
  // problem--> 89
  {
    id: "class-dependency-injection",
    title: "Dependency Injection",
    description:
      "Create a `Service` class that depends on a `Logger`. Instead of creating the logger itself, it receives it in the constructor (dependency injection).",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Inject Dependency",
  },
  // problem--> 90
  {
    id: "class-solid-srp",
    title: "SOLID: Single Responsibility Principle",
    description:
      'Refactor a "god object" class that does too much (e.g., handles user data and logging) into smaller, single-purpose classes.',
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Refactor for SRP",
  },
  // problem--> 91
  {
    id: "class-solid-ocp",
    title: "SOLID: Open/Closed Principle",
    description:
      "Demonstrate the Open/Closed Principle. Design a system (e.g., for calculating discounts) that can be extended with new discount types without modifying existing code.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Demonstrate OCP",
  },
  // problem--> 92
  {
    id: "class-solid-lsp",
    title: "SOLID: Liskov Substitution Principle",
    description:
      "Explain and provide a code example that violates the Liskov Substitution Principle (e.g., a Square subclass of Rectangle that changes behavior).",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Violate LSP",
  },
  // problem--> 93
  {
    id: "class-solid-isp",
    title: "SOLID: Interface Segregation Principle",
    description:
      "Refactor a large, multi-purpose class into smaller, more specific classes so that clients only depend on the methods they use.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Refactor for ISP",
  },
  // problem--> 94
  {
    id: "class-solid-dip",
    title: "SOLID: Dependency Inversion Principle",
    description:
      'Demonstrate Dependency Inversion by making a high-level class depend on an abstraction (an "interface" class) instead of a concrete low-level class.',
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Demonstrate DIP",
  },
  // problem--> 95
  {
    id: "class-async-iterator",
    title: "Async Iterators in Classes",
    description:
      "Implement the `[Symbol.asyncIterator]` method for a `PaginatedAPI` class that fetches data page by page.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Async Iterator",
  },
  // problem--> 96
  {
    id: "class-private-brand-check",
    title: "Private Field Brand Checking",
    description:
      'Show how attempting to access a private field on an object that is not an instance of the class results in a TypeError, a "brand check".',
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Test Brand Check",
  },
  // problem--> 97
  {
    id: "class-method-binding-performance",
    title: "Method Binding Performance",
    description:
      "Compare the potential performance implications of defining methods on the prototype versus using arrow function fields in the constructor, especially when creating many instances.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Discuss Performance",
  },
  // problem--> 98
  {
    id: "class-es5-constructor-function",
    title: "ES5 Constructor Functions",
    description:
      "Recreate a simple ES6 class using a pre-ES6 constructor function and `prototype` syntax.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Show ES5 Equivalent",
  },
  // problem--> 99
  {
    id: "class-es5-inheritance",
    title: "ES5 Prototypal Inheritance",
    description:
      "Demonstrate how inheritance was achieved before ES6 using `Object.create()` and setting the prototype chain manually.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Show ES5 Inheritance",
  },
  // problem--> 100
  {
    id: "class-ultimate-challenge-plugin-system",
    title: "Challenge: A Plugin System",
    description:
      "Design and build a robust, class-based plugin system where plugins can be registered and interact with a core application class through a well-defined lifecycle.",
    difficulty: "Advanced",
    category: "Classes and OOP",
    buttonText: "Build Plugin System",
  },
];
