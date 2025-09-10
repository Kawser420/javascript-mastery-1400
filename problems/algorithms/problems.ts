import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'two-sum',
        title: 'Two Sum',
        description: 'Given an array of numbers and a target, return the indices of the two numbers that add up to the target.',
        category: 'Algorithms',
        inputs: [
            { id: 'arr', label: 'Array of numbers (comma-separated)', type: 'text', defaultValue: '2, 7, 11, 15' },
            { id: 'target', label: 'Target Sum', type: 'number', defaultValue: 9 },
        ],
        buttonText: 'Find Indices',
    },
    {
        id: 'binary-search',
        title: 'Binary Search',
        description: 'Implement a binary search algorithm to find the index of a target value in a sorted array.',
        category: 'Algorithms',
        inputs: [
            { id: 'arr', label: 'Sorted Array (comma-separated)', type: 'text', defaultValue: '2, 5, 7, 8, 11, 12' },
            { id: 'target', label: 'Target Value', type: 'number', defaultValue: 11 },
        ],
        buttonText: 'Binary Search',
    },
    {
        id: 'bubble-sort',
        title: 'Bubble Sort',
        description: 'Implement the bubble sort algorithm to sort an array of numbers in ascending order.',
        category: 'Algorithms',
        inputs: [
            { id: 'arr', label: 'Array of numbers (comma-separated)', type: 'text', defaultValue: '64, 34, 25, 12, 22, 11, 90' },
        ],
        buttonText: 'Bubble Sort',
    },
    {
        id: 'fizzbuzz',
        title: 'FizzBuzz Challenge',
        description: 'Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both, print "FizzBuzz".',
        category: 'Algorithms',
        inputs: [
        { id: 'num', label: 'Count up to', type: 'number', placeholder: 'e.g., 15', defaultValue: 15 },
        ],
        buttonText: 'Run FizzBuzz',
    },
];