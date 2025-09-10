import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'simple-object-access',
        title: 'Access Object Property',
        description: 'Given a simple JSON object, write a function that accesses and returns the value of a specific property.',
        category: 'Objects & Prototypes',
        inputs: [
        { id: 'json', label: 'JSON Object', type: 'textarea', placeholder: '{"name": "John", "age": 30}', defaultValue: '{"name": "John", "age": 30, "city": "New York"}' },
        { id: 'key', label: 'Property Key', type: 'text', placeholder: 'e.g., age', defaultValue: 'age' },
        ],
        buttonText: 'Get Property',
    },
    {
        id: 'get-object-keys',
        title: 'Get Object Keys',
        description: 'Write a function that returns an array of a given object\'s own enumerable property names (keys).',
        category: 'Objects & Prototypes',
        inputs: [
        { id: 'json', label: 'JSON Object', type: 'textarea', placeholder: '{"a": 1, "b": 2}', defaultValue: '{"id": 101, "title": "My Post", "active": true}' },
        ],
        buttonText: 'Get Keys',
    },
    {
        id: 'get-object-values',
        title: 'Get Object Values',
        description: 'Write a function that returns an array of a given object\'s own enumerable property values.',
        category: 'Objects & Prototypes',
        inputs: [
        { id: 'json', label: 'JSON Object', type: 'textarea', placeholder: '{"a": 1, "b": 2}', defaultValue: '{"id": 101, "title": "My Post", "active": true}' },
        ],
        buttonText: 'Get Values',
    },
    {
        id: 'merge-objects',
        title: 'Merge Two Objects',
        description: 'Write a function that merges two objects into one. If keys conflict, the second object\'s value should be used.',
        category: 'Objects & Prototypes',
        inputs: [
        { id: 'json1', label: 'First JSON Object', type: 'textarea', placeholder: '{"a": 1, "b": 2}', defaultValue: '{"name": "User", "isAdmin": false}' },
        { id: 'json2', label: 'Second JSON Object', type: 'textarea', placeholder: '{"b": 3, "c": 4}', defaultValue: '{"isAdmin": true, "theme": "dark"}' },
        ],
        buttonText: 'Merge',
    },
];