// HELPER
const delay = (ms: number, value?: any, shouldReject = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (shouldReject ? reject(value) : resolve(value)), ms)
  );

export const solvers: Record<string, Function> = {
  "settimeout-callback": async ({ delay: d }: { delay: any }) => {
    const ms = Number(d);
    await delay(ms);
    return `Executed after ${ms}ms.`;
  },
  "promise-creation": async () => {
    const p = new Promise((resolve) =>
      setTimeout(() => resolve("Success!"), 200)
    );
    return await p;
  },
  "promise-rejection": async () => {
    try {
      const p = new Promise((_, reject) =>
        setTimeout(() => reject("Failure!"), 200)
      );
      await p;
    } catch (e) {
      return `Caught rejection: ${e}`;
    }
    return `This should not be reached.`;
  },
  "fetch-api-data": async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      return `Fetched: "${data.title}"`;
    } catch (e) {
      return "Fetch failed. Check network connection.";
    }
  },
  "async-await-syntax": async () => {
    async function fetchTodo() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        return `Fetched: "${data.title}"`;
      } catch (e) {
        return "Fetch failed.";
      }
    }
    return await fetchTodo();
  },
  "promise-chaining": async () => {
    return Promise.resolve(10)
      .then((val) => val * 2)
      .then((val) => val + 5);
  },
  "async-await-error-handling": async () => {
    try {
      await delay(100, "Oops!", true);
    } catch (e) {
      return `Caught: ${e}`;
    }
    return `This should not be reached.`;
  },
  "promise-all": async () => {
    const results = await Promise.all([delay(100, "A"), delay(200, "B")]);
    return `Results: [${results.join(", ")}]`;
  },
  "promise-all-rejection": async () => {
    try {
      await Promise.all([delay(100, "A"), delay(50, "Error!", true)]);
    } catch (e) {
      return `Caught rejection from the fastest promise: ${e}`;
    }
    return `This should not be reached.`;
  },
  "promise-race": async () => {
    const result = await Promise.race([
      delay(200, "Too slow"),
      delay(100, "First!"),
    ]);
    return `Result: ${result}`;
  },
  "event-loop-macrotask-microtask": () =>
    `(Conceptual) Order: 1. Sync code runs. 2. All microtasks (like .then()) run. 3. One macrotask (like setTimeout callback) runs. So, 'Promise.resolve().then()' logs before 'setTimeout(() => {}, 0)'.`,
  "callback-hell-conceptual": () =>
    `(Conceptual) Shows nested callbacks: \`task1(res1 => { task2(res2 => { task3(res3 => {}); }); });\`. This pyramid shape is hard to read and handle errors in. Promises flatten this structure.`,
  "promisify-callback-function": async () => {
    const callbackStyleFunc = (
      val: boolean,
      cb: (err: string | null, res?: string) => void
    ) => {
      setTimeout(() => (val ? cb(null, "Success") : cb("Error")), 100);
    };
    const promisified = (val: boolean) =>
      new Promise((resolve, reject) => {
        callbackStyleFunc(val, (err, res) =>
          err ? reject(err) : resolve(res)
        );
      });
    return await promisified(true);
  },
  "promise-finally": async () => {
    let status = "pending";
    await delay(100, "OK").finally(() => {
      status = "settled";
    });
    return `Final status: ${status}`;
  },
  "async-await-sequential": async () => {
    const res1 = await delay(100, "First");
    const res2 = await delay(100, "Second");
    return `${res1}, then ${res2}. Total time: ~200ms.`;
  },
  "async-await-parallel": async () => {
    const p1 = delay(100, "First");
    const p2 = delay(100, "Second");
    const [res1, res2] = await Promise.all([p1, p2]);
    return `${res1} and ${res2} ran in parallel. Total time: ~100ms.`;
  },
  "promise-allsettled": async () => {
    const results = await Promise.allSettled([
      delay(100, "OK"),
      delay(50, "Fail", true),
    ]);
    return JSON.stringify(results.map((r) => ({ status: r.status })));
  },
  "promise-any": async () => {
    const result = await Promise.any([
      delay(100, "Fail", true),
      delay(50, "Success!"),
    ]);
    return result;
  },
  "fetch-post-request": () =>
    `(Conceptual) fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ key: 'value' }) })`,
  "fetch-error-handling": () =>
    `(Conceptual) \`fetch\` only rejects on network errors. For HTTP errors (404, 500), you must check \`if (!response.ok)\` and throw an error manually.`,
  "setinterval-and-clear": () =>
    `(Conceptual) let count=0; const id = setInterval(() => { count++; if(count>2) clearInterval(id); }, 100); Will run twice then stop.`,
  "microtask-queue-order": () =>
    `(Conceptual) Microtasks run to completion before the next macrotask. \`p.then(f1); p.then(f2);\` ensures f1 runs before f2.`,
  "async-iife": async () => {
    return await (async () => {
      return await delay(100, "Async IIFE resolved");
    })();
  },
  "promise-resolve-static": async ({ value }: { value: string }) =>
    await Promise.resolve(value),
  "promise-reject-static": async ({ reason }: { reason: string }) => {
    try {
      await Promise.reject(reason);
    } catch (e) {
      return `Caught: ${e}`;
    }
    return `This should not be reached.`;
  },
  "async-generator-conceptual": () =>
    `(Conceptual) An \`async function*() {}\` can use both \`await\` and \`yield\`. It produces an async iterator, useful for handling streams of async data.`,
  "for-await-of-loop-conceptual": () =>
    `(Conceptual) \`for await (const data of asyncIterable) { ... }\` is a special loop that consumes async iterators, handling the .next() promise automatically.`,
  "web-workers-conceptual": () =>
    `(Conceptual) A worker runs in a separate thread. \`const worker = new Worker('worker.js');\` The main thread communicates with it via \`worker.postMessage()\` and \`worker.onmessage\`.`,
  "abortcontroller-fetch": () =>
    `(Conceptual) Create a controller: \`const c = new AbortController();\`. Pass its signal to fetch: \`fetch(url, { signal: c.signal })\`. Call \`c.abort()\` to cancel the request.`,
  "async-function-return-value": () => {
    async function test() {
      return 42;
    }
    const result = test();
    return `Result is a Promise: ${result instanceof Promise}`;
  },
  "then-chain-vs-await-sequence": () =>
    `(Conceptual) \`.then(res1 => {}).then(res2 => {})\` is functionally equivalent to \`const res1 = await p1; const res2 = await p2;\`. Async/await is often more readable.`,
  "top-level-await-conceptual": () =>
    `(Conceptual) In an ES module, you can write \`const data = await fetch(url);\` at the top level, without an \`async\` function. The module execution will pause until the data is fetched.`,
  "promise-in-constructor-antipattern": () =>
    `(Conceptual) Bad: \`new Promise(res => res(someOtherPromise))\`. Good: \`Promise.resolve(someOtherPromise)\` or just \`someOtherPromise\`. Don't wrap a promise in another promise.`,
  "promise-constructor-use-case": () =>
    `(Conceptual) Use \`new Promise()\` to wrap old callback-based APIs, like \`fs.readFile(path, (err, data) => ...)\`, converting them to promises.`,
  "requestanimationframe-conceptual": () =>
    `(Conceptual) \`rAF(callback)\` tells the browser to run the callback just before the next repaint. It's the best way to do JS animations smoothly without layout thrashing.`,
  "event-loop-starvation-conceptual": () =>
    `(Conceptual) A \`while(true){}\` loop blocks the event loop entirely. A recursive microtask \`function loop() { Promise.resolve().then(loop); }\` blocks all rendering and macrotasks.`,
  "promise-from-thenable": async () => {
    const thenable = {
      then: (resolve: (v: string) => void) => resolve("It worked"),
    };
    return await Promise.resolve(thenable);
  },
  "async-function-as-method": async () => {
    class Service {
      async getData() {
        return await delay(100, "Data");
      }
    }
    const s = new Service();
    return await s.getData();
  },
  "async-error-propagation": async () => {
    const inner = async () => {
      throw new Error("Inner error");
    };
    const outer = async () => {
      await inner();
    };
    try {
      await outer();
    } catch (e: any) {
      return `Caught in top level: ${e.message}`;
    }
    return `This should not be reached.`;
  },
  "microtask-vs-macrotask-timing": () =>
    `(Conceptual) Order: sync > process.nextTick > promise.then > setImmediate > setTimeout(0). Microtasks (nextTick, then) always run before the next macrotask (Immediate, Timeout).`,
  "promise-race-rejection": async () => {
    try {
      await Promise.race([delay(100, "Too slow"), delay(50, "Fail!", true)]);
    } catch (e) {
      return `Caught rejection: ${e}`;
    }
    return `This should not be reached.`;
  },
  "async-await-in-map": () =>
    `(Conceptual) \`[1,2].map(async id => ...)\` returns an array of Promises: \`[Promise, Promise]\`. You must wrap it in \`Promise.all()\` to wait for them all.`,
  "promise-any-rejection": async () => {
    try {
      await Promise.any([
        delay(50, "Error 1", true),
        delay(100, "Error 2", true),
      ]);
    } catch (e: any) {
      return `Caught AggregateError with ${e.errors.length} errors.`;
    }
    return `This should not be reached.`;
  },
  "fetch-with-headers": () =>
    `(Conceptual) \`fetch(url, { headers: { 'Authorization': 'Bearer TOKEN', 'Content-Type': 'application/json' } })\`. Headers are passed in the options object.`,
  "promise-chain-error-handling": async () => {
    try {
      await Promise.resolve()
        .then(() => {
          throw new Error("Failure in chain");
        })
        .then(() => {
          /* this is skipped */
        });
    } catch (e: any) {
      return `Caught at the end: ${e.message}`;
    }
    return `This should not be reached.`;
  },
  "callback-vs-promise-readability": () =>
    `(Conceptual) Callback: \`a(resA => b(resB => c()))\`. Promise: \`a().then(resA => b(resA)).then(resB => c(resB))\`. The promise chain is flat and easier to read.`,
  "async-await-destructuring": async () => {
    const getData = () => Promise.resolve({ user: "test", data: [1, 2] });
    const { user, data } = await getData();
    return `User: ${user}, Data: ${data.join(",")}`;
  },
  "creating-promise-race-manually": () =>
    `(Conceptual) Create a new Promise. Iterate over the input array of promises. For each promise, use .then(resolve, reject). The first one to call resolve or reject will settle the main promise.`,
  "awaiting-non-promise": async () => {
    const result = await 42;
    return `Awaited value: ${result}`;
  },
  "async-iteration-protocol-conceptual": () =>
    `(Conceptual) An async iterable has a \`[Symbol.asyncIterator]\` method that returns an async iterator. The iterator has a \`.next()\` method which returns a Promise resolving to \`{value, done}\`.`,
  "custom-promise-class-conceptual": () =>
    `(Conceptual) \`class MyPromise extends Promise { static get [Symbol.species]() { return Promise; } }\` allows creating subclasses. Overriding species ensures methods like .then return a base Promise.`,
  "promise-chain-vs-nested-then": () =>
    `(Conceptual) Bad (nested): \`p1.then(() => p2.then())\`. Good (chain): \`p1.then(() => p2).then(() => ...)\`. Chaining is flat and has better error propagation.`,
  "async-await-in-loops": async () => {
    let result = "";
    const items = [1, 2];
    for (const item of items) {
      await delay(50);
      result += `${item} `;
    }
    return `Processed sequentially: ${result.trim()}`;
  },
  "fetch-request-mode": () =>
    `(Conceptual) \`mode: 'cors'\` (default) allows cross-origin requests. \`mode: 'no-cors'\` allows them but gives an opaque response. \`mode: 'same-origin'\` forbids them.`,
  "async-function-in-object": async () => {
    const service = {
      async getData() {
        return await delay(50, "Data");
      },
    };
    return await service.getData();
  },
  "promise-chain-with-sync-return": async () => {
    const result = await Promise.resolve(10).then((val) => val * 2);
    return `Result: ${result}`;
  },
  "async-resource-management": () =>
    `(Conceptual) \`const resource = await acquire(); try { await use(resource); } finally { await release(resource); }\`. The \`finally\` block guarantees release.`,
  "indexeddb-promise-wrapper": () =>
    `(Conceptual) Wrap an IDBRequest in a promise: \`return new Promise((res, rej) => { request.onsuccess = () => res(request.result); request.onerror = () => rej(request.error); })\`.`,
  "websocket-communication-conceptual": () =>
    `(Conceptual) \`const ws = new WebSocket(url)\`. Use \`ws.onmessage = event => ...\` to receive data and \`ws.send('hello')\` to send. It's event-driven, not request-response.`,
  "server-sent-events-conceptual": () =>
    `(Conceptual) \`const sse = new EventSource(url)\`. Use \`sse.onmessage = event => ...\` to receive a one-way stream of events from the server.`,
  "async-batching-requests": () =>
    `(Conceptual) Create a queue array and a timer. When a function is called, add its args to the queue. Use a debounced function to send the entire queue in one API call after a short delay.`,
  "promise-timeout-race": async ({ timeout }: { timeout: any }) => {
    const withTimeout = (promise: Promise<any>, ms: number) => {
      const timeoutPromise = delay(ms, "Timeout!", true);
      return Promise.race([promise, timeoutPromise]);
    };
    const slowPromise = delay(200, "Success");
    try {
      return await withTimeout(slowPromise, Number(timeout));
    } catch (e) {
      return `Caught: ${e}`;
    }
  },
  "async-retry-pattern": async () => {
    let attempts = 0;
    const mightFail = async () => {
      attempts++;
      if (attempts < 3) throw new Error("Failed");
      return "Succeeded";
    };
    const retry = async (fn: () => Promise<any>, maxAttempts: number) => {
      for (let i = 0; i < maxAttempts; i++) {
        try {
          return await fn();
        } catch (e) {
          if (i === maxAttempts - 1) throw e;
        }
      }
    };
    return await retry(mightFail, 3);
  },
  "mutationobserver-conceptual": () =>
    `(Conceptual) An observer watches a DOM element for changes (e.g., child additions, attribute changes). When a change occurs, its callback is executed asynchronously as a microtask.`,
  "intersectionobserver-conceptual": () =>
    `(Conceptual) An observer watches a DOM element. Its callback runs asynchronously when the element scrolls into or out of the viewport, enabling lazy loading of images and infinite scroll.`,
  "web-bluetooth-conceptual": () =>
    `(Conceptual) Uses promises: \`navigator.bluetooth.requestDevice(...).then(device => device.gatt.connect()).then(server => ...)\`. Each step of connecting and reading characteristics is async.`,
  "web-usb-conceptual": () =>
    `(Conceptual) Similar to Bluetooth, it's promise-based: \`navigator.usb.requestDevice(...).then(device => device.open()).then(() => ...)\`. Used for interacting with USB devices from the browser.`,
  "async-clipboard-api": () =>
    `(Conceptual) \`navigator.clipboard.writeText('hello').then(...)\` writes to the clipboard. \`navigator.clipboard.readText().then(text => ...)\` reads from it. Both are async and return promises.`,
  "async-queue-processing": async () => {
    class AsyncQueue {
      private queue: (() => Promise<any>)[] = [];
      private running = false;
      add(task: () => Promise<any>) {
        this.queue.push(task);
        this.run();
      }
      async run() {
        if (this.running || this.queue.length === 0) return;
        this.running = true;
        const task = this.queue.shift()!;
        await task();
        this.running = false;
        this.run();
      }
    }
    // This is conceptual; a real run would need to manage state outside.
    return `(Conceptual) A queue processes tasks sequentially using an async loop and a 'running' flag.`;
  },
  "macrotask-rendering-conceptual": () =>
    `(Conceptual) The browser typically renders after a macrotask is complete. If you run \`setTimeout(f1); setTimeout(f2);\`, the browser may render between f1 and f2. If you run \`p.then(f1); p.then(f2);\`, it will not render between the microtasks f1 and f2.`,
  "promise-is-thenable": () =>
    `(Conceptual) A simple check is \`val !== null && typeof val === 'object' && typeof val.then === 'function'\`. Promise libraries use this for interoperability.`,
  "async-await-vs-generators": () =>
    `(Conceptual) An async function is like a generator that only yields promises. A transpiler like Babel turns \`async/await\` into a state machine using a generator and a helper function that calls \`.next()\` when promises resolve.`,
  "promise-chain-flattening": async () => {
    const result = await Promise.resolve().then(() => {
      return new Promise((res) => res("Inner promise resolved"));
    });
    return result;
  },
  "fetch-credentials-option": () =>
    `(Conceptual) \`credentials: 'include'\` sends cookies even for cross-origin requests. \`same-origin\` (default) sends them only for same-origin requests. \`omit\` never sends cookies.`,
  "event-loop-node-vs-browser": () =>
    `(Conceptual) Node's loop has distinct phases (timers, I/O, immediates, etc.). Browsers have a simpler model with just macrotask and microtask queues. This can lead to minor ordering differences, especially with \`setImmediate\`.`,
  "async-sleep-function": async ({ ms }: { ms: any }) => {
    const sleep = (d: number) => new Promise((res) => setTimeout(res, d));
    const start = Date.now();
    await sleep(Number(ms));
    const end = Date.now();
    return `Slept for approximately ${end - start}ms.`;
  },
  "promise-callback-timing": async () => {
    let result = "A";
    Promise.resolve().then(() => {
      result += "C";
    });
    result += "B";
    await delay(10); // wait for microtask to run
    return `Final result: ${result}`; // ABC
  },
  "async-function-composition": () =>
    `(Conceptual) \`async function composed() { const res1 = await fn1(); const res2 = await fn2(res1); return res2; }\`. The flow is naturally sequential.`,
  "promise-all-vs-allsettled": () =>
    `(Conceptual) Use \`Promise.all\` when you need all operations to succeed. Use \`Promise.allSettled\` when you want to know the outcome of all operations, even if some fail.`,
  "race-vs-any": () =>
    `(Conceptual) Use \`Promise.race\` for a timeout (race against a rejecting timer). Use \`Promise.any\` for redundancy (race against multiple data sources and take the first successful one).`,
  "async-await-in-foreach-pitfall": () =>
    `(Conceptual) \`[1,2].forEach(async i => await delay(10))\` does not wait. The loop finishes and the function returns before the delays are over. Use \`for...of\` for sequential awaiting.`,
  "async-function-constructor-conceptual": () =>
    `(Conceptual) \`const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;\`. It's a way to create async functions from strings, but it has the same security risks as \`eval\`.`,
  "await-in-conditional": async () => {
    const condition = true;
    const result = condition ? await delay(50, "A") : await delay(50, "B");
    return `Result: ${result}`;
  },
  "promise-chain-return-value": async () => {
    const p = Promise.reject("Initial Error").catch((err) => {
      return "Default Value"; // Return a value from .catch
    });
    return await p;
  },
  "async-mutex-conceptual": () =>
    `(Conceptual) Create a lock promise that is initially resolved. To acquire the lock, chain onto the previous lock promise. The body of your operation is in a .then(). The new lock promise becomes the result of that .then(). Release the lock in a .finally().`,
  "promise-withresolvables": () =>
    `(Conceptual) \`const { promise, resolve, reject } = Promise.withResolvables();\` creates a promise and exposes its resolve/reject functions, which is useful for complex async patterns or converting event listeners.`,
  "fetch-response-types": () =>
    `(Conceptual) \`response.json()\` parses as JSON. \`response.text()\` returns the raw text. \`response.blob()\` returns a Blob object, useful for files/images. \`response.formData()\` for form data.`,
  "messagechannel-conceptual": () =>
    `(Conceptual) \`const channel = new MessageChannel();\` Send one port to another context (e.g., iframe or worker) via \`postMessage\`. Then both contexts can communicate on their respective ports with \`port.postMessage\` and \`port.onmessage\`.`,
  "web-locks-api-conceptual": () =>
    `(Conceptual) \`navigator.locks.request('my_lock', async lock => { /* critical section */ await ... })\`. The API ensures that only one tab/worker can acquire the lock named 'my_lock' at a time.`,
  "promise-then-onfulfilled-onrejected": async () => {
    return await Promise.reject("Error").then(
      (val) => `Success: ${val}`,
      (err) => `Rejected: ${err}`
    );
  },
  "async-await-return-promise": async () => {
    const fn1 = async () => "data";
    const fn2 = () => Promise.resolve("data");
    return `(await fn1()) === (await fn2()) is ${
      (await fn1()) === (await fn2())
    }`;
  },
  "broadcast-channel-conceptual": () =>
    `(Conceptual) In Tab 1: \`const bc = new BroadcastChannel('my_channel'); bc.postMessage('hello');\`. In Tab 2: \`const bc = new BroadcastChannel('my_channel'); bc.onmessage = e => ...\`. Allows simple cross-tab communication.`,
  "what-is-a-macrotask-conceptual": () =>
    `(Conceptual) A Macrotask (or Task) is a self-contained piece of work the browser needs to do, like running a \`setTimeout\` callback, handling a user event (click, keypress), or parsing HTML. The event loop processes one macrotask per tick.`,
  "what-is-a-microtask-conceptual": () =>
    `(Conceptual) A Microtask is a short function that must be run after the current macrotask completes, but before the next macrotask begins. The microtask queue is flushed completely after each macrotask. Examples: \`Promise.then\`, \`queueMicrotask\`.`,
  "queuemicrotask-api": async () => {
    let order = "";
    setTimeout(() => (order += "C"), 0);
    queueMicrotask(() => (order += "B"));
    order += "A";
    await delay(10); // Wait for both tasks to run
    return `Execution order: ${order}`; // ABC
  },
  "promise-unwrapping-conceptual": () =>
    `(Conceptual) If a \`.then()\` handler returns a Promise (p2), the chain doesn't resolve with p2 itself. Instead, it waits for p2 to settle, and adopts its fulfillment value or rejection reason. This keeps chains flat.`,
  "async-pool-pattern-conceptual": () =>
    `(Conceptual) To run 100 tasks with a concurrency of 5: Create an array of 5 "worker" promises. Each worker, upon completion, pulls the next task from the main list and runs it. Use \`Promise.all()\` on the worker array to know when everything is done.`,
};
