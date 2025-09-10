

export const explanations: Record<string, string> = {
    'dom-get-element-by-id': `
### 💡 Problem Breakdown
This is a foundational Document Object Model (DOM) manipulation task. The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The goal here is to select a specific HTML element on the page using its unique ID and then change the text it displays.

### ⚙️ Solution Walkthrough
The solution uses the \`document\` object, which is the entry point to the DOM.

\`\`\`javascript
// Conceptual code that would run in a browser
const targetElement = document.getElementById('some-id');
if (targetElement) {
    targetElement.textContent = 'New Text!';
}
\`\`\`

### 📚 Key Concepts
-   **DOM (Document Object Model)**: A tree-like representation of an HTML document, where each node is an object representing a part of the document.
-   **\`document\` object**: A global object in browsers that represents the entry point to the page's content.
-   **Element Selection**: The process of targeting specific HTML elements to interact with them via JavaScript.
-   **\`textContent\`**: A property used to get or set the text content of an element. It's generally safer and faster than \`innerHTML\` if you only need to deal with text.
`,
    'dom-addeventlistener': `
### 💡 Problem Breakdown
Web pages become interactive through events. An event is an action that occurs in the browser, such as a user clicking a button, hovering over an element, or pressing a key. The task is to "listen" for a specific event (a click on a button) and run a piece of code (a callback function) when that event happens.

### ⚙️ Solution Walkthrough
The modern and standard way to handle events is with the \`addEventListener\` method.

\`\`\`javascript
// Conceptual code
const myButton = document.getElementById('my-button');

if (myButton) {
    myButton.addEventListener('click', () => {
        alert('Button was clicked!');
    });
}
\`\`\`

1.  **Select the Element**: First, we select the button element we want to make interactive.
2.  **The \`.addEventListener(type, listener)\` method**: We call this method on the selected element.
    *   **The \`type\` argument**: The first argument is a string specifying the type of event to listen for. Common examples include \`'click'\`, \`'mouseover'\`, \`'keydown'\`, etc.
    *   **The \`listener\` argument**: The second argument is the function that will be executed whenever the event occurs. This is often called an "event handler" or "callback function".
3.  **Execution**: Now, whenever the user clicks on \`myButton\`, the provided arrow function will be called, and an alert will pop up.

### 📚 Key Concepts
-   **Events**: Actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.
-   **Event Listener/Handler**: A function that waits for a specific event to occur on an element and then executes in response.
-   **\`addEventListener\`**: The recommended way to register an event handler. It's flexible because you can add multiple listeners for the same event to a single element.
`,
    'dom-toggle-class': `
### 💡 Problem Breakdown
The goal is to dynamically change the appearance of an element by adding or removing a CSS class. This is a very common technique for things like highlighting a selected item, showing/hiding elements, or toggling a dark mode theme. We need a way to add the class if it's not there, and remove it if it is.

### ⚙️ Solution Walkthrough
The \`classList\` property provides a convenient \`toggle\` method to do exactly this.

\`\`\`javascript
// Conceptual code
const item = document.getElementById('toggle-item');

if (item) {
    item.addEventListener('click', () => {
        item.classList.toggle('highlight');
    });
}


// In your CSS file:
// .highlight { background-color: yellow; }
\`\`\`

1.  **Select the Element**: We select the element whose style we want to change.
2.  **Event Listener**: We attach a \`click\` listener so the action happens when the user interacts with the element.
3.  **The \`element.classList\` property**: This property returns a live \`DOMTokenList\` collection of the \`class\` attributes of the element. It's the modern way to interact with classes, preferable to manipulating the \`className\` string directly.
4.  **\`.toggle('highlight')\`**: The \`toggle\` method of the \`classList\` object is the key.
    *   If the element **does not** have the 'highlight' class, \`toggle\` adds it.
    *   If the element **already has** the 'highlight' class, \`toggle\` removes it.

### 📚 Key Concepts
-   **CSS Classes**: Used to apply styles to one or more HTML elements.
-   **\`element.classList\`**: An interface providing methods like \`add()\`, \`remove()\`, \`contains()\`, and \`toggle()\` to easily manipulate an element's classes without manual string parsing.
`,
    'localstorage-set-get': `
### 💡 Problem Breakdown
The task is to store a piece of data in the user's browser in a way that it persists even if the user closes the tab or the entire browser. This is useful for remembering user preferences, login status, or other non-critical information. We'll use the Web Storage API, specifically \`localStorage\`.

### ⚙️ Solution Walkthrough
The \`localStorage\` object provides simple methods for saving and retrieving data.

\`\`\`javascript
// Saving data
localStorage.setItem('userTheme', 'dark');

// Retrieving data later
const savedTheme = localStorage.getItem('userTheme'); // "dark"
\`\`\`

1.  **\`localStorage\`**: A global object available in the browser that allows you to access a particular domain's storage object.
2.  **The \`.setItem(key, value)\` method**: This method saves a data item.
    *   **The \`key\` argument**: A string name for your data item.
    *   **The \`value\` argument**: The data you want to store. **Important**: The value must be a string. If you want to store objects or arrays, you must first convert them to a string using \`JSON.stringify()\`.
3.  **The \`.getItem(key)\` method**: This method retrieves a data item using its key. It will return the string value you saved, or \`null\` if the key does not exist.

### 📚 Key Concepts
-   **Web Storage API**: Browser APIs that provide mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.
-   **\`localStorage\`**: A type of web storage that stores data with no expiration date. The data will not be deleted when the browser is closed and will be available in future sessions.
-   **Persistence**: The characteristic of state that outlives the process that created it.
`,
};