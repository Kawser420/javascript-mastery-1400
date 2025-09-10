
export const explanations: Record<string, string> = {
    'node-global-objects': `
### 💡 Problem Breakdown
JavaScript can run in different environments, most commonly the browser and Node.js on a server. While they share the core JavaScript language, their execution environments provide different tools and global objects. This problem is about recognizing some of the key global objects that are specific to the Node.js environment.

### ⚙️ Solution Walkthrough
The solution simply describes what would happen in a real Node.js environment.

\`\`\`javascript
// In a real Node.js script:
const nodeVersion = process.version;
const currentDirectory = __dirname;
\`\`\`

1.  **\`process\`**: This is a crucial Node.js global object that provides information about, and control over, the current Node.js process.
    *   \`process.version\` contains the Node.js version string.
    *   \`process.env\` contains user environment variables.
    *   \`process.argv\` contains command-line arguments passed to the script.
    *   \`process.exit()\` can be used to terminate the process.
2.  **The \`__dirname\` variable**: This is a special variable (not technically a global object, but available in every module) that contains the absolute path of the directory containing the currently executing script. This is extremely useful for locating files relative to your script's location.
3.  **\`__filename\`**: Similar to \`__dirname\`, this contains the absolute path of the currently executing script file itself.
4.  **Browser Equivalents**: These do not exist in the browser. The browser's equivalent of the global object is \`window\`, which in turn has browser-specific APIs like \`document\` and \`localStorage\`.

### 📚 Key Concepts
-   **JavaScript Runtime Environment**: The environment in which JavaScript code is executed. Each environment provides its own set of APIs and global objects.
-   **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server side.
-   **Global Objects**: Objects that are available in all modules without needing to be imported.
`,
    'node-fs-readfile': `
### 💡 Problem Breakdown
A key capability of a backend environment like Node.js is interacting with the server's file system—reading files, writing files, creating directories, etc. This is not possible in a browser for security reasons. The task is to understand the basic conceptual code for reading a file's content using Node's built-in \`fs\` (File System) module.

### ⚙️ Solution Walkthrough
The solution shows the standard asynchronous, callback-based pattern for reading a file.

\`\`\`javascript
const fs = require('fs');

fs.readFile('/path/to/file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
\`\`\`

1.  **\`const fs = require('fs');\`**: In Node.js's default CommonJS module system, you use the \`require()\` function to import built-in modules like \`fs\`.
2.  **The \`fs.readFile(...)\` function**: This is the asynchronous function to read a file.
    *   **The \`path\` argument**: The first argument is the path to the file you want to read.
    *   **The \`encoding\` argument**: The second (optional) argument specifies the character encoding. If you omit this, you'll get a raw \`Buffer\` object instead of a string. \`'utf8'\` is very common.
    *   **The \`callback\` argument**: The third argument is a callback function that Node.js will execute when the file reading operation is complete (or has failed).
3.  **The "Error-First" Callback**: The callback function itself follows a standard Node.js pattern. Its first argument is always an \`err\` object.
    *   If the operation was successful, \`err\` will be \`null\`.
    *   If an error occurred (e.g., file not found), the \`err\` object will contain information about the error, and the \`data\` argument will be undefined.
    *   This is why the first thing you do in the callback is check \`if (err)\`.
4.  **Success**: If there's no error, the file's contents are available in the \`data\` argument.

### 📚 Key Concepts
-   **\`fs\` Module**: Node.js's built-in module for all file system operations.
-   **Asynchronous I/O**: Input/Output operations (like reading a file from a disk) are slow. Node.js is built around a non-blocking, asynchronous model. It starts the "read file" operation and then immediately moves on to execute other code. When the file is ready, it executes the callback. This keeps the server responsive.
-   **Error-First Callback**: A standard convention in Node.js for asynchronous functions, where the first argument to the callback is reserved for an error object.
`,
    'node-http-server': `
### 💡 Problem Breakdown
The most fundamental task for a backend is to listen for and respond to network requests. Node.js has a powerful built-in \`http\` module that allows you to create an HTTP server with very little code. This problem shows the conceptual "hello world" of creating a basic server.

### ⚙️ Solution Walkthrough
The solution uses the \`http.createServer()\` method.

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running...');
});
\`\`\`

1.  **\`require('http')\`**: Imports the built-in HTTP module.
2.  **The \`http.createServer(...)\` function**: This is the main function. It creates a new server object. It takes a callback function that will be executed **every time** a new HTTP request hits the server.
3.  **Request Listener Callback**: The callback function receives two important objects:
    *   **The \`req\` (Request) object**: An object containing all the information about the incoming request from the client (e.g., URL, HTTP headers, request body).
    *   **The \`res\` (Response) object**: An object that you use to build and send the response back to the client.
4.  **Building the Response**:
    *   **\`res.statusCode = 200;\`**: Sets the HTTP status code. \`200\` means "OK".
    *   **\`res.setHeader('Content-Type', 'text/plain');\`**: Sets an HTTP header to tell the client what kind of content we are sending back.
    *   **\`res.end('Hello, World!');\`**: This sends the response body ('Hello, World!') to the client and signals that the response is complete.
5.  **The \`server.listen(...)\` method**: This tells the server to start listening for incoming connections on a specific network port and hostname. The final callback is executed once the server has successfully started.

### 📚 Key Concepts
-   **\`http\` Module**: Node.js's built-in module for creating HTTP servers and clients.
-   **Request/Response Cycle**: The fundamental model of client-server communication on the web. A client sends a request, and the server sends back a response.
-   **Port**: A number that identifies a specific process or service on a network. Web servers typically listen on ports like 80 (HTTP) or 443 (HTTPS).
`,
};