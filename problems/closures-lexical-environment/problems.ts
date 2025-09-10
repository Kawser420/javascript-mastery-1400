import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'closure-counter',
        title: 'Closure Counter',
        description: 'Create a counter function using a closure. The outer function should be called once, and the returned inner function should increment a private counter on each call.',
        category: 'Closures & Lexical Environment',
        inputs: [],
        buttonText: 'Increment Counter',
    },
    {
        id: 'lexical-scope',
        title: 'Lexical Scoping',
        description: 'Demonstrate lexical scoping where an inner function has access to the variables of its outer (parent) function.',
        category: 'Closures & Lexical Environment',
        inputs: [],
        buttonText: 'Run Scope Test',
    },
    {
        id: 'private-data-closure',
        title: 'Private Data with Closures',
        description: 'Create a "person" object with private data for a name, exposing only methods to get or set the name, using a closure.',
        category: 'Closures & Lexical Environment',
        inputs: [
            { id: 'initialName', label: 'Initial Name', type: 'text', defaultValue: 'John' },
        ],
        buttonText: 'Test Private Name',
    },
];