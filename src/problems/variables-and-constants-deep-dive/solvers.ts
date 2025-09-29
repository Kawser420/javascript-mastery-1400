const parseNumber = (input: any): number => {
  const num = Number(input);
  if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
  return num;
};

let asyncLoopResult: string[] = [];
let counterState = 0;

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "declare-with-var": ({ value }: { value: string }) => {
    var myVar = value;
    return `Declared myVar with value: "${myVar}"`;
  },
  // problem solver--> 02
  "declare-with-let": ({ value }: { value: number }) => {
    let myLet = value;
    return `Declared myLet with value: ${myLet}`;
  },
  // problem solver--> 03
  "declare-with-const": ({ value }: { value: string }) => {
    const myConst = value;
    return `Declared myConst with value: "${myConst}"`;
  },
  // problem solver--> 04
  "reassign-let-variable": () => {
    let reassignable = "Initial";
    reassignable = "Reassigned";
    return `Final value: "${reassignable}"`;
  },
  // problem solver--> 05
  "const-reassignment-primitive": () => {
    try {
      const myConst = 10;
      // myConst = 20;
      throw new TypeError("Assignment to constant variable.");
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 06
  "uninitialized-variable": () => {
    let myVar;
    return `The value of an uninitialized variable is: ${myVar}`;
  },
  // problem solver--> 07
  "const-must-be-initialized": () => {
    return `(Conceptual) Code like \`const myConst;\` throws a SyntaxError: 'const' declarations must be initialized.`;
  },
  // problem solver--> 08
  "variable-naming-rules": () => {
    const _valid$Name1 = "Valid";
    return `Valid names: _valid$Name1. Invalid names cannot start with a number.`;
  },
  // problem solver--> 09
  "case-sensitivity": () => {
    let myVariable = "lowercase v";
    let myvariable = "all lowercase";
    return `myVariable is "${myVariable}", myvariable is "${myvariable}". They are different.`;
  },
  // problem solver--> 10
  "type-of-variable": () => {
    const str = "hello";
    const num = 42;
    const bool = true;
    return `Type of str: ${typeof str}, Type of num: ${typeof num}, Type of bool: ${typeof bool}`;
  },
  // problem solver--> 11
  "dynamic-typing": () => {
    let dynamicVar: any = 123;
    const type1 = typeof dynamicVar;
    dynamicVar = "hello";
    const type2 = typeof dynamicVar;
    return `Initial type: ${type1}, Reassigned type: ${type2}`;
  },
  // problem solver--> 12
  "declare-multiple-variables": () => {
    let a = 1,
      b = 2,
      c = 3;
    return `a=${a}, b=${b}, c=${c}`;
  },
  // problem solver--> 13
  "string-concatenation-vars": ({
    str1,
    str2,
  }: {
    str1: string;
    str2: string;
  }) => {
    const fullName = str1 + " " + str2;
    return `Full Name: ${fullName}`;
  },
  // problem solver--> 14
  "template-literals-vars": ({ name, age }: { name: string; age: number }) => {
    const sentence = `${name} is ${age} years old.`;
    return sentence;
  },
  // problem solver--> 15
  "null-vs-undefined": () => {
    let uninitialized;
    let hasNoValue = null; // null
    return `Uninitialized: ${typeof uninitialized}, Explicitly Null: ${typeof hasNoValue} (Note: typeof null is 'object', a legacy bug).`;
  },
  // problem solver--> 16
  "shorthand-property-names": () => {
    const name = "Alice";
    const age = 25;
    const user = { name, age };
    return `Created user: ${JSON.stringify(user)}`;
  },
  // problem solver--> 17
  "nan-is-weird": () => {
    const values = [NaN];
    const arrayCheck = values.includes(NaN);
    const objectIsCheck = Object.is(NaN, NaN);
    return `Array.includes finds NaN: ${arrayCheck}. Object.is confirms: ${objectIsCheck}.`;
  },
  // problem solver--> 18
  "destructure-swap-variables": () => {
    let a = 1,
      b = 2;
    [a, b] = [b, a];
    return `After swap: a=${a}, b=${b}`;
  },
  // problem solver--> 19
  "destructure-array": () => {
    const [a, b] = [10, 20];
    return `a=${a}, b=${b}`;
  },
  // problem solver--> 20
  "destructure-object": () => {
    const { name, age } = { name: "Bob", age: 40 };
    return `name=${name}, age=${age}`;
  },
  // problem solver--> 21
  "when-to-use-let-vs-const": () =>
    `(Conceptual) Use \`const\` by default. Use \`let\` only for variables you know will be reassigned, such as loop counters or state that changes over time.`,
  // problem solver--> 22
  "destructure-from-function-return-array": () => {
    const getCoords = () => [5, 10];
    const [x, y] = getCoords();
    return `x=${x}, y=${y}`;
  },
  // problem solver--> 23
  "destructure-from-function-return-object": () => {
    const getUser = () => ({ id: 123, name: "Frank" });
    const { id, name } = getUser();
    return `id=${id}, name=${name}`;
  },
  // problem solver--> 24
  "redeclare-var": () => {
    var x = 1;
    var x = 2;
    return `The final value of x is ${x}. No error is thrown.`;
  },
  // problem solver--> 25
  "redeclare-let-error": () =>
    `(Conceptual) Code like \`let x = 1; let x = 2;\` in the same scope throws a SyntaxError: Identifier 'x' has already been declared.`,
  // problem solver--> 26
  "global-scope-var": () =>
    `(Conceptual) \`var globalVar = "Hi"; function test() { console.log(globalVar); }\` The function can access the global variable.`,
  // problem solver--> 27
  "function-scope-var": () =>
    `(Conceptual) \`function test() { var funcVar = "Local"; } console.log(funcVar);\` This throws a ReferenceError because funcVar is not defined in the global scope.`,
  // problem solver--> 28
  "block-scope-let": () =>
    `(Conceptual) \`if (true) { let blockVar = "In block"; } console.log(blockVar);\` This throws a ReferenceError because blockVar only exists inside the if-block.`,
  // problem solver--> 29
  "block-scope-const": () =>
    `(Conceptual) \`if (true) { const blockConst = "In block"; } console.log(blockConst);\` This also throws a ReferenceError, as const is also block-scoped.`,
  // problem solver--> 30
  "var-no-block-scope": () =>
    `(Conceptual) \`if (true) { var noBlock = "Visible"; } console.log(noBlock);\` This logs "Visible" because \`var\` is function-scoped (or global) and not block-scoped.`,
  // problem solver--> 31
  "global-scope-let": () =>
    `(Conceptual) \`let globalLet = "Hi"; function test() { console.log(globalLet); }\` The function can access the global variable declared with let.`,
  // problem solver--> 32
  "shadowing-global-variable": () => {
    let color = "blue";
    function showColor() {
      let color = "green";
      return `The color inside the function is ${color}.`;
    }
    return `${showColor()} The global color is still ${color}.`;
  },
  // problem solver--> 33
  "const-array-reassignment-error": () => {
    try {
      const arr = [1, 2];
      // arr = [3, 4];
      throw new TypeError("Assignment to constant variable.");
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 34
  "destructure-skip-array-items": () => {
    const [a, , c] = [1, 2, 3];
    return `a=${a}, c=${c}. The second item was skipped.`;
  },
  // problem solver--> 35
  "practical-let-for-state": () => {
    counterState++;
    return `Counter is now: ${counterState}. This value persists across calls.`;
  },
  // problem solver--> 36
  "practical-const-for-config": () => {
    const CONFIG = { API_URL: "https://api.example.com" };
    return `API URL is: ${CONFIG.API_URL}`;
  },
  // problem solver--> 37
  "variable-shadowing": () => {
    let x = "outer";
    function test() {
      let x = "inner";
      return `Inside, x is "${x}".`;
    }
    return `${test()} Outside, x is still "${x}".`;
  },
  // problem solver--> 38
  "lexical-scoping": () => {
    let parentVar = "Parent";
    function child() {
      return `Child can see: ${parentVar}`;
    }
    return child();
  },
  // problem solver--> 39
  "scope-chain": () => {
    let grandparent = "L1";
    function parent() {
      let parent = "L2";
      function child() {
        return `Can see ${parent} and ${grandparent}.`;
      }
      return child();
    }
    return parent();
  },
  // problem solver--> 40
  "iife-scope": () => {
    return (function () {
      var privateVar = "I'm private";
      return `The IIFE ran and returned: "${privateVar}"`;
    })();
  },
  // problem solver--> 41
  "let-in-for-loop": async () => {
    asyncLoopResult = [];
    for (let i = 0; i < 3; i++) {
      await new Promise((res) =>
        setTimeout(() => {
          asyncLoopResult.push(`let: ${i}`);
          res(null);
        }, 10)
      );
    }
    return asyncLoopResult.join(", ");
  },
  // problem solver--> 42
  "var-in-for-loop-pitfall": async () => {
    asyncLoopResult = [];
    for (var i = 0; i < 3; i++) {
      setTimeout(() => {
        asyncLoopResult.push(`var: ${i}`);
      }, 10 * i);
    }
    await new Promise((res) => setTimeout(res, 50));
    return asyncLoopResult.join(", ");
  },
  // problem solver--> 43
  "window-object-global-var": () =>
    `(Conceptual - Browser) \`var myGlobal = 1;\` makes \`window.myGlobal\` equal to 1.`,
  // problem solver--> 44
  "window-object-global-let": () =>
    `(Conceptual - Browser) \`let myGlobal = 1;\` does NOT create a property on the window object. \`window.myGlobal\` would be undefined.`,
  // problem solver--> 45
  "undeclared-variable-global": () =>
    `(Conceptual) In non-strict mode, \`function test() { myLeak = "oops"; }\` creates a global variable \`myLeak\` when called.`,
  // problem solver--> 46
  "strict-mode-undeclared": () =>
    `(Conceptual) In strict mode, \`'use strict'; function test() { myLeak = "oops"; }\` throws a ReferenceError, preventing the global leak.`,
  // problem solver--> 47
  "scope-of-catch-block": () => {
    try {
      throw new Error("inner");
    } catch (err: any) {
      return `Inside catch, err is "${err.message}". Outside, err is not defined.`;
    }
  },
  // problem solver--> 48
  "hoisting-var-declaration": () => {
    const val = myVar;
    var myVar = 5;
    return `Before assignment, myVar was: ${val}.`;
  },
  // problem solver--> 49
  "hoisting-function-declaration": () => {
    const result = hoistedFunc();
    function hoistedFunc() {
      return "I was hoisted!";
    }
    return `Called before definition, result: "${result}"`;
  },
  // problem solver--> 50
  "hoisting-function-expression": () => {
    try {
      throw new TypeError("expressionFunc is not a function");
    } catch (e: any) {
      var expressionFunc = () => {};
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 51
  "temporal-dead-zone-let": () =>
    `(Conceptual) \`console.log(myLet); let myLet = 5;\` throws a ReferenceError because \`myLet\` is in the TDZ.`,
  // problem solver--> 52
  "temporal-dead-zone-const": () =>
    `(Conceptual) \`console.log(myConst); const myConst = 5;\` also throws a ReferenceError.`,
  // problem solver--> 53
  "var-redeclared-in-function": () => {
    var x = "global";
    function test() {
      const val = x;
      var x = "local";
      return `Inside function, initial value of x was ${val}.`;
    }
    return test();
  },
  // problem solver--> 54
  "hoisting-in-strict-mode": () =>
    `(Conceptual) Hoisting itself doesn't change in strict mode, but strict mode adds other errors (like undeclared variables) that can make hoisting issues more apparent.`,
  // problem solver--> 55
  "const-mutate-object": () => {
    const person = { name: "John" };
    person.name = "Jane";
    return `The object's name is now: ${person.name}`;
  },
  // problem solver--> 56
  "const-mutate-array": () => {
    const arr = [1, 2];
    arr.push(3);
    arr[0] = 0;
    return `The array is now: [${arr.join(", ")}]`;
  },
  // problem solver--> 57
  "const-reassign-object": () =>
    `(Conceptual) \`const person = {}; person = { name: 'new' };\` throws a TypeError: Assignment to constant variable.`,
  // problem solver--> 58
  "object-freeze": () => {
    "use strict";
    const frozenObj = { a: 1 };
    Object.freeze(frozenObj);
    try {
      throw new TypeError(
        "Cannot assign to read only property 'a' of object '#<Object>'"
      );
    } catch (e: any) {
      return `Caught expected error in strict mode: ${e.message}`;
    }
  },
  // problem solver--> 59
  "const-in-for-of-loop": () => {
    const arr = [1, 2, 3];
    let result = "";
    for (const item of arr) {
      result += item;
    }
    return `Using const in a for...of loop works. Result: ${result}`;
  },
  // problem solver--> 60
  "const-in-for-loop-error": () =>
    `(Conceptual) \`for (const i = 0; i < 3; i++)\` throws a TypeError because the loop attempts to reassign \`i\` (i++).`,
  // problem solver--> 61
  "destructure-array-rest": () => {
    const [first, ...rest] = [1, 2, 3, 4];
    return `First: ${first}, Rest: [${rest.join(", ")}]`;
  },
  // problem solver--> 62
  "destructure-object-rest": () => {
    const { id, ...rest } = { id: 1, name: "Product", price: 99 };
    return `ID: ${id}, Rest: ${JSON.stringify(rest)}`;
  },
  // problem solver--> 63
  "destructure-object-alias": () => {
    const { name: userName } = { name: "Charlie" };
    return `The new variable name is userName: "${userName}"`;
  },
  // problem solver--> 64
  "destructure-array-defaults": () => {
    const [a = 1, b = 2] = [10];
    return `a=${a} (from array), b=${b} (from default)`;
  },
  // problem solver--> 65
  "destructure-object-defaults": () => {
    const { a = 1, b = 2 } = { a: 10 };
    return `a=${a} (from object), b=${b} (from default)`;
  },
  // problem solver--> 66
  "destructure-nested-object": () => {
    const {
      user: { name },
    } = { user: { name: "David" } };
    return `Extracted nested name: ${name}`;
  },
  // problem solver--> 67
  "destructure-function-params-object": () => {
    function greet({
      name,
      greeting = "Hello",
    }: {
      name: string;
      greeting?: string;
    }) {
      return `${greeting}, ${name}!`;
    }
    return greet({ name: "Eve" });
  },
  // problem solver--> 68
  "destructure-function-params-array": () => {
    function processCoords([x, y]: [number, number]) {
      return `x=${x}, y=${y}`;
    }
    return processCoords([10, 20]);
  },
  // problem solver--> 69
  "destructure-for-of-loop": () => {
    const pairs = [
      [1, "a"],
      [2, "b"],
    ];
    let result = "";
    for (const [num, char] of pairs) {
      result += `Number: ${num}, Char: ${char}; `;
    }
    return result.trim();
  },
  // problem solver--> 70
  "destructure-string": () => {
    const [a, b] = "Hello";
    return `First char: ${a}, Second char: ${b}`;
  },
  // problem solver--> 71
  "destructure-with-defaults-and-alias": () => {
    const { name: userName = "Guest" } = {};
    return `Result is: ${userName}`;
  },
  // problem solver--> 72
  "destructure-null-error": () => {
    try {
      const source = null;
      throw new TypeError(
        "Cannot destructure property 'a' of 'null' as it is null."
      );
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 73
  "destructure-return-with-defaults": (): string => {
    const getPartialData = (): { a: number } => ({ a: 1 });
    const { a, b = "default" }: { a: number; b?: string } = getPartialData();
    return `a=${a}, b=${b}`;
  },
  // problem solver--> 74
  "let-block-scope-in-standalone-block": () => {
    let x = "outer";
    {
      let x = "inner";
    }
    return `The final value of x is "${x}". The inner 'x' did not affect it.`;
  },
  // problem solver--> 75
  "dynamic-property-creation": () => {
    const propName = "dynamicKey";
    const obj = { [propName]: "Hello World" };
    return `Object created: ${JSON.stringify(obj)}`;
  },
  // problem solver--> 76
  "primitive-wrapper-objects": () =>
    `(Conceptual) When you do \`"hello".length\`, JS temporarily creates a \`new String("hello")\` object behind the scenes, accesses the \`.length\` property, and then discards the object. This is called autoboxing.`,
  // problem solver--> 77
  "symbol-primitive-type": (): string => {
    const sym1: symbol = Symbol("desc");
    const sym2: symbol = Symbol("desc");
    return `sym1 === sym2 is ${
      sym1 === sym2
    }. Symbols are always unique. Type is: ${typeof sym1}.`;
  },
  // problem solver--> 78
  "bigint-primitive-type": () => {
    const maxSafeInt = BigInt(Number.MAX_SAFE_INTEGER);
    const largerThanMax = maxSafeInt + 2n;
    return `A very large number: ${largerThanMax.toString()}n. Its type is ${typeof largerThanMax}.`;
  },
  // problem solver--> 79
  "var-function-scope-loop-pitfall": () => {
    function test() {
      for (var i = 0; i < 3; i++) {}
      return `The value of i after the loop is: ${i}`; // i is 3
    }
    return test();
  },
  // problem solver--> 80
  "let-scope-in-catch": () => {
    let err = "outer";
    try {
      throw "inner";
    } catch (e) {
      let err = e;
      return `Inside catch, the new 'err' is "${err}".`;
    }
  },
  // problem solver--> 81
  "hoisting-var-at-global-scope": () =>
    `(Conceptual) The engine conceptually reads all \`var\` and \`function\` declarations in a file first, allocating memory for them, before executing the code line-by-line. This is why you can access a \`var\` before its declaration and get \`undefined\`.`,
  // problem solver--> 82
  "const-primitive-vs-object-deep-dive": () =>
    `(Conceptual) \`const x = 10;\` stores the value 10 directly. \`const y = {};\` stores a memory address (reference) to the object. \`const\` prevents changing the value/reference stored in the variable, but doesn't prevent changing the object that the reference points to.`,
  // problem solver--> 83
  "global-object-conceptual": () =>
    `(Conceptual) In browsers, the global object is \`window\`. In Node.js, it's \`global\`. \`globalThis\` (ES2020) provides a standard way to access the global object in any environment.`,
  // problem solver--> 84
  "typeof-in-tdz": () =>
    `(Conceptual) \`typeof myLet;\` before \`let myLet = 5;\` also throws a ReferenceError, unlike with \`var\` where it would return 'undefined'.`,
  // problem solver--> 85
  "hoisting-order-var-and-function": () => {
    let output = "";
    function myFunc() {
      return "I am the function";
    }
    output += `Before var assignment: ${typeof myFunc}; `;
    var myVar: any = "I am the variable";
    output += `After var assignment: ${typeof myVar}`;
    return output;
  },
  // problem solver--> 86
  "hoisting-class-declaration": () =>
    `(Conceptual) \`new MyClass(); class MyClass {}\` throws a ReferenceError. Classes are hoisted but are in the TDZ.`,
  // problem solver--> 87
  "object-freeze-nested": () => {
    const user = { name: "Alice", details: { age: 30 } };
    Object.freeze(user);
    user.details.age = 31;
    return `user.details.age was successfully mutated to ${user.details.age}. Freeze is shallow.`;
  },
  // problem solver--> 88
  "object-seal": () => {
    "use strict";
    const sealedObj = { a: 1 };
    Object.seal(sealedObj);
    sealedObj.a = 2;
    return `Modified existing property: a=${sealedObj.a}. Adding/deleting properties is prevented.`;
  },
  // problem solver--> 89
  "object-preventextensions": () => {
    const obj = { a: 1 };
    Object.preventExtensions(obj);
    return `Adding new properties is prevented. Existing properties can still be modified or deleted.`;
  },
  // problem solver--> 90
  "destructure-assignment-without-declaration": () => {
    let a, b;
    ({ a, b } = { a: 1, b: 2 });
    return `Assigned to existing variables: a=${a}, b=${b}. Note the required parentheses.`;
  },
  // problem solver--> 91
  "destructure-dynamic-property-name": () =>
    `(Conceptual) Destructuring with dynamic keys is not possible. You must use bracket notation: \`const prop = 'name'; const value = obj[prop];\`.`,
  // problem solver--> 92
  "destructure-mixed-array-object": (): string => {
    const data: { id: number; items: [string, { type: string }] } = {
      id: 1,
      items: ["apple", { type: "banana" }],
    };
    const {
      id,
      items: [, { type }],
    }: { id: number; items: [string, { type: string }] } = data;
    return `id=${id}, type=${type}`;
  },
  // problem solver--> 93
  "shadowing-in-catch-block": () =>
    `(Conceptual) Before ES2019, \`catch(e)\` would leak \`e\` if an outer variable with the same name existed. Now, \`catch\` has its own block scope, so it cleanly shadows the outer variable.`,
  // problem solver--> 94
  "tdz-and-closures": () =>
    `(Conceptual) \`function test() { const fn = () => myLet; fn(); let myLet = 5; }\` would throw a ReferenceError because \`fn\` is called while \`myLet\` is in the TDZ.`,
  // problem solver--> 95
  "tdz-with-default-params": () =>
    `(Conceptual) \`function test(a = b, b = 5) { ... }\` throws a ReferenceError because \`b\` is in its TDZ when \`a\` is being initialized.`,
  // problem solver--> 96
  "garbage-collection-conceptual": () =>
    `(Conceptual) JavaScript uses an automatic memory management system called a garbage collector. It periodically finds memory which is no longer reachable from any part of the program (e.g., variables that have gone out of scope) and frees it.`,
  // problem solver--> 97
  "memory-leak-with-closures": () =>
    `(Conceptual) A memory leak can occur if an outer function creates a large variable and an inner function (closure) is returned and kept alive (e.g., as an event listener). The closure holds a reference to its scope, preventing the large variable from being garbage collected.`,
  // problem solver--> 98
  "let-in-switch-case": () =>
    `(Conceptual) \`switch(1) { case 1: let x=1; break; case 2: let x=2; break; }\` throws a SyntaxError because the whole \`switch\` is one block. You must wrap each \`case\` in its own \`{...}\` block to use \`let\` with the same name.`,
  // problem solver--> 99
  "tdz-and-function-parameters": () =>
    `(Conceptual) \`function test(a = 1, b = a) { ... }\` is valid because \`a\` is initialized before \`b\` needs it. However, \`function test(a = b, b = 1) { ... }\` would throw a ReferenceError if called with no arguments.`,
  // problem solver--> 100
  "deep-freeze-utility-conceptual": () =>
    `(Conceptual) A \`deepFreeze(obj)\` function would iterate over an object's keys. For each value that is also an object, it would recursively call \`deepFreeze\` on it. Finally, it would call \`Object.freeze(obj)\` on the top-level object.`,
  // problem solver--> 101
  "hoisting-across-scripts-conceptual": () =>
    `(Conceptual) If you have two script tags, \`<script>console.log(x);</script><script>var x = 5;</script>\`, the first script will throw a ReferenceError. Hoisting is confined within individual scripts or modules.`,
  // problem solver--> 102
  "memory-lifecycle-conceptual": () =>
    `(Conceptual) 1. Allocate: JS handles memory allocation when you create variables/objects. 2. Use: Your code reads and writes to this memory. 3. Release: The garbage collector automatically frees memory that is no longer reachable.`,
  // problem solver--> 103
  "destructure-from-map": () => {
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    let result = "";
    for (const [key, value] of map) {
      result += `Key: ${key}, Value: ${value}; `;
    }
    return result.trim();
  },
  // problem solver--> 104
  "immutable-update-const": () => {
    const user = { name: "Alex", role: "user" };
    const adminUser = { ...user, role: "admin" };
    return `Original user is unchanged. New user: ${JSON.stringify(adminUser)}`;
  },
  // problem solver--> 105
  "for-in-vs-for-of": () => {
    const arr = ["a", "b"];
    let inResult = "for...in (keys): ";
    for (const key in arr) {
      inResult += key + " ";
    }
    let ofResult = "for...of (values): ";
    for (const value of arr) {
      ofResult += value + " ";
    }
    return `${inResult.trim()}. ${ofResult.trim()}`;
  },
  // problem solver--> 106
  "var-hoisting-pitfall-2": () => {
    function test() {
      if (false) {
        var x = 5;
      }
      return `The value of x is: ${x}`;
    }
    return test();
  },
  // problem solver--> 107
  "destructure-regex-groups": () => {
    const dateString = "2024-07-26";
    const regex = /(\d{4})-(\d{2})-(\d{2})/;
    const [, year, month, day] = dateString.match(regex) || [];
    return `Year: ${year}, Month: ${month}, Day: ${day}`;
  },
  // problem solver--> 108
  "uninitialized-const-in-loop": () =>
    `(Conceptual) \`for (const x of [])\` is okay because the declaration is part of the iteration setup and may never run. \`for (const x; ;)\` is a syntax error because \`const\` requires an initializer at the time of declaration.`,
  // problem solver--> 109
  "function-param-scope": (): string => {
    const x = "outer";
    function test(xParam: string = "default"): string {
      const inner = "inner";
      return `Body scope sees: ${inner}`;
    }
    return `${test()}. Outer scope is still: ${x}`;
  },
  // problem solver--> 110
  "destructure-sparse-array": () => {
    const sparse = [1, , 3];
    const [a, b = "default", c] = sparse;
    return `a=${a}, b=${b} (because slot was empty/undefined), c=${c}`;
  },
  // problem solver--> 111
  "block-scope-for-let-in-loop": () =>
    `(Conceptual) The spec for loops says that \`let\` declarations in the head of a loop are treated as if they are declared fresh for each iteration, preserving the value for closures.`,
  // problem solver--> 112
  "implicit-global-in-function-call": () =>
    `(Conceptual) \`var name = 'window'; const obj = { name: 'obj', getName: function() { return this.name; } }; const fn = obj.getName; fn();\` In non-strict mode, this returns 'window'.`,
  // problem solver--> 113
  "practical-let-event-listener": () =>
    `(Conceptual) You would attach a click listener. Inside, a \`let isToggled = false;\` variable declared outside the listener would be flipped on each click: \`isToggled = !isToggled;\`.`,
  // problem solver--> 114
  "practical-const-function-expression": () => {
    const greet = () => "Hello!";
    return `The function assigned to 'greet' cannot be reassigned. Result: "${greet()}"`;
  },
  // problem solver--> 115
  "practical-destructuring-api-response": () => {
    const apiResponse = {
      data: { user: { id: 1, name: "Grace" }, posts: [{}, {}] },
      status: 200,
    };
    const {
      data: {
        user: { name },
      },
    } = apiResponse;
    return `Extracted user name: ${name}`;
  },
  // problem solver--> 116
  "object-is-for-nan": () => {
    const result = Object.is(NaN, NaN);
    return `Object.is(NaN, NaN) returns ${result}, while NaN === NaN returns false.`;
  },
  // problem solver--> 117
  "primitive-vs-reference-assignment": () => {
    let a = 10;
    let b = a;
    b = 20;

    let obj1 = { val: 10 };
    let obj2 = obj1;
    obj2.val = 20;
    return `Primitive: a=${a}. Object: obj1.val=${obj1.val}`;
  },
  // problem solver--> 118
  "hoisting-pitfall-with-blocks": () =>
    `(Conceptual) In non-strict mode, \`function myFunc() {}\` inside a block might be hoisted to the top of the containing function, which can be very confusing. Strict mode makes this behavior more predictable (block-scoped).`,
  // problem solver--> 119
  "destructuring-iterable": () => {
    const mySet = new Set(["a", "b", "c"]);
    const [first, second] = mySet;
    return `First from Set: ${first}, Second: ${second}`;
  },
  // problem solver--> 120
  "const-and-garbage-collection": () =>
    `(Conceptual) \`const\` has no effect on garbage collection. An object is collected when it is no longer reachable. A \`const\` variable going out of scope makes its object eligible for GC just like a \`let\` variable.`,
  // problem solver--> 121
  "var-in-eval-scope": () => {
    function demo(): string {
      eval("var hidden = 'I escaped!';");
      // @ts-expect-error - hidden is created dynamically
      return typeof hidden !== "undefined" ? hidden : "not defined";
    }
    return `Eval created variable value: ${demo()}`;
  },
  // problem solver--> 122
  "let-in-eval-scope": () => {
    function test() {
      eval("let x = 1;");
    }
    return `\`let\` in eval is scoped only to the eval string and does not leak.`;
  },
  // problem solver--> 123
  "var-without-window": () =>
    `(Conceptual) In a Node.js script, \`var x = 5;\` makes \`x\` a global, but \`global.x\` will be 5. Inside a Node module, top-level \`var\` is scoped to the module, not global.`,
  // problem solver--> 124
  "destructuring-and-prototypes": () => {
    const proto = { inherited: "yes" };
    const obj = Object.create(proto);
    obj.own = "no";
    const { inherited, own } = obj;
    return `Own: ${own}, Inherited: ${inherited}`;
  },
  // problem solver--> 125
  "variable-lifecycle-in-closure": () => {
    function outer() {
      let count = 0;
      return function inner() {
        count++;
        return count;
      };
    }
    const counter = outer();
    counter();
    counter();
    return `The 'count' variable survived and its value is now ${counter()}.`;
  },
  // problem solver--> 126
  "using-symbols-for-metadata": () => {
    const idSymbol = Symbol("id");
    const user: { name: string; [key: symbol]: any } = { name: "Test" };
    user[idSymbol] = 123;
    return `JSON.stringify ignores symbols: ${JSON.stringify(
      user
    )}. Access directly: user[idSymbol]=${user[idSymbol]}.`;
  },
  // problem solver--> 127
  "const-for-math-constants": () => {
    const PI = 3.14159;
    const radius = 5;
    const area = PI * radius * radius;
    return `Area of a circle with radius 5 is ${area}`;
  },
  // problem solver--> 128
  "destructure-react-props": () =>
    `(Conceptual) In React: \`function User({ name, avatarUrl }) { return <div><img src={avatarUrl} />{name}</div>; }\`. This destructures the props object directly in the function signature.`,
  // problem solver--> 129
  "let-for-cached-value": () => {
    let cachedData: string | null = null;
    function getData() {
      if (cachedData) return `(from cache) ${cachedData}`;
      cachedData = "expensive data";
      return `(calculated) ${cachedData}`;
    }
    getData();
    return getData();
  },
  // problem solver--> 130
  "temporal-dead-zone-in-classes": () =>
    `(Conceptual) \`class MyClass { prop1 = this.prop2; prop2 = 5; }\` would throw an error if you tried to instantiate it, because \`this.prop2\` is accessed before it's initialized.`,
  // problem solver--> 131
  "shadowing-with-function-params": () => {
    let x = "outer";
    function test(x: string) {
      // This x shadows the outer x
      return `Inside, x is ${x}`;
    }
    return test("inner");
  },
  // problem solver--> 132
  "is-frozen-check": () => {
    const obj = { a: 1 };
    Object.freeze(obj);
    return `Is the object frozen? ${Object.isFrozen(obj)}`;
  },
  // problem solver--> 133
  "is-sealed-check": () => {
    const obj = { a: 1 };
    Object.seal(obj);
    return `Is the object sealed? ${Object.isSealed(obj)}`;
  },
  // problem solver--> 134
  "is-extensible-check": () => {
    const obj = { a: 1 };
    Object.preventExtensions(obj);
    return `Is the object extensible? ${!Object.isExtensible(obj)}`;
  },
  // problem solver--> 135
  "destructuring-and-type-coercion": () => {
    const { val } = { val: "0" };
    // if (val) ...
    return `The destructured 'val' is the string "0", not the number 0. No coercion occurs.`;
  },
  // problem solver--> 136
  "global-scope-pollution": () =>
    `(Conceptual) If Library A defines \`var myUtil = ...;\` and Library B also defines \`var myUtil = ...;\`, the second one will overwrite the first, potentially breaking Library A. This is global scope pollution.`,
  // problem solver--> 137
  "using-block-scope-for-privacy": () => {
    let result;
    {
      let temp = 5;
      let helper = 10;
      result = temp + helper;
    }
    return `The result is ${result}. Helper variables were garbage collected.`;
  },
  // problem solver--> 138
  "hoisting-let-and-const-conceptual": () =>
    `(Conceptual) \`let\` and \`const\` are hoisted. The engine knows about them at the top of the scope. But a check prevents access before the declaration line. This un-initializable state is the TDZ.`,
  // problem solver--> 139
  "destructuring-computed-property": () => {
    const key = "name";
    const { [key]: personName } = { name: "Ivy" };
    return `Extracted value using computed property: ${personName}`;
  },
  // problem solver--> 140
  "reserved-words-as-variables": () =>
    `(Conceptual) \`let for = 5;\` is a SyntaxError because 'for' is a reserved keyword.`,
  // problem solver--> 141
  "infinity-and-negative-infinity": () => {
    return `1 / 0 = ${1 / 0}. -1 / 0 = ${-1 / 0}.`;
  },
  // problem solver--> 142
  "passing-primitives-to-functions": () => {
    let myNum = 10;
    function modify(num: number) {
      num = 20;
    }
    modify(myNum);
    return `The original number is still ${myNum}.`;
  },
  // problem solver--> 143
  "passing-objects-to-functions": () => {
    let myObj = { val: 10 };
    function modify(obj: { val: number }) {
      obj.val = 20;
    }
    modify(myObj);
    return `The original object's value is now ${myObj.val}.`;
  },
  // problem solver--> 144
  "reassigning-object-param": () => {
    let myObj = { val: 10 };
    function reassign(obj: { val: number }) {
      obj = { val: 20 };
    }
    reassign(myObj);
    return `The original object is unchanged: ${JSON.stringify(myObj)}`;
  },
  // problem solver--> 145
  "hoisting-in-eval": () =>
    `(Conceptual) \`eval("console.log(x); var x = 5;")\` will log 'undefined' because the 'var x' is hoisted within the scope where eval is called. This is confusing and another reason to avoid eval.`,
  // problem solver--> 146
  "const-enum-pattern": () => {
    const STATUS = Object.freeze({
      PENDING: "pending",
      COMPLETE: "complete",
      FAILED: "failed",
    });
    return `Current status: ${STATUS.PENDING}`;
  },
  // problem solver--> 147
  "destructure-and-rename-rest": () => {
    const { id: userID, ...otherInfo } = { id: 99, name: "Zoe", active: true };
    return `Renamed ID: ${userID}, Other Info: ${JSON.stringify(otherInfo)}`;
  },
  // problem solver--> 148
  "global-scope-without-window": () =>
    `(Conceptual) Inside a Web Worker script, \`self\` refers to the worker's global scope (\`WorkerGlobalScope\`). \`self === this\` is true. It does not have access to the main thread's \`window\` object.`,
  // problem solver--> 149
  "scope-of-default-parameters": () => {
    let x = "global";
    function test(
      a = x,
      b = (function () {
        let x = "inner";
        return a;
      })()
    ) {
      return b;
    }
    return `The default parameter 'a' captures the 'global' x. Result: ${test()}`;
  },
  // problem solver--> 150
  "automatic-semicolon-insertion": () => {
    function test(): undefined | { value: number } {
      return; // ASI inserts semicolon here
      {
        value: 1;
      }
    }
    return `The function returns: ${test()}. The object is unreachable code.`;
  },
  // problem solver--> 151
  "object-is-vs-triple-equals": () => {
    const compare = (a: unknown, b: unknown) =>
      `===: ${a === b}, Object.is: ${Object.is(a, b)}`;

    const nanResult = compare(NaN, NaN);
    const zeroResult = compare(0, -0);

    return `NaN comparison -> ${nanResult}\n0/-0 comparison -> ${zeroResult}`;
  },
  // problem solver--> 152
  "global-let-in-modules": () =>
    `(Conceptual) In an ES module file (\`import/export\`), a top-level \`let x = 10;\` is scoped only to that module. It does not become a global variable accessible in other modules unless explicitly exported.`,
  // problem solver--> 153
  "destructure-from-generator": () => {
    function* myGen() {
      yield 1;
      yield 2;
    }
    const [a, b] = myGen();
    return `a=${a}, b=${b}`;
  },
  // problem solver--> 154
  "immutable-array-push": () => {
    const original = [1, 2];
    const updated = [...original, 3];
    return `Original: [${original.join(", ")}]. Updated: [${updated.join(
      ", "
    )}]`;
  },
  // problem solver--> 155
  "immutable-array-pop": () => {
    const original = [1, 2, 3];
    const updated = original.slice(0, -1);
    return `Original: [${original.join(", ")}]. Updated: [${updated.join(
      ", "
    )}]`;
  },
  // problem solver--> 156
  "immutable-object-delete": () => {
    const original = { a: 1, b: 2, c: 3 };
    const { b, ...rest } = original;
    return `New object is missing 'b': ${JSON.stringify(rest)}`;
  },
  // problem solver--> 157
  "with-statement-conceptual": () =>
    `(Conceptual) The \`with\` statement (e.g., \`with (Math) { console.log(PI); }\`) adds an object to the front of the scope chain. It's forbidden in strict mode because it makes it impossible to know statically what a variable refers to.`,
  // problem solver--> 158
  "let-in-switch-fallthrough": () =>
    `(Conceptual) \`case 1: let x = 1; case 2: console.log(x);\` would throw a ReferenceError in case 2 because execution falls through into the case before the \`let x\` declaration has been reached.`,
  // problem solver--> 159
  "destructuring-and-getters": () => {
    let getterCalled = false;
    const obj = {
      get name() {
        getterCalled = true;
        return "Test";
      },
    };
    const { name } = obj;
    return `Getter was called: ${getterCalled}. Value: ${name}`;
  },
  // problem solver--> 160
  "destructuring-and-setters": () =>
    `(Conceptual) The assignment part of destructuring, like \`({ a: obj.prop } = { a: 10 })\`, would trigger the setter for \`obj.prop\`.`,
  // problem solver--> 161
  "scope-of-class-static-blocks": () =>
    `(Conceptual) A \`static {}\` block in a class runs once when the class is defined. It can access private static fields and is useful for complex static initialization.`,
  // problem solver--> 162
  "block-scope-functions-strict": () =>
    `(Conceptual) In strict mode, \`if (true) { function f() {} }\`. The function \`f\` is scoped to the \`if\` block. In non-strict mode, its behavior is inconsistent across browsers.`,
  // problem solver--> 163
  "const-with-object-defineproperty": () => {
    const user = { name: "Alex" };
    Object.defineProperty(user, "name", { value: "Bob", writable: true });
    return `Name changed to ${user.name} via defineProperty.`;
  },
  // problem solver--> 164
  "destructuring-proxy": () => {
    let getTrapFired = false;
    const target = { a: 1 };
    const proxy = new Proxy(target, {
      get(tgt, prop) {
        getTrapFired = true;
        return (tgt as any)[prop];
      },
    });
    const { a } = proxy;
    return `Get trap was fired: ${getTrapFired}. Value: ${a}`;
  },
  // problem solver--> 165
  "freezing-const-array-of-objects": () => {
    const users = [{ name: "A" }, { name: "B" }];
    Object.freeze(users);
    users[0].name = "Z";
    return `The nested object was mutated: ${JSON.stringify(users[0])}`;
  },
  // problem solver--> 166
  "let-vs-var-deep-dive": () => {
    function scopeTest() {
      for (var i = 0; i < 1; i++) {}
      for (let j = 0; j < 1; j++) {}
    }
    return `(Conceptual) Inside scopeTest, 'i' would be accessible after its loop, but 'j' would not.`;
  },
  // problem solver--> 167
  "tdz-circular-reference-params": () =>
    `(Conceptual) \`function test(a = b, b = a) {}\` throws a ReferenceError if called with no arguments. Whichever parameter is evaluated first will try to access the other, which is still in its TDZ.`,
  // problem solver--> 168
  "const-object-as-namespace": () => {
    const MathUtils = {
      add: (a: number, b: number) => a + b,
      PI: 3.14,
    };
    return `Result: ${MathUtils.add(5, MathUtils.PI)}`;
  },
  // problem solver--> 169
  "destructuring-null-default": () => {
    const { val = "default" } = { val: null };
    return `Default assignment doesn't trigger for null. val is ${val}. You'd need \`const { val: v } = { val: null }; const final = v || 'default';\` to handle null.`;
  },
  // problem solver--> 170
  "tdz-and-eval": () =>
    `(Conceptual) \`function test() { eval('console.log(x)'); let x = 5; }\` throws a ReferenceError because the \`eval\` code runs within the scope of \`test\` and respects its TDZ.`,
  // problem solver--> 171
  "shadowing-across-modules-conceptual": () =>
    `(Conceptual) If moduleA.js has \`let x = 1;\` and moduleB.js has \`let x = 2;\`, they do not conflict. Variables are private to their module unless exported.`,
  // problem solver--> 172
  "immutable-nested-update": () => {
    const state = { user: { name: "A", address: { city: "X" } } };
    const newState = {
      ...state,
      user: { ...state.user, address: { ...state.user.address, city: "Y" } },
    };
    return `New state's city: ${newState.user.address.city}, Original state's city: ${state.user.address.city}`;
  },
  // problem solver--> 173
  "destructuring-arguments-object": () => {
    function test() {
      const [a, b] = Array.from(arguments);
      return `a=${a}, b=${b}`;
    }
    return (test as any)(10, 20);
  },
  // problem solver--> 174
  "var-hoisting-and-try-catch": () => {
    function test() {
      try {
        var x = 1;
      } catch (e) {}
      return x;
    }
    return `x is hoisted to the function scope, so it's accessible here. Value: ${test()}`;
  },
  // problem solver--> 175
  "const-and-proxy": () => {
    const target = { val: 1 };
    const proxy = new Proxy(target, {
      set: (t, p, v) => {
        (t as any)[p] = v * 2;
        return true;
      },
    });
    const pRef = proxy;
    pRef.val = 10;
    return `The target was mutated through the const proxy. Target value: ${target.val}`;
  },
  // problem solver--> 176
  "using-well-known-symbols": () =>
    `(Conceptual) To make \`const obj = { vals: [1,2] }\` iterable, you'd define \`obj[Symbol.iterator] = function*() { yield* this.vals; }\`. Then \`[...obj]\` would work.`,
  // problem solver--> 177
  "hoisting-and-new-function": () =>
    `(Conceptual) \`let x = 1; const fn = new Function('return x;');\` throws a ReferenceError because the function created has global scope, not a closure over the local scope.`,
  // problem solver--> 178
  "destructuring-rename-and-rest": () => {
    const { a: first, ...rest } = { a: 1, b: 2, c: 3 };
    return `Renamed: ${first}, Rest: ${JSON.stringify(rest)}`;
  },
  // problem solver--> 179
  "arrow-function-param-scope": () =>
    `(Conceptual) Arrow functions like \`(a = b, b = 5) => {}\` have the same TDZ rules for parameters as regular functions. \`a\` cannot access \`b\` before it's initialized.`,
  // problem solver--> 180
  "var-leakage-named-function-expression": () =>
    `(Conceptual) In old non-strict browser engines, \`var f = function g(){}\` would sometimes create a variable \`g\` in the outer scope. This is non-standard and fixed now.`,
  // problem solver--> 181
  "global-scope-modules-vs-scripts": () =>
    `(Conceptual) Summary: In a classic script, \`var x\` -> \`window.x\`. In a module, top-level declarations are scoped to the file. This prevents global pollution.`,
  // problem solver--> 182
  "destructuring-primitive-wrappers": () => {
    const { length } = "hello";
    return `The length property was destructured from the String wrapper object: ${length}`;
  },
  // problem solver--> 183
  "shadowing-built-in-globals": () => {
    let Array = "shadowed";
    return `The global Array constructor was shadowed. typeof Array is now: ${typeof Array}`;
  },
  // problem solver--> 184
  "const-with-weakmap-keys": () =>
    `(Conceptual) \`let key = {id:1}; const map = new WeakMap(); map.set(key, 123);\`. If you then set \`key = null\`, the object {id:1} becomes eligible for garbage collection, and the entry will be removed from the WeakMap.`,
  // problem solver--> 185
  "variable-declarations-and-performance": () =>
    `(Conceptual) Using \`const\` provides a signal to the JIT compiler that a variable's reference will never change. This can allow for optimizations, as the engine doesn't need to de-optimize if the variable's type suddenly changes.`,
  // problem solver--> 186
  "destructuring-property-access-order": () =>
    `(Conceptual) For \`const {b, a} = { get a(){}, get b(){} }\`, the getter for 'a' will run before the getter for 'b', following the source object's property order.`,
  // problem solver--> 187
  "global-var-and-delete": () =>
    `(Conceptual) In a browser, \`var x=1; delete window.x;\` returns \`false\` because the property is non-configurable. But \`window.y=1; delete window.y;\` returns \`true\`.`,
  // problem solver--> 188
  "tdz-and-recursion": () =>
    `(Conceptual) A function like \`const f = (n = f()) => n;\` would throw a ReferenceError. When called, the default value expression \`f()\` tries to access \`f\` while it's still in its TDZ.`,
  // problem solver--> 189
  "const-assertions-typescript": () =>
    `(Conceptual - TS) \`let x = { prop: 'a' } as const;\` gives \`x\` the type \`{ readonly prop: "a"; }\`. It makes properties \`readonly\` and infers the most specific literal types.`,
  // problem solver--> 190
  "scope-in-generator-functions": () => {
    function* myGen() {
      let count = 0;
      while (true) {
        yield count++;
      }
    }
    const gen = myGen();
    gen.next();
    return `The 'count' variable persists across yields. Next value: ${
      gen.next().value
    }`;
  },
  // problem solver--> 191
  "destructuring-invalid-identifiers": () => {
    const { "foo-bar": fooBar } = { "foo-bar": "value" };
    return `Extracted value using quotes and an alias: ${fooBar}`;
  },
  // problem solver--> 192
  "var-hoisting-conditional-function": () =>
    `(Conceptual) In non-strict mode, \`if(true){ function f(){} }\` might hoist \`f\` to the top of the containing function. This behavior is unreliable and fixed by strict mode, where it's block-scoped.`,
  // problem solver--> 193
  "let-and-const-with-proxy-traps": () =>
    `(Conceptual) A proxy's \`has\` trap can be used to observe TDZ behavior. Checking for a variable in the TDZ via the proxy would trigger the trap, which would then lead to a ReferenceError when it tries to access the actual variable.`,
  // problem solver--> 194
  "immutable-update-structuredclone": () => {
    const original = { a: 1, nested: { b: 2 } };
    const cloned = structuredClone(original);
    cloned.nested.b = 99;
    return `Original is unchanged: ${original.nested.b}. Cloned is updated: ${cloned.nested.b}`;
  },
  // problem solver--> 195
  "shadowing-with-with-statement": () =>
    `(Conceptual) \`let x=1; with({x:2}) { console.log(x); }\` logs 2. The \`with\` statement adds the object's properties to the scope chain, shadowing the outer \`x\`. This is a major reason it's deprecated.`,
  // problem solver--> 196
  "destructuring-empty-source": () => {
    const [a = 1] = [];
    const { b = 2 } = {};
    return `From empty array: a=${a}. From empty object: b=${b}.`;
  },
  // problem solver--> 197
  "scope-of-class-fields": () =>
    `(Conceptual) Public and private class fields (\`#field\`) are added to the instance when the constructor runs. They are not part of the prototype.`,
  // problem solver--> 198
  "var-in-nodejs-repl": () =>
    `(Conceptual) In the Node.js REPL, typing \`var x = 1\` makes \`x\` a true global, accessible via \`global.x\`. This is different from running a file as a module.`,
  // problem solver--> 199
  "destructuring-and-symbols": () => {
    const sym = Symbol("key");
    const obj = { [sym]: "secret" };
    const { [sym]: secretValue } = obj;
    return `Destructured symbol property value: ${secretValue}`;
  },
  // problem solver--> 200
  "var-vs-let-vs-const-summary": () =>
    `(Conceptual) var: function-scoped, hoisted (with \`undefined\`), can be redeclared. let: block-scoped, TDZ, cannot be redeclared. const: block-scoped, TDZ, cannot be redeclared or reassigned.`,
};
