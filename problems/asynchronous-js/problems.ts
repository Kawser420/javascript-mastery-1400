import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'fetch-api-data',
        title: 'Fetch API Data',
        description: 'Use the Fetch API to get data from a public API (JSONPlaceholder). Click the button to fetch the title of the first todo item.',
        category: 'Asynchronous JS',
        inputs: [],
        buttonText: 'Fetch Todo',
    },
    {
        id: 'async-await-syntax',
        title: '`async/await` Syntax',
        description: 'Rewrite the Fetch API example using the more modern `async/await` syntax for cleaner asynchronous code.',
        category: 'Asynchronous JS',
        inputs: [],
        buttonText: 'Fetch with async/await',
    },
    {
        id: 'settimeout-callback',
        title: '`setTimeout` Callback',
        description: 'Use `setTimeout` to execute a function after a specified delay.',
        category: 'Asynchronous JS',
        inputs: [
        { id: 'delay', label: 'Delay (ms)', type: 'number', placeholder: 'e.g., 2000', defaultValue: 1000 },
        ],
        buttonText: 'Run with Delay',
    },
    {
        id: 'promise-chaining',
        title: 'Promise Chaining',
        description: 'Chain multiple `.then()` calls to perform a sequence of asynchronous operations.',
        category: 'Asynchronous JS',
        inputs: [],
        buttonText: 'Run Promise Chain',
    },
];