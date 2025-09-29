import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "iocu-console-log-string",
    title: "Log a String",
    description: "Use `console.log()` to print a simple string to the console.",
    category: "Input/Output and Console Utilities",
    inputs: [
      {
        id: "message",
        label: "Message to log",
        type: "text",
        defaultValue: "Hello, Console!",
      },
    ],
    buttonText: "Log Message",
    difficulty: "Beginner",
  },
  // problem--> 02
  {
    id: "iocu-console-log-number",
    title: "Log a Number",
    description: "Use `console.log()` to print a number to the console.",
    category: "Input/Output and Console Utilities",
    inputs: [
      { id: "value", label: "Number to log", type: "number", defaultValue: 42 },
    ],
    buttonText: "Log Number",
    difficulty: "Beginner",
  },
  // problem--> 03
  {
    id: "iocu-console-log-multiple",
    title: "Log Multiple Arguments",
    description:
      "Pass multiple arguments to a single `console.log()` call to see how they are displayed.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Multiple",
    difficulty: "Beginner",
  },
  // problem--> 04
  {
    id: "iocu-console-log-object",
    title: "Log an Object",
    description:
      "Use `console.log()` to display an object. Observe how modern consoles make it interactive.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Object",
    difficulty: "Beginner",
  },
  // problem--> 05
  {
    id: "iocu-console-log-array",
    title: "Log an Array",
    description:
      "Use `console.log()` to display an array. Observe the interactive, expandable output.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Array",
    difficulty: "Beginner",
  },
  // problem--> 06
  {
    id: "iocu-console-error",
    title: "`console.error()`",
    description:
      "Use `console.error()` to log an error message. Note its distinct styling in the console.",
    category: "Input/Output and Console Utilities",
    inputs: [
      {
        id: "message",
        label: "Error message",
        type: "text",
        defaultValue: "Something went wrong!",
      },
    ],
    buttonText: "Log Error",
    difficulty: "Beginner",
  },
  // problem--> 07
  {
    id: "iocu-console-warn",
    title: "`console.warn()`",
    description:
      "Use `console.warn()` to log a warning message, which is also styled differently.",
    category: "Input/Output and Console Utilities",
    inputs: [
      {
        id: "message",
        label: "Warning message",
        type: "text",
        defaultValue: "This is a warning.",
      },
    ],
    buttonText: "Log Warning",
    difficulty: "Beginner",
  },
  // problem--> 08
  {
    id: "iocu-console-log-substitution-string",
    title: "Log with String Substitution",
    description:
      "Use the `%s` substitution string in `console.log()` to format a message with a string value.",
    category: "Input/Output and Console Utilities",
    inputs: [
      { id: "name", label: "Name", type: "text", defaultValue: "Alice" },
    ],
    buttonText: "Log Greeting",
    difficulty: "Intermediate",
  },
  // problem--> 09
  {
    id: "iocu-console-log-substitution-integer",
    title: "Log with Integer Substitution",
    description:
      "Use the `%i` or `%d` substitution string to format a message with an integer.",
    category: "Input/Output and Console Utilities",
    inputs: [{ id: "age", label: "Age", type: "number", defaultValue: 30 }],
    buttonText: "Log Age",
    difficulty: "Intermediate",
  },
  // problem--> 10
  {
    id: "iocu-console-log-substitution-float",
    title: "Log with Float Substitution",
    description:
      "Use the `%f` substitution string to format a message with a floating-point number.",
    category: "Input/Output and Console Utilities",
    inputs: [
      { id: "price", label: "Price", type: "number", defaultValue: 19.99 },
    ],
    buttonText: "Log Price",
    difficulty: "Intermediate",
  },
  // problem--> 11
  {
    id: "iocu-console-log-substitution-object",
    title: "Log with Object Substitution",
    description:
      "Use the `%o` or `%O` substitution string to format a message with an object, allowing for inspection.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log User Object",
    difficulty: "Intermediate",
  },
  // problem--> 12
  {
    id: "iocu-console-table-array-of-objects",
    title: "`console.table()` with Array of Objects",
    description:
      "Use `console.table()` to display an array of objects in a clean, tabular format.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Table",
    difficulty: "Intermediate",
  },
  // problem--> 13
  {
    id: "iocu-console-table-object",
    title: "`console.table()` with an Object",
    description:
      "Use `console.table()` to display a single object with its keys and values in a table.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Table",
    difficulty: "Intermediate",
  },
  // problem--> 14
  {
    id: "iocu-console-table-array",
    title: "`console.table()` with an Array",
    description:
      "Use `console.table()` to display a simple array with its indices and values.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Table",
    difficulty: "Intermediate",
  },
  // problem--> 15
  {
    id: "iocu-console-dir",
    title: "`console.dir()`",
    description:
      "Use `console.dir()` to display an interactive, expandable list of an object's properties.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log with `dir`",
    difficulty: "Intermediate",
  },
  // problem--> 16
  {
    id: "iocu-console-dirxml",
    title: "`console.dirxml()`",
    description:
      "Use `console.dirxml()` to display an interactive XML/HTML tree for a DOM element.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log DOM with `dirxml`",
    difficulty: "Intermediate",
  },
  // problem--> 17
  {
    id: "iocu-console-group",
    title: "`console.group()`",
    description:
      "Use `console.group()` and `console.groupEnd()` to create an indented, collapsible group of log messages.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Grouped Messages",
    difficulty: "Intermediate",
  },
  // problem--> 18
  {
    id: "iocu-console-group-collapsed",
    title: "`console.groupCollapsed()`",
    description:
      "Use `console.groupCollapsed()` to create a log group that starts in a collapsed state.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Collapsed Group",
    difficulty: "Intermediate",
  },
  // problem--> 19
  {
    id: "iocu-console-group-nested",
    title: "Nested Console Groups",
    description:
      "Demonstrate nesting `console.group()` to create a hierarchical log structure.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Nested Groups",
    difficulty: "Intermediate",
  },
  // problem--> 20
  {
    id: "iocu-console-time",
    title: "`console.time()` and `console.timeEnd()`",
    description:
      "Use `console.time()` and `console.timeEnd()` to measure the duration of an operation.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Measure Duration",
    difficulty: "Intermediate",
  },
  // problem--> 21
  {
    id: "iocu-console-time-with-label",
    title: "`console.time()` with a Label",
    description:
      "Use a label with `console.time()` and `console.timeEnd()` to manage multiple timers simultaneously.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Run Labeled Timers",
    difficulty: "Intermediate",
  },
  // problem--> 22
  {
    id: "iocu-console-time-log",
    title: "`console.timeLog()`",
    description:
      "Use `console.timeLog()` to log intermediate timestamps for a timer started with `console.time()`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log with Timestamps",
    difficulty: "Intermediate",
  },
  // problem--> 23
  {
    id: "iocu-console-assert",
    title: "`console.assert()`",
    description:
      "Use `console.assert()` to log an error message only if an assertion is false.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Run Assertion",
    difficulty: "Intermediate",
  },
  // problem--> 24
  {
    id: "iocu-console-count",
    title: "`console.count()`",
    description:
      "Use `console.count()` inside a loop to count how many times a piece of code is executed.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Run Counter",
    difficulty: "Intermediate",
  },
  // problem--> 25
  {
    id: "iocu-console-count-with-label",
    title: "`console.count()` with a Label",
    description:
      "Use `console.count()` with a specific label to manage multiple independent counters.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Run Labeled Counters",
    difficulty: "Intermediate",
  },
  // problem--> 26
  {
    id: "iocu-console-count-reset",
    title: "`console.countReset()`",
    description:
      "Use `console.countReset()` to reset a counter initialized with `console.count()`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Run and Reset Counter",
    difficulty: "Intermediate",
  },
  // problem--> 27
  {
    id: "iocu-console-trace",
    title: "`console.trace()`",
    description:
      "Use `console.trace()` to log a message along with a stack trace to the console.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Trace Function Call",
    difficulty: "Intermediate",
  },
  // problem--> 28
  {
    id: "iocu-console-clear",
    title: "`console.clear()`",
    description: "Use `console.clear()` to clear the browser console.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Clear Console",
    difficulty: "Beginner",
  },
  // problem--> 29
  {
    id: "iocu-console-info",
    title: "`console.info()`",
    description:
      "Use `console.info()` to log an informational message. It is often styled similarly to `console.log()`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Info",
    difficulty: "Beginner",
  },
  // problem--> 30
  {
    id: "iocu-console-debug",
    title: "`console.debug()`",
    description:
      "Use `console.debug()` for verbose logging that may be hidden by default in the browser console.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Debug Message",
    difficulty: "Beginner",
  },
  // problem--> 31
  {
    id: "iocu-pretty-print-object",
    title: "Pretty-Print an Object",
    description:
      "Use `JSON.stringify` with its formatting arguments to log a large object to the console in a human-readable format.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Pretty-Print",
    difficulty: "Intermediate",
  },
  // problem--> 32
  {
    id: "iocu-console-log-vs-dir",
    title: "`console.log` vs. `console.dir` on DOM Element",
    description:
      "Compare the output of `console.log` and `console.dir` when used on a DOM element to see the difference.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Compare `log` and `dir`",
    difficulty: "Intermediate",
  },
  // problem--> 33
  {
    id: "iocu-console-timestamp",
    title: "`console.timeStamp()` (Conceptual)",
    description:
      "Explain how `console.timeStamp()` adds a marker to the browser's performance timeline during a recording session.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Timestamp",
    difficulty: "Advanced",
  },
  // problem--> 34
  {
    id: "iocu-alert-basic",
    title: "Basic `alert()`",
    description:
      "Use the `alert()` function to display a simple modal dialog with a message.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Show Alert",
    difficulty: "Beginner",
  },
  // problem--> 35
  {
    id: "iocu-prompt-basic",
    title: "Basic `prompt()`",
    description:
      "Use the `prompt()` function to ask the user for input via a modal dialog.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Show Prompt",
    difficulty: "Beginner",
  },
  // problem--> 36
  {
    id: "iocu-confirm-basic",
    title: "Basic `confirm()`",
    description:
      "Use the `confirm()` function to ask the user a yes/no question and get a boolean result.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Show Confirm",
    difficulty: "Beginner",
  },
  // problem--> 37
  {
    id: "iocu-prompt-with-default",
    title: "`prompt()` with a Default Value",
    description:
      "Use the second argument of the `prompt()` function to provide a default value in the input field.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Show Prompt",
    difficulty: "Intermediate",
  },
  // problem--> 38
  {
    id: "iocu-alert-coercion",
    title: "`alert()` and Type Coercion",
    description:
      "Demonstrate that `alert()` coerces its argument to a string before displaying it.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Alert an Object",
    difficulty: "Intermediate",
  },
  // problem--> 39
  {
    id: "iocu-blocking-modals-conceptual",
    title: "Blocking Nature of Modals (Conceptual)",
    description:
      "Explain that `alert()`, `prompt()`, and `confirm()` are blocking and halt all other script execution until the user interacts with them.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 40
  {
    id: "iocu-custom-dialog-conceptual",
    title: "Custom Dialogs vs. Native Modals (Conceptual)",
    description:
      "Explain why modern web applications use custom, non-blocking dialogs (created with HTML/CSS/JS) instead of the native `alert`, `prompt`, and `confirm` functions.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 41
  {
    id: "iocu-browser-file-input-conceptual",
    title: "Browser File Input (Conceptual)",
    description:
      'Explain the purpose of the `<input type="file">` HTML element for allowing users to select local files.',
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Beginner",
  },
  // problem--> 42
  {
    id: "iocu-filereader-api-conceptual",
    title: "`FileReader` API (Conceptual)",
    description:
      "Explain the role of the `FileReader` API for asynchronously reading the contents of a `File` object selected by the user.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 43
  {
    id: "iocu-read-file-as-text-conceptual",
    title: "Read File as Text (Conceptual)",
    description:
      "Show the conceptual code for using `FileReader.readAsText()` to read the content of a text file.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Show Code",
    difficulty: "Intermediate",
  },
  // problem--> 44
  {
    id: "iocu-read-file-as-data-url-conceptual",
    title: "Read File as Data URL (Conceptual)",
    description:
      "Show the conceptual code for using `FileReader.readAsDataURL()` to display an image preview.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Show Code",
    difficulty: "Intermediate",
  },
  // problem--> 45
  {
    id: "iocu-read-file-as-arraybuffer-conceptual",
    title: "Read File as ArrayBuffer (Conceptual)",
    description:
      "Show the conceptual code for using `FileReader.readAsArrayBuffer()` to read a file as raw binary data.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Show Code",
    difficulty: "Advanced",
  },
  // problem--> 46
  {
    id: "iocu-filereader-events-conceptual",
    title: "`FileReader` Events (Conceptual)",
    description:
      "Explain the key events of a `FileReader` instance: `onload`, `onerror`, and `onprogress`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Events",
    difficulty: "Intermediate",
  },
  // problem--> 47
  {
    id: "iocu-create-and-download-file-conceptual",
    title: "Create and Download a File (Conceptual)",
    description:
      "Show the conceptual code for creating a file in the browser using a `Blob` and an object URL, and triggering a download.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Show Code",
    difficulty: "Advanced",
  },
  // problem--> 48
  {
    id: "iocu-blob-conceptual",
    title: "`Blob` Object (Conceptual)",
    description:
      "Explain what a `Blob` (Binary Large Object) is and its use in representing file-like data.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 49
  {
    id: "iocu-object-url-conceptual",
    title: "Object URLs (Conceptual)",
    description:
      "Explain what an object URL is and how `URL.createObjectURL()` can be used to create a temporary URL for a `Blob` or `File`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 50
  {
    id: "iocu-drag-and-drop-api-conceptual",
    title: "Drag and Drop API for Files (Conceptual)",
    description:
      "Explain the `dragover` and `drop` events and how to access dropped files from the `DataTransfer` object.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 51
  {
    id: "iocu-nodejs-stdout-conceptual",
    title: "Node.js: `process.stdout` (Conceptual)",
    description:
      "Explain how `process.stdout.write()` is the fundamental way to write to standard output in a Node.js environment, similar to `console.log()`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 52
  {
    id: "iocu-nodejs-stdin-conceptual",
    title: "Node.js: `process.stdin` (Conceptual)",
    description:
      "Explain how to listen for 'data' events on `process.stdin` to read input from the user in a command-line application.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 53
  {
    id: "iocu-nodejs-fs-readfile-async-conceptual",
    title: "Node.js: Asynchronous File Read (Conceptual)",
    description:
      "Show the conceptual code for reading a file asynchronously using `fs.readFile()` with a callback.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 54
  {
    id: "iocu-nodejs-fs-readfilesync-conceptual",
    title: "Node.js: Synchronous File Read (Conceptual)",
    description:
      "Show the conceptual code for reading a file synchronously using `fs.readFileSync()`, noting its blocking nature.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 55
  {
    id: "iocu-nodejs-fs-writefile-async-conceptual",
    title: "Node.js: Asynchronous File Write (Conceptual)",
    description:
      "Show the conceptual code for writing data to a file asynchronously using `fs.writeFile()`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 56
  {
    id: "iocu-nodejs-streams-conceptual",
    title: "Node.js: Streams (Conceptual)",
    description:
      "Explain the concept of streams in Node.js for handling large amounts of I/O data efficiently without buffering it all in memory.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 57
  {
    id: "iocu-nodejs-pipe-conceptual",
    title: "Node.js: Piping Streams (Conceptual)",
    description:
      "Explain the `.pipe()` method for connecting a readable stream to a writable stream, such as reading from a file and writing to the HTTP response.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 58
  {
    id: "iocu-nodejs-readline-conceptual",
    title: "Node.js: `readline` Module (Conceptual)",
    description:
      "Explain how the `readline` module can be used to read input from a readable stream (like a file or `process.stdin`) one line at a time.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 59
  {
    id: "iocu-nodejs-buffer-conceptual",
    title: "Node.js: `Buffer` (Conceptual)",
    description:
      "Explain what a `Buffer` is in Node.js and its role in handling raw binary data.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 60
  {
    id: "iocu-nodejs-fs-promises-conceptual",
    title: "Node.js: `fs/promises` API (Conceptual)",
    description:
      "Show the modern, promise-based version of the `fs` module for cleaner async file operations with `async/await`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 61
  {
    id: "iocu-console-log-css",
    title: "Styled Console Logging",
    description:
      "Use the `%c` substitution string to apply CSS styles to parts of a console log message.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Styled Message",
    difficulty: "Advanced",
  },
  // problem--> 62
  {
    id: "iocu-console-log-multiple-styles",
    title: "Multiple Styles in a Log",
    description:
      "Use multiple `%c` specifiers to apply different styles to different parts of a single log message.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Log Multi-Styled Message",
    difficulty: "Advanced",
  },
  // problem--> 63
  {
    id: "iocu-nodejs-transform-stream-conceptual",
    title: "Node.js: `Transform` Stream (Conceptual)",
    description:
      "Explain what a `Transform` stream is and its use in modifying or transforming data as it passes from a readable to a writable stream.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 64
  {
    id: "iocu-nodejs-zlib-stream-conceptual",
    title: "Node.js: Compression Stream (Conceptual)",
    description:
      "Show the conceptual code for using the `zlib` module to create a compression stream, piping a file read stream through it to a write stream.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 65
  {
    id: "iocu-fetch-response-blob-conceptual",
    title: "Fetch: `response.blob()` (Conceptual)",
    description:
      "Explain how to use `response.blob()` to handle a binary file (like an image) downloaded with `fetch`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 66
  {
    id: "iocu-fetch-response-text-conceptual",
    title: "Fetch: `response.text()` (Conceptual)",
    description:
      "Explain how to use `response.text()` to get the raw text content of a response, such as an HTML or CSV file.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 67
  {
    id: "iocu-nodejs-path-module-conceptual",
    title: "Node.js: `path` Module (Conceptual)",
    description:
      "Explain the purpose of the `path` module for working with file and directory paths in a cross-platform way.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 68
  {
    id: "iocu-nodejs-fs-stat-conceptual",
    title: "Node.js: Get File Information (Conceptual)",
    description:
      "Show how to use `fs.stat()` to get metadata about a file, such as its size and modification date.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 69
  {
    id: "iocu-nodejs-fs-readdir-conceptual",
    title: "Node.js: Read Directory Contents (Conceptual)",
    description:
      "Show how to use `fs.readdir()` to get an array of the names of files and subdirectories in a directory.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 70
  {
    id: "iocu-nodejs-fs-mkdir-conceptual",
    title: "Node.js: Create Directory (Conceptual)",
    description: "Show how to use `fs.mkdir()` to create a new directory.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 71
  {
    id: "iocu-nodejs-stream-backpressure-conceptual",
    title: "Node.js: Stream Backpressure (Conceptual)",
    description:
      "Explain the concept of backpressure in streams, where a writable stream signals to a readable stream to pause because it cannot process data fast enough.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 72
  {
    id: "iocu-nodejs-csv-parsing-conceptual",
    title: "Node.js: CSV Parsing with Streams (Conceptual)",
    description:
      "Explain how to parse a large CSV file efficiently by piping a file read stream through a CSV parsing transform stream.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 73
  {
    id: "iocu-clipboard-api-conceptual",
    title: "Async Clipboard API (Conceptual)",
    description:
      "Explain the modern, promise-based `navigator.clipboard` API for securely reading from and writing to the system clipboard.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 74
  {
    id: "iocu-beacon-api-conceptual",
    title: "Beacon API (Conceptual)",
    description:
      "Explain the purpose of the `navigator.sendBeacon()` API for sending small amounts of data to a server without expecting a response, useful for analytics on page unload.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 75
  {
    id: "iocu-character-encoding-conceptual",
    title: "Character Encodings (Conceptual)",
    description:
      "Explain the difference between character encodings like UTF-8 and ASCII and why it matters when reading files.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 76
  {
    id: "iocu-dataview-conceptual",
    title: "`DataView` for Binary Data (Conceptual)",
    description:
      "Explain how to use a `DataView` object to read and write multi-byte numbers with control over endianness from an `ArrayBuffer`.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 77
  {
    id: "iocu-nodejs-process-argv-conceptual",
    title: "Node.js: Command-Line Arguments (Conceptual)",
    description:
      "Explain how to access command-line arguments passed to a Node.js script via the `process.argv` array.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 78
  {
    id: "iocu-nodejs-http-request-conceptual",
    title: "Node.js: Making an HTTP Request (Conceptual)",
    description:
      "Show the conceptual code for making a simple GET request using the built-in `http` module in Node.js.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 79
  {
    id: "iocu-nodejs-http-server-conceptual",
    title: "Node.js: Creating an HTTP Server (Conceptual)",
    description:
      "Show the conceptual code for creating a basic HTTP server that listens for requests using the built-in `http` module.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 80
  {
    id: "iocu-xmlhttprequest-conceptual",
    title: "`XMLHttpRequest` (Conceptual)",
    description:
      "Explain the older, event-based `XMLHttpRequest` (XHR) API for making network requests and contrast it with the modern `fetch` API.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 81
  {
    id: "iocu-console-profile-conceptual",
    title: "`console.profile` (Conceptual)",
    description:
      "Explain the deprecated but sometimes useful `console.profile()` and `console.profileEnd()` methods for starting and stopping a CPU profile recording from code.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Profile",
    difficulty: "Advanced",
  },
  // problem--> 82
  {
    id: "iocu-performance-api-conceptual",
    title: "Performance API (Conceptual)",
    description:
      "Explain the `performance.mark()` and `performance.measure()` APIs as the modern, high-precision way to measure custom performance metrics.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Performance API",
    difficulty: "Advanced",
  },
  // problem--> 83
  {
    id: "iocu-indexeddb-conceptual",
    title: "IndexedDB I/O (Conceptual)",
    description:
      "Explain IndexedDB as a low-level browser API for client-side storage of significant amounts of structured data.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain IndexedDB",
    difficulty: "Advanced",
  },
  // problem--> 84
  {
    id: "iocu-localstorage-conceptual",
    title: "LocalStorage I/O (Conceptual)",
    description:
      "Explain the `localStorage` API for simple, synchronous, persistent key-value storage in the browser.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain localStorage",
    difficulty: "Intermediate",
  },
  // problem--> 85
  {
    id: "iocu-sessionstorage-conceptual",
    title: "SessionStorage I/O (Conceptual)",
    description:
      "Explain the `sessionStorage` API, which is similar to `localStorage` but clears when the page session ends.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain sessionStorage",
    difficulty: "Intermediate",
  },
  // problem--> 86
  {
    id: "iocu-websockets-conceptual",
    title: "WebSockets I/O (Conceptual)",
    description:
      "Explain the `WebSocket` API for creating a persistent, bidirectional, real-time communication channel between a client and server.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain WebSockets",
    difficulty: "Advanced",
  },
  // problem--> 87
  {
    id: "iocu-server-sent-events-conceptual",
    title: "Server-Sent Events (Conceptual)",
    description:
      "Explain the `EventSource` API for receiving a one-way stream of events from a server over a single HTTP connection.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain SSE",
    difficulty: "Advanced",
  },
  // problem--> 88
  {
    id: "iocu-web-rtc-conceptual",
    title: "WebRTC I/O (Conceptual)",
    description:
      "Explain WebRTC (Web Real-Time Communication) as a framework for peer-to-peer audio, video, and generic data communication directly between browsers.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain WebRTC",
    difficulty: "Advanced",
  },
  // problem--> 89
  {
    id: "iocu-media-devices-api-conceptual",
    title: "MediaDevices API (Conceptual)",
    description:
      "Explain the `navigator.mediaDevices.getUserMedia()` API for accessing user media input devices like cameras and microphones.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain getUserMedia",
    difficulty: "Advanced",
  },
  // problem--> 90
  {
    id: "iocu-web-audio-api-conceptual",
    title: "Web Audio API (Conceptual)",
    description:
      "Explain the Web Audio API for processing and synthesizing audio in web applications, including reading audio files and outputting sound.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Web Audio",
    difficulty: "Advanced",
  },
  // problem--> 91
  {
    id: "iocu-nodejs-child-process-conceptual",
    title: "Node.js: Child Process I/O (Conceptual)",
    description:
      "Explain how the `child_process` module in Node.js can be used to run external commands and communicate with their stdin/stdout/stderr streams.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Child Process",
    difficulty: "Advanced",
  },
  // problem--> 92
  {
    id: "iocu-nodejs-cluster-conceptual",
    title: "Node.js: Cluster Module I/O (Conceptual)",
    description:
      "Explain how the `cluster` module allows for creating child processes that share server ports, and how they communicate with the master process.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Cluster",
    difficulty: "Advanced",
  },
  // problem--> 93
  {
    id: "iocu-broadcast-channel-conceptual",
    title: "Broadcast Channel API (Conceptual)",
    description:
      "Explain the `BroadcastChannel` API for one-to-many communication between different browsing contexts (tabs, iframes) of the same origin.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain BroadcastChannel",
    difficulty: "Advanced",
  },
  // problem--> 94
  {
    id: "iocu-message-channel-conceptual",
    title: "Message Channel API (Conceptual)",
    description:
      "Explain the `MessageChannel` API for creating a direct, two-way communication channel between two JavaScript contexts.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain MessageChannel",
    difficulty: "Advanced",
  },
  // problem--> 95
  {
    id: "iocu-web-serial-api-conceptual",
    title: "Web Serial API (Conceptual)",
    description:
      "Explain the `navigator.serial` API for reading from and writing to serial devices connected to the user's computer.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Web Serial",
    difficulty: "Advanced",
  },
  // problem--> 96
  {
    id: "iocu-web-hid-api-conceptual",
    title: "WebHID API (Conceptual)",
    description:
      "Explain the WebHID (Human Interface Device) API for interacting with uncommon keyboards, gamepads, and other input devices.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain WebHID",
    difficulty: "Advanced",
  },
  // problem--> 97
  {
    id: "iocu-web-nfc-api-conceptual",
    title: "Web NFC API (Conceptual)",
    description:
      "Explain the Web NFC (Near Field Communication) API for reading from and writing to NFC tags from a web application.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Web NFC",
    difficulty: "Advanced",
  },
  // problem--> 98
  {
    id: "iocu-file-system-access-api-conceptual",
    title: "File System Access API (Conceptual)",
    description:
      "Explain the modern File System Access API that allows web apps to directly read, write, and manage files on the user's local device.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain FSA API",
    difficulty: "Advanced",
  },
  // problem--> 99
  {
    id: "iocu-structured-logging-conceptual",
    title: "Structured Logging (Conceptual)",
    description:
      "Explain the benefits of structured logging (e.g., logging JSON objects instead of plain strings) for easier parsing and analysis in production.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 100
  {
    id: "iocu-overriding-console-log-conceptual",
    title: "Overriding `console.log` (Conceptual)",
    description:
      "Explain how and why one might override `console.log` to send logs to a remote service or to add custom formatting.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 101
  {
    id: "iocu-problem-101-conceptual",
    title: "Advanced I/O Concept #101",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 102
  {
    id: "iocu-problem-102-conceptual",
    title: "Advanced I/O Concept #102",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 103
  {
    id: "iocu-problem-103-conceptual",
    title: "Advanced I/O Concept #103",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 104
  {
    id: "iocu-problem-104-conceptual",
    title: "Advanced I/O Concept #104",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 105
  {
    id: "iocu-problem-105-conceptual",
    title: "Advanced I/O Concept #105",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 106
  {
    id: "iocu-problem-106-conceptual",
    title: "Advanced I/O Concept #106",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 107
  {
    id: "iocu-problem-107-conceptual",
    title: "Advanced I/O Concept #107",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 108
  {
    id: "iocu-problem-108-conceptual",
    title: "Advanced I/O Concept #108",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 109
  {
    id: "iocu-problem-109-conceptual",
    title: "Advanced I/O Concept #109",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 110
  {
    id: "iocu-problem-110-conceptual",
    title: "Advanced I/O Concept #110",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 111
  {
    id: "iocu-problem-111-conceptual",
    title: "Advanced I/O Concept #111",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 112
  {
    id: "iocu-problem-112-conceptual",
    title: "Advanced I/O Concept #112",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 113
  {
    id: "iocu-problem-113-conceptual",
    title: "Advanced I/O Concept #113",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 114
  {
    id: "iocu-problem-114-conceptual",
    title: "Advanced I/O Concept #114",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 115
  {
    id: "iocu-problem-115-conceptual",
    title: "Advanced I/O Concept #115",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 116
  {
    id: "iocu-problem-116-conceptual",
    title: "Advanced I/O Concept #116",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 117
  {
    id: "iocu-problem-117-conceptual",
    title: "Advanced I/O Concept #117",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 118
  {
    id: "iocu-problem-118-conceptual",
    title: "Advanced I/O Concept #118",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 119
  {
    id: "iocu-problem-119-conceptual",
    title: "Advanced I/O Concept #119",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 120
  {
    id: "iocu-problem-120-conceptual",
    title: "Advanced I/O Concept #120",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 121
  {
    id: "iocu-problem-121-conceptual",
    title: "Advanced I/O Concept #121",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 122
  {
    id: "iocu-problem-122-conceptual",
    title: "Advanced I/O Concept #122",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 123
  {
    id: "iocu-problem-123-conceptual",
    title: "Advanced I/O Concept #123",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 124
  {
    id: "iocu-problem-124-conceptual",
    title: "Advanced I/O Concept #124",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 125
  {
    id: "iocu-problem-125-conceptual",
    title: "Advanced I/O Concept #125",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 126
  {
    id: "iocu-problem-126-conceptual",
    title: "Advanced I/O Concept #126",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 127
  {
    id: "iocu-problem-127-conceptual",
    title: "Advanced I/O Concept #127",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 128
  {
    id: "iocu-problem-128-conceptual",
    title: "Advanced I/O Concept #128",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 129
  {
    id: "iocu-problem-129-conceptual",
    title: "Advanced I/O Concept #129",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 130
  {
    id: "iocu-problem-130-conceptual",
    title: "Advanced I/O Concept #130",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 131
  {
    id: "iocu-problem-131-conceptual",
    title: "Advanced I/O Concept #131",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 132
  {
    id: "iocu-problem-132-conceptual",
    title: "Advanced I/O Concept #132",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 133
  {
    id: "iocu-problem-133-conceptual",
    title: "Advanced I/O Concept #133",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 134
  {
    id: "iocu-problem-134-conceptual",
    title: "Advanced I/O Concept #134",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 135
  {
    id: "iocu-problem-135-conceptual",
    title: "Advanced I/O Concept #135",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 136
  {
    id: "iocu-problem-136-conceptual",
    title: "Advanced I/O Concept #136",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 137
  {
    id: "iocu-problem-137-conceptual",
    title: "Advanced I/O Concept #137",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 138
  {
    id: "iocu-problem-138-conceptual",
    title: "Advanced I/O Concept #138",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 139
  {
    id: "iocu-problem-139-conceptual",
    title: "Advanced I/O Concept #139",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 140
  {
    id: "iocu-problem-140-conceptual",
    title: "Advanced I/O Concept #140",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 141
  {
    id: "iocu-problem-141-conceptual",
    title: "Advanced I/O Concept #141",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 142
  {
    id: "iocu-problem-142-conceptual",
    title: "Advanced I/O Concept #142",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 143
  {
    id: "iocu-problem-143-conceptual",
    title: "Advanced I/O Concept #143",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 144
  {
    id: "iocu-problem-144-conceptual",
    title: "Advanced I/O Concept #144",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 145
  {
    id: "iocu-problem-145-conceptual",
    title: "Advanced I/O Concept #145",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 146
  {
    id: "iocu-problem-146-conceptual",
    title: "Advanced I/O Concept #146",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 147
  {
    id: "iocu-problem-147-conceptual",
    title: "Advanced I/O Concept #147",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 148
  {
    id: "iocu-problem-148-conceptual",
    title: "Advanced I/O Concept #148",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 149
  {
    id: "iocu-problem-149-conceptual",
    title: "Advanced I/O Concept #149",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 150
  {
    id: "iocu-problem-150-conceptual",
    title: "Advanced I/O Concept #150",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 151
  {
    id: "iocu-problem-151-conceptual",
    title: "Advanced I/O Concept #151",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 152
  {
    id: "iocu-problem-152-conceptual",
    title: "Advanced I/O Concept #152",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 153
  {
    id: "iocu-problem-153-conceptual",
    title: "Advanced I/O Concept #153",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 154
  {
    id: "iocu-problem-154-conceptual",
    title: "Advanced I/O Concept #154",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 155
  {
    id: "iocu-problem-155-conceptual",
    title: "Advanced I/O Concept #155",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 156
  {
    id: "iocu-problem-156-conceptual",
    title: "Advanced I/O Concept #156",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 157
  {
    id: "iocu-problem-157-conceptual",
    title: "Advanced I/O Concept #157",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 158
  {
    id: "iocu-problem-158-conceptual",
    title: "Advanced I/O Concept #158",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 159
  {
    id: "iocu-problem-159-conceptual",
    title: "Advanced I/O Concept #159",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 160
  {
    id: "iocu-problem-160-conceptual",
    title: "Advanced I/O Concept #160",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 161
  {
    id: "iocu-problem-161-conceptual",
    title: "Advanced I/O Concept #161",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 162
  {
    id: "iocu-problem-162-conceptual",
    title: "Advanced I/O Concept #162",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 163
  {
    id: "iocu-problem-163-conceptual",
    title: "Advanced I/O Concept #163",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 164
  {
    id: "iocu-problem-164-conceptual",
    title: "Advanced I/O Concept #164",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 165
  {
    id: "iocu-problem-165-conceptual",
    title: "Advanced I/O Concept #165",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 166
  {
    id: "iocu-problem-166-conceptual",
    title: "Advanced I/O Concept #166",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 167
  {
    id: "iocu-problem-167-conceptual",
    title: "Advanced I/O Concept #167",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 168
  {
    id: "iocu-problem-168-conceptual",
    title: "Advanced I/O Concept #168",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 169
  {
    id: "iocu-problem-169-conceptual",
    title: "Advanced I/O Concept #169",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 170
  {
    id: "iocu-problem-170-conceptual",
    title: "Advanced I/O Concept #170",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 171
  {
    id: "iocu-problem-171-conceptual",
    title: "Advanced I/O Concept #171",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 172
  {
    id: "iocu-problem-172-conceptual",
    title: "Advanced I/O Concept #172",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 173
  {
    id: "iocu-problem-173-conceptual",
    title: "Advanced I/O Concept #173",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 174
  {
    id: "iocu-problem-174-conceptual",
    title: "Advanced I/O Concept #174",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 175
  {
    id: "iocu-problem-175-conceptual",
    title: "Advanced I/O Concept #175",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 176
  {
    id: "iocu-problem-176-conceptual",
    title: "Advanced I/O Concept #176",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 177
  {
    id: "iocu-problem-177-conceptual",
    title: "Advanced I/O Concept #177",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 178
  {
    id: "iocu-problem-178-conceptual",
    title: "Advanced I/O Concept #178",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 179
  {
    id: "iocu-problem-179-conceptual",
    title: "Advanced I/O Concept #179",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 180
  {
    id: "iocu-problem-180-conceptual",
    title: "Advanced I/O Concept #180",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 181
  {
    id: "iocu-problem-181-conceptual",
    title: "Advanced I/O Concept #181",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 182
  {
    id: "iocu-problem-182-conceptual",
    title: "Advanced I/O Concept #182",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 183
  {
    id: "iocu-problem-183-conceptual",
    title: "Advanced I/O Concept #183",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 184
  {
    id: "iocu-problem-184-conceptual",
    title: "Advanced I/O Concept #184",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 185
  {
    id: "iocu-problem-185-conceptual",
    title: "Advanced I/O Concept #185",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 186
  {
    id: "iocu-problem-186-conceptual",
    title: "Advanced I/O Concept #186",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 187
  {
    id: "iocu-problem-187-conceptual",
    title: "Advanced I/O Concept #187",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 188
  {
    id: "iocu-problem-188-conceptual",
    title: "Advanced I/O Concept #188",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 189
  {
    id: "iocu-problem-189-conceptual",
    title: "Advanced I/O Concept #189",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 190
  {
    id: "iocu-problem-190-conceptual",
    title: "Advanced I/O Concept #190",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 191
  {
    id: "iocu-problem-191-conceptual",
    title: "Advanced I/O Concept #191",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 192
  {
    id: "iocu-problem-192-conceptual",
    title: "Advanced I/O Concept #192",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 193
  {
    id: "iocu-problem-193-conceptual",
    title: "Advanced I/O Concept #193",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 194
  {
    id: "iocu-problem-194-conceptual",
    title: "Advanced I/O Concept #194",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 195
  {
    id: "iocu-problem-195-conceptual",
    title: "Advanced I/O Concept #195",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 196
  {
    id: "iocu-problem-196-conceptual",
    title: "Advanced I/O Concept #196",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 197
  {
    id: "iocu-problem-197-conceptual",
    title: "Advanced I/O Concept #197",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 198
  {
    id: "iocu-problem-198-conceptual",
    title: "Advanced I/O Concept #198",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 199
  {
    id: "iocu-problem-199-conceptual",
    title: "Advanced I/O Concept #199",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
  // problem--> 200
  {
    id: "iocu-problem-200-conceptual",
    title: "Advanced I/O Concept #200",
    description:
      "This problem explores an advanced or niche I/O or console utility concept, building upon fundamentals. A full implementation would detail a specific real-world scenario such as real-time data streaming, advanced browser APIs, or complex Node.js I/O patterns.",
    category: "Input/Output and Console Utilities",
    inputs: [],
    buttonText: "Explain Concept",
    difficulty: "Advanced",
  },
];
