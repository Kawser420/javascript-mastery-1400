import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'factorial-of-number-recursive',
        title: 'Factorial of a Number (Recursive)',
        description: 'Write a recursive function to calculate the factorial of a non-negative integer. Factorial of n (n!) is the product of all positive integers up to n.',
        category: 'Recursion',
        inputs: [
        { id: 'num', label: 'Number', type: 'number', placeholder: 'Enter a non-negative integer', defaultValue: 5 },
        ],
        buttonText: 'Calculate Factorial',
    },
    {
        id: 'fibonacci-sequence-recursive',
        title: 'Fibonacci Number (Recursive)',
        description: 'Write a recursive function to find the Nth number in the Fibonacci sequence. Note: This is inefficient for large N but demonstrates recursion well.',
        category: 'Recursion',
        inputs: [
        { id: 'count', label: 'Nth number to find', type: 'number', placeholder: 'Enter a positive integer', defaultValue: 10 },
        ],
        buttonText: 'Find Nth Fibonacci',
    },
    {
        id: 'sum-array-recursive',
        title: 'Sum Array Elements (Recursive)',
        description: 'Write a recursive function that calculates the sum of all numbers in an array.',
        category: 'Recursion',
        inputs: [
            { id: 'arr', label: 'Array of numbers (comma-separated)', type: 'text', defaultValue: '1, 2, 3, 4, 5' },
        ],
        buttonText: 'Sum Array',
    },
];