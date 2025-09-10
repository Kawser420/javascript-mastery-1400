
// This file MUST be pure JavaScript. No imports, no types.

// A variable in a higher scope to demonstrate impure function
let externalCounter = 0;

// Inlined helper to avoid module import issues
const parseNumberArray_FS = (input: string) => {
    if (!input || typeof input !== 'string' || input.trim() === '') return [];
    const parseNumber = (val: any) => {
        const num = typeof val === 'string' ? parseFloat(val) : val;
        if (isNaN(num)) throw new Error(`Invalid number input: "${val}"`);
        return num;
    };
    return input.split(',').map(item => parseNumber(item.trim()));
};

const parseNumber_FS = (input: any) => {
    const num = typeof input === 'string' ? parseFloat(input) : input;
    if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
    return num;
};


// FIX: Cast window to any to attach property in non-module script context.
(window as any).functionsScopeSolvers = {
    'simple-function-return': () => {
        function greet() {
            return "Hello, Functions!";
        }
        return greet();
    },
    'function-with-parameters': ({ a, b }: { a: any, b: any }) => {
        function multiply(x: number, y: number) {
            return x * y;
        }
        return multiply(parseNumber_FS(a), parseNumber_FS(b));
    },
    'arrow-function-syntax': ({ num }: { num: any }) => {
        const square = (n: number) => n * n;
        return square(parseNumber_FS(num));
    },
    'function-declaration': () => {
        const result = declaredFunction();
        function declaredFunction() {
            return "This function was hoisted!";
        }
        return result;
    },
    'function-expression': () => {
        const expressionFunction = function() {
            return "This is a function expression.";
        };
        return expressionFunction();
    },
    'default-parameters': ({ name }: { name: string }) => {
        function greet(userName = "Guest") {
            return `Hello, ${userName}!`;
        }
        return greet(name || undefined); // Pass undefined to trigger default
    },
    'rest-parameters-sum': ({ numbers }: { numbers: string }) => {
        const nums = parseNumberArray_FS(numbers);
        function sum(...args: number[]) {
            return args.reduce((total, current) => total + current, 0);
        }
        return sum(...nums);
    },
    'iife-pattern': () => {
        const result = (function() {
            const privateVar = "I'm private!";
            return `This IIFE returned: "${privateVar}"`;
        })();
        return result;
    },
    'hoisting-declaration': () => `The solver for 'function-declaration' already demonstrates this. Calling declaredFunction() before it is defined works because the entire function is hoisted.`,
    'hoisting-expression-var': () => `Trying to call a function expression assigned to a 'var' before its definition results in a TypeError. The variable 'myFunc' is hoisted and is 'undefined', not a function. (Conceptual)`,
    'global-scope': () => `(Conceptual) A variable declared outside any function is global. A function can access it. E.g., \`let globalVar = "Hi"; function test() { console.log(globalVar); }\``,
    'function-scope': () => `(Conceptual) A variable declared with 'var' inside a function is only accessible within that function. Trying to access it outside will result in a ReferenceError.`,
    'block-scope-let': () => `(Conceptual) A variable with 'let' or 'const' inside a block {} (like an 'if' or 'for' loop) is only accessible within that block. This prevents many common bugs.`,
    'scope-chain': () => {
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
    'pure-function': ({ num }: { num: any }) => {
        const double = (n: number) => n * 2;
        return double(parseNumber_FS(num));
    },
    'impure-function': () => {
        function incrementExternal() {
            externalCounter++;
            return `External counter is now: ${externalCounter}`;
        }
        return incrementExternal();
    },
    'higher-order-function-argument': ({ num }: { num: any }) => {
        const square = (n: number) => n * n;
        const applyOperation = (val: number, operation: (n: number) => number) => operation(val);
        return applyOperation(parseNumber_FS(num), square);
    },
    'higher-order-function-return': ({ multiplier, num }: { multiplier: any, num: any }) => {
        const createMultiplier = (factor: number) => {
            return (number: number) => number * factor;
        };
        const multiplyBy3 = createMultiplier(parseNumber_FS(multiplier));
        return multiplyBy3(parseNumber_FS(num));
    },
    'sync-callback': ({ arr }: { arr: string }) => {
        const items = arr.split(',').map(s => s.trim());
        let result = '';
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
    'arguments-object': ({ numbers }: { numbers: string }) => {
        const nums = parseNumberArray_FS(numbers);
        function sum() {
            let total = 0;
            for (let i = 0; i < arguments.length; i++) {
                total += arguments[i];
            }
            return total;
        }
        return sum.apply(null, nums as any);
    },
    'object-method-this': () => {
        const person = {
            name: "Alice",
            greet: function() {
                return `Hello, my name is ${this.name}.`;
            }
        };
        return person.greet();
    },
    'this-global-scope': () => `(Conceptual) In a browser in non-strict mode, 'this' in the global scope refers to the 'window' object.`,
    'this-arrow-function-lexical': () => `(Conceptual) An arrow function doesn't have its own 'this'. It inherits 'this' from its surrounding (lexical) context.`,
    'function-call-method': () => {
        const person1 = { name: "John" };
        const person2 = { name: "Jane" };
        function greet(this: { name: string }) { return `Hello, ${this.name}!`; }
        return `Called for person2: "${greet.call(person2)}"`;
    },
    'function-apply-method': () => {
        const numbers = [5, 6, 2, 3, 7];
        const max = Math.max.apply(null, numbers);
        return `Max of [${numbers.join(', ')}] is ${max}`;
    },
    'function-bind-method': () => {
        const module = {
            x: 42,
            getX: function() { return this.x; }
        };
        const unboundGetX = module.getX;
        const boundGetX = unboundGetX.bind(module);
        return `Unbound returns undefined. Bound returns: ${boundGetX()}`;
    },
    'recursive-countdown': ({ num }: { num: any }) => {
        const startNum = parseNumber_FS(num);
        let result: number[] = [];
        function countdown(n: number) {
            if (n < 1) return;
            result.push(n);
            countdown(n - 1);
        }
        countdown(startNum);
        return result.join(', ');
    },
    'first-class-functions': () => {
        const greet = function() { return "I'm a first-class function!"; };
        const myFunc = greet;
        return myFunc();
    },
    'named-function-expression': () => {
        const factorial = function fac(n: number): number {
            return n < 2 ? 1 : n * fac(n - 1);
        };
        return `Factorial of 5 is ${factorial(5)}`;
    },
    'function-shadowing': () => {
        let x = "outer";
        function testShadow() {
            let x = "inner";
            return `Inside function, x is "${x}"`;
        }
        const result1 = testShadow();
        const result2 = `Outside function, x is "${x}"`;
        return `${result1}\n${result2}`;
    },
    'anonymous-function': () => `(Conceptual) An anonymous function is a function without a name. Often used as callbacks, e.g., \`setTimeout(() => { console.log("Hi"); }, 1000);\``,
    'implicit-return-arrow': ({ num }: { num: any }) => {
        const double = (n: number) => n * 2;
        return `Double ${num} is ${double(parseNumber_FS(num))}`;
    },
    'function-length-property': () => {
        function example(a: any, b: any, c: any) {}
        return `The function 'example(a, b, c)' has a .length of: ${example.length}`;
    },
    'scope-let-vs-var-loop': () => `(Conceptual) A 'for' loop with 'var' and a setTimeout will log the final value of the counter for all callbacks. A 'for' loop with 'let' creates a new binding for each iteration, so each callback logs the correct, expected value.`,
    'pass-by-value': () => {
        let a = 10;
        function modify(val: number) { val = 20; }
        modify(a);
        return `Original 'a' is still ${a}. Primitives are passed by value.`;
    },
    'pass-by-reference': () => {
        let obj = { x: 10 };
        function modify(o: { x: number }) { o.x = 20; }
        modify(obj);
        return `Original 'obj.x' is now ${obj.x}. Objects are passed by reference.`;
    },
    'function-constructor': () => `(Conceptual) Syntax: \`const sum = new Function('a', 'b', 'return a + b');\`. This is generally not recommended due to security/performance issues.`,
    'currying-multiply': ({ a, b, c }: { a: any, b: any, c: any }) => {
        const multiply = (x: number) => (y: number) => (z: number) => x * y * z;
        return multiply(parseNumber_FS(a))(parseNumber_FS(b))(parseNumber_FS(c));
    },
    'partial-application': () => {
        function add(a: number, b: number) { return a + b; }
        const addTen = add.bind(null, 10);
        return `addTen(5) results in ${addTen(5)}`;
    },
    'this-event-handler': () => `(Conceptual) In \`button.addEventListener('click', function() { console.log(this); })\`, 'this' refers to the button element itself. If you use an arrow function, 'this' would be inherited.`,
    'function-as-object-property': () => {
        const config = {
            id: 1,
            run: () => "Running the config function!"
        };
        return config.run();
    },
    'hoisting-var-declaration': () => `(Conceptual) Code like \`console.log(myVar); var myVar = 5;\` logs 'undefined' because the declaration \`var myVar;\` is hoisted, but the assignment is not.`,
    'temporal-dead-zone-let': () => `(Conceptual) Code like \`console.log(myLet); let myLet = 5;\` WILL throw a ReferenceError. 'let' variables are hoisted but cannot be accessed before their declaration (TDZ).`,
    'arrow-function-no-arguments': () => `(Conceptual) A traditional function has an 'arguments' object. An arrow function does not. To get all arguments in an arrow function, you must use rest parameters: \`(...args) => { ... }\`.`,
    'iife-with-params': ({ param }: { param: string }) => {
        const result = (function(p: string) {
            return `The IIFE received: "${p}"`;
        })(param);
        return result;
    },
    'function-overwriting': () => {
        let myFunction;
        myFunction = function() { return "First definition"; };
        myFunction = function() { return "Second definition"; };
        return `The result is: "${myFunction()}". The second definition overwrote the first.`;
    },
    'callback-hell-conceptual': () => `(Conceptual) Nested callbacks create a "pyramid of doom", making code hard to read and maintain. E.g., \`getData(a, (res1) => { getMoreData(res1, (res2) => { ... }); });\`. Promises and async/await solve this.`,
    'this-binding-new': () => {
        function Person(this: { name: string }, name: string) { this.name = name; }
        const p = new (Person as any)("Alice");
        return `The new object has name: ${p.name}`;
    },
    'this-strict-mode': () => `(Conceptual) In strict mode ('use strict';), 'this' inside a regular function call is 'undefined', not the global 'window' object. This prevents accidental modification of global variables.`,
};