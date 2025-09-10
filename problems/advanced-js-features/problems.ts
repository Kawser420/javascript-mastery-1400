import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'generators-basic',
        title: 'Basic Generators',
        description: 'Create a simple generator function that yields a sequence of numbers.',
        category: 'Advanced JS Features',
        inputs: [],
        buttonText: 'Generate Numbers',
    },
    {
        id: 'symbol-data-type',
        title: '`Symbol` Data Type',
        description: 'Create a symbol and use it as a property key in an object to demonstrate its use for creating unique, non-enumerable properties.',
        category: 'Advanced JS Features',
        inputs: [],
        buttonText: 'Use Symbol',
    },
    {
        id: 'proxy-basic',
        title: 'Basic Proxy',
        description: 'Create a Proxy to intercept and log "get" and "set" operations on a target object.',
        category: 'Advanced JS Features',
        inputs: [],
        buttonText: 'Test Proxy',
    },
];