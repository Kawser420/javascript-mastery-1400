export const solvers: Record<string, Function> = {
  // mini project solver--> 01
  "mini-todo-app": () => `
1. State: Use an array of objects, e.g., \`[{ id: 1, text: 'Learn JS', completed: false }]\`.
2. UI: An input field, an 'Add' button, and a \`<ul>\` to display the list.
3. Add Item: On button click, get input value, create a new todo object, add it to the state array, and re-render.
4. Toggle Complete: Add a click listener to each list item (or checkbox). On click, find the todo by its ID in the state array, flip its 'completed' status, and re-render.
5. Remove Item: Add a delete button to each item. On click, filter the state array to exclude the todo with the matching ID, and re-render.
6. Render Function: A function that clears the current list in the DOM and re-builds it from the state array. Call this after every state change.
`,
  // mini project solver--> 02
  "mini-weather-app": () => `
1. State: Manage state for the city input, weather data (e.g., temp, description), loading status, and error messages.
2. API: Sign up for a free weather API (like OpenWeatherMap) to get an API key.
3. UI: An input for the city, a submit button, and a display area for the weather info.
4. Fetch Logic: On form submit, set loading to true. Make a \`fetch\` request to the API with the city and your API key.
5. Response Handling: Use \`async/await\` and a \`try...catch\` block. On success, parse the JSON response, update the weather data state, and set loading to false. On failure, set an error message state and set loading to false.
6. Conditional Rendering: Display a loading spinner when loading, show the error message if an error occurs, or display the formatted weather data.
`,
  // mini project solver--> 03
  "mini-quiz-app": () => `
1. State: An array of question objects (e.g., \`{ question: '...', options: [...], correct: 0 }\`), the current question index, and the user's score.
2. UI: A display for the question, a list of buttons for the options, and a display for the current score and question number.
3. Logic:
   - When the app loads, display the question at the current index.
   - Add a click listener to the option buttons. When a user clicks an option, check if their choice is correct. If so, increment the score.
   - Increment the current question index and display the next question.
   - If it was the last question, show a final results screen with the total score.
4. End/Restart: Provide a button to restart the quiz, which resets the score and current question index to their initial values.
`,
  // mini project solver--> 04
  "mini-pomodoro-timer": () => `
1. State: The current time remaining (in seconds), the current session type ('work' or 'break'), and whether the timer is running.
2. UI: A display for the timer (e.g., 25:00), Start, Pause, and Reset buttons.
3. Timer Logic: Use \`setInterval\` to decrease the time remaining by 1 every second when the timer is running. Remember to clear the interval with \`clearInterval\` when the timer is paused, reset, or finishes.
4. State Transitions: When the timer reaches 0, clear the interval. Check the current session type. If it was a 'work' session, switch to a 'break' session and set the timer to the break duration (e.g., 5 minutes). If it was a 'break', switch back to 'work'.
5. Display Formatting: Write a helper function to format the total seconds into a \`MM:SS\` string format for display.
`,
  // mini project solver--> 05
  "mini-markdown-previewer": () => `
1. State: A single state variable to hold the markdown text from the textarea.
2. UI: A layout with two main panes: a \`<textarea>\` on one side and a \`<div>\` for the HTML preview on the other.
3. Library: Use a proven markdown parsing library like 'marked' or 'Showdown'. Include its script in your HTML.
4. Event Handling: Add an \`input\` event listener to the textarea.
5. Logic: Inside the event listener, get the current text from the textarea. Pass this text to the markdown library's parsing function (e.g., \`marked.parse(text)\`). Set the \`.innerHTML\` of the preview \`<div>\` to the resulting HTML string. This will update the preview in real-time as the user types.
`,
  // mini project solver--> 06
  "mini-recipe-finder": () => `
1. State: Manage state for the search query (ingredient), an array of found recipes, loading status, and error messages.
2. API: Use a free recipe API like TheMealDB.
3. UI: An input for the ingredient, a search button, and a grid or list to display recipe cards (image, name).
4. Fetch Logic: On search, set loading to true. Make a \`fetch\` request to the API's search endpoint with the ingredient.
5. Response Handling: On success, update the recipes array state with the data from the API. On failure, set an error message. Set loading to false in a \`finally\` block.
6. Display: Use \`.map()\` to render the array of recipes. Each recipe card could be a link or button that, when clicked, shows more details in a modal or a separate view.
`,
  // mini project solver--> 07
  "mini-expense-tracker": () => `
1. State: An array of transaction objects (e.g., \`[{ id: 1, text: 'Salary', amount: 5000 }, { id: 2, text: 'Gas', amount: -40 }]\`).
2. UI: A form to add new transactions (text and amount). A list to display all transactions. A summary section to show total income, total expense, and the current balance.
3. Logic:
   - On form submit, create a new transaction object and add it to the state array.
   - Create functions to calculate the total income (sum of all positive amounts), total expense (sum of all negative amounts), and balance.
   - Use \`localStorage\` to make the transactions persist between page loads.
4. Render: A function that re-renders the transaction list and updates the summary totals whenever the state changes.
`,
  // mini project solver--> 08
  "mini-drawing-app": () => `
1. UI: A \`<canvas>\` element. Controls for color, brush size, and a 'Clear' button.
2. State: A boolean flag \`isDrawing\`, and variables for the last X and Y coordinates.
3. Canvas Context: Get the 2D rendering context from the canvas: \`canvas.getContext('2d')\`.
4. Event Handlers:
   - \`mousedown\`: Set \`isDrawing\` to true and update the last X/Y coordinates.
   - \`mouseup\`: Set \`isDrawing\` to false.
   - \`mouseout\`: Set \`isDrawing\` to false.
   - \`mousemove\`: If \`isDrawing\` is true, get the current mouse coordinates, draw a line from the last X/Y to the current X/Y using \`ctx.lineTo()\` and \`ctx.stroke()\`, and then update the last X/Y coordinates.
5. Controls: Event listeners on the color/size inputs should update the properties on the canvas context (e.g., \`ctx.strokeStyle\`, \`ctx.lineWidth\`).
`,
  // mini project solver--> 09
  "mini-music-player": () => `
1. State: An array of song file paths, the current song index, and a boolean for playing status.
2. UI: An \`<audio>\` element. Play/Pause, Next, and Previous buttons. Display for the current song title.
3. Audio API: Use the methods and properties of the HTML \`<audio>\` element (\`.play()\`, \`.pause()\`, \`.src\`).
4. Logic:
   - Play/Pause button toggles between \`audio.play()\` and \`audio.pause()\` and updates the playing status.
   - Next/Previous buttons increment/decrement the current song index, update the \`audio.src\`, and call \`.play()\`.
   - Listen for the \`ended\` event on the audio element to automatically play the next song.
`,
  // mini project solver--> 10
  "mini-memory-game": () => `
1. State: An array of card objects (e.g., \`{ id: 1, value: 'A', isFlipped: false, isMatched: false }\`). State for the currently flipped cards (max 2) and the number of moves.
2. Setup: Create the card array by duplicating a set of base cards (e.g., A, B, C...) to create pairs. Shuffle the array randomly.
3. UI: A grid to display the cards.
4. Logic:
   - On card click, flip the card (\`isFlipped = true\`) and add it to the 'flipped cards' state.
   - If two cards are flipped, check if their values match.
   - If they match, set \`isMatched = true\` for both and clear the 'flipped cards' state.
   - If they don't match, use a \`setTimeout\` to flip them back down after a short delay and clear the 'flipped cards' state.
5. Win Condition: The game is won when all cards have \`isMatched = true\`.
`,
  // mini project solver--> 11
  "mini-kanban-board": () => `
1. State: An object where keys are column IDs (e.g., 'todo', 'inprogress') and values are arrays of task objects.
2. UI: Columns representing the states. Cards within the columns representing tasks.
3. Drag and Drop API:
   - Make task cards draggable by setting \`draggable="true"\`.
   - On \`dragstart\`, store the ID of the dragged task (\`event.dataTransfer.setData\`).
   - On column \`dragover\`, call \`event.preventDefault()\` to allow dropping.
   - On \`drop\`, get the task ID and the new column ID. Update the state by removing the task from its original column array and adding it to the new column array. Re-render the UI.
4. Persistence: Use \`localStorage\` to save the state of the board.
`,
  // mini project solver--> 12
  "mini-typing-speed-test": () => `
1. State: The text prompt, the user's current input, start time, end time, and a status (waiting, typing, finished).
2. UI: A display for the text prompt, a textarea for user input, and a display for WPM/accuracy results.
3. Logic:
   - When the user starts typing in the textarea, record the \`startTime\`.
   - On the \`input\` event, compare the user's input with the corresponding part of the prompt to highlight correct/incorrect characters.
   - When the user's input length matches the prompt length, record the \`endTime\`.
   - Calculate elapsed time in minutes.
   - Calculate WPM: \`(wordCount / elapsedMinutes)\`.
   - Calculate accuracy: \`(correctChars / totalChars) * 100\`.
   - Display the results.
`,
  // mini project solver--> 13
  "mini-image-gallery": () => `
1. State: An array of image source URLs and the URL of the currently selected image for the lightbox.
2. UI: A grid of thumbnail \`<img>\` elements. A modal/lightbox component that is hidden by default.
3. Logic:
   - Use \`.map()\` to render the thumbnail images from the state array.
   - Add a click listener to each thumbnail.
   - On click, update the 'selected image' state with the URL of the clicked thumbnail and show the lightbox modal.
   - The lightbox should contain a larger \`<img>\` whose \`src\` is bound to the 'selected image' state.
   - A close button on the lightbox hides the modal and clears the 'selected image' state.
`,
  // mini project solver--> 14
  "mini-countdown-timer": () => `
1. State: The target date/time. Variables for the remaining days, hours, minutes, and seconds.
2. UI: Four display boxes for days, hours, minutes, and seconds.
3. Logic:
   - Use \`setInterval\` to run a calculation function every second.
   - Inside the function, get the current time (\`new Date()\`).
   - Calculate the total time difference in milliseconds between the target date and now.
   - Convert the difference into days, hours, minutes, and seconds using modulo and floor division.
   - Update the state with these new values.
   - The UI should re-render to show the updated time remaining.
   - If the difference is less than or equal to 0, clear the interval.
`,
  // mini project solver--> 15
  "mini-movie-db-app": () => `
1. State: Search query, an array of movie results, the selected movie's details, loading status, and error status.
2. API: Use a free movie API like TMDB (The Movie Database) or OMDb API.
3. UI: A search bar, a grid to display movie posters/titles, and a modal or separate view to show detailed information.
4. Logic:
   - On search, fetch a list of movies from the API's search endpoint. Update the movie results state.
   - Render the results. Add a click listener to each movie card.
   - When a card is clicked, use its ID to fetch detailed information from the API's details endpoint.
   - Update the 'selected movie' state and display the details in a modal.
`,
  // mini project solver--> 16
  "mini-github-profile-finder": () => `
1. State: Username input, user profile data (object), loading status, and error status (e.g., for 'user not found').
2. API: Use the public GitHub API (e.g., \`https://api.github.com/users/USERNAME\`).
3. UI: A search input and button. A display area to show the user's avatar, name, bio, followers, etc.
4. Logic:
   - On search, make a \`fetch\` request to the GitHub API with the provided username.
   - Use \`async/await\` and \`try...catch\`. Check the \`response.ok\` property to handle 404 errors specifically.
   - On success, update the profile data state. On failure, set an error message.
   - The UI should conditionally render based on the loading, error, and data states.
`,
  // mini project solver--> 17
  "mini-currency-converter": () => `
1. State: Amount to convert, 'from' currency, 'to' currency, and the calculated result.
2. API: Use a free exchange rate API (e.g., ExchangeRate-API).
3. UI: An input for the amount, two \`<select>\` dropdowns for the currencies, and a display for the result. A 'Swap' button is a nice feature.
4. Logic:
   - Fetch the latest exchange rates when the app loads. Store them in state.
   - When the amount or any currency selection changes, perform the calculation: \`amount * (rate_to / rate_from)\`. The rates are usually relative to a base currency like USD.
   - Update the result state, which updates the UI.
`,
  // mini project solver--> 18
  "mini-ecommerce-cart": () => `
1. State: An array of available products and an array for the cart items (e.g., \`[{ productId: 1, quantity: 2 }]\`).
2. UI: A product listing section with 'Add to Cart' buttons. A separate cart section showing items, quantities, price per item, and a total price.
3. Logic:
   - 'Add to Cart': When clicked, check if the item is already in the cart. If yes, increment the quantity. If no, add a new item object to the cart array.
   - 'Update Quantity': Input fields in the cart allow changing the quantity.
   - 'Remove Item': A button to filter the item out of the cart array.
   - 'Total Calculation': A function that uses \`.reduce()\` on the cart array to calculate the total price by multiplying each item's price (looked up from the products array) by its quantity.
4. Persistence: Use \`localStorage\` to save the cart state.
`,
  // mini project solver--> 19
  "mini-poll-app": () => `
1. State: A poll object with a question and an array of options (e.g., \`{ id: 1, text: 'Choice A', votes: 0 }\`).
2. UI: A display for the question. A set of radio buttons or clickable divs for the options. A results section showing each option with its vote count (e.g., as a progress bar).
3. Logic:
   - When a user votes, increment the \`votes\` count for the selected option in the state object.
   - To prevent multiple votes, you could use \`localStorage\` to store which polls the user has already voted on.
   - The results section should update automatically whenever the state changes.
4. Persistence: Use \`localStorage\` to save the vote counts so they persist.
`,
  // mini project solver--> 20
  "mini-password-generator": () => `
1. State: Variables for the desired password length, booleans for including uppercase, numbers, and symbols, and the generated password string.
2. UI: A slider or input for length. Checkboxes for the character types. A 'Generate' button and a display for the result.
3. Logic:
   - On 'Generate' click, create a string containing all possible characters based on the selected checkboxes.
   - Create another string to guarantee at least one of each selected character type is included.
   - Loop from 0 to the desired length. In each iteration, pick a random character from the possible characters string and append it to the result.
   - Shuffle the final password string to ensure randomness.
   - Update the password state to display the result.
`,
  // mini project solver--> 21
  "mini-wikipedia-search-app": () => `
1. State: Manage state for search query, search results array, loading, and error status.
2. API: Use the MediaWiki Action API. The endpoint typically looks like \`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=YOUR_QUERY&format=json&origin=*\`.
3. UI: A search input and button, and a list area to display the search results (title and snippet).
4. Fetch Logic: On form submit, make a \`fetch\` request to the API with the user's query.
5. Display: On success, parse the JSON response (the results are usually in \`response.query.search\`) and update your results state. Use \`.map()\` to render the list of results, with each title linking to the full Wikipedia article.
`,
  // mini project solver--> 22
  "mini-sortable-list": () => `
1. State: An array of items to be displayed in the list (e.g., \`[{id: 1, text: 'Item A'}, ...]\`).
2. UI: A list of elements (e.g., \`<li>\`) rendered from the state array.
3. Drag and Drop API:
   - Set \`draggable="true"\` on each list item.
   - \`dragstart\`: Store the ID of the dragged item.
   - \`dragover\`: When dragging over another list item, call \`event.preventDefault()\` and maybe add a visual indicator.
   - \`drop\`: When an item is dropped on another, get the IDs of the dragged item and the drop target item.
4. Logic: In the drop handler, find the indices of the two items in your state array. Reorder the array by removing the dragged item and inserting it before or after the drop target. Update the state, which will cause the UI to re-render in the new order.
`,
  // mini project solver--> 23
  "mini-breakout-game": () => `
1. State: Objects for the ball (position, velocity), paddle (position), and an array of brick objects (position, status). Also state for score and lives.
2. UI: A \`<canvas>\` element.
3. Game Loop: Use \`requestAnimationFrame\` to create a main game loop function that runs on every frame.
4. Logic in Loop:
   - Clear the canvas: \`ctx.clearRect(0, 0, width, height)\`.
   - Update positions: Update the ball's position based on its velocity. Move the paddle based on user input (keyboard listeners).
   - Collision Detection: Check for collisions between the ball and the walls, the paddle, and each brick.
   - Handle Collisions: If the ball hits a wall, reverse its velocity. If it hits the paddle, bounce it. If it hits a brick, remove the brick and increase the score. If the ball goes past the bottom edge, decrease a life.
   - Draw Everything: Draw the paddle, ball, and all active bricks on the canvas.
`,
  // mini project solver--> 24
  "mini-chat-app-conceptual": () => `
1. Backend: A WebSocket server (e.g., using the 'ws' library in Node.js). The server maintains a list of all connected clients.
2. Frontend State: An array of message objects (e.g., \`{ user: 'Alice', text: 'Hello!' }\`) and the current user's name.
3. WebSocket API (Client):
   - Create a new WebSocket connection: \`const ws = new WebSocket('ws://your-server-url');\`.
   - \`ws.onopen\`: Connection is established.
   - \`ws.onmessage\`: This is the crucial part. When a message is received from the server, add it to the message array state, which will update the UI.
4. Logic: When a user submits a message from an input field, send it to the server using \`ws.send(JSON.stringify({ user, text }))\`. The server then receives this message and broadcasts it to *all* connected clients. Each client's \`onmessage\` handler will then fire, displaying the new message for everyone.
`,
  // mini project solver--> 25
  "mini-bookmarking-app": () => `
1. State: An array of bookmark objects (e.g., \`[{ id: 1, name: 'Google', url: 'https://google.com' }]\`).
2. UI: A form to add a new bookmark (name and URL). A list to display the saved bookmarks.
3. Logic:
   - **Create**: On form submit, validate the input (especially the URL). Create a new bookmark object with a unique ID and add it to the state array.
   - **Read**: Render the list of bookmarks from the state array. Each bookmark should be a clickable link.
   - **Delete**: Add a delete button to each bookmark. On click, filter the state array to remove the item with the corresponding ID.
4. Persistence: Use \`localStorage.setItem()\` to save the entire bookmarks array (as a JSON string) whenever it changes. On page load, use \`localStorage.getItem()\` to initialize the state.
`,
};
