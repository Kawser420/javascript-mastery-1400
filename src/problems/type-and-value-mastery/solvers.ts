// problem solver--> 01

// Robust helper functions to handle various user inputs without TypeScript errors
const parseNumber = (input: any): number => {
  const num = Number(input);
  if (String(input).trim() === '' || isNaN(num)) {
    // Throw an error for invalid number formats to be caught by the UI
    throw new Error(`Invalid number input: "${input}"`);
  }
  return num;
};

const parseAsValue = (input: string): any => {
    const trimmed = input.trim().toLowerCase();
    if (trimmed === 'null') return null;
    if (trimmed === 'undefined') return undefined;
    if (trimmed === 'true') return true;
    if (trimmed === 'false') return false;
    if (trimmed === '""' || trimmed === "''") return "";
    if (trimmed === 'nan') return NaN;
    
    // Check if it's a number (including '0')
    if (!isNaN(Number(trimmed)) && trimmed !== '') return Number(trimmed);

    // Try to parse as JSON for objects/arrays
    try {
        if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
            // A safer eval-like function for object literals
            return new Function(`return ${input}`)();
        }
    } catch (e) {
        // Fallback to original string if JSON parsing fails
        return input;
    }

    return input; // Return original string if no other type matches
};


export const solvers: Record<string, Function> = {
  // problem solver--> 01
  'tv-typeof-string': () => `typeof 'hello' is "${typeof 'hello'}"`,
  // problem solver--> 02
  'tv-typeof-number': () => `typeof 42 is "${typeof 42}"`,
  // problem solver--> 03
  'tv-typeof-boolean': () => `typeof true is "${typeof true}"`,
  // problem solver--> 04
  'tv-typeof-undefined': () => {
    let x;
    return `typeof x is "${typeof x}"`;
  },
  // problem solver--> 05
  'tv-typeof-null': () => `typeof null is "${typeof null}"`,
  // problem solver--> 06
  'tv-typeof-object': () => `typeof {} is "${typeof {}}"`,
  // problem solver--> 07
  'tv-typeof-array': () => `typeof [] is "${typeof []}". Correct check: Array.isArray([]) is ${Array.isArray([])}`,
  // problem solver--> 08
  'tv-typeof-function': () => { const fn = () => {}; return `typeof fn is "${typeof fn}"`; },
  // problem solver--> 09
  'tv-typeof-symbol': () => `typeof Symbol('id') is "${typeof Symbol('id')}"`,
  // problem solver--> 10
  'tv-typeof-bigint': () => `typeof 10n is "${typeof 10n}"`,
  // problem solver--> 11
  'tv-primitive-vs-object-string': () => {
    const primitive = 'hello';
    const object = new String('hello');
    return `typeof primitive: ${typeof primitive}, typeof object: ${typeof object}. primitive === object: ${primitive === (object as any)}. primitive == object: ${primitive == (object as any)}`;
  },
  // problem solver--> 12
  'tv-pass-by-value': () => {
    let a = 10;
    function modify(val: number) { val = 20; }
    modify(a);
    return `Original 'a' is still ${a}.`;
  },
  // problem solver--> 13
  'tv-pass-by-reference': () => {
    let obj = { x: 10 };
    function modify(o: { x: number }) { o.x = 20; }
    modify(obj);
    return `Original 'obj.x' is now ${obj.x}.`;
  },
  // problem solver--> 14
  'tv-reassigning-object-param': () => {
    let myObj = { val: 10 };
    function reassign(obj: { val: number }) { obj = { val: 20 }; }
    reassign(myObj);
    return `The original object is unchanged: ${JSON.stringify(myObj)}`;
  },
  // problem solver--> 15
  'tv-explicit-coercion-string-to-number': ({ str }: { str: string }) => {
    const num = Number(str);
    return `Value: ${num}, Type: ${typeof num}`;
  },
  // problem solver--> 16
  'tv-explicit-coercion-number-to-string': ({ num }: { num: any }) => {
    const str = String(parseNumber(num));
    return `Value: "${str}", Type: ${typeof str}`;
  },
  // problem solver--> 17
  'tv-explicit-coercion-to-boolean': ({ value }: { value: string }) => {
    const val = parseAsValue(value);
    return `Boolean("${value}") is ${Boolean(val)}`;
  },
  // problem solver--> 18
  'tv-parseint': ({ str }: { str: string }) => {
    return `parseInt("${str}") is ${parseInt(str, 10)}. parseInt("11", 2) is ${parseInt("11", 2)}.`;
  },
  // problem solver--> 19
  'tv-parsefloat': ({ str }: { str: string }) => {
    return `parseFloat("${str}") is ${parseFloat(str)}`;
  },
  // problem solver--> 20
  'tv-tostring-method': ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return `(${n}).toString() is "${n.toString()}". (${n}).toString(16) is "${n.toString(16)}".`;
  },
  // problem solver--> 21
  'tv-implicit-coercion-plus-string': () => `5 + "5" is "${5 + "5"}"`,
  // problem solver--> 22
  'tv-implicit-coercion-minus-string': () => `"10" - 5 is ${Number("10") - 5}`,
  // problem solver--> 23
  'tv-implicit-coercion-if-statement': ({ value }: { value: string }) => {
    const val = parseAsValue(value);
    if (val) {
      return `'${value}' is truthy.`;
    }
    return `'${value}' is falsy.`;
  },
  // problem solver--> 24
  'tv-strict-equality': () => `5 === "5" is ${5 === ("5" as any)}`,
  // problem solver--> 25
  'tv-loose-equality': () => `5 == "5" is ${5 == ("5" as any)}`,
  // problem solver--> 26
  'tv-loose-equality-null-undefined': () => `null == undefined is ${null == undefined}`,
  // problem solver--> 27
  'tv-loose-equality-boolean-number': () => `true == 1 is ${true == (1 as any)}`,
  // problem solver--> 28
  'tv-loose-equality-object-primitive': () => `[10] == 10 is ${[10] == (10 as any)}`,
  // problem solver--> 29
  'tv-truthy-values': () => `Truthy: 'a' is ${!!'a'}, 1 is ${!!1}, {} is ${!!{}}, [] is ${!![]}`,
  // problem solver--> 30
  'tv-falsy-values': () => `Falsy: false is ${!false}, 0 is ${!0}, "" is ${!""}, null is ${!null}, undefined is ${!undefined}, NaN is ${!NaN}`,
  // problem solver--> 31
  'tv-double-not-to-boolean': ({ value }: { value: string }) => {
     const val = parseAsValue(value);
     return `!!'${value}' is ${!!val}`;
  },
  // problem solver--> 32
  'tv-short-circuit-or': () => `null || "default" is "${null || "default"}"`,

  // problem solver--> 33
  'tv-short-circuit-and': () => `1 && "hello" is "${1 && "hello"}"`,
  // problem solver--> 34
  'tv-nullish-coalescing': () => `0 || "default" is "${0 || "default"}". 0 ?? "default" is "${0 ?? "default"}"`,
  // problem solver--> 35
  'tv-object-is': () => `Object.is(NaN, NaN) is ${Object.is(NaN, NaN)}`,
  // problem solver--> 36
  'tv-comparing-nan': () => `NaN === NaN is ${NaN === NaN}`,
  // problem solver--> 37
  'tv-comparing-negative-zero': () => `-0 === 0 is ${-0 === 0}. Object.is(-0, 0) is ${Object.is(-0, 0)}`,
  // problem solver--> 38
  'tv-object-comparison': () => `{a:1} === {a:1} is ${{ a: 1 } === { a: 1 }}`,
  // problem solver--> 39
  'tv-autoboxing': () => `(Conceptual) "hello".toUpperCase() works because "hello" is temporarily wrapped in a String object.`,
  // problem solver--> 40
  'tv-valueof-method': () => {
    const numObj = new Number(42);
    return `new Number(42).valueOf() is ${numObj.valueOf()}`;
  },
  // problem solver--> 41
  'tv-custom-valueof': () => {
    const obj = { value: 5, valueOf() { return this.value; } };
    return `obj + 10 is ${(obj as any) + 10}`;
  },
  // problem solver--> 42
  'tv-custom-tostring': () => {
    const obj = { value: 'Item', toString() { return this.value; } };
    return `"Message: " + obj is "Message: ${obj}"`;
  },
  // problem solver--> 43
  'tv-symbol-toprimitive': () => `(Conceptual) An object can define [Symbol.toPrimitive](hint) to control conversion to number, string, or default.`,
  // problem solver--> 44
  'tv-unary-plus-coercion': ({ value }: { value: string }) => {
    const val = parseAsValue(value);
    return `+${value} is ${+val}`;
  },
  // problem solver--> 45
  'tv-number-constructor-coercion': ({ value }: { value: string }) => {
    const val = parseAsValue(value);
    return `Number(${value}) is ${Number(val)}`;
  },
  // problem solver--> 46
  'tv-abstract-equality-algorithm': () => `(Conceptual) The == algorithm has complex rules, e.g., if types are different, it tries to convert to number (except for null/undefined).`,
  // problem solver--> 47
  'tv-abstract-relational-comparison': () => `(Conceptual) For <, >, etc., if operands are objects, they are converted to primitives (valueOf then toString) before comparison.`,
  // problem solver--> 48
  'tv-isarray-check': () => `Array.isArray([]) is ${Array.isArray([])}`,
  // problem solver--> 49
  'tv-isnan-check': () => `Number.isNaN(NaN) is ${Number.isNaN(NaN)}. Number.isNaN("a") is ${Number.isNaN("a" as any)}`,
  // problem solver--> 50
  'tv-global-isnan-coercion': () => `isNaN("a") is ${isNaN("a" as any)}. The global isNaN coerces its argument first.`,
  // problem solver--> 51
  'tv-infinity-type': () => `typeof Infinity is "${typeof Infinity}"`,
  // problem solver--> 52
  'tv-infinity-comparisons': () => `100 < Infinity is ${100 < Infinity}. Infinity === Infinity is ${Infinity === Infinity}`,
  // problem solver--> 53
  'tv-division-by-zero': () => `1/0 is ${1/0}, -1/0 is ${-1/0}, 0/0 is ${0/0}`,
  // problem solver--> 54
  'tv-number-isinteger': ({ num }: { num: any }) => `Number.isInteger(${Number(num)}) is ${Number.isInteger(Number(num))}`,
  // problem solver--> 55
  'tv-number-isfinite': ({ value }: { value: string }) => `Number.isFinite("${value}") is ${Number.isFinite(value as any)}. Global isFinite("${value}") is ${isFinite(value as any)}`,
  // problem solver--> 56
  'tv-number-issafeinteger': ({ num }: { num: any }) => `Number.isSafeInteger(${parseNumber(num)}) is ${Number.isSafeInteger(parseNumber(num))}`,
  // problem solver--> 57
  'tv-max-safe-integer': () => `MAX_SAFE_INTEGER is ${Number.MAX_SAFE_INTEGER}. Add 2 gives ${Number.MAX_SAFE_INTEGER + 2}, which is incorrect.`,
  // problem solver--> 58
  'tv-bigint-precision': () => {
    const big = BigInt(Number.MAX_SAFE_INTEGER);
    return `BigInt + 2n is ${big + 2n}`;
  },
  // problem solver--> 59
  'tv-bigint-vs-number-equality': () => `10n === 10 is ${10n === (10 as any)}. 10n == 10 is ${10n == (10 as any)}`,
  // problem solver--> 60
  'tv-bigint-mixing-error': () => `(Conceptual) Code like \`1n + 2\` throws a TypeError. You must explicitly convert: \`1n + BigInt(2)\` or \`Number(1n) + 2\`.`,
  // problem solver--> 61
  'tv-string-coercion-object': () => `"Result: " + {} is "Result: ${({} as any)}"`,
  // problem solver--> 62
  'tv-string-coercion-array': () => `"Result: " + [1,2] is "Result: ${[1,2]}"`,
  // problem solver--> 63
  'tv-number-coercion-object': () => `Number({}) is ${Number({} as any)}`,
  // problem solver--> 64
  'tv-number-coercion-array': () => `Number([]) is ${Number([] as any)}, Number([5]) is ${Number([5] as any)}, Number([1,2]) is ${Number([1,2] as any)}`,
  // problem solver--> 65
  'tv-tofixed-method': ({ num }: { num: any }) => `${parseNumber(num)}.toFixed(2) is "${parseNumber(num).toFixed(2)}"`,
  // problem solver--> 66
  'tv-toexponential-method': ({ num }: { num: any }) => `${parseNumber(num)}.toExponential(2) is "${parseNumber(num).toExponential(2)}"`,
  // problem solver--> 67
  'tv-toprecision-method': ({ num }: { num: any }) => `${parseNumber(num)}.toPrecision(4) is "${parseNumber(num).toPrecision(4)}"`,
  // problem solver--> 68
  'tv-coercion-with-bitwise-not': ({ value }: { value: string }) => `~"${value}" is ${~(Number(value))}`,
  // problem solver--> 69
  'tv-tricky-loose-equality-1': () => `[] == ![] is ${[] == ![]}`,
  // problem solver--> 70
  'tv-tricky-loose-equality-2': () => `0 == " \\t\\r\\n " is ${0 == " \t\r\n "}`,
  // problem solver--> 71
  'tv-tricky-loose-equality-3': () => `[null] == 0 is ${[null] == (0 as any)}`,
  // problem solver--> 72
  'tv-tricky-addition-1': () => `[] + {} is "${[] + ({} as any)}"`,
  // problem solver--> 73
  'tv-tricky-addition-2': () => `{} + [] is ${({} as any) + []}. (In a script, {} is an empty block, so the expression is just +[], which is 0).`,
  // problem solver--> 74
  'tv-instanceof-primitive': () => `"hello" instanceof String is ${"hello" instanceof String}`,
  // problem solver--> 75
  'tv-instanceof-object': () => `new String("hello") instanceof String is ${new String("hello") instanceof String}`,
  // problem solver--> 76
  'tv-constructor-property': () => `(true).constructor is ${true.constructor.name}, ({}).constructor is ${{}.constructor.name}`,
  // problem solver--> 77
  'tv-object-prototype-tostring': ({ value }: { value: any }) => {
    let val;
    try {
      val = eval(value);
    } catch(e) {
      val = value;
    }
    return Object.prototype.toString.call(val);
  },
  // problem solver--> 78
  'tv-symbol-uniqueness': () => `Symbol('a') === Symbol('a') is ${Symbol('a') === Symbol('a')}`,
  // problem solver--> 79
  'tv-global-symbol-for': () => `Symbol.for('a') === Symbol.for('a') is ${Symbol.for('a') === Symbol.for('a')}`,
  // problem solver--> 80
  'tv-symbol-keyfor': () => `Symbol.keyFor(Symbol.for('a')) is "${Symbol.keyFor(Symbol.for('a'))}"`,
  // problem solver--> 81
  'tv-well-known-symbol-iterator': () => {
    const obj = { data: [1, 2], [Symbol.iterator]: function*() { yield* this.data; } };
    return `Spread result: ${[...obj]}`;
  },
  // problem solver--> 82
  'tv-empty-array-truthiness': () => `if ([]) is truthy: ${!![]}`,
  // problem solver--> 83
  'tv-empty-object-truthiness': () => `if ({}) is truthy: ${!!{}}`,
  // problem solver--> 84
  'tv-string-object-equality': () => `new String("a") == "a" is ${new String("a") == "a"}, new String("a") === "a" is ${new String("a") === "a"}`,
  // problem solver--> 85
  'tv-coercion-array-array': () => `[] + [] is "${[] + []}"`,
  // problem solver--> 86
  'tv-coercion-array-object': () => `[] + {} is "${[] + ({} as any)}"`,
  // problem solver--> 87
  'tv-coercion-object-array-script': () => `In a script, {} is an empty code block, so the expression becomes +[], which evaluates to 0.`,
  // problem solver--> 88
  'tv-true-plus-true-coercion': () => `true + true is ${Number(true) + Number(true)}`,
  // problem solver--> 89
  'tv-relational-comparison-arrays': () => `[2] > [1] is ${[2] > [1]}. It compares strings "2" and "1".`,
  // problem solver--> 90
  'tv-abstract-equality-with-null-array': () => `[null] == "" is ${[null] == ("" as any)}`,
  // problem solver--> 91
  'tv-strict-equality-zeros': () => `-0 === 0 is ${-0 === 0}`,
  // problem solver--> 92
  'tv-number-epsilon': () => `0.1 + 0.2 === 0.3 is ${0.1 + 0.2 === 0.3}. Safe check: Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON is ${Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON}`,
  // problem solver--> 93
  'tv-isfinite-vs-number-isfinite': ({ value }: { value: string }) => `Number.isFinite("${value}") is ${Number.isFinite(value as any)}. Global isFinite("${value}") is ${isFinite(value as any)}.`,
  // problem solver--> 94
  'tv-instanceof-and-prototype-chain': () => {
    class A {}
    class B extends A {}
    const b = new B();
    return `b instanceof B is ${b instanceof B}, b instanceof A is ${b instanceof A}`;
  },
  // problem solver--> 95
  'tv-null-prototype-type-check': () => {
    const obj = Object.create(null);
    return `obj instanceof Object is ${obj instanceof Object}`;
  },
  // problem solver--> 96
  'tv-implicit-coercion-document-all': () => `(Conceptual - Browser only) In legacy browsers, \`document.all == null\` is true.`,
  // problem solver--> 97
  'tv-tofixed-rounding-behavior': ({ num }: { num: any }) => {
    const n = parseNumber(num);
    return `(${n}).toFixed(2) is "${n.toFixed(2)}"`;
  },
  // problem solver--> 98
  'tv-void-operator': () => `void(0) returns ${void 0}`,
  // problem solver--> 99
  'tv-constructor-of-primitives': () => `'hello'.constructor is ${'hello'.constructor.name}`,
  // problem solver--> 100
  'tv-tricky-subtraction': () => `[] - 1 is ${Number([]) - 1}`,
  // problem solver--> 101
  'tv-json-stringify-undefined': () => {
    const obj = { a: 1, b: undefined };
    const arr = [1, undefined, 3];
    return `Object: ${JSON.stringify(obj)}. Array: ${JSON.stringify(arr)}`;
  },
  // problem solver--> 102
  'tv-json-stringify-functions-symbols': () => {
    const obj = { a: () => {}, b: Symbol('s') };
    return `Stringified: ${JSON.stringify(obj)}`;
  },
  // problem solver--> 103
  'tv-json-stringify-circular': () => {
    const obj: any = { name: 'a' };
    obj.self = obj;
    try {
      JSON.stringify(obj);
    } catch(e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return 'Test failed.';
  },
  // problem solver--> 104
  'tv-isinteger-vs-modulo': ({ val }: { val: any }) => {
    const num = Number(val);
    return `Number.isInteger(${val}): ${Number.isInteger(num)}. ${val} % 1 === 0: ${num % 1 === 0}`;
  },
  // problem solver--> 105
  'tv-bigint-division': () => `10n / 3n is ${10n / 3n}`,
  // problem solver--> 106
  'tv-symbol-tostring': () => {
    const s = Symbol('desc');
    return `String(s) is "${String(s)}". s.toString() is "${s.toString()}"`;
  },
  // problem solver--> 107
  'tv-well-known-symbol-species': () => `(Conceptual) Class MyArray extends Array { static get [Symbol.species]() { return Array; } }. myArr.map(...) would return a standard Array, not MyArray.`,
  // problem solver--> 108
  'tv-well-known-symbol-hasinstance': () => `(Conceptual) class C { static [Symbol.hasInstance](inst) { return typeof inst === 'string'; } }. Now, \`'hello' instanceof C\` would be true.`,
  // problem solver--> 109
  'tv-well-known-symbol-tostringtag': () => {
    class MyType { get [Symbol.toStringTag]() { return "MyType"; } }
    return Object.prototype.toString.call(new MyType());
  },
  // problem solver--> 110
  'tv-constructor-of-null-error': () => {
    try {
      (null as any).constructor;
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return 'Test failed.';
  },
  // problem solver--> 111
  'tv-array-plus-number-coercion': () => `[1] + 2 is "${[1] + 2}"`,
  // problem solver--> 112
  'tv-array-minus-number-coercion': () => `[5] - 2 is ${Number([5]) - 2}`,
  // problem solver--> 113
  'tv-string-coercion-order': () => `1 + 2 + "3" is "${1 + 2 + "3"}". "1" + 2 + 3 is "${"1" + 2 + 3}"`,
  // problem solver--> 114
  'tv-parseint-with-null': () => `parseInt(null) is ${parseInt(null as any, 10)}`,
  // problem solver--> 115
  'tv-parseint-radix-pitfall': ({ str }: { str: string }) => {
    return `Without radix, parseInt("${str}") is ${parseInt(str)}. With radix 10, it's ${parseInt(str, 10)}.`;
  },
  // problem solver--> 116
  'tv-coercion-of-date-objects': () => {
    const d1 = new Date();
    const d2 = new Date(d1.getTime() + 1000);
    return `d2 - d1 is ${d2.getTime() - d1.getTime()}`;
  },
  // problem solver--> 117
  'tv-isfinite-vs-number-isfinite-2': ({ value }: { value: string }) => `Number.isFinite("${value}") is ${Number.isFinite(value as any)}. Global isFinite("${value}") is ${isFinite(value as any)}.`,
  // problem solver--> 118
  'tv-primitive-wrapper-truthiness': () => `if (new Boolean(false)) is truthy: ${!!new Boolean(false)}`,
  // problem solver--> 119
  'tv-to-primitive-conceptual': () => `(Conceptual) To convert an object to a primitive, JS first tries Symbol.toPrimitive, then valueOf, then toString.`,
  // problem solver--> 120
  'tv-loose-equality-pitfall-array-string': () => `[1,2] == "1,2" is ${[1, 2] == ("1,2" as any)}`,
  // problem solver--> 121
  'tv-minus-infinity': () => `-Infinity is a number: ${typeof -Infinity === 'number'}. 1 / -0 is ${1 / -0}`,
  // problem solver--> 122
  'tv-number-max-value': () => `Number.MAX_VALUE is ${Number.MAX_VALUE}. Adding to it gives ${Number.MAX_VALUE + 1e300}`,
  // problem solver--> 123
  'tv-number-min-value': () => `Number.MIN_VALUE is ${Number.MIN_VALUE}, the smallest positive number.`,
  // problem solver--> 124
  'tv-bitwise-and-for-truncation': ({ num }: { num: any }) => `${parseNumber(num)} | 0 is ${parseNumber(num) | 0}`,
  // problem solver--> 125
  'tv-instanceof-and-symbol-hasinstance': () => `(Conceptual) A class can implement a static method [Symbol.hasInstance] to override the instanceof behavior.`,
  // problem solver--> 126
  'tv-property-access-on-primitives': () => {
    let s: any = 'a';
    s.prop = true;
    return `s.prop is ${s.prop}`;
  },
  // problem solver--> 127
  'tv-new-target-conceptual': () => `(Conceptual) In a constructor, \`if (!new.target) throw 'Must be called with new';\` ensures it's not called as a regular function.`,
  // problem solver--> 128
  'tv-to-string-tag-customization': () => {
    class C { get [Symbol.toStringTag]() { return 'Custom'; } }
    return Object.prototype.toString.call(new C());
  },
  // problem solver--> 129
  'tv-regexp-object-type': () => `typeof /a/g is "${typeof /a/g}"`,
  // problem solver--> 130
  'tv-date-object-type': () => `typeof new Date() is "${typeof new Date()}"`,
  // problem solver--> 131
  'tv-plus-date-coercion': () => `+new Date() is ${+new Date()}, which is the timestamp.`,
  // problem solver--> 132
  'tv-symbol-to-number-error': () => {
    try {
      Number(Symbol('a'));
    } catch(e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return 'Test failed.';
  },
  // problem solver--> 133
  'tv-loose-equality-corner-case-1': () => `"" == [null] is ${"" == ([null] as any)}`,
  // problem solver--> 134
  'tv-loose-equality-corner-case-2': () => `false == "0" is ${false == ("0" as any)}`,
  // problem solver--> 135
  'tv-loose-equality-corner-case-3': () => `0 == [] is ${0 == ([] as any)}`,
  // problem solver--> 136
  'tv-loose-equality-corner-case-4': () => `" \\t\\r\\n" == 0 is ${" \t\r\n" == (0 as any)}`,
  // problem solver--> 137
  'tv-relational-comparison-null': () => `null > 0 is ${null > 0}, null < 0 is ${null < 0}, null >= 0 is ${null >= 0}`,
  // problem solver--> 138
  'tv-globalthis': () => `(Conceptual) \`globalThis\` provides a standard way to get the global object, e.g., \`window\` in browsers.`,
  // problem solver--> 139
  'tv-string-iterator': () => {
    const iterator = 'abc'[Symbol.iterator]();
    return `First value: ${iterator.next().value}`;
  },
  // problem solver--> 140
  'tv-bigint-and-json': () => {
    try {
      JSON.stringify({ val: 10n });
    } catch(e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return 'Test failed.';
  },
  // problem solver--> 141
  'tv-coercion-order-of-operations': () => `1 + 2 + "3" is "${1 + 2 + "3"}". "1" + 2 + 3 is "${"1" + 2 + 3}"`,
  // problem solver--> 142
  'tv-tostring-on-null-error': () => {
    try {
      (null as any).toString();
    } catch(e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return 'Test failed.';
  },
  // problem solver--> 143
  'tv-number-constructor-with-new': () => {
    const numObj = new Number(5);
    return `typeof numObj is '${typeof numObj}'. numObj.valueOf() is ${numObj.valueOf()}`;
  },
  // problem solver--> 144
  'tv-boolean-constructor-with-new': () => `if (new Boolean(false)) is truthy: ${!!new Boolean(false)}`,
  // problem solver--> 145
  'tv-object-keys-vs-for-in': () => {
    const proto = { inherited: true };
    const obj: {own?: boolean} = Object.create(proto);
    obj.own = true;
    let forInKeys: string[] = [];
    for(const key in obj) forInKeys.push(key);
    return `Object.keys: [${Object.keys(obj)}]. for...in: [${forInKeys.join(', ')}]`;
  },
  // problem solver--> 146
  'tv-infinity-minus-infinity': () => `Infinity - Infinity is ${Infinity - Infinity}`,
  // problem solver--> 147
  'tv-abstract-equality-table': () => `(Conceptual) Rule: If Type(x) is Number and Type(y) is String, return x == ToNumber(y). Many such rules exist.`,
  // problem solver--> 148
  'tv-string-concat-method': () => `'a'.concat('b', 'c') is "${'a'.concat('b', 'c')}"`,
  // problem solver--> 149
  'tv-string-to-number-bitwise': ({ str }: { str: string }) => `"${str}" | 0 is ${Number(str) | 0}`,
  // problem solver--> 150
  'tv-well-known-symbol-match': () => `(Conceptual) An object can define [Symbol.match] to act like a RegExp for 'string'.match(obj).`,
  // problem solver--> 151
  'tv-well-known-symbol-replace': () => `(Conceptual) An object can define [Symbol.replace] to be a custom replacer for 'string'.replace(obj, ...).`,
  // problem solver--> 152
  'tv-well-known-symbol-search': () => `(Conceptual) An object can define [Symbol.search] to be a custom search implementation for 'string'.search(obj).`,
  // problem solver--> 153
  'tv-well-known-symbol-split': () => `(Conceptual) An object can define [Symbol.split] to be a custom splitter for 'string'.split(obj).`,
  // problem solver--> 154
  'tv-well-known-symbol-isconcatspreadable': () => `(Conceptual) An array-like object with \`obj[Symbol.isConcatSpreadable] = false\` will not be flattened when used with \`[].concat(obj)\`.`,
  // problem solver--> 155
  'tv-well-known-symbol-unscopables': () => `(Conceptual) A legacy feature to hide properties from the deprecated \`with\` statement. \`Array.prototype[Symbol.unscopables]\` hides methods like 'keys' and 'values'.`,
  // problem solver--> 156
  'tv-tostring-on-object-create-null': () => {
    const obj = Object.create(null);
    try {
      (obj as any).toString();
    } catch(e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return 'Test failed.';
  },
  // problem solver--> 157
  'tv-coercion-with-empty-string': () => `Number("") is ${Number("")}`,
  // problem solver--> 158
  'tv-coercion-with-whitespace-string': () => `Number(" \\t\\n ") is ${Number(" \t\n ")}`,
  // problem solver--> 159
  'tv-coercion-of-hex-string': ({ hex }: { hex: string }) => `Number("${hex}") is ${Number(hex)}`,
  // problem solver--> 160
  'tv-negative-zero-identity': () => `5 + (-0) is ${5 + (-0)}`,
  // problem solver--> 161
  'tv-negative-zero-string': () => `String(-0) is "${String(-0)}"`,
  // problem solver--> 162
  'tv-number-tostring-vs-string-constructor': () => `(Conceptual) \`String(null)\` is "null", but \`null.toString()\` throws an error. \`String()\` is safer.`,
  // problem solver--> 163
  'tv-json-parse-reviver': () => {
    const json = '{"date":"2024-01-01T00:00:00.000Z"}';
    const obj = JSON.parse(json, (key, value) => key === 'date' ? new Date(value) : value);
    return `obj.date is a Date object: ${obj.date instanceof Date}`;
  },
  // problem solver--> 164
  'tv-json-stringify-replacer': () => {
    const obj = { a: 1, _b: 2 };
    const replacer = (key: string, value: any) => key.startsWith('_') ? undefined : value;
    return JSON.stringify(obj, replacer);
  },
  // problem solver--> 165
  'tv-tag-function-for-template-literal': () => {
    const highlight = (strings: TemplateStringsArray, ...values: any[]) => {
      let str = '';
      strings.forEach((string, i) => {
        str += string + (values[i] ? `<strong>${values[i]}</strong>` : '');
      });
      return str;
    };
    const name = 'JS';
    return highlight`Hello, ${name}!`;
  },




  
  // problem solver--> 166
  'tv-raw-string-from-tag-function': () => {
    const myTag = (strings: TemplateStringsArray) => strings.raw[0];
    return myTag`C:\Development\profile\`;
  },
  // problem solver--> 167
  'tv-tolocalestring': ({ num }: { num: any }) => parseNumber(num).toLocaleString('de-DE'),
  // problem solver--> 168
  'tv-intl-numberformat': () => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(1234.56);
  },
  // problem solver--> 169
  'tv-internal-class-property': () => `(Conceptual) The internal [[Class]] property specified the type for Object.prototype.toString. It's now replaced by Symbol.toStringTag.`,
  // problem solver--> 170
  'tv-coercion-with-boolean-object': () => `\`if (new Boolean(false))\` is true, because the object wrapper is truthy.`,
  // problem solver--> 171
  'tv-infinity-divided-by-infinity': () => `Infinity / Infinity is ${Infinity / Infinity}`,
  // problem solver--> 172
  'tv-number-plus-undefined': () => `5 + undefined is ${5 + (undefined as any)}`,
  // problem solver--> 173
  'tv-number-plus-null': () => `5 + null is ${5 + (null as any)}`,
  // problem solver--> 174
  'tv-parseint-infinity': () => `parseInt(Infinity) is ${parseInt(Infinity as any, 10)}`,
  // problem solver--> 175
  'tv-number-max-value-plus-one': () => `Number.MAX_VALUE * 2 is ${Number.MAX_VALUE * 2}`,
  // problem solver--> 176
  'tv-boxing-and-unboxing': () => `(Conceptual) "Boxing" is wrapping a primitive (e.g. \`new String('a')\`). "Unboxing" is getting the primitive value back (e.g. via \`.valueOf()\`).`,
  // problem solver--> 177
  'tv-symbol-as-object-property': () => {
    const sym = Symbol('id');
    const obj = { [sym]: 123 };
    return `obj[sym] is ${obj[sym]}`;
  },
  // problem solver--> 178
  'tv-symbol-property-enumeration': () => {
    const sym = Symbol('id');
    const obj = { [sym]: 123, a: 1 };
    return `Object.keys(obj) is [${Object.keys(obj)}]`;
  },
  // problem solver--> 179
  'tv-bigint-and-math-object': () => {
    try {
      Math.max(10n, 20n);
    } catch(e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return 'Test failed.';
  },
  // problem solver--> 180
  'tv-coercion-with-logical-not': ({ val }: { val: string }) => {
    const value = parseAsValue(val);
    return `!${val} is ${!value}`;
  },
  // problem solver--> 181
  'tv-tricky-plus-plus-coercion': () => {
    let arr: any = [];
    arr++;
    return `++[] results in ${arr}`;
  },
  // problem solver--> 182
  'tv-instanceof-and-realm-conceptual': () => `(Conceptual) An array from an iframe will fail \`myArray instanceof Array\` in the main window because it comes from a different global scope (realm) with a different Array constructor.`,
  // problem solver--> 183
  'tv-to-locale-string-options': ({ num }: { num: any }) => {
    return parseNumber(num).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
  },
  // problem solver--> 184
  'tv-number-constructor-vs-literal': () => {
    const literal = 5;
    const object = new Number(5);
    return `typeof literal: ${typeof literal}, typeof object: ${typeof object}`;
  },
  // problem solver--> 185
  'tv-loose-equality-with-document-all': () => `(Conceptual) \`document.all\` is a special "exotic" object. To be web-compatible, it's the only object that is falsy. \`document.all == null\` is true.`,
  // problem solver--> 186
  'tv-relational-comparison-and-valueof': () => {
    const obj = { value: 10, valueOf() { return this.value; } };
    return `obj > 5 is ${obj > 5}`;
  },
  // problem solver--> 187
  'tv-coercion-with-bitwise-or': ({ val }: { val: string }) => `"${val}" | 0 is ${Number(val) | 0}`,
  // problem solver--> 188
  'tv-getownpropertysymbols': () => {
    const sym = Symbol('s');
    const obj = { [sym]: 1 };
    return `Object.getOwnPropertySymbols(obj)[0] is ${Object.getOwnPropertySymbols(obj)[0].toString()}`;
  },
  // problem solver--> 189
  'tv-json-reviver-and-types': () => `(Conceptual) A reviver can check for a special property like \`__type: 'MyClass'\` on an object and use it to instantiate the correct class.`,
  // problem solver--> 190
  'tv-tagged-template-security': () => `(Conceptual) A tag function can inspect the string and value parts, escape any potentially malicious characters in the values, and then safely combine them.`,
  // problem solver--> 191
  'tv-bigint-and-relational-operators': () => `10n > 5 is ${10n > 5}. 5n < 10 is ${5n < 10}.`,
  // problem solver--> 192
  'tv-string-raw': () => String.raw`C:\Path\To\File`,
  // problem solver--> 193
  'tv-coercion-corner-case-1': () => `[1] - - [1] is ${[1] as any - -[1]}`,
  // problem solver--> 194
  'tv-coercion-corner-case-2': () => `!+[]+[]+![] is ${!+[]+[]+![]}`,
  // problem solver--> 195
  'tv-coercion-corner-case-3': () => `[1,2,3] + [4,5,6] is "${[1,2,3] + [4,5,6]}"`,
  // problem solver--> 196
  'tv-coercion-corner-case-4': () => `(+"1") evaluates to the number ${+"1"}`,
  // problem solver--> 197
  'tv-structured-clone': () => {
    const original = { date: new Date(), data: { value: 1 } };
    const copy = structuredClone(original);
    copy.data.value = 99;
    return `Original and copy are different objects: ${original !== copy}. Original value: ${original.data.value}.`;
  },
  // problem solver--> 198
  'tv-structured-clone-limitations': () => `(Conceptual) structuredClone cannot clone functions, Error objects, or DOM nodes. It also doesn't preserve an object's prototype chain.`,
  // problem solver--> 199
  'tv-object-hasown': () => {
    const proto = { inherited: true };
    const obj: {own?: boolean} = Object.create(proto);
    obj.own = true;
    return `Object.hasOwn(obj, 'own'): ${Object.hasOwn(obj, 'own')}. Object.hasOwn(obj, 'inherited'): ${Object.hasOwn(obj, 'inherited')}.`;
  },
  // problem solver--> 200
  'tv-final-summary': () => `(Conceptual) Always prefer strict equality (===) to avoid unpredictable type coercion. Use explicit conversions (e.g., Number(), String()) to make your code's intent clear.`,
};
