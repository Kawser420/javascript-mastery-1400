export const solvers: Record<string, Function> = {
    'mini-todo-app': () => {
        const logic = `
1. State: Use an array of objects to store todos, e.g., \`[{ id: 1, text: 'Learn JS', completed: false }]\`.
2. Add Item: Create a function that takes text input, creates a new todo object, and adds it to the state array.
3. Remove Item: Create a function that takes a todo's ID and uses \`array.filter()\` to return a new array without that todo.
4. Toggle Complete: A function that takes an ID, uses \`array.map()\` to create a new array, and flips the 'completed' boolean for the matching todo.
5. Render: A function that takes the current state array and generates the corresponding HTML to display the list. Re-run this function after every state change.
`;
        return logic.trim();
    },
    'api-integration': () => {
        const steps = `
1. Choose API: Find a free public API (e.g., OpenWeatherMap, The Movie Database). Get an API key if required.
2. Fetch Data: Use the \`fetch()\` API in an \`async\` function to make a GET request to the API endpoint.
3. Handle Response: Use \`await\` to get the response, check if it's \`ok\`, and then parse the JSON data using \`await response.json()\`.
4. Manage State: Store the fetched data in a state variable (e.g., using React's \`useState\`).
5. Render UI: Map over the data array in your state to dynamically create and display HTML elements (e.g., cards for each movie, a div for the weather details).
6. Error Handling: Wrap the fetch call in a \`try...catch\` block to display an error message if the API call fails.
`;
        return steps.trim();
    },
};