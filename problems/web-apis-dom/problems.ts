import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'dom-get-element-by-id',
        title: 'Get Element by ID',
        description: 'Use `document.getElementById` to select a specific DOM element and change its text content.',
        category: 'Web APIs & DOM',
        inputs: [],
        buttonText: 'Change Text by ID',
    },
    {
        id: 'dom-addeventlistener',
        title: 'Add Event Listener',
        description: 'Attach a `click` event listener to a button that triggers an alert.',
        category: 'Web APIs & DOM',
        inputs: [],
        buttonText: 'Click Me (Event Listener)',
    },
    {
        id: 'dom-toggle-class',
        title: 'Toggle a CSS Class',
        description: 'Use `element.classList.toggle()` to add or remove a CSS class from an element, changing its appearance.',
        category: 'Web APIs & DOM',
        inputs: [],
        buttonText: 'Toggle Highlight',
    },
    {
        id: 'localstorage-set-get',
        title: 'LocalStorage: Set & Get',
        description: 'Use `localStorage.setItem()` to save data that persists even after the browser is closed, and `localStorage.getItem()` to retrieve it.',
        category: 'Web APIs & DOM',
        inputs: [
            { id: 'key', label: 'Key', type: 'text', defaultValue: 'userTheme' },
            { id: 'value', label: 'Value', type: 'text', defaultValue: 'dark' },
        ],
        buttonText: 'Save to localStorage',
    },
];