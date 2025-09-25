// problem solver--> 01
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

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "tvm-typeof-string": () => typeof "hello",
  // problem solver--> 02
  "tvm-typeof-number": () => typeof 123,
  // problem solver--> 03
  "tvm-typeof-boolean": () => typeof true,
  // problem solver--> 04
  "tvm-typeof-undefined": () => {
    let x;
    return typeof x;
  },
  // problem solver--> 05
  "tvm-typeof-object": () => typeof {},
  // problem solver--> 06
  "tvm-typeof-function": () => typeof function () {},
  // problem solver--> 07
  "tvm-typeof-null-bug": () => typeof null,
  // problem solver--> 08
  "tvm-typeof-array-bug": () => {
    const arr = [];
    return `typeof is '${typeof arr}'. Correct check: Array.isArray() is ${Array.isArray(
      arr
    )}.`;
  },
  // problem solver--> 09
  "tvm-check-for-null": () => {
    const val = null;
    return `val === null is ${val === null}`;
  },
  // problem solver--> 10
  "tvm-check-for-undefined": () => {
    let val;
    return `val === undefined is ${val === undefined}`;
  },
  // problem solver--> 11
  "tvm-check-is-array": () => Array.isArray([]),
  // problem solver--> 12
  "tvm-strict-equality-same-type": () => `5 === 5 is ${5 === 5}`,
  // problem solver--> 13
  "tvm-strict-equality-diff-type": () => `5 === "5" is ${5 === ("5" as any)}`,
  // problem solver--> 14
  "tvm-loose-equality-coercion": () => `5 == "5" is ${5 == ("5" as any)}`,
  // problem solver--> 15
  "tvm-loose-equality-null-undefined": () =>
    `null == undefined is ${null == undefined}`,
  // problem solver--> 16
  "tvm-strict-inequality": () => `5 !== "5" is ${5 !== ("5" as any)}`,
  // problem solver--> 17
  "tvm-loose-inequality": () => `5 != "5" is ${5 != ("5" as any)}`,
  // problem solver--> 18
  "tvm-nan-equality-pitfall": () => `NaN === NaN is ${NaN === NaN}`,
  // problem solver--> 19
  "tvm-check-is-nan": () => {
    const val = 0 / 0;
    return `Number.isNaN(0/0) is ${Number.isNaN(val)}`;
  },
  // problem solver--> 20
  "tvm-object-is-comparison": () => {
    const nanCheck = `Object.is(NaN, NaN) is ${Object.is(NaN, NaN)}.`;
    const zeroCheck = `Object.is(0, -0) is ${Object.is(0, -0)}.`;
    return `${nanCheck} | ${zeroCheck}`;
  },
  // problem solver--> 21
  "tvm-truthy-string": () => `Is 'hello' truthy? ${Boolean("hello")}`,
  // problem solver--> 22
  "tvm-truthy-number": () => `Is -1 truthy? ${Boolean(-1)}`,
  // problem solver--> 23
  "tvm-truthy-object": () => `Is {} truthy? ${Boolean({})}`,
  // problem solver--> 24
  "tvm-truthy-array": () => `Is [] truthy? ${Boolean([])}`,
  // problem solver--> 25
  "tvm-falsy-empty-string": () => `Is '' falsy? ${!Boolean("")}`,
  // problem solver--> 26
  "tvm-falsy-zero": () => `Is 0 falsy? ${!Boolean(0)}`,
  // problem solver--> 27
  "tvm-falsy-null": () => `Is null falsy? ${!Boolean(null)}`,
  // problem solver--> 28
  "tvm-falsy-undefined": () => `Is undefined falsy? ${!Boolean(undefined)}`,
  // problem solver--> 29
  "tvm-falsy-nan": () => `Is NaN falsy? ${!Boolean(NaN)}`,
  // problem solver--> 30
  "tvm-falsy-false": () => `Is false falsy? ${!Boolean(false)}`,
  // problem solver--> 31
  "tvm-double-not-truthy": () => `!!'hello' is ${!!"hello"}`,
  // problem solver--> 32
  "tvm-double-not-falsy": () => `!!0 is ${!!0}`,
  // problem solver--> 33
  "tvm-explicit-conversion-string": () => {
    const s = String(123);
    return `Value: ${s}, Type: ${typeof s}`;
  },
  // problem solver--> 34
  "tvm-explicit-conversion-number": () => {
    const n = Number("123");
    return `Value: ${n}, Type: ${typeof n}`;
  },
  // problem solver--> 35
  "tvm-explicit-conversion-boolean": () => {
    const b = Boolean(1);
    return `Value: ${b}, Type: ${typeof b}`;
  },
  // problem solver--> 36
  "tvm-implicit-coercion-add": () => `Result of 5 + "5" is "${5 + "5"}"`,
  // problem solver--> 37
  "tvm-implicit-coercion-subtract": () =>
    `Result of "5" - 5 is ${Number("5") - 5}`,
  // problem solver--> 38
  "tvm-implicit-coercion-if": () => {
    if (1) {
      return "The number 1 was coerced to true.";
    }
    return "This should not be reached.";
  },
  // problem solver--> 39
  "tvm-parseint-basic": () => parseInt("100px", 10),
  // problem solver--> 40
  "tvm-parseint-radix": () => parseInt("101", 2),
  // problem solver--> 41
  "tvm-parsefloat-basic": () => parseFloat("3.14"),
  // problem solver--> 42
  "tvm-number-tostring": () => (10).toString(),
  // problem solver--> 43
  "tvm-number-tostring-radix": () => (255).toString(16),
  // problem solver--> 44
  "tvm-object-comparison": () => `({} === {}) is ${{} === {}}`,
  // problem solver--> 45
  "tvm-array-comparison": () => `([] === []) is ${[] === []}`,
  // problem solver--> 46
  "tvm-object-reference-assignment": () => {
    const obj1 = { a: 1 };
    const obj2 = obj1;
    obj2.a = 2;
    return `Original obj1.a is now ${obj1.a}`;
  },
  // problem solver--> 47
  "tvm-primitive-assignment": () => {
    let prim1 = 10;
    let prim2 = prim1;
    prim2 = 20;
    return `Original prim1 is still ${prim1}`;
  },
  // problem solver--> 48
  "tvm-pass-primitive-to-function": () => {
    let myVar = 10;
    function modify(val: number) {
      val = 20;
    }
    modify(myVar);
    return `Original myVar is still ${myVar}`;
  },
  // problem solver--> 49
  "tvm-pass-object-to-function": () => {
    const myObj = { a: 1 };
    function modify(obj: { a: number }) {
      obj.a = 2;
    }
    modify(myObj);
    return `Original myObj.a is now ${myObj.a}`;
  },
  // problem solver--> 50
  "tvm-reassign-object-param": () => {
    const myObj = { a: 1 };
    function modify(obj: { a: number }) {
      obj = { a: 99 };
    }
    modify(myObj);
    return `Original myObj is unchanged: ${JSON.stringify(myObj)}`;
  },
  // problem solver--> 51
  "tvm-infinity-type": () => typeof Infinity,
  // problem solver--> 52
  "tvm-infinity-comparison": () =>
    `Infinity > Number.MAX_VALUE is ${Infinity > Number.MAX_VALUE}`,
  // problem solver--> 53
  "tvm-division-by-zero": () => 10 / 0,
  // problem solver--> 54
  "tvm-zero-divided-by-zero": () => 0 / 0,
  // problem solver--> 55
  "tvm-infinity-minus-infinity": () => Infinity - Infinity,
  // problem solver--> 56
  "tvm-negative-infinity": () => -10 / 0,
  // problem solver--> 57
  "tvm-isfinite": () => `isFinite(Infinity) is ${isFinite(Infinity)}`,
  // problem solver--> 58
  "tvm-tofixed": () => (3.14159).toFixed(2),
  // problem solver--> 59
  "tvm-toprecision": () => (123.456).toPrecision(4),
  // problem solver--> 60
  "tvm-toexponential": () => (1000).toExponential(),
  // problem solver--> 61
  "tvm-unary-plus-coercion": () => {
    const val = +"100";
    return `Value: ${val}, Type: ${typeof val}`;
  },
  // problem solver--> 62
  "tvm-string-wrapper-object": () => {
    const prim = "hi";
    const obj = new String("hi");
    return `typeof prim: ${typeof prim}, typeof obj: ${typeof obj}, prim == obj: ${
      prim == obj
    }, prim === obj: ${prim === obj}`;
  },
  // problem solver--> 63
  "tvm-number-wrapper-object": () => {
    const obj = new Number(10);
    return `typeof obj: ${typeof obj}`;
  },
  // problem solver--> 64
  "tvm-boolean-wrapper-object": () => {
    const wrapper = new Boolean(false);
    return `if (new Boolean(false)) evaluates to ${Boolean(wrapper)}`;
  },
  // problem solver--> 65
  "tvm-autoboxing": () =>
    `(Conceptual) When you call 'hello'.toUpperCase(), JS temporarily creates a String object wrapper to access the method.`,
  // problem solver--> 66
  "tvm-symbol-basic": () => `typeof Symbol('id') is "${typeof Symbol("id")}"`,
  // problem solver--> 67
  "tvm-symbol-uniqueness": () =>
    `Symbol('id') === Symbol('id') is ${Symbol("id") === Symbol("id")}`,
  // problem solver--> 68
  "tvm-symbol-as-key": () => {
    const id = Symbol("id");
    const obj = { [id]: 123 };
    return `Value is ${obj[id]}. Not in JSON: ${JSON.stringify(obj)}`;
  },
  // problem solver--> 69
  "tvm-symbol-for": () =>
    `Symbol.for('key') === Symbol.for('key') is ${
      Symbol.for("key") === Symbol.for("key")
    }`,
  // problem solver--> 70
  "tvm-symbol-keyfor": () => {
    const sym = Symbol.for("sharedKey");
    return `Symbol.keyFor(sym) is "${Symbol.keyFor(sym)}"`;
  },
  // problem solver--> 71
  "tvm-bigint-basic": () => `typeof 123n is "${typeof 123n}"`,
  // problem solver--> 72
  "tvm-bigint-and-number-type-error": () => {
    try {
      const result = 1n + 2;
      return `This should not be reached. Result was ${result}`;
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 73
  "tvm-bigint-comparison": () =>
    `10n > 9 is ${10n > 9}. 10n == 10 is ${10n == 10}`,
  // problem solver--> 74
  "tvm-bigint-strict-equality": () => `10n === 10 is ${10n === 10}`,
  // problem solver--> 75
  "tvm-bigint-math-functions": () => {
    try {
      const result = Math.max(1n, 2n);
      return `This should not be reached. Result was ${result}`;
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
  },
  // problem solver--> 76
  "tvm-object-prototype-tostring": () => Object.prototype.toString.call([]),
  // problem solver--> 77
  "tvm-constructor-property": () => {
    function Person() {}
    const p = new (Person as any)();
    return `p.constructor.name is "${p.constructor.name}"`;
  },
  // problem solver--> 78
  "tvm-primitive-methods-autoboxing": () => "hello".toUpperCase(),
  // problem solver--> 79
  "tvm-valueof-method": () => {
    const obj = new Number(42);
    return obj.valueOf();
  },
  // problem solver--> 80
  "tvm-to-primitive-conceptual": () =>
    `(Conceptual) An object with [Symbol.toPrimitive] can control its conversion to a string, number, or default primitive.`,
  // problem solver--> 81
  "tvm-loose-equality-array-string": () =>
    `[42] == '42' is ${
      [42] == "42"
    }. The array is converted to the string '42'.`,
  // problem solver--> 82
  "tvm-loose-equality-object-string": () => {
    const obj = { valueOf: () => 10 };
    return `({ valueOf: () => 10 }) == '10' is ${obj == "10"}`;
  },
  // problem solver--> 83
  "tvm-plus-operator-object": () => `10 + {} results in "${10 + {}}"`,
  // problem solver--> 84
  "tvm-json-stringify-types": () => {
    const obj = { u: undefined, s: Symbol("s"), f: function () {} };
    return `Result: ${JSON.stringify(obj)}. All were omitted.`;
  },
  // problem solver--> 85
  "tvm-prototype-of-primitives": () =>
    `Object.getPrototypeOf('') === String.prototype is ${
      Object.getPrototypeOf("") === String.prototype
    }`,
  // problem solver--> 86
  "tvm-constructor-of-primitives": () =>
    `(123).constructor === Number is ${(123).constructor === Number}`,
  // problem solver--> 87
  "tvm-instanceof-primitive-wrappers": () =>
    `'hi' instanceof String is ${
      "hi" instanceof String
    }. new String('hi') instanceof String is ${
      new String("hi") instanceof String
    }.`,
  // problem solver--> 88
  "tvm-loose-equality-array-boolean": () =>
    `[] == false is ${
      [] == false
    }. [] coerces to '', then to 0. false coerces to 0.`,
  // problem solver--> 89
  "tvm-relational-operator-coercion": () =>
    `null > 0 is ${null > 0} (false), null >= 0 is ${
      null >= 0
    } (true), but undefined > 0 is ${undefined > 0} (false).`,
  // problem solver--> 90
  "tvm-object-keys-vs-for-in": () => {
    const proto = { inherited: 1 };
    const obj = Object.create(proto);
    obj.own = 2;
    let forInKeys = [];
    for (const key in obj) forInKeys.push(key);
    let objectKeys = Object.keys(obj);
    return `for...in: [${forInKeys.join(
      ", "
    )}]. Object.keys: [${objectKeys.join(", ")}]`;
  },
  // problem solver--> 91
  "tvm-property-descriptor-defaults": () => {
    const obj = {};
    Object.defineProperty(obj, "a", { value: 1 });
    const descriptor = Object.getOwnPropertyDescriptor(obj, "a");
    return `writable is ${descriptor.writable}, enumerable is ${descriptor.enumerable}, configurable is ${descriptor.configurable}.`;
  },
  // problem solver--> 92
  "tvm-is-frozen": () => {
    const obj = {};
    Object.freeze(obj);
    return `Is frozen: ${Object.isFrozen(obj)}`;
  },
  // problem solver--> 93
  "tvm-is-sealed": () => {
    const obj = {};
    Object.seal(obj);
    return `Is sealed: ${Object.isSealed(obj)}`;
  },
  // problem solver--> 94
  "tvm-is-extensible": () => {
    const obj = {};
    Object.preventExtensions(obj);
    return `Is extensible: ${Object.isExtensible(obj)}`;
  },
  // problem solver--> 95
  "tvm-globalthis": () =>
    `globalThis is available and refers to the global object.`,
  // problem solver--> 96
  "tvm-well-known-symbol-tostringtag": () => {
    class MyType {
      get [Symbol.toStringTag]() {
        return "MyType";
      }
    }
    return Object.prototype.toString.call(new MyType());
  },
  // problem solver--> 97
  "tvm-well-known-symbol-hasinstance": () =>
    `(Conceptual) class C { static [Symbol.hasInstance](inst) { return typeof inst === 'string'; } }. Now, \`'hello' instanceof C\` would be true.`,
  // problem solver--> 98
  "tvm-well-known-symbol-isconcatspreadable": () => {
    const arr = [3, 4];
    (arr as any)[Symbol.isConcatSpreadable] = false;
    return `Result of [1,2].concat(arr) is [${JSON.stringify(
      [1, 2].concat(arr as any)
    )}]`;
  },
  // problem solver--> 99
  "tvm-bigint-division": () => `10n / 3n is ${10n / 3n}`,
  // problem solver--> 100
  "tvm-negative-zero": () => {
    const negZero = -0;
    return `negZero === 0 is ${negZero === 0}. 1 / negZero is ${1 / negZero}.`;
  },
  // problem solver--> 101
  "tvm-abstract-equality-algorithm": () =>
    `(Conceptual) '==' follows complex rules. E.g., if comparing String and Number, it converts the String to a Number.`,
  // problem solver--> 102
  "tvm-tostring-vs-valueof": () =>
    `(Conceptual) When coercing an object, JS first tries .valueOf(). If it doesn't return a primitive, it tries .toString().`,
  // problem solver--> 103
  "tvm-coercion-edge-case-array-plus-array": () =>
    `[1] + [2] is "${
      [1] + [2]
    }". Both arrays are converted to strings ('1' and '2') and concatenated.`,
  // problem solver--> 104
  "tvm-coercion-edge-case-object-plus-array": () =>
    `{} + [] in a console often evaluates to 0. It's parsed as an empty code block {} followed by the expression +[], which coerces [] to 0.`,
  // problem solver--> 105
  "tvm-boolean-constructor-pitfall": () =>
    `if (new Boolean(false)) is true, because the *object* is truthy.`,
  // problem solver--> 106
  "tvm-object-create-null-safety": () => {
    const map = Object.create(null);
    map.toString = "value";
    return `map.toString is the string "${map.toString}", not a function.`;
  },
  // problem solver--> 107
  "tvm-number-max-safe-integer": () =>
    `Max safe integer: ${Number.MAX_SAFE_INTEGER}. Next integer: ${
      Number.MAX_SAFE_INTEGER + 2
    }. Notice the precision loss.`,
  // problem solver--> 108
  "tvm-number-epsilon": () => {
    const sum = 0.1 + 0.2;
    const isEqual = Math.abs(sum - 0.3) < Number.EPSILON;
    return `0.1 + 0.2 === 0.3 is ${
      sum === 0.3
    }. Safe comparison with EPSILON: ${isEqual}.`;
  },
  // problem solver--> 109
  "tvm-well-known-symbol-species": () =>
    `(Conceptual) Allows a subclass to specify that methods like .map() should return base class instances (e.g., Array) instead of subclass instances.`,
  // problem solver--> 110
  "tvm-well-known-symbol-match": () =>
    `(Conceptual) An object with [Symbol.match] can define custom logic for String.prototype.match(obj).`,
  // problem solver--> 111
  "tvm-well-known-symbol-replace": () =>
    `(Conceptual) An object with [Symbol.replace] can define custom logic for String.prototype.replace(obj, ...).`,
  // problem solver--> 112
  "tvm-well-known-symbol-search": () =>
    `(Conceptual) An object with [Symbol.search] can define custom logic for String.prototype.search(obj).`,
  // problem solver--> 113
  "tvm-well-known-symbol-split": () =>
    `(Conceptual) An object with [Symbol.split] can define custom logic for String.prototype.split(obj).`,
  // problem solver--> 114
  "tvm-well-known-symbol-unscopables": () =>
    `(Conceptual) A legacy feature to hide properties from the deprecated 'with' statement.`,
  // problem solver--> 115
  "tvm-proxy-get-trap-type": () =>
    `(Conceptual) A proxy 'get' trap can check if a property exists. If not, it can return a type-appropriate default (e.g., 0 for numbers, '' for strings).`,
  // problem solver--> 116
  "tvm-proxy-set-trap-type": () =>
    `(Conceptual) A proxy 'set' trap can check 'typeof value' against a schema before allowing the assignment, throwing an error if the type is incorrect.`,
  // problem solver--> 117
  "tvm-reflect-getprototypeof": () =>
    `Reflect.getPrototypeOf({}) === Object.prototype is ${
      Reflect.getPrototypeOf({}) === Object.prototype
    }`,
  // problem solver--> 118
  "tvm-structuredclone-types": () =>
    `(Conceptual) const original = { d: new Date() }; const copy = structuredClone(original); copy.d !== original.d, and copy.d is a Date object.`,
  // problem solver--> 119
  "tvm-structuredclone-error": () =>
    `(Conceptual) structuredClone(function(){}) throws a "DataCloneError" because functions cannot be cloned.`,
  // problem solver--> 120
  "tvm-weakmap-value-types": () =>
    `(Conceptual) A WeakMap's values can be anything: let key = {}; let map = new WeakMap(); map.set(key, 'primitive value'); is valid.`,
  // problem solver--> 121
  "tvm-weakset-value-types": () => {
    try {
      new WeakSet([1, 2, 3] as any);
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return "This should not be reached.";
  },
  // problem solver--> 122
  "tvm-coercion-relational-null": () =>
    `null >= 0 is ${null >= 0} (true), but null > 0 is ${null > 0} (false).`,
  // problem solver--> 123
  "tvm-coercion-relational-undefined": () =>
    `undefined > 0 is ${undefined > 0} (false), and undefined < 0 is ${
      undefined < 0
    } (false).`,
  // problem solver--> 124
  "tvm-boxing-unboxing-conceptual": () =>
    `(Conceptual) Boxing: primitive -> wrapper object. Unboxing: wrapper object -> primitive. Happens implicitly, e.g., when calling methods on primitives.`,
  // problem solver--> 125
  "tvm-temporal-api-conceptual": () =>
    `(Conceptual) A future API to replace Date. Provides immutable objects like Temporal.PlainDate and Temporal.ZonedDateTime for unambiguous date/time math.`,
  // problem solver--> 126
  "tvm-primitive-property-assignment": () => {
    "use strict";
    try {
      let s: any = "hello";
      s.prop = "test"; // Fails silently in non-strict, throws in strict
      return `Property assignment failed as expected. s.prop is ${s.prop}.`;
    } catch (e) {
      return `Caught expected TypeError in strict mode.`;
    }
  },
  // problem solver--> 127
  "tvm-object-is-gotcha-objects": () =>
    `Object.is({}, {}) is ${Object.is({}, {})}, same as '===' for objects.`,
  // problem solver--> 128
  "tvm-abstract-relational-comparison": () =>
    `(Conceptual) The < operator calls ToPrimitive on operands. For arrays, this means .toString(). So ['2'] < ['10'] is false because "2" > "10".`,
  // problem solver--> 129
  "tvm-prototype-pollution-conceptual": () =>
    `(Conceptual) A vulnerability where unsafe object merges can modify Object.prototype, affecting all objects.`,
  // problem solver--> 130
  "tvm-private-brand-check": () => {
    class C {
      #brand;
      static isC(obj: any) {
        return #brand in obj;
      }
    }
    return `Is instance? ${C.isC(new C())}. Is object? ${C.isC({})}.`;
  },
  // problem solver--> 131
  "tvm-instanceof-and-primitives": () =>
    `true instanceof Boolean is ${
      true instanceof Boolean
    }. new Boolean(true) instanceof Boolean is ${
      new Boolean(true) instanceof Boolean
    }.`,
  // problem solver--> 132
  "tvm-void-operator": () =>
    `void 0 is ${void 0}. It evaluates the expression and returns undefined.`,
  // problem solver--> 133
  "tvm-comma-operator-return": () =>
    `The expression (1, 2, 3) evaluates to ${eval("(1, 2, 3)")}`,
  // problem solver--> 134
  "tvm-instanceof-and-prototypes": () =>
    `(Conceptual) 'obj instanceof Ctor' checks if 'Ctor.prototype' is in 'obj's prototype chain.`,
  // problem solver--> 135
  "tvm-nullish-coalescing-operator": () =>
    `0 ?? 'default' is ${0 ?? "default"}. null ?? 'default' is ${
      null ?? "default"
    }.`,
  // problem solver--> 136
  "tvm-optional-chaining-operator": () => `null?.prop is ${null?.prop}`,
  // problem solver--> 137
  "tvm-logical-nullish-assignment": () => {
    let x = null;
    x ??= 10;
    return `x is now ${x}`;
  },
  // problem solver--> 138
  "tvm-logical-and-assignment": () => {
    let x: any = { val: 1 };
    x &&= { val: 2 };
    return `x is now ${JSON.stringify(x)}`;
  },
  // problem solver--> 139
  "tvm-logical-or-assignment": () => {
    let x = 0;
    x ||= 10;
    return `x is now ${x}`;
  },
  // problem solver--> 140
  "tvm-numeric-separators": () =>
    `1_000_000 === 1000000 is ${1_000_000 === 1000000}`,
  // problem solver--> 141
  "tvm-coercion-corner-case-1": () => `[] + {} is "${[] + {}}"`,
  // problem solver--> 142
  "tvm-coercion-corner-case-2": () =>
    `In a console, {} + [] is often 0, as {} is treated as a code block. In this context, it's ${eval(
      "{} + []"
    )}`,
  // problem solver--> 143
  "tvm-coercion-corner-case-3": () =>
    `true + true is ${Number(true) + Number(true)}`,
  // problem solver--> 144
  "tvm-coercion-corner-case-4": () => `[1,2] + [3,4] is "${[1, 2] + [3, 4]}"`,
  // problem solver--> 145
  "tvm-coercion-corner-case-5": () =>
    `!+[]+[]+![] is "${!+[] + [] + ![]}" which is "truefalse"`,
  // problem solver--> 146
  "tvm-object-is-vs-equals-summary": () =>
    `(Conceptual) '==' coerces type. '===' compares type and value. 'Object.is' is like '===' but treats NaN as equal to itself and +0/-0 as different.`,
  // problem solver--> 147
  "tvm-check-for-object-not-null": () => {
    const isObject = (val: any) =>
      val !== null && typeof val === "object" && !Array.isArray(val);
    return `isObject({}): ${isObject({})}, isObject([]): ${isObject(
      []
    )}, isObject(null): ${isObject(null)}`;
  },
  // problem solver--> 148
  "tvm-getownpropertydescriptors": () => {
    const obj = { a: 1 };
    return JSON.stringify(Object.getOwnPropertyDescriptors(obj), null, 2);
  },
  // problem solver--> 149
  "tvm-is-arraylike": () => {
    const isArrayLike = (val: any) =>
      val != null && typeof val[Symbol.iterator] === "function";
    return `isArrayLike([]): ${isArrayLike(
      []
    )}, isArrayLike('abc'): ${isArrayLike(
      "abc"
    )}, isArrayLike({}): ${isArrayLike({})}`;
  },
  // problem solver--> 150
  "tvm-string-is-well-formed": () => {
    const valid = "abc";
    const invalid = "\uD800"; // Lone surrogate
    return `'abc'.isWellFormed(): ${valid.isWellFormed()}. '\\uD800'.isWellFormed(): ${invalid.isWellFormed()}`;
  },
  // problem solver--> 151
  "tvm-finalization-registry": () =>
    `(Conceptual) An API to register callbacks that are triggered after an object has been garbage collected. Used for resource cleanup.`,
  // problem solver--> 152
  "tvm-error-cause": () => {
    try {
      throw new Error("Outer", { cause: new Error("Inner") });
    } catch (e: any) {
      return `Caught error with cause: ${e.cause.message}`;
    }
  },
  // problem solver--> 153
  "tvm-object-hasown": () => {
    const obj = Object.create({ inherited: true });
    obj.own = true;
    return `Object.hasOwn(obj, 'own'): ${Object.hasOwn(
      obj,
      "own"
    )}. Object.hasOwn(obj, 'inherited'): ${Object.hasOwn(obj, "inherited")}`;
  },
  // problem solver--> 154
  "tvm-coercion-with-custom-valueof": () => {
    const obj = { valueOf: () => 42 };
    return `1 + obj is ${1 + (obj as any)}`;
  },
  // problem solver--> 155
  "tvm-coercion-with-custom-tostring": () => {
    const obj = { toString: () => "hello" };
    return `'world ' + obj is "${"world " + obj}"`;
  },
  // problem solver--> 156
  "tvm-array-plus-number": () => `[1, 2] + 3 is "${[1, 2] + 3}"`,
  // problem solver--> 157
  "tvm-empty-string-to-number": () => `Number('') is ${Number("")}`,
  // problem solver--> 158
  "tvm-whitespace-string-to-number": () => `Number('   ') is ${Number("   ")}`,
  // problem solver--> 159
  "tvm-true-to-number": () => `Number(true) is ${Number(true)}`,
  // problem solver--> 160
  "tvm-false-to-number": () => `Number(false) is ${Number(false)}`,
  // problem solver--> 161
  "tvm-undefined-to-number": () => `Number(undefined) is ${Number(undefined)}`,
  // problem solver--> 162
  "tvm-null-to-number": () => `Number(null) is ${Number(null)}`,
  // problem solver--> 163
  "tvm-object-to-number": () => `Number({}) is ${Number({})}`,
  // problem solver--> 164
  "tvm-array-to-number": () =>
    `Number([]) is ${Number([])}. Number([5]) is ${Number([
      5,
    ])}. Number([1,2]) is ${Number([1, 2])}.`,
  // problem solver--> 165
  "tvm-isinteger": () =>
    `Number.isInteger(10) is ${Number.isInteger(
      10
    )}. Number.isInteger(10.5) is ${Number.isInteger(10.5)}.`,
  // problem solver--> 166
  "tvm-issafeinteger": () =>
    `Number.isSafeInteger(2**53 - 1) is ${Number.isSafeInteger(
      2 ** 53 - 1
    )}. Number.isSafeInteger(2**53) is ${Number.isSafeInteger(2 ** 53)}.`,
  // problem solver--> 167
  "tvm-equality-empty-arrays": () =>
    `[] == [] is ${[] == []}. [] == ![] is ${[] == ![]}.`,
  // problem solver--> 168
  "tvm-equality-string-vs-wrapper": () => {
    const prim = "a";
    const obj = new String("a");
    return `== is ${prim == obj}, === is ${prim === obj}`;
  },
  // problem solver--> 169
  "tvm-coercion-to-primitive-hint-number": () => {
    const obj = {
      [Symbol.toPrimitive]: (hint: string) =>
        hint === "number" ? 42 : "hello",
    };
    return `obj * 2 is ${(obj as any) * 2}`;
  },
  // problem solver--> 170
  "tvm-coercion-to-primitive-hint-string": () => {
    const obj = {
      [Symbol.toPrimitive]: (hint: string) =>
        hint === "number" ? 42 : "hello",
    };
    return `String(obj) is "${String(obj)}"`;
  },
  // problem solver--> 171
  "tvm-coercion-in-relational-operators": () => `[2] > 1 is ${[2] > 1}`,
  // problem solver--> 172
  "tvm-proxy-has-trap": () => {
    const proxy = new Proxy({}, { has: () => false });
    return `'a' in proxy is ${"a" in proxy}`;
  },
  // problem solver--> 173
  "tvm-proxy-delete-trap": () => {
    "use strict";
    try {
      const proxy = new Proxy({ a: 1 }, { deleteProperty: () => false });
      delete (proxy as any).a;
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return "This should not be reached.";
  },
  // problem solver--> 174
  "tvm-reflect-has": () =>
    `Reflect.has({a:1}, 'a') is ${Reflect.has({ a: 1 }, "a")}`,
  // problem solver--> 175
  "tvm-reflect-delete": () => {
    const obj = { a: 1 };
    Reflect.deleteProperty(obj, "a");
    return `obj.a is now ${obj.a}`;
  },
  // problem solver--> 176
  "tvm-property-enumerable": () => {
    const obj = { a: 1 };
    Object.defineProperty(obj, "b", { value: 2, enumerable: false });
    return `Object.keys(obj) is [${Object.keys(obj)}]`;
  },
  // problem solver--> 177
  "tvm-property-writable": () => {
    "use strict";
    try {
      const obj = {};
      Object.defineProperty(obj, "a", { value: 1, writable: false });
      (obj as any).a = 2;
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return "This should not be reached.";
  },
  // problem solver--> 178
  "tvm-property-configurable": () => {
    "use strict";
    try {
      const obj = {};
      Object.defineProperty(obj, "a", { value: 1, configurable: false });
      delete (obj as any).a;
    } catch (e: any) {
      return `Caught expected error: ${e.message}`;
    }
    return "This should not be reached.";
  },
  // problem solver--> 179
  "tvm-accessor-descriptor": () => {
    const obj = {
      _val: 0,
      get val() {
        return this._val;
      },
      set val(v) {
        this._val = v + 1;
      },
    };
    obj.val = 10;
    return `Getter returns: ${obj.val}`;
  },
  // problem solver--> 180
  "tvm-data-descriptor": () =>
    `(Conceptual) A standard property descriptor with 'value' and 'writable' keys.`,
  // problem solver--> 181
  "tvm-getownpropertynames": () => {
    const obj = { a: 1 };
    Object.defineProperty(obj, "b", { value: 2, enumerable: false });
    return `Names: ${Object.getOwnPropertyNames(obj).join(", ")}`;
  },
  // problem solver--> 182
  "tvm-getownpropertysymbols": () => {
    const sym = Symbol("s");
    const obj = { [sym]: 1 };
    return `Symbols: ${Object.getOwnPropertySymbols(obj)[0].toString()}`;
  },
  // problem solver--> 183
  "tvm-reflect-ownkeys": () => {
    const sym = Symbol("s");
    const obj = { a: 1, [sym]: 2 };
    return `Keys: ${Reflect.ownKeys(obj)
      .map((k) => k.toString())
      .join(", ")}`;
  },
  // problem solver--> 184
  "tvm-isprototypeof": () => {
    function C() {}
    const c = new (C as any)();
    return `C.prototype.isPrototypeOf(c): ${C.prototype.isPrototypeOf(c)}`;
  },
  // problem solver--> 185
  "tvm-object-fromEntries": () =>
    JSON.stringify(
      Object.fromEntries([
        ["a", 1],
        ["b", 2],
      ])
    ),
  // problem solver--> 186
  "tvm-coercion-with-equality-null": () => `null == 0 is ${null == 0}`,
  // problem solver--> 187
  "tvm-coercion-with-equality-empty-string": () => `'' == 0 is ${"" == 0}`,
  // problem solver--> 188
  "tvm-coercion-with-equality-false": () => `'' == false is ${"" == false}`,
  // problem solver--> 189
  "tvm-json-reviver": () =>
    `(Conceptual) JSON.parse(json, (key, val) => isDateStr(val) ? new Date(val) : val)`,
  // problem solver--> 190
  "tvm-json-replacer": () =>
    `(Conceptual) JSON.stringify(obj, (key, val) => key === 'secret' ? undefined : val)`,
  // problem solver--> 191
  "tvm-error-cause-property": () => {
    try {
      throw new Error("Outer", { cause: new Error("Inner") });
    } catch (e: any) {
      return `Caught error with cause: ${e.cause.message}`;
    }
  },
  // problem solver--> 192
  "tvm-finalization-registry-conceptual": () =>
    `(Conceptual) A way to schedule a callback to run after an object has been garbage collected, for cleaning up external resources.`,
  // problem solver--> 193
  "tvm-weakref-conceptual": () =>
    `(Conceptual) A WeakRef creates a weak reference to an object, allowing it to be garbage collected. You must call .deref() to access the object.`,
  // problem solver--> 194
  "tvm-at-method-array": () =>
    `['a','b','c'].at(-1) is "${["a", "b", "c"].at(-1)}"`,
  // problem solver--> 195
  "tvm-at-method-string": () => `'abc'.at(-1) is "${"abc".at(-1)}"`,
  // problem solver--> 196
  "tvm-string-is-well-formed": () =>
    `'abc'.isWellFormed() is ${"abc".isWellFormed()}. '\\uD800'.isWellFormed() is ${"\uD800".isWellFormed()}.`,
  // problem solver--> 197
  "tvm-string-to-well-formed": () =>
    `'\\uD800'.toWellFormed() is "${"\uD800".toWellFormed()}"`,
  // problem solver--> 198
  "tvm-shadowrealm-api-conceptual": () =>
    `(Conceptual) A new API for creating isolated JavaScript environments to securely run code.`,
  // problem solver--> 199
  "tvm-memory-model-conceptual": () =>
    `(Conceptual) Primitives and references go on the Stack (fast, static memory). Objects and functions go on the Heap (slower, dynamic memory).`,
  // problem solver--> 200
  "tvm-final-summary": () =>
    `(Conceptual) Master JS types by preferring '===' over '==', understanding implicit coercion rules for operators like '+' and '==', and knowing the critical difference between pass-by-value (primitives) and pass-by-reference (objects).`,
};
