export const explanations: Record<string, string> = {
  'event-bubbling': `
### 💡 Problem Breakdown
Event bubbling is a core concept of how events work in the HTML DOM. When an event happens on an element (like a click), it first runs the handlers on that specific element, then it "bubbles up" to its parent element, then to its parent's parent, and so on, all the way up to the \`window\` object. This problem is about observing this default behavior.

### ⚙️ Solution Walkthrough
To demonstrate this, you set up nested HTML elements and attach a standard click listener to each one.
\`\`\`html
<div id="outer"><div id="middle"><div id="inner">Click Me</div></div></div>
\`\`\`
\`\`\`javascript
outer.addEventListener('click', () => console.log('Outer clicked'));
middle.addEventListener('click', () => console.log('Middle clicked'));
inner.addEventListener('click', () => console.log('Inner clicked'));
\`\`\`
If you click directly on the "Inner" div, the console output will be:
1.  \`Inner clicked\`
2.  \`Middle clicked\`
3.  \`Outer clicked\`

The event starts at the target (\`inner\`) and then bubbles up the DOM tree, triggering listeners on its ancestors.

### 📚 Key Concepts
-   **Event Propagation**: The process that defines how events travel through the DOM tree. It has three phases: capture, target, and bubbling.
-   **Bubbling Phase**: The phase where the event travels from the target element up to its ancestors. This is the default phase for listeners.
`,
  'event-capturing': `
### 💡 Problem Breakdown
Event capturing is the first phase of event propagation. The event travels from the outermost ancestor (\`window\`) *down* to the target element. By default, event listeners are not triggered during this phase. You can opt-in to the capturing phase by setting an option in \`addEventListener\`.

### ⚙️ Solution Walkthrough
The solution is similar to the bubbling example, but we add the `{ capture: true }` option to the event listeners.
\`\`\`html
<div id="outer"><div id="middle"><div id="inner">Click Me</div></div></div>
\`\`\`
\`\`\`javascript
// Note the third argument: { capture: true }
outer.addEventListener('click', () => console.log('Outer clicked'), { capture: true });
middle.addEventListener('click', () => console.log('Middle clicked'), { capture: true });
inner.addEventListener('click', () => console.log('Inner clicked'), { capture: true });
\`\`\`
If you click on the "Inner" div, the console output will now be the reverse of bubbling:
1.  \`Outer clicked\`
2.  \`Middle clicked\`
3.  \`Inner clicked\`

### 📚 Key Concepts
-   **Capturing Phase**: The phase where the event travels from the root of the DOM tree down to the target element.
-   **`addEventListener` options**: The third argument of \`addEventListener\` can be an options object to control listener behavior.
`,
  'event-delegation': `
### 💡 Problem Breakdown
Event delegation is a powerful and performant pattern where instead of adding an event listener to every single child element in a list, you add a single listener to their common parent. The parent listener then uses information from the event object to figure out which child was actually the target of the event.

### ⚙️ Solution Walkthrough
We attach one listener to a parent \`<ul>\` element to handle clicks on any of its child \`<li>\` elements.
\`\`\`html
<ul id="parent-list">
  <li>First Item</li>
  <li>Second Item</li>
</ul>
\`\`\`
\`\`\`javascript
const parentList = document.getElementById('parent-list');

parentList.addEventListener('click', (event) => {
  // Check if the clicked element is an LI
  if (event.target && event.target.tagName === 'LI') {
    console.log('You clicked on:', event.target.textContent);
  }
});
\`\`\`
1.  **Single Listener**: An event listener is attached only to the \`#parent-list\` element.
2.  **`event.target`**: This is the most crucial property. \`event.target\` is a reference to the actual element that the event originated from. If you click on "Second Item", \`event.target\` will be that specific \`<li>\` element, even though the listener is on the \`<ul>\`.

### 📚 Key Concepts
-   **Event Delegation**: A pattern for handling events efficiently by listening on a parent element rather than on every child. It saves memory and works automatically for dynamically added children.
`,
  'stop-propagation': `
### 💡 Problem Breakdown
Sometimes, the default bubbling behavior is not what you want. You might have an event handler on an element that, when triggered, should prevent any parent elements from also being notified of the event. This is done using a method on the event object.

### ⚙️ Solution Walkthrough
The solution is similar to the event bubbling example, but with a key addition in the middle element's handler: \`event.stopPropagation()\`.
\`\`\`javascript
middle.addEventListener('click', (event) => {
  console.log('Middle clicked');
  // Stop the event from bubbling further up to 'outer'
  event.stopPropagation(); 
});
\`\`\`
Now, when you click on the "Inner" div:
1.  The event starts at "Inner". Its handler runs, logging "Inner clicked".
2.  The event bubbles up to "Middle". Its handler runs, logging "Middle clicked".
3.  The \`event.stopPropagation()\` method is called.
4.  The bubbling process is immediately terminated. The event never reaches the \`outer\` div, so its handler is never executed.

### 📚 Key Concepts
-   **`event.stopPropagation()`**: A method on the event interface that prevents further propagation of the current event in the capturing and bubbling phases.
`,
  'prevent-default': `
### 💡 Problem Breakdown
Many DOM events have a default action associated with them that the browser will perform. For example, the default action of clicking a link is to navigate to its \`href\`, and the default action of submitting a form is to reload the page. The \`event.preventDefault()\` method allows you to cancel this default browser behavior.

### ⚙️ Solution Walkthrough
An event listener is added to a form's \`submit\` event.
\`\`\`javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  // Prevent the browser from reloading the page
  event.preventDefault();
  
  console.log('Form submission cancelled. Can now handle with JavaScript.');
});
\`\`\`
1.  **`event.preventDefault()`**: This method is called on the event object. It tells the browser not to carry out its default action.
2.  **Use Cases**: This is essential for building Single-Page Applications (SPAs), handling custom form submissions with Fetch, and creating custom behaviors for links or context menus.

### 📚 Key Concepts
-   **Default Action**: The built-in browser behavior associated with an event.
-   **`event.preventDefault()`**: A method for cancelling the browser's default action.
`,
  'event-target-vs-currenttarget': `
### 💡 Problem Breakdown
When using event delegation, it's crucial to understand the difference between \`event.target\` and \`event.currentTarget\`.
- **`event.target`**: The actual element that the event originated from. It's the "deepest" element that the user interacted with.
- **`event.currentTarget`**: The element that the event listener is currently attached to. As the event bubbles up, this value changes to the element currently handling the event.

### ⚙️ Solution Walkthrough
A single listener is placed on a parent element.
\`\`\`html
<ul id="parent">
  <li>Item <span>1</span></li>
</ul>
\`\`\`
\`\`\`javascript
const parent = document.getElementById('parent');
parent.addEventListener('click', (event) => {
  // If you click on the <span>
  console.log(event.target.tagName);        // "SPAN"
  console.log(event.currentTarget.tagName); // "UL"
});
\`\`\`
In this example, \`event.target\` tells you exactly what was clicked, while \`event.currentTarget\` always refers to the \`<ul>\` where the listener was placed.

### 📚 Key Concepts
-   **`event.target`**: Identifies where the event came from.
-   **`event.currentTarget`**: Identifies the element currently handling the event.
`,
  'this-in-event-handler': `
### 💡 Problem Breakdown
The value of the \`this\` keyword inside an event handler depends on how the handler function is defined.
- **Traditional \`function\`**: When a traditional function is used as an event listener, \`this\` is automatically set to the element the event listener is attached to (`event.currentTarget`).
- **Arrow Function \`() => {}\`**: Arrow functions do not have their own \`this\` binding. They inherit \`this\` from their surrounding (lexical) scope.

### ⚙️ Solution Walkthrough
Two listeners are attached to a button to show the difference.
\`\`\`javascript
const button = document.getElementById('myButton');

// Traditional Function
button.addEventListener('click', function() {
  console.log(this === button); // true
});

// Arrow Function
button.addEventListener('click', () => {
  // 'this' refers to the scope where addEventListener was called (e.g., window)
  console.log(this === button); // false
});
\`\`\`
### 📚 Key Concepts
-   **`this` Context**: The value of `this` is determined by how a function is called.
-   **Lexical `this`**: Arrow functions inherit `this`, which is often useful in class methods but can be a "gotcha" for simple event handlers where you want to reference the element.
`,
  'keyboard-events': `
### 💡 Problem Breakdown
This is a conceptual overview of the main events used to capture keyboard input.
- **`keydown`**: Fires when a key is first pressed down. It fires repeatedly if the key is held down.
- **`keyup`**: Fires when a key is released.
- **`keypress`**: (Deprecated) Fired after `keydown` but before `keyup`, but only for keys that produce a character (e.g., not Shift or Ctrl). It's best to avoid this and use `keydown`.

The event object provides useful properties:
- **`event.key`**: The value of the key pressed (e.g., "a", "Enter", "Shift").
- **`event.code`**: The physical key on the keyboard (e.g., "KeyA", "Enter", "ShiftLeft"). This is useful for games where you care about the key's position, not the character it produces.

### 📚 Key Concepts
-   **Keyboard Events**: A set of DOM events for handling user input from the keyboard.
`,
  'mouse-events': `
### 💡 Problem Breakdown
This is a conceptual overview of common mouse events.
- **`click`**: Fires after a full click (a `mousedown` and `mouseup` on the same element).
- **`mousedown`**: Fires when the mouse button is pressed down.
- **`mouseup`**: Fires when the mouse button is released.
- **`mousemove`**: Fires repeatedly as the mouse pointer moves over an element.
- **`mouseover` / `mouseout`**: Fires when the pointer enters/leaves an element *or any of its children*. These events bubble.
- **`mouseenter` / `mouseleave`**: Fires when the pointer enters/leaves an element. These events do **not** bubble and are often easier to work with for simple hover effects.

### 📚 Key Concepts
-   **Mouse Events**: DOM events for handling user interaction with a mouse or other pointing device.
`,
  'addeventlistener-options-once': `
### 💡 Problem Breakdown
The `once` option provides a convenient way to create an event listener that automatically removes itself after it has been executed once. This is a cleaner alternative to calling `removeEventListener` from within the handler itself.

### ⚙️ Solution Walkthrough
The `{ once: true }` option is passed as the third argument to `addEventListener`.
\`\`\`javascript
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log('This will only run once!');
}, { once: true });
\`\`\`
After the first click, the listener is automatically detached. Clicking the button a second time will do nothing.

### 📚 Key Concepts
-   **Event Listener Options**: A modern way to configure the behavior of an event listener.
`,
  'addeventlistener-options-passive': `
### 💡 Problem Breakdown
The `passive` option is a performance optimization for touch and wheel/scroll events. By default, when such an event occurs, the browser has to wait for the event listener to finish executing before it can start scrolling, in case the listener calls `event.preventDefault()` to cancel the scroll. By adding `{ passive: true }`, you are promising the browser that you will *not* call `preventDefault()`. This allows the browser to start scrolling immediately, leading to a smoother user experience.

### ⚙️ Solution Walkthrough
The `{ passive: true }` option is used for a scroll listener.
\`\`\`javascript
window.addEventListener('scroll', () => {
  // Do something that doesn't block scrolling
}, { passive: true });
\`\`\`
If you try to call `preventDefault()` inside a passive listener, the browser will ignore it and may show a warning in the console.

### 📚 Key Concepts
-   **Performance Optimization**: A technique to improve the responsiveness and smoothness of a web page.
-   **Passive Event Listeners**: A feature that helps prevent "scroll jank" by decoupling listener execution from scrolling.
`,
  'remove-event-listener': `
### 💡 Problem Breakdown
The goal is to manually remove an event listener that was previously added. This is important for cleanup and preventing memory leaks, especially in Single-Page Applications where components are created and destroyed. A critical requirement is that you must have a reference to the exact same function that was used in `addEventListener`.

### ⚙️ Solution Walkthrough
A named function is used as the event handler so it can be referenced later for removal.
\`\`\`javascript
const button = document.getElementById('myButton');

// 1. Define a named function
function handleClick() {
  console.log('Button was clicked!');
}

// 2. Add the listener using the named function
button.addEventListener('click', handleClick);

// 3. Later, remove the listener using the same named function
button.removeEventListener('click', handleClick);
\`\`\`
**Note**: You cannot remove a listener that was added as an anonymous function (e.g., \`button.addEventListener('click', () => { ... });\`) because you don't have a reference to that specific function to pass to `removeEventListener`.

### 📚 Key Concepts
-   **Memory Management**: Properly removing event listeners is crucial to avoid memory leaks.
`,
  'custom-events': `
### 💡 Problem Breakdown
The DOM event system is extensible. You can create your own custom events to facilitate communication between different parts of your application, especially between components that don't have direct references to each other.

### ⚙️ Solution Walkthrough
The solution involves three steps: creating the event, dispatching it, and listening for it.
\`\`\`javascript
const myElement = document.getElementById('my-element');

// 3. Listen for the custom event
myElement.addEventListener('my-custom-event', (event) => {
  // The custom data is in the 'detail' property
  console.log('Custom event received!', event.detail); 
});

// 1. Create a new CustomEvent
// The second argument is an object with a 'detail' property for any data.
const myEvent = new CustomEvent('my-custom-event', {
  detail: { message: 'Hello from the dispatcher!' }
});

// 2. Dispatch the event on an element
myElement.dispatchEvent(myEvent);
\`\`\`
### 📚 Key Concepts
-   **`CustomEvent`**: The interface for creating your own DOM events.
-   **`dispatchEvent()`**: The method used to fire an event on an element.
-   **Decoupling**: Custom events help to decouple components; the dispatcher doesn't need to know who is listening.
`,
  'domcontentloaded-vs-load': `
### 💡 Problem Breakdown
This is a conceptual problem about the timing of page load events.
- **`DOMContentLoaded`**: This event is fired on the `document` when the initial HTML document has been completely loaded and parsed by the browser. It does **not** wait for external resources like stylesheets, images, and iframes to finish loading. It's the ideal event for running JavaScript that needs to manipulate the DOM as soon as it's ready.
- **`load`**: This event is fired on the `window` object *after* the DOM and all dependent resources (stylesheets, scripts, images, etc.) have completely finished loading.

### ⚙️ Solution Walkthrough
Typically, you would use `DOMContentLoaded`.
\`\`\`javascript
document.addEventListener('DOMContentLoaded', () => {
  // The DOM tree is fully constructed. It's safe to manipulate elements.
  console.log('DOM is ready!');
});

window.addEventListener('load', () => {
  // The page and all its resources (images, etc.) are fully loaded.
  console.log('Page is fully loaded!');
});
\`\`\`
The "DOM is ready!" message will almost always appear before "Page is fully loaded!".

### 📚 Key Concepts
-   **Page Lifecycle Events**: Events that signal different states of the document loading process.
`,
  'event-phases': `
### 💡 Problem Breakdown
This is a conceptual overview of the full event propagation model. When an event is triggered, it goes through three phases:
1.  **Capturing Phase**: The event travels from the `window` object down through the DOM tree to the target element's parent. Listeners registered with `{ capture: true }` are triggered during this phase.
2.  **Target Phase**: The event reaches the target element (the element where the event originated, e.g., the button that was clicked). Listeners on the target element are triggered.
3.  **Bubbling Phase**: The event travels back up from the target element's parent to the `window`. Listeners registered without the `capture` option (the default) are triggered during this phase.

### 📚 Key Concepts
-   **Event Propagation**: The complete model of how an event travels through the DOM.
`,
  'stop-immediate-propagation': `
### 💡 Problem Breakdown
This problem explores a more powerful version of \`stopPropagation()\`. Imagine you have multiple event listeners for the *same event* on the *same element*. If one of those listeners calls \`event.stopPropagation()\`, it will only prevent the event from bubbling to parent elements; the other listeners on the same element will still run. \`event.stopImmediatePropagation()\`, however, prevents any *other* listeners from being called, including those on the same element and any on parent elements.

### ⚙️ Solution Walkthrough
Two click listeners are added to the same button.
\`\`\`javascript
const button = document.getElementById('myButton');

button.addEventListener('click', (event) => {
  console.log('Listener 1 called');
  event.stopImmediatePropagation();
});

button.addEventListener('click', () => {
  // This listener will never be called
  console.log('Listener 2 called');
});
\`\`\`
When the button is clicked, only "Listener 1 called" will be logged.

### 📚 Key Concepts
-   **`event.stopImmediatePropagation()`**: A method for stopping all further event propagation.
`,
  'event-delegation-performance': `
### 💡 Problem Breakdown
This is a conceptual problem about why event delegation is a good performance practice.
1.  **Memory**: Adding a thousand event listeners means creating a thousand function objects and a thousand listener registrations in the browser's internal data structures. A single delegated listener uses vastly less memory.
2.  **Setup Time**: Adding a thousand listeners takes more time when the page is first loading compared to adding just one.
3.  **Dynamic Elements**: With individual listeners, if you add a new item to the list, you must remember to also add a new event listener to it. If you remove an item, you should also remove its listener to prevent memory leaks. With event delegation, new items just work automatically, and removed items are no longer a concern, leading to much simpler code.

### 📚 Key Concepts
-   **Performance**: A critical aspect of web development, focusing on speed and efficient memory usage.
`,
  'focus-and-blur-events': `
### 💡 Problem Breakdown
The \`focus\` and \`blur\` events are essential for handling interactions with focusable elements like form inputs, buttons, and links.
- **\`focus\`**: Fires when an element receives focus (e.g., the user clicks on it or tabs to it).
- **\`blur\`**: Fires when an element loses focus.

These events are useful for input validation (e.g., validate an email field when the user leaves it) or for changing the UI to highlight the currently active element.

**Note**: \`focus\` and \`blur\` do not bubble. Their bubbling counterparts are \`focusin\` and \`focusout\`.

### 📚 Key Concepts
-   **Focus Events**: DOM events that track which element is currently active for input.
`,
  'event-coordinates': `
### 💡 Problem Breakdown
This is a conceptual problem about the different coordinate systems available on a mouse event.
- **\`clientX\` / \`clientY\`**: The coordinates of the mouse pointer relative to the top-left corner of the **visible viewport**. This is the most commonly used coordinate system. If you scroll the page, these values will change as the pointer's position relative to the visible window changes.
- **\`pageX\` / \`pageY\`**: The coordinates of the mouse pointer relative to the top-left corner of the **entire HTML document**. These values do not change when you scroll the page.
- **\`offsetX\` / \`offsetY\`**: The coordinates of the mouse pointer relative to the top-left corner of the padding edge of the *target element*.

### 📚 Key Concepts
-   **Coordinate Systems**: Understanding the different reference points for position data in the browser.
`,
  'delegation-with-closest': `
### 💡 Problem Breakdown
A potential issue with the simple \`event.target.tagName\` check in event delegation is that if the user clicks on an element *inside* the child element you care about (e.g., an icon inside a list item), \`event.target\` will be the icon, not the list item. A more robust pattern is to use the \`.closest()\` method.

### ⚙️ Solution Walkthrough
The \`.closest()\` method is used to find the desired parent element.
\`\`\`html
<ul id="parent-list">
  <li>Item <b>One</b></li>
  <li>Item <i>Two</i></li>
</ul>
\`\`\`
\`\`\`javascript
const list = document.getElementById('parent-list');

list.addEventListener('click', (event) => {
  // Find the closest ancestor <li> element, starting from the event target.
  const listItem = event.target.closest('li');
  
  if (listItem) {
    console.log('You clicked on list item:', listItem.textContent);
  }
});
\`\`\`
1.  **\`event.target.closest('li')\`**: This starts at whatever was clicked (\`event.target\`) and travels up the DOM tree until it finds an ancestor that matches the CSS selector 'li'. If no such ancestor is found, it returns \`null\`. This reliably finds the correct list item regardless of what was clicked inside it.

### 📚 Key Concepts
-   **`.closest()`**: A DOM method for finding the nearest ancestor that matches a selector.
-   **Robust Event Delegation**: A modern pattern that makes event delegation more reliable.
`,
'input-vs-change-event': `
### 💡 Problem Breakdown
This is a key distinction for form handling.
- **\`input\` Event**: Fires **immediately** any time the value of an \`<input>\`, \`<select>\`, or \`<textarea>\` element is changed. This includes every keystroke, paste, cut, or deletion. It's best for real-time feedback, like live search filtering or character counting.
- **\`change\` Event**: Fires when the value of an element has been **committed** by the user. For text inputs, this means when the element loses focus (on blur). For select boxes or checkboxes, it fires immediately upon selection. It's best for validation that should happen after the user has finished entering their value.

### 📚 Key Concepts
- **Form Events**: Different events are suited for different use cases in form interaction.
`,
'event-object-properties': `
### 💡 Problem Breakdown
Every event listener's callback function receives an \`Event\` object as its first argument. This object contains valuable information about the event that occurred.
### ⚙️ Solution Walkthrough
Some common properties include:
- **\`event.type\`**: A string representing the type of event (e.g., "click", "keydown").
- **\`event.timeStamp\`**: A high-resolution timestamp indicating when the event occurred.
- **\`event.bubbles\`**: A boolean indicating if the event bubbles up through the DOM.
- **\`event.cancelable\`**: A boolean indicating if the event's default action can be prevented with \`preventDefault()\`.
- **\`event.target\`**: The element where the event originated.
- **\`event.currentTarget\`**: The element the listener is currently attached to.

### 📚 Key Concepts
- **Event Object**: The primary source of information about a user's interaction.
`,
'mouseenter-vs-mouseover': `
### 💡 Problem Breakdown
These two mouse events seem similar but have a critical difference related to event bubbling, which makes them suitable for different use cases.
- **\`mouseover\`**: This event bubbles. It fires when the mouse pointer enters an element *or any of its children*. This can cause the event to fire multiple times when moving the mouse within a parent element that has children, which is often not the desired behavior for a simple hover effect.
- **\`mouseenter\`**: This event does **not** bubble. It fires only when the mouse pointer enters the element it is attached to. It does not fire when the pointer enters its descendant elements.

### 📚 Key Concepts
- **Event Bubbling**: Understanding which events bubble is key to choosing the correct one for the job. For simple "hover on parent" effects, \`mouseenter\` and \`mouseleave\` are almost always the better choice.
`,
'pointer-events': `
### 💡 Problem Breakdown
Pointer Events are the modern, recommended way to handle input from various pointing devices like a mouse, a pen/stylus, or a touch on a touchscreen. They unify the separate event models for mouse and touch into a single, comprehensive set of events.
- **\`pointerdown\`**: Fires when a pointer becomes active (mouse button press, touch start).
- **\`pointermove\`**: Fires when a pointer changes coordinates.
- **\`pointerup\`**: Fires when a pointer is no longer active (mouse button release, touch end).
The \`event\` object includes a \`pointerType\` property ("mouse", "pen", or "touch") to let you handle different input types if needed.

### 📚 Key Concepts
- **Pointer Events**: A unified event model for handling all pointing input devices.
`,
'event-is-trusted': `
### 💡 Problem Breakdown
The \`isTrusted\` property of an event is a read-only boolean that provides a security measure. It allows you to distinguish between events that were generated by a genuine user action and events that were created or dispatched by JavaScript code.

### ⚙️ Solution Walkthrough
An event created by code will have \`isTrusted: false\`.
\`\`\`javascript
document.addEventListener('click', (event) => {
  console.log(event.isTrusted);
});

// If a user clicks the document: logs true
// If you run this code:
const myEvent = new Event('click');
document.dispatchEvent(myEvent); // logs false
\`\`\`
This is useful for preventing scripts from faking user actions in sensitive operations.

### 📚 Key Concepts
- **Event Trust**: A security feature of the DOM event model.
`,
'form-reset-event': `
### 💡 Problem Breakdown
The \`reset\` event is fired on a \`<form>\` element when it is reset. This typically happens when a user clicks a button with \`type="reset"\`. You can listen for this event to perform custom actions before the form fields are cleared, or you can prevent the reset entirely.

### ⚙️ Solution Walkthrough
A listener is added to the form for the \`reset\` event.
\`\`\`javascript
const myForm = document.getElementById('myForm');
myForm.addEventListener('reset', (event) => {
  // You could prevent the reset if you want
  // event.preventDefault();
  console.log('Form is about to be reset!');
});
\`\`\`
### 📚 Key Concepts
- **Form Events**: A set of events specific to interacting with HTML forms.
`,
'window-error-event': `
### 💡 Problem Breakdown
This is a powerful mechanism for global error handling and logging. You can attach an \`error\` event listener to the \`window\` object. This listener will be triggered whenever an uncaught runtime error occurs in any of your scripts.

### ⚙️ Solution Walkthrough
The listener receives an \`ErrorEvent\` object with details about the error.
\`\`\`javascript
window.addEventListener('error', (event) => {
  console.log('A global error occurred!');
  console.log('Message:', event.message);
  console.log('File:', event.filename);
  console.log('Line:', event.lineno);
  
  // Returning true from this handler can prevent the
  // default browser error message from appearing in the console.
  return true;
});

// This will trigger the global handler:
undefinedFunction(); 
\`\`\`
### 📚 Key Concepts
- **Global Error Handling**: A crucial pattern for logging errors to a server and for providing a fallback state in an application.
`,
'media-query-listener': `
### 💡 Problem Breakdown
The \`window.matchMedia()\` method returns a \`MediaQueryList\` object. This object not only tells you if a media query currently matches, but it also allows you to add a \`'change'\` event listener to be notified whenever the result of the query changes (e.g., when the user resizes the browser window).

### ⚙️ Solution Walkthrough
A listener is added to a \`MediaQueryList\` object.
\`\`\`javascript
const mediaQueryList = window.matchMedia('(min-width: 600px)');

function handleMediaQueryChange(event) {
  if (event.matches) {
    // Viewport is 600px or wider
    console.log('Desktop view activated');
  } else {
    // Viewport is less than 600px
    console.log('Mobile view activated');
  }
}

// Add the listener
mediaQueryList.addEventListener('change', handleMediaQueryChange);

// Run it once manually to set the initial state
handleMediaQueryChange(mediaQueryList);
\`\`\`
### 📚 Key Concepts
- **Responsive JavaScript**: Writing JavaScript that adapts its behavior based on the viewport environment.
`,
'synthetic-events-react-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem about how event handling works in a library like React. React doesn't attach event listeners directly to DOM nodes. Instead, it uses **event delegation**, attaching a single listener for each event type at the root of the application.

### ⚙️ Solution Walkthrough
When you click a button in React, the native browser event bubbles up to the root. React's listener catches it and creates a **`SyntheticEvent`** object. This is a cross-browser wrapper around the native event that ensures consistent behavior (e.g., \`e.target\`, \`e.preventDefault()\` work the same in all browsers). This synthetic event is then passed down through React's component hierarchy to the \`onClick\` handler on your button component. This approach improves performance and normalizes browser inconsistencies.

### 📚 Key Concepts
- **SyntheticEvent**: A cross-browser wrapper for native DOM events used by React.
- **Event Delegation**: A core performance pattern used by many front-end frameworks.
`,
'event-modifier-keys': `
### 💡 Problem Breakdown
The event object for keyboard and mouse events contains boolean properties that let you check if a modifier key was being held down when the event occurred.

### ⚙️ Solution Walkthrough
Inside an event listener, you can check these properties on the event object.
\`\`\`javascript
document.addEventListener('click', (event) => {
  if (event.shiftKey) {
    console.log('Shift was held down during the click!');
  }
  if (event.ctrlKey) {
    console.log('Ctrl was held down!');
  }
  // Also available: event.altKey, event.metaKey (Cmd on Mac, Win key on Windows)
});
\`\`\`
This is useful for creating keyboard shortcuts or modified click behaviors.

### 📚 Key Concepts
- **Modifier Keys**: Keys that modify the action of other keys (Shift, Ctrl, Alt, Meta).
`,
'touch-events': `
### 💡 Problem Breakdown
This is a conceptual overview of the core events for handling touchscreen input.
- **`touchstart`**: Fired when a finger first touches the screen.
- **`touchmove`**: Fired repeatedly as a finger is dragged across the screen.
- **`touchend`**: Fired when a finger is lifted from the screen.

The event object is special because it can contain information about multiple touch points (fingers). The data is in array-like \`TouchList\` objects:
- **`event.touches`**: A list of all fingers currently on the screen.
- **`event.targetTouches`**: A list of fingers on the target element.
- **`event.changedTouches`**: A list of fingers involved in the current event (e.g., the finger that was just lifted for a `touchend` event).

### 📚 Key Concepts
- **Touch Events**: A set of DOM events for handling multi-touch user input.
`,
'event-composed-path': `
### 💡 Problem Breakdown
The \`event.composedPath()\` method returns an array of nodes that the event will travel through during its propagation. The array starts with the event target and ends with the \`window\`. This is particularly useful for debugging and for understanding event flow when working with the Shadow DOM.

### ⚙️ Solution Walkthrough
The method is called inside an event listener.
\`\`\`javascript
inner.addEventListener('click', (event) => {
  const path = event.composedPath();
  // path would be: [div#inner, div#middle, div#outer, body, html, document, window]
  console.log(path);
});
\`\`\`
1.  **Event Path**: The returned array shows the exact path the event will take during the capture and bubbling phases.
2.  **Shadow DOM**: If an event originates inside a Shadow DOM, \`composedPath()\` can "pierce" the shadow boundary and show the elements outside the shadow root that the event will bubble to (if the event is "composed").

### 📚 Key Concepts
-   **`event.composedPath()`**: A method that returns the event's propagation path.
`,
'scroll-event': `
### 💡 Problem Breakdown
The \`scroll\` event fires on an element when its scrollbar is being scrolled. You can listen for it on scrollable elements (like a \`<textarea>\` or a \`div\` with \`overflow: scroll\`) or on the `window` object for page scrolling.

### ⚙️ Solution Walkthrough
A listener is added to the window.
\`\`\`javascript
window.addEventListener('scroll', () => {
  // Get the vertical scroll position
  const scrollY = window.scrollY;
  console.log(\`Page scrolled to: \${scrollY}px\`);
});
\`\`\`
**Performance Note**: The `scroll` event can fire very rapidly. Any complex logic inside a scroll handler can make the page feel sluggish. It is a best practice to **throttle** or **debounce** scroll event handlers to limit how often they execute.

### 📚 Key Concepts
-   **`scroll` Event**: A DOM event that fires when an element's content is scrolled.
-   **Throttling**: A performance technique to ensure a function is only called at most once per a specified time interval.
`,
'debouncing-events': `
### 💡 Problem Breakdown
Debouncing is a rate-limiting technique. It ensures that a function is only executed *after* a certain period of inactivity. This is extremely useful for events that can fire rapidly, like keyboard input in a search bar. You don't want to send an API request for every single keystroke, but rather only after the user has stopped typing for a moment.

### ⚙️ Solution Walkthrough
A higher-order function `debounce` is created. It uses a closure to store a timer ID.
\`\`\`javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId); // Clear the previous timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
// const debouncedSearch = debounce(apiSearch, 300);
// searchInput.addEventListener('input', debouncedSearch);
\`\`\`
### 📚 Key Concepts
-   **Debouncing**: A performance pattern to delay execution until a series of events has stopped.
`,
'throttling-events': `
### 💡 Problem Breakdown
Throttling is another rate-limiting technique. It ensures that a function is executed at most *once* per specified time interval. This is useful for events that fire continuously, like `scroll` or `mousemove`, where you want to react periodically but not for every single event.

### ⚙️ Solution Walkthrough
A higher-order function `throttle` uses a closure to store a "cooling down" flag.
\`\`\`javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
// window.addEventListener('scroll', throttle(handleScroll, 200));
\`\`\`
### 📚 Key Concepts
-   **Throttling**: A performance pattern to guarantee that a function is not executed more than once per a given time period.
`,
'context-menu-event': `
### 💡 Problem Breakdown
The `contextmenu` event fires when the user attempts to open a context menu, which is typically done by right-clicking. You can listen for this event to prevent the default browser context menu and display your own custom menu instead.

### ⚙️ Solution Walkthrough
An event listener is added for the `contextmenu` event, and `preventDefault()` is called.
\`\`\`javascript
const myElement = document.getElementById('my-element');

myElement.addEventListener('contextmenu', (event) => {
  // Prevent the default browser right-click menu
  event.preventDefault();
  
  // Now, show your custom menu
  console.log('Custom context menu should appear here!');
});
\`\`\`
### 📚 Key Concepts
-   **`contextmenu` Event**: A DOM event that fires when a context menu is triggered.
`,
'drag-and-drop-events': `
### 💡 Problem Breakdown
This is a conceptual overview of the native browser Drag and Drop (DnD) API. It allows users to grab an element and drag it to another location. It relies on a sequence of DOM events.

### ⚙️ Solution Walkthrough
The main events are:
1.  **`dragstart`**: Fired on the element being dragged. Here you set the drag data: \`event.dataTransfer.setData('text/plain', 'some data')\`.
2.  **`dragover`**: Fired continuously on an element as a dragged item is over it. You **must** call \`event.preventDefault()\` in this listener to indicate that the element is a valid drop target.
3.  **`drop`**: Fired on the drop target when the user releases the mouse. Here you get the data: \`const data = event.dataTransfer.getData('text/plain')\`. You also need to call \`preventDefault()\` to stop the browser's default drop behavior (like opening a link).
4.  **`dragenter`**, **`dragleave`**, **`dragend`**: Other events used for styling and cleanup.

### 📚 Key Concepts
-   **Drag and Drop API**: A set of DOM events for implementing native drag-and-drop.
`,
'event-loop-conceptual': `
### 💡 Problem Breakdown
This is a high-level conceptual explanation of the JavaScript Event Loop, which is the core of its concurrency model.
1.  **Call Stack**: Where function execution happens. It's a LIFO (Last-In, First-Out) stack.
2.  **Web APIs / Node APIs**: The environment provides asynchronous APIs (like `setTimeout`, `fetch`). When called, they start their work and hand off their callback function.
3.  **Task Queues**: When an async API finishes its work, it places its callback function in a queue. There are two main queues: the Macrotask Queue and the high-priority Microtask Queue.
4.  **Event Loop**: Its job is to constantly check: "Is the Call Stack empty?" If it is, it takes a task from a queue and pushes it onto the stack to be executed. It will always empty the entire Microtask Queue before taking the next Macrotask.

### 📚 Key Concepts
-   **Concurrency Model**: How JavaScript handles multiple tasks without using multiple threads.
`,
'focusin-vs-focus': `
### 💡 Problem Breakdown
The `focus` and `focusin` events both fire when an element receives focus, but they have a key difference in propagation.
- **`focus`**: This event does **not** bubble. If you have a form and want to know when any input inside it receives focus, a listener on the form for the `focus` event will not work.
- **`focusin`**: This event **bubbles**. This makes it the correct event to use for event delegation when you want to handle focus events on a parent element.

The same relationship exists between `blur` (does not bubble) and `focusout` (bubbles).

### 📚 Key Concepts
-   **Event Bubbling**: Understanding which events bubble is critical for effective event delegation.
`,
'delegation-dynamic-elements': `
### 💡 Problem Breakdown
This is a conceptual explanation of a major benefit of event delegation. If you have a list of items and you add listeners to each one individually, what happens when you add a new item to the list via JavaScript? Nothing. The new item won't have a listener. You would have to remember to add one.

### ⚙️ Solution Walkthrough
With event delegation, the listener is on the parent container. Since the new item is added inside this container, any events (like clicks) on it will bubble up to the parent and be caught by the single delegated listener. No extra work is needed to make new elements interactive. This makes the code much simpler and more robust.

### 📚 Key Concepts
-   **Dynamic DOM**: Handling events on elements that are added to or removed from the page after it has loaded.
`,
'event-constructor': `
### 💡 Problem Breakdown
While `CustomEvent` is used for creating events with custom data, the more generic `Event` constructor is used to create simple, built-in event types that you want to dispatch programmatically.

### ⚙️ Solution Walkthrough
A new `click` event is created and dispatched on a button.
\`\`\`javascript
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => console.log('Button clicked!'));

// Create a new synthetic click event
// { bubbles: true } ensures it behaves like a real user click
const clickEvent = new Event('click', { bubbles: true });

// Dispatch the event on the button
myButton.dispatchEvent(clickEvent); // Logs "Button clicked!"
\`\`\`
### 📚 Key Concepts
-   **`Event` Constructor**: The base constructor for creating synthetic DOM events.
-   **Programmatic Events**: The ability to trigger events with code, which is useful for testing and for integrating different parts of an application.
`,
'removing-all-listeners': `
### 💡 Problem Breakdown
There is no direct DOM API to "get all event listeners" or "remove all event listeners" from an element. However, a common and effective trick to achieve this is to clone the element and replace it with the clone.

### ⚙️ Solution Walkthrough
The `cloneNode(true)` method is used. When an element is cloned, its attributes and children are copied, but its event listeners are not.
\`\`\`javascript
const oldElement = document.getElementById('myButton');

// Create a deep clone of the element
const newElement = oldElement.cloneNode(true);

// Replace the old element with the new, listener-free one
oldElement.parentNode.replaceChild(newElement, oldElement);
\`\`\`
After this code runs, the button will still be on the page, but all of its original event listeners will be gone.

### 📚 Key Concepts
-   **`cloneNode()`**: A method for copying DOM nodes. A key feature is that event listeners are not copied.
`,
'transitionend-event': `
### 💡 Problem Breakdown
The `transitionend` event is fired when a CSS transition has completed. This is useful for chaining animations or running JavaScript code only after a visual transition effect has finished.

### ⚙️ Solution Walkthrough
A listener is added for the `transitionend` event.
\`\`\`javascript
const myElement = document.getElementById('my-element');

// This CSS will make the element fade out over 1 second when the class is added
// .fade-out { opacity: 0; transition: opacity 1s; }

myElement.classList.add('fade-out');

myElement.addEventListener('transitionend', () => {
  console.log('Fade out transition finished!');
  // Now you could, for example, set display: none
});
\`\`\`
### 📚 Key Concepts
-   **CSS Transitions**: A way to animate changes to CSS properties.
-   **`transitionend` Event**: An event for synchronizing JavaScript with the completion of CSS transitions.
`,
'animationend-event': `
### 💡 Problem Breakdown
Similar to `transitionend`, the `animationend` event is fired when a CSS animation (defined with `@keyframes`) has completed.

### ⚙️ Solution Walkthrough
A listener is added for the `animationend` event.
\`\`\`javascript
const myElement = document.getElementById('my-element');

// This CSS would make the element run an animation named 'slide-in'
// .slide { animation: slide-in 1s forwards; }

myElement.classList.add('slide');

myElement.addEventListener('animationend', () => {
  console.log('Slide-in animation finished!');
});
\`\`\`
### 📚 Key Concepts
-   **CSS Animations**: A way to create complex, keyframed animations.
-   **`animationend` Event**: An event for synchronizing JavaScript with the completion of CSS animations.
`,
'event-phase-property': `
### 💡 Problem Breakdown
The `event.eventPhase` read-only property returns a number that indicates which phase of the event flow is currently being evaluated. This is mainly useful for debugging or for advanced event handling where a single function might be a listener for multiple phases.

### ⚙️ Solution Walkthrough
The property is checked inside a listener.
- **`Event.NONE` (0)**: No event is being processed.
- **`Event.CAPTURING_PHASE` (1)**: The event is in the capturing phase.
- **`Event.AT_TARGET` (2)**: The event is at the target element.
- **`Event.BUBBLING_PHASE` (3)**: The event is in the bubbling phase.
\`\`\`javascript
element.addEventListener('click', (event) => {
  // This will log 2 if the listener is on the target,
  // or 3 if it's on a parent handling a bubbled event.
  console.log(event.eventPhase);
}, false); // false for bubbling phase
\`\`\`
### 📚 Key Concepts
-   **Event Propagation**: The full model of how events travel through the DOM.
`,
'hashchange-event': `
### 💡 Problem Breakdown
The `hashchange` event is fired on the `window` object when the fragment identifier (the part of the URL after the `#` symbol, including the `#`) of the URL changes. This is a simple, old-school way to implement client-side routing for single-page applications.

### ⚙️ Solution Walkthrough
A listener is added to the `window` for the `hashchange` event.
\`\`\`javascript
window.addEventListener('hashchange', (event) => {
  console.log('URL hash changed!');
  console.log('Old URL:', event.oldURL);
  console.log('New URL:', event.newURL);
  
  // Here you could render a different view based on location.hash
});

// Changing the hash programmatically will also trigger the event:
// location.hash = 'new-section';
\`\`\`
### 📚 Key Concepts
-   **URL Fragment**: The part of a URL following a `#`.
-   **Client-Side Routing**: The process of handling navigation within a single-page application without full page reloads.
`,
'pointerevent-properties': `
### 💡 Problem Breakdown
Pointer Events unify mouse, touch, and pen input. The `PointerEvent` object inherits from `MouseEvent` but also adds several useful properties to distinguish between input types and get more detailed information.

### ⚙️ Solution Walkthrough
Key properties include:
- **`pointerId`**: A unique identifier for the pointer causing the event. This is crucial for tracking multiple simultaneous touches.
- **`pointerType`**: A string indicating the type of pointer: `"mouse"`, `"pen"`, or `"touch"`.
- **`isPrimary`**: A boolean that is `true` if the pointer is the primary pointer of its type (e.g., the first finger in a multi-touch sequence).
- **`pressure`**: The normalized pressure of the pointer input, from 0 to 1.
- **`tiltX`, `tiltY`**: The plane angle of a pen/stylus.

### 📚 Key Concepts
-   **Pointer Events**: The modern, unified API for handling various pointing device inputs.
`,
'wheel-event': `
### 💡 Problem Breakdown
The `wheel` event fires when a user rotates a mouse wheel or uses a similar input device like a touchpad. It's the modern replacement for the non-standard `mousewheel` event.

### ⚙️ Solution Walkthrough
A listener is added for the `wheel` event. The event object contains `delta` properties that indicate the scroll amount.
\`\`\`javascript
myElement.addEventListener('wheel', (event) => {
  // It's good practice to prevent the default scroll action if you are
  // implementing a custom behavior like zooming.
  event.preventDefault();

  // deltaY will be positive for scrolling down, negative for scrolling up.
  if (event.deltaY > 0) {
    // Zoom out
  } else {
    // Zoom in
  }
  // deltaX and deltaZ are also available for horizontal and 3D scrolling.
});
\`\`\`
### 📚 Key Concepts
-   **`wheel` Event**: The standard event for mouse wheel or similar scrolling gestures.
`,
'event- bubbling-vs-delegation': `
### 💡 Problem Breakdown
This is a conceptual clarification. These two terms are related but distinct.
- **Event Bubbling**: This is a **browser mechanism**. It's the process where an event travels up the DOM tree from the target element to its ancestors. This is a fundamental part of how the DOM works.
- **Event Delegation**: This is a **programming pattern**. It's a technique that you, the developer, can choose to use. The pattern *takes advantage* of the bubbling mechanism by placing a single event listener on a parent element to handle events that originate from its children.

In short: you **use** the bubbling mechanism to **implement** the delegation pattern.

### 📚 Key Concepts
-   **Mechanism vs. Pattern**: A mechanism is a built-in behavior of the system. A pattern is a reusable solution to a common problem that leverages the system's mechanisms.
`,
'programmatic-event-dispatch': `
### 💡 Problem Breakdown
You can trigger an event listener programmatically using JavaScript code, without any user interaction. This is done by creating an event object and then "dispatching" it on a DOM element. This is very useful for testing and for integrating different parts of an application that communicate via events.

### ⚙️ Solution Walkthrough
A `click` event is created and dispatched on a button.
\`\`\`javascript
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', (event) => {
  console.log(\`Button clicked! Is trusted: \${event.isTrusted}\`);
});

// 1. Create a new event object.
// { bubbles: true } makes it behave more like a real user click.
const myClickEvent = new Event('click', { bubbles: true });

// 2. Dispatch the event on the element.
myButton.dispatchEvent(myClickEvent); 
// This will log "Button clicked! Is trusted: false"
\`\`\`
### 📚 Key Concepts
-   **`dispatchEvent()`**: The method for programmatically firing an event on a target.
-   **Synthetic Events**: Events created by code are considered "synthetic" and have their `isTrusted` property set to `false`.
`,
};