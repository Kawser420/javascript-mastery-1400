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

// State for impure function
let externalCounter = 0;
let counterState = 0;
let asyncLoopResult: string[] = [];

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "simple-function-return": () => {
    function greet() {
      return "Hello, Functions!";
    }
    return greet();
  },
  // problem solver--> 02
  "function-with-parameters": ({ a, b }: { a: any; b: any }) => {
    function multiply(x: number, y: number) {
      return x * y;
    }
    return multiply(parseNumber(a), parseNumber(b));
  },
  // problem solver--> 03
  "arrow-function-syntax": ({ num }: { num: any }) => {
    const square = (n: number) => n * n;
    return square(parseNumber(num));
  },
  // problem solver--> 04
  "function-declaration": () => {
    const result = declaredFunction();
    function declaredFunction() {
      return "This function was hoisted!";
    }
    return result;
  },
  // problem solver--> 05
  "function-expression": () => {
    const expressionFunction = function () {
      return "This is a function expression.";
    };
    return expressionFunction();
  },
  // problem solver--> 06
  "default-parameters": ({ name }: { name: string }) => {
    function greet(userName = "Guest") {
      return `Hello, ${userName}!`;
    }
    return greet(name || undefined);
  },
  // problem solver--> 07
  "rest-parameters-sum": ({ numbers }: { numbers: string }) => {
    const nums = parseNumArray(numbers);
    function sum(...args: number[]) {
      return args.reduce((total, current) => total + current, 0);
    }
    return sum(...nums);
  },
  // problem solver--> 08
  "iife-pattern": () => {
    return (function () {
      const privateVar = "I'm private!";
      return `This IIFE returned: "${privateVar}"`;
    })();
  },
  // problem solver--> 09
  "hoisting-declaration": () =>
    `The solver for 'function-declaration' demonstrates this. Calling declaredFunction() before it's defined works because the entire function is hoisted.`,
  // problem solver--> 10
  "hoisting-expression-var": () =>
    `(Conceptual) Code like \`myFunc(); var myFunc = () => {}\` throws a TypeError. The variable \`myFunc\` is hoisted and is 'undefined' at call time, not a function.`,
  // problem solver--> 11
  "global-scope": () =>
    `(Conceptual) A variable declared outside any function is global. A function can access it. E.g., \`let globalVar = "Hi"; function test() { console.log(globalVar); }\``,
  // problem solver--> 12
  "function-scope": () =>
    `(Conceptual) A variable with 'var' inside a function is only accessible within that function. Accessing it outside results in a ReferenceError.`,
  // problem solver--> 13
  "block-scope-let": () =>
    `(Conceptual) A variable with 'let' inside a block {} is only accessible within that block. Accessing it outside results in a ReferenceError.`,
  // problem solver--> 14
  "scope-chain": () => {
    const grandParentVar = "Grandparent";
    function parent() {
      const parentVar = "Parent";
      function child() {
        return `Child can see: ${parentVar} and ${grandParentVar}`;
      }
      return child();
    }
    return parent();
  },
  // problem solver--> 15
  "pure-function": ({ num }: { num: any }) => {
    const double = (n: number) => n * 2;
    return double(parseNumber(num));
  },
  // problem solver--> 16
  "impure-function": () => {
    function incrementExternal() {
      externalCounter++;
      return `External counter is now: ${externalCounter}`;
    }
    return incrementExternal();
  },
  // problem solver--> 17
  "higher-order-function-argument": ({ num }: { num: any }) => {
    const square = (n: number) => n * n;
    const applyOperation = (val: number, operation: (n: number) => number) =>
      operation(val);
    return applyOperation(parseNumber(num), square);
  },
  // problem solver--> 18
  "higher-order-function-return": ({
    multiplier,
    num,
  }: {
    multiplier: any;
    num: any;
  }) => {
    const createMultiplier = (factor: number) => (n: number) => n * factor;
    const multiplyBy = createMultiplier(parseNumber(multiplier));
    return multiplyBy(parseNumber(num));
  },
  // problem solver--> 19
  "sync-callback": ({ arr }: { arr: string }) => {
    const items = parseStrArray(arr);
    let result = "";
    function processArray(array: string[], callback: (item: string) => void) {
      for (let i = 0; i < array.length; i++) {
        callback(array[i]);
      }
    }
    processArray(items, (item) => {
      result += `Processed ${item}; `;
    });
    return result.trim();
  },
  // problem solver--> 20
  "arguments-object": ({ numbers }: { numbers: string }) => {
    const nums = parseNumArray(numbers);
    function sum() {
      let total = 0;
      for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
      }
      return total;
    }
    return sum.apply(null, nums as any);
  },
  // problem solver--> 21
  "object-method-this": () => {
    const person = {
      name: "Alice",
      greet: function () {
        return `Hello, my name is ${this.name}.`;
      },
    };
    return person.greet();
  },
  // problem solver--> 22
  "this-global-scope": () =>
    `(Conceptual) In a browser in non-strict mode, 'this' in the global scope refers to the 'window' object.`,
  // problem solver--> 23
  "this-arrow-function-lexical": () =>
    `(Conceptual) An arrow function doesn't have its own 'this'. It inherits 'this' from its surrounding (lexical) context. This is useful in methods and callbacks.`,
  // problem solver--> 24
  "function-call-method": () => {
    const person1 = { name: "John" };
    const person2 = { name: "Jane" };
    function greet(this: { name: string }) {
      return `Hello, ${this.name}!`;
    }
    return `Called for person2: "${greet.call(person2)}"`;
  },
  // problem solver--> 25
  "function-apply-method": () => {
    const numbers = [5, 6, 2, 3, 7];
    const max = Math.max.apply(null, numbers);
    return `Max of [${numbers.join(", ")}] is ${max}`;
  },
  // problem solver--> 26
  "function-bind-method": () => {
    const module = {
      x: 42,
      getX: function () {
        return this.x;
      },
    };
    const unboundGetX = module.getX;
    const boundGetX = unboundGetX.bind(module);
    return `Unbound returns undefined. Bound returns: ${boundGetX()}`;
  },
  // problem solver--> 27
  "recursive-countdown": ({ num }: { num: any }) => {
    const startNum = parseNumber(num);
    let result: number[] = [];
    function countdown(n: number) {
      if (n < 1) return;
      result.push(n);
      countdown(n - 1);
    }
    countdown(startNum);
    return result.join(", ");
  },
  // problem solver--> 28
  "first-class-functions": () => {
    const greet = function () {
      return "I'm a first-class function!";
    };
    const myFunc = greet;
    return myFunc();
  },
  // problem solver--> 29
  "named-function-expression": () => {
    const factorial = function fac(n: number): number {
      return n < 2 ? 1 : n * fac(n - 1);
    };
    return `Factorial of 5 is ${factorial(
      5
    )}. The name 'fac' is available inside.`;
  },
  // problem solver--> 30
  "function-shadowing": () => {
    let x = "outer";
    function testShadow() {
      let x = "inner";
      return `Inside function, x is "${x}"`;
    }
    return `${testShadow()}\nOutside function, x is still "${x}"`;
  },
  // problem solver--> 31
  "anonymous-function": () =>
    `(Conceptual) An anonymous function is a function without a name. Often used as callbacks, e.g., \`setTimeout(() => { console.log("Hi"); }, 1000);\``,
  // problem solver--> 32
  "implicit-return-arrow": ({ num }: { num: any }) => {
    const double = (n: number) => n * 2;
    return `Double ${num} is ${double(parseNumber(num))}`;
  },
  // problem solver--> 33
  "function-length-property": () => {
    function example(a: any, b: any, c: any) {}
    return `The function 'example(a, b, c)' has a .length of: ${example.length}`;
  },
  // problem solver--> 34
  "scope-let-vs-var-loop": () =>
    `(Conceptual) A 'for' loop with 'var' and setTimeout will log the final value of 'i' for all callbacks. A 'for' loop with 'let' creates a new binding for each iteration, so each callback logs the correct, expected value.`,
  // problem solver--> 35
  "pass-by-value": () => {
    let a = 10;
    function modify(val: number) {
      val = 20;
    }
    modify(a);
    return `Original 'a' is still ${a}. Primitives are passed by value.`;
  },
  // problem solver--> 36
  "pass-by-reference": () => {
    let obj = { x: 10 };
    function modify(o: { x: number }) {
      o.x = 20;
    }
    modify(obj);
    return `Original 'obj.x' is now ${obj.x}. Objects are passed by reference.`;
  },
  // problem solver--> 37
  "function-constructor": () =>
    `(Conceptual) Syntax: \`const sum = new Function('a', 'b', 'return a + b');\`. This is generally not recommended due to security/performance issues and broken closures.`,
  // problem solver--> 38
  "currying-multiply": ({ a, b, c }: { a: any; b: any; c: any }) => {
    const multiply = (x: number) => (y: number) => (z: number) => x * y * z;
    return multiply(parseNumber(a))(parseNumber(b))(parseNumber(c));
  },
  // problem solver--> 39
  "partial-application": () => {
    function add(a: number, b: number) {
      return a + b;
    }
    const addTen = add.bind(null, 10);
    return `addTen(5) results in ${addTen(5)}`;
  },
  // problem solver--> 40
  "this-event-handler": () =>
    `(Conceptual) In \`button.addEventListener('click', function() { console.log(this); })\`, 'this' refers to the button element itself.`,
  // problem solver--> 41
  "function-as-object-property": () => {
    const config = { id: 1, run: () => "Running the config function!" };
    return config.run();
  },
  // problem solver--> 42
  "hoisting-var-declaration": () =>
    `(Conceptual) Code like \`console.log(myVar); var myVar = 5;\` logs 'undefined' because the declaration \`var myVar;\` is hoisted, but the assignment is not.`,
  // problem solver--> 43
  "temporal-dead-zone-let": () =>
    `(Conceptual) Code like \`console.log(myLet); let myLet = 5;\` WILL throw a ReferenceError. 'let' variables are hoisted but cannot be accessed before their declaration (TDZ).`,
  // problem solver--> 44
  "arrow-function-no-arguments": () =>
    `(Conceptual) A traditional function has an 'arguments' object. An arrow function does not. To get all arguments in an arrow function, you must use rest parameters: \`(...args) => { ... }\`.`,
  // problem solver--> 45
  "iife-with-params": ({ param }: { param: string }) => {
    return (function (p: string) {
      return `The IIFE received: "${p}"`;
    })(param);
  },
  // problem solver--> 46
  "function-overwriting": () => {
    let myFunction = function () {
      return "First definition";
    };
    myFunction = function () {
      return "Second definition";
    };
    return `The result is: "${myFunction()}". The second definition overwrote the first.`;
  },
  // problem solver--> 47
  "callback-hell-conceptual": () =>
    `(Conceptual) Nested callbacks create a "pyramid of doom", making code hard to read. E.g., \`getData(a, (res1) => { getMoreData(res1, (res2) => { ... }); });\`. Promises solve this.`,
  // problem solver--> 48
  "this-binding-new": () => {
    function Person(this: { name: string }, name: string) {
      this.name = name;
    }
    const p = new (Person as any)("Alice");
    return `The new object has name: ${p.name}`;
  },
  // problem solver--> 49
  "this-strict-mode": () =>
    `(Conceptual) In strict mode ('use strict';), 'this' inside a regular function call is 'undefined', not the global 'window' object. This prevents accidental modification of global variables.`,
  // problem solver--> 50
  "function-name-property": () => {
    function namedFunction() {}
    const anonFunc = () => {};
    return `Named: ${namedFunction.name}, Anonymous (variable name): ${anonFunc.name}`;
  },
  // problem solver--> 51
  "generator-function-basic": () => {
    function* numberGenerator() {
      yield 1;
      yield 2;
    }
    const gen = numberGenerator();
    return `Results: ${gen.next().value}, ${gen.next().value}`;
  },
  // problem solver--> 52
  "generator-function-iterator": () => {
    function* numberGenerator() {
      yield "a";
      yield "b";
      yield "c";
    }
    const gen = numberGenerator();
    const first = gen.next();
    const second = gen.next();
    return `First value: ${first.value}, Second done: ${second.done}`;
  },
  // problem solver--> 53
  "lexical-environment-conceptual": () =>
    `(Conceptual) A Lexical Environment is an internal data structure that holds identifier-variable mappings. It has two parts: 1) The Environment Record (local variables). 2) A reference to the outer (parent) lexical environment, forming the scope chain.`,
  // problem solver--> 54
  "this-with-settimeout": () =>
    `(Conceptual) In an object method, \`setTimeout(function() { console.log(this.name) })\` fails because \`this\` is the global object. Solution 1: \`const self = this;\` outside. Solution 2: Use an arrow function \`() => console.log(this.name)\`.`,
  // problem solver--> 55
  "function-composition": ({ num }: { num: any }) => {
    const double = (x: number) => x * 2;
    const addTen = (x: number) => x + 10;
    const compose = (f: Function, g: Function) => (x: any) => f(g(x));
    const composedFunc = compose(addTen, double);
    return composedFunc(parseNumber(num));
  },
  // problem solver--> 56
  "function-piping": ({ num }: { num: any }) => {
    const double = (x: number) => x * 2;
    const addTen = (x: number) => x + 10;
    const pipe =
      (...fns: Function[]) =>
      (x: any) =>
        fns.reduce((v, f) => f(v), x);
    const pipedFunc = pipe(double, addTen);
    return pipedFunc(parseNumber(num));
  },
  // problem solver--> 57
  "side-effects-conceptual": () =>
    `(Conceptual) A side effect is any interaction a function has with the outside world. Pure functions have no side effects. Examples of side effects: Modifying a global variable, ` +
    "`console.log`" +
    `, network requests, changing the DOM.`,
  // problem solver--> 58
  "memoization-closure": () => {
    const memoize = (fn: Function) => {
      const cache: Record<string, any> = {};
      return (...args: any[]) => {
        const key = JSON.stringify(args);
        if (key in cache) return `(from cache) ${cache[key]}`;
        const result = fn(...args);
        cache[key] = result;
        return result;
      };
    };
    const slowAdd = (a: number, b: number) => a + b;
    const memoizedAdd = memoize(slowAdd);
    memoizedAdd(2, 3);
    return `Second call: ${memoizedAdd(2, 3)}`;
  },
  // problem solver--> 59
  "block-scope-in-loop": () =>
    `(Conceptual) In a \`for (let i=0;...)\` loop, each iteration gets its own unique \`i\` variable in a new block scope. This is why closures created inside the loop work as expected.`,
  // problem solver--> 60
  "arrow-function-no-prototype": () => {
    const myArrow = () => {};
    try {
      new (myArrow as any)();
    } catch (e: any) {
      return `Has .prototype? ${myArrow.hasOwnProperty(
        "prototype"
      )}. Error on 'new': ${e.message}`;
    }
    return `No error was thrown, which is unexpected.`;
  },
  // problem solver--> 61
  "this-in-nested-function": () => {
    const obj = {
      name: "MyObj",
      process: function () {
        function nested() {
          return (this as any)?.name;
        }
        return `Nested 'this' is: ${nested()}`;
      },
    };
    return obj.process();
  },
  // problem solver--> 62
  "default-param-evaluation": () => {
    let x = 1;
    function test(a = x) {
      return a;
    }
    x = 2;
    return `Result is ${test()}. The default value is evaluated when the function is called.`;
  },
  // problem solver--> 63
  "function-arity": () => {
    function func(a: any, b: any) {}
    const arrow = (a: any, b: any, c: any) => {};
    return `func.length: ${func.length}, arrow.length: ${arrow.length}`;
  },
  // problem solver--> 64
  "iife-for-private-methods": () => {
    const calculator = (function () {
      function add(a: number, b: number) {
        return a + b;
      } // private
      return {
        calculate: function (a: number, b: number) {
          return add(a, b);
        }, // public
      };
    })();
    return `Result: ${calculator.calculate(10, 5)}`;
  },
  // problem solver--> 65
  "function-as-a-value": () => {
    const add = (a: number, b: number) => a + b;
    const sub = (a: number, b: number) => a - b;
    const ops = [add, sub];
    return `Result of ops[1](10, 3): ${ops[1](10, 3)}`;
  },
  // problem solver--> 66
  "variadic-function": ({ numbers }: { numbers: string }) => {
    const findMax = (...args: number[]) => Math.max(...args);
    return findMax(...parseNumArray(numbers));
  },
  // problem solver--> 67
  "execution-context-conceptual": () =>
    `(Conceptual) When a function is called, a new Execution Context is created. Phase 1 (Creation): Memory is allocated for variables (hoisting), scope chain is defined, \`this\` is determined. Phase 2 (Execution): Code is run line by line.`,
  // problem solver--> 68
  "this-in-callback": () =>
    `(Conceptual) \`const obj = { name: 'X', process() { [1].forEach(function(){console.log(this.name)}) } }\`. Inside forEach, \`this\` is not \`obj\`. Using an arrow function fixes this.`,
  // problem solver--> 69
  "function-hoisting-pitfall": () =>
    `(Conceptual) Some browsers hoist function declarations from within blocks to the top of the function, which can be confusing. E.g., a function defined inside an \`if (false) { ... }\` block might still exist (but be undefined) outside it. Best practice: use function expressions.`,
  // problem solver--> 70
  "call-vs-apply-vs-bind": () =>
    `(Conceptual) call: invokes immediately, args are comma-separated. apply: invokes immediately, args are in an array. bind: returns a NEW function with a bound \`this\`, does not invoke.`,
  // problem solver--> 71
  "currying-vs-partial-application": () =>
    `(Conceptual) Currying: Transforms \`f(a,b,c)\` into \`f(a)(b)(c)\`. Partial Application: Provides some args to \`f(a,b,c)\` to get a new function, e.g., \`g(b,c)\` by fixing 'a'.`,
  // problem solver--> 72
  "function-overloading-conceptual": () =>
    `(Conceptual) JavaScript doesn't have it. A second function declaration with the same name overwrites the first. To mimic it, check the type or number of arguments inside the function: \`if (arguments.length === 1) { ... }\`.`,
  // problem solver--> 73
  "self-referencing-function": ({ num }: { num: any }) => {
    const factorial = function fac(n: number): number {
      if (n <= 1) return 1;
      return n * fac(n - 1);
    };
    return factorial(parseNumber(num));
  },
  // problem solver--> 74
  "closure-scope-preservation": () => {
    function outer() {
      let x = 1;
      const inner = () => x;
      x = 2;
      return inner;
    }
    return `Closure returns the current value: ${outer()()}`;
  },
  // problem solver--> 75
  "higher-order-function-wrapper": () => {
    const withLogging =
      (fn: Function) =>
      (...args: any[]) => {
        console.log(`Calling ${fn.name} with`, args);
        const result = fn(...args);
        console.log("Result:", result);
        return result;
      };
    const add = (a: number, b: number) => a + b;
    const loggedAdd = withLogging(add);
    return `Result of loggedAdd(3, 4): ${loggedAdd(
      3,
      4
    )} (Check console for logs)`;
  },
  // problem solver--> 76
  "new-function-scope": () =>
    `(Conceptual) \`let x = 1; const fn = new Function('return x');\` This throws a ReferenceError because the function created has global scope, not a closure over the local scope.`,
  // problem solver--> 77
  "generator-function-return": () => {
    function* gen() {
      yield 1;
      return 2;
    }
    const g = gen();
    const first = g.next();
    const second = g.next();
    return `Final yielded value: ${second.value}, Is done: ${second.done}`;
  },
  // problem solver--> 78
  "generator-yield-delegation": () => {
    function* genA() {
      yield 1;
      yield 2;
    }
    function* genB() {
      yield* genA();
      yield 3;
    }
    return `Results: ${[...genB()].join(", ")}`;
  },
  // problem solver--> 79
  "async-function-return": () => {
    async function getData() {
      return "Data!";
    }
    const p = getData();
    return `Function returned a Promise: ${p instanceof Promise}`;
  },
  // problem solver--> 80
  "this-in-object-literal": () => {
    const obj = {
      name: "Test",
      getName() {
        return this.name;
      },
    };
    return obj.getName();
  },
  // problem solver--> 81
  "function-as-property-value": () => {
    const operations = {
      add: (a: number, b: number) => a + b,
      subtract: (a: number, b: number) => a - b,
    };
    return `Result: ${operations.add(10, 5)}`;
  },
  // problem solver--> 82
  "call-stack-conceptual": () =>
    `(Conceptual) When C() is called, the stack is [global, A, B, C]. When C returns, it's popped off. Then B is popped, then A. This LIFO (Last-In, First-Out) structure manages execution flow.`,
  // problem solver--> 83
  "function-binding-precedence": () =>
    `(Conceptual) 1. \`new\`: \`this\` is the new object. 2. \`bind\`: \`this\` is the bound object. 3. Method call (\`obj.fn()\`), \`this\` is \`obj\`. 4. Default: global object (or undefined in strict mode).`,
  // problem solver--> 84
  "polyfill-bind-method": () =>
    `(Conceptual) A simple polyfill would be: \`Function.prototype.myBind = function(ctx) { const fn = this; return function() { fn.apply(ctx); }; }\`. It uses a closure to store the context (\`ctx\`).`,
  // problem solver--> 85
  "default-params-and-scope": () => {
    const x = "global";
    function test(
      a = x,
      b = function () {
        return x;
      }
    ) {
      const x = "inner";
      return b();
    }
    return `Result: ${test()}. The default param's closure captures the global 'x', not the inner 'x'.`;
  },
  // problem solver--> 86
  "arrow-function-and-this-in-object": () =>
    `(Conceptual) \`const obj = { name: 'X', getName: () => this.name }\`. Here, \`this\` is not \`obj\`. It's inherited from the global scope, so \`obj.getName()\` will likely not work as expected.`,
  // problem solver--> 87
  "function-purity-and-arrays": ({ arr }: { arr: string }) => {
    const original = parseStrArray(arr);
    const impureSort = (a: string[]) => a.sort();
    const pureSort = (a: string[]) => [...a].sort();
    const pureResult = pureSort(original);
    impureSort(original);
    return `Pure result: [${pureResult.join(
      ", "
    )}]. Original after impure sort: [${original.join(", ")}]`;
  },
  // problem solver--> 88
  "iife-with-global-variable": () =>
    `(Conceptual) A common pattern in older libraries: \`(function(window) { /* code uses window */ })(this);\`. This makes the dependency on the global object explicit.`,
  // problem solver--> 89
  "function-with-optional-params": ({ name }: { name: string }) => {
    function greet(name: string, greeting?: string) {
      const finalGreeting = greeting === undefined ? "Hello" : greeting;
      return `${finalGreeting}, ${name}!`;
    }
    return greet(name);
  },
  // problem solver--> 90
  "rest-params-vs-arguments": () =>
    `(Conceptual) Rest params are a true Array, so you can use .map(), .filter() etc. The \`arguments\` object is only array-like. Rest params can also be used with arrow functions, while \`arguments\` cannot.`,
  // problem solver--> 91
  "named-args-with-destructuring": () => {
    function createUser({
      name,
      age,
      role = "guest",
    }: {
      name: string;
      age: number;
      role?: string;
    }) {
      return `Created ${name}, ${age}, as ${role}.`;
    }
    return createUser({ name: "Admin", age: 99 });
  },
  // problem solver--> 92
  "function-to-string": () => {
    function add(a: number, b: number) {
      return a + b;
    }
    return add.toString();
  },
  // problem solver--> 93
  "function-scope-vs-global-scope": () =>
    `(Conceptual) \`let g=1; function fn() { let f=2; console.log(g); } fn(); console.log(f);\`. The first log works (fn can see global). The second throws a ReferenceError (global can't see fn's scope).`,
  // problem solver--> 94
  "block-scope-with-const": () =>
    `(Conceptual) Like \`let\`, \`const\` is block-scoped. \`if (true) { const x=1; } console.log(x);\` will throw a ReferenceError. Additionally, \`const x=1; x=2;\` will throw a TypeError.`,
  // problem solver--> 95
  "higher-order-function-foreach": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    let result = "";
    function myForEach(a: any[], cb: (item: any) => void) {
      for (let i = 0; i < a.length; i++) {
        cb(a[i]);
      }
    }
    myForEach(array, (item) => {
      result += item.toUpperCase() + " ";
    });
    return result.trim();
  },
  // problem solver--> 96
  "function-currying-practical": ({ msg }: { msg: string }) => {
    const log = (level: string) => (message: string) =>
      `[${level.toUpperCase()}] - ${message}`;
    const logError = log("error");
    return logError(msg);
  },
  // problem solver--> 97
  "this-in-event-listener-arrow": () =>
    `(Conceptual) In a class method, using \`btn.addEventListener('click', () => { this.update() })\` works because the arrow function inherits the class instance's \`this\`.`,
  // problem solver--> 98
  "function-hoisting-with-var": () =>
    `(Conceptual) ` +
    "`try { myFunc(); } catch(e) { console.log(e.name); } var myFunc = () => {};` will log 'TypeError' because `myFunc` is hoisted as a variable and is `undefined` when called, not a function.",
  // problem solver--> 99
  "destructuring-from-function-return-array": () => {
    const getCoords = () => [5, 10];
    const [x, y] = getCoords();
    return `x=${x}, y=${y}`;
  },
  // problem solver--> 100
  "destructuring-from-function-return-object": () => {
    const getUser = () => ({ id: 123, name: "Frank" });
    const { id, name } = getUser();
    return `id=${id}, name=${name}`;
  },
  // problem solver--> 101
  "redeclare-var": () => {
    var x = 1;
    var x = 2;
    return `The final value of x is ${x}. No error is thrown.`;
  },
  // problem solver--> 102
  "redeclare-let-error": () =>
    `(Conceptual) Code like \`let x = 1; let x = 2;\` in the same scope throws a SyntaxError: Identifier 'x' has already been declared.`,
  // problem solver--> 103
  "var-no-block-scope": () =>
    `(Conceptual) \`if (true) { var noBlock = "Visible"; } console.log(noBlock);\` This logs "Visible" because \`var\` is function-scoped (or global) and not block-scoped.`,
  // problem solver--> 104
  "const-array-reassignment-error": () => {
    try {
      const arr = [1, 2];
      // arr = [3, 4];
      throw new TypeError("Assignment to constant variable.");
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 105
  "destructure-skip-array-items": () => {
    const [a, , c] = [1, 2, 3];
    return `a=${a}, c=${c}. The second item was skipped.`;
  },
  // problem solver--> 106
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
  // problem solver--> 107
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
  // problem solver--> 108
  "window-object-global-var": () =>
    `(Conceptual - Browser) \`var myGlobal = 1;\` makes \`window.myGlobal\` equal to 1.`,
  // problem solver--> 109
  "window-object-global-let": () =>
    `(Conceptual - Browser) \`let myGlobal = 1;\` does NOT create a property on the window object. \`window.myGlobal\` would be undefined.`,
  // problem solver--> 110
  "undeclared-variable-global": () =>
    `(Conceptual) In non-strict mode, \`function test() { myLeak = "oops"; }\` creates a global variable \`myLeak\` when called.`,
  // problem solver--> 111
  "strict-mode-undeclared": () =>
    `(Conceptual) In strict mode, \`'use strict'; function test() { myLeak = "oops"; }\` throws a ReferenceError, preventing the global leak.`,
  // problem solver--> 112
  "scope-of-catch-block": () => {
    try {
      throw new Error("inner");
    } catch (err: any) {
      return `Inside catch, err is "${err.message}". Outside, err is not defined.`;
    }
  },
  // problem solver--> 113
  "const-mutate-object": () => {
    const person = { name: "John" };
    person.name = "Jane";
    return `The object's name is now: ${person.name}`;
  },
  // problem solver--> 114
  "const-mutate-array": () => {
    const arr = [1, 2];
    arr.push(3);
    arr[0] = 0;
    return `The array is now: [${arr.join(", ")}]`;
  },
  // problem solver--> 115
  "object-freeze": () => {
    "use strict";
    const frozenObj = { a: 1 };
    Object.freeze(frozenObj);
    try {
      // frozenObj.a = 2;
      throw new TypeError(
        "Cannot assign to read only property 'a' of object '#<Object>'"
      );
    } catch (e: any) {
      return `Caught expected error in strict mode: ${e.message}`;
    }
  },
  // problem solver--> 116
  "const-in-for-of-loop": () => {
    const arr = [1, 2, 3];
    let result = "";
    for (const item of arr) {
      result += item;
    }
    return `Using const in a for...of loop works. Result: ${result}`;
  },
  // problem solver--> 117
  "const-in-for-loop-error": () =>
    `(Conceptual) \`for (const i = 0; i < 3; i++)\` throws a TypeError because the loop attempts to reassign \`i\` (i++).`,
  // problem solver--> 118
  "destructure-array-rest": () => {
    const [first, ...rest] = [1, 2, 3, 4];
    return `First: ${first}, Rest: [${rest.join(", ")}]`;
  },
  // problem solver--> 119
  "destructure-object-rest": () => {
    const { id, ...rest } = { id: 1, name: "Product", price: 99 };
    return `ID: ${id}, Rest: ${JSON.stringify(rest)}`;
  },
  // problem solver--> 120
  "destructure-object-alias": () => {
    const { name: userName } = { name: "Charlie" };
    return `The new variable name is userName: "${userName}"`;
  },
  // problem solver--> 121
  "destructure-array-defaults": () => {
    const [a = 1, b = 2] = [10];
    return `a=${a} (from array), b=${b} (from default)`;
  },
  // problem solver--> 122
  "destructure-object-defaults": () => {
    const { a = 1, b = 2 } = { a: 10 };
    return `a=${a} (from object), b=${b} (from default)`;
  },
  // problem solver--> 123
  "destructure-nested-object": () => {
    const {
      user: { name },
    } = { user: { name: "David" } };
    return `Extracted nested name: ${name}`;
  },
  // problem solver--> 124
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
  // problem solver--> 125
  "destructure-function-params-array": () => {
    function processCoords([x, y]: [number, number]) {
      return `x=${x}, y=${y}`;
    }
    return processCoords([10, 20]);
  },
  // problem solver--> 126
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
  // problem solver--> 127
  "destructure-string": () => {
    const [a, b] = "Hello";
    return `First char: ${a}, Second char: ${b}`;
  },
  // problem solver--> 128
  "destructure-with-defaults-and-alias": () => {
    const { name: userName = "Guest" } = {};
    return `Result is: ${userName}`;
  },
  // problem solver--> 129
  "destructure-null-error": () => {
    try {
      const source = null;
      // const { a } = source;
      throw new TypeError(
        "Cannot destructure property 'a' of 'null' as it is null."
      );
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 130
  "destructure-return-with-defaults": (): string => {
    const getPartialData = (): { a: number } => ({ a: 1 });
    const { a, b = "default" }: { a: number; b?: string } = getPartialData();
    return `a=${a}, b=${b}`;
  },
  // problem solver--> 131
  "let-block-scope-in-standalone-block": () => {
    let x = "outer";
    {
      let x = "inner";
    }
    return `The final value of x is "${x}". The inner 'x' did not affect it.`;
  },
  // problem solver--> 132
  "dynamic-property-creation": () => {
    const propName = "dynamicKey";
    const obj = { [propName]: "Hello World" };
    return `Object created: ${JSON.stringify(obj)}`;
  },
  // problem solver--> 133
  "primitive-wrapper-objects": () =>
    `(Conceptual) When you do \`"hello".length\`, JS temporarily creates a \`new String("hello")\` object behind the scenes, accesses the \`.length\` property, and then discards the object. This is called autoboxing.`,
  // problem solver--> 134
  "symbol-primitive-type": (): string => {
    const sym1: symbol = Symbol("desc");
    const sym2: symbol = Symbol("desc");
    return `sym1 === sym2 is ${
      sym1 === sym2
    }. Symbols are always unique. Type is: ${typeof sym1}.`;
  },
  // problem solver--> 135
  "bigint-primitive-type": () => {
    const maxSafeInt = BigInt(Number.MAX_SAFE_INTEGER);
    const largerThanMax = maxSafeInt + 2n;
    return `A very large number: ${largerThanMax.toString()}n. Its type is ${typeof largerThanMax}.`;
  },
  // problem solver--> 136
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
  // problem solver--> 137
  "hoisting-class-declaration": () =>
    `(Conceptual) \`new MyClass(); class MyClass {}\` throws a ReferenceError. Classes are hoisted but are in the TDZ.`,
  // problem solver--> 138
  "object-freeze-nested": () => {
    const user = { name: "Alice", details: { age: 30 } };
    Object.freeze(user);
    user.details.age = 31;
    return `user.details.age was successfully mutated to ${user.details.age}. Freeze is shallow.`;
  },
  // problem solver--> 139
  "object-seal": () => {
    "use strict";
    const sealedObj = { a: 1 };
    Object.seal(sealedObj);
    sealedObj.a = 2;
    return `Modified existing property: a=${sealedObj.a}. Adding/deleting properties is prevented.`;
  },
  // problem solver--> 140
  "object-preventextensions": () => {
    const obj = { a: 1 };
    Object.preventExtensions(obj);
    return `Adding new properties is prevented. Existing properties can still be modified or deleted.`;
  },
  // problem solver--> 141
  "destructure-assignment-without-declaration": () => {
    let a, b;
    ({ a, b } = { a: 1, b: 2 });
    return `Assigned to existing variables: a=${a}, b=${b}. Note the required parentheses.`;
  },
  // problem solver--> 142
  "destructure-dynamic-property-name": () =>
    `(Conceptual) Destructuring with dynamic keys is not possible. You must use bracket notation: \`const prop = 'name'; const value = obj[prop];\`.`,
  // problem solver--> 143
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
  // problem solver--> 144
  "shadowing-in-catch-block": () =>
    `(Conceptual) Before ES2019, \`catch(e)\` would leak \`e\` if an outer variable with the same name existed. Now, \`catch\` has its own block scope, so it cleanly shadows the outer variable.`,
  // problem solver--> 145
  "tdz-and-closures": () =>
    `(Conceptual) \`function test() { const fn = () => myLet; fn(); let myLet = 5; }\` would throw a ReferenceError because \`fn\` is called while \`myLet\` is in the TDZ.`,
  // problem solver--> 146
  "tdz-with-default-params": () =>
    `(Conceptual) \`function test(a = b, b = 5) { ... }\` throws a ReferenceError because \`b\` is in its TDZ when \`a\` is being initialized.`,
  // problem solver--> 147
  "garbage-collection-conceptual": () =>
    `(Conceptual) JavaScript uses an automatic memory management system called a garbage collector. It periodically finds memory which is no longer reachable from any part of the program (e.g., variables that have gone out of scope) and frees it.`,
  // problem solver--> 148
  "memory-leak-with-closures": () =>
    `(Conceptual) A memory leak can occur if an outer function creates a large variable and an inner function (closure) is returned and kept alive (e.g., as an event listener). The closure holds a reference to its scope, preventing the large variable from being garbage collected.`,
  // problem solver--> 149
  "let-in-switch-case": () =>
    `(Conceptual) \`switch(1) { case 1: let x=1; break; case 2: let x=2; break; }\` throws a SyntaxError because the whole \`switch\` is one block. You must wrap each \`case\` in its own \`{...}\` block to use \`let\` with the same name.`,
  // problem solver--> 150
  "tdz-and-function-parameters": () =>
    `(Conceptual) \`function test(a = 1, b = a) { ... }\` is valid because \`a\` is initialized before \`b\` needs it. However, \`function test(a = b, b = 1) { ... }\` would throw a ReferenceError if called with no arguments.`,
  // problem solver--> 151
  "deep-freeze-utility-conceptual": () =>
    `(Conceptual) A \`deepFreeze(obj)\` function would iterate over an object's keys. For each value that is also an object, it would recursively call \`deepFreeze\` on it. Finally, it would call \`Object.freeze(obj)\` on the top-level object.`,
  // problem solver--> 152
  "hoisting-across-scripts-conceptual": () =>
    `(Conceptual) If you have two script tags, \`<script>console.log(x);</script><script>var x = 5;</script>\`, the first script will throw a ReferenceError. Hoisting is confined within individual scripts or modules.`,
  // problem solver--> 153
  "memory-lifecycle-conceptual": () =>
    `(Conceptual) 1. Allocate: JS handles memory allocation when you create variables/objects. 2. Use: Your code reads and writes to this memory. 3. Release: The garbage collector automatically frees memory that is no longer reachable.`,
  // problem solver--> 154
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
  // problem solver--> 155
  "immutable-update-const": () => {
    const user = { name: "Alex", role: "user" };
    const adminUser = { ...user, role: "admin" };
    return `Original user is unchanged. New user: ${JSON.stringify(adminUser)}`;
  },
  // problem solver--> 156
  "var-hoisting-pitfall-2": () => {
    function test() {
      if (false) {
        var x = 5;
      }
      return `The value of x is: ${x}`;
    }
    return test();
  },
  // problem solver--> 157
  "destructure-regex-groups": () => {
    const dateString = "2024-07-26";
    const regex = /(\d{4})-(\d{2})-(\d{2})/;
    const [, year, month, day] = dateString.match(regex) || [];
    return `Year: ${year}, Month: ${month}, Day: ${day}`;
  },
  // problem solver--> 158
  "uninitialized-const-in-loop": () =>
    `(Conceptual) \`for (const x of [])\` is okay because the loop may not run, but \`for (const x; ; )\` is a syntax error because \`const\` requires an initializer.`,
  // problem solver--> 159
  "function-param-scope": (): string => {
    const x = "outer";
    function test(xParam: string = "default"): string {
      const inner = "inner";
      return `Body scope sees: ${inner}`;
    }
    return `${test()}. Outer scope is still: ${x}`;
  },
  // problem solver--> 160
  "destructure-sparse-array": () => {
    const sparse = [1, , 3];
    const [a, b = "default", c] = sparse;
    return `a=${a}, b=${b} (because slot was empty/undefined), c=${c}`;
  },
  // problem solver--> 161
  "block-scope-for-let-in-loop": () =>
    `(Conceptual) The spec for loops says that \`let\` declarations in the head of a loop are treated as if they are declared fresh for each iteration, preserving the value for closures.`,
  // problem solver--> 162
  "implicit-global-in-function-call": () =>
    `(Conceptual) \`var name = 'global'; const obj = { name: 'obj', getName: function() { return this.name; } }; const fn = obj.getName; fn();\` In non-strict mode, this returns 'global'.`,
  // problem solver--> 163
  "practical-let-event-listener": () =>
    `(Conceptual) You would attach a click listener. Inside, a \`let isToggled = false;\` variable declared outside the listener would be flipped on each click: \`isToggled = !isToggled;\`.`,
  // problem solver--> 164
  "practical-const-function-expression": () => {
    const greet = () => "Hello!";
    return `The function assigned to 'greet' cannot be reassigned. Result: "${greet()}"`;
  },
  // problem solver--> 165
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
  // problem solver--> 166
  "object-is-vs-triple-equals": () => {
    const compare = (a: unknown, b: unknown) =>
      `===: ${a === b}, Object.is: ${Object.is(a, b)}`;
    const nanResult = compare(NaN, NaN);
    const zeroResult = compare(0, -0);
    return `NaN comparison -> ${nanResult}\n0/-0 comparison -> ${zeroResult}`;
  },
  // problem solver--> 167
  "primitive-vs-reference-assignment": () => {
    let a = 10;
    let b = a;
    b = 20;
    let obj1 = { val: 10 };
    let obj2 = obj1;
    obj2.val = 20;
    return `Primitive: a=${a}. Object: obj1.val=${obj1.val}`;
  },
  // problem solver--> 168
  "hoisting-pitfall-with-blocks": () =>
    `(Conceptual) In non-strict mode, \`if(true){ function f(){} }\` might be hoisted to the top of the containing function, which can be very confusing. Strict mode makes this behavior more predictable (block-scoped).`,
  // problem solver--> 169
  "destructuring-iterable": () => {
    const mySet = new Set(["a", "b", "c"]);
    const [first, second] = mySet;
    return `First from Set: ${first}, Second: ${second}`;
  },
  // problem solver--> 170
  "const-and-garbage-collection": () =>
    `(Conceptual) \`const\` has no effect on garbage collection. An object is collected when it is no longer reachable. A \`const\` variable going out of scope makes its object eligible for GC just like a \`let\` variable.`,
  // problem solver--> 171
  "var-in-eval-scope": () => {
    function demo(): string {
      eval("var hidden = 'I escaped!';");
      // @ts-expect-error - hidden is created dynamically
      return typeof hidden !== "undefined" ? hidden : "not defined";
    }
    return `Eval created variable value: ${demo()}`;
  },
  // problem solver--> 172
  "let-in-eval-scope": () => {
    function test() {
      eval("let x = 1;");
    }
    return `\`let\` in eval is scoped only to the eval string and does not leak.`;
  },
  // problem solver--> 173
  "var-without-window": () =>
    `(Conceptual) In a Node.js script, \`var x = 5;\` makes \`x\` a global, but \`global.x\` will be 5. Inside a Node module, top-level \`var\` is scoped to the module, not global.`,
  // problem solver--> 174
  "destructuring-and-prototypes": () => {
    const proto = { inherited: "yes" };
    const obj = Object.create(proto);
    obj.own = "no";
    const { inherited, own } = obj;
    return `Own: ${own}, Inherited: ${inherited}`;
  },
  // problem solver--> 175
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
  // problem solver--> 176
  "using-symbols-for-metadata": () => {
    const idSymbol = Symbol("id");
    const user: { name: string; [key: symbol]: any } = { name: "Test" };
    user[idSymbol] = 123;
    return `JSON.stringify ignores symbols: ${JSON.stringify(
      user
    )}. Access directly: user[idSymbol]=${user[idSymbol]}.`;
  },
  // problem solver--> 177
  "const-for-math-constants": () => {
    const PI = 3.14159;
    const radius = 5;
    const area = PI * radius * radius;
    return `Area of a circle with radius 5 is ${area}`;
  },
  // problem solver--> 178
  "destructure-react-props": () =>
    `(Conceptual) In React: \`function User({ name, avatarUrl }) { return <div><img src={avatarUrl} />{name}</div>; }\`. This destructures the props object directly in the function signature.`,
  // problem solver--> 179
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
  // problem solver--> 180
  "tdz-in-class-bodies": () =>
    `(Conceptual) \`class MyClass { prop1 = this.prop2; prop2 = 5; }\` would throw an error if you tried to instantiate it, because \`this.prop2\` is accessed before it's initialized.`,
  // problem solver--> 181
  "shadowing-with-function-params": () => {
    let x = "outer";
    function test(x: string) {
      return `Inside, x is ${x}`;
    }
    return test("inner");
  },
  // problem solver--> 182
  "is-frozen-check": () => {
    const obj = { a: 1 };
    Object.freeze(obj);
    return `Is the object frozen? ${Object.isFrozen(obj)}`;
  },
  // problem solver--> 183
  "is-sealed-check": () => {
    const obj = { a: 1 };
    Object.seal(obj);
    return `Is the object sealed? ${Object.isSealed(obj)}`;
  },
  // problem solver--> 184
  "is-extensible-check": () => {
    const obj = { a: 1 };
    Object.preventExtensions(obj);
    return `Is the object extensible? ${!Object.isExtensible(obj)}`;
  },
  // problem solver--> 185
  "destructuring-and-type-coercion": () => {
    const { val } = { val: "0" };
    return `The destructured 'val' is the string "0", not the number 0. No coercion occurs.`;
  },
  // problem solver--> 186
  "global-scope-pollution": () =>
    `(Conceptual) If Library A defines \`var myUtil = ...;\` and Library B also defines \`var myUtil = ...;\`, the second one will overwrite the first, potentially breaking Library A. This is global scope pollution.`,
  // problem solver--> 187
  "using-block-scope-for-privacy": () => {
    let result;
    {
      let temp = 5;
      let helper = 10;
      result = temp + helper;
    }
    return `The result is ${result}. Helper variables were garbage collected.`;
  },
  // problem solver--> 188
  "hoisting-let-and-const-conceptual": () =>
    `(Conceptual) \`let\` and \`const\` are hoisted. The engine knows about them at the top of the scope. But a check prevents access before the declaration line. This un-initializable state is the TDZ.`,
  // problem solver--> 189
  "destructuring-computed-property": () => {
    const key = "name";
    const { [key]: personName } = { name: "Ivy" };
    return `Extracted value using computed property: ${personName}`;
  },
  // problem solver--> 190
  "reserved-words-as-variables": () =>
    `(Conceptual) \`let for = 5;\` is a SyntaxError because 'for' is a reserved keyword.`,
  // problem solver--> 191
  "infinity-and-negative-infinity": () => {
    return `1 / 0 = ${1 / 0}. -1 / 0 = ${-1 / 0}.`;
  },
  // problem solver--> 192
  "reassigning-object-param": () => {
    let myObj = { val: 10 };
    function reassign(obj: { val: number }) {
      obj = { val: 20 };
    }
    reassign(myObj);
    return `The original object is unchanged: ${JSON.stringify(myObj)}`;
  },
  // problem solver--> 193
  "const-enum-pattern": () => {
    const STATUS = Object.freeze({
      PENDING: "pending",
      COMPLETE: "complete",
      FAILED: "failed",
    });
    return `Current status: ${STATUS.PENDING}`;
  },
  // problem solver--> 194
  "destructuring-and-rename-rest": () => {
    const { id: userID, ...otherInfo } = { id: 99, name: "Zoe", active: true };
    return `Renamed ID: ${userID}, Other Info: ${JSON.stringify(otherInfo)}`;
  },
  // problem solver--> 195
  "global-scope-without-window": () =>
    `(Conceptual) Inside a Web Worker script, \`self\` refers to the worker's global scope (\`WorkerGlobalScope\`). \`self === this\` is true. It does not have access to the main thread's \`window\` object.`,
  // problem solver--> 196
  "automatic-semicolon-insertion": () => {
    function test(): undefined | { value: number } {
      return;
      {
        value: 1;
      }
    }
    return `The function returns: ${test()}. The object is unreachable code.`;
  },
  // problem solver--> 197
  "global-scope-modules-vs-scripts": () =>
    `(Conceptual) Summary: In a classic script, \`var x\` -> \`window.x\`. In a module, top-level declarations are scoped to the file. This prevents global pollution.`,
  // problem solver--> 198
  "destructuring-primitive-wrappers": () => {
    const { length } = "hello";
    return `The length property was destructured from the String wrapper object: ${length}`;
  },
  // problem solver--> 199
  "shadowing-built-in-globals": () => {
    let Array = "shadowed";
    return `The global Array constructor was shadowed. typeof Array is now: ${typeof Array}`;
  },
  // problem solver--> 200
  "var-vs-let-vs-const-summary": () =>
    `(Conceptual) var: function-scoped, hoisted (with \`undefined\`), can be redeclared. let: block-scoped, TDZ, cannot be redeclared. const: block-scoped, TDZ, cannot be redeclared or reassigned.`,
};
