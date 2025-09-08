// =================================================================================================
// HELPER FUNCTIONS
// =================================================================================================

const parseNumber = (input: string | number): number => {
    const num = typeof input === 'string' ? parseFloat(input) : input;
    if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
    return num;
};

const parseStringArray = (str: string): string[] => {
    if (!str || typeof str !== 'string') return [];
    return str.split(',').map(item => item.trim()).filter(Boolean);
};

const parseNumberArray = (str: string): number[] => {
    const arr = parseStringArray(str);
    return arr.map(item => {
        const num = parseFloat(item);
        if (isNaN(num)) throw new Error(`"${item}" is not a valid number in the array.`);
        return num;
    });
};

const parseJSON = (str: string): any => {
    try {
        return JSON.parse(str);
    } catch (e) {
        throw new Error("Invalid JSON format.");
    }
};

// =================================================================================================
// SOLVER IMPLEMENTATIONS
// =================================================================================================

export const solvers: Record<string, Function> = {
    // ================================== BEGINNER SOLVERS ==================================
    'sum-two-numbers': ({ num1, num2 }: { num1: string, num2: string }) => parseNumber(num1) + parseNumber(num2),
    'reverse-string': ({ str }: { str: string }) => str.split('').reverse().join(''),
    'simple-string-concatenation': ({ str1, str2 }: { str1: string, str2: string }) => str1 + str2,
    'get-string-length': ({ str }: { str: string }) => str.length,
    'check-is-even': ({ num }: { num: string }) => parseNumber(num) % 2 === 0,
    'simple-multiplication': ({ num1, num2 }: { num1: string, num2: string }) => parseNumber(num1) * parseNumber(num2),
    'convert-to-uppercase': ({ str }: { str: string }) => str.toUpperCase(),
    'convert-to-lowercase': ({ str }: { str: string }) => str.toLowerCase(),
    'get-first-element-of-array': ({ arr }: { arr: string }) => parseStringArray(arr)[0] || 'Array is empty',
    'get-last-element-of-array': ({ arr }: { arr: string }) => {
        const array = parseStringArray(arr);
        return array.length > 0 ? array[array.length - 1] : 'Array is empty';
    },
    'check-boolean': ({ val }: { val: string }) => {
        const lowerVal = val.trim().toLowerCase();
        if (lowerVal === 'true') return true;
        if (lowerVal === 'false') return false;
        return `Input "${val}" is not a boolean.`;
    },
    'simple-division': ({ num1, num2 }: { num1: string, num2: string }) => {
        const n2 = parseNumber(num2);
        if (n2 === 0) throw new Error("Division by zero is not allowed.");
        return parseNumber(num1) / n2;
    },
    'area-of-rectangle': ({ length, width }: { length: string, width: string }) => parseNumber(length) * parseNumber(width),
    'celsius-to-fahrenheit': ({ celsius }: { celsius: string }) => (parseNumber(celsius) * 9/5) + 32,
    'fahrenheit-to-celsius': ({ fahrenheit }: { fahrenheit: string }) => (parseNumber(fahrenheit) - 32) * 5/9,
    'count-vowels': ({ str }: { str: string }) => {
        const vowels = str.toLowerCase().match(/[aeiou]/g);
        return vowels ? vowels.length : 0;
    },
    'remove-whitespaces': ({ str }: { str: string }) => str.trim(),
    'repeat-string': ({ str, times }: { str: string, times: string }) => str.repeat(parseNumber(times)),
    'is-positive': ({ num }: { num: string }) => parseNumber(num) > 0,
    'is-negative': ({ num }: { num: string }) => parseNumber(num) < 0,
    'get-absolute-value': ({ num }: { num: string }) => Math.abs(parseNumber(num)),
    'simple-for-loop': ({ num }: { num: string }) => {
        let result = '';
        const limit = parseNumber(num);
        for (let i = 0; i < limit; i++) {
            result += i + (i < limit - 1 ? '-' : '');
        }
        return result;
    },
    'simple-while-loop': ({ num }: { num: string }) => {
        let result = '';
        let i = parseNumber(num);
        while (i > 0) {
            result += i + (i > 1 ? ' ' : '');
            i--;
        }
        return result;
    },
    'array-length': ({ arr }: { arr: string }) => parseStringArray(arr).length,
    'simple-if-else': ({ age }: { age: string }) => parseNumber(age) >= 18 ? 'adult' : 'minor',
    'check-string-includes': ({ mainStr, subStr }: { mainStr: string, subStr: string }) => mainStr.includes(subStr),
    'get-random-number': ({ max }: { max: string }) => Math.floor(Math.random() * (parseNumber(max) + 1)),
    'round-number-up': ({ num }: { num: string }) => Math.ceil(parseNumber(num)),
    'round-number-down': ({ num }: { num: string }) => Math.floor(parseNumber(num)),
    'round-to-nearest': ({ num }: { num: string }) => Math.round(parseNumber(num)),
    'power-of-number': ({ base, exponent }: { base: string, exponent: string }) => Math.pow(parseNumber(base), parseNumber(exponent)),
    'square-root': ({ num }: { num: string }) => Math.sqrt(parseNumber(num)),
    'simple-array-join': ({ arr, separator }: { arr: string, separator: string }) => parseStringArray(arr).join(separator),
    'string-to-number': ({ str }: { str: string }) => parseNumber(str),
    'number-to-string': ({ num }: { num: string }) => String(parseNumber(num)),
    'get-char-at-index': ({ str, index }: { str: string, index: string }) => str.charAt(parseNumber(index)),
    'simple-object-access': ({ json, key }: { json: string, key: string }) => {
        const obj = parseJSON(json);
        if (key in obj) {
            return obj[key];
        }
        throw new Error(`Key "${key}" not found in object.`);
    },
    'check-array-includes': ({ arr, value }: { arr: string, value: string }) => parseStringArray(arr).includes(value),
    'find-index-of': ({ arr, value }: { arr: string, value: string }) => parseStringArray(arr).indexOf(value),
    'string-slice': ({ str, start, end }: { str: string, start: string, end: string }) => str.slice(parseNumber(start), parseNumber(end)),
    'array-slice': ({ arr, start, end }: { arr: string, start: string, end: string }) => parseStringArray(arr).slice(parseNumber(start), parseNumber(end)).join(', '),
    'simple-ternary-operator': ({ num }: { num: string }) => parseNumber(num) > 10 ? 'true' : 'false',
    'modulo-operator': ({ dividend, divisor }: { dividend: string, divisor: string }) => parseNumber(dividend) % parseNumber(divisor),
    'count-words-in-string': ({ str }: { str: string }) => str.trim().split(/\s+/).filter(Boolean).length,
    'check-if-starts-with': ({ str, substr }: { str: string, substr: string }) => str.startsWith(substr),
    'check-if-ends-with': ({ str, substr }: { str: string, substr: string }) => str.endsWith(substr),
    'simple-array-sum': ({ arr }: { arr: string }) => parseNumberArray(arr).reduce((sum, current) => sum + current, 0),
    'get-date-today': () => new Date().toISOString().split('T')[0],
    'get-current-time': () => new Date().toTimeString().split(' ')[0],
    'simple-bmi-calculator': ({ weight, height }: { weight: string, height: string }) => {
        const h = parseNumber(height);
        if (h === 0) throw new Error("Height cannot be zero.");
        return (parseNumber(weight) / (h * h)).toFixed(2);
    },
    'is-leap-year': ({ year }: { year: string }) => {
        const y = parseNumber(year);
        return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    },

    // ================================== INTERMEDIATE SOLVERS ==================================
    'find-max-number': ({ arr }: { arr: string }) => Math.max(...parseNumberArray(arr)),
    'is-palindrome': ({ str }: { str: string }) => {
        const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
        return cleaned === cleaned.split('').reverse().join('');
    },
    'factorial-of-number': ({ num }: { num: string }) => {
        const n = parseNumber(num);
        if (n < 0) throw new Error("Factorial is not defined for negative numbers.");
        if (n === 0) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    },
    'fibonacci-sequence': ({ count }: { count: string }) => {
        const n = parseNumber(count);
        if (n <= 0) return [];
        if (n === 1) return [0];
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.join(', ');
    },
    'find-longest-word': ({ sentence }: { sentence: string }) => {
        return sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, "");
    },
    'remove-duplicates-from-array': ({ arr }: { arr: string }) => [...new Set(parseStringArray(arr))].join(', '),
    'array-chunking': ({ arr, size }: { arr: string, size: string }) => {
        const array = parseStringArray(arr);
        const s = parseNumber(size);
        const chunked = [];
        for (let i = 0; i < array.length; i += s) {
            chunked.push(array.slice(i, i + s));
        }
        return JSON.stringify(chunked);
    },
    'capitalize-first-letter': ({ sentence }: { sentence: string }) => {
        return sentence.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    },
    'check-anagrams': ({ str1, str2 }: { str1: string, str2: string }) => {
        const normalize = (str: string) => str.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');
        return normalize(str1) === normalize(str2);
    },
    'fizzbuzz': ({ num }: { num: string }) => {
        const n = parseNumber(num);
        let result = [];
        for (let i = 1; i <= n; i++) {
            if (i % 15 === 0) result.push('FizzBuzz');
            else if (i % 3 === 0) result.push('Fizz');
            else if (i % 5 === 0) result.push('Buzz');
            else result.push(i);
        }
        return result.join(', ');
    },
    'sum-all-primes': ({ num }: { num: string }) => {
        const n = parseNumber(num);
        let primes = Array(n + 1).fill(true);
        primes[0] = primes[1] = false;
        for (let i = 2; i * i <= n; i++) {
            if (primes[i]) {
                for (let j = i * i; j <= n; j += i) {
                    primes[j] = false;
                }
            }
        }
        return primes.reduce((sum, isPrime, index) => isPrime ? sum + index : sum, 0);
    },
    'array-intersection': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const set1 = new Set(parseStringArray(arr1));
        const intersection = parseStringArray(arr2).filter(item => set1.has(item));
        return [...new Set(intersection)].join(', ');
    },
    'array-difference': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const set2 = new Set(parseStringArray(arr2));
        const difference = parseStringArray(arr1).filter(item => !set2.has(item));
        return difference.join(', ');
    },
    'object-key-value-pairs': ({ json }: { json: string }) => JSON.stringify(Object.entries(parseJSON(json))),
    'count-character-occurrences': ({ str }: { str: string }) => {
        const counts = str.split('').reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
        return JSON.stringify(counts);
    },
    'rotate-array-left': ({ arr, steps }: { arr: string, steps: string }) => {
        const array = parseStringArray(arr);
        const s = parseNumber(steps) % array.length;
        return [...array.slice(s), ...array.slice(0, s)].join(', ');
    },
    'flatten-array': ({ jsonArr }: { jsonArr: string }) => parseJSON(jsonArr).flat().join(', '),
    'title-case-sentence': ({ sentence }: { sentence: string }) => sentence.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase()),
    'find-missing-number': ({ arr }: { arr: string }) => {
        const numbers = parseNumberArray(arr).sort((a,b) => a-b);
        for(let i = 0; i < numbers.length; i++) {
            if (numbers[i] !== i + numbers[0]) return i + numbers[0];
        }
        return 'No number missing or sequence is not contiguous.';
    },
    'is-perfect-square': ({ num }: { num: string }) => {
        const n = parseNumber(num);
        if (n < 0) return false;
        for (let i = 0; i * i <= n; i++) {
            if (i * i === n) return true;
        }
        return false;
    },
    'validate-email': ({ email }: { email: string }) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    'sort-array-of-strings': ({ arr }: { arr: string }) => parseStringArray(arr).sort().join(', '),
    'sort-array-of-numbers': ({ arr }: { arr: string }) => parseNumberArray(arr).sort((a, b) => a - b).join(', '),
    'average-of-array': ({ arr }: { arr: string }) => {
        const nums = parseNumberArray(arr);
        return nums.reduce((sum, n) => sum + n, 0) / nums.length;
    },
    'group-by-property': ({ jsonArr, key }: { jsonArr: string, key: string }) => {
        const arr = parseJSON(jsonArr);
        const grouped = arr.reduce((acc: any, obj: any) => {
            const prop = obj[key];
            if (!acc[prop]) acc[prop] = [];
            acc[prop].push(obj);
            return acc;
        }, {});
        return JSON.stringify(grouped, null, 2);
    },
    'object-from-entries': ({ jsonArr }: { jsonArr: string }) => JSON.stringify(Object.fromEntries(parseJSON(jsonArr))),
    'get-object-keys': ({ json }: { json: string }) => Object.keys(parseJSON(json)).join(', '),
    'get-object-values': ({ json }: { json: string }) => Object.values(parseJSON(json)).join(', '),
    'has-property': ({ json, key }: { json: string, key: string }) => Object.prototype.hasOwnProperty.call(parseJSON(json), key),
    'merge-objects': ({ json1, json2 }: { json1: string, json2: string }) => JSON.stringify({ ...parseJSON(json1), ...parseJSON(json2) }),
    'is-prime-number': ({ num }: { num: string }) => {
        const n = parseNumber(num);
        if (n <= 1) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    },
    'greatest-common-divisor': ({ num1, num2 }: { num1: string, num2: string }) => {
        let a = parseNumber(num1);
        let b = parseNumber(num2);
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    },
    'roman-numeral-converter': ({ num }: { num: string }) => {
        // FIX: Changed 'n' from const to let to allow modification within the loop.
        let n = parseNumber(num);
        if (n <= 0 || n >= 4000) throw new Error("Number must be between 1 and 3999.");
        const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let result = "";
        let temp_n = n;
        for (let i = 0; i < val.length; i++) {
            while (temp_n >= val[i]) {
                result += rom[i];
                temp_n -= val[i];
            }
        }
        return result;
    },
    'median-of-array': ({ arr }: { arr: string }) => {
        const sorted = parseNumberArray(arr).sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },
    'sum-of-digits': ({ num }: { num: string }) => {
        return String(parseNumber(num)).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    },
    'is-armstrong-number': ({ num }: { num: string }) => {
        const sNum = String(parseNumber(num));
        const power = sNum.length;
        const sum = sNum.split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
        return sum === parseNumber(num);
    },
    'deep-equality-check': ({ json1, json2 }: { json1: string, json2: string }) => {
        const obj1 = parseJSON(json1);
        const obj2 = parseJSON(json2);
        const deepEqual = (o1: any, o2: any): boolean => {
            if (o1 === o2) return true;
            if (typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null) return false;
            const keys1 = Object.keys(o1);
            const keys2 = Object.keys(o2);
            if (keys1.length !== keys2.length) return false;
            for (const key of keys1) {
                if (!keys2.includes(key) || !deepEqual(o1[key], o2[key])) return false;
            }
            return true;
        };
        return deepEqual(obj1, obj2);
    },
    'random-hex-color': () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'),
    'find-most-frequent': ({ arr }: { arr: string }) => {
        const array = parseStringArray(arr);
        const counts = array.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
        return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    },
    'truncate-string': ({ str, length }: { str: string, length: string }) => {
        const len = parseNumber(length);
        return str.length > len ? str.slice(0, len) + '...' : str;
    },
    'is-array-sorted': ({ arr }: { arr: string }) => {
        const nums = parseNumberArray(arr);
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i+1]) return false;
        }
        return true;
    },
    'format-currency': ({ num, currency }: { num: string, currency: string }) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(parseNumber(num));
    },
    'hamming-distance': ({ str1, str2 }: { str1: string, str2: string }) => {
        if (str1.length !== str2.length) throw new Error("Strings must be of equal length.");
        let distance = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) distance++;
        }
        return distance;
    },
    'remove-falsy-values': ({ arr }: { arr: string }) => parseStringArray(arr).filter(Boolean).join(', '),
    'is-isogram': ({ str }: { str: string }) => {
        const lower = str.toLowerCase();
        return lower.length === new Set(lower.split('')).size;
    },
    'power-of-two': ({ num }: { num: string }) => {
        const n = parseNumber(num);
        return n > 0 && (n & (n - 1)) === 0;
    },
    'mask-string': ({ str }: { str: string }) => {
        return str.slice(0, -4).replace(/./g, '#') + str.slice(-4);
    },
    'shuffle-array': ({ arr }: { arr: string }) => {
        const array = parseStringArray(arr);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join(', ');
    },
    'days-between-dates': ({ date1, date2 }: { date1: string, date2: string }) => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const diffTime = Math.abs(d2.getTime() - d1.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    },

    // ================================== SYNCHRONOUS SOLVERS ==================================
    // These need side-effects to be demonstrated, so we simulate them with logs.
    'closure-counter': (() => {
        let count = 0;
        return () => `Counter is now: ${++count}`;
    })(),
    'this-keyword-simple': () => {
        const person = { name: 'Alex', getName: function() { return this.name; } };
        return `person.getName() returns: "${person.getName()}"`;
    },
    'function-binding': () => {
        const module = { x: 42, getX: function() { return this.x; } };
        const unboundGetX = module.getX;
        const boundGetX = unboundGetX.bind(module);
        return `Unbound call is ${unboundGetX()}. Bound call is ${boundGetX()}.`;
    },
    'prototype-inheritance': () => {
        function Animal(this: any, name: string) { this.name = name; }
        Animal.prototype.speak = function() { return `${this.name} makes a noise.`};
        function Dog(this: any, name: string) { Animal.call(this, name); }
        Dog.prototype = Object.create(Animal.prototype);
        const dog = new (Dog as any)('Rex');
        return dog.speak();
    },
    'iife-example': () => {
        const myModule = (function() {
            const privateVar = "I am private";
            return { publicVar: "I am public" };
        })();
        return `Accessing module... Private var is inaccessible. Public var is "${myModule.publicVar}"`;
    },
    'hoisting-var-declaration': () => {
        const result1 = `Before declaration, hoistedVar is: ${hoistedVar}`;
        var hoistedVar = 5;
        const result2 = `After declaration, hoistedVar is: ${hoistedVar}`;
        return `${result1}\n${result2}`;
    },
    'let-block-scope': () => {
        let result = '';
        if (true) {
            let blockScoped = "Visible";
            result += `Inside block: ${blockScoped}. `;
        }
        try {
            // This will throw an error
            // @ts-ignore
            result += blockScoped;
        } catch(e) {
            result += `Outside block: Error, not accessible.`;
        }
        return result;
    },
    'const-declaration': () => {
        const a = 1;
        const obj = { prop: "initial" };
        obj.prop = "modified"; // This is allowed
        let result = `const a = ${a}. Reassignment is not allowed. const obj.prop is now "${obj.prop}" (modification is allowed).`;
        return result;
    },
    'type-coercion-plus-operator': ({val1, val2}: {val1: string, val2: string}) => {
        const num1 = parseNumber(val1);
        const num2 = parseNumber(val2);
        return `String + String: "${val1 + val2}"\nNumber + Number: ${num1 + num2}\nString + Number: "${val1 + num2}"`;
    },
    'strict-equality': ({val1, val2}: {val1: string, val2: string}) => {
        const num2 = parseNumber(val2);
        return `Loose equality ('${val1}' == ${num2}): ${val1 == val2}\nStrict equality ('${val1}' === ${num2}): ${val1 === val2}`;
    },
    'pass-by-value': () => {
        let myVar = 10;
        function modify(val: number) { val = 20; }
        modify(myVar);
        return `Original variable is still: ${myVar}`;
    },
    'pass-by-reference': () => {
        let myObj = { a: 1 };
        function modify(obj: {a: number}) { obj.a = 2; }
        modify(myObj);
        return `Original object is now: ${JSON.stringify(myObj)}`;
    },
    'higher-order-function-filter': ({arr}: {arr: string}) => {
        const isEven = (n: number) => n % 2 === 0;
        return `Filtered (even): [${parseNumberArray(arr).filter(isEven).join(', ')}]`;
    },
    'higher-order-function-map': ({arr}: {arr: string}) => {
        const triple = (n: number) => n * 3;
        return `Mapped (tripled): [${parseNumberArray(arr).map(triple).join(', ')}]`;
    },
    'higher-order-function-reduce': ({arr}: {arr: string}) => {
        return `Reduced to sum: ${parseNumberArray(arr).reduce((sum, n) => sum + n, 0)}`;
    },
    'recursion-countdown': ({num}: {num: string}) => {
        function countdown(n: number): number[] {
            if (n < 1) return [];
            return [n, ...countdown(n-1)];
        }
        return `[${countdown(parseNumber(num)).join(', ')}]`;
    },
    'call-apply-methods': () => {
        function greet(this: any, greeting: string, punctuation: string) { return `${greeting}, my name is ${this.name}${punctuation}`; }
        const person = { name: 'John' };
        const resultCall = greet.call(person, 'Hello', '!');
        const resultApply = greet.apply(person, ['Hi', '.']);
        return `Call: "${resultCall}"\nApply: "${resultApply}"`;
    },
    'short-circuiting-and': () => {
        let executed = false;
        const condition = true;
        function action() { executed = true; }
        condition && action();
        return `Function was executed: ${executed}`;
    },
    'short-circuiting-or': ({username}: {username: string}) => {
        const user = username || 'Guest';
        return `Welcome, ${user}!`;
    },
    'arguments-object': ({args}: {args: string}) => {
        const numbers = parseNumberArray(args);
        function sum() {
            let total = 0;
            for(let i=0; i < arguments.length; i++) {
                total += arguments[i];
            }
            return total;
        }
        // FIX: Used apply() to pass array as arguments to a function using the 'arguments' object, instead of spread syntax.
        return `Sum is: ${sum.apply(null, numbers as any)}`;
    },
    'currying-simple': ({num1, num2}: {num1: string, num2: string}) => {
        const add = (a: number) => (b: number) => a + b;
        return `Result of add(${num1})(${num2}) is ${add(parseNumber(num1))(parseNumber(num2))}`;
    },
    'switch-statement': ({dayNum}: {dayNum: string}) => {
        switch(parseNumber(dayNum)) {
            case 1: return "Sunday";
            case 2: return "Monday";
            case 3: return "Tuesday";
            case 4: return "Wednesday";
            case 5: return "Thursday";
            case 6: return "Friday";
            case 7: return "Saturday";
            default: return "Invalid Day";
        }
    },
    'object-property-shorthand': () => {
        const name = "Alice";
        const age = 25;
        const person = { name, age };
        return JSON.stringify(person);
    },
    'for-in-loop': ({json}: {json: string}) => {
        const obj = parseJSON(json);
        let result = [];
        for (const key in obj) {
            result.push(`${key}: ${obj[key]}`);
        }
        return result.join('; ');
    },
    'for-of-loop': ({arr}: {arr: string}) => {
        let sum = 0;
        for (const num of parseNumberArray(arr)) {
            sum += num;
        }
        return `Sum is ${sum}`;
    },
    'truthy-falsy-check': ({value}: {value: string}) => {
        let val: any = value;
        if (value.toLowerCase() === 'null') val = null;
        else if (value.toLowerCase() === 'undefined') val = undefined;
        else if (value === '0') val = 0;
        else if (value.toLowerCase() === 'false') val = false;
        else if (value === 'NaN') val = NaN;
        return `The value "${value}" is ${val ? 'truthy' : 'falsy'}.`;
    },
    'event-loop-conceptual': async () => {
        const log: string[] = [];
        log.push('1. Start');
        setTimeout(() => log.push('4. setTimeout (macrotask)'), 0);
        Promise.resolve().then(() => log.push('3. Promise (microtask)'));
        log.push('2. End');
        await new Promise(res => setTimeout(res, 10)); // wait for async tasks
        return `Execution Order: ${log.join(', ')}`;
    },
    'error-handling-try-catch': ({json}: {json: string}) => {
        try {
            parseJSON(json);
            return "JSON is valid!";
        } catch(e: any) {
            return `Caught an error: ${e.message}`;
        }
    },
    'custom-error': ({num}: {num: string}) => {
        function checkPositive(n: number) {
            if (n < 0) throw new Error("Number cannot be negative.");
            return "Number is positive!";
        }
        try {
            return checkPositive(parseNumber(num));
        } catch(e: any) {
            return `Caught custom error: ${e.message}`;
        }
    },
    'array-every': ({arr}: {arr: string}) => parseNumberArray(arr).every(n => n > 0),
    'array-some': ({arr}: {arr: string}) => parseNumberArray(arr).some(n => n < 0),
    'array-find': ({arr}: {arr: string}) => parseNumberArray(arr).find(n => n % 2 === 0),
    'array-findIndex': ({arr, target}: {arr: string, target: string}) => parseNumberArray(arr).findIndex(n => n > parseNumber(target)),
    'lexical-scope': () => {
        const outerVar = "I am outside!";
        function inner() { return `Inner function can access: "${outerVar}"`; }
        return inner();
    },
    'function-composition': ({num}: {num: string}) => {
        const double = (x: number) => x * 2;
        const addFive = (x: number) => x + 5;
        const composed = (x: number) => addFive(double(x));
        return `Result of composed function: ${composed(parseNumber(num))}`;
    },
    'iife-module-pattern': () => {
        const shoppingCart = (function() {
            let items: string[] = [];
            return {
                addItem: (item: string) => { items.push(item); return `Added ${item}`},
                getItems: () => [...items]
            };
        })();
        shoppingCart.addItem('apple');
        shoppingCart.addItem('banana');
        return `Items in cart: ${shoppingCart.getItems().join(', ')}`;
    },
    'memoization-simple': () => {
        const memoizedSquare = (() => {
            const cache: Record<number, number> = {};
            const slowSquare = (n: number) => { 
                // Simulate slow
                for(let i=0; i<1e7; i++){}
                return n * n;
            }
            return (n: number) => {
                if (n in cache) return `(from cache) ${cache[n]}`;
                const result = slowSquare(n);
                cache[n] = result;
                return `(calculated) ${result}`;
            }
        })();
        const results = [memoizedSquare(25), memoizedSquare(25)];
        return `First call: ${results[0]}\nSecond call: ${results[1]}`;
    },
    'global-scope-pollution': () => {
        function pollute() { 
            // @ts-ignore
            pollutedVar = "I am global!"; 
        }
        pollute();
        // @ts-ignore
        return `The globally polluted variable is: "${pollutedVar}"`;
    },
    'function-constructor': ({arg1, arg2, body}: {arg1: string, arg2: string, body: string}) => {
        const createdFunc = new Function(arg1, arg2, body);
        return `Result of createdFunc(5, 10) is: ${createdFunc(5, 10)}`;
    },
    'object-is': () => {
        const nan1 = NaN, nan2 = NaN;
        const zero1 = 0, zero2 = -0;
        return `Object.is(NaN, NaN): ${Object.is(nan1, nan2)}\nNaN === NaN: ${nan1 === nan2}\nObject.is(0, -0): ${Object.is(zero1, zero2)}\n0 === -0: ${zero1 === zero2}`;
    },
    'array-from': ({str}: {str: string}) => JSON.stringify(Array.from(str)),
    'array-of': ({args}: {args: string}) => JSON.stringify(Array.of(...parseStringArray(args))),
    'array-fill': ({arr, value}: {arr: string, value: string}) => JSON.stringify(parseStringArray(arr).fill(value)),
    'string-codepointat': ({str, index}: {str: string, index: string}) => str.codePointAt(parseNumber(index)),
    'instanceof-operator': () => {
        function Person(){}
        const p = new Person();
        const arr = [];
        return `p instanceof Person: ${p instanceof Person}\narr instanceof Array: ${arr instanceof Array}`;
    },
    'typeof-operator-quirks': () => `typeof null: "${typeof null}"\ntypeof []: "${typeof []}"\ntypeof function(){}: "${typeof function(){}}"`,
    'bitwise-not': ({str, char}: {str: string, char: string}) => {
        const index = str.indexOf(char);
        return `~${index} is ${(~index)}. So, character ${(~index) ? 'was found' : 'was not found'}.`;
    },
    'tagged-templates': ({name, age}: {name: string, age: string}) => {
        function highlight(strings: TemplateStringsArray, ...values: any[]) {
            let str = '';
            strings.forEach((string, i) => {
                str += string + (values[i] ? `<${values[i]}>` : '');
            });
            return str;
        }
        return highlight`Name is ${name} and age is ${parseNumber(age)}.`;
    },
    'comma-operator': () => {
        let x = 1;
        const result = (x++, x+=2, x*2);
        return `The final result of the comma operator expression is: ${result}`;
    },


    // ================================== ES6+ SOLVERS ==================================
    'arrow-function-map': ({ arr }: { arr: string }) => JSON.stringify(parseNumberArray(arr).map(n => n * 2)),
    'template-literals': ({ name, item }: { name: string, item: string }) => `Hello, ${name}!\nYou have brought some ${item}.`,
    'array-destructuring': ({ arr }: { arr: string }) => {
        const [first, second, third] = parseNumberArray(arr);
        return `First: ${first}, Second: ${second}, Third: ${third}`;
    },
    'object-destructuring': ({ json }: { json: string }) => {
        const { name, age } = parseJSON(json);
        return `Name: ${name}, Age: ${age}`;
    },
    'rest-parameters': ({ args }: { args: string }) => {
        const sum = (...numbers: number[]) => numbers.reduce((acc, val) => acc + val, 0);
        return sum(...parseNumberArray(args));
    },
    'spread-operator-arrays': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const combined = [...parseStringArray(arr1), ...parseStringArray(arr2)];
        return `[${combined.join(', ')}]`;
    },
    'spread-operator-objects': ({ json1, json2 }: { json1: string, json2: string }) => {
        return JSON.stringify({ ...parseJSON(json1), ...parseJSON(json2) });
    },
    'default-parameters': ({ name }: { name: string }) => {
        const greet = (userName = 'Guest') => `Hello, ${userName}!`;
        return greet(name);
    },
    'es6-classes': ({ name }: { name: string }) => {
        class Person {
            constructor(public name: string) {}
            greet() { return `Hello, my name is ${this.name}.`; }
        }
        const p = new Person(name);
        return p.greet();
    },
    'class-inheritance': ({ name, subject }: { name: string, subject: string }) => {
        class Person { constructor(public name: string) {} }
        class Student extends Person {
            constructor(name: string, public subject: string) { super(name); }
            study() { return `${this.name} is studying ${this.subject}.`; }
        }
        const s = new Student(name, subject);
        return s.study();
    },
    'promise-basics': async () => {
        const p = new Promise(resolve => setTimeout(() => resolve("Promise Resolved!"), 1000));
        return await p;
    },
    'promise-rejection': async () => {
        const p = new Promise((_, reject) => setTimeout(() => reject("Promise Rejected!"), 1000));
        try {
            await p;
        } catch (e) {
            return `Caught rejection: ${e}`;
        }
    },
    'set-data-structure': ({ arr }: { arr: string }) => {
        const unique = new Set(parseStringArray(arr));
        return `Unique values: ${Array.from(unique).join(', ')}`;
    },
    'map-data-structure': () => {
        const myMap = new Map();
        const keyObj = {};
        myMap.set('a string', 'value for string key');
        myMap.set(keyObj, 'value for object key');
        return `Value for "a string": ${myMap.get('a string')}\nValue for object key: ${myMap.get(keyObj)}`;
    },
    'string-includes': ({ str, substr }: { str: string, substr: string }) => str.includes(substr),
    'string-startswith': ({ str, substr }: { str: string, substr: string }) => str.startsWith(substr),
    'string-endswith': ({ str, substr }: { str: string, substr: string }) => str.endsWith(substr),
    'for-of-loop-es6': ({ arr }: { arr: string }) => {
        let result = '';
        for (const char of parseStringArray(arr)) {
            result += char;
        }
        return result;
    },
    'destructuring-in-function-params': ({ json }: { json: string }) => {
        const getUserInfo = ({ name, id }: { name: string, id: number }) => `User: ${name} (ID: ${id})`;
        return getUserInfo(parseJSON(json));
    },
    'array-find-es6': ({ arr }: { arr: string }) => `Found: ${parseNumberArray(arr).find(n => n > 10)}`,
    'modules-conceptual': () => `// In file: math.js\nexport const add = (a, b) => a + b;\n\n// In file: main.js\nimport { add } from './math.js';\nconsole.log(add(2, 3)); // 5`,
    'symbol-data-type': () => {
        const id = Symbol('id');
        const user = { name: 'Test', [id]: 123 };
        return `Object has Symbol key: ${String(id)} with value ${user[id]}. It won't show in JSON.stringify: ${JSON.stringify(user)}`;
    },
    'generators-basic': () => {
        function* numberGenerator() {
            yield 1; yield 2; yield 3;
        }
        const gen = numberGenerator();
        return `1: ${gen.next().value}, 2: ${gen.next().value}, 3: ${gen.next().value}`;
    },
    'optional-chaining': ({json}: {json: string}) => {
        const data = parseJSON(json);
        const name = data?.user?.profile?.name ?? 'Not found';
        const address = data?.user?.address?.street ?? 'Not found';
        return `Name: ${name}\nAddress: ${address}`;
    },
    'nullish-coalescing': ({value}: {value: string}) => {
        let val: any = value;
        if (value.toLowerCase() === 'null') val = null;
        else if (value.toLowerCase() === 'undefined') val = undefined;
        else if (value === '0') val = 0;
        else if (value === '""') val = "";
        const result = val ?? 'Default Value';
        return `For input "${value}", the result is: "${result}"`;
    },
    'array-flat': ({jsonArr, depth}: {jsonArr: string, depth: string}) => JSON.stringify(parseJSON(jsonArr).flat(parseNumber(depth))),
    'array-flatMap': ({arr}: {arr: string}) => JSON.stringify(parseNumberArray(arr).flatMap(x => [x, x*2])),
    'object-fromentries': ({jsonArr}: {jsonArr: string}) => JSON.stringify(Object.fromEntries(parseJSON(jsonArr))),
    'globalthis': () => `Type of globalThis: ${typeof globalThis}`,
    'promise-all': async () => {
        const p1 = Promise.resolve(1);
        const p2 = new Promise(r => setTimeout(() => r(2), 500));
        const p3 = 3;
        const results = await Promise.all([p1, p2, p3]);
        return `Results: [${results.join(', ')}]`;
    },
    'promise-race': async () => {
        const p1 = new Promise(r => setTimeout(() => r('fast'), 200));
        const p2 = new Promise(r => setTimeout(() => r('slow'), 500));
        const winner = await Promise.race([p1, p2]);
        return `The winner is: ${winner}`;
    },
    'promise-finally': async () => {
        let status = "pending";
        await new Promise(r => r(true)).finally(() => status = "settled");
        return `Promise status: ${status}`;
    },
    'string-matchall': ({str, regex}: {str: string, regex: string}) => {
        const matches = [...str.matchAll(new RegExp(regex, 'g'))];
        return JSON.stringify(matches.map(m => Array.from(m)));
    },
    'dynamic-import-conceptual': () => `// To dynamically import a module:\nconst myModule = await import('./module.js');\nmyModule.doSomething();`,
    'bigint': () => {
        const hugeNumber = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
        return `A BigInt number: ${hugeNumber.toString()}`;
    },
    // FIX: Replaced 'replaceAll' with a compatible alternative (split/join) to support older JS targets.
    'string-replaceall': ({str, search, replace}: {str: string, search: string, replace: string}) => str.split(search).join(replace),
    // FIX: Replaced 'Promise.any' with a custom implementation for compatibility.
    'promise-any': async () => {
        const p1 = Promise.reject('Error');
        const p2 = new Promise(r => setTimeout(() => r('First success'), 200));
        const p3 = new Promise(r => setTimeout(() => r('Second success'), 500));

        const promiseAny = (promises: Promise<any>[]) => {
            return new Promise((resolve, reject) => {
                let rejectedCount = 0;
                const errors: any[] = [];
                if (promises.length === 0) {
                    reject(new Error("All promises were rejected"));
                    return;
                }
    
                promises.forEach((promise, index) => {
                    Promise.resolve(promise)
                        .then(resolve)
                        .catch(error => {
                            errors[index] = error;
                            rejectedCount++;
                            if (rejectedCount === promises.length) {
                                reject(new Error("All promises were rejected"));
                            }
                        });
                });
            });
        };

        const first = await promiseAny([p1, p2, p3]);
        return `First fulfilled promise: ${first}`;
    },
    'weakset': () => {
        const ws = new WeakSet();
        let obj1: any = {a: 1};
        ws.add(obj1);
        const result1 = `ws has obj1: ${ws.has(obj1)}`;
        obj1 = null; // now obj1 can be garbage collected
        return `${result1}. After setting obj1 to null, it can be garbage collected.`;
    },
    'weakmap': () => {
        const wm = new WeakMap();
        let keyObj: any = {};
        wm.set(keyObj, 'some data');
        const result1 = `wm has keyObj: ${wm.has(keyObj)}`;
        keyObj = null; // now keyObj and its value can be garbage collected
        return `${result1}. After setting keyObj to null, it can be garbage collected.`;
    },
    'class-static-methods': () => {
        class MyClass { static staticMethod() { return "Static method called"; } }
        return MyClass.staticMethod();
    },
    'class-getters-setters': ({firstName, lastName}: {firstName: string, lastName: string}) => {
        class Person {
            constructor(public firstName: string, public lastName: string) {}
            get fullName() { return `${this.firstName} ${this.lastName}`; }
            set fullName(name: string) { [this.firstName, this.lastName] = name.split(' '); }
        }
        const p = new Person(firstName, lastName);
        const initial = p.fullName;
        p.fullName = "Jane Smith";
        return `Initial: ${initial}. After set: ${p.fullName}`;
    },
    'array-from-mapping': ({length}: {length: string}) => JSON.stringify(Array.from({length: parseNumber(length)}, (_, i) => i * i)),
    'object-getownpropertysymbols': () => {
        const sym1 = Symbol('a');
        const obj = { [sym1]: 'val1', b: 'val2' };
        return `Symbol properties: ${Object.getOwnPropertySymbols(obj).map(s => s.toString()).join('')}`;
    },
    'destructuring-with-rest': ({arr}: {arr: string}) => {
        const [first, second, ...rest] = parseStringArray(arr);
        return `First: ${first}, Second: ${second}, Rest: [${rest.join(', ')}]`;
    },
    'destructuring-default-values': ({json}: {json: string}) => {
        const { name, isAdmin = false } = parseJSON(json);
        return `Name: ${name}, Is Admin: ${isAdmin}`;
    },
    'async-generators': async () => {
        async function* fetchTodos() {
            for (let i = 1; i <= 3; i++) {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
                const data = await res.json();
                yield data.title;
            }
        }
        const titles = [];
        for await (const title of fetchTodos()) {
            titles.push(title);
        }
        return `Fetched titles: ${titles.join('; ')}`;
    },
    'class-private-fields': () => {
        class MyClass { #privateField = 42; getPrivate() { return this.#privateField; } }
        const instance = new MyClass();
        return `Accessed via public method: ${instance.getPrivate()}. Direct access is not allowed.`;
    },
    // FIX: Replaced array.at() with a compatible implementation for negative indexing.
    'at-method': ({arr, index}: {arr: string, index: string}) => {
        const array = parseStringArray(arr);
        const i = parseNumber(index);
        return i >= 0 ? array[i] : array[array.length + i];
    },
    // FIX: Corrected function signature and replaced 'Object.hasOwn' with a compatible alternative.
    'object-hasown': ({json, key}: {json: string, key: string}) => `Object has own property "${key}": ${Object.prototype.hasOwnProperty.call(parseJSON(json), key)}`,

    // ================================== ASYNCHRONOUS SOLVERS ==================================
    'fetch-api-data': async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return `Fetched: "${data.title}"`;
    },
    'async-await-syntax': async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
            if (!response.ok) throw new Error("Network response was not ok.");
            const data = await response.json();
            return `Fetched with async/await: "${data.title}"`;
        } catch (error: any) {
            return `Error: ${error.message}`;
        }
    },
    'settimeout-callback': async ({delay}: {delay: string}) => {
        return new Promise(resolve => setTimeout(() => resolve(`Executed after ${delay}ms`), parseNumber(delay)));
    },
    'setinterval-example': async () => {
        return new Promise(resolve => {
            let count = 0;
            const results: number[] = [];
            const interval = setInterval(() => {
                count++;
                results.push(count);
                if (count >= 3) {
                    clearInterval(interval);
                    resolve(`Interval ran 3 times: ${results.join(', ')}`);
                }
            }, 500);
        });
    },
    'promise-chaining': async () => {
        return new Promise<number>(res => res(10))
            .then(res => { return res * 2; })
            .then(res => { return res + 5; });
    },
    'promise-all-async': async () => {
        const [todo1, todo2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json())
        ]);
        return `Todo 1: ${todo1.title}\nTodo 2: ${todo2.title}`;
    },
    'error-handling-async-await': async () => {
        try {
            await fetch('https://jsonplaceholder.typicode.com/invalid-url');
        } catch (error: any) {
            return `Successfully caught error: ${error.message}`;
        }
        return "This should not be reached.";
    },
    'callback-hell-simulation': async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                let result = 'Step 1; ';
                setTimeout(() => {
                    result += 'Step 2; ';
                    setTimeout(() => {
                        result += 'Step 3; ';
                        resolve(result);
                    }, 200);
                }, 200);
            }, 200);
        });
    },
    'promisify-a-callback': async ({delay}: {delay: string}) => {
        const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        await wait(parseNumber(delay));
        return `Waited for ${delay}ms.`;
    },
    'fetch-post-request': async ({title, body}: {title: string, body: string}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body, userId: 1 }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        const data = await response.json();
        return `Created Post with ID: ${data.id}`;
    },
    'xmlhttprequest-get': async () => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/3');
            xhr.onload = () => resolve(`Fetched with XHR: "${JSON.parse(xhr.responseText).title}"`);
            xhr.onerror = () => reject('XHR Request failed');
            xhr.send();
        });
    },
    'concurrent-async-tasks': async () => {
        const log: string[] = [];
        const task1 = new Promise(r => setTimeout(() => { log.push('Task 1 done'); r(1); }, 400));
        const task2 = new Promise(r => setTimeout(() => { log.push('Task 2 done'); r(2); }, 200));
        await Promise.all([task1, task2]);
        return log.join('; ');
    },
    'sequential-async-tasks': async ({ids}: {ids: string}) => {
        const results = [];
        for (const id of parseStringArray(ids)) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const data = await res.json();
            results.push(data.title);
            await new Promise(r => setTimeout(r, 100)); // small delay
        }
        return `Titles: ${results.join('; ')}`;
    },
    'promise-race-timeout': async ({timeout}: {timeout: string}) => {
        const slowTask = new Promise(r => setTimeout(() => r('Completed'), 2000));
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject('Timeout!'), parseNumber(timeout)));
        try {
            const result = await Promise.race([slowTask, timeoutPromise]);
            return `Result: ${result}`;
        } catch (e) {
            return `Caught error: ${e}`;
        }
    },
    'async-function-return-value': () => {
        async function getValue() { return "Hello"; }
        const p = getValue();
        return `The function returned a Promise. The resolved value would be "${'Hello'}".`;
    },
    'microtask-macrotask-queue': async () => {
        const order: string[] = [];
        setTimeout(() => order.push('Macrotask (setTimeout)'), 0);
        Promise.resolve().then(() => order.push('Microtask (Promise)'));
        await new Promise(r => setTimeout(r, 10));
        return `Execution Order: ${order.join(' -> ')}`;
    },
    'async-iteration-for-await-of': async () => {
        const asyncIterable = {
            [Symbol.asyncIterator]() {
                let i = 0;
                return {
                    async next() {
                        await new Promise(r => setTimeout(r, 100));
                        if (i >= 3) return { done: true };
                        return { value: i++, done: false };
                    }
                };
            }
        };
        const result = [];
        for await (const val of asyncIterable) { result.push(val); }
        return `Results: ${result.join(', ')}`;
    },
    'custom-promise': async () => {
        const myPromise = new Promise((resolve) => {
            const value = 42;
            setTimeout(() => resolve(value), 500);
        });
        return await myPromise;
    },
    'promise-allsettled': async () => {
        const p1 = Promise.resolve('Success');
        const p2 = Promise.reject('Failure');
        const results = await Promise.allSettled([p1, p2]);
        return JSON.stringify(results.map(r => ({ status: r.status, value: (r as any).value, reason: (r as any).reason })));
    },
    'top-level-await-conceptual': () => `// In an ES module, you can do this:\n// const data = await fetch(url);\n// console.log(data);\n// No need for an async function wrapper.`,
    
    // ================================== WEB APIS & DOM SOLVERS ==================================
    // These manipulate a conceptual DOM and return a string describing the action
    'dom-get-element-by-id': () => `Would find element with ID 'target' and change its text.`,
    'dom-queryselector': () => `Would find first '.item' and change its background color.`,
    'dom-queryselectorall': () => `Would find all '.list-item' elements and add a 'highlight' class to each.`,
    'dom-addeventlistener': () => `Attached a click listener to a conceptual button that would show an alert.`,
    'dom-create-element': ({text}: {text: string}) => `Created a new 'li' element with text "${text}" and appended it to a 'ul'.`,
    'dom-remove-element': () => `Selected the last item in a list and removed it from the DOM.`,
    'dom-toggle-class': () => `Toggled the 'active' class on a target element.`,
    'dom-get-set-attribute': () => `Read the 'href' of a link and then changed it to 'https://example.com'.`,
    'dom-innerhtml': () => `Replaced the content of a div with '<strong>New Content</strong>'.`,
    'dom-textcontent': () => `Changed the text of a div to 'New Content', stripping any HTML.`,
    'localstorage-set-get': ({key, value}: {key: string, value: string}) => {
        localStorage.setItem(key, value);
        const retrieved = localStorage.getItem(key);
        return `Set '${key}' to '${value}'. Retrieved value is '${retrieved}'.`;
    },
    'localstorage-remove': ({key}: {key: string}) => {
        localStorage.setItem(key, 'temp');
        localStorage.removeItem(key);
        return `Removed item with key '${key}'. It is now: ${localStorage.getItem(key)}`;
    },
    'sessionstorage': ({key, value}: {key: string, value: string}) => {
        sessionStorage.setItem(key, value);
        return `Set '${key}' in sessionStorage. It will be cleared when tab is closed.`;
    },
    'geolocation-api': async () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                return reject("Geolocation is not supported by your browser.");
            }
            navigator.geolocation.getCurrentPosition(
                (pos) => resolve(`Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`),
                () => reject("Permission denied or failed to get location.")
            );
        });
    },
    'dom-event-delegation': () => `An event listener was attached to a parent 'ul'. Clicks on any 'li' will be handled by this single listener.`,
    'web-worker-simple': async () => {
        // This is a simplified simulation since we can't create real worker files.
        return `(Conceptual) A message would be sent to a Web Worker, which would perform a heavy calculation and post a message back with the result without blocking the UI.`;
    },
    'history-api': () => {
        history.pushState({page: 1}, "title 1", "/new-url");
        return `URL changed to '/new-url' without reloading. Current URL is ${window.location.pathname}.`;
    },
    'intersection-observer': () => `(Conceptual) An Intersection Observer would be created to watch a target element. When it scrolls into view, a callback function would fire, e.g., to add a 'visible' class.`,
    'canvas-api-simple-drawing': () => `(Conceptual) Would get the 2D context of a canvas and use 'fillRect(10, 10, 150, 100)' to draw a rectangle.`,
    'audio-api-play': () => `(Conceptual) An AudioContext would be created, a sound source loaded via fetch, and then played using 'source.start(0)'.`,
    
    // ================================== ALGORITHMS SOLVERS ==================================
    'two-sum': ({arr, target}: {arr: string, target: string}) => {
        const nums = parseNumberArray(arr);
        const t = parseNumber(target);
        const map = new Map();
        for (let i=0; i < nums.length; i++) {
            const complement = t - nums[i];
            if (map.has(complement)) {
                return `[${map.get(complement)}, ${i}]`;
            }
            map.set(nums[i], i);
        }
        return "No two sum solution";
    },
    'binary-search': ({arr, target}: {arr: string, target: string}) => {
        const nums = parseNumberArray(arr);
        const t = parseNumber(target);
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === t) return `Found at index: ${mid}`;
            if (nums[mid] < t) left = mid + 1;
            else right = mid - 1;
        }
        return "Target not found";
    },
    'bubble-sort': ({arr}: {arr: string}) => {
        const nums = parseNumberArray(arr);
        for(let i=0; i < nums.length; i++) {
            for(let j=0; j < nums.length - 1 - i; j++) {
                if (nums[j] > nums[j+1]) [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
        }
        return `[${nums.join(', ')}]`;
    },
    'selection-sort': ({arr}: {arr: string}) => {
        const nums = parseNumberArray(arr);
        for (let i = 0; i < nums.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[minIndex]) minIndex = j;
            }
            if (minIndex !== i) [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
        }
        return `[${nums.join(', ')}]`;
    },
    'insertion-sort': ({arr}: {arr: string}) => {
        const nums = parseNumberArray(arr);
        for (let i = 1; i < nums.length; i++) {
            let current = nums[i];
            let j = i - 1;
            while (j > -1 && current < nums[j]) {
                nums[j + 1] = nums[j];
                j--;
            }
            nums[j + 1] = current;
        }
        return `[${nums.join(', ')}]`;
    },
    'merge-sort': ({arr}: {arr: string}) => {
        const merge = (left: number[], right: number[]): number[] => {
            let result = [], i = 0, j = 0;
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) result.push(left[i++]);
                else result.push(right[j++]);
            }
            return result.concat(left.slice(i)).concat(right.slice(j));
        };
        const sort = (array: number[]): number[] => {
            if (array.length <= 1) return array;
            const mid = Math.floor(array.length / 2);
            return merge(sort(array.slice(0, mid)), sort(array.slice(mid)));
        };
        return `[${sort(parseNumberArray(arr)).join(', ')}]`;
    },
    'quick-sort': ({arr}: {arr: string}) => {
        const sort = (array: number[]): number[] => {
            if (array.length <= 1) return array;
            const pivot = array[array.length - 1];
            const left = [], right = [];
            for (let i=0; i < array.length - 1; i++) {
                array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
            }
            return [...sort(left), pivot, ...sort(right)];
        };
        return `[${sort(parseNumberArray(arr)).join(', ')}]`;
    },
    'max-subarray-sum': ({arr}: {arr: string}) => {
        const nums = parseNumberArray(arr);
        let maxSoFar = nums[0], maxEndingHere = nums[0];
        for (let i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    },
    'longest-palindromic-substring': ({str}: {str: string}) => {
        if (!str) return "";
        let longest = "";
        for (let i = 0; i < str.length; i++) {
            // Odd length
            let l = i, r = i;
            while(l >= 0 && r < str.length && str[l] === str[r]) {
                if ((r-l+1) > longest.length) longest = str.substring(l, r+1);
                l--; r++;
            }
            // Even length
            l = i; r = i + 1;
            while(l >= 0 && r < str.length && str[l] === str[r]) {
                if ((r-l+1) > longest.length) longest = str.substring(l, r+1);
                l--; r++;
            }
        }
        return longest;
    },
    'valid-parentheses': ({str}: {str: string}) => {
        const stack = [];
        const map: Record<string, string> = { "(": ")", "{": "}", "[": "]" };
        for (const char of str) {
            if (char in map) stack.push(char);
            else if (Object.values(map).includes(char)) {
                if (stack.length === 0 || map[stack.pop()!] !== char) return false;
            }
        }
        return stack.length === 0;
    },
    'caesar-cipher': ({str, shift}: {str: string, shift: string}) => {
        const s = parseNumber(shift);
        return str.replace(/[a-z]/gi, char => {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + s) % 26) + base);
        });
    },
    'sieve-of-eratosthenes': ({num}: {num: string}) => {
        const n = parseNumber(num);
        let primes = Array(n + 1).fill(true);
        primes[0] = primes[1] = false;
        for (let i = 2; i * i <= n; i++) {
            if (primes[i]) {
                for (let j = i * i; j <= n; j += i) primes[j] = false;
            }
        }
        return primes.map((isPrime, index) => isPrime ? index : -1).filter(i => i !== -1).join(', ');
    },
    
    // ================================== DATA STRUCTURES SOLVERS ==================================
    // These are demonstrated with a sequence of operations and a final state log.
    'implement-stack': () => {
        class Stack {
            items: any[] = [];
            push(item: any) { this.items.push(item); }
            pop() { return this.items.pop(); }
            peek() { return this.items[this.items.length - 1]; }
            isEmpty() { return this.items.length === 0; }
        }
        const s = new Stack();
        s.push(10); s.push(20);
        const result = `Pushed 10, 20. Peek: ${s.peek()}. Pop: ${s.pop()}. IsEmpty: ${s.isEmpty()}`;
        return result;
    },
    'implement-queue': () => {
        class Queue {
            items: any[] = [];
            enqueue(item: any) { this.items.push(item); }
            dequeue() { return this.items.shift(); }
            front() { return this.items[0]; }
            isEmpty() { return this.items.length === 0; }
        }
        const q = new Queue();
        q.enqueue('a'); q.enqueue('b');
        return `Enqueued 'a', 'b'. Front: ${q.front()}. Dequeue: ${q.dequeue()}. IsEmpty: ${q.isEmpty()}`;
    },
    'implement-singly-linked-list': () => {
        class Node { constructor(public data: any, public next: Node | null = null) {} }
        class LinkedList { 
            head: Node | null = null;
            append(data: any) {
                if (!this.head) { this.head = new Node(data); return; }
                let current = this.head;
                while (current.next) { current = current.next; }
                current.next = new Node(data);
            }
            print() {
                let current = this.head;
                let str = '';
                while (current) {
                    str += current.data + ' -> ';
                    current = current.next;
                }
                return str + 'null';
            }
        }
        const list = new LinkedList();
        list.append(1); list.append(2); list.append(3);
        return `Created list: ${list.print()}`;
    },
    'reverse-linked-list': ({arr}: {arr: string}) => {
        class Node { constructor(public data: any, public next: Node | null = null) {} }
        let head: Node | null = null;
        parseStringArray(arr).reverse().forEach(val => head = new Node(val, head));

        let prev = null, current = head;
        while(current) {
            const nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        head = prev; // new head

        let str = '';
        while (head) {
            str += head.data + (head.next ? ' -> ' : '');
            head = head.next;
        }
        return `Reversed List: ${str}`;
    },
    'implement-hash-table': () => {
        class HashTable {
            table: any[][] = new Array(127);
            _hash(key: string) {
                let hash = 0;
                for (let i = 0; i < key.length; i++) {
                    hash = (hash + key.charCodeAt(i) * i) % this.table.length;
                }
                return hash;
            }
            set(key: string, value: any) { this.table[this._hash(key)] = [key, value]; }
            get(key: string) { return this.table[this._hash(key)]?.[1]; }
        }
        const ht = new HashTable();
        ht.set('name', 'Bruce');
        return `Set 'name' to 'Bruce'. Get 'name': ${ht.get('name')}`;
    },
    'binary-search-tree-traversal': ({arr}: {arr: string}) => {
        class TreeNode { constructor(public value: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {} }
        class BST {
            root: TreeNode | null = null;
            insert(value: number) {
                if (!this.root) { this.root = new TreeNode(value); return; }
                let current = this.root;
                while (true) {
                    if (value < current.value) {
                        if (!current.left) { current.left = new TreeNode(value); return; }
                        current = current.left;
                    } else {
                        if (!current.right) { current.right = new TreeNode(value); return; }
                        current = current.right;
                    }
                }
            }
            inOrder(node=this.root, arr: number[]=[]) { if (node) {this.inOrder(node.left, arr); arr.push(node.value); this.inOrder(node.right, arr);} return arr; }
            preOrder(node=this.root, arr: number[]=[]) { if (node) { arr.push(node.value); this.preOrder(node.left, arr); this.preOrder(node.right, arr);} return arr; }
            postOrder(node=this.root, arr: number[]=[]) { if (node) {this.postOrder(node.left, arr); this.postOrder(node.right, arr); arr.push(node.value);} return arr; }
        }
        const tree = new BST();
        parseNumberArray(arr).forEach(val => tree.insert(val));
        return `In-order: ${tree.inOrder().join(', ')}\nPre-order: ${tree.preOrder().join(', ')}\nPost-order: ${tree.postOrder().join(', ')}`;
    },
    'graph-bfs': ({startNode}: {startNode: string}) => {
        const graph = { A: ['B', 'C'], B: ['A', 'D', 'E'], C: ['A', 'F'], D: ['B'], E: ['B', 'F'], F: ['C', 'E'] };
        const queue = [startNode];
        const visited = new Set(queue);
        const result = [];
        while(queue.length > 0) {
            const node = queue.shift()!;
            result.push(node);
            for (const neighbor of graph[node as keyof typeof graph]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return `BFS from ${startNode}: ${result.join(' -> ')}`;
    },
    'graph-dfs': ({startNode}: {startNode: string}) => {
        const graph = { A: ['B', 'C'], B: ['A', 'D', 'E'], C: ['A', 'F'], D: ['B'], E: ['B', 'F'], F: ['C', 'E'] };
        const visited = new Set();
        const result: string[] = [];
        function dfs(node: string) {
            if (!node || visited.has(node)) return;
            visited.add(node);
            result.push(node);
            graph[node as keyof typeof graph].forEach(neighbor => dfs(neighbor));
        }
        dfs(startNode);
        return `DFS from ${startNode}: ${result.join(' -> ')}`;
    }
};

export const solveProblem = async (problemId: string, inputs: Record<string, string>): Promise<any> => {
    const solver = solvers[problemId];
    if (!solver) {
        throw new Error(`Solver for problem ID "${problemId}" not found.`);
    }

    try {
        const result = await solver(inputs);
        return result;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred during problem solving.');
    }
};