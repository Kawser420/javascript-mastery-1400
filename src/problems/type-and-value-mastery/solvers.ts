const parseAsValue = (input: any): any => {
  if (input === null || input === undefined) return input;
  const trimmed = String(input).trim().toLowerCase();
  if (trimmed === "null") return null;
  if (trimmed === "undefined") return undefined;
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === '""' || trimmed === "''") return "";
  if (trimmed === "nan") return NaN;
  if (!isNaN(Number(trimmed)) && trimmed !== "") return Number(trimmed);
  return input;
};

let stateCounter = 0;

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "tvm-typeof-string": () => `typeof 'hello' is: "${typeof "hello"}"`,
  // problem solver--> 02
  "tvm-typeof-number": () => `typeof 42 is: "${typeof 42}"`,
  // problem solver--> 03
  "tvm-typeof-boolean": () => `typeof true is: "${typeof true}"`,
  // problem solver--> 04
  "tvm-typeof-undefined": () => {
    let x;
    return `typeof x is: "${typeof x}"`;
  },
  // problem solver--> 05
  "tvm-typeof-null-bug": () => `typeof null is: "${typeof null}"`,
  // problem solver--> 06
  "tvm-typeof-object": () => `typeof {} is: "${typeof {}}"`,
  // problem solver--> 07
  "tvm-typeof-array": () =>
    `typeof [] is "${typeof []}". Correct check: Array.isArray([]) is ${Array.isArray(
      []
    )}`,
  // problem solver--> 08
  "tvm-typeof-function": () => `typeof (() => {}) is: "${typeof (() => {})}"`,
  // problem solver--> 09
  "tvm-typeof-symbol": () => {
    const sym = Symbol("id");
    return `typeof Symbol('id') is: "${typeof sym}"`;
  },
  // problem solver--> 10
  "tvm-typeof-bigint": () => {
    const big = 123n;
    return `typeof 123n is: "${typeof big}"`;
  },
  // problem solver--> 11
  "tvm-primitive-vs-object-string": () => {
    const primitive = "hello";
    const object = new String("hello");
    return `typeof '${primitive}' is "${typeof primitive}". typeof new String('${primitive}') is "${typeof object}".`;
  },
  // problem solver--> 12
  "tvm-value-of-null": () => String(null),
  // problem solver--> 13
  "tvm-value-of-undefined": () => String(undefined),
  // problem solver--> 14
  "tvm-dynamic-typing": () => {
    let x: any = 10;
    const type1 = typeof x;
    x = "hello";
    const type2 = typeof x;
    return `Initial type: ${type1}, Reassigned type: ${type2}`;
  },
  // problem solver--> 15
  "tvm-pass-by-value": () => {
    let a = 10;
    function modify(val: number) {
      val = 20;
    }
    modify(a);
    return `Original 'a' is still ${a}. Primitives are passed by value.`;
  },
  // problem solver--> 16
  "tvm-pass-by-reference": () => {
    let obj = { x: 10 };
    function modify(o: { x: number }) {
      o.x = 20;
    }
    modify(obj);
    return `Original 'obj.x' is now ${obj.x}. Objects are passed by reference (sharing).`;
  },
  // problem solver--> 17
  "tvm-primitive-immutability": () => {
    let str = "hello";
    str.toUpperCase();
    return `Original string is unchanged: "${str}"`;
  },
  // problem solver--> 18
  "tvm-object-mutability": () => {
    const obj: { a: number; b?: number } = { a: 1 };
    obj.b = 2;
    return `Object is now: ${JSON.stringify(obj)}`;
  },
  // problem solver--> 19
  "tvm-array-mutability": () => {
    const arr = [1, 2];
    arr.push(3);
    return `Array is now: [${arr.join(", ")}]`;
  },
  // problem solver--> 20
  "tvm-typeof-undeclared": () =>
    `(Conceptual) In non-strict mode, \`typeof undeclaredVar\` returns "undefined" without throwing an error.`,

  // --- Coercion & Equality ---
  // problem solver--> 21
  "tvm-strict-equality": () =>
    `\`5 === "5"\` is ${
      5 === ("5" as any)
    } because the types (number and string) are different.`,
  // problem solver--> 22
  "tvm-loose-equality": () =>
    `\`5 == "5"\` is ${
      5 == ("5" as any)
    } because the string "5" is coerced to the number 5 before comparison.`,
  // problem solver--> 23
  "tvm-loose-equality-null-undefined": () =>
    `null == undefined is ${null == undefined}`,
  // problem solver--> 24
  "tvm-strict-equality-null-undefined": () =>
    `null === undefined is ${null === undefined}`,
  // problem solver--> 25
  "tvm-loose-equality-boolean-number": () =>
    `\`true == 1\` is ${true == (1 as any)}. \`false == 0\` is ${
      false == (0 as any)
    }.`,
  // problem solver--> 26
  "tvm-loose-equality-object-primitive": () =>
    `(Conceptual) The expression \`[5] == 5\` is true. The array [5] is converted to its primitive value, the string "5", which is then coerced to the number 5 for comparison.`,
  // problem solver--> 27
  "tvm-plus-operator-coercion-string": () => `'5' + 3 is "${"5" + 3}"`,
  // problem solver--> 28
  "tvm-other-arithmetic-coercion": () => `'5' - 3 is ${("5" as any) - 3}`,
  // problem solver--> 29
  "tvm-explicit-conversion-string": ({ num }: { num: number }) => {
    const str = String(num);
    return `Value: ${str}, Type: ${typeof str}`;
  },
  // problem solver--> 30
  "tvm-explicit-conversion-number": ({ str }: { str: string }) => {
    const num = Number(str);
    return `Value: ${num}, Type: ${typeof num}`;
  },
  // problem solver--> 31
  "tvm-explicit-conversion-boolean": ({ val }: { val: string }) => {
    const value = parseAsValue(val);
    const bool = Boolean(value);
    return `Value: ${val}, Boolean: ${bool}`;
  },
  // problem solver--> 32
  "tvm-unary-plus-conversion": ({ str }: { str: string }) => {
    const num = +str;
    return `Value: ${num}, Type: ${typeof num}`;
  },
  // problem solver--> 33
  "tvm-double-not-conversion": ({ val }: { val: string }) => {
    const value = parseAsValue(val);
    const bool = !!value;
    return `Value: ${val}, Boolean: ${bool}`;
  },
  // problem solver--> 34
  "tvm-truthiness-check": () => {
    const testString: string = "hello";
    if (testString) return `A non-empty string is truthy.`;
    return `This should not be reached.`;
  },
  // problem solver--> 35
  "tvm-falsiness-check": () => {
    if (0) {
      return `This should not be reached.`;
    } else {
      return `The number 0 is falsy.`;
    }
  },
  // problem solver--> 36
  "tvm-list-falsy-values": () =>
    `The six falsy values are: false, 0, "", null, undefined, and NaN.`,
  // problem solver--> 37
  "tvm-truthiness-of-empty-object": () =>
    `(Conceptual) An empty object {} is truthy, so \`if ({}) { ... }\` will execute.`,
  // problem solver--> 38
  "tvm-truthiness-of-empty-array": () =>
    `(Conceptual) An empty array [] is truthy, so \`if ([]) { ... }\` will execute.`,
  // problem solver--> 39
  "tvm-parseint-basic": ({ str }: { str: string }) => parseInt(str, 10),
  // problem solver--> 40
  "tvm-parsefloat-basic": ({ str }: { str: string }) => parseFloat(str),
  // problem solver--> 41
  "tvm-number-tostring": () => (123).toString(),
  // problem solver--> 42
  "tvm-number-tostring-radix": ({ num, base }: { num: number; base: number }) =>
    num.toString(base),
  // problem solver--> 43
  "tvm-if-assignment-pitfall": () => {
    let x = 1;
    if ((x = 0)) {
      return `This code is unreachable.`;
    }
    return `The if block was skipped because (x=0) evaluates to 0. x is now ${x}.`;
  },
  // problem solver--> 44
  "tvm-abstract-relational-comparison": () =>
    `(Conceptual) The expression '10' > 5 is true because the string "10" is coerced to the number 10 before comparison.`,
  // problem solver--> 45
  "tvm-abstract-relational-string-comparison": () =>
    `'2' > '10' is ${
      "2" > "10"
    } because '2' comes after '1' lexicographically.`,
  // problem solver--> 46
  "tvm-tostring-vs-valueof-coercion": () =>
    `(Conceptual) To convert an object to a primitive, JS tries [Symbol.toPrimitive]. If not present, it prefers .valueOf() for number contexts and .toString() for string contexts.`,
  // problem solver--> 47
  "tvm-valueof-example": () => {
    const obj = { valueOf: () => 100 };
    return `obj + 5 is ${(obj as any) + 5}`;
  },
  // problem solver--> 48
  "tvm-tostring-example": () => {
    const obj = { toString: () => "custom" };
    return `String(obj) is "${String(obj)}"`;
  },
  // problem solver--> 49
  "tvm-symbol-toprimitive": () => {
    const obj = {
      [Symbol.toPrimitive](hint: string) {
        if (hint === "number") return 42;
        return "hello";
      },
    };
    return `obj * 2 is ${(obj as any) * 2}. String(obj) is "${String(obj)}"`;
  },
  // problem solver--> 50
  "tvm-plus-date-coercion": () =>
    `+new Date() returns the timestamp: ${+new Date()}`,
  // problem solver--> 51
  "tvm-coercion-with-join": () => {
    const arr = [1, null, undefined];
    return `[1, null, undefined].join(',') is "${arr.join(
      ","
    )}" which becomes "1,,"`;
  },
  // problem solver--> 52
  "tvm-alert-coercion": () =>
    `(Conceptual) alert({}) calls the object's toString method, resulting in an alert box showing "[object Object]".`,
  // problem solver--> 53
  "tvm-object-property-key-coercion": () => {
    const obj: any = {};
    obj[123] = "hello";
    return `Accessing obj[123] is the same as obj['123']. Keys are coerced to strings. Result: ${obj["123"]}`;
  },
  // problem solver--> 54
  "tvm-loose-equality-tricky-1": () =>
    `(Conceptual) The expression [] == ![] is true. ![] becomes false. [] == false becomes '' == 0, which becomes 0 == 0.`,
  // problem solver--> 55
  "tvm-loose-equality-tricky-2": () =>
    `(Conceptual) The expression '' == [null] is true. [null].toString() becomes an empty string ''. '' == '' is true.`,
  // problem solver--> 56
  "tvm-instanceof-and-primitives": () =>
    `(Conceptual) Primitives like "hello" are not objects, so \`"hello" instanceof String\` is false. However, \`new String("hello") instanceof String\` is true.`,
  // problem solver--> 57
  "tvm-isarray-check": () => {
    const arr = [];
    return `Array.isArray(arr) is ${Array.isArray(arr)}`;
  },
  // problem solver--> 58
  "tvm-number-isnan-check": () => {
    const str = "hello";
    return `Number.isNaN('${str}') is ${Number.isNaN(
      str as any
    )}. isNaN('${str}') is ${isNaN(str as any)}. Number.isNaN is stricter.`;
  },
  // problem solver--> 59
  "tvm-object-is-check": () => {
    return `Object.is(NaN, NaN) is ${Object.is(
      NaN,
      NaN
    )}. Object.is(0, -0) is ${Object.is(0, -0)}`;
  },
  // problem solver--> 60
  "tvm-bigint-literal": () => {
    const big = 9007199254740991n;
    return `Value: ${big}, Type: ${typeof big}`;
  },
  // problem solver--> 61
  "tvm-bigint-constructor": () => {
    const big = BigInt("9007199254740991");
    return `Value: ${big}, Type: ${typeof big}`;
  },
  // problem solver--> 62
  "tvm-bigint-mixed-type-error": () =>
    `(Conceptual) Code like \`1n + 2\` throws a TypeError. You must explicitly convert: \`1n + BigInt(2)\` or \`Number(1n) + 2\`.`,
  // problem solver--> 63
  "tvm-bigint-comparisons": () =>
    `10n == 10 is ${10n == (10 as any)}. 10n === 10 is ${
      10n === (10 as any)
    }. 10n > 5 is ${10n > 5}`,
  // problem solver--> 64
  "tvm-symbol-uniqueness": () =>
    `Symbol('a') === Symbol('a') is ${Symbol("a") === Symbol("a")}`,
  // problem solver--> 65
  "tvm-symbol-as-property-key": () => {
    const id = Symbol("id");
    const obj = { [id]: 123 };
    return `Value accessed via symbol: ${obj[id]}`;
  },
  // problem solver--> 66
  "tvm-symbol-for-global": () =>
    `Symbol.for('a') === Symbol.for('a') is ${
      Symbol.for("a") === Symbol.for("a")
    }`,
  // problem solver--> 67
  "tvm-symbol-keyfor": () => {
    const sym = Symbol.for("globalKey");
    return `Symbol.keyFor(sym) is "${Symbol.keyFor(sym)}"`;
  },
  // problem solver--> 68
  "tvm-symbol-property-is-hidden": () => {
    const id = Symbol("id");
    const obj = { [id]: 123, a: 1 };
    return `Object.keys(obj) is [${Object.keys(
      obj
    )}]. The symbol key is not included.`;
  },
  // problem solver--> 69
  "tvm-getownpropertysymbols": () => {
    const id = Symbol("id");
    const obj = { [id]: 123 };
    return `Found symbol: ${Object.getOwnPropertySymbols(obj)[0].toString()}`;
  },
  // problem solver--> 70
  "tvm-wrapper-object-pitfall": () => {
    const emptyStringObject = new String("");
    if (emptyStringObject) {
      return `new String('') is an object, which is always truthy, so this code runs.`;
    }
    return "This is unreachable.";
  },
  // problem solver--> 71
  "tvm-autoboxing-conceptual": () =>
    `(Conceptual) When you access a property on a primitive like \`"hello".length\`, JavaScript temporarily creates a \`new String("hello")\` wrapper object to access the property from, then discards it.`,
  // problem solver--> 72
  "tvm-object-isextensible": () => {
    const obj = {};
    return `Is extensible by default: ${Object.isExtensible(obj)}`;
  },
  // problem solver--> 73
  "tvm-object-preventextensions": () => {
    const obj = {};
    Object.preventExtensions(obj);
    return `Is now extensible? ${Object.isExtensible(obj)}`;
  },
  // problem solver--> 74
  "tvm-object-issealed": () => {
    const obj = {};
    Object.seal(obj);
    return `Is sealed? ${Object.isSealed(obj)}`;
  },
  // problem solver--> 75
  "tvm-object-seal": () =>
    `(Conceptual) Sealing an object prevents adding/deleting properties, but allows changing existing ones. \`Object.seal(obj); obj.a = 2; // OK. delete obj.a; // Fails.\``,
  // problem solver--> 76
  "tvm-object-isfrozen": () => {
    const obj = {};
    Object.freeze(obj);
    return `Is frozen? ${Object.isFrozen(obj)}`;
  },
  // problem solver--> 77
  "tvm-object-freeze": () =>
    `(Conceptual) Freezing an object prevents adding, deleting, and changing properties. It is not extensible, and its properties are non-configurable and non-writable.`,
  // problem solver--> 78
  "tvm-shallow-freeze": () => {
    const obj = { nested: { a: 1 } };
    Object.freeze(obj);
    obj.nested.a = 99;
    return `Nested object was mutated. obj.nested.a is now ${obj.nested.a}.`;
  },
  // problem solver--> 79
  "tvm-is-finite-check": () =>
    `Number.isFinite(123) is ${Number.isFinite(
      123
    )}. Number.isFinite('123') is ${Number.isFinite(
      "123" as any
    )}. Number.isFinite(Infinity) is ${Number.isFinite(Infinity)}.`,
  // problem solver--> 80
  "tvm-number-tofixed": ({ num, digits }: { num: number; digits: number }) =>
    num.toFixed(digits),
  // problem solver--> 81
  "tvm-number-toprecision": ({
    num,
    precision,
  }: {
    num: number;
    precision: number;
  }) => num.toPrecision(precision),
  // problem solver--> 82
  "tvm-number-toexponential": ({ num }: { num: number }) => num.toExponential(),
  // problem solver--> 83
  "tvm-object-is-pitfall-objects": () =>
    `(Conceptual) The expression Object.is({}, {}) is false because objects are compared by reference.`,
  // problem solver--> 84
  "tvm-coercion-to-primitive-conceptual": () =>
    `(Conceptual) When coercing an object, JS calls [Symbol.toPrimitive]. If not present, it prefers .valueOf() for number contexts and .toString() for string contexts.`,
  // problem solver--> 85
  "tvm-well-known-symbol-iterator": () => {
    const obj = {
      data: [1, 2, 3],
      [Symbol.iterator]: function* () {
        yield* this.data;
      },
    };
    return `Spread result: ${[...(obj as any)].join(", ")}`;
  },
  // problem solver--> 86
  "tvm-well-known-symbol-tostringtag": () => {
    const obj = {
      get [Symbol.toStringTag]() {
        return "MyCustomType";
      },
    };
    return Object.prototype.toString.call(obj);
  },
  // problem solver--> 87
  "tvm-property-descriptor": () =>
    JSON.stringify(Object.getOwnPropertyDescriptor({ a: 1 }, "a")),
  // problem solver--> 88
  "tvm-object-defineproperty": () =>
    `(Conceptual) Object.defineProperty(obj, 'prop', { value: 42, writable: false }) creates a non-writable property.`,
  // problem solver--> 89
  "tvm-non-writable-property": () =>
    `(Conceptual - Strict Mode) const obj = {}; Object.defineProperty(obj, 'a', {writable: false}); obj.a = 2; // Throws TypeError.`,
  // problem solver--> 90
  "tvm-non-enumerable-property": () => {
    const obj = { a: 1 };
    Object.defineProperty(obj, "b", { value: 2, enumerable: false });
    return `Object.keys(obj) is [${Object.keys(obj)}]`;
  },
  // problem solver--> 91
  "tvm-non-configurable-property": () =>
    `(Conceptual - Strict Mode) const obj = {}; Object.defineProperty(obj, 'a', {configurable: false}); delete obj.a; // Throws TypeError.`,
  // problem solver--> 92
  "tvm-getter-property": () => {
    const obj = {
      _a: 1,
      get a() {
        return this._a * 2;
      },
    };
    return `obj.a is ${obj.a}`;
  },
  // problem solver--> 93
  "tvm-setter-property": () => {
    const obj = {
      _a: 1,
      set a(val: number) {
        this._a = val / 2;
      },
    };
    (obj as any).a = 10;
    return `Internal _a is ${obj._a}`;
  },
  // problem solver--> 94
  "tvm-prototype-conceptual": () =>
    `(Conceptual) An object's prototype is another object from which it inherits properties. It's a fundamental mechanism for reuse in JavaScript.`,
  // problem solver--> 95
  "tvm-prototype-chain": () =>
    `({}).toString() works because it is inherited from Object.prototype. Result: "${{}.toString()}"`,
  // problem solver--> 96
  "tvm-object-create": () => {
    const proto = { greet: "hello" };
    const obj = Object.create(proto);
    return `obj inherits greet: "${(obj as any).greet}"`;
  },
  // problem solver--> 97
  "tvm-get-prototype-of": () =>
    `Object.getPrototypeOf([]) === Array.prototype is ${
      Object.getPrototypeOf([]) === Array.prototype
    }`,
  // problem solver--> 98
  "tvm-null-prototype-object": () => {
    const map = Object.create(null);
    return `map.toString is ${map.toString}`;
  },
  // problem solver--> 99
  "tvm-hasownproperty": () => {
    const obj = Object.create({ inherited: true });
    return `obj has own 'inherited'? ${obj.hasOwnProperty("inherited")}`;
  },
  // problem solver--> 100
  "tvm-object-hasown-static": () => {
    const obj = Object.create({ inherited: true });
    return `Object.hasOwn(obj, 'inherited') is ${Object.hasOwn(
      obj,
      "inherited"
    )}`;
  },
  // problem solver--> 101
  "tvm-array-is-object": () =>
    `typeof [] is '${typeof []}'. [] instanceof Object is ${
      [] instanceof Object
    }`,
  // problem solver--> 102
  "tvm-constructor-property": () =>
    `(new String('s')).constructor === String is ${
      new String("s").constructor === String
    }`,
  // problem solver--> 103
  "tvm-coercion-in-relational-operators": () =>
    `5 < '10' is ${5 < Number("10")}`,
  // problem solver--> 104
  "tvm-infinity-type": () => `typeof Infinity is '${typeof Infinity}'`,
  // problem solver--> 105
  "tvm-negative-zero": () =>
    `0 === -0 is ${0 === -0}. Object.is(0, -0) is ${Object.is(0, -0)}`,
  // problem solver--> 106
  "tvm-is-finite": () =>
    `isFinite('123') is ${isFinite(
      "123" as any
    )}. Number.isFinite('123') is ${Number.isFinite("123" as any)}`,
  // problem solver--> 107
  "tvm-number-is-safe-integer": () =>
    `Number.isSafeInteger(9007199254740992) is ${Number.isSafeInteger(
      9007199254740992
    )}`,
  // problem solver--> 108
  "tvm-max-safe-integer": () =>
    `Number.MAX_SAFE_INTEGER is ${Number.MAX_SAFE_INTEGER}`,
  // problem solver--> 109
  "tvm-string-coercion-via-template": () =>
    `\`Array: \${[1,2]}\` results in "Array: 1,2"`,
  // problem solver--> 110
  "tvm-bitwise-and-coercion": () =>
    `5.5 & 3.3 is ${(5.5 as any) & (3.3 as any)}. It coerces to 5 & 3 = 1`,
  // problem solver--> 111
  "tvm-instanceof-pitfall-realms": () =>
    `(Conceptual) If an array is created in an iframe, \`arr instanceof Array\` will be false in the main window because they have different Array constructors. \`Array.isArray(arr)\` works correctly.`,
  // problem solver--> 112
  "tvm-object-tostring-type-check": () =>
    `Object.prototype.toString.call([]) is '${Object.prototype.toString.call(
      []
    )}'`,
  // problem solver--> 113
  "tvm-primitive-property-access": () => {
    let str = "hi";
    (str as any).prop = true;
    return `str.prop is ${(str as any).prop}`;
  },
  // problem solver--> 114
  "tvm-well-known-symbol-hasinstance": () =>
    `(Conceptual) A class can implement \`static [Symbol.hasInstance](inst)\` to customize the behavior of the \`instanceof\` operator.`,
  // problem solver--> 115
  "tvm-bigint-division": () => `10n / 3n is ${10n / 3n}`,
  // problem solver--> 116
  "tvm-truthiness-of-string-false": () =>
    `The string 'false' is truthy: ${Boolean("false")}`,
  // problem solver--> 117
  "tvm-abstract-equality-algorithm": () =>
    `(Conceptual) The spec for \`==\` has many complex rules. For example, if comparing a number and a string, it converts the string to a number. If comparing a boolean, it converts the boolean to a number first.`,
  // problem solver--> 118
  "tvm-same-value-zero-algorithm": () =>
    `(Conceptual) Same-Value-Zero is used by Set/Map. It's like \`===\` but treats \`NaN\` as equal to \`NaN\` and \`+0\` as equal to \`-0\`.`,
  // problem solver--> 119
  "tvm-coercion-with-alert": () =>
    `(Conceptual) alert([1,2,3]) will show "1,2,3" because the array is coerced to a string via its \`.join()\` method.`,
  // problem solver--> 120
  "tvm-json-stringify-undefined": () =>
    `JSON.stringify({a:undefined, b:[undefined]}) is '${JSON.stringify({
      a: undefined,
      b: [undefined as any],
    })}'`,
  // problem solver--> 121
  "tvm-object-property-access-order": () =>
    `(Conceptual) When destructuring, \`const {b, a} = { get a(){}, get b(){} }\`, the getter for 'a' runs before 'b' because property order is based on the source object.`,
  // problem solver--> 122
  "tvm-number-epsilon": () =>
    `Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON is ${
      Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
    }`,
  // problem solver--> 123
  "tvm-well-known-symbol-isconcatspreadable": () =>
    `(Conceptual) An array-like object with \`obj[Symbol.isConcatSpreadable] = false\` will not be flattened by \`[].concat(obj)\`.`,
  // problem solver--> 124
  "tvm-proxy-for-type-validation": () =>
    `(Conceptual) A proxy's \`set\` trap can check \`typeof value\` before allowing the assignment to the target, throwing a TypeError if it's invalid.`,
  // problem solver--> 125
  "tvm-globalthis": () =>
    `globalThis is a standard way to get the global object. In browsers, globalThis === window is ${
      typeof window !== "undefined" ? globalThis === window : "N/A"
    }.`,
  // problem solver--> 126
  "tvm-max-value-constant": () => `Number.MAX_VALUE is ${Number.MAX_VALUE}`,
  // problem solver--> 127
  "tvm-min-value-constant": () => `Number.MIN_VALUE is ${Number.MIN_VALUE}`,
  // problem solver--> 128
  "tvm-infinity-arithmetic": () =>
    `Infinity - Infinity is ${Infinity - Infinity}. Infinity / Infinity is ${
      Infinity / Infinity
    }.`,
  // problem solver--> 129
  "tvm-tostring-on-prototype": () => {
    function Custom() {}
    Custom.prototype.toString = () => "custom";
    return `(new Custom()).toString() is '${new (Custom as any)().toString()}'`;
  },
  // problem solver--> 130
  "tvm-coercion-in-bitwise-not": () => `~'5' is ${~("5" as any)}`,
  // problem solver--> 131
  "tvm-is-prototype-of": () =>
    `Object.prototype.isPrototypeOf({}) is ${Object.prototype.isPrototypeOf(
      {}
    )}`,
  // problem solver--> 132
  "tvm-finalization-registry-conceptual": () =>
    `(Conceptual) An API to register callbacks that are triggered after an object has been garbage collected. Used for external resource cleanup.`,
  // problem solver--> 133
  "tvm-weakset-conceptual": () =>
    `(Conceptual) A collection that only stores objects weakly, allowing them to be garbage collected if no other references exist, thus preventing memory leaks.`,
  // problem solver--> 134
  "tvm-weakmap-conceptual": () =>
    `(Conceptual) A map that holds weak references to its keys (which must be objects), allowing for garbage collection and enabling patterns for private data.`,
  // problem solver--> 135
  "tvm-structuredclone": () => {
    const obj = { date: new Date(), nested: { a: 1 } };
    const clone = structuredClone(obj);
    clone.nested.a = 2;
    return `Clone is a Date: ${
      clone.date instanceof Date
    }. Original is unchanged: ${obj.nested.a === 1}`;
  },
  // problem solver--> 136
  "tvm-json-clone-limitations": () =>
    `(Conceptual) JSON.stringify/parse drops \`undefined\`, functions, and converts Dates to strings.`,
  // problem solver--> 137
  "tvm-well-known-symbol-match": () =>
    `(Conceptual) An object can implement \`[Symbol.match]\` to provide custom behavior for \`String.prototype.match()\`.`,
  // problem solver--> 138
  "tvm-well-known-symbol-replace": () =>
    `(Conceptual) An object can implement \`[Symbol.replace]\` to provide custom logic for \`String.prototype.replace()\`.`,
  // problem solver--> 139
  "tvm-well-known-symbol-search": () =>
    `(Conceptual) An object can implement \`[Symbol.search]\` to provide custom logic for \`String.prototype.search()\`.`,
  // problem solver--> 140
  "tvm-well-known-symbol-split": () =>
    `(Conceptual) An object can implement \`[Symbol.split]\` to provide custom logic for \`String.prototype.split()\`.`,
  // problem solver--> 141
  "tvm-reflect-ownkeys": () => {
    const sym = Symbol("s");
    const obj = { a: 1, [sym]: 2 };
    Object.defineProperty(obj, "b", { value: 3 });
    const keys = Reflect.ownKeys(obj);
    return `Found keys: ${keys.map((k) => String(k)).join(", ")}`;
  },
  // problem solver--> 142
  "tvm-proxy-get-own-property-descriptor-trap": () =>
    `(Conceptual) A proxy's \`getOwnPropertyDescriptor\` trap intercepts \`Object.getOwnPropertyDescriptor(proxy, ...)\`, allowing you to report custom property attributes.`,
  // problem solver--> 143
  "tvm-revocable-proxy": () => {
    const { proxy, revoke } = Proxy.revocable({}, {});
    revoke();
    try {
      (proxy as any).a = 1;
      return "Test failed";
    } catch (e) {
      return "Caught TypeError after proxy was revoked.";
    }
  },
  // problem solver--> 144
  "tvm-object-fromEntries": () => {
    const entries = [
      ["a", 1],
      ["b", 2],
    ];
    const obj = Object.fromEntries(entries);
    return JSON.stringify(obj);
  },
  // problem solver--> 145
  "tvm-json-replacer-function": () =>
    `(Conceptual) \`JSON.stringify(obj, (key, value) => key === 'secret' ? undefined : value)\` omits the 'secret' property.`,
  // problem solver--> 146
  "tvm-json-reviver-function": () =>
    `(Conceptual) \`JSON.parse(json, (key, value) => key === 'date' ? new Date(value) : value)\` converts date strings back to Date objects.`,
  // problem solver--> 147
  "tvm-coercion-in-if": () =>
    `(Conceptual) In \`if ("") { ... }\`, the empty string is coerced to \`false\` and the block is not executed.`,
  // problem solver--> 148
  "tvm-coercion-with-bitwise-or": () =>
    `10.9 | 0 is ${
      (10.9 as any) | 0
    }. It coerces the float to a 32-bit integer.`,
  // problem solver--> 149
  "tvm-primitive-property-assignment": () => {
    let str = "hi";
    (str as any).prop = true;
    return `str.prop is ${(str as any).prop}. The assignment fails silently.`;
  },
  // problem solver--> 150
  "tvm-number-isinteger": () =>
    `Number.isInteger(10) is ${Number.isInteger(
      10
    )}. Number.isInteger(10.5) is ${Number.isInteger(10.5)}.`,
  // problem solver--> 151
  "tvm-proxy-construct-trap": () =>
    `(Conceptual) A proxy's \`construct\` trap intercepts the \`new\` operator, allowing you to customize object instantiation.`,
  // problem solver--> 152
  "tvm-proxy-delete-trap": () =>
    `(Conceptual) A proxy's \`deleteProperty\` trap intercepts the \`delete\` operator, allowing you to prevent deletion.`,
  // problem solver--> 153
  "tvm-proxy-get-prototype-of-trap": () =>
    `(Conceptual) A proxy's \`getPrototypeOf\` trap intercepts \`Object.getPrototypeOf()\`, allowing you to report a custom prototype.`,
  // problem solver--> 154
  "tvm-proxy-set-prototype-of-trap": () =>
    `(Conceptual) A proxy's \`setPrototypeOf\` trap intercepts \`Object.setPrototypeOf()\`, allowing you to prevent prototype changes.`,
  // problem solver--> 155
  "tvm-proxy-is-extensible-trap": () =>
    `(Conceptual) A proxy's \`isExtensible\` trap intercepts \`Object.isExtensible()\`, allowing you to report a custom extensibility status.`,
  // problem solver--> 156
  "tvm-proxy-prevent-extensions-trap": () =>
    `(Conceptual) A proxy's \`preventExtensions\` trap intercepts \`Object.preventExtensions()\`.`,
  // problem solver--> 157
  "tvm-proxy-invariants-conceptual": () =>
    `(Conceptual) Proxies must obey invariants, e.g., a trap cannot report a non-configurable property as deleted. This maintains language consistency.`,
  // problem solver--> 158
  "tvm-reflect-api-conceptual": () =>
    `(Conceptual) \`Reflect\` is a built-in object whose methods (e.g., \`Reflect.get\`) correspond to proxy traps and provide the default behavior for those operations.`,
  // problem solver--> 159
  "tvm-reflect-get-set": () => {
    const obj = { a: 1 };
    Reflect.set(obj, "a", 2);
    return `Reflect.get(obj, 'a') is ${Reflect.get(obj, "a")}`;
  },
  // problem solver--> 160
  "tvm-reflect-construct": () => {
    class C {
      constructor(public a: number) {}
    }
    const instance = Reflect.construct(C, [10]);
    return `Instance 'a' property is ${instance.a}`;
  },
  // problem solver--> 161
  "tvm-reflect-apply": () => {
    const fn = Math.max;
    return `Reflect.apply(fn, null, [1,5,2]) is ${Reflect.apply(
      fn,
      null,
      [1, 5, 2]
    )}`;
  },
  // problem solver--> 162
  "tvm-reflect-has": () =>
    `Reflect.has({ a: 1 }, 'a') is ${Reflect.has({ a: 1 }, "a")}`,
  // problem solver--> 163
  "tvm-deep-clone-and-prototypes": () =>
    `(Conceptual) ` +
    "`structuredClone`" +
    ` and JSON methods do not preserve an object's prototype; they create plain objects.`,
  // problem solver--> 164
  "tvm-well-known-symbol-species": () =>
    `(Conceptual) ` +
    "`class MyArray extends Array { static get [Symbol.species]() { return Array; } }`" +
    `. An instance's \`.map()\` would then return a base Array.`,
  // problem solver--> 165
  "tvm-well-known-symbol-unscopables": () =>
    `(Conceptual) A legacy feature to hide properties from the deprecated \`with\` statement. \`Array.prototype[Symbol.unscopables]\` hides methods like 'keys' and 'values'.`,
  // problem solver--> 166
  "tvm-json-and-bigint-error": () =>
    `(Conceptual) ` +
    "`JSON.stringify(10n)`" +
    ` throws a TypeError because BigInts cannot be serialized to JSON by default.`,
  // problem solver--> 167
  "tvm-number-is-integer-vs-modulo": () =>
    `Number.isInteger(10.0) is ${Number.isInteger(10.0)}. 10.0 % 1 === 0 is ${
      10.0 % 1 === 0
    }. Both work for basic cases.`,
  // problem solver--> 168
  "tvm-min-safe-integer": () =>
    `Number.MIN_SAFE_INTEGER is ${Number.MIN_SAFE_INTEGER}`,
  // problem solver--> 169
  "tvm-epsilon-constant": () => `Number.EPSILON is ${Number.EPSILON}`,
  "tvm-coercion-in-equality-null": () => {
    const nullEqZero = null == 0;
    const nullGtZero = (null as any) > 0;
    const nullGteZero = (null as any) >= 0;
    return `null == 0 is ${nullEqZero}. null > 0 is ${nullGtZero}. null >= 0 is ${nullGteZero}. Coercion rules are inconsistent.`;
  },
  // problem solver--> 171
  "tvm-coercion-with-empty-array": () =>
    `Number([]) is ${Number([])}. String([]) is "${String([])}"`,
  // problem solver--> 172
  "tvm-coercion-with-single-element-array": () =>
    `Number([5]) is ${Number([5])}. String([5]) is "${String([5])}"`,
  // problem solver--> 173
  "tvm-prototype-of-null-object": () =>
    `Object.getPrototypeOf(Object.create(null)) is ${Object.getPrototypeOf(
      Object.create(null)
    )}`,
  // problem solver--> 174
  "tvm-well-known-symbol-species-example": () =>
    `(Conceptual) A subclass of Array can use Symbol.species to make methods like .map() return a standard Array instead of a subclass instance.`,
  // problem solver--> 175
  "tvm-proxy-and-this-keyword": () =>
    `(Conceptual) Using Reflect methods inside traps ensures that the original \`this\` context is preserved when forwarding the operation to the target.`,
  // problem solver--> 176
  "tvm-object-prototype-tostring": () =>
    `({}).toString() is "${{}.toString()}"`,
  // problem solver--> 177
  "tvm-array-prototype-tostring": () =>
    `[1,2,3].toString() is "${[1, 2, 3].toString()}"`,
  // problem solver--> 178
  "tvm-function-prototype-tostring": () =>
    `(function(){}).toString() is "${function () {}.toString()}"`,
  // problem solver--> 179
  "tvm-coercion-with-boolean-object": () =>
    `(Conceptual) \`new Boolean(false)\` is an object, which is truthy. So \`if (new Boolean(false)) { ... }\` will execute.`,
  // problem solver--> 180
  "tvm-coercion-with-number-object": () =>
    `(Conceptual) \`new Number(0) == 0\` is true, but \`new Number(0) === 0\` is false. The object is coerced to a primitive for loose equality.`,
  // problem solver--> 181
  "tvm-numeric-separator-syntax": () =>
    `The value of 1_000_000 is ${1_000_000}`,
  // problem solver--> 182
  "tvm-private-class-fields": () =>
    `(Conceptual) \`class C { #secret = 42; getSecret() { return this.#secret; } }\`. Accessing \`#secret\` from outside throws an error.`,
  // problem solver--> 183
  "tvm-private-class-methods": () =>
    `(Conceptual) \`class C { #doSecret() {} public() { this.#doSecret(); } }\`. \`#doSecret\` can only be called from inside the class.`,
  // problem solver--> 184
  "tvm-static-class-fields": () =>
    `(Conceptual) \`class C { static myStatic = 'hello'; }\`. Access via \`C.myStatic\`.`,
  // problem solver--> 185
  "tvm-static-private-class-fields": () =>
    `(Conceptual) \`class C { static #secret = 42; static getSecret() { return this.#secret; } }\`.`,
  // problem solver--> 186
  "tvm-static-class-methods": () =>
    `(Conceptual) \`class C { static myStatic() {} }\`. Called via \`C.myStatic()\`.`,
  // problem solver--> 187
  "tvm-static-initialization-blocks": () =>
    `(Conceptual) \`class C { static data; static { this.data = "initialized"; } }\`. The block runs once on class definition.`,
  // problem solver--> 188
  "tvm-error-cause-property": () =>
    `(Conceptual) \`throw new Error("High-level", { cause: lowLevelError });\` preserves the original error for debugging.`,
  // problem solver--> 189
  "tvm-regexp-hasindices-flag": () =>
    `(Conceptual) For a regex with the /d flag, the result of \`.exec()\` will have an \`.indices\` property showing the start/end indices of capture groups.`,
  // problem solver--> 190
  "tvm-at-method-on-arrays": () => `[1,2,3].at(-1) is ${[1, 2, 3].at(-1)}`,
  // problem solver--> 191
  "tvm-at-method-on-strings": () => `'abc'.at(-1) is ${"abc".at(-1)}`,
  // problem solver--> 192
  "tvm-private-field-in-operator-check": () =>
    `(Conceptual) \`class C { #f; static isC(obj) { return #f in obj; } }\`. This is a reliable brand check.`,
  // problem solver--> 193
  "tvm-class-fields-initialization-order": () =>
    `(Conceptual) Class fields are initialized *before* the constructor body runs.`,
  // problem solver--> 194
  "tvm-top-level-await": () =>
    `(Conceptual) In an ES module, you can write \`const data = await fetch(url);\` at the top level, without an \`async\` function.`,
  // problem solver--> 195
  "tvm-promise-withresolvables": () =>
    `(Conceptual) \`const { promise, resolve, reject } = Promise.withResolvables();\` provides a promise and its settlement functions.`,
  // problem solver--> 196
  "tvm-array-findlast": () => {
    const arr = [1, 2, 3, 4];
    const result = (arr as any).findLast((n: number) => n % 2 === 0);
    return `[1,2,3,4].findLast(n => n % 2 === 0) is ${result}`;
  },
  // problem solver--> 197
  "tvm-array-findlastindex": () => {
    const arr = [1, 2, 3, 4];
    const result = (arr as any).findLastIndex((n: number) => n % 2 === 0);
    return `[1,2,3,4].findLastIndex(n => n % 2 === 0) is ${result}`;
  },
  // problem solver--> 198
  "tvm-array-with": () => {
    const original = [1, 2, 3];
    const updated = (original as any).with(1, 99);
    return `Original: [${original.join(",")}]. Updated: [${updated.join(",")}]`;
  },
  // problem solver--> 199
  "tvm-array-tosorted": () => {
    const original = [3, 1, 2];
    const sorted = (original as any).toSorted();
    return `Original: [${original.join(",")}]. Sorted: [${sorted.join(",")}]`;
  },
  // problem solver--> 200
  "tvm-array-toreversed": () => {
    const original = [1, 2, 3];
    const reversed = (original as any).toReversed();
    return `Original: [${original.join(",")}]. Reversed: [${reversed.join(
      ","
    )}]`;
  },
};
