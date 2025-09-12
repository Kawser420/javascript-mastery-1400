
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
const parseStrArray = (input: string): string[] => {
    if (!input || typeof input !== 'string' || input.trim() === '') return [];
    return input.split(',').map(item => item.trim());
};
const parseJson = (input: string): any => {
    try {
        if (/^(\[.*\]|\{.*\})$/.test(input.trim())) {
             return new Function(`return ${input}`)();
        }
        throw new Error();
    } catch (e) {
        throw new Error("Invalid JSON/Array/Object format.");
    }
};

export const solvers: Record<string, Function> = {
    'factorial-recursive': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        if (n < 0) throw new Error("Factorial is not defined for negative numbers.");
        function factorial(x: number): number {
            if (x === 0) return 1;
            return x * factorial(x - 1);
        }
        return factorial(n);
    },
    'fibonacci-recursive': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        if (n < 0) throw new Error("Input must be a non-negative integer.");
        if (n > 35) throw new Error("Input too large for inefficient recursive solution.");
        function fib(x: number): number {
            if (x <= 1) return x;
            return fib(x - 1) + fib(x - 2);
        }
        return fib(n);
    },
    'sum-array-recursive': ({ arr }: { arr: string }) => {
        const numbers = parseNumArray(arr);
        function sum(array: number[]): number {
            if (array.length === 0) return 0;
            return array[0] + sum(array.slice(1));
        }
        return sum(numbers);
    },
    'power-recursive': ({ base, exponent }: { base: any, exponent: any }) => {
        const b = parseNumber(base);
        const e = parseNumber(exponent);
        function power(baseNum: number, exp: number): number {
            if (exp === 0) return 1;
            return baseNum * power(baseNum, exp - 1);
        }
        return power(b, e);
    },
    'reverse-string-recursive': ({ str }: { str: string }) => {
        function reverse(s: string): string {
            if (s === "") return "";
            return reverse(s.substring(1)) + s.charAt(0);
        }
        return reverse(str);
    },
    'is-palindrome-recursive': ({ str }: { str: string }) => {
        const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
        function check(s: string): boolean {
            if (s.length <= 1) return true;
            if (s[0] !== s[s.length - 1]) return false;
            return check(s.substring(1, s.length - 1));
        }
        return check(cleaned);
    },
    'range-of-numbers-recursive': ({ start, end }: { start: any, end: any }) => {
        const s = parseNumber(start);
        const e = parseNumber(end);
        function range(startNum: number, endNum: number): number[] {
            if (startNum > endNum) return [];
            const numbers = range(startNum, endNum - 1);
            numbers.push(endNum);
            return numbers;
        }
        return `[${range(s, e).join(', ')}]`;
    },
    'greatest-common-divisor-recursive': ({ a, b }: { a: any, b: any }) => {
        const numA = parseNumber(a);
        const numB = parseNumber(b);
        function gcd(x: number, y: number): number {
            if (y === 0) return x;
            return gcd(y, x % y);
        }
        return gcd(numA, numB);
    },
    'flatten-array-recursive': ({ arr }: { arr: string }) => {
        const nested = parseJson(arr);
        function flatten(a: any[]): any[] {
            let result: any[] = [];
            a.forEach(item => {
                if (Array.isArray(item)) {
                    result = result.concat(flatten(item));
                } else {
                    result.push(item);
                }
            });
            return result;
        }
        return JSON.stringify(flatten(nested));
    },
    'sum-of-digits-recursive': ({ num }: { num: any }) => {
        const n = Math.abs(parseNumber(num));
        function sumDigits(x: number): number {
            if (x < 10) return x;
            return x % 10 + sumDigits(Math.floor(x / 10));
        }
        return sumDigits(n);
    },
    'binary-search-recursive': ({ arr, target }: { arr: string, target: any }) => {
        const nums = parseNumArray(arr);
        const t = parseNumber(target);
        function search(arr: number[], target: number, left: number, right: number): number {
            if (left > right) return -1;
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) return mid;
            if (arr[mid] > target) return search(arr, target, left, mid - 1);
            return search(arr, target, mid + 1, right);
        }
        const index = search(nums, t, 0, nums.length - 1);
        return index > -1 ? `Found at index: ${index}` : "Target not found";
    },
    'count-occurrences-recursive': ({ arr, target }: { arr: string, target: any }) => {
        const array = parseStrArray(arr); // Allow strings or numbers
        const t = target.toString();
        function count(a: string[], i: number): number {
            if (i >= a.length) return 0;
            const match = a[i] === t ? 1 : 0;
            return match + count(a, i + 1);
        }
        return count(array, 0);
    },
    'sum-nested-object-recursive': ({ obj }: { obj: string }) => {
        const data = parseJson(obj);
        function sumValues(o: any): number {
            let sum = 0;
            for (const key in o) {
                if (typeof o[key] === 'number') {
                    sum += o[key];
                } else if (typeof o[key] === 'object' && o[key] !== null) {
                    sum += sumValues(o[key]);
                }
            }
            return sum;
        }
        return sumValues(data);
    },
    'tree-traversal-conceptual': () => `(Conceptual) Pre-order: Root -> Left -> Right. In-order: Left -> Root -> Right. Post-order: Left -> Right -> Root. Each is a recursive call on the left and right children.`,
    'permutations-string-recursive': ({ str }: { str: string }) => {
        if (str.length > 5) return "String is too long for this demo.";
        const result: string[] = [];
        function permute(current: string, remaining: string) {
            if (remaining.length === 0) {
                result.push(current);
                return;
            }
            for (let i = 0; i < remaining.length; i++) {
                const newCurrent = current + remaining[i];
                const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
                permute(newCurrent, newRemaining);
            }
        }
        permute('', str);
        return `[${result.join(', ')}]`;
    },
    'collatz-conjecture-recursive': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        function collatz(x: number, steps: number): number {
            if (x === 1) return steps;
            if (x % 2 === 0) return collatz(x / 2, steps + 1);
            return collatz(3 * x + 1, steps + 1);
        }
        return collatz(n, 0);
    },
    'find-all-paths-in-grid-recursive': ({ rows, cols }: { rows: any, cols: any }) => {
        const m = parseNumber(rows);
        const n = parseNumber(cols);
        function countPaths(r: number, c: number): number {
            if (r === m || c === n) return 0;
            if (r === m - 1 && c === n - 1) return 1;
            return countPaths(r + 1, c) + countPaths(r, c + 1);
        }
        return countPaths(0, 0);
    },
    'merge-sort-recursive': () => `(Conceptual) 1. Base Case: If array has < 2 elements, return it. 2. Recursive Step: Split array in half. Recursively call merge sort on both halves. 3. Conquer: Merge the two sorted halves back into one sorted array.`,
    'is-even-odd-recursive': ({ num }: { num: any }) => {
        const n = Math.abs(parseNumber(num));
        function isEven(x: number): boolean {
            if (x === 0) return true;
            if (x === 1) return false;
            return isEven(x - 2);
        }
        return isEven(n) ? "Even" : "Odd";
    },
    'array-of-multiples-recursive': ({ num, length }: { num: any, length: any }) => {
        const n = parseNumber(num);
        const l = parseNumber(length);
        function multiples(x: number, len: number): number[] {
            if (len === 0) return [];
            const arr = multiples(x, len - 1);
            arr.push(x * len);
            return arr;
        }
        return `[${multiples(n, l).join(', ')}]`;
    },
    'product-of-array-recursive': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        function product(a: number[]): number {
            if (a.length === 0) return 1;
            return a[0] * product(a.slice(1));
        }
        return product(nums);
    },
    'find-in-nested-array-recursive': ({ arr, target }: { arr: string, target: any }) => {
        const array = parseJson(arr);
        const t = parseNumber(target);
        function find(a: any[]): boolean {
            for (const item of a) {
                if (item === t) return true;
                if (Array.isArray(item) && find(item)) return true;
            }
            return false;
        }
        return find(array);
    },
    'exponentiation-by-squaring-recursive': ({ base, exponent }: { base: any, exponent: any }) => `(Conceptual) Efficient power function. Base cases: exp=0 -> 1. Recursive: If exp is even, return power(base*base, exp/2). If exp is odd, return base * power(base*base, (exp-1)/2).`,
    'decimal-to-binary-recursive': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        if (n < 0) throw new Error("Input must be non-negative.");
        function toBinary(x: number): string {
            if (x === 0) return "0";
            if (x === 1) return "1";
            return toBinary(Math.floor(x / 2)) + (x % 2);
        }
        return toBinary(n);
    },
    'replicate-string-recursive': ({ str, times }: { str: string, times: any }) => {
        const n = parseNumber(times);
        function replicate(s: string, t: number): string {
            if (t <= 0) return "";
            return s + replicate(s, t - 1);
        }
        return replicate(str, n);
    },
    'recursive-every': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const predicate = (n: number) => n % 2 === 0;
        function every(a: number[], p: (n: number) => boolean): boolean {
            if (a.length === 0) return true;
            return p(a[0]) && every(a.slice(1), p);
        }
        return every(nums, predicate);
    },
    'recursive-some': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const predicate = (n: number) => n % 2 === 0;
        function some(a: number[], p: (n: number) => boolean): boolean {
            if (a.length === 0) return false;
            return p(a[0]) || some(a.slice(1), p);
        }
        return some(nums, predicate);
    },
    'recursive-filter': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const predicate = (n: number) => n % 2 === 0;
        function filter(a: number[], p: (n: number) => boolean): number[] {
            if (a.length === 0) return [];
            const first = p(a[0]) ? [a[0]] : [];
            return first.concat(filter(a.slice(1), p));
        }
        return `[${filter(nums, predicate).join(', ')}]`;
    },
    'recursive-map': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const mapper = (n: number) => n * 2;
        function map(a: number[], m: (n: number) => number): number[] {
            if (a.length === 0) return [];
            return [m(a[0])].concat(map(a.slice(1), m));
        }
        return `[${map(nums, mapper).join(', ')}]`;
    },
    'tower-of-hanoi-conceptual': () => `(Conceptual) To move N disks from A to C using B: 1. Base case: If 1 disk, move it from A to C. 2. Recursive step: Move N-1 disks from A to B. Move the Nth disk from A to C. Move N-1 disks from B to C.`,
    'count-consonants-recursive': ({ str }: { str: string }) => {
        const s = str.toLowerCase();
        const vowels = 'aeiou';
        function count(str: string): number {
            if (str === '') return 0;
            const first = str[0];
            const isConsonant = first >= 'a' && first <= 'z' && !vowels.includes(first);
            return (isConsonant ? 1 : 0) + count(str.slice(1));
        }
        return count(s);
    },
    'pascals-triangle-recursive': ({ row }: { row: any }) => `(Conceptual) A recursive function pascal(row, col) would be: if col==0 or col==row, return 1. Otherwise, return pascal(row-1, col-1) + pascal(row-1, col). Then loop to build the row.`,
    'search-nested-object-recursive': ({ obj, key }: { obj: string, key: string }) => {
        const data = parseJson(obj);
        function find(o: any, k: string): any {
            if (Object.prototype.hasOwnProperty.call(o, k)) return o[k];
            for (const prop in o) {
                if (typeof o[prop] === 'object' && o[prop] !== null) {
                    const result = find(o[prop], k);
                    if (result !== undefined) return result;
                }
            }
        }
        return find(data, key) ?? "Not Found";
    },
    'count-down-up-recursive': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        let result: number[] = [];
        function count(x: number) {
            result.push(x);
            if (x > 1) {
                count(x - 1);
                result.push(x);
            }
        }
        count(n);
        return result.join(' -> ');
    },
    'remove-duplicates-recursive': ({ arr }: { arr: string }) => {
        const array = parseStrArray(arr);
        function remove(a: string[], seen = new Set()): string[] {
            if (a.length === 0) return [];
            const [first, ...rest] = a;
            if (seen.has(first)) {
                return remove(rest, seen);
            } else {
                seen.add(first);
                return [first, ...remove(rest, seen)];
            }
        }
        return `[${remove(array).join(', ')}]`;
    },
    'string-contains-char-recursive': ({ str, char }: { str: string, char: string }) => {
        function contains(s: string, c: string): boolean {
            if (s === '') return false;
            if (s[0] === c) return true;
            return contains(s.slice(1), c);
        }
        return contains(str, char);
    },
    'length-of-array-recursive': ({ arr }: { arr: string }) => {
        const array = parseStrArray(arr);
        function len(a: any[]): number {
            if (a[0] === undefined) return 0;
            return 1 + len(a.slice(1));
        }
        return len(array);
    },
    'is-sorted-recursive': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        function isSorted(a: number[]): boolean {
            if (a.length <= 1) return true;
            if (a[0] > a[1]) return false;
            return isSorted(a.slice(1));
        }
        return isSorted(nums);
    },
    'recursive-min': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        if (nums.length === 0) return "Empty array";
        function min(a: number[]): number {
            if (a.length === 1) return a[0];
            const restMin = min(a.slice(1));
            return a[0] < restMin ? a[0] : restMin;
        }
        return min(nums);
    },
    'recursive-max': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        if (nums.length === 0) return "Empty array";
        function max(a: number[]): number {
            if (a.length === 1) return a[0];
            const restMax = max(a.slice(1));
            return a[0] > restMax ? a[0] : restMax;
        }
        return max(nums);
    },
    'deep-reverse-array-recursive': ({ arr }: { arr: string }) => {
        const array = parseJson(arr);
        function deepReverse(a: any[]): any[] {
            const reversed = a.reverse();
            return reversed.map(item => Array.isArray(item) ? deepReverse(item) : item);
        }
        return JSON.stringify(deepReverse(array));
    },
    'balance-parentheses-recursive': ({ str }: { str: string }) => {
        function check(s: string, count: number): boolean {
            if (s === '') return count === 0;
            if (count < 0) return false;
            const first = s[0];
            const newCount = first === '(' ? count + 1 : (first === ')' ? count - 1 : count);
            return check(s.slice(1), newCount);
        }
        return check(str, 0);
    },
    'get-all-keys-nested-object-recursive': ({ obj }: { obj: string }) => {
        const data = parseJson(obj);
        function getKeys(o: any): string[] {
            let keys: string[] = Object.keys(o);
            for (const key of keys) {
                if (typeof o[key] === 'object' && o[key] !== null && !Array.isArray(o[key])) {
                    keys = keys.concat(getKeys(o[key]));
                }
            }
            return keys;
        }
        return `[${[...new Set(getKeys(data))].join(', ')}]`;
    },
    'subsets-of-set-recursive': ({ arr }: { arr: string }) => {
        const set = parseStrArray(arr);
        function subsets(a: string[]): string[][] {
            if (a.length === 0) return [[]];
            const first = a[0];
            const rest = a.slice(1);
            const subsWithoutFirst = subsets(rest);
            const subsWithFirst = subsWithoutFirst.map(sub => [first, ...sub]);
            return [...subsWithoutFirst, ...subsWithFirst];
        }
        return JSON.stringify(subsets(set));
    },
    'collect-strings-from-object-recursive': ({ obj }: { obj: string }) => {
        const data = parseJson(obj);
        function collect(o: any): string[] {
            let strings: string[] = [];
            for (const key in o) {
                if (typeof o[key] === 'string') strings.push(o[key]);
                if (typeof o[key] === 'object' && o[key] !== null) strings = strings.concat(collect(o[key]));
            }
            return strings;
        }
        return `[${collect(data).join(', ')}]`;
    },
    'capitalize-words-recursive': ({ arr }: { arr: string }) => {
        const array = parseStrArray(arr);
        function capitalize(a: string[]): string[] {
            if (a.length === 0) return [];
            return [a[0].toUpperCase()].concat(capitalize(a.slice(1)));
        }
        return `[${capitalize(array).join(', ')}]`;
    },
    'capitalize-first-letter-recursive': ({ arr }: { arr: string }) => {
        const array = parseStrArray(arr);
        function capFirst(a: string[]): string[] {
            if (a.length === 0) return [];
            const firstWord = a[0];
            const capitalized = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
            return [capitalized].concat(capFirst(a.slice(1)));
        }
        return `[${capFirst(array).join(', ')}]`;
    },
    'stringify-numbers-recursive': ({ obj }: { obj: string }) => {
        let newObj = parseJson(obj);
        function stringify(o: any) {
            for (const key in o) {
                if (typeof o[key] === 'number') o[key] = o[key].toString();
                if (typeof o[key] === 'object' && o[key] !== null) stringify(o[key]);
            }
        }
        stringify(newObj);
        return JSON.stringify(newObj, null, 2);
    },
    'tail-call-optimization-conceptual': () => `(Conceptual) A function is in tail-call position if the recursive call is the VERY last thing it does. \`return factorial(n-1) * n\` is NOT tail-call. \`return factorial(n-1, acc*n)\` IS tail-call. Some JS engines optimize this to prevent stack overflow.`,
    'mutual-recursion': ({ num }: { num: any }) => {
        function isEven(n: number): boolean {
            if (n === 0) return true;
            return isOdd(n - 1);
        }
        function isOdd(n: number): boolean {
            if (n === 0) return false;
            return isEven(n - 1);
        }
        const n = parseNumber(num);
        return `Is ${n} even? ${isEven(n)}`;
    },
    'ackermann-function-conceptual': () => `(Conceptual) A(m, n) is defined by three recursive rules. It grows extremely fast. A(4,2) has 19,729 decimal digits. It's mainly used in theoretical computer science to show limits of certain computation models.`,
    'count-leaves-in-tree-conceptual': () => `(Conceptual) Base case: if node is null, return 0. If node has no left and no right child, it's a leaf, return 1. Recursive step: return countLeaves(node.left) + countLeaves(node.right).`,
    'tree-depth-recursive': () => `(Conceptual) Base case: if node is null, return 0. Recursive step: find depth of left subtree, find depth of right subtree. Return 1 + Math.max(leftDepth, rightDepth).`,
    'combinations-recursive': ({ arr, k }: { arr: string, k: any }) => `(Conceptual) A backtracking approach. A helper function takes the current combination and a starting index. It loops from the start index, adds the current element to the combination, recursively calls itself for the next element, then backtracks by removing the element.`,
    'coin-change-problem-recursive': () => `(Conceptual) Recursive solution without memoization is very slow. The function would calculate ways(amount) by summing ways(amount - coin) for each coin in the set. A base case is if amount is 0, return 1. If amount < 0, return 0.`,
    'array-includes-recursive': ({ arr, target }: { arr: string, target: string }) => {
        const array = parseStrArray(arr);
        function includes(a: string[], t: string): boolean {
            if (a.length === 0) return false;
            if (a[0] === t) return true;
            return includes(a.slice(1), t);
        }
        return includes(array, target);
    },
    'array-indexOf-recursive': ({ arr, target }: { arr: string, target: string }) => {
        const array = parseStrArray(arr);
        function indexOf(a: string[], t: string, index = 0): number {
            if (a.length === 0) return -1;
            if (a[0] === t) return index;
            return indexOf(a.slice(1), t, index + 1);
        }
        return indexOf(array, target);
    },
    'repeat-function-recursive': ({ n }: { n: any }) => {
        const num = parseNumber(n);
        let log: string[] = [];
        const action = () => log.push("Called!");
        function repeat(fn: Function, times: number) {
            if (times <= 0) return;
            fn();
            repeat(fn, times - 1);
        }
        repeat(action, num);
        return log.join(' ');
    },
    'deep-object-clone-recursive': ({ obj }: { obj: string }) => {
        const data = parseJson(obj);
        function clone(o: any): any {
            if (typeof o !== 'object' || o === null) return o;
            const newObj = Array.isArray(o) ? [] : {};
            for (const key in o) {
                if (Object.prototype.hasOwnProperty.call(o, key)) {
                    (newObj as any)[key] = clone(o[key]);
                }
            }
            return newObj;
        }
        return JSON.stringify(clone(data));
    },
    'find-all-indices-recursive': ({ arr, target }: { arr: string, target: any }) => {
        const array = parseStrArray(arr);
        const t = target.toString();
        function find(a: string[], i = 0): number[] {
            if (i >= a.length) return [];
            const rest = find(a, i + 1);
            if (a[i] === t) return [i, ...rest];
            return rest;
        }
        return `[${find(array).join(', ')}]`;
    },
    'luhn-algorithm-recursive-conceptual': () => `(Conceptual) A recursive helper would process one digit at a time from right to left, keeping track of its position (even/odd) to know whether to double it. The base case is an empty number string.`,
    'directory-traversal-conceptual': () => `(Conceptual) A function \`traverse(directory)\` would loop through items. If an item is a file, print its name. If an item is another directory, recursively call \`traverse(subDirectory)\`.`,
    'json-stringify-recursive-conceptual': () => `(Conceptual) A function would check the type. If it's a string, add quotes. If number/boolean, convert to string. If array, recursively call on each item and join with commas inside '[]'. If object, recursively call on each value and join key-value pairs inside '{}'.`,
    'dom-traversal-recursive-conceptual': () => `(Conceptual) A function \`walk(node)\` would process the current node, then loop through its \`node.childNodes\` and recursively call \`walk(child)\` on each one.`,
    'quick-sort-conceptual': () => `(Conceptual) 1. Base case: If array has < 2 elements, return it. 2. Recursive: Choose a pivot element. Partition the array into two subarrays: elements less than the pivot and elements greater. Recursively call quick sort on the two subarrays. 3. Conquer: Concatenate the sorted less-than array, the pivot, and the sorted greater-than array.`,
    'object-dot-path-access-recursive': ({ obj, path }: { obj: string, path: string }) => {
        const data = parseJson(obj);
        const parts = path.split('.');
        function get(o: any, p: string[]): any {
            if (o === undefined || o === null) return undefined;
            if (p.length === 0) return o;
            return get(o[p[0]], p.slice(1));
        }
        return get(data, parts);
    },
    'n-queens-problem-conceptual': () => `(Conceptual) A recursive backtracking function \`solve(row)\`. Base case: if row >= N, a solution is found. Recursive step: Loop through columns for the current row. If placing a queen at (row, col) is safe, place it. Recursively call \`solve(row + 1)\`. If that returns false, "un-place" the queen (backtrack) and try the next column.`,
    'sudoku-solver-conceptual': () => `(Conceptual) A recursive backtracking function \`solve()\`. Find the next empty cell. Loop through numbers 1-9. If a number is valid for that cell, place it. Recursively call \`solve()\`. If the recursive call returns true, a solution was found. If not, "un-place" the number (backtrack) and try the next. Base case: no empty cells are left.`,
    'word-break-problem-recursive': ({ s, wordDict }: { s: string, wordDict: string }) => `(Conceptual) A recursive function \`canBreak(string)\`. Base case: if string is empty, return true. Recursive step: Loop through the dictionary. If the string starts with a word, recursively call \`canBreak()\` on the rest of the string. Memoization is needed to make this efficient.`,
    'knapsack-problem-conceptual': () => `(Conceptual) Recursive function \`knapsack(index, capacity)\`. For each item, there are two choices: 1) Don't include the item: recursively call \`knapsack(index-1, capacity)\`. 2) Include the item (if it fits): \`value[index] + knapsack(index-1, capacity - weight[index])\`. Return the max of the two choices. Base case: no items or capacity left.`,
    'catalan-numbers-recursive': ({ n }: { n: any }) => {
        const num = parseNumber(n);
        if (num > 15) return "Input too large for this recursive solution.";
        function catalan(c: number): number {
            if (c <= 1) return 1;
            let res = 0;
            for (let i = 0; i < c; i++) {
                res += catalan(i) * catalan(c - 1 - i);
            }
            return res;
        }
        return catalan(num);
    },
    'array-pair-sum-sequence': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        function pairSum(a: number[]): number[] {
            if (a.length === 0) return [];
            if (a.length === 1) return [a[0]];
            return [a[0] + a[1], ...pairSum(a.slice(2))];
        }
        return `[${pairSum(nums).join(', ')}]`;
    },
    'deep-equals-recursive': ({ val1, val2 }: { val1: string, val2: string }) => `(Conceptual) Check if types and values are identical. If objects, check if keys are the same length. Then, recursively call deep equals on the values of each corresponding key. Handle arrays similarly.`,
    'flood-fill-conceptual': () => `(Conceptual) A recursive function \`fill(x, y, targetColor, newColor)\`. Base cases: if (x,y) is out of bounds or its color is not the targetColor, return. Recursive step: Change color of (x,y) to newColor. Recursively call \`fill\` for all four neighbors (up, down, left, right).`,
    'tree-includes-recursive': () => `(Conceptual) A function \`includes(node, value)\`. Base cases: if node is null, return false. If node.value === value, return true. Recursive step: return includes(node.left, value) || includes(node.right, value).`,
    'graph-dfs-conceptual': () => `(Conceptual) A function \`dfs(node, visitedSet)\`. Mark current node as visited. Process the node. For each neighbor of the node, if it hasn't been visited, recursively call \`dfs(neighbor, visitedSet)\`.`,
    'phone-letter-combinations': ({ digits }: { digits: string }) => {
        const map: Record<string, string> = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
        const result: string[] = [];
        function backtrack(combination: string, nextDigits: string) {
            if (nextDigits.length === 0) {
                if (combination.length > 0) result.push(combination);
                return;
            }
            const letters = map[nextDigits[0] as keyof typeof map];
            for (const letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1));
            }
        }
        if (digits) backtrack('', digits);
        return JSON.stringify(result);
    },
    'digital-root-recursive': ({ num }: { num: any }) => {
        function digitalRoot(n: number): number {
            if (n < 10) return n;
            const sum = String(n).split('').reduce((acc, digit) => acc + Number(digit), 0);
            return digitalRoot(sum);
        }
        return digitalRoot(parseNumber(num));
    },
    'step-combinations': ({ steps }: { steps: any }) => {
        const n = parseNumber(steps);
        function countWays(s: number): number {
            if (s < 0) return 0;
            if (s === 0) return 1;
            return countWays(s - 1) + countWays(s - 2) + countWays(s - 3);
        }
        return countWays(n);
    },
    'find-uppercase-recursive': ({ str }: { str: string }) => {
        function find(s: string): string {
            if (s === '') return "Not found";
            if (s[0] === s[0].toUpperCase() && s[0] !== s[0].toLowerCase()) return s[0];
            return find(s.slice(1));
        }
        return find(str);
    },
    'memoization-conceptual': () => `(Conceptual) See 'fibonacci-recursive'. It's a specific application of closures to optimize recursion. A cache object is stored in a closure. The recursive function first checks the cache before computing. If the value is not in the cache, it computes it, stores it, and then returns it.`,
    'permutations-with-duplicates': () => `(Conceptual) Similar to regular permutations, but requires managing counts of each number or sorting the array and skipping duplicate elements at the same level of recursion to ensure unique permutations.`,
    'longest-common-subsequence-conceptual': () => `(Conceptual) Recursive function lcs(str1, str2). If last chars match, return 1 + lcs(str1-1, str2-1). If not, return max(lcs(str1-1, str2), lcs(str1, str2-1)). Needs memoization.`,
    'edit-distance-conceptual': () => `(Conceptual) Recursive function edit(str1, str2). If last chars match, recurse on strings-1. If not, take 1 + min of three recursive calls: insert, delete, or substitute. Needs memoization.`,
    'is-prime-recursive': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        if (n <= 1) return false;
        function check(x: number, divisor: number): boolean {
            if (divisor * divisor > x) return true;
            if (x % divisor === 0) return false;
            return check(x, divisor + 1);
        }
        return check(n, 2);
    },
    'all-unique-chars-recursive': ({ str }: { str: string }) => {
        function isUnique(s: string, seen = new Set()): boolean {
            if (s === '') return true;
            if (seen.has(s[0])) return false;
            seen.add(s[0]);
            return isUnique(s.slice(1), seen);
        }
        return isUnique(str);
    },
    'fractal-generation-conceptual': () => `(Conceptual) A function \`drawSierpinski(points, depth)\`. Base case: if depth is 0, draw a triangle. Recursive: Find midpoints of the triangle's sides. Recursively call \`drawSierpinski\` for the three outer triangles with depth-1.`,
    'is-valid-bst-conceptual': () => `(Conceptual) A recursive function \`isValid(node, min, max)\`. Base case: if node is null, return true. Check if node.val is within the (min, max) range. Recursive: return \`isValid(node.left, min, node.val) && isValid(node.right, node.val, max)\`.`,
    'tree-sum-recursive': () => `(Conceptual) A function \`sum(node)\`. Base case: if node is null, return 0. Recursive step: return node.value + sum(node.left) + sum(node.right).`,
    'array-interleave-recursive': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const a1 = parseStrArray(arr1);
        const a2 = parseStrArray(arr2);
        if (a1.length !== a2.length) throw new Error("Arrays must be of equal length.");
        function interleave(x: string[], y: string[]): string[] {
            if (x.length === 0) return [];
            return [x[0], y[0], ...interleave(x.slice(1), y.slice(1))];
        }
        return `[${interleave(a1, a2).join(', ')}]`;
    },
    'is-power-of-two-recursive': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        function check(x: number): boolean {
            if (x === 1) return true;
            if (x < 1 || x % 2 !== 0) return false;
            return check(x / 2);
        }
        return check(n);
    },
    'is-power-of-three-recursive': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        function check(x: number): boolean {
            if (x === 1) return true;
            if (x < 1 || x % 3 !== 0) return false;
            return check(x / 3);
        }
        return check(n);
    },
    'remove-adjacent-duplicates-recursive': ({ str }: { str: string }) => {
        function remove(s: string): string {
            if (s.length <= 1) return s;
            if (s[0] === s[1]) return remove(s.slice(1));
            return s[0] + remove(s.slice(1));
        }
        return remove(str);
    },
    'invert-binary-tree-conceptual': () => `(Conceptual) A recursive function \`invert(node)\`. Base case: if node is null, return. Recursive: Swap \`node.left\` and \`node.right\`. Recursively call \`invert(node.left)\` and \`invert(node.right)\`.`,
    'decode-ways-conceptual': () => `(Conceptual) Recursive function \`count(string)\`. It's the sum of two possibilities: 1) Decoding the first digit, then recursively calling \`count()\` on the rest of the string. 2) If the first two digits form a valid number (10-26), decode them and recursively call \`count()\` on the rest. Memoization is required.`,
    'unique-binary-search-trees-conceptual': () => `(Conceptual) The number of unique BSTs for n nodes is the nth Catalan number. A recursive function would loop from i=1 to n, choosing i as the root. The result is the sum of (ways for left subtree of size i-1) * (ways for right subtree of size n-i).`,
    'word-squares-conceptual': () => `(Conceptual) A backtracking recursive function \`find(currentSquare)\`. Base case: if square is complete, add to results. Recursive: Get the prefix for the next word from the current square's columns. Find all words in the dictionary with that prefix. For each valid word, add it, recursively call \`find()\`, then backtrack.`,
    'robot-in-a-grid-conceptual': () => `(Conceptual) A recursive function \`findPath(row, col, path)\`. Base cases: if out of bounds or on an off-limit cell, return false. If at destination, return true. Recursive: Try moving right by calling \`findPath(row, col+1, path)\`. If it returns true, we're done. Otherwise, try moving down by calling \`findPath(row+1, col, path)\`. If neither works, backtrack.`,
    'magic-index-conceptual': () => `(Conceptual) Use a recursive binary search. Check the middle index \`mid\`. If A[mid] === mid, you've found it. If A[mid] > mid, the magic index must be on the left half (since A[i] < i for i > mid). If A[mid] < mid, it must be on the right. Recurse on the correct half.`,
};
