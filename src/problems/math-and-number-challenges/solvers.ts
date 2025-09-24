// HELPER FUNCTIONS to make solvers robust against user input
const parseNumber = (input: any): number => {
  const num = Number(input);
  if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
  return num;
};

const parseNumArray = (input: string): number[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => parseNumber(item.trim()));
};

const parseJson = (input: string): any => {
  try {
    return JSON.parse(input);
  } catch (e) {
    throw new Error("Invalid JSON/Array/Object format.");
  }
};

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "mnc-add-two-numbers": ({ num1, num2 }: { num1: any; num2: any }) => {
    return parseNumber(num1) + parseNumber(num2);
  },
  // problem solver--> 02
  "mnc-check-even-or-odd": ({ num }: { num: any }) => {
    return parseNumber(num) % 2 === 0 ? "Even" : "Odd";
  },
  // problem solver--> 03
  "mnc-find-max-number": ({ num1, num2 }: { num1: any; num2: any }) => {
    const n1 = parseNumber(num1);
    const n2 = parseNumber(num2);
    return n1 > n2 ? n1 : n2;
  },
  // problem solver--> 04
  "mnc-factorial": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return "Factorial not defined for negative numbers";
    if (n === 0) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },
  // problem solver--> 05
  "mnc-is-prime": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  },
  // problem solver--> 06
  "mnc-fibonacci-sequence": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return "Invalid input";
    if (n <= 1) return n;
    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  },
  // problem solver--> 07
  "mnc-power-of-number": ({ base, exponent }: { base: any; exponent: any }) => {
    const b = parseNumber(base);
    const e = parseNumber(exponent);
    let result = 1;
    for (let i = 0; i < e; i++) {
      result *= b;
    }
    return result;
  },
  // problem solver--> 08
  "mnc-sum-of-digits": ({ num }: { num: any }) => {
    return String(Math.abs(parseNumber(num)))
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  },
  // problem solver--> 09
  "mnc-reverse-number": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const reversed = parseFloat(
      String(Math.abs(n)).split("").reverse().join("")
    );
    return n < 0 ? -reversed : reversed;
  },
  // problem solver--> 10
  "mnc-palindrome-number": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return false;
    let reversed = 0;
    let original = n;
    while (original > 0) {
      reversed = reversed * 10 + (original % 10);
      original = Math.floor(original / 10);
    }
    return n === reversed;
  },
  // problem solver--> 11
  "mnc-area-of-circle": ({ radius }: { radius: any }) => {
    return Math.PI * Math.pow(parseNumber(radius), 2);
  },
  // problem solver--> 12
  "mnc-celsius-to-fahrenheit": ({ celsius }: { celsius: any }) => {
    return (parseNumber(celsius) * 9) / 5 + 32;
  },
  // problem solver--> 13
  "mnc-fahrenheit-to-celsius": ({ fahrenheit }: { fahrenheit: any }) => {
    return ((parseNumber(fahrenheit) - 32) * 5) / 9;
  },
  // problem solver--> 14
  "mnc-is-integer": ({ value }: { value: any }) => {
    const num = Number(value);
    if (isNaN(num)) return false;
    return num % 1 === 0;
  },
  // problem solver--> 15
  "mnc-random-number-in-range": ({ min, max }: { min: any; max: any }) => {
    const minNum = Math.ceil(parseNumber(min));
    const maxNum = Math.floor(parseNumber(max));
    if (minNum > maxNum) throw new Error("Min cannot be greater than Max.");
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  },
  // problem solver--> 16
  "mnc-mean-of-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return 0;
    return nums.reduce((sum, num) => sum + num, 0) / nums.length;
  },
  // problem solver--> 17
  "mnc-median-of-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr).sort((a, b) => a - b);
    if (nums.length === 0) return 0;
    const mid = Math.floor(nums.length / 2);
    return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  },
  // problem solver--> 18
  "mnc-mode-of-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return "N/A";
    const counts = new Map<number, number>();
    nums.forEach((num) => counts.set(num, (counts.get(num) || 0) + 1));
    let maxFreq = 0;
    for (const freq of counts.values()) {
      if (freq > maxFreq) maxFreq = freq;
    }
    if (maxFreq === 1) return "No unique mode";
    const mode: number[] = [];
    for (const [num, freq] of counts.entries()) {
      if (freq === maxFreq) mode.push(num);
    }
    return mode.join(", ");
  },
  // problem solver--> 19
  "mnc-greatest-common-divisor": ({ num1, num2 }: { num1: any; num2: any }) => {
    let a = Math.abs(parseNumber(num1));
    let b = Math.abs(parseNumber(num2));
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  },
  // problem solver--> 20
  "mnc-least-common-multiple": ({ num1, num2 }: { num1: any; num2: any }) => {
    const a = Math.abs(parseNumber(num1));
    const b = Math.abs(parseNumber(num2));
    const gcd = (x: number, y: number): number => {
      while (y) {
        [x, y] = [y, x % y];
      }
      return x;
    };
    if (a === 0 || b === 0) return 0;
    return (a * b) / gcd(a, b);
  },
  // problem solver--> 21
  "mnc-is-perfect-square": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return n >= 0 && Math.sqrt(n) % 1 === 0;
  },
  // problem solver--> 22
  "mnc-square-root": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return "Cannot calculate square root of a negative number.";
    if (n === 0) return 0;
    let x = n / 2;
    for (let i = 0; i < 20; i++) {
      // 20 iterations is enough for good precision
      x = 0.5 * (x + n / x);
    }
    return x;
  },
  // problem solver--> 23
  "mnc-decimal-to-binary": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (!Number.isInteger(n)) return "Input must be an integer.";
    return n.toString(2);
  },
  // problem solver--> 24
  "mnc-binary-to-decimal": ({ binary }: { binary: string }) => {
    if (!/^[01]+$/.test(binary)) return "Invalid binary string.";
    return parseInt(binary, 2);
  },
  // problem solver--> 25
  "mnc-is-leap-year": ({ year }: { year: any }) => {
    const y = parseNumber(year);
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  },
  // problem solver--> 26
  "mnc-sum-of-multiples": ({ limit }: { limit: any }) => {
    const l = parseNumber(limit);
    let sum = 0;
    for (let i = 1; i < l; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  },
  // problem solver--> 27
  "mnc-is-armstrong-number": ({ num }: { num: any }) => {
    const s = String(parseNumber(num));
    const power = s.length;
    const sum = s
      .split("")
      .reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === parseNumber(num);
  },
  // problem solver--> 28
  "mnc-is-perfect-number": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        sum += i;
        if (i * i !== n) sum += n / i;
      }
    }
    return sum === n;
  },
  // problem solver--> 29
  "mnc-is-happy-number": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
      seen.add(n);
      n = String(n)
        .split("")
        .reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
    }
    return n === 1;
  },
  // problem solver--> 30
  "mnc-collatz-conjecture": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    if (n <= 0) return "Input must be a positive integer.";
    let steps = 0;
    while (n !== 1) {
      n = n % 2 === 0 ? n / 2 : 3 * n + 1;
      steps++;
    }
    return steps;
  },
  // problem solver--> 31
  "mnc-roman-to-integer": ({ roman }: { roman: string }) => {
    const map: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
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
  // problem solver--> 32
  "mnc-integer-to-roman": ({ num }: { num: any }) => {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let n = parseNumber(num);
    if (n <= 0 || n > 3999) return "Input must be between 1 and 3999";
    let result = "";
    for (let i = 0; i < values.length; i++) {
      while (n >= values[i]) {
        result += symbols[i];
        n -= values[i];
      }
    }
    return result;
  },
  // problem solver--> 33
  "mnc-sieve-of-eratosthenes": ({ limit }: { limit: any }) => {
    const n = parseNumber(limit);
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
    const primes: number[] = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime[i]) primes.push(i);
    }
    return primes.join(", ");
  },
  // problem solver--> 34
  "mnc-pascals-triangle": ({ rows }: { rows: any }) => {
    const r = parseNumber(rows);
    if (r <= 0) return "[]";
    const triangle = [[1]];
    for (let i = 1; i < r; i++) {
      const prevRow = triangle[i - 1];
      const newRow = [1];
      for (let j = 1; j < i; j++) {
        newRow.push(prevRow[j - 1] + prevRow[j]);
      }
      newRow.push(1);
      triangle.push(newRow);
    }
    return JSON.stringify(triangle);
  },
  // problem solver--> 35
  "mnc-matrix-addition": ({
    matrix1,
    matrix2,
  }: {
    matrix1: string;
    matrix2: string;
  }) => {
    const m1 = parseJson(matrix1);
    const m2 = parseJson(matrix2);
    if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
      return "Matrices must have the same dimensions.";
    }
    const result = m1.map((row: number[], r: number) =>
      row.map((val: number, c: number) => val + m2[r][c])
    );
    return JSON.stringify(result);
  },
  // problem solver--> 36
  "mnc-matrix-multiplication": ({
    matrix1,
    matrix2,
  }: {
    matrix1: string;
    matrix2: string;
  }) => {
    const m1 = parseJson(matrix1);
    const m2 = parseJson(matrix2);
    const rows1 = m1.length,
      cols1 = m1[0].length,
      cols2 = m2[0].length;
    if (cols1 !== m2.length) {
      return "Incompatible matrix dimensions for multiplication.";
    }
    const result = Array(rows1)
      .fill(0)
      .map(() => Array(cols2).fill(0));
    for (let i = 0; i < rows1; i++) {
      for (let j = 0; j < cols2; j++) {
        for (let k = 0; k < cols1; k++) {
          result[i][j] += m1[i][k] * m2[k][j];
        }
      }
    }
    return JSON.stringify(result);
  },
  // problem solver--> 37
  "mnc-permutations": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length > 7) return "Input too large for this demonstration.";
    const result: number[][] = [];
    const backtrack = (current: number[], remaining: number[]) => {
      if (remaining.length === 0) {
        result.push([...current]);
        return;
      }
      for (let i = 0; i < remaining.length; i++) {
        current.push(remaining[i]);
        const newRemaining = [
          ...remaining.slice(0, i),
          ...remaining.slice(i + 1),
        ];
        backtrack(current, newRemaining);
        current.pop();
      }
    };
    backtrack([], nums);
    return JSON.stringify(result);
  },
  // problem solver--> 38
  "mnc-combinations": ({ arr, size }: { arr: string; size: any }) => {
    const nums = parseNumArray(arr);
    const k = parseNumber(size);
    const result: number[][] = [];
    const backtrack = (current: number[], start: number) => {
      if (current.length === k) {
        result.push([...current]);
        return;
      }
      for (let i = start; i < nums.length; i++) {
        current.push(nums[i]);
        backtrack(current, i + 1);
        current.pop();
      }
    };
    backtrack([], 0);
    return JSON.stringify(result);
  },
  // problem solver--> 39
  "mnc-fast-exponentiation": ({
    base,
    exponent,
  }: {
    base: any;
    exponent: any;
  }) => {
    let b = BigInt(parseNumber(base));
    let e = BigInt(parseNumber(exponent));
    if (e < 0) return "Exponent must be non-negative for this implementation.";
    let res = 1n;
    while (e > 0) {
      if (e % 2n === 1n) res *= b;
      b *= b;
      e /= 2n;
    }
    return res.toString();
  },
  // problem solver--> 40
  "mnc-digital-root": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n === 0) return 0;
    const root = 1 + ((n - 1) % 9);
    return root;
  },
  // problem solver--> 41
  "mnc-base-conversion": ({
    numberStr,
    fromBase,
    toBase,
  }: {
    numberStr: string;
    fromBase: any;
    toBase: any;
  }) => {
    const from = parseNumber(fromBase);
    const to = parseNumber(toBase);
    const decimalValue = parseInt(numberStr, from);
    if (isNaN(decimalValue)) return "Invalid number for the given base.";
    return decimalValue.toString(to).toUpperCase();
  },
  // problem solver--> 42
  "mnc-is-power-of-two": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return n > 0 && (n & (n - 1)) === 0;
  },
  // problem solver--> 43
  "mnc-missing-number-in-sequence": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  },
  // problem solver--> 44
  "mnc-plus-one": ({ digits }: { digits: string }) => {
    const d = parseNumArray(digits);
    for (let i = d.length - 1; i >= 0; i--) {
      if (d[i] < 9) {
        d[i]++;
        return `[${d.join(", ")}]`;
      }
      d[i] = 0;
    }
    d.unshift(1);
    return `[${d.join(", ")}]`;
  },
  // problem solver--> 45
  "mnc-excel-column-number": ({ columnTitle }: { columnTitle: string }) => {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
      result = result * 26 + (columnTitle.charCodeAt(i) - 64);
    }
    return result;
  },
  // problem solver--> 46
  "mnc-excel-column-title": ({ columnNumber }: { columnNumber: any }) => {
    let n = parseNumber(columnNumber);
    let result = "";
    while (n > 0) {
      n--;
      result = String.fromCharCode(65 + (n % 26)) + result;
      n = Math.floor(n / 26);
    }
    return result;
  },
  // problem solver--> 47
  "mnc-single-number": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return nums.reduce((acc, num) => acc ^ num, 0);
  },
  // problem solver--> 48
  "mnc-add-binary": ({ bin1, bin2 }: { bin1: string; bin2: string }) => {
    const sum = BigInt(`0b${bin1}`) + BigInt(`0b${bin2}`);
    return sum.toString(2);
  },
  // problem solver--> 49
  "mnc-trailing-zeroes-in-factorial": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    let count = 0;
    while (n >= 5) {
      n = Math.floor(n / 5);
      count += n;
    }
    return count;
  },
  // problem solver--> 50
  "mnc-ugly-number": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    if (n <= 0) return false;
    for (const p of [2, 3, 5]) {
      while (n % p === 0) {
        n /= p;
      }
    }
    return n === 1;
  },
  // problem solver--> 51
  "mnc-count-primes": ({ n }: { n: any }) => {
    const limit = parseNumber(n);
    if (limit <= 2) return 0;
    const isPrime = new Array(limit).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i < limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < limit; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return isPrime.filter(Boolean).length;
  },
  // problem solver--> 52
  "mnc-add-digits": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n === 0) return 0;
    return 1 + ((n - 1) % 9);
  },
  // problem solver--> 53
  "mnc-valid-perfect-square": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return false;
    let left = 0,
      right = n;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const square = mid * mid;
      if (square === n) return true;
      if (square < n) left = mid + 1;
      else right = mid - 1;
    }
    return false;
  },
  // problem solver--> 54
  "mnc-arranging-coins": ({ n }: { n: any }) => {
    const coins = parseNumber(n);
    return Math.floor(Math.sqrt(2 * coins + 0.25) - 0.5);
  },
  // problem solver--> 55
  "mnc-diophantine-equation": () =>
    `(Conceptual) Difficult. Requires the Extended Euclidean Algorithm. A solution exists if and only if gcd(a, b) divides c.`,
  // problem solver--> 56
  "mnc-pythagorean-triplet": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr)
      .map((n) => n * n)
      .sort((a, b) => a - b);
    for (let i = nums.length - 1; i >= 2; i--) {
      let left = 0,
        right = i - 1;
      while (left < right) {
        if (nums[left] + nums[right] === nums[i]) return true;
        if (nums[left] + nums[right] < nums[i]) left++;
        else right--;
      }
    }
    return false;
  },
  // problem solver--> 57
  "mnc-complex-number-multiplication": ({
    num1,
    num2,
  }: {
    num1: string;
    num2: string;
  }) => {
    const [real1, imag1] = num1.slice(0, -1).split("+").map(Number);
    const [real2, imag2] = num2.slice(0, -1).split("+").map(Number);
    const newReal = real1 * real2 - imag1 * imag2;
    const newImag = real1 * imag2 + imag1 * real2;
    return `${newReal}+${newImag}i`;
  },
  // problem solver--> 58
  "mnc-fraction-to-recurring-decimal": () =>
    `(Conceptual) Very difficult. Involves long division logic, using a map to track remainders. When a remainder repeats, a recurring cycle has been found.`,
  // problem solver--> 59
  "mnc-pow-x-n": ({ x, n }: { x: any; n: any }) => {
    const base = parseNumber(x);
    const exp = parseNumber(n);
    if (exp === 0) return 1;
    let res = 1;
    let absExp = Math.abs(exp);
    let currentBase = base;
    while (absExp > 0) {
      if (absExp % 2 === 1) res *= currentBase;
      currentBase *= currentBase;
      absExp = Math.floor(absExp / 2);
    }
    return exp < 0 ? 1 / res : res;
  },
  // problem solver--> 60
  "mnc-multiply-strings": ({ num1, num2 }: { num1: string; num2: string }) => {
    if (num1 === "0" || num2 === "0") return "0";
    const res = Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
      for (let j = num2.length - 1; j >= 0; j--) {
        const p1 = i + j,
          p2 = i + j + 1;
        const sum = res[p2] + Number(num1[i]) * Number(num2[j]);
        res[p2] = sum % 10;
        res[p1] += Math.floor(sum / 10);
      }
    }
    if (res[0] === 0) res.shift();
    return res.join("");
  },
  // problem solver--> 61
  "mnc-angle-between-hands-of-a-clock": ({
    hour,
    minutes,
  }: {
    hour: any;
    minutes: any;
  }) => {
    const h = parseNumber(hour);
    const m = parseNumber(minutes);
    const hourAngle = ((h % 12) + m / 60) * 30;
    const minuteAngle = m * 6;
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
  },
  // problem solver--> 62
  "mnc-bulb-switcher": ({ n }: { n: any }) => {
    return Math.floor(Math.sqrt(parseNumber(n)));
  },
  // problem solver--> 63
  "mnc-nth-digit": () =>
    `(Conceptual) Difficult. Determine how many digits the number containing the nth digit has. Then find the specific number. Finally, find the specific digit within that number.`,
  // problem solver--> 64
  "mnc-string-to-integer-atoi": ({ s }: { s: string }) => {
    const num = parseInt(s, 10);
    if (isNaN(num)) return 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    if (num > INT_MAX) return INT_MAX;
    if (num < INT_MIN) return INT_MIN;
    return num;
  },
  // problem solver--> 65
  "mnc-integer-break": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    if (num <= 3) return num - 1;
    if (num % 3 === 0) return Math.pow(3, num / 3);
    if (num % 3 === 1) return Math.pow(3, (num - 4) / 3) * 4;
    return Math.pow(3, (num - 2) / 3) * 2;
  },
  // problem solver--> 66
  "mnc-water-and-jug-problem": ({ x, y, z }: { x: any; y: any; z: any }) => {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const capX = parseNumber(x);
    const capY = parseNumber(y);
    const target = parseNumber(z);
    if (capX + capY < target) return false;
    if (capX === target || capY === target || capX + capY === target)
      return true;
    return target % gcd(capX, capY) === 0;
  },
  // problem solver--> 67
  "mnc-nim-game": ({ n }: { n: any }) => {
    return parseNumber(n) % 4 !== 0;
  },
  // problem solver--> 68
  "mnc-super-pow": () =>
    `(Conceptual) Difficult. Requires modular exponentiation and understanding properties of modular arithmetic. The exponent can be reduced mod phi(1337).`,
  // problem solver--> 69
  "mnc-largest-triangle-area": ({ points }: { points: string }) => {
    const p = parseJson(points);
    let maxArea = 0;
    for (let i = 0; i < p.length; i++) {
      for (let j = i + 1; j < p.length; j++) {
        for (let k = j + 1; k < p.length; k++) {
          const area =
            0.5 *
            Math.abs(
              p[i][0] * (p[j][1] - p[k][1]) +
                p[j][0] * (p[k][1] - p[i][1]) +
                p[k][0] * (p[i][1] - p[j][1])
            );
          maxArea = Math.max(maxArea, area);
        }
      }
    }
    return maxArea;
  },
  // problem solver--> 70
  "mnc-minimum-moves-to-equal-array-elements": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const min = Math.min(...nums);
    return nums.reduce((sum, num) => sum + (num - min), 0);
  },
  // problem solver--> 71
  "mnc-matrix-transpose": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    const rows = mat.length;
    const cols = mat[0].length;
    const transposed = Array(cols)
      .fill(0)
      .map(() => Array(rows).fill(0));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transposed[j][i] = mat[i][j];
      }
    }
    return JSON.stringify(transposed);
  },
  // problem solver--> 72
  "mnc-determinant-2x2": ({ matrix }: { matrix: string }) => {
    const m = parseJson(matrix);
    if (m.length !== 2 || m[0].length !== 2) return "Matrix must be 2x2";
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  },
  // problem solver--> 73
  "mnc-dot-product": ({ vec1, vec2 }: { vec1: string; vec2: string }) => {
    const v1 = parseNumArray(vec1);
    const v2 = parseNumArray(vec2);
    if (v1.length !== v2.length) return "Vectors must be same length";
    return v1.reduce((sum, val, i) => sum + val * v2[i], 0);
  },
  // problem solver--> 74
  "mnc-amicable-numbers": ({ num1, num2 }: { num1: any; num2: any }) => {
    const n1 = parseNumber(num1);
    const n2 = parseNumber(num2);
    const sumDivisors = (n: number) => {
      let sum = 1;
      for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
          sum += i;
          if (i * i !== n) sum += n / i;
        }
      }
      return sum;
    };
    return n1 !== n2 && sumDivisors(n1) === n2 && sumDivisors(n2) === n1;
  },
  // problem solver--> 75
  "mnc-catalan-numbers": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    if (num > 15) return "Input too large for this recursive solution.";
    const memo: number[] = [];
    const catalan = (c: number): number => {
      if (c <= 1) return 1;
      if (memo[c]) return memo[c];
      let res = 0;
      for (let i = 0; i < c; i++) {
        res += catalan(i) * catalan(c - 1 - i);
      }
      memo[c] = res;
      return res;
    };
    return catalan(num);
  },
  // problem solver--> 76
  "mnc-count-and-say": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    let s = "1";
    for (let i = 1; i < num; i++) {
      let nextS = "";
      let count = 1;
      for (let j = 0; j < s.length; j++) {
        if (s[j] === s[j + 1]) {
          count++;
        } else {
          nextS += count + s[j];
          count = 1;
        }
      }
      s = nextS;
    }
    return s;
  },
  // problem solver--> 77
  "mnc-spiral-matrix": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    if (mat.length === 0) return "[]";
    const result: number[] = [];
    let top = 0,
      bottom = mat.length - 1,
      left = 0,
      right = mat[0].length - 1;
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
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 78
  "mnc-rotate-image": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    const n = mat.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }
    for (let i = 0; i < n; i++) {
      mat[i].reverse();
    }
    return JSON.stringify(mat);
  },
  // problem solver--> 79
  "mnc-set-matrix-zeroes": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    const rows = mat.length,
      cols = mat[0].length;
    const zeroRows = new Set<number>();
    const zeroCols = new Set<number>();
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (mat[r][c] === 0) {
          zeroRows.add(r);
          zeroCols.add(c);
        }
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (zeroRows.has(r) || zeroCols.has(c)) {
          mat[r][c] = 0;
        }
      }
    }
    return JSON.stringify(mat);
  },
  // problem solver--> 80
  "mnc-valid-sudoku": () =>
    `(Conceptual) Difficult. Requires iterating through the board three times. Use Sets to check for duplicates in each row, each column, and each 3x3 sub-box. If a duplicate is found at any point, the board is invalid.`,
  // problem solver--> 81
  "mnc-game-of-life": ({ board }: { board: string }) => {
    const b = parseJson(board);
    const rows = b.length,
      cols = b[0].length;
    const newBoard = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(0));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let liveNeighbors = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const newR = r + i,
              newC = c + j;
            if (
              newR >= 0 &&
              newR < rows &&
              newC >= 0 &&
              newC < cols &&
              b[newR][newC] === 1
            ) {
              liveNeighbors++;
            }
          }
        }
        if (b[r][c] === 1 && (liveNeighbors < 2 || liveNeighbors > 3))
          newBoard[r][c] = 0;
        else if (b[r][c] === 0 && liveNeighbors === 3) newBoard[r][c] = 1;
        else newBoard[r][c] = b[r][c];
      }
    }
    return JSON.stringify(newBoard);
  },
  // problem solver--> 82
  "mnc-max-points-on-a-line": () =>
    `(Conceptual) Very difficult. Iterate through each point. For each point, calculate the slope to every other point. Use a map to store the counts of each slope. The max count for any point + 1 is a candidate for the overall max. Handle vertical and duplicate points.`,
  // problem solver--> 83
  "mnc-basic-calculator-ii": () =>
    `(Conceptual) Use a stack. Iterate through the string. When you hit an operator, perform the previous operation if it was '*' or '/'. For '+' or '-', push the signed number onto the stack. Sum the stack at the end.`,
  // problem solver--> 84
  "mnc-reverse-bits": ({ n }: { n: string }) => {
    let result = 0;
    let power = 31;
    for (let i = 0; i < 32; i++) {
      if (n[i] === "1") {
        result += Math.pow(2, power);
      }
      power--;
    }
    return result;
  },
  // problem solver--> 85
  "mnc-number-of-1-bits": ({ n }: { n: string }) => {
    return n.split("1").length - 1;
  },
  // problem solver--> 86
  "mnc-gray-code": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    const result: number[] = [];
    for (let i = 0; i < 1 << num; i++) {
      result.push(i ^ (i >> 1));
    }
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 87
  "mnc-majority-element": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let candidate = nums[0],
      count = 1;
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) candidate = nums[i];
      count += nums[i] === candidate ? 1 : -1;
    }
    return candidate;
  },
  // problem solver--> 88
  "mnc-kth-largest-element": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const size = parseNumber(k);
    nums.sort((a, b) => b - a);
    return nums[size - 1];
  },
  // problem solver--> 89
  "mnc-product-of-array-except-self": ({ arr }: { arr: string }) => {
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
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 90
  "mnc-container-with-most-water": ({ arr }: { arr: string }) => {
    const h = parseNumArray(arr);
    let maxArea = 0,
      left = 0,
      right = h.length - 1;
    while (left < right) {
      maxArea = Math.max(maxArea, Math.min(h[left], h[right]) * (right - left));
      if (h[left] < h[right]) left++;
      else right--;
    }
    return maxArea;
  },
  // problem solver--> 91
  "mnc-coin-change": () =>
    `(Conceptual) Dynamic Programming. Let dp[i] be the minimum coins to make amount i. dp[i] = 1 + min(dp[i - coin]) for every coin.`,
  // problem solver--> 92
  "mnc-longest-consecutive-sequence": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return 0;
    const numSet = new Set(nums);
    let longest = 0;
    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;
        while (numSet.has(currentNum + 1)) {
          currentNum++;
          currentStreak++;
        }
        longest = Math.max(longest, currentStreak);
      }
    }
    return longest;
  },
  // problem solver--> 93
  "mnc-gas-station": ({ gas, cost }: { gas: string; cost: string }) => {
    const g = parseNumArray(gas);
    const c = parseNumArray(cost);
    if (g.reduce((a, b) => a + b) < c.reduce((a, b) => a + b)) return -1;
    let total = 0,
      start = 0;
    for (let i = 0; i < g.length; i++) {
      total += g[i] - c[i];
      if (total < 0) {
        total = 0;
        start = i + 1;
      }
    }
    return start;
  },
  // problem solver--> 94
  "mnc-candy": ({ ratings }: { ratings: string }) => {
    const r = parseNumArray(ratings);
    const n = r.length;
    const candies = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
      if (r[i] > r[i - 1]) candies[i] = candies[i - 1] + 1;
    }
    for (let i = n - 2; i >= 0; i--) {
      if (r[i] > r[i + 1])
        candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
    return candies.reduce((a, b) => a + b, 0);
  },
  // problem solver--> 95
  "mnc-jump-game-ii": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let jumps = 0,
      currentEnd = 0,
      farthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
      if (i === currentEnd) {
        jumps++;
        currentEnd = farthest;
      }
    }
    return jumps;
  },
  // problem solver--> 96
  "mnc-first-missing-positive": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
        [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
      }
    }
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) return i + 1;
    }
    return n + 1;
  },
  // problem solver--> 97
  "mnc-next-permutation": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) j--;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 98
  "mnc-trapping-rain-water": ({ heights }: { heights: string }) => {
    const h = parseNumArray(heights);
    if (h.length === 0) return 0;
    let left = 0,
      right = h.length - 1;
    let leftMax = h[left],
      rightMax = h[right];
    let water = 0;
    while (left < right) {
      if (leftMax < rightMax) {
        left++;
        leftMax = Math.max(leftMax, h[left]);
        water += leftMax - h[left];
      } else {
        right--;
        rightMax = Math.max(rightMax, h[right]);
        water += rightMax - h[right];
      }
    }
    return water;
  },
  // problem solver--> 99
  "mnc-largest-rectangle-in-histogram": () =>
    `(Conceptual) Monotonic Stack. Iterate through heights. Use a stack to keep track of indices of bars in increasing height. When a smaller bar is encountered, pop from the stack and calculate the area for the popped bar.`,
  // problem solver--> 100
  "mnc-maximal-rectangle": () =>
    `(Conceptual) Reduce the problem to "Largest Rectangle in Histogram". For each row, create a histogram of consecutive '1's above it. Run the histogram algorithm for each row and find the maximum area.`,
  // problem solver--> 101
  "mnc-chinese-remainder-theorem": () =>
    `(Conceptual) Very advanced. Requires implementation of the Extended Euclidean Algorithm to find modular multiplicative inverses. The solution is the sum of terms, where each term is (rem * N_i * inv_i) mod N.`,
  // problem solver--> 102
  "mnc-josephus-problem": ({ n, k }: { n: any; k: any }) => {
    const numPeople = parseNumber(n);
    const step = parseNumber(k);
    if (numPeople === 1) return 1;
    const josephus = (n: number, k: number): number => {
      if (n === 1) return 0;
      return (josephus(n - 1, k) + k) % n;
    };
    return josephus(numPeople, step) + 1; // Convert 0-indexed to 1-indexed
  },
  // problem solver--> 103
  "mnc-integer-partition": () =>
    `(Conceptual) Dynamic Programming. Let dp[i][j] be the number of partitions of i using parts up to size j. The recurrence is dp[i][j] = dp[i][j-1] + dp[i-j][j].`,
  // problem solver--> 104
  "mnc-fft-conceptual": () =>
    `(Conceptual) Fast Fourier Transform is a divide-and-conquer algorithm to compute the Discrete Fourier Transform. It's used in signal processing and for multiplying large polynomials in O(n log n) time.`,
  // problem solver--> 105
  "mnc-miller-rabin-primality-test": () =>
    `(Conceptual) Advanced probabilistic primality test based on Fermat's Little Theorem. It involves modular exponentiation and checking for non-trivial square roots of 1 modulo n.`,
  // problem solver--> 106
  "mnc-karatsuba-multiplication": () =>
    `(Conceptual) A divide-and-conquer algorithm. It multiplies two n-digit numbers by making three recursive calls on n/2-digit numbers, which is faster than the classic four calls.`,
  // problem solver--> 107
  "mnc-gaussian-elimination-conceptual": () =>
    `(Conceptual) A method in linear algebra for solving systems of linear equations. It uses elementary row operations to reduce a matrix to row echelon form.`,
  // problem solver--> 108
  "mnc-simplex-algorithm-conceptual": () =>
    `(Conceptual) A standard algorithm for linear programming. It starts at a vertex of the feasible region and iteratively moves to an adjacent vertex with a better objective function value until an optimal solution is found.`,
  // problem solver--> 109
  "mnc-monty-hall-problem": ({ simulations }: { simulations: any }) => {
    const n = parseNumber(simulations);
    let switchWins = 0;
    let stayWins = 0;
    for (let i = 0; i < n; i++) {
      const car = Math.floor(Math.random() * 3);
      const choice = Math.floor(Math.random() * 3);
      if (choice === car) stayWins++;
      else switchWins++;
    }
    return `Stay wins: ~${((stayWins / n) * 100).toFixed(1)}%. Switch wins: ~${(
      (switchWins / n) *
      100
    ).toFixed(1)}%. Switching is the better strategy.`;
  },
  // problem solver--> 110
  "mnc-birthday-paradox": ({ n }: { n: any }) => {
    const numPeople = parseNumber(n);
    let p = 1.0;
    for (let i = 0; i < numPeople; i++) {
      p *= (365 - i) / 365;
    }
    return `Probability of NO shared birthday: ${(p * 100).toFixed(
      2
    )}%. Probability of a shared birthday: ${((1 - p) * 100).toFixed(2)}%`;
  },
  // problem solver--> 111
  "mnc-reservoir-sampling": ({ stream, k }: { stream: string; k: any }) => {
    const s = parseNumArray(stream);
    const size = parseNumber(k);
    const reservoir = s.slice(0, size);
    for (let i = size; i < s.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      if (j < size) {
        reservoir[j] = s[i];
      }
    }
    return `A random sample: [${reservoir.join(", ")}]`;
  },
  // problem solver--> 112
  "mnc-fisher-yates-shuffle": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return `Shuffled: [${array.join(", ")}]`;
  },
  // problem solver--> 113
  "mnc-combination-sum": () =>
    `(Conceptual) Backtracking. A recursive helper tries including each candidate number. If the sum exceeds the target, backtrack. Since numbers can be reused, the recursive call is made for the same index.`,
  // problem solver--> 114
  "mnc-unique-paths": ({ m, n }: { m: any; n: any }) => {
    const rows = parseNumber(m);
    const cols = parseNumber(n);
    const dp = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(0));
    for (let i = 0; i < rows; i++) dp[i][0] = 1;
    for (let j = 0; j < cols; j++) dp[0][j] = 1;
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
    return dp[rows - 1][cols - 1];
  },
  // problem solver--> 115
  "mnc-climbing-stairs": ({ n }: { n: any }) => {
    const steps = parseNumber(n);
    if (steps <= 2) return steps;
    let a = 1,
      b = 2;
    for (let i = 3; i <= steps; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  },
  // problem solver--> 116
  "mnc-gray-code-to-integer": ({ gray }: { gray: any }) => {
    let g = parseNumber(gray);
    let n = 0;
    while (g > 0) {
      n ^= g;
      g >>= 1;
    }
    return n;
  },
  // problem solver--> 117
  "mnc-integer-to-gray-code": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return n ^ (n >> 1);
  },
  // problem solver--> 118
  "mnc-matrix-determinant": () =>
    `(Conceptual) Difficult. Requires a recursive implementation of Laplace expansion. For an n x n matrix, the determinant is a sum of terms involving determinants of (n-1) x (n-1) sub-matrices.`,
  // problem solver--> 119
  "mnc-newtons-method-sqrt": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return "Invalid input";
    let x = n;
    for (let i = 0; i < 20; i++) {
      x = x - (x * x - n) / (2 * x);
    }
    return x;
  },
  // problem solver--> 120
  "mnc-shunting-yard-algorithm": () =>
    `(Conceptual) Complex parsing algorithm. Uses an operator stack to handle precedence. Iterates through tokens: numbers go to output, operators are pushed to the stack based on precedence rules, parentheses manage the stack.`,
  // problem solver--> 121
  "mnc-evaluate-rpn": ({ rpn }: { rpn: string }) => {
    const tokens = rpn.split(",");
    const stack: number[] = [];
    for (const token of tokens) {
      if (!isNaN(Number(token))) {
        stack.push(Number(token));
      } else {
        const b = stack.pop()!;
        const a = stack.pop()!;
        if (token === "+") stack.push(a + b);
        else if (token === "-") stack.push(a - b);
        else if (token === "*") stack.push(a * b);
        else if (token === "/") stack.push(Math.trunc(a / b));
      }
    }
    return stack[0];
  },
  // problem solver--> 122
  "mnc-line-through-most-points": () =>
    `(Conceptual) Very difficult. Iterate through each point. For each point, calculate the slope to every other point. Use a map to store the counts of each slope. The max count for any point + 1 is a candidate for the overall max. Handle vertical and duplicate points.`,
  // problem solver--> 123
  "mnc-perfect-number-generation": () =>
    `(Conceptual) Based on Euclid-Euler theorem. A number 2^(p-1) * (2^p - 1) is a perfect number if and only if (2^p - 1) is a Mersenne prime. The algorithm involves checking p for primality, then checking 2^p - 1 for primality.`,
  // problem solver--> 124
  "mnc-median-of-two-sorted-arrays": () =>
    `(Conceptual) Very difficult. Requires a modified binary search approach on the smaller array to partition both arrays such that all elements on the left side are smaller than all elements on the right side. The median is then derived from the boundary elements.`,
  // problem solver--> 125
  "mnc-pi-leibniz-formula": ({ iterations }: { iterations: any }) => {
    const n = parseNumber(iterations);
    let pi = 0;
    for (let i = 0; i < n; i++) {
      pi += Math.pow(-1, i) / (2 * i + 1);
    }
    return pi * 4;
  },
  // problem solver--> 126
  "mnc-pi-monte-carlo": ({ points }: { points: any }) => {
    const n = parseNumber(points);
    let inCircle = 0;
    for (let i = 0; i < n; i++) {
      const x = Math.random();
      const y = Math.random();
      if (x * x + y * y <= 1) {
        inCircle++;
      }
    }
    return (4 * inCircle) / n;
  },
  // problem solver--> 127
  "mnc-fast-inverse-sqrt": () =>
    `(Conceptual) A legendary algorithm using bit-level hacking and Newton's method to quickly compute 1/sqrt(x). It treats a float's bits as an integer to get a good initial guess, then refines it.`,
  // problem solver--> 128
  "mnc-modular-exponentiation": ({
    base,
    exponent,
    modulus,
  }: {
    base: any;
    exponent: any;
    modulus: any;
  }) => {
    let b = BigInt(parseNumber(base));
    let e = BigInt(parseNumber(exponent));
    let m = BigInt(parseNumber(modulus));
    let res = 1n;
    b %= m;
    while (e > 0) {
      if (e % 2n === 1n) res = (res * b) % m;
      e >>= 1n;
      b = (b * b) % m;
    }
    return res.toString();
  },
  // problem solver--> 129
  "mnc-modular-multiplicative-inverse": () =>
    `(Conceptual) For a prime modulus, it can be found using Fermat's Little Theorem: a^(m-2) mod m. For a general modulus, the Extended Euclidean Algorithm is required.`,
  // problem solver--> 130
  "mnc-euler-totient-function": ({ n }: { n: any }) => {
    let num = parseNumber(n);
    let result = num;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        while (num % i === 0) num /= i;
        result -= result / i;
      }
    }
    if (num > 1) result -= result / num;
    return result;
  },
  // problem solver--> 131
  "mnc-find-primes-in-range": ({ start, end }: { start: any; end: any }) =>
    `(Conceptual) Use a Sieve of Eratosthenes up to 'end', then filter the results for numbers >= 'start'.`,
  // problem solver--> 132
  "mnc-sum-of-primes": ({ limit }: { limit: any }) =>
    `(Conceptual) Use Sieve of Eratosthenes to find all primes up to the limit, then sum the resulting array.`,
  // problem solver--> 133
  "mnc-mersenne-prime": ({ p }: { p: any }) =>
    `(Conceptual) First, check if p is prime. If so, check if 2^p - 1 is prime using a strong primality test like Miller-Rabin.`,
  // problem solver--> 134
  "mnc-friendly-numbers": () =>
    `(Conceptual) Write a helper function sumDivisors(n). The abundancy is sumDivisors(n)/n. Check if abundancy(num1) === abundancy(num2).`,
  // problem solver--> 135
  "mnc-perfect-power": () =>
    `(Conceptual) Iterate through possible exponents 'b' from 2 up to log2(n). For each 'b', calculate the integer b-th root of n and check if it's a whole number.`,
  // problem solver--> 136
  "mnc-narcissistic-number": ({ num }: { num: any }) => {
    const s = String(parseNumber(num));
    const power = s.length;
    const sum = s
      .split("")
      .reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === parseNumber(num);
  },
  // problem solver--> 137
  "mnc-kaprekar-number": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const sq = String(n * n);
    for (let i = 1; i < sq.length; i++) {
      const p1 = Number(sq.substring(0, i));
      const p2 = Number(sq.substring(i));
      if (p1 + p2 === n && p2 > 0) return true;
    }
    return false;
  },
  // problem solver--> 138
  "mnc-automorphic-number": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const sq = String(n * n);
    return sq.endsWith(String(n));
  },
  // problem solver--> 139
  "mnc-luhn-algorithm": ({ numStr }: { numStr: string }) => {
    let sum = 0;
    let doubleUp = false;
    for (let i = numStr.length - 1; i >= 0; i--) {
      let digit = Number(numStr[i]);
      if (doubleUp) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      doubleUp = !doubleUp;
    }
    return sum % 10 === 0;
  },
  // problem solver--> 140
  "mnc-taxicab-number": () =>
    `(Conceptual) Difficult. Requires iterating through pairs (a,b), calculating a^3+b^3, and storing the sums and their counts in a map until a sum with a count of 'n' is found.`,
  // problem solver--> 141
  "mnc-sqrt-decomposition": () =>
    `(Conceptual) Preprocessing: Divide the array into sqrt(n) blocks and store the sum of each block. Query: Sum the full blocks in the range and then add the individual elements from the partial blocks at the start and end of the range.`,
  // problem solver--> 142
  "mnc-fenwick-tree": () =>
    `(Conceptual) A data structure that supports prefix sum queries and point updates in O(log n) time. It uses bitwise operations on indices to navigate the tree structure implicitly stored in an array.`,
  // problem solver--> 143
  "mnc-segment-tree": () =>
    `(Conceptual) A tree data structure where each node represents an interval or segment. Each node stores an aggregate value (like min, max, or sum) for its interval. Queries and updates are O(log n).`,
  // problem solver--> 144
  "mnc-prime-factorization": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    const factors: number[] = [];
    for (let i = 2; i * i <= n; i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    if (n > 1) factors.push(n);
    return factors.join(", ");
  },
  // problem solver--> 145
  "mnc-number-of-divisors": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        count += i * i === n ? 1 : 2;
      }
    }
    return count;
  },
  // problem solver--> 146
  "mnc-sum-of-divisors": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    let sum = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        sum += i;
        if (i * i !== n) sum += n / i;
      }
    }
    return sum;
  },
  // problem solver--> 147
  "mnc-random-point-in-circle": ({ radius }: { radius: any }) => {
    const r = parseNumber(radius);
    const angle = 2 * Math.PI * Math.random();
    const hyp = Math.sqrt(Math.random()) * r;
    const x = Math.cos(angle) * hyp;
    const y = Math.sin(angle) * hyp;
    return `Point: (${x.toFixed(2)}, ${y.toFixed(2)})`;
  },
  // problem solver--> 148
  "mnc-vector-cross-product": ({
    vec1,
    vec2,
  }: {
    vec1: string;
    vec2: string;
  }) => {
    const v1 = parseNumArray(vec1);
    const v2 = parseNumArray(vec2);
    const x = v1[1] * v2[2] - v1[2] * v2[1];
    const y = v1[2] * v2[0] - v1[0] * v2[2];
    const z = v1[0] * v2[1] - v1[1] * v2[0];
    return `[${x}, ${y}, ${z}]`;
  },
  // problem solver--> 149
  "mnc-matrix-rotation": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    const n = mat.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }
    for (let i = 0; i < n; i++) {
      mat[i].reverse();
    }
    return JSON.stringify(mat);
  },
  // problem solver--> 150
  "mnc-spiral-matrix-ii": ({ n }: { n: any }) => {
    const size = parseNumber(n);
    const mat = Array(size)
      .fill(0)
      .map(() => Array(size).fill(0));
    let count = 1,
      top = 0,
      bottom = size - 1,
      left = 0,
      right = size - 1;
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) mat[top][i] = count++;
      top++;
      for (let i = top; i <= bottom; i++) mat[i][right] = count++;
      right--;
      for (let i = right; i >= left; i--) mat[bottom][i] = count++;
      bottom--;
      for (let i = bottom; i >= top; i--) mat[i][left] = count++;
      left++;
    }
    return JSON.stringify(mat);
  },
  // problem solver--> 151
  "mnc-polygon-area": ({ vertices }: { vertices: string }) =>
    `(Conceptual) Implement the Shoelace formula: Area = 0.5 * |Σ(x_i * y_{i+1} - x_{i+1} * y_i)|`,
  // problem solver--> 152
  "mnc-karatsuba-multiplication-conceptual": () =>
    `(Conceptual) A recursive algorithm to multiply large numbers. It reduces one multiplication of size n to three multiplications of size n/2.`,
  // problem solver--> 153
  "mnc-extended-euclidean-algorithm": () =>
    `(Conceptual) An extension of the Euclidean algorithm which also finds the integer coefficients x and y that satisfy Bézout's identity: ax + by = gcd(a, b).`,
  // problem solver--> 154
  "mnc-rsa-encryption-conceptual": () =>
    `(Conceptual) Key generation involves choosing two large primes. The public key is (e, n) and the private is (d, n). Encryption is c = m^e mod n. Decryption is m = c^d mod n.`,
  // problem solver--> 155
  "mnc-hailstone-sequence": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    const seq = [n];
    while (n !== 1) {
      n = n % 2 === 0 ? n / 2 : 3 * n + 1;
      seq.push(n);
    }
    return seq.join(" -> ");
  },
  // problem solver--> 156
  "mnc-goldbach-conjecture": ({ num }: { num: any }) =>
    `(Conceptual) Generate primes up to the given number using a sieve. Then iterate through the primes and check if (num - prime) is also in the set of primes.`,
  // problem solver--> 157
  "mnc-magic-square-check": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    const n = mat.length;
    const targetSum = mat[0].reduce((a: number, b: number) => a + b, 0);
    // ... complete logic for rows, cols, diagonals
    return `(Conceptual) Check if sum of all rows, columns, and diagonals equal the target sum.`;
  },
  // problem solver--> 158
  "mnc-happy-number-cycle-detection": () =>
    `(Conceptual) Use two pointers, a "slow" one that advances one step at a time and a "fast" one that advances two steps. If they meet, a cycle exists. If the fast one reaches 1, the number is happy.`,
  // problem solver--> 159
  "mnc-number-to-words": () =>
    `(Conceptual) Complex. Requires breaking the number down into chunks of three digits and using helper functions to convert hundreds, tens, and units to words, then appending the correct scale (Thousand, Million, etc.).`,
  // problem solver--> 160
  "mnc-basic-calculator": () =>
    `(Conceptual) Requires a stack-based approach to handle parentheses. When a '(' is seen, push the current result and sign to the stack. When ')' is seen, pop and calculate the sub-expression's value.`,
  // problem solver--> 161
  "mnc-nth-ugly-number": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    const dp = [1];
    let p2 = 0,
      p3 = 0,
      p5 = 0;
    for (let i = 1; i < num; i++) {
      const next2 = dp[p2] * 2,
        next3 = dp[p3] * 3,
        next5 = dp[p5] * 5;
      const min = Math.min(next2, next3, next5);
      dp[i] = min;
      if (min === next2) p2++;
      if (min === next3) p3++;
      if (min === next5) p5++;
    }
    return dp[num - 1];
  },
  // problem solver--> 162
  "mnc-super-ugly-number": () =>
    `(Conceptual) Dynamic Programming. Similar to Nth Ugly Number, but uses an array of pointers, one for each prime in the given list.`,
  // problem solver--> 163
  "mnc-largest-number": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr).map(String);
    nums.sort((a, b) => (b + a).localeCompare(a + b));
    if (nums[0] === "0") return "0";
    return nums.join("");
  },
  // problem solver--> 164
  "mnc-fraction-addition-and-subtraction": () =>
    `(Conceptual) Complex parsing. Parse each fraction. Find a common denominator for all fractions. Convert numerators, sum them up, and then simplify the final fraction by dividing by the GCD.`,
  // problem solver--> 165
  "mnc-factorial-trailing-zeroes": ({ n }: { n: any }) => {
    let num = parseNumber(n);
    let count = 0;
    while (num >= 5) {
      num = Math.floor(num / 5);
      count += num;
    }
    return count;
  },
  // problem solver--> 166
  "mnc-minimum-path-sum": () =>
    `(Conceptual) Dynamic Programming. The min sum to reach cell (r, c) is grid[r][c] + min(sum(r-1, c), sum(r, c-1)). The grid can be modified in-place.`,
  // problem solver--> 167
  "mnc-largest-perimeter-triangle": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr).sort((a, b) => a - b);
    for (let i = nums.length - 1; i >= 2; i--) {
      if (nums[i - 2] + nums[i - 1] > nums[i]) {
        return nums[i - 2] + nums[i - 1] + nums[i];
      }
    }
    return 0;
  },
  // problem solver--> 168
  "mnc-add-to-array-form-of-integer": ({ num, k }: { num: string; k: any }) => {
    const arr = parseNumArray(num);
    const numK = parseNumber(k);
    const result = BigInt(arr.join("")) + BigInt(numK);
    return JSON.stringify(result.toString().split("").map(Number));
  },
  // problem solver--> 169
  "mnc-divide-two-integers": () =>
    `(Conceptual) Bit manipulation. Repeatedly subtract the divisor shifted left as many times as possible. Add the corresponding power of 2 to the result. Handle signs and edge cases.`,
  // problem solver--> 170
  "mnc-valid-number": () =>
    `(Conceptual) Very difficult. Best solved with a state machine (Finite Automaton) or a complex regular expression to handle all valid formats.`,
  // problem solver--> 171
  "mnc-permutation-sequence": () =>
    `(Conceptual) Mathematical approach. The first digit of the kth permutation can be determined by k / (n-1)!. The problem is then reduced to finding the (k % (n-1)!)th permutation of the remaining n-1 numbers.`,
  // problem solver--> 172
  "mnc-basic-calculator-iii": () =>
    `(Conceptual) Use two stacks, one for numbers and one for operators. This problem is an extension of Basic Calculator II, but you must handle the precedence of parentheses by recursively solving sub-expressions or using two passes.`,
  // problem solver--> 173
  "mnc-number-of-digit-one": () =>
    `(Conceptual) Difficult mathematical problem. Solve digit by digit, calculating how many times '1' appears in each place (ones, tens, hundreds) up to n.`,
  // problem solver--> 174
  "mnc-max-sum-of-rectangle-no-larger-than-k": () =>
    `(Conceptual) Very difficult. Reduce the 2D problem to a 1D problem: find the subarray with sum no larger than k. For each pair of rows, calculate the column sums between them. Then solve the 1D problem on that array, which can be done in O(n log n) with a sorted list.`,
  // problem solver--> 175
  "mnc-russian-peasant-multiplication": ({
    num1,
    num2,
  }: {
    num1: any;
    num2: any;
  }) => {
    let a = parseNumber(num1),
      b = parseNumber(num2),
      res = 0;
    while (a > 0) {
      if (a % 2 !== 0) res += b;
      a = Math.floor(a / 2);
      b *= 2;
    }
    return res;
  },
  // problem solver--> 176
  "mnc-babylonian-sqrt": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    if (num < 0) return "Invalid";
    let x = num;
    for (let i = 0; i < 20; i++) {
      x = 0.5 * (x + num / x);
    }
    return x;
  },
  // problem solver--> 177
  "mnc-sum-of-two-integers": ({ a, b }: { a: any; b: any }) => {
    let x = parseNumber(a),
      y = parseNumber(b);
    while (y !== 0) {
      const carry = x & y;
      x = x ^ y;
      y = carry << 1;
    }
    return x;
  },
  // problem solver--> 178
  "mnc-integer-to-english-words": () =>
    `(Conceptual) Complex. Break number into chunks of 3. Write a helper to convert a number < 1000 to words. Then combine with scale words like "Thousand", "Million". Handle edge cases like 0.`,
  // problem solver--> 179
  "mnc-perfect-rectangle": () =>
    `(Conceptual) Difficult. Calculate the total area of all small rectangles. Find the bounding box of all rectangles. If total area doesn't match bounding box area, return false. Then, use a map or set to ensure that all corner points cancel out except for the four corners of the bounding box.`,
  // problem solver--> 180
  "mnc-robot-bounded-in-circle": ({
    instructions,
  }: {
    instructions: string;
  }) => {
    let x = 0,
      y = 0,
      dir = 0; // 0:N, 1:E, 2:S, 3:W
    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (const instruction of instructions) {
      if (instruction === "L") dir = (dir + 3) % 4;
      else if (instruction === "R") dir = (dir + 1) % 4;
      else {
        x += dirs[dir][0];
        y += dirs[dir][1];
      }
    }
    return (x === 0 && y === 0) || dir !== 0;
  },
  // problem solver--> 181
  "mnc-random-pick-with-weight": () =>
    `(Conceptual) Pre-computation: create an array of prefix sums of the weights. To pick, generate a random number between 0 and the total sum. Use binary search on the prefix sum array to find the index corresponding to that random number.`,
  // problem solver--> 182
  "mnc-random-point-in-non-overlapping-rectangles": () =>
    `(Conceptual) Similar to Random Pick with Weight. Pre-compute a prefix sum array of the areas of the rectangles. Pick a random number up to the total area to select a rectangle. Then generate a random point within that chosen rectangle's bounds.`,
  // problem solver--> 183
  "mnc-check-if-it-is-a-straight-line": ({
    coordinates,
  }: {
    coordinates: string;
  }) => {
    const coords = parseJson(coordinates);
    if (coords.length <= 2) return true;
    const [x0, y0] = coords[0];
    const [x1, y1] = coords[1];
    for (let i = 2; i < coords.length; i++) {
      const [x, y] = coords[i];
      if ((y1 - y0) * (x - x0) !== (y - y0) * (x1 - x0)) return false;
    }
    return true;
  },
  // problem solver--> 184
  "mnc-reach-a-number": ({ target }: { target: any }) => {
    const t = Math.abs(parseNumber(target));
    let k = 0,
      sum = 0;
    while (sum < t) {
      k++;
      sum += k;
    }
    return (sum - t) % 2 === 0 ? k : k + 1 + (k % 2);
  },
  // problem solver--> 185
  "mnc-reordered-power-of-2": ({ N }: { N: any }) => {
    const n = parseNumber(N);
    const sortedN = String(n).split("").sort().join("");
    for (let i = 0; i < 30; i++) {
      const powerOf2 = String(1 << i);
      if (
        powerOf2.length === sortedN.length &&
        powerOf2.split("").sort().join("") === sortedN
      ) {
        return true;
      }
    }
    return false;
  },
  // problem solver--> 186
  "mnc-rectangle-overlap": ({ rec1, rec2 }: { rec1: string; rec2: string }) => {
    const [x1, y1, x2, y2] = parseNumArray(rec1);
    const [x3, y3, x4, y4] = parseNumArray(rec2);
    return !(x2 <= x3 || x4 <= x1 || y2 <= y3 || y4 <= y1);
  },
  // problem solver--> 187
  "mnc-rectangle-area-ii": () =>
    `(Conceptual) Advanced. Line sweep algorithm. Create events for the start and end y-coordinates of each rectangle. Sort these events. Sweep a vertical line across the plane, calculating the area of the strips between events.`,
  // problem solver--> 188
  "mnc-powerful-integers": ({
    x,
    y,
    bound,
  }: {
    x: any;
    y: any;
    bound: any;
  }) => {
    const numX = parseNumber(x),
      numY = parseNumber(y),
      b = parseNumber(bound);
    const result = new Set<number>();
    for (let i = 1; i < b; i *= numX) {
      for (let j = 1; i + j <= b; j *= numY) {
        result.add(i + j);
        if (numY === 1) break;
      }
      if (numX === 1) break;
    }
    return JSON.stringify([...result]);
  },
  // problem solver--> 189
  "mnc-smallest-integer-divisible-by-k": ({ k }: { k: any }) => {
    const numK = parseNumber(k);
    if (numK % 2 === 0 || numK % 5 === 0) return -1;
    let remainder = 0,
      len = 0;
    for (len = 1; len <= numK; len++) {
      remainder = (remainder * 10 + 1) % numK;
      if (remainder === 0) return len;
    }
    return -1;
  },
  // problem solver--> 190
  "mnc-numbers-with-same-consecutive-differences": ({
    n,
    k,
  }: {
    n: any;
    k: any;
  }) => {
    const len = parseNumber(n),
      diff = parseNumber(k);
    const result: number[] = [];
    const dfs = (num: number) => {
      if (String(num).length === len) {
        result.push(num);
        return;
      }
      const lastDigit = num % 10;
      if (lastDigit + diff < 10) {
        dfs(num * 10 + lastDigit + diff);
      }
      if (diff !== 0 && lastDigit - diff >= 0) {
        dfs(num * 10 + lastDigit - diff);
      }
    };
    for (let i = 1; i < 10; i++) dfs(i);
    return JSON.stringify(result);
  },
  // problem solver--> 191
  "mnc-find-and-replace-pattern": ({
    words,
    pattern,
  }: {
    words: string;
    pattern: string;
  }) =>
    `(Conceptual) Similar to Isomorphic Strings. For each word, check if it has a bijective mapping to the pattern.`,
  // problem solver--> 192
  "mnc-consecutive-numbers-sum": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    let count = 0;
    for (let k = 1; k * (k + 1) < 2 * num; k++) {
      if ((num - (k * (k - 1)) / 2) % k === 0) {
        count++;
      }
    }
    return count;
  },
  // problem solver--> 193
  "mnc-mirror-reflection": ({ p, q }: { p: any; q: any }) => {
    const numP = parseNumber(p),
      numQ = parseNumber(q);
    let m = numP,
      n = numQ;
    while (m % 2 === 0 && n % 2 === 0) {
      m /= 2;
      n /= 2;
    }
    if (m % 2 === 0 && n % 2 === 1) return 2;
    if (m % 2 === 1 && n % 2 === 1) return 1;
    return 0;
  },
  // problem solver--> 194
  "mnc-global-and-local-inversions": ({ A }: { A: string }) => {
    const arr = parseNumArray(A);
    for (let i = 0; i < arr.length; i++) {
      if (Math.abs(arr[i] - i) > 1) return false;
    }
    return true;
  },
  // problem solver--> 195
  "mnc-the-kth-factor-of-n": ({ n, k }: { n: any; k: any }) => {
    const numN = parseNumber(n),
      numK = parseNumber(k);
    let count = 0;
    for (let i = 1; i <= numN; i++) {
      if (numN % i === 0) {
        count++;
        if (count === numK) return i;
      }
    }
    return -1;
  },
  // problem solver--> 196
  "mnc-count-good-triplets": ({
    arr,
    a,
    b,
    c,
  }: {
    arr: string;
    a: any;
    b: any;
    c: any;
  }) => {
    const nums = parseNumArray(arr),
      na = parseNumber(a),
      nb = parseNumber(b),
      nc = parseNumber(c);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (
            Math.abs(nums[i] - nums[j]) <= na &&
            Math.abs(nums[j] - nums[k]) <= nb &&
            Math.abs(nums[i] - nums[k]) <= nc
          ) {
            count++;
          }
        }
      }
    }
    return count;
  },
  // problem solver--> 197
  "mnc-thousand-separator": ({ n }: { n: any }) => {
    return parseNumber(n).toLocaleString("en-US").replace(/,/g, ".");
  },
  // problem solver--> 198
  "mnc-matrix-diagonal-sum": ({ mat }: { mat: string }) => {
    const matrix = parseJson(mat);
    let sum = 0;
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
      sum += matrix[i][i];
      if (i !== n - 1 - i) {
        sum += matrix[i][n - 1 - i];
      }
    }
    return sum;
  },
  // problem solver--> 199
  "mnc-check-if-all-1s-are-at-least-length-k-places-away": ({
    nums,
    k,
  }: {
    nums: string;
    k: any;
  }) => {
    const arr = parseNumArray(nums),
      numK = parseNumber(k);
    let lastOne = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        if (lastOne !== -1 && i - lastOne - 1 < numK) {
          return false;
        }
        lastOne = i;
      }
    }
    return true;
  },
  // problem solver--> 200
  "mnc-count-odd-numbers-in-an-interval-range": ({
    low,
    high,
  }: {
    low: any;
    high: any;
  }) => {
    const l = parseNumber(low);
    const h = parseNumber(high);
    const count = Math.floor((h - l) / 2);
    if (l % 2 !== 0 || h % 2 !== 0) {
      return count + 1;
    }
    return count;
  },
};
