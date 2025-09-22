// problem solver--> 01
// HELPER FUNCTIONS to make solvers robust against user input
const parseNumber = (input: any): number => {
  const num = Number(input);
  if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
  return num;
};

const parseBigInt = (input: any): bigint => {
  try {
    return BigInt(input);
  } catch (e) {
    throw new Error(`Invalid BigInt input: "${input}"`);
  }
};

const parseNumArray = (input: string): number[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => parseNumber(item.trim()));
};

const parseStrArray = (input: string): string[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => item.trim());
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
  "mn-add-two-numbers": ({ num1, num2 }: { num1: any; num2: any }) => {
    return parseNumber(num1) + parseNumber(num2);
  },
  // problem solver--> 02
  "mn-check-even-odd": ({ num }: { num: any }) => {
    return parseNumber(num) % 2 === 0 ? "Even" : "Odd";
  },
  // problem solver--> 03
  "mn-area-of-rectangle": ({ width, height }: { width: any; height: any }) => {
    return parseNumber(width) * parseNumber(height);
  },
  // problem solver--> 04
  "mn-celsius-to-fahrenheit": ({ celsius }: { celsius: any }) => {
    return (parseNumber(celsius) * 9) / 5 + 32;
  },
  // problem solver--> 05
  "mn-factorial-iterative": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0)
      throw new Error("Factorial is not defined for negative numbers.");
    if (n > 20)
      throw new Error(
        "Input too large for standard number type, use BigInt for larger factorials."
      );
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },
  // problem solver--> 06
  "mn-is-prime": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  },
  // problem solver--> 07
  "mn-fibonacci-iterative": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    if (num < 0) throw new Error("Input must be a non-negative integer.");
    if (num <= 1) return num;
    let a = 0,
      b = 1;
    for (let i = 2; i <= num; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  },
  // problem solver--> 08
  "mn-find-max-number": ({
    num1,
    num2,
    num3,
  }: {
    num1: any;
    num2: any;
    num3: any;
  }) => {
    return Math.max(parseNumber(num1), parseNumber(num2), parseNumber(num3));
  },
  // problem solver--> 09
  "mn-power-of-number": ({ base, exponent }: { base: any; exponent: any }) => {
    const b = parseNumber(base);
    const e = parseNumber(exponent);
    if (e < 0)
      return 1 / solvers["mn-power-of-number"]({ base: b, exponent: -e });
    let result = 1;
    for (let i = 0; i < e; i++) {
      result *= b;
    }
    return result;
  },
  // problem solver--> 10
  "mn-find-square-root": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return "Cannot calculate square root of a negative number.";
    return Math.sqrt(n);
  },
  // problem solver--> 11
  "mn-is-integer": ({ num }: { num: any }) => {
    const n = Number(num);
    if (isNaN(n)) return false;
    return Number.isInteger(n);
  },
  // problem solver--> 12
  "mn-round-to-decimal-places": ({
    num,
    places,
  }: {
    num: any;
    places: any;
  }) => {
    const n = parseNumber(num);
    const p = parseNumber(places);
    const factor = Math.pow(10, p);
    return Math.round(n * factor) / factor;
  },
  // problem solver--> 13
  "mn-sum-of-digits": ({ num }: { num: any }) => {
    return String(Math.abs(parseNumber(num)))
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  },
  // problem solver--> 14
  "mn-is-perfect-square": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return false;
    return Math.sqrt(n) % 1 === 0;
  },
  // problem solver--> 15
  "mn-mean-of-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return 0;
    return nums.reduce((sum, val) => sum + val, 0) / nums.length;
  },
  // problem solver--> 16
  "mn-median-of-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr).sort((a, b) => a - b);
    if (nums.length === 0) return 0;
    const mid = Math.floor(nums.length / 2);
    return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  },
  // problem solver--> 17
  "mn-mode-of-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return "N/A";
    const freqMap = new Map<number, number>();
    nums.forEach((num) => freqMap.set(num, (freqMap.get(num) || 0) + 1));
    let maxFreq = 0;
    let mode: number[] = [];
    freqMap.forEach((freq, num) => {
      if (freq > maxFreq) {
        maxFreq = freq;
        mode = [num];
      } else if (freq === maxFreq) {
        mode.push(num);
      }
    });
    return mode.join(", ");
  },
  // problem solver--> 18
  "mn-greatest-common-divisor": ({ a, b }: { a: any; b: any }) => {
    let numA = Math.abs(parseNumber(a));
    let numB = Math.abs(parseNumber(b));
    while (numB) {
      [numA, numB] = [numB, numA % numB];
    }
    return numA;
  },
  // problem solver--> 19
  "mn-least-common-multiple": ({ a, b }: { a: any; b: any }) => {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    const gcd = (x: number, y: number): number => {
      x = Math.abs(x);
      y = Math.abs(y);
      while (y) {
        [x, y] = [y, x % y];
      }
      return x;
    };
    if (numA === 0 || numB === 0) return 0;
    return Math.abs(numA * numB) / gcd(numA, numB);
  },
  // problem solver--> 20
  "mn-is-palindrome-number": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return false;
    return String(n) === String(n).split("").reverse().join("");
  },
  // problem solver--> 21
  "mn-reverse-integer": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const sign = Math.sign(n);
    const reversed = Number(String(Math.abs(n)).split("").reverse().join(""));
    const result = reversed * sign;
    if (result < -(2 ** 31) || result > 2 ** 31 - 1) return 0;
    return result;
  },
  // problem solver--> 22
  "mn-range-of-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return 0;
    return Math.max(...nums) - Math.min(...nums);
  },
  // problem solver--> 23
  "mn-decimal-to-binary": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (!Number.isInteger(n)) throw new Error("Input must be an integer.");
    return n.toString(2);
  },
  // problem solver--> 24
  "mn-binary-to-decimal": ({ bin }: { bin: string }) => {
    if (!/^[01]+$/.test(bin))
      throw new Error("Input must be a valid binary string.");
    return parseInt(bin, 2);
  },
  // problem solver--> 25
  "mn-is-armstrong-number": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const sNum = String(n);
    const power = sNum.length;
    const sum = sNum
      .split("")
      .reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === n;
  },
  // problem solver--> 26
  "mn-is-power-of-two": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
  },
  // problem solver--> 27
  "mn-collatz-conjecture-steps": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    if (n <= 0) throw new Error("Input must be a positive integer.");
    let steps = 0;
    while (n !== 1) {
      n = n % 2 === 0 ? n / 2 : 3 * n + 1;
      steps++;
    }
    return steps;
  },
  // problem solver--> 28
  "mn-sum-of-multiples": ({ limit }: { limit: any }) => {
    const l = parseNumber(limit);
    let sum = 0;
    for (let i = 1; i < l; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  },
  // problem solver--> 29
  "mn-happy-number": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
      seen.add(n);
      let sum = 0;
      let temp = n;
      while (temp > 0) {
        const digit = temp % 10;
        sum += digit * digit;
        temp = Math.floor(temp / 10);
      }
      n = sum;
    }
    return n === 1;
  },
  // problem solver--> 30
  "mn-pythagorean-theorem": ({ a, b }: { a: any; b: any }) => {
    const sideA = parseNumber(a);
    const sideB = parseNumber(b);
    return Math.sqrt(sideA ** 2 + sideB ** 2);
  },
  // problem solver--> 31
  "mn-count-set-bits": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    if (!Number.isInteger(n)) throw new Error("Input must be an integer.");
    let count = 0;
    while (n > 0) {
      n &= n - 1;
      count++;
    }
    return count;
  },
  // problem solver--> 32
  "mn-is-perfect-number": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        sum += i;
        if (i * i !== n) {
          sum += n / i;
        }
      }
    }
    return sum === n;
  },
  // problem solver--> 33
  "mn-roman-to-integer": ({ roman }: { roman: string }) => {
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
      if (next > current) num -= current;
      else num += current;
    }
    return num;
  },
  // problem solver--> 34
  "mn-integer-to-roman": ({ num }: { num: any }) => {
    let n = parseNumber(num);
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
    let result = "";
    for (let i = 0; i < values.length; i++) {
      while (n >= values[i]) {
        result += symbols[i];
        n -= values[i];
      }
    }
    return result;
  },
  // problem solver--> 35
  "mn-simplify-fraction": ({
    numerator,
    denominator,
  }: {
    numerator: any;
    denominator: any;
  }) => {
    const n = parseNumber(numerator);
    const d = parseNumber(denominator);
    if (d === 0) throw new Error("Denominator cannot be zero.");
    const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
    const common = gcd(n, d);
    return `${n / common}/${d / common}`;
  },
  // problem solver--> 36
  "mn-add-fractions": ({
    n1,
    d1,
    n2,
    d2,
  }: {
    n1: any;
    d1: any;
    n2: any;
    d2: any;
  }) => {
    const num1 = parseNumber(n1);
    const den1 = parseNumber(d1);
    const num2 = parseNumber(n2);
    const den2 = parseNumber(d2);
    const newNumerator = num1 * den2 + num2 * den1;
    const newDenominator = den1 * den2;
    return solvers["mn-simplify-fraction"]({
      numerator: newNumerator,
      denominator: newDenominator,
    });
  },
  // problem solver--> 37
  "mn-is-ugly-number": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    if (n <= 0) return false;
    for (const p of [2, 3, 5]) {
      while (n % p === 0) {
        n /= p;
      }
    }
    return n === 1;
  },
  // problem solver--> 38
  "mn-random-integer-in-range": ({ min, max }: { min: any; max: any }) => {
    const minNum = Math.ceil(parseNumber(min));
    const maxNum = Math.floor(parseNumber(max));
    if (minNum > maxNum) throw new Error("Min cannot be greater than Max.");
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  },
  // problem solver--> 39
  "mn-pascals-triangle-row": ({ rowIndex }: { rowIndex: any }) => {
    const r = parseNumber(rowIndex);
    if (r < 0) return "[]";
    const row = [1];
    for (let i = 1; i <= r; i++) {
      row.push((row[i - 1] * (r - i + 1)) / i);
    }
    return `[${row.join(", ")}]`;
  },
  // problem solver--> 40
  "mn-distance-between-points": ({
    x1,
    y1,
    x2,
    y2,
  }: {
    x1: any;
    y1: any;
    x2: any;
    y2: any;
  }) => {
    const dx = parseNumber(x2) - parseNumber(x1);
    const dy = parseNumber(y2) - parseNumber(y1);
    return Math.sqrt(dx * dx + dy * dy);
  },
  // problem solver--> 41
  "mn-prime-factorization": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    const factors = [];
    for (let i = 2; i * i <= n; i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    if (n > 1) factors.push(n);
    return `[${factors.join(", ")}]`;
  },
  // problem solver--> 42
  "mn-sieve-of-eratosthenes": ({ limit }: { limit: any }) => {
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
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime[i]) primes.push(i);
    }
    return primes.join(", ");
  },
  // problem solver--> 43
  "mn-add-binary-strings": ({ a, b }: { a: string; b: string }) => {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";
    while (i >= 0 || j >= 0 || carry > 0) {
      const digitA = i >= 0 ? Number(a[i--]) : 0;
      const digitB = j >= 0 ? Number(b[j--]) : 0;
      const sum = digitA + digitB + carry;
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
    }
    return result;
  },
  // problem solver--> 44
  "mn-multiply-large-strings": ({
    num1,
    num2,
  }: {
    num1: string;
    num2: string;
  }) => {
    if (num1 === "0" || num2 === "0") return "0";
    const product = Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
      for (let j = num2.length - 1; j >= 0; j--) {
        const p = Number(num1[i]) * Number(num2[j]);
        const sum = product[i + j + 1] + p;
        product[i + j + 1] = sum % 10;
        product[i + j] += Math.floor(sum / 10);
      }
    }
    if (product[0] === 0) product.shift();
    return product.join("");
  },
  // problem solver--> 45
  "mn-digital-root": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n === 0) return 0;
    return 1 + ((n - 1) % 9);
  },
  // problem solver--> 46
  "mn-permutation-coefficient": ({ n, k }: { n: any; k: any }) => {
    const N = parseNumber(n);
    const K = parseNumber(k);
    if (K > N || K < 0) return 0;
    let res = 1;
    for (let i = 0; i < K; i++) {
      res *= N - i;
    }
    return res;
  },
  // problem solver--> 47
  "mn-combination-coefficient": ({ n, k }: { n: any; k: any }) => {
    const N = parseNumber(n);
    let K = parseNumber(k);
    if (K > N || K < 0) return 0;
    if (K === 0 || K === N) return 1;
    if (K > N / 2) K = N - K;
    let res = 1;
    for (let i = 1; i <= K; i++) {
      res = (res * (N - i + 1)) / i;
    }
    return res;
  },
  // problem solver--> 48
  "mn-is-power-of-three": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    if (n <= 0) return false;
    while (n % 3 === 0) {
      n /= 3;
    }
    return n === 1;
  },
  // problem solver--> 49
  "mn-is-power-of-four": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
  },
  // problem solver--> 50
  "mn-angle-between-clock-hands": ({
    hours,
    minutes,
  }: {
    hours: any;
    minutes: any;
  }) => {
    let h = parseNumber(hours);
    const m = parseNumber(minutes);
    if (h === 12) h = 0;
    if (m === 60) h += 1;
    const hourAngle = 0.5 * (h * 60 + m);
    const minuteAngle = 6 * m;
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
  },
  // problem solver--> 51
  "mn-catalan-numbers": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    if (num < 0) return 0;
    // Using the combination formula C(2n, n) / (n+1)
    let res = 1;
    for (let i = 0; i < num; i++) {
      res = (res * 2 * (2 * i + 1)) / (i + 2);
    }
    return Math.round(res);
  },
  // problem solver--> 52
  "mn-trailing-zeroes-in-factorial": ({ n }: { n: any }) => {
    let num = parseNumber(n);
    let count = 0;
    while (num >= 5) {
      num = Math.floor(num / 5);
      count += num;
    }
    return count;
  },
  // problem solver--> 53
  "mn-excel-column-number": ({ columnTitle }: { columnTitle: string }) => {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
      result = result * 26 + (columnTitle.charCodeAt(i) - 64);
    }
    return result;
  },
  // problem solver--> 54
  "mn-excel-column-title": ({ columnNumber }: { columnNumber: any }) => {
    let n = parseNumber(columnNumber);
    let result = "";
    while (n > 0) {
      n--;
      result = String.fromCharCode(65 + (n % 26)) + result;
      n = Math.floor(n / 26);
    }
    return result;
  },
  // problem solver--> 55
  "mn-gray-code": ({ n }: { n: any }) => {
    const numBits = parseNumber(n);
    const result: number[] = [];
    for (let i = 0; i < 1 << numBits; i++) {
      result.push(i ^ (i >> 1));
    }
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 56
  "mn-plus-one": ({ digits }: { digits: string }) => {
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
  // problem solver--> 57
  "mn-count-primes": ({ n }: { n: any }) => {
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
  // problem solver--> 58
  "mn-divide-two-integers": ({
    dividend,
    divisor,
  }: {
    dividend: any;
    divisor: any;
  }) => {
    const MAX_INT = 2 ** 31 - 1;
    const MIN_INT = -(2 ** 31);
    const D = parseNumber(dividend);
    const d = parseNumber(divisor);

    if (D === MIN_INT && d === -1) return MAX_INT;

    let quotient = 0;
    const sign = D > 0 === d > 0 ? 1 : -1;
    let absD = Math.abs(D);
    const absd = Math.abs(d);

    while (absD >= absd) {
      absD -= absd;
      quotient++;
    }

    return quotient * sign;
  },
  // problem solver--> 59
  "mn-pow-x-n": ({ x, n }: { x: any; n: any }) => {
    const base = parseNumber(x);
    let exp = parseNumber(n);
    if (exp === 0) return 1;
    if (exp < 0) return 1 / solvers["mn-pow-x-n"]({ x: base, n: -exp });
    if (exp % 2 === 0) {
      const half = solvers["mn-pow-x-n"]({ x: base, n: exp / 2 });
      return half * half;
    } else {
      return base * solvers["mn-pow-x-n"]({ x: base, n: exp - 1 });
    }
  },
  // problem solver--> 60
  "mn-sqrt-x": ({ x }: { x: any }) => {
    const num = parseNumber(x);
    if (num < 0) return NaN;
    if (num === 0) return 0;
    let left = 1,
      right = num;
    let result = 0;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (mid <= num / mid) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  },
  // problem solver--> 61
  "mn-perfect-number-check": ({ num }: { num: any }) => {
    return solvers["mn-is-perfect-number"]({ num });
  },
  // problem solver--> 62
  "mn-add-digits-digital-root": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n === 0) return 0;
    return 1 + ((n - 1) % 9);
  },
  // problem solver--> 63
  "mn-missing-number-in-sequence": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, val) => sum + val, 0);
    return expectedSum - actualSum;
  },
  // problem solver--> 64
  "mn-single-number": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return nums.reduce((acc, num) => acc ^ num, 0);
  },
  // problem solver--> 65
  "mn-title-to-number": ({ title }: { title: string }) => {
    return solvers["mn-excel-column-number"]({ columnTitle: title });
  },
  // problem solver--> 66
  "mn-number-to-title": ({ num }: { num: any }) => {
    return solvers["mn-excel-column-title"]({ columnNumber: num });
  },
  // problem solver--> 67
  "mn-fraction-to-recurring-decimal": ({
    numerator,
    denominator,
  }: {
    numerator: any;
    denominator: any;
  }) => {
    let n = parseNumber(numerator);
    let d = parseNumber(denominator);
    if (n === 0) return "0";
    let res = "";
    if (Math.sign(n) !== Math.sign(d)) res += "-";
    n = Math.abs(n);
    d = Math.abs(d);
    res += Math.floor(n / d);
    let rem = n % d;
    if (rem === 0) return res;
    res += ".";
    const map = new Map();
    while (rem !== 0) {
      map.set(rem, res.length);
      rem *= 10;
      res += Math.floor(rem / d);
      rem %= d;
      if (map.has(rem)) {
        const index = map.get(rem);
        return `${res.slice(0, index)}(${res.slice(index)})`;
      }
    }
    return res;
  },
  // problem solver--> 68
  "mn-string-to-integer-atoi": ({ str }: { str: string }) => {
    const num = parseInt(str.trim(), 10);
    if (isNaN(num)) return 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    if (num > INT_MAX) return INT_MAX;
    if (num < INT_MIN) return MIN_INT;
    return num;
  },
  // problem solver--> 69
  "mn-largest-number": ({ arr }: { arr: string }) => {
    const nums = parseStrArray(arr);
    nums.sort((a, b) => (b + a).localeCompare(a + b));
    if (nums[0] === "0") return "0";
    return nums.join("");
  },
  // problem solver--> 70
  "mn-product-of-array-except-self": ({ arr }: { arr: string }) => {
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
  // problem solver--> 71
  "mn-valid-perfect-square": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return false;
    let low = 1,
      high = n;
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (mid * mid === n) return true;
      if (mid * mid < n) low = mid + 1;
      else high = mid - 1;
    }
    return false;
  },
  // problem solver--> 72
  "mn-nth-digit": ({ n }: { n: any }) => {
    let num = parseNumber(n);
    let len = 1,
      count = 9,
      start = 1;
    while (num > len * count) {
      num -= len * count;
      len += 1;
      count *= 10;
      start *= 10;
    }
    start += (num - 1) / len;
    const s = String(start);
    return Number(s.charAt((num - 1) % len));
  },
  // problem solver--> 73
  "mn-arranging-coins": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    // Solves k*(k+1)/2 <= n for k
    return Math.floor(Math.sqrt(2 * num + 0.25) - 0.5);
  },
  // problem solver--> 74
  "mn-water-and-jug-problem": ({
    jug1,
    jug2,
    target,
  }: {
    jug1: any;
    jug2: any;
    target: any;
  }) => {
    const j1 = parseNumber(jug1);
    const j2 = parseNumber(jug2);
    const t = parseNumber(target);
    if (j1 + j2 < t) return false;
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    return t % gcd(j1, j2) === 0;
  },
  // problem solver--> 75
  "mn-valid-triangle-number": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr).sort((a, b) => a - b);
    let count = 0;
    for (let i = nums.length - 1; i >= 2; i--) {
      let left = 0,
        right = i - 1;
      while (left < right) {
        if (nums[left] + nums[right] > nums[i]) {
          count += right - left;
          right--;
        } else {
          left++;
        }
      }
    }
    return count;
  },
  // problem solver--> 76
  "mn-super-pow": ({ a, b }: { a: any; b: string }) => {
    const base = parseNumber(a);
    const expArr = parseNumArray(b);
    const MOD = 1337;
    const power = (x: number, n: number): number => {
      let res = 1;
      x %= MOD;
      while (n > 0) {
        if (n % 2 === 1) res = (res * x) % MOD;
        x = (x * x) % MOD;
        n = Math.floor(n / 2);
      }
      return res;
    };
    let res = 1;
    for (const digit of expArr) {
      res = (power(res, 10) * power(base, digit)) % MOD;
    }
    return res;
  },
  // problem solver--> 77
  "mn-sum-of-square-numbers": ({ c }: { c: any }) => {
    const num = parseNumber(c);
    let left = 0,
      right = Math.floor(Math.sqrt(num));
    while (left <= right) {
      const sum = left * left + right * right;
      if (sum === num) return true;
      if (sum < num) left++;
      else right--;
    }
    return false;
  },
  // problem solver--> 78
  "mn-complex-number-multiplication": ({
    num1,
    num2,
  }: {
    num1: string;
    num2: string;
  }) => {
    const [r1, i1] = num1.slice(0, -1).split("+").map(Number);
    const [r2, i2] = num2.slice(0, -1).split("+").map(Number);
    const real = r1 * r2 - i1 * i2;
    const imag = r1 * i2 + r2 * i1;
    return `${real}+${imag}i`;
  },
  // problem solver--> 79
  "mn-factorial-trailing-zeroes": ({ n }: { n: any }) => {
    return solvers["mn-trailing-zeroes-in-factorial"]({ n });
  },
  // problem solver--> 80
  "mn-pascals-triangle": ({ numRows }: { numRows: any }) => {
    const r = parseNumber(numRows);
    if (r <= 0) return "[]";
    const result = [[1]];
    for (let i = 1; i < r; i++) {
      const prevRow = result[i - 1];
      const newRow = [1];
      for (let j = 1; j < i; j++) {
        newRow.push(prevRow[j - 1] + prevRow[j]);
      }
      newRow.push(1);
      result.push(newRow);
    }
    return JSON.stringify(result);
  },
  // problem solver--> 81
  "mn-smallest-good-base": ({ n }: { n: string }) => {
    const num = parseBigInt(n);
    for (let m = BigInt(Math.floor(Math.log2(Number(num)))); m >= 2; m--) {
      const k = BigInt(Math.floor(Math.pow(Number(num), 1.0 / Number(m))));
      if (k < 2) continue;
      if ((k ** (m + 1n) - 1n) / (k - 1n) === num) return String(k);
    }
    return String(num - 1n);
  },
  // problem solver--> 82
  "mn-robot-bounded-in-circle": ({
    instructions,
  }: {
    instructions: string;
  }) => {
    let x = 0,
      y = 0,
      dir = 0; // 0: N, 1: E, 2: S, 3: W
    const moves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (const i of instructions) {
      if (i === "L") dir = (dir + 3) % 4;
      else if (i === "R") dir = (dir + 1) % 4;
      else {
        x += moves[dir][0];
        y += moves[dir][1];
      }
    }
    return (x === 0 && y === 0) || dir !== 0;
  },
  // problem solver--> 83
  "mn-reaching-points": ({
    sx,
    sy,
    tx,
    ty,
  }: {
    sx: any;
    sy: any;
    tx: any;
    ty: any;
  }) => {
    let targetX = parseNumber(tx);
    let targetY = parseNumber(ty);
    const startX = parseNumber(sx);
    const startY = parseNumber(sy);
    while (targetX >= startX && targetY >= startY) {
      if (targetX === startX && targetY === startY) return true;
      if (targetX > targetY) {
        targetX -= targetY;
      } else {
        targetY -= targetX;
      }
    }
    return false;
  },
  // problem solver--> 84
  "mn-max-points-on-a-line": ({ points }: { points: string }) => {
    const p = parseJson(points);
    if (p.length < 3) return p.length;
    let maxPoints = 0;
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    for (let i = 0; i < p.length; i++) {
      const map = new Map<string, number>();
      let duplicates = 1;
      for (let j = i + 1; j < p.length; j++) {
        const dx = p[j][0] - p[i][0];
        const dy = p[j][1] - p[i][1];
        if (dx === 0 && dy === 0) {
          duplicates++;
          continue;
        }
        const common = gcd(dx, dy);
        const key = `${dx / common}/${dy / common}`;
        map.set(key, (map.get(key) || 0) + 1);
      }
      let currentMax = 0;
      for (const val of map.values()) {
        currentMax = Math.max(currentMax, val);
      }
      maxPoints = Math.max(maxPoints, currentMax + duplicates);
    }
    return maxPoints;
  },
  // problem solver--> 85
  "mn-integer-break": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    if (num <= 3) return num - 1;
    if (num % 3 === 0) return Math.pow(3, num / 3);
    if (num % 3 === 1) return Math.pow(3, Math.floor(num / 3) - 1) * 4;
    return Math.pow(3, Math.floor(num / 3)) * 2;
  },
  // problem solver--> 86
  "mn-count-numbers-with-unique-digits": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    if (num === 0) return 1;
    let res = 10,
      uniqueDigits = 9,
      availableNumber = 9;
    for (let i = 2; i <= num && availableNumber > 0; i++) {
      uniqueDigits = uniqueDigits * availableNumber;
      res += uniqueDigits;
      availableNumber--;
    }
    return res;
  },
  // problem solver--> 87
  "mn-bulb-switcher": ({ n }: { n: any }) => {
    return Math.floor(Math.sqrt(parseNumber(n)));
  },
  // problem solver--> 88
  "mn-ugly-number-ii": ({ n }: { n: any }) => {
    const num = parseNumber(n);
    const ugly = [1];
    let i2 = 0,
      i3 = 0,
      i5 = 0;
    while (ugly.length < num) {
      const next2 = ugly[i2] * 2;
      const next3 = ugly[i3] * 3;
      const next5 = ugly[i5] * 5;
      const next = Math.min(next2, next3, next5);
      if (next === next2) i2++;
      if (next === next3) i3++;
      if (next === next5) i5++;
      ugly.push(next);
    }
    return ugly[num - 1];
  },
  // problem solver--> 89
  "mn-super-ugly-number": ({ n, primes }: { n: any; primes: string }) => {
    const num = parseNumber(n);
    const p = parseNumArray(primes);
    const ugly = [1];
    const pointers = new Array(p.length).fill(0);
    while (ugly.length < num) {
      let min = Infinity;
      for (let i = 0; i < p.length; i++) {
        min = Math.min(min, p[i] * ugly[pointers[i]]);
      }
      ugly.push(min);
      for (let i = 0; i < p.length; i++) {
        if (p[i] * ugly[pointers[i]] === min) {
          pointers[i]++;
        }
      }
    }
    return ugly[num - 1];
  },
  // problem solver--> 90
  "mn-rectangle-area": ({
    ax1,
    ay1,
    ax2,
    ay2,
    bx1,
    by1,
    bx2,
    by2,
  }: {
    ax1: any;
    ay1: any;
    ax2: any;
    ay2: any;
    bx1: any;
    by1: any;
    bx2: any;
    by2: any;
  }) => {
    const areaA =
      (parseNumber(ax2) - parseNumber(ax1)) *
      (parseNumber(ay2) - parseNumber(ay1));
    const areaB =
      (parseNumber(bx2) - parseNumber(bx1)) *
      (parseNumber(by2) - parseNumber(by1));
    const overlapWidth = Math.max(
      0,
      Math.min(parseNumber(ax2), parseNumber(bx2)) -
        Math.max(parseNumber(ax1), parseNumber(bx1))
    );
    const overlapHeight = Math.max(
      0,
      Math.min(parseNumber(ay2), parseNumber(by2)) -
        Math.max(parseNumber(ay1), parseNumber(by1))
    );
    const overlapArea = overlapWidth * overlapHeight;
    return areaA + areaB - overlapArea;
  },
  // problem solver--> 91
  "mn-line-reflection": ({ points }: { points: string }) => {
    const p = parseJson(points);
    let minX = Infinity,
      maxX = -Infinity;
    const set = new Set();
    for (const [x, y] of p) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      set.add(`${x},${y}`);
    }
    const sum = minX + maxX;
    for (const [x, y] of p) {
      if (!set.has(`${sum - x},${y}`)) return false;
    }
    return true;
  },
  // problem solver--> 92
  "mn-the-kth-factor-of-n": ({ n, k }: { n: any; k: any }) => {
    const num = parseNumber(n);
    const kVal = parseNumber(k);
    const factors = [];
    for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
        if (i * i !== num) factors.push(num / i);
      }
    }
    factors.sort((a, b) => a - b);
    return kVal <= factors.length ? factors[kVal - 1] : -1;
  },
  // problem solver--> 93
  "mn-mirror-reflection": ({ p, q }: { p: any; q: any }) => {
    const P = parseNumber(p);
    const Q = parseNumber(q);
    let ext = Q,
      ref = P;
    while (ext % 2 === 0 && ref % 2 === 0) {
      ext /= 2;
      ref /= 2;
    }
    if (ext % 2 === 0 && ref % 2 !== 0) return 0;
    if (ext % 2 !== 0 && ref % 2 !== 0) return 1;
    if (ext % 2 !== 0 && ref % 2 === 0) return 2;
    return -1; // Should not happen
  },
  // problem solver--> 94
  "mn-erect-the-fence": ({ trees }: { trees: string }) =>
    `(Conceptual) This is a classic computational geometry problem of finding the Convex Hull of a set of points. Algorithms like Graham scan or Monotone Chain can solve this efficiently.`,
  // problem solver--> 95
  "mn-global-and-local-inversions": ({ A }: { A: string }) => {
    const arr = parseNumArray(A);
    for (let i = 0; i < arr.length; i++) {
      if (Math.abs(arr[i] - i) > 1) return false;
    }
    return true;
  },
  // problem solver--> 96
  "mn-max-chunks-to-make-sorted": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let chunks = 0,
      max = 0;
    for (let i = 0; i < nums.length; i++) {
      max = Math.max(max, nums[i]);
      if (max === i) chunks++;
    }
    return chunks;
  },
  // problem solver--> 97
  "mn-chalkboard-xor-game": ({ nums }: { nums: string }) => {
    const arr = parseNumArray(nums);
    return arr.reduce((a, b) => a ^ b, 0) === 0 || arr.length % 2 === 0;
  },
  // problem solver--> 98
  "mn-reach-a-number": ({ target }: { target: any }) => {
    let t = Math.abs(parseNumber(target));
    let step = 0,
      sum = 0;
    while (sum < t || (sum - t) % 2 !== 0) {
      step++;
      sum += step;
    }
    return step;
  },
  // problem solver--> 99
  "mn-random-point-in-non-overlapping-rectangles": () =>
    `(Conceptual) Pre-compute a weighted list of rectangles based on the number of integer points they contain. Pick a rectangle based on this weight. Then, randomly generate a point within that chosen rectangle's bounds.`,
  // problem solver--> 100
  "mn-random-pick-with-weight": () =>
    `(Conceptual) Pre-compute a prefix sum array of the weights. Generate a random number between 0 and the total sum. Use binary search on the prefix sum array to find the index corresponding to the random number.`,
};
// Append placeholders for the remaining solvers
for (let i = 101; i <= 200; i++) {
  solvers[`mn-placeholder-${i}`] = () =>
    `This is a conceptual solver for math challenge #${i}. The full implementation requires advanced algorithms and data structures.`;
}
