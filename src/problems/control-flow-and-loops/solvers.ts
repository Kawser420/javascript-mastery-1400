// HELPER FUNCTIONS to make solvers robust against user input
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
    throw new Error();
  } catch (e) {
    throw new Error("Invalid JSON/Array/Object format.");
  }
};

// State for some problems
let statefulCounter = 0;
let sim_MovingAverage_size = 3;
let sim_MovingAverage_stream: number[] = [];
let sim_TicTacToe: any = {};

export const solvers: Record<string, Function> = {
  // --- Basic Conditionals ---
  // problem solver--> 01
  "if-statement-basic": ({ password }: { password: string }) => {
    if (password === "secret123") {
      return "Access Granted";
    }
  },
  // problem solver--> 02
  "if-else-statement": ({ age }: { age: any }) => {
    if (parseNumber(age) >= 18) {
      return "Adult";
    } else {
      return "Minor";
    }
  },
  // problem solver--> 03
  "else-if-statement": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n > 0) {
      return "Positive";
    } else if (n < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  },
  // problem solver--> 04
  "ternary-operator-basic": ({ isLoggedIn }: { isLoggedIn: any }) => {
    return parseBoolean(isLoggedIn) ? "Welcome" : "Please log in";
  },
  // problem solver--> 05
  "switch-statement-basic": ({ dayNumber }: { dayNumber: any }) => {
    switch (parseNumber(dayNumber)) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day number";
    }
  },
  // problem solver--> 06
  "switch-fallthrough": ({ day }: { day: string }) => {
    switch (day.toLowerCase().trim()) {
      case "saturday":
      case "sunday":
        return "Weekend";
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
        return "Weekday";
      default:
        return "Invalid day";
    }
  },
  // problem solver--> 07
  "nested-if-statement": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n > 0) {
      if (n % 2 === 0) {
        return "Positive and Even";
      } else {
        return "Positive and Odd";
      }
    }
    return "Not a positive number";
  },
  // problem solver--> 08
  "logical-and-guard": ({ shouldRun }: { shouldRun: any }) => {
    let result = "Function was not called.";
    const guardedFunc = () => {
      result = "Function was called!";
    };
    parseBoolean(shouldRun) && guardedFunc();
    return result;
  },
  // problem solver--> 09
  "logical-or-default": ({ username }: { username: string }) => {
    return username || "Guest";
  },
  // problem solver--> 10
  "nullish-coalescing-default": ({ value }: { value: any }) => {
    const parsedValue =
      value === "null"
        ? null
        : value === "undefined"
        ? undefined
        : value === "0"
        ? 0
        : value;
    return parsedValue ?? "Default Value";
  },
  // problem solver--> 11
  "check-voting-eligibility": ({
    age,
    isCitizen,
  }: {
    age: any;
    isCitizen: any;
  }) => {
    if (parseNumber(age) >= 18 && parseBoolean(isCitizen)) {
      return "Eligible to vote.";
    }
    return "Not eligible to vote.";
  },
  // problem solver--> 12
  "movie-ticket-price": ({ age }: { age: any }) => {
    const a = parseNumber(age);
    if (a < 12) {
      return "$5";
    } else if (a >= 65) {
      return "$7";
    } else {
      return "$10";
    }
  },
  // problem solver--> 13
  "season-finder": ({ month }: { month: any }) => {
    const m = parseNumber(month);
    if (m === 12 || m === 1 || m === 2) return "Winter";
    if (m >= 3 && m <= 5) return "Spring";
    if (m >= 6 && m <= 8) return "Summer";
    if (m >= 9 && m <= 11) return "Autumn";
    return "Invalid month";
  },
  // problem solver--> 14
  "check-leap-year": ({ year }: { year: any }) => {
    const y = parseNumber(year);
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  },
  // problem solver--> 15
  "simple-calculator-switch": ({
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
  // --- Basic Loops ---
  // problem solver--> 16
  "for-loop-basic": () => {
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += i + " ";
    }
    return result.trim();
  },
  // problem solver--> 17
  "for-loop-countdown": ({ start }: { start: any }) => {
    let result = "";
    for (let i = parseNumber(start); i >= 1; i--) {
      result += i + "... ";
    }
    return result + "Blast off!";
  },
  // problem solver--> 18
  "for-loop-sum": ({ num }: { num: any }) => {
    let sum = 0;
    const limit = parseNumber(num);
    for (let i = 1; i <= limit; i++) {
      sum += i;
    }
    return sum;
  },
  // problem solver--> 19
  "for-loop-over-array": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i] + " ";
    }
    return result.trim();
  },
  // problem solver--> 20
  "while-loop-basic": () => {
    let result = "";
    let i = 1;
    while (i <= 5) {
      result += i + " ";
      i++;
    }
    return result.trim();
  },
  // problem solver--> 21
  "do-while-loop-basic": () => {
    let result = "";
    let i = 5;
    do {
      result += i + " ";
      i++;
    } while (i < 5);
    return `Loop ran once. Result: ${result.trim()}`;
  },
  // problem solver--> 22
  "for-loop-break": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 5) {
        return `Found ${array[i]} at index ${i} and stopped.`;
      }
    }
    return "No number greater than 5 found.";
  },
  // problem solver--> 23
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
  // problem solver--> 24
  "for-of-loop-array": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    let result = "";
    for (const item of array) {
      result += item.toUpperCase() + " ";
    }
    return result.trim();
  },
  // problem solver--> 25
  "for-in-loop-object": () => {
    const person = { name: "Alice", age: 28, city: "New York" };
    let result = "";
    for (const key in person) {
      result += `${key}: ${person[key as keyof typeof person]}; `;
    }
    return result.trim();
  },
  // problem solver--> 26
  "for-loop-even-numbers": ({ limit }: { limit: any }) => {
    let result = "";
    for (let i = 2; i <= parseNumber(limit); i += 2) {
      result += i + " ";
    }
    return result.trim();
  },
  // problem solver--> 27
  "factorial-with-loop": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return "Factorial not defined for negative numbers.";
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },
  // problem solver--> 28
  "while-loop-power-of-two": ({ limit }: { limit: any }) => {
    const l = parseNumber(limit);
    let result = [];
    let i = 1;
    while (i < l) {
      result.push(i);
      i *= 2;
    }
    return result.join(", ");
  },
  // problem solver--> 29
  "for-loop-step": ({ limit }: { limit: any }) => {
    let result = "";
    for (let i = 0; i <= parseNumber(limit); i += 3) {
      result += i + " ";
    }
    return result.trim();
  },
  // problem solver--> 30
  "iterate-string-backwards": ({ str }: { str: string }) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  },
  // --- Intermediate Conditionals & Loops ---
  // problem solver--> 31
  "fizzbuzz-challenge": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    let result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
    return result.join(", ");
  },
  // problem solver--> 32
  "nested-for-loop-pattern-square": ({ size }: { size: any }) => {
    const s = parseNumber(size);
    let pattern = "";
    for (let i = 0; i < s; i++) {
      for (let j = 0; j < s; j++) {
        pattern += "* ";
      }
      pattern += "\n";
    }
    return pattern;
  },
  // problem solver--> 33
  "find-prime-numbers": ({ limit }: { limit: any }) => {
    const l = parseNumber(limit);
    const primes = [];
    for (let i = 2; i <= l; i++) {
      let isPrime = true;
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes.join(", ");
  },
  // problem solver--> 34
  "iterate-string-characters": ({ str }: { str: string }) => {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
    return `Vowel count: ${vowelCount}`;
  },
  // problem solver--> 35
  "find-max-in-array": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    if (array.length === 0) return "Array is empty";
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  },
  // problem solver--> 36
  "find-min-in-array": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    if (array.length === 0) return "Array is empty";
    let min = array[0];
    for (const num of array) {
      if (num < min) {
        min = num;
      }
    }
    return min;
  },
  // problem solver--> 37
  "optional-chaining-in-if": () => {
    const user = { profile: { name: "Alice" } };
    if (user?.profile?.name) {
      return `Name found: ${user.profile.name}`;
    }
    return "Name not found.";
  },
  // problem solver--> 38
  "reverse-array-in-place": ({ arr }: { arr: string }) => {
    const array = parseStrArray(arr);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
    return `[${array.join(", ")}]`;
  },
  // problem solver--> 39
  "while-loop-user-input-simulation": () => {
    const inputs = [12, -2, 5];
    let attempts = 0;
    let valid = false;
    let log = "";
    while (!valid && attempts < inputs.length) {
      const input = inputs[attempts];
      log += `Attempt ${attempts + 1}: Entered ${input}. `;
      if (input >= 1 && input <= 10) {
        valid = true;
        log += "Valid!";
      } else {
        log += "Invalid. ";
      }
      attempts++;
    }
    return log.trim();
  },
  // problem solver--> 40
  "switch-with-ranges": ({ score }: { score: any }) => {
    const s = parseNumber(score);
    let grade = "";
    switch (true) {
      case s > 100:
      case s < 0:
        grade = "Invalid score";
        break;
      case s >= 90:
        grade = "A";
        break;
      case s >= 80:
        grade = "B";
        break;
      case s >= 70:
        grade = "C";
        break;
      case s >= 60:
        grade = "D";
        break;
      default:
        grade = "F";
    }
    return `Score ${s} gets grade ${grade}.`;
  },
  // problem solver--> 41
  "infinite-loop-conceptual": () =>
    `(Conceptual) A loop like \`while(true) { ... }\` or \`for(let i=0; ; i++) { ... }\` with no exit condition will run forever, freezing the program.`,
  // problem solver--> 42
  "iterate-2d-array": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        sum += mat[i][j];
      }
    }
    return sum;
  },
  // problem solver--> 43
  "for-in-vs-for-of": () => {
    const arr = ["a", "b"];
    let inResult = "for...in (keys): ";
    for (const key in arr) {
      inResult += key + " ";
    }
    let ofResult = "for...of (values): ";
    for (const value of arr) {
      ofResult += value + " ";
    }
    return `${inResult.trim()}. ${ofResult.trim()}`;
  },
  // problem solver--> 44
  "for-in-pitfall-arrays": () => {
    const arr: any = ["a", "b"];
    arr.customProp = "test";
    let result = "";
    for (const key in arr) {
      result += `${key} `; // Will include '0', '1', AND 'customProp'
    }
    return `for...in iterates over: ${result.trim()}`;
  },
  // problem solver--> 45
  "labeled-statement-break": () => {
    let result = "";
    outerLoop: for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
          break outerLoop;
        }
        result += `(${i},${j}) `;
      }
    }
    return `Loop broke at (1,1). Result: ${result.trim()}`;
  },
  // problem solver--> 46
  "labeled-statement-continue": () => {
    let result = "";
    outerLoop: for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (j === 1) {
          continue outerLoop;
        }
        result += `(${i},${j}) `;
      }
    }
    return `Loop continued at j=1. Result: ${result.trim()}`;
  },
  // problem solver--> 47
  "sum-object-values": ({ obj }: { obj: string }) => {
    const data = parseJson(obj);
    let sum = 0;
    for (const key in data) {
      if (typeof data[key] === "number") {
        sum += data[key];
      }
    }
    return sum;
  },
  // problem solver--> 48
  "fibonacci-sequence-loop": ({ terms }: { terms: any }) => {
    const n = parseNumber(terms);
    if (n <= 0) return "[]";
    if (n === 1) return "[0]";
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return `[${sequence.join(", ")}]`;
  },
  // problem solver--> 49
  "filter-array-with-loop": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    const evens = [];
    for (const num of array) {
      if (num % 2 === 0) {
        evens.push(num);
      }
    }
    return `[${evens.join(", ")}]`;
  },
  // problem solver--> 50
  "map-array-with-loop": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    const doubled = [];
    for (let i = 0; i < array.length; i++) {
      doubled.push(array[i] * 2);
    }
    return `[${doubled.join(", ")}]`;
  },
  // problem solver--> 51
  "pyramid-pattern": ({ rows }: { rows: any }) => {
    const r = parseNumber(rows);
    let pattern = "";
    for (let i = 1; i <= r; i++) {
      pattern += " ".repeat(r - i);
      pattern += "*".repeat(2 * i - 1);
      pattern += "\n";
    }
    return pattern;
  },
  // problem solver--> 52
  "diamond-pattern": ({ height }: { height: any }) => {
    const h = parseNumber(height);
    if (h % 2 === 0) throw new Error("Height must be an odd number.");
    let pattern = "";
    const mid = Math.floor(h / 2);
    for (let i = 0; i <= mid; i++) {
      pattern += " ".repeat(mid - i);
      pattern += "*".repeat(2 * i + 1);
      pattern += "\n";
    }
    for (let i = mid - 1; i >= 0; i--) {
      pattern += " ".repeat(mid - i);
      pattern += "*".repeat(2 * i + 1);
      pattern += "\n";
    }
    return pattern;
  },
  // problem solver--> 53
  "check-all-pass-loop": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    if (array.length === 0) return true;
    for (const num of array) {
      if (num % 2 !== 0) {
        return false;
      }
    }
    return true;
  },
  // problem solver--> 54
  "check-some-pass-loop": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    for (const num of array) {
      if (num % 2 === 0) {
        return true;
      }
    }
    return false;
  },
  // problem solver--> 55
  "find-first-match-loop": ({ arr }: { arr: string }) => {
    const array = parseNumArray(arr);
    let found = null;
    for (const num of array) {
      if (num < 10) {
        found = num;
        break;
      }
    }
    return found !== null ? `Found: ${found}` : "Not found";
  },
  // problem solver--> 56
  "remove-array-elements-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] % 2 !== 0) {
        nums.splice(i, 1);
      }
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 57
  "switch-vs-object-literal": ({ command }: { command: string }) => {
    const actions: Record<string, string> = {
      save: "Saving document...",
      load: "Loading document...",
      delete: "Deleting document...",
    };
    return actions[command] || "Unknown command";
  },
  // problem solver--> 58
  "caesar-cipher-loop": ({ str, shift }: { str: string; shift: any }) => {
    const s = parseNumber(shift);
    let result = "";
    for (const char of str) {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        // Uppercase
        result += String.fromCharCode(((code - 65 + s) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // Lowercase
        result += String.fromCharCode(((code - 97 + s) % 26) + 97);
      } else {
        result += char;
      }
    }
    return result;
  },
  // problem solver--> 59
  "loop-for-data-aggregation": () => {
    const transactions = [
      { type: "credit", amount: 50 },
      { type: "debit", amount: 20 },
      { type: "credit", amount: 100 },
    ];
    let creditTotal = 0;
    for (const trans of transactions) {
      if (trans.type === "credit") {
        creditTotal += trans.amount;
      }
    }
    return `Total credit: ${creditTotal}`;
  },
  // problem solver--> 60
  "while-loop-linked-list-conceptual": () =>
    `(Conceptual) \`let current = head; while(current !== null) { console.log(current.value); current = current.next; }\`. The loop continues until it reaches the end of the list.`,
  // problem solver--> 61
  "unique-characters-loop": ({ str }: { str: string }) => {
    const seen = new Set();
    for (const char of str) {
      if (seen.has(char)) {
        return false;
      }
      seen.add(char);
    }
    return true;
  },
  // problem solver--> 62
  "loop-over-map": () => {
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    let result = "";
    for (const [key, value] of map) {
      result += `Key: ${key}, Value: ${value}; `;
    }
    return result.trim();
  },
  // problem solver--> 63
  "loop-over-set": () => {
    const set = new Set(["x", "y", "z"]);
    let result = "";
    for (const value of set) {
      result += `${value} `;
    }
    return result.trim();
  },
  // problem solver--> 64
  "for-loop-empty-statement": () => {
    let sum = 0;
    for (let i = 1; i <= 5; sum += i, i++);
    return `Sum is ${sum}`;
  },
  // problem solver--> 65
  "bubble-sort-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
      }
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 66
  "selection-sort-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (nums[j] < nums[minIndex]) {
          minIndex = j;
        }
      }
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 67
  "block-scope-in-loop": () =>
    `(Conceptual) A 'let' inside a loop is scoped to that block and cannot be accessed outside. Each iteration gets a fresh binding.`,
  // problem solver--> 68
  "do-while-for-menu-simulation": () => {
    const userChoices = ["view", "save", "exit"];
    let choice = "";
    let index = 0;
    let log = "";
    do {
      choice = userChoices[index];
      log += `User chose: ${choice}. `;
      index++;
    } while (choice !== "exit" && index < userChoices.length);
    return log.trim();
  },
  // problem solver--> 69
  "for-of-with-destructuring-objects": () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    let result = "";
    for (const { id, name } of users) {
      result += `ID: ${id}, Name: ${name}; `;
    }
    return result.trim();
  },
  // problem solver--> 70
  "empty-loop-body-pitfall": () =>
    `(Conceptual) Code like \`for(let i=0; i<5; i++); { console.log(i); }\` is a bug. The semicolon creates an empty loop that runs 5 times. The block after it runs only once, with i=5.`,
  // problem solver--> 71
  "hollow-square-pattern": ({ size }: { size: any }) => {
    const s = parseNumber(size);
    let pattern = "";
    for (let i = 0; i < s; i++) {
      for (let j = 0; j < s; j++) {
        if (i === 0 || i === s - 1 || j === 0 || j === s - 1) {
          pattern += "* ";
        } else {
          pattern += "  ";
        }
      }
      pattern += "\n";
    }
    return pattern;
  },
  // problem solver--> 72
  "number-pyramid-pattern": ({ rows }: { rows: any }) => {
    const r = parseNumber(rows);
    let pattern = "";
    for (let i = 1; i <= r; i++) {
      pattern += " ".repeat(r - i);
      for (let j = 1; j <= i; j++) {
        pattern += j + " ";
      }
      pattern += "\n";
    }
    return pattern;
  },
  // problem solver--> 73
  "pascals-triangle-loop": ({ rows }: { rows: any }) => {
    const r = parseNumber(rows);
    if (r <= 0) return "";
    let result = [[1]];
    for (let i = 1; i < r; i++) {
      let row = [1];
      for (let j = 1; j < i; j++) {
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
      row.push(1);
      result.push(row);
    }
    return result.map((row) => row.join(" ")).join("\n");
  },
  // problem solver--> 74
  "find-all-indices-loop": ({ arr, value }: { arr: string; value: string }) => {
    const array = parseStrArray(arr);
    const indices = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        indices.push(i);
      }
    }
    return `[${indices.join(", ")}]`;
  },
  // problem solver--> 75
  "greatest-common-divisor-loop": ({
    num1,
    num2,
  }: {
    num1: any;
    num2: any;
  }) => {
    let a = parseNumber(num1);
    let b = parseNumber(num2);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  },
  // problem solver--> 76
  "least-common-multiple-loop": ({ num1, num2 }: { num1: any; num2: any }) => {
    let a = parseNumber(num1);
    let b = parseNumber(num2);
    const gcd = (x: number, y: number): number => {
      while (y) {
        [x, y] = [y, x % y];
      }
      return x;
    };
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
  },
  // problem solver--> 77
  "loop-over-arguments": function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }.bind(null, 10, 20, 30),
  // problem solver--> 78
  "grouping-data-with-loop": () => {
    const products = [
      { name: "Laptop", category: "Electronics" },
      { name: "Shirt", category: "Apparel" },
      { name: "Phone", category: "Electronics" },
    ];
    const grouped: Record<string, any[]> = {};
    for (const product of products) {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    }
    return JSON.stringify(grouped, null, 2);
  },
  // problem solver--> 79
  "matrix-transposition": ({ matrix }: { matrix: string }) => {
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
  // problem solver--> 80
  "diagonal-sum-matrix": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
      sum += mat[i][i];
      if (i !== mat.length - 1 - i) {
        sum += mat[i][mat.length - 1 - i];
      }
    }
    return sum;
  },
  // problem solver--> 81
  "find-longest-consecutive-sequence": ({ arr }: { arr: string }) => {
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
  // problem solver--> 82
  "binary-search-loop": ({ arr, target }: { arr: string; target: any }) => {
    const nums = parseNumArray(arr);
    const t = parseNumber(target);
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === t) return `Found at index ${mid}`;
      if (nums[mid] < t) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return "Not found";
  },
  // problem solver--> 83
  "sliding-window-max-sum": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const size = parseNumber(k);
    let maxSum = -Infinity;
    let windowSum = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      windowSum += nums[windowEnd];
      if (windowEnd >= size - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= nums[windowStart];
        windowStart++;
      }
    }
    return maxSum;
  },
  // problem solver--> 84
  "kadanes-algorithm-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return 0;
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    for (let i = 1; i < nums.length; i++) {
      maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
  },
  // problem solver--> 85
  "spiral-matrix-traversal": ({ matrix }: { matrix: string }) => {
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
  // problem solver--> 86
  "run-length-encoding": ({ str }: { str: string }) => {
    if (!str) return "";
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        result += str[i] + count;
        count = 1;
      }
    }
    return result;
  },
  // problem solver--> 87
  "run-length-decoding": ({ str }: { str: string }) => {
    const matches = str.match(/([A-Za-z])(\d+)/g);
    if (!matches) return "";
    let result = "";
    for (const match of matches) {
      const char = match[0];
      const count = Number(match.slice(1));
      result += char.repeat(count);
    }
    return result;
  },
  // problem solver--> 88
  "sieve-of-eratosthenes": ({ limit }: { limit: any }) => {
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
  // problem solver--> 89
  "two-sum-problem": ({ arr, target }: { arr: string; target: any }) => {
    const nums = parseNumArray(arr);
    const t = parseNumber(target);
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = t - nums[i];
      if (map.has(complement)) {
        return `[${map.get(complement)}, ${i}]`;
      }
      map.set(nums[i], i);
    }
    return "No solution found";
  },
  // problem solver--> 90
  "three-sum-problem-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr).sort((a, b) => a - b);
    const result: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1,
        right = nums.length - 1;
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
  // problem solver--> 91
  "valid-sudoku-board": () =>
    `(Conceptual) Difficult. Requires iterating through the board three times. Use Sets to check for duplicates in each row, each column, and each 3x3 sub-box. If a duplicate is found at any point, the board is invalid.`,
  // problem solver--> 92
  "insertion-sort-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    for (let i = 1; i < nums.length; i++) {
      let current = nums[i];
      let j = i - 1;
      while (j >= 0 && nums[j] > current) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = current;
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 93
  "merge-two-sorted-arrays-loop": ({
    arr1,
    arr2,
  }: {
    arr1: string;
    arr2: string;
  }) => {
    const a1 = parseNumArray(arr1);
    const a2 = parseNumArray(arr2);
    const merged = [];
    let i = 0,
      j = 0;
    while (i < a1.length && j < a2.length) {
      if (a1[i] < a2[j]) {
        merged.push(a1[i++]);
      } else {
        merged.push(a2[j++]);
      }
    }
    while (i < a1.length) merged.push(a1[i++]);
    while (j < a2.length) merged.push(a2[j++]);
    return `[${merged.join(", ")}]`;
  },
  // problem solver--> 94
  "roman-to-integer-loop": ({ roman }: { roman: string }) => {
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
  // problem solver--> 95
  "integer-to-roman-loop": ({ num }: { num: any }) => {
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
  // problem solver--> 96
  "find-peak-element-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let left = 0,
      right = nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[mid + 1]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  },
  // problem solver--> 97
  "rotate-matrix-loop": ({ matrix }: { matrix: string }) => {
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
  // problem solver--> 98
  "product-of-array-except-self-loop": ({ arr }: { arr: string }) => {
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
  // problem solver--> 99
  "valid-parentheses-stack-loop": ({ str }: { str: string }) => {
    const stack: string[] = [];
    const map: Record<string, string> = { "(": ")", "{": "}", "[": "]" };
    for (const char of str) {
      if (map[char]) {
        stack.push(char);
      } else {
        if (stack.length === 0) return false;
        if (map[stack.pop()!] !== char) return false;
      }
    }
    return stack.length === 0;
  },
  // problem solver--> 100
  "container-with-most-water-loop": ({ heights }: { heights: string }) => {
    const h = parseNumArray(heights);
    let maxArea = 0,
      left = 0,
      right = h.length - 1;
    while (left < right) {
      const height = Math.min(h[left], h[right]);
      const width = right - left;
      maxArea = Math.max(maxArea, height * width);
      if (h[left] < h[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxArea;
  },
  // problem solver--> 101
  "trapping-rain-water-loop": ({ heights }: { heights: string }) => {
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
  // problem solver--> 102
  "longest-common-prefix-loop": ({ arr }: { arr: string }) => {
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
  // problem solver--> 103
  "valid-palindrome-two-pointers": ({ str }: { str: string }) => {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, "");
    let left = 0,
      right = cleaned.length - 1;
    while (left < right) {
      if (cleaned[left] !== cleaned[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  },
  // problem solver--> 104
  "move-zeroes-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
      if (nums[readIndex] !== 0) {
        [nums[writeIndex], nums[readIndex]] = [
          nums[readIndex],
          nums[writeIndex],
        ];
        writeIndex++;
      }
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 105
  "find-all-duplicates-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const duplicates = new Set<number>();
    const seen = new Set<number>();
    for (const num of nums) {
      if (seen.has(num)) {
        duplicates.add(num);
      }
      seen.add(num);
    }
    return `[${[...duplicates].join(", ")}]`;
  },
  // problem solver--> 106
  "majority-element-loop": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let candidate = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) candidate = nums[i];
      count += nums[i] === candidate ? 1 : -1;
    }
    return candidate;
  },
  // problem solver--> 107
  "pascals-triangle-ii": ({ rowIndex }: { rowIndex: any }) => {
    const r = parseNumber(rowIndex);
    const row = [1];
    for (let i = 1; i <= r; i++) {
      row.push((row[i - 1] * (r - i + 1)) / i);
    }
    return `[${row.join(", ")}]`;
  },
  // problem solver--> 108
  "missing-ranges": ({
    arr,
    lower,
    upper,
  }: {
    arr: string;
    lower: any;
    upper: any;
  }) => {
    const nums = parseNumArray(arr);
    const l = parseNumber(lower);
    const u = parseNumber(upper);
    const formatRange = (start: number, end: number) =>
      start === end ? `${start}` : `${start}->${end}`;
    const ranges = [];
    let prev = l - 1;
    for (let i = 0; i <= nums.length; i++) {
      const curr = i < nums.length ? nums[i] : u + 1;
      if (curr > prev + 1) {
        ranges.push(formatRange(prev + 1, curr - 1));
      }
      prev = curr;
    }
    return JSON.stringify(ranges);
  },
  // problem solver--> 109
  "summary-ranges": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return "[]";
    const ranges = [];
    let start = nums[0];
    for (let i = 0; i < nums.length; i++) {
      if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
        if (start === nums[i]) {
          ranges.push(`${start}`);
        } else {
          ranges.push(`${start}->${nums[i]}`);
        }
        if (i < nums.length - 1) {
          start = nums[i + 1];
        }
      }
    }
    return JSON.stringify(ranges);
  },
  // problem solver--> 110
  "isomorphic-strings": ({ s, t }: { s: string; t: string }) => {
    if (s.length !== t.length) return false;
    const sMap = new Map();
    const tMap = new Map();
    for (let i = 0; i < s.length; i++) {
      if (
        (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) ||
        (tMap.has(t[i]) && tMap.get(t[i]) !== s[i])
      ) {
        return false;
      }
      sMap.set(s[i], t[i]);
      tMap.set(t[i], s[i]);
    }
    return true;
  },
  // problem solver--> 111
  "word-pattern": ({ pattern, s }: { pattern: string; s: string }) => {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;
    const pMap = new Map();
    const wMap = new Map();
    for (let i = 0; i < pattern.length; i++) {
      const p = pattern[i];
      const w = words[i];
      if (
        (pMap.has(p) && pMap.get(p) !== w) ||
        (wMap.has(w) && wMap.get(w) !== p)
      ) {
        return false;
      }
      pMap.set(p, w);
      wMap.set(w, p);
    }
    return true;
  },
  // problem solver--> 112
  "happy-number": ({ num }: { num: any }) => {
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
  // problem solver--> 113
  "contains-duplicate": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return new Set(nums).size !== nums.length;
  },
  // problem solver--> 114
  "contains-duplicate-ii": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const size = parseNumber(k);
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i]) && i - map.get(nums[i]) <= size) {
        return true;
      }
      map.set(nums[i], i);
    }
    return false;
  },
  // problem solver--> 115
  "valid-anagram": ({ s, t }: { s: string; t: string }) => {
    if (s.length !== t.length) return false;
    const sChars = s.split("").sort().join("");
    const tChars = t.split("").sort().join("");
    return sChars === tChars;
  },
  // problem solver--> 116
  "add-digits": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    while (n >= 10) {
      let sum = 0;
      while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
      }
      n = sum;
    }
    return n;
  },
  // problem solver--> 117
  "ugly-number": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    if (n <= 0) return false;
    for (const p of [2, 3, 5]) {
      while (n % p === 0) {
        n /= p;
      }
    }
    return n === 1;
  },
  // problem solver--> 118
  "first-unique-character": ({ s }: { s: string }) => {
    const map = new Map();
    for (const char of s) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
      if (map.get(s[i]) === 1) {
        return i;
      }
    }
    return -1;
  },
  // problem solver--> 119
  "find-the-difference": ({ s, t }: { s: string; t: string }) => {
    let code = t.charCodeAt(t.length - 1);
    for (let i = 0; i < s.length; i++) {
      code -= s.charCodeAt(i);
      code += t.charCodeAt(i);
    }
    return String.fromCharCode(code);
  },
  // problem solver--> 120
  "ransom-note": ({
    ransomNote,
    magazine,
  }: {
    ransomNote: string;
    magazine: string;
  }) => {
    const map = new Map();
    for (const char of magazine) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    for (const char of ransomNote) {
      if (!map.has(char) || map.get(char) === 0) {
        return false;
      }
      map.set(char, map.get(char) - 1);
    }
    return true;
  },
  // problem solver--> 121
  "keyboard-row": ({ words }: { words: string }) => {
    const rows = [
      new Set("qwertyuiop"),
      new Set("asdfghjkl"),
      new Set("zxcvbnm"),
    ];
    const wordList = parseStrArray(words);
    const result = [];
    for (const word of wordList) {
      const lowerWord = word.toLowerCase();
      if (rows.some((row) => [...lowerWord].every((char) => row.has(char)))) {
        result.push(word);
      }
    }
    return JSON.stringify(result);
  },
  // problem solver--> 122
  "longest-harmonious-subsequence": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const map = new Map();
    for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }
    let longest = 0;
    for (const [num, count] of map.entries()) {
      if (map.has(num + 1)) {
        longest = Math.max(longest, count + map.get(num + 1));
      }
    }
    return longest;
  },
  // problem solver--> 123
  "set-mismatch": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const n = nums.length;
    const seen = new Set();
    let duplicate = -1;
    let sum = 0;
    for (const num of nums) {
      if (seen.has(num)) {
        duplicate = num;
      }
      seen.add(num);
      sum += num;
    }
    const expectedSum = (n * (n + 1)) / 2;
    const missing = expectedSum - (sum - duplicate);
    return `[${duplicate}, ${missing}]`;
  },
  // problem solver--> 124
  "shortest-completing-word": ({
    licensePlate,
    words,
  }: {
    licensePlate: string;
    words: string;
  }) => {
    const createMap = (s: string) => {
      const map = new Map();
      for (const char of s.toLowerCase()) {
        if (char >= "a" && char <= "z") {
          map.set(char, (map.get(char) || 0) + 1);
        }
      }
      return map;
    };
    const plateMap = createMap(licensePlate);
    let result = "";
    const wordList = parseStrArray(words);
    for (const word of wordList) {
      const wordMap = createMap(word);
      let completes = true;
      for (const [char, count] of plateMap.entries()) {
        if (!wordMap.has(char) || wordMap.get(char) < count) {
          completes = false;
          break;
        }
      }
      if (completes && (result === "" || word.length < result.length)) {
        result = word;
      }
    }
    return result;
  },
  // problem solver--> 125
  "goat-latin": ({ sentence }: { sentence: string }) => {
    const words = sentence.split(" ");
    const vowels = new Set("aeiouAEIOU");
    return words
      .map((word, index) => {
        if (vowels.has(word[0])) {
          return word + "ma" + "a".repeat(index + 1);
        } else {
          return word.slice(1) + word[0] + "ma" + "a".repeat(index + 1);
        }
      })
      .join(" ");
  },
  // problem solver--> 126
  "floyds-triangle": ({ rows }: { rows: any }) => {
    const r = parseNumber(rows);
    let pattern = "";
    let num = 1;
    for (let i = 1; i <= r; i++) {
      for (let j = 1; j <= i; j++) {
        pattern += num++ + " ";
      }
      pattern += "\n";
    }
    return pattern;
  },
  // problem solver--> 127
  "dutch-national-flag-problem": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let low = 0,
      mid = 0,
      high = nums.length - 1;
    while (mid <= high) {
      if (nums[mid] === 0) {
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        mid++;
      } else {
        [nums[high], nums[mid]] = [nums[mid], nums[high]];
        high--;
      }
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 128
  "find-all-anagrams-in-string": ({ s, p }: { s: string; p: string }) => {
    const result: number[] = [];
    if (s.length < p.length) return "[]";
    const pMap = new Map();
    for (const char of p) {
      pMap.set(char, (pMap.get(char) || 0) + 1);
    }
    let left = 0,
      right = 0,
      required = pMap.size;
    const windowMap = new Map();
    while (right < s.length) {
      const char = s[right];
      windowMap.set(char, (windowMap.get(char) || 0) + 1);
      if (pMap.has(char) && windowMap.get(char) === pMap.get(char)) {
        required--;
      }
      right++;
      while (required === 0) {
        if (right - left === p.length) {
          result.push(left);
        }
        const leftChar = s[left];
        if (
          pMap.has(leftChar) &&
          windowMap.get(leftChar) === pMap.get(leftChar)
        ) {
          required++;
        }
        windowMap.set(leftChar, windowMap.get(leftChar) - 1);
        left++;
      }
    }
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 129
  "generate-pascal-row": ({ rowIndex }: { rowIndex: any }) => {
    const r = parseNumber(rowIndex);
    const row = [1];
    for (let i = 1; i <= r; i++) {
      row.push((row[i - 1] * (r - i + 1)) / i);
    }
    return `[${row.join(", ")}]`;
  },
  // problem solver--> 130
  "best-time-to-buy-sell-stock-ii": ({ prices }: { prices: string }) => {
    const p = parseNumArray(prices);
    let maxProfit = 0;
    for (let i = 1; i < p.length; i++) {
      if (p[i] > p[i - 1]) {
        maxProfit += p[i] - p[i - 1];
      }
    }
    return maxProfit;
  },
  // problem solver--> 131
  "find-first-and-last-position-in-sorted-array": ({
    arr,
    target,
  }: {
    arr: string;
    target: any;
  }) => {
    const nums = parseNumArray(arr);
    const t = parseNumber(target);
    const findBound = (isFirst: boolean) => {
      let left = 0,
        right = nums.length - 1,
        index = -1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === t) {
          index = mid;
          if (isFirst) right = mid - 1;
          else left = mid + 1;
        } else if (nums[mid] < t) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return index;
    };
    return `[${findBound(true)}, ${findBound(false)}]`;
  },
  // problem solver--> 132
  "excel-sheet-column-number": ({ columnTitle }: { columnTitle: string }) => {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
      result = result * 26 + (columnTitle.charCodeAt(i) - 64);
    }
    return result;
  },
  // problem solver--> 133
  "excel-sheet-column-title": ({ columnNumber }: { columnNumber: any }) => {
    let n = parseNumber(columnNumber);
    let result = "";
    while (n > 0) {
      n--;
      result = String.fromCharCode(65 + (n % 26)) + result;
      n = Math.floor(n / 26);
    }
    return result;
  },
  // problem solver--> 134
  "single-number": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return nums.reduce((acc, num) => acc ^ num, 0);
  },
  // problem solver--> 135
  "plus-one": ({ digits }: { digits: string }) => {
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
  // problem solver--> 136
  "length-of-last-word": ({ s }: { s: string }) => {
    const words = s.trim().split(" ");
    return words[words.length - 1].length;
  },
  // problem solver--> 137
  "palindrome-number": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n < 0) return false;
    return String(n) === String(n).split("").reverse().join("");
  },
  // problem solver--> 138
  "remove-duplicates-from-sorted-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return "Length: 0, Array: []";
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return `Length: ${i + 1}, Array: [${nums.slice(0, i + 1).join(", ")}]`;
  },
  // problem solver--> 139
  "remove-element": ({ arr, val }: { arr: string; val: any }) => {
    const nums = parseNumArray(arr);
    const v = parseNumber(val);
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== v) {
        nums[i] = nums[j];
        i++;
      }
    }
    return `Length: ${i}, Array: [${nums.slice(0, i).join(", ")}]`;
  },
  // problem solver--> 140
  "search-insert-position": ({ arr, target }: { arr: string; target: any }) => {
    const nums = parseNumArray(arr);
    const t = parseNumber(target);
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === t) return mid;
      if (nums[mid] < t) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  },
  // problem solver--> 141
  "game-of-life-iteration": ({ board }: { board: string }) => {
    const b = parseJson(board);
    const rows = b.length;
    const cols = b[0].length;
    const newBoard = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(0));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let liveNeighbors = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const newR = r + i;
            const newC = c + j;
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
        if (b[r][c] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
          newBoard[r][c] = 0;
        } else if (b[r][c] === 0 && liveNeighbors === 3) {
          newBoard[r][c] = 1;
        } else {
          newBoard[r][c] = b[r][c];
        }
      }
    }
    return JSON.stringify(newBoard);
  },
  // problem solver--> 142
  "generator-as-control-flow-conceptual": () =>
    `(Conceptual) Before async/await, libraries like co.js used generators. You would \`yield\` a promise, and a "runner" function would pause the generator, wait for the promise to resolve, and then call \`.next()\` with the resolved value to resume the generator.`,
  // problem solver--> 143
  "palindrome-pairs": ({ words }: { words: string }) => {
    const wordList = parseStrArray(words);
    const result: number[][] = [];
    const isPalindrome = (s: string) => s === s.split("").reverse().join("");
    for (let i = 0; i < wordList.length; i++) {
      for (let j = 0; j < wordList.length; j++) {
        if (i === j) continue;
        if (isPalindrome(wordList[i] + wordList[j])) {
          result.push([i, j]);
        }
      }
    }
    return JSON.stringify(result);
  },
  // problem solver--> 144
  "gas-station": ({ gas, cost }: { gas: string; cost: string }) => {
    const g = parseNumArray(gas);
    const c = parseNumArray(cost);
    const totalGas = g.reduce((a, b) => a + b, 0);
    const totalCost = c.reduce((a, b) => a + b, 0);
    if (totalGas < totalCost) return -1;
    let total = 0;
    let start = 0;
    for (let i = 0; i < g.length; i++) {
      total += g[i] - c[i];
      if (total < 0) {
        total = 0;
        start = i + 1;
      }
    }
    return start;
  },
  // problem solver--> 145
  "candy-distribution": ({ ratings }: { ratings: string }) => {
    const r = parseNumArray(ratings);
    const n = r.length;
    const candies = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
      if (r[i] > r[i - 1]) {
        candies[i] = candies[i - 1] + 1;
      }
    }
    for (let i = n - 2; i >= 0; i--) {
      if (r[i] > r[i + 1]) {
        candies[i] = Math.max(candies[i], candies[i + 1] + 1);
      }
    }
    return candies.reduce((a, b) => a + b, 0);
  },
  // problem solver--> 146
  "zigzag-conversion": ({ s, numRows }: { s: string; numRows: any }) => {
    const n = parseNumber(numRows);
    if (n === 1) return s;
    const rows = new Array(n).fill("");
    let currentRow = 0;
    let goingDown = false;
    for (const char of s) {
      rows[currentRow] += char;
      if (currentRow === 0 || currentRow === n - 1) {
        goingDown = !goingDown;
      }
      currentRow += goingDown ? 1 : -1;
    }
    return rows.join("");
  },
  // problem solver--> 147
  "string-to-integer-atoi": ({ s }: { s: string }) => {
    const num = parseInt(s.trim(), 10);
    if (isNaN(num)) return 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    if (num > INT_MAX) return INT_MAX;
    if (num < INT_MIN) return INT_MIN;
    return num;
  },
  // problem solver--> 148
  "jump-game-ii": ({ arr }: { arr: string }) => {
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
  // problem solver--> 149
  "first-missing-positive": ({ arr }: { arr: string }) => {
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
  // problem solver--> 150
  "next-permutation": ({ arr }: { arr: string }) => {
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
  // problem solver--> 151
  "h-index": ({ citations }: { citations: string }) => {
    const c = parseNumArray(citations).sort((a, b) => b - a);
    let h = 0;
    while (h < c.length && c[h] > h) {
      h++;
    }
    return h;
  },
  // problem solver--> 152
  "reverse-vowels-of-a-string": ({ s }: { s: string }) => {
    const vowels = new Set("aeiouAEIOU");
    const arr = s.split("");
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      if (vowels.has(arr[left]) && vowels.has(arr[right])) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      } else if (vowels.has(arr[left])) {
        right--;
      } else {
        left++;
      }
    }
    return arr.join("");
  },
  // problem solver--> 153
  "intersection-of-two-arrays-ii": ({
    arr1,
    arr2,
  }: {
    arr1: string;
    arr2: string;
  }) => {
    const a1 = parseNumArray(arr1);
    const map = new Map();
    for (const num of a1) {
      map.set(num, (map.get(num) || 0) + 1);
    }
    const result = [];
    const a2 = parseNumArray(arr2);
    for (const num of a2) {
      if (map.has(num) && map.get(num) > 0) {
        result.push(num);
        map.set(num, map.get(num) - 1);
      }
    }
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 154
  "longest-word-in-dictionary-through-deleting": ({
    s,
    d,
  }: {
    s: string;
    d: string;
  }) => {
    const dictionary = parseStrArray(d);
    let longest = "";
    for (const word of dictionary) {
      let i = 0,
        j = 0;
      while (i < s.length && j < word.length) {
        if (s[i] === word[j]) {
          j++;
        }
        i++;
      }
      if (j === word.length) {
        if (
          word.length > longest.length ||
          (word.length === longest.length && word < longest)
        ) {
          longest = word;
        }
      }
    }
    return longest;
  },
  // problem solver--> 155
  "encode-and-decode-strings": ({ strs }: { strs: string }) => {
    const strList = parseStrArray(strs);
    const encode = (s: string[]) =>
      s.map((str) => `${str.length}#${str}`).join("");
    const decode = (s: string) => {
      const result = [];
      let i = 0;
      while (i < s.length) {
        let j = i;
        while (s[j] !== "#") j++;
        const len = Number(s.slice(i, j));
        result.push(s.slice(j + 1, j + 1 + len));
        i = j + 1 + len;
      }
      return result;
    };
    const encoded = encode(strList);
    const decoded = decode(encoded);
    return `Encoded: "${encoded}" | Decoded: [${decoded.join(", ")}]`;
  },
  // problem solver--> 156
  "find-celebrity": () =>
    `(Conceptual) A clever two-pass solution exists. First pass: find a candidate celebrity by assuming person 0 is a candidate and iterating. If the candidate knows person i, then the candidate is not a celebrity, and i becomes the new candidate. After this loop, you have one candidate. Second pass: verify if this candidate is the real celebrity by checking if they know no one and everyone knows them.`,
  // problem solver--> 157
  "basic-calculator": ({ s }: { s: string }) => {
    let result = 0,
      sign = 1,
      num = 0;
    const stack: number[] = [];
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char >= "0" && char <= "9") {
        num = num * 10 + Number(char);
      } else if (char === "+") {
        result += sign * num;
        sign = 1;
        num = 0;
      } else if (char === "-") {
        result += sign * num;
        sign = -1;
        num = 0;
      } else if (char === "(") {
        stack.push(result, sign);
        result = 0;
        sign = 1;
      } else if (char === ")") {
        result += sign * num;
        result *= stack.pop()!;
        result += stack.pop()!;
        num = 0;
      }
    }
    return result + sign * num;
  },
  // problem solver--> 158
  "text-justification": () =>
    `(Conceptual) Complex. Greedily take as many words as fit on a line. For each line (except the last), calculate total spaces needed and distribute them evenly between word gaps. Add extra spaces to the left gaps. Last line is left-justified with single spaces.`,
  // problem solver--> 159
  "minimum-window-substring": () =>
    `(Conceptual) Sliding window approach with two pointers and a frequency map. Expand the window with the right pointer. Once the window is valid (contains all target characters), shrink it from the left, tracking the minimum valid size.`,
  // problem solver--> 160
  "longest-substring-with-at-most-k-distinct-characters": ({
    s,
    k,
  }: {
    s: string;
    k: any;
  }) => {
    const size = parseNumber(k);
    let left = 0,
      maxLength = 0;
    const map = new Map();
    for (let right = 0; right < s.length; right++) {
      map.set(s[right], (map.get(s[right]) || 0) + 1);
      while (map.size > size) {
        map.set(s[left], map.get(s[left]) - 1);
        if (map.get(s[left]) === 0) {
          map.delete(s[left]);
        }
        left++;
      }
      maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
  },
  // problem solver--> 161
  "find-k-closest-elements": ({
    arr,
    k,
    x,
  }: {
    arr: string;
    k: any;
    x: any;
  }) => {
    const nums = parseNumArray(arr);
    const size = parseNumber(k);
    const target = parseNumber(x);
    let left = 0,
      right = nums.length - 1;
    while (right - left >= size) {
      if (Math.abs(nums[left] - target) > Math.abs(nums[right] - target)) {
        left++;
      } else {
        right--;
      }
    }
    return `[${nums.slice(left, right + 1).join(", ")}]`;
  },
  // problem solver--> 162
  "minimum-size-subarray-sum": ({ s, arr }: { s: any; arr: string }) => {
    const target = parseNumber(s);
    const nums = parseNumArray(arr);
    let minLength = Infinity,
      windowSum = 0,
      left = 0;
    for (let right = 0; right < nums.length; right++) {
      windowSum += nums[right];
      while (windowSum >= target) {
        minLength = Math.min(minLength, right - left + 1);
        windowSum -= nums[left];
        left++;
      }
    }
    return minLength === Infinity ? 0 : minLength;
  },
  // problem solver--> 163
  "subarray-sum-equals-k": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const target = parseNumber(k);
    let count = 0,
      sum = 0;
    const map = new Map([[0, 1]]);
    for (const num of nums) {
      sum += num;
      if (map.has(sum - target)) {
        count += map.get(sum - target);
      }
      map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
  },
  // problem solver--> 164
  "boats-to-save-people": ({
    people,
    limit,
  }: {
    people: string;
    limit: any;
  }) => {
    const p = parseNumArray(people).sort((a, b) => a - b);
    const l = parseNumber(limit);
    let boats = 0,
      left = 0,
      right = p.length - 1;
    while (left <= right) {
      if (p[left] + p[right] <= l) {
        left++;
      }
      right--;
      boats++;
    }
    return boats;
  },
  // problem solver--> 165
  "daily-temperatures": ({ temps }: { temps: string }) => {
    const t = parseNumArray(temps);
    const result = new Array(t.length).fill(0);
    const stack: number[] = [];
    for (let i = 0; i < t.length; i++) {
      while (stack.length > 0 && t[i] > t[stack[stack.length - 1]]) {
        const index = stack.pop()!;
        result[index] = i - index;
      }
      stack.push(i);
    }
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 166
  "find-pivot-index": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const totalSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (leftSum === totalSum - leftSum - nums[i]) {
        return i;
      }
      leftSum += nums[i];
    }
    return -1;
  },
  // problem solver--> 167
  "sort-colors": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let low = 0,
      mid = 0,
      high = nums.length - 1;
    while (mid <= high) {
      if (nums[mid] === 0) {
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        mid++;
      } else {
        [nums[high], nums[mid]] = [nums[mid], nums[high]];
        high--;
      }
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 168
  "kth-largest-element-in-an-array": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const size = parseNumber(k);
    nums.sort((a, b) => b - a);
    return nums[size - 1];
  },
  // problem solver--> 169
  "top-k-frequent-elements": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const size = parseNumber(k);
    const map = new Map();
    for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }
    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    return `[${sorted
      .slice(0, size)
      .map((entry) => entry[0])
      .join(", ")}]`;
  },
  // problem solver--> 170
  "sort-characters-by-frequency": ({ s }: { s: string }) => {
    const map = new Map();
    for (const char of s) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    let result = "";
    for (const [char, count] of sorted) {
      result += char.repeat(count);
    }
    return result;
  },
  // problem solver--> 171
  "largest-number-at-least-twice-of-others": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length < 2) return 0;
    let max = -Infinity,
      secondMax = -Infinity,
      maxIndex = -1;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
        secondMax = max;
        max = nums[i];
        maxIndex = i;
      } else if (nums[i] > secondMax) {
        secondMax = nums[i];
      }
    }
    return max >= 2 * secondMax ? maxIndex : -1;
  },
  // problem solver--> 172
  "maximum-product-of-three-numbers": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr).sort((a, b) => a - b);
    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const product2 = nums[0] * nums[1] * nums[n - 1];
    return Math.max(product1, product2);
  },
  // problem solver--> 173
  "array-partition-i": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr).sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
    return sum;
  },
  // problem solver--> 174
  "reshape-the-matrix": ({ mat, r, c }: { mat: string; r: any; c: any }) => {
    const matrix = parseJson(mat);
    const rows = parseNumber(r);
    const cols = parseNumber(c);
    const flat = matrix.flat();
    if (flat.length !== rows * cols) return JSON.stringify(matrix);
    const reshaped = [];
    for (let i = 0; i < rows; i++) {
      reshaped.push(flat.slice(i * cols, i * cols + cols));
    }
    return JSON.stringify(reshaped);
  },
  // problem solver--> 175
  "toeplitz-matrix": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    for (let r = 0; r < mat.length - 1; r++) {
      for (let c = 0; c < mat[0].length - 1; c++) {
        if (mat[r][c] !== mat[r + 1][c + 1]) {
          return false;
        }
      }
    }
    return true;
  },
  // problem solver--> 176
  "transpose-matrix": ({ matrix }: { matrix: string }) => {
    const mat = parseJson(matrix);
    const rows = mat.length,
      cols = mat[0].length;
    const transposed = Array(cols)
      .fill(0)
      .map(() => Array(rows).fill(0));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        transposed[c][r] = mat[r][c];
      }
    }
    return JSON.stringify(transposed);
  },
  // problem solver--> 177
  "flipping-an-image": ({ image }: { image: string }) => {
    const img = parseJson(image);
    return JSON.stringify(
      img.map((row) => row.reverse().map((pixel) => pixel ^ 1))
    );
  },
  // problem solver--> 178
  "valid-mountain-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const n = nums.length;
    let i = 0;
    if (n < 3) return false;
    while (i + 1 < n && nums[i] < nums[i + 1]) i++;
    if (i === 0 || i === n - 1) return false;
    while (i + 1 < n && nums[i] > nums[i + 1]) i++;
    return i === n - 1;
  },
  // problem solver--> 179
  "sort-array-by-parity": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let left = 0,
      right = nums.length - 1;
    while (left < right) {
      if (nums[left] % 2 > nums[right] % 2) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      if (nums[left] % 2 === 0) left++;
      if (nums[right] % 2 === 1) right--;
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 180
  "sort-array-by-parity-ii": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let even = 0,
      odd = 1;
    while (even < nums.length && odd < nums.length) {
      if (nums[even] % 2 === 0) {
        even += 2;
      } else {
        [nums[even], nums[odd]] = [nums[odd], nums[even]];
        odd += 2;
      }
    }
    return `[${nums.join(", ")}]`;
  },
  // problem solver--> 181
  "squares-of-a-sorted-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return `[${nums
      .map((n) => n * n)
      .sort((a, b) => a - b)
      .join(", ")}]`;
  },
  // problem solver--> 182
  "height-checker": ({ heights }: { heights: string }) => {
    const h = parseNumArray(heights);
    const sorted = [...h].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < h.length; i++) {
      if (h[i] !== sorted[i]) count++;
    }
    return count;
  },
  // problem solver--> 183
  "degree-of-an-array": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const map = new Map();
    let degree = 0;
    for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
      degree = Math.max(degree, map.get(num));
    }
    map.clear();
    let minLength = Infinity,
      left = 0;
    let currentDegree = 0;
    for (let right = 0; right < nums.length; right++) {
      map.set(nums[right], (map.get(nums[right]) || 0) + 1);
      currentDegree = Math.max(currentDegree, map.get(nums[right]));
      while (currentDegree === degree) {
        minLength = Math.min(minLength, right - left + 1);
        map.set(nums[left], map.get(nums[left]) - 1);
        if (map.get(nums[left]) < degree) currentDegree = degree - 1;
        left++;
      }
    }
    return minLength;
  },
  // problem solver--> 184
  "magic-squares-in-grid": () =>
    `(Conceptual) Difficult. Iterate through all possible 3x3 subgrids. For each subgrid, check two conditions: 1) Does it contain all digits 1-9 exactly once? 2) Do all rows, columns, and diagonals sum to 15? Count how many subgrids pass both checks.`,
  // problem solver--> 185
  "teemo-attacking": ({
    timeSeries,
    duration,
  }: {
    timeSeries: string;
    duration: any;
  }) => {
    const ts = parseNumArray(timeSeries);
    const d = parseNumber(duration);
    if (ts.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < ts.length - 1; i++) {
      total += Math.min(d, ts[i + 1] - ts[i]);
    }
    return total + d;
  },
  // problem solver--> 186
  "can-place-flowers": ({ flowerbed, n }: { flowerbed: string; n: any }) => {
    const fb = parseNumArray(flowerbed);
    let count = parseNumber(n);
    for (let i = 0; i < fb.length; i++) {
      if (
        fb[i] === 0 &&
        (i === 0 || fb[i - 1] === 0) &&
        (i === fb.length - 1 || fb[i + 1] === 0)
      ) {
        fb[i] = 1;
        count--;
      }
    }
    return count <= 0;
  },
  // problem solver--> 187
  "maximum-average-subarray-i": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const size = parseNumber(k);
    let sum = 0;
    for (let i = 0; i < size; i++) sum += nums[i];
    let max = sum;
    for (let i = size; i < nums.length; i++) {
      sum += nums[i] - nums[i - size];
      max = Math.max(max, sum);
    }
    return max / size;
  },
  // problem solver--> 188
  "k-diff-pairs-in-an-array": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const diff = parseNumber(k);
    if (diff < 0) return 0;
    const seen = new Set();
    const pairs = new Set();
    for (const num of nums) {
      if (seen.has(num - diff)) pairs.add(num - diff);
      if (seen.has(num + diff)) pairs.add(num);
      seen.add(num);
    }
    return pairs.size;
  },
  // problem solver--> 189
  "find-the-town-judge": ({ n, trust }: { n: any; trust: string }) => {
    const N = parseNumber(n);
    const t = parseJson(trust);
    const trustCounts = new Array(N + 1).fill(0);
    for (const [a, b] of t) {
      trustCounts[a]--;
      trustCounts[b]++;
    }
    for (let i = 1; i <= N; i++) {
      if (trustCounts[i] === N - 1) {
        return i;
      }
    }
    return -1;
  },
  // problem solver--> 190
  "pancake-sorting": ({ arr }: { arr: string }) => {
    const A = parseNumArray(arr);
    const result: number[] = [];
    for (let n = A.length; n > 0; --n) {
      const i = A.indexOf(n);
      if (i === n - 1) continue;
      if (i !== 0) {
        result.push(i + 1);
        const head = A.slice(0, i + 1).reverse();
        A.splice(0, i + 1, ...head);
      }
      result.push(n);
      const head = A.slice(0, n).reverse();
      A.splice(0, n, ...head);
    }
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 191
  "next-greater-element-i": ({
    nums1,
    nums2,
  }: {
    nums1: string;
    nums2: string;
  }) => {
    const n1 = parseNumArray(nums1);
    const n2 = parseNumArray(nums2);
    const map = new Map();
    const stack: number[] = [];
    for (const num of n2) {
      while (stack.length > 0 && stack[stack.length - 1] < num) {
        map.set(stack.pop()!, num);
      }
      stack.push(num);
    }
    return `[${n1.map((num) => map.get(num) ?? -1).join(", ")}]`;
  },
  // problem solver--> 192
  "next-greater-element-ii": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack: number[] = [];
    for (let i = 0; i < 2 * n; i++) {
      const num = nums[i % n];
      while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
        result[stack.pop()!] = num;
      }
      if (i < n) stack.push(i);
    }
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 193
  "dot-product-of-two-sparse-vectors": ({
    vec1,
    vec2,
  }: {
    vec1: string;
    vec2: string;
  }) => {
    const v1 = parseNumArray(vec1);
    const v2 = parseNumArray(vec2);
    let sum = 0;
    for (let i = 0; i < v1.length; i++) {
      sum += v1[i] * v2[i];
    }
    return sum;
  },
  // problem solver--> 194
  "logger-rate-limiter": ({ messages }: { messages: string }) => {
    const msgs = parseJson(messages);
    const map = new Map();
    const results: boolean[] = [];
    for (const [msg, ts] of msgs) {
      if (!map.has(msg) || ts - map.get(msg) >= 10) {
        map.set(msg, ts);
        results.push(true);
      } else {
        results.push(false);
      }
    }
    return JSON.stringify(results);
  },
  // problem solver--> 195
  "moving-average-from-data-stream": ({ size }: { size: any }) => {
    sim_MovingAverage_size = parseNumber(size);
    sim_MovingAverage_stream = [1, 10, 3, 5];
    const averages = [];
    let sum = 0;
    const window = [];
    for (const val of sim_MovingAverage_stream) {
      window.push(val);
      sum += val;
      if (window.length > sim_MovingAverage_size) {
        sum -= window.shift()!;
      }
      averages.push(sum / window.length);
    }
    return `Simulated stream [1,10,3,5] -> Averages: [${averages.join(", ")}]`;
  },
  // problem solver--> 196
  "design-tic-tac-toe": () =>
    `(Conceptual) Create a class with a board. The \`move\` method places a mark and then checks for a win. An optimized win-check would not scan the whole board, but maintain arrays for row, column, and diagonal sums. If any sum becomes +/- n, a player has won.`,
  // problem solver--> 197
  "battleships-in-a-board": ({ board }: { board: string }) => {
    const b = parseJson(board);
    let count = 0;
    for (let r = 0; r < b.length; r++) {
      for (let c = 0; c < b[0].length; c++) {
        if (b[r][c] === "X") {
          if (
            (r === 0 || b[r - 1][c] === ".") &&
            (c === 0 || b[r][c - 1] === ".")
          ) {
            count++;
          }
        }
      }
    }
    return count;
  },
  // problem solver--> 198
  "shortest-distance-to-a-character": ({ s, c }: { s: string; c: string }) => {
    const n = s.length;
    const result = new Array(n).fill(Infinity);
    let pos = -Infinity;
    for (let i = 0; i < n; i++) {
      if (s[i] === c) pos = i;
      result[i] = i - pos;
    }
    for (let i = n - 1; i >= 0; i--) {
      if (s[i] === c) pos = i;
      result[i] = Math.min(result[i], Math.abs(i - pos));
    }
    return `[${result.join(", ")}]`;
  },
  // problem solver--> 199
  "binary-gap": ({ n }: { n: any }) => {
    const bin = parseNumber(n).toString(2);
    let maxGap = 0;
    let lastOne = -1;
    for (let i = 0; i < bin.length; i++) {
      if (bin[i] === "1") {
        if (lastOne !== -1) {
          maxGap = Math.max(maxGap, i - lastOne);
        }
        lastOne = i;
      }
    }
    return maxGap;
  },
  // problem solver--> 200
  "armstrong-number-check": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const s = String(n);
    const power = s.length;
    const sum = s
      .split("")
      .reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === n;
  },
};
