export const explanations: Record<string, string> = {
  "node-global-process": `
### 💡 Problem Breakdown
This is a conceptual problem about the Node.js runtime environment. Unlike browsers, which have a \`window\` global object, Node.js provides a global object named \`process\`. This object gives you information about and control over the current Node.js process. The task is to understand its key properties.

### ⚙️ Solution Walkthrough
The \`process\` object is available globally in any Node.js script.
\`\`\`javascript
// Accessing command-line arguments
// If you run: node my-script.js user=alice mode=test
console.log(process.argv);
// Output: ['/path/to/node', '/path/to/my-script.js', 'user=alice', 'mode=test']

// Accessing environment variables
// If you run: API_KEY=123 node my-script.js
console.log(process.env.API_KEY); // "123"

// Exit the process
process.exit(0); // 0 indicates a successful exit
\`\`\`
1.  **\`process.argv\`**: An array containing the command-line arguments passed when the Node.js process was launched.
2.  **\`process.env\`**: An object containing the user environment variables. This is the standard way to pass configuration (like API keys) to a Node.js application.

### 📚 Key Concepts
-   **Node.js Runtime**: The environment in which server-side JavaScript code is executed.
-   **Global Objects**: Objects that are available in all modules without needing to be imported.
`,
  "node-commonjs-modules": `
### 💡 Problem Breakdown
This is a conceptual problem about the module system used in Node.js. By default, Node.js uses the **CommonJS** module system. The goal is to understand the basic syntax for creating a module and using it in another file.

### ⚙️ Solution Walkthrough
The system relies on the \`module.exports\` object and the \`require()\` function.

**File 1: \`math.js\` (The Module)**
\`\`\`javascript
const add = (a, b) => a + b;
// Add a property to the module.exports object
module.exports.add = add;
\`\`\`

**File 2: \`main.js\` (The Consumer)**
\`\`\`javascript
// Use require() to import the module's exports
const math = require('./math.js');
console.log(math.add(2, 3));    // 5
\`\`\`
1.  **\`module.exports\`**: An object, initially empty, that is present in every CommonJS module. Whatever you assign to this object is what will be exported.
2.  **\`require('./math.js')\`**: A built-in function that takes a module path, executes the module's code once, and returns its \`module.exports\` object.

### 📚 Key Concepts
-   **CommonJS (CJS)**: The synchronous module system that is the traditional standard in Node.js.
-   **\`require\`**: The function used to import modules.
-   **\`module.exports\`**: The object a module makes available to other modules.
`,
  "node-fs-readfile": `
### 💡 Problem Breakdown
A key capability of a backend environment like Node.js is interacting with the server's file system. The task is to understand the basic conceptual code for reading a file's content using Node's built-in \`fs\` (File System) module.

### ⚙️ Solution Walkthrough
The solution shows the standard asynchronous, callback-based pattern for reading a file.
\`\`\`javascript
const fs = require('fs');

fs.readFile('/path/to/my-file.txt', 'utf8', (err, data) => {
  // 1. Check for an error first
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  
  // 2. If no error, process the data
  console.log("File content:", data);
});
\`\`\`
1.  **\`fs.readFile(...)\`**: This is the asynchronous function to read a file. It does not block the event loop.
2.  **"Error-First" Callback**: The callback function's first argument is always an \`err\` object. If the operation was successful, \`err\` will be \`null\`. This is a crucial convention to check for.

### 📚 Key Concepts
-   **\`fs\` Module**: Node.js's built-in module for all file system operations.
-   **Asynchronous I/O**: Node.js starts the operation and executes the callback when it's done, keeping the server responsive.
-   **Error-First Callback**: A standard convention in Node.js for asynchronous functions.
`,
  "node-fs-writefile": `
### 💡 Problem Breakdown
The counterpart to reading files is writing them. The task is to understand the basic code for writing content to a file using the asynchronous \`fs.writeFile\` method.

### ⚙️ Solution Walkthrough
The \`fs.writeFile\` function takes the file path, the content to write, and an optional callback that runs after the write operation is complete.
\`\`\`javascript
const fs = require('fs');

const content = 'This is the content to be written.';
fs.writeFile('/path/to/new-file.txt', content, 'utf8', (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log('The file has been successfully saved!');
});
\`\`\`
1.  **\`fs.writeFile(...)\`**: This function will create the file if it does not exist, or completely overwrite it if it does.
2.  **Asynchronous**: This operation is non-blocking. The script continues while the file is being written to disk.
3.  **Callback**: The callback receives only an \`err\` argument, as there is no data to return on a successful write.

### 📚 Key Concepts
-   **File System I/O**: A fundamental capability of a backend environment.
`,
  "node-http-server": `
### 💡 Problem Breakdown
The most fundamental task for a backend is to listen for and respond to network requests. Node.js has a powerful built-in \`http\` module that allows you to create an HTTP server with very little code. This problem shows the conceptual "hello world" of creating a basic server.

### ⚙️ Solution Walkthrough
The solution uses the \`http.createServer()\` method.
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // This callback runs for every incoming request
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running...');
});
\`\`\`
1.  **Request Listener**: The callback function passed to \`createServer\` receives two important objects: \`req\` (Request) and \`res\` (Response).
2.  **\`server.listen(...)\`**: This method tells the server to start listening for incoming connections on a specific network port and hostname.

### 📚 Key Concepts
-   **\`http\` Module**: Node.js's built-in module for creating HTTP servers and clients.
-   **Request/Response Cycle**: The fundamental model of client-server communication.
`,
  "node-event-emitter": `
### 💡 Problem Breakdown
The Node.js \`events\` module provides an \`EventEmitter\` class, which is a cornerstone of asynchronous event-driven architecture in Node.js. It allows you to create objects that can emit named events and have other parts of the application listen for those events.

### ⚙️ Solution Walkthrough
1.  Create an instance of \`EventEmitter\`.
2.  Use the \`.on(eventName, listener)\` method to subscribe to an event.
3.  Use the \`.emit(eventName, ...args)\` method to trigger the event and pass data to the listeners.
\`\`\`javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('myEvent', (data) => {
  console.log('An event occurred!', data);
});

myEmitter.emit('myEvent', { id: 1, message: 'hello' });
\`\`\`
### 📚 Key Concepts
- **Event-Driven Architecture**: A programming paradigm where the flow of the program is determined by events.
- **Observer Pattern**: The \`EventEmitter\` is an implementation of the Observer design pattern.
`,
  "node-path-module": `
### 💡 Problem Breakdown
The \`path\` module is a core Node.js utility for handling and transforming file paths. It's crucial because different operating systems use different path delimiters (\`/\` for Linux/macOS, \`\\\\\` for Windows). The \`path\` module provides a cross-platform way to work with paths.

### ⚙️ Solution Walkthrough
The module provides several useful methods.
\`\`\`javascript
const path = require('path');

// Joins path segments together using the platform-specific separator
const fullPath = path.join('/users', 'test', 'files', '..', 'data.txt');
// Result: '/users/test/data.txt' (it also normalizes the path)

// Gets the extension of a file
const ext = path.extname(fullPath); // ".txt"
\`\`\`
### 📚 Key Concepts
- **Cross-Platform Compatibility**: Writing code that works correctly on different operating systems.
- **Path Manipulation**: A common requirement in backend applications that deal with files.
`,
  "node-event-loop-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the Node.js Event Loop, which is what allows Node.js to perform non-blocking I/O operations despite being single-threaded. It's more complex than the browser's loop.

### ⚙️ Solution Walkthrough
The Node.js loop proceeds through a series of distinct phases in a cycle:
1.  **Timers**: Executes callbacks for \`setTimeout()\` and \`setInterval()\`.
2.  **Pending Callbacks**: Executes I/O callbacks that were deferred to the next loop iteration.
3.  **Poll**: Retrieves new I/O events; executes most I/O-related callbacks here. The loop may block here if there's nothing else to do.
4.  **Check**: Executes callbacks for \`setImmediate()\`.
5.  **Close Callbacks**: Executes close event handlers (e.g., \`socket.on('close', ...)\`).

**Microtasks** (from \`process.nextTick\` and Promises) are executed in between each of these phases, and also between each callback within a phase.

### 📚 Key Concepts
- **Event Loop**: The core mechanism that powers Node.js's asynchronous, non-blocking architecture.
`,
  "node-fs-promises": `
### 💡 Problem Breakdown
While the callback-based \`fs\` module is classic, modern Node.js provides a promise-based version that is much cleaner to use with \`async/await\`.

### ⚙️ Solution Walkthrough
The \`fs/promises\` module is imported, and its methods are used with \`async/await\` and \`try...catch\` for error handling.
\`\`\`javascript
const fs = require('fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('/path/to/file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}
\`\`\`
This avoids the nesting of callbacks and provides a more linear, readable code structure.

### 📚 Key Concepts
- **Promises**: The modern standard for handling asynchronous operations in JavaScript.
`,
  "node-streams-conceptual": `
### 💡 Problem Breakdown
Streams are one of the most powerful concepts in Node.js. They are objects that let you read data from a source or write data to a destination in a continuous fashion, in small chunks. This is extremely memory-efficient for handling large files or network data.

### ⚙️ Solution Walkthrough
The most common way to use streams is with the \`.pipe()\` method, which takes the output of a readable stream and connects it to the input of a writable stream.
\`\`\`javascript
const fs = require('fs');
const zlib = require('zlib');

// Create a readable stream from a large file
const readStream = fs.createReadStream('large-file.txt');

// Create a transform stream to compress the data
const gzip = zlib.createGzip();

// Create a writable stream to a new file
const writeStream = fs.createWriteStream('large-file.txt.gz');

// Pipe the streams together
readStream.pipe(gzip).pipe(writeStream);
\`\`\`
This pipeline reads, compresses, and writes the large file using a very small, constant amount of memory.

### 📚 Key Concepts
- **Streams**: A fundamental concept for efficient data handling in Node.js.
- **Piping**: The mechanism for connecting streams together to form a data processing pipeline.
`,
  "node-buffers-conceptual": `
### 💡 Problem Breakdown
A \`Buffer\` is a Node.js-specific class for handling raw binary data. JavaScript's strings are not well-suited for this, as they are typically UTF-8 encoded. Buffers are essential when dealing with TCP streams, file system operations, or other contexts where you need to work with binary data.

### ⚙️ Solution Walkthrough
A buffer can be created from a string.
\`\`\`javascript
// Create a buffer from a string with a specific encoding
const buf = Buffer.from('Hello, World!', 'utf8');

console.log(buf); // <Buffer 48 65 6c 6c 6f ... >
console.log(buf.toString()); // "Hello, World!"
console.log(buf.length); // 13 (bytes, not characters)
\`\`\`
Buffers are essentially arrays of integers (bytes) and can be manipulated at a low level. They are a key part of the I/O operations in Node.js.

### 📚 Key Concepts
- **Buffer**: A data structure for handling binary data in Node.js.
`,
  "node-dirname-filename": `
### 💡 Problem Breakdown
This is a conceptual problem about two special, module-local variables available in the **CommonJS** module system.
- **\`\_\_filename\`**: A string containing the absolute path of the currently executing script file.
- **\`\_\_dirname\`**: A string containing the absolute path of the directory that the currently executing script file is in.

### ⚙️ Solution Walkthrough
In a script located at \`/Users/me/project/src/app.js\`:
-   \`console.log(__filename);\` would output \`/Users/me/project/src/app.js\`.
-   \`console.log(__dirname);\` would output \`/Users/me/project/src\`.

These are extremely useful for creating paths to other files relative to the current script's location, e.g., \`path.join(__dirname, 'templates')\`.

**Note**: These are not available in native ES Modules. The equivalent is to use \`import.meta.url\`.

### 📚 Key Concepts
- **Module Context**: These variables are part of the wrapper function that CommonJS uses to provide a module-local scope.
`,
  "node-os-module": `
### 💡 Problem Breakdown
The \`os\` module is a built-in Node.js module that provides operating system-related utility methods and properties.

### ⚙️ Solution Walkthrough
The module is required and its methods are called.
\`\`\`javascript
const os = require('os');

console.log('OS Platform:', os.platform()); // e.g., 'darwin', 'win32', 'linux'
console.log('CPU Architecture:', os.arch()); // e.g., 'x64', 'arm64'
console.log('Number of CPUs:', os.cpus().length);
console.log('Home Directory:', os.homedir());
\`\`\`
### 📚 Key Concepts
- **\`os\` Module**: A core module for getting information about the host operating system.
`,
  "node-http-request-conceptual": `
### 💡 Problem Breakdown
This shows the "native" way to make an HTTP GET request in Node.js using the built-in \`http\` or \`https\` module. While modern code often uses libraries like \`axios\` or \`node-fetch\`, understanding the built-in module is important.

### ⚙️ Solution Walkthrough
The API is event-driven. \`https.get\` returns a request object, and you listen for events on the response object.
\`\`\`javascript
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
\`\`\`
### 📚 Key Concepts
- **Event-Driven API**: The response is handled as a stream of 'data' events.
`,
  "node-express-hello-world-conceptual": `
### 💡 Problem Breakdown
Express.js is the most popular web framework for Node.js. It provides a minimal and flexible set of features for building web applications and APIs, simplifying tasks like routing and middleware. This is the "Hello World" of Express.

### ⚙️ Solution Walkthrough
1.  Require the \`express\` module.
2.  Create an \`app\` instance.
3.  Define a route handler for GET requests to the root path (\`/\`).
4.  Tell the app to listen on a specific port.
\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Example app listening on port \${port}\`);
});
\`\`\`
### 📚 Key Concepts
- **Express.js**: A minimalist web framework for Node.js.
- **Routing**: The process of determining how an application responds to a client request to a particular endpoint (a URI and a specific HTTP request method).
`,
  "node-express-routing-conceptual": `
### 💡 Problem Breakdown
Routing in Express.js allows you to map incoming requests to specific handler functions. This example shows how to define a route that captures a dynamic "path parameter."

### ⚙️ Solution Walkthrough
A route is defined for \`/users/:id\`. The \`:id\` part is a placeholder for a dynamic value.
\`\`\`javascript
// GET /users/123
app.get('/users/:id', (req, res) => {
  // Express parses the ID from the URL and puts it in req.params
  const userId = req.params.id;
  res.send(\`Fetching user with ID: \${userId}\`);
});
\`\`\`
1.  **\`app.get(path, handler)\`**: Defines a handler for GET requests to a specific path.
2.  **Route Parameters**: The colon (\`:\`) in the path signifies a parameter.
3.  **\`req.params\`**: An object containing the parsed route parameters.

### 📚 Key Concepts
- **Route Parameters**: A way to capture dynamic segments of a URL.
`,
  "node-express-middleware-conceptual": `
### 💡 Problem Breakdown
Middleware functions are the heart of Express.js. They are functions that have access to the request object (\`req\`), the response object (\`res\`), and the \`next\` function in the application's request-response cycle. They can execute any code, make changes to the request and response objects, and end the cycle or pass control to the next middleware.

### ⚙️ Solution Walkthrough
A simple logger middleware is shown.
\`\`\`javascript
const myLogger = (req, res, next) => {
  console.log(\`[LOG] \${req.method} \${req.url}\`);
  // Pass control to the next middleware in the stack
  next(); 
};

// Use the middleware for all requests
app.use(myLogger);
\`\`\`
1.  **Function Signature**: Middleware takes \`(\`req, res, next\`)\`.
2.  **\`next()\`**: This is the crucial part. Calling \`next()\` passes control to the next middleware function. If you don't call \`next()\`, the request will be left hanging.

### 📚 Key Concepts
- **Middleware**: Functions that execute sequentially during the request-response cycle. They are used for logging, authentication, parsing request bodies, error handling, and more.
`,
  "node-async-patterns-callback": `
### 💡 Problem Breakdown
This problem demonstrates the classic "error-first" callback pattern, which was the standard for all asynchronous operations in Node.js before Promises became widespread.

### ⚙️ Solution Walkthrough
A function takes a callback as its last argument. When the async operation is done, it calls the callback.
\`\`\`javascript
function asyncOperation(callback) {
  // Simulate an async operation
  setTimeout(() => {
    const err = null; // No error occurred
    const data = "Success!";
    callback(err, data);
  }, 100);
}

// Usage
asyncOperation((err, data) => {
  // The first thing you do is check for an error.
  if (err) {
    console.error(err);
    return;
  }
  // If no error, process the data.
  console.log(data);
});
\`\`\`
### 📚 Key Concepts
-   **Error-First Callback**: A convention where the first argument to a callback is reserved for an error object.
`,
  "node-async-patterns-promises": `
### 💡 Problem Breakdown
This shows the modern approach to asynchronous operations in Node.js. Functions are designed to return a \`Promise\`, which can then be consumed with \`.then().catch()\` or, more commonly, with \`async/await\`.

### ⚙️ Solution Walkthrough
A function is written to return a promise.
\`\`\`javascript
function promiseOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!");
    }, 100);
  });
}

// Usage with async/await
async function run() {
  try {
    const data = await promiseOperation();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
\`\`\`
This modern style is generally preferred for its readability and improved error handling compared to callbacks.

### 📚 Key Concepts
-   **Promises**: The standard way to handle asynchronous operations in modern JavaScript and Node.js.
`,
  "node-crypto-module": `
### 💡 Problem Breakdown
The \`crypto\` module is a built-in Node.js module that provides cryptographic functionality, including tools for hashing, encryption, and decryption. This problem demonstrates creating a SHA256 hash of a string.

### ⚙️ Solution Walkthrough
The solution involves creating a \`Hash\` object, updating it with data, and then getting the resulting digest.
\`\`\`javascript
const crypto = require('crypto');

function createHash(data) {
  return crypto.createHash('sha256') // 1. Create a hash object
               .update(data)          // 2. Add data to be hashed
               .digest('hex');         // 3. Get the result in hexadecimal format
}

createHash('hello world');
\`\`\`
### 📚 Key Concepts
-   **Hashing**: A one-way function that takes an input and returns a fixed-size string of bytes, the "hash". It's used for data integrity and password storage.
-   **\`crypto\` Module**: A core Node.js module for cryptographic operations.
`,
  "node-url-module": `
### 💡 Problem Breakdown
The \`url\` module is a core Node.js utility for URL resolution and parsing. The modern approach uses the WHATWG \`URL\` class, which is the same API available in browsers.

### ⚙️ Solution Walkthrough
The \`URL\` class is used to parse a URL string into its constituent parts.
\`\`\`javascript
const { URL } = require('url');
const myURL = new URL('https://example.com/path?q=test#hash');

console.log(myURL.hostname);  // "example.com"
console.log(myURL.pathname);  // "/path"
console.log(myURL.search);    // "?q=test"
console.log(myURL.searchParams.get('q')); // "test"
\`\`\`
### 📚 Key Concepts
-   **URL Parsing**: The process of breaking down a URL string into a structured object.
-   **WHATWG URL Standard**: A modern, standardized API for working with URLs that is consistent between Node.js and browsers.
`,
  "node-querystring-module": `
### 💡 Problem Breakdown
The \`querystring\` module is a legacy Node.js utility for parsing and formatting URL query strings. While the \`URLSearchParams\` class is now preferred, \`querystring\` is still widely seen in older codebases.

### ⚙️ Solution Walkthrough
The \`.parse()\` method is used to convert a query string into a JavaScript object.
\`\`\`javascript
const querystring = require('querystring');

const query = 'key1=val1&key2=val2';
const parsed = querystring.parse(query);
// parsed is { key1: 'val1', key2: 'val2' }
\`\`\`
### 📚 Key Concepts
-   **Query String**: The part of a URL after the \`?\` that contains key-value pairs.
-   **Legacy API**: An older API that is still available but has been superseded by a more modern alternative.
`,
  "node-child-process-conceptual": `
### 💡 Problem Breakdown
The \`child_process\` module is a powerful Node.js feature that allows you to run external commands and spawn other processes. This is essential for interacting with the underlying operating system or for running computationally expensive tasks in a separate process to avoid blocking the main event loop.

### ⚙️ Solution Walkthrough
Key functions include:
-   **\`exec(command, callback)\`**: Spawns a shell and runs a command within that shell. It buffers the command's output and passes the entire output to a callback function when it's complete. Good for simple, short-running commands.
    \`\`\`javascript
    const { exec } = require('child_process');
    exec('ls -lh', (error, stdout, stderr) => { /* ... */ });
    \`\`\`
-   **\`spawn(command, [args])\`**: Spawns a new process without creating a shell. It provides the output as a stream, which is much more efficient for commands that produce a large amount of data.

### 📚 Key Concepts
-   **Child Process**: A process created and managed by another process (the parent).
-   **Inter-Process Communication (IPC)**: The mechanisms by which different processes can communicate.
`,
  "node-worker-threads-conceptual": `
### 💡 Problem Breakdown
While Node.js is single-threaded, the \`worker_threads\` module (available since Node.js v12) provides a way to perform true multi-threading by running JavaScript code in parallel. This is the preferred way to handle CPU-intensive tasks, as it doesn't block the main event loop.

### ⚙️ Solution Walkthrough
The pattern is similar to Web Workers in the browser.
\`\`\`javascript
// --- main.js ---
const { Worker } = require('worker_threads');
const worker = new Worker('./worker.js');
worker.on('message', (result) => console.log(result));
worker.postMessage({ number: 40 });

// --- worker.js ---
const { parentPort } = require('worker_threads');
parentPort.on('message', (task) => {
  const result = someSlowFibonacciCalculation(task.number);
  parentPort.postMessage(result);
});
\`\`\`
Unlike \`child_process\`, \`worker_threads\` can share memory efficiently using \`SharedArrayBuffer\`.

### 📚 Key Concepts
-   **Multi-threading**: Running code on multiple threads in parallel to improve performance for CPU-bound tasks.
-   **Worker Threads**: Node.js's API for multi-threading.
`,
  "node-npm-and-package-json": `
### 💡 Problem Breakdown
This is a conceptual problem about the Node.js ecosystem.
-   **npm (Node Package Manager)**: This is the default command-line tool for managing third-party packages (libraries) in a Node.js project. Key commands include \`npm install\` (to install dependencies), \`npm run\` (to run scripts), and \`npm publish\` (to share a package).
-   **\`package.json\`**: This is the manifest file for a Node.js project. It's a JSON file that contains:
    -   Project metadata (name, version, license).
    -   A list of the project's dependencies (\`dependencies\` and \`devDependencies\`).
    -   A set of scripts that can be run with \`npm run\` (e.g., \`"start": "node index.js"\`).

### 📚 Key Concepts
-   **Package Management**: The process of managing the external libraries and tools that a project depends on.
`,
  "node-environment-variables": `
### 💡 Problem Breakdown
Environment variables are variables that are part of the environment in which a process runs. Using them is a crucial best practice for application configuration because it allows you to separate configuration from your code. This is essential for security (keeping secrets like API keys out of source control) and for flexibility (using different database URLs for development vs. production).

### ⚙️ Solution Walkthrough
You access environment variables via the global \`process.env\` object.
\`\`\`javascript
// In your shell, before running the script:
// export DATABASE_URL="postgres://user:pass@host:port/db"
// export NODE_ENV="production"

// In your Node.js script:
const dbUrl = process.env.DATABASE_URL;
if (process.env.NODE_ENV === 'production') {
  // Use production settings
}
\`\`\`
Libraries like \`dotenv\` are often used to load environment variables from a \`.env\` file during development for convenience.

### 📚 Key Concepts
-   **Configuration Management**: The practice of separating configuration from code.
-   **The Twelve-Factor App**: A methodology for building software-as-a-service apps, where storing config in the environment is a key principle.
`,
  "node-fs-read-stream": `
### 💡 Problem Breakdown
When reading a very large file, using \`fs.readFile\` would attempt to load the entire file into memory at once, which can be inefficient or cause the program to crash. A **readable stream** is the solution. It reads the file in small, manageable chunks and emits a \`data\` event for each chunk.

### ⚙️ Solution Walkthrough
\`fs.createReadStream\` is used to create a readable stream.
\`\`\`javascript
const fs = require('fs');
const readStream = fs.createReadStream('./large-file.log', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  console.log('--- NEW CHUNK ---');
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('No more data.');
});
\`\`\`
### 📚 Key Concepts
-   **Streams**: A fundamental concept in Node.js for memory-efficient data handling.
`,
  "node-fs-write-stream": `
### 💡 Problem Breakdown
Similar to reading, writing a very large amount of data to a file at once can be inefficient. A **writable stream** provides an interface for writing data in chunks.

### ⚙️ Solution Walkthrough
\`fs.createWriteStream\` is used. You write to it with the \`.write()\` method and call \`.end()\` when you're done.
\`\`\`javascript
const fs = require('fs');
const writeStream = fs.createWriteStream('./output.txt');

writeStream.write('Chunk 1\\n');
writeStream.write('Chunk 2\\n');
writeStream.end('This is the final chunk.');
\`\`\`
The most powerful use is to \`pipe\` a readable stream directly to a writable stream.

### 📚 Key Concepts
-   **Streams**: A core feature of Node.js for handling I/O.
`,
  "node-http-routing": `
### 💡 Problem Breakdown
This problem shows how to implement basic routing in a plain Node.js HTTP server without a framework like Express. The logic involves checking the \`req.url\` and \`req.method\` properties of the incoming request object.

### ⚙️ Solution Walkthrough
An \`if/else if\` block is used inside the \`createServer\` callback to handle different URL paths.
\`\`\`javascript
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Welcome to the homepage!');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.end('This is the about page.');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
\`\`\`
### 📚 Key Concepts
-   **HTTP Request Object**: The \`req\` object contains all the information about the client's request.
`,
  "node-http-post-data": `
### 💡 Problem Breakdown
In a plain Node.js HTTP server, the body of an incoming POST request is not available immediately. It arrives as a stream of data. You need to listen for \`data\` events to collect the chunks and an \`end\` event to know when you have the complete body.

### ⚙️ Solution Walkthrough
Event listeners are attached to the \`req\` object.
\`\`\`javascript
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    // Collect the data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });
    // When the data is all received
    req.on('end', () => {
      console.log('Received body:', body);
      res.end('Data received');
    });
  }
});
\`\`\`
Frameworks like Express abstract this complexity away with body-parsing middleware.

### 📚 Key Concepts
-   **Request as a Stream**: The incoming request body is a readable stream.
`,
  "node-util-promisify": `
### 💡 Problem Breakdown
\`util.promisify()\` is a utility in Node.js's built-in \`util\` module. It takes a function that follows the common error-first callback style and returns a new version that returns a promise.

### ⚙️ Solution Walkthrough
\`fs.readFile\` is promisified.
\`\`\`javascript
const util = require('util');
const fs = require('fs');

// Create a promise-returning version of fs.readFile
const readFilePromise = util.promisify(fs.readFile);

async function run() {
  try {
    const data = await readFilePromise('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
\`\`\`
This is a standard way to modernize older, callback-based Node.js APIs for use with \`async/await\`.

### 📚 Key Concepts
-   **Promisification**: A pattern for converting callback-based APIs into promise-based ones.
`,
  "node-zlib-module-conceptual": `
### 💡 Problem Breakdown
The \`zlib\` module is a core Node.js module that provides compression and decompression functionality using the Gzip and Deflate/Inflate algorithms. It's typically used with streams to compress or decompress data on the fly.

### ⚙️ Solution Walkthrough
A file is read, compressed, and written to a new \`.gz\` file by piping streams together.
\`\`\`javascript
const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('source.txt.gz');

// Create a Gzip transform stream
const gzip = zlib.createGzip();

// Pipe the read stream through the gzip stream to the write stream
readStream.pipe(gzip).pipe(writeStream);
\`\`\`
### 📚 Key Concepts
-   **Transform Stream**: A type of stream that can both read and write data, modifying it as it passes through (like the \`gzip\` stream).
-   **Data Compression**: A technique for reducing the size of data to save storage space or network bandwidth.
`,
  "node-cluster-module-conceptual": `
### 💡 Problem Breakdown
Because the Node.js event loop is single-threaded, a single Node.js process can only run on one CPU core. The \`cluster\` module is a core module that allows you to take advantage of multi-core systems by creating a cluster of Node.js processes.

### ⚙️ Solution Walkthrough
The pattern involves a single **master** process that forks multiple **worker** processes.
\`\`\`javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => { /* ... */ }).listen(8000);
  console.log(\`Worker \${process.pid} started\`);
}
\`\`\`
The master process can distribute incoming connections to the worker processes, allowing the application to handle a much higher load.

### 📚 Key Concepts
-   **Clustering**: A technique for scaling a Node.js application on a single machine.
-   **Multi-process Architecture**: A way to achieve parallelism.
`,
  "node-dns-module": `
### 💡 Problem Breakdown
The \`dns\` module is a core Node.js module that provides access to the underlying operating system's DNS resolution functionalities.

### ⚙️ Solution Walkthrough
The \`dns.lookup()\` function is used to resolve a hostname to its first found IP address.
\`\`\`javascript
const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
  if (err) throw err;
  console.log('address: %j family: IPv%s', address, family);
});
\`\`\`
The module also provides promise-based versions of its functions: \`require('dns/promises')\`.

### 📚 Key Concepts
-   **DNS (Domain Name System)**: The system that translates human-readable domain names into machine-readable IP addresses.
`,
  "node-repl-conceptual": `
### 💡 Problem Breakdown
The REPL (Read-Eval-Print Loop) is an interactive programming environment. Node.js comes with a built-in REPL that you can access by simply typing \`node\` in your command line.

### ⚙️ Solution Walkthrough
It allows you to:
1.  **Read**: It reads the JavaScript code you type.
2.  **Eval**: It evaluates the code.
3.  **Print**: It prints the result of the evaluation to the console.
4.  **Loop**: It waits for the next line of code.

It's an excellent tool for quickly testing out JavaScript features, experimenting with Node.js modules, or doing simple calculations without needing to create a full script file.

### 📚 Key Concepts
-   **REPL**: An interactive command-line interface for a programming language.
`,
  "node-caching-conceptual": `
### 💡 Problem Breakdown
Caching is a critical performance optimization strategy in backend applications. A simple in-memory cache can be implemented in Node.js to store the results of expensive operations (like database queries or API calls) and serve them quickly for subsequent identical requests.

### ⚙️ Solution Walkthrough
A simple cache can be implemented with a \`Map\` or a plain object.
\`\`\`javascript
const cache = new Map();

async function getUser(id) {
  // 1. Check the cache first
  if (cache.has(id)) {
    return cache.get(id);
  }
  
  // 2. If not in cache, perform the expensive operation
  const user = await db.query('SELECT * FROM users WHERE id = ?', id);
  
  // 3. Store the result in the cache
  cache.set(id, user);
  
  return user;
}
\`\`\`
**Limitations**: This cache is local to a single Node.js process and will be cleared if the process restarts. For multi-process or multi-server applications, an external caching service like Redis or Memcached is used.

### 📚 Key Concepts
-   **Caching**: A fundamental performance optimization technique.
`,
  "node-v8-module-conceptual": `
### 💡 Problem Breakdown
The \`v8\` module exposes APIs that are specific to the version of the V8 JavaScript engine built into Node.js. It's primarily used for getting detailed information about the memory usage of your application.

### ⚙️ Solution Walkthrough
The \`v8.getHeapStatistics()\` method is the most common use case.
\`\`\`javascript
const v8 = require('v8');

// Get statistics about the V8 heap
const heapStats = v8.getHeapStatistics();

console.log('Total Heap Size:', (heapStats.total_heap_size / 1024 / 1024).toFixed(2), 'MB');
console.log('Used Heap Size:', (heapStats.used_heap_size / 1024 / 1024).toFixed(2), 'MB');
\`\`\`
This can be useful for monitoring the memory health of a long-running Node.js application to detect potential memory leaks.

### 📚 Key Concepts
-   **V8 Engine**: The JavaScript engine that powers Node.js and Google Chrome.
-   **Heap Memory**: The area of memory used for storing objects and other reference types.
`,
  "node-timers-module": `
### 💡 Problem Breakdown
This is a conceptual problem about the different timer functions in Node.js and their execution order within the event loop.
- **\`setTimeout(cb, ms)\`**: Schedules a callback to run after a minimum threshold of \`ms\` milliseconds has passed, during the **timers** phase of the event loop.
- **\`setInterval(cb, ms)\`**: Schedules a callback to run repeatedly every \`ms\` milliseconds.
- **\`setImmediate(cb)\`**: Schedules a callback to run in the **check** phase of the event loop, which happens *after* the poll phase (where I/O callbacks run). It's effectively "as soon as possible after I/O".

**Order**: In an I/O cycle, \`setTimeout(fn, 0)\` might run before or after \`setImmediate(fn)\`, as its execution is tied to system timer granularity. However, \`process.nextTick()\` (a microtask) will always run before any of them.

### 📚 Key Concepts
-   **Event Loop Phases**: The distinct stages of the Node.js event loop that determine when different types of callbacks are executed.
`,
  "node-rest-api-conceptual": `
### 💡 Problem Breakdown
A REST (Representational State Transfer) API is an architectural style for designing networked applications. It's the most common standard for building web APIs.

### ⚙️ Solution Walkthrough
The core principles are:
1.  **Resources**: Data is modeled as resources (e.g., "users", "products"). Each resource has a unique identifier (URI), like \`/users/123\`.
2.  **HTTP Verbs**: Standard HTTP methods are used to perform actions on these resources.
    -   \`GET /users\`: Retrieve a list of all users.
    -   \`POST /users\`: Create a new user.
    -   \`PUT /users/123\`: Update user 123.
    -   \`DELETE /users/123\`: Delete user 123.
3.  **Statelessness**: Each request from a client to the server must contain all the information needed to understand and complete the request. The server does not store any client session state.
4.  **Representations**: Data is exchanged in a standard format, most commonly JSON.

### 📚 Key Concepts
-   **REST**: An architectural style for APIs.
`,
  "node-websocket-conceptual": `
### 💡 Problem Breakdown
WebSockets provide a full-duplex (two-way) communication channel over a single, long-lived TCP connection. This is different from the request-response model of HTTP and is ideal for real-time applications like chat apps, live notifications, or online games.

### ⚙️ Solution Walkthrough
In Node.js, you typically use a library like \`ws\` to create a WebSocket server.
\`\`\`javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('Client connected');
  
  ws.on('message', message => {
    console.log('Received:', message);
    // Broadcast the message to all clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
\`\`\`
### 📚 Key Concepts
-   **WebSocket**: A protocol for persistent, real-time, two-way communication.
-   **Event-Driven**: The server is built around listening for events like \`connection\`, \`message\`, and \`close\`.
`,
  "node-authentication-jwt-conceptual": `
### 💡 Problem Breakdown
JSON Web Tokens (JWT) are a standard for creating access tokens that assert some number of claims. They are commonly used for stateless authentication in APIs.

### ⚙️ Solution Walkthrough
The authentication flow is as follows:
1.  **Login**: A user submits their credentials (e.g., email/password) to a login endpoint.
2.  **Verification**: The server verifies the credentials against the database.
3.  **Token Creation**: If valid, the server creates a JWT. The token's **payload** contains claims (e.g., \`userId\`, \`role\`). The server then **signs** the token using a secret key.
4.  **Send Token**: The server sends the signed JWT back to the client.
5.  **Client Storage**: The client stores the JWT (e.g., in \`localStorage\` or a cookie).
6.  **Authenticated Requests**: For subsequent requests to protected endpoints, the client includes the JWT in the \`Authorization\` header, typically as \`Authorization: Bearer <token>\`.
7.  **Server Verification**: The server's middleware verifies the token's signature using the secret key. If the signature is valid, the server trusts the claims in the payload and processes the request.

### 📚 Key Concepts
-   **Stateless Authentication**: The server doesn't need to store session information. All the necessary user info is in the self-contained JWT.
-   **JWT (JSON Web Token)**: A standard for secure and compact token-based authentication.
`,
  "node-error-handling-middleware": `
### 💡 Problem Breakdown
Express has a built-in mechanism for centralized error handling. An "error-handling middleware" is a special type of middleware function that has four arguments instead of three: \`(\`err, req, res, next\`)\`.

### ⚙️ Solution Walkthrough
This middleware is defined *after* all other \`app.use()\` and route calls.
\`\`\`javascript
// A route that might have an error
app.get('/user/:id', (req, res, next) => {
  if (isNaN(req.params.id)) {
    // Pass an error to the 'next' function
    return next(new Error('User ID must be a number.'));
  }
  // ...
});

// The error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
\`\`\`
1.  **Triggering**: When you call \`next(err)\` with an argument from any route handler, Express skips all other regular middleware and jumps directly to the first error-handling middleware.
2.  **Centralization**: This allows you to have a single, consistent place to handle all errors in your application.

### 📚 Key Concepts
-   **Middleware**: The core of the Express framework.
-   **Centralized Error Handling**: A robust pattern for managing errors in a server application.
`,
  "node-process-signals-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about making a Node.js application resilient and capable of a "graceful shutdown." A Node.js process can listen for signals from the operating system. The most common are:
- **\`SIGINT\`**: Sent when you press \`Ctrl+C\` in the terminal.
- **\`SIGTERM\`**: A generic signal used to cause program termination. This is often sent by process managers like PM2 or Docker.

### ⚙️ Solution Walkthrough
You can listen for these signals on the \`process\` object.
\`\`\`javascript
process.on('SIGINT', () => {
  console.log('Caught interrupt signal. Shutting down gracefully.');
  // Here, you would close database connections, save state, etc.
  // Then, exit the process.
  server.close(() => {
    process.exit(0);
  });
});
\`\`\`
### 📚 Key Concepts
-   **Process Signals**: A form of inter-process communication in Unix-like operating systems.
-   **Graceful Shutdown**: The practice of allowing a process to finish its current tasks and clean up resources before exiting.
`,
  "node-esm-in-node": `
### 💡 Problem Breakdown
Node.js now has full support for the standard ES Module system (\`import\`/\`export\`). There are two main ways to tell Node.js to treat your files as ESM.

### ⚙️ Solution Walkthrough
1.  **Use \`.mjs\` extension**: If you name your files with a \`.mjs\` extension, Node.js will always treat them as ES Modules.
    \`\`\`javascript
    // --- In file: app.mjs ---
    import fs from 'fs'; // You can import built-ins
    export const myVar = 1;
    \`\`\`
2.  **Set \`"type": "module"\` in \`package.json\`**: This is the more common, modern approach. It tells Node.js that all files with a \`.js\` extension in that package are ES Modules.
    \`\`\`json
    {
      "name": "my-app",
      "type": "module"
    }
    \`\`\`
    If you do this and need to use a CommonJS file, you must name it with a \`.cjs\` extension.

### 📚 Key Concepts
-   **ES Modules in Node.js**: The modern way to structure Node.js applications.
`,
  "node-security-best-practices": `
### 💡 Problem Breakdown
This is a conceptual overview of key security considerations for a Node.js backend.
### ⚙️ Solution Walkthrough
1.  **Validate All User Input**: Never trust data from the client. Use libraries like Zod or Joi to validate the shape, type, and content of request bodies, parameters, and query strings. This prevents injection attacks and other vulnerabilities.
2.  **Use Rate Limiting and Brute-Force Protection**: Use middleware (like \`express-rate-limit\`) to prevent a single IP from making too many requests in a short period, which can mitigate denial-of-service and password guessing attacks.
3.  **Secure Dependencies**: Regularly run \`npm audit\` to find and fix known vulnerabilities in your third-party packages.
4.  **Use Helmet**: In Express, the \`helmet\` middleware sets various secure HTTP headers (like \`Content-Security-Policy\` and \`X-XSS-Protection\`) to protect against common web vulnerabilities.
5.  **Don't Run as Root**: Run your Node.js process as a non-root user to limit the potential damage if the process is compromised.

### 📚 Key Concepts
-   **Application Security**: A critical aspect of backend development.
`,
  "node-express-static-files": `
### 💡 Problem Breakdown
The \`express.static\` middleware is a built-in middleware in Express for serving static files, such as HTML, CSS, images, and client-side JavaScript.

### ⚙️ Solution Walkthrough
The middleware is mounted using \`app.use()\`.
\`\`\`javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Or, for an absolute path:
// app.use(express.static(path.join(__dirname, 'public')));
\`\`\`
Now, if you have a file at \`./public/images/logo.png\`, a user can access it by navigating to \`http://your-domain.com/images/logo.png\`. The middleware handles finding the file and sending it back with the correct content type.

### 📚 Key Concepts
-   **Static Assets**: Files that are served to the client without any server-side processing.
-   **Middleware**: The core of the Express framework.
`,
  "node-orm-conceptual": `
### 💡 Problem Breakdown
An ORM (Object-Relational Mapping) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. It's a layer of abstraction that sits between your application code and your database.

### ⚙️ Solution Walkthrough
Instead of writing raw SQL, you interact with models and methods.
-   **Without ORM (raw SQL)**:
    \`\`\`sql
    SELECT * FROM "Users" WHERE id = 1;
    \`\`\`
-   **With an ORM (like Sequelize or Prisma)**:
    \`\`\`javascript
    const user = await User.findByPk(1);
    // 'user' is an object instance with methods like user.save()
    \`\`\`
**Pros**: Faster development, database abstraction (easier to switch databases), helps prevent SQL injection.
**Cons**: Can be less performant than handwritten SQL for complex queries, adds a layer of complexity.

### 📚 Key Concepts
-   **ORM**: A tool that provides an object-oriented layer on top of a relational database.
-   **Abstraction**: Hiding the complexity of raw SQL queries behind a more developer-friendly API.
`,
  "node-process-nexttick": `
### 💡 Problem Breakdown
\`process.nextTick()\` is a unique function in Node.js. It schedules a callback function to be executed at the very beginning of the *next* tick of the event loop. Callbacks queued with \`process.nextTick()\` will run *after* the current synchronous code finishes but *before* any other asynchronous events (like I/O, timers, or promise callbacks) are processed.

### ⚙️ Solution Walkthrough
Comparing \`nextTick\` with other async functions.
\`\`\`javascript
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
process.nextTick(() => console.log('nextTick'));
console.log('End');

// Output: Start, End, nextTick, Promise, Timeout
\`\`\`
It has the highest priority of all async operations in Node.js.

### 📚 Key Concepts
-   **Event Loop Phases**: \`nextTick\` has its own queue that is processed before the microtask (promise) queue.
`,
  "node-https-server": `
### 💡 Problem Breakdown
This is a conceptual problem about creating a secure HTTP server in Node.js. The \`https\` module is used, which is very similar to the \`http\` module but is designed for secure communication using TLS/SSL.

### ⚙️ Solution Walkthrough
The key difference is that \`https.createServer()\` requires an options object containing the SSL certificate and private key.
\`\`\`javascript
const https = require('https');
const fs = require('fs');

// You would need to have SSL certificate files
const options = {
  key: fs.readFileSync('path/to/server-key.pem'),
  cert: fs.readFileSync('path/to/server-cert.pem')
};

https.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.end('Hello Secure World!\\n');
}).listen(443);
\`\`\`
In production, these certificates are typically managed by a reverse proxy like Nginx or a cloud load balancer.

### 📚 Key Concepts
-   **HTTPS**: The secure version of HTTP, which encrypts communication between the client and server.
-   **TLS/SSL**: The cryptographic protocols that provide security for HTTPS.
`,
  "node-async-hooks-conceptual": `
### 💡 Problem Breakdown
\`async_hooks\` is a core, but very advanced, Node.js API. It provides a way to track the entire lifecycle of asynchronous resources within a Node.js application. This is not for general application logic, but for building diagnostic tools, like generating async stack traces or implementing continuation-local storage.

### ⚙️ Solution Walkthrough
You create an \`AsyncHook\` instance and provide callbacks for different lifecycle events.
\`\`\`javascript
const async_hooks = require('async_hooks');

const hook = async_hooks.createHook({
  init(asyncId, type) { /* Called when a new async resource is created */ },
  before(asyncId) { /* Called just before a resource's callback is executed */ },
  after(asyncId) { /* Called just after a resource's callback is executed */ },
  destroy(asyncId) { /* Called when a resource is destroyed */ }
});

hook.enable();
\`\`\`
This API can introduce significant performance overhead and should be used with caution.

### 📚 Key Concepts
-   **Asynchronous Resource Tracking**: The core purpose of \`async_hooks\`.
-   **Diagnostic Tools**: The primary use case for this advanced API.
`,
};
