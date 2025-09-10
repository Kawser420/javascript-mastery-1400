

export const explanations: Record<string, string> = {
    'event-bubbling': `
### 💡 Problem Breakdown
Event bubbling is a core concept of how events work in the HTML DOM. When an event happens on an element (like a click), it first runs the handlers on that specific element, then it "bubbles up" to its parent element, then to its parent's parent, and so on, all the way up to the \`window\` object. This problem is about observing this behavior in action.

### ⚙️ Solution Walkthrough
To demonstrate this, you would set up nested HTML elements and attach a click listener to each one.

\`\`\`html
<div id="outer">
  Outer
  <div id="middle">
    Middle
    <div id="inner">Inner</div>
  </div>
</div>
\`\`\`
\`\`\`javascript
const inner = document.getElementById('inner');
const middle = document.getElementById('middle');
const outer = document.getElementById('outer');

if (inner) inner.addEventListener('click', () => console.log('Inner clicked'));
if (middle) middle.addEventListener('click', () => console.log('Middle clicked'));
if (outer) outer.addEventListener('click', () => console.log('Outer clicked'));
\`\`\`

1.  **Setup**: We have three nested divs.
2.  **Listeners**: A separate click event listener is attached to each div.
3.  **Execution**: If you click directly on the text "Inner", you will see the following output in the console:
    *   \`Inner clicked\`
    *   \`Middle clicked\`
    *   \`Outer clicked\`
4.  **Why?**: The click event originates on the \`#inner\` div. After its handler runs, the event bubbles up to its parent, \`#middle\`, and triggers its handler. Then, it bubbles up again to \`#outer\`, triggering its handler. This is the default behavior.

### 📚 Key Concepts
-   **Event Propagation**: The process that defines how events travel through the DOM tree. It has three phases: capture, target, and bubbling. Bubbling is the most commonly used phase.
-   **Bubbling Phase**: The phase where the event travels from the target element up to its ancestors.
`,
    'event-delegation': `
### 💡 Problem Breakdown
The goal is to understand and implement event delegation. This is a powerful and performant pattern where instead of adding an event listener to every single child element in a list, you add a single listener to their common parent. The parent listener then uses information from the event object to figure out which child was actually the target of the event.

This is useful for two main reasons:
1.  **Performance**: It saves memory by only requiring one event listener instead of potentially hundreds.
2.  **Dynamic Elements**: If new child elements are added to the parent later, they will automatically be handled by the parent's listener without needing to attach a new listener to them.

### ⚙️ Solution Walkthrough
We attach one listener to a parent \`<ul>\` element to handle clicks on any of its child \`<li>\` elements.

\`\`\`html
<ul id="parent-list">
  <li>First Item</li>
  <li>Second Item</li>
  <li>Third Item</li>
</ul>
\`\`\`
\`\`\`javascript
const parentList = document.getElementById('parent-list');

if (parentList) {
    parentList.addEventListener('click', (event) => {
      // Check if the clicked element is an LI
      if (event.target && (event.target as HTMLElement).tagName === 'LI') {
        console.log('You clicked on:', (event.target as HTMLElement).textContent);
      }
    });
}
\`\`\`

1.  **Single Listener**: An event listener is attached only to the \`#parent-list\` element.
2.  **The \`event\` object**: The event handler function receives an \`event\` object as its first argument. This object contains valuable information about the event.
3.  **The \`event.target\` property**: This is the most crucial property. \`event.target\` is a reference to the actual element that the event originated from. If you click on "Second Item", \`event.target\` will be that specific \`<li>\` element, even though the listener is on the \`<ul>\`.
4.  **Conditional Check**: We check the \`tagName\` of the \`event.target\` to make sure the user clicked on an \`LI\` and not on the padding of the \`UL\` itself.
5.  **Action**: If the target was an \`LI\`, we can then perform our action, like logging its text content.

### 📚 Key Concepts
-   **Event Delegation**: A pattern for handling events efficiently by listening on a parent element rather than on every child.
-   **\`event.target\`**: A property on the event object that refers to the DOM element that dispatched the event.
`,
    'stop-propagation': `
### 💡 Problem Breakdown
Sometimes, the default bubbling behavior is not what you want. You might have an event handler on an element that, when triggered, should prevent any parent elements from also being notified of the event. This problem requires you to use a method on the event object to stop this "bubbling" process.

### ⚙️ Solution Walkthrough
The solution is similar to the event bubbling example, but with a key addition in the middle element's handler.

\`\`\`javascript
const inner = document.getElementById('inner');
const middle = document.getElementById('middle');
const outer = document.getElementById('outer');

if (inner) inner.addEventListener('click', () => console.log('Inner clicked'));

if (middle) {
    middle.addEventListener('click', (event) => {
      console.log('Middle clicked');
      event.stopPropagation(); // Stop the event from bubbling further
    });
}

if (outer) outer.addEventListener('click', () => console.log('Outer clicked'));
\`\`\`

1.  **Setup**: The nested divs and listeners are set up just like in the bubbling example.
2.  **\`event.stopPropagation()\`**: Inside the event handler for the \`#middle\` div, we call \`event.stopPropagation()\`. The \`event\` object is automatically passed to the handler function.
3.  **Execution**: Now, when you click on the "Inner" div:
    *   The event starts at "Inner". Its handler runs, logging "Inner clicked".
    *   The event bubbles up to "Middle". Its handler runs, logging "Middle clicked".
    *   The \`event.stopPropagation()\` method is called.
    *   The bubbling process is immediately terminated. The event never reaches the \`#outer\` div, so its handler is never executed.

### 📚 Key Concepts
-   **The \`event.stopPropagation()\` method**: A method on the event interface that prevents further propagation of the current event in the capturing and bubbling phases.
`,
};