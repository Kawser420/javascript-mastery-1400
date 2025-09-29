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

const parseJson = (input: string): any => {
  try {
    if (/^(\[.*\]|\{.*\})$/.test(input.trim())) {
      // A slightly safer eval for object-like structures
      return new Function(`return ${input}`)();
    }
    return JSON.parse(input);
  } catch (e) {
    throw new Error("Invalid JSON/Array/Object format.");
  }
};

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "say-hello": ({ name }: { name: string }) => `Hello, ${name}!`,
  // problem solver--> 02
  "simple-addition": ({ num1, num2 }: { num1: any; num2: any }) => {
    return parseNumber(num1) + parseNumber(num2);
  },
  // problem solver--> 03
  "declare-variable-let": () => {
    let message = "JavaScript is fun";
    return message;
  },
  // problem solver--> 04
  "declare-constant-const": () => {
    const DAYS_IN_WEEK = 7;
    return DAYS_IN_WEEK;
  },
  // problem solver--> 05
  "simple-subtraction": ({ num1, num2 }: { num1: any; num2: any }) => {
    return parseNumber(num1) - parseNumber(num2);
  },
  // problem solver--> 06
  "simple-multiplication": ({ num1, num2 }: { num1: any; num2: any }) => {
    return parseNumber(num1) * parseNumber(num2);
  },
  // problem solver--> 07
  "simple-division": ({
    dividend,
    divisor,
  }: {
    dividend: any;
    divisor: any;
  }) => {
    const d = parseNumber(divisor);
    if (d === 0) return "Error: Division by zero.";
    return parseNumber(dividend) / d;
  },
  // problem solver--> 08
  "find-remainder-modulo": ({
    dividend,
    divisor,
  }: {
    dividend: any;
    divisor: any;
  }) => {
    return parseNumber(dividend) % parseNumber(divisor);
  },
  // problem solver--> 09
  "exponentiation-operator": ({
    base,
    exponent,
  }: {
    base: any;
    exponent: any;
  }) => {
    return parseNumber(base) ** parseNumber(exponent);
  },
  // problem solver--> 10
  "increment-a-number": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    return ++n;
  },
  // problem solver--> 11
  "decrement-a-number": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    return --n;
  },
  // problem solver--> 12
  "string-length": ({ str }: { str: string }) => {
    return str.length;
  },
  // problem solver--> 13
  "get-first-character": ({ str }: { str: string }) => {
    return str ? str[0] : "String is empty";
  },
  // problem solver--> 14
  "get-last-character": ({ str }: { str: string }) => {
    return str ? str[str.length - 1] : "String is empty";
  },
  // problem solver--> 15
  "concatenate-strings": ({ str1, str2 }: { str1: string; str2: string }) => {
    return str1 + str2;
  },
  // problem solver--> 16
  "template-literals": ({ name }: { name: string }) => {
    return `Hello, ${name}!`;
  },
  // problem solver--> 17
  "typeof-string": () => {
    return `typeof 'hello' is: "${typeof "hello"}"`;
  },
  // problem solver--> 18
  "typeof-number": () => {
    return `typeof 42 is: "${typeof 42}"`;
  },
  // problem solver--> 19
  "typeof-boolean": () => {
    return `typeof true is: "${typeof true}"`;
  },
  // problem solver--> 20
  "number-to-string": ({ num }: { num: any }) => {
    const s = String(parseNumber(num));
    return `Value: ${s}, Type: ${typeof s}`;
  },
  // problem solver--> 21
  "string-to-number": ({ str }: { str: string }) => {
    const n = parseNumber(str);
    return `Value: ${n}, Type: ${typeof n}`;
  },
  // problem solver--> 22
  "string-to-integer": ({ str }: { str: string }) => {
    return parseInt(str, 10);
  },
  // problem solver--> 23
  "string-to-float": ({ str }: { str: string }) => {
    return parseFloat(str);
  },
  // problem solver--> 24
  "boolean-true": () => {
    return true;
  },
  // problem solver--> 25
  "boolean-false": () => {
    return false;
  },
  // problem solver--> 26
  "strict-equality": ({ val1, val2 }: { val1: any; val2: any }) => {
    const num2 = Number(val2);
    if (!isNaN(num2) && val2.trim() !== "") {
      return `Result of '${val1}' === ${num2}: ${val1 === num2}`;
    }
    return `Result of '${val1}' === '${val2}': ${val1 === val2}`;
  },
  // problem solver--> 27
  "loose-equality": ({ val1, val2 }: { val1: any; val2: any }) => {
    return `Result of '${val1}' == '${val2}': ${val1 == val2}`;
  },
  // problem solver--> 28
  "strict-inequality": ({ val1, val2 }: { val1: any; val2: any }) => {
    const num2 = Number(val2);
    if (!isNaN(num2) && val2.trim() !== "") {
      return `Result of '${val1}' !== ${num2}: ${val1 !== num2}`;
    }
    return `Result of '${val1}' !== '${val2}': ${val1 !== val2}`;
  },
  // problem solver--> 29
  "is-greater-than": ({ num1, num2 }: { num1: any; num2: any }) => {
    return parseNumber(num1) > parseNumber(num2);
  },
  // problem solver--> 30
  "is-less-than": ({ num1, num2 }: { num1: any; num2: any }) => {
    return parseNumber(num1) < parseNumber(num2);
  },
  // problem solver--> 31
  "is-greater-or-equal": ({ num1, num2 }: { num1: any; num2: any }) => {
    return parseNumber(num1) >= parseNumber(num2);
  },
  // problem solver--> 32
  "is-less-or-equal": ({ num1, num2 }: { num1: any; num2: any }) => {
    return parseNumber(num1) <= parseNumber(num2);
  },
  // problem solver--> 33
  "logical-and": ({ age, hasLicense }: { age: any; hasLicense: any }) => {
    return parseNumber(age) >= 18 && parseBoolean(hasLicense);
  },
  // problem solver--> 34
  "logical-or": ({ role }: { role: string }) => {
    const r = role.toLowerCase();
    return r === "admin" || r === "manager";
  },
  // problem solver--> 35
  "logical-not": ({ bool }: { bool: any }) => {
    return !parseBoolean(bool);
  },
  // problem solver--> 36
  "simple-if-statement": ({ password }: { password: string }) => {
    if (password === "secret123") {
      return "Access Granted";
    }
  },
  // problem solver--> 37
  "simple-if-else": ({ age }: { age: any }) => {
    if (parseNumber(age) >= 18) {
      return "Adult";
    } else {
      return "Minor";
    }
  },
  // problem solver--> 38
  "check-is-even": ({ num }: { num: any }) => {
    return parseNumber(num) % 2 === 0;
  },
  // problem solver--> 39
  "check-is-positive": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n > 0) return "Positive";
    else if (n < 0) return "Negative";
    else return "Zero";
  },
  // problem solver--> 40
  "ternary-operator-check": ({ isLoggedIn }: { isLoggedIn: any }) => {
    return parseBoolean(isLoggedIn) ? "Welcome, User!" : "Please log in.";
  },
  // problem solver--> 41
  "simple-switch-statement": ({ level }: { level: string }) => {
    switch (level.toLowerCase()) {
      case "free":
        return "Free features available.";
      case "pro":
        return "Pro features unlocked!";
      case "vip":
        return "VIP access granted!";
      default:
        return "Unknown subscription level.";
    }
  },
  // problem solver--> 42
  "simple-for-loop": () => {
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += i + " ";
    }
    return result.trim();
  },
  // problem solver--> 43
  "for-loop-sum": ({ num }: { num: any }) => {
    let sum = 0;
    const limit = parseNumber(num);
    for (let i = 1; i <= limit; i++) {
      sum += i;
    }
    return sum;
  },
  // problem solver--> 44
  "for-loop-countdown": ({ start }: { start: any }) => {
    let result = "";
    const s = parseNumber(start);
    for (let i = s; i >= 1; i--) {
      result += i + "...";
    }
    return result + "Blast off!";
  },
  // problem solver--> 45
  "simple-while-loop": () => {
    let i = 1;
    let result = "";
    while (i <= 5) {
      result += i + " ";
      i++;
    }
    return result.trim();
  },
  // problem solver--> 46
  "create-simple-function": () => {
    function getGreeting() {
      return "Hello, function!";
    }
    return getGreeting();
  },
  // problem solver--> 47
  "function-with-one-parameter": ({ num }: { num: any }) => {
    function square(n: number) {
      return n * n;
    }
    return square(parseNumber(num));
  },
  // problem solver--> 48
  "function-expression": ({ num1, num2 }: { num1: any; num2: any }) => {
    const multiply = function (a: number, b: number) {
      return a * b;
    };
    return multiply(parseNumber(num1), parseNumber(num2));
  },
  // problem solver--> 49
  "arrow-function-syntax": ({ num }: { num: any }) => {
    const double = (n: number) => n * 2;
    return double(parseNumber(num));
  },
  // problem solver--> 50
  "function-return-boolean": ({ age }: { age: any }) => {
    function isAdult(a: number) {
      return a >= 18;
    }
    return isAdult(parseNumber(age));
  },
  // problem solver--> 51
  "create-empty-array": () => {
    const myArray: any[] = [];
    return `Created an empty array. Length is ${myArray.length}.`;
  },
  // problem solver--> 52
  "create-array-with-elements": () => {
    const myArray = [1, 2, 3];
    return `[${myArray.join(", ")}]`;
  },
  // problem solver--> 53
  "get-array-length": ({ arr }: { arr: string }) => {
    return parseStrArray(arr).length;
  },
  // problem solver--> 54
  "access-first-array-element": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    return array.length > 0 ? array[0] : "Array is empty";
  },
  // problem solver--> 55
  "access-last-array-element": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    return array.length > 0 ? array[array.length - 1] : "Array is empty";
  },
  // problem solver--> 56
  "modify-array-element": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    if (array.length > 1) {
      array[1] = "new value";
    }
    return `[${array.join(", ")}]`;
  },
  // problem solver--> 57
  "array-push": ({ arr, element }: { arr: string; element: any }) => {
    const array = parseStrArray(arr);
    array.push(String(element));
    return `[${array.join(", ")}]`;
  },
  // problem solver--> 58
  "array-pop": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    array.pop();
    return `[${array.join(", ")}]`;
  },
  // problem solver--> 59
  "create-simple-object": () => {
    const car = {
      make: "Toyota",
      model: "Camry",
    };
    return JSON.stringify(car);
  },
  // problem solver--> 60
  "access-object-property-dot": () => {
    const book = { title: "The Hobbit", author: "J.R.R. Tolkien" };
    return book.title;
  },
  // problem solver--> 61
  "access-object-property-bracket": () => {
    const book = { title: "The Hobbit", author: "J.R.R. Tolkien" };
    return book["author"];
  },
  // problem solver--> 62
  "modify-object-property": () => {
    const person = { name: "Alex", age: 30 };
    person.age = 31;
    return JSON.stringify(person);
  },
  // problem solver--> 63
  "add-object-property": () => {
    const product: { name: string; inStock?: boolean } = { name: "Keyboard" };
    product.inStock = true;
    return JSON.stringify(product);
  },
  // problem solver--> 64
  "string-to-uppercase": ({ str }: { str: string }) => {
    return str.toUpperCase();
  },
  // problem solver--> 65
  "string-to-lowercase": ({ str }: { str: string }) => {
    return str.toLowerCase();
  },
  // problem solver--> 66
  "string-includes": ({
    mainStr,
    subStr,
  }: {
    mainStr: string;
    subStr: string;
  }) => {
    return mainStr.includes(subStr);
  },
  // problem solver--> 67
  "string-slice": ({
    str,
    start,
    end,
  }: {
    str: string;
    start: any;
    end: any;
  }) => {
    return str.slice(parseNumber(start), parseNumber(end));
  },
  // problem solver--> 68
  "string-trim": ({ str }: { str: string }) => {
    return `"${str.trim()}"`;
  },
  // problem solver--> 69
  "for-loop-over-array": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i] + " ";
    }
    return result.trim();
  },
  // problem solver--> 70
  "area-of-rectangle": ({ width, height }: { width: any; height: any }) => {
    return parseNumber(width) * parseNumber(height);
  },
  // problem solver--> 71
  "celsius-to-fahrenheit": ({ celsius }: { celsius: any }) => {
    return (parseNumber(celsius) * 9) / 5 + 32;
  },
  // problem solver--> 72
  "check-undefined": () => {
    let x;
    return `Value of x is: ${x}`;
  },
  // problem solver--> 73
  "check-null": () => {
    const x = null;
    return `Value of x is: ${x}, typeof x is: ${typeof x}`;
  },
  // problem solver--> 74
  "string-repeat": ({ str, count }: { str: string; count: any }) => {
    return str.repeat(parseNumber(count));
  },
  // problem solver--> 75
  "array-join": ({ arr, separator }: { arr: string; separator: string }) => {
    return parseStrArray(arr).join(separator);
  },
  // problem solver--> 76
  "find-array-average": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    if (array.length === 0) return 0;
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
  },
  // problem solver--> 77
  "absolute-value": ({ num }: { num: any }) => {
    return Math.abs(parseNumber(num));
  },
  // problem solver--> 78
  "round-number-up": ({ num }: { num: any }) => {
    return Math.ceil(parseNumber(num));
  },
  // problem solver--> 79
  "round-number-down": ({ num }: { num: any }) => {
    return Math.floor(parseNumber(num));
  },
  // problem solver--> 80
  "round-to-nearest": ({ num }: { num: any }) => {
    return Math.round(parseNumber(num));
  },
  // problem solver--> 81
  "random-number": () => {
    return Math.random();
  },
  // problem solver--> 82
  "random-integer-in-range": ({ min, max }: { min: any; max: any }) => {
    const minNum = Math.ceil(parseNumber(min));
    const maxNum = Math.floor(parseNumber(max));
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  },
  // problem solver--> 83
  "string-starts-with": ({ str, subStr }: { str: string; subStr: string }) => {
    return str.startsWith(subStr);
  },
  // problem solver--> 84
  "string-ends-with": ({ str, subStr }: { str: string; subStr: string }) => {
    return str.endsWith(subStr);
  },
  // problem solver--> 85
  "string-replace-first": ({
    str,
    target,
    replacement,
  }: {
    str: string;
    target: string;
    replacement: string;
  }) => {
    return str.replace(target, replacement);
  },
  // problem solver--> 86
  "string-split": ({ str }: { str: string }) => {
    return JSON.stringify(str.split(" "));
  },
  // problem solver--> 87
  "array-shift": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    array.shift();
    return `[${array.join(", ")}]`;
  },
  // problem solver--> 88
  "array-unshift": ({ arr, element }: { arr: string; element: any }) => {
    const array = parseStrArray(arr);
    array.unshift(String(element));
    return `[${array.join(", ")}]`;
  },
  // problem solver--> 89
  "array-includes": ({ arr, value }: { arr: string; value: string }) => {
    return parseStrArray(arr).includes(value);
  },
  // problem solver--> 90
  "array-index-of": ({ arr, value }: { arr: string; value: string }) => {
    return parseStrArray(arr).indexOf(value);
  },
  // problem solver--> 91
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
    return `[${array.slice(parseNumber(start), parseNumber(end)).join(", ")}]`;
  },
  // problem solver--> 92
  "for-of-loop-array": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    let result = "";
    for (const item of array) {
      result += item + " ";
    }
    return result.trim();
  },
  // problem solver--> 93
  "is-nan-check": ({ value }: { value: string }) => {
    const num = Number(value);
    return `Is the value NaN? ${Number.isNaN(num)}`;
  },
  // problem solver--> 94
  "check-truthy": ({ value }: { value: any }) => {
    if (value.toLowerCase() === "false" || value === "0" || value === "")
      return false;
    return !!value;
  },
  // problem solver--> 95
  "check-falsy": ({ value }: { value: any }) => {
    if (value.toLowerCase() === "false" || value === "0" || value === "")
      return true;
    return !value;
  },
  // problem solver--> 96
  "get-square-root": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return "Cannot get square root of a negative number.";
    return Math.sqrt(n);
  },
  // problem solver--> 97
  "get-current-year": () => {
    return new Date().getFullYear();
  },
  // problem solver--> 98
  "template-literal-expression": ({ a, b }: { a: any; b: any }) => {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    return `The sum of ${numA} and ${numB} is ${numA + numB}.`;
  },
  // problem solver--> 99
  "char-at-index": ({ str, index }: { str: string; index: any }) => {
    return str.charAt(parseNumber(index));
  },
  // problem solver--> 100
  "nested-object": () => {
    const person = {
      name: "John Doe",
      address: {
        street: "123 Main St",
        city: "Anytown",
      },
    };
    return JSON.stringify(person, null, 2);
  },
  // problem solver--> 101
  "access-nested-object-property": () => {
    const person = {
      name: "John Doe",
      address: {
        street: "123 Main St",
        city: "Anytown",
      },
    };
    return person.address.city;
  },
  // problem solver--> 102
  "nested-if-statement": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n > 0) {
      if (n % 2 === 0) {
        return "Positive and Even";
      } else {
        return "Positive and Odd";
      }
    }
    return "Not positive";
  },
  // problem solver--> 103
  "switch-with-fallthrough": ({ day }: { day: string }) => {
    switch (day.toLowerCase()) {
      case "saturday":
      case "sunday":
        return "It's the weekend!";
      default:
        return "It's a weekday.";
    }
  },
  // problem solver--> 104
  "for-loop-break": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 5) {
        return `Found ${array[i]} at index ${i} and stopped.`;
      }
    }
    return "No number greater than 5 found.";
  },
  // problem solver--> 105
  "for-loop-continue": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        continue;
      }
      sum += array[i];
    }
    return `Sum of positive numbers: ${sum}`;
  },
  // problem solver--> 106
  "array-concat": ({ arr1, arr2 }: { arr1: string; arr2: string }) => {
    const a1 = parseStrArray(arr1);
    const a2 = parseStrArray(arr2);
    return `[${a1.concat(a2).join(", ")}]`;
  },
  // problem solver--> 107
  "string-last-index-of": ({
    str,
    subStr,
  }: {
    str: string;
    subStr: string;
  }) => {
    return str.lastIndexOf(subStr);
  },
  // problem solver--> 108
  "number-to-fixed": ({ num, decimals }: { num: any; decimals: any }) => {
    return parseNumber(num).toFixed(parseNumber(decimals));
  },
  // problem solver--> 109
  "for-in-loop-object": () => {
    const person = { name: "Alice", age: 28 };
    let result = "";
    for (const key in person) {
      result += `${key}: ${person[key as keyof typeof person]} | `;
    }
    return result.trim();
  },
  // problem solver--> 110
  "array-reverse": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    array.reverse(); // in-place
    return `[${array.join(", ")}]`;
  },
  // problem solver--> 111
  "simple-type-coercion": () => {
    const result = 5 + "5";
    return `The result of 5 + '5' is "${result}" (a string).`;
  },
  // problem solver--> 112
  "typeof-null-bug": () => {
    return `typeof null is "${typeof null}". This is a famous, long-standing bug in JavaScript.`;
  },
  // problem solver--> 113
  "get-object-keys": () => {
    const obj = { a: 1, b: 2, c: 3 };
    return JSON.stringify(Object.keys(obj));
  },
  // problem solver--> 114
  "get-object-values": () => {
    const obj = { a: 1, b: 2, c: 3 };
    return JSON.stringify(Object.values(obj));
  },
  // problem solver--> 115
  "check-property-exists": () => {
    const obj = { a: 1 };
    return `'a' in obj: ${"a" in obj}, 'b' in obj: ${"b" in obj}`;
  },
  // problem solver--> 116
  "delete-object-property": () => {
    const obj = { a: 1, b: 2 };
    delete obj.b;
    return JSON.stringify(obj);
  },
  // problem solver--> 117
  "array-from-string": ({ str }: { str: string }) => {
    return JSON.stringify(Array.from(str));
  },
  // problem solver--> 118
  "array-find": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    return array.find((n) => n > 10) ?? "Not found";
  },
  // problem solver--> 119
  "array-findIndex": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    return array.findIndex((n) => n > 10);
  },
  // problem solver--> 120
  "array-every": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    return array.every((n) => n > 0);
  },
  // problem solver--> 121
  "array-some": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    return array.some((n) => n < 0);
  },
  // problem solver--> 122
  "string-replaceAll": ({
    str,
    target,
    replacement,
  }: {
    str: string;
    target: string;
    replacement: string;
  }) => {
    if (typeof str.replaceAll === "function") {
      return str.replaceAll(target, replacement);
    }
    return "`.replaceAll()` is not supported in this environment. It's a modern JS feature.";
  },
  // problem solver--> 123
  "do-while-loop": () => {
    let i = 5;
    let result = "";
    do {
      result += i + " ";
      i++;
    } while (i < 5);
    return `Loop ran once. Result: ${result.trim()}`;
  },
  // problem solver--> 124
  "fahrenheit-to-celsius": ({ fahrenheit }: { fahrenheit: any }) => {
    return ((parseNumber(fahrenheit) - 32) * 5) / 9;
  },
  // problem solver--> 125
  "get-max-of-two": ({ num1, num2 }: { num1: any; num2: any }) => {
    return Math.max(parseNumber(num1), parseNumber(num2));
  },
  // problem solver--> 126
  "get-min-of-two": ({ num1, num2 }: { num1: any; num2: any }) => {
    return Math.min(parseNumber(num1), parseNumber(num2));
  },
  // problem solver--> 127
  "object-with-method": () => {
    const greeter = {
      greeting: "Hello",
      greet: function (name: string) {
        return `${this.greeting}, ${name}!`;
      },
    };
    return greeter.greet("Method");
  },
  // problem solver--> 128
  "array-sort-numbers": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    array.sort((a, b) => a - b);
    return `[${array.join(", ")}]`;
  },
  // problem solver--> 129
  "array-sort-strings": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    array.sort();
    return `[${array.join(", ")}]`;
  },
  // problem solver--> 130
  "find-max-in-array": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    if (array.length === 0) return "Array is empty";
    return Math.max(...array);
  },
  // problem solver--> 131
  "find-min-in-array": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    if (array.length === 0) return "Array is empty";
    return Math.min(...array);
  },
  // problem solver--> 132
  "string-trimStart": ({ str }: { str: string }) => {
    return `"${str.trimStart()}"`;
  },
  // problem solver--> 133
  "string-trimEnd": ({ str }: { str: string }) => {
    return `"${str.trimEnd()}"`;
  },
  // problem solver--> 134
  "array-forEach-loop": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    let result = "";
    array.forEach((item) => {
      result += `Item: ${item}; `;
    });
    return result.trim();
  },
  // problem solver--> 135
  "object-destructuring-basic": () => {
    const person = { name: "Jane", age: 30 };
    const { name, age } = person;
    return `Name: ${name}, Age: ${age}`;
  },
  // problem solver--> 136
  "array-destructuring-basic": () => {
    const numbers = [10, 20, 30];
    const [first, second] = numbers;
    return `First: ${first}, Second: ${second}`;
  },
  // problem solver--> 137
  "spread-syntax-in-arrays": () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const combined = [...arr1, ...arr2];
    return `Combined array: [${combined.join(", ")}]`;
  },
  // problem solver--> 138
  "spread-syntax-in-objects": () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const combined = { ...obj1, ...obj2 };
    return `Combined object: ${JSON.stringify(combined)}`;
  },
  // problem solver--> 139
  "function-with-default-params": ({ name }: { name: string }) => {
    function greet(userName = "Guest") {
      return `Hello, ${userName}!`;
    }
    return greet(name || undefined);
  },
  // problem solver--> 140
  fizzbuzz: ({ num }: { num: any }) => {
    const n = parseNumber(num);
    let result = "";
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        result += "FizzBuzz, ";
      } else if (i % 3 === 0) {
        result += "Fizz, ";
      } else if (i % 5 === 0) {
        result += "Buzz, ";
      } else {
        result += i + ", ";
      }
    }
    return result.slice(0, -2);
  },
  // problem solver--> 141
  "count-string-characters": ({ str, char }: { str: string; char: string }) => {
    if (char.length !== 1)
      throw new Error("Character to count must be a single character.");
    return str.split(char).length - 1;
  },
  // problem solver--> 142
  "check-if-array": ({ value }: { value: string }) => {
    try {
      const parsedValue = parseJson(value);
      return Array.isArray(parsedValue);
    } catch (e) {
      return Array.isArray(value);
    }
  },
  // problem solver--> 143
  "remove-first-element-array": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    const first = array.shift();
    return `Removed: ${first}. Remaining: [${array.join(", ")}]`;
  },
  // problem solver--> 144
  "add-first-element-array": ({
    arr,
    element,
  }: {
    arr: string;
    element: string;
  }) => {
    const array = parseStrArray(arr);
    array.unshift(element);
    return `New array: [${array.join(", ")}]`;
  },
  // problem solver--> 145
  "array-copy-with-slice": () => {
    const original = [1, 2, 3];
    const copy = original.slice();
    copy.push(4);
    return `Original: [${original.join(", ")}], Copy: [${copy.join(", ")}]`;
  },
  // problem solver--> 146
  "array-copy-with-spread": () => {
    const original = [1, 2, 3];
    const copy = [...original];
    copy.push(4);
    return `Original: [${original.join(", ")}], Copy: [${copy.join(", ")}]`;
  },
  // problem solver--> 147
  "object-destructuring-with-defaults": () => {
    const settings: { theme: string; fontSize?: number } = { theme: "dark" };
    const { theme, fontSize = 16 } = settings;
    return `Theme: ${theme}, Font Size: ${fontSize} (from default)`;
  },
  // problem solver--> 148
  "power-of-number": ({ base, exponent }: { base: any; exponent: any }) => {
    return Math.pow(parseNumber(base), parseNumber(exponent));
  },
  // problem solver--> 149
  "ternary-operator-is-adult": ({ age }: { age: any }) => {
    const status = parseNumber(age) >= 18 ? "Adult" : "Minor";
    return `Status: ${status}`;
  },
  // problem solver--> 150
  "check-object-emptiness": ({ obj }: { obj: string }) => {
    const parsedObj = parseJson(obj);
    if (typeof parsedObj !== "object" || parsedObj === null) {
      return "Input is not a valid object.";
    }
    return Object.keys(parsedObj).length === 0;
  },
  // problem solver--> 151
  "find-longest-word": ({ sentence }: { sentence: string }) => {
    return sentence
      .split(" ")
      .reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        ""
      );
  },
  // problem solver--> 152
  "remove-duplicates-from-array": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    return `[${[...new Set(array)].join(", ")}]`;
  },
  // problem solver--> 153
  "is-palindrome": ({ str }: { str: string }) => {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
  },
  // problem solver--> 154
  "title-case-sentence": ({ sentence }: { sentence: string }) => {
    return sentence
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  // problem solver--> 155
  "array-intersection": ({ arr1, arr2 }: { arr1: string; arr2: string }) => {
    const set1 = new Set(parseStrArray(arr1));
    const array2 = parseStrArray(arr2);
    const intersection = array2.filter((item) => set1.has(item));
    return `[${intersection.join(", ")}]`;
  },
  // problem solver--> 156
  "falsy-bouncer": ({ arr }: { arr: string }) => {
    const array = parseJson(arr);
    return JSON.stringify(array.filter(Boolean));
  },
  // problem solver--> 157
  "array-rotation": ({ arr, positions }: { arr: string; positions: any }) => {
    const array = parseStrArray(arr);
    const p = parseNumber(positions) % array.length;
    const rotated = array.slice(p).concat(array.slice(0, p));
    return `[${rotated.join(", ")}]`;
  },
  // problem solver--> 158
  "anagram-check": ({ str1, str2 }: { str1: string; str2: string }) => {
    const clean = (s: string) =>
      s.toLowerCase().replace(/[\W_]/g, "").split("").sort().join("");
    return clean(str1) === clean(str2);
  },
  // problem solver--> 159
  "sum-all-in-range": ({ arr }: { arr: string }) => {
    const [a, b] = parseNumArray(arr);
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  },
  // problem solver--> 160
  "caesars-cipher": ({ str }: { str: string }) => {
    return str.replace(/[A-Z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65)
    );
  },
  // problem solver--> 161
  "max-char": ({ str }: { str: string }) => {
    const charMap: Record<string, number> = {};
    for (const char of str) {
      charMap[char] = (charMap[char] || 0) + 1;
    }
    let max = 0;
    let maxChar = "";
    for (const char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
    return maxChar;
  },
  // problem solver--> 162
  "vowels-counter": ({ str }: { str: string }) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  },
  // problem solver--> 163
  "array-of-digits": ({ num }: { num: any }) => {
    return JSON.stringify(String(parseNumber(num)).split("").map(Number));
  },
  // problem solver--> 164
  "count-words-in-string": ({ str }: { str: string }) => {
    const words = str.trim().split(/\s+/);
    return words[0] === "" ? 0 : words.length;
  },
  // problem solver--> 165
  "truncate-string": ({ str, num }: { str: string; num: any }) => {
    const n = parseNumber(num);
    return str.length > n ? str.slice(0, n) + "..." : str;
  },
  // problem solver--> 166
  "first-unique-char": ({ str }: { str: string }) => {
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
  // problem solver--> 167
  "merge-sorted-arrays": ({ arr1, arr2 }: { arr1: string; arr2: string }) => {
    const a1 = parseNumArray(arr1);
    const a2 = parseNumArray(arr2);
    return `[${[...a1, ...a2].sort((a, b) => a - b).join(", ")}]`;
  },
  // problem solver--> 168
  "move-zeroes": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
      if (nums[readIndex] !== 0) {
        nums[writeIndex++] = nums[readIndex];
      }
    }
    for (let i = writeIndex; i < nums.length; i++) {
      nums[i] = 0;
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 169
  "roman-to-integer": ({ roman }: { roman: string }) => {
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
  // problem solver--> 170
  "longest-common-prefix": ({ arr }: { arr: string }) => {
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
  // problem solver--> 171
  "implement-strstr": ({
    haystack,
    needle,
  }: {
    haystack: string;
    needle: string;
  }) => {
    return haystack.indexOf(needle);
  },
  // problem solver--> 172
  "majority-element": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let candidate = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) candidate = nums[i];
      count += nums[i] === candidate ? 1 : -1;
    }
    return candidate;
  },
  // problem solver--> 173
  "string-is-unique": ({ str }: { str: string }) => {
    return new Set(str).size === str.length;
  },
  // problem solver--> 174
  "urlify-string": ({ str }: { str: string }) => {
    return str.trim().replace(/\s/g, "%20");
  },
  // problem solver--> 175
  "reverse-words-in-string": ({ str }: { str: string }) => {
    return str.trim().split(/\s+/).reverse().join(" ");
  },
  // problem solver--> 176
  "best-time-to-buy-sell-stock": ({ prices }: { prices: string }) => {
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
  // problem solver--> 177
  "simple-calculator": ({
    num1,
    operator,
    num2,
  }: {
    num1: any;
    operator: string;
    num2: any;
  }) => {
    const n1 = parseNumber(num1);
    const n2 = parseNumber(num2);
    switch (operator) {
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      case "*":
        return n1 * n2;
      case "/":
        return n2 !== 0 ? n1 / n2 : "Division by zero";
      default:
        throw new Error("Invalid operator");
    }
  },
  // problem solver--> 178
  "remove-vowels": ({ str }: { str: string }) => {
    return str.replace(/[aeiou]/gi, "");
  },
  // problem solver--> 179
  "find-all-indexes": ({ arr, value }: { arr: string; value: string }) => {
    const array = parseStrArray(arr);
    const indexes: number[] = [];
    array.forEach((item, index) => {
      if (item === value) {
        indexes.push(index);
      }
    });
    return `[${indexes.join(", ")}]`;
  },
  // problem solver--> 180
  "sum-of-squares": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return nums.reduce((sum, num) => sum + num * num, 0);
  },
  // problem solver--> 181
  "object-from-arrays": ({
    keys,
    values,
  }: {
    keys: string;
    values: string;
  }) => {
    const keyArr = parseStrArray(keys);
    const valArr = parseStrArray(values);
    if (keyArr.length !== valArr.length)
      throw new Error("Key and value arrays must have the same length.");
    const obj: Record<string, string> = {};
    keyArr.forEach((key, index) => {
      obj[key] = valArr[index];
    });
    return JSON.stringify(obj);
  },
  // problem solver--> 182
  "pad-string-start": ({
    str,
    length,
    padChar,
  }: {
    str: string;
    length: any;
    padChar: string;
  }) => {
    return str.padStart(parseNumber(length), padChar);
  },
  // problem solver--> 183
  "pad-string-end": ({
    str,
    length,
    padChar,
  }: {
    str: string;
    length: any;
    padChar: string;
  }) => {
    return str.padEnd(parseNumber(length), padChar);
  },
  // problem solver--> 184
  "check-leap-year": ({ year }: { year: any }) => {
    const y = parseNumber(year);
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  },
  // problem solver--> 185
  "get-day-of-week": ({ date }: { date: string }) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date(date);
    return days[d.getUTCDay()];
  },
  // problem solver--> 186
  "array-fill": ({ value, length }: { value: string; length: any }) => {
    const arr = new Array(parseNumber(length)).fill(value);
    return `[${arr.join(", ")}]`;
  },
  // problem solver--> 187
  "filter-out-numbers": ({ str }: { str: string }) => {
    return str.replace(/[0-9]/g, "");
  },
  // problem solver--> 188
  "get-object-property-safely": ({ prop }: { prop: string }) => {
    const user = { name: "Alice" };
    return user[prop as keyof typeof user] ?? "Not Found";
  },
  // problem solver--> 189
  "double-array-elements": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return `[${nums.map((n) => n * 2).join(", ")}]`;
  },
  // problem solver--> 190
  "filter-even-numbers": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return `[${nums.filter((n) => n % 2 === 0).join(", ")}]`;
  },
  // problem solver--> 191
  "sum-with-reduce": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return nums.reduce((sum, num) => sum + num, 0);
  },
  // problem solver--> 192
  "check-all-caps": ({ str }: { str: string }) => {
    return str === str.toUpperCase();
  },
  // problem solver--> 193
  "object-has-property": ({ prop }: { prop: string }) => {
    const user = { name: "Bob" };
    return Object.prototype.hasOwnProperty.call(user, prop);
  },
  // problem solver--> 194
  "get-last-n-elements": ({ arr, n }: { arr: string; n: any }) => {
    const array = parseStrArray(arr);
    return `[${array.slice(-parseNumber(n)).join(", ")}]`;
  },
  // problem solver--> 195
  "string-to-camel-case": ({ str }: { str: string }) => {
    return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
  },
  // problem solver--> 196
  "remove-whitespace": ({ str }: { str: string }) => {
    return str.replace(/\s/g, "");
  },
  // problem solver--> 197
  "find-unique-characters": ({ str }: { str: string }) => {
    return [...new Set(str)].join("");
  },
  // problem solver--> 198
  "object-is-empty-check": ({ obj }: { obj: string }) => {
    const parsedObj = parseJson(obj);
    if (typeof parsedObj !== "object" || parsedObj === null) {
      return "Input is not a valid object.";
    }
    return Object.keys(parsedObj).length === 0;
  },
  // problem solver--> 199
  "get-file-extension": ({ filename }: { filename: string }) => {
    return filename.slice(filename.lastIndexOf("."));
  },
  // problem solver--> 200
  "simple-character-swap": ({ str }: { str: string }) => {
    if (str.length < 2) return str;
    const first = str[0];
    const last = str[str.length - 1];
    const middle = str.slice(1, -1);
    return last + middle + first;
  },
};
