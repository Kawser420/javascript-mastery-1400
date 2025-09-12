export const solvers: Record<string, Function> = {
    'es6-classes': ({ name }: { name: string }) => {
        class Person {
            name: string;
            constructor(name: string) {
                this.name = name;
            }
            greet() {
                return `Hello, my name is ${this.name}.`;
            }
        }
        const p = new Person(name);
        return p.greet();
    },
    'class-inheritance': ({ name, subject }: { name: string, subject: string }) => {
        class Person {
            name: string;
            constructor(name: string) { this.name = name; }
            greet() { return `Hello, my name is ${this.name}.`; }
        }
        class Student extends Person {
            subject: string;
            constructor(name: string, subject: string) {
                super(name);
                this.subject = subject;
            }
            study() { return `${this.name} is studying ${this.subject}.`; }
        }
        const s = new Student(name, subject);
        return `${s.greet()} ${s.study()}`;
    },
    'class-static-methods': () => {
        class MathHelper {
            static add(a: number, b: number) { return a + b; }
        }
        return `Result of static method MathHelper.add(5, 10): ${MathHelper.add(5, 10)}`;
    },
    'class-getters-setters': ({ firstName, lastName }: { firstName: string, lastName: string }) => {
        class Person {
            firstName: string;
            lastName: string;
            constructor(firstName: string, lastName: string) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
            get fullName() { return `${this.firstName} ${this.lastName}`; }
            set fullName(name: string) {
                const parts = name.split(' ');
                this.firstName = parts[0];
                this.lastName = parts[1] || '';
            }
        }
        const p = new Person(firstName, lastName);
        const initialFullName = p.fullName;
        p.fullName = "Jane Smith";
        const newFullName = p.fullName;
        return `Initial: ${initialFullName}. After setting, new name is: ${newFullName}`;
    },
    'class-private-fields': () => {
        class Wallet {
            #balance: number;
            constructor(initialBalance: number) { this.#balance = initialBalance; }
            getBalance() { return `Balance is secret. Current: $${this.#balance}`; }
            // Attempting to access wallet.#balance outside would throw a SyntaxError.
        }
        const myWallet = new Wallet(100);
        return myWallet.getBalance();
    },
    'super-in-constructor': () => {
        class Animal {
            age: number;
            constructor(age: number) { this.age = age; }
        }
        class Dog extends Animal {
            name: string;
            constructor(name: string, age: number) {
                super(age); // Must be called before 'this'
                this.name = name;
            }
        }
        const myDog = new Dog("Buddy", 5);
        return `Dog: ${myDog.name}, Age: ${myDog.age}`;
    },
    'method-overriding': () => {
        class Animal { speak() { return "Some generic animal sound"; } }
        class Cat extends Animal { speak() { return "Meow"; } }
        const myCat = new Cat();
        return myCat.speak();
    },
    'super-in-methods': () => {
        class Person {
            name: string;
            constructor(name: string) { this.name = name; }
            introduce() { return `My name is ${this.name}.`; }
        }
        class Employee extends Person {
            title: string;
            constructor(name: string, title: string) {
                super(name);
                this.title = title;
            }
            introduce() {
                return `${super.introduce()} I am a ${this.title}.`;
            }
        }
        const emp = new Employee("Alice", "Developer");
        return emp.introduce();
    },
    'class-expression': () => {
        const Rectangle = class {
            constructor(height: number, width: number) {
                (this as any).height = height;
                (this as any).width = width;
            }
        };
        const r = new Rectangle(10, 20);
        return `Created rectangle with height ${(r as any).height}`;
    },
    'static-properties': () => {
        class AppConfig { static version = "1.0.2"; }
        return `App Version: ${AppConfig.version}`;
    },
    'instanceof-with-classes': () => {
        class A {}
        class B extends A {}
        const instanceB = new B();
        return `instanceB instanceof B: ${instanceB instanceof B}\ninstanceB instanceof A: ${instanceB instanceof A}`;
    },
    'class-without-constructor': () => {
        class Simple {}
        const s = new Simple();
        return `Instance created: ${s instanceof Simple}. A default constructor was used.`;
    },
    'class-computed-method-names': () => {
        const methodName = "sayHi";
        class Greeter {
            [methodName]() { return "Hello!"; }
        }
        const g = new Greeter();
        return (g as any)[methodName]();
    },
    'class-public-fields': () => {
        class Counter {
            count = 0;
            increment() { this.count++; }
        }
        const c = new Counter();
        c.increment();
        return `Count: ${c.count}`;
    },
    'class-private-methods': () => {
        class Secretive {
            #secretMessage() { return "This is a secret."; }
            reveal() { return this.#secretMessage(); }
        }
        const s = new Secretive();
        return s.reveal();
    },
    'abstract-class-conceptual': () => `(Conceptual) Simulate an abstract class by throwing an error in its constructor if instantiated directly: \`if (new.target === Shape) { throw new Error("Cannot instantiate abstract class"); }\``,
    'polymorphism-example': () => {
        class Shape { draw() { return "drawing a shape"; } }
        class Circle extends Shape { draw() { return "drawing a circle"; } }
        class Square extends Shape { draw() { return "drawing a square"; } }
        const shapes = [new Circle(), new Square()];
        return shapes.map(s => s.draw()).join('; ');
    },
    'chaining-class-methods': () => {
        class Calculator {
            value = 0;
            add(num: number) { this.value += num; return this; }
            subtract(num: number) { this.value -= num; return this; }
        }
        const calc = new Calculator();
        const result = calc.add(10).subtract(3).add(5).value;
        return `Result of chaining: ${result}`;
    },
    'extends-built-in-array': () => {
        class MyArray extends Array {
            first() { return this[0]; }
        }
        const arr = MyArray.from([1, 2, 3]);
        // FIX: Add type assertion to resolve TypeScript inference issue.
        return (arr as unknown as { first: () => number }).first();
    },
    'class-mixins-conceptual': () => `(Conceptual) A mixin is a function that takes a class and adds new methods to its prototype, then returns the class. This allows combining functionalities.`,
    'class-this-lexical-arrow': () => `(Conceptual) A method defined as \`handleClick = () => { console.log(this.name) }\` will always have 'this' bound to the instance, even when passed as a callback.`,
    'class-static-init-block': () => {
        let externalData: any;
        class WithStaticBlock {
            static data: any;
            static {
                externalData = { value: "Initialized!" };
                this.data = externalData.value;
            }
        }
        return `Data from static block: ${WithStaticBlock.data}`;
    },
    'class-error-subclass': () => {
        class ValidationError extends Error {
            constructor(message: string) {
                super(message);
                this.name = "ValidationError";
            }
        }
        try {
            throw new ValidationError("Invalid email.");
        } catch (e: any) {
            return `Caught error of type: ${e.name} with message: "${e.message}"`;
        }
    },
    'class-factory-pattern': ({ type }: { type: string }) => {
        class Dog { speak() { return "Woof"; } }
        class Cat { speak() { return "Meow"; } }
        function AnimalFactory(type: string) {
            if (type === 'dog') return new Dog();
            if (type === 'cat') return new Cat();
            return null;
        }
        const animal = AnimalFactory(type);
        return `The ${type} says: ${animal?.speak() || 'Unknown'}`;
    },
    'class-singleton-pattern': () => {
        class DatabaseConnection {
            private static instance: DatabaseConnection;
            private constructor() {}
            public static getInstance(): DatabaseConnection {
                if (!DatabaseConnection.instance) {
                    DatabaseConnection.instance = new DatabaseConnection();
                }
                return DatabaseConnection.instance;
            }
        }
        const db1 = DatabaseConnection.getInstance();
        const db2 = DatabaseConnection.getInstance();
        return `Are both instances the same? ${db1 === db2}`;
    },
    'class-composition-vs-inheritance': () => `(Conceptual) Inheritance: 'A Tesla IS-A Car'. Composition: 'A Car HAS-A Engine'. Composition is often more flexible for building complex objects.`,
    'class-method-binding': () => `(Conceptual) In a constructor: \`this.handleClick = this.handleClick.bind(this);\`. This ensures 'this' is correct when handleClick is used as an event listener.`,
    'class-private-static-fields': () => {
        class ApiConfig {
            static #apiKey = "SECRET123";
            static getApiKey() { return this.#apiKey; }
        }
        return `Accessed via static method: ${ApiConfig.getApiKey()}`;
    },
    'class-private-static-methods': () => {
        class Validator {
            static #isEmail(str: string) { return str.includes('@'); }
            static validate(value: string) {
                return this.#isEmail(value) ? "Valid" : "Invalid";
            }
        }
        return `Validation result: ${Validator.validate("test@example.com")}`;
    },
    'class-static-getters-setters': () => {
        class Theme {
            static #currentTheme = "dark";
            static get current() { return this.#currentTheme; }
            static set current(theme: string) { this.#currentTheme = theme; }
        }
        Theme.current = "light";
        return `Current theme: ${Theme.current}`;
    },
    'class-iterable-protocol': () => {
        class MyRange {
            from: number; to: number;
            constructor(from: number, to: number) { this.from = from; this.to = to; }
            [Symbol.iterator]() {
                let current = this.from;
                const last = this.to;
                return {
                    next: () => ({
                        done: current > last,
                        value: current++
                    })
                };
            }
        }
        const range = new MyRange(1, 3);
        const result = [];
        for (const num of range) { result.push(num); }
        return `Iterated values: ${result.join(', ')}`;
    },
    'class-generator-method': () => {
        class WordGenerator {
            word: string;
            constructor(word: string) { this.word = word; }
            * [Symbol.iterator]() {
                for (const char of this.word) { yield char; }
            }
        }
        const gen = new WordGenerator("Hi");
        return `Spread result: ${[...gen].join('')}`;
    },
    'class-species-pattern': () => `(Conceptual) A subclass of Array can override 'Symbol.species' to make methods like .map() return a plain Array instance instead of a subclass instance, which can be useful.`,
    'class-tostring-tag': () => {
        class MyCustomClass {
            get [Symbol.toStringTag]() {
                return 'Custom';
            }
        }
        const instance = new MyCustomClass();
        return Object.prototype.toString.call(instance); // [object Custom]
    },
    'class-protected-properties-conceptual': () => `(Conceptual) A property like \`_internalValue\` signals to other developers that it's for internal use and shouldn't be modified directly from outside the class.`,
    'class-final-method-conceptual': () => `(Conceptual) A pattern to prevent overriding is to check in the parent constructor: \`if (this.myMethod !== MyClass.prototype.myMethod) { throw new Error(...) }\``,
    'class-interface-conceptual': () => `(Conceptual) In a base class constructor, check if required methods are implemented on the subclass: \`if (typeof this.render !== 'function') { throw new Error(...) }\``,
    'class-dependency-injection': () => {
        class Logger { log(msg: string) { return `LOG: ${msg}`; } }
        class App {
            logger: Logger;
            constructor(logger: Logger) { this.logger = logger; }
            run() { return this.logger.log("App running"); }
        }
        const myLogger = new Logger();
        const myApp = new App(myLogger);
        return myApp.run();
    },
    'class-command-pattern': () => `(Conceptual) Create Command classes (e.g., LightOnCommand) that encapsulate a request. A client can hold a command and execute it without knowing the receiver (the Light).`,
    'class-observer-pattern': () => `(Conceptual) A 'Subject' class has methods to add/remove 'Observer' objects. When the subject's state changes, it calls an 'update' method on all its observers.`,
    'class-decorator-pattern': () => `(Conceptual) Create a 'BoldText' decorator class that takes a 'SimpleText' object in its constructor. The decorator's methods add functionality (like adding <b> tags) before calling the original object's methods.`,
    'class-adapter-pattern': () => `(Conceptual) Create an Adapter class that wraps an object with an old, incompatible interface (e.g., \`oldRequest()\`) and exposes a new, standard interface (e.g., \`request()\`).`,
    'class-facade-pattern': () => `(Conceptual) A 'HomeTheaterFacade' class provides simple methods like \`watchMovie()\`, which internally calls complex methods on subsystem classes (Amplifier, DVDPlayer, Projector).`,
    'class-proxy-pattern': () => `(Conceptual) A Proxy class can add functionality like caching or access control. When a method is called on the proxy, it first checks a cache before deciding whether to call the method on the real, expensive object.`,
    'class-builder-pattern': () => `(Conceptual) A 'PizzaBuilder' class has methods like \`.addCheese()\`, \`.addPepperoni()\`, and a final \`.build()\` method that returns the complex Pizza object.`,
    'class-flyweight-pattern': () => `(Conceptual) To render thousands of trees in a game, a factory creates a single 'TreeModel' (the flyweight with intrinsic state like mesh/texture) and many 'Tree' objects that only store extrinsic state (position).`,
    'class-mediator-pattern': () => `(Conceptual) A 'Chatroom' (Mediator) class handles messages between 'User' (Colleague) objects. Users send messages to the Chatroom, not directly to each other, reducing direct dependencies.`,
    'class-memento-pattern': () => `(Conceptual) A text 'Editor' (Originator) can create a 'Snapshot' (Memento) of its current text. A 'History' (Caretaker) object stores these snapshots, and the Editor can restore its state from a snapshot.`,
    'class-visitor-pattern': () => `(Conceptual) Use the Visitor design pattern to represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.`,
};