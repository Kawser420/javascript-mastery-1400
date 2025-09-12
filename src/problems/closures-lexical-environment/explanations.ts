export const explanations: Record<string, string> = {
  'closure-counter': `
### 💡 Problem Breakdown
The challenge is to create a counter that remembers its value between calls. If you call it once, it should return 1; call it again, it should return 2. The key is that the variable holding the count must be private, inaccessible from the global scope. This is the classic problem to demonstrate closures.

### ⚙️ Solution Walkthrough
The solution uses a function factory pattern. An outer function is created and executed once, which sets up the private state and returns the inner function that will be used as the counter.
\`\`\`javascript
const counter = (() => {
    let count = 0; // This variable is "closed over"
    // This inner function is returned and becomes the counter
    return () => \`Counter is now: \${++count}\`;
})();

counter(); // "Counter is now: 1"
counter(); // "Counter is now: 2"
\`\`\`
1.  **IIFE**: The outer \`(() => { ... })()\` runs immediately, creating a private scope.
2.  **\`let count = 0;\`**: A variable \`count\` is declared in this private scope.
3.  **Return Inner Function**: The IIFE returns the inner arrow function. This inner function has no variables of its own, but it has access to the \`count\` variable from its parent's scope.
4.  **The Closure**: The returned function maintains a persistent reference to its parent's scope (its "lexical environment"). This "backpack" of variables (\`count\` in this case) is the closure. Even though the outer function has finished executing, the \`count\` variable is not garbage collected; it stays alive, accessible only to the function we assigned to \`counter\`.

### 📚 Key Concepts
-   **Closure**: The combination of a function and the lexical environment within which that function was declared.
-   **Lexical Environment**: The scope (variables, functions) that was physically present where a function was defined in the code.
-   **IIFE (Immediately Invoked Function Expression)**: A common pattern to create a private scope.
`,
  'lexical-scope': `
### 💡 Problem Breakdown
This problem demonstrates the fundamental concept of lexical (or static) scope in JavaScript. The goal is to show that a function's scope is determined by its physical placement in the code, not by where it is called. An inner function should be able to access variables from its containing outer function.

### ⚙️ Solution Walkthrough
The solution defines a nested function structure and shows the inner function accessing a variable from the outer scope.
\`\`\`javascript
const outerVar = "I am outside!";

function inner() {
    // Inner function has access to outerVar due to lexical scope
    return \`Inner function can access: "\${outerVar}"\`;
}

inner();
\`\`\`
1.  **\`outerVar\` Declaration**: A variable \`outerVar\` is declared in the outer (global) scope.
2.  **\`inner()\` Definition**: A function named \`inner\` is defined within the same scope.
3.  **Scope Chain**: When \`inner\` is executed and the engine sees \`outerVar\`, it first looks inside \`inner\`'s own scope. Not finding it, it looks one level up, in the scope where \`inner\` was defined (the global scope). It finds \`outerVar\` there and uses its value.

### 📚 Key Concepts
-   **Lexical Scope**: The scope of a variable is determined by its location within the source code. Inner scopes have access to variables in their outer scopes.
-   **Scope Chain**: The chain of nested scopes that the JavaScript engine traverses upwards to find a variable's value.
`,
  'private-data-closure': `
### 💡 Problem Breakdown
The goal is to simulate private data, a key concept in Object-Oriented Programming, using closures. We need to create an object that holds a person's name, but the name itself should not be directly accessible or modifiable from outside the object. Instead, we should only be able to interact with the name through "public" methods like \`getName\` and \`setName\`.

### ⚙️ Solution Walkthrough
The solution is a function factory, \`createPerson\`, that uses a closure to protect the \`privateName\` variable.
\`\`\`javascript
const createPerson = (name) => {
    let privateName = name; // Private variable

    return {
        getName: () => privateName,
        setName: (newName) => {
            privateName = newName;
        },
    };
};

const person = createPerson('John');
// person.privateName is undefined
person.getName(); // "John"
\`\`\`
1.  **\`createPerson(name)\`**: This is our factory function.
2.  **\`let privateName = name;\`**: This variable is local to the \`createPerson\` function's scope. This is the "private" data we want to protect.
3.  **\`return { ... }\`**: The factory returns an object. This object contains two methods, \`getName\` and \`setName\`, which form the "public interface".
4.  **The Closure in Action**: Both \`getName\` and \`setName\` are inner functions defined within the scope of \`createPerson\`. Because of closures, they both maintain a persistent reference to the \`privateName\` variable from their parent scope.

### 📚 Key Concepts
-   **Encapsulation**: Bundling data with the methods that operate on it, and restricting direct access to some of the object's components.
-   **Module Pattern**: This is a classic JavaScript design pattern that uses closures to create modules with public and private members.
`,
  'function-factory-multiplier': `
### 💡 Problem Breakdown
The task is to create a "function factory"—a function that creates and returns other functions. The factory will take a number (\`factor\`) and produce a new function. This new function will take its own number (\`num\`) and return the result of \`num * factor\`.

### ⚙️ Solution Walkthrough
The solution uses a nested function. The inner function forms a closure over the outer function's \`factor\` argument.
\`\`\`javascript
const createMultiplier = (factor) => {
  // This inner function "remembers" the factor
  return (num) => num * factor;
};

const multiplyBy5 = createMultiplier(5);
const result = multiplyBy5(10); // 50
\`\`\`
1.  **\`createMultiplier(5)\`**: This is called first. It creates a new lexical environment where \`factor\` is 5.
2.  **\`return (num) => ...\`**: It returns the inner function. This inner function maintains a closure over the environment where \`factor\` is 5.
3.  **\`multiplyBy5(10)\`**: When we call the returned function, it can still access the original \`factor\` and performs the calculation \`10 * 5\`.

### 📚 Key Concepts
-   **Function Factory**: A function that creates and returns another function.
-   **Closure**: The key mechanism that allows the inner function to "remember" the \`factor\` from its creation context.
`,
  'iife-private-scope': `
### 💡 Problem Breakdown
An Immediately Invoked Function Expression (IIFE) is a common JavaScript pattern for creating a private scope. The goal is to declare a variable that is not added to the global scope, preventing potential naming conflicts with other scripts.

### ⚙️ Solution Walkthrough
A function is wrapped in parentheses and immediately called, creating a scope that is executed and then discarded.
\`\`\`javascript
(function() {
  var secret = "I am a secret";
  // 'secret' only exists inside these parentheses.
})();

// console.log(secret); // This would throw a ReferenceError
\`\`\`
1.  **\`(function() { ... })\`**: The wrapping parentheses make the function an expression.
2.  **`()`**: The final parentheses at the end execute the function immediately.
3.  **Private Scope**: Any variables declared with \`var\`, \`let\`, or \`const\` inside the IIFE are local to that function and are not visible in the global scope.

### 📚 Key Concepts
-   **IIFE**: A pattern to execute a function immediately after it's defined.
-   **Scope**: A fundamental concept that controls the visibility and lifetime of variables and functions. IIFEs create a new function scope.
`,
  'closure-with-loop-let': `
### 💡 Problem Breakdown
This is a classic JavaScript interview question that highlights a key difference between \`var\` and \`let\`. The goal is to create several functions inside a loop, where each function should remember the value of the loop counter *at the time of its creation*.

### ⚙️ Solution Walkthrough
Using \`let\` in a \`for\` loop solves the problem naturally.
\`\`\`javascript
// This will create an array of functions
const functions = [];
for (let i = 0; i < 3; i++) {
  functions.push(() => console.log(i));
}

// When called, they log the correct values
functions[0](); // 0
functions[1](); // 1
functions[2](); // 2
\`\`\`
1.  **Block Scope of \`let\`**: When you use \`let\` in a \`for\` loop, a new lexical environment is created for *each iteration* of the loop.
2.  **Closure Capture**: The arrow function created in each iteration (\`() => console.log(i)\`) forms a closure over that iteration's unique environment. Therefore, \`functions[0]\` remembers the environment where \`i\` was 0, \`functions[1]\` remembers where \`i\` was 1, and so on.

### 📚 Key Concepts
-   **Block Scope**: \`let\` and \`const\` are block-scoped, meaning their scope is the block (\`{}\`) they are defined in.
-   **Closures in Loops**: A common pattern where \`let\` is essential for capturing the correct value from each iteration.
`,
  'memoization-with-closures': `
### 💡 Problem Breakdown
Memoization is an optimization technique where you cache the results of expensive function calls and return the cached result when the same inputs occur again. A closure is the perfect way to store this cache privately.

### ⚙️ Solution Walkthrough
A higher-order function \`memoize\` wraps another function. The closure of the returned function holds the \`cache\` object.
\`\`\`javascript
const memoize = (fn) => {
  const cache = {}; // The cache is stored in the closure
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key]; // Return from cache
    }
    const result = fn(...args);
    cache[key] = result; // Compute and store in cache
    return result;
  };
};
\`\`\`
1.  **\`cache = {}\`**: This object is created once when \`memoize\` is called.
2.  **Returned Function**: The function returned by \`memoize\` has a persistent closure over the \`cache\` object.
3.  **Logic**: Each time the returned function is called, it checks if the result for the given arguments already exists in the \`cache\`. If so, it returns the cached value instantly. If not, it calls the original function, stores the result in the cache, and then returns it.

### 📚 Key Concepts
-   **Memoization**: A caching technique for speeding up functions.
-   **Higher-Order Function**: \`memoize\` is a higher-order function because it takes a function as an argument and returns a new function.
-   **Closure**: The closure provides a private, persistent state (the \`cache\`) for the returned function.
`,
  'module-pattern': `
### 💡 Problem Breakdown
The Module Pattern is a design pattern used to create self-contained pieces of code with private and public members. It uses an IIFE and closures to achieve encapsulation.

### ⚙️ Solution Walkthrough
An IIFE creates a private scope. It returns an object that exposes only the desired public methods. These public methods have access to the private variables and functions within the closure.
\`\`\`javascript
const myModule = (function() {
  // Private members
  const privateVar = "I am private.";
  const privateMethod = () => privateVar;

  // Public API
  return {
    publicMethod: () => {
      return \`Public method can access: \${privateMethod()}\`;
    }
  };
})();

myModule.publicMethod(); // Works
// myModule.privateVar; // undefined
\`\`\`
1.  **IIFE**: Creates the private scope for the module.
2.  **Private Members**: \`privateVar\` and \`privateMethod\` are local to the IIFE and are not accessible from the outside.
3.  **Public API**: The returned object is the only thing accessible from the outside. Its methods (\`publicMethod\`) can access the private members because they are part of the same closure.

### 📚 Key Concepts
-   **Module Pattern**: A way to emulate classes and private members in pre-ES6 JavaScript.
-   **Encapsulation**: Hiding the internal state and implementation details of an object.
`,
  'closure-event-listener': `
### 💡 Problem Breakdown
This is a conceptual explanation of a very common use case for closures. When you add an event listener, the callback function you provide is an inner function. It can access variables from the outer scope where the event listener was defined.

### ⚙️ Solution Walkthrough
An event listener is added to a button. The callback function for the click event can access and modify the \`count\` variable from its parent scope.
\`\`\`javascript
let count = 0;
const button = document.getElementById('myButton');

// The callback function () => { ... } forms a closure
// over the scope containing 'count'.
button.addEventListener('click', () => {
  count++;
  console.log(\`Button clicked \${count} times\`);
});
\`\`\`
1.  **Outer Scope**: The \`count\` variable is defined.
2.  **Callback Definition**: The arrow function is defined within that same scope.
3.  **Event Trigger**: Much later, when the button is clicked, the callback function executes. Because of its closure, it can still find and update the original \`count\` variable.

### 📚 Key Concepts
-   **Closures**: The fundamental mechanism that makes event listeners in JavaScript powerful and intuitive.
`,
  'partial-application-closure': `
### 💡 Problem Breakdown
Partial application is the process of creating a new function by "pre-filling" some of the arguments of an existing, more general function. Closures are the perfect way to achieve this.

### ⚙️ Solution Walkthrough
A generic \`createLogger\` function takes a logging \`level\`. It returns a new function that takes a \`message\`. The returned function is a closure that remembers the original \`level\`.
\`\`\`javascript
const createLogger = (level) => {
  // This returned function remembers 'level'
  return (message) => {
    console.log(\`[\${level.toUpperCase()}]: \${message}\`);
  };
};

const infoLogger = createLogger("info");
const errorLogger = createLogger("error");

infoLogger("User logged in.");  // [INFO]: User logged in.
errorLogger("Failed to load resource."); // [ERROR]: Failed to load resource.
\`\`\`
1.  **Function Factory**: \`createLogger\` is a factory that produces specialized logger functions.
2.  **Closure**: The returned function closes over the \`level\` parameter, making it available for use when the logger is eventually called with a message.

### 📚 Key Concepts
-   **Partial Application**: A functional programming technique for creating specialized functions from more general ones.
`,
  'closure-timeout-scope': `
### 💡 Problem Breakdown
The \`setTimeout\` function provides a great example of closures in action. When you set a timeout, the callback function you provide doesn't run immediately. It's executed later, after the parent function that defined it has already finished. A closure is what allows the callback to still access the parent's variables.

### ⚙️ Solution Walkthrough
The \`run\` function defines a \`message\` variable and then sets a timeout.
\`\`\`javascript
function run() {
  const message = "Hello from the past!";
  setTimeout(() => {
    // This callback runs after 1 second
    // It can still access 'message' because of its closure.
    alert(message); 
  }, 1000);
}

run(); // The 'run' function finishes immediately.
// 1 second later, the alert appears.
\`\`\`
1.  **Parent Finishes**: The \`run\` function is called and completes its execution almost instantly.
2.  **Callback Waits**: The anonymous arrow function is scheduled to run in the future.
3.  **Closure Persists**: The JavaScript engine keeps the lexical environment of the \`run\` function (which contains the \`message\` variable) alive because it knows the timeout callback still has a reference to it.

### 📚 Key Concepts
-   **Asynchronous Callbacks**: Functions that are executed at a later point in time.
-   **Closures and Memory**: Closures are the reason variables are not garbage collected if an inner function still needs them.
`,
  'retaining-state-closure': `
### 💡 Problem Breakdown
This is another example of using a closure to maintain "state" between function calls, similar to the counter problem. Here, the function needs to remember the *previous* value it was called with.

### ⚙️ Solution Walkthrough
An IIFE is used to create a private \`previous\` variable. The returned function updates this state on each call.
\`\`\`javascript
const statefulSum = (() => {
  let previous = 0; // Private state
  return (current) => {
    const sum = previous + current;
    previous = current; // Update the state for the next call
    return sum;
  };
})();

statefulSum(5); // 0 + 5 = 5
statefulSum(10); // 5 + 10 = 15
statefulSum(3); // 10 + 3 = 13
\`\`\`
1.  **Private State**: The \`previous\` variable is created once and stored in the closure.
2.  **Stateful Function**: The returned function is "stateful" because its output depends not only on its current input but also on its past inputs (its internal state).

### 📚 Key Concepts
-   **State Management**: Using closures is a fundamental way to manage state without resorting to global variables or object properties.
`,
  'once-function': `
### 💡 Problem Breakdown
The task is to create a higher-order function named \`once\`. This function will take another function as input and return a new function that can only be executed a single time. All subsequent calls to the new function should not re-execute the original function but should return the result of the first execution.

### ⚙️ Solution Walkthrough
The \`once\` function uses a closure to store a boolean flag and the result of the first call.
\`\`\`javascript
const once = (fn) => {
  let hasBeenCalled = false;
  let result;
  return (...args) => {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args);
    }
    return result;
  };
};

const expensiveCalculation = () => { console.log("Calculating..."); return 42; };
const runOnce = once(expensiveCalculation);
runOnce(); // Logs "Calculating..." and returns 42
runOnce(); // Does not log, just returns 42
\`\`\`
1.  **Closure State**: The \`hasBeenCalled\` flag and the \`result\` variable are stored in the closure of the function returned by \`once\`.
2.  **First Call**: On the first execution, the flag is false, so the original function \`fn\` is called, the flag is set to true, and the result is stored.
3.  **Subsequent Calls**: On any later call, the flag is true, so the cached \`result\` is returned immediately without executing \`fn\` again.

### 📚 Key Concepts
-   **Higher-Order Function**: \`once\` is a higher-order function that wraps and modifies the behavior of another function.
-   **Stateful Closure**: The closure provides a private, persistent state for the wrapper function.
`,
  'closure-data-hiding': `
### 💡 Problem Breakdown
This is a practical application of the module pattern for data encapsulation. The goal is to create a simple "store" object that allows adding items and getting a count of items, but it should be impossible to access or modify the underlying array of items directly from the outside.

### ⚙️ Solution Walkthrough
A function factory \`createStore\` creates a private \`items\` array. It returns an object with public methods that have access to this array via their closure.
\`\`\`javascript
const createStore = () => {
  const items = []; // Private data
  return {
    addItem: (item) => { items.push(item); },
    getCount: () => items.length
  };
};

const store = createStore();
store.addItem("apple");
store.addItem("banana");
// store.items; // undefined, it's inaccessible
store.getCount(); // 2
\`\`\`
1.  **Private Array**: The \`items\` array exists only within the scope of the \`createStore\` function.
2.  **Public API**: The returned object exposes only two methods. These methods are the "gatekeepers" for the private data. They form a closure over the \`items\` array.

### 📚 Key Concepts
-   **Encapsulation**: Hiding the internal implementation details of an object and exposing a controlled public interface.
`,
  'closure-scope-chain-deep': `
### 💡 Problem Breakdown
This exercise is designed to explicitly demonstrate the "scope chain" in action with multiple levels of nesting. The innermost function should be able to access variables from its immediate parent, its grandparent, and the global scope.

### ⚙️ Solution Walkthrough
Three nested functions are created. The innermost function, \`fn3\`, references variables from all three scopes.
\`\`\`javascript
const v1 = "one"; // Global scope
function fn1() {
  const v2 = "two"; // fn1's scope
  function fn2() {
    const v3 = "three"; // fn2's scope
    // This function can see v3, v2, and v1
    return \`\${v1}, \${v2}, \${v3}\`;
  }
  return fn2();
}
fn1(); // "one, two, three"
\`\`\`
1.  **Variable Lookup**: When the engine executes the return statement in \`fn2\`, it looks for \`v3\` and finds it locally. It looks for \`v2\`, doesn't find it, so it goes up one level to \`fn1\`'s scope and finds it. It looks for \`v1\`, doesn't find it in \`fn2\` or \`fn1\`, so it goes up again to the global scope and finds it there.

### 📚 Key Concepts
-   **Scope Chain**: The ordered chain of lexical environments that the JavaScript engine traverses to find a variable.
`,
  'closure-with-async-await': `
### 💡 Problem Breakdown
This demonstrates that closures work seamlessly with modern asynchronous code. A variable defined in an outer function should still be accessible inside an \`async\` function, even after an \`await\` expression has paused the function's execution.

### ⚙️ Solution Walkthrough
The \`outerFunction\` defines a \`url\` variable. The inner \`async` function `fetchData` uses this \`url\` variable in its \`fetch\` call.
\`\`\`javascript
function outerFunction() {
  const url = "https://api.example.com/data";
  
  async function fetchData() {
    console.log(\`Fetching from: \${url}\`); // Accesses 'url' from closure
    // const response = await fetch(url); // Pauses here
    // 'url' is still available after the await
    // const data = await response.json();
    // return data;
  }
  
  fetchData();
}
\`\`\`
1.  **Closure Creation**: When \`fetchData\` is defined, it forms a closure over the scope of \`outerFunction\`, capturing the \`url\` variable.
2.  **`await` Pause**: When \`await\` is encountered, \`fetchData\` pauses, but its execution context and closure are preserved.
3.  **Resumption**: When the promise resolves and the function resumes, it still has access to its original closure and all its variables.

### 📚 Key Concepts
-   **Closures with Async Code**: Closures are fundamental to how asynchronous JavaScript works, preserving the context for callbacks, promises, and async functions.
`,
  'currying-add-function': `
### 💡 Problem Breakdown
Currying is a functional programming technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. This problem applies the concept to a function that adds three numbers.

### ⚙️ Solution Walkthrough
A series of nested arrow functions is created. Each inner function is a closure that "remembers" the arguments from the outer functions.
\`\`\`javascript
const add = (a) => (b) => (c) => a + b + c;

// Called all at once
add(10)(20)(30); // 60

// Partially applied
const add30 = add(10)(20);
add30(30); // 60
\`\`\`
1.  **`add(a)`**: Returns a function that remembers \`a\`.
2.  **`(b)`**: That returned function takes \`b\` and returns another function that remembers both \`a\` and \`b\`.
3.  **`(c)`**: The final function takes \`c\` and, having access to \`a\` and \`b\` from its closure, performs the calculation.

### 📚 Key Concepts
-   **Currying**: A functional programming pattern made possible by closures, allowing for easy partial application.
`,
  'closure-for-config': `
### 💡 Problem Breakdown
This is a practical use of a function factory. The goal is to create a function that takes an initial configuration object. It then returns a new, specialized function that uses this configuration in its operations. The configuration is "baked in" to the returned function via a closure.

### ⚙️ Solution Walkthrough
The \`setup\` function takes a \`config\` object. It returns a new function that uses the \`config.prefix\` when it's called.
\`\`\`javascript
const setup = (config) => {
  // The returned function is a closure over 'config'
  return (message) => {
    return \`\${config.prefix} \${message}\`;
  };
};

const greeter = setup({ prefix: "Hello," });
const questioner = setup({ prefix: "Question:" });

greeter("World"); // "Hello, World"
questioner("Why?"); // "Question: Why?"
\`\`\`
1.  **Configuration**: The initial call to \`setup\` provides the configuration.
2.  **Specialized Function**: The returned function is specialized. \`greeter\` will *always* use the "Hello," prefix because it was stored in its closure when it was created.

### 📚 Key Concepts
-   **Function Factory**: Creating specialized functions from a general template.
-   **Configuration Management**: A clean pattern for creating pre-configured functions.
`,
  'closure-and-garbage-collection': `
### 💡 Problem Breakdown
This is a conceptual problem about memory management in JavaScript. When a function finishes executing, any variables that were created inside it are typically "garbage collected" (i.e., the memory they occupied is reclaimed) if they are no longer reachable. However, a closure can keep variables from being garbage collected.

### ⚙️ Solution Walkthrough
An outer function returns an inner function. The inner function uses a variable from the outer function.
\`\`\`javascript
function createFunction() {
  const largeData = new Array(1000000).join('*'); // A large variable
  return () => {
    // This inner function has a closure over 'largeData'.
    // It keeps 'largeData' from being garbage collected.
    return largeData.length;
  };
}

const myFn = createFunction(); 
// At this point, createFunction has finished, but 'largeData' is
// still in memory because 'myFn' needs it.
\`\`\`
1.  **Reference**: The inner function maintains a reference to its lexical environment.
2.  **Memory**: As long as \`myFn\` itself is reachable, the \`largeData\` variable within its closure is also considered reachable and will not be removed from memory. If \`myFn\` were set to \`null\`, both could then be garbage collected.

### 📚 Key Concepts
-   **Garbage Collection**: The automatic memory management process in JavaScript.
-   **Memory Leaks**: A potential downside of closures if they are not managed properly. If you unintentionally create long-lived functions that close over large amounts of data, it can lead to memory leaks if the closures are not eventually released.
`,
  'closure-in-react-hooks-conceptual': `
### 💡 Problem Breakdown
This is a common issue for React developers. A "stale closure" occurs when an effect or callback (like in \`useEffect\`, \`useCallback\`, or an event handler) captures a state variable from a previous render and doesn't get the updated value from a new render.

### ⚙️ Solution Walkthrough
An effect with an empty dependency array creates a closure over the *initial* state.
\`\`\`javascript
// Conceptual React component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once.
    // The callback forms a closure over 'count' when its value is 0.
    const id = setInterval(() => {
      // This will always log 0, no matter how many times you click the button.
      // This is a "stale closure".
      console.log(\`Interval count: \${count}\`);
    }, 1000);
    return () => clearInterval(id);
  }, []); // Empty dependency array means this effect never re-runs

  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}
\`\`\`
1.  **Stale Closure**: The \`setInterval\` callback is created only during the first render, so its closure "sees" \`count\` as 0. Even when the component re-renders with a new value for \`count\`, this old callback is still running with its old closure.
2.  **The Fix**: Adding \`count\` to the dependency array (\`[count]\`) tells React to clean up the old interval and set up a *new* one (with a new closure over the new \`count\` value) whenever \`count\` changes.

### 📚 Key Concepts
-   **Stale Closure**: A closure that captures outdated variables from a previous scope.
-   **React Hooks**: Features like \`useEffect\` and \`useState\` rely heavily on closure principles.
`,
  'dynamic-function-creation': `
### 💡 Problem Breakdown
Because functions are first-class values, you can write a function that dynamically creates and returns other functions based on some input. This is a powerful metaprogramming concept and a variation of the factory pattern.

### ⚙️ Solution Walkthrough
The \`createOperation\` function takes a string and returns the corresponding arithmetic function.
\`\`\`javascript
const createOperation = (opName) => {
  if (opName === 'add') {
    return (a, b) => a + b;
  }
  if (opName === 'multiply') {
    return (a, b) => a * b;
  }
};

const addFunc = createOperation('add');
const result = addFunc(5, 10); // 15
\`\`\`
1.  **Conditional Return**: The factory uses an \`if\` statement to decide which function to create and return.
2.  **Closures (Implicit)**: While simple, the returned functions are still closures, though they don't close over any variables from the factory in this specific case.

### 📚 Key Concepts
-   **Metaprogramming**: A programming technique in which programs have the ability to treat other programs (in this case, functions) as their data.
-   **First-Class Functions**: The ability to return functions as values from other functions is a key feature of first-class functions.
`,
  'closure-shared-scope': `
### 💡 Problem Breakdown
This demonstrates that multiple functions can share access to the *same* lexical environment. If two or more functions are defined in the same parent scope, they will all share a closure over that scope and can modify the same variables.

### ⚙️ Solution Walkthrough
A factory function returns an object with two methods, \`inc\` and \`dec\`. Both of these methods are defined in the same scope and have a closure over the same \`shared\` variable.
\`\`\`javascript
const createShared = () => {
  let shared = 0; // This variable is shared
  return {
    inc: () => ++shared,
    dec: () => --shared,
  };
};

const counter = createShared();
counter.inc(); // shared is now 1
counter.inc(); // shared is now 2
counter.dec(); // shared is now 1
\`\`\`
1.  **Single Environment**: The lexical environment containing \`shared\` is created once when \`createShared\` is called.
2.  **Shared Closure**: Both the \`inc\` and \`dec\` functions are given a reference to this same environment. Any modification made by one function is visible to the other.

### 📚 Key Concepts
-   **Shared Scope**: Multiple closures can interact with the same set of closed-over variables.
`,
  'revealing-module-pattern': `
### 💡 Problem Breakdown
The Revealing Module Pattern is a slight variation on the standard Module Pattern. The key difference is that all functions and variables are kept private, and at the end, an anonymous object is returned that "reveals" pointers to the private members that you wish to make public. This can make the code cleaner and easier to modify.

### ⚙️ Solution Walkthrough
All functions are defined as private first. The returned object maps public names to these private functions.
\`\`\`javascript
const myRevealingModule = (function () {
  let privateName = 'John';
  // All functions are defined privately
  function publicSetName(name) { privateName = name; }
  function publicGetName() { return privateName; }

  // The returned object "reveals" the public members
  return {
    setName: publicSetName,
    getName: publicGetName
  };
})();
\`\`\`
1.  **All Private**: All logic is defined privately within the IIFE.
2.  **Public API**: The \`return\` statement acts as an explicit API definition, mapping public-facing names to the private implementation details. This makes it easy to see at a glance what the module exposes.

### 📚 Key Concepts
-   **Revealing Module Pattern**: An enhancement of the module pattern that promotes clearer separation between public and private code.
`,
  'closure-for-templating': `
### 💡 Problem Breakdown
This problem demonstrates a practical use of closures for creating a simple templating function. The idea is to create a function that takes a template string (e.g., "Hello, {{name}}") and returns a new function. This new function can then be called with a data object to fill in the template's placeholders.

### ⚙️ Solution Walkthrough
A factory function \`createTemplate\` takes a template string. The returned function is a closure that remembers this template string.
\`\`\`javascript
const createTemplate = (templateStr) => {
  // This function closes over 'templateStr'
  return (data) => {
    return templateStr.replace(/\\{\\{(\\w+)\\}\\}/g, (_, key) => data[key] || '');
  };
};

const welcomeTemplate = createTemplate("Hello, {{name}}!");
const message = welcomeTemplate({ name: 'Alice' }); // "Hello, Alice!"
\`\`\`
1.  **`createTemplate`**: This factory "compiles" the template (conceptually).
2.  **Closure**: The returned function keeps a reference to the \`templateStr\`.
3.  **Execution**: When the returned function is called with a data object, it uses the remembered template and the new data to produce the final string.

### 📚 Key Concepts
-   **Function Factory**: Creating reusable, pre-configured functions.
-   **Regular Expressions**: Used here to find the placeholders (like \`{{name}}\`) in the template string.
`,
  'closure-as-iterator': `
### 💡 Problem Breakdown
An iterator is an object that knows how to access items from a collection one at a time. A closure is a perfect way to implement a simple iterator, as it can maintain the current position (index) as private state between calls to the iterator's \`next\` function.

### ⚙️ Solution Walkthrough
The \`createIterator\` function takes an array. It creates a private \`index\` variable. The returned function is a closure over this \`index\`.
\`\`\`javascript
const createIterator = (arr) => {
  let index = 0; // Private state
  return () => {
    if (index < arr.length) {
      return arr[index++];
    }
    return 'Done';
  };
};

const next = createIterator(['a', 'b', 'c']);
next(); // 'a'
next(); // 'b'
next(); // 'c'
next(); // 'Done'
\`\`\`
1.  **Private Index**: The \`index\` is initialized to 0 and stored in the closure.
2.  **`next()` Function**: Each time the returned function (\`next\`) is called, it returns the element at the current \`index\` and then increments the index for the next call.

### 📚 Key Concepts
-   **Iterator Pattern**: A design pattern for sequentially accessing the elements of a collection.
-   **Stateful Function**: The returned function is stateful; its output changes with each call.
`,
  'closure-with-recursion': `
### 💡 Problem Breakdown
This problem combines two powerful concepts. We will use recursion to calculate Fibonacci numbers, but we'll wrap it in a closure to implement memoization (caching) to fix the massive inefficiency of the naive recursive solution.

### ⚙️ Solution Walkthrough
An IIFE creates a private \`cache\` object. It returns the recursive \`fib\` function. This \`fib\` function is a closure that has access to the \`cache\`.
\`\`\`javascript
const memoizedFib = (() => {
  const cache = {}; // Private cache in the closure
  
  function fib(n) {
    if (n in cache) return cache[n]; // Check the cache first
    if (n <= 1) return n;
    
    // Compute and store in cache
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }
  
  return fib;
})();

memoizedFib(40); // Calculates very quickly
\`\`\`
1.  **Private Cache**: The \`cache\` object is created once and persists.
2.  **Recursive Closure**: The \`fib\` function has a persistent closure over the \`cache\`.
3.  **Logic**: Before doing any recursive calculations, the function first checks if the result for \`n\` is already in the cache. This prevents the redundant calculations that make the naive version so slow.

### 📚 Key Concepts
-   **Memoization**: An optimization technique that relies on caching.
-   **Closures**: Provide the private, persistent state needed for the cache.
`,
  'closure-accessing-arguments': `
### 💡 Problem Breakdown
The \`arguments\` object is a special, array-like object that belongs to traditional (non-arrow) functions. This problem demonstrates that a closure created inside a traditional function also includes a reference to the parent function's \`arguments\` object.

### ⚙️ Solution Walkthrough
An outer function returns an inner arrow function. The inner function accesses the \`arguments\` object of its parent.
\`\`\`javascript
function outer() {
  // Arrow functions don't have their own 'arguments',
  // so they look up the scope chain.
  return () => arguments[0];
}

const inner = outer('hello', 'world');
inner(); // "hello"
\`\`\`
1.  **`outer('hello', 'world')`**: This is called, and its `arguments` object is \`['hello', 'world']\`.
2.  **Closure**: The returned arrow function forms a closure over the scope of \`outer\`.
3.  **Access**: When \`inner()\` is called, it resolves \`arguments\` by looking in its closure, finding the `arguments` object that belongs to \`outer\`.

### 📚 Key Concepts
-   **\`arguments\` object**: A feature of traditional functions.
-   **Lexical Scoping**: The inner function's ability to access variables and objects from its containing scope.
`,
  'closure-redefining-variable': `
### 💡 Problem Breakdown
This exercise demonstrates "variable shadowing." When an inner scope declares a variable with the same name as a variable in an outer scope, the inner variable takes precedence *within the inner scope*. The outer variable is temporarily "shadowed" and inaccessible by that name.

### ⚙️ Solution Walkthrough
Both the outer and inner scopes have a variable named \`x\`.
\`\`\`javascript
let x = "outer";

const myFunction = () => {
  let x = "inner"; // This 'x' shadows the outer 'x'
  return \`The inner x is "\${x}"\`;
};

myFunction(); // "The inner x is "inner""
// The outer x is unaffected and is still "outer"
\`\`\`
1.  **Scope Resolution**: When the code inside \`myFunction\` looks for the variable \`x\`, it finds the one declared locally within its own scope and stops searching. It does not continue up the scope chain to find the outer \`x\`.

### 📚 Key Concepts
-   **Variable Shadowing**: When a variable in an inner scope "hides" a variable of the same name from an outer scope.
`,
  'closure-performance-conceptual': `
### 💡 Problem Breakdown
This is a conceptual explanation of the memory implications of closures. While powerful, they can lead to performance issues if not used carefully.

### ⚙️ Solution Walkthrough
A closure keeps variables in memory that would otherwise be garbage collected.
\`\`\`javascript
function createLeakyFunction() {
  const veryLargeData = new Array(1000000).fill('*').join('');
  
  // This function keeps 'veryLargeData' in memory.
  return () => { /* does something small */ };
}

// If you create many of these and hold on to them,
// you could consume a lot of memory.
const leakyFunctions = [];
for (let i = 0; i < 100; i++) {
  leakyFunctions.push(createLeakyFunction());
}
\`\`\`
1.  **Memory Usage**: Each closure has its own lexical environment. If that environment contains large variables, those variables will remain in memory as long as the closure itself exists.
2.  **When to be Mindful**: This is generally not a problem for small-scale applications. However, in long-running applications (like a Node.js server) or when creating a very large number of closures that hold references to large data structures, it can lead to memory leaks if the closures are not eventually released.

### 📚 Key Concepts
-   **Memory Management**: Understanding how closures interact with JavaScript's garbage collector.
`,
  'closure-with-proxy': `
### 💡 Problem Breakdown
An ES6 \`Proxy\` is an object that wraps another object (the "target") and intercepts fundamental operations like getting or setting properties. A closure is a perfect way to store the private target object, ensuring that all interactions must go through the proxy.

### ⚙️ Solution Walkthrough
A function factory creates a private \`target\` object and a \`handler\`. It returns a \`Proxy\` that has a closure over these private variables.
\`\`\`javascript
const createSecureObject = (initialData) => {
  const target = { ...initialData }; // Private target
  
  const handler = {
    get: (obj, prop) => {
      if (prop.startsWith('_')) {
        return 'Access denied';
      }
      return obj[prop];
    }
  };
  
  return new Proxy(target, handler);
};

const user = createSecureObject({ name: 'User', _secret: '123' });
user.name; // "User"
user._secret; // "Access denied"
\`\`\`
1.  **Private Target**: The \`target\` object is stored in the closure and is inaccessible from the outside.
2.  **Controlled Access**: All access must go through the returned \`Proxy\`, which enforces the rules defined in the \`handler\`.

### 📚 Key Concepts
-   **Proxy**: An object that lets you intercept and redefine fundamental operations for another object.
-   **Encapsulation**: Using a closure to hide the target object provides strong encapsulation.
`,
  'closure-with-bind': `
### 💡 Problem Breakdown
This problem compares two ways of achieving partial application: using a closure and using the built-in \`.bind()\` method. Both techniques "remember" an argument for a future function call.

### ⚙️ Solution Walkthrough
An \`add\` function is partially applied using both methods.
\`\`\`javascript
function add(a, b) { return a + b; }

// 1. Using a closure
const add5_closure = (b) => add(5, b);

// 2. Using .bind()
// The first argument to bind is 'this', which we don't need, so it's null.
// Subsequent arguments are pre-filled.
const add5_bind = add.bind(null, 5);

add5_closure(10); // 15
add5_bind(10);    // 15
\`\`\`
1.  **Closure Approach**: This is the manual way, creating a new function that calls the original with the "remembered" argument.
2.  **`.bind()` Approach**: This is a built-in method that achieves a similar result. It creates a new function with a pre-set \`this\` context and a sequence of initial arguments.

### 📚 Key Concepts
-   **Partial Application**: The process of fixing a number of arguments to a function, producing another function of smaller arity.
`,
  'closure-for-rate-limiting': `
### 💡 Problem Breakdown
Rate limiting is a technique to control the rate at which a user or client can access a resource. A closure is ideal for implementing a simple rate limiter because it can store private state, like the timestamp of the last successful call, between function invocations.

### ⚙️ Solution Walkthrough
A higher-order function \`rateLimit\` wraps another function. It uses a closure to store the \`lastCallTime\`.
\`\`\`javascript
const rateLimit = (fn, delay) => {
  let lastCallTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCallTime > delay) {
      lastCallTime = now;
      return fn(...args);
    }
    return "Rate limit exceeded. Try again later.";
  };
};

const limitedApiCall = rateLimit(() => "API call successful!", 2000);
limitedApiCall(); // "API call successful!"
limitedApiCall(); // "Rate limit exceeded..."
\`\`\`
1.  **`lastCallTime`**: This variable is stored in the closure and persists across calls to \`limitedApiCall\`.
2.  **Time Check**: Each time the function is called, it checks if enough time (\`delay\`) has passed since the last successful call before executing the original function again.

### 📚 Key Concepts
-   **Higher-Order Function**: A function that wraps another to add new behavior.
-   **Stateful Closure**: The closure maintains the state (\`lastCallTime\`) needed for the rate limiting logic.
`,
  'closure-for-toggling': `
### 💡 Problem Breakdown
The goal is to create a function that cycles through a set of values each time it is called. For example, a simple toggle would switch between \`true\` and \`false\`. A closure is needed to remember the current state or index.

### ⚙️ Solution Walkthrough
An IIFE creates a private state variable. The returned function updates and returns the state on each call.
\`\`\`javascript
const toggler = (() => {
  let state = false; // Private state
  return () => {
    state = !state;
    return state;
  };
})();

toggler(); // true
toggler(); // false
toggler(); // true
\`\`\`
1.  **Private State**: The \`state\` variable is initialized once within the IIFE's scope.
2.  **State Update**: The returned function has a closure over \`state\`. Each time it's called, it inverts the boolean value of \`state\` and returns the new value.

### 📚 Key Concepts
-   **State Machine**: A simple state machine with two states. The closure holds the current state.
`,
  'namespacing-with-closures': `
### 💡 Problem Breakdown
"Namespacing" is the practice of creating a named object to group related functions and variables. This helps prevent "polluting" the global scope with many different variable names, which could lead to conflicts in large applications or when using multiple libraries. The Module Pattern, which uses a closure, is a perfect way to create a namespace.

### ⚙️ Solution Walkthrough
An IIFE is used to create a private scope. The IIFE returns an object which is assigned to a single global variable, \`MyNamespace\`.
\`\`\`javascript
var MyNamespace = (function() {
  // Private variables and functions
  var version = "1.0";
  function helper() { /* ... */ }

  // Public API
  return {
    featureA: () => { /* ... */ },
    featureB: () => { /* ... */ }
  };
})();
\`\`\`
1.  **Single Global**: Only one variable, \`MyNamespace\`, is added to the global scope.
2.  **Encapsulation**: All the internal workings, like \`version\` and \`helper\`, are kept private within the closure, while \`featureA\` and \`featureB\` are publicly exposed.

### 📚 Key Concepts
-   **Namespacing**: A technique to avoid naming collisions in the global scope.
-   **Module Pattern**: The design pattern used to implement namespacing.
`,
  'function-composition-closures': `
### 💡 Problem Breakdown
Function composition is the process of combining two or more functions to produce a new function. The output of one function becomes the input of the next. Closures are implicitly used when a composition function returns a new function that needs to remember the functions to be composed.

### ⚙️ Solution Walkthrough
The \`compose\` function takes two functions, \`f\` and \`g\`, as arguments. It returns a new function that, when called, will execute \`g\` first and then pass its result to \`f\`.
\`\`\`javascript
const compose = (f, g) => (x) => f(g(x));

const double = (n) => n * 2;
const add5 = (n) => n + 5;

// Create a new function that doubles a number, then adds 5
const doubleThenAdd5 = compose(add5, double);

doubleThenAdd5(10); // g(x) -> double(10) is 20. f(20) -> add5(20) is 25.
\`\`\`
1.  **Higher-Order Function**: \`compose\` is a higher-order function.
2.  **Returned Function**: The returned function \`(x) => ...\` is a closure that has access to \`f\` and \`g\` from its parent scope.

### 📚 Key Concepts
-   **Function Composition**: A core concept in functional programming for building complex logic from simple, reusable functions.
`,
  'closure-with-destructuring': `
### 💡 Problem Breakdown
This problem demonstrates how multiple functions returned from a factory can share the same closure, and how destructuring can be used to conveniently access these functions.

### ⚙️ Solution Walkthrough
A \`createCounter\` factory returns an object with three methods: \`inc\`, \`dec\`, and \`get\`. All three methods are closures over the same private \`count\` variable.
\`\`\`javascript
const createCounter = () => {
  let count = 0; // Shared private state
  return {
    inc: () => ++count,
    dec: () => --count,
    get: () => count
  };
};

// Use destructuring to get the methods
const { inc, dec, get } = createCounter();

inc(); // count is 1
inc(); // count is 2
get(); // returns 2
\`\`\`
1.  **Shared Closure**: \`inc\`, \`dec\`, and \`get\` are all defined in the same environment and share access to the \`count\` variable.
2.  **Destructuring**: This provides a convenient way to assign the public methods to local variables.

### 📚 Key Concepts
-   **Shared Scope**: Multiple closures interacting with the same closed-over variables.
-   **Object Destructuring**: A modern syntax for unpacking properties from objects.
`,
  'lazy-initialization-closure': `
### 💡 Problem Breakdown
Lazy initialization is a performance optimization pattern where you defer an expensive operation or object creation until the first time it is actually needed. A closure is a great way to manage the state for this, remembering whether the initialization has already occurred.

### ⚙️ Solution Walkthrough
An IIFE is used to create a private \`resource\` variable. The returned function checks if the resource has been initialized.
\`\`\`javascript
const getExpensiveResource = (() => {
  let resource; // Private state, initially undefined
  return () => {
    if (!resource) {
      console.log("Initializing resource now...");
      resource = { data: "Some very large data" };
    }
    return resource;
  };
})();

getExpensiveResource(); // Logs "Initializing..."
getExpensiveResource(); // Does not log, returns the same resource.
\`\`\`
1.  **Private State**: The \`resource\` variable is stored in the closure.
2.  **One-Time Initialization**: The \`if (!resource)\` block only executes on the very first call.
3.  **Cached Result**: All subsequent calls get the already-initialized resource.

### 📚 Key Concepts
-   **Lazy Initialization**: A performance pattern to defer expensive work.
-   **Singleton Pattern**: This is a form of the Singleton pattern, ensuring only one instance of the resource is ever created.
`,
  'closure-in-callbacks': `
### 💡 Problem Breakdown
This is a very common and practical application of closures. When you use an array method like \`.map()\`, the callback function you provide can access variables from the scope where \`.map()\` was called.

### ⚙️ Solution Walkthrough
The callback function passed to \`.map()\` accesses the \`multiplier\` variable from its parent scope.
\`\`\`javascript
function multiplyArray(arr, multiplier) {
  // The arrow function (n => ...) is a closure.
  // It captures the 'multiplier' variable.
  return arr.map(n => n * multiplier);
}

multiplyArray([1, 2, 3], 10); // [10, 20, 30]
\`\`\`
1.  **Outer Scope Variable**: \`multiplier\` is defined in the \`multiplyArray\` function's scope.
2.  **Closure**: The callback function, even though it's executed by the \`.map()\` method's internal logic, maintains a link to its original lexical environment and can therefore access \`multiplier\`.

### 📚 Key Concepts
-   **Higher-Order Functions**: Array methods like \`.map()\`, \`.filter()\`, and \`.forEach()\` are higher-order functions that rely on closures to work.
`,
  'closure-for-abstraction': `
### 💡 Problem Breakdown
Closures are a powerful tool for abstraction. Abstraction means hiding complex implementation details behind a simple interface. We can create a simple-to-use function that hides more complex logic inside its closure.

### ⚙️ Solution Walkthrough
The \`createApiEndpoint\` function takes a base URL and returns a new function. The new function only needs to be given the specific path, as the base URL is "remembered" in its closure.
\`\`\`javascript
const createApiEndpoint = (baseUrl) => {
  // Hides the complexity of knowing the full base URL
  return (path) => {
    return \`\${baseUrl}\${path}\`;
  };
};

const getApi = createApiEndpoint("https://api.example.com/v1");

const userUrl = getApi("/users"); // "https://api.example.com/v1/users"
const productsUrl = getApi("/products"); // "https://api.example.com/v1/products"
\`\`\`
1.  **Abstraction**: The user of the \`getApi\` function doesn't need to know or care about the base URL. The complexity is abstracted away.
2.  **Closure**: The returned function closes over the \`baseUrl\` variable.

### 📚 Key Concepts
-   **Abstraction**: A core programming principle of simplifying complexity by hiding unnecessary details.
`,
  'closure-with-generators': `
### 💡 Problem Breakdown
This problem combines closures with ES6 generator functions. A closure can be used to maintain the state for a generator.

### ⚙️ Solution Walkthrough
A factory function \`createIdGenerator\` takes a starting number. It returns a generator function that is a closure over its own private \`id\` counter.
\`\`\`javascript
const createIdGenerator = (start) => {
  let id = start; // Private state in the closure
  
  return function*() {
    while (true) {
      yield id++;
    }
  };
};

const idGen = createIdGenerator(100)(); // Note the second () to get the iterator
idGen.next().value; // 100
idGen.next().value; // 101
\`\`\`
1.  **Factory**: Creates the initial state (\`id\`).
2.  **Generator Function**: The returned \`function*()\` is a closure. Each time its \`.next()\` method is called, it yields the current value of the closed-over \`id\` and then increments it.

### 📚 Key Concepts
-   **Generator Functions**: Functions that can be paused and resumed, producing a sequence of values.
-   **Stateful Iterator**: Using a closure is a clean way to manage the internal state of a custom iterator.
`,
  'closure-with-promises': `
### 💡 Problem Breakdown
This demonstrates that closures work as expected with the asynchronous nature of Promises. Variables in the scope where a Promise is created are available within the \`.then()\` and \`.catch()\` callbacks.

### ⚙️ Solution Walkthrough
A variable \`contextId\` is defined. A promise is created, and its \`.then()\` callback accesses this variable.
\`\`\`javascript
function runAsyncTask() {
  const contextId = "Request123";
  
  new Promise(resolve => setTimeout(() => resolve("Data"), 100))
    .then(result => {
      // This callback has a closure over 'contextId'
      console.log(\`[\${contextId}]: \${result}\`);
    });
}
\`\`\`
1.  **Closure Creation**: The \`.then()\` callback is defined within the scope of \`runAsyncTask\` and forms a closure over its environment, capturing \`contextId\`.
2.  **Asynchronous Execution**: Even though the callback runs later, it can still access \`contextId\` from its closure.

### 📚 Key Concepts
-   **Promises**: Objects representing the eventual completion of an asynchronous operation.
-   **Closures**: The mechanism that allows promise callbacks to access the scope where they were created.
`,
  'closure-for-stopwatch': `
### 💡 Problem Breakdown
This is a practical example of the module pattern. We need to create a stopwatch with a public API (\`start\`, \`stop\`, \`getTime\`) but keep the internal state (\`startTime\`, \`running\`, \`elapsed\`) private and protected from outside interference. A closure is the perfect tool for this.

### ⚙️ Solution Walkthrough
An IIFE creates private state variables and returns an object of public methods that can manipulate this state.
\`\`\`javascript
const stopwatch = (function() {
  let startTime = 0, running = false, elapsed = 0; // Private state
  
  function start() {
    if (!running) {
      running = true;
      startTime = Date.now() - elapsed;
    }
  }
  
  // ... stop and getTime methods ...

  return { start, stop, getTime };
})();
\`\`\`
1.  **Private State**: \`startTime\`, \`running\`, and \`elapsed\` are completely hidden from the outside world.
2.  **Public API**: The returned object contains methods that are closures over the private state variables, allowing them to be read and modified in a controlled way.

### 📚 Key Concepts
-   **Module Pattern**: A powerful pattern for creating objects with private state and a public API.
-   **Encapsulation**: Protecting an object's state from direct external modification.
`,
  'closure-for-logging-context': `
### 💡 Problem Breakdown
This is a practical example of a function factory. We want to create specialized logging functions that automatically include a context tag (like the name of the module they're used in).

### ⚙️ Solution Walkthrough
The \`createLogger\` factory takes a \`context\` string. It returns a new function that is a closure over this \`context\`.
\`\`\`javascript
const createLogger = (context) => {
  return (message) => {
    console.log(\`[\${context}] \${message}\`);
  };
};

const apiLogger = createLogger("API_SERVICE");
const uiLogger = createLogger("UI_COMPONENT");

apiLogger("Request failed.");   // [API_SERVICE] Request failed.
uiLogger("Button clicked."); // [UI_COMPONENT] Button clicked.
\`\`\`
1.  **Factory**: Creates a pre-configured logger.
2.  **Closure**: The returned function "remembers" the context it was created with. This avoids having to pass the context string every time you want to log a message.

### 📚 Key Concepts
-   **Partial Application**: A form of partial application, where the first argument (\`context\`) is fixed.
`,
  'closure-capturing-this': `
### 💡 Problem Breakdown
This demonstrates a classic JavaScript problem where the \`this\` keyword inside a traditional callback function loses its intended context. A closure (either by saving \`this\` to a variable like \`self\` or by using an arrow function) is the solution.

### ⚙️ Solution Walkthrough
An object method uses \`setTimeout\` with a traditional function, which fails, and then with an arrow function, which succeeds.
\`\`\`javascript
const myObject = {
  name: "My Object",
  
  // Using an arrow function (modern solution)
  processWithArrow: function() {
    setTimeout(() => {
      // 'this' is lexically inherited from processWithArrow
      console.log(this.name); // "My Object"
    }, 100);
  }
};
\`\`\`
1.  **The Problem**: A traditional \`function()\` gets its own \`this\` binding, which is the global object (\`window\`) when used as a \`setTimeout\` callback.
2.  **The Solution**: An arrow function does not have its own \`this\`. It "captures" the \`this\` from its surrounding lexical context, which in this case is the \`processWithArrow\` method, where \`this\` correctly refers to \`myObject\`.

### 📚 Key Concepts
-   **Lexical \`this\`**: The key feature of arrow functions that solves many common \`this\`-related problems.
`,
  'closure-and-block-scope': `
### 💡 Problem Breakdown
This problem clarifies that closures capture variables based on their scope, whether that's a function scope or a block scope created by \`let\` or \`const\`.

### ⚙️ Solution Walkthrough
An inner function is created inside an \`if\` block. It forms a closure over a block-scoped variable.
\`\`\`javascript
function outer() {
  if (true) {
    const blockVar = "I am in a block";
    // This function's closure captures 'blockVar'
    return () => blockVar; 
  }
}

const inner = outer();
inner(); // "I am in a block"
\`\`\`
1.  **Block Scope**: \`blockVar\` exists only within the \`if\` block.
2.  **Closure Capture**: The returned arrow function is also defined within that block, so it forms a closure over that block's lexical environment.
3.  **Persistence**: Even after the \`if\` block and the \`outer\` function have finished executing, the closure keeps \`blockVar\` alive for the \`inner\` function to use later.

### 📚 Key Concepts
-   **Block Scope**: The scope created by \`let\` and \`const\` within \`{}\`.
-   **Closures**: Closures work with any type of lexical scope, not just function scope.
`,
  'closure-as-a-cache': `
### 💡 Problem Breakdown
This is another name for the memoization pattern. The core idea is to use a closure to hold a private cache object, allowing a function to avoid re-computing results for inputs it has seen before.

### ⚙️ Solution Walkthrough
A higher-order function creates a \`cache\` in its closure. The returned function checks this cache before performing its main logic.
\`\`\`javascript
const createCachedFunction = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return \`FROM CACHE: \${cache[key]}\`;
    }
    const result = fn(...args);
    cache[key] = result;
    return \`CALCULATED: \${result}\`;
  };
};
\`\`\`
This pattern is extremely effective for optimizing "pure" functions (functions that always return the same output for the same input).

### 📚 Key Concepts
-   **Memoization**: An optimization technique based on caching.
-   **Pure Functions**: The ideal candidates for memoization.
`,
  'closure-for-debouncing': `
### 💡 Problem Breakdown
Debouncing is a technique to limit the rate at which a function gets called. It ensures that a function doesn't get called again until a certain amount of time has passed without it being called. This is very useful for handling events that can fire rapidly, like resizing a window or typing in a search bar. A closure is used to store the timer ID.

### ⚙️ Solution Walkthrough
The \`debounce\` function returns a new function that manages a timer in its closure.
\`\`\`javascript
const debounce = (fn, delay) => {
  let timeoutId; // Stored in the closure
  return (...args) => {
    clearTimeout(timeoutId); // Clear the previous timer
    // Set a new timer
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
\`\`\`
1.  **`timeoutId`**: This variable persists between calls to the returned function.
2.  **Logic**: Each time the debounced function is called, it clears the previously scheduled execution and sets a new one. The original function \`fn\` only runs when the user stops calling the debounced function for the specified \`delay\`.

### 📚 Key Concepts
-   **Debouncing**: A rate-limiting technique for performance optimization.
`,
  'closure-for-throttling': `
### 💡 Problem Breakdown
Throttling is another rate-limiting technique. It ensures that a function is called at most once in a specified time interval. This is useful for events that fire continuously, like scrolling or mouse movement, to prevent the event handler from running too often. A closure is used to store the state (e.g., a "cooling down" flag).

### ⚙️ Solution Walkthrough
The \`throttle\` function returns a new function that uses a \`canRun\` flag in its closure.
\`\`\`javascript
const throttle = (fn, delay) => {
  let canRun = true; // Stored in the closure
  return (...args) => {
    if (canRun) {
      fn(...args);
      canRun = false;
      setTimeout(() => {
        canRun = true;
      }, delay);
    }
  };
};
\`\`\`
1.  **`canRun` flag**: This boolean persists in the closure.
2.  **Logic**: The first call executes the function immediately and sets \`canRun\` to \`false\`. A timer is set. Any calls that happen during the "cool down" period are ignored. When the timer finishes, it resets the \`canRun\` flag to \`true\`, allowing the function to be executed again.

### 📚 Key Concepts
-   **Throttling**: A rate-limiting technique that guarantees execution at a regular interval.
`,
  'closure-common-mistakes': `
### 💡 Problem Breakdown
This demonstrates the classic mistake of using \`var\` in a loop to create closures, where all closures capture the same final value of the loop variable.

### ⚙️ Solution Walkthrough
A \`for\` loop with \`var\` and \`setTimeout\` is used.
\`\`\`javascript
// The WRONG way
for (var i = 0; i < 3; i++) {
    // All three callbacks form a closure over the SAME 'i' variable.
    setTimeout(() => {
        console.log(i);
    }, 10);
}
// This will log 3, 3, 3 because the loop finishes and 'i' is 3
// before any of the callbacks run.
\`\`\`
1. **Single Variable**: \`var\` creates a single, function-scoped \`i\` variable. All callbacks reference this one variable.
2. **The Fix**: Using \`let\` instead of \`var\` solves this, because \`let\` creates a new block-scoped variable for each iteration of the loop, so each closure captures a different variable with the correct value.

### 📚 Key Concepts
- **Block Scope vs. Function Scope**: The critical difference between \`let\` and \`var\` that causes this behavior.
`,
};
