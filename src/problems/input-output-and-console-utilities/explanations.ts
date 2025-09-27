export const explanations: Record<string, string> = {
  // problem explanation--> 01
  "iocu-console-log-string": `
### 💡 Problem Breakdown
This is the most fundamental debugging and output tool in JavaScript. The task is to use the \`console.log()\` function to display a piece of data (in this case, a string) in the browser's developer console or a server's terminal. A backslash is this character: \`\\\`.

### ⚙️ Solution Walkthrough
The \`console.log()\` function takes one or more arguments and prints them to the console.
\`\`\`javascript
const message = "Hello, Console!";
console.log(message);
\`\`\`
When you run this code, you won't see any output on the web page itself. You need to open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect") and go to the "Console" tab to see the message. A file path might look like \`C:\\Users\\...\`.

### 📚 Key Concepts
- \`console\` object: A global object provided by the browser and Node.js environments that provides access to the debugging console.
- \`log()\` method: The primary method for general-purpose logging.
`,
  // problem explanation--> 02
  "iocu-console-log-number": `
### 💡 Problem Breakdown
The \`console.log()\` function can accept any data type, including numbers. The task is to log a numeric value.

### ⚙️ Solution Walkthrough
A number literal is passed directly to the \`console.log()\` function.
\`\`\`javascript
const value = 42;
console.log(value);
\`\`\`
Browser consoles will typically display numbers in a distinct color to differentiate them from strings.

### 📚 Key Concepts
- **Data Types**: \`console.log\` can handle all of JavaScript's primitive types and objects.
`,
  // problem explanation--> 03
  "iocu-console-log-multiple": `
### 💡 Problem Breakdown
You can pass multiple arguments to \`console.log()\`. The browser console will display them on the same line, separated by spaces. This is useful for logging a descriptive label alongside a variable's value without having to manually concatenate strings.

### ⚙️ Solution Walkthrough
A string label and an object are passed as separate arguments.
\`\`\`javascript
const user = { name: "Alice" };
const age = 30;
console.log("User:", user, "Age:", age);
\`\`\`
The output in the console will be something like: \`User: {name: "Alice"} Age: 30\`. This is often clearer than \`console.log("User: " + user)\`, which would coerce the object to the string \`"[object Object]"\`.

### 📚 Key Concepts
- **Variadic Functions**: Functions that can accept a variable number of arguments. \`console.log\` is a variadic function.
`,
  // problem explanation--> 04
  "iocu-console-log-object": `
### 💡 Problem Breakdown
Logging objects is a critical debugging technique. The task is to see how modern developer consoles display a JavaScript object.

### ⚙️ Solution Walkthrough
An object literal is created and passed to \`console.log()\`.
\`\`\`javascript
const user = { 
  id: 1, 
  name: "Alice", 
  roles: ["admin", "editor"] 
};
console.log(user);
\`\`\`
Instead of just printing \`[object Object]\`, modern consoles will display the object in an interactive, expandable tree format. You can click the arrows to inspect its properties, including nested arrays and objects.

### 📚 Key Concepts
- **Object Inspection**: The process of examining an object's properties and methods for debugging.
`,
  // problem explanation--> 05
  "iocu-console-log-array": `
### 💡 Problem Breakdown
Similar to objects, logging arrays to the console provides an interactive view for inspection.

### ⚙️ Solution Walkthrough
An array containing various data types is passed to \`console.log()\`.
\`\`\`javascript
const data = [1, "test", { a: 1 }, true];
console.log(data);
\`\`\`
The console will display the array with its indices, length, and an expandable view of its contents, including any nested objects.

### 📚 Key Concepts
- **Array Inspection**: A common debugging task to verify the contents of an array.
`,
  // problem explanation--> 06
  "iocu-console-error": `
### 💡 Problem Breakdown
\`console.error()\` is used specifically for logging error messages. While it behaves similarly to \`console.log\`, browsers typically style the output differently (e.g., with a red background and an error icon) and often include a stack trace, making errors more prominent.

### ⚙️ Solution Walkthrough
An error message string is passed to the function.
\`\`\`javascript
console.error("Something went wrong!");
\`\`\`
This is the standard way to log caught errors or other failure conditions in your application.

### 📚 Key Concepts
- \`console.error()\`: A method for logging messages at the "error" severity level.
- **Severity Levels**: Differentiating log messages by severity helps in filtering and analyzing logs.
`,
  // problem explanation--> 07
  "iocu-console-warn": `
### 💡 Problem Breakdown
\`console.warn()\` is used for logging warnings. These are for situations that are not necessarily errors but might be unexpected or indicate a potential problem (e.g., the use of a deprecated API).

### ⚙️ Solution Walkthrough
A warning message is passed to the function.
\`\`\`javascript
console.warn("This is a warning.");
\`\`\`
Browsers typically style warnings with a yellow background to differentiate them from regular logs and errors.

### 📚 Key Concepts
- \`console.warn()\`: A method for logging messages at the "warning" severity level.
`,
  // problem explanation--> 08
  "iocu-console-log-substitution-string": `
### 💡 Problem Breakdown
The \`console.log\` function supports C-style substitution strings for formatting. The \`%s\` specifier acts as a placeholder for a string value.

### ⚙️ Solution Walkthrough
The first argument is a format string, and the subsequent arguments are the values to be substituted into it.
\`\`\`javascript
const name = "Alice";
console.log("Hello, %s!", name);
// Output: Hello, Alice!
\`\`\`
### 📚 Key Concepts
- **String Formatting**: A way to create formatted strings without manual concatenation.
`,
  // problem explanation--> 09
  "iocu-console-log-substitution-integer": `
### 💡 Problem Breakdown
The \`%i\` or \`%d\` specifiers are used to substitute an integer value into a format string.

### ⚙️ Solution Walkthrough
A number is substituted into the log message.
\`\`\`javascript
const age = 30;
console.log("User is %i years old.", age);
// Output: User is 30 years old.
\`\`\`
If a floating-point number is passed, it will be truncated to an integer.

### 📚 Key Concepts
- **Format Specifiers**: Placeholders like \`%s\` and \`%i\` that define how subsequent arguments should be formatted.
`,
  // problem explanation--> 10
  "iocu-console-log-substitution-float": `
### 💡 Problem Breakdown
The \`%f\` specifier is used to substitute a floating-point number into a format string.

### ⚙️ Solution Walkthrough
A float is substituted into the log message.
\`\`\`javascript
const price = 19.99;
console.log("The price is $%f.", price);
// Output: The price is $19.99.
\`\`\`
### 📚 Key Concepts
- **Format Specifiers**: Placeholders that define how subsequent arguments should be formatted.
`,
  // problem explanation--> 11
  "iocu-console-log-substitution-object": `
### 💡 Problem Breakdown
The \`%o\` and \`%O\` specifiers are used to substitute a JavaScript object into the log message. They provide an interactive, expandable view of the object.
- \`%o\`: Displays an interactive representation, often optimized for the object type (e.g., a DOM element might show its HTML).
- \`%O\`: Displays a generic, JSON-like representation of the object.

### ⚙️ Solution Walkthrough
An object is logged using both specifiers.
\`\`\`javascript
const user = { name: "Bob", id: 2 };
console.log("User details (optimal format): %o", user);
console.log("User details (generic format): %O", user);
\`\`\`
### 📚 Key Concepts
- **Format Specifiers**: \`%o\` and \`%O\` are specifically for object inspection within a log string.
`,
  // problem explanation--> 12
  "iocu-console-table-array-of-objects": `
### 💡 Problem Breakdown
\`console.table()\` is a very useful debugging tool for displaying tabular data. When given an array of objects that share the same properties, it renders them in a clean, sortable table in the console.

### ⚙️ Solution Walkthrough
An array of user objects is passed to the function.
\`\`\`javascript
const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "editor" }
];
console.table(users);
\`\`\`
The console will display a table with an "(index)" column and columns for "id", "name", and "role".

### 📚 Key Concepts
- \`console.table()\`: A specialized console method for displaying tabular data.
`,
  // problem explanation--> 13
  "iocu-console-table-object": `
### 💡 Problem Breakdown
You can also use \`console.table()\` to display a single object. It will create a table with two columns: one for the indices (the object's keys) and one for the values.

### ⚙️ Solution Walkthrough
A user object is passed to the function.
\`\`\`javascript
const user = { id: 1, name: "Alice", role: "admin" };
console.table(user);
\`\`\`
### 📚 Key Concepts
- \`console.table()\`: A versatile display tool for both arrays of objects and single objects.
`,
  // problem explanation--> 14
  "iocu-console-table-array": `
### 💡 Problem Breakdown
When used with a simple array, \`console.table()\` displays a two-column table with the array indices and their corresponding values.

### ⚙️ Solution Walkthrough
A simple array is passed to the function.
\`\`\`javascript
const fruits = ["Apple", "Banana", "Cherry"];
console.table(fruits);
\`\`\`
### 📚 Key Concepts
- \`console.table()\`: Useful for inspecting the contents of any array.
`,
  // problem explanation--> 15
  "iocu-console-dir": `
### 💡 Problem Breakdown
When debugging, we often need to inspect the properties of an object. While \`console.log\` can provide an interactive view, \`console.dir\` is specifically designed to display an interactive, expandable list of all the properties of a JavaScript object.

### ⚙️ Solution Walkthrough
The solver demonstrates this by logging an object.
\`\`\`javascript
const user = { id: 1, name: "Alice", getInfo: () => {} };
console.dir(user);
\`\`\`
The output will be a hierarchical list that you can expand to inspect all of its properties and methods, including those inherited from its prototype. It's especially useful for inspecting DOM objects to see their full property list.

### 📚 Key Concepts
- \`console.dir()\`: A console method for displaying an object's properties in a list.
- **Object Inspection**: The process of examining an object's properties and methods for debugging.
`,
  // problem explanation--> 16
  "iocu-console-dirxml": `
### 💡 Problem Breakdown
The \`console.dirxml()\` method is a specialized console method that is useful for displaying an interactive XML or HTML tree representation of a DOM element.

### ⚙️ Solution Walkthrough
The method is called with a DOM element as its argument.
\`\`\`javascript
// In a browser console
console.dirxml(document.body);
\`\`\`
The output will be an expandable tree, similar to what you see in the Elements panel of the developer tools. This can be more useful than \`console.log\` for inspecting the structure of a DOM node object.

### 📚 Key Concepts
- \`console\` API: A rich set of tools for debugging.
- **DOM Inspection**: A way to programmatically inspect the structure of DOM elements.
`,
  // problem explanation--> 17
  "iocu-console-group": `
### 💡 Problem Breakdown
\`console.group()\` and \`console.groupEnd()\` are methods used to create an indented, collapsible group of related log messages in the console. This helps to organize complex logging output.

### ⚙️ Solution Walkthrough
A group is created for user details.
\`\`\`javascript
console.group("User Details");
console.log("Name: Alice");
console.log("ID: 1");
console.groupEnd();
\`\`\`
The messages between \`group\` and \`groupEnd\` will appear nested under the "User Details" label.

### 📚 Key Concepts
- **Console API**: A rich set of tools for logging and debugging.
`,
  // problem explanation--> 18
  "iocu-console-group-collapsed": `
### 💡 Problem Breakdown
The \`console.groupCollapsed()\` method is similar to \`console.group()\` but creates a new log group that is initially collapsed instead of open. This is very useful for logging large amounts of data or for verbose logging that you don't want to clutter the console by default.

### ⚙️ Solution Walkthrough
A collapsed group is created, and the user can click to expand it.
\`\`\`javascript
console.groupCollapsed('User Details');
console.log('Name: Alice');
console.log('ID: 1');
console.groupEnd();
console.log('This is outside the group.');
\`\`\`
### 📚 Key Concepts
- \`console\` API: A rich set of tools for debugging.
- **Log Organization**: Using groups helps to structure console output for better readability.
`,
  // problem explanation--> 19
  "iocu-console-group-nested": `
### 💡 Problem Breakdown
You can nest calls to \`console.group()\` to create a hierarchical, indented structure in your console logs. Each \`console.group()\` call creates a new level of indentation, and each \`console.groupEnd()\` closes the current level.

### ⚙️ Solution Walkthrough
An "Inner" group is created inside an "Outer" group.
\`\`\`javascript
console.group("Outer");
console.log("Level 1 message");
console.group("Inner");
console.log("Level 2 message");
console.groupEnd(); // Closes "Inner"
console.groupEnd(); // Closes "Outer"
\`\`\`
### 📚 Key Concepts
- **Log Organization**: Nested groups are useful for tracing hierarchical operations, like a recursive function's execution.
`,
  // problem explanation--> 20
  "iocu-console-time": `
### 💡 Problem Breakdown
\`console.time()\` and \`console.timeEnd()\` are a pair of methods used for simple performance measurement. You start a timer with a specific label, and when you end it with the same label, the browser logs the elapsed time in milliseconds.

### ⚙️ Solution Walkthrough
The duration of a loop is measured.
\`\`\`javascript
console.time("my-timer");
// Perform some operation
for(let i=0; i<1e6; i++) { /* ... */ }
console.timeEnd("my-timer");
// Logs something like: "my-timer: 5.123ms"
\`\`\`
### 📚 Key Concepts
- **Performance Measurement**: A simple tool for timing code execution.
`,
  // problem explanation--> 21
  "iocu-console-time-with-label": `
### 💡 Problem Breakdown
The \`console.time()\` and \`console.timeEnd()\` methods can take a label. This allows you to manage multiple, independent timers at the same time, which is useful for comparing the performance of different operations.

### ⚙️ Solution Walkthrough
Two timers are run concurrently.
\`\`\`javascript
console.time('Task A');
console.time('Task B');

// ... some work for A ...
console.timeEnd('Task A');

// ... some work for B ...
console.timeEnd('Task B');
\`\`\`
The console will output the duration for each labeled timer separately.

### 📚 Key Concepts
- **\`console.time\` API**: A simple, built-in tool for basic performance measurements.
`,
  // problem explanation--> 22
  "iocu-console-time-log": `
### 💡 Problem Breakdown
The \`console.timeLog()\` method allows you to log intermediate timestamps for a timer that was started with \`console.time()\`. This is useful for profiling different stages of a longer operation.

### ⚙️ Solution Walkthrough
A timer is started, and timestamps are logged at two intermediate points.
\`\`\`javascript
console.time("process"); // Starts the timer

// Some work...
console.timeLog("process", "Step 1 Finished"); // Logs the time elapsed so far with a label

// More work...
console.timeLog("process", "Step 2 Finished");

console.timeEnd("process"); // Stops the timer and logs the total time
\`\`\`
### 📚 Key Concepts
- **Performance Profiling**: The practice of measuring the time and resource consumption of code to identify bottlenecks.
`,
  // problem explanation--> 23
  "iocu-console-assert": `
### 💡 Problem Breakdown
\`console.assert()\` is a conditional logging method. It takes a condition as its first argument. If the condition is \`false\`, it logs the subsequent arguments to the console as an error. If the condition is \`true\`, it does nothing.

### ⚙️ Solution Walkthrough
An assertion is made that should fail.
\`\`\`javascript
const x = 5;
const y = 10;
// The assertion is false, so an error will be logged.
console.assert(x > y, { message: "Assertion Failed: x is not > y", x, y });
\`\`\`
This can be useful for creating "assertions" or checks for invariants in your code during development.

### 📚 Key Concepts
- **Assertion**: A statement that a condition must be true at a certain point in a program.
`,
  // problem explanation--> 24
  "iocu-console-count": `
### 💡 Problem Breakdown
The \`console.count()\` method is a simple but useful debugging tool for counting how many times a specific piece of code has been executed. By default, it uses a label of "default".

### ⚙️ Solution Walkthrough
The method is called multiple times.
\`\`\`javascript
for (let i = 0; i < 3; i++) {
  console.count(); 
}
// Console output:
// default: 1
// default: 2
// default: 3
\`\`\`
### 📚 Key Concepts
- \`console\` API**: A rich set of tools for debugging directly in the browser console.
`,
  // problem explanation--> 25
  "iocu-console-count-with-label": `
### 💡 Problem Breakdown
The \`console.count()\` method can take a string label as an argument. This allows you to maintain multiple, independent counters, which is useful for tracking different events.

### ⚙️ Solution Walkthrough
Two different counters are used.
\`\`\`javascript
console.count('Event A'); // Event A: 1
console.count('Event B'); // Event B: 1
console.count('Event A'); // Event A: 2
\`\`\`
### 📚 Key Concepts
- **\`console.count\`**: A simple debugging tool for tracking the frequency of code execution.
`,
  // problem explanation--> 26
  "iocu-console-count-reset": `
### 💡 Problem Breakdown
The \`console.countReset()\` method resets the counter for a specific label that was being used with \`console.count()\`.

### ⚙️ Solution Walkthrough
A counter is used and then reset.
\`\`\`javascript
console.count('my-label'); // my-label: 1
console.count('my-label'); // my-label: 2
console.countReset('my-label');
console.count('my-label'); // my-label: 1
\`\`\`
This is useful when you need to restart a count for a specific event or in a new phase of your application's lifecycle.

### 📚 Key Concepts
- **\`console.count\` API**: A set of methods for managing named counters for debugging.
`,
  // problem explanation--> 27
  "iocu-console-trace": `
### 💡 Problem Breakdown
\`console.trace()\` is a console method that outputs a message to the console and also outputs a stack trace, showing the sequence of function calls that led to the \`console.trace()\` call.

### ⚙️ Solution Walkthrough
A nested function call is traced.
\`\`\`javascript
function a() { b(); }
function b() { console.trace("Trace from b"); }
a();
\`\`\`
The console output will show the message and a trace like:
- \`b\` at \`(line number)\`
- \`a\` at \`(line number)\`

### 📚 Key Concepts
- **Stack Trace**: A fundamental tool for understanding the flow of execution in your code.
`,
  // problem explanation--> 28
  "iocu-console-clear": `
### 💡 Problem Breakdown
The \`console.clear()\` method is a simple utility for clearing the browser's developer console of all previous messages.

### ⚙️ Solution Walkthrough
Calling the function is straightforward.
\`\`\`javascript
console.log("Message 1");
console.clear();
console.log("Message 2"); // Only Message 2 will be visible
\`\`\`
This is very useful during development to clean up clutter from previous runs of your code, making it easier to see fresh output.

### 📚 Key Concepts
- \`console\` API**: A rich set of tools for debugging.
`,
  // problem explanation--> 29
  "iocu-console-info": `
### 💡 Problem Breakdown
The \`console.info()\` method is used to output an informational message. In most browsers, it is visually identical to \`console.log()\`, but some may add a small "i" icon. It's semantically useful for distinguishing informational messages from general logs or debug messages, and console filters can be used to show only certain levels.

### ⚙️ Solution Walkthrough
An informational message is logged.
\`\`\`javascript
console.info("Application has started successfully.");
\`\`\`
### 📚 Key Concepts
- **Log Levels**: A way to categorize the importance of console messages.
`,
  // problem explanation--> 30
  "iocu-console-debug": `
### 💡 Problem Breakdown
The \`console.debug()\` method is intended for verbose logging messages that are only of interest when you are deeply debugging a specific part of the code. By default, most browser consoles hide "Debug" level messages.

### ⚙️ Solution Walkthrough
A debug message is logged.
\`\`\`javascript
console.debug("Variable 'x' is now 5.");
\`\`\`
To see the output, you would need to go to your browser's console settings and enable the "Verbose" or "Debug" logging level.

### 📚 Key Concepts
- **Log Levels**: The "Debug" level is the most verbose and is typically filtered out by default to reduce console noise.
`,
  // problem explanation--> 31
  "iocu-pretty-print-object": `
### 💡 Problem Breakdown
When you log a complex or nested object with \`console.log\`, it can be hard to read. The \`JSON.stringify\` method has optional arguments that allow you to "pretty-print" an object into a nicely formatted, indented string.

### ⚙️ Solution Walkthrough
The third argument to \`JSON.stringify\` controls the indentation.
\`\`\`javascript
const user = { name: "Alice", details: { age: 30, roles: ["admin", "editor"] } };

// The 'null' is for the replacer function, which we are not using here.
// The '2' is the number of spaces to use for indentation.
const prettyJSON = JSON.stringify(user, null, 2);

console.log(prettyJSON);
\`\`\`
### 📚 Key Concepts
- **JSON Serialization**: Converting a JavaScript object into a JSON string.
- **Code Readability**: Formatting output to make it easier for humans to read and debug.
`,
  // problem explanation--> 32
  "iocu-console-log-vs-dir": `
### 💡 Problem Breakdown
This problem compares the output of \`console.log\` and \`console.dir\` when used on a DOM element.
- \`console.log(element)\`: In many browsers, this will show a clean, HTML-like representation of the element and its children. This is useful for seeing the structure.
- \`console.dir(element)\`: This will show the DOM element *object* itself. It displays a hierarchical list that you can expand to inspect all of its JavaScript properties and methods.

### ⚙️ Solution Walkthrough
The two methods are called on \`document.body\`.
\`\`\`javascript
console.log(document.body); // Shows <body ...>...</body>
console.dir(document.body); // Shows the HTMLBodyElement object properties
\`\`\`
Use \`console.dir\` when you need to understand the underlying object model of an element.

### 📚 Key Concepts
- **DOM Inspection**: Different tools provide different views of DOM elements.
`,
  // problem explanation--> 33
  "iocu-console-timestamp": `
### 💡 Problem Breakdown
This is a conceptual problem about a performance profiling tool. The \`console.timeStamp()\` method adds an event marker to the browser's performance timeline (in the "Performance" tab of developer tools). It does not log anything to the console itself.

### ⚙️ Solution Walkthrough
This is only useful when a performance recording is active.
\`\`\`javascript
function processData() {
  console.timeStamp("Started processing");
  // ... expensive work ...
  console.timeStamp("Finished processing");
}
\`\`\`
When you record a performance profile and run this function, you will see "Started processing" and "Finished processing" markers in the timeline, which can help you correlate your code's execution with other browser events like rendering and layout.

### 📚 Key Concepts
- **Performance Profiling**: A set of advanced tools for analyzing application performance.
`,
  // problem explanation--> 34
  "iocu-alert-basic": `
### 💡 Problem Breakdown
The \`alert()\` function displays a modal dialog with a specified message and an OK button. It's a simple way to show information to the user, but it's also **blocking**.

### ⚙️ Solution Walkthrough
A message is passed to the function.
\`\`\`javascript
alert("This is an alert!");
console.log("This line will not run until the alert is closed.");
\`\`\`
Because it blocks all other script execution and user interaction with the page, \`alert()\` is generally avoided in modern web applications in favor of custom, non-blocking UI elements.

### 📚 Key Concepts
- **Modal Dialogs**: UI elements that demand the user's interaction.
- **Blocking Operations**: Code that halts the execution of all other JavaScript.
`,
  // problem explanation--> 35
  "iocu-prompt-basic": `
### 💡 Problem Breakdown
The \`prompt()\` function displays a dialog with a message prompting the user for input. It's a way to get a string of text from the user. It is also **blocking**.

### ⚙️ Solution Walkthrough
The function returns the text entered by the user, or \`null\` if the user clicks Cancel.
\`\`\`javascript
const result = prompt("What is your name?");
if (result) {
  console.log(\`Hello, \${result}\`);
} else {
  console.log("User cancelled.");
}
\`\`\`
### 📚 Key Concepts
- **User Input**: A native (but rarely used) way to get input from the user.
`,
  // problem explanation--> 36
  "iocu-confirm-basic": `
### 💡 Problem Breakdown
The \`confirm()\` function displays a modal dialog with a question and two buttons: OK and Cancel. It's used for simple yes/no questions. It is **blocking**.

### ⚙️ Solution Walkthrough
The function returns a boolean value: \`true\` if the user clicks OK, and \`false\` if they click Cancel.
\`\`\`javascript
const result = confirm("Are you sure?");
if (result) {
  console.log("User confirmed.");
} else {
  console.log("User cancelled.");
}
\`\`\`
### 📚 Key Concepts
- **Boolean Input**: A native way to get a boolean confirmation from the user.
`,
  // problem explanation--> 37
  "iocu-prompt-with-default": `
### 💡 Problem Breakdown
The \`prompt()\` function can take an optional second argument, which is a string to be used as the default value in the input field of the dialog.

### ⚙️ Solution Walkthrough
A default value is provided.
\`\`\`javascript
const result = prompt("What is your name?", "Guest");
\`\`\`
The input field in the prompt dialog will be pre-filled with the word "Guest".

### 📚 Key Concepts
- **Function Arguments**: Understanding optional arguments of built-in functions.
`,
  // problem explanation--> 38
  "iocu-alert-coercion": `
### 💡 Problem Breakdown
The \`alert()\` function expects a string to display. If you pass it a non-string value, like an object, it will implicitly coerce that value to a string by calling its \`.toString()\` method.

### ⚙️ Solution Walkthrough
An object is passed to \`alert\`.
\`\`\`javascript
const user = { name: "Alice" };
// The default .toString() for a plain object returns "[object Object]"
alert(user); 
\`\`\`
The alert box will display the unhelpful string "[object Object]".

### 📚 Key Concepts
- **Type Coercion**: An implicit string conversion performed by \`alert()\`.
`,
  // problem explanation--> 39
  "iocu-blocking-modals-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a major drawback of the native modal functions (\`alert\`, \`prompt\`, \`confirm\`). They are **synchronous and blocking**. When one of these dialogs is displayed, the entire JavaScript main thread is paused.

### ⚙️ Solution Walkthrough
- No other JavaScript (like timers or event handlers) can run.
- CSS animations and GIFs may freeze.
- The user cannot interact with any other part of the page.

This creates a poor user experience, which is why modern applications build their own non-blocking modals using HTML, CSS, and event listeners.

### 📚 Key Concepts
- **Blocking vs. Non-blocking**: A fundamental concept in user interface design and asynchronous programming.
`,
  // problem explanation--> 40
  "iocu-custom-dialog-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem comparing native modals with custom-built ones. Modern web applications almost never use the native \`alert\`, \`prompt\`, and \`confirm\` dialogs.

### ⚙️ Solution Walkthrough
**Reasons to use custom dialogs**:
- **Non-blocking**: They don't freeze the main thread, allowing animations and other processes to continue.
- **Styling**: They can be fully styled with CSS to match the application's design.
- **Rich Content**: They can contain any HTML content, not just plain text.
- **Better UX**: They provide a smoother, more integrated user experience.

The standard way to create them is with the HTML \`<dialog>\` element or by creating a \`div\` that acts as an overlay.

### 📚 Key Concepts
- **User Experience (UX)**: A key driver for choosing custom dialogs over native ones.
`,
  // problem explanation--> 41
  "iocu-browser-file-input-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the primary way a web application can get access to a user's local files. For security reasons, a web page cannot arbitrarily access the user's file system.

### ⚙️ Solution Walkthrough
The \`<input type="file">\` HTML element is the standard, secure mechanism.
1.  **HTML**: You place \`<input type="file" id="file-picker">\` in your HTML.
2.  **User Interaction**: The user must explicitly click the button and select one or more files from their system's file dialog.
3.  **JavaScript**: You can then get access to the selected files by listening for the \`change\` event on the input element. The files are available as a \`FileList\` object on the \`event.target.files\` property.

### 📚 Key Concepts
- **Browser Security Model**: The browser acts as a sandbox, and access to local resources like the file system requires explicit user permission and interaction.
`,
  // problem explanation--> 42
  "iocu-filereader-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem. When a user selects a file using \`<input type="file">\`, the JavaScript code receives a \`File\` object. This object contains metadata about the file (like its name, size, and type), but not the file's actual content. The \`FileReader\` API is the tool used to **read the content** of that file into memory asynchronously.

### ⚙️ Solution Walkthrough
The basic workflow is:
1. Create a new instance: \`const reader = new FileReader();\`
2. Attach an \`onload\` event handler. This function will be called when the read operation is successfully completed.
3. Call one of the read methods, like \`reader.readAsText(fileObject)\`. This starts the asynchronous read operation.

### 📚 Key Concepts
- **Asynchronous File I/O**: Reading files is an I/O operation and is handled asynchronously in the browser to avoid blocking the main thread.
`,
  // problem explanation--> 43
  "iocu-read-file-as-text-conceptual": `
### 💡 Problem Breakdown
This shows the conceptual code for the most common use case of \`FileReader\`: reading a text-based file (like a \`.txt\`, \`.csv\`, or \`.json\` file) as a string.

### ⚙️ Solution Walkthrough
The \`.readAsText()\` method is used.
\`\`\`javascript
// Assume 'file' is a File object from an input element
const reader = new FileReader();

reader.onload = (event) => {
  // The file content is available on the reader's 'result' property
  const fileContent = event.target.result;
  console.log(fileContent);
};

reader.readAsText(file);
\`\`\`
### 📚 Key Concepts
- \`FileReader.readAsText()\`: The method for reading a file as a string.
`,
  // problem explanation--> 44
  "iocu-read-file-as-data-url-conceptual": `
### 💡 Problem Breakdown
This shows the conceptual code for reading a file (typically an image) into a Data URL format. A Data URL is a base64-encoded string that can be used directly as the \`src\` for an \`<img>\` tag, which is useful for creating a preview of a user-uploaded image.

### ⚙️ Solution Walkthrough
The \`.readAsDataURL()\` method is used.
\`\`\`javascript
// Assume 'imageFile' is a File object for an image
const reader = new FileReader();

reader.onload = (event) => {
  const imageUrl = event.target.result;
  // This can be set as the src of an <img> element
  document.getElementById('preview-image').src = imageUrl;
};

reader.readAsDataURL(imageFile);
\`\`\`
### 📚 Key Concepts
- \`FileReader.readAsDataURL()\`: The method for reading a file as a base64 Data URL.
- **Data URL**: A URI scheme that allows for embedding small files inline in documents.
`,
  // problem explanation--> 45
  "iocu-read-file-as-arraybuffer-conceptual": `
### 💡 Problem Breakdown
This shows the conceptual code for reading a file as an \`ArrayBuffer\`. An \`ArrayBuffer\` is a raw, fixed-length chunk of binary data. This is the most low-level way to read a file and is used when you need to parse a binary file format or manipulate the file's raw bytes.

### ⚙️ Solution Walkthrough
The \`.readAsArrayBuffer()\` method is used.
\`\`\`javascript
// Assume 'file' is a File object
const reader = new FileReader();

reader.onload = (event) => {
  const buffer = event.target.result;
  // 'buffer' is an ArrayBuffer, which can be manipulated with a DataView
};

reader.readAsArrayBuffer(file);
\`\`\`
### 📚 Key Concepts
- \`FileReader.readAsArrayBuffer()\`: The method for reading a file as raw binary data.
- **\`ArrayBuffer\`**: A low-level object for representing binary data.
`,
  // problem explanation--> 46
  "iocu-filereader-events-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explains the event-driven nature of the \`FileReader\` API. Because file reading can take time, the API uses events to notify your code of its progress and completion.

### ⚙️ Solution Walkthrough
The key event handlers are:
- **\`onload\`**: Fires when the entire file has been successfully read into memory. The result is available on \`reader.result\`. This is the most commonly used event.
- **\`onerror\`**: Fires if an error occurs during the read (e.g., the file cannot be read).
- **\`onprogress\`**: Fires periodically while a large file is being read. The event object contains information about how much of the file has been loaded, which can be used to display a progress bar.

### 📚 Key Concepts
- **Event-Driven APIs**: A common pattern for handling asynchronous operations in the browser.
`,
  // problem explanation--> 47
  "iocu-create-and-download-file-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about how to generate a file programmatically in JavaScript and trigger a download for the user, without involving a server.

### ⚙️ Solution Walkthrough
The solution involves two main steps:
1.  **Create the File Data**: Use the \`Blob\` constructor to create a file-like object in memory. A \`Blob\` can be created from a string, an array of strings, or an \`ArrayBuffer\`.
2.  **Trigger the Download**:
    - Create a temporary URL for the \`Blob\` using \`URL.createObjectURL(blob)\`.
    - Create an invisible anchor (\`<a>\`) element.
    - Set its \`href\` to the object URL.
    - Set its \`download\` attribute to the desired filename.
    - Programmatically click the anchor element.
    - Revoke the object URL to free up memory.

### 📚 Key Concepts
- **\`Blob\`**: A data type for representing raw, file-like data.
- **Object URL**: A temporary, in-memory URL for a Blob.
`,
  // problem explanation--> 48
  "iocu-blob-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the \`Blob\` object. A Blob (Binary Large Object) is an object that represents a chunk of raw, immutable data. It is not specific to JavaScript and is a fundamental concept in computing.

### ⚙️ Solution Walkthrough
In JavaScript, Blobs are used to represent file-like data.
- **Creation**: \`new Blob(array, options)\`. The first argument is an array of data parts (strings, ArrayBuffers, other Blobs). The second is an options object, where you can specify the MIME type (e.g., \`{ type: 'text/plain' }\`).
- **Use Cases**:
  - Constructing a file for the user to download.
  - Slicing a large file into smaller chunks for uploading.
  - Holding binary data received from a network request.

### 📚 Key Concepts
- **Binary Data**: Blobs are a high-level representation of binary data.
`,
  // problem explanation--> 49
  "iocu-object-url-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about Object URLs. An Object URL is a special, temporary URL that is generated within the browser to provide a reference to a \`File\` or \`Blob\` object that exists in memory.

### ⚙️ Solution Walkthrough
- **Creation**: \`const url = URL.createObjectURL(myBlob);\`. This returns a string that looks like \`blob:http://.../<uuid>\`.
- **Usage**: This URL can be used anywhere a normal URL can be used, such as the \`src\` of an \`<img>\` tag or the \`href\` of an \`<a>\` tag. The browser knows how to resolve this URL to the in-memory Blob data.
- **Cleanup**: Because they hold a reference to the data, you should release them when you are done to avoid memory leaks: \`URL.revokeObjectURL(url);\`.

### 📚 Key Concepts
- **Object URL**: A mechanism for creating temporary, in-memory URLs for local data.
`,
  // problem explanation--> 50
  "iocu-drag-and-drop-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the native HTML Drag and Drop API, specifically for handling file drops.

### ⚙️ Solution Walkthrough
1.  **\`dragover\` Event**: You must add an event listener for the \`dragover\` event on your drop target element. In this listener, you must call \`event.preventDefault()\` to signal that this element is a valid drop target.
2.  **\`drop\` Event**: Add an event listener for the \`drop\` event.
3.  **\`preventDefault\`**: Call \`event.preventDefault()\` again in the drop handler to prevent the browser's default behavior (which is usually to open the file).
4.  **Access Files**: The dropped files are available in the \`event.dataTransfer.files\` property, which is a \`FileList\` object. You can then iterate over this list and process the files (e.g., with a \`FileReader\`).

### 📚 Key Concepts
- **Drag and Drop API**: A set of browser events for managing drag-and-drop interactions.
- **\`DataTransfer\` object**: An object that holds the data being dragged during a drag-and-drop operation.
`,

  // problem explanation--> 51
  "iocu-nodejs-stdout-conceptual": `
### 💡 Problem Breakdown
This problem explores the fundamental output stream in a Node.js environment. Unlike the browser's \`console.log\`, which is a high-level function that adds formatting and a newline, \`process.stdout\` is a raw, writable stream. Understanding it is key to building command-line tools that require precise output control, like progress bars or custom-formatted text. A file path in Windows might look like \`C:\\\\Users\\\\...\`.

### ⚙️ Solution Walkthrough
The primary method for writing to this stream is \`.write()\`.
\`\`\`javascript
// In a Node.js environment:
// This writes the string directly to standard output without a newline.
process.stdout.write("Hello, ");
process.stdout.write("World!");
// To add a newline, you must do so explicitly:
process.stdout.write("\\\\n");
\`\`\`
\`console.log('Hello')\` is essentially a convenient wrapper around \`process.stdout.write('Hello\\\\n')\`.

### 📚 Key Concepts
- **\`process.stdout\`**: A global Node.js object representing the standard output stream.
- **Writable Stream**: An abstraction for a destination to which data can be written over time.
- **Low-Level I/O**: Interacting directly with streams provides more control than high-level functions like \`console.log\`.
`,

  // problem explanation--> 52
  "iocu-nodejs-stdin-conceptual": `
### 💡 Problem Breakdown
This problem covers the fundamental input stream in Node.js. \`process.stdin\` is a readable stream that allows a command-line application to receive input from the user or from another process via piping.

### ⚙️ Solution Walkthrough
The standard way to read from \`stdin\` is to listen for the \`'data'\` event.
\`\`\`javascript
// In a Node.js environment:
// By default, the stdin stream is paused. You must resume it.
process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log("Please enter some text:");

process.stdin.on('data', (chunk) => {
  // The 'chunk' is the piece of data received.
  process.stdout.write(\`You entered: \${chunk}\`);
  process.exit(); // Exit the program
});
\`\`\`
For more structured line-by-line input, the built-in \`readline\` module is a better choice as it handles user input more gracefully.

### 📚 Key Concepts
- **\`process.stdin\`**: A global Node.js object representing the standard input stream.
- **Readable Stream**: An abstraction for a source from which data can be read over time.
- **Event-Driven I/O**: The application listens for events ('data') to process input asynchronously.
`,

  // problem explanation--> 53
  "iocu-nodejs-fs-readfile-async-conceptual": `
### 💡 Problem Breakdown
This is the standard, non-blocking way to read a file's entire content in Node.js. The operation is asynchronous, using an "error-first" callback to handle the result.

### ⚙️ Solution Walkthrough
The \`fs.readFile()\` function takes the file path, an optional encoding, and a callback function as arguments.
\`\`\`javascript
// In a Node.js environment:
const fs = require('fs');

fs.readFile('path/to/file.txt', 'utf8', (err, data) => {
  // 1. The callback is executed when the read operation is complete.
  // 2. The first argument to the callback is always the error object.
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  // 3. If there's no error, the second argument is the file content.
  console.log(data);
});

console.log("This logs first!"); // Demonstrates non-blocking nature
\`\`\`

### 📚 Key Concepts
- **Asynchronous I/O**: A core principle of Node.js. I/O operations do not block the event loop.
- **Error-First Callback**: A standard Node.js convention where the first argument to a callback is reserved for an error object.
`,

  // problem explanation--> 54
  "iocu-nodejs-fs-readfilesync-conceptual": `
### 💡 Problem Breakdown
This is the synchronous, blocking version of reading a file. The entire program execution is paused until the file has been fully read into memory.

### ⚙️ Solution Walkthrough
\`fs.readFileSync()\` returns the file content directly or throws an error. It's often wrapped in a \`try...catch\` block.
\`\`\`javascript
// In a Node.js environment:
const fs = require('fs');

try {
  const data = fs.readFileSync('path/to/file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error("Error reading file:", err);
}

console.log("This logs second!"); // Demonstrates blocking nature
\`\`\`
**Use Case**: This is acceptable for one-time initialization scripts or command-line tools where blocking is not an issue. It should be avoided in servers handling concurrent requests.

### 📚 Key Concepts
- **Synchronous I/O**: Operations that block the Node.js event loop.
`,

  // problem explanation--> 55
  "iocu-nodejs-fs-writefile-async-conceptual": `
### 💡 Problem Breakdown
This is the standard asynchronous way to write data to a file in Node.js. If the file doesn't exist, it will be created. If it does exist, its content will be overwritten.

### ⚙️ Solution Walkthrough
\`fs.writeFile()\` also uses an error-first callback, which is called upon completion.
\`\`\`javascript
// In a Node.js environment:
const fs = require('fs');
const content = "Hello, File System!";

fs.writeFile('newfile.txt', content, 'utf8', (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File has been saved!");
});
\`\`\`

### 📚 Key Concepts
- **File System Module (\`fs\`)**: The primary Node.js module for interacting with the file system.
`,

  // problem explanation--> 56
  "iocu-nodejs-streams-conceptual": `
### 💡 Problem Breakdown
This is a core concept in Node.js. Streams are a way to handle reading or writing data in chunks, rather than loading the entire data into memory at once. This is extremely efficient for large files or network data.

### ⚙️ Solution Walkthrough
There are four types of streams:
- **Readable**: A source of data (e.g., \`fs.createReadStream('file.txt')\`).
- **Writable**: A destination for data (e.g., \`fs.createWriteStream('file.txt')\`).
- **Duplex**: Both readable and writable (e.g., a network socket).
- **Transform**: A duplex stream that modifies data as it passes through (e.g., a compression stream).

Streams are event-driven, emitting events like \`'data'\`, \`'end'\`, and \`'error'\`.

### 📚 Key Concepts
- **Streams**: An efficient mechanism for handling I/O by processing data in manageable chunks.
`,

  // problem explanation--> 57
  "iocu-nodejs-pipe-conceptual": `
### 💡 Problem Breakdown
The \`.pipe()\` method is a powerful feature of Node.js streams. It takes a readable stream and connects its output to the input of a writable stream. It automatically handles the flow of data, including backpressure.

### ⚙️ Solution Walkthrough
A file is read and its contents are "piped" to another file.
\`\`\`javascript
// In a Node.js environment:
const fs = require('fs');

const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('destination.txt');

// This one line handles the entire process
readStream.pipe(writeStream);
\`\`\`
This is a very memory-efficient way to copy a large file.

### 📚 Key Concepts
- **Piping**: A mechanism for connecting streams to create a processing pipeline.
- **Backpressure**: The automatic process where the writable stream can tell the readable stream to pause if it's receiving data too quickly.
`,

  // problem explanation--> 58
  "iocu-nodejs-readline-conceptual": `
### 💡 Problem Breakdown
While you can read from \`process.stdin\` directly, it gives you raw chunks of data. The built-in \`readline\` module provides a higher-level interface for reading data from any readable stream, one line at a time.

### ⚙️ Solution Walkthrough
A readline interface is created to process lines from standard input.
\`\`\`javascript
// In a Node.js environment:
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(\`Hello, \${name}!\`);
  rl.close();
});
\`\`\`

### 📚 Key Concepts
- **\`readline\` module**: A core Node.js module for building interactive command-line interfaces.
`,

  // problem explanation--> 59
  "iocu-nodejs-buffer-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a data type unique to Node.js. A \`Buffer\` is Node's way of representing raw binary data. It's a fixed-size chunk of memory allocated outside of the V8 JavaScript heap.

### ⚙️ Solution Walkthrough
Buffers are used when interacting with binary streams, like TCP sockets or the file system.
\`\`\`javascript
// In a Node.js environment:
// Create a buffer from a string with UTF-8 encoding
const buf = Buffer.from('Hello', 'utf8');

console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // "Hello"
console.log(buf.length); // 5 (bytes)
\`\`\`

### 📚 Key Concepts
- **\`Buffer\`**: A global Node.js class for handling binary data.
`,

  // problem explanation--> 60
  "iocu-nodejs-fs-promises-conceptual": `
### 💡 Problem Breakdown
The original Node.js \`fs\` module is callback-based. Modern Node.js provides a promise-based version of the API, which allows for cleaner asynchronous code using \`async/await\`.

### ⚙️ Solution Walkthrough
The promise-based API is used to read a file.
\`\`\`javascript
// In a modern Node.js environment:
const fs = require('fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('path/to/file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}
readFile();
\`\`\`
This avoids the nesting of callbacks and allows for standard \`try...catch\` error handling.

### 📚 Key Concepts
- **Promisification**: The process of converting callback-based APIs into promise-based ones.
`,

  // problem explanation--> 61
  "iocu-console-log-css": `
### 💡 Problem Breakdown
Most modern browser consoles allow you to apply CSS styling to your log messages using the \`%c\` substitution string.

### ⚙️ Solution Walkthrough
The first argument to \`console.log\` is the string containing the \`%c\` specifier. The second argument is a string of CSS rules to apply to the text that follows the specifier.
\`\`\`javascript
const styles = 'color: blue; font-size: 16px; font-weight: bold;';
console.log('%cThis is a styled message.', styles);
\`\`\`

### 📚 Key Concepts
- **Console API**: A rich set of tools for debugging.
- **Format Specifiers**: \`%c\` is the specifier for applying CSS.
`,

  // problem explanation--> 62
  "iocu-console-log-multiple-styles": `
### 💡 Problem Breakdown
You can use multiple \`%c\` specifiers in a single \`console.log\` call to apply different styles to different parts of the message. Each \`%c\` corresponds to a subsequent argument containing CSS rules.

### ⚙️ Solution Walkthrough
Two different styles are applied to one log message.
\`\`\`javascript
console.log(
  "%cImportant: %cHere is the message.",
  "font-weight: bold; color: red;", // Style for the first %c
  "color: green;"                     // Style for the second %c
);
\`\`\`

### 📚 Key Concepts
- **Format Specifiers**: The number of style arguments must match the number of \`%c\` specifiers.
`,

  // problem explanation--> 63
  "iocu-nodejs-transform-stream-conceptual": `
### 💡 Problem Breakdown
A \`Transform\` stream is a type of Duplex stream (both readable and writable) in Node.js that modifies or transforms the data as it passes through. It's a powerful tool for creating data processing pipelines.

### ⚙️ Solution Walkthrough
Conceptual examples of transform streams include:
- A compression stream (\`zlib.createGzip()\`).
- A CSV parsing stream that converts CSV text into JavaScript objects.
- A custom stream that converts all incoming text to uppercase.
\`\`\`javascript
// Conceptual
// input.txt -> [Readable Stream] -> [Uppercase Transform] -> [Writable Stream] -> output.txt
readStream.pipe(uppercaseTransform).pipe(writeStream);
\`\`\`

### 📚 Key Concepts
- **Streams**: A core part of the Node.js I/O model.
- **\`Transform\` Stream**: A building block for data processing pipelines.
`,

  // problem explanation--> 64
  "iocu-nodejs-zlib-stream-conceptual": `
### 💡 Problem Breakdown
This is a practical example of a Transform stream. The built-in \`zlib\` module in Node.js provides streams for compression (like Gzip) and decompression.

### ⚙️ Solution Walkthrough
The code pipes a file read stream through a Gzip compression stream and then to a file write stream, creating a compressed file.
\`\`\`javascript
// In a Node.js environment:
const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('source.txt.gz');

readStream.pipe(gzip).pipe(writeStream);
\`\`\`
This is extremely memory-efficient, as the large file is never fully loaded into memory.

### 📚 Key Concepts
- **Piping**: The core mechanism for connecting streams.
- **Compression**: A common use case for transform streams.
`,

  // problem explanation--> 65
  "iocu-fetch-response-blob-conceptual": `
### 💡 Problem Breakdown
The \`fetch\` API can handle binary data. The \`response.blob()\` method reads the response stream to completion and returns a promise that resolves with a \`Blob\` object. A \`Blob\` represents the raw binary data of the file.

### ⚙️ Solution Walkthrough
An image is fetched and its Blob is used to create an object URL for display.
\`\`\`javascript
// In a browser environment
async function displayImage() {
  const response = await fetch('image.png');
  const imageBlob = await response.blob();
  const imageUrl = URL.createObjectURL(imageBlob);
  
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  document.body.appendChild(imgElement);
}
\`\`\`

### 📚 Key Concepts
- **\`response.blob()\`**: A method for handling binary response bodies.
- **\`Blob\`**: A data type for representing raw, file-like data.
`,

  // problem explanation--> 66
  "iocu-fetch-response-text-conceptual": `
### 💡 Problem Breakdown
The \`response.text()\` method on a \`fetch\` response reads the response stream to completion and returns a promise that resolves with a string of the response body.

### ⚙️ Solution Walkthrough
An HTML file's content is fetched and logged.
\`\`\`javascript
// In a browser environment
async function getHtml() {
  const response = await fetch('index.html');
  const htmlContent = await response.text();
  console.log(htmlContent);
}
\`\`\`
This is useful for getting the raw content of any text-based file, like HTML, CSS, SVG, or CSV.

### 📚 Key Concepts
- **\`response.text()\`**: A method for getting the raw text content of a response body.
`,

  // problem explanation--> 67
  "iocu-nodejs-path-module-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a core Node.js module. The \`path\` module provides utilities for working with file and directory paths. A key feature is that it handles path differences between operating systems (e.g., \`/\` on Linux/macOS vs. \`\\\\\` on Windows).

### ⚙️ Solution Walkthrough
Common methods include:
- **\`path.join(...paths)\`**: Joins path segments together using the platform-specific separator.
- **\`path.resolve(...paths)\`**: Resolves a sequence of paths into an absolute path.
- **\`path.basename(path)\`**: Gets the last portion of a path (the file or directory name).
- **\`path.extname(path)\`**: Gets the extension of the file.
\`\`\`javascript
// In Node.js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'
\`\`\`

### 📚 Key Concepts
- **Cross-Platform Compatibility**: A primary reason to use the \`path\` module instead of manual string concatenation.
`,

  // problem explanation--> 68
  "iocu-nodejs-fs-stat-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers how to get metadata about a file or directory in Node.js. The \`fs.stat()\` function (or its promise-based version \`fs.promises.stat()\`) is used for this.

### ⚙️ Solution Walkthrough
The function returns a \`stats\` object.
\`\`\`javascript
// In Node.js
const fs = require('fs/promises');
async function getStats(filePath) {
  const stats = await fs.stat(filePath);
  console.log('Is a file?', stats.isFile());
  console.log('Is a directory?', stats.isDirectory());
  console.log('Size:', stats.size); // in bytes
  console.log('Last modified:', stats.mtime);
}
\`\`\`

### 📚 Key Concepts
- **File Metadata**: Information *about* a file, as opposed to its content.
`,

  // problem explanation--> 69
  "iocu-nodejs-fs-readdir-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers how to read the contents of a directory in Node.js.

### ⚙️ Solution Walkthrough
The \`fs.readdir()\` function is used. It returns an array of strings, where each string is the name of a file or subdirectory within the specified directory.
\`\`\`javascript
// In Node.js
const fs = require('fs/promises');
async function listFiles(dirPath) {
  const files = await fs.readdir(dirPath);
  console.log(files); // ['file1.txt', 'subdirectory', 'file2.js']
}
\`\`\`
It does not return the full path, so you often need to use \`path.join()\` to work with these files.

### 📚 Key Concepts
- **Directory Traversal**: A common operation for file system utilities.
`,

  // problem explanation--> 70
  "iocu-nodejs-fs-mkdir-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers how to create a new directory in Node.js.

### ⚙️ Solution Walkthrough
The \`fs.mkdir()\` function is used.
\`\`\`javascript
// In Node.js
const fs = require('fs/promises');
async function createDir(dirPath) {
  // The { recursive: true } option makes it behave like 'mkdir -p',
  // creating parent directories if they don't exist.
  await fs.mkdir(dirPath, { recursive: true });
  console.log('Directory created!');
}
\`\`\`

### 📚 Key Concepts
- **File System Operations**: A core part of many backend applications and scripts.
`,

  // problem explanation--> 71
  "iocu-nodejs-stream-backpressure-conceptual": `
### 💡 Problem Breakdown
This is a fundamental concept in Node.js streams. **Backpressure** is the mechanism that handles a situation where a readable stream is producing data faster than a writable stream can consume it. Without backpressure, the fast reader would overwhelm the slow writer, leading to excessive memory usage.

### ⚙️ Solution Walkthrough
When you use \`.pipe()\`, backpressure is handled automatically.
- The writable stream has an internal buffer. When it gets full, its \`.write()\` method returns \`false\`.
- The \`.pipe()\` mechanism detects this and calls \`.pause()\` on the readable stream.
- When the writable stream has drained its buffer, it emits a \`'drain'\` event.
- \`.pipe()\` detects this and calls \`.resume()\` on the readable stream.

This creates a push-pull dynamic that keeps the data flow balanced and memory usage low.

### 📚 Key Concepts
- **Backpressure**: A flow control mechanism in streams.
`,

  // problem explanation--> 72
  "iocu-nodejs-csv-parsing-conceptual": `
### 💡 Problem Breakdown
This conceptual problem shows a practical application of streams. Parsing a very large CSV file can consume a lot of memory if you read the whole file at once. A stream-based approach is much more efficient.

### ⚙️ Solution Walkthrough
A CSV parsing library (like \`csv-parser\`) provides a Transform stream.
\`\`\`javascript
// In Node.js
const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('large_data.csv')
  .pipe(csv()) // Pipe the raw text through the parser
  .on('data', (row) => {
    // This event fires for each parsed row (as an object)
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
\`\`\`
The file is read and parsed chunk by chunk, keeping memory usage low.

### 📚 Key Concepts
- **Stream Pipelines**: Chaining multiple streams together to create a data processing workflow.
`,

  // problem explanation--> 73
  "iocu-clipboard-api-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the modern, promise-based Clipboard API, which provides a secure way to interact with the system clipboard.

### ⚙️ Solution Walkthrough
The API is available on \`navigator.clipboard\`.
- **Writing**: \`navigator.clipboard.writeText('Text to copy')\`. This returns a promise and may trigger a permission prompt.
- **Reading**: \`navigator.clipboard.readText()\`. This also returns a promise and requires the user to have granted permission.
\`\`\`javascript
// In a browser environment
async function copyText() {
  await navigator.clipboard.writeText('Hello from the web!');
}
\`\`\`
This API is only available in secure contexts (HTTPS).

### 📚 Key Concepts
- **Async Clipboard API**: The modern, secure way to handle clipboard I/O.
`,

  // problem explanation--> 74
  "iocu-beacon-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a specialized Web API. The Beacon API is designed for sending small amounts of data from a web page to a server **without expecting a response**. Its key feature is that the browser guarantees it will try to send the request, even if the page is being unloaded.

### ⚙️ Solution Walkthrough
It's a single, synchronous method call.
\`\`\`javascript
// In a browser environment
window.addEventListener('unload', () => {
  const analyticsData = new Blob([JSON.stringify({ event: 'page_exit' })], {type : 'application/json'});
  // This queues the data to be sent.
  navigator.sendBeacon('/log', analyticsData);
});
\`\`\`
This is ideal for sending analytics or logging data when a user navigates away, as a standard \`fetch\` request might be cancelled by the browser during page unload.

### 📚 Key Concepts
- **Beacon API**: A Web API for reliable, non-blocking, one-way data transmission.
`,

  // problem explanation--> 75
  "iocu-character-encoding-conceptual": `
### 💡 Problem Breakdown
This is a fundamental concept in computing. Character encoding is a system that maps characters to a sequence of bytes.
- **ASCII**: An early, 7-bit standard that can only represent 128 characters (English alphabet, numbers, basic symbols).
- **UTF-8**: A modern, variable-width encoding that can represent every character in the Unicode standard. It is the dominant encoding on the web.

### ⚙️ Solution Walkthrough
When you read a file, you need to specify the correct encoding to interpret its bytes correctly.
\`\`\`javascript
// In Node.js
fs.readFile('file.txt', 'utf8', (err, data) => { /* ... */ });
\`\`\`
If you read a file containing a character like 'é' using 'ascii' encoding, the character will be corrupted because ASCII does not have a representation for it.

### 📚 Key Concepts
- **Character Encoding**: The system used to convert bytes to characters.
- **UTF-8**: The standard encoding for web content.
`,

  // problem explanation--> 76
  "iocu-dataview-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a low-level API for handling binary data. When you have an \`ArrayBuffer\` (a raw chunk of memory), a \`DataView\` provides a flexible interface to read and write different types of numbers at any byte offset within the buffer.

### ⚙️ Solution Walkthrough
A \`DataView\` is used to read from a buffer.
\`\`\`javascript
const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);

// Write a 32-bit integer at the start of the buffer
view.setInt32(0, 1234567890);

// Read an 8-bit integer from the first byte
view.getInt8(0);
\`\`\`
A key feature of \`DataView\` is that it allows you to specify the "endianness" (byte order) for multi-byte numbers, which is crucial for working with network protocols and certain file formats.

### 📚 Key Concepts
- **Binary Data**: Working with raw bytes.
- **\`DataView\`**: A low-level API for reading and writing data in an \`ArrayBuffer\`.
`,

  // problem explanation--> 77
  "iocu-nodejs-process-argv-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about command-line input in Node.js. The global \`process.argv\` is an array containing the command-line arguments passed when the Node.js process was launched.

### ⚙️ Solution Walkthrough
- Running a script: \`node script.js --user alice --mode test\`
- \`process.argv\` will be an array like:
  - \`[0]\`: Path to the Node.js executable.
  - \`[1]\`: Path to the script being run (\`script.js\`).
  - \`[2]\`: \`'--user'\`
  - \`[3]\`: \`'alice'\`
  - \`[4]\`: \`'--mode'\`
  - \`[5]\`: \`'test'\`

You typically slice off the first two elements and parse the rest to get the user-provided arguments. Libraries like \`yargs\` or \`commander\` provide a much more robust way to do this.

### 📚 Key Concepts
- **Command-Line Interface (CLI)**: A common way to interact with programs.
- **\`process.argv\`**: The raw array of command-line arguments.
`,

  // problem explanation--> 78
  "iocu-nodejs-http-request-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the built-in, low-level way to make HTTP requests in Node.js using the \`http\` module.

### ⚙️ Solution Walkthrough
The \`http.get()\` method is a simplified way to make a GET request. The response is a readable stream.
\`\`\`javascript
// In Node.js
const http = require('http');

http.get('http://example.com', (res) => {
  let data = '';
  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });
  // The whole response has been received.
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.error(err.message);
});
\`\`\`
While this is the fundamental API, modern applications often use higher-level libraries like \`axios\` or the built-in \`fetch\` API (available in recent Node versions) for a more convenient, promise-based interface.

### 📚 Key Concepts
- **\`http\` module**: A core Node.js module for networking.
- **Stream-based I/O**: The response is received as a stream of data chunks.
`,

  // problem explanation--> 79
  "iocu-nodejs-http-server-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers how to create a basic web server in Node.js using the built-in \`http\` module.

### ⚙️ Solution Walkthrough
The \`http.createServer()\` method is used. It takes a callback function that is executed for each incoming request.
\`\`\`javascript
// In Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  // 'req' is a readable stream with request details (URL, headers)
  // 'res' is a writable stream for sending the response
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\\\\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
\`\`\`
This low-level API is the foundation upon which web frameworks like Express.js are built.

### 📚 Key Concepts
- **\`http\` module**: A core Node.js module for networking.
- **Request/Response Cycle**: The fundamental model of web communication.
`,

  // problem explanation--> 80
  "iocu-xmlhttprequest-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the original browser API for making network requests, \`XMLHttpRequest\` (XHR). It predates the modern \`fetch\` API.

### ⚙️ Solution Walkthrough
XHR is event-based and more verbose than \`fetch\`.
\`\`\`javascript
// In a browser
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error('Request failed.  Returned status of ' + xhr.status);
  }
};
xhr.onerror = function() { /* ... */ };
xhr.send();
\`\`\`
While still supported, \`fetch\` is preferred in all modern browsers due to its simpler, promise-based API.

### 📚 Key Concepts
- **\`XMLHttpRequest\` (XHR)**: The legacy API for AJAX requests.
`,

  // problem explanation--> 81
  "iocu-console-profile-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a deprecated but sometimes useful console feature. \`console.profile()\` and \`console.profileEnd()\` are methods that can be called from your code to programmatically start and stop a CPU profiling session in the browser's developer tools.

### ⚙️ Solution Walkthrough
A profile is started and stopped around an expensive function.
\`\`\`javascript
function doExpensiveWork() {
  console.profile("My Profile");
  // ... a lot of code ...
  console.profileEnd("My Profile");
}
\`\`\`
When \`doExpensiveWork\` is run with the dev tools open, a new CPU profile named "My Profile" will be created and appear in the "Performance" or "Profiler" tab, ready for analysis. The modern approach is to start and stop profiling manually using the UI of the Performance panel.

### 📚 Key Concepts
- **Performance Profiling**: The process of analyzing code to find performance bottlenecks.
`,

  // problem explanation--> 82
  "iocu-performance-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the modern, high-precision way to measure performance in the browser. The Performance API provides a set of tools for getting accurate timing information.

### ⚙️ Solution Walkthrough
The \`performance.mark()\` and \`performance.measure()\` methods are used.
\`\`\`javascript
// Create a "start" mark
performance.mark('start-work');

// ... perform some work ...

// Create an "end" mark
performance.mark('end-work');

// Create a "measure" between the two marks
performance.measure('My Operation', 'start-work', 'end-work');

// The measure can then be viewed in the Performance panel timeline
// or accessed programmatically.
\`\`\`
This API is more accurate than \`Date.now()\` because it uses a high-resolution monotonic clock, which is not affected by system time changes.

### 📚 Key Concepts
- **Performance API**: The standard browser API for high-precision timing.
`,

  // problem explanation--> 83
  "iocu-indexeddb-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a low-level browser API for client-side storage. IndexedDB is a transactional, object-oriented database that runs in the browser. It's suitable for storing large amounts of structured data and can be used offline.

### ⚙️ Solution Walkthrough
Key features:
- **Asynchronous**: All operations are asynchronous and event-based to avoid blocking the main thread.
- **Transactional**: Operations are grouped into transactions to ensure data integrity.
- **Object Stores**: Data is stored in "object stores" (similar to tables in SQL databases), which hold key-value pairs.
- **Indexes**: You can create indexes on object stores to enable fast queries on specific properties.

Because its API is complex and event-based, it is almost always used with a promise-based wrapper library (like \`idb\`).

### 📚 Key Concepts
- **IndexedDB**: A client-side database for web applications.
`,

  // problem explanation--> 84
  "iocu-localstorage-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a simple client-side storage mechanism. The \`localStorage\` API provides a simple key-value store that persists data even after the browser is closed and reopened.

### ⚙️ Solution Walkthrough
The API is simple and synchronous.
\`\`\`javascript
// Set an item
localStorage.setItem('username', 'Alice');

// Get an item
const username = localStorage.getItem('username'); // "Alice"

// Remove an item
localStorage.removeItem('username');
\`\`\`
**Limitations**:
- **Synchronous**: Can block the main thread if used excessively.
- **Size Limit**: Typically limited to 5-10 MB.
- **Stores only strings**: You must use \`JSON.stringify\` and \`JSON.parse\` to store objects.

### 📚 Key Concepts
- **\`localStorage\`**: A simple, persistent key-value store in the browser.
`,

  // problem explanation--> 85
  "iocu-sessionstorage-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about another simple client-side storage mechanism. The \`sessionStorage\` API is identical to \`localStorage\`, with one key difference: the data is cleared when the page session ends (i.e., when the browser tab is closed).

### ⚙️ Solution Walkthrough
The API is the same as \`localStorage\`.
\`\`\`javascript
// Data stored here will be gone after the tab is closed
sessionStorage.setItem('session-id', '12345');
\`\`\`
It's useful for storing temporary data that is relevant only for a single user session.

### 📚 Key Concepts
- **\`sessionStorage\`**: A simple, session-only key-value store in the browser.
`,

  // problem explanation--> 86
  "iocu-websockets-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a protocol for real-time, bidirectional communication. Unlike HTTP's request-response model, WebSockets establish a single, persistent connection between the client and server. Both the client and server can send messages at any time.

### ⚙️ Solution Walkthrough
The API is event-driven.
\`\`\`javascript
const ws = new WebSocket('wss://example.com/socket');
ws.onopen = () => ws.send('Hello!');
ws.onmessage = (event) => console.log(event.data);
\`\`\`
WebSockets are the foundation for chat applications, multiplayer games, and live data feeds.

### 📚 Key Concepts
- **WebSocket**: A protocol for persistent, real-time, two-way communication.
`,

  // problem explanation--> 87
  "iocu-server-sent-events-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a technology for one-way, server-to-client communication. With Server-Sent Events (SSE), a server can push updates to a client over a single, long-lived HTTP connection.

### ⚙️ Solution Walkthrough
The client uses the \`EventSource\` API to subscribe to the stream.
\`\`\`javascript
const sse = new EventSource('/api/stream');
sse.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // Update the UI with new data
};
\`\`\`
SSE is simpler than WebSockets and is a great choice when you only need the server to send updates to the client (e.g., live stock tickers, news updates).

### 📚 Key Concepts
- **Server-Sent Events (SSE)**: A technology for one-way, server-to-client streaming.
`,

  // problem explanation--> 88
  "iocu-web-rtc-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a framework for real-time communication. WebRTC (Web Real-Time Communication) enables peer-to-peer communication of audio, video, and arbitrary data directly between browsers, without requiring data to be relayed through a central server (after an initial connection is established).

### ⚙️ Solution Walkthrough
WebRTC is a very complex set of APIs.
1.  **Signaling**: A server is used initially for "signaling" – for the two peers to discover each other and exchange connection information.
2.  **\`RTCPeerConnection\`**: This is the main interface for establishing the peer-to-peer connection.
3.  **\`getUserMedia\`**: Used to get access to the camera and microphone.
4.  **\`DataChannel\`**: Used for sending arbitrary data between peers.

### 📚 Key Concepts
- **WebRTC**: A framework for peer-to-peer communication.
`,

  // problem explanation--> 89
  "iocu-media-devices-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about accessing user input devices. The \`navigator.mediaDevices.getUserMedia()\` API is the modern, promise-based way to request access to a user's camera and microphone.

### ⚙️ Solution Walkthrough
The function takes a \`constraints\` object and returns a promise.
\`\`\`javascript
// In a browser environment
async function getMedia() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true, // Request video
      audio: true  // Request audio
    });
    // 'stream' is a MediaStream object that can be attached to a <video> element
  } catch (err) {
    // This will catch errors, e.g., if the user denies permission.
  }
}
\`\`\`
This API requires a secure context (HTTPS).

### 📚 Key Concepts
- **\`getUserMedia()\`**: The primary API for accessing cameras and microphones.
`,

  // problem explanation--> 90
  "iocu-web-audio-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a very powerful browser API for audio. The Web Audio API provides a high-level system for processing and synthesizing audio in web applications. It allows you to generate sounds, process audio from a microphone, apply effects, and perform audio analysis.

### ⚙️ Solution Walkthrough
The API works by creating a "routing graph" of \`AudioNode\`s.
1.  **\`AudioContext\`**: The main object that manages the audio graph.
2.  **Source Nodes**: Nodes that generate sound (e.g., an \`OscillatorNode\` or a node for an audio file).
3.  **Effect Nodes**: Nodes that process sound (e.g., a \`GainNode\` for volume, a \`BiquadFilterNode\` for effects).
4.  **Destination**: The final output, usually the user's speakers.

The nodes are connected together: \`source -> gain -> filter -> destination\`.

### 📚 Key Concepts
- **Web Audio API**: An advanced API for audio processing.
`,

  // problem explanation--> 91
  "iocu-nodejs-child-process-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a core Node.js module. The \`child_process\` module allows a Node.js script to spawn external processes (e.g., run a shell command or another script).

### ⚙️ Solution Walkthrough
The \`spawn\` function is the most fundamental way to do this.
\`\`\`javascript
// In Node.js
const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh', '/usr']); // Run 'ls -lh /usr'

// Listen for data from the child's standard output
ls.stdout.on('data', (data) => {
  console.log(\`stdout: \${data}\`);
});

ls.stderr.on('data', (data) => { /* ... */ });

ls.on('close', (code) => {
  console.log(\`child process exited with code \${code}\`);
});
\`\`\`
This allows Node.js to act as a powerful scripting tool for automating system tasks.

### 📚 Key Concepts
- **\`child_process\` module**: A core Node.js API for running external commands.
`,

  // problem explanation--> 92
  "iocu-nodejs-cluster-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a Node.js module for scaling applications. Node.js is single-threaded. The \`cluster\` module allows you to create a "cluster" of child processes (workers) that can all share the same server ports. This enables a single Node.js application to take advantage of multi-core systems.

### ⚙️ Solution Walkthrough
1. **Master Process**: A "master" process is started. It doesn't run the main server logic itself.
2. **\`cluster.fork()\`**: The master process uses \`cluster.fork()\` to create a number of "worker" processes (typically one per CPU core).
3. **Workers**: Each worker process runs its own instance of the application and listens on the same port.
4. **Load Balancing**: The master process automatically load-balances incoming connections among the workers.

### 📚 Key Concepts
- **\`cluster\` module**: A Node.js API for scaling across multiple CPU cores.
`,

  // problem explanation--> 93
  "iocu-broadcast-channel-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a browser API for communication. The \`BroadcastChannel\` API provides a simple way for different browsing contexts (tabs, windows, iframes, workers) of the **same origin** to send and receive messages. It's a one-to-many communication system.

### ⚙️ Solution Walkthrough
A channel is created with the same name in two different tabs.
\`\`\`javascript
// --- In Tab 1 ---
const bc = new BroadcastChannel('app_channel');
bc.postMessage('User logged in!');

// --- In Tab 2 ---
const bc = new BroadcastChannel('app_channel');
bc.onmessage = (event) => {
  console.log('Received message:', event.data); // 'User logged in!'
};
\`\`\`

### 📚 Key Concepts
- **\`BroadcastChannel\`**: A browser API for cross-context communication on the same origin.
`,

  // problem explanation--> 94
  "iocu-message-channel-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a browser API for direct communication. The \`MessageChannel\` API provides a way to create a two-way, asynchronous communication channel between two different JavaScript contexts (like a main window and an iframe, or two Web Workers).

### ⚙️ Solution Walkthrough
A channel is created, and its ports are used for communication.
\`\`\`javascript
const channel = new MessageChannel();
const port1 = channel.port1;
const port2 = channel.port2;

// In Context 1 (e.g., main window)
port1.onmessage = event => console.log('Msg from context 2:', event.data);

// Send port2 to Context 2 (e.g., an iframe)
iframe.contentWindow.postMessage('init', '*', [port2]);

// In Context 2 (iframe)
// After receiving port2...
port2.onmessage = event => console.log('Msg from context 1:', event.data);
port2.postMessage('Hello from iframe!');
\`\`\`

### 📚 Key Concepts
- **\`MessageChannel\`**: A Web API for creating a direct communication channel.
- **Transferable Objects**: \`MessagePort\` objects are "transferable," meaning they can be passed between contexts without being copied, which is highly efficient.
`,

  // problem explanation--> 95
  "iocu-web-serial-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a modern browser API for hardware interaction. The Web Serial API allows a web page to communicate with serial devices (like Arduinos, 3D printers, or industrial hardware) connected to the user's computer via a serial port (including USB).

### ⚙️ Solution Walkthrough
The API is promise-based and requires explicit user permission.
\`\`\`javascript
// In a browser environment
async function connectToSerial() {
  // 1. Prompt user to select a port
  const port = await navigator.serial.requestPort();
  
  // 2. Open the port
  await port.open({ baudRate: 9600 });
  
  // 3. Get readable and writable streams
  const reader = port.readable.getReader();
  const writer = port.writable.getWriter();
  
  // 4. Read and write data...
}
\`\`\`

### 📚 Key Concepts
- **Web Serial API**: An API for bridging the web and physical hardware via serial communication.
`,

  // problem explanation--> 96
  "iocu-web-hid-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the WebHID (Human Interface Device) API. It provides a way for web pages to interact with less common input devices that are not handled by the standard keyboard or mouse events, such as unique gamepads, joysticks, or specialized controllers.

### ⚙️ Solution Walkthrough
Similar to Web Serial, the API is promise-based and requires user permission.
\`\`\`javascript
// In a browser environment
async function connectToDevice() {
  // 1. Prompt user to select a device
  const devices = await navigator.hid.requestDevice({ filters: [] });
  const device = devices[0];
  
  // 2. Open the device
  await device.open();
  
  // 3. Listen for input reports
  device.addEventListener('inputreport', event => {
    // Process the data from the device
  });
}
\`\`\`

### 📚 Key Concepts
- **WebHID API**: An API for interacting with a wide range of input devices.
`,

  // problem explanation--> 97
  "iocu-web-nfc-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the Web NFC (Near Field Communication) API. It allows a web application on a mobile device to read from and write to NFC tags when the device is in very close proximity (a few centimeters) to the tag.

### ⚙️ Solution Walkthrough
The API is promise-based.
\`\`\`javascript
// In a browser environment on a mobile device
async function readTag() {
  const reader = new NDEFReader();
  await reader.scan();
  
  reader.addEventListener('reading', ({ message }) => {
    // Process the data read from the tag
  });
}
\`\`\`
This opens up possibilities for web-based inventory systems, interactive exhibits, and more.

### 📚 Key Concepts
- **Web NFC API**: An API for interacting with NFC tags.
`,

  // problem explanation--> 98
  "iocu-file-system-access-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a modern, powerful browser API. The File System Access API allows web applications to directly read, write, and manage files on the user's local file system, with their explicit permission. This is a significant step up from the older \`<input type="file">\` and \`FileReader\` APIs.

### ⚙️ Solution Walkthrough
The API is promise-based and uses \`async/await\`.
\`\`\`javascript
// In a browser environment
async function openAndEditFile() {
  // 1. Show a file picker to the user
  const [fileHandle] = await window.showOpenFilePicker();
  
  // 2. Get a File object
  const file = await fileHandle.getFile();
  
  // 3. Create a writable stream to save changes
  const writable = await fileHandle.createWritable();
  await writable.write('New content');
  await writable.close();
}
\`\`\`
This enables more powerful, desktop-like applications (like text editors or image editors) to run directly in the browser.

### 📚 Key Concepts
- **File System Access API**: A modern API for direct file system interaction.
`,

  // problem explanation--> 99
  "iocu-structured-logging-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a best practice for logging. Instead of logging simple, unstructured strings, **structured logging** involves logging data in a consistent, machine-readable format, typically JSON.

### ⚙️ Solution Walkthrough
A comparison between unstructured and structured logging.
- **Unstructured**: \`console.log("User 123 logged in successfully.");\`
- **Structured**: 
\`\`\`javascript
console.log(JSON.stringify({
  timestamp: new Date().toISOString(),
  level: 'info',
  message: 'User logged in successfully',
  userId: 123,
  source: 'auth-service'
}));
\`\`\`
**Benefits**: Structured logs can be easily collected, parsed, indexed, and searched by log management systems (like Datadog or Splunk). This makes it vastly easier to query for specific events or trace a user's journey in a production environment.

### 📚 Key Concepts
- **Structured Logging**: A logging practice that uses a consistent format like JSON.
`,

  // problem explanation--> 100
  "iocu-overriding-console-log-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a technique sometimes used in logging libraries or debugging tools. You can override the native \`console.log\` function (and other console methods) to intercept the messages being logged.

### ⚙️ Solution Walkthrough
The pattern involves storing a reference to the original function and then replacing it with a new function.
\`\`\`javascript
// Store the original
const oldLog = console.log;

// Replace it with a new function
console.log = function(...args) {
  // 1. Perform custom action (e.g., send to a remote logging service)
  sendToRemoteService(args);
  
  // 2. Call the original function to maintain normal console behavior
  oldLog.apply(console, args);
};
\`\`\`
This technique is called "monkey-patching" and should be used with caution as it modifies global behavior.

### 📚 Key Concepts
- **Monkey-Patching**: The practice of modifying or extending the behavior of built-in objects or functions at runtime.
`,

  // problem explanation--> 101
  "iocu-problem-101-conceptual": `
### 💡 Problem Breakdown
This problem explores a lower-level concept in Node.js file I/O: **file descriptors**. A file descriptor is a non-negative integer that serves as an abstract indicator or "handle" for a file. Instead of working with file paths, low-level functions can work directly with these efficient integer references. The backslash character is \`\\\\\`.

### ⚙️ Solution Walkthrough
The \`fs.open()\` method is used to get a file descriptor.
\`\`\`javascript
// In a Node.js environment
const fs = require('fs');

// Open a file to get a file descriptor (fd)
fs.open('my-file.txt', 'r', (err, fd) => {
  if (err) throw err;
  
  // Now you can use the 'fd' with other low-level fs methods
  // like fs.read(), fs.fstat(), etc.
  
  // It is crucial to close the descriptor when you're done.
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});
\`\`\`
While most high-level methods like \`fs.readFile()\` handle this for you, understanding file descriptors is key for advanced I/O operations, such as reading specific bytes from a large file or working with system-level file locking.

### 📚 Key Concepts
- **File Descriptor**: An integer that uniquely identifies an open file within a process.
- **Low-Level I/O**: Interacting with files at a more fundamental level than simple read/write operations.
`,

  // problem explanation--> 102
  "iocu-problem-102-conceptual": `
### 💡 Problem Breakdown
This problem focuses on a crucial aspect of working with Node.js streams: error handling. Streams are \`EventEmitters\`, and if an error occurs (e.g., a file doesn't exist, or a network connection breaks), they emit an \`'error'\` event. If there is no listener for this event, the Node.js process will crash.

### ⚙️ Solution Walkthrough
An error handler is attached using the \`.on()\` method.
\`\`\`javascript
// In a Node.js environment
const fs = require('fs');

const readStream = fs.createReadStream('non-existent-file.txt');

// Attach an error handler
readStream.on('error', (err) => {
  console.error('An error occurred in the stream:', err.message);
});

readStream.on('data', (chunk) => { /* This will not run */ });
\`\`\`
It is a best practice to always attach an \`'error'\` event listener to every stream in your pipeline to prevent your application from crashing unexpectedly.

### 📚 Key Concepts
- **Stream Events**: Streams use events (\`'data'\`, \`'end'\`, \`'error'\`) to signal their state.
- **Error Handling**: A critical part of writing robust, production-ready code.
`,

  // problem explanation--> 103
  "iocu-problem-103-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explores implementing a custom \`Duplex\` stream in Node.js. A Duplex stream is one that is both readable and writable (e.g., a network socket). You can create your own Duplex stream to serve as a combined source and destination in a pipeline.

### ⚙️ Solution Walkthrough
A custom Duplex stream must implement both \`_read()\` and \`_write()\` methods.
\`\`\`javascript
// In a Node.js environment
const { Duplex } = require('stream');

class MyDuplex extends Duplex {
  _write(chunk, encoding, callback) {
    // Handle incoming data
    console.log('Received:', chunk.toString());
    callback();
  }
  _read(size) {
    // Push data to be read by consumers
    this.push('some-data');
    this.push(null); // Signal end of data
  }
}
\`\`\`
Duplex streams are a fundamental building block for implementing network protocols or complex I/O proxies.

### 📚 Key Concepts
- **Duplex Stream**: A stream that is both readable and writable.
- **Stream Implementation**: The internal methods (\`_read\`, \`_write\`) that must be implemented for custom streams.
`,

  // problem explanation--> 104
  "iocu-problem-104-conceptual": `
### 💡 Problem Breakdown
This conceptual problem compares two Node.js methods for watching for changes in files and directories: \`fs.watch()\` and \`fs.watchFile()\`.
- **\`fs.watch()\`**: More efficient. It relies on the underlying operating system's file system notifications. However, it can be inconsistent across different platforms (macOS, Linux, Windows).
- **\`fs.watchFile()\`**: Less efficient but more reliable. It works by periodically polling the file's stats to see if it has changed.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// In a Node.js environment
// fs.watch() is generally preferred
fs.watch('my-file.txt', (eventType, filename) => {
  if (filename) {
    console.log(\`Event '\${eventType}' on: \${filename}\`);
  }
});

// fs.watchFile() is a fallback
fs.watchFile('my-file.txt', (curr, prev) => {
  console.log('File modified at:', curr.mtime);
});
\`\`\`
Use \`fs.watch()\` first, but be aware of its platform inconsistencies. Use \`fs.watchFile()\` if you need a more robust (though less performant) solution.

### 📚 Key Concepts
- **File System Watching**: A common requirement for tools like live-reloading servers or file synchronizers.
`,

  // problem explanation--> 105
  "iocu-problem-105-conceptual": `
### 💡 Problem Breakdown
This conceptual problem introduces the Node.js \`tty\` (Teletype) module. This module provides classes for interacting with a text terminal. It's used to determine if a stream is connected to a TTY context, which is useful for deciding whether to output colored text or other special terminal characters.

### ⚙️ Solution Walkthrough
The \`isatty()\` method is the most common use case.
\`\`\`javascript
// In a Node.js environment
const tty = require('tty');

// Check if standard output is a terminal
if (tty.isatty(process.stdout.fd)) {
  console.log('Output is a terminal. Can use colors.');
} else {
  console.log('Output is being redirected or piped.');
}
\`\`\`
Libraries like \`chalk\` use this internally to automatically disable color output when a script's output is being piped to a file.

### 📚 Key Concepts
- **TTY (Teletype)**: A text input and output environment, like a command-line terminal.
`,

  // problem explanation--> 106
  "iocu-problem-106-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`dgram\` module in Node.js, which provides an implementation of UDP (User Datagram Protocol) sockets. Unlike TCP, UDP is a connectionless protocol that sends discrete packets ("datagrams") without guaranteeing delivery or order. It's fast and is used for things like DNS, video streaming, and online gaming.

### ⚙️ Solution Walkthrough
A simple UDP server that listens for messages.
\`\`\`javascript
// In a Node.js environment
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(\`Server got: \${msg} from \${rinfo.address}:\${rinfo.port}\`);
});

server.bind(41234); // Listen on port 41234
\`\`\`

### 📚 Key Concepts
- **UDP (User Datagram Protocol)**: A connectionless, low-overhead network protocol.
`,

  // problem explanation--> 107
  "iocu-problem-107-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`net\` module in Node.js, which provides an asynchronous network API for creating TCP (Transmission Control Protocol) servers and clients. TCP is a connection-oriented protocol that provides reliable, ordered delivery of a stream of data. It's the foundation of most internet protocols, including HTTP.

### ⚙️ Solution Walkthrough
A simple TCP server that echoes back any data it receives.
\`\`\`javascript
// In a Node.js environment
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected.');
  socket.on('data', (data) => {
    socket.write(data); // Echo back the data
  });
});

server.listen(1337, '127.0.0.1');
\`\`\`

### 📚 Key Concepts
- **TCP (Transmission Control Protocol)**: A reliable, connection-oriented network protocol.
- **Sockets**: An endpoint for sending or receiving data across a computer network.
`,

  // problem explanation--> 108
  "iocu-problem-108-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explores I/O within Node.js worker threads. The \`worker_threads\` module allows you to run JavaScript in parallel on separate threads. Communication and I/O between the main thread and worker threads are handled through \`MessageChannel\`-like ports.

### ⚙️ Solution Walkthrough
A worker receives a message and sends a result back.
\`\`\`javascript
// --- main.js ---
const { Worker } = require('worker_threads');
const worker = new Worker('./worker.js');
worker.on('message', (msg) => console.log(msg));
worker.postMessage('hello');

// --- worker.js ---
const { parentPort } = require('worker_threads');
parentPort.on('message', (msg) => {
  parentPort.postMessage(\`Worker received: \${msg}\`);
});
\`\`\`

### 📚 Key Concepts
- **Multi-threading**: Running code in parallel to perform CPU-intensive tasks without blocking the main event loop.
- **\`postMessage()\`**: The API for sending data between threads.
`,

  // problem explanation--> 109
  "iocu-problem-109-conceptual": `
### 💡 Problem Breakdown
This conceptual problem dives into a performance tuning option for Node.js streams. When you create a readable stream with \`fs.createReadStream()\`, you can specify a \`highWaterMark\` option. This option controls the size of the internal buffer that the stream uses.

### ⚙️ Solution Walkthrough
A smaller \`highWaterMark\` can be useful for memory-constrained environments, while a larger one can improve throughput by reducing the number of system calls.
\`\`\`javascript
// In Node.js
// Read the file in small 16-byte chunks.
const readStream = fs.createReadStream('large-file.txt', { highWaterMark: 16 });

readStream.on('data', (chunk) => {
  console.log(\`Received \${chunk.length} bytes of data.\`);
});
\`\`\`

### 📚 Key Concepts
- **Stream Buffering**: Streams use internal buffers to manage the flow of data.
- **Performance Tuning**: Adjusting parameters like \`highWaterMark\` to optimize for memory or speed.
`,

  // problem explanation--> 110
  "iocu-problem-110-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the standard error stream in Node.js. In addition to \`process.stdout\`, Node provides \`process.stderr\`. It's a best practice to write error messages to \`stderr\` and normal output to \`stdout\`. This allows users to separate the two, for example, by redirecting errors to a log file.

### ⚙️ Solution Walkthrough
\`console.error()\` is a high-level function that writes to \`process.stderr\`.
\`\`\`javascript
// In a Node.js environment
// This writes to stdout
console.log('Processing data...');
// This writes to stderr
console.error('Error: Failed to process data!');
\`\`\`
Running \`node my_script.js 2> error.log\` would redirect only the error message to the log file.

### 📚 Key Concepts
- **Standard Streams**: The three standard streams in command-line environments are stdin, stdout, and stderr.
`,

  // problem explanation--> 111
  "iocu-problem-111-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explores WebSocket subprotocols. When establishing a WebSocket connection, the client can announce that it supports one or more subprotocols. If the server also supports one of these, it will select one and inform the client. This allows for versioning and creating more structured communication over a generic WebSocket channel.

### ⚙️ Solution Walkthrough
The subprotocol is specified in the \`WebSocket\` constructor.
\`\`\`javascript
// Client requests either 'json' or 'xml' protocol
const ws = new WebSocket('wss://example.com/socket', ['json', 'xml']);

ws.onopen = () => {
  // Check which protocol the server selected
  console.log('Server selected protocol:', ws.protocol);
};
\`\`\`

### 📚 Key Concepts
- **WebSocket Protocol**: The underlying protocol for real-time communication.
- **Subprotocols**: A mechanism for layering a more specific protocol on top of WebSockets.
`,

  // problem explanation--> 112
  "iocu-problem-112-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a key feature of WebRTC: \`RTCDataChannel\`. While WebRTC is often associated with audio and video, it also provides a high-performance, low-latency API for sending arbitrary data directly between two browsers, peer-to-peer.

### ⚙️ Solution Walkthrough
A data channel is created on an \`RTCPeerConnection\`.
\`\`\`javascript
// In a browser environment, on one peer
const dataChannel = peerConnection.createDataChannel('myDataChannel');
dataChannel.onmessage = (event) => {
  console.log('Received:', event.data);
};
dataChannel.onopen = () => {
  dataChannel.send('Hello from Peer A!');
};
\`\`\`
This is ideal for building low-latency applications like multiplayer games or real-time collaborative editors.

### 📚 Key Concepts
- **WebRTC**: A framework for peer-to-peer communication.
- **Data Channels**: The API for sending non-media data via WebRTC.
`,

  // problem explanation--> 113
  "iocu-problem-113-conceptual": `
### 💡 Problem Breakdown
This conceptual problem introduces \`getDisplayMedia()\`, a method on the \`navigator.mediaDevices\` object. It is similar to \`getUserMedia()\` but is used to capture the contents of a user's display (the entire screen, a specific application window, or a browser tab).

### ⚙️ Solution Walkthrough
The API is promise-based and returns a \`MediaStream\` object.
\`\`\`javascript
// In a browser environment
async function startCapture() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    // The 'stream' can be attached to a <video> element to show a preview.
  } catch (err) {
    console.error("Error capturing display:", err);
  }
}
\`\`\`
This is the core technology behind screen sharing and recording applications on the web.

### 📚 Key Concepts
- **Screen Capture**: A Web API for capturing the user's screen content.
- **\`MediaStream\`**: The standard object for representing streams of media content.
`,

  // problem explanation--> 114
  "iocu-problem-114-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers \`performance.now()\`, the modern, high-precision way to get a timestamp in the browser. Unlike \`Date.now()\`, which is based on the system clock and can be inaccurate or change, \`performance.now()\` returns a high-resolution monotonic timestamp (a number of milliseconds since the page was loaded) that is ideal for measuring performance.

### ⚙️ Solution Walkthrough
It's used for benchmarking.
\`\`\`javascript
const start = performance.now();
// ... run some code ...
const end = performance.now();
const duration = end - start; // Accurate duration in milliseconds
\`\`\`

### 📚 Key Concepts
- **High-Resolution Time**: A timer that is accurate to microseconds.
- **Monotonic Clock**: A clock that always moves forward, unaffected by system time changes.
`,

  // problem explanation--> 115
  "iocu-problem-115-conceptual": `
### 💡 Problem Breakdown
This conceptual problem introduces the User Timing API, which is part of the broader Performance API. It allows you to create custom, named timestamps ("marks") and measure the duration between them ("measures"). These custom timings will automatically appear in the browser's performance timeline.

### ⚙️ Solution Walkthrough
The API is used to measure a specific application event.
\`\`\`javascript
// Mark the start of an operation
performance.mark('start-data-processing');

// ... perform the operation ...

// Mark the end and create a measure
performance.mark('end-data-processing');
performance.measure(
  'Data Processing Duration', 
  'start-data-processing', 
  'end-data-processing'
);
\`\`\`

### 📚 Key Concepts
- **User Timing API**: A standard API for creating custom performance metrics.
- **Performance Profiling**: This allows you to add application-specific context to a performance profile.
`,

  // problem explanation--> 116
  "iocu-problem-116-conceptual": `
### 💡 Problem Breakdown
This conceptual problem dives into the \`Request\` and \`Response\` objects used by the Fetch API. Instead of just passing a URL string, you can create a full \`Request\` object to configure things like method, headers, and body. The \`fetch\` call then resolves with a \`Response\` object, which represents the server's response.

### ⚙️ Solution Walkthrough
Creating a \`Request\` object explicitly.
\`\`\`javascript
const myRequest = new Request('/api/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: 'hello' })
});

fetch(myRequest).then(response => {
  // 'response' is an instance of the Response class
  console.log(response.status); // e.g., 200
});
\`\`\`

### 📚 Key Concepts
- **Fetch API**: A modern, powerful, and flexible API for network requests.
- **\`Request\` and \`Response\` Objects**: The standard interfaces for representing HTTP requests and responses.
`,

  // problem explanation--> 117
  "iocu-problem-117-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explains CORS preflight requests. For certain "non-simple" cross-origin requests (e.g., a \`PUT\` or \`DELETE\` request, or a request with a custom header like \`Authorization\`), the browser first sends a "preflight" request using the \`OPTIONS\` HTTP method.

### ⚙️ Solution Walkthrough
The browser sends the \`OPTIONS\` request to the server to ask for permission. The server must respond with the correct CORS headers (like \`Access-Control-Allow-Methods\` and \`Access-Control-Allow-Headers\`) to indicate that the actual request is allowed. If the preflight is successful, the browser then sends the actual \`PUT\` or \`DELETE\` request. This is handled automatically by the browser.

### 📚 Key Concepts
- **CORS (Cross-Origin Resource Sharing)**: A browser security mechanism.
- **Preflight Request (\`OPTIONS\`)**: A preliminary check made by the browser for non-simple cross-origin requests.
`,

  // problem explanation--> 118
  "iocu-problem-118-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Cache API, a key part of Service Workers for creating offline-capable web applications. The Cache API provides a storage mechanism for \`Request\` / \`Response\` object pairs.

### ⚙️ Solution Walkthrough
A Service Worker can intercept a \`fetch\` event and serve a response from the cache.
\`\`\`javascript
// In a Service Worker
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return the cached response if found, otherwise fetch from network
      return cachedResponse || fetch(event.request);
    })
  );
});
\`\`\`

### 📚 Key Concepts
- **Cache API**: A promise-based API for storing and retrieving network requests and responses.
- **Service Workers**: The core technology for enabling Progressive Web Apps (PWAs) and offline functionality.
`,

  // problem explanation--> 119
  "iocu-problem-119-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Push API, which allows a web application to receive push notifications from a server, even when the application is not active in the browser.

### ⚙️ Solution Walkthrough
The process is complex and involves a Service Worker.
1. **Client**: The web app asks the user for permission.
2. **Subscription**: If permission is granted, it subscribes to a push service and gets a unique \`PushSubscription\` object.
3. **Server**: This subscription object is sent to the application's server and stored.
4. **Push Event**: When the server wants to send a notification, it sends a message to the push service endpoint from the subscription.
5. **Service Worker**: The browser receives the push message and wakes up the app's Service Worker, which listens for a \`'push'\` event and then displays a notification using the Notifications API.

### 📚 Key Concepts
- **Push API**: For receiving push messages from a server.
- **Service Workers**: Required to handle push events in the background.
`,

  // problem explanation--> 120
  "iocu-problem-120-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Background Sync API. This API allows a web app to defer an action (like sending data to a server) until the user has a stable internet connection.

### ⚙️ Solution Walkthrough
This API is also tied to Service Workers.
1. **Main Thread**: When the user is offline and tries to send a message, the app registers a "sync" event with the Service Worker.
2. **Service Worker**: The Service Worker listens for the \`'sync'\` event.
3. **Sync Event**: Once the browser detects that connectivity has returned, it fires the \`'sync'\` event in the Service Worker.
4. **Action**: The Service Worker's sync handler then performs the deferred action (e.g., sends the stored messages to the server).

### 📚 Key Concepts
- **Background Sync API**: A Web API for deferring actions until connectivity is restored.
- **Offline Capabilities**: A key feature of Progressive Web Apps (PWAs).
`,

  // problem explanation--> 121
  "iocu-problem-121-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a low-level API for handling binary data. When you have an \`ArrayBuffer\` (a raw chunk of memory), a \`DataView\` provides a flexible interface to read and write different types of numbers at any byte offset within the buffer.

### ⚙️ Solution Walkthrough
A \`DataView\` is used to read from a buffer.
\`\`\`javascript
const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);

// Write a 32-bit integer at the start of the buffer
view.setInt32(0, 1234567890);

// Read an 8-bit integer from the first byte
view.getInt8(0);
\`\`\`
A key feature of \`DataView\` is that it allows you to specify the "endianness" (byte order), which is crucial for working with network protocols and certain file formats.

### 📚 Key Concepts
- **Binary Data**: Working with raw bytes.
- **\`DataView\`**: A low-level API for reading and writing data in an \`ArrayBuffer\`.
`,

  // problem explanation--> 122
  "iocu-problem-122-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a key concept in binary data representation: **endianness**. Endianness refers to the order in which bytes are arranged to form a multi-byte number.
- **Big-endian**: The most significant byte is stored first (at the lowest memory address). This is common in network protocols.
- **Little-endian**: The least significant byte is stored first. This is common in modern computer architectures (like x86).

### ⚙️ Solution Walkthrough
The \`DataView\` API allows you to specify the endianness.
\`\`\`javascript
const buffer = new ArrayBuffer(2);
const view = new DataView(buffer);

// Write the number 258 (0x0102) in little-endian format
view.setInt16(0, 258, true); // buffer contains [0x02, 0x01]

// Write it in big-endian format
view.setInt16(0, 258, false); // buffer contains [0x01, 0x02]
\`\`\`

### 📚 Key Concepts
- **Endianness**: The byte order for multi-byte data types.
`,

  // problem explanation--> 123
  "iocu-problem-123-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers Base64, a binary-to-text encoding scheme. It's used to represent binary data (like an image) in an ASCII string format, which is useful for embedding binary data directly in text-based formats like HTML or CSS.

### ⚙️ Solution Walkthrough
In browsers, the global functions \`btoa()\` (binary-to-ASCII) and \`atob()\` (ASCII-to-binary) are used for this.
\`\`\`javascript
// In a browser environment
const binaryString = 'Hello';
const encoded = btoa(binaryString); // "SGVsbG8="

const decoded = atob(encoded); // "Hello"
\`\`\`
Note that these functions work with strings of single-byte characters. To encode arbitrary binary data, you must first convert it. In Node.js, the \`Buffer\` class has built-in methods for Base64 encoding.

### 📚 Key Concepts
- **Base64**: An encoding scheme to represent binary data in text.
`,

  // problem explanation--> 124
  "iocu-problem-124-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the modern, standard APIs for converting between strings and binary data in a specific character encoding, like UTF-8.
- **\`TextEncoder\`**: Takes a JavaScript string and returns a \`Uint8Array\` (an array of bytes) representing the string in UTF-8.
- **\`TextDecoder\`**: Takes a \`Uint8Array\` of UTF-8 bytes and returns a JavaScript string.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// In a modern browser or Node.js environment
const encoder = new TextEncoder();
const decoder = new TextDecoder();

const text = "Hello 👋";
const utf8Bytes = encoder.encode(text);
const decodedText = decoder.decode(utf8Bytes);
\`\`\`
These APIs are the correct and robust way to handle character encoding conversions.

### 📚 Key Concepts
- **\`TextEncoder\` and \`TextDecoder\`**: The standard APIs for encoding/decoding text.
`,

  // problem explanation--> 125
  "iocu-problem-125-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`.slice()\` method of a \`Blob\` object. This method allows you to create a new \`Blob\` object containing a specific range of bytes from the original blob.

### ⚙️ Solution Walkthrough
Slicing a blob is useful for chunking a large file for upload.
\`\`\`javascript
// In a browser environment
const myBlob = new Blob(['This is a long text blob.']);

// Create a new blob containing bytes from index 5 to 11
const chunk = myBlob.slice(5, 12); // Creates a blob with content "is a lo"
\`\`\`

### 📚 Key Concepts
- **\`Blob.slice()\`**: A method for creating a new blob from a byte range of another.
`,

  // problem explanation--> 126
  "iocu-problem-126-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a key aspect of using Object URLs. An object URL, created with \`URL.createObjectURL()\`, is tied to the document in which it was created. It keeps the \`Blob\` or \`File\` data in memory. If you create many object URLs and do not release them, you can cause a memory leak.

### ⚙️ Solution Walkthrough
The \`URL.revokeObjectURL()\` method should be called when you are finished with an object URL.
\`\`\`javascript
// In a browser environment
const blob = new Blob(['data']);
const url = URL.createObjectURL(blob);

// Use the URL, for example:
// img.src = url;

// When the image has loaded or is no longer needed, revoke the URL.
// img.onload = () => {
//   URL.revokeObjectURL(url);
// };
\`\`\`

### 📚 Key Concepts
- **Memory Management**: Object URLs are a resource that must be explicitly managed to prevent memory leaks.
`,

  // problem explanation--> 127
  "iocu-problem-127-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explores an advanced I/O topic. Parsing a very large JSON file by reading it all into memory and then calling \`JSON.parse()\` can be very memory-intensive. A **streaming JSON parser** is a library that can parse JSON from a stream of text chunks.

### ⚙️ Solution Walkthrough
Libraries like \`JSONStream\` or \`clarinet\` in Node.js provide Transform streams.
\`\`\`javascript
// Conceptual Node.js code with a streaming parser
fs.createReadStream('large.json')
  .pipe(JSONStream.parse('rows.*')) // Parse objects from a 'rows' array
  .on('data', (data) => {
    // This event fires for each parsed object
  });
\`\`\`
This allows you to process huge JSON files with very low memory overhead.

### 📚 Key Concepts
- **Streaming Parsing**: The practice of parsing data as it arrives in chunks.
`,

  // problem explanation--> 128
  "iocu-problem-128-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem comparing JSON with **MessagePack**. MessagePack is a binary serialization format. It's often described as "JSON, but fast and small."
- **JSON**: Text-based, human-readable.
- **MessagePack**: Binary-based, more compact and faster to parse/serialize for computers.

### ⚙️ Solution Walkthrough
You would use a library to encode/decode MessagePack data.
\`\`\`javascript
// Conceptual
const msgpack = require('msgpack-lite');
const obj = { a: 1, b: 'hello' };

const encoded = msgpack.encode(obj); // A Uint8Array
const decoded = msgpack.decode(encoded);
\`\`\`
MessagePack is a good choice for performance-critical applications or for reducing network bandwidth.

### 📚 Key Concepts
- **Binary Serialization**: A more compact and efficient alternative to text-based formats like JSON.
`,

  // problem explanation--> 129
  "iocu-problem-129-conceptual": `
### 💡 Problem Breakdown
This conceptual problem introduces **Protocol Buffers (Protobuf)**, another binary serialization format developed by Google. It's language-neutral and platform-neutral.
- **Key Feature**: You define the structure of your data in a \`.proto\` file (a schema).
- **Compiler**: A Protobuf compiler then generates code in your target language (e.g., JavaScript) to serialize and deserialize data according to that schema.

### ⚙️ Solution Walkthrough
This provides a very structured and efficient way to handle data, especially for communication between microservices written in different languages. The schema ensures that both the sender and receiver agree on the data's structure.

### 📚 Key Concepts
- **Schema-based Serialization**: A data format that uses a predefined schema, providing strong typing and efficiency.
`,

  // problem explanation--> 130
  "iocu-problem-130-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a deprecated but sometimes useful console feature. \`console.profile()\` and \`console.profileEnd()\` are methods that can be called from your code to programmatically start and stop a CPU profiling session in the browser's developer tools.

### ⚙️ Solution Walkthrough
A profile is started and stopped around an expensive function.
\`\`\`javascript
function doExpensiveWork() {
  console.profile("My Profile");
  // ... a lot of code ...
  console.profileEnd("My Profile");
}
\`\`\`
The modern approach is to start and stop profiling manually using the UI of the Performance panel.

### 📚 Key Concepts
- **Performance Profiling**: The process of analyzing code to find performance bottlenecks.
`,

  // problem explanation--> 131
  "iocu-problem-131-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Web Serial API. This API allows a web page to communicate with serial devices (like Arduinos, 3D printers, or industrial hardware) connected to the user's computer via a serial port (including USB).

### ⚙️ Solution Walkthrough
The API is promise-based and requires explicit user permission.
\`\`\`javascript
// Conceptual browser code
async function connectToSerial() {
  const port = await navigator.serial.requestPort();
  await port.open({ baudRate: 9600 });
  const reader = port.readable.getReader();
  const writer = port.writable.getWriter();
}
\`\`\`

### 📚 Key Concepts
- **Web Serial API**: An API for bridging the web and physical hardware via serial communication.
`,

  // problem explanation--> 132
  "iocu-problem-132-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the WebHID (Human Interface Device) API. It provides a way for web pages to interact with less common input devices that are not handled by the standard keyboard or mouse events, such as unique gamepads, joysticks, or specialized controllers.

### ⚙️ Solution Walkthrough
The API is promise-based and requires user permission.
\`\`\`javascript
// Conceptual browser code
async function connectToDevice() {
  const [device] = await navigator.hid.requestDevice({ filters: [] });
  await device.open();
  device.addEventListener('inputreport', event => { /* ... */ });
}
\`\`\`

### 📚 Key Concepts
- **WebHID API**: An API for interacting with a wide range of input devices.
`,

  // problem explanation--> 133
  "iocu-problem-133-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Web NFC (Near Field Communication) API. It allows a web application on a mobile device to read from and write to NFC tags when the device is in very close proximity.

### ⚙️ Solution Walkthrough
The API is promise-based.
\`\`\`javascript
// Conceptual browser code
async function readTag() {
  const reader = new NDEFReader();
  await reader.scan();
  reader.onreading = event => { /* ... */ };
}
\`\`\`

### 📚 Key Concepts
- **Web NFC API**: An API for interacting with NFC tags.
`,

  // problem explanation--> 134
  "iocu-problem-134-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a modern, powerful browser API. The File System Access API allows web applications to directly read, write, and manage files on the user's local file system, with their explicit permission.

### ⚙️ Solution Walkthrough
The API is promise-based and uses \`async/await\`.
\`\`\`javascript
// Conceptual browser code
async function openFile() {
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  const contents = await file.text();
}
\`\`\`
This enables more powerful, desktop-like applications to run in the browser.

### 📚 Key Concepts
- **File System Access API**: A modern API for direct file system interaction.
`,

  // problem explanation--> 135
  "iocu-problem-135-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`BroadcastChannel\` API. It provides a simple way for different browsing contexts (tabs, windows, iframes, workers) of the **same origin** to send and receive messages.

### ⚙️ Solution Walkthrough
A channel is created with the same name in different tabs.
\`\`\`javascript
// In Tab 1
const bc = new BroadcastChannel('app-channel');
bc.postMessage('User logged out');

// In Tab 2
const bc = new BroadcastChannel('app-channel');
bc.onmessage = (event) => { /* ... */ };
\`\`\`

### 📚 Key Concepts
- **BroadcastChannel**: A browser API for cross-context communication.
`,

  // problem explanation--> 136
  "iocu-problem-136-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`MessageChannel\` API. It provides a way to create a direct, two-way communication channel between two JavaScript contexts (like a main window and an iframe, or a window and a Web Worker).

### ⚙️ Solution Walkthrough
A channel is created and its ports are used for communication.
\`\`\`javascript
const channel = new MessageChannel();
const port1 = channel.port1;
const port2 = channel.port2;
// Send port2 to another context, then use port1 to communicate.
\`\`\`

### 📚 Key Concepts
- **\`MessageChannel\`**: A Web API for creating a direct communication channel.
`,

  // problem explanation--> 137
  "iocu-problem-137-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers \`SharedWorker\`. Unlike a regular Web Worker, a \`SharedWorker\` can be accessed by multiple browsing contexts (tabs, windows) from the same origin. It provides a single, shared background thread.

### ⚙️ Solution Walkthrough
Communication is handled through \`MessagePort\` objects.
\`\`\`javascript
// In main script
const worker = new SharedWorker('worker.js');
worker.port.start();
worker.port.postMessage('hello');

// In worker.js
onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = (event) => { /* ... */ };
};
\`\`\`

### 📚 Key Concepts
- **\`SharedWorker\`**: A worker that can be shared across multiple scripts.
`,

  // problem explanation--> 138
  "iocu-problem-138-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Web Locks API. It allows multiple tabs or workers to coordinate and prevent race conditions when accessing a shared resource, like IndexedDB.

### ⚙️ Solution Walkthrough
A lock is requested for a resource. The async callback runs only after the lock is acquired.
\`\`\`javascript
// Conceptual browser code
await navigator.locks.request('my-resource', async lock => {
  // Critical section
});
\`\`\`

### 📚 Key Concepts
- **Web Locks API**: A browser API for managing locks on resources to prevent race conditions.
`,

  // problem explanation--> 139
  "iocu-problem-139-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Reporting API. The \`ReportingObserver\` API provides a way to collect and access reports generated by the browser, such as deprecation warnings, CSP violations, or crash reports.

### ⚙️ Solution Walkthrough
An observer is created to listen for reports.
\`\`\`javascript
// Conceptual browser code
const observer = new ReportingObserver((reports, obs) => {
  for (const report of reports) {
    // Send report to a server
  }
}, { buffered: true });

observer.observe();
\`\`\`

### 📚 Key Concepts
- **Reporting API**: An API for collecting browser-generated reports.
`,

  // problem explanation--> 140
  "iocu-problem-140-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a specialized Web API. The Beacon API is designed for sending small amounts of data from a web page to a server **without expecting a response**. Its key feature is that the browser guarantees it will try to send the request, even if the page is being unloaded.

### ⚙️ Solution Walkthrough
It's a single, synchronous method call.
\`\`\`javascript
// Conceptual browser code
window.addEventListener('unload', () => {
  navigator.sendBeacon('/log', myAnalyticsData);
});
\`\`\`
This is ideal for sending analytics or logging data when a user navigates away.

### 📚 Key Concepts
- **Beacon API**: A Web API for reliable, non-blocking, one-way data transmission.
`,

  // problem explanation--> 141
  "iocu-problem-141-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a Firefox-specific console method. \`console.context()\` allows you to select a specific iframe or execution context in which subsequent console commands will be executed.

### 📚 Key Concepts
- **Execution Context**: A useful tool for debugging applications with multiple iframes.
`,

  // problem explanation--> 142
  "iocu-problem-142-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a non-standard but available property in some browser consoles. \`console.memory\` is a property that can be used to inspect the current heap size and memory usage of the page.

### 📚 Key Concepts
- **Memory Profiling**: A way to get a quick overview of memory usage.
`,

  // problem explanation--> 143
  "iocu-problem-143-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a Firefox-specific command line utility. The \`:screenshot\` command in the Firefox developer console allows you to take a screenshot of the current page or a specific element.

### 📚 Key Concepts
- **Developer Tools**: Advanced features for capturing and analyzing the UI.
`,

  // problem explanation--> 144
  "iocu-problem-144-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Browser Console Command Line API. In addition to \`console\` methods, the console provides special variables and functions:
- **\`$0\`**: A reference to the currently selected element in the Elements panel.
- **\`$_\`**: A reference to the result of the last expression evaluated in the console.
- **\`copy()\`**: A function to copy a string representation of an object to the clipboard.

### 📚 Key Concepts
- **Command Line API**: A set of convenience functions available in the browser console.
`,

  // problem explanation--> 145
  "iocu-problem-145-conceptual": `
### 💡 Problem Breakdown
This conceptual problem compares the two simple key-value storage APIs in the browser.
- **\`localStorage\`**: Persists data across browser sessions. The data remains until it is explicitly cleared.
- **\`sessionStorage\`**: Stores data only for the duration of the page session. The data is cleared when the tab is closed.

Both have the same synchronous API and a storage limit of around 5-10 MB.

### 📚 Key Concepts
- **Client-Side Storage**: Options for storing data in the browser.
`,

  // problem explanation--> 146
  "iocu-problem-146-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a core concept of IndexedDB. All data operations in IndexedDB must happen within a **transaction**. A transaction ensures data integrity (atomicity). It groups a set of operations together. If any operation in the transaction fails, the entire transaction is aborted, and any changes are rolled back.

### 📚 Key Concepts
- **Transactions**: A fundamental concept in database management for ensuring data consistency.
`,

  // problem explanation--> 147
  "iocu-problem-147-conceptual": `
### 💡 Problem Breakdown
This conceptual problem compares the modern and legacy APIs for making network requests.
- **\`XMLHttpRequest\` (XHR)**: Older, event-based API. It's more verbose and less ergonomic.
- **\`fetch\`**: Modern, promise-based API. It has a cleaner, more composable syntax and integrates naturally with \`async/await\`.

For all new development, \`fetch\` is the standard and preferred choice.

### 📚 Key Concepts
- **AJAX**: The general term for asynchronous network requests from the browser.
`,

  // problem explanation--> 148
  "iocu-problem-148-conceptual": `
### 💡 Problem Breakdown
The original Node.js \`fs\` module is callback-based. Modern Node.js provides a promise-based version of the API, which allows for cleaner asynchronous code using \`async/await\`.

### ⚙️ Solution Walkthrough
The promise-based API is used to read a file.
\`\`\`javascript
// In a modern Node.js environment:
const fs = require('fs/promises');

async function readFile() {
  const data = await fs.readFile('path/to/file.txt', 'utf8');
  console.log(data);
}
\`\`\`
This avoids "callback hell" and allows for standard \`try...catch\` error handling.

### 📚 Key Concepts
- **Promisification**: The process of converting callback-based APIs into promise-based ones.
`,

  // problem explanation--> 149
  "iocu-problem-149-conceptual": `
### 💡 Problem Breakdown
This is a conceptual Node.js streams problem. The \`EPIPE\` ("broken pipe") error occurs on a writable stream when the readable end of the pipe has been closed. This commonly happens, for example, when you are piping the output of a command to another command like \`head\`, and the \`head\` command exits after it has received enough data. Your Node.js process must handle this error gracefully to avoid crashing.

### 📚 Key Concepts
- **Stream Error Handling**: A crucial part of working with Node.js streams.
`,

  // problem explanation--> 150
  "iocu-problem-150-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem comparing I/O models.
- **C-like Standard I/O**: Often uses synchronous, blocking functions like \`printf\` and \`scanf\`.
- **Node.js**: Emphasizes an asynchronous, non-blocking, event-driven model for I/O. Its standard I/O streams (\`process.stdin\`, \`process.stdout\`) are asynchronous streams that emit events. This allows a Node.js server to handle many concurrent I/O operations efficiently without being blocked.

### 📚 Key Concepts
- **I/O Models**: Different approaches to handling input and output.
- **Non-blocking I/O**: The foundation of Node.js's performance model.
`,

  // problem explanation--> 151
  "iocu-problem-151-conceptual": `
### 💡 Problem Breakdown
This problem explores a lower-level concept in Node.js file I/O: **file descriptors**. A file descriptor is a non-negative integer that serves as an abstract indicator or "handle" for a file. Instead of working with file paths, low-level functions can work directly with these efficient integer references. The backslash character is \`\\\\\`.

### ⚙️ Solution Walkthrough
The \`fs.open()\` method is used to get a file descriptor.
\`\`\`javascript
// In a Node.js environment
const fs = require('fs');

// Open a file to get a file descriptor (fd)
fs.open('my-file.txt', 'r', (err, fd) => {
  if (err) throw err;
  
  // Now you can use the 'fd' with other low-level fs methods
  // like fs.read(), fs.fstat(), etc.
  
  // It is crucial to close the descriptor when you're done.
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});
\`\`\`
While most high-level methods like \`fs.readFile()\` handle this for you, understanding file descriptors is key for advanced I/O operations, such as reading specific bytes from a large file or working with system-level file locking.

### 📚 Key Concepts
- **File Descriptor**: An integer that uniquely identifies an open file within a process.
- **Low-Level I/O**: Interacting with files at a more fundamental level than simple read/write operations.
`,

  // problem explanation--> 152
  "iocu-problem-152-conceptual": `
### 💡 Problem Breakdown
This problem focuses on a crucial aspect of working with Node.js streams: error handling. Streams are \`EventEmitters\`, and if an error occurs (e.g., a file doesn't exist, or a network connection breaks), they emit an \`'error'\` event. If there is no listener for this event, the Node.js process will crash.

### ⚙️ Solution Walkthrough
An error handler is attached using the \`.on()\` method.
\`\`\`javascript
// In a Node.js environment
const fs = require('fs');

const readStream = fs.createReadStream('non-existent-file.txt');

// Attach an error handler
readStream.on('error', (err) => {
  console.error('An error occurred in the stream:', err.message);
});

readStream.on('data', (chunk) => { /* This will not run */ });
\`\`\`
It is a best practice to always attach an \`'error'\` event listener to every stream in your pipeline to prevent your application from crashing unexpectedly.

### 📚 Key Concepts
- **Stream Events**: Streams use events (\`'data'\`, \`'end'\`, \`'error'\`) to signal their state.
- **Error Handling**: A critical part of writing robust, production-ready code.
`,

  // problem explanation--> 153
  "iocu-problem-153-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explores implementing a custom \`Duplex\` stream in Node.js. A Duplex stream is one that is both readable and writable (e.g., a network socket). You can create your own Duplex stream to serve as a combined source and destination in a pipeline.

### ⚙️ Solution Walkthrough
A custom Duplex stream must implement both \`_read()\` and \`_write()\` methods.
\`\`\`javascript
// In a Node.js environment
const { Duplex } = require('stream');

class MyDuplex extends Duplex {
  _write(chunk, encoding, callback) {
    // Handle incoming data
    console.log('Received:', chunk.toString());
    callback();
  }
  _read(size) {
    // Push data to be read by consumers
    this.push('some-data');
    this.push(null); // Signal end of data
  }
}
\`\`\`
Duplex streams are a fundamental building block for implementing network protocols or complex I/O proxies.

### 📚 Key Concepts
- **Duplex Stream**: A stream that is both readable and writable.
- **Stream Implementation**: The internal methods (\`_read\`, \`_write\`) that must be implemented for custom streams.
`,

  // problem explanation--> 154
  "iocu-problem-154-conceptual": `
### 💡 Problem Breakdown
This conceptual problem compares two Node.js methods for watching for changes in files and directories: \`fs.watch()\` and \`fs.watchFile()\`.
- **\`fs.watch()\`**: More efficient. It relies on the underlying operating system's file system notifications. However, it can be inconsistent across different platforms (macOS, Linux, Windows).
- **\`fs.watchFile()\`**: Less efficient but more reliable. It works by periodically polling the file's stats to see if it has changed.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// In a Node.js environment
// fs.watch() is generally preferred
fs.watch('my-file.txt', (eventType, filename) => {
  if (filename) {
    console.log(\`Event '\${eventType}' on: \${filename}\`);
  }
});

// fs.watchFile() is a fallback
fs.watchFile('my-file.txt', (curr, prev) => {
  console.log('File modified at:', curr.mtime);
});
\`\`\`
Use \`fs.watch()\` first, but be aware of its platform inconsistencies. Use \`fs.watchFile()\` if you need a more robust (though less performant) solution.

### 📚 Key Concepts
- **File System Watching**: A common requirement for tools like live-reloading servers or file synchronizers.
`,

  // problem explanation--> 155
  "iocu-problem-155-conceptual": `
### 💡 Problem Breakdown
This conceptual problem introduces the Node.js \`tty\` (Teletype) module. This module provides classes for interacting with a text terminal. It's used to determine if a stream is connected to a TTY context, which is useful for deciding whether to output colored text or other special terminal characters.

### ⚙️ Solution Walkthrough
The \`isatty()\` method is the most common use case.
\`\`\`javascript
// In a Node.js environment
const tty = require('tty');

// Check if standard output is a terminal
if (tty.isatty(process.stdout.fd)) {
  console.log('Output is a terminal. Can use colors.');
} else {
  console.log('Output is being redirected or piped.');
}
\`\`\`
Libraries like \`chalk\` use this internally to automatically disable color output when a script's output is being piped to a file.

### 📚 Key Concepts
- **TTY (Teletype)**: A text input and output environment, like a command-line terminal.
`,

  // problem explanation--> 156
  "iocu-problem-156-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`dgram\` module in Node.js, which provides an implementation of UDP (User Datagram Protocol) sockets. Unlike TCP, UDP is a connectionless protocol that sends discrete packets ("datagrams") without guaranteeing delivery or order. It's fast and is used for things like DNS, video streaming, and online gaming.

### ⚙️ Solution Walkthrough
A simple UDP server that listens for messages.
\`\`\`javascript
// In a Node.js environment
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(\`Server got: \${msg} from \${rinfo.address}:\${rinfo.port}\`);
});

server.bind(41234); // Listen on port 41234
\`\`\`

### 📚 Key Concepts
- **UDP (User Datagram Protocol)**: A connectionless, low-overhead network protocol.
`,

  // problem explanation--> 157
  "iocu-problem-157-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`net\` module in Node.js, which provides an asynchronous network API for creating TCP (Transmission Control Protocol) servers and clients. TCP is a connection-oriented protocol that provides reliable, ordered delivery of a stream of data. It's the foundation of most internet protocols, including HTTP.

### ⚙️ Solution Walkthrough
A simple TCP server that echoes back any data it receives.
\`\`\`javascript
// In a Node.js environment
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected.');
  socket.on('data', (data) => {
    socket.write(data); // Echo back the data
  });
});

server.listen(1337, '127.0.0.1');
\`\`\`

### 📚 Key Concepts
- **TCP (Transmission Control Protocol)**: A reliable, connection-oriented network protocol.
- **Sockets**: An endpoint for sending or receiving data across a computer network.
`,

  // problem explanation--> 158
  "iocu-problem-158-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explores I/O within Node.js worker threads. The \`worker_threads\` module allows you to run JavaScript in parallel on separate threads. Communication and I/O between the main thread and worker threads are handled through \`MessageChannel\`-like ports.

### ⚙️ Solution Walkthrough
A worker receives a message and sends a result back.
\`\`\`javascript
// --- main.js ---
const { Worker } = require('worker_threads');
const worker = new Worker('./worker.js');
worker.on('message', (msg) => console.log(msg));
worker.postMessage('hello');

// --- worker.js ---
const { parentPort } = require('worker_threads');
parentPort.on('message', (msg) => {
  parentPort.postMessage(\`Worker received: \${msg}\`);
});
\`\`\`

### 📚 Key Concepts
- **Multi-threading**: Running code in parallel to perform CPU-intensive tasks without blocking the main event loop.
- **\`postMessage()\`**: The API for sending data between threads.
`,

  // problem explanation--> 159
  "iocu-problem-159-conceptual": `
### 💡 Problem Breakdown
This conceptual problem dives into a performance tuning option for Node.js streams. When you create a readable stream with \`fs.createReadStream()\`, you can specify a \`highWaterMark\` option. This option controls the size of the internal buffer that the stream uses.

### ⚙️ Solution Walkthrough
A smaller \`highWaterMark\` can be useful for memory-constrained environments, while a larger one can improve throughput by reducing the number of system calls.
\`\`\`javascript
// In Node.js
// Read the file in small 16-byte chunks.
const readStream = fs.createReadStream('large-file.txt', { highWaterMark: 16 });

readStream.on('data', (chunk) => {
  console.log(\`Received \${chunk.length} bytes of data.\`);
});
\`\`\`

### 📚 Key Concepts
- **Stream Buffering**: Streams use internal buffers to manage the flow of data.
- **Performance Tuning**: Adjusting parameters like \`highWaterMark\` to optimize for memory or speed.
`,

  // problem explanation--> 160
  "iocu-problem-160-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the standard error stream in Node.js. In addition to \`process.stdout\`, Node provides \`process.stderr\`. It's a best practice to write error messages to \`stderr\` and normal output to \`stdout\`. This allows users to separate the two, for example, by redirecting errors to a log file.

### ⚙️ Solution Walkthrough
\`console.error()\` is a high-level function that writes to \`process.stderr\`.
\`\`\`javascript
// In a Node.js environment
// This writes to stdout
console.log('Processing data...');
// This writes to stderr
console.error('Error: Failed to process data!');
\`\`\`
Running \`node my_script.js 2> error.log\` would redirect only the error message to the log file.

### 📚 Key Concepts
- **Standard Streams**: The three standard streams in command-line environments are stdin, stdout, and stderr.
`,

  // problem explanation--> 161
  "iocu-problem-161-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explores WebSocket subprotocols. When establishing a WebSocket connection, the client can announce that it supports one or more subprotocols. If the server also supports one of these, it will select one and inform the client. This allows for versioning and creating more structured communication over a generic WebSocket channel.

### ⚙️ Solution Walkthrough
The subprotocol is specified in the \`WebSocket\` constructor.
\`\`\`javascript
// Client requests either 'json' or 'xml' protocol
const ws = new WebSocket('wss://example.com/socket', ['json', 'xml']);

ws.onopen = () => {
  // Check which protocol the server selected
  console.log('Server selected protocol:', ws.protocol);
};
\`\`\`

### 📚 Key Concepts
- **WebSocket Protocol**: The underlying protocol for real-time communication.
- **Subprotocols**: A mechanism for layering a more specific protocol on top of WebSockets.
`,

  // problem explanation--> 162
  "iocu-problem-162-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a key feature of WebRTC: \`RTCDataChannel\`. While WebRTC is often associated with audio and video, it also provides a high-performance, low-latency API for sending arbitrary data directly between two browsers, peer-to-peer.

### ⚙️ Solution Walkthrough
A data channel is created on an \`RTCPeerConnection\`.
\`\`\`javascript
// In a browser environment, on one peer
const dataChannel = peerConnection.createDataChannel('myDataChannel');
dataChannel.onmessage = (event) => {
  console.log('Received:', event.data);
};
dataChannel.onopen = () => {
  dataChannel.send('Hello from Peer A!');
};
\`\`\`
This is ideal for building low-latency applications like multiplayer games or real-time collaborative editors.

### 📚 Key Concepts
- **WebRTC**: A framework for peer-to-peer communication.
- **Data Channels**: The API for sending non-media data via WebRTC.
`,

  // problem explanation--> 163
  "iocu-problem-163-conceptual": `
### 💡 Problem Breakdown
This conceptual problem introduces \`getDisplayMedia()\`, a method on the \`navigator.mediaDevices\` object. It is similar to \`getUserMedia()\` but is used to capture the contents of a user's display (the entire screen, a specific application window, or a browser tab).

### ⚙️ Solution Walkthrough
The API is promise-based and returns a \`MediaStream\` object.
\`\`\`javascript
// In a browser environment
async function startCapture() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    // The 'stream' can be attached to a <video> element to show a preview.
  } catch (err) {
    console.error("Error capturing display:", err);
  }
}
\`\`\`
This is the core technology behind screen sharing and recording applications on the web.

### 📚 Key Concepts
- **Screen Capture**: A Web API for capturing the user's screen content.
- **\`MediaStream\`**: The standard object for representing streams of media content.
`,

  // problem explanation--> 164
  "iocu-problem-164-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers \`performance.now()\`, the modern, high-precision way to get a timestamp in the browser. Unlike \`Date.now()\`, which is based on the system clock and can be inaccurate or change, \`performance.now()\` returns a high-resolution monotonic timestamp (a number of milliseconds since the page was loaded) that is ideal for measuring performance.

### ⚙️ Solution Walkthrough
It's used for benchmarking.
\`\`\`javascript
const start = performance.now();
// ... run some code ...
const end = performance.now();
const duration = end - start; // Accurate duration in milliseconds
\`\`\`

### 📚 Key Concepts
- **High-Resolution Time**: A timer that is accurate to microseconds.
- **Monotonic Clock**: A clock that always moves forward, unaffected by system time changes.
`,

  // problem explanation--> 165
  "iocu-problem-165-conceptual": `
### 💡 Problem Breakdown
This conceptual problem introduces the User Timing API, which is part of the broader Performance API. It allows you to create custom, named timestamps ("marks") and measure the duration between them ("measures"). These custom timings will automatically appear in the browser's performance timeline.

### ⚙️ Solution Walkthrough
The API is used to measure a specific application event.
\`\`\`javascript
// Mark the start of an operation
performance.mark('start-data-processing');

// ... perform the operation ...

// Mark the end and create a measure
performance.mark('end-data-processing');
performance.measure(
  'Data Processing Duration', 
  'start-data-processing', 
  'end-data-processing'
);
\`\`\`

### 📚 Key Concepts
- **User Timing API**: A standard API for creating custom performance metrics.
- **Performance Profiling**: This allows you to add application-specific context to a performance profile.
`,

  // problem explanation--> 166
  "iocu-problem-166-conceptual": `
### 💡 Problem Breakdown
This conceptual problem dives into the \`Request\` and \`Response\` objects used by the Fetch API. Instead of just passing a URL string, you can create a full \`Request\` object to configure things like method, headers, and body. The \`fetch\` call then resolves with a \`Response\` object, which represents the server's response.

### ⚙️ Solution Walkthrough
Creating a \`Request\` object explicitly.
\`\`\`javascript
const myRequest = new Request('/api/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: 'hello' })
});

fetch(myRequest).then(response => {
  // 'response' is an instance of the Response class
  console.log(response.status); // e.g., 200
});
\`\`\`

### 📚 Key Concepts
- **Fetch API**: A modern, powerful, and flexible API for network requests.
- **\`Request\` and \`Response\` Objects**: The standard interfaces for representing HTTP requests and responses.
`,

  // problem explanation--> 167
  "iocu-problem-167-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explains CORS preflight requests. For certain "non-simple" cross-origin requests (e.g., a \`PUT\` or \`DELETE\` request, or a request with a custom header like \`Authorization\`), the browser first sends a "preflight" request using the \`OPTIONS\` HTTP method.

### ⚙️ Solution Walkthrough
The browser sends the \`OPTIONS\` request to the server to ask for permission. The server must respond with the correct CORS headers (like \`Access-Control-Allow-Methods\` and \`Access-Control-Allow-Headers\`) to indicate that the actual request is allowed. If the preflight is successful, the browser then sends the actual \`PUT\` or \`DELETE\` request. This is handled automatically by the browser.

### 📚 Key Concepts
- **CORS (Cross-Origin Resource Sharing)**: A browser security mechanism.
- **Preflight Request (\`OPTIONS\`)**: A preliminary check made by the browser for non-simple cross-origin requests.
`,

  // problem explanation--> 168
  "iocu-problem-168-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Cache API, a key part of Service Workers for creating offline-capable web applications. The Cache API provides a storage mechanism for \`Request\` / \`Response\` object pairs.

### ⚙️ Solution Walkthrough
A Service Worker can intercept a \`fetch\` event and serve a response from the cache.
\`\`\`javascript
// In a Service Worker
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return the cached response if found, otherwise fetch from network
      return cachedResponse || fetch(event.request);
    })
  );
});
\`\`\`

### 📚 Key Concepts
- **Cache API**: A promise-based API for storing and retrieving network requests and responses.
- **Service Workers**: The core technology for enabling Progressive Web Apps (PWAs) and offline functionality.
`,

  // problem explanation--> 169
  "iocu-problem-169-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Push API, which allows a web application to receive push notifications from a server, even when the application is not active in the browser.

### ⚙️ Solution Walkthrough
The process is complex and involves a Service Worker.
1. **Client**: The web app asks the user for permission.
2. **Subscription**: If permission is granted, it subscribes to a push service and gets a unique \`PushSubscription\` object.
3. **Server**: This subscription object is sent to the application's server and stored.
4. **Push Event**: When the server wants to send a notification, it sends a message to the push service endpoint from the subscription.
5. **Service Worker**: The browser receives the push message and wakes up the app's Service Worker, which listens for a \`'push'\` event and then displays a notification using the Notifications API.

### 📚 Key Concepts
- **Push API**: For receiving push messages from a server.
- **Service Workers**: Required to handle push events in the background.
`,

  // problem explanation--> 170
  "iocu-problem-170-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Background Sync API. This API allows a web app to defer an action (like sending data to a server) until the user has a stable internet connection.

### ⚙️ Solution Walkthrough
This API is also tied to Service Workers.
1. **Main Thread**: When the user is offline and tries to send a message, the app registers a "sync" event with the Service Worker.
2. **Service Worker**: The Service Worker listens for the \`'sync'\` event.
3. **Sync Event**: Once the browser detects that connectivity has returned, it fires the \`'sync'\` event in the Service Worker.
4. **Action**: The Service Worker's sync handler then performs the deferred action (e.g., sends the stored messages to the server).

### 📚 Key Concepts
- **Background Sync API**: A Web API for deferring actions until connectivity is restored.
- **Offline Capabilities**: A key feature of Progressive Web Apps (PWAs).
`,

  // problem explanation--> 171
  "iocu-problem-171-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a low-level API for handling binary data. When you have an \`ArrayBuffer\` (a raw chunk of memory), a \`DataView\` provides a flexible interface to read and write different types of numbers at any byte offset within the buffer.

### ⚙️ Solution Walkthrough
A \`DataView\` is used to read from a buffer.
\`\`\`javascript
const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);

// Write a 32-bit integer at the start of the buffer
view.setInt32(0, 1234567890);

// Read an 8-bit integer from the first byte
view.getInt8(0);
\`\`\`
A key feature of \`DataView\` is that it allows you to specify the "endianness" (byte order), which is crucial for working with network protocols and certain file formats.

### 📚 Key Concepts
- **Binary Data**: Working with raw bytes.
- **\`DataView\`**: A low-level API for reading and writing data in an \`ArrayBuffer\`.
`,

  // problem explanation--> 172
  "iocu-problem-172-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a key concept in binary data representation: **endianness**. Endianness refers to the order in which bytes are arranged to form a multi-byte number.
- **Big-endian**: The most significant byte is stored first (at the lowest memory address). This is common in network protocols.
- **Little-endian**: The least significant byte is stored first. This is common in modern computer architectures (like x86).

### ⚙️ Solution Walkthrough
The \`DataView\` API allows you to specify the endianness.
\`\`\`javascript
const buffer = new ArrayBuffer(2);
const view = new DataView(buffer);

// Write the number 258 (0x0102) in little-endian format
view.setInt16(0, 258, true); // buffer contains [0x02, 0x01]

// Write it in big-endian format
view.setInt16(0, 258, false); // buffer contains [0x01, 0x02]
\`\`\`

### 📚 Key Concepts
- **Endianness**: The byte order for multi-byte data types.
`,

  // problem explanation--> 173
  "iocu-problem-173-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers Base64, a binary-to-text encoding scheme. It's used to represent binary data (like an image) in an ASCII string format, which is useful for embedding binary data directly in text-based formats like HTML or CSS.

### ⚙️ Solution Walkthrough
In browsers, the global functions \`btoa()\` (binary-to-ASCII) and \`atob()\` (ASCII-to-binary) are used for this.
\`\`\`javascript
// In a browser environment
const binaryString = 'Hello';
const encoded = btoa(binaryString); // "SGVsbG8="

const decoded = atob(encoded); // "Hello"
\`\`\`
Note that these functions work with strings of single-byte characters. To encode arbitrary binary data, you must first convert it. In Node.js, the \`Buffer\` class has built-in methods for Base64 encoding.

### 📚 Key Concepts
- **Base64**: An encoding scheme to represent binary data in text.
`,

  // problem explanation--> 174
  "iocu-problem-174-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the modern, standard APIs for converting between strings and binary data in a specific character encoding, like UTF-8.
- **\`TextEncoder\`**: Takes a JavaScript string and returns a \`Uint8Array\` (an array of bytes) representing the string in UTF-8.
- **\`TextDecoder\`**: Takes a \`Uint8Array\` of UTF-8 bytes and returns a JavaScript string.

### ⚙️ Solution Walkthrough
\`\`\`javascript
// In a modern browser or Node.js environment
const encoder = new TextEncoder();
const decoder = new TextDecoder();

const text = "Hello 👋";
const utf8Bytes = encoder.encode(text);
const decodedText = decoder.decode(utf8Bytes);
\`\`\`
These APIs are the correct and robust way to handle character encoding conversions.

### 📚 Key Concepts
- **\`TextEncoder\` and \`TextDecoder\`**: The standard APIs for encoding/decoding text.
`,

  // problem explanation--> 175
  "iocu-problem-175-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`.slice()\` method of a \`Blob\` object. This method allows you to create a new \`Blob\` object containing a specific range of bytes from the original blob.

### ⚙️ Solution Walkthrough
Slicing a blob is useful for chunking a large file for upload.
\`\`\`javascript
// In a browser environment
const myBlob = new Blob(['This is a long text blob.']);

// Create a new blob containing bytes from index 5 to 11
const chunk = myBlob.slice(5, 12); // Creates a blob with content "is a lo"
\`\`\`

### 📚 Key Concepts
- **\`Blob.slice()\`**: A method for creating a new blob from a byte range of another.
`,

  // problem explanation--> 176
  "iocu-problem-176-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a key aspect of using Object URLs. An object URL, created with \`URL.createObjectURL()\`, is tied to the document in which it was created. It keeps the \`Blob\` or \`File\` data in memory. If you create many object URLs and do not release them, you can cause a memory leak.

### ⚙️ Solution Walkthrough
The \`URL.revokeObjectURL()\` method should be called when you are finished with an object URL.
\`\`\`javascript
// In a browser environment
const blob = new Blob(['data']);
const url = URL.createObjectURL(blob);

// Use the URL, for example:
// img.src = url;

// When the image has loaded or is no longer needed, revoke the URL.
// img.onload = () => {
//   URL.revokeObjectURL(url);
// };
\`\`\`

### 📚 Key Concepts
- **Memory Management**: Object URLs are a resource that must be explicitly managed to prevent memory leaks.
`,

  // problem explanation--> 177
  "iocu-problem-177-conceptual": `
### 💡 Problem Breakdown
This conceptual problem explores an advanced I/O topic. Parsing a very large JSON file by reading it all into memory and then calling \`JSON.parse()\` can be very memory-intensive. A **streaming JSON parser** is a library that can parse JSON from a stream of text chunks.

### ⚙️ Solution Walkthrough
Libraries like \`JSONStream\` or \`clarinet\` in Node.js provide Transform streams.
\`\`\`javascript
// Conceptual Node.js code with a streaming parser
fs.createReadStream('large.json')
  .pipe(JSONStream.parse('rows.*')) // Parse objects from a 'rows' array
  .on('data', (data) => {
    // This event fires for each parsed object
  });
\`\`\`
This allows you to process huge JSON files with very low memory overhead.

### 📚 Key Concepts
- **Streaming Parsing**: The practice of parsing data as it arrives in chunks.
`,

  // problem explanation--> 178
  "iocu-problem-178-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem comparing JSON with **MessagePack**. MessagePack is a binary serialization format. It's often described as "JSON, but fast and small."
- **JSON**: Text-based, human-readable.
- **MessagePack**: Binary-based, more compact and faster to parse/serialize for computers.

### ⚙️ Solution Walkthrough
You would use a library to encode/decode MessagePack data.
\`\`\`javascript
// Conceptual
const msgpack = require('msgpack-lite');
const obj = { a: 1, b: 'hello' };

const encoded = msgpack.encode(obj); // A Uint8Array
const decoded = msgpack.decode(encoded);
\`\`\`
MessagePack is a good choice for performance-critical applications or for reducing network bandwidth.

### 📚 Key Concepts
- **Binary Serialization**: A more compact and efficient alternative to text-based formats like JSON.
`,

  // problem explanation--> 179
  "iocu-problem-179-conceptual": `
### 💡 Problem Breakdown
This conceptual problem introduces **Protocol Buffers (Protobuf)**, another binary serialization format developed by Google. It's language-neutral and platform-neutral.
- **Key Feature**: You define the structure of your data in a \`.proto\` file (a schema).
- **Compiler**: A Protobuf compiler then generates code in your target language (e.g., JavaScript) to serialize and deserialize data according to that schema.

### ⚙️ Solution Walkthrough
This provides a very structured and efficient way to handle data, especially for communication between microservices written in different languages. The schema ensures that both the sender and receiver agree on the data's structure.

### 📚 Key Concepts
- **Schema-based Serialization**: A data format that uses a predefined schema, providing strong typing and efficiency.
`,

  // problem explanation--> 180
  "iocu-problem-180-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a deprecated but sometimes useful console feature. \`console.profile()\` and \`console.profileEnd()\` are methods that can be called from your code to programmatically start and stop a CPU profiling session in the browser's developer tools.

### ⚙️ Solution Walkthrough
A profile is started and stopped around an expensive function.
\`\`\`javascript
function doExpensiveWork() {
  console.profile("My Profile");
  // ... a lot of code ...
  console.profileEnd("My Profile");
}
\`\`\`
The modern approach is to start and stop profiling manually using the UI of the Performance panel.

### 📚 Key Concepts
- **Performance Profiling**: The process of analyzing code to find performance bottlenecks.
`,

  // problem explanation--> 181
  "iocu-problem-181-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Web Serial API. This API allows a web page to communicate with serial devices (like Arduinos, 3D printers, or industrial hardware) connected to the user's computer via a serial port (including USB).

### ⚙️ Solution Walkthrough
The API is promise-based and requires explicit user permission.
\`\`\`javascript
// Conceptual browser code
async function connectToSerial() {
  const port = await navigator.serial.requestPort();
  await port.open({ baudRate: 9600 });
  const reader = port.readable.getReader();
  const writer = port.writable.getWriter();
}
\`\`\`

### 📚 Key Concepts
- **Web Serial API**: An API for bridging the web and physical hardware via serial communication.
`,

  // problem explanation--> 182
  "iocu-problem-182-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the WebHID (Human Interface Device) API. It provides a way for web pages to interact with less common input devices that are not handled by the standard keyboard or mouse events, such as unique gamepads, joysticks, or specialized controllers.

### ⚙️ Solution Walkthrough
The API is promise-based and requires user permission.
\`\`\`javascript
// Conceptual browser code
async function connectToDevice() {
  const [device] = await navigator.hid.requestDevice({ filters: [] });
  await device.open();
  device.addEventListener('inputreport', event => { /* ... */ });
}
\`\`\`

### 📚 Key Concepts
- **WebHID API**: An API for interacting with a wide range of input devices.
`,

  // problem explanation--> 183
  "iocu-problem-183-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Web NFC (Near Field Communication) API. It allows a web application on a mobile device to read from and write to NFC tags when the device is in very close proximity.

### ⚙️ Solution Walkthrough
The API is promise-based.
\`\`\`javascript
// Conceptual browser code
async function readTag() {
  const reader = new NDEFReader();
  await reader.scan();
  reader.onreading = event => { /* ... */ };
}
\`\`\`

### 📚 Key Concepts
- **Web NFC API**: An API for interacting with NFC tags.
`,

  // problem explanation--> 184
  "iocu-problem-184-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a modern, powerful browser API. The File System Access API allows web applications to directly read, write, and manage files on the user's local file system, with their explicit permission.

### ⚙️ Solution Walkthrough
The API is promise-based and uses \`async/await\`.
\`\`\`javascript
// Conceptual browser code
async function openFile() {
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  const contents = await file.text();
}
\`\`\`
This enables more powerful, desktop-like applications to run in the browser.

### 📚 Key Concepts
- **File System Access API**: A modern API for direct file system interaction.
`,

  // problem explanation--> 185
  "iocu-problem-185-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`BroadcastChannel\` API. It provides a simple way for different browsing contexts (tabs, windows, iframes, workers) of the **same origin** to send and receive messages.

### ⚙️ Solution Walkthrough
A channel is created with the same name in different tabs.
\`\`\`javascript
// In Tab 1
const bc = new BroadcastChannel('app-channel');
bc.postMessage('User logged out');

// In Tab 2
const bc = new BroadcastChannel('app-channel');
bc.onmessage = (event) => { /* ... */ };
\`\`\`

### 📚 Key Concepts
- **BroadcastChannel**: A browser API for cross-context communication.
`,

  // problem explanation--> 186
  "iocu-problem-186-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the \`MessageChannel\` API. It provides a way to create a direct, two-way communication channel between two JavaScript contexts (like a main window and an iframe, or a window and a Web Worker).

### ⚙️ Solution Walkthrough
A channel is created and its ports are used for communication.
\`\`\`javascript
const channel = new MessageChannel();
const port1 = channel.port1;
const port2 = channel.port2;
// Send port2 to another context, then use port1 to communicate.
\`\`\`

### 📚 Key Concepts
- **\`MessageChannel\`**: A Web API for creating a direct communication channel.
`,

  // problem explanation--> 187
  "iocu-problem-187-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers \`SharedWorker\`. Unlike a regular Web Worker, a \`SharedWorker\` can be accessed by multiple browsing contexts (tabs, windows) from the same origin. It provides a single, shared background thread.

### ⚙️ Solution Walkthrough
Communication is handled through \`MessagePort\` objects.
\`\`\`javascript
// In main script
const worker = new SharedWorker('worker.js');
worker.port.start();
worker.port.postMessage('hello');

// In worker.js
onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = (event) => { /* ... */ };
};
\`\`\`

### 📚 Key Concepts
- **\`SharedWorker\`**: A worker that can be shared across multiple scripts.
`,

  // problem explanation--> 188
  "iocu-problem-188-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Web Locks API. It allows multiple tabs or workers to coordinate and prevent race conditions when accessing a shared resource, like IndexedDB.

### ⚙️ Solution Walkthrough
A lock is requested for a resource. The async callback runs only after the lock is acquired.
\`\`\`javascript
// Conceptual browser code
await navigator.locks.request('my-resource', async lock => {
  // Critical section
});
\`\`\`

### 📚 Key Concepts
- **Web Locks API**: A browser API for managing locks on resources to prevent race conditions.
`,

  // problem explanation--> 189
  "iocu-problem-189-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Reporting API. The \`ReportingObserver\` API provides a way to collect and access reports generated by the browser, such as deprecation warnings, CSP violations, or crash reports.

### ⚙️ Solution Walkthrough
An observer is created to listen for reports.
\`\`\`javascript
// Conceptual browser code
const observer = new ReportingObserver((reports, obs) => {
  for (const report of reports) {
    // Send report to a server
  }
}, { buffered: true });

observer.observe();
\`\`\`

### 📚 Key Concepts
- **Reporting API**: An API for collecting browser-generated reports.
`,

  // problem explanation--> 190
  "iocu-problem-190-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a specialized Web API. The Beacon API is designed for sending small amounts of data from a web page to a server **without expecting a response**. Its key feature is that the browser guarantees it will try to send the request, even if the page is being unloaded.

### ⚙️ Solution Walkthrough
It's a single, synchronous method call.
\`\`\`javascript
// Conceptual browser code
window.addEventListener('unload', () => {
  navigator.sendBeacon('/log', myAnalyticsData);
});
\`\`\`
This is ideal for sending analytics or logging data when a user navigates away.

### 📚 Key Concepts
- **Beacon API**: A Web API for reliable, non-blocking, one-way data transmission.
`,

  // problem explanation--> 191
  "iocu-problem-191-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a Firefox-specific console method. \`console.context()\` allows you to select a specific iframe or execution context in which subsequent console commands will be executed.

### 📚 Key Concepts
- **Execution Context**: A useful tool for debugging applications with multiple iframes.
`,

  // problem explanation--> 192
  "iocu-problem-192-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a non-standard but available property in some browser consoles. \`console.memory\` is a property that can be used to inspect the current heap size and memory usage of the page.

### 📚 Key Concepts
- **Memory Profiling**: A way to get a quick overview of memory usage.
`,

  // problem explanation--> 193
  "iocu-problem-193-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a Firefox-specific command line utility. The \`:screenshot\` command in the Firefox developer console allows you to take a screenshot of the current page or a specific element.

### 📚 Key Concepts
- **Developer Tools**: Advanced features for capturing and analyzing the UI.
`,

  // problem explanation--> 194
  "iocu-problem-194-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers the Browser Console Command Line API. In addition to \`console\` methods, the console provides special variables and functions:
- **\`$0\`**: A reference to the currently selected element in the Elements panel.
- **\`$_\`**: A reference to the result of the last expression evaluated in the console.
- **\`copy()\`**: A function to copy a string representation of an object to the clipboard.

### 📚 Key Concepts
- **Command Line API**: A set of convenience functions available in the browser console.
`,

  // problem explanation--> 195
  "iocu-problem-195-conceptual": `
### 💡 Problem Breakdown
This conceptual problem compares the two simple key-value storage APIs in the browser.
- **\`localStorage\`**: Persists data across browser sessions. The data remains until it is explicitly cleared.
- **\`sessionStorage\`**: Stores data only for the duration of the page session. The data is cleared when the tab is closed.

Both have the same synchronous API and a storage limit of around 5-10 MB.

### 📚 Key Concepts
- **Client-Side Storage**: Options for storing data in the browser.
`,

  // problem explanation--> 196
  "iocu-problem-196-conceptual": `
### 💡 Problem Breakdown
This conceptual problem covers a core concept of IndexedDB. All data operations in IndexedDB must happen within a **transaction**. A transaction ensures data integrity (atomicity). It groups a set of operations together. If any operation in the transaction fails, the entire transaction is aborted, and any changes are rolled back.

### 📚 Key Concepts
- **Transactions**: A fundamental concept in database management for ensuring data consistency.
`,

  // problem explanation--> 197
  "iocu-problem-197-conceptual": `
### 💡 Problem Breakdown
This conceptual problem compares the modern and legacy APIs for making network requests.
- **\`XMLHttpRequest\` (XHR)**: Older, event-based API. It's more verbose and less ergonomic.
- **\`fetch\`**: Modern, promise-based API. It has a cleaner, more composable syntax and integrates naturally with \`async/await\`.

For all new development, \`fetch\` is the standard and preferred choice.

### 📚 Key Concepts
- **AJAX**: The general term for asynchronous network requests from the browser.
`,

  // problem explanation--> 198
  "iocu-problem-198-conceptual": `
### 💡 Problem Breakdown
The original Node.js \`fs\` module is callback-based. Modern Node.js provides a promise-based version of the API, which allows for cleaner asynchronous code using \`async/await\`.

### ⚙️ Solution Walkthrough
The promise-based API is used to read a file.
\`\`\`javascript
// In a modern Node.js environment:
const fs = require('fs/promises');

async function readFile() {
  const data = await fs.readFile('path/to/file.txt', 'utf8');
  console.log(data);
}
\`\`\`
This avoids "callback hell" and allows for standard \`try...catch\` error handling.

### 📚 Key Concepts
- **Promisification**: The process of converting callback-based APIs into promise-based ones.
`,

  // problem explanation--> 199
  "iocu-problem-199-conceptual": `
### 💡 Problem Breakdown
This is a conceptual Node.js streams problem. The \`EPIPE\` ("broken pipe") error occurs on a writable stream when the readable end of the pipe has been closed. This commonly happens, for example, when you are piping the output of a command to another command like \`head\`, and the \`head\` command exits after it has received enough data. Your Node.js process must handle this error gracefully to avoid crashing.

### 📚 Key Concepts
- **Stream Error Handling**: A crucial part of working with Node.js streams.
`,

  // problem explanation--> 200
  "iocu-problem-200-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem comparing I/O models.
- **C-like Standard I/O**: Often uses synchronous, blocking functions like \`printf\` and \`scanf\`.
- **Node.js**: Emphasizes an asynchronous, non-blocking, event-driven model for I/O. Its standard I/O streams (\`process.stdin\`, \`process.stdout\`) are asynchronous streams that emit events. This allows a Node.js server to handle many concurrent I/O operations efficiently without being blocked.

### 📚 Key Concepts
- **I/O Models**: Different approaches to handling input and output.
- **Non-blocking I/O**: The foundation of Node.js's performance model.
`,
};
