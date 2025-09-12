
// This needs to be defined at a higher scope to persist across clicks for the counter problem
const counter_closure = (() => {
    let count = 0;
    return () => `Counter is now: ${++count}`;
})();

// For 'retaining-state-closure'
const statefulSum_closure = (() => {
    let previous = 0;
    return (current: number) => {
        const sum = previous + current;
        previous = current;
        return sum;
    };
})();

// For 'once-function'
const once = (fn: Function) => {
    let hasBeenCalled = false;
    let result: any;
    return (...args: any[]) => {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn(...args);
        }
        return result;
    };
};
const singleCallFunction = once(() => `This was called at ${new Date().toLocaleTimeString()}`);


export const solvers: Record<string, Function> = {
    'closure-counter': counter_closure,
    'lexical-scope': () => {
        const outerVar = "I am outside!";
        function inner() { return `Inner function can access: "${outerVar}"`; }
        return inner();
    },
    'private-data-closure': ({ initialName }: { initialName: string }) => {
        const createPerson = (name: string) => {
            let privateName = name;
            return {
                getName: () => privateName,
                setName: (newName: string) => { privateName = newName; },
            };
        };
        const person = createPerson(initialName);
        const result1 = `Initial name: ${person.getName()}`;
        person.setName('Jane');
        const result2 = `New name: ${person.getName()}`;
        return `${result1}\n${result2}`;
    },
    'function-factory-multiplier': ({ factor, num }: { factor: any, num: any }) => {
        const createMultiplier = (f: number) => (n: number) => n * f;
        const multiplyBy = createMultiplier(Number(factor));
        return multiplyBy(Number(num));
    },
    'iife-private-scope': () => `(Conceptual) Code like \`(function() { var secret = 1; })();\` creates a variable 'secret' that cannot be accessed from the global scope, preventing naming conflicts.`,
    'closure-with-loop-let': () => `(Conceptual) In \`for (let i=0; i<3; i++) { setTimeout(() => console.log(i)); }\`, each loop creates a new 'i'. The callbacks log 0, 1, 2 because each closure captures a different 'i'.`,
    'memoization-with-closures': ({ num }: { num: any }) => `(Conceptual) A memoize function wraps another. It uses a closure \`cache = {}\` object. When called, it checks if the result for the current arguments is in the cache. If so, it returns the cached result; otherwise, it computes, stores, and then returns the result.`,
    'module-pattern': () => {
        const myModule = (function() {
            const privateVar = "I am private.";
            const privateMethod = () => privateVar;
            return { publicMethod: () => `Public method can access: ${privateMethod()}` };
        })();
        return myModule.publicMethod();
    },
    'closure-event-listener': () => `(Conceptual) \`let count = 0; btn.addEventListener('click', () => { count++; console.log(count); });\` The click handler can access and modify 'count' because of the closure.`,
    'partial-application-closure': ({ message }: { message: string }) => {
        const createLogger = (level: string) => (msg: string) => `[${level.toUpperCase()}]: ${msg}`;
        const infoLogger = createLogger("info");
        return infoLogger(message);
    },
    'closure-timeout-scope': () => `(Conceptual) In \`function run() { let msg = 'Hi'; setTimeout(() => alert(msg), 1000); } run();\`, the alert shows 'Hi' after 1 second because the callback's closure keeps 'msg' alive.`,
    'retaining-state-closure': () => {
        const num = Math.floor(Math.random() * 10) + 1;
        return `Called with ${num}, Result: ${statefulSum_closure(num)}`;
    },
    'once-function': () => singleCallFunction(),
    'closure-data-hiding': () => {
        const createStore = () => {
            const items: string[] = [];
            return {
                addItem: (item: string) => { items.push(item); },
                getCount: () => items.length
            };
        };
        const store = createStore();
        store.addItem("apple");
        return `Item added. Total items: ${store.getCount()}. The 'items' array itself is not accessible.`;
    },
    'closure-scope-chain-deep': () => {
        const v1 = "one";
        function fn1() {
            const v2 = "two";
            function fn2() {
                const v3 = "three";
                return `${v1}, ${v2}, ${v3}`;
            }
            return fn2();
        }
        return `Innermost function can access: ${fn1()}`;
    },
    'closure-with-async-await': () => `(Conceptual) A variable defined outside an async function is available inside it. E.g., \`let id = 1; async function fetchData() { const data = await fetch('/' + id); }\` works because the closure captures 'id'.`,
    'currying-add-function': () => {
        const add = (a: number) => (b: number) => (c: number) => a + b + c;
        return `Result of add(10)(20)(30) is: ${add(10)(20)(30)}`;
    },
    'closure-for-config': () => {
        const setup = (config: { prefix: string }) => {
            return (message: string) => `${config.prefix} ${message}`;
        };
        const greeter = setup({ prefix: "Hello," });
        return greeter("World");
    },
    'closure-and-garbage-collection': () => `(Conceptual) When a function returns an inner function, the outer function's variables that are used by the inner function are not garbage collected. They are kept in memory as part of the closure.`,
    'closure-in-react-hooks-conceptual': () => `(Conceptual) In \`useEffect(() => { setInterval(() => console.log(count), 1000) }, [])\`, the interval callback forms a closure over the 'count' from the first render. It will always log the initial value. Adding 'count' to the dependency array fixes this by re-creating the effect (and a new closure) whenever 'count' changes.`,
    'dynamic-function-creation': ({ op }: { op: string }) => {
        const createOperation = (opName: string) => {
            if (opName === 'add') return (a: number, b: number) => a + b;
            if (opName === 'multiply') return (a: number, b: number) => a * b;
            return () => 'Invalid op';
        };
        const myFunc = createOperation(op);
        return `Result of created function: ${myFunc(5, 10)}`;
    },
    'closure-shared-scope': () => {
        const createShared = () => {
            let shared = 0;
            return {
                inc: () => ++shared,
                dec: () => --shared,
            };
        };
        const counter = createShared();
        counter.inc();
        counter.inc();
        return `After two increments, value is: ${counter.dec()}`;
    },
    'revealing-module-pattern': () => {
        const myRevealingModule = (function () {
            let privateName = 'John';
            function publicSetName(name: string) { privateName = name; }
            function publicGetName() { return privateName; }
            return { setName: publicSetName, getName: publicGetName };
        })();
        myRevealingModule.setName('Jane');
        return `Name is now: ${myRevealingModule.getName()}`;
    },
    'closure-for-templating': () => {
        const createTemplate = (templateStr: string) => {
            return (data: Record<string, string>) => {
                return templateStr.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] || '');
            };
        };
        const welcome = createTemplate("Hello, {{name}}!");
        return welcome({ name: 'Alice' });
    },
    'closure-as-iterator': () => {
        const createIterator = (arr: any[]) => {
            let index = 0;
            return () => {
                if (index < arr.length) {
                    return arr[index++];
                }
                return 'Done';
            };
        };
        const next = createIterator(['a', 'b']);
        next(); // 'a'
        return `Second call returns: ${next()}`;
    },
    'closure-with-recursion': ({ num }: { num: any }) => {
        const memoizedFib = (() => {
            const cache: Record<number, number> = {};
            function fib(n: number): number {
                if (n in cache) return cache[n];
                if (n <= 1) return n;
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
            return fib;
        })();
        return `Fibonacci(${num}) is ${memoizedFib(Number(num))}`;
    },
    'closure-accessing-arguments': () => `(Conceptual) A traditional function's inner function can access the parent's 'arguments' object. E.g., \`function outer() { return () => arguments[0]; } outer('hello')()\` would return 'hello'.`,
    'closure-redefining-variable': () => {
        let x = "outer";
        const myFunction = () => {
            let x = "inner";
            return `The inner x is "${x}"`;
        };
        return `${myFunction()}. The outer x is still "${x}".`;
    },
    'closure-performance-conceptual': () => `(Conceptual) Closures can lead to higher memory usage because closed-over variables are not garbage collected. This is usually minor, but can be significant in loops creating many closures or with large closed-over data.`,
    'closure-with-proxy': () => {
        const createSecureObject = (target: any) => {
            return new Proxy(target, {
                get: (obj, prop) => {
                    if (prop.toString().startsWith('_')) return 'Access denied';
                    return obj[prop];
                }
            });
        };
        const secureUser = createSecureObject({ name: 'User', _secret: '123' });
        return `name: ${secureUser.name}, _secret: ${secureUser._secret}`;
    },
    'closure-with-bind': () => `(Conceptual) \`add.bind(null, 5)\` creates a new function. This is like a closure: \`const add5 = (b) => add(5, b);\`. Both "remember" the first argument.`,
    'closure-for-rate-limiting': () => `(Conceptual) A rate-limit wrapper function would use a closure to store a \`lastCallTime\`. When the wrapped function is called, it checks if enough time has passed since \`lastCallTime\` before executing.`,
    'closure-for-toggling': () => {
        const toggler = (() => {
            let state = false;
            return () => {
                state = !state;
                return state;
            }
        })();
        toggler(); // true
        return `Second call returns: ${toggler()}`; // false
    },
    'namespacing-with-closures': () => `(Conceptual) \`var MyNamespace = (function() { return { helper: () => {} } })();\` creates a single global object, \`MyNamespace\`, preventing its internal functions from polluting the global scope.`,
    'function-composition-closures': () => {
        const compose = (f: Function, g: Function) => (x: any) => f(g(x));
        const double = (n: number) => n * 2;
        const add5 = (n: number) => n + 5;
        const doubleThenAdd5 = compose(add5, double);
        return `Result of compose(add5, double)(10) is: ${doubleThenAdd5(10)}`;
    },
    'closure-with-destructuring': () => {
        const createCounter = () => {
            let count = 0;
            return {
                inc: () => ++count,
                dec: () => --count,
                get: () => count
            };
        };
        const { inc, get } = createCounter();
        inc();
        inc();
        return `Count is: ${get()}`;
    },
    'lazy-initialization-closure': () => {
        const getExpensiveResource = (() => {
            let resource: any;
            return () => {
                if (!resource) {
                    resource = `Resource initialized at ${new Date().toLocaleTimeString()}`;
                }
                return resource;
            }
        })();
        getExpensiveResource();
        return `Second call returns: ${getExpensiveResource()}`;
    },
    'closure-in-callbacks': () => {
        const multiplier = 10;
        const arr = [1, 2, 3];
        const result = arr.map(n => n * multiplier); // The callback accesses 'multiplier'
        return `Result: [${result.join(', ')}]`;
    },
    'closure-for-abstraction': () => {
        const createApiEndpoint = (baseUrl: string) => (path: string) => `${baseUrl}${path}`;
        const getApi = createApiEndpoint("https://api.example.com");
        return `Endpoint URL: ${getApi("/users")}`;
    },
    'closure-with-generators': () => {
        const createIdGenerator = (start: number) => {
            let id = start;
            return function*() {
                while (true) yield id++;
            }
        };
        const idGen = createIdGenerator(100)();
        idGen.next(); // 100
        return `Next ID: ${idGen.next().value}`; // 101
    },
    'closure-with-promises': () => `(Conceptual) In \`let id = 1; new Promise(res => res(id)).then(val => console.log(val))\`, the \`.then()\` callback can access \`id\` from the outer scope due to closure.`,
    'closure-for-stopwatch': () => `(Conceptual) An outer function holds private \`startTime\` and \`running\` variables. It returns an object with methods like \`start()\`, \`stop()\`, which can access and modify these private state variables.`,
    'closure-for-logging-context': () => {
        const createLogger = (context: string) => (message: string) => `[${context}] ${message}`;
        const apiLogger = createLogger("API");
        return apiLogger("Request failed.");
    },
    'closure-capturing-this': () => `(Conceptual) In an object method, \`setTimeout(function() { console.log(this.name) }, 100)\` fails because 'this' is different. Using an arrow function \`() => console.log(this.name)\` solves this as it inherits the correct 'this' via its closure.`,
    'closure-and-block-scope': () => {
        function outer() {
            if (true) {
                const blockVar = "I am in a block";
                return () => blockVar; // This closure captures the block-scoped variable
            }
        }
        const inner = outer();
        return `Inner function returns: "${inner()}"`;
    },
    'closure-as-a-cache': () => `(Conceptual) Same as memoization. A closure holds a cache object. The returned function checks the cache before computing, providing a significant performance boost for expensive, pure functions.`,
    'closure-for-debouncing': () => `(Conceptual) A debounce function uses a closure to store a timer ID. Each call clears the previous timer and sets a new one. The wrapped function only executes after a period of inactivity.`,
    'closure-for-throttling': () => `(Conceptual) A throttle function uses a closure to store a 'canRun' flag or a 'lastRun' timestamp. It prevents the wrapped function from executing more than once per specified interval.`,
    'closure-common-mistakes': () => `(Conceptual) Using \`var\` in a loop like \`for (var i=0; i<3; i++) { setTimeout(() => console.log(i)) }\` logs 3, 3, 3. The single 'i' variable is captured, and its final value is 3 when the callbacks run. \`let\` solves this by creating a new variable for each iteration.`,
};
