// This file MUST be pure JavaScript. No imports, no types.

// =================================================================================================
// HELPER FUNCTIONS (Inlined to avoid module imports)
// ======================================================================================
const parseNumber_BB = (input: any) => {
  const num = typeof input === "string" ? parseFloat(input) : input;
  if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
  return num;
};

const parseBoolean_BB = (input: any) => {
  if (typeof input === "boolean") return input;
  if (typeof input === "string") {
    const lower = input.toLowerCase();
    if (lower === "true") return true;
    if (lower === "false") return false;
  }
  return !!input;
};

const parseStrArray_BB = (input: string) => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => item.trim());
};

// =================================================================================================
// SOLVER IMPLEMENTATIONS
// =================================================================================================

// FIX: Cast window to any to attach property in non-module script context.
(window as any).beginnerBasicsSolvers = {
  "say-hello": ({ name }: { name: string }) => `Hello, ${name}!`,
  "sum-two-numbers": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber_BB(num1) + parseNumber_BB(num2),
  "subtract-numbers": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber_BB(num1) - parseNumber_BB(num2),
  "simple-multiplication": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber_BB(num1) * parseNumber_BB(num2),
  "simple-division": ({ num1, num2 }: { num1: any; num2: any }) => {
    const n2 = parseNumber_BB(num2);
    if (n2 === 0) throw new Error("Division by zero is not allowed.");
    return parseNumber_BB(num1) / n2;
  },
  "find-remainder": ({ dividend, divisor }: { dividend: any; divisor: any }) =>
    parseNumber_BB(dividend) % parseNumber_BB(divisor),
  exponentiation: ({ base, exponent }: { base: any; exponent: any }) =>
    Math.pow(parseNumber_BB(base), parseNumber_BB(exponent)),
  "increment-number": ({ num }: { num: any }) => parseNumber_BB(num) + 1,
  "decrement-number": ({ num }: { num: any }) => parseNumber_BB(num) - 1,
  "string-length": ({ str }: { str: string }) => str.length,
  "get-first-character": ({ str }: { str: string }) =>
    str ? str[0] : "String is empty",
  "get-last-character": ({ str }: { str: string }) =>
    str ? str[str.length - 1] : "String is empty",
  "concatenate-strings": ({ str1, str2 }: { str1: string; str2: string }) =>
    str1 + str2,
  "number-to-string": ({ num }: { num: any }) => String(parseNumber_BB(num)),
  "string-to-number": ({ str }: { str: string }) => parseNumber_BB(str),
  "get-data-type": ({ value }: { value: string }) => {
    const num = Number(value);
    if (!isNaN(num) && value.trim() !== "") return "number";
    if (value.toLowerCase() === "true" || value.toLowerCase() === "false")
      return "boolean";
    if (value.toLowerCase() === "null") return "object (null)";
    if (value.toLowerCase() === "undefined") return "undefined";
    return typeof value;
  },
  "boolean-true-false": () => true,
  "strict-equality": ({ val1, val2 }: { val1: any; val2: any }) => {
    const n1 = !isNaN(Number(val1)) ? Number(val1) : val1;
    const n2 = !isNaN(Number(val2)) ? Number(val2) : val2;
    return `Comparing '${val1}' (${typeof n1}) and '${val2}' (${typeof n2}) with === results in: ${
      n1 === n2
    }`;
  },
  "loose-equality": ({ val1, val2 }: { val1: any; val2: any }) =>
    `Comparing '${val1}' and '${val2}' with == results in: ${val1 == val2}`,
  "is-greater-than": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber_BB(num1) > parseNumber_BB(num2),
  "logical-and": ({ age, hasLicense }: { age: any; hasLicense: any }) =>
    parseNumber_BB(age) >= 18 && parseBoolean_BB(hasLicense),
  "logical-or": ({ isAdmin, isOwner }: { isAdmin: any; isOwner: any }) =>
    parseBoolean_BB(isAdmin) || parseBoolean_BB(isOwner),
  "logical-not": ({ value }: { value: any }) => !parseBoolean_BB(value),
  "check-is-even": ({ num }: { num: any }) => parseNumber_BB(num) % 2 === 0,
  "simple-if-else": ({ age }: { age: any }) =>
    parseNumber_BB(age) >= 18 ? "Can vote" : "Cannot vote",
  "check-is-positive": ({ num }: { num: any }) => {
    const n = parseNumber_BB(num);
    if (n > 0) return "Positive";
    if (n < 0) return "Negative";
    return "Zero";
  },
  "grade-calculator": ({ score }: { score: any }) => {
    const s = parseNumber_BB(score);
    if (s > 100 || s < 0) return "Invalid score";
    if (s >= 90) return "A";
    if (s >= 80) return "B";
    if (s >= 70) return "C";
    if (s >= 60) return "D";
    return "F";
  },
  "ternary-operator-check": ({ isLoggedIn }: { isLoggedIn: any }) =>
    parseBoolean_BB(isLoggedIn) ? "Welcome, User!" : "Please log in.",
  "is-leap-year": ({ year }: { year: any }) => {
    const y = parseNumber_BB(year);
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
      return `${y} is a leap year.`;
    }
    return `${y} is not a leap year.`;
  },
  "max-of-three": ({ num1, num2, num3 }: { num1: any; num2: any; num3: any }) =>
    Math.max(parseNumber_BB(num1), parseNumber_BB(num2), parseNumber_BB(num3)),
  "switch-statement-day": ({ dayNum }: { dayNum: any }) => {
    const day = parseNumber_BB(dayNum);
    switch (day) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return "Invalid day number";
    }
  },
  "simple-for-loop": ({ num }: { num: any }) => {
    let result = "";
    const limit = parseNumber_BB(num);
    if (limit < 0) return "Number must be non-negative";
    for (let i = 0; i < limit; i++) {
      result += i + (i < limit - 1 ? "-" : "");
    }
    return result;
  },
  "for-loop-sum": ({ num }: { num: any }) => {
    let sum = 0;
    const limit = parseNumber_BB(num);
    for (let i = 1; i <= limit; i++) {
      sum += i;
    }
    return sum;
  },
  "for-loop-countdown": ({ start }: { start: any }) => {
    let result = [];
    const s = parseNumber_BB(start);
    for (let i = s; i >= 1; i--) {
      result.push(i);
    }
    return result.join(", ") + (result.length > 0 ? ", " : "") + "Blast off!";
  },
  "simple-while-loop": ({ start }: { start: any }) => {
    let i = parseNumber_BB(start);
    let result = [];
    while (i <= 10) {
      result.push(i);
      i += 2;
    }
    return result.join(", ");
  },
  "access-array-element": ({ arr, index }: { arr: string; index: any }) => {
    const array = parseStrArray_BB(arr);
    const i = parseNumber_BB(index);
    if (i < 0 || i >= array.length) {
      throw new Error("Index is out of bounds.");
    }
    return array[i];
  },
  "get-array-length": ({ arr }: { arr: string }) =>
    parseStrArray_BB(arr).length,
  "string-to-uppercase": ({ str }: { str: string }) => str.toUpperCase(),
  "string-to-lowercase": ({ str }: { str: string }) => str.toLowerCase(),
  "string-includes": ({
    mainStr,
    subStr,
  }: {
    mainStr: string;
    subStr: string;
  }) => mainStr.includes(subStr),
  "area-of-rectangle": ({ width, height }: { width: any; height: any }) =>
    parseNumber_BB(width) * parseNumber_BB(height),
  "celsius-to-fahrenheit": ({ celsius }: { celsius: any }) =>
    (parseNumber_BB(celsius) * 9) / 5 + 32,
  "fahrenheit-to-celsius": ({ fahrenheit }: { fahrenheit: any }) =>
    ((parseNumber_BB(fahrenheit) - 32) * 5) / 9,
  "check-null": ({ value }: { value: string }) => {
    if (value.toLowerCase() === "null") return true;
    // @ts-ignore
    return value === null;
  },
  "check-undefined": ({ value }: { value: string }) => {
    if (value.toLowerCase() === "undefined") return true;
    return typeof value === "undefined";
  },
  "string-repeat": ({ str, count }: { str: string; count: any }) => {
    const c = parseNumber_BB(count);
    if (c < 0) throw new Error("Count cannot be negative.");
    return str.repeat(c);
  },
  "string-slicing": ({
    str,
    start,
    end,
  }: {
    str: string;
    start: any;
    end: any;
  }) => str.slice(parseNumber_BB(start), parseNumber_BB(end)),
  "array-join": ({ arr, separator }: { arr: string; separator: string }) =>
    parseStrArray_BB(arr).join(separator),
  "find-array-average": ({ arr }: { arr: string }) => {
    const numbers = arr.split(",").map((item) => parseNumber_BB(item.trim()));
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  },
};
