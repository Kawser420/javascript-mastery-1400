
// This file MUST be pure JavaScript. No imports, no types.

// FIX: Cast window to any to attach property in non-module script context.
(window as any).asyncJsSolvers = {
    'fetch-api-data': async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            return `Fetched Todo #1: "${data.title}"`;
        } catch (error: any) {
            console.error(error);
            return `Error fetching data: ${error.message}`;
        }
    },
    'async-await-syntax': async () => {
        async function fetchTodo() {
             const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
             if (!response.ok) throw new Error("API call failed");
             const data = await response.json();
             return data.title;
        }

        try {
             const title = await fetchTodo();
             return `Fetched with async/await: "${title}"`;
        } catch(error: any) {
            return `Error: ${error.message}`;
        }
    },
    'settimeout-callback': async ({delay}: { delay: any }) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Executed after ${delay}ms`);
            }, Number(delay));
        });
    },
    'promise-chaining': async () => {
        const startPromise = new Promise<number>((resolve) => {
            setTimeout(() => resolve(10), 200);
        });

        return startPromise
            .then(value => {
                return Number(value) * 2;
            })
            .then(value => {
                return Number(value) + 5;
            })
            .then(finalValue => {
                return `Promise chain result: ${finalValue}`;
            });
    },
};