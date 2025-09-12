export const solvers: Record<string, Function> = {
    'generator-function-basic': () => {
        function* numberGenerator() {
            yield 1;
            yield 2;
            yield 3;
        }
        const gen = numberGenerator();
        return `Results: ${gen.next().value}, ${gen.next().value}, ${gen.next().value}`;
    },
    'generator-iterator-protocol': () => {
        function* generator() { yield 'a'; yield 'b'; }
        const iterator = generator();
        const first = iterator.next(); // { value: 'a', done: false }
        const second = iterator.next(); // { value: 'b', done: false }
        const third = iterator.next();  // { value: undefined, done: true }
        return `First value: ${first.value}, Is third done? ${third.done}`;
    },
    'generator-yield-delegation': () => {
        function* gen1() { yield 1; yield 2; }
        function* gen2() {
            yield* gen1();
            yield* ['x', 'y'];
            yield 3;
        }
        return `[${[...gen2()].join(', ')}]`;
    },
    'generator-passing-values': () => {
        function* twoWay() {
            const what = yield "What's your name?";
            const confirmation = yield `Hello, ${what}! Is that correct?`;
            return `Confirmation: ${confirmation}`;
        }
        const it = twoWay();
        it.next(); // Start generator
        it.next('Alice'); // Pass 'Alice' back to the first yield
        return it.next('Yes').value; // Pass 'Yes' to the second yield
    },
    'generator-return': () => {
        function* gen() { yield 1; return "Finished"; }
        const it = gen();
        const first = it.next(); // { value: 1, done: false }
        const second = it.next(); // { value: "Finished", done: true }
        return `Final value: ${second.value}, Is done: ${second.done}`;
    },
    'proxy-get-trap': () => {
        const target = { a: 1 };
        const handler = {
            get: (obj: {a: number}, prop: string) => {
                return prop in obj ? obj[prop as keyof typeof obj] : 'Default Value';
            }
        };
        const proxy = new Proxy(target, handler);
        return `proxy.a: ${proxy.a}, proxy.b: ${(proxy as any).b}`;
    },
    'proxy-set-trap': () => {
        const target: { age?: number, name?: string } = {};
        const handler = {
            set: (obj: {age?: number}, prop: string, value: any) => {
                if (prop === 'age' && typeof value !== 'number') {
                    throw new TypeError("Age must be a number.");
                }
                (obj as any)[prop] = value;
                return true; // Indicate success
            }
        };
        const proxy = new Proxy(target, handler);
        proxy.age = 30;
        try { (proxy as any).name = "test"; } catch(e: any) {}
        return `Age is set to: ${proxy.age}. Setting name worked.`;
    },
    'proxy-apply-trap': () => {
        const targetFunc = (a: number, b: number) => a + b;
        const handler = {
            apply: (target: Function, thisArg: any, args: [number, number]) => {
                console.log(`Calling function with args: ${args}`);
                return target(...args) * 2;
            }
        };
        const proxy = new Proxy(targetFunc, handler);
        return `Result of proxy(2, 3) is ${proxy(2, 3)}`;
    },
    'proxy-construct-trap': () => {
        class TargetClass {
            name: string;
            constructor(name: string) { this.name = name; }
        }
        const handler = {
            construct: (target: typeof TargetClass, args: [string]) => {
                console.log('Constructing...');
                return new target(`Proxied ${args[0]}`);
            }
        };
        const ProxiedClass = new Proxy(TargetClass, handler);
        const instance = new ProxiedClass('Test');
        return `Instance name: ${instance.name}`;
    },
    'proxy-revocable': () => {
        const target = { a: 1 };
        const { proxy, revoke } = Proxy.revocable(target, {});
        const val1 = proxy.a;
        revoke();
        try {
            const val2 = proxy.a;
            return `This should not be reached.`;
        } catch(e: any) {
            return `Value before revoke: ${val1}. Error after revoke: ${e.name}`;
        }
    },
    'reflect-api-get-set': () => {
        const obj = { a: 1 };
        Reflect.set(obj, 'a', 2);
        return `Reflect.get(obj, 'a'): ${Reflect.get(obj, 'a')}`;
    },
    'reflect-apply': () => {
        const result = Reflect.apply(Math.max, null, [1, 5, 2]);
        return `Result of Reflect.apply: ${result}`;
    },
    'reflect-construct': () => {
        class MyClass { constructor(public val: number) {} }
        const instance = Reflect.construct(MyClass, [10]);
        return `Instance value: ${instance.val}`;
    },
    'reflect-has': () => {
        const obj = { a: 1 };
        return `Reflect.has(obj, 'a'): ${Reflect.has(obj, 'a')}`;
    },
    'symbol-unique-keys': () => {
        const id = Symbol('id');
        const obj = { name: 'test', [id]: 123 };
        return `Object.keys(): [${Object.keys(obj)}]. Symbol value: ${obj[id]}`;
    },
    'symbol-for-and-keyfor': () => {
        const s1 = Symbol.for('mySymbol');
        const s2 = Symbol.for('mySymbol');
        const key = Symbol.keyFor(s1);
        return `s1 === s2: ${s1 === s2}. Key for s1: ${key}`;
    },
    'well-known-symbol-iterator': () => {
        const myIterable = {
            from: 1, to: 3,
            *[Symbol.iterator]() {
                for (let i = this.from; i <= this.to; i++) yield i;
            }
        };
        return `[${[...myIterable].join(', ')}]`;
    },
    'well-known-symbol-tostringtag': () => {
        class MyClass { get [Symbol.toStringTag]() { return 'CustomTag'; } }
        return Object.prototype.toString.call(new MyClass());
    },
    'sharedarraybuffer-conceptual': () => `(Conceptual) A fixed-length raw binary data buffer. Unlike ArrayBuffer, it can be shared between the main thread and workers. Changes in one thread are visible in the other. Requires Atomics for safe concurrent access.`,
    'atomics-conceptual': () => `(Conceptual) A global object with static methods (like \`Atomics.add\`, \`Atomics.wait\`, \`Atomics.notify\`) for performing atomic, thread-safe operations on SharedArrayBuffer data to prevent race conditions.`,
    'intl-datetimeformat': ({ locale }: { locale: string }) => {
        const date = new Date(Date.UTC(2024, 0, 20, 15, 30, 0));
        try {
            return new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeStyle: 'short' }).format(date);
        } catch (e: any) { return `Error: ${e.message}`; }
    },
    'intl-numberformat': ({ locale, currency }: { locale: string, currency: string }) => {
        const number = 123456.789;
        try {
            return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(number);
        } catch (e: any) { return `Error: ${e.message}`; }
    },
    'intl-collator': () => {
        const arr = ['Z', 'a', 'z', 'ä'];
        const collator = new Intl.Collator('de'); // German locale
        return `Sorted: [${arr.sort(collator.compare).join(', ')}]`;
    },
    'intl-pluralrules': ({ num }: { num: any }) => {
        const n = Number(num);
        const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });
        return `The plural category for ${n} is '${pr.select(n)}'.`;
    },
    'intl-relativetimeformat': () => {
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
        return `In 2 days: "${rtf.format(2, 'day')}"\n1 day ago: "${rtf.format(-1, 'day')}"`;
    },
    'weakref-conceptual': () => `(Conceptual) \`let obj = {}; const ref = new WeakRef(obj);\`. \`ref\` holds a weak reference. If \`obj\` is set to \`null\`, the garbage collector can reclaim it. Use \`ref.deref()\` to access the object (might return undefined).`,
    'finalizationregistry-conceptual': () => `(Conceptual) Allows you to register a callback that runs after an object is garbage collected. Useful for cleaning up external resources (like file handles) associated with an object.`,
    'private-in-operator-adv': () => {
        class MyClass {
            #privateField = 1;
            static hasPrivate(obj: MyClass) {
                return #privateField in obj;
            }
        }
        return `Instance has private field: ${MyClass.hasPrivate(new MyClass())}`;
    },
    'array-groupby-conceptual': () => {
        const inventory = [{ name: 'apple', type: 'fruit' }, { name: 'carrot', type: 'vegetable' }];
        // Not widely supported yet, so this is conceptual.
        // const result = inventory.groupBy(item => item.type);
        return `(Conceptual) Would result in: { fruit: [...], vegetable: [...] }`;
    },
    'regexp-match-indices': () => {
        const str = 'a=1, b=2';
        const regex = /([a-z])=(\d)/gd; // 'd' flag is crucial
        const match = regex.exec(str);
        return `Indices for first group ('a'): [${match?.indices?.[1]?.join(', ')}]`;
    },
    'import-assertions-conceptual': () => `(Conceptual) \`import config from './config.json' with { type: 'json' };\`. This ensures the file is treated as JSON, preventing potential security issues if the server sends it with the wrong MIME type.`,
    'error-cause-property': () => {
        try {
            try {
                // Low-level error
                throw new Error("Database connection failed");
            } catch (lowLevelError) {
                // High-level error, chaining the cause
                throw new Error("Failed to load user data", { cause: lowLevelError });
            }
        } catch (e: any) {
            return `High-level error: ${e.message}\nCause: ${e.cause.message}`;
        }
        return `This should not be reached.`
    },
    'shadowrealms-conceptual': () => `(Conceptual) A ShadowRealm provides a sandboxed execution environment. Code inside the realm has its own global object and cannot access objects from the outer realm, making it safe to run untrusted third-party code.`,
    'temporal-api-conceptual': () => `(Conceptual) \`Temporal\` is a future API to replace \`Date\`. It provides immutable objects for specific use cases (like \`Temporal.PlainDate\`, \`Temporal.ZonedDateTime\`) which will fix many of the frustrations and bugs associated with the old \`Date\` object.`,
    'decorator-metadata-conceptual': () => `(Conceptual) Decorators are special functions that modify class declarations. They are often used with \`Reflect.metadata\` to attach design-time type information to a class, which can be read at runtime for dependency injection or serialization.`,
    'proxy-has-trap': () => {
        const target = { a: 1, _b: 2 };
        const handler = {
            has: (obj: any, prop: string) => {
                if (prop.startsWith('_')) return false; // Hide private properties
                return prop in obj;
            }
        };
        const proxy = new Proxy(target, handler);
        return `'a' in proxy: ${'a' in proxy}, '_b' in proxy: ${'_b' in proxy}`;
    },
    'proxy-delete-trap': () => {
        const target = { a: 1 };
        const handler = {
            deleteProperty: (obj: any, prop: string) => {
                console.log(`Deleting prop ${prop}`);
                return Reflect.deleteProperty(obj, prop);
            }
        };
        const proxy = new Proxy(target, handler);
        delete (proxy as any).a;
        return `Property 'a' deleted. 'a' in proxy: ${'a' in proxy}`;
    },
    'proxy-ownkeys-trap': () => {
        const target = { a: 1, _b: 2 };
        const handler = {
            ownKeys: (obj: any) => {
                return Reflect.ownKeys(obj).filter(key => !key.toString().startsWith('_'));
            }
        };
        const proxy = new Proxy(target, handler);
        return `Object.keys(proxy): [${Object.keys(proxy).join(', ')}]`;
    },
    'reflect-delete-property': () => {
        const obj = { a: 1 };
        Reflect.deleteProperty(obj, 'a');
        return `'a' in obj: ${'a' in obj}`;
    },
    'reflect-own-keys': () => {
        const sym = Symbol('s');
        const obj = { a: 1, [sym]: 2 };
        const keys = Reflect.ownKeys(obj);
        return `Found ${keys.length} keys (including symbol).`;
    },
    'generator-as-state-machine': () => {
        function* trafficLight() {
            while(true) {
                yield 'Green';
                yield 'Yellow';
                yield 'Red';
            }
        }
        const light = trafficLight();
        let states = [light.next().value, light.next().value, light.next().value, light.next().value];
        return `States: ${states.join(' -> ')}`;
    },
    'async-generator-basic': () => `(Conceptual) async function* myAsyncGen() { await delay(100); yield 1; await delay(100); yield 2; }. This creates an async iterator that produces values after a delay.`,
    'for-await-of': () => `(Conceptual) async function run() { for await (const val of myAsyncGen()) { console.log(val); } } This loop is the standard way to consume async iterators, handling the .next() promise implicitly.`,
    'well-known-symbol-toprimitive': () => {
        const obj = {
            value: 10,
            [Symbol.toPrimitive](hint: string) {
                if (hint === 'number') return this.value;
                if (hint === 'string') return `Value is ${this.value}`;
                return null;
            }
        };
        return `Number conversion: ${Number(obj)}, String conversion: "${String(obj)}"`;
    },
    'well-known-symbol-hasinstance': () => {
        class MyArray {
            static [Symbol.hasInstance](instance: any) {
                return Array.isArray(instance);
            }
        }
        return `[] instanceof MyArray: ${[] instanceof (MyArray as any)}`;
    },
    'well-known-symbol-species': () => {
        class MyArray extends Array {
            static get [Symbol.species]() { return Array; }
        }
        const a = new MyArray(1, 2);
        const mapped = a.map(x => x);
        return `mapped instanceof MyArray: ${mapped instanceof MyArray}, mapped instanceof Array: ${mapped instanceof Array}`;
    },
    'intl-listformat': () => {
        const lf = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
        return lf.format(['A', 'B', 'C']);
    },
    'intl-displaynames': ({ code }: { code: string }) => {
        try {
            const dn = new Intl.DisplayNames(['en'], { type: 'region' });
            return `Display name for ${code}: ${dn.of(code)}`;
        } catch (e: any) { return `Error: ${e.message}`;}
    },
    'intl-segmenter-conceptual': () => `(Conceptual) \`const segmenter = new Intl.Segmenter('en', { granularity: 'word' });\` This creates a segmenter that can iterate over a string and correctly identify word boundaries for that language.`,
    'jit-compilation-conceptual': () => `(Conceptual) The V8 engine first interprets JS. If a piece of code (like a function in a loop) is run many times ("hot"), the JIT compiler compiles it into highly optimized machine code for faster execution on subsequent runs.`,
    'garbage-collection-conceptual': () => `(Conceptual) JS uses automatic memory management. The GC periodically runs a mark-and-sweep algorithm. It starts from root objects (like 'window') and finds all reachable objects ('mark'). Then, it frees the memory of all unreachable objects ('sweep').`,
    'tail-call-optimization-conceptual-adv': () => `(Conceptual) A function is tail-recursive if the recursive call is the final action. \`return myFunc(n-1)\` is a tail call. \`return n * myFunc(n-1)\` is NOT. TCO allows the engine to reuse the current stack frame, preventing stack overflow for deep recursion.`,
    'atomics-wait-notify-conceptual': () => `(Conceptual) Worker 1: \`Atomics.wait(arr, 0, 0)\` (sleeps if index 0 is 0). Worker 2: Does work, then calls \`Atomics.store(arr, 0, 1); Atomics.notify(arr, 0, 1);\` to wake up Worker 1.`,
    'json-modules-conceptual': () => `(Conceptual) \`import config from './config.json' with { type: 'json' };\` allows direct, static import of JSON files, which is safer and more ergonomic than fetching and parsing manually.`,
    'array-findlast-es2023': ({ arr }: { arr: string }) => {
        const nums = arr.split(',').map(Number);
        return `Last element > 25: ${nums.findLast(n => n > 25)}`;
    },
    'array-immutable-methods-es2023': () => {
        const arr = [3, 1, 2];
        const sorted = arr.toSorted();
        return `Original: [${arr.join(', ')}], New Sorted: [${sorted.join(', ')}]`;
    },
    'hashbang-grammar-conceptual': () => `(Conceptual) A JS file starting with \`#!/usr/bin/env node\` can be made executable (\`chmod +x file.js\`) and run directly from the shell (\`./file.js\`) on Unix-like systems.`,
    'promise-withresolvables-conceptual-adv': () => `(Conceptual) Simplifies creating a 'deferred' promise. Instead of \`let res; const p = new Promise(r => res = r);\`, you can just do \`const { promise, resolve } = Promise.withResolvables();\`.`,
    'well-known-symbol-unscopables': () => `(Conceptual) A rarely used feature. An object's \`[Symbol.unscopables]\` property can specify properties that should be hidden from the lexical scope of a \`with\` statement.`,
    'proxy-for-dom-nodes': () => `(Conceptual) You can wrap a DOM element in a Proxy. The 'get' trap could log property access: \`get: (el, prop) => { console.log('Accessing:', prop); return Reflect.get(el, prop); }\`.`,
    'generator-for-async-control-flow': () => `(Conceptual) Before async/await, libraries used a runner function: \`run(function*() { const res = yield fetch(); console.log(res); })\`. The runner would handle the promises yielded by the generator.`,
    'structured-clone': () => {
        const obj = { date: new Date(), map: new Map([['a',1]]) };
        const clone = structuredClone(obj);
        return `Original date === Cloned date? ${obj.date === clone.date}`;
    },
    'intl-locale-conceptual': () => `(Conceptual) \`const locale = new Intl.Locale('en-US', { calendar: 'gregory' });\` creates an object representing a locale. You can access its properties like \`locale.baseName\` or \`locale.calendar\`.`,
    'intl-calendars-timezones': () => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Tokyo', calendar: 'japanese', dateStyle: 'full' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    },
    'reflect-getprototypeof': () => {
        function MyClass() {}
        const inst = new (MyClass as any)();
        return `Prototypes match: ${Reflect.getPrototypeOf(inst) === MyClass.prototype}`;
    },
    'proxy-for-operator-overloading': () => `(Conceptual) You can't overload '+' directly. But you could use a Proxy to intercept a method call like \`add()\` and make it look like an operator: \`vector1.add(vector2)\`.`,
};
