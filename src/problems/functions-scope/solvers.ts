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

// State for impure function
let externalCounter = 0;

export const solvers: Record<string, Function> = {
  "simple-function-return": () => {
    function greet() {
      return "Hello, Functions!";
    }
    return greet();
  },
  "function-with-parameters": ({ a, b }: { a: any; b: any }) => {
    function multiply(x: number, y: number) {
      return x * y;
    }
    return multiply(parseNumber(a), parseNumber(b));
  },
  "arrow-function-syntax": ({ num }: { num: any }) => {
    const square = (n: number) => n * n;
    return square(parseNumber(num));
  },
  "function-declaration": () => {
    const result = declaredFunction();
    function declaredFunction() {
      return "This function was hoisted!";
    }
    return result;
  },
  "function-expression": () => {
    const expressionFunction = function () {
      return "This is a function expression.";
    };
    return expressionFunction();
  },
  "default-parameters": ({ name }: { name: string }) => {
    function greet(userName = "Guest") {
      return `Hello, ${userName}!`;
    }
    return greet(name || undefined);
  },
  "rest-parameters-sum": ({ numbers }: { numbers: string }) => {
    const nums = parseNumArray(numbers);
    function sum(...args: number[]) {
      return args.reduce((total, current) => total + current, 0);
    }
    return sum(...nums);
  },
  "iife-pattern": () => {
    return (function () {
      const privateVar = "I'm private!";
      return `This IIFE returned: "${privateVar}"`;
    })();
  },
  "hoisting-declaration": () =>
    `The solver for 'function-declaration' demonstrates this. Calling declaredFunction() before it's defined works because the entire function is hoisted.`,
  "hoisting-expression-var": () =>
    `(Conceptual) Code like \`myFunc(); var myFunc = () => {}\` throws a TypeError. The variable \`myFunc\` is hoisted and is 'undefined' at call time, not a function.`,
  "global-scope": () =>
    `(Conceptual) A variable declared outside any function is global. A function can access it. E.g., \`let globalVar = "Hi"; function test() { console.log(globalVar); }\``,
  "function-scope": () =>
    `(Conceptual) A variable with 'var' inside a function is only accessible within that function. Accessing it outside results in a ReferenceError.`,
  "block-scope-let": () =>
    `(Conceptual) A variable with 'let' inside a block {} is only accessible within that block. Accessing it outside results in a ReferenceError.`,
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
  "pure-function": ({ num }: { num: any }) => {
    const double = (n: number) => n * 2;
    return double(parseNumber(num));
  },
  "impure-function": () => {
    function incrementExternal() {
      externalCounter++;
      return `External counter is now: ${externalCounter}`;
    }
    return incrementExternal();
  },
  "higher-order-function-argument": ({ num }: { num: any }) => {
    const square = (n: number) => n * n;
    const applyOperation = (val: number, operation: (n: number) => number) =>
      operation(val);
    return applyOperation(parseNumber(num), square);
  },
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
  "object-method-this": () => {
    const person = {
      name: "Alice",
      greet: function () {
        return `Hello, my name is ${this.name}.`;
      },
    };
    return person.greet();
  },
  "this-global-scope": () =>
    `(Conceptual) In a browser in non-strict mode, 'this' in the global scope refers to the 'window' object.`,
  "this-arrow-function-lexical": () =>
    `(Conceptual) An arrow function doesn't have its own 'this'. It inherits 'this' from its surrounding (lexical) context. This is useful in methods and callbacks.`,
  "function-call-method": () => {
    const person1 = { name: "John" };
    const person2 = { name: "Jane" };
    function greet(this: { name: string }) {
      return `Hello, ${this.name}!`;
    }
    return `Called for person2: "${greet.call(person2)}"`;
  },
  "function-apply-method": () => {
    const numbers = [5, 6, 2, 3, 7];
    const max = Math.max.apply(null, numbers);
    return `Max of [${numbers.join(", ")}] is ${max}`;
  },
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
  "first-class-functions": () => {
    const greet = function () {
      return "I'm a first-class function!";
    };
    const myFunc = greet;
    return myFunc();
  },
  "named-function-expression": () => {
    const factorial = function fac(n: number): number {
      return n < 2 ? 1 : n * fac(n - 1);
    };
    return `Factorial of 5 is ${factorial(
      5
    )}. The name 'fac' is available inside.`;
  },
  "function-shadowing": () => {
    let x = "outer";
    function testShadow() {
      let x = "inner";
      return `Inside function, x is "${x}"`;
    }
    return `${testShadow()}\nOutside function, x is still "${x}"`;
  },
  "anonymous-function": () =>
    `(Conceptual) An anonymous function is a function without a name. Often used as callbacks, e.g., \`setTimeout(() => { console.log("Hi"); }, 1000);\``,
  "implicit-return-arrow": ({ num }: { num: any }) => {
    const double = (n: number) => n * 2;
    return `Double ${num} is ${double(parseNumber(num))}`;
  },
  "function-length-property": () => {
    function example(a: any, b: any, c: any) {}
    return `The function 'example(a, b, c)' has a .length of: ${example.length}`;
  },
  "scope-let-vs-var-loop": () =>
    `(Conceptual) A 'for' loop with 'var' and setTimeout will log the final value of 'i' for all callbacks. A 'for' loop with 'let' creates a new binding for each iteration, so each callback logs the correct, expected value.`,
  "pass-by-value": () => {
    let a = 10;
    function modify(val: number) {
      val = 20;
    }
    modify(a);
    return `Original 'a' is still ${a}. Primitives are passed by value.`;
  },
  "pass-by-reference": () => {
    let obj = { x: 10 };
    function modify(o: { x: number }) {
      o.x = 20;
    }
    modify(obj);
    return `Original 'obj.x' is now ${obj.x}. Objects are passed by reference.`;
  },
  "function-constructor": () =>
    `(Conceptual) Syntax: \`const sum = new Function('a', 'b', 'return a + b');\`. This is generally not recommended due to security/performance issues and broken closures.`,
  "currying-multiply": ({ a, b, c }: { a: any; b: any; c: any }) => {
    const multiply = (x: number) => (y: number) => (z: number) => x * y * z;
    return multiply(parseNumber(a))(parseNumber(b))(parseNumber(c));
  },
  "partial-application": () => {
    function add(a: number, b: number) {
      return a + b;
    }
    const addTen = add.bind(null, 10);
    return `addTen(5) results in ${addTen(5)}`;
  },
  "this-event-handler": () =>
    `(Conceptual) In \`button.addEventListener('click', function() { console.log(this); })\`, 'this' refers to the button element itself.`,
  "function-as-object-property": () => {
    const config = { id: 1, run: () => "Running the config function!" };
    return config.run();
  },
  "hoisting-var-declaration": () =>
    `(Conceptual) Code like \`console.log(myVar); var myVar = 5;\` logs 'undefined' because the declaration \`var myVar;\` is hoisted, but the assignment is not.`,
  "temporal-dead-zone-let": () =>
    `(Conceptual) Code like \`console.log(myLet); let myLet = 5;\` WILL throw a ReferenceError. 'let' variables are hoisted but cannot be accessed before their declaration (TDZ).`,
  "arrow-function-no-arguments": () =>
    `(Conceptual) A traditional function has an 'arguments' object. An arrow function does not. To get all arguments in an arrow function, you must use rest parameters: \`(...args) => { ... }\`.`,
  "iife-with-params": ({ param }: { param: string }) => {
    return (function (p: string) {
      return `The IIFE received: "${p}"`;
    })(param);
  },
  "function-overwriting": () => {
    let myFunction = function () {
      return "First definition";
    };
    myFunction = function () {
      return "Second definition";
    };
    return `The result is: "${myFunction()}". The second definition overwrote the first.`;
  },
  "callback-hell-conceptual": () =>
    `(Conceptual) Nested callbacks create a "pyramid of doom", making code hard to read. E.g., \`getData(a, (res1) => { getMoreData(res1, (res2) => { ... }); });\`. Promises solve this.`,
  "this-binding-new": () => {
    function Person(this: { name: string }, name: string) {
      this.name = name;
    }
    const p = new (Person as any)("Alice");
    return `The new object has name: ${p.name}`;
  },
  "this-strict-mode": () =>
    `(Conceptual) In strict mode ('use strict';), 'this' inside a regular function call is 'undefined', not the global 'window' object. This prevents accidental modification of global variables.`,
  "function-name-property": () => {
    function namedFunction() {}
    const anonFunc = () => {};
    return `Named: ${namedFunction.name}, Anonymous (variable name): ${anonFunc.name}`;
  },
  "generator-function-basic": () => {
    function* numberGenerator() {
      yield 1;
      yield 2;
    }
    const gen = numberGenerator();
    return `Results: ${gen.next().value}, ${gen.next().value}`;
  },
  "generator-function-iterator": () => {
    function* numberGenerator() {
      yield "a";
      yield "b";
      yield "c";
    }
    const gen = numberGenerator();
    const first = gen.next(); // { value: 'a', done: false }
    const second = gen.next(); // { value: 'b', done: false }
    return `First value: ${first.value}, Second done: ${second.done}`;
  },
  "lexical-environment-conceptual": () =>
    `(Conceptual) A Lexical Environment is an internal data structure that holds identifier-variable mappings. It has two parts: 1) The Environment Record (local variables). 2) A reference to the outer (parent) lexical environment, forming the scope chain.`,
  "this-with-settimeout": () =>
    `(Conceptual) In an object method, \`setTimeout(function() { console.log(this.name) })\` fails because \`this\` is the global object. Solution 1: \`const self = this;\` outside. Solution 2: Use an arrow function \`() => console.log(this.name)\`.`,
  "function-composition": ({ num }: { num: any }) => {
    const double = (x: number) => x * 2;
    const addTen = (x: number) => x + 10;
    const compose = (f: Function, g: Function) => (x: any) => f(g(x));
    const composedFunc = compose(addTen, double);
    return composedFunc(parseNumber(num)); // double(5) -> 10, then addTen(10) -> 20
  },
  "function-piping": ({ num }: { num: any }) => {
    const double = (x: number) => x * 2;
    const addTen = (x: number) => x + 10;
    const pipe =
      (...fns: Function[]) =>
      (x: any) =>
        fns.reduce((v, f) => f(v), x);
    const pipedFunc = pipe(double, addTen);
    return pipedFunc(parseNumber(num)); // double(5) -> 10, then addTen(10) -> 20
  },
  "side-effects-conceptual": () =>
    `(Conceptual) A side effect is any interaction a function has with the outside world. Pure functions have no side effects. Examples of side effects: Modifying a global variable, ` +
    "`console.log`" +
    `, network requests, changing the DOM.`,
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
    memoizedAdd(2, 3); // Calculated
    return `Second call: ${memoizedAdd(2, 3)}`; // From cache
  },
  "block-scope-in-loop": () =>
    `(Conceptual) In a \`for (let i=0;...)\` loop, each iteration gets its own unique \`i\` variable in a new block scope. This is why closures created inside the loop work as expected.`,
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
  "this-in-nested-function": () => {
    const obj = {
      name: "MyObj",
      process: function () {
        function nested() {
          return (this as any)?.name;
        }
        return `Nested 'this' is: ${nested()}`; // undefined in strict mode
      },
    };
    return obj.process();
  },
  "default-param-evaluation": () => {
    let x = 1;
    function test(a = x) {
      return a;
    }
    x = 2;
    return `Result is ${test()}. The default value is evaluated when the function is called.`;
  },
  "function-arity": () => {
    function func(a: any, b: any) {}
    const arrow = (a: any, b: any, c: any) => {};
    return `func.length: ${func.length}, arrow.length: ${arrow.length}`;
  },
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
  "function-as-a-value": () => {
    const add = (a: number, b: number) => a + b;
    const sub = (a: number, b: number) => a - b;
    const ops = [add, sub];
    return `Result of ops[1](10, 3): ${ops[1](10, 3)}`;
  },
  "variadic-function": ({ numbers }: { numbers: string }) => {
    const findMax = (...args: number[]) => Math.max(...args);
    return findMax(...parseNumArray(numbers));
  },
  "execution-context-conceptual": () =>
    `(Conceptual) When a function is called, a new Execution Context is created. Phase 1 (Creation): Memory is allocated for variables (hoisting), scope chain is defined, \`this\` is determined. Phase 2 (Execution): Code is run line by line.`,
  "this-in-callback": () =>
    `(Conceptual) \`const obj = { name: 'X', process() { [1].forEach(function(){console.log(this.name)}) } }\`. Inside forEach, \`this\` is not \`obj\`. Using an arrow function fixes this.`,
  "function-hoisting-pitfall": () =>
    `(Conceptual) Some browsers hoist function declarations from within blocks to the top of the function, which can be confusing. E.g., a function defined inside an \`if (false) { ... }\` block might still exist (but be undefined) outside it. Best practice: use function expressions.`,
  "call-vs-apply-vs-bind": () =>
    `(Conceptual) call: invokes immediately, args are comma-separated. apply: invokes immediately, args are in an array. bind: returns a NEW function with a bound \`this\`, does not invoke.`,
  "currying-vs-partial-application": () =>
    `(Conceptual) Currying: Transforms \`f(a,b,c)\` into \`f(a)(b)(c)\`. Partial Application: Provides some args to \`f(a,b,c)\` to get a new function, e.g., \`g(b,c)\` by fixing 'a'.`,
  "function-overloading-conceptual": () =>
    `(Conceptual) JavaScript doesn't have it. A second function declaration with the same name overwrites the first. To mimic it, check the type or number of arguments inside the function: \`if (arguments.length === 1) { ... }\`.`,
  "self-referencing-function": ({ num }: { num: any }) => {
    const factorial = function fac(n: number): number {
      if (n <= 1) return 1;
      return n * fac(n - 1); // refers to 'fac', not 'factorial'
    };
    return factorial(parseNumber(num));
  },
  "closure-scope-preservation": () => {
    function outer() {
      let x = 1;
      const inner = () => x;
      x = 2; // Modify after closure is created
      return inner;
    }
    return `Closure returns the current value: ${outer()()}`;
  },
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
  "new-function-scope": () =>
    `(Conceptual) \`let x = 1; const fn = new Function('return x');\` This throws a ReferenceError because the function created has global scope, not a closure over the local scope.`,
  "generator-function-return": () => {
    function* gen() {
      yield 1;
      return 2;
    }
    const g = gen();
    const first = g.next(); // { value: 1, done: false }
    const second = g.next(); // { value: 2, done: true }
    return `Final yielded value: ${second.value}, Is done: ${second.done}`;
  },
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
  "async-function-return": () => {
    async function getData() {
      return "Data!";
    }
    const p = getData();
    return `Function returned a Promise: ${p instanceof Promise}`;
  },
  "this-in-object-literal": () => {
    const obj = {
      name: "Test",
      getName() {
        return this.name;
      },
    };
    return obj.getName();
  },
  "function-as-property-value": () => {
    const operations = {
      add: (a: number, b: number) => a + b,
      subtract: (a: number, b: number) => a - b,
    };
    return `Result: ${operations.add(10, 5)}`;
  },
  "call-stack-conceptual": () =>
    `(Conceptual) When C() is called, the stack is [global, A, B, C]. When C returns, it's popped off. Then B is popped, then A. This LIFO (Last-In, First-Out) structure manages execution flow.`,
  "function-binding-precedence": () =>
    `(Conceptual) 1. \`new\`: \`this\` is the new object. 2. \`bind\`: \`this\` is the bound object. 3. Method call (\`obj.fn()\`), \`this\` is \`obj\`. 4. Default: global object (or undefined in strict mode).`,
  "polyfill-bind-method": () =>
    `(Conceptual) A simple polyfill would be: \`Function.prototype.myBind = function(ctx) { const fn = this; return function() { fn.apply(ctx); }; }\`. It uses a closure to store the context (\`ctx\`).`,
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
  "arrow-function-and-this-in-object": () =>
    `(Conceptual) \`const obj = { name: 'X', getName: () => this.name }\`. Here, \`this\` is not \`obj\`. It's inherited from the global scope, so \`obj.getName()\` will likely not work as expected.`,
  "function-purity-and-arrays": ({ arr }: { arr: string }) => {
    const original = parseStrArray(arr);
    const impureSort = (a: string[]) => a.sort(); // Mutates
    const pureSort = (a: string[]) => [...a].sort(); // Creates a copy
    const pureResult = pureSort(original);
    impureSort(original); // Original is now changed
    return `Pure result: [${pureResult.join(
      ", "
    )}]. Original after impure sort: [${original.join(", ")}]`;
  },
  "iife-with-global-variable": () =>
    `(Conceptual) A common pattern in older libraries: \`(function(window) { /* code uses window */ })(this);\`. This makes the dependency on the global object explicit.`,
  "function-with-optional-params": ({ name }: { name: string }) => {
    function greet(name: string, greeting?: string) {
      const finalGreeting = greeting === undefined ? "Hello" : greeting;
      return `${finalGreeting}, ${name}!`;
    }
    return greet(name);
  },
  "rest-params-vs-arguments": () =>
    `(Conceptual) Rest params are a true Array, so you can use .map(), .filter() etc. The \`arguments\` object is only array-like. Rest params can also be used with arrow functions, while \`arguments\` cannot.`,
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
  "function-to-string": () => {
    function add(a: number, b: number) {
      return a + b;
    }
    return add.toString();
  },
  "function-scope-vs-global-scope": () =>
    `(Conceptual) \`let g=1; function fn() { let f=2; console.log(g); } fn(); console.log(f);\`. The first log works (fn can see global). The second throws a ReferenceError (global can't see fn's scope).`,
  "block-scope-with-const": () =>
    `(Conceptual) Like \`let\`, \`const\` is block-scoped. \`if (true) { const x=1; } console.log(x);\` will throw a ReferenceError. Additionally, \`const x=1; x=2;\` will throw a TypeError.`,
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
  "function-currying-practical": ({ msg }: { msg: string }) => {
    const log = (level: string) => (message: string) =>
      `[${level.toUpperCase()}] - ${message}`;
    const logError = log("error");
    return logError(msg);
  },
  "this-in-event-listener-arrow": () =>
    `(Conceptual) In a class method, using \`btn.addEventListener('click', () => { this.update() })\` works because the arrow function inherits the class instance's \`this\`.`,
  "function-hoisting-with-var": () =>
    `(Conceptual) ` +
    "`try { myFunc(); } catch(e) { console.log(e.name); } var myFunc = () => {};` will log 'TypeError' because `myFunc` is hoisted as a variable and is `undefined` when called, not a function.",
};
