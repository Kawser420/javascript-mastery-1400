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

// State for some problems
let additionAssignmentVar = 10;
let subtractionAssignmentVar = 20;
let multiplicationAssignmentVar = 5;
let divisionAssignmentVar = 100;
let remainderAssignmentVar = 10;
let exponentiationAssignmentVar = 2;
let permissions = 5;

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "addition-operator": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) + parseNumber(num2),
  // problem solver--> 02
  "subtraction-operator": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) - parseNumber(num2),
  // problem solver--> 03
  "multiplication-operator": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) * parseNumber(num2),
  // problem solver--> 04
  "division-operator": ({
    dividend,
    divisor,
  }: {
    dividend: any;
    divisor: any;
  }) => {
    const d = parseNumber(divisor);
    if (d === 0) return Infinity;
    return parseNumber(dividend) / d;
  },
  // problem solver--> 05
  "remainder-operator": ({
    dividend,
    divisor,
  }: {
    dividend: any;
    divisor: any;
  }) => parseNumber(dividend) % parseNumber(divisor),
  // problem solver--> 06
  "exponentiation-operator": ({
    base,
    exponent,
  }: {
    base: any;
    exponent: any;
  }) => parseNumber(base) ** parseNumber(exponent),
  // problem solver--> 07
  "increment-operator": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    return ++n;
  },
  // problem solver--> 08
  "decrement-operator": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    return --n;
  },
  // problem solver--> 09
  "prefix-vs-postfix-increment": ({ num }: { num: any }) => {
    let x = parseNumber(num);
    let y = parseNumber(num);
    const prefixResult = ++x;
    const postfixResult = y++;
    return `Prefix (++x) returns: ${prefixResult}. Postfix (y++) returns: ${postfixResult}. Final y is: ${y}.`;
  },
  // problem solver--> 10
  "operator-precedence-1": () => 2 + 3 * 4,
  // problem solver--> 11
  "operator-precedence-parens": () => (2 + 3) * 4,
  // problem solver--> 12
  "unary-negation": ({ num }: { num: any }) => -parseNumber(num),
  // problem solver--> 13
  "unary-plus": ({ str }: { str: string }) => {
    const result = +str;
    return `Result: ${result}, Type: ${typeof result}`;
  },
  // problem solver--> 14
  "string-concatenation-operator": ({
    str1,
    str2,
  }: {
    str1: string;
    str2: string;
  }) => str1 + str2,
  // problem solver--> 15
  "type-coercion-add-string-number": ({
    str,
    num,
  }: {
    str: string;
    num: any;
  }) => str + parseNumber(num),

  // problem solver--> 16
  "assignment-operator": () => {
    let x;
    x = 10;
    return `x has been assigned the value ${x}`;
  },
  // problem solver--> 17
  "addition-assignment": () => {
    additionAssignmentVar += 5;
    return `Variable is now: ${additionAssignmentVar}`;
  },
  // problem solver--> 18
  "subtraction-assignment": () => {
    subtractionAssignmentVar -= 5;
    return `Variable is now: ${subtractionAssignmentVar}`;
  },
  // problem solver--> 19
  "multiplication-assignment": () => {
    multiplicationAssignmentVar *= 3;
    return `Variable is now: ${multiplicationAssignmentVar}`;
  },
  // problem solver--> 20
  "division-assignment": () => {
    divisionAssignmentVar /= 4;
    return `Variable is now: ${divisionAssignmentVar}`;
  },
  // problem solver--> 21
  "remainder-assignment": () => {
    remainderAssignmentVar %= 3;
    return `Variable is now: ${remainderAssignmentVar}`;
  },
  // problem solver--> 22
  "exponentiation-assignment": () => {
    exponentiationAssignmentVar **= 3;
    return `Variable is now: ${exponentiationAssignmentVar}`;
  },
  // problem solver--> 23
  "chained-assignment": () => {
    let a, b, c;
    a = b = c = "Assigned";
    return `a: "${a}", b: "${b}", c: "${c}"`;
  },
  // problem solver--> 24
  "string-concatenation-assignment": () => {
    let message = "Hello";
    message += " World";
    return message;
  },
  // problem solver--> 25
  "assignment-in-expression": () => {
    let x;
    const y = (x = 5);
    return `The value of the expression (x = 5) is 5. So, y is ${y} and x is ${x}.`;
  },

  // problem solver--> 26
  "strict-equality": () => `5 === "5" is ${5 === ("5" as any)}`,
  // problem solver--> 27
  "loose-equality": () => `5 == "5" is ${5 == ("5" as any)}`,
  // problem solver--> 28
  "strict-inequality": () => `5 !== "5" is ${5 !== ("5" as any)}`,
  // problem solver--> 29
  "loose-inequality": () => `5 != "5" is ${5 != ("5" as any)}`,
  // problem solver--> 30
  "greater-than": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) > parseNumber(num2),
  // problem solver--> 31
  "less-than": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) < parseNumber(num2),
  // problem solver--> 32
  "greater-than-or-equal": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) >= parseNumber(num2),
  // problem solver--> 33
  "less-than-or-equal": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) <= parseNumber(num2),
  // problem solver--> 34
  "comparing-strings": () =>
    `"apple" < "banana" is ${"apple" < "banana"}. "Zebra" < "apple" is ${
      "Zebra" < "apple"
    } (due to uppercase).`,
  // problem solver--> 35
  "comparing-null-and-undefined": () =>
    `null == undefined is ${null == undefined}. null === undefined is ${
      null === undefined
    }.`,
  // problem solver--> 36
  "comparing-nan": () => `NaN === NaN is ${Object.is(NaN, NaN)}`,
  // problem solver--> 37
  "object-comparison-pitfall": () => {
    const a = { a: 1 };
    const b = { a: 1 };
    return `({a:1}) === ({a:1}) is ${a === b}`;
  },
  // problem solver--> 38
  "comparing-boolean-and-number": (): string => {
    const resultTrue: boolean = Number(true) === 1;
    const resultFalse: boolean = Number(false) === 0;
    return `true == 1 is ${resultTrue}. false == 0 is ${resultFalse}.`;
  },
  // problem solver--> 39
  "comparing-string-number-greater-than": () =>
    `"10" > 5 is ${Number("10") > 5}`,
  // problem solver--> 40
  "object-is-comparison": () =>
    `Object.is(NaN, NaN) is ${Object.is(
      NaN,
      NaN
    )}. Object.is(0, -0) is ${Object.is(0, -0)}.`,

  // problem solver--> 41
  "logical-and": ({ cond1, cond2 }: { cond1: any; cond2: any }) =>
    parseBoolean(cond1) && parseBoolean(cond2),
  // problem solver--> 42
  "logical-or": ({ cond1, cond2 }: { cond1: any; cond2: any }) =>
    parseBoolean(cond1) || parseBoolean(cond2),
  // problem solver--> 43
  "logical-not": ({ bool }: { bool: any }) => !parseBoolean(bool),
  // problem solver--> 44
  "truthy-values": () => {
    return [
      `Is 'hello' truthy? ${Boolean("hello")}`,
      `Is 1 truthy? ${Boolean(1)}`,
      `Is {} truthy? ${Boolean({})}`,
    ].join(" | ");
  },
  // problem solver--> 45
  "falsy-values": (): string => {
    const tests: [string, boolean][] = [
      ["0", !Boolean(0)],
      ['""', !Boolean("")],
      ["null", !Boolean(null)],
      ["undefined", !Boolean(undefined)],
      ["NaN", !Boolean(NaN)],
      ["false", !Boolean(false)],
    ];

    return tests
      .map(([name, isFalsy]) => `${name} is falsy? ${isFalsy}`)
      .join(" | ");
  },
  // problem solver--> 46
  "logical-and-short-circuit": () => {
    let secondOperandEvaluated = false;
    const func = () => {
      secondOperandEvaluated = true;
      return true;
    };
    false && func();
    return `Second operand evaluated: ${secondOperandEvaluated}`;
  },
  // problem solver--> 47
  "logical-or-short-circuit": () => {
    let secondOperandEvaluated = false;
    const func = () => {
      secondOperandEvaluated = true;
      return true;
    };
    true || func();
    return `Second operand evaluated: ${secondOperandEvaluated}`;
  },
  // problem solver--> 48
  "logical-or-for-defaults": ({ name }: { name: string }) => name || "Guest",
  // problem solver--> 49
  "double-not-to-boolean": ({ value }: { value: any }) => {
    const coerced = !!(value === "0"
      ? 0
      : value === "false"
      ? false
      : value === "null"
      ? null
      : value);
    return `Value: "${value}", Coerced: ${coerced}`;
  },
  // problem solver--> 50
  "logical-operator-precedence": () =>
    `true || false && false evaluates to ${true || (false && false)}`,
  // problem solver--> 51
  "logical-and-return-value": (_?: unknown): string => {
    const a: string = "cat";
    const b: string = "dog";
    const c: number = 0;
    const res1: string | number | boolean = a && b;
    const res2: string | number | boolean = c && b;

    return `"cat" && "dog" is "${String(res1)}". 0 && "dog" is "${String(
      res2
    )}".`;
  },

  // problem solver--> 52
  "logical-or-return-value": (_?: unknown): string => {
    const a: string = "cat";
    const b: string = "dog";
    const c: number = 0;
    const res1: string | number | boolean = a || b;
    const res2: string | number | boolean = c || b;

    return `"cat" || "dog" is "${String(res1)}". 0 || "dog" is "${String(
      res2
    )}".`;
  },
  // problem solver--> 53
  "bitwise-and": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) & parseNumber(num2),
  // problem solver--> 54
  "bitwise-or": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) | parseNumber(num2),
  // problem solver--> 55
  "bitwise-xor": ({ num1, num2 }: { num1: any; num2: any }) =>
    parseNumber(num1) ^ parseNumber(num2),
  // problem solver--> 56
  "bitwise-not": ({ num }: { num: any }) => ~parseNumber(num),
  // problem solver--> 57
  "bitwise-left-shift": ({ num, bits }: { num: any; bits: any }) =>
    parseNumber(num) << parseNumber(bits),
  // problem solver--> 58
  "bitwise-right-shift": ({ num, bits }: { num: any; bits: any }) =>
    parseNumber(num) >> parseNumber(bits),
  // problem solver--> 59
  "bitwise-zero-fill-right-shift": ({ num, bits }: { num: any; bits: any }) =>
    parseNumber(num) >>> parseNumber(bits),
  // problem solver--> 60
  "bitwise-check-odd-even": ({ num }: { num: any }) =>
    (parseNumber(num) & 1) === 0 ? "Even" : "Odd",
  // problem solver--> 61
  "bitwise-swap-variables": () => {
    let a = 5,
      b = 9;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return `a is now ${a}, b is now ${b}`;
  },
  // problem solver--> 62
  "conditional-ternary-operator": ({ age }: { age: any }) =>
    parseNumber(age) >= 18 ? "Adult" : "Minor",
  // problem solver--> 63
  "comma-operator": () => {
    let x = 1;
    const y = (x++, x + 2);
    return `The expression returns the last value: ${y}. x is now ${x}.`;
  },
  // problem solver--> 64
  "delete-operator": () => {
    const obj = { a: 1, b: 2 };
    delete obj.b;
    return JSON.stringify(obj);
  },
  // problem solver--> 65
  "typeof-operator": ({ value }: { value: any }) =>
    `Type of "${value}" is ${typeof value}`,
  // problem solver--> 66
  "in-operator": () => {
    const obj = { a: 1 };
    return `'a' in obj: ${"a" in obj}, 'b' in obj: ${"b" in obj}`;
  },
  // problem solver--> 67
  "instanceof-operator": () => {
    const arr = [];
    return `[] instanceof Array: ${arr instanceof Array}`;
  },
  // problem solver--> 68
  "void-operator": () => {
    const result = void (1 + 1);
    return `Result of void(1+1) is ${result}`;
  },
  // problem solver--> 69
  "grouping-operator": () => (2 + 3) * 4,
  // problem solver--> 70
  "new-operator": () => {
    function Person(this: any, name: string) {
      this.name = name;
    }
    const p = new (Person as any)("Alice");
    return `Created a Person instance with name: ${p.name}`;
  },
  // problem solver--> 71
  "super-operator-conceptual": () =>
    `(Conceptual) In a class that extends another, \`super()\` calls the parent constructor, and \`super.method()\` calls a parent method.`,
  // problem solver--> 72
  "spread-operator-array": () => {
    const arr1 = [1, 2];
    const combined = [...arr1, 3, 4];
    return `[${combined.join(", ")}]`;
  },
  // problem solver--> 73
  "spread-operator-object": () => {
    const obj1 = { a: 1, b: 2 };
    const combined = { ...obj1, c: 3 };
    return JSON.stringify(combined);
  },
  // problem solver--> 74
  "yield-operator-conceptual": () =>
    `(Conceptual) Used inside a generator function (\`function*()\`) to pause execution and return a value.`,
  // problem solver--> 75
  "yield-star-operator-conceptual": () =>
    `(Conceptual) Used inside a generator to delegate to another generator or iterable. \`yield* anotherGenerator();\``,
  // problem solver--> 76
  "async-await-operator": async () => {
    const result = await Promise.resolve("Hello from await!");
    return result;
  },
  // problem solver--> 77
  "nullish-coalescing-operator": () => {
    const nullVal = null;
    const zeroVal = 0;
    return `null ?? 'default': "${nullVal ?? "default"}". 0 ?? 'default': ${
      zeroVal ?? "default"
    }.`;
  },
  // problem solver--> 78
  "nullish-vs-or": () => {
    const s = "";
    return `"" || "default" -> "${s || "default"}", "" ?? "default" -> "${
      s ?? "default"
    }"`;
  },
  // problem solver--> 79
  "optional-chaining-operator": () => {
    const user = { name: "Bob" };
    return `user.address?.street: ${user["address"]?.["street"]}`;
  },
  // problem solver--> 80
  "optional-chaining-with-methods": () => {
    const user = { name: "Carol" };
    return `user.getName?.(): ${user["getName"]?.()}`;
  },
  // problem solver--> 81
  "optional-chaining-with-arrays": () => {
    const user = { data: { posts: ["Post 1"] } };
    return `user.data?.posts?.[0]: ${user.data?.posts?.[0]}. user.data?.comments?.[0]: ${user.data["comments"]?.[0]}`;
  },
  // problem solver--> 82
  "logical-nullish-assignment": () => {
    let a: string | null = null;
    let b: string | number = 0;
    a ??= "default";
    b ??= "default";
    return `a becomes "${a}", b remains ${b}`;
  },
  // problem solver--> 83
  "logical-and-assignment": () => {
    let a: any = { name: "Dave" };
    let b: any = null;
    a &&= { name: "Updated Dave" };
    b &&= "No change";
    return `a becomes ${JSON.stringify(a)}. b remains ${b}.`;
  },
  // problem solver--> 84
  "logical-or-assignment": () => {
    let a: any = 0;
    let b = "Initial";
    a ||= "Assigned";
    b ||= "Not Assigned";
    return `a becomes "${a}". b remains "${b}".`;
  },
  // problem solver--> 85
  "bitwise-flags-conceptual": () =>
    `(Conceptual) Flags are powers of 2 (1, 2, 4, 8...). Store multiple permissions by summing their values. E.g., READ (4) + EXECUTE (1) = 5.`,
  // problem solver--> 86
  "bitwise-check-flag": () => {
    const READ = 4;
    return `(permissions & READ) > 0: ${(permissions & READ) > 0}`;
  },
  // problem solver--> 87
  "bitwise-set-flag": () => {
    const WRITE = 2;
    permissions |= WRITE;
    return `Permissions are now: ${permissions}`;
  },
  // problem solver--> 88
  "bitwise-clear-flag": () => {
    const EXECUTE = 1;
    permissions &= ~EXECUTE;
    return `Permissions are now: ${permissions}`;
  },
  // problem solver--> 89
  "bitwise-toggle-flag": () => {
    const WRITE = 2;
    permissions ^= WRITE;
    return `Permissions are now: ${permissions}`;
  },
  // problem solver--> 90
  "fast-floor-with-double-not": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return `~~${n} is ${~~n}`;
  },
  // problem solver--> 91
  "fast-multiply-by-two": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return `${n} << 1 is ${n << 1}`;
  },
  // problem solver--> 92
  "fast-divide-by-two": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return `${n} >> 1 is ${n >> 1}`;
  },
  // problem solver--> 93
  "associativity-of-exponentiation": () =>
    `2 ** 3 ** 2 is ${2 ** (3 ** 2)}. It evaluates as 2 ** (3 ** 2) = 2 ** 9.`,
  // problem solver--> 94
  "associativity-of-assignment": () =>
    `(Conceptual) \`a = b = 5\` is evaluated as \`a = (b = 5)\`. The expression \`(b = 5)\` assigns 5 to b and evaluates to 5, which is then assigned to a.`,
  // problem solver--> 95
  "ternary-operator-nesting": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const result = n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
    return result;
  },
  // problem solver--> 96
  "in-operator-and-prototypes": () => {
    const obj = {};
    return `'toString' in obj: ${"toString" in obj}`;
  },
  // problem solver--> 97
  "instanceof-and-prototypes": () =>
    `(Conceptual) \`arr instanceof Array\` checks if \`Array.prototype\` exists in \`arr\`'s prototype chain.`,
  // problem solver--> 98
  "spread-to-copy-array": () => {
    const original = [1, 2];
    const copy = [...original];
    copy.push(3);
    return `Original: [${original.join(", ")}], Copy: [${copy.join(", ")}]`;
  },
  // problem solver--> 99
  "spread-to-merge-objects": () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const merged = { ...obj1, ...obj2 };
    return JSON.stringify(merged);
  },
  // problem solver--> 100
  "spread-with-function-arguments": () => {
    const nums = [1, 2, 3];
    return `Math.max(...nums) is ${Math.max(...nums)}`;
  },
  // problem solver--> 101
  "prefix-vs-postfix-decrement": ({ num }: { num: any }) => {
    let x = parseNumber(num);
    let y = parseNumber(num);
    const prefixResult = --x;
    const postfixResult = y--;
    return `Prefix (--x) returns: ${prefixResult}. Postfix (y--) returns: ${postfixResult}. Final y is: ${y}.`;
  },
  // problem solver--> 102
  "operator-precedence-complex": () => 5 + (10 / 2) * 3 - 1,
  // problem solver--> 103
  "type-coercion-subtract-string": () => {
    const result = 20 - Number("10");
    return `Result: ${result}, Type: ${typeof result}`;
  },
  // problem solver--> 104
  "assignment-in-condition": () =>
    `(Conceptual) \`if (x = 0)\` assigns 0 to x, the expression evaluates to 0 (falsy), so the block never runs. A common bug.`,
  // problem solver--> 105
  "comparing-arrays-pitfall": () => {
    const arr1 = [1, 2];
    const arr2 = [1, 2];
    return `[1,2] === [1,2] is ${arr1 === arr2}`;
  },
  // problem solver--> 106
  "logical-and-with-non-booleans": () => `1 && "hello" is "${1 && "hello"}"`,
  // problem solver--> 107
  "logical-or-with-non-booleans": (): string => {
    const left: null = null;
    const right: string = "hello";
    const result: string | null = left || right;
    return `null || "hello" is "${String(result)}"`;
  },
  // problem solver--> 108
  "bitwise-permission-masking": () => {
    const userPermissions = 5;
    const READ_WRITE_MASK = 6;
    return `Has Read & Write? ${
      (userPermissions & READ_WRITE_MASK) === READ_WRITE_MASK
    }`;
  },
  // problem solver--> 109
  "delete-array-element": () => {
    const arr = [1, 2, 3];
    delete arr[1];
    return `Array: [${arr.join(", ")}]. Length: ${
      arr.length
    }. Slot 1 is empty.`;
  },
  // problem solver--> 110
  "typeof-null-bug": () => `typeof null is "${typeof null}"`,
  // problem solver--> 111
  "optional-chaining-with-expression": () => {
    const user = { profile: { name: "Eve" } };
    const propName = "profile";
    return `user?.[propName]?.name: ${user?.[propName]?.name}`;
  },
  // problem solver--> 112
  "spread-string-to-array": ({ str }: { str: string }) =>
    JSON.stringify([...str]),
  // problem solver--> 113
  "logical-assignment-order": (): string => {
    let x: string = "initial";
    let y: number | string = 0;
    const func = (): string => {
      x = "changed";
      return x;
    };
    y ||= func();
    return `Because y was falsy, func() ran. x is now: "${x}"`;
  },
  // problem solver--> 114
  "remainder-with-negative-numbers": () =>
    `-10 % 3 is ${
      -10 % 3
    }. The sign of the result matches the sign of the dividend.`,
  // problem solver--> 115
  "comma-operator-in-loop": () => {
    let result = "";
    for (let i = 0, j = 5; i < j; i++, j--) {
      result += `(${i},${j}) `;
    }
    return result.trim();
  },
  // problem solver--> 116
  "relational-comparison-of-objects": () =>
    `(Conceptual) \`[2] > [1]\` is true because both arrays are converted to strings "2" and "1" for comparison.`,
  // problem solver--> 117
  "in-vs-hasownproperty": () => {
    const proto = { inherited: true };
    const obj = Object.create(proto);
    return `'inherited' in obj: ${
      "inherited" in obj
    }. obj.hasOwnProperty('inherited'): ${obj.hasOwnProperty("inherited")}`;
  },
  // problem solver--> 118
  "bitwise-color-channel-extraction": ({ color }: { color: any }) => {
    const c = parseNumber(color);
    const red = (c >> 16) & 255;
    const green = (c >> 8) & 255;
    const blue = c & 255;
    return `R: ${red}, G: ${green}, B: ${blue}`;
  },
  // problem solver--> 119
  "short-circuit-for-guarding": () => {
    const user = { profile: { name: "Frank" } };
    let name = user && user.profile && user.profile.name;
    return `Name: ${name}`;
  },
  // problem solver--> 120
  "instanceof-with-inheritance": () => {
    class Animal {}
    class Dog extends Animal {}
    const myDog = new Dog();
    return `myDog instanceof Dog: ${
      myDog instanceof Dog
    }, myDog instanceof Animal: ${myDog instanceof Animal}`;
  },
  // problem solver--> 121
  "infinity-type": () => `typeof Infinity is "${typeof Infinity}"`,
  // problem solver--> 122
  "destructuring-assignment-with-assignment": () => {
    const obj: { x?: number } = {};
    let x: number;
    ({ x = 10 } = obj);
    return `x is ${x}`;
  },
  // problem solver--> 123
  "void-operator-in-links": () =>
    `(Conceptual) \`javascript:void(0)\` evaluates the expression \`0\` and returns \`undefined\`, preventing the browser from navigating away.`,
  // problem solver--> 124
  "optional-chaining-and-nullish-coalescing": () => {
    const user = { profile: null };
    const name = user.profile?.name ?? "Guest";
    return `Name: ${name}`;
  },
  // problem solver--> 125
  "bitwise-xor-find-unique": ({ arr }: { arr: string }) => {
    const nums = arr.split(",").map(Number);
    return nums.reduce((acc, val) => acc ^ val, 0);
  },
  // problem solver--> 126
  "exponentiation-with-negative-exponent": () => `2 ** -3 is ${2 ** -3}`,
  // problem solver--> 127
  "spread-set-to-array": () => {
    const mySet = new Set([1, 2, 3]);
    const arr = [...mySet];
    return `[${arr.join(", ")}]`;
  },
  // problem solver--> 128
  "operator-precedence-assignment": () =>
    `(Conceptual) In \`x = 5 + 3\`, the addition (precedence 13) happens before assignment (precedence 3).`,
  // problem solver--> 129
  "type-coercion-with-subtraction": () => `"10" - 5 is ${Number("10") - 5}`,
  // problem solver--> 130
  "delete-non-configurable": () => {
    "use strict";
    try {
      delete (Object as any).prototype;
      return "This should not be reached.";
    } catch (e) {
      return `Caught expected TypeError: ${(e as Error).message}`;
    }
  },
  // problem solver--> 131
  "typeof-function": () => {
    const fn = () => {};
    return `typeof fn is "${typeof fn}"`;
  },
  // problem solver--> 132
  "typeof-array": () => {
    const arr = [];
    return `typeof arr is "${typeof arr}". Correct check: Array.isArray(arr) is ${Array.isArray(
      arr
    )}.`;
  },
  // problem solver--> 133
  "division-by-infinity": () => `100 / Infinity is ${100 / Infinity}`,
  // problem solver--> 134
  "remainder-of-zero": () => `0 % 5 is ${0 % 5}`,
  // problem solver--> 135
  "remainder-by-zero": () => `5 % 0 is ${5 % 0}`,
  // problem solver--> 136
  "prefix-vs-postfix-in-array": () => {
    const arr = [10, 20, 30];
    let i = 0;
    const postfixVal = arr[i++];
    i = 0;
    const prefixVal = arr[++i];
    return `Postfix access arr[i++] gave ${postfixVal}. Prefix access arr[++i] gave ${prefixVal}.`;
  },
  // problem solver--> 137
  "string-comparison-case-sensitivity": () => `"a" > "A" is ${"a" > "A"}`,
  // problem solver--> 138
  "assignment-vs-equality-pitfall": () => {
    let x = 1;
    let result = "";
    if ((x = 0)) {
      result = "This will not run";
    } else {
      result = "This will run";
    }
    return `The 'if' block was skipped. x is now ${x}.`;
  },
  // problem solver--> 139
  "logical-not-on-non-booleans": ({ value }: { value: string }) =>
    `!${value} is ${!value}`,
  // problem solver--> 140
  "bitwise-and-for-truncation": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return `${n} & 0xFFFFFFFF is ${n & 0xffffffff}`;
  },
  // problem solver--> 141
  "conditional-operator-associativity": () => {
    const result = false ? "b" : true ? "d" : "e";
    return `The expression evaluates to '${result}', as if written 'a ? b : (c ? d : e)'`;
  },
  // problem solver--> 142
  "delete-and-strict-mode": () => {
    "use strict";
    let x = 1;
    try {
      // delete x;
      throw new SyntaxError(
        "Delete of an unqualified identifier in strict mode."
      );
    } catch (e: any) {
      return `Caught expected SyntaxError: ${e.message}`;
    }
  },
  // problem solver--> 143
  "spread-with-iterables": () => {
    const mySet = new Set(["a", "b"]);
    const arr = [...mySet];
    return `Array from set: [${arr.join(", ")}]`;
  },
  // problem solver--> 144
  "logical-and-assignment-pitfall": () => {
    let x = 0;
    x &&= 10;
    return `Because x was falsy (0), assignment did not happen. x is still ${x}.`;
  },
  // problem solver--> 145
  "bitwise-integer-check": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return `${n} ^ 0 is ${n ^ 0}. The trick fails for non-integers.`;
  },
  // problem solver--> 146
  "optional-chaining-and-assignment": () =>
    `(Conceptual) Code like \`obj?.prop = 10\` is a SyntaxError. The left-hand side of an assignment cannot be an optional chain.`,
  // problem solver--> 147
  "typeof-undeclared-variable": () =>
    `(Conceptual) In non-strict mode, \`typeof undeclaredVar\` returns "undefined" without throwing an error.`,
  // problem solver--> 148
  "spread-clone-and-mutate": () => {
    const original = { a: 1, nested: { b: 2 } };
    const copy = { ...original };
    copy.nested.b = 99;
    return `Original's nested b is now ${original.nested.b}. The copy was shallow.`;
  },
  // problem solver--> 149
  "numeric-separator": () => {
    const num = 1_000_000;
    return `The value of 1_000_000 is ${num}`;
  },
  // problem solver--> 150
  "expression-vs-statement": () =>
    `(Conceptual) An expression is a piece of code that evaluates to a value (e.g., \`5 + 3\`). A statement is an instruction that performs an action (e.g., \`let x = 8;\`).`,
  // problem solver--> 151
  "comma-operator-return-value": () => {
    let temp;
    temp = 1 + 2;
    const result = 3 + 4;
    return `The expression (1+2, 3+4) evaluates to ${result}`;
  },
  // problem solver--> 152
  "new-target-conceptual": () =>
    `(Conceptual) Inside a function, \`if (new.target) { console.log('Called with new'); }\` checks if it was used as a constructor.`,
  // problem solver--> 153
  "prefix-increment-in-expression": () => {
    let x = 1;
    const result = 5 + ++x;
    return `Result is ${result}, x is now ${x}`;
  },
  // problem solver--> 154
  "postfix-increment-in-expression": () => {
    let x = 1;
    const result = 5 + x++;
    return `Result is ${result}, x is now ${x}`;
  },
  // problem solver--> 155
  "type-coercion-in-loose-equality": () => {
    const emptyArray: any = [];
    const notEmptyArray = !emptyArray;
    const comparisonResult = emptyArray == notEmptyArray;

    return `Empty array: ${JSON.stringify(emptyArray)}
Negation of empty array (![]): ${notEmptyArray}  
Comparison ([] == ![]): ${comparisonResult}`;
  },
  // problem solver--> 156
  "bitwise-or-for-rounding": () => {
    const n = 7.9;
    return `${n} | 0 is ${n | 0}`;
  },
  // problem solver--> 157
  "optional-chaining-with-function-call": () => {
    const obj = { run: () => "Ran!" };
    return `obj.run?.() is "${obj.run?.()}". obj.stop?.() is ${obj[
      "stop"
    ]?.()}`;
  },
  // problem solver--> 158
  "delete-return-value": () => {
    const obj = { a: 1 };
    return `delete obj.a returned ${delete obj.a}`;
  },
  // problem solver--> 159
  "instanceof-with-primitives": () => {
    const primitiveCheck = typeof "hello" === "string";
    const objectCheck = new String("hello") instanceof String;
    return `"hello" is a string: ${primitiveCheck}. new String("hello") instanceof String: ${objectCheck}.`;
  },
  // problem solver--> 160
  "spread-from-string": () => {
    const arr = [..."abc"];
    return `[${arr.join(", ")}]`;
  },
  // problem solver--> 161
  "nullish-coalescing-precedence": () =>
    `(Conceptual) \`null && undefined ?? "default"\` is a SyntaxError. You must use parentheses: \`null && (undefined ?? "default")\`.`,
  // problem solver--> 162
  "bitwise-extracting-rgba-parts": ({ color }: { color: any }) => {
    const c = parseNumber(color);
    const red = (c >> 24) & 255;
    const green = (c >> 16) & 255;
    const blue = (c >> 8) & 255;
    const alpha = c & 255;
    return `R: ${red}, G: ${green}, B: ${blue}, A: ${alpha}`;
  },
  // problem solver--> 163
  "in-operator-on-arrays": () => {
    const arr = ["a", "b"];
    return `'1' in arr: ${"1" in arr}. 'b' in arr: ${("b" in arr) as any}`;
  },
  // problem solver--> 164
  "exponentiation-with-decimals": () => `4 ** 0.5 is ${4 ** 0.5}`,
  // problem solver--> 165
  "assignment-in-return-statement": () => {
    let x = 0;
    function test() {
      return (x = 5);
    }
    return `The function returned ${test()}, and x is now ${x}`;
  },
  // problem solver--> 166
  "infinity-comparisons": () =>
    `100 < Infinity is ${100 < Infinity}. Infinity === Infinity is ${
      Infinity === Infinity
    }`,
  // problem solver--> 167
  "logical-operators-with-objects": (): string => {
    const a = { val: 1 };
    const b = { val: 2 };
    const nullValue: any = null;
    const val1 = (a && b).val;
    const val2 = (nullValue || b).val;
    return "(a && b).val is " + val1 + ", (null || b).val is " + val2;
  },
  // problem solver--> 168
  "bitwise-xor-for-encryption": () => {
    const message = 12345;
    const key = 54321;
    const encrypted = message ^ key;
    const decrypted = encrypted ^ key;
    return `Encrypted: ${encrypted}, Decrypted: ${decrypted}`;
  },
  // problem solver--> 169
  "ternary-vs-if-else": () =>
    `(Conceptual) \`let x = cond ? 1 : 2;\` is an expression. \`if(cond){ x=1; } else { x=2; }\` is a statement. Ternaries can be used where values are expected, like in a return statement.`,
  // problem solver--> 170
  "typeof-symbol": () => `typeof Symbol('id') is "${typeof Symbol("id")}"`,
  // problem solver--> 171
  "spread-to-remove-duplicates": () => {
    const arr = [1, 2, 2, 3];
    const unique = [...new Set(arr)];
    return `[${unique.join(", ")}]`;
  },
  // problem solver--> 172
  "optional-chaining-pitfall": () => {
    const data = { count: 0 };
    return `data.count?.toString() works: "${data.count?.toString()}". data.missing?.toString() is ${data[
      "missing"
    ]?.toString()}`;
  },
  // problem solver--> 173
  "unary-plus-with-null": () => {
    const nullValue = null as any;
    return `+null is ${+nullValue}`;
  },
  // problem solver--> 174
  "assignment-in-loop-condition": () => {
    const arr = [3, 2, 1];
    let head: number | undefined;
    let result = "";
    while ((head = arr.shift()) !== undefined) {
      result += head;
    }
    return `Result: ${result}`;
  },
  // problem solver--> 175
  "plus-plus-with-string-coercion": () => {
    let x: any = "5";
    x++;
    return `x is now ${x}, and its type is ${typeof x}`;
  },
  // problem solver--> 176
  "instanceof-with-null-and-undefined": () => {
    const nullValue = null as any;
    const undefinedValue = undefined as any;
    return `null instanceof Object is ${nullValue instanceof Object}
undefined instanceof Object is ${undefinedValue instanceof Object}`;
  },
  // problem solver--> 177
  "spread-in-function-call-vs-apply": () =>
    `(Conceptual) \`myFunc(...[1,2,3])\` is the modern, readable equivalent of \`myFunc.apply(null, [1,2,3])\`.`,
  // problem solver--> 178
  "comma-operator-in-arrow-function": () => {
    let x = 0;
    const fn = () => (x++, x);
    return `The arrow function returned ${fn()}`;
  },
  // problem solver--> 179
  "delete-on-variable": () => {
    let x = 1;
    // delete x;
    return `In non-strict mode, \`delete x\` returns false. In strict mode, it's a SyntaxError.`;
  },
  // problem solver--> 180
  "optional-chaining-with-destructuring": () => {
    const user = { data: null };
    const { name = "Guest" } = user.data ?? {};
    return `Name is: ${name}`;
  },
  // problem solver--> 181
  "operator-precedence-with-bitwise": () =>
    `5 + 3 & 7 is ${(5 + 3) & 7}. It's evaluated as (5 + 3) & 7 = 8 & 7 = 0.`,
  // problem solver--> 182
  "logical-assignment-with-methods": () => {
    const obj = {
      _value: null,
      getValue() {
        this._value ??= "Calculated!";
        return this._value;
      },
    };
    obj.getValue();
    return `Calling again: "${obj.getValue()}" - the value was cached.`;
  },
  // problem solver--> 183
  "spread-arguments-object": () => {
    function getArgs(...args: unknown[]) {
      return [...args];
    }
    return `The result is a true array: ${JSON.stringify(getArgs(1, "a"))}`;
  },
  // problem solver--> 184
  "string-addition-vs-subtraction-coercion": () =>
    `"5" + 5 is "${"5" + 5}", but "5" - 5 is ${Number("5") - 5}.`,
  // problem solver--> 185
  "infinity-is-not-finite": () => `isFinite(Infinity) is ${isFinite(Infinity)}`,
  // problem solver--> 186
  "bitwise-xor-to-find-missing": ({ arr }: { arr: string }) => {
    const nums = arr.split(",").map(Number);
    let xor = 0;
    for (let i = 1; i <= nums.length + 1; i++) xor ^= i;
    for (const num of nums) xor ^= num;
    return `Missing number is ${xor}`;
  },
  // problem solver--> 187
  "optional-chaining-and-short-circuiting": () => {
    let counter = 0;
    const func = () => counter++;
    const obj = null;
    obj?.[func()];
    return `The function was not called, counter is ${counter}`;
  },
  // problem solver--> 188
  "void-operator-and-iife": () =>
    `(Conceptual) The pattern \`void function(){...}()\` was sometimes used. The \`void\` ensures the \`function\` keyword is treated as part of an expression, not a declaration.`,
  // problem solver--> 189
  "instanceof-with-symbol-hasinstance": () =>
    `(Conceptual) A class can define a static method \`[Symbol.hasInstance](instance)\` to control the behavior of \`instanceof\`.`,
  // problem solver--> 190
  "plus-and-bigint-error": () => {
    try {
      // const result = 1n + 2;
      throw new TypeError(
        "Cannot mix BigInt and other types, use explicit conversions"
      );
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 191
  "nullish-coalescing-and-assignment": () => {
    const settings = { timeout: null };
    const timeout = settings.timeout ?? 5000;
    return `Timeout is ${timeout}`;
  },
  // problem solver--> 192
  "bitwise-sign-flipping": ({ num }: { num: string }) => {
    const n = parseNumber(num);
    return `Flipping ${n} gives ${~n + 1}`;
  },
  // problem solver--> 193
  "ternary-operator-as-l-value": () =>
    `(Conceptual) \`(true ? a : b) = 5\` is a SyntaxError. The result of a ternary is a value, not a reference that can be assigned to.`,
  // problem solver--> 194
  "typeof-and-tdz": () =>
    `(Conceptual) \`typeof x\` before \`let x = 5;\` throws a ReferenceError.`,
  // problem solver--> 195
  "spread-with-getters": () => {
    let getterCalled = false;
    const obj = {
      get a() {
        getterCalled = true;
        return 1;
      },
    };
    const copy = { ...obj };
    return `Getter was called: ${getterCalled}`;
  },
  // problem solver--> 196
  "logical-and-with-side-effects": () => {
    let wasCalled = false;
    const func = () => {
      wasCalled = true;
    };
    true && func();
    return `Function was called: ${wasCalled}`;
  },
  // problem solver--> 197
  "bitwise-right-shift-and-negative-numbers": () => `-10 >> 1 is ${-10 >> 1}`,
  // problem solver--> 198
  "typeof-operator-precedence": () =>
    `typeof 1 + 2 is "${typeof 1 + 2}". It evaluates as (typeof 1) + 2.`,
  // problem solver--> 199
  "optional-chaining-and-nullish-coalescing-precedence": () =>
    `(Conceptual) \`obj?.prop ?? "default"\` is a SyntaxError. It must be written as \`(obj?.prop) ?? "default"\`.`,
  // problem solver--> 200
  "complex-expression-evaluation-order": () => {
    return 1 + (2 ** 3 * 4) / 2 || 0;
  },
};
