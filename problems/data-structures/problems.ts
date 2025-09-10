import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'implement-stack',
        title: 'Implement a Stack',
        description: 'Implement a Stack class with `push`, `pop`, `peek`, and `isEmpty` methods. A stack is a LIFO (Last-In, First-Out) data structure.',
        category: 'Data Structures',
        inputs: [],
        buttonText: 'Test Stack',
    },
    {
        id: 'implement-queue',
        title: 'Implement a Queue',
        description: 'Implement a Queue class with `enqueue`, `dequeue`, `front`, and `isEmpty` methods. A queue is a FIFO (First-In, First-Out) data structure.',
        category: 'Data Structures',
        inputs: [],
        buttonText: 'Test Queue',
    },
    {
        id: 'implement-singly-linked-list',
        title: 'Implement a Singly Linked List',
        description: 'Implement a Singly Linked List with methods to `append`, `prepend`, and `print`.',
        category: 'Data Structures',
        inputs: [],
        buttonText: 'Test Linked List',
    },
    {
        id: 'binary-search-tree-traversal',
        title: 'Binary Search Tree Traversals',
        description: 'Implement a Binary Search Tree (BST) and its three main traversal methods: In-order, Pre-order, and Post-order.',
        category: 'Data Structures',
        inputs: [
            {id: 'arr', label: 'Values to insert (comma-separated)', type: 'text', defaultValue: '8,3,10,1,6,14,4,7,13'}
        ],
        buttonText: 'Traverse BST',
    },
];