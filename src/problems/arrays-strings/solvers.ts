// HELPER FUNCTIONS
const parseNumber = (input: any): number => {
  const num = Number(input);
  if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
  return num;
};

const parseNumArray = (input: string): number[] => {
    if (!input || typeof input !== 'string' || input.trim() === '') return [];
    return input.split(',').map(item => parseNumber(item.trim()));
};

const parseStrArray = (input: string): string[] => {
    if (!input || typeof input !== 'string' || input.trim() === '') return [];
    return input.split(',').map(item => item.trim());
};

const parseJson = (input: string): any => {
    try {
        // A slightly safer eval for object-like structures
        // It's better than JSON.parse because the user might not use double quotes
        if (/^(\[.*\]|\{.*\})$/.test(input.trim())) {
             return new Function(`return ${input}`)();
        }
        throw new Error();
    } catch (e) {
        throw new Error("Invalid JSON/Array/Object format.");
    }
};

export const solvers: Record<string, Function> = {
    'reverse-string': ({ str }: { str: string }) => str.split('').reverse().join(''),
    'find-longest-word': ({ sentence }: { sentence: string }) => {
        return sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, "");
    },
    'remove-duplicates-from-array': ({ arr }: { arr: string }) => {
        const array = parseStrArray(arr);
        return [...new Set(array)].join(', ');
    },
    'array-chunking': ({ arr, size }: { arr: string, size: any }) => {
        const array = parseStrArray(arr);
        const s = parseNumber(size);
        if (s <= 0) throw new Error("Chunk size must be positive.");
        const chunked = [];
        for (let i = 0; i < array.length; i += s) {
            chunked.push(array.slice(i, i + s));
        }
        return JSON.stringify(chunked);
    },
    'is-palindrome': ({ str }: { str: string }) => {
        const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
        const reversed = cleaned.split('').reverse().join('');
        return cleaned === reversed;
    },
    'title-case-sentence': ({ sentence }: { sentence: string }) => {
        return sentence.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    },
    'array-intersection': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const set1 = new Set(parseStrArray(arr1));
        const array2 = parseStrArray(arr2);
        const intersection = array2.filter(item => set1.has(item));
        return `[${intersection.join(', ')}]`;
    },
    'falsy-bouncer': ({ arr }: { arr: string }) => {
        const array = parseJson(arr);
        const truthy = array.filter(Boolean);
        return JSON.stringify(truthy);
    },
    'array-rotation': ({ arr, positions }: { arr: string, positions: any }) => {
        const array = parseStrArray(arr);
        const p = parseNumber(positions) % array.length;
        const rotated = array.slice(p).concat(array.slice(0, p));
        return `[${rotated.join(', ')}]`;
    },
    'anagram-check': ({ str1, str2 }: { str1: string, str2: string }) => {
        const clean = (s: string) => s.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');
        return clean(str1) === clean(str2);
    },
    'find-missing-number': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const n = nums.length;
        const expectedSum = n * (n + 1) / 2;
        const actualSum = nums.reduce((sum, num) => sum + num, 0);
        return expectedSum - actualSum;
    },
    'sum-all-in-range': ({ arr }: { arr: string }) => {
        const [a, b] = parseNumArray(arr);
        const start = Math.min(a, b);
        const end = Math.max(a, b);
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    },
    'diff-two-arrays': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const a1 = parseStrArray(arr1);
        const a2 = parseStrArray(arr2);
        const diff1 = a1.filter(item => !a2.includes(item));
        const diff2 = a2.filter(item => !a1.includes(item));
        return `[${[...diff1, ...diff2].join(', ')}]`;
    },
    'seek-and-destroy': ({ arr, targets }: { arr: string, targets: string }) => {
        const initialArray = parseStrArray(arr);
        const valuesToDestroy = new Set(parseStrArray(targets));
        const result = initialArray.filter(item => !valuesToDestroy.has(item));
        return `[${result.join(', ')}]`;
    },
    'wherefore-art-thou': ({ collection, source }: { collection: string, source: string }) => {
        const coll = parseJson(collection);
        const src = parseJson(source);
        const srcKeys = Object.keys(src);
        const result = coll.filter((obj: any) => 
            srcKeys.every(key => 
                Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === src[key]
            )
        );
        return JSON.stringify(result, null, 2);
    },
    'spinal-tap-case': ({ str }: { str: string }) => {
        return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[\s_]+/g, "-").toLowerCase();
    },
    'pig-latin': ({ str }: { str: string }) => {
        const vowels = 'aeiou';
        if (vowels.includes(str[0].toLowerCase())) {
            return str + 'way';
        }
        const consonantCluster = str.match(/^[^aeiou]+/i)?.[0] || '';
        return str.substring(consonantCluster.length) + consonantCluster + 'ay';
    },
    'search-and-replace': ({ str, before, after }: { str: string, before: string, after: string }) => {
        const afterCased = before[0] === before[0].toUpperCase()
            ? after.charAt(0).toUpperCase() + after.slice(1)
            : after.toLowerCase();
        return str.replace(before, afterCased);
    },
    'dna-pairing': ({ str }: { str: string }) => {
        const pairs: Record<string, string> = { A: "T", T: "A", C: "G", G: "C" };
        const result = str.split('').map(char => [char, pairs[char as keyof typeof pairs]]);
        return JSON.stringify(result);
    },
    'missing-letters': ({ str }: { str: string }) => {
        for (let i = 0; i < str.length - 1; i++) {
            if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
                return String.fromCharCode(str.charCodeAt(i) + 1);
            }
        }
        return "undefined";
    },
    'sorted-union': ({ arr1, arr2, arr3 }: { arr1: string, arr2: string, arr3: string }) => {
        const combined = [...parseNumArray(arr1), ...parseNumArray(arr2), ...parseNumArray(arr3)];
        const unique = [...new Set(combined)];
        return `[${unique.join(', ')}]`;
    },
    'convert-html-entities': ({ str }: { str: string }) => {
        const entities: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
        return str.replace(/[&<>"']/g, match => entities[match]);
    },
    'sum-all-odd-fibonacci': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        let prev = 0, curr = 1, sum = 0;
        while (curr <= n) {
            if (curr % 2 !== 0) {
                sum += curr;
            }
            [prev, curr] = [curr, prev + curr];
        }
        return sum;
    },
    'sum-all-primes': ({ num }: { num: any }) => {
        const n = parseNumber(num);
        const isPrime = Array(n + 1).fill(true);
        isPrime[0] = isPrime[1] = false;
        for (let i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        return isPrime.reduce((sum, prime, index) => prime ? sum + index : sum, 0);
    },
    'smallest-common-multiple': () => `(Conceptual) Difficult problem. Requires finding the GCD and LCM of a range of numbers. A common solution involves iterating from the max number up, checking for divisibility by all numbers in the range.`,
    'drop-it': ({ arr }: { arr: string }) => {
        const array = parseNumArray(arr);
        const predicate = (n: number) => n > 2;
        const index = array.findIndex(predicate);
        return index === -1 ? '[]' : `[${array.slice(index).join(', ')}]`;
    },
    'steamroller': ({ arr }: { arr: string }) => {
        const nested = parseJson(arr);
        const flattened: any[] = [];
        const flatten = (a: any[]) => {
            a.forEach(item => Array.isArray(item) ? flatten(item) : flattened.push(item));
        };
        flatten(nested);
        return JSON.stringify(flattened);
    },
    'caesars-cipher': ({ str }: { str: string }) => {
        return str.replace(/[A-Z]/g, char => 
            String.fromCharCode((char.charCodeAt(0) - 65 + 13) % 26 + 65)
        );
    },
    'telephone-number-validator': ({ str }: { str: string }) => {
        const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/;
        return regex.test(str);
    },
    'cash-register': () => `(Conceptual) Complex logic. Involves a map of currency unit values, calculating total cash in drawer, then iterating from largest to smallest unit to make change, updating the drawer. Requires handling multiple edge cases.`,
    'max-char': ({ str }: { str: string }) => {
        const charMap: Record<string, number> = {};
        for (const char of str) {
            charMap[char] = (charMap[char] || 0) + 1;
        }
        let max = 0;
        let maxChar = '';
        for (const char in charMap) {
            if (charMap[char] > max) {
                max = charMap[char];
                maxChar = char;
            }
        }
        return maxChar;
    },
    'vowels-counter': ({ str }: { str: string }) => {
        const matches = str.match(/[aeiou]/gi);
        return matches ? matches.length : 0;
    },
    'array-from-string': ({ str }: { str: string }) => JSON.stringify(Array.from(str)),
    'find-unique-values': ({ arr }: { arr: string }) => `[${[...new Set(parseStrArray(arr))].join(', ')}]`,
    'array-of-digits': ({ num }: { num: any }) => JSON.stringify(String(parseNumber(num)).split('').map(Number)),
    'count-words-in-string': ({ str }: { str: string }) => {
        const words = str.trim().split(/\s+/);
        return words.filter(word => word.length > 0).length;
    },
    'is-isogram': ({ str }: { str: string }) => {
        const s = str.toLowerCase();
        return new Set(s).size === s.length;
    },
    'hamming-distance': ({ str1, str2 }: { str1: string, str2: string }) => {
        if (str1.length !== str2.length) throw new Error("Strings must be of equal length.");
        let distance = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                distance++;
            }
        }
        return distance;
    },
    'is-pangram': ({ str }: { str: string }) => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const letters = new Set(str.toLowerCase().match(/[a-z]/g));
        return letters.size === alphabet.length;
    },
    'truncate-string': ({ str, num }: { str: string, num: any }) => {
        const n = parseNumber(num);
        return str.length > n ? str.slice(0, n) + '...' : str;
    },
    'longest-substring-no-repeats': ({ str }: { str: string }) => {
        let maxLength = 0;
        let start = 0;
        const charMap: Record<string, number> = {};
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (charMap[char] >= start) {
                start = charMap[char] + 1;
            }
            charMap[char] = i;
            maxLength = Math.max(maxLength, i - start + 1);
        }
        return maxLength;
    },
    '3sum': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr).sort((a, b) => a - b);
        const result: number[][] = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let left = i + 1, right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return JSON.stringify(result);
    },
    'group-anagrams': ({ arr }: { arr: string }) => {
        const strs = parseStrArray(arr);
        const map = new Map<string, string[]>();
        for (const str of strs) {
            const sorted = str.split('').sort().join('');
            if (!map.has(sorted)) {
                map.set(sorted, []);
            }
            map.get(sorted)!.push(str);
        }
        return JSON.stringify(Array.from(map.values()));
    },
    'container-with-most-water': ({ arr }: { arr: string }) => {
        const heights = parseNumArray(arr);
        let maxArea = 0, left = 0, right = heights.length - 1;
        while (left < right) {
            const height = Math.min(heights[left], heights[right]);
            const width = right - left;
            maxArea = Math.max(maxArea, height * width);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    },
    'spiral-matrix': ({ matrix }: { matrix: string }) => {
        const mat = parseJson(matrix);
        if (mat.length === 0) return '[]';
        const result: number[] = [];
        let top = 0, bottom = mat.length - 1, left = 0, right = mat[0].length - 1;
        while (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) result.push(mat[top][i]);
            top++;
            for (let i = top; i <= bottom; i++) result.push(mat[i][right]);
            right--;
            if (top <= bottom) {
                for (let i = right; i >= left; i--) result.push(mat[bottom][i]);
                bottom--;
            }
            if (left <= right) {
                for (let i = bottom; i >= top; i--) result.push(mat[i][left]);
                left++;
            }
        }
        return `[${result.join(', ')}]`;
    },
    'rotate-image': ({ matrix }: { matrix: string }) => {
        const mat = parseJson(matrix);
        const n = mat.length;
        // Transpose
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
            }
        }
        // Reverse rows
        for (let i = 0; i < n; i++) {
            mat[i].reverse();
        }
        return JSON.stringify(mat);
    },
    'product-of-array-except-self': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const n = nums.length;
        const result = Array(n).fill(1);
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }
        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }
        return `[${result.join(', ')}]`;
    },
    'valid-parentheses': ({ str }: { str: string }) => {
        const stack: string[] = [];
        const map: Record<string, string> = { '(': ')', '{': '}', '[': ']' };
        for (const char of str) {
            if (map[char as keyof typeof map]) {
                stack.push(char);
            } else if (Object.values(map).includes(char)) {
                if (stack.length === 0 || map[stack.pop()!] !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    },
    'longest-palindromic-substring': () => `(Conceptual) Difficult. A common solution is 'Expand from Center'. Iterate through each character, treating it as a potential center of a palindrome, and expand outwards. Handle both odd-length (center is one char) and even-length (center is between two chars) palindromes.`,
    'string-compression': ({ str }: { str: string }) => {
        if (!str) return "";
        let compressed = "";
        let count = 1;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                count++;
            } else {
                compressed += str[i] + count;
                count = 1;
            }
        }
        return compressed.length < str.length ? compressed : str;
    },
    'first-unique-char': ({ str }: { str: string }) => {
        const charCount: Record<string, number> = {};
        for (const char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        for (let i = 0; i < str.length; i++) {
            if (charCount[str[i]] === 1) {
                return i;
            }
        }
        return -1;
    },
    'kadanes-algorithm': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        let maxSoFar = nums[0];
        let maxEndingHere = nums[0];
        for (let i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    },
    'merge-sorted-arrays': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const a1 = parseNumArray(arr1);
        const a2 = parseNumArray(arr2);
        return `[${[...a1, ...a2].sort((a, b) => a - b).join(', ')}]`;
    },
    'move-zeroes': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        let writeIndex = 0;
        for (let readIndex = 0; readIndex < nums.length; readIndex++) {
            if (nums[readIndex] !== 0) {
                nums[writeIndex] = nums[readIndex];
                writeIndex++;
            }
        }
        for (let i = writeIndex; i < nums.length; i++) {
            nums[i] = 0;
        }
        return `[${nums.join(', ')}]`;
    },
    'find-all-duplicates-in-array': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        const duplicates: number[] = [];
        for (let i = 0; i < nums.length; i++) {
            const index = Math.abs(nums[i]) - 1;
            if (nums[index] < 0) {
                duplicates.push(index + 1);
            }
            nums[index] = -nums[index];
        }
        return `[${duplicates.join(', ')}]`;
    },
    'string-to-integer-atoi': ({ str }: { str: string }) => {
        const num = parseInt(str.trim(), 10);
        if (isNaN(num)) return 0;
        const INT_MAX = 2**31 - 1;
        const INT_MIN = -(2**31);
        if (num > INT_MAX) return INT_MAX;
        if (num < INT_MIN) return INT_MIN;
        return num;
    },
    'word-search-matrix': () => `(Conceptual) Difficult. Requires a backtracking algorithm. Iterate through each cell. If it matches the first letter of the word, start a Depth First Search (DFS) from that cell. The DFS would check neighbors, marking visited cells to avoid reuse, and backtrack if a path fails.`,
    'minimum-window-substring': () => `(Conceptual) Difficult. This is a classic 'sliding window' problem. Use two pointers (start, end) to define a window. Expand the window by moving the end pointer. Once the window is valid (contains all target chars), shrink it by moving the start pointer, tracking the minimum valid window size.`,
    'roman-to-integer': ({ roman }: { roman: string }) => {
        const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        let num = 0;
        for (let i = 0; i < roman.length; i++) {
            const current = map[roman[i]];
            const next = map[roman[i + 1]];
            if (next > current) {
                num -= current;
            } else {
                num += current;
            }
        }
        return num;
    },
    'integer-to-roman': ({ num }: { num: any }) => `(Conceptual) Create arrays for thousands, hundreds, tens, and ones (e.g., ones = ["", "I", "II", ... "IX"]). Use math to get the digit for each place value and look up the corresponding Roman string in the arrays.`,
    'longest-common-prefix': ({ arr }: { arr: string }) => {
        const strs = parseStrArray(arr);
        if (strs.length === 0) return "";
        let prefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.substring(0, prefix.length - 1);
                if (prefix === "") return "";
            }
        }
        return prefix;
    },
    'implement-strstr': ({ haystack, needle }: { haystack: string, needle: string }) => haystack.indexOf(needle),
    'text-justification': () => `(Conceptual) Very complex string manipulation. Greedy approach: gather as many words as fit on a line. Then, calculate the number of spaces needed and distribute them evenly between words, adding extra spaces to the left slots first. Handle the last line (left-justified) as a special case.`,
    'set-matrix-zeroes': ({ matrix }: { matrix: string }) => {
        const mat = parseJson(matrix);
        const rows = new Set();
        const cols = new Set();
        for (let r = 0; r < mat.length; r++) {
            for (let c = 0; c < mat[0].length; c++) {
                if (mat[r][c] === 0) {
                    rows.add(r);
                    cols.add(c);
                }
            }
        }
        for (let r = 0; r < mat.length; r++) {
            for (let c = 0; c < mat[0].length; c++) {
                if (rows.has(r) || cols.has(c)) {
                    mat[r][c] = 0;
                }
            }
        }
        return JSON.stringify(mat);
    },
    'find-peak-element': () => `(Conceptual) Can be solved with Binary Search in O(log n). If mid element > mid+1, peak is on the left. If mid < mid+1, peak is on the right.`,
    'majority-element': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        let candidate = nums[0];
        let count = 1;
        for (let i = 1; i < nums.length; i++) {
            if (count === 0) {
                candidate = nums[i];
            }
            count += (nums[i] === candidate) ? 1 : -1;
        }
        return candidate; // Boyer-Moore Voting Algorithm
    },
    'string-is-unique': ({ str }: { str: string }) => {
        return new Set(str).size === str.length;
    },
    'urlify-string': ({ str }: { str: string }) => str.trim().replace(/\s/g, '%20'),
    'palindrome-permutation': ({ str }: { str: string }) => {
        const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
        const charCount = new Set();
        for (const char of cleaned) {
            if (charCount.has(char)) {
                charCount.delete(char);
            } else {
                charCount.add(char);
            }
        }
        return charCount.size <= 1;
    },
    'one-away-strings': () => `(Conceptual) Check lengths. If diff > 1, false. If same length, check for one replacement. If diff is 1, check for one insertion/deletion by iterating with two pointers.`,
    'zero-matrix': ({ matrix }: { matrix: string }) => `(Conceptual) Same as Set Matrix Zeroes. Use first row and col as markers to save space instead of separate sets.`,
    'string-rotation': ({ s1, s2 }: { s1: string, s2: string }) => {
        return s1.length === s2.length && (s1 + s1).includes(s2);
    },
    'basic-calculator-ii': () => `(Conceptual) Use a stack. Iterate through the string. Keep track of the last operator. If you see '*' or '/', pop from the stack, perform the operation with the current number, and push back. Finally, sum everything in the stack.`,
    'reverse-words-in-string': ({ str }: { str: string }) => str.trim().split(/\s+/).reverse().join(' '),
    'decode-string': () => `(Conceptual) Use two stacks: one for counts and one for strings. When you see '[', push current string and count. When you see ']', pop count and string, repeat the current string, and prepend the popped string.`,
    'trapping-rain-water': () => `(Conceptual) Two-pointer approach. Left and right pointers at ends. Move the pointer with the smaller max height inward. The water trapped at any point is the difference between the smaller max height and the current bar height.`,
    'sliding-window-maximum': () => `(Conceptual) Can be solved efficiently with a deque. The deque stores indices of elements in the current window. It's kept in decreasing order of value, so the max of the window is always at the front.`,
    'first-missing-positive': () => `(Conceptual) Use the array itself as a hash map. Iterate through the array. For each number, mark its corresponding index as visited (e.g., by negating the value at that index). Then, iterate again to find the first index that wasn't marked.`,
    'largest-rectangle-histogram': () => `(Conceptual) Difficult. A common solution uses a stack to keep track of the indices of bars that are in increasing order of height. When a smaller bar is encountered, pop from the stack and calculate the area of the rectangle with the popped bar as the smallest height.`,
    'generate-parentheses': ({ n }: { n: any }) => {
        const num = parseNumber(n);
        const result: string[] = [];
        const backtrack = (current: string, open: number, close: number) => {
            if (current.length === num * 2) {
                result.push(current);
                return;
            }
            if (open < num) backtrack(current + '(', open + 1, close);
            if (close < open) backtrack(current + ')', open, close + 1);
        };
        backtrack('', 0, 0);
        return JSON.stringify(result);
    },
    'next-permutation': () => `(Conceptual) Find the first decreasing element from the right (pivot). Find the smallest element to the right of the pivot that is larger than it. Swap them. Reverse the subarray to the right of the pivot's original position.`,
    'jump-game': ({ arr }: { arr: string }) => {
        const nums = parseNumArray(arr);
        let maxReach = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i > maxReach) return false;
            maxReach = Math.max(maxReach, i + nums[i]);
        }
        return true;
    },
    'word-break': ({ s, wordDict }: { s: string, wordDict: string }) => `(Conceptual) Dynamic Programming. Create a boolean DP array where dp[i] is true if s.substring(0, i) can be segmented. Iterate from 1 to string length, and for each position, check if a valid word from the dictionary ends there.`,
    'lru-cache-conceptual': () => `(Conceptual) Use a Doubly Linked List for O(1) removal/addition and a Hash Map for O(1) lookup. The map stores keys and pointers to the list nodes. When an item is accessed, move its node to the front of the list. If cache is full, remove the node at the end.`,
    'median-of-two-sorted-arrays': () => `(Conceptual) Very difficult. Requires a binary search approach. The goal is to partition both arrays such that all elements on the left side of the partitions are less than all elements on the right, and the number of elements on the left is equal to (or one more than) the right.`,
    'regular-expression-matching': () => `(Conceptual) Very difficult. Solved with Dynamic Programming or recursion with memoization. The state depends on the current position in the string and the pattern. Handle base cases and recursive steps for matching a char, '.', and '*'.`,
    'best-time-to-buy-sell-stock': ({ prices }: { prices: string }) => {
        const priceList = parseNumArray(prices);
        let minPrice = Infinity;
        let maxProfit = 0;
        for (const price of priceList) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    },
    'find-the-duplicate-number': () => `(Conceptual) Floyd's Tortoise and Hare (Cycle Detection) algorithm. Treat the array values as pointers. Since there's a duplicate, there must be a cycle. Find the start of the cycle, which is the duplicate number.`,
    'serialize-deserialize-binary-tree-conceptual': () => `(Conceptual) Serialize: Use a pre-order traversal. Convert the tree to a string like "1,2,null,null,3,4,null,null,5,null,null". Deserialize: Use a queue or recursion. Read the string, and for each value, create a node and recursively build its left and right children.`,
};
