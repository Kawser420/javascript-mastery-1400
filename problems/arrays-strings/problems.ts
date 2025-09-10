import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'reverse-string',
        title: 'Reverse a String',
        description: 'Write a function that takes a string and returns a new string with the characters in reverse order.',
        category: 'Arrays & Strings',
        inputs: [
        { id: 'str', label: 'String', type: 'text', placeholder: 'Enter text to reverse', defaultValue: 'hello world' },
        ],
        buttonText: 'Reverse It',
    },
    {
        id: 'find-longest-word',
        title: 'Find Longest Word in String',
        description: 'Write a function that takes a sentence and returns the longest word.',
        category: 'Arrays & Strings',
        inputs: [
        { id: 'sentence', label: 'Sentence', type: 'text', placeholder: 'Enter a sentence', defaultValue: 'The quick brown fox jumped over the lazy dog' },
        ],
        buttonText: 'Find Longest',
    },
    {
        id: 'remove-duplicates-from-array',
        title: 'Remove Duplicates from Array',
        description: 'Write a function that takes an array (comma-separated string) and returns a new array with all duplicate elements removed.',
        category: 'Arrays & Strings',
        inputs: [
        { id: 'arr', label: 'Array (comma-separated)', type: 'text', placeholder: '1, 2, 2, 3, 4, 4, 5', defaultValue: '1, 2, 2, 3, 4, 4, 5' },
        ],
        buttonText: 'Remove Duplicates',
    },
    {
        id: 'array-chunking',
        title: 'Array Chunking',
        description: 'Write a function that splits an array into smaller arrays of a specified size.',
        category: 'Arrays & Strings',
        inputs: [
        { id: 'arr', label: 'Array (comma-separated)', type: 'text', placeholder: 'a, b, c, d, e, f, g', defaultValue: 'a,b,c,d,e,f,g' },
        { id: 'size', label: 'Chunk Size', type: 'number', placeholder: 'e.g., 2', defaultValue: 2 },
        ],
        buttonText: 'Chunk Array',
    },
];