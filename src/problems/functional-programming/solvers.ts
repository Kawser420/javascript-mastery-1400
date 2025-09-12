// HELPER FUNCTIONS
const parseNumber = (input: any): number => {
    const num = Number(input);
    if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
    return num;
};
const parseNumArray = (input: string): number[] => {
    if (!input || typeof input !== 'string' || input.trim() === '') return [];
    return input.split(',').map(item => parseNumber(item.trim()));
}
const parseJson = (input: string): any => {
    try {
        if (/^(\[.*\])$/.test(input.trim())) {
             return new Function(`return ${input}`)();
        }
        throw new Error();
    } catch (e) {
        throw new Error("Invalid JSON/Array format.");
    }
};

export const solvers: Record<string, Function> = {
    'fp-map-double': ({ arr }: { arr: string }) => `[${parseNumArray(arr).map(n => n * 2).join(', ')}]`,
    'fp-filter-even': ({ arr }: { arr: string }) => `[${parseNumArray(arr).filter(n => n % 2 === 0).join(', ')}]`,
    'fp-reduce-sum': ({ arr }: { arr: string }) => parseNumArray(arr).reduce((acc, curr) => acc + curr, 0),
    'currying-simple': ({num1, num2}: { num1: any, num2: any }) => {
        const add = (a: number) => (b: number) => a + b;
        return `Result of add(${num1})(${num2}) is ${add(parseNumber(num1))(parseNumber(num2))}`;
    },
    'pure-function-example': ({ num }: { num: any }) => {
        const square = (n: number) => n * n;
        return square(parseNumber(num));
    },
    'higher-order-function-basic': () => {
        const greet = () => "Hello!";
        const callFunc = (fn: Function) => fn();
        return callFunc(greet);
    },
    'immutability-array': ({ arr }: { arr: string }) => {
        const original = arr.split(',');
        const newArray = [...original, 'd'];
        return `Original: [${original.join(', ')}]\nNew: [${newArray.join(', ')}]`;
    },
    'immutability-object': () => {
        const original = { name: "John", age: 30 };
        const updated = { ...original, age: 31 };
        return `Original: ${JSON.stringify(original)}\nUpdated: ${JSON.stringify(updated)}`;
    },
    'function-composition': ({ num }: { num: any }) => {
        const double = (x: number) => x * 2;
        const addTen = (x: number) => x + 10;
        const compose = (f: Function, g: Function) => (x: any) => f(g(x));
        const composedFunc = compose(addTen, double); // double first, then add ten
        return composedFunc(parseNumber(num));
    },
    'fp-reduce-to-object': ({ arr }: { arr: string }) => {
        const pairs = parseJson(arr);
        const obj = pairs.reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
            acc[key] = value;
            return acc;
        }, {});
        return JSON.stringify(obj);
    },
    'partial-application': ({ num }: { num: any }) => {
        const add = (a: number, b: number) => a + b;
        const addTen = (b: number) => add(10, b);
        return addTen(parseNumber(num));
    },
    'fp-find-first-even': ({ arr }: { arr: string }) => parseNumArray(arr).find(n => n % 2 === 0),
    'point-free-style': ({ arr }: { arr: string }) => {
        const double = (x: number) => x * 2;
        const doubleAll = (array: number[]) => array.map(double);
        return `[${doubleAll(parseNumArray(arr)).join(', ')}]`;
    },
    'side-effects-conceptual': () => `(Conceptual) A side effect is any interaction with the outside world. Impure: \`let x=1; function inc() { x++; }\`. Pure: \`function inc(x) { return x + 1; }\`.`,
    'referential-transparency-conceptual': () => `(Conceptual) A function call is referentially transparent if it can be replaced with its value without changing the program. \`add(2,3)\` can be replaced with \`5\`. \`Math.random()\` cannot.`,
    'fp-every-check': ({ arr }: { arr: string }) => parseNumArray(arr).every(n => n > 0),
    'fp-some-check': ({ arr }: { arr: string }) => parseNumArray(arr).some(n => n < 0),
    'function-piping': ({ num }: { num: any }) => {
        const double = (x: number) => x * 2;
        const addTen = (x: number) => x + 10;
        const pipe = (...fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x);
        const pipedFunc = pipe(double, addTen);
        return pipedFunc(parseNumber(num));
    },
    'immutable-deep-update': () => {
        const state = { user: { name: "John", address: { city: "New York" } } };
        const newState = { ...state, user: { ...state.user, address: { ...state.user.address, city: "London" } } };
        return `New city: ${newState.user.address.city}, Original city: ${state.user.address.city}`;
    },
    'fp-reduce-right': ({ str }: { str: string }) => str.split('').reduceRight((acc, char) => acc + char, ''),
    'fp-map-objects': ({ arr }: { arr: string }) => {
        const data = parseJson(arr);
        return JSON.stringify(data.map((obj: {name: string}) => obj.name));
    },
    'fp-filter-objects': ({ arr }: { arr: string }) => {
        const data = parseJson(arr);
        return JSON.stringify(data.filter((obj: {age: number}) => obj.age > 28));
    },
    'fp-reduce-max': ({ arr }: { arr: string }) => parseNumArray(arr).reduce((max, curr) => (curr > max ? curr : max), -Infinity),
    'memoization-closure-fp': () => `(Conceptual) A higher-order function \`memoize\` wraps another. It uses a closure \`cache = {}\` object. When called, it checks if the result for the current arguments is in the cache. If so, it returns the cached result; otherwise, it computes, stores, and then returns the result.`,
    'currying-advanced': () => {
        const curry = (fn: Function) => {
            return function curried(...args: any[]) {
                if (args.length >= fn.length) {
                    return fn.apply(null, args);
                } else {
                    return function(...args2: any[]) {
                        return curried.apply(null, args.concat(args2));
                    }
                }
            };
        };
        const sum = (a: number, b: number, c: number) => a + b + c;
        const curriedSum = curry(sum);
        return `Result of curriedSum(1)(2)(3) is: ${curriedSum(1)(2)(3)}`;
    },
    'fp-chaining-methods': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const result = nums.filter(n => n % 2 === 0).map(n => n * 2);
        return `[${result.join(', ')}]`;
    },
    'fp-declarative-vs-imperative': () => `(Conceptual) Imperative (HOW): \`let evens = []; for(let i=0; i<arr.length; i++){ if(arr[i]%2===0) evens.push(arr[i]) }\`. Declarative (WHAT): \`const evens = arr.filter(n => n % 2 === 0);\`.`,
    'fp-first-class-functions': () => {
        const add = (a: number, b: number) => a + b;
        const sub = (a: number, b: number) => a - b;
        const ops = [add, sub];
        return `Result of ops[1](10, 3): ${ops[1](10, 3)}`;
    },
    'fp-flatmap': ({ arr }: { arr: string }) => {
        const sentences = arr.split(',');
        const words = sentences.flatMap(s => s.trim().split(' '));
        return JSON.stringify(words);
    },
    'fp-sorting-immutably': ({ arr }: { arr: string }) => {
        const original = parseNumArray(arr);
        const sorted = [...original].sort((a,b) => a - b);
        return `Original: [${original.join(', ')}]\nSorted: [${sorted.join(', ')}]`;
    },
    'fp-group-by': ({ arr }: { arr: string }) => {
        const data = parseJson(arr);
        const grouped = data.reduce((acc: any, obj: any) => {
            const key = obj.type;
            if (!acc[key]) acc[key] = [];
            acc[key].push(obj);
            return acc;
        }, {});
        return JSON.stringify(grouped, null, 2);
    },
    'fp-transducer-conceptual': () => `(Conceptual) A transducer is a composable, higher-order reducer. It allows you to combine transformations like map and filter into a single pass, avoiding the creation of intermediate arrays and improving performance.`,
    'fp-functor-conceptual': () => `(Conceptual) A Functor is a design pattern. It's an object or data structure that wraps a value and has a \`.map()\` method that applies a function to the wrapped value and returns a new Functor wrapping the result. An Array is a common example of a Functor.`,
    'fp-monad-conceptual': () => `(Conceptual) A Monad is a Functor with extra capabilities, typically a method like \`flatMap\` or \`chain\`. This method is like \`map\` but also "flattens" a nested result. Promises are a good example: a \`.then()\` that returns another promise is automatically flattened.`,
    'fp-arity': () => `(Conceptual) Arity is the number of arguments a function takes. \`add(a,b)\` has an arity of 2. Currying transforms a function of arity N into N functions of arity 1.`,
    'fp-recursively-map': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        function map(a: number[], fn: (n: number) => number): number[] {
            if (a.length === 0) return [];
            return [fn(a[0]), ...map(a.slice(1), fn)];
        }
        return `[${map(nums, n => n * 2).join(', ')}]`;
    },
    'fp-recursively-filter': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        function filter(a: number[], fn: (n: number) => boolean): number[] {
            if (a.length === 0) return [];
            const first = fn(a[0]) ? [a[0]] : [];
            return [...first, ...filter(a.slice(1), fn)];
        }
        return `[${filter(nums, n => n % 2 === 0).join(', ')}]`;
    },
    'fp-recursively-reduce': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        function reduce(a: number[], fn: (acc: number, val: number) => number, acc: number): number {
            if (a.length === 0) return acc;
            return reduce(a.slice(1), fn, fn(acc, a[0]));
        }
        return reduce(nums, (a, b) => a + b, 0);
    },
    'fp-identity-function': ({ val }: { val: string }) => {
        const identity = (x: any) => x;
        return `Identity of '${val}' is '${identity(val)}'`;
    },
    'fp-tap-utility': () => {
        const tap = (fn: Function) => (value: any) => {
            fn(value);
            return value;
        };
        // conceptual usage in a chain
        const result = [1,2,3].map(n => n * 2).filter(tap(n => console.log('After filter:', n)));
        return `Result: [${result.join(', ')}] (Check console for tapped values)`;
    },
    'fp-zip-arrays': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const a1 = arr1.split(',');
        const a2 = arr2.split(',');
        const len = Math.min(a1.length, a2.length);
        const zipped = Array.from({ length: len }, (_, i) => [a1[i], a2[i]]);
        return JSON.stringify(zipped);
    },
    'fp-partition-array': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const isEven = (n: number) => n % 2 === 0;
        const partition = (a: number[], predicate: (n: number) => boolean) => {
            return a.reduce((acc, val) => {
                acc[predicate(val) ? 0 : 1].push(val);
                return acc;
            }, [[], []] as [number[], number[]]);
        };
        return JSON.stringify(partition(nums, isEven));
    },
    'fp-debounce-function': () => `(Conceptual) A HOF that takes a function and delay. It returns a new function that uses a closure to hold a timer ID. Each call clears the old timer and sets a new one with \`setTimeout\`.`,
    'fp-throttle-function': () => `(Conceptual) A HOF that takes a function and limit. It returns a new function that uses a closure to hold a \`canRun\` flag. It only runs the function if the flag is true, then sets it to false and uses \`setTimeout\` to reset it after the limit.`,
    'immutable-update-nested-array': () => {
        const state = { items: [{ id: 1, text: 'A' }, { id: 2, text: 'B' }] };
        const newState = {
            ...state,
            items: state.items.map(item => item.id === 2 ? { ...item, text: 'C' } : item)
        };
        return `New text: ${newState.items[1].text}, Original text: ${state.items[1].text}`;
    },
    'fp-function-lifting': () => `(Conceptual) Lifting turns a function that works on values into one that works on containers. \`double = n => n*2\` is lifted by \`.map\` to work on arrays: \`[1,2].map(double)\`.`,
    'fp-applicative-functor-conceptual': () => `(Conceptual) An Applicative lets you apply a function in a container to a value in a container. E.g., apply \`[add]\` to \`[1]\` and \`[2]\` to get \`[3]\`. Useful for combining multiple independent computations that might fail.`,
    'fp-once-function': () => `(Conceptual) A HOF that returns a new function. A closure variable \`hasRun = false\` is used. The returned function only calls the original if \`hasRun\` is false, then sets it to true.`,
    'fp-flip-arguments': () => {
        const subtract = (a: number, b: number) => a - b;
        const flip = (fn: Function) => (...args: any[]) => fn(...args.reverse());
        const flippedSubtract = flip(subtract);
        return `subtract(10, 2) = ${subtract(10, 2)}. flippedSubtract(10, 2) = ${flippedSubtract(10, 2)}.`;
    },
    'fp-prop-utility': () => {
        const prop = (key: string) => (obj: any) => obj[key];
        const getName = prop('name');
        return `Name is: ${getName({ name: 'Alice', age: 30 })}`;
    },
    'fp-idempotence-conceptual': () => `(Conceptual) An operation is idempotent if running it once has the same effect as running it many times. E.g., \`Math.abs(-10)\` is 10. \`Math.abs(Math.abs(-10))\` is also 10. This is a desirable property in systems like HTTP PUT requests.`,
    'fp-y-combinator-conceptual': () => `(Conceptual) A highly abstract concept. It's a higher-order function that takes a non-recursive function and returns a recursive version of it. It's a formal way to achieve recursion without named functions.`,
    'fp-monoid-conceptual': () => `(Conceptual) A Monoid is a set with a binary operation that is associative (\`(a.b).c = a.(b.c)\`) and has an identity element (\`a.empty = a\`). Example: (Numbers, addition, 0). (Strings, concatenation, ""). (Arrays, concatenation, []).`,
    'fp-difference-arrays': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const set2 = new Set(parseNumArray(arr2));
        const diff = parseNumArray(arr1).filter(x => !set2.has(x));
        return `[${diff.join(', ')}]`;
    },
    'fp-pluck-utility': ({ arr, prop }: { arr: string, prop: string }) => {
        const data = parseJson(arr);
        const pluck = (key: string, list: any[]) => list.map(obj => obj[key]);
        return JSON.stringify(pluck(prop, data));
    },
    'fp-memoize-with-key': () => `(Conceptual) Like memoize, but takes a function to generate the cache key. \`memoizeWith(JSON.stringify, fn)\` is the standard version. You could provide a different key generator, e.g., \`(args) => args[0].id\` to cache based on an object's ID.`,
    'fp-unary-function': () => {
        const unary = (fn: Function) => (arg: any) => fn(arg);
        const parseIntUnary = unary(parseInt); // Creates a version of parseInt that only takes one argument.
        return `[1.1, 2.2, 3.3].map(parseIntUnary) results in: ${[1.1, 2.2, 3.3].map(parseIntUnary).join(', ')}`;
    },
    'fp-binary-function': () => `(Conceptual) Similar to unary. \`const binary = fn => (arg1, arg2) => fn(arg1, arg2);\`. Useful for ensuring a callback is only ever called with its first two arguments, ignoring any extras.`,
    'fp-converge-utility': () => {
        const add = (a: number, b: number) => a + b;
        const length = (arr: any[]) => arr.length;
        const converge = (convergingFn: Function, branchingFns: Function[]) => (...args: any[]) => convergingFn(...branchingFns.map(fn => fn(...args)));
        const getAvg = converge( (sum, len) => sum / len, [arr => arr.reduce((a,b)=>a+b, 0), length]);
        return `Average is: ${getAvg([10, 20, 30])}`;
    },
    'fp-trampoline-recursion': () => `(Conceptual) A trampoline takes a function. If the function returns another function, it calls it. If it returns a value, it stops. This turns deep recursion into a loop, avoiding stack overflow.`,
    'lens-conceptual': () => `(Conceptual) A Lens is a pair of functions (a getter and a setter) that focus on a specific part of a data structure. It allows for getting and performing immutable updates on deeply nested data in a clean, composable way.`,
    'fp-intersection-arrays': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const set1 = new Set(parseNumArray(arr1));
        const intersection = parseNumArray(arr2).filter(x => set1.has(x));
        return `[${intersection.join(', ')}]`;
    },
    'fp-union-arrays': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const union = new Set([...parseNumArray(arr1), ...parseNumArray(arr2)]);
        return `[${[...union].join(', ')}]`;
    },
    'fp-negate-predicate': () => {
        const isEven = (n: number) => n % 2 === 0;
        const negate = (predicate: Function) => (...args: any[]) => !predicate(...args);
        const isOdd = negate(isEven);
        return `isOdd(3) is: ${isOdd(3)}`;
    },
    'fp-maybe-monad-conceptual': () => `(Conceptual) A Maybe wraps a value that might be null. You use \`.map()\` to operate on the value. If the value is null, the map does nothing. This avoids explicit null checks and chains operations safely.`,
    'fp-either-monad-conceptual': () => `(Conceptual) Either represents a value that is one of two types: a Right (for success) or a Left (for error). You \`.map()\` on it. The map only applies to a Right. If it's a Left, the map is skipped, propagating the error safely down a chain.`,
    'fp-all-any-utilities': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const isEven = (n: number) => n % 2 === 0;
        const all = (predicate: Function, list: any[]) => list.every(item => predicate(item));
        const any = (predicate: Function, list: any[]) => list.some(item => predicate(item));
        return `All even: ${all(isEven, nums)}. Any even: ${any(isEven, nums)}.`;
    },
    'fp-immutable-splice': () => {
        const original = [1, 2, 3, 4, 5];
        const immutableSplice = (arr: any[], start: number, deleteCount: number) => 
            [...arr.slice(0, start), ...arr.slice(start + deleteCount)];
        const result = immutableSplice(original, 1, 2); // remove 2 elements starting at index 1
        return `Original: [${original.join(', ')}], Result: [${result.join(', ')}]`;
    }
};
