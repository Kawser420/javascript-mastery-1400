import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'node-global-objects',
        title: 'Node.js Global Objects',
        description: 'Demonstrate some of the global objects available in Node.js that are not present in the browser, such as `process` and `__dirname`.',
        category: 'Node.js & Backend JS',
        inputs: [],
        buttonText: 'Show Node Globals',
    },
    {
        id: 'node-fs-readfile',
        title: 'Node.js File System (Conceptual)',
        description: 'Show the conceptual code for reading a file asynchronously using the Node.js `fs` module.',
        category: 'Node.js & Backend JS',
        inputs: [],
        buttonText: 'Show File Read Code',
    },
    {
        id: 'node-http-server',
        title: 'Node.js HTTP Server (Conceptual)',
        description: 'Show the conceptual code for creating a basic HTTP server using the Node.js `http` module.',
        category: 'Node.js & Backend JS',
        inputs: [],
        buttonText: 'Show Server Code',
    },
];