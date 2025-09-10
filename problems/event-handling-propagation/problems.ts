import { Problem } from '../../types';

export const problems: Problem[] = [
    {
        id: 'event-bubbling',
        title: 'Event Bubbling',
        description: 'Demonstrate event bubbling by attaching click listeners to three nested elements (outer, middle, inner). Clicking the inner element should trigger all three listeners.',
        category: 'Event Handling & Propagation',
        inputs: [],
        buttonText: 'Test Bubbling',
    },
    {
        id: 'event-delegation',
        title: 'Event Delegation',
        description: 'Attach a single event listener to a parent element to handle clicks from its child elements, a pattern known as event delegation.',
        category: 'Event Handling & Propagation',
        inputs: [],
        buttonText: 'Test Delegation',
    },
    {
        id: 'stop-propagation',
        title: 'Stop Event Propagation',
        description: 'Similar to the bubbling example, but use `event.stopPropagation()` on the middle element to prevent the click event from reaching the outer element.',
        category: 'Event Handling & Propagation',
        inputs: [],
        buttonText: 'Test Stop Propagation',
    },
];