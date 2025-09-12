export const explanations: Record<string, string> = {
  'dom-get-element-by-id': `
### 💡 Problem Breakdown
This is a foundational Document Object Model (DOM) manipulation task. The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The goal here is to select a specific HTML element on the page using its unique ID and then change the text it displays.

### ⚙️ Solution Walkthrough
The solution uses the global \`document\` object, which is the entry point to the DOM, and calls its \`.getElementById()\` method.
\`\`\`javascript
// 1. Select the element with the ID 'my-element'
const targetElement = document.getElementById('my-element');

// 2. Check if the element was found
if (targetElement) {
    // 3. Change its text content
    targetElement.textContent = 'New Text!';
}
\`\`\`
1.  **Selection**: \`document.getElementById()\` is the fastest and most reliable way to select a single element when you know its unique ID.
2.  **Null Check**: It's good practice to check if the element was actually found. If no element with the given ID exists, the method returns \`null\`.
3.  **Modification**: The \`.textContent\` property is used to set the text inside the element. This is safer than using \`.innerHTML\` if you are only dealing with text.

### 📚 Key Concepts
-   **DOM (Document Object Model)**: A tree-like representation of an HTML document, where each node is an object representing a part of the document.
-   **`document` object**: A global object in browsers that represents the entry point to the page's content.
-   **`textContent`**: A property used to get or set the text content of an element and its descendants.
`,
  'dom-get-elements-by-class-name': `
### 💡 Problem Breakdown
The goal is to select all elements on a page that share a common CSS class. Unlike \`getElementById\`, this will typically return a collection of multiple elements.

### ⚙️ Solution Walkthrough
The \`.getElementsByClassName()\` method is used. It returns a live \`HTMLCollection\`.
\`\`\`html
<div class="item">First</div>
<p class="item">Second</p>
\`\`\`
\`\`\`javascript
// 1. Select all elements with the class 'item'
const elements = document.getElementsByClassName('item');

// 2. Iterate over the collection
// A standard 'for' loop is needed because it's a live collection, not an Array.
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = 'blue';
}
\`\`\`
1.  **Selection**: \`getElementsByClassName('item')\` returns all elements with that class.
2.  **`HTMLCollection`**: This is an "array-like" object. It has a `.length\` property and can be indexed, but it does not have array methods like \`.forEach()\`.
3.  **Iteration**: A standard \`for\` loop is the most reliable way to iterate over an \`HTMLCollection\`.

### 📚 Key Concepts
-   **`HTMLCollection`**: A live, array-like collection of elements. "Live" means if you add or remove elements from the DOM that match the selector, the collection is automatically updated.
-   **CSS Class**: An attribute used to specify one or more class names for an HTML element, used for styling and selection.
`,
  'dom-query-selector': `
### 💡 Problem Breakdown
The task is to select an element using a CSS selector, just like you would in a stylesheet. \`querySelector()\` is a powerful and flexible modern method that finds the *first* element in the document that matches the specified selector.

### ⚙️ Solution Walkthrough
A CSS selector string is passed to \`document.querySelector()\`.
\`\`\`html
<div id="container">
  <p class="content">First paragraph.</p>
  <p class="content">Second paragraph.</p>
</div>
\`\`\`
\`\`\`javascript
// Select the first paragraph with the class 'content' inside the 'container' div
const firstP = document.querySelector('#container .content');

if (firstP) {
    firstP.textContent = 'Found it!';
}
\`\`\`
1.  **CSS Selector**: The method can take any valid CSS selector string, from simple class names (\`.my-class\`) to complex descendant selectors (\`#main > ul li:first-child\`).
2.  **First Match**: It's important to remember that it only ever returns the very first element it finds that matches, or \`null\` if no matches are found.

### 📚 Key Concepts
-   **CSS Selectors**: The patterns used to select the element(s) you want to style. JavaScript leverages this powerful syntax for element selection.
-   **`querySelector()`**: A modern method for finding the first element that matches a CSS selector.
`,
  'dom-query-selector-all': `
### 💡 Problem Breakdown
The task is to select *all* elements that match a CSS selector. \`querySelectorAll()\` is the counterpart to \`querySelector()\` and returns a collection of all matching elements.

### ⚙️ Solution Walkthrough
A CSS selector is passed to \`document.querySelectorAll()\`. It returns a static \`NodeList\`.
\`\`\`html
<p class="note">Note 1</p>
<p class="note">Note 2</p>
\`\`\`
\`\`\`javascript
// 1. Select all elements with the class 'note'
const allNotes = document.querySelectorAll('.note');

// 2. A NodeList has a .forEach method
allNotes.forEach(note => {
    note.style.fontWeight = 'bold';
});
\`\`\`
1.  **Selection**: `querySelectorAll('.note')` returns all elements matching the selector.
2.  **`NodeList`**: This method returns a \`NodeList\`, which is an array-like object. Modern browsers support the `.forEach()` method on \`NodeList\`, making it easy to iterate over. It is "static," meaning it's a snapshot of the DOM at the time of the call and does not update automatically if you add more matching elements.

### 📚 Key Concepts
-   **`NodeList`**: A collection of document nodes. It's similar to an \`HTMLCollection\` but can contain any node type and has a `.forEach()` method.
-   **`querySelectorAll()`**: A modern method for finding all elements that match a CSS selector.
`,
  'dom-addeventlistener': `
### 💡 Problem Breakdown
Web pages become interactive through events. An event is an action that occurs in the browser, such as a user clicking a button. The task is to "listen" for a specific event and run a piece of code (a callback function) when that event happens.

### ⚙️ Solution Walkthrough
The modern and standard way to handle events is with the \`.addEventListener()\` method.
\`\`\`javascript
// 1. Select the element to make interactive
const myButton = document.getElementById('my-button');

if (myButton) {
    // 2. Add the event listener
    myButton.addEventListener('click', () => {
        alert('Button was clicked!');
    });
}
\`\`\`
1.  **Select the Element**: First, we select the button element.
2.  **`.addEventListener(type, listener)`**: We call this method on the selected element.
    *   **`type`**: A string for the event to listen for (e.g., \`'click'\`, \`'mouseover'\`).
    *   **`listener`**: The callback function to execute when the event occurs.
3.  **Execution**: Now, whenever the user clicks \`myButton\`, the provided arrow function will be called.

### 📚 Key Concepts
-   **Events**: Actions or occurrences in the browser that your code can react to.
-   **Event Listener/Handler**: A function that waits for a specific event on an element and then executes.
-   **`addEventListener`**: The recommended way to register an event handler. It's flexible because you can add multiple listeners for the same event to a single element.
`,
  'dom-create-and-append': `
### 💡 Problem Breakdown
The task is to dynamically create a new HTML element in JavaScript and add it to the DOM (the live document). This is a fundamental skill for building dynamic web applications that update their content without a page reload.

### ⚙️ Solution Walkthrough
The solution uses two key methods: \`document.createElement()\` to create the element, and \`parentElement.appendChild()\` to insert it into the DOM.
\`\`\`javascript
// 1. Create the new element in memory
const newListItem = document.createElement('li');

// 2. Set its content
newListItem.textContent = 'New Item';

// 3. Select the parent element you want to add it to
const list = document.querySelector('ul');

// 4. Append the new element as the last child of the parent
if (list) {
    list.appendChild(newListItem);
}
\`\`\`
1.  **`createElement(tagName)`**: This method creates a new, empty element of the specified tag type. It exists in memory but is not yet part of the page.
2.  **`appendChild(childNode)`**: This method adds a node to the end of the list of children of a specified parent node.

### 📚 Key Concepts
-   **DOM Manipulation**: The process of dynamically creating, changing, or deleting elements on a web page.
`,
  'dom-remove-element': `
### 💡 Problem Breakdown
The goal is to dynamically remove an element from the DOM.

### ⚙️ Solution Walkthrough
The modern and simplest way to remove an element is to select it and then call the `.remove()` method directly on it.
\`\`\`javascript
// 1. Select the element you want to remove
const elementToRemove = document.getElementById('to-remove');

// 2. Call the .remove() method
if (elementToRemove) {
    elementToRemove.remove();
}
\`\`\`
An older (but still valid) way is to get the element's parent and call \`parent.removeChild(element)\`. The `.remove()` method is just a more convenient shortcut.

### 📚 Key Concepts
-   **`.remove()` method**: A modern method called on a DOM element to remove it from the tree it belongs to.
`,
  'dom-innerhtml-vs-textcontent': `
### 💡 Problem Breakdown
This is a critical distinction for both functionality and security. Both \`.innerHTML\` and \`.textContent\` can change the content of an element, but they do so in very different ways.
- **`.textContent`**: Gets or sets only the text content. It treats all strings as literal text.
- **`.innerHTML`**: Gets or sets the HTML content. The browser will parse the string as HTML, creating DOM nodes from it.

### ⚙️ Solution Walkthrough
The two properties are used to set content on two different elements.
\`\`\`javascript
const el1 = document.getElementById('div1');
const el2 = document.getElementById('div2');
const myString = '<b>This is bold</b>';

if (el1) el1.textContent = myString;
// Result in browser: The literal text "<b>This is bold</b>"

if (el2) el2.innerHTML = myString;
// Result in browser: The text "This is bold" rendered in a bold font.
\`\`\`
**Security Note**: You should never use \`.innerHTML\` to set content that comes from a user, as this can lead to Cross-Site Scripting (XSS) attacks. If a user inputs a string like \`<script>alert('hacked')</script>\` and you render it with \`.innerHTML\`, the script will execute. \`.textContent\` is always safe as it doesn't parse the HTML.

### 📚 Key Concepts
-   **Cross-Site Scripting (XSS)**: A security vulnerability that can be caused by using \`.innerHTML\` with untrusted user input.
-   **DOM Parsing**: The process by which the browser converts an HTML string into live DOM nodes.
`,
  'dom-get-set-attribute': `
### 💡 Problem Breakdown
HTML elements have attributes (e.g., \`<a href="...">\`, \`<img src="...">\`). JavaScript provides methods to read the values of these attributes and to set or change them dynamically.

### ⚙️ Solution Walkthrough
\`.getAttribute()\` is used to read an attribute, and \`.setAttribute()\` is used to set one.
\`\`\`javascript
const myLink = document.getElementById('my-link');
const myButton = document.getElementById('my-button');

// Get an attribute
const href = myLink.getAttribute('href'); // Returns the value of the href attribute

// Set an attribute
myButton.setAttribute('disabled', 'true'); // Disables the button
\`\`\`
1.  **`getAttribute(attributeName)`**: Returns the value of the specified attribute on the element.
2.  **`setAttribute(name, value)`**: Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

### 📚 Key Concepts
-   **HTML Attributes**: Keywords used in HTML tags that define certain characteristics or behaviors of the element.
-   **DOM Properties vs. Attributes**: While they often correspond (e.g., `img.src` property and `src` attribute), they are not always the same. \`getAttribute\` and \`setAttribute\` work directly with the HTML attribute string.
`,
  'dom-data-attributes': `
### 💡 Problem Breakdown
Custom data attributes are a standard way to store extra, private information on an HTML element. The attribute name must start with \`data-\`. JavaScript provides a simple way to access these attributes through the \`.dataset\` property.

### ⚙️ Solution Walkthrough
A `data-user-id` attribute is set in HTML and accessed via `element.dataset`.
\`\`\`html
<div id="user" data-user-id="123" data-user-role="admin"></div>
\`\`\`
\`\`\`javascript
const userElement = document.getElementById('user');

// Accessing the data
const userId = userElement.dataset.userId; // "123"
const userRole = userElement.dataset.userRole; // "admin"

// Modifying the data
userElement.dataset.userRole = 'editor';
\`\`\`
1.  **Attribute Naming**: The part of the attribute name after `data-` (e.g., \`user-id\`) is converted to camelCase (e.g., \`userId\`) to become the key on the `.dataset` object.
2.  **`.dataset` Property**: This property on an element provides a convenient map-like object to read and write its `data-*` attributes.

### 📚 Key Concepts
-   **Custom Data Attributes**: A standard-compliant way to embed custom data in HTML.
`,
  'dom-modify-styles': `
### 💡 Problem Breakdown
You can dynamically change the inline CSS styles of an element using its `.style` property in JavaScript.

### ⚙️ Solution Walkthrough
The `.style` property of an element is accessed and its properties are modified.
\`\`\`javascript
const myElement = document.getElementById('my-element');

if (myElement) {
    // Change the text color
    myElement.style.color = 'red';
    
    // Change the background color
    myElement.style.backgroundColor = 'yellow';
}
\`\`\`
1.  **`.style` property**: This property returns a \`CSSStyleDeclaration\` object that represents the element's inline style.
2.  **Property Naming**: CSS properties with hyphens (e.g., \`background-color\`) are converted to camelCase (e.g., \`backgroundColor\`) when accessed via the `.style` object.
3.  **Note**: This only modifies the inline \`style\` attribute of the element. It does not change any styles defined in external or internal stylesheets. For toggling styles, it's often better to add or remove a CSS class.

### 📚 Key Concepts
-   **Inline Styles**: CSS styles applied directly to an element via its `style` attribute.
`,
  'dom-toggle-class': `
### 💡 Problem Breakdown
The goal is to dynamically change the appearance of an element by adding or removing a CSS class. This is a very common technique for things like highlighting a selected item or showing/hiding elements. The \`.toggle()\` method is a convenient shortcut for this.

### ⚙️ Solution Walkthrough
The \`classList\` property provides a \`toggle\` method.
\`\`\`javascript
const item = document.getElementById('toggle-item');

if (item) {
    item.addEventListener('click', () => {
        // Toggles the 'highlight' class on each click
        item.classList.toggle('highlight');
    });
}
\`\`\`
\`\`\`css
.highlight { background-color: yellow; font-weight: bold; }
\`\`\`
1.  **`element.classList`**: This property returns a live \`DOMTokenList\` collection of the element's class attributes. It's the modern way to interact with classes.
2.  **`.toggle('className')`**: The \`toggle\` method:
    *   If the class **does not** exist, it adds it.
    *   If the class **already exists**, it removes it.

### 📚 Key Concepts
-   **CSS Classes**: The preferred way to manage element styles.
-   **`element.classList`**: An interface with convenient methods like \`add()\`, \`remove()\`, \`contains()\`, and \`toggle()\`.
`,
  'dom-navigation': `
### 💡 Problem Breakdown
The DOM is a tree of nodes. DOM navigation properties allow you to move between these nodes—from a child to a parent, or between siblings—starting from a given element.

### ⚙️ Solution Walkthrough
Various properties are used to navigate from a central element.
\`\`\`html
<div id="parent">
  <p>Sibling 1</p>
  <p id="start">Start Here</p>
  <p>Sibling 2</p>
</div>
\`\`\`
\`\`\`javascript
const startElement = document.getElementById('start');

// Get the parent
const parent = startElement.parentElement; // The 'parent' div

// Get all children of the parent
const allChildren = parent.children; // HTMLCollection of the 3 <p> tags

// Get the next element sibling
const nextSibling = startElement.nextElementSibling; // The 'Sibling 2' paragraph
\`\`\`
-   **`.parentElement`**: Returns the parent element node.
-   **`.children`**: Returns a live \`HTMLCollection\` of the element's child *elements*.
-   **`.nextElementSibling`** / **`.previousElementSibling`**: Returns the next or previous *element* sibling, ignoring text nodes (like whitespace).

### 📚 Key Concepts
-   **DOM Tree**: The hierarchical structure of an HTML document.
-   **Node vs. Element**: A "node" can be an element, a text node, a comment node, etc. An "element" is specifically an HTML tag. Navigation properties ending in `Element` are often more convenient as they filter out non-element nodes.
`,
  'dom-form-submit-event': `
### 💡 Problem Breakdown
The goal is to capture the data from an HTML form when it's submitted, but without causing the page to reload, which is the default behavior of a form submission.

### ⚙️ Solution Walkthrough
An event listener is attached to the form's \`submit\` event. The \`event.preventDefault()\` method is used to stop the default browser action.
\`\`\`html
<form id="myForm">
  <input type="text" id="myInput" />
  <button type="submit">Submit</button>
</form>
\`\`\`
\`\`\`javascript
const form = document.getElementById('myForm');
const input = document.getElementById('myInput');

form.addEventListener('submit', (event) => {
  // 1. Prevent the default form submission (page reload)
  event.preventDefault();
  
  // 2. Now you can get the data and do something with it
  console.log('Form submitted with value:', input.value);
});
\`\`\`
1.  **`submit` Event**: This event fires on the `<form>` element itself when it is submitted.
2.  **`event.preventDefault()`**: This crucial method stops the browser from performing the default action associated with the event. For a form submission, the default action is to send the data to a server and reload the page.

### 📚 Key Concepts
-   **`event.preventDefault()`**: A method on the event object that cancels the event's default action.
`,
  'localstorage-set-get': `
### 💡 Problem Breakdown
The task is to store a piece of data in the user's browser in a way that it persists even if the user closes the tab or the entire browser. This is done using the Web Storage API, specifically \`localStorage\`.

### ⚙️ Solution Walkthrough
The \`localStorage\` global object provides simple methods for saving and retrieving string data.
\`\`\`javascript
// 1. Saving data: .setItem(key, value)
localStorage.setItem('userTheme', 'dark');

// 2. Retrieving data later (even after browser restart)
const savedTheme = localStorage.getItem('userTheme'); // "dark"

// 3. To store objects, use JSON
const user = { name: "Alice", id: 1 };
localStorage.setItem('userData', JSON.stringify(user));
const retrievedUser = JSON.parse(localStorage.getItem('userData'));
\`\`\`
1.  **`.setItem(key, value)`**: Saves a key-value pair. The value must be a string.
2.  **`.getItem(key)`**: Retrieves the string value for a given key, or \`null\` if the key does not exist.
3.  **Persistence**: Data in \`localStorage\` is specific to the document's origin (domain) and persists until it's explicitly cleared by code or the user.

### 📚 Key Concepts
-   **`localStorage`**: A Web API for persistent client-side storage.
-   **Serialization**: Using \`JSON.stringify\` is necessary to store non-string data like objects and arrays.
`,
  'sessionstorage-set-get': `
### 💡 Problem Breakdown
\`sessionStorage\` is another part of the Web Storage API. It works exactly like \`localStorage\`, but with one key difference: the data is only stored for the duration of the page **session**. A page session lasts for as long as the browser is open and survives over page reloads and restores. Closing a tab or window ends the session and clears the data.

### ⚙️ Solution Walkthrough
The API is identical to \`localStorage\`, but with the \`sessionStorage\` global object.
\`\`\`javascript
// 1. Saving data for the session
sessionStorage.setItem('sessionToken', 'abc12345');

// 2. Retrieving data within the same session
const token = sessionStorage.getItem('sessionToken'); // "abc12345"
\`\`\`
This is useful for storing temporary data that shouldn't persist indefinitely, like a temporary user token or the state of a multi-step form.

### 📚 Key Concepts
-   **`sessionStorage`**: A Web API for session-based client-side storage.
`,
  'window-location-object': `
### 💡 Problem Breakdown
The \`window.location\` object contains information about the current URL of the document. It can be used to get parts of the URL or to navigate the browser to a new page.

### ⚙️ Solution Walkthrough
Various properties of the `location` object are accessed.
\`\`\`javascript
// Assuming the current URL is: https://example.com/products?id=123#reviews

// Get the full URL
console.log(window.location.href); // "https://example.com/products?id=123#reviews"

// Get the hostname
console.log(window.location.hostname); // "example.com"

// Get the path
console.log(window.location.pathname); // "/products"

// Get the query string
console.log(window.location.search); // "?id=123"

// Navigate to a new page
// window.location.assign('https://new-page.com');
\`\`\`
### 📚 Key Concepts
-   **`window.location`**: A browser object that provides information about the current URL and methods for navigation.
`,
  'navigator-geolocation': `
### 💡 Problem Breakdown
The Geolocation API allows web applications to access a user's geographical position. For privacy reasons, the user must grant explicit permission for the page to access this information. The API is callback-based.

### ⚙️ Solution Walkthrough
The \`navigator.geolocation.getCurrentPosition()\` method is used. It takes a success callback and an optional error callback.
\`\`\`javascript
// Check if the Geolocation API is supported
if ("geolocation" in navigator) {
  // Get the current position
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Success callback
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(\`Latitude: \${latitude}, Longitude: \${longitude}\`);
    },
    (error) => {
      // Error callback
      console.error("Error getting location:", error.message);
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}
\`\`\`
### 📚 Key Concepts
-   **Geolocation API**: A browser API for retrieving a user's location.
-   **Permissions API**: Modern web APIs that access sensitive information often require explicit user permission.
`,
  'fetch-api-dom-update': `
### 💡 Problem Breakdown
This problem combines two concepts: fetching data from an external API and then using that data to dynamically update the content of the page. This is a core pattern in modern web development.

### ⚙️ Solution Walkthrough
An \`async\` function is used to fetch the data. Once the data is retrieved and parsed, \`.textContent\` is used to update a DOM element.
\`\`\`javascript
async function fetchAndDisplay() {
  const displayElement = document.getElementById('data-display');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    
    // Update the DOM with the fetched data
    displayElement.textContent = \`Todo Title: \${data.title}\`;
  } catch (error) {
    displayElement.textContent = "Failed to fetch data.";
  }
}
\`\`\`
### 📚 Key Concepts
-   **Data-Driven UI**: The principle that the user interface should be a reflection of the application's data. When the data changes (e.g., by fetching it from an API), the UI should be updated to match.
`,
  'history-api-pushstate': `
### 💡 Problem Breakdown
This is a conceptual problem about the HTML5 History API, which is fundamental to how Single-Page Applications (SPAs) work. The `history.pushState()` method allows you to add an entry to the browser's session history stack and change the URL in the address bar *without* triggering a full page reload.

### ⚙️ Solution Walkthrough
A conceptual example of using `pushState` in response to a user clicking a navigation link.
\`\`\`javascript
// User clicks a link to '/about'
const aboutLink = document.getElementById('about-link');
aboutLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the link from causing a page load
  
  const stateObj = { page: 'about' };
  const title = 'About Us';
  const url = '/about';
  
  // Change the URL without reloading
  history.pushState(stateObj, title, url);
  
  // You would then have code to fetch and render the content for the about page.
});
\`\`\`
### 📚 Key Concepts
-   **History API**: A browser API that gives you access to the browser's session history.
-   **Single-Page Application (SPA)**: A web application that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages.
`,
'dom-insert-before': `
### 💡 Problem Breakdown
While \`appendChild\` adds an element to the end of a parent's child list, \`insertBefore\` gives you more control, allowing you to insert a new element *before* a specific existing child element.

### ⚙️ Solution Walkthrough
The method is called on the parent element, taking the new node and the reference node as arguments.
\`\`\`html
<ul id="myList">
  <li>Item 2</li>
</ul>
\`\`\`
\`\`\`javascript
const list = document.getElementById('myList');
const item2 = list.children[0];
const newItem = document.createElement('li');
newItem.textContent = 'Item 1';

// Insert the new item before item2
list.insertBefore(newItem, item2);
\`\`\`
1.  **`parent.insertBefore(newNode, referenceNode)`**: Inserts \`newNode\` into the \`parent\`'s list of children, just before the \`referenceNode\`.
2.  **If `referenceNode` is null**: If the reference node is \`null\`, \`insertBefore\` behaves just like \`appendChild\`.

### 📚 Key Concepts
-   **DOM Manipulation**: Precise control over where new elements are inserted into the DOM tree.
`,
'dom-replace-child': `
### 💡 Problem Breakdown
The task is to replace an existing element in the DOM with a new one that you create in JavaScript.

### ⚙️ Solution Walkthrough
The \`.replaceChild()\` method is called on the parent of the node you want to replace.
\`\`\`html
<div id="container">
  <p id="old-p">Old paragraph.</p>
</div>
\`\`\`
\`\`\`javascript
const container = document.getElementById('container');
const oldP = document.getElementById('old-p');
const newP = document.createElement('p');
newP.textContent = 'New paragraph.';

// Replace the old paragraph with the new one
if (container && oldP) {
    container.replaceChild(newP, oldP);
}
\`\`\`
1.  **`parent.replaceChild(newNode, oldNode)`**: This method replaces the `oldNode` with the `newNode` within the specified `parent` element.

### 📚 Key Concepts
-   **DOM Manipulation**: Swapping out elements within the document tree.
`,
'dom-clone-node': `
### 💡 Problem Breakdown
The task is to create a copy of an existing DOM node. The \`.cloneNode()\` method can create either a "shallow" copy (just the node itself, without its children) or a "deep" copy (the node and all of its descendants).

### ⚙️ Solution Walkthrough
The method is called on the node to be cloned, with a boolean argument.
\`\`\`html
<div id="original">
  <p>Some text</p>
</div>
\`\`\`
\`\`\`javascript
const original = document.getElementById('original');

// Shallow clone (only the <div>, without the <p>)
const shallowClone = original.cloneNode(false);

// Deep clone (the <div> AND the <p> inside it)
const deepClone = original.cloneNode(true);
\`\`\`
1.  **`node.cloneNode(deep)`**:
    - If `deep` is \`false\` (or omitted), only the node itself is cloned.
    - If `deep` is \`true\`, the node and its entire subtree are cloned.

### 📚 Key Concepts
-   **Shallow vs. Deep Copy**: A fundamental concept in programming that applies to data structures like the DOM tree.
`,
'dom-input-event': `
### 💡 Problem Breakdown
The \`input\` event is a modern and reliable way to detect any change to the value of an input element (\`<input>\`, \`<textarea>\`, \`<select>\`). It fires immediately whenever the user types, pastes, or otherwise changes the value, which is often more responsive than the older \`change\` event.

### ⚙️ Solution Walkthrough
An event listener for the \`input\` event is attached to a text field.
\`\`\`javascript
const myInput = document.getElementById('my-input');
const display = document.getElementById('display');

myInput.addEventListener('input', (event) => {
  // event.target refers to the input element
  display.textContent = \`You typed: \${event.target.value}\`;
});
\`\`\`
### 📚 Key Concepts
-   **`input` Event**: A DOM event that fires synchronously when the value of an element is changed.
-   **Event Object**: The \`event\` object passed to the listener contains useful information, including \`event.target\`, which is a reference to the element that dispatched the event.
`,
'dom-get-radio-value': `
### 💡 Problem Breakdown
Radio buttons are used in groups (sharing the same \`name\` attribute) to allow a user to select only one option. The task is to find which option is currently selected and retrieve its value.

### ⚙️ Solution Walkthrough
A CSS selector is used with \`querySelector\` to find the checked radio button within the group.
\`\`\`html
<input type="radio" name="color" value="red"> Red
<input type="radio" name="color" value="green" checked> Green
<input type="radio" name="color" value="blue"> Blue
\`\`\`
\`\`\`javascript
// The :checked pseudo-class finds the selected radio button
const selectedColor = document.querySelector('input[name="color"]:checked');

if (selectedColor) {
  console.log(selectedColor.value); // "green"
}
\`\`\`
### 📚 Key Concepts
-   **CSS Pseudo-classes**: Selectors like \`:checked\` that select elements based on state information that cannot be represented in the document tree.
-   **`querySelector()`**: A versatile method for selecting elements using powerful CSS selectors.
`,
'localstorage-remove-item': `
### 💡 Problem Breakdown
The task is to remove a specific key-value pair from the browser's \`localStorage\`.

### ⚙️ Solution Walkthrough
The \`.removeItem()\` method is used, which takes the key of the item to be removed as an argument.
\`\`\`javascript
// First, add an item to be removed
localStorage.setItem('userTheme', 'dark');

// Then, remove it
localStorage.removeItem('userTheme');

// Trying to get it now will return null
const theme = localStorage.getItem('userTheme'); // null
\`\`\`
### 📚 Key Concepts
-   **`localStorage`**: A Web API for persistent client-side key-value storage.
-   **`.removeItem()`**: The method used to delete a single item from storage.
`,
'localstorage-clear': `
### 💡 Problem Breakdown
The task is to completely clear all data stored in a domain's \`localStorage\`, removing every key-value pair.

### ⚙️ Solution Walkthrough
The \`.clear()\` method is used. It takes no arguments.
\`\`\`javascript
localStorage.setItem('theme', 'dark');
localStorage.setItem('token', 'xyz');

console.log(localStorage.length); // 2

// Clear all items
localStorage.clear();

console.log(localStorage.length); // 0
\`\`\`
### 📚 Key Concepts
-   **`localStorage`**: A Web API for persistent client-side storage.
-   **`.clear()`**: The method used to delete all items from storage for the current origin.
`,
'history-api-replacestate': `
### 💡 Problem Breakdown
This is a conceptual problem about the HTML5 History API. While \`history.pushState()\` adds a *new* entry to the history stack, \`history.replaceState()\` *modifies the current* history entry. This is useful for updating the URL in response to user actions that shouldn't create a new "back" navigation point, such as updating a URL with filter parameters.

### ⚙️ Solution Walkthrough
A conceptual example of updating a URL with a search filter.
\`\`\`javascript
// Initial URL: /products
// User applies a filter
const newState = { filter: 'sale' };
const newUrl = '/products?filter=sale';

// The URL changes, but no new history entry is created.
// The back button will go to the page before '/products'.
history.replaceState(newState, '', newUrl);
\`\`\`
### 📚 Key Concepts
-   **History API**: A browser API that gives you access to the browser's session history.
-   **`replaceState()`**: A method for modifying the current history entry.
`,
'history-api-popstate': `
### 💡 Problem Breakdown
This is a conceptual problem about handling browser navigation in a Single-Page Application (SPA). When a user clicks the browser's back or forward buttons, the URL changes in response to \`pushState\` or \`replaceState\`. The \`popstate\` event is fired on the \`window\` object to notify your application of this change.

### ⚙️ Solution Walkthrough
An event listener is added to the `window` to handle history navigation.
\`\`\`javascript
// This listener runs when the user clicks back/forward
window.addEventListener('popstate', (event) => {
  // The 'state' object we saved with pushState is available
  if (event.state) {
    console.log("Navigating to state:", event.state);
    // Here, you would typically have logic to render the view
    // corresponding to the new state/URL.
  }
});
\`\`\`
### 📚 Key Concepts
-   **`popstate` Event**: The event that fires when the active history entry changes.
-   **Single-Page Application (SPA)**: The History API and the \`popstate\` event are the core building blocks of SPA routing.
`,
'urlsearchparams': `
### 💡 Problem Breakdown
Working with URL query strings (e.g., \`?q=js&page=2\`) via string manipulation can be error-prone. The \`URLSearchParams\` interface provides a standard and convenient way to parse, read, and write query strings.

### ⚙️ Solution Walkthrough
A new \`URLSearchParams\` object is created from a query string.
\`\`\`javascript
const queryString = "?q=js&page=2";
const searchParams = new URLSearchParams(queryString);

// Get a parameter's value
searchParams.get('q'); // "js"

// Check for a parameter
searchParams.has('page'); // true

// Add a new parameter
searchParams.append('sort', 'new');

// Get the updated string
searchParams.toString(); // "q=js&page=2&sort=new"
\`\`\`
### 📚 Key Concepts
-   **`URLSearchParams`**: A Web API that provides utility methods to work with the query string of a URL.
`,
'document-cookie': `
### 💡 Problem Breakdown
This problem covers the basic, low-level way to interact with browser cookies. `document.cookie` is a simple string property, but interacting with it is not straightforward because it represents all cookies for the domain as a single semicolon-separated string.

### ⚙️ Solution Walkthrough
A new cookie is created by assigning a string to `document.cookie`.
\`\`\`javascript
// Writing a cookie
// Each cookie is a key=value pair. You can add attributes like expires, path, etc.
document.cookie = "username=John Doe; SameSite=Lax; secure";

// Reading cookies
// This returns ALL cookies for the domain in a single string.
const allCookies = document.cookie; // e.g., "other=value; username=John Doe"

// You have to parse this string manually to get a specific cookie's value.
\`\`\`
**Note**: Because of its complexity, it's very common to use a library for cookie management or to handle them server-side.

### 📚 Key Concepts
-   **Cookies**: Small pieces of data stored on the client's computer, often used for session management and tracking.
-   **`document.cookie`**: The low-level property for cookie access in the browser.
`,
'fetch-api-credentials': `
### 💡 Problem Breakdown
This is a conceptual problem about a key security feature of the \`fetch\` API. By default, \`fetch\` does not send or receive any cookies with cross-origin requests. The \`credentials\` option allows you to change this behavior.

### ⚙️ Solution Walkthrough
The three modes of the `credentials` option are explained.
- **`omit`** (default): Never sends cookies or HTTP authentication headers.
- **`same-origin`**: Sends credentials only if the request URL is on the same origin as the calling script.
- **`include`**: Always sends credentials, even for cross-origin requests. The server *must* respond with the `Access-Control-Allow-Credentials: true` header for this to work.

\`\`\`javascript
// Example of making a cross-origin request that includes cookies
fetch('https://api.other-domain.com/data', {
  credentials: 'include'
});
\`\`\`
### 📚 Key Concepts
-   **CORS (Cross-Origin Resource Sharing)**: A browser security mechanism that controls how web pages request resources from a different domain.
-   **Credentials**: Information like cookies and authentication headers used to identify a user.
`,
'canvas-api-conceptual': `
### 💡 Problem Breakdown
This is a conceptual overview of the Canvas API. The `<canvas>` HTML element provides a "bitmap," a drawable region in the document. JavaScript is used to draw graphics onto this canvas.

### ⚙️ Solution Walkthrough
The basic steps to draw on a canvas are:
1.  **Get the Canvas Element**: Select the `<canvas>` element from the DOM.
2.  **Get the Rendering Context**: Call `.getContext('2d')` on the canvas element. This returns an object with all the methods and properties for drawing.
3.  **Draw**: Use the context's methods to draw.
\`\`\`javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set drawing styles
ctx.fillStyle = 'green';
ctx.strokeStyle = 'black';

// Draw a filled rectangle
ctx.fillRect(10, 10, 150, 100);

// Draw the outline of a rectangle
ctx.strokeRect(20, 20, 130, 80);
\`\`\`
### 📚 Key Concepts
-   **Canvas API**: A low-level, procedural API for drawing graphics in the browser.
-   **Rendering Context**: The object that provides the actual drawing methods.
`,
'web-audio-api-conceptual': `
### 💡 Problem Breakdown
The Web Audio API is a high-level API for processing and synthesizing audio in web applications. It's not for simply playing an audio file; it's for creating complex audio effects, visualizations, and generating sounds from scratch.

### ⚙️ Solution Walkthrough
The core concept is an **audio routing graph**.
1.  **Create an `AudioContext`**: This is the central object that manages the audio graph.
2.  **Create Audio Nodes**: These are the building blocks. Examples include:
    - **Source nodes**: `OscillatorNode` (generates a tone), `AudioBufferSourceNode` (plays audio data).
    - **Effect nodes**: `GainNode` (controls volume), `BiquadFilterNode` (creates filters like low-pass).
    - **Destination node**: `audioCtx.destination` (the user's speakers).
3.  **Connect the Nodes**: You connect the output of one node to the input of another using the `.connect()` method, forming a processing chain.
\`\`\`javascript
const audioCtx = new AudioContext();
const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

// Connect oscillator -> gain -> speakers
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
\`\`\`
### 📚 Key Concepts
-   **Web Audio API**: A powerful API for advanced audio processing.
-   **Audio Graph**: A directed graph of audio nodes that defines how audio is processed.
`,
'drag-and-drop-api-conceptual': `
### 💡 Problem Breakdown
This is a conceptual overview of the native browser Drag and Drop (DnD) API. It allows users to grab an element and drag it to another location. It relies on a sequence of DOM events.

### ⚙️ Solution Walkthrough
The main events are:
1.  **`dragstart`**: Fired on the element being dragged. Here you set the drag data: `event.dataTransfer.setData('text/plain', 'some data')`.
2.  **`dragover`**: Fired continuously on an element as a dragged item is over it. You **must** call `event.preventDefault()` in this listener to indicate that the element is a valid drop target.
3.  **`drop`**: Fired on the drop target when the user releases the mouse. Here you get the data: `const data = event.dataTransfer.getData('text/plain')`. You also need to call `preventDefault()` to stop the browser's default drop behavior (like opening a link).
4.  **`dragenter`**, **`dragleave`**, **`dragend`**: Other events used for styling and cleanup.

### 📚 Key Concepts
-   **Drag and Drop API**: A set of DOM events for implementing native drag-and-drop.
`,
'page-visibility-api-conceptual': `
### 💡 Problem Breakdown
The Page Visibility API provides a way for an application to know when it is visible or hidden to the user. This is crucial for performance and user experience, as you can pause resource-intensive tasks (like animations or video playback) when the user isn't looking at the page.

### ⚙️ Solution Walkthrough
You listen for the `visibilitychange` event on the `document`.
\`\`\`javascript
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // The page is hidden, pause video, etc.
    console.log('Page is now hidden');
  } else {
    // The page is visible, resume activity.
    console.log('Page is now visible');
  }
});
// You can also check the current state with document.visibilityState
\`\`\`
### 📚 Key Concepts
-   **Page Visibility API**: An API for detecting when a page is visible or hidden.
-   **Performance Optimization**: A key use case is to save battery and CPU by pausing unnecessary work.
`,
'fullscreen-api-conceptual': `
### 💡 Problem Breakdown
The Fullscreen API allows a web application to programmatically request that an element (and its descendants) be displayed in full-screen mode, removing all browser UI. This is essential for immersive experiences like games or video players.

### ⚙️ Solution Walkthrough
The `.requestFullscreen()` method is called on an element. This action must be initiated by a user gesture (like a click) for security reasons.
\`\`\`javascript
const myElement = document.getElementById('video-player');
const fullscreenButton = document.getElementById('fullscreen-btn');

fullscreenButton.addEventListener('click', () => {
  if (myElement.requestFullscreen) {
    myElement.requestFullscreen();
  }
});

// To exit fullscreen:
// document.exitFullscreen();
\`\`\`
### 📚 Key Concepts
-   **Fullscreen API**: An API for presenting web content using the entire screen.
-   **User-initiated Events**: APIs with security implications often require a direct user action to be triggered.
`,
'service-workers-conceptual': `
### 💡 Problem Breakdown
A Service Worker is a script that your browser runs in the background, separate from a web page. It acts as a client-side proxy, allowing you to intercept and handle network requests, manage a cache of responses, and enable features like offline support and push notifications.

### ⚙️ Solution Walkthrough
The lifecycle of a Service Worker involves three main steps:
1.  **Registration**: In your main page's JavaScript, you register the service worker file.
    \`\`\`javascript
    navigator.serviceWorker.register('/sw.js');
    \`\`\`
2.  **Installation**: The first time the service worker runs, an `install` event is fired. This is where you typically "pre-cache" your core assets (CSS, JS, images).
3.  **Activation & Fetch**: Once installed, the service worker can activate. You can then listen for the `fetch` event, which fires for every network request made by your page. In this event, you can decide whether to serve a response from the cache or let the request go to the network.

### 📚 Key Concepts
-   **Service Worker**: A script that acts as a network proxy.
-   **Offline First**: A design pattern where an application attempts to serve content from a local cache before trying the network, enabled by service workers.
`,
'indexeddb-conceptual': `
### 💡 Problem Breakdown
IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. It's a transactional, object-oriented database that runs in the browser. It is much more powerful than `localStorage` but also much more complex.

### ⚙️ Solution Walkthrough
The API is asynchronous and heavily event-based.
1.  **Open a Database**: `const request = indexedDB.open('myDatabase', 1);`. This returns a request object.
2.  **Handle Upgrade**: The `onupgradeneeded` event fires the first time the database is created or a new version is opened. This is the only place you can create "object stores" (like tables in SQL).
3.  **Handle Success**: The `onsuccess` event fires when the database is successfully opened.
4.  **Create Transactions**: All data operations (add, get, delete) must happen within a transaction. You create a transaction on the database object.
5.  **Access Object Store**: Get an object store from the transaction.
6.  **Perform Operation**: Call methods like `.add(data)` or `.get(key)` on the object store. These also return request objects with their own `onsuccess` and `onerror` events.

Because of this complexity, it's almost always used with a promise-based wrapper library.

### 📚 Key Concepts
-   **IndexedDB**: A client-side transactional database.
-   **Object Store**: The primary way to store data in IndexedDB, analogous to a table.
`,
'web-share-api-conceptual': `
### 💡 Problem Breakdown
The Web Share API allows a web application to invoke the native sharing mechanism of the user's device (e.g., the share sheet on iOS or Android). This provides a much better user experience than custom share buttons for each social network.

### ⚙️ Solution Walkthrough
The API is a simple, promise-based method on the `navigator` object.
\`\`\`javascript
const shareButton = document.getElementById('share-btn');

shareButton.addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'My Awesome Page',
        text: 'Check out this page!',
        url: 'https://example.com'
      });
      console.log('Content shared successfully!');
    } catch (err) {
      console.error('Error sharing:', err);
    }
  } else {
    // Fallback for browsers that don't support it
    console.log('Web Share API not supported.');
  }
});
\`\`\`
1.  **Feature Detection**: First, check if `navigator.share` exists.
2.  **User Gesture**: Like the Fullscreen API, it must be called in response to a user action like a click.
3.  **Call `.share()`**: The method takes an object with the data to be shared and returns a promise.

### 📚 Key Concepts
-   **Web Share API**: A modern API for integrating with a device's native sharing capabilities.
`,
'async-clipboard-api-conceptual': `
### 💡 Problem Breakdown
The Asynchronous Clipboard API provides a modern, secure, and promise-based way to interact with the system clipboard. It's the recommended replacement for the older `document.execCommand()` method.

### ⚙️ Solution Walkthrough
The API is available on the `navigator.clipboard` object.
\`\`\`javascript
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

async function pasteText() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Pasted:', text);
  } catch (err) {
    console.error('Failed to read clipboard: ', err);
  }
}
\`\`\`
1.  **Permissions**: The browser will often prompt the user for permission the first time a site tries to access the clipboard, especially for reading.
2.  **Promise-based**: The methods return promises, making them easy to use with `async/await`.

### 📚 Key Concepts
-   **Async Clipboard API**: The modern API for clipboard access.
`,
'performance-api-conceptual': `
### 💡 Problem Breakdown
The Performance API provides tools for measuring the performance of web applications with high precision. `performance.now()` is a key method that gives a high-resolution timestamp, independent of the system clock.

### ⚙️ Solution Walkthrough
`performance.now()` is used to measure the duration of an operation.
\`\`\`javascript
const start = performance.now();

// Perform some time-consuming operation
for (let i = 0; i < 1000000; i++) { /* ... */ }

const end = performance.now();
const duration = end - start;
console.log(\`Operation took \${duration.toFixed(2)} milliseconds.\`);
\`\`\`
The API also includes methods like `performance.mark()` and `performance.measure()` to create formal entries in the browser's performance timeline for more advanced profiling.

### 📚 Key Concepts
-   **Performance API**: A browser API for measuring web application performance.
-   **High-Resolution Time**: Provides timestamps accurate to fractions of a millisecond.
`,
'notifications-api-conceptual': `
### 💡 Problem Breakdown
The Notifications API allows a web page to display system-level notifications to the user. This is useful for things like chat messages or important updates, even if the user is in another tab.

### ⚙️ Solution Walkthrough
The process involves two steps: requesting permission and then creating a notification.
\`\`\`javascript
// 1. Request permission
function requestNotificationPermission() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  });
}

// 2. Show a notification (if permission is granted)
function showNotification() {
  if (Notification.permission === 'granted') {
    new Notification('Hello, World!', {
      body: 'This is a notification body.',
      icon: '/path/to/icon.png'
    });
  }
}
\`\`\`
1.  **Permission**: You must ask for the user's permission before you can show notifications.
2.  **`new Notification()`**: The constructor creates and displays the notification.

### 📚 Key Concepts
-   **Notifications API**: A Web API for displaying desktop notifications.
`,
'url-object-conceptual': `
### 💡 Problem Breakdown
The `URL` constructor provides a powerful and standard way to parse and manipulate URLs. It's much more robust than using string methods or regular expressions to deconstruct a URL.

### ⚙️ Solution Walkthrough
A new `URL` object is created from a string.
\`\`\`javascript
const myUrl = new URL('https://example.com:8080/path/page?q=test#hash');

console.log(myUrl.protocol);  // "https:"
console.log(myUrl.hostname);  // "example.com"
console.log(myUrl.port);      // "8080"
console.log(myUrl.pathname);  // "/path/page"
console.log(myUrl.search);    // "?q=test"
console.log(myUrl.hash);      // "#hash"

// You can also modify properties
myUrl.searchParams.set('page', '2');
console.log(myUrl.href); // "...?q=test&page=2#hash"
\`\`\`
### 📚 Key Concepts
-   **`URL` Object**: A built-in object that provides a structured representation of a URL.
`,
'matchmedia-api-conceptual': `
### 💡 Problem Breakdown
The `window.matchMedia()` method allows you to run a CSS media query in JavaScript. This enables you to create responsive logic in your JavaScript code, not just in your CSS.

### ⚙️ Solution Walkthrough
A media query is tested, and a listener is added for changes.
\`\`\`javascript
const mediaQuery = window.matchMedia('(max-width: 600px)');

// Check the initial state
if (mediaQuery.matches) {
  // The viewport is 600px or less
  console.log('Currently in mobile view');
}

// Add a listener for changes
mediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    console.log('Entered mobile view');
  } else {
    console.log('Exited mobile view');
  }
});
\`\`\`
### 📚 Key Concepts
-   **`window.matchMedia()`**: A Web API for testing and monitoring CSS media queries.
-   **Responsive Design**: The practice of making web applications work well on a variety of devices and screen sizes.
`,
'requestidlecallback-conceptual': `
### 💡 Problem Breakdown
`requestIdleCallback` is a browser API that queues a function to be called during a browser's idle periods. This is a powerful tool for performance optimization, allowing you to run low-priority or background tasks without delaying more critical work like responding to user input or running animations.

### ⚙️ Solution Walkthrough
A low-priority task is scheduled with `requestIdleCallback`.
\`\`\`javascript
requestIdleCallback(() => {
  // This code will run when the browser is idle
  sendAnalyticsData({ event: 'page_view' });
}, { timeout: 2000 }); // Optional timeout
\`\`\`
1.  **Idle Periods**: The browser will try to run the callback when the main event loop is idle.
2.  **`deadline` object**: The callback receives a `deadline` object with a `.timeRemaining()` method, which you can check to see if you have enough time to complete your task before the browser needs to do something else.

### 📚 Key Concepts
-   **`requestIdleCallback`**: A performance API for scheduling background tasks.
`,
'formdata-object': `
### 💡 Problem Breakdown
The `FormData` object provides an easy way to construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the `fetch` API.

### ⚙️ Solution Walkthrough
A `FormData` object is created directly from a `<form>` element.
\`\`\`html
<form id="myForm">
  <input name="username" value="test">
  <input name="email" value="test@example.com">
</form>
\`\`\`
\`\`\`javascript
const myForm = document.getElementById('myForm');
const formData = new FormData(myForm);

// FormData can be used directly as the body for a fetch request
fetch('/api/submit', {
  method: 'POST',
  body: formData
});
\`\`\`
This is much simpler than manually collecting the value from each form field.

### 📚 Key Concepts
-   **`FormData`**: A Web API for constructing and sending form data.
`,
'dom-contains-method': `
### 💡 Problem Breakdown
The `.contains()` method is a useful DOM utility that returns a boolean value indicating whether a node is a descendant of a given node (i.e., it is the node itself, or one of its children, or one of its children's children, and so on).

### ⚙️ Solution Walkthrough
The method is used to check if an element is inside another.
\`\`\`html
<div id="parent">
  <p id="child">Hello</p>
</div>
\`\`\`
\`\`\`javascript
const parent = document.getElementById('parent');
const child = document.getElementById('child');
const unrelated = document.body;

parent.contains(child);     // true
parent.contains(parent);    // true
parent.contains(unrelated); // false
\`\`\`
### 📚 Key Concepts
-   **DOM Tree Traversal**: `.contains()` provides a simple way to check the hierarchical relationship between two nodes.
`,
'storage-event-conceptual': `
### 💡 Problem Breakdown
The `storage` event provides a mechanism for cross-tab communication. It is fired on a `window` when a storage area (`localStorage` or `sessionStorage`) is changed in the context of another document from the *same origin*.

### ⚙️ Solution Walkthrough
A listener is added in one tab to react to changes made in another.
\`\`\`javascript
// --- In Tab 1 ---
localStorage.setItem('myKey', 'newValue');

// --- In Tab 2 (same domain) ---
window.addEventListener('storage', (event) => {
  console.log(\`Storage changed on another tab!\`);
  console.log('Key:', event.key);         // 'myKey'
  console.log('Old Value:', event.oldValue);
  console.log('New Value:', event.newValue);
});
\`\`\`
**Note**: The event does not fire on the same page that made the change.

### 📚 Key Concepts
-   **`storage` Event**: A browser event for synchronizing state across multiple tabs.
`,
'dom-traversal-vs-query': `
### 💡 Problem Breakdown
This is a conceptual problem about choosing the right tool for finding elements in the DOM.
- **Traversal**: Using properties like `.parentElement`, `.children`, `.nextElementSibling`. This is best when you have a reference to a starting element and want to find its *direct relatives*. It is very fast.
- **Querying**: Using methods like `.querySelector()` or `.getElementById()`. This is best when you need to find an element anywhere in the document (or a subtree) based on a selector, without having a direct reference to its relatives. It is more flexible but can be slower than direct traversal.

### ⚙️ Solution Walkthrough
Choose traversal for local navigation and querying for global searches. For example, if you have an event listener on a button inside a card, and you need to find the title element *within that same card*, traversal (`button.closest('.card').querySelector('.title')`) is often a good choice. If you just need to find the main header of the whole page, querying (`document.querySelector('#main-header')`) is better.

### 📚 Key Concepts
-   **Performance vs. Flexibility**: A common trade-off in programming. Traversal is faster but less flexible; querying is more flexible but potentially slower.
`,
};