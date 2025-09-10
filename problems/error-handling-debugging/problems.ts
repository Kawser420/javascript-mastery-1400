import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'error-handling-try-catch',
        title: 'Error Handling with `try...catch`',
        description: 'Use a `try...catch` block to handle an error gracefully when parsing an invalid JSON string.',
        category: 'Error Handling & Debugging',
        inputs: [
            { id: 'json', label: 'JSON String (try making it invalid)', type: 'textarea', defaultValue: '{"name": "John", "age": 30' },
        ],
        buttonText: 'Parse JSON',
    },
    {
        id: 'custom-error',
        title: 'Throwing Custom Errors',
        description: 'Create a function that throws a custom Error object if a condition is not met (e.g., a number is negative).',
        category: 'Error Handling & Debugging',
        inputs: [
            { id: 'num', label: 'Enter a positive number', type: 'number', defaultValue: -5 },
        ],
        buttonText: 'Validate Number',
    },
];