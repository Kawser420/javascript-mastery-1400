import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'es6-classes',
        title: 'ES6 Classes',
        description: 'Create a simple `Person` class with a constructor and a `greet` method.',
        category: 'Classes & OOP',
        inputs: [
        { id: 'name', label: 'Name', type: 'text', placeholder: 'e.g., Alice', defaultValue: 'Alice' },
        ],
        buttonText: 'Create and Greet',
    },
    {
        id: 'class-inheritance',
        title: 'Class Inheritance with `extends`',
        description: 'Create a `Student` class that inherits from the `Person` class and adds a `study` method.',
        category: 'Classes & OOP',
        inputs: [
        { id: 'name', label: 'Student Name', type: 'text', defaultValue: 'Bob' },
        { id: 'subject', label: 'Subject', type: 'text', defaultValue: 'Math' },
        ],
        buttonText: 'Create Student',
    },
    {
        id: 'class-static-methods',
        title: 'Class Static Methods',
        description: 'Define and call a static method on a class. Static methods are called on the class itself, not on instances of the class.',
        category: 'Classes & OOP',
        inputs: [],
        buttonText: 'Call Static Method',
    },
    {
        id: 'class-getters-setters',
        title: 'Class Getters and Setters',
        description: 'Use `get` and `set` syntax to create a computed property in a class.',
        category: 'Classes & OOP',
        inputs: [
        { id: 'firstName', label: 'First Name', type: 'text', defaultValue: 'John' },
        { id: 'lastName', label: 'Last Name', type: 'text', defaultValue: 'Doe' },
        ],
        buttonText: 'Use Getter/Setter',
    },
];