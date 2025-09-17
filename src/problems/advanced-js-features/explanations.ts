export const explanations: Record<string, string> = {
  "generator-function-basic": `
### 💡 Problem Breakdown
A generator function is a special type of function that can be paused and resumed, allowing it to produce a sequence of values over time instead of computing them all at once. It's defined with \`function*\` and uses the \`yield\` keyword to "produce" a value and pause its execution.

### ⚙️ Solution Walkthrough
The solution defines a generator that yields three numbers one by one.
\`\`\`javascript
function* numberGenerator() {
    console.log("Yielding 1");
    yield 1;
    console.log("Yielding 2");
    yield 2;
    console.log("Yielding 3");
    yield 3;
}

const gen = numberGenerator(); // Calling it doesn't run the code yet
gen.next(); // Runs until the first yield
gen.next(); // Resumes and runs until the second yield
\`\`\`
1.  **\`function*\`**: The asterisk (\`*\`) marks this as a generator function.
2.  **\`yield\`**: This keyword pauses the generator's execution and returns the value of the expression following it.
3.  **Iterator**: Calling the generator returns an iterator object. You must call \`.next()\` on this iterator to execute the code.

### 📚 Key Concepts
-   **Generator Function**: A function that can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.
-   **Iterator**: The object returned by a generator, which is used to control its execution via the \`.next()\` method.
`,
  "generator-iterator-protocol": `
### 💡 Problem Breakdown
Calling a generator function returns an iterator. This iterator follows the JavaScript iterator protocol. The task is to understand the object returned by the iterator's \`.next()\` method.

### ⚙️ Solution Walkthrough
The \`.next()\` method returns an object with two properties: \`value\` and \`done\`.
\`\`\`javascript
function* generator() {
    yield 'a';
    yield 'b';
}
const iterator = generator();

iterator.next(); // { value: 'a', done: false }
iterator.next(); // { value: 'b', done: false }
iterator.next(); // { value: undefined, done: true }
\`\`\`
1.  **\`value\`**: This property contains the yielded value from the generator function.
2.  **\`done\`**: This is a boolean. It is \`false\` as long as the generator can produce more values. It becomes \`true\` when the generator has completed its execution (i.e., after the final \`yield\` or a \`return\` statement).

### 📚 Key Concepts
-   **Iterator Protocol**: The standard way iterators work in JavaScript, defined by the structure of the object returned by the \`.next()\` method.
`,
  "generator-yield-delegation": `
### 💡 Problem Breakdown
The \`yield*\` expression is used to delegate the iteration from one generator to another iterable object (like another generator, an array, or a string). It's a convenient way to compose generators together or yield all the values from an iterable.

### ⚙️ Solution Walkthrough
\`gen2\` uses \`yield*\` to first yield all values from \`gen1\` and then an array before yielding its own final value.
\`\`\`javascript
function* gen1() { yield 1; yield 2; }
function* gen2() {
  yield* gen1(); // Delegates to gen1
  yield* ['x', 'y']; // Delegates to the array
  yield 3;
}
const result = [...gen2()]; // [1, 2, 'x', 'y', 3]
\`\`\`
1.  **\`yield* iterable\`**: This syntax iterates over the provided iterable and yields each of its values. The \`yield*\` expression itself evaluates to the \`value\` property of the final object returned by the delegated iterator when it's \`done\`.

### 📚 Key Concepts
-   **\`yield*\`**: An expression for delegating to another iterable, useful for generator composition.
`,
  "generator-passing-values": `
### 💡 Problem Breakdown
Generators can be used for two-way communication. They can \`yield\` values to the outside, but the outside caller can also pass values *back into* the generator via the \`.next(value)\` method. The value passed to \`.next()\` becomes the result of the \`yield\` expression that paused the generator.

### ⚙️ Solution Walkthrough
A generator yields a question, and the answer is passed back in the next call to \`.next()\`.
\`\`\`javascript
function* twoWayGenerator() {
  const name = yield "What's your name?";
  const confirmation = yield \`Hello, \${name}! Is that correct?\`;
  return \`Confirmation: \${confirmation}\`;
}

const it = twoWayGenerator();
it.next();      // Starts the generator, yields "What's your name?"
it.next('Alice'); // Resumes, 'name' becomes "Alice", yields "Hello, Alice!..."
it.next('Yes');   // Resumes, 'confirmation' becomes "Yes", returns the final value.
\`\`\`
1.  **First \`.next()\`**: The first call to \`.next()\` never passes a value, it only starts the generator.
2.  **Subsequent \`.next(value)\`**: The value passed in becomes the result of the previously executed \`yield\` statement.

### 📚 Key Concepts
-   **Co-routines**: This two-way communication allows generators to be used as co-routines, where two or more functions can pass control back and forth.
`,
  "generator-return": `
### 💡 Problem Breakdown
A generator function can have a \`return\` statement. When the generator executes this \`return\`, it finishes and produces one final object from its iterator where \`done\` is \`true\` and \`value\` is the value that was returned. Any subsequent calls to \`.next()\` will also return \`{ value: undefined, done: true }\`.

### ⚙️ Solution Walkthrough
A generator yields once and then returns a final value.
\`\`\`javascript
function* gen() {
    yield 1;
    return "Finished";
}
const it = gen();
it.next(); // { value: 1, done: false }
it.next(); // { value: "Finished", done: true }
\`\`\`
### 📚 Key Concepts
-   **Generator Execution Flow**: Understanding the final state of a generator when it returns.
`,
  "proxy-get-trap": `
### 💡 Problem Breakdown
An ES6 \`Proxy\` is an object that wraps another object (the "target") and allows you to intercept fundamental operations, called "traps". The \`get\` trap is called whenever a property is read from the proxy. This allows you to define custom behavior for property access.

### ⚙️ Solution Walkthrough
A proxy is created with a \`get\` trap that returns a default value for any property that doesn't exist on the target object.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 'Default Value';
  }
};
const proxy = new Proxy(target, handler);

proxy.a; // 1
proxy.b; // "Default Value"
\`\`\`
1.  **\`handler.get(obj, prop)\`**: The \`get\` trap receives the target object (\`obj\`) and the property name (\`prop\`) being accessed.
2.  **Logic**: The trap's logic checks if the property exists on the object and returns the appropriate value.

### 📚 Key Concepts
-   **Proxy**: An object that wraps another object and intercepts operations.
-   **Trap**: A method on the handler that provides access to an operation (e.g., the \`get\` trap).
-   **Metaprogramming**: Code that can read or manipulate other code. Proxies are a form of metaprogramming.
`,
  "proxy-set-trap": `
### 💡 Problem Breakdown
The \`set\` trap on a Proxy is called whenever there is an attempt to set a property on the proxy object. This is extremely useful for implementing validation, logging, or triggering side effects on property changes.

### ⚙️ Solution Walkthrough
A proxy's \`set\` trap is used to ensure that only numeric values can be assigned to the \`age\` property.
\`\`\`javascript
const target = { age: 0 };
const handler = {
  set: function(obj, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError("Age must be a number.");
    }
    // Perform the actual assignment
    obj[prop] = value;
    return true; // Indicate that the assignment succeeded
  }
};
const proxy = new Proxy(target, handler);
proxy.age = 30;         // Success
// proxy.age = "thirty"; // Throws TypeError
\`\`\`
1.  **\`handler.set(obj, prop, value)\`**: The \`set\` trap receives the target, the property name, and the new value.
2.  **Return Value**: The \`set\` trap must return a boolean. Returning \`true\` indicates the assignment was successful. Returning \`false\` in non-strict mode will fail silently.

### 📚 Key Concepts
-   **Validation**: Using a \`set\` trap is a powerful way to enforce data integrity.
`,
  "proxy-apply-trap": `
### 💡 Problem Breakdown
The \`apply\` trap is used when a proxy wraps a function. This trap intercepts calls to the function.

### ⚙️ Solution Walkthrough
A proxy is created around a target function. The \`apply\` trap logs the arguments and modifies the return value.
\`\`\`javascript
const targetFunc = (a, b) => a + b;
const handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log(\`Calling function with args: \${argumentsList}\`);
    // Call the original function and modify its result
    const result = target(...argumentsList);
    return result * 2;
  }
};
const proxy = new Proxy(targetFunc, handler);
proxy(2, 3); // Logs "Calling..." and returns 10
\`\`\`
1.  **\`handler.apply(target, thisArg, argumentsList)\`**: The trap receives the target function, the \`this\` context the function was called with, and a list of its arguments.

### 📚 Key Concepts
-   **Function Interception**: Using a proxy to add behavior before or after a function call.
`,
  "proxy-construct-trap": `
### 💡 Problem Breakdown
The \`construct\` trap intercepts the \`new\` operator. When you use \`new\` on a proxy that wraps a class or constructor function, the \`construct\` trap is triggered.

### ⚙️ Solution Walkthrough
A proxy is created around a class. The \`construct\` trap logs the instantiation and modifies the arguments passed to the constructor.
\`\`\`javascript
class TargetClass {
  constructor(name) { this.name = name; }
}
const handler = {
  construct: function(target, args) {
    console.log(\`Constructing an instance of \${target.name}\`);
    // Modify arguments before calling the original constructor
    return new target(\`Proxied \${args[0]}\`);
  }
};
const ProxiedClass = new Proxy(TargetClass, handler);
const instance = new ProxiedClass('Test');
// instance.name is "Proxied Test"
\`\`\`
1.  **\`handler.construct(target, args)\`**: The trap receives the target class/function and an array of the arguments passed to the constructor.
2.  **Return Value**: The trap must return an object.

### 📚 Key Concepts
-   **Constructor Interception**: A way to control or augment the process of object instantiation.
`,
  "proxy-revocable": `
### 💡 Problem Breakdown
\`Proxy.revocable()\` is a static method that creates a special kind of proxy that can be "turned off." It returns an object containing the proxy itself and a \`revoke\` function. Once the \`revoke\` function is called, the proxy becomes unusable, and any attempt to access its properties will throw a \`TypeError\`.

### ⚙️ Solution Walkthrough
A revocable proxy is created and then revoked.
\`\`\`javascript
const target = { a: 1 };
const { proxy, revoke } = Proxy.revocable(target, {});

console.log(proxy.a); // 1

// Turn off the proxy
revoke();

// console.log(proxy.a); // Throws TypeError: Cannot perform 'get' on a proxy that has been revoked
\`\`\`
This is useful for managing access control, where you might want to grant temporary access to an object and then revoke it later.

### 📚 Key Concepts
-   **Revocable Proxy**: A proxy that can be disabled.
-   **Access Control**: A use case for managing temporary permissions to an object.
`,
  "reflect-api-get-set": `
### 💡 Problem Breakdown
The \`Reflect\` object is a built-in object that provides static methods for interceptable JavaScript operations. The methods on \`Reflect\` have a one-to-one mapping with the traps for Proxies. It's considered best practice to use \`Reflect\` methods inside proxy traps to perform the default underlying operation on the target object.

### ⚙️ Solution Walkthrough
\`Reflect.get\` and \`Reflect.set\` are used to perform the default operations.
\`\`\`javascript
const target = { a: 1 };
const handler = {
  get: function(obj, prop) {
    console.log('Intercepting get...');
    // Use Reflect to perform the default 'get' operation
    return Reflect.get(obj, prop);
  }
};
const proxy = new Proxy(target, handler);
proxy.a; // Logs "Intercepting get..." and returns 1
\`\`\`
### 📚 Key Concepts
-   **Reflect**: A built-in object that provides methods for JavaScript operations. Using it makes proxy traps more robust, especially with regard to the \`this\` context.
-   **Proxy Best Practices**: Using \`Reflect\` within proxy traps is the standard, recommended pattern.
`,
  "reflect-apply": `
### 💡 Problem Breakdown
\`Reflect.apply()\` provides a standard way to call a function. It takes the target function, the \`this\` context for the call, and an array of arguments. It is functionally similar to \`Function.prototype.apply()\`.

### ⚙️ Solution Walkthrough
\`Reflect.apply()\` is used to call \`Math.max\`.
\`\`\`javascript
const numbers = [1, 5, 2];
// This is equivalent to Math.max.apply(null, numbers)
const result = Reflect.apply(Math.max, null, numbers); // 5
\`\`\`
### 📚 Key Concepts
-   **\`Reflect.apply()\`**: The standard way to invoke a function when doing metaprogramming.
`,
  "reflect-construct": `
### 💡 Problem Breakdown
\`Reflect.construct()\` provides a standard way to invoke a constructor, similar to using the \`new\` operator. It takes the target constructor and an array of arguments.

### ⚙️ Solution Walkthrough
\`Reflect.construct()\` is used to create an instance of a class.
\`\`\`javascript
class MyClass {
  constructor(val) { this.val = val; }
}
const instance = Reflect.construct(MyClass, [10]);
// instance is a MyClass with { val: 10 }
\`\`\`
A key feature is that you can optionally provide a *different* constructor to use for the \`new.target\` value, which affects how properties are inherited.

### 📚 Key Concepts
-   **\`Reflect.construct()\`**: The standard way to invoke a constructor when doing metaprogramming.
`,
  "reflect-has": `
### 💡 Problem Breakdown
\`Reflect.has()\` is a static method that checks if a property exists on an object. It is the functional equivalent of the \`in\` operator.

### ⚙️ Solution Walkthrough
The method is used to check for a property.
\`\`\`javascript
const obj = { a: 1 };
Reflect.has(obj, 'a'); // true
Reflect.has(obj, 'toString'); // true (because it's on the prototype)
\`\`\`
### 📚 Key Concepts
-   **\`Reflect.has()\`**: A function that acts like the \`in\` operator.
`,
  "symbol-unique-keys": `
### 💡 Problem Breakdown
\`Symbol\` is a primitive data type introduced in ES6. The value of a symbol is unique and immutable. Symbols are often used as unique property keys for objects to avoid naming collisions, especially when adding "meta" properties to objects you don't own.

### ⚙️ Solution Walkthrough
A symbol is created and used as a computed object key.
\`\`\`javascript
const id = Symbol('id'); // The description 'id' is for debugging

const user = {
  name: 'Test',
  [id]: 123 // Use the symbol as a key
};

// Symbol keys are ignored by JSON.stringify and Object.keys
console.log(Object.keys(user)); // ['name']
// Access the property using the symbol
console.log(user[id]); // 123
\`\`\`
### 📚 Key Concepts
-   **Symbol**: A unique and immutable primitive value.
`,
  "symbol-for-and-keyfor": `
### 💡 Problem Breakdown
While \`Symbol()\` creates a completely unique symbol every time, \`Symbol.for(key)\` creates a symbol in a global symbol registry. If a symbol with the given key already exists, it is returned. If not, a new one is created and registered. \`Symbol.keyFor(symbol)\` retrieves the key for a symbol from this global registry.

### ⚙️ Solution Walkthrough
A symbol is created in the global registry and then retrieved again.
\`\`\`javascript
const s1 = Symbol.for('myGlobalSymbol');
const s2 = Symbol.for('myGlobalSymbol');

s1 === s2; // true

Symbol.keyFor(s1); // "myGlobalSymbol"
\`\`\`
### 📚 Key Concepts
-   **Global Symbol Registry**: A way to create and share symbols across different parts of an application (or even different realms).
`,
  "well-known-symbol-iterator": `
### 💡 Problem Breakdown
An object can become "iterable" (meaning it can be used in a \`for...of\` loop) by implementing the \`Symbol.iterator\` method. This is a "well-known symbol" that specifies the default iterator for an object.

### ⚙️ Solution Walkthrough
A custom object \`myIterable\` implements \`Symbol.iterator\` using a generator method.
\`\`\`javascript
const myIterable = {
  from: 1, to: 3,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  }
};

for (const num of myIterable) {
  console.log(num); // 1, 2, 3
}
\`\`\`
### 📚 Key Concepts
-   **Iterable Protocol**: The set of rules for making an object iterable.
-   **\`Symbol.iterator\`**: A built-in symbol that specifies the default iterator for an object.
`,
  "well-known-symbol-tostringtag": `
### 💡 Problem Breakdown
The default behavior of \`Object.prototype.toString.call(obj)\` returns a string like \`"[object Object]"\`. The \`Symbol.toStringTag\` well-known symbol allows you to customize the part after "object" for instances of your class, providing more descriptive type information.

### ⚙️ Solution Walkthrough
A getter for \`Symbol.toStringTag\` is added to the class, returning a custom string.
\`\`\`javascript
class MyCustomClass {
    get [Symbol.toStringTag]() {
        return 'CustomTag';
    }
}
const instance = new MyCustomClass();
Object.prototype.toString.call(instance); // "[object CustomTag]"
\`\`\`
### 📚 Key Concepts
-   **\`Symbol.toStringTag\`**: A well-known symbol that specifies the string value that is used in the default description of an object.
`,
  "sharedarraybuffer-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem. A \`SharedArrayBuffer\` is a fixed-length raw binary data buffer, similar to \`ArrayBuffer\`, but with a key difference: it can be shared across multiple JavaScript execution contexts (e.g., between the main browser thread and a Web Worker). When a change is made to the buffer in one context, that change is immediately visible in the other, eliminating the need for costly data copying with \`postMessage\`.

### ⚙️ Solution Walkthrough
The main thread would create a \`SharedArrayBuffer\` and send it to a worker.
\`\`\`javascript
// --- main.js ---
// Create a buffer of 1024 bytes
const sab = new SharedArrayBuffer(1024);
// Send it to the worker. It's transferred by reference, not copied.
myWorker.postMessage({ sab });

// --- worker.js ---
// On message, the worker can create a view and modify the shared memory
const int32 = new Int32Array(e.data.sab);
int32[0] = 42; // This change is instantly visible on the main thread.
\`\`\`
### 📚 Key Concepts
-   **Shared Memory**: A mechanism for high-performance parallel processing.
-   **Race Conditions**: Because memory is shared, this introduces the risk of race conditions, which is why the \`Atomics\` object is necessary for safe coordination.
`,
  "atomics-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem. When you use \`SharedArrayBuffer\` to share memory, you can run into "race conditions" if multiple threads try to read and write to the same memory location at the same time. The \`Atomics\` global object provides static methods that perform atomic, thread-safe operations on \`SharedArrayBuffer\` locations.

### ⚙️ Solution Walkthrough
Common \`Atomics\` methods include:
-   **\`Atomics.add(typedArray, index, value)\`**: Atomically adds a value to a location and returns the old value.
-   **\`Atomics.store(typedArray, index, value)\`**: Atomically stores a value at a location.
-   **\`Atomics.load(typedArray, index)\`**: Atomically loads a value from a location.
-   **\`Atomics.wait(typedArray, index, value)\`**: Puts a worker thread to sleep if the value at a location is a specific value, waiting to be woken up.
-   **\`Atomics.notify(typedArray, index, count)\`**: Wakes up waiting workers.

These tools are essential for building complex, multi-threaded applications in JavaScript.

### 📚 Key Concepts
-   **Atomicity**: An operation is "atomic" if it appears to the rest of the system to occur instantaneously, without being interrupted.
-   **Concurrency Control**: The process of managing simultaneous operations to prevent data corruption.
`,
  "intl-datetimeformat": `
### 💡 Problem Breakdown
The \`Intl\` object is the namespace for the ECMAScript Internationalization API. \`Intl.DateTimeFormat\` is a constructor for objects that enable language-sensitive date and time formatting.

### ⚙️ Solution Walkthrough
A formatter is created for a specific locale (\`de-DE\` for German) with specific options.
\`\`\`javascript
const date = new Date(Date.UTC(2024, 0, 20, 15, 30, 0));
const options = { dateStyle: 'full', timeStyle: 'short' };
const formatter = new Intl.DateTimeFormat('de-DE', options);

formatter.format(date); // "Samstag, 20. Januar 2024 um 15:30"
\`\`\`
### 📚 Key Concepts
-   **Internationalization (i18n)**: The process of designing an application so that it can be adapted to various languages and regions without engineering changes.
-   **\`Intl.DateTimeFormat\`**: The standard API for locale-aware date/time formatting.
`,
  "intl-numberformat": `
### 💡 Problem Breakdown
\`Intl.NumberFormat\` is a constructor for objects that enable language-sensitive number formatting, which is crucial for displaying things like percentages, units, and especially currency.

### ⚙️ Solution Walkthrough
A formatter is created to display a number as Japanese Yen.
\`\`\`javascript
const number = 123456.789;
const formatter = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY'
});

formatter.format(number); // "￥123,457" (Japanese Yen does not use minor units)
\`\`\`
### 📚 Key Concepts
-   **Internationalization (i18n)**: Adapting numerical displays for different cultural conventions.
-   **\`Intl.NumberFormat\`**: The standard API for locale-aware number formatting.
`,
  "intl-collator": `
### 💡 Problem Breakdown
String sorting with \`.sort()\` is based on Unicode code points, which can lead to incorrect alphabetical order for languages other than English. \`Intl.Collator\` provides objects that enable language-sensitive string comparison, producing the correct sort order for a given language.

### ⚙️ Solution Walkthrough
A \`Collator\` for the German locale is used to correctly sort an array of strings, where \`ä\` should come after \`a\`.
\`\`\`javascript
const arr = ['Z', 'a', 'z', 'ä'];
const collator = new Intl.Collator('de');

arr.sort(collator.compare); // ['a', 'ä', 'z', 'Z']
\`\`\`
### 📚 Key Concepts
-   **Collation**: The process of determining the correct sort order of strings.
-   **\`Intl.Collator\`**: The standard API for language-sensitive string comparison.
`,
  "intl-pluralrules": `
### 💡 Problem Breakdown
Grammatical rules for plurals vary significantly between languages. \`Intl.PluralRules\` is an object that enables plural-sensitive formatting by providing the correct plural category (e.g., "one", "other", "few", "many") for a given number and language.

### ⚙️ Solution Walkthrough
The \`select\` method is used to get the plural category for a number.
\`\`\`javascript
// Ordinal rules (1st, 2nd, 3rd...)
const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

pr.select(1); // "one" (for 1st)
pr.select(2); // "two" (for 2nd)
pr.select(3); // "few" (for 3rd)
pr.select(4); // "other" (for 4th)
\`\`\`
This is used by libraries to select the correct string, e.g., "You have 1 message" vs. "You have 2 messages".

### 📚 Key Concepts
-   **Internationalization (i18n)**: Handling grammatical rules for different languages.
-   **\`Intl.PluralRules\`**: The standard API for determining pluralization categories.
`,
  "intl-relativetimeformat": `
### 💡 Problem Breakdown
\`Intl.RelativeTimeFormat\` enables language-sensitive formatting of relative time. This allows you to create human-readable strings like "in 2 days" or "1 day ago" in any language.

### ⚙️ Solution Walkthrough
A formatter is created and used with different units.
\`\`\`javascript
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

rtf.format(2, 'day');    // "in 2 days"
rtf.format(-1, 'day');   // "yesterday"
rtf.format(1, 'month');  // "in 1 month"
\`\`\`
### 📚 Key Concepts
-   **Internationalization (i18n)**: Formatting time differences in a human-readable way.
-   **\`Intl.RelativeTimeFormat\`**: The standard API for this purpose.
`,
  "weakref-conceptual": `
### 💡 Problem Breakdown
A \`WeakRef\` object holds a "weak reference" to another object (the "target"). A weak reference does not prevent the target object from being garbage collected if it's the *only* reference to that object. This is useful for caching or mapping data to large objects without causing memory leaks.

### ⚙️ Solution Walkthrough
A \`WeakRef\` is created.
\`\`\`javascript
let largeObject = { data: '...' };
const ref = new WeakRef(largeObject);

// To get the object back, you must use .deref()
const maybeObject = ref.deref();

// If largeObject is no longer referenced anywhere else...
largeObject = null;
// ...the garbage collector may reclaim it.
// At some point later, ref.deref() will start returning undefined.
\`\`\`
### 📚 Key Concepts
-   **\`WeakRef\`**: An object for creating a weak reference.
-   **Garbage Collection**: The automatic memory management process in JavaScript.
-   **Memory Management**: \`WeakRef\` is an advanced tool for managing memory in specific caching scenarios.
`,
  "finalizationregistry-conceptual": `
### 💡 Problem Breakdown
A \`FinalizationRegistry\` is an advanced feature that lets you register a callback to be run *after* an object has been garbage collected. This is not for typical memory management, but for cleaning up external, unmanaged resources associated with an object (e.g., a file handle or a connection to a hardware device).

### ⚙️ Solution Walkthrough
A registry is created and an object is registered with it.
\`\`\`javascript
const registry = new FinalizationRegistry(heldValue => {
  console.log(\`An object was garbage collected. Its held value was: \${heldValue}\`);
});

let myObject = { id: 1 };
// Register 'myObject'. When it's collected, the callback
// will receive the "held value" 'Object 1'.
registry.register(myObject, 'Object 1');

// Later...
myObject = null;
// At some point in the future, after the garbage collector runs,
// the callback will be invoked.
\`\`\`
### 📚 Key Concepts
-   **\`FinalizationRegistry\`**: An API for scheduling cleanup callbacks after garbage collection. It should be used only when necessary as its behavior is not guaranteed to be timely.
`,
  "private-in-operator-adv": `
### 💡 Problem Breakdown
ES2022 introduced the ability to use the \`in\` operator to check for the existence of a private field on an object from within the class. This is necessary because you cannot access or check for private fields from outside a class, and a normal check would throw a syntax error.

### ⚙️ Solution Walkthrough
A static method is used to check if an instance has a private field.
\`\`\`javascript
class MyClass {
    #privateField = 1;
    static hasPrivate(obj) {
        return #privateField in obj;
    }
}
const instance = new MyClass();
MyClass.hasPrivate(instance); // true
\`\`\`
### 📚 Key Concepts
-   **Ergonomic Brand Checks**: The primary use case for this feature is to allow one class to check if an object it receives is a true instance of that class (has its private fields), which is more robust than \`instanceof\`.
`,
  "array-groupby-conceptual": `
### 💡 Problem Breakdown
\`Array.prototype.groupBy\` is a new method that provides a declarative way to group the elements of an array based on a value returned by a callback function.

### ⚙️ Solution Walkthrough
A conceptual example of grouping an array of objects.
\`\`\`javascript
const inventory = [
  { name: 'apple', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
  { name: 'banana', type: 'fruit' }
];

// The callback determines the key to group by
const result = inventory.groupBy(item => item.type);
/* result would be an object (not a Map):
{
  fruit: [ { name: 'apple', ... }, { name: 'banana', ... } ],
  vegetable: [ { name: 'carrot', ... } ]
}
*/
\`\`\`
This is a very common data transformation that is now being standardized in the language.

### 📚 Key Concepts
-   **Data Aggregation**: Grouping items is a form of aggregation.
-   **groupBy()**: A new, declarative method for grouping array elements.
`,
  "regexp-match-indices": `
### 💡 Problem Breakdown
The \`d\` flag (ES2022) for regular expressions provides the start and end indices for the matched substrings of capture groups. This is useful for parsing tasks where you need to know the exact position of a match, not just its content.

### ⚙️ Solution Walkthrough
A regex with the \`d\` flag is executed. The result's \`.indices\` property contains the start/end positions.
\`\`\`javascript
const str = 'a=1, b=2';
const regex = /([a-z])=(\\d)/gd; // 'g' for global, 'd' for indices

const match = regex.exec(str);
// match.indices[0] is [0, 3] (for "a=1")
// match.indices[1] is [0, 1] (for the first capture group "a")
// match.indices[2] is [2, 3] (for the second capture group "1")
\`\`\`
### 📚 Key Concepts
-   **RegExp \`d\` flag**: A flag to request match indices for capture groups.
`,
  "import-assertions-conceptual": `
### 💡 Problem Breakdown
Import Assertions (now called "Import Attributes") are a syntax for providing additional information about a module being imported, most commonly its type. This allows the JavaScript host (like a browser or Node.js) to be sure it's handling the file correctly.

### ⚙️ Solution Walkthrough
The most common use case is for importing JSON modules.
\`\`\`javascript
// The 'with' keyword is the new standard syntax
import config from './config.json' with { type: 'json' };

// The older 'assert' syntax is also seen
// import config from './config.json' assert { type: 'json' };
\`\`\`
This tells the engine to parse the file as JSON. This is safer than letting the server's \`Content-Type\` header be the only source of truth, which could be misconfigured.

### 📚 Key Concepts
-   **Import Attributes**: A security feature for ES modules that provides hints about a module's expected format.
`,
  "error-cause-property": `
### 💡 Problem Breakdown
The \`cause\` property for \`Error\` objects (ES2022) provides a standard way to chain errors. When you catch a low-level error and throw a new, more specific high-level error, you can attach the original error as the \`cause\`. This provides a complete stack trace and context for debugging.

### ⚙️ Solution Walkthrough
A low-level error is caught and wrapped in a high-level error with a \`cause\`.
\`\`\`javascript
try {
  try {
    // Low-level database error
    throw new Error("Connection timed out");
  } catch (lowLevelError) {
    // Throw a new, more user-friendly error, but chain the original.
    throw new Error("Failed to fetch user data.", { cause: lowLevelError });
  }
} catch (e) {
  console.log(e.message); // "Failed to fetch user data."
  console.log(e.cause.message); // "Connection timed out"
}
\`\`\`
### 📚 Key Concepts
-   **Error Chaining**: A pattern for preserving the full context of an error as it propagates through different layers of an application.
`,
  "shadowrealms-conceptual": `
### 💡 Problem Breakdown
The ShadowRealm API is a Stage 3 proposal that provides a way to create a new, isolated global environment (a "realm") within the same JavaScript agent. This is a powerful tool for security and sandboxing.

### ⚙️ Solution Walkthrough
Code executed inside a ShadowRealm has its own global object and built-ins. It cannot access objects or globals from the outer realm, making it safe to run untrusted code.
\`\`\`javascript
// Create a new realm
const realm = new ShadowRealm();

// Execute code inside the realm using importValue
const result = await realm.importValue('./untrusted-module.js', 'someFunction');
// \`result\` is a function that can be called, but any objects
// it returns are from the realm and cannot be accessed directly.
\`\`\`
Communication between realms happens with callable functions and by passing primitive values.

### 📚 Key Concepts
-   **Sandboxing**: The practice of isolating code to prevent it from accessing or damaging the wider system.
-   **ShadowRealm API**: A new API for creating secure execution environments.
`,
  "temporal-api-conceptual": `
### 💡 Problem Breakdown
The built-in \`Date\` object in JavaScript is notoriously difficult to work with (it's mutable, has complex time zone behavior, and a confusing API). The **Temporal** API is a Stage 3 proposal that aims to be its modern replacement.

### ⚙️ Solution Walkthrough
Temporal provides a suite of immutable objects for different date/time use cases:
-   \`Temporal.PlainDate\`: A date without a time or time zone (e.g., '2024-01-20').
-   \`Temporal.PlainTime\`: A time without a date or time zone.
-   \`Temporal.ZonedDateTime\`: A date and time in a specific time zone.
-   \`Temporal.Duration\`: A length of time (e.g., '2 hours, 30 minutes').

These objects have a clean, modern API and are immutable, which prevents a large class of common bugs.
\`\`\`javascript
// Conceptual future code
const date1 = Temporal.PlainDate.from('2024-01-20');
const date2 = date1.add({ days: 5 }); // Returns a new object
\`\`\`
### 📚 Key Concepts
-   **Temporal API**: The upcoming modern standard for dates and times in JavaScript.
`,
  "decorator-metadata-conceptual": `
### 💡 Problem Breakdown
Decorators are a Stage 3 proposal for JavaScript that provide a syntax for "annotating" or modifying classes and their properties, methods, getters, and setters at design time. They are functions that are applied using an \`@\` prefix. They are often used with the **Metadata Reflection API** to attach metadata (type information, configuration) to a class.

### ⚙️ Solution Walkthrough
A conceptual example from a framework like Angular or NestJS.
\`\`\`javascript
// Using a library like reflect-metadata
import 'reflect-metadata';

// @Injectable() is a decorator
@Injectable()
class MyService {
  constructor(private http: HttpClient) {}
}
\`\`\`
1.  **Decorator (\`@Injectable()\`)**: This is a function call that modifies the \`MyService\` class.
2.  **Metadata**: The decorator might use the \`Reflect.defineMetadata()\` function to attach information to the class, such as the types of its constructor parameters.
3.  **Dependency Injection**: A framework's "injector" can later read this metadata using \`Reflect.getMetadata()\` to know that it needs to provide an instance of \`HttpClient\` when creating \`MyService\`.

### 📚 Key Concepts
-   **Decorators**: A syntax for metaprogramming that allows you to modify declarations.
-   **Reflection API**: A set of tools for inspecting and manipulating objects and their metadata at runtime.
`,
  "proxy-has-trap": `
### 💡 Problem Breakdown
The \`has\` trap on a Proxy intercepts the \`in\` operator. This allows you to define custom logic for checking the existence of a property, for example, to hide certain "private" properties.

### ⚙️ Solution Walkthrough
A proxy is created with a \`has\` trap that returns \`false\` for any property starting with an underscore.
\`\`\`javascript
const target = { a: 1, _b: 2 };
const handler = {
    has: (obj, prop) => {
        if (prop.startsWith('_')) {
            return false; // Lie and say it doesn't exist
        }
        return prop in obj; // Default behavior
        }
};
const proxy = new Proxy(target, handler);

'a' in proxy;  // true
'_b' in proxy; // false
\`\`\`
### 📚 Key Concepts
- **Proxy Traps**: Functions that provide access to fundamental object operations.
- \`in\` operator: A JavaScript operator that checks for property existence, including on the prototype chain.
`,
  "proxy-delete-trap": `
### 💡 Problem Breakdown
The \`deleteProperty\` trap on a Proxy intercepts the \`delete\` operator. This allows you to prevent certain properties from being deleted or to add custom logic (like logging) when a property is deleted.

### ⚙️ Solution Walkthrough
A proxy's \`deleteProperty\` trap is used to prevent any property starting with an underscore from being deleted.
\`\`\`javascript
const target = { a: 1, _protected: 2 };
const handler = {
    deleteProperty: (obj, prop) => {
        if (prop.startsWith('_')) {
            console.log('Cannot delete protected property');
            return false; // Signal failure
        }
        return Reflect.deleteProperty(obj, prop); // Default behavior
    }
};
const proxy = new Proxy(target, handler);

delete proxy.a;          // true
delete proxy._protected; // false (and logs message)
\`\`\`
### 📚 Key Concepts
- \`delete\` operator: A JavaScript operator used to remove a property from an object.
- \`Reflect.deleteProperty\`: The standard way to perform the default delete operation from within a trap.
`,
  "proxy-ownkeys-trap": `
### 💡 Problem Breakdown
The \`ownKeys\` trap on a Proxy intercepts operations that get the list of an object's own keys, such as \`Object.keys()\`, \`Object.getOwnPropertyNames()\`, \`Reflect.ownKeys()\`, and the \`for...in\` loop. This allows you to filter which keys are visible.

### ⚙️ Solution Walkthrough
A proxy uses the \`ownKeys\` trap to hide properties that start with an underscore.
\`\`\`javascript
const target = { a: 1, _b: 2 };
const handler = {
    ownKeys: (obj) => {
        return Reflect.ownKeys(obj).filter(key => !key.toString().startsWith('_'));
    }
};
const proxy = new Proxy(target, handler);

Object.keys(proxy); // ["a"]
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: The process of examining an object's structure. The \`ownKeys\` trap allows you to control this process.
`,
  "reflect-delete-property": `
### 💡 Problem Breakdown
\`Reflect.deleteProperty()\` is the functional equivalent of the \`delete\` operator. It takes an object and a property key, deletes the property, and returns a boolean indicating whether the deletion was successful.

### ⚙️ Solution Walkthrough
The method is used to delete a property.
\`\`\`javascript
const obj = { a: 1 };
const success = Reflect.deleteProperty(obj, 'a');

console.log(success); // true
console.log(obj.a);   // undefined
\`\`\`
It's often used inside a proxy's \`deleteProperty\` trap to perform the default behavior.

### 📚 Key Concepts
- \`Reflect\` API: Provides a set of static methods for JavaScript operations, often mirroring operators.
`,
  "reflect-own-keys": `
### 💡 Problem Breakdown
\`Reflect.ownKeys()\` returns an array of the target object's own (not inherited) property keys. It's more comprehensive than \`Object.keys()\` because it includes both string-keyed and symbol-keyed properties.

### ⚙️ Solution Walkthrough
The method is used on an object with a symbol key.
\`\`\`javascript
const sym = Symbol('s');
const obj = { a: 1, [sym]: 2 };

Object.keys(obj);      // ["a"]
Reflect.ownKeys(obj);  // ["a", Symbol(s)]
\`\`\`
### 📚 Key Concepts
- **Object Introspection**: \`Reflect.ownKeys()\` provides the most complete list of an object's own keys.
`,
  "generator-as-state-machine": `
### 💡 Problem Breakdown
A generator function is a natural fit for implementing a simple state machine. The \`yield\` statement can represent a state, and the execution pauses at that state until \`.next()\` is called to transition to the next state.

### ⚙️ Solution Walkthrough
A generator function is used to model a traffic light that cycles through its states.
\`\`\`javascript
function* trafficLight() {
    while (true) { // Create an infinite cycle
        yield 'Green';
        yield 'Yellow';
        yield 'Red';
    }
}

const light = trafficLight();
light.next().value; // "Green"
light.next().value; // "Yellow"
light.next().value; // "Red"
light.next().value; // "Green"
\`\`\`
### 📚 Key Concepts
- **State Machine**: A model of computation that can be in exactly one of a finite number of states at any given time.
- **Generators**: Provide a simple syntax for creating pausable, stateful functions.
`,
  "async-generator-basic": `
### 💡 Problem Breakdown
An async generator (\`async function*\`) combines the features of async functions and generator functions. It allows you to use both \`await\` and \`yield\` within the same function, making it easy to create iterators that produce values from asynchronous sources.

### ⚙️ Solution Walkthrough
An async generator yields a sequence of numbers with a delay between each yield.
\`\`\`javascript
const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function* myAsyncGenerator() {
    await delay(100);
    yield 1;
    await delay(100);
    yield 2;
}
// This is consumed with a for-await-of loop.
\`\`\`
### 📚 Key Concepts
- **Async Generator**: A function that returns an async iterator, which produces promises for the \{ value, done \} object.
`,
  "for-await-of": `
### 💡 Problem Breakdown
The \`for-await...of\` loop (ES2018) is a special loop for iterating over async iterables, such as the ones produced by async generators. It automatically handles waiting for the promise returned by the iterator's \`.next()\` method to resolve at each step.

### ⚙️ Solution Walkthrough
The loop is used to consume values from an async generator.
\`\`\`javascript
async function* myAsyncGen() { /* ... */ }

async function run() {
  // The loop automatically calls .next() and awaits the result
  for await (const value of myAsyncGen()) {
    console.log(value); // Logs 1, then 2, with delays in between
  }
}
\`\`\`
### 📚 Key Concepts
- \`for-await...of\`: A loop for iterating over async iterables.
`,
  "well-known-symbol-toprimitive": `
### 💡 Problem Breakdown
The \`Symbol.toPrimitive\` well-known symbol allows you to specify a function on an object that will be called whenever the object needs to be converted to a primitive value (e.g., during an arithmetic operation or when being converted to a string).

### ⚙️ Solution Walkthrough
An object implements this method to control its conversion to a number and a string.
\`\`\`javascript
const obj = {
  value: 10,
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.value;
    }
    if (hint === 'string') {
      return \`The value is \${this.value}\`;
    }
    return null; // Default
  }
};

console.log(Number(obj)); // 10
console.log(String(obj)); // "The value is 10"
console.log(obj + 5);     // 15 (hint is 'number' or 'default')
\`\`\`
### 📚 Key Concepts
- **Type Coercion**: This gives you explicit control over how your object behaves during implicit type coercion.
`,
  "well-known-symbol-hasinstance": `
### 💡 Problem Breakdown
The \`Symbol.hasInstance\` well-known symbol allows you to customize the behavior of the \`instanceof\` operator for a class. By implementing a static method with this key, you can define your own logic for what it means for an object to be an "instance" of your class.

### ⚙️ Solution Walkthrough
A class \`MyArray\` is created. Its \`[Symbol.hasInstance]\` method checks if a value is a standard \`Array\`, effectively making any array an "instance" of \`MyArray\`.
\`\`\`javascript
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([] instanceof MyArray); // true
\`\`\`
### 📚 Key Concepts
- \`instanceof\` operator: This symbol allows you to hook into and customize its behavior.
- **Metaprogramming**: Modifying the fundamental behavior of the language's operators.
`,
  "well-known-symbol-species": `
### 💡 Problem Breakdown
The \`Symbol.species\` well-known symbol allows you to control which constructor is used by methods on a subclass that return new instances (like \`Array.prototype.map\`). By default, if you extend \`Array\` and call \`.map()\` on your subclass, it will return a new instance of your subclass. Sometimes you may want it to return a standard \`Array\` instead.

### ⚙️ Solution Walkthrough
The \`MyArray\` subclass defines a static getter for \`Symbol.species\` that returns the base \`Array\` constructor.
\`\`\`javascript
class MyArray extends Array {
    // Override the species to return a regular Array from methods
    static get [Symbol.species]() {
        return Array;
    }
}
const a = new MyArray(1, 2, 3);
const mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
\`\`\`
### 📚 Key Concepts
- \`Symbol.species\`: A "well-known symbol" used to specify a constructor function that is used to create derived objects.
`,
  "intl-listformat": `
### 💡 Problem Breakdown
\`Intl.ListFormat\` (ES2021) is an object that enables language-sensitive list formatting. It can correctly format a list of items with commas and conjunctions (like "and" or "or") according to the rules of a specific language.

### ⚙️ Solution Walkthrough
A formatter for the English language is created and used.
\`\`\`javascript
const list = ['A', 'B', 'C'];
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
formatter.format(list); // "A, B, and C"
\`\`\`
### 📚 Key Concepts
- **Internationalization (i18n)**: Handling linguistic differences in formatting.
- \`Intl.ListFormat\`: The standard API for formatting lists of strings.
`,
  "intl-displaynames": `
### 💡 Problem Breakdown
\`Intl.DisplayNames\` (ES2021) is an object that provides a way to get the localized string representation of language, region, script, or currency codes.

### ⚙️ Solution Walkthrough
A formatter is used to get the English name for the German region code ("DE").
\`\`\`javascript
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
regionNames.of('DE'); // "Germany"
regionNames.of('JP'); // "Japan"
\`\`\`
### 📚 Key Concepts
- **Internationalization (i18n)**: Providing localized names for standard codes.
- \`Intl.DisplayNames\`: The standard API for this purpose.
`,
  "intl-segmenter-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem. Correctly splitting a string into words, sentences, or graphemes (what a user perceives as a single character, like an emoji with a skin tone modifier) is complex and language-dependent. The \`Intl.Segmenter\` API (ES2022) provides a standard, locale-sensitive way to perform this text segmentation.

### ⚙️ Solution Walkthrough
A conceptual example of splitting a string into words.
\`\`\`javascript
const str = "Hello, world!";
const segmenter = new Intl.Segmenter('en', { granularity: 'word' });
const segments = segmenter.segment(str);

// 'segments' is an iterator that you can loop over
for (const segment of segments) {
  // segment.segment is the word
  // segment.isWordLike is a boolean
}
\`\`\`
### 📚 Key Concepts
- **Text Segmentation**: The process of dividing written text into meaningful units.
- \`Intl.Segmenter\`: The standard API for locale-aware text segmentation.
`,
  "jit-compilation-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about how modern JavaScript engines like V8 (used in Chrome and Node.js) achieve high performance. They do not just interpret the JavaScript code.

### ⚙️ Solution Walkthrough
1.  **Interpreter**: The engine starts by interpreting the JS code. The interpreter runs the code line by line. It also collects profiling data about which parts of the code are run frequently ("hot spots").
2.  **JIT Compiler**: For functions that become "hot," the Just-In-Time (JIT) compiler takes over. It uses the profiling data to make optimizations and compiles that specific function down to highly efficient, low-level machine code.
3.  **De-optimization**: If an assumption the compiler made turns out to be wrong (e.g., a variable suddenly changes type), the engine can de-optimize, falling back to the interpreter for that function.

This hybrid approach provides both fast startup (from the interpreter) and high performance for frequently executed code (from the JIT compiler).

### 📚 Key Concepts
- **Just-In-Time (JIT) Compilation**: A performance optimization technique used by modern JavaScript engines.
`,
  "garbage-collection-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about automatic memory management in JavaScript. Developers do not need to manually allocate and free memory. The JavaScript engine's Garbage Collector (GC) handles this.

### ⚙️ Solution Walkthrough
The most common algorithm is **Mark-and-Sweep**:
1.  **Roots**: The GC starts with a set of "root" objects that are known to be accessible (e.g., the global \`window\` object, the currently executing function's variables).
2.  **Mark**: The GC traverses the object graph, starting from the roots. It finds and "marks" every object that is reachable from a root.
3.  **Sweep**: After the marking phase, the GC scans through all the objects in memory. Any object that was not marked is considered "unreachable" and its memory is reclaimed.

### 📚 Key Concepts
- **Garbage Collection (GC)**: The process of automatically freeing up memory that is no longer in use by the program.
- **Reachability**: The core concept the GC uses to determine if an object is still needed.
`,
  "tail-call-optimization-conceptual-adv": `
### 💡 Problem Breakdown
This is a conceptual problem about a compiler optimization. A "tail call" is when a function's very last action is to call another function. In recursion, if the recursive call is in a tail-call position, the engine can optimize it by reusing the current stack frame instead of creating a new one, preventing stack overflow errors for deep recursion.

### ⚙️ Solution Walkthrough
A factorial function is rewritten to be tail-recursive.
\`\`\`javascript
// NOT tail-recursive: an operation (n *) happens AFTER the call.
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// IS tail-recursive: the last thing is the function call.
function tailFactorial(n, accumulator = 1) {
  if (n === 0) return accumulator;
  return tailFactorial(n - 1, n * accumulator);
}
\`\`\`
1.  **Accumulator**: The key is to pass the intermediate result (the accumulator) down into the next recursive call, so no computation is needed on the way back up the call stack.

### 📚 Key Concepts
- **Tail Call Optimization (TCO)**: An optimization that can make certain types of recursion as efficient as iteration. Note: JavaScript engine support for TCO is limited and not guaranteed in all environments.
`,
  "atomics-wait-notify-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about low-level concurrency control with \`SharedArrayBuffer\`. \`Atomics.wait()\` and \`Atomics.notify()\` provide a way for one worker to sleep until another worker signals it, which is more efficient than constantly polling a value in a loop ("spin-locking").

### ⚙️ Solution Walkthrough
A conceptual locking mechanism.
\`\`\`javascript
// Shared memory: Int32Array on a SharedArrayBuffer. Let index 0 be the lock.
// 0 means unlocked, 1 means locked.

// --- Worker 1 (wants to acquire lock) ---
// Tries to change the lock from 0 to 1 atomically.
Atomics.compareExchange(sharedArray, 0, 0, 1);
// ... do work ...
// Unlock and notify anyone waiting
Atomics.store(sharedArray, 0, 0);
Atomics.notify(sharedArray, 0, 1); // Wake up one waiting worker


// --- Worker 2 (also wants to acquire lock) ---
// If the lock is already 1, it will wait.
Atomics.wait(sharedArray, 0, 1); // Puts this worker to sleep if the value at index 0 is 1.
// Once woken up, it can try to acquire the lock again.
\`\`\`
### 📚 Key Concepts
- **Concurrency Primitives**: Low-level tools for building multi-threaded applications.
`,
  "json-modules-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a modern ES module feature. JSON modules allow you to directly \`import\` a JSON file. The JavaScript engine will parse the file as JSON and provide the resulting object as the module's default export.

### ⚙️ Solution Walkthrough
The import uses an "import attribute" to specify the type.
\`\`\`javascript
// --- config.json ---
// { "apiKey": "abc12345" }

// --- main.js ---
import config from './config.json' with { type: 'json' };

console.log(config.apiKey); // "abc12345"
\`\`\`
This is safer and more ergonomic than using \`fetch\` to get the file, then calling \`response.json()\`.

### 📚 Key Concepts
- **Import Attributes**: A security and convenience feature for ES modules.
`,
  "array-findlast-es2023": `
### 💡 Problem Breakdown
These ES2023 methods are the counterparts to \`.find()\` and \`.findIndex()\`. They iterate the array from the last element to the first, returning the first value or index that satisfies the testing function.

### ⚙️ Solution Walkthrough
The methods are used to find the last element that meets a condition.
\`\`\`javascript
const arr = [10, 20, 30, 40, 50];
arr.findLast(n => n > 25); // 50
arr.findLastIndex(n => n > 25); // 4
\`\`\`
### 📚 Key Concepts
- \`.findLast()\` & \`.findLastIndex()\`: Methods for searching an array from right to left.
`,
  "array-immutable-methods-es2023": `
### 💡 Problem Breakdown
ES2023 introduced new immutable versions of common array methods. \`.toReversed()\`, \`.toSorted()\`, and \`.toSpliced()\` work just like their counterparts (\`.reverse()\`, \`.sort()\`, \`.splice()\`) but they return a new, modified array instead of mutating the original one.

### ⚙️ Solution Walkthrough
The immutable methods are used on an array.
\`\`\`javascript
const arr = [3, 1, 2];
const reversed = arr.toReversed(); // [2, 1, 3]
const sorted = arr.toSorted();   // [1, 2, 3]

console.log(arr); // [3, 1, 2] (original is unchanged)
\`\`\`
### 📚 Key Concepts
- **Immutability**: These new methods make it easier to follow functional programming patterns by avoiding side effects.
`,
  "hashbang-grammar-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a feature for creating command-line scripts with JavaScript. The "hashbang" or "shebang" is the first line of a script, \`#!\`, which tells a Unix-like operating system which interpreter to use to run the file.

### ⚙️ Solution Walkthrough
ES2023 standardized that JavaScript engines should ignore this first line.
\`\`\`javascript
#!/usr/bin/env node

// This is now a valid Node.js script
console.log('Hello from a script!');
\`\`\`
1.  Make the file executable: \`chmod +x my-script.js\`
2.  Run it directly from the shell: \`./my-script.js\`

### 📚 Key Concepts
- **Scripting**: Using JavaScript to create command-line tools.
`,
  "promise-withresolvables-conceptual-adv": `
### 💡 Problem Breakdown
\`Promise.withResolvables()\` is a new static method (ES2024) that creates a promise and exposes its \`resolve\` and \`reject\` functions. This is a convenience method that simplifies patterns where you need to create a promise and resolve/reject it from outside the constructor's scope.

### ⚙️ Solution Walkthrough
The method is used to create a "deferred" promise.
\`\`\`javascript
const { promise, resolve, reject } = Promise.withResolvables();

// We can now use the promise
promise.then(console.log);

// And resolve it from somewhere else, later
setTimeout(() => resolve("Resolved from outside!"), 100);
\`\`\`
This avoids having to define \`let resolveFunc;\` outside the scope of a \`new Promise\` constructor.

### 📚 Key Concepts
- \`Promise.withResolvables()\`: A new utility for creating promises where the settlement functions are needed externally.
`,
  "well-known-symbol-unscopables": `
### 💡 Problem Breakdown
This is a rarely used feature for backward compatibility. The \`Symbol.unscopables\` well-known symbol can be used to specify properties on an object's prototype that should *not* be added to the lexical scope when using the deprecated \`with\` statement.

### ⚙️ Solution Walkthrough
The \`values\` property is excluded from the \`with\` statement's scope.
\`\`\`javascript
const obj = {
  keys: ['a'],
  values: [1]
};
obj[Symbol.unscopables] = {
  values: true // Exclude 'values'
};

with (obj) {
  console.log(keys);   // ['a']
  // console.log(values); // ReferenceError: values is not defined
}
\`\`\`
### 📚 Key Concepts
- \`with\` statement: A deprecated language feature that is forbidden in strict mode.
`,
  "proxy-for-dom-nodes": `
### 💡 Problem Breakdown
This is a conceptual problem. A Proxy can be wrapped around a DOM element to intercept interactions with it. This can be useful for debugging, logging, or creating a custom API layer over a DOM element.

### ⚙️ Solution Walkthrough
A proxy's \`get\` trap could log all property accesses on a button element.
\`\`\`javascript
const myButton = document.getElementById('myBtn');
const buttonProxy = new Proxy(myButton, {
  get(target, prop) {
    console.log(\`Accessing property: \${String(prop)}\`);
    return Reflect.get(target, prop);
  }
});

// Now, any interaction like buttonProxy.id or buttonProxy.textContent
// will be logged to the console.
\`\`\`
### 📚 Key Concepts
- **Metaprogramming**: Using proxies to observe and control interactions with host objects like DOM elements.
`,
  "generator-for-async-control-flow": `
### 💡 Problem Breakdown
Before \`async/await\` was introduced, libraries like \`co\` used generators to enable a similar synchronous-looking style for asynchronous code. This problem demonstrates the underlying pattern.

### ⚙️ Solution Walkthrough
A "runner" function is created that takes a generator. It calls \`.next()\` on the generator's iterator. When it receives a yielded promise, it waits for it to resolve and then calls \`.next()\` again, passing the resolved value back into the generator.
\`\`\`javascript
function run(generator) {
  const iterator = generator();
  function advance(value) {
    const result = iterator.next(value);
    if (result.done) return result.value;
    result.value.then(val => advance(val));
  }
  advance();
}

// Usage
run(function*() {
  const result1 = yield Promise.resolve(1);
  const result2 = yield Promise.resolve(result1 + 1);
  console.log(result2); // 2
});
\`\`\`
### 📚 Key Concepts
- \`async/await\` Under the Hood: This pattern is essentially what \`async/await\` is syntactic sugar for.
`,
  "structured-clone": `
### 💡 Problem Breakdown
The \`structuredClone()\` global function (available in modern browsers and Node.js) provides a standard way to create a deep copy of a JavaScript value. It is more robust than the \`JSON.parse(JSON.stringify(obj))\` trick because it can handle more data types, such as \`Date\`, \`RegExp\`, \`Map\`, \`Set\`, and cyclical references.

### ⚙️ Solution Walkthrough
An object containing a \`Date\` and a \`Map\` is deep-copied.
\`\`\`javascript
const original = {
  date: new Date(),
  map: new Map([['a', 1]])
};
const copy = structuredClone(original);

// The nested objects are also new, independent instances
console.log(original.map === copy.map); // false
\`\`\`
### 📚 Key Concepts
- **Deep Copy**: Creating a completely independent copy of a data structure.
- \`structuredClone()\`: The modern, built-in API for deep copying.
`,
  "intl-locale-conceptual": `
### 💡 Problem Breakdown
The \`Intl.Locale\` object provides a standard way to parse and manipulate Unicode locale identifier strings (e.g., "en-US-u-ca-gregory").

### ⚙️ Solution Walkthrough
A new \`Intl.Locale\` object is created and its properties are inspected.
\`\`\`javascript
const locale = new Intl.Locale('fr-CA', {
  hourCycle: 'h12',
  calendar: 'gregory'
});

console.log(locale.baseName);    // "fr-CA"
console.log(locale.language);    // "fr"
console.log(locale.region);      // "CA"
console.log(locale.hourCycle);   // "h12"
\`\`\`
This is useful for parsing user locale preferences and configuring other \`Intl\` formatters.

### 📚 Key Concepts
- **Internationalization (i18n)**: \`Intl.Locale\` is a tool for working with locale identifiers.
`,
  "intl-calendars-timezones": `
### 💡 Problem Breakdown
The \`Intl.DateTimeFormat\` constructor can take options to format dates according to different calendars and time zones.

### ⚙️ Solution Walkthrough
A date is formatted for the Japanese calendar and Tokyo time zone.
\`\`\`javascript
const date = new Date();
const options = {
  timeZone: 'Asia/Tokyo',
  calendar: 'japanese',
  dateStyle: 'full'
};
const formatter = new Intl.DateTimeFormat('en-US', options);
// Example output: "Friday, May 3, 6 Heisei" (year depends on current date)
\`\`\`
### 📚 Key Concepts
- **Internationalization (i18n)**: Handling different calendar systems and time zones is a key part of i18n.
`,
  "reflect-getprototypeof": `
### 💡 Problem Breakdown
\`Reflect.getPrototypeOf()\` is the functional equivalent of \`Object.getPrototypeOf()\`. It returns the prototype of a given object.

### ⚙️ Solution Walkthrough
The method is used to get the prototype of an instance.
\`\`\`javascript
class MyClass {}
const inst = new MyClass();

const proto = Reflect.getPrototypeOf(inst);
console.log(proto === MyClass.prototype); // true
\`\`\`
It's often used in metaprogramming contexts where a functional approach is preferred over the static \`Object\` method.

### 📚 Key Concepts
- \`Reflect\` API: Provides a set of methods for JavaScript Operations.
`,
  "proxy-for-operator-overloading": `
### 💡 Problem Breakdown
This is a conceptual problem. JavaScript does not have traditional operator overloading (the ability to define what the \`+\` or \`*\` operators do for your custom objects). However, you can use Proxies to *simulate* this behavior by intercepting method calls that are named after the operation.

### ⚙️ Solution Walkthrough
You could create a custom \`Vector\` class and wrap it in a Proxy that intercepts a method call like \`add\`.
\`\`\`javascript
// This is not real operator overloading, but a simulation pattern.
class Vector { /* ... */ }
const handler = {
  get(target, prop) {
    if (prop === 'add') {
      return (otherVector) => { /* logic to add vectors */ };
    }
    // ... other "operators" ...
  }
};
\`\`\`
This allows for a syntax like \`proxyVector1.add(proxyVector2)\`, which feels more natural than a standard method call for some domains.

### 📚 Key Concepts
- **Operator Overloading**: A feature present in some languages (like C++) but not in JavaScript.
- **Proxies**: Can be used to create custom APIs and simulate language features.
`,
};
