export const solvers: Record<string, Function> = {
  "node-global-process": () =>
    `(Conceptual) In a Node.js script run with \`node my-script.js arg1\`:\n- \`process.argv\` would be an array like \`['/path/to/node', '/path/to/my-script.js', 'arg1']\`.\n- \`process.env.NODE_ENV\` would access an environment variable.`,
  "node-commonjs-modules": () =>
    `// In file: math.js\nconst add = (a, b) => a + b;\nmodule.exports = { add };\n\n// In file: main.js\nconst { add } = require('./math.js');\nconsole.log(add(2, 3)); // 5`,
  "node-fs-readfile": () =>
    `// Conceptual Node.js code:\nconst fs = require('fs');\n\nfs.readFile('/path/to/file.txt', 'utf8', (err, data) => {\n  if (err) {\n    console.error('Error reading file:', err);\n    return;\n  }\n  console.log(data);\n});`,
  "node-fs-writefile": () =>
    `// Conceptual Node.js code:\nconst fs = require('fs');\n\nconst content = 'Hello, file!';\nfs.writeFile('/path/to/new-file.txt', content, 'utf8', (err) => {\n  if (err) {\n    console.error('Error writing file:', err);\n    return;\n  }\n  console.log('File has been saved!');\n});`,
  "node-http-server": () =>
    `// Conceptual Node.js code:\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!');\n});\n\nserver.listen(3000, '127.0.0.1', () => {\n  console.log('Server running at http://127.0.0.1:3000/');\n});`,
  "node-event-emitter": () =>
    `(Conceptual) const Emitter = require('events'); const myEmitter = new Emitter();\nmyEmitter.on('myEvent', (arg) => console.log('Event fired!', arg));\nmyEmitter.emit('myEvent', { id: 1 });`,
  "node-path-module": () =>
    `(Conceptual) const path = require('path');\npath.join('/foo', 'bar', 'baz/asdf', 'quux', '..');\n// Returns: '/foo/bar/baz/asdf'. It normalizes the path.`,
  "node-event-loop-conceptual": () =>
    `(Conceptual) Node's loop has distinct phases: timers, I/O callbacks, setImmediate, close callbacks. Microtasks (e.g., Promise.then, process.nextTick) run between each phase. This is different from the browser's simpler queue model.`,
  "node-fs-promises": () =>
    `(Conceptual) const fs = require('fs/promises');\nasync function readFile() {\n  const data = await fs.readFile('file.txt', 'utf8');\n  console.log(data);\n}`,
  "node-streams-conceptual": () =>
    `(Conceptual) Streams handle data in chunks. \`const readable = fs.createReadStream('in.txt'); const writable = fs.createWriteStream('out.txt'); readable.pipe(writable);\` efficiently moves data without using much memory.`,
  "node-buffers-conceptual": () =>
    `(Conceptual) A Buffer is a fixed-size chunk of memory for handling raw binary data. \`const buf = Buffer.from('hello', 'utf8');\` is used for I/O operations like reading from files or network sockets.`,
  "node-dirname-filename": () =>
    `(Conceptual) In a CJS module located at \`/app/src/index.js\`:\n- \`__filename\` is the absolute path to the file: \`/app/src/index.js\`.\n- \`__dirname\` is the absolute path to the directory: \`/app/src\`.`,
  "node-os-module": () =>
    `(Conceptual) const os = require('os');\nconst totalMem = os.totalmem(); // Total system memory in bytes\nconst cpus = os.cpus(); // Array of objects containing info about each CPU core.`,
  "node-http-request-conceptual": () =>
    `(Conceptual) const https = require('https');\nhttps.get('https://...', res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => console.log(JSON.parse(data))); });`,
  "node-express-hello-world-conceptual": () =>
    `(Conceptual) const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello World!'));\napp.listen(3000);`,
  "node-express-routing-conceptual": () =>
    `(Conceptual) \`app.get('/users/:id', (req, res) => { res.send('User ID: ' + req.params.id); });\`. A request to \`/users/123\` would respond with "User ID: 123".`,
  "node-express-middleware-conceptual": () =>
    `(Conceptual) A function like \`app.use((req, res, next) => { console.log('Time:', Date.now()); next(); });\`. It runs for every request, logs the time, and then calls \`next()\` to pass control to the next middleware or route handler.`,
  "node-async-patterns-callback": () =>
    `(Conceptual) The error-first callback pattern: \`fs.readFile('file.txt', (err, data) => { if (err) { /* handle */ return; } /* use data */ });\`.`,
  "node-async-patterns-promises": () =>
    `(Conceptual) Converting a callback to a promise: \`const readFilePromise = util.promisify(fs.readFile); async function() { const data = await readFilePromise('file.txt'); }\`.`,
  "node-crypto-module": ({ data }: { data: string }) =>
    `(Conceptual) const crypto = require('crypto');\nconst hash = crypto.createHash('sha256').update('${data}').digest('hex');\n// The result is a 64-character hex string.`,
  "node-url-module": ({ url }: { url: string }) =>
    `(Conceptual) const { URL } = require('url');\nconst myURL = new URL('${url}');\nreturn \`Hostname: \${myURL.hostname}, Pathname: \${myURL.pathname}\`;`,
  "node-querystring-module": ({ query }: { query: string }) =>
    `(Conceptual) const querystring = require('querystring');\nconst parsed = querystring.parse('${query}');\n// result: { key1: 'val1', key2: 'val2' }`,
  "node-child-process-conceptual": () =>
    `(Conceptual) The \`child_process\` module (e.g., \`exec\`, \`spawn\`) allows a Node.js script to run external system commands like \`ls -lh\` or execute other scripts, enabling parallel processing and system interaction.`,
  "node-worker-threads-conceptual": () =>
    `(Conceptual) The \`worker_threads\` module allows you to run CPU-intensive JavaScript in a separate thread. This is the correct way to do parallel processing in Node.js without blocking the main event loop.`,
  "node-npm-and-package-json": () =>
    `(Conceptual) npm is the package manager for Node.js. \`package.json\` is the project's manifest file; it lists dependencies (\`npm install\` installs them) and defines scripts (\`npm run dev\`).`,
  "node-environment-variables": () =>
    `(Conceptual) Use \`process.env.MY_VAR\` to access environment variables. They are used to store configuration that varies between environments (development, production), such as database passwords or API keys, keeping them out of source code.`,
  "node-fs-read-stream": () =>
    `(Conceptual) \`const stream = fs.createReadStream('large.txt'); stream.on('data', chunk => { ... });\`. This reads the file in small chunks instead of all at once, saving memory.`,
  "node-fs-write-stream": () =>
    `(Conceptual) \`const stream = fs.createWriteStream('large-copy.txt'); stream.write(chunk);\`. This writes data in chunks, which is memory-efficient.`,
  "node-http-routing": () =>
    `(Conceptual) In the \`http.createServer\` callback: \`if (req.url === '/about' && req.method === 'GET') { ... } else if (req.url === '/') { ... } else { res.statusCode = 404; res.end('Not Found'); }\`.`,
  "node-http-post-data": () =>
    `(Conceptual) In the request handler, you listen for 'data' events on the \`req\` object to collect the body chunks, and the 'end' event to signal completion, after which you can parse the collected data.`,
  "node-util-promisify": () =>
    `(Conceptual) \`const util = require('util'); const fs = require('fs'); const readFilePromise = util.promisify(fs.readFile);\`. Now \`readFilePromise('file.txt')\` returns a promise instead of taking a callback.`,
  "node-zlib-module-conceptual": () =>
    `(Conceptual) The \`zlib\` module provides compression and decompression streams. You can pipe a read stream through a gzip stream to a write stream: \`fs.createReadStream('file.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('file.txt.gz'))\`.`,
  "node-cluster-module-conceptual": () =>
    `(Conceptual) The \`cluster\` module allows a main process to fork multiple worker processes that can share a single server port. This lets a Node.js app on a multi-core server handle more concurrent connections by distributing the load across cores.`,
  "node-dns-module": () =>
    `(Conceptual) \`const dns = require('dns'); dns.lookup('example.com', (err, address) => { console.log('IP Address:', address); });\`. This performs a DNS query.`,
  "node-repl-conceptual": () =>
    `(Conceptual) REPL stands for Read-Eval-Print Loop. You start it by typing \`node\` in your terminal. It's an interactive shell where you can run JavaScript code and see the results immediately, great for quick tests.`,
  "node-caching-conceptual": () =>
    `(Conceptual) A simple in-memory cache can be a global object or a Map. When a request for data comes, first check the cache. If data is present and not expired, return it. If not, fetch from the database, store it in the cache with a timestamp, then return it.`,
  "node-v8-module-conceptual": () =>
    `(Conceptual) The \`v8\` module provides access to V8 engine-specific APIs. \`v8.getHeapStatistics()\` can give you detailed information about your application's memory usage, such as total heap size and used heap size, which is useful for debugging memory issues.`,
  "node-timers-module": () =>
    `(Conceptual) Order of execution in one event loop tick: \`process.nextTick()\` (microtask-like) -> Promise callbacks (microtask) -> \`setImmediate()\` (check phase) -> \`setTimeout(fn, 0)\` (timers phase).`,
  "node-rest-api-conceptual": () =>
    `(Conceptual) A REST API uses HTTP methods to perform CRUD operations on resources. GET \`/users\` (list), GET \`/users/123\` (retrieve), POST \`/users\` (create), PUT \`/users/123\` (update), DELETE \`/users/123\` (delete).`,
  "node-websocket-conceptual": () =>
    `(Conceptual) Using a library like 'ws', you create a WebSocket server. Clients connect, and the server can then push messages to clients in real-time without the client having to poll for updates. It's a persistent, two-way connection.`,
  "node-authentication-jwt-conceptual": () =>
    `(Conceptual) 1. User logs in. 2. Server validates credentials and creates a signed JSON Web Token (JWT) containing user info. 3. Server sends JWT to client. 4. Client includes the JWT in the Authorization header of subsequent requests. 5. Server verifies the JWT signature to authenticate the user.`,
  "node-express-error-handling-middleware": () =>
    `(Conceptual) A special middleware defined with 4 arguments: \`app.use((err, req, res, next) => { ... })\`. It's placed at the end of the middleware stack. If any route handler calls \`next(err)\`, Express skips to this handler.`,
  "node-process-signals-conceptual": () =>
    `(Conceptual) \`process.on('SIGINT', () => { console.log('Caught interrupt signal'); db.close(); process.exit(); });\`. This allows the application to clean up resources (like database connections) before shutting down when the user presses Ctrl+C.`,
  "node-esm-in-node": () =>
    `(Conceptual) Two ways: 1. Name your files with the \`.mjs\` extension. 2. In your \`package.json\`, set \`"type": "module"\`. Then you can use \`import\` and \`export\` syntax in your \`.js\` files.`,
  "node-security-best-practices": () =>
    `(Conceptual) 1. Validate all user input. 2. Use rate limiting to prevent brute-force attacks. 3. Use tools like \`npm audit\` to find and fix vulnerable dependencies. 4. Don't run as root. 5. Use Helmet middleware in Express to set secure HTTP headers.`,
  "node-express-static-files": () =>
    `(Conceptual) \`app.use(express.static('public'))\`. This middleware will serve files from the 'public' directory. A request to \`/images/logo.png\` would serve the file \`./public/images/logo.png\`.`,
  "node-orm-conceptual": () =>
    `(Conceptual) An ORM (Object-Relational Mapper) lets you interact with a SQL database using JavaScript objects and methods instead of writing raw SQL queries. E.g., \`User.findByPk(1)\` instead of \`SELECT * FROM users WHERE id = 1\`.`,
  "node-process-nexttick": () =>
    `(Conceptual) \`process.nextTick(callback)\` schedules a callback to run at the very beginning of the next event loop tick, before any other async operations (like I/O or timers). It has the highest priority of all async operations.`,
  "node-https-server": () =>
    `(Conceptual) Use the \`https\` module instead of \`http\`. The \`https.createServer()\` method takes an options object with \`key\` and \`cert\` properties (read from files) in addition to the request listener.`,
  "node-async-hooks-conceptual": () =>
    `(Conceptual) An advanced API for tracking the lifecycle of asynchronous resources. You can create hooks for \`init\`, \`before\`, \`after\`, and \`destroy\` events of async operations, which is useful for creating diagnostic tools like async stack traces.`,
};
