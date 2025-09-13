// HELPER FUNCTIONS
const parseJson = (input: string): any => {
  try {
    if (
      /^(\[.*\]|\{.*\})$/.test(input.trim()) ||
      /^\{.*\}$/.test(input.trim())
    ) {
      // It looks like an array or object, attempt to parse it.
      // Using new Function is a bit safer than direct eval for JSON-like structures.
      return new Function(`return ${input}`)();
    }
    throw new Error("Input is not in a recognizable array or object format.");
  } catch (e) {
    throw new Error(
      "Invalid JSON/Array/Object format. Ensure keys and string values are properly quoted if necessary."
    );
  }
};

let counterState = 0; // For factory-function-private-state

export const solvers: Record<string, Function> = {
  "create-simple-object": () =>
    `Created: ${JSON.stringify({ name: "John Doe", age: 30 })}`,
  "access-object-property-dot": ({ json }: { json: string }) =>
    parseJson(json).title,
  "access-object-property-bracket": ({ key }: { key: string }) => {
    const user = { name: "Jane", age: 25, city: "New York" };
    if (key in user)
      return `Value of '${key}': ${user[key as keyof typeof user]}`;
    return `Property '${key}' not found.`;
  },
  "add-modify-object-property": () => {
    const task: { id: number; title: string; status?: string } = {
      id: 1,
      title: "Learn JS",
    };
    task.status = "in-progress";
    task.status = "completed";
    return `Final status: ${task.status}`;
  },
  "delete-object-property": () => {
    const settings: {
      theme: string;
      isDraft?: boolean;
      notifications: boolean;
    } = { theme: "dark", isDraft: true, notifications: false };
    delete settings.isDraft;
    return `Object after delete: ${JSON.stringify(settings)}`;
  },
  "check-property-existence": () => {
    const user = { name: "Alex" };
    const proto = { country: "USA" };
    Object.setPrototypeOf(user, proto);
    const hasOwn = Object.prototype.hasOwnProperty.call(user, "name");
    const inOp = "country" in user;
    return `'name' is own property: ${hasOwn}\n'country' is in prototype chain: ${inOp}`;
  },
  "get-object-keys": ({ json }: { json: string }) =>
    Object.keys(parseJson(json)).join(", "),
  "get-object-values": ({ json }: { json: string }) =>
    Object.values(parseJson(json)).join(", "),
  "get-object-entries": ({ json }: { json: string }) =>
    JSON.stringify(Object.entries(parseJson(json))),
  "merge-objects-spread": ({
    json1,
    json2,
  }: {
    json1: string;
    json2: string;
  }) => JSON.stringify({ ...parseJson(json1), ...parseJson(json2) }),
  "object-assign": () => {
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3, a: 4 };
    const merged = Object.assign(target, source1, source2);
    return `Result: ${JSON.stringify(
      merged
    )}\nTarget was mutated: ${JSON.stringify(target)}`;
  },
  "this-in-method": () => {
    const person = {
      name: "Alice",
      greet: function () {
        return `Hello, ${this.name}!`;
      },
    };
    return person.greet();
  },
  "object-destructuring-basic": () => {
    const userObj = { name: "Bob", age: 42, role: "admin" };
    const { name, age } = userObj;
    return `Name: ${name}, Age: ${age}`;
  },
  "nested-object-access": () => {
    const user = {
      id: 1,
      info: { name: "Charlie", address: { street: "123 Main St" } },
    };
    return user.info.address.street;
  },
  "nested-object-destructuring": () => {
    const fullUser = {
      id: 1,
      info: { name: "David", address: { city: "London" } },
    };
    const {
      info: {
        address: { city },
      },
    } = fullUser;
    return `City: ${city}`;
  },
  "loop-object-for-in": () => {
    const obj = { a: 1, b: 2, c: 3 };
    let result = "";
    for (const key in obj) {
      result += `${key}: ${obj[key as keyof typeof obj]}; `;
    }
    return result.trim();
  },
  "object-freeze": () => {
    const obj = { prop: "value" };
    Object.freeze(obj);
    try {
      (obj as any).prop = "new value";
      (obj as any).newProp = 123;
    } catch (e) {}
    return `Attempted modification. Result: ${JSON.stringify(obj)}. Unchanged.`;
  },
  "object-seal": () => {
    const obj: { prop: string; newProp?: number } = { prop: "value" };
    Object.seal(obj);
    try {
      obj.prop = "new value";
      obj.newProp = 123;
    } catch (e) {}
    return `Modified prop, but could not add new prop. Result: ${JSON.stringify(
      obj
    )}`;
  },
  "constructor-function": () => {
    function Car(this: any, make: string, model: string) {
      this.make = make;
      this.model = model;
    }
    const myCar = new (Car as any)("Toyota", "Corolla");
    return `Created a ${myCar.make} ${myCar.model}`;
  },
  "prototype-property": () => {
    function Car(this: any, make: string, model: string) {
      this.make = make;
      this.model = model;
    }
    Car.prototype.drive = function () {
      return `The ${this.make} is driving.`;
    };
    const myCar = new (Car as any)("Ford", "Focus");
    return myCar.drive();
  },
  "prototypal-inheritance": () => {
    function Car(this: any, make: string) {
      this.make = make;
    }
    Car.prototype.drive = function () {
      return `The ${this.make} is driving.`;
    };
    function ElectricCar(this: any, make: string, battery: number) {
      Car.call(this, make);
      this.battery = battery;
    }
    ElectricCar.prototype = Object.create(Car.prototype);
    ElectricCar.prototype.constructor = ElectricCar;
    const myTesla = new (ElectricCar as any)("Tesla", 100);
    return `${myTesla.drive()} Battery: ${myTesla.battery}kWh.`;
  },
  "object-create": () => {
    const vehiclePrototype = {
      drive() {
        return "Moving...";
      },
    };
    const car = Object.create(vehiclePrototype);
    return `Car can drive: ${car.drive()}`;
  },
  "proto-vs-prototype": () =>
    `(Conceptual) 'prototype' is a property on a constructor function (the blueprint). '__proto__' is an internal property on an object instance that points to its blueprint.`,
  "instanceof-operator": () => {
    function Dog() {}
    const buddy = new (Dog as any)();
    return `Is buddy an instance of Dog? ${buddy instanceof Dog}`;
  },
  "object-is": () =>
    `Object.is(NaN, NaN): ${Object.is(NaN, NaN)}\nNaN === NaN: ${false}`,
  "optional-chaining": () =>
    `Street: ${
      ({ name: "Eve" } as any)?.address?.street
    }. No error was thrown.`,
  "nullish-coalescing-object": () =>
    `Effective theme: ${({ theme: null } as any).theme ?? "light"}`,
  "shorthand-property-names": () => {
    const name = "Frank",
      age = 50;
    return JSON.stringify({ name, age });
  },
  "computed-property-names": () => {
    const propName = "role";
    return JSON.stringify({ name: "Grace", [propName]: "editor" });
  },
  "getter-syntax": () => {
    const person = {
      firstName: "John",
      lastName: "Smith",
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
    };
    return person.fullName;
  },
  "setter-syntax": ({ fullName }: { fullName: string }) => {
    const person = {
      firstName: "John",
      lastName: "Smith",
      set fullName(name: string) {
        [this.firstName, this.lastName] = name.split(" ");
      },
    };
    person.fullName = fullName;
    return `First: ${person.firstName}, Last: ${person.lastName}`;
  },
  "object-from-entries": () =>
    JSON.stringify(
      Object.fromEntries([
        ["a", 1],
        ["b", 2],
      ])
    ),
  "json-stringify": () =>
    JSON.stringify({ id: 1, name: "A book", inStock: true }, null, 2),
  "json-parse": ({ json }: { json: string }) =>
    `Parsed object. Name is: ${JSON.parse(json).name}`,
  "json-stringify-replacer": () =>
    JSON.stringify(
      { id: 123, name: "Heidi", password: "secret" },
      ["id", "name"],
      2
    ),
  "shallow-copy": () => {
    const original = { a: 1, b: { c: 2 } };
    const copy = { ...original };
    copy.b.c = 200;
    return `Original: ${JSON.stringify(
      original
    )}. The nested object was mutated.`;
  },
  "deep-copy-json": () => {
    const original = { a: 1, b: { c: 2 } };
    const copy = JSON.parse(JSON.stringify(original));
    copy.b.c = 200;
    return `Original: ${JSON.stringify(original)}. The original is unaffected.`;
  },
  "this-with-bind": () => {
    const user = {
      name: "Ivy",
      getName: function () {
        return this.name;
      },
    };
    const boundGetName = user.getName.bind(user);
    return `Bound call is: ${boundGetName()}`;
  },
  "check-empty-object": ({ json }: { json: string }) =>
    Object.keys(parseJson(json)).length === 0,
  "invert-key-value": ({ json }: { json: string }) =>
    JSON.stringify(
      Object.fromEntries(
        Object.entries(parseJson(json)).map(([key, value]) => [value, key])
      )
    ),
  "property-descriptors": () =>
    JSON.stringify(Object.getOwnPropertyDescriptor({ a: 1 }, "a"), null, 2),
  "object-define-property": () => {
    const obj = {};
    Object.defineProperty(obj, "readOnly", { value: 10, writable: false });
    try {
      (obj as any).readOnly = 20;
    } catch (e) {}
    return `Value is still: ${(obj as any).readOnly}. It's not writable.`;
  },
  "enumerable-properties": () => {
    const obj = { a: 1 };
    Object.defineProperty(obj, "b", { value: 2, enumerable: false });
    return `Object.keys(obj) returns: [${Object.keys(obj).join(", ")}]`;
  },
  "object-prevent-extensions": () => {
    const obj: { a: number; b?: number } = { a: 1 };
    Object.preventExtensions(obj);
    try {
      obj.b = 2;
    } catch (e) {}
    return `Attempted to add 'b'. Result: ${JSON.stringify(obj)}`;
  },
  "compare-objects": ({ json1, json2 }: { json1: string; json2: string }) => {
    const obj1 = parseJson(json1);
    const obj2 = parseJson(json2);
    const keys1 = Object.keys(obj1);
    if (keys1.length !== Object.keys(obj2).length) return false;
    for (const key of keys1) {
      if (
        !Object.prototype.hasOwnProperty.call(obj2, key) ||
        obj1[key] !== obj2[key]
      )
        return false;
    }
    return true;
  },
  "map-vs-object": () =>
    `(Conceptual) Map allows any key type and preserves order. Object keys are strings/symbols and order is not always guaranteed (pre-ES2015).`,
  "object-get-prototype-of": () => {
    function Animal() {}
    const leo = new (Animal as any)();
    return `leo's prototype is Animal.prototype: ${
      Object.getPrototypeOf(leo) === Animal.prototype
    }`;
  },
  "object-set-prototype-of": () => {
    const dog = {};
    const animal = { speak: () => "Animal sound" };
    Object.setPrototypeOf(dog, animal);
    return (dog as any).speak();
  },
  "factory-function": () => {
    const createUser = (name: string, age: number) => ({
      name,
      age,
      greet() {
        return `Hi, I'm ${this.name}`;
      },
    });
    const user = createUser("Jack", 28);
    return user.greet();
  },
  "prototype-chain-conceptual": () =>
    `(Conceptual) When you access \`obj.prop\`, JS checks \`obj\`. If not found, it checks \`obj.__proto__\`, then \`obj.__proto__.__proto__\`, and so on, up to \`Object.prototype\`.`,
  "this-lost-context": () => {
    const person = {
      name: "Jill",
      greet() {
        return this.name;
      },
    };
    const standaloneGreet = person.greet;
    try {
      return `Calling standalone function fails in strict mode. Bound: ${person.greet.bind(
        person
      )()}`;
    } catch (e) {
      return `standaloneGreet() threw error. Bound call works: ${person.greet.bind(
        person
      )()}`;
    }
  },
  "object-create-null": () => {
    const dict = Object.create(null);
    dict.key = "value";
    return `Object has no prototype. dict.toString is: ${dict.toString}`;
  },
  "method-shorthand": () => {
    const obj = {
      greet() {
        return "Hello!";
      },
    };
    return obj.greet();
  },
  "destructuring-with-aliases-defaults": () => {
    const { a: alpha = "default", b: beta } = { b: 2 };
    return `alpha: ${alpha}, beta: ${beta}`;
  },
  "json-tojson-method": () => {
    const obj = {
      a: 1,
      toJSON() {
        return { b: this.a * 2 };
      },
    };
    return JSON.stringify(obj);
  },
  "object-isextensible": () =>
    `Object.isExtensible({}): ${Object.isExtensible(
      {}
    )}. Object.isExtensible(Object.preventExtensions({})): ${Object.isExtensible(
      Object.preventExtensions({})
    )}`,
  "object-isfrozen": () =>
    `Object.isFrozen(Object.freeze({})): ${Object.isFrozen(Object.freeze({}))}`,
  "object-issealed": () =>
    `Object.isSealed(Object.seal({})): ${Object.isSealed(Object.seal({}))}`,
  "this-arrow-function-method-pitfall": () =>
    `(Conceptual) \`const obj = { myMethod: () => this }\`. Here, \`this\` is NOT the object, but the surrounding scope.`,
  "object-constructor": () => {
    const obj = new Object();
    (obj as any).a = 1;
    return JSON.stringify(obj);
  },
  "object-tostring": () => {
    return `[1, 2].toString(): ${[
      1, 2,
    ].toString()}. Object.prototype.toString.call([1,2]): ${Object.prototype.toString.call(
      [1, 2]
    )}`;
  },
  "deep-copy-structuredclone": () => {
    const original = { a: 1, b: new Date() };
    const copy = structuredClone(original);
    copy.a = 100;
    return `Original is unchanged: ${
      original.a === 1
    }. Copy has a different Date object: ${original.b !== copy.b}`;
  },
  "dynamic-property-access": ({ obj, prop }: { obj: string; prop: string }) =>
    parseJson(obj)[prop],
  "constructor-property": () => {
    function MyClass() {}
    const instance = new (MyClass as any)();
    return `instance.constructor.name is '${instance.constructor.name}'`;
  },
  "factory-function-private-state": () => {
    const createCounter = () => {
      let count = 0;
      return {
        inc: () => ++count,
        get: () => count,
      };
    };
    const counter = createCounter();
    counter.inc();
    return `Counter value is: ${counter.get()}`;
  },
  "prototype-pollution-conceptual": () =>
    `(Conceptual) Malicious code like \`Object.prototype.isAdmin = true;\` could make every object in the application appear to be an admin, a serious security risk.`,
  "object-defineproperties": () => {
    const obj = {};
    Object.defineProperties(obj, {
      a: { value: 1, writable: true },
      b: { value: 2, writable: false },
    });
    return JSON.stringify(obj);
  },
  "mixin-pattern": () => {
    const canFly = {
      fly() {
        return "Flying!";
      },
    };
    const bird = { name: "Sparrow" };
    Object.assign(bird, canFly);
    return (bird as any).fly();
  },
  "inheritance-vs-composition": () =>
    `(Conceptual) Inheritance (IS-A): \`class Dog extends Animal\`. Composition (HAS-A): \`class Car { constructor() { this.engine = new Engine(); } }\`. Composition is often more flexible.`,
  "object-reference-vs-value": () => {
    const obj1 = { a: 1 };
    const obj2 = obj1;
    obj2.a = 2;
    return `obj1.a is now ${obj1.a}, because obj2 is a reference, not a copy.`;
  },
  "prototype-chain-length": () => {
    function A() {}
    function B(this: any) {}
    B.prototype = new (A as any)();
    const instance = new (B as any)(); // Chain: instance -> B.prototype -> A.prototype -> Object.prototype -> null
    let count = 0;
    let p = instance;
    while (Object.getPrototypeOf(p)) {
      p = Object.getPrototypeOf(p);
      count++;
    }
    return `Chain length is ${count}`;
  },
  "es5-class-pattern": () =>
    `(Conceptual) In ES5: A constructor function \`function Car(){}\` plus methods on the prototype \`Car.prototype.drive = function(){}\`. ES6 \`class\` is syntactic sugar over this.`,
  "object-key-ordering": () => {
    const obj = { b: 1, "10": 2, a: 3, "1": 4 };
    return `Object.keys(obj): [${Object.keys(obj).join(
      ", "
    )}] (integer keys first, then others in insertion order).`;
  },
  "deep-object-access-optional-chaining": () => {
    const user = { profile: {} };
    return `User's street: ${(user.profile as any)?.address?.street}`;
  },
  "object-property-iteration-methods": () =>
    `(Conceptual) \`for...in\` iterates own and inherited enumerable properties. \`Object.keys/values/entries\` iterate only own enumerable properties.`,
  "shadowing-prototype-property": () => {
    const proto = { value: "proto" };
    const instance = Object.create(proto);
    instance.value = "instance";
    return `instance.value: ${instance.value}, proto.value: ${proto.value}`;
  },
  "delete-from-prototype": () => {
    function MyClass() {}
    MyClass.prototype.prop = 1;
    const inst = new (MyClass as any)();
    delete inst.prop; // does nothing
    const val1 = inst.prop;
    delete (MyClass.prototype as any).prop;
    return `After deleting inst.prop, value is ${val1}. After deleting from prototype, value is ${inst.prop}.`;
  },
  "constructor-return-value": () => {
    function MyClass() {
      return { a: 1 };
    } // Explicitly returns an object
    const instance = new (MyClass as any)();
    return `Instance is the returned object: ${JSON.stringify(instance)}`;
  },
  "object-destructuring-rest": () => {
    const { a, ...rest } = { a: 1, b: 2, c: 3 };
    return `a: ${a}, rest: ${JSON.stringify(rest)}`;
  },
  "object-getownpropertysymbols": () => {
    const sym1 = Symbol("s1");
    const obj = { a: 1, [sym1]: 2 };
    return `Symbol property key description: ${
      Object.getOwnPropertySymbols(obj)[0].description
    }`;
  },
  "this-in-arrow-function-in-method": () => {
    const obj = {
      name: "MyObj",
      process() {
        const inner = () => `Inner 'this' is: ${this.name}`;
        return inner();
      },
    };
    return obj.process();
  },
  "object-hasown-polyfill-conceptual": () =>
    `(Conceptual) \`Object.hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);\`. Using .call prevents errors if an object has a property named 'hasOwnProperty'.`,
  "object-property-with-spaces": () => {
    const obj = { "my property": "value" };
    return obj["my property"];
  },
  "object-as-hash-map": ({ str }: { str: string }) => {
    const counts: Record<string, number> = {};
    for (const char of str) {
      counts[char] = (counts[char] || 0) + 1;
    }
    return JSON.stringify(counts);
  },
  "proxy-vs-es5-getters": () =>
    `(Conceptual) Getters are defined per-property. A Proxy's 'get' trap can intercept access to *all* properties, including ones that don't exist yet. Proxies are more powerful and general.`,
  "prototype-chain-limit": () =>
    `The prototype of Object.prototype is: ${Object.getPrototypeOf(
      Object.prototype
    )}`,
  "object-isprototypeof": () => {
    function A() {}
    const instance = new (A as any)();
    return `A.prototype.isPrototypeOf(instance): ${A.prototype.isPrototypeOf(
      instance
    )}`;
  },
  "json-stringify-space": () => JSON.stringify({ a: 1, b: 2 }, null, 2),
  "object-destructuring-dynamic-key": () => {
    const myKey = "prop2";
    const targetObj = { prop1: "a", prop2: "b" };
    const { [myKey]: value } = targetObj;
    return `Value of prop2 is: ${value}`;
  },
  "deep-freeze-object-recursive": () =>
    `(Conceptual) A function that takes an object, freezes it, then iterates its keys. If a property is an object, it recursively calls itself on that property.`,
};
