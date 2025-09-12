// HELPER FUNCTIONS
const parseNumber = (input: any): number => {
  const num = Number(input);
  if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
  return num;
};

const parseBoolean = (input: any): boolean => {
  if (typeof input === "boolean") return input;
  if (typeof input === "string") {
    const lower = input.toLowerCase().trim();
    if (lower === "true") return true;
    if (lower === "false") return false;
  }
  throw new Error(`Invalid boolean input: "${input}"`);
};

const parseStrArray = (input: string): string[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => item.trim());
};

const parseNumArray = (input: string): number[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => parseNumber(item.trim()));
};

// SOLVER IMPLEMENTATIONS
export const solvers: Record<string, Function> = {
  "say-hello": ({ name }: { name: string }) => `Hello, ${name}!`,
  "sum-two-numbers": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) + parseNumber(num2),
  "subtract-numbers": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) - parseNumber(num2),
  "simple-multiplication": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) * parseNumber(num2),
  "simple-division": ({ num1, num2 }: { num1: any; num2: any }) => {
    const n2 = parseNumber(num2);
    if (n2 === 0) throw new Error("Division by zero is not allowed.");
    return parseNumber(num1) / n2;
  },
  "find-remainder": ({ dividend, divisor }: { dividend: any; divisor: any }) =>
    parseNumber(dividend) % parseNumber(divisor),
  exponentiation: ({ base, exponent }: { base: any; exponent: any }) =>
    Math.pow(parseNumber(base), parseNumber(exponent)),
  "increment-number": ({ num }: { num: any }) => parseNumber(num) + 1,
  "decrement-number": ({ num }: { num: any }) => parseNumber(num) - 1,
  "string-length": ({ str }: { str: string }) => str.length,
  "get-first-character": ({ str }: { str: string }) =>
    str ? str[0] : "String is empty",
  "get-last-character": ({ str }: { str: string }) =>
    str ? str[str.length - 1] : "String is empty",
  "concatenate-strings": ({ str1, str2 }: { str1: string; str2: string }) =>
    str1 + str2,
  "number-to-string": ({ num }: { num: any }) => String(parseNumber(num)),
  "string-to-number": ({ str }: { str: string }) => parseNumber(str),
  "get-data-type": ({ value }: { value: string }) => {
    if (!isNaN(Number(value)) && value.trim() !== "" && !/^\s*$/.test(value))
      return "number";
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
    parseNumber(num1) > parseNumber(num2),
  "logical-and": ({ age, hasLicense }: { age: any; hasLicense: any }) =>
    parseNumber(age) >= 18 && parseBoolean(hasLicense),
  "logical-or": ({ isAdmin, isOwner }: { isAdmin: any; isOwner: any }) =>
    parseBoolean(isAdmin) || parseBoolean(isOwner),
  "logical-not": ({ value }: { value: any }) => !parseBoolean(value),
  "check-is-even": ({ num }: { num: any }) => parseNumber(num) % 2 === 0,
  "simple-if-else": ({ age }: { age: any }) =>
    parseNumber(age) >= 18 ? "Can vote" : "Cannot vote",
  "check-is-positive": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n > 0) return "Positive";
    if (n < 0) return "Negative";
    return "Zero";
  },
  "grade-calculator": ({ score }: { score: any }) => {
    const s = parseNumber(score);
    if (s > 100 || s < 0) return "Invalid score";
    if (s >= 90) return "A";
    if (s >= 80) return "B";
    if (s >= 70) return "C";
    if (s >= 60) return "D";
    return "F";
  },
  "ternary-operator-check": ({ isLoggedIn }: { isLoggedIn: any }) =>
    parseBoolean(isLoggedIn) ? "Welcome, User!" : "Please log in.",
  "is-leap-year": ({ year }: { year: any }) => {
    const y = parseNumber(year);
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0)
      return `${y} is a leap year.`;
    return `${y} is not a leap year.`;
  },
  "max-of-three": ({ num1, num2, num3 }: { num1: any; num2: any; num3: any }) =>
    Math.max(parseNumber(num1), parseNumber(num2), parseNumber(num3)),
  "switch-statement-day": ({ dayNum }: { dayNum: any }) => {
    const day = parseNumber(dayNum);
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
    const limit = parseNumber(num);
    if (limit < 0) return "Number must be non-negative";
    for (let i = 0; i < limit; i++) {
      result += i + (i < limit - 1 ? "-" : "");
    }
    return result;
  },
  "for-loop-sum": ({ num }: { num: any }) => {
    let sum = 0;
    const limit = parseNumber(num);
    for (let i = 1; i <= limit; i++) {
      sum += i;
    }
    return sum;
  },
  "for-loop-countdown": ({ start }: { start: any }) => {
    let result = [];
    const s = parseNumber(start);
    for (let i = s; i >= 1; i--) {
      result.push(i);
    }
    return result.join(", ") + (result.length > 0 ? ", " : "") + "Blast off!";
  },
  "simple-while-loop": ({ start }: { start: any }) => {
    let i = parseNumber(start);
    let result = [];
    while (i <= 10) {
      result.push(i);
      i += 2;
    }
    return result.join(", ");
  },
  "access-array-element": ({ arr, index }: { arr: string; index: any }) => {
    const array = parseStrArray(arr);
    const i = parseNumber(index);
    if (i < 0 || i >= array.length) throw new Error("Index is out of bounds.");
    return array[i];
  },
  "get-array-length": ({ arr }: { arr: string }) => parseStrArray(arr).length,
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
    parseNumber(width) * parseNumber(height),
  "celsius-to-fahrenheit": ({ celsius }: { celsius: any }) =>
    (parseNumber(celsius) * 9) / 5 + 32,
  "fahrenheit-to-celsius": ({ fahrenheit }: { fahrenheit: any }) =>
    ((parseNumber(fahrenheit) - 32) * 5) / 9,
  "check-null": ({ value }: { value: string }) =>
    value.toLowerCase().trim() === "null",
  "check-undefined": ({ value }: { value: string }) =>
    value.toLowerCase().trim() === "undefined",
  "string-repeat": ({ str, count }: { str: string; count: any }) => {
    const c = parseNumber(count);
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
  }) => str.slice(parseNumber(start), parseNumber(end)),
  "array-join": ({ arr, separator }: { arr: string; separator: string }) =>
    parseStrArray(arr).join(separator),
  "find-array-average": ({ arr }: { arr: string }) => {
    const numbers = parseNumArray(arr);
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  },
  "absolute-value": ({ num }: { num: any }) => Math.abs(parseNumber(num)),
  "round-number-up": ({ num }: { num: any }) => Math.ceil(parseNumber(num)),
  "round-number-down": ({ num }: { num: any }) => Math.floor(parseNumber(num)),
  "round-to-nearest": ({ num }: { num: any }) => Math.round(parseNumber(num)),
  "random-integer-in-range": ({ min, max }: { min: any; max: any }) => {
    const minVal = Math.ceil(parseNumber(min));
    const maxVal = Math.floor(parseNumber(max));
    if (minVal > maxVal)
      throw new Error("Min value cannot be greater than max value.");
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
  },
  "string-starts-with": ({ str, subStr }: { str: string; subStr: string }) =>
    str.startsWith(subStr),
  "string-trim": ({ str }: { str: string }) => `"${str.trim()}"`,
  "string-replace-first": ({
    str,
    target,
    replacement,
  }: {
    str: string;
    target: string;
    replacement: string;
  }) => str.replace(target, replacement),
  "string-split": ({ str }: { str: string }) => JSON.stringify(str.split(" ")),
  "array-push": ({ arr, element }: { arr: string; element: any }) => {
    const array = parseNumArray(arr);
    array.push(parseNumber(element));
    return `[${array.join(", ")}]`;
  },
  "array-pop": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    if (array.length === 0) return "Popped: undefined. Array is now: []";
    const popped = array.pop();
    return `Popped: ${popped}. Array is now: [${array.join(", ")}]`;
  },
  "array-shift": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    if (array.length === 0) return "Shifted: undefined. Array is now: []";
    const shifted = array.shift();
    return `Shifted: ${shifted}. Array is now: [${array.join(", ")}]`;
  },
  "array-unshift": ({ arr, element }: { arr: string; element: any }) => {
    const array = parseNumArray(arr);
    array.unshift(parseNumber(element));
    return `[${array.join(", ")}]`;
  },
  "array-includes": ({ arr, value }: { arr: string; value: string }) => {
    const array = parseStrArray(arr);
    return array.includes(value);
  },
  "array-index-of": ({ arr, value }: { arr: string; value: string }) => {
    const array = parseStrArray(arr);
    return array.indexOf(value);
  },
  "array-slice": ({
    arr,
    start,
    end,
  }: {
    arr: string;
    start: any;
    end: any;
  }) => {
    const array = parseStrArray(arr);
    const newArray = array.slice(parseNumber(start), parseNumber(end));
    return `[${newArray.join(", ")}]`;
  },
  "do-while-loop": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    let result = [];
    do {
      result.push(n);
      n--;
    } while (n > 0);
    return result.join(", ");
  },
  "for-of-loop-array": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    let result = "";
    for (const item of array) {
      result += item + " ";
    }
    return result.trim();
  },
  "is-nan-check": ({ value }: { value: string }) => {
    return isNaN(Number(value));
  },
  "check-truthy": ({ value }: { value: string }) => {
    const falsyStrings = ["false", "null", "0", "", "undefined", "nan"];
    if (falsyStrings.includes(value.toLowerCase().trim())) {
      return `The string "${value}" represents a falsy value.`;
    }
    return `The string "${value}" is truthy.`;
  },
  "get-square-root": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return "Cannot calculate square root of a negative number.";
    return Math.sqrt(n);
  },
  "get-current-year": () => new Date().getFullYear(),
  "template-literal-expression": ({ a, b }: { a: any; b: any }) => {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    return `The sum of ${numA} and ${numB} is ${numA + numB}.`;
  },
  "char-at-index": ({ str, index }: { str: string; index: any }) => {
    const i = parseNumber(index);
    if (i < 0 || i >= str.length) throw new Error("Index is out of bounds.");
    return str.charAt(i);
  },
  "create-object": () => {
    const book = { title: "The Hobbit", author: "J.R.R. Tolkien" };
    return JSON.stringify(book);
  },
  "access-object-property": () => {
    const person = { name: "John", age: 30 };
    return person.age;
  },
  "modify-object-property": ({ price }: { price: any }) => {
    const product = { name: "Laptop", price: 999.99 };
    product.price = parseNumber(price);
    return `Updated product: ${JSON.stringify(product)}`;
  },
  "add-object-property": () => {
    const product: { name: string; inStock?: boolean } = { name: "Mouse" };
    product.inStock = true;
    return `Updated product: ${JSON.stringify(product)}`;
  },
  "nested-if-statement": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n > 0) {
      if (n % 2 === 0) {
        return `${n} is a positive even number.`;
      } else {
        return `${n} is a positive odd number.`;
      }
    } else {
      return `${n} is not a positive number.`;
    }
  },
  "switch-with-fallthrough": ({ day }: { day: string }) => {
    switch (day.toLowerCase().trim()) {
      case "saturday":
      case "sunday":
        return "It's the weekend!";
      default:
        return "It's a weekday.";
    }
  },
  "string-to-integer": ({ str }: { str: string }) => parseInt(str, 10),
  "for-loop-break": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let found = "Not found";
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 3) {
        found = `Found ${nums[i]} at index ${i}.`;
        break;
      }
    }
    return found;
  },
  "for-loop-continue": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        continue;
      }
      sum += nums[i];
    }
    return `Sum of odd numbers is ${sum}.`;
  },
  "array-concat": ({ arr1, arr2 }: { arr1: string; arr2: string }) => {
    const array1 = parseStrArray(arr1);
    const array2 = parseStrArray(arr2);
    const newArray = array1.concat(array2);
    return `[${newArray.join(", ")}]`;
  },
  "string-last-index-of": ({ str, subStr }: { str: string; subStr: string }) =>
    str.lastIndexOf(subStr),
  "number-to-fixed": ({ num, decimals }: { num: any; decimals: any }) => {
    const n = parseNumber(num);
    const d = parseNumber(decimals);
    return n.toFixed(d);
  },
  "for-in-loop-object": () => {
    const person = { name: "Alice", age: 28 };
    let result = "";
    for (const key in person) {
      result += `${key}: ${person[key as keyof typeof person]} | `;
    }
    return result.slice(0, -3);
  },
  "create-array": () => {
    const colors = ["red", "green", "blue"];
    return `[${colors.join(", ")}]`;
  },
  "array-reverse": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    array.reverse(); // in-place
    return `[${array.join(", ")}]`;
  },
  "simple-type-coercion": () => {
    const result = 5 + "5";
    return `The result of 5 + "5" is "${result}" (a string).`;
  },
};
