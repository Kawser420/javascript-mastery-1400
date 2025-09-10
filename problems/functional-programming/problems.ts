import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'fp-map-double',
        title: 'FP: Double Array Elements',
        description: 'Use the `map` higher-order function to create a new array where each number from the input array is doubled.',
        category: 'Functional Programming',
        inputs: [
            { id: 'arr', label: 'Array of numbers (comma-separated)', type: 'text', defaultValue: '1, 2, 3, 4, 5' },
        ],
        buttonText: 'Map and Double',
    },
    {
        id: 'fp-filter-even',
        title: 'FP: Filter for Even Numbers',
        description: 'Use the `filter` higher-order function to create a new array containing only the even numbers from the input array.',
        category: 'Functional Programming',
        inputs: [
            { id: 'arr', label: 'Array of numbers (comma-separated)', type: 'text', defaultValue: '1, 2, 3, 4, 5, 6, 7, 8' },
        ],
        buttonText: 'Filter Evens',
    },
    {
        id: 'fp-reduce-sum',
        title: 'FP: Sum with Reduce',
        description: 'Use the `reduce` higher-order function to calculate the sum of all numbers in an array.',
        category: 'Functional Programming',
        inputs: [
             { id: 'arr', label: 'Array of numbers (comma-separated)', type: 'text', defaultValue: '10, 20, 30, 40' },
        ],
        buttonText: 'Reduce to Sum',
    },
    {
        id: 'currying-simple',
        title: 'Simple Currying',
        description: 'Create a curried function `add(a)(b)` that takes two numbers in separate function calls and returns their sum.',
        category: 'Functional Programming',
        inputs: [
            { id: 'num1', label: 'First Number', type: 'number', defaultValue: 10 },
            { id: 'num2', label: 'Second Number', type: 'number', defaultValue: 20 },
        ],
        buttonText: 'Curry Add',
    },
];