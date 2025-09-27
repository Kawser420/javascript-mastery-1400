const parseNumber = (input: any): number => {
  const num = Number(input);
  if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
  return num;
};
const parseNumArray = (input: string): number[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => parseNumber(item.trim()));
};
const parseStrArray = (input: string): string[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => item.trim());
};
const parseJson = (input: string): any => {
  try {
    return JSON.parse(input);
  } catch (e) {
    throw new Error("Invalid JSON/Array/Object format.");
  }
};
// async demos
const delay = (ms: number, value?: any, shouldReject = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (shouldReject ? reject(value) : resolve(value)), ms)
  );

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "es6-declare-with-let": () => {
    let x = "outer";
    if (true) {
      let x = "inner";
    }
    return `The outer x is still: '${x}'`;
  },
  // problem solver--> 02
  "es6-declare-with-const": () => {
    const y = 10;
    try {
      // This line would throw an error, so we simulate it
      throw new TypeError("Assignment to constant variable.");
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 03
  "es6-const-object-mutation": () => {
    const person = { name: "Alice" };
    person.name = "Bob";
    return `The object's name is now: ${person.name}`;
  },
  // problem solver--> 04
  "es6-arrow-function-basic": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const double = (val: number) => val * 2;
    return double(n);
  },
  // problem solver--> 05
  "es6-arrow-function-implicit-return": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const square = (val: number) => val * val;
    return square(n);
  },
  // problem solver--> 06
  "es6-template-literals-basic": ({ name }: { name: string }) => {
    return `Hello, ${name}!`;
  },
  // problem solver--> 07
  "es6-template-literals-multiline": () => {
    const multiline = `This is
a multiline
string.`;
    return multiline;
  },
  // problem solver--> 08
  "es6-default-parameters": ({ name }: { name: string }) => {
    const greet = (userName = "Guest") => `Hello, ${userName}!`;
    return greet(name || undefined);
  },
  // problem solver--> 09
  "es6-spread-operator-arrays-concat": () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const combined = [...arr1, ...arr2];
    return `[${combined.join(", ")}]`;
  },
  // problem solver--> 10
  "es6-spread-operator-objects-merge": () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const combined = { ...obj1, ...obj2 };
    return JSON.stringify(combined);
  },
  // problem solver--> 11
  "es6-rest-parameters-sum": ({ numbers }: { numbers: string }) => {
    const nums = parseNumArray(numbers);
    const sum = (...args: number[]) =>
      args.reduce((total, current) => total + current, 0);
    return sum(...nums);
  },
  // problem solver--> 12
  "es6-destructuring-arrays-basic": () => {
    const [a, b] = [10, 20];
    return `a=${a}, b=${b}`;
  },
  // problem solver--> 13
  "es6-destructuring-objects-basic": () => {
    const { name, age } = { name: "Bob", age: 40 };
    return `name=${name}, age=${age}`;
  },
  // problem solver--> 14
  "es6-destructuring-swap-variables": () => {
    let a = 1,
      b = 2;
    [a, b] = [b, a];
    return `After swap: a=${a}, b=${b}`;
  },
  // problem solver--> 15
  "es6-destructuring-object-alias": () => {
    const { name: userName } = { name: "David" };
    return `The new variable name is userName: "${userName}"`;
  },
  // problem solver--> 16
  "es6-destructuring-object-defaults": () => {
    const { name, role = "guest" } = { name: "Eve" };
    return `Name: ${name}, Role: ${role}`;
  },
  // problem solver--> 17
  "es6-for-of-loop-array": ({ items }: { items: string }) => {
    const arr = parseStrArray(items);
    let result = "";
    for (const item of arr) {
      result += item.toUpperCase() + " ";
    }
    return result.trim();
  },
  // problem solver--> 18
  "es6-for-of-string": ({ str }: { str: string }) => {
    let result = "";
    for (const char of str) {
      result += char + "-";
    }
    return result.slice(0, -1);
  },
  // problem solver--> 19
  "es6-shorthand-properties": () => {
    const name = "Alice";
    const age = 25;
    const user = { name, age };
    return JSON.stringify(user);
  },
  // problem solver--> 20
  "es6-computed-property-names": () => {
    const propName = "dynamicKey";
    const obj = { [propName]: "Hello World" };
    return JSON.stringify(obj);
  },
  // problem solver--> 21
  "es6-lexical-this-arrow-function": () => {
    // This is conceptual as we can't reliably test setTimeout timing here
    return `(Conceptual) A class method like \`this.handleClick = () => { console.log(this) }\` creates a function with 'this' permanently bound to the instance, which is great for event handlers.`;
  },
  // problem solver--> 22
  "es6-class-declaration": () => {
    class Person {
      constructor(public name: string) {}
    }
    const p = new Person("Liam");
    return `Created an instance of Person. Name: ${p.name}`;
  },
  // problem solver--> 23
  "es6-class-method": () => {
    class Person {
      constructor(public name: string) {}
      greet() {
        return `Hi, ${this.name}`;
      }
    }
    const p = new Person("Mallory");
    return p.greet();
  },
  // problem solver--> 24
  "es6-class-inheritance": () => {
    class Person {}
    class Employee extends Person {}
    const emp = new Employee();
    return `emp instanceof Person: ${emp instanceof Person}`;
  },
  // problem solver--> 25
  "es6-class-super": () => {
    class Person {
      constructor(public name: string) {}
    }
    class Employee extends Person {
      constructor(name: string, public title: string) {
        super(name);
      }
    }
    const emp = new Employee("Nancy", "Developer");
    return `Employee name: ${emp.name}, Title: ${emp.title}`;
  },
  // problem solver--> 26
  "es6-promise-creation": async () => {
    const p = new Promise((resolve) =>
      setTimeout(() => resolve("Success!"), 200)
    );
    return await p;
  },
  // problem solver--> 27
  "es6-promise-rejection": async () => {
    try {
      const p = new Promise((_, reject) =>
        setTimeout(() => reject("Failure!"), 200)
      );
      await p;
    } catch (e) {
      return `Caught rejection: ${e}`;
    }
    return `This should not be reached.`;
  },
  // problem solver--> 28
  "es6-promise-chaining": async () => {
    return Promise.resolve(10)
      .then((val) => val * 2)
      .then((val) => val + 5);
  },
  // problem solver--> 29
  "es6-promise-all": async () => {
    const results = await Promise.all([delay(100, "A"), delay(200, "B")]);
    return `Results: [${results.join(", ")}]`;
  },
  // problem solver--> 30
  "es6-map-data-structure": () => {
    const myMap = new Map();
    myMap.set("key", "value");
    return `Map has key 'key': ${myMap.has("key")}, value is: ${myMap.get(
      "key"
    )}`;
  },
  // problem solver--> 31
  "es6-set-data-structure": () => {
    const mySet = new Set();
    mySet.add(1);
    mySet.add(5);
    mySet.delete(1);
    return `Set has 5: ${mySet.has(5)}, Set size: ${mySet.size}`;
  },
  // problem solver--> 32
  "es6-set-remove-duplicates": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    return `[${[...new Set(array)].join(", ")}]`;
  },
  // problem solver--> 33
  "es6-modules-conceptual": () =>
    `(Conceptual) Modules use \`export\` to expose code and \`import\` to use it in other files, creating private scope by default.`,
  // problem solver--> 34
  "es6-symbol-primitive-type": () => {
    // @ts-ignore
    let SymbolPolyfill = (globalThis.Symbol ||
      function (description) {
        return (
          "@@" +
          (description ? description + "_" : "") +
          Math.random().toString(36).substring(2)
        );
      }) as any;
    const sym1 = SymbolPolyfill("desc");
    const sym2 = SymbolPolyfill("desc");
    return (
      "sym1 === sym2 is " + (sym1 === sym2) + ". Symbols are always unique."
    );
  },

  // problem solver--> 35
  "es6-iterator-protocol-conceptual": () =>
    `(Conceptual) An iterator is an object with a \`.next()\` method that returns an object with \`value\` and \`done\` properties.`,
  // problem solver--> 36
  "es6-generator-function": () => {
    function* numberGenerator() {
      yield 1;
      yield 2;
    }
    const gen = numberGenerator();
    return `Results: ${gen.next().value}, ${gen.next().value}`;
  },
  // problem solver--> 37
  "es6-array-from": () => {
    const arr = Array.from("hello");
    return `['${arr.join("', '")}']`;
  },
  // problem solver--> 38
  "es6-array-find": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return nums.find((n) => n > 10) ?? "Not found";
  },
  // problem solver--> 39
  "es6-array-findIndex": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return nums.findIndex((n) => n > 10);
  },
  // problem solver--> 40
  "es6-string-includes": ({
    mainStr,
    subStr,
  }: {
    mainStr: string;
    subStr: string;
  }) => mainStr.includes(subStr),
  // problem solver--> 41
  "es6-string-startsWith": ({ str, subStr }: { str: string; subStr: string }) =>
    str.startsWith(subStr),
  // problem solver--> 42
  "es6-string-endsWith": ({ str, subStr }: { str: string; subStr: string }) =>
    str.endsWith(subStr),
  // problem solver--> 43
  "es6-string-repeat": ({ str, count }: { str: string; count: any }) =>
    str.repeat(parseNumber(count)),
  // problem solver--> 44
  "es6-object-assign": () => {
    const target = { a: 1 };
    const source = { b: 2, c: 3 };
    Object.assign(target, source);
    return JSON.stringify(target);
  },
  // problem solver--> 45
  "es6-number-isinteger": ({ val }: { val: string }) => {
    const value = parseNumber(val);
    return `Is ${value} an integer? ${Number.isInteger(value)}`;
  },
  // problem solver--> 46
  "es6-number-isnan": () => {
    const str = "hello";
    return `Number.isNaN('${str}') is ${Number.isNaN(
      str as any
    )}. isNaN('${str}') is ${isNaN(str as any)}.`;
  },
  // problem solver--> 47
  "es6-exponentiation-operator": ({
    base,
    exponent,
  }: {
    base: any;
    exponent: any;
  }) => parseNumber(base) ** parseNumber(exponent),
  // problem solver--> 48
  "es6-array-includes": ({ arr, value }: { arr: string; value: string }) =>
    parseStrArray(arr).includes(value),
  // problem solver--> 49
  "es6-named-export-conceptual": () =>
    `(Conceptual) In \`utils.js\`: \`export const PI = 3.14;\` In \`main.js\`: \`import { PI } from './utils.js';\``,
  // problem solver--> 50
  "es6-default-export-conceptual": () =>
    `(Conceptual) In \`MyClass.js\`: \`export default class MyClass {}\` In \`main.js\`: \`import MyClass from './MyClass.js';\``,
  // problem solver--> 51
  "es6-temporal-dead-zone": () =>
    `(Conceptual) \`console.log(myLet); let myLet = 5;\` WILL throw a ReferenceError. 'let' variables are hoisted but cannot be accessed before their declaration (TDZ).`,
  // problem solver--> 52
  "es6-arrow-function-no-arguments": () =>
    `(Conceptual) A traditional function has an 'arguments' object. An arrow function does not. To get all arguments in an arrow function, you must use rest parameters: \`(...args) => { ... }\`.`,
  // problem solver--> 53
  "es6-destructuring-nested": () => {
    const {
      user: { name },
    } = { user: { name: "Frank" } };
    return `Extracted name: ${name}`;
  },
  // problem solver--> 54
  "es6-destructuring-function-parameters": () => {
    const greet = ({ name, role = "user" }: { name: string; role?: string }) =>
      `Hello ${name}, the ${role}.`;
    return greet({ name: "Grace" });
  },
  // problem solver--> 55
  "es6-rest-and-spread-difference": () =>
    `(Conceptual) Spread expands an array: \`[...[1,2]] -> 1, 2\`. Rest collects into an array: \`fn(1,2) where fn(...rest) -> rest = [1,2]\`.`,
  // problem solver--> 56
  "es6-class-static-method": () => {
    class MyClass {
      static createId() {
        return 123;
      }
    }
    return `MyClass.createId(): ${MyClass.createId()}`;
  },
  // problem solver--> 57
  "es6-class-getters-setters": () => {
    class Person {
      constructor(public firstName: string, public lastName: string) {}
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
      set fullName(value: string) {
        [this.firstName, this.lastName] = value.split(" ");
      }
    }
    const p = new Person("Olivia", "Pope");
    p.fullName = "John Doe";
    return p.fullName;
  },
  // problem solver--> 58
  "es6-promise-resolve-static": async ({ value }: { value: string }) =>
    await Promise.resolve(value),
  // problem solver--> 59
  "es6-promise-reject-static": async ({ reason }: { reason: string }) => {
    try {
      await Promise.reject(reason);
    } catch (e) {
      return `Caught: ${e}`;
    }
    return "This should not be reached.";
  },
  // problem solver--> 60
  "es6-promise-race": async () =>
    await Promise.race([delay(200, "Too slow"), delay(100, "First!")]),
  // problem solver--> 61
  "es6-map-vs-object": () =>
    `(Conceptual) Maps can use any value (even objects) as keys, maintain insertion order, and have a simple \`.size\` property. Objects are limited to string/symbol keys.`,
  // problem solver--> 62
  "es6-map-iteration": () => {
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    let result = "";
    for (const [key, value] of map) {
      result += `${key}=${value} `;
    }
    return result.trim();
  },
  // problem solver--> 63
  "es6-set-from-array": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    const mySet = new Set(array);
    return `Set size: ${mySet.size}`;
  },
  // problem solver--> 64
  "es6-symbol-for": () =>
    `Symbol.for('a') === Symbol.for('a') is ${
      Symbol.for("a") === Symbol.for("a")
    }`,
  // problem solver--> 65
  "es6-symbol-as-property-key": () => {
    const id = Symbol("id");
    const obj = { [id]: 123 };
    return `obj[id] is ${obj[id]}. Object.keys doesn't see it.`;
  },
  // problem solver--> 66
  "es6-iterable-protocol-conceptual": () =>
    `(Conceptual) An object is iterable if it has a \`[Symbol.iterator]\` method that returns an iterator. An iterator has a \`.next()\` method returning \`{value, done}\`.`,
  // problem solver--> 67
  "es6-custom-iterator": () => {
    const range = {
      from: 1,
      to: 3,
      [Symbol.iterator]: function* () {
        for (let v = this.from; v <= this.to; v++) yield v;
      },
    };
    return `Spread result: ${[...range]}`;
  },
  // problem solver--> 68
  "es6-generator-iterator": () => {
    function* gen() {
      yield "a";
      yield "b";
    }
    const g = gen();
    const first = g.next();
    const second = g.next();
    return `First value: ${first.value}, Second done: ${second.done}`;
  },
  // problem solver--> 69
  "es6-generator-infinite-sequence": () => {
    function* naturalNumbers() {
      let n = 0;
      while (true) yield n++;
    }
    const gen = naturalNumbers();
    return `First 3 numbers: ${gen.next().value}, ${gen.next().value}, ${
      gen.next().value
    }`;
  },
  // problem solver--> 70
  "es6-array-from-with-map": () => {
    const arr = Array.from({ length: 5 }, (v, i) => i * i);
    return `[${arr.join(", ")}]`;
  },
  // problem solver--> 71
  "es6-array-of": () =>
    `Array.of(7) -> [${Array.of(7).join("")}]. new Array(7) -> [${new Array(
      7
    ).join("")}] (length 7, empty slots)`,
  // problem solver--> 72
  "es6-object-is": () =>
    `Object.is(NaN, NaN) is ${Object.is(
      NaN,
      NaN
    )}. Object.is(0, -0) is ${Object.is(0, -0)}.`,
  // problem solver--> 73
  "es7-array-includes": () => {
    const arr = [1, 2, NaN];
    return `arr.includes(2): ${arr.includes(
      2
    )}. arr.includes(NaN): ${arr.includes(NaN)}.`;
  },
  // problem solver--> 74
  "es7-exponentiation-operator": ({ base, exp }: { base: any; exp: any }) =>
    parseNumber(base) ** parseNumber(exp),
  // problem solver--> 75
  "es8-async-await": async () => {
    async function fetchTodo() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        return `Fetched: "${data.title}"`;
      } catch (e) {
        return "Fetch failed.";
      }
    }
    return await fetchTodo();
  },
  // problem solver--> 76
  "es8-object-values": () => JSON.stringify(Object.values({ a: 1, b: 2 })),
  // problem solver--> 77
  "es8-object-entries": () => JSON.stringify(Object.entries({ a: 1, b: 2 })),
  // problem solver--> 78
  "es8-string-padding": () =>
    `'5'.padStart(4, '0') -> "${"5".padStart(
      4,
      "0"
    )}". 'hi'.padEnd(5, '.') -> "${"hi".padEnd(5, ".")}"`,
  // problem solver--> 79
  "es8-object-getownpropertydescriptors": () =>
    JSON.stringify(Object.getOwnPropertyDescriptors({ a: 1 })),
  // problem solver--> 80
  "es9-async-iteration": () =>
    `(Conceptual) An async iterable has a \`[Symbol.asyncIterator]\` method. It is consumed by a \`for-await...of\` loop, which awaits each promise returned by the iterator's \`.next()\` method.`,
  // problem solver--> 81
  "es9-promise-finally": async () => {
    let status = "pending";
    await delay(100, "OK").finally(() => {
      status = "settled";
    });
    return `Final status: ${status}`;
  },
  // problem solver--> 82
  "es9-rest-properties": () => {
    const { id, ...rest } = { id: 1, name: "Product", price: 99 };
    return `Rest: ${JSON.stringify(rest)}`;
  },
  // problem solver--> 83
  "es9-spread-properties": () => {
    const obj1 = { a: 1 };
    const obj2 = { ...obj1, b: 2 };
    return JSON.stringify(obj2);
  },
  // problem solver--> 84
  "es9-regexp-lookbehind-assertion": () => {
    const match = "$100".match(/(?<=\$)\d+/);
    return `Match found: ${match ? match[0] : "none"}`;
  },
  // problem solver--> 85
  "es9-regexp-named-capture-groups": () => {
    const match = "2024-07-26".match(/(?<year>\d{4})-(?<month>\d{2})/);
    return JSON.stringify(match?.groups);
  },
  // problem solver--> 86
  "es10-array-flat": ({ arr }: { arr: string }) => {
    const array = parseJson(arr);
    return JSON.stringify(array.flat(Infinity));
  },
  // problem solver--> 87
  "es10-array-flatmap": () => {
    const arr = [1, 2, 3];
    const result = arr.flatMap((x) => [x, x * 2]);
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 88
  "es10-string-trimstart-trimend": () => {
    const str = "   hello   ";
    return `trimStart: "${str.trimStart()}", trimEnd: "${str.trimEnd()}"`;
  },
  // problem solver--> 89
  "es10-object-fromentries": () => {
    const entries = [
      ["a", 1],
      ["b", 2],
    ];
    return JSON.stringify(Object.fromEntries(entries));
  },
  // problem solver--> 90
  "es10-optional-catch-binding": () => {
    let handled = false;
    try {
      throw new Error();
    } catch {
      handled = true;
    }
    return `Error was handled: ${handled}`;
  },
  // problem solver--> 91
  "es11-bigint": () =>
    `(9007199254740991n + 2n).toString() -> "${(
      9007199254740991n + 2n
    ).toString()}"`,
  // problem solver--> 92
  "es11-dynamic-import": () =>
    `(Conceptual) \`const module = await import('./utils.js');\` allows loading modules on demand, for code splitting.`,
  // problem solver--> 93
  "es11-nullish-coalescing": () =>
    `0 || 'default' -> "default". 0 ?? 'default' -> 0.`,
  // problem solver--> 94
  "es11-optional-chaining": () =>
    `const user = { name: 'Bob' }; user.address?.street -> ${
      ({ name: "Bob" } as any).address?.street
    }`,
  // problem solver--> 95
  "es11-promise-allsettled": async () => {
    const results = await Promise.allSettled([
      Promise.resolve("OK"),
      Promise.reject("Fail"),
    ]);
    return JSON.stringify(results.map((r) => ({ status: r.status })));
  },
  // problem solver--> 96
  "es11-globalthis": () =>
    `(Conceptual) \`globalThis\` provides a standard way to access the global object in any environment (e.g., \`window\` in browsers, \`global\` in Node).`,
  // problem solver--> 97
  "es11-string-matchall": () => {
    const matches = Array.from("ab a".matchAll(/a/g));
    return `Found ${matches.length} matches.`;
  },
  // problem solver--> 98
  "es12-logical-assignment-operators": () => {
    let a: number | null = null,
      b = 1,
      c = 0;
    a ??= 5;
    b &&= 2;
    c ||= 3;
    return `a=${a}, b=${b}, c=${c}`;
  },
  // problem solver--> 99
  "es12-string-replaceall": ({ str }: { str: string }) =>
    str.replaceAll("o", "X"),
  // problem solver--> 100
  "es12-promise-any": async () => {
    const result = await (Promise as any).any([
      delay(100, "Fail", true),
      delay(50, "Success!"),
    ]);
    return result;
  },
  // problem solver--> 101
  "es12-numeric-separators": () =>
    `1_000_000 === 1000000 is ${1_000_000 === 1000000}`,
  // problem solver--> 102
  "es12-weakref": () =>
    `(Conceptual) \`new WeakRef(obj)\` creates a weak reference. To access it, you call \`.deref()\`. If the object has been garbage collected, \`.deref()\` returns undefined.`,
  // problem solver--> 103
  "es13-class-fields": () => {
    class MyClass {
      instanceField = "hello";
    }
    return new MyClass().instanceField;
  },
  // problem solver--> 104
  "es13-private-methods-and-fields": () => {
    class MyClass {
      #privateField = "secret";
      #privateMethod() {
        return this.#privateField;
      }
      publicMethod() {
        return this.#privateMethod();
      }
    }
    return new MyClass().publicMethod();
  },
  // problem solver--> 105
  "es13-static-class-features": () => {
    class MyClass {
      static #privateStatic = 42;
      static {} // Static block ran
      static getSecret() {
        return this.#privateStatic;
      }
    }
    return `Secret is ${MyClass.getSecret()}`;
  },
  // problem solver--> 106
  "es13-array-at": () => `[1,2,3].at(-1) is ${[1, 2, 3].at(-1)}`,
  // problem solver--> 107
  "es13-regexp-match-indices": () =>
    `(Conceptual) For a regex with the /d flag, the result of \`.exec()\` will have an \`.indices\` property showing the start/end indices of capture groups.`,
  // problem solver--> 108
  "es13-object-hasown": () =>
    `Object.hasOwn({a:1}, 'a') -> ${Object.hasOwn(
      { a: 1 },
      "a"
    )}. Object.hasOwn({}, 'toString') -> ${Object.hasOwn({}, "toString")}`,
  // problem solver--> 109
  "es13-error-cause": () => {
    try {
      throw new Error("High-level", { cause: new Error("Low-level") });
    } catch (e: any) {
      return `Caught: ${e.message}. Cause: ${e.cause.message}`;
    }
  },
  // problem solver--> 110
  "es13-top-level-await": () =>
    `(Conceptual) In an ES module, you can write \`const data = await fetch(url);\` at the top level, without an \`async\` function.`,
  // problem solver--> 111
  "es14-array-findlast": () => {
    const arr = [1, 2, 3, 4];
    let result = undefined;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] % 2 === 0) {
        result = arr[i];
        break;
      }
    }
    return `[1,2,3,4].findLast(n => n % 2 === 0) is ${result}`;
  },

  // problem solver--> 112
  "es14-array-findlastindex": () => {
    const arr = [1, 2, 3, 4];
    let result = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] % 2 === 0) {
        result = i;
        break;
      }
    }
    return `[1,2,3,4].findLastIndex(n => n % 2 === 0) is ${result}`;
  },
  // problem solver--> 113
  "es14-array-immutable-methods": () =>
    `(Conceptual) \`.toSorted()\`, \`.toReversed()\`, \`.toSpliced()\`, and \`.with()\` are new immutable array methods that return a new array instead of modifying the original.`,
  // problem solver--> 114
  "es14-hashbang-grammar": () =>
    `(Conceptual) A JS file starting with \`#!/usr/bin/env node\` can be executed directly from a Unix-like shell. The engine now formally supports ignoring this line.`,
  // problem solver--> 115
  "es14-symbols-as-weakmap-keys": () =>
    `(Conceptual) Unique (non-registered) Symbols can now be used as keys in \`WeakMap\` and \`WeakSet\`, allowing them to be garbage collected.`,
  // problem solver--> 116
  "es15-promise-withresolvables": async () => {
    const { promise, resolve } = (Promise as any).withResolvables();
    setTimeout(() => resolve("Resolved!"), 100);
    return await promise;
  },
  // problem solver--> 117
  "es6-proxy-basic": () => {
    const target = {};
    const handler = {
      set(obj: any, prop: any, value: any) {
        if (typeof value !== "number") throw new TypeError("Must be a number.");
        obj[prop] = value;
        return true;
      },
    };
    return `(Conceptual) A proxy with a 'set' trap can validate data before assignment.`;
  },
  // problem solver--> 118
  "es6-proxy-get-trap": () => {
    const target = { a: 1 };
    const handler = {
      get(obj: any, prop: any) {
        return prop in obj ? obj[prop] : "default";
      },
    };
    const proxy = new Proxy(target, handler);
    return `proxy.b is '${proxy.b}'`;
  },
  // problem solver--> 119
  "es6-reflect-api": () =>
    `(Conceptual) \`Reflect\` is a built-in object whose methods (e.g., \`Reflect.get\`) correspond to proxy traps and provide the default behavior for those operations.`,
  // problem solver--> 120
  "es6-generator-for-custom-iteration": () => {
    class Range {
      constructor(public start: number, public end: number) {}
      *[Symbol.iterator]() {
        for (let i = this.start; i <= this.end; i++) yield i;
      }
    }
    return [...new Range(1, 4)].join("");
  },
  // problem solver--> 121
  "es6-tagged-template-literals": () => {
    const highlight = (strings: TemplateStringsArray, ...values: any[]) =>
      strings.reduce(
        (acc, str, i) =>
          `${acc}${str}${values[i] ? `<mark>${values[i]}</mark>` : ""}`,
        ""
      );
    const name = "ES6";
    return highlight`Hello, ${name}!`;
  },
  // problem solver--> 122
  "es6-well-known-symbols": () =>
    `(Conceptual) Symbols like \`Symbol.iterator\` and \`Symbol.toStringTag\` are "well-known" because they provide hooks into built-in language algorithms.`,
  // problem solver--> 123
  "es6-tail-call-optimization-conceptual": () =>
    `(Conceptual) TCO allows a recursive function whose last action is a call to itself to run without growing the call stack. Not widely supported in JS engines.`,
  // problem solver--> 124
  "es6-binary-and-octal-literals": () =>
    `Binary 0b101 is ${0b101}. Octal 0o10 is ${0o10}.`,
  // problem solver--> 125
  "es6-unicode-code-point-escapes": () =>
    `The character for U+1F60A is "\u{1F60A}".`,
  // problem solver--> 126
  "es6-subclassing-builtins": () => {
    class MyArray extends Array {
      last() {
        return this[this.length - 1];
      }
    }
    const arr = new (MyArray as any)(1, 2, 3);
    return `Last item is: ${arr.last()}`;
  },
  // problem solver--> 127
  "es6-new-target-conceptual": () =>
    `(Conceptual) Inside a constructor, \`if (!new.target) throw 'Must be called with new';\` ensures it's not called as a regular function.`,
  // problem solver--> 128
  "es6-map-with-object-keys": () => {
    const map = new Map();
    const key1 = {};
    map.set(key1, "value");
    return `map.get(key1) -> ${map.get(key1)}`;
  },
  // problem solver--> 129
  "es6-weakmap-for-private-data": () =>
    `(Conceptual) A classic pattern for privacy before # fields. A \`WeakMap\` stores private data with object instances as keys, preventing memory leaks.`,
  // problem solver--> 130
  "es6-weakset-for-object-tracking": () =>
    `(Conceptual) A \`WeakSet\` can store a collection of objects. If an object is garbage collected, it's automatically removed from the set, preventing memory leaks.`,
  // problem solver--> 131
  "es9-regexp-s-flag": () => {
    const regex = /hello.world/s;
    return `Matches newline: ${regex.test("hello\nworld")}`;
  },
  // problem solver--> 132
  "es9-regexp-unicode-property-escapes": () => {
    const regex = /^\p{Emoji}+$/u;
    return `Is '👍' an emoji? ${regex.test("👍")}`;
  },
  // problem solver--> 133
  "es10-function-tostring-revision": () => {
    function /* a comment */ add(a: number, b: number) {
      return a + b;
    }
    return add.toString();
  },
  // problem solver--> 134
  "es10-symbol-description": () => {
    const sym = Symbol("my description");
    return sym.description;
  },
  // problem solver--> 135
  "es12-finalization-registry": () =>
    `(Conceptual) An API to register callbacks that are triggered after an object has been garbage collected. Used for external resource cleanup.`,
  // problem solver--> 136
  "es14-array-tospliced": () => {
    const original = [1, 2, 5];
    const updated = (original as any).toSpliced(2, 0, 3, 4);
    return `Original: [${original.join(",")}]. Updated: [${updated.join(",")}]`;
  },
  // problem solver--> 137
  "es6-destructuring-and-rest-in-arrays": () => {
    const [first, ...rest] = [1, 2, 3, 4];
    return `First: ${first}, Rest: [${rest.join(", ")}]`;
  },
  // problem solver--> 138
  "es6-destructuring-and-defaults-in-arrays": () => {
    const [a = 1, b = 2] = [10];
    return `a=${a} (from array), b=${b} (from default)`;
  },
  // problem solver--> 139
  "es6-let-vs-var-in-loops": () =>
    `(Conceptual) 'var' in a loop with setTimeout logs the final value. 'let' creates a new binding for each iteration, logging the correct values.`,
  // problem solver--> 140
  "es6-spread-to-copy-array": () => {
    const original = [{ a: 1 }];
    const copy = [...original];
    copy[0].a = 99;
    return `Original was mutated because it's a shallow copy. original[0].a is now ${original[0].a}.`;
  },
  // problem solver--> 141
  "es6-map-object-keys": () => {
    const map = new Map();
    const key1 = { id: 1 };
    map.set(key1, "value1");
    return `map.get(key1) -> ${map.get(key1)}`;
  },
  // problem solver--> 142
  "es6-promise-unwrapping": async () => {
    const result = await Promise.resolve().then(() =>
      delay(50, "Inner resolved")
    );
    return result;
  },
  // problem solver--> 143
  "es6-super-method-call": () => {
    class Parent {
      greet() {
        return "Hello";
      }
    }
    class Child extends Parent {
      greet() {
        return `${super.greet()} World`;
      }
    }
    return new Child().greet();
  },
  // problem solver--> 144
  "es6-generator-with-return": () => {
    function* gen() {
      yield 1;
      return 2;
    }
    const g = gen();
    g.next();
    const final = g.next();
    return `Final result: { value: ${final.value}, done: ${final.done} }`;
  },
  // problem solver--> 145
  "es8-async-await-error-handling": async () => {
    try {
      await delay(50, "Oops", true);
    } catch (e) {
      return `Caught: ${e}`;
    }
  },
  // problem solver--> 146
  "es8-shared-array-buffer-conceptual": () =>
    `(Conceptual) A raw binary data buffer that can be shared between the main thread and web workers, enabling high-performance parallel data processing.`,
  // problem solver--> 147
  "es8-atomics-conceptual": () =>
    `(Conceptual) A global object providing atomic operations (e.g., Atomics.add, Atomics.load) on SharedArrayBuffer to prevent race conditions without locking.`,
  // problem solver--> 148
  "es11-optional-chaining-with-methods": () =>
    `const user = {}; user.getName?.() -> ${({} as any).getName?.()}`,
  // problem solver--> 149
  "es12-string-replaceall-with-regex": ({ str }: { str: string }) =>
    str.replaceAll(/apple/g, "fruit"),
  // problem solver--> 150
  "es13-private-brand-check": () => {
    class MyClass {
      #brand;
      static isMyClass(obj: any) {
        return #brand in obj;
      }
    }
    return `Is true instance? ${MyClass.isMyClass(
      new MyClass()
    )}. Is plain object? ${MyClass.isMyClass({})}`;
  },
  // problem solver--> 151
  "es6-destructuring-for-of-loop": () => {
    const pairs = [
      [1, "a"],
      [2, "b"],
    ];
    let result = "";
    for (const [num, char] of pairs) {
      result += `${num}:${char} `;
    }
    return result.trim();
  },
  // problem solver--> 152
  "es6-map-chaining": () => {
    const map = new Map();
    map.set("a", 1).set("b", 2);
    return `Map size: ${map.size}`;
  },
  // problem solver--> 153
  "es6-generator-yield-delegation": () => {
    function* gen1() {
      yield 2;
      yield 3;
    }
    function* gen2() {
      yield 1;
      yield* gen1();
    }
    return `Results: ${[...gen2()]}`;
  },
  // problem solver--> 154
  "es8-async-sequential-vs-parallel": async () => {
    const startS = performance.now();
    await delay(50);
    await delay(50);
    const endS = performance.now();
    const startP = performance.now();
    await Promise.all([delay(50), delay(50)]);
    const endP = performance.now();
    return `Sequential: ~${Math.round(
      endS - startS
    )}ms. Parallel: ~${Math.round(endP - startP)}ms.`;
  },
  // problem solver--> 155
  "es9-promise-finally-rejection": async () => {
    let status = "pending";
    try {
      await Promise.reject().finally(() => {
        status = "ran finally";
      });
    } catch (e) {
      /* ignored */
    }
    return `Status after rejection: ${status}`;
  },
  // problem solver--> 156
  "es10-object-fromentries-map": () => {
    const map = new Map([["a", 1]]);
    return JSON.stringify(Object.fromEntries(map));
  },
  // problem solver--> 157
  "es11-optional-chaining-with-arrays": () =>
    `const user = {}; user.posts?.[0] -> ${({} as any).posts?.[0]}`,
  // problem solver--> 158
  "es12-promise-any-rejection": async () => {
    try {
      await (Promise as any).any([
        delay(50, "E1", true),
        delay(100, "E2", true),
      ]);
    } catch (e: any) {
      return `Caught AggregateError with ${e.errors.length} errors.`;
    }
  },
  // problem solver--> 159
  "es13-class-static-private-methods": () => {
    class C {
      static #secret() {
        return 42;
      }
      static get() {
        return this.#secret();
      }
    }
    return C.get();
  },
  // problem solver--> 160
  "es14-array-with": () => {
    const original = [1, 2, 3];
    const updated = (original as any).with(1, 99);
    return `Original: [${original.join(",")}]. Updated: [${updated.join(",")}]`;
  },
  // problem solver--> 161
  "es6-immutable-update-pattern": () => {
    const state = { count: 0 };
    const newState = { ...state, count: 1 };
    return `New state count: ${newState.count}, Original: ${state.count}`;
  },
  // problem solver--> 162
  "es6-map-foreach": () => {
    const map = new Map([["a", 1]]);
    let result = "";
    map.forEach((value, key) => {
      result += `${key}=${value}`;
    });
    return result;
  },
  // problem solver--> 163
  "es6-set-to-array-spread": () => `[${[...new Set([1, 2, 2])].join(",")}]`,
  // problem solver--> 164
  "es6-generator-yield-expression": () => {
    function* gen() {
      const x = yield 1;
      return x;
    }
    const g = gen();
    g.next();
    return `Final value: ${g.next(100).value}`;
  },
  // problem solver--> 165
  "es8-async-await-in-map-pitfall": () =>
    `(Conceptual) \`[1,2].map(async id => ...)\` returns an array of Promises: \`[Promise, Promise]\`. You must wrap it in \`Promise.all()\` to wait for them all.`,
  // problem solver--> 166
  "es9-regexp-lookbehind-negative": ({ text }: { text: string }) => {
    const regex = /(?<!€)\d+/g;
    return JSON.stringify(text.match(regex));
  },
  // problem solver--> 167
  "es10-flat-with-infinity": () => JSON.stringify([1, [2, [3]]].flat(Infinity)),
  // problem solver--> 168
  "es11-bigint-comparisons": () =>
    `10n == 10 is ${10n == (10 as any)}. 10n === 10 is ${10n === (10 as any)}.`,
  // problem solver--> 169
  "es12-logical-nullish-assignment": () => {
    let x: number | null = null;
    x ??= 10;
    return `x is ${x}`;
  },
  // problem solver--> 170
  "es13-class-static-private-fields": () => {
    class C {
      static #secret = 42;
      static get() {
        return this.#secret;
      }
    }
    return C.get();
  },
  // problem solver--> 171
  "es14-array-toreversed": () => `[${[...[1, 2, 3]].reverse().join(",")}]`,
  // problem solver--> 172
  "es6-template-literal-tag-function": () =>
    `(Conceptual) A function can be "tagged" to a template literal to receive the raw string parts and interpolated values, allowing for custom processing like sanitization or localization.`,
  // problem solver--> 173
  "es6-promise-race-rejection": async () => {
    try {
      await Promise.race([delay(100, "slow"), delay(50, "fast error", true)]);
    } catch (e) {
      return `Caught: ${e}`;
    }
  },
  // problem solver--> 174
  "es6-class-field-arrow-function": () =>
    `(Conceptual) \`class C { myMethod = () => this; }\` creates a method where 'this' is always the instance, solving callback context issues.`,
  // problem solver--> 175
  "es8-async-await-in-loops": async () => {
    let r = "";
    for (const i of [1, 2]) {
      await delay(20);
      r += i;
    }
    return r;
  },
  // problem solver--> 176
  "es9-regexp-dotall-flag": () =>
    `Is 'hello\\nworld' matched by /hello.world/s? ${/hello.world/s.test(
      "hello\nworld"
    )}`,
  // problem solver--> 177
  "es10-string-trim-start-end": ({ text }: { text: string }) =>
    `Start: "${text.trimStart()}", End: "${text.trimEnd()}"`,
  // problem solver--> 178
  "es11-promise-allsettled-rejection": async () => {
    const r = await Promise.allSettled([Promise.reject("fail")]);
    return r[0].status;
  },
  // problem solver--> 179
  "es12-weakref-conceptual": () =>
    `(Conceptual) \`new WeakRef(obj)\` creates a weak reference. To access it, you call \`.deref()\`. If the object has been garbage collected, \`.deref()\` returns undefined.`,
  // problem solver--> 180
  "es13-string-at-method": ({ text }: { text: string }) => text.at(-1),
  // problem solver--> 181
  "es14-array-tosorted": () =>
    `[${[...[3, 1, 2]].sort((a, b) => a - b).join(",")}]`,
  // problem solver--> 182
  "es6-destructuring-array-with-rest": () => {
    const [a, ...b] = [1, 2, 3];
    return `a=${a}, b=[${b.join(",")}]`;
  },
  // problem solver--> 183
  "es6-proxy-get-handler": () =>
    `(Conceptual) A proxy with a 'get' trap intercepts property reads. \`get(target, prop) { ... }\``,
  // problem solver--> 184
  "es6-proxy-set-handler": () =>
    `(Conceptual) A proxy with a 'set' trap intercepts property writes. \`set(target, prop, value) { ... }\``,
  // problem solver--> 185
  "es8-async-await-parallel": async () => {
    const r = await Promise.all([delay(50), delay(50)]);
    return `Finished in ~50ms`;
  },
  // problem solver--> 186
  "es9-regexp-lookahead-assertion": ({ text }: { text: string }) =>
    JSON.stringify(text.match(/Isaac(?= Newton)/)),
  // problem solver--> 187
  "es10-symbol-description-property": () => Symbol("desc").description,
  // problem solver--> 188
  "es11-bigint-constructor": ({ largeNumStr }: { largeNumStr: string }) =>
    BigInt(largeNumStr).toString(),
  // problem solver--> 189
  "es12-logical-and-assignment": () => {
    let x: any = { a: 1 };
    x &&= { b: 2 };
    return JSON.stringify(x);
  },
  // problem solver--> 190
  "es13-class-private-getters-setters": () =>
    `(Conceptual) \`class C { #v; get #p() {} set #p(v) {} }\` defines private accessors.`,
  // problem solver--> 191
  "es14-array-toSpliced-immutable": () => {
    const arr = [1, 5];
    const start = 1;
    const deleteCount = 0;
    const items = [2, 3, 4];
    return `[${arr
      .slice(0, start)
      .concat(items)
      .concat(arr.slice(start + deleteCount))
      .join(",")}]`;
  },
  // problem solver--> 192
  "es6-reflect-get-set": () => {
    const o = { a: 1 };
    Reflect.set(o, "a", 2);
    return Reflect.get(o, "a");
  },
  // problem solver--> 193
  "es8-object-getownpropertydescriptors-clone": () =>
    `(Conceptual) \`Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))\` creates a more accurate shallow clone.`,
  // problem solver--> 194
  "es9-promise-finally-chaining": async () => {
    return await Promise.resolve(1)
      .finally(() => {})
      .then((v) => v + 1);
  },
  // problem solver--> 195
  "es10-flatmap-practical": ({ sentences }: { sentences: string }) =>
    JSON.stringify(sentences.split(";").flatMap((s) => s.split(" "))),
  // problem solver--> 196
  "es11-matchall-iterator": ({ text }: { text: string }) =>
    [...text.matchAll(/cat/g)].length,
  // problem solver--> 197
  "es12-logical-or-assignment": () => {
    let x: any = 0;
    x ||= 10;
    return x;
  },
  // problem solver--> 198
  "es13-error-cause-chaining": () =>
    `(Conceptual) try...catch can inspect e.cause to trace back a chain of errors.`,
  // problem solver--> 199
  "es14-array-immutable-methods-all": () =>
    `(Conceptual) Chaining immutable methods like \`arr.toSorted().with(0, 99).toReversed()\` allows for safe, predictable transformations.`,
  // problem solver--> 200
  "es-future-decorators-conceptual": () =>
    `(Conceptual) Decorators are functions prefixed with \`@\` that modify classes or members, for things like logging or dependency injection. \`@logged class C {}\``,
};
