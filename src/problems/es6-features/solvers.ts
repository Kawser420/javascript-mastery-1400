// HELPER FUNCTIONS
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
    if (/^(\[.*\]|\{.*\})$/.test(input.trim())) {
      return new Function(`return ${input}`)();
    }
    throw new Error();
  } catch (e) {
    throw new Error("Invalid JSON/Object format.");
  }
};

export const solvers: Record<string, Function> = {
  "arrow-function-map": ({ arr }: { arr: string }) =>
    `[${parseNumArray(arr)
      .map((n) => n * 2)
      .join(", ")}]`,
  "template-literals": ({ name, item }: { name: string; item: string }) =>
    `Hello, ${name}!\nHere are your ${item}.`,
  "array-destructuring": ({ arr }: { arr: string }) => {
    const [a, b, c] = parseStrArray(arr);
    return `a=${a}, b=${b}, c=${c}`;
  },
  "object-destructuring": ({ json }: { json: string }) => {
    const { name, age } = parseJson(json);
    return `Name: ${name}, Age: ${age}`;
  },
  "rest-parameters": ({ args }: { args: string }) => {
    const sum = (...nums: number[]) => nums.reduce((acc, val) => acc + val, 0);
    return sum(...parseNumArray(args));
  },
  "spread-operator-arrays": ({ arr1, arr2 }: { arr1: string; arr2: string }) =>
    `[${[...parseStrArray(arr1), ...parseStrArray(arr2)].join(", ")}]`,
  "let-const-scope": () =>
    `(Conceptual) 'var' is function-scoped. 'let' and 'const' are block-scoped (scoped to the nearest {}), preventing bugs from variable leakage in loops and if-statements.`,
  "default-parameters-es6": ({ name }: { name: string }) => {
    const greet = (userName = "Guest") => `Hello, ${userName}!`;
    return greet(name || undefined);
  },
  "for-of-loop": ({ arr }: { arr: string }) => {
    let result = "";
    for (const item of parseStrArray(arr)) {
      result += item + " ";
    }
    return result.trim();
  },
  "spread-operator-objects": ({ obj1, obj2 }: { obj1: string; obj2: string }) =>
    JSON.stringify({ ...parseJson(obj1), ...parseJson(obj2) }),
  "promise-basics": () =>
    `(Conceptual) A new Promise((resolve, reject) => setTimeout(() => resolve('Success!'), 500)) will resolve with 'Success!' after 500ms. Use .then() to get the value.`,
  "async-await-basics": () =>
    `(Conceptual) async function myFunc() { const result = await somePromise; console.log(result); } makes asynchronous code look synchronous and is easier to read.`,
  "es6-map-data-structure": () => {
    const map = new Map();
    const keyObject = {};
    map.set("key1", "value1");
    map.set(keyObject, "obj value");
    return `map.get('key1'): ${map.get("key1")}, map.has(keyObject): ${map.has(
      keyObject
    )}`;
  },
  "es6-set-data-structure": ({ arr }: { arr: string }) => {
    const mySet = new Set(parseStrArray(arr));
    mySet.add("d");
    return `Unique values: ${[...mySet].join(", ")}. Set has 'c': ${mySet.has(
      "c"
    )}`;
  },
  "symbol-data-type-es6": () => {
    const id = Symbol("id");
    const obj = { name: "test", [id]: 123 };
    return `Object keys: ${Object.keys(
      obj
    )}. Symbol key is hidden. Access with symbol: ${obj[id]}`;
  },
  "destructuring-with-aliases": () => {
    const obj = { n: "John", a: 30 };
    const { n: name, a: age } = obj;
    return `Name: ${name}, Age: ${age}`;
  },
  "destructuring-with-defaults": () => {
    const obj = { name: "John" };
    const { name, role = "user" } = obj;
    return `Name: ${name}, Role: ${role}`;
  },
  "array-destructuring-skip": ({ arr }: { arr: string }) => {
    const [first, , third] = parseStrArray(arr);
    return `First: ${first}, Third: ${third}`;
  },
  "array-destructuring-rest": ({ arr }: { arr: string }) => {
    const [first, ...rest] = parseNumArray(arr);
    return `First: ${first}, Rest: [${rest.join(", ")}]`;
  },
  "promise-catch": () =>
    `(Conceptual) new Promise((res, rej) => rej('Error!')).catch(err => console.log('Caught:', err)); This prevents unhandled promise rejection errors.`,
  "promise-finally": () =>
    `(Conceptual) A .finally(() => console.log('Done')) block runs whether the promise resolves or rejects. Useful for cleanup.`,
  "promise-all": () =>
    `(Conceptual) Promise.all([p1, p2]) waits for both to resolve. If one rejects, Promise.all rejects immediately.`,
  "promise-race": () =>
    `(Conceptual) Promise.race([p1, p2]) settles as soon as the first promise settles. It takes on the result/error of that first promise.`,
  "es6-classes-basic": () => {
    class Person {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
      greet() {
        return `Hi, ${this.name}`;
      }
    }
    const p = new Person("Test");
    return p.greet();
  },
  "es6-modules-conceptual": () =>
    `(Conceptual) file1.js: export const myFunc = () => {}; file2.js: import { myFunc } from './file1.js'; myFunc();`,
  "object-property-shorthand": () => {
    const name = "Test",
      age = 99;
    const user = { name, age };
    return JSON.stringify(user);
  },
  "computed-property-names-es6": () => {
    const key = "dynamic_key";
    const obj = { [key]: "value" };
    return JSON.stringify(obj);
  },
  "string-methods-es6": ({ str }: { str: string }) =>
    `startsWith('Hello'): ${str.startsWith(
      "Hello"
    )}, endsWith('world'): ${str.endsWith(
      "world"
    )}, includes('lo w'): ${str.includes("lo w")}`,
  "array-from-es6": ({ str }: { str: string }) =>
    JSON.stringify(Array.from(str)),
  "array-find-es6": ({ arr }: { arr: string }) =>
    `Found: ${parseNumArray(arr).find((n) => n > 10)}`,
  "array-findindex-es6": ({ arr }: { arr: string }) =>
    `Found at index: ${parseNumArray(arr).findIndex((n) => n > 10)}`,
  "number-isinteger-es6": ({ num }: { num: string }) =>
    `Is ${num} an integer? ${Number.isInteger(Number(num))}`,
  "object-is-es6": () =>
    `Object.is(NaN, NaN) is ${Object.is(NaN, NaN)}, but NaN === NaN is ${
      NaN === NaN
    }`,
  "optional-chaining-operator": () => {
    const user: { name: string; address?: { street: string } } = {
      name: "test",
    };
    return `user?.address?.street is: ${user.address?.street}`;
  },
  "nullish-coalescing-operator": () => {
    const val = null;
    return `val ?? 'default' is: ${val ?? "default"}`;
  },
  "promise-allsettled": () =>
    `(Conceptual) Promise.allSettled([p1, p2_rejects]) waits for both to finish and returns an array of result objects: [{status: 'fulfilled', value: ...}, {status: 'rejected', reason: ...}]`,
  "promise-any": () =>
    `(Conceptual) Promise.any([p1_rejects, p2]) resolves with the value of the first promise to fulfill (p2). It only rejects if all promises reject.`,
  "string-matchall": () => {
    const str = "test1test2";
    const regex = /t(e)(st(\d?))/g;
    const matches = [...str.matchAll(regex)];
    return `Found ${matches.length} matches. First match group 1: ${matches[0][1]}`;
  },
  "dynamic-import": () =>
    `(Conceptual) async function load() { const module = await import('./util.js'); module.doSomething(); } Dynamic import returns a promise.`,
  "weakmap-es6": () =>
    `(Conceptual) A WeakMap holds 'weak' references to its object keys. If no other reference to an object key exists, the garbage collector can remove it and its value from the map.`,
  "weakset-es6": () =>
    `(Conceptual) Similar to WeakMap, a WeakSet holds weak references to objects. Useful for checking if an object is in a set without preventing garbage collection.`,
  "iterator-protocol-conceptual": () =>
    `(Conceptual) An object is an iterator if it has a .next() method that returns { value: any, done: boolean }. The 'for...of' loop uses this protocol.`,
  "generator-function": () => {
    function* gen() {
      yield 1;
      yield 2;
    }
    const iterator = gen();
    return `First: ${iterator.next().value}, Second: ${iterator.next().value}`;
  },
  "bigint-es2020": () => {
    const large = 9007199254740991n;
    const result = large + 1n;
    return `Result is a BigInt: ${result}`;
  },
  "globalthis-es2020": () =>
    `(Conceptual) globalThis refers to the global object in any environment. In a browser, globalThis === window. In Node.js, globalThis === global.`,
  "logical-assignment-operators": () => {
    let a: number | null = 1,
      b: number | null = null;
    a &&= 2;
    b ??= 5;
    return `a &&= 2 -> ${a}. b ??= 5 -> ${b}.`;
  },
  "numeric-separators": () => {
    const num = 1_000_000;
    return `1_000_000 is the same as 1000000. Value: ${num}`;
  },
  "array-at-method": ({ arr }: { arr: string }) =>
    `Last element is: ${parseStrArray(arr).at(-1)}`,
  "object-hasown": () => {
    const obj = { prop: 1 };
    return `Object.hasOwn(obj, 'prop'): ${Object.hasOwn(obj, "prop")}`;
  },
  "async-await-error-handling": () =>
    `(Conceptual) async function test() { try { await Promise.reject('Oops'); } catch (e) { console.log('Caught:', e); } } The try...catch block handles promise rejections.`,
  "destructuring-function-params": () => {
    const displayUser = ({ name, age }: { name: string; age: number }) =>
      `User: ${name}, Age: ${age}`;
    return displayUser({ name: "Alice", age: 30 });
  },
  "array-flat": ({ arr }: { arr: string }) => {
    const nested = parseJson(arr);
    return `Default flatten: [${nested
      .flat()
      .join(", ")}]. Deep flatten: [${nested.flat(Infinity).join(", ")}]`;
  },
  "array-flatmap": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const result = nums.flatMap((x) => [x, x * 2]);
    return `[${result.join(", ")}]`;
  },
  "object-fromentries": () => {
    const entries = [
      ["a", 1],
      ["b", 2],
    ];
    const obj = Object.fromEntries(entries);
    return JSON.stringify(obj);
  },
  "string-trimstart-trimend": ({ str }: { str: string }) =>
    `trimStart(): "${str.trimStart()}", trimEnd(): "${str.trimEnd()}"`,
  "symbol-description": () => {
    const mySymbol = Symbol("My Description");
    return mySymbol.description;
  },
  "well-known-symbol-iterator": () => {
    const myIterable = {
      from: 1,
      to: 3,
      *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++) yield i;
      },
    };
    return `[${[...myIterable].join(", ")}]`;
  },
  "generator-yield-delegation-es6": () => {
    function* gen1() {
      yield 1;
      yield 2;
    }
    function* gen2() {
      yield* gen1();
      yield 3;
    }
    return `[${[...gen2()].join(", ")}]`;
  },
  "generator-passing-values": () => {
    function* twoWay() {
      const what = yield "What's your name?";
      yield `Hello, ${what}!`;
    }
    const it = twoWay();
    it.next(); // { value: "What's your name?", done: false }
    return `Final yield: ${it.next("Alice").value}`;
  },
  "proxy-get-trap": () => {
    const target = { a: 1 };
    const proxy = new Proxy(target, {
      get: (obj, prop) => `Accessed prop ${String(prop)}`,
    });
    return proxy.a;
  },
  "proxy-set-trap": () => {
    const target = { age: 0 };
    const proxy = new Proxy(target, {
      set: (obj, prop, value) => {
        if (typeof value !== "number" || prop !== "age") return false;
        (obj as any)[prop] = value;
        return true;
      },
    });
    proxy.age = 30; // works
    try {
      (proxy as any).name = "test";
    } catch (e) {}
    return `Age: ${proxy.age}`;
  },
  "reflect-api-get-set": () => {
    const obj = { a: 1 };
    Reflect.set(obj, "a", 2);
    return `Reflect.get(obj, 'a'): ${Reflect.get(obj, "a")}`;
  },
  "promise-chaining-es6": () =>
    `(Conceptual) Promise.resolve(10).then(v => v * 2).then(v => v + 5) will result in a promise that resolves to 25. Each .then returns a new promise.`,
  "async-generator": () =>
    `(Conceptual) async function* myAsyncGen() { yield await Promise.resolve(1); } creates an async iterator. You'd use a for-await-of loop to consume it.`,
  "for-await-of-loop": () =>
    `(Conceptual) const stream = myAsyncGen(); for await (const value of stream) { console.log(value); } This loop handles async iterators gracefully.`,
  "string-replaceall": ({ str }: { str: string }) =>
    str.replaceAll("cat", "ferret"),
  "private-class-fields": () => {
    class MyClass {
      #private = 42;
      getPrivate() {
        return this.#private;
      }
    }
    return `Private value: ${new MyClass().getPrivate()}`;
  },
  "static-class-fields": () => {
    class MyClass {
      static myStaticField = "hello";
    }
    return MyClass.myStaticField;
  },
  "top-level-await": () =>
    `(Conceptual) In an ES module, you can write \`const data = await fetch(url);\` at the top level, without an enclosing async function. The module will wait for the promise to resolve before executing.`,
  "object-destructuring-rest": () => {
    const { a, ...rest } = { a: 1, b: 2, c: 3 };
    return `a: ${a}, rest: ${JSON.stringify(rest)}`;
  },
  "map-iteration": () => {
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    let result = "";
    for (const [key, value] of map) result += `${key}=${value}; `;
    return result;
  },
  "set-from-array-spread": () => `[...new Set([1,1,2,3,3])] results in [1,2,3]`,
  "tagged-template-literals": () => {
    const highlight = (strings: TemplateStringsArray, ...values: any[]) => {
      let str = "";
      strings.forEach((s, i) => {
        str += s + (values[i] ? `<mark>${values[i]}</mark>` : "");
      });
      return str;
    };
    const name = "Bob";
    return highlight`Hello, ${name}!`;
  },
  "arrow-function-no-this": () =>
    `(Conceptual) In an object method, \`setTimeout(() => console.log(this.prop))\` works because the arrow function inherits 'this' from the method. A regular function would have its 'this' set to the global object.`,
  "destructuring-swapping-vars": () => {
    let a = 1,
      b = 2;
    [a, b] = [b, a];
    return `a=${a}, b=${b}`;
  },
  "string-padstart-padend": () => {
    const str = "5";
    return `padStart: ${str.padStart(3, "0")}, padEnd: ${str.padEnd(3, "x")}`;
  },
  "object-getownpropertydescriptors": () => {
    const obj = { a: 1 };
    return JSON.stringify(Object.getOwnPropertyDescriptors(obj));
  },
  "array-includes-es7": ({ arr }: { arr: string }) =>
    parseStrArray(arr).includes("b"),
  "async-await-parallel": () =>
    `(Conceptual) const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]); This starts both fetches concurrently and waits for both to complete.`,
  "optional-chaining-with-functions": () => {
    const obj = { myFunc: () => "called" };
    const obj2 = {};
    return `obj.myFunc?.(): ${obj.myFunc?.()}, obj2.myFunc?.(): ${(
      obj2 as any
    ).myFunc?.()}`;
  },
  "regexp-lookbehind-assertions": () =>
    `'$100'.match(/(?<=\$)\\d+/)[0] is '100'. The lookbehind (?<=\\$) asserts that the digits are preceded by a '$' without including it in the match.`,
  "regexp-named-capture-groups": () => {
    const match = "2024-01-20".match(/(?<year>\d{4})-(?<month>\d{2})/);
    return `Year: ${match?.groups?.year}`;
  },
  "regexp-s-dotall-flag": () =>
    `'/foo.bar/s.test('foo\\nbar')' is true. The 's' flag makes '.' match newline characters as well.`,
  "promise-finally-use-case": () =>
    `(Conceptual) \`showSpinner(); fetch(url).finally(() => hideSpinner());\` The spinner is always hidden, whether the fetch succeeds or fails.`,
  "well-known-symbol-species": () =>
    `(Conceptual) A subclass of Array can override 'Symbol.species' to make methods like .map() return a plain Array instance instead of a subclass instance.`,
  "well-known-symbol-tostringtag": () => {
    class MyClass {
      get [Symbol.toStringTag]() {
        return "CustomTag";
      }
    }
    return Object.prototype.toString.call(new MyClass());
  },
  "object-destructuring-in-loop": () => {
    const users = [
      { name: "A", age: 1 },
      { name: "B", age: 2 },
    ];
    let result = "";
    for (const { name, age } of users) result += `${name} is ${age}; `;
    return result;
  },
  "set-operations-spread": ({ arr1, arr2 }: { arr1: string; arr2: string }) => {
    const set1 = new Set(parseNumArray(arr1));
    const set2 = new Set(parseNumArray(arr2));
    const union = [...new Set([...set1, ...set2])];
    const intersection = [...set1].filter((x) => set2.has(x));
    return `Union: [${union.join(", ")}], Intersection: [${intersection.join(
      ", "
    )}]`;
  },
  "async-function-as-method": () =>
    `(Conceptual) class MyClass { async getData() { return await fetch(url); } } An instance can then call \`await myInstance.getData();\`.`,
  "destructuring-function-return": () => {
    const getCoords = () => ({ x: 10, y: 20 });
    const { x, y } = getCoords();
    return `x=${x}, y=${y}`;
  },
  "map-to-object": () => {
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    return JSON.stringify(Object.fromEntries(map));
  },
  "object-to-map": ({ json }: { json: string }) => {
    const obj = parseJson(json);
    const map = new Map(Object.entries(obj));
    return `Map has 'b': ${map.has("b")}`;
  },
  "array-copywithin": () =>
    `[1,2,3,4,5].copyWithin(0, 3) results in [4,5,3,4,5]. It copies elements from index 3 to the end, to the position starting at index 0.`,
  "array-fill": () =>
    `new Array(3).fill('a') results in ['a','a','a']. [1,2,3,4].fill(0, 2, 4) results in [1,2,0,0].`,
  "array-findlast": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const value = nums.findLast((n) => n > 25);
    const index = nums.findLastIndex((n) => n > 25);
    return `Last value > 25: ${value}, at index: ${index}`;
  },
  "array-with": () => {
    const arr = [1, 2, 3];
    const newArr = arr.with(1, 99);
    return `Original: [${arr.join(", ")}], New: [${newArr.join(", ")}]`;
  },
  "array-toreversed-tosorted-tospliced": () => {
    const arr = [3, 1, 2];
    const reversed = arr.toReversed();
    return `Original: [${arr.join(", ")}], New Reversed: [${reversed.join(
      ", "
    )}]`;
  },
  "private-in-operator": () => {
    class MyClass {
      #privateField = 1;
      static hasPrivate(obj: MyClass) {
        return #privateField in obj;
      }
    }
    return `Instance has private field: ${MyClass.hasPrivate(new MyClass())}`;
  },
};
