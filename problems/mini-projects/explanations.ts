export const explanations: Record<string, string> = {
    'mini-todo-app': `
### 💡 Project Breakdown
A to-do list is a classic introductory project that combines all the fundamentals of web development: data management (state), user input, DOM manipulation, and event handling. The core idea is to maintain a list of tasks that can be added, removed, or marked as done.

### ⚙️ Core Logic Walkthrough
This outlines the vanilla JavaScript logic for building the application.

1.  **State Management**:
    *   The "single source of truth" for the application is an array of objects. Each object represents a single to-do item and should have properties like a unique \`id\`, the task \`text\`, and a boolean \`completed\` status.
    *   This state should be the only thing that your manipulation functions modify. The UI should always be a reflection of this state.

2.  **Rendering the UI**:
    *   Create a \`render()\` function that takes the current state array as its input.
    *   Inside, it should clear the existing to-do list in the DOM and then loop through the state array.
    *   For each to-do object, it creates the necessary HTML elements (\`<li>\`, \`<input type="checkbox">\`, \`<span>\`, \`<button>\`) and appends them to the list.
    *   This function should be called every time the state changes to keep the UI in sync.

3.  **Adding an Item**:
    *   An event listener on a form or button gets the text from an input field.
    *   A function takes this text, creates a new to-do object (e.g., \`{ id: Date.now(), text: newText, completed: false }\`), and uses the spread syntax or \`.push()\` to add it to the state array.
    *   Call \`render()\` to update the UI.

4.  **Deleting/Toggling Items (Event Delegation)**:
    *   Add a single event listener to the parent \`<ul>\` element.
    *   When a click occurs, check \`event.target\` to see if it was a delete button or a checkbox.
    *   Get the unique \`id\` of the to-do item (e.g., from a \`data-id\` attribute on the \`<li>\` element).
    *   **To Delete**: Use \`array.filter()\` to create a new state array that excludes the to-do with the matching ID.
    *   **To Toggle**: Use \`array.map()\` to create a new state array, and for the to-do with the matching ID, return a new object with the \`completed\` property flipped (\`!todo.completed\`).
    *   Update the state with the new array and call \`render()\`.

### 📚 Key Concepts
-   **State**: The data that your application needs to remember.
-   **Single Source of Truth**: The practice of structuring your program so that all data is stored in a single place.
-   **UI as a Function of State**: A core principle in modern web development where the UI is always a direct result of rendering the current state. You don't manually change individual DOM elements; you change the state and re-render.
-   **Immutability**: When updating the state (especially for deleting/toggling), creating new arrays with methods like \`filter\` and \`map\` is preferable to modifying the existing array in place.
`,
    'api-integration': `
### 💡 Project Breakdown
This project involves building a front-end application that communicates with a third-party API (Application Programming Interface) to fetch and display data. It's a fundamental skill for building dynamic web apps that show real-world, changing information like weather, stock prices, news, or movie listings.

### ⚙️ Core Logic Walkthrough
This outlines the key steps for creating an application that displays data from an external source.

1.  **Find and Understand the API**:
    *   First, choose a public API. Many are available for free (e.g., [Public APIs](https://github.com/public-apis/public-apis)).
    *   Read its documentation carefully. You need to know:
        *   The base URL for requests.
        *   The specific "endpoint" for the data you want (e.g., \`/weather\` or \`/movies/popular\`).
        *   Any required query parameters (e.g., \`?q=London\`).
        *   If you need an API key for authentication.

2.  **Fetching the Data**:
    *   This is an asynchronous operation, so it should be done inside an \`async\` function.
    *   Use the \`fetch()\` API with the correct URL, including any query parameters and API keys.
    *   \`await\` the result of the \`fetch\` call.
    *   Check if the request was successful with \`response.ok\`. If not, throw an error.
    *   If successful, parse the JSON body of the response using \`await response.json()\`.

3.  **State Management**:
    *   You need variables to hold the application's state:
        *   One for the data itself (e.g., \`movies\`, initially an empty array).
        *   One to track loading status (e.g., \`isLoading\`, initially \`true\`).
        *   One to hold any potential errors (e.g., \`error\`, initially \`null\`).

4.  **The Main Application Flow**:
    *   When the component loads (e.g., in a \`useEffect\` hook in React or just on script load), set \`isLoading\` to \`true\`.
    *   Call your \`async\` function to fetch the data.
    *   Wrap the call in a \`try...catch\` block.
    *   **In the \`try\` block**: On success, update your data state with the fetched data and set \`error\` to \`null\`.
    *   **In the \`catch\` block**: On failure, update your error state with the error message.
    *   **In a \`finally\` block**: No matter the outcome, set \`isLoading\` to \`false\`.

5.  **Conditional Rendering**:
    *   In your HTML/JSX, use the state variables to control what is displayed:
        *   If \`isLoading\` is \`true\`, show a loading spinner.
        *   If \`error\` is not \`null\`, show the error message.
        *   If there is data, map over the data array to render the list of items.

### 📚 Key Concepts
-   **API (Application Programming Interface)**: A set of rules and definitions that allows different software applications to communicate with each other.
-   **Endpoint**: A specific URL where an API can be accessed to perform a specific function.
-   **Asynchronous Data Fetching**: The process of retrieving data from a server without blocking the main UI thread.
-   **State Management**: Keeping track of data that can change over time (\`data\`, \`isLoading\`, \`error\`) and that affects what the user sees.
-   **Conditional Rendering**: Displaying different UI elements based on the current state of the application.
`,
};