import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "node-global-process",
    title: "Node.js: `process` Object",
    description:
      "Explain the global `process` object in Node.js and demonstrate how to access environment variables and command-line arguments.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain `process`",
  },
  {
    id: "node-commonjs-modules",
    title: "Node.js: CommonJS Modules",
    description:
      "Show the conceptual code for creating a module in Node.js using `module.exports` and importing it with `require`.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show CJS Module Code",
  },
  {
    id: "node-fs-readfile",
    title: "Node.js: File System (Read)",
    description:
      "Show the conceptual code for reading a file asynchronously using the Node.js `fs` module and an error-first callback.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show File Read Code",
  },
  {
    id: "node-fs-writefile",
    title: "Node.js: File System (Write)",
    description:
      "Show the conceptual code for writing to a file asynchronously using the Node.js `fs` module.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show File Write Code",
  },
  {
    id: "node-http-server",
    title: "Node.js: HTTP Server",
    description:
      "Show the conceptual code for creating a basic HTTP server using the Node.js `http` module that responds with 'Hello, World!'.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Server Code",
  },
  {
    id: "node-event-emitter",
    title: "Node.js: EventEmitter",
    description:
      "Demonstrate the `EventEmitter` class for handling custom events in Node.js.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show EventEmitter",
  },
  {
    id: "node-path-module",
    title: "Node.js: Path Module",
    description:
      "Explain the `path` module and demonstrate its use for working with file and directory paths in a cross-platform way.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Path Module",
  },
  {
    id: "node-event-loop-conceptual",
    title: "Node.js Event Loop (Conceptual)",
    description:
      "Explain the phases of the Node.js event loop (timers, I/O, immediates, etc.) and how it differs from the browser's event loop.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Event Loop",
  },
  {
    id: "node-fs-promises",
    title: "Node.js: `fs/promises`",
    description:
      "Show the modern, promise-based version of the `fs` module for reading a file using `async/await`.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Promise-based Read",
  },
  {
    id: "node-streams-conceptual",
    title: "Node.js: Streams (Conceptual)",
    description:
      "Explain the concept of Streams in Node.js for handling large amounts of data efficiently, and show a conceptual `.pipe()` example.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Streams",
  },
  {
    id: "node-buffers-conceptual",
    title: "Node.js: Buffers (Conceptual)",
    description:
      "Explain what a `Buffer` is in Node.js and how it's used to handle raw binary data.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Buffers",
  },
  {
    id: "node-dirname-filename",
    title: "Node.js: `__dirname` and `__filename`",
    description:
      "Explain the `__dirname` and `__filename` module-local variables in CommonJS.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Variables",
  },
  {
    id: "node-os-module",
    title: "Node.js: OS Module",
    description:
      "Demonstrate the `os` module to get information about the operating system, like CPU architecture and total memory.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show OS Info",
  },
  {
    id: "node-http-request-conceptual",
    title: "Node.js: Making an HTTP Request",
    description:
      "Show the conceptual code for making a GET request to an external API using the built-in `https` module.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show HTTP Request",
  },
  {
    id: "node-express-hello-world-conceptual",
    title: "Express.js: Hello World (Conceptual)",
    description:
      "Show the conceptual 'Hello World' example for creating a web server with the Express.js framework.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Express Server",
  },
  {
    id: "node-express-routing-conceptual",
    title: "Express.js: Routing (Conceptual)",
    description:
      "Show how to define a simple route with a path parameter (e.g., `/users/:id`) in an Express.js application.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Express Route",
  },
  {
    id: "node-express-middleware-conceptual",
    title: "Express.js: Middleware (Conceptual)",
    description:
      "Explain the concept of middleware in Express.js as functions that have access to the request and response objects and the `next` function.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Middleware",
  },
  {
    id: "node-async-patterns-callback",
    title: "Node.js: Async Pattern (Callbacks)",
    description:
      "Demonstrate the classic error-first callback pattern used for asynchronous operations in Node.js.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Callback Pattern",
  },
  {
    id: "node-async-patterns-promises",
    title: "Node.js: Async Pattern (Promises)",
    description:
      "Show how to convert a callback-based function to a promise-based one, and then use it with `.then()` or `async/await`.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Promise Pattern",
  },
  {
    id: "node-crypto-module",
    title: "Node.js: Crypto Module",
    description:
      "Demonstrate how to create a hash (e.g., SHA256) of a string using the built-in `crypto` module.",
    category: "Node.js & Backend JS",
    inputs: [
      {
        id: "data",
        label: "Data to hash",
        type: "text",
        defaultValue: "hello world",
      },
    ],
    buttonText: "Create Hash",
  },
  {
    id: "node-url-module",
    title: "Node.js: URL Module",
    description:
      "Show how to parse a URL string into its component parts using the `URL` class from the `url` module.",
    category: "Node.js & Backend JS",
    inputs: [
      {
        id: "url",
        label: "URL to parse",
        type: "text",
        defaultValue: "https://example.com/path?q=test",
      },
    ],
    buttonText: "Parse URL",
  },
  {
    id: "node-querystring-module",
    title: "Node.js: Query String Module",
    description:
      "Demonstrate how to parse a URL query string using the `querystring` module (legacy but still common).",
    category: "Node.js & Backend JS",
    inputs: [
      {
        id: "query",
        label: "Query String",
        type: "text",
        defaultValue: "key1=val1&key2=val2",
      },
    ],
    buttonText: "Parse Query String",
  },
  {
    id: "node-child-process-conceptual",
    title: "Node.js: Child Processes (Conceptual)",
    description:
      "Explain how the `child_process` module can be used to execute external commands or run other scripts in a separate process.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Child Processes",
  },
  {
    id: "node-worker-threads-conceptual",
    title: "Node.js: Worker Threads (Conceptual)",
    description:
      "Explain the `worker_threads` module for running CPU-intensive JavaScript operations in parallel without blocking the main event loop.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Worker Threads",
  },
  {
    id: "node-npm-and-package-json",
    title: "npm and `package.json` (Conceptual)",
    description:
      "Explain the role of npm as the Node.js package manager and `package.json` as the manifest file for a project's dependencies and scripts.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain npm",
  },
  {
    id: "node-environment-variables",
    title: "Node.js: Environment Variables",
    description:
      "Explain the importance of using environment variables for configuration (e.g., API keys, database URLs) and how to access them via `process.env`.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Env Vars",
  },
  {
    id: "node-fs-read-stream",
    title: "Node.js: Read Stream",
    description:
      "Show the conceptual code for reading a large file efficiently using a readable stream.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Read Stream",
  },
  {
    id: "node-fs-write-stream",
    title: "Node.js: Write Stream",
    description:
      "Show the conceptual code for writing to a large file efficiently using a writable stream.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Write Stream",
  },
  {
    id: "node-http-routing",
    title: "Node.js: Basic HTTP Routing",
    description:
      "Show how to implement simple routing in a plain Node.js HTTP server by checking `req.url` and `req.method`.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Basic Routing",
  },
  {
    id: "node-http-post-data",
    title: "Node.js: Handling POST Data",
    description:
      "Show how to handle an incoming POST request and parse its body data in a plain Node.js HTTP server.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show POST Handling",
  },
  {
    id: "node-util-promisify",
    title: "Node.js: `util.promisify`",
    description:
      "Demonstrate how to use `util.promisify` to convert a function that uses an error-first callback into a function that returns a promise.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show `promisify`",
  },
  {
    id: "node-zlib-module-conceptual",
    title: "Node.js: Zlib Module (Conceptual)",
    description:
      "Explain how the `zlib` module can be used with streams to compress and decompress data, for example, to create gzipped files.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Zlib",
  },
  {
    id: "node-cluster-module-conceptual",
    title: "Node.js: Cluster Module (Conceptual)",
    description:
      "Explain how the `cluster` module allows you to create child processes (workers) that share server ports, enabling a Node.js application to take advantage of multi-core systems.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Clustering",
  },
  {
    id: "node-dns-module",
    title: "Node.js: DNS Module",
    description:
      "Demonstrate using the `dns` module to perform a DNS lookup to find the IP address for a given hostname.",
    category: "Node.js & Backend JS",
    inputs: [
      {
        id: "hostname",
        label: "Hostname",
        type: "text",
        defaultValue: "example.com",
      },
    ],
    buttonText: "Lookup DNS",
  },
  {
    id: "node-repl-conceptual",
    title: "Node.js: REPL (Conceptual)",
    description:
      "Explain what the Node.js REPL (Read-Eval-Print Loop) is and how to start it from the command line to quickly test JavaScript code.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain REPL",
  },
  {
    id: "node-caching-conceptual",
    title: "Node.js: In-Memory Caching",
    description:
      "Explain a simple in-memory caching strategy for a Node.js server to reduce database load, and discuss its limitations.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Caching",
  },
  {
    id: "node-v8-module-conceptual",
    title: "Node.js: V8 Module (Conceptual)",
    description:
      "Explain how the `v8` module provides access to information about the V8 engine's memory usage and heap statistics.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain V8 Module",
  },
  {
    id: "node-timers-module",
    title: "Node.js: Timers Module",
    description:
      "Explain the different timer functions in Node.js: `setTimeout`, `setInterval`, and `setImmediate`, and their order of execution in the event loop.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Timers",
  },
  {
    id: "node-rest-api-conceptual",
    title: "REST API Design (Conceptual)",
    description:
      "Explain the core principles of a RESTful API, including resources, HTTP verbs (GET, POST, PUT, DELETE), and statelessness.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain REST",
  },
  {
    id: "node-websocket-conceptual",
    title: "WebSockets in Node.js (Conceptual)",
    description:
      "Explain how to set up a WebSocket server in Node.js (using a library like `ws`) for real-time, bidirectional communication with clients.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain WebSockets",
  },
  {
    id: "node-authentication-jwt-conceptual",
    title: "Authentication with JWT (Conceptual)",
    description:
      "Explain the process of stateless authentication using JSON Web Tokens (JWT) in a Node.js backend.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain JWT Auth",
  },
  {
    id: "node-error-handling-middleware",
    title: "Express: Error Handling Middleware",
    description:
      "Show how to create a custom, centralized error-handling middleware in Express.js.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show Error Middleware",
  },
  {
    id: "node-process-signals-conceptual",
    title: "Node.js: Process Signals (Conceptual)",
    description:
      "Explain how a Node.js application can listen for process signals like `SIGINT` (from Ctrl+C) and `SIGTERM` to perform graceful shutdowns.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Signals",
  },
  {
    id: "node-esm-in-node",
    title: "ES Modules in Node.js",
    description:
      "Explain how to enable and use the native ES Module syntax (`import`/`export`) in a Node.js project.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain ESM in Node",
  },
  {
    id: "node-security-best-practices",
    title: "Security Best Practices (Conceptual)",
    description:
      "List and explain key security best practices for a Node.js application, such as data validation, using rate limiting, and securing dependencies.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "List Best Practices",
  },
  {
    id: "node-express-static-files",
    title: "Express: Serving Static Files",
    description:
      "Show how to use the `express.static` built-in middleware to serve static files like HTML, CSS, and client-side JavaScript.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show `express.static`",
  },
  {
    id: "node-orm-conceptual",
    title: "ORM (Object-Relational Mapping)",
    description:
      "Explain the concept of an ORM (like Sequelize or Prisma) and how it maps database tables to objects in your application code.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain ORMs",
  },
  {
    id: "node-process-nexttick",
    title: "`process.nextTick()`",
    description:
      "Explain `process.nextTick()`, which defers the execution of a function until the next pass around the event loop, running before other I/O events.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain `nextTick`",
  },
  {
    id: "node-https-server",
    title: "Node.js: HTTPS Server",
    description:
      "Show the conceptual code for creating an HTTPS server in Node.js, which requires an SSL certificate and key.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Show HTTPS Server",
  },
  {
    id: "node-async-hooks-conceptual",
    title: "Async Hooks (Conceptual)",
    description:
      "Explain the `async_hooks` module as an advanced API for tracking the lifetime of asynchronous resources in a Node.js application.",
    category: "Node.js & Backend JS",
    inputs: [],
    buttonText: "Explain Async Hooks",
  },
];
