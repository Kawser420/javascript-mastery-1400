import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'arrow-function-map',
        title: 'Arrow Functions & `.map()`',
        description: 'Given an array of numbers (as a comma-separated string), use an ES6 arrow function and the `.map()` method to create a new array where each number is doubled.',
        category: 'ES6+ Features',
        inputs: [
        { id: 'arr', label: 'Array of numbers (comma-separated)', type: 'text', placeholder: '1, 2, 3, 4', defaultValue: '1, 2, 3, 4' },
        ],
        buttonText: 'Double Numbers',
    },
    {
        id: 'template-literals',
        title: 'Template Literals',
        description: 'Use template literals (backticks) to create a multi-line string with embedded expressions.',
        category: 'ES6+ Features',
        inputs: [
        { id: 'name', label: 'Name', type: 'text', placeholder: 'e.g., Jane', defaultValue: 'Jane' },
        { id: 'item', label: 'Item', type: 'text', placeholder: 'e.g., apples', defaultValue: 'apples' },
        ],
        buttonText: 'Create String',
    },
    {
        id: 'array-destructuring',
        title: 'Array Destructuring',
        description: 'Use destructuring assignment to unpack values from an array into distinct variables.',
        category: 'ES6+ Features',
        inputs: [
        { id: 'arr', label: 'Array (comma-separated)', type: 'text', placeholder: '1, 2, 3', defaultValue: '1, 2, 3' },
        ],
        buttonText: 'Destructure Array',
    },
    {
        id: 'object-destructuring',
        title: 'Object Destructuring',
        description: 'Use destructuring assignment to unpack properties from a JSON object into distinct variables.',
        category: 'ES6+ Features',
        inputs: [
        { id: 'json', label: 'JSON Object', type: 'textarea', placeholder: '{"name": "John", "age": 30}', defaultValue: '{"name": "John", "age": 30}' },
        ],
        buttonText: 'Destructure Object',
    },
    {
        id: 'rest-parameters',
        title: 'Rest Parameters',
        description: 'Write a function that uses rest parameters to accept an indefinite number of arguments as an array and sum them.',
        category: 'ES6+ Features',
        inputs: [
        { id: 'args', label: 'Numbers to sum (comma-separated)', type: 'text', placeholder: '1, 2, 3, 4', defaultValue: '1, 2, 3, 4' },
        ],
        buttonText: 'Sum with Rest',
    },
    {
        id: 'spread-operator-arrays',
        title: 'Spread Operator for Arrays',
        description: 'Use the spread operator (`...`) to combine two arrays into a single new array.',
        category: 'ES6+ Features',
        inputs: [
        { id: 'arr1', label: 'First Array (comma-separated)', type: 'text', placeholder: 'a, b, c', defaultValue: 'a, b, c' },
        { id: 'arr2', label: 'Second Array (comma-separated)', type: 'text', placeholder: 'd, e, f', defaultValue: 'd, e, f' },
        ],
        buttonText: 'Combine Arrays',
    },
];