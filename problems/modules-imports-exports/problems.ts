import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'es6-modules-conceptual',
        title: 'ES6 Modules (Conceptual)',
        description: 'This example conceptually demonstrates how you would use `export` to expose a function from one file and `import` to use it in another.',
        category: 'Modules & Imports/Exports',
        inputs: [],
        buttonText: 'Show Module Code',
    },
    {
        id: 'named-vs-default-export',
        title: 'Named vs. Default Export',
        description: 'Explain the difference between named exports (which can be many per file) and a default export (only one per file).',
        category: 'Modules & Imports/Exports',
        inputs: [],
        buttonText: 'Show Export Types',
    },
];